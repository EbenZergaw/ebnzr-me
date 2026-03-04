"use client";
import ThemeToggle from "./theme/theme-toggle";

function Navbar() {
  return (
    <div className="mt-4 mb-8 lg:mb-12 flex items-center justify-between z-[46]">
      <span className="chakra text-sm lg:text-base uppercase tracking-[0.2em] opacity-80">
        Site Offline
      </span>
      <div className="cursor-pointer">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
