import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Image from "next/image";


const Card = ({ image, title, description, githubLink, websiteLink, technologies =[] }) => {
  return (
    <div className="relative w-[60%] h-[250px] bg-white shadow-lg border-4 border-white rounded-lg overflow-hidden transition-all">
      {/* Left Section - Static (Image and Name) */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-[#A9A9FF] flex flex-col items-center justify-center  p-4">
        <Image
          src={image}
          alt="Screenshot of website"
          fill
          style={{ objectFit: 'cover' }}
          className=" rounded-xl  p-1 "
        />
      </div>

      {/* Right Section (Default - General Info) */}
      <div className="absolute top-0 right-0 w-[300px] h-full p-4 transition-all duration-500 ease-in-out hover:hidden">
        <h1 className="p-2 text-center font-bold font-yanone text-black text-2xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 text-left font-ptserif">
          {description}
        </p>
        <h2 className="absolute bottom-2 right-2 font-overpass italic text-gray-500 text-sm">
          Hover over me for magic
        </h2>
      </div>

      {/* Hover Section (Additional Info) */}
      <div className="absolute top-0 right-0 w-[60%] h-full p-4 bg-gradient-to-r bg-[#A9A9FF] transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 text-white">
        <div className="mt-4">
          <div>
            <h2 className="font-semibold font-overpass italic text-center">
              Tech used:
            </h2>
            <div className="flex flex-row flex-wrap gap-4 justify-center my-4">
              {technologies.map((TechIcon, index) => (
                <TechIcon key={index} className="text-3xl" />
              ))}
            </div>
            <div className="absolute bottom-0 right-0 p-2 m-2">
              <div className="flex flex-row gap-4">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg text-[#A9A9FF] p-2 flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub /> Github
                </a>
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg text-[#A9A9FF] p-2 flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <FaGlobe /> Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
