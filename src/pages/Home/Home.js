import "./Home.scss";
import { Component } from "react";
import detailedVideoList from "../../data/video-details.json";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Recommendation from "../../components/Recommendation/Recommendation";
import axios from "axios";

const apiKey = "4e36f143-1113-4719-99e8-409707249a72";
const baseUrl = "https://project-2-api.herokuapp.com";
const getVideosUrl = baseUrl + "/videos?api_key=" + apiKey;

class Home extends Component {
  state = {
    selectedMovie: null,
    detailedVideoList: [],
  };

  componentDidMount() {
    //Get data and setState with acquired data
    axios
      .get(getVideosUrl)
      .then((response) => {
        this.setState({
          detailedVideoList: response.data,
        });

        //Check url on mount to display correct video
        const currentVideoId =
          this.props.match.params.videoId || detailedVideoList[0].id;

        this.fetchVideo(currentVideoId);
      })
      .catch((err) => console.error(err));
  }

  componentDidUpdate(prevProps) {
    const previousId = prevProps.match.params.videoId;
    const currentId = this.props.match.params.videoId;

    //Check to see if we switched url and display correct video
    if (previousId !== currentId) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (!currentId) {
        return this.fetchVideo(detailedVideoList[0].id);
      }

      this.fetchVideo(currentId);
    }
  }

  //Create a method to fetch matching id video
  fetchVideo = (videoId) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=4e36f143-1113-4719-99e8-409707249a72`
      )
      .then((response) =>
        this.setState({
          selectedMovie: response.data,
        })
      )
      .catch((err) => console.error(err));
  };

  //Create method to filter in all unselected videos
  UnselectedMovieList = () => {
    return this.state.detailedVideoList.filter(
      (video) => video.id !== this.state.selectedMovie.id
    );
  };

  render() {
    return (
      <>
        {/*Statement to handle loading time while fetching data*/}
        {!this.state.selectedMovie && <p>Loading..</p>}
        {/*Display data after fetching successfully*/}
        {this.state.selectedMovie && (
          <main>
            <Hero selectedMovie={this.state.selectedMovie} />
            <div className="main-content">
              <Info
                selectedMovie={this.state.selectedMovie}
                fetchVideo={this.fetchVideo}
              />
              <Recommendation movieList={this.UnselectedMovieList()} />
            </div>
          </main>
        )}
      </>
    );
  }
}

export default Home;

// This is how to change video while working with local data.
// if (prevProps.match.url !== this.props.match.url) {
//   this.props.match.params.videoId
//     ? this.changeVideo(this.props.match.params.videoId)
//     : this.setState({
//         selectedMovie: detailedVideoList[0],
//       });
// }
