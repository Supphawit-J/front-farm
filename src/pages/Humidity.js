import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import LayoutData from '../components/LayoutData'
import { Actioncontext } from '../context/Actioncontext'

function Humidity () {
  const { weekHumidity } = useContext(DataContext)
  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Humidity Dashboard',
        min: {
          titlecheck: 'Min',
          titledisplay: weekHumidity[6][0].min,
          unitcheck: 'Percent / %'
        },
        max: {
          titlecheck: 'Max',
          titledisplay: weekHumidity[6][0].max,
          unitcheck: 'Percent / %'
        },
        avg: {
          titlecheck: 'Average',
          titledisplay: weekHumidity[6][0].avg,
          unitcheck: 'Percent / %'
        }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Humidity
