import Header from "../components/Header";
import { allComponents } from "../data/componentsData";   
import "./All.css";

export default function All() {
  return (
    <div className="all-page">
      <Header />

      <div className="all-layout">
        <aside className="sidebar">
          <a href="/elements" className="sidebar-item sidebar-item--active">All</a>
          <a href="/elements/buttons" className="sidebar-item">Buttons</a>
          <a href="/elements/checkboxes" className="sidebar-item">Checkboxes</a>
          <a href="/elements/toggleswitches" className="sidebar-item">Toggleswitches</a>
          <a href="/elements/cards" className="sidebar-item">Cards</a>
          <a href="/elements/loaders" className="sidebar-item">Loaders</a>
          <a href="/elements/inputs" className="sidebar-item">Inputs</a>
          <a href="/elements/radio-buttons" className="sidebar-item">Radio buttons</a>
          <a href="/elements/forms" className="sidebar-item">Forms</a>
          <a href="/elements/patterns" className="sidebar-item">Patterns</a>
        </aside>

        <main className="all-main">
          <div className="all-header">
            <h1>Browse all</h1>
            <p>Open-Source UI elements made with CSS or Tailwind</p>
          </div>

          <div className="all-grid">
            {allComponents.map((item) => (         
              <div key={item.id} className="all-card">
                <div className="all-card-preview">
                  {item.preview}
                </div>
                <div className="all-card-footer">
                  <span className="all-card-name">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}