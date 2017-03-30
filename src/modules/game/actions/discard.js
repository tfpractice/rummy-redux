import { Game, Player, } from 'rummy-rules';
import { DIS_ADD, DRAW_TO, } from '../constants';

const { addPlr, players, setPlayers: setPs, shiftDk, } = Game;
const { copy, } = Player;

export const drawTo = c => ({ type: DRAW_TO, curry: Game.drawTo(c), });
export const drop = (...cards) => ({ type: DIS_ADD, curry: Game.drop(...cards), });
