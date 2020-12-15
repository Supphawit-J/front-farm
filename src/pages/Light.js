import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Light () {
  const { weekLight } = useContext(DataContext)

  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Light Dasboard',
        min: { titlecheck: 'Min', titledisplay: weekLight[6][0].min, unitcheck: 'Lux' },
        max: { titlecheck: 'Max', titledisplay: weekLight[6][0].max, unitcheck: 'Lux' },
        avg: { titlecheck: 'Average', titledisplay: weekLight[6][0].avg, unitcheck: 'Lux' }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Light
