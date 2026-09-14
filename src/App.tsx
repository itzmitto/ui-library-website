import { useEffect, useRef, useState } from "react";
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

const features = [
  {
    icon: "ri-flashlight-line",
    title: "Modern Design",
    description: "Clean and modern components.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Copy & Use",
    description: "Just copy the HTML/CSS.",
  },
  {
    icon: "ri-group-line",
    title: "Community Driven",
    description: "Built by developers, for developers.",
  },
  {
    icon: "ri-heart-3-line",
    title: "Open Source",
    description: "Free to use. Forever.",
  },
];

const stats = [
  {
    icon: "ri-box-3-line",
    value: "3000+",
    label: "Components",
  },
  {
    icon: "ri-stack-line",
    value: "50+",
    label: "Categories",
  },
  {
    icon: "ri-code-s-slash-line",
    value: "HTML / CSS",
    label: "Ready to use",
  },
  {
    icon: "ri-star-line",
    value: "100%",
    label: "Open Source",
  },
];

const elementRoutes = [
  {
    name: "All Components",
    path: "/elements",
    icon: "ri-grid-fill",
  },
  {
    name: "Buttons",
    path: "/elements/buttons",
    icon: "ri-cursor-line",
  },
  {
    name: "Checkboxes",
    path: "/elements/checkboxes",
    icon: "ri-checkbox-line",
  },
  {
    name: "Toggle Switches",
    path: "/elements/toggleswitches",
    icon: "ri-toggle-line",
  },
  {
    name: "Cards",
    path: "/elements/cards",
    icon: "ri-layout-grid-line",
  },
  {
    name: "Loaders",
    path: "/elements/loaders",
    icon: "ri-loader-4-line",
  },
  {
    name: "Inputs",
    path: "/elements/inputs",
    icon: "ri-input-field",
  },
  {
    name: "Radio Buttons",
    path: "/elements/radio-buttons",
    icon: "ri-radio-button-line",
  },
  {
    name: "Forms",
    path: "/elements/forms",
    icon: "ri-file-list-3-line",
  },
  {
    name: "Patterns",
    path: "/elements/patterns",
    icon: "ri-shape-line",
  },
  {
    name: "Tooltips",
    path: "/elements/tooltips",
    icon: "ri-message-2-line",
  },
  {
    name: "Navbars",
    path: "/elements/navbar",
    icon: "ri-menu-line",
  },
  {
    name: "Logins",
    path: "/elements/logins",
    icon: "ri-login-box-line",
  },
  {
    name: "Dropdowns",
    path: "/elements/dropdowns",
    icon: "ri-arrow-down-s-square-line",
  },
  {
    name: "Modals",
    path: "/elements/modals",
    icon: "ri-window-line",
  },
  {
    name: "Alerts",
    path: "/elements/alerts",
    icon: "ri-notification-3-line",
  },
  {
    name: "Badges",
    path: "/elements/badges",
    icon: "ri-price-tag-3-line",
  },
  {
    name: "Avatars",
    path: "/elements/avatars",
    icon: "ri-user-3-line",
  },
  {
    name: "Tabs",
    path: "/elements/tabs",
    icon: "ri-folder-line",
  },
  {
    name: "Breadcrumbs",
    path: "/elements/breadcrumbs",
    icon: "ri-arrow-right-s-line",
  },
  {
    name: "Pagination",
    path: "/elements/pagination",
    icon: "ri-more-line",
  },
  {
    name: "Skeletons",
    path: "/elements/skeletons",
    icon: "ri-layout-masonry-line",
  },
  {
    name: "Sidebars",
    path: "/elements/sidebars",
    icon: "ri-sidebar-fold-line",
  },
  {
    name: "Hero Sections",
    path: "/elements/hero-sections",
    icon: "ri-layout-top-line",
  },
  {
    name: "iPhone",
    path: "/elements/iphone",
    icon: "ri-smartphone-line",
  },
  {
    name: "Toasts",
    path: "/elements/toasts",
    icon: "ri-notification-badge-line",
  },
  {
    name: "Accordions",
    path: "/elements/accordions",
    icon: "ri-expand-up-down-line",
  },
  {
    name: "Carousels",
    path: "/elements/carousels",
    icon: "ri-carousel-view",
  },
  {
    name: "Progress Bars",
    path: "/elements/progress-bars",
    icon: "ri-progress-5-line",
  },
  {
    name: "Tables",
    path: "/elements/tables",
    icon: "ri-table-line",
  },
];

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const isElementsOpen = isHovered || isPinned;

  function clearHoverTimeout() {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }

  function openDropdownHover() {
    clearHoverTimeout();
    setIsHovered(true);
  }

  function closeDropdownHover() {
    clearHoverTimeout();

    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
      hoverTimeoutRef.current = null;
    }, 250);
  }

  function closeDropdown() {
    clearHoverTimeout();
    setIsHovered(false);
    setIsPinned(false);
  }

  function toggleDropdown() {
    clearHoverTimeout();
    setIsPinned((current) => !current);
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        clearHoverTimeout();
        setIsHovered(false);
        setIsPinned(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearHoverTimeout();
        setIsHovered(false);
        setIsPinned(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);

      if (hoverTimeoutRef.current !== null) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header-inner">
          <Link to="/" className="home-logo">
            <span className="home-logo-mark">
              <i className="ri-sparkling-2-fill"></i>
            </span>

            <span className="home-logo-text">André&apos;s UI library</span>
          </Link>

          <nav className="home-nav">
            <div
              ref={dropdownRef}
              className="home-nav-dropdown"
              onMouseEnter={openDropdownHover}
              onMouseLeave={closeDropdownHover}
            >
              <button
                type="button"
                className={`home-nav-link home-nav-button ${
                  isElementsOpen ? "home-nav-link--active" : ""
                }`}
                onClick={toggleDropdown}
                aria-expanded={isElementsOpen}
              >
                <span>Elements</span>

                <i
                  className={`ri-arrow-down-s-line home-nav-arrow ${
                    isElementsOpen ? "home-nav-arrow--open" : ""
                  }`}
                ></i>
              </button>

              <div
                className={`home-elements-dropdown ${
                  isElementsOpen ? "home-elements-dropdown--open" : ""
                }`}
                onMouseEnter={openDropdownHover}
                onMouseLeave={closeDropdownHover}
              >
                <div className="home-dropdown-header">
                  <div>
                    <span className="home-dropdown-eyebrow">
                      COMPONENT LIBRARY
                    </span>

                    <h3>Browse Elements</h3>
                  </div>

                  <Link
                    to="/elements"
                    className="home-dropdown-view-all"
                    onClick={closeDropdown}
                  >
                    View all
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>

                <div className="home-dropdown-grid">
                  {elementRoutes.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="home-dropdown-item"
                      onClick={closeDropdown}
                    >
                      <span className="home-dropdown-icon">
                        <i className={item.icon}></i>
                      </span>

                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <Link to="/elements" className="home-header-button">
            Get Started
          </Link>
        </div>
      </header>

      <main className="home-main">
        <section className="hero">
          <div className="hero-side hero-side--left">
            <div className="hero-side-line"></div>

            <p className="hero-side-title">
              BUILD
              <br />
              BEAUTIFUL
              <br />
              FASTER
            </p>

            <div className="hero-side-line short"></div>

            <p className="hero-side-text">
              SAME BUILDERS.
              <br />A BRIGHTER WEB.
            </p>
          </div>

          <div className="hero-side hero-side--right">
            <div className="hero-side-line"></div>

            <p className="hero-side-title">
              OPEN
              <br />
              SOURCE
              <br />
              FOR A BRIGHTER
              <br />
              WEB
            </p>

            <div className="hero-side-line short"></div>

            <p className="hero-side-text">
              UI COMPONENTS
              <br />
              FOR WHAT&apos;S NEXT.
            </p>
          </div>

          <div className="hero-content">
            <p className="hero-eyebrow">
              <span></span>
              OPEN SOURCE UI LIBRARY
              <span></span>
            </p>

            <h1 className="hero-title">
              My Library of Open
              <br />
              <span className="hero-title-highlight">Source UI</span>
            </h1>

            <p className="hero-description">
              Community-built library of UI elements. Copy as HTML/CSS
              <br />
              and build beautiful interfaces faster.
            </p>

            <Link to="/elements" className="hero-button">
              <span>Explore Library</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          <div className="hero-features">
            {features.map((feature) => (
              <article key={feature.title} className="hero-feature-card">
                <div className="hero-feature-icon">
                  <i className={feature.icon}></i>
                </div>

                <div className="hero-feature-info">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="stats-section">
            <div className="stats-container">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
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
          </section>
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
