import React from "react";
import "./Hero.scss";

//Component that render video player
function Hero({ selectedMovie }) {
  return (
    <div className="hero">
      <img
        className="hero__video"
        src={selectedMovie.image}
        // src={selectedMovie.video}
        // controls
        alt={selectedMovie.title}
      />
    </div>
  );
}

export default Hero;
