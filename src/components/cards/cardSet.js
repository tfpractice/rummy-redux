import React, { Component, PropTypes, } from 'react';
import { List, ListItem, } from 'material-ui/List';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import PlayCard from './playCard';
import CardChip from './chip';
import CardIcon from './icons';
import Layout from 'material-ui/Layout';

const CardSet = ({ cards, }) => (
    <Layout container justify={'flex-start'} >
      {cards.map(c => <CardIcon key={c.id} card={c}/>)}
    </Layout>
);

export default CardSet;
