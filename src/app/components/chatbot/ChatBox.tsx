import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import LoadingDots from '../ui/LoadingDots';
import chatGPTRequest from '../../utils/chatgpt';

type Message = {
  sender: 'user' | 'bot';
  message: string;
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', message: 'Bonjour! Comment puis-je vous aider aujourd\'hui ?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage: Message = { sender: 'user', message: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setLoading(true);

      try {
        const botMessageText = await chatGPTRequest(input);
        const botMessage: Message = { sender: 'bot', message: botMessageText };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching response from ChatGPT:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-full bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
        {loading && (
          <div className="flex justify-center mb-4">
            <LoadingDots />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex items-center p-2 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <input
          type="text"
          className="flex-1 p-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapez votre message..."
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
