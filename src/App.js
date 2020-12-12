import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import routes from './config/routes'

function App () {
  return (
    <>
      <GlobalStyle/>
      <Reset/>
      <Router>
        <Suspense fallback = '...loading'>
        <Switch>
            {Object.keys(routes).map(routeKey => (
        <Route key = {routeKey} {...routes[routeKey] }/>))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('ArgoGreen | CAMT DII')(App)
