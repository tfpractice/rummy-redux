import * as RUMMY from 'rummy-rules';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { CardIcon, } from '../cards';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import { GameActs, } from '../../modules';
const { Player: { hand: pHand, matches, copy, }, Game: { active, }, } = RUMMY;

const stateToProps = ({ game, auth: { user = active(game), }, } = {}) =>
 ({ user, });

const MyHand = ({ user, isActive, dropCards, }) => (
  <Layout container justify={'center'} gutter={8}>
    {user.hand.map(c =>
      <IconButton key={c.id} onClick={() => dropCards(user)(c)}>
        <CardIcon card={c}/>
      </IconButton>)}
</Layout>
);

export default connect(stateToProps, GameActs)(MyHand);
