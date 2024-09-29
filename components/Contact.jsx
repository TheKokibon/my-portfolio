import React from "react";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-yanone font-bold mb-8 text-center">Contact</h1>
      <h2 className="text-md font-thin italic font-overpass text-center p-2 mb-4">
        Hover me for more information
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {/* Linkedin Icon */}
        <div className="flex flex-col items-center group">
          <a href="https://www.linkedin.com/in/konstantin-popovic-4361a9251/" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-125">
              <Linkedin className="text-6xl text-black" />
            </div>
          </a>
          <p className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ptserif">
            Konstantin Popovic
          </p>
        </div>

        {/* Mail Icon */}
        <div className="flex flex-col items-center group">
          <a href="mailto:konstantin.popovic.koki@gmail.com">
            <div className="p-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-125">
              <Mail className="text-6xl text-black" />
            </div>
          </a>
          <p className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ptserif">
            konstantin.popovic.koki@gmail.com
          </p>
        </div>

        {/* Github Icon */}
        <div className="flex flex-col items-center group">
          <a href="https://github.com/TheKokibon" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-125">
              <GithubIcon className="text-6xl text-black" />
            </div>
          </a>
          <p className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ptserif">
            TheKokibon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
