import React from 'react'
import LayoutDashboard from '../components/LayoutDashboard'

import { Actioncontext } from '../context/Actioncontext'

function Dashboard () {
  return (
    <Actioncontext.Provider
      value={{
        temp: {
          titledata: 'Temperature',
          titlenumber: '10',
          titleunit: 'celsius / °C'
        },
        wind: {
          titledata: 'Wind Speed',
          titlenumber: '20',
          titleunit: 'Km , Hr'
        },
        humi: {
          titledata: 'Humidity',
          titlenumber: '30',
          titleunit: 'Percent / %'
        },
        light: { titledata: 'Light', titlenumber: '40', titleunit: 'Lux' }
      }}>
      <LayoutDashboard />
    </Actioncontext.Provider>
  )
}
export default Dashboard
