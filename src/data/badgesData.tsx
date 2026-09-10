import "../pages/All.css";

export const badges = [
  {
    id: 1380,
    name: "Status Badge Set",
    preview: (
      <div className="badge-1380">
        <span className="badge-1380__success">
          <span></span>
          Online
        </span>
        <span className="badge-1380__warning">
          <span></span>
          Pending
        </span>
        <span className="badge-1380__danger">
          <span></span>
          Offline
        </span>
      </div>
    ),
    html: `<div class="Badge-group">
    <span class="Badge-success">
        <span></span>
        Online
    </span>
    <span class="Badge-warning">
        <span></span>
        Pending
    </span>
    <span class="Badge-danger">
        <span></span>
        Offline
    </span>
</div>`,
    css: `.Badge-group {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
}
.Badge-group span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 8px;
    font-weight: 700;
}
.Badge-success {
    background: #dcfce7;
    color: #15803d;
}
.Badge-warning {
    background: #fef3c7;
    color: #a16207;
}
.Badge-danger {
    background: #fee2e2;
    color: #b91c1c;
}
.Badge-group span span {
    width: 5px;
    height: 5px;
    padding: 0;
    border-radius: 50%;
    background: currentColor;
}`,
  },
  {
    id: 1381,
    name: "Gradient Pro Badge",
    preview: (
      <div className="badge-1381">
        <span>PRO</span>
        <strong>Premium</strong>
        <i className="fa-solid fa-crown"></i>
      </div>
    ),
    html: `<div class="Badge">
    <span>PRO</span>
    <strong>Premium</strong>
    <i class="fa-solid fa-crown"></i>
</div>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 6px 9px;
    border: 1px solid rgba(250,204,21,.35);
    border-radius: 999px;
    background: linear-gradient(
        135deg,
        rgba(124,58,237,.12),
        rgba(236,72,153,.12)
    );
}
.Badge span {
    padding: 2px 5px;
    border-radius: 999px;
    background: linear-gradient(90deg,#f59e0b,#facc15);
    color: #451a03;
    font-size: 7px;
    font-weight: 800;
}
.Badge strong {
    color: #ffffff;
    font-size: 9px;
}
.Badge i {
    color: #facc15;
    font-size: 9px;
}`,
  },
  {
    id: 1724,
    name: "Success Badge",
    preview: (
      <span className="badge-1724">
        <i className="fa-solid fa-check"></i>
        Success
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-check"></i>
    Success
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 9px;
    font-weight: 700;
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1725,
    name: "Warning Badge",
    preview: (
      <span className="badge-1725">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Warning
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Warning
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fef3c7;
    color: #92400e;
    font-size: 9px;
    font-weight: 700;
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1726,
    name: "Danger Badge",
    preview: (
      <span className="badge-1726">
        <i className="fa-solid fa-xmark"></i>
        Failed
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-xmark"></i>
    Failed
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fee2e2;
    color: #b91c1c;
    font-size: 9px;
    font-weight: 700;
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1727,
    name: "Info Badge",
    preview: (
      <span className="badge-1727">
        <i className="fa-solid fa-circle-info"></i>
        Info
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-circle-info"></i>
    Info
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 9px;
    font-weight: 700;
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1728,
    name: "Neutral Badge",
    preview: <span className="badge-1728">Draft</span>,
    html: `<span class="Badge">Draft</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    border-radius: 999px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 1729,
    name: "Dot Status Badge",
    preview: (
      <span className="badge-1729">
        <span></span>
        Online
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    Online
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border: 1px solid #bbf7d0;
    border-radius: 999px;
    background: #f0fdf4;
    color: #166534;
    font-size: 9px;
    font-weight: 700;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 7px rgba(34,197,94,.6);
}`,
  },
  {
    id: 1730,
    name: "Live Badge",
    preview: (
      <span className="badge-1730">
        <span></span>
        LIVE
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    LIVE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fff1f2;
    color: #be123c;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f43f5e;
    box-shadow: 0 0 8px #f43f5e;
    animation: live-1730 1.2s infinite;
}
@keyframes live-1730 {
    50% {
        transform: scale(1.5);
        opacity: .45;
    }
}`,
  },
  {
    id: 1731,
    name: "New Badge",
    preview: <span className="badge-1731">NEW</span>,
    html: `<span class="Badge">NEW</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 6px;
    background: #2563eb;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .8px;
}`,
  },
  {
    id: 1732,
    name: "Premium Badge",
    preview: (
      <span className="badge-1732">
        <i className="fa-solid fa-crown"></i>
        PRO
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-crown"></i>
    PRO
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #facc15;
    border-radius: 999px;
    background: linear-gradient(135deg,#fef3c7,#fde68a);
    color: #78350f;
    font-size: 8px;
    font-weight: 900;
}
.Badge i {
    color: #d97706;
    font-size: 8px;
}`,
  },
  {
    id: 1733,
    name: "Neon Cyan Badge",
    preview: (
      <span className="badge-1733">
        <i className="fa-solid fa-bolt"></i>
        ONLINE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-bolt"></i>
    ONLINE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #22d3ee;
    border-radius: 999px;
    background: #020617;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 800;
    box-shadow: 0 0 12px rgba(34,211,238,.15);
}`,
  },
  {
    id: 1734,
    name: "Neon Pink Badge",
    preview: (
      <span className="badge-1734">
        <i className="fa-solid fa-heart"></i>
        FAVORITE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-heart"></i>
    FAVORITE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #ec4899;
    border-radius: 999px;
    background: #180711;
    color: #f9a8d4;
    font-size: 8px;
    font-weight: 800;
    box-shadow: 0 0 12px rgba(236,72,153,.14);
}`,
  },
  {
    id: 1735,
    name: "Neon Purple Badge",
    preview: (
      <span className="badge-1735">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        MAGIC
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    MAGIC
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #a855f7;
    border-radius: 999px;
    background: #12051e;
    color: #d8b4fe;
    font-size: 8px;
    font-weight: 800;
    box-shadow: 0 0 13px rgba(168,85,247,.15);
}`,
  },
  {
    id: 1736,
    name: "Gradient Badge",
    preview: <span className="badge-1736">FEATURED</span>,
    html: `<span class="Badge">FEATURED</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(90deg,#2563eb,#7c3aed,#ec4899);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .8px;
    box-shadow: 0 5px 14px rgba(99,102,241,.2);
}`,
  },
  {
    id: 1737,
    name: "Rainbow Badge",
    preview: <span className="badge-1737">RAINBOW</span>,
    html: `<span class="Badge">RAINBOW</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
}
.Badge::after {
    content: "RAINBOW";
    display: block;
    padding: 4px 8px;
    border-radius: inherit;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1738,
    name: "Glass Badge",
    preview: (
      <span className="badge-1738">
        <i className="fa-solid fa-gem"></i>
        GLASS
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-gem"></i>
    GLASS
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 10px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 999px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(12px);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 1739,
    name: "Verified Badge",
    preview: (
      <span className="badge-1739">
        <i className="fa-solid fa-circle-check"></i>
        Verified
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-circle-check"></i>
    Verified
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 9px;
    font-weight: 700;
}
.Badge i {
    color: #3b82f6;
}`,
  },
  {
    id: 1740,
    name: "Notification Count Badge",
    preview: <span className="badge-1740">9</span>,
    html: `<span class="Badge">9</span>`,
    css: `.Badge {
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ef4444;
    color: #fff;
    font-size: 9px;
    font-weight: 900;
    box-shadow: 0 0 12px rgba(239,68,68,.2);
}`,
  },
  {
    id: 1741,
    name: "Notification Overflow Badge",
    preview: <span className="badge-1741">99+</span>,
    html: `<span class="Badge">99+</span>`,
    css: `.Badge {
    min-width: 28px;
    height: 22px;
    display: grid;
    place-items: center;
    padding: 0 6px;
    border-radius: 999px;
    background: #dc2626;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1742,
    name: "Sale Badge",
    preview: (
      <span className="badge-1742">
        <i className="fa-solid fa-tag"></i>
        SALE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-tag"></i>
    SALE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 7px;
    background: #dc2626;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1743,
    name: "Discount Badge",
    preview: <span className="badge-1743">-25%</span>,
    html: `<span class="Badge">-25%</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 6px;
    background: #16a34a;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1744,
    name: "Hot Badge",
    preview: (
      <span className="badge-1744">
        <i className="fa-solid fa-fire"></i>
        HOT
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-fire"></i>
    HOT
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: linear-gradient(135deg,#ef4444,#f97316);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    box-shadow: 0 5px 14px rgba(249,115,22,.2);
}`,
  },
  {
    id: 1745,
    name: "Beta Badge",
    preview: <span className="badge-1745">BETA</span>,
    html: `<span class="Badge">BETA</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border: 1px solid #c4b5fd;
    border-radius: 6px;
    background: #f5f3ff;
    color: #7c3aed;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}`,
  },
  {
    id: 1746,
    name: "Experimental Badge",
    preview: (
      <span className="badge-1746">
        <i className="fa-solid fa-flask"></i>
        EXPERIMENTAL
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-flask"></i>
    EXPERIMENTAL
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px dashed #8b5cf6;
    border-radius: 7px;
    background: #faf5ff;
    color: #6d28d9;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .5px;
}`,
  },
  {
    id: 1747,
    name: "AI Badge",
    preview: (
      <span className="badge-1747">
        <i className="fa-solid fa-brain"></i>
        AI
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-brain"></i>
    AI
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #8b5cf6;
    border-radius: 999px;
    background: linear-gradient(135deg,#ede9fe,#e0e7ff);
    color: #5b21b6;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1748,
    name: "Beta Dot Badge",
    preview: (
      <span className="badge-1748">
        <span></span>
        Beta
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    Beta
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border: 1px solid #ddd6fe;
    border-radius: 999px;
    background: #faf5ff;
    color: #6d28d9;
    font-size: 8px;
    font-weight: 800;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8b5cf6;
}`,
  },
  {
    id: 1749,
    name: "Status Busy Badge",
    preview: (
      <span className="badge-1749">
        <span></span>
        Busy
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    Busy
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fff1f2;
    color: #be123c;
    font-size: 9px;
    font-weight: 700;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f43f5e;
}`,
  },
  {
    id: 1750,
    name: "Status Away Badge",
    preview: (
      <span className="badge-1750">
        <span></span>
        Away
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    Away
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fffbeb;
    color: #92400e;
    font-size: 9px;
    font-weight: 700;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f59e0b;
}`,
  },
  {
    id: 1751,
    name: "Status Offline Badge",
    preview: (
      <span className="badge-1751">
        <span></span>
        Offline
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    Offline
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 9px;
    font-weight: 700;
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #71717a;
}`,
  },
  {
    id: 1752,
    name: "Code Badge",
    preview: (
      <span className="badge-1752">
        <i className="fa-solid fa-code"></i>
        CSS
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-code"></i>
    CSS
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 8px;
    border-radius: 6px;
    background: #18181b;
    color: #d4d4d8;
    font-family: monospace;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #22d3ee;
}`,
  },
  {
    id: 1753,
    name: "Framework Badge",
    preview: (
      <span className="badge-1753">
        <i className="fa-brands fa-react"></i>
        React
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-brands fa-react"></i>
    React
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #bae6fd;
    border-radius: 999px;
    background: #f0f9ff;
    color: #0369a1;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #0ea5e9;
}`,
  },
  {
    id: 1754,
    name: "Database Badge",
    preview: (
      <span className="badge-1754">
        <i className="fa-solid fa-database"></i>
        Database
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-database"></i>
    Database
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 7px;
    background: #ecfeff;
    color: #155e75;
    border: 1px solid #a5f3fc;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #0891b2;
}`,
  },
  {
    id: 1755,
    name: "Cloud Badge",
    preview: (
      <span className="badge-1755">
        <i className="fa-solid fa-cloud"></i>
        Cloud
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-cloud"></i>
    Cloud
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #bfdbfe;
    border-radius: 999px;
    background: #eff6ff;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #2563eb;
}`,
  },
  {
    id: 1756,
    name: "Security Badge",
    preview: (
      <span className="badge-1756">
        <i className="fa-solid fa-shield-halved"></i>
        Secure
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-shield-halved"></i>
    Secure
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #bbf7d0;
    border-radius: 999px;
    background: #f0fdf4;
    color: #166534;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #22c55e;
}`,
  },
  {
    id: 1757,
    name: "Beta Glass Badge",
    preview: <span className="badge-1757">BETA</span>,
    html: `<span class="Badge">BETA</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 999px;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(10px);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}`,
  },
  {
    id: 1758,
    name: "Version Badge",
    preview: <span className="badge-1758">v2.4.1</span>,
    html: `<span class="Badge">v2.4.1</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border: 1px solid #d4d4d8;
    border-radius: 6px;
    background: #fafafa;
    color: #52525b;
    font-family: monospace;
    font-size: 8px;
    font-weight: 700;
}`,
  },
  {
    id: 1759,
    name: "Pro Gradient Badge",
    preview: (
      <span className="badge-1759">
        <i className="fa-solid fa-crown"></i>
        PRO
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-crown"></i>
    PRO
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 999px;
    background: linear-gradient(135deg,#f59e0b,#ec4899,#8b5cf6);
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    box-shadow: 0 5px 16px rgba(236,72,153,.18);
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1760,
    name: "Featured Badge",
    preview: (
      <span className="badge-1760">
        <i className="fa-solid fa-star"></i>
        Featured
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-star"></i>
    Featured
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fef3c7;
    color: #92400e;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #eab308;
}`,
  },
  {
    id: 1761,
    name: "Count Badge",
    preview: <span className="badge-1761">24</span>,
    html: `<span class="Badge">24</span>`,
    css: `.Badge {
    min-width: 25px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    border-radius: 6px;
    background: #18181b;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1762,
    name: "Percentage Badge",
    preview: <span className="badge-1762">78%</span>,
    html: `<span class="Badge">78%</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 6px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1763,
    name: "Rank Badge",
    preview: <span className="badge-1763">#1</span>,
    html: `<span class="Badge">#1</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 6px;
    background: linear-gradient(135deg,#facc15,#f59e0b);
    color: #451a03;
    font-size: 8px;
    font-weight: 900;
}`,
  },
  {
    id: 1764,
    name: "New Feature Badge",
    preview: (
      <span className="badge-1764">
        <i className="fa-solid fa-sparkles"></i>
        NEW FEATURE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-sparkles"></i>
    NEW FEATURE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: linear-gradient(135deg,#ecfeff,#eef2ff);
    color: #4338ca;
    border: 1px solid #c7d2fe;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .4px;
}
.Badge i {
    color: #6366f1;
}`,
  },
  {
    id: 1765,
    name: "Payment Badge",
    preview: (
      <span className="badge-1765">
        <i className="fa-solid fa-credit-card"></i>
        Paid
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-credit-card"></i>
    Paid
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #dcfce7;
    color: #166534;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #16a34a;
}`,
  },
  {
    id: 1766,
    name: "Pending Payment Badge",
    preview: (
      <span className="badge-1766">
        <i className="fa-solid fa-clock"></i>
        Pending
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-clock"></i>
    Pending
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 999px;
    background: #fffbeb;
    color: #92400e;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #f59e0b;
}`,
  },
  {
    id: 1767,
    name: "Archived Badge",
    preview: (
      <span className="badge-1767">
        <i className="fa-solid fa-box-archive"></i>
        Archived
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-box-archive"></i>
    Archived
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 8px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    color: #71717a;
}`,
  },
  {
    id: 1768,
    name: "Draft Badge",
    preview: (
      <span className="badge-1768">
        <i className="fa-solid fa-pen"></i>
        Draft
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-pen"></i>
    Draft
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fff;
    color: #52525b;
    font-size: 8px;
    font-weight: 700;
}
.Badge i {
    color: #a1a1aa;
}`,
  },
  {
    id: 1769,
    name: "Command Badge",
    preview: (
      <span className="badge-1769">
        <i className="fa-solid fa-terminal"></i>
        COMMAND
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-terminal"></i>
    COMMAND
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid #27272a;
    border-radius: 6px;
    background: #09090b;
    color: #4ade80;
    font-family: monospace;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .7px;
    box-shadow: inset 0 0 8px rgba(34,197,94,.04);
}
.Badge i {
    color: #22c55e;
}`,
  },
  {
    id: 1770,
    name: "Holographic Badge",
    preview: (
      <span className="badge-1770">
        <i className="fa-solid fa-layer-group"></i>
        HOLOGRAPHIC
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-layer-group"></i>
    HOLOGRAPHIC
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#22d3ee) border-box;
    color: #fff;
    font-size: 7px;
    font-weight: 900;
    box-shadow: 0 0 14px rgba(99,102,241,.14);
}`,
  },
  {
    id: 1771,
    name: "Animated Neon Badge",
    preview: (
      <span className="badge-1771">
        <span></span>
        ACTIVE
      </span>
    ),
    html: `<span class="Badge">
    <span></span>
    ACTIVE
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border: 1px solid #22d3ee;
    border-radius: 999px;
    background: #020617;
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    box-shadow: 0 0 12px rgba(34,211,238,.15);
}
.Badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22d3ee;
    box-shadow: 0 0 9px #22d3ee;
    animation: badge-neon-pulse 1.4s ease-in-out infinite;
}
@keyframes badge-neon-pulse {
    50% {
        transform: scale(1.5);
        opacity: .55;
    }
}`,
  },
  {
    id: 1772,
    name: "Glass Notification Badge",
    preview: (
      <span className="badge-1772">
        <i className="fa-solid fa-bell"></i>
        12
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-bell"></i>
    12
</span>`,
    css: `.Badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 999px;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(12px);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}
.Badge i {
    font-size: 8px;
}`,
  },
  {
    id: 1773,
    name: "Legendary Prism Badge",
    preview: (
      <span className="badge-1773">
        <i className="fa-solid fa-gem"></i>
        LEGENDARY
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-gem"></i>
    LEGENDARY
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316,#22d3ee) border-box;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 18px rgba(99,102,241,.16);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 100%;
    left: -60px;
    top: 0;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);
    transform: skewX(-20deg);
    animation: badge-shimmer-1773 2.8s ease-in-out infinite;
}
.Badge i,
.Badge {
    text-shadow: 0 0 8px rgba(103,232,249,.2);
}
@keyframes badge-shimmer-1773 {
    0% {
        left: -60px;
    }
    55% {
        left: 130%;
    }
    100% {
        left: 130%;
    }
}`,
  },
  {
    id: 1774,
    name: "Legendary Ice Badge",
    preview: (
      <span className="badge-1774">
        <i className="fa-solid fa-snowflake"></i>
        ICE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-snowflake"></i>
    ICE
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#04151f,#04151f) padding-box,
        linear-gradient(90deg,#67e8f9,#38bdf8,#bae6fd,#22d3ee,#67e8f9) border-box;
    color: #e0faff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 18px rgba(56,189,248,.25),inset 0 0 12px rgba(103,232,249,.08);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 140%;
    top: -20%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
    transform: skewX(-20deg);
    animation: badge-ice-shine-1774 2.4s ease-in-out infinite;
}
.Badge i {
    color: #a5f3fc;
    text-shadow: 0 0 10px #22d3ee;
}
@keyframes badge-ice-shine-1774 {
    0% {
        left: -70px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1775,
    name: "Legendary Fire Badge",
    preview: (
      <span className="badge-1775">
        <i className="fa-solid fa-fire"></i>
        INFERNO
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-fire"></i>
    INFERNO
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#180704,#180704) padding-box,
        linear-gradient(90deg,#facc15,#f97316,#ef4444,#f97316,#facc15) border-box;
    color: #fff7ed;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(249,115,22,.28),inset 0 0 12px rgba(251,146,60,.08);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 140%;
    top: -20%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);
    transform: skewX(-20deg);
    animation: badge-fire-shine-1775 2.2s ease-in-out infinite;
}
.Badge i {
    color: #facc15;
    text-shadow: 0 0 10px #f97316;
}
@keyframes badge-fire-shine-1775 {
    0% {
        left: -70px;
    }
    50% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1776,
    name: "Legendary Rainbow Badge",
    preview: (
      <span className="badge-1776">
        <i className="fa-solid fa-sparkles"></i>
        RAINBOW
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-sparkles"></i>
    RAINBOW
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444) border-box;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    background-size: 100% 100%,300% 100%;
    box-shadow: 0 0 20px rgba(168,85,247,.18);
    overflow: hidden;
    animation: badge-rainbow-border-1776 5s linear infinite;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 140%;
    top: -20%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);
    transform: skewX(-20deg);
    animation: badge-rainbow-shine-1776 2.6s ease-in-out infinite;
}
.Badge i {
    color: #f0abfc;
    text-shadow: 0 0 9px #ec4899;
}
@keyframes badge-rainbow-border-1776 {
    to {
        background-position: 0 0,300% 0;
    }
}
@keyframes badge-rainbow-shine-1776 {
    0% {
        left: -70px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1777,
    name: "Legendary Neon Purple Badge",
    preview: (
      <span className="badge-1777">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        ARCANE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    ARCANE
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid #c084fc;
    border-radius: 999px;
    background: #10051a;
    color: #f3e8ff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 10px rgba(192,132,252,.45),0 0 25px rgba(168,85,247,.2),inset 0 0 12px rgba(168,85,247,.1);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 150%;
    left: -65px;
    top: -25%;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
    transform: skewX(-20deg);
    animation: badge-purple-shine-1777 2.5s ease-in-out infinite;
}
.Badge i {
    color: #e9d5ff;
    text-shadow: 0 0 10px #a855f7;
}
@keyframes badge-purple-shine-1777 {
    0% {
        left: -65px;
    }
    50% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1778,
    name: "Legendary Black Ice Badge",
    preview: (
      <span className="badge-1778">
        <i className="fa-solid fa-gem"></i>
        BLACK ICE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-gem"></i>
    BLACK ICE
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(145deg,#020617,#09090b) padding-box,
        linear-gradient(90deg,#0ea5e9,#67e8f9,#e0f2fe,#38bdf8,#0ea5e9) border-box;
    color: #e0f2fe;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 18px rgba(56,189,248,.18),inset 0 0 14px rgba(14,165,233,.06);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 45px;
    height: 160%;
    top: -30%;
    left: -60px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);
    transform: skewX(-22deg);
    animation: badge-black-ice-shine-1778 2.8s ease-in-out infinite;
}
.Badge i {
    color: #7dd3fc;
    text-shadow: 0 0 9px #38bdf8;
}
@keyframes badge-black-ice-shine-1778 {
    0% {
        left: -60px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1779,
    name: "Legendary Golden Badge",
    preview: (
      <span className="badge-1779">
        <i className="fa-solid fa-crown"></i>
        ELITE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-crown"></i>
    ELITE
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#161006,#161006) padding-box,
        linear-gradient(90deg,#fde047,#facc15,#fff7ae,#f59e0b,#fde047) border-box;
    color: #fef3c7;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(250,204,21,.2),inset 0 0 12px rgba(250,204,21,.08);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 150%;
    top: -25%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent);
    transform: skewX(-20deg);
    animation: badge-gold-shine-1779 2.5s ease-in-out infinite;
}
.Badge i {
    color: #facc15;
    text-shadow: 0 0 9px #f59e0b;
}
@keyframes badge-gold-shine-1779 {
    0% {
        left: -70px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1780,
    name: "Legendary Cyber Badge",
    preview: (
      <span className="badge-1780">
        <i className="fa-solid fa-microchip"></i>
        CYBER
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-microchip"></i>
    CYBER
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid #22d3ee;
    border-radius: 6px;
    background: repeating-linear-gradient(0deg,rgba(34,211,238,.03) 0px,rgba(34,211,238,.03) 2px,#020617 2px,#020617 4px);
    color: #67e8f9;
    font-family: monospace;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 16px rgba(34,211,238,.18),inset 0 0 12px rgba(34,211,238,.05);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 45px;
    height: 150%;
    top: -25%;
    left: -60px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);
    transform: skewX(-20deg);
    animation: badge-cyber-shine-1780 2.2s ease-in-out infinite;
}
.Badge i {
    color: #22d3ee;
    text-shadow: 0 0 9px #22d3ee;
}
@keyframes badge-cyber-shine-1780 {
    0% {
        left: -60px;
    }
    50% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1781,
    name: "Legendary Emerald Badge",
    preview: (
      <span className="badge-1781">
        <i className="fa-solid fa-leaf"></i>
        EMERALD
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-leaf"></i>
    EMERALD
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#03140b,#03140b) padding-box,
        linear-gradient(90deg,#22c55e,#86efac,#10b981,#34d399,#22c55e) border-box;
    color: #dcfce7;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(34,197,94,.2),inset 0 0 12px rgba(34,197,94,.06);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 52px;
    height: 145%;
    top: -22%;
    left: -65px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.78),transparent);
    transform: skewX(-20deg);
    animation: badge-emerald-shine-1781 2.6s ease-in-out infinite;
}
.Badge i {
    color: #4ade80;
    text-shadow: 0 0 9px #22c55e;
}
@keyframes badge-emerald-shine-1781 {
    0% {
        left: -65px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1782,
    name: "Legendary Holographic Badge",
    preview: (
      <span className="badge-1782">
        <i className="fa-solid fa-layer-group"></i>
        HOLOGRAM
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-layer-group"></i>
    HOLOGRAM
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(rgba(255,255,255,.08),rgba(255,255,255,.08)) padding-box,
        linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899,#f97316,#22d3ee) border-box;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    backdrop-filter: blur(12px);
    box-shadow: 0 0 18px rgba(168,85,247,.18);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 60px;
    height: 150%;
    top: -25%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);
    transform: skewX(-20deg);
    animation: badge-holo-shine-1782 2.4s ease-in-out infinite;
}
.Badge i {
    color: #c4b5fd;
    text-shadow: 0 0 9px #8b5cf6;
}
@keyframes badge-holo-shine-1782 {
    0% {
        left: -70px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}`,
  },
  {
    id: 1783,
    name: "Legendary Prism Core Badge",
    preview: (
      <span className="badge-1783">
        <i className="fa-solid fa-gem"></i>
        PRISM CORE
      </span>
    ),
    html: `<span class="Badge">
    <i class="fa-solid fa-gem"></i>
    PRISM CORE
</span>`,
    css: `.Badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: 1px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#08080a,#08080a) padding-box,
        linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899,#f97316,#22d3ee) border-box;
    color: #fff;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1.1px;
    box-shadow: 0 0 20px rgba(99,102,241,.2),inset 0 0 14px rgba(255,255,255,.03);
    overflow: hidden;
}
.Badge::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 150%;
    top: -25%;
    left: -70px;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent);
    transform: skewX(-20deg);
    animation: badge-prism-shine-1783 2.3s ease-in-out infinite;
}
.Badge::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.04),transparent);
    animation: badge-prism-glow-1783 2s ease-in-out infinite;
}
.Badge i {
    position: relative;
    z-index: 1;
    color: #67e8f9;
    text-shadow: 0 0 10px #22d3ee;
}
@keyframes badge-prism-shine-1783 {
    0% {
        left: -70px;
    }
    55% {
        left: 135%;
    }
    100% {
        left: 135%;
    }
}
@keyframes badge-prism-glow-1783 {
    50% {
        opacity: .65;
    }
}`,
  },
  {
    id: 3005,
    name: "Black Ice",
    preview: (
      <span className="badge-3005">
        <i className="ri-snowflake-line"></i>BLACK ICE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-snowflake-line"></i>BLACK ICE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020617,#09090b) padding-box,
    linear-gradient(90deg,#0ea5e9,#67e8f9,#e0f2fe,#38bdf8,#0ea5e9) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(56,189,248,.18),inset 0 0 14px rgba(14,165,233,.06);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  width: 45px;
  height: 160%;
  top: -30%;
  left: -60px;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);
  transform: skewX(-22deg);
  animation: shine 2.8s ease-in-out infinite;
}
.Badge i {
  color: #7dd3fc;
  text-shadow: 0 0 9px #38bdf8;
}
@keyframes shine {
  0% { left: -60px; }
  55% { left: 135%; }
  100% { left: 135%; }
}`,
  },
  {
    id: 3006,
    name: "Cyber Neon",
    preview: (
      <span className="badge-3006">
        <i className="ri-cpu-line"></i>CYBER NEON
      </span>
    ),
    html: `<span class="Badge"><i class="ri-cpu-line"></i>CYBER NEON</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#06000f,#12051f) padding-box,
    linear-gradient(90deg,#ec4899,#d946ef,#8b5cf6,#ec4899) border-box;
  color: #f5d0fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(217,70,239,.25);
  animation: pulse 2s ease-in-out infinite;
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);
  transform: translateX(-100%);
  animation: sweep 2.2s linear infinite;
}
.Badge i {
  color: #f0abfc;
  text-shadow: 0 0 10px #d946ef;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 14px rgba(217,70,239,.18); }
  50% { box-shadow: 0 0 28px rgba(217,70,239,.5); }
}
@keyframes sweep {
  to { transform: translateX(100%); }
}`,
  },
  {
    id: 3007,
    name: "Solar Flare",
    preview: (
      <span className="badge-3007">
        <i className="ri-sun-line"></i>SOLAR FLARE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sun-line"></i>SOLAR FLARE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#1c0900,#120500) padding-box,
    linear-gradient(90deg,#f97316,#facc15,#fde68a,#f97316) border-box;
  color: #fef3c7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(249,115,22,.22);
  animation: flare 1.8s ease-in-out infinite;
}
.Badge i {
  color: #facc15;
  text-shadow: 0 0 10px #f97316;
}
@keyframes flare {
  0%,100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.05); filter: brightness(1.3); }
}`,
  },
  {
    id: 3008,
    name: "Emerald Core",
    preview: (
      <span className="badge-3008">
        <i className="ri-leaf-line"></i>EMERALD CORE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-leaf-line"></i>EMERALD CORE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#02130d,#031c14) padding-box,
    linear-gradient(90deg,#10b981,#34d399,#a7f3d0,#10b981) border-box;
  color: #d1fae5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(16,185,129,.22);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: -100% 30%;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);
  transform: rotate(25deg);
  animation: emerald 2.5s linear infinite;
}
.Badge i {
  color: #34d399;
  text-shadow: 0 0 9px #10b981;
}
@keyframes emerald {
  to { transform: translateX(220%) rotate(25deg); }
}`,
  },
  {
    id: 3009,
    name: "Royal Void",
    preview: (
      <span className="badge-3009">
        <i className="ri-vip-crown-line"></i>ROYAL VOID
      </span>
    ),
    html: `<span class="Badge"><i class="ri-vip-crown-line"></i>ROYAL VOID</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#090014,#17052b) padding-box,
    linear-gradient(90deg,#7c3aed,#c084fc,#f0abfc,#7c3aed) border-box;
  color: #f3e8ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(124,58,237,.28);
}
.Badge::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.08);
  animation: royal 2s ease-in-out infinite;
}
.Badge i {
  color: #d8b4fe;
  text-shadow: 0 0 11px #8b5cf6;
}
@keyframes royal {
  0%,100% { opacity: .3; }
  50% { opacity: 1; }
}`,
  },
  {
    id: 3010,
    name: "Toxic Pulse",
    preview: (
      <span className="badge-3010">
        <i className="ri-skull-2-line"></i>TOXIC PULSE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-skull-2-line"></i>TOXIC PULSE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#071000,#0b1900) padding-box,
    linear-gradient(90deg,#84cc16,#bef264,#ecfccb,#84cc16) border-box;
  color: #ecfccb;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 16px rgba(132,204,22,.2);
  animation: toxic 1.4s ease-in-out infinite;
}
.Badge i {
  color: #a3e635;
  text-shadow: 0 0 10px #84cc16;
}
@keyframes toxic {
  0%,100% { box-shadow: 0 0 12px rgba(132,204,22,.15); }
  50% { box-shadow: 0 0 30px rgba(132,204,22,.55); }
}`,
  },
  {
    id: 3011,
    name: "Ocean Surge",
    preview: (
      <span className="badge-3011">
        <i className="ri-water-flash-line"></i>OCEAN SURGE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-water-flash-line"></i>OCEAN SURGE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#00151c,#022c3a) padding-box,
    linear-gradient(90deg,#06b6d4,#22d3ee,#a5f3fc,#06b6d4) border-box;
  color: #cffafe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(6,182,212,.22);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 200%;
  top: -50%;
  left: -100px;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.65),transparent);
  transform: rotate(20deg);
  animation: ocean 2.4s ease-in-out infinite;
}
.Badge i {
  color: #67e8f9;
  text-shadow: 0 0 10px #06b6d4;
}
@keyframes ocean {
  0% { left: -100px; }
  55%,100% { left: 140%; }
}`,
  },
  {
    id: 3012,
    name: "Crimson Rage",
    preview: (
      <span className="badge-3012">
        <i className="ri-fire-line"></i>CRIMSON RAGE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-fire-line"></i>CRIMSON RAGE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#180003,#2a0508) padding-box,
    linear-gradient(90deg,#dc2626,#f43f5e,#fecaca,#dc2626) border-box;
  color: #ffe4e6;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(220,38,38,.22);
  animation: rage 1.3s ease-in-out infinite alternate;
}
.Badge i {
  color: #fb7185;
  text-shadow: 0 0 10px #ef4444;
}
@keyframes rage {
  from { transform: translateY(0); }
  to { transform: translateY(-2px) scale(1.03); }
}`,
  },
  {
    id: 3013,
    name: "Holographic",
    preview: (
      <span className="badge-3013">
        <i className="ri-sparkling-2-line"></i>HOLOGRAPHIC
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sparkling-2-line"></i>HOLOGRAPHIC</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#111827,#0f172a) padding-box,
    linear-gradient(90deg,#f472b6,#c084fc,#60a5fa,#34d399,#facc15,#f472b6) border-box;
  background-size: auto,300% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  animation: holo 4s linear infinite;
}
.Badge i {
  text-shadow: 0 0 10px #ffffff;
}
@keyframes holo {
  to { background-position: 0 0,300% 0; }
}`,
  },
  {
    id: 3014,
    name: "Cyber Gold",
    preview: (
      <span className="badge-3014">
        <i className="ri-award-line"></i>CYBER GOLD
      </span>
    ),
    html: `<span class="Badge"><i class="ri-award-line"></i>CYBER GOLD</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#171005,#241806) padding-box,
    linear-gradient(90deg,#a16207,#f59e0b,#fef3c7,#f59e0b,#a16207) border-box;
  color: #fef3c7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(245,158,11,.2);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 180%;
  top: -40%;
  left: -50px;
  background: rgba(255,255,255,.8);
  filter: blur(3px);
  transform: rotate(20deg);
  animation: gold 2s linear infinite;
}
.Badge i {
  color: #fbbf24;
  text-shadow: 0 0 10px #f59e0b;
}
@keyframes gold {
  0% { left: -50px; }
  60%,100% { left: 135%; }
}`,
  },
  {
    id: 3015,
    name: "Arctic Storm",
    preview: (
      <span className="badge-3015">
        <i className="ri-snowy-line"></i>ARCTIC STORM
      </span>
    ),
    html: `<span class="Badge"><i class="ri-snowy-line"></i>ARCTIC STORM</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020617,#0f2740) padding-box,
    linear-gradient(90deg,#38bdf8,#bae6fd,#ffffff,#38bdf8) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(56,189,248,.25);
  animation: storm 2s ease-in-out infinite;
}
.Badge i {
  color: #bae6fd;
  text-shadow: 0 0 10px #38bdf8;
}
@keyframes storm {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.35); }
}`,
  },
  {
    id: 3016,
    name: "Void Hunter",
    preview: (
      <span className="badge-3016">
        <i className="ri-crosshair-2-line"></i>VOID HUNTER
      </span>
    ),
    html: `<span class="Badge"><i class="ri-crosshair-2-line"></i>VOID HUNTER</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#050505,#151515) padding-box,
    linear-gradient(90deg,#71717a,#e4e4e7,#52525b,#e4e4e7) border-box;
  color: #f4f4f5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(255,255,255,.1);
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.08);
  animation: hunter 1.8s ease-in-out infinite;
}
.Badge i {
  color: #d4d4d8;
  text-shadow: 0 0 8px #ffffff;
}
@keyframes hunter {
  0%,100% { opacity: .2; }
  50% { opacity: 1; }
}`,
  },
  {
    id: 3017,
    name: "Mystic Bloom",
    preview: (
      <span className="badge-3017">
        <i className="ri-flower-line"></i>MYSTIC BLOOM
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flower-line"></i>MYSTIC BLOOM</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#130018,#22002e) padding-box,
    linear-gradient(90deg,#ec4899,#c084fc,#f0abfc,#ec4899) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(236,72,153,.2);
  animation: bloom 2.5s ease-in-out infinite;
}
.Badge i {
  color: #f9a8d4;
  text-shadow: 0 0 10px #ec4899;
}
@keyframes bloom {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}`,
  },
  {
    id: 3018,
    name: "Plasma Core",
    preview: (
      <span className="badge-3018">
        <i className="ri-flashlight-line"></i>PLASMA CORE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>PLASMA CORE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#050b1a,#091b36) padding-box,
    linear-gradient(90deg,#2563eb,#22d3ee,#60a5fa,#2563eb) border-box;
  color: #dbeafe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(37,99,235,.2);
  animation: plasma 1.5s ease-in-out infinite;
}
.Badge i {
  color: #67e8f9;
  text-shadow: 0 0 12px #22d3ee;
}
@keyframes plasma {
  0%,100% { box-shadow: 0 0 14px rgba(34,211,238,.18); }
  50% { box-shadow: 0 0 34px rgba(34,211,238,.55); }
}`,
  },
  {
    id: 3019,
    name: "Ruby Flame",
    preview: (
      <span className="badge-3019">
        <i className="ri-vip-diamond-line"></i>RUBY FLAME
      </span>
    ),
    html: `<span class="Badge"><i class="ri-vip-diamond-line"></i>RUBY FLAME</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#180006,#2b030a) padding-box,
    linear-gradient(90deg,#be123c,#fb7185,#fecdd3,#be123c) border-box;
  color: #ffe4e6;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(190,18,60,.2);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  width: 35px;
  height: 170%;
  top: -35%;
  left: -50px;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
  transform: skewX(-20deg);
  animation: ruby 2s ease-in-out infinite;
}
.Badge i {
  color: #fb7185;
  text-shadow: 0 0 10px #e11d48;
}
@keyframes ruby {
  0% { left: -50px; }
  60%,100% { left: 135%; }
}`,
  },
  {
    id: 3020,
    name: "Aurora",
    preview: (
      <span className="badge-3020">
        <i className="ri-sparkling-fill"></i>AURORA
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sparkling-fill"></i>AURORA</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#031016,#081c19) padding-box,
    linear-gradient(90deg,#22d3ee,#34d399,#a3e635,#c084fc,#22d3ee) border-box;
  color: #ecfeff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  background-size: auto,300% 100%;
  box-shadow: 0 0 22px rgba(52,211,153,.2);
  animation: aurora 4s linear infinite;
}
.Badge i {
  color: #6ee7b7;
  text-shadow: 0 0 10px #34d399;
}
@keyframes aurora {
  to { background-position: 0 0,300% 0; }
}`,
  },
  {
    id: 3021,
    name: "Neon Reactor",
    preview: (
      <span className="badge-3021">
        <i className="ri-radio-button-line"></i>NEON REACTOR
      </span>
    ),
    html: `<span class="Badge"><i class="ri-radio-button-line"></i>NEON REACTOR</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#030712,#111827) padding-box,
    linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6,#06b6d4) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(6,182,212,.22);
  animation: reactor 1.1s ease-in-out infinite;
}
.Badge i {
  color: #22d3ee;
  text-shadow: 0 0 10px #06b6d4;
  animation: spin 1.6s linear infinite;
}
@keyframes reactor {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3022,
    name: "Galaxy Prime",
    preview: (
      <span className="badge-3022">
        <i className="ri-planet-line"></i>GALAXY PRIME
      </span>
    ),
    html: `<span class="Badge"><i class="ri-planet-line"></i>GALAXY PRIME</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#09051a,#130b2e) padding-box,
    linear-gradient(90deg,#6366f1,#a855f7,#ec4899,#6366f1) border-box;
  color: #ede9fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(168,85,247,.22);
}
.Badge::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(circle,rgba(255,255,255,.3) 1px,transparent 1px);
  background-size: 10px 10px;
  opacity: .35;
  animation: stars 3s linear infinite;
}
.Badge i {
  color: #c4b5fd;
  text-shadow: 0 0 10px #8b5cf6;
}
@keyframes stars {
  to { background-position: 20px 20px; }
}`,
  },
  {
    id: 3023,
    name: "Rainbow Core",
    preview: (
      <span className="badge-3023">
        <i className="ri-rainbow-line"></i>RAINBOW CORE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-rainbow-line"></i>RAINBOW CORE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#0b0b12,#141422) padding-box,
    linear-gradient(
      90deg,
      #ff0055,
      #ff9900,
      #ffee00,
      #00ff77,
      #00ddff,
      #6366f1,
      #d946ef,
      #ff0055
    ) border-box;
  background-size: auto,400% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(217,70,239,.25);
  animation: rainbow 4s linear infinite;
}
.Badge i {
  color: #ffffff;
  text-shadow:
    0 0 5px #ff0055,
    0 0 10px #00ddff;
}
@keyframes rainbow {
  to { background-position: 0 0,400% 0; }
}`,
  },
  {
    id: 3024,
    name: "Quantum Elite",
    preview: (
      <span className="badge-3024">
        <i className="ri-flashlight-line"></i>QUANTUM ELITE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>QUANTUM ELITE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#05050b,#11111e) padding-box,
    linear-gradient(90deg,#00f0ff,#7c3aed,#ff00aa,#00f0ff) border-box;
  color: #f5f3ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  background-size: auto,300% 100%;
  box-shadow:
    0 0 15px rgba(0,240,255,.18),
    0 0 25px rgba(124,58,237,.15);
  animation: quantum 2.5s ease-in-out infinite;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 20%,
    rgba(255,255,255,.5) 50%,
    transparent 80%
  );
  transform: translateX(-120%);
  animation: quantumShine 2.4s ease-in-out infinite;
}
.Badge i {
  color: #67e8f9;
  text-shadow:
    0 0 8px #00f0ff,
    0 0 14px #7c3aed;
}
@keyframes quantum {
  0%,100% {
    background-position: 0 0,0 0;
    box-shadow:
      0 0 15px rgba(0,240,255,.18),
      0 0 25px rgba(124,58,237,.15);
  }
  50% {
    background-position: 0 0,100% 0;
    box-shadow:
      0 0 28px rgba(0,240,255,.35),
      0 0 40px rgba(236,72,153,.25);
  }
}
@keyframes quantumShine {
  0% { transform: translateX(-120%); }
  55%,100% { transform: translateX(120%); }
}`,
  },
  {
    id: 3025,
    name: "Neon Eclipse",
    preview: (
      <span className="badge-3025">
        <i className="ri-moon-line"></i>NEON ECLIPSE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-moon-line"></i>NEON ECLIPSE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#030712,#0f172a) padding-box,
    linear-gradient(90deg,#6366f1,#a855f7,#ec4899,#6366f1) border-box;
  color: #ede9fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(168,85,247,.25);
  animation: eclipse 2s ease-in-out infinite;
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  width: 35px;
  height: 180%;
  top: -40%;
  left: -60px;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
  transform: rotate(20deg);
  animation: eclipseShine 2.5s linear infinite;
}
.Badge i {
  color: #c4b5fd;
  text-shadow: 0 0 10px #8b5cf6;
}
@keyframes eclipse {
  0%,100% { box-shadow: 0 0 14px rgba(168,85,247,.18); }
  50% { box-shadow: 0 0 32px rgba(236,72,153,.5); }
}
@keyframes eclipseShine {
  0% { left: -60px; }
  60%,100% { left: 135%; }
}`,
  },
  {
    id: 3026,
    name: "Electric Surge",
    preview: (
      <span className="badge-3026">
        <i className="ri-bolt-line"></i>ELECTRIC SURGE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-bolt-line"></i>ELECTRIC SURGE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#00141a,#002b35) padding-box,
    linear-gradient(90deg,#06b6d4,#22d3ee,#ffffff,#06b6d4) border-box;
  color: #cffafe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(34,211,238,.25);
  animation: surge 1s ease-in-out infinite;
}
.Badge i {
  color: #67e8f9;
  text-shadow: 0 0 12px #22d3ee;
  animation: bolt 0.8s ease-in-out infinite alternate;
}
@keyframes surge {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.04); box-shadow: 0 0 32px rgba(34,211,238,.55); }
}
@keyframes bolt {
  from { filter: brightness(1); }
  to { filter: brightness(1.8); transform: scale(1.15); }
}`,
  },
  {
    id: 3027,
    name: "Rose Quartz",
    preview: (
      <span className="badge-3027">
        <i className="ri-heart-3-line"></i>ROSE QUARTZ
      </span>
    ),
    html: `<span class="Badge"><i class="ri-heart-3-line"></i>ROSE QUARTZ</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#19020d,#2a0718) padding-box,
    linear-gradient(90deg,#fb7185,#f472b6,#fce7f3,#fb7185) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(244,114,182,.22);
  animation: quartz 2.2s ease-in-out infinite;
}
.Badge i {
  color: #f9a8d4;
  text-shadow: 0 0 10px #ec4899;
}
@keyframes quartz {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.06); filter: brightness(1.2); }
}`,
  },
  {
    id: 3028,
    name: "Inferno Core",
    preview: (
      <span className="badge-3028">
        <i className="ri-fire-fill"></i>INFERNO CORE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-fire-fill"></i>INFERNO CORE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#180300,#2b0800) padding-box,
    linear-gradient(90deg,#ef4444,#f97316,#facc15,#ef4444) border-box;
  color: #ffedd5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(249,115,22,.3);
  animation: inferno 1.4s ease-in-out infinite alternate;
}
.Badge i {
  color: #fbbf24;
  text-shadow: 0 0 12px #f97316;
}
@keyframes inferno {
  from { transform: translateY(0); }
  to { transform: translateY(-2px) scale(1.04); box-shadow: 0 0 34px rgba(239,68,68,.55); }
}`,
  },
  {
    id: 3029,
    name: "Mint Reactor",
    preview: (
      <span className="badge-3029">
        <i className="ri-flashlight-line"></i>MINT REACTOR
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>MINT REACTOR</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#00130f,#03241b) padding-box,
    linear-gradient(90deg,#10b981,#34d399,#ccfbf1,#10b981) border-box;
  color: #d1fae5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(16,185,129,.22);
  animation: reactor 1.6s ease-in-out infinite;
}
.Badge i {
  color: #6ee7b7;
  text-shadow: 0 0 10px #10b981;
  animation: reactorIcon 1.2s linear infinite;
}
@keyframes reactor {
  0%,100% { box-shadow: 0 0 12px rgba(16,185,129,.15); }
  50% { box-shadow: 0 0 30px rgba(16,185,129,.5); }
}
@keyframes reactorIcon {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3030,
    name: "Ultraviolet",
    preview: (
      <span className="badge-3030">
        <i className="ri-magic-line"></i>ULTRAVIOLET
      </span>
    ),
    html: `<span class="Badge"><i class="ri-magic-line"></i>ULTRAVIOLET</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#08000f,#18002d) padding-box,
    linear-gradient(90deg,#7c3aed,#a855f7,#e879f9,#7c3aed) border-box;
  color: #f3e8ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(139,92,246,.25);
  animation: ultraviolet 3s ease-in-out infinite;
}
.Badge i {
  color: #d8b4fe;
  text-shadow: 0 0 12px #a855f7;
}
@keyframes ultraviolet {
  0%,100% { filter: hue-rotate(0deg) brightness(1); }
  50% { filter: hue-rotate(35deg) brightness(1.35); }
}`,
  },
  {
    id: 3031,
    name: "Titanium Edge",
    preview: (
      <span className="badge-3031">
        <i className="ri-shield-star-line"></i>TITANIUM EDGE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-shield-star-line"></i>TITANIUM EDGE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#090909,#202020) padding-box,
    linear-gradient(90deg,#52525b,#f4f4f5,#71717a,#ffffff,#52525b) border-box;
  color: #fafafa;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 15px rgba(255,255,255,.12);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: -100% 40%;
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);
  transform: rotate(25deg);
  animation: titanium 2.4s linear infinite;
}
.Badge i {
  color: #e4e4e7;
  text-shadow: 0 0 9px #ffffff;
}
@keyframes titanium {
  to { transform: translateX(220%) rotate(25deg); }
}`,
  },
  {
    id: 3032,
    name: "Cyber Lime",
    preview: (
      <span className="badge-3032">
        <i className="ri-terminal-box-line"></i>CYBER LIME
      </span>
    ),
    html: `<span class="Badge"><i class="ri-terminal-box-line"></i>CYBER LIME</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#071000,#121f00) padding-box,
    linear-gradient(90deg,#65a30d,#a3e635,#d9f99d,#65a30d) border-box;
  color: #ecfccb;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(132,204,22,.2);
  animation: cyberLime 1.5s ease-in-out infinite;
}
.Badge i {
  color: #bef264;
  text-shadow: 0 0 10px #84cc16;
}
@keyframes cyberLime {
  0%,100% { transform: skewX(0); }
  45% { transform: skewX(-2deg); }
  50% { transform: skewX(2deg); filter: brightness(1.35); }
}`,
  },
  {
    id: 3033,
    name: "Sapphire Flux",
    preview: (
      <span className="badge-3033">
        <i className="ri-gem-line"></i>SAPPHIRE FLUX
      </span>
    ),
    html: `<span class="Badge"><i class="ri-gem-line"></i>SAPPHIRE FLUX</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020617,#082f49) padding-box,
    linear-gradient(90deg,#2563eb,#38bdf8,#dbeafe,#2563eb) border-box;
  color: #dbeafe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(59,130,246,.25);
  animation: flux 3s ease-in-out infinite;
}
.Badge i {
  color: #93c5fd;
  text-shadow: 0 0 11px #3b82f6;
}
@keyframes flux {
  0%,100% { background-position: 0 0; }
  50% { background-position: 100% 0; }
}`,
  },
  {
    id: 3034,
    name: "Cyber Rose",
    preview: (
      <span className="badge-3034">
        <i className="ri-heart-pulse-line"></i>CYBER ROSE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-heart-pulse-line"></i>CYBER ROSE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#16000b,#250016) padding-box,
    linear-gradient(90deg,#f43f5e,#ec4899,#c026d3,#f43f5e) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(236,72,153,.25);
  animation: cyberRose 1.8s ease-in-out infinite;
}
.Badge i {
  color: #fb7185;
  text-shadow: 0 0 10px #f43f5e;
}
@keyframes cyberRose {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.05); box-shadow: 0 0 34px rgba(244,63,94,.5); }
}`,
  },
  {
    id: 3035,
    name: "Golden Nova",
    preview: (
      <span className="badge-3035">
        <i className="ri-star-smile-line"></i>GOLDEN NOVA
      </span>
    ),
    html: `<span class="Badge"><i class="ri-star-smile-line"></i>GOLDEN NOVA</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#170d00,#291b03) padding-box,
    linear-gradient(90deg,#ca8a04,#facc15,#fff7b2,#facc15,#ca8a04) border-box;
  color: #fef3c7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(250,204,21,.24);
  animation: nova 2s ease-in-out infinite;
}
.Badge i {
  color: #fde68a;
  text-shadow: 0 0 11px #facc15;
}
@keyframes nova {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.45); }
}`,
  },
  {
    id: 3036,
    name: "Aqua Ghost",
    preview: (
      <span className="badge-3036">
        <i className="ri-ghost-line"></i>AQUA GHOST
      </span>
    ),
    html: `<span class="Badge"><i class="ri-ghost-line"></i>AQUA GHOST</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#021013,#06252b) padding-box,
    linear-gradient(90deg,#14b8a6,#22d3ee,#99f6e4,#14b8a6) border-box;
  color: #ccfbf1;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: .85;
  box-shadow: 0 0 20px rgba(20,184,166,.2);
  animation: ghost 2.5s ease-in-out infinite;
}
.Badge i {
  color: #5eead4;
  text-shadow: 0 0 10px #14b8a6;
}
@keyframes ghost {
  0%,100% { opacity: .65; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-3px); }
}`,
  },
  {
    id: 3037,
    name: "Cosmic Fire",
    preview: (
      <span className="badge-3037">
        <i className="ri-planet-fill"></i>COSMIC FIRE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-planet-fill"></i>COSMIC FIRE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#10000a,#21000e) padding-box,
    linear-gradient(90deg,#7c3aed,#ec4899,#f97316,#7c3aed) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(236,72,153,.25);
  animation: cosmic 3s linear infinite;
}
.Badge i {
  color: #fb7185;
  text-shadow: 0 0 11px #ec4899;
}
@keyframes cosmic {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`,
  },
  {
    id: 3038,
    name: "Frozen Pulse",
    preview: (
      <span className="badge-3038">
        <i className="ri-snowflake-line"></i>FROZEN PULSE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-snowflake-line"></i>FROZEN PULSE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#02101d,#07233d) padding-box,
    linear-gradient(90deg,#38bdf8,#7dd3fc,#ffffff,#38bdf8) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(56,189,248,.25);
  animation: frozen 1.7s ease-in-out infinite;
}
.Badge i {
  color: #bae6fd;
  text-shadow: 0 0 11px #38bdf8;
  animation: snowSpin 4s linear infinite;
}
@keyframes frozen {
  0%,100% { box-shadow: 0 0 14px rgba(56,189,248,.16); }
  50% { box-shadow: 0 0 34px rgba(56,189,248,.55); }
}
@keyframes snowSpin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3039,
    name: "Toxic Crystal",
    preview: (
      <span className="badge-3039">
        <i className="ri-virus-line"></i>TOXIC CRYSTAL
      </span>
    ),
    html: `<span class="Badge"><i class="ri-virus-line"></i>TOXIC CRYSTAL</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#071000,#142000) padding-box,
    linear-gradient(90deg,#84cc16,#bef264,#facc15,#84cc16) border-box;
  color: #ecfccb;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(132,204,22,.2);
  animation: toxicCrystal 2s ease-in-out infinite;
}
.Badge i {
  color: #a3e635;
  text-shadow: 0 0 10px #84cc16;
}
@keyframes toxicCrystal {
  0%,100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(1deg) scale(1.04); }
}`,
  },
  {
    id: 3040,
    name: "Electric Purple",
    preview: (
      <span className="badge-3040">
        <i className="ri-flashlight-line"></i>ELECTRIC PURPLE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>ELECTRIC PURPLE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#0a0015,#19002e) padding-box,
    linear-gradient(90deg,#7c3aed,#a855f7,#22d3ee,#7c3aed) border-box;
  color: #ede9fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(124,58,237,.24);
  animation: purplePulse 1.3s ease-in-out infinite;
}
.Badge i {
  color: #c4b5fd;
  text-shadow: 0 0 10px #8b5cf6;
}
@keyframes purplePulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); filter: brightness(1.35); }
}`,
  },
  {
    id: 3041,
    name: "Rainbow Circuit",
    preview: (
      <span className="badge-3041">
        <i className="ri-cpu-line"></i>RAINBOW CIRCUIT
      </span>
    ),
    html: `<span class="Badge"><i class="ri-cpu-line"></i>RAINBOW CIRCUIT</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#070707,#121212) padding-box,
    linear-gradient(90deg,#ff0055,#ff9900,#00ff88,#00ddff,#8b5cf6,#ff0055) border-box;
  background-size: auto,400% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(0,221,255,.2);
  animation: circuit 4s linear infinite;
}
.Badge i {
  color: #ffffff;
  text-shadow: 0 0 8px #00ddff;
}
@keyframes circuit {
  to { background-position: 0 0,400% 0; }
}`,
  },
  {
    id: 3042,
    name: "Crimson Nova",
    preview: (
      <span className="badge-3042">
        <i className="ri-star-line"></i>CRIMSON NOVA
      </span>
    ),
    html: `<span class="Badge"><i class="ri-star-line"></i>CRIMSON NOVA</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#160004,#30050c) padding-box,
    linear-gradient(90deg,#991b1b,#ef4444,#fca5a5,#991b1b) border-box;
  color: #fee2e2;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(239,68,68,.22);
  animation: crimson 1.9s ease-in-out infinite;
}
.Badge i {
  color: #fca5a5;
  text-shadow: 0 0 10px #ef4444;
}
@keyframes crimson {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.06); box-shadow: 0 0 35px rgba(239,68,68,.5); }
}`,
  },
  {
    id: 3043,
    name: "Mystic Blue",
    preview: (
      <span className="badge-3043">
        <i className="ri-eye-line"></i>MYSTIC BLUE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-eye-line"></i>MYSTIC BLUE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020617,#0c2340) padding-box,
    linear-gradient(90deg,#2563eb,#06b6d4,#93c5fd,#2563eb) border-box;
  color: #dbeafe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(37,99,235,.22);
  animation: mystic 2.4s ease-in-out infinite;
}
.Badge i {
  color: #7dd3fc;
  text-shadow: 0 0 11px #0ea5e9;
}
@keyframes mystic {
  0%,100% { opacity: .8; }
  50% { opacity: 1; filter: brightness(1.35); }
}`,
  },
  {
    id: 3044,
    name: "Violet Storm",
    preview: (
      <span className="badge-3044">
        <i className="ri-thunderstorms-line"></i>VIOLET STORM
      </span>
    ),
    html: `<span class="Badge"><i class="ri-thunderstorms-line"></i>VIOLET STORM</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#090014,#18002c) padding-box,
    linear-gradient(90deg,#7c3aed,#c026d3,#22d3ee,#7c3aed) border-box;
  color: #f5f3ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(124,58,237,.24);
  animation: storm 1.2s ease-in-out infinite;
}
.Badge i {
  color: #c4b5fd;
  text-shadow: 0 0 12px #a855f7;
}
@keyframes storm {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.5); transform: translateX(1px); }
}`,
  },
  {
    id: 3045,
    name: "Hologram Core",
    preview: (
      <span className="badge-3045">
        <i className="ri-hologram-2-line"></i>HOLOGRAM CORE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-hologram-2-line"></i>HOLOGRAM CORE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#071014,#101827) padding-box,
    linear-gradient(90deg,#22d3ee,#a855f7,#f472b6,#34d399,#22d3ee) border-box;
  background-size: auto,400% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 25px rgba(34,211,238,.2);
  animation: hologram 3.5s linear infinite;
}
.Badge i {
  color: #ffffff;
  text-shadow: 0 0 10px #22d3ee;
}
@keyframes hologram {
  to { background-position: 0 0,400% 0; }
}`,
  },
  {
    id: 3046,
    name: "Dark Matter",
    preview: (
      <span className="badge-3046">
        <i className="ri-contrast-2-line"></i>DARK MATTER
      </span>
    ),
    html: `<span class="Badge"><i class="ri-contrast-2-line"></i>DARK MATTER</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020204,#111116) padding-box,
    linear-gradient(90deg,#27272a,#71717a,#d4d4d8,#27272a) border-box;
  color: #f4f4f5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 18px rgba(255,255,255,.08);
  animation: matter 2s ease-in-out infinite;
}
.Badge i {
  color: #d4d4d8;
  text-shadow: 0 0 9px #ffffff;
}
@keyframes matter {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.03); filter: invert(.08); }
}`,
  },
  {
    id: 3047,
    name: "Solar Gold",
    preview: (
      <span className="badge-3047">
        <i className="ri-sun-foggy-line"></i>SOLAR GOLD
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sun-foggy-line"></i>SOLAR GOLD</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#1b1000,#2b1b00) padding-box,
    linear-gradient(90deg,#f59e0b,#fde68a,#ffffff,#f59e0b) border-box;
  color: #fef3c7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(245,158,11,.22);
  animation: solar 2s ease-in-out infinite;
}
.Badge i {
  color: #fde68a;
  text-shadow: 0 0 10px #f59e0b;
}
@keyframes solar {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.4); box-shadow: 0 0 35px rgba(245,158,11,.5); }
}`,
  },
  {
    id: 3048,
    name: "Emerald Wave",
    preview: (
      <span className="badge-3048">
        <i className="ri-leaf-2-line"></i>EMERALD WAVE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-leaf-2-line"></i>EMERALD WAVE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#02140d,#07351f) padding-box,
    linear-gradient(90deg,#059669,#10b981,#6ee7b7,#059669) border-box;
  color: #d1fae5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 19px rgba(16,185,129,.22);
  animation: wave 2.8s ease-in-out infinite;
}
.Badge i {
  color: #6ee7b7;
  text-shadow: 0 0 10px #10b981;
}
@keyframes wave {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}`,
  },
  {
    id: 3049,
    name: "Magenta Flash",
    preview: (
      <span className="badge-3049">
        <i className="ri-flashlight-line"></i>MAGENTA FLASH
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>MAGENTA FLASH</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#15000f,#29001f) padding-box,
    linear-gradient(90deg,#db2777,#ec4899,#f0abfc,#db2777) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(219,39,119,.22);
  animation: magenta 1.1s ease-in-out infinite;
}
.Badge i {
  color: #f9a8d4;
  text-shadow: 0 0 12px #ec4899;
}
@keyframes magenta {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.55); transform: scale(1.05); }
}`,
  },
  {
    id: 3050,
    name: "Rainbow Nova",
    preview: (
      <span className="badge-3050">
        <i className="ri-sparkling-2-line"></i>RAINBOW NOVA
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sparkling-2-line"></i>RAINBOW NOVA</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#08080d,#11111b) padding-box,
    linear-gradient(90deg,#ff0055,#ff9900,#ffee00,#00ff77,#00ddff,#7c3aed,#ff0055) border-box;
  background-size: auto,500% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 25px rgba(236,72,153,.25);
  animation: rainbowNova 4s linear infinite;
}
.Badge i {
  color: #ffffff;
  text-shadow: 0 0 9px #ff00aa;
}
@keyframes rainbowNova {
  0% { background-position: 0 0,0 0; }
  100% { background-position: 0 0,500% 0; }
}`,
  },
  {
    id: 3051,
    name: "Blue Flame",
    preview: (
      <span className="badge-3051">
        <i className="ri-fire-line"></i>BLUE FLAME
      </span>
    ),
    html: `<span class="Badge"><i class="ri-fire-line"></i>BLUE FLAME</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#00101c,#00283d) padding-box,
    linear-gradient(90deg,#0284c7,#22d3ee,#e0f2fe,#0284c7) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(14,165,233,.25);
  animation: blueFlame 1.3s ease-in-out infinite alternate;
}
.Badge i {
  color: #7dd3fc;
  text-shadow: 0 0 12px #0ea5e9;
}
@keyframes blueFlame {
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(-2px) scale(1.05); filter: brightness(1.3); }
}`,
  },
  {
    id: 3052,
    name: "Purple Crystal",
    preview: (
      <span className="badge-3052">
        <i className="ri-vip-diamond-line"></i>PURPLE CRYSTAL
      </span>
    ),
    html: `<span class="Badge"><i class="ri-vip-diamond-line"></i>PURPLE CRYSTAL</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#0d0218,#220536) padding-box,
    linear-gradient(90deg,#7e22ce,#a855f7,#f0abfc,#7e22ce) border-box;
  color: #f3e8ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(168,85,247,.24);
  animation: crystal 2.3s ease-in-out infinite;
}
.Badge i {
  color: #d8b4fe;
  text-shadow: 0 0 11px #a855f7;
}
@keyframes crystal {
  0%,100% { transform: rotate(0); }
  50% { transform: rotate(-2deg) scale(1.04); }
}`,
  },
  {
    id: 3053,
    name: "Carbon Neon",
    preview: (
      <span className="badge-3053">
        <i className="ri-grid-line"></i>CARBON NEON
      </span>
    ),
    html: `<span class="Badge"><i class="ri-grid-line"></i>CARBON NEON</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#050505,#171717) padding-box,
    linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899,#06b6d4) border-box;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(124,58,237,.22);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 8px,
    rgba(255,255,255,.08) 9px
  );
  animation: carbon 1.5s linear infinite;
}
.Badge i {
  color: #22d3ee;
  text-shadow: 0 0 10px #06b6d4;
}
@keyframes carbon {
  to { transform: translateX(16px); }
}`,
  },
  {
    id: 3054,
    name: "Solaris",
    preview: (
      <span className="badge-3054">
        <i className="ri-sun-line"></i>SOLARIS
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sun-line"></i>SOLARIS</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#1a0e00,#302000) padding-box,
    linear-gradient(90deg,#ea580c,#facc15,#fff7b2,#ea580c) border-box;
  color: #fef3c7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(234,88,12,.22);
  animation: solaris 2.5s ease-in-out infinite;
}
.Badge i {
  color: #fde68a;
  text-shadow: 0 0 12px #f97316;
  animation: solarSpin 5s linear infinite;
}
@keyframes solaris {
  0%,100% { box-shadow: 0 0 15px rgba(234,88,12,.16); }
  50% { box-shadow: 0 0 35px rgba(250,204,21,.5); }
}
@keyframes solarSpin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3055,
    name: "Oceanic",
    preview: (
      <span className="badge-3055">
        <i className="ri-water-flash-line"></i>OCEANIC
      </span>
    ),
    html: `<span class="Badge"><i class="ri-water-flash-line"></i>OCEANIC</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#001019,#002b41) padding-box,
    linear-gradient(90deg,#0369a1,#0ea5e9,#67e8f9,#0369a1) border-box;
  color: #e0f2fe;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(14,165,233,.22);
  animation: oceanic 2s ease-in-out infinite;
}
.Badge i {
  color: #7dd3fc;
  text-shadow: 0 0 10px #0ea5e9;
}
@keyframes oceanic {
  0%,100% { transform: translateX(0); }
  50% { transform: translateX(2px); }
}`,
  },
  {
    id: 3056,
    name: "Ruby Pulse",
    preview: (
      <span className="badge-3056">
        <i className="ri-vip-diamond-line"></i>RUBY PULSE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-vip-diamond-line"></i>RUBY PULSE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#170006,#32000d) padding-box,
    linear-gradient(90deg,#be123c,#e11d48,#fb7185,#be123c) border-box;
  color: #ffe4e6;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(225,29,72,.22);
  animation: rubyPulse 1.5s ease-in-out infinite;
}
.Badge i {
  color: #fb7185;
  text-shadow: 0 0 12px #e11d48;
}
@keyframes rubyPulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.08); box-shadow: 0 0 34px rgba(244,63,94,.52); }
}`,
  },
  {
    id: 3057,
    name: "Mint Hologram",
    preview: (
      <span className="badge-3057">
        <i className="ri-sparkling-line"></i>MINT HOLOGRAM
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sparkling-line"></i>MINT HOLOGRAM</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#03120f,#062a20) padding-box,
    linear-gradient(90deg,#2dd4bf,#34d399,#a7f3d0,#2dd4bf) border-box;
  background-size: auto,300% 100%;
  color: #d1fae5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(45,212,191,.22);
  animation: mintHolo 3s linear infinite;
}
.Badge i {
  color: #99f6e4;
  text-shadow: 0 0 10px #2dd4bf;
}
@keyframes mintHolo {
  to { background-position: 0 0,300% 0; }
}`,
  },
  {
    id: 3058,
    name: "Void Purple",
    preview: (
      <span className="badge-3058">
        <i className="ri-ghost-2-line"></i>VOID PURPLE
      </span>
    ),
    html: `<span class="Badge"><i class="ri-ghost-2-line"></i>VOID PURPLE</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#05000b,#12001f) padding-box,
    linear-gradient(90deg,#581c87,#7e22ce,#d946ef,#581c87) border-box;
  color: #f3e8ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: .9;
  box-shadow: 0 0 22px rgba(126,34,206,.22);
  animation: voidPurple 2.7s ease-in-out infinite;
}
.Badge i {
  color: #d8b4fe;
  text-shadow: 0 0 10px #a855f7;
}
@keyframes voidPurple {
  0%,100% { opacity: .65; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
}`,
  },
  {
    id: 3059,
    name: "Arctic Glow",
    preview: (
      <span className="badge-3059">
        <i className="ri-snowflake-line"></i>ARCTIC GLOW
      </span>
    ),
    html: `<span class="Badge"><i class="ri-snowflake-line"></i>ARCTIC GLOW</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020617,#0b2540) padding-box,
    linear-gradient(90deg,#0ea5e9,#7dd3fc,#ffffff,#0ea5e9) border-box;
  color: #f0f9ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 21px rgba(14,165,233,.24);
  animation: arctic 2s ease-in-out infinite;
}
.Badge i {
  color: #bae6fd;
  text-shadow: 0 0 12px #38bdf8;
}
@keyframes arctic {
  0%,100% { filter: brightness(1); }
  50% { filter: brightness(1.45); transform: scale(1.04); }
}`,
  },
  {
    id: 3060,
    name: "Neon Matrix",
    preview: (
      <span className="badge-3060">
        <i className="ri-code-box-line"></i>NEON MATRIX
      </span>
    ),
    html: `<span class="Badge"><i class="ri-code-box-line"></i>NEON MATRIX</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#020c04,#061c0b) padding-box,
    linear-gradient(90deg,#16a34a,#22c55e,#86efac,#16a34a) border-box;
  color: #dcfce7;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(34,197,94,.22);
  overflow: hidden;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(74,222,128,.08) 4px
  );
  animation: matrix 1s linear infinite;
}
.Badge i {
  color: #86efac;
  text-shadow: 0 0 10px #22c55e;
}
@keyframes matrix {
  to { transform: translateY(10px); }
}`,
  },
  {
    id: 3061,
    name: "Plasma Pink",
    preview: (
      <span className="badge-3061">
        <i className="ri-flashlight-line"></i>PLASMA PINK
      </span>
    ),
    html: `<span class="Badge"><i class="ri-flashlight-line"></i>PLASMA PINK</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#150009,#2a0018) padding-box,
    linear-gradient(90deg,#db2777,#f472b6,#f0abfc,#db2777) border-box;
  color: #fce7f3;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(236,72,153,.24);
  animation: plasmaPink 1.7s ease-in-out infinite;
}
.Badge i {
  color: #f9a8d4;
  text-shadow: 0 0 12px #ec4899;
}
@keyframes plasmaPink {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.08) rotate(-1deg); }
}`,
  },
  {
    id: 3062,
    name: "Cyber Flame",
    preview: (
      <span className="badge-3062">
        <i className="ri-fire-fill"></i>CYBER FLAME
      </span>
    ),
    html: `<span class="Badge"><i class="ri-fire-fill"></i>CYBER FLAME</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#120400,#230b00) padding-box,
    linear-gradient(90deg,#f97316,#ef4444,#ec4899,#f97316) border-box;
  color: #ffedd5;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 22px rgba(249,115,22,.24);
  animation: cyberFlame 2s ease-in-out infinite;
}
.Badge i {
  color: #fb923c;
  text-shadow: 0 0 12px #ef4444;
}
@keyframes cyberFlame {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-3px) scale(1.05); filter: hue-rotate(15deg); }
}`,
  },
  {
    id: 3063,
    name: "Celestial",
    preview: (
      <span className="badge-3063">
        <i className="ri-sparkling-fill"></i>CELESTIAL
      </span>
    ),
    html: `<span class="Badge"><i class="ri-sparkling-fill"></i>CELESTIAL</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#050510,#11112a) padding-box,
    linear-gradient(90deg,#818cf8,#c4b5fd,#f5f3ff,#818cf8) border-box;
  color: #f5f3ff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 0 23px rgba(129,140,248,.23);
  animation: celestial 2.6s ease-in-out infinite;
}
.Badge i {
  color: #e0e7ff;
  text-shadow: 0 0 12px #818cf8;
  animation: celestialSpin 3s linear infinite;
}
@keyframes celestial {
  0%,100% { opacity: .8; }
  50% { opacity: 1; filter: brightness(1.4); }
}
@keyframes celestialSpin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 3064,
    name: "Ultimate Spectrum",
    preview: (
      <span className="badge-3064">
        <i className="ri-rainbow-line"></i>ULTIMATE SPECTRUM
      </span>
    ),
    html: `<span class="Badge"><i class="ri-rainbow-line"></i>ULTIMATE SPECTRUM</span>`,
    css: `.Badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 999px;
  background:
    linear-gradient(145deg,#06060b,#12121d) padding-box,
    linear-gradient(
      90deg,
      #ff0055,
      #ff9900,
      #ffee00,
      #00ff77,
      #00ddff,
      #3366ff,
      #a855f7,
      #ff0055
    ) border-box;
  background-size: auto,600% 100%;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow:
    0 0 18px rgba(255,0,110,.2),
    0 0 30px rgba(0,221,255,.18);
  animation: spectrum 4s linear infinite;
}
.Badge::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 20%,
    rgba(255,255,255,.45) 50%,
    transparent 80%
  );
  transform: translateX(-120%);
  animation: spectrumShine 2.5s ease-in-out infinite;
}
.Badge i {
  color: #ffffff;
  text-shadow:
    0 0 7px #ff0055,
    0 0 12px #00ddff,
    0 0 16px #a855f7;
}
@keyframes spectrum {
  0% { background-position: 0 0,0 0; }
  100% { background-position: 0 0,600% 0; }
}
@keyframes spectrumShine {
  0% { transform: translateX(-120%); }
  55%,100% { transform: translateX(120%); }
}`,
  },
];
