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

                    <div className="component-grid">


                        <div className="component-card">
                            <div className="component-preview">
                                <button style={{
                                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                                    border: "none",
                                    color: "#fff",
                                    padding: "10px 28px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    cursor: "pointer"
                                }}>
                                    Voorbeeld
                                </button>
                            </div>
                            <div className="component-meta">
                                <span className="component-name">Naam van je button</span>
                            </div>
                        </div>


                    </div>
                </main>
            </div>
        </div>
    );
}