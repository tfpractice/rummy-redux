import React, { PropTypes, } from 'react';
import Button from 'material-ui/Button';
import { connect, } from 'react-redux';
import { AuthActs, } from '../../modules';

const mapStateToProps = ({ auth: { user, }, }) => ({ user, });

const LogoutLink = ({ logout, user, }) =>
 <Button contrast onClick={() => logout(user)}>Logout</Button>;

export default connect(null, AuthActs)(LogoutLink);
