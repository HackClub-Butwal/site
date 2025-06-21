'use client'
import { useEffect, useState } from 'react'
import { Box, Grid, Card, Text, Heading, Image, Link } from 'theme-ui'

export default function CommunityPage() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/airtable/community')
        const json = await res.json()
        setMembers(json.records || [])
      } catch (err) {
        console.error('Error fetching community data:', err)
      } finally {
        setLoading(false)
      }
    }
    void fetchData()
  }, [])

  return (
    <Box sx={{ px: 4, py: 5, bg: 'background', color: 'text' }}>
      <Heading as="h1" sx={{ mb: 4 }}>Our Community</Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Grid columns={[1, 2, 3]} gap={4}>
          {members.map((m) => {
            const { id, fields } = m
            return (
              <Card key={id} sx={{ p: 3, bg: 'muted', borderRadius: 12 }}>
                {fields.Photo && fields.Photo[0]?.url && (
                  <Image
                    src={fields.Photo[0].url}
                    alt={fields.Name}
                    sx={{ borderRadius: 'full', mb: 3 }}
                  />
                )}
                <Heading as="h3" sx={{ mb: 1 }}>{fields.Name}</Heading>
                <Text sx={{ mb: 2 }}>{fields.Role}</Text>
                {fields.GitHub && (
                  <Link href={fields.GitHub} target="_blank">GitHub</Link>
                )}
              </Card>
            )
          })}
        </Grid>
      )}
    </Box>
  )
}
