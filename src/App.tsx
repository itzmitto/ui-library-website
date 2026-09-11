import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import Logins from "./pages/Logins";
import Dropdowns from "./pages/Dropdowns";
import Modals from "./pages/Modals";
import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Avatars from "./pages/Avatars";
import Tabs from "./pages/Tabs";
import Breadcrumbs from "./pages/Breadcrumbs";
import Pagination from "./pages/Pagination";
import Skeletons from "./pages/Skeletons";
import Sidebars from "./pages/Sidebars";
import HeroSections from "./pages/HeroSections";
import Iphone from "./pages/Iphone";
import Toasts from "./pages/Toasts";
import Accordions from "./pages/Accordions";
import Carousels from "./pages/Carousels";
import ProgressBars from "./pages/ProgressBars";
import Tables from "./pages/Tables";
import "./App.css";
import "./styling/media.css";

const features = [
  {
    title: "Modern Design",
    description: "Clean and modern components.",
    icon: "ri-flashlight-line",
  },
  {
    title: "Copy & Use",
    description: "Just copy the HTML/CSS.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "Community Driven",
    description: "Built by developers, for developers.",
    icon: "ri-group-line",
  },
  {
    title: "Open Source",
    description: "Free to use. Forever.",
    icon: "ri-heart-3-line",
  },
];

const stats = [
  {
    value: "3000+",
    label: "Components",
    icon: "ri-box-3-line",
  },
  {
    value: "50+",
    label: "Categories",
    icon: "ri-stack-line",
  },
  {
    value: "HTML / CSS",
    label: "Ready to use",
    icon: "ri-code-s-slash-line",
  },
  {
    value: "100%",
    label: "Open Source",
    icon: "ri-star-line",
  },
];

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header-inner">
          <Link to="/" className="home-logo">
            <span className="home-logo-mark">
              <i className="ri-sparkling-2-line"></i>
            </span>
            <span className="home-logo-text">André's UI library</span>
          </Link>

          <div className="home-header-divider"></div>

          <nav className="home-nav">
            <Link
              to="/elements"
              className="home-nav-link home-nav-link--dropdown"
            >
              Elements
              <i className="ri-arrow-down-s-line"></i>
            </Link>
            <a href="#about" className="home-nav-link">
              About
            </a>
            <a href="#contact" className="home-nav-link">
              Contact
            </a>
          </nav>

          <Link to="/elements" className="home-header-button">
            Get Started
          </Link>
        </div>
      </header>

      <main className="home-main">
        <section className="hero">
          <div className="hero-side hero-side--left">
            <span>BUILD</span>
            <span>BEAUTIFUL</span>
            <span>FASTER</span>
            <i></i>
          </div>

          <div className="hero-side hero-side--right">
            <span>OPEN</span>
            <span>SOURCE</span>
            <span>FOR A BRIGHTER</span>
            <span>WEB</span>
            <i></i>
          </div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              OPEN SOURCE UI LIBRARY
            </div>

            <h1 className="hero-title">
              My Library of Open
              <br />
              <span>Source UI</span>
            </h1>

            <p className="hero-description">
              Community-built library of UI elements. Copy as HTML/CSS and
              build beautiful interfaces faster.
            </p>

            <Link to="/elements" className="hero-button">
              Explore Library
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="hero-features" id="about">
            {features.map((feature) => (
              <div className="hero-feature" key={feature.title}>
                <div className="hero-feature-icon">
                  <i className={feature.icon}></i>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="stats-section">
            <div className="stats-container">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>

                  <div className="stat-content">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section" id="contact">
            <div className="cta-eyebrow">
              READY TO START?
            </div>

            <h2>
              Build Something <span>Amazing</span>
            </h2>

            <p>
              Open source. Free forever. Made for developers.
            </p>

            <Link to="/elements" className="cta-button">
              Explore Library
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements" element={<All />} />
        <Route path="/elements/buttons" element={<Buttons />} />
        <Route path="/elements/checkboxes" element={<Checkboxes />} />
        <Route path="/elements/toggleswitches" element={<Toggleswitches />} />
        <Route path="/elements/cards" element={<Cards />} />
        <Route path="/elements/loaders" element={<Loaders />} />
        <Route path="/elements/inputs" element={<Inputs />} />
        <Route path="/elements/radio-buttons" element={<RadioButtons />} />
        <Route path="/elements/forms" element={<Forms />} />
        <Route path="/elements/patterns" element={<Patterns />} />
        <Route path="/elements/tooltips" element={<Tooltips />} />
        <Route path="/elements/navbar" element={<Navbar />} />
        <Route path="/elements/logins" element={<Logins />} />
        <Route path="/elements/dropdowns" element={<Dropdowns />} />
        <Route path="/elements/modals" element={<Modals />} />
        <Route path="/elements/alerts" element={<Alerts />} />
        <Route path="/elements/badges" element={<Badges />} />
        <Route path="/elements/avatars" element={<Avatars />} />
        <Route path="/elements/tabs" element={<Tabs />} />
        <Route path="/elements/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/elements/pagination" element={<Pagination />} />
        <Route path="/elements/skeletons" element={<Skeletons />} />
        <Route path="/elements/sidebars" element={<Sidebars />} />
        <Route path="/elements/hero-sections" element={<HeroSections />} />
        <Route path="/elements/iphone" element={<Iphone />} />
        <Route path="/elements/toasts" element={<Toasts />} />
        <Route path="/elements/accordions" element={<Accordions />} />
        <Route path="/elements/carousels" element={<Carousels />} />
        <Route path="/elements/progress-bars" element={<ProgressBars />} />
        <Route path="/elements/tables" element={<Tables />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;