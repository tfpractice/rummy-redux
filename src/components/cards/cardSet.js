import React, { Component, PropTypes, } from 'react';
import PlayCard from './playCard';
import CardChip from './chip';
import CardIcon from './icons';
import Grid from 'material-ui/Grid';

const CardSet = ({ cards, }) => (
  <Grid container justify={'center'} gutter={8} >
    {cards.map(c => <CardIcon key={c.id} card={c}/>)}
  </Grid>
);

export default CardSet;
