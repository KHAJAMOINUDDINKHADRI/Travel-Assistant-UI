import React, { useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';
import ChatBubble from './ChatBubble';
import { MapPin, Plane } from 'lucide-react';

const ChatWindow: React.FC = () => {
  const { messages, currentStep, simulateUserReply, confirmActivities, isConfirmed } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="chat-header py-4 px-6 bg-white border-b border-gray-200 shadow-sm flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Plane className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">Japan Travel Assistant</h2>
        </div>
        <div className="flex items-center text-sm mt-1 text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>Tokyo & Kyoto • 4-day trip</span>
        </div>
      </div>
      
      <div className="chat-messages flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {currentStep === 0 && messages.length >= 2 && (
        <div className="user-input-simulation p-4 border-t border-gray-200">
          <button 
            onClick={simulateUserReply}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Select Go-Karting
          </button>
        </div>
      )}
      
      {currentStep === 1 && !isConfirmed && (
        <div className="confirmation-footer p-4 border-t border-gray-200">
          <button 
            onClick={confirmActivities}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Confirm These Activities
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;