import React from 'react';
import { connect, } from 'react-redux';

import PlayCard from './playCard';

const stateToProps = ({ game: { deck, }, }) => ({ deck, });

const Deck = ({ cards, }) => (
  <div>
    <div>
      {cards.map((c, i) => <PlayCard card={c} pos={i} key={c.id}/>)}
    </div>

  </div>);

export default connect(stateToProps)(Deck);
