import React from 'react';
import { createStyleSheet, withStyles, } from 'material-ui/styles';
import Text from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia, } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const CardBackUrl =
'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/314px-Card_back_06.svg.png';

const styleSheet = createStyleSheet('CardCount', theme => ({
  root: {
    // minHeight: '100%',
    // minWidth: '100%',

    backgroundColor: 'transparent',

    // backgroundImage: `url(${CardBackUrl})`,
    // bacgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '-ms-transform': 'translate(-50%, -50%)',
  },
  img: { maxWidth: '100%', },
  box: { minHeight: '100%', minWidth: '100%', },
}));

const CardCount = ({ cards, classes, ...props }) => (

  <Grid container className={classes.root} >
    <Grid item xs>
      <CardMedia>
        <img src={CardBackUrl}/>
        <Text align="center" className={classes.text} type="display1" >
          {cards && cards.length}
        </Text>
      </CardMedia>
    </Grid>
  </Grid>

);

export default withStyles(styleSheet)(CardCount);
