import React from 'react';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import LogoutLink from './logoutLink';
import { resetForm, } from '../../utils';
import { AuthActs, } from '../../modules';

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

const ReduxLogin = reduxForm()(baseLogin);

const LoginForm = ({ login, formID, }) => (
  <ReduxLogin
    form={formID} onSubmit={login} onSubmitSuccess={resetForm(formID)}
  />
);

export default connect(null, AuthActs)(LoginForm);
