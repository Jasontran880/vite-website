
import { GlareCard } from "./ui/glare-card";
import { motion } from "motion/react";

const WhatWeDo = () => {

  
{/* min-h-screen max-width: 100% p-20 */}

  
  return (
    <div id="services" className="min-h-screen max-width: 100% p-20 ">
        
        {/* Title */}
        <div 
        className="relative text-center flex flex-col items-center gap-7 
        lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white">
          <motion.h2 
          initial = {{opacity: 0, y:30}}
          whileInView = {{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mb-6 "> <span className="bg-gradient-to-b from-slate-50 via-slate-200 to-slate-800 bg-clip-text text-transparent">Your North Star for</span> <br/> <span className="bg-gradient-to-b from-slate-50 via-slate-200 to-slate-800 bg-clip-text text-transparent"> E-commerce Growth </span>
          </motion.h2>
          <motion.p 
          initial = {{opacity: 0, y:20}}
          whileInView = {{opacity: 1, y: 0}}
          transition={{duration: 1}}
          viewport={{once: true}}
          className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-20">The Stell Maris Growth Engine
          </motion.p>

        </div>
  
        {/* Grid Container for cards */}
        <motion.div 
          initial = {{opacity: 0, y:30}}
          whileInView = {{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          viewport={{once: true}}
        className="grid grid-cols-1 md:grid-cols-4 w-full mx-auto justify-items-center gap-3 md:gap-25 lg:gap-x-0">
          
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6 bg-clip-text">Marketplaces</h1>
            <p className=" mt-10 md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies — all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Listing Optimization & SEO</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Maximize your brand's visibility, conversion and profitability with our data-backed listing and SEO optimizations.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">PPC</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Command Traffic and sales with performance-driven PPC. The best part is: we fund the advertising, ensuring our growth is directly tied to yours.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Brand Protection</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Safeguard your brand reputation. We remove unauthorized sellers, enforce consistent pricing, and ensure customers experience your products the way you intended.</p>
          </GlareCard>
          
          
        </motion.div>
    </div>
  );
  
  
  


}

export default WhatWeDo;