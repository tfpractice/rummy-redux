import React from 'react';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import LogoutLink from './logoutLink';

// import { resetForm, } from '../../utils';
import { AuthActs, } from '../../modules';
import { ClearForm, renderText, } from '../../utils';

const styles = { display: 'inline-flex', };

const renderField = ({ input, meta: { error: e, }, ...rest }) => (
  <TextField type="text" inputProps={input} error={e} {...rest}/>
);

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} style={styles} >
    <Field name="displayName" component={renderField}/>
    <Button accent type="submit">Login</Button>
    <LogoutLink/>
  </form>
);

const ReduxLogin = ClearForm(baseLogin);

const LoginForm = ({ login, formID, }) => (
  <ReduxLogin
    form={formID} onSubmit={login}
  />
);

export default connect(null, AuthActs)(LoginForm);
