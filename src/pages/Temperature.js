import React from 'react'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Temperature () {
  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Temperature Dashboard',
        min: {
          titlecheck: 'Min',
          titledisplay: '10',
          unitcheck: 'Celsius / °C'
        },
        max: {
          titlecheck: 'Max',
          titledisplay: '20',
          unitcheck: 'Celsius / °C'
        },
        avg: {
          titlecheck: 'Average',
          titledisplay: '35',
          unitcheck: 'Celsius / °C'
        }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Temperature
