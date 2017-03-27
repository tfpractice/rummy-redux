
import React from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Avatar from 'material-ui/Avatar';

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
