import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import routes from './config/routes'
import { DataContext } from './context/DataContext'
import { GenerateData } from './utils/generateData'

function App () {
  const [{ bigData }, { useData }] = GenerateData()
  const [temp, setTemp] = useState([])
  const [deviceData, setDeviceData] = useState([])
  const handleData = () => {
    deviceData.push(
      bigData.map(index => index)
        .filter(device => device.device_id === 'D1'))
  }
  const handleTemp = () => {
    temp.push(
      deviceData.map(
        index => ({ x: new Date(index.timestamp).getTime(), y: index.temp })
      )
    )
  }

  useEffect(() => {
    useData()
    handleData()
    handleTemp()
  }, [])

  return (
    <DataContext.Provider>
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
    </DataContext.Provider>
  )
}

export default withHelmet('ArgoGreen')(App)
