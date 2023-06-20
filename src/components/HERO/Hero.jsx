import React from "react";
import HeroBG from "./HeroBG";
import Crypto from "./Crypto";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-between pt-20 text-white pb-52 lg:pt-36 w-[90%] mx-auto xl:w-full z-[1]">
      <div className="w-[90%] md:w-[600px] z-50 mx-auto xs:mx-0">
        <p className="font-CodecColdBold text-primarygreen100 text-xs xs:text-[15px] tracking-[3px] pb-6">
          BUILT ON WEB3. POWERED BY YOU.
        </p>
        <h1 className="text-[50px] md:text-[68px] font-BiennaleMedium font-medium leading-[1.1] pb-4 xs:pb-8">
          The Future of Leverage Is Here
        </h1>
        <p className="custom-p w-full lg:w-[550px] pb-5 xs:pb-8">
          Leverage on any tokens with a protocol trusted with billions for its
          performance and reliability.
        </p>
        <div className="flex flex-col gap-5 xs:flex-row">
          <button className="custom-button text-blueblack bg-primarygreen100 button-hover">
            Start Trading
          </button>
          <button className="custom-button text-primarygreen100 border border-primarygreen100 hover:ring-[3px] ring-primarygreen100 hover:border-none">
            Add Liquidity
          </button>
        </div>
      </div>
      <HeroBG />
      <Crypto />
    </div>
  );
};

export default Hero;
