import React from "react";
import "./Info.scss";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <Description />
        <Comments />
      </div>
    );
  }
}

export default Info;
