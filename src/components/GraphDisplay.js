import React from 'react'
import styled from 'styled-components'

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

`

const DipslayBottom = styled.div`
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
    <DisplayTop></DisplayTop>
    <DipslayBottom></DipslayBottom>
    </ShowCase>
    </>
  )
}

export default GraphDisplay
