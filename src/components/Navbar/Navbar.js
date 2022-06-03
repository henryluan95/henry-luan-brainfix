import "./Navbar.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import brainFixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

//Component that renders out navbar
function PageHeader() {
  return (
    <header>
      <nav>
        <div className="nav section">
          <Link to="/" className="nav__logo">
            <img
              className="nav__logo-image"
              src={brainFixLogo}
              alt="BrainFlix logo"
            />
          </Link>
          <div className="nav__items">
            <label className="nav__search-label">
              <input className="nav__search" type="text" placeholder="Search" />
            </label>
            <Link to="/upload" className="nav__button">
              <Button
                text="Upload"
                className="nav__button-component"
                icon={uploadIcon}
              />
            </Link>
            <img
              src={profileImage}
              className="nav__profile-picture"
              alt="Mohan Murgue"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
