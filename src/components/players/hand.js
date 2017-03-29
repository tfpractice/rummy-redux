import * as RUMMY from 'rummy-rules';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { CardList, CardIcon} from '../cards';

const { Player: { hand: pHand, matches, copy, }, Game: { active, }, } = RUMMY;
// 
// const getUser = user => game => game.players.find(matches(user));
// const getPlayerHand = user => g => user ? pHand(getUser(user)(g)) : [];
// const stateToProps = ({ auth: { user, }, game, }) =>
// ({ hand: (getPlayerHand(user)(game)), });

export const Hand = ({ user, cards, isActive }) => {
  console.log('user', user);
  return  {cards.map(c => <CardIcon key={c.id} onClick={} card={c}/>)}

);
};
