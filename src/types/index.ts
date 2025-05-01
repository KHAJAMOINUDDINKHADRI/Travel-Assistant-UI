export interface Message {
  id: number;
  role: 'system' | 'user';
  text: string;
  associatedActivities?: number[];
}

export interface Activity {
  id: number;
  city: 'Tokyo' | 'Kyoto';
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  mapLocation?: {
    lat: number;
    lng: number;
  };
}