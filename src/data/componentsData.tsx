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
    { id: 62, name: "Button", preview: <button className="Button62">Click me</button> },
    { id: 63, name: "Button", preview: <button className="Button63">Click me</button> },
    { id: 64, name: "Button", preview: <button className="Button64">Click me</button> },
    { id: 65, name: "Button", preview: <button className="Button65">Click me</button> },
    { id: 66, name: "Button", preview: <button className="Button66">Click me</button> },
    { id: 67, name: "Button", preview: <button className="Button67">Click me</button> },
    { id: 68, name: "Button", preview: <button className="Button68">Click me</button> },
    { id: 69, name: "Button", preview: <button className="Button69">Click me</button> },
    { id: 70, name: "Button", preview: <button className="Button70">Click me</button> },
    { id: 71, name: "Button", preview: <button className="Button71">Click me</button> },
    { id: 72, name: "Button", preview: <button className="Button72">Click me</button> },
    { id: 73, name: "Button", preview: <button className="Button73">Click me</button> },
    { id: 74, name: "Button", preview: <button className="Button74">Click me</button> },
    { id: 75, name: "Button", preview: <button className="Button75">Click me</button> },
    { id: 76, name: "Button", preview: <button className="Button76">Click me</button> },
    { id: 77, name: "Button", preview: <button className="Button77">Click me</button> },
    { id: 78, name: "Button", preview: <button className="Button78">Click me</button> },
    { id: 79, name: "Button", preview: <button className="Button79">Click me</button> },
    { id: 80, name: "Button", preview: <button className="Button80">Click me</button> },
    { id: 81, name: "Button", preview: <button className="Button81">Click me</button> },
    { id: 82, name: "Button", preview: <button className="Button82">Click me</button> },
    { id: 83, name: "Button", preview: <button className="Button83">Click me</button> },
    { id: 84, name: "Button", preview: <button className="Button84">Click me</button> },
    { id: 85, name: "Button", preview: <button className="Button85">Click me</button> },
    { id: 86, name: "Button", preview: <button className="Button86">Click me</button> },
    { id: 87, name: "Button", preview: <button className="Button87">Click me</button> },
    { id: 88, name: "Button", preview: <button className="Button88">Click me</button> },
    { id: 89, name: "Button", preview: <button className="Button89">Click me</button> },
    { id: 90, name: "Button", preview: <button className="Button90">Click me</button> },
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
    {
        id: 15, name: "Checkbox", preview: (
            <label className="cb-15">
                <input defaultChecked type="checkbox" />
                <div className="cb-15__mark"></div>
            </label>
        )
    },
    {
        id: 16, name: "Checkbox", preview: (
            <label className="cb-16">
                <input defaultChecked type="checkbox" />
                <span className="cb-16__box"></span>
            </label>
        )
    },
    {
        id: 17, name: "Checkbox", preview: (
            <label className="cb-17 burger">
                <input defaultChecked type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            </label>
        )
    },
    {
        id: 18, name: "Checkbox", preview: (
            <div className="cb18-cntr">
                <input defaultChecked type="checkbox" id="cb18-cbx" className="cb18-hidden" />
                <label htmlFor="cb18-cbx" className="cb18-cbx"></label>
            </div>
        )
    },
    {
        id: 19, name: "Checkbox", preview: (
            <label className="cb19">
                <label htmlFor="cb19-input"></label>
                <input id="cb19-input" type="checkbox" />
                <span className="cb19-checkmark"></span>
            </label>
        )
    },
    {
        id: 20, name: "Checkbox", preview: (
            <label className="cb20">
                <input type="checkbox" />
                <div className="cb20-checkmark"></div>
            </label>
        )
    },
    {
        id: 21, name: "Checkbox", preview: (
            <label className="cb21">
                <input type="checkbox" />
                <span className="cb21-checkmark"></span>
            </label>
        )
    },
    {
        id: 22, name: "Checkbox", preview: (
            <label className="cb22">
                <input type="checkbox" />
                <span className="cb22-checkmark"></span>
            </label>
        )
    },
    {
        id: 23, name: "Checkbox", preview: (
            <label className="cb23">
                <input type="checkbox" />
                <span className="cb23-checkmark"></span>
            </label>
        )
    },
    {
        id: 24, name: "Checkbox", preview: (
            <label className="cb24">
                <input type="checkbox" />
                <span className="cb24-checkmark"></span>
            </label>
        )
    },
    {
        id: 25, name: "Checkbox", preview: (
            <label className="cb25">
                <input type="checkbox" />
                <span className="cb25-checkmark"></span>
            </label>
        )
    },
    {
        id: 26, name: "Checkbox", preview: (
            <label className="cb26">
                <input type="checkbox" />
                <span className="cb26-checkmark"></span>
            </label>
        )
    },
    {
        id: 27, name: "Checkbox", preview: (
            <label className="cb27">
                <input type="checkbox" />
                <span className="cb27-checkmark"></span>
            </label>
        )
    },
    {
        id: 28, name: "Checkbox", preview: (
            <label className="cb28">
                <input type="checkbox" />
                <span className="cb28-checkmark"></span>
            </label>
        )
    },
    {
        id: 29, name: "Checkbox", preview: (
            <label className="cb29">
                <input type="checkbox" />
                <span className="cb29-checkmark"></span>
            </label>
        )
    },
    {
        id: 30, name: "Checkbox", preview: (
            <label className="cb30">
                <input type="checkbox" />
                <span className="cb30-checkmark"></span>
            </label>
        )
    },
    {
        id: 31, name: "Checkbox", preview: (
            <label className="cb31">
                <input type="checkbox" />
                <span className="cb31-checkmark"></span>
            </label>
        )
    },
    {
        id: 32, name: "Checkbox", preview: (
            <label className="cb32">
                <input type="checkbox" />
                <span className="cb32-checkmark"></span>
            </label>
        )
    },
    {
        id: 33, name: "Checkbox", preview: (
            <label className="cb33">
                <input type="checkbox" />
                <span className="cb33-checkmark"></span>
            </label>
        )
    },
    {
        id: 34, name: "Checkbox", preview: (
            <label className="cb34">
                <input type="checkbox" />
                <span className="cb34-checkmark"></span>
            </label>
        )
    },
    {
        id: 35, name: "Checkbox", preview: (
            <label className="cb35">
                <input type="checkbox" />
                <span className="cb35-checkmark"></span>
            </label>
        )
    },
    {
        id: 36, name: "Checkbox", preview: (
            <label className="cb36">
                <input type="checkbox" />
                <span className="cb36-checkmark"></span>
            </label>
        )
    },
    {
        id: 37, name: "Checkbox", preview: (
            <label className="cb37">
                <input type="checkbox" />
                <span className="cb37-checkmark"></span>
            </label>
        )
    },
    {
        id: 38, name: "Checkbox", preview: (
            <label className="cb38">
                <input type="checkbox" />
                <span className="cb38-checkmark"></span>
            </label>
        )
    },
    {
        id: 39, name: "Checkbox", preview: (
            <label className="cb39">
                <input type="checkbox" />
                <span className="cb39-checkmark"></span>
            </label>
        )
    },
    {
        id: 61, name: "Checkbox", preview: (
            <label className="cb61">
                <input type="checkbox" />
                <span className="cb61-checkmark"></span>
            </label>
        )
    },

];

export const toggles = [
    {
        id: 6, name: "Toggle Switch", preview: (
            <div className="ts-6-group">
                <label className="ts-6"><input type="checkbox" defaultChecked /><span className="ts-6__track"><span className="ts-6__thumb" /></span></label>
                <label className="ts-6"><input type="checkbox" /><span className="ts-6__track"><span className="ts-6__thumb" /></span></label>
            </div>
        )
    },
    {
        id: 40, name: "Toggle Switch", preview: (
            <div className="ts-40-group ts-40">
                <input type="checkbox" id="checkboxInput40" />
                <label htmlFor="checkboxInput40" className="toggleSwitch"></label>
            </div>
        )
    },
    {
        id: 41, name: "Toggle Switch", preview: (
            <label className="ts41">
                <input type="checkbox" />
                <span className="ts41-slider"></span>
            </label>
        )
    },
    {
        id: 42, name: "Toggle Switch", preview: (
            <label className="ts42">
                <input type="checkbox" />
                <span className="ts42-slider"></span>
            </label>
        )
    },
    {
        id: 43, name: "Toggle Switch", preview: (
            <label className="ts43">
                <input type="checkbox" />
                <span className="ts43-slider"></span>
            </label>
        )
    },
    {
        id: 44, name: "Toggle Switch", preview: (
            <label className="ts44">
                <input type="checkbox" />
                <span className="ts44-slider"></span>
            </label>
        )
    },
    {
        id: 45, name: "Toggle Switch", preview: (
            <label className="ts45">
                <input type="checkbox" />
                <span className="ts45-slider"></span>
            </label>
        )
    },
    {
        id: 46, name: "Toggle Switch", preview: (
            <label className="ts46">
                <input type="checkbox" />
                <span className="ts46-slider"></span>
            </label>
        )
    },
    {
        id: 47, name: "Toggle Switch", preview: (
            <label className="ts47">
                <input type="checkbox" />
                <span className="ts47-slider"></span>
            </label>
        )
    },
    {
        id: 48, name: "Toggle Switch", preview: (
            <label className="ts48">
                <input type="checkbox" />
                <span className="ts48-slider"></span>
            </label>
        )
    },
    {
        id: 49, name: "Toggle Switch", preview: (
            <label className="ts49">
                <input type="checkbox" />
                <span className="ts49-slider"></span>
            </label>
        )
    },
    {
        id: 50, name: "Toggle Switch", preview: (
            <label className="ts50">
                <input type="checkbox" />
                <span className="ts50-slider"></span>
            </label>
        )
    },
    {
        id: 51, name: "Toggle Switch", preview: (
            <label className="ts51">
                <input type="checkbox" />
                <span className="ts51-slider"></span>
            </label>
        )
    },
    {
        id: 52, name: "Toggle Switch", preview: (
            <label className="ts52">
                <input type="checkbox" />
                <span className="ts52-slider"></span>
            </label>
        )
    },
    {
        id: 53, name: "Toggle Switch", preview: (
            <label className="ts53">
                <input type="checkbox" />
                <span className="ts53-slider"></span>
            </label>
        )
    },
    {
        id: 54, name: "Toggle Switch", preview: (
            <label className="ts54">
                <input type="checkbox" />
                <span className="ts54-slider"></span>
            </label>
        )
    },
    {
        id: 55, name: "Toggle Switch", preview: (
            <label className="ts55">
                <input type="checkbox" />
                <span className="ts55-slider"></span>
            </label>
        )
    },
    {
        id: 56, name: "Toggle Switch", preview: (
            <label className="ts56">
                <input type="checkbox" />
                <span className="ts56-slider"></span>
            </label>
        )
    },
    {
        id: 57, name: "Toggle Switch", preview: (
            <label className="ts57">
                <input type="checkbox" />
                <span className="ts57-slider"></span>
            </label>
        )
    },
    {
        id: 58, name: "Toggle Switch", preview: (
            <label className="ts58">
                <input type="checkbox" />
                <span className="ts58-slider"></span>
            </label>
        )
    },
    {
        id: 59, name: "Toggle Switch", preview: (
            <label className="ts59">
                <input type="checkbox" />
                <span className="ts59-slider"></span>
            </label>
        )
    },
    {
        id: 60, name: "Toggle Switch", preview: (
            <label className="ts60">
                <input type="checkbox" />
                <span className="ts60-slider"></span>
            </label>
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