import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { Game, Player } from 'rummy-rules';
import { connect } from 'react-redux';
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';

import { CardCount, CardSet } from '../cards';

const styled = withStyles(
  createStyleSheet('PlayerSection', theme => ({ active: { backgroundColor: theme.palette.accent[900] }}))
);

const { isActive } = Game;
const { hand, sets } = Player;
const stateToProps = ({ game }, { player }) => ({ active: isActive(game)(player) });

const PlayerSection = ({ player, active, classes }) =>
  (<Card className={active && classes.active}>
    <CardHeader title={player.name} subheader={player.id} />
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
