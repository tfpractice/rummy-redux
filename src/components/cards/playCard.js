import React from 'react';
import { connect, } from 'react-redux';
import { Game, } from 'rummy-rules';
import Paper from 'material-ui/Paper';
import { createStyleSheet, withStyles, } from 'material-ui/styles';

import CardIcon, { LongCard, } from './icons';
import Grid from 'material-ui/Grid';

const stateToProps = ({ game, auth: { user, }, }, { card, }) =>
  ({ drawable: Game.canDraw(card)(user)(game), });

const styles = createStyleSheet('PlayingCard', theme =>
  ({ draw: { backgroundColor: theme.palette.accent[500], }, }));

const PlayCard = ({ card, drawable, classes, dispatch, pos, ...rest }) => (
  <Paper elevation={pos} className={drawable ? classes.draw : ''} {...rest}>
    <Grid container align="center" >
      <Grid item xs>
        <CardIcon card={card}/>
      </Grid>
      <Grid item xs={8}>
        <LongCard card={card}/>
      </Grid>
    </Grid>

  </Paper>);

export default connect(stateToProps, null)(withStyles(styles)(PlayCard));
