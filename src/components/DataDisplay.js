import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
cursor: pointer;
display : flex; 
flex-direction : column ;
justify-content : space-around ;
`

const TopRight = styled.div`
background-color : #404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
cursor: pointer;
display : flex; 
flex-direction : column ;
justify-content : space-around ;
`

const BottomLeft = styled.div`
background-color :#404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
cursor: pointer;
display : flex; 
flex-direction : column ;
justify-content : space-around ;
`

const BottomRight = styled.div`
background-color : #404040 ;
width : 37vw ;
height : 37vh ;
border-radius : 50px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
cursor: pointer;
display : flex; 
flex-direction : column ;
justify-content : space-around ;
`
const TitleData = styled.div`
color : white ;
font-size : 40px ;
padding : 0 40px 0 40px ;
text-align : right ;
`

const AllData = styled.div`
display : flex ; 
justify-content : space-between ;
align-items : center;
padding : 0 40px 0 80px ;
`

const NumberData = styled.div`
color : white ;
font-size : 150px ;
`

const UnitData = styled.div`
color : white ;
font-size : 30px ;
`

function DataDisplay () {
  return (
    <Display>
    <Link to='/temperature'>
    <TopLeft>
      <TitleData>Temperature Today</TitleData>
      <AllData>
      <NumberData>10</NumberData>
      <UnitData>Celsius</UnitData>
      </AllData>
    </TopLeft>
    </Link>
    <Link to='/humidity'>
    <TopRight>
      <TitleData>Humidity Today</TitleData>
      <AllData>
      <NumberData>20</NumberData>
      <UnitData>Percent / %</UnitData>
      </AllData>
    </TopRight>
    </Link>
    <Link to='/wind'>
    <BottomLeft>
      <TitleData>Wind Today</TitleData>
      <AllData>
      <NumberData>30</NumberData>
      <UnitData>Km / hr</UnitData>
      </AllData>
    </BottomLeft>
    </Link>
    <Link to='/light'>
    <BottomRight>
      <TitleData>Light Today</TitleData>
      <AllData>
      <NumberData>40</NumberData>
      <UnitData>Lux</UnitData>
      </AllData>
    </BottomRight>
    </Link>
    </Display>
  )
}
export default DataDisplay
