import React from "react";

function Design() {
  return (
    <div className="p-4 h-full">
      <h1 className="font-bold text-3xl mb-4">Design Work</h1>

      <div className="lg:grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold">First Year Hustles</h2>
          <p className="mb-4">
            I used to design and sell stickers and posters in my freshman year
            of college for pocket cash. Here are some of the designs I've worked
            on.
          </p>
          <div className="lg:grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col h-full">
              <img
                className="h-ful w-full"
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728930619/btdympcvlfa1mmjulhqg.png"
                alt=""
              />
              <span className="text-sm mt-6">
                This was a holographic VT sticker I designed. My roommate and I
                cleared $100 worth of these stickers in 40 minutes at a
                tailgate.
              </span>

              <div className="mt-4">
                <img
                  className="h-ful w-full"
                  src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929229/iju2d6sskg1xheanpben.png"
                  alt=""
                />
                <span className="text-sm">
                  This was a sticker I made of my dorm that I sold to the
                  residents. People were pulling fire alarms all the time so I
                  figured a design with the building on fire would be a hit.
                </span>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <img
                className="h-ful w-full"
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728930395/pknvyqyona1h24fzxflv.png"
                alt=""
              />
              <span className="text-sm mt-6">
                This was a poster I designed and printed. It costed me barely a
                dollar to print each unit but I would sell them for $12 each.
                Every night I'd sell 10 posters and walk away with $120 in my
                hands. Life was good.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:mt-0 mt-12">
          <h2 className="text-2xl font-bold">College Cardz</h2>
          <p>
            College Cardz was a startup I launched with some friends in my
            freshman year. The idea was to turn colege memories into collectible
            trading cards. We wanted to leverage the cards for universities to
            increase their alumni fundraising efforts but the red tape and
            beuarocracy involved in selling to universities made it a challenge
            for us to get off the ground. Here are some of our designs from the
            first set.
          </p>
          <a
            className="font-bold italic"
            href="https://pamplin.vt.edu/news/2023/11/pamplin-college-cardz.html"
          >
            Check out this article covering us!
          </a>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mt-4">
            <div>
              <img
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929551/dywy7wigoyypoew1hwup.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929290/wbnsx19yvybzqgi8gspy.png"
                alt=""
              />
              <span className="text-sm">
                These cards were designed by my cofounders Piero and Chris. The
                dominatrix hokie bird is one of my favorites.
              </span>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929290/rqru4vnoowfvedlnfizy.png"
                alt=""
              />
              <span className="text-sm">
                There was a lot going in Hoge in my freshman year. People
                dressed in banana outfits racing down the halls and the hoge
                reaper prowling around was a common sight for the residents.
              </span>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929290/bzzymb0c3qab6fcezmte.png"
                alt=""
              />
              <span className="text-sm">
                The football hokie was one of the more in-demand cards.
              </span>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728929290/oufokfxz1w6vytkncagp.png"
                alt=""
              />
              <span className="text-sm">
                I was in slusher when it flooded from the 11th floor downwards.
                Luckily I was in the wing where it remained dry.
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-3xl lg:mt-0 mt-12">
        E-Club Posters and Brochures
      </h2>
      <span>
        These are some of the designs I've worked on for the entrepreneurship
        club at VT.
      </span>

      <div className="lg:grid lg:grid-cols-2 gap-8">
        <div>
          <img
            src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728931145/iymvk6wnb8o2tedl81ll.png"
            alt=""
          />
          <span className="text-sm">
            A brochure promoting E-Club to alumni from the Pamplin school of
            business that were visiting VT in the Spring of 2023
          </span>
          <br />
          <br />
          <img
            src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728931225/qmmxxxzwiuglxqhqubzc.png"
            alt=""
          />
          <span className="text-sm">
            The shirts I designed for Startup Sprint 2024. The back shows the
            entrepreneurs journey in our light bulb logo.
          </span>
        </div>
        <div className="pb-20">
          <img
            src="https://res.cloudinary.com/dp56p8qeg/image/upload/v1728931225/bby8hotcml2u0ykghtlw.jpg"
            alt=""
          />
          <span className="text-sm">
            A poster that I worked on with Mohit Yadav for an upcoming event.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Design;
