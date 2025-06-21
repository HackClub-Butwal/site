import React from 'react'
import { Box } from 'theme-ui'

export default function Card({ children, sx }) {
  return (
    <Box
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: 4,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
