import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import { List, ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import { CardList, } from '../cards';

const getPlayerHand = user => g => user.id && g.players.find(p => p.id === user.id).hand;
const stateToProps = ({ auth: { user, }, game, }) =>
({ hand: !!user && getPlayerHand(user)(game), });

const styleSheet = createStyleSheet('HandDrawer', () => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  remainder: { flex: 1, },
}));

class HandDrawer extends Component {
  state = { open: false, };

  handleOpen = () => this.setState({ open: true, });
  handleClose = () => this.setState({ open: false, });

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Drawer</Button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List className={classes.list} padding={false}>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List className={classes.list} padding={false}>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="All mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
          <div className={classes.remainder} />
        </Drawer>
      </div>
    );
  }
}

HandDrawer.contextTypes = { styleManager: React.PropTypes.object, };
export default connect(stateToProps)(HandDrawer);
