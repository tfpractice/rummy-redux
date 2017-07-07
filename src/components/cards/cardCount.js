import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia, } from 'material-ui/Card';

const CardBackUrl =
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/314px-Card_back_06.svg.png';

const styleSheet = createStyleSheet('CardCount', theme => ({
  root: { backgroundColor: 'transparent', },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
  },
}));

const CardCount = ({ cards, classes, ...props }) => (
  <Card className={classes.root}>
    <CardMedia>
      <img src={CardBackUrl}/>
      <Text className={classes.text} type="headline" component="h3">
        {cards && cards.length}
      </Text>
    </CardMedia>
  </Card>
);

export default withStyles(styleSheet)(CardCount);

CardCount.contextTypes = { styleManager: PropTypes.object, };
