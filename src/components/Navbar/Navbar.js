import React from "react";
import "./Navbar.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import brainFixLogo from "../../assets/Logo/BrainFlix-logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <a href="/" className="nav__logo">
            <img className="nav__logo-image" src={brainFixLogo} alt="" />
          </a>
          <div className="nav__items">
            <label>
              <input className="nav__search" type="text" placeholder="Search" />
            </label>
            <Button text="Upload" class="nav__button" />
            <img
              src={profileImage}
              className="nav__profile-picture"
              alt="profile avatar"
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
