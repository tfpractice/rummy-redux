import { Game, Player, } from 'rummy-rules';
import { ADD_PLAYER, DEAL, DRAW_TO, DROP_NEXT, REMOVE_PLAYER, SET_PLAYERS, SHIFT_DECK, } from '../constants';

const { addPlr, players, setPlayers: setPs, shiftDk, } = Game;
const { copy, } = Player;

export const drawTo = c => ({ type: DRAW_TO, curry: Game.drawTo(c), });
