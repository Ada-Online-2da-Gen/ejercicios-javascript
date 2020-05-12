import React from 'react'

import { FaRegHeart, FaShareAlt, FaEllipsisV } from 'react-icons/fa'

import Card from 'components/Card/Card'
import CardFooter from 'components/Card/components/CardFooter/CardFooter'
import Header from 'components/Header/Header'
import Section from 'components/Section/Section'
import Image from 'components/Image/Image'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

const CardSocial = ({ title, text, image }) => {
  return (
    <Card>
      <Header>
        <FaEllipsisV />
      </Header>
      <Image src={image} />
      <Section>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Section>
      <CardFooter>
        <FaRegHeart />
        <FaShareAlt />
      </CardFooter>
    </Card>
  )
}

export default CardSocial
