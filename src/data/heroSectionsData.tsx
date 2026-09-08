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
];
