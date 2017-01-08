import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/home' component={Home}></Route>
    </Route>
  </Router>
)