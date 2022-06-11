import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

function LinkButton({ className, icon, text, path }) {
  return (
    <Link to={path} className={`link ${className}`}>
      {icon && <img className="link__icon" src={icon} alt={`${text} icon`} />}
      {text.toUpperCase()}
    </Link>
  );
}

export default LinkButton;
