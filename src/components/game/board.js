import React from 'react';
import { connect, } from 'react-redux';
import { Game as GM, } from 'rummy-rules';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardHeader, CardMedia, } from 'material-ui/Card';
import { CardSet, } from '../cards';
import { GameActs, } from '../../modules';
import { CardCount, } from '../cards';
import Discard from './discard';

const { rummable, } = GM;

const mapStateToProps = ({ auth: { user, }, game, }) => ({ user, game, });

const Board = ({ game, user, deckDraw, }) => (

  <Grid container justify="center" >
    <Grid item xs={11} sm={6} onClick={() => deckDraw(user)} >
      <CardCount cards={game.deck}/>
    </Grid>
    <Grid item xs={11} sm={6}>
      <Discard cards={game.discard} />
    </Grid>
  </Grid>
    
);

export default connect(mapStateToProps, GameActs)(Board);
