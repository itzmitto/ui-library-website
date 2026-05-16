import Header from "../components/Header";
import { buttons } from "../data/componentsData";
import "./All.css";
import "./Buttons.css";

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
];

export default function Buttons() {
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
                        <h1>Buttons</h1>
                        <p>Open-Source buttons made with CSS or Tailwind</p>
                    </div>

                    <div className="all-grid">
                        {buttons.map((item) => (
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