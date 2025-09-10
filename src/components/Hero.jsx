import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-7
     text-center w-full  text-gray-700 dark:text-white bg py-70 px-10 "
    >
      {/* Headers section */}
        <motion.h3 
        initial = {{opacity: 0, y:20}}
        whileInView = {{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        
        className="text-sm text-gray-500 dark:text-gray-300">
        DUC IN ALTUM</motion.h3>

        <motion.h1 
        initial = {{opacity: 0, y:40}}
        whileInView = {{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.8}}
        viewport={{once: true}}
        className=" maw-w-5xl text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
        font-medium" >Lead Canada’s <br/>
        <span  className="bg-gradient-to-r from-[#FFF700] to-[#B8860B] bg-clip-text text-transparent">
          E-Commerce Frontier <br></br>
        </span> with Stell Maris
        </motion.h1>

        <motion.p 
        initial = {{opacity: 0, y:30}}
        whileInView = {{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 1}}
        viewport={{once: true}}
        className="text-sm sm:text-lg font-medium text-gray-500
         dark:text-white/75 pb-3"> Stell Maris is the E-Commerce Accelerator built for <strong>growing</strong> global brands entering the booming Canadian market
        </motion.p>

        <motion.a 
             initial = {{opacity: 0, scale:0.9}}
        whileInView = {{opacity: 1, y: 1}}
        transition={{duration: 0.6, delay: 1.5}}
        viewport={{once: true}}
        href="#contact-us">
            <Button1
            />
        </motion.a>

        
        
    </div>
  );
};

export default Hero;