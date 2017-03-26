import React, { Component, PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';

const styleSheet = createStyleSheet('PlayCard', theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

const PlayCard = ({ card, pos, }, context) => (
      <Paper elevation={pos / 2}>
        <Text type="headline" component="h3">
          Suit :{card.suit} Rank: {card.rank}
        </Text>
      </Paper>
  );

export default PlayCard;
