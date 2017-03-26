import React, { Component, } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from '../game';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Rummy Redux</h2>
        </div>
        <Game/>
      </div>
    );
  }
}

export default Main;
