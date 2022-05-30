import "./App.scss";
import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <Home />
      </>
    );
  }
}

export default App;
