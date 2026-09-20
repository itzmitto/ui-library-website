import "../pages/All.css";

export const sidebars = [
  {
    id: 1392,
    name: "Dashboard Sidebar",
    preview: (
      <aside className="sidebar-1392">
        <div className="sidebar-1392__brand">
          <span>◆</span>
          Workspace
        </div>
        <a className="active" href="#">
          <i className="fa-solid fa-house"></i>
          Overview
        </a>
        <a href="#">
          <i className="fa-solid fa-chart-line"></i>
          Analytics
        </a>
        <a href="#">
          <i className="fa-solid fa-folder"></i>
          Projects
        </a>
        <a href="#">
          <i className="fa-solid fa-users"></i>
          Team
        </a>
        <div className="sidebar-1392__bottom">
          <a href="#">
            <i className="fa-solid fa-gear"></i>
            Settings
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <span>◆</span>
        Workspace
    </div>
    <a class="active" href="#">
        <i class="fa-solid fa-house"></i>
        Overview
    </a> 
    <a href="#">
        <i class="fa-solid fa-chart-line"></i>
        Analytics
    </a>
    <a href="#">
        <i class="fa-solid fa-folder"></i>
        Projects
    </a>
    <a href="#">
        <i class="fa-solid fa-users"></i>
        Team
    </a>
    <div class="Sidebar-bottom">
        <a href="#">
            <i class="fa-solid fa-gear"></i>
            Settings
        </a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    padding: 14px;
    box-sizing: border-box;
    border: 1px solid #27272a;
    border-radius: 14px;
    background: #18181b;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    margin-bottom: 14px;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
}
.Sidebar-brand span {
    color: #8b5cf6;
}
.Sidebar > a,
.Sidebar-bottom a {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px;
    border-radius: 8px;
    color: #71717a;
    text-decoration: none;
    font-size: 9px;
}
.Sidebar > a:hover,
.Sidebar > a.active,
.Sidebar-bottom a:hover {
    background: #27272a;
    color: #ffffff;
}
.Sidebar > a i,
.Sidebar-bottom a i {
    width: 15px;
}
.Sidebar-bottom {
    margin-top: auto;
    padding-top: 10px;
    border-top: 1px solid #27272a;
}`,
  },
  {
    id: 1393,
    name: "Compact Icon Sidebar",
    preview: (
      <aside className="sidebar-1393">
        <div className="sidebar-1393__logo">
          <i className="fa-solid fa-cube"></i>
        </div>
        <a className="active" href="#">
          <i className="fa-solid fa-house"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-chart-pie"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-folder"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-message"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-users"></i>
        </a>
        <div className="sidebar-1393__bottom">
          <a href="#">
            <i className="fa-solid fa-gear"></i>
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo">
        <i class="fa-solid fa-cube"></i>
    </div>
    <a class="active" href="#">
        <i class="fa-solid fa-house"></i>
    </a>
    <a href="#">
        <i class="fa-solid fa-chart-pie"></i>
    </a>
    <a href="#">
        <i class="fa-solid fa-folder"></i>
    </a>
    <a href="#">
        <i class="fa-solid fa-message"></i>
    </a>
    <a href="#">
        <i class="fa-solid fa-users"></i>
    </a>
    <div class="Sidebar-bottom">
        <a href="#">
            <i class="fa-solid fa-gear"></i>
        </a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 58px;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 7px;
    box-sizing: border-box;
    border: 1px solid #27272a;
    border-radius: 14px;
    background: #09090b;
}
.Sidebar-logo {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    margin-bottom: 14px;
    border-radius: 10px;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #ffffff;
}
.Sidebar > a,
.Sidebar-bottom a {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin-bottom: 5px;
    border-radius: 9px;
    color: #52525b;
    text-decoration: none;
}
.Sidebar > a:hover,
.Sidebar > a.active,
.Sidebar-bottom a:hover {
    background: #18181b;
    color: #ffffff;
}
.Sidebar > a.active {
    box-shadow: inset 0 0 0 1px #3f3f46;
    color: #60a5fa;
}
.Sidebar-bottom {
    margin-top: auto;
}`,
  },
  {
    id: 1544,
    name: "Dark Dashboard Sidebar",
    preview: (
      <aside className="sb-1544">
        <div className="sb-1544__brand">
          <div className="sb-1544__brand-icon">
            <i className="fa-solid fa-cube"></i>
          </div>
          <span>Dashboard</span>
        </div>
        <nav>
          <a href="#" className="sb-1544__link sb-1544__link--active">
            <i className="fa-solid fa-house"></i>
            Overview
          </a>
          <a href="#" className="sb-1544__link">
            <i className="fa-solid fa-chart-line"></i>
            Analytics
          </a>
          <a href="#" className="sb-1544__link">
            <i className="fa-solid fa-folder"></i>
            Projects
          </a>
          <a href="#" className="sb-1544__link">
            <i className="fa-solid fa-users"></i>
            Team
          </a>
        </nav>
        <div className="sb-1544__bottom">
          <a href="#" className="sb-1544__link">
            <i className="fa-solid fa-gear"></i>
            Settings
          </a>
          <div className="sb-1544__profile">
            <div className="sb-1544__avatar">A</div>
            <div>
              <strong>André</strong>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <div class="Sidebar-brand-icon">
            <i class="fa-solid fa-cube"></i>
        </div>
        <span>Dashboard</span>
    </div>
    <nav>
        <a href="#" class="Sidebar-link Sidebar-link-active">
            <i class="fa-solid fa-house"></i>
            Overview
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-chart-line"></i>
            Analytics
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-folder"></i>
            Projects
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-users"></i>
            Team
        </a>
    </nav>
    <div class="Sidebar-bottom">
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-gear"></i>
            Settings
        </a>
        <div class="Sidebar-profile">
            <div class="Sidebar-avatar">A</div>
            <div>
                <strong>André</strong>
                <span>Developer</span>
            </div>
        </div>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 220px;
    min-height: 390px;
    display: flex;
    flex-direction: column;
    padding: 18px 12px;
    box-sizing: border-box;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #09090b;
    color: #fff;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 4px 8px 20px;
    font-size: 14px;
    font-weight: 800;
}
.Sidebar-brand-icon {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #2563eb;
}
.Sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.Sidebar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    border-radius: 9px;
    color: #a1a1aa;
    text-decoration: none;
    font-size: 12px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: #18181b;
    color: #fff;
}
.Sidebar-link i {
    width: 16px;
    text-align: center;
}
.Sidebar-bottom {
    margin-top: auto;
}
.Sidebar-profile {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 13px;
    padding: 10px;
    border-top: 1px solid #27272a;
}
.Sidebar-avatar {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
}
.Sidebar-profile strong,
.Sidebar-profile span {
    display: block;
}
.Sidebar-profile strong {
    font-size: 11px;
}
.Sidebar-profile span {
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1545,
    name: "Floating Sidebar",
    preview: (
      <aside className="sb-1545">
        <div className="sb-1545__logo">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <a href="#" className="sb-1545__item sb-1545__item--active">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
        <a href="#" className="sb-1545__item">
          <i className="fa-solid fa-bag-shopping"></i>
          <span>Orders</span>
        </a>
        <a href="#" className="sb-1545__item">
          <i className="fa-solid fa-heart"></i>
          <span>Favorites</span>
        </a>
        <a href="#" className="sb-1545__item">
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
        </a>
        <a href="#" className="sb-1545__item">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo">
        <i class="fa-solid fa-layer-group"></i>
    </div>
    <a href="#" class="Sidebar-item Sidebar-item-active">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-bag-shopping"></i>
        <span>Orders</span>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-heart"></i>
        <span>Favorites</span>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-message"></i>
        <span>Messages</span>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-gear"></i>
        <span>Settings</span>
    </a>
</aside>`,
    css: `.Sidebar {
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(0,0,0,.08);
}
.Sidebar-logo {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin-bottom: 9px;
    border-radius: 11px;
    background: #18181b;
    color: #fff;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 11px;
    border-radius: 10px;
    color: #71717a;
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-item:hover,
.Sidebar-item-active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-item-active {
    font-weight: 700;
}`,
  },
  {
    id: 1546,
    name: "Compact Icon Sidebar",
    preview: (
      <aside className="sb-1546">
        <div className="sb-1546__brand">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <a href="#" className="sb-1546__item sb-1546__item--active">
          <i className="fa-solid fa-house"></i>
        </a>
        <a href="#" className="sb-1546__item">
          <i className="fa-solid fa-chart-column"></i>
        </a>
        <a href="#" className="sb-1546__item">
          <i className="fa-solid fa-users"></i>
        </a>
        <a href="#" className="sb-1546__item">
          <i className="fa-solid fa-folder"></i>
        </a>
        <div className="sb-1546__spacer"></div>
        <a href="#" className="sb-1546__item">
          <i className="fa-solid fa-gear"></i>
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <a href="#" class="Sidebar-item Sidebar-item-active">
        <i class="fa-solid fa-house"></i>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-chart-column"></i>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-users"></i>
    </a>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-folder"></i>
    </a>
    <div class="Sidebar-spacer"></div>
    <a href="#" class="Sidebar-item">
        <i class="fa-solid fa-gear"></i>
    </a>
</aside>`,
    css: `.Sidebar {
    width: 58px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 7px;
    box-sizing: border-box;
    border-radius: 15px;
    background: #111827;
}
.Sidebar-brand {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
    border-radius: 11px;
    background: #2563eb;
    color: #fff;
}
.Sidebar-item {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #6b7280;
    text-decoration: none;
    transition: .2s ease;
}
.Sidebar-item:hover,
.Sidebar-item-active {
    background: #1f2937;
    color: #fff;
}
.Sidebar-spacer {
    flex: 1;
}`,
  },
  {
    id: 1547,
    name: "Glass Sidebar",
    preview: (
      <aside className="sb-1547">
        <div className="sb-1547__title">
          <i className="fa-solid fa-sparkles"></i>
          Workspace
        </div>
        <a href="#" className="sb-1547__link sb-1547__link--active">
          <i className="fa-solid fa-house"></i>
          Overview
        </a>
        <a href="#" className="sb-1547__link">
          <i className="fa-solid fa-folder-open"></i>
          Files
        </a>
        <a href="#" className="sb-1547__link">
          <i className="fa-solid fa-users"></i>
          Members
        </a>
        <a href="#" className="sb-1547__link">
          <i className="fa-solid fa-sliders"></i>
          Preferences
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-title">
        <i class="fa-solid fa-sparkles"></i>
        Workspace
    </div>
    <a href="#" class="Sidebar-link Sidebar-link-active">
        <i class="fa-solid fa-house"></i>
        Overview
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-folder-open"></i>
        Files
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-users"></i>
        Members
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-sliders"></i>
        Preferences
    </a>
</aside>`,
    css: `.Sidebar {
    width: 205px;
    min-height: 320px;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 18px;
    background: linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.06));
    backdrop-filter: blur(16px);
    color: #fff;
    box-shadow: 0 20px 40px rgba(0,0,0,.15);
}
.Sidebar-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    font-size: 13px;
    font-weight: 800;
}
.Sidebar-title i {
    color: #67e8f9;
}
.Sidebar-link {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 5px;
    padding: 10px 11px;
    border-radius: 10px;
    color: rgba(255,255,255,.62);
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: rgba(255,255,255,.12);
    color: #fff;
}`,
  },
  {
    id: 1548,
    name: "Gradient Sidebar",
    preview: (
      <aside className="sb-1548">
        <div className="sb-1548__brand">
          <div>
            <i className="fa-solid fa-rocket"></i>
          </div>
          Launchpad
        </div>
        <a href="#" className="sb-1548__link sb-1548__link--active">
          <i className="fa-solid fa-grid-2"></i>
          Dashboard
        </a>
        <a href="#" className="sb-1548__link">
          <i className="fa-solid fa-code"></i>
          Development
        </a>
        <a href="#" className="sb-1548__link">
          <i className="fa-solid fa-database"></i>
          Database
        </a>
        <a href="#" className="sb-1548__link">
          <i className="fa-solid fa-cloud"></i>
          Deployments
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <div>
            <i class="fa-solid fa-rocket"></i>
        </div>
        Launchpad
    </div>
    <a href="#" class="Sidebar-link Sidebar-link-active">
        <i class="fa-solid fa-grid-2"></i>
        Dashboard
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-code"></i>
        Development
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-database"></i>
        Database
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-cloud"></i>
        Deployments
    </a>
</aside>`,
    css: `.Sidebar {
    width: 215px;
    min-height: 330px;
    padding: 17px 12px;
    box-sizing: border-box;
    border-radius: 17px;
    background: linear-gradient(180deg,#172554,#312e81,#581c87);
    color: #fff;
    box-shadow: 0 15px 35px rgba(49,46,129,.3);
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 7px 9px 20px;
    font-size: 13px;
    font-weight: 800;
}
.Sidebar-brand > div {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: rgba(255,255,255,.15);
}
.Sidebar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 11px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: rgba(255,255,255,.68);
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: rgba(255,255,255,.14);
    color: #fff;
}
.Sidebar-link-active {
    box-shadow: inset 3px 0 #67e8f9;
}`,
  },
  {
    id: 1549,
    name: "Ecommerce Sidebar",
    preview: (
      <aside className="sb-1549">
        <div className="sb-1549__header">
          <strong>Shop</strong>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="sb-1549__section">
          <span>Categories</span>
          <a href="#" className="sb-1549__link sb-1549__link--active">
            New arrivals
            <b>24</b>
          </a>
          <a href="#" className="sb-1549__link">
            Sneakers
            <b>48</b>
          </a>
          <a href="#" className="sb-1549__link">
            Clothing
            <b>31</b>
          </a>
          <a href="#" className="sb-1549__link">
            Accessories
            <b>19</b>
          </a>
        </div>
        <div className="sb-1549__section">
          <span>Shopping</span>
          <a href="#" className="sb-1549__link">
            <i className="fa-solid fa-heart"></i>
            Wishlist
          </a>
          <a href="#" className="sb-1549__link">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-header">
        <strong>Shop</strong>
        <i class="fa-solid fa-bag-shopping"></i>
    </div>
    <div class="Sidebar-section">
        <span>Categories</span>
        <a href="#" class="Sidebar-link Sidebar-link-active">
            New arrivals
            <b>24</b>
        </a>
        <a href="#" class="Sidebar-link">
            Sneakers
            <b>48</b>
        </a>
        <a href="#" class="Sidebar-link">
            Clothing
            <b>31</b>
        </a>
        <a href="#" class="Sidebar-link">
            Accessories
            <b>19</b>
        </a>
    </div>
    <div class="Sidebar-section">
        <span>Shopping</span>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-heart"></i>
            Wishlist
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
        </a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 220px;
    padding: 17px 13px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
    color: #18181b;
}
.Sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px 18px;
    font-size: 14px;
}
.Sidebar-header i {
    color: #71717a;
}
.Sidebar-section {
    margin-bottom: 20px;
}
.Sidebar-section > span {
    display: block;
    margin: 0 6px 8px;
    color: #a1a1aa;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.Sidebar-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 10px;
    border-radius: 8px;
    color: #71717a;
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-link b {
    min-width: 20px;
    padding: 2px 5px;
    border-radius: 999px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 8px;
    text-align: center;
}
.Sidebar-link i {
    width: 16px;
}`,
  },
  {
    id: 1550,
    name: "Admin Sidebar",
    preview: (
      <aside className="sb-1550">
        <div className="sb-1550__brand">
          <i className="fa-solid fa-shield-halved"></i>
          Admin Panel
        </div>
        <div className="sb-1550__group">
          <span>Management</span>
          <a href="#" className="sb-1550__link sb-1550__link--active">
            <i className="fa-solid fa-chart-line"></i>
            Dashboard
          </a>
          <a href="#" className="sb-1550__link">
            <i className="fa-solid fa-user-group"></i>
            Users
          </a>
          <a href="#" className="sb-1550__link">
            <i className="fa-solid fa-box"></i>
            Products
          </a>
        </div>
        <div className="sb-1550__group">
          <span>System</span>
          <a href="#" className="sb-1550__link">
            <i className="fa-solid fa-server"></i>
            Servers
          </a>
          <a href="#" className="sb-1550__link">
            <i className="fa-solid fa-gear"></i>
            Settings
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-shield-halved"></i>
        Admin Panel
    </div>
    <div class="Sidebar-group">
        <span>Management</span>
        <a href="#" class="Sidebar-link Sidebar-link-active">
            <i class="fa-solid fa-chart-line"></i>
            Dashboard
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-user-group"></i>
            Users
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-box"></i>
            Products
        </a>
    </div>
    <div class="Sidebar-group">
        <span>System</span>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-server"></i>
            Servers
        </a>
        <a href="#" class="Sidebar-link">
            <i class="fa-solid fa-gear"></i>
            Settings
        </a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 225px;
    min-height: 360px;
    padding: 18px 13px;
    box-sizing: border-box;
    border-right: 1px solid #e4e4e7;
    background: #fafafa;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 3px 8px 22px;
    color: #18181b;
    font-size: 13px;
    font-weight: 800;
}
.Sidebar-brand i {
    color: #2563eb;
}
.Sidebar-group {
    margin-bottom: 20px;
}
.Sidebar-group > span {
    display: block;
    margin: 0 8px 8px;
    color: #a1a1aa;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.Sidebar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    margin-bottom: 3px;
    border-left: 2px solid transparent;
    border-radius: 7px;
    color: #71717a;
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-link-active {
    border-left-color: #2563eb;
}`,
  },
  {
    id: 1551,
    name: "Profile Sidebar",
    preview: (
      <aside className="sb-1551">
        <div className="sb-1551__profile">
          <div className="sb-1551__avatar">A</div>
          <strong>André</strong>
          <span>Software Developer</span>
        </div>
        <a href="#" className="sb-1551__link sb-1551__link--active">
          <i className="fa-solid fa-user"></i>
          Profile
        </a>
        <a href="#" className="sb-1551__link">
          <i className="fa-solid fa-code"></i>
          Projects
        </a>
        <a href="#" className="sb-1551__link">
          <i className="fa-solid fa-star"></i>
          Favorites
        </a>
        <a href="#" className="sb-1551__link">
          <i className="fa-solid fa-gear"></i>
          Preferences
        </a>
        <div className="sb-1551__footer">
          <a href="#">
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign out
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-profile">
        <div class="Sidebar-avatar">A</div>
        <strong>André</strong>
        <span>Software Developer</span>
    </div>
    <a href="#" class="Sidebar-link Sidebar-link-active">
        <i class="fa-solid fa-user"></i>
        Profile
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-code"></i>
        Projects
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-star"></i>
        Favorites
    </a>
    <a href="#" class="Sidebar-link">
        <i class="fa-solid fa-gear"></i>
        Preferences
    </a>
    <div class="Sidebar-footer">
        <a href="#">
            <i class="fa-solid fa-right-from-bracket"></i>
            Sign out
        </a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 210px;
    min-height: 360px;
    display: flex;
    flex-direction: column;
    padding: 17px 12px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #fff;
}
.Sidebar-profile {
    padding: 4px 6px 19px;
    border-bottom: 1px solid #f4f4f5;
    text-align: center;
}
.Sidebar-avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    margin: 0 auto 9px;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 18px;
    font-weight: 800;
}
.Sidebar-profile strong,
.Sidebar-profile span {
    display: block;
}
.Sidebar-profile strong {
    color: #18181b;
    font-size: 12px;
}
.Sidebar-profile span {
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Sidebar-link {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 5px;
    padding: 9px 10px;
    border-radius: 8px;
    color: #71717a;
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-footer {
    margin-top: auto;
    padding-top: 12px;
    border-top: 1px solid #f4f4f5;
}
.Sidebar-footer a {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    color: #ef4444;
    text-decoration: none;
    font-size: 11px;
}`,
  },
  {
    id: 1552,
    name: "Docs Sidebar",
    preview: (
      <aside className="sb-1552">
        <div className="sb-1552__title">Documentation</div>
        <div className="sb-1552__group">
          <span>Getting started</span>
          <a href="#" className="sb-1552__link sb-1552__link--active">
            Introduction
          </a>
          <a href="#" className="sb-1552__link">
            Installation
          </a>
          <a href="#" className="sb-1552__link">
            Quick start
          </a>
        </div>
        <div className="sb-1552__group">
          <span>Guides</span>
          <a href="#" className="sb-1552__link">
            Components
          </a>
          <a href="#" className="sb-1552__link">
            API
          </a>
          <a href="#" className="sb-1552__link">
            Examples
          </a>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-title">Documentation</div>
    <div class="Sidebar-group">
        <span>Getting started</span>
        <a href="#" class="Sidebar-link Sidebar-link-active">Introduction</a>
        <a href="#" class="Sidebar-link">Installation</a>
        <a href="#" class="Sidebar-link">Quick start</a>
    </div>
    <div class="Sidebar-group">
        <span>Guides</span>
        <a href="#" class="Sidebar-link">Components</a>
        <a href="#" class="Sidebar-link">API</a>
        <a href="#" class="Sidebar-link">Examples</a>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 215px;
    padding: 18px 12px;
    box-sizing: border-box;
    border-right: 1px solid #e4e4e7;
    background: #fff;
}
.Sidebar-title {
    padding: 2px 8px 22px;
    color: #18181b;
    font-size: 14px;
    font-weight: 800;
}
.Sidebar-group {
    margin-bottom: 22px;
}
.Sidebar-group > span {
    display: block;
    margin: 0 8px 8px;
    color: #a1a1aa;
    font-size: 9px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .7px;
}
.Sidebar-link {
    display: block;
    padding: 8px 10px;
    border-left: 2px solid transparent;
    color: #71717a;
    text-decoration: none;
    font-size: 11px;
    transition: .2s ease;
}
.Sidebar-link:hover {
    color: #18181b;
}
.Sidebar-link-active {
    border-left-color: #18181b;
    color: #18181b;
    font-weight: 700;
    background: #fafafa;
}`,
  },
  {
    id: 1553,
    name: "Cyber Neon Sidebar",
    preview: (
      <aside className="sb-1553">
        <div className="sb-1553__header">
          <i className="fa-solid fa-terminal"></i>
          SYSTEM
        </div>
        <a href="#" className="sb-1553__link sb-1553__link--active">
          <span></span>
          Control
        </a>
        <a href="#" className="sb-1553__link">
          <span></span>
          Networks
        </a>
        <a href="#" className="sb-1553__link">
          <span></span>
          Processes
        </a>
        <a href="#" className="sb-1553__link">
          <span></span>
          Security
        </a>
        <div className="sb-1553__status">
          <i className="fa-solid fa-circle"></i>
          SYSTEM ONLINE
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-header">
        <i class="fa-solid fa-terminal"></i>
        SYSTEM
    </div>
    <a href="#" class="Sidebar-link Sidebar-link-active">
        <span></span>
        Control
    </a>
    <a href="#" class="Sidebar-link">
        <span></span>
        Networks
    </a>
    <a href="#" class="Sidebar-link">
        <span></span>
        Processes
    </a>
    <a href="#" class="Sidebar-link">
        <span></span>
        Security
    </a>
    <div class="Sidebar-status">
        <i class="fa-solid fa-circle"></i>
        SYSTEM ONLINE
    </div>
</aside>`,
    css: `.Sidebar {
    width: 205px;
    min-height: 340px;
    padding: 16px 12px;
    box-sizing: border-box;
    border: 1px solid #064e3b;
    border-radius: 8px;
    background: #020908;
    color: #22c55e;
    font-family: monospace;
    box-shadow: inset 0 0 30px rgba(34,197,94,.03),0 0 18px rgba(34,197,94,.08);
}
.Sidebar-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 8px 20px;
    border-bottom: 1px solid #064e3b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
}
.Sidebar-header i {
    color: #4ade80;
}
.Sidebar-link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 5px;
    padding: 10px 9px;
    color: #4ade80;
    opacity: .55;
    text-decoration: none;
    font-size: 10px;
    transition: .2s ease;
}
.Sidebar-link span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 7px #22c55e;
}
.Sidebar-link:hover,
.Sidebar-link-active {
    opacity: 1;
    background: rgba(34,197,94,.06);
    text-shadow: 0 0 7px rgba(34,197,94,.5);
}
.Sidebar-link-active::before {
    content: "";
    position: absolute;
    left: -12px;
    width: 2px;
    height: 20px;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
}
.Sidebar-status {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 28px;
    padding-top: 12px;
    border-top: 1px solid #064e3b;
    color: #22c55e;
    font-size: 8px;
}
.Sidebar-status i {
    font-size: 6px;
    text-shadow: 0 0 8px #22c55e;
}`,
  },
  {
    id: 2112,
    name: "Midnight Dashboard Sidebar",
    preview: (
      <aside className="sidebar-2112">
        <div className="sidebar-2112__logo">
          <i className="fa-solid fa-cube"></i>
          <span>Workspace</span>
        </div>
        <a className="sidebar-2112__item sidebar-2112__item--active" href="#">
          <i className="fa-solid fa-house"></i>
          Dashboard
        </a>
        <a className="sidebar-2112__item" href="#">
          <i className="fa-solid fa-chart-line"></i>
          Analytics
        </a>
        <a className="sidebar-2112__item" href="#">
          <i className="fa-solid fa-folder"></i>
          Projects
        </a>
        <a className="sidebar-2112__item" href="#">
          <i className="fa-solid fa-gear"></i>
          Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo">
        <i class="fa-solid fa-cube"></i>
        <span>Workspace</span>
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-house"></i>
        Dashboard
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-chart-line"></i>
        Analytics
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-folder"></i>
        Projects
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-gear"></i>
        Settings
    </a>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 16px 10px;
    border: 1px solid #27272a;
    border-radius: 16px;
    background: #09090b;
    color: #a1a1aa;
}
.Sidebar-logo {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 13px;
    color: #fff;
    font-weight: 800;
}
.Sidebar-logo i {
    color: #818cf8;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #a1a1aa;
    font-size: 12px;
    text-decoration: none;
}
.Sidebar-item:hover {
    background: #18181b;
    color: #fff;
}
.Sidebar-item--active {
    background: #27272a;
    color: #fff;
}
.Sidebar-item--active i {
    color: #818cf8;
}`,
  },
  {
    id: 2113,
    name: "Glass Navigation Sidebar",
    preview: (
      <aside className="sidebar-2113">
        <div className="sidebar-2113__profile">
          <div className="sidebar-2113__avatar">A</div>
          <div>
            <strong>André</strong>
            <span>Developer</span>
          </div>
        </div>
        <a className="sidebar-2113__item sidebar-2113__item--active" href="#">
          <i className="fa-solid fa-grid-2"></i>Overview
        </a>
        <a className="sidebar-2113__item" href="#">
          <i className="fa-solid fa-message"></i>Messages
        </a>
        <a className="sidebar-2113__item" href="#">
          <i className="fa-solid fa-users"></i>Team
        </a>
        <a className="sidebar-2113__item" href="#">
          <i className="fa-solid fa-file-lines"></i>Files
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-profile">
        <div class="Sidebar-avatar">A</div>
        <div>
            <strong>André</strong>
            <span>Developer</span>
        </div>
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-grid-2"></i>Overview</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-message"></i>Messages</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-users"></i>Team</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-file-lines"></i>Files</a>
</aside>`,
    css: `.Sidebar {
    width: 205px;
    padding: 14px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 18px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(16px);
    color: #fff;
}
.Sidebar-profile {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px;
    margin-bottom: 12px;
}
.Sidebar-avatar {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#818cf8,#22d3ee);
    font-weight: 900;
}
.Sidebar-profile strong,
.Sidebar-profile span {
    display: block;
}
.Sidebar-profile strong {
    font-size: 11px;
}
.Sidebar-profile span {
    margin-top: 2px;
    color: #94a3b8;
    font-size: 8px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #cbd5e1;
    font-size: 11px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(255,255,255,.1);
    color: #fff;
}
.Sidebar-item--active i {
    color: #67e8f9;
}`,
  },
  {
    id: 2114,
    name: "Neon Cyber Sidebar",
    preview: (
      <aside className="sidebar-2114">
        <div className="sidebar-2114__title">SYSTEM</div>
        <a className="sidebar-2114__item sidebar-2114__item--active" href="#">
          <i className="fa-solid fa-terminal"></i>Console
        </a>
        <a className="sidebar-2114__item" href="#">
          <i className="fa-solid fa-bolt"></i>Power
        </a>
        <a className="sidebar-2114__item" href="#">
          <i className="fa-solid fa-database"></i>Database
        </a>
        <a className="sidebar-2114__item" href="#">
          <i className="fa-solid fa-shield-halved"></i>Security
        </a>
        <div className="sidebar-2114__status">
          <span></span>ONLINE
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-title">SYSTEM</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-terminal"></i>Console</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bolt"></i>Power</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-database"></i>Database</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-shield-halved"></i>Security</a>
    <div class="Sidebar-status"><span></span>ONLINE</div>
</aside>`,
    css: `.Sidebar {
    width: 185px;
    padding: 15px;
    border: 1px solid #164e63;
    background: #020617;
    color: #67e8f9;
    font-family: monospace;
    box-shadow: 0 0 20px rgba(34,211,238,.08);
}
.Sidebar-title {
    padding: 8px;
    margin-bottom: 8px;
    color: #0e7490;
    font-size: 8px;
    letter-spacing: 3px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-left: 2px solid transparent;
    color: #64748b;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    border-left-color: #22d3ee;
    background: rgba(34,211,238,.07);
    color: #67e8f9;
}
.Sidebar-item--active i {
    text-shadow: 0 0 8px #22d3ee;
}
.Sidebar-status {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 14px;
    padding: 7px;
    color: #22c55e;
    font-size: 8px;
}
.Sidebar-status span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
}`,
  },
  {
    id: 2115,
    name: "Light Admin Sidebar",
    preview: (
      <aside className="sidebar-2115">
        <div className="sidebar-2115__brand">
          <i className="fa-solid fa-layer-group"></i>Admin Panel
        </div>
        <small>MAIN</small>
        <a className="sidebar-2115__item sidebar-2115__item--active" href="#">
          <i className="fa-solid fa-house"></i>Dashboard
        </a>
        <a className="sidebar-2115__item" href="#">
          <i className="fa-solid fa-user"></i>Users
        </a>
        <a className="sidebar-2115__item" href="#">
          <i className="fa-solid fa-box"></i>Products
        </a>
        <a className="sidebar-2115__item" href="#">
          <i className="fa-solid fa-chart-pie"></i>Reports
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand"><i class="fa-solid fa-layer-group"></i>Admin Panel</div>
    <small>MAIN</small>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Dashboard</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-user"></i>Users</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-box"></i>Products</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-chart-pie"></i>Reports</a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 17px 11px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
    color: #3f3f46;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 17px;
    color: #18181b;
    font-size: 12px;
    font-weight: 900;
}
.Sidebar-brand i {
    color: #6366f1;
}
.Sidebar small {
    display: block;
    padding: 0 10px 7px;
    color: #a1a1aa;
    font-size: 7px;
    letter-spacing: 2px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 8px;
    color: #71717a;
    font-size: 11px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-item--active i {
    color: #6366f1;
}`,
  },
  {
    id: 2116,
    name: "Compact Icon Sidebar",
    preview: (
      <aside className="sidebar-2116">
        <div className="sidebar-2116__logo">
          <i className="fa-solid fa-a"></i>
        </div>
        <a className="sidebar-2116__item sidebar-2116__item--active" href="#">
          <i className="fa-solid fa-house"></i>
        </a>
        <a className="sidebar-2116__item" href="#">
          <i className="fa-solid fa-chart-line"></i>
        </a>
        <a className="sidebar-2116__item" href="#">
          <i className="fa-solid fa-folder"></i>
        </a>
        <a className="sidebar-2116__item" href="#">
          <i className="fa-solid fa-message"></i>
        </a>
        <a className="sidebar-2116__item" href="#">
          <i className="fa-solid fa-gear"></i>
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo"><i class="fa-solid fa-a"></i></div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-chart-line"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-folder"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-message"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i></a>
</aside>`,
    css: `.Sidebar {
    width: 54px;
    padding: 9px 6px;
    border: 1px solid #27272a;
    border-radius: 15px;
    background: #09090b;
}
.Sidebar-logo,
.Sidebar-item {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    margin: 0 auto 7px;
    border-radius: 10px;
    color: #71717a;
}
.Sidebar-logo {
    margin-bottom: 17px;
    background: linear-gradient(135deg,#6366f1,#8b5cf6);
    color: #fff;
    font-weight: 900;
}
.Sidebar-item {
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #27272a;
    color: #fff;
}
.Sidebar-item--active {
    box-shadow: inset 0 0 0 1px #52525b;
}`,
  },
  {
    id: 2117,
    name: "Gradient Creative Sidebar",
    preview: (
      <aside className="sidebar-2117">
        <div className="sidebar-2117__brand">
          <i className="fa-solid fa-wand-magic-sparkles"></i>Creative
        </div>
        <a className="sidebar-2117__item sidebar-2117__item--active" href="#">
          Home
        </a>
        <a className="sidebar-2117__item" href="#">
          Projects
        </a>
        <a className="sidebar-2117__item" href="#">
          Assets
        </a>
        <a className="sidebar-2117__item" href="#">
          Community
        </a>
        <div className="sidebar-2117__upgrade">
          <i className="fa-solid fa-crown"></i>
          <span>Upgrade Pro</span>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand"><i class="fa-solid fa-wand-magic-sparkles"></i>Creative</div>
    <a class="Sidebar-item Sidebar-item--active" href="#">Home</a>
    <a class="Sidebar-item" href="#">Projects</a>
    <a class="Sidebar-item" href="#">Assets</a>
    <a class="Sidebar-item" href="#">Community</a>
    <div class="Sidebar-upgrade">
        <i class="fa-solid fa-crown"></i>
        <span>Upgrade Pro</span>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 14px;
    border-radius: 20px;
    background: linear-gradient(180deg,#312e81,#581c87,#172554);
    color: #fff;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    margin-bottom: 12px;
    font-weight: 900;
}
.Sidebar-brand i {
    color: #f0abfc;
}
.Sidebar-item {
    display: block;
    padding: 11px 12px;
    margin-bottom: 4px;
    border-radius: 10px;
    color: #ddd6fe;
    font-size: 11px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(255,255,255,.12);
    color: #fff;
}
.Sidebar-upgrade {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    padding: 11px;
    border-radius: 10px;
    background: rgba(255,255,255,.1);
    color: #fef3c7;
    font-size: 10px;
}`,
  },
  {
    id: 2118,
    name: "Ecommerce Sidebar",
    preview: (
      <aside className="sidebar-2118">
        <strong>SHOP</strong>
        <div className="sidebar-2118__section">Categories</div>
        <a className="sidebar-2118__item sidebar-2118__item--active" href="#">
          <i className="fa-solid fa-shirt"></i>Clothing <span>24</span>
        </a>
        <a className="sidebar-2118__item" href="#">
          <i className="fa-solid fa-laptop"></i>Electronics <span>18</span>
        </a>
        <a className="sidebar-2118__item" href="#">
          <i className="fa-solid fa-house"></i>Home <span>12</span>
        </a>
        <div className="sidebar-2118__section">Filters</div>
        <a className="sidebar-2118__item" href="#">
          <i className="fa-solid fa-tag"></i>Sale
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <strong>SHOP</strong>
    <div class="Sidebar-section">Categories</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-shirt"></i>Clothing <span>24</span></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-laptop"></i>Electronics <span>18</span></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-house"></i>Home <span>12</span></a>
    <div class="Sidebar-section">Filters</div>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-tag"></i>Sale</a>
</aside>`,
    css: `.Sidebar {
    width: 200px;
    padding: 18px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #fff;
    color: #18181b;
}
.Sidebar strong {
    display: block;
    padding: 8px 10px 16px;
    font-size: 13px;
}
.Sidebar-section {
    padding: 8px 10px;
    color: #a1a1aa;
    font-size: 8px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 10px;
    border-radius: 8px;
    color: #52525b;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item i {
    width: 14px;
}
.Sidebar-item span {
    margin-left: auto;
    color: #a1a1aa;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-item--active i {
    color: #7c3aed;
}`,
  },
  {
    id: 2119,
    name: "Profile Sidebar",
    preview: (
      <aside className="sidebar-2119">
        <div className="sidebar-2119__avatar">A</div>
        <strong>André Babirian</strong>
        <span>Software Developer</span>
        <a className="sidebar-2119__item sidebar-2119__item--active" href="#">
          <i className="fa-solid fa-user"></i>Profile
        </a>
        <a className="sidebar-2119__item" href="#">
          <i className="fa-solid fa-sliders"></i>Preferences
        </a>
        <a className="sidebar-2119__item" href="#">
          <i className="fa-solid fa-lock"></i>Privacy
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-avatar">A</div>
    <strong>André Babirian</strong>
    <span>Software Developer</span>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-user"></i>Profile</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-sliders"></i>Preferences</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-lock"></i>Privacy</a>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 18px;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
    background: #fff;
    text-align: center;
    color: #18181b;
}
.Sidebar-avatar {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin: 0 auto 9px;
    border-radius: 50%;
    background: linear-gradient(135deg,#6366f1,#06b6d4);
    color: #fff;
    font-size: 17px;
    font-weight: 900;
}
.Sidebar strong,
.Sidebar > span {
    display: block;
}
.Sidebar strong {
    font-size: 12px;
}
.Sidebar > span {
    margin: 3px 0 15px;
    color: #a1a1aa;
    font-size: 8px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px;
    margin-bottom: 4px;
    border-radius: 8px;
    color: #71717a;
    font-size: 10px;
    text-align: left;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-item--active i {
    color: #6366f1;
}`,
  },
  {
    id: 2120,
    name: "Floating Shadow Sidebar",
    preview: (
      <aside className="sidebar-2120">
        <div className="sidebar-2120__logo">
          <i className="fa-solid fa-compass"></i>
        </div>
        <a className="sidebar-2120__item sidebar-2120__item--active" href="#">
          <i className="fa-solid fa-house"></i>
        </a>
        <a className="sidebar-2120__item" href="#">
          <i className="fa-solid fa-bookmark"></i>
        </a>
        <a className="sidebar-2120__item" href="#">
          <i className="fa-solid fa-heart"></i>
        </a>
        <a className="sidebar-2120__item" href="#">
          <i className="fa-solid fa-bell"></i>
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo"><i class="fa-solid fa-compass"></i></div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bookmark"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-heart"></i></a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bell"></i></a>
</aside>`,
    css: `.Sidebar {
    width: 58px;
    padding: 10px 7px;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 15px 45px rgba(15,23,42,.14);
}
.Sidebar-logo,
.Sidebar-item {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin: 0 auto 8px;
    border-radius: 12px;
}
.Sidebar-logo {
    margin-bottom: 20px;
    background: #18181b;
    color: #fff;
}
.Sidebar-item {
    color: #a1a1aa;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #f4f4f5;
    color: #18181b;
}
.Sidebar-item--active {
    box-shadow: inset 0 0 0 1px #e4e4e7;
}`,
  },
  {
    id: 2121,
    name: "Aurora Glass Sidebar",
    preview: (
      <aside className="sidebar-2121">
        <div className="sidebar-2121__aurora"></div>
        <div className="sidebar-2121__brand">NOVA</div>
        <a className="sidebar-2121__item sidebar-2121__item--active" href="#">
          <i className="fa-solid fa-house"></i>Home
        </a>
        <a className="sidebar-2121__item" href="#">
          <i className="fa-solid fa-bolt"></i>Activity
        </a>
        <a className="sidebar-2121__item" href="#">
          <i className="fa-solid fa-users"></i>Members
        </a>
        <a className="sidebar-2121__item" href="#">
          <i className="fa-solid fa-gear"></i>Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-aurora"></div>
    <div class="Sidebar-brand">NOVA</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Home</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bolt"></i>Activity</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-users"></i>Members</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i>Settings</a>
</aside>`,
    css: `.Sidebar {
    position: relative;
    width: 195px;
    padding: 17px 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 18px;
    background: rgba(15,23,42,.78);
    color: #fff;
    backdrop-filter: blur(18px);
}
.Sidebar-aurora {
    position: absolute;
    width: 130px;
    height: 130px;
    right: -45px;
    top: -35px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(35px);
    opacity: .45;
}
.Sidebar-brand {
    position: relative;
    z-index: 2;
    padding: 10px;
    margin-bottom: 13px;
    font-weight: 950;
    letter-spacing: 3px;
}
.Sidebar-item {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #cbd5e1;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(255,255,255,.1);
    color: #fff;
}
.Sidebar-item--active i {
    color: #67e8f9;
}`,
  },
  {
    id: 2122,
    name: "Brutalist Sidebar",
    preview: (
      <aside className="sidebar-2122">
        <div className="sidebar-2122__title">MENU_01</div>
        <a className="sidebar-2122__item sidebar-2122__item--active" href="#">
          HOME
        </a>
        <a className="sidebar-2122__item" href="#">
          WORK
        </a>
        <a className="sidebar-2122__item" href="#">
          ABOUT
        </a>
        <a className="sidebar-2122__item" href="#">
          CONTACT
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-title">MENU_01</div>
    <a class="Sidebar-item Sidebar-item--active" href="#">HOME</a>
    <a class="Sidebar-item" href="#">WORK</a>
    <a class="Sidebar-item" href="#">ABOUT</a>
    <a class="Sidebar-item" href="#">CONTACT</a>
</aside>`,
    css: `.Sidebar {
    width: 180px;
    padding: 10px;
    border: 4px solid #111;
    border-radius: 0;
    background: #facc15;
}
.Sidebar-title {
    padding: 12px;
    border-bottom: 3px solid #111;
    font-size: 10px;
    font-weight: 950;
}
.Sidebar-item {
    display: block;
    padding: 14px 12px;
    border-bottom: 3px solid #111;
    color: #111;
    font-size: 11px;
    font-weight: 950;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #111;
    color: #facc15;
}`,
  },
  {
    id: 2123,
    name: "Purple SaaS Sidebar",
    preview: (
      <aside className="sidebar-2123">
        <div className="sidebar-2123__brand">
          <i className="fa-solid fa-layer-group"></i>Flow
        </div>
        <div className="sidebar-2123__label">WORKSPACE</div>
        <a className="sidebar-2123__item sidebar-2123__item--active" href="#">
          <i className="fa-solid fa-house"></i>Overview
        </a>
        <a className="sidebar-2123__item" href="#">
          <i className="fa-solid fa-table-columns"></i>Boards
        </a>
        <a className="sidebar-2123__item" href="#">
          <i className="fa-solid fa-calendar"></i>Calendar
        </a>
        <a className="sidebar-2123__item" href="#">
          <i className="fa-solid fa-clock"></i>Activity
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand"><i class="fa-solid fa-layer-group"></i>Flow</div>
    <div class="Sidebar-label">WORKSPACE</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Overview</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-table-columns"></i>Boards</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-calendar"></i>Calendar</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-clock"></i>Activity</a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #e9d5ff;
    border-radius: 16px;
    background: #faf5ff;
    color: #3b0764;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 900;
}
.Sidebar-brand i {
    color: #9333ea;
}
.Sidebar-label {
    padding: 0 10px 7px;
    color: #a855f7;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 9px;
    color: #7e22ce;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #ede9fe;
    color: #4c1d95;
}
.Sidebar-item--active i {
    color: #9333ea;
}`,
  },
  {
    id: 2124,
    name: "Red Alert Sidebar",
    preview: (
      <aside className="sidebar-2124">
        <div className="sidebar-2124__warning">
          <i className="fa-solid fa-triangle-exclamation"></i> ALERT MODE
        </div>
        <a className="sidebar-2124__item sidebar-2124__item--active" href="#">
          <i className="fa-solid fa-gauge"></i>Status
        </a>
        <a className="sidebar-2124__item" href="#">
          <i className="fa-solid fa-server"></i>Servers
        </a>
        <a className="sidebar-2124__item" href="#">
          <i className="fa-solid fa-bug"></i>Incidents
        </a>
        <a className="sidebar-2124__item" href="#">
          <i className="fa-solid fa-bell"></i>Alerts
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-warning"><i class="fa-solid fa-triangle-exclamation"></i> ALERT MODE</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-gauge"></i>Status</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-server"></i>Servers</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bug"></i>Incidents</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bell"></i>Alerts</a>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 14px;
    border: 1px solid #7f1d1d;
    border-radius: 12px;
    background: #180a0a;
    color: #fecaca;
}
.Sidebar-warning {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px;
    margin-bottom: 11px;
    border: 1px solid #991b1b;
    border-radius: 8px;
    background: #450a0a;
    color: #f87171;
    font-size: 8px;
    font-weight: 900;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 8px;
    color: #fca5a5;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #450a0a;
    color: #fff;
}
.Sidebar-item--active i {
    color: #ef4444;
}`,
  },
  {
    id: 2125,
    name: "Soft Green Sidebar",
    preview: (
      <aside className="sidebar-2125">
        <div className="sidebar-2125__logo">
          <i className="fa-solid fa-leaf"></i>Nature
        </div>
        <a className="sidebar-2125__item sidebar-2125__item--active" href="#">
          <i className="fa-solid fa-house"></i>Home
        </a>
        <a className="sidebar-2125__item" href="#">
          <i className="fa-solid fa-seedling"></i>Projects
        </a>
        <a className="sidebar-2125__item" href="#">
          <i className="fa-solid fa-heart"></i>Favorites
        </a>
        <a className="sidebar-2125__item" href="#">
          <i className="fa-solid fa-gear"></i>Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo"><i class="fa-solid fa-leaf"></i>Nature</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Home</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-seedling"></i>Projects</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-heart"></i>Favorites</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i>Settings</a>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 15px 11px;
    border: 1px solid #bbf7d0;
    border-radius: 20px;
    background: #f0fdf4;
    color: #14532d;
}
.Sidebar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 12px;
    color: #166534;
    font-weight: 900;
}
.Sidebar-logo i {
    color: #22c55e;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 10px;
    color: #4d7c0f;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #dcfce7;
    color: #14532d;
}
.Sidebar-item--active i {
    color: #16a34a;
}`,
  },
  {
    id: 2126,
    name: "Blue Glass Sidebar",
    preview: (
      <aside className="sidebar-2126">
        <div className="sidebar-2126__logo">
          BLUE<span>.</span>
        </div>
        <a className="sidebar-2126__item sidebar-2126__item--active" href="#">
          <i className="fa-solid fa-house"></i>Dashboard
        </a>
        <a className="sidebar-2126__item" href="#">
          <i className="fa-solid fa-chart-column"></i>Analytics
        </a>
        <a className="sidebar-2126__item" href="#">
          <i className="fa-solid fa-folder"></i>Projects
        </a>
        <a className="sidebar-2126__item" href="#">
          <i className="fa-solid fa-gear"></i>Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo">BLUE<span>.</span></div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Dashboard</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-chart-column"></i>Analytics</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-folder"></i>Projects</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i>Settings</a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 16px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 18px;
    background: rgba(255,255,255,.18);
    backdrop-filter: blur(15px);
    color: #e0f2fe;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.3);
}
.Sidebar-logo {
    padding: 10px;
    margin-bottom: 13px;
    color: #fff;
    font-size: 14px;
    font-weight: 950;
    letter-spacing: 3px;
}
.Sidebar-logo span {
    color: #67e8f9;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 10px;
    color: #dbeafe;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(255,255,255,.12);
    color: #fff;
}
.Sidebar-item--active i {
    color: #67e8f9;
}`,
  },
  {
    id: 2127,
    name: "Gaming Sidebar",
    preview: (
      <aside className="sidebar-2127">
        <div className="sidebar-2127__brand">
          <i className="fa-solid fa-gamepad"></i>PLAYER
        </div>
        <a className="sidebar-2127__item sidebar-2127__item--active" href="#">
          <i className="fa-solid fa-house"></i>Lobby
        </a>
        <a className="sidebar-2127__item" href="#">
          <i className="fa-solid fa-trophy"></i>Rankings
        </a>
        <a className="sidebar-2127__item" href="#">
          <i className="fa-solid fa-users"></i>Friends
        </a>
        <a className="sidebar-2127__item" href="#">
          <i className="fa-solid fa-store"></i>Store
        </a>
        <div className="sidebar-2127__level">
          <span>LEVEL 42</span>
          <b></b>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand"><i class="fa-solid fa-gamepad"></i>PLAYER</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Lobby</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-trophy"></i>Rankings</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-users"></i>Friends</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-store"></i>Store</a>
    <div class="Sidebar-level"><span>LEVEL 42</span><b></b></div>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px;
    border: 1px solid #312e81;
    background: linear-gradient(180deg,#09090b,#18181b);
    color: #fff;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 12px;
    color: #f0abfc;
    font-size: 11px;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 7px;
    color: #a1a1aa;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: linear-gradient(90deg,#312e81,#4c1d95);
    color: #fff;
}
.Sidebar-item--active i {
    color: #e879f9;
}
.Sidebar-level {
    margin-top: 18px;
    padding: 9px;
    color: #71717a;
    font-size: 7px;
}
.Sidebar-level b {
    display: block;
    height: 4px;
    margin-top: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg,#8b5cf6 70%,#27272a 70%);
}`,
  },
  {
    id: 2128,
    name: "Minimal Monochrome Sidebar",
    preview: (
      <aside className="sidebar-2128">
        <div className="sidebar-2128__brand">INDEX</div>
        <a className="sidebar-2128__item sidebar-2128__item--active" href="#">
          01 — Overview
        </a>
        <a className="sidebar-2128__item" href="#">
          02 — Projects
        </a>
        <a className="sidebar-2128__item" href="#">
          03 — Archive
        </a>
        <a className="sidebar-2128__item" href="#">
          04 — Contact
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">INDEX</div>
    <a class="Sidebar-item Sidebar-item--active" href="#">01 — Overview</a>
    <a class="Sidebar-item" href="#">02 — Projects</a>
    <a class="Sidebar-item" href="#">03 — Archive</a>
    <a class="Sidebar-item" href="#">04 — Contact</a>
</aside>`,
    css: `.Sidebar {
    width: 190px;
    padding: 20px 14px;
    border-right: 1px solid #e4e4e7;
    background: #fff;
    color: #18181b;
}
.Sidebar-brand {
    padding: 9px;
    margin-bottom: 22px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 4px;
}
.Sidebar-item {
    display: block;
    padding: 10px;
    color: #a1a1aa;
    font-family: monospace;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    color: #18181b;
}
.Sidebar-item--active {
    font-weight: 900;
}`,
  },
  {
    id: 2129,
    name: "Orange Startup Sidebar",
    preview: (
      <aside className="sidebar-2129">
        <div className="sidebar-2129__logo">
          <i className="fa-solid fa-rocket"></i>Launch
        </div>
        <a className="sidebar-2129__item sidebar-2129__item--active" href="#">
          <i className="fa-solid fa-house"></i>Dashboard
        </a>
        <a className="sidebar-2129__item" href="#">
          <i className="fa-solid fa-rocket"></i>Releases
        </a>
        <a className="sidebar-2129__item" href="#">
          <i className="fa-solid fa-users"></i>Team
        </a>
        <a className="sidebar-2129__item" href="#">
          <i className="fa-solid fa-chart-line"></i>Growth
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-logo"><i class="fa-solid fa-rocket"></i>Launch</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Dashboard</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-rocket"></i>Releases</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-users"></i>Team</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-chart-line"></i>Growth</a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #fed7aa;
    border-radius: 15px;
    background: #fff7ed;
    color: #7c2d12;
}
.Sidebar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 13px;
    font-size: 13px;
    font-weight: 900;
}
.Sidebar-logo i {
    color: #f97316;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #9a3412;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #ffedd5;
    color: #7c2d12;
}
.Sidebar-item--active i {
    color: #ea580c;
}`,
  },
  {
    id: 2130,
    name: "Dark Luxury Sidebar",
    preview: (
      <aside className="sidebar-2130">
        <div className="sidebar-2130__brand">MONARCH</div>
        <a className="sidebar-2130__item sidebar-2130__item--active" href="#">
          <i className="fa-solid fa-gem"></i>Collection
        </a>
        <a className="sidebar-2130__item" href="#">
          <i className="fa-solid fa-crown"></i>Members
        </a>
        <a className="sidebar-2130__item" href="#">
          <i className="fa-solid fa-clock"></i>History
        </a>
        <a className="sidebar-2130__item" href="#">
          <i className="fa-solid fa-gear"></i>Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">MONARCH</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-gem"></i>Collection</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-crown"></i>Members</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-clock"></i>History</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i>Settings</a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 18px 12px;
    border: 1px solid #3f3f46;
    background: #0c0a09;
    color: #e7e5e4;
}
.Sidebar-brand {
    padding: 10px;
    margin-bottom: 14px;
    color: #d4af67;
    font-family: Georgia,serif;
    font-size: 13px;
    letter-spacing: 3px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    color: #a8a29e;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #1c1917;
    color: #f5f5f4;
}
.Sidebar-item--active {
    border-left: 1px solid #d4af67;
}
.Sidebar-item--active i {
    color: #d4af67;
}`,
  },
  {
    id: 2131,
    name: "Rainbow Energy Sidebar",
    preview: (
      <aside className="sidebar-2131">
        <div className="sidebar-2131__gradient"></div>
        <div className="sidebar-2131__brand">
          <i className="fa-solid fa-wand-magic-sparkles"></i>ENERGY
        </div>
        <a className="sidebar-2131__item sidebar-2131__item--active" href="#">
          <i className="fa-solid fa-house"></i>Home
        </a>
        <a className="sidebar-2131__item" href="#">
          <i className="fa-solid fa-star"></i>Discover
        </a>
        <a className="sidebar-2131__item" href="#">
          <i className="fa-solid fa-bolt"></i>Power
        </a>
        <a className="sidebar-2131__item" href="#">
          <i className="fa-solid fa-gear"></i>Settings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-gradient"></div>
    <div class="Sidebar-brand"><i class="fa-solid fa-wand-magic-sparkles"></i>ENERGY</div>
    <a class="Sidebar-item Sidebar-item--active" href="#"><i class="fa-solid fa-house"></i>Home</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-star"></i>Discover</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-bolt"></i>Power</a>
    <a class="Sidebar-item" href="#"><i class="fa-solid fa-gear"></i>Settings</a>
</aside>`,
    css: `.Sidebar {
    position: relative;
    width: 195px;
    padding: 16px 11px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.13);
    border-radius: 18px;
    background: #09090b;
    color: #fff;
}
.Sidebar-gradient {
    position: absolute;
    width: 180px;
    height: 90px;
    top: -35px;
    left: -10px;
    border-radius: 50%;
    background: linear-gradient(
        90deg,
        #22d3ee,
        #6366f1,
        #ec4899,
        #f97316
    );
    filter: blur(35px);
    opacity: .3;
}
.Sidebar-brand {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    margin-bottom: 13px;
    font-size: 11px;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #a78bfa;
}
.Sidebar-item {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #a1a1aa;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(255,255,255,.07);
    color: #fff;
}
.Sidebar-item--active i {
    color: #22d3ee;
    text-shadow:
        0 0 7px #22d3ee,
        0 0 15px #8b5cf6;
}`,
  },
  {
    id: 2132,
    name: "Inferno Element Sidebar",
    preview: (
      <aside className="sidebar-2132">
        <div className="sidebar-2132__brand">
          <i className="fa-solid fa-fire"></i>
          INFERNO
        </div>
        <a className="sidebar-2132__item sidebar-2132__item--active" href="#">
          <i className="fa-solid fa-flame"></i>
          Fire Core
        </a>
        <a className="sidebar-2132__item" href="#">
          <i className="fa-solid fa-burst"></i>
          Flames
        </a>
        <a className="sidebar-2132__item" href="#">
          <i className="fa-solid fa-meteor"></i>
          Meteors
        </a>
        <a className="sidebar-2132__item" href="#">
          <i className="fa-solid fa-dragon"></i>
          Creatures
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-fire"></i>
        INFERNO
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-flame"></i>
        Fire Core
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-burst"></i>
        Flames
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-meteor"></i>
        Meteors
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-dragon"></i>
        Creatures
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #7f1d1d;
    border-radius: 16px;
    background:
        radial-gradient(circle at 85% 10%,rgba(249,115,22,.16),transparent 28%),
        #180806;
    color: #fed7aa;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #fb923c;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    text-shadow: 0 0 10px #f97316;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #fdba74;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(249,115,22,.12);
    color: #fff7ed;
}
.Sidebar-item--active i {
    color: #f97316;
    text-shadow: 0 0 8px #f97316;
}`,
  },
  {
    id: 2133,
    name: "Frost Element Sidebar",
    preview: (
      <aside className="sidebar-2133">
        <div className="sidebar-2133__brand">
          <i className="fa-solid fa-snowflake"></i>
          FROST
        </div>
        <a className="sidebar-2133__item sidebar-2133__item--active" href="#">
          <i className="fa-solid fa-icicles"></i>
          Ice Core
        </a>
        <a className="sidebar-2133__item" href="#">
          <i className="fa-solid fa-snowflake"></i>
          Blizzard
        </a>
        <a className="sidebar-2133__item" href="#">
          <i className="fa-solid fa-mountain"></i>
          Glacier
        </a>
        <a className="sidebar-2133__item" href="#">
          <i className="fa-solid fa-gem"></i>
          Crystals
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-snowflake"></i>
        FROST
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-icicles"></i>
        Ice Core
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-snowflake"></i>
        Blizzard
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-mountain"></i>
        Glacier
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-gem"></i>
        Crystals
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #7dd3fc;
    border-radius: 16px;
    background:
        radial-gradient(circle at 90% 5%,rgba(186,230,253,.25),transparent 30%),
        #082f49;
    color: #e0f2fe;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #bae6fd;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    text-shadow: 0 0 10px #7dd3fc;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #bae6fd;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(125,211,252,.12);
    color: #fff;
}
.Sidebar-item--active i {
    color: #7dd3fc;
    text-shadow: 0 0 8px #7dd3fc;
}`,
  },
  {
    id: 2134,
    name: "Ocean Element Sidebar",
    preview: (
      <aside className="sidebar-2134">
        <div className="sidebar-2134__brand">
          <i className="fa-solid fa-water"></i>
          AQUA
        </div>
        <a className="sidebar-2134__item sidebar-2134__item--active" href="#">
          <i className="fa-solid fa-droplet"></i>
          Ocean
        </a>
        <a className="sidebar-2134__item" href="#">
          <i className="fa-solid fa-water"></i>
          Tides
        </a>
        <a className="sidebar-2134__item" href="#">
          <i className="fa-solid fa-fish"></i>
          Creatures
        </a>
        <a className="sidebar-2134__item" href="#">
          <i className="fa-solid fa-anchor"></i>
          Depths
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-water"></i>
        AQUA
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-droplet"></i>
        Ocean
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-water"></i>
        Tides
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-fish"></i>
        Creatures
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-anchor"></i>
        Depths
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #0891b2;
    border-radius: 18px;
    background:
        linear-gradient(180deg,#082f49,#083344 70%,#042f3e);
    color: #cffafe;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #67e8f9;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 10px;
    color: #a5f3fc;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(34,211,238,.12);
    color: #ecfeff;
}
.Sidebar-item--active i {
    color: #22d3ee;
    text-shadow: 0 0 8px #22d3ee;
}`,
  },
  {
    id: 2135,
    name: "Thunder Element Sidebar",
    preview: (
      <aside className="sidebar-2135">
        <div className="sidebar-2135__brand">
          <i className="fa-solid fa-bolt"></i>
          THUNDER
        </div>
        <a className="sidebar-2135__item sidebar-2135__item--active" href="#">
          <i className="fa-solid fa-bolt"></i>
          Storm Core
        </a>
        <a className="sidebar-2135__item" href="#">
          <i className="fa-solid fa-cloud-bolt"></i>
          Storms
        </a>
        <a className="sidebar-2135__item" href="#">
          <i className="fa-solid fa-wand-sparkles"></i>
          Energy
        </a>
        <a className="sidebar-2135__item" href="#">
          <i className="fa-solid fa-satellite-dish"></i>
          Signals
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-bolt"></i>
        THUNDER
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-bolt"></i>
        Storm Core
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-cloud-bolt"></i>
        Storms
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-wand-sparkles"></i>
        Energy
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-satellite-dish"></i>
        Signals
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #4f46e5;
    border-radius: 14px;
    background:
        radial-gradient(circle at 85% 10%,rgba(99,102,241,.35),transparent 30%),
        #0b1027;
    color: #e0e7ff;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #a5b4fc;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #c4b5fd;
    text-shadow: 0 0 10px #818cf8;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 8px;
    color: #a5b4fc;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(99,102,241,.16);
    color: #fff;
}
.Sidebar-item--active i {
    color: #818cf8;
    text-shadow: 0 0 8px #818cf8;
}`,
  },
  {
    id: 2136,
    name: "Earth Element Sidebar",
    preview: (
      <aside className="sidebar-2136">
        <div className="sidebar-2136__brand">
          <i className="fa-solid fa-mountain"></i>
          TERRAN
        </div>
        <a className="sidebar-2136__item sidebar-2136__item--active" href="#">
          <i className="fa-solid fa-earth-americas"></i>
          Earth
        </a>
        <a className="sidebar-2136__item" href="#">
          <i className="fa-solid fa-mountain"></i>
          Mountains
        </a>
        <a className="sidebar-2136__item" href="#">
          <i className="fa-solid fa-gem"></i>
          Minerals
        </a>
        <a className="sidebar-2136__item" href="#">
          <i className="fa-solid fa-tree"></i>
          Forests
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-mountain"></i>
        TERRAN
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-earth-americas"></i>
        Earth
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-mountain"></i>
        Mountains
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-gem"></i>
        Minerals
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-tree"></i>
        Forests
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #78716c;
    border-radius: 14px;
    background:
        linear-gradient(180deg,#1c1917,#292524);
    color: #e7e5e4;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #d6d3d1;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #a8a29e;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 8px;
    color: #a8a29e;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #44403c;
    color: #fff;
}
.Sidebar-item--active i {
    color: #d6d3d1;
}`,
  },
  {
    id: 2137,
    name: "Shadow Element Sidebar",
    preview: (
      <aside className="sidebar-2137">
        <div className="sidebar-2137__brand">
          <i className="fa-solid fa-moon"></i>
          SHADOW
        </div>
        <a className="sidebar-2137__item sidebar-2137__item--active" href="#">
          <i className="fa-solid fa-eye-slash"></i>
          Void
        </a>
        <a className="sidebar-2137__item" href="#">
          <i className="fa-solid fa-ghost"></i>
          Spirits
        </a>
        <a className="sidebar-2137__item" href="#">
          <i className="fa-solid fa-mask"></i>
          Stealth
        </a>
        <a className="sidebar-2137__item" href="#">
          <i className="fa-solid fa-skull"></i>
          Abyss
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-moon"></i>
        SHADOW
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-eye-slash"></i>
        Void
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-ghost"></i>
        Spirits
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-mask"></i>
        Stealth
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-skull"></i>
        Abyss
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #3f3f46;
    border-radius: 16px;
    background:
        radial-gradient(circle at 85% 8%,rgba(168,85,247,.13),transparent 25%),
        #050505;
    color: #d4d4d8;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #c4b5fd;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #8b5cf6;
    text-shadow: 0 0 10px #7c3aed;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #a1a1aa;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #18181b;
    color: #fff;
}
.Sidebar-item--active i {
    color: #a855f7;
    text-shadow: 0 0 8px #a855f7;
}`,
  },
  {
    id: 2138,
    name: "Divine Light Sidebar",
    preview: (
      <aside className="sidebar-2138">
        <div className="sidebar-2138__brand">
          <i className="fa-solid fa-sun"></i>
          DIVINE
        </div>
        <a className="sidebar-2138__item sidebar-2138__item--active" href="#">
          <i className="fa-solid fa-star"></i>
          Light
        </a>
        <a className="sidebar-2138__item" href="#">
          <i className="fa-solid fa-sun"></i>
          Radiance
        </a>
        <a className="sidebar-2138__item" href="#">
          <i className="fa-solid fa-shield-heart"></i>
          Protection
        </a>
        <a className="sidebar-2138__item" href="#">
          <i className="fa-solid fa-feather"></i>
          Blessings
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-sun"></i>
        DIVINE
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-star"></i>
        Light
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-sun"></i>
        Radiance
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-shield-heart"></i>
        Protection
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-feather"></i>
        Blessings
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #fde68a;
    border-radius: 16px;
    background:
        radial-gradient(circle at 50% 0%,rgba(254,240,138,.35),transparent 32%),
        #fffbeb;
    color: #78350f;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #b45309;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #f59e0b;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #92400e;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #fef3c7;
    color: #78350f;
}
.Sidebar-item--active i {
    color: #f59e0b;
}`,
  },
  {
    id: 2139,
    name: "Wind Element Sidebar",
    preview: (
      <aside className="sidebar-2139">
        <div className="sidebar-2139__brand">
          <i className="fa-solid fa-wind"></i>
          AERIS
        </div>
        <a className="sidebar-2139__item sidebar-2139__item--active" href="#">
          <i className="fa-solid fa-wind"></i>
          Air
        </a>
        <a className="sidebar-2139__item" href="#">
          <i className="fa-solid fa-tornado"></i>
          Tornado
        </a>
        <a className="sidebar-2139__item" href="#">
          <i className="fa-solid fa-feather"></i>
          Breeze
        </a>
        <a className="sidebar-2139__item" href="#">
          <i className="fa-solid fa-cloud"></i>
          Clouds
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-wind"></i>
        AERIS
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-wind"></i>
        Air
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-tornado"></i>
        Tornado
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-feather"></i>
        Breeze
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-cloud"></i>
        Clouds
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #bae6fd;
    border-radius: 22px;
    background:
        linear-gradient(145deg,#f0f9ff,#eff6ff);
    color: #164e63;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #0369a1;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #0ea5e9;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 12px;
    color: #0369a1;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #e0f2fe;
    color: #0c4a6e;
}
.Sidebar-item--active i {
    color: #0284c7;
}`,
  },
  {
    id: 2140,
    name: "Nature Element Sidebar",
    preview: (
      <aside className="sidebar-2140">
        <div className="sidebar-2140__brand">
          <i className="fa-solid fa-leaf"></i>
          VERDANT
        </div>
        <a className="sidebar-2140__item sidebar-2140__item--active" href="#">
          <i className="fa-solid fa-seedling"></i>
          Nature
        </a>
        <a className="sidebar-2140__item" href="#">
          <i className="fa-solid fa-tree"></i>
          Forest
        </a>
        <a className="sidebar-2140__item" href="#">
          <i className="fa-solid fa-leaf"></i>
          Plants
        </a>
        <a className="sidebar-2140__item" href="#">
          <i className="fa-solid fa-spa"></i>
          Garden
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-brand">
        <i class="fa-solid fa-leaf"></i>
        VERDANT
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-seedling"></i>
        Nature
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-tree"></i>
        Forest
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-leaf"></i>
        Plants
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-spa"></i>
        Garden
    </a>
</aside>`,
    css: `.Sidebar {
    width: 195px;
    padding: 15px 11px;
    border: 1px solid #86efac;
    border-radius: 20px;
    background:
        radial-gradient(circle at 85% 0%,rgba(74,222,128,.2),transparent 28%),
        #f0fdf4;
    color: #14532d;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #15803d;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #16a34a;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 11px;
    color: #166534;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: #dcfce7;
    color: #14532d;
}
.Sidebar-item--active i {
    color: #16a34a;
}`,
  },
  {
    id: 2141,
    name: "Cosmic Element Sidebar",
    preview: (
      <aside className="sidebar-2141">
        <div className="sidebar-2141__stars"></div>
        <div className="sidebar-2141__brand">
          <i className="fa-solid fa-star"></i>
          COSMOS
        </div>
        <a className="sidebar-2141__item sidebar-2141__item--active" href="#">
          <i className="fa-solid fa-earth-americas"></i>
          Planets
        </a>
        <a className="sidebar-2141__item" href="#">
          <i className="fa-solid fa-meteor"></i>
          Meteors
        </a>
        <a className="sidebar-2141__item" href="#">
          <i className="fa-solid fa-satellite"></i>
          Satellites
        </a>
        <a className="sidebar-2141__item" href="#">
          <i className="fa-solid fa-star"></i>
          Stars
        </a>
      </aside>
    ),
    html: `<aside class="Sidebar">
    <div class="Sidebar-stars"></div>
    <div class="Sidebar-brand">
        <i class="fa-solid fa-star"></i>
        COSMOS
    </div>
    <a class="Sidebar-item Sidebar-item--active" href="#">
        <i class="fa-solid fa-earth-americas"></i>
        Planets
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-meteor"></i>
        Meteors
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-satellite"></i>
        Satellites
    </a>
    <a class="Sidebar-item" href="#">
        <i class="fa-solid fa-star"></i>
        Stars
    </a>
</aside>`,
    css: `.Sidebar {
    position: relative;
    width: 195px;
    padding: 15px 11px;
    overflow: hidden;
    border: 1px solid #4338ca;
    border-radius: 18px;
    background:
        radial-gradient(circle at 75% 20%,rgba(99,102,241,.3),transparent 30%),
        #030712;
    color: #e0e7ff;
}
.Sidebar-stars {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% 18%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 80% 25%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 55% 75%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 25% 85%,#fff 0 1px,transparent 2px);
    opacity: .7;
}
.Sidebar-brand,
.Sidebar-item {
    position: relative;
    z-index: 2;
}
.Sidebar-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    margin-bottom: 12px;
    color: #c4b5fd;
    font-weight: 950;
    letter-spacing: 2px;
}
.Sidebar-brand i {
    color: #a78bfa;
    text-shadow:
        0 0 7px #a78bfa,
        0 0 14px #6366f1;
}
.Sidebar-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    margin-bottom: 4px;
    border-radius: 9px;
    color: #a5b4fc;
    font-size: 10px;
    text-decoration: none;
}
.Sidebar-item:hover,
.Sidebar-item--active {
    background: rgba(99,102,241,.12);
    color: #fff;
}
.Sidebar-item--active i {
    color: #818cf8;
    text-shadow: 0 0 8px #818cf8;
}`,
  },
  {
    id: 3476,
    name: "Professional Workspace Sidebar",
    scriptId: 3476,
    preview: (
      <aside className="sidebar-3476" data-sidebar-id="3476">
        <div className="sidebar-3476-header">
          <div className="sidebar-3476-brand">
            <div className="sidebar-3476-logo">
              <span>A</span>
            </div>

            <div className="sidebar-3476-brand-text">
              <strong>Axis</strong>
              <span>Workspace</span>
            </div>
          </div>

          <button
            className="sidebar-3476-collapse"
            type="button"
            aria-label="Collapse sidebar"
            aria-expanded="true"
          >
            <i className="ri-layout-left-2-line"></i>
          </button>
        </div>

        <div className="sidebar-3476-search-wrap">
          <i className="ri-search-line"></i>

          <input
            className="sidebar-3476-search"
            type="text"
            placeholder="Search workspace..."
            aria-label="Search sidebar"
          />

          <span className="sidebar-3476-shortcut">⌘K</span>
        </div>

        <div className="sidebar-3476-workspace">
          <div className="sidebar-3476-workspace-icon">
            <span>AW</span>
          </div>

          <div className="sidebar-3476-workspace-info">
            <strong>Axis Workspace</strong>
            <span>Professional plan</span>
          </div>

          <button
            className="sidebar-3476-workspace-button"
            type="button"
            aria-label="Workspace options"
          >
            <i className="ri-more-2-fill"></i>
          </button>
        </div>

        <div className="sidebar-3476-body">
          <nav className="sidebar-3476-nav">
            <div className="sidebar-3476-section">
              <span className="sidebar-3476-section-title">OVERVIEW</span>

              <a
                href="#"
                className="sidebar-3476-nav-link active"
                data-sidebar-search="dashboard overview home"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-dashboard-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Dashboard</span>

                <span className="sidebar-3476-active-dot"></span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="analytics statistics insights reports"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-bar-chart-box-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Analytics</span>

                <span className="sidebar-3476-nav-meta">Live</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="activity recent history updates"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-pulse-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Activity</span>
              </a>
            </div>

            <div className="sidebar-3476-section">
              <span className="sidebar-3476-section-title">WORKSPACE</span>

              <div className="sidebar-3476-submenu open">
                <button
                  className="sidebar-3476-nav-link sidebar-3476-submenu-toggle"
                  type="button"
                  aria-expanded="true"
                  data-sidebar-search="projects websites applications development"
                >
                  <span className="sidebar-3476-nav-icon">
                    <i className="ri-folder-6-line"></i>
                  </span>

                  <span className="sidebar-3476-nav-text">Projects</span>

                  <span className="sidebar-3476-nav-count">12</span>

                  <i className="ri-arrow-down-s-line sidebar-3476-chevron"></i>
                </button>

                <div className="sidebar-3476-submenu-content">
                  <a
                    href="#"
                    className="sidebar-3476-submenu-link"
                    data-sidebar-search="website redesign northline"
                  >
                    <span className="sidebar-3476-project-color sidebar-3476-project-blue"></span>

                    <span>Website Redesign</span>

                    <small>68%</small>
                  </a>

                  <a
                    href="#"
                    className="sidebar-3476-submenu-link"
                    data-sidebar-search="mobile application app"
                  >
                    <span className="sidebar-3476-project-color sidebar-3476-project-purple"></span>

                    <span>Mobile Application</span>

                    <small>42%</small>
                  </a>

                  <a
                    href="#"
                    className="sidebar-3476-submenu-link"
                    data-sidebar-search="design system components ui"
                  >
                    <span className="sidebar-3476-project-color sidebar-3476-project-cyan"></span>

                    <span>Design System</span>

                    <small>81%</small>
                  </a>
                </div>
              </div>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="tasks work todo planning"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Tasks</span>

                <span className="sidebar-3476-nav-count">24</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="calendar schedule meetings events"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-calendar-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Calendar</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="messages chat inbox conversations"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-message-3-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Messages</span>

                <span className="sidebar-3476-message-count">8</span>
              </a>
            </div>

            <div className="sidebar-3476-section">
              <span className="sidebar-3476-section-title">MANAGEMENT</span>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="team people members employees"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-team-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Team</span>

                <div className="sidebar-3476-avatars">
                  <span>J</span>
                  <span>S</span>
                  <span>+4</span>
                </div>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="clients customers contacts crm"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-user-heart-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Clients</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="invoice billing payments finance"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-file-list-3-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Invoices</span>

                <span className="sidebar-3476-alert-dot"></span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="reports export business documents"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-file-chart-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Reports</span>
              </a>
            </div>

            <div className="sidebar-3476-section">
              <span className="sidebar-3476-section-title">SYSTEM</span>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="integrations applications connections api"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-links-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Integrations</span>

                <span className="sidebar-3476-nav-meta">14</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="settings preferences account configuration"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-settings-3-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Settings</span>
              </a>

              <a
                href="#"
                className="sidebar-3476-nav-link"
                data-sidebar-search="help support documentation questions"
              >
                <span className="sidebar-3476-nav-icon">
                  <i className="ri-question-line"></i>
                </span>

                <span className="sidebar-3476-nav-text">Help Center</span>
              </a>
            </div>

            <div className="sidebar-3476-no-results">
              <strong>No results found</strong>
              <span>Try another search term.</span>
            </div>
          </nav>
        </div>

        <div className="sidebar-3476-storage">
          <div className="sidebar-3476-storage-head">
            <div>
              <strong>Storage</strong>
              <span>68 GB of 100 GB</span>
            </div>

            <strong>68%</strong>
          </div>

          <div className="sidebar-3476-storage-track">
            <span></span>
          </div>

          <button className="sidebar-3476-storage-button" type="button">
            Upgrade storage
          </button>
        </div>

        <div className="sidebar-3476-footer">
          <div className="sidebar-3476-profile">
            <div className="sidebar-3476-avatar">
              <span>AB</span>

              <small></small>
            </div>

            <div className="sidebar-3476-profile-info">
              <strong>André Babirian</strong>
              <span>Frontend Developer</span>
            </div>
          </div>

          <button
            className="sidebar-3476-profile-button"
            type="button"
            aria-label="Profile options"
          >
            <i className="ri-more-2-fill"></i>
          </button>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar" data-sidebar-id="3476">
    <div class="Sidebar__header">
        <div class="Sidebar__brand">
            <div class="Sidebar__logo">
                <span>A</span>
            </div>

            <div class="Sidebar__brand-text">
                <strong>Axis</strong>
                <span>Workspace</span>
            </div>
        </div>

        <button
            class="Sidebar__collapse"
            type="button"
            aria-label="Collapse sidebar"
            aria-expanded="true"
        >
            <i class="ri-layout-left-2-line"></i>
        </button>
    </div>

    <div class="Sidebar__search-wrap">
        <i class="ri-search-line"></i>

        <input
            class="Sidebar__search"
            type="text"
            placeholder="Search workspace..."
            aria-label="Search sidebar"
        >

        <span class="Sidebar__shortcut">⌘K</span>
    </div>

    <div class="Sidebar__workspace">
        <div class="Sidebar__workspace-icon">
            <span>AW</span>
        </div>

        <div class="Sidebar__workspace-info">
            <strong>Axis Workspace</strong>
            <span>Professional plan</span>
        </div>

        <button
            class="Sidebar__workspace-button"
            type="button"
            aria-label="Workspace options"
        >
            <i class="ri-more-2-fill"></i>
        </button>
    </div>

    <div class="Sidebar__body">
        <nav class="Sidebar__nav">
            <div class="Sidebar__section">
                <span class="Sidebar__section-title">OVERVIEW</span>

                <a
                    href="#"
                    class="Sidebar__nav-link active"
                    data-sidebar-search="dashboard overview home"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-dashboard-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Dashboard</span>

                    <span class="Sidebar__active-dot"></span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="analytics statistics insights reports"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-bar-chart-box-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Analytics</span>

                    <span class="Sidebar__nav-meta">Live</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="activity recent history updates"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-pulse-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Activity</span>
                </a>
            </div>

            <div class="Sidebar__section">
                <span class="Sidebar__section-title">WORKSPACE</span>

                <div class="Sidebar__submenu open">
                    <button
                        class="Sidebar__nav-link Sidebar__submenu-toggle"
                        type="button"
                        aria-expanded="true"
                        data-sidebar-search="projects websites applications development"
                    >
                        <span class="Sidebar__nav-icon">
                            <i class="ri-folder-6-line"></i>
                        </span>

                        <span class="Sidebar__nav-text">Projects</span>

                        <span class="Sidebar__nav-count">12</span>

                        <i class="ri-arrow-down-s-line Sidebar__chevron"></i>
                    </button>

                    <div class="Sidebar__submenu-content">
                        <a
                            href="#"
                            class="Sidebar__submenu-link"
                            data-sidebar-search="website redesign northline"
                        >
                            <span class="Sidebar__project-color Sidebar__project-color--blue"></span>

                            <span>Website Redesign</span>

                            <small>68%</small>
                        </a>

                        <a
                            href="#"
                            class="Sidebar__submenu-link"
                            data-sidebar-search="mobile application app"
                        >
                            <span class="Sidebar__project-color Sidebar__project-color--purple"></span>

                            <span>Mobile Application</span>

                            <small>42%</small>
                        </a>

                        <a
                            href="#"
                            class="Sidebar__submenu-link"
                            data-sidebar-search="design system components ui"
                        >
                            <span class="Sidebar__project-color Sidebar__project-color--cyan"></span>

                            <span>Design System</span>

                            <small>81%</small>
                        </a>
                    </div>
                </div>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="tasks work todo planning"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-checkbox-circle-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Tasks</span>

                    <span class="Sidebar__nav-count">24</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="calendar schedule meetings events"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-calendar-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Calendar</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="messages chat inbox conversations"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-message-3-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Messages</span>

                    <span class="Sidebar__message-count">8</span>
                </a>
            </div>

            <div class="Sidebar__section">
                <span class="Sidebar__section-title">MANAGEMENT</span>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="team people members employees"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-team-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Team</span>

                    <div class="Sidebar__avatars">
                        <span>J</span>
                        <span>S</span>
                        <span>+4</span>
                    </div>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="clients customers contacts crm"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-user-heart-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Clients</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="invoice billing payments finance"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-file-list-3-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Invoices</span>

                    <span class="Sidebar__alert-dot"></span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="reports export business documents"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-file-chart-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Reports</span>
                </a>
            </div>

            <div class="Sidebar__section">
                <span class="Sidebar__section-title">SYSTEM</span>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="integrations applications connections api"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-links-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Integrations</span>

                    <span class="Sidebar__nav-meta">14</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="settings preferences account configuration"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-settings-3-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Settings</span>
                </a>

                <a
                    href="#"
                    class="Sidebar__nav-link"
                    data-sidebar-search="help support documentation questions"
                >
                    <span class="Sidebar__nav-icon">
                        <i class="ri-question-line"></i>
                    </span>

                    <span class="Sidebar__nav-text">Help Center</span>
                </a>
            </div>

            <div class="Sidebar__no-results">
                <strong>No results found</strong>
                <span>Try another search term.</span>
            </div>
        </nav>
    </div>

    <div class="Sidebar__storage">
        <div class="Sidebar__storage-head">
            <div>
                <strong>Storage</strong>
                <span>68 GB of 100 GB</span>
            </div>

            <strong>68%</strong>
        </div>

        <div class="Sidebar__storage-track">
            <span></span>
        </div>

        <button class="Sidebar__storage-button" type="button">
            Upgrade storage
        </button>
    </div>

    <div class="Sidebar__footer">
        <div class="Sidebar__profile">
            <div class="Sidebar__avatar">
                <span>AB</span>
                <small></small>
            </div>

            <div class="Sidebar__profile-info">
                <strong>André Babirian</strong>
                <span>Frontend Developer</span>
            </div>
        </div>

        <button
            class="Sidebar__profile-button"
            type="button"
            aria-label="Profile options"
        >
            <i class="ri-more-2-fill"></i>
        </button>
    </div>
</aside>`,
    css: `.Sidebar {
    width: 340px;
    height: 720px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #e7eaf0;
    border-radius: 24px;
    background: #ffffff;
    color: #171a21;
    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.12);
    transition: width 0.3s ease;
}

.Sidebar * {
    box-sizing: border-box;
}

.Sidebar__header {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 17px;
    border-bottom: 1px solid #f0f2f5;
}

.Sidebar__brand {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 11px;
}

.Sidebar__logo {
    flex: 0 0 auto;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background:
        linear-gradient(
            135deg,
            #111827 0%,
            #1d4ed8 52%,
            #7c3aed 100%
        );
    color: #ffffff;
    box-shadow:
        0 8px 18px rgba(37, 99, 235, 0.18);
}

.Sidebar__logo span {
    font-size: 16px;
    font-weight: 800;
}

.Sidebar__brand-text {
    min-width: 0;
}

.Sidebar__brand-text strong,
.Sidebar__brand-text span {
    display: block;
}

.Sidebar__brand-text strong {
    color: #111827;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.1;
}

.Sidebar__brand-text span {
    margin-top: 4px;
    color: #9aa2af;
    font-size: 9px;
}

.Sidebar__collapse,
.Sidebar__workspace-button,
.Sidebar__profile-button {
    flex: 0 0 auto;
    border: none;
    background: transparent;
    cursor: pointer;
}

.Sidebar__collapse {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #64748b;
    font-size: 17px;
}

.Sidebar__collapse:hover {
    background: #f6f8fb;
    color: #111827;
}

.Sidebar__search-wrap {
    position: relative;
    margin: 14px 16px 10px;
}

.Sidebar__search-wrap > i {
    position: absolute;
    left: 12px;
    top: 50%;
    z-index: 2;
    color: #9aa2af;
    font-size: 15px;
    transform: translateY(-50%);
    pointer-events: none;
}

.Sidebar__search {
    width: 100%;
    height: 40px;
    padding: 0 48px 0 36px;
    border: 1px solid #e6e9ef;
    border-radius: 11px;
    outline: none;
    background: #f8fafc;
    color: #111827;
    font: inherit;
    font-size: 10px;
}

.Sidebar__search::placeholder {
    color: #9ca3af;
}

.Sidebar__search:focus {
    border-color: #bfdbfe;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.08);
}

.Sidebar__shortcut {
    position: absolute;
    right: 9px;
    top: 50%;
    padding: 3px 5px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: #ffffff;
    color: #94a3b8;
    font-size: 7px;
    font-weight: 700;
    transform: translateY(-50%);
    pointer-events: none;
}

.Sidebar__workspace {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 3px 16px 12px;
    padding: 11px;
    border: 1px solid #e9ecf1;
    border-radius: 13px;
    background:
        linear-gradient(
            135deg,
            #fbfdff,
            #f8fafc
        );
}

.Sidebar__workspace-icon {
    flex: 0 0 auto;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
}

.Sidebar__workspace-icon span {
    font-size: 9px;
    font-weight: 800;
}

.Sidebar__workspace-info {
    min-width: 0;
    flex: 1;
}

.Sidebar__workspace-info strong,
.Sidebar__workspace-info span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.Sidebar__workspace-info strong {
    font-size: 10px;
    font-weight: 700;
}

.Sidebar__workspace-info span {
    margin-top: 3px;
    color: #9ca3af;
    font-size: 8px;
}

.Sidebar__workspace-button {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #94a3b8;
}

.Sidebar__workspace-button:hover {
    background: #eef2f7;
    color: #111827;
}

.Sidebar__body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 10px 8px;
    scrollbar-width: thin;
    scrollbar-color: #dbe1e8 transparent;
}

.Sidebar__body::-webkit-scrollbar {
    width: 5px;
}

.Sidebar__body::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #dbe1e8;
}

.Sidebar__body::-webkit-scrollbar-track {
    background: transparent;
}

.Sidebar__nav {
    display: grid;
    gap: 8px;
}

.Sidebar__section {
    display: grid;
    gap: 3px;
}

.Sidebar__section-title {
    display: block;
    padding: 10px 10px 5px;
    color: #a4acb9;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 0.13em;
}

.Sidebar__nav-link {
    position: relative;
    width: 100%;
    min-height: 39px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: #5e6878;
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
}

.Sidebar__nav-link:hover {
    background: #f6f8fb;
    color: #111827;
}

.Sidebar__nav-link.active {
    background:
        linear-gradient(
            90deg,
            #eff6ff,
            #f5f7ff
        );
    color: #1d4ed8;
}

.Sidebar__nav-icon {
    flex: 0 0 auto;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    color: #8590a0;
}

.Sidebar__nav-icon i {
    font-size: 16px;
}

.Sidebar__nav-link.active .Sidebar__nav-icon {
    color: #2563eb;
}

.Sidebar__nav-text {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    font-weight: 600;
}

.Sidebar__active-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);
}

.Sidebar__nav-meta {
    padding: 3px 6px;
    border-radius: 999px;
    background: #eef2f7;
    color: #7a8493;
    font-size: 7px;
    font-weight: 700;
}

.Sidebar__nav-count {
    min-width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    padding: 0 5px;
    border-radius: 7px;
    background: #eef2f7;
    color: #778292;
    font-size: 7px;
    font-weight: 800;
}

.Sidebar__message-count {
    min-width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    padding: 0 6px;
    border-radius: 999px;
    background: #2563eb;
    color: #ffffff;
    font-size: 7px;
    font-weight: 800;
}

.Sidebar__alert-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.09);
}

.Sidebar__submenu {
    display: grid;
}

.Sidebar__submenu-toggle {
    padding-right: 8px;
}

.Sidebar__chevron {
    margin-left: 2px;
    color: #9aa3b0;
    font-size: 14px;
    transition: transform 0.2s ease;
}

.Sidebar__submenu.open .Sidebar__chevron {
    transform: rotate(180deg);
}

.Sidebar__submenu-content {
    display: none;
    gap: 2px;
    padding: 3px 0 4px 42px;
}

.Sidebar__submenu.open .Sidebar__submenu-content {
    display: grid;
}

.Sidebar__submenu-link {
    min-height: 33px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 9px;
    border-radius: 8px;
    color: #6b7280;
    text-decoration: none;
}

.Sidebar__submenu-link:hover {
    background: #f8fafc;
    color: #111827;
}

.Sidebar__submenu-link > span:nth-child(2) {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 8px;
    font-weight: 600;
}

.Sidebar__submenu-link small {
    color: #a1a8b4;
    font-size: 7px;
}

.Sidebar__project-color {
    flex: 0 0 auto;
    width: 7px;
    height: 7px;
    border-radius: 50%;
}

.Sidebar__project-color--blue {
    background: #3b82f6;
}

.Sidebar__project-color--purple {
    background: #8b5cf6;
}

.Sidebar__project-color--cyan {
    background: #06b6d4;
}

.Sidebar__avatars {
    display: flex;
    align-items: center;
    padding-left: 5px;
}

.Sidebar__avatars span {
    width: 21px;
    height: 21px;
    display: grid;
    place-items: center;
    margin-left: -5px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #e2e8f0;
    color: #475569;
    font-size: 6px;
    font-weight: 800;
}

.Sidebar__avatars span:nth-child(2) {
    background: #dbeafe;
    color: #1d4ed8;
}

.Sidebar__avatars span:nth-child(3) {
    background: #ede9fe;
    color: #6d28d9;
}

.Sidebar__no-results {
    display: none;
    padding: 28px 14px;
    text-align: center;
}

.Sidebar__no-results.visible {
    display: block;
}

.Sidebar__no-results strong,
.Sidebar__no-results span {
    display: block;
}

.Sidebar__no-results strong {
    font-size: 10px;
}

.Sidebar__no-results span {
    margin-top: 4px;
    color: #9ca3af;
    font-size: 8px;
}

.Sidebar__storage {
    margin: 10px 15px;
    padding: 13px;
    border: 1px solid #e8ebf0;
    border-radius: 13px;
    background:
        linear-gradient(
            135deg,
            #f8fafc,
            #ffffff
        );
}

.Sidebar__storage-head {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.Sidebar__storage-head div strong,
.Sidebar__storage-head div span {
    display: block;
}

.Sidebar__storage-head div strong {
    font-size: 9px;
}

.Sidebar__storage-head div span {
    margin-top: 3px;
    color: #9ca3af;
    font-size: 7px;
}

.Sidebar__storage-head > strong {
    color: #2563eb;
    font-size: 9px;
}

.Sidebar__storage-track {
    height: 5px;
    margin: 11px 0;
    overflow: hidden;
    border-radius: 999px;
    background: #e7ebf0;
}

.Sidebar__storage-track span {
    display: block;
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background:
        linear-gradient(
            90deg,
            #2563eb,
            #4f46e5,
            #7c3aed
        );
}

.Sidebar__storage-button {
    width: 100%;
    padding: 8px;
    border: 1px solid #dfe4eb;
    border-radius: 8px;
    background: #ffffff;
    color: #475569;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}

.Sidebar__storage-button:hover {
    border-color: #cbd5e1;
    color: #111827;
}

.Sidebar__footer {
    min-height: 69px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid #f0f2f5;
}

.Sidebar__profile {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.Sidebar__avatar {
    position: relative;
    flex: 0 0 auto;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background:
        linear-gradient(
            135deg,
            #dbeafe,
            #e0e7ff
        );
    color: #1e40af;
}

.Sidebar__avatar span {
    font-size: 9px;
    font-weight: 900;
}

.Sidebar__avatar small {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 9px;
    height: 9px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #22c55e;
}

.Sidebar__profile-info {
    min-width: 0;
}

.Sidebar__profile-info strong,
.Sidebar__profile-info span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.Sidebar__profile-info strong {
    font-size: 9px;
}

.Sidebar__profile-info span {
    margin-top: 3px;
    color: #9ca3af;
    font-size: 7px;
}

.Sidebar__profile-button {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #94a3b8;
}

.Sidebar__profile-button:hover {
    background: #f5f7fa;
    color: #111827;
}

.Sidebar.is-collapsed {
    width: 86px;
}

.Sidebar.is-collapsed .Sidebar__header {
    justify-content: center;
    padding-inline: 12px;
}

.Sidebar.is-collapsed .Sidebar__brand-text,
.Sidebar.is-collapsed .Sidebar__collapse,
.Sidebar.is-collapsed .Sidebar__search,
.Sidebar.is-collapsed .Sidebar__shortcut,
.Sidebar.is-collapsed .Sidebar__workspace-info,
.Sidebar.is-collapsed .Sidebar__workspace-button,
.Sidebar.is-collapsed .Sidebar__section-title,
.Sidebar.is-collapsed .Sidebar__nav-text,
.Sidebar.is-collapsed .Sidebar__nav-count,
.Sidebar.is-collapsed .Sidebar__nav-meta,
.Sidebar.is-collapsed .Sidebar__message-count,
.Sidebar.is-collapsed .Sidebar__active-dot,
.Sidebar.is-collapsed .Sidebar__alert-dot,
.Sidebar.is-collapsed .Sidebar__chevron,
.Sidebar.is-collapsed .Sidebar__avatars,
.Sidebar.is-collapsed .Sidebar__submenu-content,
.Sidebar.is-collapsed .Sidebar__storage,
.Sidebar.is-collapsed .Sidebar__profile-info,
.Sidebar.is-collapsed .Sidebar__profile-button {
    display: none;
}

.Sidebar.is-collapsed .Sidebar__search-wrap {
    width: 42px;
    height: 40px;
    margin-inline: auto;
    border: 1px solid #e6e9ef;
    border-radius: 11px;
    background: #f8fafc;
}

.Sidebar.is-collapsed .Sidebar__search-wrap > i {
    left: 50%;
    transform: translate(-50%, -50%);
}

.Sidebar.is-collapsed .Sidebar__workspace {
    width: 44px;
    margin-inline: auto;
    padding: 5px;
    justify-content: center;
}

.Sidebar.is-collapsed .Sidebar__nav-link {
    width: 46px;
    margin-inline: auto;
    justify-content: center;
    padding-inline: 0;
}

.Sidebar.is-collapsed .Sidebar__nav-icon {
    width: 30px;
    height: 30px;
}

.Sidebar.is-collapsed .Sidebar__footer {
    justify-content: center;
    padding-inline: 10px;
}

.Sidebar.is-collapsed .Sidebar__profile {
    justify-content: center;
}

.Sidebar__nav-link.is-hidden,
.Sidebar__submenu-link.is-hidden,
.Sidebar__section.is-hidden,
.Sidebar__submenu.is-hidden {
    display: none;
}

@media (max-width: 600px) {
    .Sidebar {
        width: min(340px, calc(100vw - 24px));
        height: 680px;
    }

    .Sidebar.is-collapsed {
        width: 86px;
    }
}`,
    javascript: `const sidebar = document.querySelector('[data-sidebar-id="3476"]');

if (sidebar) {
    const collapseButton = sidebar.querySelector(".Sidebar__collapse");
    const searchInput = sidebar.querySelector(".Sidebar__search");
    const submenu = sidebar.querySelector(".Sidebar__submenu");
    const submenuToggle = sidebar.querySelector(".Sidebar__submenu-toggle");
    const navLinks = sidebar.querySelectorAll(".Sidebar__nav-link");
    const searchableItems = sidebar.querySelectorAll("[data-sidebar-search]");
    const sections = sidebar.querySelectorAll(".Sidebar__section");
    const noResults = sidebar.querySelector(".Sidebar__no-results");

    collapseButton?.addEventListener("click", () => {
        const collapsed = sidebar.classList.toggle("is-collapsed");

        collapseButton.setAttribute(
            "aria-expanded",
            String(!collapsed)
        );
    });

    submenuToggle?.addEventListener("click", () => {
        if (!submenu) {
            return;
        }

        const open = submenu.classList.toggle("open");

        submenuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );
    });

    navLinks.forEach((link) => {
        if (link.classList.contains("Sidebar__submenu-toggle")) {
            return;
        }

        link.addEventListener("click", () => {
            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    searchInput?.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleItems = 0;

        searchableItems.forEach((item) => {
            const searchValue = (
                item.getAttribute("data-sidebar-search") || ""
            ).toLowerCase();

            const visible =
                query === "" ||
                searchValue.includes(query) ||
                item.textContent.toLowerCase().includes(query);

            item.classList.toggle("is-hidden", !visible);

            if (visible) {
                visibleItems += 1;
            }
        });

        sections.forEach((section) => {
            const visibleChildren = section.querySelectorAll(
                "[data-sidebar-search]:not(.is-hidden)"
            );

            section.classList.toggle(
                "is-hidden",
                query !== "" && visibleChildren.length === 0
            );
        });

        if (noResults) {
            noResults.classList.toggle(
                "visible",
                query !== "" && visibleItems === 0
            );
        }
    });
}`,
  },
  {
    id: 3477,
    name: "Professional Slide-Out Workspace Sidebar",
    scriptId: 3477,
    preview: (
      <div className="sidebar-3477-demo" data-sidebar-id="3477">
        <div className="sidebar-3477-page">
          <div className="sidebar-3477-page-header">
            <button
              className="sidebar-3477-open"
              type="button"
              aria-label="Open sidebar"
              aria-expanded="false"
            >
              <i className="ri-menu-2-line"></i>
              <span>Menu</span>
            </button>

            <div className="sidebar-3477-page-brand">
              <strong>Northstar</strong>
              <span>Workspace</span>
            </div>

            <div className="sidebar-3477-page-user">AB</div>
          </div>

          <div className="sidebar-3477-page-content">
            <span>PROJECT OVERVIEW</span>
            <strong>Build better products.</strong>
            <p>
              Manage projects, clients, team members and company activity from
              one workspace.
            </p>

            <div className="sidebar-3477-page-stats">
              <div>
                <strong>24</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>18</strong>
                <span>Clients</span>
              </div>

              <div>
                <strong>42</strong>
                <span>Tasks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-3477-overlay"></div>

        <aside className="sidebar-3477-panel" aria-hidden="true">
          <div className="sidebar-3477-header">
            <div className="sidebar-3477-brand">
              <div className="sidebar-3477-logo">N</div>

              <div>
                <strong>Northstar</strong>
                <span>Professional Workspace</span>
              </div>
            </div>

            <button
              className="sidebar-3477-close"
              type="button"
              aria-label="Close sidebar"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="sidebar-3477-workspace">
            <div className="sidebar-3477-workspace-logo">NW</div>

            <div className="sidebar-3477-workspace-info">
              <strong>Northstar Studio</strong>
              <span>Business workspace</span>
            </div>

            <button
              className="sidebar-3477-workspace-more"
              type="button"
              aria-label="Workspace options"
            >
              <i className="ri-more-2-fill"></i>
            </button>
          </div>

          <div className="sidebar-3477-search">
            <i className="ri-search-line"></i>

            <input
              type="text"
              placeholder="Search workspace..."
              aria-label="Search workspace"
            />

            <span>⌘K</span>
          </div>

          <div className="sidebar-3477-content">
            <nav className="sidebar-3477-nav">
              <div className="sidebar-3477-section">
                <span className="sidebar-3477-section-title">OVERVIEW</span>

                <a className="sidebar-3477-link active" href="#">
                  <i className="ri-home-5-line"></i>
                  <span>Dashboard</span>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-bar-chart-box-line"></i>
                  <span>Analytics</span>

                  <small>Live</small>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-pulse-line"></i>
                  <span>Activity</span>
                </a>
              </div>

              <div className="sidebar-3477-section">
                <span className="sidebar-3477-section-title">WORKSPACE</span>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-folder-6-line"></i>
                  <span>Projects</span>

                  <strong>12</strong>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-checkbox-circle-line"></i>
                  <span>Tasks</span>

                  <strong>24</strong>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-calendar-line"></i>
                  <span>Calendar</span>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-message-3-line"></i>
                  <span>Messages</span>

                  <b>8</b>
                </a>
              </div>

              <div className="sidebar-3477-projects">
                <div className="sidebar-3477-projects-header">
                  <span>RECENT PROJECTS</span>

                  <button type="button">View all</button>
                </div>

                <a href="#" className="sidebar-3477-project">
                  <span className="sidebar-3477-project-dot sidebar-3477-project-blue"></span>

                  <div>
                    <strong>Website Redesign</strong>
                    <span>18 tasks remaining</span>
                  </div>

                  <small>68%</small>
                </a>

                <a href="#" className="sidebar-3477-project">
                  <span className="sidebar-3477-project-dot sidebar-3477-project-purple"></span>

                  <div>
                    <strong>Mobile Platform</strong>
                    <span>9 tasks remaining</span>
                  </div>

                  <small>81%</small>
                </a>

                <a href="#" className="sidebar-3477-project">
                  <span className="sidebar-3477-project-dot sidebar-3477-project-cyan"></span>

                  <div>
                    <strong>Design System</strong>
                    <span>24 components</span>
                  </div>

                  <small>54%</small>
                </a>
              </div>

              <div className="sidebar-3477-section">
                <span className="sidebar-3477-section-title">MANAGEMENT</span>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-team-line"></i>
                  <span>Team</span>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-user-heart-line"></i>
                  <span>Clients</span>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-file-list-3-line"></i>
                  <span>Invoices</span>

                  <span className="sidebar-3477-alert"></span>
                </a>
              </div>

              <div className="sidebar-3477-section">
                <span className="sidebar-3477-section-title">SYSTEM</span>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-settings-3-line"></i>
                  <span>Settings</span>
                </a>

                <a className="sidebar-3477-link" href="#">
                  <i className="ri-question-line"></i>
                  <span>Help Center</span>
                </a>
              </div>
            </nav>
          </div>

          <div className="sidebar-3477-upgrade">
            <div className="sidebar-3477-upgrade-top">
              <div>
                <strong>Professional Plan</strong>
                <span>68 GB of 100 GB used</span>
              </div>

              <strong>68%</strong>
            </div>

            <div className="sidebar-3477-progress">
              <span></span>
            </div>

            <button type="button">Upgrade workspace</button>
          </div>

          <div className="sidebar-3477-footer">
            <div className="sidebar-3477-profile">
              <div className="sidebar-3477-avatar">
                AB
                <span></span>
              </div>

              <div>
                <strong>André Babirian</strong>
                <span>Frontend Developer</span>
              </div>
            </div>

            <button
              className="sidebar-3477-profile-more"
              type="button"
              aria-label="Profile options"
            >
              <i className="ri-more-2-fill"></i>
            </button>
          </div>
        </aside>
      </div>
    ),
    html: `<div class="Sidebar3477Demo" data-sidebar-id="3477">
    <main class="Sidebar3477Demo__page">
        <header class="Sidebar3477Demo__header">
            <button
                class="Sidebar3477Open"
                type="button"
                aria-label="Open sidebar"
                aria-expanded="false"
            >
                <i class="ri-menu-2-line"></i>
                <span>Menu</span>
            </button>

            <div class="Sidebar3477Demo__brand">
                <strong>Northstar</strong>
                <span>Workspace</span>
            </div>

            <div class="Sidebar3477Demo__user">AB</div>
        </header>

        <section class="Sidebar3477Demo__content">
            <span>PROJECT OVERVIEW</span>
            <h1>Build better products.</h1>

            <p>
                Manage projects, clients, team members and company activity from one workspace.
            </p>
        </section>
    </main>

    <div class="Sidebar3477Overlay"></div>

    <aside class="Sidebar3477" aria-hidden="true">
        <div class="Sidebar3477__header">
            <div class="Sidebar3477__brand">
                <div class="Sidebar3477__logo">N</div>

                <div>
                    <strong>Northstar</strong>
                    <span>Professional Workspace</span>
                </div>
            </div>

            <button
                class="Sidebar3477__close"
                type="button"
                aria-label="Close sidebar"
            >
                <i class="ri-close-line"></i>
            </button>
        </div>

        <div class="Sidebar3477__workspace">
            <div class="Sidebar3477__workspace-logo">NW</div>

            <div class="Sidebar3477__workspace-info">
                <strong>Northstar Studio</strong>
                <span>Business workspace</span>
            </div>

            <button
                class="Sidebar3477__workspace-more"
                type="button"
                aria-label="Workspace options"
            >
                <i class="ri-more-2-fill"></i>
            </button>
        </div>

        <div class="Sidebar3477__search">
            <i class="ri-search-line"></i>

            <input
                type="text"
                placeholder="Search workspace..."
                aria-label="Search workspace"
            >

            <span>⌘K</span>
        </div>

        <div class="Sidebar3477__content">
            <nav class="Sidebar3477__nav">
                <div class="Sidebar3477__section">
                    <span class="Sidebar3477__section-title">
                        OVERVIEW
                    </span>

                    <a class="Sidebar3477__link active" href="#">
                        <i class="ri-home-5-line"></i>
                        <span>Dashboard</span>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-bar-chart-box-line"></i>
                        <span>Analytics</span>
                        <small>Live</small>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-pulse-line"></i>
                        <span>Activity</span>
                    </a>
                </div>

                <div class="Sidebar3477__section">
                    <span class="Sidebar3477__section-title">
                        WORKSPACE
                    </span>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-folder-6-line"></i>
                        <span>Projects</span>
                        <strong>12</strong>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-checkbox-circle-line"></i>
                        <span>Tasks</span>
                        <strong>24</strong>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-calendar-line"></i>
                        <span>Calendar</span>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-message-3-line"></i>
                        <span>Messages</span>
                        <b>8</b>
                    </a>
                </div>

                <div class="Sidebar3477__projects">
                    <div class="Sidebar3477__projects-header">
                        <span>RECENT PROJECTS</span>
                        <button type="button">View all</button>
                    </div>

                    <a href="#" class="Sidebar3477__project">
                        <span class="Sidebar3477__project-dot Sidebar3477__project-dot--blue"></span>

                        <div>
                            <strong>Website Redesign</strong>
                            <span>18 tasks remaining</span>
                        </div>

                        <small>68%</small>
                    </a>

                    <a href="#" class="Sidebar3477__project">
                        <span class="Sidebar3477__project-dot Sidebar3477__project-dot--purple"></span>

                        <div>
                            <strong>Mobile Platform</strong>
                            <span>9 tasks remaining</span>
                        </div>

                        <small>81%</small>
                    </a>

                    <a href="#" class="Sidebar3477__project">
                        <span class="Sidebar3477__project-dot Sidebar3477__project-dot--cyan"></span>

                        <div>
                            <strong>Design System</strong>
                            <span>24 components</span>
                        </div>

                        <small>54%</small>
                    </a>
                </div>

                <div class="Sidebar3477__section">
                    <span class="Sidebar3477__section-title">
                        MANAGEMENT
                    </span>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-team-line"></i>
                        <span>Team</span>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-user-heart-line"></i>
                        <span>Clients</span>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-file-list-3-line"></i>
                        <span>Invoices</span>
                        <span class="Sidebar3477__alert"></span>
                    </a>
                </div>

                <div class="Sidebar3477__section">
                    <span class="Sidebar3477__section-title">
                        SYSTEM
                    </span>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-settings-3-line"></i>
                        <span>Settings</span>
                    </a>

                    <a class="Sidebar3477__link" href="#">
                        <i class="ri-question-line"></i>
                        <span>Help Center</span>
                    </a>
                </div>
            </nav>
        </div>

        <div class="Sidebar3477__upgrade">
            <div class="Sidebar3477__upgrade-top">
                <div>
                    <strong>Professional Plan</strong>
                    <span>68 GB of 100 GB used</span>
                </div>

                <strong>68%</strong>
            </div>

            <div class="Sidebar3477__progress">
                <span></span>
            </div>

            <button type="button">
                Upgrade workspace
            </button>
        </div>

        <div class="Sidebar3477__footer">
            <div class="Sidebar3477__profile">
                <div class="Sidebar3477__avatar">
                    AB
                    <span></span>
                </div>

                <div>
                    <strong>André Babirian</strong>
                    <span>Frontend Developer</span>
                </div>
            </div>

            <button
                class="Sidebar3477__profile-more"
                type="button"
                aria-label="Profile options"
            >
                <i class="ri-more-2-fill"></i>
            </button>
        </div>
    </aside>
</div>`,
    css: `.Sidebar3477Demo {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: #f7f8fb;
    color: #111827;
}

.Sidebar3477Demo__page {
    min-height: 100vh;
}

.Sidebar3477Demo__header {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #e5e7eb;
    background: #ffffff;
}

.Sidebar3477Open {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: #ffffff;
    color: #111827;
    font: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}

.Sidebar3477Open i {
    font-size: 18px;
}

.Sidebar3477Demo__brand {
    text-align: center;
}

.Sidebar3477Demo__brand strong,
.Sidebar3477Demo__brand span {
    display: block;
}

.Sidebar3477Demo__brand strong {
    font-size: 14px;
}

.Sidebar3477Demo__brand span {
    margin-top: 2px;
    color: #94a3b8;
    font-size: 10px;
}

.Sidebar3477Demo__user {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #e0e7ff;
    color: #3730a3;
    font-size: 11px;
    font-weight: 800;
}

.Sidebar3477Demo__content {
    max-width: 760px;
    padding: 90px 40px;
}

.Sidebar3477Demo__content > span {
    color: #2563eb;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.Sidebar3477Demo__content h1 {
    margin: 12px 0 0;
    font-size: clamp(36px, 7vw, 72px);
    line-height: 1;
    letter-spacing: -0.05em;
}

.Sidebar3477Demo__content p {
    max-width: 560px;
    margin-top: 20px;
    color: #64748b;
    font-size: 16px;
    line-height: 1.7;
}

.Sidebar3477Overlay {
    position: fixed;
    inset: 0;
    z-index: 90;
    background: rgba(15, 23, 42, 0.45);
    backdrop-filter: blur(3px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
}

.Sidebar3477Overlay.is-open {
    opacity: 1;
    visibility: visible;
}

.Sidebar3477 {
    position: fixed;
    z-index: 100;
    left: 18px;
    top: 18px;
    bottom: 18px;
    width: min(350px, calc(100vw - 36px));
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    background: #0d111c;
    color: #ffffff;
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
    transform: translateX(calc(-100% - 30px));
    transition: transform 0.32s cubic-bezier(.22, .9, .32, 1);
}

.Sidebar3477.is-open {
    transform: translateX(0);
}

.Sidebar3477__header {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.Sidebar3477__brand {
    display: flex;
    align-items: center;
    gap: 11px;
}

.Sidebar3477__logo {
    width: 41px;
    height: 41px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #ffffff;
    font-size: 15px;
    font-weight: 900;
    box-shadow: 0 8px 24px rgba(79, 70, 229, 0.25);
}

.Sidebar3477__brand strong,
.Sidebar3477__brand span {
    display: block;
}

.Sidebar3477__brand strong {
    font-size: 13px;
}

.Sidebar3477__brand span {
    margin-top: 3px;
    color: #727d91;
    font-size: 8px;
}

.Sidebar3477__close,
.Sidebar3477__workspace-more,
.Sidebar3477__profile-more {
    border: none;
    background: transparent;
    cursor: pointer;
}

.Sidebar3477__close {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    color: #9aa5b8;
    font-size: 19px;
}

.Sidebar3477__close:hover {
    background: rgba(255, 255, 255, 0.09);
    color: #ffffff;
}

.Sidebar3477__workspace {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 14px 15px 9px;
    padding: 11px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.035);
}

.Sidebar3477__workspace-logo {
    flex: 0 0 auto;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #ffffff;
    color: #111827;
    font-size: 9px;
    font-weight: 900;
}

.Sidebar3477__workspace-info {
    min-width: 0;
    flex: 1;
}

.Sidebar3477__workspace-info strong,
.Sidebar3477__workspace-info span {
    display: block;
}

.Sidebar3477__workspace-info strong {
    font-size: 10px;
}

.Sidebar3477__workspace-info span {
    margin-top: 3px;
    color: #667085;
    font-size: 8px;
}

.Sidebar3477__workspace-more {
    color: #6b7280;
    font-size: 16px;
}

.Sidebar3477__search {
    position: relative;
    margin: 0 15px 11px;
}

.Sidebar3477__search > i {
    position: absolute;
    left: 12px;
    top: 50%;
    color: #687386;
    font-size: 15px;
    transform: translateY(-50%);
}

.Sidebar3477__search input {
    width: 100%;
    height: 39px;
    padding: 0 43px 0 36px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    outline: none;
    background: rgba(255, 255, 255, 0.035);
    color: #ffffff;
    font: inherit;
    font-size: 9px;
}

.Sidebar3477__search input::placeholder {
    color: #5f6a7d;
}

.Sidebar3477__search > span {
    position: absolute;
    right: 9px;
    top: 50%;
    padding: 3px 5px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 5px;
    color: #5e697b;
    font-size: 6px;
    transform: translateY(-50%);
}

.Sidebar3477__content {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 10px 12px;
    scrollbar-width: thin;
    scrollbar-color: #293044 transparent;
}

.Sidebar3477__nav {
    display: grid;
    gap: 8px;
}

.Sidebar3477__section {
    display: grid;
    gap: 3px;
}

.Sidebar3477__section-title {
    padding: 10px 10px 4px;
    color: #525d70;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 0.14em;
}

.Sidebar3477__link {
    min-height: 39px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 10px;
    border-radius: 10px;
    color: #8b95a7;
    text-decoration: none;
}

.Sidebar3477__link:hover {
    background: rgba(255, 255, 255, 0.045);
    color: #ffffff;
}

.Sidebar3477__link.active {
    background: linear-gradient(
        90deg,
        rgba(37, 99, 235, 0.18),
        rgba(124, 58, 237, 0.09)
    );
    color: #ffffff;
}

.Sidebar3477__link > i {
    flex: 0 0 auto;
    width: 23px;
    text-align: center;
    font-size: 16px;
}

.Sidebar3477__link > span:nth-child(2) {
    flex: 1;
    font-size: 9px;
    font-weight: 600;
}

.Sidebar3477__link small {
    padding: 3px 6px;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.12);
    color: #60a5fa;
    font-size: 6px;
    font-weight: 800;
}

.Sidebar3477__link > strong {
    min-width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.06);
    color: #8490a3;
    font-size: 6px;
}

.Sidebar3477__link > b {
    min-width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    padding: 0 5px;
    border-radius: 999px;
    background: #2563eb;
    color: #ffffff;
    font-size: 6px;
}

.Sidebar3477__alert {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.08);
}

.Sidebar3477__projects {
    margin: 4px 4px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.055);
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.025);
}

.Sidebar3477__projects-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
}

.Sidebar3477__projects-header span {
    color: #525d70;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.Sidebar3477__projects-header button {
    padding: 0;
    border: none;
    background: transparent;
    color: #64748b;
    font-size: 7px;
    cursor: pointer;
}

.Sidebar3477__project {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 2px;
    color: #ffffff;
    text-decoration: none;
}

.Sidebar3477__project + .Sidebar3477__project {
    border-top: 1px solid rgba(255, 255, 255, 0.045);
}

.Sidebar3477__project-dot {
    flex: 0 0 auto;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.Sidebar3477__project-dot--blue {
    background: #3b82f6;
}

.Sidebar3477__project-dot--purple {
    background: #8b5cf6;
}

.Sidebar3477__project-dot--cyan {
    background: #06b6d4;
}

.Sidebar3477__project div {
    min-width: 0;
    flex: 1;
}

.Sidebar3477__project strong,
.Sidebar3477__project span {
    display: block;
}

.Sidebar3477__project strong {
    overflow: hidden;
    color: #cfd5df;
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.Sidebar3477__project span {
    margin-top: 3px;
    color: #596476;
    font-size: 6px;
}

.Sidebar3477__project small {
    color: #677286;
    font-size: 7px;
}

.Sidebar3477__upgrade {
    margin: 8px 15px 10px;
    padding: 12px;
    border: 1px solid rgba(99, 102, 241, 0.14);
    border-radius: 13px;
    background: linear-gradient(
        145deg,
        rgba(37, 99, 235, 0.08),
        rgba(124, 58, 237, 0.07)
    );
}

.Sidebar3477__upgrade-top {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.Sidebar3477__upgrade-top div strong,
.Sidebar3477__upgrade-top div span {
    display: block;
}

.Sidebar3477__upgrade-top div strong {
    font-size: 8px;
}

.Sidebar3477__upgrade-top div span {
    margin-top: 3px;
    color: #647084;
    font-size: 6px;
}

.Sidebar3477__upgrade-top > strong {
    color: #818cf8;
    font-size: 8px;
}

.Sidebar3477__progress {
    height: 5px;
    margin: 10px 0;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
}

.Sidebar3477__progress span {
    display: block;
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
}

.Sidebar3477__upgrade > button {
    width: 100%;
    padding: 8px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.045);
    color: #a5afbf;
    font-size: 7px;
    font-weight: 700;
    cursor: pointer;
}

.Sidebar3477__footer {
    min-height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.055);
}

.Sidebar3477__profile {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 9px;
}

.Sidebar3477__avatar {
    position: relative;
    flex: 0 0 auto;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: linear-gradient(135deg, #dbeafe, #ddd6fe);
    color: #3730a3;
    font-size: 8px;
    font-weight: 900;
}

.Sidebar3477__avatar span {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 8px;
    height: 8px;
    border: 2px solid #0d111c;
    border-radius: 50%;
    background: #22c55e;
}

.Sidebar3477__profile > div:last-child {
    min-width: 0;
}

.Sidebar3477__profile strong,
.Sidebar3477__profile > div:last-child span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.Sidebar3477__profile strong {
    font-size: 8px;
}

.Sidebar3477__profile > div:last-child span {
    margin-top: 3px;
    color: #5e697a;
    font-size: 6px;
}

.Sidebar3477__profile-more {
    color: #657084;
    font-size: 16px;
}

body.Sidebar3477Locked {
    overflow: hidden;
}`,
    javascript: `const component = document.querySelector('[data-sidebar-id="3477"]');

if (component) {
    const sidebar = component.querySelector(".Sidebar3477");
    const overlay = component.querySelector(".Sidebar3477Overlay");
    const openButton = component.querySelector(".Sidebar3477Open");
    const closeButton = component.querySelector(".Sidebar3477__close");
    const links = component.querySelectorAll(".Sidebar3477__link");

    function openSidebar() {
        sidebar.classList.add("is-open");
        overlay.classList.add("is-open");

        sidebar.setAttribute("aria-hidden", "false");
        openButton.setAttribute("aria-expanded", "true");

        document.body.classList.add("Sidebar3477Locked");
    }

    function closeSidebar() {
        sidebar.classList.remove("is-open");
        overlay.classList.remove("is-open");

        sidebar.setAttribute("aria-hidden", "true");
        openButton.setAttribute("aria-expanded", "false");

        document.body.classList.remove("Sidebar3477Locked");
    }

    openButton.addEventListener("click", openSidebar);
    closeButton.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    links.forEach((link) => {
        link.addEventListener("click", () => {
            links.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });
}`,
  },
  {
    id: 3478,
    name: "Expandable Professional Sidebar",
    scriptId: 3478,
    preview: (
      <aside className="sidebar-3478" data-sidebar-id="3478">
        <div className="sidebar-3478-header">
          <div className="sidebar-3478-brand">
            <div className="sidebar-3478-logo">N</div>

            <div className="sidebar-3478-brand-text">
              <strong>Nexa</strong>
              <span>Workspace</span>
            </div>
          </div>

          <button
            className="sidebar-3478-toggle"
            type="button"
            aria-label="Expand sidebar"
            aria-expanded="false"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        <div className="sidebar-3478-workspace">
          <div className="sidebar-3478-workspace-icon">
            <span>NW</span>
          </div>

          <div className="sidebar-3478-workspace-info">
            <strong>Nexa Studio</strong>
            <span>Professional</span>
          </div>

          <button
            className="sidebar-3478-workspace-more"
            type="button"
            aria-label="Workspace options"
          >
            <i className="ri-more-2-fill"></i>
          </button>
        </div>

        <div className="sidebar-3478-divider"></div>

        <nav className="sidebar-3478-nav">
          <span className="sidebar-3478-section-title">MAIN</span>

          <a href="#" className="sidebar-3478-link active">
            <span className="sidebar-3478-icon">
              <i className="ri-dashboard-3-line"></i>
            </span>

            <span className="sidebar-3478-text">Dashboard</span>

            <span className="sidebar-3478-active-indicator"></span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-folder-6-line"></i>
            </span>

            <span className="sidebar-3478-text">Projects</span>

            <span className="sidebar-3478-count">12</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-checkbox-circle-line"></i>
            </span>

            <span className="sidebar-3478-text">Tasks</span>

            <span className="sidebar-3478-count">24</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-calendar-line"></i>
            </span>

            <span className="sidebar-3478-text">Calendar</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-message-3-line"></i>
            </span>

            <span className="sidebar-3478-text">Messages</span>

            <span className="sidebar-3478-message-count">8</span>
          </a>

          <span className="sidebar-3478-section-title">BUSINESS</span>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-team-line"></i>
            </span>

            <span className="sidebar-3478-text">Team</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-user-heart-line"></i>
            </span>

            <span className="sidebar-3478-text">Clients</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-file-list-3-line"></i>
            </span>

            <span className="sidebar-3478-text">Invoices</span>

            <span className="sidebar-3478-alert"></span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-bar-chart-box-line"></i>
            </span>

            <span className="sidebar-3478-text">Analytics</span>
          </a>

          <span className="sidebar-3478-section-title">SYSTEM</span>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-links-line"></i>
            </span>

            <span className="sidebar-3478-text">Integrations</span>

            <span className="sidebar-3478-meta">14</span>
          </a>

          <a href="#" className="sidebar-3478-link">
            <span className="sidebar-3478-icon">
              <i className="ri-settings-3-line"></i>
            </span>

            <span className="sidebar-3478-text">Settings</span>
          </a>
        </nav>

        <div className="sidebar-3478-plan">
          <div className="sidebar-3478-plan-icon">
            <i className="ri-database-2-line"></i>
          </div>

          <div className="sidebar-3478-plan-content">
            <div className="sidebar-3478-plan-head">
              <div>
                <strong>Storage</strong>
                <span>68 GB of 100 GB</span>
              </div>

              <strong>68%</strong>
            </div>

            <div className="sidebar-3478-progress">
              <span></span>
            </div>
          </div>
        </div>

        <div className="sidebar-3478-footer">
          <div className="sidebar-3478-avatar">
            AB
            <span></span>
          </div>

          <div className="sidebar-3478-profile">
            <strong>André Babirian</strong>
            <span>Frontend Developer</span>
          </div>

          <button
            className="sidebar-3478-profile-more"
            type="button"
            aria-label="Profile options"
          >
            <i className="ri-more-2-fill"></i>
          </button>
        </div>
      </aside>
    ),
    html: `<aside class="Sidebar3478" data-sidebar-id="3478">
    <div class="Sidebar3478__header">
        <div class="Sidebar3478__brand">
            <div class="Sidebar3478__logo">N</div>

            <div class="Sidebar3478__brand-text">
                <strong>Nexa</strong>
                <span>Workspace</span>
            </div>
        </div>

        <button
            class="Sidebar3478__toggle"
            type="button"
            aria-label="Expand sidebar"
            aria-expanded="false"
        >
            <i class="ri-arrow-right-s-line"></i>
        </button>
    </div>

    <div class="Sidebar3478__workspace">
        <div class="Sidebar3478__workspace-icon">
            <span>NW</span>
        </div>

        <div class="Sidebar3478__workspace-info">
            <strong>Nexa Studio</strong>
            <span>Professional</span>
        </div>

        <button
            class="Sidebar3478__workspace-more"
            type="button"
            aria-label="Workspace options"
        >
            <i class="ri-more-2-fill"></i>
        </button>
    </div>

    <div class="Sidebar3478__divider"></div>

    <nav class="Sidebar3478__nav">
        <span class="Sidebar3478__section-title">MAIN</span>

        <a href="#" class="Sidebar3478__link active">
            <span class="Sidebar3478__icon">
                <i class="ri-dashboard-3-line"></i>
            </span>

            <span class="Sidebar3478__text">Dashboard</span>

            <span class="Sidebar3478__active-indicator"></span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-folder-6-line"></i>
            </span>

            <span class="Sidebar3478__text">Projects</span>

            <span class="Sidebar3478__count">12</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-checkbox-circle-line"></i>
            </span>

            <span class="Sidebar3478__text">Tasks</span>

            <span class="Sidebar3478__count">24</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-calendar-line"></i>
            </span>

            <span class="Sidebar3478__text">Calendar</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-message-3-line"></i>
            </span>

            <span class="Sidebar3478__text">Messages</span>

            <span class="Sidebar3478__message-count">8</span>
        </a>

        <span class="Sidebar3478__section-title">BUSINESS</span>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-team-line"></i>
            </span>

            <span class="Sidebar3478__text">Team</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-user-heart-line"></i>
            </span>

            <span class="Sidebar3478__text">Clients</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-file-list-3-line"></i>
            </span>

            <span class="Sidebar3478__text">Invoices</span>

            <span class="Sidebar3478__alert"></span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-bar-chart-box-line"></i>
            </span>

            <span class="Sidebar3478__text">Analytics</span>
        </a>

        <span class="Sidebar3478__section-title">SYSTEM</span>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-links-line"></i>
            </span>

            <span class="Sidebar3478__text">Integrations</span>

            <span class="Sidebar3478__meta">14</span>
        </a>

        <a href="#" class="Sidebar3478__link">
            <span class="Sidebar3478__icon">
                <i class="ri-settings-3-line"></i>
            </span>

            <span class="Sidebar3478__text">Settings</span>
        </a>
    </nav>

    <div class="Sidebar3478__plan">
        <div class="Sidebar3478__plan-icon">
            <i class="ri-database-2-line"></i>
        </div>

        <div class="Sidebar3478__plan-content">
            <div class="Sidebar3478__plan-head">
                <div>
                    <strong>Storage</strong>
                    <span>68 GB of 100 GB</span>
                </div>

                <strong>68%</strong>
            </div>

            <div class="Sidebar3478__progress">
                <span></span>
            </div>
        </div>
    </div>

    <div class="Sidebar3478__footer">
        <div class="Sidebar3478__avatar">
            AB
            <span></span>
        </div>

        <div class="Sidebar3478__profile">
            <strong>André Babirian</strong>
            <span>Frontend Developer</span>
        </div>

        <button
            class="Sidebar3478__profile-more"
            type="button"
            aria-label="Profile options"
        >
            <i class="ri-more-2-fill"></i>
        </button>
    </div>
</aside>`,
    css: `.Sidebar3478 {
    width: 82px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    border-right: 1px solid #e5e7eb;
    background: #ffffff;
    color: #111827;
    box-shadow: 8px 0 35px rgba(15, 23, 42, 0.06);
    transition: width 0.3s cubic-bezier(.22, .9, .32, 1);
}

.Sidebar3478 * {
    box-sizing: border-box;
}

.Sidebar3478.is-expanded {
    width: 300px;
}

.Sidebar3478__header {
    min-height: 74px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid #f1f5f9;
}

.Sidebar3478__brand {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 11px;
    flex: 1;
}

.Sidebar3478__logo {
    flex: 0 0 auto;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: linear-gradient(135deg, #2563eb, #4f46e5, #7c3aed);
    color: #ffffff;
    font-size: 15px;
    font-weight: 900;
    box-shadow: 0 9px 20px rgba(79, 70, 229, 0.2);
}

.Sidebar3478__brand-text {
    min-width: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-8px);
    transition: opacity 0.2s ease, transform 0.3s ease, visibility 0.2s ease;
}

.Sidebar3478.is-expanded .Sidebar3478__brand-text {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}

.Sidebar3478__brand-text strong,
.Sidebar3478__brand-text span {
    display: block;
    white-space: nowrap;
}

.Sidebar3478__brand-text strong {
    font-size: 14px;
}

.Sidebar3478__brand-text span {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 9px;
}

.Sidebar3478__toggle {
    position: absolute;
    left: 64px;
    top: 24px;
    z-index: 5;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid #e2e8f0;
    border-radius: 9px;
    background: #ffffff;
    color: #64748b;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
    transition: left 0.3s cubic-bezier(.22, .9, .32, 1), transform 0.3s ease;
}

.Sidebar3478.is-expanded .Sidebar3478__toggle {
    left: 282px;
    transform: rotate(180deg);
}

.Sidebar3478__workspace {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 13px;
    padding: 8px;
    border: 1px solid #e8ecf2;
    border-radius: 12px;
    background: #f8fafc;
}

.Sidebar3478__workspace-icon {
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
}

.Sidebar3478__workspace-icon span {
    font-size: 8px;
    font-weight: 900;
}

.Sidebar3478__workspace-info {
    min-width: 0;
    flex: 1;
    opacity: 0;
    visibility: hidden;
}

.Sidebar3478.is-expanded .Sidebar3478__workspace-info {
    opacity: 1;
    visibility: visible;
}

.Sidebar3478__workspace-info strong,
.Sidebar3478__workspace-info span {
    display: block;
    white-space: nowrap;
}

.Sidebar3478__workspace-info strong {
    font-size: 10px;
}

.Sidebar3478__workspace-info span {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 8px;
}

.Sidebar3478__workspace-more {
    display: none;
    border: none;
    background: transparent;
    color: #94a3b8;
    font-size: 15px;
    cursor: pointer;
}

.Sidebar3478.is-expanded .Sidebar3478__workspace-more {
    display: block;
}

.Sidebar3478__divider {
    height: 1px;
    margin: 0 13px 4px;
    background: #f1f5f9;
}

.Sidebar3478__nav {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px 12px 12px;
    scrollbar-width: thin;
    scrollbar-color: #dbe1e8 transparent;
}

.Sidebar3478__section-title {
    display: block;
    height: 28px;
    padding: 12px 10px 5px;
    overflow: hidden;
    color: #a0a8b5;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .13em;
    white-space: nowrap;
    opacity: 0;
}

.Sidebar3478.is-expanded .Sidebar3478__section-title {
    opacity: 1;
}

.Sidebar3478__link {
    position: relative;
    min-height: 42px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 3px;
    padding: 7px 10px;
    border-radius: 11px;
    color: #64748b;
    text-decoration: none;
}

.Sidebar3478__link:hover {
    background: #f8fafc;
    color: #111827;
}

.Sidebar3478__link.active {
    background: #eff6ff;
    color: #1d4ed8;
}

.Sidebar3478__icon {
    flex: 0 0 auto;
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
}

.Sidebar3478__icon i {
    font-size: 17px;
}

.Sidebar3478__text {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    font-size: 10px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-6px);
    transition: opacity 0.2s ease, transform 0.3s ease;
}

.Sidebar3478.is-expanded .Sidebar3478__text {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}

.Sidebar3478__count,
.Sidebar3478__message-count,
.Sidebar3478__meta,
.Sidebar3478__alert,
.Sidebar3478__active-indicator {
    display: none;
}

.Sidebar3478.is-expanded .Sidebar3478__count {
    min-width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    padding: 0 5px;
    border-radius: 7px;
    background: #eef2f7;
    color: #64748b;
    font-size: 7px;
    font-weight: 800;
}

.Sidebar3478.is-expanded .Sidebar3478__message-count {
    min-width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    padding: 0 5px;
    border-radius: 999px;
    background: #2563eb;
    color: #ffffff;
    font-size: 7px;
    font-weight: 800;
}

.Sidebar3478.is-expanded .Sidebar3478__meta {
    display: block;
    padding: 3px 6px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #64748b;
    font-size: 7px;
}

.Sidebar3478.is-expanded .Sidebar3478__alert {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.08);
}

.Sidebar3478.is-expanded .Sidebar3478__active-indicator {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #2563eb;
}

.Sidebar3478__plan {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 9px 13px;
    padding: 8px;
    border: 1px solid #e8ecf2;
    border-radius: 12px;
    background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.Sidebar3478__plan-icon {
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 16px;
}

.Sidebar3478__plan-content {
    min-width: 0;
    flex: 1;
    display: none;
}

.Sidebar3478.is-expanded .Sidebar3478__plan-content {
    display: block;
}

.Sidebar3478__plan-head {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.Sidebar3478__plan-head div strong,
.Sidebar3478__plan-head div span {
    display: block;
}

.Sidebar3478__plan-head div strong {
    font-size: 8px;
}

.Sidebar3478__plan-head div span {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 7px;
}

.Sidebar3478__plan-head > strong {
    color: #4f46e5;
    font-size: 8px;
}

.Sidebar3478__progress {
    height: 4px;
    margin-top: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}

.Sidebar3478__progress span {
    display: block;
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
}

.Sidebar3478__footer {
    min-height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 16px;
    border-top: 1px solid #f1f5f9;
}

.Sidebar3478__avatar {
    position: relative;
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: linear-gradient(135deg, #dbeafe, #ddd6fe);
    color: #3730a3;
    font-size: 9px;
    font-weight: 900;
}

.Sidebar3478__avatar > span {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 9px;
    height: 9px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #22c55e;
}

.Sidebar3478__profile {
    min-width: 0;
    flex: 1;
    display: none;
}

.Sidebar3478.is-expanded .Sidebar3478__profile {
    display: block;
}

.Sidebar3478__profile strong,
.Sidebar3478__profile span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.Sidebar3478__profile strong {
    font-size: 9px;
}

.Sidebar3478__profile span {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 7px;
}

.Sidebar3478__profile-more {
    display: none;
    border: none;
    background: transparent;
    color: #94a3b8;
    font-size: 16px;
    cursor: pointer;
}

.Sidebar3478.is-expanded .Sidebar3478__profile-more {
    display: block;
}`,
    javascript: `const sidebar = document.querySelector('[data-sidebar-id="3478"]');

if (sidebar) {
    const toggleButton = sidebar.querySelector(".Sidebar3478__toggle");
    const links = sidebar.querySelectorAll(".Sidebar3478__link");

    toggleButton.addEventListener("click", () => {
        const expanded = sidebar.classList.toggle("is-expanded");

        toggleButton.setAttribute(
            "aria-expanded",
            String(expanded)
        );

        toggleButton.setAttribute(
            "aria-label",
            expanded ? "Collapse sidebar" : "Expand sidebar"
        );
    });

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            links.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
}`,
  },
];
