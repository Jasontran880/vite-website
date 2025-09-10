import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'
import SignupFormDemo from './SignupForm';

const Footer = () => {
  return (
    <div id="contact-us">
          <div className=" flex flex-col items-center gap-9 pt-20 px-4  sm:px-12 
          lg:px-24 xl:px-40 text-center w-full overflow-hidden 
          text-gray-700 dark:text-white">
    
            {/* Headers section */}
            <h3 className="text-sm text-gray-500 dark:text-gray-300">
            DUC IN ALTUM</h3>
    
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
            font-medium xl:leading-[95px] max-w-5xl">Your growth starts here. 
            </h1>
    
            <p className="text-sm sm:text-lg font-medium text-gray-500
             dark:text-white/75 pb-3"> The Canadian market is ready. Let’s expand your brand.
            </p>
    
          </div>

           <SignupFormDemo />

          {/* Footer bottom copyright */}
            
            <div className='text-center'>
              <p>Copyright 2025 ©  Stell Maris Ventures Inc.</p>
            </div>

        </div>
        


  );
};

export default Footer;