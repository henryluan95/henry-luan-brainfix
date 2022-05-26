import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Recommendation from "./components/Recommendation/Recommendation";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Info />
        <Recommendation />
      </main>
    </>
  );
}

export default App;
