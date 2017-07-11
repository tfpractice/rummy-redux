import { spread, } from 'fenugreek-collections';
import { Game, Player, Sets, } from 'rummy-rules';
import { ADD_PLAYER, CLAIM_CARDS, DECK_DRAW, PLAY, REMOVE_PLAYER, SCRAP_CARDS, SET_PLAYERS, TURN_GAME, } from '../constants';
import { drop, } from './discard';

const { addPlr, players, claimWhole, claimParts, } = Game;
const { copy, scrap, addHand, player, } = Player;

const storify = s => s instanceof Set ? spread(s) : s;

const binDrop = (...cards) => p =>
  ({ type: SCRAP_CARDS, curry: Game.dropCards(...cards)(p), });

export const turnGame = () =>
  ({ type: TURN_GAME, curry: Game.turn, });

export const setPlayers = (plrs = []) =>
  ({ type: SET_PLAYERS, curry: Game.setPlayers(plrs), });

export const addPlayer = (p = player()) =>
  ({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });

export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: Game.rmPlr(player), });

export const play = p => dispatch => set =>
  dispatch({ type: PLAY, curry: Game.play(storify(set))(p), });

export const deckDraw = p => ({ type: DECK_DRAW, curry: Game.deckDraw(p), });

export const disDrawTo = p => dispatch => c =>
  dispatch({ type: DECK_DRAW, curry: Game.drawTo(c)(p), });

export const dropCards = p => dispatch => (...cards) =>
  Promise.resolve({ type: SCRAP_CARDS, curry: Game.dropCards(...cards)(p), })
    .then(dispatch)
    .then(turnGame)
    .then(dispatch);

// .then(() => dispatch(turnGame()));
