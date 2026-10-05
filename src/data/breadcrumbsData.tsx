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
  {
    id: 4022,
    name: "Element Light Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4022-wrap">
        <nav className="breadcrumb-4022" aria-label="Breadcrumb">
          <span className="breadcrumb-4022__shine"></span>

          <a href="#" className="breadcrumb-4022__item">
            <span className="breadcrumb-4022__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4022__label">HOME</span>
          </a>

          <span className="breadcrumb-4022__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4022__item">
            <span className="breadcrumb-4022__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4022__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4022__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4022__item">
            <span className="breadcrumb-4022__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4022__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4022__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4022__item breadcrumb-4022__item--current">
            <span className="breadcrumb-4022__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4022__label">BREADCRUMBS</span>
            <span className="breadcrumb-4022__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4022-wrap">
    <nav class="breadcrumb-4022" aria-label="Breadcrumb">
        <span class="breadcrumb-4022__shine"></span>

        <a href="#" class="breadcrumb-4022__item">
            <span class="breadcrumb-4022__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4022__label">HOME</span>
        </a>

        <span class="breadcrumb-4022__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4022__item">
            <span class="breadcrumb-4022__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4022__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4022__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4022__item">
            <span class="breadcrumb-4022__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4022__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4022__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4022__item breadcrumb-4022__item--current">
            <span class="breadcrumb-4022__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4022__label">BREADCRUMBS</span>
            <span class="breadcrumb-4022__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4022-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4022{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid #f0df9a;border-radius:16px;background:linear-gradient(135deg,#fff 0%,#fffdf4 48%,#fff8cf 100%);box-shadow:0 10px 30px rgba(161,98,7,.09),inset 0 1px 0 #fff;font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4022::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#facc15,transparent);opacity:.45}
.breadcrumb-4022__shine{position:absolute;top:-40%;bottom:-40%;left:-50px;width:34px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent);transform:rotate(22deg);animation:breadcrumb4022Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4022__item{position:relative;z-index:2;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#78716c;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4022__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#eab308,#fde047);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4022__icon{width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid #f0df9a;border-radius:8px;background:#fffdf4;color:#ca8a04;box-shadow:0 3px 8px rgba(161,98,7,.06);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,box-shadow .22s ease}
.breadcrumb-4022__label{font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4022__separator{position:relative;z-index:2;width:18px;height:26px;display:grid;place-items:center;color:#d6a90d;font-size:15px;animation:breadcrumb4022Arrow 2.4s ease-in-out infinite}
.breadcrumb-4022__separator:nth-of-type(4){animation-delay:.18s}
.breadcrumb-4022__separator:nth-of-type(6){animation-delay:.36s}
.breadcrumb-4022__item[href]:hover{color:#422006;border-color:#f2d86b;background:linear-gradient(135deg,#fff,#fef9c3);box-shadow:0 6px 16px rgba(202,138,4,.11);transform:translateY(-3px)}
.breadcrumb-4022__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4022__item[href]:hover .breadcrumb-4022__icon{background:#facc15;color:#422006;box-shadow:0 5px 12px rgba(202,138,4,.18);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4022__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4022__item--current{padding-right:26px;border-color:#efd66e;background:linear-gradient(135deg,#fefce8,#fef3c7);color:#713f12;box-shadow:0 4px 12px rgba(202,138,4,.08)}
.breadcrumb-4022__item--current::after{transform:scaleX(1)}
.breadcrumb-4022__item--current .breadcrumb-4022__icon{border-color:#eab308;background:#facc15;color:#422006;animation:breadcrumb4022CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4022__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #fff;border-radius:50%;background:#eab308;box-shadow:0 0 0 2px #fde68a,0 0 8px rgba(234,179,8,.35);transform:translateY(-50%);animation:breadcrumb4022Dot 1.9s ease-in-out infinite}
.breadcrumb-4022:hover .breadcrumb-4022__separator{color:#ca8a04}
@keyframes breadcrumb4022Shine{0%,68%{left:-50px;opacity:0}72%{opacity:.9}88%{left:calc(100% + 50px);opacity:.9}100%{left:calc(100% + 50px);opacity:0}}
@keyframes breadcrumb4022Arrow{0%,100%{transform:translateX(0);opacity:.55}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4022CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 8px rgba(202,138,4,.12)}50%{transform:rotate(4deg) scale(1.05);box-shadow:0 5px 14px rgba(202,138,4,.24)}}
@keyframes breadcrumb4022Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.65}50%{transform:translateY(-50%) scale(1.15);opacity:1}}
@media(max-width:620px){.breadcrumb-4022{gap:3px;padding:8px}.breadcrumb-4022__item{padding:7px}.breadcrumb-4022__item--current{padding-right:22px}.breadcrumb-4022__label{font-size:6px}.breadcrumb-4022__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4022__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4023,
    name: "Element Dark Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4023-wrap">
        <nav className="breadcrumb-4023" aria-label="Breadcrumb">
          <span className="breadcrumb-4023__shine"></span>
          <span className="breadcrumb-4023__ambient breadcrumb-4023__ambient--left"></span>
          <span className="breadcrumb-4023__ambient breadcrumb-4023__ambient--right"></span>

          <a href="#" className="breadcrumb-4023__item">
            <span className="breadcrumb-4023__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4023__label">HOME</span>
          </a>

          <span className="breadcrumb-4023__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4023__item">
            <span className="breadcrumb-4023__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4023__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4023__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4023__item">
            <span className="breadcrumb-4023__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4023__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4023__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4023__item breadcrumb-4023__item--current">
            <span className="breadcrumb-4023__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4023__label">BREADCRUMBS</span>
            <span className="breadcrumb-4023__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4023-wrap">
    <nav class="breadcrumb-4023" aria-label="Breadcrumb">
        <span class="breadcrumb-4023__shine"></span>
        <span class="breadcrumb-4023__ambient breadcrumb-4023__ambient--left"></span>
        <span class="breadcrumb-4023__ambient breadcrumb-4023__ambient--right"></span>

        <a href="#" class="breadcrumb-4023__item">
            <span class="breadcrumb-4023__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4023__label">HOME</span>
        </a>

        <span class="breadcrumb-4023__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4023__item">
            <span class="breadcrumb-4023__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4023__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4023__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4023__item">
            <span class="breadcrumb-4023__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4023__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4023__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4023__item breadcrumb-4023__item--current">
            <span class="breadcrumb-4023__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4023__label">BREADCRUMBS</span>
            <span class="breadcrumb-4023__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4023-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4023{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(250,204,21,.2);border-radius:16px;background:linear-gradient(135deg,#09090b 0%,#111827 48%,#1c1917 100%);box-shadow:0 14px 35px rgba(0,0,0,.38),0 0 24px rgba(202,138,4,.06),inset 0 1px 0 rgba(255,255,255,.05);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4023::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#facc15,transparent);opacity:.28}
.breadcrumb-4023::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(250,204,21,.09) 1px,transparent 1.4px);background-size:12px 12px;mask-image:linear-gradient(90deg,transparent,#000 25%,#000 75%,transparent);pointer-events:none}
.breadcrumb-4023__shine{position:absolute;z-index:1;top:-50%;bottom:-50%;left:-55px;width:36px;background:linear-gradient(90deg,transparent,rgba(254,240,138,.18),rgba(255,255,255,.3),rgba(254,240,138,.18),transparent);transform:rotate(22deg);animation:breadcrumb4023Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4023__ambient{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
.breadcrumb-4023__ambient--left{left:-28px;top:-28px;width:85px;height:85px;background:rgba(234,179,8,.08)}
.breadcrumb-4023__ambient--right{right:-32px;bottom:-34px;width:95px;height:95px;background:rgba(250,204,21,.07)}
.breadcrumb-4023__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a8a29e;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4023__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(250,204,21,.08),rgba(255,255,255,.02));opacity:0;transition:opacity .22s ease}
.breadcrumb-4023__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#ca8a04,#fde047,#fff7ae);box-shadow:0 0 8px rgba(250,204,21,.28);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4023__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(250,204,21,.2);border-radius:8px;background:#18181b;color:#d6a90d;box-shadow:inset 0 1px 0 rgba(255,255,255,.04);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4023__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4023__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#725e19;font-size:15px;animation:breadcrumb4023Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4023__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4023__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4023__item[href]:hover{border-color:rgba(250,204,21,.32);background:#1c1917;color:#fef3c7;box-shadow:0 8px 20px rgba(0,0,0,.28),0 0 14px rgba(234,179,8,.07);transform:translateY(-3px)}
.breadcrumb-4023__item[href]:hover::before{opacity:1}
.breadcrumb-4023__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4023__item[href]:hover .breadcrumb-4023__icon{border-color:#ca8a04;background:linear-gradient(145deg,#facc15,#eab308);color:#271900;box-shadow:0 5px 14px rgba(234,179,8,.18),0 0 12px rgba(250,204,21,.14);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4023__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4023__item--current{padding-right:26px;border-color:rgba(250,204,21,.3);background:linear-gradient(135deg,rgba(113,63,18,.34),rgba(39,39,42,.72));color:#fef3c7;box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 5px 14px rgba(0,0,0,.2)}
.breadcrumb-4023__item--current::before{opacity:1}
.breadcrumb-4023__item--current::after{transform:scaleX(1)}
.breadcrumb-4023__item--current .breadcrumb-4023__icon{border-color:#ca8a04;background:linear-gradient(145deg,#facc15,#eab308);color:#271900;animation:breadcrumb4023CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4023__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #27272a;border-radius:50%;background:#fde047;box-shadow:0 0 0 2px rgba(202,138,4,.55),0 0 9px rgba(250,204,21,.55);transform:translateY(-50%);animation:breadcrumb4023Dot 1.9s ease-in-out infinite}
.breadcrumb-4023:hover .breadcrumb-4023__separator{color:#eab308;text-shadow:0 0 7px rgba(234,179,8,.32)}
@keyframes breadcrumb4023Shine{0%,68%{left:-55px;opacity:0}72%{opacity:.8}88%{left:calc(100% + 55px);opacity:.8}100%{left:calc(100% + 55px);opacity:0}}
@keyframes breadcrumb4023Arrow{0%,100%{transform:translateX(0);opacity:.45}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4023CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 9px rgba(234,179,8,.14)}50%{transform:rotate(4deg) scale(1.06);box-shadow:0 5px 15px rgba(234,179,8,.3),0 0 13px rgba(250,204,21,.13)}}
@keyframes breadcrumb4023Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(202,138,4,.4),0 0 5px rgba(250,204,21,.3)}50%{transform:translateY(-50%) scale(1.2);opacity:1;box-shadow:0 0 0 3px rgba(202,138,4,.38),0 0 12px rgba(250,204,21,.7)}}
@media(max-width:620px){.breadcrumb-4023{gap:3px;padding:8px}.breadcrumb-4023__item{padding:7px}.breadcrumb-4023__item--current{padding-right:22px}.breadcrumb-4023__label{font-size:6px}.breadcrumb-4023__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4023__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4024,
    name: "Element Blue Neon Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4024-wrap">
        <nav className="breadcrumb-4024" aria-label="Breadcrumb">
          <span className="breadcrumb-4024__shine"></span>
          <span className="breadcrumb-4024__grid"></span>
          <span className="breadcrumb-4024__ambient breadcrumb-4024__ambient--left"></span>
          <span className="breadcrumb-4024__ambient breadcrumb-4024__ambient--right"></span>

          <a href="#" className="breadcrumb-4024__item">
            <span className="breadcrumb-4024__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4024__label">HOME</span>
          </a>

          <span className="breadcrumb-4024__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4024__item">
            <span className="breadcrumb-4024__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4024__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4024__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4024__item">
            <span className="breadcrumb-4024__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4024__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4024__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4024__item breadcrumb-4024__item--current">
            <span className="breadcrumb-4024__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4024__label">BREADCRUMBS</span>
            <span className="breadcrumb-4024__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4024-wrap">
    <nav class="breadcrumb-4024" aria-label="Breadcrumb">
        <span class="breadcrumb-4024__shine"></span>
        <span class="breadcrumb-4024__grid"></span>
        <span class="breadcrumb-4024__ambient breadcrumb-4024__ambient--left"></span>
        <span class="breadcrumb-4024__ambient breadcrumb-4024__ambient--right"></span>

        <a href="#" class="breadcrumb-4024__item">
            <span class="breadcrumb-4024__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4024__label">HOME</span>
        </a>

        <span class="breadcrumb-4024__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4024__item">
            <span class="breadcrumb-4024__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4024__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4024__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4024__item">
            <span class="breadcrumb-4024__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4024__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4024__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4024__item breadcrumb-4024__item--current">
            <span class="breadcrumb-4024__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4024__label">BREADCRUMBS</span>
            <span class="breadcrumb-4024__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4024-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4024{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(56,189,248,.28);border-radius:16px;background:linear-gradient(135deg,#020617 0%,#06152d 48%,#082f49 100%);box-shadow:0 14px 36px rgba(0,0,0,.42),0 0 26px rgba(14,165,233,.1),inset 0 1px 0 rgba(125,211,252,.08);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4024::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#0ea5e9,#67e8f9,#2563eb,transparent);box-shadow:0 0 8px rgba(56,189,248,.45);opacity:.6}
.breadcrumb-4024__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.035) 1px,transparent 1px);background-size:14px 14px;mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.breadcrumb-4024__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-60px;width:40px;background:linear-gradient(90deg,transparent,rgba(103,232,249,.08),rgba(224,242,254,.38),rgba(56,189,248,.12),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4024Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4024__ambient{position:absolute;border-radius:50%;filter:blur(22px);pointer-events:none}
.breadcrumb-4024__ambient--left{left:-35px;top:-34px;width:100px;height:100px;background:rgba(14,165,233,.11)}
.breadcrumb-4024__ambient--right{right:-35px;bottom:-38px;width:105px;height:105px;background:rgba(37,99,235,.1)}
.breadcrumb-4024__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#94a3b8;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4024__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(14,165,233,.12),rgba(37,99,235,.03));opacity:0;transition:opacity .22s ease}
.breadcrumb-4024__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#0284c7,#22d3ee,#60a5fa);box-shadow:0 0 9px rgba(34,211,238,.5);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4024__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(56,189,248,.25);border-radius:8px;background:linear-gradient(145deg,#071426,#0b1f38);color:#38bdf8;box-shadow:inset 0 1px 0 rgba(125,211,252,.05),0 0 0 rgba(56,189,248,0);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4024__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4024__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#155e75;font-size:15px;animation:breadcrumb4024Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4024__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4024__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4024__item[href]:hover{border-color:rgba(34,211,238,.36);background:linear-gradient(135deg,rgba(8,47,73,.7),rgba(30,64,175,.2));color:#e0f2fe;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 15px rgba(14,165,233,.12);transform:translateY(-3px)}
.breadcrumb-4024__item[href]:hover::before{opacity:1}
.breadcrumb-4024__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4024__item[href]:hover .breadcrumb-4024__icon{border-color:#22d3ee;background:linear-gradient(145deg,#0ea5e9,#2563eb);color:#fff;box-shadow:0 6px 16px rgba(14,165,233,.22),0 0 14px rgba(34,211,238,.28);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4024__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4024__item--current{padding-right:26px;border-color:rgba(34,211,238,.38);background:linear-gradient(135deg,rgba(8,47,73,.8),rgba(30,64,175,.32));color:#e0f2fe;box-shadow:inset 0 1px 0 rgba(125,211,252,.05),0 0 16px rgba(14,165,233,.08)}
.breadcrumb-4024__item--current::before{opacity:1}
.breadcrumb-4024__item--current::after{transform:scaleX(1)}
.breadcrumb-4024__item--current .breadcrumb-4024__icon{border-color:#22d3ee;background:linear-gradient(145deg,#0ea5e9,#2563eb);color:#fff;animation:breadcrumb4024CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4024__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #082f49;border-radius:50%;background:#67e8f9;box-shadow:0 0 0 2px rgba(14,165,233,.55),0 0 10px rgba(103,232,249,.7);transform:translateY(-50%);animation:breadcrumb4024Dot 1.9s ease-in-out infinite}
.breadcrumb-4024:hover .breadcrumb-4024__separator{color:#38bdf8;text-shadow:0 0 8px rgba(56,189,248,.48)}
@keyframes breadcrumb4024Shine{0%,68%{left:-60px;opacity:0}72%{opacity:.85}88%{left:calc(100% + 60px);opacity:.85}100%{left:calc(100% + 60px);opacity:0}}
@keyframes breadcrumb4024Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4024CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(14,165,233,.18),0 0 6px rgba(34,211,238,.14)}50%{transform:rotate(4deg) scale(1.07);box-shadow:0 6px 16px rgba(14,165,233,.3),0 0 16px rgba(34,211,238,.32)}}
@keyframes breadcrumb4024Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(14,165,233,.35),0 0 5px rgba(103,232,249,.35)}50%{transform:translateY(-50%) scale(1.22);opacity:1;box-shadow:0 0 0 3px rgba(14,165,233,.4),0 0 13px rgba(103,232,249,.85)}}
@media(max-width:620px){.breadcrumb-4024{gap:3px;padding:8px}.breadcrumb-4024__item{padding:7px}.breadcrumb-4024__item--current{padding-right:22px}.breadcrumb-4024__label{font-size:6px}.breadcrumb-4024__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4024__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4025,
    name: "Element Purple Neon Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4025-wrap">
        <nav className="breadcrumb-4025" aria-label="Breadcrumb">
          <span className="breadcrumb-4025__shine"></span>
          <span className="breadcrumb-4025__grid"></span>
          <span className="breadcrumb-4025__ambient breadcrumb-4025__ambient--left"></span>
          <span className="breadcrumb-4025__ambient breadcrumb-4025__ambient--right"></span>

          <a href="#" className="breadcrumb-4025__item">
            <span className="breadcrumb-4025__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4025__label">HOME</span>
          </a>

          <span className="breadcrumb-4025__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4025__item">
            <span className="breadcrumb-4025__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4025__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4025__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4025__item">
            <span className="breadcrumb-4025__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4025__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4025__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4025__item breadcrumb-4025__item--current">
            <span className="breadcrumb-4025__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4025__label">BREADCRUMBS</span>
            <span className="breadcrumb-4025__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4025-wrap">
    <nav class="breadcrumb-4025" aria-label="Breadcrumb">
        <span class="breadcrumb-4025__shine"></span>
        <span class="breadcrumb-4025__grid"></span>
        <span class="breadcrumb-4025__ambient breadcrumb-4025__ambient--left"></span>
        <span class="breadcrumb-4025__ambient breadcrumb-4025__ambient--right"></span>

        <a href="#" class="breadcrumb-4025__item">
            <span class="breadcrumb-4025__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4025__label">HOME</span>
        </a>

        <span class="breadcrumb-4025__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4025__item">
            <span class="breadcrumb-4025__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4025__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4025__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4025__item">
            <span class="breadcrumb-4025__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4025__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4025__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4025__item breadcrumb-4025__item--current">
            <span class="breadcrumb-4025__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4025__label">BREADCRUMBS</span>
            <span class="breadcrumb-4025__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4025-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4025{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(168,85,247,.3);border-radius:16px;background:linear-gradient(135deg,#070312 0%,#130624 48%,#2e1065 100%);box-shadow:0 14px 36px rgba(0,0,0,.44),0 0 28px rgba(147,51,234,.11),inset 0 1px 0 rgba(216,180,254,.07);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4025::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#7e22ce,#c084fc,#8b5cf6,transparent);box-shadow:0 0 9px rgba(192,132,252,.52);opacity:.65}
.breadcrumb-4025__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(192,132,252,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(192,132,252,.035) 1px,transparent 1px);background-size:14px 14px;mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.breadcrumb-4025__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-60px;width:40px;background:linear-gradient(90deg,transparent,rgba(192,132,252,.08),rgba(243,232,255,.38),rgba(168,85,247,.14),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4025Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4025__ambient{position:absolute;border-radius:50%;filter:blur(22px);pointer-events:none}
.breadcrumb-4025__ambient--left{left:-35px;top:-34px;width:100px;height:100px;background:rgba(147,51,234,.13)}
.breadcrumb-4025__ambient--right{right:-35px;bottom:-38px;width:105px;height:105px;background:rgba(124,58,237,.12)}
.breadcrumb-4025__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a1a1aa;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4025__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(168,85,247,.14),rgba(124,58,237,.04));opacity:0;transition:opacity .22s ease}
.breadcrumb-4025__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#7e22ce,#d946ef,#c084fc);box-shadow:0 0 9px rgba(217,70,239,.5);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4025__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(192,132,252,.25);border-radius:8px;background:linear-gradient(145deg,#13081f,#211036);color:#c084fc;box-shadow:inset 0 1px 0 rgba(216,180,254,.05),0 0 0 rgba(192,132,252,0);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4025__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4025__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#6b21a8;font-size:15px;animation:breadcrumb4025Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4025__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4025__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4025__item[href]:hover{border-color:rgba(216,180,254,.38);background:linear-gradient(135deg,rgba(88,28,135,.6),rgba(76,29,149,.25));color:#f3e8ff;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 16px rgba(168,85,247,.16);transform:translateY(-3px)}
.breadcrumb-4025__item[href]:hover::before{opacity:1}
.breadcrumb-4025__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4025__item[href]:hover .breadcrumb-4025__icon{border-color:#d946ef;background:linear-gradient(145deg,#a855f7,#7c3aed);color:#fff;box-shadow:0 6px 16px rgba(147,51,234,.25),0 0 15px rgba(217,70,239,.3);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4025__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4025__item--current{padding-right:26px;border-color:rgba(216,180,254,.4);background:linear-gradient(135deg,rgba(88,28,135,.76),rgba(76,29,149,.35));color:#f3e8ff;box-shadow:inset 0 1px 0 rgba(216,180,254,.05),0 0 17px rgba(147,51,234,.1)}
.breadcrumb-4025__item--current::before{opacity:1}
.breadcrumb-4025__item--current::after{transform:scaleX(1)}
.breadcrumb-4025__item--current .breadcrumb-4025__icon{border-color:#d946ef;background:linear-gradient(145deg,#a855f7,#7c3aed);color:#fff;animation:breadcrumb4025CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4025__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #2e1065;border-radius:50%;background:#e879f9;box-shadow:0 0 0 2px rgba(168,85,247,.55),0 0 10px rgba(232,121,249,.75);transform:translateY(-50%);animation:breadcrumb4025Dot 1.9s ease-in-out infinite}
.breadcrumb-4025:hover .breadcrumb-4025__separator{color:#c084fc;text-shadow:0 0 8px rgba(192,132,252,.52)}
@keyframes breadcrumb4025Shine{0%,68%{left:-60px;opacity:0}72%{opacity:.85}88%{left:calc(100% + 60px);opacity:.85}100%{left:calc(100% + 60px);opacity:0}}
@keyframes breadcrumb4025Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4025CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(147,51,234,.2),0 0 6px rgba(217,70,239,.14)}50%{transform:rotate(4deg) scale(1.07);box-shadow:0 6px 16px rgba(147,51,234,.32),0 0 17px rgba(217,70,239,.34)}}
@keyframes breadcrumb4025Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(168,85,247,.35),0 0 5px rgba(232,121,249,.35)}50%{transform:translateY(-50%) scale(1.22);opacity:1;box-shadow:0 0 0 3px rgba(168,85,247,.42),0 0 14px rgba(232,121,249,.9)}}
@media(max-width:620px){.breadcrumb-4025{gap:3px;padding:8px}.breadcrumb-4025__item{padding:7px}.breadcrumb-4025__item--current{padding-right:22px}.breadcrumb-4025__label{font-size:6px}.breadcrumb-4025__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4025__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4026,
    name: "Element Pink Magenta Neon Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4026-wrap">
        <nav className="breadcrumb-4026" aria-label="Breadcrumb">
          <span className="breadcrumb-4026__shine"></span>
          <span className="breadcrumb-4026__grid"></span>
          <span className="breadcrumb-4026__ambient breadcrumb-4026__ambient--left"></span>
          <span className="breadcrumb-4026__ambient breadcrumb-4026__ambient--right"></span>

          <a href="#" className="breadcrumb-4026__item">
            <span className="breadcrumb-4026__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4026__label">HOME</span>
          </a>

          <span className="breadcrumb-4026__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4026__item">
            <span className="breadcrumb-4026__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4026__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4026__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4026__item">
            <span className="breadcrumb-4026__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4026__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4026__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4026__item breadcrumb-4026__item--current">
            <span className="breadcrumb-4026__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4026__label">BREADCRUMBS</span>
            <span className="breadcrumb-4026__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4026-wrap">
    <nav class="breadcrumb-4026" aria-label="Breadcrumb">
        <span class="breadcrumb-4026__shine"></span>
        <span class="breadcrumb-4026__grid"></span>
        <span class="breadcrumb-4026__ambient breadcrumb-4026__ambient--left"></span>
        <span class="breadcrumb-4026__ambient breadcrumb-4026__ambient--right"></span>

        <a href="#" class="breadcrumb-4026__item">
            <span class="breadcrumb-4026__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4026__label">HOME</span>
        </a>

        <span class="breadcrumb-4026__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4026__item">
            <span class="breadcrumb-4026__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4026__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4026__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4026__item">
            <span class="breadcrumb-4026__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4026__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4026__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4026__item breadcrumb-4026__item--current">
            <span class="breadcrumb-4026__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4026__label">BREADCRUMBS</span>
            <span class="breadcrumb-4026__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4026-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4026{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(236,72,153,.3);border-radius:16px;background:linear-gradient(135deg,#12030c 0%,#26051a 48%,#500724 100%);box-shadow:0 14px 36px rgba(0,0,0,.44),0 0 28px rgba(219,39,119,.11),inset 0 1px 0 rgba(251,207,232,.07);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4026::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#db2777,#f472b6,#d946ef,transparent);box-shadow:0 0 9px rgba(244,114,182,.52);opacity:.65}
.breadcrumb-4026__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(244,114,182,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(217,70,239,.035) 1px,transparent 1px);background-size:14px 14px;mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.breadcrumb-4026__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-60px;width:40px;background:linear-gradient(90deg,transparent,rgba(244,114,182,.08),rgba(253,242,248,.4),rgba(217,70,239,.14),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4026Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4026__ambient{position:absolute;border-radius:50%;filter:blur(22px);pointer-events:none}
.breadcrumb-4026__ambient--left{left:-35px;top:-34px;width:100px;height:100px;background:rgba(219,39,119,.14)}
.breadcrumb-4026__ambient--right{right:-35px;bottom:-38px;width:105px;height:105px;background:rgba(217,70,239,.12)}
.breadcrumb-4026__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a1a1aa;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4026__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(236,72,153,.14),rgba(217,70,239,.04));opacity:0;transition:opacity .22s ease}
.breadcrumb-4026__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#db2777,#f472b6,#d946ef);box-shadow:0 0 9px rgba(244,114,182,.55);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4026__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(244,114,182,.25);border-radius:8px;background:linear-gradient(145deg,#1d0715,#321029);color:#f472b6;box-shadow:inset 0 1px 0 rgba(251,207,232,.05),0 0 0 rgba(244,114,182,0);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4026__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4026__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#831843;font-size:15px;animation:breadcrumb4026Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4026__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4026__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4026__item[href]:hover{border-color:rgba(244,114,182,.4);background:linear-gradient(135deg,rgba(131,24,67,.62),rgba(112,26,117,.26));color:#fdf2f8;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 16px rgba(236,72,153,.17);transform:translateY(-3px)}
.breadcrumb-4026__item[href]:hover::before{opacity:1}
.breadcrumb-4026__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4026__item[href]:hover .breadcrumb-4026__icon{border-color:#f472b6;background:linear-gradient(145deg,#ec4899,#d946ef);color:#fff;box-shadow:0 6px 16px rgba(219,39,119,.26),0 0 15px rgba(244,114,182,.32);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4026__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4026__item--current{padding-right:26px;border-color:rgba(244,114,182,.42);background:linear-gradient(135deg,rgba(131,24,67,.78),rgba(112,26,117,.36));color:#fdf2f8;box-shadow:inset 0 1px 0 rgba(251,207,232,.05),0 0 17px rgba(236,72,153,.11)}
.breadcrumb-4026__item--current::before{opacity:1}
.breadcrumb-4026__item--current::after{transform:scaleX(1)}
.breadcrumb-4026__item--current .breadcrumb-4026__icon{border-color:#f472b6;background:linear-gradient(145deg,#ec4899,#d946ef);color:#fff;animation:breadcrumb4026CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4026__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #500724;border-radius:50%;background:#f9a8d4;box-shadow:0 0 0 2px rgba(236,72,153,.55),0 0 10px rgba(249,168,212,.78);transform:translateY(-50%);animation:breadcrumb4026Dot 1.9s ease-in-out infinite}
.breadcrumb-4026:hover .breadcrumb-4026__separator{color:#f472b6;text-shadow:0 0 8px rgba(244,114,182,.55)}
@keyframes breadcrumb4026Shine{0%,68%{left:-60px;opacity:0}72%{opacity:.85}88%{left:calc(100% + 60px);opacity:.85}100%{left:calc(100% + 60px);opacity:0}}
@keyframes breadcrumb4026Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4026CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(219,39,119,.2),0 0 6px rgba(244,114,182,.14)}50%{transform:rotate(4deg) scale(1.07);box-shadow:0 6px 16px rgba(219,39,119,.34),0 0 17px rgba(244,114,182,.38)}}
@keyframes breadcrumb4026Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(236,72,153,.35),0 0 5px rgba(249,168,212,.38)}50%{transform:translateY(-50%) scale(1.22);opacity:1;box-shadow:0 0 0 3px rgba(236,72,153,.44),0 0 14px rgba(249,168,212,.92)}}
@media(max-width:620px){.breadcrumb-4026{gap:3px;padding:8px}.breadcrumb-4026__item{padding:7px}.breadcrumb-4026__item--current{padding-right:22px}.breadcrumb-4026__label{font-size:6px}.breadcrumb-4026__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4026__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4027,
    name: "Element Green Neon Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4027-wrap">
        <nav className="breadcrumb-4027" aria-label="Breadcrumb">
          <span className="breadcrumb-4027__shine"></span>
          <span className="breadcrumb-4027__grid"></span>
          <span className="breadcrumb-4027__ambient breadcrumb-4027__ambient--left"></span>
          <span className="breadcrumb-4027__ambient breadcrumb-4027__ambient--right"></span>

          <a href="#" className="breadcrumb-4027__item">
            <span className="breadcrumb-4027__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4027__label">HOME</span>
          </a>

          <span className="breadcrumb-4027__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4027__item">
            <span className="breadcrumb-4027__icon">
              <i className="ri-shapes-fill"></i>
            </span>
            <span className="breadcrumb-4027__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4027__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4027__item">
            <span className="breadcrumb-4027__icon">
              <i className="ri-compass-3-fill"></i>
            </span>
            <span className="breadcrumb-4027__label">NAVIGATION</span>
          </a>

          <span className="breadcrumb-4027__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4027__item breadcrumb-4027__item--current">
            <span className="breadcrumb-4027__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4027__label">BREADCRUMBS</span>
            <span className="breadcrumb-4027__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4027-wrap">
    <nav class="breadcrumb-4027" aria-label="Breadcrumb">
        <span class="breadcrumb-4027__shine"></span>
        <span class="breadcrumb-4027__grid"></span>
        <span class="breadcrumb-4027__ambient breadcrumb-4027__ambient--left"></span>
        <span class="breadcrumb-4027__ambient breadcrumb-4027__ambient--right"></span>

        <a href="#" class="breadcrumb-4027__item">
            <span class="breadcrumb-4027__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4027__label">HOME</span>
        </a>

        <span class="breadcrumb-4027__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4027__item">
            <span class="breadcrumb-4027__icon">
                <i class="ri-shapes-fill"></i>
            </span>
            <span class="breadcrumb-4027__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4027__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4027__item">
            <span class="breadcrumb-4027__icon">
                <i class="ri-compass-3-fill"></i>
            </span>
            <span class="breadcrumb-4027__label">NAVIGATION</span>
        </a>

        <span class="breadcrumb-4027__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4027__item breadcrumb-4027__item--current">
            <span class="breadcrumb-4027__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4027__label">BREADCRUMBS</span>
            <span class="breadcrumb-4027__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4027-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4027{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(74,222,128,.3);border-radius:16px;background:linear-gradient(135deg,#020a05 0%,#06160c 48%,#052e16 100%);box-shadow:0 14px 36px rgba(0,0,0,.44),0 0 28px rgba(34,197,94,.1),inset 0 1px 0 rgba(187,247,208,.07);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4027::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#16a34a,#4ade80,#a3e635,transparent);box-shadow:0 0 9px rgba(74,222,128,.52);opacity:.68}
.breadcrumb-4027__grid{position:absolute;inset:0;background-image:linear-gradient(rgba(74,222,128,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(163,230,53,.03) 1px,transparent 1px);background-size:14px 14px;mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.breadcrumb-4027__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-60px;width:40px;background:linear-gradient(90deg,transparent,rgba(74,222,128,.08),rgba(240,253,244,.38),rgba(163,230,53,.13),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4027Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4027__ambient{position:absolute;border-radius:50%;filter:blur(22px);pointer-events:none}
.breadcrumb-4027__ambient--left{left:-35px;top:-34px;width:100px;height:100px;background:rgba(34,197,94,.13)}
.breadcrumb-4027__ambient--right{right:-35px;bottom:-38px;width:105px;height:105px;background:rgba(132,204,22,.11)}
.breadcrumb-4027__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a1a1aa;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4027__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(34,197,94,.14),rgba(132,204,22,.04));opacity:0;transition:opacity .22s ease}
.breadcrumb-4027__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#16a34a,#4ade80,#a3e635);box-shadow:0 0 9px rgba(74,222,128,.55);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4027__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(74,222,128,.25);border-radius:8px;background:linear-gradient(145deg,#06120a,#0a2110);color:#4ade80;box-shadow:inset 0 1px 0 rgba(187,247,208,.05),0 0 0 rgba(74,222,128,0);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4027__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4027__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#166534;font-size:15px;animation:breadcrumb4027Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4027__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4027__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4027__item[href]:hover{border-color:rgba(74,222,128,.4);background:linear-gradient(135deg,rgba(20,83,45,.62),rgba(54,83,20,.25));color:#f0fdf4;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 16px rgba(34,197,94,.16);transform:translateY(-3px)}
.breadcrumb-4027__item[href]:hover::before{opacity:1}
.breadcrumb-4027__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4027__item[href]:hover .breadcrumb-4027__icon{border-color:#4ade80;background:linear-gradient(145deg,#22c55e,#65a30d);color:#fff;box-shadow:0 6px 16px rgba(34,197,94,.26),0 0 15px rgba(74,222,128,.3);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4027__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4027__item--current{padding-right:26px;border-color:rgba(74,222,128,.42);background:linear-gradient(135deg,rgba(20,83,45,.76),rgba(54,83,20,.34));color:#f0fdf4;box-shadow:inset 0 1px 0 rgba(187,247,208,.05),0 0 17px rgba(34,197,94,.1)}
.breadcrumb-4027__item--current::before{opacity:1}
.breadcrumb-4027__item--current::after{transform:scaleX(1)}
.breadcrumb-4027__item--current .breadcrumb-4027__icon{border-color:#4ade80;background:linear-gradient(145deg,#22c55e,#65a30d);color:#fff;animation:breadcrumb4027CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4027__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #052e16;border-radius:50%;background:#86efac;box-shadow:0 0 0 2px rgba(34,197,94,.55),0 0 10px rgba(134,239,172,.78);transform:translateY(-50%);animation:breadcrumb4027Dot 1.9s ease-in-out infinite}
.breadcrumb-4027:hover .breadcrumb-4027__separator{color:#4ade80;text-shadow:0 0 8px rgba(74,222,128,.55)}
@keyframes breadcrumb4027Shine{0%,68%{left:-60px;opacity:0}72%{opacity:.85}88%{left:calc(100% + 60px);opacity:.85}100%{left:calc(100% + 60px);opacity:0}}
@keyframes breadcrumb4027Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4027CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(34,197,94,.2),0 0 6px rgba(74,222,128,.14)}50%{transform:rotate(4deg) scale(1.07);box-shadow:0 6px 16px rgba(34,197,94,.34),0 0 17px rgba(74,222,128,.36)}}
@keyframes breadcrumb4027Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(34,197,94,.35),0 0 5px rgba(134,239,172,.38)}50%{transform:translateY(-50%) scale(1.22);opacity:1;box-shadow:0 0 0 3px rgba(34,197,94,.44),0 0 14px rgba(134,239,172,.92)}}
@media(max-width:620px){.breadcrumb-4027{gap:3px;padding:8px}.breadcrumb-4027__item{padding:7px}.breadcrumb-4027__item--current{padding-right:22px}.breadcrumb-4027__label{font-size:6px}.breadcrumb-4027__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4027__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4028,
    name: "Element Gold Luxury Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4028-wrap">
        <nav className="breadcrumb-4028" aria-label="Breadcrumb">
          <span className="breadcrumb-4028__shine"></span>
          <span className="breadcrumb-4028__texture"></span>
          <span className="breadcrumb-4028__ambient breadcrumb-4028__ambient--left"></span>
          <span className="breadcrumb-4028__ambient breadcrumb-4028__ambient--right"></span>

          <a href="#" className="breadcrumb-4028__item">
            <span className="breadcrumb-4028__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4028__label">HOME</span>
          </a>

          <span className="breadcrumb-4028__separator">
            <span></span>
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4028__item">
            <span className="breadcrumb-4028__icon">
              <i className="ri-vip-diamond-fill"></i>
            </span>
            <span className="breadcrumb-4028__label">COLLECTION</span>
          </a>

          <span className="breadcrumb-4028__separator">
            <span></span>
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4028__item">
            <span className="breadcrumb-4028__icon">
              <i className="ri-layout-grid-fill"></i>
            </span>
            <span className="breadcrumb-4028__label">ELEMENTS</span>
          </a>

          <span className="breadcrumb-4028__separator">
            <span></span>
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4028__item breadcrumb-4028__item--current">
            <span className="breadcrumb-4028__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4028__label">BREADCRUMBS</span>
            <span className="breadcrumb-4028__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4028-wrap">
    <nav class="breadcrumb-4028" aria-label="Breadcrumb">
        <span class="breadcrumb-4028__shine"></span>
        <span class="breadcrumb-4028__texture"></span>
        <span class="breadcrumb-4028__ambient breadcrumb-4028__ambient--left"></span>
        <span class="breadcrumb-4028__ambient breadcrumb-4028__ambient--right"></span>

        <a href="#" class="breadcrumb-4028__item">
            <span class="breadcrumb-4028__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4028__label">HOME</span>
        </a>

        <span class="breadcrumb-4028__separator">
            <span></span>
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4028__item">
            <span class="breadcrumb-4028__icon">
                <i class="ri-vip-diamond-fill"></i>
            </span>
            <span class="breadcrumb-4028__label">COLLECTION</span>
        </a>

        <span class="breadcrumb-4028__separator">
            <span></span>
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4028__item">
            <span class="breadcrumb-4028__icon">
                <i class="ri-layout-grid-fill"></i>
            </span>
            <span class="breadcrumb-4028__label">ELEMENTS</span>
        </a>

        <span class="breadcrumb-4028__separator">
            <span></span>
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4028__item breadcrumb-4028__item--current">
            <span class="breadcrumb-4028__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4028__label">BREADCRUMBS</span>
            <span class="breadcrumb-4028__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4028-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4028{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(212,175,55,.34);border-radius:16px;background:linear-gradient(135deg,#070706 0%,#11100c 46%,#1c170a 100%);box-shadow:0 16px 38px rgba(0,0,0,.46),0 0 26px rgba(212,175,55,.08),inset 0 1px 0 rgba(255,244,190,.07);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4028::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#8c6a17,#f4d06f,#fff1ad,#c99a2e,transparent);box-shadow:0 0 8px rgba(244,208,111,.35);opacity:.72}
.breadcrumb-4028::after{content:"";position:absolute;left:24px;right:24px;top:3px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,241,173,.14),rgba(255,255,255,.2),rgba(255,241,173,.14),transparent)}
.breadcrumb-4028__texture{position:absolute;inset:0;background-image:radial-gradient(rgba(255,224,128,.045) 1px,transparent 1.3px);background-size:13px 13px;mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);pointer-events:none}
.breadcrumb-4028__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-65px;width:42px;background:linear-gradient(90deg,transparent,rgba(212,175,55,.06),rgba(255,246,201,.4),rgba(244,208,111,.12),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4028Shine 5.2s ease-in-out infinite;pointer-events:none}
.breadcrumb-4028__ambient{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}
.breadcrumb-4028__ambient--left{left:-38px;top:-36px;width:105px;height:105px;background:rgba(202,138,4,.1)}
.breadcrumb-4028__ambient--right{right:-38px;bottom:-40px;width:110px;height:110px;background:rgba(245,158,11,.07)}
.breadcrumb-4028__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a8a29e;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4028__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(212,175,55,.12),rgba(255,241,173,.025));opacity:0;transition:opacity .22s ease}
.breadcrumb-4028__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#a87918,#f4d06f,#fff1ad);box-shadow:0 0 9px rgba(244,208,111,.42);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4028__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(212,175,55,.27);border-radius:8px;background:linear-gradient(145deg,#11100c,#1b170d);color:#d4af37;box-shadow:inset 0 1px 0 rgba(255,241,173,.055);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4028__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.1em;white-space:nowrap}
.breadcrumb-4028__separator{position:relative;z-index:3;width:20px;height:26px;display:flex;align-items:center;justify-content:center;color:#80631e;font-size:14px;animation:breadcrumb4028Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4028__separator>span{position:absolute;width:5px;height:5px;border:1px solid #8c6a17;background:#181307;transform:rotate(45deg);opacity:.6}
.breadcrumb-4028__separator>i{position:relative;z-index:2}
.breadcrumb-4028__separator:nth-of-type(6){animation-delay:.18s}
.breadcrumb-4028__separator:nth-of-type(8){animation-delay:.36s}
.breadcrumb-4028__item[href]:hover{border-color:rgba(244,208,111,.38);background:linear-gradient(135deg,rgba(120,83,18,.28),rgba(38,31,12,.72));color:#fff4c2;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 16px rgba(212,175,55,.11);transform:translateY(-3px)}
.breadcrumb-4028__item[href]:hover::before{opacity:1}
.breadcrumb-4028__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4028__item[href]:hover .breadcrumb-4028__icon{border-color:#f4d06f;background:linear-gradient(145deg,#d4af37,#8c6516);color:#160f02;box-shadow:0 6px 16px rgba(212,175,55,.22),0 0 14px rgba(244,208,111,.2);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4028__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4028__item--current{padding-right:26px;border-color:rgba(244,208,111,.4);background:linear-gradient(135deg,rgba(120,83,18,.35),rgba(38,31,12,.82));color:#fff4c2;box-shadow:inset 0 1px 0 rgba(255,241,173,.045),0 0 16px rgba(212,175,55,.08)}
.breadcrumb-4028__item--current::before{opacity:1}
.breadcrumb-4028__item--current::after{transform:scaleX(1)}
.breadcrumb-4028__item--current .breadcrumb-4028__icon{border-color:#f4d06f;background:linear-gradient(145deg,#e3bd48,#9d7419);color:#150f02;animation:breadcrumb4028CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4028__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #2b210a;border-radius:50%;background:#ffe99a;box-shadow:0 0 0 2px rgba(212,175,55,.5),0 0 10px rgba(255,233,154,.68);transform:translateY(-50%);animation:breadcrumb4028Dot 1.9s ease-in-out infinite}
.breadcrumb-4028:hover .breadcrumb-4028__separator{color:#f4d06f;text-shadow:0 0 8px rgba(244,208,111,.4)}
@keyframes breadcrumb4028Shine{0%,67%{left:-65px;opacity:0}72%{opacity:.9}88%{left:calc(100% + 65px);opacity:.9}100%{left:calc(100% + 65px);opacity:0}}
@keyframes breadcrumb4028Arrow{0%,100%{transform:translateX(0);opacity:.45}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4028CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(212,175,55,.16),0 0 6px rgba(244,208,111,.1)}50%{transform:rotate(4deg) scale(1.07);box-shadow:0 6px 16px rgba(212,175,55,.3),0 0 16px rgba(244,208,111,.26)}}
@keyframes breadcrumb4028Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(212,175,55,.3),0 0 5px rgba(255,233,154,.28)}50%{transform:translateY(-50%) scale(1.22);opacity:1;box-shadow:0 0 0 3px rgba(212,175,55,.4),0 0 14px rgba(255,233,154,.78)}}
@media(max-width:620px){.breadcrumb-4028{gap:3px;padding:8px}.breadcrumb-4028__item{padding:7px}.breadcrumb-4028__item--current{padding-right:22px}.breadcrumb-4028__label{font-size:6px}.breadcrumb-4028__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4028__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4029,
    name: "Element Inferno Fire Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4029-wrap">
        <nav className="breadcrumb-4029" aria-label="Breadcrumb">
          <span className="breadcrumb-4029__shine"></span>
          <span className="breadcrumb-4029__heat"></span>
          <span className="breadcrumb-4029__ambient breadcrumb-4029__ambient--left"></span>
          <span className="breadcrumb-4029__ambient breadcrumb-4029__ambient--right"></span>

          <a href="#" className="breadcrumb-4029__item">
            <span className="breadcrumb-4029__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4029__label">HOME</span>
          </a>

          <span className="breadcrumb-4029__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4029__item">
            <span className="breadcrumb-4029__icon">
              <i className="ri-fire-fill"></i>
            </span>
            <span className="breadcrumb-4029__label">INFERNO</span>
          </a>

          <span className="breadcrumb-4029__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4029__item">
            <span className="breadcrumb-4029__icon">
              <i className="ri-flashlight-fill"></i>
            </span>
            <span className="breadcrumb-4029__label">EMBER</span>
          </a>

          <span className="breadcrumb-4029__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4029__item breadcrumb-4029__item--current">
            <span className="breadcrumb-4029__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4029__label">FLAME CORE</span>
            <span className="breadcrumb-4029__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4029-wrap">
    <nav class="breadcrumb-4029" aria-label="Breadcrumb">
        <span class="breadcrumb-4029__shine"></span>
        <span class="breadcrumb-4029__heat"></span>
        <span class="breadcrumb-4029__ambient breadcrumb-4029__ambient--left"></span>
        <span class="breadcrumb-4029__ambient breadcrumb-4029__ambient--right"></span>

        <a href="#" class="breadcrumb-4029__item">
            <span class="breadcrumb-4029__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4029__label">HOME</span>
        </a>

        <span class="breadcrumb-4029__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4029__item">
            <span class="breadcrumb-4029__icon">
                <i class="ri-fire-fill"></i>
            </span>
            <span class="breadcrumb-4029__label">INFERNO</span>
        </a>

        <span class="breadcrumb-4029__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4029__item">
            <span class="breadcrumb-4029__icon">
                <i class="ri-flashlight-fill"></i>
            </span>
            <span class="breadcrumb-4029__label">EMBER</span>
        </a>

        <span class="breadcrumb-4029__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4029__item breadcrumb-4029__item--current">
            <span class="breadcrumb-4029__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4029__label">FLAME CORE</span>
            <span class="breadcrumb-4029__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4029-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4029{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 12px;overflow:hidden;border:1px solid rgba(249,115,22,.34);border-radius:16px;background:linear-gradient(135deg,#100301 0%,#260801 46%,#450a0a 100%);box-shadow:0 15px 38px rgba(0,0,0,.46),0 0 28px rgba(249,115,22,.11),inset 0 1px 0 rgba(254,215,170,.06);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4029::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#dc2626,#f97316,#facc15,#fb923c,transparent);box-shadow:0 0 9px rgba(249,115,22,.55);opacity:.72}
.breadcrumb-4029::after{content:"";position:absolute;left:10%;right:10%;bottom:-11px;height:17px;border-radius:50%;background:rgba(249,115,22,.16);filter:blur(8px);box-shadow:0 0 15px rgba(220,38,38,.2);pointer-events:none}
.breadcrumb-4029__heat{position:absolute;inset:0;background:radial-gradient(circle at 12% 80%,rgba(251,191,36,.09),transparent 18%),radial-gradient(circle at 47% 100%,rgba(249,115,22,.1),transparent 22%),radial-gradient(circle at 85% 78%,rgba(220,38,38,.1),transparent 18%);pointer-events:none}
.breadcrumb-4029__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-65px;width:42px;background:linear-gradient(90deg,transparent,rgba(249,115,22,.05),rgba(255,237,213,.42),rgba(251,146,60,.14),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4029Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4029__ambient{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}
.breadcrumb-4029__ambient--left{left:-38px;top:-38px;width:105px;height:105px;background:rgba(220,38,38,.13)}
.breadcrumb-4029__ambient--right{right:-38px;bottom:-40px;width:110px;height:110px;background:rgba(249,115,22,.12)}
.breadcrumb-4029__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a8a29e;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4029__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(249,115,22,.15),rgba(220,38,38,.04));opacity:0;transition:opacity .22s ease}
.breadcrumb-4029__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#dc2626,#f97316,#facc15);box-shadow:0 0 10px rgba(249,115,22,.55);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4029__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(249,115,22,.27);border-radius:8px;background:linear-gradient(145deg,#180503,#2a0904);color:#fb923c;box-shadow:inset 0 1px 0 rgba(254,215,170,.045);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4029__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4029__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#9a3412;font-size:15px;animation:breadcrumb4029Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4029__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4029__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4029__item[href]:hover{border-color:rgba(251,146,60,.42);background:linear-gradient(135deg,rgba(124,45,18,.72),rgba(69,10,10,.5));color:#fff7ed;box-shadow:0 8px 22px rgba(0,0,0,.32),0 0 17px rgba(249,115,22,.17);transform:translateY(-3px)}
.breadcrumb-4029__item[href]:hover::before{opacity:1}
.breadcrumb-4029__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4029__item[href]:hover .breadcrumb-4029__icon{border-color:#fb923c;background:linear-gradient(145deg,#f97316,#dc2626);color:#fff7ed;box-shadow:0 6px 16px rgba(249,115,22,.3),0 0 16px rgba(251,146,60,.34);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4029__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4029__item--current{padding-right:26px;border-color:rgba(251,146,60,.44);background:linear-gradient(135deg,rgba(124,45,18,.82),rgba(69,10,10,.58));color:#fff7ed;box-shadow:inset 0 1px 0 rgba(254,215,170,.04),0 0 18px rgba(249,115,22,.11)}
.breadcrumb-4029__item--current::before{opacity:1}
.breadcrumb-4029__item--current::after{transform:scaleX(1)}
.breadcrumb-4029__item--current .breadcrumb-4029__icon{border-color:#fb923c;background:linear-gradient(145deg,#f97316,#dc2626);color:#fff7ed;animation:breadcrumb4029CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4029__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #450a0a;border-radius:50%;background:#facc15;box-shadow:0 0 0 2px rgba(249,115,22,.55),0 0 10px rgba(250,204,21,.82);transform:translateY(-50%);animation:breadcrumb4029Dot 1.9s ease-in-out infinite}
.breadcrumb-4029:hover .breadcrumb-4029__separator{color:#fb923c;text-shadow:0 0 8px rgba(249,115,22,.6)}
.breadcrumb-4029:hover::after{background:rgba(249,115,22,.25);box-shadow:0 0 20px rgba(220,38,38,.28)}
@keyframes breadcrumb4029Shine{0%,68%{left:-65px;opacity:0}72%{opacity:.9}88%{left:calc(100% + 65px);opacity:.9}100%{left:calc(100% + 65px);opacity:0}}
@keyframes breadcrumb4029Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4029CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(249,115,22,.2),0 0 6px rgba(251,146,60,.16)}50%{transform:rotate(4deg) scale(1.08);box-shadow:0 6px 17px rgba(249,115,22,.36),0 0 18px rgba(251,146,60,.4)}}
@keyframes breadcrumb4029Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(249,115,22,.36),0 0 5px rgba(250,204,21,.38)}50%{transform:translateY(-50%) scale(1.24);opacity:1;box-shadow:0 0 0 3px rgba(249,115,22,.48),0 0 15px rgba(250,204,21,.95)}}
@media(max-width:620px){.breadcrumb-4029{gap:3px;padding:8px}.breadcrumb-4029__item{padding:7px}.breadcrumb-4029__item--current{padding-right:22px}.breadcrumb-4029__label{font-size:6px}.breadcrumb-4029__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4029__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4030,
    name: "Element Frozen Ice Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4030-wrap">
        <nav className="breadcrumb-4030" aria-label="Breadcrumb">
          <span className="breadcrumb-4030__shine"></span>
          <span className="breadcrumb-4030__frost"></span>
          <span className="breadcrumb-4030__ambient breadcrumb-4030__ambient--left"></span>
          <span className="breadcrumb-4030__ambient breadcrumb-4030__ambient--right"></span>

          <span className="breadcrumb-4030__icicles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <a href="#" className="breadcrumb-4030__item">
            <span className="breadcrumb-4030__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4030__label">HOME</span>
          </a>

          <span className="breadcrumb-4030__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4030__item">
            <span className="breadcrumb-4030__icon">
              <i className="ri-snowflake-line"></i>
            </span>
            <span className="breadcrumb-4030__label">FROST</span>
          </a>

          <span className="breadcrumb-4030__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <a href="#" className="breadcrumb-4030__item">
            <span className="breadcrumb-4030__icon">
              <i className="ri-drop-fill"></i>
            </span>
            <span className="breadcrumb-4030__label">GLACIER</span>
          </a>

          <span className="breadcrumb-4030__separator">
            <i className="ri-arrow-right-s-line"></i>
          </span>

          <span className="breadcrumb-4030__item breadcrumb-4030__item--current">
            <span className="breadcrumb-4030__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4030__label">ICE CORE</span>
            <span className="breadcrumb-4030__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4030-wrap">
    <nav class="breadcrumb-4030" aria-label="Breadcrumb">
        <span class="breadcrumb-4030__shine"></span>
        <span class="breadcrumb-4030__frost"></span>
        <span class="breadcrumb-4030__ambient breadcrumb-4030__ambient--left"></span>
        <span class="breadcrumb-4030__ambient breadcrumb-4030__ambient--right"></span>

        <span class="breadcrumb-4030__icicles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4030__item">
            <span class="breadcrumb-4030__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4030__label">HOME</span>
        </a>

        <span class="breadcrumb-4030__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4030__item">
            <span class="breadcrumb-4030__icon">
                <i class="ri-snowflake-line"></i>
            </span>
            <span class="breadcrumb-4030__label">FROST</span>
        </a>

        <span class="breadcrumb-4030__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <a href="#" class="breadcrumb-4030__item">
            <span class="breadcrumb-4030__icon">
                <i class="ri-drop-fill"></i>
            </span>
            <span class="breadcrumb-4030__label">GLACIER</span>
        </a>

        <span class="breadcrumb-4030__separator">
            <i class="ri-arrow-right-s-line"></i>
        </span>

        <span class="breadcrumb-4030__item breadcrumb-4030__item--current">
            <span class="breadcrumb-4030__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4030__label">ICE CORE</span>
            <span class="breadcrumb-4030__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4030-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:26px}
.breadcrumb-4030{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px 12px 10px;overflow:hidden;border:1px solid rgba(125,211,252,.35);border-radius:16px;background:linear-gradient(135deg,#020617 0%,#071d32 46%,#0c4a6e 100%);box-shadow:0 15px 38px rgba(0,0,0,.45),0 0 30px rgba(56,189,248,.1),inset 0 1px 0 rgba(224,242,254,.09);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4030::before{content:"";position:absolute;left:10px;right:10px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#0ea5e9,#67e8f9,#e0f2fe,#60a5fa,transparent);box-shadow:0 0 10px rgba(103,232,249,.58);opacity:.78}
.breadcrumb-4030::after{content:"";position:absolute;left:10%;right:10%;bottom:-12px;height:18px;border-radius:50%;background:rgba(56,189,248,.16);filter:blur(9px);box-shadow:0 0 17px rgba(103,232,249,.16);pointer-events:none}
.breadcrumb-4030__frost{position:absolute;inset:0;background:radial-gradient(circle at 13% 20%,rgba(224,242,254,.08),transparent 16%),radial-gradient(circle at 46% 90%,rgba(103,232,249,.09),transparent 22%),radial-gradient(circle at 83% 24%,rgba(96,165,250,.1),transparent 18%);pointer-events:none}
.breadcrumb-4030__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-65px;width:42px;background:linear-gradient(90deg,transparent,rgba(125,211,252,.06),rgba(240,249,255,.48),rgba(103,232,249,.14),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4030Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4030__ambient{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}
.breadcrumb-4030__ambient--left{left:-38px;top:-38px;width:105px;height:105px;background:rgba(14,165,233,.14)}
.breadcrumb-4030__ambient--right{right:-38px;bottom:-40px;width:110px;height:110px;background:rgba(96,165,250,.13)}
.breadcrumb-4030__icicles{position:absolute;z-index:2;left:18px;right:18px;top:0;height:8px;pointer-events:none}
.breadcrumb-4030__icicles span{position:absolute;top:0;width:6px;background:linear-gradient(180deg,#f0f9ff,#7dd3fc 70%,#38bdf8);clip-path:polygon(0 0,100% 0,50% 100%);filter:drop-shadow(0 0 3px rgba(125,211,252,.5))}
.breadcrumb-4030__icicles span:nth-child(1){left:8%;height:6px}
.breadcrumb-4030__icicles span:nth-child(2){left:27%;height:9px}
.breadcrumb-4030__icicles span:nth-child(3){left:51%;height:5px}
.breadcrumb-4030__icicles span:nth-child(4){left:73%;height:8px}
.breadcrumb-4030__icicles span:nth-child(5){left:92%;height:6px}
.breadcrumb-4030__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#94a3b8;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4030__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(125,211,252,.15),rgba(96,165,250,.04));opacity:0;transition:opacity .22s ease}
.breadcrumb-4030__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#0284c7,#67e8f9,#e0f2fe);box-shadow:0 0 10px rgba(103,232,249,.58);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4030__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(125,211,252,.28);border-radius:8px;background:linear-gradient(145deg,#061523,#0b2940);color:#7dd3fc;box-shadow:inset 0 1px 0 rgba(224,242,254,.06);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4030__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.09em;white-space:nowrap}
.breadcrumb-4030__separator{position:relative;z-index:3;width:18px;height:26px;display:grid;place-items:center;color:#155e75;font-size:15px;animation:breadcrumb4030Arrow 2.4s ease-in-out infinite;transition:color .22s ease,text-shadow .22s ease}
.breadcrumb-4030__separator:nth-of-type(5){animation-delay:.18s}
.breadcrumb-4030__separator:nth-of-type(7){animation-delay:.36s}
.breadcrumb-4030__item[href]:hover{border-color:rgba(125,211,252,.44);background:linear-gradient(135deg,rgba(7,89,133,.62),rgba(30,64,175,.28));color:#f0f9ff;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 18px rgba(56,189,248,.17);transform:translateY(-3px)}
.breadcrumb-4030__item[href]:hover::before{opacity:1}
.breadcrumb-4030__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4030__item[href]:hover .breadcrumb-4030__icon{border-color:#67e8f9;background:linear-gradient(145deg,#7dd3fc,#2563eb);color:#fff;box-shadow:0 6px 16px rgba(56,189,248,.3),0 0 17px rgba(103,232,249,.38);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4030__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4030__item--current{padding-right:26px;border-color:rgba(125,211,252,.46);background:linear-gradient(135deg,rgba(7,89,133,.78),rgba(30,64,175,.36));color:#f0f9ff;box-shadow:inset 0 1px 0 rgba(224,242,254,.05),0 0 18px rgba(56,189,248,.12)}
.breadcrumb-4030__item--current::before{opacity:1}
.breadcrumb-4030__item--current::after{transform:scaleX(1)}
.breadcrumb-4030__item--current .breadcrumb-4030__icon{border-color:#67e8f9;background:linear-gradient(145deg,#7dd3fc,#2563eb);color:#fff;animation:breadcrumb4030CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4030__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #0c4a6e;border-radius:50%;background:#e0f2fe;box-shadow:0 0 0 2px rgba(56,189,248,.58),0 0 11px rgba(224,242,254,.9);transform:translateY(-50%);animation:breadcrumb4030Dot 1.9s ease-in-out infinite}
.breadcrumb-4030:hover .breadcrumb-4030__separator{color:#7dd3fc;text-shadow:0 0 9px rgba(125,211,252,.65)}
.breadcrumb-4030:hover::after{background:rgba(103,232,249,.22);box-shadow:0 0 22px rgba(56,189,248,.24)}
.breadcrumb-4030:hover .breadcrumb-4030__icicles span{filter:drop-shadow(0 0 5px rgba(186,230,253,.8))}
@keyframes breadcrumb4030Shine{0%,68%{left:-65px;opacity:0}72%{opacity:.9}88%{left:calc(100% + 65px);opacity:.9}100%{left:calc(100% + 65px);opacity:0}}
@keyframes breadcrumb4030Arrow{0%,100%{transform:translateX(0);opacity:.42}50%{transform:translateX(3px);opacity:1}}
@keyframes breadcrumb4030CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(56,189,248,.2),0 0 6px rgba(103,232,249,.16)}50%{transform:rotate(4deg) scale(1.08);box-shadow:0 6px 17px rgba(56,189,248,.36),0 0 19px rgba(103,232,249,.42)}}
@keyframes breadcrumb4030Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(56,189,248,.36),0 0 5px rgba(224,242,254,.4)}50%{transform:translateY(-50%) scale(1.24);opacity:1;box-shadow:0 0 0 3px rgba(56,189,248,.48),0 0 15px rgba(224,242,254,1)}}
@media(max-width:620px){.breadcrumb-4030{gap:3px;padding:9px 8px 8px}.breadcrumb-4030__item{padding:7px}.breadcrumb-4030__item--current{padding-right:22px}.breadcrumb-4030__label{font-size:6px}.breadcrumb-4030__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4030__separator{width:12px;font-size:12px}}`,
  },
  {
    id: 4031,
    name: "Element Diamond Prism Motion Breadcrumb",
    preview: (
      <div className="breadcrumb-4031-wrap">
        <nav className="breadcrumb-4031" aria-label="Breadcrumb">
          <span className="breadcrumb-4031__shine"></span>
          <span className="breadcrumb-4031__facets"></span>
          <span className="breadcrumb-4031__ambient breadcrumb-4031__ambient--left"></span>
          <span className="breadcrumb-4031__ambient breadcrumb-4031__ambient--right"></span>

          <span className="breadcrumb-4031__diamond breadcrumb-4031__diamond--left"></span>
          <span className="breadcrumb-4031__diamond breadcrumb-4031__diamond--right"></span>

          <a href="#" className="breadcrumb-4031__item">
            <span className="breadcrumb-4031__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4031__label">HOME</span>
          </a>

          <span className="breadcrumb-4031__separator">
            <span></span>
          </span>

          <a href="#" className="breadcrumb-4031__item">
            <span className="breadcrumb-4031__icon">
              <i className="ri-vip-diamond-fill"></i>
            </span>
            <span className="breadcrumb-4031__label">DIAMOND</span>
          </a>

          <span className="breadcrumb-4031__separator">
            <span></span>
          </span>

          <a href="#" className="breadcrumb-4031__item">
            <span className="breadcrumb-4031__icon">
              <i className="ri-sparkling-2-fill"></i>
            </span>
            <span className="breadcrumb-4031__label">PRISM</span>
          </a>

          <span className="breadcrumb-4031__separator">
            <span></span>
          </span>

          <span className="breadcrumb-4031__item breadcrumb-4031__item--current">
            <span className="breadcrumb-4031__icon">
              <i className="ri-route-fill"></i>
            </span>
            <span className="breadcrumb-4031__label">CROWN JEWEL</span>
            <span className="breadcrumb-4031__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4031-wrap">
    <nav class="breadcrumb-4031" aria-label="Breadcrumb">
        <span class="breadcrumb-4031__shine"></span>
        <span class="breadcrumb-4031__facets"></span>
        <span class="breadcrumb-4031__ambient breadcrumb-4031__ambient--left"></span>
        <span class="breadcrumb-4031__ambient breadcrumb-4031__ambient--right"></span>

        <span class="breadcrumb-4031__diamond breadcrumb-4031__diamond--left"></span>
        <span class="breadcrumb-4031__diamond breadcrumb-4031__diamond--right"></span>

        <a href="#" class="breadcrumb-4031__item">
            <span class="breadcrumb-4031__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4031__label">HOME</span>
        </a>

        <span class="breadcrumb-4031__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4031__item">
            <span class="breadcrumb-4031__icon">
                <i class="ri-vip-diamond-fill"></i>
            </span>
            <span class="breadcrumb-4031__label">DIAMOND</span>
        </a>

        <span class="breadcrumb-4031__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4031__item">
            <span class="breadcrumb-4031__icon">
                <i class="ri-sparkling-2-fill"></i>
            </span>
            <span class="breadcrumb-4031__label">PRISM</span>
        </a>

        <span class="breadcrumb-4031__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4031__item breadcrumb-4031__item--current">
            <span class="breadcrumb-4031__icon">
                <i class="ri-route-fill"></i>
            </span>
            <span class="breadcrumb-4031__label">CROWN JEWEL</span>
            <span class="breadcrumb-4031__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4031-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:28px}
.breadcrumb-4031{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:11px 16px;overflow:visible;border:1px solid rgba(165,243,252,.34);border-radius:16px;background:linear-gradient(135deg,#050814 0%,#0d1730 45%,#19143b 100%);box-shadow:0 16px 40px rgba(0,0,0,.46),0 0 28px rgba(103,232,249,.09),0 0 30px rgba(196,181,253,.08),inset 0 1px 0 rgba(255,255,255,.08);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4031::before{content:"";position:absolute;left:12px;right:12px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,#67e8f9,#fff,#c4b5fd,#60a5fa,transparent);box-shadow:0 0 10px rgba(165,243,252,.56);opacity:.78}
.breadcrumb-4031::after{content:"";position:absolute;left:18%;right:18%;bottom:-9px;height:14px;border-radius:50%;background:rgba(165,243,252,.13);filter:blur(9px);box-shadow:0 0 18px rgba(196,181,253,.16);pointer-events:none}
.breadcrumb-4031__facets{position:absolute;inset:0;overflow:hidden;border-radius:16px;background:linear-gradient(120deg,transparent 0 18%,rgba(255,255,255,.025) 18% 19%,transparent 19% 42%,rgba(103,232,249,.035) 42% 43%,transparent 43% 66%,rgba(196,181,253,.035) 66% 67%,transparent 67%);pointer-events:none}
.breadcrumb-4031__shine{position:absolute;z-index:1;top:-55%;bottom:-55%;left:-68px;width:44px;background:linear-gradient(90deg,transparent,rgba(103,232,249,.08),rgba(255,255,255,.54),rgba(196,181,253,.16),transparent);filter:blur(.2px);transform:rotate(22deg);animation:breadcrumb4031Shine 5s ease-in-out infinite;pointer-events:none}
.breadcrumb-4031__ambient{position:absolute;border-radius:50%;filter:blur(26px);pointer-events:none}
.breadcrumb-4031__ambient--left{left:-42px;top:-38px;width:110px;height:110px;background:rgba(34,211,238,.12)}
.breadcrumb-4031__ambient--right{right:-42px;bottom:-42px;width:115px;height:115px;background:rgba(139,92,246,.12)}
.breadcrumb-4031__diamond{position:absolute;z-index:4;width:17px;height:20px;clip-path:polygon(50% 0,100% 32%,80% 100%,20% 100%,0 32%);background:linear-gradient(135deg,#fff 0%,#cffafe 23%,#67e8f9 46%,#93c5fd 66%,#c4b5fd 84%,#fff 100%);filter:drop-shadow(0 0 6px rgba(165,243,252,.6));pointer-events:none;transition:transform .25s ease,filter .25s ease}
.breadcrumb-4031__diamond--left{left:-8px;bottom:-7px;transform:rotate(-20deg)}
.breadcrumb-4031__diamond--right{right:-8px;top:-8px;transform:rotate(25deg) scale(.88)}
.breadcrumb-4031__item{position:relative;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 9px;border:1px solid transparent;border-radius:11px;color:#a5b4c7;text-decoration:none;transition:transform .22s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,box-shadow .22s ease,color .22s ease}
.breadcrumb-4031__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(103,232,249,.12),rgba(196,181,253,.07));opacity:0;transition:opacity .22s ease}
.breadcrumb-4031__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#67e8f9,#fff,#c4b5fd);box-shadow:0 0 10px rgba(165,243,252,.6);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4031__icon{position:relative;z-index:2;width:28px;height:28px;display:grid;place-items:center;flex:0 0 28px;border:1px solid rgba(165,243,252,.25);border-radius:8px;background:linear-gradient(145deg,#0b1328,#171a3c);color:#a5f3fc;box-shadow:inset 0 1px 0 rgba(255,255,255,.05);font-size:13px;transition:transform .28s cubic-bezier(.2,.9,.2,1),background .22s ease,color .22s ease,border-color .22s ease,box-shadow .22s ease}
.breadcrumb-4031__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.1em;white-space:nowrap}
.breadcrumb-4031__separator{position:relative;z-index:3;width:19px;height:26px;display:grid;place-items:center;animation:breadcrumb4031Separator 2.4s ease-in-out infinite}
.breadcrumb-4031__separator>span{width:7px;height:7px;border:1px solid rgba(165,243,252,.55);background:linear-gradient(135deg,#67e8f9,#fff 48%,#c4b5fd);box-shadow:0 0 7px rgba(165,243,252,.45);transform:rotate(45deg)}
.breadcrumb-4031__separator:nth-of-type(6){animation-delay:.18s}
.breadcrumb-4031__separator:nth-of-type(8){animation-delay:.36s}
.breadcrumb-4031__item[href]:hover{border-color:rgba(165,243,252,.4);background:linear-gradient(135deg,rgba(8,47,73,.58),rgba(49,46,129,.3));color:#fff;box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 18px rgba(103,232,249,.14),0 0 18px rgba(196,181,253,.08);transform:translateY(-3px)}
.breadcrumb-4031__item[href]:hover::before{opacity:1}
.breadcrumb-4031__item[href]:hover::after{transform:scaleX(1)}
.breadcrumb-4031__item[href]:hover .breadcrumb-4031__icon{border-color:#a5f3fc;background:linear-gradient(145deg,#67e8f9,#818cf8);color:#fff;box-shadow:0 6px 16px rgba(103,232,249,.28),0 0 18px rgba(196,181,253,.32);transform:translateY(-2px) rotate(-7deg) scale(1.08)}
.breadcrumb-4031__item[href]:active{transform:translateY(0) scale(.98)}
.breadcrumb-4031__item--current{padding-right:26px;border-color:rgba(165,243,252,.44);background:linear-gradient(135deg,rgba(8,47,73,.68),rgba(49,46,129,.42));color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 0 18px rgba(103,232,249,.1)}
.breadcrumb-4031__item--current::before{opacity:1}
.breadcrumb-4031__item--current::after{transform:scaleX(1)}
.breadcrumb-4031__item--current .breadcrumb-4031__icon{border-color:#a5f3fc;background:linear-gradient(145deg,#67e8f9,#818cf8);color:#fff;animation:breadcrumb4031CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4031__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border:2px solid #172554;border-radius:50%;background:#fff;box-shadow:0 0 0 2px rgba(103,232,249,.5),0 0 11px rgba(255,255,255,.9),0 0 16px rgba(196,181,253,.45);transform:translateY(-50%);animation:breadcrumb4031Dot 1.9s ease-in-out infinite}
.breadcrumb-4031:hover .breadcrumb-4031__diamond--left{transform:translateY(-4px) rotate(-27deg) scale(1.08)}
.breadcrumb-4031:hover .breadcrumb-4031__diamond--right{transform:translateY(-3px) rotate(34deg) scale(.96)}
.breadcrumb-4031:hover .breadcrumb-4031__diamond{filter:drop-shadow(0 0 9px rgba(165,243,252,.9))}
@keyframes breadcrumb4031Shine{0%,68%{left:-68px;opacity:0}72%{opacity:.95}88%{left:calc(100% + 68px);opacity:.95}100%{left:calc(100% + 68px);opacity:0}}
@keyframes breadcrumb4031Separator{0%,100%{transform:translateX(0) rotate(0);opacity:.5}50%{transform:translateX(3px) rotate(90deg);opacity:1}}
@keyframes breadcrumb4031CurrentIcon{0%,100%{transform:rotate(0) scale(1);box-shadow:0 3px 10px rgba(103,232,249,.18),0 0 6px rgba(196,181,253,.12)}50%{transform:rotate(4deg) scale(1.08);box-shadow:0 6px 17px rgba(103,232,249,.34),0 0 19px rgba(196,181,253,.4)}}
@keyframes breadcrumb4031Dot{0%,100%{transform:translateY(-50%) scale(.8);opacity:.55;box-shadow:0 0 0 2px rgba(103,232,249,.3),0 0 6px rgba(255,255,255,.4)}50%{transform:translateY(-50%) scale(1.24);opacity:1;box-shadow:0 0 0 3px rgba(103,232,249,.45),0 0 15px rgba(255,255,255,1),0 0 20px rgba(196,181,253,.55)}}
@media(max-width:620px){.breadcrumb-4031{gap:3px;padding:9px 8px}.breadcrumb-4031__item{padding:7px}.breadcrumb-4031__item--current{padding-right:22px}.breadcrumb-4031__label{font-size:6px}.breadcrumb-4031__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4031__separator{width:12px}.breadcrumb-4031__diamond{display:none}}`,
  },
  {
    id: 4032,
    name: "Dark Diamond Prism Breadcrumb",
    preview: (
      <div className="breadcrumb-4032-wrap">
        <nav className="breadcrumb-4032" aria-label="Breadcrumb">
          <span className="breadcrumb-4032__shine"></span>
          <span className="breadcrumb-4032__facets"></span>
          <span className="breadcrumb-4032__glow breadcrumb-4032__glow--left"></span>
          <span className="breadcrumb-4032__glow breadcrumb-4032__glow--right"></span>

          <a href="#" className="breadcrumb-4032__item">
            <span className="breadcrumb-4032__icon">
              <i className="ri-home-5-fill"></i>
            </span>
            <span className="breadcrumb-4032__label">HOME</span>
          </a>

          <span className="breadcrumb-4032__separator">
            <span></span>
          </span>

          <a href="#" className="breadcrumb-4032__item">
            <span className="breadcrumb-4032__icon">
              <i className="ri-vip-diamond-fill"></i>
            </span>
            <span className="breadcrumb-4032__label">DIAMOND</span>
          </a>

          <span className="breadcrumb-4032__separator">
            <span></span>
          </span>

          <a href="#" className="breadcrumb-4032__item">
            <span className="breadcrumb-4032__icon">
              <i className="ri-flashlight-fill"></i>
            </span>
            <span className="breadcrumb-4032__label">FROST</span>
          </a>

          <span className="breadcrumb-4032__separator">
            <span></span>
          </span>

          <span className="breadcrumb-4032__item breadcrumb-4032__item--current">
            <span className="breadcrumb-4032__icon">
              <i className="ri-star-smile-fill"></i>
            </span>
            <span className="breadcrumb-4032__label">BLACK PRISM</span>
            <span className="breadcrumb-4032__dot"></span>
          </span>
        </nav>
      </div>
    ),
    html: `<div class="breadcrumb-4032-wrap">
    <nav class="breadcrumb-4032" aria-label="Breadcrumb">
        <span class="breadcrumb-4032__shine"></span>
        <span class="breadcrumb-4032__facets"></span>
        <span class="breadcrumb-4032__glow breadcrumb-4032__glow--left"></span>
        <span class="breadcrumb-4032__glow breadcrumb-4032__glow--right"></span>

        <a href="#" class="breadcrumb-4032__item">
            <span class="breadcrumb-4032__icon">
                <i class="ri-home-5-fill"></i>
            </span>
            <span class="breadcrumb-4032__label">HOME</span>
        </a>

        <span class="breadcrumb-4032__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4032__item">
            <span class="breadcrumb-4032__icon">
                <i class="ri-vip-diamond-fill"></i>
            </span>
            <span class="breadcrumb-4032__label">DIAMOND</span>
        </a>

        <span class="breadcrumb-4032__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4032__item">
            <span class="breadcrumb-4032__icon">
                <i class="ri-flashlight-fill"></i>
            </span>
            <span class="breadcrumb-4032__label">FROST</span>
        </a>

        <span class="breadcrumb-4032__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4032__item breadcrumb-4032__item--current">
            <span class="breadcrumb-4032__icon">
                <i class="ri-star-smile-fill"></i>
            </span>
            <span class="breadcrumb-4032__label">BLACK PRISM</span>
            <span class="breadcrumb-4032__dot"></span>
        </span>
    </nav>
</div>`,
    css: `.breadcrumb-4032-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:28px}
.breadcrumb-4032{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px;overflow:hidden;border:1px solid rgba(125,211,252,.22);border-radius:18px;background:linear-gradient(135deg,rgba(2,6,23,.96),rgba(6,11,26,.94),rgba(10,14,28,.96));box-shadow:0 18px 44px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.03) inset,0 0 26px rgba(56,189,248,.08),0 0 34px rgba(96,165,250,.08);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);font-family:Arial,Helvetica,sans-serif}
.breadcrumb-4032::before{content:"";position:absolute;inset:1px;border-radius:17px;background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,0) 30%,rgba(56,189,248,.04) 60%,rgba(255,255,255,.02));pointer-events:none}
.breadcrumb-4032::after{content:"";position:absolute;left:16px;right:16px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,rgba(186,230,253,.85),rgba(255,255,255,.9),rgba(96,165,250,.85),transparent);box-shadow:0 0 12px rgba(125,211,252,.45);opacity:.9}
.breadcrumb-4032__facets{position:absolute;inset:0;border-radius:18px;background:linear-gradient(125deg,transparent 0 14%,rgba(255,255,255,.03) 14% 15%,transparent 15% 32%,rgba(125,211,252,.045) 32% 33%,transparent 33% 48%,rgba(255,255,255,.025) 48% 49%,transparent 49% 64%,rgba(96,165,250,.05) 64% 65%,transparent 65% 79%,rgba(255,255,255,.02) 79% 80%,transparent 80%);pointer-events:none}
.breadcrumb-4032__shine{position:absolute;top:-60%;bottom:-60%;left:-80px;width:42px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.04),rgba(255,255,255,.45),rgba(125,211,252,.22),transparent);transform:rotate(22deg);filter:blur(.4px);animation:breadcrumb4032Shine 4.8s ease-in-out infinite;pointer-events:none}
.breadcrumb-4032__glow{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}
.breadcrumb-4032__glow--left{left:-40px;top:-34px;width:110px;height:110px;background:rgba(34,211,238,.09)}
.breadcrumb-4032__glow--right{right:-40px;bottom:-36px;width:110px;height:110px;background:rgba(59,130,246,.1)}
.breadcrumb-4032__item{position:relative;z-index:2;display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid transparent;border-radius:11px;color:#b6c4d6;text-decoration:none;transition:transform .24s cubic-bezier(.2,.8,.2,1),background .24s ease,border-color .24s ease,box-shadow .24s ease,color .24s ease}
.breadcrumb-4032__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(56,189,248,.08));opacity:0;transition:opacity .24s ease}
.breadcrumb-4032__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#7dd3fc,#ffffff,#60a5fa);box-shadow:0 0 10px rgba(125,211,252,.6);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}
.breadcrumb-4032__icon{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;flex:0 0 29px;border:1px solid rgba(125,211,252,.2);border-radius:8px;background:linear-gradient(145deg,rgba(15,23,42,.95),rgba(18,28,46,.95));box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 0 0 1px rgba(255,255,255,.015);color:#bae6fd;font-size:13px;transition:transform .26s ease,background .24s ease,color .24s ease,border-color .24s ease,box-shadow .24s ease}
.breadcrumb-4032__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.12em;white-space:nowrap}
.breadcrumb-4032__separator{position:relative;z-index:2;width:18px;height:26px;display:grid;place-items:center;animation:breadcrumb4032Separator 2.5s ease-in-out infinite}
.breadcrumb-4032__separator span{display:block;width:8px;height:8px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:linear-gradient(135deg,#f8fdff,#7dd3fc 45%,#60a5fa 75%,#dbeafe);border:1px solid rgba(255,255,255,.3);box-shadow:0 0 8px rgba(125,211,252,.45)}
.breadcrumb-4032__item:hover{transform:translateY(-3px);border-color:rgba(125,211,252,.32);background:linear-gradient(135deg,rgba(15,23,42,.88),rgba(8,47,73,.56));color:#ffffff;box-shadow:0 10px 24px rgba(0,0,0,.34),0 0 18px rgba(56,189,248,.11)}
.breadcrumb-4032__item:hover::before{opacity:1}
.breadcrumb-4032__item:hover::after{transform:scaleX(1)}
.breadcrumb-4032__item:hover .breadcrumb-4032__icon{transform:translateY(-2px) rotate(-8deg) scale(1.08);border-color:rgba(186,230,253,.55);background:linear-gradient(145deg,#0f172a,#0c4a6e);color:#ffffff;box-shadow:0 8px 18px rgba(56,189,248,.18),0 0 18px rgba(125,211,252,.28),inset 0 1px 0 rgba(255,255,255,.09)}
.breadcrumb-4032__item--current{padding-right:25px;border-color:rgba(125,211,252,.34);background:linear-gradient(135deg,rgba(12,20,36,.92),rgba(8,47,73,.58));color:#ffffff;box-shadow:0 0 18px rgba(56,189,248,.08),inset 0 1px 0 rgba(255,255,255,.04)}
.breadcrumb-4032__item--current::before{opacity:1}
.breadcrumb-4032__item--current::after{transform:scaleX(1)}
.breadcrumb-4032__item--current .breadcrumb-4032__icon{border-color:rgba(186,230,253,.6);background:linear-gradient(145deg,#082f49,#0f172a);color:#e0f2fe;box-shadow:0 0 16px rgba(125,211,252,.24),inset 0 1px 0 rgba(255,255,255,.1);animation:breadcrumb4032CurrentIcon 3s ease-in-out infinite}
.breadcrumb-4032__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border-radius:50%;background:#f8fdff;border:2px solid #0f172a;box-shadow:0 0 0 2px rgba(125,211,252,.38),0 0 10px rgba(255,255,255,.9),0 0 18px rgba(125,211,252,.55);transform:translateY(-50%);animation:breadcrumb4032Dot 1.9s ease-in-out infinite}
@keyframes breadcrumb4032Shine{0%,68%{left:-80px;opacity:0}74%{opacity:.95}90%{left:calc(100% + 80px);opacity:.95}100%{left:calc(100% + 80px);opacity:0}}
@keyframes breadcrumb4032Separator{0%,100%{transform:translateX(0) scale(.9);opacity:.55}50%{transform:translateX(3px) scale(1.05);opacity:1}}
@keyframes breadcrumb4032CurrentIcon{0%,100%{transform:scale(1);box-shadow:0 0 10px rgba(125,211,252,.18),inset 0 1px 0 rgba(255,255,255,.08)}50%{transform:scale(1.08);box-shadow:0 0 20px rgba(125,211,252,.34),0 0 28px rgba(56,189,248,.18),inset 0 1px 0 rgba(255,255,255,.12)}}
@keyframes breadcrumb4032Dot{0%,100%{transform:translateY(-50%) scale(.82);opacity:.65}50%{transform:translateY(-50%) scale(1.22);opacity:1}}
@media(max-width:620px){.breadcrumb-4032{gap:4px;padding:9px 8px}.breadcrumb-4032__item{padding:7px}.breadcrumb-4032__item--current{padding-right:22px}.breadcrumb-4032__label{font-size:6px}.breadcrumb-4032__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4032__separator{width:12px}}
`,
  },{
  id: 4033,
  name: "Fire Diamond Breadcrumb",
  preview: (
    <div className="breadcrumb-4033-wrap">
      <nav className="breadcrumb-4033" aria-label="Breadcrumb">
        <span className="breadcrumb-4033__shine"></span>
        <span className="breadcrumb-4033__facets"></span>
        <span className="breadcrumb-4033__flame breadcrumb-4033__flame--1"></span>
        <span className="breadcrumb-4033__flame breadcrumb-4033__flame--2"></span>

        <a href="#" className="breadcrumb-4033__item">
          <span className="breadcrumb-4033__icon">
            <i className="ri-fire-fill"></i>
          </span>
          <span className="breadcrumb-4033__label">EMBER</span>
        </a>

        <span className="breadcrumb-4033__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4033__item">
          <span className="breadcrumb-4033__icon">
            <i className="ri-vip-diamond-fill"></i>
          </span>
          <span className="breadcrumb-4033__label">PRISM</span>
        </a>

        <span className="breadcrumb-4033__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4033__item">
          <span className="breadcrumb-4033__icon">
            <i className="ri-flashlight-fill"></i>
          </span>
          <span className="breadcrumb-4033__label">SPARK</span>
        </a>

        <span className="breadcrumb-4033__separator">
          <span></span>
        </span>

        <span className="breadcrumb-4033__item breadcrumb-4033__item--current">
          <span className="breadcrumb-4033__icon">
            <i className="ri-star-fire-fill"></i>
          </span>
          <span className="breadcrumb-4033__label">FIRE DIAMOND</span>
          <span className="breadcrumb-4033__dot"></span>
        </span>
      </nav>
    </div>
  ),
  html: `<div class="breadcrumb-4033-wrap">
    <nav class="breadcrumb-4033" aria-label="Breadcrumb">
        <span class="breadcrumb-4033__shine"></span>
        <span class="breadcrumb-4033__facets"></span>
        <span class="breadcrumb-4033__flame breadcrumb-4033__flame--1"></span>
        <span class="breadcrumb-4033__flame breadcrumb-4033__flame--2"></span>

        <a href="#" class="breadcrumb-4033__item">
            <span class="breadcrumb-4033__icon">
                <i class="ri-fire-fill"></i>
            </span>
            <span class="breadcrumb-4033__label">EMBER</span>
        </a>

        <span class="breadcrumb-4033__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4033__item">
            <span class="breadcrumb-4033__icon">
                <i class="ri-vip-diamond-fill"></i>
            </span>
            <span class="breadcrumb-4033__label">PRISM</span>
        </a>

        <span class="breadcrumb-4033__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4033__item">
            <span class="breadcrumb-4033__icon">
                <i class="ri-flashlight-fill"></i>
            </span>
            <span class="breadcrumb-4033__label">SPARK</span>
        </a>

        <span class="breadcrumb-4033__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4033__item breadcrumb-4033__item--current">
            <span class="breadcrumb-4033__icon">
                <i class="ri-star-fire-fill"></i>
            </span>
            <span class="breadcrumb-4033__label">FIRE DIAMOND</span>
            <span class="breadcrumb-4033__dot"></span>
        </span>
    </nav>
</div>`,
  css: `.breadcrumb-4033-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:28px}.breadcrumb-4033{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px;overflow:hidden;border:1px solid rgba(251,146,60,.28);border-radius:18px;background:linear-gradient(135deg,rgba(28,7,4,.98),rgba(60,18,8,.95),rgba(120,31,9,.92));box-shadow:0 18px 42px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.03) inset,0 0 24px rgba(249,115,22,.14),0 0 38px rgba(239,68,68,.12);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4033::before{content:"";position:absolute;inset:1px;border-radius:17px;background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,0) 32%,rgba(251,146,60,.06) 62%,rgba(255,255,255,.025));pointer-events:none}.breadcrumb-4033::after{content:"";position:absolute;left:16px;right:16px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,237,213,.85),rgba(251,146,60,.95),rgba(239,68,68,.9),transparent);box-shadow:0 0 14px rgba(251,146,60,.6);opacity:.95}.breadcrumb-4033__facets{position:absolute;inset:0;border-radius:18px;background:linear-gradient(126deg,transparent 0 14%,rgba(255,255,255,.035) 14% 15%,transparent 15% 30%,rgba(253,186,116,.05) 30% 31%,transparent 31% 48%,rgba(255,255,255,.03) 48% 49%,transparent 49% 64%,rgba(248,113,113,.055) 64% 65%,transparent 65% 81%,rgba(255,255,255,.02) 81% 82%,transparent 82%);pointer-events:none}.breadcrumb-4033__shine{position:absolute;top:-65%;bottom:-65%;left:-90px;width:44px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.04),rgba(255,244,214,.42),rgba(251,146,60,.24),transparent);transform:rotate(22deg);animation:breadcrumb4033Shine 4.6s ease-in-out infinite;pointer-events:none}.breadcrumb-4033__flame{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}.breadcrumb-4033__flame--1{left:-28px;top:-26px;width:92px;height:92px;background:rgba(249,115,22,.14)}.breadcrumb-4033__flame--2{right:-26px;bottom:-28px;width:104px;height:104px;background:rgba(239,68,68,.15)}.breadcrumb-4033__item{position:relative;z-index:2;display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid transparent;border-radius:11px;color:#fed7aa;text-decoration:none;transition:transform .24s cubic-bezier(.2,.8,.2,1),background .24s ease,border-color .24s ease,box-shadow .24s ease,color .24s ease}.breadcrumb-4033__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(251,146,60,.12));opacity:0;transition:opacity .24s ease}.breadcrumb-4033__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#fb923c,#fff7ed,#ef4444);box-shadow:0 0 10px rgba(251,146,60,.65);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}.breadcrumb-4033__icon{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;flex:0 0 29px;border:1px solid rgba(251,146,60,.26);border-radius:8px;background:linear-gradient(145deg,rgba(67,20,7,.96),rgba(124,45,18,.92));box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 0 0 1px rgba(255,255,255,.02);color:#fdba74;font-size:13px;transition:transform .26s ease,background .24s ease,color .24s ease,border-color .24s ease,box-shadow .24s ease}.breadcrumb-4033__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.13em;white-space:nowrap}.breadcrumb-4033__separator{position:relative;z-index:2;width:18px;height:26px;display:grid;place-items:center;animation:breadcrumb4033Separator 2.4s ease-in-out infinite}.breadcrumb-4033__separator span{display:block;width:8px;height:8px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:linear-gradient(135deg,#fff7ed,#fdba74 45%,#fb923c 72%,#ef4444);border:1px solid rgba(255,255,255,.26);box-shadow:0 0 8px rgba(251,146,60,.48)}.breadcrumb-4033__item:hover{transform:translateY(-3px);border-color:rgba(251,146,60,.32);background:linear-gradient(135deg,rgba(67,20,7,.9),rgba(120,31,9,.54));color:#ffffff;box-shadow:0 10px 24px rgba(0,0,0,.32),0 0 18px rgba(251,146,60,.14)}.breadcrumb-4033__item:hover::before{opacity:1}.breadcrumb-4033__item:hover::after{transform:scaleX(1)}.breadcrumb-4033__item:hover .breadcrumb-4033__icon{transform:translateY(-2px) rotate(-8deg) scale(1.08);border-color:rgba(255,237,213,.55);background:linear-gradient(145deg,#7c2d12,#ea580c);color:#fff;box-shadow:0 8px 18px rgba(249,115,22,.18),0 0 18px rgba(251,146,60,.28),inset 0 1px 0 rgba(255,255,255,.09)}.breadcrumb-4033__item--current{padding-right:25px;border-color:rgba(251,146,60,.34);background:linear-gradient(135deg,rgba(67,20,7,.92),rgba(120,31,9,.58));color:#ffffff;box-shadow:0 0 18px rgba(251,146,60,.09),inset 0 1px 0 rgba(255,255,255,.04)}.breadcrumb-4033__item--current::before{opacity:1}.breadcrumb-4033__item--current::after{transform:scaleX(1)}.breadcrumb-4033__item--current .breadcrumb-4033__icon{border-color:rgba(255,237,213,.62);background:linear-gradient(145deg,#9a3412,#7c2d12);color:#fff7ed;box-shadow:0 0 16px rgba(251,146,60,.24),inset 0 1px 0 rgba(255,255,255,.1);animation:breadcrumb4033CurrentIcon 3s ease-in-out infinite}.breadcrumb-4033__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border-radius:50%;background:#fff7ed;border:2px solid #431407;box-shadow:0 0 0 2px rgba(251,146,60,.42),0 0 10px rgba(255,255,255,.7),0 0 18px rgba(249,115,22,.6);transform:translateY(-50%);animation:breadcrumb4033Dot 1.8s ease-in-out infinite}@keyframes breadcrumb4033Shine{0%,68%{left:-90px;opacity:0}74%{opacity:.95}90%{left:calc(100% + 90px);opacity:.95}100%{left:calc(100% + 90px);opacity:0}}@keyframes breadcrumb4033Separator{0%,100%{transform:translateX(0) scale(.9);opacity:.6}50%{transform:translateX(3px) scale(1.05);opacity:1}}@keyframes breadcrumb4033CurrentIcon{0%,100%{transform:scale(1);box-shadow:0 0 10px rgba(251,146,60,.18),inset 0 1px 0 rgba(255,255,255,.08)}50%{transform:scale(1.08);box-shadow:0 0 18px rgba(251,146,60,.32),0 0 28px rgba(239,68,68,.16),inset 0 1px 0 rgba(255,255,255,.12)}}@keyframes breadcrumb4033Dot{0%,100%{transform:translateY(-50%) scale(.82);opacity:.65}50%{transform:translateY(-50%) scale(1.2);opacity:1}}@media(max-width:620px){.breadcrumb-4033{gap:4px;padding:9px 8px}.breadcrumb-4033__item{padding:7px}.breadcrumb-4033__item--current{padding-right:22px}.breadcrumb-4033__label{font-size:6px}.breadcrumb-4033__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4033__separator{width:12px}}`,
},
{
  id: 4034,
  name: "Emerald Luxury Breadcrumb",
  preview: (
    <div className="breadcrumb-4034-wrap">
      <nav className="breadcrumb-4034" aria-label="Breadcrumb">
        <span className="breadcrumb-4034__shine"></span>
        <span className="breadcrumb-4034__facets"></span>
        <span className="breadcrumb-4034__glow breadcrumb-4034__glow--left"></span>
        <span className="breadcrumb-4034__glow breadcrumb-4034__glow--right"></span>

        <a href="#" className="breadcrumb-4034__item">
          <span className="breadcrumb-4034__icon">
            <i className="ri-building-4-fill"></i>
          </span>
          <span className="breadcrumb-4034__label">ESTATE</span>
        </a>

        <span className="breadcrumb-4034__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4034__item">
          <span className="breadcrumb-4034__icon">
            <i className="ri-vip-crown-2-fill"></i>
          </span>
          <span className="breadcrumb-4034__label">LUXURY</span>
        </a>

        <span className="breadcrumb-4034__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4034__item">
          <span className="breadcrumb-4034__icon">
            <i className="ri-bank-card-fill"></i>
          </span>
          <span className="breadcrumb-4034__label">SIGNATURE</span>
        </a>

        <span className="breadcrumb-4034__separator">
          <span></span>
        </span>

        <span className="breadcrumb-4034__item breadcrumb-4034__item--current">
          <span className="breadcrumb-4034__icon">
            <i className="ri-gemini-fill"></i>
          </span>
          <span className="breadcrumb-4034__label">EMERALD</span>
          <span className="breadcrumb-4034__dot"></span>
        </span>
      </nav>
    </div>
  ),
  html: `<div class="breadcrumb-4034-wrap">
    <nav class="breadcrumb-4034" aria-label="Breadcrumb">
        <span class="breadcrumb-4034__shine"></span>
        <span class="breadcrumb-4034__facets"></span>
        <span class="breadcrumb-4034__glow breadcrumb-4034__glow--left"></span>
        <span class="breadcrumb-4034__glow breadcrumb-4034__glow--right"></span>

        <a href="#" class="breadcrumb-4034__item">
            <span class="breadcrumb-4034__icon">
                <i class="ri-building-4-fill"></i>
            </span>
            <span class="breadcrumb-4034__label">ESTATE</span>
        </a>

        <span class="breadcrumb-4034__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4034__item">
            <span class="breadcrumb-4034__icon">
                <i class="ri-vip-crown-2-fill"></i>
            </span>
            <span class="breadcrumb-4034__label">LUXURY</span>
        </a>

        <span class="breadcrumb-4034__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4034__item">
            <span class="breadcrumb-4034__icon">
                <i class="ri-bank-card-fill"></i>
            </span>
            <span class="breadcrumb-4034__label">SIGNATURE</span>
        </a>

        <span class="breadcrumb-4034__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4034__item breadcrumb-4034__item--current">
            <span class="breadcrumb-4034__icon">
                <i class="ri-gemini-fill"></i>
            </span>
            <span class="breadcrumb-4034__label">EMERALD</span>
            <span class="breadcrumb-4034__dot"></span>
        </span>
    </nav>
</div>`,
  css: `.breadcrumb-4034-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:28px}.breadcrumb-4034{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px;overflow:hidden;border:1px solid rgba(110,231,183,.28);border-radius:18px;background:linear-gradient(135deg,rgba(2,28,20,.97),rgba(4,47,46,.95),rgba(5,83,59,.92));box-shadow:0 18px 42px rgba(0,0,0,.44),0 0 0 1px rgba(255,255,255,.03) inset,0 0 26px rgba(16,185,129,.11),0 0 34px rgba(251,191,36,.08);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);font-family:Georgia,"Times New Roman",serif}.breadcrumb-4034::before{content:"";position:absolute;inset:1px;border-radius:17px;background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,0) 35%,rgba(110,231,183,.05) 62%,rgba(255,255,255,.02));pointer-events:none}.breadcrumb-4034::after{content:"";position:absolute;left:16px;right:16px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,rgba(236,253,245,.88),rgba(52,211,153,.95),rgba(251,191,36,.85),transparent);box-shadow:0 0 14px rgba(16,185,129,.42);opacity:.95}.breadcrumb-4034__facets{position:absolute;inset:0;border-radius:18px;background:linear-gradient(126deg,transparent 0 12%,rgba(255,255,255,.03) 12% 13%,transparent 13% 28%,rgba(110,231,183,.05) 28% 29%,transparent 29% 46%,rgba(255,255,255,.025) 46% 47%,transparent 47% 63%,rgba(251,191,36,.04) 63% 64%,transparent 64% 79%,rgba(255,255,255,.018) 79% 80%,transparent 80%);pointer-events:none}.breadcrumb-4034__shine{position:absolute;top:-65%;bottom:-65%;left:-90px;width:44px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.04),rgba(236,253,245,.42),rgba(110,231,183,.22),transparent);transform:rotate(22deg);animation:breadcrumb4034Shine 4.9s ease-in-out infinite;pointer-events:none}.breadcrumb-4034__glow{position:absolute;border-radius:50%;filter:blur(24px);pointer-events:none}.breadcrumb-4034__glow--left{left:-32px;top:-30px;width:96px;height:96px;background:rgba(16,185,129,.1)}.breadcrumb-4034__glow--right{right:-30px;bottom:-30px;width:100px;height:100px;background:rgba(251,191,36,.08)}.breadcrumb-4034__item{position:relative;z-index:2;display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid transparent;border-radius:11px;color:#d1fae5;text-decoration:none;transition:transform .24s cubic-bezier(.2,.8,.2,1),background .24s ease,border-color .24s ease,box-shadow .24s ease,color .24s ease}.breadcrumb-4034__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(16,185,129,.1));opacity:0;transition:opacity .24s ease}.breadcrumb-4034__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#6ee7b7,#ecfdf5,#fbbf24);box-shadow:0 0 10px rgba(110,231,183,.55);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}.breadcrumb-4034__icon{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;flex:0 0 29px;border:1px solid rgba(110,231,183,.24);border-radius:8px;background:linear-gradient(145deg,rgba(6,46,35,.96),rgba(4,78,59,.92));box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 0 0 1px rgba(255,255,255,.02);color:#fef3c7;font-size:13px;transition:transform .26s ease,background .24s ease,color .24s ease,border-color .24s ease,box-shadow .24s ease}.breadcrumb-4034__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.14em;white-space:nowrap}.breadcrumb-4034__separator{position:relative;z-index:2;width:18px;height:26px;display:grid;place-items:center;animation:breadcrumb4034Separator 2.5s ease-in-out infinite}.breadcrumb-4034__separator span{display:block;width:8px;height:8px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:linear-gradient(135deg,#ecfdf5,#6ee7b7 45%,#10b981 72%,#fbbf24);border:1px solid rgba(255,255,255,.24);box-shadow:0 0 8px rgba(16,185,129,.4)}.breadcrumb-4034__item:hover{transform:translateY(-3px);border-color:rgba(110,231,183,.3);background:linear-gradient(135deg,rgba(6,46,35,.92),rgba(5,83,59,.54));color:#ffffff;box-shadow:0 10px 24px rgba(0,0,0,.32),0 0 18px rgba(16,185,129,.12)}.breadcrumb-4034__item:hover::before{opacity:1}.breadcrumb-4034__item:hover::after{transform:scaleX(1)}.breadcrumb-4034__item:hover .breadcrumb-4034__icon{transform:translateY(-2px) rotate(-8deg) scale(1.08);border-color:rgba(236,253,245,.58);background:linear-gradient(145deg,#065f46,#047857);color:#fff7d6;box-shadow:0 8px 18px rgba(16,185,129,.18),0 0 18px rgba(110,231,183,.22),inset 0 1px 0 rgba(255,255,255,.09)}.breadcrumb-4034__item--current{padding-right:25px;border-color:rgba(110,231,183,.32);background:linear-gradient(135deg,rgba(6,46,35,.94),rgba(5,83,59,.6));color:#ffffff;box-shadow:0 0 18px rgba(16,185,129,.08),inset 0 1px 0 rgba(255,255,255,.04)}.breadcrumb-4034__item--current::before{opacity:1}.breadcrumb-4034__item--current::after{transform:scaleX(1)}.breadcrumb-4034__item--current .breadcrumb-4034__icon{border-color:rgba(236,253,245,.64);background:linear-gradient(145deg,#047857,#065f46);color:#fff7d6;box-shadow:0 0 16px rgba(16,185,129,.22),inset 0 1px 0 rgba(255,255,255,.1);animation:breadcrumb4034CurrentIcon 3.1s ease-in-out infinite}.breadcrumb-4034__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border-radius:50%;background:#fefce8;border:2px solid #052e2b;box-shadow:0 0 0 2px rgba(110,231,183,.38),0 0 10px rgba(255,255,255,.7),0 0 18px rgba(16,185,129,.45);transform:translateY(-50%);animation:breadcrumb4034Dot 1.9s ease-in-out infinite}@keyframes breadcrumb4034Shine{0%,68%{left:-90px;opacity:0}74%{opacity:.95}90%{left:calc(100% + 90px);opacity:.95}100%{left:calc(100% + 90px);opacity:0}}@keyframes breadcrumb4034Separator{0%,100%{transform:translateX(0) scale(.9);opacity:.58}50%{transform:translateX(3px) scale(1.05);opacity:1}}@keyframes breadcrumb4034CurrentIcon{0%,100%{transform:scale(1);box-shadow:0 0 10px rgba(16,185,129,.16),inset 0 1px 0 rgba(255,255,255,.08)}50%{transform:scale(1.08);box-shadow:0 0 18px rgba(16,185,129,.3),0 0 28px rgba(251,191,36,.14),inset 0 1px 0 rgba(255,255,255,.12)}}@keyframes breadcrumb4034Dot{0%,100%{transform:translateY(-50%) scale(.82);opacity:.65}50%{transform:translateY(-50%) scale(1.22);opacity:1}}@media(max-width:620px){.breadcrumb-4034{gap:4px;padding:9px 8px}.breadcrumb-4034__item{padding:7px}.breadcrumb-4034__item--current{padding-right:22px}.breadcrumb-4034__label{font-size:6px}.breadcrumb-4034__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4034__separator{width:12px}}`,
},
{
  id: 4035,
  name: "Void Dark Matter Breadcrumb",
  preview: (
    <div className="breadcrumb-4035-wrap">
      <nav className="breadcrumb-4035" aria-label="Breadcrumb">
        <span className="breadcrumb-4035__nebula"></span>
        <span className="breadcrumb-4035__grid"></span>
        <span className="breadcrumb-4035__ring breadcrumb-4035__ring--1"></span>
        <span className="breadcrumb-4035__ring breadcrumb-4035__ring--2"></span>

        <a href="#" className="breadcrumb-4035__item">
          <span className="breadcrumb-4035__icon">
            <i className="ri-planet-fill"></i>
          </span>
          <span className="breadcrumb-4035__label">VOID</span>
        </a>

        <span className="breadcrumb-4035__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4035__item">
          <span className="breadcrumb-4035__icon">
            <i className="ri-moon-clear-fill"></i>
          </span>
          <span className="breadcrumb-4035__label">ORBIT</span>
        </a>

        <span className="breadcrumb-4035__separator">
          <span></span>
        </span>

        <a href="#" className="breadcrumb-4035__item">
          <span className="breadcrumb-4035__icon">
            <i className="ri-sparkling-2-fill"></i>
          </span>
          <span className="breadcrumb-4035__label">NEBULA</span>
        </a>

        <span className="breadcrumb-4035__separator">
          <span></span>
        </span>

        <span className="breadcrumb-4035__item breadcrumb-4035__item--current">
          <span className="breadcrumb-4035__icon">
            <i className="ri-focus-2-fill"></i>
          </span>
          <span className="breadcrumb-4035__label">DARK MATTER</span>
          <span className="breadcrumb-4035__dot"></span>
        </span>
      </nav>
    </div>
  ),
  html: `<div class="breadcrumb-4035-wrap">
    <nav class="breadcrumb-4035" aria-label="Breadcrumb">
        <span class="breadcrumb-4035__nebula"></span>
        <span class="breadcrumb-4035__grid"></span>
        <span class="breadcrumb-4035__ring breadcrumb-4035__ring--1"></span>
        <span class="breadcrumb-4035__ring breadcrumb-4035__ring--2"></span>

        <a href="#" class="breadcrumb-4035__item">
            <span class="breadcrumb-4035__icon">
                <i class="ri-planet-fill"></i>
            </span>
            <span class="breadcrumb-4035__label">VOID</span>
        </a>

        <span class="breadcrumb-4035__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4035__item">
            <span class="breadcrumb-4035__icon">
                <i class="ri-moon-clear-fill"></i>
            </span>
            <span class="breadcrumb-4035__label">ORBIT</span>
        </a>

        <span class="breadcrumb-4035__separator">
            <span></span>
        </span>

        <a href="#" class="breadcrumb-4035__item">
            <span class="breadcrumb-4035__icon">
                <i class="ri-sparkling-2-fill"></i>
            </span>
            <span class="breadcrumb-4035__label">NEBULA</span>
        </a>

        <span class="breadcrumb-4035__separator">
            <span></span>
        </span>

        <span class="breadcrumb-4035__item breadcrumb-4035__item--current">
            <span class="breadcrumb-4035__icon">
                <i class="ri-focus-2-fill"></i>
            </span>
            <span class="breadcrumb-4035__label">DARK MATTER</span>
            <span class="breadcrumb-4035__dot"></span>
        </span>
    </nav>
</div>`,
  css: `.breadcrumb-4035-wrap{width:100%;display:flex;align-items:center;justify-content:center;padding:28px}.breadcrumb-4035{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px;overflow:hidden;border:1px solid rgba(167,139,250,.22);border-radius:18px;background:linear-gradient(135deg,rgba(2,1,10,.98),rgba(13,10,30,.96),rgba(28,18,54,.94));box-shadow:0 18px 44px rgba(0,0,0,.52),0 0 0 1px rgba(255,255,255,.03) inset,0 0 24px rgba(139,92,246,.09),0 0 34px rgba(34,211,238,.06);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);font-family:Arial,Helvetica,sans-serif}.breadcrumb-4035::before{content:"";position:absolute;inset:1px;border-radius:17px;background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,0) 32%,rgba(167,139,250,.05) 62%,rgba(255,255,255,.02));pointer-events:none}.breadcrumb-4035::after{content:"";position:absolute;left:16px;right:16px;bottom:3px;height:1px;background:linear-gradient(90deg,transparent,rgba(196,181,253,.75),rgba(168,85,247,.9),rgba(34,211,238,.8),transparent);box-shadow:0 0 12px rgba(139,92,246,.35);opacity:.95}.breadcrumb-4035__nebula{position:absolute;inset:0;border-radius:18px;background:radial-gradient(circle at 18% 22%,rgba(34,211,238,.12),transparent 24%),radial-gradient(circle at 82% 18%,rgba(236,72,153,.12),transparent 26%),radial-gradient(circle at 72% 82%,rgba(139,92,246,.14),transparent 24%),radial-gradient(circle at 22% 80%,rgba(99,102,241,.12),transparent 24%);pointer-events:none}.breadcrumb-4035__grid{position:absolute;inset:0;border-radius:18px;background:linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:18px 18px,18px 18px;mask-image:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.18));pointer-events:none}.breadcrumb-4035__ring{position:absolute;border:1px solid rgba(167,139,250,.16);border-radius:999px;pointer-events:none}.breadcrumb-4035__ring--1{width:120px;height:120px;left:-32px;top:-38px;box-shadow:0 0 28px rgba(139,92,246,.07)}.breadcrumb-4035__ring--2{width:130px;height:130px;right:-40px;bottom:-48px;border-color:rgba(34,211,238,.12);box-shadow:0 0 24px rgba(34,211,238,.06)}.breadcrumb-4035__item{position:relative;z-index:2;display:flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid transparent;border-radius:11px;color:#ddd6fe;text-decoration:none;transition:transform .24s cubic-bezier(.2,.8,.2,1),background .24s ease,border-color .24s ease,box-shadow .24s ease,color .24s ease}.breadcrumb-4035__item::before{content:"";position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(139,92,246,.08));opacity:0;transition:opacity .24s ease}.breadcrumb-4035__item::after{content:"";position:absolute;left:10px;right:10px;bottom:4px;height:2px;border-radius:999px;background:linear-gradient(90deg,#a78bfa,#f5f3ff,#22d3ee);box-shadow:0 0 10px rgba(167,139,250,.45);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}.breadcrumb-4035__icon{position:relative;z-index:2;width:29px;height:29px;display:grid;place-items:center;flex:0 0 29px;border:1px solid rgba(167,139,250,.22);border-radius:8px;background:linear-gradient(145deg,rgba(17,24,39,.95),rgba(30,27,75,.92));box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 0 0 1px rgba(255,255,255,.018);color:#c4b5fd;font-size:13px;transition:transform .26s ease,background .24s ease,color .24s ease,border-color .24s ease,box-shadow .24s ease}.breadcrumb-4035__label{position:relative;z-index:2;font-size:7px;font-weight:900;letter-spacing:.14em;white-space:nowrap}.breadcrumb-4035__separator{position:relative;z-index:2;width:18px;height:26px;display:grid;place-items:center;animation:breadcrumb4035Separator 2.7s ease-in-out infinite}.breadcrumb-4035__separator span{display:block;width:8px;height:8px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);background:linear-gradient(135deg,#f5f3ff,#c4b5fd 42%,#8b5cf6 72%,#22d3ee);border:1px solid rgba(255,255,255,.22);box-shadow:0 0 8px rgba(167,139,250,.34)}.breadcrumb-4035__item:hover{transform:translateY(-3px);border-color:rgba(167,139,250,.28);background:linear-gradient(135deg,rgba(17,24,39,.92),rgba(30,27,75,.56));color:#ffffff;box-shadow:0 10px 24px rgba(0,0,0,.36),0 0 18px rgba(139,92,246,.1)}.breadcrumb-4035__item:hover::before{opacity:1}.breadcrumb-4035__item:hover::after{transform:scaleX(1)}.breadcrumb-4035__item:hover .breadcrumb-4035__icon{transform:translateY(-2px) rotate(-8deg) scale(1.08);border-color:rgba(196,181,253,.58);background:linear-gradient(145deg,#312e81,#1e1b4b);color:#ffffff;box-shadow:0 8px 18px rgba(139,92,246,.16),0 0 18px rgba(34,211,238,.14),inset 0 1px 0 rgba(255,255,255,.08)}.breadcrumb-4035__item--current{padding-right:25px;border-color:rgba(167,139,250,.3);background:linear-gradient(135deg,rgba(17,24,39,.94),rgba(30,27,75,.62));color:#ffffff;box-shadow:0 0 18px rgba(139,92,246,.08),inset 0 1px 0 rgba(255,255,255,.04)}.breadcrumb-4035__item--current::before{opacity:1}.breadcrumb-4035__item--current::after{transform:scaleX(1)}.breadcrumb-4035__item--current .breadcrumb-4035__icon{border-color:rgba(196,181,253,.64);background:linear-gradient(145deg,#1e1b4b,#312e81);color:#f5f3ff;box-shadow:0 0 16px rgba(139,92,246,.18),0 0 22px rgba(34,211,238,.08),inset 0 1px 0 rgba(255,255,255,.1);animation:breadcrumb4035CurrentIcon 3.2s ease-in-out infinite}.breadcrumb-4035__dot{position:absolute;right:9px;top:50%;width:7px;height:7px;border-radius:50%;background:#f5f3ff;border:2px solid #0f172a;box-shadow:0 0 0 2px rgba(167,139,250,.34),0 0 10px rgba(255,255,255,.6),0 0 18px rgba(139,92,246,.42);transform:translateY(-50%);animation:breadcrumb4035Dot 2s ease-in-out infinite}@keyframes breadcrumb4035Separator{0%,100%{transform:translateX(0) scale(.9);opacity:.58}50%{transform:translateX(3px) scale(1.05);opacity:1}}@keyframes breadcrumb4035CurrentIcon{0%,100%{transform:scale(1);box-shadow:0 0 10px rgba(139,92,246,.14),inset 0 1px 0 rgba(255,255,255,.08)}50%{transform:scale(1.08);box-shadow:0 0 18px rgba(139,92,246,.28),0 0 26px rgba(34,211,238,.12),inset 0 1px 0 rgba(255,255,255,.12)}}@keyframes breadcrumb4035Dot{0%,100%{transform:translateY(-50%) scale(.82);opacity:.65}50%{transform:translateY(-50%) scale(1.22);opacity:1}}@media(max-width:620px){.breadcrumb-4035{gap:4px;padding:9px 8px}.breadcrumb-4035__item{padding:7px}.breadcrumb-4035__item--current{padding-right:22px}.breadcrumb-4035__label{font-size:6px}.breadcrumb-4035__icon{width:24px;height:24px;flex-basis:24px;font-size:11px}.breadcrumb-4035__separator{width:12px}}`,
},
];
