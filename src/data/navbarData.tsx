import "../pages/All.css";

export const navbar = [
  {
    id: 400,
    name: "Simple Navbar",
    preview: (
      <div className="nv-400">
        <div className="nv-400__logo">MyApp</div>
        <nav className="nv-400__nav">
          <a href="#" className="nv-400__link nv-400__link--active">
            Home
          </a>
          <a href="#" className="nv-400__link">
            About
          </a>
          <a href="#" className="nv-400__link">
            Projects
          </a>
          <a href="#" className="nv-400__link">
            Contact
          </a>
        </nav>
        <button className="nv-400__btn">Sign in</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">MyApp</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Projects</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Sign in</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    font-family: inherit;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 401,
    name: "Dark Navbar",
    preview: (
      <div className="nv-401">
        <div className="nv-401__logo">Brand</div>
        <nav className="nv-401__nav">
          <a href="#" className="nv-401__link">
            Home
          </a>
          <a href="#" className="nv-401__link">
            Features
          </a>
          <a href="#" className="nv-401__link">
            Pricing
          </a>
          <a href="#" className="nv-401__link">
            Blog
          </a>
        </nav>
        <div className="nv-401__actions">
          <a href="#" className="nv-401__login">
            Log in
          </a>
          <button className="nv-401__btn">Get started</button>
        </div>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">Features</a>
        <a href="#" class="Navbar__link">Pricing</a>
        <a href="#" class="Navbar__link">Blog</a>
    </nav>
    <div class="Navbar__actions">
        <a href="#" class="Navbar__login">Log in</a>
        <button class="Navbar__btn">Get started</button>
    </div>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Navbar__login {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 13px;
    transition: color 0.15s;
}
.Navbar__login:hover {
    color: #fff;
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 402,
    name: "Pill Navbar",
    preview: (
      <div className="nv-402">
        <div className="nv-402__inner">
          <div className="nv-402__logo">Logo</div>
          <nav className="nv-402__nav">
            <a href="#" className="nv-402__link nv-402__link--active">
              Home
            </a>
            <a href="#" className="nv-402__link">
              Work
            </a>
            <a href="#" className="nv-402__link">
              About
            </a>
            <a href="#" className="nv-402__link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__inner">
        <div class="Navbar__logo">Logo</div>
        <nav class="Navbar__nav">
            <a href="#" class="Navbar__link Navbar__link--active">Home</a>
            <a href="#" class="Navbar__link">Work</a>
            <a href="#" class="Navbar__link">About</a>
            <a href="#" class="Navbar__link">Contact</a>
        </nav>
    </div>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    padding: 8px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-sizing: border-box;
}
.Navbar__inner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 6px 14px;
    border-radius: 999px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}`,
  },
  {
    id: 403,
    name: "Underline Navbar",
    preview: (
      <div className="nv-403">
        <div className="nv-403__logo">Studio</div>
        <nav className="nv-403__nav">
          <a href="#" className="nv-403__link nv-403__link--active">
            Home
          </a>
          <a href="#" className="nv-403__link">
            Portfolio
          </a>
          <a href="#" className="nv-403__link">
            Services
          </a>
          <a href="#" className="nv-403__link">
            Contact
          </a>
        </nav>
        <button className="nv-403__btn">Hire me</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Studio</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Portfolio</a>
        <a href="#" class="Navbar__link">Services</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Hire me</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
    border-radius: 10px;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #888;
    text-decoration: none;
    font-size: 13px;
    padding: 6px 10px;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
}
.Navbar__link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #111;
    transition: width 0.2s;
}
.Navbar__link:hover {
    color: #111;
}
.Navbar__link:hover::after {
    width: 100%;
}
.Navbar__link--active {
    color: #111;
}
.Navbar__link--active::after {
    width: 100%;
}
.Navbar__btn {
    background: #111;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #333;
}`,
  },
  {
    id: 404,
    name: "Glass Navbar",
    preview: (
      <div className="nv-404">
        <div className="nv-404__logo">Glass</div>
        <nav className="nv-404__nav">
          <a href="#" className="nv-404__link">
            Home
          </a>
          <a href="#" className="nv-404__link">
            About
          </a>
          <a href="#" className="nv-404__link">
            Work
          </a>
          <a href="#" className="nv-404__link">
            Contact
          </a>
        </nav>
        <button className="nv-404__btn">Sign up</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Glass</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Work</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Sign up</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}
.Navbar__btn {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: rgba(255, 255, 255, 0.25);
}`,
  },
  {
    id: 405,
    name: "Minimal Navbar",
    preview: (
      <div className="nv-405">
        <div className="nv-405__logo">Minimal</div>
        <nav className="nv-405__nav">
          <a href="#" className="nv-405__link">
            Home
          </a>
          <a href="#" className="nv-405__link">
            About
          </a>
          <a href="#" className="nv-405__link">
            Work
          </a>
          <a href="#" className="nv-405__link">
            Contact
          </a>
        </nav>
        <div className="nv-405__dot"></div>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Minimal</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Work</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <div class="Navbar__dot"></div>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #52525b;
    text-decoration: none;
    font-size: 13px;
    padding: 4px 10px;
    transition: color 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7c3aed;
    flex-shrink: 0;
}`,
  },
  {
    id: 406,
    name: "Navbar",
    preview: (
      <div className="nv-406">
        <nav className="modern-navbar">
          <ul>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <nav class="Navbar-modern">
        <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</div>`,
    css: `.Navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background: #0f172a;
}
.Navbar .Navbar-modern {
    position: relative;
    padding: 14px 24px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 60px;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}
.Navbar .Navbar-modern ul {
    display: flex;
    align-items: center;
    gap: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.Navbar .Navbar-modern ul li {
    position: relative;
}
.Navbar .Navbar-modern ul li a {
    position: relative;
    display: block;
    padding: 12px 26px;
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-radius: 40px;
    transition: 0.3s ease;
    z-index: 1;
}
.Navbar .Navbar-modern ul li.active a {
    background: linear-gradient(135deg, #38bdf8, #22d3ee);
    color: #fff;
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
}
.Navbar .Navbar-modern ul li a:hover {
    background: rgba(255, 255, 255, 0.08);
}`,
  },
  {
    id: 407,
    name: "Gradient Navbar",
    preview: (
      <div className="nv-407">
        <div className="nv-407__logo">Brand</div>
        <nav className="nv-407__nav">
          <a href="#" className="nv-407__link nv-407__link--active">
            Home
          </a>
          <a href="#" className="nv-407__link">
            Pagina 1
          </a>
          <a href="#" className="nv-407__link">
            Pagina 2
          </a>
          <a href="#" className="nv-407__link">
            Pagina 3
          </a>
          <a href="#" className="nv-407__link">
            Pagina 4
          </a>
          <a href="#" className="nv-407__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-407__btn">Sign up</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Sign up</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: linear-gradient(135deg, #1e1b4b, #18181b);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(99, 102, 241, 0.2);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(99, 102, 241, 0.25);
}
.Navbar__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #4f46e5;
}`,
  },
  {
    id: 408,
    name: "Border Bottom Navbar",
    preview: (
      <div className="nv-408">
        <div className="nv-408__logo">Logo</div>
        <nav className="nv-408__nav">
          <a href="#" className="nv-408__link nv-408__link--active">
            Home
          </a>
          <a href="#" className="nv-408__link">
            Pagina 1
          </a>
          <a href="#" className="nv-408__link">
            Pagina 2
          </a>
          <a href="#" className="nv-408__link">
            Pagina 3
          </a>
          <a href="#" className="nv-408__link">
            Pagina 4
          </a>
          <a href="#" className="nv-408__link">
            Pagina 5
          </a>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Logo</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border-bottom: 2px solid #7c3aed;
    border-radius: 10px 10px 0 0;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    transition: color 0.15s;
    white-space: nowrap;
    position: relative;
}
.Navbar__link::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7c3aed;
    transition: width 0.2s;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__link:hover::after {
    width: 100%;
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__link--active::after {
    width: 100%;
}`,
  },
  {
    id: 409,
    name: "Colored Navbar",
    preview: (
      <div className="nv-409">
        <div className="nv-409__logo">MyApp</div>
        <nav className="nv-409__nav">
          <a href="#" className="nv-409__link nv-409__link--active">
            Home
          </a>
          <a href="#" className="nv-409__link">
            Pagina 1
          </a>
          <a href="#" className="nv-409__link">
            Pagina 2
          </a>
          <a href="#" className="nv-409__link">
            Pagina 3
          </a>
          <a href="#" className="nv-409__link">
            Pagina 4
          </a>
          <a href="#" className="nv-409__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-409__btn">Contact</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">MyApp</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Contact</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #7c3aed;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
}
.Navbar__btn {
    background: #fff;
    color: #7c3aed;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    opacity: 0.9;
}`,
  },
  {
    id: 410,
    name: "Boxed Navbar",
    preview: (
      <div className="nv-410">
        <div className="nv-410__logo">Studio</div>
        <nav className="nv-410__nav">
          <a href="#" className="nv-410__link nv-410__link--active">
            Home
          </a>
          <a href="#" className="nv-410__link">
            Pagina 1
          </a>
          <a href="#" className="nv-410__link">
            Pagina 2
          </a>
          <a href="#" className="nv-410__link">
            Pagina 3
          </a>
          <a href="#" className="nv-410__link">
            Pagina 4
          </a>
          <a href="#" className="nv-410__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-410__btn">Login</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Studio</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Login</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
}
.Navbar__link--active {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.05);
}
.Navbar__btn {
    background: transparent;
    color: #a1a1aa;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
}`,
  },
  {
    id: 411,
    name: "Light Navbar",
    preview: (
      <div className="nv-411">
        <div className="nv-411__logo">Light</div>
        <nav className="nv-411__nav">
          <a href="#" className="nv-411__link nv-411__link--active">
            Home
          </a>
          <a href="#" className="nv-411__link">
            Pagina 1
          </a>
          <a href="#" className="nv-411__link">
            Pagina 2
          </a>
          <a href="#" className="nv-411__link">
            Pagina 3
          </a>
          <a href="#" className="nv-411__link">
            Pagina 4
          </a>
          <a href="#" className="nv-411__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-411__btn">Get started</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Light</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Get started</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #888;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #111;
    background: #f5f5f5;
}
.Navbar__link--active {
    color: #111;
    background: #f0f0f0;
    font-weight: 500;
}
.Navbar__btn {
    background: #111;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #333;
}`,
  },
  {
    id: 412,
    name: "Rounded Navbar",
    preview: (
      <div className="nv-412">
        <div className="nv-412__logo">Round</div>
        <nav className="nv-412__nav">
          <a href="#" className="nv-412__link nv-412__link--active">
            Home
          </a>
          <a href="#" className="nv-412__link">
            Pagina 1
          </a>
          <a href="#" className="nv-412__link">
            Pagina 2
          </a>
          <a href="#" className="nv-412__link">
            Pagina 3
          </a>
          <a href="#" className="nv-412__link">
            Pagina 4
          </a>
          <a href="#" className="nv-412__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-412__btn">Sign in</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Round</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Sign in</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    padding: 0 4px;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`,
  },
  {
    id: 413,
    name: "Neon Navbar",
    preview: (
      <div className="nv-413">
        <div className="nv-413__logo">Neon</div>
        <nav className="nv-413__nav">
          <a href="#" className="nv-413__link nv-413__link--active">
            Home
          </a>
          <a href="#" className="nv-413__link">
            Pagina 1
          </a>
          <a href="#" className="nv-413__link">
            Pagina 2
          </a>
          <a href="#" className="nv-413__link">
            Pagina 3
          </a>
          <a href="#" className="nv-413__link">
            Pagina 4
          </a>
          <a href="#" className="nv-413__link">
            Pagina 5
          </a>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Neon</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #030305;
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 10px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.05);
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #00ff88;
    white-space: nowrap;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #3a3a4a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #00ff88;
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
}
.Navbar__link--active {
    color: #00ff88;
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
}`,
  },
  {
    id: 414,
    name: "Split Navbar",
    preview: (
      <div className="nv-414">
        <nav className="nv-414__left">
          <a href="#" className="nv-414__link nv-414__link--active">
            Home
          </a>
          <a href="#" className="nv-414__link">
            Pagina 1
          </a>
          <a href="#" className="nv-414__link">
            Pagina 2
          </a>
        </nav>
        <div className="nv-414__logo">Brand</div>
        <nav className="nv-414__right">
          <a href="#" className="nv-414__link">
            Pagina 3
          </a>
          <a href="#" className="nv-414__link">
            Pagina 4
          </a>
          <a href="#" className="nv-414__link">
            Pagina 5
          </a>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <nav class="Navbar__left">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
    </nav>
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__right">
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__left,
.Navbar__right {
    display: flex;
    align-items: center;
    gap: 2px;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
}`,
  },
  {
    id: 415,
    name: "Sidebar Navbar",
    preview: (
      <div className="nv-415">
        <div className="nv-415__logo">App</div>
        <nav className="nv-415__nav">
          <a href="#" className="nv-415__link nv-415__link--active">
            Home
          </a>
          <a href="#" className="nv-415__link">
            Pagina 1
          </a>
          <a href="#" className="nv-415__link">
            Pagina 2
          </a>
          <a href="#" className="nv-415__link">
            Pagina 3
          </a>
          <a href="#" className="nv-415__link">
            Pagina 4
          </a>
          <a href="#" className="nv-415__link">
            Pagina 5
          </a>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">App</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
    css: `.Navbar {
    width: 160px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding: 0 8px;
    margin-bottom: 8px;
}
.Navbar__nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 7px 10px;
    border-radius: 7px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    font-weight: 500;
}`,
  },
  {
    id: 416,
    name: "Badge Navbar",
    preview: (
      <div className="nv-416">
        <div className="nv-416__logo">Badge</div>
        <nav className="nv-416__nav">
          <a href="#" className="nv-416__link nv-416__link--active">
            Home
          </a>
          <a href="#" className="nv-416__link">
            Pagina 1
          </a>
          <a href="#" className="nv-416__link">
            Pagina 2 <span className="nv-416__badge">New</span>
          </a>
          <a href="#" className="nv-416__link">
            Pagina 3
          </a>
          <a href="#" className="nv-416__link">
            Pagina 4
          </a>
          <a href="#" className="nv-416__link">
            Pagina 5
          </a>
        </nav>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Badge</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2 <span class="Navbar__badge">New</span></a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    border-radius: 10px;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 4px;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__badge {
    background: #7c3aed;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 999px;
}`,
  },
  {
    id: 417,
    name: "Dot Indicator Navbar",
    preview: (
      <div className="nv-417">
        <div className="nv-417__logo">Dots</div>
        <nav className="nv-417__nav">
          <a href="#" className="nv-417__link nv-417__link--active">
            <span className="nv-417__dot"></span>Home
          </a>
          <a href="#" className="nv-417__link">
            Pagina 1
          </a>
          <a href="#" className="nv-417__link">
            Pagina 2
          </a>
          <a href="#" className="nv-417__link">
            Pagina 3
          </a>
          <a href="#" className="nv-417__link">
            Pagina 4
          </a>
          <a href="#" className="nv-417__link">
            Pagina 5
          </a>
        </nav>
        <button className="nv-417__btn">Login</button>
      </div>
    ),
    html: `<div class="Navbar">
    <div class="Navbar__logo">Dots</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active"><span class="Navbar__dot"></span>Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Login</button>
</div>`,
    css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #7c3aed;
    flex-shrink: 0;
}
.Navbar__btn {
    background: transparent;
    color: #a1a1aa;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
}`,
  },
  {
    id: 766,
    name: "Gradient Navbar",
    preview: (
      <nav className="nv-766">
        <div className="nv-766__logo">
          <i className="fa-solid fa-layer-group"></i>
          <span>FlowUI</span>
        </div>
        <div className="nv-766__nav">
          <a href="#" className="nv-766__link nv-766__link--active">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
          <a href="#" className="nv-766__link">
            <i className="fa-solid fa-cubes"></i>
            Components
          </a>
          <a href="#" className="nv-766__link">
            <i className="fa-solid fa-code"></i>
            Docs
          </a>
          <a href="#" className="nv-766__link">
            <i className="fa-solid fa-circle-info"></i>
            About
          </a>
        </div>
        <a href="#" className="nv-766__button">
          <i className="fa-solid fa-arrow-right"></i>
          Get Started
        </a>
      </nav>
    ),
    html: `<nav class="nv-766">
    <div class="nv-766__logo">
        <i class="fa-solid fa-layer-group"></i>
        <span>FlowUI</span>
    </div>
    <div class="nv-766__nav">
        <a href="#" class="nv-766__link nv-766__link--active">
            <i class="fa-solid fa-house"></i>
            Home
        </a>
        <a href="#" class="nv-766__link">
            <i class="fa-solid fa-cubes"></i>
            Components
        </a>
        <a href="#" class="nv-766__link">
            <i class="fa-solid fa-code"></i>
            Docs
        </a>
        <a href="#" class="nv-766__link">
            <i class="fa-solid fa-circle-info"></i>
            About
        </a>
    </div>
    <a href="#" class="nv-766__button">
        <i class="fa-solid fa-arrow-right"></i>
        Get Started
    </a>
</nav>`,
    css: `.nv-766 {
    width: 100%;
    max-width: 760px;
    background: linear-gradient(135deg, #18181b, #27272a);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
}

.nv-766__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-766__logo i {
    font-size: 17px;
    color: #8b5cf6;
}

.nv-766__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-766__link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #a1a1aa;
    text-decoration: none;
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 8px;
    transition: all 0.2s;
    white-space: nowrap;
}

.nv-766__link i {
    font-size: 11px;
}

.nv-766__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}

.nv-766__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}

.nv-766__button {
    display: flex;
    align-items: center;
    gap: 7px;
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    color: #fff;
    text-decoration: none;
    font-size: 11px;
    font-weight: 600;
    padding: 9px 13px;
    border-radius: 9px;
    white-space: nowrap;
    transition: all 0.2s;
}

.nv-766__button:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
}`,
  },
  {
    id: 767,
    name: "Glass Navbar",
    preview: (
      <nav className="nv-767">
        <div className="nv-767__brand">
          <div className="nv-767__icon">
            <i className="fa-solid fa-gem"></i>
          </div>
          <span>GlassUI</span>
        </div>
        <div className="nv-767__links">
          <a href="#" className="nv-767__link nv-767__link--active">
            Home
          </a>
          <a href="#" className="nv-767__link">
            Products
          </a>
          <a href="#" className="nv-767__link">
            Pricing
          </a>
          <a href="#" className="nv-767__link">
            Resources
          </a>
        </div>
        <div className="nv-767__actions">
          <a href="#" className="nv-767__icon-btn">
            <i className="fa-regular fa-bell"></i>
          </a>
          <a href="#" className="nv-767__profile">
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-767">
    <div class="nv-767__brand">
        <div class="nv-767__icon">
            <i class="fa-solid fa-gem"></i>
        </div>
        <span>GlassUI</span>
    </div>
    <div class="nv-767__links">
        <a href="#" class="nv-767__link nv-767__link--active">Home</a>
        <a href="#" class="nv-767__link">Products</a>
        <a href="#" class="nv-767__link">Pricing</a>
        <a href="#" class="nv-767__link">Resources</a>
    </div>
    <div class="nv-767__actions">
        <a href="#" class="nv-767__icon-btn">
            <i class="fa-regular fa-bell"></i>
        </a>
        <a href="#" class="nv-767__profile">
            <i class="fa-solid fa-user"></i>
        </a>
    </div>
</nav>`,
    css: `.nv-767 {
    width: 100%;
    max-width: 760px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 18px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-sizing: border-box;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.nv-767__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-767__icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.12);
    color: #c4b5fd;
}

.nv-767__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-767__link {
    padding: 7px 10px;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 12px;
    transition: all 0.2s;
}

.nv-767__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}

.nv-767__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.nv-767__actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-767__icon-btn,
.nv-767__profile {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s;
}

.nv-767__icon-btn {
    color: rgba(255, 255, 255, 0.65);
    background: rgba(255, 255, 255, 0.06);
}

.nv-767__icon-btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
}

.nv-767__profile {
    background: #8b5cf6;
    color: #fff;
}`,
  },
  {
    id: 768,
    name: "Minimal Navbar",
    preview: (
      <nav className="nv-768">
        <div className="nv-768__logo">
          <i className="fa-solid fa-bolt"></i>
          <span>Minimal</span>
        </div>
        <div className="nv-768__nav">
          <a href="#" className="nv-768__link nv-768__link--active">
            Home
          </a>
          <a href="#" className="nv-768__link">
            Features
          </a>
          <a href="#" className="nv-768__link">
            Pricing
          </a>
          <a href="#" className="nv-768__link">
            Contact
          </a>
        </div>
        <a href="#" className="nv-768__login">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          Login
        </a>
      </nav>
    ),
    html: `<nav class="nv-768">
    <div class="nv-768__logo">
        <i class="fa-solid fa-bolt"></i>
        <span>Minimal</span>
    </div>
    <div class="nv-768__nav">
        <a href="#" class="nv-768__link nv-768__link--active">Home</a>
        <a href="#" class="nv-768__link">Features</a>
        <a href="#" class="nv-768__link">Pricing</a>
        <a href="#" class="nv-768__link">Contact</a>
    </div>
    <a href="#" class="nv-768__login">
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
        Login
    </a>
</nav>`,
    css: `.nv-768 {
    width: 100%;
    max-width: 760px;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-sizing: border-box;
}

.nv-768__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #18181b;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-768__logo i {
    font-size: 17px;
}

.nv-768__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-768__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 7px;
    transition: all 0.2s;
}

.nv-768__link:hover {
    color: #18181b;
    background: #f4f4f5;
}

.nv-768__link--active {
    color: #18181b;
    font-weight: 600;
}

.nv-768__login {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #fff;
    background: #18181b;
    text-decoration: none;
    font-size: 11px;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s;
    white-space: nowrap;
}

.nv-768__login:hover {
    background: #3f3f46;
}`,
  },
  {
    id: 769,
    name: "Modern Navbar",
    preview: (
      <nav className="nv-769">
        <div className="nv-769__brand">
          <div className="nv-769__brand-icon">
            <i className="fa-solid fa-shapes"></i>
          </div>
          <div className="nv-769__brand-text">
            <strong>ModernUI</strong>
            <span>Design System</span>
          </div>
        </div>
        <div className="nv-769__nav">
          <a href="#" className="nv-769__link nv-769__link--active">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
          <a href="#" className="nv-769__link">
            <i className="fa-solid fa-layer-group"></i>
            Components
          </a>
          <a href="#" className="nv-769__link">
            <i className="fa-solid fa-folder-open"></i>
            Projects
          </a>
        </div>
        <button className="nv-769__profile">
          <i className="fa-solid fa-user"></i>
        </button>
      </nav>
    ),
    html: `<nav class="nv-769">
    <div class="nv-769__brand">
        <div class="nv-769__brand-icon">
            <i class="fa-solid fa-shapes"></i>
        </div>
        <div class="nv-769__brand-text">
            <strong>ModernUI</strong>
            <span>Design System</span>
        </div>
    </div>
    <div class="nv-769__nav">
        <a href="#" class="nv-769__link nv-769__link--active">
            <i class="fa-solid fa-house"></i>
            Home
        </a>
        <a href="#" class="nv-769__link">
            <i class="fa-solid fa-layer-group"></i>
            Components
        </a>
        <a href="#" class="nv-769__link">
            <i class="fa-solid fa-folder-open"></i>
            Projects
        </a>
    </div>
    <button class="nv-769__profile">
        <i class="fa-solid fa-user"></i>
    </button>
</nav>`,
    css: `.nv-769 {
    width: 100%;
    max-width: 760px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-sizing: border-box;
}

.nv-769__brand {
    display: flex;
    align-items: center;
    gap: 9px;
}

.nv-769__brand-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    background: #18181b;
    color: #fff;
    border-radius: 10px;
}

.nv-769__brand-text strong {
    display: block;
    color: #18181b;
    font-size: 13px;
}

.nv-769__brand-text span {
    display: block;
    margin-top: 1px;
    color: #94a3b8;
    font-size: 9px;
}

.nv-769__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    flex: 1;
}

.nv-769__link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border-radius: 9px;
    color: #64748b;
    text-decoration: none;
    font-size: 11px;
    transition: all 0.2s;
}

.nv-769__link:hover {
    color: #18181b;
    background: #e2e8f0;
}

.nv-769__link--active {
    color: #18181b;
    background: #e2e8f0;
    font-weight: 600;
}

.nv-769__profile {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
}

.nv-769__profile:hover {
    transform: scale(1.05);
}`,
  },
  {
    id: 770,
    name: "Dashboard Navbar",
    preview: (
      <nav className="nv-770">
        <div className="nv-770__brand">
          <i className="fa-solid fa-chart-line"></i>
          <span>Dashboard</span>
        </div>
        <div className="nv-770__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nv-770__actions">
          <button>
            <i className="fa-regular fa-bell"></i>
          </button>
          <button>
            <i className="fa-solid fa-gear"></i>
          </button>
          <div className="nv-770__avatar">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-770">
    <div class="nv-770__brand">
        <i class="fa-solid fa-chart-line"></i>
        <span>Dashboard</span>
    </div>
    <div class="nv-770__search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search...">
    </div>
    <div class="nv-770__actions">
        <button>
            <i class="fa-regular fa-bell"></i>
        </button>
        <button>
            <i class="fa-solid fa-gear"></i>
        </button>
        <div class="nv-770__avatar">
            <i class="fa-solid fa-user"></i>
        </div>
    </div>
</nav>`,
    css: `.nv-770 {
    width: 100%;
    max-width: 760px;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 14px;
    padding: 11px 16px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-sizing: border-box;
}

.nv-770__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-770__brand i {
    font-size: 16px;
    color: #60a5fa;
}

.nv-770__search {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    max-width: 320px;
    margin: 0 auto;
    padding: 8px 11px;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 9px;
}

.nv-770__search i {
    color: #64748b;
    font-size: 11px;
}

.nv-770__search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 11px;
}

.nv-770__search input::placeholder {
    color: #64748b;
}

.nv-770__actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-770__actions button {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #334155;
    border-radius: 8px;
    background: #1e293b;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.2s;
}

.nv-770__actions button:hover {
    color: #fff;
    background: #334155;
}

.nv-770__avatar {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #3b82f6;
    color: #fff;
}
`,
  },
  {
    id: 771,
    name: "SaaS Navigation",
    preview: (
      <nav className="nv-771">
        <div className="nv-771__brand">
          <div className="nv-771__logo">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <span>Launchly</span>
        </div>
        <div className="nv-771__nav">
          <a href="#" className="nv-771__link nv-771__link--active">
            Product
          </a>
          <a href="#" className="nv-771__link">
            Solutions
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <a href="#" className="nv-771__link">
            Pricing
          </a>
          <a href="#" className="nv-771__link">
            Resources
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
        <div className="nv-771__actions">
          <a href="#" className="nv-771__login">
            Sign in
          </a>
          <a href="#" className="nv-771__cta">
            Start free
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-771">
    <div class="nv-771__brand">
        <div class="nv-771__logo">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <span>Launchly</span>
    </div>
    <div class="nv-771__nav">
        <a href="#" class="nv-771__link nv-771__link--active">Product</a>
        <a href="#" class="nv-771__link">
            Solutions
            <i class="fa-solid fa-chevron-down"></i>
        </a>
        <a href="#" class="nv-771__link">Pricing</a>
        <a href="#" class="nv-771__link">
            Resources
            <i class="fa-solid fa-chevron-down"></i>
        </a>
    </div>
    <div class="nv-771__actions">
        <a href="#" class="nv-771__login">Sign in</a>
        <a href="#" class="nv-771__cta">
            Start free
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</nav>`,
    css: `.nv-771 {
    width: 100%;
    max-width: 860px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 24px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
}

.nv-771__brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #111827;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-771__logo {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    color: #fff;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
}

.nv-771__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-771__link {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 10px;
    border-radius: 8px;
    color: #64748b;
    text-decoration: none;
    font-size: 12px;
    transition: all 0.2s;
    white-space: nowrap;
}

.nv-771__link i {
    font-size: 9px;
}

.nv-771__link:hover {
    color: #111827;
    background: #f1f5f9;
}

.nv-771__link--active {
    color: #111827;
    font-weight: 600;
}

.nv-771__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nv-771__login {
    color: #475569;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
}

.nv-771__cta {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 13px;
    border-radius: 9px;
    color: #fff;
    background: #111827;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    transition: all 0.2s;
}

.nv-771__cta:hover {
    background: #2563eb;
}`,
  },
  {
    id: 772,
    name: "Ecommerce Navbar",
    preview: (
      <nav className="nv-772">
        <div className="nv-772__brand">
          <i className="fa-solid fa-bag-shopping"></i>
          <span>Maison</span>
        </div>
        <div className="nv-772__categories">
          <a href="#" className="nv-772__link">
            New In
          </a>
          <a href="#" className="nv-772__link">
            Women
          </a>
          <a href="#" className="nv-772__link">
            Men
          </a>
          <a href="#" className="nv-772__link">
            Accessories
          </a>
          <a href="#" className="nv-772__link nv-772__link--sale">
            Sale
          </a>
        </div>
        <div className="nv-772__actions">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="nv-772__cart">
            <i className="fa-solid fa-bag-shopping"></i>
            <span>2</span>
          </button>
        </div>
      </nav>
    ),
    html: `<nav class="nv-772">
    <div class="nv-772__brand">
        <i class="fa-solid fa-bag-shopping"></i>
        <span>Maison</span>
    </div>
    <div class="nv-772__categories">
        <a href="#" class="nv-772__link">New In</a>
        <a href="#" class="nv-772__link">Women</a>
        <a href="#" class="nv-772__link">Men</a>
        <a href="#" class="nv-772__link">Accessories</a>
        <a href="#" class="nv-772__link nv-772__link--sale">Sale</a>
    </div>
    <div class="nv-772__actions">
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button>
            <i class="fa-regular fa-heart"></i>
        </button>
        <button class="nv-772__cart">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>2</span>
        </button>
    </div>
</nav>`,
    css: `.nv-772 {
    width: 100%;
    max-width: 860px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 22px;
    background: #fff;
    border-bottom: 1px solid #e7e5e4;
    box-sizing: border-box;
}

.nv-772__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1c1917;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.02em;
    white-space: nowrap;
}

.nv-772__brand i {
    font-size: 16px;
}

.nv-772__categories {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-772__link {
    padding: 8px 10px;
    color: #57534e;
    text-decoration: none;
    font-size: 11px;
    border-radius: 6px;
    transition: all 0.2s;
    white-space: nowrap;
}

.nv-772__link:hover {
    color: #1c1917;
    background: #f5f5f4;
}

.nv-772__link--sale {
    color: #dc2626;
    font-weight: 700;
}

.nv-772__actions {
    display: flex;
    align-items: center;
    gap: 6px;
}

.nv-772__actions button {
    position: relative;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: none;
    background: transparent;
    color: #44403c;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.nv-772__actions button:hover {
    background: #f5f5f4;
}

.nv-772__cart span {
    position: absolute;
    top: 1px;
    right: 1px;
    min-width: 13px;
    height: 13px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #1c1917;
    color: #fff;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 773,
    name: "Creative Agency Navbar",
    preview: (
      <nav className="nv-773">
        <a href="#" className="nv-773__brand">
          <span>ARC</span>
          <small>CREATIVE STUDIO</small>
        </a>
        <div className="nv-773__links">
          <a href="#" className="nv-773__link nv-773__link--active">
            Work
          </a>
          <a href="#" className="nv-773__link">
            Studio
          </a>
          <a href="#" className="nv-773__link">
            Services
          </a>
          <a href="#" className="nv-773__link">
            Contact
          </a>
        </div>
        <a href="#" className="nv-773__project">
          Start a project
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </nav>
    ),
    html: `<nav class="nv-773">
    <a href="#" class="nv-773__brand">
        <span>ARC</span>
        <small>CREATIVE STUDIO</small>
    </a>
    <div class="nv-773__links">
        <a href="#" class="nv-773__link nv-773__link--active">Work</a>
        <a href="#" class="nv-773__link">Studio</a>
        <a href="#" class="nv-773__link">Services</a>
        <a href="#" class="nv-773__link">Contact</a>
    </div>
    <a href="#" class="nv-773__project">
        Start a project
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
</nav>`,
    css: `.nv-773 {
    width: 100%;
    max-width: 860px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    background: #18181b;
    border-radius: 14px;
    box-sizing: border-box;
}

.nv-773__brand {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-decoration: none;
    line-height: 1;
    min-width: 130px;
}

.nv-773__brand span {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.05em;
}

.nv-773__brand small {
    margin-top: 5px;
    color: #71717a;
    font-size: 7px;
    letter-spacing: 0.18em;
}

.nv-773__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    flex: 1;
}

.nv-773__link {
    padding: 8px 12px;
    color: #a1a1aa;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.2s;
}

.nv-773__link:hover,
.nv-773__link--active {
    color: #fff;
}

.nv-773__project {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    color: #18181b;
    background: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-773__project i {
    font-size: 10px;
}`,
  },
  {
    id: 774,
    name: "Documentation Navbar",
    preview: (
      <nav className="nv-774">
        <div className="nv-774__brand">
          <div className="nv-774__logo">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <div>
            <strong>DevDocs</strong>
            <span>v2.4</span>
          </div>
        </div>
        <div className="nv-774__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search documentation...</span>
          <kbd>⌘ K</kbd>
        </div>
        <div className="nv-774__links">
          <a href="#">Guides</a>
          <a href="#">API</a>
          <a href="#">Examples</a>
          <a href="#">GitHub</a>
        </div>
        <button className="nv-774__theme">
          <i className="fa-solid fa-moon"></i>
        </button>
      </nav>
    ),
    html: `<nav class="nv-774">
    <div class="nv-774__brand">
        <div class="nv-774__logo">
            <i class="fa-solid fa-book-open"></i>
        </div>
        <div>
            <strong>DevDocs</strong>
            <span>v2.4</span>
        </div>
    </div>
    <div class="nv-774__search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>Search documentation...</span>
        <kbd>⌘ K</kbd>
    </div>
    <div class="nv-774__links">
        <a href="#">Guides</a>
        <a href="#">API</a>
        <a href="#">Examples</a>
        <a href="#">GitHub</a>
    </div>
    <button class="nv-774__theme">
        <i class="fa-solid fa-moon"></i>
    </button>
</nav>`,
    css: `.nv-774 {
    width: 100%;
    max-width: 900px;
    padding: 11px 14px;
    display: flex;
    align-items: center;
    gap: 18px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    box-sizing: border-box;
}

.nv-774__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    white-space: nowrap;
}

.nv-774__logo {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    background: #18181b;
    color: #fff;
    border-radius: 9px;
}

.nv-774__brand strong {
    display: inline;
    color: #18181b;
    font-size: 13px;
}

.nv-774__brand span {
    margin-left: 5px;
    color: #a1a1aa;
    font-size: 9px;
}

.nv-774__search {
    flex: 1;
    max-width: 300px;
    min-width: 180px;
    height: 36px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    background: #f8fafc;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    color: #a1a1aa;
    font-size: 10px;
}

.nv-774__search kbd {
    margin-left: auto;
    padding: 3px 6px;
    border: 1px solid #d4d4d8;
    border-radius: 5px;
    background: #fff;
    color: #71717a;
    font-size: 8px;
}

.nv-774__links {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-left: auto;
}

.nv-774__links a {
    padding: 7px 8px;
    color: #52525b;
    text-decoration: none;
    font-size: 10px;
    border-radius: 6px;
}

.nv-774__links a:hover {
    background: #f4f4f5;
    color: #18181b;
}

.nv-774__theme {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    background: #fff;
    color: #52525b;
    cursor: pointer;
}`,
  },
  {
    id: 775,
    name: "Portfolio Navbar",
    preview: (
      <nav className="nv-775">
        <div className="nv-775__brand">
          <div className="nv-775__avatar">A</div>
          <div>
            <strong>Alex Morgan</strong>
            <span>Product Designer</span>
          </div>
        </div>
        <div className="nv-775__links">
          <a href="#" className="nv-775__link nv-775__link--active">
            Home
          </a>
          <a href="#" className="nv-775__link">
            About
          </a>
          <a href="#" className="nv-775__link">
            Work
          </a>
          <a href="#" className="nv-775__link">
            Journal
          </a>
        </div>
        <a href="#" className="nv-775__contact">
          Let's talk
          <i className="fa-regular fa-paper-plane"></i>
        </a>
      </nav>
    ),
    html: `<nav class="nv-775">
    <div class="nv-775__brand">
        <div class="nv-775__avatar">A</div>
        <div>
            <strong>Alex Morgan</strong>
            <span>Product Designer</span>
        </div>
    </div>
    <div class="nv-775__links">
        <a href="#" class="nv-775__link nv-775__link--active">Home</a>
        <a href="#" class="nv-775__link">About</a>
        <a href="#" class="nv-775__link">Work</a>
        <a href="#" class="nv-775__link">Journal</a>
    </div>
    <a href="#" class="nv-775__contact">
        Let's talk
        <i class="fa-regular fa-paper-plane"></i>
    </a>
</nav>`,
    css: `.nv-775 {
    width: 100%;
    max-width: 860px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    background: #fafaf9;
    border: 1px solid #e7e5e4;
    border-radius: 18px;
    box-sizing: border-box;
}

.nv-775__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    white-space: nowrap;
}

.nv-775__avatar {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fde68a;
    color: #713f12;
    font-size: 13px;
    font-weight: 800;
}

.nv-775__brand strong {
    display: block;
    color: #292524;
    font-size: 12px;
}

.nv-775__brand span {
    display: block;
    margin-top: 2px;
    color: #a8a29e;
    font-size: 9px;
}

.nv-775__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    flex: 1;
}

.nv-775__link {
    padding: 7px 10px;
    color: #78716c;
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    transition: all 0.2s;
}

.nv-775__link:hover {
    color: #292524;
    background: #f5f5f4;
}

.nv-775__link--active {
    color: #292524;
    font-weight: 700;
}

.nv-775__contact {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border-radius: 9px;
    background: #292524;
    color: #fff;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
}`,
  },
  {
    id: 776,
    name: "Startup Navbar",
    preview: (
      <nav className="nv-776">
        <div className="nv-776__brand">
          <div className="nv-776__mark">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <span>Orbit</span>
          <span className="nv-776__badge">BETA</span>
        </div>
        <div className="nv-776__nav">
          <a href="#">Platform</a>
          <a href="#">Customers</a>
          <a href="#">Integrations</a>
          <a href="#">Changelog</a>
        </div>
        <div className="nv-776__actions">
          <a href="#" className="nv-776__login">
            Log in
          </a>
          <a href="#" className="nv-776__button">
            Book demo
          </a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-776">
    <div class="nv-776__brand">
        <div class="nv-776__mark">
            <i class="fa-solid fa-rocket"></i>
        </div>
        <span>Orbit</span>
        <span class="nv-776__badge">BETA</span>
    </div>
    <div class="nv-776__nav">
        <a href="#">Platform</a>
        <a href="#">Customers</a>
        <a href="#">Integrations</a>
        <a href="#">Changelog</a>
    </div>
    <div class="nv-776__actions">
        <a href="#" class="nv-776__login">Log in</a>
        <a href="#" class="nv-776__button">Book demo</a>
    </div>
</nav>`,
    css: `.nv-776 {
    width: 100%;
    max-width: 860px;
    padding: 13px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 15px;
    box-sizing: border-box;
}

.nv-776__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-776__mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #22c55e;
    color: #052e16;
}

.nv-776__badge {
    padding: 3px 6px;
    border-radius: 999px;
    background: rgba(34, 197, 94, 0.12);
    color: #4ade80;
    font-size: 7px;
    letter-spacing: 0.08em;
}

.nv-776__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-776__nav a {
    padding: 7px 9px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 10px;
    border-radius: 7px;
    transition: all 0.2s;
}

.nv-776__nav a:hover {
    color: #fff;
    background: #1e293b;
}

.nv-776__actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nv-776__login {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 10px;
    font-weight: 600;
}

.nv-776__button {
    padding: 8px 12px;
    border-radius: 8px;
    background: #22c55e;
    color: #052e16;
    text-decoration: none;
    font-size: 10px;
    font-weight: 800;
}`,
  },
  {
    id: 777,
    name: "News Portal Navbar",
    preview: (
      <nav className="nv-777">
        <div className="nv-777__brand">
          <span>THE DAILY</span>
          <small>EST. 1994</small>
        </div>
        <div className="nv-777__topics">
          <a href="#" className="nv-777__topic nv-777__topic--active">
            Latest
          </a>
          <a href="#" className="nv-777__topic">
            World
          </a>
          <a href="#" className="nv-777__topic">
            Business
          </a>
          <a href="#" className="nv-777__topic">
            Technology
          </a>
          <a href="#" className="nv-777__topic">
            Culture
          </a>
          <a href="#" className="nv-777__topic">
            Sports
          </a>
        </div>
        <div className="nv-777__actions">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <a href="#" className="nv-777__subscribe">
            Subscribe
          </a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-777">
    <div class="nv-777__brand">
        <span>THE DAILY</span>
        <small>EST. 1994</small>
    </div>
    <div class="nv-777__topics">
        <a href="#" class="nv-777__topic nv-777__topic--active">Latest</a>
        <a href="#" class="nv-777__topic">World</a>
        <a href="#" class="nv-777__topic">Business</a>
        <a href="#" class="nv-777__topic">Technology</a>
        <a href="#" class="nv-777__topic">Culture</a>
        <a href="#" class="nv-777__topic">Sports</a>
    </div>
    <div class="nv-777__actions">
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <a href="#" class="nv-777__subscribe">Subscribe</a>
    </div>
</nav>`,
    css: `.nv-777 {
    width: 100%;
    max-width: 900px;
    padding: 13px 18px;
    display: flex;
    align-items: center;
    gap: 22px;
    background: #fff;
    border-top: 2px solid #111827;
    border-bottom: 1px solid #d4d4d8;
    box-sizing: border-box;
}

.nv-777__brand {
    display: flex;
    flex-direction: column;
    color: #111827;
    line-height: 1;
    white-space: nowrap;
}

.nv-777__brand span {
    font-family: Georgia, serif;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -0.04em;
}

.nv-777__brand small {
    margin-top: 4px;
    color: #71717a;
    font-size: 7px;
    letter-spacing: 0.14em;
    text-align: center;
}

.nv-777__topics {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    overflow: hidden;
}

.nv-777__topic {
    padding: 6px 8px;
    color: #52525b;
    text-decoration: none;
    font-size: 9px;
    white-space: nowrap;
}

.nv-777__topic:hover,
.nv-777__topic--active {
    color: #111827;
    font-weight: 700;
}

.nv-777__actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-777__actions button {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid #e4e4e7;
    border-radius: 6px;
    background: #fff;
    color: #52525b;
    cursor: pointer;
}

.nv-777__subscribe {
    padding: 8px 10px;
    border-radius: 6px;
    background: #111827;
    color: #fff;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
}`,
  },
  {
    id: 778,
    name: "Gaming Navbar",
    preview: (
      <nav className="nv-778">
        <div className="nv-778__brand">
          <div className="nv-778__logo">
            <i className="fa-solid fa-gamepad"></i>
          </div>
          <div>
            <strong>NEXUS</strong>
            <span>GAMING</span>
          </div>
        </div>
        <div className="nv-778__nav">
          <a href="#" className="nv-778__link nv-778__link--active">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
          <a href="#" className="nv-778__link">
            <i className="fa-solid fa-trophy"></i>
            Tournaments
          </a>
          <a href="#" className="nv-778__link">
            <i className="fa-solid fa-users"></i>
            Community
          </a>
          <a href="#" className="nv-778__link">
            <i className="fa-solid fa-store"></i>
            Store
          </a>
        </div>
        <div className="nv-778__profile">
          <span className="nv-778__online"></span>
          <div>
            <strong>ShadowFox</strong>
            <small>Online</small>
          </div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </nav>
    ),
    html: `<nav class="nv-778">
    <div class="nv-778__brand">
        <div class="nv-778__logo">
            <i class="fa-solid fa-gamepad"></i>
        </div>
        <div>
            <strong>NEXUS</strong>
            <span>GAMING</span>
        </div>
    </div>
    <div class="nv-778__nav">
        <a href="#" class="nv-778__link nv-778__link--active">
            <i class="fa-solid fa-house"></i>
            Home
        </a>
        <a href="#" class="nv-778__link">
            <i class="fa-solid fa-trophy"></i>
            Tournaments
        </a>
        <a href="#" class="nv-778__link">
            <i class="fa-solid fa-users"></i>
            Community
        </a>
        <a href="#" class="nv-778__link">
            <i class="fa-solid fa-store"></i>
            Store
        </a>
    </div>
    <div class="nv-778__profile">
        <span class="nv-778__online"></span>
        <div>
            <strong>ShadowFox</strong>
            <small>Online</small>
        </div>
        <i class="fa-solid fa-chevron-down"></i>
    </div>
</nav>`,
    css: `.nv-778 {
    width: 100%;
    max-width: 900px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 12px;
    box-sizing: border-box;
    color: #fff;
}

.nv-778__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    white-space: nowrap;
}

.nv-778__logo {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    color: #09090b;
    background: #a3e635;
}

.nv-778__brand strong {
    display: block;
    font-size: 12px;
    letter-spacing: 0.12em;
}

.nv-778__brand span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 7px;
    letter-spacing: 0.2em;
}

.nv-778__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    flex: 1;
}

.nv-778__link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    border-radius: 7px;
    color: #71717a;
    text-decoration: none;
    font-size: 10px;
    transition: all 0.2s;
}

.nv-778__link:hover,
.nv-778__link--active {
    color: #a3e635;
    background: rgba(163, 230, 53, 0.08);
}

.nv-778__profile {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 8px;
    border: 1px solid #27272a;
    border-radius: 9px;
    white-space: nowrap;
}

.nv-778__online {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.7);
}

.nv-778__profile strong {
    display: block;
    color: #f4f4f5;
    font-size: 9px;
}

.nv-778__profile small {
    display: block;
    margin-top: 1px;
    color: #71717a;
    font-size: 7px;
}

.nv-778__profile > i {
    margin-left: 3px;
    color: #71717a;
    font-size: 8px;
}`,
  },
  {
    id: 779,
    name: "Finance Dashboard Navbar",
    preview: (
      <nav className="nv-779">
        <div className="nv-779__brand">
          <i className="fa-solid fa-chart-pie"></i>
          <span>Finora</span>
        </div>
        <div className="nv-779__account">
          <span>Portfolio</span>
          <strong>$284,920.40</strong>
          <small>+8.42%</small>
        </div>
        <div className="nv-779__nav">
          <a href="#" className="nv-779__link nv-779__link--active">
            Overview
          </a>
          <a href="#" className="nv-779__link">
            Markets
          </a>
          <a href="#" className="nv-779__link">
            Transactions
          </a>
          <a href="#" className="nv-779__link">
            Reports
          </a>
        </div>
        <div className="nv-779__actions">
          <button>
            <i className="fa-solid fa-bell"></i>
          </button>
          <div className="nv-779__avatar">AM</div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-779">
    <div class="nv-779__brand">
        <i class="fa-solid fa-chart-pie"></i>
        <span>Finora</span>
    </div>
    <div class="nv-779__account">
        <span>Portfolio</span>
        <strong>$284,920.40</strong>
        <small>+8.42%</small>
    </div>
    <div class="nv-779__nav">
        <a href="#" class="nv-779__link nv-779__link--active">Overview</a>
        <a href="#" class="nv-779__link">Markets</a>
        <a href="#" class="nv-779__link">Transactions</a>
        <a href="#" class="nv-779__link">Reports</a>
    </div>
    <div class="nv-779__actions">
        <button>
            <i class="fa-solid fa-bell"></i>
        </button>
        <div class="nv-779__avatar">AM</div>
    </div>
</nav>`,
    css: `.nv-779 {
    width: 100%;
    max-width: 920px;
    padding: 11px 14px;
    display: flex;
    align-items: center;
    gap: 18px;
    background: #07111f;
    border: 1px solid #172033;
    border-radius: 13px;
    color: #fff;
    box-sizing: border-box;
}

.nv-779__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-779__brand i {
    color: #38bdf8;
}

.nv-779__account {
    display: flex;
    align-items: center;
    gap: 7px;
    padding-right: 16px;
    border-right: 1px solid #172033;
    white-space: nowrap;
}

.nv-779__account span {
    color: #64748b;
    font-size: 8px;
}

.nv-779__account strong {
    color: #f8fafc;
    font-size: 10px;
}

.nv-779__account small {
    color: #22c55e;
    font-size: 8px;
    font-weight: 700;
}

.nv-779__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
}

.nv-779__link {
    padding: 7px 9px;
    color: #64748b;
    text-decoration: none;
    font-size: 9px;
    border-radius: 7px;
}

.nv-779__link:hover {
    color: #fff;
}

.nv-779__link--active {
    color: #fff;
    background: #172033;
}

.nv-779__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nv-779__actions button {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border: 1px solid #172033;
    border-radius: 8px;
    background: #0c1729;
    color: #94a3b8;
}

.nv-779__avatar {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #7c3aed;
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 780,
    name: "Music Player Navbar",
    preview: (
      <nav className="nv-780">
        <div className="nv-780__brand">
          <div className="nv-780__logo">
            <i className="fa-solid fa-music"></i>
          </div>
          <span>Pulse</span>
        </div>
        <div className="nv-780__player">
          <button>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button className="nv-780__play">
            <i className="fa-solid fa-play"></i>
          </button>
          <button>
            <i className="fa-solid fa-forward-step"></i>
          </button>
          <div className="nv-780__track">
            <strong>Midnight Drive</strong>
            <span>Neon Skyline</span>
          </div>
          <div className="nv-780__progress">
            <span></span>
          </div>
        </div>
        <div className="nv-780__actions">
          <button>
            <i className="fa-solid fa-volume-high"></i>
          </button>
          <button>
            <i className="fa-solid fa-heart"></i>
          </button>
          <button>
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
      </nav>
    ),
    html: `<nav class="nv-780">
    <div class="nv-780__brand">
        <div class="nv-780__logo">
            <i class="fa-solid fa-music"></i>
        </div>
        <span>Pulse</span>
    </div>
    <div class="nv-780__player">
        <button>
            <i class="fa-solid fa-backward-step"></i>
        </button>
        <button class="nv-780__play">
            <i class="fa-solid fa-play"></i>
        </button>
        <button>
            <i class="fa-solid fa-forward-step"></i>
        </button>
        <div class="nv-780__track">
            <strong>Midnight Drive</strong>
            <span>Neon Skyline</span>
        </div>
        <div class="nv-780__progress">
            <span></span>
        </div>
    </div>
    <div class="nv-780__actions">
        <button>
            <i class="fa-solid fa-volume-high"></i>
        </button>
        <button>
            <i class="fa-solid fa-heart"></i>
        </button>
        <button>
            <i class="fa-solid fa-list"></i>
        </button>
    </div>
</nav>`,
    css: `.nv-780 {
    width: 100%;
    max-width: 900px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #111113;
    border: 1px solid #27272a;
    border-radius: 14px;
    color: #fff;
    box-sizing: border-box;
}

.nv-780__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-780__logo {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #18181b;
    background: #f472b6;
}

.nv-780__player {
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
}

.nv-780__player button,
.nv-780__actions button {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #a1a1aa;
    cursor: pointer;
}

.nv-780__player button:hover,
.nv-780__actions button:hover {
    color: #fff;
}

.nv-780__player .nv-780__play {
    background: #fff;
    color: #18181b;
}

.nv-780__track {
    display: flex;
    flex-direction: column;
    margin-left: 7px;
    min-width: 120px;
}

.nv-780__track strong {
    font-size: 9px;
}

.nv-780__track span {
    margin-top: 2px;
    color: #71717a;
    font-size: 8px;
}

.nv-780__progress {
    height: 3px;
    flex: 1;
    margin-left: 12px;
    border-radius: 999px;
    background: #27272a;
    overflow: hidden;
}

.nv-780__progress span {
    display: block;
    width: 62%;
    height: 100%;
    border-radius: inherit;
    background: #f472b6;
}

.nv-780__actions {
    display: flex;
    align-items: center;
    gap: 2px;
}`,
  },
  {
    id: 781,
    name: "Travel Navbar",
    preview: (
      <nav className="nv-781">
        <div className="nv-781__brand">
          <i className="fa-solid fa-compass"></i>
          <span>Wander</span>
        </div>
        <div className="nv-781__search">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>Where to?</span>
          </div>
          <div>
            <i className="fa-regular fa-calendar"></i>
            <span>Dates</span>
          </div>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nv-781__links">
          <a href="#">Explore</a>
          <a href="#">Trips</a>
          <a href="#">Host</a>
          <button>
            <i className="fa-solid fa-globe"></i>
          </button>
          <div className="nv-781__menu">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-781">
    <div class="nv-781__brand">
        <i class="fa-solid fa-compass"></i>
        <span>Wander</span>
    </div>
    <div class="nv-781__search">
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <span>Where to?</span>
        </div>
        <div>
            <i class="fa-regular fa-calendar"></i>
            <span>Dates</span>
        </div>
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
    <div class="nv-781__links">
        <a href="#">Explore</a>
        <a href="#">Trips</a>
        <a href="#">Host</a>
        <button>
            <i class="fa-solid fa-globe"></i>
        </button>
        <div class="nv-781__menu">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-user"></i>
        </div>
    </div>
</nav>`,
    css: `.nv-781 {
    width: 100%;
    max-width: 920px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    box-sizing: border-box;
}

.nv-781__brand {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #f43f5e;
    font-size: 16px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-781__brand i {
    font-size: 19px;
}

.nv-781__search {
    height: 46px;
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 400px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.nv-781__search > div {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 14px;
    color: #52525b;
    font-size: 10px;
}

.nv-781__search > div + div {
    border-left: 1px solid #e4e4e7;
}

.nv-781__search button {
    width: 34px;
    height: 34px;
    margin-left: auto;
    margin-right: 5px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: #f43f5e;
    color: #fff;
}

.nv-781__links {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
}

.nv-781__links a {
    padding: 7px 6px;
    color: #3f3f46;
    text-decoration: none;
    font-size: 10px;
}

.nv-781__links > button {
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    color: #52525b;
}

.nv-781__menu {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    color: #52525b;
}`,
  },
  {
    id: 782,
    name: "Developer Community Navbar",
    preview: (
      <nav className="nv-782">
        <div className="nv-782__brand">
          <i className="fa-brands fa-github"></i>
          <span>Codebase</span>
        </div>
        <div className="nv-782__nav">
          <a href="#">
            <i className="fa-solid fa-compass"></i>
            Discover
          </a>
          <a href="#">
            <i className="fa-solid fa-code-branch"></i>
            Projects
          </a>
          <a href="#">
            <i className="fa-solid fa-comments"></i>
            Discussions
          </a>
          <a href="#">
            <i className="fa-solid fa-users"></i>
            Community
          </a>
        </div>
        <div className="nv-782__actions">
          <div className="nv-782__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </div>
          <button>
            <i className="fa-solid fa-bell"></i>
          </button>
          <div className="nv-782__avatar">A</div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-782">
    <div class="nv-782__brand">
        <i class="fa-brands fa-github"></i>
        <span>Codebase</span>
    </div>
    <div class="nv-782__nav">
        <a href="#"><i class="fa-solid fa-compass"></i> Discover</a>
        <a href="#"><i class="fa-solid fa-code-branch"></i> Projects</a>
        <a href="#"><i class="fa-solid fa-comments"></i> Discussions</a>
        <a href="#"><i class="fa-solid fa-users"></i> Community</a>
    </div>
    <div class="nv-782__actions">
        <div class="nv-782__search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
        </div>
        <button>
            <i class="fa-solid fa-bell"></i>
        </button>
        <div class="nv-782__avatar">A</div>
    </div>
</nav>`,
    css: `.nv-782 {
    width: 100%;
    max-width: 920px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 10px;
    box-sizing: border-box;
    color: #f0f6fc;
}

.nv-782__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-782__brand i {
    font-size: 19px;
}

.nv-782__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
}

.nv-782__nav a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 8px;
    color: #8b949e;
    text-decoration: none;
    font-size: 9px;
    border-radius: 6px;
}

.nv-782__nav a:hover {
    color: #f0f6fc;
    background: #161b22;
}

.nv-782__actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-782__search {
    width: 105px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 9px;
    border: 1px solid #30363d;
    border-radius: 6px;
    color: #8b949e;
    font-size: 9px;
    box-sizing: border-box;
}

.nv-782__actions > button {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: none;
    background: transparent;
    color: #8b949e;
}

.nv-782__avatar {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #238636;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 783,
    name: "Restaurant Navbar",
    preview: (
      <nav className="nv-783">
        <div className="nv-783__brand">
          <i className="fa-solid fa-utensils"></i>
          <div>
            <strong>Olive & Stone</strong>
            <span>MODERN KITCHEN</span>
          </div>
        </div>
        <div className="nv-783__links">
          <a href="#" className="nv-783__active">
            Menu
          </a>
          <a href="#">About</a>
          <a href="#">Private Dining</a>
          <a href="#">Journal</a>
        </div>
        <div className="nv-783__actions">
          <span>
            <i className="fa-solid fa-phone"></i>
            +1 212 555 0192
          </span>
          <a href="#">Reserve a table</a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-783">
    <div class="nv-783__brand">
        <i class="fa-solid fa-utensils"></i>
        <div>
            <strong>Olive & Stone</strong>
            <span>MODERN KITCHEN</span>
        </div>
    </div>
    <div class="nv-783__links">
        <a href="#" class="nv-783__active">Menu</a>
        <a href="#">About</a>
        <a href="#">Private Dining</a>
        <a href="#">Journal</a>
    </div>
    <div class="nv-783__actions">
        <span>
            <i class="fa-solid fa-phone"></i>
            +1 212 555 0192
        </span>
        <a href="#">Reserve a table</a>
    </div>
</nav>`,
    css: `.nv-783 {
    width: 100%;
    max-width: 940px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 24px;
    background: #1c1917;
    color: #fff;
    border-radius: 13px;
    box-sizing: border-box;
}

.nv-783__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 155px;
}

.nv-783__brand > i {
    color: #d6a756;
    font-size: 18px;
}

.nv-783__brand strong {
    display: block;
    font-family: Georgia, serif;
    font-size: 14px;
    font-weight: 500;
}

.nv-783__brand span {
    display: block;
    margin-top: 3px;
    color: #a8a29e;
    font-size: 6px;
    letter-spacing: 0.18em;
}

.nv-783__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex: 1;
}

.nv-783__links a {
    padding: 7px 9px;
    color: #a8a29e;
    text-decoration: none;
    font-size: 10px;
}

.nv-783__links a:hover,
.nv-783__links .nv-783__active {
    color: #fff;
}

.nv-783__actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.nv-783__actions span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #a8a29e;
    font-size: 8px;
    white-space: nowrap;
}

.nv-783__actions a {
    padding: 8px 11px;
    border: 1px solid #57534e;
    color: #fff;
    text-decoration: none;
    font-size: 9px;
    border-radius: 5px;
    white-space: nowrap;
}`,
  },
  {
    id: 784,
    name: "Fintech Landing Navbar",
    preview: (
      <nav className="nv-784">
        <div className="nv-784__brand">
          <div className="nv-784__symbol">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <span>Vertex</span>
        </div>
        <div className="nv-784__center">
          <a href="#">Solutions</a>
          <a href="#">Why Vertex</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <span className="nv-784__new">NEW</span>
        </div>
        <div className="nv-784__actions">
          <a href="#">Login</a>
          <a href="#" className="nv-784__cta">
            Get started
          </a>
        </div>
      </nav>
    ),
    html: `<nav class="nv-784">
    <div class="nv-784__brand">
        <div class="nv-784__symbol">
            <i class="fa-solid fa-arrow-trend-up"></i>
        </div>
        <span>Vertex</span>
    </div>
    <div class="nv-784__center">
        <a href="#">Solutions</a>
        <a href="#">Why Vertex</a>
        <a href="#">Customers</a>
        <a href="#">Pricing</a>
        <span class="nv-784__new">NEW</span>
    </div>
    <div class="nv-784__actions">
        <a href="#">Login</a>
        <a href="#" class="nv-784__cta">Get started</a>
    </div>
</nav>`,
    css: `.nv-784 {
    width: 100%;
    max-width: 860px;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    border-radius: 15px;
    box-sizing: border-box;
}

.nv-784__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #064e3b;
    font-size: 15px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-784__symbol {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #ecfdf5;
    background: #059669;
}

.nv-784__center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
}

.nv-784__center a {
    padding: 7px 9px;
    color: #065f46;
    text-decoration: none;
    font-size: 10px;
}

.nv-784__new {
    padding: 3px 5px;
    border-radius: 999px;
    background: #d1fae5;
    color: #047857;
    font-size: 7px;
    font-weight: 800;
}

.nv-784__actions {
    display: flex;
    align-items: center;
    gap: 9px;
}

.nv-784__actions > a:first-child {
    color: #065f46;
    text-decoration: none;
    font-size: 10px;
    font-weight: 600;
}

.nv-784__cta {
    padding: 8px 11px;
    border-radius: 8px;
    background: #064e3b;
    color: #fff;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 785,
    name: "Status Navbar",
    preview: (
      <nav className="nv-785">
        <div className="nv-785__brand">
          <i className="fa-solid fa-cube"></i>
          <span>Stackbase</span>
        </div>
        <div className="nv-785__status">
          <span className="nv-785__dot"></span>
          <span>All systems operational</span>
        </div>
        <div className="nv-785__links">
          <a href="#">Dashboard</a>
          <a href="#">Services</a>
          <a href="#">Incidents</a>
          <a href="#">API</a>
        </div>
        <a href="#" className="nv-785__docs">
          Documentation
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </nav>
    ),
    html: `<nav class="nv-785">
    <div class="nv-785__brand">
        <i class="fa-solid fa-cube"></i>
        <span>Stackbase</span>
    </div>
    <div class="nv-785__status">
        <span class="nv-785__dot"></span>
        <span>All systems operational</span>
    </div>
    <div class="nv-785__links">
        <a href="#">Dashboard</a>
        <a href="#">Services</a>
        <a href="#">Incidents</a>
        <a href="#">API</a>
    </div>
    <a href="#" class="nv-785__docs">
        Documentation
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
</nav>`,
    css: `.nv-785 {
    width: 100%;
    max-width: 900px;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 16px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    box-sizing: border-box;
}

.nv-785__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #18181b;
    font-size: 13px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-785__brand i {
    color: #6366f1;
}

.nv-785__status {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border: 1px solid #dcfce7;
    border-radius: 999px;
    background: #f0fdf4;
    color: #166534;
    font-size: 8px;
    white-space: nowrap;
}

.nv-785__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
}

.nv-785__links {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
}

.nv-785__links a {
    padding: 7px 8px;
    color: #71717a;
    text-decoration: none;
    font-size: 9px;
}

.nv-785__links a:hover {
    color: #18181b;
}

.nv-785__docs {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #4f46e5;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
}

.nv-785__docs i {
    font-size: 8px;
}`,
  },
  {
    id: 786,
    name: "Mobile App Navbar",
    preview: (
      <nav className="nv-786">
        <button className="nv-786__menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="nv-786__brand">
          <div className="nv-786__logo">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <div>
            <strong>Pulse</strong>
            <span>Fitness</span>
          </div>
        </div>
        <div className="nv-786__center">
          <span>Tuesday, Aug 25</span>
        </div>
        <div className="nv-786__actions">
          <button>
            <i className="fa-regular fa-bell"></i>
          </button>
          <div className="nv-786__avatar">JD</div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-786">
    <button class="nv-786__menu">
        <i class="fa-solid fa-bars"></i>
    </button>
    <div class="nv-786__brand">
        <div class="nv-786__logo">
            <i class="fa-solid fa-bolt"></i>
        </div>
        <div>
            <strong>Pulse</strong>
            <span>Fitness</span>
        </div>
    </div>
    <div class="nv-786__center">
        <span>Tuesday, Aug 25</span>
    </div>
    <div class="nv-786__actions">
        <button>
            <i class="fa-regular fa-bell"></i>
        </button>
        <div class="nv-786__avatar">JD</div>
    </div>
</nav>`,
    css: `.nv-786 {
    width: 100%;
    max-width: 760px;
    height: 60px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 13px;
    background: #ffffff;
    border-bottom: 1px solid #e4e4e7;
    box-sizing: border-box;
}

.nv-786__menu {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: none;
    background: #f4f4f5;
    border-radius: 9px;
    color: #3f3f46;
}

.nv-786__brand {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nv-786__logo {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #111827;
    color: #facc15;
}

.nv-786__brand strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}

.nv-786__brand span {
    display: block;
    margin-top: 1px;
    color: #a1a1aa;
    font-size: 8px;
}

.nv-786__center {
    flex: 1;
    text-align: center;
    color: #71717a;
    font-size: 9px;
}

.nv-786__actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-786__actions > button {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fff;
    color: #52525b;
}

.nv-786__avatar {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f97316;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}`,
  },
  {
    id: 787,
    name: "Command Center Navbar",
    preview: (
      <nav className="nv-787">
        <div className="nv-787__brand">
          <div className="nv-787__indicator"></div>
          <span>COMMAND CENTER</span>
        </div>
        <div className="nv-787__crumbs">
          <span>Operations</span>
          <i className="fa-solid fa-chevron-right"></i>
          <strong>Production</strong>
        </div>
        <div className="nv-787__metrics">
          <div>
            <span>CPU</span>
            <strong>42%</strong>
          </div>
          <div>
            <span>MEM</span>
            <strong>68%</strong>
          </div>
          <div>
            <span>REQ</span>
            <strong>1.8k/s</strong>
          </div>
        </div>
        <button className="nv-787__settings">
          <i className="fa-solid fa-sliders"></i>
        </button>
      </nav>
    ),
    html: `<nav class="nv-787">
    <div class="nv-787__brand">
        <div class="nv-787__indicator"></div>
        <span>COMMAND CENTER</span>
    </div>
    <div class="nv-787__crumbs">
        <span>Operations</span>
        <i class="fa-solid fa-chevron-right"></i>
        <strong>Production</strong>
    </div>
    <div class="nv-787__metrics">
        <div>
            <span>CPU</span>
            <strong>42%</strong>
        </div>
        <div>
            <span>MEM</span>
            <strong>68%</strong>
        </div>
        <div>
            <span>REQ</span>
            <strong>1.8k/s</strong>
        </div>
    </div>
    <button class="nv-787__settings">
        <i class="fa-solid fa-sliders"></i>
    </button>
</nav>`,
    css: `.nv-787 {
    width: 100%;
    max-width: 920px;
    padding: 11px 14px;
    display: flex;
    align-items: center;
    gap: 18px;
    background: #020617;
    border: 1px solid #1e293b;
    border-radius: 10px;
    color: #e2e8f0;
    box-sizing: border-box;
}

.nv-787__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #cbd5e1;
    font-family: monospace;
    font-size: 8px;
    letter-spacing: 0.12em;
    white-space: nowrap;
}

.nv-787__indicator {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #06b6d4;
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
}

.nv-787__crumbs {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: monospace;
    font-size: 8px;
}

.nv-787__crumbs span {
    color: #64748b;
}

.nv-787__crumbs i {
    color: #334155;
    font-size: 7px;
}

.nv-787__crumbs strong {
    color: #e2e8f0;
}

.nv-787__metrics {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: auto;
}

.nv-787__metrics > div {
    min-width: 48px;
    padding: 5px 7px;
    border: 1px solid #1e293b;
    border-radius: 6px;
    background: #0f172a;
}

.nv-787__metrics span {
    display: block;
    color: #475569;
    font-family: monospace;
    font-size: 6px;
}

.nv-787__metrics strong {
    display: block;
    margin-top: 2px;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
}

.nv-787__settings {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 1px solid #1e293b;
    border-radius: 7px;
    background: #0f172a;
    color: #64748b;
}`,
  },
  {
    id: 788,
    name: "Social Platform Navbar",
    preview: (
      <nav className="nv-788">
        <div className="nv-788__brand">
          <i className="fa-solid fa-comment-dots"></i>
          <span>Connect</span>
        </div>
        <div className="nv-788__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search people and posts</span>
        </div>
        <div className="nv-788__nav">
          <a href="#" className="nv-788__link nv-788__link--active">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
          <a href="#" className="nv-788__link">
            <i className="fa-solid fa-compass"></i>
            <span>Explore</span>
          </a>
          <a href="#" className="nv-788__link">
            <i className="fa-regular fa-bell"></i>
            <span>Alerts</span>
          </a>
          <div className="nv-788__avatar">A</div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-788">
    <div class="nv-788__brand">
        <i class="fa-solid fa-comment-dots"></i>
        <span>Connect</span>
    </div>
    <div class="nv-788__search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>Search people and posts</span>
    </div>
    <div class="nv-788__nav">
        <a href="#" class="nv-788__link nv-788__link--active">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
        </a>
        <a href="#" class="nv-788__link">
            <i class="fa-solid fa-compass"></i>
            <span>Explore</span>
        </a>
        <a href="#" class="nv-788__link">
            <i class="fa-regular fa-bell"></i>
            <span>Alerts</span>
        </a>
        <div class="nv-788__avatar">A</div>
    </div>
</nav>`,
    css: `.nv-788 {
    width: 100%;
    max-width: 900px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 18px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    box-sizing: border-box;
}

.nv-788__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #18181b;
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-788__brand i {
    color: #ec4899;
    font-size: 18px;
}

.nv-788__search {
    flex: 1;
    max-width: 260px;
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 9px;
    background: #f4f4f5;
    color: #a1a1aa;
    font-size: 9px;
}

.nv-788__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
}

.nv-788__link {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 8px;
    color: #71717a;
    text-decoration: none;
    font-size: 9px;
    border-radius: 7px;
}

.nv-788__link:hover,
.nv-788__link--active {
    color: #18181b;
    background: #f4f4f5;
}

.nv-788__avatar {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    margin-left: 5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ec4899, #8b5cf6);
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}`,
  },
  {
    id: 789,
    name: "Education Navbar",
    preview: (
      <nav className="nv-789">
        <div className="nv-789__brand">
          <div className="nv-789__logo">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div>
            <strong>Learnify</strong>
            <span>Online Academy</span>
          </div>
        </div>
        <div className="nv-789__nav">
          <a href="#" className="nv-789__active">
            Courses
          </a>
          <a href="#">
            Learning Paths
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <a href="#">Mentors</a>
          <a href="#">Community</a>
        </div>
        <div className="nv-789__progress">
          <div className="nv-789__progress-top">
            <span>Weekly goal</span>
            <strong>72%</strong>
          </div>
          <div className="nv-789__bar">
            <span></span>
          </div>
        </div>
        <div className="nv-789__account">
          <div className="nv-789__avatar">AB</div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </nav>
    ),
    html: `<nav class="nv-789">
    <div class="nv-789__brand">
        <div class="nv-789__logo">
            <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div>
            <strong>Learnify</strong>
            <span>Online Academy</span>
        </div>
    </div>
    <div class="nv-789__nav">
        <a href="#" class="nv-789__active">Courses</a>
        <a href="#">
            Learning Paths
            <i class="fa-solid fa-chevron-down"></i>
        </a>
        <a href="#">Mentors</a>
        <a href="#">Community</a>
    </div>
    <div class="nv-789__progress">
        <div class="nv-789__progress-top">
            <span>Weekly goal</span>
            <strong>72%</strong>
        </div>
        <div class="nv-789__bar">
            <span></span>
        </div>
    </div>
    <div class="nv-789__account">
        <div class="nv-789__avatar">AB</div>
        <i class="fa-solid fa-chevron-down"></i>
    </div>
</nav>`,
    css: `.nv-789 {
    width: 100%;
    max-width: 950px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 18px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 15px;
    box-sizing: border-box;
}

.nv-789__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}

.nv-789__logo {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #eff6ff;
    color: #2563eb;
}

.nv-789__brand strong {
    display: block;
    color: #0f172a;
    font-size: 12px;
}

.nv-789__brand span {
    display: block;
    margin-top: 2px;
    color: #94a3b8;
    font-size: 8px;
}

.nv-789__nav {
    display: flex;
    align-items: center;
    gap: 3px;
    flex: 1;
}

.nv-789__nav a {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 8px;
    color: #64748b;
    text-decoration: none;
    font-size: 9px;
    border-radius: 7px;
}

.nv-789__nav a:hover,
.nv-789__nav .nv-789__active {
    color: #2563eb;
    background: #eff6ff;
}

.nv-789__nav i {
    font-size: 7px;
}

.nv-789__progress {
    width: 100px;
}

.nv-789__progress-top {
    display: flex;
    justify-content: space-between;
    color: #94a3b8;
    font-size: 7px;
}

.nv-789__progress-top strong {
    color: #2563eb;
}

.nv-789__bar {
    height: 4px;
    margin-top: 5px;
    border-radius: 999px;
    background: #e2e8f0;
    overflow: hidden;
}

.nv-789__bar span {
    display: block;
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}

.nv-789__account {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #94a3b8;
}

.nv-789__avatar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 790,
    name: "Announcement Navbar",
    preview: (
      <div className="nv-790">
        <div className="nv-790__announcement">
          <i className="fa-solid fa-sparkles"></i>
          <span>Version 3.0 is here. Explore the new design system.</span>
          <a href="#">
            Learn more
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <nav className="nv-790__nav">
          <div className="nv-790__brand">
            <i className="fa-solid fa-circle-nodes"></i>
            <span>NovaStack</span>
          </div>
          <div className="nv-790__links">
            <a href="#">Platform</a>
            <a href="#">Solutions</a>
            <a href="#">Developers</a>
            <a href="#">Pricing</a>
          </div>
          <div className="nv-790__actions">
            <a href="#">Sign in</a>
            <a href="#" className="nv-790__cta">
              Get started
            </a>
          </div>
        </nav>
      </div>
    ),
    html: `<div class="nv-790">
    <div class="nv-790__announcement">
        <i class="fa-solid fa-sparkles"></i>
        <span>
            Version 3.0 is here. Explore the new design system.
        </span>
        <a href="#">
            Learn more
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
    <nav class="nv-790__nav">
        <div class="nv-790__brand">
            <i class="fa-solid fa-circle-nodes"></i>
            <span>NovaStack</span>
        </div>
        <div class="nv-790__links">
            <a href="#">Platform</a>
            <a href="#">Solutions</a>
            <a href="#">Developers</a>
            <a href="#">Pricing</a>
        </div>
        <div class="nv-790__actions">
            <a href="#">Sign in</a>
            <a href="#" class="nv-790__cta">Get started</a>
        </div>
    </nav>
</div>`,
    css: `.nv-790 {
    width: 100%;
    max-width: 900px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    box-sizing: border-box;
}

.nv-790__announcement {
    min-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 12px;
    background: #18181b;
    color: #d4d4d8;
    font-size: 8px;
}

.nv-790__announcement > i {
    color: #facc15;
}

.nv-790__announcement a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
}

.nv-790__announcement a i {
    font-size: 7px;
}

.nv-790__nav {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 13px 15px;
}

.nv-790__brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #18181b;
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
}

.nv-790__brand i {
    color: #6366f1;
    font-size: 17px;
}

.nv-790__links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    flex: 1;
}

.nv-790__links a {
    padding: 7px 9px;
    color: #71717a;
    text-decoration: none;
    font-size: 10px;
}

.nv-790__links a:hover {
    color: #18181b;
}

.nv-790__actions {
    display: flex;
    align-items: center;
    gap: 9px;
}

.nv-790__actions > a:first-child {
    color: #52525b;
    text-decoration: none;
    font-size: 10px;
}

.nv-790__cta {
    padding: 8px 11px;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 791,
    name: "Executive Navbar",
    preview: (
      <nav className="nv-791">
        <div className="nv-791__brand">
          <div className="nv-791__mark">N</div>
          <div>
            <strong>NORTHSTAR</strong>
            <span>BUSINESS INTELLIGENCE</span>
          </div>
        </div>
        <div className="nv-791__nav">
          <a href="#" className="nv-791__link nv-791__link--active">
            Overview
          </a>
          <a href="#" className="nv-791__link">
            Performance
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <a href="#" className="nv-791__link">
            Strategy
          </a>
          <a href="#" className="nv-791__link">
            Reports
          </a>
        </div>
        <div className="nv-791__right">
          <div className="nv-791__period">
            <i className="fa-regular fa-calendar"></i>
            Q3 2026
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <button className="nv-791__share">
            <i className="fa-solid fa-share-nodes"></i>
            Share
          </button>
          <div className="nv-791__avatar">AB</div>
        </div>
      </nav>
    ),
    html: `<nav class="nv-791">
    <div class="nv-791__brand">
        <div class="nv-791__mark">N</div>
        <div>
            <strong>NORTHSTAR</strong>
            <span>BUSINESS INTELLIGENCE</span>
        </div>
    </div>
    <div class="nv-791__nav">
        <a href="#" class="nv-791__link nv-791__link--active">
            Overview
        </a>
        <a href="#" class="nv-791__link">
            Performance
            <i class="fa-solid fa-chevron-down"></i>
        </a>
        <a href="#" class="nv-791__link">Strategy</a>
        <a href="#" class="nv-791__link">Reports</a>
    </div>
    <div class="nv-791__right">
        <div class="nv-791__period">
            <i class="fa-regular fa-calendar"></i>
            Q3 2026
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <button class="nv-791__share">
            <i class="fa-solid fa-share-nodes"></i>
            Share
        </button>
        <div class="nv-791__avatar">AB</div>
    </div>
</nav>`,
    css: `.nv-791 {
    width: 100%;
    max-width: 980px;
    padding: 11px 15px;
    display: flex;
    align-items: center;
    gap: 22px;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    color: #fff;
    box-sizing: border-box;
}

.nv-791__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    white-space: nowrap;
}

.nv-791__mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 1px solid #475569;
    border-radius: 8px;
    color: #f8fafc;
    font-family: Georgia, serif;
    font-size: 16px;
}

.nv-791__brand strong {
    display: block;
    font-size: 10px;
    letter-spacing: 0.14em;
}

.nv-791__brand span {
    display: block;
    margin-top: 2px;
    color: #64748b;
    font-size: 6px;
    letter-spacing: 0.12em;
}

.nv-791__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
}

.nv-791__link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 9px;
    border-radius: 7px;
    color: #94a3b8;
    text-decoration: none;
    font-size: 9px;
}

.nv-791__link:hover,
.nv-791__link--active {
    color: #fff;
    background: #1f2937;
}

.nv-791__link i {
    font-size: 7px;
}

.nv-791__right {
    display: flex;
    align-items: center;
    gap: 7px;
}

.nv-791__period {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 9px;
    border: 1px solid #374151;
    border-radius: 7px;
    color: #cbd5e1;
    font-size: 8px;
}

.nv-791__period i:last-child {
    margin-left: 2px;
    color: #64748b;
    font-size: 7px;
}

.nv-791__share {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 9px;
    border: 1px solid #374151;
    border-radius: 7px;
    background: transparent;
    color: #cbd5e1;
    font-size: 8px;
    cursor: pointer;
}

.nv-791__avatar {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #334155;
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 1924,
    name: "Midnight Glass Navbar",
    preview: (
      <nav className="navbar-1924">
        <div className="navbar-1924__logo">
          <i className="fa-solid fa-cube"></i>
          <span>Nova</span>
        </div>
        <div className="navbar-1924__links">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Pricing</a>
        </div>
        <button className="navbar-1924__button">Sign in</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-cube"></i>
        <span>Nova</span>
    </div>
    <div class="Navbar-links">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Pricing</a>
    </div>
    <button class="Navbar-button">Sign in</button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 12px;
    background: rgba(15,23,42,.78);
    backdrop-filter: blur(14px);
    color: #fff;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    align-items: center;
    gap: 18px;
}
.Navbar-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 8px;
    transition: color .2s ease;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-button {
    padding: 7px 11px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 7px;
    background: rgba(255,255,255,.08);
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1925,
    name: "Aurora Gradient Navbar",
    preview: (
      <nav className="navbar-1925">
        <div className="navbar-1925__logo">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          Aurora
        </div>
        <div className="navbar-1925__links">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Company</a>
        </div>
        <button>Get started</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        Aurora
    </div>
    <div class="Navbar-links">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Company</a>
    </div>
    <button>Get started</button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 13px;
    background: linear-gradient(90deg,#0f172a,#312e81,#7c3aed);
    color: #fff;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #f0abfc;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: rgba(255,255,255,.72);
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 7px 12px;
    border: none;
    border-radius: 7px;
    background: #fff;
    color: #4338ca;
    font-size: 8px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1926,
    name: "Neon Cyber Navbar",
    preview: (
      <nav className="navbar-1926">
        <div className="navbar-1926__brand">
          <i className="fa-solid fa-microchip"></i>
          CYBERCORE
        </div>
        <div className="navbar-1926__links">
          <a href="#">SYSTEM</a>
          <a href="#">NETWORK</a>
          <a href="#">ACCESS</a>
        </div>
        <div className="navbar-1926__status">
          <span></span>
          ONLINE
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-microchip"></i>
        CYBERCORE
    </div>
    <div class="Navbar-links">
        <a href="#">SYSTEM</a>
        <a href="#">NETWORK</a>
        <a href="#">ACCESS</a>
    </div>
    <div class="Navbar-status">
        <span></span>
        ONLINE
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    border: 1px solid #155e75;
    background: #020617;
    color: #67e8f9;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    text-shadow: 0 0 9px #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: #67e8f9;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 7px;
}
.Navbar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
}`,
  },
  {
    id: 1927,
    name: "Minimal Black Navbar",
    preview: (
      <nav className="navbar-1927">
        <div className="navbar-1927__logo">
          <i className="fa-solid fa-circle"></i>
          FRAME
        </div>
        <div className="navbar-1927__links">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-circle"></i>
        FRAME
    </div>
    <div class="Navbar-links">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #27272a;
    background: #09090b;
    color: #fff;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-logo i {
    font-size: 7px;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 8px;
    transition: color .2s ease;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    width: 26px;
    height: 26px;
    border: 1px solid #3f3f46;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    cursor: pointer;
}`,
  },
  {
    id: 1928,
    name: "Rainbow Prism Navbar",
    preview: (
      <nav className="navbar-1928">
        <div className="navbar-1928__inner">
          <div className="navbar-1928__logo">
            <i className="fa-solid fa-gem"></i>
            PRISM
          </div>
          <div className="navbar-1928__links">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Studio</a>
          </div>
          <button>Launch</button>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-inner">
        <div class="Navbar-logo">
            <i class="fa-solid fa-gem"></i>
            PRISM
        </div>
        <div class="Navbar-links">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Studio</a>
        </div>
        <button>Launch</button>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    padding: 2px;
    border-radius: 13px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}
.Navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 11px;
    background: #08080a;
    color: #fff;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 7px 12px;
    border: none;
    border-radius: 7px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
    cursor: pointer;
}`,
  },
  {
    id: 1929,
    name: "Ice Crystal Navbar",
    preview: (
      <nav className="navbar-1929">
        <div className="navbar-1929__logo">
          <i className="fa-solid fa-snowflake"></i>
          Frost
        </div>
        <div className="navbar-1929__links">
          <a href="#">Discover</a>
          <a href="#">Community</a>
          <a href="#">Docs</a>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-snowflake"></i>
        Frost
    </div>
    <div class="Navbar-links">
        <a href="#">Discover</a>
        <a href="#">Community</a>
        <a href="#">Docs</a>
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 15px;
    border: 1px solid #7dd3fc;
    border-radius: 12px;
    background: linear-gradient(90deg,#e0f2fe,#f0f9ff);
    color: #0c4a6e;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #0284c7;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: #0369a1;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #082f49;
}
.Navbar button {
    width: 28px;
    height: 28px;
    border: 1px solid #7dd3fc;
    border-radius: 8px;
    background: #fff;
    color: #0284c7;
    cursor: pointer;
}`,
  },
  {
    id: 1930,
    name: "Luxury Gold Navbar",
    preview: (
      <nav className="navbar-1930">
        <div className="navbar-1930__brand">
          <i className="fa-solid fa-crown"></i>
          IMPERIAL
        </div>
        <div className="navbar-1930__links">
          <a href="#">Collection</a>
          <a href="#">Journal</a>
          <a href="#">Members</a>
        </div>
        <button>Enter</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-crown"></i>
        IMPERIAL
    </div>
    <div class="Navbar-links">
        <a href="#">Collection</a>
        <a href="#">Journal</a>
        <a href="#">Members</a>
    </div>
    <button>Enter</button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    border: 1px solid #a16207;
    background: #0b0a07;
    color: #fef3c7;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-brand i {
    color: #facc15;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #a8a29e;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fef3c7;
}
.Navbar button {
    padding: 7px 12px;
    border: 1px solid #d97706;
    background: linear-gradient(135deg,#451a03,#92400e);
    color: #fef3c7;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1931,
    name: "Floating SaaS Navbar",
    preview: (
      <nav className="navbar-1931">
        <div className="navbar-1931__logo">
          <i className="fa-solid fa-layer-group"></i>
          Orbit
        </div>
        <div className="navbar-1931__pill">
          <a href="#">Overview</a>
          <a href="#">Analytics</a>
          <a href="#">Integrations</a>
        </div>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-layer-group"></i>
        Orbit
    </div>
    <div class="Navbar-pill">
        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Integrations</a>
    </div>
    <button>
        <i class="fa-solid fa-user"></i>
    </button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 8px 25px rgba(24,24,27,.08);
    color: #18181b;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 8px;
    font-size: 10px;
    font-weight: 800;
}
.Navbar-logo i {
    color: #6366f1;
}
.Navbar-pill {
    display: flex;
    gap: 3px;
    padding: 3px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Navbar-pill a {
    padding: 6px 9px;
    border-radius: 999px;
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-pill a:hover {
    background: #fff;
    color: #18181b;
}
.Navbar button {
    width: 28px;
    height: 28px;
    margin-right: 3px;
    border: none;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    cursor: pointer;
}`,
  },
  {
    id: 1932,
    name: "Dark Command Navbar",
    preview: (
      <nav className="navbar-1932">
        <div className="navbar-1932__logo">
          <i className="fa-solid fa-terminal"></i>
          COMMAND
        </div>
        <div className="navbar-1932__links">
          <a href="#">Dashboard</a>
          <a href="#">Servers</a>
          <a href="#">Logs</a>
        </div>
        <div className="navbar-1932__action">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-gear"></i>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-terminal"></i>
        COMMAND
    </div>
    <div class="Navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Servers</a>
        <a href="#">Logs</a>
    </div>
    <div class="Navbar-action">
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-gear"></i>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 15px;
    border: 1px solid #27272a;
    border-radius: 10px;
    background: #111113;
    color: #fff;
    box-shadow: 0 5px 18px rgba(0,0,0,.2);
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-logo i {
    color: #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 19px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-action {
    display: flex;
    gap: 9px;
    color: #71717a;
    font-size: 9px;
}
.Navbar-action i:hover {
    color: #22d3ee;
}`,
  },
  {
    id: 1933,
    name: "Portfolio Creative Navbar",
    preview: (
      <nav className="navbar-1933">
        <div className="navbar-1933__logo">
          ANDRE<span>.</span>
        </div>
        <div className="navbar-1933__links">
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button>
          Let's talk
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        ANDRE<span>.</span>
    </div>
    <div class="Navbar-links">
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>
    <button>
        Let's talk
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: #f7f7f5;
    color: #18181b;
}
.Navbar-logo {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: -1px;
}
.Navbar-logo span {
    color: #f97316;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #52525b;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #18181b;
}
.Navbar button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border: none;
    border-radius: 6px;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1934,
    name: "Neon Pink Navbar",
    preview: (
      <nav className="navbar-1934">
        <div className="navbar-1934__brand">
          <i className="fa-solid fa-heart"></i>
          VISION
        </div>
        <div className="navbar-1934__links">
          <a href="#">Discover</a>
          <a href="#">Explore</a>
          <a href="#">Community</a>
        </div>
        <button>Join</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-heart"></i>
        VISION
    </div>
    <div class="Navbar-links">
        <a href="#">Discover</a>
        <a href="#">Explore</a>
        <a href="#">Community</a>
    </div>
    <button>Join</button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 15px;
    border: 1px solid #db2777;
    border-radius: 12px;
    background: #10050d;
    color: #fff;
    box-shadow: 0 0 20px rgba(236,72,153,.13);
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #f9a8d4;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #ec4899;
    text-shadow: 0 0 9px #ec4899;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #f9a8d4;
}
.Navbar button {
    padding: 7px 12px;
    border: 1px solid #ec4899;
    border-radius: 7px;
    background: rgba(236,72,153,.08);
    color: #f9a8d4;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1935,
    name: "Emerald SaaS Navbar",
    preview: (
      <nav className="navbar-1935">
        <div className="navbar-1935__logo">
          <i className="fa-solid fa-leaf"></i>
          Greenly
        </div>
        <div className="navbar-1935__links">
          <a href="#">Features</a>
          <a href="#">Resources</a>
          <a href="#">Customers</a>
        </div>
        <div className="navbar-1935__actions">
          <a href="#">Log in</a>
          <button>Start free</button>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-leaf"></i>
        Greenly
    </div>
    <div class="Navbar-links">
        <a href="#">Features</a>
        <a href="#">Resources</a>
        <a href="#">Customers</a>
    </div>
    <div class="Navbar-actions">
        <a href="#">Log in</a>
        <button>Start free</button>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border: 1px solid #d1fae5;
    border-radius: 11px;
    background: #f0fdf4;
    color: #14532d;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #16a34a;
}
.Navbar-links {
    display: flex;
    gap: 19px;
}
.Navbar-links a,
.Navbar-actions a {
    color: #4d7c5d;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover,
.Navbar-actions a:hover {
    color: #14532d;
}
.Navbar-actions {
    display: flex;
    align-items: center;
    gap: 11px;
}
.Navbar-actions button {
    padding: 7px 11px;
    border: none;
    border-radius: 7px;
    background: #16a34a;
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}`,
  },
  {
    id: 1936,
    name: "Floating Glass Navbar",
    preview: (
      <nav className="navbar-1936">
        <div className="navbar-1936__logo">
          <i className="fa-solid fa-star"></i>
          Lumen
        </div>
        <div className="navbar-1936__links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-star"></i>
        Lumen
    </div>
    <div class="Navbar-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
    </div>
    <button>
        <i class="fa-solid fa-user"></i>
    </button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 999px;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(18px);
    color: #fff;
    box-shadow: 0 10px 30px rgba(0,0,0,.18);
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 7px;
    font-size: 10px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #fde68a;
}
.Navbar-links {
    display: flex;
    gap: 18px;
}
.Navbar-links a {
    color: rgba(255,255,255,.68);
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    width: 28px;
    height: 28px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 50%;
    background: rgba(255,255,255,.1);
    color: #fff;
    cursor: pointer;
}`,
  },
  {
    id: 1937,
    name: "Developer Docs Navbar",
    preview: (
      <nav className="navbar-1937">
        <div className="navbar-1937__brand">
          <i className="fa-solid fa-code"></i>
          DevKit
        </div>
        <div className="navbar-1937__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          Search documentation...
          <span>⌘ K</span>
        </div>
        <div className="navbar-1937__links">
          <a href="#">Docs</a>
          <a href="#">GitHub</a>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-code"></i>
        DevKit
    </div>
    <div class="Navbar-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        Search documentation...
        <span>⌘ K</span>
    </div>
    <div class="Navbar-links">
        <a href="#">Docs</a>
        <a href="#">GitHub</a>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 9px 14px;
    border-bottom: 1px solid #e4e4e7;
    background: #fff;
    color: #18181b;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #6366f1;
}
.Navbar-search {
    flex: 1;
    max-width: 235px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px 9px;
    border: 1px solid #e4e4e7;
    border-radius: 7px;
    color: #a1a1aa;
    font-size: 7px;
    background: #fafafa;
}
.Navbar-search i {
    color: #71717a;
}
.Navbar-search span {
    margin-left: auto;
    padding: 2px 4px;
    border: 1px solid #d4d4d8;
    border-radius: 4px;
    color: #71717a;
    font-size: 6px;
}
.Navbar-links {
    display: flex;
    gap: 16px;
    margin-left: auto;
}
.Navbar-links a {
    color: #52525b;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #6366f1;
}`,
  },
  {
    id: 1938,
    name: "Ecommerce Navbar",
    preview: (
      <nav className="navbar-1938">
        <div className="navbar-1938__logo">
          <i className="fa-solid fa-bag-shopping"></i>
          SHOPORA
        </div>
        <div className="navbar-1938__links">
          <a href="#">New</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Sale</a>
        </div>
        <div className="navbar-1938__actions">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-user"></i>
          <span>
            <i className="fa-solid fa-bag-shopping"></i>2
          </span>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-bag-shopping"></i>
        SHOPORA
    </div>
    <div class="Navbar-links">
        <a href="#">New</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Sale</a>
    </div>
    <div class="Navbar-actions">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
        <span>
            <i class="fa-solid fa-bag-shopping"></i>
            2
        </span>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 15px;
    border-bottom: 1px solid #e4e4e7;
    background: #fff;
    color: #18181b;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-logo i {
    color: #18181b;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #52525b;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #18181b;
}
.Navbar-actions {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #52525b;
    font-size: 9px;
}
.Navbar-actions span {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
}
.Navbar-actions span::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    top: -5px;
    right: -6px;
    border-radius: 50%;
    background: #ef4444;
}
.Navbar-actions span::before {
    content: "2";
    position: absolute;
    top: -6px;
    right: -4px;
    z-index: 2;
    color: #fff;
    font-size: 5px;
}`,
  },
  {
    id: 1939,
    name: "Fire Gradient Navbar",
    preview: (
      <nav className="navbar-1939">
        <div className="navbar-1939__logo">
          <i className="fa-solid fa-fire"></i>
          IGNITE
        </div>
        <div className="navbar-1939__links">
          <a href="#">Home</a>
          <a href="#">Arena</a>
          <a href="#">Ranks</a>
        </div>
        <button>PLAY NOW</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-fire"></i>
        IGNITE
    </div>
    <div class="Navbar-links">
        <a href="#">Home</a>
        <a href="#">Arena</a>
        <a href="#">Ranks</a>
    </div>
    <button>PLAY NOW</button>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 10px;
    background: linear-gradient(90deg,#450a0a,#9a3412,#ea580c);
    color: #fff;
    box-shadow: 0 8px 22px rgba(234,88,12,.2);
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-logo i {
    color: #fde68a;
    text-shadow: 0 0 10px #facc15;
}
.Navbar-links {
    display: flex;
    gap: 19px;
}
.Navbar-links a {
    color: #fed7aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 7px 11px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 7px;
    background: #fff;
    color: #9a3412;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1940,
    name: "Sidebar Hybrid Navbar",
    preview: (
      <nav className="navbar-1940">
        <div className="navbar-1940__left">
          <button>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div>
            <strong>Studio</strong>
            <span>Workspace</span>
          </div>
        </div>
        <div className="navbar-1940__center">
          <a href="#">Projects</a>
          <a href="#">Assets</a>
          <a href="#">Team</a>
        </div>
        <div className="navbar-1940__right">
          <i className="fa-solid fa-bell"></i>
          <div className="navbar-1940__avatar">A</div>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-left">
        <button>
            <i class="fa-solid fa-bars"></i>
        </button>
        <div>
            <strong>Studio</strong>
            <span>Workspace</span>
        </div>
    </div>
    <div class="Navbar-center">
        <a href="#">Projects</a>
        <a href="#">Assets</a>
        <a href="#">Team</a>
    </div>
    <div class="Navbar-right">
        <i class="fa-solid fa-bell"></i>
        <div class="Navbar-avatar">A</div>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 13px;
    border: 1px solid #27272a;
    background: #18181b;
    color: #fff;
}
.Navbar-left,
.Navbar-right {
    display: flex;
    align-items: center;
}
.Navbar-left {
    gap: 9px;
}
.Navbar-left button {
    width: 27px;
    height: 27px;
    border: 1px solid #3f3f46;
    border-radius: 6px;
    background: #27272a;
    color: #d4d4d8;
    cursor: pointer;
}
.Navbar-left strong {
    display: block;
    font-size: 9px;
}
.Navbar-left span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 6px;
}
.Navbar-center {
    display: flex;
    gap: 20px;
}
.Navbar-center a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-center a:hover {
    color: #fff;
}
.Navbar-right {
    gap: 12px;
    color: #71717a;
    font-size: 9px;
}
.Navbar-avatar {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1941,
    name: "Holographic Navbar",
    preview: (
      <nav className="navbar-1941">
        <div className="navbar-1941__shine"></div>
        <div className="navbar-1941__logo">
          <i className="fa-solid fa-star"></i>
          HORIZON
        </div>
        <div className="navbar-1941__links">
          <a href="#">Vision</a>
          <a href="#">Explore</a>
          <a href="#">Future</a>
        </div>
        <button>Enter</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-shine"></div>
    <div class="Navbar-logo">
        <i class="fa-solid fa-star"></i>
        HORIZON
    </div>
    <div class="Navbar-links">
        <a href="#">Vision</a>
        <a href="#">Explore</a>
        <a href="#">Future</a>
    </div>
    <button>Enter</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 13px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#22d3ee,#6366f1,#ec4899) border-box;
    color: #fff;
}
.Navbar-shine {
    position: absolute;
    width: 45px;
    height: 180%;
    left: -55px;
    top: -40%;
    transform: skewX(-20deg);
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);
    animation: navbar-shine-1941 3s ease-in-out infinite;
}
.Navbar-logo,
.Navbar-links,
.Navbar button {
    position: relative;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-logo i {
    color: #fde68a;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 7px 12px;
    border: none;
    border-radius: 7px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    cursor: pointer;
}
@keyframes navbar-shine-1941 {
    0% {
        left: -55px;
    }
    55% {
        left: 120%;
    }
    100% {
        left: 120%;
    }
}`,
  },
  {
    id: 1942,
    name: "Command Center Navbar",
    preview: (
      <nav className="navbar-1942">
        <div className="navbar-1942__logo">
          <i className="fa-solid fa-satellite-dish"></i>
          COMMAND CENTER
        </div>
        <div className="navbar-1942__status">
          <span></span>
          SYSTEM OPERATIONAL
        </div>
        <div className="navbar-1942__links">
          <a href="#">Monitor</a>
          <a href="#">Deploy</a>
          <a href="#">Security</a>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        <i class="fa-solid fa-satellite-dish"></i>
        COMMAND CENTER
    </div>
    <div class="Navbar-status">
        <span></span>
        SYSTEM OPERATIONAL
    </div>
    <div class="Navbar-links">
        <a href="#">Monitor</a>
        <a href="#">Deploy</a>
        <a href="#">Security</a>
    </div>
</nav>`,
    css: `.Navbar {
    width: 100%;
    min-width: 520px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 15px;
    border: 1px solid #27272a;
    background: #050505;
    color: #d4d4d8;
    font-family: monospace;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .8px;
}
.Navbar-logo i {
    color: #22d3ee;
}
.Navbar-status {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #4ade80;
    font-size: 6px;
}
.Navbar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 7px #22c55e;
}
.Navbar-links {
    display: flex;
    gap: 17px;
    margin-left: auto;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #22d3ee;
}`,
  },
  {
    id: 1943,
    name: "Legendary Prism Navbar",
    preview: (
      <nav className="navbar-1943">
        <div className="navbar-1943__rainbow"></div>
        <div className="navbar-1943__inner">
          <div className="navbar-1943__logo">
            <i className="fa-solid fa-gem"></i>
            ANDRE UI
          </div>
          <div className="navbar-1943__links">
            <a href="#">Elements</a>
            <a href="#">Components</a>
            <a href="#">Resources</a>
          </div>
          <div className="navbar-1943__actions">
            <button>
              <i className="fa-brands fa-github"></i>
            </button>
            <button className="navbar-1943__launch">
              Explore
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-rainbow"></div>
    <div class="Navbar-inner">
        <div class="Navbar-logo">
            <i class="fa-solid fa-gem"></i>
            ANDRE UI
        </div>
        <div class="Navbar-links">
            <a href="#">Elements</a>
            <a href="#">Components</a>
            <a href="#">Resources</a>
        </div>
        <div class="Navbar-actions">
            <button>
                <i class="fa-brands fa-github"></i>
            </button>
            <button class="Navbar-launch">
                Explore
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
</nav>`,
    css: `.Navbar {
    position: relative;
    width: 100%;
    min-width: 520px;
    padding: 2px;
    overflow: hidden;
    border-radius: 14px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    background-size: 300% 100%;
    animation: navbar-rainbow-1943 6s linear infinite;
}
.Navbar-rainbow {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);
    transform: translateX(-100%);
    animation: navbar-glow-1943 3s ease-in-out infinite;
}
.Navbar-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 12px;
    background: #070709;
    color: #fff;
}
.Navbar-logo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-logo i {
    color: #67e8f9;
    text-shadow: 0 0 10px #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 8px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-actions {
    display: flex;
    align-items: center;
    gap: 7px;
}
.Navbar-actions button {
    width: 28px;
    height: 28px;
    border: 1px solid #27272a;
    border-radius: 7px;
    background: #111113;
    color: #d4d4d8;
    cursor: pointer;
}
.Navbar-actions .Navbar-launch {
    width: auto;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 10px;
    border: none;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}
@keyframes navbar-rainbow-1943 {
    to {
        background-position: 300% 0;
    }
}
@keyframes navbar-glow-1943 {
    0% {
        transform: translateX(-100%);
    }
    55% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
}`,
  },
  {
    id: 1944,
    name: "Legendary Neon Cyberpunk",
    preview: (
      <nav className="navbar-1944">
        <div className="navbar-1944__brand">
          <i className="fa-solid fa-microchip"></i>
          NEXUS
        </div>
        <div className="navbar-1944__links">
          <a href="#">SYSTEM</a>
          <a href="#">NETWORK</a>
          <a href="#">ACCESS</a>
        </div>
        <div className="navbar-1944__status">
          <span></span>
          ONLINE
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-microchip"></i>
        NEXUS
    </div>
    <div class="Navbar-links">
        <a href="#">SYSTEM</a>
        <a href="#">NETWORK</a>
        <a href="#">ACCESS</a>
    </div>
    <div class="Navbar-status">
        <span></span>
        ONLINE
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 12px 16px;
    border: 1px solid #22d3ee;
    background: #030712;
    color: #67e8f9;
    font-family: monospace;
    box-shadow: 0 0 22px rgba(34,211,238,.18), inset 0 0 20px rgba(34,211,238,.03);
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Navbar-brand i {
    color: #22d3ee;
    text-shadow: 0 0 12px #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
    transition: .2s ease;
}
.Navbar-links a:hover {
    color: #67e8f9;
    text-shadow: 0 0 8px #22d3ee;
}
.Navbar-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 7px;
    color: #4ade80;
}
.Navbar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
    animation: pulse-1944 1.5s infinite;
}
@keyframes pulse-1944 {
    50% {
        opacity: .35;
    }
}`,
  },
  {
    id: 1945,
    name: "Neon Cyberpunk Reactor",
    preview: (
      <nav className="navbar-1945">
        <div className="navbar-1945__reactor">
          <i className="fa-solid fa-atom"></i>
        </div>
        <strong>CORE-07</strong>
        <div className="navbar-1945__links">
          <a href="#">CORE</a>
          <a href="#">POWER</a>
          <a href="#">STATUS</a>
        </div>
        <button>
          <i className="fa-solid fa-bolt"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-reactor">
        <i class="fa-solid fa-atom"></i>
    </div>
    <strong>CORE-07</strong>
    <div class="Navbar-links">
        <a href="#">CORE</a>
        <a href="#">POWER</a>
        <a href="#">STATUS</a>
    </div>
    <button>
        <i class="fa-solid fa-bolt"></i>
    </button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #a855f7;
    background: #090313;
    color: #e9d5ff;
    font-family: monospace;
    box-shadow: 0 0 20px rgba(168,85,247,.18);
}
.Navbar-reactor {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    color: #67e8f9;
    box-shadow: 0 0 12px rgba(34,211,238,.35);
}
.Navbar-reactor i {
    animation: spin-1945 4s linear infinite;
}
.Navbar strong {
    font-size: 8px;
    letter-spacing: 1px;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #e9d5ff;
}
.Navbar button {
    width: 27px;
    height: 27px;
    border: 1px solid #ec4899;
    border-radius: 7px;
    background: rgba(236,72,153,.08);
    color: #f9a8d4;
    cursor: pointer;
}
@keyframes spin-1945 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1946,
    name: "Futuristic HUD Command",
    preview: (
      <nav className="navbar-1946">
        <div className="navbar-1946__target">
          <i className="fa-solid fa-crosshairs"></i>
        </div>
        <div className="navbar-1946__title">
          <strong>COMMAND</strong>
          <span>SECTOR 09</span>
        </div>
        <div className="navbar-1946__links">
          <a href="#">MAP</a>
          <a href="#">SCAN</a>
          <a href="#">TARGETS</a>
        </div>
        <div className="navbar-1946__coords">X:204 Y:771</div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-target">
        <i class="fa-solid fa-crosshairs"></i>
    </div>
    <div class="Navbar-title">
        <strong>COMMAND</strong>
        <span>SECTOR 09</span>
    </div>
    <div class="Navbar-links">
        <a href="#">MAP</a>
        <a href="#">SCAN</a>
        <a href="#">TARGETS</a>
    </div>
    <div class="Navbar-coords">X:204 Y:771</div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    min-width: 520px;
    padding: 9px 14px;
    border: 1px solid #0ea5e9;
    background: linear-gradient(90deg,#03101a,#06131e);
    color: #bae6fd;
    font-family: monospace;
    clip-path: polygon(0 0,99% 0,100% 70%,97% 100%,0 100%);
}
.Navbar-target {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 1px solid #38bdf8;
    color: #38bdf8;
}
.Navbar-title strong,
.Navbar-title span {
    display: block;
}
.Navbar-title strong {
    font-size: 8px;
}
.Navbar-title span {
    margin-top: 2px;
    color: #64748b;
    font-size: 5px;
}
.Navbar-links {
    display: flex;
    gap: 19px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #bae6fd;
}
.Navbar-coords {
    color: #4ade80;
    font-size: 6px;
}`,
  },
  {
    id: 1947,
    name: "Futuristic HUD Scan",
    preview: (
      <nav className="navbar-1947">
        <div className="navbar-1947__scan"></div>
        <div className="navbar-1947__brand">
          <i className="fa-solid fa-satellite-dish"></i>
          RADAR
        </div>
        <div className="navbar-1947__links">
          <a href="#">SIGNALS</a>
          <a href="#">SECTORS</a>
          <a href="#">THREATS</a>
        </div>
        <span className="navbar-1947__live">LIVE</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-scan"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-satellite-dish"></i>
        RADAR
    </div>
    <div class="Navbar-links">
        <a href="#">SIGNALS</a>
        <a href="#">SECTORS</a>
        <a href="#">THREATS</a>
    </div>
    <span class="Navbar-live">LIVE</span>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #22d3ee;
    background: #020b12;
    color: #67e8f9;
    font-family: monospace;
}
.Navbar-scan {
    position: absolute;
    left: 0;
    right: 0;
    top: -2px;
    height: 2px;
    background: #22d3ee;
    box-shadow: 0 0 12px #22d3ee;
    animation: hud-scan-1947 2.5s linear infinite;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #67e8f9;
}
.Navbar-live {
    font-size: 6px;
    color: #4ade80;
    letter-spacing: 1px;
}
@keyframes hud-scan-1947 {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(42px);
    }
}`,
  },
  {
    id: 1948,
    name: "Futuristic HUD Tactical",
    preview: (
      <nav className="navbar-1948">
        <div className="navbar-1948__brand">
          <i className="fa-solid fa-shield-halved"></i>
          SENTINEL
        </div>
        <div className="navbar-1948__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-1948__links">
          <a href="#">DEFENSE</a>
          <a href="#">MONITOR</a>
          <a href="#">LOGS</a>
        </div>
        <span className="navbar-1948__state">ACTIVE</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-shield-halved"></i>
        SENTINEL
    </div>
    <div class="Navbar-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Navbar-links">
        <a href="#">DEFENSE</a>
        <a href="#">MONITOR</a>
        <a href="#">LOGS</a>
    </div>
    <span class="Navbar-state">ACTIVE</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 13px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #22c55e;
    background: #030b06;
    color: #86efac;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #4ade80;
}
.Navbar-bars {
    display: flex;
    align-items: end;
    gap: 2px;
}
.Navbar-bars span {
    width: 4px;
    background: #166534;
}
.Navbar-bars span:nth-child(1) {
    height: 7px;
}
.Navbar-bars span:nth-child(2) {
    height: 11px;
}
.Navbar-bars span:nth-child(3) {
    height: 15px;
    background: #22c55e;
}
.Navbar-bars span:nth-child(4) {
    height: 9px;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #86efac;
}
.Navbar-state {
    font-size: 6px;
    color: #4ade80;
}`,
  },
  {
    id: 1949,
    name: "Glassmorphism Aurora",
    preview: (
      <nav className="navbar-1949">
        <div className="navbar-1949__glow"></div>
        <div className="navbar-1949__brand">
          <i className="fa-solid fa-sparkles"></i>
          AURORA
        </div>
        <div className="navbar-1949__links">
          <a href="#">Explore</a>
          <a href="#">Gallery</a>
          <a href="#">Studio</a>
        </div>
        <button>ENTER</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-glow"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-sparkles"></i>
        AURORA
    </div>
    <div class="Navbar-links">
        <a href="#">Explore</a>
        <a href="#">Gallery</a>
        <a href="#">Studio</a>
    </div>
    <button>ENTER</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 15px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(18px);
    color: #fff;
}
.Navbar-glow {
    position: absolute;
    width: 180px;
    height: 100px;
    left: 20px;
    top: -65px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(38px);
    opacity: .3;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #f0abfc;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: rgba(255,255,255,.62);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 7px;
    background: rgba(255,255,255,.1);
    color: #fff;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1950,
    name: "Glassmorphism Crystal",
    preview: (
      <nav className="navbar-1950">
        <div className="navbar-1950__icon">
          <i className="fa-solid fa-gem"></i>
        </div>
        <div className="navbar-1950__brand">PRISM</div>
        <div className="navbar-1950__links">
          <a href="#">Colors</a>
          <a href="#">Shapes</a>
          <a href="#">Motion</a>
        </div>
        <div className="navbar-1950__user">
          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-icon">
        <i class="fa-solid fa-gem"></i>
    </div>
    <div class="Navbar-brand">PRISM</div>
    <div class="Navbar-links">
        <a href="#">Colors</a>
        <a href="#">Shapes</a>
        <a href="#">Motion</a>
    </div>
    <div class="Navbar-user">
        <i class="fa-solid fa-user"></i>
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-width: 520px;
    padding: 8px 11px;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 999px;
    background: rgba(255,255,255,.09);
    backdrop-filter: blur(18px);
    color: #fff;
    box-shadow: 0 10px 30px rgba(0,0,0,.18);
}
.Navbar-icon,
.Navbar-user {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50%;
    background: rgba(255,255,255,.08);
}
.Navbar-icon {
    color: #67e8f9;
}
.Navbar-brand {
    font-size: 9px;
    font-weight: 900;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: rgba(255,255,255,.58);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-user {
    margin-left: 6px;
    color: #d4d4d8;
    font-size: 8px;
}`,
  },
  {
    id: 1951,
    name: "Glassmorphism Moonlight",
    preview: (
      <nav className="navbar-1951">
        <div className="navbar-1951__moon">
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="navbar-1951__links">
          <a href="#">Night</a>
          <a href="#">Stories</a>
          <a href="#">Journal</a>
        </div>
        <button>Explore</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-moon">
        <i class="fa-solid fa-moon"></i>
    </div>
    <div class="Navbar-links">
        <a href="#">Night</a>
        <a href="#">Stories</a>
        <a href="#">Journal</a>
    </div>
    <button>Explore</button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 9px 12px;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 14px;
    background: rgba(15,23,42,.35);
    backdrop-filter: blur(20px);
    color: #fff;
}
.Navbar-moon {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(255,255,255,.1);
    color: #fde68a;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: rgba(255,255,255,.58);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 7px;
    background: rgba(255,255,255,.08);
    color: #fff;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1952,
    name: "Glassmorphism Ocean",
    preview: (
      <nav className="navbar-1952">
        <div className="navbar-1952__wave"></div>
        <div className="navbar-1952__brand">
          <i className="fa-solid fa-water"></i>
          OCEAN
        </div>
        <div className="navbar-1952__links">
          <a href="#">Depths</a>
          <a href="#">Waves</a>
          <a href="#">Maps</a>
        </div>
        <span>32°C</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-wave"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-water"></i>
        OCEAN
    </div>
    <div class="Navbar-links">
        <a href="#">Depths</a>
        <a href="#">Waves</a>
        <a href="#">Maps</a>
    </div>
    <span>32°C</span>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid rgba(103,232,249,.3);
    border-radius: 15px;
    background: rgba(8,47,73,.25);
    backdrop-filter: blur(16px);
    color: #e0f2fe;
}
.Navbar-wave {
    position: absolute;
    right: -50px;
    top: -50px;
    width: 180px;
    height: 100px;
    border-radius: 50%;
    background: #0ea5e9;
    filter: blur(40px);
    opacity: .2;
}
.Navbar-brand,
.Navbar-links,
.Navbar>span {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: rgba(224,242,254,.58);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar>span {
    color: #7dd3fc;
    font-size: 6px;
}`,
  },
  {
    id: 1953,
    name: "Dark Luxury Obsidian",
    preview: (
      <nav className="navbar-1953">
        <div className="navbar-1953__brand">
          <i className="fa-solid fa-diamond"></i>
          OBSIDIAN
        </div>
        <div className="navbar-1953__links">
          <a href="#">Private</a>
          <a href="#">Vault</a>
          <a href="#">Legacy</a>
        </div>
        <button>
          <i className="fa-solid fa-lock"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-diamond"></i>
        OBSIDIAN
    </div>
    <div class="Navbar-links">
        <a href="#">Private</a>
        <a href="#">Vault</a>
        <a href="#">Legacy</a>
    </div>
    <button>
        <i class="fa-solid fa-lock"></i>
    </button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    border: 1px solid #3f3f46;
    background: linear-gradient(145deg,#09090b,#18181b);
    color: #e4e4e7;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-brand i {
    color: #d4d4d8;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f4f4f5;
}
.Navbar button {
    width: 27px;
    height: 27px;
    border: 1px solid #52525b;
    border-radius: 7px;
    background: #111113;
    color: #d4d4d8;
    cursor: pointer;
}`,
  },
  {
    id: 1954,
    name: "Dark Luxury Imperial",
    preview: (
      <nav className="navbar-1954">
        <div className="navbar-1954__crest">
          <i className="fa-solid fa-crown"></i>
        </div>
        <div className="navbar-1954__brand">IMPERIAL</div>
        <div className="navbar-1954__links">
          <a href="#">Collection</a>
          <a href="#">Atelier</a>
          <a href="#">Journal</a>
        </div>
        <button>MEMBERS</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-crest">
        <i class="fa-solid fa-crown"></i>
    </div>
    <div class="Navbar-brand">IMPERIAL</div>
    <div class="Navbar-links">
        <a href="#">Collection</a>
        <a href="#">Atelier</a>
        <a href="#">Journal</a>
    </div>
    <button>MEMBERS</button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border-top: 1px solid #a16207;
    border-bottom: 1px solid #a16207;
    background: #0b0905;
    color: #fef3c7;
}
.Navbar-crest {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid #d97706;
    border-radius: 50%;
    color: #facc15;
}
.Navbar-brand {
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Navbar-links {
    display: flex;
    gap: 22px;
    margin-left: auto;
}
.Navbar-links a {
    color: #78716c;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fef3c7;
}
.Navbar button {
    padding: 6px 10px;
    border: 1px solid #a16207;
    background: #171006;
    color: #fde68a;
    font-size: 6px;
    font-weight: 900;
    letter-spacing: .8px;
    cursor: pointer;
}`,
  },
  {
    id: 1955,
    name: "Dark Luxury Noir",
    preview: (
      <nav className="navbar-1955">
        <div className="navbar-1955__logo">
          NOIR<span>®</span>
        </div>
        <div className="navbar-1955__links">
          <a href="#">Studio</a>
          <a href="#">Archive</a>
          <a href="#">Contact</a>
        </div>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">NOIR<span>®</span></div>
    <div class="Navbar-links">
        <a href="#">Studio</a>
        <a href="#">Archive</a>
        <a href="#">Contact</a>
    </div>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 12px 16px;
    border-bottom: 1px solid #27272a;
    background: #09090b;
    color: #fafafa;
}
.Navbar-logo {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 3px;
}
.Navbar-logo span {
    margin-left: 2px;
    color: #71717a;
    font-size: 5px;
}
.Navbar-links {
    display: flex;
    gap: 23px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar>i {
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 1956,
    name: "Cyber Grid Matrix",
    preview: (
      <nav className="navbar-1956">
        <div className="navbar-1956__grid"></div>
        <div className="navbar-1956__brand">
          <i className="fa-solid fa-network-wired"></i>
          MATRIX
        </div>
        <div className="navbar-1956__links">
          <a href="#">NODES</a>
          <a href="#">DATA</a>
          <a href="#">CONTROL</a>
        </div>
        <span>NODE_01</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-grid"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-network-wired"></i>
        MATRIX
    </div>
    <div class="Navbar-links">
        <a href="#">NODES</a>
        <a href="#">DATA</a>
        <a href="#">CONTROL</a>
    </div>
    <span>NODE_01</span>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #2563eb;
    background: #020617;
    color: #60a5fa;
    font-family: monospace;
}
.Navbar-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(37,99,235,.06) 1px,transparent 1px),
        linear-gradient(90deg,rgba(37,99,235,.06) 1px,transparent 1px);
    background-size: 16px 16px;
}
.Navbar-brand,
.Navbar-links,
.Navbar>span {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #38bdf8;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #93c5fd;
}
.Navbar>span {
    color: #4ade80;
    font-size: 6px;
}`,
  },
  {
    id: 1957,
    name: "Cyber Grid Command",
    preview: (
      <nav className="navbar-1957">
        <div className="navbar-1957__corner"></div>
        <div className="navbar-1957__brand">
          <i className="fa-solid fa-terminal"></i>
          COMMAND
        </div>
        <div className="navbar-1957__links">
          <a href="#">SERVERS</a>
          <a href="#">LOGS</a>
          <a href="#">DEPLOY</a>
        </div>
        <button>RUN</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-corner"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-terminal"></i>
        COMMAND
    </div>
    <div class="Navbar-links">
        <a href="#">SERVERS</a>
        <a href="#">LOGS</a>
        <a href="#">DEPLOY</a>
    </div>
    <button>RUN</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    overflow: hidden;
    border: 1px solid #0ea5e9;
    background: #030712;
    color: #7dd3fc;
    font-family: monospace;
}
.Navbar::before,
.Navbar::after {
    content: "";
    position: absolute;
    pointer-events: none;
}
.Navbar::before {
    inset: 0;
    background-image:
        linear-gradient(rgba(14,165,233,.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(14,165,233,.035) 1px,transparent 1px);
    background-size: 20px 20px;
}
.Navbar::after {
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #38bdf8;
    box-shadow: 0 0 12px #38bdf8;
}
.Navbar-corner,
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #38bdf8;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #7dd3fc;
}
.Navbar button {
    padding: 6px 12px;
    border: 1px solid #0ea5e9;
    background: rgba(14,165,233,.08);
    color: #7dd3fc;
    font-family: monospace;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1958,
    name: "Cyber Grid Blueprint",
    preview: (
      <nav className="navbar-1958">
        <div className="navbar-1958__brand">
          <i className="fa-solid fa-draw-polygon"></i>
          BLUEPRINT
        </div>
        <div className="navbar-1958__links">
          <a href="#">DESIGN</a>
          <a href="#">LAYERS</a>
          <a href="#">EXPORT</a>
        </div>
        <span>REV 4.2</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-draw-polygon"></i>
        BLUEPRINT
    </div>
    <div class="Navbar-links">
        <a href="#">DESIGN</a>
        <a href="#">LAYERS</a>
        <a href="#">EXPORT</a>
    </div>
    <span>REV 4.2</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px dashed #38bdf8;
    background: #031923;
    color: #7dd3fc;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    color: #38bdf8;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #7dd3fc;
}
.Navbar>span {
    color: #38bdf8;
    font-size: 6px;
}`,
  },
  {
    id: 1959,
    name: "Aurora Gradient Dream",
    preview: (
      <nav className="navbar-1959">
        <div className="navbar-1959__aurora"></div>
        <div className="navbar-1959__brand">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          DREAM
        </div>
        <div className="navbar-1959__links">
          <a href="#">Vision</a>
          <a href="#">Create</a>
          <a href="#">Discover</a>
        </div>
        <button>START</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-aurora"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        DREAM
    </div>
    <div class="Navbar-links">
        <a href="#">Vision</a>
        <a href="#">Create</a>
        <a href="#">Discover</a>
    </div>
    <button>START</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 14px;
    background:
        linear-gradient(#08080a,#08080a) padding-box,
        linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
}
.Navbar-aurora {
    position: absolute;
    left: 20px;
    top: -65px;
    width: 220px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316);
    filter: blur(40px);
    opacity: .22;
    animation: aurora-1959 5s ease-in-out infinite alternate;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    color: #f0abfc;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 6px 11px;
    border: none;
    border-radius: 7px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    color: #fff;
    font-size: 7px;
    font-weight: 800;
    cursor: pointer;
}
@keyframes aurora-1959 {
    to {
        transform: translateX(100px);
    }
}`,
  },
  {
    id: 1960,
    name: "Aurora Gradient Prism",
    preview: (
      <nav className="navbar-1960">
        <div className="navbar-1960__brand">
          <i className="fa-solid fa-gem"></i>
          PRISM
        </div>
        <div className="navbar-1960__links">
          <a href="#">Colors</a>
          <a href="#">Studio</a>
          <a href="#">Motion</a>
        </div>
        <div className="navbar-1960__orb"></div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-gem"></i>
        PRISM
    </div>
    <div class="Navbar-links">
        <a href="#">Colors</a>
        <a href="#">Studio</a>
        <a href="#">Motion</a>
    </div>
    <div class="Navbar-orb"></div>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 14px;
    background:
        linear-gradient(#0b0714,#0b0714) padding-box,
        linear-gradient(90deg,#06b6d4,#6366f1,#ec4899,#f59e0b) border-box;
    color: #fff;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    gap: 21px;
    margin-left: auto;
}
.Navbar-links a {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-orb {
    width: 32px;
    height: 32px;
    margin-left: 13px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#6366f1,#ec4899,#f97316);
    box-shadow: 0 0 20px rgba(139,92,246,.4);
    animation: orb-1960 3s ease-in-out infinite alternate;
}
@keyframes orb-1960 {
    to {
        transform: scale(1.18);
        filter: hue-rotate(45deg);
    }
}`,
  },
  {
    id: 1961,
    name: "Synthwave Neon Drive",
    preview: (
      <nav className="navbar-1961">
        <div className="navbar-1961__sun"></div>
        <div className="navbar-1961__brand">
          <i className="fa-solid fa-car-side"></i>
          NIGHT DRIVE
        </div>
        <div className="navbar-1961__links">
          <a href="#">Drive</a>
          <a href="#">Radio</a>
          <a href="#">Garage</a>
        </div>
        <button>START</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-sun"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-car-side"></i>
        NIGHT DRIVE
    </div>
    <div class="Navbar-links">
        <a href="#">Drive</a>
        <a href="#">Radio</a>
        <a href="#">Garage</a>
    </div>
    <button>START</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #ec4899;
    background: linear-gradient(180deg,#17052b,#09000f);
    color: #f9a8d4;
}
.Navbar-sun {
    position: absolute;
    width: 80px;
    height: 40px;
    top: -15px;
    left: 42%;
    border-radius: 80px 80px 0 0;
    background: linear-gradient(180deg,#facc15,#ec4899);
    box-shadow: 0 0 25px rgba(236,72,153,.45);
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    color: #facc15;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #a855f7;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f9a8d4;
    text-shadow: 0 0 8px #ec4899;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid #ec4899;
    border-radius: 7px;
    background: rgba(236,72,153,.1);
    color: #f9a8d4;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
  {
    id: 1962,
    name: "Synthwave Horizon",
    preview: (
      <nav className="navbar-1962">
        <div className="navbar-1962__brand">
          <i className="fa-solid fa-sun"></i>
          HORIZON
        </div>
        <div className="navbar-1962__links">
          <a href="#">Waves</a>
          <a href="#">Retro</a>
          <a href="#">Future</a>
        </div>
        <div className="navbar-1962__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-sun"></i>
        HORIZON
    </div>
    <div class="Navbar-links">
        <a href="#">Waves</a>
        <a href="#">Retro</a>
        <a href="#">Future</a>
    </div>
    <div class="Navbar-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border-top: 1px solid #f472b6;
    border-bottom: 1px solid #6366f1;
    background: #090012;
    color: #f9a8d4;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    color: #facc15;
    text-shadow: 0 0 9px #f97316;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #8b5cf6;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f9a8d4;
}
.Navbar-bars {
    display: flex;
    align-items: end;
    gap: 2px;
}
.Navbar-bars span {
    width: 4px;
    background: #ec4899;
    box-shadow: 0 0 6px rgba(236,72,153,.5);
}
.Navbar-bars span:nth-child(1) {
    height: 6px;
}
.Navbar-bars span:nth-child(2) {
    height: 11px;
}
.Navbar-bars span:nth-child(3) {
    height: 15px;
}
.Navbar-bars span:nth-child(4) {
    height: 9px;
}`,
  },
  {
    id: 1963,
    name: "Brutalist Monochrome",
    preview: (
      <nav className="navbar-1963">
        <div className="navbar-1963__logo">VOID/01</div>
        <div className="navbar-1963__links">
          <a href="#">WORK</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>
        <button>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          OPEN
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">VOID/01</div>
    <div class="Navbar-links">
        <a href="#">WORK</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
    </div>
    <button>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        OPEN
    </button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 12px 14px;
    border: 3px solid #000;
    background: #fff;
    color: #000;
}
.Navbar-logo {
    padding: 5px 7px;
    background: #000;
    color: #fff;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-links {
    display: flex;
    gap: 1px;
}
.Navbar-links a {
    padding: 7px 10px;
    border: 1px solid #000;
    color: #000;
    text-decoration: none;
    font-size: 7px;
    font-weight: 900;
}
.Navbar-links a:hover {
    background: #000;
    color: #fff;
}
.Navbar button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    border: 2px solid #000;
    background: #fff;
    color: #000;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
}
.Navbar button:hover {
    background: #000;
    color: #fff;
}`,
  },
  {
    id: 1964,
    name: "Brutalist Orange Label",
    preview: (
      <nav className="navbar-1964">
        <div className="navbar-1964__brand">
          ANDRE<span>/UI</span>
        </div>
        <div className="navbar-1964__links">
          <a href="#">ELEMENTS</a>
          <a href="#">DOCS</a>
          <a href="#">GITHUB</a>
        </div>
        <button>EXPLORE</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">ANDRE<span>/UI</span></div>
    <div class="Navbar-links">
        <a href="#">ELEMENTS</a>
        <a href="#">DOCS</a>
        <a href="#">GITHUB</a>
    </div>
    <button>EXPLORE</button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 9px 12px;
    border: 3px solid #111;
    background: #f4f4f5;
    color: #111;
}
.Navbar-brand {
    padding: 6px 8px;
    border: 2px solid #111;
    background: #f97316;
    color: #111;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand span {
    color: #fff;
}
.Navbar-links {
    display: flex;
}
.Navbar-links a {
    padding: 7px 10px;
    border-left: 1px solid #111;
    color: #111;
    text-decoration: none;
    font-size: 6px;
    font-weight: 900;
}
.Navbar-links a:hover {
    background: #111;
    color: #fff;
}
.Navbar button {
    padding: 7px 10px;
    border: 2px solid #111;
    background: #111;
    color: #fff;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
}
.Navbar button:hover {
    background: #f97316;
    color: #111;
}`,
  },
  {
    id: 1965,
    name: "Legendary Cyberpunk Reactor",
    preview: (
      <nav className="navbar-1965">
        <div className="navbar-1965__brand">
          <i className="fa-solid fa-atom"></i>
          REACTOR
        </div>
        <div className="navbar-1965__links">
          <a href="#">CORE</a>
          <a href="#">POWER</a>
          <a href="#">SYSTEM</a>
        </div>
        <div className="navbar-1965__status">
          <span></span>
          ACTIVE
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-atom"></i>
        REACTOR
    </div>
    <div class="Navbar-links">
        <a href="#">CORE</a>
        <a href="#">POWER</a>
        <a href="#">SYSTEM</a>
    </div>
    <div class="Navbar-status">
        <span></span>
        ACTIVE
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    border: 1px solid #22d3ee;
    background: #02070b;
    color: #67e8f9;
    font-family: monospace;
    box-shadow: 0 0 22px rgba(34,211,238,.18);
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-brand i {
    color: #22d3ee;
    text-shadow: 0 0 10px #22d3ee;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #67e8f9;
    text-shadow: 0 0 7px #22d3ee;
}
.Navbar-status {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4ade80;
    font-size: 6px;
}
.Navbar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 9px #22c55e;
}`,
  },
  {
    id: 1966,
    name: "Legendary Cyberpunk Neon Grid",
    preview: (
      <nav className="navbar-1966">
        <div className="navbar-1966__grid"></div>
        <div className="navbar-1966__brand">
          <i className="fa-solid fa-network-wired"></i>
          GRID-X
        </div>
        <div className="navbar-1966__links">
          <a href="#">NODES</a>
          <a href="#">DATA</a>
          <a href="#">ACCESS</a>
        </div>
        <button>CONNECT</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-grid"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-network-wired"></i>
        GRID-X
    </div>
    <div class="Navbar-links">
        <a href="#">NODES</a>
        <a href="#">DATA</a>
        <a href="#">ACCESS</a>
    </div>
    <button>CONNECT</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #7c3aed;
    background: #07020e;
    color: #d8b4fe;
    font-family: monospace;
}
.Navbar-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(124,58,237,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124,58,237,.08) 1px, transparent 1px);
    background-size: 17px 17px;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #c084fc;
    text-shadow: 0 0 10px #a855f7;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #d8b4fe;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid #a855f7;
    background: rgba(168,85,247,.08);
    color: #e9d5ff;
    font-family: monospace;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1967,
    name: "Legendary Cyberpunk Neon Pulse",
    preview: (
      <nav className="navbar-1967">
        <div className="navbar-1967__brand">
          <i className="fa-solid fa-heart-pulse"></i>
          PULSE
        </div>
        <div className="navbar-1967__links">
          <a href="#">LIVE</a>
          <a href="#">SIGNALS</a>
          <a href="#">MONITOR</a>
        </div>
        <span className="navbar-1967__live">● 99.8%</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-heart-pulse"></i>
        PULSE
    </div>
    <div class="Navbar-links">
        <a href="#">LIVE</a>
        <a href="#">SIGNALS</a>
        <a href="#">MONITOR</a>
    </div>
    <span class="Navbar-live">● 99.8%</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #ec4899;
    background: #0b0208;
    color: #f9a8d4;
    font-family: monospace;
    box-shadow: 0 0 24px rgba(236,72,153,.16);
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #f472b6;
    text-shadow: 0 0 10px #ec4899;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f9a8d4;
}
.Navbar-live {
    color: #4ade80;
    font-size: 6px;
    text-shadow: 0 0 8px rgba(74,222,128,.4);
}`,
  },
  {
    id: 1968,
    name: "Legendary Cyberpunk Black Ice",
    preview: (
      <nav className="navbar-1968">
        <div className="navbar-1968__brand">
          <i className="fa-solid fa-snowflake"></i>
          BLACK ICE
        </div>
        <div className="navbar-1968__links">
          <a href="#">NETWORK</a>
          <a href="#">VAULT</a>
          <a href="#">BREACH</a>
        </div>
        <button>
          <i className="fa-solid fa-lock"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-snowflake"></i>
        BLACK ICE
    </div>
    <div class="Navbar-links">
        <a href="#">NETWORK</a>
        <a href="#">VAULT</a>
        <a href="#">BREACH</a>
    </div>
    <button>
        <i class="fa-solid fa-lock"></i>
    </button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    border: 1px solid #38bdf8;
    background: linear-gradient(145deg,#020617,#06131c);
    color: #bae6fd;
    font-family: monospace;
    box-shadow: 0 0 20px rgba(56,189,248,.16);
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Navbar-brand i {
    color: #7dd3fc;
    text-shadow: 0 0 10px #38bdf8;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #bae6fd;
}
.Navbar button {
    width: 27px;
    height: 27px;
    border: 1px solid #38bdf8;
    border-radius: 7px;
    background: rgba(56,189,248,.06);
    color: #7dd3fc;
    cursor: pointer;
}`,
  },
  {
    id: 1969,
    name: "Legendary Cyberpunk Crimson",
    preview: (
      <nav className="navbar-1969">
        <div className="navbar-1969__brand">
          <i className="fa-solid fa-skull"></i>
          CRIMSON
        </div>
        <div className="navbar-1969__links">
          <a href="#">DISTRICT</a>
          <a href="#">TARGETS</a>
          <a href="#">INTEL</a>
        </div>
        <div className="navbar-1969__warning">DANGER</div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-skull"></i>
        CRIMSON
    </div>
    <div class="Navbar-links">
        <a href="#">DISTRICT</a>
        <a href="#">TARGETS</a>
        <a href="#">INTEL</a>
    </div>
    <div class="Navbar-warning">DANGER</div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    border: 1px solid #dc2626;
    background: #0b0303;
    color: #fecaca;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #ef4444;
    text-shadow: 0 0 10px #dc2626;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #78716c;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fecaca;
}
.Navbar-warning {
    padding: 4px 7px;
    border: 1px solid #ef4444;
    color: #fca5a5;
    font-size: 6px;
    box-shadow: 0 0 8px rgba(239,68,68,.2);
}`,
  },
  {
    id: 1970,
    name: "Legendary HUD Sentinel",
    preview: (
      <nav className="navbar-1970">
        <div className="navbar-1970__target">
          <i className="fa-solid fa-crosshairs"></i>
        </div>
        <div className="navbar-1970__title">
          <strong>SENTINEL</strong>
          <span>UNIT 07</span>
        </div>
        <div className="navbar-1970__links">
          <a href="#">SCAN</a>
          <a href="#">TRACK</a>
          <a href="#">LOCK</a>
        </div>
        <span>READY</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-target">
        <i class="fa-solid fa-crosshairs"></i>
    </div>
    <div class="Navbar-title">
        <strong>SENTINEL</strong>
        <span>UNIT 07</span>
    </div>
    <div class="Navbar-links">
        <a href="#">SCAN</a>
        <a href="#">TRACK</a>
        <a href="#">LOCK</a>
    </div>
    <span>READY</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    min-width: 520px;
    padding: 9px 14px;
    border: 1px solid #0ea5e9;
    background: #03111b;
    color: #bae6fd;
    font-family: monospace;
    clip-path: polygon(0 0,99% 0,100% 72%,97% 100%,0 100%);
}
.Navbar-target {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid #38bdf8;
    color: #38bdf8;
}
.Navbar-title strong,
.Navbar-title span {
    display: block;
}
.Navbar-title strong {
    font-size: 8px;
}
.Navbar-title span {
    margin-top: 2px;
    color: #64748b;
    font-size: 5px;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #bae6fd;
}
.Navbar>span {
    color: #4ade80;
    font-size: 6px;
}`,
  },
  {
    id: 1971,
    name: "Legendary HUD Orbital",
    preview: (
      <nav className="navbar-1971">
        <div className="navbar-1971__orb">
          <i className="fa-solid fa-globe"></i>
        </div>
        <strong>ORBITAL</strong>
        <div className="navbar-1971__links">
          <a href="#">STATIONS</a>
          <a href="#">ROUTES</a>
          <a href="#">PLANETS</a>
        </div>
        <span>SECTOR 8</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-orb">
        <i class="fa-solid fa-globe"></i>
    </div>
    <strong>ORBITAL</strong>
    <div class="Navbar-links">
        <a href="#">STATIONS</a>
        <a href="#">ROUTES</a>
        <a href="#">PLANETS</a>
    </div>
    <span>SECTOR 8</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #1d4ed8;
    background: #020617;
    color: #dbeafe;
    font-family: monospace;
}
.Navbar-orb {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid #3b82f6;
    border-radius: 50%;
    color: #60a5fa;
    box-shadow: 0 0 13px rgba(59,130,246,.3);
}
.Navbar>strong {
    font-size: 8px;
    letter-spacing: 1px;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #dbeafe;
}
.Navbar>span {
    color: #60a5fa;
    font-size: 6px;
}`,
  },
  {
    id: 1972,
    name: "Legendary HUD Telemetry",
    preview: (
      <nav className="navbar-1972">
        <div className="navbar-1972__brand">
          <i className="fa-solid fa-chart-line"></i>
          TELEMETRY
        </div>
        <div className="navbar-1972__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-1972__links">
          <a href="#">LIVE</a>
          <a href="#">DATA</a>
          <a href="#">HISTORY</a>
        </div>
        <span>842 MB/s</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-chart-line"></i>
        TELEMETRY
    </div>
    <div class="Navbar-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Navbar-links">
        <a href="#">LIVE</a>
        <a href="#">DATA</a>
        <a href="#">HISTORY</a>
    </div>
    <span>842 MB/s</span>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 13px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #0284c7;
    background: #020b12;
    color: #7dd3fc;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #38bdf8;
}
.Navbar-bars {
    display: flex;
    align-items: end;
    gap: 2px;
}
.Navbar-bars span {
    width: 4px;
    background: #075985;
}
.Navbar-bars span:nth-child(1) {
    height: 5px;
}
.Navbar-bars span:nth-child(2) {
    height: 9px;
}
.Navbar-bars span:nth-child(3) {
    height: 14px;
    background: #22d3ee;
}
.Navbar-bars span:nth-child(4) {
    height: 11px;
}
.Navbar-bars span:nth-child(5) {
    height: 18px;
    background: #38bdf8;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #7dd3fc;
}
.Navbar>span {
    color: #4ade80;
    font-size: 6px;
}`,
  },
  {
    id: 1973,
    name: "Legendary HUD Mission Control",
    preview: (
      <nav className="navbar-1973">
        <div className="navbar-1973__brand">
          <i className="fa-solid fa-rocket"></i>
          MISSION 07
        </div>
        <div className="navbar-1973__links">
          <a href="#">STATUS</a>
          <a href="#">CREW</a>
          <a href="#">OBJECTIVES</a>
        </div>
        <div className="navbar-1973__progress">
          <span></span>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-rocket"></i>
        MISSION 07
    </div>
    <div class="Navbar-links">
        <a href="#">STATUS</a>
        <a href="#">CREW</a>
        <a href="#">OBJECTIVES</a>
    </div>
    <div class="Navbar-progress">
        <span></span>
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid #2563eb;
    background: #030712;
    color: #bfdbfe;
    font-family: monospace;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #60a5fa;
}
.Navbar-links {
    display: flex;
    gap: 19px;
    margin-left: auto;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #bfdbfe;
}
.Navbar-progress {
    width: 52px;
    height: 4px;
    background: #172554;
}
.Navbar-progress span {
    display: block;
    width: 76%;
    height: 100%;
    background: #38bdf8;
    box-shadow: 0 0 8px #38bdf8;
}`,
  },
  {
    id: 1974,
    name: "Legendary Glass Prism",
    preview: (
      <nav className="navbar-1974">
        <div className="navbar-1974__glow"></div>
        <div className="navbar-1974__brand">
          <i className="fa-solid fa-gem"></i>
          PRISM
        </div>
        <div className="navbar-1974__links">
          <a href="#">COLORS</a>
          <a href="#">STUDIO</a>
          <a href="#">MOTION</a>
        </div>
        <button>OPEN</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-glow"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-gem"></i>
        PRISM
    </div>
    <div class="Navbar-links">
        <a href="#">COLORS</a>
        <a href="#">STUDIO</a>
        <a href="#">MOTION</a>
    </div>
    <button>OPEN</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 15px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(18px);
    color: #fff;
}
.Navbar-glow {
    position: absolute;
    width: 210px;
    height: 100px;
    left: 25px;
    top: -65px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(40px);
    opacity: .3;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: rgba(255,255,255,.62);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 7px;
    background: rgba(255,255,255,.1);
    color: #fff;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1975,
    name: "Legendary Glass Moonlight",
    preview: (
      <nav className="navbar-1975">
        <div className="navbar-1975__moon">
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="navbar-1975__links">
          <a href="#">NIGHT</a>
          <a href="#">STORIES</a>
          <a href="#">JOURNAL</a>
        </div>
        <div className="navbar-1975__profile">
          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-moon">
        <i class="fa-solid fa-moon"></i>
    </div>
    <div class="Navbar-links">
        <a href="#">NIGHT</a>
        <a href="#">STORIES</a>
        <a href="#">JOURNAL</a>
    </div>
    <div class="Navbar-profile">
        <i class="fa-solid fa-user"></i>
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 8px 10px;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 999px;
    background: rgba(15,23,42,.35);
    backdrop-filter: blur(20px);
    color: #fff;
}
.Navbar-moon,
.Navbar-profile {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.24);
    border-radius: 50%;
    background: rgba(255,255,255,.08);
}
.Navbar-moon {
    color: #fde68a;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: rgba(255,255,255,.58);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar-profile {
    color: #d4d4d8;
    font-size: 8px;
}`,
  },
  {
    id: 1976,
    name: "Legendary Glass Ocean",
    preview: (
      <nav className="navbar-1976">
        <div className="navbar-1976__wave"></div>
        <div className="navbar-1976__brand">
          <i className="fa-solid fa-water"></i>
          OCEAN
        </div>
        <div className="navbar-1976__links">
          <a href="#">DEPTHS</a>
          <a href="#">WAVES</a>
          <a href="#">MAPS</a>
        </div>
        <span>32°C</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-wave"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-water"></i>
        OCEAN
    </div>
    <div class="Navbar-links">
        <a href="#">DEPTHS</a>
        <a href="#">WAVES</a>
        <a href="#">MAPS</a>
    </div>
    <span>32°C</span>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid rgba(103,232,249,.3);
    border-radius: 15px;
    background: rgba(8,47,73,.25);
    backdrop-filter: blur(17px);
    color: #e0f2fe;
}
.Navbar-wave {
    position: absolute;
    width: 180px;
    height: 100px;
    right: -40px;
    top: -55px;
    border-radius: 50%;
    background: #0ea5e9;
    filter: blur(40px);
    opacity: .23;
}
.Navbar-brand,
.Navbar-links,
.Navbar>span {
    position: relative;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #67e8f9;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: rgba(224,242,254,.58);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar>span {
    color: #7dd3fc;
    font-size: 6px;
}`,
  },
  {
    id: 1977,
    name: "Legendary Glass Rose",
    preview: (
      <nav className="navbar-1977">
        <div className="navbar-1977__brand">
          <i className="fa-solid fa-heart"></i>
          ROSE
        </div>
        <div className="navbar-1977__links">
          <a href="#">STORIES</a>
          <a href="#">PEOPLE</a>
          <a href="#">MOMENTS</a>
        </div>
        <button>JOIN</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-heart"></i>
        ROSE
    </div>
    <div class="Navbar-links">
        <a href="#">STORIES</a>
        <a href="#">PEOPLE</a>
        <a href="#">MOMENTS</a>
    </div>
    <button>JOIN</button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 14px;
    background: rgba(244,114,182,.12);
    backdrop-filter: blur(16px);
    color: #fff;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #f9a8d4;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: rgba(255,255,255,.6);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 7px;
    background: rgba(255,255,255,.1);
    color: #fff;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1978,
    name: "Legendary Dark Luxury Obsidian",
    preview: (
      <nav className="navbar-1978">
        <div className="navbar-1978__brand">
          <i className="fa-solid fa-gem"></i>
          OBSIDIAN
        </div>
        <div className="navbar-1978__links">
          <a href="#">PRIVATE</a>
          <a href="#">VAULT</a>
          <a href="#">LEGACY</a>
        </div>
        <button>
          <i className="fa-solid fa-lock"></i>
        </button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-gem"></i>
        OBSIDIAN
    </div>
    <div class="Navbar-links">
        <a href="#">PRIVATE</a>
        <a href="#">VAULT</a>
        <a href="#">LEGACY</a>
    </div>
    <button>
        <i class="fa-solid fa-lock"></i>
    </button>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    border: 1px solid #3f3f46;
    background: linear-gradient(145deg,#09090b,#18181b);
    color: #e4e4e7;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-brand i {
    color: #d4d4d8;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f4f4f5;
}
.Navbar button {
    width: 27px;
    height: 27px;
    border: 1px solid #52525b;
    border-radius: 7px;
    background: #111113;
    color: #d4d4d8;
    cursor: pointer;
}`,
  },
  {
    id: 1979,
    name: "Legendary Dark Luxury Imperial",
    preview: (
      <nav className="navbar-1979">
        <div className="navbar-1979__crest">
          <i className="fa-solid fa-crown"></i>
        </div>
        <div className="navbar-1979__title">
          IMPERIAL
          <span>PRIVATE HOUSE</span>
        </div>
        <div className="navbar-1979__links">
          <a href="#">COLLECTION</a>
          <a href="#">ATELIER</a>
          <a href="#">JOURNAL</a>
        </div>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-crest">
        <i class="fa-solid fa-crown"></i>
    </div>
    <div class="Navbar-title">
        IMPERIAL
        <span>PRIVATE HOUSE</span>
    </div>
    <div class="Navbar-links">
        <a href="#">COLLECTION</a>
        <a href="#">ATELIER</a>
        <a href="#">JOURNAL</a>
    </div>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    border-top: 1px solid #a16207;
    border-bottom: 1px solid #a16207;
    background: #0a0805;
    color: #fef3c7;
}
.Navbar-crest {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid #d97706;
    border-radius: 50%;
    color: #facc15;
}
.Navbar-title {
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-title span {
    display: block;
    margin-top: 2px;
    color: #78716c;
    font-size: 5px;
    letter-spacing: 1px;
}
.Navbar-links {
    display: flex;
    gap: 22px;
    margin-left: auto;
}
.Navbar-links a {
    color: #78716c;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fef3c7;
}`,
  },
  {
    id: 1980,
    name: "Legendary Dark Luxury Noir",
    preview: (
      <nav className="navbar-1980">
        <div className="navbar-1980__logo">
          NOIR<span>®</span>
        </div>
        <div className="navbar-1980__links">
          <a href="#">STUDIO</a>
          <a href="#">ARCHIVE</a>
          <a href="#">CONTACT</a>
        </div>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-logo">
        NOIR<span>®</span>
    </div>
    <div class="Navbar-links">
        <a href="#">STUDIO</a>
        <a href="#">ARCHIVE</a>
        <a href="#">CONTACT</a>
    </div>
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</nav>`,
    css: `.Navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 12px 16px;
    border-bottom: 1px solid #27272a;
    background: #09090b;
    color: #fafafa;
}
.Navbar-logo {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 3px;
}
.Navbar-logo span {
    margin-left: 2px;
    color: #71717a;
    font-size: 5px;
}
.Navbar-links {
    display: flex;
    gap: 23px;
}
.Navbar-links a {
    color: #71717a;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar>i {
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 1981,
    name: "Legendary Cyber Grid Matrix",
    preview: (
      <nav className="navbar-1981">
        <div className="navbar-1981__matrix"></div>
        <div className="navbar-1981__brand">
          <i className="fa-solid fa-terminal"></i>
          MATRIX
        </div>
        <div className="navbar-1981__links">
          <a href="#">NODES</a>
          <a href="#">DATA</a>
          <a href="#">SECURITY</a>
        </div>
        <span>NODE_07</span>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-matrix"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-terminal"></i>
        MATRIX
    </div>
    <div class="Navbar-links">
        <a href="#">NODES</a>
        <a href="#">DATA</a>
        <a href="#">SECURITY</a>
    </div>
    <span>NODE_07</span>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #16a34a;
    background: #020704;
    color: #86efac;
    font-family: monospace;
}
.Navbar-matrix {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(22,163,74,.06) 1px,transparent 1px),
        linear-gradient(90deg,rgba(22,163,74,.06) 1px,transparent 1px);
    background-size: 15px 15px;
}
.Navbar-brand,
.Navbar-links,
.Navbar>span {
    position: relative;
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #4ade80;
    text-shadow: 0 0 9px #22c55e;
}
.Navbar-links {
    display: flex;
    gap: 20px;
}
.Navbar-links a {
    color: #4b5563;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #86efac;
}
.Navbar>span {
    color: #4ade80;
    font-size: 6px;
}`,
  },
  {
    id: 1982,
    name: "Legendary Cyber Grid Blue",
    preview: (
      <nav className="navbar-1982">
        <div className="navbar-1982__brand">
          <i className="fa-solid fa-cube"></i>
          GRID/BLUE
        </div>
        <div className="navbar-1982__links">
          <a href="#">DESIGN</a>
          <a href="#">LAYERS</a>
          <a href="#">EXPORT</a>
        </div>
        <button>SYNC</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-brand">
        <i class="fa-solid fa-cube"></i>
        GRID/BLUE
    </div>
    <div class="Navbar-links">
        <a href="#">DESIGN</a>
        <a href="#">LAYERS</a>
        <a href="#">EXPORT</a>
    </div>
    <button>SYNC</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 10px 15px;
    overflow: hidden;
    border: 1px solid #2563eb;
    background: #020617;
    color: #93c5fd;
}
.Navbar::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(37,99,235,.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(37,99,235,.05) 1px,transparent 1px);
    background-size: 18px 18px;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #60a5fa;
}
.Navbar-links {
    display: flex;
    gap: 21px;
}
.Navbar-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #93c5fd;
}
.Navbar button {
    padding: 6px 11px;
    border: 1px solid #2563eb;
    background: rgba(37,99,235,.08);
    color: #93c5fd;
    font-family: monospace;
    font-size: 7px;
    cursor: pointer;
}`,
  },
  {
    id: 1983,
    name: "Legendary Aurora Rainbow",
    preview: (
      <nav className="navbar-1983">
        <div className="navbar-1983__shine"></div>
        <div className="navbar-1983__brand">
          <i className="fa-solid fa-sparkles"></i>
          AURORA
        </div>
        <div className="navbar-1983__links">
          <a href="#">DISCOVER</a>
          <a href="#">CREATE</a>
          <a href="#">EXPLORE</a>
        </div>
        <button>ENTER</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-shine"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-sparkles"></i>
        AURORA
    </div>
    <div class="Navbar-links">
        <a href="#">DISCOVER</a>
        <a href="#">CREATE</a>
        <a href="#">EXPLORE</a>
    </div>
    <button>ENTER</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 2px;
    overflow: hidden;
    border-radius: 14px;
    background: linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316,#22d3ee);
    background-size: 300% 100%;
    color: #fff;
    animation: rainbow-1983 6s linear infinite;
}
.Navbar-shine {
    position: absolute;
    left: -60px;
    top: -20%;
    width: 45px;
    height: 140%;
    transform: skewX(-20deg);
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);
    animation: shine-1983 3s ease-in-out infinite;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
    z-index: 1;
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    font-size: 9px;
    font-weight: 900;
}
.Navbar-brand i {
    color: #fff;
}
.Navbar-links {
    display: flex;
    gap: 20px;
    padding: 9px 0;
}
.Navbar-links a {
    color: rgba(255,255,255,.76);
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #fff;
}
.Navbar button {
    margin-right: 4px;
    padding: 6px 11px;
    border: none;
    border-radius: 7px;
    background: #09090b;
    color: #fff;
    font-size: 7px;
    cursor: pointer;
}
@keyframes rainbow-1983 {
    to {
        background-position: 300% 0;
    }
}
@keyframes shine-1983 {
    0% {
        left: -60px;
    }
    55% {
        left: 120%;
    }
    100% {
        left: 120%;
    }
}`,
  },
  {
    id: 1984,
    name: "Legendary Synthwave Night",
    preview: (
      <nav className="navbar-1984">
        <div className="navbar-1984__sun"></div>
        <div className="navbar-1984__brand">
          <i className="fa-solid fa-gamepad"></i>
          NIGHTWAVE
        </div>
        <div className="navbar-1984__links">
          <a href="#">ARCADE</a>
          <a href="#">RADIO</a>
          <a href="#">FUTURE</a>
        </div>
        <button>PLAY</button>
      </nav>
    ),
    html: `<nav class="Navbar">
    <div class="Navbar-sun"></div>
    <div class="Navbar-brand">
        <i class="fa-solid fa-gamepad"></i>
        NIGHTWAVE
    </div>
    <div class="Navbar-links">
        <a href="#">ARCADE</a>
        <a href="#">RADIO</a>
        <a href="#">FUTURE</a>
    </div>
    <button>PLAY</button>
</nav>`,
    css: `.Navbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 520px;
    padding: 11px 15px;
    overflow: hidden;
    border: 1px solid #ec4899;
    background: #0b0115;
    color: #f9a8d4;
}
.Navbar-sun {
    position: absolute;
    width: 100px;
    height: 50px;
    top: -20px;
    left: 43%;
    border-radius: 100px 100px 0 0;
    background: linear-gradient(180deg,#facc15,#f97316,#ec4899);
    box-shadow: 0 0 28px rgba(236,72,153,.5);
}
.Navbar-brand,
.Navbar-links,
.Navbar button {
    position: relative;
    z-index: 1;
}
.Navbar-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.5px;
}
.Navbar-brand i {
    color: #facc15;
    text-shadow: 0 0 10px #f97316;
}
.Navbar-links {
    display: flex;
    gap: 22px;
}
.Navbar-links a {
    color: #a855f7;
    text-decoration: none;
    font-size: 7px;
}
.Navbar-links a:hover {
    color: #f9a8d4;
    text-shadow: 0 0 9px #ec4899;
}
.Navbar button {
    padding: 6px 12px;
    border: 1px solid #ec4899;
    border-radius: 7px;
    background: rgba(236,72,153,.1);
    color: #f9a8d4;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
}`,
  },
];
