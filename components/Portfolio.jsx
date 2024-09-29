"use client";
import React, { useState } from "react";
import Card from "./Card"; // Assuming Card is in the same directory

import {
  FaJs,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";
// Make sure that simple-icons exports the correct React components if you're using it

const Portfolio = () => {
  const cardData = [
    {
      image: "/assets/noklica.jpg",
      title: "Noklica",
      description:
        "Cooking blog with a homemade story and recipes that fill your heart and your belly. With traditional Serbian recipes, funny and interesting stories, this is the website for you.",
      githubLink: "https://github.com/TheKokibon/noklica",
      websiteLink: "https://noklica.netlify.app/",
      technologies: [FaReact, SiExpress, SiSupabase, SiNodedotjs, FaCss3Alt],
    },
    {
      image: "/assets/bolime.jpg",
      title: "App for mapping of pain",
      description:
        "Diary of pain made for families using profiles function similar to Netflix, track your pain, informations about pain and analitics.",
      githubLink: "https://github.com/TheKokibon/BoliMeApp",
      websiteLink: "",
      technologies: [FaReact, FaNodeJs, SiFirebase, FaCss3Alt],
    },

    {
      image: "/assets/dkfon.jpg",
      title: "Website of debate club",
      description:
        "Website of debate club of Faculty of Organizational Sciences. Static and made to show our achivements, projects and history.",
      githubLink: "https://github.com/TheKokibon/DK-FON",
      websiteLink: "https://dkfon.netlify.app/",
      technologies: [FaJs, FaCss3Alt, FaHtml5],
    },
    // Add more cards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to go to the next card
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length); // Loop back to the first card
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

   return (
    <div className="w-full bg-[#90CCF4] text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 px-4 h-1/5 flex items-center justify-between">
        <h1 className="text-3xl font-bold font-yanone">Projects</h1>
        <div className="flex items-center gap-4">
          {/* Previous button */}
          <button
            className="rounded-full transition-all duration-300 transform hover:scale-150"
            onClick={handlePreviousCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 border-2 border-white bg-white rounded-full text-[#90CCF4] hover:bg-[#a9c7ff] hover:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            className="rounded-full transition-all duration-300 transform hover:scale-150"
            onClick={handleNextCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 border-2 border-white bg-white rounded-full text-[#90CCF4] hover:bg-[#a9c7ff] hover:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Display */}
      <div className="flex justify-center">
        <Card
          image={cardData[currentCardIndex].image}
          title={cardData[currentCardIndex].title}
          description={cardData[currentCardIndex].description}
          githubLink={cardData[currentCardIndex].githubLink}
          websiteLink={cardData[currentCardIndex].websiteLink}
          technologies={cardData[currentCardIndex].technologies}
        />
      </div>
    </div>
  );
};

export default Portfolio;