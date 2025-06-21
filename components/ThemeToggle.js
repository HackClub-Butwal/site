import React from 'react'
import { useColorMode, Button } from 'theme-ui'
import Icon from '@hackclub/icons'

export default function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      onClick={toggleColorMode}
      variant="outline"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        borderRadius: 'circle',
        color: 'text',
        bg: 'transparent',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
          bg: 'muted',
          opacity: 0.8
        }
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Icon glyph={isDark ? 'flag' : 'flag-fill'} size={24} is="svg" sx={{ color: 'text' }} />
    </Button>
  )
}