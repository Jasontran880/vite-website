import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'
import SignupFormDemo from './SignupForm';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <div id="contact-us">
          <div className=" flex flex-col items-center gap-9 pt-20 px-4  sm:px-12 
          lg:px-24 xl:px-40 text-center w-full overflow-hidden 
          text-gray-700 dark:text-white">
    
            {/* Headers section */}
            <motion.h3
            initial = {{opacity: 0, y:20}}
            whileInView = {{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            viewport={{once: true}}
            className="text-sm text-gray-500 dark:text-gray-300">
            DUC IN ALTUM</motion.h3>
    
            <motion.h1
            initial = {{opacity: 0, y:40}}
            whileInView = {{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            viewport={{once: true}}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
            font-medium xl:leading-[95px] max-w-5xl">Your growth starts here. 
            </motion.h1>
    
            <motion.p
            initial = {{opacity: 0, y:30}}
            whileInView = {{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.8}}
            viewport={{once: true}}
             className="text-sm sm:text-lg font-medium text-gray-500
             dark:text-white/75 pb-3"> The Canadian market is ready. Let’s expand your brand.
            </motion.p>
    
          </div>

            <motion.div
              initial = {{opacity: 0}}
              whileInView = {{opacity: 1}}
              transition={{duration: 2}}>
              <SignupFormDemo />
            </motion.div>
        

          {/* Footer bottom copyright */}
            
            <div className='text-center'>
              <p>Copyright 2025 ©  Stell Maris Ventures Inc.</p>
            </div>

        </div>
        


  );
};

export default Footer;