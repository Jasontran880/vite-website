"use client";;
import React, { useState } from "react";
import { cn } from "../../lib/utils.js";

export const Card = React.memo(({ card, index, hovered, setHovered}) => (
  
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.src} alt={card.title} className="object-cover absolute inset-0" />
    
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col justify-center items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      
      <div
        className=" text-xl md:text-2xl font-medium bg-clip-text 
        text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">

      {/* Centered Description */}
        <p >{card.desc}</p>

      {/* Absolutely Positioned Title means you have to redefine styling */}
        <div className="absolute bottom-8 left-4 right-4 text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {card.title}
        </div>
        

      </div>
    </div>
  </div>
)
);

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
