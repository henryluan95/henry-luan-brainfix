import React from "react";
import "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <video
          className="hero__video"
          poster="https://i.imgur.com/l2Xfgpl.jpg"
          src="https://project-2-api.herokuapp.com/stream"
          controls
        ></video>
      </div>
    );
  }
}

export default Hero;
