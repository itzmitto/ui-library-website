import { useState } from "react";
import Header from "../components/Header";
import { inputs } from "../data/componentsData";
import { Link } from "react-router-dom";
import ComponentModal from "../components/ComponentModal";
import "./All.css";
import "../styling/Inputs.css";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons" },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggleswitches", path: "/elements/toggleswitches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders" },
  { label: "Inputs", path: "/elements/inputs", active: true },
  { label: "Radio-buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms" },
  { label: "Patterns", path: "/elements/patterns" },
  { label: "Tooltips", path: "/elements/tooltips" },
  { label: "Navbar", path: "/elements/navbar" }
];

export default function Inputs() {
  const [selected, setSelected] = useState<typeof inputs[0] | null>(null);

  return (
    <div className="all-page">
      <Header />
      <div className="all-layout">
        <aside className="sidebar">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${item.active ? "sidebar-item--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </aside>
        <main className="all-main">
          <div className="all-header">
            <h1>Inputs</h1>
            <p>Open-Source inputs made with CSS or Tailwind</p>
          </div>
          <div className="all-grid">
            {inputs.map((item) => (
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