import { Game, Player, } from 'rummy-rules';
import { ADD_PLAYER, CLAIM_CARDS, DECK_DRAW, PLAY, REMOVE_PLAYER, SET_PLAYERS, TURN_GAME, } from '../constants';
import { setCurrentUser, } from './deck';
const { addPlr, players, setPlayers: setPs, shiftDk, hasPlr, } = Game;
const { copy, scrap, addHand, matches, } = Player;

import { drop, } from './discard';

export const turnGame = () =>
({ type: TURN_GAME, curry: Game.turn, });

export const remove = u => g =>
  setPs(players(g).filter(p => p.id != u.id))(g);
  
export const updateCurrent = g => (dispatch, getState) =>
dispatch(setCurrentUser(Game.players(g).find(matches(getState.auth.user))));

export const setPlayers = (plrs = []) =>
 ({ type: SET_PLAYERS, curry: setPs, });

export const addPlayer = p =>
({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });

export const play = (...cards) =>
   ({ type: PLAY, curry: Game.play(...cards), });

export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: remove(player), });

export const deckDraw = p => ({ type: DECK_DRAW, curry: Game.deckDraw(p), });

export const claimCards = (...cards) => p => g => addPlr(addHand(...cards)(p))(g);
export const scrapCards = (...cards) => p => g => addPlr(scrap(...cards)(p))(g);

// export const deckDraw = p => g =>
//   isActive(g)(p) ? claimCards(deckNext(g))(p)(shiftDk(g)) : g;

export const disDraw = (...cards) => p => g =>
  Game.isActive(g)(p) ? claimCards(...cards)(p)(Game.disDel(...cards)(g)) : g;

const drawTo = c => p => (g) => {
  console.log('p.hand', p.hand);
  console.log('**************, **************');
  console.log(' disDraw(...Game.selectTo(c)(g))(p)(g)', disDraw(...Game.selectTo(c)(g))(p)(g));
  return disDraw(...Game.selectTo(c)(g))(p)(g);
};

export const disDrawTo = p => dispatch => (c) => {
  console.log('p', p, c);

  // dispatch(addPlayer(p));
  return dispatch({ type: DECK_DRAW, curry: Game.drawTo(c)(p), });
};

//
// Promise.resolve(Player.addHand(...cards)(p))
//   .then(addPlayer).then(dispatch)
//   .then(x => dispatch(drop(...cards)))
//   .catch(console.error);
export const dropCards = p => dispatch => (...cards) =>
 Promise.resolve(scrap(...cards)(p))
   .then(addPlayer).then(dispatch)
   .then(x => dispatch(drop(...cards)))
   .catch(console.error);
