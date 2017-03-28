import React, { Component, PropTypes, } from 'react';
import { List, ListItem, } from 'material-ui/List';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import PlayCard from './playCard';
import CardChip from './chip';

const CardList = ({ cards, }) => (
  <List>
    {cards.map((c, i) =>
      <ListItem key={c.id} >
        <PlayCard card={c} pos={i} key={c.id}/>
      </ListItem>)}
  </List>
);

export default CardList;
