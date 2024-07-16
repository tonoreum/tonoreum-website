// components/Clients.tsx
"use client";

import React from "react";
import { kompanies, banners } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Our
        <span className="text-purple"> Products 👇</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={banners} direction="right" speed="slow" />
        </div>
        <h1 className="heading mb-10">
          Our
          <span className="text-orange-500"> Partners</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {kompanies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={company.img} className="md:w-10 w-5" />
                <img
                  src={company.nameImg}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
