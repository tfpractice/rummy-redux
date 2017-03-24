import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import { Player, } from '../players';
import Layout from 'material-ui/Layout';
import Divider from 'material-ui/Divider';
import Deck from '../deck';
import Text from 'material-ui/Text';
import { CardCount, } from '../cards';

const mapStateToProps = ({ game: { deck, players, discard, }, }) =>
({ deck, players, discard, });

const Game = ({ deck, players, discard, }) => (
  <Layout container>
    <Layout item xs={4}>
      <CardCount cards={deck}/>
    </Layout>
    <Layout item xs={8}>
      <Text type="headline"> discard </Text>
      <Deck cards={discard}/>
    </Layout>

    <Layout item xs={12}>
      <Divider />

      {players.map((p, i) => <Player key={i} player={p}/>)}
    </Layout>
  </Layout>);

export default connect(mapStateToProps)(Game);
