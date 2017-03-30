import { Game, Player, } from 'rummy-rules';
import { ADD_PLAYER, REMOVE_PLAYER, SET_PLAYERS, TURN_GAME, } from '../constants';

const { addPlr, players, setPlayers: setPs, shiftDk, } = Game;
const { copy, scrap, } = Player;

import { drop, } from './discard';

export const turnGame = () =>
({ type: TURN_GAME, curry: Game.turn, });

export const remove = u => g =>
setPs(players(g).filter(p => p.id != u.id))(g);

export const setPlayers = (plrs = []) =>
 ({ type: SET_PLAYERS, curry: setPs, });

export const addPlayer = p =>
({ type: ADD_PLAYER, curry: Game.addPlr(copy(p)), });

export const removePlayer = player =>
  ({ type: REMOVE_PLAYER, curry: remove(player), });

export const dropCards = p => dispatch => (...cards) => {
  console.log('p', p);
  console.log('cards', cards, scrap(...cards)(p), p);
  return Promise.resolve(scrap(...cards)(p))
    .then((y) => {
      console.log('y', y);
      return addPlayer(y);
    })

    // .then(addPlayer)
    .then(dispatch)
    .then((x) => {
      console.log('x', x);
      return dispatch(drop(...cards));
    })
    .catch(console.error);
};
