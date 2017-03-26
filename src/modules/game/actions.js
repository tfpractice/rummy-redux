import { Game, Player, } from 'rummy-rules';
import * as GA from './actions';
import { ADD_PLAYER, REMOVE_PLAYER, SET_PLAYERS, SHIFT_DECK, } from './constants';

const { addPlr, players, setPlayers, shiftDk, } = Game;
const { copy, } = Player;

export const addPlayer = p =>
 ({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });
 
export const remove = ({ id, }) => g =>
 setPlayers(players(g).map(p => p.id != id))(g);
 
export const shiftDeck = () =>
 ({ type: SHIFT_DECK, curry: shiftDk, });
export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: remove(player), });
  
export const turnGame = () =>
({ type: GA.TURN_GAME, curry: Game.turn, });
