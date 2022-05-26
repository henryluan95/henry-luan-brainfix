import "./Info.scss";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";

function Info({ selectedMovie }) {
  return (
    <div className="info">
      <Description selectedMovie={selectedMovie} />
      <Comments selectedMovie={selectedMovie} />
    </div>
  );
}

export default Info;
