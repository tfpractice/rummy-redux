import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import { PlayerDrawer } from '../players';

import { GameActs } from '../../modules';

const ActionTabs = ({ deal, dropNext, clearGame, turnGame, newGame }) =>
  (<Grid container align="center" justify="center">
    <Grid item>
      <Tabs fullWidth scrollable centered index={false} onChange={() => null}>
        <Tab onClick={deal} label={'Deal'} />
        <Tab onClick={newGame} label={'newGame'} />
        <Tab onClick={turnGame} label={'turnGame'} />
        <Tab onClick={clearGame} label={'clearGame'} />
      </Tabs>
    </Grid>
  </Grid>);

export default connect(null, GameActs)(ActionTabs);
