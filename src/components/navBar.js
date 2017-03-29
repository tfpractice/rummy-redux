import React, { Component, } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Layout from 'material-ui/Layout';
import { LoginForm, } from './auth';

const NavBar = () => (
  <AppBar>
    <Toolbar>
      <Layout container justify={'space-between'}>
        <Text type="headline" colorInherit>Rummy Redux</Text>
        <LoginForm formID={'mainLogin'}/>
      </Layout>
    </Toolbar>
  </AppBar>
);

export default NavBar;
