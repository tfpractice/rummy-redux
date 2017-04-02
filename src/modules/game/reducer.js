import { denormalize, normalize, schema, } from 'normalizr';
import { Game, Player, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { db, } from '../../utils/firebase';

import { GAME_ACTIONS, } from './constants';

const { player, } = Player;
const { shuffle, deck, } = Deck;
const iPlrs = [ player('computer'), ];
const init = Game.game(iPlrs, shuffle(deck()), []);

const cSchema = new schema.Object('card');
const setSchema = new schema.Object('set', [ cSchema, ]);
const pSchema = new schema.Entity('players', {
  hand: [ cSchema, ],
  sets: [ setSchema, ],
});

const dkSchema = new schema.Entity('deck', [ cSchema, ]);
const dsSchema = new schema.Entity('discard', [ cSchema, ]);

const gSchema = new schema.Entity('game', {
  players: [ pSchema, ],
  deck: [ dkSchema, ],
  discard:  [ cSchema, ],
}, { idAttribute: g => 'current', });

// console.log('normalize(state,gSchema)', normalize(init, gSchema));
// console.log('denormalize', denormalize(init, gSchema));

export default (state = init, { type, curry, }) =>
GAME_ACTIONS.has(type) ? curry(state) : state;
