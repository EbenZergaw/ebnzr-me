"use client"
import Image from "next/image";
import ThemeToggle from "@/components/theme/theme-toggle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import { FloatingDock } from "@/components/ui/floating-dock";
import headshot from '../public/headshot.png'

export default function Home() {
  const SOCIALS = [
    {
      href: "https://www.linkedin.com/in/ebenezer-zergabachew/",
      icon: Linkedin,
    },
    { href: "https://x.com/EbenZergaw", icon: Twitter },
    { href: "https://github.com/EbenZergaw", icon: Github },
    { href: "mailto:eben.zergaw@gmail.com", icon: Mail },
  ];

  return (
    <>
      {/* HERO */}
      <div className="lg:flex items-center justify-between">
        <div>
          <Image
            className="w-full mx-auto lg:w-[600px] lg:h-[300px]rounded-md"
            src={headshot}
            alt="Placeholder Image"
          />
          <div className="flex items-center justify-between mt-4 cursor-pointer w-2/3 lg:w-full mx-auto mb-14 lg:mb-0">
            {SOCIALS.map((social) => {
              return (
                <Link
                  className="hover:dark:text-white"
                  href={social.href}
                  key={social.href}
                  target="_blank"
                >
                  <social.icon size={30} strokeWidth={2} absoluteStrokeWidth />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mx-auto text-xl text-wrap lg:ml-20">
          Hello, I'm
          <h1 className="text-3xl font-bold my-8">Ebenezer Zergabachew</h1>
          <p className="">
            I'm from Addis Ababa, Ethiopia. I'm currently a student at Virginia
            Tech with a passion for business, technology, and martial arts.
          </p>
        </div>
      </div>

      <h2 className="text-3xl mt-14 mb-4 lg:mx-0 mx-auto font-bold">
        About Me
      </h2>
      <p className="text-xl w-full lg:mx-0 mx-auto ">
        I’m currently pursuing a degree in Philosophy, Politics, and Economics
        at Virginia Tech.
        <br />
        <br />
        In between classes, I lead the entrepreneurship club at VT. Most of what
        we do in E-Club is ecosystem development and supporting student
        founders.
        <br />
        <br />
        I have a wide array of passions and interests. Next to designining and
        developing products, I enjoy writing, reading, and occasionally drawing.
        I spar often and train muay thai, boxing, and little bit of MMA.
        <br />
        <br />I write about martial arts, product development, and Christianity.{" "}
        <Link className="font-semibold italic" href="/posts">
          Check out my blog.
        </Link>
      </p>

      <section>
        <h2 className="text-3xl mt-14 mb-4 lg:mx-0 mx-auto font-bold text-right">
          Skills, Tools, and Technologies
        </h2>

        <div className="lg:grid lg:grid-cols-3">
          {/* Tech */}
          <div className="text-center justify-center">
            <h3 className="text-2xl font-bold">Tech</h3>
            - React
            - NextJS
            - TailwindCSS
            - NodeJS
            - Express
            - Vercel
            - Supabase
          </div>

          {/* Productivity, Project Management, Writing */}
          <div className="text-center justify-center">
            <h3 className="text-2xl font-bold">Productivity and Writing</h3>
            - Notion
            - Obsidian
            - Typeshare
          </div>

          {/* Design */}
          <div className="text-center justify-center">
            <h3 className="text-2xl font-bold">Design</h3>
            - Figma
            - Photoshop 
            - Procreate
          </div>

        </div>
      </section>
    </>
  );
}
