import React from "react";
import "./Description.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

class Description extends React.Component {
  render() {
    return (
      <section className="description">
        <h2 className="description__title">BMX Rampage: 2021 Highlights</h2>
        <div className="highlight">
          <span className="highlight__artist">By Red Cow</span>
          <div className="highlight__views">
            <img
              className="highlight__views-icon"
              src={viewsIcon}
              alt="views icon"
            />
            <span className="highlight__views-count">1,001,023</span>
          </div>
          <span className="highlight__date">07/11/2021</span>
          <div className="highlight__likes">
            <img
              className="highlight__likes-icon"
              src={likesIcon}
              alt="likes icon"
            />
            <span className="highlight__likes-count">110,985</span>
          </div>
        </div>
        <p className="highlight__text">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </section>
    );
  }
}

export default Description;
