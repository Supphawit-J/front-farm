import React, { Suspense, useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import routes from './config/routes'
import { DataContext } from './context/DataContext'
import { GenerateData } from './utils/generateData'

function App () {
  const [{ bigData }, { useData, handleUpdate, clearData }] = GenerateData()
  const [temp, setTemp] = useState([])
  const [humidity, setHumidity] = useState([])
  const [light, setLight] = useState([])
  const [wind, setWind] = useState([])
  const [deviceData, setDeviceData] = useState([])
  const [select, setSelect] = useState('')
  const handleData = () => {
    setDeviceData(deviceData.splice(0, deviceData.length))
    bigData.map(index => index)
      .filter(device => device.device_id === 'D1' ? deviceData.push(device) : 0)
  }
  const handleTemp = () => {
    setTemp(temp.splice(0, temp.length))

    deviceData.map(
      index => temp.push({ x: new Date(index.timestamp).getTime(), y: index.temp })
    )
  }
  const handleHumidity = () => {
    deviceData.map(
      index => humidity.push({ x: new Date(index.timestamp).getTime(), y: index.humidity })
    )
  }
  const handleWind = () => {
    deviceData.map(
      index => wind.push({ x: new Date(index.timestamp).getTime(), y: index.wind })
    )
  }
  const handleLight = () => {
    deviceData.map(
      index => light.push({ x: new Date(index.timestamp).getTime(), y: index.lux })
    )
  }
  const CronJob = require('cron').CronJob

  const job = new CronJob('*/1 * * * * *', function () {
    if (bigData.length < 288) {
      handleUpdate()
      handleData()
      handleTemp()
      handleHumidity()
      handleLight()
      handleWind()
      // console.log(bigData)
    } else {
      clearData()
    }
  })

  useEffect(() => {
    job.start()
  }, [])
  return (
    <DataContext.Provider value={{ temp, wind, light, humidity, select, setSelect }}>
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
