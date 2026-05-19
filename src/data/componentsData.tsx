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
    { id: 91, name: "Button", preview: <button className="Button91"><span>Click me</span></button> },
    { id: 92, name: "Button", preview: <button className="Button92">Click me</button> },
    { id: 93, name: "Button", preview: <button className="Button93">Click me</button> },
    { id: 94, name: "Button", preview: <button className="Button94"><span>Click me</span></button> },
    { id: 95, name: "Button", preview: <button className="Button95"><span>Click me →</span></button> },
    { id: 96, name: "Button", preview: <button className="Button96"><span>Click me →</span></button> },
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
    {
        id: 110, name: "Rotating Border", preview: (
            <div className="card-110">
                <h2>CARD</h2>
            </div>
        )
    },
    {
        id: 111, name: "Neumorphism", preview: (
            <div className="card-111"></div>
        )
    },
    {
        id: 112, name: "Glassmorphism", preview: (
            <div className="card-112">Click me</div>
        )
    },
    {
        id: 113, name: "Flip Card", preview: (
            <div className="card-113">
                <div className="card-113-inner">
                    <div className="card-113-front">
                        <p className="card-113-title">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="card-113-back">
                        <p className="card-113-title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 114, name: "Gradient Border", preview: (
            <div className="card-114">
                <div className="card-114-inner"></div>
            </div>
        )
    },
    {
        id: 115, name: "Blob Card", preview: (
            <div className="card-115">
                <div className="card-115-bg"></div>
                <div className="card-115-blob"></div>
            </div>
        )
    },
    {
        id: 116, name: "Dark Neumorphism", preview: (
            <div className="card-116"></div>
        )
    },
    {
        id: 117, name: "Gradient Glow", preview: (
            <div className="card-117">
                <p className="card-117-heading">Popular this month</p>
                <p>Powered By</p>
                <p>Uiverse</p>
            </div>
        )
    },
    {
        id: 118, name: "Corner Expand", preview: (
            <div className="card-118">HOVER</div>
        )
    },
    {
        id: 119, name: "Flip Card 2", preview: (
            <div className="card-119">
                <div className="card-119-inner">
                    <div className="card-119-front"><p>Front Side</p></div>
                    <div className="card-119-back"><p>Back Side</p></div>
                </div>
            </div>
        )
    },
    {
        id: 120, name: "Mac Window", preview: (
            <div className="card-120">
                <div className="card-120-tools">
                    <div className="card-120-circle"><span className="card-120-box card-120-red"></span></div>
                    <div className="card-120-circle"><span className="card-120-box card-120-yellow"></span></div>
                    <div className="card-120-circle"><span className="card-120-box card-120-green"></span></div>
                </div>
                <div className="card-120-content"></div>
            </div>
        )
    },
    {
        id: 121, name: "Image Reveal", preview: (
            <div className="card-121">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card-121-content">
                    <p className="card-121-title">Card Title</p>
                    <p className="card-121-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        )
    },
    {
        id: 122, name: "Card-122", preview: (
            <div className="cd-122">
                <div className="cd-122__top">
                    <div className="cd-122__border"></div>
                    <div className="cd-122__icons">
                        <div className="cd-122__logo"></div>
                        <div className="cd-122__social"></div>
                    </div>
                </div>
                <div className="cd-122__bottom">
                    <span className="cd-122__title">UNIVERSE OF UI</span>
                    <div className="cd-122__row">
                        <div className="cd-122__item">
                            <span className="cd-122__big">2626</span>
                            <span className="cd-122__small">UI elements</span>
                        </div>
                        <div className="cd-122__item">
                            <span className="cd-122__big">100%</span>
                            <span className="cd-122__small">Free for use</span>
                        </div>
                        <div className="cd-122__item">
                            <span className="cd-122__big">38,631</span>
                            <span className="cd-122__small">Contributors</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 123, name: "Card-123", preview: (
            <div className="cd-123">
                <div className="cd-123__palette">
                    <div className="cd-123__color"><span>264653</span></div>
                    <div className="cd-123__color"><span>2A9D8F</span></div>
                    <div className="cd-123__color"><span>E9C46A</span></div>
                    <div className="cd-123__color"><span>F4A261</span></div>
                    <div className="cd-123__color"><span>E76F51</span></div>
                </div>
            </div>
        )
    }, { id: 124, name: "Card-124", preview: (<div>nog leeg</div>) },
    { id: 125, name: "Card-125", preview: (<div>nog leeg</div>) },
    { id: 126, name: "Card-126", preview: (<div>nog leeg</div>) },
    { id: 127, name: "Card-127", preview: (<div>nog leeg</div>) },
    { id: 128, name: "Card-128", preview: (<div>nog leeg</div>) },
    { id: 129, name: "Card-129", preview: (<div>nog leeg</div>) },
    { id: 130, name: "Card-130", preview: (<div>nog leeg</div>) },
    { id: 131, name: "Card-131", preview: (<div>nog leeg</div>) },
    { id: 132, name: "Card-132", preview: (<div>nog leeg</div>) },
    { id: 133, name: "Card-133", preview: (<div>nog leeg</div>) },
    { id: 134, name: "Card-134", preview: (<div>nog leeg</div>) },
    { id: 135, name: "Card-135", preview: (<div>nog leeg</div>) },
    { id: 136, name: "Card-136", preview: (<div>nog leeg</div>) },
    { id: 137, name: "Card-137", preview: (<div>nog leeg</div>) },
    { id: 138, name: "Card-138", preview: (<div>nog leeg</div>) },
    { id: 139, name: "Card-139", preview: (<div>nog leeg</div>) },
    { id: 140, name: "Card-140", preview: (<div>nog leeg</div>) },
];

export const loaders = [
    { id: 9, name: "Spinner Loader", preview: <div className="prev-spinner" /> },
    { id: 10, name: "Dots Loader", preview: <div className="prev-dots"><span /><span /><span /></div> },
    {
        id: 11, name: "Progress Bar", preview: (<div className="prev-progress-wrap"><div className="prev-progress-bar" /></div>)
    },
    { id: 141, name: "Loader", preview: <div className="ld-141" /> },
    { id: 142, name: "Loader", preview: <div className="ld-142" /> },
    { id: 143, name: "Loader", preview: <div className="ld-143" /> },
    { id: 144, name: "Loader", preview: <div className="ld-144" /> },
    { id: 145, name: "Loader", preview: <div className="ld-145" /> },
    { id: 146, name: "Loader", preview: <div className="ld-146" /> },
    { id: 147, name: "Loader", preview: <div className="ld-147" /> },
    { id: 148, name: "Loader", preview: <div className="ld-148" /> },
    { id: 149, name: "Loader", preview: <div className="ld-149" /> },
    { id: 150, name: "Loader", preview: <div className="ld-150" /> },
    { id: 151, name: "Loader", preview: <div className="ld-151" /> },
    { id: 152, name: "Loader", preview: <div style={{ marginLeft: "20px" }}><div className="ld-152" /></div> },
    { id: 153, name: "Loader", preview: <div style={{ marginLeft: "12px" }}><div className="ld-153" /></div> },
    { id: 154, name: "Loader", preview: <div className="ld-154" /> },
    { id: 155, name: "Loader", preview: <div className="ld-155" /> },
    { id: 156, name: "Loader", preview: <div className="ld-156" /> },
    { id: 157, name: "Loader", preview: <div className="ld-157" /> },
    { id: 158, name: "Loader", preview: <div className="ld-158" /> },
    { id: 159, name: "Loader", preview: <div className="ld-159" /> },
    { id: 160, name: "Loader", preview: <div className="ld-160" /> },
    { id: 161, name: "Loader", preview: <div className="ld-161" /> },
    { id: 162, name: "Loader", preview: <div className="ld-162" /> },
    { id: 163, name: "Loader", preview: <div className="ld-163" /> },
    { id: 164, name: "Loader", preview: <div className="ld-164" /> },
    { id: 165, name: "Loader", preview: <div className="ld-165" /> },
    { id: 166, name: "Loader", preview: <div className="ld-166" /> },
    { id: 167, name: "Loader", preview: <div className="ld-167" /> },
    { id: 168, name: "Loader", preview: <div className="ld-168" /> },
    { id: 169, name: "Loader", preview: <div className="ld-169" /> },
    { id: 170, name: "Loader", preview: <div className="ld-170" /> },

];

export const inputs = [
    { id: 12, name: "Text Input", preview: <input className="prev-input" type="text" placeholder="Type something..." /> },
];

export const allComponents = [...buttons, ...checkboxes, ...toggles, ...cards, ...loaders, ...inputs];