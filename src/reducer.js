import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { game } from './modules';

export default combineReducers({ form, game, });
