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
];
