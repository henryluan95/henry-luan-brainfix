import "./Info.scss";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";

function Info({ selectedMovie }) {
  return (
    <section className="info">
      <Description selectedMovie={selectedMovie} />
      <Comments selectedMovie={selectedMovie} />
    </section>
  );
}

export default Info;
