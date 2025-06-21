import React from 'react'
import { Box } from 'theme-ui'

export default function Card({ children, sx }) {
  return (
    <Box
      sx={{
        bg: 'background',
        color: 'text',
        p: 3,
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: 'lg',
        boxShadow: 'default',
        transition: 'all 0.3s ease',
        '&:hover': {
          bg: 'muted',
          color: 'primary',
        },
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
