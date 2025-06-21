import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Box, Container, Flex, Link } from 'theme-ui'
import theme from '../lib/theme'
import Icon from './icon'
import NextLink from 'next/link'
import { Logo } from './Footer'

const rgbaBgColor = (props, opacity) =>
  `rgba(${props.bgColor[0]},${props.bgColor[1]},${props.bgColor[2]},${opacity})`

const fixed = props =>
  (props.scrolled || props.toggled || props.fixed) &&
  css`
    background-color: ${rgbaBgColor(props, 0.96875)};
    border-bottom: 1px solid rgba(48, 48, 48, 0.125);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: ${props.transparent
        ? 'transparent'
        : rgbaBgColor(props, 0.75)};
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
    }
  `

const Root = styled(Box, {
  shouldForwardProp: prop => !['bgColor', 'scrolled', 'toggled'].includes(prop)
})`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  ${fixed};
  @media print {
    display: none;
  }
`

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`

const hoverColor = name =>
  ({
    white: 'smoke',
    smoke: 'muted',
    muted: 'slate',
    slate: 'black',
    black: 'slate',
    primary: 'error'
  })[name] || 'black'

const slide = keyframes({
  from: { transform: 'translateY(-25%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
})

const layout = props =>
  props.isMobile
    ? css`
        display: ${props.toggled ? 'flex' : 'none'};
        flex-direction: column;
        overflow-y: auto;
        text-align: left;
        height: 100vh;
        @media (prefers-reduced-motion: no-preference) {
          animation: ${slide} 0.25s ease-in;
        }
        a {
          color: ${theme.colors[props.dark ? 'white' : 'black']} !important;
          margin: 0 auto;
          height: 64px;
          font-weight: bold;
          font-size: ${theme.fontSizes[2]}px;
          width: 100vw;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(48, 48, 48, 0.125);
          }
          @media screen and (max-width: 22em) {
            max-width: 16rem;
          }
        }
      `
    : css`
        @media (min-width: 56em) {
          display: flex;
          justify-content: flex-end;
        }
        a {
          font-size: 18px;
          &:hover {
            color: ${theme.colors[hoverColor(props.color)]};
          }
        }
      `
const NavBar = styled(Box, {
  shouldForwardProp: prop => !['isMobile', 'toggled'].includes(prop)
})`
  display: none;
  ${layout};
  a {
    margin-left: ${theme.space[1]}px;
    padding: ${theme.space[3]}px;
    text-decoration: none;
    @media (min-width: 56em) {
      color: ${props => theme.colors[props.color] || props.color};
    }
  }
`

const Navigation = props => (
  <NavBar role="navigation" {...props}>
    <NextLink href="/" passHref>
      <Link>Home</Link>
    </NextLink>
    <NextLink href="/about" passHref>
      <Link>About</Link>
    </NextLink>
    <NextLink href="/community" passHref>
      <Link>Community</Link>
    </NextLink>
    <NextLink href="/workshops" passHref>
      <Link>Workshops</Link>
    </NextLink>
    <NextLink href="/team" passHref>
      <Link>Team</Link>
    </NextLink>
    <NextLink href="/sponsors" passHref>
      <Link>Sponsors</Link>
    </NextLink>
    <NextLink href="/contact" passHref>
      <Link>Contact</Link>
    </NextLink>
  </NavBar>
)

const ToggleContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  @media (min-width: 56em) {
    display: none;
  }
`

function computedColors(dark, color, scrolled, toggled) {
  const baseColor = dark
    ? color || 'white'
    : color === 'white' && scrolled
      ? 'black'
      : color
  const toggleColor = dark
    ? color || 'snow'
    : toggled || (color === 'white' && scrolled)
      ? 'slate'
      : color
  return { baseColor, toggleColor }
}

function useHeaderState(unfixed) {
  const [scrolled, setScrolled] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!unfixed) {
        const onScroll = () => setScrolled(window.scrollY >= 16)
        window.addEventListener('scroll', onScroll)
        // Clean up scroll event
        return () => window.removeEventListener('scroll', onScroll)
      }
    }
  }, [unfixed])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobileQuery = window.matchMedia('(max-width: 48em)')
      const handleChange = () => {
        setMobile(true)
        setToggled(false)
      }
      mobileQuery.addEventListener('change', handleChange)
      // Clean up mobile query event
      return () => mobileQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return { scrolled, toggled, setToggled, mobile }
}

function LogoLink() {
  return (
    <NextLink href="/" passHref>
      <Link sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: 3 }}>
        <Logo style={{ height: 36, marginRight: 12 }} />
        Hack Club Butwal
      </Link>
    </NextLink>
  );
}

function NavigationWrapper({ isMobile, toggled, baseColor, dark, mobile }) {
  return (
    <Navigation
      as="nav"
      aria-hidden={isMobile ? !mobile : !!mobile}
      isMobile={isMobile}
      toggled={toggled}
      color={baseColor}
      dark={dark}
    />
  );
}

function Header({ unfixed, color, bgColor, dark, fixed, ...props }) {
  const { scrolled, toggled, setToggled, mobile } = useHeaderState(unfixed)
  const { baseColor, toggleColor } = computedColors(dark, color, scrolled, toggled)
  const handleToggleMenu = () => setToggled(t => !t)

  return (
    <Root
      {...props}
      fixed={fixed}
      scrolled={scrolled}
      toggled={toggled}
      dark={dark}
      bgColor={bgColor || (dark ? [32, 34, 36] : [255, 255, 255])}
      as="header"
    >
      <Content>
        <LogoLink />
        <NavigationWrapper isMobile={false} baseColor={baseColor} dark={dark} mobile={mobile} />
        <ToggleContainer color={toggleColor} onClick={handleToggleMenu}>
          <Icon glyph={toggled ? 'view-close' : 'menu'} />
        </ToggleContainer>
      </Content>
      <NavigationWrapper isMobile={true} toggled={toggled} baseColor={baseColor} dark={dark} mobile={mobile} />
    </Root>
  )
}

Header.defaultProps = {
  color: 'white'
}

export default Header

function shouldReturnSlate(color, toggled, scrolled) {
  return toggled || (color === 'white' && scrolled);
}

function getToggleColor(dark, color, toggled, scrolled) {
  if (dark) return color || 'snow';
  if (shouldReturnSlate(color, toggled, scrolled)) return 'slate';
  return color;
}
