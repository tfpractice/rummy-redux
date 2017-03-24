import React, { Component, PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';
import Chip from 'material-ui/Chip';

// const styleSheet = createStyleSheet('PlayCard', theme => ({
//   root: theme.mixins.gutters({
//     paddingTop: 16,
//     paddingBottom: 16,
//   }),
// }));

const CardChip = ({ card: { suit, rank, id, }, pos, }, context) => (
<Chip label={id}
/>);

{ /* (
    <div>
      <Paper elevation={pos}>
        <Text type="headline" component="h3">
          Suit :{card.suit} Rank: {card.rank}
        </Text>
        <Text type="body1" component="p">
          Paper can be used to build surface or other elements for your application.
        </Text>
      </Paper>
    </div>
); */ }

//
// PaperSheet.contextTypes = {
//   styleManager: customPropTypes.muiRequired,
// };
// const PlayCard = ({ card, }) => (
//   <h1>Suit :{card.suit} Rank: {card.rank}</h1>
// );

export default PlayCard;