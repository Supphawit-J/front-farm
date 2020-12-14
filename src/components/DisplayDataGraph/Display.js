import React from 'react'
import styled from 'styled-components'

const DisplayMin = styled.div`
width : 25vw;
height : 20vh;
/* background-color : #4D774E ;
border-radius : 1.5rem;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32); */
display : flex ; 
flex-direction : column ;
justify-content : space-evenly ;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
`
const TitleCheck = styled.div`
color : white ;
font-size : 3rem ;
margin : 0 0 0 30px ;
`
const NumberUnit = styled.div`
display : flex ;
flex-direction : row ;
margin : 0 30px 0 30px ;
align-items : center ;
justify-content : space-between ;
`

const TitleDisplay = styled.div`
color : white ;
font-size : 5rem ;

`
const TitleUnit = styled.div`
color : white ;
font-size : 2rem ;
`

function Display (props) {
  return (
    <>
      <DisplayMin>
        <TitleCheck>
        <p>{props.titlecheck}</p>
        </TitleCheck>
        <NumberUnit>
        <TitleDisplay>
        <p>{props.titledisplay}</p>
        </TitleDisplay>
        <TitleUnit>
        <p>{props.unitcheck}</p>
        </TitleUnit>
        </NumberUnit>
      </DisplayMin>
    </>
  )
}

export default Display
