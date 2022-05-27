import "./Navbar.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import brainFixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";

function Navbar() {
  return (
    <nav>
      <div className="nav">
        <a href="/" className="nav__logo">
          <img className="nav__logo-image" src={brainFixLogo} alt="" />
        </a>
        <div className="nav__items">
          <label className="nav__input-label">
            <input className="nav__search" type="text" placeholder="Search" />
          </label>
          <Button text="Upload" className="nav__button" icon={uploadIcon} />
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

export default Navbar;
