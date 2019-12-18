import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Login from './login/'
import 'antd/dist/antd.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    {/* <Route path="/admin" component={Admin} /> */}
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
