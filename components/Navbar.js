import { useState, useEffect } from 'react'
import { Flex, Box, NavLink, Heading, Container } from 'theme-ui'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import HamburgerMenu from './HamburgerMenu'
import { useRouter } from 'next/router'

function NavLinkItem({ link, direction, onClick }) {
  return (
    <NavLink
      key={link.href}
      href={link.href}
      sx={{
        px: direction === 'row' ? 2 : 0,
        py: direction === 'column' ? 3 : 0,
        fontSize: direction === 'column' ? 3 : 'inherit',
        width: direction === 'column' ? '100%' : 'auto',
        textAlign: direction === 'column' ? 'center' : 'left',
        borderRadius: direction === 'column' ? 'default' : 0,
        transition: 'background 0.2s, color 0.2s',
        color: 'text',
        '&:hover': {
          bg: 'muted',
          color: 'primary',
          textDecoration: 'none'
        }
      }}
      onClick={onClick}
    >
      {link.label}
    </NavLink>
  )
}

function NavLinks({ direction = 'row', onClick }) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/community', label: 'Community' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ]
  return (
    <Flex
      as="nav"
      sx={{
        flexDirection: direction,
        alignItems: direction === 'row' ? 'center' : 'flex-start',
        gap: direction === 'row' ? 2 : 0,
        width: direction === 'column' ? '100%' : 'auto',
        justifyContent: direction === 'row' ? 'center' : 'flex-start',
      }}
    >
      {links.map(link => (
        <NavLinkItem key={link.href} link={link} direction={direction} onClick={onClick} />
      ))}
    </Flex>
  )
}

function Logo({ clicks, handleLogoClick, hovered, setHovered }) {
  return (
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
          display: ['none', 'block'],
          color: 'text'
        }}
      >
        {hovered ? 'Butwal Hack' : 'HackClub Butwal'}
      </Heading>
    </Flex>
  )
}

function DesktopNav() {
  return (
    <Flex sx={{ display: ['none', 'none', 'flex'], alignItems: 'center', gap: 3 }}>
      <NavLinks direction="row" />
      <ThemeToggle />
    </Flex>
  )
}

function MobileNav({ isMenuOpen, toggleMenu }) {
  return (
    <Flex sx={{ alignItems: 'center', display: ['flex', 'flex', 'none'] }}>
      <ThemeToggle />
      <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />
    </Flex>
  )
}

function MobileMenu({ isMenuOpen, onClose }) {
  return (
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
        overflowY: 'auto',
        boxShadow: '0 8px 32px rgba(30,80,160,0.10)'
      }}
      onClick={onClose}
    >
      <NavLinks direction="column" onClick={onClose} />
    </Box>
  )
}

export default function Navbar() {
  const [clicks, setClicks] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  const handleLogoClick = () => setClicks(prev => prev + 1)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

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
        bg: 'background',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'muted',
        minHeight: 60
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
            flexWrap: 'wrap',
            minHeight: 60
          }}
        >
          <Logo clicks={clicks} handleLogoClick={handleLogoClick} hovered={hovered} setHovered={setHovered} />
          <DesktopNav />
          <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Flex>
      </Container>
      <MobileMenu isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </Box>
  )
}
