import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider, } from 'react-redux';
import Routes from './routes';
import getStore from './store';
import './index.css';

ReactDOM.render(
  <Provider store={getStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
