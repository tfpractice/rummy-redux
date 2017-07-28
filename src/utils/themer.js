import createPalette from 'material-ui/styles/palette';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import { createMuiTheme } from 'material-ui/styles/';

export const palette = createPalette({
  primary: grey,
  accent: red,
  type: 'dark',
});

export const theme = createMuiTheme({ palette });
