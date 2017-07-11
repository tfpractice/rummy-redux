import React from 'react';
import { connect, } from 'react-redux';
import { Game as GM, Player as GP, } from 'rummy-rules';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { GameActs, } from '../../modules';
import { Player, } from '../players';
import ActionBar from './actionBar';
import Board from './board';

const { active, } = GM;
const { name, } = GP;
const idSort = (a, b) => a.id <= b.id ? -1 : 1;
const mapStateToProps = ({ game, }) => ({ game, });

const Game = ({ game, }) => (
  <Grid container justify="center">
    <Grid item xs={11} >
      <Card style={ { backgroundColor: 'transparent', }}>
        <CardHeader title={`current player ${name(active(game))}`}/>
        <CardContent>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Board/>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <ActionBar />
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={11}>
      <Grid container justify="center">
        {game.players.map((p, i) => (
          <Grid item xs={11} sm={6} key={p.id} >
            <Player player={p}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>);

export default connect(mapStateToProps, GameActs)(Game);
