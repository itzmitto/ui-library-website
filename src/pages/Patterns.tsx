import Header from "../components/Header";
import { patterns } from "../data/componentsData";
import "./All.css";
import "../styling/Patterns.css";

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
    { label: "Patterns", path: "/elements/patterns", active: true },
        { label: "Tooltips", path: "/elements/tooltips" },

        { label: "Navbar", path: "/elements/Navbar" },

];

export default function Patterns() {
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
                        <h1>Patterns</h1>
                        <p>Open-Source CSS background patterns</p>
                    </div>
                    <div className="allgrid">
                        {patterns.map((item) => (
                            <div key={item.id} className="allcard">
                                <div className="allcard-preview">{item.preview}</div>
                                <div className="allcard-footer">
                                    <span className="allcard-name">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}