import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider, } from 'react-redux';
import getStore from './store';
import Routes from './routes';
import './index.css';
import { authHandler, connHandler, gameHandler, onlineHandler, } from './handlers';
injectTapEventPlugin();
const store = getStore();

authHandler(store);
connHandler(store);
onlineHandler(store);
gameHandler(store);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root')
);
