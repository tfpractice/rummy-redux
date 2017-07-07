import React, { Component, } from 'react';
import { Game, Player, Sets, } from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';

import MyHand from './hand';
import { CardSet, } from '../cards';
import { GameActs, } from '../../modules';

const { hand: pHand, matches, copy, } = Player;
const { active, playable, allSets, findPlr, } = Game;
const { possibles, plays, possFits, canPlay, } = Sets;

const stateToProps = ({ game, auth: { user, }, },) => ({
  game,
  user: findPlr(user)(game),
  plays: (plays(allSets(game))(pHand(user))),
});

const styleSheet = createStyleSheet('HandDrawer', () => ({
  list: { width: 250, flex: 'initial', },
  remainder: { flex: 1, },
}));

class PlayerDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, };
  }
  
  handleOpen() {
    this.setState({ open: true, });
  }
  
  handleClose () {
    this.setState({ open: false, });
  }
  
  render() {
    // const classes = this.context.styleManager.render(styleSheet);
    const { user, play, plays, classes, } = this.props;
    
    console.log('plays', plays);
    return (
      <Grid container >
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
                  (<ListItem key={i} onClick={() => play(user)(s)}
                    children={ <CardSet cards={[ ...s, ]}/>}
                  />))}
              </List>
            </ListItem>
            
            <div className={classes.remainder}/>
          </List>

        </Drawer>
      </Grid>
    );
  }
}

export default connect(stateToProps, GameActs)(withStyles(styleSheet)(PlayerDrawer));
