import { FocusCards } from "./ui/focus-cards.jsx";

const Approach = () => {
  const cards = [
      {
        title: "Wholesale Optimization Systems",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "We're developing tools that streamline supplier relationships, enabling efficient product integration and expanding into untapped markets globally."
      },
      {
        title: "Product Sourcing and Distribution",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Expanding a network of trusted suppliers worldwide to secure exclusive, high-demand products for competitive marketplaces."
      },
      {
        title: "Data-Driven Innovation",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Harnessing AI to analyze trends, forecast demand, and optimize pricing, empowering businesses to stay competitive and informed."
      },
    ];

  return (

    <div id="Approach" className="py-20 min-h-screen" >
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

export default Approach;



