'use client'
import React from "react";
import Link from "next/link";
import ThemeToggle from "./theme/theme-toggle";
import { usePathname } from "next/navigation";

function Navbar() {

  const pathname = usePathname()

  const LINKS = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="lg:flex lg:items-center mt-4 z-0 chakra text-xl mb-20 ">
      <div className="w-[70%] mx-auto">

        <div className="w-1/2 lg:flex lg:items-center lg:justify-between chakra !font-extralight">
          {LINKS.map((link) => {
            return (
              <Link href={link.href} key={link.href}>
                <span className={`hover:font-medium chakra ${pathname.includes(link.href) ? "font-medium" : ''}`}>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="float-right lg:absolute lg:right-10">
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}

export default Navbar;
