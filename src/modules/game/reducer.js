import { Game, Player, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { db, } from '../../utils/firebase';

import { GAME_ACTIONS, } from './constants';

const { player, } = Player;
const { shuffle, deck, } = Deck;
const { copy, } = Game;
const iPlrs = [ player('computer'), ];

export const init = Game.game(iPlrs, shuffle(deck()), []);

export default (state = init, { type, curry, }) =>
  GAME_ACTIONS.has(type) ? curry(state) : state;
