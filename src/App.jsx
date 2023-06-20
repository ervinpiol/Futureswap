import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <ParallaxProvider>
      <div className="relative mx-auto overflow-hidden bg-BGColor">
        <Navbar />
        <Main />
      </div>
    </ParallaxProvider>
  );
};

export default App;
