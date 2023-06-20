import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";

import Logo from "../assets/Icons/Logo-Futureswap.svg";
import HoverImg from "../assets/Icons/Icon-Nav-Hover.svg";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const [openMenu, setOpenMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (isDesktop) {
      document.body.style.overflow = "auto";
      setOpenMenu(false);
    }
  }, [openMenu, isDesktop]);

  return (
    <div className="flex items-center justify-between py-6 xl:w-[1296px] w-[90%] mx-auto">
      <img src={Logo} alt="Logo" className="z-[1000] w-40" />
      <ul className="z-20 hidden gap-20 text-white lg:flex">
        {["Trade", "Docs", "Governance", "Jobs", "Discord"].map((list, i) => (
          <li
            key={i}
            className="flex items-center gap-2 font-CodecColdBold font-bold text-[17px] relative cursor-pointer hover:text-primarygreen100"
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === i && (
              <motion.img
                src={HoverImg}
                alt="HoverImg"
                className="absolute bottom-2.5 -left-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                exit={{ opacity: 0 }}
              />
            )}
            {list}
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {openMenu && <Menu open={openMenu} setOpenMenu={setOpenMenu} />}
      </AnimatePresence>{" "}
      <button
        id="menu-icon"
        className={`relative z-[1000] w-10 h-10 flex lg:hidden justify-center flex-col gap-1.5 items-center  ${
          openMenu && "active"
        }`}
        onClick={menuClick}
      >
        <span className="z-20 w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
        <span className="z-20 w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
      </button>
    </div>
  );
};

export default Navbar;
