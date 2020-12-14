import React from 'react'
import styled from 'styled-components'

const Showcase = styled.div`
width : 38vw ;
height : 37vh ;
/* background-color : #404040 ; */
/* border-radius : 1.5rem;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32); */
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
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
letter-spacing: 3px;
border-radius : 1.5rem;
`

const AllData = styled.div`
display : flex ; 
justify-content : space-between ;
align-items : center;
padding : 0 40px 0 70px ;
`

const UnitData = styled.div`
color : white ;
font-size : 3rem ;
letter-spacing: 2px;
`

function Display (props) {
  const NumberData = styled.div`
  color : ${props.titlenumber >= 27 ? 'red' : 'white'} ;
  font-size : 8rem ;
  letter-spacing: 2px;
  `
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
