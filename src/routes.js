import React, { Component, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

// import * from 'material-ui/styles/theme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Boiler, NoMatch, } from './components';

export class Routes extends Component {
  
  render () {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="Game">
          <AppBar >
            <Toolbar>
           <Text type="title" colorInherit>Title</Text>
            </Toolbar>
       </AppBar>
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
