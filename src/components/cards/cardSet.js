import React from 'react';
import CardIcon from './icons';
import Grid from 'material-ui/Grid';

const CardSet = ({ cards, }) => (
  <Grid container justify={'center'} gutter={8} >
    {cards.map(c => <CardIcon key={c.id} card={c}/>)}
  </Grid>
);

export default CardSet;
