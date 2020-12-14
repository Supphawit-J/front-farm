import React, { useContext } from 'react'
import styled from 'styled-components'
import { Dashboard } from '@styled-icons/boxicons-solid/Dashboard'
import { TemperatureHigh } from '@styled-icons/fa-solid/TemperatureHigh'
import { Wind } from '@styled-icons/boxicons-regular/Wind'
import { Water } from '@styled-icons/ionicons-outline/Water'
import { Sun } from '@styled-icons/boxicons-regular/Sun'
import { Gumtree } from '@styled-icons/simple-icons/Gumtree'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const ShowCase = styled.div`
display :grid ; 
flex-direction :column ;
justify-content :space-around ;
height :95vh;
width : 16vw;
background-color : #404040;
border-radius : 1.5rem;
box-shadow: 10px 11px 5px -8px rgba(0,0,0,0.32);

`
const MenuLogo = styled.div`
text-align :center;
width : 14vw;
height : 5vw;
margin : 30px 0 0 0 ;
display : flex ;
justify-content : space-between;
align-items : center ;
color : white ;
transition: 0.5s;
`
const TitleLogo = styled.div`
display : flex ;
justify-content : center;
align-items : center;
color : #ffffff;
font-size : 2rem;
letter-spacing: 2.5px;
&:hover{
  color : #F1B24A ;
  transition: 0.5s;
}
`
const MainIcon = styled.div`
padding : 0 0 0 10px ;
color : white ;
transition: 0.5s;
&:hover{
  color : #F1B24A ;
  transition: 0.5s;
}
`
const MenuLayout = styled.div`
text-align :center;
`
const LogoIcon = styled.div`
padding : 0 0 0 10px ;
`

const ListLogo = styled.div`
border-radius : 20px ;
display : flex ;
justify-content : space-between;
margin :0 0 27px 0 ;
align-items : center;
width : 14vw;
height : 4vw ;
color : white ;
transition: 0.5s;
&:hover{
  color : #F1B24A ;
  transition: 0.5s;
}
`

const MenuList = styled.div`
padding : 0 10px 0 0 ;
font-size : 1.6rem ;
letter-spacing: 1px;
&:hover{
  color : #F1B24A ;
}
`

function MenuType () {
  const { setSelect } = useContext(DataContext)

  const handleSelect = (choice) => {
    setSelect(choice)
  }

  return (
    <ShowCase>
      <Link to='/'>
      <MenuLogo>
        <MainIcon>
        <Gumtree size="50"/>
        </MainIcon>
        <TitleLogo>ArgoGreen</TitleLogo>
      </MenuLogo>
      </Link>
      <MenuLayout>
        <Link to='/'>
        <ListLogo>
        <LogoIcon>
        <Dashboard size="45" />
        </LogoIcon>
        <MenuList>Dashboard</MenuList>
        </ListLogo>
        </Link>

        <Link to='/temperature' onClick={() => handleSelect('temp')}>
        <ListLogo>
        <LogoIcon>
        <TemperatureHigh size="45"/>
        </LogoIcon>
        <MenuList>Temperature</MenuList>
        </ListLogo>
        </Link>

        <Link to='/wind' onClick={() => handleSelect('wind')}>
        <ListLogo>
        <LogoIcon>
        <Wind size = "45"/>
        </LogoIcon>
        <MenuList>Wind Speed</MenuList>
        </ListLogo>
        </Link>

        <Link to='/humidity' onClick={() => handleSelect('humidity')}>
        <ListLogo>
        <LogoIcon>
        <Water size ="45"/>
        </LogoIcon>
        <MenuList>Humidity</MenuList>
        </ListLogo>
        </Link>

        <Link to='/light' onClick={() => handleSelect('light')}>
        <ListLogo>
        <LogoIcon>
        <Sun size ="45"/>
        </LogoIcon>
        <MenuList>Light</MenuList>
        </ListLogo>
        </Link>
      </MenuLayout>
    </ShowCase>
  )
}
export default MenuType
