import { auth as fAuth, } from 'firebase';
import { Player, } from 'rummy-rules';
import { fireUtils, rqUtils, } from '../../utils';
import { addOnline, addUser, goOffline, } from '../users/actions';
import { LOGIN, LOGOUT, SET_CURRENT_USER, } from './constants';
const { auth, onlineRef, } = fireUtils;
const { rqConstants, rqActions, } = rqUtils;
const { player, setID, setName, } = Player;

const set = user => () => user;
const unset = () => () => null;

const loginPend = rqActions(LOGIN).pending;
const loginFail = rqActions(LOGIN).failure;
const loginSucc = rqActions(LOGIN).success;

const logoutPend = rqActions(LOGOUT).pending;
const logoutFail = rqActions(LOGOUT).failure;
const logoutSucc = rqActions(LOGOUT).success;

export const setCurrentUser = u => ({ type: SET_CURRENT_USER, curry: set(u), });

export const createPlayer = u => setName(u.displayName)(setID(u.uid)(u));

export const setCurrent = u => dispatch =>
   Promise.resolve(dispatch(setCurrentUser(u)))
     .then((arg) => {
       console.log('preparing add', arg, JSON.stringify(u));
       return dispatch(addOnline(u));
     })
     .catch(err => console.error(err.message));

export const unsetCurrent = () => dispatch =>
        Promise.resolve(dispatch(setCurrentUser(null)))

          .catch(err => console.error(err.message));

export const takeOffline = u => dispatch =>
  onlineRef.child(u.id).remove();

export const login = ({ displayName, } = { displayName: '', }) => dispatch =>
   Promise.resolve(dispatch(loginPend()))
     .then(() => auth.signInAnonymously()
       .then(u =>
        u.updateProfile({ displayName: (displayName || u.uid), })
          .then(() => {
            console.log('user profile updatedAt', u);
            console.log('createPlayer(u)', createPlayer(u));
            return Promise.all(
        [ loginSucc(u), setCurrent(createPlayer(u)), ].map(dispatch));
          }))
       .catch(e => dispatch(loginFail(e.message))));

export const logout = u => (dispatch) => {
  console.log('logginh outr');
  return Promise.resolve(dispatch(logoutPend()))
    .then(() => auth.currentUser)
    .then((u) => {
      console.log('logoout', u);
      return u && goOffline({ id: u.uid, })
        .then(() => u.delete())

      // return auth.signOut()
      //   .then(() => {
      //     console.log('goig off');
      //     return u && goOffline({ id: u.uid, });
      //   })
        .then(() => Promise.all(
          [ logoutSucc(null), unsetCurrent(null), ].map(dispatch)));
      
        // .then((arf) => {
        //   console.log('now delete', u, arf);
        //   return u.delete();
        // });
    })

    .catch(e => dispatch(logoutFail(e.message)));
};
