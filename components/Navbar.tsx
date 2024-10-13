"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./theme/theme-toggle";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";
import path from "path";
// import { FloatingDock } from "./ui/floating-dock";
import { MobileMenu } from "./MobileMenu";

function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const links = [
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
      <div className="hidden lg:block lg:flex lg:items-center mt-4 z-50 chakra text-xl mb-20">
        <div className="w-full mx-auto">
          <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-between chakra !font-extralight">
            {links.map((link) => (
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

     

        <MobileMenu
          items={links}
        />

    </>
  );
}

export default Navbar;
