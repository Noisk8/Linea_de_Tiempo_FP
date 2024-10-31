import React from 'react';

const Skeleton = () => (
  <div className="skeleton bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md relative max-w-xs">
    <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
  </div>
);

export default Skeleton;