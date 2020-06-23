import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
// Instalada la librería styled-icons
// Importamos el icono
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import colors from 'colors'
import { lightTheme, darkTheme } from 'theme'

// Lo podemos utilizar en un nuevo componente con styled para darle estilos
const ReactIcon = styled(ReactLogo)`
  width: 40px;
  color: blue;
`

// Mixin
const borderedRadius = css`
  border-radius: 10px;
  border: 2px ${(props) => props.borderStyle || 'solid'} black;
  box-sizing: border-box;
`

const boxShadow = (amount = 5) => css`
  box-shadow: 0 ${amount}px 3px 1px rgba(0, 0, 0, 0.3);
`

const Card = styled.article`
  height: 200px;
  margin: 10px;
  background-color: ${colors.primary};
  ${borderedRadius}
  ${boxShadow(5)}
`

const CardGreen = styled(Card)`
  background-color: darkgreen;
`

const Input = styled.input`
  width: 300px;
  height: 40px;
  ${borderedRadius}
  ${boxShadow(10)}
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  background-color: lightblue;

  ${Card} {
    width: calc(100% / ${(props) => props.columns} - 10px * 2);
  }
`

const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`

const Title = styled.h2`
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.textColor};
`

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TitleContainer>
        <Title>Hola Styled Components</Title>
      </TitleContainer>
      {/* <Container columns={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <CardGreen />
      </Container>
      <Input borderStyle='dashed' /> */}
    </ThemeProvider>
  )
}

export default App
