import { GlareCard } from "./ui/glare-card";

const Approach = () => {
  return (

    <div id="Approach" className="py-20 min-h-screen" >
        {/* Title */}
       
        <div className="relative mt-6 text-center flex flex-col items-center gap-7 px-4 sm:px-12 
        lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white">

          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mb-6">Illuminating Paths to <span className="bg-gradient-to-r from-[#5844E5] to-[#4d8cea] 
          bg-clip-text text-transparent">Exponential Growth</span></h2>
          <p className="max-w-lg text-center text-gray-500 dark:text-white/75 ">A Glimpse Into Our Core Expertise</p>

        </div>
        
        {/* Flex Container for cards */}
        <div className="py-20 flex justify-between">
          <GlareCard className="flex flex-col items-center justify-center">
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white">
              <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round" />
            </svg>
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white">
              <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round" />
            </svg>
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white">
              <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round" />
            </svg>
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        </div>
      
    </div>

    
  );
}

export default Approach;



