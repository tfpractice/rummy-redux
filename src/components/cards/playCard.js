import React, { Component, PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';
import Badge from 'material-ui/Badge';
import {
  List,
  ListItem, ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { CardIcon, } from './icons';

const styleSheet = createStyleSheet('PlayCard',
  theme => ({ root: theme.mixins.gutters({ paddingTop: 16, paddingBottom: 16, }), }));

const PlayCard = ({ card, pos, }, context) => (
  <Paper elevation={pos / 2}>
    <ListItem>
      <Text type="headline" component="h1">
        {card.rank.toUpperCase()}
      </Text>
      <CardIcon card={card}/>
    </ListItem>
  </Paper>

  );

export default PlayCard;
