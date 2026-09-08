import "../pages/All.css";

export const pagination = [
  {
    id: 1388,
    name: "Modern Pagination",
    preview: (
      <div className="pagination-1388">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="active">2</button>
        <button>3</button>
        <span>...</span>
        <button>8</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<nav class="Pagination">
    <button>
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button>1</button>
    <button class="active">2</button>
    <button>3</button>
    <span>...</span>
    <button>8</button>
    <button>
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</nav>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 4px;
}
.Pagination button {
    width: 31px;
    height: 31px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    background: #ffffff;
    color: #52525b;
    font-size: 9px;
    cursor: pointer;
}
.Pagination button:hover {
    border-color: #a1a1aa;
}
.Pagination button.active {
    border-color: #2563eb;
    background: #2563eb;
    color: #ffffff;
}
.Pagination button i {
    font-size: 8px;
}
.Pagination > span {
    padding: 0 3px;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1389,
    name: "Compact Pagination",
    preview: (
      <div className="pagination-1389">
        <button>
          <i className="fa-solid fa-arrow-left"></i>
          Previous
        </button>
        <span>Page 3 of 12</span>
        <button>
          Next
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<nav class="Pagination">
    <button>
        <i class="fa-solid fa-arrow-left"></i>
        Previous
    </button>
    <span>Page 3 of 12</span>
    <button>
        Next
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</nav>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 300px;
}
.Pagination button {
    display: flex;
    align-items: center;
    gap: 7px;
    height: 34px;
    padding: 0 10px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #ffffff;
    color: #52525b;
    font-size: 9px;
    cursor: pointer;
}
.Pagination button:hover {
    background: #f4f4f5;
}
.Pagination button i {
    color: #71717a;
    font-size: 8px;
}
.Pagination > span {
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 2153,
    name: "Modern Indigo Pagination",
    preview: (
      <div className="pagination-2153">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="pagination-2153__active">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>12</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button class="Pagination-active">1</button>
    <button>2</button>
    <button>3</button>
    <span>...</span>
    <button>12</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 6px;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fff;
    color: #52525b;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #6366f1;
    background: #6366f1;
    color: #fff;
}
.Pagination span {
    color: #a1a1aa;
}`,
  },
  {
    id: 2154,
    name: "Glass Pagination",
    preview: (
      <div className="pagination-2154">
        <button>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="pagination-2154__active">01</button>
        <button>02</button>
        <button>03</button>
        <button>04</button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-angle-left"></i></button>
    <button class="Pagination-active">01</button>
    <button>02</button>
    <button>03</button>
    <button>04</button>
    <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 14px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(14px);
}
.Pagination button {
    min-width: 32px;
    height: 32px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #cbd5e1;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: rgba(255,255,255,.14);
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.15);
}`,
  },
  {
    id: 2155,
    name: "Neon Cyber Pagination",
    preview: (
      <div className="pagination-2155">
        <button>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button>07</button>
        <button className="pagination-2155__active">08</button>
        <button>09</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-arrow-left"></i></button>
    <button>07</button>
    <button class="Pagination-active">08</button>
    <button>09</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 7px;
    padding: 8px;
    background: #020617;
    border: 1px solid #164e63;
}
.Pagination button {
    min-width: 35px;
    height: 35px;
    border: 1px solid #164e63;
    background: #06131d;
    color: #22d3ee;
    font-family: monospace;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #22d3ee !important;
    background: rgba(34,211,238,.12) !important;
    color: #67e8f9 !important;
    box-shadow:
        0 0 8px rgba(34,211,238,.3),
        inset 0 0 8px rgba(34,211,238,.06);
}`,
  },
  {
    id: 2156,
    name: "Dark Luxury Pagination",
    preview: (
      <div className="pagination-2156">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2156__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 5px;
    border: 1px solid #3f3f46;
    background: #0c0a09;
}
.Pagination button {
    width: 33px;
    height: 33px;
    border: 0;
    background: transparent;
    color: #a8a29e;
    font-family: Georgia,serif;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #1c1917 !important;
    color: #d4af67 !important;
}
.Pagination-active {
    box-shadow: inset 0 -1px #d4af67;
}`,
  },
  {
    id: 2157,
    name: "Minimal Round Pagination",
    preview: (
      <div className="pagination-2157">
        <button>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2157__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-arrow-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 5px;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 50%;
    background: #f4f4f5;
    color: #71717a;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #18181b !important;
    color: #fff !important;
}`,
  },
  {
    id: 2158,
    name: "Gradient Flow Pagination",
    preview: (
      <div className="pagination-2158">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="pagination-2158__active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button class="Pagination-active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 5px;
    border-radius: 13px;
    background: linear-gradient(90deg,#4f46e5,#8b5cf6,#ec4899);
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 9px;
    background: rgba(255,255,255,.12);
    color: #fff;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #fff !important;
    color: #6d28d9 !important;
}`,
  },
  {
    id: 2159,
    name: "Brutalist Pagination",
    preview: (
      <div className="pagination-2159">
        <button>PREV</button>
        <button>01</button>
        <button className="pagination-2159__active">02</button>
        <button>03</button>
        <button>NEXT</button>
      </div>
    ),
    html: `<div class="Pagination">
    <button>PREV</button>
    <button>01</button>
    <button class="Pagination-active">02</button>
    <button>03</button>
    <button>NEXT</button>
</div>`,
    css: `.Pagination {
    display: flex;
    border: 3px solid #111;
}
.Pagination button {
    min-width: 38px;
    height: 37px;
    border: 0;
    border-right: 3px solid #111;
    background: #facc15;
    color: #111;
    font-family: monospace;
    font-size: 9px;
    font-weight: 950;
    cursor: pointer;
}
.Pagination button:last-child {
    border-right: 0;
}
.Pagination button:hover,
.Pagination-active {
    background: #111 !important;
    color: #facc15 !important;
}`,
  },
  {
    id: 2160,
    name: "Soft UI Pagination",
    preview: (
      <div className="pagination-2160">
        <button>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2160__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-angle-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 8px;
    padding: 9px;
    border-radius: 18px;
    background: #eef2f7;
    box-shadow:
        8px 8px 20px rgba(15,23,42,.08),
        -8px -8px 20px rgba(255,255,255,.9);
}
.Pagination button {
    width: 33px;
    height: 33px;
    border: 0;
    border-radius: 10px;
    background: #eef2f7;
    color: #64748b;
    box-shadow:
        3px 3px 8px rgba(15,23,42,.08),
        -3px -3px 8px rgba(255,255,255,.9);
    cursor: pointer;
}
.Pagination-active {
    background: #e2e8f0 !important;
    color: #0f172a !important;
}`,
  },
  {
    id: 2161,
    name: "Red Alert Pagination",
    preview: (
      <div className="pagination-2161">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2161__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #991b1b;
    border-radius: 10px;
    background: #180a0a;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid transparent;
    border-radius: 7px;
    background: transparent;
    color: #fca5a5;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #ef4444 !important;
    background: rgba(239,68,68,.12) !important;
    color: #fff !important;
    box-shadow: 0 0 10px rgba(239,68,68,.2);
}`,
  },
  {
    id: 2162,
    name: "Ocean Pagination",
    preview: (
      <div className="pagination-2162">
        <button>
          <i className="fa-solid fa-water"></i>
        </button>
        <button className="pagination-2162__active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-water"></i></button>
    <button class="Pagination-active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 4px;
    padding: 6px;
    border: 1px solid #0e7490;
    border-radius: 999px;
    background: #082f49;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #67e8f9;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #0e7490 !important;
    color: #ecfeff !important;
    box-shadow: 0 0 12px rgba(34,211,238,.22);
}`,
  },
  {
    id: 2163,
    name: "Neon Pink Pagination",
    preview: (
      <div className="pagination-2163">
        <button>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button>04</button>
        <button className="pagination-2163__active">05</button>
        <button>06</button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-angle-left"></i></button>
    <button>04</button>
    <button class="Pagination-active">05</button>
    <button>06</button>
    <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 6px;
    padding: 7px;
    border: 1px solid #701a75;
    border-radius: 12px;
    background: #12051a;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #581c87;
    border-radius: 8px;
    background: #1a0a24;
    color: #f0abfc;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #ec4899 !important;
    background: rgba(236,72,153,.12) !important;
    color: #f9a8d4 !important;
    box-shadow:
        0 0 8px rgba(236,72,153,.35),
        inset 0 0 8px rgba(236,72,153,.08);
}`,
  },
  {
    id: 2164,
    name: "Elegant Pill Pagination",
    preview: (
      <div className="pagination-2164">
        <button>
          <i className="fa-solid fa-arrow-left"></i> Prev
        </button>
        <button className="pagination-2164__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          Next <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-arrow-left"></i> Prev</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button>Next <i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 4px;
    border: 1px solid #e7e5e4;
    border-radius: 999px;
    background: #fff;
}
.Pagination button {
    padding: 8px 12px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: #57534e;
    font-size: 10px;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #292524 !important;
    color: #fff !important;
}`,
  },
  {
    id: 2165,
    name: "Terminal Pagination",
    preview: (
      <div className="pagination-2165">
        <span>&lt;</span>
        <button>01</button>
        <button className="pagination-2165__active">02</button>
        <button>03</button>
        <span>&gt;</span>
      </div>
    ),
    html: `<div class="Pagination">
    <span>&lt;</span>
    <button>01</button>
    <button class="Pagination-active">02</button>
    <button>03</button>
    <span>&gt;</span>
</div>`,
    css: `.Pagination {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px;
    border: 1px solid #14532d;
    background: #020c05;
    color: #4ade80;
    font-family: monospace;
}
.Pagination span {
    color: #166534;
    font-size: 12px;
}
.Pagination button {
    width: 31px;
    height: 28px;
    border: 0;
    background: transparent;
    color: #4ade80;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #14532d !important;
    color: #bbf7d0 !important;
}`,
  },
  {
    id: 2166,
    name: "Floating Purple Pagination",
    preview: (
      <div className="pagination-2166">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2166__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 6px;
    padding: 5px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 18px 40px rgba(88,28,135,.15);
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 10px;
    background: #faf5ff;
    color: #7e22ce;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#7c3aed,#a855f7) !important;
    color: #fff !important;
    box-shadow: 0 8px 18px rgba(124,58,237,.25);
}`,
  },
  {
    id: 2167,
    name: "Frost Pagination",
    preview: (
      <div className="pagination-2167">
        <button>
          <i className="fa-solid fa-snowflake"></i>
        </button>
        <button>1</button>
        <button className="pagination-2167__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-snowflake"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #bae6fd;
    border-radius: 14px;
    background: rgba(240,249,255,.8);
    backdrop-filter: blur(8px);
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: rgba(255,255,255,.75);
    color: #0284c7;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #7dd3fc !important;
    background: #e0f2fe !important;
    color: #0369a1 !important;
    box-shadow: 0 0 12px rgba(125,211,252,.3);
}`,
  },
  {
    id: 2168,
    name: "Gold Premium Pagination",
    preview: (
      <div className="pagination-2168">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2168__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 3px;
    padding: 6px;
    border: 1px solid #57534e;
    background: #181512;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid transparent;
    background: transparent;
    color: #a8a29e;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #a16207 !important;
    background: #292524 !important;
    color: #fcd34d !important;
}`,
  },
  {
    id: 2169,
    name: "Green Nature Pagination",
    preview: (
      <div className="pagination-2169">
        <button>
          <i className="fa-solid fa-leaf"></i>
        </button>
        <button className="pagination-2169__active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-leaf"></i></button>
    <button class="Pagination-active">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border-radius: 15px;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: #15803d;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #16a34a !important;
    color: #fff !important;
}`,
  },
  {
    id: 2170,
    name: "Cyber Grid Pagination",
    preview: (
      <div className="pagination-2170">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>06</button>
        <button className="pagination-2170__active">07</button>
        <button>08</button>
        <button>09</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>06</button>
    <button class="Pagination-active">07</button>
    <button>08</button>
    <button>09</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 2px;
    padding: 5px;
    border: 1px solid #155e75;
    background:
        linear-gradient(rgba(34,211,238,.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(34,211,238,.05) 1px,transparent 1px),
        #020617;
    background-size: 12px 12px;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid #164e63;
    background: rgba(2,6,23,.75);
    color: #67e8f9;
    font-family: monospace;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #22d3ee !important;
    background: #083344 !important;
    color: #fff !important;
}`,
  },
  {
    id: 2171,
    name: "Fire Pagination",
    preview: (
      <div className="pagination-2171">
        <button>
          <i className="fa-solid fa-fire"></i>
        </button>
        <button>1</button>
        <button className="pagination-2171__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-fire"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #9a3412;
    border-radius: 12px;
    background:
        linear-gradient(135deg,#1c0a05,#2a0c06);
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 8px;
    background: rgba(249,115,22,.06);
    color: #fb923c;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#ea580c,#f97316) !important;
    color: #fff7ed !important;
    box-shadow: 0 0 14px rgba(249,115,22,.25);
}`,
  },
  {
    id: 2172,
    name: "Cosmic Aurora Pagination",
    preview: (
      <div className="pagination-2172">
        <button>
          <i className="fa-solid fa-meteor"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2172__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-meteor"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 14px;
    background:
        linear-gradient(
            90deg,
            #0f172a,
            #312e81,
            #581c87,
            #0f172a
        );
    box-shadow: 0 12px 30px rgba(49,46,129,.2);
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 9px;
    background: rgba(255,255,255,.08);
    color: #c4b5fd;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#22d3ee,#8b5cf6) !important;
    color: #fff !important;
    box-shadow:
        0 0 12px rgba(139,92,246,.35),
        0 0 20px rgba(34,211,238,.15);
}`,
  },
  {
    id: 2173,
    name: "Aurora Prism Pagination",
    preview: (
      <div className="pagination-2173">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>1</button>
        <button className="pagination-2173__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 14px;
    background: linear-gradient(90deg,#0f172a,#312e81,#7c3aed,#ec4899,#0f172a);
    background-size: 300% 100%;
    animation: aurora-move 5s linear infinite;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 9px;
    background: rgba(255,255,255,.08);
    color: #fff;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: rgba(255,255,255,.95) !important;
    color: #6d28d9 !important;
    box-shadow: 0 0 14px rgba(255,255,255,.35);
}
@keyframes aurora-move {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 2174,
    name: "Holographic Pagination",
    preview: (
      <div className="pagination-2174">
        <button>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button>01</button>
        <button className="pagination-2174__active">02</button>
        <button>03</button>
        <button>04</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-arrow-left"></i></button>
    <button>01</button>
    <button class="Pagination-active">02</button>
    <button>03</button>
    <button>04</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 6px;
    padding: 7px;
    border-radius: 12px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.25);
    backdrop-filter: blur(15px);
    box-shadow: inset 0 1px rgba(255,255,255,.2);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 9px;
    background: linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.03));
    color: #e0e7ff;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: rgba(255,255,255,.5) !important;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899) !important;
    color: #fff !important;
    box-shadow:
        0 0 12px rgba(34,211,238,.3),
        0 0 18px rgba(236,72,153,.2);
}`,
  },
  {
    id: 2175,
    name: "Electric Pulse Pagination",
    preview: (
      <div className="pagination-2175">
        <button>
          <i className="fa-solid fa-bolt"></i>
        </button>
        <button>2</button>
        <button className="pagination-2175__active">3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i className="fa-solid fa-bolt"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-bolt"></i></button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button>5</button>
    <button><i class="fa-solid fa-bolt"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #155e75;
    background: #020617;
}
.Pagination button {
    width: 34px;
    height: 34px;
    border: 1px solid #164e63;
    background: #06131d;
    color: #67e8f9;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #67e8f9 !important;
    background: #083344 !important;
    color: #fff !important;
    box-shadow:
        0 0 8px #22d3ee,
        0 0 18px rgba(34,211,238,.4);
    animation: electric-pulse .8s ease-in-out infinite alternate;
}
@keyframes electric-pulse {
    from {
        box-shadow: 0 0 6px #22d3ee;
    }
    to {
        box-shadow: 0 0 16px #22d3ee,0 0 28px rgba(34,211,238,.4);
    }
}`,
  },
  {
    id: 2176,
    name: "Crystal Ice Pagination",
    preview: (
      <div className="pagination-2176">
        <button>
          <i className="fa-solid fa-snowflake"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2176__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-snowflake"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #bae6fd;
    border-radius: 13px;
    background: linear-gradient(145deg,#ecfeff,#dbeafe);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(125,211,252,.45);
    border-radius: 9px;
    background: rgba(255,255,255,.75);
    color: #0369a1;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(145deg,#fff,#bae6fd) !important;
    border-color: #38bdf8 !important;
    color: #075985 !important;
    box-shadow:
        0 0 12px rgba(56,189,248,.4),
        inset 0 0 8px rgba(255,255,255,.9);
}`,
  },
  {
    id: 2177,
    name: "Shadow Void Pagination",
    preview: (
      <div className="pagination-2177">
        <button>
          <i className="fa-solid fa-moon"></i>
        </button>
        <button>7</button>
        <button className="pagination-2177__active">8</button>
        <button>9</button>
        <button>10</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-moon"></i></button>
    <button>7</button>
    <button class="Pagination-active">8</button>
    <button>9</button>
    <button>10</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 4px;
    padding: 6px;
    border: 1px solid #3f3f46;
    border-radius: 12px;
    background: #050505;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 8px;
    background: #18181b;
    color: #71717a;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #27272a !important;
    color: #a78bfa !important;
    box-shadow: 0 0 12px rgba(124,58,237,.3);
}`,
  },
  {
    id: 2178,
    name: "Firestorm Pagination",
    preview: (
      <div className="pagination-2178">
        <button>
          <i className="fa-solid fa-fire"></i>
        </button>
        <button>1</button>
        <button className="pagination-2178__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-fire-flame-simple"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-fire"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-fire-flame-simple"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #9a3412;
    border-radius: 12px;
    background: linear-gradient(135deg,#1c0a05,#431407);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(249,115,22,.18);
    border-radius: 8px;
    background: rgba(249,115,22,.05);
    color: #fb923c;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#ea580c,#f97316) !important;
    color: #fff !important;
    box-shadow:
        0 0 10px rgba(249,115,22,.45),
        0 0 22px rgba(234,88,12,.2);
}`,
  },
  {
    id: 2179,
    name: "Golden Crown Pagination",
    preview: (
      <div className="pagination-2179">
        <button>
          <i className="fa-solid fa-crown"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2179__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-crown"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 4px;
    padding: 5px;
    border: 1px solid #a16207;
    border-radius: 11px;
    background: linear-gradient(145deg,#181512,#292524);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: #a8a29e;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(145deg,#f59e0b,#d97706) !important;
    color: #fff !important;
    box-shadow:
        0 0 12px rgba(245,158,11,.3),
        inset 0 1px rgba(255,255,255,.4);
}`,
  },
  {
    id: 2180,
    name: "Toxic Neon Pagination",
    preview: (
      <div className="pagination-2180">
        <button>
          <i className="fa-solid fa-radiation"></i>
        </button>
        <button>04</button>
        <button>05</button>
        <button className="pagination-2180__active">06</button>
        <button>07</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-radiation"></i></button>
    <button>04</button>
    <button>05</button>
    <button class="Pagination-active">06</button>
    <button>07</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 6px;
    padding: 7px;
    border: 1px solid #365314;
    background: #07110a;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #3f6212;
    border-radius: 7px;
    background: #0a190a;
    color: #84cc16;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #bef264 !important;
    background: rgba(132,204,22,.12) !important;
    color: #d9f99d !important;
    box-shadow:
        0 0 8px #84cc16,
        0 0 18px rgba(132,204,22,.35);
}`,
  },
  {
    id: 2181,
    name: "Pink Cyber Pagination",
    preview: (
      <div className="pagination-2181">
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
        <button>1</button>
        <button className="pagination-2181__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-heart"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #831843;
    border-radius: 12px;
    background:
        linear-gradient(135deg,#1a0511,#2d071d);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #701a75;
    border-radius: 8px;
    background: #210817;
    color: #f9a8d4;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #ec4899 !important;
    background: linear-gradient(135deg,#be185d,#db2777) !important;
    color: #fff !important;
    box-shadow:
        0 0 9px rgba(236,72,153,.55),
        0 0 22px rgba(219,39,119,.25);
}`,
  },
  {
    id: 2182,
    name: "Celestial Gold Pagination",
    preview: (
      <div className="pagination-2182">
        <button>
          <i className="fa-solid fa-star"></i>
        </button>
        <button>8</button>
        <button>9</button>
        <button className="pagination-2182__active">10</button>
        <button>11</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-star"></i></button>
    <button>8</button>
    <button>9</button>
    <button class="Pagination-active">10</button>
    <button>11</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px 7px;
    border: 1px solid #713f12;
    border-radius: 999px;
    background: linear-gradient(90deg,#18120a,#29200e,#18120a);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #d6d3d1;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: radial-gradient(circle,#fef3c7,#f59e0b) !important;
    color: #78350f !important;
    box-shadow:
        0 0 12px rgba(251,191,36,.55),
        0 0 25px rgba(245,158,11,.25);
}`,
  },
  {
    id: 2183,
    name: "Ocean Wave Pagination",
    preview: (
      <div className="pagination-2183">
        <button>
          <i className="fa-solid fa-water"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2183__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-water"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            #082f49,
            #0e7490,
            #155e75,
            #082f49
        );
    background-size: 250% 100%;
    animation: ocean-flow 4s linear infinite;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(125,211,252,.22);
    border-radius: 50%;
    background: rgba(8,47,73,.55);
    color: #a5f3fc;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #67e8f9 !important;
    color: #164e63 !important;
    box-shadow: 0 0 16px rgba(34,211,238,.45);
}
@keyframes ocean-flow {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 2184,
    name: "Royal Purple Pagination",
    preview: (
      <div className="pagination-2184">
        <button>
          <i className="fa-solid fa-gem"></i>
        </button>
        <button>5</button>
        <button className="pagination-2184__active">6</button>
        <button>7</button>
        <button>8</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-gem"></i></button>
    <button>5</button>
    <button class="Pagination-active">6</button>
    <button>7</button>
    <button>8</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #6d28d9;
    border-radius: 14px;
    background: linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(196,181,253,.15);
    border-radius: 9px;
    background: rgba(255,255,255,.06);
    color: #c4b5fd;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#a78bfa,#7c3aed) !important;
    color: #fff !important;
    box-shadow:
        0 0 12px rgba(139,92,246,.45),
        inset 0 1px rgba(255,255,255,.3);
}`,
  },
  {
    id: 2185,
    name: "Emerald Energy Pagination",
    preview: (
      <div className="pagination-2185">
        <button>
          <i className="fa-solid fa-leaf"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2185__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-leaf"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #047857;
    border-radius: 12px;
    background: #022c22;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #065f46;
    border-radius: 8px;
    background: rgba(16,185,129,.05);
    color: #6ee7b7;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #34d399 !important;
    background: #064e3b !important;
    color: #d1fae5 !important;
    box-shadow:
        0 0 10px rgba(52,211,153,.3),
        inset 0 0 8px rgba(16,185,129,.08);
}`,
  },
  {
    id: 2186,
    name: "Red Matrix Pagination",
    preview: (
      <div className="pagination-2186">
        <button>
          <i className="fa-solid fa-skull"></i>
        </button>
        <button>03</button>
        <button>04</button>
        <button className="pagination-2186__active">05</button>
        <button>06</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-skull"></i></button>
    <button>03</button>
    <button>04</button>
    <button class="Pagination-active">05</button>
    <button>06</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 3px;
    padding: 5px;
    border: 1px solid #7f1d1d;
    background:
        linear-gradient(rgba(239,68,68,.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(239,68,68,.04) 1px,transparent 1px),
        #09090b;
    background-size: 12px 12px;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #450a0a;
    background: #120707;
    color: #f87171;
    font-family: monospace;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #ef4444 !important;
    background: #450a0a !important;
    color: #fecaca !important;
    box-shadow: 0 0 10px rgba(239,68,68,.35);
}`,
  },
  {
    id: 2187,
    name: "Pearl Glass Pagination",
    preview: (
      <div className="pagination-2187">
        <button>
          <i className="fa-solid fa-circle"></i>
        </button>
        <button>1</button>
        <button className="pagination-2187__active">2</button>
        <button>3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-circle"></i></button>
    <button>1</button>
    <button class="Pagination-active">2</button>
    <button>3</button>
    <button>4</button>
    <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 6px;
    padding: 7px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.35);
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(18px);
    box-shadow:
        inset 0 1px rgba(255,255,255,.35),
        0 12px 35px rgba(15,23,42,.08);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 10px;
    background: rgba(255,255,255,.18);
    color: #64748b;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: rgba(255,255,255,.8) !important;
    color: #0f172a !important;
    box-shadow: 0 0 15px rgba(255,255,255,.45);
}`,
  },
  {
    id: 2188,
    name: "Magenta Nebula Pagination",
    preview: (
      <div className="pagination-2188">
        <button>
          <i className="fa-solid fa-star"></i>
        </button>
        <button>8</button>
        <button className="pagination-2188__active">9</button>
        <button>10</button>
        <button>11</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-star"></i></button>
    <button>8</button>
    <button class="Pagination-active">9</button>
    <button>10</button>
    <button>11</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #86198f;
    border-radius: 14px;
    background:
        radial-gradient(circle at 20% 50%,rgba(236,72,153,.24),transparent 30%),
        radial-gradient(circle at 80% 50%,rgba(139,92,246,.24),transparent 30%),
        #14091d;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(232,121,249,.15);
    border-radius: 9px;
    background: rgba(236,72,153,.04);
    color: #f0abfc;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: linear-gradient(135deg,#db2777,#9333ea) !important;
    color: #fff !important;
    box-shadow:
        0 0 10px rgba(236,72,153,.45),
        0 0 25px rgba(139,92,246,.2);
}`,
  },
  {
    id: 2189,
    name: "White & Gold Pagination",
    preview: (
      <div className="pagination-2189">
        <button>
          <i className="fa-solid fa-crown"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2189__active">3</button>
        <button>4</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-crown"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 4px;
    padding: 6px;
    border: 1px solid #e7e5e4;
    border-radius: 12px;
    background: #fff;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 1px solid #e7e5e4;
    border-radius: 8px;
    background: #fafaf9;
    color: #78716c;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: #d4af67 !important;
    background: #fffbeb !important;
    color: #a16207 !important;
    box-shadow:
        0 0 10px rgba(212,175,103,.2),
        inset 0 0 6px rgba(251,191,36,.08);
}`,
  },
  {
    id: 2190,
    name: "Lunar Eclipse Pagination",
    preview: (
      <div className="pagination-2190">
        <button>
          <i className="fa-solid fa-moon"></i>
        </button>
        <button>4</button>
        <button>5</button>
        <button className="pagination-2190__active">6</button>
        <button>7</button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-moon"></i></button>
    <button>4</button>
    <button>5</button>
    <button class="Pagination-active">6</button>
    <button>7</button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border: 1px solid #475569;
    border-radius: 999px;
    background: linear-gradient(90deg,#020617,#0f172a,#1e293b,#020617);
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 50%;
    background: rgba(255,255,255,.05);
    color: #cbd5e1;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: radial-gradient(circle,#f8fafc,#94a3b8) !important;
    color: #0f172a !important;
    box-shadow:
        0 0 14px rgba(226,232,240,.4),
        0 0 25px rgba(148,163,184,.2);
}`,
  },
  {
    id: 2191,
    name: "Rainbow Prism Pagination",
    preview: (
      <div className="pagination-2191">
        <button>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
        <button>1</button>
        <button>2</button>
        <button className="pagination-2191__active">3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-wand-magic-sparkles"></i></button>
    <button>1</button>
    <button>2</button>
    <button class="Pagination-active">3</button>
    <button>4</button>
    <button>5</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 6px;
    border-radius: 14px;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#8b5cf6,#ec4899,#f97316,#22d3ee);
    background-size: 250% 100%;
    animation: prism-flow 5s linear infinite;
}
.Pagination button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 9px;
    background: rgba(0,0,0,.3);
    color: #fff;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    background: #fff !important;
    color: #7c3aed !important;
    box-shadow: 0 0 13px rgba(255,255,255,.45);
}
@keyframes prism-flow {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 2192,
    name: "Legendary Void Prism Pagination",
    preview: (
      <div className="pagination-2192">
        <button>
          <i className="fa-solid fa-infinity"></i>
        </button>
        <button>10</button>
        <button>11</button>
        <button className="pagination-2192__active">12</button>
        <button>13</button>
        <button>14</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Pagination">
    <button><i class="fa-solid fa-infinity"></i></button>
    <button>10</button>
    <button>11</button>
    <button class="Pagination-active">12</button>
    <button>13</button>
    <button>14</button>
    <button><i class="fa-solid fa-arrow-right"></i></button>
</div>`,
    css: `.Pagination {
    display: flex;
    gap: 5px;
    padding: 7px;
    border: 1px solid transparent;
    border-radius: 15px;
    background:
        linear-gradient(#050505,#050505) padding-box,
        linear-gradient(
            90deg,
            #22d3ee,
            #6366f1,
            #a855f7,
            #ec4899,
            #f97316,
            #22d3ee
        ) border-box;
    background-size: 100% 100%,300% 100%;
    animation: void-prism 5s linear infinite;
    box-shadow:
        0 0 25px rgba(99,102,241,.12),
        inset 0 0 15px rgba(0,0,0,.8);
}
.Pagination button {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 9px;
    background: rgba(255,255,255,.03);
    color: #c4b5fd;
    cursor: pointer;
}
.Pagination button:hover,
.Pagination-active {
    border-color: rgba(255,255,255,.35) !important;
    background:
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899) !important;
    color: #fff !important;
    box-shadow:
        0 0 10px rgba(34,211,238,.35),
        0 0 20px rgba(236,72,153,.2);
}
@keyframes void-prism {
    to {
        background-position: 0 0,300% 0;
    }
}`,
  },
  {
    id: 2193,
    name: "Legendary Cosmic Aura Pagination",
    preview: (
      <div className="pagination-2193">
        <div className="pagination-2193__aura"></div>
        <div className="pagination-2193__orbit pagination-2193__orbit--one"></div>
        <div className="pagination-2193__orbit pagination-2193__orbit--two"></div>
        <div className="pagination-2193__orbit pagination-2193__orbit--three"></div>
        <div className="pagination-2193__star pagination-2193__star--one"></div>
        <div className="pagination-2193__star pagination-2193__star--two"></div>
        <div className="pagination-2193__star pagination-2193__star--three"></div>
        <div className="pagination-2193__star pagination-2193__star--four"></div>
        <div className="pagination-2193__core">
          <div className="pagination-2193__core-glow"></div>
          <i className="fa-solid fa-atom"></i>
        </div>
        <div className="pagination-2193__controls">
          <button className="pagination-2193__arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button>01</button>
          <button>02</button>
          <button className="pagination-2193__active">03</button>
          <button>04</button>
          <button>05</button>
          <button className="pagination-2193__arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Pagination">
    <div class="Pagination-aura"></div>
    <div class="Pagination-orbit Pagination-orbit--one"></div>
    <div class="Pagination-orbit Pagination-orbit--two"></div>
    <div class="Pagination-orbit Pagination-orbit--three"></div>
    <div class="Pagination-star Pagination-star--one"></div>
    <div class="Pagination-star Pagination-star--two"></div>
    <div class="Pagination-star Pagination-star--three"></div>
    <div class="Pagination-star Pagination-star--four"></div>
    <div class="Pagination-core">
        <div class="Pagination-core-glow"></div>
        <i class="fa-solid fa-atom"></i>
    </div>
    <div class="Pagination-controls">
        <button class="Pagination-arrow">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button>01</button>
        <button>02</button>
        <button class="Pagination-active">03</button>
        <button>04</button>
        <button>05</button>
        <button class="Pagination-arrow">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>
</div>`,
    css: `.Pagination {
    position: relative;
    width: 520px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid rgba(99,102,241,.32);
    border-radius: 28px;
    background:
        radial-gradient(circle at 50% 50%,rgba(99,102,241,.18),transparent 28%),
        radial-gradient(circle at 22% 30%,rgba(34,211,238,.09),transparent 25%),
        radial-gradient(circle at 80% 70%,rgba(236,72,153,.1),transparent 28%),
        #030712;
    box-shadow:
        inset 0 0 50px rgba(30,41,59,.8),
        0 25px 70px rgba(15,23,42,.35);
}
.Pagination::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 8% 18%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 18% 78%,#93c5fd 0 1px,transparent 2px),
        radial-gradient(circle at 31% 14%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 43% 83%,#a5b4fc 0 1px,transparent 2px),
        radial-gradient(circle at 61% 16%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 71% 86%,#67e8f9 0 1px,transparent 2px),
        radial-gradient(circle at 90% 24%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 94% 75%,#c4b5fd 0 1px,transparent 2px);
    opacity: .75;
}
.Pagination-aura {
    position: absolute;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(129,140,248,.22),
            rgba(34,211,238,.12) 35%,
            rgba(236,72,153,.08) 52%,
            transparent 75%
        );
    filter: blur(20px);
    animation: cosmic-aura 4s ease-in-out infinite;
}
.Pagination-orbit {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(129,140,248,.25);
    pointer-events: none;
}
.Pagination-orbit--one {
    width: 150px;
    height: 150px;
    transform: rotate(22deg);
    border-top-color: #22d3ee;
    border-right-color: transparent;
    box-shadow:
        0 0 10px rgba(34,211,238,.15),
        inset 0 0 10px rgba(34,211,238,.05);
    animation: cosmic-orbit-one 5s linear infinite;
}
.Pagination-orbit--one::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    top: 4px;
    left: 50%;
    border-radius: 50%;
    background: #22d3ee;
    box-shadow:
        0 0 8px #22d3ee,
        0 0 18px rgba(34,211,238,.7);
}
.Pagination-orbit--two {
    width: 182px;
    height: 92px;
    transform: rotate(-28deg);
    border-left-color: #ec4899;
    border-bottom-color: transparent;
    animation: cosmic-orbit-two 4s linear infinite reverse;
}
.Pagination-orbit--two::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    right: 16px;
    top: 50%;
    border-radius: 50%;
    background: #ec4899;
    box-shadow:
        0 0 8px #ec4899,
        0 0 18px rgba(236,72,153,.7);
}
.Pagination-orbit--three {
    width: 215px;
    height: 215px;
    border-color: rgba(148,163,184,.1);
    border-top-color: #6366f1;
    border-bottom-color: #8b5cf6;
    animation: cosmic-orbit-three 7s linear infinite;
}
.Pagination-orbit--three::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    left: 15%;
    bottom: 12%;
    border-radius: 50%;
    background: #8b5cf6;
    box-shadow:
        0 0 7px #8b5cf6,
        0 0 15px rgba(139,92,246,.6);
}
.Pagination-star {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    box-shadow:
        0 0 5px #fff,
        0 0 12px #93c5fd;
    animation: cosmic-star 1.8s ease-in-out infinite;
}
.Pagination-star--one {
    top: 47px;
    left: 105px;
}
.Pagination-star--two {
    top: 72px;
    right: 108px;
    width: 3px;
    height: 3px;
    animation-delay: -.4s;
}
.Pagination-star--three {
    bottom: 72px;
    left: 119px;
    width: 3px;
    height: 3px;
    animation-delay: -.8s;
}
.Pagination-star--four {
    bottom: 52px;
    right: 125px;
    width: 5px;
    height: 5px;
    animation-delay: -1.2s;
}
.Pagination-core {
    position: absolute;
    width: 78px;
    height: 78px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.28);
    background:
        radial-gradient(circle,#1e1b4b,#0f172a 55%,#020617);
    box-shadow:
        0 0 15px rgba(99,102,241,.45),
        0 0 35px rgba(34,211,238,.18),
        inset 0 0 20px rgba(99,102,241,.15);
    z-index: 4;
    animation: cosmic-core 2.6s ease-in-out infinite;
}
.Pagination-core-glow {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.9),
            rgba(129,140,248,.55) 30%,
            rgba(34,211,238,.2) 55%,
            transparent 75%
        );
    filter: blur(5px);
    animation: cosmic-core-glow 1.5s ease-in-out infinite;
}
.Pagination-core i {
    position: relative;
    z-index: 2;
    color: #e0e7ff;
    font-size: 22px;
    text-shadow:
        0 0 7px #fff,
        0 0 16px #818cf8,
        0 0 26px #22d3ee;
    animation: cosmic-icon 2s ease-in-out infinite;
}
.Pagination-controls {
    position: absolute;
    left: 50%;
    bottom: 22px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px;
    border: 1px solid rgba(255,255,255,.13);
    border-radius: 14px;
    background: rgba(2,6,23,.72);
    backdrop-filter: blur(12px);
    box-shadow:
        0 8px 25px rgba(0,0,0,.3),
        inset 0 1px rgba(255,255,255,.08);
    z-index: 8;
}
.Pagination-controls button {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(129,140,248,.16);
    border-radius: 9px;
    background: rgba(255,255,255,.035);
    color: #a5b4fc;
    font-family: monospace;
    font-size: 9px;
    cursor: pointer;
    transition:
        transform .2s ease,
        background .2s ease,
        color .2s ease,
        box-shadow .2s ease;
}
.Pagination-controls button:hover {
    transform: translateY(-2px);
    background: rgba(99,102,241,.14);
    color: #fff;
    box-shadow:
        0 0 9px rgba(99,102,241,.25),
        inset 0 0 8px rgba(129,140,248,.05);
}
.Pagination-controls .Pagination-arrow {
    color: #67e8f9;
}
.Pagination-controls .Pagination-active {
    border-color: rgba(34,211,238,.5);
    background:
        linear-gradient(
            135deg,
            rgba(34,211,238,.25),
            rgba(99,102,241,.25),
            rgba(236,72,153,.18)
        );
    color: #fff;
    box-shadow:
        0 0 10px rgba(34,211,238,.3),
        0 0 20px rgba(99,102,241,.18);
}
@keyframes cosmic-aura {
    0%,
    100% {
        transform: scale(.88);
        opacity: .45;
    }
    50% {
        transform: scale(1.12);
        opacity: 1;
    }
}
@keyframes cosmic-orbit-one {
    from {
        transform: rotate(22deg);
    }
    to {
        transform: rotate(382deg);
    }
}
@keyframes cosmic-orbit-two {
    from {
        transform: rotate(-28deg);
    }
    to {
        transform: rotate(-388deg);
    }
}
@keyframes cosmic-orbit-three {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes cosmic-star {
    0%,
    100% {
        transform: scale(.5);
        opacity: .25;
    }
    50% {
        transform: scale(1.5);
        opacity: 1;
    }
}
@keyframes cosmic-core {
    0%,
    100% {
        transform: scale(.94);
        box-shadow:
            0 0 15px rgba(99,102,241,.45),
            0 0 35px rgba(34,211,238,.18),
            inset 0 0 20px rgba(99,102,241,.15);
    }
    50% {
        transform: scale(1.06);
        box-shadow:
            0 0 22px rgba(99,102,241,.65),
            0 0 48px rgba(34,211,238,.3),
            0 0 70px rgba(236,72,153,.12),
            inset 0 0 24px rgba(99,102,241,.22);
    }
}
@keyframes cosmic-core-glow {
    0%,
    100% {
        transform: scale(.8);
        opacity: .45;
    }
    50% {
        transform: scale(1.2);
        opacity: .95;
    }
}
@keyframes cosmic-icon {
    0%,
    100% {
        transform: rotate(0deg) scale(.92);
    }
    50% {
        transform: rotate(180deg) scale(1.08);
    }
}`,
  },
];
