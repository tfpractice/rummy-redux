import React from 'react';
import { connect, } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Text from 'material-ui/Typography';

const stateToProps = ({ game: { discard, }, auth: { user, }, }) =>
  ({ discard, user, });

const Discard = ({ cards, disDrawTo, user, }) => (
  <List>
    <ListSubheader />
    {cards.map((c, i) =>
      <PlayCard onClick={() => disDrawTo(user)(c)} card={c} pos={i} key={c.id} />
    )}
  </List>

);

export default connect(stateToProps, GameActs)(Discard);
