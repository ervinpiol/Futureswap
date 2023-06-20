import React, { useState } from "react";
import LogoFutureswap from "../assets/Icons/Logo-Futureswap.svg";
import IconTwitter from "../assets/Icons/Icon-Twitter-Gray.svg";
import IconDiscord from "../assets/Icons/Icon-Discord-Gray.svg";
import IconTwitterHover from "../assets/Icons/Icon-Twitter-Green.svg";
import IconDiscordHover from "../assets/Icons/Icon-Discord-Green.svg";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer className="flex flex-col items-center justify-between gap-8 pt-16 pb-12 border-t sm:pb-20 sm:pt-24 border-neutralgrey2100 sm:flex-row sm:gap-0 w-[90%] xl:w-full mx-auto">
      <div className="flex flex-col items-center order-3 w-56 gap-1 sm:items-start sm:order-none sm:gap-0">
        <p className="text-[13px] sm:text-sm text-neutralgrey3100 font-BiennaleMedium">
          Copyright © 2023 Futureswap
        </p>
        <p className="text-[13px] sm:text-sm text-neutralgrey3100 font-BiennaleMedium">
          All rights reserved |{" "}
          <a href="#" className="hover:text-primarygreen100">
            Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-primarygreen100">
            Terms
          </a>
        </p>
      </div>
      <img
        src={LogoFutureswap}
        alt="LogoFutureswap"
        className="order-2 w-32 md:w-40 sm:order-none"
      />
      <div className="flex justify-end order-1 w-auto gap-3 sm:gap-5 sm:w-56 sm:order-none">
        <a href="#">
          <img
            src={hoveredIcon === "twitter" ? IconTwitterHover : IconTwitter}
            alt="IconTwitter"
            className="w-10 md:w-12"
            onMouseEnter={() => setHoveredIcon("twitter")}
            onMouseOut={() => setHoveredIcon(null)}
          />
        </a>
        <a href="#">
          <img
            src={hoveredIcon === "discord" ? IconDiscordHover : IconDiscord}
            alt="IconDiscord"
            className="w-10 md:w-12"
            onMouseEnter={() => setHoveredIcon("discord")}
            onMouseOut={() => setHoveredIcon(null)}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
