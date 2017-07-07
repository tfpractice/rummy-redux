import React from 'react';
import { connect, } from 'react-redux';
import { Game as GM, } from 'rummy-rules';
import Grid from 'material-ui/Grid';
import Card, { CardContent, } from 'material-ui/Card';
import { GameActs, } from '../../modules';
import { CardCount, } from '../cards';
import Discard from './discard';

const { isActive, rummable, } = GM;

const mapStateToProps = ({ auth: { user, }, game, }) => {
  console.log('rummable(game)', rummable(game));
  return ({ user, game, isActive: isActive(game)(user), });
};

const Board = ({ isActive, game, user, draw, deckDraw, }) => (
  <Grid container justify="center" >
    <Grid item xs={11} sm={6} onClick={() => deckDraw(user)} >
      <CardCount cards={game.deck}/>
    </Grid>
    <Grid item xs={11} sm={6}>
      <Discard cards={game.discard} isActive={isActive} />
    </Grid>
    <Grid item xs={11} sm>
      <Discard cards={rummable(game)} isActive={isActive} />
    </Grid>
  </Grid>);

export default connect(mapStateToProps, GameActs)(Board);
