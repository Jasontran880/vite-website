import { FocusCards } from "./ui/focus-cards.jsx";
import assets from '../assets/assets'

const Results = () => {
  const cards = [
         {
        title: "Beauty & Personal Care",
        src: assets.kbeauty,
        desc: "Launched a global skincare brand into Canada, achieving top category rankings (10k BSR) in under one month."
      },
      {
        title: "Consumer Electronics",
        src: assets.electronics,
        desc: "Partnered with a major electronics manufacturer to remove unauthorized sellers and restore brand consistency."
      },
      {
        title: "Hair Care",
        src: assets.haircare,
        desc: "Delivered a 25% sales uplift in 30 days through listing optimization and targeted PPC campaigns."
      },
    ];

  return (

    <div id="Results" className="py-20" >
        {/* Title */}
       
        <div className="relative mt-6 text-center flex flex-col items-center gap-7 px-4 sm:px-12 
        lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white">

          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mb-6">Partner Results</h2>


        </div>
        
        <FocusCards cards={cards} />       
      
      <div  className="relative text-center flex flex-col items-center gap-7 px-4 sm:px-6 
        lg:px-12 xl:px-20 text-gray-700 dark:text-white">
            <p className="text-center text-gray-500 dark:text-white/75 mb-20 italic">At this point in time, we don’t disclose partner names publicly</p>
        </div>
     


    </div>

    
  );
}

export default Results;



