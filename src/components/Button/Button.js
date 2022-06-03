import React from "react";
import "./Button.scss";

function Button({ className, icon, text, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <img className="button__icon" src={icon} alt={`${text} icon`} />}
      {text.toUpperCase()}
    </button>
  );
}

export default Button;
