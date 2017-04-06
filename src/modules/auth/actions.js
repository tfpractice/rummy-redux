import { auth as fAuth, } from 'firebase';
import { Game, Player, } from 'rummy-rules';
import { fireUtils, rqUtils, } from '../../utils';
import { addOnline, addUser, goOffline, } from '../users/actions';
import { removePlayer, } from '../game/actions';
import { LOGIN, LOGOUT, SET_CURRENT_USER, } from './constants';

const { auth, onlineRef, } = fireUtils;
const { rqActions, } = rqUtils;
const { player, setID, setName, matches, } = Player;

const set = (user = {}) => () => user;
const unset = () => () => {};

const loginPend = rqActions(LOGIN).pending;
const loginFail = rqActions(LOGIN).failure;
const loginSucc = rqActions(LOGIN).success;

const logoutPend = rqActions(LOGOUT).pending;
const logoutFail = rqActions(LOGOUT).failure;
const logoutSucc = rqActions(LOGOUT).success;

const uCheck = auth => !!auth.currentUser;
const getCurrent = a => uCheck(a) && a.currentUser;
const uLoad = a => getCurrent(a).reload().then(() => getCurrent(a));

export const getCurrentUser = aMod => uCheck(aMod)
  ? uLoad(aMod) : aMod.signInAnonymously();

export const setCurrentUser = u => ({ type: SET_CURRENT_USER, curry: set(u), });

export const getUser = getState => getState().auth.user;
export const getGame = getState => getState().game;
export const getPlayers = getState => Game.players(getState().game);
export const findAuthPlr = getState => getPlayers(getState).find(matches(getUser(getState)));
export const findPlayer = getState => u => getPlayers(getState).find(matches(u));

export const createPlayer = u =>
u.uid ? setName(u.displayName)(setID(u.uid)(u)) : {};

export const getPlayer = gs => u => findPlayer(gs)(u) || createPlayer(u);

export const updateCurrent = g => (dispatch, getState) =>
dispatch(setCurrentUser(g.players.find(matches(getUser(getState)))));

export const updateCurrent2 = u => (dispatch, getState) =>
dispatch(setCurrentUser(getPlayer(getState)(u)));

export const setCurrent = u => (dispatch, getState) => {
  console.log('setCurrentuBefore', u);

  // console.log('getPlayer(getState)(u)', getPlayer(getState)(u));
  // console.log('findPlayer(getState)', findPlayer(getState));

  // Promise.resolve(getPlayer(getState)(u))
  //   .then((plr) => { console.log('getPlayer plr', plr); });
  return Promise.resolve(dispatch(setCurrentUser(u)))
    .then(arg => dispatch(addOnline(u)))
    .catch(err => console.error(err.message));
};

export const unsetCurrent = () => dispatch =>
  Promise.resolve(dispatch(setCurrentUser()))
    .catch(err => console.error(err.message));

export const takeOffline = u => dispatch =>
  onlineRef.child(u.id).remove();

const initlLog = { displayName: '', };

export const updateU = props => fUser => fUser.updateProfile(props).then(() => uLoad(auth));

export const login = ({ displayName, } = initlLog) => dispatch =>
   Promise.resolve(dispatch(loginPend()))
     .then(() => auth.signInAnonymously())
     .then(updateU({ displayName: (displayName || auth.currentUser.uid), }))
     .then((u) => {
       console.log('createPlayer(u)', createPlayer(u));
       return Promise.all(
        [ loginSucc(u), setCurrent(createPlayer(u)), ].map(dispatch));
     })
     .catch(e => dispatch(loginFail(e.message)));

export const logout = u => dispatch =>
 Promise.resolve(dispatch(logoutPend()))
   .then(() => auth.currentUser)
   .then((u) => {
     console.log('logout u', u);
     return u && goOffline({ id: u.uid, })
       .then(() => u.delete())
       .then(() => Promise.all(
      [ logoutSucc(), unsetCurrent(), removePlayer(u), ].map(dispatch)));
   })
   .catch(e => dispatch(logoutFail(e.message)));
