import Header from "../components/Header";
import { checkboxes } from "../data/componentsData";
import "./All.css";
import "../styling/Checkboxes.css";

const sidebarItems = [
    { label: "All", path: "/elements" },
    { label: "Buttons", path: "/elements/buttons" },
    { label: "Checkboxes", path: "/elements/checkboxes", active: true },
    { label: "Toggleswitches", path: "/elements/toggleswitches" },
    { label: "Cards", path: "/elements/cards" },
    { label: "Loaders", path: "/elements/loaders" },
    { label: "Inputs", path: "/elements/inputs" },
    { label: "Radiobuttons", path: "/elements/radiobuttons" },
    { label: "Forms", path: "/elements/forms" },
    { label: "Patterns", path: "/elements/patterns" },
];

export default function Checkboxes() {
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
                        <h1>Checkboxes</h1>
                        <p>Open-Source checkboxes made with CSS or Tailwind</p>
                    </div>
                    <div className="all-grid">
                        {checkboxes.map((item) => (
                            <div key={item.id} className="all-card">
                                <div className="all-card-preview">{item.preview}</div>
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