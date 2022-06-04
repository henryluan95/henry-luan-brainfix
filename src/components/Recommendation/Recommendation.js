import "./Recommendation.scss";
import { Link } from "react-router-dom";

//Component that renders out recommendation videos
function Recommendation({ movieList }) {
  return (
    <section className="recommendation section">
      <h3 className="recommendation__title">NEXT VIDEOS</h3>
      <div className="recommendation__videos">
        {movieList.map((movie) => {
          return (
            <Link
              key={movie.id}
              className="recommendation__video"
              to={`/videos/${movie.id}`}
            >
              <img
                className="recommendation__video-thumbnail"
                src={movie.image}
                alt={`Video of ${movie.title}`}
              />
              <div className="recommendation__video-info info">
                <h3 className="info__title">{movie.title}</h3>
                <h3 className="info__artist">{movie.channel}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
