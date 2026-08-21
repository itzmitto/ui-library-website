import { useState } from "react";
import Header from "../components/Header";
import { navbar } from "../data/componentsData";
import ComponentModal from "../components/ComponentModal";
import "../styling/AllNavbar.css";
import "../styling/Navbar.css";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggleswitches", path: "/elements/toggleswitches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders" },
  { label: "Inputs", path: "/elements/inputs" },
  { label: "Radio-buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms" },
  { label: "Patterns", path: "/elements/patterns" },
  { label: "Tooltips", path: "/elements/tooltips" },
  { label: "Navbar", path: "/elements/navbar", active: true },
    { label: "Logins", path: "/elements/logins" }

];

export default function Navbar() {
  const [selected, setSelected] = useState<typeof navbar[0] | null>(null);

  return (  
    <div className="navbar-page">
      <Header />
      <div className="navbar-layout">
        <aside className="navbar-sidebar">
          {sidebarItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`navbar-sidebar-item ${
                item.active ? "navbar-sidebar-item--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </aside>
        <main className="navbar-main">
          <div className="navbar-header">
            <h1>Navbar</h1>
            <p>Open-Source Navbar made with CSS or Tailwind</p>
          </div>
          <div className="navbar-grid">
            {navbar.map((item) => (
              <div
                key={item.id}
                className="navbar-card"
                onClick={() => setSelected(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="navbar-card-preview">
                  {item.preview}
                </div>
                <div className="navbar-card-footer">
                  <span className="navbar-card-name">
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
    </div>
  );
}