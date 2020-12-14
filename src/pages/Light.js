import React from 'react'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Light () {
  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Light Dasboard',
        min: { titlecheck: 'Min', titledisplay: '10', unitcheck: 'Lux' },
        max: { titlecheck: 'Max', titledisplay: '20', unitcheck: 'Lux' },
        avg: { titlecheck: 'Average', titledisplay: '35', unitcheck: 'Lux' }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Light
