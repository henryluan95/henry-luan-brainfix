import React from "react";
import "./AlertBox.scss";

const AlertBox = ({ alertText, setAlert }) => {
  return (
    <div className="alert">
      <p className="alert__text">{alertText}</p>
      <button className="alert__button" onClick={() => setAlert()}>
        X
      </button>
    </div>
  );
};

export default AlertBox;
