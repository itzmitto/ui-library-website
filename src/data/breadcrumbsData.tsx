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
  {
    id: 3994,
    name: "Simple Breadcrumb",
    preview: (
      <nav className="breadcrumb-3994" aria-label="Breadcrumb">
        <a href="#">Home</a>
        <i className="ri-arrow-right-s-line"></i>
        <a href="#">Products</a>
        <i className="ri-arrow-right-s-line"></i>
        <span>Headphones</span>
      </nav>
    ),
    html: `<nav class="breadcrumb-3994" aria-label="Breadcrumb">
    <a href="#">Home</a>
    <i class="ri-arrow-right-s-line"></i>
    <a href="#">Products</a>
    <i class="ri-arrow-right-s-line"></i>
    <span>Headphones</span>
</nav>`,
    css: `.breadcrumb-3994{display:flex;align-items:center;gap:6px;font-family:Arial,Helvetica,sans-serif;font-size:13px}.breadcrumb-3994 a{color:#64748b;text-decoration:none;transition:color .18s ease}.breadcrumb-3994 a:hover{color:#0f172a}.breadcrumb-3994 i{color:#94a3b8;font-size:16px}.breadcrumb-3994 span{color:#0f172a;font-weight:600}`,
  },
  {
    id: 3995,
    name: "Icon Breadcrumb",
    preview: (
      <nav className="breadcrumb-3995" aria-label="Breadcrumb">
        <a href="#" className="breadcrumb-3995__home" aria-label="Home">
          <i className="ri-home-5-line"></i>
        </a>

        <i className="ri-arrow-right-s-line"></i>

        <a href="#">
          <i className="ri-folder-line"></i>
          Projects
        </a>

        <i className="ri-arrow-right-s-line"></i>

        <a href="#">Website</a>

        <i className="ri-arrow-right-s-line"></i>

        <span>Dashboard</span>
      </nav>
    ),
    html: `<nav class="breadcrumb-3995" aria-label="Breadcrumb">
    <a href="#" class="breadcrumb-3995__home" aria-label="Home">
        <i class="ri-home-5-line"></i>
    </a>

    <i class="ri-arrow-right-s-line"></i>

    <a href="#">
        <i class="ri-folder-line"></i>
        Projects
    </a>

    <i class="ri-arrow-right-s-line"></i>

    <a href="#">Website</a>

    <i class="ri-arrow-right-s-line"></i>

    <span>Dashboard</span>
</nav>`,
    css: `.breadcrumb-3995{display:flex;align-items:center;gap:7px;font-family:Arial,Helvetica,sans-serif;font-size:13px}.breadcrumb-3995>a{display:flex;align-items:center;gap:5px;color:#64748b;text-decoration:none;transition:color .18s ease}.breadcrumb-3995>a:hover{color:#2563eb}.breadcrumb-3995>a>i{font-size:15px}.breadcrumb-3995>i{color:#cbd5e1;font-size:16px}.breadcrumb-3995__home{width:28px;height:28px;justify-content:center;border:1px solid #e2e8f0;border-radius:6px;background:#f8fafc}.breadcrumb-3995__home:hover{background:#eff6ff}.breadcrumb-3995 span{color:#0f172a;font-weight:600}`,
  },
  {
    id: 3996,
    name: "Contained Breadcrumb",
    preview: (
      <nav className="breadcrumb-3996" aria-label="Breadcrumb">
        <a href="#">
          <i className="ri-home-4-line"></i>
          Home
        </a>

        <span className="breadcrumb-3996__separator">/</span>

        <a href="#">Account</a>

        <span className="breadcrumb-3996__separator">/</span>

        <span className="breadcrumb-3996__current">
          <i className="ri-settings-3-line"></i>
          Settings
        </span>
      </nav>
    ),
    html: `<nav class="breadcrumb-3996" aria-label="Breadcrumb">
    <a href="#">
        <i class="ri-home-4-line"></i>
        Home
    </a>

    <span class="breadcrumb-3996__separator">/</span>

    <a href="#">Account</a>

    <span class="breadcrumb-3996__separator">/</span>

    <span class="breadcrumb-3996__current">
        <i class="ri-settings-3-line"></i>
        Settings
    </span>
</nav>`,
    css: `.breadcrumb-3996{display:flex;align-items:center;gap:8px;width:max-content;max-width:100%;padding:8px 10px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;box-shadow:0 1px 2px rgba(15,23,42,.05);font-family:Arial,Helvetica,sans-serif;font-size:12px}.breadcrumb-3996 a{display:flex;align-items:center;gap:5px;color:#64748b;text-decoration:none;transition:color .18s ease}.breadcrumb-3996 a:hover{color:#2563eb}.breadcrumb-3996 a i{font-size:14px}.breadcrumb-3996__separator{color:#cbd5e1}.breadcrumb-3996__current{display:flex;align-items:center;gap:5px;color:#0f172a;font-weight:600}.breadcrumb-3996__current i{color:#64748b;font-size:14px}`,
  },
  {
    id: 3997,
    name: "Crystal Ocean Breadcrumb",
    preview: (
      <div className="breadcrumb-3997-wrap">
        <nav className="breadcrumb-3997" aria-label="Breadcrumb">
          <a href="#">
            <i className="fa-solid fa-water"></i>
            OCEAN
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a href="#">DEPTHS</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>MARIANA</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-3997-wrap">
    <nav class="breadcrumb-3997" aria-label="Breadcrumb">
        <a href="#">
            <i class="fa-solid fa-water"></i>
            OCEAN
        </a>
        <i class="fa-solid fa-chevron-right"></i>
        <a href="#">DEPTHS</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>MARIANA</span>
    </nav>
</div>`,
    css: `.breadcrumb-3997-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb-3997 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 12px;
    border: 1px solid rgba(125,211,252,.3);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(8,47,73,.92), rgba(14,116,144,.35));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.18), 0 8px 24px rgba(14,116,144,.22);
    backdrop-filter: blur(12px);
    color: #e0f2fe;
}
.breadcrumb-3997 a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #7dd3fc;
    text-decoration: none;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .08em;
}
.breadcrumb-3997 > i {
    color: #67e8f9;
    font-size: 7px;
}
.breadcrumb-3997 span {
    color: #f0f9ff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}`,
  },
  {
    id: 3998,
    name: "Rose Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-3998-wrap">
        <nav className="breadcrumb-3998" aria-label="Breadcrumb">
          <a href="#">
            <i className="fa-solid fa-gem"></i>
            ROSE
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a href="#">QUARTZ</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>CORE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-3998-wrap">
    <nav class="breadcrumb-3998" aria-label="Breadcrumb">
        <a href="#">
            <i class="fa-solid fa-gem"></i>
            ROSE
        </a>
        <i class="fa-solid fa-chevron-right"></i>
        <a href="#">QUARTZ</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>CORE</span>
    </nav>
</div>`,
    css: `.breadcrumb-3998-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb-3998 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid rgba(251,207,232,.35);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(80,7,36,.92), rgba(190,24,93,.22));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.18), 0 8px 24px rgba(190,24,93,.18);
    backdrop-filter: blur(12px);
    color: #fff1f2;
}
.breadcrumb-3998 a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #f9a8d4;
    text-decoration: none;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .08em;
}
.breadcrumb-3998 > i {
    color: #fbcfe8;
    font-size: 7px;
}
.breadcrumb-3998 span {
    color: #fff1f2;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}`,
  },
  {
    id: 3999,
    name: "Amethyst Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-3999-wrap">
        <nav className="breadcrumb-3999" aria-label="Breadcrumb">
          <a href="#">
            <i className="fa-solid fa-sparkles"></i>
            AMETHYST
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a href="#">SPIRE</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>CHAMBER</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-3999-wrap">
    <nav class="breadcrumb-3999" aria-label="Breadcrumb">
        <a href="#">
            <i class="fa-solid fa-sparkles"></i>
            AMETHYST
        </a>
        <i class="fa-solid fa-chevron-right"></i>
        <a href="#">SPIRE</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>CHAMBER</span>
    </nav>
</div>`,
    css: `.breadcrumb-3999-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb-3999 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid rgba(196,181,253,.35);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(46,16,101,.92), rgba(109,40,217,.22));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 0 8px 24px rgba(109,40,217,.2);
    backdrop-filter: blur(12px);
    color: #f5f3ff;
}
.breadcrumb-3999 a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #c4b5fd;
    text-decoration: none;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .08em;
}
.breadcrumb-3999 > i {
    color: #ddd6fe;
    font-size: 7px;
}
.breadcrumb-3999 span {
    color: #ffffff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}`,
  },
  {
    id: 4000,
    name: "Emerald Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4000-wrap">
        <nav className="breadcrumb-4000" aria-label="Breadcrumb">
          <a href="#">
            <i className="fa-solid fa-leaf"></i>
            EMERALD
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a href="#">GROVE</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>TEMPLE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4000-wrap">
    <nav class="breadcrumb-4000" aria-label="Breadcrumb">
        <a href="#">
            <i class="fa-solid fa-leaf"></i>
            EMERALD
        </a>
        <i class="fa-solid fa-chevron-right"></i>
        <a href="#">GROVE</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>TEMPLE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4000-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb-4000 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid rgba(134,239,172,.35);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(20,83,45,.92), rgba(34,197,94,.18));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 8px 24px rgba(34,197,94,.18);
    backdrop-filter: blur(12px);
    color: #ecfdf5;
}
.breadcrumb-4000 a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #86efac;
    text-decoration: none;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .08em;
}
.breadcrumb-4000 > i {
    color: #bbf7d0;
    font-size: 7px;
}
.breadcrumb-4000 span {
    color: #f0fdf4;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}`,
  },
  {
    id: 4001,
    name: "Golden Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4001-wrap">
        <nav className="breadcrumb-4001" aria-label="Breadcrumb">
          <a href="#">
            <i className="fa-solid fa-sun"></i>
            GOLD
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a href="#">SHARD</a>
          <i className="fa-solid fa-chevron-right"></i>
          <span>CROWN</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4001-wrap">
    <nav class="breadcrumb-4001" aria-label="Breadcrumb">
        <a href="#">
            <i class="fa-solid fa-sun"></i>
            GOLD
        </a>
        <i class="fa-solid fa-chevron-right"></i>
        <a href="#">SHARD</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>CROWN</span>
    </nav>
</div>`,
    css: `.breadcrumb-4001-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb-4001 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid rgba(253,224,71,.35);
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(120,53,15,.92), rgba(245,158,11,.22));
    box-shadow: inset 0 1px 0 rgba(255,255,255,.18), 0 8px 24px rgba(245,158,11,.18);
    backdrop-filter: blur(12px);
    color: #fffbeb;
}
.breadcrumb-4001 a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #fde68a;
    text-decoration: none;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .08em;
}
.breadcrumb-4001 > i {
    color: #facc15;
    font-size: 7px;
}
.breadcrumb-4001 span {
    color: #fff7ed;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}`,
  },
  {
    id: 4002,
    name: "Crystal Shard Breadcrumb",
    preview: (
      <div className="breadcrumb-4002-wrap">
        <nav className="breadcrumb-4002" aria-label="Breadcrumb">
          <span className="breadcrumb-4002__crystals breadcrumb-4002__crystals--left">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <a href="#">
            <i className="ri-home-5-fill"></i>
            HOME
          </a>

          <span className="breadcrumb-4002__separator">
            <span></span>
          </span>

          <a href="#">CRYSTALS</a>

          <span className="breadcrumb-4002__separator">
            <span></span>
          </span>

          <span className="breadcrumb-4002__current">PRISM</span>

          <span className="breadcrumb-4002__crystals breadcrumb-4002__crystals--right">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4002-wrap">
    <nav class="breadcrumb-4002" aria-label="Breadcrumb">
        <span class="breadcrumb-4002__crystals breadcrumb-4002__crystals--left">
            <span></span>
            <span></span>
            <span></span>
        </span>

        <a href="#">
            <i class="ri-home-5-fill"></i>
            HOME
        </a>

        <span class="breadcrumb-4002__separator">
            <span></span>
        </span>

        <a href="#">CRYSTALS</a>

        <span class="breadcrumb-4002__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4002__current">PRISM</span>

        <span class="breadcrumb-4002__crystals breadcrumb-4002__crystals--right">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4002-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:20px}.breadcrumb-4002{position:relative;display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 20px;border:1px solid rgba(125,211,252,.3);border-radius:14px;background:linear-gradient(135deg,rgba(15,23,42,.94),rgba(49,46,129,.78));box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 20px rgba(103,232,249,.12),0 8px 24px rgba(15,23,42,.28);backdrop-filter:blur(14px);font-family:Arial,Helvetica,sans-serif;overflow:visible}.breadcrumb-4002::before{content:"";position:absolute;left:10%;right:10%;bottom:-4px;height:7px;border-radius:50%;background:rgba(99,102,241,.18);box-shadow:0 0 10px rgba(103,232,249,.25),0 0 22px rgba(129,140,248,.14)}.breadcrumb-4002 a,.breadcrumb-4002__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.09em;text-decoration:none}.breadcrumb-4002 a{display:flex;align-items:center;gap:5px;color:#7dd3fc;transition:color .18s ease,text-shadow .18s ease}.breadcrumb-4002 a:hover{color:#fff;text-shadow:0 0 8px rgba(103,232,249,.75)}.breadcrumb-4002__current{color:#e9d5ff}.breadcrumb-4002__separator{position:relative;width:9px;height:15px;display:block}.breadcrumb-4002__separator span{position:absolute;left:1px;bottom:0;width:7px;height:14px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);background:linear-gradient(135deg,#fff,#bae6fd 28%,#67e8f9 55%,#818cf8 78%,#c084fc);filter:drop-shadow(0 0 4px rgba(125,211,252,.5));transform:rotate(90deg)}.breadcrumb-4002__crystals{position:absolute;z-index:4;bottom:-5px;width:34px;height:35px;pointer-events:none}.breadcrumb-4002__crystals--left{left:-12px}.breadcrumb-4002__crystals--right{right:-12px;transform:scaleX(-1)}.breadcrumb-4002__crystals span{position:absolute;bottom:0;width:8px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);background:linear-gradient(135deg,#fff,#bae6fd 24%,#67e8f9 48%,#818cf8 75%,#c084fc);filter:drop-shadow(0 0 4px rgba(125,211,252,.55));transform-origin:bottom;transition:transform .2s ease,filter .2s ease}.breadcrumb-4002__crystals span:nth-child(1){left:0;height:19px;transform:rotate(-18deg)}.breadcrumb-4002__crystals span:nth-child(2){left:9px;height:32px}.breadcrumb-4002__crystals span:nth-child(3){left:19px;height:23px;transform:rotate(16deg)}.breadcrumb-4002:hover .breadcrumb-4002__crystals span:nth-child(1){transform:translateY(-3px) rotate(-23deg) scaleY(1.08)}.breadcrumb-4002:hover .breadcrumb-4002__crystals span:nth-child(2){transform:translateY(-5px) scaleY(1.08)}.breadcrumb-4002:hover .breadcrumb-4002__crystals span:nth-child(3){transform:translateY(-3px) rotate(21deg) scaleY(1.08)}.breadcrumb-4002:hover .breadcrumb-4002__crystals span{filter:drop-shadow(0 0 7px rgba(125,211,252,.85))}`,
  },
  {
    id: 4003,
    name: "Aurora Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4003-wrap">
        <nav className="breadcrumb-4003" aria-label="Breadcrumb">
          <span className="breadcrumb-4003__cluster">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <a href="#">
            <i className="ri-compass-3-fill"></i>
            REALM
          </a>

          <i className="ri-arrow-right-s-line"></i>

          <a href="#">AURORA</a>

          <i className="ri-arrow-right-s-line"></i>

          <span className="breadcrumb-4003__current">SANCTUM</span>

          <span className="breadcrumb-4003__gem"></span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4003-wrap">
    <nav class="breadcrumb-4003" aria-label="Breadcrumb">
        <span class="breadcrumb-4003__cluster">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>

        <a href="#">
            <i class="ri-compass-3-fill"></i>
            REALM
        </a>

        <i class="ri-arrow-right-s-line"></i>

        <a href="#">AURORA</a>

        <i class="ri-arrow-right-s-line"></i>

        <span class="breadcrumb-4003__current">SANCTUM</span>

        <span class="breadcrumb-4003__gem"></span>
    </nav>
</div>`,
    css: `.breadcrumb-4003-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:20px}.breadcrumb-4003{position:relative;display:flex;align-items:center;justify-content:center;gap:9px;padding:11px 18px 11px 48px;border:1px solid rgba(167,243,208,.26);border-radius:18px;background:linear-gradient(120deg,rgba(6,78,59,.78),rgba(30,64,175,.72) 48%,rgba(88,28,135,.8));box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 0 18px rgba(45,212,191,.12),0 0 30px rgba(129,140,248,.1);backdrop-filter:blur(14px);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4003::after{content:"";position:absolute;inset:2px;border-radius:15px;border-top:1px solid rgba(255,255,255,.14);pointer-events:none}.breadcrumb-4003 a,.breadcrumb-4003__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4003 a{display:flex;align-items:center;gap:5px;color:#99f6e4;transition:color .18s ease,text-shadow .18s ease}.breadcrumb-4003 a:hover{color:#fff;text-shadow:0 0 8px rgba(94,234,212,.8)}.breadcrumb-4003__current{color:#ddd6fe}.breadcrumb-4003>i{position:relative;z-index:3;color:#67e8f9;font-size:9px}.breadcrumb-4003__cluster{position:absolute;left:7px;bottom:5px;width:35px;height:36px}.breadcrumb-4003__cluster span{position:absolute;bottom:0;width:8px;clip-path:polygon(50% 0,100% 28%,82% 100%,18% 100%,0 28%);filter:drop-shadow(0 0 4px rgba(94,234,212,.45));transform-origin:bottom;transition:transform .2s ease}.breadcrumb-4003__cluster span:nth-child(1){left:0;height:17px;background:linear-gradient(135deg,#fff,#a7f3d0,#2dd4bf);transform:rotate(-16deg)}.breadcrumb-4003__cluster span:nth-child(2){left:8px;height:29px;background:linear-gradient(135deg,#fff,#67e8f9,#818cf8)}.breadcrumb-4003__cluster span:nth-child(3){left:17px;height:35px;background:linear-gradient(135deg,#fff,#c4b5fd,#8b5cf6)}.breadcrumb-4003__cluster span:nth-child(4){left:26px;height:21px;background:linear-gradient(135deg,#fff,#f0abfc,#c084fc);transform:rotate(15deg)}.breadcrumb-4003__gem{position:absolute;right:-8px;top:-8px;width:18px;height:22px;clip-path:polygon(50% 0,100% 28%,82% 100%,18% 100%,0 28%);background:linear-gradient(135deg,#fff,#67e8f9 30%,#818cf8 60%,#c084fc);filter:drop-shadow(0 0 5px rgba(192,132,252,.5));transform:rotate(28deg);transition:transform .2s ease}.breadcrumb-4003:hover .breadcrumb-4003__cluster span:nth-child(1){transform:translateY(-2px) rotate(-20deg) scaleY(1.08)}.breadcrumb-4003:hover .breadcrumb-4003__cluster span:nth-child(2){transform:translateY(-4px) scaleY(1.08)}.breadcrumb-4003:hover .breadcrumb-4003__cluster span:nth-child(3){transform:translateY(-5px) scaleY(1.08)}.breadcrumb-4003:hover .breadcrumb-4003__cluster span:nth-child(4){transform:translateY(-2px) rotate(20deg) scaleY(1.08)}.breadcrumb-4003:hover .breadcrumb-4003__gem{transform:translateY(-3px) rotate(38deg) scale(1.08)}`,
  },
  {
    id: 4004,
    name: "Frost Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4004-wrap">
        <nav className="breadcrumb-4004" aria-label="Breadcrumb">
          <span className="breadcrumb-4004__shard breadcrumb-4004__shard--1"></span>
          <span className="breadcrumb-4004__shard breadcrumb-4004__shard--2"></span>
          <span className="breadcrumb-4004__shard breadcrumb-4004__shard--3"></span>

          <a href="#">
            <i className="ri-snowflake-line"></i>
            FROST
          </a>

          <span className="breadcrumb-4004__diamond"></span>

          <a href="#">CAVERN</a>

          <span className="breadcrumb-4004__diamond"></span>

          <span className="breadcrumb-4004__current">HEART</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4004-wrap">
    <nav class="breadcrumb-4004" aria-label="Breadcrumb">
        <span class="breadcrumb-4004__shard breadcrumb-4004__shard--1"></span>
        <span class="breadcrumb-4004__shard breadcrumb-4004__shard--2"></span>
        <span class="breadcrumb-4004__shard breadcrumb-4004__shard--3"></span>

        <a href="#">
            <i class="ri-snowflake-line"></i>
            FROST
        </a>

        <span class="breadcrumb-4004__diamond"></span>

        <a href="#">CAVERN</a>

        <span class="breadcrumb-4004__diamond"></span>

        <span class="breadcrumb-4004__current">HEART</span>
    </nav>
</div>`,
    css: `.breadcrumb-4004-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4004{position:relative;display:flex;align-items:center;justify-content:center;gap:11px;padding:11px 17px;border:1px solid rgba(186,230,253,.4);border-radius:6px 18px 6px 18px;background:linear-gradient(135deg,rgba(8,47,73,.9),rgba(30,58,138,.72));box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 0 16px rgba(186,230,253,.18),0 8px 22px rgba(14,116,144,.18);backdrop-filter:blur(13px);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4004 a,.breadcrumb-4004__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.09em;text-decoration:none}.breadcrumb-4004 a{display:flex;align-items:center;gap:5px;color:#bae6fd;transition:color .18s ease,text-shadow .18s ease}.breadcrumb-4004 a:hover{color:#fff;text-shadow:0 0 8px rgba(186,230,253,.9)}.breadcrumb-4004__current{color:#eef2ff}.breadcrumb-4004__diamond{position:relative;z-index:3;width:8px;height:8px;background:linear-gradient(135deg,#fff,#67e8f9,#818cf8);transform:rotate(45deg);box-shadow:0 0 6px rgba(103,232,249,.65)}.breadcrumb-4004__shard{position:absolute;z-index:4;width:9px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);background:linear-gradient(135deg,#fff,#e0f2fe 20%,#7dd3fc 50%,#818cf8 80%);filter:drop-shadow(0 0 4px rgba(186,230,253,.55));transition:transform .2s ease}.breadcrumb-4004__shard--1{left:-8px;bottom:-4px;height:27px;transform:rotate(-20deg)}.breadcrumb-4004__shard--2{left:1px;bottom:-6px;height:38px}.breadcrumb-4004__shard--3{right:-7px;top:-11px;height:29px;transform:rotate(28deg)}.breadcrumb-4004:hover .breadcrumb-4004__shard--1{transform:translateY(-3px) rotate(-25deg) scaleY(1.08)}.breadcrumb-4004:hover .breadcrumb-4004__shard--2{transform:translateY(-4px) scaleY(1.07)}.breadcrumb-4004:hover .breadcrumb-4004__shard--3{transform:translateY(-3px) rotate(36deg) scaleY(1.08)}`,
  },
  {
    id: 4005,
    name: "Void Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4005-wrap">
        <nav className="breadcrumb-4005" aria-label="Breadcrumb">
          <span className="breadcrumb-4005__base"></span>

          <span className="breadcrumb-4005__crystal breadcrumb-4005__crystal--1"></span>
          <span className="breadcrumb-4005__crystal breadcrumb-4005__crystal--2"></span>

          <a href="#">
            <i className="ri-moon-clear-fill"></i>
            VOID
          </a>

          <span className="breadcrumb-4005__separator">◆</span>

          <a href="#">NEXUS</a>

          <span className="breadcrumb-4005__separator">◆</span>

          <span className="breadcrumb-4005__current">OBSIDIAN</span>

          <span className="breadcrumb-4005__crystal breadcrumb-4005__crystal--3"></span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4005-wrap">
    <nav class="breadcrumb-4005" aria-label="Breadcrumb">
        <span class="breadcrumb-4005__base"></span>

        <span class="breadcrumb-4005__crystal breadcrumb-4005__crystal--1"></span>
        <span class="breadcrumb-4005__crystal breadcrumb-4005__crystal--2"></span>

        <a href="#">
            <i class="ri-moon-clear-fill"></i>
            VOID
        </a>

        <span class="breadcrumb-4005__separator">◆</span>

        <a href="#">NEXUS</a>

        <span class="breadcrumb-4005__separator">◆</span>

        <span class="breadcrumb-4005__current">OBSIDIAN</span>

        <span class="breadcrumb-4005__crystal breadcrumb-4005__crystal--3"></span>
    </nav>
</div>`,
    css: `.breadcrumb-4005-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4005{position:relative;display:flex;align-items:center;justify-content:center;gap:9px;padding:11px 20px;border:1px solid rgba(167,139,250,.3);border-radius:16px;background:linear-gradient(135deg,rgba(2,6,23,.96),rgba(46,16,101,.88));box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 0 22px rgba(139,92,246,.16);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4005__base{position:absolute;left:15%;right:15%;bottom:-5px;height:7px;border-radius:50%;background:rgba(99,102,241,.18);box-shadow:0 0 10px rgba(139,92,246,.35),0 0 22px rgba(192,132,252,.18)}.breadcrumb-4005 a,.breadcrumb-4005__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.09em;text-decoration:none}.breadcrumb-4005 a{display:flex;align-items:center;gap:5px;color:#a78bfa;transition:color .18s ease,text-shadow .18s ease}.breadcrumb-4005 a:hover{color:#f5f3ff;text-shadow:0 0 8px rgba(192,132,252,.85)}.breadcrumb-4005__current{color:#e9d5ff}.breadcrumb-4005__separator{position:relative;z-index:3;color:#818cf8;font-size:7px;text-shadow:0 0 6px rgba(129,140,248,.8)}.breadcrumb-4005__crystal{position:absolute;z-index:4;width:10px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);background:linear-gradient(135deg,#fff,#c4b5fd 25%,#818cf8 54%,#7c3aed 78%,#c084fc);filter:drop-shadow(0 0 5px rgba(167,139,250,.5));transform-origin:bottom;transition:transform .2s ease,filter .2s ease}.breadcrumb-4005__crystal--1{left:-5px;bottom:-4px;height:24px;transform:rotate(-20deg)}.breadcrumb-4005__crystal--2{left:5px;bottom:-5px;height:37px}.breadcrumb-4005__crystal--3{right:-4px;top:-11px;height:31px;transform:rotate(27deg)}.breadcrumb-4005:hover .breadcrumb-4005__crystal--1{transform:translateY(-3px) rotate(-26deg) scaleY(1.08)}.breadcrumb-4005:hover .breadcrumb-4005__crystal--2{transform:translateY(-5px) scaleY(1.09)}.breadcrumb-4005:hover .breadcrumb-4005__crystal--3{transform:translateY(-3px) rotate(34deg) scaleY(1.08)}.breadcrumb-4005:hover .breadcrumb-4005__crystal{filter:drop-shadow(0 0 8px rgba(192,132,252,.85))}`,
  },
  {
    id: 4006,
    name: "Crystal Garden Breadcrumb",
    preview: (
      <div className="breadcrumb-4006-wrap">
        <nav className="breadcrumb-4006" aria-label="Breadcrumb">
          <span className="breadcrumb-4006__crystal-field">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <a href="#">
            <i className="ri-leaf-fill"></i>
            GARDEN
          </a>

          <i className="ri-arrow-right-s-line"></i>

          <a href="#">SHARDS</a>

          <i className="ri-arrow-right-s-line"></i>

          <span className="breadcrumb-4006__current">BLOOM</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4006-wrap">
    <nav class="breadcrumb-4006" aria-label="Breadcrumb">
        <span class="breadcrumb-4006__crystal-field">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>

        <a href="#">
            <i class="ri-leaf-fill"></i>
            GARDEN
        </a>

        <i class="ri-arrow-right-s-line"></i>

        <a href="#">SHARDS</a>

        <i class="ri-arrow-right-s-line"></i>

        <span class="breadcrumb-4006__current">BLOOM</span>
    </nav>
</div>`,
    css: `.breadcrumb-4006-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:24px}.breadcrumb-4006{position:relative;display:flex;align-items:center;justify-content:center;gap:9px;padding:11px 18px 11px 58px;border:1px solid rgba(110,231,183,.28);border-radius:15px;background:linear-gradient(135deg,rgba(6,78,59,.92),rgba(15,118,110,.64) 45%,rgba(49,46,129,.78));box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 0 20px rgba(45,212,191,.15),0 8px 22px rgba(15,23,42,.22);backdrop-filter:blur(14px);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4006::before{content:"";position:absolute;left:9px;width:43px;height:6px;bottom:6px;border-radius:50%;background:rgba(16,185,129,.2);box-shadow:0 0 8px rgba(94,234,212,.3),0 0 16px rgba(129,140,248,.14)}.breadcrumb-4006 a,.breadcrumb-4006__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4006 a{display:flex;align-items:center;gap:5px;color:#6ee7b7;transition:color .18s ease,text-shadow .18s ease}.breadcrumb-4006 a:hover{color:#fff;text-shadow:0 0 8px rgba(110,231,183,.8)}.breadcrumb-4006__current{color:#ddd6fe}.breadcrumb-4006>i{position:relative;z-index:3;color:#67e8f9;font-size:9px}.breadcrumb-4006__crystal-field{position:absolute;left:7px;bottom:8px;width:45px;height:39px}.breadcrumb-4006__crystal-field span{position:absolute;bottom:0;width:8px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);filter:drop-shadow(0 0 4px rgba(110,231,183,.45));transform-origin:bottom;transition:transform .2s ease}.breadcrumb-4006__crystal-field span:nth-child(1){left:0;height:15px;background:linear-gradient(135deg,#fff,#a7f3d0,#34d399);transform:rotate(-20deg)}.breadcrumb-4006__crystal-field span:nth-child(2){left:8px;height:26px;background:linear-gradient(135deg,#fff,#99f6e4,#2dd4bf);transform:rotate(-8deg)}.breadcrumb-4006__crystal-field span:nth-child(3){left:17px;width:9px;height:37px;background:linear-gradient(135deg,#fff,#67e8f9,#818cf8)}.breadcrumb-4006__crystal-field span:nth-child(4){left:27px;height:28px;background:linear-gradient(135deg,#fff,#c4b5fd,#8b5cf6);transform:rotate(9deg)}.breadcrumb-4006__crystal-field span:nth-child(5){left:36px;height:17px;background:linear-gradient(135deg,#fff,#f0abfc,#c084fc);transform:rotate(20deg)}.breadcrumb-4006:hover .breadcrumb-4006__crystal-field span:nth-child(1){transform:translateY(-2px) rotate(-25deg) scaleY(1.08)}.breadcrumb-4006:hover .breadcrumb-4006__crystal-field span:nth-child(2){transform:translateY(-3px) rotate(-10deg) scaleY(1.08)}.breadcrumb-4006:hover .breadcrumb-4006__crystal-field span:nth-child(3){transform:translateY(-5px) scaleY(1.08)}.breadcrumb-4006:hover .breadcrumb-4006__crystal-field span:nth-child(4){transform:translateY(-3px) rotate(12deg) scaleY(1.08)}.breadcrumb-4006:hover .breadcrumb-4006__crystal-field span:nth-child(5){transform:translateY(-2px) rotate(25deg) scaleY(1.08)}`,
  },
  {
    id: 4007,
    name: "Fire Ember Breadcrumb",
    preview: (
      <div className="breadcrumb-4007-wrap">
        <nav className="breadcrumb-4007" aria-label="Breadcrumb">
          <span className="breadcrumb-4007__flames">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <a href="#">
            <i className="ri-fire-fill"></i> EMBER
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">TRAIL</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4007__current">CORE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4007-wrap">
    <nav class="breadcrumb-4007" aria-label="Breadcrumb">
        <span class="breadcrumb-4007__flames">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <a href="#"><i class="ri-fire-fill"></i> EMBER</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">TRAIL</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4007__current">CORE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4007-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4007{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 50px;border:1px solid rgba(251,146,60,.32);border-radius:14px;background:linear-gradient(135deg,rgba(69,10,10,.96),rgba(120,53,15,.88));box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 18px rgba(249,115,22,.18),0 8px 24px rgba(0,0,0,.3);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4007 a,.breadcrumb-4007__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4007 a{display:flex;align-items:center;gap:5px;color:#fdba74}.breadcrumb-4007 a:hover{color:#fff}.breadcrumb-4007__current{color:#fff7ed}.breadcrumb-4007>i{color:#fb923c;font-size:9px}.breadcrumb-4007__flames{position:absolute;left:10px;bottom:7px;width:30px;height:28px}.breadcrumb-4007__flames span{position:absolute;bottom:0;border-radius:999px 999px 999px 999px/80% 80% 35% 35%;background:linear-gradient(180deg,#fde68a,#fb923c 48%,#dc2626);filter:drop-shadow(0 0 5px rgba(251,146,60,.6));transform-origin:bottom}.breadcrumb-4007__flames span:nth-child(1){left:0;width:10px;height:18px;transform:rotate(-10deg)}.breadcrumb-4007__flames span:nth-child(2){left:9px;width:12px;height:26px}.breadcrumb-4007__flames span:nth-child(3){left:19px;width:9px;height:16px;transform:rotate(12deg)}`,
  },
  {
    id: 4008,
    name: "Ice Crystal Breadcrumb",
    preview: (
      <div className="breadcrumb-4008-wrap">
        <nav className="breadcrumb-4008" aria-label="Breadcrumb">
          <span className="breadcrumb-4008__shards">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <a href="#">
            <i className="ri-snowflake-fill"></i> FROST
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">RIDGE</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4008__current">PEAK</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4008-wrap">
    <nav class="breadcrumb-4008" aria-label="Breadcrumb">
        <span class="breadcrumb-4008__shards">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <a href="#"><i class="ri-snowflake-fill"></i> FROST</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">RIDGE</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4008__current">PEAK</span>
    </nav>
</div>`,
    css: `.breadcrumb-4008-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4008{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 52px;border:1px solid rgba(125,211,252,.35);border-radius:14px;background:linear-gradient(135deg,rgba(8,47,73,.95),rgba(30,64,175,.82));box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 18px rgba(125,211,252,.18),0 8px 24px rgba(0,0,0,.28);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4008 a,.breadcrumb-4008__current{position:relative;z-index:3;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4008 a{display:flex;align-items:center;gap:5px;color:#7dd3fc}.breadcrumb-4008 a:hover{color:#fff}.breadcrumb-4008__current{color:#e0f2fe}.breadcrumb-4008>i{color:#38bdf8;font-size:9px}.breadcrumb-4008__shards{position:absolute;left:10px;bottom:6px;width:32px;height:29px}.breadcrumb-4008__shards span{position:absolute;bottom:0;width:8px;clip-path:polygon(50% 0,100% 30%,82% 100%,18% 100%,0 30%);background:linear-gradient(135deg,#fff,#bae6fd 28%,#67e8f9 58%,#818cf8);filter:drop-shadow(0 0 5px rgba(125,211,252,.65))}.breadcrumb-4008__shards span:nth-child(1){left:0;height:16px;transform:rotate(-14deg)}.breadcrumb-4008__shards span:nth-child(2){left:9px;height:28px}.breadcrumb-4008__shards span:nth-child(3){left:20px;height:19px;transform:rotate(16deg)}`,
  },
  {
    id: 4009,
    name: "Molten Route Breadcrumb",
    preview: (
      <div className="breadcrumb-4009-wrap">
        <nav className="breadcrumb-4009" aria-label="Breadcrumb">
          <span className="breadcrumb-4009__lava"></span>
          <a href="#">
            <i className="ri-flashlight-fill"></i> LAVA
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">CHAMBER</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4009__current">FORGE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4009-wrap">
    <nav class="breadcrumb-4009" aria-label="Breadcrumb">
        <span class="breadcrumb-4009__lava"></span>
        <a href="#"><i class="ri-flashlight-fill"></i> LAVA</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">CHAMBER</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4009__current">FORGE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4009-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4009{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(249,115,22,.32);border-radius:999px;background:linear-gradient(135deg,#3f0d0d,#7c2d12);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 18px rgba(249,115,22,.18);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.breadcrumb-4009 a,.breadcrumb-4009__current{position:relative;z-index:2;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4009 a{display:flex;align-items:center;gap:5px;color:#fdba74}.breadcrumb-4009 a:hover{color:#fff}.breadcrumb-4009__current{color:#ffedd5}.breadcrumb-4009>i{position:relative;z-index:2;color:#fb923c;font-size:9px}.breadcrumb-4009__lava{position:absolute;inset:0;background:radial-gradient(circle at 18% 25%,rgba(251,191,36,.22),transparent 20%),radial-gradient(circle at 52% 70%,rgba(249,115,22,.22),transparent 26%),radial-gradient(circle at 85% 30%,rgba(220,38,38,.22),transparent 20%)}`,
  },
  {
    id: 4010,
    name: "Glacier Path Breadcrumb",
    preview: (
      <div className="breadcrumb-4010-wrap">
        <nav className="breadcrumb-4010" aria-label="Breadcrumb">
          <span className="breadcrumb-4010__icebar"></span>
          <a href="#">
            <i className="ri-drop-fill"></i> GLACIER
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">FLOW</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4010__current">VAULT</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4010-wrap">
    <nav class="breadcrumb-4010" aria-label="Breadcrumb">
        <span class="breadcrumb-4010__icebar"></span>
        <a href="#"><i class="ri-drop-fill"></i> GLACIER</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">FLOW</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4010__current">VAULT</span>
    </nav>
</div>`,
    css: `.breadcrumb-4010-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4010{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(125,211,252,.34);border-radius:999px;background:linear-gradient(135deg,#0c4a6e,#1d4ed8);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 0 18px rgba(56,189,248,.18);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.breadcrumb-4010 a,.breadcrumb-4010__current{position:relative;z-index:2;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4010 a{display:flex;align-items:center;gap:5px;color:#bae6fd}.breadcrumb-4010 a:hover{color:#fff}.breadcrumb-4010__current{color:#eff6ff}.breadcrumb-4010>i{position:relative;z-index:2;color:#7dd3fc;font-size:9px}.breadcrumb-4010__icebar{position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transform:skewX(-20deg)}`,
  },
  {
    id: 4011,
    name: "Fire Crown Breadcrumb",
    preview: (
      <div className="breadcrumb-4011-wrap">
        <nav className="breadcrumb-4011" aria-label="Breadcrumb">
          <span className="breadcrumb-4011__crown">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <a href="#">
            <i className="ri-sparkling-fill"></i> BLAZE
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">KINGDOM</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4011__current">THRONE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4011-wrap">
    <nav class="breadcrumb-4011" aria-label="Breadcrumb">
        <span class="breadcrumb-4011__crown">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <a href="#"><i class="ri-sparkling-fill"></i> BLAZE</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">KINGDOM</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4011__current">THRONE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4011-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4011{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:13px 18px 12px;border:1px solid rgba(251,146,60,.34);border-radius:16px;background:linear-gradient(135deg,#431407,#9a3412);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 20px rgba(251,146,60,.18);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4011 a,.breadcrumb-4011__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4011 a{display:flex;align-items:center;gap:5px;color:#fdba74}.breadcrumb-4011 a:hover{color:#fff}.breadcrumb-4011__current{color:#fff7ed}.breadcrumb-4011>i{color:#fb923c;font-size:9px}.breadcrumb-4011__crown{position:absolute;top:-12px;left:50%;transform:translateX(-50%);display:flex;gap:3px}.breadcrumb-4011__crown span{display:block;width:10px;clip-path:polygon(50% 0,100% 100%,0 100%);background:linear-gradient(180deg,#fde68a,#f97316);filter:drop-shadow(0 0 4px rgba(251,146,60,.6))}.breadcrumb-4011__crown span:nth-child(1){height:12px}.breadcrumb-4011__crown span:nth-child(2){height:16px}.breadcrumb-4011__crown span:nth-child(3){height:12px}`,
  },
  {
    id: 4012,
    name: "Frozen Prism Breadcrumb",
    preview: (
      <div className="breadcrumb-4012-wrap">
        <nav className="breadcrumb-4012" aria-label="Breadcrumb">
          <span className="breadcrumb-4012__prism"></span>
          <a href="#">
            <i className="ri-star-smile-fill"></i> SNOW
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">PRISM</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4012__current">LIGHT</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4012-wrap">
    <nav class="breadcrumb-4012" aria-label="Breadcrumb">
        <span class="breadcrumb-4012__prism"></span>
        <a href="#"><i class="ri-star-smile-fill"></i> SNOW</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">PRISM</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4012__current">LIGHT</span>
    </nav>
</div>`,
    css: `.breadcrumb-4012-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4012{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 42px;border:1px solid rgba(186,230,253,.36);border-radius:14px;background:linear-gradient(135deg,#082f49,#1e40af);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 0 18px rgba(125,211,252,.16);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4012 a,.breadcrumb-4012__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4012 a{display:flex;align-items:center;gap:5px;color:#bae6fd}.breadcrumb-4012 a:hover{color:#fff}.breadcrumb-4012__current{color:#eff6ff}.breadcrumb-4012>i{color:#38bdf8;font-size:9px}.breadcrumb-4012__prism{position:absolute;left:14px;top:50%;width:14px;height:18px;transform:translateY(-50%);clip-path:polygon(50% 0,100% 35%,78% 100%,22% 100%,0 35%);background:linear-gradient(135deg,#fff,#e0f2fe 20%,#67e8f9 58%,#818cf8);filter:drop-shadow(0 0 5px rgba(125,211,252,.7))}`,
  },
  {
    id: 4013,
    name: "Frostfire Breadcrumb",
    preview: (
      <div className="breadcrumb-4013-wrap">
        <nav className="breadcrumb-4013" aria-label="Breadcrumb">
          <span className="breadcrumb-4013__left"></span>
          <span className="breadcrumb-4013__right"></span>
          <a href="#">
            <i className="ri-fire-fill"></i> FROST
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">FIRE</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4013__current">DUAL</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4013-wrap">
    <nav class="breadcrumb-4013" aria-label="Breadcrumb">
        <span class="breadcrumb-4013__left"></span>
        <span class="breadcrumb-4013__right"></span>
        <a href="#"><i class="ri-fire-fill"></i> FROST</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">FIRE</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4013__current">DUAL</span>
    </nav>
</div>`,
    css: `.breadcrumb-4013-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4013{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(255,255,255,.16);border-radius:16px;background:linear-gradient(90deg,#0c4a6e 0%,#172554 35%,#7c2d12 65%,#431407 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 18px rgba(99,102,241,.12),0 0 20px rgba(249,115,22,.14);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.breadcrumb-4013 a,.breadcrumb-4013__current{position:relative;z-index:2;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4013 a{display:flex;align-items:center;gap:5px;color:#fff}.breadcrumb-4013__current{color:#fff7ed}.breadcrumb-4013>i{position:relative;z-index:2;color:#cbd5e1;font-size:9px}.breadcrumb-4013__left,.breadcrumb-4013__right{position:absolute;top:0;bottom:0;width:42px;filter:blur(10px);opacity:.6}.breadcrumb-4013__left{left:-10px;background:#67e8f9}.breadcrumb-4013__right{right:-10px;background:#fb923c}`,
  },
  {
    id: 4014,
    name: "Steam Rift Breadcrumb",
    preview: (
      <div className="breadcrumb-4014-wrap">
        <nav className="breadcrumb-4014" aria-label="Breadcrumb">
          <span className="breadcrumb-4014__steam"></span>
          <a href="#">
            <i className="ri-temp-cold-fill"></i> STEAM
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">RIFT</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4014__current">BRIDGE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4014-wrap">
    <nav class="breadcrumb-4014" aria-label="Breadcrumb">
        <span class="breadcrumb-4014__steam"></span>
        <a href="#"><i class="ri-temp-cold-fill"></i> STEAM</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">RIFT</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4014__current">BRIDGE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4014-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4014{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(203,213,225,.2);border-radius:999px;background:linear-gradient(135deg,#1e293b,#334155);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 8px 24px rgba(0,0,0,.32);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.breadcrumb-4014 a,.breadcrumb-4014__current{position:relative;z-index:2;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4014 a{display:flex;align-items:center;gap:5px;color:#e2e8f0}.breadcrumb-4014 a:hover{color:#fff}.breadcrumb-4014__current{color:#fff}.breadcrumb-4014>i{position:relative;z-index:2;color:#cbd5e1;font-size:9px}.breadcrumb-4014__steam{position:absolute;inset:0;background:radial-gradient(circle at 22% 50%,rgba(103,232,249,.18),transparent 22%),radial-gradient(circle at 70% 42%,rgba(251,146,60,.18),transparent 24%),radial-gradient(circle at 48% 65%,rgba(255,255,255,.08),transparent 22%)}`,
  },
  {
    id: 4015,
    name: "Ash Path Breadcrumb",
    preview: (
      <div className="breadcrumb-4015-wrap">
        <nav className="breadcrumb-4015" aria-label="Breadcrumb">
          <span className="breadcrumb-4015__embers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <a href="#">
            <i className="ri-blaze-fill"></i> ASH
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">WASTE</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4015__current">FIELD</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4015-wrap">
    <nav class="breadcrumb-4015" aria-label="Breadcrumb">
        <span class="breadcrumb-4015__embers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
        <a href="#"><i class="ri-blaze-fill"></i> ASH</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">WASTE</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4015__current">FIELD</span>
    </nav>
</div>`,
    css: `.breadcrumb-4015-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4015{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(168,162,158,.3);border-radius:12px;background:linear-gradient(135deg,#292524,#7c2d12);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 0 18px rgba(249,115,22,.12);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4015 a,.breadcrumb-4015__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4015 a{display:flex;align-items:center;gap:5px;color:#fdba74}.breadcrumb-4015 a:hover{color:#fff}.breadcrumb-4015__current{color:#fafaf9}.breadcrumb-4015>i{color:#fb923c;font-size:9px}.breadcrumb-4015__embers{position:absolute;right:10px;top:6px;display:flex;gap:4px}.breadcrumb-4015__embers span{display:block;width:4px;height:4px;border-radius:50%;background:#fb923c;box-shadow:0 0 6px #fb923c}.breadcrumb-4015__embers span:nth-child(2){background:#facc15;box-shadow:0 0 6px #facc15}.breadcrumb-4015__embers span:nth-child(3){background:#f97316}.breadcrumb-4015__embers span:nth-child(4){background:#fde68a}`,
  },
  {
    id: 4016,
    name: "Snow Beam Breadcrumb",
    preview: (
      <div className="breadcrumb-4016-wrap">
        <nav className="breadcrumb-4016" aria-label="Breadcrumb">
          <span className="breadcrumb-4016__beam"></span>
          <a href="#">
            <i className="ri-sparkling-2-fill"></i> SNOW
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">BEAM</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4016__current">FIELD</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4016-wrap">
    <nav class="breadcrumb-4016" aria-label="Breadcrumb">
        <span class="breadcrumb-4016__beam"></span>
        <a href="#"><i class="ri-sparkling-2-fill"></i> SNOW</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">BEAM</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4016__current">FIELD</span>
    </nav>
</div>`,
    css: `.breadcrumb-4016-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4016{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid rgba(186,230,253,.34);border-radius:12px;background:linear-gradient(135deg,#0f172a,#0c4a6e);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 18px rgba(125,211,252,.15);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.breadcrumb-4016 a,.breadcrumb-4016__current{position:relative;z-index:2;font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4016 a{display:flex;align-items:center;gap:5px;color:#bae6fd}.breadcrumb-4016 a:hover{color:#fff}.breadcrumb-4016__current{color:#f0f9ff}.breadcrumb-4016>i{position:relative;z-index:2;color:#7dd3fc;font-size:9px}.breadcrumb-4016__beam{position:absolute;inset:-40% auto -40% -20px;width:24px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.16),transparent);transform:rotate(25deg)}`,
  },
  {
    id: 4017,
    name: "Inferno Gate Breadcrumb",
    preview: (
      <div className="breadcrumb-4017-wrap">
        <nav className="breadcrumb-4017" aria-label="Breadcrumb">
          <span className="breadcrumb-4017__gate"></span>
          <a href="#">
            <i className="ri-fire-fill"></i> INFERNO
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">GATE</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4017__current">LOCK</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4017-wrap">
    <nav class="breadcrumb-4017" aria-label="Breadcrumb">
        <span class="breadcrumb-4017__gate"></span>
        <a href="#"><i class="ri-fire-fill"></i> INFERNO</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">GATE</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4017__current">LOCK</span>
    </nav>
</div>`,
    css: `.breadcrumb-4017-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4017{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 44px;border:1px solid rgba(249,115,22,.32);border-radius:14px;background:linear-gradient(135deg,#450a0a,#7c2d12);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 0 20px rgba(249,115,22,.15);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4017 a,.breadcrumb-4017__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4017 a{display:flex;align-items:center;gap:5px;color:#fdba74}.breadcrumb-4017 a:hover{color:#fff}.breadcrumb-4017__current{color:#fff7ed}.breadcrumb-4017>i{color:#fb923c;font-size:9px}.breadcrumb-4017__gate{position:absolute;left:12px;top:50%;width:18px;height:20px;transform:translateY(-50%);border:2px solid #fb923c;border-radius:10px 10px 4px 4px;box-shadow:0 0 8px rgba(251,146,60,.45)}`,
  },
  {
    id: 4018,
    name: "Icicle Depth Breadcrumb",
    preview: (
      <div className="breadcrumb-4018-wrap">
        <nav className="breadcrumb-4018" aria-label="Breadcrumb">
          <span className="breadcrumb-4018__icicles">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <a href="#">
            <i className="ri-cloudy-fill"></i> ICE
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">DEPTH</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4018__current">CAVE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4018-wrap">
    <nav class="breadcrumb-4018" aria-label="Breadcrumb">
        <span class="breadcrumb-4018__icicles">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <a href="#"><i class="ri-cloudy-fill"></i> ICE</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">DEPTH</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4018__current">CAVE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4018-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4018{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 18px 12px;border:1px solid rgba(125,211,252,.34);border-radius:14px;background:linear-gradient(135deg,#082f49,#1e3a8a);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 20px rgba(56,189,248,.14);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4018 a,.breadcrumb-4018__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4018 a{display:flex;align-items:center;gap:5px;color:#bae6fd}.breadcrumb-4018 a:hover{color:#fff}.breadcrumb-4018__current{color:#eff6ff}.breadcrumb-4018>i{color:#7dd3fc;font-size:9px}.breadcrumb-4018__icicles{position:absolute;left:14px;right:14px;top:-1px;height:10px;pointer-events:none}.breadcrumb-4018__icicles span{position:absolute;top:0;width:8px;clip-path:polygon(0 0,100% 0,50% 100%);background:linear-gradient(180deg,#fff,#67e8f9)}.breadcrumb-4018__icicles span:nth-child(1){left:20%}.breadcrumb-4018__icicles span:nth-child(2){left:48%;height:12px}.breadcrumb-4018__icicles span:nth-child(3){left:74%}`,
  },
  {
    id: 4019,
    name: "Blaze Ring Breadcrumb",
    preview: (
      <div className="breadcrumb-4019-wrap">
        <nav className="breadcrumb-4019" aria-label="Breadcrumb">
          <span className="breadcrumb-4019__ring"></span>
          <a href="#">
            <i className="ri-sun-fill"></i> RING
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">SCORCH</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4019__current">SUN</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4019-wrap">
    <nav class="breadcrumb-4019" aria-label="Breadcrumb">
        <span class="breadcrumb-4019__ring"></span>
        <a href="#"><i class="ri-sun-fill"></i> RING</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">SCORCH</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4019__current">SUN</span>
    </nav>
</div>`,
    css: `.breadcrumb-4019-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4019{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 42px;border:1px solid rgba(251,146,60,.32);border-radius:999px;background:linear-gradient(135deg,#431407,#9a3412);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 18px rgba(249,115,22,.16);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4019 a,.breadcrumb-4019__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4019 a{display:flex;align-items:center;gap:5px;color:#fed7aa}.breadcrumb-4019 a:hover{color:#fff}.breadcrumb-4019__current{color:#fff7ed}.breadcrumb-4019>i{color:#fb923c;font-size:9px}.breadcrumb-4019__ring{position:absolute;left:12px;top:50%;width:16px;height:16px;transform:translateY(-50%);border:3px solid #fb923c;border-radius:50%;box-shadow:0 0 8px rgba(251,146,60,.5),inset 0 0 6px rgba(251,191,36,.35)}`,
  },
  {
    id: 4020,
    name: "Polar Lens Breadcrumb",
    preview: (
      <div className="breadcrumb-4020-wrap">
        <nav className="breadcrumb-4020" aria-label="Breadcrumb">
          <span className="breadcrumb-4020__lens"></span>
          <a href="#">
            <i className="ri-focus-3-fill"></i> POLAR
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">LENS</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4020__current">VIEW</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4020-wrap">
    <nav class="breadcrumb-4020" aria-label="Breadcrumb">
        <span class="breadcrumb-4020__lens"></span>
        <a href="#"><i class="ri-focus-3-fill"></i> POLAR</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">LENS</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4020__current">VIEW</span>
    </nav>
</div>`,
    css: `.breadcrumb-4020-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4020{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 44px;border:1px solid rgba(186,230,253,.34);border-radius:999px;background:linear-gradient(135deg,#0f172a,#0369a1);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 0 18px rgba(125,211,252,.16);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4020 a,.breadcrumb-4020__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4020 a{display:flex;align-items:center;gap:5px;color:#bae6fd}.breadcrumb-4020 a:hover{color:#fff}.breadcrumb-4020__current{color:#f0f9ff}.breadcrumb-4020>i{color:#7dd3fc;font-size:9px}.breadcrumb-4020__lens{position:absolute;left:12px;top:50%;width:18px;height:18px;transform:translateY(-50%);border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,rgba(255,255,255,.35) 18%,#67e8f9 45%,#1d4ed8 75%);box-shadow:0 0 8px rgba(125,211,252,.55)}`,
  },
  {
    id: 4021,
    name: "Eclipse Fire-Ice Breadcrumb",
    preview: (
      <div className="breadcrumb-4021-wrap">
        <nav className="breadcrumb-4021" aria-label="Breadcrumb">
          <span className="breadcrumb-4021__core"></span>
          <a href="#">
            <i className="ri-planet-fill"></i> ECLIPSE
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#">SHIFT</a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="breadcrumb-4021__current">BALANCE</span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4021-wrap">
    <nav class="breadcrumb-4021" aria-label="Breadcrumb">
        <span class="breadcrumb-4021__core"></span>
        <a href="#"><i class="ri-planet-fill"></i> ECLIPSE</a>
        <i class="ri-arrow-right-s-line"></i>
        <a href="#">SHIFT</a>
        <i class="ri-arrow-right-s-line"></i>
        <span class="breadcrumb-4021__current">BALANCE</span>
    </nav>
</div>`,
    css: `.breadcrumb-4021-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:22px}.breadcrumb-4021{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px 12px 44px;border:1px solid rgba(255,255,255,.16);border-radius:14px;background:linear-gradient(90deg,#0c4a6e 0%,#111827 45%,#7c2d12 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 0 18px rgba(99,102,241,.1),0 0 18px rgba(249,115,22,.12);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4021 a,.breadcrumb-4021__current{font-size:8px;font-weight:900;letter-spacing:.08em;text-decoration:none}.breadcrumb-4021 a{display:flex;align-items:center;gap:5px;color:#e5e7eb}.breadcrumb-4021 a:hover{color:#fff}.breadcrumb-4021__current{color:#fff}.breadcrumb-4021>i{color:#cbd5e1;font-size:9px}.breadcrumb-4021__core{position:absolute;left:12px;top:50%;width:18px;height:18px;transform:translateY(-50%);border-radius:50%;background:linear-gradient(90deg,#67e8f9 0 48%,#fb923c 52% 100%);box-shadow:0 0 8px rgba(255,255,255,.14),0 0 8px rgba(125,211,252,.35),0 0 8px rgba(251,146,60,.35)}`,
  },
];
