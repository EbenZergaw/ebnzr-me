import React from "react";
import { SearchX, Hammer, BriefcaseBusiness } from "lucide-react";

function StartupSprint() {
  return (
    <div className='h-full lg:flex"'>
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:px-10 px-6 mt-4 pt-0">
          <h1 className="font-bold text-3xl mb-4">
            Startup Sprint
          </h1>
          <p>
            The Entrepreneurship Club at Virginia Tech hosts its flagship event
            every fall semester. It's a week long event where students are
            tasked with:
          </p>

          <ul className="flex flex-col my-4">
            <li className="flex items-center gap-2 font-semibold">
              <SearchX />
              Identifying a problem
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <Hammer />
              Building a minimum viable product
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <BriefcaseBusiness />
              Crafting a business model
            </li>
          </ul>

          <p>
            Startup Sprint is born from the belief that entrepreneurship must be
            actively practiced, not just theorized. It's a unique event that
            blends the practical, hands-on approach of hackathons with the
            value-driven focus of pitch competitions. Our students aren't just
            pitching ideas; they’re tasked with creating tangible products and
            learning how to communicate their value effectively.
          </p>
          <br />

          <p>
            Unlike traditional pitch competitions where students can simply
            present an idea, Startup Sprint requires participants to take
            concrete steps toward making their ideas a reality. And while it’s
            inspired by hackathons, we don’t limit the focus to just tech.
          </p>
          <br />

          <p>
            At its core, Startup Sprint is an entry point into Virginia Tech's
            startup ecosystem. It helps students start meaningful projects that
            could eventually become commercially viable businesses. Our focus is
            on ecosystem development — connecting students with the right
            resources, people, and opportunities to help them thrive. We've had
            some amazing success stories that came out of Startup Sprint. One
            team of students had an AI startup that got acquired, and another is
            currently doing big numbers in revenue.
          </p>

          <div className="mt-8">
            <img
              className="lg:w-[ 70%]"
              src="https://media.licdn.com/dms/image/v2/D4E22AQGb9MOgVMt5BA/feedshare-shrink_800/feedshare-shrink_800/0/1699531757331?e=1731542400&v=beta&t=W2fBVE41oBDg1Ea7Y70I_q7YJSqPKaWv7mpoRrVTvAg"
              alt="My presentation during the opening ceremony of Startup Sprint 2023"
            />
            <span className="text-sm italic">
              My presentation during the opening ceremony of Startup Sprint 2023
            </span>
          </div>
        </div>

        <div className="lg:px-10 px-6 mt-4 pt-0">
          <div className="mb-10">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728690400/gktf30hew4g3gqhukfkr.png"
              alt="Horizontal Flyer for Startup Sprint 2024"
            />
            <span className="text-sm italic">
              Horizontal Flyer for Startup Sprint 2024
            </span>

            <div className="mt-4">
              <p>
                The typical profile of a Startup Sprint participants is:
                <div className="mb-2">
                  <div className="font-bold">High Agency:</div>
                  Creative executors who are self-sufficient, competitive, and
                  goal-driven.
                </div>
                <div className="mb-2">
                  <div className="font-bold">Technically Competent:</div>
                  Many participants are proficient in full-stack development,
                  design, or prototyping.
                </div>
                <div className="mb-2">
                  <div className="font-bold">Ambitious:</div>
                  They're driven by a desire to create something impactful.
                </div>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-bold">What I Learned</h3>
            <br />
            <p>
              Organizing Startup Sprint has been a transformative experience. I
              learned practically what it means to be a leader and how to
              inspire a team to achieve a common goal. I learned how to manage a
              budget, how to market an event, and how to manage stakeholders.
              <br />
              <br />I was put in a position where I had to learn how to be both
              a visionary and a pragmatist. Additionally, I also had learn
              problem solving across different domains (design, marketing,
              operations, etc). A struggle I faced was learning how to manage a
              team of people who were smarter than me, while also learning how
              to delegate effectively.
            </p>
            <br />

            <p>
              Some of the more technical skills I learned and refined was
              copywriting, graphic design, marketing, and event planning.
              We're also working on content marketing and social media, creating
              videos, reels, and other content to promote the event. This alone has
              been a really cool learning experience. Seeing what goes into creating 
              high quality production grade content is pretty dope.

              <br /><br />
              Additionally, I gained a lot of experience in project management
              using Notion. Having a clear vision and an open line of
              communication with the team is mandatory for pulling off an event
              with multiple moving parts.
              <br />
              <br />
              We handled the operation of this event by having one source of
              truth for all information, and we used Notion to manage the
              project. Our masterplan doc had all the information about the
              event, including the schedule, tasks, budget, the marketing plan,
              and the team's roles. A centralized source of information was
              crucial for keeping everyone on the same page and avoiding
              miscommunication.
            </p>

            <img
                // how to make this image stick at the bottom of the div
                className="mt-8"
              src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728693489/oeutoopjl7agln8alvq6.png"
              alt="Screenshot of our master plan doc"
            />
            <span className="text-sm italic">
              Screenshot of our master plan doc
            </span>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 gap-4 lg:px-10 px-6 mt-4 lg:mt-10 pb-10">
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQEpPEBRPg9T0A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728271718936?e=1731542400&v=beta&t=E7w0JDzkdsL6EH7IrmKc5tswq0BTtsFuzxa9flwuvEw"
            alt=""
            className="h-60 w-full object-cover"
          />
          <span className="text-sm italic">
            Opening Ceremony of Startup Sprint 2024
          </span>
        </div>

        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQHX98cGUiibgw/feedshare-shrink_1280/feedshare-shrink_1280/0/1699531756759?e=1731542400&v=beta&t=kxApt3TeFP17yFFFjL5Ggb7ixSidKrh0L9luaxBVV4I"
            alt=""
            className="h-60 w-full object-cover"
          />
          <span className="text-sm italic">
            Opening Ceremony of Startup Sprint 2023
          </span>
        </div>

        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E22AQGEV2pOUJJMhg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728325019082?e=1731542400&v=beta&t=5v4Rx7_2N2OnZ5AJ9k6IxCwnvc_Wf2WwGf7w3edEP4k"
            alt=""
            className="h-60 w-full object-cover"
          />
          <span className="text-sm italic">
            Mikhail and Rituraj pitching ParaSwift, an AI product that
            streamlines client onboarding for law firms. These guys are cracked.
            I see them winning at every hackathon they participate in.
          </span>
        </div>
      </div>
    </div>
  );
}

export default StartupSprint;
