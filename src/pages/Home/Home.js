import "./Home.scss";
import { Component } from "react";
import detailedVideoList from "../../data/video-details.json";
import videoList from "../../data/videos.json";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Recommendation from "../../components/Recommendation/Recommendation";

class Home extends Component {
  state = {
    selectedMovie: detailedVideoList[0],
    detailedVideoList,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.match);
    console.log(this.props.match);
    // if (prevProps.match.url !== this.props.match.url) {
    //   this.props.match.params.videoId
    //     ? this.changeVideo(this.props.match.params.videoId)
    //     : this.setState({
    //         selectedMovie: detailedVideoList[0],
    //       });
    // }
  }

  //Create a method to change video
  changeVideo = (videoId) => {
    this.setState({
      selectedMovie: detailedVideoList.find((video) => video.id === videoId),
    });

    window.scroll({ top: 0, behavior: "smooth" });
  };

  //Create method to filter in all unselected videos
  UnselectedMovieList = () => {
    return videoList.filter(
      (video) => video.id !== this.state.selectedMovie.id
    );
  };

  render() {
    return (
      <>
        <main>
          <Hero selectedMovie={this.state.selectedMovie} />
          <div className="main-content">
            <Info selectedMovie={this.state.selectedMovie} />
            <Recommendation
              movieList={this.UnselectedMovieList()}
              changeVideo={this.changeVideo}
            />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
