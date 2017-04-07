import { auth, connRef, db, onlineRef, } from './utils/firebase';
import { createPlayer, login, logout, setCurrent, updateCurrent, } from './modules/auth/actions';
import { addUser, removeUser, setUsers, } from './modules/users/actions';
import { addPlayer, removePlayer, setCurrentUser, setDeck, setDiscard, updateGame, } from './modules/game/actions';

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
    u ? console.log('SIGNEDIN', u.toJSON()) : console.log('SIGNEDOUT');

    u ? store.dispatch(login(u)) : store.dispatch(logout());
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
    rmConn(snap) && snap.ref.remove();
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_removed', (snap) => {
    hasName(snap) && store.dispatch(removePlayer(snap.val()));
  });
};

const gref = db.ref('game');
const deckRef = gref.child('deck');
const disRef = gref.child('discard');

export const gameHandler = (store) => {
  gref.on('value', (snap) => {
    if (hasVal(snap)) {
      store.dispatch(updateGame(snap.val()));
      
      // const plr = snap.val().players.find(({ id, }) => matchID(id));
      //
      // store.dispatch(updateCurrent(snap.val()));
    }
  });
};
