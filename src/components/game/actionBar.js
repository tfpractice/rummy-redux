import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Tabs, { Tab, } from 'material-ui/Tabs';
import { PlayerDrawer, } from '../players';

import { GameActs, } from '../../modules';

const ActionBar = ({ deal, dropNext, clearGame, turnGame, newGame, }) => (
  <Grid container justify="center" align="center">
    <Grid item xs>
      <PlayerDrawer />
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
const ActionTabs = ({ deal, dropNext, clearGame, turnGame, newGame, }) => (
  <Grid container justify="center">
    <Grid item xs>
      <Tabs fullWidth scrollable centered index={false} onChange={() => null}>
        <Tab icon={<PlayerDrawer />}/>
        <Tab onClick={clearGame} label={'clearGame'} />
        <Tab onClick={newGame} label={'newGame'} />
        <Tab onClick={deal} label={'Deal'} />
        <Tab onClick={dropNext} label={'dropNext'} />
        <Tab onClick={turnGame} label={'turnGame'} />
      </Tabs>
    </Grid>
  </Grid>

);

export default connect(null, GameActs)(ActionTabs);
