import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/views/home'
import Content from '../components/layouts/content'
function Routes() {
  return (
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exaxt path="/purchase" component={Purchase} /> */}
      </Switch>
    </Content>
  )
}

export default Routes
