import React from "react";
import "./Navbar.scss";
import image from "../../assets/Images/Mohan-muruge.jpg";

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
            <button> UPLOAD</button>
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
