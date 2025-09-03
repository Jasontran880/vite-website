import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col items-center gap-9 py-20 px-4  sm:px-12 
      lg:px-24 xl:px-40 text-center w-full overflow-hidden 
      text-gray-700 dark:text-white"
    >
      {/* Headers section */}
        <h3 className="text-sm text-gray-500 dark:text-gray-300">
        DUC IN ALTUM</h3>

        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
        font-medium xl:leading-[95px] max-w-5xl">Pioneering E-commerce and 
        <span className="bg-gradient-to-r from-[#5844E5] to-[#4d8cea] 
        bg-clip-text text-transparent"> Software Innovation</span>
        </h1>

        <p className="text-sm sm:text-lg font-medium text-gray-500
         dark:text-white/75 pb-3"> Uniting wholesale and 
        e-commerce through cutting-edge software and data-driven solutions.
        </p>

        <a href="#contact-us">
            <Button1
            />
        </a>

        
        
    </div>
  );
};

export default Hero;