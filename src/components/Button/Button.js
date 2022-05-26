import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button className={`button ${props.className}`}>
      <img
        className="button__icon"
        src={props.icon}
        alt={`${props.text} icon`}
      />
      {props.text.toUpperCase()}
    </button>
  );
}

export default Button;
