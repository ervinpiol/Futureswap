import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

import GraphicPurpleWave from "../../assets/bg/Graphic-Purple-Wave.svg";
import GraphicBlueWave from "../../assets/bg/Graphic-Blue-Wave.svg";
import GraphicTealWave from "../../assets/bg/Graphic-Teal-Wave.svg";
import GraphicHeroBlur from "../../assets/bg/Graphic-Hero-Blur.avif";

const HeroBG = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const imageElement = document.getElementById("hero-bg");

      if (imageElement) {
        imageElement.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Parallax
      id="hero-bg"
      className="absolute -top-64 xs:-top-[26rem] lg:-top-[20.75rem] xl:-top-[16.75rem] w-[1900px]"
    >
      <motion.img
        src={GraphicPurpleWave}
        alt="GraphicPurpleWave"
        className="absolute z-10 left-[-350px] xs:left-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      <motion.img
        src={GraphicBlueWave}
        alt="GraphicBlueWave"
        className="absolute z-[5] left-[-380px] xs:left-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      />
      <motion.img
        src={GraphicTealWave}
        alt="GraphicTealWave"
        className="absolute z-[5] left-[-590px] xs:left-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.2 }}
      />
      <motion.img
        src={GraphicHeroBlur}
        alt="GraphicHeroBlur"
        className="absolute left-[-200px] top-28 lg:top-40 xs:left-[120px] lg:left-[385px] h-[940px] lg:h-[820px] w-[1250px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.3 }}
      />
    </Parallax>
  );
};

export default HeroBG;
