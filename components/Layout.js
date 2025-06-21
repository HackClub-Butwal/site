import React from 'react'
import { Container } from 'theme-ui'

export default function Layout({ children }) {
  return (
    <Container sx={{ py: 4 }}>
      {children}
    </Container>
  )
}
