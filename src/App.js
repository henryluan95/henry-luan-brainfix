import "./App.scss";
import { Component } from "react";
import Home from "./pages/Home/Home";
import PageHeader from "./components/Navbar/Navbar";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos/:videoId" component={Home} />
          <Route path="/upload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
