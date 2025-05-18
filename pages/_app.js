import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Nav from '../components/nav'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
