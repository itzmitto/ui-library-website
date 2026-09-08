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
];
