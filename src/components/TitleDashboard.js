import React from 'react'
import styled from 'styled-components'
import { ToggleOff } from '@styled-icons/material-twotone/ToggleOff'

const ShowCase = styled.div`
width : 77vw ;
height : 10vh ;
display : flex ;
justify-content : space-between ;
align-items : center ;
background-color : #404040;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
border-radius : 30px ;
margin-top : 30px ;
`

const TitleName = styled.div`
align-items : center ;
font-size : 40px ;
color : #ffffff ;
margin : 0 0 0 20px ;
`
const IconToggle = styled.div`
margin : 0 20px 0 0 ;
color : #ffffff;
display : flex ;
align-items : center ; 
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
    <SettingMode>LightMode</SettingMode>
    <ToggleOff size="40" />
    </IconToggle>
    </ShowCase>
  )
}
export default TitleDashboard