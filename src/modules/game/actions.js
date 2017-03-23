import { Game, } from 'rummy-rules';
import * as GA from './actions';
import { ADD_PLAYER, } from './constants';

export const addPlayer = player =>
 ({ type: ADD_PLAYER, curry: Game.addPlr(player), });
 
export const turnGame = () =>
({ type: GA.TURN_GAME, curry: Game.turn, });
