import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { theme } from './utils';
import { Game, Main, NavBar, NoMatch } from './components';

const mapStateToProps = ({ users }) => ({ users });

const styles = { paddingTop: '5rem' };

const Routes = props =>
  (<MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Grid container direction={'column'}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} style={styles}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/play" component={Game} />
            <Route component={NoMatch} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  </MuiThemeProvider>);

export default connect(mapStateToProps)(Routes);
