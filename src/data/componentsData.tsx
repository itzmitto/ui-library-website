import "../pages/All.css";

export const buttons = [
    { id: 1, name: "Gradient Button", preview: <button className="prev-btn-gradient">Get started</button> },
    { id: 2, name: "Outline Button", preview: <button className="prev-btn-outline">Hover me!</button> },
    { id: 3, name: "Pill Button", preview: <button className="prev-btn-pill">Subscribe</button> },
    { id: 4, name: "Ghost Button", preview: <button className="prev-btn-ghost">Learn more</button> },
    { id: 13, name: "Button1", preview: <button className="Button1">Get started</button> },
    { id: 14, name: "Button2", preview: <button className="Button2">Get started</button> },
    { id: 15, name: "Button3", preview: <button className="Button3">Get started</button> },
    { id: 16, name: "3D Flip Button", preview: <button className="Button16"><a>Hover me</a></button> },
    { id: 17, name: "Rainbow Border", preview: <button className="Button17"><a>Hover me</a></button> },
    { id: 18, name: "Glow Button", preview: <button className="Button18"><a>Hover me</a></button> },
    { id: 19, name: "Gradient Glow", preview: <button className="Button19"><a>Hover me</a></button> },
    { id: 20, name: "Gold Button", preview: <button className="Button20"></button> },
];

export const checkboxes = [
    {
        id: 5, name: "Checkbox", preview: (
            <div className="prev-checkbox-group">
                <label className="prev-checkbox"><input type="checkbox" defaultChecked /><span>Option 1</span></label>
                <label className="prev-checkbox"><input type="checkbox" /><span>Option 2</span></label>
                <label className="prev-checkbox"><input type="checkbox" /><span>Option 3</span></label>
            </div>
        )
    },
];

export const toggles = [ 
    {
        id: 6, name: "Toggle Switch", preview: (
            <div className="prev-toggle-group">
                <label className="prev-toggle"><input type="checkbox" defaultChecked /><span className="prev-toggle-track"><span className="prev-toggle-thumb" /></span></label>
                <label className="prev-toggle"><input type="checkbox" /><span className="prev-toggle-track"><span className="prev-toggle-thumb" /></span></label>
            </div>
        )
    },
];

export const cards = [
    {
        id: 7, name: "Profile Card", preview: (
            <div className="prev-card">
                <div className="prev-card-avatar">A</div>
                <div className="prev-card-name">Andre</div>
                <div className="prev-card-sub">UI Developer</div>
                <button className="prev-card-btn">Follow</button>
            </div>
        )
    },
    {
        id: 8, name: "Pricing Card", preview: (
            <div className="prev-pricing">
                <div className="prev-pricing-label">Pro</div>
                <div className="prev-pricing-price">$9<span>/mo</span></div>
                <button className="prev-pricing-btn">Sign up</button>
            </div>
        )
    },
];

export const loaders = [
    { id: 9, name: "Spinner Loader", preview: <div className="prev-spinner" /> },
    { id: 10, name: "Dots Loader", preview: <div className="prev-dots"><span /><span /><span /></div> },
    {
        id: 11, name: "Progress Bar", preview: (
            <div className="prev-progress-wrap"><div className="prev-progress-bar" /></div>
        )
    },
];

export const inputs = [
    { id: 12, name: "Text Input", preview: <input className="prev-input" type="text" placeholder="Type something..." /> },
];

export const allComponents = [...buttons, ...checkboxes, ...toggles, ...cards, ...loaders, ...inputs];