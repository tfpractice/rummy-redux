import React from 'react';
import { connect } from 'react-redux';
import { Game } from 'rummy-rules';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import CardIcon, { LongCard } from './icons';
import Grid from 'material-ui/Grid';

const stateToProps = ({ game, auth: { user }}, { card }) => ({ drawable: Game.canDraw(card)(user)(game) });

const styles = createStyleSheet('PlayingCard', theme => ({
  card: { borderRadius: '40px' },
  draw: {
    borderRadius: '40px',
    backgroundColor: theme.palette.accent[500],
  },
}));

const PlayCard = ({ card, drawable, classes, dispatch, pos, ...rest }) =>
  (<Paper
    elevation={pos}
    className={drawable ? classes.draw : classes.card}
    {...rest}
   >
    <Grid container justify="space-between" align="center">
      <Grid item xs={1} sm>
        <CardIcon card={card} />
      </Grid>
      <Grid item xs sm={8}>
        <LongCard card={card} />
      </Grid>
      <Hidden smDown>
        <Grid item sm>
          <CardIcon card={card} />
        </Grid>
      </Hidden>
    </Grid>
  </Paper>);

export default connect(stateToProps, null)(withStyles(styles)(PlayCard));
