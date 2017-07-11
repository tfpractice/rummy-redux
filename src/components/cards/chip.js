import React from 'react';
import Chip from 'material-ui/Chip';

const CardChip = ({ card: { suit, rank, id, }, pos, }, context) => (
  <Chip label={id} />);

export default CardChip;
