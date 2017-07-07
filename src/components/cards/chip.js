import React from 'react';

import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

const CardChip = ({ card: { suit, rank, id, }, pos, }, context) => (
  <Chip label={id}
  />);

export default CardChip;
