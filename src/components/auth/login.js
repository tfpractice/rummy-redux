import React from 'react';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';

//
// import * as MRF from 'redux-form-material-ui';
// console.log('MRF', MRF);

// import { TextField, } from 'redux-form-material-ui';
import { connect, } from 'react-redux';
import { Field, reduxForm, } from 'redux-form';
import { resetForm, } from '../../utils';
import { AuthActs, } from '../../modules';

// console.log('reduxForm', reduxForm);

const renderTextField = ({ input, meta: { touched, error, }, ...custom }) => (
    <TextField id="displayName" type="text" inputProps={input} error={error} {...custom}/>);

const baseLogin = ({ handleSubmit, }) => (
  <form onSubmit={handleSubmit} >
    <Field name="displayName" type="text" component={renderTextField}/>
    <Button accent type="submit">Login</Button>
  </form>
);
const ReduxLogin = reduxForm()(baseLogin);

const LoginForm = ({ login, formID, }) => (
  <div className="row">
    <Button onClick={ () => login({ displayName: 'nonform', })}>log</Button>
    <ReduxLogin
      form={formID} onSubmit={login} onSubmitSuccess={resetForm(formID)}
    />
  </div>
);

console.log('AuthActs', AuthActs);
export default connect(null, AuthActs)(LoginForm);
