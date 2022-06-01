import "./Recommendation.scss";
import { Link } from "react-router-dom";

function Recommendation({ movieList, changeVideo }) {
  return (
    <section className="recommendation section">
      <h4 className="recommendation__title">NEXT VIDEOS</h4>
      <div className="recommendation__videos">
        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              className="recommendation__video"
              to={`/videos/${movie.id}`}
              // onClick={() => changeVideo(movie.id)}
            >
              <img
                className="recommendation__video-thumbnail"
                src={movie.image}
                alt={`Video of ${movie.title}`}
              />
              <div className="recommendation__video-info info">
                <p className="info__title">{movie.title}</p>
                <span className="info__artist">{movie.channel}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
