"use client";
import React, { useId, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import CombatCrafter from "./CombatCrafter";
import { BorderBeam } from "@/components/ui/border-beam";
import { X } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="lg:w-[70%] w-[90%] mx-auto">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="text-xl mt-6 lg:w-[70%]">
        Here's a collection of some of the stuff I’ve worked on. Products I’ve
        built, designs I’ve worked on, and projects I’ve run.
        <br />
        Hover and click for more information.
      </div>

      {/* Blur Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-[5px] z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <div>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-50">
            
            <div
              ref={ref}
              className={`
                border
                w-full lg:max-w-[90%] lg:h-[90vh] h-[100vh]
                flex flex-col backdrop-blur-2xl dark:bg-[#0B0E13] 
                overflow-scroll z-50 lg:rounded-md border-0 lg:border dark:border-[#545454]
                `}
            >
              <div className="h-full">
                  {/* Close button */}
                  <motion.button
                    className="flex absolute lg:relative top-4 right-4 items-center justify-center bg-white dark:bg-[#0B0E13] rounded-full h-8 w-8 shadow-lg z-20 lg:right-0 lg:left-4"
                    onClick={() => setActive(null)}
                  >
                    <X />
                  </motion.button>
                {
                  active.content
                }
              </div>
              
            </div>
          </div>
        )}
      </div>

      <ul className="grid lg:grid-cols-4 gap-4 mt-4 z-10">
        {cards.map((card, index) => {
          let ratio = "1000 / 485";

          if (index == 0) {
            ratio = "1";
          }

          return (
            <div
              key={index}
              onClick={() => setActive(card)}
              className={`
                lg:saturate-0 lg:blur-[0.3px] hover:blur-0 hover:saturate-100 transitionQ relative p-0 flex flex-col ease-in-out
                border ${card.borderClass}
                lg:opacity-30 lg:dark:opacity-50 hover:opacity-100 hover:lg:dark:opacity-100
                rounded-xl !cursor-pointer ${card.layout} 
              `}
              style={{
                cursor: "pointer",
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
                aspectRatio: ratio, // Example aspect ratio of 4:3
              }}
            >
              
              {/* Overlay content */}
              <div className="absolute top-5 left-5 inset-0 cursor-pointer">
                <h3
                  className={`font-semibold light:text-black text-xl ${card.titleClass} cursor-pointer`}
                >
                  {card.title}
                </h3>

              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// Sample project cards data with custom layout classes
const cards = [
  {
    title: "Combat Crafter",
    titleClass: "text-red-700",
    borderClass: "border-red-900 red-glow",
    description: `A game development project I worked on.`,
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728435589/aoa6t8qgx0cqbixzsh76.png",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-2", // Spans two columns and two rows
    content: <CombatCrafter></CombatCrafter>
  },
  {
    description: "The entrepreneurship club's rapid startup competition.",
    title: "",
    titleClass: "",
    borderClass: "border-purple-600 purple-glow",
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728436415/ua2r1ox0vdr3edvl2gt3.png",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-1", // Spans one column and two rows
    content: <CombatCrafter></CombatCrafter>
  },
  {
    description: "Various designs and artworks I’ve created.",
    title: "",
    titleClass: "text-blue-600",
    borderClass: "border-blue-[#67A6E3] dark:border-blue-600 blue-glow",
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728442514/rgtahykdp1qoapixjnjc.png",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-1", // Regular size
    content: <CombatCrafter></CombatCrafter>
  },
  {
    description: "A smart driving assistant app.",
    title: "Echo Drive",
    titleClass: "text-red-600",
    borderClass: "border-red-600",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
    content: <CombatCrafter></CombatCrafter>
  },
  {
    description: "A mindfulness and productivity tool.",
    title: "Mind Fuel",
    titleClass: "text-red-600",
    borderClass: "border-red-600",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
    content: <CombatCrafter></CombatCrafter>
  },
  {
    description: "A language learning app for punctuation mastery.",
    title: "Comma App",
    titleClass: "text-red-600",
    borderClass: "border-red-600",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
    content: <CombatCrafter></CombatCrafter>
  },
];
