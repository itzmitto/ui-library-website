import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Buttons from "./pages/Buttons";

function Home() {
  return (
    <div>
      <Header />
      <section id="center">
        <div className="container">
          <div className="hero">
            <h1 className="hero-title">
              The Largest Library<br />of Open-Source UI
            </h1>
          </div>
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
        {/* Hier meer buttons enz. later toeeovengen wanneer ik ze heb  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;