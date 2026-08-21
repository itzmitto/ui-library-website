import { useState } from "react";
import Header from "../components/Header";
import { loaders } from "../data/componentsData";
import ComponentModal from "../components/ComponentModal";
import "./All.css";
import "../styling/Loaders.css";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggleswitches", path: "/elements/toggleswitches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders", active: true },
  { label: "Inputs", path: "/elements/inputs" },
  { label: "Radio-buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms" },
  { label: "Patterns", path: "/elements/patterns" },
  { label: "Tooltips", path: "/elements/tooltips" },
  { label: "Navbar", path: "/elements/navbar" },
    { label: "Logins", path: "/elements/logins" }

];

export default function Loaders() {
  const [selected, setSelected] = useState<typeof loaders[0] | null>(null);

  return (
    <div className="all-page">
      <Header />
      <div className="all-layout">
        <aside className="sidebar">
          {sidebarItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`sidebar-item ${item.active ? "sidebar-item--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </aside>
        <main className="all-main">
          <div className="all-header">
            <h1>Loaders</h1>
            <p>Open-Source loaders made with CSS or Tailwind</p>
          </div>
          <div className="all-grid">
            {loaders.map((item) => (
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
    </div>
  );
}