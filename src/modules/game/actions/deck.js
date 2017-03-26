import { Game, } from 'rummy-rules';
import { DEAL, DROP_NEXT, SHIFT_DECK, } from '../constants';

const { deal: gDeal, dropNext: dNext, shiftDk, } = Game;

export const deal = () => ({ type: DEAL, curry: gDeal(7), });
export const dropNext = () => ({ type: DROP_NEXT, curry: dNext, });
export const shiftDeck = () => ({ type: SHIFT_DECK, curry: shiftDk, });
