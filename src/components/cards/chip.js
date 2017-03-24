import React, { Component, PropTypes, } from 'react';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';
import Chip from 'material-ui/Chip';

const CardChip = ({ card: { suit, rank, id, }, pos, }, context) => (
<Chip label={id}
/>);

export default CardChip;
