import Head from 'next/head'
    import theme from '../lib/theme'

    const Meta = ({
      name = 'Hack Club Butwal',
      title = 'Hack Club Butwal',
      description = 'Hack Club Butwal is a community of young coders and makers in Butwal, Nepal.',
      image = 'https://cloud-5aq8uo4qv-hack-club-bot.vercel.app/0social-image.png',
      url = 'https://hackclubbutwal.vercel.app/'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )

    export default Meta