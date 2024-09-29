'use client';
import { useState } from "react";

import { MapPinIcon } from "@heroicons/react/24/solid";
import Contact from "@/components/Contact";
import MiniGame from "@/components/MiniGame";
import Image from "next/image";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [progress, setProgress] = useState(0); // Track progress (0-5)

  const revealSection = () => {
    setProgress((prevProgress) => prevProgress + 1);
  };

  // Function to calculate visibility and blur levels for each section
  const getVisibilityAndBlur = (level) => {
    if (progress === 0) return "opacity-0"; // Completely black when game is not started
    if (progress >= level && progress < 5) return "blur-3xl opacity-50"; // Blurry reveal for each section during progress
    if (progress >= 5) return "blur-none opacity-100"; // Fully visible once the game is complete
    return "opacity-0"; // Hidden if the progress has not reached the section yet
  };

  return (
    <div className="relative h-screen w-screen">
      {/* MiniGame */}
      {progress < 5 && <MiniGame onProgress={revealSection} />}

      {/* ABOUT Section */}
      <div
        className={`absolute top-0 left-0 w-[35%] h-[60%] border-t-4 border-l-4 border-white flex items-center justify-center bg-[#659157] text-white transition-all duration-500 ${getVisibilityAndBlur(1)}`}
      >
        <div className="flex flex-col items-center text-center p-4">
          <h1 className="text-3xl font-yanone font-bold mb-4">About</h1>
          <Image
            src="/assets/kolja.jpg"
            alt="profile"
            width={100}
            height={100}
            className="mb-4 rounded-full overflow-hidden border-4 border-white"
          />
          <div className="text-left w-2/3 font-ptserif">
            <p>Hey there! 👋</p>
            <p>
              I&apom a full stack developer in my final year of Information Systems
              and Technology at the Faculty of Organizational Sciences. I enjoy
              building user-friendly interfaces and constantly work on improving
              my skills through various projects.
            </p>
            <p>
              When I&apom not coding, you can find me playing video games 🎮,
              experimenting with new recipes in the kitchen 🍳, or listening to
              some good music 🎵.
            </p>
            <p>Looking forward to connecting and working on exciting projects!</p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div
        className={`absolute top-0 right-0 w-[65%] h-[41%] border-4 border-white flex flex-col items-center bg-[#F78888] text-white transition-all duration-500 ${getVisibilityAndBlur(2)}`}
      >
        <h1 className="text-3xl font-yanone font-bold p-2">Experience</h1>

        <div className="flex flex-row w-full h-full items-stretch">
          {/* Work Section */}
          <div className="flex-1 p-2">
            <h2 className="text-xl font-overpass italic mb-6 text-center">Work</h2>

            {/* Work Experience List */}
            <div className="text-white font-ptserif grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div>
                <p className="font-bold font-overpass ">Basketball Coach</p>
                <p className="font-ptserif">KK Flash, Belgrade | 2020 - 2024</p>

                <p className="font-bold mt-2 font-overpass ">
                  Teaching Associate, Department for E-Business
                </p>
                <p className="font-ptserif">
                  Faculty of Organizational Sciences | 2023 -{" "}
                </p>

                <p className="font-bold mt-2 font-overpass ">
                  Transport organisation website
                </p>
                <p className="font-ptserif">
                  Iskon, Belgrade | Dec 2022 - Feb 2023
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <p className="font-bold mt-2 font-overpass ">Web Food Blog Project</p>
                <p className="font-ptserif">Feb 2024 - April 2024</p>

                <p className="font-bold mt-2 font-overpass ">
                  Pain Mapping and Tracking Application
                </p>
                <p className="font-ptserif">May 2024 - July 2024</p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-0.5 h-2/3 bg-white"></div>

          {/* Technologies Section */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-xl font-overpass italic m-5 text-center">
              Technologies
            </h2>
            <div className="w-full flex justify-center">
              <Technologies />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className={`absolute bottom-0 right-0 w-[35%] h-[60%] border-4 border-white flex items-center justify-center bg-[#F3D250] text-white transition-all duration-500 ${getVisibilityAndBlur(3)}`}
      >
        <Contact />
      </div>

      {/* Portfolio Section */}
      <div
        className={`absolute bottom-0 left-0 w-[65%] h-[40%] border-l-4 border-b-4 border-t-4 border-white flex flex-col items-center justify-center bg-[#90CCF4] text-white transition-all duration-500 ${getVisibilityAndBlur(5)}`}
      >
        <Portfolio />
      </div>

      {/* Central Section (Konstantin Popovic) */}
      <div
        className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[30%] h-[20%] bg-[#5DA2D5] border-l-4 border-t-4 border-white flex flex-col items-center justify-center text-white shadow-lg transition-all duration-500 ${getVisibilityAndBlur(4)}`}
      >
        <h1 className="text-3xl font-yanone font-bold">Konstantin Popovic</h1>
        <p className="text-lg font-overpass italic p-4">Full Stack Developer</p>

        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <MapPinIcon className="h-6 w-6 text-white" />
            <span className="font-ptserif">Belgrade, Serbia</span>
          </div>

          {/* CV Download Link */}
          <a href="/files/cv.pdf" download>
            <button className="bg-white text-[#5DA2D5] px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-[#12293b] hover:text-white hover:shadow-lg">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
