import React, { useContext } from 'react'
import styled from 'styled-components'
import Display from '../components/DisplayDataDashboard/Display'
import { Actioncontext } from '../context/Actioncontext'

const Showcase = styled.div`
  width: 80vw;
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: column wrap;
`

function DataDisplay () {
  const { temp, wind, humi, light } = useContext(Actioncontext)
  return (
    <Showcase>
      <Display
        titledata={temp.titledata}
        titlenumber={temp.titlenumber}
        titleunit={temp.titleunit}
      />
      <Display
        titledata={wind.titledata}
        titlenumber={wind.titlenumber}
        titleunit={wind.titleunit}
      />
      <Display
        titledata={humi.titledata}
        titlenumber={humi.titlenumber}
        titleunit={humi.titleunit}
      />
      <Display
        titledata={light.titledata}
        titlenumber={light.titlenumber}
        titleunit={light.titleunit}
      />
    </Showcase>
  )
}
export default DataDisplay
