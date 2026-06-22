import Header from "../components/Header";
import { cards } from "../data/componentsData";
import "./All.css";
import "../styling/Cards.css";

 
const sidebarItems = [
    { label: "All", path: "/elements" },
    { label: "Buttons", path: "/elements/buttons" },
    { label: "Checkboxes", path: "/elements/checkboxes" },
    { label: "Toggleswitches", path: "/elements/toggleswitches" },
    { label: "Cards", path: "/elements/cards", active: true },
    { label: "Loaders", path: "/elements/loaders" },
    { label: "Inputs", path: "/elements/inputs" },
    { label: "Radio-buttons", path: "/elements/radio-buttons" },
    { label: "Forms", path: "/elements/forms" },
    { label: "Patterns", path: "/elements/patterns" },
        { label: "Tooltips", path: "/elements/tooltips" },

        { label: "Navbar", path: "/elements/Navbar" },

];

export default function Cards() {
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
                        <h1>Cards</h1>
                        <p>Open-Source cards made with CSS or Tailwind</p>
                    </div>
                    <div className="all-grid">
                        {cards.map((item) => (
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