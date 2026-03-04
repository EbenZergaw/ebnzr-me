import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Ebenezer Zergabachew",
  description:
    "This website is currently under construction while a redesigned version is being built.",
};

export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning className={`wrapper`}>
      <body className="pb-20 lg:mt-0">
        <div className="lg:w-full max-w-screen-lg mx-auto rounded-md relative lg:flex flex-col antialiased px-5">
          <ThemeProvider>
            <Navbar />
            <div className="mt-12">
              <UnderConstruction />
            </div>
          </ThemeProvider>{" "}
        </div>
        <BackgroundBeams className="z-[-10]"></BackgroundBeams>
      </body>
    </html>
  );
}
