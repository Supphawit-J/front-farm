import React from 'react'
import styled from 'styled-components'
import { ToggleOff } from '@styled-icons/material-twotone/ToggleOff'

const ShowCase = styled.div`
width : 78vw ;
height : 10vh ;
display : flex ;
justify-content : space-between ;
align-items : center ;
border-radius : 30px ;
margin : 40px 0 0 0 ;
`

const TitleName = styled.div`
align-items : center ;
font-size : 65px ;
color : #ffffff ;
margin : 0 0 0 35px ;
cursor: pointer;
`
const IconToggle = styled.div`
color : #ffffff;
display : flex ;
align-items : center ;
margin : 0 35px 0 0 ;
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
