import Header from "../components/Header";
import { checkboxes } from "../data/componentsData";
import "../pages/All.css";

const sidebarItems = [ /* zelfde lijst */ ];

export default function Checkboxes() {
  return (
    <div>
      <Header />
      <div className="page-layout">
        <aside className="sidebar">
          {sidebarItems.map((item) => (
            <a key={item.path} href={item.path} className={`sidebar-item ${item.active ? "sidebar-item--active" : ""}`}>
              {item.label}
            </a>
          ))}
        </aside>
        <main className="main-content">
          <div className="page-header">
            <h1>Checkboxes</h1>
            <p>Open-Source checkboxes made with CSS or Tailwind</p>
          </div>
          <div className="component-grid">
            {checkboxes.map((item) => (
              <div key={item.id} className="component-card">
                <div className="component-preview">{item.preview}</div>
                <div className="component-meta"><span className="component-name">{item.name}</span></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}