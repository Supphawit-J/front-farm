import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

 html , body , #root {
  height : 100vh ;
  width: 100vw;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px ; 
  scroll-behavior : smooth ;
  background-color : #282828 ;
}

a { 
  text-decoration:none;
  color: inherit;
  font-size : 25px ;
}
`

export default GlobalStyle
