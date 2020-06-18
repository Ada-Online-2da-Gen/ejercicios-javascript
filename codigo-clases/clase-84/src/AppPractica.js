import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Card from 'components/Card'
const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`
const StyledCard = styled(Card)`
  border: 2px solid red;
`
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Card
        title='Soy una card'
        image='https://images.pexels.com/photos/4586258/pexels-photo-4586258.jpeg'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
        magni nam, quasi sed repudiandae assumenda consequuntur deleniti iste
        aliquam quos velit distinctio. Fugiat autem libero omnis architecto,
        officia corporis temporibus!'
      />
      <StyledCard
        title='Soy otra card'
        image='https://i.pinimg.com/originals/fe/42/28/fe42282eecc1331136ac789dd626e35f.gif'
        text='Tu tía'
      />
    </div>
  )
}
export default App
