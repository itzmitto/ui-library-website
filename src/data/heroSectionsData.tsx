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
  {
    id: 3597,
    name: "Gradient Workspace Hero",
    preview: (
      <section className="hero-3597">
        <div className="hero-3597__content">
          <span className="hero-3597__eyebrow">Built for creative teams</span>

          <h1>
            Turn ideas into
            <span> real products.</span>
          </h1>

          <p>
            A focused workspace for planning, designing and shipping your next
            digital product.
          </p>

          <div className="hero-3597__actions">
            <button type="button">Start creating</button>
            <button type="button">View features</button>
          </div>
        </div>

        <div className="hero-3597__visual">
          <div className="hero-3597__orb"></div>

          <div className="hero-3597__card">
            <span className="hero-3597__icon">
              <i className="ri-layout-4-fill"></i>
            </span>

            <strong>Workspace</strong>
            <small>Everything in one place</small>

            <div className="hero-3597__card-row">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="hero-3597__badge">
            <i className="ri-flashlight-fill"></i>
            Fast workflow
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3597">
    <div class="hero-3597__content">
        <span class="hero-3597__eyebrow">Built for creative teams</span>

        <h1>
            Turn ideas into
            <span> real products.</span>
        </h1>

        <p>
            A focused workspace for planning, designing and shipping your next digital product.
        </p>

        <div class="hero-3597__actions">
            <button type="button">Start creating</button>
            <button type="button">View features</button>
        </div>
    </div>

    <div class="hero-3597__visual">
        <div class="hero-3597__orb"></div>

        <div class="hero-3597__card">
            <span class="hero-3597__icon">
                <i class="ri-layout-4-fill"></i>
            </span>

            <strong>Workspace</strong>
            <small>Everything in one place</small>

            <div class="hero-3597__card-row">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="hero-3597__badge">
            <i class="ri-flashlight-fill"></i>
            Fast workflow
        </div>
    </div>
</section>`,
    css: `.hero-3597 {
    min-height: 300px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 20px;
    background:
        radial-gradient(
            circle at 80% 30%,
            rgba(56, 189, 248, .13),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #0b1120,
            #172554,
            #312e81
        );
    color: #ffffff;
}

.hero-3597__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3597__eyebrow {
    color: #7dd3fc;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3597 h1 {
    max-width: 390px;
    margin: 12px 0 10px;
    font-size: 36px;
    line-height: 1.03;
    letter-spacing: -.04em;
}

.hero-3597 h1 span {
    color: #a5b4fc;
}

.hero-3597 p {
    max-width: 370px;
    margin: 0;
    color: rgba(255, 255, 255, .62);
    font-size: 10px;
    line-height: 1.65;
}

.hero-3597__actions {
    display: flex;
    gap: 8px;
    margin-top: 21px;
}

.hero-3597__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        background .2s ease;
}

.hero-3597__actions button:hover {
    transform: translateY(-2px);
}

.hero-3597__actions button:first-child {
    border: 0;
    background: #ffffff;
    color: #111827;
}

.hero-3597__actions button:last-child {
    border: 1px solid rgba(255, 255, 255, .18);
    background: rgba(255, 255, 255, .05);
    color: #ffffff;
}

.hero-3597__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.hero-3597__orb {
    position: absolute;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    background:
        linear-gradient(
            135deg,
            #22d3ee,
            #6366f1,
            #a855f7
        );
    filter: blur(6px);
    opacity: .46;
}

.hero-3597__card {
    position: relative;
    z-index: 2;
    width: 160px;
    padding: 18px;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 16px;
    background: rgba(255, 255, 255, .09);
    backdrop-filter: blur(16px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, .22);
    transition: transform .25s ease;
}

.hero-3597__visual:hover .hero-3597__card {
    transform: translateY(-5px) rotate(-2deg);
}

.hero-3597__icon {
    width: 32px;
    height: 32px;
    margin-bottom: 13px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: rgba(125, 211, 252, .12);
    color: #7dd3fc;
    font-size: 16px;
}

.hero-3597__card strong {
    display: block;
    font-size: 12px;
}

.hero-3597__card small {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, .5);
    font-size: 8px;
}

.hero-3597__card-row {
    margin-top: 16px;
    display: flex;
    gap: 5px;
}

.hero-3597__card-row span {
    height: 4px;
    flex: 1;
    border-radius: 999px;
    background: rgba(255, 255, 255, .12);
}

.hero-3597__card-row span:first-child {
    background: #67e8f9;
}

.hero-3597__badge {
    position: absolute;
    z-index: 3;
    right: 26px;
    bottom: 31px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(255, 255, 255, .14);
    border-radius: 9px;
    background: rgba(15, 23, 42, .72);
    color: #cbd5e1;
    font-size: 7px;
    backdrop-filter: blur(10px);
}

.hero-3597__badge i {
    color: #67e8f9;
}

@media (max-width: 700px) {
    .hero-3597 {
        grid-template-columns: 1fr;
    }

    .hero-3597__visual {
        min-height: 245px;
    }
}

@media (max-width: 480px) {
    .hero-3597__content {
        padding: 28px 22px;
    }

    .hero-3597 h1 {
        font-size: 31px;
    }

    .hero-3597__actions {
        flex-direction: column;
    }

    .hero-3597__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3598,
    name: "Modern Analytics Hero",
    preview: (
      <section className="hero-3598">
        <div className="hero-3598__content">
          <span className="hero-3598__eyebrow">
            Analytics without complexity
          </span>

          <h1>
            Understand what
            <span> actually matters.</span>
          </h1>

          <p>
            Clear metrics, simple dashboards and useful insights for teams that
            want better decisions.
          </p>

          <div className="hero-3598__actions">
            <button type="button">
              Explore analytics
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">Live preview</button>
          </div>
        </div>

        <div className="hero-3598__visual">
          <div className="hero-3598__chart-card">
            <div className="hero-3598__chart-top">
              <div>
                <span>Monthly growth</span>
                <strong>+28.4%</strong>
              </div>

              <span className="hero-3598__status">LIVE</span>
            </div>

            <div className="hero-3598__chart">
              <span style={{ height: "32%" }}></span>
              <span style={{ height: "47%" }}></span>
              <span style={{ height: "41%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "52%" }}></span>
              <span style={{ height: "75%" }}></span>
              <span style={{ height: "88%" }}></span>
            </div>

            <div className="hero-3598__chart-footer">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
            </div>
          </div>

          <div className="hero-3598__metric">
            <span>Users</span>
            <strong>18.2K</strong>
            <small>+12.6%</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3598">
    <div class="hero-3598__content">
        <span class="hero-3598__eyebrow">
            Analytics without complexity
        </span>

        <h1>
            Understand what
            <span> actually matters.</span>
        </h1>

        <p>
            Clear metrics, simple dashboards and useful insights for teams that want better decisions.
        </p>

        <div class="hero-3598__actions">
            <button type="button">
                Explore analytics
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">Live preview</button>
        </div>
    </div>

    <div class="hero-3598__visual">
        <div class="hero-3598__chart-card">
            <div class="hero-3598__chart-top">
                <div>
                    <span>Monthly growth</span>
                    <strong>+28.4%</strong>
                </div>

                <span class="hero-3598__status">LIVE</span>
            </div>

            <div class="hero-3598__chart">
                <span style="height:32%"></span>
                <span style="height:47%"></span>
                <span style="height:41%"></span>
                <span style="height:62%"></span>
                <span style="height:52%"></span>
                <span style="height:75%"></span>
                <span style="height:88%"></span>
            </div>

            <div class="hero-3598__chart-footer">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
            </div>
        </div>

        <div class="hero-3598__metric">
            <span>Users</span>
            <strong>18.2K</strong>
            <small>+12.6%</small>
        </div>
    </div>
</section>`,
    css: `.hero-3598 {
    min-height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
    background:
        linear-gradient(
            135deg,
            #06131f,
            #082f49
        );
    color: #ffffff;
}

.hero-3598__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3598__eyebrow {
    color: #5eead4;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3598 h1 {
    max-width: 390px;
    margin: 12px 0 9px;
    font-size: 35px;
    line-height: 1.04;
    letter-spacing: -.04em;
}

.hero-3598 h1 span {
    display: block;
    color: #5eead4;
}

.hero-3598 p {
    max-width: 365px;
    margin: 0;
    color: rgba(255, 255, 255, .58);
    font-size: 10px;
    line-height: 1.65;
}

.hero-3598__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3598__actions button {
    height: 38px;
    padding: 0 13px;
    border-radius: 9px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3598__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 0;
    background: #5eead4;
    color: #042f2e;
}

.hero-3598__actions button:last-child {
    border: 1px solid rgba(255, 255, 255, .15);
    background: rgba(255, 255, 255, .04);
    color: #ffffff;
}

.hero-3598__visual {
    position: relative;
    display: grid;
    place-items: center;
    padding: 30px;
}

.hero-3598__chart-card {
    width: min(100%, 275px);
    padding: 17px;
    border: 1px solid rgba(94, 234, 212, .16);
    border-radius: 16px;
    background: rgba(2, 44, 55, .72);
    box-shadow: 0 22px 40px rgba(0, 0, 0, .22);
    backdrop-filter: blur(10px);
    transition: transform .25s ease;
}

.hero-3598__visual:hover .hero-3598__chart-card {
    transform: translateY(-5px);
}

.hero-3598__chart-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.hero-3598__chart-top > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.hero-3598__chart-top span {
    color: #94a3b8;
    font-size: 7px;
}

.hero-3598__chart-top strong {
    color: #f0fdfa;
    font-size: 15px;
}

.hero-3598__status {
    padding: 4px 6px;
    border: 1px solid rgba(94, 234, 212, .2);
    border-radius: 999px;
    color: #5eead4 !important;
    font-size: 6px !important;
}

.hero-3598__chart {
    height: 92px;
    margin-top: 18px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
}

.hero-3598__chart span {
    flex: 1;
    border-radius: 4px 4px 2px 2px;
    background:
        linear-gradient(
            180deg,
            #5eead4,
            #0f766e
        );
}

.hero-3598__chart-footer {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    color: #527783;
    font-size: 6px;
}

.hero-3598__metric {
    position: absolute;
    right: 23px;
    bottom: 28px;
    width: 86px;
    padding: 11px;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 11px;
    background: rgba(3, 20, 30, .83);
    box-shadow: 0 13px 25px rgba(0, 0, 0, .23);
    backdrop-filter: blur(10px);
}

.hero-3598__metric span {
    display: block;
    color: #64748b;
    font-size: 6px;
}

.hero-3598__metric strong {
    display: block;
    margin-top: 3px;
    color: #f0fdfa;
    font-size: 13px;
}

.hero-3598__metric small {
    display: block;
    margin-top: 3px;
    color: #5eead4;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3598 {
        grid-template-columns: 1fr;
    }

    .hero-3598__visual {
        min-height: 250px;
    }
}

@media (max-width: 480px) {
    .hero-3598__content {
        padding: 28px 22px;
    }

    .hero-3598 h1 {
        font-size: 30px;
    }

    .hero-3598__actions {
        flex-direction: column;
    }

    .hero-3598__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3599,
    name: "Soft Product Hero",
    preview: (
      <section className="hero-3599">
        <div className="hero-3599__content">
          <span className="hero-3599__eyebrow">Simple by design</span>

          <h1>
            Your work,
            <span> beautifully organized.</span>
          </h1>

          <p>
            Keep ideas, tasks and notes together in one calm workspace designed
            to help you focus.
          </p>

          <div className="hero-3599__actions">
            <button type="button">Try it free</button>
            <button type="button">
              <i className="ri-play-circle-line"></i>
              See how it works
            </button>
          </div>
        </div>

        <div className="hero-3599__visual">
          <div className="hero-3599__panel">
            <div className="hero-3599__panel-head">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <small>My workspace</small>
            </div>

            <div className="hero-3599__panel-body">
              <div className="hero-3599__panel-title">
                <span>
                  <i className="ri-sparkling-2-fill"></i>
                </span>

                <div>
                  <strong>Today's focus</strong>
                  <small>3 tasks remaining</small>
                </div>
              </div>

              <div className="hero-3599__task">
                <span className="hero-3599__check"></span>
                <div>
                  <strong>Finalize concept</strong>
                  <small>Design project</small>
                </div>
              </div>

              <div className="hero-3599__task">
                <span className="hero-3599__check"></span>
                <div>
                  <strong>Review prototype</strong>
                  <small>Product team</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3599">
    <div class="hero-3599__content">
        <span class="hero-3599__eyebrow">Simple by design</span>

        <h1>
            Your work,
            <span> beautifully organized.</span>
        </h1>

        <p>
            Keep ideas, tasks and notes together in one calm workspace designed to help you focus.
        </p>

        <div class="hero-3599__actions">
            <button type="button">Try it free</button>

            <button type="button">
                <i class="ri-play-circle-line"></i>
                See how it works
            </button>
        </div>
    </div>

    <div class="hero-3599__visual">
        <div class="hero-3599__panel">
            <div class="hero-3599__panel-head">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <small>My workspace</small>
            </div>

            <div class="hero-3599__panel-body">
                <div class="hero-3599__panel-title">
                    <span>
                        <i class="ri-sparkling-2-fill"></i>
                    </span>

                    <div>
                        <strong>Today's focus</strong>
                        <small>3 tasks remaining</small>
                    </div>
                </div>

                <div class="hero-3599__task">
                    <span class="hero-3599__check"></span>
                    <div>
                        <strong>Finalize concept</strong>
                        <small>Design project</small>
                    </div>
                </div>

                <div class="hero-3599__task">
                    <span class="hero-3599__check"></span>
                    <div>
                        <strong>Review prototype</strong>
                        <small>Product team</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3599 {
    min-height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
    background:
        linear-gradient(
            135deg,
            #f8fafc,
            #eef2ff
        );
    color: #18181b;
}

.hero-3599__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3599__eyebrow {
    color: #6366f1;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3599 h1 {
    max-width: 390px;
    margin: 12px 0 9px;
    font-size: 35px;
    line-height: 1.04;
    letter-spacing: -.045em;
}

.hero-3599 h1 span {
    display: block;
    color: #6366f1;
}

.hero-3599 p {
    max-width: 360px;
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3599__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3599__actions button {
    height: 38px;
    padding: 0 13px;
    border-radius: 9px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3599__actions button:first-child {
    border: 0;
    background: #18181b;
    color: #ffffff;
}

.hero-3599__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #d4d4d8;
    background: rgba(255, 255, 255, .55);
    color: #3f3f46;
}

.hero-3599__visual {
    position: relative;
    display: grid;
    place-items: center;
    padding: 28px;
}

.hero-3599__visual::before {
    content: "";
    position: absolute;
    width: 215px;
    height: 215px;
    border-radius: 50%;
    background:
        linear-gradient(
            135deg,
            rgba(99, 102, 241, .22),
            rgba(167, 139, 250, .13)
        );
    filter: blur(4px);
}

.hero-3599__panel {
    position: relative;
    z-index: 2;
    width: min(100%, 265px);
    overflow: hidden;
    border: 1px solid rgba(99, 102, 241, .13);
    border-radius: 16px;
    background: rgba(255, 255, 255, .78);
    box-shadow:
        0 22px 42px rgba(99, 102, 241, .12);
    backdrop-filter: blur(12px);
    transition: transform .25s ease;
}

.hero-3599__visual:hover .hero-3599__panel {
    transform: translateY(-5px) rotate(1deg);
}

.hero-3599__panel-head {
    height: 36px;
    padding: 0 11px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid #eef2f7;
}

.hero-3599__panel-head > div {
    display: flex;
    gap: 4px;
}

.hero-3599__panel-head > div span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d4d4d8;
}

.hero-3599__panel-head small {
    color: #a1a1aa;
    font-size: 6px;
}

.hero-3599__panel-body {
    padding: 14px;
}

.hero-3599__panel-title {
    display: flex;
    align-items: center;
    gap: 9px;
}

.hero-3599__panel-title > span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #eef2ff;
    color: #6366f1;
}

.hero-3599__panel-title > div {
    display: flex;
    flex-direction: column;
}

.hero-3599__panel-title strong {
    color: #27272a;
    font-size: 9px;
}

.hero-3599__panel-title small {
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 6px;
}

.hero-3599__task {
    margin-top: 10px;
    min-height: 43px;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 14px 1fr;
    align-items: center;
    gap: 8px;
    border: 1px solid #eef2f7;
    border-radius: 9px;
    background: #ffffff;
}

.hero-3599__check {
    width: 11px;
    height: 11px;
    border: 1px solid #a5b4fc;
    border-radius: 3px;
}

.hero-3599__task > div {
    display: flex;
    flex-direction: column;
}

.hero-3599__task strong {
    color: #3f3f46;
    font-size: 7px;
}

.hero-3599__task small {
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3599 {
        grid-template-columns: 1fr;
    }

    .hero-3599__visual {
        min-height: 250px;
    }
}

@media (max-width: 480px) {
    .hero-3599__content {
        padding: 28px 22px;
    }

    .hero-3599 h1 {
        font-size: 30px;
    }

    .hero-3599__actions {
        flex-direction: column;
    }

    .hero-3599__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3600,
    name: "Dark Developer Hero",
    preview: (
      <section className="hero-3600">
        <div className="hero-3600__content">
          <span className="hero-3600__eyebrow">
            Developer tools that stay simple
          </span>

          <h1>
            Ship faster.
            <span> Debug less.</span>
          </h1>

          <p>
            A lightweight toolkit for building, testing and deploying modern
            applications.
          </p>

          <div className="hero-3600__actions">
            <button type="button">
              Get started
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">
              <i className="ri-github-fill"></i>
              GitHub
            </button>
          </div>
        </div>

        <div className="hero-3600__visual">
          <div className="hero-3600__terminal">
            <div className="hero-3600__terminal-head">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <small>terminal</small>
            </div>

            <div className="hero-3600__terminal-body">
              <p>
                <span>$</span> npm create nova-app
              </p>

              <p className="hero-3600__success">
                <i className="ri-check-line"></i>
                Project created
              </p>

              <p>
                <span>$</span> npm run dev
              </p>

              <div className="hero-3600__server">
                <span></span>
                localhost:5173
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3600">
    <div class="hero-3600__content">
        <span class="hero-3600__eyebrow">
            Developer tools that stay simple
        </span>

        <h1>
            Ship faster.
            <span> Debug less.</span>
        </h1>

        <p>
            A lightweight toolkit for building, testing and deploying modern applications.
        </p>

        <div class="hero-3600__actions">
            <button type="button">
                Get started
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">
                <i class="ri-github-fill"></i>
                GitHub
            </button>
        </div>
    </div>

    <div class="hero-3600__visual">
        <div class="hero-3600__terminal">
            <div class="hero-3600__terminal-head">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <small>terminal</small>
            </div>

            <div class="hero-3600__terminal-body">
                <p>
                    <span>$</span> npm create nova-app
                </p>

                <p class="hero-3600__success">
                    <i class="ri-check-line"></i>
                    Project created
                </p>

                <p>
                    <span>$</span> npm run dev
                </p>

                <div class="hero-3600__server">
                    <span></span>
                    localhost:5173
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3600 {
    min-height: 300px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border: 1px solid #20242e;
    border-radius: 20px;
    background:
        radial-gradient(
            circle at 75% 40%,
            rgba(34, 197, 94, .08),
            transparent 32%
        ),
        #090b10;
    color: #ffffff;
}

.hero-3600__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3600__eyebrow {
    color: #4ade80;
    font-family: monospace;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .08em;
}

.hero-3600 h1 {
    max-width: 390px;
    margin: 12px 0 9px;
    font-size: 36px;
    line-height: 1.03;
    letter-spacing: -.04em;
}

.hero-3600 h1 span {
    display: block;
    color: #4ade80;
}

.hero-3600 p {
    max-width: 370px;
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3600__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3600__actions button {
    height: 38px;
    padding: 0 13px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 9px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3600__actions button:first-child {
    border: 0;
    background: #4ade80;
    color: #052e16;
}

.hero-3600__actions button:last-child {
    border: 1px solid #27272a;
    background: #111318;
    color: #d4d4d8;
}

.hero-3600__visual {
    display: grid;
    place-items: center;
    padding: 28px;
}

.hero-3600__terminal {
    width: min(100%, 280px);
    overflow: hidden;
    border: 1px solid rgba(74, 222, 128, .14);
    border-radius: 14px;
    background: #050806;
    box-shadow:
        0 20px 40px rgba(0, 0, 0, .33),
        0 0 25px rgba(34, 197, 94, .04);
    transition: transform .25s ease;
}

.hero-3600__visual:hover .hero-3600__terminal {
    transform: translateY(-5px);
}

.hero-3600__terminal-head {
    height: 36px;
    padding: 0 11px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(74, 222, 128, .08);
}

.hero-3600__terminal-head > div {
    display: flex;
    gap: 4px;
}

.hero-3600__terminal-head > div span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #27272a;
}

.hero-3600__terminal-head small {
    color: #3f3f46;
    font-family: monospace;
    font-size: 6px;
}

.hero-3600__terminal-body {
    padding: 16px;
    font-family: monospace;
}

.hero-3600__terminal-body p {
    max-width: none;
    margin: 0 0 13px;
    color: #a1a1aa;
    font-family: monospace;
    font-size: 8px;
}

.hero-3600__terminal-body p > span {
    color: #4ade80;
}

.hero-3600__success {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4ade80 !important;
}

.hero-3600__server {
    margin-top: 6px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(74, 222, 128, .12);
    border-radius: 7px;
    background: rgba(34, 197, 94, .035);
    color: #86efac;
    font-size: 7px;
}

.hero-3600__server span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 5px #22c55e;
}

@media (max-width: 700px) {
    .hero-3600 {
        grid-template-columns: 1fr;
    }

    .hero-3600__visual {
        min-height: 240px;
    }
}

@media (max-width: 480px) {
    .hero-3600__content {
        padding: 28px 22px;
    }

    .hero-3600 h1 {
        font-size: 31px;
    }

    .hero-3600__actions {
        flex-direction: column;
    }

    .hero-3600__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3601,
    name: "Creative Studio Hero",
    preview: (
      <section className="hero-3601">
        <div className="hero-3601__content">
          <span className="hero-3601__eyebrow">
            Independent creative studio
          </span>

          <h1>
            Design that feels
            <span> unmistakably yours.</span>
          </h1>

          <p>
            Brand, web and digital experiences made for teams that want to stand
            out without making things complicated.
          </p>

          <div className="hero-3601__actions">
            <button type="button">View our work</button>
            <button type="button">
              Let's talk
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3601__visual">
          <div className="hero-3601__shape hero-3601__shape-1"></div>
          <div className="hero-3601__shape hero-3601__shape-2"></div>

          <div className="hero-3601__poster">
            <span className="hero-3601__poster-number">01</span>

            <div className="hero-3601__poster-center">
              <span>SELECTED</span>
              <strong>WORK</strong>
            </div>

            <div className="hero-3601__poster-footer">
              <span>2026</span>
              <span>STUDIO</span>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3601">
    <div class="hero-3601__content">
        <span class="hero-3601__eyebrow">
            Independent creative studio
        </span>

        <h1>
            Design that feels
            <span> unmistakably yours.</span>
        </h1>

        <p>
            Brand, web and digital experiences made for teams that want to stand out without making things complicated.
        </p>

        <div class="hero-3601__actions">
            <button type="button">View our work</button>

            <button type="button">
                Let's talk
                <i class="ri-arrow-right-up-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3601__visual">
        <div class="hero-3601__shape hero-3601__shape-1"></div>
        <div class="hero-3601__shape hero-3601__shape-2"></div>

        <div class="hero-3601__poster">
            <span class="hero-3601__poster-number">01</span>

            <div class="hero-3601__poster-center">
                <span>SELECTED</span>
                <strong>WORK</strong>
            </div>

            <div class="hero-3601__poster-footer">
                <span>2026</span>
                <span>STUDIO</span>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3601 {
    min-height: 300px;
    display: grid;
    grid-template-columns: 1.08fr .92fr;
    overflow: hidden;
    border-radius: 20px;
    background: #ece9df;
    color: #171717;
}

.hero-3601__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3601__eyebrow {
    color: #9a3412;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3601 h1 {
    max-width: 410px;
    margin: 12px 0 10px;
    font-family: Georgia, serif;
    font-size: 36px;
    line-height: 1.03;
    font-weight: 400;
    letter-spacing: -.035em;
}

.hero-3601 h1 span {
    display: block;
    color: #9a3412;
    font-style: italic;
}

.hero-3601 p {
    max-width: 370px;
    margin: 0;
    color: #78716c;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3601__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3601__actions button {
    height: 38px;
    padding: 0 13px;
    border-radius: 0;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3601__actions button:first-child {
    border: 1px solid #171717;
    background: #171717;
    color: #ffffff;
}

.hero-3601__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #a8a29e;
    background: transparent;
    color: #292524;
}

.hero-3601__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: #d6d3c8;
}

.hero-3601__shape {
    position: absolute;
    border-radius: 50%;
}

.hero-3601__shape-1 {
    width: 190px;
    height: 190px;
    right: -55px;
    top: -45px;
    background: #9a3412;
    opacity: .82;
}

.hero-3601__shape-2 {
    width: 140px;
    height: 140px;
    left: -30px;
    bottom: -40px;
    border: 28px solid #171717;
    opacity: .92;
}

.hero-3601__poster {
    position: relative;
    z-index: 2;
    width: 160px;
    height: 205px;
    padding: 13px;
    border: 1px solid rgba(23, 23, 23, .25);
    background: #f5f2e9;
    box-shadow: 14px 14px 0 rgba(23, 23, 23, .11);
    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.hero-3601__visual:hover .hero-3601__poster {
    transform: rotate(-3deg) translateY(-4px);
    box-shadow: 18px 18px 0 rgba(23, 23, 23, .12);
}

.hero-3601__poster-number {
    font-size: 7px;
    font-weight: 700;
}

.hero-3601__poster-center {
    position: absolute;
    left: 13px;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
}

.hero-3601__poster-center span {
    display: block;
    color: #9a3412;
    font-size: 7px;
    letter-spacing: .2em;
}

.hero-3601__poster-center strong {
    display: block;
    margin-top: 2px;
    font-size: 31px;
    line-height: .85;
    letter-spacing: -.07em;
}

.hero-3601__poster-footer {
    position: absolute;
    left: 13px;
    right: 13px;
    bottom: 12px;
    display: flex;
    justify-content: space-between;
    color: #78716c;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3601 {
        grid-template-columns: 1fr;
    }

    .hero-3601__visual {
        min-height: 260px;
    }
}

@media (max-width: 480px) {
    .hero-3601__content {
        padding: 28px 22px;
    }

    .hero-3601 h1 {
        font-size: 31px;
    }

    .hero-3601__actions {
        flex-direction: column;
    }

    .hero-3601__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3602,
    name: "Red Brutalist Hero",
    preview: (
      <section className="hero-3602">
        <div className="hero-3602__content">
          <div className="hero-3602__meta">
            <span>CREATIVE STUDIO</span>
            <span>EST. 2026</span>
          </div>

          <h1>
            MAKE
            <span>NOISE.</span>
          </h1>

          <p>
            Bold digital experiences for brands that refuse to disappear into
            the background.
          </p>

          <div className="hero-3602__actions">
            <button type="button">
              View projects
              <i className="ri-arrow-right-up-line"></i>
            </button>

            <button type="button">About us</button>
          </div>
        </div>

        <div className="hero-3602__visual">
          <div className="hero-3602__number">01</div>

          <div className="hero-3602__poster">
            <div className="hero-3602__poster-top">
              <span>PROJECT</span>
              <span>R/001</span>
            </div>

            <div className="hero-3602__poster-center">
              <span>LOUD</span>
              <strong>IDEAS</strong>
            </div>

            <div className="hero-3602__poster-mark">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-3602__poster-bottom">
              <span>WEB</span>
              <span>DESIGN</span>
              <span>CODE</span>
            </div>
          </div>

          <div className="hero-3602__side-text">BUILT TO BE SEEN</div>
        </div>
      </section>
    ),
    html: `<section class="hero-3602">
    <div class="hero-3602__content">
        <div class="hero-3602__meta">
            <span>CREATIVE STUDIO</span>
            <span>EST. 2026</span>
        </div>

        <h1>
            MAKE
            <span>NOISE.</span>
        </h1>

        <p>
            Bold digital experiences for brands that refuse to disappear into the background.
        </p>

        <div class="hero-3602__actions">
            <button type="button">
                View projects
                <i class="ri-arrow-right-up-line"></i>
            </button>

            <button type="button">About us</button>
        </div>
    </div>

    <div class="hero-3602__visual">
        <div class="hero-3602__number">01</div>

        <div class="hero-3602__poster">
            <div class="hero-3602__poster-top">
                <span>PROJECT</span>
                <span>R/001</span>
            </div>

            <div class="hero-3602__poster-center">
                <span>LOUD</span>
                <strong>IDEAS</strong>
            </div>

            <div class="hero-3602__poster-mark">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="hero-3602__poster-bottom">
                <span>WEB</span>
                <span>DESIGN</span>
                <span>CODE</span>
            </div>
        </div>

        <div class="hero-3602__side-text">
            BUILT TO BE SEEN
        </div>
    </div>
</section>`,
    css: `.hero-3602 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border: 2px solid #ff2d2d;
    border-radius: 4px;
    background: #130303;
    color: #ffffff;
    font-family: "Arial Narrow", "Helvetica Neue", Arial, sans-serif;
}

.hero-3602__content {
    padding: 34px 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid rgba(255, 45, 45, .4);
}

.hero-3602__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 390px;
    color: #ff5757;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .17em;
}

.hero-3602 h1 {
    margin: 17px 0 10px;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 58px;
    line-height: .82;
    font-weight: 900;
    letter-spacing: -.035em;
}

.hero-3602 h1 span {
    display: block;
    color: #ff2d2d;
    -webkit-text-stroke: 1px #ff2d2d;
}

.hero-3602 p {
    max-width: 360px;
    margin: 0;
    color: #a88b8b;
    font-size: 10px;
    line-height: 1.65;
}

.hero-3602__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3602__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 0;
    font: inherit;
    font-size: 9px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .05em;
    cursor: pointer;
    transition:
        transform .18s ease,
        background .18s ease,
        color .18s ease;
}

.hero-3602__actions button:hover {
    transform: translateY(-2px);
}

.hero-3602__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #ff2d2d;
    background: #ff2d2d;
    color: #160303;
}

.hero-3602__actions button:last-child {
    border: 1px solid rgba(255, 45, 45, .5);
    background: transparent;
    color: #ff6666;
}

.hero-3602__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
        linear-gradient(
            rgba(255, 45, 45, .06) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 45, 45, .06) 1px,
            transparent 1px
        ),
        #1b0404;
    background-size: 28px 28px;
}

.hero-3602__number {
    position: absolute;
    left: 17px;
    top: 13px;
    color: #ff2d2d;
    font-family: Impact, sans-serif;
    font-size: 34px;
    opacity: .3;
}

.hero-3602__poster {
    position: relative;
    width: 165px;
    height: 215px;
    padding: 12px;
    border: 2px solid #ff2d2d;
    background: #ff2d2d;
    color: #120202;
    box-shadow:
        13px 13px 0 #610909;
    transition:
        transform .22s ease,
        box-shadow .22s ease;
}

.hero-3602__visual:hover .hero-3602__poster {
    transform: rotate(-3deg) translateY(-4px);
    box-shadow:
        17px 17px 0 #610909;
}

.hero-3602__poster-top {
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-weight: 900;
    letter-spacing: .12em;
}

.hero-3602__poster-center {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 54px;
}

.hero-3602__poster-center span {
    display: block;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .18em;
}

.hero-3602__poster-center strong {
    display: block;
    margin-top: 1px;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 38px;
    line-height: .86;
    letter-spacing: -.04em;
}

.hero-3602__poster-mark {
    position: absolute;
    left: 12px;
    bottom: 49px;
    display: flex;
    align-items: flex-end;
    gap: 4px;
}

.hero-3602__poster-mark span {
    width: 7px;
    background: #120202;
}

.hero-3602__poster-mark span:nth-child(1) {
    height: 15px;
}

.hero-3602__poster-mark span:nth-child(2) {
    height: 27px;
}

.hero-3602__poster-mark span:nth-child(3) {
    height: 20px;
}

.hero-3602__poster-bottom {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 11px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(18, 2, 2, .45);
    padding-top: 7px;
    font-size: 6px;
    font-weight: 900;
}

.hero-3602__side-text {
    position: absolute;
    right: 12px;
    top: 50%;
    color: rgba(255, 45, 45, .42);
    font-size: 6px;
    font-weight: 900;
    letter-spacing: .18em;
    transform: translateY(-50%) rotate(90deg);
}

@media (max-width: 700px) {
    .hero-3602 {
        grid-template-columns: 1fr;
    }

    .hero-3602__content {
        border-right: 0;
        border-bottom: 1px solid rgba(255, 45, 45, .4);
    }

    .hero-3602__visual {
        min-height: 270px;
    }
}

@media (max-width: 480px) {
    .hero-3602__content {
        padding: 28px 22px;
    }

    .hero-3602 h1 {
        font-size: 49px;
    }

    .hero-3602__actions {
        flex-direction: column;
    }

    .hero-3602__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3603,
    name: "Green Botanical Hero",
    preview: (
      <section className="hero-3603">
        <div className="hero-3603__content">
          <span className="hero-3603__eyebrow">
            Thoughtful digital experiences
          </span>

          <h1>
            Grow ideas
            <span>with intention.</span>
          </h1>

          <p>
            A calm creative platform for teams building meaningful products with
            clarity, care and better focus.
          </p>

          <div className="hero-3603__actions">
            <button type="button">Explore workspace</button>

            <button type="button">
              Our philosophy
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3603__visual">
          <div className="hero-3603__circle"></div>

          <div className="hero-3603__card">
            <span className="hero-3603__card-label">WEEKLY GROWTH</span>

            <strong>+24%</strong>

            <div className="hero-3603__graph">
              <span style={{ height: "28%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "39%" }}></span>
              <span style={{ height: "56%" }}></span>
              <span style={{ height: "68%" }}></span>
              <span style={{ height: "83%" }}></span>
            </div>

            <div className="hero-3603__card-footer">
              <span>MON</span>
              <span>SAT</span>
            </div>
          </div>

          <div className="hero-3603__leaf hero-3603__leaf-1"></div>
          <div className="hero-3603__leaf hero-3603__leaf-2"></div>

          <div className="hero-3603__mini">
            <i className="ri-leaf-fill"></i>
            <span>
              <strong>Healthy growth</strong>
              <small>All systems balanced</small>
            </span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3603">
    <div class="hero-3603__content">
        <span class="hero-3603__eyebrow">
            Thoughtful digital experiences
        </span>

        <h1>
            Grow ideas
            <span>with intention.</span>
        </h1>

        <p>
            A calm creative platform for teams building meaningful products with clarity, care and better focus.
        </p>

        <div class="hero-3603__actions">
            <button type="button">Explore workspace</button>

            <button type="button">
                Our philosophy
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3603__visual">
        <div class="hero-3603__circle"></div>

        <div class="hero-3603__card">
            <span class="hero-3603__card-label">
                WEEKLY GROWTH
            </span>

            <strong>+24%</strong>

            <div class="hero-3603__graph">
                <span style="height:28%"></span>
                <span style="height:42%"></span>
                <span style="height:39%"></span>
                <span style="height:56%"></span>
                <span style="height:68%"></span>
                <span style="height:83%"></span>
            </div>

            <div class="hero-3603__card-footer">
                <span>MON</span>
                <span>SAT</span>
            </div>
        </div>

        <div class="hero-3603__leaf hero-3603__leaf-1"></div>
        <div class="hero-3603__leaf hero-3603__leaf-2"></div>

        <div class="hero-3603__mini">
            <i class="ri-leaf-fill"></i>

            <span>
                <strong>Healthy growth</strong>
                <small>All systems balanced</small>
            </span>
        </div>
    </div>
</section>`,
    css: `.hero-3603 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 24px;
    background:
        linear-gradient(
            135deg,
            #eef5e8,
            #dfead6
        );
    color: #17321f;
    font-family: Georgia, "Times New Roman", serif;
}

.hero-3603__content {
    padding: 39px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3603__eyebrow {
    color: #4d7c57;
    font-family: Arial, sans-serif;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .16em;
    text-transform: uppercase;
}

.hero-3603 h1 {
    max-width: 390px;
    margin: 12px 0 10px;
    color: #17321f;
    font-size: 39px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -.045em;
}

.hero-3603 h1 span {
    display: block;
    color: #527b5c;
    font-style: italic;
}

.hero-3603 p {
    max-width: 365px;
    margin: 0;
    color: #68806d;
    font-family: Arial, sans-serif;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3603__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3603__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 999px;
    font-family: Arial, sans-serif;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        background .2s ease;
}

.hero-3603__actions button:hover {
    transform: translateY(-2px);
}

.hero-3603__actions button:first-child {
    border: 1px solid #254f32;
    background: #254f32;
    color: #f0f7ec;
}

.hero-3603__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(37, 79, 50, .22);
    background: rgba(255, 255, 255, .28);
    color: #355e40;
}

.hero-3603__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.hero-3603__circle {
    position: absolute;
    width: 205px;
    height: 205px;
    border: 1px solid rgba(62, 105, 73, .2);
    border-radius: 50%;
}

.hero-3603__circle::before {
    content: "";
    position: absolute;
    inset: 17px;
    border-radius: inherit;
    background:
        radial-gradient(
            circle at 35% 30%,
            rgba(255, 255, 255, .55),
            rgba(116, 155, 105, .18)
        );
}

.hero-3603__card {
    position: relative;
    z-index: 2;
    width: 165px;
    padding: 17px;
    border: 1px solid rgba(37, 79, 50, .15);
    border-radius: 18px;
    background: rgba(250, 252, 246, .76);
    box-shadow:
        0 18px 38px rgba(43, 77, 51, .13);
    backdrop-filter: blur(10px);
    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.hero-3603__visual:hover .hero-3603__card {
    transform: translateY(-5px);
    box-shadow:
        0 24px 44px rgba(43, 77, 51, .17);
}

.hero-3603__card-label {
    color: #819687;
    font-family: Arial, sans-serif;
    font-size: 6px;
    font-weight: 800;
    letter-spacing: .14em;
}

.hero-3603__card > strong {
    display: block;
    margin-top: 6px;
    color: #21462c;
    font-size: 22px;
    font-weight: 400;
}

.hero-3603__graph {
    height: 75px;
    margin-top: 15px;
    display: flex;
    align-items: flex-end;
    gap: 5px;
}

.hero-3603__graph span {
    flex: 1;
    border-radius: 99px 99px 3px 3px;
    background:
        linear-gradient(
            #78a67d,
            #315c3a
        );
}

.hero-3603__card-footer {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
    color: #9aaa9c;
    font-family: Arial, sans-serif;
    font-size: 5px;
}

.hero-3603__leaf {
    position: absolute;
    background: #517b59;
    opacity: .8;
}

.hero-3603__leaf-1 {
    width: 52px;
    height: 28px;
    left: 35px;
    top: 46px;
    border-radius: 100% 0 100% 0;
    transform: rotate(-24deg);
}

.hero-3603__leaf-2 {
    width: 43px;
    height: 23px;
    right: 35px;
    bottom: 45px;
    border-radius: 0 100% 0 100%;
    transform: rotate(24deg);
}

.hero-3603__mini {
    position: absolute;
    z-index: 3;
    right: 24px;
    bottom: 27px;
    padding: 9px 11px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(37, 79, 50, .14);
    border-radius: 12px;
    background: rgba(247, 250, 242, .86);
    box-shadow: 0 12px 25px rgba(43, 77, 51, .1);
    backdrop-filter: blur(8px);
}

.hero-3603__mini > i {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dcebd9;
    color: #3e7048;
    font-size: 12px;
}

.hero-3603__mini > span {
    display: flex;
    flex-direction: column;
}

.hero-3603__mini strong {
    color: #31533a;
    font-family: Arial, sans-serif;
    font-size: 7px;
}

.hero-3603__mini small {
    margin-top: 2px;
    color: #829287;
    font-family: Arial, sans-serif;
    font-size: 5px;
}

@media (max-width: 700px) {
    .hero-3603 {
        grid-template-columns: 1fr;
    }

    .hero-3603__visual {
        min-height: 270px;
    }
}

@media (max-width: 480px) {
    .hero-3603__content {
        padding: 28px 22px;
    }

    .hero-3603 h1 {
        font-size: 33px;
    }

    .hero-3603__actions {
        flex-direction: column;
    }

    .hero-3603__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3604,
    name: "Yellow Industrial Hero",
    preview: (
      <section className="hero-3604">
        <div className="hero-3604__content">
          <div className="hero-3604__tag">
            <span>02</span>
            PRODUCT SYSTEM
          </div>

          <h1>
            BUILD.
            <span>TEST.</span>
            SHIP.
          </h1>

          <p>
            Practical tools for developers who want faster workflows, fewer
            distractions and complete control.
          </p>

          <div className="hero-3604__actions">
            <button type="button">
              Initialize
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">Documentation</button>
          </div>
        </div>

        <div className="hero-3604__visual">
          <div className="hero-3604__lines"></div>

          <div className="hero-3604__machine">
            <div className="hero-3604__machine-top">
              <span>UNIT_04</span>
              <span className="hero-3604__machine-status">
                <i></i>
                ACTIVE
              </span>
            </div>

            <div className="hero-3604__machine-display">
              <span>BUILD STATUS</span>

              <strong>READY</strong>

              <div className="hero-3604__progress">
                <span></span>
              </div>

              <div className="hero-3604__values">
                <span>
                  CPU
                  <strong>42%</strong>
                </span>

                <span>
                  MEM
                  <strong>68%</strong>
                </span>

                <span>
                  JOB
                  <strong>12</strong>
                </span>
              </div>
            </div>

            <div className="hero-3604__machine-bottom">
              <span>SYS</span>
              <span>READY</span>
              <span>04.26</span>
            </div>
          </div>

          <div className="hero-3604__warning">
            <i className="ri-flashlight-fill"></i>
            HIGH PERFORMANCE
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3604">
    <div class="hero-3604__content">
        <div class="hero-3604__tag">
            <span>02</span>
            PRODUCT SYSTEM
        </div>

        <h1>
            BUILD.
            <span>TEST.</span>
            SHIP.
        </h1>

        <p>
            Practical tools for developers who want faster workflows, fewer distractions and complete control.
        </p>

        <div class="hero-3604__actions">
            <button type="button">
                Initialize
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">Documentation</button>
        </div>
    </div>

    <div class="hero-3604__visual">
        <div class="hero-3604__lines"></div>

        <div class="hero-3604__machine">
            <div class="hero-3604__machine-top">
                <span>UNIT_04</span>

                <span class="hero-3604__machine-status">
                    <i></i>
                    ACTIVE
                </span>
            </div>

            <div class="hero-3604__machine-display">
                <span>BUILD STATUS</span>

                <strong>READY</strong>

                <div class="hero-3604__progress">
                    <span></span>
                </div>

                <div class="hero-3604__values">
                    <span>
                        CPU
                        <strong>42%</strong>
                    </span>

                    <span>
                        MEM
                        <strong>68%</strong>
                    </span>

                    <span>
                        JOB
                        <strong>12</strong>
                    </span>
                </div>
            </div>

            <div class="hero-3604__machine-bottom">
                <span>SYS</span>
                <span>READY</span>
                <span>04.26</span>
            </div>
        </div>

        <div class="hero-3604__warning">
            <i class="ri-flashlight-fill"></i>
            HIGH PERFORMANCE
        </div>
    </div>
</section>`,
    css: `.hero-3604 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border: 2px solid #171717;
    border-radius: 8px;
    background: #facc15;
    color: #111111;
    font-family: "Courier New", Courier, monospace;
}

.hero-3604__content {
    padding: 36px 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid #171717;
}

.hero-3604__tag {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .13em;
}

.hero-3604__tag > span {
    width: 23px;
    height: 20px;
    display: grid;
    place-items: center;
    border: 1px solid #111111;
    background: #111111;
    color: #facc15;
    font-size: 7px;
}

.hero-3604 h1 {
    margin: 14px 0 9px;
    font-size: 43px;
    line-height: .87;
    font-weight: 900;
    letter-spacing: -.055em;
}

.hero-3604 h1 span {
    display: block;
    width: fit-content;
    padding: 1px 6px;
    background: #111111;
    color: #facc15;
}

.hero-3604 p {
    max-width: 370px;
    margin: 0;
    color: rgba(17, 17, 17, .67);
    font-size: 9px;
    line-height: 1.65;
    font-weight: 700;
}

.hero-3604__actions {
    margin-top: 20px;
    display: flex;
    gap: 7px;
}

.hero-3604__actions button {
    height: 37px;
    padding: 0 13px;
    border-radius: 0;
    font: inherit;
    font-size: 8px;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    transition:
        transform .15s ease,
        box-shadow .15s ease;
}

.hero-3604__actions button:hover {
    transform: translate(-2px, -2px);
}

.hero-3604__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border: 2px solid #111111;
    background: #111111;
    color: #facc15;
}

.hero-3604__actions button:first-child:hover {
    box-shadow: 4px 4px 0 #ffffff;
}

.hero-3604__actions button:last-child {
    border: 2px solid #111111;
    background: transparent;
    color: #111111;
}

.hero-3604__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: #171717;
}

.hero-3604__lines {
    position: absolute;
    inset: 0;
    opacity: .22;
    background:
        linear-gradient(
            rgba(250, 204, 21, .2) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(250, 204, 21, .2) 1px,
            transparent 1px
        );
    background-size: 22px 22px;
}

.hero-3604__machine {
    position: relative;
    z-index: 2;
    width: 190px;
    overflow: hidden;
    border: 2px solid #facc15;
    background: #111111;
    box-shadow:
        10px 10px 0 rgba(250, 204, 21, .22);
    transition:
        transform .2s ease,
        box-shadow .2s ease;
}

.hero-3604__visual:hover .hero-3604__machine {
    transform: translateY(-4px);
    box-shadow:
        14px 14px 0 rgba(250, 204, 21, .26);
}

.hero-3604__machine-top {
    height: 34px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(250, 204, 21, .35);
    color: #facc15;
    font-size: 6px;
    font-weight: 900;
}

.hero-3604__machine-status {
    display: flex;
    align-items: center;
    gap: 5px;
}

.hero-3604__machine-status i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 5px #facc15;
}

.hero-3604__machine-display {
    padding: 14px;
    color: #facc15;
}

.hero-3604__machine-display > span {
    display: block;
    color: #85741b;
    font-size: 6px;
    font-weight: 900;
    letter-spacing: .12em;
}

.hero-3604__machine-display > strong {
    display: block;
    margin-top: 4px;
    font-size: 26px;
    line-height: 1;
    letter-spacing: -.06em;
}

.hero-3604__progress {
    height: 7px;
    margin-top: 13px;
    border: 1px solid #facc15;
    padding: 1px;
}

.hero-3604__progress span {
    display: block;
    width: 82%;
    height: 100%;
    background:
        repeating-linear-gradient(
            90deg,
            #facc15 0,
            #facc15 7px,
            transparent 7px,
            transparent 10px
        );
}

.hero-3604__values {
    margin-top: 13px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}

.hero-3604__values > span {
    padding: 7px 5px;
    border: 1px solid rgba(250, 204, 21, .22);
    color: #766918;
    font-size: 5px;
}

.hero-3604__values strong {
    display: block;
    margin-top: 3px;
    color: #facc15;
    font-size: 8px;
}

.hero-3604__machine-bottom {
    height: 29px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(250, 204, 21, .35);
    color: #77691a;
    font-size: 5px;
}

.hero-3604__warning {
    position: absolute;
    z-index: 3;
    right: 18px;
    bottom: 20px;
    padding: 7px 9px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #facc15;
    background: #facc15;
    color: #111111;
    font-size: 6px;
    font-weight: 900;
}

@media (max-width: 700px) {
    .hero-3604 {
        grid-template-columns: 1fr;
    }

    .hero-3604__content {
        border-right: 0;
        border-bottom: 2px solid #171717;
    }

    .hero-3604__visual {
        min-height: 270px;
    }
}

@media (max-width: 480px) {
    .hero-3604__content {
        padding: 27px 21px;
    }

    .hero-3604 h1 {
        font-size: 38px;
    }

    .hero-3604__actions {
        flex-direction: column;
    }

    .hero-3604__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3605,
    name: "Graphite Swiss Hero",
    preview: (
      <section className="hero-3605">
        <div className="hero-3605__content">
          <div className="hero-3605__index">
            <span>01</span>
            <span>DIGITAL SYSTEMS</span>
          </div>

          <h1>
            Clear thinking.
            <span>Better products.</span>
          </h1>

          <p>
            A focused design system for teams building useful digital products
            without unnecessary complexity.
          </p>

          <div className="hero-3605__actions">
            <button type="button">
              Start project
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">View system</button>
          </div>
        </div>

        <div className="hero-3605__visual">
          <div className="hero-3605__grid"></div>

          <div className="hero-3605__panel">
            <div className="hero-3605__panel-top">
              <span>PROJECT_01</span>
              <span>ACTIVE</span>
            </div>

            <div className="hero-3605__panel-main">
              <span className="hero-3605__panel-label">PROGRESS</span>

              <strong>74%</strong>

              <div className="hero-3605__progress">
                <span></span>
              </div>

              <div className="hero-3605__data">
                <div>
                  <span>TASKS</span>
                  <strong>24</strong>
                </div>

                <div>
                  <span>DONE</span>
                  <strong>18</strong>
                </div>

                <div>
                  <span>TEAM</span>
                  <strong>06</strong>
                </div>
              </div>
            </div>

            <div className="hero-3605__panel-bottom">
              <span>UPDATED 08:42</span>
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>

          <div className="hero-3605__mark">
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3605">
    <div class="hero-3605__content">
        <div class="hero-3605__index">
            <span>01</span>
            <span>DIGITAL SYSTEMS</span>
        </div>

        <h1>
            Clear thinking.
            <span>Better products.</span>
        </h1>

        <p>
            A focused design system for teams building useful digital products without unnecessary complexity.
        </p>

        <div class="hero-3605__actions">
            <button type="button">
                Start project
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">View system</button>
        </div>
    </div>

    <div class="hero-3605__visual">
        <div class="hero-3605__grid"></div>

        <div class="hero-3605__panel">
            <div class="hero-3605__panel-top">
                <span>PROJECT_01</span>
                <span>ACTIVE</span>
            </div>

            <div class="hero-3605__panel-main">
                <span class="hero-3605__panel-label">PROGRESS</span>

                <strong>74%</strong>

                <div class="hero-3605__progress">
                    <span></span>
                </div>

                <div class="hero-3605__data">
                    <div>
                        <span>TASKS</span>
                        <strong>24</strong>
                    </div>

                    <div>
                        <span>DONE</span>
                        <strong>18</strong>
                    </div>

                    <div>
                        <span>TEAM</span>
                        <strong>06</strong>
                    </div>
                </div>
            </div>

            <div class="hero-3605__panel-bottom">
                <span>UPDATED 08:42</span>
                <i class="ri-arrow-right-up-line"></i>
            </div>
        </div>

        <div class="hero-3605__mark">
            <span></span>
            <span></span>
        </div>
    </div>
</section>`,
    css: `.hero-3605 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border: 1px solid #3f3f46;
    border-radius: 16px;
    background: #18181b;
    color: #f4f4f5;
    font-family: Arial, Helvetica, sans-serif;
}

.hero-3605__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #3f3f46;
}

.hero-3605__index {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #71717a;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .16em;
}

.hero-3605__index span:first-child {
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    border: 1px solid #52525b;
    color: #d4d4d8;
    font-size: 7px;
}

.hero-3605 h1 {
    max-width: 420px;
    margin: 15px 0 10px;
    font-size: 38px;
    line-height: .98;
    font-weight: 700;
    letter-spacing: -.055em;
}

.hero-3605 h1 span {
    display: block;
    color: #a1a1aa;
    font-weight: 400;
}

.hero-3605 p {
    max-width: 360px;
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3605__actions {
    margin-top: 22px;
    display: flex;
    gap: 8px;
}

.hero-3605__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 5px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        background .2s ease;
}

.hero-3605__actions button:hover {
    transform: translateY(-2px);
}

.hero-3605__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #f4f4f5;
    background: #f4f4f5;
    color: #18181b;
}

.hero-3605__actions button:last-child {
    border: 1px solid #52525b;
    background: transparent;
    color: #d4d4d8;
}

.hero-3605__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: #111113;
}

.hero-3605__grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            rgba(255, 255, 255, .035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, .035) 1px,
            transparent 1px
        );
    background-size: 30px 30px;
}

.hero-3605__panel {
    position: relative;
    z-index: 2;
    width: 190px;
    border: 1px solid #52525b;
    background: #1f1f22;
    box-shadow: 14px 14px 0 rgba(255, 255, 255, .035);
    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.hero-3605__visual:hover .hero-3605__panel {
    transform: translateY(-5px);
    box-shadow: 18px 18px 0 rgba(255, 255, 255, .045);
}

.hero-3605__panel-top {
    height: 34px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #3f3f46;
    color: #71717a;
    font-size: 6px;
    font-weight: 700;
    letter-spacing: .1em;
}

.hero-3605__panel-top span:last-child {
    color: #d4d4d8;
}

.hero-3605__panel-main {
    padding: 16px;
}

.hero-3605__panel-label {
    color: #71717a;
    font-size: 6px;
    font-weight: 700;
    letter-spacing: .15em;
}

.hero-3605__panel-main > strong {
    display: block;
    margin-top: 5px;
    color: #f4f4f5;
    font-size: 27px;
    font-weight: 500;
}

.hero-3605__progress {
    height: 5px;
    margin-top: 14px;
    background: #303036;
}

.hero-3605__progress span {
    display: block;
    width: 74%;
    height: 100%;
    background: #e4e4e7;
}

.hero-3605__data {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}

.hero-3605__data div {
    padding: 8px 5px;
    border: 1px solid #343439;
}

.hero-3605__data span {
    display: block;
    color: #62626b;
    font-size: 5px;
}

.hero-3605__data strong {
    display: block;
    margin-top: 3px;
    color: #d4d4d8;
    font-size: 9px;
}

.hero-3605__panel-bottom {
    height: 31px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #3f3f46;
    color: #62626b;
    font-size: 5px;
}

.hero-3605__panel-bottom i {
    color: #a1a1aa;
}

.hero-3605__mark {
    position: absolute;
    right: 20px;
    top: 19px;
    width: 25px;
    height: 25px;
}

.hero-3605__mark span:first-child {
    position: absolute;
    width: 25px;
    height: 1px;
    left: 0;
    top: 12px;
    background: #52525b;
}

.hero-3605__mark span:last-child {
    position: absolute;
    width: 1px;
    height: 25px;
    left: 12px;
    top: 0;
    background: #52525b;
}

@media (max-width: 700px) {
    .hero-3605 {
        grid-template-columns: 1fr;
    }

    .hero-3605__content {
        border-right: 0;
        border-bottom: 1px solid #3f3f46;
    }

    .hero-3605__visual {
        min-height: 260px;
    }
}

@media (max-width: 480px) {
    .hero-3605__content {
        padding: 28px 22px;
    }

    .hero-3605 h1 {
        font-size: 32px;
    }

    .hero-3605__actions {
        flex-direction: column;
    }

    .hero-3605__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3606,
    name: "Deep Blue Product Hero",
    preview: (
      <section className="hero-3606">
        <div className="hero-3606__content">
          <div className="hero-3606__badge">
            <span></span>
            Introducing Flow 2.0
          </div>

          <h1>
            Everything flows
            <span>better together.</span>
          </h1>

          <p>
            Plan, collaborate and deliver projects from one fast workspace built
            around your team.
          </p>

          <div className="hero-3606__actions">
            <button type="button">
              Get started
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">
              <i className="ri-play-circle-line"></i>
              Watch demo
            </button>
          </div>
        </div>

        <div className="hero-3606__visual">
          <div className="hero-3606__glow"></div>

          <div className="hero-3606__app">
            <div className="hero-3606__app-head">
              <div className="hero-3606__app-logo">
                <i className="ri-stack-fill"></i>
              </div>

              <span>Flow Dashboard</span>

              <div className="hero-3606__avatar">AM</div>
            </div>

            <div className="hero-3606__app-main">
              <div className="hero-3606__stat">
                <span>Active projects</span>
                <strong>12</strong>

                <div className="hero-3606__stat-line">
                  <span></span>
                </div>
              </div>

              <div className="hero-3606__stat">
                <span>Completed</span>
                <strong>86%</strong>

                <div className="hero-3606__stat-line">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="hero-3606__activity">
              <span>Recent activity</span>

              <div>
                <i className="ri-check-line"></i>
                <span>
                  <strong>Homepage approved</strong>
                  <small>2 min ago</small>
                </span>
              </div>

              <div>
                <i className="ri-file-add-line"></i>
                <span>
                  <strong>New file uploaded</strong>
                  <small>18 min ago</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-3606__float">
            <i className="ri-rocket-2-fill"></i>
            <span>
              <strong>Launch ready</strong>
              <small>All checks passed</small>
            </span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3606">
    <div class="hero-3606__content">
        <div class="hero-3606__badge">
            <span></span>
            Introducing Flow 2.0
        </div>

        <h1>
            Everything flows
            <span>better together.</span>
        </h1>

        <p>
            Plan, collaborate and deliver projects from one fast workspace built around your team.
        </p>

        <div class="hero-3606__actions">
            <button type="button">
                Get started
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">
                <i class="ri-play-circle-line"></i>
                Watch demo
            </button>
        </div>
    </div>

    <div class="hero-3606__visual">
        <div class="hero-3606__glow"></div>

        <div class="hero-3606__app">
            <div class="hero-3606__app-head">
                <div class="hero-3606__app-logo">
                    <i class="ri-stack-fill"></i>
                </div>

                <span>Flow Dashboard</span>

                <div class="hero-3606__avatar">AM</div>
            </div>

            <div class="hero-3606__app-main">
                <div class="hero-3606__stat">
                    <span>Active projects</span>
                    <strong>12</strong>

                    <div class="hero-3606__stat-line">
                        <span></span>
                    </div>
                </div>

                <div class="hero-3606__stat">
                    <span>Completed</span>
                    <strong>86%</strong>

                    <div class="hero-3606__stat-line">
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="hero-3606__activity">
                <span>Recent activity</span>

                <div>
                    <i class="ri-check-line"></i>
                    <span>
                        <strong>Homepage approved</strong>
                        <small>2 min ago</small>
                    </span>
                </div>

                <div>
                    <i class="ri-file-add-line"></i>
                    <span>
                        <strong>New file uploaded</strong>
                        <small>18 min ago</small>
                    </span>
                </div>
            </div>
        </div>

        <div class="hero-3606__float">
            <i class="ri-rocket-2-fill"></i>

            <span>
                <strong>Launch ready</strong>
                <small>All checks passed</small>
            </span>
        </div>
    </div>
</section>`,
    css: `.hero-3606 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 22px;
    background:
        radial-gradient(
            circle at 85% 20%,
            rgba(59, 130, 246, .22),
            transparent 36%
        ),
        linear-gradient(
            135deg,
            #07111f,
            #0c1f3c,
            #123a71
        );
    color: #ffffff;
    font-family: "Trebuchet MS", Arial, sans-serif;
}

.hero-3606__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3606__badge {
    width: fit-content;
    padding: 6px 9px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(147, 197, 253, .18);
    border-radius: 999px;
    background: rgba(59, 130, 246, .07);
    color: #93c5fd;
    font-size: 7px;
    font-weight: 700;
}

.hero-3606__badge > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #60a5fa;
    box-shadow: 0 0 6px #3b82f6;
}

.hero-3606 h1 {
    max-width: 420px;
    margin: 13px 0 9px;
    font-size: 37px;
    line-height: 1.02;
    letter-spacing: -.045em;
}

.hero-3606 h1 span {
    display: block;
    color: #60a5fa;
}

.hero-3606 p {
    max-width: 370px;
    margin: 0;
    color: #8ca3bf;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3606__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3606__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 10px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        box-shadow .2s ease;
}

.hero-3606__actions button:hover {
    transform: translateY(-2px);
}

.hero-3606__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0;
    background:
        linear-gradient(
            135deg,
            #60a5fa,
            #2563eb
        );
    color: #ffffff;
    box-shadow:
        0 9px 22px rgba(37, 99, 235, .25);
}

.hero-3606__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(147, 197, 253, .18);
    background: rgba(255, 255, 255, .035);
    color: #bfdbfe;
}

.hero-3606__visual {
    position: relative;
    display: grid;
    place-items: center;
    padding: 25px;
}

.hero-3606__glow {
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #2563eb;
    opacity: .16;
    filter: blur(35px);
}

.hero-3606__app {
    position: relative;
    z-index: 2;
    width: min(100%, 270px);
    overflow: hidden;
    border: 1px solid rgba(147, 197, 253, .16);
    border-radius: 16px;
    background: rgba(7, 19, 38, .88);
    box-shadow:
        0 24px 45px rgba(0, 0, 0, .28);
    backdrop-filter: blur(12px);
    transition: transform .25s ease;
}

.hero-3606__visual:hover .hero-3606__app {
    transform: translateY(-5px) rotate(-1deg);
}

.hero-3606__app-head {
    height: 42px;
    padding: 0 11px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid rgba(147, 197, 253, .08);
}

.hero-3606__app-logo {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border-radius: 7px;
    background: rgba(59, 130, 246, .13);
    color: #60a5fa;
    font-size: 11px;
}

.hero-3606__app-head > span {
    color: #647f9f;
    font-size: 6px;
}

.hero-3606__avatar {
    justify-self: end;
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #1e3a5f;
    color: #bfdbfe;
    font-size: 6px;
}

.hero-3606__app-main {
    padding: 13px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.hero-3606__stat {
    padding: 10px;
    border: 1px solid rgba(147, 197, 253, .08);
    border-radius: 9px;
    background: rgba(255, 255, 255, .018);
}

.hero-3606__stat > span {
    display: block;
    color: #58718e;
    font-size: 6px;
}

.hero-3606__stat > strong {
    display: block;
    margin-top: 4px;
    color: #dbeafe;
    font-size: 15px;
}

.hero-3606__stat-line {
    height: 3px;
    margin-top: 8px;
    border-radius: 999px;
    background: #142b46;
}

.hero-3606__stat-line span {
    display: block;
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #3b82f6;
}

.hero-3606__stat:nth-child(2) .hero-3606__stat-line span {
    width: 86%;
    background: #60a5fa;
}

.hero-3606__activity {
    margin: 0 13px 13px;
    padding: 10px;
    border: 1px solid rgba(147, 197, 253, .07);
    border-radius: 9px;
}

.hero-3606__activity > span {
    color: #647f9f;
    font-size: 6px;
}

.hero-3606__activity > div {
    min-height: 35px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(147, 197, 253, .05);
}

.hero-3606__activity > div:last-child {
    border-bottom: 0;
}

.hero-3606__activity i {
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: rgba(59, 130, 246, .1);
    color: #60a5fa;
    font-size: 9px;
}

.hero-3606__activity > div > span {
    display: flex;
    flex-direction: column;
}

.hero-3606__activity strong {
    color: #aac3de;
    font-size: 6px;
}

.hero-3606__activity small {
    margin-top: 2px;
    color: #435b75;
    font-size: 5px;
}

.hero-3606__float {
    position: absolute;
    z-index: 3;
    right: 18px;
    bottom: 21px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(147, 197, 253, .13);
    border-radius: 10px;
    background: rgba(10, 28, 54, .9);
    box-shadow: 0 12px 25px rgba(0, 0, 0, .22);
    backdrop-filter: blur(9px);
}

.hero-3606__float > i {
    color: #60a5fa;
    font-size: 12px;
}

.hero-3606__float > span {
    display: flex;
    flex-direction: column;
}

.hero-3606__float strong {
    color: #dbeafe;
    font-size: 6px;
}

.hero-3606__float small {
    margin-top: 2px;
    color: #58718e;
    font-size: 5px;
}

@media (max-width: 700px) {
    .hero-3606 {
        grid-template-columns: 1fr;
    }

    .hero-3606__visual {
        min-height: 280px;
    }
}

@media (max-width: 480px) {
    .hero-3606__content {
        padding: 28px 22px;
    }

    .hero-3606 h1 {
        font-size: 31px;
    }

    .hero-3606__actions {
        flex-direction: column;
    }

    .hero-3606__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3607,
    name: "Purple Creative Cloud Hero",
    preview: (
      <section className="hero-3607">
        <div className="hero-3607__content">
          <span className="hero-3607__eyebrow">Creativity, connected</span>

          <h1>
            Make something
            <span>worth sharing.</span>
          </h1>

          <p>
            Bring your ideas, files and creative tools together in one
            expressive workspace made for modern creators.
          </p>

          <div className="hero-3607__actions">
            <button type="button">
              Create workspace
              <i className="ri-arrow-right-line"></i>
            </button>

            <button type="button">Browse templates</button>
          </div>
        </div>

        <div className="hero-3607__visual">
          <div className="hero-3607__blob hero-3607__blob-1"></div>
          <div className="hero-3607__blob hero-3607__blob-2"></div>

          <div className="hero-3607__creator-card">
            <div className="hero-3607__creator-top">
              <span className="hero-3607__creator-icon">
                <i className="ri-magic-fill"></i>
              </span>

              <span className="hero-3607__creator-menu">
                <i className="ri-more-2-fill"></i>
              </span>
            </div>

            <div className="hero-3607__creator-copy">
              <span>CREATIVE SPACE</span>
              <strong>Studio 04</strong>
              <small>12 active projects</small>
            </div>

            <div className="hero-3607__creator-preview">
              <span className="hero-3607__preview-a"></span>
              <span className="hero-3607__preview-b"></span>
              <span className="hero-3607__preview-c"></span>
            </div>

            <div className="hero-3607__creator-users">
              <span>AK</span>
              <span>LS</span>
              <span>MR</span>
              <strong>+8</strong>
            </div>
          </div>

          <div className="hero-3607__floating">
            <span>
              <i className="ri-sparkling-fill"></i>
            </span>

            <div>
              <strong>New idea saved</strong>
              <small>Just now</small>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3607">
    <div class="hero-3607__content">
        <span class="hero-3607__eyebrow">
            Creativity, connected
        </span>

        <h1>
            Make something
            <span>worth sharing.</span>
        </h1>

        <p>
            Bring your ideas, files and creative tools together in one expressive workspace made for modern creators.
        </p>

        <div class="hero-3607__actions">
            <button type="button">
                Create workspace
                <i class="ri-arrow-right-line"></i>
            </button>

            <button type="button">Browse templates</button>
        </div>
    </div>

    <div class="hero-3607__visual">
        <div class="hero-3607__blob hero-3607__blob-1"></div>
        <div class="hero-3607__blob hero-3607__blob-2"></div>

        <div class="hero-3607__creator-card">
            <div class="hero-3607__creator-top">
                <span class="hero-3607__creator-icon">
                    <i class="ri-magic-fill"></i>
                </span>

                <span class="hero-3607__creator-menu">
                    <i class="ri-more-2-fill"></i>
                </span>
            </div>

            <div class="hero-3607__creator-copy">
                <span>CREATIVE SPACE</span>
                <strong>Studio 04</strong>
                <small>12 active projects</small>
            </div>

            <div class="hero-3607__creator-preview">
                <span class="hero-3607__preview-a"></span>
                <span class="hero-3607__preview-b"></span>
                <span class="hero-3607__preview-c"></span>
            </div>

            <div class="hero-3607__creator-users">
                <span>AK</span>
                <span>LS</span>
                <span>MR</span>
                <strong>+8</strong>
            </div>
        </div>

        <div class="hero-3607__floating">
            <span>
                <i class="ri-sparkling-fill"></i>
            </span>

            <div>
                <strong>New idea saved</strong>
                <small>Just now</small>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3607 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 22px;
    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(192, 132, 252, .16),
            transparent 32%
        ),
        linear-gradient(
            135deg,
            #170a2a,
            #28114a,
            #3b1769
        );
    color: #ffffff;
    font-family: "Trebuchet MS", Arial, sans-serif;
}

.hero-3607__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3607__eyebrow {
    color: #d8b4fe;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3607 h1 {
    max-width: 410px;
    margin: 12px 0 10px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 39px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -.04em;
}

.hero-3607 h1 span {
    display: block;
    color: #c084fc;
    font-style: italic;
}

.hero-3607 p {
    max-width: 370px;
    margin: 0;
    color: #ab95bd;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3607__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3607__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 10px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .2s ease,
        border-color .2s ease;
}

.hero-3607__actions button:hover {
    transform: translateY(-2px);
}

.hero-3607__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0;
    background:
        linear-gradient(
            135deg,
            #c084fc,
            #9333ea
        );
    color: #ffffff;
    box-shadow:
        0 9px 24px rgba(147, 51, 234, .25);
}

.hero-3607__actions button:last-child {
    border: 1px solid rgba(216, 180, 254, .18);
    background: rgba(255, 255, 255, .04);
    color: #e9d5ff;
}

.hero-3607__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.hero-3607__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(5px);
}

.hero-3607__blob-1 {
    width: 180px;
    height: 180px;
    right: 35px;
    top: 23px;
    background:
        linear-gradient(
            135deg,
            rgba(192, 132, 252, .34),
            rgba(126, 34, 206, .11)
        );
}

.hero-3607__blob-2 {
    width: 115px;
    height: 115px;
    left: 25px;
    bottom: 20px;
    background:
        linear-gradient(
            135deg,
            rgba(236, 72, 153, .22),
            rgba(168, 85, 247, .12)
        );
}

.hero-3607__creator-card {
    position: relative;
    z-index: 2;
    width: 175px;
    padding: 16px;
    border: 1px solid rgba(233, 213, 255, .16);
    border-radius: 17px;
    background: rgba(39, 18, 70, .74);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, .28);
    backdrop-filter: blur(14px);
    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.hero-3607__visual:hover .hero-3607__creator-card {
    transform: translateY(-5px) rotate(2deg);
    box-shadow:
        0 26px 46px rgba(0, 0, 0, .32);
}

.hero-3607__creator-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-3607__creator-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: rgba(192, 132, 252, .14);
    color: #d8b4fe;
    font-size: 14px;
}

.hero-3607__creator-menu {
    color: #826b95;
    font-size: 13px;
}

.hero-3607__creator-copy {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
}

.hero-3607__creator-copy > span {
    color: #8f75a3;
    font-size: 5px;
    font-weight: 800;
    letter-spacing: .14em;
}

.hero-3607__creator-copy strong {
    margin-top: 3px;
    color: #f3e8ff;
    font-family: Georgia, serif;
    font-size: 16px;
    font-weight: 400;
}

.hero-3607__creator-copy small {
    margin-top: 3px;
    color: #896f9b;
    font-size: 6px;
}

.hero-3607__creator-preview {
    height: 54px;
    margin-top: 13px;
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    grid-template-rows: 1fr 1fr;
    gap: 4px;
}

.hero-3607__creator-preview span {
    border-radius: 6px;
}

.hero-3607__preview-a {
    grid-row: 1 / 3;
    background:
        linear-gradient(
            145deg,
            #7e22ce,
            #c084fc
        );
}

.hero-3607__preview-b {
    background:
        linear-gradient(
            135deg,
            #db2777,
            #9333ea
        );
}

.hero-3607__preview-c {
    background:
        linear-gradient(
            135deg,
            #4c1d95,
            #7e22ce
        );
}

.hero-3607__creator-users {
    margin-top: 12px;
    display: flex;
    align-items: center;
}

.hero-3607__creator-users span,
.hero-3607__creator-users strong {
    width: 23px;
    height: 23px;
    margin-left: -5px;
    display: grid;
    place-items: center;
    border: 2px solid #2c134d;
    border-radius: 50%;
    background: #4c1d75;
    color: #e9d5ff;
    font-size: 5px;
}

.hero-3607__creator-users span:first-child {
    margin-left: 0;
}

.hero-3607__creator-users strong {
    background: #241038;
    color: #b99ccc;
    font-weight: 600;
}

.hero-3607__floating {
    position: absolute;
    z-index: 3;
    right: 21px;
    bottom: 24px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(233, 213, 255, .13);
    border-radius: 11px;
    background: rgba(31, 12, 55, .88);
    box-shadow: 0 13px 27px rgba(0, 0, 0, .22);
    backdrop-filter: blur(9px);
}

.hero-3607__floating > span {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: rgba(192, 132, 252, .13);
    color: #d8b4fe;
    font-size: 11px;
}

.hero-3607__floating > div {
    display: flex;
    flex-direction: column;
}

.hero-3607__floating strong {
    color: #eadcf4;
    font-size: 6px;
}

.hero-3607__floating small {
    margin-top: 2px;
    color: #806991;
    font-size: 5px;
}

@media (max-width: 700px) {
    .hero-3607 {
        grid-template-columns: 1fr;
    }

    .hero-3607__visual {
        min-height: 275px;
    }
}

@media (max-width: 480px) {
    .hero-3607__content {
        padding: 28px 22px;
    }

    .hero-3607 h1 {
        font-size: 32px;
    }

    .hero-3607__actions {
        flex-direction: column;
    }

    .hero-3607__actions button {
        width: 100%;
    }
}`,
  },
  {
    id: 3608,
    name: "Red Impact Hero",
    preview: (
      <section className="hero-3608">
        <div className="hero-3608__content">
          <span className="hero-3608__label">01 — DIGITAL EXPERIENCES</span>

          <h1>
            MAKE IT
            <span>LOUD.</span>
          </h1>

          <div className="hero-3608__bottom">
            <p>
              Bold digital products for brands that refuse to disappear into the
              background.
            </p>

            <button type="button">
              ENTER
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3608__circle">
          <i className="ri-flashlight-fill"></i>
        </div>
      </section>
    ),
    html: `<section class="hero-3608">
    <div class="hero-3608__content">
        <span class="hero-3608__label">
            01 — DIGITAL EXPERIENCES
        </span>

        <h1>
            MAKE IT
            <span>LOUD.</span>
        </h1>

        <div class="hero-3608__bottom">
            <p>
                Bold digital products for brands that refuse to disappear into the background.
            </p>

            <button type="button">
                ENTER
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3608__circle">
        <i class="ri-flashlight-fill"></i>
    </div>
</section>`,
    css: `.hero-3608 {
    position: relative;
    min-height: 390px;
    overflow: hidden;
    border-radius: 22px;
    background:
        linear-gradient(
            135deg,
            #450a0a,
            #7f1d1d,
            #991b1b
        );
    color: #ffffff;
    font-family: Impact, "Arial Black", sans-serif;
}

.hero-3608__content {
    position: relative;
    z-index: 2;
    min-height: 390px;
    padding: 34px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hero-3608__label {
    color: #fca5a5;
    font-family: Arial, sans-serif;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .18em;
}

.hero-3608 h1 {
    max-width: 700px;
    margin: 25px 0;
    font-size: clamp(68px, 11vw, 125px);
    line-height: .76;
    letter-spacing: -.055em;
    font-weight: 900;
}

.hero-3608 h1 span {
    display: block;
    color: #ef4444;
    -webkit-text-stroke: 1px rgba(255, 255, 255, .35);
}

.hero-3608__bottom {
    max-width: 650px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 25px;
}

.hero-3608__bottom p {
    max-width: 390px;
    margin: 0;
    color: #fecaca;
    font-family: Arial, sans-serif;
    font-size: 12px;
    line-height: 1.65;
}

.hero-3608__bottom button {
    height: 45px;
    padding: 0 17px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 2px solid #ffffff;
    border-radius: 0;
    background: #ffffff;
    color: #7f1d1d;
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition:
        transform .2s ease,
        background .2s ease;
}

.hero-3608__bottom button:hover {
    transform: translate(-3px, -3px);
    background: #fee2e2;
}

.hero-3608__circle {
    position: absolute;
    width: 330px;
    height: 330px;
    right: -75px;
    top: 50%;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ef4444,
            #991b1b 70%
        );
    box-shadow:
        -20px 20px 90px rgba(239, 68, 68, .3);
    color: #fee2e2;
    font-size: 74px;
    transform: translateY(-50%);
}

@media (max-width: 700px) {
    .hero-3608__circle {
        opacity: .35;
        right: -130px;
    }
}

@media (max-width: 480px) {
    .hero-3608__content {
        padding: 28px 22px;
    }

    .hero-3608 h1 {
        font-size: 70px;
    }

    .hero-3608__bottom {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3609,
    name: "Orange Energy Hero",
    preview: (
      <section className="hero-3609">
        <div className="hero-3609__label">NO. 002 — PRODUCT STUDIO</div>

        <div className="hero-3609__main">
          <h1>
            BUILD
            <span>HOTTER.</span>
          </h1>

          <div className="hero-3609__copy">
            <p>
              Fast-moving products for ambitious teams that want momentum from
              day one.
            </p>

            <button type="button">
              START BUILDING
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3609__sun">
          <span></span>
        </div>
      </section>
    ),
    html: `<section class="hero-3609">
    <div class="hero-3609__label">
        NO. 002 — PRODUCT STUDIO
    </div>

    <div class="hero-3609__main">
        <h1>
            BUILD
            <span>HOTTER.</span>
        </h1>

        <div class="hero-3609__copy">
            <p>
                Fast-moving products for ambitious teams that want momentum from day one.
            </p>

            <button type="button">
                START BUILDING
                <i class="ri-arrow-right-up-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3609__sun">
        <span></span>
    </div>
</section>`,
    css: `.hero-3609 {
    position: relative;
    min-height: 390px;
    overflow: hidden;
    padding: 30px;
    border: 4px solid #1c0a00;
    background: #f97316;
    color: #1c0a00;
    font-family: "Arial Black", Arial, sans-serif;
}

.hero-3609__label {
    position: relative;
    z-index: 2;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .16em;
}

.hero-3609__main {
    position: relative;
    z-index: 2;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hero-3609 h1 {
    margin: 29px 0 20px;
    font-size: clamp(68px, 11vw, 120px);
    line-height: .76;
    letter-spacing: -.065em;
}

.hero-3609 h1 span {
    display: block;
    color: #fff7ed;
}

.hero-3609__copy {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
}

.hero-3609__copy p {
    max-width: 390px;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.65;
}

.hero-3609__copy button {
    height: 47px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    gap: 13px;
    border: 3px solid #1c0a00;
    background: #fff7ed;
    color: #1c0a00;
    font: inherit;
    font-size: 9px;
    cursor: pointer;
    transition:
        transform .2s ease,
        box-shadow .2s ease;
}

.hero-3609__copy button:hover {
    transform: translate(-4px, -4px);
    box-shadow: 5px 5px 0 #1c0a00;
}

.hero-3609__sun {
    position: absolute;
    width: 260px;
    height: 260px;
    right: -45px;
    top: -55px;
    border: 28px solid rgba(255, 247, 237, .25);
    border-radius: 50%;
}

.hero-3609__sun span {
    position: absolute;
    inset: 28px;
    border-radius: 50%;
    background: rgba(255, 247, 237, .12);
}

@media (max-width: 520px) {
    .hero-3609 {
        padding: 23px;
    }

    .hero-3609 h1 {
        font-size: 68px;
    }

    .hero-3609__copy {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3610,
    name: "Yellow Big Ideas Hero",
    preview: (
      <section className="hero-3610">
        <div className="hero-3610__label">NO. 003 — DIGITAL PRODUCT</div>

        <h1>
          BIG
          <br />
          IDEAS.
        </h1>

        <div className="hero-3610__bottom">
          <p>Bold digital products for people who refuse to blend in.</p>

          <button type="button">
            ENTER
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="hero-3610">
    <div class="hero-3610__label">
        NO. 003 — DIGITAL PRODUCT
    </div>

    <h1>
        BIG
        <br>
        IDEAS.
    </h1>

    <div class="hero-3610__bottom">
        <p>
            Bold digital products for people who refuse to blend in.
        </p>

        <button type="button">
            ENTER
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.hero-3610 {
    min-height: 390px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #111111;
    border-radius: 0;
    background: #facc15;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;
}

.hero-3610__label {
    font-size: 9px;
    font-weight: 900;
    letter-spacing: .13em;
}

.hero-3610 h1 {
    margin: 30px 0;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(76px, 12vw, 135px);
    line-height: .72;
    letter-spacing: -.055em;
    font-weight: 950;
}

.hero-3610__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
}

.hero-3610__bottom p {
    max-width: 380px;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.45;
}

.hero-3610__bottom button {
    height: 48px;
    padding: 0 20px;
    display: inline-flex;
    align-items: center;
    gap: 18px;
    border: 3px solid #111111;
    background: #f5f5f5;
    color: #111111;
    font: inherit;
    font-size: 9px;
    font-weight: 950;
    cursor: pointer;
    transition:
        transform .15s ease,
        box-shadow .15s ease;
}

.hero-3610__bottom button:hover {
    transform: translate(-4px, -4px);
    box-shadow: 5px 5px 0 #111111;
}

@media (max-width: 520px) {
    .hero-3610 {
        min-height: 420px;
        padding: 22px;
    }

    .hero-3610 h1 {
        font-size: 78px;
    }

    .hero-3610__bottom {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3611,
    name: "Green Growth Hero",
    preview: (
      <section className="hero-3611">
        <div className="hero-3611__content">
          <span className="hero-3611__eyebrow">BUILT TO GROW</span>

          <h1>
            Ideas need
            <span>room to grow.</span>
          </h1>

          <p>
            A calm digital workspace for planning, building and scaling your
            next great product.
          </p>

          <div className="hero-3611__actions">
            <button type="button">Start growing</button>

            <button type="button">
              Explore platform
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3611__visual">
          <div className="hero-3611__ring"></div>

          <div className="hero-3611__plant">
            <span className="hero-3611__leaf hero-3611__leaf-1"></span>
            <span className="hero-3611__leaf hero-3611__leaf-2"></span>
            <span className="hero-3611__leaf hero-3611__leaf-3"></span>
            <span className="hero-3611__stem"></span>
          </div>

          <div className="hero-3611__metric">
            <span>GROWTH</span>
            <strong>+32%</strong>
            <small>this quarter</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3611">
    <div class="hero-3611__content">
        <span class="hero-3611__eyebrow">
            BUILT TO GROW
        </span>

        <h1>
            Ideas need
            <span>room to grow.</span>
        </h1>

        <p>
            A calm digital workspace for planning, building and scaling your next great product.
        </p>

        <div class="hero-3611__actions">
            <button type="button">Start growing</button>

            <button type="button">
                Explore platform
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3611__visual">
        <div class="hero-3611__ring"></div>

        <div class="hero-3611__plant">
            <span class="hero-3611__leaf hero-3611__leaf-1"></span>
            <span class="hero-3611__leaf hero-3611__leaf-2"></span>
            <span class="hero-3611__leaf hero-3611__leaf-3"></span>
            <span class="hero-3611__stem"></span>
        </div>

        <div class="hero-3611__metric">
            <span>GROWTH</span>
            <strong>+32%</strong>
            <small>this quarter</small>
        </div>
    </div>
</section>`,
    css: `.hero-3611 {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 28px;
    background:
        linear-gradient(
            135deg,
            #052e16,
            #14532d,
            #166534
        );
    color: #f0fdf4;
    font-family: Georgia, "Times New Roman", serif;
}

.hero-3611__content {
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3611__eyebrow {
    color: #86efac;
    font-family: Arial, sans-serif;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .2em;
}

.hero-3611 h1 {
    max-width: 520px;
    margin: 15px 0 13px;
    font-size: clamp(45px, 7vw, 69px);
    line-height: .96;
    font-weight: 400;
    letter-spacing: -.05em;
}

.hero-3611 h1 span {
    display: block;
    color: #86efac;
    font-style: italic;
}

.hero-3611 p {
    max-width: 420px;
    margin: 0;
    color: #bbf7d0;
    font-family: Arial, sans-serif;
    font-size: 11px;
    line-height: 1.75;
    opacity: .7;
}

.hero-3611__actions {
    margin-top: 25px;
    display: flex;
    gap: 9px;
}

.hero-3611__actions button {
    height: 42px;
    padding: 0 16px;
    border-radius: 999px;
    font-family: Arial, sans-serif;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3611__actions button:first-child {
    border: 0;
    background: #dcfce7;
    color: #14532d;
}

.hero-3611__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(220, 252, 231, .2);
    background: transparent;
    color: #dcfce7;
}

.hero-3611__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.hero-3611__ring {
    position: absolute;
    width: 250px;
    height: 250px;
    border: 1px solid rgba(134, 239, 172, .23);
    border-radius: 50%;
}

.hero-3611__ring::before {
    content: "";
    position: absolute;
    inset: 30px;
    border: 1px solid rgba(134, 239, 172, .12);
    border-radius: 50%;
}

.hero-3611__plant {
    position: relative;
    width: 170px;
    height: 230px;
}

.hero-3611__stem {
    position: absolute;
    width: 5px;
    height: 170px;
    left: 82px;
    bottom: 14px;
    border-radius: 999px;
    background:
        linear-gradient(
            #86efac,
            #15803d
        );
}

.hero-3611__leaf {
    position: absolute;
    width: 75px;
    height: 45px;
    background:
        linear-gradient(
            135deg,
            #bbf7d0,
            #22c55e
        );
}

.hero-3611__leaf-1 {
    left: 14px;
    top: 47px;
    border-radius: 90% 0 90% 0;
    transform: rotate(17deg);
}

.hero-3611__leaf-2 {
    right: 12px;
    top: 87px;
    border-radius: 0 90% 0 90%;
    transform: rotate(-13deg);
}

.hero-3611__leaf-3 {
    left: 19px;
    top: 125px;
    border-radius: 90% 0 90% 0;
    transform: rotate(8deg);
}

.hero-3611__metric {
    position: absolute;
    right: 24px;
    bottom: 25px;
    padding: 11px 13px;
    border: 1px solid rgba(220, 252, 231, .17);
    border-radius: 13px;
    background: rgba(5, 46, 22, .7);
    backdrop-filter: blur(10px);
}

.hero-3611__metric span,
.hero-3611__metric small {
    display: block;
    font-family: Arial, sans-serif;
}

.hero-3611__metric span {
    color: #86efac;
    font-size: 6px;
    letter-spacing: .12em;
}

.hero-3611__metric strong {
    display: block;
    margin-top: 3px;
    font-size: 17px;
    font-weight: 400;
}

.hero-3611__metric small {
    margin-top: 2px;
    color: #86a991;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3611 {
        grid-template-columns: 1fr;
    }

    .hero-3611__visual {
        min-height: 300px;
    }
}

@media (max-width: 480px) {
    .hero-3611__content {
        padding: 32px 23px;
    }

    .hero-3611__actions {
        flex-direction: column;
    }
}`,
  },
  {
    id: 3612,
    name: "Cyan Future Hero",
    preview: (
      <section className="hero-3612">
        <div className="hero-3612__top">
          <span>04 / NEXT GENERATION</span>
          <span>ONLINE</span>
        </div>

        <div className="hero-3612__content">
          <h1>
            MOVE
            <span>FORWARD.</span>
          </h1>

          <p>
            Tools for modern teams building fast, connected and intelligent
            digital products.
          </p>

          <button type="button">
            EXPLORE SYSTEM
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3612__orb">
          <div className="hero-3612__orb-core">
            <i className="ri-focus-3-line"></i>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3612">
    <div class="hero-3612__top">
        <span>04 / NEXT GENERATION</span>
        <span>ONLINE</span>
    </div>

    <div class="hero-3612__content">
        <h1>
            MOVE
            <span>FORWARD.</span>
        </h1>

        <p>
            Tools for modern teams building fast, connected and intelligent digital products.
        </p>

        <button type="button">
            EXPLORE SYSTEM
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3612__orb">
        <div class="hero-3612__orb-core">
            <i class="ri-focus-3-line"></i>
        </div>
    </div>
</section>`,
    css: `.hero-3612 {
    position: relative;
    min-height: 390px;
    overflow: hidden;
    padding: 28px 32px;
    border: 1px solid rgba(103, 232, 249, .35);
    border-radius: 18px;
    background:
        linear-gradient(
            135deg,
            #042f3e,
            #083344,
            #164e63
        );
    color: #ecfeff;
    font-family: "Courier New", Courier, monospace;
}

.hero-3612::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            rgba(103, 232, 249, .05) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(103, 232, 249, .05) 1px,
            transparent 1px
        );
    background-size: 34px 34px;
}

.hero-3612__top {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    color: #67e8f9;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .15em;
}

.hero-3612__content {
    position: relative;
    z-index: 3;
    max-width: 650px;
    margin-top: 62px;
}

.hero-3612 h1 {
    margin: 0;
    font-size: clamp(62px, 10vw, 110px);
    line-height: .78;
    letter-spacing: -.075em;
}

.hero-3612 h1 span {
    display: block;
    color: #67e8f9;
}

.hero-3612 p {
    max-width: 410px;
    margin: 24px 0 0;
    color: #9acbd2;
    font-family: Arial, sans-serif;
    font-size: 11px;
    line-height: 1.7;
}

.hero-3612 button {
    margin-top: 23px;
    height: 42px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #67e8f9;
    background: transparent;
    color: #67e8f9;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
    transition:
        background .2s ease,
        color .2s ease;
}

.hero-3612 button:hover {
    background: #67e8f9;
    color: #083344;
}

.hero-3612__orb {
    position: absolute;
    width: 310px;
    height: 310px;
    right: -45px;
    top: 50%;
    display: grid;
    place-items: center;
    border: 1px solid rgba(103, 232, 249, .3);
    border-radius: 50%;
    transform: translateY(-50%);
}

.hero-3612__orb::before,
.hero-3612__orb::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}

.hero-3612__orb::before {
    inset: 35px;
    border: 1px solid rgba(103, 232, 249, .18);
}

.hero-3612__orb::after {
    inset: 75px;
    background:
        radial-gradient(
            circle,
            rgba(34, 211, 238, .34),
            rgba(8, 145, 178, .08)
        );
    filter: blur(3px);
}

.hero-3612__orb-core {
    position: relative;
    z-index: 2;
    width: 82px;
    height: 82px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(165, 243, 252, .35);
    border-radius: 50%;
    background: rgba(34, 211, 238, .1);
    color: #a5f3fc;
    font-size: 28px;
    box-shadow:
        0 0 40px rgba(34, 211, 238, .17);
}

@media (max-width: 700px) {
    .hero-3612__orb {
        right: -160px;
        opacity: .45;
    }
}

@media (max-width: 480px) {
    .hero-3612 {
        padding: 24px 20px;
    }

    .hero-3612 h1 {
        font-size: 65px;
    }
}`,
  },
  {
    id: 3613,
    name: "Blue Launch Hero",
    preview: (
      <section className="hero-3613">
        <div className="hero-3613__content">
          <span className="hero-3613__eyebrow">LAUNCH SOMETHING GREAT</span>

          <h1>
            Ship faster.
            <span>Dream bigger.</span>
          </h1>

          <p>
            A modern platform for teams turning ambitious ideas into real
            products.
          </p>

          <div className="hero-3613__actions">
            <button type="button">Get started</button>
            <button type="button">Learn more</button>
          </div>
        </div>

        <div className="hero-3613__circle">
          <i className="ri-rocket-2-fill"></i>
        </div>
      </section>
    ),
    html: `<section class="hero-3613">
    <div class="hero-3613__content">
        <span class="hero-3613__eyebrow">
            LAUNCH SOMETHING GREAT
        </span>

        <h1>
            Ship faster.
            <span>Dream bigger.</span>
        </h1>

        <p>
            A modern platform for teams turning ambitious ideas into real products.
        </p>

        <div class="hero-3613__actions">
            <button type="button">Get started</button>
            <button type="button">Learn more</button>
        </div>
    </div>

    <div class="hero-3613__circle">
        <i class="ri-rocket-2-fill"></i>
    </div>
</section>`,
    css: `.hero-3613 {
    position: relative;
    min-height: 390px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    background:
        linear-gradient(
            135deg,
            #172554,
            #1e3a8a,
            #1d4ed8
        );
    color: #ffffff;
    font-family: "Trebuchet MS", Arial, sans-serif;
}

.hero-3613__content {
    position: relative;
    z-index: 2;
    max-width: 650px;
    padding: 50px;
}

.hero-3613__eyebrow {
    color: #93c5fd;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .2em;
}

.hero-3613 h1 {
    margin: 17px 0;
    font-size: clamp(45px, 7vw, 74px);
    line-height: .94;
    letter-spacing: -.045em;
}

.hero-3613 h1 span {
    display: block;
    color: #bfdbfe;
}

.hero-3613 p {
    max-width: 500px;
    margin: 0;
    color: #bfdbfe;
    font-size: 11px;
    line-height: 1.8;
    opacity: .75;
}

.hero-3613__actions {
    display: flex;
    gap: 10px;
    margin-top: 25px;
}

.hero-3613__actions button {
    height: 42px;
    padding: 0 18px;
    border-radius: 10px;
    font: inherit;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
}

.hero-3613__actions button:first-child {
    border: 0;
    background: #ffffff;
    color: #1e40af;
}

.hero-3613__actions button:last-child {
    border: 1px solid rgba(255, 255, 255, .25);
    background: transparent;
    color: #ffffff;
}

.hero-3613__circle {
    position: absolute;
    right: -70px;
    width: 315px;
    height: 315px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #60a5fa,
            #1d4ed8 70%
        );
    box-shadow:
        -20px 20px 90px rgba(59, 130, 246, .25);
    color: #dbeafe;
    font-size: 72px;
}

.hero-3613__circle::before {
    content: "";
    position: absolute;
    inset: 35px;
    border: 1px solid rgba(219, 234, 254, .25);
    border-radius: 50%;
}

@media (max-width: 700px) {
    .hero-3613__circle {
        right: -150px;
        opacity: .42;
    }
}

@media (max-width: 480px) {
    .hero-3613__content {
        padding: 34px 22px;
    }

    .hero-3613__actions {
        flex-direction: column;
    }
}`,
  },
  {
    id: 3614,
    name: "Indigo System Hero",
    preview: (
      <section className="hero-3614">
        <div className="hero-3614__number">06</div>

        <div className="hero-3614__content">
          <span>SYSTEM / CREATIVE TECHNOLOGY</span>

          <h1>
            DESIGN
            <br />
            <em>THE NEXT.</em>
          </h1>

          <div className="hero-3614__footer">
            <p>
              Interfaces, systems and products made for the next generation of
              digital experiences.
            </p>

            <button type="button">
              OPEN SYSTEM
              <i className="ri-corner-right-up-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3614__shape">
          <span></span>
        </div>
      </section>
    ),
    html: `<section class="hero-3614">
    <div class="hero-3614__number">06</div>

    <div class="hero-3614__content">
        <span>SYSTEM / CREATIVE TECHNOLOGY</span>

        <h1>
            DESIGN
            <br>
            <em>THE NEXT.</em>
        </h1>

        <div class="hero-3614__footer">
            <p>
                Interfaces, systems and products made for the next generation of digital experiences.
            </p>

            <button type="button">
                OPEN SYSTEM
                <i class="ri-corner-right-up-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3614__shape">
        <span></span>
    </div>
</section>`,
    css: `.hero-3614 {
    position: relative;
    min-height: 390px;
    overflow: hidden;
    padding: 30px;
    border: 2px solid #312e81;
    background: #0f102a;
    color: #eef2ff;
    font-family: Arial, Helvetica, sans-serif;
}

.hero-3614__number {
    position: absolute;
    right: 25px;
    top: 18px;
    color: #4f46e5;
    font-size: 55px;
    font-weight: 900;
    line-height: 1;
    opacity: .32;
}

.hero-3614__content {
    position: relative;
    z-index: 2;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hero-3614__content > span {
    color: #818cf8;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .2em;
}

.hero-3614 h1 {
    margin: 27px 0;
    font-size: clamp(66px, 11vw, 120px);
    line-height: .74;
    letter-spacing: -.07em;
    font-weight: 900;
}

.hero-3614 h1 em {
    color: #818cf8;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3614__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 25px;
}

.hero-3614__footer p {
    max-width: 410px;
    margin: 0;
    color: #8b8dac;
    font-size: 11px;
    line-height: 1.65;
}

.hero-3614__footer button {
    height: 44px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    gap: 13px;
    border: 1px solid #818cf8;
    background: #818cf8;
    color: #10112e;
    font: inherit;
    font-size: 8px;
    font-weight: 900;
    cursor: pointer;
}

.hero-3614__shape {
    position: absolute;
    width: 230px;
    height: 230px;
    right: -20px;
    top: 82px;
    border: 1px solid rgba(129, 140, 248, .22);
    transform: rotate(45deg);
}

.hero-3614__shape span {
    position: absolute;
    inset: 40px;
    border: 1px solid rgba(129, 140, 248, .3);
    background: rgba(79, 70, 229, .07);
}

@media (max-width: 520px) {
    .hero-3614 {
        padding: 23px;
    }

    .hero-3614 h1 {
        font-size: 66px;
    }

    .hero-3614__footer {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3615,
    name: "Violet Creative Hero",
    preview: (
      <section className="hero-3615">
        <div className="hero-3615__content">
          <span className="hero-3615__eyebrow">CREATE WITHOUT LIMITS</span>

          <h1>
            Make ideas
            <span>feel alive.</span>
          </h1>

          <p>
            A creative platform for turning rough concepts into polished digital
            experiences.
          </p>

          <div className="hero-3615__actions">
            <button type="button">Create now</button>

            <button type="button">
              Explore work
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3615__visual">
          <div className="hero-3615__blob"></div>

          <div className="hero-3615__card">
            <span className="hero-3615__icon">
              <i className="ri-magic-fill"></i>
            </span>

            <strong>Creative Studio</strong>
            <small>12 active projects</small>

            <div className="hero-3615__blocks">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3615">
    <div class="hero-3615__content">
        <span class="hero-3615__eyebrow">
            CREATE WITHOUT LIMITS
        </span>

        <h1>
            Make ideas
            <span>feel alive.</span>
        </h1>

        <p>
            A creative platform for turning rough concepts into polished digital experiences.
        </p>

        <div class="hero-3615__actions">
            <button type="button">Create now</button>

            <button type="button">
                Explore work
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3615__visual">
        <div class="hero-3615__blob"></div>

        <div class="hero-3615__card">
            <span class="hero-3615__icon">
                <i class="ri-magic-fill"></i>
            </span>

            <strong>Creative Studio</strong>
            <small>12 active projects</small>

            <div class="hero-3615__blocks">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3615 {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 28px;
    background:
        linear-gradient(
            135deg,
            #2e1065,
            #581c87,
            #6b21a8
        );
    color: #faf5ff;
    font-family: "Trebuchet MS", Arial, sans-serif;
}

.hero-3615__content {
    padding: 49px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3615__eyebrow {
    color: #d8b4fe;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .2em;
}

.hero-3615 h1 {
    max-width: 490px;
    margin: 16px 0 12px;
    font-family: Georgia, serif;
    font-size: clamp(45px, 7vw, 72px);
    line-height: .95;
    font-weight: 400;
    letter-spacing: -.045em;
}

.hero-3615 h1 span {
    display: block;
    color: #d8b4fe;
    font-style: italic;
}

.hero-3615 p {
    max-width: 420px;
    margin: 0;
    color: #c4a5d8;
    font-size: 11px;
    line-height: 1.7;
}

.hero-3615__actions {
    margin-top: 25px;
    display: flex;
    gap: 9px;
}

.hero-3615__actions button {
    height: 42px;
    padding: 0 16px;
    border-radius: 11px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3615__actions button:first-child {
    border: 0;
    background: #faf5ff;
    color: #581c87;
}

.hero-3615__actions button:last-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(250, 245, 255, .2);
    background: rgba(255, 255, 255, .04);
    color: #faf5ff;
}

.hero-3615__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.hero-3615__blob {
    position: absolute;
    width: 285px;
    height: 285px;
    border-radius: 48% 52% 63% 37% / 42% 39% 61% 58%;
    background:
        linear-gradient(
            135deg,
            #c084fc,
            #7e22ce
        );
    opacity: .38;
}

.hero-3615__card {
    position: relative;
    z-index: 2;
    width: 180px;
    padding: 20px;
    border: 1px solid rgba(250, 245, 255, .19);
    border-radius: 18px;
    background: rgba(59, 7, 100, .55);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .24);
    backdrop-filter: blur(14px);
    transition: transform .25s ease;
}

.hero-3615__visual:hover .hero-3615__card {
    transform: translateY(-6px) rotate(2deg);
}

.hero-3615__icon {
    width: 35px;
    height: 35px;
    margin-bottom: 16px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: rgba(216, 180, 254, .15);
    color: #e9d5ff;
    font-size: 16px;
}

.hero-3615__card strong {
    display: block;
    font-size: 12px;
}

.hero-3615__card small {
    display: block;
    margin-top: 4px;
    color: #bfa0d2;
    font-size: 7px;
}

.hero-3615__blocks {
    height: 63px;
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
}

.hero-3615__blocks span {
    border-radius: 6px;
}

.hero-3615__blocks span:nth-child(1) {
    grid-row: 1 / 3;
    background:
        linear-gradient(
            145deg,
            #a855f7,
            #7e22ce
        );
}

.hero-3615__blocks span:nth-child(2) {
    background: #c084fc;
}

.hero-3615__blocks span:nth-child(3) {
    background: #4c1d95;
}

@media (max-width: 700px) {
    .hero-3615 {
        grid-template-columns: 1fr;
    }

    .hero-3615__visual {
        min-height: 290px;
    }
}

@media (max-width: 480px) {
    .hero-3615__content {
        padding: 33px 23px;
    }

    .hero-3615__actions {
        flex-direction: column;
    }
}`,
  },
  {
    id: 3616,
    name: "Magenta Fashion Hero",
    preview: (
      <section className="hero-3616">
        <div className="hero-3616__top">
          <span>07</span>
          <span>NEW DIGITAL CULTURE</span>
        </div>

        <h1>
          CREATE
          <span>DIFFERENT.</span>
        </h1>

        <div className="hero-3616__bottom">
          <div>
            <span>STUDIO / 2026</span>
            <p>
              Digital direction and experimental products for people making the
              next thing.
            </p>
          </div>

          <button type="button">
            DISCOVER
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>

        <div className="hero-3616__stamp">NEW</div>
      </section>
    ),
    html: `<section class="hero-3616">
    <div class="hero-3616__top">
        <span>07</span>
        <span>NEW DIGITAL CULTURE</span>
    </div>

    <h1>
        CREATE
        <span>DIFFERENT.</span>
    </h1>

    <div class="hero-3616__bottom">
        <div>
            <span>STUDIO / 2026</span>

            <p>
                Digital direction and experimental products for people making the next thing.
            </p>
        </div>

        <button type="button">
            DISCOVER
            <i class="ri-arrow-right-up-line"></i>
        </button>
    </div>

    <div class="hero-3616__stamp">
        NEW
    </div>
</section>`,
    css: `.hero-3616 {
    position: relative;
    min-height: 390px;
    padding: 29px;
    overflow: hidden;
    border: 4px solid #1f0015;
    background: #db2777;
    color: #1f0015;
    font-family: "Arial Black", Arial, sans-serif;
}

.hero-3616__top {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .15em;
}

.hero-3616__top span:first-child {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 2px solid #1f0015;
}

.hero-3616 h1 {
    position: relative;
    z-index: 2;
    margin: 31px 0 28px;
    font-size: clamp(67px, 11vw, 126px);
    line-height: .73;
    letter-spacing: -.065em;
}

.hero-3616 h1 span {
    display: block;
    color: #fff1f2;
}

.hero-3616__bottom {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;
}

.hero-3616__bottom > div > span {
    font-size: 7px;
    letter-spacing: .14em;
}

.hero-3616__bottom p {
    max-width: 390px;
    margin: 7px 0 0;
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.6;
}

.hero-3616__bottom button {
    height: 46px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 3px solid #1f0015;
    background: #fff1f2;
    color: #1f0015;
    font: inherit;
    font-size: 9px;
    cursor: pointer;
}

.hero-3616__stamp {
    position: absolute;
    width: 120px;
    height: 120px;
    right: 52px;
    top: 38px;
    display: grid;
    place-items: center;
    border: 3px solid rgba(31, 0, 21, .25);
    border-radius: 50%;
    color: rgba(31, 0, 21, .27);
    font-size: 27px;
    transform: rotate(14deg);
}

@media (max-width: 520px) {
    .hero-3616 {
        padding: 22px;
    }

    .hero-3616 h1 {
        font-size: 68px;
    }

    .hero-3616__bottom {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3617,
    name: "Pink Playful Hero",
    preview: (
      <section className="hero-3617">
        <div className="hero-3617__content">
          <span className="hero-3617__eyebrow">
            MAKE THE INTERNET FUN AGAIN
          </span>

          <h1>
            Cute ideas.
            <span>Serious impact.</span>
          </h1>

          <p>
            Playful digital products with enough personality to actually be
            remembered.
          </p>

          <div className="hero-3617__actions">
            <button type="button">
              Let's create
              <i className="ri-heart-3-fill"></i>
            </button>

            <button type="button">See our work</button>
          </div>
        </div>

        <div className="hero-3617__visual">
          <div className="hero-3617__flower">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div>
              <i className="ri-smile-fill"></i>
            </div>
          </div>

          <div className="hero-3617__bubble hero-3617__bubble-1">WOW!</div>

          <div className="hero-3617__bubble hero-3617__bubble-2">✦</div>
        </div>
      </section>
    ),
    html: `<section class="hero-3617">
    <div class="hero-3617__content">
        <span class="hero-3617__eyebrow">
            MAKE THE INTERNET FUN AGAIN
        </span>

        <h1>
            Cute ideas.
            <span>Serious impact.</span>
        </h1>

        <p>
            Playful digital products with enough personality to actually be remembered.
        </p>

        <div class="hero-3617__actions">
            <button type="button">
                Let's create
                <i class="ri-heart-3-fill"></i>
            </button>

            <button type="button">See our work</button>
        </div>
    </div>

    <div class="hero-3617__visual">
        <div class="hero-3617__flower">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div>
                <i class="ri-smile-fill"></i>
            </div>
        </div>

        <div class="hero-3617__bubble hero-3617__bubble-1">
            WOW!
        </div>

        <div class="hero-3617__bubble hero-3617__bubble-2">
            ✦
        </div>
    </div>
</section>`,
    css: `.hero-3617 {
    min-height: 390px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border: 3px solid #831843;
    border-radius: 24px;
    background: #fbcfe8;
    color: #831843;
    font-family: Verdana, Arial, sans-serif;
}

.hero-3617__content {
    padding: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3617__eyebrow {
    color: #be185d;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: .17em;
}

.hero-3617 h1 {
    max-width: 500px;
    margin: 14px 0 12px;
    font-family: Georgia, serif;
    font-size: clamp(44px, 7vw, 69px);
    line-height: .96;
    font-weight: 400;
    letter-spacing: -.045em;
}

.hero-3617 h1 span {
    display: block;
    color: #db2777;
    font-style: italic;
}

.hero-3617 p {
    max-width: 390px;
    margin: 0;
    color: #9d456d;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3617__actions {
    margin-top: 24px;
    display: flex;
    gap: 9px;
}

.hero-3617__actions button {
    height: 42px;
    padding: 0 15px;
    border-radius: 999px;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
    cursor: pointer;
}

.hero-3617__actions button:first-child {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 2px solid #831843;
    background: #831843;
    color: #fce7f3;
}

.hero-3617__actions button:last-child {
    border: 2px solid #831843;
    background: transparent;
    color: #831843;
}

.hero-3617__visual {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, .42),
            transparent 55%
        );
}

.hero-3617__flower {
    position: relative;
    width: 190px;
    height: 190px;
}

.hero-3617__flower > span {
    position: absolute;
    width: 86px;
    height: 86px;
    left: 52px;
    top: 52px;
    border: 3px solid #831843;
    border-radius: 50%;
    background: #f472b6;
    transform-origin: 43px 43px;
}

.hero-3617__flower > span:nth-child(1) {
    transform: translateY(-62px);
}

.hero-3617__flower > span:nth-child(2) {
    transform: rotate(72deg) translateY(-62px);
}

.hero-3617__flower > span:nth-child(3) {
    transform: rotate(144deg) translateY(-62px);
}

.hero-3617__flower > span:nth-child(4) {
    transform: rotate(216deg) translateY(-62px);
}

.hero-3617__flower > span:nth-child(5) {
    transform: rotate(288deg) translateY(-62px);
}

.hero-3617__flower > div {
    position: absolute;
    z-index: 3;
    width: 82px;
    height: 82px;
    left: 54px;
    top: 54px;
    display: grid;
    place-items: center;
    border: 3px solid #831843;
    border-radius: 50%;
    background: #fce7f3;
    color: #be185d;
    font-size: 31px;
    transition: transform .25s ease;
}

.hero-3617__visual:hover .hero-3617__flower > div {
    transform: rotate(10deg) scale(1.05);
}

.hero-3617__bubble {
    position: absolute;
    border: 2px solid #831843;
    background: #fce7f3;
    color: #831843;
    font-weight: 900;
}

.hero-3617__bubble-1 {
    right: 27px;
    top: 31px;
    padding: 9px 12px;
    border-radius: 18px 18px 18px 3px;
    font-size: 8px;
    transform: rotate(7deg);
}

.hero-3617__bubble-2 {
    left: 29px;
    bottom: 35px;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: 17px;
    transform: rotate(-10deg);
}

@media (max-width: 700px) {
    .hero-3617 {
        grid-template-columns: 1fr;
    }

    .hero-3617__visual {
        min-height: 300px;
    }
}

@media (max-width: 480px) {
    .hero-3617__content {
        padding: 32px 22px;
    }

    .hero-3617__actions {
        flex-direction: column;
    }
}`,
  },
  {
    id: 3618,
    name: "Modern Startup Hero",
    preview: (
      <section className="hero-3618">
        <div className="hero-3618__content">
          <span className="hero-3618__eyebrow">Built for modern teams</span>
          <h1>
            Build better products,
            <span> faster.</span>
          </h1>
          <p>
            Plan, design and launch your next product from one simple workspace.
          </p>

          <div className="hero-3618__actions">
            <button type="button">Get started</button>
            <button type="button">View demo</button>
          </div>
        </div>

        <div className="hero-3618__visual">
          <div className="hero-3618__card">
            <div className="hero-3618__card-head">
              <span>Project overview</span>
              <i className="ri-more-2-fill"></i>
            </div>

            <strong>72%</strong>
            <small>Project completion</small>

            <div className="hero-3618__progress">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3618">
    <div class="hero-3618__content">
        <span class="hero-3618__eyebrow">Built for modern teams</span>
        <h1>
            Build better products,
            <span> faster.</span>
        </h1>
        <p>
            Plan, design and launch your next product from one simple workspace.
        </p>

        <div class="hero-3618__actions">
            <button type="button">Get started</button>
            <button type="button">View demo</button>
        </div>
    </div>

    <div class="hero-3618__visual">
        <div class="hero-3618__card">
            <div class="hero-3618__card-head">
                <span>Project overview</span>
                <i class="ri-more-2-fill"></i>
            </div>

            <strong>72%</strong>
            <small>Project completion</small>

            <div class="hero-3618__progress">
                <span></span>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3618 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 20px;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: #ffffff;
}

.hero-3618__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3618__eyebrow {
    color: #60a5fa;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.hero-3618 h1 {
    max-width: 420px;
    margin: 12px 0 10px;
    font-size: 38px;
    line-height: 1.02;
    letter-spacing: -.04em;
}

.hero-3618 h1 span {
    color: #60a5fa;
}

.hero-3618 p {
    max-width: 380px;
    margin: 0;
    color: #94a3b8;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3618__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3618__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3618__actions button:first-child {
    border: 0;
    background: #ffffff;
    color: #0f172a;
}

.hero-3618__actions button:last-child {
    border: 1px solid rgba(255,255,255,.15);
    background: transparent;
    color: #ffffff;
}

.hero-3618__visual {
    display: grid;
    place-items: center;
    padding: 30px;
}

.hero-3618__card {
    width: min(100%, 245px);
    padding: 18px;
    border: 1px solid rgba(148,163,184,.14);
    border-radius: 15px;
    background: rgba(255,255,255,.05);
    box-shadow: 0 20px 40px rgba(0,0,0,.25);
}

.hero-3618__card-head {
    display: flex;
    justify-content: space-between;
    color: #64748b;
    font-size: 7px;
}

.hero-3618__card > strong {
    display: block;
    margin-top: 18px;
    font-size: 28px;
}

.hero-3618__card > small {
    color: #64748b;
    font-size: 7px;
}

.hero-3618__progress {
    height: 6px;
    margin-top: 15px;
    border-radius: 999px;
    background: #263447;
}

.hero-3618__progress span {
    display: block;
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #60a5fa;
}

@media (max-width: 700px) {
    .hero-3618 {
        grid-template-columns: 1fr;
    }

    .hero-3618__visual {
        min-height: 220px;
    }
}`,
  },
  {
    id: 3619,
    name: "Clean App Hero",
    preview: (
      <section className="hero-3619">
        <div className="hero-3619__content">
          <span>YOUR DAY, ORGANIZED</span>
          <h1>
            Focus on what
            <em> matters most.</em>
          </h1>
          <p>
            A simple productivity app that helps you keep tasks, notes and goals
            in one place.
          </p>

          <button type="button">
            Try it free
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3619__visual">
          <div className="hero-3619__phone">
            <div className="hero-3619__phone-top"></div>

            <strong>Today</strong>

            <div className="hero-3619__task">
              <span></span>
              Finish homepage
            </div>

            <div className="hero-3619__task">
              <span></span>
              Review project
            </div>

            <div className="hero-3619__task">
              <span></span>
              Team meeting
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3619">
    <div class="hero-3619__content">
        <span>YOUR DAY, ORGANIZED</span>
        <h1>
            Focus on what
            <em> matters most.</em>
        </h1>
        <p>
            A simple productivity app that helps you keep tasks, notes and goals in one place.
        </p>

        <button type="button">
            Try it free
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3619__visual">
        <div class="hero-3619__phone">
            <div class="hero-3619__phone-top"></div>

            <strong>Today</strong>

            <div class="hero-3619__task">
                <span></span>
                Finish homepage
            </div>

            <div class="hero-3619__task">
                <span></span>
                Review project
            </div>

            <div class="hero-3619__task">
                <span></span>
                Team meeting
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3619 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: #f8fafc;
    color: #18181b;
}

.hero-3619__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3619__content > span {
    color: #6366f1;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3619 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-size: 37px;
    line-height: 1.03;
    letter-spacing: -.04em;
}

.hero-3619 h1 em {
    display: block;
    color: #6366f1;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3619 p {
    max-width: 360px;
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3619__content button {
    width: fit-content;
    height: 39px;
    margin-top: 20px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 9px;
    background: #18181b;
    color: #ffffff;
    font: inherit;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3619__visual {
    display: grid;
    place-items: center;
    background: #eef2ff;
}

.hero-3619__phone {
    width: 170px;
    padding: 13px;
    border: 6px solid #18181b;
    border-radius: 26px;
    background: #ffffff;
    box-shadow: 0 22px 40px rgba(99,102,241,.15);
}

.hero-3619__phone-top {
    width: 46px;
    height: 5px;
    margin: 0 auto 18px;
    border-radius: 999px;
    background: #18181b;
}

.hero-3619__phone > strong {
    display: block;
    margin-bottom: 12px;
    font-size: 12px;
}

.hero-3619__task {
    min-height: 34px;
    margin-top: 7px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    color: #52525b;
    font-size: 7px;
}

.hero-3619__task span {
    width: 10px;
    height: 10px;
    border: 1px solid #818cf8;
    border-radius: 3px;
}

@media (max-width: 700px) {
    .hero-3619 {
        grid-template-columns: 1fr;
    }

    .hero-3619__visual {
        min-height: 250px;
    }
}`,
  },
  {
    id: 3620,
    name: "Creative Agency Hero",
    preview: (
      <section className="hero-3620">
        <span className="hero-3620__label">INDEPENDENT CREATIVE STUDIO</span>

        <h1>
          GOOD DESIGN
          <br />
          <em>GETS NOTICED.</em>
        </h1>

        <div className="hero-3620__bottom">
          <p>
            Brand identities and digital experiences made for ambitious
            companies.
          </p>

          <button type="button">
            SEE OUR WORK
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="hero-3620">
    <span class="hero-3620__label">INDEPENDENT CREATIVE STUDIO</span>

    <h1>
        GOOD DESIGN
        <br>
        <em>GETS NOTICED.</em>
    </h1>

    <div class="hero-3620__bottom">
        <p>
            Brand identities and digital experiences made for ambitious companies.
        </p>

        <button type="button">
            SEE OUR WORK
            <i class="ri-arrow-right-up-line"></i>
        </button>
    </div>
</section>`,
    css: `.hero-3620 {
    min-height: 360px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #171717;
    background: #f4f1e8;
    color: #171717;
}

.hero-3620__label {
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .16em;
}

.hero-3620 h1 {
    margin: 28px 0;
    font-size: clamp(58px, 10vw, 110px);
    line-height: .78;
    letter-spacing: -.065em;
}

.hero-3620 h1 em {
    color: #9a3412;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3620__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 25px;
}

.hero-3620__bottom p {
    max-width: 390px;
    margin: 0;
    color: #57534e;
    font-size: 11px;
    line-height: 1.65;
}

.hero-3620__bottom button {
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    border: 2px solid #171717;
    background: #171717;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
    cursor: pointer;
}

@media (max-width: 520px) {
    .hero-3620__bottom {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },
  {
    id: 3621,
    name: "Portfolio Hero",
    preview: (
      <section className="hero-3621">
        <div className="hero-3621__content">
          <span>DESIGNER + DEVELOPER</span>

          <h1>
            I build digital
            <em> experiences.</em>
          </h1>

          <p>
            Crafting thoughtful websites and interfaces with a focus on clean
            design and useful interaction.
          </p>

          <button type="button">
            View projects
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3621__visual">
          <div className="hero-3621__portrait">
            <span>AB</span>
          </div>

          <div className="hero-3621__availability">
            <span></span>
            Available for work
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3621">
    <div class="hero-3621__content">
        <span>DESIGNER + DEVELOPER</span>

        <h1>
            I build digital
            <em> experiences.</em>
        </h1>

        <p>
            Crafting thoughtful websites and interfaces with a focus on clean design and useful interaction.
        </p>

        <button type="button">
            View projects
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3621__visual">
        <div class="hero-3621__portrait">
            <span>AB</span>
        </div>

        <div class="hero-3621__availability">
            <span></span>
            Available for work
        </div>
    </div>
</section>`,
    css: `.hero-3621 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    overflow: hidden;
    border-radius: 20px;
    background: #101010;
    color: #f5f5f5;
}

.hero-3621__content {
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3621__content > span {
    color: #a3a3a3;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .17em;
}

.hero-3621 h1 {
    max-width: 430px;
    margin: 13px 0 10px;
    font-size: 39px;
    line-height: 1.02;
    letter-spacing: -.045em;
}

.hero-3621 h1 em {
    display: block;
    color: #a3a3a3;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3621 p {
    max-width: 370px;
    margin: 0;
    color: #737373;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3621__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
    color: #111111;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3621__visual {
    position: relative;
    display: grid;
    place-items: center;
    background: #171717;
}

.hero-3621__portrait {
    width: 170px;
    height: 210px;
    display: grid;
    place-items: center;
    border-radius: 80px 80px 14px 14px;
    background: linear-gradient(145deg, #404040, #202020);
}

.hero-3621__portrait span {
    color: #737373;
    font-size: 40px;
    font-weight: 900;
}

.hero-3621__availability {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #303030;
    border-radius: 999px;
    background: #111111;
    color: #a3a3a3;
    font-size: 6px;
}

.hero-3621__availability span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4ade80;
}

@media (max-width: 700px) {
    .hero-3621 {
        grid-template-columns: 1fr;
    }

    .hero-3621__visual {
        min-height: 260px;
    }
}`,
  },
  {
    id: 3622,
    name: "Simple SaaS Hero",
    preview: (
      <section className="hero-3622">
        <div className="hero-3622__content">
          <div className="hero-3622__badge">
            <i className="ri-sparkling-fill"></i>
            New workspace
          </div>

          <h1>
            One place for
            <span> all your work.</span>
          </h1>

          <p>
            Projects, tasks, conversations and files together in one simple
            workspace.
          </p>

          <div className="hero-3622__actions">
            <button type="button">Start free</button>
            <button type="button">Book demo</button>
          </div>
        </div>

        <div className="hero-3622__visual">
          <div className="hero-3622__window">
            <div className="hero-3622__window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-3622__window-body">
              <div className="hero-3622__sidebar"></div>

              <div className="hero-3622__main">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3622">
    <div class="hero-3622__content">
        <div class="hero-3622__badge">
            <i class="ri-sparkling-fill"></i>
            New workspace
        </div>

        <h1>
            One place for
            <span> all your work.</span>
        </h1>

        <p>
            Projects, tasks, conversations and files together in one simple workspace.
        </p>

        <div class="hero-3622__actions">
            <button type="button">Start free</button>
            <button type="button">Book demo</button>
        </div>
    </div>

    <div class="hero-3622__visual">
        <div class="hero-3622__window">
            <div class="hero-3622__window-top">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="hero-3622__window-body">
                <div class="hero-3622__sidebar"></div>

                <div class="hero-3622__main">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3622 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: linear-gradient(135deg, #fafafa, #f3f4f6);
    color: #111827;
}

.hero-3622__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3622__badge {
    width: fit-content;
    padding: 6px 9px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    background: #ede9fe;
    color: #7c3aed;
    font-size: 7px;
    font-weight: 700;
}

.hero-3622 h1 {
    max-width: 410px;
    margin: 12px 0 10px;
    font-size: 37px;
    line-height: 1.02;
    letter-spacing: -.045em;
}

.hero-3622 h1 span {
    color: #7c3aed;
}

.hero-3622 p {
    max-width: 370px;
    margin: 0;
    color: #6b7280;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3622__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3622__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3622__actions button:first-child {
    border: 0;
    background: #7c3aed;
    color: #ffffff;
}

.hero-3622__actions button:last-child {
    border: 1px solid #d1d5db;
    background: #ffffff;
    color: #374151;
}

.hero-3622__visual {
    display: grid;
    place-items: center;
    padding: 30px;
}

.hero-3622__window {
    width: min(100%, 280px);
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 22px 40px rgba(15,23,42,.1);
}

.hero-3622__window-top {
    height: 34px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid #f1f5f9;
}

.hero-3622__window-top span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d1d5db;
}

.hero-3622__window-body {
    height: 150px;
    display: grid;
    grid-template-columns: 55px 1fr;
}

.hero-3622__sidebar {
    border-right: 1px solid #f1f5f9;
    background: #fafafa;
}

.hero-3622__main {
    padding: 13px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.hero-3622__main span {
    border-radius: 8px;
    background: #f3f4f6;
}

.hero-3622__main span:first-child {
    background: #ede9fe;
}

@media (max-width: 700px) {
    .hero-3622 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3623,
    name: "Ecommerce Hero",
    preview: (
      <section className="hero-3623">
        <div className="hero-3623__content">
          <span>NEW COLLECTION</span>

          <h1>
            Everyday essentials,
            <em> elevated.</em>
          </h1>

          <p>
            Thoughtful products made for simple, comfortable everyday living.
          </p>

          <button type="button">
            Shop collection
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3623__visual">
          <div className="hero-3623__product">
            <i className="ri-shopping-bag-3-fill"></i>
          </div>

          <div className="hero-3623__price">
            <span>NEW</span>
            <strong>$64</strong>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3623">
    <div class="hero-3623__content">
        <span>NEW COLLECTION</span>

        <h1>
            Everyday essentials,
            <em> elevated.</em>
        </h1>

        <p>
            Thoughtful products made for simple, comfortable everyday living.
        </p>

        <button type="button">
            Shop collection
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3623__visual">
        <div class="hero-3623__product">
            <i class="ri-shopping-bag-3-fill"></i>
        </div>

        <div class="hero-3623__price">
            <span>NEW</span>
            <strong>$64</strong>
        </div>
    </div>
</section>`,
    css: `.hero-3623 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
    background: #eee9df;
    color: #292524;
}

.hero-3623__content {
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3623__content > span {
    color: #78716c;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .18em;
}

.hero-3623 h1 {
    max-width: 430px;
    margin: 13px 0 10px;
    font-family: Georgia, serif;
    font-size: 39px;
    line-height: 1;
    font-weight: 400;
}

.hero-3623 h1 em {
    display: block;
    color: #a16207;
}

.hero-3623 p {
    max-width: 350px;
    margin: 0;
    color: #78716c;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3623__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #292524;
    background: #292524;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}

.hero-3623__visual {
    position: relative;
    display: grid;
    place-items: center;
    background: #d8d0c4;
}

.hero-3623__product {
    width: 180px;
    height: 215px;
    display: grid;
    place-items: center;
    border-radius: 90px 90px 20px 20px;
    background: #b9a99a;
    color: #f5f5f4;
    font-size: 58px;
}

.hero-3623__price {
    position: absolute;
    right: 24px;
    bottom: 24px;
    padding: 9px 11px;
    background: #ffffff;
}

.hero-3623__price span {
    display: block;
    color: #a16207;
    font-size: 5px;
}

.hero-3623__price strong {
    display: block;
    margin-top: 2px;
    font-size: 11px;
}

@media (max-width: 700px) {
    .hero-3623 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3624,
    name: "Finance Hero",
    preview: (
      <section className="hero-3624">
        <div className="hero-3624__content">
          <span>SMARTER MONEY</span>

          <h1>
            Take control of
            <strong> your finances.</strong>
          </h1>

          <p>
            Track spending, manage savings and understand your money from one
            simple dashboard.
          </p>

          <div className="hero-3624__actions">
            <button type="button">Create account</button>
            <button type="button">Learn more</button>
          </div>
        </div>

        <div className="hero-3624__visual">
          <div className="hero-3624__balance">
            <span>Total balance</span>
            <strong>$24,820</strong>
            <small>+8.4% this month</small>

            <div className="hero-3624__bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3624">
    <div class="hero-3624__content">
        <span>SMARTER MONEY</span>

        <h1>
            Take control of
            <strong> your finances.</strong>
        </h1>

        <p>
            Track spending, manage savings and understand your money from one simple dashboard.
        </p>

        <div class="hero-3624__actions">
            <button type="button">Create account</button>
            <button type="button">Learn more</button>
        </div>
    </div>

    <div class="hero-3624__visual">
        <div class="hero-3624__balance">
            <span>Total balance</span>
            <strong>$24,820</strong>
            <small>+8.4% this month</small>

            <div class="hero-3624__bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3624 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: #052e2b;
    color: #ecfdf5;
}

.hero-3624__content {
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3624__content > span {
    color: #6ee7b7;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3624 h1 {
    max-width: 430px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
    letter-spacing: -.04em;
}

.hero-3624 h1 strong {
    display: block;
    color: #6ee7b7;
}

.hero-3624 p {
    max-width: 370px;
    margin: 0;
    color: #8bb6aa;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3624__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3624__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3624__actions button:first-child {
    border: 0;
    background: #6ee7b7;
    color: #052e2b;
}

.hero-3624__actions button:last-child {
    border: 1px solid rgba(110,231,183,.2);
    background: transparent;
    color: #d1fae5;
}

.hero-3624__visual {
    display: grid;
    place-items: center;
}

.hero-3624__balance {
    width: 220px;
    padding: 18px;
    border: 1px solid rgba(110,231,183,.14);
    border-radius: 16px;
    background: rgba(255,255,255,.04);
}

.hero-3624__balance > span {
    color: #6f988e;
    font-size: 7px;
}

.hero-3624__balance > strong {
    display: block;
    margin-top: 5px;
    font-size: 24px;
}

.hero-3624__balance > small {
    display: block;
    margin-top: 3px;
    color: #6ee7b7;
    font-size: 6px;
}

.hero-3624__bars {
    height: 70px;
    margin-top: 15px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
}

.hero-3624__bars i {
    flex: 1;
    border-radius: 4px 4px 0 0;
    background: #34d399;
}

.hero-3624__bars i:nth-child(1) { height: 34%; }
.hero-3624__bars i:nth-child(2) { height: 48%; }
.hero-3624__bars i:nth-child(3) { height: 42%; }
.hero-3624__bars i:nth-child(4) { height: 67%; }
.hero-3624__bars i:nth-child(5) { height: 61%; }
.hero-3624__bars i:nth-child(6) { height: 84%; }

@media (max-width: 700px) {
    .hero-3624 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3625,
    name: "Education Hero",
    preview: (
      <section className="hero-3625">
        <div className="hero-3625__content">
          <span>LEARN AT YOUR PACE</span>

          <h1>
            Skills that move
            <em> you forward.</em>
          </h1>

          <p>
            Practical courses taught in a clear, simple way by experienced
            creators and developers.
          </p>

          <button type="button">
            Explore courses
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3625__visual">
          <div className="hero-3625__course">
            <span className="hero-3625__icon">
              <i className="ri-code-s-slash-line"></i>
            </span>

            <strong>Frontend Fundamentals</strong>
            <small>24 lessons · Beginner</small>

            <div className="hero-3625__course-progress">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3625">
    <div class="hero-3625__content">
        <span>LEARN AT YOUR PACE</span>

        <h1>
            Skills that move
            <em> you forward.</em>
        </h1>

        <p>
            Practical courses taught in a clear, simple way by experienced creators and developers.
        </p>

        <button type="button">
            Explore courses
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3625__visual">
        <div class="hero-3625__course">
            <span class="hero-3625__icon">
                <i class="ri-code-s-slash-line"></i>
            </span>

            <strong>Frontend Fundamentals</strong>
            <small>24 lessons · Beginner</small>

            <div class="hero-3625__course-progress">
                <span></span>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3625 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 20px;
    background: #fff7ed;
    color: #431407;
}

.hero-3625__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3625__content > span {
    color: #ea580c;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3625 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-family: Georgia, serif;
    font-size: 38px;
    line-height: 1.02;
    font-weight: 400;
}

.hero-3625 h1 em {
    display: block;
    color: #ea580c;
}

.hero-3625 p {
    max-width: 365px;
    margin: 0;
    color: #9a5d46;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3625__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    border-radius: 9px;
    background: #ea580c;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3625__visual {
    display: grid;
    place-items: center;
    background: #ffedd5;
}

.hero-3625__course {
    width: 210px;
    padding: 18px;
    border: 1px solid #fed7aa;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 20px 35px rgba(234,88,12,.1);
}

.hero-3625__icon {
    width: 34px;
    height: 34px;
    margin-bottom: 14px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #fff7ed;
    color: #ea580c;
}

.hero-3625__course strong {
    display: block;
    font-size: 10px;
}

.hero-3625__course small {
    display: block;
    margin-top: 3px;
    color: #a8a29e;
    font-size: 6px;
}

.hero-3625__course-progress {
    height: 5px;
    margin-top: 14px;
    border-radius: 999px;
    background: #ffedd5;
}

.hero-3625__course-progress span {
    display: block;
    width: 62%;
    height: 100%;
    border-radius: inherit;
    background: #f97316;
}

@media (max-width: 700px) {
    .hero-3625 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3626,
    name: "Developer Tools Hero",
    preview: (
      <section className="hero-3626">
        <div className="hero-3626__content">
          <span>DEVELOPER FIRST</span>

          <h1>
            Build.
            <br />
            Ship.
            <br />
            Repeat.
          </h1>

          <p>Simple tools for building and deploying modern applications.</p>

          <button type="button">
            Read docs
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3626__visual">
          <div className="hero-3626__terminal">
            <p>
              <span>$</span> npm install nova
            </p>
            <p>
              <span>$</span> npm run dev
            </p>
            <strong>✓ Ready on localhost:5173</strong>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3626">
    <div class="hero-3626__content">
        <span>DEVELOPER FIRST</span>

        <h1>
            Build.
            <br>
            Ship.
            <br>
            Repeat.
        </h1>

        <p>
            Simple tools for building and deploying modern applications.
        </p>

        <button type="button">
            Read docs
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3626__visual">
        <div class="hero-3626__terminal">
            <p>
                <span>$</span> npm install nova
            </p>
            <p>
                <span>$</span> npm run dev
            </p>
            <strong>✓ Ready on localhost:5173</strong>
        </div>
    </div>
</section>`,
    css: `.hero-3626 {
    min-height: 310px;
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 18px;
    background: #09090b;
    color: #fafafa;
    font-family: "Courier New", monospace;
}

.hero-3626__content {
    padding: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3626__content > span {
    color: #22c55e;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3626 h1 {
    margin: 12px 0 10px;
    font-size: 38px;
    line-height: .9;
    letter-spacing: -.05em;
}

.hero-3626 p {
    max-width: 330px;
    margin: 0;
    color: #71717a;
    font-size: 9px;
    line-height: 1.7;
}

.hero-3626__content button {
    width: fit-content;
    height: 37px;
    margin-top: 20px;
    padding: 0 13px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #22c55e;
    background: #22c55e;
    color: #052e16;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
}

.hero-3626__visual {
    display: grid;
    place-items: center;
    padding: 28px;
}

.hero-3626__terminal {
    width: min(100%, 300px);
    padding: 18px;
    border: 1px solid #27272a;
    border-radius: 12px;
    background: #050505;
    box-shadow: 0 20px 40px rgba(0,0,0,.35);
}

.hero-3626__terminal p {
    margin: 0 0 13px;
    color: #a1a1aa;
    font-size: 9px;
}

.hero-3626__terminal p span {
    color: #22c55e;
}

.hero-3626__terminal strong {
    display: block;
    padding: 9px;
    border-radius: 7px;
    background: rgba(34,197,94,.06);
    color: #4ade80;
    font-size: 7px;
}

@media (max-width: 700px) {
    .hero-3626 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3627,
    name: "AI Platform Hero",
    preview: (
      <section className="hero-3627">
        <div className="hero-3627__content">
          <div className="hero-3627__badge">
            <span></span>
            AI WORKSPACE
          </div>

          <h1>
            Work smarter with
            <span> intelligent tools.</span>
          </h1>

          <p>Automate repetitive work and turn ideas into results faster.</p>

          <button type="button">
            Try the platform
            <i className="ri-sparkling-fill"></i>
          </button>
        </div>

        <div className="hero-3627__visual">
          <div className="hero-3627__orb">
            <i className="ri-brain-fill"></i>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3627">
    <div class="hero-3627__content">
        <div class="hero-3627__badge">
            <span></span>
            AI WORKSPACE
        </div>

        <h1>
            Work smarter with
            <span> intelligent tools.</span>
        </h1>

        <p>
            Automate repetitive work and turn ideas into results faster.
        </p>

        <button type="button">
            Try the platform
            <i class="ri-sparkling-fill"></i>
        </button>
    </div>

    <div class="hero-3627__visual">
        <div class="hero-3627__orb">
            <i class="ri-brain-fill"></i>
        </div>
    </div>
</section>`,
    css: `.hero-3627 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 22px;
    background: linear-gradient(135deg, #111827, #312e81);
    color: #ffffff;
}

.hero-3627__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3627__badge {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #c4b5fd;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .14em;
}

.hero-3627__badge span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a78bfa;
}

.hero-3627 h1 {
    max-width: 430px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
    letter-spacing: -.045em;
}

.hero-3627 h1 span {
    display: block;
    color: #c4b5fd;
}

.hero-3627 p {
    max-width: 360px;
    margin: 0;
    color: #9ca3af;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3627__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 9px;
    background: #a78bfa;
    color: #1e1b4b;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
}

.hero-3627__visual {
    display: grid;
    place-items: center;
}

.hero-3627__orb {
    width: 180px;
    height: 180px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(196,181,253,.3);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(167,139,250,.35), rgba(99,102,241,.08));
    color: #ddd6fe;
    font-size: 50px;
    box-shadow: 0 0 60px rgba(139,92,246,.15);
}

@media (max-width: 700px) {
    .hero-3627 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3628,
    name: "Productivity Hero",
    preview: (
      <section className="hero-3628">
        <div className="hero-3628__content">
          <span>WORK WITH CLARITY</span>

          <h1>
            Less busywork.
            <strong> More progress.</strong>
          </h1>

          <p>
            Keep projects moving with one simple place for tasks and teamwork.
          </p>

          <div className="hero-3628__actions">
            <button type="button">Start free</button>
            <button type="button">See features</button>
          </div>
        </div>

        <div className="hero-3628__visual">
          <div className="hero-3628__list">
            <div>
              <span></span>
              <strong>Design review</strong>
              <small>Today</small>
            </div>

            <div>
              <span></span>
              <strong>Prepare launch</strong>
              <small>Tomorrow</small>
            </div>

            <div>
              <span></span>
              <strong>Team sync</strong>
              <small>Friday</small>
            </div>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3628">
    <div class="hero-3628__content">
        <span>WORK WITH CLARITY</span>

        <h1>
            Less busywork.
            <strong> More progress.</strong>
        </h1>

        <p>
            Keep projects moving with one simple place for tasks and teamwork.
        </p>

        <div class="hero-3628__actions">
            <button type="button">Start free</button>
            <button type="button">See features</button>
        </div>
    </div>

    <div class="hero-3628__visual">
        <div class="hero-3628__list">
            <div>
                <span></span>
                <strong>Design review</strong>
                <small>Today</small>
            </div>

            <div>
                <span></span>
                <strong>Prepare launch</strong>
                <small>Tomorrow</small>
            </div>

            <div>
                <span></span>
                <strong>Team sync</strong>
                <small>Friday</small>
            </div>
        </div>
    </div>
</section>`,
    css: `.hero-3628 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
    background: #f0fdf4;
    color: #14532d;
}

.hero-3628__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3628__content > span {
    color: #22c55e;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3628 h1 {
    max-width: 410px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
    letter-spacing: -.045em;
}

.hero-3628 h1 strong {
    display: block;
    color: #16a34a;
}

.hero-3628 p {
    max-width: 355px;
    margin: 0;
    color: #5b8065;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3628__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3628__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3628__actions button:first-child {
    border: 0;
    background: #166534;
    color: #ffffff;
}

.hero-3628__actions button:last-child {
    border: 1px solid #bbf7d0;
    background: #ffffff;
    color: #166534;
}

.hero-3628__visual {
    display: grid;
    place-items: center;
    padding: 28px;
}

.hero-3628__list {
    width: min(100%, 250px);
    padding: 12px;
    border: 1px solid #bbf7d0;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 20px 35px rgba(22,101,52,.1);
}

.hero-3628__list > div {
    min-height: 46px;
    display: grid;
    grid-template-columns: 14px 1fr auto;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #f0fdf4;
}

.hero-3628__list > div:last-child {
    border-bottom: 0;
}

.hero-3628__list > div > span {
    width: 11px;
    height: 11px;
    border: 1px solid #4ade80;
    border-radius: 3px;
}

.hero-3628__list strong {
    font-size: 7px;
}

.hero-3628__list small {
    color: #86a58e;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3628 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3629,
    name: "Travel Hero",
    preview: (
      <section className="hero-3629">
        <div className="hero-3629__content">
          <span>DISCOVER SOMEWHERE NEW</span>

          <h1>
            Your next adventure
            <em> starts here.</em>
          </h1>

          <p>
            Find inspiring destinations and plan your next trip with less
            effort.
          </p>

          <button type="button">
            Explore destinations
            <i className="ri-compass-3-line"></i>
          </button>
        </div>

        <div className="hero-3629__visual">
          <div className="hero-3629__sun"></div>
          <div className="hero-3629__hill hero-3629__hill-1"></div>
          <div className="hero-3629__hill hero-3629__hill-2"></div>
        </div>
      </section>
    ),
    html: `<section class="hero-3629">
    <div class="hero-3629__content">
        <span>DISCOVER SOMEWHERE NEW</span>

        <h1>
            Your next adventure
            <em> starts here.</em>
        </h1>

        <p>
            Find inspiring destinations and plan your next trip with less effort.
        </p>

        <button type="button">
            Explore destinations
            <i class="ri-compass-3-line"></i>
        </button>
    </div>

    <div class="hero-3629__visual">
        <div class="hero-3629__sun"></div>
        <div class="hero-3629__hill hero-3629__hill-1"></div>
        <div class="hero-3629__hill hero-3629__hill-2"></div>
    </div>
</section>`,
    css: `.hero-3629 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 24px;
    background: #fff7ed;
    color: #422006;
}

.hero-3629__content {
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3629__content > span {
    color: #ea580c;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .16em;
}

.hero-3629 h1 {
    max-width: 440px;
    margin: 13px 0 10px;
    font-family: Georgia, serif;
    font-size: 39px;
    line-height: 1;
    font-weight: 400;
}

.hero-3629 h1 em {
    display: block;
    color: #c2410c;
}

.hero-3629 p {
    max-width: 360px;
    margin: 0;
    color: #9a684c;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3629__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 999px;
    background: #c2410c;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3629__visual {
    position: relative;
    overflow: hidden;
    background: linear-gradient(#fed7aa, #ffedd5);
}

.hero-3629__sun {
    position: absolute;
    width: 95px;
    height: 95px;
    right: 45px;
    top: 38px;
    border-radius: 50%;
    background: #fb923c;
}

.hero-3629__hill {
    position: absolute;
    border-radius: 50% 50% 0 0;
}

.hero-3629__hill-1 {
    width: 320px;
    height: 190px;
    left: -70px;
    bottom: -90px;
    background: #9a6b42;
}

.hero-3629__hill-2 {
    width: 300px;
    height: 160px;
    right: -95px;
    bottom: -75px;
    background: #7c4a28;
}

@media (max-width: 700px) {
    .hero-3629 {
        grid-template-columns: 1fr;
    }

    .hero-3629__visual {
        min-height: 230px;
    }
}`,
  },
  {
    id: 3630,
    name: "Fitness Hero",
    preview: (
      <section className="hero-3630">
        <div className="hero-3630__content">
          <span>TRAIN WITH PURPOSE</span>

          <h1>
            STRONGER
            <br />
            EVERY DAY.
          </h1>

          <p>
            Simple training plans built to help you get stronger and stay
            consistent.
          </p>

          <button type="button">
            Start training
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3630__visual">
          <div className="hero-3630__stat">
            <span>WEEKLY GOAL</span>
            <strong>5 / 6</strong>
            <small>workouts completed</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3630">
    <div class="hero-3630__content">
        <span>TRAIN WITH PURPOSE</span>

        <h1>
            STRONGER
            <br>
            EVERY DAY.
        </h1>

        <p>
            Simple training plans built to help you get stronger and stay consistent.
        </p>

        <button type="button">
            Start training
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3630__visual">
        <div class="hero-3630__stat">
            <span>WEEKLY GOAL</span>
            <strong>5 / 6</strong>
            <small>workouts completed</small>
        </div>
    </div>
</section>`,
    css: `.hero-3630 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    overflow: hidden;
    border-radius: 18px;
    background: #171717;
    color: #ffffff;
}

.hero-3630__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3630__content > span {
    color: #f97316;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .16em;
}

.hero-3630 h1 {
    margin: 13px 0 10px;
    font-family: Impact, sans-serif;
    font-size: 49px;
    line-height: .85;
    letter-spacing: -.035em;
}

.hero-3630 p {
    max-width: 350px;
    margin: 0;
    color: #a3a3a3;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3630__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    background: #f97316;
    color: #111111;
    font: inherit;
    font-size: 8px;
    font-weight: 900;
}

.hero-3630__visual {
    display: grid;
    place-items: center;
    background: linear-gradient(145deg, #222222, #111111);
}

.hero-3630__stat {
    width: 190px;
    padding: 18px;
    border: 2px solid #f97316;
}

.hero-3630__stat span {
    display: block;
    color: #f97316;
    font-size: 7px;
    font-weight: 900;
}

.hero-3630__stat strong {
    display: block;
    margin-top: 8px;
    font-size: 35px;
}

.hero-3630__stat small {
    display: block;
    margin-top: 4px;
    color: #737373;
    font-size: 7px;
}

@media (max-width: 700px) {
    .hero-3630 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3631,
    name: "Music Hero",
    preview: (
      <section className="hero-3631">
        <div className="hero-3631__content">
          <span>YOUR SOUND. YOUR WAY.</span>

          <h1>
            Music for
            <em> every moment.</em>
          </h1>

          <p>
            Discover new artists, build playlists and listen without limits.
          </p>

          <button type="button">
            Start listening
            <i className="ri-play-fill"></i>
          </button>
        </div>

        <div className="hero-3631__visual">
          <div className="hero-3631__album">
            <i className="ri-music-2-fill"></i>

            <span>Now playing</span>
            <strong>Midnight Drive</strong>
            <small>Nova Waves</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3631">
    <div class="hero-3631__content">
        <span>YOUR SOUND. YOUR WAY.</span>

        <h1>
            Music for
            <em> every moment.</em>
        </h1>

        <p>
            Discover new artists, build playlists and listen without limits.
        </p>

        <button type="button">
            Start listening
            <i class="ri-play-fill"></i>
        </button>
    </div>

    <div class="hero-3631__visual">
        <div class="hero-3631__album">
            <i class="ri-music-2-fill"></i>

            <span>Now playing</span>
            <strong>Midnight Drive</strong>
            <small>Nova Waves</small>
        </div>
    </div>
</section>`,
    css: `.hero-3631 {
    min-height: 315px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: linear-gradient(135deg, #160b24, #3b0764);
    color: #ffffff;
}

.hero-3631__content {
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3631__content > span {
    color: #e879f9;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .16em;
}

.hero-3631 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-family: Georgia, serif;
    font-size: 39px;
    line-height: 1;
    font-weight: 400;
}

.hero-3631 h1 em {
    display: block;
    color: #e879f9;
}

.hero-3631 p {
    max-width: 350px;
    margin: 0;
    color: #b99bc8;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3631__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 999px;
    background: #e879f9;
    color: #3b0764;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
}

.hero-3631__visual {
    display: grid;
    place-items: center;
}

.hero-3631__album {
    width: 180px;
    padding: 18px;
    border: 1px solid rgba(232,121,249,.18);
    border-radius: 16px;
    background: rgba(255,255,255,.06);
    text-align: center;
}

.hero-3631__album > i {
    width: 90px;
    height: 90px;
    margin: 0 auto 14px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(145deg, #c026d3, #7e22ce);
    font-size: 30px;
}

.hero-3631__album span,
.hero-3631__album strong,
.hero-3631__album small {
    display: block;
}

.hero-3631__album span {
    color: #a88bb6;
    font-size: 5px;
}

.hero-3631__album strong {
    margin-top: 3px;
    font-size: 10px;
}

.hero-3631__album small {
    margin-top: 2px;
    color: #8f729c;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3631 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3632,
    name: "Gaming Hero",
    preview: (
      <section className="hero-3632">
        <div className="hero-3632__content">
          <span>ENTER THE ARENA</span>

          <h1>
            PLAY.
            <br />
            COMPETE.
            <br />
            WIN.
          </h1>

          <p>
            Fast-paced competitive gameplay built for players who want more.
          </p>

          <button type="button">
            Play now
            <i className="ri-gamepad-fill"></i>
          </button>
        </div>

        <div className="hero-3632__visual">
          <div className="hero-3632__hex">
            <i className="ri-sword-fill"></i>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3632">
    <div class="hero-3632__content">
        <span>ENTER THE ARENA</span>

        <h1>
            PLAY.
            <br>
            COMPETE.
            <br>
            WIN.
        </h1>

        <p>
            Fast-paced competitive gameplay built for players who want more.
        </p>

        <button type="button">
            Play now
            <i class="ri-gamepad-fill"></i>
        </button>
    </div>

    <div class="hero-3632__visual">
        <div class="hero-3632__hex">
            <i class="ri-sword-fill"></i>
        </div>
    </div>
</section>`,
    css: `.hero-3632 {
    min-height: 320px;
    display: grid;
    grid-template-columns: .95fr 1.05fr;
    overflow: hidden;
    border: 1px solid #7f1d1d;
    border-radius: 18px;
    background: #090909;
    color: #ffffff;
}

.hero-3632__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3632__content > span {
    color: #ef4444;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .18em;
}

.hero-3632 h1 {
    margin: 13px 0 10px;
    font-family: Impact, sans-serif;
    font-size: 48px;
    line-height: .82;
}

.hero-3632 p {
    max-width: 340px;
    margin: 0;
    color: #737373;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3632__content button {
    width: fit-content;
    height: 40px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #ef4444;
    background: #ef4444;
    color: #111111;
    font: inherit;
    font-size: 8px;
    font-weight: 900;
}

.hero-3632__visual {
    display: grid;
    place-items: center;
    background: radial-gradient(circle, rgba(239,68,68,.12), transparent 60%);
}

.hero-3632__hex {
    width: 180px;
    height: 200px;
    display: grid;
    place-items: center;
    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
    background: linear-gradient(145deg, #7f1d1d, #1f0808);
    color: #fca5a5;
    font-size: 50px;
}

@media (max-width: 700px) {
    .hero-3632 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3633,
    name: "Creator Platform Hero",
    preview: (
      <section className="hero-3633">
        <div className="hero-3633__content">
          <span>FOR PEOPLE WHO CREATE</span>

          <h1>
            Create.
            <span>Share.</span>
            Grow.
          </h1>

          <p>Everything you need to publish your work and build an audience.</p>

          <button type="button">
            Start creating
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="hero-3633__visual">
          <div className="hero-3633__cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3633">
    <div class="hero-3633__content">
        <span>FOR PEOPLE WHO CREATE</span>

        <h1>
            Create.
            <span>Share.</span>
            Grow.
        </h1>

        <p>
            Everything you need to publish your work and build an audience.
        </p>

        <button type="button">
            Start creating
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>

    <div class="hero-3633__visual">
        <div class="hero-3633__cards">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</section>`,
    css: `.hero-3633 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: #fdf2f8;
    color: #831843;
}

.hero-3633__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3633__content > span {
    color: #db2777;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3633 h1 {
    margin: 13px 0 10px;
    font-size: 40px;
    line-height: .95;
    letter-spacing: -.04em;
}

.hero-3633 h1 span {
    display: block;
    color: #db2777;
}

.hero-3633 p {
    max-width: 350px;
    margin: 0;
    color: #a65e7f;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3633__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 999px;
    background: #831843;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
}

.hero-3633__visual {
    display: grid;
    place-items: center;
}

.hero-3633__cards {
    position: relative;
    width: 210px;
    height: 180px;
}

.hero-3633__cards span {
    position: absolute;
    width: 120px;
    height: 155px;
    border: 2px solid #831843;
    border-radius: 12px;
}

.hero-3633__cards span:nth-child(1) {
    left: 0;
    top: 15px;
    background: #f9a8d4;
    transform: rotate(-9deg);
}

.hero-3633__cards span:nth-child(2) {
    left: 45px;
    top: 0;
    background: #f472b6;
}

.hero-3633__cards span:nth-child(3) {
    right: 0;
    top: 16px;
    background: #db2777;
    transform: rotate(9deg);
}

@media (max-width: 700px) {
    .hero-3633 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3634,
    name: "Security Hero",
    preview: (
      <section className="hero-3634">
        <div className="hero-3634__content">
          <span>SECURITY BUILT IN</span>

          <h1>
            Protect what
            <strong> matters most.</strong>
          </h1>

          <p>Simple security tools for protecting teams, accounts and data.</p>

          <button type="button">
            Secure your team
            <i className="ri-shield-check-fill"></i>
          </button>
        </div>

        <div className="hero-3634__visual">
          <div className="hero-3634__shield">
            <i className="ri-shield-check-fill"></i>
          </div>

          <span className="hero-3634__safe">
            <i className="ri-checkbox-circle-fill"></i>
            All systems protected
          </span>
        </div>
      </section>
    ),
    html: `<section class="hero-3634">
    <div class="hero-3634__content">
        <span>SECURITY BUILT IN</span>

        <h1>
            Protect what
            <strong> matters most.</strong>
        </h1>

        <p>
            Simple security tools for protecting teams, accounts and data.
        </p>

        <button type="button">
            Secure your team
            <i class="ri-shield-check-fill"></i>
        </button>
    </div>

    <div class="hero-3634__visual">
        <div class="hero-3634__shield">
            <i class="ri-shield-check-fill"></i>
        </div>

        <span class="hero-3634__safe">
            <i class="ri-checkbox-circle-fill"></i>
            All systems protected
        </span>
    </div>
</section>`,
    css: `.hero-3634 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 20px;
    background: #07140f;
    color: #f0fdf4;
}

.hero-3634__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3634__content > span {
    color: #4ade80;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3634 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
}

.hero-3634 h1 strong {
    display: block;
    color: #4ade80;
}

.hero-3634 p {
    max-width: 350px;
    margin: 0;
    color: #6e8d78;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3634__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 9px;
    background: #4ade80;
    color: #052e16;
    font: inherit;
    font-size: 8px;
    font-weight: 800;
}

.hero-3634__visual {
    position: relative;
    display: grid;
    place-items: center;
}

.hero-3634__shield {
    width: 155px;
    height: 180px;
    display: grid;
    place-items: center;
    clip-path: polygon(50% 0,90% 16%,84% 70%,50% 100%,16% 70%,10% 16%);
    background: linear-gradient(145deg, #14532d, #052e16);
    color: #4ade80;
    font-size: 46px;
}

.hero-3634__safe {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #153b24;
    border-radius: 999px;
    background: #0a1f15;
    color: #86efac;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3634 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3635,
    name: "Cloud Platform Hero",
    preview: (
      <section className="hero-3635">
        <div className="hero-3635__content">
          <span>BUILT FOR SCALE</span>

          <h1>
            Infrastructure
            <strong> made simple.</strong>
          </h1>

          <p>
            Deploy applications globally without managing complicated
            infrastructure.
          </p>

          <div className="hero-3635__actions">
            <button type="button">Deploy now</button>
            <button type="button">Documentation</button>
          </div>
        </div>

        <div className="hero-3635__visual">
          <div className="hero-3635__cloud">
            <i className="ri-cloud-fill"></i>
          </div>

          <div className="hero-3635__nodes">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3635">
    <div class="hero-3635__content">
        <span>BUILT FOR SCALE</span>

        <h1>
            Infrastructure
            <strong> made simple.</strong>
        </h1>

        <p>
            Deploy applications globally without managing complicated infrastructure.
        </p>

        <div class="hero-3635__actions">
            <button type="button">Deploy now</button>
            <button type="button">Documentation</button>
        </div>
    </div>

    <div class="hero-3635__visual">
        <div class="hero-3635__cloud">
            <i class="ri-cloud-fill"></i>
        </div>

        <div class="hero-3635__nodes">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</section>`,
    css: `.hero-3635 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: linear-gradient(135deg, #082f49, #0c4a6e);
    color: #f0f9ff;
}

.hero-3635__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3635__content > span {
    color: #7dd3fc;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3635 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
}

.hero-3635 h1 strong {
    display: block;
    color: #7dd3fc;
}

.hero-3635 p {
    max-width: 360px;
    margin: 0;
    color: #90afc1;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3635__actions {
    margin-top: 21px;
    display: flex;
    gap: 8px;
}

.hero-3635__actions button {
    height: 38px;
    padding: 0 14px;
    border-radius: 9px;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3635__actions button:first-child {
    border: 0;
    background: #7dd3fc;
    color: #082f49;
}

.hero-3635__actions button:last-child {
    border: 1px solid rgba(125,211,252,.2);
    background: transparent;
    color: #bae6fd;
}

.hero-3635__visual {
    position: relative;
    display: grid;
    place-items: center;
}

.hero-3635__cloud {
    width: 150px;
    height: 110px;
    display: grid;
    place-items: center;
    border-radius: 60px;
    background: rgba(125,211,252,.12);
    color: #7dd3fc;
    font-size: 55px;
}

.hero-3635__nodes {
    position: absolute;
    left: 50%;
    bottom: 45px;
    display: flex;
    gap: 35px;
    transform: translateX(-50%);
}

.hero-3635__nodes span {
    width: 13px;
    height: 13px;
    border: 2px solid #7dd3fc;
    border-radius: 50%;
}

@media (max-width: 700px) {
    .hero-3635 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3636,
    name: "Collaboration Hero",
    preview: (
      <section className="hero-3636">
        <div className="hero-3636__content">
          <span>BETTER TOGETHER</span>

          <h1>
            Teamwork without
            <em> the chaos.</em>
          </h1>

          <p>
            Keep everyone aligned with simple tools for projects, feedback and
            communication.
          </p>

          <button type="button">
            Create workspace
            <i className="ri-team-fill"></i>
          </button>
        </div>

        <div className="hero-3636__visual">
          <div className="hero-3636__team">
            <span>AL</span>
            <span>MK</span>
            <span>JS</span>
            <span>+8</span>
          </div>

          <div className="hero-3636__message">
            <strong>Homepage is ready</strong>
            <small>Looks great. Ready to ship.</small>
          </div>
        </div>
      </section>
    ),
    html: `<section class="hero-3636">
    <div class="hero-3636__content">
        <span>BETTER TOGETHER</span>

        <h1>
            Teamwork without
            <em> the chaos.</em>
        </h1>

        <p>
            Keep everyone aligned with simple tools for projects, feedback and communication.
        </p>

        <button type="button">
            Create workspace
            <i class="ri-team-fill"></i>
        </button>
    </div>

    <div class="hero-3636__visual">
        <div class="hero-3636__team">
            <span>AL</span>
            <span>MK</span>
            <span>JS</span>
            <span>+8</span>
        </div>

        <div class="hero-3636__message">
            <strong>Homepage is ready</strong>
            <small>Looks great. Ready to ship.</small>
        </div>
    </div>
</section>`,
    css: `.hero-3636 {
    min-height: 310px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    border-radius: 22px;
    background: #f5f3ff;
    color: #2e1065;
}

.hero-3636__content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3636__content > span {
    color: #8b5cf6;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .15em;
}

.hero-3636 h1 {
    max-width: 420px;
    margin: 13px 0 10px;
    font-size: 38px;
    line-height: 1.02;
}

.hero-3636 h1 em {
    display: block;
    color: #8b5cf6;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3636 p {
    max-width: 360px;
    margin: 0;
    color: #75678b;
    font-size: 10px;
    line-height: 1.7;
}

.hero-3636__content button {
    width: fit-content;
    height: 39px;
    margin-top: 21px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 9px;
    background: #7c3aed;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
}

.hero-3636__visual {
    display: grid;
    place-items: center;
}

.hero-3636__team {
    display: flex;
}

.hero-3636__team span {
    width: 48px;
    height: 48px;
    margin-left: -8px;
    display: grid;
    place-items: center;
    border: 4px solid #f5f3ff;
    border-radius: 50%;
    background: #ddd6fe;
    color: #5b21b6;
    font-size: 8px;
    font-weight: 800;
}

.hero-3636__team span:first-child {
    margin-left: 0;
}

.hero-3636__team span:last-child {
    background: #7c3aed;
    color: #ffffff;
}

.hero-3636__message {
    margin-top: 18px;
    width: 210px;
    padding: 13px;
    border-radius: 11px;
    background: #ffffff;
    box-shadow: 0 15px 30px rgba(124,58,237,.1);
}

.hero-3636__message strong,
.hero-3636__message small {
    display: block;
}

.hero-3636__message strong {
    font-size: 8px;
}

.hero-3636__message small {
    margin-top: 3px;
    color: #9b8cae;
    font-size: 6px;
}

@media (max-width: 700px) {
    .hero-3636 {
        grid-template-columns: 1fr;
    }
}`,
  },
  {
    id: 3637,
    name: "Minimal Business Hero",
    preview: (
      <section className="hero-3637">
        <div className="hero-3637__top">
          <span>STRATEGY · DESIGN · TECHNOLOGY</span>
          <span>2026</span>
        </div>

        <h1>
          Simple ideas.
          <br />
          <em>Strong results.</em>
        </h1>

        <div className="hero-3637__bottom">
          <p>
            We help companies turn complex problems into clear digital products.
          </p>

          <button type="button">
            Start a project
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="hero-3637">
    <div class="hero-3637__top">
        <span>STRATEGY · DESIGN · TECHNOLOGY</span>
        <span>2026</span>
    </div>

    <h1>
        Simple ideas.
        <br>
        <em>Strong results.</em>
    </h1>

    <div class="hero-3637__bottom">
        <p>
            We help companies turn complex problems into clear digital products.
        </p>

        <button type="button">
            Start a project
            <i class="ri-arrow-right-up-line"></i>
        </button>
    </div>
</section>`,
    css: `.hero-3637 {
    min-height: 360px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d4d4d8;
    border-radius: 16px;
    background: #fafafa;
    color: #18181b;
}

.hero-3637__top {
    display: flex;
    justify-content: space-between;
    color: #71717a;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .15em;
}

.hero-3637 h1 {
    margin: 30px 0;
    font-size: clamp(55px, 9vw, 100px);
    line-height: .82;
    letter-spacing: -.065em;
}

.hero-3637 h1 em {
    color: #71717a;
    font-family: Georgia, serif;
    font-weight: 400;
}

.hero-3637__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 25px;
}

.hero-3637__bottom p {
    max-width: 390px;
    margin: 0;
    color: #71717a;
    font-size: 11px;
    line-height: 1.65;
}

.hero-3637__bottom button {
    height: 43px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 11px;
    border: 1px solid #18181b;
    background: #18181b;
    color: #ffffff;
    font: inherit;
    font-size: 8px;
    font-weight: 700;
    cursor: pointer;
}

@media (max-width: 520px) {
    .hero-3637__bottom {
        align-items: flex-start;
        flex-direction: column;
    }
}`,
  },

  {
    id: 3638,
    name: "Industrial Intelligence Hero",
    preview: (
      <section className="hero-3638">
        <div className="hero-3638__grid"></div>

        <div className="hero-3638__header">
          <div className="hero-3638__header-brand">
            <strong>ATERA</strong>
            <span>SYSTEM / 001</span>
          </div>

          <div className="hero-3638__header-meta">
            <span>INTELLIGENCE ENGINE</span>
            <span>DESIGN + AUTOMATION</span>
            <span>STATUS: BUILDING</span>
          </div>

          <div className="hero-3638__cross">
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="hero-3638__hero">
          <div className="hero-3638__title">
            <div className="hero-3638__title-top">
              <strong>BUILD</strong>

              <div>
                <span>THE</span>

                <small>
                  PURPOSE
                  <br />
                  SYSTEMS
                  <br />
                  PRODUCT
                </small>
              </div>
            </div>

            <h1>
              NEXT
              <span>SYSTEM.</span>
            </h1>
          </div>

          <div className="hero-3638__graphic">
            <div className="hero-3638__graphic-number">01</div>

            <div className="hero-3638__circle hero-3638__circle-1"></div>
            <div className="hero-3638__circle hero-3638__circle-2"></div>
            <div className="hero-3638__circle hero-3638__circle-3"></div>

            <div className="hero-3638__axis hero-3638__axis-x"></div>
            <div className="hero-3638__axis hero-3638__axis-y"></div>

            <div className="hero-3638__node hero-3638__node-1"></div>
            <div className="hero-3638__node hero-3638__node-2"></div>
            <div className="hero-3638__node hero-3638__node-3"></div>

            <div className="hero-3638__graphic-copy">
              <span>INTELLIGENCE MAP</span>
              <strong>SYS.01</strong>
            </div>
          </div>
        </div>

        <div className="hero-3638__word">INTELLIGENCE</div>

        <div className="hero-3638__ticker">
          <span>INTELLIGENCE</span>
          <i></i>
          <span>AUTOMATION</span>
          <i></i>
          <span>PRODUCT</span>
          <i></i>
          <span>DESIGN</span>
          <i></i>
          <span>SYSTEMS</span>
        </div>

        <div className="hero-3638__services">
          <div className="hero-3638__service">
            <strong>01</strong>
            <span>/</span>

            <h2>AUTOMATE</h2>

            <p>
              Remove repetitive processes and rebuild workflows around useful
              automation.
            </p>

            <small>SVC_01</small>

            <button type="button">
              <i className="ri-add-line"></i>
            </button>
          </div>

          <div className="hero-3638__service">
            <strong>02</strong>
            <span>/</span>

            <h2>INTELLIGENCE</h2>

            <p>
              Practical intelligent systems designed around real business
              problems.
            </p>

            <small>SVC_02</small>

            <button type="button">
              <i className="ri-add-line"></i>
            </button>
          </div>

          <div className="hero-3638__service">
            <strong>03</strong>
            <span>/</span>

            <h2>MULTIMODAL</h2>

            <p>
              Systems that understand text, visual information and structured
              data.
            </p>

            <small>SVC_03</small>

            <button type="button">
              <i className="ri-add-line"></i>
            </button>
          </div>

          <div className="hero-3638__service">
            <strong>04</strong>
            <span>/</span>

            <h2>PRODUCT</h2>

            <p>
              From rough concept to useful digital product with a clear system
              behind it.
            </p>

            <small>SVC_04</small>

            <button type="button">
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>

        <div className="hero-3638__statement">
          <div className="hero-3638__statement-title">
            <span>WE DON'T</span>
            <span>ADD AI.</span>
            <strong>WE REBUILD</strong>
            <strong>THE WORKFLOW.</strong>
          </div>

          <div className="hero-3638__blueprint">
            <div className="hero-3638__blueprint-grid"></div>

            <span className="hero-3638__blueprint-label">SYSTEM MAP_01</span>

            <div className="hero-3638__blueprint-circle">
              <span></span>
            </div>

            <div className="hero-3638__blueprint-line hero-3638__blueprint-line-1"></div>
            <div className="hero-3638__blueprint-line hero-3638__blueprint-line-2"></div>
            <div className="hero-3638__blueprint-line hero-3638__blueprint-line-3"></div>

            <small>
              PURPOSE FIRST
              <br />
              REAL SYSTEMS
              <br />
              MEASURABLE OUTPUT
            </small>
          </div>
        </div>

        <div className="hero-3638__projects">
          <article>
            <div className="hero-3638__project-top">
              <span>PROJECT.01</span>
              <span>01 / 03</span>
            </div>

            <h3>
              AI
              <br />
              WORKFLOW
              <br />
              SYSTEM
            </h3>

            <div className="hero-3638__project-diagram">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>Streamline, automate and scale operational workflows.</p>
          </article>

          <article>
            <div className="hero-3638__project-top">
              <span>PROJECT.02</span>
              <span>02 / 03</span>
            </div>

            <h3>
              PRODUCT
              <br />
              DESIGN
              <br />
              AI
            </h3>

            <div className="hero-3638__project-sphere">
              <span></span>
            </div>

            <p>Intelligent product thinking connected to practical design.</p>
          </article>

          <article>
            <div className="hero-3638__project-top">
              <span>PROJECT.03</span>
              <span>03 / 03</span>
            </div>

            <h3>
              BUSINESS
              <br />
              AUTO
              <br />
              MATION
            </h3>

            <div className="hero-3638__project-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>Practical systems focused on efficiency, clarity and output.</p>
          </article>
        </div>

        <div className="hero-3638__footer">
          <div className="hero-3638__footer-copy">
            <span>READY</span>

            <div>
              <small>TO</small>
              <strong>BUILD</strong>
            </div>

            <span>WHAT MATTERS?</span>
          </div>

          <button type="button">
            START A PROJECT
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </section>
    ),
    html: `<section class="hero-3638">
    <div class="hero-3638__grid"></div>

    <div class="hero-3638__header">
        <div class="hero-3638__header-brand">
            <strong>ATERA</strong>
            <span>SYSTEM / 001</span>
        </div>

        <div class="hero-3638__header-meta">
            <span>INTELLIGENCE ENGINE</span>
            <span>DESIGN + AUTOMATION</span>
            <span>STATUS: BUILDING</span>
        </div>

        <div class="hero-3638__cross">
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="hero-3638__hero">
        <div class="hero-3638__title">
            <div class="hero-3638__title-top">
                <strong>BUILD</strong>

                <div>
                    <span>THE</span>

                    <small>
                        PURPOSE<br>
                        SYSTEMS<br>
                        PRODUCT
                    </small>
                </div>
            </div>

            <h1>
                NEXT
                <span>SYSTEM.</span>
            </h1>
        </div>

        <div class="hero-3638__graphic">
            <div class="hero-3638__graphic-number">01</div>

            <div class="hero-3638__circle hero-3638__circle-1"></div>
            <div class="hero-3638__circle hero-3638__circle-2"></div>
            <div class="hero-3638__circle hero-3638__circle-3"></div>

            <div class="hero-3638__axis hero-3638__axis-x"></div>
            <div class="hero-3638__axis hero-3638__axis-y"></div>

            <div class="hero-3638__node hero-3638__node-1"></div>
            <div class="hero-3638__node hero-3638__node-2"></div>
            <div class="hero-3638__node hero-3638__node-3"></div>

            <div class="hero-3638__graphic-copy">
                <span>INTELLIGENCE MAP</span>
                <strong>SYS.01</strong>
            </div>
        </div>
    </div>

    <div class="hero-3638__word">
        INTELLIGENCE
    </div>

    <div class="hero-3638__ticker">
        <span>INTELLIGENCE</span>
        <i></i>
        <span>AUTOMATION</span>
        <i></i>
        <span>PRODUCT</span>
        <i></i>
        <span>DESIGN</span>
        <i></i>
        <span>SYSTEMS</span>
    </div>

    <div class="hero-3638__services">
        <div class="hero-3638__service">
            <strong>01</strong>
            <span>/</span>
            <h2>AUTOMATE</h2>
            <p>Remove repetitive processes and rebuild workflows around useful automation.</p>
            <small>SVC_01</small>
            <button type="button">
                <i class="ri-add-line"></i>
            </button>
        </div>

        <div class="hero-3638__service">
            <strong>02</strong>
            <span>/</span>
            <h2>INTELLIGENCE</h2>
            <p>Practical intelligent systems designed around real business problems.</p>
            <small>SVC_02</small>
            <button type="button">
                <i class="ri-add-line"></i>
            </button>
        </div>

        <div class="hero-3638__service">
            <strong>03</strong>
            <span>/</span>
            <h2>MULTIMODAL</h2>
            <p>Systems that understand text, visual information and structured data.</p>
            <small>SVC_03</small>
            <button type="button">
                <i class="ri-add-line"></i>
            </button>
        </div>

        <div class="hero-3638__service">
            <strong>04</strong>
            <span>/</span>
            <h2>PRODUCT</h2>
            <p>From rough concept to useful digital product with a clear system behind it.</p>
            <small>SVC_04</small>
            <button type="button">
                <i class="ri-add-line"></i>
            </button>
        </div>
    </div>

    <div class="hero-3638__statement">
        <div class="hero-3638__statement-title">
            <span>WE DON'T</span>
            <span>ADD AI.</span>
            <strong>WE REBUILD</strong>
            <strong>THE WORKFLOW.</strong>
        </div>

        <div class="hero-3638__blueprint">
            <div class="hero-3638__blueprint-grid"></div>

            <span class="hero-3638__blueprint-label">
                SYSTEM MAP_01
            </span>

            <div class="hero-3638__blueprint-circle">
                <span></span>
            </div>

            <div class="hero-3638__blueprint-line hero-3638__blueprint-line-1"></div>
            <div class="hero-3638__blueprint-line hero-3638__blueprint-line-2"></div>
            <div class="hero-3638__blueprint-line hero-3638__blueprint-line-3"></div>

            <small>
                PURPOSE FIRST<br>
                REAL SYSTEMS<br>
                MEASURABLE OUTPUT
            </small>
        </div>
    </div>

    <div class="hero-3638__projects">
        <article>
            <div class="hero-3638__project-top">
                <span>PROJECT.01</span>
                <span>01 / 03</span>
            </div>

            <h3>
                AI<br>
                WORKFLOW<br>
                SYSTEM
            </h3>

            <div class="hero-3638__project-diagram">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <p>Streamline, automate and scale operational workflows.</p>
        </article>

        <article>
            <div class="hero-3638__project-top">
                <span>PROJECT.02</span>
                <span>02 / 03</span>
            </div>

            <h3>
                PRODUCT<br>
                DESIGN<br>
                AI
            </h3>

            <div class="hero-3638__project-sphere">
                <span></span>
            </div>

            <p>Intelligent product thinking connected to practical design.</p>
        </article>

        <article>
            <div class="hero-3638__project-top">
                <span>PROJECT.03</span>
                <span>03 / 03</span>
            </div>

            <h3>
                BUSINESS<br>
                AUTO<br>
                MATION
            </h3>

            <div class="hero-3638__project-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <p>Practical systems focused on efficiency, clarity and output.</p>
        </article>
    </div>

    <div class="hero-3638__footer">
        <div class="hero-3638__footer-copy">
            <span>READY</span>

            <div>
                <small>TO</small>
                <strong>BUILD</strong>
            </div>

            <span>WHAT MATTERS?</span>
        </div>

        <button type="button">
            START A PROJECT
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
</section>`,
    css: `.hero-3638 {
    position: relative;
    width: 100%;
    overflow: hidden;
    border: 2px solid #0e0e0d;
    background: #e8e4da;
    color: #0c0c0b;
    font-family: Arial, Helvetica, sans-serif;
}

.hero-3638__grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .2;
    background:
        linear-gradient(rgba(15, 15, 14, .09) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 15, 14, .09) 1px, transparent 1px);
    background-size: 30px 30px;
}

.hero-3638__header {
    position: relative;
    z-index: 2;
    min-height: 52px;
    padding: 0 18px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-bottom: 1px solid #111111;
}

.hero-3638__header-brand {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.hero-3638__header-brand strong {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 15px;
    letter-spacing: .03em;
}

.hero-3638__header-brand span {
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
    letter-spacing: .13em;
}

.hero-3638__header-meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
    letter-spacing: .11em;
}

.hero-3638__header-meta span:last-child {
    color: #ca2e21;
}

.hero-3638__cross {
    position: relative;
    justify-self: end;
    width: 26px;
    height: 26px;
}

.hero-3638__cross span:first-child {
    position: absolute;
    left: 0;
    top: 12px;
    width: 26px;
    height: 1px;
    background: #cf3022;
}

.hero-3638__cross span:last-child {
    position: absolute;
    left: 12px;
    top: 0;
    width: 1px;
    height: 26px;
    background: #cf3022;
}

.hero-3638__hero {
    position: relative;
    z-index: 2;
    min-height: 315px;
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    border-bottom: 1px solid #111111;
}

.hero-3638__title {
    padding: 23px 20px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3638__title-top {
    display: flex;
    align-items: flex-end;
    gap: 12px;
}

.hero-3638__title-top > strong {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(57px, 8vw, 95px);
    line-height: .78;
    letter-spacing: -.035em;
}

.hero-3638__title-top > div {
    margin-bottom: 2px;
    display: flex;
    align-items: flex-start;
    gap: 9px;
}

.hero-3638__title-top > div > span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 11px;
    font-weight: 900;
}

.hero-3638__title-top small {
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
    line-height: 1.45;
    letter-spacing: .08em;
}

.hero-3638 h1 {
    margin: 6px 0 0;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(82px, 13vw, 145px);
    line-height: .66;
    letter-spacing: -.045em;
}

.hero-3638 h1 span {
    display: block;
}

.hero-3638__graphic {
    position: relative;
    overflow: hidden;
    border-left: 1px solid #111111;
}

.hero-3638__graphic::before {
    content: "";
    position: absolute;
    inset: 18px;
    border: 1px solid rgba(15, 15, 14, .28);
}

.hero-3638__graphic-number {
    position: absolute;
    right: 17px;
    top: 13px;
    font-family: Impact, sans-serif;
    font-size: 41px;
    color: #cf3022;
    opacity: .8;
}

.hero-3638__circle {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #181817;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.hero-3638__circle-1 {
    width: 190px;
    height: 190px;
}

.hero-3638__circle-2 {
    width: 126px;
    height: 126px;
}

.hero-3638__circle-3 {
    width: 55px;
    height: 55px;
    border-color: #cf3022;
}

.hero-3638__axis {
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgba(15, 15, 14, .42);
}

.hero-3638__axis-x {
    width: 225px;
    height: 1px;
    transform: translate(-50%, -50%);
}

.hero-3638__axis-y {
    width: 1px;
    height: 225px;
    transform: translate(-50%, -50%);
}

.hero-3638__node {
    position: absolute;
    width: 7px;
    height: 7px;
    border: 1px solid #111111;
    border-radius: 50%;
    background: #e8e4da;
}

.hero-3638__node-1 {
    left: 26%;
    top: 35%;
}

.hero-3638__node-2 {
    right: 27%;
    top: 27%;
    background: #cf3022;
    border-color: #cf3022;
}

.hero-3638__node-3 {
    right: 31%;
    bottom: 28%;
}

.hero-3638__graphic-copy {
    position: absolute;
    left: 20px;
    bottom: 17px;
    display: flex;
    flex-direction: column;
    font-family: "Courier New", monospace;
}

.hero-3638__graphic-copy span {
    font-size: 5px;
    letter-spacing: .13em;
}

.hero-3638__graphic-copy strong {
    margin-top: 2px;
    color: #cf3022;
    font-size: 7px;
}

.hero-3638__word {
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding: 4px 12px 0;
    border-bottom: 1px solid #111111;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(55px, 10vw, 115px);
    line-height: .8;
    letter-spacing: -.035em;
    white-space: nowrap;
}

.hero-3638__ticker {
    position: relative;
    z-index: 2;
    min-height: 27px;
    padding: 0 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    overflow: hidden;
    background: #111111;
    color: #ece8df;
}

.hero-3638__ticker span {
    white-space: nowrap;
    font-size: 5px;
    font-weight: 800;
    letter-spacing: .3em;
}

.hero-3638__ticker i {
    width: 3px;
    height: 3px;
    flex: 0 0 3px;
    border-radius: 50%;
    background: #cf3022;
}

.hero-3638__services {
    position: relative;
    z-index: 2;
    border-bottom: 1px solid #111111;
}

.hero-3638__service {
    min-height: 52px;
    padding: 0 16px;
    display: grid;
    grid-template-columns: 39px 13px 185px 1fr 45px 27px;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(17, 17, 17, .35);
}

.hero-3638__service:last-child {
    border-bottom: 0;
}

.hero-3638__service > strong {
    font-family: "Arial Black", sans-serif;
    font-size: 17px;
}

.hero-3638__service > span {
    color: #cf3022;
    font-size: 16px;
    font-weight: 900;
}

.hero-3638__service h2 {
    margin: 0;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 22px;
    letter-spacing: .01em;
}

.hero-3638__service p {
    max-width: 310px;
    margin: 0;
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
    line-height: 1.45;
}

.hero-3638__service small {
    font-family: "Courier New", monospace;
    font-size: 5px;
    letter-spacing: .08em;
}

.hero-3638__service button {
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border: 1px solid #77736c;
    border-radius: 50%;
    background: transparent;
    color: #111111;
    font-size: 11px;
    cursor: pointer;
    transition:
        background .2s ease,
        color .2s ease,
        transform .2s ease;
}

.hero-3638__service button:hover {
    background: #cf3022;
    color: #ffffff;
    transform: rotate(90deg);
}

.hero-3638__statement {
    position: relative;
    z-index: 2;
    min-height: 205px;
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    background: #10100f;
    color: #ece8df;
}

.hero-3638__statement-title {
    padding: 19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-3638__statement-title span,
.hero-3638__statement-title strong {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(29px, 5vw, 55px);
    line-height: .8;
    letter-spacing: -.025em;
}

.hero-3638__statement-title strong {
    color: #cf3022;
}

.hero-3638__blueprint {
    position: relative;
    overflow: hidden;
    border-left: 1px solid #494641;
}

.hero-3638__blueprint-grid {
    position: absolute;
    inset: 0;
    opacity: .35;
    background:
        linear-gradient(rgba(230, 225, 214, .1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(230, 225, 214, .1) 1px, transparent 1px);
    background-size: 22px 22px;
}

.hero-3638__blueprint-label {
    position: absolute;
    right: 12px;
    top: 10px;
    font-family: "Courier New", monospace;
    font-size: 5px;
    letter-spacing: .13em;
}

.hero-3638__blueprint-circle {
    position: absolute;
    width: 120px;
    height: 120px;
    left: 52%;
    top: 52%;
    border: 1px solid #858078;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.hero-3638__blueprint-circle::before,
.hero-3638__blueprint-circle::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background: #858078;
    transform: translate(-50%, -50%);
}

.hero-3638__blueprint-circle::before {
    width: 155px;
    height: 1px;
}

.hero-3638__blueprint-circle::after {
    width: 1px;
    height: 155px;
}

.hero-3638__blueprint-circle span {
    position: absolute;
    width: 55px;
    height: 55px;
    left: 50%;
    top: 50%;
    border: 1px solid #cf3022;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.hero-3638__blueprint-line {
    position: absolute;
    height: 1px;
    background: #858078;
    transform-origin: left center;
}

.hero-3638__blueprint-line-1 {
    width: 120px;
    left: 15%;
    top: 27%;
    transform: rotate(14deg);
}

.hero-3638__blueprint-line-2 {
    width: 105px;
    right: 7%;
    top: 28%;
    transform: rotate(-31deg);
}

.hero-3638__blueprint-line-3 {
    width: 130px;
    left: 17%;
    bottom: 20%;
    transform: rotate(-12deg);
}

.hero-3638__blueprint small {
    position: absolute;
    left: 15px;
    bottom: 14px;
    color: #9b958c;
    font-family: "Courier New", monospace;
    font-size: 5px;
    line-height: 1.5;
}

.hero-3638__projects {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #111111;
}

.hero-3638__projects article {
    position: relative;
    min-height: 245px;
    padding: 13px;
    overflow: hidden;
    border-right: 1px solid #111111;
}

.hero-3638__projects article:last-child {
    border-right: 0;
}

.hero-3638__project-top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 7px;
    border-bottom: 1px solid rgba(17, 17, 17, .4);
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
}

.hero-3638__project-top span:first-child {
    color: #cf3022;
}

.hero-3638__projects h3 {
    position: relative;
    z-index: 2;
    margin: 12px 0 0;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(27px, 4vw, 44px);
    line-height: .8;
    letter-spacing: -.02em;
}

.hero-3638__projects article > p {
    position: absolute;
    left: 13px;
    bottom: 12px;
    max-width: 145px;
    margin: 0;
    font-family: "Courier New", monospace;
    font-size: 5px;
    font-weight: 700;
    line-height: 1.4;
}

.hero-3638__project-diagram {
    position: absolute;
    width: 95px;
    height: 75px;
    right: 15px;
    bottom: 45px;
    border: 1px solid #aaa49b;
}

.hero-3638__project-diagram span {
    position: absolute;
    border: 1px solid #cf3022;
}

.hero-3638__project-diagram span:nth-child(1) {
    width: 30px;
    height: 30px;
    left: 10px;
    top: 9px;
}

.hero-3638__project-diagram span:nth-child(2) {
    width: 35px;
    height: 1px;
    right: 10px;
    top: 26px;
}

.hero-3638__project-diagram span:nth-child(3) {
    width: 1px;
    height: 30px;
    right: 27px;
    bottom: 7px;
}

.hero-3638__project-sphere {
    position: absolute;
    width: 92px;
    height: 92px;
    right: 16px;
    bottom: 39px;
    border-radius: 50%;
    background: #d93627;
}

.hero-3638__project-sphere span {
    position: absolute;
    inset: 13px;
    border: 1px solid rgba(232, 228, 218, .6);
    border-radius: 50%;
}

.hero-3638__project-sphere::before,
.hero-3638__project-sphere::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgba(232, 228, 218, .6);
    transform: translate(-50%, -50%);
}

.hero-3638__project-sphere::before {
    width: 72px;
    height: 1px;
}

.hero-3638__project-sphere::after {
    width: 1px;
    height: 72px;
}

.hero-3638__project-bars {
    position: absolute;
    width: 105px;
    height: 72px;
    right: 13px;
    bottom: 44px;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    border-bottom: 1px solid #111111;
}

.hero-3638__project-bars span {
    flex: 1;
    background: #111111;
}

.hero-3638__project-bars span:nth-child(1) {
    height: 22%;
}

.hero-3638__project-bars span:nth-child(2) {
    height: 38%;
}

.hero-3638__project-bars span:nth-child(3) {
    height: 58%;
    background: #cf3022;
}

.hero-3638__project-bars span:nth-child(4) {
    height: 70%;
}

.hero-3638__project-bars span:nth-child(5) {
    height: 91%;
}

.hero-3638__footer {
    position: relative;
    z-index: 2;
    min-height: 120px;
    padding: 14px 18px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 25px;
}

.hero-3638__footer-copy {
    display: flex;
    align-items: flex-end;
    gap: 11px;
}

.hero-3638__footer-copy > span {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(24px, 4vw, 43px);
    line-height: .8;
}

.hero-3638__footer-copy > div {
    display: flex;
    align-items: flex-end;
    gap: 7px;
}

.hero-3638__footer-copy small {
    margin-bottom: 3px;
    font-family: Impact, sans-serif;
    font-size: 18px;
}

.hero-3638__footer-copy strong {
    color: #cf3022;
    font-family: Impact, "Arial Black", sans-serif;
    font-size: clamp(48px, 8vw, 85px);
    line-height: .7;
}

.hero-3638__footer button {
    height: 43px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 1px solid #111111;
    background: transparent;
    color: #111111;
    font: inherit;
    font-size: 7px;
    font-weight: 900;
    cursor: pointer;
    transition:
        background .2s ease,
        color .2s ease,
        transform .2s ease;
}

.hero-3638__footer button:hover {
    background: #111111;
    color: #ffffff;
    transform: translateY(-2px);
}

@media (max-width: 820px) {
    .hero-3638__hero {
        grid-template-columns: 1fr;
    }

    .hero-3638__graphic {
        min-height: 280px;
        border-top: 1px solid #111111;
        border-left: 0;
    }

    .hero-3638__service {
        grid-template-columns: 38px 12px 1fr 30px;
    }

    .hero-3638__service p,
    .hero-3638__service small {
        display: none;
    }

    .hero-3638__statement {
        grid-template-columns: 1fr;
    }

    .hero-3638__blueprint {
        min-height: 230px;
        border-top: 1px solid #494641;
        border-left: 0;
    }

    .hero-3638__projects {
        grid-template-columns: 1fr;
    }

    .hero-3638__projects article {
        min-height: 220px;
        border-right: 0;
        border-bottom: 1px solid #111111;
    }

    .hero-3638__projects article:last-child {
        border-bottom: 0;
    }
}

@media (max-width: 560px) {
    .hero-3638__header {
        grid-template-columns: 1fr auto;
    }

    .hero-3638__header-meta {
        display: none;
    }

    .hero-3638__title {
        padding: 22px 14px;
    }

    .hero-3638__title-top > strong {
        font-size: 55px;
    }

    .hero-3638 h1 {
        font-size: 86px;
    }

    .hero-3638__word {
        font-size: 54px;
    }

    .hero-3638__ticker {
        justify-content: flex-start;
    }

    .hero-3638__service {
        padding: 0 11px;
        grid-template-columns: 30px 9px 1fr 24px;
    }

    .hero-3638__service > strong {
        font-size: 14px;
    }

    .hero-3638__service h2 {
        font-size: 17px;
    }

    .hero-3638__statement-title {
        padding: 18px 13px;
    }

    .hero-3638__footer {
        align-items: flex-start;
        flex-direction: column;
    }

    .hero-3638__footer-copy {
        flex-wrap: wrap;
    }

    .hero-3638__footer-copy strong {
        font-size: 58px;
    }
}`,
  },
];
