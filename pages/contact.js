import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, Box, Heading, Text, Card, Grid, Link, Flex, Button } from 'theme-ui'
import { useRouter } from 'next/router'
import { Instagram, GitHub, Mail, ExternalLink } from '@hackclub/icons'

function ContactForm({ formUrl, isFormLoading, handleIframeLoad }) {
  return (
    <Card sx={{
      p: 4,
      borderRadius: 'default',
      boxShadow: 'card',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Contact Form</Heading>
      <Text sx={{ mb: 3 }}>
        Have a question or want to get involved? Fill out this form and we'll get back to you as soon as possible.
      </Text>
      <Box sx={{
        position: 'relative',
        flex: 1,
        minHeight: '400px',
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: 'default',
        overflow: 'hidden'
      }}>
        {isFormLoading && (
          <Flex
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              bg: 'background',
              zIndex: 1
            }}
          >
            <Text>Loading form...</Text>
          </Flex>
        )}
        {formUrl && (
          <iframe
            src={formUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Contact Form"
            onLoad={handleIframeLoad}
          />
        )}
      </Box>
    </Card>
  )
}

function OtherContactWays() {
  return (
    <Card sx={{
      p: 4,
      borderRadius: 'default',
      boxShadow: 'card'
    }}>
      <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Other Ways To Reach Us</Heading>
      <Grid gap={3} sx={{ mb: 4 }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ mr: 2, color: 'primary' }}>
            <Mail size={24} />
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold' }}>Email</Text>
            <Link href="mailto:hello@hackclubbutwal.com" sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
              hello@hackclubbutwal.com
            </Link>
          </Box>
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ mr: 2, color: 'primary' }}>
            <Instagram size={24} />
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold' }}>Instagram</Text>
            <Link
              href="https://instagram.com/HackClubButwal"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}
            >
              @HackClubButwal
            </Link>
          </Box>
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <Box sx={{ mr: 2, color: 'primary' }}>
            <GitHub size={24} />
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold' }}>GitHub</Text>
            <Link
              href="https://github.com/HackClub-Butwal"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}
            >
              HackClub-Butwal
            </Link>
          </Box>
        </Flex>
      </Grid>
      <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>Visit Us</Heading>
      <Text sx={{ mb: 3 }}>
        We host regular meetups and workshops in Butwal. Follow us on social media to stay updated on our next event.
      </Text>
      <Button
        as="a"
        href="https://hackclub.com/slack"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        Join our Slack <ExternalLink size={20} style={{ marginLeft: '8px' }} />
      </Button>
    </Card>
  )
}

export default function Contact() {
  const router = useRouter()
  const [formUrl, setFormUrl] = useState('')
  const [isFormLoading, setIsFormLoading] = useState(true)

  // Handle query parameters for the Tally form
  useEffect(() => {
    if (!router.isReady) return

    // Get query parameters
    const { origin, ref, email } = router.query

    // Base Tally form URL - replace with your actual form ID
    const baseUrl = "https://tally.so/embed/w2Jb9E"

    // Build query parameters for Tally
    const params = new URLSearchParams()
    params.append('alignLeft', '1')
    params.append('hideTitle', '1')
    params.append('transparentBackground', '1')

    // Add any passed parameters as hidden fields
    if (origin) params.append('origin', origin)
    if (ref) params.append('ref', ref)
    if (email) params.append('email', email)

    // Set the complete URL
    setFormUrl(`${baseUrl}?${params.toString()}`)

  }, [router.isReady, router.query])

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsFormLoading(false)
  }

  return (
    <>
      <Head>
        <title>Contact – HackClub Butwal</title>
        <meta name="description" content="Get in touch with HackClub Butwal via our contact form or email." />
      </Head>

      <Container sx={{ py: [4, 5], px: [3, 4] }}>
        <Heading
          as="h1"
          sx={{
            mb: 4,
            fontSize: [4, 5, 6],
            textAlign: 'center',
            background: 'linear-gradient(90deg, primary, secondary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get In Touch
        </Heading>

        <Grid columns={[1, null, 2]} gap={4} sx={{ mb: 5 }}>
          <ContactForm formUrl={formUrl} isFormLoading={isFormLoading} handleIframeLoad={handleIframeLoad} />
          <OtherContactWays />
        </Grid>
      </Container>
    </>
  )
}
