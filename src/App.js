import "./App.scss";
import { Component } from "react";
import detailedVideoList from "./data/video-details.json";
import videoList from "./data/videos.json";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Recommendation from "./components/Recommendation/Recommendation";

class App extends Component {
  state = {
    selectedMovie: detailedVideoList[0],
    detailedVideoList,
  };

  changeVideo = (videoId) => {
    this.setState({
      selectedMovie: detailedVideoList.find((video) => video.id === videoId),
    });

    window.scroll({ top: 0, behavior: "smooth" });
  };

  UnselectedMovieList = () => {
    return videoList.filter(
      (video) => video.id !== this.state.selectedMovie.id
    );
  };

  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero selectedMovie={this.state.selectedMovie} />
          <Info selectedMovie={this.state.selectedMovie} />
          <Recommendation
            movieList={this.UnselectedMovieList()}
            changeVideo={this.changeVideo}
          />
        </main>
      </>
    );
  }
}

export default App;
