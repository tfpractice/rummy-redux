import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import * as Rummy from 'rummy-rules';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import { CardCount, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) =>
  ({ isActive: matches(active(game))(player).toString(), });
  
const Player = ({ player, isActive, }) => (
<Layout container>
  <Layout item xs={12} >
    <Text type="headline" component="h2">
      name: {player.name} | isActive: {isActive}
    </Text>
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
