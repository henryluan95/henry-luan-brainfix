import React from "react";
import "./Navbar.scss";
import image from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <a href="/" className="nav__logo"></a>
          <div className="nav__items">
            <label>
              <input className="nav__search" type="text" placeholder="search" />
            </label>
            <Button text="Upload" />
            <img
              src={image}
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
