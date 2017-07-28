import React from 'react';
import { connect } from 'react-redux';
import { CardIcon } from '../cards';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';

import { GameActs } from '../../modules';

const MyHand = ({ user, cards, dropCards }) =>
  (<Grid container justify="center" align="center" gutter={8}>
    {cards.map(c =>
      (<IconButton key={c.id} onClick={() => dropCards(user)(c)}>
        <CardIcon card={c} />
      </IconButton>)
    )}
  </Grid>);

export default connect(null, GameActs)(MyHand);
