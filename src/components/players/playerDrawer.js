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
const { active, playable, allSets, } = Game;
const { possibles, playables, possFits, } = Sets;

const stateToProps = ({ game, auth: { user, }, }, ) => ({
 game,
 user,
 plays: playables(allSets(game))(pHand(user)),
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
    const { user, play, plays, } = this.props;

    console.log('plays', plays);
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
              Choose a card to discard
            </ListSubheader>
            <ListItem>
              <MyHand user={user} cards={pHand(user)}/>
            </ListItem>
            <Divider/>
            <ListItem>
              <List className={classes.list}>
                <ListSubheader >
                  Possibles
                </ListSubheader>
                {plays.map((s, i) =>
                  <ListItem key={i} onClick={() => play(user)(s)}
                    children={ <CardSet cards={[ ...s, ]}/>}
                  />)}
              </List>
            </ListItem>
            
            <div className={classes.remainder}/>
          </List>

        </Drawer>
      </Layout>
    );
  }
}

PlayerDrawer.contextTypes = { styleManager: React.PropTypes.object, };
export default connect(stateToProps, GameActs)(PlayerDrawer);
