import React from "react";
import { Parallax } from "react-scroll-parallax";

const CardReverse = ({
  image1,
  image2,
  image3,
  title,
  content,
  button,
  isJoin,
  image4,
}) => {
  return (
    <Parallax
      opacity={[0, 2]}
      className="flex flex-col items-center gap-24 py-20 lg:flex-row w-[90%] xl:w-full mx-auto"
    >
      <div className="flex flex-col w-full lg:w-1/2">
        <h2 className="custom-h2">{title}</h2>
        {content.map((paragraph, index) => (
          <p key={index} className="pb-5 custom-p">
            {paragraph}
          </p>
        ))}
        {button && (
          <button className="custom-button text-blueblack bg-primarygreen100 button-hover">
            {button}
          </button>
        )}
      </div>
      <div className="relative w-full xs:w-4/5 lg:w-1/2">
        <div>
          <img src={image1} alt="Image 1" />
          <Parallax translateY={[30, -30]} className="absolute top-0">
            <img src={image2} alt="Image 2" />
          </Parallax>
          <Parallax
            translateY={[-30, 30]}
            className={`absolute top-0 ${isJoin && "z-[-1]"}`}
          >
            <img src={image3} alt="Image 3" />
          </Parallax>
          {image4 && (
            <Parallax translateX={[-30, 30]} className="absolute top-0">
              <img src={image4} alt="Image 4" />
            </Parallax>
          )}
        </div>
      </div>
    </Parallax>
  );
};

export default CardReverse;
