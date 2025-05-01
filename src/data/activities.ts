import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 1,
    city: 'Tokyo',
    title: 'Nighttime Go-Karting in Shibuya',
    description: 'Race through the neon-lit streets of Tokyo in a real-life Mario Kart experience! Dress up as your favorite character and zoom past iconic landmarks.',
    tags: ['adventure', 'nightlife', 'fun'],
    imageUrl: 'https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    mapLocation: {
      lat: 35.6594,
      lng: 139.7005
    }
  },
  {
    id: 2,
    city: 'Tokyo',
    title: 'Day Hike on Mount Takao',
    description: 'Escape the urban jungle with a refreshing hike up Mount Takao. Just an hour from central Tokyo, enjoy breathtaking views, visit a historic temple, and reconnect with nature.',
    tags: ['nature', 'adventure', 'cultural'],
    imageUrl: 'https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    mapLocation: {
      lat: 35.6251,
      lng: 139.2438
    }
  },
  {
    id: 3,
    city: 'Kyoto',
    title: 'Traditional Tea Ceremony in Gion',
    description: 'Immerse yourself in centuries of tradition with an authentic tea ceremony in Kyoto\'s historic Gion district. Learn the proper etiquette and symbolism from a tea master.',
    tags: ['cultural', 'relaxation', 'history'],
    imageUrl: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    mapLocation: {
      lat: 35.0030,
      lng: 135.7730
    }
  },
  {
    id: 4,
    city: 'Kyoto',
    title: 'Evening Stroll through Fushimi Inari',
    description: 'Walk through thousands of vermilion torii gates at this iconic shrine. The evening offers a magical atmosphere with fewer crowds and beautiful lighting.',
    tags: ['cultural', 'nature', 'photography'],
    imageUrl: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    mapLocation: {
      lat: 34.9671,
      lng: 135.7725
    }
  }
];