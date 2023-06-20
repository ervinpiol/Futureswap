import React from "react";
import CardReverse from "../components/CardItems/CardReverse";

import GraphicOwnedBlock from "../assets/built/Graphic-Owned-Block.png";
import GraphicOwnedPlanets from "../assets/built/Graphic-Owned-Planets.png";
import GraphicOwnedCoins from "../assets/built/Graphic-Owned-Coins-p-800.png";

const Built = () => {
  const content = [
    "Unlike Palpatine, we love democracy. ‍That’s why our platform is designed to be governed by you.",
    "Want leveraged exposure on your favorite crypto assets? Get enough people from the Futureswap community to back you and the protocol will automatically add it as an exchange.",
    "Want to passively earn high yields from trade fees and FST rewards? Simply provide liquidity.",
  ];

  return (
    <CardReverse
      image1={GraphicOwnedBlock}
      image2={GraphicOwnedPlanets}
      image3={GraphicOwnedCoins}
      title="Built on web3. Owned by you."
      content={content}
    />
  );
};

export default Built;
