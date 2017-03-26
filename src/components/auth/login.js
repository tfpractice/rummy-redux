import React from 'react';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import LogoutLink from './logoutLink';
import { resetForm, } from '../../utils';
import { AuthActs, } from '../../modules';

const renderTextField = ({ input, meta: { touched, error, }, ...custom }) => (
    <TextField id="displayName" type="text" inputProps={input} error={error} {...custom}/>);

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="displayName" type="text" component={renderTextField}/>
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
