import React from "react";
import { takeControlData } from "../data/takeControlData";
import { Parallax } from "react-scroll-parallax";

const TakeControl = () => {
  return (
    <div className="flex flex-col items-center py-20 lg:py-20 gap-28 lg:gap-40 w-[90%] xl:w-full mx-auto">
      <Parallax
        opacity={[0, 2]}
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-center custom-h2">
          Take full control of your crypto
        </h2>
        <p className="custom-p lg:w-[660px] text-center">
          Built on Arbitrum and Avalanche, our decentralized leverage trading
          exchange focuses on being the best execution environment for trades.
        </p>
      </Parallax>
      <div className="grid w-full grid-cols-1 text-white xs:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {takeControlData.map((item, i) => (
          <Parallax
            opacity={[0, 2]}
            key={i}
            className="relative flex flex-col items-center group"
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full overflow-hidden">
              <div
                className="w-[120px] h-[100px] rounded-[50%] blur-[50px] mb-36 group-hover:w-[150px] group-hover:h-[150px] group-hover:blur-[60px]"
                style={{
                  backgroundImage: item.blur,
                }}
              />
            </div>
            <img
              src={item.image}
              alt="image"
              className={`absolute -top-7 transition duration-700 ease z-[200] group-hover:-translate-y-[10px] ${
                i === 2 ? "w-40" : "w-[100px]"
              }`}
            />
            <h4 className="font-BiennaleMedium text-[17px] w-60 text-center h-28 flex items-center justify-center mt-14 text-white">
              {item.text}
            </h4>
          </Parallax>
        ))}
      </div>
    </div>
  );
};

export default TakeControl;
