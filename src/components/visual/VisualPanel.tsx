import React from 'react';
import { useChat } from '../../context/ChatContext';
import ActivityCard from './ActivityCard';
import { MapPin, Map, CheckCircle } from 'lucide-react';

const VisualPanel: React.FC = () => {
  const { visibleActivities, isConfirmed } = useChat();

  return (
    <div className="h-full flex flex-col">
      <div className="visual-header py-4 px-6 bg-white border-b border-gray-200 shadow-sm  flex flex-col items-center">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Recommended Activities</h2>
          {isConfirmed && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Journey Confirmed</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center text-sm mt-2 text-gray-500">
          <span>Best of Tokyo & Kyoto</span>
        </div>
      </div>
      
      <div className="cities-tabs flex border-b border-gray-200 bg-white">
        <div className="tab py-3 px-6 border-b-2 border-blue-600 text-blue-600 font-medium flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          All Destinations
        </div>
      </div>
      
      {visibleActivities.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
          <Map className="h-16 w-16 mb-4 text-gray-300" />
          <p className="text-lg">Start chatting to discover activities</p>
        </div>
      ) : (
        <div className="activities-grid p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {visibleActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualPanel;