import React from 'react'
import { Box, Container, Flex, NavLink, Text } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem = ({ href, children, ...props }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link href={href} passHref legacyBehavior>
      <NavLink
        sx={{
          color: isActive ? 'primary' : 'text',
          fontWeight: isActive ? 'bold' : 'body',
          textDecoration: 'none',
          mx: [2, 3],
          '&:hover': {
            color: 'primary',
            textDecoration: 'underline'
          }
        }}
        {...props}
      >
        {children}
      </NavLink>
    </Link>
  )
}

const Nav = () => {
  return (
    <Box
      as="nav"
      sx={{
        bg: 'sheet',
        color: 'text',
        py: 3
      }}
    >
      <Container>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <NavLink
              sx={{
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Text
                as="span"
                sx={{
                  color: 'primary',
                  fontSize: 3,
                  fontWeight: 'bold',
                  mr: 2
                }}
              >
                Hack Club Butwal
              </Text>
            </NavLink>
          </Link>

          <Flex
            as="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <NavItem href="/">Home</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
