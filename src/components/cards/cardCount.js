import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';
import { Tab, Tabs, } from 'material-ui/Tabs';

// import PlayCard from './playCard';
// import CardChip from './cards/chip';

// const mapStateToProps = ({ game: { deck, }, }) => ({ deck, });

const styleSheet = createStyleSheet('PaperSheet', theme => ({
      root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
      }),
}));

const CardCount = ({ cards, }) => (
  <Paper elevation={4}>
    <Text type="headline" component="h3">
      CardCount: {cards.length}
    </Text>
  </Paper>
      );
    
export default CardCount;
  
