import React from 'react';
import { motion } from 'framer-motion';

const LoadingDots: React.FC = () => (
  <div className="flex space-x-1">
    <motion.span
      className="block w-2.5 h-2.5 bg-gray-500 rounded-full"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 0.2,
      }}
    />
    <motion.span
      className="block w-2.5 h-2.5 bg-gray-500 rounded-full"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 0.4,
      }}
    />
    <motion.span
      className="block w-2.5 h-2.5 bg-gray-500 rounded-full"
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 0.6,
      }}
    />
  </div>
);

export default LoadingDots;
