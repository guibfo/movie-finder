import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Favorites, SearchResults } from './pages'

const Routes = () => (
  <Switch>
    <Route path='/my-favorites' exact component={Favorites} />
    <Route path='/search' exact component={SearchResults} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
