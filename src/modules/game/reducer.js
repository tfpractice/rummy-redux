import { Game, Player, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { GAME_ACTIONS, } from './constants';
const { player, } = Player;
const { shuffle, deck, } = Deck;
const iPlrs = [ player('p0'), player('p1'), ];
const init = Game.setDeck(shuffle(deck()))(Game.game(iPlrs));

export default (state = init, { type, curry, }) =>
  GAME_ACTIONS.has(type) ? curry(state) : state;
