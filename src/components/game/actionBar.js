import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';

import Text from 'material-ui/Text';
import { Player, PlayerDrawer, } from '../players';

import { Game as GM, Player as Plr, } from 'rummy-rules';
const { active, } = GM;
const { matches, } = Plr;

import { GameActs, } from '../../modules';

const ActionBar = ({ deal, dropNext, user, isActive, turnGame, newGame, }) => (
    <Toolbar>
      <Layout container justify={'center'} align={'center'} gutter={24}>
        {!!user && <PlayerDrawer user={user} isActive={isActive} open/>}
        <Button onClick={newGame}>newGame</Button>
        <Button onClick={deal}>Deal</Button>
        <Button onClick={dropNext}>dropNext</Button>
        <Button onClick={turnGame}>turnGame</Button>
      </Layout>
  </Toolbar>

);

export default connect(null, GameActs)(ActionBar);
