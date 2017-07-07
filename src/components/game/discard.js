import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Text from 'material-ui/Typography';

const stateToProps = ({ game: { discard, }, auth: { user, }, }) =>
  ({ discard, user, });

const Discard = ({ discard, disDrawTo, user, }) => (
  <List>
    <ListSubheader>
      <Text type="headline"> Discard </Text>
    </ListSubheader>
    {discard.map((c, i) =>
      <PlayCard onClick={() => disDrawTo(user)(c)} card={c} pos={i} key={c.id} />
    )}
  </List>

);

export default connect(stateToProps, GameActs)(Discard);
