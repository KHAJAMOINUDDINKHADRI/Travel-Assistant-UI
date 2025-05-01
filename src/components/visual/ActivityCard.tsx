import React from 'react';
import { Activity } from '../../types';
import { MapPin, Tag, Clock, Heart, Star, Users, Info } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { title, description, tags, imageUrl, city } = activity;
  
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'adventure': return 'bg-orange-100 text-orange-800';
      case 'nightlife': return 'bg-purple-100 text-purple-800';
      case 'fun': return 'bg-pink-100 text-pink-800';
      case 'cultural': return 'bg-red-100 text-red-800';
      case 'nature': return 'bg-green-100 text-green-800';
      case 'relaxation': return 'bg-blue-100 text-blue-800';
      case 'history': return 'bg-amber-100 text-amber-800';
      case 'photography': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Random review count between 100-500
  const reviewCount = Math.floor(Math.random() * 400) + 100;
  // Random rating between 4.3-4.9
  const rating = (Math.random() * 0.6 + 4.3).toFixed(1);
  // Random likes between 50-200
  const likes = Math.floor(Math.random() * 150) + 50;
  
  const recentVisitors = [
    'Alex',
    'Maya',
    'Sofia R.',
    'James L.',
    'Emma T.',
  ].slice(0, 3);
  
  return (
    <div className="activity-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{city}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-400 text-sm ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        <div className="space-y-4 mb-4">
          <p className="text-gray-600">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagColor(tag)}`}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>2-3 hours</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              <span>{likes} likes</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-400" />
            <p className="text-sm text-gray-500">
              Recently visited by {recentVisitors.join(', ')}
            </p>
          </div>
          
          <div className="flex items-start space-x-2 text-sm text-gray-500">
            <Info className="h-4 w-4 mt-0.5" />
            <p>Best time to visit: Early morning or late afternoon to avoid crowds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;