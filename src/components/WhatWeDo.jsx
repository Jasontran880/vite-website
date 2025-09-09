
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

  
        {/* Grid Container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 w-full mx-auto justify-items-center gap-3 md:gap-25 lg:gap-x-0">
          
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Marketplaces</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies -- all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Marketplaces</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies -- all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Marketplaces</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies -- all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center px-10 ">
            <h1 className="text-white font-bold text-4xl md:text-3xl text-left pt-6">Marketplaces</h1>
            <p className=" mt-10   md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">From Amazon to Walmart, expand your brand across Canada's E-commerce horizon with our cutting edge strategies -- all powered by our equitable partnership model where we invest in your growth.</p>
          </GlareCard>
          
          
        </div>
    </div>
  );
  
  
  


}

export default WhatWeDo;