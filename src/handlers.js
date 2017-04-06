import { auth, connRef, db, onlineRef, } from './utils/firebase';
import { createPlayer, login, logout, setCurrent, } from './modules/auth/actions';
import { addUser, removeUser, setUsers, } from './modules/users/actions';
import { addPlayer, removePlayer, setCurrentUser, setDeck, setDiscard, updateCurrent, updateGame, } from './modules/game/actions';

const loggedIn = () => !!auth.currentUser;
const authID = () => loggedIn() && auth.currentUser.uid;
const matchID = val => val == authID();

const hasVal = snap => !!snap.val();
const reconnected = snap => hasVal(snap) && loggedIn();
const hasName = snap => snap.hasChild('name');
const noConn = snap => !snap.hasChild('connections');

const userUpdate = snap => hasName(snap) && matchID(snap.key);
const disconn = snap => hasName(snap) && noConn(snap) && matchID(snap.key);
const rmConn = snap => hasName(snap) && noConn(snap) && !matchID(snap.key);

export const authHandler = (store) => {
  auth.onAuthStateChanged((u) => {
    // u && store.dispatch(login(createPlayer(u)));
    u ? store.dispatch(login(u)) : store.dispatch(logout());
    u ? console.log('SIGNEDIN', u.displayName) : console.log('SIGNEDOUT');
  });
};

export const connHandler = (store) => {
  connRef.on('value', (snap) => {
    reconnected(snap) && store.dispatch(login(auth.currentUser))
      ;
  });
};

export const onlineHandler = (store) => {
  onlineRef.once('child_added', (snap) => {
    hasName(snap) && store.dispatch(removePlayer({ id: 'computer', }));
  });
  onlineRef.on('child_added', (snap) => {
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_changed', (snap) => {
    rmConn(snap) && console.log(' child_changed snap.val()', snap.val());

    // disconn(snap) && store.dispatch(logout());
    rmConn(snap) && snap.ref.remove();
    hasName(snap) && console.log('PLAYER UPDATED', snap.val());
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_removed', (snap) => {
    console.log('child_removed snap.val()', snap.val());

    hasName(snap) && store.dispatch(removePlayer(snap.val()));
  });
};

const gref = db.ref('game');
const deckRef = gref.child('deck');
const disRef = gref.child('discard');

export const gameHandler = (store) => {
  // gref.on('child_added', (snap) => {
  //   console.log('snap.key', snap.key);
  //
  //   console.log('child_addedsnap.val()', snap.val());
  //   hasName(snap) && store.dispatch(addPlayer(snap.val()));
  // });
  // deckRef.on('value', (snap) => {
  //   console.log('DECK VALUE CHANGE', snap.val());
  //
  //   store.dispatch(setDeck(snap.val()));
  // });
  // disRef.on('value', (snap) => {
  //   console.log('discard VALUE CHANGE', snap.val());
  //
  //   store.dispatch(setDeck(snap.val()));
  // });

  gref.on('value', (snap) => {
    console.log('GAME VALUE CHANGE', snap.val());

    // hasVal(snap) && Promise.resolve(store.dispatch(updateGame(snap.val())))
    //   .then(() => store.dispatch(updateCurrent(snap.val())))
    //   .catch(console.error);
    hasVal(snap) && console.log('snap.val().players', snap.val().players);
    hasVal(snap) && console.log('MATCHID', snap.val().players.find(({ id, }) => matchID(id)));
  
    hasVal(snap) && store.dispatch(updateGame(snap.val()));
    if (hasVal(snap)) {
      const plr = snap.val().players.find(({ id, }) => matchID(id));

      store.dispatch(updateCurrent(snap.val()));
      store.dispatch(setCurrentUser(plr));
    }

    // hasVal(snap) && store.dispatch(updateCurrent(snap.val()));
  });
};
