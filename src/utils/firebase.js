import { denormalize, normalize, schema, } from 'normalizr';
import * as firebase from 'firebase';
import { Game, Player, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { DECK_ACTIONS, DISCARD_ACTIONS, GAME_ACTIONS, } from '../modules/game/constants';

const { player, } = Player;
const { shuffle, deck, } = Deck;
const { copy, } = Game;
const iPlrs = [ player('computer'), ];
const init = Game.game(iPlrs, shuffle(deck()), []);

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

export const getPresRef = id => presenceRef.child(`${id}`);
export const getOnlineRef = id => onlineRef.push(`${id}`);

export const fireMid = ({ dispatch, getState, }) => next => (action) => {
  const result = next(action);

  if (GAME_ACTIONS.has(action.type)) {
    if (action.type !== 'UPDATE_GAME') {
      db.ref('game').set(getState().game);
    }
  }
  
  return result;
};

const cSchema = new schema.Object('card');
const setSchema = new schema.Object('set', [ cSchema, ]);
const pSchema = new schema.Entity('players', {
  hand: [ cSchema, ],
  sets: [ setSchema, ],
});

const dkSchema = new schema.Entity('deck', [ cSchema, ]);
const dsSchema = new schema.Entity('discard', [ cSchema, ]);

const gSchema1 = {
  players: [ pSchema, ],
  deck: [ dkSchema, ],
  discard:  [ cSchema, ],
};
const gSchema = new schema.Entity('game', {
  players: [ pSchema, ],
  deck: [ dkSchema, ],
  discard:  [ cSchema, ],
}, {
 idAttribute: () => 'current',
 mergeStrategy: (entityA, entityB) => {
   console.log('entityA, entityB', entityA, entityB);
   return ({
      ...entityA,
      ...entityB,
      
   });
 },
 processStrategy: entity => copy(entity),

});
