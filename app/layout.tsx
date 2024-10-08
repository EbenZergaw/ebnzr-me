
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Ebenezer Zergabachew",
  description: "Generated by Ebenezer Zergabachew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning className={`wrapper`}>
      <body className="pb-20">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
