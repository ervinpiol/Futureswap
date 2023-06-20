import React from "react";
import Card from "../components/CardItems/Card";

import GraphicLayerCoins from "../assets/advantage/Graphic-Layer-Coins.png";
import GraphicLayerTop from "../assets/advantage/Graphic-Layer-Top-p-800.png";
import GraphicLayerBottom from "../assets/advantage/Graphic-Layer-Bottom-p-800.png";
import { advantageData } from "../data/advantageData";

const Advantage = () => {
  return (
    <Card
      image1={GraphicLayerCoins}
      image2={GraphicLayerBottom}
      image3={GraphicLayerTop}
      title="Take full advantage of everything Arbitrum and Avalanche have to offer."
      data={advantageData}
      layoutStyle="flex flex-col gap-1"
    />
  );
};

export default Advantage;
