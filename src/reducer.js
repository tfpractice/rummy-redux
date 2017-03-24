import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { auth, game, users, } from './modules';
console.log('form', form);
export default combineReducers({ auth, form, game, users, });
