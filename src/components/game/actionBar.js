import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import Text from 'material-ui/Typography';
import { Player, PlayerDrawer, } from '../players';

import { Game as GM, Player as Plr, } from 'rummy-rules';
import { GameActs, } from '../../modules';

const { active, } = GM;
const { matches, } = Plr;

const ActionBar = ({ deal, dropNext, user, clearGame, isActive, turnGame, newGame, }) => (
  <Toolbar>
    <Grid container justify={'center'} align={'center'} gutter={24}>
      <PlayerDrawer user={user} isActive={isActive} open/>
      <Button onClick={clearGame}>clearGame</Button>
      <Button onClick={newGame}>newGame</Button>
      <Button onClick={deal}>Deal</Button>
      <Button onClick={dropNext}>dropNext</Button>
      <Button onClick={turnGame}>turnGame</Button>
    </Grid>
  </Toolbar>

);

export default connect(null, GameActs)(ActionBar);
