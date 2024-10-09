"use client";
import React, { useId, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

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
            className="fixed inset-0 bg-black/ 40 backdrop-blur-[5px] z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.div
              exit={{ opacity: 0 }}
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className={`
                border border-black 
                w-full lg:max-w-[80%] h-full md:h-fit md:max-h-[90%] 
                flex flex-col bg-white dark:bg-neutral-900 
                sm:rounded-3xl overflow-hidden z-50"
                `}
            >
              <div className="lg:grid lg:grid-cols-2">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />

                <div>
                  {/* Close button */}
                  <motion.button
                    className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-20 lg:hidden"
                    onClick={() => setActive(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-black"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.button>

                  <div className="flex justify-between items-start p-4">
                    <div>
                      <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
                        {active.title}
                      </h3>
                      <div className="text-neutral-600 dark:text-neutral-400">
                        {active.description}
                      </div>
                    </div>
                    <a
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                lg:saturate-0 lg:blur-[2px] hover:blur-0 hover:saturate-100 transitionS relative p-0 flex flex-col 
                border ${card.borderClass}
                lg:opacity-15 hover:opacity-100
                rounded-xl !cursor-pointer ${card.layout} 
              `}
              style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
                aspectRatio: ratio, // Example aspect ratio of 4:3
              }}
            >
              {/* Overlay content */}
              <div className="absolute top-5 left-5 inset-0 !cursor-pointer">
                <h3
                  className={`font-semibold light:text-black text-xl ${card.titleClass}`}
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
  },
];
