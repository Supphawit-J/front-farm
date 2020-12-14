import React from 'react'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Humidity () {
  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Humidity Dashboard',
        min: {
          titlecheck: 'Min',
          titledisplay: '10',
          unitcheck: 'Percent / %'
        },
        max: {
          titlecheck: 'Max',
          titledisplay: '20',
          unitcheck: 'Percent / %'
        },
        avg: {
          titlecheck: 'Average',
          titledisplay: '35',
          unitcheck: 'Percent / %'
        }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Humidity
