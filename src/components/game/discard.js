import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Button from 'material-ui/Button';

const stateToProps = ({ game: { discard, }, }) => ({ discard, });

const Discard = ({ discard, drawTo, dropNext, }) => (
  <div>
    <div>
      <Button onClick={dropNext}>dropNext</Button>
      {discard.map((c, i) =>
        <PlayCard onClick={console.log} card={c} pos={i} key={c.id}/>)}
    </div>

  </div>);

export default connect(stateToProps, GameActs)(Discard);
