import React from "react";
import "./Button.scss";

class Button extends React.Component {
  render() {
    return (
      <button className={`button ${this.props.identifierClass}`}>
        <img
          className="button__icon"
          src={this.props.icon}
          alt={`${this.props.text} icon`}
        />
        {this.props.text.toUpperCase()}
      </button>
    );
  }
}

export default Button;
