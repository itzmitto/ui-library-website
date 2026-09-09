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
];
