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
  {
    id: 2625,
    name: "Legendary Void Gravity Avatar",
    preview: (
      <div className="avatar-preview-2625">
        <div className="void-avatar-2625">
          <div className="void-background-2625"></div>
          <div className="void-stars-2625"></div>
          <div className="void-aura-2625"></div>
          <div className="void-orbit void-orbit-1-2625"></div>
          <div className="void-orbit void-orbit-2-2625"></div>
          <div className="void-orbit void-orbit-3-2625"></div>
          <div className="void-orbit void-orbit-4-2625"></div>
          <div className="void-orbit void-orbit-5-2625"></div>
          <div className="void-particle void-particle-1-2625"></div>
          <div className="void-particle void-particle-2-2625"></div>
          <div className="void-particle void-particle-3-2625"></div>
          <div className="void-particle void-particle-4-2625"></div>
          <div className="void-particle void-particle-5-2625"></div>
          <div className="void-particle void-particle-6-2625"></div>
          <div className="void-particle void-particle-7-2625"></div>
          <div className="void-particle void-particle-8-2625"></div>
          <div className="void-particle void-particle-9-2625"></div>
          <div className="void-particle void-particle-10-2625"></div>
          <div className="void-particle void-particle-11-2625"></div>
          <div className="void-particle void-particle-12-2625"></div>
          <div className="void-distortion-2625"></div>
          <div className="void-energy-ring void-energy-ring-a-2625"></div>
          <div className="void-energy-ring void-energy-ring-b-2625"></div>
          <div className="void-energy-ring void-energy-ring-c-2625"></div>
          <div className="void-core-2625">
            <div className="void-accretion-2625">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="void-horizon-2625"></div>
            <div className="void-core-glow-2625"></div>
            <div className="void-core-icon-2625">
              <i className="ri-focus-3-line"></i>
            </div>
          </div>
          <div className="void-lightning void-lightning-1-2625"></div>
          <div className="void-lightning void-lightning-2-2625"></div>
          <div className="void-lightning void-lightning-3-2625"></div>
          <div className="void-status-2625">
            <span></span>
            <strong>VOID</strong>
          </div>
          <div className="void-corner void-corner-tl-2625"></div>
          <div className="void-corner void-corner-tr-2625"></div>
          <div className="void-corner void-corner-bl-2625"></div>
          <div className="void-corner void-corner-br-2625"></div>
        </div>
      </div>
    ),
    html: `
<div class="void-avatar-2625">
  <div class="void-background-2625"></div>
  <div class="void-stars-2625"></div>
  <div class="void-aura-2625"></div>
  <div class="void-orbit void-orbit-1-2625"></div>
  <div class="void-orbit void-orbit-2-2625"></div>
  <div class="void-orbit void-orbit-3-2625"></div>
  <div class="void-orbit void-orbit-4-2625"></div>
  <div class="void-orbit void-orbit-5-2625"></div>
  <div class="void-particle void-particle-1-2625"></div>
  <div class="void-particle void-particle-2-2625"></div>
  <div class="void-particle void-particle-3-2625"></div>
  <div class="void-particle void-particle-4-2625"></div>
  <div class="void-particle void-particle-5-2625"></div>
  <div class="void-particle void-particle-6-2625"></div>
  <div class="void-particle void-particle-7-2625"></div>
  <div class="void-particle void-particle-8-2625"></div>
  <div class="void-particle void-particle-9-2625"></div>
  <div class="void-particle void-particle-10-2625"></div>
  <div class="void-particle void-particle-11-2625"></div>
  <div class="void-particle void-particle-12-2625"></div>
  <div class="void-distortion-2625"></div>
  <div class="void-energy-ring void-energy-ring-a-2625"></div>
  <div class="void-energy-ring void-energy-ring-b-2625"></div>
  <div class="void-energy-ring void-energy-ring-c-2625"></div>
  <div class="void-core-2625">
    <div class="void-accretion-2625">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="void-horizon-2625"></div>
    <div class="void-core-glow-2625"></div>
    <div class="void-core-icon-2625">
      <i class="ri-focus-3-line"></i>
    </div>
  </div>
  <div class="void-lightning void-lightning-1-2625"></div>
  <div class="void-lightning void-lightning-2-2625"></div>
  <div class="void-lightning void-lightning-3-2625"></div>
  <div class="void-status-2625">
    <span></span>
    <strong>VOID</strong>
  </div>
  <div class="void-corner void-corner-tl-2625"></div>
  <div class="void-corner void-corner-tr-2625"></div>
  <div class="void-corner void-corner-bl-2625"></div>
  <div class="void-corner void-corner-br-2625"></div>
</div>
  `,
    css: `
.avatar-preview-2625 {
  width: 100%;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%,rgba(56,189,248,.07),transparent 25%),
    radial-gradient(circle at 30% 30%,rgba(139,92,246,.08),transparent 28%),
    #020617;
}
.avatar-preview-2625::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(56,189,248,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(56,189,248,.025) 1px,transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center,black,transparent 80%);
}
.void-avatar-2625 {
  width: 330px;
  height: 330px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%,rgba(30,41,59,.85),rgba(2,6,23,.98) 68%),
    #020617;
  border: 1px solid rgba(125,211,252,.2);
  box-shadow:
    0 0 45px rgba(56,189,248,.1),
    0 0 90px rgba(139,92,246,.08),
    inset 0 0 60px rgba(15,23,42,.9);
  isolation: isolate;
}
.void-background-2625 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 48% 45%,rgba(56,189,248,.1),transparent 18%),
    radial-gradient(circle at 58% 54%,rgba(139,92,246,.11),transparent 26%),
    radial-gradient(circle at 35% 70%,rgba(14,165,233,.07),transparent 30%);
  animation: voidBackground2625 7s ease-in-out infinite alternate;
}
.void-stars-2625 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-image:
    radial-gradient(circle at 11% 20%,rgba(255,255,255,.9) 0 1px,transparent 1.5px),
    radial-gradient(circle at 23% 67%,rgba(125,211,252,.75) 0 1px,transparent 1.5px),
    radial-gradient(circle at 37% 13%,rgba(255,255,255,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 44% 82%,rgba(167,139,250,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 63% 19%,rgba(255,255,255,.8) 0 1px,transparent 1.5px),
    radial-gradient(circle at 76% 72%,rgba(96,165,250,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 87% 28%,rgba(255,255,255,.8) 0 1px,transparent 1.5px),
    radial-gradient(circle at 92% 83%,rgba(125,211,252,.8) 0 1px,transparent 1.5px),
    radial-gradient(circle at 18% 46%,rgba(255,255,255,.5) 0 1px,transparent 1.4px),
    radial-gradient(circle at 71% 41%,rgba(167,139,250,.5) 0 1px,transparent 1.4px);
  opacity: .5;
  animation: voidStars2625 9s ease-in-out infinite alternate;
  z-index: 1;
}
.void-aura-2625 {
  position: absolute;
  width: 240px;
  height: 240px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(56,189,248,.12),rgba(139,92,246,.06) 38%,transparent 70%);
  filter: blur(8px);
  animation: voidAura2625 3.8s ease-in-out infinite;
  z-index: 2;
}
.void-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid transparent;
  pointer-events: none;
  z-index: 3;
}
.void-orbit-1-2625 {
  width: 270px;
  height: 98px;
  border-top-color: rgba(56,189,248,.25);
  border-bottom-color: rgba(56,189,248,.07);
  transform: translate(-50%,-50%) rotate(18deg);
  animation: voidOrbit1 8s linear infinite;
}
.void-orbit-2-2625 {
  width: 245px;
  height: 83px;
  border-left-color: rgba(167,139,250,.24);
  border-right-color: rgba(167,139,250,.06);
  transform: translate(-50%,-50%) rotate(-34deg);
  animation: voidOrbit2 10s linear infinite reverse;
}
.void-orbit-3-2625 {
  width: 218px;
  height: 72px;
  border-top-color: rgba(34,211,238,.2);
  border-bottom-color: rgba(34,211,238,.05);
  transform: translate(-50%,-50%) rotate(62deg);
  animation: voidOrbit3 7s linear infinite;
}
.void-orbit-4-2625 {
  width: 190px;
  height: 62px;
  border-left-color: rgba(96,165,250,.22);
  border-right-color: rgba(96,165,250,.05);
  transform: translate(-50%,-50%) rotate(-68deg);
  animation: voidOrbit4 6s linear infinite reverse;
}
.void-orbit-5-2625 {
  width: 150px;
  height: 55px;
  border-top-color: rgba(192,132,252,.18);
  border-bottom-color: rgba(192,132,252,.04);
  transform: translate(-50%,-50%) rotate(9deg);
  animation: voidOrbit5 5s linear infinite;
}
.void-particle {
  position: absolute;
  border-radius: 50%;
  z-index: 7;
  background: #a5f3fc;
  box-shadow:
    0 0 5px #a5f3fc,
    0 0 14px #38bdf8,
    0 0 25px rgba(56,189,248,.7);
}
.void-particle-1-2625 {
  width: 4px;
  height: 4px;
  left: 14%;
  top: 28%;
  animation: voidParticle1 4.6s ease-in-out infinite;
}
.void-particle-2-2625 {
  width: 3px;
  height: 3px;
  right: 17%;
  top: 18%;
  animation: voidParticle2 5.2s ease-in-out infinite;
}
.void-particle-3-2625 {
  width: 5px;
  height: 5px;
  left: 8%;
  bottom: 28%;
  animation: voidParticle3 4.3s ease-in-out infinite;
}
.void-particle-4-2625 {
  width: 3px;
  height: 3px;
  right: 9%;
  bottom: 22%;
  animation: voidParticle4 5.7s ease-in-out infinite;
}
.void-particle-5-2625 {
  width: 2px;
  height: 2px;
  left: 31%;
  top: 12%;
  animation: voidParticle5 3.8s ease-in-out infinite;
}
.void-particle-6-2625 {
  width: 3px;
  height: 3px;
  right: 34%;
  top: 11%;
  animation: voidParticle6 4.9s ease-in-out infinite;
}
.void-particle-7-2625 {
  width: 3px;
  height: 3px;
  left: 23%;
  bottom: 13%;
  animation: voidParticle7 4.1s ease-in-out infinite;
}
.void-particle-8-2625 {
  width: 4px;
  height: 4px;
  right: 30%;
  bottom: 11%;
  animation: voidParticle8 5.1s ease-in-out infinite;
}
.void-particle-9-2625 {
  width: 2px;
  height: 2px;
  left: 13%;
  top: 52%;
  animation: voidParticle9 3.6s ease-in-out infinite;
}
.void-particle-10-2625 {
  width: 2px;
  height: 2px;
  right: 13%;
  top: 50%;
  animation: voidParticle10 4.8s ease-in-out infinite;
}
.void-particle-11-2625 {
  width: 3px;
  height: 3px;
  left: 42%;
  bottom: 8%;
  animation: voidParticle11 4.4s ease-in-out infinite;
}
.void-particle-12-2625 {
  width: 3px;
  height: 3px;
  right: 42%;
  top: 7%;
  animation: voidParticle12 5.3s ease-in-out infinite;
}
.void-distortion-2625 {
  position: absolute;
  width: 210px;
  height: 210px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,transparent 0 35%,rgba(56,189,248,.025) 38%,transparent 47%),
    radial-gradient(circle,transparent 0 49%,rgba(139,92,246,.035) 52%,transparent 62%);
  filter: blur(2px);
  animation: voidDistortion2625 4.5s ease-in-out infinite;
  z-index: 4;
}
.void-energy-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
  z-index: 5;
}
.void-energy-ring-a-2625 {
  width: 155px;
  height: 155px;
  border: 1px solid rgba(56,189,248,.18);
  box-shadow:
    0 0 15px rgba(56,189,248,.05),
    inset 0 0 15px rgba(56,189,248,.04);
  animation: voidEnergyRingA2625 5s linear infinite;
}
.void-energy-ring-b-2625 {
  width: 132px;
  height: 132px;
  border: 1px dashed rgba(167,139,250,.22);
  animation: voidEnergyRingB2625 7s linear infinite reverse;
}
.void-energy-ring-c-2625 {
  width: 112px;
  height: 112px;
  border: 1px solid rgba(34,211,238,.2);
  animation: voidEnergyRingC2625 3.7s linear infinite;
}
.void-core-2625 {
  width: 98px;
  height: 98px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.void-accretion-2625 {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  transform: rotate(-12deg);
  background:
    radial-gradient(
      ellipse at center,
      transparent 0 32%,
      rgba(14,165,233,.06) 34%,
      rgba(56,189,248,.24) 40%,
      rgba(167,139,250,.29) 46%,
      rgba(59,130,246,.12) 53%,
      transparent 63%
    );
  filter: blur(1px);
  animation: voidAccretion2625 4.8s linear infinite;
}
.void-accretion-2625 span {
  width: 6px;
  height: 6px;
  position: absolute;
  border-radius: 50%;
  background: #dbeafe;
  box-shadow:
    0 0 6px #dbeafe,
    0 0 14px #38bdf8,
    0 0 24px rgba(56,189,248,.7);
}
.void-accretion-2625 span:nth-child(1) {
  left: 9%;
  top: 31%;
  animation: voidAccParticle1 2.5s linear infinite;
}
.void-accretion-2625 span:nth-child(2) {
  right: 8%;
  top: 24%;
  animation: voidAccParticle2 3s linear infinite;
}
.void-accretion-2625 span:nth-child(3) {
  left: 17%;
  bottom: 14%;
  animation: voidAccParticle3 2.7s linear infinite;
}
.void-accretion-2625 span:nth-child(4) {
  right: 18%;
  bottom: 9%;
  animation: voidAccParticle4 3.2s linear infinite;
}
.void-accretion-2625 span:nth-child(5) {
  left: 47%;
  top: -1%;
  animation: voidAccParticle5 2.8s linear infinite;
}
.void-accretion-2625 span:nth-child(6) {
  right: -1%;
  top: 51%;
  animation: voidAccParticle6 3.3s linear infinite;
}
.void-accretion-2625 span:nth-child(7) {
  left: 28%;
  bottom: -2%;
  animation: voidAccParticle7 2.4s linear infinite;
}
.void-accretion-2625 span:nth-child(8) {
  left: -1%;
  top: 56%;
  animation: voidAccParticle8 3.1s linear infinite;
}
.void-horizon-2625 {
  width: 78px;
  height: 78px;
  position: absolute;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 45% 42%,
      #000 0 44%,
      #01030a 58%,
      #020617 71%,
      transparent 72%
    );
  box-shadow:
    0 0 25px rgba(0,0,0,1),
    0 0 50px rgba(2,6,23,.95),
    inset 0 0 20px rgba(0,0,0,1);
}
.void-core-glow-2625 {
  width: 52px;
  height: 52px;
  position: absolute;
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(56,189,248,.08),transparent 70%);
  box-shadow:
    0 0 15px rgba(56,189,248,.1),
    0 0 30px rgba(139,92,246,.08);
  animation: voidCoreGlow2625 2.2s ease-in-out infinite;
}
.void-core-icon-2625 {
  width: 42px;
  height: 42px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0,0,0,.58);
  border: 1px solid rgba(125,211,252,.12);
  color: rgba(186,230,253,.82);
  font-size: 16px;
  text-shadow:
    0 0 7px rgba(186,230,253,.7),
    0 0 20px rgba(56,189,248,.55);
  animation: voidCoreIcon2625 2.5s ease-in-out infinite;
}
.void-lightning {
  position: absolute;
  width: 55px;
  height: 2px;
  background: linear-gradient(90deg,transparent,#67e8f9,transparent);
  filter: blur(.4px);
  opacity: .55;
  z-index: 6;
}
.void-lightning-1-2625 {
  left: 18%;
  top: 38%;
  transform: rotate(-23deg);
  animation: voidLightning1 3.6s ease-in-out infinite;
}
.void-lightning-2-2625 {
  right: 13%;
  top: 57%;
  transform: rotate(26deg);
  animation: voidLightning2 4.1s ease-in-out infinite;
}
.void-lightning-3-2625 {
  left: 33%;
  bottom: 17%;
  transform: rotate(12deg);
  animation: voidLightning3 3.3s ease-in-out infinite;
}
.void-status-2625 {
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(2,6,23,.7);
  border: 1px solid rgba(148,163,184,.1);
  backdrop-filter: blur(8px);
  z-index: 12;
}
.void-status-2625 span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow:
    0 0 6px #a78bfa,
    0 0 14px #8b5cf6;
  animation: voidStatus2625 1.5s ease-in-out infinite;
}
.void-status-2625 strong {
  color: #c4b5fd;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .2em;
}
.void-corner {
  position: absolute;
  width: 22px;
  height: 22px;
  border-color: rgba(56,189,248,.28);
  z-index: 15;
}
.void-corner-tl-2625 {
  left: 12px;
  top: 12px;
  border-left: 1px solid;
  border-top: 1px solid;
}
.void-corner-tr-2625 {
  right: 12px;
  top: 12px;
  border-right: 1px solid;
  border-top: 1px solid;
}
.void-corner-bl-2625 {
  left: 12px;
  bottom: 12px;
  border-left: 1px solid;
  border-bottom: 1px solid;
}
.void-corner-br-2625 {
  right: 12px;
  bottom: 12px;
  border-right: 1px solid;
  border-bottom: 1px solid;
}
@keyframes voidBackground2625 {
  from {
    transform: scale(1);
    opacity: .65;
  }
  to {
    transform: scale(1.08);
    opacity: 1;
  }
}
@keyframes voidStars2625 {
  from {
    transform: scale(1);
    opacity: .35;
  }
  to {
    transform: scale(1.04);
    opacity: .68;
  }
}
@keyframes voidAura2625 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.9);
    opacity: .45;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.16);
    opacity: 1;
  }
}
@keyframes voidOrbit1 {
  from {
    transform: translate(-50%,-50%) rotate(18deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(18deg) rotateZ(360deg);
  }
}
@keyframes voidOrbit2 {
  from {
    transform: translate(-50%,-50%) rotate(-34deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-34deg) rotateZ(360deg);
  }
}
@keyframes voidOrbit3 {
  from {
    transform: translate(-50%,-50%) rotate(62deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(62deg) rotateZ(360deg);
  }
}
@keyframes voidOrbit4 {
  from {
    transform: translate(-50%,-50%) rotate(-68deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-68deg) rotateZ(360deg);
  }
}
@keyframes voidOrbit5 {
  from {
    transform: translate(-50%,-50%) rotate(9deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(9deg) rotateZ(360deg);
  }
}
@keyframes voidParticle1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(22px,-17px) scale(1.3);
    opacity: 1;
  }
}
@keyframes voidParticle2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .25;
  }
  50% {
    transform: translate(-23px,17px);
    opacity: 1;
  }
}
@keyframes voidParticle3 {
  0%,
  100% {
    transform: translate(0,0) scale(.75);
    opacity: .25;
  }
  50% {
    transform: translate(25px,-20px) scale(1.2);
    opacity: 1;
  }
}
@keyframes voidParticle4 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-25px,-18px);
    opacity: 1;
  }
}
@keyframes voidParticle5 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(18px,19px) scale(1.25);
    opacity: 1;
  }
}
@keyframes voidParticle6 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(-19px,20px);
    opacity: 1;
  }
}
@keyframes voidParticle7 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(21px,-14px);
    opacity: 1;
  }
}
@keyframes voidParticle8 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(-19px,-17px) scale(1.2);
    opacity: 1;
  }
}
@keyframes voidParticle9 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(18px,15px);
    opacity: 1;
  }
}
@keyframes voidParticle10 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-18px,-16px);
    opacity: 1;
  }
}
@keyframes voidParticle11 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(17px,-20px);
    opacity: 1;
  }
}
@keyframes voidParticle12 {
  0%,
  100% {
    transform: translate(0,0) scale(.8);
    opacity: .15;
  }
  50% {
    transform: translate(-17px,18px) scale(1.2);
    opacity: 1;
  }
}
@keyframes voidDistortion2625 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.92);
    opacity: .5;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.08);
    opacity: 1;
  }
}
@keyframes voidEnergyRingA2625 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.97);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(.97);
  }
}
@keyframes voidEnergyRingB2625 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(1);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.05);
  }
}
@keyframes voidEnergyRingC2625 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.94);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.06);
  }
}
@keyframes voidAccretion2625 {
  from {
    transform: rotate(-12deg);
  }
  to {
    transform: rotate(348deg);
  }
}
@keyframes voidAccParticle1 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(8px);
  }
}
@keyframes voidAccParticle2 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(7px);
  }
}
@keyframes voidAccParticle3 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(6px);
  }
}
@keyframes voidAccParticle4 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(8px);
  }
}
@keyframes voidAccParticle5 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(7px);
  }
}
@keyframes voidAccParticle6 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(6px);
  }
}
@keyframes voidAccParticle7 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(8px);
  }
}
@keyframes voidAccParticle8 {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(-360deg) translateX(7px);
  }
}
@keyframes voidCoreGlow2625 {
  0%,
  100% {
    transform: scale(.85);
    opacity: .4;
  }
  50% {
    transform: scale(1.18);
    opacity: 1;
  }
}
@keyframes voidCoreIcon2625 {
  0%,
  100% {
    transform: scale(.9);
    text-shadow:
      0 0 6px rgba(186,230,253,.45),
      0 0 14px rgba(56,189,248,.35);
  }
  50% {
    transform: scale(1.1);
    text-shadow:
      0 0 10px rgba(186,230,253,.85),
      0 0 25px rgba(56,189,248,.7);
  }
}
@keyframes voidLightning1 {
  0%,
  100% {
    transform: rotate(-23deg) scaleX(.55);
    opacity: .1;
  }
  50% {
    transform: rotate(-23deg) scaleX(1.15);
    opacity: .8;
  }
}
@keyframes voidLightning2 {
  0%,
  100% {
    transform: rotate(26deg) scaleX(.5);
    opacity: .12;
  }
  50% {
    transform: rotate(26deg) scaleX(1.2);
    opacity: .75;
  }
}
@keyframes voidLightning3 {
  0%,
  100% {
    transform: rotate(12deg) scaleX(.6);
    opacity: .1;
  }
  50% {
    transform: rotate(12deg) scaleX(1.1);
    opacity: .7;
  }
}
@keyframes voidStatus2625 {
  0%,
  100% {
    transform: scale(.75);
    opacity: .5;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@media (max-width: 700px) {
  .avatar-preview-2625 {
    min-height: 440px;
  }
  .void-avatar-2625 {
    width: 285px;
    height: 285px;
  }
  .void-outer-field-2625 {
    width: 390px;
    height: 390px;
  }
  .void-orbit-1-2625 {
    width: 235px;
    height: 84px;
  }
  .void-orbit-2-2625 {
    width: 213px;
    height: 74px;
  }
  .void-orbit-3-2625 {
    width: 190px;
    height: 64px;
  }
  .void-orbit-4-2625 {
    width: 165px;
    height: 54px;
  }
  .void-orbit-5-2625 {
    width: 132px;
    height: 48px;
  }
}
@media (max-width: 480px) {
  .avatar-preview-2625 {
    min-height: 390px;
  }
  .void-avatar-2625 {
    width: 245px;
    height: 245px;
  }
  .void-aura-2625 {
    width: 180px;
    height: 180px;
  }
  .void-core-2625 {
    width: 78px;
    height: 78px;
  }
  .void-horizon-2625 {
    width: 62px;
    height: 62px;
  }
  .void-core-icon-2625 {
    width: 34px;
    height: 34px;
    font-size: 13px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .void-avatar-2625 *,
  .void-avatar-2625::before,
  .void-avatar-2625::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
  `,
  },
  {
    id: 2626,
    name: "Legendary Frost Crystal Avatar",
    preview: (
      <div className="avatar-preview-2626">
        <div className="frost-avatar-2626">
          <div className="frost-bg-2626"></div>
          <div className="frost-snow-2626"></div>
          <div className="frost-aura-2626"></div>
          <div className="frost-halo frost-halo-1-2626"></div>
          <div className="frost-halo frost-halo-2-2626"></div>
          <div className="frost-halo frost-halo-3-2626"></div>
          <div className="frost-crystal frost-crystal-1-2626"></div>
          <div className="frost-crystal frost-crystal-2-2626"></div>
          <div className="frost-crystal frost-crystal-3-2626"></div>
          <div className="frost-crystal frost-crystal-4-2626"></div>
          <div className="frost-crystal frost-crystal-5-2626"></div>
          <div className="frost-crystal frost-crystal-6-2626"></div>
          <div className="frost-crystal frost-crystal-7-2626"></div>
          <div className="frost-crystal frost-crystal-8-2626"></div>
          <div className="frost-crystal frost-crystal-9-2626"></div>
          <div className="frost-shard frost-shard-1-2626"></div>
          <div className="frost-shard frost-shard-2-2626"></div>
          <div className="frost-shard frost-shard-3-2626"></div>
          <div className="frost-shard frost-shard-4-2626"></div>
          <div className="frost-shard frost-shard-5-2626"></div>
          <div className="frost-shard frost-shard-6-2626"></div>
          <div className="frost-shard frost-shard-7-2626"></div>
          <div className="frost-shard frost-shard-8-2626"></div>
          <div className="frost-energy frost-energy-1-2626"></div>
          <div className="frost-energy frost-energy-2-2626"></div>
          <div className="frost-energy frost-energy-3-2626"></div>
          <div className="frost-energy frost-energy-4-2626"></div>
          <div className="frost-core-2626">
            <div className="frost-core-shell-2626"></div>
            <div className="frost-core-crystal-2626">
              <div className="frost-core-face-2626">
                <i className="ri-snowflake-line"></i>
              </div>
            </div>
            <div className="frost-core-light-2626"></div>
          </div>
          <div className="frost-beam frost-beam-x-2626"></div>
          <div className="frost-beam frost-beam-y-2626"></div>
          <div className="frost-beam frost-beam-diagonal-2626"></div>
          <div className="frost-rune frost-rune-top-2626">
            <i className="ri-snowy-line"></i>
          </div>
          <div className="frost-rune frost-rune-right-2626">
            <i className="ri-sparkling-line"></i>
          </div>
          <div className="frost-rune frost-rune-bottom-2626">
            <i className="ri-drop-line"></i>
          </div>
          <div className="frost-rune frost-rune-left-2626">
            <i className="ri-temp-cold-line"></i>
          </div>
          <div className="frost-status-2626">
            <span></span>
            <strong>FROSTBORN</strong>
          </div>
          <div className="frost-corner frost-corner-tl-2626"></div>
          <div className="frost-corner frost-corner-tr-2626"></div>
          <div className="frost-corner frost-corner-bl-2626"></div>
          <div className="frost-corner frost-corner-br-2626"></div>
        </div>
      </div>
    ),
    html: `
<div class="frost-avatar-2626">
  <div class="frost-bg-2626"></div>
  <div class="frost-snow-2626"></div>
  <div class="frost-aura-2626"></div>
  <div class="frost-halo frost-halo-1-2626"></div>
  <div class="frost-halo frost-halo-2-2626"></div>
  <div class="frost-halo frost-halo-3-2626"></div>
  <div class="frost-crystal frost-crystal-1-2626"></div>
  <div class="frost-crystal frost-crystal-2-2626"></div>
  <div class="frost-crystal frost-crystal-3-2626"></div>
  <div class="frost-crystal frost-crystal-4-2626"></div>
  <div class="frost-crystal frost-crystal-5-2626"></div>
  <div class="frost-crystal frost-crystal-6-2626"></div>
  <div class="frost-crystal frost-crystal-7-2626"></div>
  <div class="frost-crystal frost-crystal-8-2626"></div>
  <div class="frost-crystal frost-crystal-9-2626"></div>
  <div class="frost-shard frost-shard-1-2626"></div>
  <div class="frost-shard frost-shard-2-2626"></div>
  <div class="frost-shard frost-shard-3-2626"></div>
  <div class="frost-shard frost-shard-4-2626"></div>
  <div class="frost-shard frost-shard-5-2626"></div>
  <div class="frost-shard frost-shard-6-2626"></div>
  <div class="frost-shard frost-shard-7-2626"></div>
  <div class="frost-shard frost-shard-8-2626"></div>
  <div class="frost-energy frost-energy-1-2626"></div>
  <div class="frost-energy frost-energy-2-2626"></div>
  <div class="frost-energy frost-energy-3-2626"></div>
  <div class="frost-energy frost-energy-4-2626"></div>
  <div class="frost-core-2626">
    <div class="frost-core-shell-2626"></div>
    <div class="frost-core-crystal-2626">
      <div class="frost-core-face-2626">
        <i class="ri-snowflake-line"></i>
      </div>
    </div>
    <div class="frost-core-light-2626"></div>
  </div>
  <div class="frost-beam frost-beam-x-2626"></div>
  <div class="frost-beam frost-beam-y-2626"></div>
  <div class="frost-beam frost-beam-diagonal-2626"></div>
  <div class="frost-rune frost-rune-top-2626">
    <i class="ri-snowy-line"></i>
  </div>
  <div class="frost-rune frost-rune-right-2626">
    <i class="ri-sparkling-line"></i>
  </div>
  <div class="frost-rune frost-rune-bottom-2626">
    <i class="ri-drop-line"></i>
  </div>
  <div class="frost-rune frost-rune-left-2626">
    <i class="ri-temp-cold-line"></i>
  </div>
  <div class="frost-status-2626">
    <span></span>
    <strong>FROSTBORN</strong>
  </div>
  <div class="frost-corner frost-corner-tl-2626"></div>
  <div class="frost-corner frost-corner-tr-2626"></div>
  <div class="frost-corner frost-corner-bl-2626"></div>
  <div class="frost-corner frost-corner-br-2626"></div>
</div>
  `,
    css: `
.avatar-preview-2626 {
  width: 100%;
  min-height: 520px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 50%,rgba(186,230,253,.11),transparent 23%),
    radial-gradient(circle at 20% 20%,rgba(96,165,250,.1),transparent 30%),
    radial-gradient(circle at 80% 80%,rgba(125,211,252,.07),transparent 28%),
    #020617;
}
.avatar-preview-2626::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(125,211,252,.022) 1px,transparent 1px),
    linear-gradient(90deg,rgba(125,211,252,.022) 1px,transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at center,black,transparent 80%);
}
.frost-avatar-2626 {
  width: 330px;
  height: 330px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 50%,rgba(125,211,252,.09),transparent 28%),
    radial-gradient(circle at 40% 60%,rgba(59,130,246,.08),transparent 40%),
    #020617;
  border: 1px solid rgba(186,230,253,.24);
  box-shadow:
    0 0 45px rgba(125,211,252,.12),
    0 0 100px rgba(59,130,246,.08),
    inset 0 0 70px rgba(30,64,175,.16);
  isolation: isolate;
}
.frost-bg-2626 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 35%,rgba(224,242,254,.12),transparent 15%),
    radial-gradient(circle at 40% 70%,rgba(56,189,248,.08),transparent 30%),
    radial-gradient(circle at 65% 58%,rgba(96,165,250,.08),transparent 32%);
  animation: frostBg2626 6s ease-in-out infinite alternate;
}
.frost-snow-2626 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: .65;
  background-image:
    radial-gradient(circle at 11% 17%,rgba(255,255,255,.9) 0 1px,transparent 1.7px),
    radial-gradient(circle at 22% 62%,rgba(191,219,254,.75) 0 1px,transparent 1.6px),
    radial-gradient(circle at 35% 13%,rgba(255,255,255,.8) 0 1.2px,transparent 1.8px),
    radial-gradient(circle at 47% 83%,rgba(224,242,254,.8) 0 1px,transparent 1.7px),
    radial-gradient(circle at 59% 19%,rgba(255,255,255,.9) 0 1px,transparent 1.5px),
    radial-gradient(circle at 75% 69%,rgba(125,211,252,.75) 0 1px,transparent 1.6px),
    radial-gradient(circle at 86% 24%,rgba(255,255,255,.85) 0 1px,transparent 1.6px),
    radial-gradient(circle at 93% 82%,rgba(191,219,254,.7) 0 1px,transparent 1.7px),
    radial-gradient(circle at 15% 43%,rgba(224,242,254,.65) 0 1px,transparent 1.6px),
    radial-gradient(circle at 69% 44%,rgba(255,255,255,.65) 0 1px,transparent 1.6px);
  animation: frostSnow2626 8s ease-in-out infinite alternate;
  z-index: 1;
}
.frost-aura-2626 {
  position: absolute;
  width: 250px;
  height: 250px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(224,242,254,.12),rgba(125,211,252,.07) 30%,transparent 72%);
  filter: blur(10px);
  animation: frostAura2626 4s ease-in-out infinite;
  z-index: 2;
}
.frost-halo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  border: 1px solid transparent;
  z-index: 3;
  pointer-events: none;
}
.frost-halo-1-2626 {
  width: 285px;
  height: 285px;
  border-color: rgba(186,230,253,.08);
  animation: frostHalo1 11s linear infinite;
}
.frost-halo-2-2626 {
  width: 245px;
  height: 245px;
  border-color: rgba(96,165,250,.12);
  border-style: dashed;
  animation: frostHalo2 8s linear infinite reverse;
}
.frost-halo-3-2626 {
  width: 205px;
  height: 205px;
  border-color: rgba(224,242,254,.14);
  animation: frostHalo3 6s linear infinite;
}
.frost-crystal {
  position: absolute;
  z-index: 6;
  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,.95),
      rgba(186,230,253,.78) 28%,
      rgba(96,165,250,.38) 65%,
      rgba(30,64,175,.12)
    );
  border: 1px solid rgba(224,242,254,.5);
  clip-path: polygon(
    50% 0%,
    66% 26%,
    100% 50%,
    67% 74%,
    50% 100%,
    33% 74%,
    0% 50%,
    33% 26%
  );
  filter:
    drop-shadow(0 0 5px rgba(125,211,252,.55))
    drop-shadow(0 0 13px rgba(96,165,250,.3));
  animation: frostCrystalFloat2626 4.5s ease-in-out infinite;
}
.frost-crystal-1-2626 {
  width: 37px;
  height: 70px;
  left: 7%;
  top: 28%;
  transform: rotate(-18deg);
}
.frost-crystal-2-2626 {
  width: 28px;
  height: 58px;
  right: 9%;
  top: 21%;
  transform: rotate(19deg);
  animation-delay: .4s;
}
.frost-crystal-3-2626 {
  width: 42px;
  height: 80px;
  left: 14%;
  bottom: 12%;
  transform: rotate(27deg);
  animation-delay: .9s;
}
.frost-crystal-4-2626 {
  width: 30px;
  height: 61px;
  right: 13%;
  bottom: 18%;
  transform: rotate(-25deg);
  animation-delay: 1.2s;
}
.frost-crystal-5-2626 {
  width: 22px;
  height: 46px;
  left: 27%;
  top: 8%;
  transform: rotate(12deg);
  animation-delay: .7s;
}
.frost-crystal-6-2626 {
  width: 25px;
  height: 50px;
  right: 28%;
  top: 9%;
  transform: rotate(-11deg);
  animation-delay: 1.5s;
}
.frost-crystal-7-2626 {
  width: 26px;
  height: 53px;
  left: 31%;
  bottom: 5%;
  transform: rotate(-14deg);
  animation-delay: 1.9s;
}
.frost-crystal-8-2626 {
  width: 23px;
  height: 47px;
  right: 32%;
  bottom: 8%;
  transform: rotate(16deg);
  animation-delay: 2.2s;
}
.frost-crystal-9-2626 {
  width: 19px;
  height: 39px;
  left: 10%;
  top: 53%;
  transform: rotate(32deg);
  animation-delay: 2.5s;
}
.frost-shard {
  position: absolute;
  z-index: 7;
  width: 7px;
  height: 19px;
  background: linear-gradient(180deg,#e0f2fe,#38bdf8);
  clip-path: polygon(50% 0%,100% 65%,65% 58%,48% 100%,30% 59%,0% 66%);
  filter:
    drop-shadow(0 0 5px rgba(186,230,253,.8))
    drop-shadow(0 0 12px rgba(56,189,248,.5));
}
.frost-shard-1-2626 {
  left: 18%;
  top: 26%;
  animation: frostShard1 4.4s ease-in-out infinite;
}
.frost-shard-2-2626 {
  right: 18%;
  top: 31%;
  animation: frostShard2 5.1s ease-in-out infinite;
}
.frost-shard-3-2626 {
  left: 23%;
  bottom: 27%;
  animation: frostShard3 4.2s ease-in-out infinite;
}
.frost-shard-4-2626 {
  right: 22%;
  bottom: 29%;
  animation: frostShard4 4.9s ease-in-out infinite;
}
.frost-shard-5-2626 {
  left: 37%;
  top: 17%;
  animation: frostShard5 3.7s ease-in-out infinite;
}
.frost-shard-6-2626 {
  right: 36%;
  top: 20%;
  animation: frostShard6 5.4s ease-in-out infinite;
}
.frost-shard-7-2626 {
  left: 38%;
  bottom: 18%;
  animation: frostShard7 4.7s ease-in-out infinite;
}
.frost-shard-8-2626 {
  right: 36%;
  bottom: 20%;
  animation: frostShard8 5.6s ease-in-out infinite;
}
.frost-energy {
  position: absolute;
  z-index: 5;
  border-radius: 50%;
  background: #bae6fd;
  box-shadow:
    0 0 5px #bae6fd,
    0 0 14px #38bdf8,
    0 0 26px rgba(56,189,248,.65);
}
.frost-energy-1-2626 {
  width: 4px;
  height: 4px;
  left: 20%;
  top: 18%;
  animation: frostEnergy1 4.2s ease-in-out infinite;
}
.frost-energy-2-2626 {
  width: 3px;
  height: 3px;
  right: 21%;
  top: 16%;
  animation: frostEnergy2 5.3s ease-in-out infinite;
}
.frost-energy-3-2626 {
  width: 4px;
  height: 4px;
  left: 15%;
  bottom: 20%;
  animation: frostEnergy3 4.8s ease-in-out infinite;
}
.frost-energy-4-2626 {
  width: 3px;
  height: 3px;
  right: 17%;
  bottom: 16%;
  animation: frostEnergy4 5.1s ease-in-out infinite;
}
.frost-core-2626 {
  width: 110px;
  height: 110px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frost-core-shell-2626 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 35% 28%,
      rgba(255,255,255,.95),
      rgba(186,230,253,.75) 18%,
      rgba(56,189,248,.28) 39%,
      rgba(30,64,175,.08) 63%,
      transparent 70%
    );
  box-shadow:
    0 0 25px rgba(186,230,253,.35),
    0 0 55px rgba(56,189,248,.2),
    inset 0 0 18px rgba(224,242,254,.28);
  filter: blur(.3px);
  animation: frostShell2626 3s ease-in-out infinite;
}
.frost-core-crystal-2626 {
  width: 74px;
  height: 74px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    50% 0%,
    72% 17%,
    100% 50%,
    76% 81%,
    50% 100%,
    24% 81%,
    0% 50%,
    28% 17%
  );
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.98) 0%,
      rgba(224,242,254,.91) 22%,
      rgba(125,211,252,.75) 45%,
      rgba(59,130,246,.5) 71%,
      rgba(30,64,175,.35) 100%
    );
  box-shadow:
    0 0 30px rgba(125,211,252,.45);
  animation: frostCrystalCore2626 3.6s ease-in-out infinite;
}
.frost-core-crystal-2626::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 82%;
  left: 31%;
  top: 9%;
  background: rgba(255,255,255,.62);
  transform: rotate(25deg);
  filter: blur(.3px);
}
.frost-core-crystal-2626::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 75%;
  right: 31%;
  top: 13%;
  background: rgba(255,255,255,.44);
  transform: rotate(-21deg);
}
.frost-core-face-2626 {
  width: 43px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(30,64,175,.52),rgba(2,6,23,.72));
  border: 1px solid rgba(224,242,254,.36);
  color: #e0f2fe;
  font-size: 20px;
  text-shadow:
    0 0 8px rgba(255,255,255,.8),
    0 0 22px rgba(56,189,248,.8);
  box-shadow:
    inset 0 0 18px rgba(125,211,252,.18),
    0 0 20px rgba(56,189,248,.28);
  animation: frostFace2626 2.2s ease-in-out infinite;
}
.frost-core-light-2626 {
  position: absolute;
  inset: -19px;
  border-radius: 50%;
  border: 1px solid rgba(186,230,253,.12);
  box-shadow:
    0 0 30px rgba(125,211,252,.1),
    inset 0 0 25px rgba(125,211,252,.07);
  animation: frostCoreLight2626 2.8s ease-in-out infinite;
}
.frost-beam {
  position: absolute;
  left: 50%;
  top: 50%;
  background: linear-gradient(90deg,transparent,rgba(186,230,253,.2),transparent);
  z-index: 4;
  opacity: .5;
}
.frost-beam-x-2626 {
  width: 265px;
  height: 1px;
  transform: translate(-50%,-50%);
  animation: frostBeamX2626 3.2s ease-in-out infinite;
}
.frost-beam-y-2626 {
  width: 1px;
  height: 265px;
  transform: translate(-50%,-50%);
  background: linear-gradient(180deg,transparent,rgba(186,230,253,.2),transparent);
  animation: frostBeamY2626 3.7s ease-in-out infinite;
}
.frost-beam-diagonal-2626 {
  width: 230px;
  height: 1px;
  transform: translate(-50%,-50%) rotate(45deg);
  opacity: .25;
  animation: frostBeamDiagonal2626 4.1s ease-in-out infinite;
}
.frost-rune {
  width: 27px;
  height: 27px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(15,23,42,.5);
  border: 1px solid rgba(186,230,253,.12);
  color: #bae6fd;
  font-size: 11px;
  z-index: 12;
  box-shadow:
    inset 0 0 12px rgba(125,211,252,.04),
    0 0 15px rgba(56,189,248,.06);
  animation: frostRune2626 3s ease-in-out infinite;
}
.frost-rune-top-2626 {
  left: 50%;
  top: 13%;
  transform: translateX(-50%);
}
.frost-rune-right-2626 {
  right: 13%;
  top: 50%;
  transform: translateY(-50%);
  animation-delay: .7s;
}
.frost-rune-bottom-2626 {
  left: 50%;
  bottom: 13%;
  transform: translateX(-50%);
  animation-delay: 1.2s;
}
.frost-rune-left-2626 {
  left: 13%;
  top: 50%;
  transform: translateY(-50%);
  animation-delay: 1.8s;
}
.frost-status-2626 {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(2,6,23,.72);
  border: 1px solid rgba(186,230,253,.11);
  backdrop-filter: blur(8px);
  z-index: 14;
}
.frost-status-2626 span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #67e8f9;
  box-shadow:
    0 0 6px #67e8f9,
    0 0 13px #38bdf8;
  animation: frostStatus2626 1.5s ease-in-out infinite;
}
.frost-status-2626 strong {
  color: #bae6fd;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .18em;
}
.frost-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(186,230,253,.25);
  z-index: 15;
}
.frost-corner-tl-2626 {
  top: 12px;
  left: 12px;
  border-top: 1px solid;
  border-left: 1px solid;
}
.frost-corner-tr-2626 {
  top: 12px;
  right: 12px;
  border-top: 1px solid;
  border-right: 1px solid;
}
.frost-corner-bl-2626 {
  bottom: 12px;
  left: 12px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}
.frost-corner-br-2626 {
  bottom: 12px;
  right: 12px;
  border-bottom: 1px solid;
  border-right: 1px solid;
}
@keyframes frostBg2626 {
  from {
    transform: scale(1);
    opacity: .6;
  }
  to {
    transform: scale(1.08);
    opacity: 1;
  }
}
@keyframes frostSnow2626 {
  from {
    transform: scale(1);
    opacity: .35;
  }
  to {
    transform: scale(1.04);
    opacity: .72;
  }
}
@keyframes frostAura2626 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.9);
    opacity: .45;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.14);
    opacity: 1;
  }
}
@keyframes frostHalo1 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes frostHalo2 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.98);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.04);
  }
}
@keyframes frostHalo3 {
  from {
    transform: translate(-50%,-50%) rotate(360deg) scale(1);
  }
  to {
    transform: translate(-50%,-50%) rotate(0deg) scale(.95);
  }
}
@keyframes frostCrystalFloat2626 {
  0%,
  100% {
    filter:
      drop-shadow(0 0 4px rgba(125,211,252,.45))
      drop-shadow(0 0 10px rgba(96,165,250,.25));
  }
  50% {
    filter:
      drop-shadow(0 0 8px rgba(224,242,254,.7))
      drop-shadow(0 0 20px rgba(56,189,248,.5));
  }
}
@keyframes frostShard1 {
  0%,
  100% {
    transform: translate(0,0) rotate(0deg);
    opacity: .2;
  }
  50% {
    transform: translate(18px,-17px) rotate(35deg);
    opacity: 1;
  }
}
@keyframes frostShard2 {
  0%,
  100% {
    transform: translate(0,0) rotate(0deg);
    opacity: .25;
  }
  50% {
    transform: translate(-19px,15px) rotate(-40deg);
    opacity: 1;
  }
}
@keyframes frostShard3 {
  0%,
  100% {
    transform: translate(0,0) rotate(0deg);
    opacity: .2;
  }
  50% {
    transform: translate(16px,-21px) rotate(28deg);
    opacity: 1;
  }
}
@keyframes frostShard4 {
  0%,
  100% {
    transform: translate(0,0) rotate(0deg);
    opacity: .2;
  }
  50% {
    transform: translate(-17px,-15px) rotate(-31deg);
    opacity: 1;
  }
}
@keyframes frostShard5 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(14px,19px);
    opacity: 1;
  }
}
@keyframes frostShard6 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-15px,17px);
    opacity: 1;
  }
}
@keyframes frostShard7 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(17px,-16px);
    opacity: .95;
  }
}
@keyframes frostShard8 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-19px,-17px);
    opacity: 1;
  }
}
@keyframes frostEnergy1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(21px,17px) scale(1.3);
    opacity: 1;
  }
}
@keyframes frostEnergy2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-18px,19px);
    opacity: 1;
  }
}
@keyframes frostEnergy3 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .25;
  }
  50% {
    transform: translate(22px,-16px);
    opacity: 1;
  }
}
@keyframes frostEnergy4 {
  0%,
  100% {
    transform: translate(0,0) scale(.75);
    opacity: .15;
  }
  50% {
    transform: translate(-20px,-18px) scale(1.2);
    opacity: 1;
  }
}
@keyframes frostShell2626 {
  0%,
  100% {
    transform: scale(.94);
    opacity: .62;
  }
  50% {
    transform: scale(1.07);
    opacity: 1;
  }
}
@keyframes frostCrystalCore2626 {
  0%,
  100% {
    transform: scale(.94) rotate(0deg);
    filter: brightness(.92);
  }
  50% {
    transform: scale(1.06) rotate(3deg);
    filter: brightness(1.16);
  }
}
@keyframes frostFace2626 {
  0%,
  100% {
    transform: scale(.9);
    opacity: .68;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
@keyframes frostCoreLight2626 {
  0%,
  100% {
    transform: scale(.85);
    opacity: .35;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
@keyframes frostBeamX2626 {
  0%,
  100% {
    transform: translate(-50%,-50%) scaleX(.65);
    opacity: .15;
  }
  50% {
    transform: translate(-50%,-50%) scaleX(1);
    opacity: .6;
  }
}
@keyframes frostBeamY2626 {
  0%,
  100% {
    transform: translate(-50%,-50%) scaleY(.65);
    opacity: .15;
  }
  50% {
    transform: translate(-50%,-50%) scaleY(1);
    opacity: .6;
  }
}
@keyframes frostBeamDiagonal2626 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(45deg) scaleX(.55);
    opacity: .1;
  }
  50% {
    transform: translate(-50%,-50%) rotate(45deg) scaleX(1);
    opacity: .4;
  }
}
@keyframes frostRune2626 {
  0%,
  100% {
    transform: scale(.9);
    box-shadow:
      inset 0 0 12px rgba(125,211,252,.04),
      0 0 12px rgba(56,189,248,.04);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      inset 0 0 15px rgba(125,211,252,.08),
      0 0 25px rgba(56,189,248,.12);
  }
}
@keyframes frostStatus2626 {
  0%,
  100% {
    transform: scale(.75);
    opacity: .55;
  }
  50% {
    transform: scale(1.16);
    opacity: 1;
  }
}
@media (max-width: 700px) {
  .avatar-preview-2626 {
    min-height: 430px;
  }
  .frost-avatar-2626 {
    width: 285px;
    height: 285px;
  }
  .frost-halo-1-2626 {
    width: 245px;
    height: 245px;
  }
  .frost-halo-2-2626 {
    width: 211px;
    height: 211px;
  }
  .frost-halo-3-2626 {
    width: 177px;
    height: 177px;
  }
  .frost-core-2626 {
    width: 94px;
    height: 94px;
  }
  .frost-core-crystal-2626 {
    width: 64px;
    height: 64px;
  }
  .frost-core-face-2626 {
    width: 37px;
    height: 37px;
    font-size: 17px;
  }
}
@media (max-width: 480px) {
  .avatar-preview-2626 {
    min-height: 380px;
  }
  .frost-avatar-2626 {
    width: 245px;
    height: 245px;
  }
  .frost-core-2626 {
    width: 78px;
    height: 78px;
  }
  .frost-core-crystal-2626 {
    width: 53px;
    height: 53px;
  }
  .frost-core-face-2626 {
    width: 31px;
    height: 31px;
    font-size: 14px;
  }
  .frost-crystal-1-2626 {
    width: 29px;
    height: 55px;
  }
  .frost-crystal-2-2626 {
    width: 23px;
    height: 47px;
  }
  .frost-crystal-3-2626 {
    width: 32px;
    height: 62px;
  }
  .frost-crystal-4-2626 {
    width: 24px;
    height: 48px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .frost-avatar-2626 *,
  .frost-avatar-2626::before,
  .frost-avatar-2626::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
  `,
  },
  {
    id: 2627,
    name: "Legendary Solar Phoenix Avatar",
    preview: (
      <div className="avatar-preview-2627">
        <div className="phoenix-avatar-2627">
          <div className="phoenix-bg-2627"></div>
          <div className="phoenix-stars-2627"></div>
          <div className="phoenix-solar-flare phoenix-solar-flare-1-2627"></div>
          <div className="phoenix-solar-flare phoenix-solar-flare-2-2627"></div>
          <div className="phoenix-solar-flare phoenix-solar-flare-3-2627"></div>
          <div className="phoenix-solar-flare phoenix-solar-flare-4-2627"></div>
          <div className="phoenix-aura-2627"></div>
          <div className="phoenix-ring phoenix-ring-1-2627"></div>
          <div className="phoenix-ring phoenix-ring-2-2627"></div>
          <div className="phoenix-ring phoenix-ring-3-2627"></div>
          <div className="phoenix-ring phoenix-ring-4-2627"></div>
          <div className="phoenix-wing phoenix-wing-left-2627">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="phoenix-wing phoenix-wing-right-2627">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="phoenix-feather phoenix-feather-1-2627"></div>
          <div className="phoenix-feather phoenix-feather-2-2627"></div>
          <div className="phoenix-feather phoenix-feather-3-2627"></div>
          <div className="phoenix-feather phoenix-feather-4-2627"></div>
          <div className="phoenix-feather phoenix-feather-5-2627"></div>
          <div className="phoenix-feather phoenix-feather-6-2627"></div>
          <div className="phoenix-feather phoenix-feather-7-2627"></div>
          <div className="phoenix-feather phoenix-feather-8-2627"></div>
          <div className="phoenix-ember phoenix-ember-1-2627"></div>
          <div className="phoenix-ember phoenix-ember-2-2627"></div>
          <div className="phoenix-ember phoenix-ember-3-2627"></div>
          <div className="phoenix-ember phoenix-ember-4-2627"></div>
          <div className="phoenix-ember phoenix-ember-5-2627"></div>
          <div className="phoenix-ember phoenix-ember-6-2627"></div>
          <div className="phoenix-ember phoenix-ember-7-2627"></div>
          <div className="phoenix-ember phoenix-ember-8-2627"></div>
          <div className="phoenix-ember phoenix-ember-9-2627"></div>
          <div className="phoenix-ember phoenix-ember-10-2627"></div>
          <div className="phoenix-flame phoenix-flame-1-2627"></div>
          <div className="phoenix-flame phoenix-flame-2-2627"></div>
          <div className="phoenix-flame phoenix-flame-3-2627"></div>
          <div className="phoenix-flame phoenix-flame-4-2627"></div>
          <div className="phoenix-flame phoenix-flame-5-2627"></div>
          <div className="phoenix-flame phoenix-flame-6-2627"></div>
          <div className="phoenix-flame phoenix-flame-7-2627"></div>
          <div className="phoenix-flame phoenix-flame-8-2627"></div>
          <div className="phoenix-core-2627">
            <div className="phoenix-core-halo-2627"></div>
            <div className="phoenix-core-shell-2627"></div>
            <div className="phoenix-core-inner-2627">
              <div className="phoenix-core-icon-2627">
                <i className="ri-fire-fill"></i>
              </div>
            </div>
            <div className="phoenix-core-ray phoenix-core-ray-1-2627"></div>
            <div className="phoenix-core-ray phoenix-core-ray-2-2627"></div>
            <div className="phoenix-core-ray phoenix-core-ray-3-2627"></div>
            <div className="phoenix-core-ray phoenix-core-ray-4-2627"></div>
            <div className="phoenix-core-ray phoenix-core-ray-5-2627"></div>
            <div className="phoenix-core-ray phoenix-core-ray-6-2627"></div>
          </div>
          <div className="phoenix-eye phoenix-eye-left-2627"></div>
          <div className="phoenix-eye phoenix-eye-right-2627"></div>
          <div className="phoenix-beak-2627"></div>
          <div className="phoenix-halo-2627"></div>
          <div className="phoenix-symbol-2627">
            <i className="ri-sun-line"></i>
          </div>
          <div className="phoenix-energy phoenix-energy-1-2627"></div>
          <div className="phoenix-energy phoenix-energy-2-2627"></div>
          <div className="phoenix-energy phoenix-energy-3-2627"></div>
          <div className="phoenix-energy phoenix-energy-4-2627"></div>
          <div className="phoenix-energy phoenix-energy-5-2627"></div>
          <div className="phoenix-corner phoenix-corner-tl-2627"></div>
          <div className="phoenix-corner phoenix-corner-tr-2627"></div>
          <div className="phoenix-corner phoenix-corner-bl-2627"></div>
          <div className="phoenix-corner phoenix-corner-br-2627"></div>
          <div className="phoenix-status-2627">
            <span></span>
            <strong>SOLAR ASCENSION</strong>
          </div>
        </div>
      </div>
    ),
    html: `
<div class="phoenix-avatar-2627">
  <div class="phoenix-bg-2627"></div>
  <div class="phoenix-stars-2627"></div>
  <div class="phoenix-solar-flare phoenix-solar-flare-1-2627"></div>
  <div class="phoenix-solar-flare phoenix-solar-flare-2-2627"></div>
  <div class="phoenix-solar-flare phoenix-solar-flare-3-2627"></div>
  <div class="phoenix-solar-flare phoenix-solar-flare-4-2627"></div>
  <div class="phoenix-aura-2627"></div>
  <div class="phoenix-ring phoenix-ring-1-2627"></div>
  <div class="phoenix-ring phoenix-ring-2-2627"></div>
  <div class="phoenix-ring phoenix-ring-3-2627"></div>
  <div class="phoenix-ring phoenix-ring-4-2627"></div>
  <div class="phoenix-wing phoenix-wing-left-2627">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="phoenix-wing phoenix-wing-right-2627">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="phoenix-feather phoenix-feather-1-2627"></div>
  <div class="phoenix-feather phoenix-feather-2-2627"></div>
  <div class="phoenix-feather phoenix-feather-3-2627"></div>
  <div class="phoenix-feather phoenix-feather-4-2627"></div>
  <div class="phoenix-feather phoenix-feather-5-2627"></div>
  <div class="phoenix-feather phoenix-feather-6-2627"></div>
  <div class="phoenix-feather phoenix-feather-7-2627"></div>
  <div class="phoenix-feather phoenix-feather-8-2627"></div>
  <div class="phoenix-ember phoenix-ember-1-2627"></div>
  <div class="phoenix-ember phoenix-ember-2-2627"></div>
  <div class="phoenix-ember phoenix-ember-3-2627"></div>
  <div class="phoenix-ember phoenix-ember-4-2627"></div>
  <div class="phoenix-ember phoenix-ember-5-2627"></div>
  <div class="phoenix-ember phoenix-ember-6-2627"></div>
  <div class="phoenix-ember phoenix-ember-7-2627"></div>
  <div class="phoenix-ember phoenix-ember-8-2627"></div>
  <div class="phoenix-ember phoenix-ember-9-2627"></div>
  <div class="phoenix-ember phoenix-ember-10-2627"></div>
  <div class="phoenix-flame phoenix-flame-1-2627"></div>
  <div class="phoenix-flame phoenix-flame-2-2627"></div>
  <div class="phoenix-flame phoenix-flame-3-2627"></div>
  <div class="phoenix-flame phoenix-flame-4-2627"></div>
  <div class="phoenix-flame phoenix-flame-5-2627"></div>
  <div class="phoenix-flame phoenix-flame-6-2627"></div>
  <div class="phoenix-flame phoenix-flame-7-2627"></div>
  <div class="phoenix-flame phoenix-flame-8-2627"></div>
  <div class="phoenix-core-2627">
    <div class="phoenix-core-halo-2627"></div>
    <div class="phoenix-core-shell-2627"></div>
    <div class="phoenix-core-inner-2627">
      <div class="phoenix-core-icon-2627">
        <i class="ri-fire-fill"></i>
      </div>
    </div>
    <div class="phoenix-core-ray phoenix-core-ray-1-2627"></div>
    <div class="phoenix-core-ray phoenix-core-ray-2-2627"></div>
    <div class="phoenix-core-ray phoenix-core-ray-3-2627"></div>
    <div class="phoenix-core-ray phoenix-core-ray-4-2627"></div>
    <div class="phoenix-core-ray phoenix-core-ray-5-2627"></div>
    <div class="phoenix-core-ray phoenix-core-ray-6-2627"></div>
  </div>
  <div class="phoenix-eye phoenix-eye-left-2627"></div>
  <div class="phoenix-eye phoenix-eye-right-2627"></div>
  <div class="phoenix-beak-2627"></div>
  <div class="phoenix-halo-2627"></div>
  <div class="phoenix-symbol-2627">
    <i class="ri-sun-line"></i>
  </div>
  <div class="phoenix-energy phoenix-energy-1-2627"></div>
  <div class="phoenix-energy phoenix-energy-2-2627"></div>
  <div class="phoenix-energy phoenix-energy-3-2627"></div>
  <div class="phoenix-energy phoenix-energy-4-2627"></div>
  <div class="phoenix-energy phoenix-energy-5-2627"></div>
  <div class="phoenix-corner phoenix-corner-tl-2627"></div>
  <div class="phoenix-corner phoenix-corner-tr-2627"></div>
  <div class="phoenix-corner phoenix-corner-bl-2627"></div>
  <div class="phoenix-corner phoenix-corner-br-2627"></div>
  <div class="phoenix-status-2627">
    <span></span>
    <strong>SOLAR ASCENSION</strong>
  </div>
</div>
  `,
    css: `
.avatar-preview-2627 {
  width: 100%;
  min-height: 560px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 50%,rgba(251,191,36,.08),transparent 18%),
    radial-gradient(circle at 24% 27%,rgba(249,115,22,.08),transparent 25%),
    radial-gradient(circle at 78% 73%,rgba(234,88,12,.07),transparent 28%),
    #080b12;
}
.avatar-preview-2627::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(251,191,36,.018) 1px,transparent 1px),
    linear-gradient(90deg,rgba(251,191,36,.018) 1px,transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at center,black 5%,transparent 82%);
}
.avatar-preview-2627::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  border: 1px solid rgba(251,191,36,.035);
  border-radius: 50%;
  box-shadow:
    0 0 90px rgba(249,115,22,.025),
    inset 0 0 90px rgba(251,191,36,.018);
}
.phoenix-avatar-2627 {
  width: 350px;
  height: 350px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 52%,rgba(251,191,36,.09),transparent 22%),
    radial-gradient(circle at 50% 50%,rgba(154,52,18,.13),transparent 46%),
    #080b12;
  border: 1px solid rgba(251,191,36,.2);
  box-shadow:
    0 0 45px rgba(249,115,22,.11),
    0 0 100px rgba(251,191,36,.06),
    inset 0 0 75px rgba(120,53,15,.22);
  isolation: isolate;
}
.phoenix-bg-2627 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 30%,rgba(254,240,138,.08),transparent 17%),
    radial-gradient(circle at 30% 58%,rgba(251,146,60,.08),transparent 24%),
    radial-gradient(circle at 73% 60%,rgba(239,68,68,.06),transparent 25%);
  animation: phoenixBg2627 6s ease-in-out infinite alternate;
  z-index: 0;
}
.phoenix-stars-2627 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-image:
    radial-gradient(circle at 9% 15%,rgba(255,251,235,.9) 0 1px,transparent 1.5px),
    radial-gradient(circle at 17% 68%,rgba(251,191,36,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 29% 22%,rgba(255,255,255,.75) 0 1px,transparent 1.5px),
    radial-gradient(circle at 41% 84%,rgba(253,186,116,.65) 0 1px,transparent 1.5px),
    radial-gradient(circle at 57% 12%,rgba(255,255,255,.8) 0 1px,transparent 1.5px),
    radial-gradient(circle at 68% 79%,rgba(251,191,36,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 84% 24%,rgba(255,237,213,.8) 0 1px,transparent 1.5px),
    radial-gradient(circle at 93% 65%,rgba(251,146,60,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 13% 46%,rgba(255,255,255,.55) 0 1px,transparent 1.5px),
    radial-gradient(circle at 77% 47%,rgba(254,215,170,.6) 0 1px,transparent 1.5px);
  opacity: .45;
  animation: phoenixStars2627 7s ease-in-out infinite alternate;
  z-index: 1;
}
.phoenix-solar-flare {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(251,191,36,.4),
    rgba(255,237,213,.9),
    rgba(249,115,22,.4),
    transparent
  );
  filter: blur(2px);
  z-index: 3;
  pointer-events: none;
}
.phoenix-solar-flare-1-2627 {
  width: 180px;
  height: 3px;
  left: -28px;
  top: 31%;
  transform: rotate(21deg);
  animation: phoenixSolarFlare1 4.8s ease-in-out infinite;
}
.phoenix-solar-flare-2-2627 {
  width: 145px;
  height: 2px;
  right: -17px;
  top: 42%;
  transform: rotate(-27deg);
  animation: phoenixSolarFlare2 5.4s ease-in-out infinite;
}
.phoenix-solar-flare-3-2627 {
  width: 155px;
  height: 3px;
  left: -26px;
  bottom: 29%;
  transform: rotate(-23deg);
  animation: phoenixSolarFlare3 5.1s ease-in-out infinite;
}
.phoenix-solar-flare-4-2627 {
  width: 130px;
  height: 2px;
  right: -15px;
  bottom: 34%;
  transform: rotate(25deg);
  animation: phoenixSolarFlare4 4.4s ease-in-out infinite;
}
.phoenix-aura-2627 {
  position: absolute;
  width: 255px;
  height: 255px;
  left: 50%;
  top: 49%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(255,237,213,.1),rgba(251,191,36,.08) 28%,rgba(249,115,22,.04) 45%,transparent 72%);
  filter: blur(9px);
  animation: phoenixAura2627 3.8s ease-in-out infinite;
  z-index: 2;
}
.phoenix-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 3;
}
.phoenix-ring-1-2627 {
  width: 295px;
  height: 295px;
  border: 1px solid rgba(251,191,36,.08);
  animation: phoenixRing1 14s linear infinite;
}
.phoenix-ring-2-2627 {
  width: 254px;
  height: 254px;
  border: 1px dashed rgba(249,115,22,.12);
  animation: phoenixRing2 10s linear infinite reverse;
}
.phoenix-ring-3-2627 {
  width: 214px;
  height: 214px;
  border: 1px solid rgba(254,240,138,.12);
  animation: phoenixRing3 7s linear infinite;
}
.phoenix-ring-4-2627 {
  width: 178px;
  height: 178px;
  border: 1px dashed rgba(239,68,68,.12);
  animation: phoenixRing4 6s linear infinite reverse;
}
.phoenix-wing {
  position: absolute;
  top: 50%;
  width: 154px;
  height: 170px;
  transform-origin: center;
  z-index: 5;
  pointer-events: none;
}
.phoenix-wing-left-2627 {
  left: -16px;
  transform: translateY(-50%) rotate(-12deg);
  animation: phoenixWingLeft2627 4s ease-in-out infinite;
}
.phoenix-wing-right-2627 {
  right: -16px;
  transform: translateY(-50%) rotate(12deg);
  animation: phoenixWingRight2627 4s ease-in-out infinite;
}
.phoenix-wing span {
  position: absolute;
  width: 88px;
  height: 20px;
  border-radius: 100% 0 100% 0;
  background:
    linear-gradient(
      90deg,
      rgba(127,29,29,.12),
      rgba(249,115,22,.35),
      rgba(251,191,36,.8),
      rgba(255,237,213,.85)
    );
  filter:
    drop-shadow(0 0 5px rgba(251,191,36,.4))
    drop-shadow(0 0 12px rgba(249,115,22,.22));
  transform-origin: left center;
}
.phoenix-wing-right-2627 span {
  transform-origin: right center;
}
.phoenix-wing span:nth-child(1) {
  top: 13px;
}
.phoenix-wing span:nth-child(2) {
  top: 33px;
  left: 7px;
  width: 99px;
  opacity: .9;
}
.phoenix-wing span:nth-child(3) {
  top: 53px;
  left: 14px;
  width: 108px;
  opacity: .78;
}
.phoenix-wing span:nth-child(4) {
  top: 73px;
  left: 22px;
  width: 114px;
  opacity: .64;
}
.phoenix-wing span:nth-child(5) {
  top: 93px;
  left: 32px;
  width: 107px;
  opacity: .53;
}
.phoenix-wing span:nth-child(6) {
  top: 112px;
  left: 44px;
  width: 92px;
  opacity: .4;
}
.phoenix-wing span:nth-child(7) {
  top: 130px;
  left: 57px;
  width: 72px;
  opacity: .28;
}
.phoenix-wing-left-2627 span:nth-child(1) {
  transform: rotate(-20deg);
}
.phoenix-wing-left-2627 span:nth-child(2) {
  transform: rotate(-17deg);
}
.phoenix-wing-left-2627 span:nth-child(3) {
  transform: rotate(-13deg);
}
.phoenix-wing-left-2627 span:nth-child(4) {
  transform: rotate(-9deg);
}
.phoenix-wing-left-2627 span:nth-child(5) {
  transform: rotate(-5deg);
}
.phoenix-wing-left-2627 span:nth-child(6) {
  transform: rotate(0deg);
}
.phoenix-wing-left-2627 span:nth-child(7) {
  transform: rotate(5deg);
}
.phoenix-wing-right-2627 span:nth-child(1) {
  transform: scaleX(-1) rotate(-20deg);
}
.phoenix-wing-right-2627 span:nth-child(2) {
  transform: scaleX(-1) rotate(-17deg);
}
.phoenix-wing-right-2627 span:nth-child(3) {
  transform: scaleX(-1) rotate(-13deg);
}
.phoenix-wing-right-2627 span:nth-child(4) {
  transform: scaleX(-1) rotate(-9deg);
}
.phoenix-wing-right-2627 span:nth-child(5) {
  transform: scaleX(-1) rotate(-5deg);
}
.phoenix-wing-right-2627 span:nth-child(6) {
  transform: scaleX(-1) rotate(0deg);
}
.phoenix-wing-right-2627 span:nth-child(7) {
  transform: scaleX(-1) rotate(5deg);
}
.phoenix-feather {
  position: absolute;
  z-index: 6;
  width: 8px;
  height: 28px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(
    180deg,
    #fff7ed,
    #fbbf24 34%,
    #f97316 76%,
    rgba(127,29,29,.2)
  );
  box-shadow:
    0 0 5px rgba(251,191,36,.6),
    0 0 13px rgba(249,115,22,.35);
  filter: blur(.15px);
}
.phoenix-feather-1-2627 {
  left: 26%;
  top: 24%;
  transform: rotate(-32deg);
  animation: phoenixFeather1 3.8s ease-in-out infinite;
}
.phoenix-feather-2-2627 {
  left: 34%;
  top: 17%;
  transform: rotate(-16deg);
  animation: phoenixFeather2 4.4s ease-in-out infinite;
}
.phoenix-feather-3-2627 {
  right: 26%;
  top: 24%;
  transform: rotate(32deg);
  animation: phoenixFeather3 4.1s ease-in-out infinite;
}
.phoenix-feather-4-2627 {
  right: 34%;
  top: 17%;
  transform: rotate(16deg);
  animation: phoenixFeather4 4.8s ease-in-out infinite;
}
.phoenix-feather-5-2627 {
  left: 23%;
  bottom: 30%;
  transform: rotate(-56deg);
  animation: phoenixFeather5 4.7s ease-in-out infinite;
}
.phoenix-feather-6-2627 {
  right: 23%;
  bottom: 30%;
  transform: rotate(56deg);
  animation: phoenixFeather6 4.5s ease-in-out infinite;
}
.phoenix-feather-7-2627 {
  left: 35%;
  bottom: 19%;
  transform: rotate(-21deg);
  animation: phoenixFeather7 3.9s ease-in-out infinite;
}
.phoenix-feather-8-2627 {
  right: 35%;
  bottom: 19%;
  transform: rotate(21deg);
  animation: phoenixFeather8 4.2s ease-in-out infinite;
}
.phoenix-ember {
  position: absolute;
  z-index: 9;
  border-radius: 50%;
  background: #fde68a;
  box-shadow:
    0 0 5px #fde68a,
    0 0 13px #f97316,
    0 0 25px rgba(249,115,22,.7);
}
.phoenix-ember-1-2627 {
  width: 4px;
  height: 4px;
  left: 18%;
  top: 30%;
  animation: phoenixEmber1 4.8s ease-in-out infinite;
}
.phoenix-ember-2-2627 {
  width: 3px;
  height: 3px;
  right: 15%;
  top: 27%;
  animation: phoenixEmber2 5.2s ease-in-out infinite;
}
.phoenix-ember-3-2627 {
  width: 5px;
  height: 5px;
  left: 13%;
  bottom: 32%;
  animation: phoenixEmber3 4.2s ease-in-out infinite;
}
.phoenix-ember-4-2627 {
  width: 3px;
  height: 3px;
  right: 12%;
  bottom: 27%;
  animation: phoenixEmber4 5.5s ease-in-out infinite;
}
.phoenix-ember-5-2627 {
  width: 2px;
  height: 2px;
  left: 32%;
  top: 10%;
  animation: phoenixEmber5 3.7s ease-in-out infinite;
}
.phoenix-ember-6-2627 {
  width: 3px;
  height: 3px;
  right: 29%;
  top: 14%;
  animation: phoenixEmber6 4.6s ease-in-out infinite;
}
.phoenix-ember-7-2627 {
  width: 3px;
  height: 3px;
  left: 29%;
  bottom: 11%;
  animation: phoenixEmber7 5.1s ease-in-out infinite;
}
.phoenix-ember-8-2627 {
  width: 4px;
  height: 4px;
  right: 32%;
  bottom: 13%;
  animation: phoenixEmber8 4.4s ease-in-out infinite;
}
.phoenix-ember-9-2627 {
  width: 2px;
  height: 2px;
  left: 9%;
  top: 48%;
  animation: phoenixEmber9 3.9s ease-in-out infinite;
}
.phoenix-ember-10-2627 {
  width: 2px;
  height: 2px;
  right: 8%;
  top: 51%;
  animation: phoenixEmber10 5.3s ease-in-out infinite;
}
.phoenix-flame {
  position: absolute;
  z-index: 8;
  width: 28px;
  height: 52px;
  border-radius: 55% 45% 60% 40%;
  background:
    linear-gradient(
      180deg,
      #fff7ed 0%,
      #fef08a 22%,
      #fbbf24 45%,
      #f97316 72%,
      rgba(127,29,29,.16) 100%
    );
  clip-path: polygon(
    50% 0%,
    72% 22%,
    66% 40%,
    100% 54%,
    69% 55%,
    78% 81%,
    50% 100%,
    23% 77%,
    31% 57%,
    0% 62%,
    34% 37%,
    30% 17%
  );
  filter:
    drop-shadow(0 0 5px rgba(255,237,213,.7))
    drop-shadow(0 0 15px rgba(249,115,22,.45));
}
.phoenix-flame-1-2627 {
  left: 18%;
  top: 38%;
  transform: rotate(-27deg) scale(.85);
  animation: phoenixFlame1 3.5s ease-in-out infinite;
}
.phoenix-flame-2-2627 {
  right: 18%;
  top: 39%;
  transform: rotate(27deg) scale(.85);
  animation: phoenixFlame2 3.8s ease-in-out infinite;
}
.phoenix-flame-3-2627 {
  left: 28%;
  top: 14%;
  transform: rotate(-13deg) scale(.62);
  animation: phoenixFlame3 4.2s ease-in-out infinite;
}
.phoenix-flame-4-2627 {
  right: 28%;
  top: 14%;
  transform: rotate(13deg) scale(.62);
  animation: phoenixFlame4 4.5s ease-in-out infinite;
}
.phoenix-flame-5-2627 {
  left: 10%;
  bottom: 28%;
  transform: rotate(-53deg) scale(.68);
  animation: phoenixFlame5 4s ease-in-out infinite;
}
.phoenix-flame-6-2627 {
  right: 10%;
  bottom: 28%;
  transform: rotate(53deg) scale(.68);
  animation: phoenixFlame6 4.4s ease-in-out infinite;
}
.phoenix-flame-7-2627 {
  left: 38%;
  bottom: 9%;
  transform: rotate(-4deg) scale(.55);
  animation: phoenixFlame7 3.7s ease-in-out infinite;
}
.phoenix-flame-8-2627 {
  right: 38%;
  bottom: 9%;
  transform: rotate(4deg) scale(.55);
  animation: phoenixFlame8 4.1s ease-in-out infinite;
}
.phoenix-core-2627 {
  width: 126px;
  height: 126px;
  position: absolute;
  left: 50%;
  top: 51%;
  transform: translate(-50%,-50%);
  z-index: 13;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phoenix-core-halo-2627 {
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(255,237,213,.08),rgba(251,191,36,.08) 34%,transparent 69%);
  filter: blur(4px);
  animation: phoenixCoreHalo2627 2.7s ease-in-out infinite;
}
.phoenix-core-shell-2627 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 35% 27%,
      #fff7ed 0%,
      #fef3c7 13%,
      #fbbf24 30%,
      #f97316 49%,
      #c2410c 66%,
      rgba(127,29,29,.3) 79%,
      transparent 82%
    );
  box-shadow:
    0 0 24px rgba(251,191,36,.45),
    0 0 55px rgba(249,115,22,.28),
    inset 0 0 20px rgba(255,237,213,.35);
  animation: phoenixCoreShell2627 3.1s ease-in-out infinite;
}
.phoenix-core-inner-2627 {
  width: 82px;
  height: 82px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    radial-gradient(circle at 40% 30%,rgba(255,255,255,.8),rgba(251,191,36,.25) 25%,rgba(154,52,18,.6) 60%,#431407 100%);
  border: 1px solid rgba(255,237,213,.42);
  box-shadow:
    inset 0 0 25px rgba(255,247,237,.18),
    0 0 25px rgba(249,115,22,.35);
  animation: phoenixCoreInner2627 2.4s ease-in-out infinite;
}
.phoenix-core-icon-2627 {
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    radial-gradient(circle,rgba(120,53,15,.85),rgba(67,20,7,.98));
  border: 1px solid rgba(254,240,138,.35);
  color: #fef3c7;
  font-size: 23px;
  text-shadow:
    0 0 8px rgba(255,247,237,.95),
    0 0 22px rgba(251,191,36,.8),
    0 0 36px rgba(249,115,22,.45);
  box-shadow:
    0 0 18px rgba(251,191,36,.35),
    inset 0 0 15px rgba(249,115,22,.22);
  animation: phoenixCoreIcon2627 2s ease-in-out infinite;
}
.phoenix-core-ray {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 154px;
  height: 1px;
  transform-origin: center;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,237,213,.16),
    rgba(251,191,36,.5),
    rgba(255,237,213,.16),
    transparent
  );
  z-index: 2;
  opacity: .6;
}
.phoenix-core-ray-1-2627 {
  transform: translate(-50%,-50%) rotate(0deg);
  animation: phoenixRay1 3.3s ease-in-out infinite;
}
.phoenix-core-ray-2-2627 {
  transform: translate(-50%,-50%) rotate(30deg);
  animation: phoenixRay2 3.9s ease-in-out infinite;
}
.phoenix-core-ray-3-2627 {
  transform: translate(-50%,-50%) rotate(60deg);
  animation: phoenixRay3 4.1s ease-in-out infinite;
}
.phoenix-core-ray-4-2627 {
  transform: translate(-50%,-50%) rotate(90deg);
  animation: phoenixRay4 3.6s ease-in-out infinite;
}
.phoenix-core-ray-5-2627 {
  transform: translate(-50%,-50%) rotate(120deg);
  animation: phoenixRay5 4.3s ease-in-out infinite;
}
.phoenix-core-ray-6-2627 {
  transform: translate(-50%,-50%) rotate(150deg);
  animation: phoenixRay6 3.8s ease-in-out infinite;
}
.phoenix-eye {
  position: absolute;
  width: 17px;
  height: 9px;
  border-radius: 70% 30% 70% 30%;
  background: linear-gradient(90deg,#fff7ed,#fef08a,#f97316);
  box-shadow:
    0 0 6px rgba(255,247,237,.9),
    0 0 15px rgba(251,191,36,.7);
  z-index: 14;
}
.phoenix-eye-left-2627 {
  left: calc(50% - 38px);
  top: calc(51% - 13px);
  transform: rotate(-9deg);
  animation: phoenixEyeLeft2627 2.8s ease-in-out infinite;
}
.phoenix-eye-right-2627 {
  right: calc(50% - 38px);
  top: calc(51% - 13px);
  transform: scaleX(-1) rotate(-9deg);
  animation: phoenixEyeRight2627 2.8s ease-in-out infinite;
}
.phoenix-beak-2627 {
  position: absolute;
  left: 50%;
  top: calc(51% + 2px);
  transform: translateX(-50%);
  width: 14px;
  height: 18px;
  background: linear-gradient(180deg,#fff7ed,#fbbf24,#ea580c);
  clip-path: polygon(50% 100%,0% 0%,100% 0%);
  filter: drop-shadow(0 0 5px rgba(251,191,36,.6));
  z-index: 14;
  animation: phoenixBeak2627 2.4s ease-in-out infinite;
}
.phoenix-halo-2627 {
  position: absolute;
  width: 170px;
  height: 95px;
  left: 50%;
  top: 51%;
  transform: translate(-50%,-50%) rotate(-8deg);
  border-radius: 50%;
  border: 1px solid rgba(251,191,36,.16);
  box-shadow:
    0 0 20px rgba(251,191,36,.08),
    inset 0 0 20px rgba(249,115,22,.04);
  z-index: 10;
  animation: phoenixHalo2627 5.5s linear infinite;
}
.phoenix-symbol-2627 {
  position: absolute;
  left: 50%;
  top: 12%;
  transform: translateX(-50%);
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: rgba(67,20,7,.55);
  border: 1px solid rgba(251,191,36,.16);
  color: #fef08a;
  font-size: 13px;
  box-shadow:
    inset 0 0 15px rgba(251,191,36,.05),
    0 0 18px rgba(249,115,22,.08);
  z-index: 15;
  animation: phoenixSymbol2627 3s ease-in-out infinite;
}
.phoenix-energy {
  position: absolute;
  z-index: 11;
  border-radius: 50%;
  background: #fff7ed;
  box-shadow:
    0 0 6px #fff7ed,
    0 0 14px #fbbf24,
    0 0 27px rgba(249,115,22,.75);
}
.phoenix-energy-1-2627 {
  width: 4px;
  height: 4px;
  left: 22%;
  top: 21%;
  animation: phoenixEnergy1 4.4s ease-in-out infinite;
}
.phoenix-energy-2-2627 {
  width: 3px;
  height: 3px;
  right: 19%;
  top: 25%;
  animation: phoenixEnergy2 4.8s ease-in-out infinite;
}
.phoenix-energy-3-2627 {
  width: 4px;
  height: 4px;
  left: 19%;
  bottom: 19%;
  animation: phoenixEnergy3 5.2s ease-in-out infinite;
}
.phoenix-energy-4-2627 {
  width: 3px;
  height: 3px;
  right: 20%;
  bottom: 21%;
  animation: phoenixEnergy4 4.7s ease-in-out infinite;
}
.phoenix-energy-5-2627 {
  width: 2px;
  height: 2px;
  left: 48%;
  top: 8%;
  animation: phoenixEnergy5 3.9s ease-in-out infinite;
}
.phoenix-corner {
  position: absolute;
  width: 21px;
  height: 21px;
  z-index: 18;
  border-color: rgba(251,191,36,.22);
}
.phoenix-corner-tl-2627 {
  top: 13px;
  left: 13px;
  border-left: 1px solid;
  border-top: 1px solid;
}
.phoenix-corner-tr-2627 {
  top: 13px;
  right: 13px;
  border-right: 1px solid;
  border-top: 1px solid;
}
.phoenix-corner-bl-2627 {
  bottom: 13px;
  left: 13px;
  border-left: 1px solid;
  border-bottom: 1px solid;
}
.phoenix-corner-br-2627 {
  right: 13px;
  bottom: 13px;
  border-right: 1px solid;
  border-bottom: 1px solid;
}
.phoenix-status-2627 {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(67,20,7,.62);
  border: 1px solid rgba(251,191,36,.14);
  backdrop-filter: blur(8px);
  z-index: 19;
}
.phoenix-status-2627 span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fef08a;
  box-shadow:
    0 0 6px #fef08a,
    0 0 14px #f97316;
  animation: phoenixStatus2627 1.6s ease-in-out infinite;
}
.phoenix-status-2627 strong {
  color: #fef3c7;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .18em;
}
@keyframes phoenixBg2627 {
  from {
    transform: scale(1);
    opacity: .55;
  }
  to {
    transform: scale(1.08);
    opacity: 1;
  }
}
@keyframes phoenixStars2627 {
  from {
    transform: scale(1);
    opacity: .3;
  }
  to {
    transform: scale(1.04);
    opacity: .62;
  }
}
@keyframes phoenixSolarFlare1 {
  0%,
  100% {
    transform: rotate(21deg) translateX(0) scaleX(.55);
    opacity: .1;
  }
  50% {
    transform: rotate(21deg) translateX(30px) scaleX(1.1);
    opacity: .7;
  }
}
@keyframes phoenixSolarFlare2 {
  0%,
  100% {
    transform: rotate(-27deg) translateX(0) scaleX(.5);
    opacity: .1;
  }
  50% {
    transform: rotate(-27deg) translateX(-25px) scaleX(1.05);
    opacity: .7;
  }
}
@keyframes phoenixSolarFlare3 {
  0%,
  100% {
    transform: rotate(-23deg) translateX(0) scaleX(.55);
    opacity: .08;
  }
  50% {
    transform: rotate(-23deg) translateX(28px) scaleX(1.08);
    opacity: .6;
  }
}
@keyframes phoenixSolarFlare4 {
  0%,
  100% {
    transform: rotate(25deg) translateX(0) scaleX(.5);
    opacity: .1;
  }
  50% {
    transform: rotate(25deg) translateX(-24px) scaleX(1.08);
    opacity: .65;
  }
}
@keyframes phoenixAura2627 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.88);
    opacity: .42;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.15);
    opacity: 1;
  }
}
@keyframes phoenixRing1 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes phoenixRing2 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(.98);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(1.04);
  }
}
@keyframes phoenixRing3 {
  from {
    transform: translate(-50%,-50%) rotate(360deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(0deg);
  }
}
@keyframes phoenixRing4 {
  from {
    transform: translate(-50%,-50%) rotate(0deg) scale(1);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg) scale(.94);
  }
}
@keyframes phoenixWingLeft2627 {
  0%,
  100% {
    transform: translateY(-50%) rotate(-12deg) translateX(0) scale(.94);
  }
  50% {
    transform: translateY(-50%) rotate(-15deg) translateX(-7px) scale(1.04);
  }
}
@keyframes phoenixWingRight2627 {
  0%,
  100% {
    transform: translateY(-50%) rotate(12deg) translateX(0) scale(.94);
  }
  50% {
    transform: translateY(-50%) rotate(15deg) translateX(7px) scale(1.04);
  }
}
@keyframes phoenixFeather1 {
  0%,
  100% {
    transform: rotate(-32deg) translate(0,0) scale(.8);
    opacity: .35;
  }
  50% {
    transform: rotate(-32deg) translate(8px,-12px) scale(1.1);
    opacity: 1;
  }
}
@keyframes phoenixFeather2 {
  0%,
  100% {
    transform: rotate(-16deg) translate(0,0) scale(.75);
    opacity: .3;
  }
  50% {
    transform: rotate(-16deg) translate(10px,-15px) scale(1.08);
    opacity: .95;
  }
}
@keyframes phoenixFeather3 {
  0%,
  100% {
    transform: rotate(32deg) translate(0,0) scale(.8);
    opacity: .35;
  }
  50% {
    transform: rotate(32deg) translate(-8px,-12px) scale(1.1);
    opacity: 1;
  }
}
@keyframes phoenixFeather4 {
  0%,
  100% {
    transform: rotate(16deg) translate(0,0) scale(.75);
    opacity: .3;
  }
  50% {
    transform: rotate(16deg) translate(-10px,-15px) scale(1.08);
    opacity: .95;
  }
}
@keyframes phoenixFeather5 {
  0%,
  100% {
    transform: rotate(-56deg) translate(0,0) scale(.7);
    opacity: .25;
  }
  50% {
    transform: rotate(-56deg) translate(9px,10px) scale(1.08);
    opacity: .9;
  }
}
@keyframes phoenixFeather6 {
  0%,
  100% {
    transform: rotate(56deg) translate(0,0) scale(.7);
    opacity: .25;
  }
  50% {
    transform: rotate(56deg) translate(-9px,10px) scale(1.08);
    opacity: .9;
  }
}
@keyframes phoenixFeather7 {
  0%,
  100% {
    transform: rotate(-21deg) translate(0,0) scale(.75);
    opacity: .25;
  }
  50% {
    transform: rotate(-21deg) translate(8px,9px) scale(1.04);
    opacity: .88;
  }
}
@keyframes phoenixFeather8 {
  0%,
  100% {
    transform: rotate(21deg) translate(0,0) scale(.75);
    opacity: .25;
  }
  50% {
    transform: rotate(21deg) translate(-8px,9px) scale(1.04);
    opacity: .88;
  }
}
@keyframes phoenixEmber1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .18;
  }
  50% {
    transform: translate(22px,-20px) scale(1.25);
    opacity: 1;
  }
}
@keyframes phoenixEmber2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-22px,17px);
    opacity: 1;
  }
}
@keyframes phoenixEmber3 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(23px,-21px) scale(1.3);
    opacity: 1;
  }
}
@keyframes phoenixEmber4 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-18px,-22px);
    opacity: 1;
  }
}
@keyframes phoenixEmber5 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(16px,20px) scale(1.2);
    opacity: 1;
  }
}
@keyframes phoenixEmber6 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(-19px,18px);
    opacity: 1;
  }
}
@keyframes phoenixEmber7 {
  0%,
  100% {
    transform: translate(0,0) scale(.75);
    opacity: .18;
  }
  50% {
    transform: translate(18px,-20px) scale(1.2);
    opacity: 1;
  }
}
@keyframes phoenixEmber8 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .18;
  }
  50% {
    transform: translate(-20px,-19px);
    opacity: 1;
  }
}
@keyframes phoenixEmber9 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .12;
  }
  50% {
    transform: translate(20px,12px);
    opacity: .9;
  }
}
@keyframes phoenixEmber10 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .14;
  }
  50% {
    transform: translate(-20px,13px);
    opacity: .95;
  }
}
@keyframes phoenixFlame1 {
  0%,
  100% {
    transform: rotate(-27deg) scale(.72);
    opacity: .3;
  }
  50% {
    transform: rotate(-31deg) translate(7px,-10px) scale(1);
    opacity: 1;
  }
}
@keyframes phoenixFlame2 {
  0%,
  100% {
    transform: rotate(27deg) scale(.72);
    opacity: .3;
  }
  50% {
    transform: rotate(31deg) translate(-7px,-10px) scale(1);
    opacity: 1;
  }
}
@keyframes phoenixFlame3 {
  0%,
  100% {
    transform: rotate(-13deg) scale(.55);
    opacity: .25;
  }
  50% {
    transform: rotate(-17deg) translate(7px,-9px) scale(.82);
    opacity: .9;
  }
}
@keyframes phoenixFlame4 {
  0%,
  100% {
    transform: rotate(13deg) scale(.55);
    opacity: .25;
  }
  50% {
    transform: rotate(17deg) translate(-7px,-9px) scale(.82);
    opacity: .9;
  }
}
@keyframes phoenixFlame5 {
  0%,
  100% {
    transform: rotate(-53deg) scale(.58);
    opacity: .22;
  }
  50% {
    transform: rotate(-58deg) translate(9px,7px) scale(.84);
    opacity: .85;
  }
}
@keyframes phoenixFlame6 {
  0%,
  100% {
    transform: rotate(53deg) scale(.58);
    opacity: .22;
  }
  50% {
    transform: rotate(58deg) translate(-9px,7px) scale(.84);
    opacity: .85;
  }
}
@keyframes phoenixFlame7 {
  0%,
  100% {
    transform: rotate(-4deg) scale(.48);
    opacity: .22;
  }
  50% {
    transform: rotate(-8deg) translate(5px,10px) scale(.72);
    opacity: .8;
  }
}
@keyframes phoenixFlame8 {
  0%,
  100% {
    transform: rotate(4deg) scale(.48);
    opacity: .22;
  }
  50% {
    transform: rotate(8deg) translate(-5px,10px) scale(.72);
    opacity: .8;
  }
}
@keyframes phoenixCoreHalo2627 {
  0%,
  100% {
    transform: scale(.85);
    opacity: .4;
  }
  50% {
    transform: scale(1.18);
    opacity: 1;
  }
}
@keyframes phoenixCoreShell2627 {
  0%,
  100% {
    transform: scale(.94);
    opacity: .68;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}
@keyframes phoenixCoreInner2627 {
  0%,
  100% {
    transform: rotate(0deg) scale(.95);
  }
  50% {
    transform: rotate(4deg) scale(1.06);
  }
}
@keyframes phoenixCoreIcon2627 {
  0%,
  100% {
    transform: scale(.9);
    opacity: .72;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes phoenixRay1 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(0deg) scaleX(.7);
    opacity: .2;
  }
  50% {
    transform: translate(-50%,-50%) rotate(0deg) scaleX(1.08);
    opacity: .7;
  }
}
@keyframes phoenixRay2 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(30deg) scaleX(.65);
    opacity: .15;
  }
  50% {
    transform: translate(-50%,-50%) rotate(30deg) scaleX(1.05);
    opacity: .65;
  }
}
@keyframes phoenixRay3 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(60deg) scaleX(.72);
    opacity: .18;
  }
  50% {
    transform: translate(-50%,-50%) rotate(60deg) scaleX(1);
    opacity: .62;
  }
}
@keyframes phoenixRay4 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(90deg) scaleX(.66);
    opacity: .17;
  }
  50% {
    transform: translate(-50%,-50%) rotate(90deg) scaleX(1.06);
    opacity: .68;
  }
}
@keyframes phoenixRay5 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(120deg) scaleX(.7);
    opacity: .15;
  }
  50% {
    transform: translate(-50%,-50%) rotate(120deg) scaleX(1);
    opacity: .6;
  }
}
@keyframes phoenixRay6 {
  0%,
  100% {
    transform: translate(-50%,-50%) rotate(150deg) scaleX(.64);
    opacity: .16;
  }
  50% {
    transform: translate(-50%,-50%) rotate(150deg) scaleX(1.04);
    opacity: .65;
  }
}
@keyframes phoenixEyeLeft2627 {
  0%,
  100% {
    transform: rotate(-9deg) scaleY(.8);
    opacity: .6;
  }
  50% {
    transform: rotate(-9deg) scaleY(1.15);
    opacity: 1;
  }
}
@keyframes phoenixEyeRight2627 {
  0%,
  100% {
    transform: scaleX(-1) rotate(-9deg) scaleY(.8);
    opacity: .6;
  }
  50% {
    transform: scaleX(-1) rotate(-9deg) scaleY(1.15);
    opacity: 1;
  }
}
@keyframes phoenixBeak2627 {
  0%,
  100% {
    transform: translateX(-50%) scale(.88);
    opacity: .65;
  }
  50% {
    transform: translateX(-50%) scale(1.08);
    opacity: 1;
  }
}
@keyframes phoenixHalo2627 {
  from {
    transform: translate(-50%,-50%) rotate(-8deg) rotateZ(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-8deg) rotateZ(360deg);
  }
}
@keyframes phoenixSymbol2627 {
  0%,
  100% {
    transform: translateX(-50%) scale(.92);
    box-shadow:
      inset 0 0 15px rgba(251,191,36,.05),
      0 0 18px rgba(249,115,22,.08);
  }
  50% {
    transform: translateX(-50%) scale(1.08);
    box-shadow:
      inset 0 0 18px rgba(251,191,36,.1),
      0 0 28px rgba(249,115,22,.18);
  }
}
@keyframes phoenixEnergy1 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .2;
  }
  50% {
    transform: translate(20px,-17px) scale(1.3);
    opacity: 1;
  }
}
@keyframes phoenixEnergy2 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .2;
  }
  50% {
    transform: translate(-21px,17px);
    opacity: 1;
  }
}
@keyframes phoenixEnergy3 {
  0%,
  100% {
    transform: translate(0,0) scale(.7);
    opacity: .15;
  }
  50% {
    transform: translate(23px,-18px) scale(1.25);
    opacity: 1;
  }
}
@keyframes phoenixEnergy4 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .18;
  }
  50% {
    transform: translate(-20px,-17px);
    opacity: 1;
  }
}
@keyframes phoenixEnergy5 {
  0%,
  100% {
    transform: translate(0,0);
    opacity: .15;
  }
  50% {
    transform: translate(18px,20px);
    opacity: 1;
  }
}
@keyframes phoenixStatus2627 {
  0%,
  100% {
    transform: scale(.75);
    opacity: .5;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@media (max-width: 700px) {
  .avatar-preview-2627 {
    min-height: 460px;
  }
  .phoenix-avatar-2627 {
    width: 300px;
    height: 300px;
  }
  .phoenix-ring-1-2627 {
    width: 255px;
    height: 255px;
  }
  .phoenix-ring-2-2627 {
    width: 219px;
    height: 219px;
  }
  .phoenix-ring-3-2627 {
    width: 184px;
    height: 184px;
  }
  .phoenix-ring-4-2627 {
    width: 153px;
    height: 153px;
  }
  .phoenix-wing {
    width: 132px;
    height: 150px;
  }
  .phoenix-core-2627 {
    width: 108px;
    height: 108px;
  }
  .phoenix-core-inner-2627 {
    width: 71px;
    height: 71px;
  }
  .phoenix-core-icon-2627 {
    width: 41px;
    height: 41px;
    font-size: 19px;
  }
}
@media (max-width: 480px) {
  .avatar-preview-2627 {
    min-height: 390px;
  }
  .phoenix-avatar-2627 {
    width: 250px;
    height: 250px;
  }
  .phoenix-ring-1-2627 {
    width: 215px;
    height: 215px;
  }
  .phoenix-ring-2-2627 {
    width: 184px;
    height: 184px;
  }
  .phoenix-ring-3-2627 {
    width: 155px;
    height: 155px;
  }
  .phoenix-ring-4-2627 {
    width: 129px;
    height: 129px;
  }
  .phoenix-wing {
    width: 108px;
    height: 125px;
  }
  .phoenix-core-2627 {
    width: 91px;
    height: 91px;
  }
  .phoenix-core-inner-2627 {
    width: 60px;
    height: 60px;
  }
  .phoenix-core-icon-2627 {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
  .phoenix-status-2627 {
    bottom: 17px;
    padding: 5px 8px;
  }
  .phoenix-status-2627 strong {
    font-size: 5px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .phoenix-avatar-2627 *,
  .phoenix-avatar-2627::before,
  .phoenix-avatar-2627::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
  `,
  },
  {
    id: 2628,
    name: "Ocean Profile Avatar",
    preview: (
      <div className="avatar-preview-2628">
        <div className="avatar-ocean-2628">
          <div className="avatar-ocean-bg-2628"></div>
          <div className="avatar-ocean-glow-2628"></div>
          <div className="avatar-ocean-icon-2628">
            <i className="ri-user-3-line"></i>
          </div>
          <div className="avatar-ocean-status-2628"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-ocean-2628">
  <div class="avatar-ocean-bg-2628"></div>
  <div class="avatar-ocean-glow-2628"></div>
  <div class="avatar-ocean-icon-2628">
    <i class="ri-user-3-line"></i>
  </div>
  <div class="avatar-ocean-status-2628"></div>
</div>
  `,
    css: `
.avatar-preview-2628 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-ocean-2628 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#0ea5e9,#2563eb);
  border: 4px solid rgba(255,255,255,.8);
  box-shadow: 0 12px 30px rgba(37,99,235,.25);
}
.avatar-ocean-bg-2628 {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 25%,rgba(255,255,255,.4),transparent 22%),
    linear-gradient(145deg,#38bdf8,#2563eb);
}
.avatar-ocean-glow-2628 {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255,255,255,.12);
  filter: blur(8px);
  animation: oceanGlow2628 3s ease-in-out infinite;
}
.avatar-ocean-icon-2628 {
  position: relative;
  z-index: 2;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(15,23,42,.22);
  color: #fff;
  font-size: 29px;
  backdrop-filter: blur(5px);
}
.avatar-ocean-status-2628 {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #2563eb;
  box-shadow: 0 0 10px rgba(34,197,94,.5);
}
@keyframes oceanGlow2628 {
  0%,
  100% {
    transform: scale(.8);
    opacity: .5;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
}
  `,
  },
  {
    id: 2629,
    name: "Rose Profile Avatar",
    preview: (
      <div className="avatar-preview-2629">
        <div className="avatar-rose-2629">
          <div className="avatar-rose-ring-2629"></div>
          <div className="avatar-rose-icon-2629">
            <i className="ri-user-smile-line"></i>
          </div>
          <div className="avatar-rose-status-2629"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-rose-2629">
  <div class="avatar-rose-ring-2629"></div>
  <div class="avatar-rose-icon-2629">
    <i class="ri-user-smile-line"></i>
  </div>
  <div class="avatar-rose-status-2629"></div>
</div>
  `,
    css: `
.avatar-preview-2629 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-rose-2629 {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#ec4899,#db2777);
  box-shadow: 0 12px 30px rgba(219,39,119,.24);
}
.avatar-rose-ring-2629 {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(244,114,182,.35);
  animation: roseRing2629 4s linear infinite;
}
.avatar-rose-icon-2629 {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,.13);
  color: #fff;
  font-size: 30px;
  backdrop-filter: blur(8px);
}
.avatar-rose-status-2629 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #db2777;
}
@keyframes roseRing2629 {
  from {
    transform: rotate(0deg) scale(.96);
  }
  to {
    transform: rotate(360deg) scale(1.04);
  }
}
  `,
  },
  {
    id: 2630,
    name: "Forest Avatar",
    preview: (
      <div className="avatar-preview-2630">
        <div className="avatar-forest-2630">
          <div className="avatar-forest-leaf-2630"></div>
          <div className="avatar-forest-icon-2630">
            <i className="ri-leaf-line"></i>
          </div>
          <div className="avatar-forest-status-2630"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-forest-2630">
  <div class="avatar-forest-leaf-2630"></div>
  <div class="avatar-forest-icon-2630">
    <i class="ri-leaf-line"></i>
  </div>
  <div class="avatar-forest-status-2630"></div>
</div>
  `,
    css: `
.avatar-preview-2630 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-forest-2630 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#22c55e,#15803d);
  box-shadow: 0 12px 30px rgba(21,128,61,.22);
}
.avatar-forest-leaf-2630 {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%,rgba(255,255,255,.14),transparent 25%),
    radial-gradient(circle at 70% 70%,rgba(255,255,255,.08),transparent 30%);
  animation: forestLeaf2630 5s ease-in-out infinite alternate;
}
.avatar-forest-icon-2630 {
  width: 56px;
  height: 56px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #dcfce7;
  background: rgba(20,83,45,.4);
  font-size: 30px;
}
.avatar-forest-status-2630 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #86efac;
  border: 3px solid #15803d;
  box-shadow: 0 0 9px rgba(134,239,172,.45);
}
@keyframes forestLeaf2630 {
  from {
    transform: rotate(-5deg) scale(.95);
  }
  to {
    transform: rotate(5deg) scale(1.05);
  }
}
  `,
  },
  {
    id: 2631,
    name: "Sunset Avatar",
    preview: (
      <div className="avatar-preview-2631">
        <div className="avatar-sunset-2631">
          <div className="avatar-sunset-glow-2631"></div>
          <div className="avatar-sunset-icon-2631">
            <i className="ri-sun-line"></i>
          </div>
          <div className="avatar-sunset-status-2631"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-sunset-2631">
  <div class="avatar-sunset-glow-2631"></div>
  <div class="avatar-sunset-icon-2631">
    <i class="ri-sun-line"></i>
  </div>
  <div class="avatar-sunset-status-2631"></div>
</div>
  `,
    css: `
.avatar-preview-2631 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-sunset-2631 {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#fb923c,#ea580c);
  box-shadow: 0 12px 30px rgba(234,88,12,.25);
}
.avatar-sunset-glow-2631 {
  position: absolute;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: rgba(254,215,170,.3);
  filter: blur(10px);
  animation: sunsetGlow2631 2.8s ease-in-out infinite;
}
.avatar-sunset-icon-2631 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(154,52,18,.32);
  color: #fff7ed;
  font-size: 29px;
}
.avatar-sunset-status-2631 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #ea580c;
}
@keyframes sunsetGlow2631 {
  0%,
  100% {
    transform: scale(.8);
    opacity: .4;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
  `,
  },
  {
    id: 2632,
    name: "Lavender Avatar",
    preview: (
      <div className="avatar-preview-2632">
        <div className="avatar-lavender-2632">
          <div className="avatar-lavender-ring-2632"></div>
          <div className="avatar-lavender-icon-2632">
            <i className="ri-magic-line"></i>
          </div>
          <div className="avatar-lavender-status-2632"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-lavender-2632">
  <div class="avatar-lavender-ring-2632"></div>
  <div class="avatar-lavender-icon-2632">
    <i class="ri-magic-line"></i>
  </div>
  <div class="avatar-lavender-status-2632"></div>
</div>
  `,
    css: `
.avatar-preview-2632 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-lavender-2632 {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#a855f7,#7e22ce);
  box-shadow: 0 12px 30px rgba(126,34,206,.25);
}
.avatar-lavender-ring-2632 {
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.25);
  animation: lavenderRing2632 3.5s linear infinite;
}
.avatar-lavender-icon-2632 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,.12);
  color: #f5f3ff;
  font-size: 30px;
}
.avatar-lavender-status-2632 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #7e22ce;
}
@keyframes lavenderRing2632 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  `,
  },
  {
    id: 2633,
    name: "Midnight Avatar",
    preview: (
      <div className="avatar-preview-2633">
        <div className="avatar-midnight-2633">
          <div className="avatar-midnight-stars-2633"></div>
          <div className="avatar-midnight-icon-2633">
            <i className="ri-moon-line"></i>
          </div>
          <div className="avatar-midnight-status-2633"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-midnight-2633">
  <div class="avatar-midnight-stars-2633"></div>
  <div class="avatar-midnight-icon-2633">
    <i class="ri-moon-line"></i>
  </div>
  <div class="avatar-midnight-status-2633"></div>
</div>
  `,
    css: `
.avatar-preview-2633 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-midnight-2633 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#312e81,#172554);
  box-shadow: 0 12px 30px rgba(23,37,84,.3);
}
.avatar-midnight-stars-2633 {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 25%,#fff 0 1px,transparent 1.5px),
    radial-gradient(circle at 70% 20%,#bfdbfe 0 1px,transparent 1.5px),
    radial-gradient(circle at 35% 75%,#fff 0 1px,transparent 1.5px),
    radial-gradient(circle at 82% 68%,#c4b5fd 0 1px,transparent 1.5px);
  opacity: .65;
  animation: midnightStars2633 4s ease-in-out infinite alternate;
}
.avatar-midnight-icon-2633 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #e0e7ff;
  background: rgba(15,23,42,.38);
  font-size: 30px;
}
.avatar-midnight-status-2633 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #172554;
}
@keyframes midnightStars2633 {
  from {
    opacity: .35;
    transform: scale(1);
  }
  to {
    opacity: .8;
    transform: scale(1.08);
  }
}
  `,
  },
  {
    id: 2634,
    name: "Rose Gold Avatar",
    preview: (
      <div className="avatar-preview-2634">
        <div className="avatar-rosegold-2634">
          <div className="avatar-rosegold-shine-2634"></div>
          <div className="avatar-rosegold-icon-2634">
            <i className="ri-heart-3-line"></i>
          </div>
          <div className="avatar-rosegold-status-2634"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-rosegold-2634">
  <div class="avatar-rosegold-shine-2634"></div>
  <div class="avatar-rosegold-icon-2634">
    <i class="ri-heart-3-line"></i>
  </div>
  <div class="avatar-rosegold-status-2634"></div>
</div>
  `,
    css: `
.avatar-preview-2634 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-rosegold-2634 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#fda4af,#be123c);
  box-shadow: 0 12px 30px rgba(190,18,60,.22);
}
.avatar-rosegold-shine-2634 {
  position: absolute;
  width: 50px;
  height: 150px;
  left: 5px;
  top: -25px;
  transform: rotate(28deg);
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
  animation: roseGoldShine2634 3.5s linear infinite;
}
.avatar-rosegold-icon-2634 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(127,29,29,.25);
  color: #fff1f2;
  font-size: 29px;
}
.avatar-rosegold-status-2634 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #be123c;
}
@keyframes roseGoldShine2634 {
  from {
    transform: translateX(-70px) rotate(28deg);
  }
  to {
    transform: translateX(150px) rotate(28deg);
  }
}
  `,
  },
  {
    id: 2635,
    name: "Arctic Avatar",
    preview: (
      <div className="avatar-preview-2635">
        <div className="avatar-arctic-2635">
          <div className="avatar-arctic-snow-2635"></div>
          <div className="avatar-arctic-icon-2635">
            <i className="ri-snowflake-line"></i>
          </div>
          <div className="avatar-arctic-status-2635"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-arctic-2635">
  <div class="avatar-arctic-snow-2635"></div>
  <div class="avatar-arctic-icon-2635">
    <i class="ri-snowflake-line"></i>
  </div>
  <div class="avatar-arctic-status-2635"></div>
</div>
  `,
    css: `
.avatar-preview-2635 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-arctic-2635 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#67e8f9,#2563eb);
  box-shadow: 0 12px 30px rgba(37,99,235,.22);
}
.avatar-arctic-snow-2635 {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 20%,rgba(255,255,255,.7) 0 1px,transparent 1.5px),
    radial-gradient(circle at 75% 25%,rgba(255,255,255,.6) 0 1px,transparent 1.5px),
    radial-gradient(circle at 35% 75%,rgba(255,255,255,.55) 0 1px,transparent 1.5px),
    radial-gradient(circle at 82% 76%,rgba(255,255,255,.7) 0 1px,transparent 1.5px);
  animation: arcticSnow2635 5s linear infinite;
}
.avatar-arctic-icon-2635 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(224,242,254,.16);
  color: #eff6ff;
  font-size: 30px;
}
.avatar-arctic-status-2635 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #2563eb;
}
@keyframes arcticSnow2635 {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}
  `,
  },
  {
    id: 2636,
    name: "Emerald Avatar",
    preview: (
      <div className="avatar-preview-2636">
        <div className="avatar-emerald-2636">
          <div className="avatar-emerald-core-2636"></div>
          <div className="avatar-emerald-icon-2636">
            <i className="ri-vip-diamond-line"></i>
          </div>
          <div className="avatar-emerald-status-2636"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-emerald-2636">
  <div class="avatar-emerald-core-2636"></div>
  <div class="avatar-emerald-icon-2636">
    <i class="ri-vip-diamond-line"></i>
  </div>
  <div class="avatar-emerald-status-2636"></div>
</div>
  `,
    css: `
.avatar-preview-2636 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-emerald-2636 {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#34d399,#047857);
  box-shadow: 0 12px 30px rgba(4,120,87,.25);
}
.avatar-emerald-core-2636 {
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(167,243,208,.25),transparent 65%);
  animation: emeraldCore2636 3s ease-in-out infinite;
}
.avatar-emerald-icon-2636 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(6,78,59,.32);
  color: #d1fae5;
  font-size: 29px;
}
.avatar-emerald-status-2636 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #047857;
}
@keyframes emeraldCore2636 {
  0%,
  100% {
    transform: scale(.8);
    opacity: .45;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
  `,
  },
  {
    id: 2637,
    name: "Carbon Avatar",
    preview: (
      <div className="avatar-preview-2637">
        <div className="avatar-carbon-2637">
          <div className="avatar-carbon-lines-2637"></div>
          <div className="avatar-carbon-icon-2637">
            <i className="ri-shield-user-line"></i>
          </div>
          <div className="avatar-carbon-status-2637"></div>
        </div>
      </div>
    ),
    html: `
<div class="avatar-carbon-2637">
  <div class="avatar-carbon-lines-2637"></div>
  <div class="avatar-carbon-icon-2637">
    <i class="ri-shield-user-line"></i>
  </div>
  <div class="avatar-carbon-status-2637"></div>
</div>
  `,
    css: `
.avatar-preview-2637 {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-carbon-2637 {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(145deg,#334155,#0f172a);
  border: 2px solid rgba(148,163,184,.35);
  box-shadow:
    0 12px 30px rgba(15,23,42,.3),
    inset 0 0 25px rgba(255,255,255,.03);
}
.avatar-carbon-lines-2637 {
  position: absolute;
  inset: -20px;
  background:
    repeating-linear-gradient(
      135deg,
      transparent 0 12px,
      rgba(148,163,184,.05) 12px 13px
    );
  animation: carbonLines2637 7s linear infinite;
}
.avatar-carbon-icon-2637 {
  width: 55px;
  height: 55px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(15,23,42,.72);
  border: 1px solid rgba(148,163,184,.18);
  color: #e2e8f0;
  font-size: 29px;
}
.avatar-carbon-status-2637 {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #0f172a;
  box-shadow: 0 0 9px rgba(34,197,94,.4);
}
@keyframes carbonLines2637 {
  from {
    transform: translate(-12px,-12px);
  }
  to {
    transform: translate(12px,12px);
  }
}
  `,
  },
];
