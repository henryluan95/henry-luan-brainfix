import "./App.scss";
import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video-upload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
