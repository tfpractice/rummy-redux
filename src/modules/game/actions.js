import { Game, } from 'rummy-rules';
import * as GA from './actions';

export const addPlayer = player =>
 ({ type: GA.ADD_PLAYER, curry: Game.addPlr(player), });
 
export const turnGame = () =>
({ type: GA.TURN_GAME, curry: Game.turn, });
