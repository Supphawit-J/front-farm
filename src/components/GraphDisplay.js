import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Display from '../components/DisplayDataGraph/Display'
import { Actioncontext } from '../context/Actioncontext'

import RealtimeGraph from './RealtimeGraph'
import WeeklyGraph from './WeeklyGraph'
const ShowCase = styled.div`
display : flex ;
flex-direction : column ;
width : 80vw;
height : 83vh;
justify-content : space-around ;
`

const DisplayTop = styled.div`
width : 78vw;
height : 55vh ;
background-color : #fff ;
border-radius : 1.5rem;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
display : flex ;
align-items : center ;
flex-direction : column ;
justify-content : flex-start ;
`

const SlotBy = styled.div`
display : flex ;
justify-content : flex-end ;
width : 78vw ;
height : 5vh ;
margin: .8rem 10rem .2rem 0rem;
`

const GraphMenu = styled.button`
font-family: 'Poppins', sans-serif;
font-size : 1rem ;
color : #000 ;
text-decoration: none;
background-color: #fff;
border: none;
cursor: pointer;
outline:none;
margin: .5rem;
transition:  color 0.2s linear;
&:hover {
  color: #F1B24A;
}
&:focus{
  font-weight: bold;
}
`

const DisplayBottom = styled.div`
width : 78vw;
height : 18vh ;
display : flex ;
justify-content : space-between ;
`

const DisplayMin = styled.div`
width : 25vw;
height : 20vh;
background-color : #404040 ;
border-radius : 2rem ;
box-shadow: 10px 211px 5px -8px rgba(0,0,0,0.32);
display : flex ; 
flex-direction : column ;
justify-content : space-evenly ;
padding: 0.1rem;
`

const TitleCheck = styled.div`
color : white ;
font-size : 2rem ;
margin : 0 0 0 40px ;
`
const NumberUnit = styled.div`
display : flex ;
flex-direction : row ;
margin : 0 40px ;
align-items : center ;
justify-content : space-between ;
`

const TitleDisplay = styled.div`
color : white ;
font-size : 6rem ;

`
const TitleUnit = styled.div`
color : white ;
font-size : 2rem ;
`

function GraphDisplay () {
  const { min, max, avg } = useContext(Actioncontext)
  const [status1, setStatus1] = useState(true)
  const [status2, setStatus2] = useState(false)

  const handleStatus = (choice) => {
    if (choice === 'day') {
      setStatus1(true)
      setStatus2(false)
    } else {
      setStatus1(false)
      setStatus2(true)
    }
  }

  return (
    <>
    <ShowCase>
    <DisplayTop>
        <SlotBy>
          <GraphMenu onClick={() => handleStatus('day')}>Today</GraphMenu>
          <GraphMenu onClick={() => handleStatus('week')}>Last 7 day</GraphMenu>
        </SlotBy>
        <RealtimeGraph status={status1} />
        <WeeklyGraph status={status2}/>
    </DisplayTop>
    <DisplayBottom>
      <Display titlecheck={ min.titlecheck } titledisplay ={ min.titledisplay } unitcheck ={ min.unitcheck }/>
      <Display titlecheck={ max.titlecheck } titledisplay ={ max.titledisplay } unitcheck ={ max.unitcheck }/>
      <Display titlecheck={ avg.titlecheck } titledisplay ={ avg.titledisplay } unitcheck ={ avg.unitcheck }/>
    </DisplayBottom>
    </ShowCase>
    </>
  )
}

export default GraphDisplay
