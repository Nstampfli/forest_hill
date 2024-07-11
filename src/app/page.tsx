'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/MainContent';
import MobileSidebar from './components/layout/MobileSidebar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
      <Head>
        <title>Dashboard - Forest Hill</title>
      </Head>
      <Header />
      <div className="flex flex-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent activeTab={activeTab} />
      </div>
      <MobileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;
