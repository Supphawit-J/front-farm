import React from 'react'
import styled from 'styled-components'

const DisplayMin = styled.div`
width : 25vw;
height : 20vh;
background-color : #404040 ;
border-radius : 20px ;
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

function Display () {
  return (
    <>
      <DisplayMin>
        <TitleCheck>Min</TitleCheck>
        <NumberUnit>
        <TitleDisplay>10</TitleDisplay>
        <TitleUnit>Celsius</TitleUnit>
        </NumberUnit>
      </DisplayMin>
    </>
  )
}

export default Display
