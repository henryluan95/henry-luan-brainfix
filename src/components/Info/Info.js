import "./Info.scss";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";

//Component that renders out description and comments section
function Info({ selectedMovie, fetchVideo }) {
  return (
    <div className="info">
      <Description selectedMovie={selectedMovie} />
      <Comments
        comments={selectedMovie.comments}
        videoId={selectedMovie.id}
        fetchVideo={fetchVideo}
      />
    </div>
  );
}

export default Info;
