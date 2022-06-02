import "./Info.scss";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";

function Info({ selectedMovie, fetchVideo }) {
  return (
    <div className="info">
      <Description selectedMovie={selectedMovie} />
      <Comments comments={selectedMovie.comments} fetchVideo={fetchVideo} />
    </div>
  );
}

export default Info;
