import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider, } from 'react-redux';
import Routes from './routes';
import getStore from './store';
import './index.css';
import { authHandler, connHandler, onlineHandler, } from './handlers';

const store = getStore();

authHandler(store);

// connHandler(store);
onlineHandler(store);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
