import { useState, useEffect } from 'react'
import { Flex, Box, NavLink, Heading, Container } from 'theme-ui'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import HamburgerMenu from './HamburgerMenu'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [clicks, setClicks] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  const handleLogoClick = () => setClicks(prev => prev + 1)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router])

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      as="header"
      sx={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        bg: isScrolled ? 'background' : 'transparent',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <Container>
        <Flex 
          as="nav" 
          sx={{ 
            px: 3, 
            py: 2, 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap'
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <Box 
              onClick={handleLogoClick} 
              sx={{ 
                cursor: 'pointer', 
                mr: 2,
                '@keyframes heartbeat': {
                  '0%': { transform: 'scale(1)' },
                  '14%': { transform: 'scale(1.1)' },
                  '28%': { transform: 'scale(1)' },
                  '42%': { transform: 'scale(1.1)' },
                  '70%': { transform: 'scale(1)' }
                },
                '&:hover': {
                  animation: 'heartbeat 1.5s ease-in-out infinite'
                }
              }}
            >
              <Image
                src={clicks < 9 ? '/assets/logo/red_logo/hackclubbutwal.svg' : '/assets/logo/red_logo/Group_337.png'}
                alt="Site logo"
                width={40}
                height={40}
              />
            </Box>
            <Heading
              as="h2"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              sx={{ 
                fontSize: 2, 
                m: 0, 
                transition: 'all 0.3s ease-in-out', 
                cursor: 'default',
                display: ['none', 'block']
              }}
            >
              {hovered ? 'Butwal Hack' : 'HackClub Butwal'}
            </Heading>
          </Flex>

          {/* Desktop Navigation */}
          <Flex 
            sx={{ 
              alignItems: 'center',
              display: ['none', 'none', 'flex']
            }}
          >
            <NavLink href="/" sx={{ px: 2 }}>Home</NavLink>
            <NavLink href="/workshops" sx={{ px: 2 }}>Workshops</NavLink>
            <NavLink href="/community" sx={{ px: 2 }}>Community</NavLink>
            <NavLink href="/sponsors" sx={{ px: 2 }}>Sponsors</NavLink>
            <NavLink href="/gallery" sx={{ px: 2 }}>Gallery</NavLink>
            <NavLink href="/contact" sx={{ px: 2 }}>Contact</NavLink>
            <NavLink href="/api-example" sx={{ px: 2 }}>API Demo</NavLink>
            <ThemeToggle />
          </Flex>

          {/* Mobile Navigation Toggle */}
          <Flex 
            sx={{ 
              alignItems: 'center',
              display: ['flex', 'flex', 'none']
            }}
          >
            <ThemeToggle />
            <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Box
        sx={{
          display: isMenuOpen ? 'block' : 'none',
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'background',
          p: 4,
          zIndex: 999,
          overflowY: 'auto'
        }}
      >
        <Flex
          as="nav"
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <NavLink href="/" sx={{ py: 3, fontSize: 3 }}>Home</NavLink>
          <NavLink href="/workshops" sx={{ py: 3, fontSize: 3 }}>Workshops</NavLink>
          <NavLink href="/community" sx={{ py: 3, fontSize: 3 }}>Community</NavLink>
          <NavLink href="/sponsors" sx={{ py: 3, fontSize: 3 }}>Sponsors</NavLink>
          <NavLink href="/gallery" sx={{ py: 3, fontSize: 3 }}>Gallery</NavLink>
          <NavLink href="/contact" sx={{ py: 3, fontSize: 3 }}>Contact</NavLink>
          <NavLink href="/api-example" sx={{ py: 3, fontSize: 3 }}>API Demo</NavLink>
        </Flex>
      </Box>
    </Box>
  )
}
