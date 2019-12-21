import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Root from './components/Root'
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn/'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={Root} path="/" exact />
        <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  )
}
