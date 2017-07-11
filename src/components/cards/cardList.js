import React from 'react';
import List from 'material-ui/List';

import PlayCard from './playCard';

const CardList = ({ cards, }) => (
  <List>
    {cards.map((c, i) =>
      <PlayCard card={c} pos={i} key={c.id}/>
    )}
  </List>
);

export default (CardList);
