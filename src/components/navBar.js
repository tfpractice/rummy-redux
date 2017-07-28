import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { LoginForm } from './auth';

const styled = withStyles(
  createStyleSheet('Nav', theme => ({ nav: { backgroundColor: theme.palette.accent[500] }}))
);

const NavBar = ({ classes }) =>
  (<AppBar className={classes.nav}>
    <Toolbar>
      <Grid container justify={'space-between'}>
        <Text type="headline">Rummy Redux</Text>
        <LoginForm formID={'mainLogin'} />
      </Grid>
    </Toolbar>
  </AppBar>);

export default styled(NavBar);
