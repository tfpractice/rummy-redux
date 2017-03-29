import React, { Component, } from 'react';
import logo from './logo.svg';
import './main.css';
import Layout from 'material-ui/Layout';
import Game from '../game';

class Main extends Component {
  render() {
    return (
      <Layout item className="App">
        <Layout item className="App-header">
          <h2>Welcome to Rummy Redux</h2>
          <h2>Sign in to start a new game</h2>

        </Layout>
        <Layout xs={12} />
        <Game/>
      </Layout>
    );
  }
}

export default Main;
