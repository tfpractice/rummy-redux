import { Game, Player, } from 'rummy-rules';
import { map, } from 'fenugreek-collections';
import { Deck, } from 'bee52';
import { db, } from '../../../utils/firebase';
import { CLEAR_GAME, DEAL, DECK_DRAW, DROP_NEXT, SET_DECK, SHIFT_DECK, UPDATE_GAME, } from '../constants';
import { init, } from '../reducer';
import { updateCurrent, } from '../../auth/actions';

const { shuffle, deck, } = Deck;
const { setHand, } = Player;
const { deal: gDeal, dropNext: dNext, shiftDk, copy, players, } = Game;

const clear = () => init;

export const deal = () => ({ type: DEAL, curry: gDeal(7), });
export const draw = () => ({ type: DECK_DRAW, curry: Game.draw, });
export const dropNext = () => ({ type: DROP_NEXT, curry: dNext, });
export const shiftDeck = () => ({ type: SHIFT_DECK, curry: shiftDk, });

const getAuth = getState => getState().auth.user;

export const updateGame = g => (dispatch, getState) => {
  Promise.resolve(({ type: UPDATE_GAME, curry: () => copy(g), }))
    .then(dispatch)
    .then(res => (updateCurrent(g)))
    .then(dispatch);
};
export const setDeck = cards => ({ type: SET_DECK, curry: Game.setDeck(cards), });
export const newGame = g => ({ type: UPDATE_GAME, curry: Game.reset, });
export const clearGame = g => ({ type: CLEAR_GAME, curry: clear, });
