"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import assets from "../../assets/assets";



const content = [
  {
    title: "Excellence as Standard",
    description:
      "We set the benchmark in Canadian e-commerce by managing every detail—from regulatory compliance and traffic optimization to fulfillment and brand protection—delivering fast market traction and sustainable profitability.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={assets.angels}
        
          className="h-full w-full object-cover"
          alt="" />
      </div>
    ),
  },
  {
    title: "Partnership as Principle",
    description:
      "We are constantly investing in your growth—through branding, ads, and inventory—because we only succeed when you do.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src={assets.arches}
          alt="" />
      </div>
    ),
  },
  {
    title: "Foresight as Advantage",
    description:
      "We anticipate trends and equip you with the clarity to act decisively in Canada’s evolving market.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src={assets.summit}
          alt="" />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
