import React, { Component, PropTypes, } from 'react';
import List, { ListItem, } from 'material-ui/List';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
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
