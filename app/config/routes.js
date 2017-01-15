import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='/battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)