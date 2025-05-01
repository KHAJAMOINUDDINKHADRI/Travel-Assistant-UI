import React from 'react';
import { Message } from '../../types';
import { User, Bot } from 'lucide-react';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isSystem = message.role === 'system';
  
  return (
    <div 
      className={`flex mb-4 items-start ${isSystem ? '' : 'justify-end'} animate-fadeIn`}
      style={{animation: 'fadeIn 0.3s ease-in-out'}}
    >
      {isSystem && (
        <div className="flex-shrink-0 mr-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100">
            <Bot className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      )}
      
      <div 
        className={`px-4 py-3 rounded-lg max-w-[80%] ${
          isSystem 
            ? 'bg-white text-gray-800 border border-gray-200 shadow-sm' 
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
      </div>
      
      {!isSystem && (
        <div className="flex-shrink-0 ml-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;