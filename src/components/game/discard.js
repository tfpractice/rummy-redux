import React from 'react';
import { connect, } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const stateToProps = ({ game: { discard, }, auth: { user, }, }) =>
  ({ discard, user, });

const Discard = ({ cards, disDrawTo, user, }) => (
  <Grid container justify="center">
    {/* <ListSubheader children="discard"/> */}
    {cards.map((c, i) =>
      (<Grid item xs={9}>
        <PlayCard onClick={() => disDrawTo(user)(c)} card={c} pos={i} key={c.id} />

      </Grid>)
    )}
  </Grid>

);

export default connect(stateToProps, GameActs)(Discard);
