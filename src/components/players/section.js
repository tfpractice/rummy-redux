import React, { Component, PropTypes, } from 'react';
import * as Rummy from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import Card, {CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CardCount, CardSet, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, copy, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) => {
  console.log('player,sets(player)', player, sets(player));
  return ({ isActive: matches(active(game))(player), sets: sets(player), });
};
  
const Player = ({ player, isActive, sets, }) => (
  <Card>
    <CardHeader title={player.name} />
    <CardMedia>
      <Grid container>
        <Grid item xs={4}
          children={ <CardCount cards={hand(player)}/>}/>
        <Grid item xs={8}>
          <List>
            <ListSubheader children={'Sets'} type="title" />
            <p>{sets.length}</p>
            { sets.map((s, i) => {
              console.log('s', s, [ ...s, ]);
              console.log('player', player);
              return (<ListItem key={i}
                children={ <CardSet cards={[ ...s, ]}/>} />);
            })}
          </List>
        </Grid>
      </Grid>
    </CardMedia>
  </Card>
);

export default connect(mapStateToProps)(Player);
