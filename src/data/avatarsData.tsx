import "../pages/All.css";

export const avatars = [
  {
    id: 1382,
    name: "Avatar Group",
    preview: (
      <div className="avatar-1382">
        <span>AB</span>
        <span>JD</span>
        <span>MK</span>
        <span>+8</span>
      </div>
    ),
    html: `<div class="Avatar-group">
    <span>AB</span>
    <span>JD</span>
    <span>MK</span>
    <span>+8</span>
</div>`,
    css: `.Avatar-group {
    display: flex;
    align-items: center;
}
.Avatar-group span {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    margin-left: -8px;
    border: 3px solid #ffffff;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #ffffff;
    font-size: 9px;
    font-weight: 700;
}
.Avatar-group span:first-child {
    margin-left: 0;
}
.Avatar-group span:nth-child(2) {
    background: linear-gradient(135deg,#ec4899,#f97316);
}
.Avatar-group span:nth-child(3) {
    background: linear-gradient(135deg,#16a34a,#14b8a6);
}
.Avatar-group span:last-child {
    background: #18181b;
}`,
  },
  {
    id: 1383,
    name: "Avatar Status Card",
    preview: (
      <div className="avatar-1383">
        <div className="avatar-1383__image">AB</div>
        <div>
          <strong>André Babirian</strong>
          <small>
            <span></span>
            Available
          </small>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    ),
    html: `<div class="Avatar-card">
    <div class="Avatar-image">AB</div>
    <div>
        <strong>André Babirian</strong>
        <small>
            <span></span>
            Available
        </small>
    </div>
    <button>
        <i class="fa-solid fa-ellipsis"></i>
    </button>
</div>`,
    css: `.Avatar-card {
    width: 270px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
}
.Avatar-image {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
}
.Avatar-card > div:nth-child(2) {
    flex: 1;
}
.Avatar-card strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Avatar-card small {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 3px;
    color: #71717a;
    font-size: 8px;
}
.Avatar-card small span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
}
.Avatar-card button {
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 7px;
    background: #f4f4f5;
    color: #71717a;
}`,
  },

  {
    id: 1554,
    name: "Gradient Initial Avatar",
    preview: <div className="av-1554">A</div>,
    html: `<div class="Avatar">A</div>`,
    css: `.Avatar {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    box-shadow: 0 6px 18px rgba(37,99,235,.25);
}`,
  },
  {
    id: 1555,
    name: "Online Status Avatar",
    preview: (
      <div className="av-1555">
        <div className="av-1555__avatar">A</div>
        <span className="av-1555__status"></span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">A</div>
    <span class="Avatar-status"></span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 52px;
    height: 52px;
}
.Avatar {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    font-weight: 800;
}
.Avatar-status {
    position: absolute;
    right: 1px;
    bottom: 1px;
    width: 12px;
    height: 12px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #22c55e;
}`,
  },
  {
    id: 1556,
    name: "Blue Ring Avatar",
    preview: (
      <div className="av-1556">
        <div className="av-1556__inner">A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-inner">A</div>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg,#38bdf8,#2563eb);
}
.Avatar-inner {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #2563eb;
    font-size: 16px;
    font-weight: 800;
}`,
  },
  {
    id: 1557,
    name: "Dark Premium Avatar",
    preview: (
      <div className="av-1557">
        <i className="fa-solid fa-user"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user"></i>
</div>`,
    css: `.Avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(145deg,#27272a,#09090b);
    border: 1px solid #3f3f46;
    color: #d4d4d8;
    font-size: 18px;
    box-shadow: inset 0 0 15px rgba(255,255,255,.04),0 8px 20px rgba(0,0,0,.2);
}`,
  },
  {
    id: 1558,
    name: "Stacked Team Avatars",
    preview: (
      <div className="av-1558">
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>+8</span>
      </div>
    ),
    html: `<div class="Avatar-stack">
    <span>A</span>
    <span>B</span>
    <span>C</span>
    <span>+8</span>
</div>`,
    css: `.Avatar-stack {
    display: flex;
    align-items: center;
}
.Avatar-stack span {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    margin-left: -8px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 10px;
    font-weight: 800;
}
.Avatar-stack span:first-child {
    margin-left: 0;
}
.Avatar-stack span:nth-child(2) {
    background: linear-gradient(135deg,#f97316,#ef4444);
}
.Avatar-stack span:nth-child(3) {
    background: linear-gradient(135deg,#06b6d4,#0ea5e9);
}
.Avatar-stack span:last-child {
    background: #18181b;
}`,
  },
  {
    id: 1559,
    name: "Avatar With Notification",
    preview: (
      <div className="av-1559">
        <div>A</div>
        <span>3</span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">A</div>
    <span class="Avatar-badge">3</span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 50px;
    height: 50px;
}
.Avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#ec4899,#8b5cf6);
    color: #fff;
    font-size: 15px;
    font-weight: 800;
}
.Avatar-badge {
    position: absolute;
    top: -3px;
    right: -3px;
    min-width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    border: 2px solid #fff;
    border-radius: 999px;
    background: #ef4444;
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}`,
  },
  {
    id: 1560,
    name: "Glass Avatar",
    preview: (
      <div className="av-1560">
        <i className="fa-solid fa-user"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    background: rgba(255,255,255,.14);
    backdrop-filter: blur(14px);
    color: #fff;
    font-size: 18px;
    box-shadow: 0 10px 25px rgba(0,0,0,.15);
}`,
  },
  {
    id: 1561,
    name: "Square Profile Avatar",
    preview: (
      <div className="av-1561">
        <i className="fa-solid fa-code"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-code"></i>
</div>`,
    css: `.Avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg,#0ea5e9,#2563eb);
    color: #fff;
    font-size: 17px;
    box-shadow: 0 6px 16px rgba(37,99,235,.22);
}`,
  },
  {
    id: 1562,
    name: "Rainbow Avatar",
    preview: (
      <div className="av-1562">
        <div>AB</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>AB</div>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    padding: 2px;
    border-radius: 50%;
    background: conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
}
.Avatar div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
}`,
  },
  {
    id: 1563,
    name: "Online Profile Avatar",
    preview: (
      <div className="av-1563">
        <div className="av-1563__avatar">A</div>
        <div className="av-1563__info">
          <strong>André</strong>
          <span>
            <i className="fa-solid fa-circle"></i> Online
          </span>
        </div>
      </div>
    ),
    html: `<div class="Avatar-profile">
    <div class="Avatar">A</div>
    <div class="Avatar-info">
        <strong>André</strong>
        <span><i class="fa-solid fa-circle"></i> Online</span>
    </div>
</div>`,
    css: `.Avatar-profile {
    display: flex;
    align-items: center;
    gap: 10px;
}
.Avatar {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 13px;
    font-weight: 800;
}
.Avatar-info strong,
.Avatar-info span {
    display: block;
}
.Avatar-info strong {
    color: #18181b;
    font-size: 12px;
}
.Avatar-info span {
    margin-top: 3px;
    color: #22c55e;
    font-size: 9px;
}
.Avatar-info i {
    font-size: 6px;
}`,
  },
  {
    id: 1564,
    name: "Status Ring Avatar",
    preview: (
      <div className="av-1564">
        <div>JD</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>JD</div>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#22c55e 0 80%,#e4e4e7 80% 100%);
}
.Avatar div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f4f4f5;
    color: #166534;
    font-size: 13px;
    font-weight: 800;
}`,
  },
  {
    id: 1565,
    name: "Minimal Initial Avatar",
    preview: <div className="av-1565">JB</div>,
    html: `<div class="Avatar">JB</div>`,
    css: `.Avatar {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f4f4f5;
    color: #52525b;
    border: 1px solid #e4e4e7;
    font-size: 12px;
    font-weight: 800;
}`,
  },
  {
    id: 1566,
    name: "Neon Cyan Avatar",
    preview: (
      <div className="av-1566">
        <i className="fa-solid fa-terminal"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-terminal"></i>
</div>`,
    css: `.Avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    background: #020617;
    color: #22d3ee;
    font-size: 17px;
    box-shadow: 0 0 18px rgba(34,211,238,.25),inset 0 0 13px rgba(34,211,238,.08);
}`,
  },
  {
    id: 1567,
    name: "Avatar Group Counter",
    preview: (
      <div className="av-1567">
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <strong>+24</strong>
      </div>
    ),
    html: `<div class="Avatar-group">
    <span>A</span>
    <span>B</span>
    <span>C</span>
    <span>D</span>
    <strong>+24</strong>
</div>`,
    css: `.Avatar-group {
    display: flex;
    align-items: center;
}
.Avatar-group span,
.Avatar-group strong {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    margin-left: -7px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #2563eb;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}
.Avatar-group span:first-child {
    margin-left: 0;
}
.Avatar-group span:nth-child(2) {
    background: #7c3aed;
}
.Avatar-group span:nth-child(3) {
    background: #ec4899;
}
.Avatar-group span:nth-child(4) {
    background: #f97316;
}
.Avatar-group strong {
    background: #18181b;
}`,
  },
  {
    id: 1568,
    name: "Premium Gold Avatar",
    preview: (
      <div className="av-1568">
        <i className="fa-solid fa-crown"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-crown"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border: 2px solid #facc15;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,#fde68a,#d97706);
    color: #451a03;
    font-size: 17px;
    box-shadow: 0 7px 20px rgba(217,119,6,.22);
}`,
  },
  {
    id: 1569,
    name: "Avatar With Verified Badge",
    preview: (
      <div className="av-1569">
        <div>SK</div>
        <span>
          <i className="fa-solid fa-check"></i>
        </span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">SK</div>
    <span class="Avatar-verified">
        <i class="fa-solid fa-check"></i>
    </span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 52px;
    height: 52px;
}
.Avatar {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#0ea5e9,#6366f1);
    color: #fff;
    font-size: 13px;
    font-weight: 800;
}
.Avatar-verified {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #2563eb;
    color: #fff;
    font-size: 7px;
}`,
  },
  {
    id: 1570,
    name: "Soft Purple Avatar",
    preview: (
      <div className="av-1570">
        <i className="fa-solid fa-user"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user"></i>
</div>`,
    css: `.Avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f5f3ff;
    border: 1px solid #ddd6fe;
    color: #7c3aed;
    font-size: 17px;
}`,
  },
  {
    id: 1571,
    name: "Avatar Progress Ring",
    preview: (
      <div className="av-1571">
        <div>78%</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>78%</div>
</div>`,
    css: `.Avatar {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#2563eb 0 78%,#e4e4e7 78% 100%);
}
.Avatar div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #2563eb;
    font-size: 11px;
    font-weight: 800;
}`,
  },
  {
    id: 1572,
    name: "Avatar Action Card",
    preview: (
      <div className="av-1572">
        <div className="av-1572__avatar">A</div>
        <div className="av-1572__content">
          <strong>André</strong>
          <span>Software Developer</span>
        </div>
        <button aria-label="More options">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    ),
    html: `<div class="Avatar-card">
    <div class="Avatar">A</div>
    <div class="Avatar-content">
        <strong>André</strong>
        <span>Software Developer</span>
    </div>
    <button aria-label="More options">
        <i class="fa-solid fa-ellipsis"></i>
    </button>
</div>`,
    css: `.Avatar-card {
    width: 260px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}
.Avatar {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
}
.Avatar-content {
    flex: 1;
}
.Avatar-content strong,
.Avatar-content span {
    display: block;
}
.Avatar-content strong {
    color: #18181b;
    font-size: 11px;
}
.Avatar-content span {
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Avatar-card button {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: #71717a;
    cursor: pointer;
}
.Avatar-card button:hover {
    background: #f4f4f5;
    color: #18181b;
}`,
  },
  {
    id: 1573,
    name: "Legendary Aurora Avatar",
    preview: (
      <div className="av-1573">
        <span className="av-1573__glow"></span>
        <div>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-glow"></span>
    <div>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
}
.Avatar-glow {
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background: conic-gradient(#06b6d4,#2563eb,#7c3aed,#ec4899,#06b6d4);
    filter: blur(8px);
    opacity: .5;
    animation: Avatar-aurora 4s linear infinite;
}
.Avatar > div {
    position: relative;
    z-index: 1;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    background: #09090b;
    color: #e0f2fe;
    font-size: 17px;
}
@keyframes Avatar-aurora {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1574,
    name: "Holographic Avatar",
    preview: (
      <div className="av-1574">
        <i className="fa-solid fa-user-astronaut"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user-astronaut"></i>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#101828,#101828) padding-box,
        linear-gradient(135deg,#22d3ee,#6366f1,#ec4899) border-box;
    color: #67e8f9;
    font-size: 19px;
    box-shadow: 0 0 24px rgba(99,102,241,.2);
}`,
  },
  {
    id: 1575,
    name: "Cyber Pulse Avatar",
    preview: (
      <div className="av-1575">
        <div className="av-1575__ring"></div>
        <div className="av-1575__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-ring"></div>
    <div class="Avatar-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
}
.Avatar-ring {
    position: absolute;
    inset: 0;
    border: 2px solid #22d3ee;
    border-radius: 50%;
    box-shadow: 0 0 18px rgba(34,211,238,.35);
    animation: pulse 1.6s ease-in-out infinite;
}
.Avatar-core {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #67e8f9;
    box-shadow: inset 0 0 15px rgba(34,211,238,.12);
}
@keyframes pulse {
    50% {
        transform: scale(1.08);
        opacity: .55;
    }
}`,
  },
  {
    id: 1576,
    name: "Chrome Avatar",
    preview: (
      <div className="av-1576">
        <i className="fa-solid fa-user"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 50%;
    background: linear-gradient(145deg,#fafafa,#a1a1aa,#f4f4f5,#71717a);
    color: #27272a;
    font-size: 18px;
    box-shadow:
        inset 0 2px 4px rgba(255,255,255,.9),
        0 8px 18px rgba(0,0,0,.16);
}`,
  },
  {
    id: 1577,
    name: "Ice Ring Avatar",
    preview: (
      <div className="av-1577">
        <div>A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>A</div>
</div>`,
    css: `.Avatar {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#e0f2fe,#7dd3fc,#38bdf8,#bae6fd,#e0f2fe);
    box-shadow: 0 0 22px rgba(56,189,248,.22);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #0c4a6e;
    color: #e0f2fe;
    font-size: 16px;
    font-weight: 800;
}`,
  },
  {
    id: 1578,
    name: "Fire Avatar",
    preview: (
      <div className="av-1578">
        <i className="fa-solid fa-fire"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-fire"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,#fef3c7,#f59e0b,#dc2626);
    color: #fff;
    font-size: 18px;
    box-shadow: 0 8px 22px rgba(220,38,38,.22);
}`,
  },
  {
    id: 1579,
    name: "Cyberpunk Avatar",
    preview: (
      <div className="av-1579">
        <span className="av-1579__top"></span>
        <span className="av-1579__body">
          <i className="fa-solid fa-user"></i>
        </span>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-top"></span>
    <span class="Avatar-body">
        <i class="fa-solid fa-user"></i>
    </span>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
}
.Avatar-top {
    position: absolute;
    inset: 0;
    border: 1px solid #f472b6;
    clip-path: polygon(20% 0,80% 0,100% 20%,100% 80%,80% 100%,20% 100%,0 80%,0 20%);
    box-shadow: 0 0 14px rgba(244,114,182,.22);
}
.Avatar-body {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    clip-path: polygon(20% 0,80% 0,100% 20%,100% 80%,80% 100%,20% 100%,0 80%,0 20%);
    background: linear-gradient(135deg,#ec4899,#7c3aed);
    color: #fff;
}`,
  },
  {
    id: 1580,
    name: "Status Online Avatar",
    preview: (
      <div className="av-1580">
        <div className="av-1580__avatar">A</div>
        <span className="av-1580__pulse"></span>
        <span className="av-1580__dot"></span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">A</div>
    <span class="Avatar-pulse"></span>
    <span class="Avatar-dot"></span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 54px;
    height: 54px;
}
.Avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#0ea5e9,#2563eb);
    color: #fff;
    font-size: 14px;
    font-weight: 800;
}
.Avatar-dot {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #22c55e;
}
.Avatar-pulse {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #22c55e;
    animation: online-pulse 1.6s infinite;
}
@keyframes online-pulse {
    70% {
        transform: scale(1.8);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}`,
  },
  {
    id: 1581,
    name: "Glass Neon Avatar",
    preview: (
      <div className="av-1581">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(103,232,249,.5);
    border-radius: 18px;
    background: rgba(14,165,233,.14);
    backdrop-filter: blur(14px);
    color: #67e8f9;
    font-size: 18px;
    box-shadow: 0 0 20px rgba(34,211,238,.15);
}`,
  },
  {
    id: 1582,
    name: "Legendary Gold Avatar",
    preview: (
      <div className="av-1582">
        <div>
          <i className="fa-solid fa-crown"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>
        <i class="fa-solid fa-crown"></i>
    </div>
</div>`,
    css: `.Avatar {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    padding: 2px;
    border-radius: 50%;
    background: conic-gradient(#fef08a,#eab308,#92400e,#facc15,#fef08a);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 25%,#422006,#18181b);
    color: #facc15;
    font-size: 18px;
}`,
  },
  {
    id: 1583,
    name: "Purple Energy Avatar",
    preview: (
      <div className="av-1583">
        <div className="av-1583__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#7c3aed,#ec4899);
    box-shadow: 0 0 25px rgba(124,58,237,.24);
}
.Avatar-core {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #18181b;
    color: #c4b5fd;
    font-size: 16px;
}`,
  },
  {
    id: 1584,
    name: "Verified Creator Avatar",
    preview: (
      <div className="av-1584">
        <div className="av-1584__avatar">AB</div>
        <span className="av-1584__badge">
          <i className="fa-solid fa-check"></i>
        </span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">AB</div>
    <span class="Avatar-badge">
        <i class="fa-solid fa-check"></i>
    </span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 58px;
    height: 58px;
}
.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#0ea5e9,#6366f1);
    color: #fff;
    font-size: 14px;
    font-weight: 800;
}
.Avatar-badge {
    position: absolute;
    right: -2px;
    bottom: -1px;
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #2563eb;
    color: #fff;
    font-size: 7px;
}`,
  },
  {
    id: 1585,
    name: "Rainbow Orbit Avatar",
    preview: (
      <div className="av-1585">
        <div className="av-1585__orbit"></div>
        <div className="av-1585__core">A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-orbit"></div>
    <div class="Avatar-core">A</div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
}
.Avatar-orbit {
    position: absolute;
    inset: 0;
    border: 3px solid transparent;
    border-top-color: #06b6d4;
    border-right-color: #6366f1;
    border-bottom-color: #ec4899;
    border-left-color: #facc15;
    border-radius: 50%;
    animation: orbit 3s linear infinite;
}
.Avatar-core {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    font-size: 15px;
    font-weight: 800;
}
@keyframes orbit {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1586,
    name: "Minimal Black Avatar",
    preview: <div className="av-1586">A</div>,
    html: `<div class="Avatar">A</div>`,
    css: `.Avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border: 1px solid #3f3f46;
    border-radius: 50%;
    background: #09090b;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 6px 16px rgba(0,0,0,.2);
}`,
  },
  {
    id: 1587,
    name: "Ocean Avatar",
    preview: (
      <div className="av-1587">
        <i className="fa-solid fa-water"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-water"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(145deg,#082f49,#0ea5e9);
    color: #bae6fd;
    font-size: 18px;
    box-shadow: inset 0 0 12px rgba(186,230,253,.08),0 7px 20px rgba(14,165,233,.2);
}`,
  },
  {
    id: 1588,
    name: "Developer Avatar",
    preview: (
      <div className="av-1588">
        <span>&lt;/&gt;</span>
      </div>
    ),
    html: `<div class="Avatar">
    <span>&lt;/&gt;</span>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: #020617;
    border: 1px solid #1e3a8a;
    color: #60a5fa;
    font-family: monospace;
    font-size: 13px;
    font-weight: 800;
    box-shadow: inset 0 0 18px rgba(37,99,235,.08);
}`,
  },
  {
    id: 1589,
    name: "Avatar With Rank",
    preview: (
      <div className="av-1589">
        <div className="av-1589__avatar">A</div>
        <span className="av-1589__rank">01</span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">A</div>
    <span class="Avatar-rank">01</span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 54px;
    height: 54px;
}
.Avatar {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#1e293b,#475569);
    color: #fff;
    font-size: 15px;
    font-weight: 800;
}
.Avatar-rank {
    position: absolute;
    top: -4px;
    right: -5px;
    min-width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    border: 2px solid #fff;
    border-radius: 999px;
    background: #f59e0b;
    color: #451a03;
    font-size: 7px;
    font-weight: 900;
}`,
  },
  {
    id: 1590,
    name: "Aurora Profile Avatar",
    preview: (
      <div className="av-1590">
        <div className="av-1590__glow"></div>
        <div className="av-1590__core">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-glow"></div>
    <div class="Avatar-core">
        <i class="fa-solid fa-user"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
}
.Avatar-glow {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: conic-gradient(#22d3ee,#3b82f6,#8b5cf6,#ec4899,#22d3ee);
    filter: blur(8px);
    opacity: .6;
    animation: aurora 4s linear infinite;
}
.Avatar-core {
    position: relative;
    z-index: 1;
    width: 51px;
    height: 51px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50%;
    background: #09090b;
    color: #e0f2fe;
    font-size: 16px;
}
@keyframes aurora {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1591,
    name: "Glass Status Avatar",
    preview: (
      <div className="av-1591">
        <div className="av-1591__avatar">JD</div>
        <div className="av-1591__status">
          <span></span>
          Available
        </div>
      </div>
    ),
    html: `<div class="Avatar-card">
    <div class="Avatar">JD</div>
    <div class="Avatar-status">
        <span></span>
        Available
    </div>
</div>`,
    css: `.Avatar-card {
    display: flex;
    align-items: center;
    gap: 9px;
}
.Avatar {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 50%;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(10px);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
}
.Avatar-status {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 9px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    color: rgba(255,255,255,.8);
    font-size: 9px;
}
.Avatar-status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 7px rgba(34,197,94,.7);
}`,
  },
  {
    id: 1592,
    name: "Diamond Status Avatar",
    preview: (
      <div className="av-1592">
        <i className="fa-regular fa-gem"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-regular fa-gem"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: linear-gradient(135deg,#e0f2fe,#bfdbfe,#ddd6fe);
    color: #4338ca;
    font-size: 19px;
    transform: rotate(45deg);
    box-shadow: 0 8px 20px rgba(99,102,241,.16);
}
.Avatar i {
    transform: rotate(-45deg);
}`,
  },
  {
    id: 1593,
    name: "Legendary Cosmic Avatar",
    preview: (
      <div className="av-1593">
        <span className="av-1593__star av-1593__star--one"></span>
        <span className="av-1593__star av-1593__star--two"></span>
        <span className="av-1593__star av-1593__star--three"></span>
        <div className="av-1593__core">
          <i className="fa-solid fa-user-astronaut"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-star Avatar-star-one"></span>
    <span class="Avatar-star Avatar-star-two"></span>
    <span class="Avatar-star Avatar-star-three"></span>
    <div class="Avatar-core">
        <i class="fa-solid fa-user-astronaut"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 70px;
    height: 70px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 45%,#312e81,#111827 60%,#020617);
    box-shadow: 0 0 30px rgba(99,102,241,.25);
    overflow: hidden;
}
.Avatar::before {
    content: "";
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(129,140,248,.35);
    border-radius: 50%;
}
.Avatar-star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 7px rgba(255,255,255,.9);
    animation: twinkle 1.8s ease-in-out infinite;
}
.Avatar-star-one {
    top: 16px;
    left: 18px;
}
.Avatar-star-two {
    top: 25px;
    right: 14px;
    animation-delay: .5s;
}
.Avatar-star-three {
    bottom: 16px;
    left: 25px;
    animation-delay: 1s;
}
.Avatar-core {
    position: relative;
    z-index: 2;
    width: 49px;
    height: 49px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(165,180,252,.35);
    border-radius: 50%;
    background: rgba(15,23,42,.85);
    color: #c4b5fd;
    font-size: 17px;
}
@keyframes twinkle {
    50% {
        transform: scale(1.8);
        opacity: .45;
    }
}`,
  },
  {
    id: 1594,
    name: "Neon Cyan Avatar",
    preview: (
      <div className="av-1594">
        <i className="fa-solid fa-user"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-user"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 2px solid #22d3ee;
    border-radius: 50%;
    background: #020617;
    color: #67e8f9;
    font-size: 18px;
    box-shadow: 0 0 12px #22d3ee,0 0 30px rgba(34,211,238,.35),inset 0 0 18px rgba(34,211,238,.12);
}`,
  },
  {
    id: 1595,
    name: "Neon Pink Avatar",
    preview: (
      <div className="av-1595">
        <i className="fa-solid fa-heart"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-heart"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border: 2px solid #f472b6;
    border-radius: 50%;
    background: #1a0b16;
    color: #f9a8d4;
    font-size: 18px;
    box-shadow: 0 0 14px #f472b6,0 0 28px rgba(244,114,182,.3);
}`,
  },
  {
    id: 1596,
    name: "Neon Purple Avatar",
    preview: (
      <div className="av-1596">
        <i className="fa-solid fa-ghost"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-ghost"></i>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border: 2px solid #a855f7;
    border-radius: 16px;
    background: #12051e;
    color: #d8b4fe;
    font-size: 19px;
    box-shadow: 0 0 16px #a855f7,0 0 35px rgba(168,85,247,.28),inset 0 0 16px rgba(168,85,247,.1);
}`,
  },
  {
    id: 1597,
    name: "Neon Green Avatar",
    preview: (
      <div className="av-1597">
        <i className="fa-solid fa-terminal"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-terminal"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 2px solid #22c55e;
    border-radius: 12px;
    background: #03130a;
    color: #4ade80;
    font-family: monospace;
    font-size: 18px;
    box-shadow: 0 0 12px #22c55e,0 0 28px rgba(34,197,94,.3);
}`,
  },
  {
    id: 1598,
    name: "Neon Orange Avatar",
    preview: (
      <div className="av-1598">
        <i className="fa-solid fa-fire"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-fire"></i>
</div>`,
    css: `.Avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border: 2px solid #fb923c;
    border-radius: 50%;
    background: #1c0d03;
    color: #fdba74;
    font-size: 18px;
    box-shadow: 0 0 14px #fb923c,0 0 32px rgba(249,115,22,.28);
}`,
  },
  {
    id: 1599,
    name: "Neon Blue Ring Avatar",
    preview: (
      <div className="av-1599">
        <div className="av-1599__ring"></div>
        <div className="av-1599__core">A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div class="Avatar-ring"></div>
    <div class="Avatar-core">A</div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 66px;
    height: 66px;
    display: grid;
    place-items: center;
}
.Avatar-ring {
    position: absolute;
    inset: 0;
    border: 2px solid #3b82f6;
    border-radius: 50%;
    box-shadow: 0 0 12px #3b82f6,0 0 25px rgba(59,130,246,.35);
    animation: ring-pulse 1.8s ease-in-out infinite;
}
.Avatar-core {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #93c5fd;
    font-size: 15px;
    font-weight: 800;
}
@keyframes ring-pulse {
    50% {
        transform: scale(1.1);
        opacity: .55;
    }
}`,
  },
  {
    id: 1600,
    name: "Neon Rainbow Avatar",
    preview: (
      <div className="av-1600">
        <div>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>
        <i class="fa-solid fa-star"></i>
    </div>
</div>`,
    css: `.Avatar {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    padding: 2px;
    border-radius: 50%;
    background: conic-gradient(#22d3ee,#3b82f6,#a855f7,#ec4899,#f97316,#22c55e,#22d3ee);
    box-shadow: 0 0 25px rgba(168,85,247,.22);
    animation: rainbow-spin 5s linear infinite;
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #050505;
    color: #fff;
    font-size: 17px;
}
@keyframes rainbow-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1601,
    name: "Neon Scanline Avatar",
    preview: (
      <div className="av-1601">
        <span></span>
        <div>
          <i className="fa-solid fa-code"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-scan"></span>
    <div>
        <i class="fa-solid fa-code"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 62px;
    height: 62px;
    overflow: hidden;
    display: grid;
    place-items: center;
    border: 1px solid #38bdf8;
    border-radius: 14px;
    background: #020617;
    box-shadow: 0 0 18px rgba(56,189,248,.25);
}
.Avatar > div {
    position: relative;
    z-index: 2;
    color: #7dd3fc;
    font-size: 18px;
}
.Avatar-scan {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,transparent 0%,rgba(56,189,248,.18) 50%,transparent 100%);
    animation: scan 2s linear infinite;
}
@keyframes scan {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(100%);
    }
}`,
  },
  {
    id: 1602,
    name: "Neon Hologram Avatar",
    preview: (
      <div className="av-1602">
        <div>
          <span></span>
          <i className="fa-solid fa-user-astronaut"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>
        <span></span>
        <i class="fa-solid fa-user-astronaut"></i>
    </div>
</div>`,
    css: `.Avatar {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(34,211,238,.7);
    border-radius: 50%;
    background: rgba(14,165,233,.08);
    box-shadow: 0 0 20px rgba(34,211,238,.2);
}
.Avatar > div {
    position: relative;
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,rgba(34,211,238,.2),rgba(99,102,241,.15));
    color: #a5f3fc;
}
.Avatar > div span {
    position: absolute;
    inset: -5px;
    border: 1px dashed rgba(103,232,249,.4);
    border-radius: 50%;
    animation: hologram 3s linear infinite;
}
@keyframes hologram {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1603,
    name: "Neon Cyber Status Avatar",
    preview: (
      <div className="av-1603">
        <div className="av-1603__avatar">A</div>
        <span></span>
      </div>
    ),
    html: `<div class="Avatar-wrapper">
    <div class="Avatar">A</div>
    <span class="Avatar-status"></span>
</div>`,
    css: `.Avatar-wrapper {
    position: relative;
    width: 58px;
    height: 58px;
}
.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    background: #020617;
    color: #67e8f9;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0 0 15px rgba(34,211,238,.25);
}
.Avatar-status {
    position: absolute;
    right: -2px;
    bottom: -2px;
    width: 13px;
    height: 13px;
    border: 2px solid #020617;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 9px #22c55e;
}`,
  },
  {
    id: 1604,
    name: "Neon Pink Ring Avatar",
    preview: (
      <div className="av-1604">
        <div>JD</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>JD</div>
</div>`,
    css: `.Avatar {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#f472b6,#ec4899,#a855f7,#f472b6);
    box-shadow: 0 0 20px rgba(236,72,153,.25);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #120611;
    color: #f9a8d4;
    font-size: 14px;
    font-weight: 800;
}`,
  },
  {
    id: 1605,
    name: "Neon Matrix Avatar",
    preview: (
      <div className="av-1605">
        <span>01</span>
        <i className="fa-solid fa-terminal"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <span>01</span>
    <i class="fa-solid fa-terminal"></i>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid #22c55e;
    border-radius: 10px;
    background: #020c05;
    color: #4ade80;
    box-shadow: 0 0 18px rgba(34,197,94,.22);
}
.Avatar span {
    position: absolute;
    top: 4px;
    right: 7px;
    opacity: .4;
    font-family: monospace;
    font-size: 7px;
}
.Avatar i {
    font-size: 18px;
    text-shadow: 0 0 10px #22c55e;
}`,
  },
  {
    id: 1606,
    name: "Neon Electric Avatar",
    preview: (
      <div className="av-1606">
        <i className="fa-solid fa-bolt"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-bolt"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 2px solid #facc15;
    border-radius: 14px;
    background: #171205;
    color: #fde047;
    font-size: 18px;
    box-shadow: 0 0 12px #facc15,0 0 32px rgba(250,204,21,.22);
    animation: electric 1.2s ease-in-out infinite;
}
@keyframes electric {
    50% {
        box-shadow: 0 0 22px #facc15,0 0 45px rgba(250,204,21,.3);
    }
}`,
  },
  {
    id: 1607,
    name: "Neon Cyan Glass Avatar",
    preview: (
      <div className="av-1607">
        <i className="fa-solid fa-gem"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-gem"></i>
</div>`,
    css: `.Avatar {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(103,232,249,.65);
    border-radius: 18px;
    background: rgba(34,211,238,.08);
    backdrop-filter: blur(14px);
    color: #a5f3fc;
    font-size: 18px;
    box-shadow: 0 0 18px rgba(34,211,238,.2),inset 0 0 18px rgba(34,211,238,.08);
}`,
  },
  {
    id: 1608,
    name: "Neon Gradient Avatar",
    preview: (
      <div className="av-1608">
        <div>A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>A</div>
</div>`,
    css: `.Avatar {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    padding: 2px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#3b82f6,#a855f7,#ec4899);
    box-shadow: 0 0 22px rgba(99,102,241,.25);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #09090b;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
}`,
  },
  {
    id: 1609,
    name: "Neon HUD Avatar",
    preview: (
      <div className="av-1609">
        <div>
          <span>ONLINE</span>
          <strong>A</strong>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>
        <span>ONLINE</span>
        <strong>A</strong>
    </div>
</div>`,
    css: `.Avatar {
    width: 68px;
    height: 68px;
    padding: 2px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg,#0ea5e9,#22d3ee);
    clip-path: polygon(12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%,0 12%);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #020617;
    color: #67e8f9;
    clip-path: inherit;
}
.Avatar span {
    margin-bottom: 4px;
    font-family: monospace;
    font-size: 6px;
    letter-spacing: 1px;
}
.Avatar strong {
    font-size: 17px;
}`,
  },
  {
    id: 1610,
    name: "Neon Fire Ring Avatar",
    preview: (
      <div className="av-1610">
        <div>
          <i className="fa-solid fa-fire"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <div>
        <i class="fa-solid fa-fire"></i>
    </div>
</div>`,
    css: `.Avatar {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#facc15,#fb923c,#ef4444,#facc15);
    box-shadow: 0 0 25px rgba(249,115,22,.22);
}
.Avatar > div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #140704;
    color: #fb923c;
    font-size: 18px;
    box-shadow: inset 0 0 14px rgba(249,115,22,.1);
}`,
  },
  {
    id: 1611,
    name: "Neon Orbit Avatar",
    preview: (
      <div className="av-1611">
        <span></span>
        <span></span>
        <div>A</div>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-orbit-one"></span>
    <span class="Avatar-orbit-two"></span>
    <div>A</div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
}
.Avatar-orbit-one,
.Avatar-orbit-two {
    position: absolute;
    inset: 5px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(34,211,238,.5);
}
.Avatar-orbit-one {
    transform: rotate(55deg) scaleY(.55);
    animation: orbit-one 2.5s linear infinite;
}
.Avatar-orbit-two {
    transform: rotate(-55deg) scaleY(.55);
    border-color: #a855f7;
    animation: orbit-two 3s linear infinite;
}
.Avatar > div {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #09090b;
    color: #e0f2fe;
    font-size: 15px;
    font-weight: 800;
}
@keyframes orbit-one {
    to {
        transform: rotate(415deg) scaleY(.55);
    }
}
@keyframes orbit-two {
    to {
        transform: rotate(-415deg) scaleY(.55);
    }
}`,
  },
  {
    id: 1612,
    name: "Neon Warning Avatar",
    preview: (
      <div className="av-1612">
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
    ),
    html: `<div class="Avatar">
    <i class="fa-solid fa-triangle-exclamation"></i>
</div>`,
    css: `.Avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 2px solid #f43f5e;
    border-radius: 12px;
    background: #18040a;
    color: #fb7185;
    font-size: 18px;
    box-shadow: 0 0 14px #f43f5e,0 0 30px rgba(244,63,94,.22);
    animation: warning 1s ease-in-out infinite;
}
@keyframes warning {
    50% {
        filter: brightness(1.25);
    }
}`,
  },
  {
    id: 1613,
    name: "Legendary Neon Core Avatar",
    preview: (
      <div className="av-1613">
        <span className="av-1613__outer"></span>
        <span className="av-1613__pulse"></span>
        <div className="av-1613__core">
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    ),
    html: `<div class="Avatar">
    <span class="Avatar-outer"></span>
    <span class="Avatar-pulse"></span>
    <div class="Avatar-core">
        <i class="fa-solid fa-star"></i>
    </div>
</div>`,
    css: `.Avatar {
    position: relative;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
}
.Avatar-outer {
    position: absolute;
    inset: 1px;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #3b82f6;
    border-bottom-color: #a855f7;
    border-left-color: #ec4899;
    border-radius: 50%;
    box-shadow: 0 0 18px rgba(99,102,241,.3);
    animation: core-spin 3s linear infinite;
}
.Avatar-pulse {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background: conic-gradient(#22d3ee,#3b82f6,#a855f7,#ec4899,#22d3ee);
    filter: blur(8px);
    opacity: .25;
    animation: core-spin 4s linear reverse infinite;
}
.Avatar-core {
    position: relative;
    z-index: 2;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 50%;
    background: #050505;
    color: #fff;
    font-size: 17px;
    box-shadow: inset 0 0 18px rgba(255,255,255,.05),0 0 16px rgba(34,211,238,.16);
}
@keyframes core-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },

  {
    id: 2590,
    name: "Gradient Border Avatar",
    preview: (
      <div className="avatar-2590">
        <div className="avatar-2590-ring">
          <div className="avatar-2590-image">A</div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2590">
  <div class="avatar-2590-ring">
    <div class="avatar-2590-image">A</div>
  </div>
</div>`,
    css: `.avatar-2590{display:flex;align-items:center;justify-content:center}.avatar-2590-ring{width:76px;height:76px;border-radius:50%;padding:3px;background:linear-gradient(135deg,#7c3aed,#ec4899,#f59e0b)}.avatar-2590-image{width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#111827;color:white;font-size:24px;font-weight:700;font-family:Arial,sans-serif}`,
  },
  {
    id: 2591,
    name: "Glass Avatar",
    preview: (
      <div className="avatar-2591">
        <div className="avatar-2591-image">JD</div>
      </div>
    ),
    html: `<div class="avatar-2591">
  <div class="avatar-2591-image">JD</div>
</div>`,
    css: `.avatar-2591{display:flex;align-items:center;justify-content:center}.avatar-2591-image{width:76px;height:76px;border-radius:24px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);box-shadow:0 12px 30px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.2);backdrop-filter:blur(12px);color:white;font-size:21px;font-weight:700;font-family:Arial,sans-serif}`,
  },
  {
    id: 2592,
    name: "Neon Ring Avatar",
    preview: (
      <div className="avatar-2592">
        <div className="avatar-2592-image">M</div>
      </div>
    ),
    html: `<div class="avatar-2592">
  <div class="avatar-2592-image">M</div>
</div>`,
    css: `.avatar-2592{display:flex;align-items:center;justify-content:center}.avatar-2592-image{width:74px;height:74px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0f172a;border:3px solid #22d3ee;box-shadow:0 0 10px #22d3ee,0 0 25px rgba(34,211,238,.7),0 0 45px rgba(34,211,238,.35);color:#ecfeff;font-size:25px;font-weight:700;font-family:Arial,sans-serif}`,
  },
  {
    id: 2593,
    name: "Split Color Avatar",
    preview: (
      <div className="avatar-2593">
        <div className="avatar-2593-image">SK</div>
      </div>
    ),
    html: `<div class="avatar-2593">
  <div class="avatar-2593-image">SK</div>
</div>`,
    css: `.avatar-2593{display:flex;align-items:center;justify-content:center}.avatar-2593-image{width:78px;height:78px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(90deg,#2563eb 0 50%,#f43f5e 50% 100%);color:white;font-size:20px;font-weight:700;font-family:Arial,sans-serif;box-shadow:0 8px 20px rgba(0,0,0,.2)}`,
  },
  {
    id: 2594,
    name: "Diamond Avatar",
    preview: (
      <div className="avatar-2594">
        <div className="avatar-2594-shape">
          <div className="avatar-2594-image">L</div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2594">
  <div class="avatar-2594-shape">
    <div class="avatar-2594-image">L</div>
  </div>
</div>`,
    css: `.avatar-2594{display:flex;align-items:center;justify-content:center}.avatar-2594-shape{width:82px;height:82px;transform:rotate(45deg);border-radius:20px;padding:3px;background:linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)}.avatar-2594-image{width:100%;height:100%;border-radius:18px;background:#111827;color:white;display:flex;align-items:center;justify-content:center;font-size:23px;font-weight:700;font-family:Arial,sans-serif;transform:rotate(-45deg)}`,
  },
  {
    id: 2595,
    name: "Online Avatar",
    preview: (
      <div className="avatar-2595">
        <div className="avatar-2595-wrapper">
          <div className="avatar-2595-image">A</div>
          <span className="avatar-2595-status"></span>
        </div>
      </div>
    ),
    html: `<div class="avatar-2595">
  <div class="avatar-2595-wrapper">
    <div class="avatar-2595-image">A</div>
    <span class="avatar-2595-status"></span>
  </div>
</div>`,
    css: `.avatar-2595{display:flex;align-items:center;justify-content:center}.avatar-2595-wrapper{position:relative}.avatar-2595-image{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#334155;color:white;font-size:25px;font-weight:700;font-family:Arial,sans-serif}.avatar-2595-status{position:absolute;right:2px;bottom:2px;width:16px;height:16px;border-radius:50%;background:#22c55e;border:3px solid white}`,
  },
  {
    id: 2596,
    name: "Stacked Avatars",
    preview: (
      <div className="avatar-2596">
        <div className="avatar-2596-stack">
          <div className="avatar-2596-item avatar-2596-one">A</div>
          <div className="avatar-2596-item avatar-2596-two">B</div>
          <div className="avatar-2596-item avatar-2596-three">C</div>
          <div className="avatar-2596-more">+4</div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2596">
  <div class="avatar-2596-stack">
    <div class="avatar-2596-item avatar-2596-one">A</div>
    <div class="avatar-2596-item avatar-2596-two">B</div>
    <div class="avatar-2596-item avatar-2596-three">C</div>
    <div class="avatar-2596-more">+4</div>
  </div>
</div>`,
    css: `.avatar-2596{display:flex;align-items:center;justify-content:center}.avatar-2596-stack{display:flex;align-items:center}.avatar-2596-item,.avatar-2596-more{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid white;color:white;font-size:17px;font-weight:700;font-family:Arial,sans-serif}.avatar-2596-item:not(:first-child),.avatar-2596-more{margin-left:-12px}.avatar-2596-one{background:#2563eb}.avatar-2596-two{background:#ec4899}.avatar-2596-three{background:#8b5cf6}.avatar-2596-more{background:#334155}`,
  },
  {
    id: 2597,
    name: "Square Profile Avatar",
    preview: (
      <div className="avatar-2597">
        <div className="avatar-2597-image">N</div>
      </div>
    ),
    html: `<div class="avatar-2597">
  <div class="avatar-2597-image">N</div>
</div>`,
    css: `.avatar-2597{display:flex;align-items:center;justify-content:center}.avatar-2597-image{width:78px;height:78px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#f97316,#ea580c);color:white;font-size:26px;font-weight:700;font-family:Arial,sans-serif;box-shadow:0 10px 24px rgba(234,88,12,.3)}`,
  },
  {
    id: 2598,
    name: "Monochrome Avatar",
    preview: (
      <div className="avatar-2598">
        <div className="avatar-2598-image">R</div>
      </div>
    ),
    html: `<div class="avatar-2598">
  <div class="avatar-2598-image">R</div>
</div>`,
    css: `.avatar-2598{display:flex;align-items:center;justify-content:center}.avatar-2598-image{width:78px;height:78px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#f8fafc,#94a3b8);color:#0f172a;border:2px solid #cbd5e1;font-size:26px;font-weight:800;font-family:Arial,sans-serif;box-shadow:0 8px 20px rgba(15,23,42,.15)}`,
  },
  {
    id: 2599,
    name: "Orbit Avatar",
    preview: (
      <div className="avatar-2599">
        <div className="avatar-2599-orbit">
          <div className="avatar-2599-image">Z</div>
          <span className="avatar-2599-dot"></span>
        </div>
      </div>
    ),
    html: `<div class="avatar-2599">
  <div class="avatar-2599-orbit">
    <div class="avatar-2599-image">Z</div>
    <span class="avatar-2599-dot"></span>
  </div>
</div>`,
    css: `.avatar-2599{display:flex;align-items:center;justify-content:center}.avatar-2599-orbit{position:relative;width:88px;height:88px;border:2px dashed #6366f1;border-radius:50%;display:flex;align-items:center;justify-content:center}.avatar-2599-image{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#312e81;color:white;font-size:23px;font-weight:700;font-family:Arial,sans-serif}.avatar-2599-dot{position:absolute;top:-5px;left:50%;width:12px;height:12px;border-radius:50%;background:#a78bfa;border:2px solid white;transform:translateX(-50%)}`,
  },
  {
    id: 2600,
    name: "Quantum Energy Avatar",
    preview: (
      <div className="avatar-2600">
        <div className="avatar-2600-scene">
          <div className="avatar-2600-energy">
            <div className="avatar-2600-ring avatar-2600-ring-outer"></div>
            <div className="avatar-2600-ring avatar-2600-ring-middle"></div>
            <div className="avatar-2600-ring avatar-2600-ring-inner"></div>
            <div className="avatar-2600-orbit avatar-2600-orbit-one"></div>
            <div className="avatar-2600-orbit avatar-2600-orbit-two"></div>
            <div className="avatar-2600-orbit avatar-2600-orbit-three"></div>
            <div className="avatar-2600-aura"></div>
            <div className="avatar-2600-core">
              <div className="avatar-2600-core-glow"></div>
              <div className="avatar-2600-letter">A</div>
              <div className="avatar-2600-reflection"></div>
              <div className="avatar-2600-scanline"></div>
            </div>
            <span className="avatar-2600-particle avatar-2600-particle-1"></span>
            <span className="avatar-2600-particle avatar-2600-particle-2"></span>
            <span className="avatar-2600-particle avatar-2600-particle-3"></span>
            <span className="avatar-2600-particle avatar-2600-particle-4"></span>
            <span className="avatar-2600-particle avatar-2600-particle-5"></span>
            <span className="avatar-2600-particle avatar-2600-particle-6"></span>
            <span className="avatar-2600-particle avatar-2600-particle-7"></span>
            <span className="avatar-2600-particle avatar-2600-particle-8"></span>
            <span className="avatar-2600-particle avatar-2600-particle-9"></span>
            <span className="avatar-2600-particle avatar-2600-particle-10"></span>
            <div className="avatar-2600-status">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2600">
  <div class="avatar-2600-scene">
    <div class="avatar-2600-energy">
      <div class="avatar-2600-ring avatar-2600-ring-outer"></div>
      <div class="avatar-2600-ring avatar-2600-ring-middle"></div>
      <div class="avatar-2600-ring avatar-2600-ring-inner"></div>
      <div class="avatar-2600-orbit avatar-2600-orbit-one"></div>
      <div class="avatar-2600-orbit avatar-2600-orbit-two"></div>
      <div class="avatar-2600-orbit avatar-2600-orbit-three"></div>
      <div class="avatar-2600-aura"></div>
      <div class="avatar-2600-core">
        <div class="avatar-2600-core-glow"></div>
        <div class="avatar-2600-letter">A</div>
        <div class="avatar-2600-reflection"></div>
        <div class="avatar-2600-scanline"></div>
      </div>
      <span class="avatar-2600-particle avatar-2600-particle-1"></span>
      <span class="avatar-2600-particle avatar-2600-particle-2"></span>
      <span class="avatar-2600-particle avatar-2600-particle-3"></span>
      <span class="avatar-2600-particle avatar-2600-particle-4"></span>
      <span class="avatar-2600-particle avatar-2600-particle-5"></span>
      <span class="avatar-2600-particle avatar-2600-particle-6"></span>
      <span class="avatar-2600-particle avatar-2600-particle-7"></span>
      <span class="avatar-2600-particle avatar-2600-particle-8"></span>
      <span class="avatar-2600-particle avatar-2600-particle-9"></span>
      <span class="avatar-2600-particle avatar-2600-particle-10"></span>
      <div class="avatar-2600-status">
        <span></span>
      </div>
    </div>
  </div>
</div>`,
    css: `.avatar-2600{width:100%;min-height:240px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;background:radial-gradient(circle at center,rgba(59,130,246,.08),transparent 55%)}.avatar-2600-scene{width:220px;height:220px;display:flex;align-items:center;justify-content:center;position:relative;perspective:900px}.avatar-2600-energy{width:170px;height:170px;position:relative;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.22,1,.36,1),filter .7s ease}.avatar-2600:hover .avatar-2600-energy{transform:rotateX(8deg) rotateY(-10deg) scale(1.08)}.avatar-2600-ring{position:absolute;border-radius:50%;pointer-events:none}.avatar-2600-ring-outer{inset:-22px;border:1px solid rgba(56,189,248,.18);box-shadow:0 0 10px rgba(56,189,248,.08),inset 0 0 10px rgba(56,189,248,.08);animation:avatar2600Outer 12s linear infinite}.avatar-2600-ring-middle{inset:-14px;border:2px solid transparent;border-top-color:#38bdf8;border-right-color:rgba(59,130,246,.7);box-shadow:0 0 14px rgba(56,189,248,.3);animation:avatar2600Middle 6s linear infinite}.avatar-2600-ring-inner{inset:-7px;border:1px dashed rgba(125,211,252,.65);box-shadow:0 0 12px rgba(125,211,252,.18);animation:avatar2600Inner 4s linear infinite reverse}.avatar-2600-orbit{position:absolute;left:50%;top:50%;border:1px solid rgba(56,189,248,.32);border-radius:50%;transform-style:preserve-3d;pointer-events:none}.avatar-2600-orbit-one{width:195px;height:68px;transform:translate(-50%,-50%) rotateX(66deg) rotateZ(15deg);animation:avatar2600OrbitOne 8s linear infinite}.avatar-2600-orbit-two{width:190px;height:72px;transform:translate(-50%,-50%) rotateY(65deg) rotateZ(-20deg);animation:avatar2600OrbitTwo 10s linear infinite reverse}.avatar-2600-orbit-three{width:205px;height:82px;transform:translate(-50%,-50%) rotateX(25deg) rotateY(55deg);animation:avatar2600OrbitThree 13s linear infinite}.avatar-2600-aura{position:absolute;width:125px;height:125px;border-radius:50%;background:radial-gradient(circle,rgba(14,165,233,.3) 0%,rgba(59,130,246,.18) 35%,rgba(37,99,235,.08) 55%,transparent 75%);filter:blur(8px);animation:avatar2600Aura 3s ease-in-out infinite}.avatar-2600-core{width:92px;height:92px;border-radius:50%;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 25%,#67e8f9 0%,#0ea5e9 18%,#2563eb 42%,#172554 72%,#020617 100%);border:2px solid rgba(125,211,252,.95);box-shadow:0 0 8px rgba(56,189,248,.9),0 0 20px rgba(59,130,246,.7),0 0 45px rgba(37,99,235,.55),inset 0 0 25px rgba(147,197,253,.25);transform:translateZ(30px);z-index:5;transition:transform .7s cubic-bezier(.22,1,.36,1),box-shadow .7s ease}.avatar-2600:hover .avatar-2600-core{transform:translateZ(45px) scale(1.05);box-shadow:0 0 12px rgba(56,189,248,1),0 0 28px rgba(59,130,246,.9),0 0 60px rgba(37,99,235,.75),inset 0 0 30px rgba(147,197,253,.3)}.avatar-2600-core-glow{position:absolute;inset:-20%;background:radial-gradient(circle,rgba(125,211,252,.35),transparent 65%);animation:avatar2600CoreGlow 2.5s ease-in-out infinite}.avatar-2600-letter{position:relative;z-index:3;color:white;font-family:Arial,sans-serif;font-size:34px;line-height:1;font-weight:800;letter-spacing:-2px;text-shadow:0 0 6px rgba(255,255,255,.85),0 0 16px rgba(125,211,252,.9),0 0 30px rgba(56,189,248,.75);transition:transform .5s ease,text-shadow .5s ease}.avatar-2600:hover .avatar-2600-letter{transform:scale(1.1);text-shadow:0 0 8px white,0 0 18px #7dd3fc,0 0 38px #38bdf8,0 0 55px #0ea5e9}.avatar-2600-reflection{position:absolute;top:-30%;left:-30%;width:60%;height:160%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transform:rotate(24deg);animation:avatar2600Reflection 4s ease-in-out infinite}.avatar-2600-scanline{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(186,230,253,.05),rgba(186,230,253,.7),rgba(186,230,253,.05),transparent);box-shadow:0 0 8px rgba(125,211,252,.8);animation:avatar2600Scan 3.5s linear infinite}.avatar-2600-particle{position:absolute;width:4px;height:4px;border-radius:50%;background:#7dd3fc;box-shadow:0 0 5px #7dd3fc,0 0 12px #38bdf8,0 0 20px rgba(14,165,233,.8);z-index:6;pointer-events:none}.avatar-2600-particle-1{top:5%;left:47%;animation:avatar2600ParticleOne 4.4s ease-in-out infinite}.avatar-2600-particle-2{top:18%;left:85%;animation:avatar2600ParticleTwo 5.1s ease-in-out infinite}.avatar-2600-particle-3{top:63%;left:95%;animation:avatar2600ParticleThree 4.8s ease-in-out infinite}.avatar-2600-particle-4{top:87%;left:62%;animation:avatar2600ParticleFour 5.6s ease-in-out infinite}.avatar-2600-particle-5{top:72%;left:7%;animation:avatar2600ParticleFive 4.9s ease-in-out infinite}.avatar-2600-particle-6{top:28%;left:10%;animation:avatar2600ParticleSix 5.2s ease-in-out infinite}.avatar-2600-particle-7{top:4%;left:68%;width:3px;height:3px;animation:avatar2600ParticleSeven 6.2s ease-in-out infinite}.avatar-2600-particle-8{top:45%;left:102%;width:3px;height:3px;animation:avatar2600ParticleEight 4.7s ease-in-out infinite}.avatar-2600-particle-9{top:99%;left:35%;width:3px;height:3px;animation:avatar2600ParticleNine 5.8s ease-in-out infinite}.avatar-2600-particle-10{top:38%;left:-4%;width:3px;height:3px;animation:avatar2600ParticleTen 5.4s ease-in-out infinite}.avatar-2600-status{position:absolute;right:-7px;bottom:3px;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#020617;border:2px solid rgba(125,211,252,.7);box-shadow:0 0 10px rgba(56,189,248,.5),0 0 25px rgba(14,165,233,.3);z-index:10}.avatar-2600-status span{width:10px;height:10px;border-radius:50%;background:#22d3ee;box-shadow:0 0 6px #22d3ee,0 0 14px #06b6d4,0 0 22px rgba(6,182,212,.7);animation:avatar2600Status 2s ease-in-out infinite}.avatar-2600:hover .avatar-2600-status{box-shadow:0 0 12px rgba(56,189,248,.8),0 0 30px rgba(14,165,233,.5)}@keyframes avatar2600Outer{0%{transform:rotate(0deg) scale(.96);opacity:.55}50%{transform:rotate(180deg) scale(1.02);opacity:1}100%{transform:rotate(360deg) scale(.96);opacity:.55}}@keyframes avatar2600Middle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes avatar2600Inner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes avatar2600OrbitOne{0%{transform:translate(-50%,-50%) rotateX(66deg) rotateZ(15deg)}100%{transform:translate(-50%,-50%) rotateX(66deg) rotateZ(375deg)}}@keyframes avatar2600OrbitTwo{0%{transform:translate(-50%,-50%) rotateY(65deg) rotateZ(-20deg)}100%{transform:translate(-50%,-50%) rotateY(65deg) rotateZ(-380deg)}}@keyframes avatar2600OrbitThree{0%{transform:translate(-50%,-50%) rotateX(25deg) rotateY(55deg) rotateZ(0deg)}100%{transform:translate(-50%,-50%) rotateX(25deg) rotateY(55deg) rotateZ(360deg)}}@keyframes avatar2600Aura{0%,100%{transform:scale(.92);opacity:.55}50%{transform:scale(1.15);opacity:1}}@keyframes avatar2600CoreGlow{0%,100%{transform:scale(.8);opacity:.35}50%{transform:scale(1.15);opacity:.8}}@keyframes avatar2600Reflection{0%{left:-80%;opacity:0}20%{opacity:.2}50%{opacity:.7}80%{opacity:.15}100%{left:150%;opacity:0}}@keyframes avatar2600Scan{0%{top:-5%}50%{top:105%}100%{top:105%}}@keyframes avatar2600Status{0%,100%{transform:scale(.8);opacity:.65}50%{transform:scale(1.15);opacity:1}}@keyframes avatar2600ParticleOne{0%,100%{transform:translate(0,0) scale(.7);opacity:.2}25%{transform:translate(-12px,8px) scale(1);opacity:1}50%{transform:translate(5px,22px) scale(.8);opacity:.4}75%{transform:translate(15px,-5px) scale(1.2);opacity:.9}}@keyframes avatar2600ParticleTwo{0%,100%{transform:translate(0,0);opacity:.25}30%{transform:translate(-16px,18px);opacity:1}60%{transform:translate(-5px,-14px);opacity:.4}90%{transform:translate(14px,-7px);opacity:.8}}@keyframes avatar2600ParticleThree{0%,100%{transform:translate(0,0) scale(.7);opacity:.3}35%{transform:translate(-22px,-10px) scale(1.2);opacity:1}70%{transform:translate(-12px,15px) scale(.6);opacity:.2}}@keyframes avatar2600ParticleFour{0%,100%{transform:translate(0,0);opacity:.2}25%{transform:translate(13px,-16px);opacity:1}50%{transform:translate(-5px,-24px);opacity:.5}75%{transform:translate(-18px,-6px);opacity:1}}@keyframes avatar2600ParticleFive{0%,100%{transform:translate(0,0);opacity:.3}33%{transform:translate(18px,-7px);opacity:1}66%{transform:translate(10px,17px);opacity:.35}}@keyframes avatar2600ParticleSix{0%,100%{transform:translate(0,0) scale(.6);opacity:.2}40%{transform:translate(18px,13px) scale(1.1);opacity:1}80%{transform:translate(9px,-12px) scale(.7);opacity:.45}}@keyframes avatar2600ParticleSeven{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(-22px,16px);opacity:1}}@keyframes avatar2600ParticleEight{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(-22px,-20px);opacity:1}}@keyframes avatar2600ParticleNine{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(16px,-18px);opacity:1}}@keyframes avatar2600ParticleTen{0%,100%{transform:translate(0,0);opacity:.2}50%{transform:translate(20px,12px);opacity:1}}`,
  },
  {
    id: 2601,
    name: "Forged Iron Avatar",
    preview: (
      <div className="avatar-2601">
        <div className="avatar-2601-frame">
          <div className="avatar-2601-plate">
            <div className="avatar-2601-bevel"></div>
            <div className="avatar-2601-surface"></div>
            <div className="avatar-2601-scratch avatar-2601-scratch-1"></div>
            <div className="avatar-2601-scratch avatar-2601-scratch-2"></div>
            <div className="avatar-2601-scratch avatar-2601-scratch-3"></div>
            <div className="avatar-2601-scratch avatar-2601-scratch-4"></div>
            <div className="avatar-2601-bolt avatar-2601-bolt-1"></div>
            <div className="avatar-2601-bolt avatar-2601-bolt-2"></div>
            <div className="avatar-2601-bolt avatar-2601-bolt-3"></div>
            <div className="avatar-2601-bolt avatar-2601-bolt-4"></div>
            <div className="avatar-2601-core">
              <div className="avatar-2601-core-inner">
                <span>A</span>
              </div>
            </div>
            <div className="avatar-2601-highlight"></div>
            <div className="avatar-2601-shadow"></div>
          </div>
          <div className="avatar-2601-status">
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2601">
  <div class="avatar-2601-frame">
    <div class="avatar-2601-plate">
      <div class="avatar-2601-bevel"></div>
      <div class="avatar-2601-surface"></div>
      <div class="avatar-2601-scratch avatar-2601-scratch-1"></div>
      <div class="avatar-2601-scratch avatar-2601-scratch-2"></div>
      <div class="avatar-2601-scratch avatar-2601-scratch-3"></div>
      <div class="avatar-2601-scratch avatar-2601-scratch-4"></div>
      <div class="avatar-2601-bolt avatar-2601-bolt-1"></div>
      <div class="avatar-2601-bolt avatar-2601-bolt-2"></div>
      <div class="avatar-2601-bolt avatar-2601-bolt-3"></div>
      <div class="avatar-2601-bolt avatar-2601-bolt-4"></div>
      <div class="avatar-2601-core">
        <div class="avatar-2601-core-inner">
          <span>A</span>
        </div>
      </div>
      <div class="avatar-2601-highlight"></div>
      <div class="avatar-2601-shadow"></div>
    </div>
    <div class="avatar-2601-status">
      <span></span>
    </div>
  </div>
</div>`,
    css: `.avatar-2601{width:100%;min-height:300px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;background:radial-gradient(circle at center,rgba(148,163,184,.08),transparent 55%)}.avatar-2601-frame{width:190px;height:190px;position:relative;display:flex;align-items:center;justify-content:center;perspective:900px}.avatar-2601-plate{width:136px;height:136px;border-radius:28px;position:relative;overflow:hidden;transform:rotateX(4deg) rotateY(-5deg);transform-style:preserve-3d;background:linear-gradient(145deg,#e5e7eb 0%,#9ca3af 8%,#4b5563 20%,#1f2937 40%,#6b7280 55%,#111827 72%,#4b5563 88%,#d1d5db 100%);border:2px solid #9ca3af;box-shadow:inset 3px 3px 6px rgba(255,255,255,.45),inset -6px -6px 12px rgba(0,0,0,.65),0 8px 12px rgba(0,0,0,.35),0 18px 40px rgba(0,0,0,.28);transition:transform .7s cubic-bezier(.22,1,.36,1),box-shadow .7s ease,filter .7s ease}.avatar-2601:hover .avatar-2601-plate{transform:rotateX(7deg) rotateY(-9deg) translateY(-5px) scale(1.06);filter:contrast(1.05) brightness(1.05);box-shadow:inset 4px 4px 8px rgba(255,255,255,.5),inset -8px -8px 14px rgba(0,0,0,.7),0 10px 18px rgba(0,0,0,.4),0 22px 55px rgba(0,0,0,.35)}.avatar-2601-plate::before{content:"";position:absolute;inset:7px;border-radius:22px;border:1px solid rgba(255,255,255,.28);box-shadow:inset 0 0 8px rgba(0,0,0,.7);pointer-events:none;z-index:8}.avatar-2601-plate::after{content:"";position:absolute;inset:0;border-radius:28px;background:repeating-linear-gradient(102deg,rgba(255,255,255,.025) 0 2px,rgba(0,0,0,.03) 2px 4px,rgba(255,255,255,.015) 4px 7px);mix-blend-mode:overlay;opacity:.8;pointer-events:none;z-index:7}.avatar-2601-bevel{position:absolute;inset:11px;border-radius:21px;border:2px solid transparent;border-top-color:rgba(255,255,255,.5);border-left-color:rgba(255,255,255,.18);border-right-color:rgba(0,0,0,.55);border-bottom-color:rgba(0,0,0,.7);box-shadow:inset 0 1px 0 rgba(255,255,255,.25);z-index:2;pointer-events:none}.avatar-2601-surface{position:absolute;inset:17px;border-radius:18px;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.09),transparent 35%),linear-gradient(145deg,rgba(255,255,255,.08),transparent 35%,rgba(0,0,0,.18) 78%);box-shadow:inset 0 0 18px rgba(0,0,0,.45);z-index:1}.avatar-2601-core{position:absolute;left:50%;top:50%;width:82px;height:82px;transform:translate(-50%,-50%) translateZ(18px);border-radius:50%;background:linear-gradient(145deg,#6b7280,#374151 35%,#111827 65%,#6b7280);border:3px solid #9ca3af;box-shadow:inset 3px 3px 7px rgba(255,255,255,.28),inset -5px -5px 10px rgba(0,0,0,.8),0 0 0 4px #1f2937,0 0 0 5px #6b7280,0 7px 15px rgba(0,0,0,.55);z-index:5;transition:transform .7s cubic-bezier(.22,1,.36,1),box-shadow .7s ease}.avatar-2601:hover .avatar-2601-core{transform:translate(-50%,-50%) translateZ(27px) scale(1.04);box-shadow:inset 3px 3px 7px rgba(255,255,255,.32),inset -5px -5px 11px rgba(0,0,0,.85),0 0 0 4px #1f2937,0 0 0 5px #9ca3af,0 0 22px rgba(248,250,252,.13),0 9px 20px rgba(0,0,0,.65)}.avatar-2601-core::before{content:"";position:absolute;inset:7px;border-radius:50%;border:1px solid rgba(255,255,255,.15);box-shadow:inset 0 0 11px rgba(0,0,0,.65)}.avatar-2601-core::after{content:"";position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 20deg,transparent 0deg,rgba(255,255,255,.12) 35deg,transparent 70deg,rgba(0,0,0,.18) 130deg,transparent 205deg,rgba(255,255,255,.08) 285deg,transparent 345deg);animation:avatar2601MetalSpin 10s linear infinite}.avatar-2601-core-inner{position:absolute;inset:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 35% 25%,#d1d5db 0%,#6b7280 22%,#374151 48%,#111827 78%);box-shadow:inset 2px 2px 5px rgba(255,255,255,.22),inset -4px -4px 8px rgba(0,0,0,.8);z-index:2;overflow:hidden}.avatar-2601-core-inner::before{content:"";position:absolute;width:52px;height:2px;left:50%;top:20%;transform:translateX(-50%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);filter:blur(.5px);opacity:.7}.avatar-2601-core-inner::after{content:"";position:absolute;width:140%;height:40%;left:-20%;top:-18%;transform:rotate(-30deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);animation:avatar2601CoreSweep 5s ease-in-out infinite}.avatar-2601-core-inner span{position:relative;z-index:4;font-family:Arial,sans-serif;font-weight:900;font-size:29px;letter-spacing:-2px;color:#e5e7eb;text-shadow:1px 1px 0 #111827,2px 2px 3px rgba(0,0,0,.8),0 0 8px rgba(255,255,255,.12);transition:transform .5s ease}.avatar-2601:hover .avatar-2601-core-inner span{transform:scale(1.08)}.avatar-2601-bolt{position:absolute;width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#f3f4f6 0%,#9ca3af 18%,#4b5563 45%,#111827 78%);border:1px solid #111827;box-shadow:inset 1px 1px 2px rgba(255,255,255,.55),inset -1px -1px 2px rgba(0,0,0,.85),0 1px 2px rgba(0,0,0,.7);z-index:6;transition:transform .4s ease}.avatar-2601-bolt-1{top:18px;left:18px}.avatar-2601-bolt-2{top:18px;right:18px}.avatar-2601-bolt-3{bottom:18px;left:18px}.avatar-2601-bolt-4{bottom:18px;right:18px}.avatar-2601:hover .avatar-2601-bolt-1{transform:translate(-1px,-1px)}.avatar-2601:hover .avatar-2601-bolt-2{transform:translate(1px,-1px)}.avatar-2601:hover .avatar-2601-bolt-3{transform:translate(-1px,1px)}.avatar-2601:hover .avatar-2601-bolt-4{transform:translate(1px,1px)}.avatar-2601-scratch{position:absolute;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),rgba(0,0,0,.5),transparent);transform-origin:left center;z-index:4;opacity:.5}.avatar-2601-scratch-1{width:42px;left:26px;top:40px;transform:rotate(-9deg)}.avatar-2601-scratch-2{width:29px;left:72px;top:101px;transform:rotate(18deg)}.avatar-2601-scratch-3{width:35px;left:33px;top:110px;transform:rotate(-28deg)}.avatar-2601-scratch-4{width:24px;left:82px;top:30px;transform:rotate(26deg)}.avatar-2601-highlight{position:absolute;left:-40%;top:-20%;width:48%;height:150%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),rgba(255,255,255,.04),transparent);transform:rotate(25deg);filter:blur(1px);animation:avatar2601Highlight 5s ease-in-out infinite;z-index:9;pointer-events:none}.avatar-2601-shadow{position:absolute;inset:0;background:linear-gradient(115deg,transparent 15%,rgba(255,255,255,.1) 27%,transparent 36%,transparent 62%,rgba(0,0,0,.17) 78%,transparent 90%);z-index:3;pointer-events:none}.avatar-2601-status{position:absolute;right:16px;bottom:17px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#111827;border:2px solid #6b7280;box-shadow:inset 2px 2px 4px rgba(255,255,255,.12),inset -2px -2px 4px rgba(0,0,0,.75),0 5px 10px rgba(0,0,0,.45);z-index:12;transition:transform .4s ease}.avatar-2601-status span{width:10px;height:10px;border-radius:50%;background:#84cc16;box-shadow:0 0 4px #bef264,0 0 10px rgba(132,204,22,.7);animation:avatar2601Status 2.4s ease-in-out infinite}.avatar-2601-status::before{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(132,204,22,.22);animation:avatar2601StatusRing 2.5s ease-out infinite}.avatar-2601:hover .avatar-2601-status{transform:scale(1.08)}@keyframes avatar2601MetalSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes avatar2601CoreSweep{0%{left:-80%;opacity:0}15%{opacity:.15}45%{opacity:.6}65%{opacity:.1}100%{left:140%;opacity:0}}@keyframes avatar2601Highlight{0%{left:-50%;opacity:0}15%{opacity:.2}40%{opacity:.55}62%{opacity:.08}100%{left:150%;opacity:0}}@keyframes avatar2601Status{0%,100%{transform:scale(.78);opacity:.65}50%{transform:scale(1.16);opacity:1}}@keyframes avatar2601StatusRing{0%{transform:scale(.7);opacity:.7}70%{transform:scale(1.55);opacity:0}100%{transform:scale(1.55);opacity:0}}@media(prefers-reduced-motion:reduce){.avatar-2601 *{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}`,
  },
  {
    id: 2602,
    name: "Anime Spirit Avatar",
    preview: (
      <div className="avatar-2602">
        <div className="avatar-2602-stage">
          <div className="avatar-2602-back-glow"></div>
          <div className="avatar-2602-halo avatar-2602-halo-one"></div>
          <div className="avatar-2602-halo avatar-2602-halo-two"></div>
          <div className="avatar-2602-halo avatar-2602-halo-three"></div>
          <div className="avatar-2602-energy-ring avatar-2602-energy-ring-one"></div>
          <div className="avatar-2602-energy-ring avatar-2602-energy-ring-two"></div>
          <div className="avatar-2602-energy-ring avatar-2602-energy-ring-three"></div>
          <div className="avatar-2602-spirit avatar-2602-spirit-one"></div>
          <div className="avatar-2602-spirit avatar-2602-spirit-two"></div>
          <div className="avatar-2602-spirit avatar-2602-spirit-three"></div>
          <div className="avatar-2602-aura avatar-2602-aura-one"></div>
          <div className="avatar-2602-aura avatar-2602-aura-two"></div>
          <div className="avatar-2602-aura avatar-2602-aura-three"></div>
          <div className="avatar-2602-hair">
            <span className="avatar-2602-hair-1"></span>
            <span className="avatar-2602-hair-2"></span>
            <span className="avatar-2602-hair-3"></span>
            <span className="avatar-2602-hair-4"></span>
            <span className="avatar-2602-hair-5"></span>
            <span className="avatar-2602-hair-6"></span>
            <span className="avatar-2602-hair-7"></span>
            <span className="avatar-2602-hair-8"></span>
          </div>
          <div className="avatar-2602-face">
            <div className="avatar-2602-face-shine"></div>
            <div className="avatar-2602-eye avatar-2602-eye-left">
              <span></span>
            </div>
            <div className="avatar-2602-eye avatar-2602-eye-right">
              <span></span>
            </div>
            <div className="avatar-2602-eye-glow avatar-2602-eye-glow-left"></div>
            <div className="avatar-2602-eye-glow avatar-2602-eye-glow-right"></div>
            <div className="avatar-2602-nose"></div>
            <div className="avatar-2602-mouth"></div>
            <div className="avatar-2602-cheek avatar-2602-cheek-left"></div>
            <div className="avatar-2602-cheek avatar-2602-cheek-right"></div>
            <div className="avatar-2602-mark"></div>
          </div>
          <div className="avatar-2602-collar">
            <span></span>
          </div>
          <div className="avatar-2602-energy-core">
            <div className="avatar-2602-energy-core-inner"></div>
          </div>
          <div className="avatar-2602-lightning avatar-2602-lightning-one"></div>
          <div className="avatar-2602-lightning avatar-2602-lightning-two"></div>
          <div className="avatar-2602-lightning avatar-2602-lightning-three"></div>
          <div className="avatar-2602-lightning avatar-2602-lightning-four"></div>
          <div className="avatar-2602-slash avatar-2602-slash-one"></div>
          <div className="avatar-2602-slash avatar-2602-slash-two"></div>
          <div className="avatar-2602-slash avatar-2602-slash-three"></div>
          <div className="avatar-2602-slash avatar-2602-slash-four"></div>
          <div className="avatar-2602-particle avatar-2602-particle-1"></div>
          <div className="avatar-2602-particle avatar-2602-particle-2"></div>
          <div className="avatar-2602-particle avatar-2602-particle-3"></div>
          <div className="avatar-2602-particle avatar-2602-particle-4"></div>
          <div className="avatar-2602-particle avatar-2602-particle-5"></div>
          <div className="avatar-2602-particle avatar-2602-particle-6"></div>
          <div className="avatar-2602-particle avatar-2602-particle-7"></div>
          <div className="avatar-2602-particle avatar-2602-particle-8"></div>
          <div className="avatar-2602-particle avatar-2602-particle-9"></div>
          <div className="avatar-2602-particle avatar-2602-particle-10"></div>
          <div className="avatar-2602-particle avatar-2602-particle-11"></div>
          <div className="avatar-2602-particle avatar-2602-particle-12"></div>
          <div className="avatar-2602-particle avatar-2602-particle-13"></div>
          <div className="avatar-2602-particle avatar-2602-particle-14"></div>
          <div className="avatar-2602-particle avatar-2602-particle-15"></div>
          <div className="avatar-2602-particle avatar-2602-particle-16"></div>
          <div className="avatar-2602-rune avatar-2602-rune-one">✦</div>
          <div className="avatar-2602-rune avatar-2602-rune-two">◇</div>
          <div className="avatar-2602-rune avatar-2602-rune-three">✧</div>
          <div className="avatar-2602-rune avatar-2602-rune-four">◈</div>
          <div className="avatar-2602-rune avatar-2602-rune-five">✦</div>
          <div className="avatar-2602-rune avatar-2602-rune-six">◇</div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-1"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-2"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-3"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-4"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-5"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-6"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-7"></div>
          <div className="avatar-2602-speed-line avatar-2602-speed-line-8"></div>
          <div className="avatar-2602-status">
            <span></span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="avatar-2602">
  <div class="avatar-2602-stage">
    <div class="avatar-2602-back-glow"></div>
    <div class="avatar-2602-halo avatar-2602-halo-one"></div>
    <div class="avatar-2602-halo avatar-2602-halo-two"></div>
    <div class="avatar-2602-halo avatar-2602-halo-three"></div>
    <div class="avatar-2602-energy-ring avatar-2602-energy-ring-one"></div>
    <div class="avatar-2602-energy-ring avatar-2602-energy-ring-two"></div>
    <div class="avatar-2602-energy-ring avatar-2602-energy-ring-three"></div>
    <div class="avatar-2602-spirit avatar-2602-spirit-one"></div>
    <div class="avatar-2602-spirit avatar-2602-spirit-two"></div>
    <div class="avatar-2602-spirit avatar-2602-spirit-three"></div>
    <div class="avatar-2602-aura avatar-2602-aura-one"></div>
    <div class="avatar-2602-aura avatar-2602-aura-two"></div>
    <div class="avatar-2602-aura avatar-2602-aura-three"></div>
    <div class="avatar-2602-hair">
      <span class="avatar-2602-hair-1"></span>
      <span class="avatar-2602-hair-2"></span>
      <span class="avatar-2602-hair-3"></span>
      <span class="avatar-2602-hair-4"></span>
      <span class="avatar-2602-hair-5"></span>
      <span class="avatar-2602-hair-6"></span>
      <span class="avatar-2602-hair-7"></span>
      <span class="avatar-2602-hair-8"></span>
    </div>
    <div class="avatar-2602-face">
      <div class="avatar-2602-face-shine"></div>
      <div class="avatar-2602-eye avatar-2602-eye-left">
        <span></span>
      </div>
      <div class="avatar-2602-eye avatar-2602-eye-right">
        <span></span>
      </div>
      <div class="avatar-2602-eye-glow avatar-2602-eye-glow-left"></div>
      <div class="avatar-2602-eye-glow avatar-2602-eye-glow-right"></div>
      <div class="avatar-2602-nose"></div>
      <div class="avatar-2602-mouth"></div>
      <div class="avatar-2602-cheek avatar-2602-cheek-left"></div>
      <div class="avatar-2602-cheek avatar-2602-cheek-right"></div>
      <div class="avatar-2602-mark"></div>
    </div>
    <div class="avatar-2602-collar">
      <span></span>
    </div>
    <div class="avatar-2602-energy-core">
      <div class="avatar-2602-energy-core-inner"></div>
    </div>
    <div class="avatar-2602-lightning avatar-2602-lightning-one"></div>
    <div class="avatar-2602-lightning avatar-2602-lightning-two"></div>
    <div class="avatar-2602-lightning avatar-2602-lightning-three"></div>
    <div class="avatar-2602-lightning avatar-2602-lightning-four"></div>
    <div class="avatar-2602-slash avatar-2602-slash-one"></div>
    <div class="avatar-2602-slash avatar-2602-slash-two"></div>
    <div class="avatar-2602-slash avatar-2602-slash-three"></div>
    <div class="avatar-2602-slash avatar-2602-slash-four"></div>
    <div class="avatar-2602-particle avatar-2602-particle-1"></div>
    <div class="avatar-2602-particle avatar-2602-particle-2"></div>
    <div class="avatar-2602-particle avatar-2602-particle-3"></div>
    <div class="avatar-2602-particle avatar-2602-particle-4"></div>
    <div class="avatar-2602-particle avatar-2602-particle-5"></div>
    <div class="avatar-2602-particle avatar-2602-particle-6"></div>
    <div class="avatar-2602-particle avatar-2602-particle-7"></div>
    <div class="avatar-2602-particle avatar-2602-particle-8"></div>
    <div class="avatar-2602-particle avatar-2602-particle-9"></div>
    <div class="avatar-2602-particle avatar-2602-particle-10"></div>
    <div class="avatar-2602-particle avatar-2602-particle-11"></div>
    <div class="avatar-2602-particle avatar-2602-particle-12"></div>
    <div class="avatar-2602-particle avatar-2602-particle-13"></div>
    <div class="avatar-2602-particle avatar-2602-particle-14"></div>
    <div class="avatar-2602-particle avatar-2602-particle-15"></div>
    <div class="avatar-2602-particle avatar-2602-particle-16"></div>
    <div class="avatar-2602-rune avatar-2602-rune-one">✦</div>
    <div class="avatar-2602-rune avatar-2602-rune-two">◇</div>
    <div class="avatar-2602-rune avatar-2602-rune-three">✧</div>
    <div class="avatar-2602-rune avatar-2602-rune-four">◈</div>
    <div class="avatar-2602-rune avatar-2602-rune-five">✦</div>
    <div class="avatar-2602-rune avatar-2602-rune-six">◇</div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-1"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-2"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-3"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-4"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-5"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-6"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-7"></div>
    <div class="avatar-2602-speed-line avatar-2602-speed-line-8"></div>
    <div class="avatar-2602-status">
      <span></span>
    </div>
  </div>
</div>`,
    css: `.avatar-2602{width:100%;min-height:360px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;isolation:isolate;background:radial-gradient(circle at 50% 45%,rgba(139,92,246,.08),transparent 20%),radial-gradient(circle at 50% 50%,rgba(59,130,246,.07),transparent 42%),radial-gradient(circle at 50% 50%,rgba(236,72,153,.035),transparent 70%)}`,
  },
];
