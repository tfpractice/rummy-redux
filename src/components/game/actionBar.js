import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CardActions, } from 'material-ui/Card';
import { PlayerDrawer, } from '../players';

import { Game as GM, Player as Plr, } from 'rummy-rules';
import { GameActs, } from '../../modules';

const ActionBar = ({ deal, dropNext, user, clearGame, turnGame, newGame, }) => (
  <Grid container justify="center" align="center">
    <Grid item xs>
      <PlayerDrawer user={user} />
    </Grid>
    <Grid item xs>
      <Button onClick={clearGame}>clearGame</Button>
    </Grid>
    <Grid item xs>
      <Button onClick={newGame}>newGame</Button>
    </Grid>
    <Grid item xs>
      <Button onClick={deal}>Deal</Button>
    </Grid>
    <Grid item xs>
      <Button onClick={dropNext}>dropNext</Button>
    </Grid>
    <Grid item xs>
      <Button onClick={turnGame}>turnGame</Button>
    </Grid>
  </Grid>

);

const ActionBar2 = ({ deal, dropNext, user, clearGame, isActive, turnGame, newGame, }) => (
  <CardActions>
    <Grid container justify={'center'} align={'center'} gutter={24}>
      <PlayerDrawer user={user} isActive={isActive} open/>
      <Button onClick={clearGame}>clearGame</Button>
      <Button onClick={newGame}>newGame</Button>
      <Button onClick={deal}>Deal</Button>
      <Button onClick={dropNext}>dropNext</Button>
      <Button onClick={turnGame}>turnGame</Button>
    </Grid>
  </CardActions>

);

export default connect(null, GameActs)(ActionBar);
