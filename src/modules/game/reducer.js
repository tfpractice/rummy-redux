import { Game, Player, } from 'rummy-rules';
import { Deck, } from 'bee52';
import { db, } from '../../utils/firebase';
import { GAME_ACTIONS, } from './constants';

const { player, } = Player;
const { shuffle, deck, } = Deck;
const iPlrs = [ player('computer'), ];
const init = Game.game(iPlrs, shuffle(deck()), []);

export default (state = init, { type, curry, }) => {
  console.log('JSON.stringify(state)', JSON.stringify(state));

  db.ref('game').set(JSON.stringify(state));
  return GAME_ACTIONS.has(type) ? curry(state) : state;
};
