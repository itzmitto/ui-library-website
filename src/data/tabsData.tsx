import "../pages/All.css";

export const tabs = [
  {
    id: 1384,
    name: "Dashboard Tabs",
    preview: (
      <div className="tabs-1384">
        <button className="active">
          <i className="fa-solid fa-house"></i>
          Overview
        </button>
        <button>
          <i className="fa-solid fa-chart-line"></i>
          Analytics
        </button>
        <button>
          <i className="fa-solid fa-users"></i>
          Team
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="active">
        <i class="fa-solid fa-house"></i>
        Overview
    </button>
    <button>
        <i class="fa-solid fa-chart-line"></i>
        Analytics
    </button>
    <button>
        <i class="fa-solid fa-users"></i>
        Team
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    border-bottom: 1px solid #e4e4e7;
}
.Tabs button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border: none;
    border-radius: 8px 8px 0 0;
    background: transparent;
    color: #71717a;
    font-size: 9px;
    cursor: pointer;
}
.Tabs button i {
    font-size: 9px;
}
.Tabs button:hover {
    color: #18181b;
}
.Tabs button.active {
    color: #2563eb;
    background: #eff6ff;
}`,
  },
  {
    id: 1385,
    name: "Pill Tabs",
    preview: (
      <div className="tabs-1385">
        <button className="active">All projects</button>
        <button>Active</button>
        <button>Archived</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="active">All projects</button>
    <button>Active</button>
    <button>Archived</button>
</div>`,
    css: `.Tabs {
    display: inline-flex;
    gap: 4px;
    padding: 4px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Tabs button {
    padding: 8px 12px;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: #71717a;
    font-size: 9px;
    cursor: pointer;
}
.Tabs button:hover {
    color: #18181b;
}
.Tabs button.active {
    background: #18181b;
    color: #ffffff;
    box-shadow: 0 2px 7px rgba(0,0,0,.12);
}`,
  },
  {
    id: 1614,
    name: "Modern Underline Tabs",
    preview: (
      <div className="tab-1614">
        <button className="tab-1614__item tab-1614__item--active">
          Overview
        </button>
        <button className="tab-1614__item">Analytics</button>
        <button className="tab-1614__item">Projects</button>
        <button className="tab-1614__item">Settings</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Analytics</button>
    <button class="Tabs-item">Projects</button>
    <button class="Tabs-item">Settings</button>
</div>`,
    css: `.Tabs {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #e4e4e7;
}
.Tabs-item {
    position: relative;
    padding: 10px 2px 11px;
    border: none;
    background: transparent;
    color: #71717a;
    font-size: 12px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #18181b;
}
.Tabs-item-active {
    color: #18181b;
    font-weight: 700;
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    border-radius: 999px;
    background: #2563eb;
}`,
  },
  {
    id: 1615,
    name: "Pill Tabs",
    preview: (
      <div className="tab-1615">
        <button className="tab-1615__item tab-1615__item--active">All</button>
        <button className="tab-1615__item">Popular</button>
        <button className="tab-1615__item">Recent</button>
        <button className="tab-1615__item">Saved</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">All</button>
    <button class="Tabs-item">Popular</button>
    <button class="Tabs-item">Recent</button>
    <button class="Tabs-item">Saved</button>
</div>`,
    css: `.Tabs {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    border-radius: 999px;
    background: #f4f4f5;
}
.Tabs-item {
    padding: 8px 14px;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    color: #18181b;
}
.Tabs-item-active {
    background: #fff;
    color: #18181b;
    box-shadow: 0 1px 4px rgba(0,0,0,.08);
    font-weight: 700;
}`,
  },
  {
    id: 1616,
    name: "Segmented Control Tabs",
    preview: (
      <div className="tab-1616">
        <button className="tab-1616__item tab-1616__item--active">Day</button>
        <button className="tab-1616__item">Week</button>
        <button className="tab-1616__item">Month</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Day</button>
    <button class="Tabs-item">Week</button>
    <button class="Tabs-item">Month</button>
</div>`,
    css: `.Tabs {
    display: inline-flex;
    gap: 2px;
    padding: 3px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #fafafa;
}
.Tabs-item {
    min-width: 62px;
    padding: 8px 12px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 5px rgba(0,0,0,.14);
}`,
  },
  {
    id: 1617,
    name: "Dark Neon Tabs",
    preview: (
      <div className="tab-1617">
        <button className="tab-1617__item tab-1617__item--active">
          <i className="fa-solid fa-terminal"></i>
          Terminal
        </button>
        <button className="tab-1617__item">
          <i className="fa-solid fa-code"></i>
          Source
        </button>
        <button className="tab-1617__item">
          <i className="fa-solid fa-gear"></i>
          Config
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-terminal"></i>
        Terminal
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-code"></i>
        Source
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-gear"></i>
        Config
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid #27272a;
    border-radius: 10px;
    background: #09090b;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #71717a;
    font-family: monospace;
    font-size: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    color: #d4d4d8;
}
.Tabs-item-active {
    color: #67e8f9;
    background: rgba(34,211,238,.08);
    box-shadow: inset 0 0 10px rgba(34,211,238,.05);
}
.Tabs-item i {
    font-size: 9px;
}`,
  },
  {
    id: 1618,
    name: "Glass Tabs",
    preview: (
      <div className="tab-1618">
        <button className="tab-1618__item tab-1618__item--active">Home</button>
        <button className="tab-1618__item">Discover</button>
        <button className="tab-1618__item">Activity</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Home</button>
    <button class="Tabs-item">Discover</button>
    <button class="Tabs-item">Activity</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 12px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(12px);
}
.Tabs-item {
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: rgba(255,255,255,.65);
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.2);
    background: rgba(255,255,255,.12);
    color: #fff;
}`,
  },
  {
    id: 1619,
    name: "Icon Tabs",
    preview: (
      <div className="tab-1619">
        <button className="tab-1619__item tab-1619__item--active">
          <i className="fa-solid fa-house"></i>
          Home
        </button>
        <button className="tab-1619__item">
          <i className="fa-solid fa-chart-line"></i>
          Stats
        </button>
        <button className="tab-1619__item">
          <i className="fa-solid fa-users"></i>
          Team
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-house"></i>
        Home
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-chart-line"></i>
        Stats
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-users"></i>
        Team
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    align-items: center;
    gap: 3px;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 13px;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    background: #f4f4f5;
    color: #18181b;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
}
.Tabs-item i {
    font-size: 10px;
}`,
  },
  {
    id: 1620,
    name: "Gradient Tabs",
    preview: (
      <div className="tab-1620">
        <button className="tab-1620__item tab-1620__item--active">
          Design
        </button>
        <button className="tab-1620__item">Develop</button>
        <button className="tab-1620__item">Deploy</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Design</button>
    <button class="Tabs-item">Develop</button>
    <button class="Tabs-item">Deploy</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    border-radius: 12px;
    background: #18181b;
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    box-shadow: 0 5px 15px rgba(99,102,241,.2);
}`,
  },
  {
    id: 1621,
    name: "Underline Gradient Tabs",
    preview: (
      <div className="tab-1621">
        <button className="tab-1621__item tab-1621__item--active">
          Overview
        </button>
        <button className="tab-1621__item">Activity</button>
        <button className="tab-1621__item">Members</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Activity</button>
    <button class="Tabs-item">Members</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 18px;
    border-bottom: 1px solid #27272a;
}
.Tabs-item {
    position: relative;
    padding: 10px 1px 12px;
    border: none;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #fff;
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899);
}`,
  },
  {
    id: 1622,
    name: "Browser Tabs",
    preview: (
      <div className="tab-1622">
        <div className="tab-1622__tab tab-1622__tab--active">
          <i className="fa-solid fa-globe"></i>
          Dashboard
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="tab-1622__tab">
          Project
          <i className="fa-solid fa-xmark"></i>
        </div>
        <button className="tab-1622__add">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <div class="Tabs-tab Tabs-tab-active">
        <i class="fa-solid fa-globe"></i>
        Dashboard
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="Tabs-tab">
        Project
        <i class="fa-solid fa-xmark"></i>
    </div>
    <button class="Tabs-add">
        <i class="fa-solid fa-plus"></i>
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    padding: 5px 5px 0;
    border-radius: 10px 10px 0 0;
    background: #e4e4e7;
}
.Tabs-tab {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 11px;
    border-radius: 8px 8px 0 0;
    background: #d4d4d8;
    color: #52525b;
    font-size: 10px;
}
.Tabs-tab-active {
    background: #fff;
    color: #18181b;
}
.Tabs-tab i:last-child {
    font-size: 8px;
    color: #a1a1aa;
}
.Tabs-add {
    width: 29px;
    height: 29px;
    margin-bottom: 2px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #71717a;
    cursor: pointer;
}`,
  },
  {
    id: 1623,
    name: "Neon Pink Tabs",
    preview: (
      <div className="tab-1623">
        <button className="tab-1623__item tab-1623__item--active">
          Profile
        </button>
        <button className="tab-1623__item">Posts</button>
        <button className="tab-1623__item">Likes</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Profile</button>
    <button class="Tabs-item">Posts</button>
    <button class="Tabs-item">Likes</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    border: 1px solid #3f3f46;
    border-radius: 11px;
    background: #09090b;
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    background: rgba(236,72,153,.1);
    color: #f472b6;
    box-shadow: 0 0 15px rgba(236,72,153,.15),inset 0 0 10px rgba(236,72,153,.05);
}`,
  },
  {
    id: 1624,
    name: "Soft Blue Tabs",
    preview: (
      <div className="tab-1624">
        <button className="tab-1624__item tab-1624__item--active">
          Personal
        </button>
        <button className="tab-1624__item">Business</button>
        <button className="tab-1624__item">Teams</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Personal</button>
    <button class="Tabs-item">Business</button>
    <button class="Tabs-item">Teams</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 3px;
    padding: 4px;
    border-radius: 12px;
    background: #eff6ff;
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #64748b;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #fff;
    color: #2563eb;
    box-shadow: 0 2px 7px rgba(37,99,235,.12);
    font-weight: 700;
}`,
  },
  {
    id: 1625,
    name: "Floating Tabs",
    preview: (
      <div className="tab-1625">
        <button className="tab-1625__item tab-1625__item--active">Home</button>
        <button className="tab-1625__item">Explore</button>
        <button className="tab-1625__item">Library</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Home</button>
    <button class="Tabs-item">Explore</button>
    <button class="Tabs-item">Library</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
}
.Tabs-item {
    padding: 9px 15px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #fff;
    color: #71717a;
    font-size: 11px;
    box-shadow: 0 3px 8px rgba(0,0,0,.05);
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    transform: translateY(-1px);
    color: #18181b;
}
.Tabs-item-active {
    border-color: #18181b;
    color: #18181b;
    box-shadow: 0 5px 12px rgba(0,0,0,.1);
    font-weight: 700;
}`,
  },
  {
    id: 1626,
    name: "Icon Circle Tabs",
    preview: (
      <div className="tab-1626">
        <button className="tab-1626__item tab-1626__item--active">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </button>
        <button className="tab-1626__item">
          <i className="fa-solid fa-bell"></i>
          <span>Alerts</span>
        </button>
        <button className="tab-1626__item">
          <i className="fa-solid fa-user"></i>
          <span>Profile</span>
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-bell"></i>
        <span>Alerts</span>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-user"></i>
        <span>Profile</span>
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    align-items: center;
    gap: 5px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    border: none;
    border-radius: 999px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #2563eb;
    color: #fff;
}
.Tabs-item i {
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: 8px;
}`,
  },
  {
    id: 1627,
    name: "Glass Gradient Tabs",
    preview: (
      <div className="tab-1627">
        <button className="tab-1627__item tab-1627__item--active">
          Overview
        </button>
        <button className="tab-1627__item">Metrics</button>
        <button className="tab-1627__item">Logs</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Metrics</button>
    <button class="Tabs-item">Logs</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 13px;
    background: linear-gradient(135deg,rgba(37,99,235,.22),rgba(168,85,247,.15));
    backdrop-filter: blur(14px);
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: rgba(255,255,255,.65);
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.22);
    background: rgba(255,255,255,.14);
    color: #fff;
}`,
  },
  {
    id: 1628,
    name: "Status Tabs",
    preview: (
      <div className="tab-1628">
        <button className="tab-1628__item tab-1628__item--active">
          <span></span>
          Online
        </button>
        <button className="tab-1628__item">
          <span></span>
          Away
        </button>
        <button className="tab-1628__item">
          <span></span>
          Offline
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <span></span>
        Online
    </button>
    <button class="Tabs-item">
        <span></span>
        Away
    </button>
    <button class="Tabs-item">
        <span></span>
        Offline
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    background: #fff;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #a1a1aa;
}
.Tabs-item-active {
    color: #18181b;
    border-color: #86efac;
    background: #f0fdf4;
}
.Tabs-item-active span {
    background: #22c55e;
    box-shadow: 0 0 7px rgba(34,197,94,.55);
}`,
  },
  {
    id: 1629,
    name: "Dark Minimal Tabs",
    preview: (
      <div className="tab-1629">
        <button className="tab-1629__item tab-1629__item--active">Feed</button>
        <button className="tab-1629__item">Following</button>
        <button className="tab-1629__item">Trending</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Feed</button>
    <button class="Tabs-item">Following</button>
    <button class="Tabs-item">Trending</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 18px;
    padding-bottom: 2px;
    border-bottom: 1px solid #27272a;
}
.Tabs-item {
    position: relative;
    padding: 9px 0;
    border: none;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #fff;
    font-weight: 700;
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 2px;
    background: #fff;
}`,
  },
  {
    id: 1630,
    name: "Notification Tabs",
    preview: (
      <div className="tab-1630">
        <button className="tab-1630__item tab-1630__item--active">
          All
          <span>12</span>
        </button>
        <button className="tab-1630__item">
          Unread
          <span>4</span>
        </button>
        <button className="tab-1630__item">Archived</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        All
        <span>12</span>
    </button>
    <button class="Tabs-item">
        Unread
        <span>4</span>
    </button>
    <button class="Tabs-item">Archived</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    background: #f4f4f5;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
}
.Tabs-item span {
    min-width: 16px;
    height: 16px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    border-radius: 999px;
    background: #e4e4e7;
    color: #52525b;
    font-size: 7px;
}
.Tabs-item-active span {
    background: #fff;
    color: #18181b;
}`,
  },
  {
    id: 1631,
    name: "Colorful Tabs",
    preview: (
      <div className="tab-1631">
        <button className="tab-1631__item tab-1631__item--blue">Blue</button>
        <button className="tab-1631__item tab-1631__item--active">
          Purple
        </button>
        <button className="tab-1631__item tab-1631__item--pink">Pink</button>
        <button className="tab-1631__item tab-1631__item--green">Green</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-blue">Blue</button>
    <button class="Tabs-item Tabs-item-active">Purple</button>
    <button class="Tabs-item Tabs-item-pink">Pink</button>
    <button class="Tabs-item Tabs-item-green">Green</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
}
.Tabs-item {
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-blue:hover {
    background: #dbeafe;
    color: #2563eb;
}
.Tabs-item-active {
    background: #ede9fe;
    color: #7c3aed;
    font-weight: 700;
}
.Tabs-item-pink:hover {
    background: #fce7f3;
    color: #db2777;
}
.Tabs-item-green:hover {
    background: #dcfce7;
    color: #16a34a;
}`,
  },
  {
    id: 1632,
    name: "Vertical Content Tabs",
    preview: (
      <div className="tab-1632">
        <button className="tab-1632__item tab-1632__item--active">
          <i className="fa-solid fa-user"></i>
          Profile
        </button>
        <button className="tab-1632__item">
          <i className="fa-solid fa-lock"></i>
          Security
        </button>
        <button className="tab-1632__item">
          <i className="fa-solid fa-bell"></i>
          Notifications
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-user"></i>
        Profile
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-lock"></i>
        Security
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-bell"></i>
        Notifications
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 145px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 11px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    text-align: left;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    background: #f4f4f5;
    color: #18181b;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
}
.Tabs-item i {
    width: 15px;
    text-align: center;
}`,
  },
  {
    id: 1633,
    name: "Legendary Aurora Tabs",
    preview: (
      <div className="tab-1633">
        <button className="tab-1633__item tab-1633__item--active">
          <i className="fa-solid fa-sparkles"></i>
          Overview
        </button>
        <button className="tab-1633__item">Analytics</button>
        <button className="tab-1633__item">Performance</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-sparkles"></i>
        Overview
    </button>
    <button class="Tabs-item">Analytics</button>
    <button class="Tabs-item">Performance</button>
</div>`,
    css: `.Tabs {
    position: relative;
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 13px;
    background: #09090b;
    overflow: hidden;
}
.Tabs::before {
    content: "";
    position: absolute;
    width: 130px;
    height: 50px;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(28px);
    opacity: .16;
}
.Tabs-item {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.18);
    background: rgba(255,255,255,.1);
    color: #fff;
    box-shadow: 0 0 16px rgba(99,102,241,.12);
}
.Tabs-item-active i {
    color: #67e8f9;
}`,
  },
  {
    id: 1634,
    name: "Neumorphic Tabs",
    preview: (
      <div className="tab-1634">
        <button className="tab-1634__item tab-1634__item--active">Home</button>
        <button className="tab-1634__item">Explore</button>
        <button className="tab-1634__item">Library</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Home</button>
    <button class="Tabs-item">Explore</button>
    <button class="Tabs-item">Library</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 8px;
    padding: 7px;
    border-radius: 14px;
    background: #e7e5e4;
    box-shadow: inset 2px 2px 6px rgba(0,0,0,.08),inset -2px -2px 6px rgba(255,255,255,.8);
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: #78716c;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #e7e5e4;
    color: #292524;
    box-shadow: 3px 3px 7px rgba(0,0,0,.12),-3px -3px 7px rgba(255,255,255,.8);
    font-weight: 700;
}`,
  },
  {
    id: 1635,
    name: "Sliding Blue Tabs",
    preview: (
      <div className="tab-1635">
        <button className="tab-1635__item tab-1635__item--active">
          Overview
        </button>
        <button className="tab-1635__item">Analytics</button>
        <button className="tab-1635__item">Reports</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Analytics</button>
    <button class="Tabs-item">Reports</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 3px;
    padding: 4px;
    border-radius: 12px;
    background: #eff6ff;
}
.Tabs-item {
    position: relative;
    overflow: hidden;
    padding: 9px 15px;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #64748b;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #dbeafe;
    transform: translateX(-105%);
    transition: .25s ease;
    z-index: 0;
}
.Tabs-item:hover::before,
.Tabs-item-active::before {
    transform: translateX(0);
}
.Tabs-item {
    isolation: isolate;
}
.Tabs-item::after {
    content: attr(data-label);
}
.Tabs-item {
    position: relative;
}
.Tabs-item-active {
    color: #1d4ed8;
    font-weight: 700;
}
.Tabs-item span {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 1636,
    name: "Neon Cyan Line Tabs",
    preview: (
      <div className="tab-1636">
        <button className="tab-1636__item tab-1636__item--active">
          System
        </button>
        <button className="tab-1636__item">Network</button>
        <button className="tab-1636__item">Security</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">System</button>
    <button class="Tabs-item">Network</button>
    <button class="Tabs-item">Security</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 22px;
    border-bottom: 1px solid #164e63;
    background: #020617;
}
.Tabs-item {
    position: relative;
    padding: 10px 2px 11px;
    border: none;
    background: transparent;
    color: #64748b;
    font-family: monospace;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #67e8f9;
    text-shadow: 0 0 8px rgba(103,232,249,.6);
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background: #22d3ee;
    box-shadow: 0 0 10px #22d3ee;
}`,
  },
  {
    id: 1637,
    name: "Rainbow Tabs",
    preview: (
      <div className="tab-1637">
        <button className="tab-1637__item tab-1637__item--active">
          Discover
        </button>
        <button className="tab-1637__item">Trending</button>
        <button className="tab-1637__item">Favorites</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Discover</button>
    <button class="Tabs-item">Trending</button>
    <button class="Tabs-item">Favorites</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border-radius: 14px;
    background: #18181b;
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    border-color: transparent;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    color: #fff;
    box-shadow: 0 0 18px rgba(99,102,241,.2);
}`,
  },
  {
    id: 1638,
    name: "Outlined Tabs",
    preview: (
      <div className="tab-1638">
        <button className="tab-1638__item tab-1638__item--active">
          Design
        </button>
        <button className="tab-1638__item">Code</button>
        <button className="tab-1638__item">Preview</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Design</button>
    <button class="Tabs-item">Code</button>
    <button class="Tabs-item">Preview</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #fff;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item:hover {
    border-color: #a1a1aa;
    color: #18181b;
}
.Tabs-item-active {
    border-color: #18181b;
    background: #18181b;
    color: #fff;
}`,
  },
  {
    id: 1639,
    name: "Notification Glow Tabs",
    preview: (
      <div className="tab-1639">
        <button className="tab-1639__item tab-1639__item--active">
          Inbox
          <span>8</span>
        </button>
        <button className="tab-1639__item">
          Mentions
          <span>2</span>
        </button>
        <button className="tab-1639__item">Archived</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        Inbox
        <span>8</span>
    </button>
    <button class="Tabs-item">
        Mentions
        <span>2</span>
    </button>
    <button class="Tabs-item">Archived</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    border-radius: 12px;
    background: #f4f4f5;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item span {
    min-width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #e4e4e7;
    color: #71717a;
    font-size: 7px;
}
.Tabs-item-active {
    background: #fff;
    color: #18181b;
    box-shadow: 0 2px 7px rgba(0,0,0,.08);
}
.Tabs-item-active span {
    background: #ef4444;
    color: #fff;
    box-shadow: 0 0 8px rgba(239,68,68,.3);
}`,
  },
  {
    id: 1640,
    name: "Icon Only Tabs",
    preview: (
      <div className="tab-1640">
        <button className="tab-1640__item tab-1640__item--active">
          <i className="fa-solid fa-house"></i>
        </button>
        <button className="tab-1640__item">
          <i className="fa-solid fa-chart-line"></i>
        </button>
        <button className="tab-1640__item">
          <i className="fa-solid fa-message"></i>
        </button>
        <button className="tab-1640__item">
          <i className="fa-solid fa-gear"></i>
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-house"></i>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-chart-line"></i>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-message"></i>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-gear"></i>
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Tabs-item {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #a1a1aa;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    background: #f4f4f5;
    color: #52525b;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
}
.Tabs-item i {
    font-size: 11px;
}`,
  },
  {
    id: 1641,
    name: "Vertical Accent Tabs",
    preview: (
      <div className="tab-1641">
        <button className="tab-1641__item tab-1641__item--active">
          Account
        </button>
        <button className="tab-1641__item">Security</button>
        <button className="tab-1641__item">Billing</button>
        <button className="tab-1641__item">Integrations</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Account</button>
    <button class="Tabs-item">Security</button>
    <button class="Tabs-item">Billing</button>
    <button class="Tabs-item">Integrations</button>
</div>`,
    css: `.Tabs {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 150px;
}
.Tabs-item {
    position: relative;
    padding: 9px 12px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    text-align: left;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    background: #f4f4f5;
}
.Tabs-item-active {
    background: #eff6ff;
    color: #2563eb;
    font-weight: 700;
}
.Tabs-item-active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: 999px;
    background: #2563eb;
}`,
  },
  {
    id: 1642,
    name: "Glass Pill Tabs",
    preview: (
      <div className="tab-1642">
        <button className="tab-1642__item tab-1642__item--active">Day</button>
        <button className="tab-1642__item">Week</button>
        <button className="tab-1642__item">Month</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Day</button>
    <button class="Tabs-item">Week</button>
    <button class="Tabs-item">Month</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(14px);
}
.Tabs-item {
    padding: 8px 14px;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: rgba(255,255,255,.65);
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: rgba(255,255,255,.18);
    color: #fff;
    box-shadow: inset 0 0 12px rgba(255,255,255,.05);
}`,
  },
  {
    id: 1643,
    name: "Gradient Border Tabs",
    preview: (
      <div className="tab-1643">
        <button className="tab-1643__item tab-1643__item--active">
          Overview
        </button>
        <button className="tab-1643__item">Stats</button>
        <button className="tab-1643__item">Activity</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Stats</button>
    <button class="Tabs-item">Activity</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border-radius: 13px;
    background: #09090b;
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #18181b;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    border-color: transparent;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899) border-box;
    color: #fff;
}`,
  },
  {
    id: 1644,
    name: "Command Center Tabs",
    preview: (
      <div className="tab-1644">
        <button className="tab-1644__item tab-1644__item--active">
          <i className="fa-solid fa-terminal"></i>
          Console
        </button>
        <button className="tab-1644__item">
          <i className="fa-solid fa-server"></i>
          Servers
        </button>
        <button className="tab-1644__item">
          <i className="fa-solid fa-shield"></i>
          Security
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-terminal"></i>
        Console
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-server"></i>
        Servers
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-shield"></i>
        Security
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 2px;
    padding: 4px;
    border: 1px solid #27272a;
    background: #050505;
    border-radius: 8px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #52525b;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #a1a1aa;
}
.Tabs-item-active {
    background: #111827;
    color: #22d3ee;
    box-shadow: inset 0 0 10px rgba(34,211,238,.06);
}
.Tabs-item i {
    font-size: 8px;
}`,
  },
  {
    id: 1645,
    name: "Soft Gradient Tabs",
    preview: (
      <div className="tab-1645">
        <button className="tab-1645__item tab-1645__item--active">
          Personal
        </button>
        <button className="tab-1645__item">Team</button>
        <button className="tab-1645__item">Organization</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Personal</button>
    <button class="Tabs-item">Team</button>
    <button class="Tabs-item">Organization</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border-radius: 13px;
    background: linear-gradient(135deg,#eff6ff,#f5f3ff,#fdf2f8);
}
.Tabs-item {
    padding: 9px 13px;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #64748b;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    box-shadow: 0 5px 15px rgba(99,102,241,.18);
}`,
  },
  {
    id: 1646,
    name: "Double Line Tabs",
    preview: (
      <div className="tab-1646">
        <button className="tab-1646__item tab-1646__item--active">
          Features
        </button>
        <button className="tab-1646__item">Pricing</button>
        <button className="tab-1646__item">Reviews</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Features</button>
    <button class="Tabs-item">Pricing</button>
    <button class="Tabs-item">Reviews</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 18px;
}
.Tabs-item {
    position: relative;
    padding: 10px 2px 13px;
    border: none;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #18181b;
    font-weight: 700;
}
.Tabs-item-active::before,
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 999px;
}
.Tabs-item-active::before {
    bottom: 3px;
    height: 2px;
    background: #18181b;
}
.Tabs-item-active::after {
    bottom: 0;
    width: 45%;
    height: 2px;
    background: #2563eb;
}`,
  },
  {
    id: 1647,
    name: "Cyber Glitch Tabs",
    preview: (
      <div className="tab-1647">
        <button className="tab-1647__item tab-1647__item--active">
          SYSTEM
        </button>
        <button className="tab-1647__item">NETWORK</button>
        <button className="tab-1647__item">CORE</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">SYSTEM</button>
    <button class="Tabs-item">NETWORK</button>
    <button class="Tabs-item">CORE</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 3px;
    padding: 3px;
    background: #020617;
    border: 1px solid #1e3a8a;
}
.Tabs-item {
    position: relative;
    padding: 9px 13px;
    border: none;
    background: transparent;
    color: #475569;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 1px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #60a5fa;
}
.Tabs-item-active {
    color: #67e8f9;
    background: rgba(14,165,233,.08);
    text-shadow: 0 0 8px rgba(103,232,249,.6);
}
.Tabs-item-active::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #22d3ee;
    box-shadow: 0 0 8px #22d3ee;
}`,
  },
  {
    id: 1648,
    name: "Square App Tabs",
    preview: (
      <div className="tab-1648">
        <button className="tab-1648__item tab-1648__item--active">
          <i className="fa-solid fa-grid-2"></i>
          Dashboard
        </button>
        <button className="tab-1648__item">
          <i className="fa-solid fa-list"></i>
          Tasks
        </button>
        <button className="tab-1648__item">
          <i className="fa-solid fa-calendar"></i>
          Calendar
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-grid-2"></i>
        Dashboard
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-list"></i>
        Tasks
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-calendar"></i>
        Calendar
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    background: #fff;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    background: #fafafa;
}
.Tabs-item-active {
    background: #f4f4f5;
    border-color: #d4d4d8;
    color: #18181b;
    box-shadow: inset 0 1px #fff;
    font-weight: 700;
}`,
  },
  {
    id: 1649,
    name: "Neon Green Tabs",
    preview: (
      <div className="tab-1649">
        <button className="tab-1649__item tab-1649__item--active">
          Active
        </button>
        <button className="tab-1649__item">Completed</button>
        <button className="tab-1649__item">Archived</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Active</button>
    <button class="Tabs-item">Completed</button>
    <button class="Tabs-item">Archived</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid #14532d;
    border-radius: 12px;
    background: #02120a;
}
.Tabs-item {
    padding: 9px 13px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #4ade80;
    opacity: .5;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
}
.Tabs-item:hover {
    opacity: .85;
}
.Tabs-item-active {
    opacity: 1;
    background: rgba(34,197,94,.08);
    color: #86efac;
    box-shadow: 0 0 15px rgba(34,197,94,.12),inset 0 0 10px rgba(34,197,94,.06);
}`,
  },
  {
    id: 1650,
    name: "Minimal Wide Tabs",
    preview: (
      <div className="tab-1650">
        <button className="tab-1650__item tab-1650__item--active">
          Description
        </button>
        <button className="tab-1650__item">Specifications</button>
        <button className="tab-1650__item">Reviews</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Description</button>
    <button class="Tabs-item">Specifications</button>
    <button class="Tabs-item">Reviews</button>
</div>`,
    css: `.Tabs {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e4e4e7;
}
.Tabs-item {
    flex: 1;
    padding: 11px 16px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: #71717a;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #18181b;
}
.Tabs-item-active {
    border-bottom-color: #18181b;
    color: #18181b;
    font-weight: 700;
}`,
  },
  {
    id: 1651,
    name: "Floating Dark Tabs",
    preview: (
      <div className="tab-1651">
        <button className="tab-1651__item tab-1651__item--active">Home</button>
        <button className="tab-1651__item">Projects</button>
        <button className="tab-1651__item">Team</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Home</button>
    <button class="Tabs-item">Projects</button>
    <button class="Tabs-item">Team</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 6px;
    padding: 6px;
    border: 1px solid #27272a;
    border-radius: 14px;
    background: #09090b;
}
.Tabs-item {
    padding: 9px 15px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    color: #d4d4d8;
    transform: translateY(-1px);
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
    border-color: #3f3f46;
    box-shadow: 0 4px 10px rgba(0,0,0,.25);
}`,
  },
  {
    id: 1652,
    name: "Aurora Tabs",
    preview: (
      <div className="tab-1652">
        <button className="tab-1652__item tab-1652__item--active">
          Overview
        </button>
        <button className="tab-1652__item">Insights</button>
        <button className="tab-1652__item">Performance</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Insights</button>
    <button class="Tabs-item">Performance</button>
</div>`,
    css: `.Tabs {
    position: relative;
    display: flex;
    gap: 5px;
    padding: 5px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 14px;
    background: #09090b;
}
.Tabs::before {
    content: "";
    position: absolute;
    width: 160px;
    height: 55px;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(28px);
    opacity: .18;
}
.Tabs-item {
    position: relative;
    z-index: 1;
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.2);
    background: rgba(255,255,255,.1);
    color: #fff;
    box-shadow: 0 0 18px rgba(99,102,241,.12);
}`,
  },
  {
    id: 1653,
    name: "Legendary Prism Tabs",
    preview: (
      <div className="tab-1653">
        <button className="tab-1653__item tab-1653__item--active">
          <i className="fa-solid fa-sparkles"></i>
          Create
        </button>
        <button className="tab-1653__item">Build</button>
        <button className="tab-1653__item">Launch</button>
        <button className="tab-1653__item">Scale</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-sparkles"></i>
        Create
    </button>
    <button class="Tabs-item">Build</button>
    <button class="Tabs-item">Launch</button>
    <button class="Tabs-item">Scale</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border-radius: 14px;
    background: #08080a;
    border: 1px solid #27272a;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    position: relative;
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
    overflow: hidden;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    color: #fff;
    border-color: transparent;
    background:
        linear-gradient(#111113,#111113) padding-box,
        linear-gradient(120deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316) border-box;
}
.Tabs-item-active::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 30px;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    background: linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(22px);
    opacity: .2;
}
.Tabs-item-active i {
    position: relative;
    z-index: 1;
    color: #67e8f9;
}`,
  },
  {
    id: 1654,
    name: "Frosted Ice Tabs",
    preview: (
      <div className="tab-1654">
        <button className="tab-1654__item tab-1654__item--active">
          Overview
        </button>
        <button className="tab-1654__item">Activity</button>
        <button className="tab-1654__item">Details</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Activity</button>
    <button class="Tabs-item">Details</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid rgba(186,230,253,.6);
    border-radius: 13px;
    background: linear-gradient(135deg,rgba(224,242,254,.85),rgba(239,246,255,.65));
    backdrop-filter: blur(12px);
}
.Tabs-item {
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #64748b;
    font-size: 10px;
    cursor: pointer;
    transition: .2s ease;
}
.Tabs-item:hover {
    color: #0f172a;
}
.Tabs-item-active {
    border-color: #bae6fd;
    background: rgba(255,255,255,.8);
    color: #0369a1;
    box-shadow: 0 3px 9px rgba(14,165,233,.12);
    font-weight: 700;
}`,
  },
  {
    id: 1655,
    name: "Cyber Grid Tabs",
    preview: (
      <div className="tab-1655">
        <button className="tab-1655__item tab-1655__item--active">
          <i className="fa-solid fa-microchip"></i>
          Core
        </button>
        <button className="tab-1655__item">
          <i className="fa-solid fa-network-wired"></i>
          Network
        </button>
        <button className="tab-1655__item">
          <i className="fa-solid fa-database"></i>
          Data
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-microchip"></i>
        Core
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-network-wired"></i>
        Network
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-database"></i>
        Data
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 3px;
    padding: 4px;
    border: 1px solid #0f3b5d;
    border-radius: 8px;
    background: #020617;
}
.Tabs-item {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: #475569;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #7dd3fc;
}
.Tabs-item-active {
    background: rgba(14,165,233,.08);
    color: #22d3ee;
    box-shadow: inset 0 0 12px rgba(14,165,233,.05),0 0 10px rgba(14,165,233,.1);
    text-shadow: 0 0 7px rgba(34,211,238,.5);
}`,
  },
  {
    id: 1656,
    name: "Neon Violet Tabs",
    preview: (
      <div className="tab-1656">
        <button className="tab-1656__item tab-1656__item--active">
          Design
        </button>
        <button className="tab-1656__item">Prototype</button>
        <button className="tab-1656__item">Publish</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Design</button>
    <button class="Tabs-item">Prototype</button>
    <button class="Tabs-item">Publish</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid #4c1d95;
    border-radius: 12px;
    background: #0f0520;
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #8b5cf6;
    opacity: .55;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    opacity: .85;
}
.Tabs-item-active {
    opacity: 1;
    background: rgba(139,92,246,.1);
    color: #c4b5fd;
    box-shadow: 0 0 15px rgba(139,92,246,.18),inset 0 0 10px rgba(139,92,246,.06);
}`,
  },
  {
    id: 1657,
    name: "Split Tabs",
    preview: (
      <div className="tab-1657">
        <button className="tab-1657__item tab-1657__item--active">
          Monthly
        </button>
        <button className="tab-1657__item">Yearly</button>
        <button className="tab-1657__badge">Save 20%</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Monthly</button>
    <button class="Tabs-item">Yearly</button>
    <span class="Tabs-badge">Save 20%</span>
</div>`,
    css: `.Tabs {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 4px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}
.Tabs-item {
    padding: 8px 13px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
    font-weight: 700;
}
.Tabs-badge {
    margin-right: 4px;
    padding: 4px 7px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 7px;
    font-weight: 800;
}`,
  },
  {
    id: 1658,
    name: "Rainbow Underline Tabs",
    preview: (
      <div className="tab-1658">
        <button className="tab-1658__item tab-1658__item--active">
          Explore
        </button>
        <button className="tab-1658__item">Following</button>
        <button className="tab-1658__item">Saved</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Explore</button>
    <button class="Tabs-item">Following</button>
    <button class="Tabs-item">Saved</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 22px;
    border-bottom: 1px solid #e4e4e7;
}
.Tabs-item {
    position: relative;
    padding: 10px 1px 12px;
    border: none;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #18181b;
    font-weight: 700;
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}`,
  },
  {
    id: 1659,
    name: "Bubble Tabs",
    preview: (
      <div className="tab-1659">
        <button className="tab-1659__item tab-1659__item--active">All</button>
        <button className="tab-1659__item">Unread</button>
        <button className="tab-1659__item">Mentions</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">All</button>
    <button class="Tabs-item">Unread</button>
    <button class="Tabs-item">Mentions</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
}
.Tabs-item {
    padding: 9px 15px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    background: #fff;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    border-color: #c4b5fd;
    color: #7c3aed;
}
.Tabs-item-active {
    border-color: #7c3aed;
    background: #7c3aed;
    color: #fff;
    box-shadow: 0 5px 12px rgba(124,58,237,.2);
}`,
  },
  {
    id: 1660,
    name: "Monochrome Tabs",
    preview: (
      <div className="tab-1660">
        <button className="tab-1660__item tab-1660__item--active">
          Overview
        </button>
        <button className="tab-1660__item">Insights</button>
        <button className="tab-1660__item">Reports</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Insights</button>
    <button class="Tabs-item">Reports</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 0;
    border: 1px solid #d4d4d8;
}
.Tabs-item {
    padding: 9px 15px;
    border: none;
    border-right: 1px solid #d4d4d8;
    background: #fff;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:last-child {
    border-right: none;
}
.Tabs-item-active {
    background: #18181b;
    color: #fff;
}`,
  },
  {
    id: 1661,
    name: "Glow Border Tabs",
    preview: (
      <div className="tab-1661">
        <button className="tab-1661__item tab-1661__item--active">Home</button>
        <button className="tab-1661__item">Projects</button>
        <button className="tab-1661__item">Team</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Home</button>
    <button class="Tabs-item">Projects</button>
    <button class="Tabs-item">Team</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid #27272a;
    border-radius: 13px;
    background: #09090b;
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
    border-color: #3f3f46;
}
.Tabs-item-active {
    border-color: #fff;
    background: #18181b;
    color: #fff;
    box-shadow: 0 0 12px rgba(255,255,255,.12),inset 0 0 10px rgba(255,255,255,.04);
}`,
  },
  {
    id: 1662,
    name: "Icon Badge Tabs",
    preview: (
      <div className="tab-1662">
        <button className="tab-1662__item tab-1662__item--active">
          <i className="fa-solid fa-inbox"></i>
          Inbox
          <span>7</span>
        </button>
        <button className="tab-1662__item">
          <i className="fa-solid fa-paper-plane"></i>
          Sent
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-inbox"></i>
        Inbox
        <span>7</span>
    </button>
    <button class="Tabs-item">
        <i class="fa-solid fa-paper-plane"></i>
        Sent
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 4px;
    background: #f4f4f5;
    border-radius: 10px;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #fff;
    color: #18181b;
    box-shadow: 0 2px 6px rgba(0,0,0,.07);
}
.Tabs-item span {
    min-width: 16px;
    height: 16px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #e4e4e7;
    color: #71717a;
    font-size: 7px;
}
.Tabs-item-active span {
    background: #ef4444;
    color: #fff;
}`,
  },
  {
    id: 1663,
    name: "Dark Gradient Tabs",
    preview: (
      <div className="tab-1663">
        <button className="tab-1663__item tab-1663__item--active">
          Create
        </button>
        <button className="tab-1663__item">Manage</button>
        <button className="tab-1663__item">Deploy</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Create</button>
    <button class="Tabs-item">Manage</button>
    <button class="Tabs-item">Deploy</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border-radius: 12px;
    background: linear-gradient(135deg,#111827,#18181b);
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    background: linear-gradient(135deg,#2563eb,#8b5cf6);
    color: #fff;
    box-shadow: 0 5px 15px rgba(99,102,241,.22);
}`,
  },
  {
    id: 1664,
    name: "Ice Glow Tabs",
    preview: (
      <div className="tab-1664">
        <button className="tab-1664__item tab-1664__item--active">Ice</button>
        <button className="tab-1664__item">Snow</button>
        <button className="tab-1664__item">Frost</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Ice</button>
    <button class="Tabs-item">Snow</button>
    <button class="Tabs-item">Frost</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid #7dd3fc;
    border-radius: 12px;
    background: #082f49;
    box-shadow: 0 0 18px rgba(56,189,248,.12);
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #7dd3fc;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #e0f2fe;
}
.Tabs-item-active {
    background: rgba(125,211,252,.1);
    color: #e0f2fe;
    box-shadow: inset 0 0 12px rgba(125,211,252,.08),0 0 12px rgba(56,189,248,.12);
}`,
  },
  {
    id: 1665,
    name: "Retro Tabs",
    preview: (
      <div className="tab-1665">
        <button className="tab-1665__item tab-1665__item--active">Games</button>
        <button className="tab-1665__item">Scores</button>
        <button className="tab-1665__item">Rankings</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Games</button>
    <button class="Tabs-item">Scores</button>
    <button class="Tabs-item">Rankings</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 3px;
    padding: 4px;
    border: 2px solid #18181b;
    background: #facc15;
}
.Tabs-item {
    padding: 8px 12px;
    border: 2px solid #18181b;
    background: #fff;
    color: #18181b;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}
.Tabs-item-active {
    background: #18181b;
    color: #facc15;
}`,
  },
  {
    id: 1666,
    name: "Soft Shadow Tabs",
    preview: (
      <div className="tab-1666">
        <button className="tab-1666__item tab-1666__item--active">Today</button>
        <button className="tab-1666__item">Tomorrow</button>
        <button className="tab-1666__item">Upcoming</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Today</button>
    <button class="Tabs-item">Tomorrow</button>
    <button class="Tabs-item">Upcoming</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 6px;
    padding: 6px;
    border-radius: 15px;
    background: #fafafa;
}
.Tabs-item {
    padding: 9px 14px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: #a1a1aa;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    background: #fff;
    color: #18181b;
    box-shadow: 0 4px 12px rgba(0,0,0,.08);
    font-weight: 700;
}`,
  },
  {
    id: 1667,
    name: "Split Content Tabs",
    preview: (
      <div className="tab-1667">
        <button className="tab-1667__item tab-1667__item--active">
          <strong>12</strong>
          Projects
        </button>
        <button className="tab-1667__item">
          <strong>48</strong>
          Tasks
        </button>
        <button className="tab-1667__item">
          <strong>8</strong>
          Teams
        </button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <strong>12</strong>
        Projects
    </button>
    <button class="Tabs-item">
        <strong>48</strong>
        Tasks
    </button>
    <button class="Tabs-item">
        <strong>8</strong>
        Teams
    </button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
}
.Tabs-item {
    min-width: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 9px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
    color: #71717a;
    font-size: 9px;
    cursor: pointer;
}
.Tabs-item strong {
    font-size: 15px;
    color: #18181b;
}
.Tabs-item-active {
    border-color: #2563eb;
    background: #eff6ff;
    color: #2563eb;
}
.Tabs-item-active strong {
    color: #2563eb;
}`,
  },
  {
    id: 1668,
    name: "Neon Orange Tabs",
    preview: (
      <div className="tab-1668">
        <button className="tab-1668__item tab-1668__item--active">
          <i className="fa-solid fa-fire"></i>
          Hot
        </button>
        <button className="tab-1668__item">New</button>
        <button className="tab-1668__item">Top</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-fire"></i>
        Hot
    </button>
    <button class="Tabs-item">New</button>
    <button class="Tabs-item">Top</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid #7c2d12;
    border-radius: 11px;
    background: #1c0a03;
}
.Tabs-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #fb923c;
    opacity: .55;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    opacity: 1;
    background: rgba(249,115,22,.1);
    color: #fed7aa;
    box-shadow: 0 0 15px rgba(249,115,22,.15);
}`,
  },
  {
    id: 1669,
    name: "Glass Outline Tabs",
    preview: (
      <div className="tab-1669">
        <button className="tab-1669__item tab-1669__item--active">
          Overview
        </button>
        <button className="tab-1669__item">Stats</button>
        <button className="tab-1669__item">History</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Overview</button>
    <button class="Tabs-item">Stats</button>
    <button class="Tabs-item">History</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 12px;
    background: rgba(255,255,255,.05);
    backdrop-filter: blur(15px);
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 9px;
    background: transparent;
    color: rgba(255,255,255,.55);
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.4);
    background: rgba(255,255,255,.12);
    color: #fff;
}`,
  },
  {
    id: 1670,
    name: "Terminal Tabs",
    preview: (
      <div className="tab-1670">
        <button className="tab-1670__item tab-1670__item--active">
          ~/project
        </button>
        <button className="tab-1670__item">logs</button>
        <button className="tab-1670__item">config</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">~/project</button>
    <button class="Tabs-item">logs</button>
    <button class="Tabs-item">config</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 2px;
    padding: 4px 4px 0;
    border-radius: 7px 7px 0 0;
    background: #111827;
    border-bottom: 1px solid #22c55e;
}
.Tabs-item {
    padding: 8px 11px;
    border: none;
    border-radius: 6px 6px 0 0;
    background: transparent;
    color: #4ade80;
    opacity: .4;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
}
.Tabs-item-active {
    opacity: 1;
    background: #020617;
    color: #86efac;
    box-shadow: inset 0 2px #22c55e;
}`,
  },
  {
    id: 1671,
    name: "Elegant Serif Tabs",
    preview: (
      <div className="tab-1671">
        <button className="tab-1671__item tab-1671__item--active">
          Collection
        </button>
        <button className="tab-1671__item">Journal</button>
        <button className="tab-1671__item">About</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Collection</button>
    <button class="Tabs-item">Journal</button>
    <button class="Tabs-item">About</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 24px;
    border-bottom: 1px solid #d6d3d1;
}
.Tabs-item {
    position: relative;
    padding: 10px 1px 12px;
    border: none;
    background: transparent;
    color: #78716c;
    font-family: Georgia,serif;
    font-size: 11px;
    cursor: pointer;
}
.Tabs-item-active {
    color: #292524;
}
.Tabs-item-active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background: #292524;
}`,
  },
  {
    id: 1672,
    name: "Rainbow Glass Tabs",
    preview: (
      <div className="tab-1672">
        <button className="tab-1672__item tab-1672__item--active">Magic</button>
        <button className="tab-1672__item">Studio</button>
        <button className="tab-1672__item">Community</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">Magic</button>
    <button class="Tabs-item">Studio</button>
    <button class="Tabs-item">Community</button>
</div>`,
    css: `.Tabs {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 14px;
    background: linear-gradient(135deg,rgba(239,68,68,.12),rgba(59,130,246,.12),rgba(168,85,247,.12));
    backdrop-filter: blur(14px);
}
.Tabs-item {
    padding: 9px 14px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: rgba(255,255,255,.55);
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.3);
    background: linear-gradient(135deg,rgba(239,68,68,.25),rgba(168,85,247,.22));
    color: #fff;
    box-shadow: 0 0 18px rgba(168,85,247,.15);
}`,
  },
  {
    id: 1673,
    name: "Legendary Energy Tabs",
    preview: (
      <div className="tab-1673">
        <button className="tab-1673__item tab-1673__item--active">
          <i className="fa-solid fa-bolt"></i>
          Energy
        </button>
        <button className="tab-1673__item">Power</button>
        <button className="tab-1673__item">Velocity</button>
      </div>
    ),
    html: `<div class="Tabs">
    <button class="Tabs-item Tabs-item-active">
        <i class="fa-solid fa-bolt"></i>
        Energy
    </button>
    <button class="Tabs-item">Power</button>
    <button class="Tabs-item">Velocity</button>
</div>`,
    css: `.Tabs {
    position: relative;
    display: flex;
    gap: 4px;
    padding: 5px;
    overflow: hidden;
    border: 1px solid #312e81;
    border-radius: 13px;
    background: #05050d;
}
.Tabs::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 70px;
    left: 4%;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(30px);
    opacity: .2;
    animation: energy-glow 3s ease-in-out infinite;
}
.Tabs-item {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 13px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    font-size: 10px;
    cursor: pointer;
}
.Tabs-item:hover {
    color: #fff;
}
.Tabs-item-active {
    border-color: rgba(255,255,255,.2);
    background: rgba(255,255,255,.1);
    color: #fff;
    box-shadow: 0 0 18px rgba(99,102,241,.16);
}
.Tabs-item-active i {
    color: #67e8f9;
}
@keyframes energy-glow {
    50% {
        transform: translateY(-50%) translateX(30px);
        opacity: .3;
    }
}`,
  },
];
