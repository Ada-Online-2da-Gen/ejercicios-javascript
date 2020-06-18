import React from 'react'
import styled from 'styled-components'
const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 30px;
`
const Title = styled.h2`
  font-size: 26px;
  color: firebrick;
`
const Text = styled.p`
  font-size: 18px;
  color: grey;
`
const Image = styled.img`
  border-radius: 10px;
  width: 300px;
`
/**
 * Filled
 *  - color de fondo
 *  - texto blanco
 *  - sin borde
 * Bordered
 *  - texto de color
 *  - borde de color
 *  - sin fondo
 */

const Button = styled.button`
  border-radius: 10px;
  width: 200px;
  padding: 10px 0;
  color: ${(props) => (props.variant === 'filled' ? 'white' : 'red')};
  background-color: ${(props) =>
    props.variant === 'filled' ? 'red' : 'white'};
  border: ${(props) => (props.variant === 'filled' ? '0px' : '1px solid red')};
`

const Card = ({ title, text, image, ...props }) => {
  return (
    <StyledCard {...props}>
      <Title as='h3'>{title}</Title>
      <Image src={image} />
      <Text>{text}</Text>
      <Button variant='bordered'>Me gusta</Button>
    </StyledCard>
  )
}
export default Card
