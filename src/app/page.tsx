import React from "react";
import Head from "next/head";

const Page = () => {
  const categories = [
    "Native GPT Prompts",
    "DALL-E Prompts",
    "Stable Diffusion Prompts",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Prompt Bookmarker</title>
      </Head>
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-64 p-4 space-y-4">
        <h1 className="text-lg font-semibold">Categories</h1>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="block py-2 px-3 rounded hover:bg-blue-700">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow p-4 rounded mb-6">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search for prompts..."
          />
        </div>
        <div>{/* Your main content goes here */}</div>
      </div>
    </div>
  );
};

export default Page;
