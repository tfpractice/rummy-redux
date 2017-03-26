import { auth as fAuth, } from 'firebase';
import { Player, } from 'rummy-rules';
import { fireUtils, rqUtils, } from '../../utils';
import { addOnline, addUser, goOffline, } from '../users/actions';
import { removePlayer, } from '../game/actions';
import { LOGIN, LOGOUT, SET_CURRENT_USER, } from './constants';

const { auth, onlineRef, } = fireUtils;
const { rqActions, } = rqUtils;
const { player, setID, setName, } = Player;

const set = user => () => user;
const unset = () => () => null;

const loginPend = rqActions(LOGIN).pending;
const loginFail = rqActions(LOGIN).failure;
const loginSucc = rqActions(LOGIN).success;

const logoutPend = rqActions(LOGOUT).pending;
const logoutFail = rqActions(LOGOUT).failure;
const logoutSucc = rqActions(LOGOUT).success;

const uCheck = auth => !!auth.currentUser;
const getCurrent = a => uCheck(a) && a.currentUser;
const uLoad = a => getCurrent(a).reload().then(() => {
  console.log('uLoad(a)', getCurrent(a).toJSON().displayName);
  return getCurrent(a);
});
  
export const getCurrentUser = aMod => uCheck(aMod)
  ? uLoad(aMod) : aMod.signInAnonymously();
  
export const setCurrentUser = u => ({ type: SET_CURRENT_USER, curry: set(u), });

export const createPlayer = (u) => {
  let a;

  // console.log('user exis', u);

  return u.uid ? setName(u.displayName)(setID(u.uid)(u)) : null;
};

export const setCurrent = u => dispatch =>
  Promise.resolve(dispatch(setCurrentUser(u)))
    .then(arg => dispatch(addOnline(u)))
    .catch(err => console.error(err.message));

export const unsetCurrent = () => dispatch =>
  Promise.resolve(dispatch(setCurrentUser(null)))
    .catch(err => console.error(err.message));

export const takeOffline = u => dispatch =>
  onlineRef.child(u.id).remove();
  
const initlLog = { displayName: '', };

export const updateUser = props => (fUser) => {
  console.log('fUser.toJSON().displayName', getCurrent(auth).toJSON().displayName);
  return fUser.updateProfile(props).then(() => {
    console.log('auth.currentUser.toJSON()', getCurrent(auth).toJSON().displayName);
    return uLoad(auth);

    // return fUser;
  });
};

export const login = ({ displayName, } = initlLog) => dispatch =>
   Promise.resolve(dispatch(loginPend()))
     .then(() => {
       console.log('login.displayName?', getCurrentUser(auth).displayName);
       return auth.signInAnonymously()
         .then(u =>
           updateUser({ displayName: (displayName || u.uid), })(u)
             .then(() => Promise.all(
        [ loginSucc(u), setCurrent(createPlayer(u)), ].map(dispatch))))
         .catch(e => dispatch(loginFail(e.message)));
     });

export const logout = u => dispatch =>
 Promise.resolve(dispatch(logoutPend()))
   .then(() => auth.currentUser)
   .then(u => u && goOffline({ id: u.uid, })
     .then(() => u.delete())
     .then(() => Promise.all(
      [ logoutSucc(null), unsetCurrent(null), removePlayer(u), ].map(dispatch))))
   .catch(e => dispatch(logoutFail(e.message)));
