import { Game, Player, } from 'rummy-rules';
import * as GA from './actions';
import { ADD_PLAYER, DEAL, DRAW_TO, DROP_NEXT, REMOVE_PLAYER, SET_PLAYERS, SHIFT_DECK, } from './constants';

const { addPlr, players, setPlayers: setPs, shiftDk, } = Game;
const { copy, } = Player;

// export const setPlayers = plrs =>
// ({ type: SET_PLAYERS, curry: setPs(plrs), });

export const addPlayer = p => ({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });
 
export const remove = u => (g) => {
  console.log('remobeu', u);
  return setPs(players(g).filter(p => p.id != u.id))(g);
};
 
export const shiftDeck = () =>
 ({ type: SHIFT_DECK, curry: shiftDk, });
 
export const deal = () => ({ type: DEAL, curry: Game.deal(7), });
export const dropNext = () => ({ type: DROP_NEXT, curry: Game.dropNext, });
export const drawTo = c => ({ type: DRAW_TO, curry: Game.drawTo(c), });
export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: remove(player), });
  
export const turnGame = () =>
({ type: GA.TURN_GAME, curry: Game.turn, });
