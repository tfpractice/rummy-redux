import React, { Component, PropTypes, } from 'react';
import * as Rummy from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { Card, CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Collapse from 'material-ui/transitions/Collapse';

import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import { CardCount, CardSet, } from '../cards';

const { Game: { active, }, Player: { matches, hand, sets, copy, }, } = Rummy;

const mapStateToProps = ({ game, }, { player, }) =>
 ({ isActive: matches(active(game))(player).toString(), });
  
const Player = ({ player, isActive, }) => (
  <Card>
    <CardHeader
      title={player.name}
      subhead={isActive.toString()}
    />
    <CardMedia>
      <Layout container>
        <Layout item xs={4}>
          <CardCount cards={hand(player)}/>
        </Layout>
        <Layout item xs={8}>
          <Text type="title">
            sets {player && sets(player)}
          </Text>
          <CardSet cards={hand(player)}/>
        </Layout>
      </Layout>
    </CardMedia>
  </Card>
  
);

export default connect(mapStateToProps)(Player);
