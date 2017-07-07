import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette, { dark, } from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import pink from 'material-ui/colors/pink';
import teal from 'material-ui/colors/teal';
import Grid from 'material-ui/Grid';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Game, Main, NavBar, NoMatch, } from './components';

const mapStateToProps = ({ users, }) => ({ users, });

const palette = createPalette({
  primary: teal,
  accent: pink,
  type: 'dark',
  ...dark,
});

const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
  { theme: createMuiTheme({ palette, }), });

const styles = { paddingTop: '3rem', };

export class Routes extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme} styleManager={styleManager}>
        <BrowserRouter>
          <Grid container direction={'column'}>
            <Grid item xs={12}>
              <NavBar/>
            </Grid>
            <Grid item xs={12} style={styles}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/play" component={Game} />
                <Route component={NoMatch}/>
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Routes);
