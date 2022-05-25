import React from "react";
import "./Button.scss";
import uploadIcon from "../../assets/Icons/upload.svg";

class Button extends React.Component {
  render() {
    return (
      <button className="button">
        <img className="button__icon" src={uploadIcon} alt="upload Icon" />
        {this.props.text.toUpperCase()}
      </button>
    );
  }
}

export default Button;
