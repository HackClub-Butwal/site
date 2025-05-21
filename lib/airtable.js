// This file handles the Airtable API integration for the website
// In a real implementation, you would use your actual Airtable API key
// For demonstration purposes, we're using mock data

// Mock data for gallery items (in a real implementation, this would come from Airtable)
const mockGalleryItems = [
  {
    id: 'rec1',
    fields: {
      Title: 'First Workshop',
      Description: 'Our first coding workshop with Hack Club Butwal members',
      Date: '2023-04-15',
      Image: [
        {
          url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'rec2',
    fields: {
      Title: 'Hackathon 2023',
      Description: 'Annual hackathon with students from local schools',
      Date: '2023-06-22',
      Image: [
        {
          url: 'https://cloud-qbmylsgyb-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-qbmylsgyb-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'rec3',
    fields: {
      Title: 'Community Meetup',
      Description: 'Monthly community meetup to discuss projects and ideas',
      Date: '2023-07-10',
      Image: [
        {
          url: 'https://cloud-5jq0jbvvk-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5jq0jbvvk-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'rec4',
    fields: {
      Title: 'Web Development Workshop',
      Description: 'Learning HTML, CSS, and JavaScript basics',
      Date: '2023-08-05',
      Image: [
        {
          url: 'https://cloud-c5v0nh9y5-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-c5v0nh9y5-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
];

// Mock data for workshops (past and upcoming)
const mockWorkshops = [
  {
    id: 'ws1',
    fields: {
      Title: 'Introduction to Web Development',
      Description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
      Date: '2023-11-15',
      Status: 'Upcoming',
      Location: 'Butwal Tech Hub',
      Image: [
        {
          url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'ws2',
    fields: {
      Title: 'Building Apps with React',
      Description: 'Learn how to build modern web applications using React and Next.js.',
      Date: '2023-12-05',
      Status: 'Upcoming',
      Location: 'Butwal Tech Hub',
      Image: [
        {
          url: 'https://cloud-qbmylsgyb-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-qbmylsgyb-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'ws3',
    fields: {
      Title: 'Python for Beginners',
      Description: 'Introduction to Python programming language for beginners.',
      Date: '2023-10-10',
      Status: 'Past',
      Location: 'Butwal Tech Hub',
      Image: [
        {
          url: 'https://cloud-5jq0jbvvk-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5jq0jbvvk-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'ws4',
    fields: {
      Title: 'Game Development with JavaScript',
      Description: 'Build your own browser-based games using JavaScript and HTML5 Canvas.',
      Date: '2023-09-20',
      Status: 'Past',
      Location: 'Butwal Tech Hub',
      Image: [
        {
          url: 'https://cloud-c5v0nh9y5-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-c5v0nh9y5-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
];

// Mock data for community members
const mockCommunityMembers = [
  {
    id: 'mem1',
    fields: {
      Name: 'Aarav Sharma',
      Role: 'Lead Organizer',
      Bio: 'Computer Science student passionate about web development and teaching coding to others.',
      Testimonial: 'Hack Club Butwal has been an amazing platform to share my knowledge and learn from others.',
      Twitter: 'https://twitter.com/aaravsharma',
      LinkedIn: 'https://linkedin.com/in/aaravsharma',
      GitHub: 'https://github.com/aaravsharma',
      Image: [
        {
          url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
  {
    id: 'mem2',
    fields: {
      Name: 'Priya Patel',
      Role: 'Workshop Facilitator',
      Bio: 'Full-stack developer with a passion for open source and community building.',
      Testimonial: "I love seeing students' eyes light up when they build their first project at our workshops.",
      Twitter: 'https://twitter.com/priyapatel',
      LinkedIn: 'https://linkedin.com/in/priyapatel',
      GitHub: 'https://github.com/priyapatel',
      Image: [
        {
          url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
          thumbnails: {
            large: {
              url: 'https://cloud-5aq8uo4hj-hack-club-bot.vercel.app/0image.png',
            },
          },
        },
      ],
    },
  },
];

// Add mock sponsors data
const mockSponsors = [
  { id: 's1', fields: { Name: 'Platinum Corp', Tier: 'Platinum', Description: 'Our top sponsor.', Website: 'https://platinum.example.com', Logo: [{ url: 'https://via.placeholder.com/80', thumbnails: { large: { url: 'https://via.placeholder.com/80' } } }] } },
  { id: 's2', fields: { Name: 'Gold Inc', Tier: 'Gold', Description: 'Gold level supporter.', Website: 'https://gold.example.com', Logo: [{ url: 'https://via.placeholder.com/80', thumbnails: { large: { url: 'https://via.placeholder.com/80' } } }] } },
  { id: 's3', fields: { Name: 'Silver LLC', Tier: 'Silver', Description: 'Silver level donor.', Website: 'https://silver.example.com', Logo: [{ url: 'https://via.placeholder.com/80', thumbnails: { large: { url: 'https://via.placeholder.com/80' } } }] } },
  { id: 's4', fields: { Name: 'Bronze Start', Tier: 'Bronze', Description: 'Bronze level partner.', Website: 'https://bronze.example.com', Logo: [{ url: 'https://via.placeholder.com/80', thumbnails: { large: { url: 'https://via.placeholder.com/80' } } }] } }
];

// Export fetch functions
export async function fetchGalleryItems() {
  return new Promise((resolve) => resolve(mockGalleryItems));
}

export async function fetchWorkshops() {
  return new Promise((resolve) => resolve(mockWorkshops));
}

export async function fetchCommunityMembers() {
  return new Promise((resolve) => resolve(mockCommunityMembers));
}

export async function fetchSponsors() {
  return new Promise((resolve) => resolve(mockSponsors));
}
