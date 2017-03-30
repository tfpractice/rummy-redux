import { Game, Player, } from 'rummy-rules';
import { ADD_PLAYER, REMOVE_PLAYER, SET_PLAYERS, TURN_GAME, } from '../constants';

const { addPlr, players, setPlayers: setPs, shiftDk, } = Game;
const { copy, } = Player;

export const turnGame = () =>
({ type: TURN_GAME, curry: Game.turn, });

export const remove = u => g =>
setPs(players(g).filter(p => p.id != u.id))(g);

export const setPlayers = (plrs = []) =>
 ({ type: SET_PLAYERS, curry: setPs, });

export const addPlayer = p =>
({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });

export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: remove(player), });
