# HackClub Butwal Website

The official website for Hack Club Butwal, a community of young coders and makers in Butwal, Nepal.

![HackClub Butwal Logo](/public/assets/logo/red_logo/hackclubbutwal.svg)

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Dark/Light Mode**: Theme toggle for better user experience
- **Interactive UI**: Animations, hover effects, and a custom cursor
- **Event Calendar**: Display upcoming workshops and events
- **Team Profiles**: Showcase community members and their contributions
- **Sponsors Showcase**: Display sponsors by tier with custom styling
- **Gallery**: Filter and view photos from events and activities
- **Contact Form**: Embedded Tally form with query parameter support
- **Airtable Integration**: Data fetching from Airtable with fallback data

## Pages

- **Home**: Landing page with hero section and animated elements
- **Workshops**: Upcoming events and workshops with filtering by tag
- **Community**: Team members, mission statement, and testimonials
- **Sponsors**: Sponsors grouped by tier with benefits information
- **Gallery**: Photo gallery with category filtering
- **Contact**: Contact form and other ways to reach the community

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **Theme UI**: For styling and theming
- **Airtable**: For content management (simulated with fallback data)
- **Framer Motion**: For animations in the gallery
- **Tally**: For embedded contact form

## File Structure and Conventions

This project follows standard Next.js conventions for file organization:

- **Pages**: All route files are in the `pages/` directory with `.js` extension
- **Components**: Reusable UI components are in the `components/` directory with `.js` extension
- **Utilities**: Helper functions and hooks are in the `lib/` directory
- **Public Assets**: Static files are in the `public/` directory

For more detailed information about file extensions in Next.js projects, see [FILE_EXTENSIONS.md](./FILE_EXTENSIONS.md).

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HackClub-Butwal/butwalhacks.git
   cd butwalhacks
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Install additional dependencies:
   ```bash
   yarn add framer-motion
   # or
   npm install framer-motion
   ```

4. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Airtable Integration

The website is designed to fetch data from Airtable. Currently, it uses fallback data for demonstration purposes. To connect to your Airtable base:

1. Create an Airtable base with the following tables:
   - Events
   - Team
   - Sponsors

2. Update the `lib/airtable.js` file with your Airtable API key and base ID.

## Deployment

The site can be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2FHackClub-Butwal%2Fbutwalhacks&repo-name=butwalhacks)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Hack Club](https://hackclub.com) for the theme and inspiration
- [Theme UI](https://theme-ui.com) for the styling system
- [Next.js](https://nextjs.org) for the framework
- [Tally](https://tally.so) for the form solution

---
# Hack Club Theme Starter

A sample [Next.js] project for getting started with [MDX], [Theme UI], & [Hack Club Theme].

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fhackclub%2Ftheme-starter&repo-name=theme-project)

[next.js]: https://nextjs.org
[mdx]: https://mdxjs.com
[theme ui]: https://theme-ui.com
[hack club theme]: https://github.com/hackclub/theme

## Usage

1. Import this repo to your coding environment of choice. Download it, `git clone`, or use the GitHub import on Glitch/Repl.it.
2. `yarn` to install dependencies.
3. `yarn dev` to start your server.
4. Start adding your own pages & components in their respective directories.

## Configuration

### Theme switcher

We’ve included an example theme switcher component at `components/color-switcher.js`,
which is included on every page through its inclusion in `pages/_app.js`.
Feel free to change it.

### Hack Club fonts

If you’re making a Hack Club HQ project, you’re allowed to use Hack Club’s font,
[Phantom Sans](https://www.futurefonts.xyz/phantom-foundry/phantom-sans).
To load it, simply uncomment the `import '@hackclub/theme/fonts/reg-bold.css'`
line in `_app.js`.

### Custom theme

By default, the raw [Hack Club Theme](https://theme.hackclub.com) will be used.
If you’d like to edit the theme, we recommend making a theme file (perhaps at
`lib/theme.js`) along these lines:

```js
import base from '@hackclub/theme'

const theme = base

// theme.fontSizes = […]
// theme.fonts.heading = ''

export default theme
```

### Running at another port

Super easy: `yarn dev -p 5000`

### Adding meta tags

These template includes [@hackclub/meta](https://github.com/hackclub/theme/tree/main/packages/meta)
for adding meta tags to Hack Club HQ sites. To set default meta tags across all pages,
add the following to `pages/_app.js`:

```js
// import Head from 'next/head'
// import Meta from '@hackclub/meta'

<Meta
  as={Head}
  name="Hack Club" // site name
  title="Hackathons" // page title
  description="List of upcoming high school hackathons" // page description
  image="https://hackathons.hackclub.com/card.png" // large summary card image URL
  color="#ec3750" // theme color
  manifest="/site.webmanifest" // link to site manifest
/>
```

If you’re not making a site for HQ, don’t use `@hackclub/meta`, since it adds
Hack Club’s favicons & info. Instead, we recommend making your own component,
perhaps at `components/meta.js`.

<details>

<summary>Example code</summary>

```js
import Head from 'next/head'
import theme from '@hackclub/theme' // or '../lib/theme'

export default ({
  name = 'Your Company',
  title = 'Your Project',
  description = '',
  image = 'https://yourproject.vercel.app/card.png',
  url = 'https://yourproject.vercel.app/'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
  </Head>
)
```

</details>

### Adding analytics

Hack Club HQ uses (& loves) [Fathom Analytics](https://usefathom.com/ref/NXBJA2)
for simple, privacy-focused analytics. ([Check out our site’s analytics here.](https://app.usefathom.com/share/ogimjefa/hackclub.com))

To add Fathom to your project, `yarn add fathom-client`, then you’ll need to
load it appropriately in `pages/_app.js`. The script is located at
<https://aardvark.hackclub.com/script.js>.

<details>

<summary>Example file with Fathom</summary>

```js
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextApp from 'next/app'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import * as Fathom from 'fathom-client'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('YOURCODE', {
      includedDomains: ['hackclub.com'],
      url: 'https://aardvark.hackclub.com/script.js'
    })
    const onRouteChangeComplete = () => Fathom.trackPageview()
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Meta as={Head} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
```

</details>

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fhackclub%2Ftheme-starter&repo-name=theme-project)

We recommend using [Vercel](https://vercel.com) for deployment. It requires no
configuration, is totally free for personal projects, and supports all the features
of Next.js with the best performance. Refer to [their documentation](https://vercel.com/docs#deploy-an-existing-project)
for more details.

You can also deploy your site to [Netlify](https://netlify.com), which is also free. Refer to [their documentation](https://docs.netlify.com/configure-builds/common-configurations/#next-js) on the necessary configuration.
