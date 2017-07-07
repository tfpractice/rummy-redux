import React from 'react';
import { connect, } from 'react-redux';
import { Game as GM, } from 'rummy-rules';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardHeader, } from 'material-ui/Card';
import { GameActs, } from '../../modules';
import { Player, } from '../players';
import { CardCount, } from '../cards';
import Discard from './discard';
import ActionBar from './actionBar';
import Board from './board';

const { isActive, rummable, active, } = GM;

const idSort = (a, b) => a.name <= b.id ? -1 : 1;
const mapStateToProps = ({ auth: { user, }, game, }) =>
  ({ user, game, });

const Game = ({ game, user, draw, deckDraw, }) => (
  <Grid container justify="center">
    <Grid item xs={11} >
      <Card style={ { backgroundColor: 'transparent', }}>
        <CardHeader title={`current player ${active(game).name}`}/>
        <CardContent>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Board/>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <ActionBar user={user} />
        </CardActions>
      </Card>
    </Grid>

    <Grid item xs={11}>
      <Grid container justify="center">
        {game.players.map((p, i) =>
          (<Grid item xs={11} sm={6} key={p.id} >
            <Player player={p}/>
          </Grid>)
        )}

      </Grid>
    </Grid>
  </Grid>);

export default connect(mapStateToProps, GameActs)(Game);
