import React from "react";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

function CombatCrafter() {
  return (
    <div className="p-4 h-full lg:flex">
      <div className="mx-auto my-auto lg:flex flex-none lg:w-[40%]">
        <div className="lg:hidden">
          <h1 className="font-bold text-3xl">Combat Crafter</h1>

          <Link
            href="https://www.combatcrafter.com/"
            className="flex items-center text-lg my-4 cursor-pointer"
          >
            <ExternalLink />
            <div className="ml-2 mt-[1px]">Website</div>
          </Link>
        </div>
        <Iphone15Pro
          src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728593230/dcy21flqnaso8uphdzb0.png"
          className="my-auto mx-auto w-[90%]"
        />
      </div>

      <div className="lg:w-[60%]">
        <div className="hidden lg:block">
          <h1 className="font-bold text-3xl">Combat Crafter</h1>

          <Link
            href="https://www.combatcrafter.com/"
            className="flex items-center text-lg my-4 cursor-pointer"
          >
            <ExternalLink />
            <div className="ml-2 mt-[1px]">Website</div>
          </Link>
        </div>

        <p className="text-lg">
          I wanted to build tooling and software around martial arts and Combat
          Crafter is the platform I use to do that. It's an app to help fighters
          and martial artists track their training and progress. It also serves
          as a repository for techniques and drills.
          <br />
          <br />
          Eventually, I want to codify all the knowledge of martial arts and
          combat training into a single platform that can be used by anyone to
          learn how to fight.
          <br />
          <br />
          I started Combat Crafter as a class project for an entrepreneurship
          class. We had to come up with a business idea and I wanted to build
          something that I would use myself. I launched on Product Hunt and got
          into the top 20 products of the day.
          <br />
          <Link
            href="/posts/first-product-hunt-launch"
            className="italic font-medium underline"
          >
            Here's my blog post where I talk about that more in depth.
          </Link>
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-medium">Tech Stack</h2>
          <div className="flex items-center mt-4">
            <img
              src="https://skillicons.dev/icons?i=typescript,tailwind,react,nextjs,nodejs,prisma,supabase,&perline=14"
              alt=""
            />
          </div>
          <p className="mt-8 text-lg">
            I initially built a landing page to validate the idea and then built
            a web app MVP using Next.js and Prisma. I used Tailwind CSS for
            styling and TypeScript for type safety. I drew the illustrations
            using Procreate.
            <br />
            <br />
            Since then, I've built a mobile app using React Native and I'm in
            the process of getting it on the App Store.
          </p>
        </div>

        <div className="my-4 flex flex-col gap-4 pb-20">
          <img
            className="rounded-md"
            src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728594134/sgvurixhy4gjhhqnij9h.png"
            alt=""
          />
          <img
            className="rounded-md"
            src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728594134/mgxddh5ihwybgi0jvlmf.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CombatCrafter;
