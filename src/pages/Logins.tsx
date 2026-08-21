import { useState } from "react";
import Header from "../components/Header";
import { logins } from "../data/componentsData";
import ComponentModal from "../components/ComponentModal";
import "./All.css";
import "../styling/Logins.css";

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
  { label: "Navbar", path: "/elements/navbar" },
  { label: "Logins", path: "/elements/logins", active: true }
];

export default function Logins() {
  const [selected, setSelected] = useState<typeof logins[0] | null>(null);
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
            <h1>Logins</h1>
            <p>Open-Source login forms made with CSS or Tailwind</p>
       </div>
                <div className="allgrid">
                  {logins.map((item) => (
                    <div
                      key={item.id}
                      className="allcard"
                      onClick={() => setSelected(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="allcard-preview">
                        {item.preview}
                      </div>
                      <div className="allcard-footer">
                        <span className="allcard-name">
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