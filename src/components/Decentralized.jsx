import React from "react";
import Card from "../components/CardItems/Card";

import GraphicDecentralizedBase from "../assets/decentralized/Graphic-Decentralized-Base-p-800.png";
import GraphicDecentralizedOrbitals from "../assets/decentralized/Graphic-Decentralized-Orbitals.png";
import GraphicDecentralizedBox from "../assets/decentralized/Graphic-Decentralized-Box.png";
import { decentralizedData } from "../data/decentralizedData";

const Decentralized = () => {
  return (
    <Card
      image1={GraphicDecentralizedBase}
      image2={GraphicDecentralizedOrbitals}
      image3={GraphicDecentralizedBox}
      title="Fully decentralized. Completely secure."
      content="We have all been in this industry too long not to make the security of your funds our absolute top priority. We’ve received multiple audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hat researchers."
      data={decentralizedData}
      layoutStyle="grid grid-cols-1 gap-5 xs:grid-cols-2"
    />
  );
};

export default Decentralized;
