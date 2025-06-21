'use client'
import { useEffect, useState } from 'react'
import { Box, Heading, Grid, Card, Text, Button } from 'theme-ui'

export default function WorkshopsPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/airtable/workshops')
      .then((res) => res.json())
      .then((data) => setEvents(data.records || []))
  }, [])

  return (
    <Box sx={{ px: 4, py: 5, bg: 'background', color: 'text' }}>
      <Heading as="h1" sx={{ mb: 4 }}>Upcoming & Past Workshops</Heading>
      <Grid columns={[1, 2]} gap={4}>
        {events.map(({ id, fields }) => (
          <Card key={id} sx={{ p: 3, bg: 'muted', borderRadius: 10 }}>
            <Heading as="h3">{fields.Title}</Heading>
            <Text sx={{ mt: 2 }}>{fields.Description}</Text>
            <Text sx={{ fontSize: 1, color: 'secondary', mt: 1 }}>
              📅 {fields.Date}
            </Text>
            {fields.RegistrationLink && (
              <Button as="a" href={fields.RegistrationLink} target="_blank" sx={{ mt: 3 }}>
                Register
              </Button>
            )}
          </Card>
        ))}
      </Grid>
    </Box>
  )
}

