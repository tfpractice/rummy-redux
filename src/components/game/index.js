import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';

import Layout from 'material-ui/Layout';

const mapStateToProps = ({ game: { deck, players, discard, }, }) => ({ deck, players, discard, });

const Game = ({ deck, players, discard, }) => (
  <Layout container>
    <Layout item xs={4}>
      <h1> card count</h1>
    </Layout>
    <Layout item xs={8}>
      <h1> discard </h1>
    </Layout>
  </Layout>);

export default connect(mapStateToProps)(Game);
