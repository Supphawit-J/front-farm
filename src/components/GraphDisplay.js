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
padding:2rem 1rem;
`

const DisplayBottom = styled.div`
width : 78vw;
height : 20vh ;
background-color : #404040 ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

function GraphDisplay () {
  return (
    <>
    <ShowCase>
    <DisplayTop>
    <RealtimeGraph/>
    </DisplayTop>
    <DisplayBottom>
    {/* <WeeklyGraph/> */}
    </DisplayBottom>
    </ShowCase>
    </>
  )
}

export default GraphDisplay
