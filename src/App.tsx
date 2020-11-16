import AppLayout from 'layouts/AppLayout'
import PrivateRoute from 'layouts/PrivateRoute'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/403" name="403" />
        <Route exact path="/404" name="404" />
        <PrivateRoute path="/" name="Layout" component={AppLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
