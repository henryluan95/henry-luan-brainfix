import "./App.scss";
import { Component } from "react";
import Home from "./pages/Home/Home";
import PageHeader from "./components/Navbar/Navbar";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    isUploaded: false,
  };

  //Create a method to close Alert Box
  setAlert = () => {
    this.setState({
      isUploaded: !this.state.isUploaded,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Home
                setAlert={this.setAlert}
                {...routerProps}
                isUploaded={this.state.isUploaded}
              />
            )}
          />
          <Route path="/videos/:videoId" component={Home} />
          <Route
            path="/upload"
            render={(routerProps) => (
              <VideoUploadPage setAlert={this.setAlert} {...routerProps} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
