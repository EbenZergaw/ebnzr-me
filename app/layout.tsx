import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "Ebenezer Zergabachew",
  description: "Explore my journey in tech, design, and startups through my blog posts, projects, and personal reflections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`wrapper`}>
      <body className="pb-20 lg:mt-0">
        <div className="lg:w-full max-w-screen-lg mx-auto rounded-md relative lg:flex flex-col antialiased px-5">
          <ThemeProvider>
            <Navbar />
            <div className="mt-12">{children}</div>
          </ThemeProvider>{" "}
        </div>
        <BackgroundBeams className="z-[-10]"></BackgroundBeams>
      </body>
    </html>
  );
}
