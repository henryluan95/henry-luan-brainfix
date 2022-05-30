import "./App.scss";
import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { VideoUploadPage } from "./pages/VideoUploadPage/VideoUploadPage";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        {/* <Home /> */}
        <VideoUploadPage />
      </>
    );
  }
}

export default App;
