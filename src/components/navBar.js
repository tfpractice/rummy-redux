import React, { Component, } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import { LoginForm, LogoutLink, } from './auth';
import Layout from 'material-ui/Layout';

const NavBar = () => (
  <AppBar >
    <Toolbar>
      <Text type="title" colorInherit>Rummy Redux</Text>
      <LoginForm formID={'mainLogin'}/>
    </Toolbar>
  </AppBar>
);

export default NavBar;
