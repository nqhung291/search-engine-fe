import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'App.css'

const Home = React.lazy(() => import('pages/Home'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path="/403" name="403" />
          <Route exact path="/404" name="404" />
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
