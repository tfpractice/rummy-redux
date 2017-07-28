import * as firebase from 'firebase';
import { GAME_ACTIONS, } from '../modules/game/constants';

export const config = {
  apiKey: process.env.REACT_APP_RUMMY_FIREBASE_KEY,
  authDomain: 'tfprummy.firebaseapp.com',
  databaseURL: 'https://tfprummy.firebaseio.com',
  storageBucket: 'tfprummy.appspot.com',
  messagingSenderId: '333061202480',
};

export const fireApp = firebase.initializeApp(config);
export const db = fireApp.database();
export const auth = fireApp.auth();
export const connRef = db.ref('.info/connected');
export const onlineRef = db.ref('online');
export const pushRef = onlineRef.push();
export const presenceRef = db.ref('connections');
export const gameRef = db.ref('game');
export const getPresRef = id => presenceRef.child(`${id}`);
export const getOnlineRef = id => onlineRef.push(`${id}`);

export const fireMid = ({ dispatch, getState, }) => next => (action) => {
  const result = next(action);

  if (GAME_ACTIONS.has(action.type)) {
    if (action.type !== 'UPDATE_GAME' && getState().game.players.length) {
      gameRef.set(getState().game);
    }
  }

  return result;
};
