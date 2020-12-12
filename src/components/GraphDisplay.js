import React from 'react'
import styled from 'styled-components'
import RealtimeGraph from './RealtimeGraph'
import WeeklyGraph from './WeeklyGraph'
const ShowCase = styled.div`
display : flex ;
flex-direction : column ;
width : 80vw;
height : 85vh;
justify-content : space-around ;
`

const DisplayTop = styled.div`
width : 78vw;
height : 55vh ;
background-color : #404040 ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
display : flex ;
align-items : center ;
flex-direction : column ;
justify-content : space-around ;
`

const AreaGraph = styled.div`
width : 75vw;
height : 40vh ;
background-color : white ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
border-radius : 40px ;
display : flex ;
align-items : center ;
`

const SlotBy = styled.div`
display : flex ;
justify-content : flex-end ;
width : 78vw ;
height : 5vh ;
`

const GraphToday = styled.div`
font-size : 25px ;
color : white ;
padding : 20px 40px 0 0 ;
cursor: pointer;
`

const GraphWeek = styled.div`
font-size : 25px ;
color : white ;
padding : 20px 40px 0 0 ;
cursor: pointer;
`

const GraphMonth = styled.div`
font-size : 25px ;
color : white ;
padding : 20px 40px 0 0 ;
cursor: pointer;
`

const DisplayBottom = styled.div`
width : 78vw;
height : 20vh ;
display : flex ;
justify-content : space-between ;
`

const DisplayMin = styled.div`
width : 24vw;
height : 20vh;
background-color : #404040 ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
display : flex ; 
flex-direction : column ;
justify-content : space-evenly ;
`

const DisplayMax = styled.div`
width : 24vw;
height : 20vh;
background-color : #404040 ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
display : flex ; 
flex-direction : column ;
justify-content : space-evenly ;
`

const DisplayAvg = styled.div`
width : 24vw;
height : 20vh;
background-color : #404040 ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
display : flex ; 
flex-direction : column ;
justify-content : space-evenly ;
`
const TitleCheck = styled.div`
color : white ;
font-size : 30px ;
margin : 0 0 0 40px ;
`
const NumberUnit = styled.div`
display : flex ;
flex-direction : row ;
margin : 0 40px 0 40px ;
align-items : center ;
justify-content : space-between ;
`

const TitleDisplay = styled.div`
color : white ;
font-size : 100px ;

`
const TitleUnit = styled.div`
color : white ;
font-size : 30px ;
`

function GraphDisplay () {
  return (
    <>
    <ShowCase>
    <DisplayTop>
      <SlotBy>
        <GraphToday>Today</GraphToday>
        <GraphWeek>Week</GraphWeek>
        <GraphMonth>Month</GraphMonth>
      </SlotBy>
      <AreaGraph>
        <RealtimeGraph/>
      </AreaGraph>
    </DisplayTop>
    <DisplayBottom>
      <DisplayMin>
        <TitleCheck>Min</TitleCheck>
        <NumberUnit>
        <TitleDisplay>10</TitleDisplay>
        <TitleUnit>Celsius</TitleUnit>
        </NumberUnit>
      </DisplayMin>
      <DisplayMax>
      <TitleCheck>Max</TitleCheck>
      <NumberUnit>
      <TitleDisplay>20</TitleDisplay>
      <TitleUnit>Celsius</TitleUnit>
      </NumberUnit>
      </DisplayMax>
      <DisplayAvg>
        <TitleCheck>Average</TitleCheck>
      <NumberUnit>
        <TitleDisplay>30</TitleDisplay>
        <TitleUnit>Celsius</TitleUnit>
      </NumberUnit>
      </DisplayAvg>
    </DisplayBottom>
    </ShowCase>
    </>
  )
}

export default GraphDisplay
