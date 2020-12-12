import React from 'react'
import styled from 'styled-components'
import { ToggleOff } from '@styled-icons/material-twotone/ToggleOff'

const ShowCase = styled.div`
width : 77vw ;
height : 10vh ;
display : flex ;
justify-content : space-between ;
align-items : center ;
/* background-color : #404040;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32); */
border-radius : 30px ;
margin : 45px 0 0 0 ; 
`

const TitleName = styled.div`
align-items : center ;
font-size : 65px ;
color : #ffffff ;
margin : 0 0 0 20px ;
cursor: pointer;
`
const IconToggle = styled.div`
color : #ffffff;
display : flex ;
align-items : center ; 
cursor: pointer;
`
const SettingMode = styled.div`
font-size : 20px;
margin : 0 20px 0 0 ;
`

function TitleDashboard () {
  return (
    <ShowCase>
    <TitleName>Sensor Dashboard</TitleName>
    <IconToggle>
    <SettingMode>Dark Mode</SettingMode>
    <ToggleOff size="40" />
    </IconToggle>
    </ShowCase>
  )
}
export default TitleDashboard
