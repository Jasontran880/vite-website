
import { GlareCard } from "./ui/glare-card";

const WhatWeDo = () => {

  


  
  return (
    <div id="WhatWeDo" className="py-20 ">
        
        {/* Title */}
        <div  className="relative text-center flex flex-col items-center gap-7 
        lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white">

          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mb-6">Your North Star for E-commerce Growth</h2>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-20">The Stell Maris Growth Engine</p>

        </div>

  
        {/* Flex Container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 w-full px-4 sm:px-6 md:px-8 mx-auto justify-items-center">
          
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl text-left mt-4">Marketplaces</h1>
            <p className=" mt-15  text-md sm:text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies -- all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">

            <p className="text-white font-bold text-xl mt-4">Listing Optimization & SEO</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
           
            <p className="text-white font-bold text-xl mt-4">PPC</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
           
            <p className="text-white font-bold text-xl mt-4">Brand Protection</p>
          </GlareCard>
          
          
        </div>
    </div>
  );
  
  
  


}

export default WhatWeDo;