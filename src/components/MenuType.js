import React from 'react'
import styled from 'styled-components'
import { Dashboard } from '@styled-icons/boxicons-solid/Dashboard'
import { TemperatureHigh } from '@styled-icons/fa-solid/TemperatureHigh'
import { Wind } from '@styled-icons/boxicons-regular/Wind'
import { Water } from '@styled-icons/ionicons-outline/Water'
import { Sun } from '@styled-icons/boxicons-regular/Sun'
import { Gumtree } from '@styled-icons/simple-icons/Gumtree'
import { Link } from 'react-router-dom'

const ShowCase = styled.div`
display :grid ; 
flex-direction :column ;
justify-content :space-around ;
height :95vh;
width : 15vw;
background-color : #404040;
border-radius : 20px;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);

`
const MenuLogo = styled.div`
text-align :center;
padding-top: 30px ;
display : flex ;
flex-direction : row ;
`
const MainLogo = styled.div`
display : flex ;
justify-content : center;
align-items : center;
background-color : #F1B24A;
color : #ffffff;
width : 13vw;
height : 5vw;
border-radius : 30px ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
font-size : 30px;

`

const MenuLayout = styled.div`
text-align :center;
`

const MenuList = styled.div`
display : flex ;
justify-content : space-evenly;
align-items : center;
background-color : #F1B24A;
width : 13vw;
height : 3vw;
border-radius : 30px ;
margin-bottom : 40px;
color : white ;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
`

function MenuType () {
  return (
    <ShowCase>
      <MenuLogo>
        <Link to='/'><MainLogo><Gumtree size="30"/>ArgoGreen</MainLogo></Link>
      </MenuLogo>
      <MenuLayout>
        <Link to='/'><MenuList><Dashboard size="30" />Dashboard</MenuList></Link>

        <Link to='/temperature'><MenuList><TemperatureHigh size="30"/>Temperature</MenuList></Link>

        <Link to='/wind'><MenuList><Wind size = "30"/>Wind</MenuList></Link>

        <Link to='/humidity'><MenuList><Water size ="30"/>Humidity</MenuList></Link>

        <Link to='/light'><MenuList><Sun size ="30"/>Light</MenuList></Link>
      </MenuLayout>
    </ShowCase>
  )
}
export default MenuType
