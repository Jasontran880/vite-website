import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center gap-9 py-20 px-4  sm:px-12 
      lg:px-24 xl:px-40 text-center w-full overflow-hidden 
      text-gray-700 dark:text-white"
    >
      {/* Headers section */}
        <h3 className="text-sm text-gray-500 dark:text-gray-300">
        DUC IN ALTUM</h3>

        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
        font-medium xl:leading-[95px] max-w-5xl">About Stell Maris
        </h1>

        <p className="text-sm sm:text-lg font-medium text-gray-500
         dark:text-white/75 pb-3"> Stell Maris is the E-Commerce Accelerator built for <strong>growing</strong> global brands entering the booming Canadian market
        </p>

        <a href="#contact-us">
            <Button1
            />
        </a>

        
        
    </div>
  );
};

export default About;