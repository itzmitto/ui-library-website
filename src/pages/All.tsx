import Header from "../components/Header";
import "./All.css";

const components = [
  {
    id: 1,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 2,
    name: "Outline Button",
    preview: (
      <button className="prev-btn-outline">Hover me!</button>
    ),
  },
  {
    id: 3,
    name: "Pill Button",
    preview: (
      <button className="prev-btn-pill">Subscribe</button>
    ),
  },
  {
    id: 4,
    name: "Ghost Button",
    preview: (
      <button className="prev-btn-ghost">Learn more</button>
    ),
  },
  {
    id: 5,
    name: "Checkbox",
    preview: (
      <div className="prev-checkbox-group">
        <label className="prev-checkbox"><input type="checkbox" defaultChecked /><span>Option 1</span></label>
        <label className="prev-checkbox"><input type="checkbox" /><span>Option 2</span></label>
        <label className="prev-checkbox"><input type="checkbox" /><span>Option 3</span></label>
      </div>
    ),
  },
  {
    id: 6,
    name: "Toggle Switch",
    preview: (
      <div className="prev-toggle-group">
        <label className="prev-toggle"><input type="checkbox" defaultChecked /><span className="prev-toggle-track"><span className="prev-toggle-thumb" /></span></label>
        <label className="prev-toggle"><input type="checkbox" /><span className="prev-toggle-track"><span className="prev-toggle-thumb" /></span></label>
      </div>
    ),
  },
  {
    id: 7,
    name: "Profile Card",
    preview: (
      <div className="prev-card">
        <div className="prev-card-avatar">A</div>
        <div className="prev-card-name">Andre</div>
        <div className="prev-card-sub">UI Developer</div>
        <button className="prev-card-btn">Follow</button>
      </div>
    ),
  },
  {
    id: 8,
    name: "Pricing Card",
    preview: (
      <div className="prev-pricing">
        <div className="prev-pricing-label">Pro</div>
        <div className="prev-pricing-price">$9<span>/mo</span></div>
        <button className="prev-pricing-btn">Sign up</button>
      </div>
    ),
  },
  {
    id: 9,
    name: "Spinner Loader",
    preview: (
      <div className="prev-spinner" />
    ),
  },
  {
    id: 10,
    name: "Dots Loader",
    preview: (
      <div className="prev-dots">
        <span /><span /><span />
      </div>
    ),
  },
  {
    id: 11,
    name: "Progress Bar",
    preview: (
      <div className="prev-progress-wrap">
        <div className="prev-progress-bar" />
      </div>
    ),
  },
  {
    id: 12,
    name: "Text Input",
    preview: (
      <input className="prev-input" type="text" placeholder="Type something..." />
    ),
  },


  // hier verder gaan met meer componenten toevoegen
  {
    id: 13,
    name: "Button1",
    preview: (
      <button className="Button1">Get started</button>
    ),
  },
  {
    id: 14,
    name: "Button2",
    preview: (
      <button className="Button2">Get started</button>
    ),
  },
  {
    id: 15,
    name: "Button3",
    preview: (
       <button className="Button3">Get started</button>
    ),
  },
  {
    id: 16,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 17,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 18,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 19,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 20,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 21,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 22,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 23,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 24,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 25,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },
  {
    id: 26,
    name: "Gradient Button",
    preview: (
      <button className="prev-btn-gradient">Get started</button>
    ),
  },




];

export default function All() {
  return (
    <div className="all-page">
      <Header />

      <div className="all-layout">
        <aside className="sidebar">
          <a href="/elements" className="sidebar-item sidebar-item--active">All</a>
          <a href="/elements/buttons" className="sidebar-item">Buttons</a>
          <a href="/elements/checkboxes" className="sidebar-item">Checkboxes</a>
          <a href="/elements/toggle-switches" className="sidebar-item">Toggle switches</a>
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
            {components.map((item) => (
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