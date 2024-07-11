import React from 'react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const isUser = sender === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(10px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-800'
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
