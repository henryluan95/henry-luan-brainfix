import React from "react";
import "./Recommendation.scss";

class Recommendation extends React.Component {
  render() {
    return (
      <section className="recommendation">
        <h4 className="recommendation__title">NEXT VIDEOS</h4>
        <div className="recommendation__videos">
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/5qyCZrD.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Become A Travel Pro In One Easy lesson
              </p>
              <span className="info__artist">Todd Welch</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/yFS8EBr.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Les Houches The Hidden Gem Of The Chamonix
              </p>
              <span className="info__artist">Cornelia Blair</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/MMDMgD7.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Travel Health Useful Medical Information For
              </p>
              <span className="info__artist">Glen Harper</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/ibLw5q5.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Cheap Airline Tickets Great Ways To Save
              </p>
              <span className="info__artist">Emily Harper</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/7rD6Mf6.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Take A Romantic Break In A Boutique Hotel
              </p>
              <span className="info__artist">Ethan Owen</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/0hi3N4B.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">Choose the Perfect Accommodations</p>
              <span className="info__artist">Lydia Perez</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/DDJNZNw.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">
                Become A Travel Pro In One Easy lesson
              </p>
              <span className="info__artist">Timothy Austin</span>
            </div>
          </div>
          {/* single video */}
          <div className="recommendation__video">
            <img
              className="recommendation__video-thumbnail"
              src="https://i.imgur.com/i6S8m7I.jpg"
              alt="video thumbnail"
            />
            <div className="recommendation__video-info info">
              <p className="info__title">Train Travel On Track For Safety</p>
              <span className="info__artist">Scotty Cranmer</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommendation;
