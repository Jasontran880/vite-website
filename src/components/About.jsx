import React from 'react'
import assets from '../assets/assets'
import Button1 from './ui/Button1'
import { StickyScrollReveal } from './ui/StickyScrollReveal';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div id="about">
      <div className=" flex flex-col items-center gap-9 py-20 text-center w-full 
      text-gray-700 dark:text-white">

        {/* Headers section */}

        <motion.h1 
        initial = {{opacity: 0, y:30}}
        whileInView = {{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] 
        font-medium xl:leading-[95px] max-w-5xl bg-gradient-to-b from-slate-50 via-slate-200 to-slate-800 bg-clip-text text-transparent">About Stell Maris
        </motion.h1>

      </div>

      <motion.div
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition={{duration: 2}}>
               <StickyScrollReveal />
      </motion.div>
   
    </div>
    
    
  );
};

export default About;