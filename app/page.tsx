import Image from "next/image";
import ThemeToggle from "@/components/theme/theme-toggle";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import Link from "next/link";

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
    <div className="lg:w-full w-[95%] mx-auto lg:mx-0">
      <div className="lg:w-[70%] mx-auto rounded-md relative lg:flex flex-col antialiased">
        {/* HERO */}
        <div className="lg:flex items-center justify-between w-full">
          <div>
            <img
              className="w-[95%] mx-auto lg:w-[300px] lg:h-[300px]rounded-md"
              src="https://via.placeholder.com/300x300"
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
                    <social.icon
                      size={30}
                      strokeWidth={2}
                      absoluteStrokeWidth
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="w-[95%] mx-auto text-[22px] text-wrap lg:ml-20">
            Hello, I'm
            <h1 className="text-3xl font-bold my-8">Ebenezer Zergabachew</h1>
            <p className="lg:w-1/2">
              I'm from Addis Ababa, Ethiopia. I'm currently a student at
              Virginia Tech with a passion for business, technology, and martial
              arts.
            </p>
          </div>
        </div>

        <h2 className="text-3xl mt-14 mb-4 w-[95%] lg:mx-0 mx-auto font-bold">
          About Me
        </h2>
        <p className="text-[22px] lg:w-2/3 w-[95%] lg:mx-0 mx-auto ">
          I’m currently pursuing a degree in Philosophy, Politics, and Economics
          at Virginia Tech. In between classes, I lead the entrepreneurship club
          at VT.
          <br />
          <br />
          Most of what we do in E-Club is ecosystem development and supporting
          student founders.
          <br />
          <br />
          I have a wide array of passions and interests. Next to designining and
          developing products, I enjoy writing, reading, and occasionally
          drawing. I spar often and train muay thai, boxing, and little bit of
          MMA.
          <br />
          <br />I write about martial arts, product development, and
          Christianity.{" "}
          <Link className="font-semibold italic" href="/blog">
            Check out my blog.
          </Link>
        </p>

        {/* <div className="flex items-center w-1/5 mx-auto justify-between">
          <Linkedin size={30} strokeWidth={1} absoluteStrokeWidth />
          <Twitter size={30} strokeWidth={1} absoluteStrokeWidth />
          <Mail size={30} strokeWidth={1} absoluteStrokeWidth />
          <Github size={30} strokeWidth={1} absoluteStrokeWidth />
          </div> */}
      </div>
      <BackgroundBeams className="z-[-10]" />
    </div>
  );
}
