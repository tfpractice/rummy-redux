import { Game, Player, } from 'rummy-rules';
import { ADD_PLAYER, CLAIM_CARDS, DECK_DRAW, PLAY, REMOVE_PLAYER, SCRAP_CARDS, SET_PLAYERS, TURN_GAME, } from '../constants';
const { addPlr, players, setPlayers: setPs, shiftDk, hasPlr, } = Game;
const { copy, scrap, addHand, } = Player;

import { drop, } from './discard';

export const turnGame = () =>
({ type: TURN_GAME, curry: Game.turn, });

export const setPlayers = (plrs = []) =>
 ({ type: SET_PLAYERS, curry: setPs, });

export const addPlayer = p =>
({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });

export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: Game.rmPlr(player), });
  
export const play = (...cards) =>
   ({ type: PLAY, curry: Game.play(...cards), });

export const deckDraw = p => ({ type: DECK_DRAW, curry: Game.deckDraw(p), });

export const disDrawTo = p => dispatch => c =>
 dispatch({ type: DECK_DRAW, curry: Game.drawTo(c)(p), });

export const dropCards = (...cards) => dispatch => p =>
  dispatch({ type: SCRAP_CARDS, curry: Game.dropCards(...cards)(p), });
