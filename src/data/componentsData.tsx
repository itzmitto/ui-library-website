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
    },
    {
        id: 124, name: "Card-124", preview: (
            <div className="cd-124">
                <div className="cd-124__tools">
                    <div className="cd-124__circle"><span className="cd-124__red cd-124__box"></span></div>
                    <div className="cd-124__circle"><span className="cd-124__yellow cd-124__box"></span></div>
                    <div className="cd-124__circle"><span className="cd-124__green cd-124__box"></span></div>
                </div>
                <div className="cd-124__content"></div>
            </div>
        )
    },
    {
        id: 125, name: "Card-125", preview: (
            <div className="cd-125">
                <div className="cd-125__border-top"></div>
                <div className="cd-125__img"></div>
                <span>Person</span>
                <p className="cd-125__job">Job Title</p>
                <button>Click</button>
            </div>
        )
    },
    {
        id: 126, name: "Card-126", preview: (
            <div className="cd-126">
                <div className="cd-126__tag">New</div>
                <div className="cd-126__title">Dashboard Pro</div>
                <div className="cd-126__sub">Analytics & insights</div>
                <div className="cd-126__footer">
                    <span>Free</span>
                    <button className="cd-126__btn">Get started</button>
                </div>
            </div>
        )
    },
    {
        id: 127, name: "Card-127", preview: (
            <div className="cd-127">
                <div className="cd-127__avatar">JD</div>
                <div className="cd-127__info">
                    <div className="cd-127__name">John Doe</div>
                    <div className="cd-127__role">Frontend Developer</div>
                </div>
                <div className="cd-127__stats">
                    <div className="cd-127__stat"><span>142</span><small>Projects</small></div>
                    <div className="cd-127__stat"><span>8.4k</span><small>Followers</small></div>
                </div>
            </div>
        )
    },
    {
        id: 128, name: "Card-128", preview: (
            <div className="cd-128">
                <div className="cd-128__header">
                    <div className="cd-128__dot cd-128__dot--red" />
                    <div className="cd-128__dot cd-128__dot--yellow" />
                    <div className="cd-128__dot cd-128__dot--green" />
                </div>
                <div className="cd-128__body">
                    <div className="cd-128__line cd-128__line--short" />
                    <div className="cd-128__line" />
                    <div className="cd-128__line cd-128__line--mid" />
                </div>
            </div>
        )
    },
    {
        id: 129, name: "Card-129", preview: (
            <div className="cd-129">
                <div className="cd-129__top" />
                <div className="cd-129__content">
                    <div className="cd-129__title">Product Design</div>
                    <div className="cd-129__sub">12 lessons · 4h 30min</div>
                    <div className="cd-129__bar"><div className="cd-129__fill" /></div>
                    <div className="cd-129__pct">64% complete</div>
                </div>
            </div>
        )
    },
    {
        id: 130, name: "Card-130", preview: (
            <div className="cd-130">
                <div className="cd-130__price">$49<span>/mo</span></div>
                <div className="cd-130__plan">Professional</div>
                <div className="cd-130__divider" />
                <ul className="cd-130__list">
                    <li>Unlimited projects</li>
                    <li>Priority support</li>
                    <li>Custom domains</li>
                </ul>
                <button className="cd-130__btn">Subscribe</button>
            </div>
        )
    },
    {
        id: 131, name: "Card-131", preview: (
            <div className="cd-131">
                <div className="cd-131__label">Revenue</div>
                <div className="cd-131__value">$12,400</div>
                <div className="cd-131__change cd-131__change--up">+8.2% this month</div>
                <div className="cd-131__bar-wrap">
                    <div className="cd-131__bar" />
                </div>
            </div>
        )
    },
    {
        id: 132, name: "Card-132", preview: (
            <div className="cd-132">
                <div className="cd-132__img" />
                <div className="cd-132__body">
                    <div className="cd-132__cat">Design</div>
                    <div className="cd-132__title">How to build UI systems</div>
                    <div className="cd-132__meta">Jan 12 · 5 min read</div>
                </div>
            </div>
        )
    },
    {
        id: 133, name: "Card-133", preview: (
            <div className="cd-133">
                <div className="cd-133__icon" />
                <div className="cd-133__title">Notifications</div>
                <div className="cd-133__sub">You have 3 unread messages</div>
                <button className="cd-133__btn">View all</button>
            </div>
        )
    },
    {
        id: 134, name: "Card-134", preview: (
            <div className="cd-134">
                <div className="cd-134__header">
                    <div className="cd-134__avatar">MK</div>
                    <div>
                        <div className="cd-134__name">Mike K.</div>
                        <div className="cd-134__time">2 min ago</div>
                    </div>
                </div>
                <div className="cd-134__msg">Hey, the new design looks great. Can we hop on a call?</div>
            </div>
        )
    },
    {
        id: 135, name: "Card-135", preview: (
            <div className="cd-135">
                <div className="cd-135__title">Team</div>
                <div className="cd-135__avatars">
                    <span>AL</span><span>BR</span><span>CK</span><span>+4</span>
                </div>
                <div className="cd-135__sub">7 members · 3 online</div>
            </div>
        )
    },
    {
        id: 136, name: "Card-136", preview: (
            <div className="cd-136">
                <div className="cd-136__label">Storage</div>
                <div className="cd-136__val">14.2 GB <span>of 20 GB</span></div>
                <div className="cd-136__track"><div className="cd-136__fill" /></div>
                <div className="cd-136__sub">5.8 GB remaining</div>
            </div>
        )
    },
    {
        id: 137, name: "Card-137", preview: (
            <div className="cd-137">
                <div className="cd-137__status" />
                <div className="cd-137__title">Server Status</div>
                <div className="cd-137__sub">All systems operational</div>
                <div className="cd-137__uptime">99.9% uptime</div>
            </div>
        )
    },
    {
        id: 138, name: "Card-138", preview: (
            <div className="cd-138">
                <div className="cd-138__title">Dark Glass</div>
                <div className="cd-138__sub">Glassmorphism style</div>
                <button className="cd-138__btn">Open</button>
            </div>
        )
    },
    {
        id: 139, name: "Card-139", preview: (
            <div className="cd-139">
                <div className="cd-139__top">
                    <div className="cd-139__title">Weekly Report</div>
                    <div className="cd-139__badge">PDF</div>
                </div>
                <div className="cd-139__sub">Generated on May 12, 2026</div>
                <div className="cd-139__divider" />
                <button className="cd-139__btn">Download</button>
            </div>
        )
    },
    {
        id: 140, name: "Card-140", preview: (
            <div className="cd-140">
                <div className="cd-140__title">Quick Actions</div>
                <div className="cd-140__actions">
                    <button className="cd-140__action">Edit</button>
                    <button className="cd-140__action">Share</button>
                    <button className="cd-140__action cd-140__action--danger">Delete</button>
                </div>
            </div>
        )
    },
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
    { id: 171, name: "input", preview: <input className="ip-171" type="text" placeholder="Type something..." /> },
    { id: 172, name: "input", preview: <input className="ip-172" type="text" placeholder="Type something..." /> },
    { id: 173, name: "input", preview: <input className="ip-173" type="text" placeholder="Type something..." /> },
    { id: 174, name: "input", preview: <input className="ip-174" type="text" placeholder="Type something..." /> },
    { id: 175, name: "input", preview: <input className="ip-175" type="text" placeholder="Type something..." /> },
    { id: 176, name: "input", preview: <input className="ip-176" type="text" placeholder="Type something..." /> },
    { id: 177, name: "input", preview: <input className="ip-177" type="text" placeholder="Type something..." /> },
    { id: 178, name: "input", preview: <input className="ip-178" type="text" placeholder="Type something..." /> },
    {
        id: 179, name: "input", preview: (
            <div className="ip-179-container">
                <input className="ip-179" type="text" placeholder="Search the internet..." />
            </div>),
    },
    { id: 180, name: "input", preview: <input className="ip-180" type="text" placeholder="Type something..." /> },
    {
        id: 181,
        name: "rating",
        preview: (
            <div className="ip-181-rating">
                <input type="radio" id="ip181-star5" name="ip181-rating" />
                <label htmlFor="ip181-star5"></label>

                <input type="radio" id="ip181-star4" name="ip181-rating" />
                <label htmlFor="ip181-star4"></label>

                <input type="radio" id="ip181-star3" name="ip181-rating" />
                <label htmlFor="ip181-star3"></label>

                <input type="radio" id="ip181-star2" name="ip181-rating" />
                <label htmlFor="ip181-star2"></label>

                <input type="radio" id="ip181-star1" name="ip181-rating" />
                <label htmlFor="ip181-star1"></label>
            </div>
        ),
    },
    {
        id: 182,
        name: "search input",
        preview: (
            <div className="ip-182-container">
                <input
                    placeholder="Search"
                    className="ip-182-input"
                    type="text"
                />

                <label className="ip-182-label"></label>
            </div>
        ),
    },
    { id: 183, name: "input", preview: <input className="ip-183" type="text" placeholder="Type something..." /> },
    { id: 184, name: "input", preview: <input className="ip-184" type="text" placeholder="Type something..." /> },
    { id: 185, name: "input", preview: <input className="ip-185" type="text" placeholder="Type something..." /> },
    { id: 186, name: "input", preview: <input className="ip-186" type="text" placeholder="Type something..." /> },
    { id: 187, name: "input", preview: <input className="ip-187" type="text" placeholder="Type something..." /> },
    { id: 188, name: "input", preview: <input className="ip-188" type="text" placeholder="Type something..." /> },
    { id: 189, name: "input", preview: <input className="ip-189" type="text" placeholder="Type something..." /> },
    { id: 190, name: "input", preview: <input className="ip-190" type="text" placeholder="Type something..." /> },
    { id: 191, name: "input", preview: <input className="ip-191" type="text" placeholder="Type something..." /> },
    { id: 192, name: "input", preview: <input className="ip-192" type="text" placeholder="Type something..." /> },
    { id: 193, name: "input", preview: <input className="ip-193" type="text" placeholder="Type something..." /> },
    { id: 194, name: "input", preview: <input className="ip-194" type="text" placeholder="Type something..." /> },
    { id: 195, name: "input", preview: <input className="ip-195" type="text" placeholder="Type something..." /> },
    { id: 196, name: "input", preview: <input className="ip-196" type="text" placeholder="Type something..." /> },
    { id: 197, name: "input", preview: <input className="ip-197" type="text" placeholder="Type something..." /> },
    { id: 198, name: "input", preview: <input className="ip-198" type="text" placeholder="Type something..." /> },
    { id: 199, name: "input", preview: <input className="ip-199" type="text" placeholder="Type something..." /> },
    { id: 200, name: "input", preview: <input className="ip-200" type="text" placeholder="Type something..." /> },
];

export const radiobuttons = [
    {
        id: 201, name: "radiobuttons", preview: (
            <div className="radio-input-201">
                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="designer"
                        defaultChecked />
                    <p className="text">Designer</p>
                </label>
                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="student" />
                    <p className="text">Student</p>
                </label>

                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="teacher" />
                    <p className="text">Teacher</p>
                </label>
            </div>
        )
    },
    {
        id: 202, name: "radiobuttons", preview: (
            <div className="radio-input-202">
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="women"
                            defaultChecked />
                        <span>Women</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="men" />
                        <span>Men</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="divided" />
                        <span>Divided</span>
                    </label>
                </div>
            </div>
        )
    },
    {
        id: 203, name: "radiobuttons", preview: (
            <div className="radio-input-203">
                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="play"
                        defaultChecked
                    />
                    <span className="text">Play</span>
                </label>

                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="stop"
                    />
                    <span className="text">Stop</span>
                </label>

                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="reset"
                    />
                    <span className="text">Reset</span>
                </label>
            </div>
        )
    },
    {
        id: 204, name: "radiobuttons", preview: (
            <div className="rb-204-group">

            </div>
        )
    },
    {
        id: 205, name: "radiobuttons", preview: (
            <div className="rb-205-group">
            </div>
        )
    },
];

export const forms = [
    {
        id: 210,
        name: "Login Form",
        preview: (
            <div className="fm-210">
                <div className="fm-210__title">Sign in</div>
                <div className="fm-210__field">
                    <label className="fm-210__label">Email</label>
                    <input className="fm-210__input" type="email" placeholder="you@example.com" />
                </div>
                <div className="fm-210__field">
                    <label className="fm-210__label">Password</label>
                    <input className="fm-210__input" type="password" placeholder="••••••••" />
                </div>
                <button className="fm-210__btn">Sign in</button>
                <div className="fm-210__footer">Don't have an account? <span>Sign up</span></div>
            </div>
        )
    },
    {
        id: 211,
        name: "Register Form",
        preview: (
            <div className="fm-211">
                <div className="fm-211__title">Create account</div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Username</label>
                    <input className="fm-211__input" type="text" placeholder="johndoe" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Email</label>
                    <input className="fm-211__input" type="email" placeholder="you@example.com" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Password</label>
                    <input className="fm-211__input" type="password" placeholder="••••••••" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Confirm password</label>
                    <input className="fm-211__input" type="password" placeholder="••••••••" />
                </div>
                <button className="fm-211__btn">Create account</button>
                <div className="fm-211__footer">Already have an account? <span>Sign in</span></div>
            </div>
        )
    },
    {
        id: 212, name: "Login Form", preview: (
            <div className="fm-212">
                <span className="fm-212__input-span">
                    <label className="fm-212__label">Email</label>
                    <input className="fm-212__input" type="email" placeholder="you@example.com" />
                </span>
                <span className="fm-212__input-span">
                    <label className="fm-212__label">Password</label>
                    <input className="fm-212__input" type="password" placeholder="••••••••" />
                </span>
                <span className="fm-212__span"><a href="#">Forgot password?</a></span>
                <button className="fm-212__submit">Log in</button>
                <span className="fm-212__span">Don't have an account? <a href="#">Sign up</a></span>
            </div>
        )
    },
    {
        id: 213, name: "forms", preview: (
            <div className="fm-213">?
            </div>
        )
    },
    {
        id: 214, name: "forms", preview: (
            <div className="fm-214">?
            </div>
        )
    },
];

export const patterns = [
    {
        id: 220, name: "patterns", preview: (
            <div className="pt-220">?</div>
        )
    },
    {
        id: 221, name: "patterns", preview: (
            <div className="pt-221">?</div>
        )
    },
    {
        id: 222, name: "patterns", preview: (
            <div className="pt-222">?</div>
        )
    },
    {
        id: 223, name: "patterns", preview: (
            <div className="pt-223">?</div>
        )
    },
    {
        id: 224, name: "patterns", preview: (
            <div className="pt-224">?</div>
        )
    },
];

export const allComponents = [...buttons, ...checkboxes, ...toggles, ...cards, ...loaders, ...inputs, ...radiobuttons, ...forms, ...patterns];






