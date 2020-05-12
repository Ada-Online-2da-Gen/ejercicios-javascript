import React from 'react'
import Card from 'components/Card/Card'
import Section from 'components/Section/Section'
import Image from 'components/Image/Image'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'

const CardInfo = ({ title, text, image }) => {
  return (
    <Card>
      <Image src={image} />
      <Section>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Section>
    </Card>
  )
}

export default CardInfo
