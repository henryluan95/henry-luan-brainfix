import React from "react";
import "./Hero.scss";

function Hero({ selectedMovie }) {
  return (
    <div className="hero section">
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
