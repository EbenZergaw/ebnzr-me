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
      <div className="text-xl mt-6">
        Here's a collection of some of the stuff I’ve worked on. Products I’ve
        built, designs I’ve worked on, and projects I’ve run.
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="border border-black w-full lg:max-w-[80%] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >

                <div className="lg:grid lg:grid-cols-2">
                    <img
                    src={active.src}
                    alt={active.title}
                    className=" w-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />

                    <div>
                        <motion.button
                        className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-20 lg:hidden"
                        onClick={() => setActive(null)} // Replace with your close handler
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
                            <h3
                            
                            className="font-bold text-neutral-700 dark:text-neutral-200"
                            >
                            {active.title}
                            </h3>
                            <p
                            className="text-neutral-600 dark:text-neutral-400"
                            >
                            {active.description}
                            </p>
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
        ) : null}
      </AnimatePresence>

      <ul className="grid lg:grid-cols-4 gap-4 mt-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={index}
            onClick={() => setActive(card)}
            className={`relative flex flex-col border dark:border-[#b9c3de6a] min-h-[200px] rounded-xl cursor-pointer ${card.layout}`}
          >
            {/* Background image set using inline style for full cover */}
            <div
              style={{
                backgroundImage: `url(${card.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 w-full h-full rounded-xl"
            ></div>

            {/* Overlay content */}
            <div className="relative z-10 p-4 flex flex-col items-start justify-end w-full h-full bg-black bg-opacity-50 rounded-xl">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-white"
              >
                {card.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

// Sample project cards data with custom layout classes
const cards = [
  {
    description: "A project focused on combat training tools and apps.",
    title: "Combat Crafter",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-2", // Spans two columns and two rows
  },
  {
    description: "The entrepreneurship club's rapid startup competition.",
    title: "Startup Sprint",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-1", // Spans one column and two rows
  },
  {
    description: "Various designs and artworks I’ve created.",
    title: "Design Work",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-2 row-span-1", // Regular size
  },
  {
    description: "A smart driving assistant app.",
    title: "Echo Drive",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
  },
  {
    description: "A mindfulness and productivity tool.",
    title: "Mind Fuel",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
  },
  {
    description: "A language learning app for punctuation mastery.",
    title: "Comma App",
    src: "https://via.placeholder.com/300x300",
    ctaText: "Learn More",
    ctaLink: "#",
    layout: "col-span-1 row-span-1", // Regular size
  },
];
