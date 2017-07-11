import { auth, connRef, db, onlineRef, } from './utils/firebase';
import { login, logout, } from './modules/auth/actions';

import { addPlayer, removePlayer, updateGame, } from './modules/game/actions';

const loggedIn = () => !!auth.currentUser;
const loggedOut = () => !loggedIn();
const getUser = () => loggedIn() && auth.currentUser;
const authID = () => loggedIn() ? getUser.uid : '';

const matchID = val => val == authID();
const authSnap = snap => matchID(snap.key);
const nonAuth = snap => !authSnap(snap);

const hasVal = snap => !!snap.val();
const reconnected = snap => hasVal(snap) && loggedIn();
const hasName = snap => snap.hasChild('name');
const hasConn = snap => hasName(snap) && snap.hasChild('connections');
const noConn = snap => hasName(snap) && !hasConn(snap);

const isCurrent = snap => hasName(snap) && authSnap(snap);
const isAlt = snap => hasName(snap) && nonAuth(snap);
const curDiscon = snap => isCurrent(snap) && noConn(snap);
const altDiscon = snap => isAlt(snap) && noConn(snap);
const connKey = snap => snap.key === 'connections';

export const authHandler = (store) => {
  auth.onAuthStateChanged((u) => {
    console.log('onAuthStateChanged', u);
  });
};

export const connHandler = (store) => {
  connRef.on('value', (snap) => {
    reconnected(snap) && store.dispatch(login(getUser()));
  });
};

export const onlineHandler = (store) => {
  onlineRef.once('child_added', (snap) => {
    // console.log('conlineref ONCE child added');
    
    hasName(snap) && store.dispatch(removePlayer({ id: 'computer', }));
  });
  onlineRef.on('child_added', (snap) => {
    // console.log('conlineref child added');
    
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_changed', (snap) => {
    if (curDiscon(snap)) {
      // console.log('child_changed curDiscon(snap)', snap.key, snap.val());
      
      store.dispatch(logout());
    } else if (noConn(snap)) {
      // console.log('child_changed noConn(snap)', snap.key, snap.val());
      snap.ref.remove();

      // setTimeout(() => {
      // snap.ref.remove();
      // }, 1000);
    } else if (hasConn(snap)) {
      // console.log('child_changed hasConn(snap)', snap.key, snap.val());
      
      store.dispatch(addPlayer(snap.val()));
    }
  });
  
  onlineRef.on('child_removed', (snap) => {
    // console.log('child removed', snap.val());
    if (noConn(snap)) {
      store.dispatch(removePlayer(snap.val()));
    }
    
    if (curDiscon(snap)) {
      // console.log('child_removed alternate curDiscon disconnected', snap.val(), snap.key());
    }
    
    if (altDiscon(snap)) {
      // console.log('child_removed alternate altDiscon disconnected', snap.val(), snap.key);
    }
  });
};

const gref = db.ref('game');

// const deckRef = gref.child('deck');
// const disRef = gref.child('discard');

export const gameHandler = (store) => {
  gref.on('value', (snap) => {
    if (hasVal(snap)) {
      store.dispatch(updateGame(snap.val()));
    }
  });
};
