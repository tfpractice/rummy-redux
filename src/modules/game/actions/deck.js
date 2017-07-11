import { Game, } from 'rummy-rules';

import { updateCurrent, } from '../../auth/actions';
import { CLEAR_GAME, DEAL, DECK_DRAW, DROP_NEXT, SET_DECK, SHIFT_DECK, UPDATE_GAME, } from '../constants';
import { init, } from '../reducer';

const clear = () => init;

export const deal = () => ({ type: DEAL, curry: Game.deal(7), });
export const draw = () => ({ type: DECK_DRAW, curry: Game.draw, });
export const dropNext = () => ({ type: DROP_NEXT, curry: Game.dropNext, });
export const shiftDeck = () => ({ type: SHIFT_DECK, curry: Game.shiftDk, });

export const updateGame = g => (dispatch, getState) => {
  Promise.resolve(({ type: UPDATE_GAME, curry: () => Game.copy(g), }))
    .then(dispatch)
    .then(res => (updateCurrent(getState().game)))
    .then(dispatch);
};

export const setDeck = cards => ({ type: SET_DECK, curry: Game.setDeck(cards), });
export const newGame = g => ({ type: CLEAR_GAME, curry: Game.reset, });
export const clearGame = g => ({ type: CLEAR_GAME, curry: clear, });
