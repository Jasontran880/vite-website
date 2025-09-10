import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-7
     text-center w-full  text-gray-700 dark:text-white bg py-90 "
    >
      {/* Headers section */}
        <motion.h3 
        initial = {{opacity: 0, y:20}}
        whileInView = {{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        
        className="text-sm text-gray-500 dark:text-gray-300">
        DUC IN ALTUM</motion.h3>

        <h1 className=" maw-w-5xl text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
        font-medium" >Lead Canada’s <br/>
        <span  className="bg-gradient-to-r from-[#FFF700] to-[#B8860B] bg-clip-text text-transparent">
          E-Commerce Frontier
        </span> with Stell Maris
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

export default Hero;