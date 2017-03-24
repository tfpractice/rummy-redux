import React, { Component, } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import { LoginForm, LogoutLink, } from './auth';

const Player = () => (
  <AppBar >
    <Toolbar>
      <Text type="title" colorInherit>Rummy Redux</Text>
      <LoginForm formID={'mainLogin'}/>
      <LogoutLink/>
    </Toolbar>
  </AppBar>
);

export default NavBar;
