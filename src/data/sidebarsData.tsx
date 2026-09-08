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
];
