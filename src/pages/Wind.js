import React from 'react'
import LayoutData from '../components/LayoutData'

import { Actioncontext } from '../context/Actioncontext'

function Wind () {
  return (
    <Actioncontext.Provider
      value={{
        titlename: 'Wind Dashboard' ,
        min: { titlecheck: 'Min', titledisplay: '10', unitcheck: 'Km / hr' },
        max: { titlecheck: 'Max', titledisplay: '20', unitcheck: 'Km / hr' },
        avg: { titlecheck: 'Average', titledisplay: '35', unitcheck: 'Km / hr' }
      }}>
      <LayoutData />
    </Actioncontext.Provider>
  )
}
export default Wind
