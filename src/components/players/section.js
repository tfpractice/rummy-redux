import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import * as Rummy from 'rummy-rules';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Layout from 'material-ui/Layout';
import { CardCount, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) =>
  ({ isActive: matches(active(game))(player), });
  
const Player = ({ player, isActive, }) => (
<Layout container>
  <Layout item xs={12} >
    <h1>name{player.name}</h1>
    <h1>isActive: {isActive}</h1>
  </Layout>
  <Layout item xs={4}>
    <CardCount cards={hand(player)}/>
  </Layout>
  <Layout item xs={8}>
    <h1> sets {sets(player).length}</h1>
  </Layout>
</Layout>
  
);

export default connect(mapStateToProps)(Player);
