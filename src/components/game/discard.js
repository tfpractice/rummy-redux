import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Button from 'material-ui/Button';

const stateToProps = ({ game: { discard, }, }) => ({ discard, });

const Discard = ({ discard, drawTo, dropNext, }) => (
  <List >
    <ListSubheader>
      <Button onClick={dropNext}>dropNext</Button>
    </ListSubheader>
    {discard.map((c, i) =>
      <PlayCard onClick={() => drawTo(c)} card={c} pos={i} key={c.id} />
    )}
  </List>

);

export default connect(stateToProps, GameActs)(Discard);
