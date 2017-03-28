import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import * as Rummy from 'rummy-rules';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Layout from 'material-ui/Layout';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from 'material-ui/Card';
import { CardCount, } from '../cards';

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
          <Text type="title" >
            sets {player && sets(player)}
            <CardCount cards={hand(player)}/>

          </Text>
        </Layout>
      </Layout>
    </CardMedia>
  </Card>
  
);

export default connect(mapStateToProps)(Player);
