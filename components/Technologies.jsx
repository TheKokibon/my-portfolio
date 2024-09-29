'use client';

import React, { useState } from 'react';
import IconCloud from "@/components/magicui/icon-cloud";  // Ensure this path is correct
import ReadTech from '@/components/ReadTech';  // Import the ReadTech component

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "docker",
  "github",
  "supabase",
  "firebase"
];

const Technologies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative flex h-1/3 w-1/3 flex-col items-center justify-center p-4 bg-[#F78888]">
      <IconCloud className="mt-8"
        iconSlugs={slugs}
        size={100}
        speed={1}
        perspective={150}
      />
      <button 
        className='pulse-button p-2 bg-white text-[#F78888] rounded-lg mt-4 hover:bg-red-300 hover:text-white transition-transform ease-in-out duration-300 hover:scale-105'
        onClick={toggleModal}
      >
        Read tech
      </button>

      {/* Modal rendering logic */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="relative bg-[#F78888] rounded-lg p-8 max-w-3xl mx-auto">
            <button 
              className="absolute top-2 right-4 text-xl font-bold text-white hover:text-gray-200"
              onClick={toggleModal}
            >
              &times;
            </button>
            <ReadTech /> {/* Render the imported ReadTech component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
