import React from "react";
import { motion } from "framer-motion";

import IconTwitter from "../assets/Icons/Icon-Twitter-Green.svg";
import IconDiscord from "../assets/Icons/Icon-Discord-Green.svg";

const Menu = () => {
  return (
    <div className="z-[999]">
      <motion.div
        className="absolute top-0 left-0 block w-screen h-screen px-10 py-40 overflow-y-scroll bg-BGColor sm:px-16"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 500 }}
      >
        <ul className="z-[9999] text-white flex flex-col gap-2 xs:gap-5">
          {["Trade", "Docs", "Governance", "Jobs", "Discord"].map(
            (list, i, array) => (
              <motion.li
                key={i}
                className={`flex items-center gap-2 font-CodecColdBold font-bold text-[40px] lg:text-[17px] relative cursor-pointer transition duration-300 ease-in-out hover:text-primarygreen100 `}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.1 * (array.length - i + 0.3) }}
                variants={{
                  hidden: { opacity: 0, x: 150 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {list}
              </motion.li>
            )
          )}
        </ul>
        <div className="pt-14">
          <span className="text-lg font-BiennaleMedium text-neutralgrey2100">
            Follow us
          </span>
          <div className="flex pt-5 sm:pt-8">
            <img src={IconTwitter} alt="IconTwitter" />
            <img src={IconDiscord} alt="IconDiscord" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
