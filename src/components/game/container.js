import React from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Game as GM, Player as GP } from 'rummy-rules';

import { GameActs } from '../../modules';
import { Player } from '../players';
import ActionBar from './actionBar';
import Board from './board';

const { active } = GM;
const { name } = GP;
const idSort = (a, b) => (a.id <= b.id ? -1 : 1);
const mapStateToProps = ({ game }) => ({
  game,
  players: [ ...game.players ].sort(idSort),
});

const Game = ({ game, players }) =>
  (<Grid container align="center" justify="center">
    <Grid item xs={11}>
      <Card style={{ backgroundColor: '#9E9E9E' }}>
        <CardHeader title={<ActionBar />} />

        <CardContent>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Board />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={11}>
      <Grid container justify="center">
        {players.map(p =>
          (<Grid item key={p.id} xs={11} sm={6}>
            <Player player={p} />
          </Grid>)
        )}
      </Grid>
    </Grid>
  </Grid>);

export default connect(mapStateToProps, GameActs)(Game);
