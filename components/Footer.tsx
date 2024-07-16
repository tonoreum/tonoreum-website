import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 top-0 h-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready for a <span className="text-purple">Tonoreum </span>
          adventure?
        </h1>
        <p className="text-white-500 md:mt-10 my-5 text-center">
          Start mine $TOR right now!
        </p>
        <a href="https://t.me/Tonoreum_Bot">
          <MagicButton
            title="Start mine $TOR!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Tonoreum 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
