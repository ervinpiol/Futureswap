import React from "react";

import Hero from "../components/HERO/Hero";
import Trades from "../components/Trades";
import TakeControl from "../components/TakeControl";
import Decentralized from "./Decentralized";
import Built from "./Built";
import Advantage from "./Advantage";
import Join from "./Join";
import Backed from "./Backed";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-full xl:w-[1296px] mx-auto">
      <Hero />
      <Trades />
      <TakeControl />
      <Decentralized />
      <Built />
      <Advantage />
      <Join />
      <Backed />
      <Footer />
    </div>
  );
};

export default Main;
