import React from 'react'
import LayoutDashboard from '../components/LayoutDashboard'

import { Actioncontext } from '../context/Actioncontext'

function Dashboard () {
  return (
    <Actioncontext.Provider
      value={{
        dashboard: { titlename: ' Sensor Dashboard ' },
        temp: {
          titlename: 'Temperature Dashboard',
          titledata: 'Temperature',
          titlenumber: '10',
          titleunit: 'celsius / °C'
        },
        wind: {
          titlename: 'Wind Dashboard',
          titledata: 'Wind Speed',
          titlenumber: '20',
          titleunit: 'Km , Hr'
        },
        humi: {
          titlename: 'Humidity Dashboard',
          titledata: 'Humidity',
          titlenumber: '30',
          titleunit: 'Percent / %'
        },
        light: {
          titelname: 'Light Dashboard',
          titledata: 'Light',
          titlenumber: '40',
          titleunit: 'Lux'
        }
      }}>
      <LayoutDashboard />
    </Actioncontext.Provider>
  )
}
export default Dashboard
