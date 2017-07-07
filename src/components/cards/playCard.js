import React, { Component, PropTypes, } from 'react';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, } from 'material-ui/List';
import CardIcon from './icons';

const PlayCard = ({ card, pos, ...rest }, context) => (
  <Paper elevation={pos} {...rest}>
    <ListItem>
      <ListItemIcon>
        <CardIcon card={card}/>
      </ListItemIcon>
    </ListItem>
  </Paper>);

export default PlayCard;
