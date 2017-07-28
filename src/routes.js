import React, { Component, } from 'react';
import { connect, } from 'react-redux';

import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles/';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

import Grid from 'material-ui/Grid';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Game, Main, NavBar, NoMatch, } from './components';

const palette = createPalette({ primary: red, accent: grey, type: 'dark', });

export const theme = createMuiTheme({ palette, });

const mapStateToProps = ({ users, }) => ({ users, });

const styles = { paddingTop: '5rem', };

export class Routes extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Routes);
