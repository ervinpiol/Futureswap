import React from "react";
import { motion } from "framer-motion";
import { cryptoImages } from "../../data/cryptoImages";

import StemImg from "../../assets/hero-img/Graphic-Hero-Stem.svg";

const Crypto = () => {
  return (
    <div className="hidden lg:block">
      {cryptoImages.map((crypto, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            index === 0
              ? "xl:top-20 top-16 right-64 xl:right-[430px]"
              : index === 1
              ? "right-10 xl:-right-10 top-52 w-44"
              : "xl:top-[500px] top-[420px] right-48 xl:right-56"
          } transition duration-300 ease z-[200] hover:-translate-y-[5px] flex flex-col items-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: index * 0.5 }}
        >
          <a
            href=""
            className="relative p-5 bg-black cursor-pointer bg-opacity-60 rounded-xl hover:shadow-2xl"
          >
            <img
              src={crypto.img}
              alt={`${crypto.name}Img`}
              className="absolute left-0 w-10 -translate-x-1/2 -translate-y-1/2 top-1/2"
            />
            <p className="text-lg text-white font-BiennaleMedium pb-1.5 pl-3">
              {crypto.name}{" "}
              <span className="text-gray-500">{crypto.symbol}</span>
            </p>
          </a>
          <img src={StemImg} alt="StemImg" />
        </motion.div>
      ))}
    </div>
  );
};

export default Crypto;
