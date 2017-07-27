import React from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { AuthActs, } from '../../modules';

const stateToProps = ({ auth: { user, }, }) => ({ user, });
const mergeProps = ({ user, }, { logout, }, ownProps) => ({
  signOut: () => logout(user),
  ...ownProps,
});

const LogoutLink = ({ signOut, logout, user, }) =>
  (<Button color="contrast" onClick={signOut}>
    Logout
  </Button>);

export default connect(stateToProps, AuthActs, mergeProps)(LogoutLink);
