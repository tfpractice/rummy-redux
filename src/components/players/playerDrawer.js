import React, { Component, } from 'react';
import * as RUMMY from 'rummy-rules';
import { Game, Player, Sets, } from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { Tab, Tabs, } from 'material-ui/Tabs';
import Layout from 'material-ui/Layout';

import { CardList, CardSet, } from '../cards';

const { hand: pHand, matches, copy, } = Player;
const { active, playable, } = Game;
const { possibles, } = Sets;

const getUser = user => game => game.players.find(matches(user));
const getPlayerHand = user => g => user ? pHand(getUser(user)(g)) : [];
const stateToProps = ({ auth: { user, }, game, }) =>
({
 user,
 hand: (getPlayerHand(user)(game)),
 sets: possibles(getPlayerHand(user)(game)).filter(p => playable(...p)(game)),
});

const styleSheet = createStyleSheet('HandDrawer', () => ({
  list: { width: 250, flex: 'initial', },
  remainder: { flex: 1, },
}));

class PlayerDrawer extends Component {
  state = { open: false, };

  handleOpen = () => this.setState({ open: true, });
  handleClose = () => this.setState({ open: false, });

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const { hand, user, sets, } = this.props;

    return (
      <Layout container >
        <Button onClick={this.handleOpen}>Open Drawer</Button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List className={classes.list}>
            <ListSubheader >
              USername
            </ListSubheader>
            <CardList cards={hand}/>
            <List className={classes.list}>
              <ListSubheader >
                possibles
              </ListSubheader>
              {sets.map((p, i) => <CardSet key={i} cards={[ ...p, ]}/>
              )}
            </List>

            <div className={classes.remainder}/>
          </List>

        </Drawer>
      </Layout>
    );
  }
}

PlayerDrawer.contextTypes = { styleManager: React.PropTypes.object, };
export default connect(stateToProps)(PlayerDrawer);
