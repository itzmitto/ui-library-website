import "../pages/All.css";

export const heroSections = [
  {
    id: 1394,
    name: "SaaS Hero Section",
    preview: (
      <section className="hero-1394">
        <span className="hero-1394__badge">
          <i className="fa-solid fa-sparkles"></i>
          New generation workspace
        </span>
        <h1>
          Build faster.
          <br />
          Ship smarter.
        </h1>
        <p>
          Everything your team needs to design, build and launch modern digital
          products.
        </p>
        <div className="hero-1394__actions">
          <button>Start building</button>
          <a href="#">
            View demo
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <span class="Hero-badge">
        <i class="fa-solid fa-sparkles"></i>
        New generation workspace
    </span>
    <h1>Build faster.<br>Ship smarter.</h1>
    <p>Everything your team needs to design, build and launch modern digital products.</p>
    <div class="Hero-actions">
        <button>Start building</button>
        <a href="#">
            View demo
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</section>`,
    css: `.Hero {
    width: 100%;
    min-height: 300px;
    padding: 38px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
    background:
        radial-gradient(circle at 80% 20%,rgba(99,102,241,.25),transparent 30%),
        radial-gradient(circle at 20% 80%,rgba(236,72,153,.16),transparent 30%),
        #09090b;
    color: #ffffff;
}
.Hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 9px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 999px;
    background: rgba(255,255,255,.05);
    color: #c4b5fd;
    font-size: 8px;
}
.Hero h1 {
    margin: 20px 0 10px;
    font-size: 40px;
    line-height: 1;
    letter-spacing: -1.5px;
}
.Hero p {
    max-width: 420px;
    margin: 0;
    color: #a1a1aa;
    font-size: 11px;
    line-height: 1.6;
}
.Hero-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 22px;
}
.Hero-actions button {
    height: 40px;
    padding: 0 14px;
    border: none;
    border-radius: 9px;
    background: #ffffff;
    color: #18181b;
    font-size: 9px;
    font-weight: 700;
}
.Hero-actions a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #d4d4d8;
    text-decoration: none;
    font-size: 9px;
}`,
  },
  {
    id: 1395,
    name: "Gradient Product Hero",
    preview: (
      <section className="hero-1395">
        <div className="hero-1395__content">
          <span className="hero-1395__eyebrow">Introducing Aurora</span>
          <h1>A better way to create.</h1>
          <p>
            A beautiful toolkit for teams who care about performance, simplicity
            and design.
          </p>
          <div className="hero-1395__actions">
            <button>Get started</button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="hero-1395__visual">
          <div className="hero-1395__orb"></div>
          <div className="hero-1395__card">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <strong>Aurora</strong>
            <small>Creative workspace</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span class="Hero-eyebrow">Introducing Aurora</span>
        <h1>A better way to create.</h1>
        <p>A beautiful toolkit for teams who care about performance, simplicity and design.</p>
        <div class="Hero-actions">
            <button>Get started</button>
            <button>Learn more</button>
        </div>
    </div>

    <div class="Hero-visual">
        <div class="Hero-orb"></div>
        <div class="Hero-card">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <strong>Aurora</strong>
            <small>Creative workspace</small>
        </div>
    </div>
</section>`,
    css: `.Hero {
    min-height: 290px;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    overflow: hidden;
    border-radius: 20px;
    background: linear-gradient(135deg,#0f172a,#1e1b4b,#312e81);
    color: #ffffff;
}
.Hero-content {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Hero-eyebrow {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
}
.Hero h1 {
    max-width: 360px;
    margin: 12px 0 9px;
    font-size: 34px;
    line-height: 1.05;
}
.Hero p {
    max-width: 360px;
    margin: 0;
    color: rgba(255,255,255,.65);
    font-size: 10px;
    line-height: 1.6;
}
.Hero-actions {
    display: flex;
    gap: 8px;
    margin-top: 20px;
}
.Hero-actions button {
    height: 38px;
    padding: 0 13px;
    border-radius: 9px;
    font-size: 9px;
    cursor: pointer;
}
.Hero-actions button:first-child {
    border: none;
    background: #ffffff;
    color: #18181b;
}
.Hero-actions button:last-child {
    border: 1px solid rgba(255,255,255,.2);
    background: rgba(255,255,255,.05);
    color: #ffffff;
}
.Hero-visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.Hero-orb {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899);
    filter: blur(8px);
    opacity: .55;
}
.Hero-card {
    position: absolute;
    width: 145px;
    padding: 17px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 15px;
    background: rgba(255,255,255,.1);
    backdrop-filter: blur(14px);
}
.Hero-card i {
    display: block;
    margin-bottom: 12px;
    color: #67e8f9;
    font-size: 17px;
}
.Hero-card strong {
    display: block;
    font-size: 12px;
}
.Hero-card small {
    display: block;
    margin-top: 4px;
    color: rgba(255,255,255,.55);
    font-size: 8px;
}`,
  },
  {
    id: 2092,
    name: "Aurora Startup Hero",
    preview: (
      <section className="hero-2092">
        <div className="hero-2092__glow"></div>
        <div className="hero-2092__content">
          <span className="hero-2092__badge">
            <i className="fa-solid fa-sparkles"></i>
            NEXT GENERATION
          </span>
          <h1>Build the future.</h1>
          <p>Powerful tools for modern teams building products that matter.</p>
          <div className="hero-2092__actions">
            <button>
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="hero-2092__secondary">Explore</button>
          </div>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-glow"></div>
    <div class="Hero-content">
        <span class="Hero-badge">
            <i class="fa-solid fa-sparkles"></i>
            NEXT GENERATION
        </span>
        <h1>Build the future.</h1>
        <p>Powerful tools for modern teams building products that matter.</p>
        <div class="Hero-actions">
            <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            <button class="Hero-secondary">Explore</button>
        </div>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        radial-gradient(circle at 50% 35%,rgba(99,102,241,.3),transparent 42%),
        linear-gradient(135deg,#0f172a,#111827,#1e1b4b);
    color: #fff;
}
.Hero-glow {
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(129,140,248,.3);
    filter: blur(90px);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    padding: 50px 24px;
    text-align: center;
}
.Hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 12px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 999px;
    background: rgba(255,255,255,.08);
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
}
.Hero h1 {
    margin: 20px 0 14px;
    font-size: clamp(42px,7vw,74px);
    line-height: .95;
    letter-spacing: -3px;
}
.Hero p {
    max-width: 560px;
    margin: 0 auto;
    color: #cbd5e1;
    font-size: 16px;
    line-height: 1.7;
}
.Hero-actions {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
}
.Hero-actions button {
    border: 0;
    padding: 13px 20px;
    border-radius: 11px;
    background: #fff;
    color: #111827;
    font-weight: 800;
    cursor: pointer;
}
.Hero-actions button i {
    margin-left: 6px;
}
.Hero-secondary {
    background: rgba(255,255,255,.08) !important;
    color: #fff !important;
    border: 1px solid rgba(255,255,255,.14) !important;
}`,
  },
  {
    id: 2093,
    name: "Dark Luxury Hero",
    preview: (
      <section className="hero-2093">
        <div className="hero-2093__line"></div>
        <div className="hero-2093__content">
          <span>EST. 2026</span>
          <h1>Designed with intention.</h1>
          <p>
            Minimal interfaces. Refined details. Exceptional digital
            experiences.
          </p>
          <button>
            Discover <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
        <div className="hero-2093__mark">
          <i className="fa-solid fa-gem"></i>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-line"></div>
    <div class="Hero-content">
        <span>EST. 2026</span>
        <h1>Designed with intention.</h1>
        <p>Minimal interfaces. Refined details. Exceptional digital experiences.</p>
        <button>Discover <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
    </div>
    <div class="Hero-mark">
        <i class="fa-solid fa-gem"></i>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 380px;
    overflow: hidden;
    border-radius: 24px;
    background:
        radial-gradient(circle at 72% 30%,rgba(212,175,55,.12),transparent 25%),
        #090909;
    color: #f5f5f4;
}
.Hero-line {
    position: absolute;
    left: 10%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(transparent,rgba(212,175,55,.45),transparent);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 680px;
    padding: 75px;
}
.Hero-content > span {
    color: #c5a45a;
    font-size: 10px;
    letter-spacing: 4px;
}
.Hero h1 {
    margin: 18px 0;
    max-width: 620px;
    font-family: Georgia,serif;
    font-size: clamp(42px,7vw,70px);
    line-height: 1;
    font-weight: 500;
}
.Hero p {
    max-width: 520px;
    color: #a8a29e;
    line-height: 1.8;
}
.Hero button {
    margin-top: 28px;
    padding: 12px 18px;
    border: 1px solid rgba(197,164,90,.45);
    border-radius: 4px;
    background: transparent;
    color: #e7d9ad;
    cursor: pointer;
}
.Hero-mark {
    position: absolute;
    right: 10%;
    bottom: 14%;
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(212,175,55,.25);
    border-radius: 50%;
    color: #c5a45a;
    font-size: 28px;
    box-shadow: 0 0 40px rgba(212,175,55,.08);
}`,
  },
  {
    id: 2094,
    name: "Glass Product Hero",
    preview: (
      <section className="hero-2094">
        <div className="hero-2094__blob hero-2094__blob--one"></div>
        <div className="hero-2094__blob hero-2094__blob--two"></div>
        <div className="hero-2094__card">
          <span className="hero-2094__badge">
            <i className="fa-solid fa-bolt"></i>
            POWERFUL
          </span>
          <h1>Everything in one place.</h1>
          <p>
            Manage your workflow with a beautiful workspace built for speed.
          </p>
          <button>
            Start Free <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-blob Hero-blob--one"></div>
    <div class="Hero-blob Hero-blob--two"></div>
    <div class="Hero-card">
        <span class="Hero-badge">
            <i class="fa-solid fa-bolt"></i>
            POWERFUL
        </span>
        <h1>Everything in one place.</h1>
        <p>Manage your workflow with a beautiful workspace built for speed.</p>
        <button>Start Free <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 380px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background: linear-gradient(135deg,#0f172a,#172554,#312e81);
}
.Hero-blob {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    filter: blur(55px);
}
.Hero-blob--one {
    top: -30px;
    left: 15%;
    background: #22d3ee;
}
.Hero-blob--two {
    right: 10%;
    bottom: -40px;
    background: #a855f7;
}
.Hero-card {
    position: relative;
    z-index: 2;
    max-width: 620px;
    padding: 46px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 24px;
    background: rgba(255,255,255,.09);
    backdrop-filter: blur(18px);
    color: #fff;
    text-align: center;
    box-shadow: 0 25px 80px rgba(0,0,0,.2);
}
.Hero-badge {
    display: inline-flex;
    gap: 7px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.1);
    color: #67e8f9;
    font-size: 10px;
    font-weight: 800;
}
.Hero h1 {
    margin: 18px 0 12px;
    font-size: clamp(38px,6vw,64px);
    line-height: .98;
}
.Hero p {
    color: #cbd5e1;
    line-height: 1.7;
}
.Hero button {
    margin-top: 24px;
    padding: 12px 20px;
    border: 0;
    border-radius: 10px;
    background: #fff;
    color: #111827;
    font-weight: 800;
}`,
  },
  {
    id: 2095,
    name: "Neon Cyber Hero",
    preview: (
      <section className="hero-2095">
        <div className="hero-2095__grid"></div>
        <div className="hero-2095__content">
          <span className="hero-2095__status">
            <i className="fa-solid fa-circle"></i>
            SYSTEM ONLINE
          </span>
          <h1>Enter the digital future.</h1>
          <p>
            High-performance interfaces engineered for the next generation of
            products.
          </p>
          <button>
            <i className="fa-solid fa-terminal"></i> Initialize
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-grid"></div>
    <div class="Hero-content">
        <span class="Hero-status">
            <i class="fa-solid fa-circle"></i>
            SYSTEM ONLINE
        </span>
        <h1>Enter the digital future.</h1>
        <p>High-performance interfaces engineered for the next generation of products.</p>
        <button><i class="fa-solid fa-terminal"></i> Initialize</button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        radial-gradient(circle,#111827 0%,#020617 60%,#000 100%);
    color: #fff;
}
.Hero-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(rgba(34,211,238,.08) 1px,transparent 1px),
        linear-gradient(90deg,rgba(34,211,238,.08) 1px,transparent 1px);
    background-size: 28px 28px;
    mask-image: linear-gradient(transparent,#000 30%,#000 70%,transparent);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    text-align: center;
    padding: 40px 20px;
}
.Hero-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #22d3ee;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 2px;
}
.Hero-status i {
    font-size: 6px;
    text-shadow: 0 0 8px #22d3ee;
}
.Hero h1 {
    margin: 20px 0 14px;
    font-family: monospace;
    font-size: clamp(36px,6vw,64px);
    text-transform: uppercase;
    text-shadow: 0 0 25px rgba(34,211,238,.28);
}
.Hero p {
    color: #94a3b8;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 21px;
    border: 1px solid #22d3ee;
    background: rgba(34,211,238,.08);
    color: #67e8f9;
    font-family: monospace;
    cursor: pointer;
    box-shadow: 0 0 18px rgba(34,211,238,.15);
}`,
  },
  {
    id: 2096,
    name: "Split SaaS Hero",
    preview: (
      <section className="hero-2096">
        <div className="hero-2096__content">
          <span>THE SMARTER WORKSPACE</span>
          <h1>Work smarter. Move faster.</h1>
          <p>
            One powerful platform for projects, teams and everything in between.
          </p>
          <div>
            <button>Try it free</button>
            <button className="hero-2096__play">
              <i className="fa-solid fa-play"></i> Watch demo
            </button>
          </div>
        </div>
        <div className="hero-2096__visual">
          <div className="hero-2096__window">
            <div className="hero-2096__top"></div>
            <div className="hero-2096__bars"></div>
            <div className="hero-2096__chart"></div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>THE SMARTER WORKSPACE</span>
        <h1>Work smarter. Move faster.</h1>
        <p>One powerful platform for projects, teams and everything in between.</p>
        <div>
            <button>Try it free</button>
            <button class="Hero-play"><i class="fa-solid fa-play"></i> Watch demo</button>
        </div>
    </div>
    <div class="Hero-visual">
        <div class="Hero-window">
            <div class="Hero-top"></div>
            <div class="Hero-bars"></div>
            <div class="Hero-chart"></div>
        </div>
    </div>
</section>`,
    css: `.Hero {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    padding: 45px;
    overflow: hidden;
    border-radius: 24px;
    background: #f8fafc;
    color: #0f172a;
}
.Hero-content > span {
    color: #6366f1;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Hero h1 {
    max-width: 520px;
    margin: 15px 0;
    font-size: clamp(40px,5vw,64px);
    line-height: .98;
    letter-spacing: -2px;
}
.Hero p {
    max-width: 500px;
    color: #64748b;
    line-height: 1.7;
}
.Hero-content > div {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}
.Hero button {
    padding: 12px 18px;
    border: 0;
    border-radius: 10px;
    background: #4f46e5;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
}
.Hero-play {
    background: transparent !important;
    color: #334155 !important;
    border: 1px solid #cbd5e1 !important;
}
.Hero-visual {
    display: flex;
    justify-content: center;
}
.Hero-window {
    width: 100%;
    max-width: 330px;
    min-height: 220px;
    padding: 14px;
    border: 1px solid #cbd5e1;
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 25px 70px rgba(15,23,42,.12);
    transform: rotate(3deg);
}
.Hero-top {
    width: 80px;
    height: 7px;
    border-radius: 999px;
    background: #e2e8f0;
}
.Hero-bars {
    width: 70%;
    height: 10px;
    margin: 22px 0 18px;
    border-radius: 999px;
    background: #e2e8f0;
}
.Hero-chart {
    height: 115px;
    border-radius: 12px;
    background:
        linear-gradient(135deg,transparent 48%,#818cf8 49% 52%,transparent 53%),
        linear-gradient(45deg,transparent 48%,#c7d2fe 49% 52%,transparent 53%),
        #f8fafc;
}`,
  },
  {
    id: 2097,
    name: "Minimal Editorial Hero",
    preview: (
      <section className="hero-2097">
        <div className="hero-2097__eyebrow">CREATIVE DIGITAL STUDIO</div>
        <h1>
          Ideas worth <em>remembering.</em>
        </h1>
        <p>We create distinctive digital experiences for ambitious brands.</p>
        <a href="#">
          View our work <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-eyebrow">CREATIVE DIGITAL STUDIO</div>
    <h1>Ideas worth <em>remembering.</em></h1>
    <p>We create distinctive digital experiences for ambitious brands.</p>
    <a href="#">View our work <i class="fa-solid fa-arrow-right"></i></a>
</section>`,
    css: `.Hero {
    min-height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 25px;
    border-radius: 24px;
    background: #f7f4ee;
    color: #171717;
    text-align: center;
}
.Hero-eyebrow {
    font-size: 9px;
    letter-spacing: 3px;
    font-weight: 900;
    color: #737373;
}
.Hero h1 {
    max-width: 800px;
    margin: 22px 0 16px;
    font-family: Georgia,serif;
    font-size: clamp(46px,8vw,82px);
    font-weight: 400;
    line-height: .95;
}
.Hero h1 em {
    color: #9a3412;
}
.Hero p {
    max-width: 500px;
    color: #737373;
    line-height: 1.8;
}
.Hero a {
    margin-top: 25px;
    color: #171717;
    font-size: 13px;
    font-weight: 800;
    text-decoration: none;
}
.Hero a i {
    margin-left: 5px;
}`,
  },
  {
    id: 2098,
    name: "AI Gradient Hero",
    preview: (
      <section className="hero-2098">
        <div className="hero-2098__orb"></div>
        <div className="hero-2098__content">
          <span>
            <i className="fa-solid fa-wand-magic-sparkles"></i> AI POWERED
          </span>
          <h1>Turn ideas into reality.</h1>
          <p>
            Generate, design and launch faster with intelligent creative tools.
          </p>
          <button>
            Create Something <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-orb"></div>
    <div class="Hero-content">
        <span><i class="fa-solid fa-wand-magic-sparkles"></i> AI POWERED</span>
        <h1>Turn ideas into reality.</h1>
        <p>Generate, design and launch faster with intelligent creative tools.</p>
        <button>Create Something <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background: #020617;
    color: #fff;
}
.Hero-orb {
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background:
        conic-gradient(#22d3ee,#6366f1,#ec4899,#8b5cf6,#22d3ee);
    filter: blur(75px);
    opacity: .45;
    animation: ai-orb 5s linear infinite;
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    padding: 40px;
    text-align: center;
}
.Hero-content > span {
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 20px 0 15px;
    font-size: clamp(42px,7vw,72px);
    line-height: .95;
    background: linear-gradient(90deg,#fff,#a5b4fc,#67e8f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.Hero p {
    color: #94a3b8;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 20px;
    border: 0;
    border-radius: 11px;
    background: linear-gradient(90deg,#6366f1,#8b5cf6);
    color: #fff;
    font-weight: 800;
    cursor: pointer;
}
@keyframes ai-orb {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 2099,
    name: "Green Finance Hero",
    preview: (
      <section className="hero-2099">
        <div className="hero-2099__content">
          <span>
            <i className="fa-solid fa-chart-line"></i> FINANCE, SIMPLIFIED
          </span>
          <h1>
            Your money.
            <br />
            Your future.
          </h1>
          <p>
            Smart financial tools designed to help you grow with confidence.
          </p>
          <button>Open Account</button>
        </div>
        <div className="hero-2099__stats">
          <strong>$24,860</strong>
          <span>Portfolio value</span>
          <small>+18.4% this year</small>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span><i class="fa-solid fa-chart-line"></i> FINANCE, SIMPLIFIED</span>
        <h1>Your money.<br>Your future.</h1>
        <p>Smart financial tools designed to help you grow with confidence.</p>
        <button>Open Account</button>
    </div>
    <div class="Hero-stats">
        <strong>$24,860</strong>
        <span>Portfolio value</span>
        <small>+18.4% this year</small>
    </div>
</section>`,
    css: `.Hero {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    align-items: center;
    gap: 30px;
    padding: 50px;
    border-radius: 24px;
    background: #052e16;
    color: #ecfdf5;
}
.Hero-content > span {
    color: #86efac;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 18px 0 15px;
    font-size: clamp(44px,6vw,68px);
    line-height: .94;
}
.Hero p {
    max-width: 500px;
    color: #a7f3d0;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 20px;
    border: 0;
    border-radius: 10px;
    background: #dcfce7;
    color: #14532d;
    font-weight: 900;
}
.Hero-stats {
    padding: 35px;
    border: 1px solid rgba(134,239,172,.15);
    border-radius: 22px;
    background: rgba(255,255,255,.04);
    box-shadow: 0 25px 60px rgba(0,0,0,.15);
}
.Hero-stats strong,
.Hero-stats span,
.Hero-stats small {
    display: block;
}
.Hero-stats strong {
    font-size: 42px;
}
.Hero-stats span {
    margin-top: 5px;
    color: #a7f3d0;
}
.Hero-stats small {
    margin-top: 24px;
    color: #86efac;
}`,
  },
  {
    id: 2100,
    name: "Purple Creator Hero",
    preview: (
      <section className="hero-2100">
        <div className="hero-2100__content">
          <span>FOR DESIGNERS & CREATORS</span>
          <h1>Make your next masterpiece.</h1>
          <p>
            A flexible creative toolkit that gets out of your way and lets ideas
            lead.
          </p>
          <div>
            <button>Start Creating</button>
            <button className="hero-2100__link">See templates</button>
          </div>
        </div>
        <div className="hero-2100__shape"></div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>FOR DESIGNERS & CREATORS</span>
        <h1>Make your next masterpiece.</h1>
        <p>A flexible creative toolkit that gets out of your way and lets ideas lead.</p>
        <div>
            <button>Start Creating</button>
            <button class="Hero-link">See templates</button>
        </div>
    </div>
    <div class="Hero-shape"></div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    background: #faf5ff;
    color: #2e1065;
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 650px;
    padding: 55px;
}
.Hero-content > span {
    color: #7c3aed;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 18px 0 14px;
    max-width: 600px;
    font-size: clamp(42px,7vw,72px);
    line-height: .95;
    letter-spacing: -2px;
}
.Hero p {
    max-width: 510px;
    color: #6b21a8;
    line-height: 1.8;
}
.Hero-content > div {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}
.Hero button {
    padding: 13px 19px;
    border: 0;
    border-radius: 10px;
    background: #7c3aed;
    color: #fff;
    font-weight: 800;
}
.Hero-link {
    background: transparent !important;
    color: #6d28d9 !important;
    border: 1px solid #c4b5fd !important;
}
.Hero-shape {
    position: absolute;
    width: 420px;
    height: 420px;
    right: -110px;
    top: -35px;
    border-radius: 35% 65% 65% 35%;
    background:
        linear-gradient(
            135deg,
            #c084fc,
            #8b5cf6,
            #4c1d95
        );
    transform: rotate(17deg);
    box-shadow: -30px 30px 90px rgba(124,58,237,.2);
}`,
  },
  {
    id: 2101,
    name: "Brutalist Hero",
    preview: (
      <section className="hero-2101">
        <div className="hero-2101__label">NO. 001 — DIGITAL PRODUCT</div>
        <h1>
          BIG
          <br />
          IDEAS.
        </h1>
        <div className="hero-2101__bottom">
          <p>Bold digital products for people who refuse to blend in.</p>
          <button>
            ENTER <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-label">NO. 001 — DIGITAL PRODUCT</div>
    <h1>BIG<br>IDEAS.</h1>
    <div class="Hero-bottom">
        <p>Bold digital products for people who refuse to blend in.</p>
        <button>ENTER <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</section>`,
    css: `.Hero {
    min-height: 390px;
    padding: 28px;
    border: 4px solid #111;
    border-radius: 0;
    background: #facc15;
    color: #111;
}
.Hero-label {
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1px;
}
.Hero h1 {
    margin: 30px 0;
    font-size: clamp(70px,12vw,130px);
    line-height: .72;
    letter-spacing: -6px;
    font-weight: 950;
}
.Hero-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
}
.Hero-bottom p {
    max-width: 380px;
    margin: 0;
    font-size: 15px;
    font-weight: 700;
}
.Hero button {
    padding: 15px 20px;
    border: 3px solid #111;
    background: #f5f5f5;
    color: #111;
    font-weight: 950;
    cursor: pointer;
}`,
  },
  {
    id: 2102,
    name: "Ocean Travel Hero",
    preview: (
      <section className="hero-2102">
        <div className="hero-2102__overlay"></div>
        <div className="hero-2102__content">
          <span>DISCOVER MORE</span>
          <h1>Where the world feels endless.</h1>
          <p>
            Find extraordinary places, hidden beaches and unforgettable
            adventures.
          </p>
          <button>
            Explore destinations <i className="fa-solid fa-compass"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-overlay"></div>
    <div class="Hero-content">
        <span>DISCOVER MORE</span>
        <h1>Where the world feels endless.</h1>
        <p>Find extraordinary places, hidden beaches and unforgettable adventures.</p>
        <button>Explore destinations <i class="fa-solid fa-compass"></i></button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        linear-gradient(135deg,#075985,#0e7490,#155e75);
    color: #fff;
}
.Hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 20% 25%,rgba(125,211,252,.35),transparent 25%),
        radial-gradient(circle at 80% 75%,rgba(34,211,238,.25),transparent 30%);
}
.Hero-overlay {
    position: absolute;
    width: 170px;
    height: 170px;
    right: 15%;
    bottom: 12%;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 50%;
    box-shadow:
        0 0 0 25px rgba(255,255,255,.04),
        0 0 0 50px rgba(255,255,255,.025);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
    padding: 45px 25px;
    text-align: center;
}
.Hero-content > span {
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 3px;
}
.Hero h1 {
    margin: 18px 0;
    font-size: clamp(42px,7vw,70px);
    line-height: .95;
}
.Hero p {
    max-width: 560px;
    margin: auto;
    color: #cffafe;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 20px;
    border: 0;
    border-radius: 999px;
    background: #ecfeff;
    color: #164e63;
    font-weight: 800;
}`,
  },
  {
    id: 2103,
    name: "Monochrome Portfolio Hero",
    preview: (
      <section className="hero-2103">
        <div className="hero-2103__meta">
          <span>PORTFOLIO</span>
          <span>2026</span>
        </div>
        <div className="hero-2103__content">
          <h1>
            Creative
            <br />
            <strong>developer.</strong>
          </h1>
          <p>Designing clean, expressive digital experiences with code.</p>
          <a href="#">
            Explore projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-meta">
        <span>PORTFOLIO</span>
        <span>2026</span>
    </div>
    <div class="Hero-content">
        <h1>Creative<br><strong>developer.</strong></h1>
        <p>Designing clean, expressive digital experiences with code.</p>
        <a href="#">Explore projects <i class="fa-solid fa-arrow-right"></i></a>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    padding: 30px;
    border-radius: 24px;
    background: #fafafa;
    color: #111;
}
.Hero-meta {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
    color: #737373;
}
.Hero-content {
    max-width: 700px;
    margin-top: 55px;
}
.Hero h1 {
    margin: 0;
    font-size: clamp(58px,9vw,96px);
    line-height: .82;
    letter-spacing: -5px;
    font-weight: 300;
}
.Hero h1 strong {
    font-weight: 900;
}
.Hero p {
    max-width: 480px;
    margin: 28px 0;
    color: #737373;
    line-height: 1.8;
}
.Hero a {
    color: #111;
    font-size: 13px;
    font-weight: 900;
    text-decoration: none;
}
.Hero a i {
    margin-left: 6px;
}`,
  },
  {
    id: 2104,
    name: "Red Launch Hero",
    preview: (
      <section className="hero-2104">
        <div className="hero-2104__content">
          <span>LAUNCH SOMETHING GREAT</span>
          <h1>
            Ship faster.
            <br />
            Dream bigger.
          </h1>
          <p>
            A modern platform for teams turning ambitious ideas into reality.
          </p>
          <div>
            <button>Get started</button>
            <button className="hero-2104__outline">Learn more</button>
          </div>
        </div>
        <div className="hero-2104__circle">
          <i className="fa-solid fa-rocket"></i>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>LAUNCH SOMETHING GREAT</span>
        <h1>Ship faster.<br>Dream bigger.</h1>
        <p>A modern platform for teams turning ambitious ideas into reality.</p>
        <div>
            <button>Get started</button>
            <button class="Hero-outline">Learn more</button>
        </div>
    </div>
    <div class="Hero-circle">
        <i class="fa-solid fa-rocket"></i>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    background: #450a0a;
    color: #fff;
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 650px;
    padding: 50px;
}
.Hero-content > span {
    color: #fca5a5;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 17px 0;
    font-size: clamp(45px,7vw,72px);
    line-height: .94;
}
.Hero p {
    max-width: 500px;
    color: #fecaca;
    line-height: 1.8;
}
.Hero-content > div {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}
.Hero button {
    padding: 13px 19px;
    border: 0;
    border-radius: 10px;
    background: #fff;
    color: #7f1d1d;
    font-weight: 800;
}
.Hero-outline {
    background: transparent !important;
    border: 1px solid rgba(255,255,255,.25) !important;
    color: #fff !important;
}
.Hero-circle {
    position: absolute;
    right: -70px;
    width: 310px;
    height: 310px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#ef4444,#991b1b 70%);
    box-shadow: -20px 20px 90px rgba(239,68,68,.25);
    font-size: 70px;
    color: #fee2e2;
}`,
  },
  {
    id: 2105,
    name: "Glass Agency Hero",
    preview: (
      <section className="hero-2105">
        <div className="hero-2105__noise"></div>
        <div className="hero-2105__content">
          <span>AGENCY / DIGITAL / CREATIVE</span>
          <h1>We make brands impossible to ignore.</h1>
          <p>
            Strategy, design and technology for companies ready to stand out.
          </p>
          <button>
            Start a project{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
        <div className="hero-2105__orb"></div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-noise"></div>
    <div class="Hero-content">
        <span>AGENCY / DIGITAL / CREATIVE</span>
        <h1>We make brands impossible to ignore.</h1>
        <p>Strategy, design and technology for companies ready to stand out.</p>
        <button>Start a project <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
    </div>
    <div class="Hero-orb"></div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background: linear-gradient(135deg,#18181b,#27272a,#111827);
    color: #fff;
}
.Hero-noise {
    position: absolute;
    inset: 0;
    opacity: .1;
    background:
        repeating-linear-gradient(
            0deg,
            transparent 0 3px,
            rgba(255,255,255,.05) 4px
        );
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 760px;
    padding: 50px 25px;
    text-align: center;
}
.Hero-content > span {
    font-size: 9px;
    letter-spacing: 3px;
    color: #a1a1aa;
}
.Hero h1 {
    margin: 20px 0 15px;
    font-size: clamp(40px,7vw,70px);
    line-height: .96;
}
.Hero p {
    color: #a1a1aa;
    line-height: 1.8;
}
.Hero button {
    margin-top: 26px;
    padding: 13px 20px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 10px;
    background: rgba(255,255,255,.08);
    color: #fff;
    backdrop-filter: blur(10px);
}
.Hero-orb {
    position: absolute;
    width: 240px;
    height: 240px;
    right: -70px;
    top: -70px;
    border-radius: 50%;
    background: linear-gradient(135deg,#f472b6,#8b5cf6,#22d3ee);
    filter: blur(35px);
    opacity: .35;
}`,
  },
  {
    id: 2106,
    name: "Soft Organic Hero",
    preview: (
      <section className="hero-2106">
        <div className="hero-2106__content">
          <span>GROW WITH PURPOSE</span>
          <h1>Good design should feel natural.</h1>
          <p>
            Simple tools, thoughtful experiences and a calmer way to build
            online.
          </p>
          <button>
            Explore <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-2106__blob"></div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>GROW WITH PURPOSE</span>
        <h1>Good design should feel natural.</h1>
        <p>Simple tools, thoughtful experiences and a calmer way to build online.</p>
        <button>Explore <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="Hero-blob"></div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 32px;
    background: #f0fdf4;
    color: #14532d;
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 650px;
    padding: 55px;
}
.Hero-content > span {
    color: #16a34a;
    font-size: 9px;
    letter-spacing: 2px;
    font-weight: 900;
}
.Hero h1 {
    max-width: 620px;
    margin: 18px 0;
    font-family: Georgia,serif;
    font-size: clamp(42px,7vw,72px);
    line-height: 1;
    font-weight: 500;
}
.Hero p {
    max-width: 500px;
    color: #4d7c0f;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 19px;
    border: 0;
    border-radius: 999px;
    background: #166534;
    color: #fff;
    font-weight: 800;
}
.Hero-blob {
    position: absolute;
    right: -80px;
    width: 370px;
    height: 370px;
    border-radius: 43% 57% 62% 38%;
    background:
        radial-gradient(circle at 35% 30%,#bbf7d0,#4ade80 55%,#15803d);
    transform: rotate(20deg);
    box-shadow: -20px 30px 60px rgba(22,101,52,.15);
}`,
  },
  {
    id: 2107,
    name: "Cyber HUD Hero",
    preview: (
      <section className="hero-2107">
        <div className="hero-2107__corner hero-2107__corner--one"></div>
        <div className="hero-2107__corner hero-2107__corner--two"></div>
        <div className="hero-2107__content">
          <span>
            <i className="fa-solid fa-crosshairs"></i> MISSION READY
          </span>
          <h1>Tomorrow starts now.</h1>
          <p>Advanced systems for teams operating at the edge of innovation.</p>
          <button>
            ACCESS SYSTEM <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="hero-2107__hud">01 / 07</div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-corner Hero-corner--one"></div>
    <div class="Hero-corner Hero-corner--two"></div>
    <div class="Hero-content">
        <span><i class="fa-solid fa-crosshairs"></i> MISSION READY</span>
        <h1>Tomorrow starts now.</h1>
        <p>Advanced systems for teams operating at the edge of innovation.</p>
        <button>ACCESS SYSTEM <i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="Hero-hud">01 / 07</div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid #164e63;
    border-radius: 18px;
    background:
        linear-gradient(rgba(34,211,238,.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(34,211,238,.04) 1px,transparent 1px),
        #020617;
    background-size: 24px 24px;
    color: #e0f2fe;
}
.Hero-content {
    max-width: 690px;
    padding: 40px;
    text-align: center;
}
.Hero-content > span {
    color: #22d3ee;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 18px 0;
    font-family: monospace;
    font-size: clamp(40px,7vw,70px);
    text-transform: uppercase;
}
.Hero p {
    color: #64748b;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 12px 18px;
    border: 1px solid #0e7490;
    background: #082f49;
    color: #67e8f9;
    font-family: monospace;
    cursor: pointer;
}
.Hero-corner {
    position: absolute;
    width: 35px;
    height: 35px;
    border-color: #22d3ee;
}
.Hero-corner--one {
    top: 20px;
    left: 20px;
    border-top: 1px solid;
    border-left: 1px solid;
}
.Hero-corner--two {
    right: 20px;
    bottom: 20px;
    border-right: 1px solid;
    border-bottom: 1px solid;
}
.Hero-hud {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    color: #155e75;
    font-family: monospace;
    font-size: 8px;
    letter-spacing: 3px;
}`,
  },
  {
    id: 2108,
    name: "Sunset Gradient Hero",
    preview: (
      <section className="hero-2108">
        <div className="hero-2108__content">
          <span>MAKE TODAY COUNT</span>
          <h1>Chase the moment.</h1>
          <p>
            Beautiful tools for ambitious people who want to do their best work.
          </p>
          <button>
            Get started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>MAKE TODAY COUNT</span>
        <h1>Chase the moment.</h1>
        <p>Beautiful tools for ambitious people who want to do their best work.</p>
        <button>Get started <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 390px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        linear-gradient(
            135deg,
            #f97316,
            #ec4899 45%,
            #7c3aed
        );
    color: #fff;
}
.Hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 20% 25%,rgba(255,255,255,.24),transparent 20%),
        radial-gradient(circle at 80% 70%,rgba(255,255,255,.15),transparent 25%);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
    padding: 45px 25px;
    text-align: center;
}
.Hero-content > span {
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 3px;
}
.Hero h1 {
    margin: 19px 0;
    font-size: clamp(46px,7vw,76px);
    line-height: .92;
}
.Hero p {
    color: rgba(255,255,255,.82);
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 20px;
    border: 0;
    border-radius: 999px;
    background: #fff;
    color: #7c2d12;
    font-weight: 900;
}`,
  },
  {
    id: 2109,
    name: "Dark Dashboard Hero",
    preview: (
      <section className="hero-2109">
        <div className="hero-2109__content">
          <span>ANALYTICS PLATFORM</span>
          <h1>
            See everything.
            <br />
            Understand more.
          </h1>
          <p>
            Turn complex data into clear decisions with an intelligent analytics
            workspace.
          </p>
          <button>View Dashboard</button>
        </div>
        <div className="hero-2109__panel">
          <div className="hero-2109__metric">
            <span>REVENUE</span>
            <strong>$128,420</strong>
            <small>+24.7%</small>
          </div>
          <div className="hero-2109__bars">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>ANALYTICS PLATFORM</span>
        <h1>See everything.<br>Understand more.</h1>
        <p>Turn complex data into clear decisions with an intelligent analytics workspace.</p>
        <button>View Dashboard</button>
    </div>
    <div class="Hero-panel">
        <div class="Hero-metric">
            <span>REVENUE</span>
            <strong>$128,420</strong>
            <small>+24.7%</small>
        </div>
        <div class="Hero-bars">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
    </div>
</section>`,
    css: `.Hero {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1fr .75fr;
    gap: 30px;
    align-items: center;
    padding: 45px;
    border-radius: 24px;
    background: #09090b;
    color: #fafafa;
}
.Hero-content > span {
    color: #71717a;
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 2px;
}
.Hero h1 {
    margin: 17px 0;
    font-size: clamp(42px,6vw,66px);
    line-height: .95;
}
.Hero p {
    max-width: 500px;
    color: #a1a1aa;
    line-height: 1.8;
}
.Hero button {
    margin-top: 25px;
    padding: 13px 19px;
    border: 0;
    border-radius: 10px;
    background: #f4f4f5;
    color: #18181b;
    font-weight: 900;
}
.Hero-panel {
    padding: 28px;
    border: 1px solid #27272a;
    border-radius: 18px;
    background: #18181b;
    box-shadow: 0 25px 70px rgba(0,0,0,.3);
}
.Hero-metric span,
.Hero-metric strong,
.Hero-metric small {
    display: block;
}
.Hero-metric span {
    font-size: 9px;
    color: #71717a;
}
.Hero-metric strong {
    margin: 7px 0;
    font-size: 38px;
}
.Hero-metric small {
    color: #4ade80;
}
.Hero-bars {
    display: flex;
    align-items: end;
    gap: 7px;
    height: 130px;
    margin-top: 25px;
}
.Hero-bars i {
    flex: 1;
    display: block;
    border-radius: 5px 5px 2px 2px;
    background: linear-gradient(to top,#27272a,#71717a);
}
.Hero-bars i:nth-child(1) { height: 35%; }
.Hero-bars i:nth-child(2) { height: 58%; }
.Hero-bars i:nth-child(3) { height: 46%; }
.Hero-bars i:nth-child(4) { height: 72%; }
.Hero-bars i:nth-child(5) { height: 63%; }
.Hero-bars i:nth-child(6) { height: 88%; }
.Hero-bars i:nth-child(7) { height: 100%; }`,
  },
  {
    id: 2110,
    name: "White Product Hero",
    preview: (
      <section className="hero-2110">
        <div className="hero-2110__content">
          <span>THE NEW STANDARD</span>
          <h1>Beautifully simple.</h1>
          <p>
            A focused product experience designed around clarity, speed and
            simplicity.
          </p>
          <div>
            <button>Buy now</button>
            <button className="hero-2110__ghost">Learn more</button>
          </div>
        </div>
        <div className="hero-2110__product">
          <div className="hero-2110__screen">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-content">
        <span>THE NEW STANDARD</span>
        <h1>Beautifully simple.</h1>
        <p>A focused product experience designed around clarity, speed and simplicity.</p>
        <div>
            <button>Buy now</button>
            <button class="Hero-ghost">Learn more</button>
        </div>
    </div>
    <div class="Hero-product">
        <div class="Hero-screen">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</section>`,
    css: `.Hero {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    padding: 50px;
    overflow: hidden;
    border-radius: 24px;
    background: #fff;
    color: #18181b;
}
.Hero-content > span {
    color: #71717a;
    font-size: 9px;
    letter-spacing: 2px;
    font-weight: 900;
}
.Hero h1 {
    margin: 17px 0;
    font-size: clamp(45px,6vw,70px);
    line-height: .95;
}
.Hero p {
    max-width: 500px;
    color: #71717a;
    line-height: 1.8;
}
.Hero-content > div {
    display: flex;
    gap: 9px;
    margin-top: 25px;
}
.Hero button {
    padding: 13px 20px;
    border: 0;
    border-radius: 10px;
    background: #18181b;
    color: #fff;
    font-weight: 800;
}
.Hero-ghost {
    background: #f4f4f5 !important;
    color: #18181b !important;
}
.Hero-product {
    display: flex;
    justify-content: center;
}
.Hero-screen {
    width: 290px;
    height: 205px;
    padding: 18px;
    border: 7px solid #18181b;
    border-radius: 18px;
    background: #f4f4f5;
    box-shadow: 0 30px 80px rgba(0,0,0,.14);
    transform: rotate(4deg);
}
.Hero-screen div {
    height: 12px;
    margin-bottom: 12px;
    border-radius: 999px;
    background: #d4d4d8;
}
.Hero-screen div:nth-child(2) {
    width: 65%;
}
.Hero-screen div:nth-child(3) {
    width: 85%;
}`,
  },
  {
    id: 2111,
    name: "Legendary Cosmic Hero",
    preview: (
      <section className="hero-2111">
        <div className="hero-2111__stars"></div>
        <div className="hero-2111__planet"></div>
        <div className="hero-2111__content">
          <span>
            <i className="fa-solid fa-meteor"></i> BEYOND LIMITS
          </span>
          <h1>Build among the stars.</h1>
          <p>Tools for teams with ideas too big for ordinary software.</p>
          <button>
            Launch your journey <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="Hero">
    <div class="Hero-stars"></div>
    <div class="Hero-planet"></div>
    <div class="Hero-content">
        <span><i class="fa-solid fa-meteor"></i> BEYOND LIMITS</span>
        <h1>Build among the stars.</h1>
        <p>Tools for teams with ideas too big for ordinary software.</p>
        <button>Launch your journey <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</section>`,
    css: `.Hero {
    position: relative;
    min-height: 400px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        radial-gradient(circle at 50% 50%,#312e81 0%,#111827 38%,#030712 80%);
    color: #fff;
}
.Hero-stars {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% 20%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 73% 18%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 86% 70%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 24% 75%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 55% 11%,#fff 0 1px,transparent 2px),
        radial-gradient(circle at 45% 83%,#fff 0 1px,transparent 2px);
    opacity: .8;
}
.Hero-planet {
    position: absolute;
    right: -70px;
    bottom: -130px;
    width: 330px;
    height: 330px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 35% 30%,#93c5fd,#4f46e5 42%,#1e1b4b 76%);
    box-shadow:
        0 0 70px rgba(99,102,241,.5),
        inset -35px -20px 50px rgba(0,0,0,.4);
}
.Hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
    padding: 50px 25px;
    text-align: center;
}
.Hero-content > span {
    color: #c4b5fd;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 3px;
}
.Hero h1 {
    margin: 20px 0 14px;
    font-size: clamp(46px,8vw,78px);
    line-height: .92;
    text-shadow: 0 0 30px rgba(165,180,252,.15);
}
.Hero p {
    max-width: 560px;
    margin: auto;
    color: #cbd5e1;
    line-height: 1.8;
}
.Hero button {
    margin-top: 27px;
    padding: 13px 20px;
    border: 1px solid rgba(196,181,253,.3);
    border-radius: 999px;
    background: rgba(129,140,248,.12);
    color: #ddd6fe;
    font-weight: 800;
    backdrop-filter: blur(8px);
}`,
  },

  {
    id: 3592,
    name: "Aurora SaaS Hero",
    preview: (
      <section className="hero-3592">
        <div className="hero-3592__glow hero-3592__glow-1"></div>
        <div className="hero-3592__glow hero-3592__glow-2"></div>

        <nav className="hero-3592__nav">
          <div className="hero-3592__brand">
            <span className="hero-3592__brand-icon">
              <i className="ri-shape-fill"></i>
            </span>
            <strong>Nova</strong>
          </div>

          <div className="hero-3592__nav-links">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
          </div>

          <button className="hero-3592__nav-button" type="button">
            Get started
          </button>
        </nav>

        <div className="hero-3592__content">
          <div className="hero-3592__copy">
            <div className="hero-3592__badge">
              <span></span>
              Built for modern teams
            </div>

            <h1>
              Build products
              <span> people remember.</span>
            </h1>

            <p>
              A modern platform for designing, launching and scaling digital
              products without slowing down your team.
            </p>

            <div className="hero-3592__actions">
              <button className="hero-3592__primary" type="button">
                Start building
                <i className="ri-arrow-right-line"></i>
              </button>

              <button className="hero-3592__secondary" type="button">
                <i className="ri-play-circle-line"></i>
                Watch demo
              </button>
            </div>

            <div className="hero-3592__proof">
              <div className="hero-3592__avatars">
                <span>A</span>
                <span>M</span>
                <span>J</span>
                <span>S</span>
              </div>

              <div>
                <strong>12,000+</strong>
                <span>creators already building</span>
              </div>
            </div>
          </div>

          <div className="hero-3592__visual">
            <div className="hero-3592__dashboard">
              <div className="hero-3592__dashboard-top">
                <div className="hero-3592__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="hero-3592__dashboard-title">
                  Product overview
                </span>

                <span className="hero-3592__live">
                  <span></span>
                  Live
                </span>
              </div>

              <div className="hero-3592__dashboard-body">
                <div className="hero-3592__sidebar">
                  <span className="hero-3592__sidebar-active">
                    <i className="ri-layout-grid-fill"></i>
                  </span>
                  <span>
                    <i className="ri-bar-chart-box-line"></i>
                  </span>
                  <span>
                    <i className="ri-team-line"></i>
                  </span>
                  <span>
                    <i className="ri-settings-3-line"></i>
                  </span>
                </div>

                <div className="hero-3592__main">
                  <div className="hero-3592__metric-row">
                    <div className="hero-3592__metric">
                      <span>Revenue</span>
                      <strong>$84.2K</strong>
                      <small>+18.4%</small>
                    </div>

                    <div className="hero-3592__metric">
                      <span>Customers</span>
                      <strong>8,429</strong>
                      <small>+12.8%</small>
                    </div>
                  </div>

                  <div className="hero-3592__chart">
                    <div className="hero-3592__chart-head">
                      <span>Performance</span>
                      <strong>+34.8%</strong>
                    </div>

                    <div className="hero-3592__bars">
                      <span style={{ height: "30%" }}></span>
                      <span style={{ height: "42%" }}></span>
                      <span style={{ height: "37%" }}></span>
                      <span style={{ height: "61%" }}></span>
                      <span style={{ height: "53%" }}></span>
                      <span style={{ height: "76%" }}></span>
                      <span style={{ height: "68%" }}></span>
                      <span style={{ height: "89%" }}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-3592__floating-card">
              <span className="hero-3592__floating-icon">
                <i className="ri-flashlight-fill"></i>
              </span>

              <div>
                <span>Automation</span>
                <strong>32 tasks completed</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3592">
    <div class="hero-3592__glow hero-3592__glow-1"></div>
    <div class="hero-3592__glow hero-3592__glow-2"></div>

    <nav class="hero-3592__nav">
        <div class="hero-3592__brand">
            <span class="hero-3592__brand-icon">
                <i class="ri-shape-fill"></i>
            </span>
            <strong>Nova</strong>
        </div>

        <div class="hero-3592__nav-links">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
        </div>

        <button class="hero-3592__nav-button" type="button">
            Get started
        </button>
    </nav>

    <div class="hero-3592__content">
        <div class="hero-3592__copy">
            <div class="hero-3592__badge">
                <span></span>
                Built for modern teams
            </div>

            <h1>
                Build products
                <span> people remember.</span>
            </h1>

            <p>
                A modern platform for designing, launching and scaling digital products without slowing down your team.
            </p>

            <div class="hero-3592__actions">
                <button class="hero-3592__primary" type="button">
                    Start building
                    <i class="ri-arrow-right-line"></i>
                </button>

                <button class="hero-3592__secondary" type="button">
                    <i class="ri-play-circle-line"></i>
                    Watch demo
                </button>
            </div>

            <div class="hero-3592__proof">
                <div class="hero-3592__avatars">
                    <span>A</span>
                    <span>M</span>
                    <span>J</span>
                    <span>S</span>
                </div>

                <div>
                    <strong>12,000+</strong>
                    <span>creators already building</span>
                </div>
            </div>
        </div>

        <div class="hero-3592__visual">
            <div class="hero-3592__dashboard">
                <div class="hero-3592__dashboard-top">
                    <div class="hero-3592__dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <span class="hero-3592__dashboard-title">
                        Product overview
                    </span>

                    <span class="hero-3592__live">
                        <span></span>
                        Live
                    </span>
                </div>

                <div class="hero-3592__dashboard-body">
                    <div class="hero-3592__sidebar">
                        <span class="hero-3592__sidebar-active">
                            <i class="ri-layout-grid-fill"></i>
                        </span>
                        <span>
                            <i class="ri-bar-chart-box-line"></i>
                        </span>
                        <span>
                            <i class="ri-team-line"></i>
                        </span>
                        <span>
                            <i class="ri-settings-3-line"></i>
                        </span>
                    </div>

                    <div class="hero-3592__main">
                        <div class="hero-3592__metric-row">
                            <div class="hero-3592__metric">
                                <span>Revenue</span>
                                <strong>$84.2K</strong>
                                <small>+18.4%</small>
                            </div>

                            <div class="hero-3592__metric">
                                <span>Customers</span>
                                <strong>8,429</strong>
                                <small>+12.8%</small>
                            </div>
                        </div>

                        <div class="hero-3592__chart">
                            <div class="hero-3592__chart-head">
                                <span>Performance</span>
                                <strong>+34.8%</strong>
                            </div>

                            <div class="hero-3592__bars">
                                <span style="height:30%"></span>
                                <span style="height:42%"></span>
                                <span style="height:37%"></span>
                                <span style="height:61%"></span>
                                <span style="height:53%"></span>
                                <span style="height:76%"></span>
                                <span style="height:68%"></span>
                                <span style="height:89%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-3592__floating-card">
                <span class="hero-3592__floating-icon">
                    <i class="ri-flashlight-fill"></i>
                </span>

                <div>
                    <span>Automation</span>
                    <strong>32 tasks completed</strong>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3592 {
    position: relative;
    width: 100%;
    min-height: 620px;
    overflow: hidden;
    padding: 24px 42px 54px;
    border-radius: 28px;
    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(124, 58, 237, .16),
            transparent 31%
        ),
        radial-gradient(
            circle at 90% 65%,
            rgba(6, 182, 212, .13),
            transparent 34%
        ),
        linear-gradient(
            145deg,
            #070812,
            #0b1020 55%,
            #080b16
        );
    color: #ffffff;
}

.hero-3592__glow {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(70px);
}

.hero-3592__glow-1 {
    width: 280px;
    height: 280px;
    left: -120px;
    top: 130px;
    background: rgba(124, 58, 237, .18);
}

.hero-3592__glow-2 {
    width: 330px;
    height: 330px;
    right: -130px;
    bottom: -80px;
    background: rgba(6, 182, 212, .12);
}

.hero-3592__nav {
    position: relative;
    z-index: 5;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
}

.hero-3592__brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.hero-3592__brand-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 10px;
    background:
        linear-gradient(
            135deg,
            rgba(124, 58, 237, .3),
            rgba(6, 182, 212, .18)
        );
    color: #c4b5fd;
}

.hero-3592__brand strong {
    font-size: 16px;
    letter-spacing: -.02em;
}

.hero-3592__nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
}

.hero-3592__nav-links a {
    color: #94a3b8;
    font-size: 12px;
    text-decoration: none;
    transition: color .2s ease;
}

.hero-3592__nav-links a:hover {
    color: #ffffff;
}

.hero-3592__nav-button {
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 10px;
    background: rgba(255, 255, 255, .05);
    color: #ffffff;
    font: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3592__content {
    position: relative;
    z-index: 3;
    max-width: 1180px;
    min-height: 510px;
    margin: 30px auto 0;
    display: grid;
    grid-template-columns: minmax(0, .92fr) minmax(420px, 1.08fr);
    align-items: center;
    gap: 58px;
}

.hero-3592__copy {
    max-width: 530px;
}

.hero-3592__badge {
    width: fit-content;
    margin-bottom: 20px;
    padding: 7px 11px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(167, 139, 250, .18);
    border-radius: 999px;
    background: rgba(124, 58, 237, .07);
    color: #c4b5fd;
    font-size: 9px;
    font-weight: 700;
}

.hero-3592__badge > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8b5cf6;
    box-shadow: 0 0 7px rgba(139, 92, 246, .7);
}

.hero-3592 h1 {
    margin: 0;
    color: #f8fafc;
    font-size: clamp(42px, 6vw, 72px);
    line-height: .98;
    letter-spacing: -.055em;
}

.hero-3592 h1 span {
    display: block;
    background:
        linear-gradient(
            90deg,
            #c4b5fd,
            #67e8f9
        );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-3592__copy > p {
    max-width: 470px;
    margin: 22px 0 0;
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.75;
}

.hero-3592__actions {
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.hero-3592__actions button {
    height: 43px;
    padding: 0 17px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 11px;
    font: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        border-color .2s ease,
        background .2s ease;
}

.hero-3592__actions button:hover {
    transform: translateY(-2px);
}

.hero-3592__primary {
    border: 0;
    background:
        linear-gradient(
            135deg,
            #8b5cf6,
            #6366f1
        );
    color: #ffffff;
    box-shadow:
        0 10px 25px rgba(99, 102, 241, .25);
}

.hero-3592__secondary {
    border: 1px solid rgba(255, 255, 255, .1);
    background: rgba(255, 255, 255, .03);
    color: #cbd5e1;
}

.hero-3592__proof {
    margin-top: 31px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.hero-3592__avatars {
    display: flex;
}

.hero-3592__avatars span {
    width: 27px;
    height: 27px;
    margin-left: -7px;
    display: grid;
    place-items: center;
    border: 2px solid #080b16;
    border-radius: 50%;
    background:
        linear-gradient(
            145deg,
            #1e293b,
            #334155
        );
    color: #cbd5e1;
    font-size: 8px;
    font-weight: 700;
}

.hero-3592__avatars span:first-child {
    margin-left: 0;
}

.hero-3592__proof > div:last-child {
    display: flex;
    flex-direction: column;
}

.hero-3592__proof strong {
    color: #e2e8f0;
    font-size: 10px;
}

.hero-3592__proof > div:last-child span {
    margin-top: 1px;
    color: #64748b;
    font-size: 8px;
}

.hero-3592__visual {
    position: relative;
}

.hero-3592__dashboard {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, .13);
    border-radius: 22px;
    background:
        linear-gradient(
            145deg,
            rgba(15, 23, 42, .96),
            rgba(8, 13, 27, .98)
        );
    box-shadow:
        0 35px 70px rgba(0, 0, 0, .38),
        inset 0 1px 0 rgba(255, 255, 255, .04);
    transform: perspective(1100px) rotateY(-5deg) rotateX(2deg);
    transition: transform .35s ease;
}

.hero-3592__visual:hover .hero-3592__dashboard {
    transform: perspective(1100px) rotateY(-2deg) rotateX(1deg) translateY(-4px);
}

.hero-3592__dashboard-top {
    height: 43px;
    padding: 0 13px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(148, 163, 184, .08);
}

.hero-3592__dots {
    display: flex;
    gap: 5px;
}

.hero-3592__dots span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #334155;
}

.hero-3592__dashboard-title {
    color: #64748b;
    font-size: 8px;
}

.hero-3592__live {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #4ade80;
    font-size: 7px;
}

.hero-3592__live > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 5px rgba(34, 197, 94, .7);
}

.hero-3592__dashboard-body {
    min-height: 330px;
    display: grid;
    grid-template-columns: 55px 1fr;
}

.hero-3592__sidebar {
    padding-top: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    border-right: 1px solid rgba(148, 163, 184, .07);
}

.hero-3592__sidebar > span {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #475569;
    font-size: 13px;
}

.hero-3592__sidebar-active {
    background: rgba(124, 58, 237, .12);
    color: #a78bfa !important;
}

.hero-3592__main {
    padding: 20px;
}

.hero-3592__metric-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.hero-3592__metric {
    padding: 15px;
    border: 1px solid rgba(148, 163, 184, .08);
    border-radius: 12px;
    background: rgba(255, 255, 255, .02);
}

.hero-3592__metric > span {
    display: block;
    color: #64748b;
    font-size: 8px;
}

.hero-3592__metric strong {
    display: block;
    margin-top: 6px;
    color: #e2e8f0;
    font-size: 20px;
}

.hero-3592__metric small {
    display: block;
    margin-top: 5px;
    color: #4ade80;
    font-size: 7px;
}

.hero-3592__chart {
    height: 175px;
    margin-top: 11px;
    padding: 15px;
    border: 1px solid rgba(148, 163, 184, .08);
    border-radius: 12px;
    background: rgba(255, 255, 255, .018);
}

.hero-3592__chart-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-3592__chart-head span {
    color: #64748b;
    font-size: 8px;
}

.hero-3592__chart-head strong {
    color: #67e8f9;
    font-size: 8px;
}

.hero-3592__bars {
    height: 118px;
    margin-top: 12px;
    display: flex;
    align-items: flex-end;
    gap: 7px;
}

.hero-3592__bars span {
    flex: 1;
    min-width: 5px;
    border-radius: 4px 4px 2px 2px;
    background:
        linear-gradient(
            180deg,
            #8b5cf6,
            #312e81
        );
}

.hero-3592__floating-card {
    position: absolute;
    right: -16px;
    bottom: 24px;
    padding: 11px 13px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid rgba(255, 255, 255, .11);
    border-radius: 12px;
    background: rgba(15, 23, 42, .88);
    box-shadow: 0 18px 30px rgba(0, 0, 0, .28);
    backdrop-filter: blur(12px);
}

.hero-3592__floating-icon {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(6, 182, 212, .11);
    color: #67e8f9;
}

.hero-3592__floating-card > div {
    display: flex;
    flex-direction: column;
}

.hero-3592__floating-card > div span {
    color: #64748b;
    font-size: 7px;
}

.hero-3592__floating-card > div strong {
    margin-top: 2px;
    color: #e2e8f0;
    font-size: 9px;
}

@media (max-width: 900px) {
    .hero-3592 {
        padding: 22px 24px 42px;
    }

    .hero-3592__nav-links {
        display: none;
    }

    .hero-3592__content {
        grid-template-columns: 1fr;
        gap: 42px;
    }

    .hero-3592__copy {
        max-width: 650px;
    }

    .hero-3592__visual {
        max-width: 620px;
    }
}

@media (max-width: 560px) {
    .hero-3592 {
        padding: 18px 16px 32px;
        border-radius: 20px;
    }

    .hero-3592__nav-button {
        display: none;
    }

    .hero-3592 h1 {
        font-size: 42px;
    }

    .hero-3592__actions {
        align-items: stretch;
        flex-direction: column;
    }

    .hero-3592__actions button {
        width: 100%;
    }

    .hero-3592__dashboard-body {
        grid-template-columns: 42px 1fr;
    }

    .hero-3592__main {
        padding: 12px;
    }

    .hero-3592__metric-row {
        grid-template-columns: 1fr;
    }

    .hero-3592__floating-card {
        display: none;
    }
}`,
  },
  {
    id: 3593,
    name: "Developer Studio Hero",
    preview: (
      <section className="hero-3593">
        <div className="hero-3593__topline">
          <div className="hero-3593__brand">
            <span>&lt;/&gt;</span>
            VOID STUDIO
          </div>

          <span className="hero-3593__availability">
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        <div className="hero-3593__main">
          <div className="hero-3593__copy">
            <span className="hero-3593__eyebrow">
              DIGITAL DESIGN + DEVELOPMENT
            </span>

            <h1>
              WE BUILD
              <span>LOUD</span>
              DIGITAL EXPERIENCES.
            </h1>

            <div className="hero-3593__bottom-copy">
              <p>
                Creative development for brands that want their digital presence
                to feel distinct, fast and unforgettable.
              </p>

              <button type="button">
                START A PROJECT
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
          </div>

          <div className="hero-3593__poster">
            <div className="hero-3593__poster-grid"></div>

            <span className="hero-3593__poster-label">
              SELECTED WORK / 2026
            </span>

            <div className="hero-3593__poster-shape">
              <span></span>
            </div>

            <div className="hero-3593__poster-type">
              <span>WEB</span>
              <strong>03</strong>
            </div>

            <div className="hero-3593__poster-footer">
              <span>CREATIVE DEV</span>
              <span>AMSTERDAM / NL</span>
            </div>
          </div>
        </div>

        <div className="hero-3593__ticker">
          <span>WEB DESIGN</span>
          <i></i>
          <span>CREATIVE DEVELOPMENT</span>
          <i></i>
          <span>INTERACTIVE EXPERIENCES</span>
          <i></i>
          <span>DIGITAL PRODUCTS</span>
        </div>
      </section>
    ),
    html: `<section class="hero-3593">
    <div class="hero-3593__topline">
        <div class="hero-3593__brand">
            <span>&lt;/&gt;</span>
            VOID STUDIO
        </div>

        <span class="hero-3593__availability">
            AVAILABLE FOR PROJECTS
        </span>
    </div>

    <div class="hero-3593__main">
        <div class="hero-3593__copy">
            <span class="hero-3593__eyebrow">
                DIGITAL DESIGN + DEVELOPMENT
            </span>

            <h1>
                WE BUILD
                <span>LOUD</span>
                DIGITAL EXPERIENCES.
            </h1>

            <div class="hero-3593__bottom-copy">
                <p>
                    Creative development for brands that want their digital presence to feel distinct, fast and unforgettable.
                </p>

                <button type="button">
                    START A PROJECT
                    <i class="ri-arrow-right-up-line"></i>
                </button>
            </div>
        </div>

        <div class="hero-3593__poster">
            <div class="hero-3593__poster-grid"></div>

            <span class="hero-3593__poster-label">
                SELECTED WORK / 2026
            </span>

            <div class="hero-3593__poster-shape">
                <span></span>
            </div>

            <div class="hero-3593__poster-type">
                <span>WEB</span>
                <strong>03</strong>
            </div>

            <div class="hero-3593__poster-footer">
                <span>CREATIVE DEV</span>
                <span>AMSTERDAM / NL</span>
            </div>
        </div>
    </div>

    <div class="hero-3593__ticker">
        <span>WEB DESIGN</span>
        <i></i>
        <span>CREATIVE DEVELOPMENT</span>
        <i></i>
        <span>INTERACTIVE EXPERIENCES</span>
        <i></i>
        <span>DIGITAL PRODUCTS</span>
    </div>
</section>`,
    css: `.hero-3593 {
    width: 100%;
    overflow: hidden;
    border: 1px solid #222222;
    border-radius: 18px;
    background: #efefea;
    color: #111111;
}

.hero-3593__topline {
    min-height: 64px;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #161616;
}

.hero-3593__brand {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .08em;
}

.hero-3593__brand span {
    color: #ff3d00;
    font-family: monospace;
    font-size: 14px;
}

.hero-3593__availability {
    padding: 7px 10px;
    border: 1px solid #111111;
    border-radius: 999px;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .14em;
}

.hero-3593__main {
    min-height: 520px;
    display: grid;
    grid-template-columns: 1.25fr .75fr;
}

.hero-3593__copy {
    padding: 48px 36px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #161616;
}

.hero-3593__eyebrow {
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .2em;
}

.hero-3593 h1 {
    max-width: 690px;
    margin: 45px 0;
    font-size: clamp(56px, 8vw, 108px);
    line-height: .81;
    letter-spacing: -.075em;
    font-weight: 950;
}

.hero-3593 h1 span {
    color: #ff3d00;
}

.hero-3593__bottom-copy {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 35px;
}

.hero-3593__bottom-copy p {
    max-width: 360px;
    margin: 0;
    color: #444444;
    font-size: 11px;
    line-height: 1.7;
}

.hero-3593__bottom-copy button {
    height: 45px;
    padding: 0 17px;
    display: inline-flex;
    align-items: center;
    gap: 18px;
    border: 1px solid #111111;
    background: #111111;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .1em;
    cursor: pointer;
    transition:
        background .2s ease,
        color .2s ease,
        transform .2s ease;
}

.hero-3593__bottom-copy button:hover {
    transform: translateY(-2px);
    background: #ff3d00;
    color: #ffffff;
}

.hero-3593__poster {
    position: relative;
    overflow: hidden;
    min-height: 520px;
    background: #111111;
    color: #ffffff;
}

.hero-3593__poster-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            rgba(255, 255, 255, .045) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, .045) 1px,
            transparent 1px
        );
    background-size: 36px 36px;
}

.hero-3593__poster-label {
    position: absolute;
    left: 24px;
    top: 22px;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .18em;
}

.hero-3593__poster-shape {
    position: absolute;
    width: 230px;
    height: 230px;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%) rotate(45deg);
    border: 3px solid #ff3d00;
}

.hero-3593__poster-shape::before {
    content: "";
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(255, 255, 255, .45);
}

.hero-3593__poster-shape span {
    position: absolute;
    inset: 52px;
    background: #ff3d00;
}

.hero-3593__poster-type {
    position: absolute;
    left: 25px;
    bottom: 63px;
    display: flex;
    align-items: flex-end;
    gap: 12px;
}

.hero-3593__poster-type span {
    font-size: 25px;
    font-weight: 950;
    letter-spacing: -.05em;
}

.hero-3593__poster-type strong {
    color: #ff3d00;
    font-size: 10px;
}

.hero-3593__poster-footer {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 22px;
    display: flex;
    justify-content: space-between;
    color: #737373;
    font-size: 6px;
    letter-spacing: .14em;
}

.hero-3593__ticker {
    min-height: 47px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    overflow: hidden;
    border-top: 1px solid #111111;
    background: #ff3d00;
    color: #111111;
}

.hero-3593__ticker span {
    white-space: nowrap;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .08em;
}

.hero-3593__ticker i {
    width: 5px;
    height: 5px;
    flex: 0 0 5px;
    border-radius: 50%;
    background: #111111;
}

@media (max-width: 850px) {
    .hero-3593__main {
        grid-template-columns: 1fr;
    }

    .hero-3593__copy {
        border-right: 0;
        border-bottom: 1px solid #161616;
    }

    .hero-3593__poster {
        min-height: 430px;
    }
}

@media (max-width: 560px) {
    .hero-3593__topline {
        padding: 0 16px;
    }

    .hero-3593__availability {
        display: none;
    }

    .hero-3593__copy {
        padding: 34px 20px 28px;
    }

    .hero-3593 h1 {
        margin: 38px 0;
        font-size: 60px;
    }

    .hero-3593__bottom-copy {
        align-items: stretch;
        flex-direction: column;
    }

    .hero-3593__bottom-copy button {
        width: fit-content;
    }

    .hero-3593__ticker {
        justify-content: flex-start;
    }
}`,
  },
  {
    id: 3594,
    name: "AI Command Hero",
    preview: (
      <section className="hero-3594">
        <div className="hero-3594__grid"></div>

        <div className="hero-3594__header">
          <div className="hero-3594__logo">
            <span>
              <i className="ri-command-fill"></i>
            </span>
            Axiom
          </div>

          <div className="hero-3594__nav">
            <a href="#platform">Platform</a>
            <a href="#models">Models</a>
            <a href="#developers">Developers</a>
          </div>

          <button type="button">Launch console</button>
        </div>

        <div className="hero-3594__content">
          <div className="hero-3594__copy">
            <div className="hero-3594__status">
              <span></span>
              AXIOM CORE V4 ONLINE
            </div>

            <h1>
              Intelligence
              <span>at command.</span>
            </h1>

            <p>
              Build, orchestrate and deploy intelligent workflows from one
              high-performance developer platform.
            </p>

            <div className="hero-3594__actions">
              <button className="hero-3594__primary" type="button">
                Start building
                <i className="ri-arrow-right-line"></i>
              </button>

              <button className="hero-3594__ghost" type="button">
                Read documentation
              </button>
            </div>

            <div className="hero-3594__stats">
              <div>
                <strong>24ms</strong>
                <span>AVG LATENCY</span>
              </div>

              <div>
                <strong>99.99%</strong>
                <span>UPTIME</span>
              </div>

              <div>
                <strong>14.2B</strong>
                <span>TOKENS / DAY</span>
              </div>
            </div>
          </div>

          <div className="hero-3594__terminal">
            <div className="hero-3594__terminal-head">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>axiom / workflow.ts</span>

              <i className="ri-more-fill"></i>
            </div>

            <div className="hero-3594__terminal-body">
              <div className="hero-3594__line">
                <span>01</span>
                <code>
                  <b>const</b> agent = <em>axiom.create</em>({"{"}
                </code>
              </div>

              <div className="hero-3594__line">
                <span>02</span>
                <code>
                  &nbsp;&nbsp;model: <strong>"axiom-v4"</strong>,
                </code>
              </div>

              <div className="hero-3594__line">
                <span>03</span>
                <code>
                  &nbsp;&nbsp;mode: <strong>"autonomous"</strong>,
                </code>
              </div>

              <div className="hero-3594__line">
                <span>04</span>
                <code>{"});"}</code>
              </div>

              <div className="hero-3594__line hero-3594__line-muted">
                <span>05</span>
                <code></code>
              </div>

              <div className="hero-3594__line">
                <span>06</span>
                <code>
                  <b>await</b> agent.run(
                </code>
              </div>

              <div className="hero-3594__line">
                <span>07</span>
                <code>
                  &nbsp;&nbsp;<strong>"Analyze customer activity"</strong>
                </code>
              </div>

              <div className="hero-3594__line">
                <span>08</span>
                <code>);</code>
              </div>
            </div>

            <div className="hero-3594__terminal-result">
              <div>
                <span className="hero-3594__terminal-dot"></span>
                Workflow complete
              </div>

              <strong>1.42s</strong>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3594">
    <div class="hero-3594__grid"></div>

    <div class="hero-3594__header">
        <div class="hero-3594__logo">
            <span>
                <i class="ri-command-fill"></i>
            </span>
            Axiom
        </div>

        <div class="hero-3594__nav">
            <a href="#platform">Platform</a>
            <a href="#models">Models</a>
            <a href="#developers">Developers</a>
        </div>

        <button type="button">Launch console</button>
    </div>

    <div class="hero-3594__content">
        <div class="hero-3594__copy">
            <div class="hero-3594__status">
                <span></span>
                AXIOM CORE V4 ONLINE
            </div>

            <h1>
                Intelligence
                <span>at command.</span>
            </h1>

            <p>
                Build, orchestrate and deploy intelligent workflows from one high-performance developer platform.
            </p>

            <div class="hero-3594__actions">
                <button class="hero-3594__primary" type="button">
                    Start building
                    <i class="ri-arrow-right-line"></i>
                </button>

                <button class="hero-3594__ghost" type="button">
                    Read documentation
                </button>
            </div>

            <div class="hero-3594__stats">
                <div>
                    <strong>24ms</strong>
                    <span>AVG LATENCY</span>
                </div>

                <div>
                    <strong>99.99%</strong>
                    <span>UPTIME</span>
                </div>

                <div>
                    <strong>14.2B</strong>
                    <span>TOKENS / DAY</span>
                </div>
            </div>
        </div>

        <div class="hero-3594__terminal">
            <div class="hero-3594__terminal-head">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <span>axiom / workflow.ts</span>

                <i class="ri-more-fill"></i>
            </div>

            <div class="hero-3594__terminal-body">
                <div class="hero-3594__line">
                    <span>01</span>
                    <code><b>const</b> agent = <em>axiom.create</em>({</code>
                </div>

                <div class="hero-3594__line">
                    <span>02</span>
                    <code>&nbsp;&nbsp;model: <strong>"axiom-v4"</strong>,</code>
                </div>

                <div class="hero-3594__line">
                    <span>03</span>
                    <code>&nbsp;&nbsp;mode: <strong>"autonomous"</strong>,</code>
                </div>

                <div class="hero-3594__line">
                    <span>04</span>
                    <code>});</code>
                </div>

                <div class="hero-3594__line hero-3594__line-muted">
                    <span>05</span>
                    <code></code>
                </div>

                <div class="hero-3594__line">
                    <span>06</span>
                    <code><b>await</b> agent.run(</code>
                </div>

                <div class="hero-3594__line">
                    <span>07</span>
                    <code>&nbsp;&nbsp;<strong>"Analyze customer activity"</strong></code>
                </div>

                <div class="hero-3594__line">
                    <span>08</span>
                    <code>);</code>
                </div>
            </div>

            <div class="hero-3594__terminal-result">
                <div>
                    <span class="hero-3594__terminal-dot"></span>
                    Workflow complete
                </div>

                <strong>1.42s</strong>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3594 {
    position: relative;
    width: 100%;
    min-height: 620px;
    overflow: hidden;
    padding: 25px 40px 55px;
    border: 1px solid rgba(56, 189, 248, .16);
    border-radius: 25px;
    background:
        radial-gradient(
            circle at 75% 50%,
            rgba(8, 145, 178, .12),
            transparent 32%
        ),
        #03070b;
    color: #ffffff;
}

.hero-3594__grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            rgba(56, 189, 248, .035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(56, 189, 248, .035) 1px,
            transparent 1px
        );
    background-size: 44px 44px;
    mask-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, .8),
            transparent
        );
}

.hero-3594__header {
    position: relative;
    z-index: 4;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-3594__logo {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #e0f2fe;
    font-size: 15px;
    font-weight: 800;
}

.hero-3594__logo > span {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(56, 189, 248, .18);
    border-radius: 8px;
    background: rgba(56, 189, 248, .06);
    color: #38bdf8;
}

.hero-3594__nav {
    display: flex;
    gap: 28px;
}

.hero-3594__nav a {
    color: #64748b;
    font-size: 11px;
    text-decoration: none;
}

.hero-3594__nav a:hover {
    color: #bae6fd;
}

.hero-3594__header > button {
    height: 36px;
    padding: 0 13px;
    border: 1px solid rgba(56, 189, 248, .22);
    border-radius: 8px;
    background: rgba(14, 165, 233, .06);
    color: #bae6fd;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3594__content {
    position: relative;
    z-index: 3;
    max-width: 1180px;
    min-height: 510px;
    margin: 34px auto 0;
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(410px, 1.05fr);
    align-items: center;
    gap: 58px;
}

.hero-3594__status {
    width: fit-content;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #38bdf8;
    font-family: monospace;
    font-size: 8px;
    letter-spacing: .12em;
}

.hero-3594__status span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 7px #22c55e;
}

.hero-3594 h1 {
    margin: 0;
    max-width: 580px;
    color: #f8fafc;
    font-size: clamp(46px, 7vw, 79px);
    line-height: .96;
    letter-spacing: -.055em;
}

.hero-3594 h1 span {
    display: block;
    color: #38bdf8;
}

.hero-3594__copy > p {
    max-width: 490px;
    margin: 23px 0 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.75;
}

.hero-3594__actions {
    margin-top: 27px;
    display: flex;
    gap: 9px;
}

.hero-3594__actions button {
    height: 42px;
    padding: 0 15px;
    border-radius: 9px;
    font: inherit;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: transform .2s ease;
}

.hero-3594__actions button:hover {
    transform: translateY(-2px);
}

.hero-3594__primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #0ea5e9;
    background: #0ea5e9;
    color: #001018;
    box-shadow:
        0 9px 25px rgba(14, 165, 233, .2);
}

.hero-3594__ghost {
    border: 1px solid rgba(148, 163, 184, .13);
    background: rgba(255, 255, 255, .025);
    color: #94a3b8;
}

.hero-3594__stats {
    margin-top: 37px;
    display: flex;
    gap: 35px;
}

.hero-3594__stats > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.hero-3594__stats strong {
    color: #e0f2fe;
    font-family: monospace;
    font-size: 14px;
}

.hero-3594__stats span {
    color: #475569;
    font-family: monospace;
    font-size: 6px;
    letter-spacing: .12em;
}

.hero-3594__terminal {
    overflow: hidden;
    border: 1px solid rgba(56, 189, 248, .16);
    border-radius: 16px;
    background:
        linear-gradient(
            145deg,
            rgba(5, 15, 24, .98),
            rgba(2, 8, 14, .98)
        );
    box-shadow:
        0 32px 70px rgba(0, 0, 0, .4),
        0 0 35px rgba(14, 165, 233, .05);
}

.hero-3594__terminal-head {
    height: 43px;
    padding: 0 13px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(56, 189, 248, .08);
}

.hero-3594__terminal-head > div {
    display: flex;
    gap: 5px;
}

.hero-3594__terminal-head > div span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1e293b;
}

.hero-3594__terminal-head > span {
    color: #475569;
    font-family: monospace;
    font-size: 7px;
}

.hero-3594__terminal-head > i {
    justify-self: end;
    color: #334155;
}

.hero-3594__terminal-body {
    padding: 19px 0;
}

.hero-3594__line {
    min-height: 29px;
    display: grid;
    grid-template-columns: 37px 1fr;
    align-items: center;
}

.hero-3594__line > span {
    padding-right: 10px;
    color: #1e3a4b;
    font-family: monospace;
    font-size: 8px;
    text-align: right;
}

.hero-3594__line code {
    padding-left: 14px;
    border-left: 1px solid rgba(56, 189, 248, .06);
    color: #94a3b8;
    font-size: 10px;
}

.hero-3594__line code b {
    color: #c084fc;
    font-weight: 500;
}

.hero-3594__line code em {
    color: #38bdf8;
    font-style: normal;
}

.hero-3594__line code strong {
    color: #86efac;
    font-weight: 500;
}

.hero-3594__line-muted {
    opacity: .3;
}

.hero-3594__terminal-result {
    min-height: 47px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(56, 189, 248, .08);
    background: rgba(34, 197, 94, .025);
}

.hero-3594__terminal-result > div {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #6ee7b7;
    font-family: monospace;
    font-size: 8px;
}

.hero-3594__terminal-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 6px rgba(34, 197, 94, .7);
}

.hero-3594__terminal-result strong {
    color: #475569;
    font-family: monospace;
    font-size: 8px;
}

@media (max-width: 900px) {
    .hero-3594 {
        padding: 22px 24px 45px;
    }

    .hero-3594__nav {
        display: none;
    }

    .hero-3594__content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .hero-3594__terminal {
        max-width: 620px;
    }
}

@media (max-width: 560px) {
    .hero-3594 {
        padding: 18px 15px 32px;
    }

    .hero-3594__header > button {
        display: none;
    }

    .hero-3594 h1 {
        font-size: 47px;
    }

    .hero-3594__actions {
        flex-direction: column;
    }

    .hero-3594__actions button {
        width: 100%;
    }

    .hero-3594__stats {
        gap: 17px;
        justify-content: space-between;
    }
}`,
  },
  {
    id: 3595,
    name: "Luxury Editorial Hero",
    preview: (
      <section className="hero-3595">
        <header className="hero-3595__header">
          <div className="hero-3595__logo">MONO</div>

          <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
          </nav>

          <button type="button">
            Menu
            <span></span>
          </button>
        </header>

        <div className="hero-3595__content">
          <div className="hero-3595__intro">
            <span>INDEPENDENT CREATIVE STUDIO</span>

            <p>
              Strategy, identity and digital experiences for ambitious global
              brands.
            </p>
          </div>

          <div className="hero-3595__headline">
            <h1>
              Ideas made
              <em>visible.</em>
            </h1>
          </div>

          <div className="hero-3595__feature">
            <div className="hero-3595__image">
              <div className="hero-3595__image-shape"></div>

              <span className="hero-3595__image-number">01</span>

              <div className="hero-3595__image-caption">
                <span>SELECTED PROJECT</span>
                <strong>Atelier No. 7</strong>
              </div>
            </div>

            <div className="hero-3595__project">
              <span>FEATURED WORK / 2026</span>

              <h2>
                Identity built with
                <br />
                intention.
              </h2>

              <p>
                A refined visual system balancing editorial restraint with
                contemporary digital interaction.
              </p>

              <a href="#project">
                View project
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3595">
    <header class="hero-3595__header">
        <div class="hero-3595__logo">MONO</div>

        <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
        </nav>

        <button type="button">
            Menu
            <span></span>
        </button>
    </header>

    <div class="hero-3595__content">
        <div class="hero-3595__intro">
            <span>INDEPENDENT CREATIVE STUDIO</span>

            <p>
                Strategy, identity and digital experiences for ambitious global brands.
            </p>
        </div>

        <div class="hero-3595__headline">
            <h1>
                Ideas made
                <em>visible.</em>
            </h1>
        </div>

        <div class="hero-3595__feature">
            <div class="hero-3595__image">
                <div class="hero-3595__image-shape"></div>

                <span class="hero-3595__image-number">01</span>

                <div class="hero-3595__image-caption">
                    <span>SELECTED PROJECT</span>
                    <strong>Atelier No. 7</strong>
                </div>
            </div>

            <div class="hero-3595__project">
                <span>FEATURED WORK / 2026</span>

                <h2>
                    Identity built with
                    <br>
                    intention.
                </h2>

                <p>
                    A refined visual system balancing editorial restraint with contemporary digital interaction.
                </p>

                <a href="#project">
                    View project
                    <i class="ri-arrow-right-up-line"></i>
                </a>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3595 {
    width: 100%;
    min-height: 670px;
    overflow: hidden;
    border-radius: 24px;
    background: #f3f0e9;
    color: #171717;
}

.hero-3595__header {
    min-height: 70px;
    padding: 0 34px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(23, 23, 23, .13);
}

.hero-3595__logo {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: .18em;
}

.hero-3595__header nav {
    display: flex;
    gap: 27px;
}

.hero-3595__header nav a {
    color: #44403c;
    font-size: 10px;
    text-decoration: none;
}

.hero-3595__header nav a:hover {
    color: #000000;
}

.hero-3595__header button {
    justify-self: end;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    background: transparent;
    color: #171717;
    font: inherit;
    font-size: 10px;
    cursor: pointer;
}

.hero-3595__header button span {
    width: 18px;
    height: 1px;
    background: #171717;
    box-shadow: 0 5px 0 #171717;
}

.hero-3595__content {
    padding: 30px 34px 36px;
}

.hero-3595__intro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
}

.hero-3595__intro > span {
    color: #78716c;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .18em;
}

.hero-3595__intro p {
    max-width: 310px;
    margin: 0;
    color: #57534e;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3595__headline {
    margin-top: 35px;
}

.hero-3595 h1 {
    margin: 0;
    font-family: Georgia, serif;
    font-size: clamp(67px, 11vw, 145px);
    line-height: .78;
    letter-spacing: -.075em;
    font-weight: 400;
}

.hero-3595 h1 em {
    display: block;
    margin-left: 16%;
    color: #8d543a;
    font-weight: 400;
}

.hero-3595__feature {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    min-height: 260px;
    border-top: 1px solid rgba(23, 23, 23, .15);
}

.hero-3595__image {
    position: relative;
    overflow: hidden;
    min-height: 270px;
    margin-top: 20px;
    background:
        linear-gradient(
            145deg,
            #d6d3d1,
            #b7afa6
        );
}

.hero-3595__image::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            135deg,
            rgba(255, 255, 255, .2),
            transparent 45%
        );
}

.hero-3595__image-shape {
    position: absolute;
    width: 230px;
    height: 230px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(24deg);
    border-radius: 50% 10% 45% 20%;
    background: #8d543a;
    opacity: .85;
    transition:
        transform .35s ease,
        border-radius .35s ease;
}

.hero-3595__image:hover .hero-3595__image-shape {
    transform: translate(-50%, -50%) rotate(30deg) scale(1.04);
    border-radius: 30% 50% 20% 50%;
}

.hero-3595__image-number {
    position: absolute;
    left: 15px;
    top: 14px;
    color: rgba(23, 23, 23, .55);
    font-size: 8px;
}

.hero-3595__image-caption {
    position: absolute;
    left: 15px;
    bottom: 14px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.hero-3595__image-caption span {
    color: rgba(23, 23, 23, .55);
    font-size: 6px;
    letter-spacing: .16em;
}

.hero-3595__image-caption strong {
    font-family: Georgia, serif;
    font-size: 14px;
    font-weight: 400;
}

.hero-3595__project {
    padding: 30px 0 0 35px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.hero-3595__project > span {
    color: #78716c;
    font-size: 7px;
    letter-spacing: .15em;
}

.hero-3595__project h2 {
    margin: 32px 0 0;
    font-family: Georgia, serif;
    font-size: 28px;
    line-height: 1.05;
    font-weight: 400;
}

.hero-3595__project p {
    max-width: 280px;
    margin: 20px 0 0;
    color: #78716c;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3595__project a {
    margin-top: auto;
    padding-bottom: 4px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #171717;
    color: #171717;
    font-size: 9px;
    text-decoration: none;
}

@media (max-width: 780px) {
    .hero-3595__header {
        grid-template-columns: 1fr auto;
    }

    .hero-3595__header nav {
        display: none;
    }

    .hero-3595 h1 em {
        margin-left: 8%;
    }

    .hero-3595__feature {
        grid-template-columns: 1fr;
    }

    .hero-3595__project {
        padding: 28px 0 0;
        min-height: 230px;
    }
}

@media (max-width: 520px) {
    .hero-3595__header {
        padding: 0 18px;
    }

    .hero-3595__content {
        padding: 24px 18px 28px;
    }

    .hero-3595__intro {
        flex-direction: column;
    }

    .hero-3595 h1 {
        font-size: 72px;
    }

    .hero-3595 h1 em {
        margin-left: 0;
    }
}`,
  },
  {
    id: 3596,
    name: "Product Launch Hero",
    preview: (
      <section className="hero-3596">
        <div className="hero-3596__noise"></div>

        <nav className="hero-3596__nav">
          <div className="hero-3596__logo">
            <span className="hero-3596__logo-mark"></span>
            orbit
          </div>

          <div className="hero-3596__links">
            <a href="#product">Product</a>
            <a href="#customers">Customers</a>
            <a href="#company">Company</a>
          </div>

          <button type="button">
            Join waitlist
            <i className="ri-arrow-right-line"></i>
          </button>
        </nav>

        <div className="hero-3596__main">
          <div className="hero-3596__copy">
            <div className="hero-3596__announcement">
              <span>NEW</span>
              Orbit 2.0 is now in private beta
              <i className="ri-arrow-right-s-line"></i>
            </div>

            <h1>
              One workspace.
              <span>Zero chaos.</span>
            </h1>

            <p>
              Organize projects, conversations and decisions in one focused
              workspace built for teams that move fast.
            </p>

            <form className="hero-3596__form">
              <div>
                <i className="ri-mail-line"></i>
                <input type="email" placeholder="you@company.com" />
              </div>

              <button type="button">Request access</button>
            </form>

            <div className="hero-3596__trust">
              <span>No credit card</span>
              <i></i>
              <span>Free during beta</span>
              <i></i>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="hero-3596__product">
            <div className="hero-3596__window">
              <div className="hero-3596__window-bar">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <strong>Orbit Workspace</strong>

                <button type="button">
                  <i className="ri-add-line"></i>
                </button>
              </div>

              <div className="hero-3596__window-body">
                <aside>
                  <div className="hero-3596__workspace">
                    <span>O</span>
                    <div>
                      <strong>Orbit Studio</strong>
                      <small>12 members</small>
                    </div>
                  </div>

                  <div className="hero-3596__menu">
                    <span className="hero-3596__menu-active">
                      <i className="ri-home-5-line"></i>
                      Home
                    </span>

                    <span>
                      <i className="ri-checkbox-multiple-line"></i>
                      Projects
                    </span>

                    <span>
                      <i className="ri-chat-3-line"></i>
                      Messages
                    </span>

                    <span>
                      <i className="ri-folder-3-line"></i>
                      Files
                    </span>
                  </div>
                </aside>

                <main>
                  <div className="hero-3596__main-head">
                    <div>
                      <span>GOOD MORNING</span>
                      <strong>Team overview</strong>
                    </div>

                    <button type="button">
                      <i className="ri-add-line"></i>
                      New task
                    </button>
                  </div>

                  <div className="hero-3596__cards">
                    <div>
                      <span>In progress</span>
                      <strong>24</strong>
                      <small>8 due this week</small>
                    </div>

                    <div>
                      <span>Completed</span>
                      <strong>138</strong>
                      <small>+19 this month</small>
                    </div>

                    <div>
                      <span>Team activity</span>
                      <strong>87%</strong>
                      <small>Highly active</small>
                    </div>
                  </div>

                  <div className="hero-3596__tasks">
                    <div className="hero-3596__task-head">
                      <span>Recent tasks</span>
                      <button type="button">View all</button>
                    </div>

                    <div className="hero-3596__task">
                      <span className="hero-3596__check"></span>
                      <div>
                        <strong>Finalize homepage design</strong>
                        <small>Website redesign</small>
                      </div>
                      <span className="hero-3596__person">AM</span>
                    </div>

                    <div className="hero-3596__task">
                      <span className="hero-3596__check"></span>
                      <div>
                        <strong>Prepare launch assets</strong>
                        <small>Marketing campaign</small>
                      </div>
                      <span className="hero-3596__person">JS</span>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className="hero-3596__notification">
              <span>
                <i className="ri-check-line"></i>
              </span>

              <div>
                <strong>Project updated</strong>
                <small>3 tasks completed</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3596">
    <div class="hero-3596__noise"></div>

    <nav class="hero-3596__nav">
        <div class="hero-3596__logo">
            <span class="hero-3596__logo-mark"></span>
            orbit
        </div>

        <div class="hero-3596__links">
            <a href="#product">Product</a>
            <a href="#customers">Customers</a>
            <a href="#company">Company</a>
        </div>

        <button type="button">
            Join waitlist
            <i class="ri-arrow-right-line"></i>
        </button>
    </nav>

    <div class="hero-3596__main">
        <div class="hero-3596__copy">
            <div class="hero-3596__announcement">
                <span>NEW</span>
                Orbit 2.0 is now in private beta
                <i class="ri-arrow-right-s-line"></i>
            </div>

            <h1>
                One workspace.
                <span>Zero chaos.</span>
            </h1>

            <p>
                Organize projects, conversations and decisions in one focused workspace built for teams that move fast.
            </p>

            <form class="hero-3596__form">
                <div>
                    <i class="ri-mail-line"></i>
                    <input type="email" placeholder="you@company.com">
                </div>

                <button type="button">Request access</button>
            </form>

            <div class="hero-3596__trust">
                <span>No credit card</span>
                <i></i>
                <span>Free during beta</span>
                <i></i>
                <span>Cancel anytime</span>
            </div>
        </div>

        <div class="hero-3596__product">
            <div class="hero-3596__window">
                <div class="hero-3596__window-bar">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <strong>Orbit Workspace</strong>

                    <button type="button">
                        <i class="ri-add-line"></i>
                    </button>
                </div>

                <div class="hero-3596__window-body">
                    <aside>
                        <div class="hero-3596__workspace">
                            <span>O</span>
                            <div>
                                <strong>Orbit Studio</strong>
                                <small>12 members</small>
                            </div>
                        </div>

                        <div class="hero-3596__menu">
                            <span class="hero-3596__menu-active">
                                <i class="ri-home-5-line"></i>
                                Home
                            </span>

                            <span>
                                <i class="ri-checkbox-multiple-line"></i>
                                Projects
                            </span>

                            <span>
                                <i class="ri-chat-3-line"></i>
                                Messages
                            </span>

                            <span>
                                <i class="ri-folder-3-line"></i>
                                Files
                            </span>
                        </div>
                    </aside>

                    <main>
                        <div class="hero-3596__main-head">
                            <div>
                                <span>GOOD MORNING</span>
                                <strong>Team overview</strong>
                            </div>

                            <button type="button">
                                <i class="ri-add-line"></i>
                                New task
                            </button>
                        </div>

                        <div class="hero-3596__cards">
                            <div>
                                <span>In progress</span>
                                <strong>24</strong>
                                <small>8 due this week</small>
                            </div>

                            <div>
                                <span>Completed</span>
                                <strong>138</strong>
                                <small>+19 this month</small>
                            </div>

                            <div>
                                <span>Team activity</span>
                                <strong>87%</strong>
                                <small>Highly active</small>
                            </div>
                        </div>

                        <div class="hero-3596__tasks">
                            <div class="hero-3596__task-head">
                                <span>Recent tasks</span>
                                <button type="button">View all</button>
                            </div>

                            <div class="hero-3596__task">
                                <span class="hero-3596__check"></span>
                                <div>
                                    <strong>Finalize homepage design</strong>
                                    <small>Website redesign</small>
                                </div>
                                <span class="hero-3596__person">AM</span>
                            </div>

                            <div class="hero-3596__task">
                                <span class="hero-3596__check"></span>
                                <div>
                                    <strong>Prepare launch assets</strong>
                                    <small>Marketing campaign</small>
                                </div>
                                <span class="hero-3596__person">JS</span>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div class="hero-3596__notification">
                <span>
                    <i class="ri-check-line"></i>
                </span>

                <div>
                    <strong>Project updated</strong>
                    <small>3 tasks completed</small>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3596 {
    position: relative;
    width: 100%;
    min-height: 640px;
    overflow: hidden;
    padding: 24px 38px 52px;
    border-radius: 27px;
    background:
        radial-gradient(
            circle at 82% 42%,
            rgba(99, 102, 241, .12),
            transparent 35%
        ),
        linear-gradient(
            145deg,
            #0f1017,
            #151722
        );
    color: #ffffff;
}

.hero-3596__noise {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .18;
    background-image:
        radial-gradient(
            rgba(255, 255, 255, .16) .5px,
            transparent .5px
        );
    background-size: 7px 7px;
}

.hero-3596__nav {
    position: relative;
    z-index: 5;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-3596__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #f8fafc;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -.02em;
}

.hero-3596__logo-mark {
    width: 18px;
    height: 18px;
    border: 5px solid #818cf8;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(129, 140, 248, .4);
}

.hero-3596__links {
    display: flex;
    gap: 28px;
}

.hero-3596__links a {
    color: #71717a;
    font-size: 10px;
    text-decoration: none;
}

.hero-3596__links a:hover {
    color: #d4d4d8;
}

.hero-3596__nav > button {
    height: 37px;
    padding: 0 13px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 9px;
    background: rgba(255, 255, 255, .04);
    color: #e4e4e7;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3596__main {
    position: relative;
    z-index: 3;
    max-width: 1180px;
    min-height: 530px;
    margin: 34px auto 0;
    display: grid;
    grid-template-columns: minmax(0, .85fr) minmax(440px, 1.15fr);
    align-items: center;
    gap: 52px;
}

.hero-3596__announcement {
    width: fit-content;
    margin-bottom: 20px;
    padding: 6px 9px 6px 6px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(129, 140, 248, .16);
    border-radius: 999px;
    background: rgba(99, 102, 241, .05);
    color: #a1a1aa;
    font-size: 8px;
}

.hero-3596__announcement > span {
    padding: 4px 6px;
    border-radius: 999px;
    background: #6366f1;
    color: #ffffff;
    font-size: 6px;
    font-weight: 800;
    letter-spacing: .07em;
}

.hero-3596__announcement i {
    color: #818cf8;
}

.hero-3596 h1 {
    margin: 0;
    max-width: 580px;
    font-size: clamp(47px, 7vw, 82px);
    line-height: .96;
    letter-spacing: -.06em;
}

.hero-3596 h1 span {
    display: block;
    color: #818cf8;
}

.hero-3596__copy > p {
    max-width: 500px;
    margin: 23px 0 0;
    color: #71717a;
    font-size: 13px;
    line-height: 1.75;
}

.hero-3596__form {
    max-width: 470px;
    margin-top: 27px;
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5px;
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 12px;
    background: rgba(255, 255, 255, .025);
}

.hero-3596__form > div {
    min-width: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.hero-3596__form i {
    color: #52525b;
}

.hero-3596__form input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: #e4e4e7;
    font: inherit;
    font-size: 10px;
}

.hero-3596__form input::placeholder {
    color: #52525b;
}

.hero-3596__form button {
    height: 38px;
    padding: 0 13px;
    border: 0;
    border-radius: 8px;
    background: #6366f1;
    color: #ffffff;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3596__trust {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #52525b;
    font-size: 7px;
}

.hero-3596__trust i {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #3f3f46;
}

.hero-3596__product {
    position: relative;
}

.hero-3596__window {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 18px;
    background: #11131c;
    box-shadow:
        0 35px 80px rgba(0, 0, 0, .42);
    transform: perspective(1200px) rotateY(-4deg);
    transition: transform .35s ease;
}

.hero-3596__product:hover .hero-3596__window {
    transform: perspective(1200px) rotateY(-1deg) translateY(-4px);
}

.hero-3596__window-bar {
    height: 42px;
    padding: 0 12px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, .06);
}

.hero-3596__window-bar > div {
    display: flex;
    gap: 5px;
}

.hero-3596__window-bar > div span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3f3f46;
}

.hero-3596__window-bar strong {
    color: #71717a;
    font-size: 7px;
    font-weight: 500;
}

.hero-3596__window-bar > button {
    justify-self: end;
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 6px;
    background: rgba(255, 255, 255, .04);
    color: #71717a;
}

.hero-3596__window-body {
    min-height: 350px;
    display: grid;
    grid-template-columns: 135px 1fr;
}

.hero-3596__window-body aside {
    padding: 16px 10px;
    border-right: 1px solid rgba(255, 255, 255, .055);
    background: #0d0f17;
}

.hero-3596__workspace {
    display: flex;
    align-items: center;
    gap: 8px;
}

.hero-3596__workspace > span {
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #6366f1;
    color: #ffffff;
    font-size: 9px;
    font-weight: 800;
}

.hero-3596__workspace > div {
    display: flex;
    flex-direction: column;
}

.hero-3596__workspace strong {
    color: #d4d4d8;
    font-size: 8px;
}

.hero-3596__workspace small {
    margin-top: 2px;
    color: #52525b;
    font-size: 6px;
}

.hero-3596__menu {
    margin-top: 22px;
    display: grid;
    gap: 5px;
}

.hero-3596__menu > span {
    min-height: 30px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 7px;
    color: #52525b;
    font-size: 7px;
}

.hero-3596__menu-active {
    background: rgba(99, 102, 241, .08);
    color: #a5b4fc !important;
}

.hero-3596__window-body main {
    padding: 18px;
}

.hero-3596__main-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-3596__main-head > div {
    display: flex;
    flex-direction: column;
}

.hero-3596__main-head span {
    color: #52525b;
    font-size: 6px;
    letter-spacing: .12em;
}

.hero-3596__main-head strong {
    margin-top: 3px;
    color: #e4e4e7;
    font-size: 13px;
}

.hero-3596__main-head button {
    height: 29px;
    padding: 0 9px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 0;
    border-radius: 7px;
    background: #6366f1;
    color: #ffffff;
    font-size: 7px;
}

.hero-3596__cards {
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}

.hero-3596__cards > div {
    padding: 11px;
    border: 1px solid rgba(255, 255, 255, .06);
    border-radius: 9px;
    background: rgba(255, 255, 255, .02);
}

.hero-3596__cards span {
    display: block;
    color: #52525b;
    font-size: 6px;
}

.hero-3596__cards strong {
    display: block;
    margin-top: 5px;
    color: #e4e4e7;
    font-size: 16px;
}

.hero-3596__cards small {
    display: block;
    margin-top: 4px;
    color: #6366f1;
    font-size: 6px;
}

.hero-3596__tasks {
    margin-top: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .06);
    border-radius: 9px;
}

.hero-3596__task-head {
    min-height: 35px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
}

.hero-3596__task-head > span {
    color: #a1a1aa;
    font-size: 7px;
}

.hero-3596__task-head button {
    border: 0;
    background: transparent;
    color: #6366f1;
    font-size: 6px;
}

.hero-3596__task {
    min-height: 46px;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 15px 1fr auto;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, .04);
}

.hero-3596__task:last-child {
    border-bottom: 0;
}

.hero-3596__check {
    width: 11px;
    height: 11px;
    border: 1px solid #6366f1;
    border-radius: 3px;
}

.hero-3596__task > div {
    display: flex;
    flex-direction: column;
}

.hero-3596__task strong {
    color: #a1a1aa;
    font-size: 7px;
}

.hero-3596__task small {
    margin-top: 2px;
    color: #3f3f46;
    font-size: 6px;
}

.hero-3596__person {
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #27272a;
    color: #a1a1aa;
    font-size: 6px;
}

.hero-3596__notification {
    position: absolute;
    right: -15px;
    bottom: 27px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 11px;
    background: rgba(24, 24, 27, .92);
    box-shadow: 0 20px 35px rgba(0, 0, 0, .28);
    backdrop-filter: blur(10px);
}

.hero-3596__notification > span {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(34, 197, 94, .1);
    color: #4ade80;
}

.hero-3596__notification > div {
    display: flex;
    flex-direction: column;
}

.hero-3596__notification strong {
    color: #d4d4d8;
    font-size: 7px;
}

.hero-3596__notification small {
    margin-top: 2px;
    color: #52525b;
    font-size: 6px;
}

@media (max-width: 930px) {
    .hero-3596 {
        padding: 22px 24px 44px;
    }

    .hero-3596__links {
        display: none;
    }

    .hero-3596__main {
        grid-template-columns: 1fr;
        gap: 42px;
    }

    .hero-3596__product {
        max-width: 700px;
    }
}

@media (max-width: 580px) {
    .hero-3596 {
        padding: 18px 15px 32px;
    }

    .hero-3596__nav > button {
        display: none;
    }

    .hero-3596 h1 {
        font-size: 47px;
    }

    .hero-3596__form {
        grid-template-columns: 1fr;
    }

    .hero-3596__form button {
        width: 100%;
    }

    .hero-3596__trust {
        flex-wrap: wrap;
    }

    .hero-3596__window-body {
        grid-template-columns: 1fr;
    }

    .hero-3596__window-body aside {
        display: none;
    }

    .hero-3596__cards {
        grid-template-columns: 1fr;
    }

    .hero-3596__notification {
        display: none;
    }
}`,
  },
];
