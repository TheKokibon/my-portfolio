import React from 'react'

const PortfolioNavbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[100px] bg-[#90CCF4] flex items-center justify-between px-8">
      {/* Left: Projects title */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-white font-yanone">Projects</h1>
      </div>
    
      {/* Right: Navigation arrows */}
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <button className="rounded-full  transition-all duration-300 transform hover:scale-110 hover:rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 hover:border-2 hover:border-white border-white bg-white rounded-full text-[#90CCF4] hover:bg-[#a9c7ff] hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button className="rounded-full  transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 hover:border-2 hover:border-white bg-white rounded-full text-[#90CCF4] hover:bg-[#a9c7ff] hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioNavbar;
