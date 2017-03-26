import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { Game as GM, Player as Plr, } from 'rummy-rules';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Layout from 'material-ui/Layout';
import Divider from 'material-ui/Divider';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';
import { Player, } from '../players';
import { CardCount, Deck, } from '../cards';
import Discard from './discard';
import Button from 'material-ui/Button';

import { GameActs, } from '../../modules';

const { active, } = GM;
const { matches, } = Plr;

const mapStateToProps = ({ auth: { user, }, game, }) =>
({
 isActive: !!(user && matches(user)(active(game))),
 deck: game.deck,
 players: game.players,
 discard: game.discard,
});

const Game = ({ isActive, deck, players, discard, deal, }) => (
  <Layout container>
    <Layout item xs={12} >
      <Button onClick={deal}>Deal</Button>
    </Layout>
    <Layout item xs={4}>
      <CardCount cards={deck}/>
    </Layout>
    <Layout item xs={8}>
      <Text type="headline"> discard </Text>
      <Discard isActive={isActive} />
    </Layout>
    <Layout item xs={12}>
      <Divider />
      {players.map((p, i) => <Player key={i} player={p}/>)}
    </Layout>
  </Layout>);

export default connect(mapStateToProps, GameActs)(Game);
