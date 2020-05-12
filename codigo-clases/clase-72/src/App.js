import React from 'react'
import { FaRegHeart, FaShareAlt } from 'react-icons/fa'

import Card from 'components/Card/Card'
import CardInfo from 'components/CardInfo/CardInfo'
import CardSocial from 'components/CardSocial/CardSocial'
import Section from 'components/Section/Section'
import Footer from 'components/Footer/Footer'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

import styles from './footer.module.scss'
import starWarsCover from 'starwars.jpg'

// COMPONENTES

/**
 * Componentes primitivos: h1, p, div, article, button, form
 * - pueden tener estilos
 * - pueden tener clases
 * - pueden tener eventos
 * Componentes Wrapper - átomos
 * - renderizan un componente primitivo
 * - son los únicos que pueden utilizar componentes primitivos
 * - pueden tener nombres más semánticos: Container, Flex, Row, Box
 * - Lo más genéricos posibles
 * Componentes Páginas / Vistas
 * - Únicos
 * - No reutilizables
 * - Se componente de grandes elementos
 * Componente Aplicación
 * - Único
 * - Componente raíz
 */

// DRY - Don't repeat yourself

// MAS REUTILIZABLE --------------------------------- MENOS REUTILIZABLE
// Átomos   -   Moléculas - Organismos  | Componentes específicos - Páginas - Aplicación
// MAS GENÉRICO             Card        | ProductCard

/* 
const AppHeader = () => (<Header>
  <Logo></Logo>
  <NavMenu>
    <NavItem></NavItem>
  </NavMenu>
  <UserControl></UserControl>
</Header>)

<Header>
  <Logo></Logo>
  <NavMenu>
    <NavItem></NavItem>
  </NavMenu>
</Header>

<Card>
  <CardHeader></CardHeader>
  <CardImage></CardImage>
  <CardBody></CardBody>
  <CardActions></CardActions>
</Card>

const ProductCard = ({productImage, price}) => (
<Card>
  <CardImage></CardImage>
  <CardBody>
    <Price />
  </CardBody>
  <CardActions>
    <Button>Comprar</Button>
  </CardActions>
</Card>
)

const UserCard = ({userName}) => (
<Card>
  <CardHeader>{userName}</CardHeader>
  <CardBody></CardBody>
</Card>
) */

//  Atomos
// - Boton
// - Icono

// Moleculas
// - BotonIcono
// - SearchInput

// Organismo - Moléculas y Átomos
// - Modal

// ATOMIC DESIGN
// átomos - componentes primitivos - botón, ícono, input, label
// móleculas - conjuntos pequeños de componentes atómicos
// - boton y un icono
// - label y un form
// organismos
// - conjuntos de componentes
// - grandes secciones de layout
// templates
// páginas

// const Contenedor = ({ children }) => (
//   <div className='contenedor'>{children}</div>
// )

// const MiComponente = () => (
//   <Contenedor>
//     <Titulo></Titulo>
//     <p></p>
//     <Footer></Footer>
//   </Contenedor>
// )

// const OtroComponente = () => (
//   <Contenedor>
//     <p></p>
//     <Footer></Footer>
//   </Contenedor>
// )

// const OtroComponenteMas = () => (
//   <Contenedor>
//     <p></p>
//   </Contenedor>
// )

function App() {
  return (
    <div className='App'>
      <CardSocial
        title='Star Wars'
        text='Star Wars is an American epic space-opera media franchise created by George
          Lucas, which began with the eponymous 1977 film and quickly became a
          worldwide pop-culture phenomenon. The franchise has been expanded into
          various films and other media, including television series, video
          games, novels, comic books, theme park attractions, and themed areas,
          comprising an all-encompassing fictional universe'
        image={starWarsCover}
      />
      <CardInfo
        title='Star Wars'
        text='Star Wars is an American epic space-opera media franchise created by George
          Lucas, which began with the eponymous 1977 film and quickly became a
          worldwide pop-culture phenomenon. The franchise has been expanded into
          various films and other media, including television series, video
          games, novels, comic books, theme park attractions, and themed areas,
          comprising an all-encompassing fictional universe'
        image={starWarsCover}
      />
      <Card>
        <Section>
          <Title>Star Wars - A new hope</Title>
          <Text>
            Wars is an American epic space-opera media franchise created by
            George Lucas, which began with the eponymous 1977 film and quickly
            became a worldwide pop-culture phenomenon. The franchise has been
            expanded into various films and other media, including television
            series, video games, novels, comic books, theme park attractions,
            and themed areas, comprising an all-encompassing fictional universe
          </Text>
        </Section>
        <Footer
          style={{
            display: 'flex',
            borderTop: '1px solid lightgray',
            padding: 20,
          }}
        >
          <FaRegHeart />
          <FaShareAlt />
        </Footer>
      </Card>
      <Footer className={styles.footer} style={{ background: 'red' }}>
        @ 2020 - All rights reserved
      </Footer>
      <Footer className={styles.footerBig}>@ 2020 - All rights reserved</Footer>
    </div>
  )
}

export default App
