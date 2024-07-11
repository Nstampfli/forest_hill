import React from 'react';
import Stats from './Stats';
import Performance from './Performance';
import ChatBox from './chatbot/ChatBox';

const MainContent = ({ activeTab }: { activeTab: string }) => (
  <main className="flex-1 flex flex-col ml-0 md:ml-64 p-6 w-full max-w-full">
    {activeTab === 'stats' && (
      <Stats />
    )}
    {activeTab === 'performance' && (
      <Performance />
    )}
    {activeTab === 'chatbot' && (
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1 flex flex-col rounded-lg bg-gray-100 dark:bg-gray-900 shadow-md overflow-hidden p-4 h-full md:h-[calc(100vh-96px)] w-full max-w-full">
          <ChatBox />
        </div>
      </div>
    )}
  </main>
);

export default MainContent;
