import React, { Component, } from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import logo from './logo.svg';
import './main.css';
import Game from '../game';

class Main extends Component {
  render() {
    return (
      <Grid item className="App">
        <Grid item className="App-header">
          <Text type="headline">Welcome to Rummy Redux</Text>
          <Text type="headline">Sign in to start a new game</Text>
        </Grid>
        <Grid item xs={12} >
          <Game/>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
