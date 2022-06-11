import "./PageHeader.scss";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import brainFixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";

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
            <LinkButton
              text="Upload"
              icon={uploadIcon}
              className="nav__button"
              path="/upload"
            />
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
