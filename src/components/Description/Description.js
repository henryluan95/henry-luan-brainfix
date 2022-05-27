import "./Description.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import { formatTimestamp } from "../../utils/utilities";

function Description({ selectedMovie }) {
  return (
    <section className="description">
      <h2 className="description__title">{selectedMovie.title}</h2>
      <div className="highlight">
        <span className="highlight__artist">By {selectedMovie.channel}</span>
        <div className="highlight__views">
          <img
            className="highlight__views-icon"
            src={viewsIcon}
            alt="views icon"
          />
          <span className="highlight__views-count">{selectedMovie.views}</span>
        </div>
        <span className="highlight__date">
          {formatTimestamp(selectedMovie.timestamp)}
        </span>
        <div className="highlight__likes">
          <img
            className="highlight__likes-icon"
            src={likesIcon}
            alt="likes icon"
          />
          <span className="highlight__likes-count">{selectedMovie.likes}</span>
        </div>
      </div>
      <p className="highlight__text">{selectedMovie.description}</p>
    </section>
  );
}

export default Description;
