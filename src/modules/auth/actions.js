// import { auth as fAuth, } from 'firebase';
import { Game, Player, } from 'rummy-rules';
import { fireUtils, rqUtils, } from '../../utils';
import { addOnline, } from '../users/actions';
import { removePlayer, } from '../game/actions';
import { LOGIN, LOGOUT, SET_CURRENT_USER, } from './constants';

const { auth, onlineRef, } = fireUtils;
const { rqActions, } = rqUtils;
const { player, } = Player;
const { findPlr, playerByID, } = Game;

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

export const setCurrentUser = u => ({ type: SET_CURRENT_USER, curry: set(u), });

export const createPlayer = u => u ? player(u.displayName, [], [], u.uid) : {};

export const authPlayer = amod => createPlayer(amod.currentUser);

export const updateCurrent = g => dispatch =>
 dispatch(setCurrentUser(findPlr(authPlayer(auth))(g)));

export const setCurrent = u => (dispatch, getState) =>
   Promise.resolve(dispatch(setCurrentUser(u)))
     .then(arg => dispatch(addOnline(u)))
     .catch(err => console.error(err.message));

export const unsetCurrent = () => dispatch =>
  Promise.resolve(dispatch(setCurrentUser()))
    .catch(err => console.error(err.message));

export const takeOffline = u =>
  u && onlineRef.child(`${u.uid}`).remove().then(() => u);

export const deleteU = u => u && u.delete();

const initlLog = { displayName: '', };

export const updateU = ({ displayName, }) => fUser =>
 fUser.updateProfile({ displayName: displayName || fUser.uid, })
   .then(() => uLoad(auth));

export const login = ({ displayName, } = initlLog) => dispatch =>
  Promise.resolve(dispatch(loginPend()))
    .then(() => auth.signInAnonymously())
    .then(updateU({ displayName, }))
    .then(u => Promise.all(
      [ loginSucc(u), setCurrent(createPlayer(u)), ].map(dispatch)))
    .catch(e => dispatch(loginFail(e.message)));

export const logout = u => dispatch =>
  Promise.resolve(dispatch(logoutPend()))
    .then(() => auth.currentUser)
    .then(takeOffline)
    .then(deleteU)
    .then(() => Promise.all(
      [ logoutSucc(), unsetCurrent(), removePlayer(u), ].map(dispatch)))
    .catch(e => dispatch(logoutFail(e.message)));
