import React, { PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Avatar from 'material-ui/Avatar';

const uniChars = {
  HEARTS:  String.fromCharCode('\u2665'.charCodeAt(0)),
  CLUBS:  String.fromCharCode('\u2663'.charCodeAt(0)),
  DIAMONDS:  String.fromCharCode('\u2666'.charCodeAt(0)),
  SPADES:  String.fromCharCode('\u2660'.charCodeAt(0)),
};

const styleSheet = createStyleSheet('CardIcon', theme => ({
      HEARTS: { color: '#f00', },
      DIAMONDS: { color: '#f00', },
      SPADES: { color: '#000', },
      CLUBS: { color: '#000', },
}));

const CardIcon = ({ card, ...rest }, { styleManager, }) => {
  const classes = styleManager.render(styleSheet);

  return (
  <Avatar className={classes[`${card.suit}`]} {...rest}>
    {card.rank.toUpperCase()} {uniChars[`${card.suit}`]}
  </Avatar>);
};

CardIcon.contextTypes = { styleManager: PropTypes.object, theme: PropTypes.object, muiTheme: PropTypes.object, };
export default CardIcon;
