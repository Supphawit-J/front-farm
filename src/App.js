import React, { Suspense, useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import routes from './config/routes'
import { DataContext } from './context/DataContext'
import { GenerateData } from './utils/generateData'

function App () {
  const [{ bigData, bigData2 }, { useData, handleUpdate, clearData, weekData }] = GenerateData()
  const [temp, setTemp] = useState([])
  const [humidity, setHumidity] = useState([])
  const [light, setLight] = useState([])
  const [wind, setWind] = useState([])
  const [deviceData, setDeviceData] = useState([])
  const [select, setSelect] = useState('')
  const [text, setText] = useState({ temp: 0, light: 0, humi: 0, wind: 0 })

  const handleData = () => {
    setDeviceData(deviceData.splice(0, deviceData.length))
    // bigData2[0]
    //   .data
    //   .dataInOneDay.data.map(index => index)
    //   .filter(device => device.device_id === 'D1' ? deviceData.push(device) : 0)
    bigData.map(index => index).filter(device => device.device_id === 'D1' ? deviceData.push(device) : 0)
  }
  const handleDeviceData = () => {
    // setTemp(temp.splice(0, temp.length))
    setText({
      temp: deviceData[deviceData.length - 1].temp,
      light: deviceData[deviceData.length - 1].lux,
      humi: deviceData[deviceData.length - 1].humidity,
      wind: deviceData[deviceData.length - 1].wind
    })
    deviceData.map(
      index => temp.push({ x: new Date(index.timestamp).getTime(), y: index.temp })
    )

    deviceData.map(
      index => humidity.push({ x: new Date(index.timestamp).getTime(), y: index.humidity })
    )

    deviceData.map(
      index => wind.push({ x: new Date(index.timestamp).getTime(), y: index.wind })
    )
    deviceData.map(
      index => light.push({ x: new Date(index.timestamp).getTime(), y: index.lux })
    )
  }

  // const [weekDevice, setWeekDevice] = useState([])

  // const [weekTemp, setWeekTemp] = useState([])
  // const [weekHumidity, setWeekHumidity] = useState([])
  // const [weekLight, setWeekLight] = useState([])
  // const [weekWind, setWeekWind] = useState([])
  // const handleWeekDevice = () => {
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn1stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn2stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn3stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn4stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn5stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn6stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  //   bigData2[0]
  //     .data
  //     .dataInOneWeek.data.dataOn7stDay
  //     .device.map(index => index)
  //     .filter(device => device.device_id === 'D1' ? weekDevice.push(device) : 0)
  // }

  // const handleWeekTemp = () => {
  //   weekDevice.map(index => weekTemp.push(index.temperature))
  //   weekDevice.map(index => weekHumidity.push(index.humidity))
  //   weekDevice.map(index => weekLight.push(index.sun_lux))
  //   weekDevice.map(index => weekWind.push(index.wind_velocity))
  // }

  const CronJob = require('cron').CronJob

  useEffect(() => {
    useData()
    handleData()
    handleDeviceData()
    // weekData()
    // handleWeekDevice()
    // handleWeekTemp()

    // const job = new CronJob('*/5 * * * * *', function () {
    //   if (bigData.length < 288) {
    //     handleUpdate()
    //     handleData()
    //     handleTemp()
    //   } else {
    //     clearData()
    //   }
    // }, null, true)
  }, [])
  return (
    <DataContext.Provider value={{ text, temp, wind, light, humidity, select, setSelect }}>
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
