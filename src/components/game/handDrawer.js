import React, { Component, } from 'react';
import * as RUMMY from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import { CardList, } from '../cards';

const { Player: { hand: pHand, matches, copy, }, Game: { active, }, } = RUMMY;

const getUser = user => game => game.players.find(matches(user));
const getPlayerHand = user => g => user ? pHand(getUser(user)(g)) : [];
const stateToProps = ({ auth: { user, }, game, }) =>
({ hand: (getPlayerHand(user)(game)), });

const styleSheet = createStyleSheet('HandDrawer', () => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  remainder: { flex: 1, },
}));

class HandDrawer extends Component {
  state = { open: false, };

  handleOpen = () => this.setState({ open: true, });
  handleClose = () => this.setState({ open: false, });

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Drawer</Button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List>
            <ListSubheader />
          </List>
          <CardList className={classes.list} cards={[ ...this.props.hand, ]}/>
          <div className={classes.remainder}/>
        </Drawer>
      </div>
    );
  }
}

HandDrawer.contextTypes = { styleManager: React.PropTypes.object, };
export default connect(stateToProps)(HandDrawer);
