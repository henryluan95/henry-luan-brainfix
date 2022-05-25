import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Info />
      </main>
      <div className="test-block"></div>
    </>
  );
}

export default App;
