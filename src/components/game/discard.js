import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Text from 'material-ui/Text';

const stateToProps = ({ game: { discard, }, }) => ({ discard, });

const Discard = ({ discard, drawTo, dropNext, }) => (
  <List>
    <ListSubheader>
      <Text type="headline"> Discard </Text>
    </ListSubheader>
    {discard.map((c, i) =>
      <PlayCard onClick={() => drawTo(c)} card={c} pos={i} key={c.id} />
    )}
  </List>

);

export default connect(stateToProps, GameActs)(Discard);
