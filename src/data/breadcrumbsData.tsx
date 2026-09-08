import "../pages/All.css";

export const breadcrumbs = [
  {
    id: 1386,
    name: "Classic Breadcrumbs",
    preview: (
      <nav className="breadcrumb-1386">
        <a href="#">Home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Projects</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Dashboard</span>
      </nav>
    ),
    html: `<nav class="Breadcrumbs">
    <a href="#">Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Projects</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Dashboard</span>
</nav>`,
    css: `.Breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 11px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #ffffff;
}
.Breadcrumbs a {
    color: #2563eb;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumbs i {
    color: #a1a1aa;
    font-size: 7px;
}
.Breadcrumbs span {
    color: #52525b;
    font-size: 9px;
    font-weight: 600;
}`,
  },
  {
    id: 1387,
    name: "Gradient Breadcrumbs",
    preview: (
      <nav className="breadcrumb-1387">
        <span>Home</span>
        <i className="fa-solid fa-angle-right"></i>
        <span>Components</span>
        <i className="fa-solid fa-angle-right"></i>
        <strong>Buttons</strong>
      </nav>
    ),
    html: `<nav class="Breadcrumbs">
    <span>Home</span>
    <i class="fa-solid fa-angle-right"></i>
    <span>Components</span>
    <i class="fa-solid fa-angle-right"></i>
    <strong>Buttons</strong>
</nav>`,
    css: `.Breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border-radius: 10px;
    background: #18181b;
    color: #71717a;
}
.Breadcrumbs span {
    font-size: 9px;
}
.Breadcrumbs i {
    color: #52525b;
    font-size: 7px;
}
.Breadcrumbs strong {
    background: linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 9px;
}`,
  },
  {
    id: 2021,
    name: "Modern Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2021">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Products</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Details</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Products</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Details</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}
.Breadcrumb a {
    color: #6366f1;
    text-decoration: none;
}
.Breadcrumb i {
    color: #a1a1aa;
    font-size: 9px;
}
.Breadcrumb span {
    color: #52525b;
    font-weight: 600;
}`,
  },
  {
    id: 2022,
    name: "Dark Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2022">
        <a href="#">
          <i className="fa-solid fa-house"></i> Dashboard
        </a>
        <i className="fa-solid fa-angle-right"></i>
        <a href="#">Projects</a>
        <i className="fa-solid fa-angle-right"></i>
        <span>Project Alpha</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Dashboard</a>
    <i class="fa-solid fa-angle-right"></i>
    <a href="#">Projects</a>
    <i class="fa-solid fa-angle-right"></i>
    <span>Project Alpha</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #09090b;
    color: #a1a1aa;
}
.Breadcrumb a {
    color: #c4b5fd;
    text-decoration: none;
}
.Breadcrumb a:hover {
    color: #fff;
}
.Breadcrumb i {
    color: #52525b;
    font-size: 8px;
}
.Breadcrumb span {
    color: #71717a;
    font-size: 11px;
}`,
  },
  {
    id: 2023,
    name: "Neon Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2023">
        <a href="#">
          <i className="fa-solid fa-house"></i> SYSTEM
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">NETWORK</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>CORE</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> SYSTEM</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">NETWORK</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>CORE</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #22d3ee;
    background: #020b12;
    color: #67e8f9;
    font-family: monospace;
    box-shadow: 0 0 14px rgba(34,211,238,.14);
}
.Breadcrumb a {
    color: #22d3ee;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #a5f3fc;
    text-shadow: 0 0 8px #22d3ee;
}
.Breadcrumb i {
    color: #155e75;
    font-size: 7px;
}
.Breadcrumb span {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2024,
    name: "Glass Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2024">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Library</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Components</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Library</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Components</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 13px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(16px);
    color: #fff;
}
.Breadcrumb a {
    color: rgba(255,255,255,.72);
    text-decoration: none;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #fff;
}
.Breadcrumb i {
    color: rgba(255,255,255,.35);
    font-size: 8px;
}
.Breadcrumb span {
    color: rgba(255,255,255,.5);
    font-size: 10px;
}`,
  },
  {
    id: 2025,
    name: "Luxury Gold Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2025">
        <a href="#">
          <i className="fa-solid fa-crown"></i> Maison
        </a>
        <i className="fa-solid fa-angle-right"></i>
        <a href="#">Collection</a>
        <i className="fa-solid fa-angle-right"></i>
        <span>Signature</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-crown"></i> Maison</a>
    <i class="fa-solid fa-angle-right"></i>
    <a href="#">Collection</a>
    <i class="fa-solid fa-angle-right"></i>
    <span>Signature</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border-top: 1px solid #a16207;
    border-bottom: 1px solid #a16207;
    background: #0b0905;
    color: #fef3c7;
}
.Breadcrumb a {
    color: #d6a74b;
    text-decoration: none;
    font-family: Georgia, serif;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #fde68a;
}
.Breadcrumb i {
    color: #6b4f13;
    font-size: 8px;
}
.Breadcrumb span {
    color: #a8a29e;
    font-family: Georgia, serif;
    font-size: 10px;
}`,
  },
  {
    id: 2026,
    name: "Gradient Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2026">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Explore</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Featured</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Explore</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Featured</span>
</nav>`,
    css: `.Breadcrumb {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 8px 12px;
    border-radius: 10px;
    background: linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899);
    color: #fff;
}
.Breadcrumb a {
    color: rgba(255,255,255,.85);
    text-decoration: none;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #fff;
}
.Breadcrumb i {
    color: rgba(255,255,255,.5);
    font-size: 8px;
}
.Breadcrumb span {
    color: #fff;
    font-size: 10px;
    font-weight: 800;
}`,
  },
  {
    id: 2027,
    name: "Pill Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2027">
        <a href="#">Home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Store</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Products</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Store</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Products</span>
</nav>`,
    css: `.Breadcrumb {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 5px 7px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    background: #fff;
}
.Breadcrumb a,
.Breadcrumb span {
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 9px;
}
.Breadcrumb a {
    color: #52525b;
    text-decoration: none;
}
.Breadcrumb a:hover {
    background: #f4f4f5;
}
.Breadcrumb span {
    background: #18181b;
    color: #fff;
    font-weight: 700;
}
.Breadcrumb i {
    color: #a1a1aa;
    font-size: 7px;
}`,
  },
  {
    id: 2028,
    name: "Cyber Grid Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2028">
        <a href="#">
          <i className="fa-solid fa-terminal"></i> ROOT
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">SRC</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>APP</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-terminal"></i> ROOT</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">SRC</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>APP</span>
</nav>`,
    css: `.Breadcrumb {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    overflow: hidden;
    border: 1px solid #2563eb;
    background: #020617;
    color: #93c5fd;
    font-family: monospace;
}
.Breadcrumb::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(37,99,235,.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(37,99,235,.05) 1px,transparent 1px);
    background-size: 14px 14px;
}
.Breadcrumb > * {
    position: relative;
}
.Breadcrumb a {
    color: #60a5fa;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #bfdbfe;
}
.Breadcrumb i {
    color: #1d4ed8;
    font-size: 7px;
}
.Breadcrumb span {
    color: #dbeafe;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2029,
    name: "Soft UI Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2029">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Blog</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Article</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Blog</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Article</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 11px;
    border-radius: 13px;
    background: #eef2ff;
    box-shadow: 5px 5px 12px rgba(99,102,241,.1),-5px -5px 12px #fff;
}
.Breadcrumb a {
    color: #6366f1;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb i {
    color: #a5b4fc;
    font-size: 7px;
}
.Breadcrumb span {
    color: #475569;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 2030,
    name: "Slash Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2030">
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Components</a>
        <span>/</span>
        <strong>Buttons</strong>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <span>/</span>
    <a href="#">Components</a>
    <span>/</span>
    <strong>Buttons</strong>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
}
.Breadcrumb a {
    color: #6366f1;
    text-decoration: none;
}
.Breadcrumb a:hover {
    text-decoration: underline;
}
.Breadcrumb span {
    color: #a1a1aa;
}
.Breadcrumb strong {
    color: #18181b;
}`,
  },
  {
    id: 2031,
    name: "Arrow Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2031">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-arrow-right"></i>
        <a href="#">Account</a>
        <i className="fa-solid fa-arrow-right"></i>
        <span>Settings</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-arrow-right"></i>
    <a href="#">Account</a>
    <i class="fa-solid fa-arrow-right"></i>
    <span>Settings</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border-radius: 8px;
    background: #f8fafc;
}
.Breadcrumb a {
    color: #2563eb;
    text-decoration: none;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #1d4ed8;
}
.Breadcrumb i {
    color: #94a3b8;
    font-size: 8px;
}
.Breadcrumb span {
    color: #334155;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 2032,
    name: "Neon Purple Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2032">
        <a href="#">
          <i className="fa-solid fa-house"></i> HOME
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">VOID</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>PORTAL</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">VOID</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>PORTAL</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #a855f7;
    background: #090313;
    color: #d8b4fe;
    font-family: monospace;
    box-shadow: 0 0 17px rgba(168,85,247,.15);
}
.Breadcrumb a {
    color: #c084fc;
    text-decoration: none;
    font-size: 7px;
}
.Breadcrumb a:hover {
    color: #f5d0fe;
    text-shadow: 0 0 8px #a855f7;
}
.Breadcrumb i {
    color: #581c87;
    font-size: 7px;
}
.Breadcrumb span {
    color: #e9d5ff;
    font-size: 7px;
    font-weight: 900;
}`,
  },
  {
    id: 2033,
    name: "Rainbow Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2033">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Discover</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Featured</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Discover</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Featured</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px;
    border-radius: 10px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316);
}
.Breadcrumb a,
.Breadcrumb span {
    padding: 7px 9px;
    font-size: 9px;
}
.Breadcrumb a {
    color: #fff;
    text-decoration: none;
}
.Breadcrumb i {
    color: rgba(255,255,255,.7);
    font-size: 7px;
}
.Breadcrumb span {
    border-radius: 7px;
    background: #09090b;
    color: #fff;
    font-weight: 800;
}`,
  },
  {
    id: 2034,
    name: "Icon Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2034">
        <a href="#">
          <i className="fa-solid fa-house"></i>
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">
          <i className="fa-solid fa-folder"></i>
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>
          <i className="fa-solid fa-file"></i>
        </span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i></a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#"><i class="fa-solid fa-folder"></i></a>
    <i class="fa-solid fa-chevron-right"></i>
    <span><i class="fa-solid fa-file"></i></span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Breadcrumb a,
.Breadcrumb span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    font-size: 10px;
}
.Breadcrumb a {
    background: #f4f4f5;
    color: #71717a;
    text-decoration: none;
}
.Breadcrumb a:hover {
    background: #e4e4e7;
    color: #18181b;
}
.Breadcrumb span {
    background: #18181b;
    color: #fff;
}
.Breadcrumb > i {
    color: #a1a1aa;
    font-size: 7px;
}`,
  },
  {
    id: 2035,
    name: "Folder Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2035">
        <a href="#">
          <i className="fa-solid fa-folder"></i> Projects
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Website</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>
          <i className="fa-solid fa-file-code"></i> App.tsx
        </span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-folder"></i> Projects</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Website</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span><i class="fa-solid fa-file-code"></i> App.tsx</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 11px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fafafa;
}
.Breadcrumb a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #52525b;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb a:hover {
    color: #2563eb;
}
.Breadcrumb a i {
    color: #f59e0b;
}
.Breadcrumb > i {
    color: #a1a1aa;
    font-size: 7px;
}
.Breadcrumb span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #18181b;
    font-size: 9px;
    font-weight: 700;
}
.Breadcrumb span i {
    color: #6366f1;
}`,
  },
  {
    id: 2036,
    name: "Compact Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2036">
        <a href="#">Home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Docs</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>API</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Docs</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>API</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 5px;
}
.Breadcrumb a,
.Breadcrumb span {
    font-size: 8px;
}
.Breadcrumb a {
    color: #6366f1;
    text-decoration: none;
}
.Breadcrumb i {
    color: #a1a1aa;
    font-size: 6px;
}
.Breadcrumb span {
    color: #52525b;
    font-weight: 700;
}`,
  },
  {
    id: 2037,
    name: "Floating Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2037">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Dashboard</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Analytics</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Dashboard</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Analytics</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 8px 25px rgba(15,23,42,.12);
}
.Breadcrumb a {
    color: #64748b;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb a:hover {
    color: #4f46e5;
}
.Breadcrumb > i {
    color: #cbd5e1;
    font-size: 7px;
}
.Breadcrumb span {
    padding: 4px 7px;
    border-radius: 6px;
    background: #eef2ff;
    color: #4f46e5;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 2038,
    name: "Cyber Terminal Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2038">
        <span className="breadcrumb-2038__prompt">$</span>
        <a href="#">home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">projects</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>ui-library</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <span class="Breadcrumb-prompt">$</span>
    <a href="#">home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">projects</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>ui-library</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border: 1px solid #27272a;
    background: #09090b;
    color: #4ade80;
    font-family: monospace;
}
.Breadcrumb-prompt {
    color: #22c55e;
}
.Breadcrumb a {
    color: #86efac;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #fff;
}
.Breadcrumb > i {
    color: #3f3f46;
    font-size: 6px;
}
.Breadcrumb > span:last-child {
    color: #4ade80;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2039,
    name: "Minimal Monochrome Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2039">
        <a href="#">Home</a>
        <span>→</span>
        <a href="#">Library</a>
        <span>→</span>
        <strong>Elements</strong>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <span>→</span>
    <a href="#">Library</a>
    <span>→</span>
    <strong>Elements</strong>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
}
.Breadcrumb a {
    color: #737373;
    text-decoration: none;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #111;
}
.Breadcrumb span {
    color: #a3a3a3;
    font-size: 9px;
}
.Breadcrumb strong {
    color: #111;
    font-size: 10px;
}`,
  },
  {
    id: 2040,
    name: "Legendary Aurora Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2040">
        <div className="breadcrumb-2040__glow"></div>
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Explore</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Discover</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <div class="Breadcrumb-glow"></div>
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Explore</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Discover</span>
</nav>`,
    css: `.Breadcrumb {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 13px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 12px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
}
.Breadcrumb-glow {
    position: absolute;
    width: 160px;
    height: 70px;
    top: -40px;
    left: 25px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(32px);
    opacity: .25;
}
.Breadcrumb a,
.Breadcrumb > i,
.Breadcrumb > span {
    position: relative;
    z-index: 1;
}
.Breadcrumb a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb a:hover {
    color: #fff;
}
.Breadcrumb > i {
    color: #6366f1;
    font-size: 7px;
}
.Breadcrumb > span {
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}`,
  },
  {
    id: 2041,
    name: "Neon Cyan Trail",
    preview: (
      <nav className="breadcrumb-2041">
        <a href="#">
          <i className="fa-solid fa-house"></i> HOME
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">SYSTEM</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>CORE</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">SYSTEM</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>CORE</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #22d3ee;
    background: #020b12;
    color: #67e8f9;
    font-family: monospace;
    box-shadow: 0 0 15px rgba(34,211,238,.14);
}
.Breadcrumb a {
    color: #22d3ee;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #a5f3fc;
    text-shadow: 0 0 8px #22d3ee;
}
.Breadcrumb > i {
    color: #155e75;
    font-size: 7px;
}
.Breadcrumb span {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2042,
    name: "Purple Neon Path",
    preview: (
      <nav className="breadcrumb-2042">
        <a href="#">
          <i className="fa-solid fa-house"></i> HOME
        </a>
        <i className="fa-solid fa-angle-right"></i>
        <a href="#">VOID</a>
        <i className="fa-solid fa-angle-right"></i>
        <span>PORTAL</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
    <i class="fa-solid fa-angle-right"></i>
    <a href="#">VOID</a>
    <i class="fa-solid fa-angle-right"></i>
    <span>PORTAL</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #a855f7;
    background: #090313;
    color: #d8b4fe;
    font-family: monospace;
    box-shadow: 0 0 15px rgba(168,85,247,.16);
}
.Breadcrumb a {
    color: #c084fc;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #f5d0fe;
    text-shadow: 0 0 8px #a855f7;
}
.Breadcrumb > i {
    color: #581c87;
    font-size: 7px;
}
.Breadcrumb span {
    color: #e9d5ff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2043,
    name: "Cyber Green Route",
    preview: (
      <nav className="breadcrumb-2043">
        <a href="#">
          <i className="fa-solid fa-terminal"></i> ROOT
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">SRC</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>APP</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-terminal"></i> ROOT</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">SRC</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>APP</span>
</nav>`,
    css: `.Breadcrumb {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    overflow: hidden;
    border: 1px solid #22c55e;
    background: #020704;
    color: #86efac;
    font-family: monospace;
}
.Breadcrumb::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(34,197,94,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,197,94,.05) 1px, transparent 1px);
    background-size: 14px 14px;
}
.Breadcrumb > * {
    position: relative;
}
.Breadcrumb a {
    color: #4ade80;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #bbf7d0;
}
.Breadcrumb > i {
    color: #166534;
    font-size: 7px;
}
.Breadcrumb span {
    color: #86efac;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2044,
    name: "Ice Crystal Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2044">
        <a href="#">
          <i className="fa-solid fa-snowflake"></i> HOME
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">LIBRARY</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>ICE</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-snowflake"></i> HOME</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">LIBRARY</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>ICE</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #bae6fd;
    border-radius: 10px;
    background: linear-gradient(145deg,#f0f9ff,#e0f2fe);
    color: #0c4a6e;
}
.Breadcrumb a {
    color: #0284c7;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #0369a1;
}
.Breadcrumb > i {
    color: #7dd3fc;
    font-size: 7px;
}
.Breadcrumb span {
    color: #0c4a6e;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2045,
    name: "Luxury Gold Trail",
    preview: (
      <nav className="breadcrumb-2045">
        <a href="#">
          <i className="fa-solid fa-crown"></i> MAISON
        </a>
        <i className="fa-solid fa-angle-right"></i>
        <a href="#">COLLECTION</a>
        <i className="fa-solid fa-angle-right"></i>
        <span>SIGNATURE</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-crown"></i> MAISON</a>
    <i class="fa-solid fa-angle-right"></i>
    <a href="#">COLLECTION</a>
    <i class="fa-solid fa-angle-right"></i>
    <span>SIGNATURE</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border-top: 1px solid #a16207;
    border-bottom: 1px solid #a16207;
    background: #0b0905;
    color: #fef3c7;
}
.Breadcrumb a {
    color: #d6a74b;
    text-decoration: none;
    font-family: Georgia, serif;
    font-size: 8px;
}
.Breadcrumb a:hover {
    color: #fde68a;
}
.Breadcrumb > i {
    color: #6b4f13;
    font-size: 7px;
}
.Breadcrumb span {
    color: #fde68a;
    font-family: Georgia, serif;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 2046,
    name: "Glass Aurora Trail",
    preview: (
      <nav className="breadcrumb-2046">
        <div className="breadcrumb-2046__glow"></div>
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Explore</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Discover</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <div class="Breadcrumb-glow"></div>
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Explore</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Discover</span>
</nav>`,
    css: `.Breadcrumb {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 13px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 14px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(16px);
    color: #fff;
}
.Breadcrumb-glow {
    position: absolute;
    width: 170px;
    height: 70px;
    left: 15px;
    top: -42px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    filter: blur(34px);
    opacity: .25;
}
.Breadcrumb a,
.Breadcrumb > i,
.Breadcrumb > span {
    position: relative;
}
.Breadcrumb a {
    color: rgba(255,255,255,.75);
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb > i {
    color: rgba(255,255,255,.35);
    font-size: 7px;
}
.Breadcrumb span {
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}`,
  },
  {
    id: 2047,
    name: "Rainbow Prism Path",
    preview: (
      <nav className="breadcrumb-2047">
        <a href="#">Home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Library</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Prism</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Library</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Prism</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 2px;
    border-radius: 11px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}
.Breadcrumb a,
.Breadcrumb span {
    padding: 7px 9px;
    font-size: 9px;
}
.Breadcrumb a {
    color: #fff;
    text-decoration: none;
}
.Breadcrumb > i {
    color: rgba(255,255,255,.75);
    font-size: 7px;
}
.Breadcrumb span {
    border-radius: 7px;
    background: #09090b;
    color: #fff;
    font-weight: 800;
}`,
  },
  {
    id: 2048,
    name: "Minimal Arrow Trail",
    preview: (
      <nav className="breadcrumb-2048">
        <a href="#">Home</a>
        <span>→</span>
        <a href="#">Products</a>
        <span>→</span>
        <strong>Details</strong>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">Home</a>
    <span>→</span>
    <a href="#">Products</a>
    <span>→</span>
    <strong>Details</strong>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 9px;
}
.Breadcrumb a {
    color: #737373;
    text-decoration: none;
    font-size: 10px;
}
.Breadcrumb a:hover {
    color: #111;
}
.Breadcrumb span {
    color: #a3a3a3;
}
.Breadcrumb strong {
    color: #111;
    font-size: 10px;
}`,
  },
  {
    id: 2049,
    name: "Soft Blue Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2049">
        <a href="#">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Dashboard</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Analytics</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> Home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Dashboard</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>Analytics</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 11px;
    border-radius: 13px;
    background: #eff6ff;
    box-shadow: 5px 5px 12px rgba(59,130,246,.08),-5px -5px 12px #fff;
}
.Breadcrumb a {
    color: #3b82f6;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb > i {
    color: #93c5fd;
    font-size: 7px;
}
.Breadcrumb span {
    color: #334155;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 2050,
    name: "Folder Explorer",
    preview: (
      <nav className="breadcrumb-2050">
        <a href="#">
          <i className="fa-solid fa-folder"></i> Projects
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">Website</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>
          <i className="fa-solid fa-file-code"></i> App.tsx
        </span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-folder"></i> Projects</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">Website</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span><i class="fa-solid fa-file-code"></i> App.tsx</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 11px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fafafa;
}
.Breadcrumb a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #52525b;
    text-decoration: none;
    font-size: 9px;
}
.Breadcrumb a i {
    color: #f59e0b;
}
.Breadcrumb > i {
    color: #a1a1aa;
    font-size: 7px;
}
.Breadcrumb span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #18181b;
    font-size: 9px;
    font-weight: 700;
}
.Breadcrumb span i {
    color: #6366f1;
}`,
  },
  {
    id: 2051,
    name: "Terminal Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2051">
        <span className="breadcrumb-2051__prompt">$</span>
        <a href="#">home</a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">projects</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>ui-library</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <span class="Breadcrumb-prompt">$</span>
    <a href="#">home</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">projects</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>ui-library</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border: 1px solid #27272a;
    background: #09090b;
    color: #4ade80;
    font-family: monospace;
}
.Breadcrumb-prompt {
    color: #22c55e;
}
.Breadcrumb a {
    color: #86efac;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb > i {
    color: #3f3f46;
    font-size: 6px;
}
.Breadcrumb > span:last-child {
    color: #4ade80;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2052,
    name: "Ocean Glass Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2052">
        <a href="#">
          <i className="fa-solid fa-water"></i> OCEAN
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">DEPTHS</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>MARIANA</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-water"></i> OCEAN</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">DEPTHS</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>MARIANA</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid rgba(125,211,252,.3);
    border-radius: 12px;
    background: rgba(14,116,144,.18);
    backdrop-filter: blur(12px);
    color: #e0f2fe;
}
.Breadcrumb a {
    color: #7dd3fc;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb > i {
    color: #155e75;
    font-size: 7px;
}
.Breadcrumb span {
    color: #e0f2fe;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2053,
    name: "Danger Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2053">
        <a href="#">
          <i className="fa-solid fa-triangle-exclamation"></i> SYSTEM
        </a>
        <i className="fa-solid fa-angle-right"></i>
        <a href="#">WARNING</a>
        <i className="fa-solid fa-angle-right"></i>
        <span>CRITICAL</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-triangle-exclamation"></i> SYSTEM</a>
    <i class="fa-solid fa-angle-right"></i>
    <a href="#">WARNING</a>
    <i class="fa-solid fa-angle-right"></i>
    <span>CRITICAL</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #ef4444;
    background: #0f0303;
    color: #fecaca;
    font-family: monospace;
}
.Breadcrumb a {
    color: #f87171;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb > i {
    color: #7f1d1d;
    font-size: 7px;
}
.Breadcrumb span {
    padding: 3px 6px;
    border: 1px solid #dc2626;
    color: #fca5a5;
    font-size: 7px;
    font-weight: 900;
}`,
  },
  {
    id: 2054,
    name: "Lavender Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2054">
        <a href="#">
          <i className="fa-solid fa-house"></i> HOME
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">STUDIO</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>CANVAS</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-house"></i> HOME</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">STUDIO</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>CANVAS</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border-radius: 12px;
    background: #faf5ff;
}
.Breadcrumb a {
    color: #8b5cf6;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb > i {
    color: #c4b5fd;
    font-size: 7px;
}
.Breadcrumb span {
    color: #5b21b6;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 2055,
    name: "Emerald Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2055">
        <a href="#">
          <i className="fa-solid fa-leaf"></i> GARDEN
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">PLANTS</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>EMERALD</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-leaf"></i> GARDEN</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">PLANTS</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>EMERALD</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    background: #f0fdf4;
}
.Breadcrumb a {
    color: #15803d;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a i {
    color: #22c55e;
}
.Breadcrumb > i {
    color: #86efac;
    font-size: 7px;
}
.Breadcrumb span {
    color: #14532d;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 2056,
    name: "Rose Gradient Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2056">
        <a href="#">
          <i className="fa-solid fa-heart"></i> STORIES
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">PEOPLE</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>MOMENTS</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-heart"></i> STORIES</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">PEOPLE</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>MOMENTS</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 11px;
    border-radius: 10px;
    background: linear-gradient(90deg,#f43f5e,#ec4899,#a855f7);
    color: #fff;
}
.Breadcrumb a {
    color: rgba(255,255,255,.86);
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb > i {
    color: rgba(255,255,255,.55);
    font-size: 7px;
}
.Breadcrumb span {
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2057,
    name: "Slate Dashboard Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2057">
        <a href="#">
          <i className="fa-solid fa-chart-pie"></i> DASHBOARD
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">REPORTS</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>MONTHLY</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-chart-pie"></i> DASHBOARD</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">REPORTS</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>MONTHLY</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 9px;
    background: #f8fafc;
}
.Breadcrumb a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #475569;
    text-decoration: none;
    font-size: 8px;
}
.Breadcrumb a i {
    color: #6366f1;
}
.Breadcrumb > i {
    color: #94a3b8;
    font-size: 7px;
}
.Breadcrumb span {
    color: #0f172a;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 2058,
    name: "Cyber HUD Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2058">
        <a href="#">
          <i className="fa-solid fa-crosshairs"></i> HUD
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">TARGETS</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>LOCKED</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#"><i class="fa-solid fa-crosshairs"></i> HUD</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">TARGETS</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>LOCKED</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid #0891b2;
    background: #031014;
    color: #67e8f9;
    font-family: monospace;
    clip-path: polygon(0 0,98% 0,100% 30%,100% 100%,0 100%);
}
.Breadcrumb a {
    color: #22d3ee;
    text-decoration: none;
    font-size: 7px;
}
.Breadcrumb > i {
    color: #155e75;
    font-size: 6px;
}
.Breadcrumb span {
    color: #a5f3fc;
    font-size: 7px;
    font-weight: 900;
}`,
  },
  {
    id: 2059,
    name: "Monochrome Box Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2059">
        <a href="#">HOME</a>
        <i className="fa-solid fa-arrow-right"></i>
        <a href="#">WORK</a>
        <i className="fa-solid fa-arrow-right"></i>
        <span>PROJECT</span>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <a href="#">HOME</a>
    <i class="fa-solid fa-arrow-right"></i>
    <a href="#">WORK</a>
    <i class="fa-solid fa-arrow-right"></i>
    <span>PROJECT</span>
</nav>`,
    css: `.Breadcrumb {
    display: flex;
    align-items: center;
    gap: 0;
    border: 2px solid #111;
    background: #fff;
}
.Breadcrumb a,
.Breadcrumb span {
    padding: 7px 10px;
    font-size: 8px;
    font-weight: 900;
}
.Breadcrumb a {
    color: #111;
    text-decoration: none;
}
.Breadcrumb a:hover {
    background: #111;
    color: #fff;
}
.Breadcrumb > i {
    padding: 0 5px;
    color: #111;
    font-size: 7px;
}
.Breadcrumb span {
    background: #111;
    color: #fff;
}`,
  },
  {
    id: 2060,
    name: "Aurora Legendary Breadcrumbs",
    preview: (
      <nav className="breadcrumb-2060">
        <div className="breadcrumb-2060__glow"></div>
        <a href="#">
          <i className="fa-solid fa-gem"></i> HOME
        </a>
        <i className="fa-solid fa-chevron-right"></i>
        <a href="#">LIBRARY</a>
        <i className="fa-solid fa-chevron-right"></i>
        <span>LEGENDARY</span>
        <i className="fa-solid fa-sparkles"></i>
      </nav>
    ),
    html: `<nav class="Breadcrumb">
    <div class="Breadcrumb-glow"></div>
    <a href="#"><i class="fa-solid fa-gem"></i> HOME</a>
    <i class="fa-solid fa-chevron-right"></i>
    <a href="#">LIBRARY</a>
    <i class="fa-solid fa-chevron-right"></i>
    <span>LEGENDARY</span>
    <i class="fa-solid fa-sparkles"></i>
</nav>`,
    css: `.Breadcrumb {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 12px;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 13px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316,#22d3ee) border-box;
    color: #fff;
}
.Breadcrumb-glow {
    position: absolute;
    width: 190px;
    height: 80px;
    left: 20px;
    top: -48px;
    border-radius: 50%;
    background: linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(38px);
    opacity: .25;
    animation: Breadcrumb-glow 4s ease-in-out infinite alternate;
}
.Breadcrumb a,
.Breadcrumb > i,
.Breadcrumb > span {
    position: relative;
}
.Breadcrumb a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 7px;
}
.Breadcrumb > i {
    color: #6366f1;
    font-size: 7px;
}
.Breadcrumb span {
    color: #fff;
    font-size: 7px;
    font-weight: 900;
}
.Breadcrumb > i:last-child {
    color: #f9a8d4;
    text-shadow: 0 0 8px #ec4899;
}
@keyframes Breadcrumb-glow {
    to {
        transform: translateX(80px);
    }
}`,
  },
];
