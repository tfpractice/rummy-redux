import React, { Component, PropTypes, } from 'react';
import * as Rummy from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { Card, CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Collapse from 'material-ui/transitions/Collapse';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';

import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import { CardCount, CardSet, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, copy, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) =>
 ({ isActive: matches(active(game))(player), });
  
const Player = ({ player, isActive, }) => (
  <Card>
    <CardHeader title={player.name} />
    <CardMedia>
      <Layout container>
        <Layout item xs={4}
          children={ <CardCount cards={hand(player)}/>}/>
        <Layout item xs={8}>
          <List>
            <ListSubheader children={'Sets'} type="title" />
            {sets(player).map((s, i) =>
              <ListItem key={i}
                children={ <CardSet cards={[ ...s, ]}/>} />)}
          </List>
        </Layout>
      </Layout>
    </CardMedia>
  </Card>
);

export default connect(mapStateToProps)(Player);
