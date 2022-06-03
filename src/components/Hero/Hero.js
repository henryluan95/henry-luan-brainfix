import React from "react";
import "./Hero.scss";

//Component that render video player
function Hero({ selectedMovie }) {
  return (
    <div className="hero">
      <video
        className="hero__video"
        poster={selectedMovie.image}
        src={selectedMovie.video}
        controls
      ></video>
    </div>
  );
}

export default Hero;
