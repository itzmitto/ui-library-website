import "../pages/All.css";

export const dropdowns = [
  {
    id: 1366,
    name: "User Profile Dropdown",
    preview: (
      <div className="dropdown-1366">
        <button className="dropdown-1366__trigger">
          <span className="dropdown-1366__avatar">AB</span>
          <span className="dropdown-1366__user">
            <strong>André Babirian</strong>
            <small>andre@example.com</small>
          </span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1366__menu">
          <a href="#">
            <i className="fa-solid fa-user"></i>
            Profile
          </a>
          <a href="#">
            <i className="fa-solid fa-gear"></i>
            Settings
          </a>
          <a href="#">
            <i className="fa-solid fa-credit-card"></i>
            Billing
          </a>
          <div className="dropdown-1366__divider"></div>
          <a href="#" className="dropdown-1366__danger">
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign out
          </a>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <span class="Dropdown-avatar">AB</span>
        <span class="Dropdown-user">
            <strong>André Babirian</strong>
            <small>andre@example.com</small>
        </span>
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <a href="#">
            <i class="fa-solid fa-user"></i>
            Profile
        </a>
        <a href="#">
            <i class="fa-solid fa-gear"></i>
            Settings
        </a>
        <a href="#">
            <i class="fa-solid fa-credit-card"></i>
            Billing
        </a>

        <div class="Dropdown-divider"></div>

        <a href="#" class="Dropdown-danger">
            <i class="fa-solid fa-right-from-bracket"></i>
            Sign out
        </a>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 250px;
    font-family: inherit;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    color: #18181b;
    cursor: pointer;
}

.Dropdown-avatar {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
}

.Dropdown-user {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.Dropdown-user strong {
    font-size: 11px;
}

.Dropdown-user small {
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-trigger > i {
    color: #71717a;
    font-size: 9px;
}

.Dropdown-menu {
    margin-top: 7px;
    padding: 6px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    box-shadow: 0 16px 35px rgba(0,0,0,.1);
}

.Dropdown-menu a {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    border-radius: 8px;
    color: #52525b;
    text-decoration: none;
    font-size: 10px;
}

.Dropdown-menu a i {
    width: 15px;
    color: #71717a;
}

.Dropdown-menu a:hover {
    background: #f4f4f5;
    color: #18181b;
}

.Dropdown-divider {
    height: 1px;
    margin: 5px 0;
    background: #f4f4f5;
}

.Dropdown-menu .Dropdown-danger {
    color: #dc2626;
}

.Dropdown-menu .Dropdown-danger i {
    color: #dc2626;
}`,
  },
  {
    id: 1367,
    name: "Action Dropdown",
    preview: (
      <div className="dropdown-1367">
        <button className="dropdown-1367__trigger">
          Actions
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <div className="dropdown-1367__menu">
          <button>
            <i className="fa-solid fa-pen"></i>
            Edit project
          </button>
          <button>
            <i className="fa-solid fa-copy"></i>
            Duplicate
          </button>
          <button>
            <i className="fa-solid fa-share-nodes"></i>
            Share
          </button>
          <button>
            <i className="fa-solid fa-download"></i>
            Export
          </button>
          <div className="dropdown-1367__divider"></div>
          <button className="dropdown-1367__danger">
            <i className="fa-solid fa-trash"></i>
            Delete
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        Actions
        <i class="fa-solid fa-ellipsis"></i>
    </button>

    <div class="Dropdown-menu">
        <button>
            <i class="fa-solid fa-pen"></i>
            Edit project
        </button>
        <button>
            <i class="fa-solid fa-copy"></i>
            Duplicate
        </button>
        <button>
            <i class="fa-solid fa-share-nodes"></i>
            Share
        </button>
        <button>
            <i class="fa-solid fa-download"></i>
            Export
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-danger">
            <i class="fa-solid fa-trash"></i>
            Delete
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 230px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 13px;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #ffffff;
    color: #18181b;
    font-size: 11px;
    cursor: pointer;
}

.Dropdown-trigger > i {
    color: #71717a;
}

.Dropdown-menu {
    margin-top: 7px;
    padding: 6px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 14px 30px rgba(0,0,0,.08);
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #52525b;
    text-align: left;
    font: inherit;
    font-size: 10px;
    cursor: pointer;
}

.Dropdown-menu button i {
    width: 15px;
    color: #71717a;
}

.Dropdown-menu button:hover {
    background: #f4f4f5;
    color: #18181b;
}

.Dropdown-divider {
    height: 1px;
    margin: 5px 0;
    background: #f4f4f5;
}

.Dropdown-menu .Dropdown-danger {
    color: #dc2626;
}

.Dropdown-menu .Dropdown-danger i {
    color: #dc2626;
}`,
  },
  {
    id: 1368,
    name: "Sort Dropdown",
    preview: (
      <div className="dropdown-1368">
        <button className="dropdown-1368__trigger">
          <i className="fa-solid fa-arrow-down-wide-short"></i>
          Sort by
          <strong>Newest</strong>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1368__menu">
          <button className="active">
            <span>Newest</span>
            <i className="fa-solid fa-check"></i>
          </button>
          <button>
            <span>Oldest</span>
          </button>
          <button>
            <span>Most popular</span>
          </button>
          <button>
            <span>Name A–Z</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-solid fa-arrow-down-wide-short"></i>
        Sort by
        <strong>Newest</strong>
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <button class="active">
            <span>Newest</span>
            <i class="fa-solid fa-check"></i>
        </button>
        <button>
            <span>Oldest</span>
        </button>
        <button>
            <span>Most popular</span>
        </button>
        <button>
            <span>Name A–Z</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 240px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #ffffff;
    color: #71717a;
    font-size: 10px;
}

.Dropdown-trigger strong {
    margin-left: auto;
    color: #18181b;
}

.Dropdown-trigger > i:last-child {
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 5px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
    box-shadow: 0 12px 25px rgba(0,0,0,.07);
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 9px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #52525b;
    font-size: 10px;
    text-align: left;
}

.Dropdown-menu button:hover,
.Dropdown-menu button.active {
    background: #f4f4f5;
    color: #18181b;
}

.Dropdown-menu button.active {
    font-weight: 600;
}

.Dropdown-menu button.active i {
    color: #2563eb;
}`,
  },
  {
    id: 1369,
    name: "Filter Dropdown",
    preview: (
      <div className="dropdown-1369">
        <button className="dropdown-1369__trigger">
          <i className="fa-solid fa-filter"></i>
          Filters
          <span>3</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1369__menu">
          <strong>Filter projects</strong>
          <label>
            <input type="checkbox" defaultChecked />
            <span>React</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>TypeScript</span>
          </label>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Tailwind</span>
          </label>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Laravel</span>
          </label>
          <button className="dropdown-1369__apply">Apply filters</button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-solid fa-filter"></i>
        Filters
        <span>3</span>
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <strong>Filter projects</strong>

        <label>
            <input type="checkbox" checked>
            <span>React</span>
        </label>
        <label>
            <input type="checkbox">
            <span>TypeScript</span>
        </label>
        <label>
            <input type="checkbox" checked>
            <span>Tailwind</span>
        </label>
        <label>
            <input type="checkbox" checked>
            <span>Laravel</span>
        </label>

        <button class="Dropdown-apply">
            Apply filters
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 230px;
}

.Dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #ffffff;
    color: #52525b;
    font-size: 10px;
}

.Dropdown-trigger span {
    min-width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    margin-left: auto;
    border-radius: 50%;
    background: #18181b;
    color: #ffffff;
    font-size: 8px;
}

.Dropdown-trigger > i:last-child {
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 14px 30px rgba(0,0,0,.08);
}

.Dropdown-menu > strong {
    display: block;
    margin-bottom: 9px;
    color: #18181b;
    font-size: 10px;
}

.Dropdown-menu label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    color: #52525b;
    font-size: 10px;
}

.Dropdown-menu input {
    accent-color: #2563eb;
}

.Dropdown-apply {
    width: 100%;
    margin-top: 8px;
    height: 34px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #ffffff;
    font-size: 9px;
    cursor: pointer;
}`,
  },
  {
    id: 1370,
    name: "Language Dropdown",
    preview: (
      <div className="dropdown-1370">
        <button className="dropdown-1370__trigger">
          <span>🇳🇱</span>
          Nederlands
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1370__menu">
          <button className="active">
            <span>🇳🇱</span>
            <span>Nederlands</span>
            <i className="fa-solid fa-check"></i>
          </button>
          <button>
            <span>🇬🇧</span>
            <span>English</span>
          </button>
          <button>
            <span>🇩🇪</span>
            <span>Deutsch</span>
          </button>
          <button>
            <span>🇫🇷</span>
            <span>Français</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <span>🇳🇱</span>
        Nederlands
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <button class="active">
            <span>🇳🇱</span>
            <span>Nederlands</span>
            <i class="fa-solid fa-check"></i>
        </button>
        <button>
            <span>🇬🇧</span>
            <span>English</span>
        </button>
        <button>
            <span>🇩🇪</span>
            <span>Deutsch</span>
        </button>
        <button>
            <span>🇫🇷</span>
            <span>Français</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 220px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #ffffff;
    color: #18181b;
    font-size: 10px;
}

.Dropdown-trigger > span {
    font-size: 16px;
}

.Dropdown-trigger > i {
    margin-left: auto;
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 5px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
    box-shadow: 0 13px 28px rgba(0,0,0,.07);
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 9px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #52525b;
    text-align: left;
    font-size: 10px;
}

.Dropdown-menu button > span:first-child {
    font-size: 15px;
}

.Dropdown-menu button > span:nth-child(2) {
    flex: 1;
}

.Dropdown-menu button:hover,
.Dropdown-menu button.active {
    background: #f4f4f5;
}

.Dropdown-menu button.active {
    color: #18181b;
    font-weight: 600;
}

.Dropdown-menu button.active i {
    color: #2563eb;
}`,
  },
  {
    id: 1371,
    name: "Notification Dropdown",
    preview: (
      <div className="dropdown-1371">
        <button className="dropdown-1371__trigger">
          <i className="fa-regular fa-bell"></i>
          <span>4</span>
        </button>
        <div className="dropdown-1371__menu">
          <div className="dropdown-1371__header">
            <strong>Notifications</strong>
            <button>Mark all read</button>
          </div>
          <a href="#">
            <span className="dropdown-1371__dot blue"></span>
            <div>
              <strong>New comment</strong>
              <small>Someone commented on your project</small>
            </div>
          </a>
          <a href="#">
            <span className="dropdown-1371__dot green"></span>
            <div>
              <strong>Deployment complete</strong>
              <small>Your site is now live</small>
            </div>
          </a>
          <a href="#">
            <span className="dropdown-1371__dot purple"></span>
            <div>
              <strong>New follower</strong>
              <small>Someone started following you</small>
            </div>
          </a>
          <a href="#" className="dropdown-1371__all">
            View all notifications
          </a>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-regular fa-bell"></i>
        <span>4</span>
    </button>

    <div class="Dropdown-menu">
        <div class="Dropdown-header">
            <strong>Notifications</strong>
            <button>Mark all read</button>
        </div>

        <a href="#">
            <span class="Dropdown-dot blue"></span>
            <div>
                <strong>New comment</strong>
                <small>Someone commented on your project</small>
            </div>
        </a>

        <a href="#">
            <span class="Dropdown-dot green"></span>
            <div>
                <strong>Deployment complete</strong>
                <small>Your site is now live</small>
            </div>
        </a>

        <a href="#">
            <span class="Dropdown-dot purple"></span>
            <div>
                <strong>New follower</strong>
                <small>Someone started following you</small>
            </div>
        </a>

        <a href="#" class="Dropdown-all">
            View all notifications
        </a>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
}

.Dropdown-trigger {
    position: relative;
    width: 42px;
    height: 42px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
    color: #52525b;
    cursor: pointer;
}

.Dropdown-trigger > span {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: #ef4444;
    color: #ffffff;
    font-size: 7px;
    font-weight: 700;
}

.Dropdown-menu {
    width: 300px;
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    box-shadow: 0 15px 35px rgba(0,0,0,.1);
}

.Dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 9px 9px;
    border-bottom: 1px solid #f4f4f5;
}

.Dropdown-header strong {
    color: #18181b;
    font-size: 11px;
}

.Dropdown-header button {
    border: none;
    background: transparent;
    color: #2563eb;
    font-size: 8px;
    cursor: pointer;
}

.Dropdown-menu > a {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    padding: 9px;
    border-radius: 8px;
    color: #18181b;
    text-decoration: none;
}

.Dropdown-menu > a:hover {
    background: #f4f4f5;
}

.Dropdown-menu > a div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.Dropdown-menu > a strong {
    font-size: 10px;
}

.Dropdown-menu > a small {
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-dot {
    width: 7px;
    height: 7px;
    margin-top: 4px;
    flex-shrink: 0;
    border-radius: 50%;
}

.Dropdown-dot.blue {
    background: #3b82f6;
}

.Dropdown-dot.green {
    background: #22c55e;
}

.Dropdown-dot.purple {
    background: #8b5cf6;
}

.Dropdown-all {
    justify-content: center;
    margin-top: 3px;
    border-top: 1px solid #f4f4f5;
    border-radius: 0 !important;
    color: #2563eb !important;
    font-size: 9px;
}`,
  },
  {
    id: 1372,
    name: "Workspace Switcher",
    preview: (
      <div className="dropdown-1372">
        <button className="dropdown-1372__trigger">
          <span className="dropdown-1372__logo">M</span>
          <div>
            <strong>My Workspace</strong>
            <small>Personal</small>
          </div>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1372__menu">
          <small className="dropdown-1372__label">WORKSPACES</small>
          <button className="active">
            <span className="dropdown-1372__workspace">M</span>
            <div>
              <strong>My Workspace</strong>
              <small>Personal</small>
            </div>
            <i className="fa-solid fa-check"></i>
          </button>
          <button>
            <span className="dropdown-1372__workspace purple">D</span>
            <div>
              <strong>Design Team</strong>
              <small>8 members</small>
            </div>
          </button>
          <button>
            <span className="dropdown-1372__workspace green">A</span>
            <div>
              <strong>Acme Inc.</strong>
              <small>24 members</small>
            </div>
          </button>
          <div className="dropdown-1372__divider"></div>
          <button className="dropdown-1372__create">
            <i className="fa-solid fa-plus"></i>
            Create workspace
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <span class="Dropdown-logo">M</span>
        <div>
            <strong>My Workspace</strong>
            <small>Personal</small>
        </div>
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <small class="Dropdown-label">WORKSPACES</small>

        <button class="active">
            <span class="Dropdown-workspace">M</span>
            <div>
                <strong>My Workspace</strong>
                <small>Personal</small>
            </div>
            <i class="fa-solid fa-check"></i>
        </button>

        <button>
            <span class="Dropdown-workspace purple">D</span>
            <div>
                <strong>Design Team</strong>
                <small>8 members</small>
            </div>
        </button>

        <button>
            <span class="Dropdown-workspace green">A</span>
            <div>
                <strong>Acme Inc.</strong>
                <small>24 members</small>
            </div>
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-create">
            <i class="fa-solid fa-plus"></i>
            Create workspace
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 260px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 10px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
    text-align: left;
}

.Dropdown-logo {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #18181b;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
}

.Dropdown-trigger > div {
    flex: 1;
}

.Dropdown-trigger strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}

.Dropdown-trigger small {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-trigger > i {
    color: #71717a;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 7px;
    padding: 6px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    box-shadow: 0 16px 35px rgba(0,0,0,.08);
}

.Dropdown-label {
    display: block;
    padding: 6px 8px;
    color: #a1a1aa;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 1px;
}

.Dropdown-menu > button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background: transparent;
    text-align: left;
}

.Dropdown-menu > button:hover,
.Dropdown-menu > button.active {
    background: #f4f4f5;
}

.Dropdown-workspace {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #18181b;
    color: #ffffff;
    font-size: 9px;
    font-weight: 700;
}

.Dropdown-workspace.purple {
    background: #7c3aed;
}

.Dropdown-workspace.green {
    background: #16a34a;
}

.Dropdown-menu > button > div {
    flex: 1;
}

.Dropdown-menu > button strong {
    display: block;
    color: #18181b;
    font-size: 9px;
}

.Dropdown-menu > button small {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 7px;
}

.Dropdown-menu > button > i {
    color: #2563eb;
}

.Dropdown-divider {
    height: 1px;
    margin: 5px 0;
    background: #f4f4f5;
}

.Dropdown-create {
    color: #52525b;
    font-size: 9px;
}

.Dropdown-create > i {
    color: #71717a !important;
}`,
  },
  {
    id: 1373,
    name: "Date Dropdown",
    preview: (
      <div className="dropdown-1373">
        <button className="dropdown-1373__trigger">
          <i className="fa-regular fa-calendar"></i>
          <span>Last 30 days</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1373__menu">
          <button>
            <span>Today</span>
            <small>Aug 28</small>
          </button>
          <button>
            <span>Last 7 days</span>
            <small>Aug 22 – Aug 28</small>
          </button>
          <button className="active">
            <span>Last 30 days</span>
            <small>Jul 30 – Aug 28</small>
          </button>
          <button>
            <span>This month</span>
            <small>August 2026</small>
          </button>
          <button>
            <span>Custom range</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-regular fa-calendar"></i>
        <span>Last 30 days</span>
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <button>
            <span>Today</span>
            <small>Aug 28</small>
        </button>
        <button>
            <span>Last 7 days</span>
            <small>Aug 22 – Aug 28</small>
        </button>
        <button class="active">
            <span>Last 30 days</span>
            <small>Jul 30 – Aug 28</small>
        </button>
        <button>
            <span>This month</span>
            <small>August 2026</small>
        </button>
        <button>
            <span>Custom range</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 230px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #ffffff;
    color: #52525b;
}

.Dropdown-trigger span {
    flex: 1;
    text-align: left;
    font-size: 10px;
}

.Dropdown-trigger > i:first-child {
    color: #2563eb;
}

.Dropdown-trigger > i:last-child {
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 5px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 13px 30px rgba(0,0,0,.07);
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 9px;
    border: none;
    border-radius: 7px;
    background: transparent;
    text-align: left;
}

.Dropdown-menu button span {
    flex: 1;
    color: #52525b;
    font-size: 10px;
}

.Dropdown-menu button small {
    color: #a1a1aa;
    font-size: 7px;
}

.Dropdown-menu button:hover,
.Dropdown-menu button.active {
    background: #f4f4f5;
}

.Dropdown-menu button.active span {
    color: #2563eb;
    font-weight: 600;
}

.Dropdown-menu button > i {
    color: #71717a;
    font-size: 8px;
}`,
  },
  {
    id: 1374,
    name: "Theme Dropdown",
    preview: (
      <div className="dropdown-1374">
        <button className="dropdown-1374__trigger">
          <i className="fa-solid fa-circle-half-stroke"></i>
          Theme
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-1374__menu">
          <button className="active">
            <i className="fa-solid fa-desktop"></i>
            <span>
              <strong>System</strong>
              <small>Follow your device</small>
            </span>
            <i className="fa-solid fa-check"></i>
          </button>
          <button>
            <i className="fa-solid fa-sun"></i>
            <span>
              <strong>Light</strong>
              <small>Always use light mode</small>
            </span>
          </button>
          <button>
            <i className="fa-solid fa-moon"></i>
            <span>
              <strong>Dark</strong>
              <small>Easy on your eyes</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-solid fa-circle-half-stroke"></i>
        Theme
        <i class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="Dropdown-menu">
        <button class="active">
            <i class="fa-solid fa-desktop"></i>
            <span>
                <strong>System</strong>
                <small>Follow your device</small>
            </span>
            <i class="fa-solid fa-check"></i>
        </button>

        <button>
            <i class="fa-solid fa-sun"></i>
            <span>
                <strong>Light</strong>
                <small>Always use light mode</small>
            </span>
        </button>

        <button>
            <i class="fa-solid fa-moon"></i>
            <span>
                <strong>Dark</strong>
                <small>Easy on your eyes</small>
            </span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 260px;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #27272a;
    border-radius: 10px;
    background: #18181b;
    color: #ffffff;
}

.Dropdown-trigger > i:first-child {
    color: #a78bfa;
}

.Dropdown-trigger > i:last-child {
    margin-left: auto;
    color: #71717a;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 6px;
    border: 1px solid #27272a;
    border-radius: 12px;
    background: #09090b;
    box-shadow: 0 15px 35px rgba(0,0,0,.3);
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    text-align: left;
}

.Dropdown-menu button:hover,
.Dropdown-menu button.active {
    background: #18181b;
}

.Dropdown-menu button > i:first-child {
    width: 16px;
}

.Dropdown-menu button span {
    flex: 1;
}

.Dropdown-menu button strong {
    display: block;
    color: #d4d4d8;
    font-size: 10px;
}

.Dropdown-menu button small {
    display: block;
    margin-top: 3px;
    color: #52525b;
    font-size: 8px;
}

.Dropdown-menu button.active > i:first-child {
    color: #a78bfa;
}

.Dropdown-menu button.active > i:last-child {
    color: #a78bfa;
}`,
  },
  {
    id: 1375,
    name: "Command Dropdown",
    preview: (
      <div className="dropdown-1375">
        <button className="dropdown-1375__trigger">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search components...</span>
          <kbd>⌘ K</kbd>
        </button>
        <div className="dropdown-1375__menu">
          <small className="dropdown-1375__label">RECENT</small>
          <button>
            <i className="fa-solid fa-bolt"></i>
            <span>Buttons</span>
            <kbd>↵</kbd>
          </button>
          <button>
            <i className="fa-solid fa-layer-group"></i>
            <span>Cards</span>
            <kbd>↵</kbd>
          </button>
          <button>
            <i className="fa-solid fa-code"></i>
            <span>Inputs</span>
            <kbd>↵</kbd>
          </button>
          <small className="dropdown-1375__label">QUICK ACTIONS</small>
          <button>
            <i className="fa-solid fa-plus"></i>
            <span>Create component</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>Search components...</span>
        <kbd>⌘ K</kbd>
    </button>

    <div class="Dropdown-menu">
        <small class="Dropdown-label">RECENT</small>

        <button>
            <i class="fa-solid fa-bolt"></i>
            <span>Buttons</span>
            <kbd>↵</kbd>
        </button>

        <button>
            <i class="fa-solid fa-layer-group"></i>
            <span>Cards</span>
            <kbd>↵</kbd>
        </button>

        <button>
            <i class="fa-solid fa-code"></i>
            <span>Inputs</span>
            <kbd>↵</kbd>
        </button>

        <small class="Dropdown-label">QUICK ACTIONS</small>

        <button>
            <i class="fa-solid fa-plus"></i>
            <span>Create component</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    width: 300px;
    font-family: inherit;
}

.Dropdown-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 11px;
    border: 1px solid #3f3f46;
    border-radius: 11px;
    background: #18181b;
    color: #ffffff;
    text-align: left;
}

.Dropdown-trigger > i {
    color: #71717a;
    font-size: 10px;
}

.Dropdown-trigger span {
    flex: 1;
    color: #71717a;
    font-size: 10px;
}

.Dropdown-trigger kbd {
    padding: 3px 6px;
    border: 1px solid #3f3f46;
    border-radius: 5px;
    background: #27272a;
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-menu {
    margin-top: 6px;
    padding: 6px;
    border: 1px solid #3f3f46;
    border-radius: 12px;
    background: #18181b;
    box-shadow: 0 20px 45px rgba(0,0,0,.3);
}

.Dropdown-label {
    display: block;
    padding: 7px 8px 5px;
    color: #52525b;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 1px;
}

.Dropdown-menu button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #a1a1aa;
    text-align: left;
}

.Dropdown-menu button:hover {
    background: #27272a;
    color: #ffffff;
}

.Dropdown-menu button > i {
    width: 15px;
    color: #71717a;
}

.Dropdown-menu button span {
    flex: 1;
    font-size: 10px;
}

.Dropdown-menu button kbd {
    padding: 2px 5px;
    border: 1px solid #3f3f46;
    border-radius: 4px;
    color: #71717a;
    font-size: 7px;
}

.Dropdown-menu button:hover > i {
    color: #a78bfa;
}`,
  },

  {
    id: 2734,
    name: "Neon Command Dropdown",
    preview: (
      <div className="dd-2734">
        <button className="dd-2734__trigger">
          <i className="ri-command-line"></i>
          <span>Command</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2734__menu">
          <div className="dd-2734__item">
            <i className="ri-dashboard-line"></i>
            <span>Dashboard</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="dd-2734__item">
            <i className="ri-code-s-slash-line"></i>
            <span>Developer</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="dd-2734__item">
            <i className="ri-settings-4-line"></i>
            <span>Settings</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2734">
    <button class="dd-2734__trigger">
        <i class="ri-command-line"></i>
        <span>Command</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2734__menu">
        <div class="dd-2734__item"><i class="ri-dashboard-line"></i><span>Dashboard</span><i class="ri-arrow-right-s-line"></i></div>
        <div class="dd-2734__item"><i class="ri-code-s-slash-line"></i><span>Developer</span><i class="ri-arrow-right-s-line"></i></div>
        <div class="dd-2734__item"><i class="ri-settings-4-line"></i><span>Settings</span><i class="ri-arrow-right-s-line"></i></div>
    </div>
</div>`,
    css: `.dd-2734 {
    position: relative;
    width: 190px;
    font-family: inherit;
}
.dd-2734__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(110, 220, 255, .35);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(0, 225, 255, .12), rgba(110, 80, 255, .08));
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 13px;
    cursor: pointer;
    box-shadow: 0 0 18px rgba(0, 220, 255, .08);
}
.dd-2734__trigger i:first-child {
    color: #55ddff;
    font-size: 18px;
}
.dd-2734__trigger i:last-child {
    margin-left: auto;
    color: #8e99a8;
}
.dd-2734__menu {
    margin-top: 8px;
    padding: 6px;
    border: 1px solid rgba(110, 220, 255, .18);
    border-radius: 12px;
    background: rgba(12, 15, 23, .96);
    box-shadow: 0 12px 35px rgba(0,0,0,.45), 0 0 25px rgba(0,220,255,.06);
}
.dd-2734__item {
    height: 38px;
    padding: 0 10px;
    border-radius: 8px;
    color: #aeb8c5;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .2s ease;
    cursor: pointer;
}
.dd-2734__item i:first-child {
    color: #55ddff;
}
.dd-2734__item i:last-child {
    margin-left: auto;
    color: #657181;
}
.dd-2734__item:hover {
    color: #fff;
    background: rgba(0,220,255,.08);
    transform: translateX(2px);
}`,
  },
  {
    id: 2735,
    name: "Glass Profile Dropdown",
    preview: (
      <div className="dd-2735">
        <button className="dd-2735__trigger">
          <span className="dd-2735__avatar">
            <i className="ri-user-3-line"></i>
          </span>
          <span className="dd-2735__text">
            <strong>André</strong>
            <small>Developer</small>
          </span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2735__menu">
          <div className="dd-2735__item">
            <i className="ri-user-line"></i>
            <span>Profile</span>
          </div>
          <div className="dd-2735__item">
            <i className="ri-notification-3-line"></i>
            <span>Notifications</span>
          </div>
          <div className="dd-2735__item">
            <i className="ri-settings-3-line"></i>
            <span>Account Settings</span>
          </div>
          <div className="dd-2735__divider"></div>
          <div className="dd-2735__item dd-2735__danger">
            <i className="ri-logout-box-r-line"></i>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2735">
    <button class="dd-2735__trigger">
        <span class="dd-2735__avatar"><i class="ri-user-3-line"></i></span>
        <span class="dd-2735__text"><strong>André</strong><small>Developer</small></span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2735__menu">
        <div class="dd-2735__item"><i class="ri-user-line"></i><span>Profile</span></div>
        <div class="dd-2735__item"><i class="ri-notification-3-line"></i><span>Notifications</span></div>
        <div class="dd-2735__item"><i class="ri-settings-3-line"></i><span>Account Settings</span></div>
        <div class="dd-2735__divider"></div>
        <div class="dd-2735__item dd-2735__danger"><i class="ri-logout-box-r-line"></i><span>Sign Out</span></div>
    </div>
</div>`,
    css: `.dd-2735 {
    position: relative;
    width: 205px;
}
.dd-2735__trigger {
    width: 100%;
    min-height: 48px;
    padding: 5px 10px;
    border: 1px solid rgba(255,255,255,.11);
    border-radius: 14px;
    background: rgba(255,255,255,.045);
    backdrop-filter: blur(14px);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.dd-2735__avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#ff4ecd,#705cff);
    color: #fff;
    box-shadow: 0 0 14px rgba(160,80,255,.35);
}
.dd-2735__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.dd-2735__text strong {
    font-size: 13px;
}
.dd-2735__text small {
    font-size: 10px;
    color: #8993a2;
}
.dd-2735__trigger > i:last-child {
    margin-left: auto;
    color: #8993a2;
}
.dd-2735__menu {
    margin-top: 8px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 14px;
    background: rgba(14,15,20,.97);
    backdrop-filter: blur(18px);
    box-shadow: 0 18px 45px rgba(0,0,0,.45);
}
.dd-2735__item {
    min-height: 38px;
    padding: 0 10px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #aeb4bf;
    font-size: 13px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2735__item i {
    font-size: 17px;
    color: #9a8cff;
}
.dd-2735__item:hover {
    color: #fff;
    background: rgba(255,255,255,.06);
}
.dd-2735__divider {
    height: 1px;
    margin: 6px;
    background: rgba(255,255,255,.08);
}
.dd-2735__danger i {
    color: #ff5570;
}
.dd-2735__danger:hover {
    background: rgba(255,70,100,.08);
}`,
  },
  {
    id: 2736,
    name: "Rainbow Action Dropdown",
    preview: (
      <div className="dd-2736">
        <button className="dd-2736__trigger">
          <i className="ri-magic-line"></i>
          <span>Actions</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2736__menu">
          <div className="dd-2736__item">
            <i className="ri-add-line"></i>
            <span>Create</span>
          </div>
          <div className="dd-2736__item">
            <i className="ri-edit-line"></i>
            <span>Edit</span>
          </div>
          <div className="dd-2736__item">
            <i className="ri-share-line"></i>
            <span>Share</span>
          </div>
          <div className="dd-2736__item">
            <i className="ri-delete-bin-line"></i>
            <span>Delete</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2736">
    <button class="dd-2736__trigger">
        <i class="ri-magic-line"></i>
        <span>Actions</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2736__menu">
        <div class="dd-2736__item"><i class="ri-add-line"></i><span>Create</span></div>
        <div class="dd-2736__item"><i class="ri-edit-line"></i><span>Edit</span></div>
        <div class="dd-2736__item"><i class="ri-share-line"></i><span>Share</span></div>
        <div class="dd-2736__item"><i class="ri-delete-bin-line"></i><span>Delete</span></div>
    </div>
</div>`,
    css: `.dd-2736 {
    position: relative;
    width: 180px;
}
.dd-2736__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid transparent;
    border-radius: 12px;
    background:
        linear-gradient(#101116,#101116) padding-box,
        linear-gradient(90deg,#ff3b7f,#ffb000,#00e676,#00cfff,#9b59ff,#ff3b7f) border-box;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    cursor: pointer;
}
.dd-2736__trigger i:first-child {
    font-size: 18px;
    animation: dd-2736__hue 2s linear infinite;
}
.dd-2736__trigger i:last-child {
    margin-left: auto;
    color: #9fa7b4;
}
.dd-2736__menu {
    margin-top: 8px;
    padding: 6px;
    border-radius: 12px;
    background: #0e0f14;
    border: 1px solid rgba(255,255,255,.09);
}
.dd-2736__item {
    height: 38px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    border-radius: 8px;
    color: #9ca5b2;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2736__item:hover {
    color: #fff;
    background: linear-gradient(90deg,rgba(255,59,127,.12),rgba(0,207,255,.1));
    transform: translateX(3px);
}
.dd-2736__item i {
    font-size: 17px;
}
.dd-2736__item:nth-child(1) i { color: #ff4d7a; }
.dd-2736__item:nth-child(2) i { color: #ffb000; }
.dd-2736__item:nth-child(3) i { color: #00d9ff; }
.dd-2736__item:nth-child(4) i { color: #b65cff; }
@keyframes dd-2736__hue {
    to {
        filter: hue-rotate(360deg);
    }
}`,
  },
  {
    id: 2737,
    name: "Cyber Select Dropdown",
    preview: (
      <div className="dd-2737">
        <button className="dd-2737__trigger">
          <i className="ri-terminal-box-line"></i>
          <span>Environment</span>
          <strong>DEV</strong>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2737__menu">
          <div className="dd-2737__item">
            <span className="dd-2737__dot dd-2737__green"></span>
            <span>Production</span>
            <b>PROD</b>
          </div>
          <div className="dd-2737__item">
            <span className="dd-2737__dot dd-2737__yellow"></span>
            <span>Staging</span>
            <b>STG</b>
          </div>
          <div className="dd-2737__item">
            <span className="dd-2737__dot dd-2737__cyan"></span>
            <span>Development</span>
            <b>DEV</b>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2737">
    <button class="dd-2737__trigger">
        <i class="ri-terminal-box-line"></i>
        <span>Environment</span>
        <strong>DEV</strong>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2737__menu">
        <div class="dd-2737__item"><span class="dd-2737__dot dd-2737__green"></span><span>Production</span><b>PROD</b></div>
        <div class="dd-2737__item"><span class="dd-2737__dot dd-2737__yellow"></span><span>Staging</span><b>STG</b></div>
        <div class="dd-2737__item"><span class="dd-2737__dot dd-2737__cyan"></span><span>Development</span><b>DEV</b></div>
    </div>
</div>`,
    css: `.dd-2737 {
    position: relative;
    width: 220px;
    font-family: monospace;
}
.dd-2737__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(0,245,255,.25);
    border-radius: 8px;
    background: #080c10;
    color: #d8faff;
    padding: 0 11px;
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
}
.dd-2737__trigger > i:first-child {
    color: #00e5ff;
}
.dd-2737__trigger strong {
    margin-left: auto;
    font-size: 10px;
    padding: 3px 6px;
    border: 1px solid rgba(0,229,255,.25);
    border-radius: 4px;
    color: #00e5ff;
}
.dd-2737__trigger > i:last-child {
    color: #607380;
}
.dd-2737__menu {
    margin-top: 7px;
    padding: 5px;
    background: #070b0f;
    border: 1px solid rgba(0,245,255,.14);
    border-radius: 8px;
    box-shadow: 0 0 25px rgba(0,220,255,.08);
}
.dd-2737__item {
    min-height: 37px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-radius: 5px;
    color: #8997a3;
    cursor: pointer;
}
.dd-2737__item:hover {
    color: #fff;
    background: rgba(0,229,255,.06);
}
.dd-2737__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    box-shadow: 0 0 8px currentColor;
}
.dd-2737__green { background: #00e676; color: #00e676; }
.dd-2737__yellow { background: #ffe600; color: #ffe600; }
.dd-2737__cyan { background: #00e5ff; color: #00e5ff; }
.dd-2737__item b {
    margin-left: auto;
    font-size: 9px;
    color: #56636f;
}`,
  },
  {
    id: 2738,
    name: "Floating Icon Dropdown",
    preview: (
      <div className="dd-2738">
        <button className="dd-2738__trigger">
          <i className="ri-apps-2-line"></i>
          <span>Apps</span>
          <i className="ri-more-2-fill"></i>
        </button>
        <div className="dd-2738__menu">
          <div className="dd-2738__item">
            <span>
              <i className="ri-github-fill"></i>
            </span>
            <small>GitHub</small>
          </div>
          <div className="dd-2738__item">
            <span>
              <i className="ri-discord-fill"></i>
            </span>
            <small>Discord</small>
          </div>
          <div className="dd-2738__item">
            <span>
              <i className="ri-layout-grid-line"></i>
            </span>
            <small>Library</small>
          </div>
          <div className="dd-2738__item">
            <span>
              <i className="ri-folder-5-line"></i>
            </span>
            <small>Files</small>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2738">
    <button class="dd-2738__trigger">
        <i class="ri-apps-2-line"></i>
        <span>Apps</span>
        <i class="ri-more-2-fill"></i>
    </button>
    <div class="dd-2738__menu">
        <div class="dd-2738__item"><span><i class="ri-github-fill"></i></span><small>GitHub</small></div>
        <div class="dd-2738__item"><span><i class="ri-discord-fill"></i></span><small>Discord</small></div>
        <div class="dd-2738__item"><span><i class="ri-layout-grid-line"></i></span><small>Library</small></div>
        <div class="dd-2738__item"><span><i class="ri-folder-5-line"></i></span><small>Files</small></div>
    </div>
</div>`,
    css: `.dd-2738 {
    position: relative;
    width: 170px;
}
.dd-2738__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 12px;
    background: #101116;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 12px;
    cursor: pointer;
}
.dd-2738__trigger i:first-child {
    color: #9c7bff;
    font-size: 18px;
}
.dd-2738__trigger i:last-child {
    margin-left: auto;
    color: #717987;
}
.dd-2738__menu {
    margin-top: 8px;
    padding: 10px;
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 14px;
    background: rgba(17,18,24,.98);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
}
.dd-2738__item {
    min-height: 66px;
    border-radius: 10px;
    background: rgba(255,255,255,.035);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    transition: .22s ease;
}
.dd-2738__item span {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#27213f,#172638);
    color: #a991ff;
}
.dd-2738__item small {
    font-size: 10px;
    color: #9199a6;
}
.dd-2738__item:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,.07);
    box-shadow: 0 8px 20px rgba(0,0,0,.25);
}`,
  },
  {
    id: 2739,
    name: "Gradient Status Dropdown",
    preview: (
      <div className="dd-2739">
        <button className="dd-2739__trigger">
          <span className="dd-2739__status"></span>
          <span>Online</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2739__menu">
          <div className="dd-2739__item">
            <span className="dd-2739__dot dd-2739__online"></span>Online
          </div>
          <div className="dd-2739__item">
            <span className="dd-2739__dot dd-2739__away"></span>Away
          </div>
          <div className="dd-2739__item">
            <span className="dd-2739__dot dd-2739__busy"></span>Do Not Disturb
          </div>
          <div className="dd-2739__item">
            <span className="dd-2739__dot dd-2739__offline"></span>Invisible
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2739">
    <button class="dd-2739__trigger">
        <span class="dd-2739__status"></span>
        <span>Online</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2739__menu">
        <div class="dd-2739__item"><span class="dd-2739__dot dd-2739__online"></span>Online</div>
        <div class="dd-2739__item"><span class="dd-2739__dot dd-2739__away"></span>Away</div>
        <div class="dd-2739__item"><span class="dd-2739__dot dd-2739__busy"></span>Do Not Disturb</div>
        <div class="dd-2739__item"><span class="dd-2739__dot dd-2739__offline"></span>Invisible</div>
    </div>
</div>`,
    css: `.dd-2739 {
    position: relative;
    width: 180px;
}
.dd-2739__trigger {
    width: 100%;
    height: 43px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 22px;
    background: linear-gradient(90deg,#15161c,#101116);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    cursor: pointer;
}
.dd-2739__status {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    box-shadow: 0 0 9px #00e676;
}
.dd-2739__trigger i {
    margin-left: auto;
    color: #7c8490;
}
.dd-2739__menu {
    margin-top: 8px;
    padding: 6px;
    border-radius: 13px;
    background: #121319;
    border: 1px solid rgba(255,255,255,.09);
}
.dd-2739__item {
    height: 37px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 10px;
    border-radius: 8px;
    color: #9ea6b2;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2739__item:hover {
    color: #fff;
    background: rgba(255,255,255,.05);
}
.dd-2739__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.dd-2739__online { background: #00e676; box-shadow: 0 0 8px #00e676; }
.dd-2739__away { background: #ffcf33; box-shadow: 0 0 8px #ffcf33; }
.dd-2739__busy { background: #ff405b; box-shadow: 0 0 8px #ff405b; }
.dd-2739__offline { background: #666d78; }`,
  },
  {
    id: 2740,
    name: "Luxury Gold Dropdown",
    preview: (
      <div className="dd-2740">
        <button className="dd-2740__trigger">
          <i className="ri-vip-crown-line"></i>
          <span>Premium</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2740__menu">
          <div className="dd-2740__item">
            <i className="ri-sparkling-2-line"></i>
            <span>Pro Features</span>
          </div>
          <div className="dd-2740__item">
            <i className="ri-star-smile-line"></i>
            <span>Exclusive Themes</span>
          </div>
          <div className="dd-2740__item">
            <i className="ri-flashlight-line"></i>
            <span>Priority Access</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2740">
    <button class="dd-2740__trigger">
        <i class="ri-vip-crown-line"></i>
        <span>Premium</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2740__menu">
        <div class="dd-2740__item"><i class="ri-sparkling-2-line"></i><span>Pro Features</span></div>
        <div class="dd-2740__item"><i class="ri-star-smile-line"></i><span>Exclusive Themes</span></div>
        <div class="dd-2740__item"><i class="ri-flashlight-line"></i><span>Priority Access</span></div>
    </div>
</div>`,
    css: `.dd-2740 {
    position: relative;
    width: 190px;
}
.dd-2740__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(255,201,73,.35);
    border-radius: 11px;
    background: linear-gradient(135deg,#1b1710,#0f1014);
    color: #f6df9c;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    cursor: pointer;
    box-shadow: inset 0 0 20px rgba(255,195,60,.03);
}
.dd-2740__trigger i:first-child {
    color: #ffc94d;
    font-size: 18px;
}
.dd-2740__trigger i:last-child {
    margin-left: auto;
    color: #8b8068;
}
.dd-2740__menu {
    margin-top: 8px;
    padding: 6px;
    border: 1px solid rgba(255,201,73,.18);
    border-radius: 12px;
    background: #12110e;
}
.dd-2740__item {
    height: 39px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    border-radius: 8px;
    color: #a79b7e;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2740__item i {
    color: #e7b83e;
}
.dd-2740__item:hover {
    color: #fff0c2;
    background: rgba(255,201,73,.08);
}`,
  },
  {
    id: 2741,
    name: "Rainbow User Menu",
    preview: (
      <div className="dd-2741">
        <button className="dd-2741__trigger">
          <span className="dd-2741__avatar">A</span>
          <span>My Account</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2741__menu">
          <div className="dd-2741__header">ACCOUNT</div>
          <div className="dd-2741__item">
            <i className="ri-user-3-line"></i>
            <span>Profile</span>
          </div>
          <div className="dd-2741__item">
            <i className="ri-palette-line"></i>
            <span>Appearance</span>
          </div>
          <div className="dd-2741__item">
            <i className="ri-settings-4-line"></i>
            <span>Settings</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2741">
    <button class="dd-2741__trigger">
        <span class="dd-2741__avatar">A</span>
        <span>My Account</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2741__menu">
        <div class="dd-2741__header">ACCOUNT</div>
        <div class="dd-2741__item"><i class="ri-user-3-line"></i><span>Profile</span></div>
        <div class="dd-2741__item"><i class="ri-palette-line"></i><span>Appearance</span></div>
        <div class="dd-2741__item"><i class="ri-settings-4-line"></i><span>Settings</span></div>
    </div>
</div>`,
    css: `.dd-2741 {
    position: relative;
    width: 195px;
}
.dd-2741__trigger {
    width: 100%;
    height: 46px;
    border: 1px solid transparent;
    border-radius: 13px;
    background:
        linear-gradient(#111217,#111217) padding-box,
        linear-gradient(90deg,#ff416c,#ffbb00,#00df82,#00cfff,#8b5cf6,#ff416c) border-box;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 10px;
    cursor: pointer;
}
.dd-2741__avatar {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    font-weight: 700;
    background: linear-gradient(135deg,#ff416c,#7c4dff,#00d9ff);
    animation: dd-2741__hue 3s linear infinite;
}
.dd-2741__trigger i {
    margin-left: auto;
    color: #818a98;
}
.dd-2741__menu {
    margin-top: 8px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 13px;
    background: #101116;
}
.dd-2741__header {
    padding: 7px 10px 5px;
    color: #555f6d;
    font-size: 9px;
    letter-spacing: 1.5px;
}
.dd-2741__item {
    height: 38px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9da5b1;
    border-radius: 8px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2741__item i {
    font-size: 17px;
}
.dd-2741__item:nth-child(2) i { color: #ff4c7d; }
.dd-2741__item:nth-child(3) i { color: #00d9ff; }
.dd-2741__item:nth-child(4) i { color: #9b6cff; }
.dd-2741__item:hover {
    color: #fff;
    background: rgba(255,255,255,.055);
}
@keyframes dd-2741__hue {
    to {
        filter: hue-rotate(360deg);
    }
}`,
  },
  {
    id: 2742,
    name: "Cyber Profile Dropdown",
    preview: (
      <div className="dd-2742">
        <button className="dd-2742__trigger">
          <i className="ri-shield-user-line"></i>
          <span>Admin</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2742__menu">
          <div className="dd-2742__item">
            <i className="ri-dashboard-3-line"></i>
            <span>Control Panel</span>
            <kbd>⌘1</kbd>
          </div>
          <div className="dd-2742__item">
            <i className="ri-bar-chart-box-line"></i>
            <span>Analytics</span>
            <kbd>⌘2</kbd>
          </div>
          <div className="dd-2742__item">
            <i className="ri-shield-check-line"></i>
            <span>Security</span>
            <kbd>⌘3</kbd>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2742">
    <button class="dd-2742__trigger">
        <i class="ri-shield-user-line"></i>
        <span>Admin</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2742__menu">
        <div class="dd-2742__item"><i class="ri-dashboard-3-line"></i><span>Control Panel</span><kbd>⌘1</kbd></div>
        <div class="dd-2742__item"><i class="ri-bar-chart-box-line"></i><span>Analytics</span><kbd>⌘2</kbd></div>
        <div class="dd-2742__item"><i class="ri-shield-check-line"></i><span>Security</span><kbd>⌘3</kbd></div>
    </div>
</div>`,
    css: `.dd-2742 {
    position: relative;
    width: 215px;
    font-family: inherit;
}
.dd-2742__trigger {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(137,92,255,.3);
    border-radius: 9px;
    background: linear-gradient(135deg,#12101b,#0a0d14);
    color: #fff;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.dd-2742__trigger i:first-child {
    color: #a06dff;
    font-size: 18px;
}
.dd-2742__trigger i:last-child {
    margin-left: auto;
    color: #656d7a;
}
.dd-2742__menu {
    margin-top: 7px;
    padding: 5px;
    background: #090b10;
    border: 1px solid rgba(137,92,255,.15);
    border-radius: 9px;
}
.dd-2742__item {
    height: 39px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    color: #8c96a5;
    cursor: pointer;
}
.dd-2742__item:hover {
    color: #fff;
    background: rgba(139,92,246,.08);
}
.dd-2742__item i {
    color: #9b6cff;
}
.dd-2742__item kbd {
    margin-left: auto;
    padding: 2px 5px;
    border: 1px solid #272b35;
    border-radius: 4px;
    color: #555e6c;
    background: #11141a;
    font-size: 9px;
}`,
  },
  {
    id: 2743,
    name: "Ultimate Spectrum Dropdown",
    preview: (
      <div className="dd-2743">
        <button className="dd-2743__trigger">
          <span className="dd-2743__icon">
            <i className="ri-sparkling-fill"></i>
          </span>
          <span>Components</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2743__menu">
          <div className="dd-2743__item">
            <i className="ri-checkbox-multiple-line"></i>
            <span>Checkboxes</span>
            <strong>120+</strong>
          </div>
          <div className="dd-2743__item">
            <i className="ri-toggle-line"></i>
            <span>Toggles</span>
            <strong>80+</strong>
          </div>
          <div className="dd-2743__item">
            <i className="ri-layout-2-line"></i>
            <span>Cards</span>
            <strong>200+</strong>
          </div>
          <div className="dd-2743__item">
            <i className="ri-loader-4-line"></i>
            <span>Loaders</span>
            <strong>150+</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2743">
    <button class="dd-2743__trigger">
        <span class="dd-2743__icon"><i class="ri-sparkling-fill"></i></span>
        <span>Components</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2743__menu">
        <div class="dd-2743__item"><i class="ri-checkbox-multiple-line"></i><span>Checkboxes</span><strong>120+</strong></div>
        <div class="dd-2743__item"><i class="ri-toggle-line"></i><span>Toggles</span><strong>80+</strong></div>
        <div class="dd-2743__item"><i class="ri-layout-2-line"></i><span>Cards</span><strong>200+</strong></div>
        <div class="dd-2743__item"><i class="ri-loader-4-line"></i><span>Loaders</span><strong>150+</strong></div>
    </div>
</div>`,
    css: `.dd-2743 {
    position: relative;
    width: 215px;
}
.dd-2743__trigger {
    width: 100%;
    height: 46px;
    border: 1px solid transparent;
    border-radius: 13px;
    background:
        linear-gradient(#101117,#101117) padding-box,
        linear-gradient(90deg,#ff005c,#ff9800,#ffe600,#00e676,#00d9ff,#7657ff,#ff00cc) border-box;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    cursor: pointer;
    box-shadow: 0 0 18px rgba(150,70,255,.08);
}
.dd-2743__icon {
    width: 31px;
    height: 31px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#ff296d,#ff9b00,#00d9ff,#884dff);
    background-size: 250% 250%;
    box-shadow: 0 0 13px rgba(0,217,255,.22);
    animation: dd-2743__gradient 3s ease infinite;
}
.dd-2743__icon i {
    color: #fff;
    font-size: 16px;
}
.dd-2743__trigger > i:last-child {
    margin-left: auto;
    color: #858d9b;
}
.dd-2743__menu {
    margin-top: 8px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 13px;
    background: rgba(13,14,19,.98);
    box-shadow: 0 18px 40px rgba(0,0,0,.45);
}
.dd-2743__item {
    height: 42px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 9px;
    color: #9ca5b2;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2743__item i {
    font-size: 18px;
}
.dd-2743__item:nth-child(1) i { color: #ff4c74; }
.dd-2743__item:nth-child(2) i { color: #ffc400; }
.dd-2743__item:nth-child(3) i { color: #00d9ff; }
.dd-2743__item:nth-child(4) i { color: #9b6cff; }
.dd-2743__item strong {
    margin-left: auto;
    font-size: 9px;
    font-weight: 500;
    color: #68717f;
}
.dd-2743__item:hover {
    color: #fff;
    background: linear-gradient(90deg,rgba(255,0,100,.07),rgba(0,217,255,.07));
    transform: translateX(2px);
}
@keyframes dd-2743__gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}`,
  },
  {
    id: 2744,
    name: "Enterprise Navigation Dropdown",
    preview: (
      <div className="dd-2744">
        <button className="dd-2744__trigger">
          <span className="dd-2744__brand">N</span>
          <span>Solutions</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2744__menu">
          <div className="dd-2744__item">
            <span className="dd-2744__icon">
              <i className="ri-building-4-line"></i>
            </span>
            <span>
              <strong>Enterprise</strong>
              <small>Solutions for large teams</small>
            </span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="dd-2744__item">
            <span className="dd-2744__icon">
              <i className="ri-team-line"></i>
            </span>
            <span>
              <strong>Teams</strong>
              <small>Collaboration tools</small>
            </span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="dd-2744__item">
            <span className="dd-2744__icon">
              <i className="ri-line-chart-line"></i>
            </span>
            <span>
              <strong>Analytics</strong>
              <small>Insights and reporting</small>
            </span>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2744">
    <button class="dd-2744__trigger">
        <span class="dd-2744__brand">N</span>
        <span>Solutions</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2744__menu">
        <div class="dd-2744__item">
            <span class="dd-2744__icon"><i class="ri-building-4-line"></i></span>
            <span><strong>Enterprise</strong><small>Solutions for large teams</small></span>
            <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="dd-2744__item">
            <span class="dd-2744__icon"><i class="ri-team-line"></i></span>
            <span><strong>Teams</strong><small>Collaboration tools</small></span>
            <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="dd-2744__item">
            <span class="dd-2744__icon"><i class="ri-line-chart-line"></i></span>
            <span><strong>Analytics</strong><small>Insights and reporting</small></span>
            <i class="ri-arrow-right-s-line"></i>
        </div>
    </div>
</div>`,
    css: `.dd-2744 {
    position: relative;
    width: 245px;
    font-family: inherit;
}
.dd-2744__trigger {
    width: 100%;
    height: 46px;
    padding: 0 12px;
    border: 1px solid #252934;
    border-radius: 9px;
    background: #111318;
    color: #e7e9ed;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2744__trigger:hover {
    border-color: #3a404d;
    background: #14161b;
}
.dd-2744__brand {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: grid;
    place-items: center;
    background: #fff;
    color: #101217;
    font-size: 12px;
    font-weight: 700;
}
.dd-2744__trigger i {
    margin-left: auto;
    color: #747b88;
}
.dd-2744__menu {
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #242832;
    border-radius: 10px;
    background: #101217;
    box-shadow: 0 18px 40px rgba(0,0,0,.35);
}
.dd-2744__item {
    min-height: 60px;
    padding: 7px 8px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8f97a5;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2744__item:hover {
    background: #171a20;
    color: #fff;
}
.dd-2744__icon {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border: 1px solid #2b303b;
    border-radius: 7px;
    display: grid;
    place-items: center;
    background: #15181e;
    color: #c4c9d2;
}
.dd-2744__item > span:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}
.dd-2744__item strong {
    color: #e4e7eb;
    font-size: 12px;
    font-weight: 600;
}
.dd-2744__item small {
    color: #717987;
    font-size: 10px;
}
.dd-2744__item > i:last-child {
    margin-left: auto;
    color: #545c69;
    font-size: 16px;
}`,
  },
  {
    id: 2745,
    name: "Corporate Account Dropdown",
    preview: (
      <div className="dd-2745">
        <button className="dd-2745__trigger">
          <span className="dd-2745__avatar">
            <i className="ri-user-3-line"></i>
          </span>
          <span className="dd-2745__identity">
            <strong>John Carter</strong>
            <small>Administrator</small>
          </span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2745__menu">
          <div className="dd-2745__account">
            <span className="dd-2745__big-avatar">JC</span>
            <span>
              <strong>John Carter</strong>
              <small>john@company.com</small>
            </span>
          </div>
          <div className="dd-2745__divider"></div>
          <div className="dd-2745__item">
            <i className="ri-user-settings-line"></i>
            <span>Account settings</span>
          </div>
          <div className="dd-2745__item">
            <i className="ri-team-line"></i>
            <span>Team members</span>
          </div>
          <div className="dd-2745__item">
            <i className="ri-bank-card-line"></i>
            <span>Billing</span>
          </div>
          <div className="dd-2745__divider"></div>
          <div className="dd-2745__item dd-2745__logout">
            <i className="ri-logout-box-r-line"></i>
            <span>Sign out</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2745">
    <button class="dd-2745__trigger">
        <span class="dd-2745__avatar"><i class="ri-user-3-line"></i></span>
        <span class="dd-2745__identity"><strong>John Carter</strong><small>Administrator</small></span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2745__menu">
        <div class="dd-2745__account">
            <span class="dd-2745__big-avatar">JC</span>
            <span><strong>John Carter</strong><small>john@company.com</small></span>
        </div>
        <div class="dd-2745__divider"></div>
        <div class="dd-2745__item"><i class="ri-user-settings-line"></i><span>Account settings</span></div>
        <div class="dd-2745__item"><i class="ri-team-line"></i><span>Team members</span></div>
        <div class="dd-2745__item"><i class="ri-bank-card-line"></i><span>Billing</span></div>
        <div class="dd-2745__divider"></div>
        <div class="dd-2745__item dd-2745__logout"><i class="ri-logout-box-r-line"></i><span>Sign out</span></div>
    </div>
</div>`,
    css: `.dd-2745 {
    position: relative;
    width: 220px;
    font-family: inherit;
}
.dd-2745__trigger {
    width: 100%;
    height: 48px;
    padding: 5px 10px;
    border: 1px solid #252a33;
    border-radius: 10px;
    background: #111318;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #e8eaee;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2745__trigger:hover {
    border-color: #363c48;
    background: #14161c;
}
.dd-2745__avatar,
.dd-2745__big-avatar {
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #22262e;
    color: #e8ebef;
}
.dd-2745__avatar {
    width: 32px;
    height: 32px;
}
.dd-2745__identity {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
}
.dd-2745__identity strong {
    font-size: 12px;
    font-weight: 600;
}
.dd-2745__identity small {
    color: #747c89;
    font-size: 10px;
}
.dd-2745__trigger > i:last-child {
    margin-left: auto;
    color: #6d7582;
}
.dd-2745__menu {
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #242832;
    border-radius: 11px;
    background: #101217;
    box-shadow: 0 18px 40px rgba(0,0,0,.4);
}
.dd-2745__account {
    min-height: 53px;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.dd-2745__big-avatar {
    width: 36px;
    height: 36px;
    background: #1b2028;
    border: 1px solid #303641;
    font-size: 10px;
    font-weight: 700;
}
.dd-2745__account > span:last-child {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.dd-2745__account strong {
    color: #e5e8ed;
    font-size: 12px;
}
.dd-2745__account small {
    color: #69717f;
    font-size: 10px;
}
.dd-2745__divider {
    height: 1px;
    margin: 6px 4px;
    background: #242933;
}
.dd-2745__item {
    min-height: 37px;
    padding: 0 9px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #929aa7;
    font-size: 12px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2745__item i {
    width: 17px;
    color: #7c8492;
    font-size: 16px;
}
.dd-2745__item:hover {
    color: #fff;
    background: #181b21;
}
.dd-2745__logout {
    color: #a47a80;
}
.dd-2745__logout i {
    color: #d15f6f;
}
.dd-2745__logout:hover {
    background: rgba(209,95,111,.08);
    color: #ef9ca7;
}`,
  },
  {
    id: 2746,
    name: "Business Workspace Dropdown",
    preview: (
      <div className="dd-2746">
        <button className="dd-2746__trigger">
          <span className="dd-2746__workspace">
            <i className="ri-building-2-line"></i>
          </span>
          <span className="dd-2746__label">
            <small>WORKSPACE</small>
            <strong>Acme Inc.</strong>
          </span>
          <i className="ri-expand-up-down-line"></i>
        </button>
        <div className="dd-2746__menu">
          <div className="dd-2746__heading">YOUR WORKSPACES</div>
          <div className="dd-2746__item dd-2746__active">
            <span className="dd-2746__logo">A</span>
            <span>
              <strong>Acme Inc.</strong>
              <small>12 members</small>
            </span>
            <i className="ri-check-line"></i>
          </div>
          <div className="dd-2746__item">
            <span className="dd-2746__logo">D</span>
            <span>
              <strong>Design Team</strong>
              <small>8 members</small>
            </span>
          </div>
          <div className="dd-2746__item">
            <span className="dd-2746__logo">M</span>
            <span>
              <strong>Marketing</strong>
              <small>6 members</small>
            </span>
          </div>
          <div className="dd-2746__divider"></div>
          <div className="dd-2746__action">
            <i className="ri-add-line"></i>
            <span>Create workspace</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2746">
    <button class="dd-2746__trigger">
        <span class="dd-2746__workspace"><i class="ri-building-2-line"></i></span>
        <span class="dd-2746__label"><small>WORKSPACE</small><strong>Acme Inc.</strong></span>
        <i class="ri-expand-up-down-line"></i>
    </button>
    <div class="dd-2746__menu">
        <div class="dd-2746__heading">YOUR WORKSPACES</div>
        <div class="dd-2746__item dd-2746__active">
            <span class="dd-2746__logo">A</span>
            <span><strong>Acme Inc.</strong><small>12 members</small></span>
            <i class="ri-check-line"></i>
        </div>
        <div class="dd-2746__item">
            <span class="dd-2746__logo">D</span>
            <span><strong>Design Team</strong><small>8 members</small></span>
        </div>
        <div class="dd-2746__item">
            <span class="dd-2746__logo">M</span>
            <span><strong>Marketing</strong><small>6 members</small></span>
        </div>
        <div class="dd-2746__divider"></div>
        <div class="dd-2746__action"><i class="ri-add-line"></i><span>Create workspace</span></div>
    </div>
</div>`,
    css: `.dd-2746 {
    position: relative;
    width: 215px;
    font-family: inherit;
}
.dd-2746__trigger {
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    border: 1px solid #252a32;
    border-radius: 9px;
    background: #121419;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2746__trigger:hover {
    border-color: #3a414d;
}
.dd-2746__workspace {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    background: #e9ebef;
    color: #17191d;
}
.dd-2746__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
}
.dd-2746__label small {
    color: #68707d;
    font-size: 8px;
    letter-spacing: 1px;
}
.dd-2746__label strong {
    color: #e7e9ed;
    font-size: 12px;
}
.dd-2746__trigger > i:last-child {
    margin-left: auto;
    color: #707886;
}
.dd-2746__menu {
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #252a33;
    border-radius: 10px;
    background: #101217;
    box-shadow: 0 18px 40px rgba(0,0,0,.4);
}
.dd-2746__heading {
    padding: 7px 9px 6px;
    color: #59616f;
    font-size: 8px;
    letter-spacing: 1.1px;
    font-weight: 600;
}
.dd-2746__item {
    min-height: 45px;
    padding: 4px 8px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #9ba2ae;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2746__item:hover {
    background: #181b21;
    color: #fff;
}
.dd-2746__logo {
    width: 27px;
    height: 27px;
    border-radius: 6px;
    display: grid;
    place-items: center;
    background: #1d222a;
    border: 1px solid #303641;
    color: #bfc5ce;
    font-size: 10px;
    font-weight: 700;
}
.dd-2746__item > span:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1px;
}
.dd-2746__item strong {
    color: #dce0e5;
    font-size: 11px;
}
.dd-2746__item small {
    color: #68717f;
    font-size: 9px;
}
.dd-2746__item > i {
    margin-left: auto;
    color: #45c58a;
}
.dd-2746__active {
    background: #171a20;
}
.dd-2746__divider {
    height: 1px;
    margin: 6px 3px;
    background: #252a33;
}
.dd-2746__action {
    height: 36px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #858e9c;
    border-radius: 7px;
    font-size: 11px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2746__action i {
    font-size: 16px;
}
.dd-2746__action:hover {
    color: #fff;
    background: #181b21;
}`,
  },
  {
    id: 2747,
    name: "Professional Resource Dropdown",
    preview: (
      <div className="dd-2747">
        <button className="dd-2747__trigger">
          <span>Resources</span>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2747__menu">
          <div className="dd-2747__item">
            <span className="dd-2747__icon">
              <i className="ri-book-open-line"></i>
            </span>
            <span>
              <strong>Documentation</strong>
              <small>Learn how everything works</small>
            </span>
          </div>
          <div className="dd-2747__item">
            <span className="dd-2747__icon">
              <i className="ri-graduation-cap-line"></i>
            </span>
            <span>
              <strong>Guides</strong>
              <small>Step-by-step tutorials</small>
            </span>
          </div>
          <div className="dd-2747__item">
            <span className="dd-2747__icon">
              <i className="ri-question-line"></i>
            </span>
            <span>
              <strong>Help Center</strong>
              <small>Answers and support</small>
            </span>
          </div>
          <div className="dd-2747__footer">
            <span>Need help?</span>
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2747">
    <button class="dd-2747__trigger">
        <span>Resources</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2747__menu">
        <div class="dd-2747__item">
            <span class="dd-2747__icon"><i class="ri-book-open-line"></i></span>
            <span><strong>Documentation</strong><small>Learn how everything works</small></span>
        </div>
        <div class="dd-2747__item">
            <span class="dd-2747__icon"><i class="ri-graduation-cap-line"></i></span>
            <span><strong>Guides</strong><small>Step-by-step tutorials</small></span>
        </div>
        <div class="dd-2747__item">
            <span class="dd-2747__icon"><i class="ri-question-line"></i></span>
            <span><strong>Help Center</strong><small>Answers and support</small></span>
        </div>
        <div class="dd-2747__footer">
            <span>Need help?</span>
            <i class="ri-arrow-right-up-line"></i>
        </div>
    </div>
</div>`,
    css: `.dd-2747 {
    position: relative;
    width: 205px;
    font-family: inherit;
}
.dd-2747__trigger {
    width: 100%;
    height: 44px;
    padding: 0 13px;
    border: 1px solid #282d36;
    border-radius: 8px;
    background: #121419;
    color: #e4e7eb;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2747__trigger:hover {
    background: #16191f;
    border-color: #3a404b;
}
.dd-2747__trigger i {
    margin-left: auto;
    color: #707987;
}
.dd-2747__menu {
    margin-top: 7px;
    padding: 6px;
    border: 1px solid #272c35;
    border-radius: 10px;
    background: #101217;
    box-shadow: 0 18px 42px rgba(0,0,0,.4);
}
.dd-2747__item {
    min-height: 53px;
    padding: 6px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2747__item:hover {
    background: #181b21;
}
.dd-2747__icon {
    width: 31px;
    height: 31px;
    border-radius: 7px;
    display: grid;
    place-items: center;
    background: #191c22;
    border: 1px solid #2b3039;
    color: #b7bec9;
}
.dd-2747__item > span:last-child {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.dd-2747__item strong {
    color: #e4e7ec;
    font-size: 11px;
    font-weight: 600;
}
.dd-2747__item small {
    color: #707987;
    font-size: 9px;
}
.dd-2747__footer {
    margin-top: 4px;
    padding: 9px 8px 6px;
    border-top: 1px solid #252a32;
    display: flex;
    align-items: center;
    color: #747c89;
    font-size: 10px;
}
.dd-2747__footer i {
    margin-left: auto;
    color: #929aa7;
}`,
  },
  {
    id: 2748,
    name: "Executive Settings Dropdown",
    preview: (
      <div className="dd-2748">
        <button className="dd-2748__trigger">
          <span>
            <i className="ri-settings-3-line"></i>
          </span>
          <strong>Settings</strong>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <div className="dd-2748__menu">
          <div className="dd-2748__section">GENERAL</div>
          <div className="dd-2748__item">
            <i className="ri-user-settings-line"></i>
            <span>Account</span>
            <kbd>⌘ A</kbd>
          </div>
          <div className="dd-2748__item">
            <i className="ri-notification-4-line"></i>
            <span>Notifications</span>
            <kbd>⌘ N</kbd>
          </div>
          <div className="dd-2748__item">
            <i className="ri-palette-line"></i>
            <span>Appearance</span>
            <kbd>⌘ P</kbd>
          </div>
          <div className="dd-2748__section dd-2748__section-second">
            SECURITY
          </div>
          <div className="dd-2748__item">
            <i className="ri-shield-check-line"></i>
            <span>Security</span>
            <kbd>⌘ S</kbd>
          </div>
          <div className="dd-2748__item">
            <i className="ri-lock-password-line"></i>
            <span>Privacy</span>
            <kbd>⌘ L</kbd>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2748">
    <button class="dd-2748__trigger">
        <span><i class="ri-settings-3-line"></i></span>
        <strong>Settings</strong>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div class="dd-2748__menu">
        <div class="dd-2748__section">GENERAL</div>
        <div class="dd-2748__item"><i class="ri-user-settings-line"></i><span>Account</span><kbd>⌘ A</kbd></div>
        <div class="dd-2748__item"><i class="ri-notification-4-line"></i><span>Notifications</span><kbd>⌘ N</kbd></div>
        <div class="dd-2748__item"><i class="ri-palette-line"></i><span>Appearance</span><kbd>⌘ P</kbd></div>
        <div class="dd-2748__section dd-2748__section-second">SECURITY</div>
        <div class="dd-2748__item"><i class="ri-shield-check-line"></i><span>Security</span><kbd>⌘ S</kbd></div>
        <div class="dd-2748__item"><i class="ri-lock-password-line"></i><span>Privacy</span><kbd>⌘ L</kbd></div>
    </div>
</div>`,
    css: `.dd-2748 {
    position: relative;
    width: 205px;
    font-family: inherit;
}
.dd-2748__trigger {
    width: 100%;
    height: 45px;
    padding: 0 11px;
    border: 1px solid #292e37;
    border-radius: 8px;
    background: #121419;
    color: #e5e8ec;
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2748__trigger:hover {
    border-color: #3b424e;
    background: #15181e;
}
.dd-2748__trigger > span {
    width: 29px;
    height: 29px;
    border-radius: 7px;
    background: #1a1d23;
    display: grid;
    place-items: center;
    color: #b7bec8;
}
.dd-2748__trigger strong {
    font-size: 12px;
    font-weight: 600;
}
.dd-2748__trigger > i:last-child {
    margin-left: auto;
    color: #6c7481;
}
.dd-2748__menu {
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #272c34;
    border-radius: 10px;
    background: #101217;
    box-shadow: 0 18px 40px rgba(0,0,0,.4);
}
.dd-2748__section {
    padding: 6px 9px 5px;
    color: #565f6d;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 1.1px;
}
.dd-2748__section-second {
    margin-top: 3px;
    border-top: 1px solid #252a32;
    padding-top: 10px;
}
.dd-2748__item {
    height: 38px;
    padding: 0 9px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #969eaa;
    font-size: 11px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2748__item i {
    width: 17px;
    color: #757e8c;
    font-size: 16px;
}
.dd-2748__item:hover {
    color: #fff;
    background: #181b21;
}
.dd-2748__item:hover i {
    color: #c0c6cf;
}
.dd-2748__item kbd {
    margin-left: auto;
    padding: 2px 5px;
    border: 1px solid #292e37;
    border-radius: 4px;
    background: #15181d;
    color: #5f6875;
    font-size: 8px;
}`,
  },
  {
    id: 2749,
    name: "Ultimate Enterprise Command Dropdown",
    preview: (
      <div className="dd-2749">
        <button className="dd-2749__trigger">
          <span className="dd-2749__trigger-logo">
            <i className="ri-command-line"></i>
          </span>
          <span className="dd-2749__trigger-content">
            <strong>Workspace</strong>
            <small>Acme Corporation</small>
          </span>
          <span className="dd-2749__trigger-status"></span>
          <i className="ri-expand-up-down-line dd-2749__trigger-arrow"></i>
        </button>
        <div className="dd-2749__panel">
          <div className="dd-2749__top">
            <div className="dd-2749__profile">
              <div className="dd-2749__profile-avatar">
                <span>AC</span>
                <i className="ri-verified-badge-fill"></i>
              </div>
              <div className="dd-2749__profile-info">
                <strong>Acme Corporation</strong>
                <small>Enterprise workspace</small>
              </div>
              <button className="dd-2749__close">
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
          <div className="dd-2749__search">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search workspace..." />
            <kbd>⌘ K</kbd>
          </div>
          <div className="dd-2749__section">
            <div className="dd-2749__section-title">
              <span>MAIN</span>
            </div>
            <div className="dd-2749__item dd-2749__item-active">
              <span className="dd-2749__item-icon dd-2749__icon-blue">
                <i className="ri-dashboard-3-line"></i>
              </span>
              <span className="dd-2749__item-content">
                <strong>Overview</strong>
                <small>Workspace dashboard</small>
              </span>
              <span className="dd-2749__active-line"></span>
            </div>
            <div className="dd-2749__item">
              <span className="dd-2749__item-icon dd-2749__icon-purple">
                <i className="ri-bar-chart-grouped-line"></i>
              </span>
              <span className="dd-2749__item-content">
                <strong>Analytics</strong>
                <small>Reports and insights</small>
              </span>
              <span className="dd-2749__item-badge">12</span>
            </div>
            <div className="dd-2749__item">
              <span className="dd-2749__item-icon dd-2749__icon-cyan">
                <i className="ri-pulse-line"></i>
              </span>
              <span className="dd-2749__item-content">
                <strong>Activity</strong>
                <small>Recent workspace activity</small>
              </span>
              <span className="dd-2749__live">
                <span></span>
                LIVE
              </span>
            </div>
          </div>
          <div className="dd-2749__divider"></div>
          <div className="dd-2749__section">
            <div className="dd-2749__section-title dd-2749__section-title-between">
              <span>PROJECTS</span>
              <button>
                <i className="ri-add-line"></i>
              </button>
            </div>
            <div className="dd-2749__project">
              <span className="dd-2749__project-color dd-2749__project-blue"></span>
              <span className="dd-2749__project-content">
                <strong>Design System</strong>
                <small>24 components</small>
              </span>
              <span className="dd-2749__project-progress">
                <span></span>
              </span>
            </div>
            <div className="dd-2749__project">
              <span className="dd-2749__project-color dd-2749__project-purple"></span>
              <span className="dd-2749__project-content">
                <strong>Web Platform</strong>
                <small>84% completed</small>
              </span>
              <span className="dd-2749__project-progress dd-2749__progress-purple">
                <span></span>
              </span>
            </div>
            <div className="dd-2749__project">
              <span className="dd-2749__project-color dd-2749__project-green"></span>
              <span className="dd-2749__project-content">
                <strong>Mobile App</strong>
                <small>18 tasks open</small>
              </span>
              <span className="dd-2749__project-progress dd-2749__progress-green">
                <span></span>
              </span>
            </div>
            <div className="dd-2749__view-all">
              <span>View all projects</span>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div className="dd-2749__divider"></div>
          <div className="dd-2749__section">
            <div className="dd-2749__section-title dd-2749__section-title-between">
              <span>TEAM</span>
              <button>
                <i className="ri-user-add-line"></i>
              </button>
            </div>
            <div className="dd-2749__team">
              <div className="dd-2749__team-stack">
                <span className="dd-2749__team-avatar dd-2749__team-one">
                  JD
                </span>
                <span className="dd-2749__team-avatar dd-2749__team-two">
                  SK
                </span>
                <span className="dd-2749__team-avatar dd-2749__team-three">
                  MR
                </span>
                <span className="dd-2749__team-more">+9</span>
              </div>
              <div className="dd-2749__team-content">
                <strong>12 team members</strong>
                <small>8 currently online</small>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
          <div className="dd-2749__divider"></div>
          <div className="dd-2749__section">
            <div className="dd-2749__section-title">
              <span>QUICK ACTIONS</span>
            </div>
            <div className="dd-2749__quick-grid">
              <button className="dd-2749__quick">
                <span className="dd-2749__quick-icon dd-2749__quick-blue">
                  <i className="ri-add-circle-line"></i>
                </span>
                <span>Create</span>
              </button>
              <button className="dd-2749__quick">
                <span className="dd-2749__quick-icon dd-2749__quick-purple">
                  <i className="ri-upload-cloud-2-line"></i>
                </span>
                <span>Upload</span>
              </button>
              <button className="dd-2749__quick">
                <span className="dd-2749__quick-icon dd-2749__quick-green">
                  <i className="ri-user-add-line"></i>
                </span>
                <span>Invite</span>
              </button>
              <button className="dd-2749__quick">
                <span className="dd-2749__quick-icon dd-2749__quick-orange">
                  <i className="ri-settings-4-line"></i>
                </span>
                <span>Settings</span>
              </button>
            </div>
          </div>
          <div className="dd-2749__usage">
            <div className="dd-2749__usage-header">
              <span>
                <i className="ri-database-2-line"></i>
                Storage
              </span>
              <strong>72%</strong>
            </div>
            <div className="dd-2749__usage-track">
              <span></span>
            </div>
            <div className="dd-2749__usage-footer">
              <small>720 GB used</small>
              <small>1 TB total</small>
            </div>
          </div>
          <div className="dd-2749__divider"></div>
          <div className="dd-2749__footer">
            <button className="dd-2749__footer-item">
              <i className="ri-question-line"></i>
              <span>Help Center</span>
            </button>
            <button className="dd-2749__footer-item">
              <i className="ri-feedback-line"></i>
              <span>Feedback</span>
            </button>
            <button className="dd-2749__footer-profile">
              <span className="dd-2749__footer-avatar">AC</span>
              <span className="dd-2749__footer-profile-text">
                <strong>Alex Carter</strong>
                <small>Administrator</small>
              </span>
              <i className="ri-more-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dd-2749">
    <button class="dd-2749__trigger">
        <span class="dd-2749__trigger-logo">
            <i class="ri-command-line"></i>
        </span>
        <span class="dd-2749__trigger-content">
            <strong>Workspace</strong>
            <small>Acme Corporation</small>
        </span>
        <span class="dd-2749__trigger-status"></span>
        <i class="ri-expand-up-down-line dd-2749__trigger-arrow"></i>
    </button>
    <div class="dd-2749__panel">
        <div class="dd-2749__top">
            <div class="dd-2749__profile">
                <div class="dd-2749__profile-avatar">
                    <span>AC</span>
                    <i class="ri-verified-badge-fill"></i>
                </div>
                <div class="dd-2749__profile-info">
                    <strong>Acme Corporation</strong>
                    <small>Enterprise workspace</small>
                </div>
                <button class="dd-2749__close">
                    <i class="ri-close-line"></i>
                </button>
            </div>
        </div>
        <div class="dd-2749__search">
            <i class="ri-search-line"></i>
            <input type="text" placeholder="Search workspace..." />
            <kbd>⌘ K</kbd>
        </div>
        <div class="dd-2749__section">
            <div class="dd-2749__section-title">
                <span>MAIN</span>
            </div>
            <div class="dd-2749__item dd-2749__item-active">
                <span class="dd-2749__item-icon dd-2749__icon-blue">
                    <i class="ri-dashboard-3-line"></i>
                </span>
                <span class="dd-2749__item-content">
                    <strong>Overview</strong>
                    <small>Workspace dashboard</small>
                </span>
                <span class="dd-2749__active-line"></span>
            </div>
            <div class="dd-2749__item">
                <span class="dd-2749__item-icon dd-2749__icon-purple">
                    <i class="ri-bar-chart-grouped-line"></i>
                </span>
                <span class="dd-2749__item-content">
                    <strong>Analytics</strong>
                    <small>Reports and insights</small>
                </span>
                <span class="dd-2749__item-badge">12</span>
            </div>
            <div class="dd-2749__item">
                <span class="dd-2749__item-icon dd-2749__icon-cyan">
                    <i class="ri-pulse-line"></i>
                </span>
                <span class="dd-2749__item-content">
                    <strong>Activity</strong>
                    <small>Recent workspace activity</small>
                </span>
                <span class="dd-2749__live">
                    <span></span>
                    LIVE
                </span>
            </div>
        </div>
        <div class="dd-2749__divider"></div>
        <div class="dd-2749__section">
            <div class="dd-2749__section-title dd-2749__section-title-between">
                <span>PROJECTS</span>
                <button>
                    <i class="ri-add-line"></i>
                </button>
            </div>
            <div class="dd-2749__project">
                <span class="dd-2749__project-color dd-2749__project-blue"></span>
                <span class="dd-2749__project-content">
                    <strong>Design System</strong>
                    <small>24 components</small>
                </span>
                <span class="dd-2749__project-progress">
                    <span></span>
                </span>
            </div>
            <div class="dd-2749__project">
                <span class="dd-2749__project-color dd-2749__project-purple"></span>
                <span class="dd-2749__project-content">
                    <strong>Web Platform</strong>
                    <small>84% completed</small>
                </span>
                <span class="dd-2749__project-progress dd-2749__progress-purple">
                    <span></span>
                </span>
            </div>
            <div class="dd-2749__project">
                <span class="dd-2749__project-color dd-2749__project-green"></span>
                <span class="dd-2749__project-content">
                    <strong>Mobile App</strong>
                    <small>18 tasks open</small>
                </span>
                <span class="dd-2749__project-progress dd-2749__progress-green">
                    <span></span>
                </span>
            </div>
            <div class="dd-2749__view-all">
                <span>View all projects</span>
                <i class="ri-arrow-right-line"></i>
            </div>
        </div>
        <div class="dd-2749__divider"></div>
        <div class="dd-2749__section">
            <div class="dd-2749__section-title dd-2749__section-title-between">
                <span>TEAM</span>
                <button>
                    <i class="ri-user-add-line"></i>
                </button>
            </div>
            <div class="dd-2749__team">
                <div class="dd-2749__team-stack">
                    <span class="dd-2749__team-avatar dd-2749__team-one">JD</span>
                    <span class="dd-2749__team-avatar dd-2749__team-two">SK</span>
                    <span class="dd-2749__team-avatar dd-2749__team-three">MR</span>
                    <span class="dd-2749__team-more">+9</span>
                </div>
                <div class="dd-2749__team-content">
                    <strong>12 team members</strong>
                    <small>8 currently online</small>
                </div>
                <i class="ri-arrow-right-s-line"></i>
            </div>
        </div>
        <div class="dd-2749__divider"></div>
        <div class="dd-2749__section">
            <div class="dd-2749__section-title">
                <span>QUICK ACTIONS</span>
            </div>
            <div class="dd-2749__quick-grid">
                <button class="dd-2749__quick">
                    <span class="dd-2749__quick-icon dd-2749__quick-blue">
                        <i class="ri-add-circle-line"></i>
                    </span>
                    <span>Create</span>
                </button>
                <button class="dd-2749__quick">
                    <span class="dd-2749__quick-icon dd-2749__quick-purple">
                        <i class="ri-upload-cloud-2-line"></i>
                    </span>
                    <span>Upload</span>
                </button>
                <button class="dd-2749__quick">
                    <span class="dd-2749__quick-icon dd-2749__quick-green">
                        <i class="ri-user-add-line"></i>
                    </span>
                    <span>Invite</span>
                </button>
                <button class="dd-2749__quick">
                    <span class="dd-2749__quick-icon dd-2749__quick-orange">
                        <i class="ri-settings-4-line"></i>
                    </span>
                    <span>Settings</span>
                </button>
            </div>
        </div>
        <div class="dd-2749__usage">
            <div class="dd-2749__usage-header">
                <span>
                    <i class="ri-database-2-line"></i>
                    Storage
                </span>
                <strong>72%</strong>
            </div>
            <div class="dd-2749__usage-track">
                <span></span>
            </div>
            <div class="dd-2749__usage-footer">
                <small>720 GB used</small>
                <small>1 TB total</small>
            </div>
        </div>
        <div class="dd-2749__divider"></div>
        <div class="dd-2749__footer">
            <button class="dd-2749__footer-item">
                <i class="ri-question-line"></i>
                <span>Help Center</span>
            </button>
            <button class="dd-2749__footer-item">
                <i class="ri-feedback-line"></i>
                <span>Feedback</span>
            </button>
            <button class="dd-2749__footer-profile">
                <span class="dd-2749__footer-avatar">AC</span>
                <span class="dd-2749__footer-profile-text">
                    <strong>Alex Carter</strong>
                    <small>Administrator</small>
                </span>
                <i class="ri-more-2-fill"></i>
            </button>
        </div>
    </div>
</div>`,
    css: `.dd-2749 {
    position: relative;
    width: 330px;
    font-family: inherit;
}
.dd-2749__trigger {
    width: 100%;
    height: 58px;
    padding: 6px 10px;
    border: 1px solid #272c35;
    border-radius: 13px;
    background: linear-gradient(145deg,#15171d,#101217);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 11px;
    cursor: pointer;
    transition: .25s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,.2);
}
.dd-2749__trigger:hover {
    border-color: #3a414d;
    background: linear-gradient(145deg,#181b22,#12141a);
    transform: translateY(-1px);
}
.dd-2749__trigger-logo {
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#28303b,#171b22);
    border: 1px solid #39414e;
    color: #d8dde5;
    font-size: 18px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
}
.dd-2749__trigger-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    gap: 2px;
}
.dd-2749__trigger-content strong {
    color: #edf0f4;
    font-size: 12px;
    font-weight: 600;
}
.dd-2749__trigger-content small {
    color: #707987;
    font-size: 10px;
    white-space: nowrap;
}
.dd-2749__trigger-status {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #36d68c;
    box-shadow: 0 0 8px rgba(54,214,140,.8);
    margin-left: auto;
}
.dd-2749__trigger-arrow {
    color: #707987;
    font-size: 17px;
}
.dd-2749__panel {
    position: absolute;
    left: 0;
    top: calc(100% + 8px);
    width: 100%;
    max-height: 720px;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #292f39;
    border-radius: 16px;
    background:
        radial-gradient(circle at 100% 0%,rgba(84,105,255,.07),transparent 30%),
        radial-gradient(circle at 0% 30%,rgba(0,201,255,.04),transparent 25%),
        #0f1116;
    box-shadow:
        0 30px 70px rgba(0,0,0,.55),
        0 8px 25px rgba(0,0,0,.25),
        inset 0 1px 0 rgba(255,255,255,.025);
    z-index: 50;
    scrollbar-width: thin;
    scrollbar-color: #303640 transparent;
}
.dd-2749__panel::-webkit-scrollbar {
    width: 5px;
}
.dd-2749__panel::-webkit-scrollbar-track {
    background: transparent;
}
.dd-2749__panel::-webkit-scrollbar-thumb {
    background: #303640;
    border-radius: 10px;
}
.dd-2749__top {
    padding: 4px 3px 9px;
}
.dd-2749__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px;
}
.dd-2749__profile-avatar {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    background: linear-gradient(135deg,#242a34,#191d24);
    border: 1px solid #343b46;
    display: grid;
    place-items: center;
    position: relative;
    color: #e4e8ed;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .4px;
}
.dd-2749__profile-avatar i {
    position: absolute;
    right: -4px;
    bottom: -4px;
    font-size: 13px;
    color: #4f96ff;
    background: #101217;
    border-radius: 50%;
}
.dd-2749__profile-info {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.dd-2749__profile-info strong {
    color: #f0f2f5;
    font-size: 13px;
    font-weight: 650;
}
.dd-2749__profile-info small {
    color: #6c7481;
    font-size: 10px;
}
.dd-2749__close {
    margin-left: auto;
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border: 1px solid transparent;
    border-radius: 7px;
    background: transparent;
    color: #66707e;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__close:hover {
    color: #fff;
    background: #191c22;
    border-color: #292f38;
}
.dd-2749__search {
    height: 39px;
    margin: 0 3px 10px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #242a33;
    border-radius: 8px;
    background: #0b0d11;
    color: #68717f;
    transition: .2s ease;
}
.dd-2749__search:focus-within {
    border-color: #3a4f69;
    box-shadow: 0 0 0 2px rgba(67,137,210,.08);
}
.dd-2749__search > i {
    font-size: 16px;
}
.dd-2749__search input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #dfe3e8;
    font: inherit;
    font-size: 11px;
}
.dd-2749__search input::placeholder {
    color: #555e6b;
}
.dd-2749__search kbd {
    padding: 3px 5px;
    border: 1px solid #282e37;
    border-radius: 4px;
    background: #15181d;
    color: #59616e;
    font-size: 8px;
}
.dd-2749__section {
    padding: 2px 3px;
}
.dd-2749__section-title {
    padding: 5px 7px 7px;
    color: #505966;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.2px;
}
.dd-2749__section-title-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dd-2749__section-title-between button {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: #68717f;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__section-title-between button:hover {
    color: #fff;
    background: #191c22;
}
.dd-2749__item {
    min-height: 51px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 9px;
    position: relative;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__item:hover {
    background: rgba(255,255,255,.035);
    border-color: rgba(255,255,255,.035);
}
.dd-2749__item-active {
    background: linear-gradient(90deg,rgba(67,137,255,.09),rgba(67,137,255,.025));
    border-color: rgba(67,137,255,.12);
}
.dd-2749__item-icon {
    width: 33px;
    height: 33px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    font-size: 16px;
    flex: 0 0 33px;
    border: 1px solid rgba(255,255,255,.045);
}
.dd-2749__icon-blue {
    color: #62a0ff;
    background: rgba(63,128,255,.09);
}
.dd-2749__icon-purple {
    color: #a986ff;
    background: rgba(143,92,246,.09);
}
.dd-2749__icon-cyan {
    color: #55d7e8;
    background: rgba(0,210,230,.08);
}
.dd-2749__item-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}
.dd-2749__item-content strong {
    color: #dfe3e8;
    font-size: 11px;
    font-weight: 600;
}
.dd-2749__item-content small {
    color: #68717f;
    font-size: 9px;
}
.dd-2749__item-badge {
    margin-left: auto;
    min-width: 22px;
    height: 20px;
    padding: 0 6px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    background: #1a2029;
    border: 1px solid #2b333f;
    color: #8e98a7;
    font-size: 9px;
}
.dd-2749__active-line {
    width: 3px;
    height: 18px;
    border-radius: 4px;
    background: #5798ff;
    box-shadow: 0 0 9px rgba(87,152,255,.65);
    margin-left: auto;
}
.dd-2749__live {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #4ed395;
    font-size: 8px;
    letter-spacing: .6px;
    font-weight: 700;
}
.dd-2749__live span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #45d18e;
    box-shadow: 0 0 7px rgba(69,209,142,.85);
    animation: dd-2749__livePulse 1.4s ease-in-out infinite;
}
.dd-2749__divider {
    height: 1px;
    margin: 9px 5px;
    background: linear-gradient(90deg,transparent,#252b34,transparent);
}
.dd-2749__project {
    min-height: 47px;
    padding: 5px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__project:hover {
    background: rgba(255,255,255,.035);
}
.dd-2749__project-color {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex: 0 0 8px;
}
.dd-2749__project-blue {
    background: #4f93ff;
    box-shadow: 0 0 8px rgba(79,147,255,.5);
}
.dd-2749__project-purple {
    background: #a26cff;
    box-shadow: 0 0 8px rgba(162,108,255,.5);
}
.dd-2749__project-green {
    background: #42d794;
    box-shadow: 0 0 8px rgba(66,215,148,.5);
}
.dd-2749__project-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}
.dd-2749__project-content strong {
    color: #d9dde3;
    font-size: 10px;
    font-weight: 600;
}
.dd-2749__project-content small {
    color: #626b78;
    font-size: 8px;
}
.dd-2749__project-progress {
    width: 31px;
    height: 4px;
    margin-left: auto;
    border-radius: 10px;
    background: #242a32;
    overflow: hidden;
}
.dd-2749__project-progress > span {
    display: block;
    width: 64%;
    height: 100%;
    border-radius: inherit;
    background: #4f93ff;
}
.dd-2749__progress-purple > span {
    width: 84%;
    background: #a26cff;
}
.dd-2749__progress-green > span {
    width: 52%;
    background: #42d794;
}
.dd-2749__view-all {
    height: 31px;
    margin-top: 2px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    color: #69727f;
    font-size: 9px;
    cursor: pointer;
    border-radius: 7px;
    transition: .2s ease;
}
.dd-2749__view-all i {
    margin-left: auto;
    font-size: 13px;
}
.dd-2749__view-all:hover {
    color: #b7bec8;
    background: rgba(255,255,255,.025);
}
.dd-2749__team {
    min-height: 54px;
    padding: 7px 8px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__team:hover {
    background: rgba(255,255,255,.035);
}
.dd-2749__team-stack {
    display: flex;
    align-items: center;
    padding-left: 5px;
}
.dd-2749__team-avatar,
.dd-2749__team-more {
    width: 27px;
    height: 27px;
    margin-left: -5px;
    border-radius: 8px;
    border: 2px solid #101217;
    display: grid;
    place-items: center;
    font-size: 7px;
    font-weight: 700;
}
.dd-2749__team-one {
    background: #243c61;
    color: #bcd7ff;
}
.dd-2749__team-two {
    background: #3d294f;
    color: #dfc4ff;
}
.dd-2749__team-three {
    background: #294738;
    color: #b8f1cf;
}
.dd-2749__team-more {
    background: #242a33;
    color: #818a98;
}
.dd-2749__team-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}
.dd-2749__team-content strong {
    color: #dce0e5;
    font-size: 10px;
    font-weight: 600;
}
.dd-2749__team-content small {
    color: #68717f;
    font-size: 8px;
}
.dd-2749__team > i {
    margin-left: auto;
    color: #59616e;
    font-size: 15px;
}
.dd-2749__quick-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 7px;
}
.dd-2749__quick {
    height: 51px;
    padding: 5px 7px;
    border: 1px solid #222831;
    border-radius: 9px;
    background: #11141a;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #8e97a5;
    font: inherit;
    font-size: 9px;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__quick:hover {
    border-color: #333b46;
    background: #16191f;
    color: #fff;
    transform: translateY(-1px);
}
.dd-2749__quick-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: grid;
    place-items: center;
    font-size: 15px;
}
.dd-2749__quick-blue {
    color: #5da0ff;
    background: rgba(69,137,255,.1);
}
.dd-2749__quick-purple {
    color: #a774ff;
    background: rgba(150,90,255,.1);
}
.dd-2749__quick-green {
    color: #47d691;
    background: rgba(55,211,140,.09);
}
.dd-2749__quick-orange {
    color: #ffb454;
    background: rgba(255,171,67,.09);
}
.dd-2749__usage {
    margin: 10px 3px 2px;
    padding: 11px;
    border: 1px solid #252b34;
    border-radius: 10px;
    background: linear-gradient(145deg,#12151a,#0e1014);
}
.dd-2749__usage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8c95a3;
    font-size: 9px;
}
.dd-2749__usage-header span {
    display: flex;
    align-items: center;
    gap: 6px;
}
.dd-2749__usage-header i {
    color: #738091;
    font-size: 14px;
}
.dd-2749__usage-header strong {
    color: #d9dee5;
    font-size: 10px;
}
.dd-2749__usage-track {
    height: 5px;
    margin-top: 9px;
    background: #242a32;
    border-radius: 10px;
    overflow: hidden;
}
.dd-2749__usage-track > span {
    display: block;
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,#477dff,#7c5cff,#b35cff);
    box-shadow: 0 0 10px rgba(113,84,255,.25);
}
.dd-2749__usage-footer {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
}
.dd-2749__usage-footer small {
    color: #59616e;
    font-size: 8px;
}
.dd-2749__footer {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 1px 3px 3px;
}
.dd-2749__footer-item {
    height: 34px;
    width: 100%;
    padding: 0 8px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #717a88;
    display: flex;
    align-items: center;
    gap: 9px;
    font: inherit;
    font-size: 9px;
    text-align: left;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__footer-item i {
    width: 17px;
    text-align: center;
    font-size: 15px;
}
.dd-2749__footer-item:hover {
    color: #d7dbe1;
    background: rgba(255,255,255,.035);
}
.dd-2749__footer-profile {
    min-height: 48px;
    margin-top: 3px;
    padding: 5px 8px;
    border: 1px solid #242a32;
    border-radius: 9px;
    background: #11141a;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease;
}
.dd-2749__footer-profile:hover {
    background: #171a20;
    border-color: #343b46;
}
.dd-2749__footer-avatar {
    width: 29px;
    height: 29px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#303744,#1e232b);
    color: #cfd5dd;
    font-size: 8px;
    font-weight: 700;
}
.dd-2749__footer-profile-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}
.dd-2749__footer-profile-text strong {
    color: #dce0e5;
    font-size: 9px;
    font-weight: 600;
}
.dd-2749__footer-profile-text small {
    color: #626b78;
    font-size: 8px;
}
.dd-2749__footer-profile > i {
    margin-left: auto;
    color: #646e7b;
    font-size: 15px;
}
@keyframes dd-2749__livePulse {
    0%,100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(.65);
        opacity: .55;
    }
}
@media (max-width: 480px) {
    .dd-2749 {
        width: 100%;
        max-width: 330px;
    }
    .dd-2749__panel {
        max-height: 75vh;
    }
}
@media (prefers-reduced-motion: reduce) {
    .dd-2749__live span {
        animation: none;
    }
    .dd-2749__trigger,
    .dd-2749__item,
    .dd-2749__project,
    .dd-2749__team,
    .dd-2749__quick,
    .dd-2749__footer-item,
    .dd-2749__footer-profile {
        transition: none;
    }
}`,
  },
  {
    id: 2750,
    name: "Aurora Glass Dropdown",
    preview: (
      <div className="dropdown-2750">
        <button className="dropdown-2750__trigger">
          <span className="dropdown-2750__orb">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </span>
          Creative space<i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-2750__menu">
          <div className="dropdown-2750__shine"></div>
          <small>YOUR UNIVERSE</small>
          <button className="active">
            <i className="fa-solid fa-earth-americas"></i>
            <span>
              <strong>Aurora</strong>
              <em>12 collaborators</em>
            </span>
            <i className="fa-solid fa-check"></i>
          </button>
          <button>
            <i className="fa-solid fa-star"></i>
            <span>
              <strong>Starlight</strong>
              <em>4 new ideas</em>
            </span>
          </button>
          <button>
            <i className="fa-solid fa-moon"></i>
            <span>
              <strong>Afterglow</strong>
              <em>Private workspace</em>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">
        <span class="Dropdown-orb"><i class="fa-solid fa-wand-magic-sparkles"></i></span>
        Creative space
        <i class="fa-solid fa-chevron-down"></i>
    </button>
    <div class="Dropdown-menu">
        <small>YOUR UNIVERSE</small>
        <button class="active"><i class="fa-solid fa-earth-americas"></i><span><strong>Aurora</strong><em>12 collaborators</em></span><i class="fa-solid fa-check"></i></button>
        <button><i class="fa-solid fa-star"></i><span><strong>Starlight</strong><em>4 new ideas</em></span></button>
        <button><i class="fa-solid fa-moon"></i><span><strong>Afterglow</strong><em>Private workspace</em></span></button>
    </div>
</div>`,
    css: `.Dropdown { width: 260px; }
.Dropdown-trigger { width: 100%; display: flex; align-items: center; gap: 9px; padding: 9px; border: 1px solid rgba(255,255,255,.45); border-radius: 14px; background: linear-gradient(135deg,rgba(255,255,255,.74),rgba(232,222,255,.62)); backdrop-filter: blur(14px); }
.Dropdown-orb { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 9px; background: linear-gradient(135deg,#7c3aed,#ec4899); color: white; }
.Dropdown-menu { margin-top: 7px; padding: 7px; border: 1px solid rgba(255,255,255,.55); border-radius: 15px; background: rgba(250,248,255,.76); backdrop-filter: blur(18px); }
.Dropdown-menu button { width: 100%; display: flex; align-items: center; gap: 9px; padding: 8px; border: 0; border-radius: 10px; background: transparent; }
.Dropdown-menu button.active { background: rgba(124,58,237,.12); }`,
  },
  {
    id: 2751,
    name: "Studio Mega Menu",
    preview: (
      <div className="dropdown-2751">
        <button className="dropdown-2751__trigger">
          Explore studio <i className="fa-solid fa-arrow-down"></i>
        </button>
        <div className="dropdown-2751__menu">
          <div className="dropdown-2751__feature">
            <span>
              <i className="fa-solid fa-sparkles"></i>
            </span>
            <div>
              <small>NEW RELEASE</small>
              <strong>Design systems, made social.</strong>
              <em>
                Meet the collaborative canvas{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </em>
            </div>
          </div>
          <div className="dropdown-2751__links">
            <div>
              <small>CREATE</small>
              <a href="#">
                <i className="fa-solid fa-pen-ruler"></i>Templates
              </a>
              <a href="#">
                <i className="fa-solid fa-cubes"></i>Components
              </a>
            </div>
            <div>
              <small>CONNECT</small>
              <a href="#">
                <i className="fa-solid fa-users"></i>Community
              </a>
              <a href="#">
                <i className="fa-solid fa-book-open"></i>Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger">Explore studio <i class="fa-solid fa-arrow-down"></i></button>
    <div class="Dropdown-menu">
        <div class="Dropdown-feature"><span><i class="fa-solid fa-sparkles"></i></span><div><small>NEW RELEASE</small><strong>Design systems, made social.</strong><em>Meet the collaborative canvas <i class="fa-solid fa-arrow-right"></i></em></div></div>
        <div class="Dropdown-links"><div><small>CREATE</small><a href="#"><i class="fa-solid fa-pen-ruler"></i>Templates</a><a href="#"><i class="fa-solid fa-cubes"></i>Components</a></div><div><small>CONNECT</small><a href="#"><i class="fa-solid fa-users"></i>Community</a><a href="#"><i class="fa-solid fa-book-open"></i>Resources</a></div></div>
    </div>
</div>`,
    css: `.Dropdown { width: 330px; }
.Dropdown-trigger { border: 0; background: transparent; font: inherit; font-size: 11px; font-weight: 700; }
.Dropdown-menu { margin-top: 10px; padding: 8px; border: 1px solid #e8e8ef; border-radius: 16px; background: white; box-shadow: 0 20px 42px rgba(31,25,61,.13); }
.Dropdown-feature { padding: 13px; border-radius: 11px; background: #151226; color: white; display: flex; gap: 10px; }
.Dropdown-links { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; padding: 13px 8px 5px; }
.Dropdown-links a { display: block; margin-top: 9px; color: #55515f; text-decoration: none; font-size: 9px; }`,
  },
  {
    id: 2752,
    name: "Gradient Profile Dropdown",
    preview: (
      <div className="dropdown-2752">
        <button className="dropdown-2752__trigger">
          <span className="dropdown-2752__avatar">ML</span>
          <span>
            Marie Laurent<small>Pro member</small>
          </span>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <div className="dropdown-2752__menu">
          <div className="dropdown-2752__cover"></div>
          <div className="dropdown-2752__identity">
            <span>ML</span>
            <div>
              <strong>Marie Laurent</strong>
              <small>marie@atelier.co</small>
            </div>
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="dropdown-2752__stats">
            <span>
              <strong>24</strong>Projects
            </span>
            <span>
              <strong>1.8k</strong>Followers
            </span>
            <span>
              <strong>96%</strong>Score
            </span>
          </div>
          <a href="#">
            <i className="fa-regular fa-user"></i>View profile
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <button>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>Switch
            account
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger"><span class="Dropdown-avatar">ML</span><span>Marie Laurent<small>Pro member</small></span><i class="fa-solid fa-ellipsis"></i></button>
    <div class="Dropdown-menu"><div class="Dropdown-cover"></div><div class="Dropdown-identity"><span>ML</span><div><strong>Marie Laurent</strong><small>marie@atelier.co</small></div><i class="fa-solid fa-circle-check"></i></div><div class="Dropdown-stats"><span><strong>24</strong>Projects</span><span><strong>1.8k</strong>Followers</span><span><strong>96%</strong>Score</span></div><a href="#"><i class="fa-regular fa-user"></i>View profile<i class="fa-solid fa-arrow-right"></i></a><button><i class="fa-solid fa-arrow-right-from-bracket"></i>Switch account</button></div>
</div>`,
    css: `.Dropdown { width: 255px; }
.Dropdown-trigger { width: 100%; display: flex; align-items: center; gap: 9px; padding: 7px; border: 1px solid #eeeaf5; border-radius: 13px; background: white; }
.Dropdown-avatar,.Dropdown-identity > span { display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg,#ff8a5b,#db2777); color: white; font-weight: 800; }
.Dropdown-menu { margin-top: 7px; overflow: hidden; border: 1px solid #eeeaf5; border-radius: 15px; background: white; box-shadow: 0 18px 36px rgba(46,25,76,.12); }
.Dropdown-cover { height: 48px; background: linear-gradient(120deg,#fb7185,#a855f7,#38bdf8); }
.Dropdown-identity,.Dropdown-menu a,.Dropdown-menu button { display: flex; align-items: center; gap: 8px; padding: 9px 12px; }`,
  },
  {
    id: 2753,
    name: "Spotlight Command Dropdown",
    preview: (
      <div className="dropdown-2753">
        <button className="dropdown-2753__trigger">
          <i className="fa-solid fa-terminal"></i>Jump to anything{" "}
          <kbd>⌘ K</kbd>
        </button>
        <div className="dropdown-2753__menu">
          <div className="dropdown-2753__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search commands...</span>
            <kbd>ESC</kbd>
          </div>
          <small>SUGGESTED</small>
          <button className="active">
            <span className="dropdown-2753__icon purple">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </span>
            <span>
              <strong>Generate with AI</strong>
              <em>Draft something brilliant</em>
            </span>
            <kbd>G</kbd>
          </button>
          <button>
            <span className="dropdown-2753__icon blue">
              <i className="fa-solid fa-file-circle-plus"></i>
            </span>
            <span>
              <strong>New project</strong>
              <em>Start from a blank canvas</em>
            </span>
            <kbd>N</kbd>
          </button>
          <button>
            <span className="dropdown-2753__icon orange">
              <i className="fa-solid fa-user-plus"></i>
            </span>
            <span>
              <strong>Invite people</strong>
              <em>Grow your workspace</em>
            </span>
            <kbd>I</kbd>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger"><i class="fa-solid fa-terminal"></i>Jump to anything <kbd>⌘ K</kbd></button>
    <div class="Dropdown-menu"><div class="Dropdown-search"><i class="fa-solid fa-magnifying-glass"></i><span>Search commands...</span><kbd>ESC</kbd></div><small>SUGGESTED</small><button class="active"><span class="Dropdown-icon purple"><i class="fa-solid fa-wand-magic-sparkles"></i></span><span><strong>Generate with AI</strong><em>Draft something brilliant</em></span><kbd>G</kbd></button><button><span class="Dropdown-icon blue"><i class="fa-solid fa-file-circle-plus"></i></span><span><strong>New project</strong><em>Start from a blank canvas</em></span><kbd>N</kbd></button></div>
</div>`,
    css: `.Dropdown { width: 290px; }
.Dropdown-trigger,.Dropdown-search { display: flex; align-items: center; gap: 8px; }
.Dropdown-trigger { width: 100%; padding: 9px 10px; border: 1px solid #30323c; border-radius: 10px; background: #171820; color: #bec1cd; }
.Dropdown-menu { margin-top: 7px; padding: 7px; border: 1px solid #30323c; border-radius: 13px; background: #171820; color: white; box-shadow: 0 20px 35px rgba(0,0,0,.25); }
.Dropdown-search { padding: 9px; border-bottom: 1px solid #30323c; color: #797d8c; }.Dropdown-menu > small { display: block; padding: 10px 8px 5px; color: #727685; font-size: 7px; letter-spacing: 1px; }
.Dropdown-menu button { width: 100%; display: flex; align-items: center; gap: 8px; padding: 7px; border: 0; border-radius: 8px; background: transparent; color: white; text-align: left; }.Dropdown-menu button.active,.Dropdown-menu button:hover { background: #292b36; }`,
  },
  {
    id: 2754,
    name: "Activity Notification Dropdown",
    preview: (
      <div className="dropdown-2754">
        <button className="dropdown-2754__trigger">
          <i className="fa-regular fa-bell"></i>
          <span></span>
        </button>
        <div className="dropdown-2754__menu">
          <div className="dropdown-2754__header">
            <div>
              <small>INBOX</small>
              <strong>Activity</strong>
            </div>
            <button>Mark read</button>
          </div>
          <div className="dropdown-2754__item unread">
            <span className="dropdown-2754__photo one">SK</span>
            <div>
              <strong>Sofia liked your concept</strong>
              <small>“Aurora landing page” · 2m</small>
            </div>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="dropdown-2754__item">
            <span className="dropdown-2754__photo two">JD</span>
            <div>
              <strong>Jon left a comment</strong>
              <small>“This is looking incredible!” · 1h</small>
            </div>
            <i className="fa-regular fa-comment"></i>
          </div>
          <div className="dropdown-2754__item">
            <span className="dropdown-2754__photo three">
              <i className="fa-solid fa-rocket"></i>
            </span>
            <div>
              <strong>Version 2.4 shipped</strong>
              <small>Everything is running smoothly · 3h</small>
            </div>
            <i className="fa-solid fa-check"></i>
          </div>
          <a href="#">
            Open activity center <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger"><i class="fa-regular fa-bell"></i><span></span></button>
    <div class="Dropdown-menu"><div class="Dropdown-header"><div><small>INBOX</small><strong>Activity</strong></div><button>Mark read</button></div><div class="Dropdown-item unread"><span class="Dropdown-photo one">SK</span><div><strong>Sofia liked your concept</strong><small>“Aurora landing page” · 2m</small></div><i class="fa-solid fa-heart"></i></div><div class="Dropdown-item"><span class="Dropdown-photo two">JD</span><div><strong>Jon left a comment</strong><small>“This is looking incredible!” · 1h</small></div><i class="fa-regular fa-comment"></i></div><a href="#">Open activity center <i class="fa-solid fa-arrow-right"></i></a></div>
</div>`,
    css: `.Dropdown { width: 300px; }.Dropdown-trigger { position: relative; width: 42px; height: 42px; border: 0; border-radius: 13px; background: #171b2d; color: white; }.Dropdown-trigger > span { position: absolute; top: 8px; right: 9px; width: 7px; height: 7px; border: 2px solid #171b2d; border-radius: 50%; background: #fb7185; }.Dropdown-menu { margin-top: 8px; padding: 7px; border: 1px solid #e8e9f1; border-radius: 15px; background: white; box-shadow: 0 18px 40px rgba(25,31,65,.13); }.Dropdown-item { display: flex; align-items: center; gap: 9px; padding: 9px; border-radius: 10px; }.Dropdown-item.unread { background: #f5f7ff; }.Dropdown-photo { width: 29px; height: 29px; display: grid; place-items: center; border-radius: 9px; color: white; font-size: 8px; font-weight: 700; }`,
  },
  {
    id: 2755,
    name: "Nested Project Dropdown",
    preview: (
      <div className="dropdown-2755">
        <button className="dropdown-2755__trigger">
          <span>
            <i className="fa-solid fa-layer-group"></i>
          </span>
          Project actions<i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="dropdown-2755__menu">
          <button>
            <i className="fa-regular fa-pen-to-square"></i>Edit project{" "}
            <kbd>E</kbd>
          </button>
          <button>
            <i className="fa-solid fa-user-group"></i>Manage team{" "}
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="dropdown-2755__submenu">
            <small>TEAM ACCESS</small>
            <button>
              <i className="fa-solid fa-user-plus"></i>Invite member
            </button>
            <button>
              <i className="fa-solid fa-shield-halved"></i>Permissions
            </button>
          </div>
          <button>
            <i className="fa-solid fa-box-archive"></i>Archive project
          </button>
          <div className="dropdown-2755__divider"></div>
          <button className="dropdown-2755__danger">
            <i className="fa-regular fa-trash-can"></i>Delete project
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown">
    <button class="Dropdown-trigger"><span><i class="fa-solid fa-layer-group"></i></span>Project actions<i class="fa-solid fa-chevron-down"></i></button>
    <div class="Dropdown-menu"><button><i class="fa-regular fa-pen-to-square"></i>Edit project <kbd>E</kbd></button><button><i class="fa-solid fa-user-group"></i>Manage team <i class="fa-solid fa-chevron-right"></i></button><div class="Dropdown-submenu"><small>TEAM ACCESS</small><button><i class="fa-solid fa-user-plus"></i>Invite member</button><button><i class="fa-solid fa-shield-halved"></i>Permissions</button></div><button><i class="fa-solid fa-box-archive"></i>Archive project</button><div class="Dropdown-divider"></div><button class="Dropdown-danger"><i class="fa-regular fa-trash-can"></i>Delete project</button></div>
</div>`,
    css: `.Dropdown { width: 265px; }.Dropdown-trigger { width: 100%; display: flex; align-items: center; gap: 8px; padding: 8px; border: 1px solid #dbe5e3; border-radius: 11px; background: white; color: #253331; }.Dropdown-trigger > span { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 7px; background: #dff7ee; color: #0d8a62; }.Dropdown-trigger > i:last-child { margin-left: auto; }.Dropdown-menu { margin-top: 7px; padding: 6px; border: 1px solid #dbe5e3; border-radius: 13px; background: white; box-shadow: 0 15px 30px rgba(21,66,55,.1); }.Dropdown-menu > button,.Dropdown-submenu button { width: 100%; display: flex; align-items: center; gap: 8px; padding: 8px; border: 0; border-radius: 7px; background: transparent; color: #455553; text-align: left; }.Dropdown-submenu { margin: 3px 0; padding: 5px; border-left: 2px solid #66d5aa; background: #f4fbf8; }.Dropdown-danger { color: #dc4a4a !important; }`,
  },
  {
    id: 3639,
    name: "Dark Actions Dropdown",
    scriptId: 3639,
    preview: (
      <div className="Dropdown3639" data-dropdown-root data-dropdown-id="3639">
        <button
          className="Dropdown3639-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3639-icon">
            <i className="ri-more-fill"></i>
          </span>

          <span className="Dropdown3639-copy">
            <strong>Actions</strong>
            <small>Manage this item</small>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3639-chevron"></i>
        </button>

        <div className="Dropdown3639-menu" data-dropdown-menu>
          <button
            className="Dropdown3639-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-edit-line"></i>
            <span>Edit</span>
          </button>

          <button
            className="Dropdown3639-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-file-copy-line"></i>
            <span>Duplicate</span>
          </button>

          <button
            className="Dropdown3639-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-share-line"></i>
            <span>Share</span>
          </button>

          <div className="Dropdown3639-separator"></div>

          <button
            className="Dropdown3639-option Dropdown3639-danger"
            data-dropdown-option
            type="button"
          >
            <i className="ri-delete-bin-line"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon">
            <i class="ri-more-fill"></i>
        </span>

        <span class="Dropdown-copy">
            <strong>Actions</strong>
            <small>Manage this item</small>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-edit-line"></i>
            <span>Edit</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-file-copy-line"></i>
            <span>Duplicate</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-share-line"></i>
            <span>Share</span>
        </button>

        <div class="Dropdown-separator"></div>

        <button class="Dropdown-option Dropdown-danger" data-dropdown-option type="button">
            <i class="ri-delete-bin-line"></i>
            <span>Delete</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 250px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 46px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #2c313b;
    border-radius: 11px;
    background: #111318;
    color: #f4f4f5;
    cursor: pointer;
}

.Dropdown-icon {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(139, 92, 246, .13);
    color: #a78bfa;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy strong {
    font-size: 12px;
}

.Dropdown-copy small {
    margin-top: 2px;
    color: #858b96;
    font-size: 9px;
}

.Dropdown-chevron {
    color: #858b96;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    left: 0;
    top: calc(100% + 7px);
    padding: 6px;
    visibility: hidden;
    border: 1px solid #2c313b;
    border-radius: 11px;
    background: #171a20;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 36px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #e4e4e7;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #20242c;
}

.Dropdown-option i {
    color: #858b96;
}

.Dropdown-separator {
    height: 1px;
    margin: 5px 0;
    background: #2c313b;
}

.Dropdown-danger {
    color: #f87171;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = dropdown.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
    }
});`,
  },
  {
    id: 3640,
    name: "Profile Account Dropdown",
    scriptId: 3640,
    preview: (
      <div className="Dropdown3640" data-dropdown-root data-dropdown-id="3640">
        <button
          className="Dropdown3640-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3640-avatar">AB</span>

          <span className="Dropdown3640-copy">
            <strong>Andre</strong>
            <small>andre@example.com</small>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3640-chevron"></i>
        </button>

        <div className="Dropdown3640-menu" data-dropdown-menu>
          <div className="Dropdown3640-header">
            <span className="Dropdown3640-avatar Dropdown3640-avatar-large">
              AB
            </span>

            <span>
              <strong>Andre</strong>
              <small>Personal account</small>
            </span>
          </div>

          <div className="Dropdown3640-separator"></div>

          <button
            className="Dropdown3640-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-user-line"></i>
            Profile
          </button>

          <button
            className="Dropdown3640-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-settings-3-line"></i>
            Settings
          </button>

          <button
            className="Dropdown3640-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-bank-card-line"></i>
            Billing
          </button>

          <div className="Dropdown3640-separator"></div>

          <button
            className="Dropdown3640-option Dropdown3640-danger"
            data-dropdown-option
            type="button"
          >
            <i className="ri-logout-box-r-line"></i>
            Sign out
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-avatar">AB</span>

        <span class="Dropdown-copy">
            <strong>Andre</strong>
            <small>andre@example.com</small>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <span class="Dropdown-avatar Dropdown-avatar-large">AB</span>

            <span>
                <strong>Andre</strong>
                <small>Personal account</small>
            </span>
        </div>

        <div class="Dropdown-separator"></div>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-user-line"></i>
            Profile
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-settings-3-line"></i>
            Settings
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-bank-card-line"></i>
            Billing
        </button>

        <div class="Dropdown-separator"></div>

        <button class="Dropdown-option Dropdown-danger" data-dropdown-option type="button">
            <i class="ri-logout-box-r-line"></i>
            Sign out
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 260px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 50px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    color: #18181b;
    cursor: pointer;
}

.Dropdown-avatar {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #2563eb;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
}

.Dropdown-avatar-large {
    width: 38px;
    height: 38px;
}

.Dropdown-copy {
    min-width: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy strong {
    font-size: 12px;
}

.Dropdown-copy small {
    max-width: 155px;
    margin-top: 2px;
    overflow: hidden;
    color: #a1a1aa;
    font-size: 9px;
    text-overflow: ellipsis;
}

.Dropdown-chevron {
    color: #a1a1aa;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 18px 40px rgba(24, 24, 27, .12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 7px;
    display: flex;
    align-items: center;
    gap: 9px;
}

.Dropdown-header > span:last-child {
    display: flex;
    flex-direction: column;
}

.Dropdown-header strong {
    font-size: 11px;
}

.Dropdown-header small {
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}

.Dropdown-separator {
    height: 1px;
    margin: 5px 0;
    background: #f0f0f2;
}

.Dropdown-option {
    width: 100%;
    min-height: 35px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #3f3f46;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #f4f4f5;
}

.Dropdown-option i {
    color: #71717a;
}

.Dropdown-danger {
    color: #dc2626;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3641,
    name: "Sort Select Dropdown",
    scriptId: 3641,
    preview: (
      <div
        className="Dropdown3641"
        data-dropdown-root
        data-dropdown-id="3641"
        data-dropdown-select
      >
        <button
          className="Dropdown3641-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-sort-desc Dropdown3641-sort"></i>

          <span data-dropdown-label>Newest first</span>

          <i className="ri-arrow-down-s-line Dropdown3641-chevron"></i>
        </button>

        <div className="Dropdown3641-menu" data-dropdown-menu>
          <button
            className="Dropdown3641-option is-selected"
            data-dropdown-option
            data-label="Newest first"
            type="button"
          >
            <i className="ri-time-line"></i>
            <span>Newest first</span>
            <i className="ri-check-line Dropdown3641-check"></i>
          </button>

          <button
            className="Dropdown3641-option"
            data-dropdown-option
            data-label="Oldest first"
            type="button"
          >
            <i className="ri-history-line"></i>
            <span>Oldest first</span>
            <i className="ri-check-line Dropdown3641-check"></i>
          </button>

          <button
            className="Dropdown3641-option"
            data-dropdown-option
            data-label="Name A-Z"
            type="button"
          >
            <i className="ri-sort-alphabet-asc"></i>
            <span>Name A-Z</span>
            <i className="ri-check-line Dropdown3641-check"></i>
          </button>

          <button
            className="Dropdown3641-option"
            data-dropdown-option
            data-label="Name Z-A"
            type="button"
          >
            <i className="ri-sort-alphabet-desc"></i>
            <span>Name Z-A</span>
            <i className="ri-check-line Dropdown3641-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-sort-desc Dropdown-sort"></i>
        <span data-dropdown-label>Newest first</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Newest first" type="button">
            <i class="ri-time-line"></i>
            <span>Newest first</span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Oldest first" type="button">
            <i class="ri-history-line"></i>
            <span>Oldest first</span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Name A-Z" type="button">
            <i class="ri-sort-alphabet-asc"></i>
            <span>Name A-Z</span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Name Z-A" type="button">
            <i class="ri-sort-alphabet-desc"></i>
            <span>Name Z-A</span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 225px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 43px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #ffffff;
    color: #27272a;
    cursor: pointer;
}

.Dropdown-sort {
    color: #52525b;
    font-size: 16px;
}

.Dropdown-chevron {
    margin-left: auto;
    color: #a1a1aa;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 6px);
    left: 0;
    padding: 5px;
    visibility: hidden;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #ffffff;
    box-shadow: 0 14px 35px rgba(0, 0, 0, .1);
    opacity: 0;
    transform: translateY(-4px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    height: 36px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: #52525b;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #f4f4f5;
}

.Dropdown-option > span {
    flex: 1;
    text-align: left;
}

.Dropdown-check {
    visibility: hidden;
    color: #18181b;
}

.Dropdown-option.is-selected {
    color: #18181b;
    background: #f4f4f5;
}

.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3642,
    name: "Project Status Dropdown",
    scriptId: 3642,
    preview: (
      <div
        className="Dropdown3642"
        data-dropdown-root
        data-dropdown-id="3642"
        data-dropdown-select
      >
        <button
          className="Dropdown3642-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3642-status"></span>

          <span data-dropdown-label>In progress</span>

          <i className="ri-arrow-down-s-line Dropdown3642-chevron"></i>
        </button>

        <div className="Dropdown3642-menu" data-dropdown-menu>
          <button
            className="Dropdown3642-option"
            data-dropdown-option
            data-label="Backlog"
            type="button"
          >
            <span className="Dropdown3642-dot Dropdown3642-dot-gray"></span>
            Backlog
          </button>

          <button
            className="Dropdown3642-option is-selected"
            data-dropdown-option
            data-label="In progress"
            type="button"
          >
            <span className="Dropdown3642-dot Dropdown3642-dot-green"></span>
            In progress
          </button>

          <button
            className="Dropdown3642-option"
            data-dropdown-option
            data-label="In review"
            type="button"
          >
            <span className="Dropdown3642-dot Dropdown3642-dot-yellow"></span>
            In review
          </button>

          <button
            className="Dropdown3642-option"
            data-dropdown-option
            data-label="Completed"
            type="button"
          >
            <span className="Dropdown3642-dot Dropdown3642-dot-blue"></span>
            Completed
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-status"></span>
        <span data-dropdown-label>In progress</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-label="Backlog" type="button">
            <span class="Dropdown-dot Dropdown-dot-gray"></span>
            Backlog
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="In progress" type="button">
            <span class="Dropdown-dot Dropdown-dot-green"></span>
            In progress
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="In review" type="button">
            <span class="Dropdown-dot Dropdown-dot-yellow"></span>
            In review
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Completed" type="button">
            <span class="Dropdown-dot Dropdown-dot-blue"></span>
            Completed
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 225px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #244134;
    border-radius: 10px;
    background: #0c1713;
    color: #ecfdf5;
    cursor: pointer;
}

.Dropdown-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 8px rgba(52, 211, 153, .6);
}

.Dropdown-chevron {
    margin-left: auto;
    color: #779487;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #244134;
    border-radius: 10px;
    background: #102019;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .28);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #b8d6c7;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #172b22;
    color: #ecfdf5;
}

.Dropdown-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.Dropdown-dot-gray {
    background: #94a3b8;
}

.Dropdown-dot-green {
    background: #34d399;
}

.Dropdown-dot-yellow {
    background: #facc15;
}

.Dropdown-dot-blue {
    background: #60a5fa;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");
const currentDot = dropdown.querySelector(".Dropdown-status");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;

        const optionDot = option.querySelector(".Dropdown-dot");

        if (optionDot) {
            currentDot.style.backgroundColor =
                getComputedStyle(optionDot).backgroundColor;
        }

        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3643,
    name: "Multi Filter Dropdown",
    scriptId: 3643,
    preview: (
      <div
        className="Dropdown3643"
        data-dropdown-root
        data-dropdown-id="3643"
        data-dropdown-multi
      >
        <button
          className="Dropdown3643-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-filter-3-line"></i>

          <span>Filters</span>

          <span className="Dropdown3643-count" data-dropdown-count>
            2
          </span>

          <i className="ri-arrow-down-s-line Dropdown3643-chevron"></i>
        </button>

        <div className="Dropdown3643-menu" data-dropdown-menu>
          <div className="Dropdown3643-header">
            <strong>Categories</strong>
            <small>Select multiple</small>
          </div>

          <button
            className="Dropdown3643-option is-selected"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" defaultChecked />
            <span>Design</span>
          </button>

          <button
            className="Dropdown3643-option is-selected"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" defaultChecked />
            <span>Development</span>
          </button>

          <button
            className="Dropdown3643-option"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" />
            <span>Marketing</span>
          </button>

          <button
            className="Dropdown3643-option"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" />
            <span>Research</span>
          </button>

          <button
            className="Dropdown3643-apply"
            data-dropdown-close
            type="button"
          >
            Apply filters
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-filter-3-line"></i>
        <span>Filters</span>
        <span class="Dropdown-count" data-dropdown-count>2</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <strong>Categories</strong>
            <small>Select multiple</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <input type="checkbox" checked>
            <span>Design</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <input type="checkbox" checked>
            <span>Development</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <input type="checkbox">
            <span>Marketing</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <input type="checkbox">
            <span>Research</span>
        </button>

        <button class="Dropdown-apply" data-dropdown-close type="button">
            Apply filters
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 240px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #43331b;
    border-radius: 10px;
    background: #17120c;
    color: #fff7ed;
    cursor: pointer;
}

.Dropdown-count {
    min-width: 20px;
    height: 20px;
    margin-left: auto;
    padding: 0 5px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: rgba(245, 158, 11, .13);
    color: #fbbf24;
    font-size: 10px;
    font-weight: 700;
}

.Dropdown-chevron {
    color: #a98f72;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #43331b;
    border-radius: 11px;
    background: #20180d;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Dropdown-header strong {
    font-size: 11px;
}

.Dropdown-header small {
    color: #a98f72;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    height: 36px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #f5e6d0;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #2c2111;
}

.Dropdown-option input {
    width: 14px;
    height: 14px;
    margin: 0;
    accent-color: #f59e0b;
    pointer-events: none;
}

.Dropdown-apply {
    width: 100%;
    height: 35px;
    margin-top: 7px;
    border: 0;
    border-radius: 7px;
    background: #f59e0b;
    color: #20180d;
    font-weight: 700;
    cursor: pointer;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");
const closeButton = dropdown.querySelector("[data-dropdown-close]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();

        option.classList.toggle("is-selected");

        const checkbox = option.querySelector('input[type="checkbox"]');

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

closeButton.addEventListener("click", () => {
    dropdown.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3644,
    name: "Technology Tags Dropdown",
    scriptId: 3644,
    preview: (
      <div
        className="Dropdown3644"
        data-dropdown-root
        data-dropdown-id="3644"
        data-dropdown-multi
      >
        <button
          className="Dropdown3644-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-price-tag-3-line"></i>

          <span>Technologies</span>

          <span className="Dropdown3644-count" data-dropdown-count>
            1
          </span>

          <i className="ri-arrow-down-s-line Dropdown3644-chevron"></i>
        </button>

        <div className="Dropdown3644-menu" data-dropdown-menu>
          <button
            className="Dropdown3644-option is-selected"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" defaultChecked />
            <span>React</span>
            <small>Frontend</small>
          </button>

          <button
            className="Dropdown3644-option"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" />
            <span>TypeScript</span>
            <small>Language</small>
          </button>

          <button
            className="Dropdown3644-option"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" />
            <span>Node.js</span>
            <small>Backend</small>
          </button>

          <button
            className="Dropdown3644-option"
            data-dropdown-option
            type="button"
          >
            <input type="checkbox" />
            <span>CSS</span>
            <small>Styling</small>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-price-tag-3-line"></i>
        <span>Technologies</span>
        <span class="Dropdown-count" data-dropdown-count>1</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <input type="checkbox" checked>
            <span>React</span>
            <small>Frontend</small>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <input type="checkbox">
            <span>TypeScript</span>
            <small>Language</small>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <input type="checkbox">
            <span>Node.js</span>
            <small>Backend</small>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <input type="checkbox">
            <span>CSS</span>
            <small>Styling</small>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 245px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #41295d;
    border-radius: 10px;
    background: #15101d;
    color: #faf5ff;
    cursor: pointer;
}

.Dropdown-count {
    min-width: 20px;
    height: 20px;
    margin-left: auto;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: rgba(192, 132, 252, .14);
    color: #d8b4fe;
    font-size: 10px;
    font-weight: 700;
}

.Dropdown-chevron {
    color: #a48bb9;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #41295d;
    border-radius: 11px;
    background: #1d1429;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .28);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 40px;
    padding: 0 9px;
    display: grid;
    grid-template-columns: 15px 1fr auto;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #f5e9ff;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #2a1c3a;
}

.Dropdown-option input {
    width: 14px;
    height: 14px;
    margin: 0;
    accent-color: #c084fc;
    pointer-events: none;
}

.Dropdown-option span {
    text-align: left;
}

.Dropdown-option small {
    color: #a48bb9;
    font-size: 9px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();

        option.classList.toggle("is-selected");

        const checkbox = option.querySelector("input");

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3645,
    name: "Notifications Dropdown",
    scriptId: 3645,
    preview: (
      <div className="Dropdown3645" data-dropdown-root data-dropdown-id="3645">
        <button
          className="Dropdown3645-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3645-bell">
            <i className="ri-notification-3-line"></i>
            <span>3</span>
          </span>

          <span>Notifications</span>

          <i className="ri-arrow-down-s-line Dropdown3645-chevron"></i>
        </button>

        <div className="Dropdown3645-menu" data-dropdown-menu>
          <div className="Dropdown3645-header">
            <strong>Notifications</strong>
            <small>3 unread</small>
          </div>

          <button
            className="Dropdown3645-option"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3645-dot"></span>

            <span>
              <strong>New comment</strong>
              <small>Joshua commented on your project</small>
            </span>
          </button>

          <button
            className="Dropdown3645-option"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3645-dot"></span>

            <span>
              <strong>Deploy complete</strong>
              <small>Your new build is now live</small>
            </span>
          </button>

          <button
            className="Dropdown3645-option"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3645-dot"></span>

            <span>
              <strong>New team member</strong>
              <small>Alex joined the workspace</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-bell">
            <i class="ri-notification-3-line"></i>
            <span>3</span>
        </span>

        <span>Notifications</span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <strong>Notifications</strong>
            <small>3 unread</small>
        </div>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-dot"></span>

            <span>
                <strong>New comment</strong>
                <small>Joshua commented on your project</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-dot"></span>

            <span>
                <strong>Deploy complete</strong>
                <small>Your new build is now live</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-dot"></span>

            <span>
                <strong>New team member</strong>
                <small>Alex joined the workspace</small>
            </span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 275px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 46px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #293d57;
    border-radius: 11px;
    background: #0e1622;
    color: #eff6ff;
    cursor: pointer;
}

.Dropdown-bell {
    position: relative;
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(96, 165, 250, .12);
    color: #60a5fa;
}

.Dropdown-bell > span {
    position: absolute;
    width: 15px;
    height: 15px;
    right: -5px;
    top: -5px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #3b82f6;
    color: #ffffff;
    font-size: 8px;
    font-weight: 700;
}

.Dropdown-chevron {
    margin-left: auto;
    color: #7f9ab8;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #293d57;
    border-radius: 11px;
    background: #111c2b;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Dropdown-header strong {
    font-size: 11px;
}

.Dropdown-header small {
    color: #7f9ab8;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    min-height: 54px;
    padding: 8px;
    display: flex;
    align-items: flex-start;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #eff6ff;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #18263a;
}

.Dropdown-dot {
    width: 7px;
    height: 7px;
    margin-top: 4px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #60a5fa;
}

.Dropdown-option > span:last-child {
    display: flex;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 3px;
    color: #7f9ab8;
    font-size: 8px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3646,
    name: "Language Dropdown",
    scriptId: 3646,
    preview: (
      <div
        className="Dropdown3646"
        data-dropdown-root
        data-dropdown-id="3646"
        data-dropdown-select
      >
        <button
          className="Dropdown3646-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-global-line"></i>

          <span data-dropdown-label>English</span>

          <i className="ri-arrow-down-s-line Dropdown3646-chevron"></i>
        </button>

        <div className="Dropdown3646-menu" data-dropdown-menu>
          <button
            className="Dropdown3646-option is-selected"
            data-dropdown-option
            data-label="English"
            type="button"
          >
            <span>EN</span>
            <strong>English</strong>
          </button>

          <button
            className="Dropdown3646-option"
            data-dropdown-option
            data-label="Nederlands"
            type="button"
          >
            <span>NL</span>
            <strong>Nederlands</strong>
          </button>

          <button
            className="Dropdown3646-option"
            data-dropdown-option
            data-label="Deutsch"
            type="button"
          >
            <span>DE</span>
            <strong>Deutsch</strong>
          </button>

          <button
            className="Dropdown3646-option"
            data-dropdown-option
            data-label="Français"
            type="button"
          >
            <span>FR</span>
            <strong>Français</strong>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-global-line"></i>
        <span data-dropdown-label>English</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="English" type="button">
            <span>EN</span>
            <strong>English</strong>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Nederlands" type="button">
            <span>NL</span>
            <strong>Nederlands</strong>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Deutsch" type="button">
            <span>DE</span>
            <strong>Deutsch</strong>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Français" type="button">
            <span>FR</span>
            <strong>Français</strong>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 220px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #dbe3ed;
    border-radius: 10px;
    background: #f8fafc;
    color: #0f172a;
    cursor: pointer;
}

.Dropdown-trigger > i:first-child {
    color: #0284c7;
}

.Dropdown-chevron {
    margin-left: auto;
    color: #64748b;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #dbe3ed;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 16px 34px rgba(15, 23, 42, .1);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    height: 38px;
    padding: 0 9px;
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #334155;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f1f5f9;
}

.Dropdown-option > span {
    color: #0284c7;
    font-size: 9px;
    font-weight: 700;
}

.Dropdown-option strong {
    font-size: 11px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3647,
    name: "Theme Selector Dropdown",
    scriptId: 3647,
    preview: (
      <div
        className="Dropdown3647"
        data-dropdown-root
        data-dropdown-id="3647"
        data-dropdown-select
      >
        <button
          className="Dropdown3647-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-contrast-2-line"></i>

          <span data-dropdown-label>System</span>

          <i className="ri-arrow-down-s-line Dropdown3647-chevron"></i>
        </button>

        <div className="Dropdown3647-menu" data-dropdown-menu>
          <button
            className="Dropdown3647-option is-selected"
            data-dropdown-option
            data-label="System"
            type="button"
          >
            <span className="Dropdown3647-system"></span>
            <span>System</span>
          </button>

          <button
            className="Dropdown3647-option"
            data-dropdown-option
            data-label="Light"
            type="button"
          >
            <span className="Dropdown3647-light"></span>
            <span>Light</span>
          </button>

          <button
            className="Dropdown3647-option"
            data-dropdown-option
            data-label="Dark"
            type="button"
          >
            <span className="Dropdown3647-dark"></span>
            <span>Dark</span>
          </button>

          <button
            className="Dropdown3647-option"
            data-dropdown-option
            data-label="Dim"
            type="button"
          >
            <span className="Dropdown3647-dim"></span>
            <span>Dim</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-contrast-2-line"></i>
        <span data-dropdown-label>System</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="System" type="button">
            <span class="Dropdown-system"></span>
            <span>System</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Light" type="button">
            <span class="Dropdown-light"></span>
            <span>Light</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Dark" type="button">
            <span class="Dropdown-dark"></span>
            <span>Dark</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Dim" type="button">
            <span class="Dropdown-dim"></span>
            <span>Dim</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 220px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #303030;
    border-radius: 10px;
    background: #101010;
    color: #fafafa;
    cursor: pointer;
}

.Dropdown-chevron {
    margin-left: auto;
    color: #737373;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #303030;
    border-radius: 10px;
    background: #171717;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    height: 38px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #d4d4d4;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #242424;
    color: #ffffff;
}

.Dropdown-option > span:first-child {
    width: 18px;
    height: 18px;
    border: 1px solid #404040;
    border-radius: 5px;
}

.Dropdown-system {
    background: linear-gradient(135deg, #ffffff 50%, #111111 50%);
}

.Dropdown-light {
    background: #ffffff;
}

.Dropdown-dark {
    background: #111111;
}

.Dropdown-dim {
    background: #475569;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3648,
    name: "Command Search Dropdown",
    scriptId: 3648,
    preview: (
      <div className="Dropdown3648" data-dropdown-root data-dropdown-id="3648">
        <button
          className="Dropdown3648-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-command-line"></i>

          <span>Quick actions</span>

          <kbd>⌘ K</kbd>

          <i className="ri-arrow-down-s-line Dropdown3648-chevron"></i>
        </button>

        <div className="Dropdown3648-menu" data-dropdown-menu>
          <div className="Dropdown3648-search-wrap">
            <i className="ri-search-line"></i>

            <input data-dropdown-search placeholder="Search commands..." />
          </div>

          <button
            className="Dropdown3648-option"
            data-dropdown-option
            data-search-text="search documentation docs"
            type="button"
          >
            <i className="ri-book-open-line"></i>

            <span>Search documentation</span>
          </button>

          <button
            className="Dropdown3648-option"
            data-dropdown-option
            data-search-text="create project new"
            type="button"
          >
            <i className="ri-add-circle-line"></i>

            <span>Create project</span>
          </button>

          <button
            className="Dropdown3648-option"
            data-dropdown-option
            data-search-text="invite user member team"
            type="button"
          >
            <i className="ri-user-add-line"></i>

            <span>Invite member</span>
          </button>

          <button
            className="Dropdown3648-option"
            data-dropdown-option
            data-search-text="settings preferences"
            type="button"
          >
            <i className="ri-settings-3-line"></i>

            <span>Open settings</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-command-line"></i>
        <span>Quick actions</span>
        <kbd>⌘ K</kbd>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search-wrap">
            <i class="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search commands...">
        </div>

        <button class="Dropdown-option" data-dropdown-option data-search-text="search documentation docs" type="button">
            <i class="ri-book-open-line"></i>
            <span>Search documentation</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-search-text="create project new" type="button">
            <i class="ri-add-circle-line"></i>
            <span>Create project</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-search-text="invite user member team" type="button">
            <i class="ri-user-add-line"></i>
            <span>Invite member</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-search-text="settings preferences" type="button">
            <i class="ri-settings-3-line"></i>
            <span>Open settings</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 275px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 46px;
    padding: 0 11px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #213249;
    border-radius: 10px;
    background: #080d14;
    color: #e6f6ff;
    cursor: pointer;
}

.Dropdown-trigger > span {
    flex: 1;
    text-align: left;
}

.Dropdown-trigger kbd {
    padding: 3px 6px;
    border: 1px solid #213249;
    border-radius: 5px;
    background: #0d1520;
    color: #6c8299;
    font-size: 9px;
}

.Dropdown-chevron {
    color: #6c8299;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #213249;
    border-radius: 11px;
    background: #0d1520;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-search-wrap {
    height: 36px;
    margin-bottom: 6px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #213249;
    border-radius: 7px;
    background: #080d14;
}

.Dropdown-search-wrap i {
    color: #6c8299;
}

.Dropdown-search-wrap input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #e6f6ff;
    font-size: 11px;
}

.Dropdown-option {
    width: 100%;
    height: 37px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #b7c9da;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #142131;
    color: #ffffff;
}

.Dropdown-option i {
    color: #22d3ee;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const search = dropdown.querySelector("[data-dropdown-search]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");

    if (dropdown.classList.contains("is-open")) {
        setTimeout(() => search.focus(), 50);
    }
});

search.addEventListener("click", (event) => {
    event.stopPropagation();
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (
            option.dataset.searchText ||
            option.textContent
        ).toLowerCase();

        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3649,
    name: "Share Dropdown",
    scriptId: 3649,
    preview: (
      <div className="Dropdown3649" data-dropdown-root data-dropdown-id="3649">
        <button
          className="Dropdown3649-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-share-forward-line"></i>

          <span data-copy-status>Share project</span>

          <i className="ri-arrow-down-s-line Dropdown3649-chevron"></i>
        </button>

        <div className="Dropdown3649-menu" data-dropdown-menu>
          <button
            className="Dropdown3649-option"
            data-dropdown-option
            data-copy-value="https://example.com/project"
            type="button"
          >
            <i className="ri-link"></i>

            <span>
              <strong>Copy link</strong>
              <small>Anyone with the link</small>
            </span>
          </button>

          <button
            className="Dropdown3649-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-mail-line"></i>

            <span>
              <strong>Email</strong>
              <small>Send directly</small>
            </span>
          </button>

          <button
            className="Dropdown3649-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-code-box-line"></i>

            <span>
              <strong>Embed</strong>
              <small>Copy embed code</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-share-forward-line"></i>
        <span data-copy-status>Share project</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-copy-value="https://example.com/project" type="button">
            <i class="ri-link"></i>

            <span>
                <strong>Copy link</strong>
                <small>Anyone with the link</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-mail-line"></i>

            <span>
                <strong>Email</strong>
                <small>Send directly</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-code-box-line"></i>

            <span>
                <strong>Embed</strong>
                <small>Copy embed code</small>
            </span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 245px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #493029;
    border-radius: 10px;
    background: #18110f;
    color: #fff7ed;
    cursor: pointer;
}

.Dropdown-trigger > span {
    flex: 1;
    text-align: left;
}

.Dropdown-trigger > i:first-child {
    color: #fb7185;
}

.Dropdown-chevron {
    color: #a88678;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #493029;
    border-radius: 11px;
    background: #211613;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 48px;
    padding: 8px 9px;
    display: flex;
    align-items: flex-start;
    gap: 9px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #fff7ed;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #30201b;
}

.Dropdown-option > i {
    margin-top: 2px;
    color: #fb7185;
}

.Dropdown-option > span {
    display: flex;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #a88678;
    font-size: 8px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const status = dropdown.querySelector("[data-copy-status]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", async () => {
        const value = option.dataset.copyValue;

        if (value) {
            await navigator.clipboard.writeText(value);

            const oldText = status.textContent;
            status.textContent = "Copied!";

            setTimeout(() => {
                status.textContent = oldText;
            }, 1200);
        }

        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3650,
    name: "Project Switcher Dropdown",
    scriptId: 3650,
    preview: (
      <div
        className="Dropdown3650"
        data-dropdown-root
        data-dropdown-id="3650"
        data-dropdown-select
      >
        <button
          className="Dropdown3650-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3650-logo">
            <i className="ri-layout-grid-line"></i>
          </span>

          <span className="Dropdown3650-copy">
            <strong data-dropdown-label>UI Library</strong>
            <small>Current project</small>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3650-chevron"></i>
        </button>

        <div className="Dropdown3650-menu" data-dropdown-menu>
          <div className="Dropdown3650-header">
            <strong>Projects</strong>
            <small>Switch workspace</small>
          </div>

          <button
            className="Dropdown3650-option is-selected"
            data-dropdown-option
            data-label="UI Library"
            type="button"
          >
            <span className="Dropdown3650-project-icon">
              <i className="ri-layout-grid-line"></i>
            </span>

            <span>
              <strong>UI Library</strong>
              <small>React · Vite</small>
            </span>
          </button>

          <button
            className="Dropdown3650-option"
            data-dropdown-option
            data-label="Ashen Depths"
            type="button"
          >
            <span className="Dropdown3650-project-icon">
              <i className="ri-sword-line"></i>
            </span>

            <span>
              <strong>Ashen Depths</strong>
              <small>Three.js</small>
            </span>
          </button>

          <button
            className="Dropdown3650-option"
            data-dropdown-option
            data-label="SVG Studio"
            type="button"
          >
            <span className="Dropdown3650-project-icon">
              <i className="ri-shape-line"></i>
            </span>

            <span>
              <strong>SVG Studio</strong>
              <small>Rust · Leptos</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-logo">
            <i class="ri-layout-grid-line"></i>
        </span>

        <span class="Dropdown-copy">
            <strong data-dropdown-label>UI Library</strong>
            <small>Current project</small>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <strong>Projects</strong>
            <small>Switch workspace</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="UI Library" type="button">
            <span class="Dropdown-project-icon">
                <i class="ri-layout-grid-line"></i>
            </span>

            <span>
                <strong>UI Library</strong>
                <small>React · Vite</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Ashen Depths" type="button">
            <span class="Dropdown-project-icon">
                <i class="ri-sword-line"></i>
            </span>

            <span>
                <strong>Ashen Depths</strong>
                <small>Three.js</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="SVG Studio" type="button">
            <span class="Dropdown-project-icon">
                <i class="ri-shape-line"></i>
            </span>

            <span>
                <strong>SVG Studio</strong>
                <small>Rust · Leptos</small>
            </span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 260px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 51px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #304034;
    border-radius: 11px;
    background: #0f1410;
    color: #f0fdf4;
    cursor: pointer;
}

.Dropdown-logo,
.Dropdown-project-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(74, 222, 128, .12);
    color: #4ade80;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy strong {
    font-size: 11px;
}

.Dropdown-copy small {
    margin-top: 2px;
    color: #819485;
    font-size: 8px;
}

.Dropdown-chevron {
    color: #819485;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #304034;
    border-radius: 11px;
    background: #151d16;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 7px 8px;
    display: flex;
    justify-content: space-between;
}

.Dropdown-header strong {
    font-size: 10px;
}

.Dropdown-header small {
    color: #819485;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    min-height: 49px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #f0fdf4;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #1e2920;
}

.Dropdown-option > span:last-child {
    display: flex;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #819485;
    font-size: 8px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3651,
    name: "Quick Create Dropdown",
    scriptId: 3651,
    preview: (
      <div className="Dropdown3651" data-dropdown-root data-dropdown-id="3651">
        <button
          className="Dropdown3651-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3651-plus">
            <i className="ri-add-line"></i>
          </span>

          <span>Create new</span>

          <i className="ri-arrow-down-s-line Dropdown3651-chevron"></i>
        </button>

        <div className="Dropdown3651-menu" data-dropdown-menu>
          <div className="Dropdown3651-grid">
            <button
              className="Dropdown3651-option"
              data-dropdown-option
              type="button"
            >
              <i className="ri-file-text-line"></i>
              <strong>Document</strong>
              <small>Blank page</small>
            </button>

            <button
              className="Dropdown3651-option"
              data-dropdown-option
              type="button"
            >
              <i className="ri-folder-add-line"></i>
              <strong>Project</strong>
              <small>New workspace</small>
            </button>

            <button
              className="Dropdown3651-option"
              data-dropdown-option
              type="button"
            >
              <i className="ri-task-line"></i>
              <strong>Task</strong>
              <small>Quick item</small>
            </button>

            <button
              className="Dropdown3651-option"
              data-dropdown-option
              type="button"
            >
              <i className="ri-team-line"></i>
              <strong>Team</strong>
              <small>Invite people</small>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-plus">
            <i class="ri-add-line"></i>
        </span>

        <span>Create new</span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-grid">
            <button class="Dropdown-option" data-dropdown-option type="button">
                <i class="ri-file-text-line"></i>
                <strong>Document</strong>
                <small>Blank page</small>
            </button>

            <button class="Dropdown-option" data-dropdown-option type="button">
                <i class="ri-folder-add-line"></i>
                <strong>Project</strong>
                <small>New workspace</small>
            </button>

            <button class="Dropdown-option" data-dropdown-option type="button">
                <i class="ri-task-line"></i>
                <strong>Task</strong>
                <small>Quick item</small>
            </button>

            <button class="Dropdown-option" data-dropdown-option type="button">
                <i class="ri-team-line"></i>
                <strong>Team</strong>
                <small>Invite people</small>
            </button>
        </div>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 260px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #373737;
    border-radius: 10px;
    background: #171717;
    color: #fafafa;
    cursor: pointer;
}

.Dropdown-plus {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f97316;
    color: #111111;
}

.Dropdown-trigger > span:nth-child(2) {
    flex: 1;
    text-align: left;
}

.Dropdown-chevron {
    color: #8a8a8a;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #373737;
    border-radius: 11px;
    background: #1e1e1e;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
}

.Dropdown-option {
    min-height: 85px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    border: 1px solid #373737;
    border-radius: 9px;
    background: #171717;
    color: #fafafa;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    border-color: #f97316;
    background: #242424;
}

.Dropdown-option i {
    margin-bottom: auto;
    color: #f97316;
    font-size: 17px;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #8a8a8a;
    font-size: 8px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3652,
    name: "Searchable Country Dropdown",
    scriptId: 3652,
    preview: (
      <div
        className="Dropdown3652"
        data-dropdown-root
        data-dropdown-id="3652"
        data-dropdown-select
      >
        <button
          className="Dropdown3652-trigger"
          data-dropdown-trigger
          type="button"
        >
          <i className="ri-map-pin-line"></i>

          <span data-dropdown-label>Netherlands</span>

          <i className="ri-arrow-down-s-line Dropdown3652-chevron"></i>
        </button>

        <div className="Dropdown3652-menu" data-dropdown-menu>
          <div className="Dropdown3652-search">
            <i className="ri-search-line"></i>

            <input data-dropdown-search placeholder="Search country..." />
          </div>

          <button
            className="Dropdown3652-option is-selected"
            data-dropdown-option
            data-label="Netherlands"
            data-search-text="netherlands holland nederland"
            type="button"
          >
            <span>NL</span>
            Netherlands
          </button>

          <button
            className="Dropdown3652-option"
            data-dropdown-option
            data-label="Germany"
            data-search-text="germany deutschland"
            type="button"
          >
            <span>DE</span>
            Germany
          </button>

          <button
            className="Dropdown3652-option"
            data-dropdown-option
            data-label="Belgium"
            data-search-text="belgium belgie belgique"
            type="button"
          >
            <span>BE</span>
            Belgium
          </button>

          <button
            className="Dropdown3652-option"
            data-dropdown-option
            data-label="France"
            data-search-text="france"
            type="button"
          >
            <span>FR</span>
            France
          </button>

          <button
            className="Dropdown3652-option"
            data-dropdown-option
            data-label="United Kingdom"
            data-search-text="united kingdom britain uk"
            type="button"
          >
            <span>GB</span>
            United Kingdom
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <i class="ri-map-pin-line"></i>
        <span data-dropdown-label>Netherlands</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search">
            <i class="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search country...">
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Netherlands" data-search-text="netherlands holland nederland" type="button">
            <span>NL</span>
            Netherlands
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Germany" data-search-text="germany deutschland" type="button">
            <span>DE</span>
            Germany
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Belgium" data-search-text="belgium belgie belgique" type="button">
            <span>BE</span>
            Belgium
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="France" data-search-text="france" type="button">
            <span>FR</span>
            France
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="United Kingdom" data-search-text="united kingdom britain uk" type="button">
            <span>GB</span>
            United Kingdom
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 250px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    height: 44px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #dbeafe;
    border-radius: 10px;
    background: #f8fafc;
    color: #172554;
    cursor: pointer;
}

.Dropdown-trigger > i:first-child {
    color: #2563eb;
}

.Dropdown-trigger > span {
    flex: 1;
    text-align: left;
}

.Dropdown-chevron {
    color: #64748b;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #dbeafe;
    border-radius: 11px;
    background: #ffffff;
    box-shadow: 0 18px 35px rgba(37, 99, 235, .12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-search {
    height: 35px;
    margin-bottom: 6px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #dbeafe;
    border-radius: 7px;
    background: #f8fafc;
}

.Dropdown-search i {
    color: #94a3b8;
}

.Dropdown-search input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #172554;
    font-size: 11px;
}

.Dropdown-option {
    width: 100%;
    height: 37px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #334155;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #eff6ff;
    color: #1d4ed8;
}

.Dropdown-option span {
    width: 25px;
    color: #2563eb;
    font-size: 9px;
    font-weight: 800;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const search = dropdown.querySelector("[data-dropdown-search]");
const label = dropdown.querySelector("[data-dropdown-label]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

search.addEventListener("click", (event) => {
    event.stopPropagation();
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (
            option.dataset.searchText ||
            option.textContent
        ).toLowerCase();

        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((item) => item.classList.remove("is-selected"));

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
        search.value = "";

        options.forEach((item) => {
            item.hidden = false;
        });
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3653,
    name: "Workspace Settings Dropdown",
    scriptId: 3653,
    preview: (
      <div className="Dropdown3653" data-dropdown-root data-dropdown-id="3653">
        <button
          className="Dropdown3653-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3653-icon">
            <i className="ri-settings-4-line"></i>
          </span>

          <span className="Dropdown3653-copy">
            <strong>Workspace</strong>
            <small>Manage preferences</small>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3653-chevron"></i>
        </button>

        <div className="Dropdown3653-menu" data-dropdown-menu>
          <button
            className="Dropdown3653-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-settings-3-line"></i>

            <span>
              <strong>General</strong>
              <small>Workspace settings</small>
            </span>
          </button>

          <button
            className="Dropdown3653-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-team-line"></i>

            <span>
              <strong>Members</strong>
              <small>Manage your team</small>
            </span>
          </button>

          <button
            className="Dropdown3653-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-notification-3-line"></i>

            <span>
              <strong>Notifications</strong>
              <small>Control alerts</small>
            </span>
          </button>

          <button
            className="Dropdown3653-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-lock-line"></i>

            <span>
              <strong>Security</strong>
              <small>Permissions and access</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon">
            <i class="ri-settings-4-line"></i>
        </span>

        <span class="Dropdown-copy">
            <strong>Workspace</strong>
            <small>Manage preferences</small>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-settings-3-line"></i>

            <span>
                <strong>General</strong>
                <small>Workspace settings</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-team-line"></i>

            <span>
                <strong>Members</strong>
                <small>Manage your team</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-notification-3-line"></i>

            <span>
                <strong>Notifications</strong>
                <small>Control alerts</small>
            </span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-lock-line"></i>

            <span>
                <strong>Security</strong>
                <small>Permissions and access</small>
            </span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 255px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 48px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #373147;
    border-radius: 11px;
    background: #111018;
    color: #f5f3ff;
    cursor: pointer;
}

.Dropdown-icon {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(167, 139, 250, .12);
    color: #a78bfa;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy strong {
    font-size: 11px;
}

.Dropdown-copy small {
    margin-top: 2px;
    color: #8e879d;
    font-size: 8px;
}

.Dropdown-chevron {
    color: #8e879d;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 6px;
    visibility: hidden;
    border: 1px solid #373147;
    border-radius: 11px;
    background: #181621;
    box-shadow: 0 18px 35px rgba(0, 0, 0, .32);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 49px;
    padding: 7px 9px;
    display: flex;
    align-items: flex-start;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #f5f3ff;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover {
    background: #242130;
}

.Dropdown-option > i {
    margin-top: 3px;
    color: #a78bfa;
}

.Dropdown-option > span {
    display: flex;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #8e879d;
    font-size: 8px;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3654,
    name: "Team Workspace Dropdown",
    scriptId: 3654,
    preview: (
      <div
        className="Dropdown3654"
        data-dropdown-root
        data-dropdown-id="3654"
        data-dropdown-select
      >
        <button
          className="Dropdown3654-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3654-brand">AC</span>

          <span className="Dropdown3654-trigger-copy">
            <small>Workspace</small>
            <strong data-dropdown-label>Acme Studio</strong>
          </span>

          <i className="ri-expand-up-down-line Dropdown3654-chevron"></i>
        </button>

        <div className="Dropdown3654-menu" data-dropdown-menu>
          <div className="Dropdown3654-heading">
            <span>WORKSPACES</span>
            <small>3 teams</small>
          </div>

          <button
            className="Dropdown3654-option is-selected"
            data-dropdown-option
            data-label="Acme Studio"
            type="button"
          >
            <span className="Dropdown3654-avatar Dropdown3654-avatar-purple">
              AC
            </span>

            <span className="Dropdown3654-option-copy">
              <strong>Acme Studio</strong>
              <small>12 members</small>
            </span>

            <i className="ri-check-line Dropdown3654-check"></i>
          </button>

          <button
            className="Dropdown3654-option"
            data-dropdown-option
            data-label="North Labs"
            type="button"
          >
            <span className="Dropdown3654-avatar Dropdown3654-avatar-blue">
              NL
            </span>

            <span className="Dropdown3654-option-copy">
              <strong>North Labs</strong>
              <small>7 members</small>
            </span>

            <i className="ri-check-line Dropdown3654-check"></i>
          </button>

          <button
            className="Dropdown3654-option"
            data-dropdown-option
            data-label="Personal"
            type="button"
          >
            <span className="Dropdown3654-avatar Dropdown3654-avatar-gray">
              AB
            </span>

            <span className="Dropdown3654-option-copy">
              <strong>Personal</strong>
              <small>Private workspace</small>
            </span>

            <i className="ri-check-line Dropdown3654-check"></i>
          </button>

          <div className="Dropdown3654-divider"></div>

          <button
            className="Dropdown3654-action"
            data-dropdown-option
            type="button"
          >
            <i className="ri-add-line"></i>
            Create workspace
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-brand">AC</span>

        <span class="Dropdown-trigger-copy">
            <small>Workspace</small>
            <strong data-dropdown-label>Acme Studio</strong>
        </span>

        <i class="ri-expand-up-down-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-heading">
            <span>WORKSPACES</span>
            <small>3 teams</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Acme Studio" type="button">
            <span class="Dropdown-avatar Dropdown-avatar-purple">AC</span>

            <span class="Dropdown-option-copy">
                <strong>Acme Studio</strong>
                <small>12 members</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="North Labs" type="button">
            <span class="Dropdown-avatar Dropdown-avatar-blue">NL</span>

            <span class="Dropdown-option-copy">
                <strong>North Labs</strong>
                <small>7 members</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Personal" type="button">
            <span class="Dropdown-avatar Dropdown-avatar-gray">AB</span>

            <span class="Dropdown-option-copy">
                <strong>Personal</strong>
                <small>Private workspace</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-action" data-dropdown-option type="button">
            <i class="ri-add-line"></i>
            Create workspace
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 270px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 54px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #292d35;
    border-radius: 12px;
    background: #15171b;
    color: #ffffff;
    cursor: pointer;
}

.Dropdown-brand,
.Dropdown-avatar {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: #ffffff;
    font-weight: 700;
}

.Dropdown-brand {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    font-size: 10px;
}

.Dropdown-trigger-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-trigger-copy small {
    color: #777d88;
    font-size: 8px;
}

.Dropdown-trigger-copy strong {
    margin-top: 2px;
    font-size: 11px;
}

.Dropdown-chevron {
    color: #777d88;
    font-size: 15px;
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #292d35;
    border-radius: 12px;
    background: #181a1f;
    box-shadow: 0 20px 45px rgba(0, 0, 0, .32);
    opacity: 0;
    transform: translateY(-5px) scale(.99);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1);
}

.Dropdown-heading {
    padding: 7px 8px 8px;
    display: flex;
    justify-content: space-between;
}

.Dropdown-heading span,
.Dropdown-heading small {
    color: #717782;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    min-height: 48px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #e5e7eb;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #22252c;
}

.Dropdown-avatar {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    font-size: 9px;
}

.Dropdown-avatar-purple {
    background: #7c3aed;
}

.Dropdown-avatar-blue {
    background: #2563eb;
}

.Dropdown-avatar-gray {
    background: #475569;
}

.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-option-copy strong {
    font-size: 10px;
}

.Dropdown-option-copy small {
    margin-top: 2px;
    color: #7e8490;
    font-size: 8px;
}

.Dropdown-check {
    visibility: hidden;
    color: #a78bfa;
}

.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}

.Dropdown-divider {
    height: 1px;
    margin: 6px 0;
    background: #292d35;
}

.Dropdown-action {
    width: 100%;
    height: 36px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #a78bfa;
    cursor: pointer;
}

.Dropdown-action:hover {
    background: #22252c;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option][data-label]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3655,
    name: "Export Format Dropdown",
    scriptId: 3655,
    preview: (
      <div
        className="Dropdown3655"
        data-dropdown-root
        data-dropdown-id="3655"
        data-dropdown-select
      >
        <button
          className="Dropdown3655-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3655-icon">
            <i className="ri-download-cloud-2-line"></i>
          </span>

          <span className="Dropdown3655-copy">
            <small>Export as</small>
            <strong data-dropdown-label>PDF Document</strong>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3655-chevron"></i>
        </button>

        <div className="Dropdown3655-menu" data-dropdown-menu>
          <button
            className="Dropdown3655-option is-selected"
            data-dropdown-option
            data-label="PDF Document"
            type="button"
          >
            <span className="Dropdown3655-file Dropdown3655-pdf">PDF</span>

            <span>
              <strong>PDF Document</strong>
              <small>Best for sharing</small>
            </span>

            <i className="ri-check-line Dropdown3655-check"></i>
          </button>

          <button
            className="Dropdown3655-option"
            data-dropdown-option
            data-label="CSV Spreadsheet"
            type="button"
          >
            <span className="Dropdown3655-file Dropdown3655-csv">CSV</span>

            <span>
              <strong>CSV Spreadsheet</strong>
              <small>Raw tabular data</small>
            </span>

            <i className="ri-check-line Dropdown3655-check"></i>
          </button>

          <button
            className="Dropdown3655-option"
            data-dropdown-option
            data-label="Excel Workbook"
            type="button"
          >
            <span className="Dropdown3655-file Dropdown3655-xlsx">XLS</span>

            <span>
              <strong>Excel Workbook</strong>
              <small>Formatted spreadsheet</small>
            </span>

            <i className="ri-check-line Dropdown3655-check"></i>
          </button>

          <button
            className="Dropdown3655-option"
            data-dropdown-option
            data-label="JSON Data"
            type="button"
          >
            <span className="Dropdown3655-file Dropdown3655-json">{`{ }`}</span>

            <span>
              <strong>JSON Data</strong>
              <small>Developer friendly</small>
            </span>

            <i className="ri-check-line Dropdown3655-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon">
            <i class="ri-download-cloud-2-line"></i>
        </span>

        <span class="Dropdown-copy">
            <small>Export as</small>
            <strong data-dropdown-label>PDF Document</strong>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="PDF Document" type="button">
            <span class="Dropdown-file Dropdown-pdf">PDF</span>
            <span>
                <strong>PDF Document</strong>
                <small>Best for sharing</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="CSV Spreadsheet" type="button">
            <span class="Dropdown-file Dropdown-csv">CSV</span>
            <span>
                <strong>CSV Spreadsheet</strong>
                <small>Raw tabular data</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Excel Workbook" type="button">
            <span class="Dropdown-file Dropdown-xlsx">XLS</span>
            <span>
                <strong>Excel Workbook</strong>
                <small>Formatted spreadsheet</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="JSON Data" type="button">
            <span class="Dropdown-file Dropdown-json">{ }</span>
            <span>
                <strong>JSON Data</strong>
                <small>Developer friendly</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 275px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 51px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #dfe3e8;
    border-radius: 11px;
    background: #ffffff;
    color: #17202a;
    cursor: pointer;
}

.Dropdown-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f1f5f9;
    color: #475569;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy small {
    color: #94a3b8;
    font-size: 8px;
}

.Dropdown-copy strong {
    margin-top: 2px;
    font-size: 11px;
}

.Dropdown-chevron {
    color: #94a3b8;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #dfe3e8;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(15, 23, 42, .12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 52px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #334155;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}

.Dropdown-file {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    font-size: 8px;
    font-weight: 800;
}

.Dropdown-pdf {
    background: #fef2f2;
    color: #dc2626;
}

.Dropdown-csv {
    background: #f0fdf4;
    color: #16a34a;
}

.Dropdown-xlsx {
    background: #ecfdf5;
    color: #047857;
}

.Dropdown-json {
    background: #eff6ff;
    color: #2563eb;
}

.Dropdown-option > span:nth-child(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #94a3b8;
    font-size: 8px;
}

.Dropdown-check {
    visibility: hidden;
    color: #2563eb;
}

.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3656,
    name: "Date Range Dropdown",
    scriptId: 3656,
    preview: (
      <div
        className="Dropdown3656"
        data-dropdown-root
        data-dropdown-id="3656"
        data-dropdown-select
      >
        <button
          className="Dropdown3656-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3656-calendar">
            <i className="ri-calendar-2-line"></i>
          </span>

          <span className="Dropdown3656-copy">
            <small>Date range</small>
            <strong data-dropdown-label>Last 30 days</strong>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3656-chevron"></i>
        </button>

        <div className="Dropdown3656-menu" data-dropdown-menu>
          <button
            className="Dropdown3656-option"
            data-dropdown-option
            data-label="Today"
            type="button"
          >
            <span>Today</span>
            <small>Sep 25</small>
          </button>

          <button
            className="Dropdown3656-option"
            data-dropdown-option
            data-label="Last 7 days"
            type="button"
          >
            <span>Last 7 days</span>
            <small>Sep 19 – Sep 25</small>
          </button>

          <button
            className="Dropdown3656-option is-selected"
            data-dropdown-option
            data-label="Last 30 days"
            type="button"
          >
            <span>Last 30 days</span>
            <small>Aug 27 – Sep 25</small>
          </button>

          <button
            className="Dropdown3656-option"
            data-dropdown-option
            data-label="This year"
            type="button"
          >
            <span>This year</span>
            <small>Jan 1 – Sep 25</small>
          </button>

          <div className="Dropdown3656-divider"></div>

          <button
            className="Dropdown3656-custom"
            data-dropdown-option
            data-label="Custom range"
            type="button"
          >
            <i className="ri-calendar-event-line"></i>
            Custom range
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-calendar">
            <i class="ri-calendar-2-line"></i>
        </span>

        <span class="Dropdown-copy">
            <small>Date range</small>
            <strong data-dropdown-label>Last 30 days</strong>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-label="Today" type="button">
            <span>Today</span>
            <small>Sep 25</small>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Last 7 days" type="button">
            <span>Last 7 days</span>
            <small>Sep 19 – Sep 25</small>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Last 30 days" type="button">
            <span>Last 30 days</span>
            <small>Aug 27 – Sep 25</small>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="This year" type="button">
            <span>This year</span>
            <small>Jan 1 – Sep 25</small>
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-custom" data-dropdown-option data-label="Custom range" type="button">
            <i class="ri-calendar-event-line"></i>
            Custom range
            <i class="ri-arrow-right-s-line"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 250px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 51px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #d9dee7;
    border-radius: 11px;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
}

.Dropdown-calendar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #eef2ff;
    color: #4f46e5;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy small {
    color: #9ca3af;
    font-size: 8px;
}

.Dropdown-copy strong {
    margin-top: 2px;
    font-size: 11px;
}

.Dropdown-chevron {
    color: #9ca3af;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #d9dee7;
    border-radius: 11px;
    background: #ffffff;
    box-shadow: 0 18px 45px rgba(15, 23, 42, .11);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-option {
    width: 100%;
    min-height: 39px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #374151;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f5f7ff;
    color: #4338ca;
}

.Dropdown-option span {
    font-size: 10px;
}

.Dropdown-option small {
    color: #9ca3af;
    font-size: 8px;
}

.Dropdown-divider {
    height: 1px;
    margin: 5px 0;
    background: #e5e7eb;
}

.Dropdown-custom {
    width: 100%;
    height: 38px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #4f46e5;
    cursor: pointer;
}

.Dropdown-custom:hover {
    background: #f5f7ff;
}

.Dropdown-custom i:last-child {
    margin-left: auto;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3657,
    name: "Table Columns Dropdown",
    scriptId: 3657,
    preview: (
      <div
        className="Dropdown3657"
        data-dropdown-root
        data-dropdown-id="3657"
        data-dropdown-multi
      >
        <button
          className="Dropdown3657-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3657-icon">
            <i className="ri-layout-column-line"></i>
          </span>

          <span className="Dropdown3657-copy">
            <strong>Columns</strong>
            <small>Manage visible fields</small>
          </span>

          <span className="Dropdown3657-count" data-dropdown-count>
            4
          </span>

          <i className="ri-arrow-down-s-line Dropdown3657-chevron"></i>
        </button>

        <div className="Dropdown3657-menu" data-dropdown-menu>
          <div className="Dropdown3657-header">
            <strong>Visible columns</strong>
            <small>Customize table</small>
          </div>

          <button
            className="Dropdown3657-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" defaultChecked />

            <span>Name</span>
          </button>

          <button
            className="Dropdown3657-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" defaultChecked />

            <span>Status</span>
          </button>

          <button
            className="Dropdown3657-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" defaultChecked />

            <span>Owner</span>
          </button>

          <button
            className="Dropdown3657-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" defaultChecked />

            <span>Updated</span>
          </button>

          <button
            className="Dropdown3657-option"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" />

            <span>Created</span>
          </button>

          <button
            className="Dropdown3657-option"
            data-dropdown-option
            type="button"
          >
            <span className="Dropdown3657-grip">
              <i className="ri-draggable"></i>
            </span>

            <input type="checkbox" />

            <span>Priority</span>
          </button>

          <div className="Dropdown3657-footer">
            <button data-dropdown-close type="button">
              Done
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon">
            <i class="ri-layout-column-line"></i>
        </span>

        <span class="Dropdown-copy">
            <strong>Columns</strong>
            <small>Manage visible fields</small>
        </span>

        <span class="Dropdown-count" data-dropdown-count>4</span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <strong>Visible columns</strong>
            <small>Customize table</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox" checked>
            <span>Name</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox" checked>
            <span>Status</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox" checked>
            <span>Owner</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox" checked>
            <span>Updated</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox">
            <span>Created</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-grip"><i class="ri-draggable"></i></span>
            <input type="checkbox">
            <span>Priority</span>
        </button>

        <div class="Dropdown-footer">
            <button data-dropdown-close type="button">Done</button>
        </div>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 255px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 50px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #272b31;
    border-radius: 11px;
    background: #121417;
    color: #f3f4f6;
    cursor: pointer;
}

.Dropdown-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #1d2127;
    color: #60a5fa;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy strong {
    font-size: 11px;
}

.Dropdown-copy small {
    margin-top: 2px;
    color: #747b86;
    font-size: 8px;
}

.Dropdown-count {
    min-width: 21px;
    height: 21px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: #1e293b;
    color: #60a5fa;
    font-size: 9px;
    font-weight: 700;
}

.Dropdown-chevron {
    color: #747b86;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #272b31;
    border-radius: 11px;
    background: #17191d;
    box-shadow: 0 20px 45px rgba(0, 0, 0, .35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 7px 8px;
    display: flex;
    flex-direction: column;
}

.Dropdown-header strong {
    font-size: 10px;
}

.Dropdown-header small {
    margin-top: 2px;
    color: #747b86;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    height: 36px;
    padding: 0 8px;
    display: grid;
    grid-template-columns: 18px 15px 1fr;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #d1d5db;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #202329;
}

.Dropdown-grip {
    color: #575d67;
}

.Dropdown-option input {
    width: 14px;
    height: 14px;
    margin: 0;
    accent-color: #3b82f6;
    pointer-events: none;
}

.Dropdown-option > span:last-child {
    text-align: left;
    font-size: 10px;
}

.Dropdown-footer {
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid #272b31;
}

.Dropdown-footer button {
    width: 100%;
    height: 34px;
    border: 0;
    border-radius: 7px;
    background: #2563eb;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
}

.Dropdown-footer button:hover {
    background: #3b82f6;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");
const done = dropdown.querySelector("[data-dropdown-close]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();

        option.classList.toggle("is-selected");

        const checkbox = option.querySelector("input");

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

done.addEventListener("click", () => {
    dropdown.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3658,
    name: "User Role Dropdown",
    scriptId: 3658,
    preview: (
      <div
        className="Dropdown3658"
        data-dropdown-root
        data-dropdown-id="3658"
        data-dropdown-select
      >
        <button
          className="Dropdown3658-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="Dropdown3658-icon">
            <i className="ri-shield-user-line"></i>
          </span>

          <span className="Dropdown3658-copy">
            <small>Access level</small>
            <strong data-dropdown-label>Editor</strong>
          </span>

          <i className="ri-arrow-down-s-line Dropdown3658-chevron"></i>
        </button>

        <div className="Dropdown3658-menu" data-dropdown-menu>
          <div className="Dropdown3658-header">
            <strong>Choose role</strong>
            <small>Permissions update instantly</small>
          </div>

          <button
            className="Dropdown3658-option"
            data-dropdown-option
            data-label="Viewer"
            type="button"
          >
            <span className="Dropdown3658-role-icon">
              <i className="ri-eye-line"></i>
            </span>

            <span>
              <strong>Viewer</strong>
              <small>Can view content</small>
            </span>

            <i className="ri-check-line Dropdown3658-check"></i>
          </button>

          <button
            className="Dropdown3658-option is-selected"
            data-dropdown-option
            data-label="Editor"
            type="button"
          >
            <span className="Dropdown3658-role-icon">
              <i className="ri-edit-line"></i>
            </span>

            <span>
              <strong>Editor</strong>
              <small>Can view and edit</small>
            </span>

            <i className="ri-check-line Dropdown3658-check"></i>
          </button>

          <button
            className="Dropdown3658-option"
            data-dropdown-option
            data-label="Administrator"
            type="button"
          >
            <span className="Dropdown3658-role-icon">
              <i className="ri-shield-keyhole-line"></i>
            </span>

            <span>
              <strong>Administrator</strong>
              <small>Full workspace access</small>
            </span>

            <i className="ri-check-line Dropdown3658-check"></i>
          </button>

          <div className="Dropdown3658-note">
            <i className="ri-information-line"></i>
            Administrators can manage members and billing.
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon">
            <i class="ri-shield-user-line"></i>
        </span>

        <span class="Dropdown-copy">
            <small>Access level</small>
            <strong data-dropdown-label>Editor</strong>
        </span>

        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-header">
            <strong>Choose role</strong>
            <small>Permissions update instantly</small>
        </div>

        <button class="Dropdown-option" data-dropdown-option data-label="Viewer" type="button">
            <span class="Dropdown-role-icon">
                <i class="ri-eye-line"></i>
            </span>

            <span>
                <strong>Viewer</strong>
                <small>Can view content</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Editor" type="button">
            <span class="Dropdown-role-icon">
                <i class="ri-edit-line"></i>
            </span>

            <span>
                <strong>Editor</strong>
                <small>Can view and edit</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Administrator" type="button">
            <span class="Dropdown-role-icon">
                <i class="ri-shield-keyhole-line"></i>
            </span>

            <span>
                <strong>Administrator</strong>
                <small>Full workspace access</small>
            </span>

            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <div class="Dropdown-note">
            <i class="ri-information-line"></i>
            Administrators can manage members and billing.
        </div>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 275px;
    font-family: Arial, sans-serif;
}

.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #dbe0e8;
    border-radius: 11px;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
}

.Dropdown-icon {
    width: 33px;
    height: 33px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f0fdf4;
    color: #16a34a;
}

.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}

.Dropdown-copy small {
    color: #9ca3af;
    font-size: 8px;
}

.Dropdown-copy strong {
    margin-top: 2px;
    font-size: 11px;
}

.Dropdown-chevron {
    color: #9ca3af;
    transition: transform .2s ease;
}

.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}

.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #dbe0e8;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 20px 45px rgba(15, 23, 42, .12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}

.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.Dropdown-header {
    padding: 7px 8px 9px;
    display: flex;
    flex-direction: column;
}

.Dropdown-header strong {
    font-size: 10px;
}

.Dropdown-header small {
    margin-top: 2px;
    color: #9ca3af;
    font-size: 8px;
}

.Dropdown-option {
    width: 100%;
    min-height: 53px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #374151;
    text-align: left;
    cursor: pointer;
}

.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}

.Dropdown-role-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #f1f5f9;
    color: #475569;
}

.Dropdown-option.is-selected .Dropdown-role-icon {
    background: #f0fdf4;
    color: #16a34a;
}

.Dropdown-option > span:nth-child(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.Dropdown-option strong {
    font-size: 10px;
}

.Dropdown-option small {
    margin-top: 2px;
    color: #9ca3af;
    font-size: 8px;
}

.Dropdown-check {
    visibility: hidden;
    color: #16a34a;
}

.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}

.Dropdown-note {
    margin-top: 6px;
    padding: 8px;
    display: flex;
    align-items: flex-start;
    gap: 6px;
    border-radius: 7px;
    background: #f8fafc;
    color: #64748b;
    font-size: 8px;
    line-height: 1.4;
}

.Dropdown-note i {
    color: #94a3b8;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3659,
    name: "Environment Switcher Dropdown",
    scriptId: 3659,
    preview: (
      <div
        className="DropdownPro Dropdown3659"
        data-dropdown-root
        data-dropdown-id="3659"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-server-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Environment</small>
            <strong data-dropdown-label>Production</strong>
          </span>
          <span className="DropdownPro-status DropdownPro-status--green"></span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Environment</strong>
            <small>Switch deployment context</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Production"
            type="button"
          >
            <span className="DropdownPro-dot DropdownPro-dot--green"></span>
            <span className="DropdownPro-option-copy">
              <strong>Production</strong>
              <small>Live customer traffic</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Staging"
            type="button"
          >
            <span className="DropdownPro-dot DropdownPro-dot--amber"></span>
            <span className="DropdownPro-option-copy">
              <strong>Staging</strong>
              <small>Pre-release testing</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Development"
            type="button"
          >
            <span className="DropdownPro-dot DropdownPro-dot--blue"></span>
            <span className="DropdownPro-option-copy">
              <strong>Development</strong>
              <small>Local development</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-server-line"></i></span>
        <span class="Dropdown-copy">
            <small>Environment</small>
            <strong data-dropdown-label>Production</strong>
        </span>
        <span class="Dropdown-status"></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head">
            <strong>Environment</strong>
            <small>Switch deployment context</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Production" type="button">
            <span class="Dropdown-dot Dropdown-dot-green"></span>
            <span class="Dropdown-option-copy">
                <strong>Production</strong>
                <small>Live customer traffic</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Staging" type="button">
            <span class="Dropdown-dot Dropdown-dot-amber"></span>
            <span class="Dropdown-option-copy">
                <strong>Staging</strong>
                <small>Pre-release testing</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Development" type="button">
            <span class="Dropdown-dot Dropdown-dot-blue"></span>
            <span class="Dropdown-option-copy">
                <strong>Development</strong>
                <small>Local development</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 270px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #29322d;
    border-radius: 11px;
    background: #111814;
    color: #f0fdf4;
    cursor: pointer;
}
.Dropdown-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: rgba(34, 197, 94, .12);
    color: #4ade80;
}
.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-head small,
.Dropdown-option-copy small {
    color: #7d9184;
    font-size: 8px;
}
.Dropdown-copy strong {
    margin-top: 2px;
    font-size: 11px;
}
.Dropdown-status,
.Dropdown-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
}
.Dropdown-chevron {
    color: #7d9184;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #29322d;
    border-radius: 11px;
    background: #151d18;
    box-shadow: 0 20px 45px rgba(0,0,0,.3);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-head {
    padding: 7px 8px 9px;
    display: flex;
    flex-direction: column;
}
.Dropdown-head strong {
    font-size: 10px;
}
.Dropdown-option {
    width: 100%;
    min-height: 49px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #e8f5ec;
    text-align: left;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #1d2921;
}
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
}
.Dropdown-option-copy strong {
    font-size: 10px;
}
.Dropdown-check {
    visibility: hidden;
    color: #4ade80;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}
.Dropdown-dot-amber {
    background: #f59e0b;
}
.Dropdown-dot-blue {
    background: #3b82f6;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3660,
    name: "Payment Method Dropdown",
    scriptId: 3660,
    preview: (
      <div
        className="DropdownPro Dropdown3660"
        data-dropdown-root
        data-dropdown-id="3660"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-bank-card-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Payment method</small>
            <strong data-dropdown-label>Visa •••• 4821</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Payment methods</strong>
            <small>Choose how to pay</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Visa •••• 4821"
            type="button"
          >
            <span className="DropdownPro-card-mark">VISA</span>
            <span className="DropdownPro-option-copy">
              <strong>Visa ending 4821</strong>
              <small>Expires 08/29</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Mastercard •••• 7342"
            type="button"
          >
            <span className="DropdownPro-card-mark">MC</span>
            <span className="DropdownPro-option-copy">
              <strong>Mastercard ending 7342</strong>
              <small>Expires 11/28</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="PayPal"
            type="button"
          >
            <span className="DropdownPro-card-mark">PP</span>
            <span className="DropdownPro-option-copy">
              <strong>PayPal</strong>
              <small>Connected account</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-bank-card-line"></i></span>
        <span class="Dropdown-copy">
            <small>Payment method</small>
            <strong data-dropdown-label>Visa •••• 4821</strong>
        </span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head">
            <strong>Payment methods</strong>
            <small>Choose how to pay</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Visa •••• 4821" type="button">
            <span class="Dropdown-card-mark">VISA</span>
            <span class="Dropdown-option-copy">
                <strong>Visa ending 4821</strong>
                <small>Expires 08/29</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Mastercard •••• 7342" type="button">
            <span class="Dropdown-card-mark">MC</span>
            <span class="Dropdown-option-copy">
                <strong>Mastercard ending 7342</strong>
                <small>Expires 11/28</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="PayPal" type="button">
            <span class="Dropdown-card-mark">PP</span>
            <span class="Dropdown-option-copy">
                <strong>PayPal</strong>
                <small>Connected account</small>
            </span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 280px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #dce1e8;
    border-radius: 11px;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
}
.Dropdown-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #eff6ff;
    color: #2563eb;
}
.Dropdown-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-head small,
.Dropdown-option-copy small {
    color: #94a3b8;
    font-size: 8px;
}
.Dropdown-copy strong {
    margin-top: 2px;
    font-size: 11px;
}
.Dropdown-chevron {
    color: #94a3b8;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #dce1e8;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 20px 45px rgba(15,23,42,.12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-head {
    padding: 7px 8px 9px;
    display: flex;
    flex-direction: column;
}
.Dropdown-head strong {
    font-size: 10px;
}
.Dropdown-option {
    width: 100%;
    min-height: 52px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #334155;
    text-align: left;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}
.Dropdown-card-mark {
    width: 38px;
    height: 27px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: #f8fafc;
    color: #334155;
    font-size: 8px;
    font-weight: 800;
}
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
}
.Dropdown-option-copy strong {
    font-size: 10px;
}
.Dropdown-check {
    visibility: hidden;
    color: #2563eb;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3661,
    name: "Notification Channels Dropdown",
    scriptId: 3661,
    preview: (
      <div
        className="DropdownPro Dropdown3661"
        data-dropdown-root
        data-dropdown-id="3661"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-notification-4-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Notification channels</strong>
            <small>Choose delivery methods</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Notify me through</strong>
            <small>Select multiple channels</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-icon-sm">
              <i className="ri-mail-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Email</strong>
              <small>Important account activity</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-icon-sm">
              <i className="ri-notification-2-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Push</strong>
              <small>Browser and device alerts</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-icon-sm">
              <i className="ri-message-3-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Slack</strong>
              <small>Workspace notifications</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-icon-sm">
              <i className="ri-smartphone-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>SMS</strong>
              <small>Critical alerts only</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <div className="DropdownPro-footer">
            <button data-dropdown-close type="button">
              Save preferences
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-notification-4-line"></i></span>
        <span class="Dropdown-copy">
            <strong>Notification channels</strong>
            <small>Choose delivery methods</small>
        </span>
        <span class="Dropdown-count" data-dropdown-count>2</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head">
            <strong>Notify me through</strong>
            <small>Select multiple channels</small>
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-icon-sm"><i class="ri-mail-line"></i></span>
            <span class="Dropdown-option-copy">
                <strong>Email</strong>
                <small>Important account activity</small>
            </span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-icon-sm"><i class="ri-notification-2-line"></i></span>
            <span class="Dropdown-option-copy">
                <strong>Push</strong>
                <small>Browser and device alerts</small>
            </span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-icon-sm"><i class="ri-message-3-line"></i></span>
            <span class="Dropdown-option-copy">
                <strong>Slack</strong>
                <small>Workspace notifications</small>
            </span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-icon-sm"><i class="ri-smartphone-line"></i></span>
            <span class="Dropdown-option-copy">
                <strong>SMS</strong>
                <small>Critical alerts only</small>
            </span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <div class="Dropdown-footer">
            <button data-dropdown-close type="button">Save preferences</button>
        </div>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 285px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #303542;
    border-radius: 11px;
    background: #151820;
    color: #f8fafc;
    cursor: pointer;
}
.Dropdown-icon,
.Dropdown-icon-sm {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    background: rgba(129,140,248,.12);
    color: #a5b4fc;
}
.Dropdown-icon {
    width: 32px;
    height: 32px;
    border-radius: 9px;
}
.Dropdown-icon-sm {
    width: 30px;
    height: 30px;
    border-radius: 8px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    font-size: 10px;
}
.Dropdown-copy small,
.Dropdown-option-copy small,
.Dropdown-head small {
    margin-top: 2px;
    color: #7c8496;
    font-size: 8px;
}
.Dropdown-count {
    min-width: 21px;
    height: 21px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: #252a38;
    color: #a5b4fc;
    font-size: 9px;
    font-weight: 700;
}
.Dropdown-chevron {
    color: #7c8496;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #303542;
    border-radius: 12px;
    background: #191d27;
    box-shadow: 0 20px 45px rgba(0,0,0,.35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-head {
    padding: 7px 8px 9px;
    display: flex;
    flex-direction: column;
}
.Dropdown-head strong {
    font-size: 10px;
}
.Dropdown-option {
    width: 100%;
    min-height: 50px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #e5e7eb;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #232835;
}
.Dropdown-checkbox {
    width: 14px;
    height: 14px;
    accent-color: #818cf8;
    pointer-events: none;
}
.Dropdown-footer {
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid #303542;
}
.Dropdown-footer button {
    width: 100%;
    height: 34px;
    border: 0;
    border-radius: 7px;
    background: #6366f1;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");
const closeButton = dropdown.querySelector("[data-dropdown-close]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();
        option.classList.toggle("is-selected");

        const checkbox = option.querySelector("input");

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

closeButton.addEventListener("click", () => {
    dropdown.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3662,
    name: "Currency Selector Dropdown",
    scriptId: 3662,
    preview: (
      <div
        className="DropdownPro Dropdown3662"
        data-dropdown-root
        data-dropdown-id="3662"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-currency">$</span>
          <span className="DropdownPro-copy">
            <small>Currency</small>
            <strong data-dropdown-label>USD — US Dollar</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search currencies..." />
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="USD — US Dollar"
            data-search-text="usd us dollar united states"
            type="button"
          >
            <span className="DropdownPro-currency-sm">$</span>
            <span className="DropdownPro-option-copy">
              <strong>USD</strong>
              <small>US Dollar</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="EUR — Euro"
            data-search-text="eur euro europe"
            type="button"
          >
            <span className="DropdownPro-currency-sm">€</span>
            <span className="DropdownPro-option-copy">
              <strong>EUR</strong>
              <small>Euro</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="GBP — British Pound"
            data-search-text="gbp british pound sterling"
            type="button"
          >
            <span className="DropdownPro-currency-sm">£</span>
            <span className="DropdownPro-option-copy">
              <strong>GBP</strong>
              <small>British Pound</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="JPY — Japanese Yen"
            data-search-text="jpy japanese yen japan"
            type="button"
          >
            <span className="DropdownPro-currency-sm">¥</span>
            <span className="DropdownPro-option-copy">
              <strong>JPY</strong>
              <small>Japanese Yen</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-currency">$</span>
        <span class="Dropdown-copy">
            <small>Currency</small>
            <strong data-dropdown-label>USD — US Dollar</strong>
        </span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search">
            <i class="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search currencies...">
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="USD — US Dollar" data-search-text="usd us dollar united states" type="button">
            <span class="Dropdown-currency-sm">$</span>
            <span class="Dropdown-option-copy"><strong>USD</strong><small>US Dollar</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="EUR — Euro" data-search-text="eur euro europe" type="button">
            <span class="Dropdown-currency-sm">€</span>
            <span class="Dropdown-option-copy"><strong>EUR</strong><small>Euro</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="GBP — British Pound" data-search-text="gbp british pound sterling" type="button">
            <span class="Dropdown-currency-sm">£</span>
            <span class="Dropdown-option-copy"><strong>GBP</strong><small>British Pound</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="JPY — Japanese Yen" data-search-text="jpy japanese yen japan" type="button">
            <span class="Dropdown-currency-sm">¥</span>
            <span class="Dropdown-option-copy"><strong>JPY</strong><small>Japanese Yen</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 270px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #ffffff;
    color: #0f172a;
    cursor: pointer;
}
.Dropdown-currency,
.Dropdown-currency-sm {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #ecfdf5;
    color: #059669;
    font-weight: 800;
}
.Dropdown-currency {
    width: 32px;
    height: 32px;
    font-size: 14px;
}
.Dropdown-currency-sm {
    width: 29px;
    height: 29px;
    font-size: 12px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color: #94a3b8;
    font-size: 8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top: 2px;
    font-size: 10px;
}
.Dropdown-chevron {
    color: #94a3b8;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 20px 45px rgba(15,23,42,.12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-search {
    height: 35px;
    margin-bottom: 6px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #e2e8f0;
    border-radius: 7px;
    background: #f8fafc;
}
.Dropdown-search i {
    color: #94a3b8;
}
.Dropdown-search input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #0f172a;
}
.Dropdown-option {
    width: 100%;
    min-height: 48px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #334155;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}
.Dropdown-check {
    visibility: hidden;
    color: #059669;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}
.Dropdown-option[hidden] {
    display: none;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");
const search = dropdown.querySelector("[data-dropdown-search]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

search.addEventListener("click", (event) => {
    event.stopPropagation();
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (option.dataset.searchText || option.textContent).toLowerCase();
        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((item) => item.classList.remove("is-selected"));
        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
        search.value = "";
        options.forEach((item) => item.hidden = false);
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3663,
    name: "Git Branch Dropdown",
    scriptId: 3663,
    preview: (
      <div
        className="DropdownPro Dropdown3663"
        data-dropdown-root
        data-dropdown-id="3663"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-git-branch-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Current branch</small>
            <strong data-dropdown-label>main</strong>
          </span>
          <span className="DropdownPro-badge">24</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Find a branch..." />
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="main"
            data-search-text="main production default"
            type="button"
          >
            <i className="ri-git-branch-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>main</strong>
              <small>Default branch</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="develop"
            data-search-text="develop development"
            type="button"
          >
            <i className="ri-git-branch-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>develop</strong>
              <small>2 commits ahead</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="feature/gallery-zoom"
            data-search-text="feature gallery zoom"
            type="button"
          >
            <i className="ri-git-branch-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>feature/gallery-zoom</strong>
              <small>Updated 18m ago</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="hotfix/header"
            data-search-text="hotfix header"
            type="button"
          >
            <i className="ri-git-branch-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>hotfix/header</strong>
              <small>Updated yesterday</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-git-branch-line"></i></span>
        <span class="Dropdown-copy">
            <small>Current branch</small>
            <strong data-dropdown-label>main</strong>
        </span>
        <span class="Dropdown-badge">24</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search">
            <i class="ri-search-line"></i>
            <input data-dropdown-search placeholder="Find a branch...">
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="main" data-search-text="main production default" type="button">
            <i class="ri-git-branch-line"></i>
            <span class="Dropdown-option-copy"><strong>main</strong><small>Default branch</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="develop" data-search-text="develop development" type="button">
            <i class="ri-git-branch-line"></i>
            <span class="Dropdown-option-copy"><strong>develop</strong><small>2 commits ahead</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="feature/gallery-zoom" data-search-text="feature gallery zoom" type="button">
            <i class="ri-git-branch-line"></i>
            <span class="Dropdown-option-copy"><strong>feature/gallery-zoom</strong><small>Updated 18m ago</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="hotfix/header" data-search-text="hotfix header" type="button">
            <i class="ri-git-branch-line"></i>
            <span class="Dropdown-option-copy"><strong>hotfix/header</strong><small>Updated yesterday</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 285px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #30333a;
    border-radius: 11px;
    background: #16181c;
    color: #f5f5f5;
    cursor: pointer;
}
.Dropdown-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(249,115,22,.12);
    color: #fb923c;
}
.Dropdown-copy,
.Dropdown-option-copy {
    min-width: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color: #7d828b;
    font-size: 8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    max-width: 180px;
    margin-top: 2px;
    overflow: hidden;
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.Dropdown-badge {
    min-width: 22px;
    height: 20px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: #23262d;
    color: #9ca3af;
    font-size: 8px;
}
.Dropdown-chevron {
    color: #7d828b;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #30333a;
    border-radius: 11px;
    background: #1b1d22;
    box-shadow: 0 20px 45px rgba(0,0,0,.35);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-search {
    height: 35px;
    margin-bottom: 6px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #30333a;
    border-radius: 7px;
    background: #14161a;
}
.Dropdown-search input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #f5f5f5;
}
.Dropdown-search i {
    color: #7d828b;
}
.Dropdown-option {
    width: 100%;
    min-height: 47px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #d4d4d8;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #24272d;
}
.Dropdown-option > i:first-child {
    color: #fb923c;
}
.Dropdown-check {
    visibility: hidden;
    color: #fb923c;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}
.Dropdown-option[hidden] {
    display: none;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");
const search = dropdown.querySelector("[data-dropdown-search]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (option.dataset.searchText || option.textContent).toLowerCase();
        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((item) => item.classList.remove("is-selected"));
        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3664,
    name: "Priority Selector Dropdown",
    scriptId: 3664,
    preview: (
      <div
        className="DropdownPro Dropdown3664"
        data-dropdown-root
        data-dropdown-id="3664"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-priority DropdownPro-priority--high">
            <i className="ri-arrow-up-double-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Priority</small>
            <strong data-dropdown-label>High</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Urgent"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--urgent">
              <i className="ri-alarm-warning-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Urgent</strong>
              <small>Immediate attention</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="High"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--high">
              <i className="ri-arrow-up-double-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>High</strong>
              <small>Important work</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Medium"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--medium">
              <i className="ri-subtract-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Medium</strong>
              <small>Normal priority</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Low"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--low">
              <i className="ri-arrow-down-double-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Low</strong>
              <small>Can wait</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-priority Dropdown-priority-high"><i class="ri-arrow-up-double-line"></i></span>
        <span class="Dropdown-copy">
            <small>Priority</small>
            <strong data-dropdown-label>High</strong>
        </span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-label="Urgent" type="button">
            <span class="Dropdown-priority Dropdown-priority-urgent"><i class="ri-alarm-warning-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Urgent</strong><small>Immediate attention</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="High" type="button">
            <span class="Dropdown-priority Dropdown-priority-high"><i class="ri-arrow-up-double-line"></i></span>
            <span class="Dropdown-option-copy"><strong>High</strong><small>Important work</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Medium" type="button">
            <span class="Dropdown-priority Dropdown-priority-medium"><i class="ri-subtract-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Medium</strong><small>Normal priority</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Low" type="button">
            <span class="Dropdown-priority Dropdown-priority-low"><i class="ri-arrow-down-double-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Low</strong><small>Can wait</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 245px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 50px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color: #94a3b8;
    font-size: 8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top: 2px;
    font-size: 10px;
}
.Dropdown-priority {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
}
.Dropdown-priority-urgent {
    background: #fef2f2;
    color: #dc2626;
}
.Dropdown-priority-high {
    background: #fff7ed;
    color: #ea580c;
}
.Dropdown-priority-medium {
    background: #fffbeb;
    color: #d97706;
}
.Dropdown-priority-low {
    background: #eff6ff;
    color: #2563eb;
}
.Dropdown-chevron {
    color: #94a3b8;
    transition: transform .2s ease;
}
.Dropdown.is-open .Dropdown-chevron {
    transform: rotate(180deg);
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #fff;
    box-shadow: 0 20px 45px rgba(15,23,42,.11);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-option {
    width: 100%;
    min-height: 48px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #334155;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}
.Dropdown-check {
    visibility: hidden;
    color: #334155;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility: visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3665,
    name: "Assignee Dropdown",
    scriptId: 3665,
    preview: (
      <div
        className="DropdownPro Dropdown3665"
        data-dropdown-root
        data-dropdown-id="3665"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-avatar">JD</span>
          <span className="DropdownPro-copy">
            <small>Assignee</small>
            <strong data-dropdown-label>Jordan Davis</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search people..." />
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Jordan Davis"
            data-search-text="jordan davis frontend"
            type="button"
          >
            <span className="DropdownPro-avatar">JD</span>
            <span className="DropdownPro-option-copy">
              <strong>Jordan Davis</strong>
              <small>Frontend Developer</small>
            </span>
            <span className="DropdownPro-online"></span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Maya Chen"
            data-search-text="maya chen designer"
            type="button"
          >
            <span className="DropdownPro-avatar DropdownPro-avatar--pink">
              MC
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Maya Chen</strong>
              <small>Product Designer</small>
            </span>
            <span className="DropdownPro-online"></span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Noah Williams"
            data-search-text="noah williams backend"
            type="button"
          >
            <span className="DropdownPro-avatar DropdownPro-avatar--green">
              NW
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Noah Williams</strong>
              <small>Backend Developer</small>
            </span>
            <span className="DropdownPro-away"></span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-avatar">JD</span>
        <span class="Dropdown-copy">
            <small>Assignee</small>
            <strong data-dropdown-label>Jordan Davis</strong>
        </span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search">
            <i class="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search people...">
        </div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Jordan Davis" data-search-text="jordan davis frontend" type="button">
            <span class="Dropdown-avatar">JD</span>
            <span class="Dropdown-option-copy"><strong>Jordan Davis</strong><small>Frontend Developer</small></span>
            <span class="Dropdown-online"></span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Maya Chen" data-search-text="maya chen designer" type="button">
            <span class="Dropdown-avatar Dropdown-avatar-pink">MC</span>
            <span class="Dropdown-option-copy"><strong>Maya Chen</strong><small>Product Designer</small></span>
            <span class="Dropdown-online"></span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Noah Williams" data-search-text="noah williams backend" type="button">
            <span class="Dropdown-avatar Dropdown-avatar-green">NW</span>
            <span class="Dropdown-option-copy"><strong>Noah Williams</strong><small>Backend Developer</small></span>
            <span class="Dropdown-away"></span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 275px;
    font-family: Arial, sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 52px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #ffffff;
    color: #111827;
    cursor: pointer;
}
.Dropdown-avatar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #4f46e5;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}
.Dropdown-avatar-pink {
    background: #db2777;
}
.Dropdown-avatar-green {
    background: #059669;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color: #94a3b8;
    font-size: 8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top: 2px;
    font-size: 10px;
}
.Dropdown-chevron {
    color: #94a3b8;
}
.Dropdown-menu {
    position: absolute;
    z-index: 20;
    width: 100%;
    top: calc(100% + 7px);
    left: 0;
    padding: 7px;
    visibility: hidden;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #fff;
    box-shadow: 0 20px 45px rgba(15,23,42,.12);
    opacity: 0;
    transform: translateY(-5px);
    transition: .18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
.Dropdown-search {
    height: 35px;
    margin-bottom: 6px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #e2e8f0;
    border-radius: 7px;
    background: #f8fafc;
}
.Dropdown-search input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
}
.Dropdown-option {
    width: 100%;
    min-height: 49px;
    padding: 7px 8px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #334155;
    cursor: pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background: #f8fafc;
}
.Dropdown-online,
.Dropdown-away {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.Dropdown-online {
    background: #22c55e;
}
.Dropdown-away {
    background: #f59e0b;
}
.Dropdown-option[hidden] {
    display: none;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");
const search = dropdown.querySelector("[data-dropdown-search]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (option.dataset.searchText || option.textContent).toLowerCase();
        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((item) => item.classList.remove("is-selected"));
        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3666,
    name: "Department Dropdown",
    scriptId: 3666,
    preview: (
      <div
        className="DropdownPro Dropdown3666"
        data-dropdown-root
        data-dropdown-id="3666"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-building-4-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Department</small>
            <strong data-dropdown-label>Engineering</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Engineering"
            type="button"
          >
            <span className="DropdownPro-dept DropdownPro-dept--blue">
              <i className="ri-code-s-slash-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Engineering</strong>
              <small>32 members</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Product"
            type="button"
          >
            <span className="DropdownPro-dept DropdownPro-dept--violet">
              <i className="ri-layout-grid-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Product</strong>
              <small>14 members</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Design"
            type="button"
          >
            <span className="DropdownPro-dept DropdownPro-dept--pink">
              <i className="ri-palette-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Design</strong>
              <small>9 members</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Marketing"
            type="button"
          >
            <span className="DropdownPro-dept DropdownPro-dept--orange">
              <i className="ri-megaphone-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Marketing</strong>
              <small>11 members</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-building-4-line"></i></span>
        <span class="Dropdown-copy"><small>Department</small><strong data-dropdown-label>Engineering</strong></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Engineering" type="button">
            <span class="Dropdown-dept Dropdown-dept-blue"><i class="ri-code-s-slash-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Engineering</strong><small>32 members</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Product" type="button">
            <span class="Dropdown-dept Dropdown-dept-violet"><i class="ri-layout-grid-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Product</strong><small>14 members</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Design" type="button">
            <span class="Dropdown-dept Dropdown-dept-pink"><i class="ri-palette-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Design</strong><small>9 members</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Marketing" type="button">
            <span class="Dropdown-dept Dropdown-dept-orange"><i class="ri-megaphone-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Marketing</strong><small>11 members</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position: relative;
    width: 260px;
    font-family: Arial,sans-serif;
}
.Dropdown-trigger {
    width: 100%;
    min-height: 51px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #e5e7eb;
    border-radius: 11px;
    background: #fff;
    color: #111827;
    cursor: pointer;
}
.Dropdown-icon,
.Dropdown-dept {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 8px;
}
.Dropdown-icon {
    width: 31px;
    height: 31px;
    background: #f3f4f6;
    color: #4b5563;
}
.Dropdown-dept {
    width: 31px;
    height: 31px;
}
.Dropdown-dept-blue { background:#eff6ff;color:#2563eb; }
.Dropdown-dept-violet { background:#f5f3ff;color:#7c3aed; }
.Dropdown-dept-pink { background:#fdf2f8;color:#db2777; }
.Dropdown-dept-orange { background:#fff7ed;color:#ea580c; }
.Dropdown-copy,
.Dropdown-option-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color: #9ca3af;
    font-size: 8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top: 2px;
    font-size: 10px;
}
.Dropdown-chevron { color:#9ca3af; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #e5e7eb;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#374151;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f9fafb;
}
.Dropdown-check {
    visibility:hidden;
    color:#111827;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility:visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3667,
    name: "Download Quality Dropdown",
    scriptId: 3667,
    preview: (
      <div
        className="DropdownPro Dropdown3667"
        data-dropdown-root
        data-dropdown-id="3667"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-download-2-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Download quality</small>
            <strong data-dropdown-label>High quality</strong>
          </span>
          <span className="DropdownPro-badge">18 MB</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Original"
            type="button"
          >
            <span className="DropdownPro-quality">4K</span>
            <span className="DropdownPro-option-copy">
              <strong>Original</strong>
              <small>Maximum quality · 42 MB</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="High quality"
            type="button"
          >
            <span className="DropdownPro-quality">HD</span>
            <span className="DropdownPro-option-copy">
              <strong>High quality</strong>
              <small>Recommended · 18 MB</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Medium quality"
            type="button"
          >
            <span className="DropdownPro-quality">720</span>
            <span className="DropdownPro-option-copy">
              <strong>Medium quality</strong>
              <small>Smaller file · 9 MB</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-download-2-line"></i></span>
        <span class="Dropdown-copy"><small>Download quality</small><strong data-dropdown-label>High quality</strong></span>
        <span class="Dropdown-badge">18 MB</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-label="Original" type="button">
            <span class="Dropdown-quality">4K</span>
            <span class="Dropdown-option-copy"><strong>Original</strong><small>Maximum quality · 42 MB</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="High quality" type="button">
            <span class="Dropdown-quality">HD</span>
            <span class="Dropdown-option-copy"><strong>High quality</strong><small>Recommended · 18 MB</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Medium quality" type="button">
            <span class="Dropdown-quality">720</span>
            <span class="Dropdown-option-copy"><strong>Medium quality</strong><small>Smaller file · 9 MB</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:270px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 11px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #dce2e8;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon {
    width:31px;
    height:31px;
    display:grid;
    place-items:center;
    border-radius:8px;
    background:#eff6ff;
    color:#2563eb;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-badge {
    padding:4px 6px;
    border-radius:6px;
    background:#f1f5f9;
    color:#64748b;
    font-size:8px;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #dce2e8;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:50px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f8fafc;
}
.Dropdown-quality {
    width:34px;
    height:28px;
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:7px;
    background:#eff6ff;
    color:#2563eb;
    font-size:9px;
    font-weight:800;
}
.Dropdown-check {
    visibility:hidden;
    color:#2563eb;
}
.Dropdown-option.is-selected .Dropdown-check {
    visibility:visible;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3668,
    name: "Timezone Dropdown",
    scriptId: 3668,
    preview: (
      <div
        className="DropdownPro Dropdown3668"
        data-dropdown-root
        data-dropdown-id="3668"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-time-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Timezone</small>
            <strong data-dropdown-label>Amsterdam · UTC+2</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search timezone..." />
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Amsterdam · UTC+2"
            data-search-text="amsterdam netherlands europe utc+2"
            type="button"
          >
            <span className="DropdownPro-time">10:24</span>
            <span className="DropdownPro-option-copy">
              <strong>Amsterdam</strong>
              <small>Central European Time</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="London · UTC+1"
            data-search-text="london united kingdom utc+1"
            type="button"
          >
            <span className="DropdownPro-time">09:24</span>
            <span className="DropdownPro-option-copy">
              <strong>London</strong>
              <small>British Summer Time</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="New York · UTC-4"
            data-search-text="new york usa america utc-4"
            type="button"
          >
            <span className="DropdownPro-time">04:24</span>
            <span className="DropdownPro-option-copy">
              <strong>New York</strong>
              <small>Eastern Time</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Tokyo · UTC+9"
            data-search-text="tokyo japan asia utc+9"
            type="button"
          >
            <span className="DropdownPro-time">17:24</span>
            <span className="DropdownPro-option-copy">
              <strong>Tokyo</strong>
              <small>Japan Standard Time</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-time-line"></i></span>
        <span class="Dropdown-copy"><small>Timezone</small><strong data-dropdown-label>Amsterdam · UTC+2</strong></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-search"><i class="ri-search-line"></i><input data-dropdown-search placeholder="Search timezone..."></div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Amsterdam · UTC+2" data-search-text="amsterdam netherlands europe utc+2" type="button">
            <span class="Dropdown-time">10:24</span>
            <span class="Dropdown-option-copy"><strong>Amsterdam</strong><small>Central European Time</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="London · UTC+1" data-search-text="london united kingdom utc+1" type="button">
            <span class="Dropdown-time">09:24</span>
            <span class="Dropdown-option-copy"><strong>London</strong><small>British Summer Time</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="New York · UTC-4" data-search-text="new york usa america utc-4" type="button">
            <span class="Dropdown-time">04:24</span>
            <span class="Dropdown-option-copy"><strong>New York</strong><small>Eastern Time</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Tokyo · UTC+9" data-search-text="tokyo japan asia utc+9" type="button">
            <span class="Dropdown-time">17:24</span>
            <span class="Dropdown-option-copy"><strong>Tokyo</strong><small>Japan Standard Time</small></span>
            <i class="ri-check-line Dropdown-check"></i>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:285px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 11px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #2b3442;
    border-radius:11px;
    background:#111821;
    color:#eaf2ff;
    cursor:pointer;
}
.Dropdown-icon {
    width:31px;
    height:31px;
    display:grid;
    place-items:center;
    border-radius:8px;
    background:rgba(56,189,248,.12);
    color:#38bdf8;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#708297;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-chevron { color:#708297; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #2b3442;
    border-radius:11px;
    background:#151d28;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-search {
    height:35px;
    margin-bottom:6px;
    padding:0 9px;
    display:flex;
    align-items:center;
    gap:7px;
    border:1px solid #2b3442;
    border-radius:7px;
    background:#10161e;
}
.Dropdown-search input {
    width:100%;
    border:0;
    outline:0;
    background:transparent;
    color:#eaf2ff;
}
.Dropdown-search i { color:#708297; }
.Dropdown-option {
    width:100%;
    min-height:48px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#d8e2ee;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#1e2937;
}
.Dropdown-time {
    min-width:42px;
    padding:5px 6px;
    border-radius:6px;
    background:#10161e;
    color:#38bdf8;
    font-family:monospace;
    font-size:9px;
}
.Dropdown-check {
    visibility:hidden;
    color:#38bdf8;
}
.Dropdown-option.is-selected .Dropdown-check { visibility:visible; }
.Dropdown-option[hidden] { display:none; }`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");
const search = dropdown.querySelector("[data-dropdown-search]");
const options = dropdown.querySelectorAll("[data-dropdown-option]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

search.addEventListener("input", () => {
    const value = search.value.toLowerCase().trim();

    options.forEach((option) => {
        const text = (option.dataset.searchText || option.textContent).toLowerCase();
        option.hidden = value !== "" && !text.includes(value);
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((item) => item.classList.remove("is-selected"));
        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3669,
    name: "Billing Cycle Dropdown",
    scriptId: 3669,
    preview: (
      <div
        className="DropdownPro Dropdown3669"
        data-dropdown-root
        data-dropdown-id="3669"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-calendar-check-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Billing cycle</small>
            <strong data-dropdown-label>Annual</strong>
          </span>
          <span className="DropdownPro-save">Save 20%</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Monthly"
            type="button"
          >
            <span className="DropdownPro-option-copy">
              <strong>Monthly</strong>
              <small>€29 billed every month</small>
            </span>
            <span className="DropdownPro-price">€29</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Quarterly"
            type="button"
          >
            <span className="DropdownPro-option-copy">
              <strong>Quarterly</strong>
              <small>€79 every 3 months</small>
            </span>
            <span className="DropdownPro-price">€79</span>
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Annual"
            type="button"
          >
            <span className="DropdownPro-option-copy">
              <strong>Annual</strong>
              <small>€278 billed yearly</small>
            </span>
            <span className="DropdownPro-discount">BEST VALUE</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-calendar-check-line"></i></span>
        <span class="Dropdown-copy"><small>Billing cycle</small><strong data-dropdown-label>Annual</strong></span>
        <span class="Dropdown-save">Save 20%</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option" data-dropdown-option data-label="Monthly" type="button">
            <span class="Dropdown-option-copy"><strong>Monthly</strong><small>€29 billed every month</small></span>
            <span class="Dropdown-price">€29</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Quarterly" type="button">
            <span class="Dropdown-option-copy"><strong>Quarterly</strong><small>€79 every 3 months</small></span>
            <span class="Dropdown-price">€79</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Annual" type="button">
            <span class="Dropdown-option-copy"><strong>Annual</strong><small>€278 billed yearly</small></span>
            <span class="Dropdown-discount">BEST VALUE</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:275px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #dce5df;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon {
    width:31px;
    height:31px;
    display:grid;
    place-items:center;
    border-radius:8px;
    background:#f0fdf4;
    color:#16a34a;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-save {
    padding:4px 6px;
    border-radius:999px;
    background:#dcfce7;
    color:#15803d;
    font-size:7px;
    font-weight:800;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #dce5df;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:51px;
    padding:8px;
    display:flex;
    align-items:center;
    gap:8px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f8fafc;
}
.Dropdown-price {
    color:#475569;
    font-size:10px;
    font-weight:700;
}
.Dropdown-discount {
    padding:4px 6px;
    border-radius:5px;
    background:#16a34a;
    color:#fff;
    font-size:7px;
    font-weight:800;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3670,
    name: "Permission Scope Dropdown",
    scriptId: 3670,
    preview: (
      <div
        className="DropdownPro Dropdown3670"
        data-dropdown-root
        data-dropdown-id="3670"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-key-2-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Permission scope</strong>
            <small>API access rules</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Allowed actions</strong>
            <small>Choose one or more</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-permission">
              <i className="ri-eye-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Read</strong>
              <small>View resources and data</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-permission">
              <i className="ri-add-circle-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Create</strong>
              <small>Create new resources</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-permission">
              <i className="ri-edit-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Edit</strong>
              <small>Modify existing resources</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-permission DropdownPro-permission--danger">
              <i className="ri-delete-bin-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Delete</strong>
              <small>Remove resources permanently</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <div className="DropdownPro-footer">
            <button data-dropdown-close type="button">
              Apply permissions
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-key-2-line"></i></span>
        <span class="Dropdown-copy"><strong>Permission scope</strong><small>API access rules</small></span>
        <span class="Dropdown-count" data-dropdown-count>2</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head"><strong>Allowed actions</strong><small>Choose one or more</small></div>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-permission"><i class="ri-eye-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Read</strong><small>View resources and data</small></span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-permission"><i class="ri-add-circle-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Create</strong><small>Create new resources</small></span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-permission"><i class="ri-edit-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Edit</strong><small>Modify existing resources</small></span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-permission Dropdown-permission-danger"><i class="ri-delete-bin-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Delete</strong><small>Remove resources permanently</small></span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <div class="Dropdown-footer"><button data-dropdown-close type="button">Apply permissions</button></div>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:285px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #322c44;
    border-radius:11px;
    background:#17131f;
    color:#f5f3ff;
    cursor:pointer;
}
.Dropdown-icon,
.Dropdown-permission {
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:rgba(167,139,250,.13);
    color:#a78bfa;
}
.Dropdown-icon {
    width:31px;
    height:31px;
}
.Dropdown-permission {
    width:30px;
    height:30px;
}
.Dropdown-permission-danger {
    background:rgba(248,113,113,.12);
    color:#f87171;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong { font-size:10px; }
.Dropdown-copy small,
.Dropdown-option-copy small,
.Dropdown-head small {
    margin-top:2px;
    color:#857d98;
    font-size:8px;
}
.Dropdown-count {
    min-width:21px;
    height:21px;
    display:grid;
    place-items:center;
    border-radius:6px;
    background:#292238;
    color:#c4b5fd;
    font-size:9px;
}
.Dropdown-chevron { color:#857d98; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #322c44;
    border-radius:11px;
    background:#1d1827;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-head {
    padding:7px 8px 9px;
    display:flex;
    flex-direction:column;
}
.Dropdown-head strong { font-size:10px; }
.Dropdown-option {
    width:100%;
    min-height:50px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#ede9fe;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#282135;
}
.Dropdown-checkbox {
    width:14px;
    height:14px;
    accent-color:#8b5cf6;
    pointer-events:none;
}
.Dropdown-footer {
    margin-top:6px;
    padding-top:6px;
    border-top:1px solid #322c44;
}
.Dropdown-footer button {
    width:100%;
    height:34px;
    border:0;
    border-radius:7px;
    background:#7c3aed;
    color:#fff;
    font-weight:700;
    cursor:pointer;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");
const closeButton = dropdown.querySelector("[data-dropdown-close]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();
        option.classList.toggle("is-selected");

        const checkbox = option.querySelector("input");

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

closeButton.addEventListener("click", () => {
    dropdown.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3671,
    name: "Saved Views Dropdown",
    scriptId: 3671,
    preview: (
      <div
        className="DropdownPro Dropdown3671"
        data-dropdown-root
        data-dropdown-id="3671"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-bookmark-3-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Saved view</small>
            <strong data-dropdown-label>My tasks</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Views</strong>
            <small>Quick filters</small>
          </div>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="All tasks"
            type="button"
          >
            <i className="ri-list-check-3"></i>
            <span className="DropdownPro-option-copy">
              <strong>All tasks</strong>
              <small>Everything in this project</small>
            </span>
            <span className="DropdownPro-meta">124</span>
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="My tasks"
            type="button"
          >
            <i className="ri-user-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>My tasks</strong>
              <small>Assigned to you</small>
            </span>
            <span className="DropdownPro-meta">18</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Overdue"
            type="button"
          >
            <i className="ri-alarm-warning-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Overdue</strong>
              <small>Past their due date</small>
            </span>
            <span className="DropdownPro-meta DropdownPro-meta--danger">6</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Recently updated"
            type="button"
          >
            <i className="ri-history-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Recently updated</strong>
              <small>Changed in the last 24h</small>
            </span>
            <span className="DropdownPro-meta">11</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-bookmark-3-line"></i></span>
        <span class="Dropdown-copy"><small>Saved view</small><strong data-dropdown-label>My tasks</strong></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head"><strong>Views</strong><small>Quick filters</small></div>

        <button class="Dropdown-option" data-dropdown-option data-label="All tasks" type="button">
            <i class="ri-list-check-3"></i>
            <span class="Dropdown-option-copy"><strong>All tasks</strong><small>Everything in this project</small></span>
            <span class="Dropdown-meta">124</span>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="My tasks" type="button">
            <i class="ri-user-line"></i>
            <span class="Dropdown-option-copy"><strong>My tasks</strong><small>Assigned to you</small></span>
            <span class="Dropdown-meta">18</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Overdue" type="button">
            <i class="ri-alarm-warning-line"></i>
            <span class="Dropdown-option-copy"><strong>Overdue</strong><small>Past their due date</small></span>
            <span class="Dropdown-meta Dropdown-meta-danger">6</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Recently updated" type="button">
            <i class="ri-history-line"></i>
            <span class="Dropdown-option-copy"><strong>Recently updated</strong><small>Changed in the last 24h</small></span>
            <span class="Dropdown-meta">11</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:275px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:50px;
    padding:7px 11px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #e2e8f0;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon {
    width:31px;
    height:31px;
    display:grid;
    place-items:center;
    border-radius:8px;
    background:#fef3c7;
    color:#d97706;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small,
.Dropdown-head small {
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #e2e8f0;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-head {
    padding:7px 8px 9px;
    display:flex;
    justify-content:space-between;
}
.Dropdown-head strong { font-size:10px; }
.Dropdown-option {
    width:100%;
    min-height:48px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f8fafc;
}
.Dropdown-option > i {
    color:#64748b;
}
.Dropdown-meta {
    min-width:25px;
    padding:4px 6px;
    border-radius:6px;
    background:#f1f5f9;
    color:#64748b;
    font-size:8px;
    text-align:center;
}
.Dropdown-meta-danger {
    background:#fef2f2;
    color:#dc2626;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3672,
    name: "Integration Selector Dropdown",
    scriptId: 3672,
    preview: (
      <div
        className="DropdownPro Dropdown3672"
        data-dropdown-root
        data-dropdown-id="3672"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-plug-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Integration</small>
            <strong data-dropdown-label>GitHub</strong>
          </span>
          <span className="DropdownPro-connected">CONNECTED</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="GitHub"
            type="button"
          >
            <span className="DropdownPro-app">
              <i className="ri-github-fill"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>GitHub</strong>
              <small>Source control</small>
            </span>
            <span className="DropdownPro-online"></span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Slack"
            type="button"
          >
            <span className="DropdownPro-app">
              <i className="ri-slack-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Slack</strong>
              <small>Team notifications</small>
            </span>
            <span className="DropdownPro-online"></span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Notion"
            type="button"
          >
            <span className="DropdownPro-app">
              <i className="ri-file-text-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Notion</strong>
              <small>Documentation</small>
            </span>
            <span className="DropdownPro-offline"></span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Linear"
            type="button"
          >
            <span className="DropdownPro-app">
              <i className="ri-shapes-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Linear</strong>
              <small>Issue tracking</small>
            </span>
            <span className="DropdownPro-offline"></span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-plug-line"></i></span>
        <span class="Dropdown-copy"><small>Integration</small><strong data-dropdown-label>GitHub</strong></span>
        <span class="Dropdown-connected">CONNECTED</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="GitHub" type="button">
            <span class="Dropdown-app"><i class="ri-github-fill"></i></span>
            <span class="Dropdown-option-copy"><strong>GitHub</strong><small>Source control</small></span>
            <span class="Dropdown-online"></span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Slack" type="button">
            <span class="Dropdown-app"><i class="ri-slack-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Slack</strong><small>Team notifications</small></span>
            <span class="Dropdown-online"></span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Notion" type="button">
            <span class="Dropdown-app"><i class="ri-file-text-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Notion</strong><small>Documentation</small></span>
            <span class="Dropdown-offline"></span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Linear" type="button">
            <span class="Dropdown-app"><i class="ri-shapes-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Linear</strong><small>Issue tracking</small></span>
            <span class="Dropdown-offline"></span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #30343b;
    border-radius:11px;
    background:#15171b;
    color:#f5f5f5;
    cursor:pointer;
}
.Dropdown-icon,
.Dropdown-app {
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:#22252b;
    color:#f5f5f5;
}
.Dropdown-icon {
    width:31px;
    height:31px;
}
.Dropdown-app {
    width:31px;
    height:31px;
    font-size:15px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#7d838d;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-connected {
    padding:4px 5px;
    border-radius:5px;
    background:rgba(34,197,94,.12);
    color:#4ade80;
    font-size:6px;
    font-weight:800;
}
.Dropdown-chevron { color:#7d838d; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #30343b;
    border-radius:11px;
    background:#1a1d22;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#e5e7eb;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#24272d;
}
.Dropdown-online,
.Dropdown-offline {
    width:8px;
    height:8px;
    border-radius:50%;
}
.Dropdown-online { background:#22c55e; }
.Dropdown-offline { background:#52525b; }`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3673,
    name: "Cloud Region Dropdown",
    scriptId: 3673,
    preview: (
      <div
        className="DropdownPro Dropdown3673"
        data-dropdown-root
        data-dropdown-id="3673"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-cloud-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Cloud region</small>
            <strong data-dropdown-label>Europe West</strong>
          </span>
          <span className="DropdownPro-latency">18 ms</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Europe West"
            type="button"
          >
            <span className="DropdownPro-region">EU</span>
            <span className="DropdownPro-option-copy">
              <strong>Europe West</strong>
              <small>Amsterdam, NL</small>
            </span>
            <span className="DropdownPro-latency DropdownPro-latency--good">
              18 ms
            </span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Europe Central"
            type="button"
          >
            <span className="DropdownPro-region">EU</span>
            <span className="DropdownPro-option-copy">
              <strong>Europe Central</strong>
              <small>Frankfurt, DE</small>
            </span>
            <span className="DropdownPro-latency DropdownPro-latency--good">
              27 ms
            </span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="US East"
            type="button"
          >
            <span className="DropdownPro-region">US</span>
            <span className="DropdownPro-option-copy">
              <strong>US East</strong>
              <small>Virginia, USA</small>
            </span>
            <span className="DropdownPro-latency">92 ms</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Asia Pacific"
            type="button"
          >
            <span className="DropdownPro-region">AP</span>
            <span className="DropdownPro-option-copy">
              <strong>Asia Pacific</strong>
              <small>Singapore</small>
            </span>
            <span className="DropdownPro-latency">181 ms</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-cloud-line"></i></span>
        <span class="Dropdown-copy"><small>Cloud region</small><strong data-dropdown-label>Europe West</strong></span>
        <span class="Dropdown-latency">18 ms</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Europe West" type="button">
            <span class="Dropdown-region">EU</span>
            <span class="Dropdown-option-copy"><strong>Europe West</strong><small>Amsterdam, NL</small></span>
            <span class="Dropdown-latency Dropdown-latency-good">18 ms</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Europe Central" type="button">
            <span class="Dropdown-region">EU</span>
            <span class="Dropdown-option-copy"><strong>Europe Central</strong><small>Frankfurt, DE</small></span>
            <span class="Dropdown-latency Dropdown-latency-good">27 ms</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="US East" type="button">
            <span class="Dropdown-region">US</span>
            <span class="Dropdown-option-copy"><strong>US East</strong><small>Virginia, USA</small></span>
            <span class="Dropdown-latency">92 ms</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Asia Pacific" type="button">
            <span class="Dropdown-region">AP</span>
            <span class="Dropdown-option-copy"><strong>Asia Pacific</strong><small>Singapore</small></span>
            <span class="Dropdown-latency">181 ms</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #283746;
    border-radius:11px;
    background:#101923;
    color:#eef6ff;
    cursor:pointer;
}
.Dropdown-icon {
    width:31px;
    height:31px;
    display:grid;
    place-items:center;
    border-radius:8px;
    background:rgba(14,165,233,.12);
    color:#38bdf8;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#72869a;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-latency {
    padding:4px 6px;
    border-radius:6px;
    background:#1c2733;
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-latency-good {
    color:#4ade80;
}
.Dropdown-chevron { color:#72869a; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #283746;
    border-radius:11px;
    background:#151f2a;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#dbeafe;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#1d2a37;
}
.Dropdown-region {
    width:30px;
    height:30px;
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:#101923;
    color:#38bdf8;
    font-size:8px;
    font-weight:800;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3674,
    name: "Analytics Metric Dropdown",
    scriptId: 3674,
    preview: (
      <div
        className="DropdownPro Dropdown3674"
        data-dropdown-root
        data-dropdown-id="3674"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-line-chart-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Primary metric</small>
            <strong data-dropdown-label>Revenue</strong>
          </span>
          <span className="DropdownPro-growth">+12.4%</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Revenue"
            type="button"
          >
            <span className="DropdownPro-metric">
              <i className="ri-money-euro-circle-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Revenue</strong>
              <small>€128.4K this month</small>
            </span>
            <span className="DropdownPro-growth">+12.4%</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Conversions"
            type="button"
          >
            <span className="DropdownPro-metric">
              <i className="ri-exchange-funds-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Conversions</strong>
              <small>3,842 completed</small>
            </span>
            <span className="DropdownPro-growth">+8.1%</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Visitors"
            type="button"
          >
            <span className="DropdownPro-metric">
              <i className="ri-group-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Visitors</strong>
              <small>84.2K unique users</small>
            </span>
            <span className="DropdownPro-growth">+5.6%</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Retention"
            type="button"
          >
            <span className="DropdownPro-metric">
              <i className="ri-loop-right-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Retention</strong>
              <small>68.5% returning</small>
            </span>
            <span className="DropdownPro-growth DropdownPro-growth--soft">
              +1.2%
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-line-chart-line"></i></span>
        <span class="Dropdown-copy"><small>Primary metric</small><strong data-dropdown-label>Revenue</strong></span>
        <span class="Dropdown-growth">+12.4%</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Revenue" type="button">
            <span class="Dropdown-metric"><i class="ri-money-euro-circle-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Revenue</strong><small>€128.4K this month</small></span>
            <span class="Dropdown-growth">+12.4%</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Conversions" type="button">
            <span class="Dropdown-metric"><i class="ri-exchange-funds-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Conversions</strong><small>3,842 completed</small></span>
            <span class="Dropdown-growth">+8.1%</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Visitors" type="button">
            <span class="Dropdown-metric"><i class="ri-group-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Visitors</strong><small>84.2K unique users</small></span>
            <span class="Dropdown-growth">+5.6%</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Retention" type="button">
            <span class="Dropdown-metric"><i class="ri-loop-right-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Retention</strong><small>68.5% returning</small></span>
            <span class="Dropdown-growth">+1.2%</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #dce4df;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon,
.Dropdown-metric {
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:#ecfdf5;
    color:#059669;
}
.Dropdown-icon {
    width:31px;
    height:31px;
}
.Dropdown-metric {
    width:30px;
    height:30px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-growth {
    padding:4px 6px;
    border-radius:6px;
    background:#ecfdf5;
    color:#059669;
    font-size:8px;
    font-weight:700;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #dce4df;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f8fafc;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3675,
    name: "Professional File Actions Dropdown",
    scriptId: 3675,
    preview: (
      <div
        className="DropdownPro Dropdown3675"
        data-dropdown-root
        data-dropdown-id="3675"
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-file">
            <i className="ri-file-code-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>ProductGallery.tsx</strong>
            <small>12.8 KB · Modified today</small>
          </span>
          <i className="ri-more-2-fill DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>File actions</strong>
            <small>ProductGallery.tsx</small>
          </div>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-pencil-line"></i>
            <span>Rename</span>
            <kbd>F2</kbd>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-folder-transfer-line"></i>
            <span>Move to folder</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-file-copy-line"></i>
            <span>Duplicate</span>
            <kbd>⌘D</kbd>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-download-line"></i>
            <span>Download</span>
          </button>

          <div className="DropdownPro-divider"></div>

          <button
            className="DropdownPro-option DropdownPro-danger"
            data-dropdown-option
            type="button"
          >
            <i className="ri-delete-bin-line"></i>
            <span>Delete file</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-file"><i class="ri-file-code-line"></i></span>
        <span class="Dropdown-copy">
            <strong>ProductGallery.tsx</strong>
            <small>12.8 KB · Modified today</small>
        </span>
        <i class="ri-more-2-fill Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head">
            <strong>File actions</strong>
            <small>ProductGallery.tsx</small>
        </div>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-pencil-line"></i><span>Rename</span><kbd>F2</kbd>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-folder-transfer-line"></i><span>Move to folder</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-file-copy-line"></i><span>Duplicate</span><kbd>⌘D</kbd>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-download-line"></i><span>Download</span>
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-option Dropdown-danger" data-dropdown-option type="button">
            <i class="ri-delete-bin-line"></i><span>Delete file</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #2d3138;
    border-radius:11px;
    background:#16181c;
    color:#f5f5f5;
    cursor:pointer;
}
.Dropdown-file {
    width:32px;
    height:32px;
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:#22252b;
    color:#60a5fa;
}
.Dropdown-copy {
    min-width:0;
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy strong {
    max-width:190px;
    overflow:hidden;
    font-size:10px;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.Dropdown-copy small,
.Dropdown-head small {
    margin-top:2px;
    color:#7d838d;
    font-size:8px;
}
.Dropdown-chevron { color:#7d838d; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #2d3138;
    border-radius:11px;
    background:#1b1d22;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-head {
    padding:7px 8px 9px;
    display:flex;
    flex-direction:column;
}
.Dropdown-head strong { font-size:10px; }
.Dropdown-option {
    width:100%;
    height:37px;
    padding:0 9px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:7px;
    background:transparent;
    color:#d4d4d8;
    cursor:pointer;
}
.Dropdown-option:hover {
    background:#25282e;
}
.Dropdown-option > i {
    width:17px;
    color:#8b929c;
}
.Dropdown-option span {
    flex:1;
    text-align:left;
}
.Dropdown-option kbd {
    padding:2px 5px;
    border:1px solid #343840;
    border-radius:4px;
    background:#202329;
    color:#777e88;
    font-size:7px;
}
.Dropdown-divider {
    height:1px;
    margin:5px 0;
    background:#2d3138;
}
.Dropdown-danger,
.Dropdown-danger > i {
    color:#f87171;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3676,
    name: "Deployment Target Dropdown",
    scriptId: 3676,
    preview: (
      <div
        className="DropdownPro Dropdown3676"
        data-dropdown-root
        data-dropdown-id="3676"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-rocket-2-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Deploy to</small>
            <strong data-dropdown-label>Production</strong>
          </span>
          <span className="DropdownPro-status DropdownPro-status--green"></span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Deployment target</strong>
            <small>Select destination</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Production"
            type="button"
          >
            <span className="DropdownPro-target">
              <i className="ri-global-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Production</strong>
              <small>app.example.com</small>
            </span>
            <span className="DropdownPro-live">LIVE</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Preview"
            type="button"
          >
            <span className="DropdownPro-target">
              <i className="ri-eye-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Preview</strong>
              <small>preview.example.com</small>
            </span>
            <span className="DropdownPro-meta">AUTO</span>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Local"
            type="button"
          >
            <span className="DropdownPro-target">
              <i className="ri-computer-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Local</strong>
              <small>localhost:5173</small>
            </span>
            <span className="DropdownPro-meta">DEV</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-rocket-2-line"></i></span>
        <span class="Dropdown-copy"><small>Deploy to</small><strong data-dropdown-label>Production</strong></span>
        <span class="Dropdown-status"></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head"><strong>Deployment target</strong><small>Select destination</small></div>

        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Production" type="button">
            <span class="Dropdown-target"><i class="ri-global-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Production</strong><small>app.example.com</small></span>
            <span class="Dropdown-live">LIVE</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Preview" type="button">
            <span class="Dropdown-target"><i class="ri-eye-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Preview</strong><small>preview.example.com</small></span>
            <span class="Dropdown-meta">AUTO</span>
        </button>

        <button class="Dropdown-option" data-dropdown-option data-label="Local" type="button">
            <span class="Dropdown-target"><i class="ri-computer-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Local</strong><small>localhost:5173</small></span>
            <span class="Dropdown-meta">DEV</span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #29323e;
    border-radius:11px;
    background:#111721;
    color:#f8fafc;
    cursor:pointer;
}
.Dropdown-icon,
.Dropdown-target {
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:rgba(59,130,246,.13);
    color:#60a5fa;
}
.Dropdown-icon {
    width:31px;
    height:31px;
}
.Dropdown-target {
    width:30px;
    height:30px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy small,
.Dropdown-option-copy small,
.Dropdown-head small {
    color:#77869a;
    font-size:8px;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    margin-top:2px;
    font-size:10px;
}
.Dropdown-status {
    width:8px;
    height:8px;
    border-radius:50%;
    background:#22c55e;
}
.Dropdown-chevron { color:#77869a; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #29323e;
    border-radius:11px;
    background:#161d27;
    box-shadow:0 20px 45px rgba(0,0,0,.35);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-head {
    padding:7px 8px 9px;
    display:flex;
    flex-direction:column;
}
.Dropdown-head strong { font-size:10px; }
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#e2e8f0;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#202a37;
}
.Dropdown-live,
.Dropdown-meta {
    padding:4px 6px;
    border-radius:5px;
    font-size:7px;
    font-weight:800;
}
.Dropdown-live {
    background:rgba(34,197,94,.13);
    color:#4ade80;
}
.Dropdown-meta {
    background:#202a37;
    color:#94a3b8;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const label = dropdown.querySelector("[data-dropdown-label]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.querySelectorAll("[data-dropdown-option]").forEach((item) => {
            item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");
        label.textContent = option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3677,
    name: "Customer Segment Dropdown",
    scriptId: 3677,
    preview: (
      <div
        className="DropdownPro Dropdown3677"
        data-dropdown-root
        data-dropdown-id="3677"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-group-3-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Customer segments</strong>
            <small>Filter audience</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Audience</strong>
            <small>Select segments</small>
          </div>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-segment">
              <i className="ri-building-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Enterprise</strong>
              <small>500+ employees</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-segment">
              <i className="ri-store-2-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>SMB</strong>
              <small>10–499 employees</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-segment">
              <i className="ri-rocket-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Startup</strong>
              <small>Early-stage teams</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-segment">
              <i className="ri-user-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Individual</strong>
              <small>Personal accounts</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>

          <div className="DropdownPro-footer">
            <button data-dropdown-close type="button">
              Apply segments
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-group-3-line"></i></span>
        <span class="Dropdown-copy"><strong>Customer segments</strong><small>Filter audience</small></span>
        <span class="Dropdown-count" data-dropdown-count>2</span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-head"><strong>Audience</strong><small>Select segments</small></div>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-segment"><i class="ri-building-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Enterprise</strong><small>500+ employees</small></span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option is-selected" data-dropdown-option type="button">
            <span class="Dropdown-segment"><i class="ri-store-2-line"></i></span>
            <span class="Dropdown-option-copy"><strong>SMB</strong><small>10–499 employees</small></span>
            <input class="Dropdown-checkbox" type="checkbox" checked>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-segment"><i class="ri-rocket-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Startup</strong><small>Early-stage teams</small></span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <span class="Dropdown-segment"><i class="ri-user-line"></i></span>
            <span class="Dropdown-option-copy"><strong>Individual</strong><small>Personal accounts</small></span>
            <input class="Dropdown-checkbox" type="checkbox">
        </button>

        <div class="Dropdown-footer"><button data-dropdown-close type="button">Apply segments</button></div>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:280px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:52px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #e2e8f0;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon,
.Dropdown-segment {
    display:grid;
    place-items:center;
    flex-shrink:0;
    border-radius:8px;
    background:#f0f9ff;
    color:#0284c7;
}
.Dropdown-icon {
    width:31px;
    height:31px;
}
.Dropdown-segment {
    width:30px;
    height:30px;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong { font-size:10px; }
.Dropdown-copy small,
.Dropdown-option-copy small,
.Dropdown-head small {
    margin-top:2px;
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-count {
    min-width:21px;
    height:21px;
    display:grid;
    place-items:center;
    border-radius:6px;
    background:#e0f2fe;
    color:#0284c7;
    font-size:9px;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #e2e8f0;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.11);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-head {
    padding:7px 8px 9px;
    display:flex;
    justify-content:space-between;
}
.Dropdown-head strong { font-size:10px; }
.Dropdown-option {
    width:100%;
    min-height:49px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover,
.Dropdown-option.is-selected {
    background:#f8fafc;
}
.Dropdown-checkbox {
    width:14px;
    height:14px;
    accent-color:#0284c7;
    pointer-events:none;
}
.Dropdown-footer {
    margin-top:6px;
    padding-top:6px;
    border-top:1px solid #e2e8f0;
}
.Dropdown-footer button {
    width:100%;
    height:34px;
    border:0;
    border-radius:7px;
    background:#0284c7;
    color:#fff;
    font-weight:700;
    cursor:pointer;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");
const count = dropdown.querySelector("[data-dropdown-count]");
const closeButton = dropdown.querySelector("[data-dropdown-close]");

const updateCount = () => {
    count.textContent = dropdown.querySelectorAll(
        "[data-dropdown-option].is-selected"
    ).length;
};

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();
        option.classList.toggle("is-selected");

        const checkbox = option.querySelector("input");

        if (checkbox) {
            checkbox.checked = option.classList.contains("is-selected");
        }

        updateCount();
    });
});

closeButton.addEventListener("click", () => {
    dropdown.classList.remove("is-open");
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

updateCount();`,
  },
  {
    id: 3678,
    name: "Security Actions Dropdown",
    scriptId: 3678,
    preview: (
      <div
        className="DropdownPro Dropdown3678"
        data-dropdown-root
        data-dropdown-id="3678"
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-shield-check-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Account security</strong>
            <small>Protected · No issues detected</small>
          </span>
          <span className="DropdownPro-secure">
            <i className="ri-lock-2-line"></i>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>

        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-security-card">
            <span>
              <i className="ri-shield-check-line"></i>
            </span>
            <div>
              <strong>Your account is secure</strong>
              <small>Last reviewed today</small>
            </div>
          </div>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-history-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Login activity</strong>
              <small>Review recent sessions</small>
            </span>
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-key-2-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Change password</strong>
              <small>Update account password</small>
            </span>
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <i className="ri-smartphone-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Two-factor authentication</strong>
              <small>Enabled</small>
            </span>
            <span className="DropdownPro-enabled">ON</span>
          </button>

          <div className="DropdownPro-divider"></div>

          <button
            className="DropdownPro-option DropdownPro-danger"
            data-dropdown-option
            type="button"
          >
            <i className="ri-logout-box-r-line"></i>
            <span className="DropdownPro-option-copy">
              <strong>Sign out other sessions</strong>
              <small>Keep only this device</small>
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-shield-check-line"></i></span>
        <span class="Dropdown-copy">
            <strong>Account security</strong>
            <small>Protected · No issues detected</small>
        </span>
        <span class="Dropdown-secure"><i class="ri-lock-2-line"></i></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>

    <div class="Dropdown-menu" data-dropdown-menu>
        <div class="Dropdown-security-card">
            <span><i class="ri-shield-check-line"></i></span>
            <div>
                <strong>Your account is secure</strong>
                <small>Last reviewed today</small>
            </div>
        </div>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-history-line"></i>
            <span class="Dropdown-option-copy"><strong>Login activity</strong><small>Review recent sessions</small></span>
            <i class="ri-arrow-right-s-line"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-key-2-line"></i>
            <span class="Dropdown-option-copy"><strong>Change password</strong><small>Update account password</small></span>
            <i class="ri-arrow-right-s-line"></i>
        </button>

        <button class="Dropdown-option" data-dropdown-option type="button">
            <i class="ri-smartphone-line"></i>
            <span class="Dropdown-option-copy"><strong>Two-factor authentication</strong><small>Enabled</small></span>
            <span class="Dropdown-enabled">ON</span>
        </button>

        <div class="Dropdown-divider"></div>

        <button class="Dropdown-option Dropdown-danger" data-dropdown-option type="button">
            <i class="ri-logout-box-r-line"></i>
            <span class="Dropdown-option-copy"><strong>Sign out other sessions</strong><small>Keep only this device</small></span>
        </button>
    </div>
</div>`,
    css: `.Dropdown {
    position:relative;
    width:290px;
    font-family:Arial,sans-serif;
}
.Dropdown-trigger {
    width:100%;
    min-height:54px;
    padding:7px 10px;
    display:flex;
    align-items:center;
    gap:9px;
    border:1px solid #dce6df;
    border-radius:11px;
    background:#fff;
    color:#111827;
    cursor:pointer;
}
.Dropdown-icon {
    width:33px;
    height:33px;
    display:grid;
    place-items:center;
    border-radius:9px;
    background:#ecfdf5;
    color:#059669;
}
.Dropdown-copy,
.Dropdown-option-copy {
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:flex-start;
}
.Dropdown-copy strong,
.Dropdown-option-copy strong {
    font-size:10px;
}
.Dropdown-copy small,
.Dropdown-option-copy small {
    margin-top:2px;
    color:#94a3b8;
    font-size:8px;
}
.Dropdown-secure {
    width:24px;
    height:24px;
    display:grid;
    place-items:center;
    border-radius:7px;
    background:#ecfdf5;
    color:#059669;
}
.Dropdown-chevron { color:#94a3b8; }
.Dropdown-menu {
    position:absolute;
    z-index:20;
    width:100%;
    top:calc(100% + 7px);
    left:0;
    padding:7px;
    visibility:hidden;
    border:1px solid #dce6df;
    border-radius:11px;
    background:#fff;
    box-shadow:0 20px 45px rgba(15,23,42,.12);
    opacity:0;
    transform:translateY(-5px);
    transition:.18s ease;
}
.Dropdown.is-open .Dropdown-menu {
    visibility:visible;
    opacity:1;
    transform:translateY(0);
}
.Dropdown-security-card {
    margin-bottom:6px;
    padding:9px;
    display:flex;
    align-items:center;
    gap:8px;
    border:1px solid #d1fae5;
    border-radius:8px;
    background:#ecfdf5;
}
.Dropdown-security-card > span {
    color:#059669;
    font-size:17px;
}
.Dropdown-security-card div {
    display:flex;
    flex-direction:column;
}
.Dropdown-security-card strong {
    color:#065f46;
    font-size:9px;
}
.Dropdown-security-card small {
    margin-top:2px;
    color:#6b8f82;
    font-size:8px;
}
.Dropdown-option {
    width:100%;
    min-height:48px;
    padding:7px 8px;
    display:flex;
    align-items:center;
    gap:9px;
    border:0;
    border-radius:8px;
    background:transparent;
    color:#334155;
    cursor:pointer;
}
.Dropdown-option:hover {
    background:#f8fafc;
}
.Dropdown-option > i:first-child {
    color:#64748b;
}
.Dropdown-option > i:last-child {
    color:#94a3b8;
}
.Dropdown-enabled {
    padding:4px 6px;
    border-radius:5px;
    background:#dcfce7;
    color:#15803d;
    font-size:7px;
    font-weight:800;
}
.Dropdown-divider {
    height:1px;
    margin:5px 0;
    background:#e2e8f0;
}
.Dropdown-danger,
.Dropdown-danger > i:first-child {
    color:#dc2626;
}`,
    javascript: `const dropdown = document.querySelector(".Dropdown");
const trigger = dropdown.querySelector("[data-dropdown-trigger]");

trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdown.classList.toggle("is-open");
});

dropdown.querySelectorAll("[data-dropdown-option]").forEach((option) => {
    option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
    });
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
    }
});`,
  },
  {
    id: 3679,
    name: "Search Scope Dropdown",
    scriptId: 3679,
    preview: (
      <div
        className="DropdownPro Dropdown3679"
        data-dropdown-root
        data-dropdown-id="3679"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-search-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Search in</small>
            <strong data-dropdown-label>Everything</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-head">
            <strong>Search scope</strong>
            <small>Choose where to search</small>
          </div>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Everything"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-global-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Everything</strong>
              <small>Search across all content</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Projects"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-folder-3-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Projects</strong>
              <small>Projects and workspaces</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="People"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-team-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>People</strong>
              <small>Members and collaborators</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Documentation"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-book-open-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Documentation</strong>
              <small>Guides and documents</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button">
        <span class="Dropdown-icon"><i class="ri-search-line"></i></span>
        <span class="Dropdown-copy"><small>Search in</small><strong data-dropdown-label>Everything</strong></span>
        <i class="ri-arrow-down-s-line Dropdown-chevron"></i>
    </button>
    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Everything" type="button"><i class="ri-global-line"></i><span>Everything</span></button>
        <button class="Dropdown-option" data-dropdown-option data-label="Projects" type="button"><i class="ri-folder-3-line"></i><span>Projects</span></button>
        <button class="Dropdown-option" data-dropdown-option data-label="People" type="button"><i class="ri-team-line"></i><span>People</span></button>
        <button class="Dropdown-option" data-dropdown-option data-label="Documentation" type="button"><i class="ri-book-open-line"></i><span>Documentation</span></button>
    </div>
</div>`,
    css: `.Dropdown{--a:#2563eb;position:relative;width:260px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:48px;padding:0 11px;display:flex;align-items:center;gap:9px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;color:#111827;cursor:pointer}.Dropdown-icon{width:30px;height:30px;display:grid;place-items:center;border-radius:8px;background:#eff6ff;color:var(--a)}.Dropdown-copy{display:flex;flex:1;flex-direction:column;align-items:flex-start}.Dropdown-copy small{color:#94a3b8;font-size:8px}.Dropdown-copy strong{font-size:10px}.Dropdown-chevron{color:#94a3b8;transition:.2s}.Dropdown.is-open .Dropdown-chevron{transform:rotate(180deg)}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;box-shadow:0 18px 40px #0f172a1f;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-option{width:100%;height:38px;padding:0 9px;display:flex;align-items:center;gap:9px;border:0;border-radius:7px;background:transparent;color:#334155;cursor:pointer}.Dropdown-option:hover,.Dropdown-option.is-selected{background:#f8fafc}.Dropdown-option i{color:var(--a)}`,
    javascript: `const dropdown=document.querySelector(".Dropdown");
const trigger=dropdown.querySelector("[data-dropdown-trigger]");
const label=dropdown.querySelector("[data-dropdown-label]");
trigger.addEventListener("click",e=>{e.stopPropagation();dropdown.classList.toggle("is-open")});
dropdown.querySelectorAll("[data-dropdown-option]").forEach(option=>{
    option.addEventListener("click",()=>{
        dropdown.querySelectorAll("[data-dropdown-option]").forEach(item=>item.classList.remove("is-selected"));
        option.classList.add("is-selected");
        label.textContent=option.dataset.label;
        dropdown.classList.remove("is-open");
    });
});
document.addEventListener("click",e=>{if(!dropdown.contains(e.target))dropdown.classList.remove("is-open")});`,
  },
  {
    id: 3680,
    name: "Professional Sort Dropdown",
    scriptId: 3680,
    preview: (
      <div
        className="DropdownPro Dropdown3680"
        data-dropdown-root
        data-dropdown-id="3680"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-sort-desc"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Sort results</small>
            <strong data-dropdown-label>Relevance</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Relevance"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-sparkling-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Relevance</strong>
              <small>Best matching results</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Newest first"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-time-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Newest first</strong>
              <small>Recently created first</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Oldest first"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-history-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Oldest first</strong>
              <small>Oldest items first</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Alphabetical"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-sort-alphabet-asc"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Alphabetical</strong>
              <small>Sort from A to Z</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select>
    <button class="Dropdown-trigger" data-dropdown-trigger type="button"><i class="ri-sort-desc"></i><span data-dropdown-label>Relevance</span><i class="ri-arrow-down-s-line"></i></button>
    <div class="Dropdown-menu" data-dropdown-menu>
        <button class="Dropdown-option is-selected" data-dropdown-option data-label="Relevance" type="button">Relevance</button>
        <button class="Dropdown-option" data-dropdown-option data-label="Newest first" type="button">Newest first</button>
        <button class="Dropdown-option" data-dropdown-option data-label="Oldest first" type="button">Oldest first</button>
        <button class="Dropdown-option" data-dropdown-option data-label="Alphabetical" type="button">Alphabetical</button>
    </div>
</div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:45px;padding:0 12px;display:flex;align-items:center;gap:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#111827;cursor:pointer}.Dropdown-trigger span{flex:1;text-align:left}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e5e7eb;border-radius:10px;background:#fff;box-shadow:0 18px 35px #0f172a1f;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-option{width:100%;height:37px;padding:0 10px;border:0;border-radius:7px;background:transparent;color:#374151;text-align:left;cursor:pointer}.Dropdown-option:hover,.Dropdown-option.is-selected{background:#f3f4f6;color:#111827}`,
    javascript: `const dropdown=document.querySelector(".Dropdown"),trigger=dropdown.querySelector("[data-dropdown-trigger]"),label=dropdown.querySelector("[data-dropdown-label]");
trigger.onclick=e=>{e.stopPropagation();dropdown.classList.toggle("is-open")};
dropdown.querySelectorAll("[data-dropdown-option]").forEach(option=>option.onclick=()=>{dropdown.querySelectorAll("[data-dropdown-option]").forEach(item=>item.classList.remove("is-selected"));option.classList.add("is-selected");label.textContent=option.dataset.label;dropdown.classList.remove("is-open")});
document.addEventListener("click",e=>{if(!dropdown.contains(e.target))dropdown.classList.remove("is-open")});`,
  },
  {
    id: 3681,
    name: "Release Channel Dropdown",
    scriptId: 3681,
    preview: (
      <div
        className="DropdownPro Dropdown3681"
        data-dropdown-root
        data-dropdown-id="3681"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-rocket-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Release channel</small>
            <strong data-dropdown-label>Stable</strong>
          </span>
          <span className="DropdownPro-chip DropdownPro-chip--green">SAFE</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Stable"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-shield-check-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Stable</strong>
              <small>Recommended for production</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--green">
              v4.8
            </span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Beta"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-flask-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Beta</strong>
              <small>Early access features</small>
            </span>
            <span className="DropdownPro-chip">v4.9</span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Canary"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-code-box-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Canary</strong>
              <small>Latest development build</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--orange">
              EDGE
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button class="Dropdown-trigger" data-dropdown-trigger type="button"><i class="ri-rocket-line"></i><span data-dropdown-label>Stable</span><i class="ri-arrow-down-s-line"></i></button><div class="Dropdown-menu" data-dropdown-menu><button class="Dropdown-option is-selected" data-dropdown-option data-label="Stable" type="button">Stable</button><button class="Dropdown-option" data-dropdown-option data-label="Beta" type="button">Beta</button><button class="Dropdown-option" data-dropdown-option data-label="Canary" type="button">Canary</button></div></div>`,
    css: `.Dropdown{position:relative;width:245px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:45px;padding:0 12px;display:flex;gap:9px;align-items:center;border:1px solid #26352d;border-radius:10px;background:#111a15;color:#f0fdf4;cursor:pointer}.Dropdown-trigger span{flex:1;text-align:left}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #26352d;border-radius:10px;background:#172119;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-option{width:100%;height:38px;padding:0 10px;border:0;border-radius:7px;background:transparent;color:#dcfce7;text-align:left;cursor:pointer}.Dropdown-option:hover,.Dropdown-option.is-selected{background:#213025}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{d.querySelectorAll("[data-dropdown-option]").forEach(x=>x.classList.remove("is-selected"));o.classList.add("is-selected");l.textContent=o.dataset.label;d.classList.remove("is-open")});document.addEventListener("click",e=>{if(!d.contains(e.target))d.classList.remove("is-open")});`,
  },
  {
    id: 3682,
    name: "Locale Selector Dropdown",
    scriptId: 3682,
    preview: (
      <div
        className="DropdownPro Dropdown3682"
        data-dropdown-root
        data-dropdown-id="3682"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-global-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Language & region</small>
            <strong data-dropdown-label>English (US)</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search locale..." />
          </div>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="English (US)"
            data-search-text="english united states usa"
            type="button"
          >
            <span className="DropdownPro-code">EN</span>
            <span className="DropdownPro-option-copy">
              <strong>English</strong>
              <small>United States</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="English (UK)"
            data-search-text="english united kingdom britain"
            type="button"
          >
            <span className="DropdownPro-code">EN</span>
            <span className="DropdownPro-option-copy">
              <strong>English</strong>
              <small>United Kingdom</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Nederlands"
            data-search-text="nederlands dutch netherlands"
            type="button"
          >
            <span className="DropdownPro-code">NL</span>
            <span className="DropdownPro-option-copy">
              <strong>Nederlands</strong>
              <small>Nederland</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Deutsch"
            data-search-text="deutsch german germany"
            type="button"
          >
            <span className="DropdownPro-code">DE</span>
            <span className="DropdownPro-option-copy">
              <strong>Deutsch</strong>
              <small>Deutschland</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button class="Dropdown-trigger" data-dropdown-trigger type="button"><i class="ri-global-line"></i><span data-dropdown-label>English (US)</span><i class="ri-arrow-down-s-line"></i></button><div class="Dropdown-menu" data-dropdown-menu><input data-dropdown-search placeholder="Search locale..."><button data-dropdown-option data-label="English (US)" data-search-text="english united states" type="button">English (US)</button><button data-dropdown-option data-label="English (UK)" data-search-text="english uk" type="button">English (UK)</button><button data-dropdown-option data-label="Nederlands" data-search-text="dutch nederlands" type="button">Nederlands</button><button data-dropdown-option data-label="Deutsch" data-search-text="german deutsch" type="button">Deutsch</button></div></div>`,
    css: `.Dropdown{position:relative;width:260px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:46px;padding:0 11px;display:flex;align-items:center;gap:9px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown-trigger span{flex:1;text-align:left}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:7px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;box-shadow:0 18px 40px #0f172a1f;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-menu input{width:100%;height:34px;margin-bottom:6px;padding:0 9px;border:1px solid #e2e8f0;border-radius:7px}.Dropdown-menu button{width:100%;height:36px;padding:0 9px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown-menu button:hover{background:#f8fafc}[hidden]{display:none}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]"),s=d.querySelector("[data-dropdown-search]"),opts=d.querySelectorAll("[data-dropdown-option]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};s.oninput=()=>{const v=s.value.toLowerCase();opts.forEach(o=>o.hidden=!((o.dataset.searchText||o.textContent).toLowerCase().includes(v)))};opts.forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3683,
    name: "Date Preset Dropdown",
    scriptId: 3683,
    preview: (
      <div
        className="DropdownPro Dropdown3683"
        data-dropdown-root
        data-dropdown-id="3683"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-calendar-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Date range</small>
            <strong data-dropdown-label>Last 30 days</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Today"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-sun-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Today</strong>
              <small>Current day</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Last 7 days"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-2-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Last 7 days</strong>
              <small>Previous week</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Last 30 days"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-check-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Last 30 days</strong>
              <small>Previous month</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Last 90 days"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-event-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Last 90 days</strong>
              <small>Previous quarter</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button class="Dropdown-trigger" data-dropdown-trigger type="button"><i class="ri-calendar-line"></i><span data-dropdown-label>Last 30 days</span><i class="ri-arrow-down-s-line"></i></button><div class="Dropdown-menu" data-dropdown-menu><button data-dropdown-option data-label="Today">Today</button><button data-dropdown-option data-label="Last 7 days">Last 7 days</button><button data-dropdown-option data-label="Last 30 days">Last 30 days</button><button data-dropdown-option data-label="Last 90 days">Last 90 days</button></div></div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:45px;padding:0 11px;display:flex;align-items:center;gap:9px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown-trigger span{flex:1;text-align:left}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;box-shadow:0 18px 40px #0f172a1f;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-menu button{width:100%;height:37px;padding:0 10px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown-menu button:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3684,
    name: "Chart Type Dropdown",
    scriptId: 3684,
    preview: (
      <div
        className="DropdownPro Dropdown3684"
        data-dropdown-root
        data-dropdown-id="3684"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-line-chart-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Visualization</small>
            <strong data-dropdown-label>Line chart</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          {[
            ["Line chart", "ri-line-chart-line", "Trends over time"],
            ["Bar chart", "ri-bar-chart-box-line", "Compare categories"],
            ["Area chart", "ri-area-chart-line", "Volume over time"],
            ["Donut chart", "ri-pie-chart-2-line", "Part-to-whole"],
          ].map(([label, icon, text], index) => (
            <button
              key={label}
              className={`DropdownPro-option ${index === 0 ? "is-selected" : ""}`}
              data-dropdown-option
              data-label={label}
              type="button"
            >
              <span className="DropdownPro-symbol">
                <i className={icon}></i>
              </span>
              <span className="DropdownPro-option-copy">
                <strong>{label}</strong>
                <small>{text}</small>
              </span>
              <i className="ri-check-line DropdownPro-check"></i>
            </button>
          ))}
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button class="Dropdown-trigger" data-dropdown-trigger type="button"><span data-dropdown-label>Line chart</span></button><div class="Dropdown-menu" data-dropdown-menu><button data-dropdown-option data-label="Line chart">Line chart</button><button data-dropdown-option data-label="Bar chart">Bar chart</button><button data-dropdown-option data-label="Area chart">Area chart</button><button data-dropdown-option data-label="Donut chart">Donut chart</button></div></div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown-trigger{width:100%;height:44px;padding:0 12px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;text-align:left;cursor:pointer}.Dropdown-menu{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;box-shadow:0 18px 35px #0f172a1f;opacity:0;transform:translateY(-5px);transition:.18s}.Dropdown.is-open .Dropdown-menu{visibility:visible;opacity:1;transform:none}.Dropdown-menu button{width:100%;height:37px;padding:0 10px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown-menu button:hover{background:#f5f3ff;color:#7c3aed}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3685,
    name: "Team Member Filter Dropdown",
    scriptId: 3685,
    preview: (
      <div
        className="DropdownPro Dropdown3685"
        data-dropdown-root
        data-dropdown-id="3685"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-team-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Team members</strong>
            <small>Filter assigned work</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <div className="DropdownPro-search">
            <i className="ri-search-line"></i>
            <input data-dropdown-search placeholder="Search members..." />
          </div>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-search-text="alex frontend"
            type="button"
          >
            <span className="DropdownPro-avatar">AL</span>
            <span className="DropdownPro-option-copy">
              <strong>Alex Lee</strong>
              <small>Frontend Developer</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-search-text="maya design"
            type="button"
          >
            <span className="DropdownPro-avatar DropdownPro-avatar--pink">
              MC
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Maya Chen</strong>
              <small>Product Designer</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-search-text="noah backend"
            type="button"
          >
            <span className="DropdownPro-avatar DropdownPro-avatar--green">
              NW
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Noah Williams</strong>
              <small>Backend Developer</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-search-text="sarah product"
            type="button"
          >
            <span className="DropdownPro-avatar DropdownPro-avatar--orange">
              SJ
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Sarah Jones</strong>
              <small>Product Manager</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
          <div className="DropdownPro-footer">
            <button data-dropdown-close type="button">
              Apply filter
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi><button data-dropdown-trigger>Team members <span data-dropdown-count>2</span></button><div data-dropdown-menu><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Alex Lee</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Maya Chen</button><button data-dropdown-option><input type="checkbox"> Noah Williams</button><button data-dropdown-option><input type="checkbox"> Sarah Jones</button><button data-dropdown-close>Apply filter</button></div></div>`,
    css: `.Dropdown{position:relative;width:270px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:45px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:7px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;box-shadow:0 18px 40px #0f172a1f;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover,.Dropdown .is-selected{background:#f8fafc}.Dropdown input{accent-color:#2563eb}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),c=d.querySelector("[data-dropdown-count]");const update=()=>c.textContent=d.querySelectorAll("[data-dropdown-option].is-selected").length;t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=e=>{e.stopPropagation();o.classList.toggle("is-selected");const i=o.querySelector("input");if(i)i.checked=o.classList.contains("is-selected");update()});d.querySelector("[data-dropdown-close]").onclick=()=>d.classList.remove("is-open");update();`,
  },
  {
    id: 3686,
    name: "Issue Tags Dropdown",
    scriptId: 3686,
    preview: (
      <div
        className="DropdownPro Dropdown3686"
        data-dropdown-root
        data-dropdown-id="3686"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-price-tag-3-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Issue tags</strong>
            <small>Filter by labels</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-tag DropdownPro-tag--red">Bug</span>
            <span className="DropdownPro-option-copy">
              <strong>Bug</strong>
              <small>Something is broken</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-tag DropdownPro-tag--blue">
              Feature
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Feature</strong>
              <small>New functionality</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-tag DropdownPro-tag--yellow">
              Docs
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Documentation</strong>
              <small>Documentation work</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-tag DropdownPro-tag--violet">
              Refactor
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Refactor</strong>
              <small>Code improvements</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi><button data-dropdown-trigger>Issue tags <span data-dropdown-count>2</span></button><div data-dropdown-menu><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Bug</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Feature</button><button data-dropdown-option><input type="checkbox"> Documentation</button><button data-dropdown-option><input type="checkbox"> Refactor</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0;box-shadow:0 18px 40px #0f172a1f}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover,.Dropdown .is-selected{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),c=d.querySelector("[data-dropdown-count]");const u=()=>c.textContent=d.querySelectorAll("[data-dropdown-option].is-selected").length;t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=e=>{e.stopPropagation();o.classList.toggle("is-selected");const i=o.querySelector("input");if(i)i.checked=o.classList.contains("is-selected");u()});u();`,
  },
  {
    id: 3687,
    name: "Preview Device Dropdown",
    scriptId: 3687,
    preview: (
      <div
        className="DropdownPro Dropdown3687"
        data-dropdown-root
        data-dropdown-id="3687"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-macbook-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Preview device</small>
            <strong data-dropdown-label>Desktop</strong>
          </span>
          <span className="DropdownPro-chip">1440px</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Desktop"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-macbook-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Desktop</strong>
              <small>1440 × 900</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Laptop"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-computer-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Laptop</strong>
              <small>1280 × 800</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Tablet"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-tablet-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Tablet</strong>
              <small>768 × 1024</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Desktop</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Desktop">Desktop</button><button data-dropdown-option data-label="Laptop">Laptop</button><button data-dropdown-option data-label="Tablet">Tablet</button></div></div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:45px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:37px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3688,
    name: "API Version Dropdown",
    scriptId: 3688,
    preview: (
      <div
        className="DropdownPro Dropdown3688"
        data-dropdown-root
        data-dropdown-id="3688"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-code-box-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>API version</small>
            <strong data-dropdown-label>v2</strong>
          </span>
          <span className="DropdownPro-chip DropdownPro-chip--green">
            RECOMMENDED
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="v1"
            type="button"
          >
            <span className="DropdownPro-code">v1</span>
            <span className="DropdownPro-option-copy">
              <strong>Version 1</strong>
              <small>Legacy · supported</small>
            </span>
            <span className="DropdownPro-chip">LEGACY</span>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="v2"
            type="button"
          >
            <span className="DropdownPro-code">v2</span>
            <span className="DropdownPro-option-copy">
              <strong>Version 2</strong>
              <small>Current stable API</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--green">
              STABLE
            </span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="v3 beta"
            type="button"
          >
            <span className="DropdownPro-code">v3</span>
            <span className="DropdownPro-option-copy">
              <strong>Version 3</strong>
              <small>Preview API</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--violet">
              BETA
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>v2</span></button><div data-dropdown-menu><button data-dropdown-option data-label="v1">v1 Legacy</button><button data-dropdown-option data-label="v2">v2 Stable</button><button data-dropdown-option data-label="v3 beta">v3 Beta</button></div></div>`,
    css: `.Dropdown{position:relative;width:230px;font-family:monospace}.Dropdown>button{width:100%;height:44px;border:1px solid #30343b;border-radius:9px;background:#14161a;color:#f4f4f5;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #30343b;border-radius:9px;background:#1b1d22;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;color:#e4e4e7;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#25282e}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3689,
    name: "Log Levels Dropdown",
    scriptId: 3689,
    preview: (
      <div
        className="DropdownPro Dropdown3689"
        data-dropdown-root
        data-dropdown-id="3689"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-terminal-box-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Log levels</strong>
            <small>Visible console events</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            3
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-log DropdownPro-log--blue">INFO</span>
            <span className="DropdownPro-option-copy">
              <strong>Information</strong>
              <small>General events</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-log DropdownPro-log--yellow">
              WARN
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Warnings</strong>
              <small>Potential issues</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-log DropdownPro-log--red">ERROR</span>
            <span className="DropdownPro-option-copy">
              <strong>Errors</strong>
              <small>Failed operations</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-log">DEBUG</span>
            <span className="DropdownPro-option-copy">
              <strong>Debug</strong>
              <small>Detailed diagnostics</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi><button data-dropdown-trigger>Log levels <span data-dropdown-count>3</span></button><div data-dropdown-menu><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Info</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Warning</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Error</button><button data-dropdown-option><input type="checkbox"> Debug</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:monospace}.Dropdown>button{width:100%;height:44px;border:1px solid #30343b;border-radius:9px;background:#14161a;color:#f4f4f5;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #30343b;border-radius:9px;background:#1b1d22;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;color:#e4e4e7;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover,.Dropdown .is-selected{background:#25282e}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),c=d.querySelector("[data-dropdown-count]");const u=()=>c.textContent=d.querySelectorAll("[data-dropdown-option].is-selected").length;t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=e=>{e.stopPropagation();o.classList.toggle("is-selected");const i=o.querySelector("input");if(i)i.checked=o.classList.contains("is-selected");u()});u();`,
  },
  {
    id: 3690,
    name: "Theme Preset Dropdown",
    scriptId: 3690,
    preview: (
      <div
        className="DropdownPro Dropdown3690"
        data-dropdown-root
        data-dropdown-id="3690"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-palette-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Interface theme</small>
            <strong data-dropdown-label>System</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="System"
            type="button"
          >
            <span className="DropdownPro-swatch DropdownPro-swatch--system"></span>
            <span className="DropdownPro-option-copy">
              <strong>System</strong>
              <small>Follow device preference</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Light"
            type="button"
          >
            <span className="DropdownPro-swatch DropdownPro-swatch--light"></span>
            <span className="DropdownPro-option-copy">
              <strong>Light</strong>
              <small>Bright interface</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Dark"
            type="button"
          >
            <span className="DropdownPro-swatch DropdownPro-swatch--dark"></span>
            <span className="DropdownPro-option-copy">
              <strong>Dark</strong>
              <small>Dark interface</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Midnight"
            type="button"
          >
            <span className="DropdownPro-swatch DropdownPro-swatch--midnight"></span>
            <span className="DropdownPro-option-copy">
              <strong>Midnight</strong>
              <small>Deep blue-black theme</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>System</span></button><div data-dropdown-menu><button data-dropdown-option data-label="System">System</button><button data-dropdown-option data-label="Light">Light</button><button data-dropdown-option data-label="Dark">Dark</button><button data-dropdown-option data-label="Midnight">Midnight</button></div></div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:37px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3691,
    name: "File Type Filter Dropdown",
    scriptId: 3691,
    preview: (
      <div
        className="DropdownPro Dropdown3691"
        data-dropdown-root
        data-dropdown-id="3691"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-file-list-3-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>File types</strong>
            <small>Filter library files</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-filetype DropdownPro-filetype--blue">
              IMG
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Images</strong>
              <small>PNG, JPG, SVG</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-filetype DropdownPro-filetype--red">
              DOC
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Documents</strong>
              <small>PDF, DOCX, TXT</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-filetype DropdownPro-filetype--violet">
              VID
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Video</strong>
              <small>MP4, MOV, WEBM</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-filetype DropdownPro-filetype--amber">
              ZIP
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Archives</strong>
              <small>ZIP, TAR, GZ</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi><button data-dropdown-trigger>File types <span data-dropdown-count>2</span></button><div data-dropdown-menu><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Images</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Documents</button><button data-dropdown-option><input type="checkbox"> Video</button><button data-dropdown-option><input type="checkbox"> Archives</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover,.Dropdown .is-selected{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),c=d.querySelector("[data-dropdown-count]");const u=()=>c.textContent=d.querySelectorAll("[data-dropdown-option].is-selected").length;t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=e=>{e.stopPropagation();o.classList.toggle("is-selected");const i=o.querySelector("input");if(i)i.checked=o.classList.contains("is-selected");u()});u();`,
  },
  {
    id: 3692,
    name: "Storage Location Dropdown",
    scriptId: 3692,
    preview: (
      <div
        className="DropdownPro Dropdown3692"
        data-dropdown-root
        data-dropdown-id="3692"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-hard-drive-3-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Save location</small>
            <strong data-dropdown-label>Cloud workspace</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Local device"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-computer-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Local device</strong>
              <small>Store on this computer</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Cloud workspace"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-cloud-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Cloud workspace</strong>
              <small>Shared team storage</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Team files"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-folder-shared-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Team files</strong>
              <small>Shared project directory</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Cloud workspace</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Local device">Local device</button><button data-dropdown-option data-label="Cloud workspace">Cloud workspace</button><button data-dropdown-option data-label="Team files">Team files</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3693,
    name: "Report Schedule Dropdown",
    scriptId: 3693,
    preview: (
      <div
        className="DropdownPro Dropdown3693"
        data-dropdown-root
        data-dropdown-id="3693"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-timer-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Report schedule</small>
            <strong data-dropdown-label>Weekly</strong>
          </span>
          <span className="DropdownPro-chip">MON 08:00</span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Never"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-forbid-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Never</strong>
              <small>Manual reports only</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Daily"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-sun-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Daily</strong>
              <small>Every morning at 08:00</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Weekly"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Weekly</strong>
              <small>Every Monday</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Monthly"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-check-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Monthly</strong>
              <small>First day of each month</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Weekly</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Never">Never</button><button data-dropdown-option data-label="Daily">Daily</button><button data-dropdown-option data-label="Weekly">Weekly</button><button data-dropdown-option data-label="Monthly">Monthly</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3694,
    name: "Data Source Dropdown",
    scriptId: 3694,
    preview: (
      <div
        className="DropdownPro Dropdown3694"
        data-dropdown-root
        data-dropdown-id="3694"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-database-2-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Data source</small>
            <strong data-dropdown-label>Production DB</strong>
          </span>
          <span className="DropdownPro-status DropdownPro-status--green"></span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Production DB"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-database-2-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Production DB</strong>
              <small>PostgreSQL · live</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--green">
              ONLINE
            </span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Analytics"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-bar-chart-grouped-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Analytics</strong>
              <small>Read-only replica</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--green">
              ONLINE
            </span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Warehouse"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-stack-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Warehouse</strong>
              <small>Historical datasets</small>
            </span>
            <span className="DropdownPro-chip">SYNCED</span>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Sandbox"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-flask-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Sandbox</strong>
              <small>Development data</small>
            </span>
            <span className="DropdownPro-chip DropdownPro-chip--orange">
              DEV
            </span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Production DB</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Production DB">Production DB</button><button data-dropdown-option data-label="Analytics">Analytics</button><button data-dropdown-option data-label="Warehouse">Warehouse</button><button data-dropdown-option data-label="Sandbox">Sandbox</button></div></div>`,
    css: `.Dropdown{position:relative;width:260px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:45px;border:1px solid #29372f;border-radius:10px;background:#111914;color:#f0fdf4;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #29372f;border-radius:10px;background:#172119;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;color:#dcfce7;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#213025}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3695,
    name: "Support Priority Dropdown",
    scriptId: 3695,
    preview: (
      <div
        className="DropdownPro Dropdown3695"
        data-dropdown-root
        data-dropdown-id="3695"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-priority DropdownPro-priority--medium">
            <i className="ri-subtract-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Support priority</small>
            <strong data-dropdown-label>Normal</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Normal"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--medium">
              <i className="ri-subtract-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Normal</strong>
              <small>Response within 24 hours</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="High"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--high">
              <i className="ri-arrow-up-double-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>High</strong>
              <small>Response within 4 hours</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Urgent"
            type="button"
          >
            <span className="DropdownPro-priority DropdownPro-priority--urgent">
              <i className="ri-alarm-warning-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Urgent</strong>
              <small>Immediate attention</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Normal</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Normal">Normal</button><button data-dropdown-option data-label="High">High</button><button data-dropdown-option data-label="Urgent">Urgent</button></div></div>`,
    css: `.Dropdown{position:relative;width:245px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#fff7ed}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3696,
    name: "Access Expiration Dropdown",
    scriptId: 3696,
    preview: (
      <div
        className="DropdownPro Dropdown3696"
        data-dropdown-root
        data-dropdown-id="3696"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-timer-2-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Access expires</small>
            <strong data-dropdown-label>7 days</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Never"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-infinity-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Never</strong>
              <small>Access does not expire</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="24 hours"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-timer-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>24 hours</strong>
              <small>Temporary access</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="7 days"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>7 days</strong>
              <small>One week access</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="30 days"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-calendar-check-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>30 days</strong>
              <small>One month access</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>7 days</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Never">Never</button><button data-dropdown-option data-label="24 hours">24 hours</button><button data-dropdown-option data-label="7 days">7 days</button><button data-dropdown-option data-label="30 days">30 days</button></div></div>`,
    css: `.Dropdown{position:relative;width:240px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3697,
    name: "Workspace Visibility Dropdown",
    scriptId: 3697,
    preview: (
      <div
        className="DropdownPro Dropdown3697"
        data-dropdown-root
        data-dropdown-id="3697"
        data-dropdown-select
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-lock-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <small>Visibility</small>
            <strong data-dropdown-label>Team only</strong>
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Private"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-lock-2-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Private</strong>
              <small>Only invited members</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            data-label="Team only"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-team-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Team only</strong>
              <small>Everyone in this team</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            data-label="Organization"
            type="button"
          >
            <span className="DropdownPro-symbol">
              <i className="ri-building-line"></i>
            </span>
            <span className="DropdownPro-option-copy">
              <strong>Organization</strong>
              <small>Everyone in your company</small>
            </span>
            <i className="ri-check-line DropdownPro-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-select><button data-dropdown-trigger><span data-dropdown-label>Team only</span></button><div data-dropdown-menu><button data-dropdown-option data-label="Private">Private</button><button data-dropdown-option data-label="Team only">Team only</button><button data-dropdown-option data-label="Organization">Organization</button></div></div>`,
    css: `.Dropdown{position:relative;width:250px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #e2e8f0;border-radius:10px;background:#fff;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover{background:#f8fafc}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),l=d.querySelector("[data-dropdown-label]");t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=()=>{l.textContent=o.dataset.label;d.classList.remove("is-open")});`,
  },
  {
    id: 3698,
    name: "Feature Flag Environments Dropdown",
    scriptId: 3698,
    preview: (
      <div
        className="DropdownPro Dropdown3698"
        data-dropdown-root
        data-dropdown-id="3698"
        data-dropdown-multi
      >
        <button
          className="DropdownPro-trigger"
          data-dropdown-trigger
          type="button"
        >
          <span className="DropdownPro-icon">
            <i className="ri-toggle-line"></i>
          </span>
          <span className="DropdownPro-copy">
            <strong>Feature environments</strong>
            <small>Enabled deployments</small>
          </span>
          <span className="DropdownPro-count" data-dropdown-count>
            2
          </span>
          <i className="ri-arrow-down-s-line DropdownPro-chevron"></i>
        </button>
        <div className="DropdownPro-menu" data-dropdown-menu>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-env DropdownPro-env--blue">DEV</span>
            <span className="DropdownPro-option-copy">
              <strong>Development</strong>
              <small>Local testing</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option is-selected"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-env DropdownPro-env--amber">STG</span>
            <span className="DropdownPro-option-copy">
              <strong>Staging</strong>
              <small>QA environment</small>
            </span>
            <input
              className="DropdownPro-checkbox"
              type="checkbox"
              defaultChecked
            />
          </button>
          <button
            className="DropdownPro-option"
            data-dropdown-option
            type="button"
          >
            <span className="DropdownPro-env DropdownPro-env--green">PRD</span>
            <span className="DropdownPro-option-copy">
              <strong>Production</strong>
              <small>Live customers</small>
            </span>
            <input className="DropdownPro-checkbox" type="checkbox" />
          </button>
        </div>
      </div>
    ),
    html: `<div class="Dropdown" data-dropdown-root data-dropdown-multi><button data-dropdown-trigger>Feature environments <span data-dropdown-count>2</span></button><div data-dropdown-menu><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Development</button><button class="is-selected" data-dropdown-option><input type="checkbox" checked> Staging</button><button data-dropdown-option><input type="checkbox"> Production</button></div></div>`,
    css: `.Dropdown{position:relative;width:260px;font-family:Arial,sans-serif}.Dropdown>button{width:100%;height:44px;border:1px solid #30343b;border-radius:10px;background:#15171b;color:#f4f4f5;cursor:pointer}.Dropdown [data-dropdown-menu]{position:absolute;z-index:20;width:100%;top:calc(100% + 7px);padding:6px;visibility:hidden;border:1px solid #30343b;border-radius:10px;background:#1b1d22;opacity:0}.Dropdown.is-open [data-dropdown-menu]{visibility:visible;opacity:1}.Dropdown [data-dropdown-option]{width:100%;height:38px;border:0;border-radius:7px;background:transparent;color:#e4e4e7;text-align:left;cursor:pointer}.Dropdown [data-dropdown-option]:hover,.Dropdown .is-selected{background:#25282e}`,
    javascript: `const d=document.querySelector(".Dropdown"),t=d.querySelector("[data-dropdown-trigger]"),c=d.querySelector("[data-dropdown-count]");const u=()=>c.textContent=d.querySelectorAll("[data-dropdown-option].is-selected").length;t.onclick=e=>{e.stopPropagation();d.classList.toggle("is-open")};d.querySelectorAll("[data-dropdown-option]").forEach(o=>o.onclick=e=>{e.stopPropagation();o.classList.toggle("is-selected");const i=o.querySelector("input");if(i)i.checked=o.classList.contains("is-selected");u()});u();`,
  },

  
  
];
