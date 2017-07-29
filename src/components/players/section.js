import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { Game, Player } from 'rummy-rules';
import { connect } from 'react-redux';

import { CardCount, CardSet } from '../cards';
import PlayerDrawer from './playerDrawer';

const { isActive } = Game;
const { hand, sets, matches } = Player;

const styled = withStyles(
  createStyleSheet('PlayerSection', (theme) => {
    console.log('theme', theme);
    return {
      xAvatar: { backgroundColor: '#fff' },
      active: { backgroundColor: theme.palette.accent[500] },
    };
  })
);

const stateToProps = ({ game, auth: { user }}, { player }) => ({
  current: matches(user)(player),
  active: isActive(game)(player),
  sets: sets(player),
  hand: hand(player),
});

const PlayerSection = ({ player, current, sets, hand, active, classes }) =>
  (<Card>
    <CardHeader
      avatar={
        current
          ? <PlayerDrawer />
          : <Avatar className={active ? classes.active : classes.xAvatar}>
            {player.name[0].toUpperCase()}
          </Avatar>
      }
      title={
        <Text align="center" type="display1">
          {player.name}
        </Text>
      }
      subheader={player.id}
    />

    <CardContent>
      <Grid container justify="center">
        <Grid item xs={11} sm={3}>
          <CardCount cards={hand} />
        </Grid>
        <Grid item xs={11} sm={9}>
          <Text align="center" type="title">
            Sets
          </Text>
          <Grid container justify="center">
            <Grid item xs={11} />
            {sets.map((s, i) =>
              <Grid item xs={3} key={i} children={<CardSet cards={s} />} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>);

export default connect(stateToProps)(styled(PlayerSection));
