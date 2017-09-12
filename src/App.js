import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import { input, output, calculator } from './components'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/input" activeClassName="active">Input</NavLink></li>
              <li><NavLink to="/output" activeClassName="active">Output</NavLink></li>
              <li><NavLink to="/calculator" activeClassName="active">Calculator</NavLink></li>
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              <Route path="/input" component={input} exact={true} />
              <Route path="/output/:val" component={output} />
              <Route path="/calculator" component={calculator} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
