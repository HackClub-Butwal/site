// This file handles the Airtable API integration for the gallery page
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

// In a real implementation, this function would fetch data from Airtable
// For now, it returns mock data
export async function fetchGalleryItems() {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real implementation, you would use the Airtable API like this:
  /*
  const Airtable = require('airtable');
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appL4pCxBSJ6H8dzd');
  
  return new Promise((resolve, reject) => {
    const items = [];
    base('Projects')
      .select({
        maxRecords: 20,
        view: 'Grid view',
        sort: [{ field: 'Start Date', direction: 'desc' }]
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            items.push({
              id: record.id,
              fields: record.fields
            });
          });
          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
            return;
          }
          resolve(items);
        }
      );
  });
  */
  
  return mockGalleryItems;
}