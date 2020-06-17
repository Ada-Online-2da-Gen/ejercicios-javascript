import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Input from 'components/Input'

const Title = styled.h1`
  text-align: center;
`

const TEXT_SIZES = {
  sm: 12,
  md: 18,
  lg: 24,
}

// Props dinámicos
const Text = styled.p`
  color: gray;
  font-size: ${(props) => TEXT_SIZES[props.size]}px;
  font-family: Verdana;
  font-weight: ${(props) => props.weight};

  &:hover {
    color: green;
  }

  @media (max-width: 700px) {
    color: blue;
  }
`

const ListItem = styled.li``

const OrderedList = styled.ol`
  & > ${ListItem} {
    color: darkorange;
  }
`

const List = styled.ul`
  & > li {
    color: magenta;
  }
`

// Heredar propiedades - extender componente
const ImportantText = styled(Text)`
  color: red;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightcoral;
  }
`

const StyledInput = styled(Input)`
  height: 80px;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title>Hola Styled Components</Title>
      <Text weight='bold' size='lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        magni nam, quasi sed repudiandae assumenda consequuntur deleniti iste
        aliquam quos velit distinctio. Fugiat autem libero omnis architecto,
        officia corporis temporibus!
      </Text>
      <Text size='sm'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        magni nam, quasi sed repudiandae assumenda consequuntur deleniti iste
        aliquam quos velit distinctio. Fugiat autem libero omnis architecto,
        officia corporis temporibus!
      </Text>
      <ImportantText>Soy un texto importante</ImportantText>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
      <OrderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <li>Item 4</li>
      </OrderedList>
      <Input />
      <StyledInput />
    </>
  )
}

export default App
