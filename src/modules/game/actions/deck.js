import { Game, } from 'rummy-rules';
import { fireUtils, } from '../../../utils';

import { unsetCurrent, updateCurrent, } from '../../auth/actions';
import {
  CLEAR_GAME,
  DEAL,
  DECK_DRAW,
  DROP_NEXT,
  SET_DECK,
  SHIFT_DECK,
  UPDATE_GAME,
} from '../constants';
import { init, } from '../reducer';

const { auth, gameRef, onlineRef, } = fireUtils;

const clear = () => init;

export const deal = () => ({ type: DEAL, curry: Game.deal(7), });
export const draw = () => ({ type: DECK_DRAW, curry: Game.draw, });
export const dropNext = () => ({ type: DROP_NEXT, curry: Game.dropNext, });
export const shiftDeck = () => ({ type: SHIFT_DECK, curry: Game.shiftDk, });

export const updateGame = g => (dispatch, getState) => {
  Promise.resolve({ type: UPDATE_GAME, curry: () => Game.copy(g), })
    .then(dispatch)
    .then(res => updateCurrent(getState().game))
    .then(dispatch);
};

export const setDeck = cards => ({
  type: SET_DECK,
  curry: Game.setDeck(cards),
});
export const newGame = g => ({ type: CLEAR_GAME, curry: Game.reset, });
export const clearGame2 = g => ({ type: CLEAR_GAME, curry: clear, });

// const clear = () => Game.setPlayers([])(Game.game());

export const clearGame = game => (dispatch) => {
  Promise.resolve()

    // Promise.resolve(logout())
    // .then(dispatch)
    .then(() => auth.currentUser)
    .then(u => u && u.delete())
    .then(() => onlineRef.remove())
    .then(() => gameRef.remove())
    .then(() => unsetCurrent())
    .then(dispatch)
    .then(() => ({ type: CLEAR_GAME, curry: clear, }))
    .then(dispatch);
};
