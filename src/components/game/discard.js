import React, { Component, PropTypes, } from 'react';
import { connect, } from 'react-redux';
import { createStyleSheet, } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Paper from 'material-ui/Paper';
import { Tab, Tabs, } from 'material-ui/Tabs';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction,
  ListItemText, ListSubheader, } from 'material-ui/List';
import { Cardl, PlayCard, } from '../cards';
import { GameActs, } from '../../modules';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';

const stateToProps = ({ game: { discard, }, }) => ({ discard, });

const Discard = ({ discard, drawTo, dropNext, }) => (
  <Layout container>
    <Layout item xs={12}>
      <List >
        <ListSubheader>
          <Button onClick={dropNext}>dropNext</Button>
        </ListSubheader>
        {discard.map((c, i) =>
          <ListItem key={c.id}>
            <PlayCard onClick={console.log} card={c} pos={i} key={c.id} />
          </ListItem>)}
      </List>
    </Layout>
    </Layout>
);

export default connect(stateToProps, GameActs)(Discard);
