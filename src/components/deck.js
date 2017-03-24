import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import PlayCard from './playCard';
import CardChip from './cards/chip';

const mapStateToProps = ({ game: { deck, }, }) => ({ deck, });

const Deck = ({ deck, }) => (
  <div>
    <div>
      {deck.map((c, i) => <PlayCard card={c} pos={i} key={c.id}/>)}
    </div>

    <div>
      {deck.map((c, i) => <PlayCard card={c} pos={i} key={c.id}/>)}
    </div>
  </div>);

export default connect(mapStateToProps)(Deck);
