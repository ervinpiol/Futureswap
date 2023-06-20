import React, { useState } from "react";
import { backedImages } from "../data/backedImages";
import { Parallax } from "react-scroll-parallax";

const Backed = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <Parallax
      opacity={[0, 2]}
      className="flex flex-col items-center gap-10 pt-24 pb-16 lg:py-24 lg:gap-24 w-[90%] xl:w-full mx-auto"
    >
      <h3 className="text-[26px] md:text-[32px] font-BiennaleMedium text-white">
        Backed by the best
      </h3>
      <div className="flex flex-wrap w-full">
        {backedImages.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center justify-center w-2/5 mx-auto xs:w-1/3"
          >
            <img
              src={hoveredImage === i ? item.hoverImage : item.image}
              alt="image"
              className="w-full py-8 xs:py-12 xs:w-40 lg:w-52 xl:w-72"
              onMouseEnter={() => setHoveredImage(i)}
              onMouseOut={() => setHoveredImage(null)}
            />
          </a>
        ))}
      </div>
    </Parallax>
  );
};

export default Backed;
