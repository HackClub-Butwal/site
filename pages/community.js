import React from 'react'
import Head from 'next/head'
import { Container, Box, Heading, Text, Grid, Flex, Button, Spinner } from 'theme-ui'
import MemberCard from '../components/MemberCard'
import { useTeamMembers } from '../lib/airtable'

export default function Community() {
  const { members, isLoading, error } = useTeamMembers()

  return (
    <>
      <Head>
        <title>Community – HackClub Butwal</title>
        <meta name="description" content="Meet the team behind HackClub Butwal and learn how to get involved in our community." />
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
            Our Community
          </Heading>
          <Text sx={{ fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Meet the passionate team behind HackClub Butwal who are dedicated to fostering a vibrant coding community in Butwal.
          </Text>
        </Container>
      </Box>
      
      <Container sx={{ py: [4, 5] }}>
        <Box sx={{ mb: 5 }}>
          <Heading as="h2" sx={{ mb: 3, textAlign: 'center' }}>Our Mission</Heading>
          <Text sx={{ fontSize: 2, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
            HackClub Butwal is on a mission to empower students with the skills, community, and support they need to become the next generation of technology leaders and innovators. We believe in learning by doing, peer-to-peer mentorship, and creating an inclusive environment where everyone can thrive.
          </Text>
        </Box>
        
        <Heading as="h2" sx={{ mb: 4, textAlign: 'center' }}>Meet The Team</Heading>
        
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
          <Grid columns={[1, null, 2, 3]} gap={4} sx={{ mb: 5 }}>
            {members.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </Grid>
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
          <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Join Our Community</Heading>
          <Text sx={{ mb: 3 }}>
            We're always looking for passionate individuals to join our community. Whether you're a beginner or an experienced coder, there's a place for you at HackClub Butwal.
          </Text>
          
          <Flex 
            sx={{ 
              justifyContent: 'center', 
              gap: 3,
              flexWrap: 'wrap'
            }}
          >
            <Button as="a" href="/contact" variant="primary">
              Get Involved
            </Button>
            <Button 
              as="a" 
              href="https://hackclub.com/slack" 
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              sx={{ bg: 'background' }}
            >
              Join our Slack
            </Button>
          </Flex>
        </Box>
        
        <Box sx={{ mt: 5 }}>
          <Heading as="h2" sx={{ mb: 3, textAlign: 'center' }}>Testimonials</Heading>
          <Grid columns={[1, 2]} gap={4}>
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                borderLeft: '4px solid',
                borderColor: 'primary',
                bg: 'background',
                boxShadow: 'card'
              }}
            >
              <Text sx={{ fontStyle: 'italic', mb: 2 }}>
                "Joining HackClub Butwal was one of the best decisions I made. I've learned so much and made amazing friends who share my passion for coding."
              </Text>
              <Text sx={{ fontWeight: 'bold' }}>— Anisha Poudel, Member</Text>
            </Box>
            
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 'default',
                borderLeft: '4px solid',
                borderColor: 'primary',
                bg: 'background',
                boxShadow: 'card'
              }}
            >
              <Text sx={{ fontStyle: 'italic', mb: 2 }}>
                "The workshops and mentorship at HackClub Butwal helped me build my first web application. The supportive community makes learning fun and engaging."
              </Text>
              <Text sx={{ fontWeight: 'bold' }}>— Rohan Sharma, Member</Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  )
}