import { Game, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { GAME_ACTIONS, } from './constants';

const { shuffle, deck, } = Deck;
const init = Game.setDeck(shuffle(deck()))(Game.game());

export default (state = init, { type, curry, }) =>
  GAME_ACTIONS.has(type) ? curry(state) : state;
