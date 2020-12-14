import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

 html , body , #root {
  height : 100vh ;
  width: 100vw;
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Poppins', sans-serif;
  font-size: 20px ; 
  scroll-behavior : smooth ;
  /* background-color : #282828 ; */
  /* background: linear-gradient(90deg, rgba(0,90,167,1) 0%, rgba(255,253,228,1) 100%); */
  /* background: linear-gradient(90deg, rgba(0,201,255,1) 0%, rgba(146,254,157,1) 100%); */
  background: linear-gradient(90deg, rgba(0,0,70,1) 38%, rgba(28,181,224,1) 100%);
}

a { 
  text-decoration:none;
  color: inherit;
  font-size : 25px ;
}
`

export default GlobalStyle
