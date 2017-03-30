import * as RUMMY from 'rummy-rules';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { CardList, CardIcon} from '../cards';
import Layout from 'material-ui/Layout';
import { GameActs } from '../../modules';
const { Player: { hand: pHand, matches, copy, }, Game: { active, }, } = RUMMY;
// 
// const getUser = user => game => game.players.find(matches(user));
// const getPlayerHand = user => g => user ? pHand(getUser(user)(g)) : [];
// const stateToProps = ({ auth: { user, }, game, }) =>
// ({ hand: (getPlayerHand(user)(game)), });

export const MyHand = ({ user, cards, isActive }) => {
  console.log('user', user);
  <Layout container justify={'center'}>
    {cards.map(c => <CardIcon key={c.id} onClick={()=> isActive && discard(c)} card={c}/>)}
  </Layout>
)};
