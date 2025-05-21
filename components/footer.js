import React from 'react';
import { Box, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui';

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        bg: 'muted',
        color: 'text',
        py: 4,
        mt: 4
      }}
    >
      <Container>
        <Grid
          gap={4}
          columns={[1, 2, 4]}
          sx={{
            mb: 4
          }}
        >
          <Box>
            <Heading as="h3" mb={3} sx={{ fontSize: 3 }}>
              Hack Club Butwal
            </Heading>
            <Text mb={3}>
              A community of young coders and makers in Butwal, Nepal.
            </Text>
            <Link
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Part of the Hack Club network
            </Link>
          </Box>
          
          <Box>
            <Heading as="h3" mb={3} sx={{ fontSize: 3 }}>
              Pages
            </Heading>
            <Flex
              as="ul"
              sx={{
                flexDirection: 'column',
                listStyle: 'none',
                p: 0,
                m: 0
              }}
            >
              <Link href="/" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Home
              </Link>
              <Link href="/workshops" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Workshops
              </Link>
              <Link href="/community" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Community
              </Link>
              <Link href="/sponsors" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Sponsors
              </Link>
              <Link href="/contact" sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Contact
              </Link>
            </Flex>
          </Box>
          
          <Box>
            <Heading as="h3" mb={3} sx={{ fontSize: 3 }}>
              Connect
            </Heading>
            <Flex
              as="ul"
              sx={{
                flexDirection: 'column',
                listStyle: 'none',
                p: 0,
                m: 0
              }}
            >
              <Link href="https://twitter.com/hackclubbutwal" target="_blank" rel="noopener noreferrer" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Twitter
              </Link>
              <Link href="https://instagram.com/hackclubbutwal" target="_blank" rel="noopener noreferrer" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Instagram
              </Link>
              <Link href="https://github.com/hackclubbutwal" target="_blank" rel="noopener noreferrer" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                GitHub
              </Link>
              <Link href="mailto:butwal@hackclub.com" sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Email
              </Link>
            </Flex>
          </Box>
          
          <Box>
            <Heading as="h3" mb={3} sx={{ fontSize: 3 }}>
              Resources
            </Heading>
            <Flex
              as="ul"
              sx={{
                flexDirection: 'column',
                listStyle: 'none',
                p: 0,
                m: 0
              }}
            >
              <Link href="https://hackclub.com" target="_blank" rel="noopener noreferrer" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Hack Club
              </Link>
              <Link href="https://workshops.hackclub.com" target="_blank" rel="noopener noreferrer" sx={{ mb: 2, color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Hack Club Workshops
              </Link>
              <Link href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                Hack Club Slack
              </Link>
            </Flex>
          </Box>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'border',
            pt: 3,
            textAlign: 'center'
          }}
        >
          <Text sx={{ fontSize: 1 }}>
            © {new Date().getFullYear()} Hack Club Butwal. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;