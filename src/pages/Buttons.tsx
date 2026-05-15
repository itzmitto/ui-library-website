import Header from "../components/Header";

const sidebarItems = [
  { label: "All", path: "/elements" },
  { label: "Buttons", path: "/elements/buttons", active: true },
  { label: "Checkboxes", path: "/elements/checkboxes" },
  { label: "Toggle switches", path: "/elements/toggle-switches" },
  { label: "Cards", path: "/elements/cards" },
  { label: "Loaders", path: "/elements/loaders" },
  { label: "Inputs", path: "/elements/inputs" },
  { label: "Radio buttons", path: "/elements/radio-buttons" },
  { label: "Forms", path: "/elements/forms" },
  { label: "Patterns", path: "/elements/patterns" },
  { label: "Tooltips", path: "/elements/tooltips" },
];

const buttonPreviews = [
  { id: 1, creator: "dexter-st", views: "17", copies: "12", preview: <button style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",border:"1px solid #444",color:"#fff",padding:"10px 24px",borderRadius:"6px",fontFamily:"serif",letterSpacing:"2px",cursor:"pointer"}}>Play</button> },
  { id: 2, creator: "Kabak", views: "22K", copies: "477", preview: <button style={{background:"transparent",border:"2px solid #fff",color:"#fff",padding:"10px 28px",borderRadius:"4px",fontSize:"14px",letterSpacing:"1px",cursor:"pointer"}}>Button</button> },
  { id: 3, creator: "ShadowShahriar", views: "38K", copies: "900", preview: <button style={{background:"transparent",border:"2px solid #a855f7",color:"#a855f7",padding:"10px 24px",borderRadius:"999px",fontSize:"14px",cursor:"pointer"}}>Hover me!</button> },
  { id: 4, creator: "eirikvold", views: "25K", copies: "1.1K", preview: <button style={{background:"#60a5fa",border:"none",color:"#fff",padding:"10px 24px",borderRadius:"999px",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"}}><span>✈</span> Send</button> },
  { id: 5, creator: "JsGrisales", views: "21K", copies: "175", preview: <button style={{background:"transparent",border:"2px solid #2dd4bf",color:"#2dd4bf",padding:"10px 28px",borderRadius:"4px",fontSize:"14px",cursor:"pointer"}}>Subscribe</button> },
  { id: 6, creator: "sekalking", views: "20K", copies: "618", preview: <button style={{background:"transparent",border:"1px solid #555",color:"#ccc",padding:"10px 28px",borderRadius:"4px",fontSize:"14px",cursor:"pointer"}}>Hover Me</button> },
];

export default function Buttons() {
  return (
    <div>
      <Header />

      <div className="page-layout">
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

        <main className="main-content">
          <div className="page-header">
            <h1>Buttons</h1>
            <p>Open-Source buttons made with CSS or Tailwind</p>
          </div>

          <div className="filter-bar">
            <span className="filter-tag">#neumorphism</span>
            <span className="filter-tag">#3d</span>
            <span className="filter-tag">#gradient</span>
            <div className="filter-divider" />
            <button className="filter-btn filter-btn--active">All</button>
            <button className="filter-btn">Tailwind</button>
            <button className="filter-btn">CSS</button>
          </div>

          <div className="component-grid">
            {buttonPreviews.map((item) => (
              <div key={item.id} className="component-card">
                <div className="component-preview">
                  {item.preview}
                </div>
                <div className="component-meta">
                  <span className="component-creator">{item.creator}</span>
                  <div className="component-stats">
                    <span>{item.views} views</span>
                    <span>{item.copies} copies</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}