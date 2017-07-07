import React, { Component, PropTypes, } from 'react';
import List, { ListItem, } from 'material-ui/List';
import { connect, } from 'react-redux';
import customPropTypes from 'material-ui/utils/customPropTypes';
import PlayCard from './playCard';
import CardChip from './chip';
import Grid from 'material-ui/Grid';

const CardList = ({ cards, }) => (
  <List>
    {cards.map((c, i) => <PlayCard card={c} pos={i} key={c.id}/>)}
  </List>
);

export default (CardList);
