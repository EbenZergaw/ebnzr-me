import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const MobileMenu = ({
  items,
  className,
}: {
  items: { label: string; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the menu button
  const { theme, setTheme } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false); // Flag to track button clicks

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node) // Exclude button click from being considered an outside click
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleMenu = () => {
    setButtonClicked(true);
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (buttonClicked) {
      setButtonClicked(false); // Reset flag after the button has been clicked
    }
  }, [buttonClicked]);

  return (
    <div className="w-full fixed lg:z-50 z-[49] md:hidden lg:hidden">
      <button
        ref={buttonRef} // Attach ref to button
        onClick={toggleMenu}
        className={`
          rounded-md fixed right-4 top-4 
          font-semibold chakra 
          text-black dark:text-white/40
          text-opacity-40
          bg-white/30 dark:bg-[#0B0E13]/30
          ${open && "opacity-100 dark:text-white/100 text-opacity-100"}
          backdrop-blur-[2px] px-2 py-1 mx-[-8px]
          `}
      >
        MENU
      </button>

      <div className="mb-2"></div>
      
      <div
        ref={menuRef} // Reference the menu container
        className={cn("w-1/2 fixed right-4 block md:hidden", className)}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute top-full h-fit mb-2 flex flex-col gap-2 w-full right-0"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 1, y: -10 }} // Starts above, animating downward
                  animate={{
                    opacity: 1,
                    y: 0, // Ends at its normal position
                  }}
                  exit={{
                    opacity: 0,
                    y: -10, // Moves down when exiting
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    key={item.label}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="border border-gray-400 dark:border-gray-700 rounded-md w-full p-2 flex items-center justify-between text-right backdrop-blur-[3px] transitionQ bg-white/30 dark:bg-[#0B0E13]/40"
                  >
                    <div className="w-full text-lg text-right float-right">
                      {item.label}
                    </div>
                  </Link>

                  {idx == items.length - 1 && (
                    <div
                      className="border border-gray-400 dark:border-gray-700 rounded-md w-full p-2 flex items-center justify-between text-right mt-2 backdrop-blur-[3px] bg-white/30 dark:bg-[#0B0E13]/40"
                      onClick={() => {
                        setOpen(false);
                        if (theme == "dark") {
                          setTheme("light");
                        } else {
                          setTheme("dark");
                        }
                      }}
                    >
                      {theme == "dark" ? (
                        <Sun className="" strokeWidth={1.6} />
                      ) : (
                        <Moon className="" strokeWidth={1.6}/>
                      )}
                      <span className="text-lg">Theme</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
