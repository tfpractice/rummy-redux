import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { render, } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette, { dark, } from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { pink, teal, } from 'material-ui/styles/colors';
import Layout from 'material-ui/Layout';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Main, NavBar, NoMatch, } from './components';

const mapStateToProps = ({ users, }) => ({ users, });

const palette = createPalette({
  primary: teal,
  accent: pink,
  type: 'dark',
  ...dark,
});

const { styleManager, theme, } = MuiThemeProvider.createDefaultContext(
  { theme: createMuiTheme({ palette, }), });

export class Routes extends Component {

  render () {
    return (
      <MuiThemeProvider theme={theme} styleManager={styleManager}>
        <BrowserRouter>
          <Layout container>
            <Layout item xs={12}>
              <NavBar/>
              <Switch>
                <Route path="/" component={Main} />
                <Route component={NoMatch}/>
              </Switch>
            </Layout>
          </Layout>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Routes);
