import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Button from 'material-ui/Button';

console.log('GameActs', GameActs);
const stateToProps = ({ game: { deck, }, }) => ({ deck, });
const dispatchToProps = (dispatch, { args, }) => {
  console.log('...args', ...args);
  return {};
};

const Discard = ({ cards, drawTo, shiftDeck, }) => (
  <div>
    <div onClick={shiftDeck}>
      <Button onClick={shiftDeck}/>
      {cards.map((c, i) =>
        <PlayCard onClick={drawTo(c)} card={c} pos={i} key={c.id}/>)}
    </div>

  </div>);

export default connect(stateToProps, GameActs)(Discard);
