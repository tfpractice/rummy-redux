import './main.css';
import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Card, { CardContent, CardHeader } from 'material-ui/Card';

import Game from '../game';

const Main = () =>
  (<Grid container justify="center" className="App">
    <Grid item xs={11}>
      <Card>
        <CardHeader
          title={`Welcome to Rummy Redux. Sign in to start a new game`}
        />
      </Card>
    </Grid>
    <Grid item xs={11}>
      <Game />
    </Grid>
  </Grid>);

export default Main;
