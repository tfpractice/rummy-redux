import React, { Component, PropTypes, } from 'react';
import { List, ListItem, } from 'material-ui/List';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import PlayCard from './playCard';
import CardChip from './chip';
import CardIcon from './icons';

const CardSet = ({ cards, }) => (
    <ListItem>
      {cards.map(c => <CardIcon key={c.id} card={c}/>)}
    </ListItem>
);

export default CardSet;
