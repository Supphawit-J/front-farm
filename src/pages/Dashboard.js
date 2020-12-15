import React, { useContext } from 'react'
import LayoutDashboard from '../components/LayoutDashboard'

import { Actioncontext } from '../context/Actioncontext'
import { DataContext } from '../context/DataContext'

function Dashboard () {
  const { text } = useContext(DataContext)

  return (
    <Actioncontext.Provider
      value={{
        dashboard: { titlename: ' Sensor Dashboard ' },
        temp: {
          id: 'temp',
          titlename: 'Temperature Dashboard',
          titledata: 'Temperature',
          titlenumber: text.temp,
          titleunit: 'Celsius ( °C )'
        },
        wind: {
          id: 'wind',
          titlename: 'Wind Dashboard',
          titledata: 'Wind Speed',
          titlenumber: text.wind,
          titleunit: 'Km / Hr'
        },
        humi: {
          id: 'wind',
          titlename: 'Humidity Dashboard',
          titledata: 'Humidity',
          titlenumber: text.humi,
          titleunit: 'Percent ( % )'
        },
        light: {
          id: 'light',
          titelname: 'Light Dashboard',
          titledata: 'Light',
          titlenumber: text.light,
          titleunit: 'Lux'
        }
      }}>
      <LayoutDashboard />
    </Actioncontext.Provider>
  )
}
export default Dashboard
