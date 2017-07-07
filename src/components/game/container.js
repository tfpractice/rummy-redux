import { spread, } from 'fenugreek-collections';
import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { Game as GM, Player as Plr, } from 'rummy-rules';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import { Player, PlayerDrawer, } from '../players';
import { CardCount, Deck, } from '../cards';
import Discard from './discard';
import Button from 'material-ui/Button';
import ActionBar from './actionBar';
import { GameActs, } from '../../modules';

const { active, players, isActive, rummable, } = GM;
const { matches, copy, } = Plr;

console.log('GM', GM);
const mapStateToProps = ({ auth: { user, }, game, }) =>
  ({ user, game, isActive: isActive(game)(user), });

const Game = ({ isActive, game, user, draw, deckDraw, }) => (
  <Grid container>
    <Grid item xs={12} >
      <ActionBar user={user} isActive={isActive}/>
    </Grid>
    <Grid onClick={() => deckDraw(user)} item xs={4}>
      <CardCount cards={game.deck}/>
    </Grid>
    <Grid item xs={8}>
      <Discard cards={game.discard} isActive={isActive} />
    </Grid>
    <Grid item xs={8}>
      <Discard cards={rummable(game)} isActive={isActive} />
    </Grid>
    <Grid container justify={'space-between'}>
      <Grid item xs={12}>
        {game.players.map((p, i) => <Player key={i} player={p}/>)}
      </Grid>
    </Grid>
  </Grid>);

export default connect(mapStateToProps, GameActs)(Game);
