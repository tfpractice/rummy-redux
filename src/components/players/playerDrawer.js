import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import List, { ListItem, ListSubheader } from 'material-ui/List';
import { connect } from 'react-redux';
import { spread } from 'fenugreek-collections';
import { Game, Player, Sets } from 'rummy-rules';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { compose, withHandlers, withState } from 'recompose';

import { CardSet } from '../cards';
import { GameActs } from '../../modules';
import MyHand from './hand';

const { hand: pHand } = Player;
const { allSets, findPlr, isActive } = Game;
const { plays: sPlays } = Sets;

const stateToProps = ({ game, auth: { user }}) => ({
  user: findPlr(user)(game),
  active: isActive(game)(user),
  hand: pHand(findPlr(user)(game)),
  plays: sPlays(allSets(game))(pHand(findPlr(user)(game))).map(spread),
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
  createStyleSheet('HandDrawer', () => ({
    list: { width: 250, flex: 'initial' },
    remainder: { flex: 1 },
  }))
);

const PlayerDrawer = ({
  user,
  play,
  sets,
  hand,
  plays,
  toggle,
  open,
  active,
  classes,
}) =>
  (<Grid container>
    <Button fab color={active ? 'accent' : 'default'} onClick={toggle}>
      My Hand
    </Button>
    <Drawer open={open} onRequestClose={toggle} onClick={toggle}>
      <List className={classes.list}>
        <ListSubheader>Choose a card to discard</ListSubheader>
        <ListItem divider>
          <MyHand user={user} cards={hand} />
        </ListItem>
        <ListItem>
          <List className={classes.list}>
            <ListSubheader>Possibles</ListSubheader>
            {plays.map((s, i) =>
              (<ListItem key={i} button divider onClick={play(s)}>
                <CardSet cards={s} />
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
