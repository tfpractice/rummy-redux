import React from 'react';
import { connect, } from 'react-redux';
import Paper from 'material-ui/Paper';

// import List, { ListItem, ListItemAvatar, ListItemIcon, } from 'material-ui/List';
import CardIcon, { LongCard, } from './icons';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import { Game, } from 'rummy-rules';
import Grid from 'material-ui/Grid';

import CardChip from './chip';

const { canDraw, } = Game;
const stateToProps = ({ game, auth: { user, }, }, { card, }) =>
  ({ drawable: canDraw(card)(user)(game), });

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
