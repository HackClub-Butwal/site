import React from 'react'
import { Card, Box, Heading, Text, Image } from 'theme-ui'

export default function CarouselCards({ title, description, img, link }) {
  return (
    <Card as="a" href={link} target="_blank" rel="noopener" sx={{
      minWidth: 280,
      maxWidth: 340,
      m: 2,
      p: 3,
      borderRadius: 'lg',
      boxShadow: 'card',
      textDecoration: 'none',
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'box-shadow 0.2s',
      ':hover': { boxShadow: 'elevated' }
    }}>
      {img && <Image src={img} alt={title} sx={{ width: 64, height: 64, mb: 2 }} />}
      <Heading as="h3" sx={{ mb: 2, fontSize: 3 }}>{title}</Heading>
      <Text sx={{ fontSize: 2, color: 'muted', textAlign: 'center' }}>{description}</Text>
    </Card>
  )
}

