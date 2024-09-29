import React from 'react';
import { FaJs, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiSupabase, SiFirebase } from 'react-icons/si';

const icons = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> }
];

const ReadTech = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {icons.map((tech, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>{tech.icon}</div>
          <p className='text-center font-overpass'>{tech.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ReadTech;
