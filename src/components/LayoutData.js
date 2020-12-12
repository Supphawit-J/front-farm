import React from 'react'
import styled from 'styled-components'
import MenuType from './MenuType'
import TitleDashboard from '../components/TitleDashboard'
import GraphDisplay from '../components/GraphDisplay'

const Showcase = styled.div`
  display : flex ;
`
const ContentLeft = styled.div`
height : 100vh;
width : 20vw;
display : flex;
justify-content : center;
align-items : center;
`

const ContentRight = styled.div`
height : 100vh;
width : 80vw ;
display : flex ;
flex-direction : column ;
`
const TitleBar = styled.div`
width : 80vw;
height : 15vh;
`

const DisplayDashboard = styled.div`
width : 80vw;
height : 85vh;
`

function LayoutData () {
  return (
  <>
      <Showcase>
        <ContentLeft>
          <MenuType/>
        </ContentLeft>
        <ContentRight>
          <TitleBar>
            <TitleDashboard/>
          </TitleBar>
          <DisplayDashboard>
            <GraphDisplay/>
          </DisplayDashboard>
        </ContentRight>
      </Showcase>
  </>
  )
}
export default LayoutData
