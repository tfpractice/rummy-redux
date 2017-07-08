import React from 'react';
import * as Rummy from 'rummy-rules';
import { connect, } from 'react-redux';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';

import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CardCount, CardSet, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, copy, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) =>
  ({ isActive: matches(active(game))(player), sets: sets(player), })

;
  
const Player = ({ player, isActive, sets, }) => (
  <Card>
    <CardHeader title={player.name} subheader={player.id} />
    <CardContent>
      <Grid container justify="center">
        <Grid item xs={11} sm={3} children={ <CardCount cards={hand(player)}/>}/>
        <Grid item xs={11} sm={8}>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Text align="center" type="display1">
                Sets
              </Text>
            </Grid>
            { sets.map((s, i) => (
              <Grid item xs={3} key={i}
                children={ <CardSet cards={s}/>} />))}
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default connect(mapStateToProps)(Player);
