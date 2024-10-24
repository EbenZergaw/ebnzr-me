import React from "react";

function Guest360() {
  return (
    <div className="h-full p-4">
      <h1 className="font-bold text-3xl mb-4 w-full">Guest 360</h1>

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
          <h2 className="font-bold">Research and Hypothesis</h2>
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
          <h2 className="font-bold">Features</h2>
          <div className="font-medium my-3">
            Authentication
          </div>
          <div className="font-medium my-3">
            Role Based Access
          </div>
          <div className="font-medium my-3">
           AI Generated Insights
          </div>

          <div>
            <h2 className="font-bold">Tech Stack</h2>
            Tech Stack - Next.js - Tailwind CSS - Shadcn UI - Clerk
            Authentication - Groq llama 3 - Django / Python / Postgres on Heroku
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guest360;
