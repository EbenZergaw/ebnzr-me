"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import CombatCrafter from "./CombatCrafter";
import StartupSprint from "./StartupSprint";
import Design from "./Design";
import Guest360 from "./Guest360";
import { X, Info, Swords, Trophy, Brush, User } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );

  const descriptions = [
    {
      title: "Combat Crafter",
      icon: <Swords></Swords>,
      desc: "A martial arts training app I built",
      class: "text-red-600 dark:text-red-500",
    },
    {
      title: "Startup Sprint",
      icon: <Trophy></Trophy>,
      desc: "The flagship event of the Entrepreneurship Club at Virginia Tech",
      class: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Designs",
      icon: <Brush></Brush>,
      desc: "Various designs I've worked on over the years",
      class: "text-blue-500",
    },
    {
      title: "Guest 360",
      icon: <User></User>,
      desc: "My project for CodeFest, a hackathon sponsored by Marriott International",
      class: "text-orange-500",
    },
  ];


// Sample project cards data with custom layout classes
const cards = [
  {
    title: "Combat Crafter",
    titleClass:
      "text-white lg:text-2xl bg-gradient-to-b from-slate-50 to-slate-700 bg-clip-text text-transparent",
    borderClass: "border-red-900 red-glow bg- white dark: bg-[#0B141F]",
    description: `A game development project I worked on.`,
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728435589/aoa6t8qgx0cqbixzsh76.png",
    layout: "col-span-2 row-span-2", // Spans two columns and two rows
    content: <CombatCrafter></CombatCrafter>,
  },
  {
    description: "The entrepreneurship club's rapid startup competition.",
    title: "",
    titleClass: "",
    borderClass: "border-purple-600 purple-glow",
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728436415/ua2r1ox0vdr3edvl2gt3.png",
    layout: "col-span-2 row-span-1", // Spans one column and two rows
    content: <StartupSprint></StartupSprint>,
  },
  {
    description: "Various designs and artworks I’ve created.",
    title: "",
    titleClass: "text-blue-600",
    borderClass: "border-blue-[#67A6E3] dark:border-blue-600 blue-glow",
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728442514/rgtahykdp1qoapixjnjc.png",
    layout: "col-span-2 row-span-1", // Regular size
    content: <Design></Design>,
  },
  {
    description: "A guest experience platform I'm working on.",
    title: "",
    titleClass: "text-orange-500",
    borderClass: "border-orange-500 orange-glow",
    src: "https://res.cloudinary.com/dp56p8qeg/image/upload/v1728442514/rgtahykdp1qoapixjnjc.png",
    layout: "col-span-2 row-span-1", // Regular size
    content: <Guest360></Guest360>,
  },
];


  const [infoDescription, setInfoDescription] = useState<
    (typeof descriptions)[number] | null
  >(null);

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

  useOutsideClick(ref, () => {
    setActive(null);
  });

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="text-xl mt-6 lg:w-[70%] mb-10">
        Here's a collection of some of the stuff I’ve worked on. Products I’ve
        built, designs I’ve worked on, and projects I’ve run.
      </div>

      <div className="mb-10 flex items-center gap-4 hidden lg:block">
        {infoDescription ? (
          <div className={`flex items-center gap-2 ${infoDescription.class}`}>
            {infoDescription.icon}
            <div className={`font-semibold text-lg ${infoDescription.class}`}>
              {infoDescription.desc}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Info />
            <div className="font-semibold text-lg">
              Hover and click for more information
            </div>
          </div>
        )}
      </div>

      {/* Blur Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 dark:bg-w hite/10 backdrop-blur-[5px] z-[48]"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <div>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[49]">
            <div
              ref={ref}
              className={`
                w-full lg:max-w-7xl lg:h-[90vh] h-[100vh] !p-0
                flex flex-col backdrop-blur-2xl backdrop-grayscale backdrop-brightness-200 backdrop-opacity-100 dark:bg-[#0B0E13]/80 
                bg-white/50 lg:bg-none lg:backdrop-blur-3xl lg:backdrop-grayscale-0 lg:backdrop-opacity-20
                overflow-scroll z-50 lg:rounded-md border-0 lg:border dark:border-[#545454] border-gray-400
                `}
            >
              <div className="h-full customScroll">
                {/* Close button */}
                <motion.button
                  className="flex lg:sticky absolute top-4 right-4 items-center justify-center rounded-full h-8 w-8 z-20 lg:right-0 lg:left-1 lg:top-1 cursor-pointer"
                  onClick={() => setActive(null)}
                >
                  <X />
                </motion.button>
                {active.content}
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
              onMouseEnter={() => setInfoDescription(descriptions[index])}
              onMouseLeave={() => setInfoDescription(null)}
              onClick={() => setActive(card)}
              className={`
                lg:saturate-0 lg:blur-[0.3px] hover:blur-0 hover:saturate-100 transitionQ relative p-0 flex flex-col ease-in-out
                border ${card.borderClass}
                lg:opacity-30 lg:dark:opacity-50 hover:opacity-100 hover:lg:dark:opacity-100
                rounded-xl cursor-pointer ${card.layout} 
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
