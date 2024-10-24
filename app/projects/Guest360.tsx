import React from "react";
import { IdCard, BrainCircuit, KeySquare } from "lucide-react";

function Guest360() {
  return (
    <div className="h-full px-10 ">
      <h1 className="font-bold text-3xl mb-4 w-full mt-10 lg:mt-0">Guest 360</h1>

      <iframe
        src="https://youtube.com/embed/9r15vt0bcTs"
        className="w- full block lg:hidden lg:h-full mb-10 mt-10"
      ></iframe>

      <p className="lg:w-2/3">
        Marriott International hosted a hackathon with the Pamplin College of
        Business in my fall semester of my junior year at VT. The theme of the
        hackathon was tourism and travel.
        <br />
        <br />
        Our team built Guest360, which is an AI powered CRM for hotels to track
        guest preferences. It assists establishments in personalizing their
        services to improve guest experience across the entire hotel chain.
      </p>

      <br />

      <div className="lg:grid lg:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-xl">Research and Hypothesis</h2>
          <p>
            We decided to start with a clear problem before jumping into code.
            After talking to various Marriott employees at the event, asking
            them about their biggest challenges as an organization, we got a
            clear starting point for our project.
            <br />
            <br />
            Hotels struggle with tracking guest data. Not just at one hotel but
            internationally also. Knowing a guests preferred pillow type, room
            location, choice of beverages, etc allows hotels to personalize
            services and improve the guest experience.
            <br />
            <br />
            Improved guest experience would lead to an increase in brand
            loyalty, retention, and ultimately profit.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl">Features</h2>
          <div className="flex items-center gap-2 font-[500] my-3">
            <KeySquare />
            Authentication
          </div>
          <div className="flex items-center gap-2 font-[500] my-3">
            <IdCard />
            Role Based Access
          </div>
          <div className="flex items-center gap-2 font-[500] my-3">
            <BrainCircuit />
            AI Generated Insights
          </div>

          <div className="mt-5">
            <h2 className="font-bold text-xl">Tech Stack</h2>
            <img src="https://skillicons.dev/icons?i=nextjs,tailwind,python,django,postgres,heroku" />
            <div className="mt-4">
              Deployed on Heroku with the llama 3 model on Groq.
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://youtube.com/embed/9r15vt0bcTs"
        className="w-full hidden lg:block lg:h-full pb-20 mt-10"
      ></iframe>
    </div>
  );
}

export default Guest360;
