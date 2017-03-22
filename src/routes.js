import React, { Component, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Boiler, NavBar, NoMatch, } from './components';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { blue, pink } from 'material-ui/styles/colors';

  const palette = createPalette({
    primary: blue,
    accent: pink,
    type: 'dark',
  });

  const { styleManager, theme } = MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme(),
  });

  // styleManager.setSheetOrder(MUI_SHEET_ORDER.concat([
  //   'AppContent',
  //   'AppDrawer',
  //   'AppDrawerNavItem',
  //   'AppFrame',
  //   'MarkdownDocs',
  //   'MarkdownElement',
  //   'Demo',
  // ]));

export class Routes extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme} styleManager={styleManager}>
        <BrowserRouter>
          <div className="Game">
            <NavBar/>
          <h1>Rummy Redux</h1>
          <div className="container">
            <Switch>
              <Route path="/" component={Boiler} />
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
  </BrowserRouter>
</MuiThemeProvider>
    );
  }
}

export default Routes;
