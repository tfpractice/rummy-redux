import React, { PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

const URL = {
  HEARTS: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg',
  CLUBS: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/240px-SuitClubs.svg.png',
  DIAMONDS: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png',
  SPADES: 'http://www.clipartbest.com/cliparts/9i4/o58/9i4o58jRT.svg',
};
const styles = { maxWidth: '80%', };

const styleSheet = createStyleSheet('CardIcon',
  theme => ({ img: { maxWidth: '90%', minWidth: '80%', }, }));

export const CardIcon = ({ card, }, { styleManager, ...other }) => {
  const classes = styleManager.render(styleSheet);

  return (<Avatar>
    {String.fromCharCode(9824)}
    <img src={URL[`${card.suit}`]} alt={card.suit} className={classes.img}/>
  </Avatar>);
};

CardIcon.contextTypes = { styleManager: PropTypes.object, theme: PropTypes.object, muiTheme: PropTypes.object, };
