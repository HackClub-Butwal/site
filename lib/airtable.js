// Utility functions for fetching data from Airtable with fallback data
import { useState, useEffect } from 'react'

// Fallback data for when Airtable API is unavailable
const fallbackData = {
  events: [
    {
      id: 'evt1',
      title: 'Intro to Web Development',
      date: '2023-07-15T10:00:00Z',
      description: 'Learn the basics of HTML, CSS, and JavaScript in this beginner-friendly workshop.',
      tags: ['Web Dev', 'Beginner'],
      location: 'Butwal Tech Hub',
      image: '/assets/logo/red_logo/Group_337.png'
    },
    {
      id: 'evt2',
      title: 'Hackathon Bootcamp',
      date: '2023-07-22T09:00:00Z',
      description: 'Prepare for upcoming hackathons with this intensive bootcamp covering ideation, prototyping, and pitching.',
      tags: ['Hackathon', 'Intermediate'],
      location: 'Online',
      image: '/assets/logo/red_logo/Group_337.png'
    },
    {
      id: 'evt3',
      title: 'React Workshop',
      date: '2023-08-05T13:00:00Z',
      description: 'Deep dive into React.js and learn how to build modern web applications.',
      tags: ['Web Dev', 'React', 'Intermediate'],
      location: 'Butwal Tech Hub',
      image: '/assets/logo/red_logo/Group_337.png'
    }
  ],
  team: [
    {
      id: 'mem1',
      name: 'Aayush Sharma',
      role: 'Lead Organizer',
      bio: 'Computer Science student passionate about building communities and teaching coding.',
      avatar: '/assets/logo/red_logo/Group_337.png',
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 'mem2',
      name: 'Priya Patel',
      role: 'Technical Lead',
      bio: 'Full-stack developer with expertise in React and Node.js. Loves mentoring new coders.',
      avatar: '/assets/logo/red_logo/Group_337.png',
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 'mem3',
      name: 'Raj Kumar',
      role: 'Workshop Coordinator',
      bio: 'Experienced educator and developer focused on creating engaging learning experiences.',
      avatar: '/assets/logo/red_logo/Group_337.png',
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ],
  sponsors: [
    {
      id: 'spo1',
      name: 'TechCorp Nepal',
      tier: 'Platinum',
      description: 'Leading technology company supporting tech education initiatives.',
      logo: '/assets/logo/red_logo/Group_337.png',
      website: 'https://example.com'
    },
    {
      id: 'spo2',
      name: 'Butwal Innovation Hub',
      tier: 'Gold',
      description: 'Local innovation center providing space and resources for tech events.',
      logo: '/assets/logo/red_logo/Group_337.png',
      website: 'https://example.com'
    },
    {
      id: 'spo3',
      name: 'CodeNinja Academy',
      tier: 'Silver',
      description: 'Coding bootcamp supporting the next generation of developers.',
      logo: '/assets/logo/red_logo/Group_337.png',
      website: 'https://example.com'
    },
    {
      id: 'spo4',
      name: 'DevTools Pro',
      tier: 'Bronze',
      description: 'Developer tools company providing software licenses to members.',
      logo: '/assets/logo/red_logo/Group_337.png',
      website: 'https://example.com'
    }
  ]
}

// Hook for fetching events from Airtable
export function useEvents() {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        // In a real implementation, you would fetch from Airtable API here
        // const response = await fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Events', {
        //   headers: {
        //     'Authorization': `Bearer YOUR_API_KEY`
        //   }
        // })
        // const data = await response.json()
        // const formattedEvents = data.records.map(record => ({
        //   id: record.id,
        //   ...record.fields
        // }))
        
        // For now, simulate API delay and use fallback data
        await new Promise(resolve => setTimeout(resolve, 800))
        setEvents(fallbackData.events)
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching events:', err)
        setError('Failed to load events. Using fallback data.')
        setEvents(fallbackData.events)
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { events, isLoading, error }
}

// Hook for fetching team members from Airtable
export function useTeamMembers() {
  const [members, setMembers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMembers() {
      try {
        // In a real implementation, you would fetch from Airtable API here
        // Simulating API delay and using fallback data
        await new Promise(resolve => setTimeout(resolve, 800))
        setMembers(fallbackData.team)
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching team members:', err)
        setError('Failed to load team members. Using fallback data.')
        setMembers(fallbackData.team)
        setIsLoading(false)
      }
    }

    fetchMembers()
  }, [])

  return { members, isLoading, error }
}

// Hook for fetching sponsors from Airtable
export function useSponsors() {
  const [sponsors, setSponsors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSponsors() {
      try {
        // In a real implementation, you would fetch from Airtable API here
        // Simulating API delay and using fallback data
        await new Promise(resolve => setTimeout(resolve, 800))
        setSponsors(fallbackData.sponsors)
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching sponsors:', err)
        setError('Failed to load sponsors. Using fallback data.')
        setSponsors(fallbackData.sponsors)
        setIsLoading(false)
      }
    }

    fetchSponsors()
  }, [])

  return { sponsors, isLoading, error }
}

// Helper function to format date
export function formatDate(dateString) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Helper function to group sponsors by tier
export function groupSponsorsByTier(sponsors) {
  const tiers = ['Platinum', 'Gold', 'Silver', 'Bronze']
  return tiers.map(tier => ({
    tier,
    sponsors: sponsors.filter(sponsor => sponsor.tier === tier)
  })).filter(group => group.sponsors.length > 0)
}