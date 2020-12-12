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
width : 13vw;
height : 5vw;
margin : 45px 0 0 0 ;
display : flex ;
justify-content : space-between;
align-items : center ;
border-radius : 30px ;
`
const MainLogo = styled.div`
display : flex ;
justify-content : center;
align-items : center;
color : #ffffff;
font-size : 30px;
padding : 0 10px 0 0 ;
`
const MainIcon = styled.div`
padding : 0 0 0 10px ;
color : white ;
`

const MenuLayout = styled.div`
text-align :center;
`
const LogoIcon = styled.div`
padding : 0 0 0 20px ;
color : white ;
`

const ListLogo = styled.div`
background-color : #F1B24A;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);
border-radius : 30px ;
display : flex ;
justify-content : space-between;
margin :0 0 27px 0 ;
align-items : center;
width : 13vw;
height : 4vw ;
color : white ;
`

const MenuList = styled.div`
padding : 0 20px 0 0 ;
`

function MenuType () {
  return (
    <ShowCase>
      <Link to='/'>
      <MenuLogo>
        <MainIcon>
        <Gumtree size="50"/>
        </MainIcon>
        <MainLogo>ArgoGreen</MainLogo>
      </MenuLogo>
      </Link>
      <MenuLayout>
        <Link to='/'>
        <ListLogo>
        <LogoIcon>
        <Dashboard size="30" />
        </LogoIcon>
        <MenuList>Dashboard</MenuList>
        </ListLogo>
        </Link>

        <Link to='/temperature'>
        <ListLogo>
        <LogoIcon>
        <TemperatureHigh size="30"/>
        </LogoIcon>
        <MenuList>Temperature</MenuList>
        </ListLogo>
        </Link>

        <Link to='/wind'>
        <ListLogo>
        <LogoIcon>
        <Wind size = "30"/>
        </LogoIcon>
        <MenuList>Wind</MenuList>
        </ListLogo>
        </Link>

        <Link to='/humidity'>
        <ListLogo>
        <LogoIcon>
        <Water size ="30"/>
        </LogoIcon>
        <MenuList>Humidity</MenuList>
        </ListLogo>
        </Link>

        <Link to='/light'>
        <ListLogo>
        <LogoIcon>
        <Sun size ="30"/>
        </LogoIcon>
        <MenuList>Light</MenuList>
        </ListLogo>
        </Link>
      </MenuLayout>
    </ShowCase>
  )
}
export default MenuType
