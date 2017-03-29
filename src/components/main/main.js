import React, { Component, } from 'react';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import logo from './logo.svg';
import './main.css';
import Game from '../game';

import SwipeableViews from 'react-swipeable-views';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: { background: '#FEA900', },
  slide2: { background: '#B3DC4A', },
  slide3: { background: '#6AC0FF', },
};

class Main extends Component {
  render() {
    return (
      <Layout item className="App">
        <Layout item className="App-header">
          <Text type="headline">Welcome to Rummy Redux</Text>
          <Text type="headline">Sign in to start a new game</Text>
        </Layout>
        <Layout item>
          <SwipeableViews enableMouseEvents>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </SwipeableViews>
        </Layout>
        <Layout xs={12} >
          <Game/>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
