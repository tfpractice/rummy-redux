
import React, { PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

const styles = { 'max-width': '80%', };

const styleSheet = createStyleSheet('MuiAvatar',
  (theme, ...rest) => {
    console.log('rest', rest);
    console.log('theme', theme);
    
    return ({
      avatar: { img: { 'max-width': '80%', }, },
      root: { 'max-width': '80%', },
      'root img': { 'max-width': '80%', },
      img: { maxWidth: '80%', },
    });
  });

export const SpadeAvatar = ({ className, }) => {
  console.log('title', ); className = { className, };
  return (
<Avatar style={styles} className={className}
  alt="Spades"
  src="http://www.clipartbest.com/cliparts/9i4/o58/9i4o58jRT.svg"
/>);
};

export const HeartAvatar = ({ className, }) => (
<Avatar className={className}
  alt="Hearts"
  src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"
  />);

export const ClubsAvatar = ({ className, }) => (
    <Avatar className={className}
      alt="Clubs"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/240px-SuitClubs.svg.png"
      />);

export const DiamondAvatar = ({ className, }) => (
        <Avatar className={className}
  alt="Diamonds"
  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png"
/>);

export const CardIcon = ({ card, }, { styleManager, ...other }) => {
  const classes = styleManager.render(styleSheet);

  console.log('other', other);
  console.log('styleManager', styleManager);
  console.log('classes', classes);

  if (card.suit === 'HEARTS') {
    return <HeartAvatar className={classes.root}/>;
  } else if (card.suit === 'CLUBS') {
    return <ClubsAvatar className={classes.root}/>;
  } else if (card.suit === 'DIAMONDS') {
    return <DiamondAvatar className={classes.root}/>;
  } else if (card.suit === 'SPADES') {
    return <SpadeAvatar className={classes.root}/>;
  }

  // return (
  //   {card.suit == 'HEARTS' && <HeartAvatar id="whut" className={classes.img}/>}
  //   {card.suit == 'DIAMONDS' && <DiamondAvatar className={classes.img}/>}
  //   {card.suit == 'CLUBS' && <ClubsAvatar className={classes.img}/>}
  //   {card.suit == 'SPADES' && <SpadeAvatar className={classes.img}/>}
  //
  // );
};

CardIcon.contextTypes = { styleManager: PropTypes.object, theme: PropTypes.object, muiTheme: PropTypes.object, };
