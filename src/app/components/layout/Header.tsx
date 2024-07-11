import React from 'react';
import DarkModeToggle from '../ui/DarkModeToggle';

const Header = () => (
  <header className="bg-primary-500 dark:bg-primary-700 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
    <h1 className="text-2xl font-bold">Forest Hill</h1>
    <div className="flex items-center space-x-4">
      <DarkModeToggle />
      <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
        U
      </div>
    </div>
  </header>
);

export default Header;
