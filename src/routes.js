import React, { Component, } from 'react';
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom';
import { Boiler, NoMatch } from './components';

export class Routes extends Component {
  
  render () {
    return (
  <BrowserRouter>
    <div className="Game">
      <h1>Rummy Redux</h1>
      <div className="container">
        <Switch>
          <Route path="/"  component={Boiler} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>

    );
  }
}

export default Routes;
