import React, { Component, } from 'react';
import { Game, Player, Sets, } from 'rummy-rules';
import { connect, } from 'react-redux';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader, } from 'material-ui/List';
import { withState, } from 'recompose';
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

const withToggle = withState('open', 'toggle', ({ open, }) => open || false);

const styleSheet = createStyleSheet('HandDrawer', () => ({
  list: { width: 250, flex: 'initial', },
  remainder: { flex: 1, },
}));

class PlayerDrawer extends Component {
  render() {
    const { user, play, plays, toggle, open, classes, } = this.props;

    console.log('plays', plays);
    return (
      <Grid container >
        <Button onClick={() => toggle(x => !x)}>Open Drawer</Button>
        <Drawer
          open={open}
          onRequestClose={() => toggle(x => !x)}
          onClick={() => toggle(x => !x)}
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

export default connect(stateToProps, GameActs)(withStyles(styleSheet)(withToggle(PlayerDrawer)));
