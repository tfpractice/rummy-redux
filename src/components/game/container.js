import { spread, } from 'fenugreek-collections';
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
import { Player, PlayerDrawer, } from '../players';
import { CardCount, Deck, } from '../cards';
import Discard from './discard';
import Button from 'material-ui/Button';
import ActionBar from './actionBar';
import { GameActs, } from '../../modules';

const { active, players, } = GM;
const { matches, copy, } = Plr;

const mapStateToProps = ({ auth: { user, }, game, }) => {
  console.log('stateToPropsauth', user, active(game));
  return ({ user, game, isActive: !!(user != null && matches(user)(active(game))), });
};
const Game = ({ isActive, game, user, draw, }) => (
  <Layout container>
    <Layout item xs={12} >
      <ActionBar user={user} isActive={isActive}/>
    </Layout>
    <Layout onClick={() => isActive && draw()} item xs={4}>
      <CardCount cards={game.deck}/>
    </Layout>
    <Layout item xs={8}>
      <Discard cards={game.discard} isActive={isActive} />
    </Layout>
    <Layout container justify={'space-between'}>
      <Layout item xs={12}>
        {game.players.map((p, i) => <Player key={i} player={p}/>)}
      </Layout>
    </Layout>
  </Layout>);

export default connect(mapStateToProps, GameActs)(Game);
