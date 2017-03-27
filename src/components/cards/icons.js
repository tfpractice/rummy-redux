
import React from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

export const SpadeAvatar = () => (
<Avatar
  alt="Spades"
  src="http://www.clipartbest.com/cliparts/9i4/o58/9i4o58jRT.svg"
/>);

export const HeartAvatar = () => (
<Avatar
  alt="Hearts"
  src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"
/>);

export const ClubsAvatar = () => (
<Avatar
  alt="Clubs"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/240px-SuitClubs.svg.png"
/>);

export const DiamondAvatar = () => (
<Avatar
  alt="Diamonds"
  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png"
/>);

// export const DiamondAvatar = () => (
//   <SvgIcon>
//
//
//     <path d="M3682 9675 c-47 -40 -145 -177 -295 -417 -553 -882 -1528 -2207
//       -2422 -3293 -235 -285 -375 -470 -375 -494 0 -30 194 -286 690 -911 948 -1196
//       1888 -2499 2280 -3162 l134 -228 17 28 c446 732 1032 1584 1717 2497 459 611
//       664 867 1329 1659 99 118 101 121 83 141 -198 222 -831 1001 -1141 1405 -678
//       883 -1171 1573 -1727 2417 -122 186 -231 349 -240 361 l-18 24 -32 -27z"/>
//
//   </SvgIcon>);

{ /* <SvgIcon>

  <path d="M3682 9675 c-47 -40 -145 -177 -295 -417 -553 -882 -1528 -2207
    -2422 -3293 -235 -285 -375 -470 -375 -494 0 -30 194 -286 690 -911 948 -1196
    1888 -2499 2280 -3162 l134 -228 17 28 c446 732 1032 1584 1717 2497 459 611
    664 867 1329 1659 99 118 101 121 83 141 -198 222 -831 1001 -1141 1405 -678
    883 -1171 1573 -1727 2417 -122 186 -231 349 -240 361 l-18 24 -32 -27z"/>

</SvgIcon> */ }
export const CardIcon = ({ card, }) =>

  // if (card.suit ==='HEARTS') {
  //   return <HeartAvatar/>
  // } else if (card.suit ==='CLUBS') {
  //   return <HeartAvatar/>
  // } else if (card.suit ==='DIAMONDS') {
  //   return <HeartAvatar/>
  // } else if (card.suit ==='SPADES') {
  //   return <HeartAvatar/>
  // } else
   (
  <span>
    {card.suit == 'HEARTS' && <HeartAvatar/>}
    {card.suit == 'DIAMONDS' && <DiamondAvatar/>}
    {card.suit == 'CLUBS' && <ClubsAvatar/>}
    {card.suit == 'SPADES' && <SpadeAvatar/>}

  </span>
          );
