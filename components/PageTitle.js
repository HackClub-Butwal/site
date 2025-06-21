import React from 'react'
import { Heading } from 'theme-ui'

export default function PageTitle({ title }) {
  return <Heading as="h1" sx={{ mb: 3 }}>{title}</Heading>
}
