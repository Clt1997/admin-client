import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={ Login } />
          <Route path='/' component={ Admin } />
        </Switch>
      </BrowserRouter>
    )
  }
};