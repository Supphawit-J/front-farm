import React from 'react'
import styled from 'styled-components'

const Display = styled.div`
width : 80vw;
height : 85vh;
display : flex ; 
flex-direction: row ;
justify-content : space-around ;
flex-flow: column wrap;
`

const TopLeft = styled.div`
background-color : #404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

const TopRight = styled.div`
background-color : #404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

const BottomLeft = styled.div`
background-color :#404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

const BottomRight = styled.div`
background-color : #404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

function DataDisplay () {
  return (
    <Display>
    <TopLeft></TopLeft>
    <TopRight></TopRight>
    <BottomLeft></BottomLeft>
    <BottomRight></BottomRight>
    </Display>
  )
}
export default DataDisplay
