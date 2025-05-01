import React from 'react';
import ChatWindow from '../chat/ChatWindow';
import VisualPanel from '../visual/VisualPanel';
import { useChat } from '../../context/ChatContext';

const AppLayout: React.FC = () => {
  return (
    <div className="app-container h-screen flex flex-col md:flex-row overflow-hidden bg-gray-100">
      <div className="chat-container md:w-2/5 h-1/2 md:h-full overflow-hidden bg-white border-r border-gray-200">
        <ChatWindow />
      </div>
      <div className="visual-container w-full md:w-3/5 h-1/2 md:h-full overflow-hidden bg-gray-50">
        <VisualPanel />
      </div>
    </div>
  );
};

export default AppLayout;