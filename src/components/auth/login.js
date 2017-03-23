import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import { resetForm, } from '../../utils';
import { AuthActs, } from '../../modules';

const renderTextField = ({ input, label, meta: { touched, error, }, ...custom }) => (
    <TextField type="text" label={label} inputProps={input} {...custom}/>);

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="displayName" type="text"
      component={renderTextField}
      placeholder="displayName"/>
    <Button label="Login" accent type="submit" >Login</Button>
  </form>
);
const ReduxLogin = reduxForm()(baseLogin);

const LoginForm = ({ login, formID, }) => (
  <div className="row">
    <ReduxLogin
      form={formID} onSubmit={login} onSubmitSuccess={resetForm(formID)}
    />
  </div>
);

export default connect(null, AuthActs)(LoginForm);
