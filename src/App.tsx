import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Buttons from "./pages/Buttons";
import All from "./pages/All";
import Checkboxes from "./pages/Checkboxes";
import Cards from "./pages/Cards";
import Loaders from "./pages/Loaders";
import Toggleswitches from "./pages/Toggleswitches";
import Inputs from "./pages/Inputs";
import RadioButtons from "./pages/RadioButtons";
import Forms from "./pages/Forms";
import Patterns from "./pages/Patterns";
import Tooltips from "./pages/Tooltips";
import Navbar from "./pages/Navbar";
import "./App.css";
import "./styling/media.css";

function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">My Library of Open-Source UI</h1>
          <p className="hero-description">
            Community-built library of UI elements. Copy as HTML/CSS.
          </p>
          <Link to="/" className="hero-button">
            Explore Library →
          </Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements/buttons" element={<Buttons />} />
        <Route path="/elements" element={<All />} />
        <Route path="/elements/checkboxes" element={<Checkboxes />} />
        <Route path="/elements/cards" element={<Cards />} />
        <Route path="/elements/loaders" element={<Loaders />} />
        <Route path="/elements/toggleswitches" element={<Toggleswitches />} />
        <Route path="/elements/inputs" element={<Inputs />} />
        <Route path="/elements/radio-buttons" element={<RadioButtons />} />
        <Route path="/elements/forms" element={<Forms />} />
        <Route path="/elements/patterns" element={<Patterns />} />
        <Route path="/elements/tooltips" element={<Tooltips />} />
        <Route path="/elements/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
