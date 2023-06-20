import React from "react";
import { Parallax } from "react-scroll-parallax";

const Card = ({
  image1,
  image2,
  image3,
  title,
  content,
  data,
  layoutStyle,
}) => {
  return (
    <Parallax
      opacity={[0, 2]}
      className="flex flex-col-reverse items-center gap-24 py-20 lg:flex-row w-[90%] xl:w-full mx-auto"
    >
      <div className="relative w-full xs:w-4/5 lg:w-1/2">
        <div>
          <img src={image1} alt="Image 1" />
          <Parallax translateY={[30, -30]} className="absolute top-0">
            <img src={image2} alt="Image 2" />
          </Parallax>
          <Parallax translateY={[-30, 30]} className="absolute top-0">
            <img src={image3} alt="Image 3" />
          </Parallax>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="custom-h2">{title}</h2>
        {content && <p className="pb-[30px] custom-p">{content}</p>}
        <div className={layoutStyle}>
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-5">
              <img src={item.image} alt="Image" className="h-8 xs:h-12" />
              <p className="custom-p">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Card;
