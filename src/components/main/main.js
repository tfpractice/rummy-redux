import React, { Component, } from 'react';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import logo from './logo.svg';
import './main.css';
import Game from '../game';

class Main extends Component {
  render() {
    return (
      <Layout item className="App">
        <Layout item className="App-header">
          <Text type="headline">Welcome to Rummy Redux</Text>
          <Text type="headline">Sign in to start a new game</Text>
        </Layout>
        <Layout xs={12} >
          <Game/>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
