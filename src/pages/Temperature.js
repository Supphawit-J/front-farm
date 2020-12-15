import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Temperature () {
  const { weekTemp } = useContext(DataContext)

  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Temperature Dashboard',
        min: {
          titlecheck: 'Min',
          titledisplay: weekTemp[6][0].min,
          unitcheck: 'Celsius / °C'
        },
        max: {
          titlecheck: 'Max',
          titledisplay: weekTemp[6][0].max,
          unitcheck: 'Celsius / °C'
        },
        avg: {
          titlecheck: 'Average',
          titledisplay: weekTemp[6][0].avg,
          unitcheck: 'Celsius / °C'
        }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Temperature
