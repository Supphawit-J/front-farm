import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Wind () {
  const { weekWind } = useContext(DataContext)

  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Wind Dashboard',
        min: { titlecheck: 'Min', titledisplay: weekWind[6][0].min, unitcheck: 'Km / hr' },
        max: { titlecheck: 'Max', titledisplay: weekWind[6][0].max, unitcheck: 'Km / hr' },
        avg: { titlecheck: 'Average', titledisplay: weekWind[6][0].avg, unitcheck: 'Km / hr' }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Wind
