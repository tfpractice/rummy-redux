import React from 'react';
import { connect, } from 'react-redux';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import { GameActs, } from '../../modules';
import { PlayCard, } from '../cards';

const stateToProps = ({ game: { discard, }, auth: { user, }, }) =>
  ({ discard, user, });

const mergeProps = ({ user, }, { disDrawTo, }, ownProps) =>
  ({ ...ownProps, drawCard: c => () => disDrawTo(user)(c), });

const Discard = ({ cards, drawCard, }) => (
  <Grid container justify="center">
    <Grid item xs={11}>
      <Text type="display1"> Discard Pile </Text>
    </Grid>
    {cards.map((c, i) => (
      <Grid item key={c.id} xs={9}>
        <PlayCard onClick={drawCard(c)} card={c} pos={i} key={c.id} />
      </Grid>)
    )}
  </Grid>

);

export default connect(stateToProps, GameActs, mergeProps)(Discard);
