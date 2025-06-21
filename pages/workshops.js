import { useState } from 'react'
import Head from 'next/head'
import { Container, Box, Heading, Text, Grid, Flex, Button, Spinner } from 'theme-ui'
import EventCard from '../components/EventCard'
import { useEvents } from '../lib/airtable'

function EventFilter({ allTags, filter, setFilter }) {
  return (
    <Flex
      sx={{
        mb: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <Button
        variant={filter === 'all' ? 'primary' : 'outline'}
        onClick={() => setFilter('all')}
        sx={{ mb: 2 }}
      >
        All Events
      </Button>
      {allTags.map(tag => (
        <Button
          key={tag}
          variant={filter === tag ? 'primary' : 'outline'}
          onClick={() => setFilter(tag)}
          sx={{ mb: 2 }}
        >
          {tag}
        </Button>
      ))}
    </Flex>
  )
}

function EventsGrid({ events }) {
  return (
    <Grid columns={[1, null, 2, 3]} gap={4}>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </Grid>
  )
}

function EventsEmpty({ setFilter }) {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Text>No events found with the selected filter.</Text>
      <Button
        variant="outline"
        onClick={() => setFilter('all')}
        sx={{ mt: 3 }}
      >
        Show all events
      </Button>
    </Box>
  )
}

export default function Workshops() {
  const { events, isLoading, error } = useEvents()
  const [filter, setFilter] = useState('all')

  // Get unique tags from all events
  const allTags = events.reduce((tags, event) => {
    if (event.tags) {
      event.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    }
    return tags
  }, [])

  // Filter events based on selected tag
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.tags && event.tags.includes(filter))

  return (
    <>
      <Head>
        <title>Workshops & Events – HackClub Butwal</title>
        <meta name="description" content="Join our upcoming workshops and events at HackClub Butwal. Learn coding, design, and more!" />
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
            Workshops & Events
          </Heading>
          <Text sx={{ fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Join our hands-on workshops and community events to learn new skills, build projects, and connect with fellow coders in Butwal.
          </Text>
        </Container>
      </Box>
      <Container sx={{ py: [4, 5] }}>
        <EventFilter allTags={allTags} filter={filter} setFilter={setFilter} />
        {isLoading ? (
          <Flex sx={{ justifyContent: 'center', py: 5 }}>
            <Spinner />
          </Flex>
        ) : error ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Text sx={{ color: 'secondary' }}>{error}</Text>
            <Text>Showing fallback data instead.</Text>
          </Box>
        ) : filteredEvents.length === 0 ? (
          <EventsEmpty setFilter={setFilter} />
        ) : (
          <>
            <EventsGrid events={filteredEvents} />
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Want to suggest a workshop?</Heading>
              <Text sx={{ mb: 3 }}>
                Have an idea for a workshop or want to lead one yourself? We're always looking for new topics and speakers!
              </Text>
              <Button as="a" href="/contact" variant="outline">
                Contact Us
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  )
}