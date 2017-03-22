import { GAME_ACTIONS, } from './constants';
import { Game, } from 'rummy-rules';
import { Deck, } from 'bee52';
const { shuffle, deck, } = Deck;
const init = Game.setDeck(shuffle(deck()));

export default (state = init, { type, curry, }) =>
  GAME_ACTIONS.has(type) ? curry(state) : state;
