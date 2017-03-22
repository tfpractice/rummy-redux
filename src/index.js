import React from 'react';
import ReactDOM from 'react-dom';
import { Boiler as App } from './components';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
