import "./Home.scss";
import { Component } from "react";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Recommendation from "../../components/Recommendation/Recommendation";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";
import AlertBox from "../../components/AlertBox/AlertBox";

class Home extends Component {
  state = {
    selectedMovie: null,
    detailedVideoList: [],
  };

  componentDidMount() {
    //Change page title
    document.title = "BrainFlix";

    //Get data and setState with acquired data
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        this.setState({
          detailedVideoList: response.data,
        });

        //Check url on mount to display correct video
        const currentVideoId =
          this.props.match.params.videoId || response.data[0].id;

        //fetch correct video based on url on mount
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
        return this.fetchVideo(this.state.detailedVideoList[0].id);
      }

      this.fetchVideo(currentId);
    }
  }

  //Create a method to fetch matching id video
  fetchVideo = (videoId) => {
    axios
      .get(`http://localhost:8080/videos/${videoId}`)
      .then((response) =>
        this.setState({
          selectedMovie: response.data,
        })
      )
      .catch((err) => console.error(err));
  };

  //Create a method to filter in all unselected videos
  UnselectedMovieList = () => {
    return this.state.detailedVideoList.filter(
      (video) => video.id !== this.state.selectedMovie.id
    );
  };

  render() {
    const { setAlert, isUploaded } = this.props;
    return (
      <>
        {/*Statement to handle loading time while fetching data*/}
        {!this.state.selectedMovie && <Loader />}
        {/*Display data after fetching successfully*/}
        {this.state.selectedMovie && (
          <main>
            {isUploaded && (
              <AlertBox
                alertText={"Video Uploaded Successfully"}
                setAlert={setAlert}
              />
            )}
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
