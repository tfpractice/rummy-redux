import React, { Component, } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { LoginForm, } from './auth';

const NavBar = () => (
  <AppBar>
    <Toolbar>
      <Grid container justify={'space-between'}>
        <Text type="headline" colorInherit>Rummy Redux</Text>
        {/* <LoginForm formID={'mainLogin'}/> */}
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;
