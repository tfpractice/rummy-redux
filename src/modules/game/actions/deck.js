import { Game, } from 'rummy-rules';
import { db, } from '../../../utils/firebase';
import { DEAL, DECK_DRAW, DROP_NEXT, SHIFT_DECK, UPDATE_GAME, } from '../constants';

const { deal: gDeal, dropNext: dNext, shiftDk, copy, } = Game;

export const deal = () => ({ type: DEAL, curry: gDeal(7), });
export const draw = () => ({ type: DECK_DRAW, curry: Game.draw, });
export const dropNext = () => ({ type: DROP_NEXT, curry: dNext, });
export const shiftDeck = () => ({ type: SHIFT_DECK, curry: shiftDk, });
export const updateGame = g => ({ type: UPDATE_GAME, curry: () => copy(g), });
