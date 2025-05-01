import { Message } from '../types';

export const initialMessages: Message[] = [
  {
    id: 1,
    role: 'system',
    text: "Hi there! I'm your Japan travel assistant. I understand you're a couple visiting Tokyo & Kyoto for your first trip (4 days). Here are two exciting activities I think you might enjoy:",
    associatedActivities: [1, 3]
  },
  {
    id: 2,
    role: 'system',
    text: "Which one appeals to you more? The thrilling go-karting adventure in Tokyo or the peaceful tea ceremony in Kyoto?",
  },
  {
    id: 3,
    role: 'user',
    text: "I love the Go-Karting idea! That looks so fun racing through Tokyo at night!",
  },
  {
    id: 4,
    role: 'system',
    text: "Great choice! The Go-Karting is definitely a unique Tokyo experience. Based on your interest, I'd also recommend these additional activities to balance your 4-day trip:",
    associatedActivities: [1, 2, 3, 4]
  },
  {
    id: 5,
    role: 'system',
    text: "Would you like to confirm these four activities for your 4-day trip? They give you a nice mix of adventure and culture in both cities.",
  },
  {
    id: 6,
    role: 'system',
    text: "Fantastic! Your itinerary is confirmed. You're going to have an amazing trip to Japan! Feel free to ask if you need any additional tips or recommendations for your journey.",
  }
];