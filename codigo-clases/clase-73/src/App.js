import React from 'react'
import Title from 'components/Title'
import Container from 'components/Container'
import TextIcon from 'components/TextIcon'

import { FaHome } from 'react-icons/fa'
import Card, { CardHeader, CardFooter } from 'components/Card/Card'

/**
 * Polimorfismo de componentes
 * - que un componente pueda renderizar varios componentes distintos según una prop
 *    - prop literal (string del componente)
 *    - prop que sea una opción y en base a eso determinar qué renderizar
 * - spread de props para incluir todos los props extra de los componentes
 * - slot props o cómo tomar componentes como props
 * - cómo importar componentes y subcomponentes en un mismo import
 * - notaci´ón de punto
 */

const App = () => {
  return (
    <Container
      as='section'
      className='contenedor-custom'
      style={{ border: '1px solid' }}
    >
      <Card>
        <Card.Header></Card.Header>
        <Card.Footer></Card.Footer>
      </Card>
      <Title>Hola React</Title>
      <Title level={2}>Hola React</Title>
      <Title level={3}>Hola React</Title>
      <TextIcon icon={<FaHome />} text='Home' />
    </Container>
  )
}

export default App
