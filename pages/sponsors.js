import React from 'react'
import Head from 'next/head'
import { Container, Box, Heading, Text, Grid, Flex, Button, Spinner } from 'theme-ui'
import SponsorCard from '../components/SponsorCard'
import { useSponsors, groupSponsorsByTier } from '../lib/airtable'

export default function Sponsors() {
  const { sponsors, isLoading, error } = useSponsors()
  const sponsorsByTier = groupSponsorsByTier(sponsors)
  
  // Define tier-specific styles for section headers
  const tierHeaderStyles = {
    Platinum: {
      bg: 'linear-gradient(90deg, #E5E4E2, #FFFFFF)',
      color: '#333333'
    },
    Gold: {
      bg: 'linear-gradient(90deg, #FFD700, #FFF8DC)',
      color: '#333333'
    },
    Silver: {
      bg: 'linear-gradient(90deg, #C0C0C0, #FFFFFF)',
      color: '#333333'
    },
    Bronze: {
      bg: 'linear-gradient(90deg, #CD7F32, #FFF8DC)',
      color: '#333333'
    }
  }

  return (
    <>
      <Head>
        <title>Sponsors – HackClub Butwal</title>
        <meta name="description" content="Meet the generous sponsors who make HackClub Butwal possible and learn how your organization can support us." />
      </Head>
      
      <Box 
        sx={{ 
          bg: 'primary', 
          color: 'white', 
          py: [4, 5],
          textAlign: 'center'
        }}
      >
        <Container>
          <Heading 
            as="h1" 
            sx={{ 
              fontSize: [4, 5, 6],
              mb: 3
            }}
          >
            Our Sponsors
          </Heading>
          <Text sx={{ fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Meet the amazing organizations that support HackClub Butwal and help us empower the next generation of coders and makers.
          </Text>
        </Container>
      </Box>
      
      <Container sx={{ py: [4, 5] }}>
        <Box sx={{ mb: 5 }}>
          <Heading as="h2" sx={{ mb: 3, textAlign: 'center' }}>Why Sponsor Us?</Heading>
          <Text sx={{ fontSize: 2, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
            By sponsoring HackClub Butwal, you're investing in the future of technology in Nepal. Your support helps us provide resources, organize events, and create opportunities for young people to learn and grow in tech.
          </Text>
        </Box>
        
        {isLoading ? (
          <Flex sx={{ justifyContent: 'center', py: 5 }}>
            <Spinner />
          </Flex>
        ) : error ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Text sx={{ color: 'secondary' }}>{error}</Text>
            <Text>Showing fallback data instead.</Text>
          </Box>
        ) : (
          <>
            {sponsorsByTier.map(({ tier, sponsors }) => (
              <Box key={tier} sx={{ mb: 5 }}>
                <Box 
                  sx={{ 
                    p: 3, 
                    mb: 3,
                    borderRadius: 'default',
                    ...tierHeaderStyles[tier],
                    textAlign: 'center'
                  }}
                >
                  <Heading as="h2">{tier} Sponsors</Heading>
                </Box>
                
                <Grid columns={[1, null, 2]} gap={4}>
                  {sponsors.map(sponsor => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </Grid>
              </Box>
            ))}
          </>
        )}
        
        <Box 
          sx={{ 
            bg: 'muted', 
            p: 4, 
            borderRadius: 'default',
            textAlign: 'center',
            mt: 5
          }}
        >
          <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Become a Sponsor</Heading>
          <Text sx={{ mb: 3 }}>
            Interested in supporting HackClub Butwal? We offer various sponsorship tiers with different benefits. Get in touch to learn more about how your organization can make a difference.
          </Text>
          
          <Button as="a" href="/contact" variant="primary">
            Contact Us About Sponsorship
          </Button>
        </Box>
        
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Heading as="h2" sx={{ mb: 3 }}>Sponsorship Benefits</Heading>
          <Grid columns={[1, 2, 4]} gap={3}>
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                bg: 'background',
                boxShadow: 'card',
                textAlign: 'center'
              }}
            >
              <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>Brand Visibility</Heading>
              <Text sx={{ fontSize: 1 }}>
                Your logo on our website, event materials, and promotional content.
              </Text>
            </Box>
            
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                bg: 'background',
                boxShadow: 'card',
                textAlign: 'center'
              }}
            >
              <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>Talent Access</Heading>
              <Text sx={{ fontSize: 1 }}>
                Connect with motivated students and potential future employees.
              </Text>
            </Box>
            
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                bg: 'background',
                boxShadow: 'card',
                textAlign: 'center'
              }}
            >
              <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>Community Impact</Heading>
              <Text sx={{ fontSize: 1 }}>
                Make a meaningful difference in tech education in Butwal.
              </Text>
            </Box>
            
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                bg: 'background',
                boxShadow: 'card',
                textAlign: 'center'
              }}
            >
              <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>Event Participation</Heading>
              <Text sx={{ fontSize: 1 }}>
                Opportunities to present, judge, or mentor at our events.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  )
}