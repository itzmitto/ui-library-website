import "../pages/All.css";

export const patterns = [
  {
    id: 300,
    name: "Grid Pattern",
    preview: <div className="pt-300"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    height: 100%;
    min-height: 300px;
    --color: rgba(4, 234, 250, 0.897);
    background-color: #191a1a;
    background-image:
        linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
    background-size: 55px 55px;
    border-radius: 10px;
}`,
  },
  {
    id: 301,
    name: "Grid Pattern",
    preview: <div className="pt-301"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    height: 100%;
    min-height: 300px;
    --color: rgba(114, 114, 114, 0.3);
    background-color: #1a1919;
    background-image:
        linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
    background-size: 55px 55px;
    border-radius: 10px;
}`,
  },
  {
    id: 302,
    name: "Dot Pattern",
    preview: <div className="pt-302"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0d0d0d;
    background-image: radial-gradient(circle, rgba(6, 253, 220, 0.945) 1px, transparent 1px);
    background-size: 24px 24px;
    border-radius: 10px;
}`,
  },
  {
    id: 303,
    name: "Diagonal Lines",
    preview: <div className="pt-303"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0f0f0f;
    background-image: repeating-linear-gradient(45deg,
            rgba(4, 104, 255, 0.973) 0px,
            rgba(255, 3, 3, 0.986) 1px,
            transparent 1px,
            transparent 12px);
    border-radius: 10px;
}`,
  },
  {
    id: 304,
    name: "Pattern",
    preview: (
      <div className="pattern-304">
        <div className="pt-304"></div>
      </div>
    ),
    html: `<div class="Pattern-outer">
    <div class="Pattern"></div>
</div>`,
    css: `.Pattern-outer {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
}
.Pattern {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,
            #fff 0%,
            #fff 40%,
            rgba(255, 255, 255, 0) 100%),
        linear-gradient(to right, #0ed2da, #5f29c7);
    position: relative;
    overflow: hidden;
}
.Pattern::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(90deg, #ccc 1px, transparent 1px);
    background-size: 50px 100%;
    pointer-events: none;
    mask-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 70%);
    -webkit-mask-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 70%);
}`,
  },
  {
    id: 305,
    name: "Pattern",
    preview: (
      <div className="pattern-305">
        <div className="pt-305"></div>
      </div>
    ),
    html: `<div class="Pattern-outer">
    <div class="Pattern"></div>
</div>`,
    css: `.Pattern-outer {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
}
.Pattern {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,
            #fff 0%,
            #fff 40%,
            rgba(212, 10, 10, 0) 100%),
        linear-gradient(to right, #ff0101, #022ffa);
    position: relative;
    overflow: hidden;
}
.Pattern::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(90deg, #ccc 1px, transparent 1px);
    background-size: 50px 100%;
    pointer-events: none;
    mask-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 70%);
    -webkit-mask-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 70%);
}`,
  },
  {
    id: 306,
    name: "Wavy Lines Pattern",
    preview: (
      <div className="pattern-306">
        <div className="pt-306"></div>
      </div>
    ),
    html: `<div class="Pattern-outer">
    <div class="Pattern"></div>
</div>`,
    css: `.Pattern-outer {
    width: 100%;
    min-height: 300px;
    border-radius: 10px;
    overflow: hidden;
}
.Pattern {
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-color: #0a0a0f;
    background-image:
        repeating-linear-gradient(0deg,
            transparent,
            transparent 20px,
            rgba(124, 58, 237, 0.08) 20px,
            rgba(124, 58, 237, 0.08) 21px),
        repeating-linear-gradient(90deg,
            transparent,
            transparent 20px,
            rgba(99, 102, 241, 0.05) 20px,
            rgba(99, 102, 241, 0.05) 21px);
    background-size: 21px 21px;
    position: relative;
}
.Pattern::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
}`,
  },
  {
    id: 307,
    name: "Circuit Pattern",
    preview: (
      <div className="pattern-307">
        <div className="pt-307"></div>
      </div>
    ),
    html: `<div class="Pattern-outer">
    <div class="Pattern"></div>
</div>`,
    css: `.Pattern-outer {
    width: 100%;
    min-height: 300px;
    border-radius: 10px;
    overflow: hidden;
}
.Pattern {
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-color: #050a0a;
    background-image:
        linear-gradient(rgba(0, 255, 136, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 136, 0.07) 1px, transparent 1px),
        radial-gradient(circle, rgba(0, 255, 136, 0.15) 1px, transparent 1px);
    background-size: 40px 40px, 40px 40px, 40px 40px;
    background-position: 0 0, 0 0, 20px 20px;
    position: relative;
}
.Pattern::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 20px 20px, rgba(0, 255, 136, 0.2) 2px, transparent 2px),
        radial-gradient(circle at 0px 0px, rgba(0, 255, 136, 0.12) 2px, transparent 2px);
    background-size: 40px 40px;
}
.Pattern::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 40%, rgba(0, 255, 136, 0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 60%, rgba(0, 200, 100, 0.06) 0%, transparent 50%);
}`,
  },

  {
    id: 308,
    name: "Crosshatch Pattern",
    preview: <div className="pt-308"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fafaf9;
    background-image:
        repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) 1px, transparent 1px, transparent 14px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) 1px, transparent 1px, transparent 14px);
    border-radius: 10px;
}`,
  },
  {
    id: 309,
    name: "Bubble Pattern",
    preview: <div className="pt-309"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #eef2ff;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.25) 0%, transparent 8%),
        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.25) 0%, transparent 8%),
        radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 6%),
        radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 6%);
    background-size: 80px 80px;
    border-radius: 10px;
}`,
  },
  {
    id: 310,
    name: "Honeycomb Pattern",
    preview: <div className="pt-310"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fff7ed;
    background-image:
        linear-gradient(30deg, #fbbf2422 12%, transparent 12.5%, transparent 87%, #fbbf2422 87.5%, #fbbf2422),
        linear-gradient(150deg, #fbbf2422 12%, transparent 12.5%, transparent 87%, #fbbf2422 87.5%, #fbbf2422),
        linear-gradient(30deg, #fbbf2422 12%, transparent 12.5%, transparent 87%, #fbbf2422 87.5%, #fbbf2422),
        linear-gradient(150deg, #fbbf2422 12%, transparent 12.5%, transparent 87%, #fbbf2422 87.5%, #fbbf2422),
        linear-gradient(60deg, #fbbf2415 25%, transparent 25.5%, transparent 75%, #fbbf2415 75%, #fbbf2415),
        linear-gradient(60deg, #fbbf2415 25%, transparent 25.5%, transparent 75%, #fbbf2415 75%, #fbbf2415);
    background-size: 40px 70px;
    background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
    border-radius: 10px;
}`,
  },
  {
    id: 311,
    name: "Confetti Pattern",
    preview: <div className="pt-311"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fdf2f8;
    background-image:
        radial-gradient(circle, #ec4899 2px, transparent 2px),
        radial-gradient(circle, #f59e0b 2px, transparent 2px),
        radial-gradient(circle, #06b6d4 2px, transparent 2px),
        radial-gradient(circle, #84cc16 2px, transparent 2px);
    background-size: 50px 50px;
    background-position: 0 0, 25px 12px, 12px 30px, 38px 38px;
    border-radius: 10px;
}`,
  },
  {
    id: 312,
    name: "Topography Pattern",
    preview: <div className="pt-312"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #042f2e;
    background-image:
        repeating-radial-gradient(circle at 20% 30%, transparent 0, transparent 14px, rgba(45, 212, 191, 0.12) 15px, rgba(45, 212, 191, 0.12) 16px),
        repeating-radial-gradient(circle at 80% 70%, transparent 0, transparent 18px, rgba(45, 212, 191, 0.1) 19px, rgba(45, 212, 191, 0.1) 20px);
    border-radius: 10px;
}`,
  },
  {
    id: 313,
    name: "Plus Pattern",
    preview: <div className="pt-313"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    background-image:
        linear-gradient(rgba(15, 23, 42, 0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(15, 23, 42, 0.12) 1px, transparent 1px);
    background-size: 28px 28px;
    background-position: -1px -1px;
    border-radius: 10px;
}`,
  },
  {
    id: 314,
    name: "Aurora Pattern",
    preview: <div className="pt-314"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0a0a0f;
    background-image:
        radial-gradient(ellipse 60% 50% at 20% 20%, rgba(124, 58, 237, 0.35) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 80% 30%, rgba(6, 182, 212, 0.3) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 50% 90%, rgba(236, 72, 153, 0.25) 0%, transparent 60%);
    border-radius: 10px;
}`,
  },
  {
    id: 811,
    name: "Neon Grid Pattern",
    preview: <div className="pt-811"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #050816;
    background-image:
        linear-gradient(rgba(99, 102, 241, 0.14) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.14) 1px, transparent 1px),
        radial-gradient(circle at center, rgba(99, 102, 241, 0.18), transparent 55%);
    background-size: 40px 40px, 40px 40px, 100% 100%;
    border-radius: 16px;
}`,
  },
  {
    id: 812,
    name: "Soft Dot Pattern",
    preview: <div className="pt-812"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fafafa;
    background-image:
        radial-gradient(circle, #d4d4d8 1.2px, transparent 1.2px);
    background-size: 24px 24px;
    border-radius: 16px;
}`,
  },
  {
    id: 813,
    name: "Purple Dots",
    preview: <div className="pt-813"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #120c1f;
    background-image:
        radial-gradient(circle, rgba(168, 85, 247, 0.55) 1.2px, transparent 1.2px);
    background-size: 26px 26px;
    border-radius: 16px;
}`,
  },
  {
    id: 814,
    name: "Diagonal Stripe Pattern",
    preview: <div className="pt-814"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #111827;
    background-image:
        repeating-linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.04) 0,
            rgba(255, 255, 255, 0.04) 2px,
            transparent 2px,
            transparent 14px
        );
    border-radius: 16px;
}`,
  },
  {
    id: 815,
    name: "Checkerboard Pattern",
    preview: <div className="pt-815"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #18181b;
    background-image:
        linear-gradient(45deg, #202023 25%, transparent 25%),
        linear-gradient(-45deg, #202023 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #202023 75%),
        linear-gradient(-45deg, transparent 75%, #202023 75%);
    background-size: 42px 42px;
    background-position:
        0 0,
        0 21px,
        21px -21px,
        -21px 0;
    border-radius: 16px;
}`,
  },
  {
    id: 816,
    name: "Hexagon Pattern",
    preview: <div className="pt-816"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #07121b;
    background-image:
        linear-gradient(30deg, rgba(34, 211, 238, 0.12) 12%, transparent 12.5%, transparent 87%, rgba(34, 211, 238, 0.12) 87.5%, rgba(34, 211, 238, 0.12)),
        linear-gradient(150deg, rgba(34, 211, 238, 0.12) 12%, transparent 12.5%, transparent 87%, rgba(34, 211, 238, 0.12) 87.5%, rgba(34, 211, 238, 0.12)),
        linear-gradient(30deg, rgba(34, 211, 238, 0.12) 12%, transparent 12.5%, transparent 87%, rgba(34, 211, 238, 0.12) 87.5%, rgba(34, 211, 238, 0.12)),
        linear-gradient(150deg, rgba(34, 211, 238, 0.12) 12%, transparent 12.5%, transparent 87%, rgba(34, 211, 238, 0.12) 87.5%, rgba(34, 211, 238, 0.12)),
        linear-gradient(60deg, rgba(34, 211, 238, 0.08) 25%, transparent 25.5%, transparent 75%, rgba(34, 211, 238, 0.08) 75%);
    background-position:
        0 0,
        0 0,
        28px 48px,
        28px 48px,
        0 0;
    background-size:
        56px 96px,
        56px 96px,
        56px 96px,
        56px 96px,
        56px 96px;
    border-radius: 16px;
}`,
  },
  {
    id: 817,
    name: "Aurora Glow Pattern",
    preview: <div className="pt-817"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.45), transparent 30%),
        radial-gradient(circle at 80% 25%, rgba(168, 85, 247, 0.4), transparent 28%),
        radial-gradient(circle at 50% 85%, rgba(236, 72, 153, 0.3), transparent 32%),
        linear-gradient(135deg, #050816, #111827);
    border-radius: 16px;
}`,
  },
  {
    id: 818,
    name: "Mesh Gradient Pattern",
    preview: <div className="pt-818"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.32), transparent 24%),
        radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.28), transparent 28%),
        radial-gradient(circle at 65% 80%, rgba(14, 165, 233, 0.24), transparent 25%),
        radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.2), transparent 22%),
        #0f172a;
    background-blend-mode: screen;
    border-radius: 16px;
}`,
  },
  {
    id: 819,
    name: "Wave Pattern",
    preview: <div className="pt-819"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0f172a;
    background-image:
        radial-gradient(ellipse at 50% 100%, transparent 0, transparent 38%, rgba(96, 165, 250, 0.16) 39%, transparent 40%),
        radial-gradient(ellipse at 50% 100%, transparent 0, transparent 48%, rgba(96, 165, 250, 0.12) 49%, transparent 50%),
        radial-gradient(ellipse at 50% 100%, transparent 0, transparent 58%, rgba(96, 165, 250, 0.08) 59%, transparent 60%);
    background-size: 100% 100%, 100% 100%, 100% 100%;
    border-radius: 16px;
}`,
  },
  {
    id: 820,
    name: "Blueprint Pattern",
    preview: <div className="pt-820"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #082f49;
    background-image:
        linear-gradient(rgba(125, 211, 252, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(125, 211, 252, 0.08) 1px, transparent 1px),
        linear-gradient(rgba(125, 211, 252, 0.14) 1px, transparent 1px),
        linear-gradient(90deg, rgba(125, 211, 252, 0.14) 1px, transparent 1px);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
    border-radius: 16px;
}`,
  },
  {
    id: 821,
    name: "Crosshatch Pattern",
    preview: <div className="pt-821"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #18181b;
    background-image:
        repeating-linear-gradient(
            45deg,
            transparent,
            transparent 12px,
            rgba(255, 255, 255, 0.05) 12px,
            rgba(255, 255, 255, 0.05) 13px
        ),
        repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 12px,
            rgba(255, 255, 255, 0.035) 12px,
            rgba(255, 255, 255, 0.035) 13px
        );
    border-radius: 16px;
}`,
  },
  {
    id: 822,
    name: "Spotlight Pattern",
    preview: <div className="pt-822"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at center, rgba(129, 140, 248, 0.22), transparent 34%),
        radial-gradient(circle at center, rgba(129, 140, 248, 0.08), transparent 60%),
        #09090b;
    border-radius: 16px;
}`,
  },
  {
    id: 823,
    name: "Topographic Pattern",
    preview: <div className="pt-823"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #101827;
    background-image:
        radial-gradient(ellipse at 20% 30%, transparent 30%, rgba(99, 102, 241, 0.12) 31%, transparent 32%),
        radial-gradient(ellipse at 70% 60%, transparent 30%, rgba(99, 102, 241, 0.1) 31%, transparent 32%),
        radial-gradient(ellipse at 45% 90%, transparent 30%, rgba(99, 102, 241, 0.08) 31%, transparent 32%);
    background-size: 260px 180px, 320px 220px, 280px 200px;
    background-position: 0 0, 120px 60px, 60px 120px;
    border-radius: 16px;
}`,
  },
  {
    id: 824,
    name: "Sunburst Pattern",
    preview: <div className="pt-824"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        repeating-conic-gradient(
            from 0deg,
            #f59e0b 0deg 8deg,
            #fbbf24 8deg 16deg,
            #f59e0b 16deg 24deg
        );
    background-size: 500px 500px;
    background-position: center;
    border-radius: 16px;
}`,
  },
  {
    id: 825,
    name: "Carbon Fiber Pattern",
    preview: <div className="pt-825"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #111827;
    background-image:
        linear-gradient(135deg, #1f2937 25%, transparent 25%),
        linear-gradient(225deg, #1f2937 25%, transparent 25%),
        linear-gradient(45deg, #1f2937 25%, transparent 25%),
        linear-gradient(315deg, #1f2937 25%, #111827 25%);
    background-position:
        10px 0,
        10px 0,
        0 0,
        0 0;
    background-size: 20px 20px;
    border-radius: 16px;
}`,
  },
  {
    id: 826,
    name: "Circuit Pattern",
    preview: <div className="pt-826"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #06141f;
    background-image:
        linear-gradient(90deg, rgba(45, 212, 191, 0.12) 1px, transparent 1px),
        linear-gradient(rgba(45, 212, 191, 0.12) 1px, transparent 1px),
        radial-gradient(circle, rgba(45, 212, 191, 0.45) 2px, transparent 3px);
    background-size: 80px 80px, 80px 80px, 80px 80px;
    background-position: 0 0, 0 0, 40px 40px;
    border-radius: 16px;
}`,
  },
  {
    id: 827,
    name: "Luxury Pattern",
    preview: <div className="pt-827"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #17120a;
    background-image:
        radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.18), transparent 24%),
        repeating-linear-gradient(
            45deg,
            transparent 0,
            transparent 16px,
            rgba(251, 191, 36, 0.05) 16px,
            rgba(251, 191, 36, 0.05) 17px
        );
    border: 1px solid rgba(251, 191, 36, 0.12);
    border-radius: 16px;
}`,
  },
  {
    id: 828,
    name: "Pink Glow Pattern",
    preview: <div className="pt-828"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.35), transparent 30%),
        radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.3), transparent 26%),
        linear-gradient(135deg, #1f0a1c, #170d2d);
    border-radius: 16px;
}`,
  },
  {
    id: 829,
    name: "Minimal Lines Pattern",
    preview: <div className="pt-829"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #ffffff;
    background-image:
        linear-gradient(
            to right,
            rgba(24, 24, 27, 0.06) 1px,
            transparent 1px
        ),
        linear-gradient(
            to bottom,
            rgba(24, 24, 27, 0.06) 1px,
            transparent 1px
        );
    background-size: 72px 72px;
    border-radius: 16px;
}`,
  },
  {
    id: 830,
    name: "Cosmic Pattern",
    preview: <div className="pt-830"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #020617;
    background-image:
        radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0 1px, transparent 1.5px),
        radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.65) 0 1px, transparent 1.5px),
        radial-gradient(circle at 35% 75%, rgba(255, 255, 255, 0.7) 0 1px, transparent 1.5px),
        radial-gradient(circle at 65% 60%, rgba(255, 255, 255, 0.5) 0 1px, transparent 1.5px),
        radial-gradient(circle at 90% 85%, rgba(255, 255, 255, 0.75) 0 1px, transparent 1.5px),
        radial-gradient(circle at 50% 15%, rgba(96, 165, 250, 0.7) 0 2px, transparent 2.5px),
        radial-gradient(circle at 20% 85%, rgba(168, 85, 247, 0.6) 0 2px, transparent 2.5px),
        linear-gradient(135deg, #020617, #0f172a);
    background-size:
        220px 180px,
        260px 220px,
        300px 240px,
        240px 200px,
        280px 260px,
        360px 300px,
        400px 320px,
        100% 100%;
    border-radius: 16px;
}`,
  },
  {
    id: 831,
    name: "Crystal Glass Pattern",
    preview: <div className="pt-831"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 35%),
        linear-gradient(45deg, transparent 30%, rgba(125, 211, 252, 0.18) 50%, transparent 70%),
        linear-gradient(135deg, #0f172a, #172554);
    background-blend-mode: screen;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
}`,
  },
  {
    id: 832,
    name: "Ice Crystal Pattern",
    preview: <div className="pt-832"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #082f49;
    background-image:
        linear-gradient(30deg, transparent 48%, rgba(125, 211, 252, 0.18) 49%, transparent 51%),
        linear-gradient(150deg, transparent 48%, rgba(186, 230, 253, 0.14) 49%, transparent 51%),
        linear-gradient(90deg, transparent 48%, rgba(56, 189, 248, 0.12) 49%, transparent 51%);
    background-size: 90px 90px;
    border-radius: 16px;
}`,
  },
  {
    id: 833,
    name: "Light Blue Glow",
    preview: <div className="pt-833"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 20% 30%, rgba(125, 211, 252, 0.4), transparent 28%),
        radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.25), transparent 30%),
        radial-gradient(circle at 50% 100%, rgba(186, 230, 253, 0.18), transparent 35%),
        #071a2b;
    border-radius: 16px;
}`,
  },
  {
    id: 834,
    name: "Liquid Light Pattern",
    preview: <div className="pt-834"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(ellipse at 20% 30%, rgba(14, 165, 233, 0.28), transparent 40%),
        radial-gradient(ellipse at 80% 70%, rgba(96, 165, 250, 0.22), transparent 42%),
        radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.08), transparent 30%),
        linear-gradient(135deg, #020617, #0c4a6e);
    background-blend-mode: screen;
    border-radius: 16px;
}`,
  },
  {
    id: 835,
    name: "Prism Lines",
    preview: <div className="pt-835"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0f172a;
    background-image:
        linear-gradient(115deg, transparent 42%, rgba(96, 165, 250, 0.12) 43%, transparent 44%),
        linear-gradient(65deg, transparent 42%, rgba(167, 139, 250, 0.1) 43%, transparent 44%),
        linear-gradient(25deg, transparent 42%, rgba(125, 211, 252, 0.09) 43%, transparent 44%);
    background-size: 110px 110px;
    border-radius: 16px;
}`,
  },
  {
    id: 836,
    name: "Frosted Mesh",
    preview: <div className="pt-836"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 15% 20%, rgba(186, 230, 253, 0.2), transparent 25%),
        radial-gradient(circle at 75% 25%, rgba(125, 211, 252, 0.16), transparent 28%),
        radial-gradient(circle at 50% 80%, rgba(224, 242, 254, 0.1), transparent 30%),
        linear-gradient(135deg, #0f172a, #164e63);
    border: 1px solid rgba(186, 230, 253, 0.1);
    border-radius: 16px;
}`,
  },
  {
    id: 837,
    name: "Diamond Ice Pattern",
    preview: <div className="pt-837"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #07111f;
    background-image:
        linear-gradient(45deg, rgba(125, 211, 252, 0.1) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(125, 211, 252, 0.08) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(186, 230, 253, 0.08) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(186, 230, 253, 0.1) 75%);
    background-size: 70px 70px;
    background-position:
        0 0,
        0 35px,
        35px -35px,
        -35px 0;
    border-radius: 16px;
}`,
  },
  {
    id: 838,
    name: "Holographic Pattern",
    preview: <div className="pt-838"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        linear-gradient(
            120deg,
            rgba(56, 189, 248, 0.25),
            rgba(168, 85, 247, 0.2),
            rgba(236, 72, 153, 0.18),
            rgba(34, 211, 238, 0.2)
        ),
        linear-gradient(135deg, #111827, #1e1b4b);
    background-size: 200% 200%;
    background-blend-mode: screen;
    border-radius: 16px;
}`,
  },
  {
    id: 839,
    name: "Glass Shards",
    preview: <div className="pt-839"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        linear-gradient(125deg, transparent 35%, rgba(255, 255, 255, 0.08) 36%, transparent 38%),
        linear-gradient(55deg, transparent 45%, rgba(125, 211, 252, 0.12) 46%, transparent 49%),
        linear-gradient(145deg, transparent 55%, rgba(186, 230, 253, 0.08) 56%, transparent 59%),
        #0b1220;
    background-size: 180px 180px;
    border-radius: 16px;
}`,
  },
  {
    id: 840,
    name: "Blue Beam Pattern",
    preview: <div className="pt-840"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        linear-gradient(
            115deg,
            transparent 0 40%,
            rgba(56, 189, 248, 0.18) 45%,
            transparent 50%
        ),
        linear-gradient(
            75deg,
            transparent 0 55%,
            rgba(125, 211, 252, 0.12) 60%,
            transparent 65%
        ),
        #020617;
    border-radius: 16px;
}`,
  },
  {
    id: 841,
    name: "Soft Blue Grid",
    preview: <div className="pt-841"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #f8fcff;
    background-image:
        linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px);
    background-size: 48px 48px;
    border-radius: 16px;
}`,
  },
  {
    id: 842,
    name: "Crystal Bloom",
    preview: <div className="pt-842"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        conic-gradient(
            from 220deg at 50% 50%,
            transparent,
            rgba(125, 211, 252, 0.18),
            transparent 30%
        ),
        radial-gradient(circle at center, rgba(186, 230, 253, 0.16), transparent 42%),
        #08111f;
    background-size: 180px 180px, 100% 100%;
    border-radius: 16px;
}`,
  },
  {
    id: 843,
    name: "Icy Waves",
    preview: <div className="pt-843"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(
            ellipse at 50% 100%,
            transparent 0 38%,
            rgba(125, 211, 252, 0.18) 39% 40%,
            transparent 41%
        ),
        radial-gradient(
            ellipse at 50% 100%,
            transparent 0 50%,
            rgba(186, 230, 253, 0.12) 51% 52%,
            transparent 53%
        ),
        radial-gradient(
            ellipse at 50% 100%,
            transparent 0 62%,
            rgba(56, 189, 248, 0.08) 63% 64%,
            transparent 65%
        ),
        #071a2b;
    border-radius: 16px;
}`,
  },
  {
    id: 844,
    name: "Chrome Lines",
    preview: <div className="pt-844"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        repeating-linear-gradient(
            115deg,
            transparent 0,
            transparent 18px,
            rgba(255, 255, 255, 0.08) 19px,
            transparent 20px
        ),
        linear-gradient(135deg, #09090b, #27272a);
    border-radius: 16px;
}`,
  },
  {
    id: 845,
    name: "Light Prism Pattern",
    preview: <div className="pt-845"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        linear-gradient(
            120deg,
            rgba(186, 230, 253, 0.45),
            transparent 35%,
            rgba(191, 219, 254, 0.35) 55%,
            transparent 75%
        ),
        #f8fbff;
    background-size: 180% 180%;
    border: 1px solid rgba(125, 211, 252, 0.2);
    border-radius: 16px;
}`,
  },
  {
    id: 846,
    name: "Liquid Crystal Pattern",
    preview: <div className="pt-846"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(
            ellipse at 30% 25%,
            rgba(125, 211, 252, 0.3),
            transparent 28%
        ),
        radial-gradient(
            ellipse at 75% 60%,
            rgba(167, 139, 250, 0.2),
            transparent 30%
        ),
        linear-gradient(
            125deg,
            rgba(255, 255, 255, 0.06),
            transparent 35%,
            rgba(255, 255, 255, 0.04)
        ),
        #0b1120;
    border-radius: 16px;
}`,
  },
  {
    id: 847,
    name: "Frozen Dots",
    preview: <div className="pt-847"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #effaff;
    background-image:
        radial-gradient(circle, rgba(14, 165, 233, 0.2) 1px, transparent 1.5px);
    background-size: 20px 20px;
    box-shadow: inset 0 0 80px rgba(125, 211, 252, 0.08);
    border-radius: 16px;
}`,
  },
  {
    id: 848,
    name: "Aurora Glass",
    preview: <div className="pt-848"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.3), transparent 28%),
        radial-gradient(circle at 70% 20%, rgba(96, 165, 250, 0.28), transparent 25%),
        radial-gradient(circle at 80% 75%, rgba(167, 139, 250, 0.24), transparent 30%),
        radial-gradient(circle at 30% 80%, rgba(14, 165, 233, 0.2), transparent 26%),
        #07111f;
    background-blend-mode: screen;
    border: 1px solid rgba(186, 230, 253, 0.1);
    border-radius: 16px;
}`,
  },
  {
    id: 849,
    name: "Crystal Facets",
    preview: <div className="pt-849"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0f172a;
    background-image:
        linear-gradient(60deg, rgba(125, 211, 252, 0.08) 25%, transparent 25.5%),
        linear-gradient(120deg, rgba(186, 230, 253, 0.06) 25%, transparent 25.5%),
        linear-gradient(240deg, rgba(96, 165, 250, 0.07) 25%, transparent 25.5%),
        linear-gradient(300deg, rgba(167, 139, 250, 0.06) 25%, transparent 25.5%);
    background-size: 120px 120px;
    border-radius: 16px;
}`,
  },
  {
    id: 850,
    name: "Celestial Blue Pattern",
    preview: <div className="pt-850"></div>,
    html: `<div class="Pattern"></div>`,
    css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background:
        radial-gradient(circle at 15% 20%, rgba(186, 230, 253, 0.9) 0 1px, transparent 1.5px),
        radial-gradient(circle at 45% 65%, rgba(125, 211, 252, 0.7) 0 1px, transparent 1.5px),
        radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.8) 0 1px, transparent 1.5px),
        radial-gradient(circle at 85% 80%, rgba(96, 165, 250, 0.7) 0 2px, transparent 2.5px),
        radial-gradient(circle at 30% 85%, rgba(186, 230, 253, 0.7) 0 2px, transparent 2.5px),
        radial-gradient(circle at center, rgba(56, 189, 248, 0.12), transparent 45%),
        linear-gradient(135deg, #020617, #082f49);
    background-size:
        190px 160px,
        220px 190px,
        260px 210px,
        330px 270px,
        380px 310px,
        100% 100%,
        100% 100%;
    border-radius: 16px;
}`,
  },
];
