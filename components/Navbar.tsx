"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./theme/theme-toggle";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";
import path from "path";

function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const LINKS = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/posts", label: "Blog" },
  ];

  // Handle closing mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Close menu when user navigates to a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop NAV */}
      <div className="hidden lg:block lg:flex lg:items-center mt-4 z-0 chakra text-xl mb-20">
        <div className="w-full mx-auto">
          <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-between chakra !font-extralight">
            {LINKS.map((link) => (
              <Link href={link.href} key={link.href}>
                <span
                  className={`hover:font-medium chakra 
                    ${
                      (pathname === link.href || (pathname === "/" && link.href === "/")) &&
                      "font-medium"
                    }
                  `}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="float-right lg:absolute lg:right-4">
          <ThemeToggle />
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden flex items-center justify-between py-4 z-40">
        <Link href={"/"}>
          <h3 className="text-lg font-medium">Ebenezer Zergabachew</h3>
        </Link>
        <AlignJustify onClick={() => setIsMobileMenuOpen(true)} size={32} />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex justify-center">
          {/* Centered mobile menu */}
          <div
            ref={mobileMenuRef}
            className="z-50 h-fit relative top-40 bg-white dark:bg-[#0B0E13] rounded-md p-6 w-2/3 border border-black dark:border-white/50"
          >
            {/* Close button */}
            <div className="flex items-center justify-between">
              <div className="chakra text-xl font-bold">Menu</div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col gap-5 mt-8">
              {LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={handleLinkClick}
                  className="ml-2"
                >
                  <span
                    className={`text-xl chakra ${
                      pathname.includes(link.href) ? "font-medium" : ""
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}

              <div className="border w-fit flex float-right items-center mx- auto px-2 rounded-md border-gray-400">
                <div className="text-xl chakra mr-2">Theme</div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
