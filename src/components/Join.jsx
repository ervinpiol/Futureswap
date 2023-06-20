import React from "react";
import CardReverse from "./CardItems/CardReverse";

import GraphicMemeCard from "../assets/join/Graphic-Meme-Card-p-1080.png";
import GraphicMemeCat from "../assets/join/Graphic-Meme-Cat-p-800.png";
import GraphicMemeMessage from "../assets/join/Graphic-Meme-Message-p-1080.png";
import GraphicMemeRocket from "../assets/join/Graphic-Meme-Rocket.png";

const Join = () => {
  const content = [
    "While leverage trading on exotic pairs is great, having a Discord server full of memes and alpha is even better. ‍",
    "Join our community of meme-loving masterminds and get the inside scoop on what’s coming down the pipeline.",
  ];

  return (
    <CardReverse
      image1={GraphicMemeCard}
      image2={GraphicMemeMessage}
      image3={GraphicMemeRocket}
      image4={GraphicMemeCat}
      title=" Come for the memes, stay for the protocol."
      content={content}
      button="Join our server"
      isJoin
    />
  );
};

export default Join;
