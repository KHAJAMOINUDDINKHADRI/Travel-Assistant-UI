import React, { createContext, useContext, useState, useEffect } from 'react';
import { Message, Activity } from '../types';
import { initialMessages } from '../data/chatScript';
import { activities } from '../data/activities';

interface ChatContextType {
  messages: Message[];
  currentStep: number;
  selectedActivities: Activity[];
  visibleActivities: Activity[];
  isConfirmed: boolean;
  simulateUserReply: () => void;
  confirmActivities: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [visibleActivities, setVisibleActivities] = useState<Activity[]>([]);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // Initialize chat with first message
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([initialMessages[0]]);
      // Show initial activities immediately
      setVisibleActivities([activities[0], activities[2]]);
      
      // Add the follow-up question after a delay
      setTimeout(() => {
        setMessages(prev => [...prev, initialMessages[1]]);
      }, 1000);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Simulate user reply (choosing Go-Karting)
  const simulateUserReply = () => {
    if (currentStep === 0) {
      // Add user message and update visible activities immediately
      setMessages(prev => [...prev, initialMessages[2]]);
      setSelectedActivities([activities[0]]);
      setVisibleActivities([activities[0], activities[1], activities[2], activities[3]]);
      
      // Add next system messages after delay
      setTimeout(() => {
        setMessages(prev => [...prev, initialMessages[3], initialMessages[4]]);
        setCurrentStep(1);
      }, 1500);
    }
  };

  // Confirm selected activities
  const confirmActivities = () => {
    setSelectedActivities([activities[0], activities[1], activities[2], activities[3]]);
    setMessages(prev => [...prev, initialMessages[5]]);
    setIsConfirmed(true);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      currentStep,
      selectedActivities,
      visibleActivities,
      isConfirmed,
      simulateUserReply,
      confirmActivities
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};