import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Trades = () => {
  const tradeVolume = 4200368117;
  const totalTrades = 10434;

  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView();

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="pb-[80px] lg:pb-[60px] pt-[150px] xs:pt-[80px] sm:pt-20 xl:pt-36 flex justify-center gap-10 flex-col md:flex-row z-50 w-[90%] mx-auto lg:w-full">
      <div className="flex flex-col items-center p-[30px] pb-10 w-full lg:w-1/3 relative">
        <div className="w-[90%] h-0.5 bg-linear absolute top-0" />
        <p className="text-gradientpurplecolor1 text-[19px] font-BiennaleMedium pb-5">
          All-time trade volume
        </p>
        <h3
          ref={ref}
          className="text-neutralgrey2100 text-[34px] xs:text-[40px] font-BiennaleLight"
        >
          {hasAnimated && <CountUp end={tradeVolume} duration={2} prefix="$" />}
        </h3>
      </div>
      <div className="flex flex-col items-center p-[30px] pb-10 w-full lg:w-1/3 relative">
        <div className="w-[90%] h-0.5 bg-primarygreen100 absolute top-0" />
        <p className="text-primarygreen100 text-[19px] font-BiennaleMedium pb-5">
          Total Trades
        </p>
        <h3
          ref={ref}
          className="text-neutralgrey2100 text-[34px] xs:text-[40px] font-BiennaleLight"
        >
          {hasAnimated && <CountUp end={totalTrades} duration={2} prefix="$" />}
        </h3>
      </div>
    </div>
  );
};

export default Trades;
