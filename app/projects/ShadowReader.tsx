import React from "react";
import { IdCard, BrainCircuit, KeySquare } from "lucide-react";
import Link from "next/link";

function ShadowReader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 lg:bg-black/40 bg-gradient-to-b from-black/60 via-emerald-500/10 to-emerald-500/40">
      <div className="w-full px-4 sm:px-10">
        <div className="w-full">
          <h1 className="gradient-override text-4xl text-center w-full sm:w-fit mx-auto font-bold bg-gradient-to-b from-emerald-500 to-emerald-800/80 [background-clip:text] [-webkit-background-clip:text] text-transparent my-10">
            Shadow Reader
          </h1>
          <div className="lg:w-4/5 text-center mx-auto mb-10 text-white dark:text-white/80">
            Shadow Reader is a web app I built to solve a very specific problem.
            Reading PDFs in the dark would obliterate my eyes, so I built a dark
            mode PDF reader. It's a simple app that allows you to upload a documents and
            it inverts the colors to make it easier on the eyes.
          </div>
          <a
            className="green-glow hover:bg-emerald-500 relative text-emerald-300 overflow-hidden bg-gradient-to-b from-emerald-500 to-green-600/20 border border-emerald-500 mx-auto px-4 py-2 rounded-sm block w-fit lg:mb-0 mb-3"
            href="https://shadowreader.io"
            target="_blank"
          >
            <span className="relative z-10">Check it out</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShadowReader;
