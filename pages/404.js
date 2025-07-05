import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Heading, Text, Button } from 'theme-ui'
import Head from 'next/head'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    // Handle legacy redirects
    const path = router.asPath
    
    // Redirect form.html to /form
    if (path.includes('/form/form.html') || path === '/form.html') {
      router.replace('/form')
      return
    }
    
    // Remove .html extension from any path
    if (path.endsWith('.html')) {
      const newPath = path.replace('.html', '')
      router.replace(newPath)
      return
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Page Not Found - HackClub Butwal</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <Box sx={{
        minHeight: '100vh',
        bg: 'linear-gradient(135deg, #181B2A 0%, #232946 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
      }}>
        <Container>
          <Heading as="h1" sx={{ fontSize: [4, 5, 6], mb: 3 }}>
            404 - Page Not Found
          </Heading>
          <Text sx={{ fontSize: [2, 3], mb: 4, opacity: 0.8 }}>
            The page you're looking for doesn't exist.
          </Text>
          <Button
            onClick={() => router.push('/')}
            sx={{
              bg: '#ec3750',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              px: 4,
              py: 3,
              fontSize: 2,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                bg: '#d63447',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Go Home
          </Button>
        </Container>
      </Box>
    </>
  )
}
