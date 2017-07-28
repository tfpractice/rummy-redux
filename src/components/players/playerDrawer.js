import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListSubheader } from 'material-ui/List';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';
import { Game, Player, Sets } from 'rummy-rules';
import { connect } from 'react-redux';

import { GameActs } from '../../modules';
import { CardSet } from '../cards';
import MyHand from './hand';

const { hand: pHand } = Player;
const { allSets, findPlr } = Game;
const { plays } = Sets;

const stateToProps = ({ game, auth: { user }}) => ({
  game,
  user: findPlr(user)(game),
  hand: pHand(findPlr(user)(game)),
  plays: plays(allSets(game))(pHand(user)),
});

const mergeProps = (state, dis, own) => ({
  ...state,
  ...dis,
  ...own,
  play: s => () => dis.play(state.user)(s),
});

const withSwitch = compose(
  withState('open', 'turn', ({ open }) => !!open),
  withHandlers({ toggle: ({ turn }) => () => turn(x => !x) })
);

const styled = withStyles(
  createStyleSheet('HandDrawer', theme => ({
    list: { width: 250, flex: 'initial' },
    remainder: { flex: 1 },
  }))
);

const PlayerDrawer = ({ user, play, plays, hand, toggle, open, classes }) =>
  (<Grid container>
    <Button fab onClick={toggle}>
      My Hand
    </Button>
    <Drawer open={open} onRequestClose={toggle} onClick={toggle}>
      <List className={classes.list}>
        <ListSubheader>Choose a card to discard</ListSubheader>
        <ListItem>
          <MyHand user={user} cards={hand} />
        </ListItem>
        <Divider />
        <ListItem>
          <List className={classes.list}>
            <ListSubheader>Possible Sets</ListSubheader>
            {plays.map((s, i) =>
              (<ListItem key={i} onClick={play(s)}>
                <CardSet cards={[ ...s ]} />
              </ListItem>)
            )}
          </List>
        </ListItem>
      </List>
    </Drawer>
  </Grid>);

export default connect(stateToProps, GameActs, mergeProps)(
  withSwitch(styled(PlayerDrawer))
);
