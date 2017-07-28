import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { Game, Player } from 'rummy-rules';
import { connect } from 'react-redux';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';

import PlayerDrawer from './playerDrawer';
import { CardCount, CardSet } from '../cards';

const { isActive } = Game;
const { hand, sets, matches } = Player;
const styled = withStyles(
  createStyleSheet('PlayerSection', theme => ({
    avatar: { backgroundColor: theme.palette.accent[500] },
    xAvatar: { backgroundColor: '#fff' },
    active: { backgroundColor: theme.palette.accent[900] },
  }))
);

const stateToProps = ({ game, auth: { user }}, { player }) => ({
  current: matches(user)(player),
  active: isActive(game)(player),
});

const PlayerSection = ({ player, current, active, classes }) =>
  (<Card>
    <CardHeader
      avatar={
        <Avatar className={active ? classes.avatar : classes.xAvatar}>
          {player.name[0].toUpperCase()}
        </Avatar>
      }
      title={
        <Grid container justify="center" align="center">
          <Grid item xs>
            {player.name}
          </Grid>
          {current &&
            <Grid item xs>
              <PlayerDrawer />
            </Grid>}
        </Grid>
      }
      subheader={player.id}
    />

    <CardContent>
      <Grid container justify="center">
        <Grid
          item
          xs={11}
          sm={3}
          children={<CardCount cards={hand(player)} />}
        />
        <Grid item xs={11} sm={8}>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Text align="center" type="display1">
                Sets
              </Text>
            </Grid>
            {sets(player).map((s, i) =>
              <Grid item xs={3} key={i} children={<CardSet cards={s} />} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>);

export default connect(stateToProps)(styled(PlayerSection));
