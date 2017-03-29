import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';

import Text from 'material-ui/Text';
import { Game as GM, Player as Plr, } from 'rummy-rules';
const { active, } = GM;
const { matches, } = Plr;

import { GameActs, } from '../../modules';

// import { LoginForm, LogoutLink, } from './auth';
const stateToProps = ({ auth: { user, }, game, }) => ({
  isActive: !!(user && matches(user)(active(game))),
  deck: GM.deck(game),
  players: GM.players(game),
  discard: GM.discard(game),
});

const ActionBar = ({ deal, dropNext, isActive, }) => (
    <Toolbar>
      <Layout container justify={'center'} align={'center'} gutter={24}>
        <Button onClick={deal}>Deal</Button>
        <Button onClick={dropNext}>dropNext</Button>
      </Layout>
  </Toolbar>

);

export default connect(stateToProps, GameActs)(ActionBar);
