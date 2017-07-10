import React from 'react';
import { connect, } from 'react-redux';
import { Field, } from 'redux-form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import { AuthActs, } from '../../modules';
import { ClearForm, renderText, } from '../../utils';
import LogoutLink from './logoutLink';

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={6}>
        <Field name="displayName" component={renderText}/>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={6}>
            <Button color="accent" type="submit">Login</Button>
          </Grid>
          <Grid item xs={6}>
            <LogoutLink/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </form>
);

const ReduxLogin = ClearForm(baseLogin);

const LoginForm = ({ login, formID, }) => (
  <ReduxLogin form={formID} onSubmit={login} />
);

export default connect(null, AuthActs)(LoginForm);
