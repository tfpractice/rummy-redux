import { createLogger as makeLog, } from 'redux-logger';
import thunk from 'redux-thunk';
import { fireMid, } from './utils/firebase';
import { applyMiddleware as applyMid, createStore, } from 'redux';
import rootR from './reducer';

const predicate = (getState, action) => action.type;
const collapsed = (getState, action) => action.type;
const log = makeLog({ collapsed, predicate, });

export default state => applyMid(thunk, log, fireMid)(createStore)(rootR, state);
