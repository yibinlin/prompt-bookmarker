import Image from 'next/image'

import React from 'react';

const Page = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-64 p-4 space-y-4">
        <h1 className="text-lg font-semibold">Categories</h1>
        <ul className="space-y-2">
          <li><a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Category 1</a></li>
          <li><a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Category 2</a></li>
          <li><a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">Category 3</a></li>
          {/* Add more categories here */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow p-4 rounded mb-6">
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for prompts..."/>
        </div>
        <div>
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Page;
