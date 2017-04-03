import React, { Component, } from 'react';
import * as RUMMY from 'rummy-rules';
import { Game, Player, Sets, } from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';
import MyHand from './hand';
import { CardSet, } from '../cards';
import { GameActs, } from '../../modules';
const { hand: pHand, matches, copy, } = Player;
const { active, playable, } = Game;
const { possibles, } = Sets;

const getUser = user => g => g.players.find(matches(user)) || active(g);
const getPlayerHand = user => g => user ? pHand(getUser(user)(g)) : [];

const stateToProps = ({ auth: { user, }, game, }) => {
  // console.log(' possibles(getPlayerHand(user)(game))',
  //  possibles(getPlayerHand(user)(game)).filter(p => playable(...p)(game)));
  // console.log('(getPlayerHand(user)(game))', (getPlayerHand(user)(game)));
  console.log('drawe', user);

  // console.log('user.hand', user.hand);

  // console.log('possibles(getPla', possibles(getPlayerHand(user)(game)));
  return ({
  user,

  // hand: (getPlayerHand(user)(game)),
  sets:  user ? possibles(getPlayerHand(user)(game))
    .filter(p => playable(...p)(game)) : [],
  });
};
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
    const { user, sets, isActive, play, } = this.props;

    console.log('sets', sets);
    return (!!user &&
      <Layout container >
        <Button onClick={this.handleOpen}>Open Drawer</Button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List className={classes.list}>
            <ListSubheader >
              Choose a card to discard
            </ListSubheader>
            <ListItem>
              {/* <MyHand user={user} isActive={isActive}/> */}
            </ListItem>
            <Divider/>
            <ListItem>
              <List className={classes.list}>
                <ListSubheader >
                  Possibles
                </ListSubheader>
                {/* {sets.map((p, i) =>
                  <ListItem onClick={() => isActive && play(...p)} key={i}>
                  <CardSet cards={[ ...p, ]}/>
                </ListItem>)} */}
              </List>
            </ListItem>
            <Divider/>

            <div className={classes.remainder}/>
          </List>

        </Drawer>
      </Layout>
    );
  }
}

PlayerDrawer.contextTypes = { styleManager: React.PropTypes.object, };
export default connect(stateToProps, GameActs)(PlayerDrawer);
