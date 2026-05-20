import Header from "../components/Header";
import { forms } from "../data/componentsData";
import "../styling/AllForms.css";
import "../styling/Forms.css";

const sidebarItems = [
    { label: "All", path: "/elements" },
    { label: "Buttons", path: "/elements/buttons" },
    { label: "Checkboxes", path: "/elements/checkboxes" },
    { label: "Toggleswitches", path: "/elements/toggleswitches" },
    { label: "Cards", path: "/elements/cards" },
    { label: "Loaders", path: "/elements/loaders" },
    { label: "Inputs", path: "/elements/inputs" },
    { label: "Radiobuttons", path: "/elements/radiobuttons" },
    { label: "Forms", path: "/elements/forms", active: true },
    { label: "Patterns", path: "/elements/patterns" },
];

export default function Forms() {
    return (
        <div className="allpage">
            <Header />
            <div className="alllayout">
                <aside className="side-bar">
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
                <main className="allmain">
                    <div className="allheader">
                        <h1>Forms</h1>
                        <p>Open-Source forms made with CSS or Tailwind</p>
                    </div>
                    <div className="allgrid">
                        {forms.map((item) => (
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