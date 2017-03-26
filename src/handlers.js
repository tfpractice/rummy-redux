import { auth, connRef, onlineRef, } from './utils/firebase';
import { createPlayer, login, logout, setCurrent, } from './modules/auth/actions';
import { addUser, removeUser, setUsers, } from './modules/users/actions';
import { addPlayer, removePlayer, } from './modules/game/actions';

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
  auth.onAuthStateChanged((user) => {
    user ? console.log('AUTH:SIGNEDIN', user.toJSON().displayName)
      : console.log('loggeout');
  });
};

export const connHandler = (store) => {
  connRef.on('value', (snap) => {
    reconnected(snap) && store.dispatch(login(auth.currentUser));
  });
};

export const onlineHandler = (store) => {
  onlineRef.on('child_added', (snap) => {
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_changed', (snap) => {
    rmConn(snap) && snap.ref.remove();
    disconn(snap) && store.dispatch(logout());
    hasName(snap) && store.dispatch(addPlayer(snap.val()));
  });
  
  onlineRef.on('child_removed', (snap) => {
    hasName(snap) && store.dispatch(removePlayer(snap.val()));
  });
};
