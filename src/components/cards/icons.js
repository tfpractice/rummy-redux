import React, { PropTypes, } from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const uniChars = {
  HEARTS:  String.fromCharCode('\u2665'.charCodeAt(0)),
  CLUBS:  String.fromCharCode('\u2663'.charCodeAt(0)),
  DIAMONDS:  String.fromCharCode('\u2666'.charCodeAt(0)),
  SPADES:  String.fromCharCode('\u2660'.charCodeAt(0)),
};

const styleSheet = createStyleSheet('CardIcon', theme => ({
  HEARTS: {
    color: '#f00',
    backgroundColor: '#fff',
  },
  DIAMONDS: {
    color: '#f00',
    backgroundColor: '#fff',
  },
  SPADES: {
    color: '#000',
    backgroundColor: '#fff',
  },
  CLUBS: {
    color: '#000',
    backgroundColor: '#fff',
  },
}));

const CardIcon = ({ card, classes, ...rest }) =>

  // const classes = styleManager.render(styleSheet);

  (
  <Avatar className={classes[`${card.suit}`]} {...rest}>
    {card.rank.toUpperCase()} {uniChars[`${card.suit}`]}
  </Avatar>)

;

export default withStyles(styleSheet)(CardIcon);
