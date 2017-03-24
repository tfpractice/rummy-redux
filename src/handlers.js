import { auth, connRef, onlineRef, } from './utils/firebase';
import { createPlayer, login, logout, setCurrent, } from './modules/auth/actions';
import { addUser, removeUser, setUsers, } from './modules/users/actions';
import { addPlayer, } from './modules/game/actions';

export const authHandler = (store) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('AUTH:SIGNEDIN.', user);
    } else {
      console.log('AUTH:austStateChange.');
    }
  });
};

export const connHandler = (store) => {
  connRef.on('value', (snap) => {
    if (snap.val()) {
      console.log('somone connected', snap.val());

      auth.currentUser && store.dispatch(login());
    } else {
      console.log('CONN:user disconnected');
    }
  });
};

export const onlineHandler = (store) => {
  const loggedIn = () => auth.currentUser;
  const authID = () => loggedIn() && auth.currentUser.uid;
  const matchID = val => val == authID();

  onlineRef.limitToLast(10).on('child_added', (snap) => {
    console.log('child_added');

    store.dispatch(addUser(snap.val()));

    // snap.hasChild('connections') || snap.ref.remove();
  });
  
  onlineRef.limitToLast(10).on('child_changed', (snap) => {
    console.log('child_changed');
    if (!snap.hasChild('connections')) {
      if (matchID(snap.key)) {
        store.dispatch(logout());
      } else {
        snap.ref.remove();
      }
    }
  });

  onlineRef.limitToLast(10).on('child_removed', (snap) => {
    console.log('child_removed');

    store.dispatch(removeUser(snap.val()));
  });
};
