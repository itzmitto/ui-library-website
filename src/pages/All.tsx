import { useState } from "react";
import Header from "../components/Header";
import { allComponents } from "../data/componentsData";
import ComponentModal from "../components/ComponentModal";
import "./All.css";

export default function All() {
  const [selected, setSelected] = useState<(typeof allComponents)[0] | null>(
    null,
  );

  return (
    <div className="all-page">
      <Header />

      <div className="all-layout">
        <aside className="sidebar">
          <a href="/elements" className="sidebar-item sidebar-item--active">
            All
          </a>

          <a href="/elements/buttons" className="sidebar-item">
            Buttons
          </a>

          <a href="/elements/checkboxes" className="sidebar-item">
            Checkboxes
          </a>

          <a href="/elements/toggleswitches" className="sidebar-item">
            Toggleswitches
          </a>

          <a href="/elements/cards" className="sidebar-item">
            Cards
          </a>

          <a href="/elements/loaders" className="sidebar-item">
            Loaders
          </a>

          <a href="/elements/inputs" className="sidebar-item">
            Inputs
          </a>

          <a href="/elements/radio-buttons" className="sidebar-item">
            Radio-buttons
          </a>

          <a href="/elements/forms" className="sidebar-item">
            Forms
          </a>

          <a href="/elements/patterns" className="sidebar-item">
            Patterns
          </a>

          <a href="/elements/tooltips" className="sidebar-item">
            Tooltips
          </a>

          <a href="/elements/navbar" className="sidebar-item">
            Navbar
          </a>

          <a href="/elements/logins" className="sidebar-item">
            Logins
          </a>

          <a href="/elements/dropdowns" className="sidebar-item">
            Dropdowns
          </a>

          <a href="/elements/modals" className="sidebar-item">
            Modals
          </a>

          <a href="/elements/alerts" className="sidebar-item">
            Alerts
          </a>

          <a href="/elements/badges" className="sidebar-item">
            Badges
          </a>

          <a href="/elements/avatars" className="sidebar-item">
            Avatars
          </a>

          <a href="/elements/tabs" className="sidebar-item">
            Tabs
          </a>

          <a href="/elements/breadcrumbs" className="sidebar-item">
            Breadcrumbs
          </a>

          <a href="/elements/pagination" className="sidebar-item">
            Pagination
          </a>

          <a href="/elements/skeletons" className="sidebar-item">
            Skeletons
          </a>

          <a href="/elements/sidebars" className="sidebar-item">
            Sidebars
          </a>

          <a href="/elements/hero-sections" className="sidebar-item">
            Hero Sections
          </a>
        </aside>

        <main className="all-main">
          <div className="all-header">
            <h1>Browse all</h1>
            <p>Open-Source UI elements made with CSS or Tailwind</p>
          </div>

          <div className="all-grid">
            {allComponents.map((item) => (
              <div
                key={item.id}
                className="all-card"
                onClick={() => setSelected(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="all-card-preview">
                  {item.preview}
                </div>

                <div className="all-card-footer">
                  <span className="all-card-name">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <ComponentModal
        item={selected}
        onClose={() => setSelected(null)}
      />

      <a
        href="/elements/navbar"
        className="floating-navbar-button"
      >
        Navbar →
      </a>
    </div>
  );
}