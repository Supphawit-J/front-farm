import React from 'react'
import styled from 'styled-components'

const Showcase = styled.div`
background-color : #404040 ;
width : 38vw ;
height : 37vh ;
border-radius : 20px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
cursor: pointer;
display : flex; 
flex-direction : column ;
justify-content : space-around ;
transition: 0.5s;
&:hover{
  background-color : #F1B24A ;
  transition: 0.5s;
  opacity: 1;
}
`
const TitleData = styled.div`
color : white ;
font-size : 3rem ;
padding : 0 40px 0 40px ;
text-align : right ;
letter-spacing: 1.5px;
`

const AllData = styled.div`
display : flex ; 
justify-content : space-between ;
align-items : center;
padding : 0 40px 0 80px ;
`

const NumberData = styled.div`
color : white ;
font-size : 7rem ;
`

const UnitData = styled.div`
color : white ;
font-size : 3rem ;
`

function Display (props) {
  return (
    <>
    <Showcase>
      <TitleData>
      <p>{props.titledata}</p>
      </TitleData>
      <AllData>
      <NumberData>
      <p>{props.titlenumber}</p>
      </NumberData>
      <UnitData>
      <p>{props.titleunit}</p>
      </UnitData>
      </AllData>
    </Showcase>
    </>
  )
}
export default Display
