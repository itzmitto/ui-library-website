import "../pages/All.css";

export const buttons = [
  {
    id: 1,
    name: "Gradient Button",
    preview: <button className="prev-btn-gradient">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    padding: 10px 28px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: opacity 0.2s;
}
.Button:hover {
    opacity: 0.85;
}`,
  },
  {
    id: 2,
    name: "Outline Button",
    preview: <button className="prev-btn-outline">Hover me!</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button { 
    background: transparent;
    color: #a855f7;
    border: 2px solid #a855f7;
    padding: 10px 28px;
    border-radius: 999px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s; }
.Button:hover {
        background: rgba(168, 85, 247, 0.1);

}`,
  },
  {
    id: 3,
    name: "Pill Button",
    preview: <button className="prev-btn-pill">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
    background: transparent;
    color: #2dd4bf;
    border: 2px solid #2dd4bf;
    padding: 10px 28px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
}
.Button:hover {
        background: rgba(45, 212, 191, 0.1);
}`,
  },
  {
    id: 4,
    name: "Ghost Button",
    preview: <button className="prev-btn-ghost">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
   background: rgba(255, 255, 255, 0.05);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 10px 28px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
}
.Button:hover {
        background: rgba(255, 255, 255, 0.1);
}`,
  },
  {
    id: 13,
    name: "Button1",
    preview: <button className="Button1">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    background: dodgerblue;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}
.Button:hover {
    background: linear-gradient(90deg, rgba(30, 144, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);
}`,
  },
  {
    id: 14,
    name: "Button2",
    preview: <button className="Button2">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
    width: 150px;
    height: 60px;
    border: 3px solid #315cfd;
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    color: #315cfd;
    font-size: 1.2em;
    font-weight: 550;
}
.Button:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
}`,
  },
  {
    id: 15,
    name: "Button3",
    preview: <button className="Button3">Get started</button>,
    html: `<button class="Button">Get started</button>`,
    css: `.Button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #451c8b;
    transition: 0.1s;
}
.Button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2%);
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
}
.Button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2%);
    transition: 0.5s;
}`,
  },
  {
    id: 16,
    name: "3D Flip Button",
    preview: (
      <button className="Button16">
        <a>Hover me</a>
      </button>
    ),
    html: `<button class="Button">Hover me</button>`,
    css: `.Button {
    background: transparent;
    color: #fff;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 20px 30px;
    cursor: pointer;
    perspective: 30rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);
    position: relative;
}
.Button::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: linear-gradient(320deg, rgba(0, 140, 255, 0.678), rgba(128, 0, 128, 0.308));
    z-index: 1;
    transition: background 3s;
}
.Button:hover::before {
    animation: rotate 1s;
    transition: all 0.5s;
}
@keyframes rotate {
    0% { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
}`,
  },
  {
    id: 17,
    name: "Rainbow Border",
    preview: (
      <button className="Button17">
        <a>Hover me</a>
      </button>
    ),
    html: `<button class="Button">Hover me</button>`,
    css: `.Button {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    padding: 1em 2em;
    border: 0;
    background-color: #212121;
    font-family: "Roboto", Arial, "Segoe UI", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    z-index: 2;
}
.Button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(#488cfb, #29dbbc, #ddf505, #ff9f0e, #e440bb, #655adc, #488cfb);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
}
.Button:hover::after {
    animation-play-state: running;
}
@keyframes rotate-hue {
    to { filter: hue-rotate(1turn); }
}
.Button, .Button::after {
    box-sizing: border-box;
}
.Button:active {
    --border-width: 5px;
}`,
  },
  {
    id: 18,
    name: "Glow Button",
    preview: (
      <button className="Button18">
        <a>Hover me</a>
      </button>
    ),
    html: `<button class="Button">Hover me</button>`,
    css: `.Button {
    --glow-color: rgb(217, 176, 255);
    --glow-spread-color: rgba(191, 123, 255, 0.781);
    --enhanced-glow-color: rgb(231, 206, 255);
    --btn-color: rgb(100, 61, 136);
    border: .25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 1em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
    text-shadow: 0 0 .5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
}
.Button::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: .7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}
.Button:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em .25em var(--glow-color),
        0 0 4em 2em var(--glow-spread-color),
        inset 0 0 .75em .25em var(--glow-color);
}
.Button:active {
    box-shadow: 0 0 0.6em .25em var(--glow-color),
        0 0 2.5em 2em var(--glow-spread-color),
        inset 0 0 .5em .25em var(--glow-color);
}`,
  },
  {
    id: 19,
    name: "Gradient Glow",
    preview: (
      <button className="Button19">
        <a>Hover me</a>
      </button>
    ),
    html: `<button class="Button">Hover me</button>`,
    css: `.Button {
    position: relative;
    width: 120px;
    height: 40px;
    background-color: #000;
    display: flex;
    isolation: isolate;
    align-items: center;
    color: white;
    flex-direction: column;
    justify-content: center;
    border: none;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
}
.Button::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    width: 128px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.Button::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
}
.Button:hover::after {
    filter: blur(30px);
}
.Button:hover::before {
    transform: rotate(-180deg);
}
.Button:active::before {
    scale: 0.7;
}`,
  },
  {
    id: 20,
    name: "Gold Button",
    preview: <button className="Button20"></button>,
    html: `<button class="Button">Button</button>`,
    css: `.Button {
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right, #77530a, #ffd277, #77530a, #77530a, #ffd277, #77530a);
    background-size: 250%;
    background-position: left;
    color: #ffd277;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
}
.Button::before {
    position: absolute;
    content: "Button";
    color: #ffd277;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
}
.Button:hover {
    background-position: right;
    transition-duration: 1s;
}
.Button:hover::before {
    background-position: right;
    transition-duration: 1s;
}
.Button:active {
    transform: scale(0.95);
}`,
  },
  {
    id: 62,
    name: "Button",
    preview: <button className="Button62">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    border: 2px solid #00e5ff;
    background: transparent;
    color: #00e5ff;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: .3s;
    animation: btn-pulse 2s infinite;
}
.Button:hover {
    background: #00e5ff;
    color: #000;
    box-shadow: 0 0 30px #00e5ff;
}
@keyframes btn-pulse {
    0%, 100% { box-shadow: 0 0 8px #00e5ff; }
    50% { box-shadow: 0 0 20px #00e5ff; }
}`,
  },
  {
    id: 63,
    name: "Button",
    preview: <button className="Button63">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: rgba(255, 255, 255, 0.1);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    color: white;
    font-size: 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: .3s;
}
.Button:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}`,
  },
  {
    id: 64,
    name: "Button",
    preview: <button className="Button64">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #e0e5ec;
    border: none;
    color: #6c63ff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 5px 10px #b8bec7, -5px -5px 10px #ffffff;
    transition: .2s;
}
.Button:active {
    box-shadow: inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff;
}`,
  },
  {
    id: 65,
    name: "Button",
    preview: <button className="Button65">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #f0e614;
    border: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 4px 4px 0px #000;
    transition: .1s;
}
.Button:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000;
}
.Button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
}`,
  },
  {
    id: 66,
    name: "Button",
    preview: <button className="Button66">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #1a1a1a;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: .3s;
    z-index: 0;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translateX(-100%);
    transition: .3s;
    z-index: -1;
}
.Button:hover::before {
    transform: translateX(0);
}`,
  },
  {
    id: 67,
    name: "Button",
    preview: <button className="Button67">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: .3s;
}
.Button::before,
.Button::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: #fff;
    transition: .3s;
}
.Button::before {
    top: 0;
    left: 0;
}
.Button::after {
    bottom: 0;
    right: 0;
}
.Button:hover::before,
.Button:hover::after {
    width: 100%;
}
.Button:hover {
    box-shadow: inset 0 0 0 1px white;
}`,
  },
  {
    id: 68,
    name: "Button",
    preview: <button className="Button68">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #f0e614;
    border: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
    transition: .2s;
    position: relative;
}
.Button::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #000;
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
    z-index: -1;
}
.Button:hover {
    background: #fff;
    box-shadow: 0 0 15px #f0e614;
}`,
  },
  {
    id: 69,
    name: "Button",
    preview: <button className="Button69">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 50px;
    cursor: pointer;
    transition: .3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
.Button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
}
.Button:active {
    transform: scale(0.95);
}`,
  },
  {
    id: 70,
    name: "Button",
    preview: <button className="Button70">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
}
.Button:hover {
    box-shadow: 0 6px 30px rgba(249, 115, 22, 0.7);
    transform: translateY(-2px);
}
.Button:active {
    transform: translateY(0);
}`,
  },
  {
    id: 71,
    name: "Button",
    preview: <button className="Button71">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #a8edea, #86c5f7);
    border: none;
    color: #0e3a5e;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 4px 15px rgba(134, 197, 247, 0.4);
}
.Button:hover {
    background: linear-gradient(135deg, #86c5f7, #a8edea);
    box-shadow: 0 6px 25px rgba(134, 197, 247, 0.6);
    transform: translateY(-2px);
}`,
  },
  {
    id: 72,
    name: "Button",
    preview: <button className="Button72">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #ef4444;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: .2s;
}
.Button:hover {
    animation: btn-shake 0.4s ease;
}
@keyframes btn-shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
}`,
  },
  {
    id: 73,
    name: "Button",
    preview: <button className="Button73">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #10b981;
    color: #10b981;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color .3s;
    z-index: 0;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #10b981;
    transform: scaleX(0);
    transform-origin: left;
    transition: .3s;
    z-index: -1;
}
.Button:hover {
    color: white;
}
.Button:hover::before {
    transform: scaleX(1);
}`,
  },
  {
    id: 74,
    name: "Button",
    preview: <button className="Button74">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #8b5cf6;
    color: #8b5cf6;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
}
.Button:hover {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(139, 92, 246, 0.1);
    color: white;
    border-color: #a78bfa;
}`,
  },
  {
    id: 75,
    name: "Button",
    preview: <button className="Button75">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #111;
    border: 1px solid #333;
    color: #f9fafb;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
}
.Button:hover {
    background: #222;
    border-color: #555;
    transform: translateY(-1px);
}
.Button:active {
    transform: translateY(0);
}`,
  },
  {
    id: 76,
    name: "Button",
    preview: <button className="Button76">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #fce7f3;
    border: 2px solid #f9a8d4;
    color: #be185d;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: .3s;
}
.Button:hover {
    background: #fdf2f8;
    border-color: #ec4899;
    box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
    transform: translateY(-2px);
}`,
  },
  {
    id: 77,
    name: "Button",
    preview: <button className="Button77">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #635bff;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    box-shadow: 0 2px 8px rgba(99, 91, 255, 0.4);
}
.Button:hover {
    background: #5248e8;
    box-shadow: 0 4px 16px rgba(99, 91, 255, 0.5);
    transform: translateY(-1px);
}
.Button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(99, 91, 255, 0.4);
}`,
  },
  {
    id: 78,
    name: "Button",
    preview: <button className="Button78">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #f59e0b;
    color: #f59e0b;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color .3s;
    z-index: 0;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #f59e0b;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: .3s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: -1;
}
.Button:hover {
    color: white;
}
.Button:hover::before {
    transform: scaleY(1);
}`,
  },
  {
    id: 79,
    name: "Button",
    preview: <button className="Button79">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899);
    background-size: 200% 200%;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    animation: btn-aurora 3s ease infinite;
    transition: .3s;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(139, 92, 246, 0.5);
}
@keyframes btn-aurora {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 80,
    name: "Button",
    preview: <button className="Button80">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #1a1a1a;
    border: none;
    color: #fff;
    font-size: 16px;
    font-family: monospace;
    cursor: pointer;
    position: relative;
    image-rendering: pixelated;
    box-shadow:
        0 -4px 0 0 #fff,
        0 4px 0 0 #fff,
        -4px 0 0 0 #fff,
        4px 0 0 0 #fff;
    transition: .1s;
}
.Button:hover {
    background: #fff;
    color: #000;
}
.Button:active {
    transform: scale(0.95);
}`,
  },
  {
    id: 81,
    name: "Button",
    preview: <button className="Button81">Click me</button>,
    html: `<button class="Button"><span>Click me</span></button>`,
    css: `.Button {
    padding: 0;
    background: #6366f1;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    height: 46px;
    min-width: 120px;
}
.Button span {
    display: block;
    padding: 12px 28px;
    transition: .3s;
    position: relative;
}
.Button::before {
    content: "↑ Go";
    position: absolute;
    width: 100%;
    text-align: center;
    top: 100%;
    left: 0;
    padding: 12px 0;
    transition: .3s;
    background: #4f46e5;
}
.Button:hover span {
    transform: translateY(-100%);
}
.Button:hover::before {
    top: 0;
}`,
  },
  {
    id: 82,
    name: "Button",
    preview: <button className="Button82">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #e879f9, #a855f7);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
}
.Button:hover {
    background: linear-gradient(135deg, #a855f7, #e879f9);
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(168, 85, 247, 0.6);
}`,
  },
  {
    id: 83,
    name: "Button",
    preview: <button className="Button83">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: white;
    border: 2px solid #000;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 4px 4px 0 #000;
    transition: .15s;
}
.Button:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #000;
}
.Button:active {
    transform: translate(4px, 4px);
    box-shadow: none;
}`,
  },
  {
    id: 84,
    name: "Button",
    preview: <button className="Button84">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: 2px solid #22c55e;
    color: #22c55e;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
    font-family: monospace;
}
.Button:hover {
    background: rgba(34, 197, 94, 0.1);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), inset 0 0 20px rgba(34, 197, 94, 0.05);
    color: #4ade80;
}`,
  },
  {
    id: 85,
    name: "Button",
    preview: <button className="Button85">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #f472b6, #fb923c);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4);
}
.Button:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 25px rgba(244, 114, 182, 0.5);
}
.Button:active {
    transform: scale(0.97);
}`,
  },
  {
    id: 86,
    name: "Button",
    preview: <button className="Button86">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: .3s;
    border-radius: 0;
}
.Button:hover {
    border-bottom-color: #6366f1;
    color: #6366f1;
    transform: translateY(-2px);
}`,
  },
  {
    id: 87,
    name: "Button",
    preview: <button className="Button87">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: linear-gradient(135deg, #f093fb, #f5576c, #4facfe, #00f2fe);
    background-size: 300% 300%;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    animation: btn-holo 4s ease infinite;
    transition: .3s;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(240, 147, 251, 0.5);
}
@keyframes btn-holo {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 88,
    name: "Button",
    preview: <button className="Button88">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #6366f1;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: .3s;
}
.Button::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width .5s, height .5s, opacity .5s;
    opacity: 0;
}
.Button:active::after {
    width: 200px;
    height: 200px;
    opacity: 0;
}
.Button:hover {
    background: #4f46e5;
}`,
  },
  {
    id: 89,
    name: "Button",
    preview: <button className="Button89">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #0d0d0d;
    border: 2px solid #ff2d78;
    color: #ff2d78;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.Button:hover {
    background: #ff2d78;
    color: white;
    box-shadow: 0 0 20px rgba(255, 45, 120, 0.6), inset 0 0 20px rgba(255, 45, 120, 0.1);
}`,
  },
  {
    id: 90,
    name: "Button",
    preview: <button className="Button90">Click me</button>,
    html: `<button class="Button">Click me</button>`,
    css: `.Button {
    padding: 12px 28px;
    background: #7c3aed;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    animation: btn-glow 2s ease-in-out infinite;
    transition: .3s;
}
.Button:hover {
    transform: scale(1.05);
}
@keyframes btn-glow {
    0%, 100% { box-shadow: 0 0 10px rgba(124, 58, 237, 0.5); }
    50% { box-shadow: 0 0 30px rgba(124, 58, 237, 0.9), 0 0 50px rgba(124, 58, 237, 0.4); }
}`,
  },
  {
    id: 91,
    name: "Button",
    preview: (
      <button className="Button91">
        <span>Click me</span>
      </button>
    ),
    html: `<button class="Button"><span>Click me</span></button>`,
    css: `.Button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 17px;
    border-radius: 500px;
    overflow: hidden;
    background: #66ff66;
    color: ghostwhite;
}
.Button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
}
.Button:hover span {
    color: black;
}
.Button::before,
.Button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.Button::before {
    content: "";
    background: black;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}
.Button:hover::before {
    transform: translate3d(100%, 0, 0);
}`,
  },
  {
    id: 92,
    name: "Button",
    preview: <button className="Button92">Click me</button>,
    html: `<button class="Button"><span>Click me</span></button>`,
    css: `.Button {
    position: relative;
    padding: 12px 32px;
    background: #09090b;
    color: #fff;
    border: none;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s;
}
.Button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10%;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    transform: skewX(-20deg);
    transition: width 0.4s ease;
    z-index: 0;
}
.Button:hover::before {
    width: 120%;
}
.Button:hover {
    color: #fff;
}
.Button span {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 93,
    name: "Button",
    preview: <button className="Button93">Click me</button>,
    html: `<button class="Button"><span>Click me</span></button>`,
    css: `.Button {
    position: relative;
    padding: 12px 32px;
    background: transparent;
    color: #fff;
    border: 2px solid #7c3aed;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s, border-color 0.3s;
    transform: perspective(200px) rotateX(6deg);
    transform-origin: bottom center;
}
.Button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    transition: left 0.4s ease;
    z-index: 0;
}
.Button:hover::before {
    left: 0%;
}
.Button:hover {
    border-color: #a855f7;
}
.Button span {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 94,
    name: "Button",
    preview: (
      <button className="Button94">
        <span>Click me</span>
      </button>
    ),
    html: `<button class="Button"><span>Click me</span></button>`,
    css: `.Button {
    position: relative;
    padding: 12px 32px;
    background: transparent;
    color: #fff;
    border: 2px solid #6366f1;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s;
}
.Button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #6366f1;
    transition: left 0.35s ease;
    z-index: 0;
}
.Button:hover::before {
    left: 0%;
}
.Button span {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 95,
    name: "Button",
    preview: (
      <button className="Button95">
        <span>Click me →</span>
      </button>
    ),
    html: `<button class="Button"><span>Click me →</span></button>`,
    css: `.Button {
    position: relative;
    padding: 12px 32px;
    background: #6366f1;
    color: #fff;
    border: none;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.Button:hover {
    transform: translateX(8px);
    box-shadow: -8px 0 0 #a855f7;
}
.Button span {  
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 96,
    name: "Button",
    preview: (
      <button className="Button96">
        <span>Click me →</span>
      </button>
    ),
    html: `<button class="Button"><span>Click me →</span></button>`,
    css: `.Button {
    background: blue;
    transition: transform .5s;
    padding: 15px;
    border: none;
    border-radius: 10px;
}
.Button:hover {
    transform: skew(-30deg);
}
.Button span {
    display: inline-block;
    transition: transform .5s;
}
.Button:hover span {
    transform: skew(30deg);
}`,
  },
  {
    id: 892,
    name: "Claude Secondary Button",
    preview: <button className="btn-892">Learn more</button>,
    html: `<button class="Button">
    Learn more
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border: 1px solid #E3DED3;
    border-radius: 10px;
    background: #E3DED3;
    color: #2D2A26;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: #D8D2C3;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 893,
    name: "Claude Outline Button",
    preview: (
      <button className="btn-893">
        View details
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    ),
    html: `<button class="Button">
    View details
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #E3DED3;
    border-radius: 10px;
    background: transparent;
    color: #2D2A26;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    border-color: #5A564F;
    background: rgba(0, 0, 0, 0.02);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 894,
    name: "Claude Ghost Button",
    preview: (
      <button className="btn-894">
        <i className="fa-solid fa-plus"></i>
        Add component
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-plus"></i>
    Add component
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 10px 14px;
    border: 1px solid transparent;
    border-radius: 9px;
    background: transparent;
    color: #5A564F;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #2D2A26;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 895,
    name: "Claude Danger Button",
    preview: (
      <button className="btn-895">
        <i className="fa-solid fa-trash"></i>
        Delete conversation
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-trash"></i>
    Delete conversation
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid rgba(193, 68, 60, 0.3);
    border-radius: 10px;
    background: transparent;
    color: #C1443C;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: rgba(193, 68, 60, 0.08);
    border-color: #C1443C;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 896,
    name: "Claude Dark Button",
    preview: (
      <button className="btn-896">
        Continue
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Continue
    <i class="fa-solid fa-chevron-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #2D2A26;
    border-radius: 10px;
    background: #2D2A26;
    color: #F4F1EA;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: #46423B;
    border-color: #46423B;
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 897,
    name: "Claude Pill Button",
    preview: (
      <button className="btn-897">
        <i className="fa-solid fa-plus"></i>
        New chat
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-plus"></i>
    New chat
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 10px 19px;
    border: 1px solid #E3DED3;
    border-radius: 999px;
    background: #FFFFFF;
    color: #2D2A26;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    border-color: #D97757;
    color: #C15F3C;
    box-shadow: 0 3px 10px rgba(45, 42, 38, 0.08);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 898,
    name: "Claude Icon Button",
    preview: (
      <button className="btn-898" aria-label="Copy">
        <i className="fa-regular fa-copy"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Copy">
    <i class="fa-regular fa-copy"></i>
</button>`,
    css: `.Button {
    width: 40px;
    height: 40px;
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 1px solid #E3DED3;
    border-radius: 9px;
    background: transparent;
    color: #5A564F;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #2D2A26;
}
.Button i {
    font-size: 14px;
}`,
  },
  {
    id: 899,
    name: "Claude Loading Button",
    preview: (
      <button className="btn-899" disabled>
        <span className="btn-899__spinner"></span>
        Sending...
      </button>
    ),
    html: `<button class="Button" disabled>
    <span class="Button-spinner"></span>
    Sending...
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #C15F3C;
    border-radius: 10px;
    background: #D97757;
    color: #FFFFFF;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: not-allowed;
    opacity: 0.75;
}
.Button-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 900,
    name: "Claude Disabled Button",
    preview: (
      <button className="btn-900" disabled>
        Continue
      </button>
    ),
    html: `<button class="Button" disabled>
    Continue
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border: 1px solid #E3DED3;
    border-radius: 10px;
    background: #E3DED3;
    color: #A7A192;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: not-allowed;
    opacity: 0.8;
}`,
  },
  {
    id: 901,
    name: "Success Button",
    preview: (
      <button className="btn-901">
        <i className="fa-solid fa-check"></i>
        Saved
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check"></i>
    Saved
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 10px 16px;
    border: 1px solid #16A34A;
    border-radius: 10px;
    background: #16A34A;
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #15803D;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 902,
    name: "Warning Button",
    preview: (
      <button className="btn-902">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Review
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Review
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 16px;
    border: 1px solid #D97706;
    border-radius: 10px;
    background: #F59E0B;
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #D97706;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 903,
    name: "Info Button",
    preview: (
      <button className="btn-903">
        <i className="fa-solid fa-circle-info"></i>
        Learn more
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-circle-info"></i>
    Learn more
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 16px;
    border: 1px solid #93C5FD;
    border-radius: 10px;
    background: #EFF6FF;
    color: #1D4ED8;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #DBEAFE;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 904,
    name: "Rounded Arrow Button",
    preview: (
      <button className="btn-904">
        Explore
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Explore
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 18px;
    border: none;
    border-radius: 999px;
    background: #2D2A26;
    color: #F4F1EA;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    gap: 13px;
    background: #46423B;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 905,
    name: "Soft Purple Button",
    preview: (
      <button className="btn-905">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        Generate
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Generate
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #DDD6FE;
    border-radius: 10px;
    background: #F5F3FF;
    color: #6D28D9;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #EDE9FE;
    border-color: #C4B5FD;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 906,
    name: "Outline Success Button",
    preview: (
      <button className="btn-906">
        <i className="fa-solid fa-check-double"></i>
        Approve
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check-double"></i>
    Approve
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 17px;
    border: 1px solid #22C55E;
    border-radius: 10px;
    background: transparent;
    color: #15803D;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #F0FDF4;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 907,
    name: "Circle Arrow Button",
    preview: (
      <button className="btn-907">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Go up">
    <i class="fa-solid fa-arrow-up"></i>
</button>`,
    css: `.Button {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid #E3DED3;
    border-radius: 50%;
    background: #FFFFFF;
    color: #2D2A26;
    cursor: pointer;
}
.Button:hover {
    background: #2D2A26;
    color: #FFFFFF;
    transform: translateY(-2px);
}
.Button i {
    font-size: 13px;
}`,
  },
  {
    id: 908,
    name: "Download Button",
    preview: (
      <button className="btn-908">
        <i className="fa-solid fa-download"></i>
        Download
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-download"></i>
    Download
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #fff;
    color: #3F3F46;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    border-color: #A1A1AA;
    background: #FAFAFA;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 909,
    name: "Upload Button",
    preview: (
      <button className="btn-909">
        <i className="fa-solid fa-upload"></i>
        Upload file
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-upload"></i>
    Upload file
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px dashed #A1A1AA;
    border-radius: 10px;
    background: #FAFAFA;
    color: #52525B;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    border-color: #71717A;
    background: #F4F4F5;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 910,
    name: "Add Button",
    preview: (
      <button className="btn-910">
        <i className="fa-solid fa-plus"></i>
        Add item
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-plus"></i>
    Add item
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #fff;
    color: #18181B;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    border-color: #A1A1AA;
    box-shadow: 0 3px 8px rgba(0,0,0,.07);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 911,
    name: "Minus Button",
    preview: (
      <button className="btn-911">
        <i className="fa-solid fa-minus"></i>
        Remove
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-minus"></i>
    Remove
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #52525B;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #FAFAFA;
    color: #18181B;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 912,
    name: "Search Button",
    preview: (
      <button className="btn-912">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-magnifying-glass"></i>
    Search
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #E4E4E7;
    border-radius: 10px;
    background: #FAFAFA;
    color: #3F3F46;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
}
.Button:hover {
    background: #F4F4F5;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 913,
    name: "Menu Button",
    preview: (
      <button className="btn-913">
        <i className="fa-solid fa-bars"></i>
        Menu
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bars"></i>
    Menu
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: none;
    border-radius: 9px;
    background: #F4F1EA;
    color: #2D2A26;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #E8E2D7;
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 914,
    name: "Share Button",
    preview: (
      <button className="btn-914">
        <i className="fa-solid fa-share-nodes"></i>
        Share
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-share-nodes"></i>
    Share
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #E4E4E7;
    border-radius: 999px;
    background: #fff;
    color: #3F3F46;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    border-color: #A1A1AA;
    color: #18181B;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 915,
    name: "Bookmark Button",
    preview: (
      <button className="btn-915">
        <i className="fa-regular fa-bookmark"></i>
        Save
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-bookmark"></i>
    Save
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #52525B;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    color: #D97757;
    border-color: #D97757;
    background: #FFF7F3;
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 916,
    name: "Favorite Button",
    preview: (
      <button className="btn-916">
        <i className="fa-regular fa-heart"></i>
        Favorite
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-heart"></i>
    Favorite
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 15px;
    border: 1px solid #FBCFE8;
    border-radius: 10px;
    background: #FFF1F2;
    color: #BE185D;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #FCE7F3;
    border-color: #F9A8D4;
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 917,
    name: "Play Button",
    preview: (
      <button className="btn-917">
        <span className="btn-917__icon">
          <i className="fa-solid fa-play"></i>
        </span>
        Watch demo
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-icon">
        <i class="fa-solid fa-play"></i>
    </span>
    Watch demo
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 13px 6px 7px;
    border: 1px solid #E4E4E7;
    border-radius: 999px;
    background: #fff;
    color: #2D2A26;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button-icon {
    width: 29px;
    height: 29px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #2D2A26;
    color: #fff;
}
.Button-icon i {
    margin-left: 2px;
    font-size: 9px;
}
.Button:hover {
    border-color: #A1A1AA;
    box-shadow: 0 3px 10px rgba(0,0,0,.07);
}`,
  },
  {
    id: 918,
    name: "Login Button",
    preview: (
      <button className="btn-918">
        <i className="fa-solid fa-arrow-right-to-bracket"></i>
        Sign in
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-right-to-bracket"></i>
    Sign in
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #2D2A26;
    border-radius: 9px;
    background: #2D2A26;
    color: #F4F1EA;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #46423B;
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 919,
    name: "Logout Button",
    preview: (
      <button className="btn-919">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Sign out
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
    Sign out
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #52525B;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    color: #C1443C;
    border-color: #FECACA;
    background: #FEF2F2;
}`,
  },
  {
    id: 920,
    name: "Gradient CTA Button",
    preview: (
      <button className="btn-920">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Get started
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 19px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #D97757, #B45309);
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 5px 18px rgba(217,119,87,.24);
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(217,119,87,.3);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 921,
    name: "Blue Gradient Button",
    preview: (
      <button className="btn-921">
        Launch project
        <i className="fa-solid fa-rocket"></i>
      </button>
    ),
    html: `<button class="Button">
    Launch project
    <i class="fa-solid fa-rocket"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #2563EB, #06B6D4);
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 922,
    name: "Purple Gradient Button",
    preview: (
      <button className="btn-922">
        Create with AI
        <i className="fa-solid fa-sparkles"></i>
      </button>
    ),
    html: `<button class="Button">
    Create with AI
    <i class="fa-solid fa-sparkles"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #7C3AED, #C026D3);
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    filter: brightness(1.08);
    box-shadow: 0 7px 20px rgba(124,58,237,.25);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 923,
    name: "Glow Button",
    preview: (
      <button className="btn-923">
        <i className="fa-solid fa-bolt"></i>
        Activate
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Activate
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #38BDF8;
    border-radius: 10px;
    background: #082F49;
    color: #7DD3FC;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 16px rgba(56,189,248,.15);
}
.Button:hover {
    background: #0C4A6E;
    box-shadow: 0 0 25px rgba(56,189,248,.35);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 924,
    name: "Glass Button",
    preview: (
      <button className="btn-924">
        <i className="fa-solid fa-layer-group"></i>
        Continue
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-layer-group"></i>
    Continue
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 10px;
    background: rgba(255,255,255,.12);
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(12px);
}
.Button:hover {
    background: rgba(255,255,255,.22);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 925,
    name: "Glass Outline Button",
    preview: <button className="btn-925">Explore</button>,
    html: `<button class="Button">
    Explore
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 19px;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 999px;
    background: rgba(255,255,255,.06);
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(10px);
}
.Button:hover {
    background: rgba(255,255,255,.15);
}`,
  },
  {
    id: 926,
    name: "3D Clay Button",
    preview: <button className="btn-926">Buy now</button>,
    html: `<button class="Button">
    Buy now
</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 9px;
    background: #D97757;
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 5px 0 #A6573A;
}
.Button:hover {
    filter: brightness(1.05);
}
.Button:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #A6573A;
}`,
  },
  {
    id: 927,
    name: "3D Blue Button",
    preview: <button className="btn-927">Start now</button>,
    html: `<button class="Button">
    Start now
</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 9px;
    background: #3B82F6;
    color: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 5px 0 #1D4ED8;
}
.Button:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #1D4ED8;
}`,
  },
  {
    id: 928,
    name: "Neumorphic Button",
    preview: <button className="btn-928">Play</button>,
    html: `<button class="Button">
    Play
</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 11px;
    background: #E6E2D8;
    color: #2D2A26;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 6px 6px 12px rgba(163,157,140,.5), -6px -6px 12px rgba(255,255,255,.8);
}
.Button:hover {
    box-shadow: 4px 4px 8px rgba(163,157,140,.5), -4px -4px 8px rgba(255,255,255,.8);
}`,
  },
  {
    id: 929,
    name: "Neumorphic Pressed",
    preview: <button className="btn-929">Selected</button>,
    html: `<button class="Button">
    Selected
</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 11px;
    background: #E6E2D8;
    color: #C15F3C;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: inset 4px 4px 8px rgba(163,157,140,.5), inset -4px -4px 8px rgba(255,255,255,.8);
}`,
  },
  {
    id: 930,
    name: "Badge Button",
    preview: (
      <button className="btn-930">
        Notifications
        <span>4</span>
      </button>
    ),
    html: `<button class="Button">
    Notifications
    <span>4</span>
</button>`,
    css: `.Button {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 10px 17px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #3F3F46;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button span {
    position: absolute;
    top: -7px;
    right: -7px;
    width: 19px;
    height: 19px;
    display: grid;
    place-items: center;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #D97757;
    color: #fff;
    font-size: 9px;
    font-weight: 800;
}
.Button:hover {
    border-color: #D97757;
}`,
  },
  {
    id: 931,
    name: "Split Button",
    preview: (
      <div className="btn-931">
        <button>Deploy</button>
        <button aria-label="More options">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    ),
    html: `<div class="ButtonGroup">
    <button>Deploy</button>
    <button aria-label="More options">
        <i class="fa-solid fa-chevron-down"></i>
    </button>
</div>`,
    css: `.ButtonGroup {
    display: inline-flex;
    overflow: hidden;
    border-radius: 9px;
}
.ButtonGroup button {
    height: 40px;
    border: none;
    background: #2D2A26;
    color: #F4F1EA;
    padding: 0 15px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.ButtonGroup button + button {
    width: 38px;
    padding: 0;
    border-left: 1px solid rgba(255,255,255,.2);
}
.ButtonGroup button:hover {
    background: #46423B;
}
.ButtonGroup i {
    font-size: 9px;
}`,
  },
  {
    id: 932,
    name: "Wide Action Button",
    preview: (
      <button className="btn-932">
        <span>
          <i className="fa-solid fa-rocket"></i>
          Launch workspace
        </span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    <span>
        <i class="fa-solid fa-rocket"></i>
        Launch workspace
    </span>
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    border: 1px solid #E4E4E7;
    border-radius: 11px;
    background: #fff;
    color: #18181B;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button > span {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Button > span i {
    color: #D97757;
}
.Button > i {
    color: #A1A1AA;
}
.Button:hover {
    border-color: #D97757;
    box-shadow: 0 4px 12px rgba(45,42,38,.08);
}`,
  },
  {
    id: 933,
    name: "Compact Icon Button",
    preview: (
      <button className="btn-933" aria-label="Settings">
        <i className="fa-solid fa-gear"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Settings">
    <i class="fa-solid fa-gear"></i>
</button>`,
    css: `.Button {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #E4E4E7;
    border-radius: 8px;
    background: #fff;
    color: #71717A;
    cursor: pointer;
}
.Button:hover {
    background: #F4F4F5;
    color: #18181B;
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 934,
    name: "Floating Action Button",
    preview: (
      <button className="btn-934" aria-label="Create">
        <i className="fa-solid fa-plus"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Create">
    <i class="fa-solid fa-plus"></i>
</button>`,
    css: `.Button {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: #D97757;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(217,119,87,.28);
}
.Button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(217,119,87,.35);
}
.Button i {
    font-size: 17px;
}`,
  },
  {
    id: 935,
    name: "Social GitHub Button",
    preview: (
      <button className="btn-935">
        <i className="fa-brands fa-github"></i>
        Continue with GitHub
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-brands fa-github"></i>
    Continue with GitHub
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 10px 18px;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #fff;
    color: #18181B;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #F4F4F5;
}
.Button i {
    font-size: 15px;
}`,
  },
  {
    id: 936,
    name: "Social Google Button",
    preview: (
      <button className="btn-936">
        <i className="fa-brands fa-google"></i>
        Continue with Google
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-brands fa-google"></i>
    Continue with Google
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 10px 18px;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #fff;
    color: #18181B;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #FAFAFA;
    box-shadow: 0 3px 10px rgba(0,0,0,.06);
}
.Button i {
    font-size: 14px;
}`,
  },
  {
    id: 937,
    name: "Filter Button",
    preview: (
      <button className="btn-937">
        <i className="fa-solid fa-sliders"></i>
        Filters
        <span>2</span>
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-sliders"></i>
    Filters
    <span>2</span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #52525B;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.Button span {
    min-width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #2D2A26;
    color: #fff;
    font-size: 8px;
}
.Button:hover {
    border-color: #A1A1AA;
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 938,
    name: "Expand Button",
    preview: (
      <button className="btn-938">
        Expand
        <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
      </button>
    ),
    html: `<button class="Button">
    Expand
    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: #F4F4F5;
    color: #52525B;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #E4E4E7;
    color: #18181B;
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 939,
    name: "Copy Code Button",
    preview: (
      <button className="btn-939">
        <i className="fa-regular fa-copy"></i>
        Copy code
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-copy"></i>
    Copy code
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    border: 1px solid #30363D;
    border-radius: 7px;
    background: #0D1117;
    color: #C9D1D9;
    font-family: monospace;
    font-size: 10px;
    cursor: pointer;
}
.Button:hover {
    background: #161B22;
    color: #fff;
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 940,
    name: "Terminal Button",
    preview: (
      <button className="btn-940">
        <i className="fa-solid fa-terminal"></i>
        Run command
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-terminal"></i>
    Run command
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid #334155;
    border-radius: 7px;
    background: #020617;
    color: #22C55E;
    font-family: monospace;
    font-size: 11px;
    cursor: pointer;
}
.Button:hover {
    border-color: #22C55E;
    box-shadow: 0 0 14px rgba(34,197,94,.12);
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 941,
    name: "Loading Progress Button",
    preview: (
      <button className="btn-941" disabled>
        <span className="btn-941__fill"></span>
        <span className="btn-941__text">Uploading 62%</span>
      </button>
    ),
    html: `<button class="Button" disabled>
    <span class="Button-fill"></span>
    <span class="Button-text">Uploading 62%</span>
</button>`,
    css: `.Button {
    position: relative;
    width: 155px;
    height: 42px;
    overflow: hidden;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #F4F4F5;
    color: #3F3F46;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: not-allowed;
}
.Button-fill {
    position: absolute;
    inset: 0;
    width: 62%;
    background: #D97757;
}
.Button-text {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 942,
    name: "Pulse Button",
    preview: (
      <button className="btn-942">
        <span></span>
        Live
      </button>
    ),
    html: `<button class="Button">
    <span></span>
    Live
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid #BBF7D0;
    border-radius: 999px;
    background: #F0FDF4;
    color: #15803D;
    font-family: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}
.Button > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22C55E;
    box-shadow: 0 0 0 0 rgba(34,197,94,.5);
    animation: pulse-dot 1.6s infinite;
}
@keyframes pulse-dot {
    70% {
        box-shadow: 0 0 0 7px rgba(34,197,94,0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(34,197,94,0);
    }
}`,
  },
  {
    id: 943,
    name: "Tag Button",
    preview: (
      <button className="btn-943">
        React
        <i className="fa-solid fa-xmark"></i>
      </button>
    ),
    html: `<button class="Button">
    React
    <i class="fa-solid fa-xmark"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 6px 9px;
    border: 1px solid #DBEAFE;
    border-radius: 999px;
    background: #EFF6FF;
    color: #1D4ED8;
    font-family: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}
.Button i {
    font-size: 9px;
}
.Button:hover {
    background: #DBEAFE;
}`,
  },
  {
    id: 944,
    name: "Filter Active Button",
    preview: (
      <button className="btn-944">
        <i className="fa-solid fa-filter"></i>
        Active
        <i className="fa-solid fa-xmark"></i>
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-filter"></i>
    Active
    <i class="fa-solid fa-xmark"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 10px;
    border: 1px solid #C7D2FE;
    border-radius: 999px;
    background: #EEF2FF;
    color: #4338CA;
    font-family: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}
.Button i {
    font-size: 9px;
}
.Button:hover {
    background: #E0E7FF;
}`,
  },
  {
    id: 945,
    name: "Chevron Button",
    preview: (
      <button className="btn-945">
        Next
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Next
    <i class="fa-solid fa-chevron-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid #E4E4E7;
    border-radius: 8px;
    background: #fff;
    color: #3F3F46;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #F4F4F5;
}
.Button i {
    color: #A1A1AA;
    font-size: 9px;
}`,
  },
  {
    id: 946,
    name: "Back Button",
    preview: (
      <button className="btn-946">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-left"></i>
    Back
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #52525B;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #F4F4F5;
    color: #18181B;
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 947,
    name: "Confirm Button",
    preview: (
      <button className="btn-947">
        Confirm changes
        <i className="fa-solid fa-check"></i>
      </button>
    ),
    html: `<button class="Button">
    Confirm changes
    <i class="fa-solid fa-check"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 9px;
    background: #18181B;
    color: #fff;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #3F3F46;
}
.Button i {
    color: #4ADE80;
    font-size: 10px;
}`,
  },
  {
    id: 948,
    name: "Try Free Button",
    preview: (
      <button className="btn-948">
        Try for free
        <span>14 days</span>
      </button>
    ),
    html: `<button class="Button">
    Try for free
    <span>14 days</span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: 1px solid #C4B5FD;
    border-radius: 10px;
    background: #F5F3FF;
    color: #5B21B6;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}
.Button span {
    padding: 3px 6px;
    border-radius: 999px;
    background: #DDD6FE;
    color: #6D28D9;
    font-size: 8px;
    font-weight: 800;
}
.Button:hover {
    background: #EDE9FE;
}`,
  },
  {
    id: 949,
    name: "Premium Button",
    preview: (
      <button className="btn-949">
        <i className="fa-solid fa-crown"></i>
        Go premium
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-crown"></i>
    Go premium
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #EAB308;
    border-radius: 10px;
    background: linear-gradient(135deg, #FDE68A, #FACC15);
    color: #713F12;
    font-family: inherit;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
}
.Button:hover {
    filter: brightness(1.04);
    box-shadow: 0 6px 16px rgba(234,179,8,.22);
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 950,
    name: "Emergency Button",
    preview: (
      <button className="btn-950">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Emergency action
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Emergency action
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #DC2626;
    border-radius: 9px;
    background: #DC2626;
    color: #fff;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    background: #B91C1C;
    box-shadow: 0 5px 14px rgba(220,38,38,.2);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 951,
    name: "Ultimate CTA Button",
    preview: (
      <button className="btn-951">
        <span className="btn-951__icon">
          <i className="fa-solid fa-sparkles"></i>
        </span>
        Build something amazing
        <span className="btn-951__arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-icon">
        <i class="fa-solid fa-sparkles"></i>
    </span>
    Build something amazing
    <span class="Button-arrow">
        <i class="fa-solid fa-arrow-right"></i>
    </span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 6px 7px 6px 7px;
    border: 1px solid #D97757;
    border-radius: 999px;
    background: #2D2A26;
    color: #fff;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(45,42,38,.18);
}
.Button-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #D97757;
    color: #fff;
}
.Button-arrow {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #2D2A26;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(45,42,38,.22);
}
.Button i {
    font-size: 10px;
}`,
  },
  {
    id: 952,
    name: "Rainbow Live Button",
    preview: (
      <button className="btn-952">
        <span>Live</span>
        <i className="fa-solid fa-bolt"></i>
      </button>
    ),
    html: `<button class="Button">
    <span>Live</span>
    <i class="fa-solid fa-bolt"></i>
</button>`,
    css: `.Button {
    padding: 10px 17px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef, #ef4444);
    background-size: 300% 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    animation: rainbow 4s linear infinite;
}
.Button:hover {
    animation-duration: 1.3s;
    transform: translateY(-2px);
}
@keyframes rainbow {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 953,
    name: "Rainbow Border Button",
    preview: <button className="btn-953">Explore</button>,
    html: `<button class="Button">Explore</button>`,
    css: `.Button {
    position: relative;
    padding: 10px 19px;
    border: none;
    border-radius: 11px;
    background: #18181b;
    color: #fff;
    font-family: inherit;
    font-weight: 600;
    isolation: isolate;
}
.Button::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef);
    background-size: 250% 100%;
    animation: rainbow-border 3s linear infinite;
}
@keyframes rainbow-border {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 954,
    name: "Red Orange Yellow Button",
    preview: (
      <button className="btn-954">
        Ignite
        <i className="fa-solid fa-fire"></i>
      </button>
    ),
    html: `<button class="Button">
    Ignite
    <i class="fa-solid fa-fire"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(110deg, #dc2626, #f97316, #facc15);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    box-shadow: 0 7px 20px rgba(249,115,22,.25);
}
.Button:hover {
    transform: translateY(-2px);
    filter: saturate(1.2);
    box-shadow: 0 10px 25px rgba(249,115,22,.35);
}`,
  },
  {
    id: 955,
    name: "Sunset Button",
    preview: <button className="btn-955">View sunset</button>,
    html: `<button class="Button">View sunset</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #ef4444, #f97316, #fbbf24);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all .25s ease;
}
.Button:hover {
    border-radius: 6px;
    transform: scale(1.04);
    box-shadow: 0 10px 28px rgba(239,68,68,.25);
}`,
  },
  {
    id: 956,
    name: "Liquid Rainbow Button",
    preview: (
      <button className="btn-956">
        <span>Make magic</span>
      </button>
    ),
    html: `<button class="Button">
    <span>Make magic</span>
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 20px;
    border: none;
    border-radius: 12px;
    background: #18181b;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button::before {
    content: "";
    position: absolute;
    width: 180%;
    height: 180%;
    left: -40%;
    top: -40%;
    background: conic-gradient(#ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef, #ef4444);
    animation: liquid-spin 4s linear infinite;
    opacity: .9;
}
.Button::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 10px;
    background: #18181b;
}
.Button span {
    position: relative;
    z-index: 2;
}
@keyframes liquid-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 957,
    name: "Rainbow Glow Button",
    preview: (
      <button className="btn-957">
        <i className="fa-solid fa-sparkles"></i>
        Spark
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-sparkles"></i>
    Spark
</button>`,
    css: `.Button {
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1);
    background-size: 200% 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 18px rgba(99,102,241,.25);
    animation: glow-rainbow 3s linear infinite;
}
.Button:hover {
    box-shadow: 0 0 30px rgba(217,70,239,.45);
}
@keyframes glow-rainbow {
    to {
        background-position: 200% 0;
    }
}`,
  },
  {
    id: 958,
    name: "Fire Gradient Button",
    preview: (
      <button className="btn-958">
        <i className="fa-solid fa-fire-flame-curved"></i>
        Hot deal
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-fire-flame-curved"></i>
    Hot deal
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #fb923c;
    border-radius: 9px;
    background: linear-gradient(120deg, #991b1b, #dc2626, #f97316, #facc15);
    background-size: 200% 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    background-position: 100% 0;
    box-shadow: 0 7px 20px rgba(234,88,12,.3);
}`,
  },
  {
    id: 959,
    name: "Golden Shine Button",
    preview: (
      <button className="btn-959">
        <i className="fa-solid fa-crown"></i>
        Premium
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-crown"></i>
    Premium
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 10px 18px;
    border: 1px solid #eab308;
    border-radius: 10px;
    background: linear-gradient(135deg, #854d0e, #eab308);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -80%;
    width: 40%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(255,255,255,.7), transparent);
    transform: skewX(-20deg);
    animation: gold-shine 2.5s infinite;
}
.Button i,
.Button {
    isolation: isolate;
}
@keyframes gold-shine {
    45%, 100% {
        left: 140%;
    }
}`,
  },
  {
    id: 960,
    name: "Red Glow Button",
    preview: <button className="btn-960">Delete account</button>,
    html: `<button class="Button">Delete account</button>`,
    css: `.Button {
    padding: 10px 18px;
    border: 1px solid #ef4444;
    border-radius: 10px;
    background: #450a0a;
    color: #fca5a5;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all .2s ease;
}
.Button:hover {
    background: #dc2626;
    color: #fff;
    box-shadow: 0 0 24px rgba(239,68,68,.4);
}`,
  },
  {
    id: 961,
    name: "Orange Glow Button",
    preview: (
      <button className="btn-961">
        <i className="fa-solid fa-bolt"></i>
        Boost
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Boost
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #f97316;
    border-radius: 10px;
    background: #431407;
    color: #fdba74;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    color: #fff;
    background: #ea580c;
    box-shadow: 0 0 25px rgba(249,115,22,.4);
}`,
  },
  {
    id: 962,
    name: "Yellow Glow Button",
    preview: (
      <button className="btn-962">
        <i className="fa-regular fa-star"></i>
        Favorite
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-star"></i>
    Favorite
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #facc15;
    border-radius: 10px;
    background: #422006;
    color: #fde68a;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    color: #fff;
    background: #ca8a04;
    box-shadow: 0 0 25px rgba(250,204,21,.35);
}`,
  },
  {
    id: 963,
    name: "Rainbow Pill",
    preview: <button className="btn-963">New experience</button>,
    html: `<button class="Button">New experience</button>`,
    css: `.Button {
    padding: 10px 20px;
    border: 2px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef) border-box;
    color: #2D2A26;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    background:
        linear-gradient(#fff7ed, #fff7ed) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef) border-box;
}`,
  },
  {
    id: 964,
    name: "Rainbow Outline Button",
    preview: <button className="btn-964">Discover</button>,
    html: `<button class="Button">Discover</button>`,
    css: `.Button {
    padding: 10px 18px;
    border: 2px solid transparent;
    border-radius: 10px;
    background:
        linear-gradient(#18181b, #18181b) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef) border-box;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all .2s ease;
}
.Button:hover {
    transform: translateY(-2px);
    background:
        linear-gradient(#27272a, #27272a) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #d946ef) border-box;
}`,
  },
  {
    id: 965,
    name: "Animated Gradient Button",
    preview: <button className="btn-965">Start building</button>,
    html: `<button class="Button">Start building</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 11px;
    background: linear-gradient(270deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    background-size: 500% 500%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    animation: gradient-flow 6s ease infinite;
}
@keyframes gradient-flow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}`,
  },
  {
    id: 966,
    name: "Chromatic Button",
    preview: <button className="btn-966">Chromatic</button>,
    html: `<button class="Button">Chromatic</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(105deg, #ef4444 0%, #f97316 20%, #eab308 40%, #06b6d4 65%, #6366f1 85%, #ec4899 100%);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    text-shadow: 0 1px 3px rgba(0,0,0,.25);
}
.Button:hover {
    filter: contrast(1.12) saturate(1.2);
    transform: scale(1.03);
}`,
  },
  {
    id: 967,
    name: "Rainbow Shine Button",
    preview: (
      <button className="btn-967">
        <span>Hover me</span>
      </button>
    ),
    html: `<button class="Button">
    <span>Hover me</span>
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 20px;
    border: none;
    border-radius: 10px;
    background: #2D2A26;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent);
    transform: translateX(-120%);
    transition: transform .5s ease;
}
.Button:hover::before {
    transform: translateX(120%);
}
.Button span {
    position: relative;
    z-index: 1;
}`,
  },
  {
    id: 968,
    name: "Fire Border Button",
    preview: (
      <button className="btn-968">
        <i className="fa-solid fa-fire"></i>
        Burn bright
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-fire"></i>
    Burn bright
</button>`,
    css: `.Button {
    padding: 10px 17px;
    border: 2px solid transparent;
    border-radius: 10px;
    background:
        linear-gradient(#18181b, #18181b) padding-box,
        linear-gradient(135deg, #dc2626, #f97316, #facc15) border-box;
    color: #fbbf24;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    color: #fff;
    background:
        linear-gradient(#7f1d1d, #7f1d1d) padding-box,
        linear-gradient(135deg, #dc2626, #f97316, #facc15) border-box;
}`,
  },
  {
    id: 969,
    name: "Sunrise Button",
    preview: <button className="btn-969">Good morning</button>,
    html: `<button class="Button">Good morning</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 11px;
    background: linear-gradient(160deg, #f97316, #fbbf24, #fde68a);
    color: #78350f;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    transition: all .2s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(245,158,11,.3);
}`,
  },
  {
    id: 970,
    name: "Lava Button",
    preview: (
      <button className="btn-970">
        <i className="fa-solid fa-volcano"></i>
        Enter lava mode
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-volcano"></i>
    Enter lava mode
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 17px;
    border: 1px solid #fb923c;
    border-radius: 10px;
    background:
        radial-gradient(circle at 80% 20%, #facc15, transparent 30%),
        radial-gradient(circle at 20% 80%, #ef4444, transparent 35%),
        #991B1B;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    background:
        radial-gradient(circle at 30% 30%, #facc15, transparent 35%),
        radial-gradient(circle at 80% 70%, #f97316, transparent 35%),
        #b91c1c;
    box-shadow: 0 8px 24px rgba(220,38,38,.3);
}`,
  },
  {
    id: 971,
    name: "Neon Rainbow Button",
    preview: <button className="btn-971">Neon mode</button>,
    html: `<button class="Button">Neon mode</button>`,
    css: `.Button {
    padding: 10px 19px;
    border: 1px solid transparent;
    border-radius: 10px;
    background:
        linear-gradient(#09090b, #09090b) padding-box,
        linear-gradient(90deg, #f43f5e, #f97316, #facc15, #22c55e, #06b6d4, #8b5cf6, #ec4899) border-box;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    box-shadow: 0 0 18px rgba(236,72,153,.15);
}
.Button:hover {
    box-shadow:
        0 0 12px rgba(239,68,68,.3),
        0 0 25px rgba(99,102,241,.2);
}`,
  },
  {
    id: 972,
    name: "Rainbow Arrow Button",
    preview: (
      <button className="btn-972">
        Continue
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    ),
    html: `<button class="Button">
    Continue
    <span>
        <i class="fa-solid fa-arrow-right"></i>
    </span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 6px 7px 6px 16px;
    border: none;
    border-radius: 999px;
    background: #18181b;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button span {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
}
.Button:hover span {
    transform: rotate(-45deg);
}`,
  },
  {
    id: 973,
    name: "Color Shift Button",
    preview: <button className="btn-973">Color shift</button>,
    html: `<button class="Button">Color shift</button>`,
    css: `.Button {
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(90deg, #ef4444, #f97316);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all .35s ease;
}
.Button:hover {
    background: linear-gradient(90deg, #eab308, #22c55e, #06b6d4);
    transform: translateY(-2px);
}`,
  },
  {
    id: 974,
    name: "Rainbow Glass Button",
    preview: (
      <button className="btn-974">
        <i className="fa-solid fa-sparkles"></i>
        Glass mode
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-sparkles"></i>
    Glass mode
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 11px;
    background: linear-gradient(110deg, rgba(239,68,68,.35), rgba(59,130,246,.35), rgba(217,70,239,.35));
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    backdrop-filter: blur(14px);
}
.Button:hover {
    background: linear-gradient(110deg, rgba(239,68,68,.5), rgba(59,130,246,.5), rgba(217,70,239,.5));
}`,
  },
  {
    id: 975,
    name: "Electric Blue Button",
    preview: (
      <button className="btn-975">
        <i className="fa-solid fa-bolt"></i>
        Electrify
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Electrify
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #38BDF8;
    border-radius: 9px;
    background: linear-gradient(135deg, #0369A1, #0EA5E9);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    box-shadow: 0 0 14px rgba(56,189,248,.2);
}
.Button:hover {
    box-shadow: 0 0 30px rgba(56,189,248,.4);
}`,
  },
  {
    id: 976,
    name: "Cyber Rainbow Button",
    preview: (
      <button className="btn-976">
        <span>ACCESS</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    <span>ACCESS</span>
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 10px 17px;
    border: 1px solid #22D3EE;
    border-radius: 6px;
    background: #020617;
    color: #67E8F9;
    font-family: monospace;
    font-weight: 700;
    box-shadow: inset 0 0 20px rgba(34,211,238,.04);
}
.Button:hover {
    border-color: #F472B6;
    color: #F9A8D4;
    box-shadow:
        0 0 15px rgba(34,211,238,.2),
        0 0 30px rgba(244,114,182,.15);
}`,
  },
  {
    id: 977,
    name: "Pink Orange Button",
    preview: <button className="btn-977">Create vibe</button>,
    html: `<button class="Button">Create vibe</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 11px;
    background: linear-gradient(120deg, #f97316, #ec4899);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    transform: translateY(-2px) rotate(-1deg);
    box-shadow: 0 10px 25px rgba(236,72,153,.25);
}`,
  },
  {
    id: 978,
    name: "Green Pink Button",
    preview: (
      <button className="btn-978">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        Surprise me
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Surprise me
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(110deg, #22c55e, #06b6d4, #ec4899);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    background-position: 100% 0;
    box-shadow: 0 8px 22px rgba(236,72,153,.25);
}`,
  },
  {
    id: 979,
    name: "Purple Blue Button",
    preview: (
      <button className="btn-979">
        Explore universe
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    ),
    html: `<button class="Button">
    Explore universe
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #4F46E5, #7C3AED, #2563EB);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 9px 23px rgba(79,70,229,.3);
}`,
  },
  {
    id: 980,
    name: "Candy Button",
    preview: <button className="btn-980">Sweet action</button>,
    html: `<button class="Button">Sweet action</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #fb7185, #f472b6, #c084fc);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    box-shadow: 0 6px 16px rgba(244,114,182,.2);
}
.Button:hover {
    transform: scale(1.04);
    box-shadow: 0 9px 23px rgba(192,132,252,.3);
}`,
  },
  {
    id: 981,
    name: "Ocean Rainbow Button",
    preview: (
      <button className="btn-981">
        Dive in
        <i className="fa-solid fa-water"></i>
      </button>
    ),
    html: `<button class="Button">
    Dive in
    <i class="fa-solid fa-water"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(110deg, #06B6D4, #3B82F6, #8B5CF6);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    filter: brightness(1.12);
    transform: translateY(-2px);
}`,
  },
  {
    id: 982,
    name: "Holographic Button",
    preview: <button className="btn-982">Holographic</button>,
    html: `<button class="Button">Holographic</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 11px;
    background:
        linear-gradient(
            120deg,
            #fca5a5,
            #fdba74,
            #fde68a,
            #86efac,
            #67e8f9,
            #a5b4fc,
            #f0abfc
        );
    color: #18181b;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    background-size: 250% 250%;
    animation: holo 5s ease infinite;
}
@keyframes holo {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}`,
  },
  {
    id: 983,
    name: "Holographic Outline Button",
    preview: <button className="btn-983">Future</button>,
    html: `<button class="Button">Future</button>`,
    css: `.Button {
    padding: 10px 19px;
    border: 2px solid transparent;
    border-radius: 10px;
    background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, #ef4444, #f59e0b, #22c55e, #06b6d4, #6366f1, #ec4899) border-box;
    color: #18181b;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    color: #6366F1;
}`,
  },
  {
    id: 984,
    name: "Moving Rainbow Button",
    preview: <button className="btn-984">Always moving</button>,
    html: `<button class="Button">Always moving</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    background-size: 400% 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    animation: moving-rainbow 2.8s linear infinite;
}
@keyframes moving-rainbow {
    to {
        background-position: 400% 0;
    }
}`,
  },
  {
    id: 985,
    name: "Rainbow Hover Fill",
    preview: <button className="btn-985">Hover to fill</button>,
    html: `<button class="Button">Hover to fill</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 10px 18px;
    border: 1px solid #D4D4D8;
    border-radius: 10px;
    background: #fff;
    color: #18181b;
    font-family: inherit;
    font-weight: 700;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    transform: translateX(-101%);
    transition: transform .45s ease;
}
.Button:hover::before {
    transform: translateX(0);
}
.Button {
    isolation: isolate;
}
.Button::before {
    z-index: -1;
}
.Button:hover {
    color: #fff;
    border-color: transparent;
}`,
  },
  {
    id: 986,
    name: "Fireworks Button",
    preview: (
      <button className="btn-986">
        Celebrate
        <i className="fa-solid fa-burst"></i>
      </button>
    ),
    html: `<button class="Button">
    Celebrate
    <i class="fa-solid fa-burst"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #ef4444, #f97316, #facc15);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    animation: fireworks .5s ease;
}
@keyframes fireworks {
    40% {
        transform: scale(1.08);
    }
    100% {
        transform: scale(1);
    }
}`,
  },
  {
    id: 987,
    name: "Electric Pink Button",
    preview: (
      <button className="btn-987">
        <i className="fa-solid fa-heart"></i>
        Love it
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-heart"></i>
    Love it
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #F472B6;
    border-radius: 10px;
    background: #500724;
    color: #F9A8D4;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    background: #DB2777;
    color: #fff;
    box-shadow: 0 0 25px rgba(244,114,182,.4);
}`,
  },
  {
    id: 988,
    name: "Acid Lime Button",
    preview: (
      <button className="btn-988">
        <i className="fa-solid fa-flask"></i>
        Experiment
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-flask"></i>
    Experiment
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 8px;
    background: #D9F99D;
    color: #365314;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
}
.Button:hover {
    background: #A3E635;
    box-shadow: 0 6px 18px rgba(163,230,53,.25);
}`,
  },
  {
    id: 989,
    name: "Rainbow Badge Button",
    preview: (
      <button className="btn-989">
        New feature
        <span>NEW</span>
      </button>
    ),
    html: `<button class="Button">
    New feature
    <span>NEW</span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid #E4E4E7;
    border-radius: 9px;
    background: #fff;
    color: #18181b;
    font-family: inherit;
    font-weight: 700;
}
.Button span {
    padding: 3px 6px;
    border-radius: 999px;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1);
    color: #fff;
    font-size: 7px;
}
.Button:hover {
    border-color: #a1a1aa;
}`,
  },
  {
    id: 990,
    name: "Rainbow Icon Button",
    preview: (
      <button className="btn-990" aria-label="Magic">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Magic">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
</button>`,
    css: `.Button {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border: 2px solid transparent;
    border-radius: 12px;
    background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899) border-box;
    color: #7C3AED;
    cursor: pointer;
}
.Button:hover {
    transform: rotate(8deg) scale(1.08);
}
.Button i {
    font-size: 15px;
}`,
  },
  {
    id: 991,
    name: "Rainbow Download Button",
    preview: (
      <button className="btn-991">
        <i className="fa-solid fa-download"></i>
        Download
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-download"></i>
    Download
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 9px;
    background: linear-gradient(135deg, #06b6d4, #6366f1, #ec4899);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 992,
    name: "Rainbow Upload Button",
    preview: (
      <button className="btn-992">
        <i className="fa-solid fa-cloud-arrow-up"></i>
        Upload
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-cloud-arrow-up"></i>
    Upload
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px dashed #8B5CF6;
    border-radius: 10px;
    background: linear-gradient(135deg, #EEF2FF, #FAE8FF);
    color: #6D28D9;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    border-color: #EC4899;
    background: linear-gradient(135deg, #FCE7F3, #FEF3C7);
}`,
  },
  {
    id: 993,
    name: "Rainbow Play Button",
    preview: (
      <button className="btn-993">
        <span>
          <i className="fa-solid fa-play"></i>
        </span>
        Watch video
      </button>
    ),
    html: `<button class="Button">
    <span>
        <i class="fa-solid fa-play"></i>
    </span>
    Watch video
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 14px 6px 6px;
    border: 1px solid #E4E4E7;
    border-radius: 999px;
    background: #fff;
    color: #2D2A26;
    font-family: inherit;
    font-weight: 700;
}
.Button > span {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    color: #fff;
}
.Button:hover {
    box-shadow: 0 5px 16px rgba(99,102,241,.15);
}`,
  },
  {
    id: 994,
    name: "Rainbow Menu Button",
    preview: (
      <button className="btn-994">
        <i className="fa-solid fa-bars"></i>
        Menu
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bars"></i>
    Menu
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border: 2px solid transparent;
    border-radius: 9px;
    background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1) border-box;
    color: #3F3F46;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    color: #6366F1;
}`,
  },
  {
    id: 995,
    name: "Rainbow Search Button",
    preview: (
      <button className="btn-995">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-magnifying-glass"></i>
    Search
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #D4D4D8;
    border-radius: 9px;
    background: #fff;
    color: #52525B;
    font-family: inherit;
    font-weight: 600;
}
.Button:hover {
    border-color: #8B5CF6;
    color: #6366F1;
    box-shadow: 0 4px 15px rgba(139,92,246,.12);
}`,
  },
  {
    id: 996,
    name: "Rainbow Confirm Button",
    preview: (
      <button className="btn-996">
        <i className="fa-solid fa-check"></i>
        Confirm
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check"></i>
    Confirm
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 9px;
    background: linear-gradient(90deg, #16A34A, #22C55E, #06B6D4);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    box-shadow: 0 7px 20px rgba(34,197,94,.25);
    transform: translateY(-1px);
}`,
  },
  {
    id: 997,
    name: "Rainbow Warning Button",
    preview: (
      <button className="btn-997">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Proceed carefully
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Proceed carefully
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 9px;
    background: linear-gradient(90deg, #DC2626, #F97316, #EAB308);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button:hover {
    filter: saturate(1.2);
    box-shadow: 0 7px 20px rgba(249,115,22,.25);
}`,
  },
  {
    id: 998,
    name: "Rainbow Heart Button",
    preview: (
      <button className="btn-998">
        <i className="fa-solid fa-heart"></i>
        Love this
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-heart"></i>
    Love this
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(90deg, #EF4444, #EC4899, #8B5CF6);
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}
.Button:hover {
    transform: scale(1.04);
    box-shadow: 0 8px 20px rgba(236,72,153,.28);
}
.Button i {
    font-size: 11px;
}`,
  },
  {
    id: 999,
    name: "Rainbow Magic Button",
    preview: (
      <button className="btn-999">
        <span className="btn-999__icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </span>
        Create magic
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </span>
    Create magic
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 16px 6px 6px;
    border: none;
    border-radius: 999px;
    background: #18181b;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
}
.Button-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
}
.Button:hover {
    box-shadow: 0 0 22px rgba(139,92,246,.25);
}`,
  },
  {
    id: 1000,
    name: "Ultimate Rainbow Button",
    preview: (
      <button className="btn-1000">
        <span className="btn-1000__glow"></span>
        <span className="btn-1000__icon">
          <i className="fa-solid fa-sparkles"></i>
        </span>
        Enter the experience
        <span className="btn-1000__arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-glow"></span>
    <span class="Button-icon">
        <i class="fa-solid fa-sparkles"></i>
    </span>
    Enter the experience
    <span class="Button-arrow">
        <i class="fa-solid fa-arrow-right"></i>
    </span>
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 6px 7px 6px 6px;
    border: 2px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#18181b, #18181b) padding-box,
        linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899, #ef4444) border-box;
    background-size: 100% 100%, 300% 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    animation: ultimate-rainbow 4s linear infinite;
}
.Button-glow {
    position: absolute;
    inset: -30px;
    background: linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    filter: blur(28px);
    opacity: .15;
    z-index: -1;
}
.Button-icon {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
}
.Button-arrow {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #18181b;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139,92,246,.25);
}
@keyframes ultimate-rainbow {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 891,
    name: "Claude Primary Button",
    preview: (
      <button className="btn-891">
        Send message
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Send message
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #C15F3C;
    border-radius: 10px;
    background: #D97757;
    color: #FFFFFF;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.Button:hover {
    background: #C15F3C;
    box-shadow: 0 4px 12px rgba(45, 42, 38, 0.12);
}
.Button:active {
    transform: translateY(1px);
}
.Button i {
    font-size: 12px;
}`,
  },
  {
    id: 1396,
    name: "Aurora Gradient Button",
    preview: (
      <button className="btn-1396">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        Create magic
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Create magic
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #7c3aed, #06b6d4);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 22px rgba(124,58,237,.25);
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(6,182,212,.3);
    filter: brightness(1.08);
}`,
  },
  {
    id: 1397,
    name: "Midnight Glow Button",
    preview: (
      <button className="btn-1397">
        Launch project
        <i className="fa-solid fa-rocket"></i>
      </button>
    ),
    html: `<button class="Button">
    Launch project
    <i class="fa-solid fa-rocket"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 18px;
    border: 1px solid #6366f1;
    border-radius: 10px;
    background: #111827;
    color: #e0e7ff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(99,102,241,0);
    transition: .25s ease;
}
.Button:hover {
    background: #1e1b4b;
    box-shadow: 0 0 25px rgba(99,102,241,.45);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1398,
    name: "Rainbow Pulse Button",
    preview: (
      <button className="btn-1398">
        <span>Go premium</span>
      </button>
    ),
    html: `<button class="Button">
    <span>Go premium</span>
</button>`,
    css: `.Button {
    position: relative;
    padding: 12px 20px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(
        90deg,
        #ef4444,
        #f97316,
        #eab308,
        #22c55e,
        #06b6d4,
        #6366f1,
        #ec4899
    );
    background-size: 300% 100%;
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    animation: Button-rainbow 4s linear infinite;
    box-shadow: 0 0 20px rgba(139,92,246,.25);
}
.Button:hover {
    animation-duration: 1.5s;
    transform: scale(1.03);
}
@keyframes Button-rainbow {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 1399,
    name: "Glass Action Button",
    preview: (
      <button className="btn-1399">
        <i className="fa-solid fa-bolt"></i>
        Get started
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Get started
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 12px;
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(12px);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(255,255,255,.2);
    border-color: rgba(255,255,255,.55);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1400,
    name: "Neon Cyan Button",
    preview: <button className="btn-1400">CONNECT</button>,
    html: `<button class="Button">CONNECT</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid #22d3ee;
    border-radius: 8px;
    background: transparent;
    color: #22d3ee;
    font-family: monospace;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: rgba(34,211,238,.1);
    box-shadow:
        0 0 10px rgba(34,211,238,.5),
        inset 0 0 10px rgba(34,211,238,.08);
}`,
  },
  {
    id: 1401,
    name: "Soft Success Button",
    preview: (
      <button className="btn-1401">
        <i className="fa-solid fa-check"></i>
        Saved
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check"></i>
    Saved
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #bbf7d0;
    border-radius: 9px;
    background: #f0fdf4;
    color: #15803d;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #dcfce7;
    border-color: #86efac;
}`,
  },
  {
    id: 1402,
    name: "Danger Delete Button",
    preview: (
      <button className="btn-1402">
        <i className="fa-solid fa-trash"></i>
        Delete
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-trash"></i>
    Delete
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #fecaca;
    border-radius: 9px;
    background: #fff;
    color: #dc2626;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #fef2f2;
    border-color: #f87171;
    transform: translateY(-1px);
}`,
  },
  {
    id: 1403,
    name: "3D Orange Button",
    preview: <button className="btn-1403">Buy now</button>,
    html: `<button class="Button">Buy now</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: none;
    border-radius: 9px;
    background: #f97316;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 0 #c2410c;
    transition: .1s ease;
}
.Button:hover {
    filter: brightness(1.08);
}
.Button:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #c2410c;
}`,
  },
  {
    id: 1404,
    name: "Gradient Outline Button",
    preview: <button className="btn-1404">Explore</button>,
    html: `<button class="Button">Explore</button>`,
    css: `.Button {
    position: relative;
    padding: 11px 20px;
    border: none;
    border-radius: 10px;
    background: #09090b;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    isolation: isolate;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1.5px;
    border-radius: inherit;
    background: linear-gradient(90deg,#06b6d4,#7c3aed,#ec4899);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
}
.Button:hover {
    background: #11111a;
    transform: translateY(-1px);
}`,
  },
  {
    id: 1405,
    name: "Icon Circle Button",
    preview: (
      <button className="btn-1405" aria-label="Add">
        <i className="fa-solid fa-plus"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Add">
    <i class="fa-solid fa-plus"></i>
</button>`,
    css: `.Button {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: #18181b;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: #7c3aed;
    transform: rotate(90deg) scale(1.06);
    box-shadow: 0 8px 20px rgba(124,58,237,.25);
}`,
  },
  {
    id: 1406,
    name: "Magnetic CTA Button",
    preview: (
      <button className="btn-1406">
        View portfolio
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    ),
    html: `<button class="Button">
    View portfolio
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 12px 19px;
    border: 1px solid #18181b;
    border-radius: 11px;
    background: #fff;
    color: #18181b;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s cubic-bezier(.34,1.56,.64,1);
}
.Button:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 12px 24px rgba(0,0,0,.12);
}`,
  },
  {
    id: 1407,
    name: "Blue Shine Button",
    preview: <button className="btn-1407">Continue</button>,
    html: `<button class="Button">Continue</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 19px;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
}
.Button::after {
    content: "";
    position: absolute;
    top: -20%;
    left: -70%;
    width: 45%;
    height: 140%;
    background: rgba(255,255,255,.35);
    transform: skewX(-20deg);
    transition: left .45s ease;
}
.Button:hover::after {
    left: 130%;
}`,
  },
  {
    id: 1408,
    name: "Purple Pill Button",
    preview: (
      <button className="btn-1408">
        <i className="fa-solid fa-heart"></i>
        Favorite
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-heart"></i>
    Favorite
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 18px;
    border: 1px solid #ddd6fe;
    border-radius: 999px;
    background: #faf5ff;
    color: #7c3aed;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #ede9fe;
    border-color: #c4b5fd;
    transform: translateY(-1px);
}`,
  },
  {
    id: 1409,
    name: "Monochrome Button",
    preview: <button className="btn-1409">Learn more</button>,
    html: `<button class="Button">Learn more</button>`,
    css: `.Button {
    padding: 11px 18px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #fff;
    color: #18181b;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #18181b;
    border-color: #18181b;
    color: #fff;
}`,
  },
  {
    id: 1410,
    name: "Split Button",
    preview: (
      <div className="btn-1410">
        <button>Deploy</button>
        <button aria-label="More options">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    ),
    html: `<div class="Button-group">
    <button>Deploy</button>
    <button aria-label="More options">
        <i class="fa-solid fa-chevron-down"></i>
    </button>
</div>`,
    css: `.Button-group {
    display: inline-flex;
    overflow: hidden;
    border-radius: 9px;
}
.Button-group button {
    height: 38px;
    border: none;
    background: #18181b;
    color: #fff;
    padding: 0 15px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}
.Button-group button + button {
    width: 34px;
    padding: 0;
    border-left: 1px solid #3f3f46;
}
.Button-group button:hover {
    background: #27272a;
}`,
  },
  {
    id: 1411,
    name: "Loading Button",
    preview: (
      <button className="btn-1411" disabled>
        <span></span>
        Processing
      </button>
    ),
    html: `<button class="Button" disabled>
    <span></span>
    Processing
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 9px;
    background: #18181b;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    cursor: not-allowed;
    opacity: .8;
}
.Button span {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255,255,255,.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: Button-spin .7s linear infinite;
}
@keyframes Button-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1412,
    name: "Social GitHub Button",
    preview: (
      <button className="btn-1412">
        <i className="fa-brands fa-github"></i>
        Continue with GitHub
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-brands fa-github"></i>
    Continue with GitHub
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-width: 180px;
    padding: 10px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #fff;
    color: #18181b;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.Button i {
    font-size: 15px;
}
.Button:hover {
    background: #18181b;
    border-color: #18181b;
    color: #fff;
}`,
  },
  {
    id: 1413,
    name: "Success Gradient Button",
    preview: (
      <button className="btn-1413">
        <i className="fa-solid fa-circle-check"></i>
        Publish
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-circle-check"></i>
    Publish
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg,#16a34a,#22c55e);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 7px 18px rgba(34,197,94,.18);
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 11px 24px rgba(34,197,94,.25);
}`,
  },
  {
    id: 1414,
    name: "Warning Action Button",
    preview: (
      <button className="btn-1414">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Review
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Review
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #fed7aa;
    border-radius: 9px;
    background: #fff7ed;
    color: #c2410c;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #ffedd5;
    border-color: #fdba74;
}`,
  },
  {
    id: 1415,
    name: "Black Capsule Button",
    preview: (
      <button className="btn-1415">
        Start building
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Start building
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 19px;
    border: none;
    border-radius: 999px;
    background: #000;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button i {
    transition: transform .2s ease;
}
.Button:hover {
    box-shadow: 0 9px 22px rgba(0,0,0,.18);
}
.Button:hover i {
    transform: translateX(3px);
}`,
  },
  {
    id: 1416,
    name: "Cyber Pink Button",
    preview: <button className="btn-1416">ACCESS</button>,
    html: `<button class="Button">ACCESS</button>`,
    css: `.Button {
    padding: 11px 21px;
    border: 1px solid #ec4899;
    border-radius: 3px;
    background: #180914;
    color: #f9a8d4;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    cursor: pointer;
    text-shadow: 0 0 7px rgba(236,72,153,.7);
    box-shadow: inset 0 0 12px rgba(236,72,153,.08);
    transition: .2s ease;
}
.Button:hover {
    background: rgba(236,72,153,.12);
    box-shadow:
        0 0 18px rgba(236,72,153,.3),
        inset 0 0 14px rgba(236,72,153,.1);
}`,
  },
  {
    id: 1417,
    name: "Underline Button",
    preview: <button className="btn-1417">Discover more</button>,
    html: `<button class="Button">Discover more</button>`,
    css: `.Button {
    position: relative;
    padding: 7px 0;
    border: none;
    background: transparent;
    color: #18181b;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
.Button::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30%;
    height: 2px;
    background: #18181b;
    transition: width .25s ease;
}
.Button:hover::after {
    width: 100%;
}`,
  },
  {
    id: 1418,
    name: "Soft Blue Button",
    preview: <button className="btn-1418">Open dashboard</button>,
    html: `<button class="Button">Open dashboard</button>`,
    css: `.Button {
    padding: 10px 17px;
    border: 1px solid #bfdbfe;
    border-radius: 9px;
    background: #eff6ff;
    color: #1d4ed8;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #dbeafe;
    border-color: #93c5fd;
    transform: translateY(-1px);
}`,
  },
  {
    id: 1419,
    name: "Animated Border Button",
    preview: (
      <button className="btn-1419">
        <span>Upgrade plan</span>
      </button>
    ),
    html: `<button class="Button">
    <span>Upgrade plan</span>
</button>`,
    css: `.Button {
    position: relative;
    padding: 11px 19px;
    border: none;
    border-radius: 10px;
    background: #18181b;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    isolation: isolate;
}
.Button::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: inherit;
    background: conic-gradient(
        from 0deg,
        #ec4899,
        #8b5cf6,
        #06b6d4,
        #22c55e,
        #ec4899
    );
    animation: Button-border 3s linear infinite;
}
@keyframes Button-border {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1420,
    name: "Floating White Button",
    preview: <button className="btn-1420">View details</button>,
    html: `<button class="Button">View details</button>`,
    css: `.Button {
    padding: 11px 18px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #fff;
    color: #18181b;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0,0,0,.08);
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px rgba(0,0,0,.12);
}`,
  },
  {
    id: 1421,
    name: "Dark Icon Button",
    preview: (
      <button className="btn-1421">
        <i className="fa-solid fa-download"></i>
        Download
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-download"></i>
    Download
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #27272a;
    border-radius: 9px;
    background: #18181b;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #27272a;
    border-color: #3f3f46;
}`,
  },
  {
    id: 1422,
    name: "Rocket Gradient Button",
    preview: (
      <button className="btn-1422">
        <i className="fa-solid fa-rocket"></i>
        Launch
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-rocket"></i>
    Launch
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: none;
    border-radius: 11px;
    background: linear-gradient(135deg,#0ea5e9,#2563eb);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px) rotate(-1deg);
    box-shadow: 0 10px 24px rgba(37,99,235,.25);
}`,
  },
  {
    id: 1423,
    name: "Minimal Ghost Button",
    preview: <button className="btn-1423">Cancel</button>,
    html: `<button class="Button">Cancel</button>`,
    css: `.Button {
    padding: 9px 14px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: #71717a;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #f4f4f5;
    color: #18181b;
}`,
  },
  {
    id: 1424,
    name: "Pink Gradient Button",
    preview: <button className="btn-1424">Create account</button>,
    html: `<button class="Button">Create account</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg,#ec4899,#8b5cf6);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    filter: brightness(1.08);
    box-shadow: 0 9px 24px rgba(236,72,153,.22);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1425,
    name: "Glass Neon Button",
    preview: (
      <button className="btn-1425">
        <i className="fa-solid fa-bolt"></i>
        Power up
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Power up
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid rgba(34,211,238,.45);
    border-radius: 12px;
    background: rgba(8,47,73,.65);
    color: #67e8f9;
    backdrop-filter: blur(10px);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 0 0 18px rgba(34,211,238,.05);
    transition: .25s ease;
}
.Button:hover {
    box-shadow:
        0 0 22px rgba(34,211,238,.2),
        inset 0 0 20px rgba(34,211,238,.08);
}`,
  },
  {
    id: 1426,
    name: "Terminal Command Button",
    preview: (
      <button className="btn-1426">
        <span>$</span>
        Deploy now
      </button>
    ),
    html: `<button class="Button">
    <span>$</span>
    Deploy now
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 16px;
    border: 1px solid #27272a;
    border-radius: 7px;
    background: #09090b;
    color: #d4d4d8;
    font-family: monospace;
    font-size: 11px;
    cursor: pointer;
}
.Button > span {
    color: #22c55e;
}
.Button:hover {
    border-color: #22c55e;
    color: #fff;
    box-shadow: 0 0 14px rgba(34,197,94,.12);
}`,
  },
  {
    id: 1427,
    name: "Heart Pulse Button",
    preview: (
      <button className="btn-1427">
        <i className="fa-solid fa-heart"></i>
        Like
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-heart"></i>
    Like
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #fbcfe8;
    border-radius: 9px;
    background: #fff1f2;
    color: #db2777;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #fce7f3;
}
.Button:hover i {
    animation: Button-heart .55s ease;
}
@keyframes Button-heart {
    50% {
        transform: scale(1.35);
    }
}`,
  },
  {
    id: 1428,
    name: "Square Arrow Button",
    preview: (
      <button className="btn-1428">
        <i className="fa-solid fa-arrow-up-right"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Open">
    <i class="fa-solid fa-arrow-up-right"></i>
</button>`,
    css: `.Button {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 10px;
    background: #fff;
    color: #18181b;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #18181b;
    color: #fff;
    transform: translate(2px,-2px);
}`,
  },
  {
    id: 1429,
    name: "Blue Glass CTA",
    preview: (
      <button className="btn-1429">
        Explore now
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Explore now
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 18px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 10px;
    background: linear-gradient(
        135deg,
        rgba(59,130,246,.85),
        rgba(37,99,235,.85)
    );
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(37,99,235,.3);
}`,
  },
  {
    id: 1430,
    name: "Gold Premium Button",
    preview: (
      <button className="btn-1430">
        <i className="fa-solid fa-crown"></i>
        Premium
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-crown"></i>
    Premium
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #f59e0b;
    border-radius: 10px;
    background: linear-gradient(135deg,#f59e0b,#facc15);
    color: #451a03;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(245,158,11,.2);
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(245,158,11,.3);
}`,
  },
  {
    id: 1431,
    name: "Info Button",
    preview: (
      <button className="btn-1431">
        <i className="fa-solid fa-circle-info"></i>
        Learn more
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-circle-info"></i>
    Learn more
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #bfdbfe;
    border-radius: 9px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.Button:hover {
    background: #dbeafe;
    border-color: #93c5fd;
}`,
  },
  {
    id: 1432,
    name: "Dark Gradient Button",
    preview: <button className="btn-1432">Generate</button>,
    html: `<button class="Button">Generate</button>`,
    css: `.Button {
    padding: 11px 18px;
    border: 1px solid #3f3f46;
    border-radius: 10px;
    background: linear-gradient(135deg,#27272a,#09090b);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    border-color: #71717a;
    background: linear-gradient(135deg,#3f3f46,#18181b);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1433,
    name: "Neumorphic Button",
    preview: <button className="btn-1433">Press me</button>,
    html: `<button class="Button">Press me</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: none;
    border-radius: 12px;
    background: #e5e7eb;
    color: #374151;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    box-shadow:
        6px 6px 12px rgba(156,163,175,.45),
        -6px -6px 12px rgba(255,255,255,.9);
    transition: .2s ease;
}
.Button:hover {
    box-shadow:
        3px 3px 7px rgba(156,163,175,.45),
        -3px -3px 7px rgba(255,255,255,.9);
}
.Button:active {
    box-shadow:
        inset 4px 4px 8px rgba(156,163,175,.4),
        inset -4px -4px 8px rgba(255,255,255,.8);
}`,
  },
  {
    id: 1434,
    name: "Orange Sweep Button",
    preview: <button className="btn-1434">Read article</button>,
    html: `<button class="Button">Read article</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 18px;
    border: 1px solid #f97316;
    border-radius: 9px;
    background: transparent;
    color: #f97316;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    isolation: isolate;
}
.Button::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #f97316;
    transform: translateX(-101%);
    transition: transform .3s ease;
}
.Button:hover {
    color: #fff;
}
.Button:hover::before {
    transform: translateX(0);
}`,
  },
  {
    id: 1435,
    name: "Icon Ghost Button",
    preview: (
      <button className="btn-1435">
        <i className="fa-solid fa-share-nodes"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Share">
    <i class="fa-solid fa-share-nodes"></i>
</button>`,
    css: `.Button {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 9px;
    background: transparent;
    color: #71717a;
    cursor: pointer;
    font-size: 14px;
    transition: .2s ease;
}
.Button:hover {
    background: #f4f4f5;
    color: #18181b;
}`,
  },
  {
    id: 1436,
    name: "Gradient Text Button",
    preview: <button className="btn-1436">Explore collection</button>,
    html: `<button class="Button">Explore collection</button>`,
    css: `.Button {
    padding: 10px 3px;
    border: none;
    background: transparent;
    color: transparent;
    background-image: linear-gradient(90deg,#2563eb,#7c3aed,#ec4899);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    position: relative;
}
.Button::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 1px;
    background: linear-gradient(90deg,#2563eb,#7c3aed,#ec4899);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .25s ease;
}
.Button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}`,
  },
  {
    id: 1437,
    name: "Green Outline Button",
    preview: <button className="btn-1437">Verify account</button>,
    html: `<button class="Button">Verify account</button>`,
    css: `.Button {
    padding: 10px 17px;
    border: 1px solid #22c55e;
    border-radius: 9px;
    background: transparent;
    color: #16a34a;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #f0fdf4;
    box-shadow: 0 5px 14px rgba(34,197,94,.12);
}`,
  },
  {
    id: 1438,
    name: "Animated Arrow Button",
    preview: (
      <button className="btn-1438">
        Next step
        <span>→</span>
      </button>
    ),
    html: `<button class="Button">
    Next step
    <span>→</span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 17px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #fff;
    color: #18181b;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}
.Button span {
    transition: transform .2s ease;
}
.Button:hover span {
    transform: translateX(5px);
}`,
  },
  {
    id: 1439,
    name: "Notification Button",
    preview: (
      <button className="btn-1439">
        <i className="fa-regular fa-bell"></i>
        Notifications
        <span>4</span>
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-bell"></i>
    Notifications
    <span>4</span>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #fff;
    color: #52525b;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}
.Button > span {
    min-width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ef4444;
    color: #fff;
    font-size: 8px;
}
.Button:hover {
    border-color: #a1a1aa;
    color: #18181b;
}`,
  },
  {
    id: 1440,
    name: "Download Progress Button",
    preview: (
      <button className="btn-1440">
        <span className="btn-1440__fill"></span>
        <span className="btn-1440__text">
          <i className="fa-solid fa-download"></i>
          Downloading 68%
        </span>
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-fill"></span>
    <span class="Button-text">
        <i class="fa-solid fa-download"></i>
        Downloading 68%
    </span>
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 40px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #f4f4f5;
    color: #18181b;
    cursor: pointer;
}
.Button-fill {
    position: absolute;
    inset: 0 auto 0 0;
    width: 68%;
    background: #2563eb;
    opacity: .9;
}
.Button-text {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 100%;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 1441,
    name: "AI Spark Button",
    preview: (
      <button className="btn-1441">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        Ask AI
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Ask AI
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #c4b5fd;
    border-radius: 10px;
    background: linear-gradient(135deg,#f5f3ff,#ede9fe);
    color: #6d28d9;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button i {
    animation: Button-spark 2s ease-in-out infinite;
}
.Button:hover {
    background: linear-gradient(135deg,#ede9fe,#ddd6fe);
    transform: translateY(-2px);
}
@keyframes Button-spark {
    50% {
        transform: rotate(12deg) scale(1.12);
    }
}`,
  },
  {
    id: 1442,
    name: "Fire Gradient Button",
    preview: (
      <button className="btn-1442">
        <i className="fa-solid fa-fire"></i>
        Boost now
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-fire"></i>
    Boost now
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg,#ef4444,#f97316,#facc15);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    background-size: 200% 200%;
    transition: .25s ease;
}
.Button:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(249,115,22,.24);
}`,
  },
  {
    id: 1443,
    name: "Music Play Button",
    preview: (
      <button className="btn-1443">
        <i className="fa-solid fa-play"></i>
        Play
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-play"></i>
    Play
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 82px;
    padding: 10px 15px;
    border: none;
    border-radius: 999px;
    background: #18181b;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button i {
    font-size: 10px;
}
.Button:hover {
    background: #7c3aed;
    transform: scale(1.04);
}`,
  },
  {
    id: 1444,
    name: "Cyber Terminal Button",
    preview: (
      <button className="btn-1444">
        <span>&gt;</span>
        EXECUTE
      </button>
    ),
    html: `<button class="Button">
    <span>&gt;</span>
    EXECUTE
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #166534;
    border-radius: 4px;
    background: #020b05;
    color: #4ade80;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .2s ease;
}
.Button > span {
    color: #22c55e;
}
.Button:hover {
    background: #052e16;
    border-color: #22c55e;
    box-shadow: 0 0 16px rgba(34,197,94,.15);
}`,
  },
  {
    id: 1445,
    name: "Legendary Shimmer Button",
    preview: (
      <button className="btn-1445">
        <span>
          <i className="fa-solid fa-star"></i>
          Unlock everything
        </span>
      </button>
    ),
    html: `<button class="Button">
    <span>
        <i class="fa-solid fa-star"></i>
        Unlock everything
    </span>
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 12px 20px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 12px;
    background: linear-gradient(135deg,#111827,#312e81);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(49,46,129,.22);
}
.Button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -80%;
    width: 45%;
    height: 100%;
    background: linear-gradient(
        100deg,
        transparent,
        rgba(255,255,255,.5),
        transparent
    );
    transform: skewX(-18deg);
    animation: Button-shimmer 2.5s ease-in-out infinite;
}
.Button span {
    position: relative;
    z-index: 1;
}
.Button i {
    color: #facc15;
    margin-right: 5px;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(49,46,129,.3);
}
@keyframes Button-shimmer {
    0% {
        left: -80%;
    }
    45%,
    100% {
        left: 140%;
    }
}`,
  },
  {
    id: 1446,
    name: "Animated Circle Reveal Button",
    preview: (
      <button className="btn-1446">
        <i className="fa-solid fa-arrow-right btn-1446__arrow btn-1446__arrow--left"></i>
        <span className="btn-1446__text">Modern Button</span>
        <span className="btn-1446__circle"></span>
        <i className="fa-solid fa-arrow-right btn-1446__arrow btn-1446__arrow--right"></i>
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-right Button-arrow Button-arrow-left"></i>
    <span class="Button-text">Modern Button</span>
    <span class="Button-circle"></span>
    <i class="fa-solid fa-arrow-right Button-arrow Button-arrow-right"></i>
</button>`,
    css: `.Button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid transparent;
    border-radius: 100px;
    background: transparent;
    color: greenyellow;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 0 0 2px greenyellow;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.Button-arrow {
    position: absolute;
    width: 24px;
    z-index: 9;
    color: greenyellow;
    font-size: 18px;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.Button-arrow-left {
    left: -25%;
}
.Button-arrow-right {
    right: 16px;
}
.Button-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: greenyellow;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.Button-text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
.Button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
}
.Button:hover .Button-arrow-right {
    right: -25%;
}
.Button:hover .Button-arrow-left {
    left: 16px;
}
.Button:hover .Button-text {
    transform: translateX(12px);
}
.Button:hover .Button-arrow {
    color: #212121;
}
.Button:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 4px greenyellow;
}
.Button:hover .Button-circle {
    width: 220px;
    height: 220px;
    opacity: 1;
}`,
  },
  {
    id: 1447,
    name: "Expanding Learn More Button",
    preview: (
      <button className="btn-1447">
        <span className="btn-1447__circle" aria-hidden="true">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
        <span className="btn-1447__text">Learn More</span>
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-circle" aria-hidden="true">
        <i class="fa-solid fa-arrow-right"></i>
    </span>
    <span class="Button-text">Learn More</span>
</button>`,
    css: `.Button {
    position: relative;
    display: inline-block;
    width: 12rem;
    height: 3rem;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
    font: inherit;
    cursor: pointer;
}
.Button-circle {
    position: relative;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 1.625rem;
    background: #282936;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
.Button-circle i {
    position: absolute;
    top: 50%;
    left: .625rem;
    transform: translateY(-50%);
    color: #fff;
    font-size: .9rem;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
.Button-text {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .75rem 0;
    margin-left: 1.85rem;
    color: #282936;
    font-size: .9rem;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
.Button:hover .Button-circle {
    width: 100%;
}
.Button:hover .Button-circle i {
    transform: translate(1rem, -50%);
}
.Button:hover .Button-text {
    color: #fff;
}`,
  },
  {
    id: 1448,
    name: "Realistic Checkout Button",
    preview: (
      <button className="btn-1448">
        <i className="fa-solid fa-credit-card"></i>
        Complete purchase
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-credit-card"></i>
    Complete purchase
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-width: 180px;
    padding: 11px 18px;
    border: 1px solid #155e75;
    border-radius: 9px;
    background: linear-gradient(#0891b2, #0e7490);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.2),
        0 3px 8px rgba(14,116,144,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#06b6d4, #0891b2);
    transform: translateY(-1px);
}
.Button:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(0,0,0,.18);
}`,
  },
  {
    id: 1449,
    name: "Realistic Buy Now Button",
    preview: (
      <button className="btn-1449">
        Buy now
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Buy now
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 19px;
    border: 1px solid #b45309;
    border-radius: 8px;
    background: linear-gradient(#f59e0b, #d97706);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.25),
        0 3px 7px rgba(180,83,9,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fbbf24, #f59e0b);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.25),
        0 5px 12px rgba(180,83,9,.3);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1450,
    name: "Realistic Login Button",
    preview: <button className="btn-1450">Sign in</button>,
    html: `<button class="Button">Sign in</button>`,
    css: `.Button {
    width: 150px;
    padding: 11px 18px;
    border: 1px solid #111827;
    border-radius: 7px;
    background: linear-gradient(#374151, #111827);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.12),
        0 3px 8px rgba(17,24,39,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#4b5563, #1f2937);
}
.Button:active {
    box-shadow: inset 0 2px 4px rgba(0,0,0,.25);
}`,
  },
  {
    id: 1451,
    name: "Realistic Success Button",
    preview: (
      <button className="btn-1451">
        <i className="fa-solid fa-check"></i>
        Confirm
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check"></i>
    Confirm
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #15803d;
    border-radius: 7px;
    background: linear-gradient(#22c55e, #16a34a);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.22),
        0 3px 7px rgba(22,163,74,.22);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#4ade80, #22c55e);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1452,
    name: "Realistic Danger Button",
    preview: (
      <button className="btn-1452">
        <i className="fa-solid fa-trash"></i>
        Delete
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-trash"></i>
    Delete
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #991b1b;
    border-radius: 7px;
    background: linear-gradient(#ef4444, #b91c1c);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.18),
        0 3px 7px rgba(185,28,28,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#f87171, #dc2626);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1453,
    name: "Realistic Save Button",
    preview: (
      <button className="btn-1453">
        <i className="fa-solid fa-floppy-disk"></i>
        Save changes
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-floppy-disk"></i>
    Save changes
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #d4d4d8;
    border-radius: 7px;
    background: linear-gradient(#ffffff, #f4f4f5);
    color: #27272a;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 #fff,
        0 2px 5px rgba(0,0,0,.08);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fff,#e4e4e7);
    border-color: #a1a1aa;
}
.Button:active {
    background: #e4e4e7;
    box-shadow: inset 0 2px 4px rgba(0,0,0,.08);
}`,
  },
  {
    id: 1454,
    name: "Realistic Upload Button",
    preview: (
      <button className="btn-1454">
        <i className="fa-solid fa-cloud-arrow-up"></i>
        Upload file
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-cloud-arrow-up"></i>
    Upload file
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 18px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: linear-gradient(#fff, #f8fafc);
    color: #334155;
    font-size: 12px;
    font-weight: 600;
    box-shadow:
        inset 0 1px 0 #fff,
        0 2px 5px rgba(15,23,42,.07);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fff, #f1f5f9);
    border-color: #94a3b8;
    color: #0f172a;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1455,
    name: "Realistic Download Button",
    preview: (
      <button className="btn-1455">
        <i className="fa-solid fa-download"></i>
        Download
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-download"></i>
    Download
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
    background: linear-gradient(#f8fafc, #e2e8f0);
    color: #334155;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.9),
        0 2px 5px rgba(15,23,42,.08);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fff, #e2e8f0);
    box-shadow:
        inset 0 1px 0 #fff,
        0 4px 8px rgba(15,23,42,.12);
}
.Button:active {
    box-shadow: inset 0 2px 4px rgba(0,0,0,.12);
}`,
  },
  {
    id: 1456,
    name: "Realistic Purple CTA",
    preview: (
      <button className="btn-1456">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Get started
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 19px;
    border: 1px solid #6d28d9;
    border-radius: 8px;
    background: linear-gradient(#8b5cf6, #6d28d9);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.22),
        0 4px 9px rgba(109,40,217,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#a78bfa, #7c3aed);
    transform: translateY(-1px);
}
.Button i {
    transition: transform .2s ease;
}
.Button:hover i {
    transform: translateX(3px);
}`,
  },
  {
    id: 1457,
    name: "Realistic Blue Primary",
    preview: <button className="btn-1457">Create project</button>,
    html: `<button class="Button">Create project</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: 1px solid #1d4ed8;
    border-radius: 8px;
    background: linear-gradient(#3b82f6, #2563eb);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.2),
        0 4px 9px rgba(37,99,235,.22);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#60a5fa, #3b82f6);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1458,
    name: "Realistic Settings Button",
    preview: (
      <button className="btn-1458">
        <i className="fa-solid fa-gear"></i>
        Settings
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-gear"></i>
    Settings
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: linear-gradient(#fff,#f4f4f5);
    color: #3f3f46;
    font-size: 12px;
    font-weight: 600;
    box-shadow:
        inset 0 1px 0 #fff,
        0 2px 5px rgba(0,0,0,.07);
    cursor: pointer;
    transition: .2s ease;
}
.Button i {
    color: #71717a;
}
.Button:hover {
    background: linear-gradient(#fff,#e4e4e7);
    border-color: #a1a1aa;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1459,
    name: "Realistic Share Button",
    preview: (
      <button className="btn-1459">
        <i className="fa-solid fa-share-nodes"></i>
        Share
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-share-nodes"></i>
    Share
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #bfdbfe;
    border-radius: 8px;
    background: linear-gradient(#eff6ff,#dbeafe);
    color: #1d4ed8;
    font-size: 12px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#dbeafe,#bfdbfe);
    border-color: #93c5fd;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1460,
    name: "Realistic Add Button",
    preview: (
      <button className="btn-1460">
        <i className="fa-solid fa-plus"></i>
        Add item
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-plus"></i>
    Add item
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #52525b;
    border-radius: 7px;
    background: linear-gradient(#52525b,#27272a);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.15),
        0 3px 7px rgba(0,0,0,.2);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#71717a,#3f3f46);
}
.Button:active {
    box-shadow: inset 0 2px 4px rgba(0,0,0,.3);
}`,
  },
  {
    id: 1461,
    name: "Realistic Verified Button",
    preview: (
      <button className="btn-1461">
        <i className="fa-solid fa-circle-check"></i>
        Verified
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-circle-check"></i>
    Verified
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 15px;
    border: 1px solid #99f6e4;
    border-radius: 999px;
    background: linear-gradient(#f0fdfa,#ccfbf1);
    color: #0f766e;
    font-size: 11px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 #fff;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#ccfbf1,#99f6e4);
}
.Button i {
    color: #14b8a6;
}`,
  },
  {
    id: 1462,
    name: "Realistic Premium Button",
    preview: (
      <button className="btn-1462">
        <i className="fa-solid fa-crown"></i>
        Upgrade
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-crown"></i>
    Upgrade
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #a16207;
    border-radius: 8px;
    background: linear-gradient(#facc15,#eab308);
    color: #451a03;
    font-size: 12px;
    font-weight: 800;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.35),
        0 4px 10px rgba(234,179,8,.25);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fde047,#facc15);
    transform: translateY(-1px);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1463,
    name: "Realistic Filter Button",
    preview: (
      <button className="btn-1463">
        <i className="fa-solid fa-filter"></i>
        Filter
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-filter"></i>
    Filter
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fff;
    color: #52525b;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0,0,0,.06);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    border-color: #a1a1aa;
    background: #fafafa;
    color: #18181b;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1464,
    name: "Realistic Danger Outline",
    preview: <button className="btn-1464">Remove access</button>,
    html: `<button class="Button">Remove access</button>`,
    css: `.Button {
    padding: 10px 17px;
    border: 1px solid #fca5a5;
    border-radius: 8px;
    background: linear-gradient(#fff,#fef2f2);
    color: #b91c1c;
    font-size: 12px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 #fff;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fef2f2,#fee2e2);
    border-color: #f87171;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1465,
    name: "Realistic Neutral Pill",
    preview: <button className="btn-1465">All updates</button>,
    html: `<button class="Button">All updates</button>`,
    css: `.Button {
    padding: 9px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    background: linear-gradient(#fff,#f4f4f5);
    color: #52525b;
    font-size: 11px;
    font-weight: 600;
    box-shadow:
        inset 0 1px 0 #fff,
        0 2px 5px rgba(0,0,0,.06);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fff,#e4e4e7);
    color: #18181b;
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1466,
    name: "Realistic Message Button",
    preview: (
      <button className="btn-1466">
        <i className="fa-solid fa-message"></i>
        Send message
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-message"></i>
    Send message
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #0369a1;
    border-radius: 8px;
    background: linear-gradient(#0ea5e9,#0284c7);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.2),
        0 4px 9px rgba(2,132,199,.22);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#38bdf8,#0ea5e9);
}
.Button:active {
    transform: translateY(1px);
}`,
  },
  {
    id: 1467,
    name: "Realistic Launch Button",
    preview: (
      <button className="btn-1467">
        Launch product
        <i className="fa-solid fa-rocket"></i>
      </button>
    ),
    html: `<button class="Button">
    Launch product
    <i class="fa-solid fa-rocket"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 12px 20px;
    border: 1px solid #312e81;
    border-radius: 9px;
    background: linear-gradient(135deg,#4338ca,#7c3aed);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.18),
        0 5px 12px rgba(67,56,202,.28);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#4f46e5,#8b5cf6);
    transform: translateY(-2px);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.2),
        0 8px 18px rgba(67,56,202,.32);
}
.Button:hover i {
    transform: translateY(-2px) rotate(-8deg);
}
.Button i {
    transition: transform .25s ease;
}
.Button:active {
    transform: translateY(0);
}`,
  },
  {
    id: 1468,
    name: "Cyber Hex Play Button",
    preview: (
      <button className="btn-1468">
        <i className="fa-solid fa-play"></i>
        <span className="btn-1468__text">PLAY</span>
        <span className="btn-1468__clip">
          <span className="btn-1468__corner btn-1468__corner--left-top"></span>
          <span className="btn-1468__corner btn-1468__corner--right-top"></span>
          <span className="btn-1468__corner btn-1468__corner--left-bottom"></span>
          <span className="btn-1468__corner btn-1468__corner--right-bottom"></span>
        </span>
        <i className="fa-solid fa-angles-right btn-1468__arrow btn-1468__arrow--right"></i>
        <i className="fa-solid fa-angles-left btn-1468__arrow btn-1468__arrow--left"></i>
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-play Button-play"></i>
    <span class="Button-text">PLAY</span>

    <span class="Button-clip">
        <span class="Button-corner Button-corner-left-top"></span>
        <span class="Button-corner Button-corner-right-top"></span>
        <span class="Button-corner Button-corner-left-bottom"></span>
        <span class="Button-corner Button-corner-right-bottom"></span>
    </span>

    <i class="fa-solid fa-angles-right Button-arrow Button-arrow-right"></i>
    <i class="fa-solid fa-angles-left Button-arrow Button-arrow-left"></i>
</button>`,
    css: `.Button {
    position: relative;
    width: 11em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    outline: none;
    background: transparent;
    color: #ddebf0;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
    cursor: pointer;
    overflow: hidden;
}
.Button-play {
    position: relative;
    z-index: 4;
    font-size: 11px;
    transition: .25s ease;
}
.Button-text {
    position: relative;
    z-index: 4;
}
.Button-clip {
    --color: #2761c3;
    position: absolute;
    inset: 0;
    overflow: hidden;
    border: 5px double var(--color);
    box-shadow: inset 0 0 15px #195480;
    clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    transition: .25s ease;
}
.Button-arrow {
    position: absolute;
    z-index: 5;
    color: #2761c3;
    font-size: 10px;
    transition: .2s ease;
}
.Button-arrow-right {
    right: -12%;
}
.Button-arrow-left {
    left: -12%;
}
.Button-corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background: #2761c3;
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: .2s ease;
}
.Button-corner-left-top {
    top: -1.98em;
    left: -3em;
}
.Button-corner-right-top {
    top: -1.98em;
    left: 91%;
}
.Button-corner-left-bottom {
    top: 2.1em;
    left: -2.15em;
}
.Button-corner-right-bottom {
    top: 45%;
    left: 88%;
}
.Button:hover .Button-arrow-right {
    color: #27c39f;
    right: -15%;
    animation: Button-arrow-right 0.6s ease-in-out infinite alternate;
}
.Button:hover .Button-arrow-left {
    color: #27c39f;
    left: 103%;
    animation: Button-arrow-left 0.6s ease-in-out infinite alternate;
}
.Button:hover .Button-corner {
    transform: scale(1.25) rotate(45deg);
}
.Button:hover .Button-corner-left-top,
.Button:hover .Button-corner-right-top,
.Button:hover .Button-corner-right-bottom,
.Button:hover .Button-corner-left-bottom {
    background: #27c39f;
    box-shadow: 0 0 3px #27c39f;
}
.Button:hover .Button-clip {
    --color: #27c39f;
    animation: Button-green-light .2s ease-in-out .35s both;
}
.Button:hover .Button-play {
    color: #27c39f;
    transform: scale(1.15);
}
@keyframes Button-green-light {
    from {
        box-shadow: inset 0 0 10px #27c39f;
    }
    to {
        box-shadow: inset 0 0 32px #27c39f;
    }
}
@keyframes Button-arrow-left {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(10px);
    }
}
@keyframes Button-arrow-right {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-10px);
    }
}`,
  },
  {
    id: 1469,
    name: "Arctic Blue Button",
    preview: (
      <button className="btn-1469">
        <i className="fa-solid fa-snowflake"></i>
        Arctic
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-snowflake"></i>
    Arctic
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #7dd3fc;
    border-radius: 10px;
    background: linear-gradient(135deg,#38bdf8,#2563eb);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 6px 18px rgba(37,99,235,.25);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg,#7dd3fc,#3b82f6);
    box-shadow: 0 10px 24px rgba(56,189,248,.3);
}`,
  },
  {
    id: 1470,
    name: "Ice Crystal Button",
    preview: (
      <button className="btn-1470">
        <i className="fa-regular fa-gem"></i>
        Crystal
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-gem"></i>
    Crystal
</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid #bae6fd;
    border-radius: 11px;
    background: linear-gradient(135deg,#e0f2fe,#bae6fd);
    color: #0c4a6e;
    font-size: 12px;
    font-weight: 800;
    box-shadow: inset 0 1px 0 #fff,0 6px 15px rgba(14,165,233,.15);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#f0f9ff,#7dd3fc);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1471,
    name: "Black Ice Button",
    preview: (
      <button className="btn-1471">
        <i className="fa-solid fa-cube"></i>
        Black Ice
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-cube"></i>
    Black Ice
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #334155;
    border-radius: 10px;
    background: linear-gradient(135deg,#111827,#020617);
    color: #bae6fd;
    font-size: 12px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08),0 8px 20px rgba(0,0,0,.28);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    border-color: #38bdf8;
    color: #e0f2fe;
    box-shadow: 0 0 20px rgba(56,189,248,.18);
}`,
  },
  {
    id: 1472,
    name: "Frozen Glow Button",
    preview: <button className="btn-1472">Freeze</button>,
    html: `<button class="Button">Freeze</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid #67e8f9;
    border-radius: 999px;
    background: linear-gradient(135deg,#0ea5e9,#06b6d4);
    color: #ecfeff;
    font-size: 12px;
    font-weight: 800;
    box-shadow: 0 0 0 rgba(34,211,238,0);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    box-shadow: 0 0 24px rgba(34,211,238,.35);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1473,
    name: "Frosted Glass Button",
    preview: (
      <button className="btn-1473">
        <i className="fa-solid fa-wind"></i>
        Frosted
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wind"></i>
    Frosted
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid rgba(255,255,255,.45);
    border-radius: 12px;
    background: rgba(186,230,253,.2);
    backdrop-filter: blur(14px);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(186,230,253,.32);
    border-color: rgba(255,255,255,.7);
}`,
  },
  {
    id: 1474,
    name: "Deep Ocean Button",
    preview: (
      <button className="btn-1474">
        Dive deeper
        <i className="fa-solid fa-water"></i>
      </button>
    ),
    html: `<button class="Button">
    Dive deeper
    <i class="fa-solid fa-water"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 12px 19px;
    border: 1px solid #075985;
    border-radius: 9px;
    background: linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 7px 18px rgba(3,105,161,.25);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#075985,#0284c7,#38bdf8);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1475,
    name: "Ice Outline Button",
    preview: <button className="btn-1475">Explore</button>,
    html: `<button class="Button">Explore</button>`,
    css: `.Button {
    padding: 10px 18px;
    border: 1px solid #38bdf8;
    border-radius: 9px;
    background: transparent;
    color: #38bdf8;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(56,189,248,.1);
    color: #bae6fd;
    box-shadow: 0 0 16px rgba(56,189,248,.2);
}`,
  },
  {
    id: 1476,
    name: "Glacier Button",
    preview: (
      <button className="btn-1476">
        <i className="fa-solid fa-mountain"></i>
        Glacier
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-mountain"></i>
    Glacier
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #a5f3fc;
    border-radius: 10px;
    background: linear-gradient(135deg,#cffafe,#67e8f9,#22d3ee);
    color: #164e63;
    font-size: 12px;
    font-weight: 800;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.7),0 6px 18px rgba(34,211,238,.2);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(34,211,238,.28);
}`,
  },
  {
    id: 1477,
    name: "Midnight Frost Button",
    preview: (
      <button className="btn-1477">
        <i className="fa-solid fa-moon"></i>
        Midnight
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-moon"></i>
    Midnight
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #1e40af;
    border-radius: 10px;
    background: linear-gradient(135deg,#0f172a,#172554);
    color: #bfdbfe;
    font-size: 12px;
    font-weight: 700;
    box-shadow: inset 0 0 18px rgba(59,130,246,.08);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    border-color: #60a5fa;
    box-shadow: 0 0 22px rgba(59,130,246,.2);
}`,
  },
  {
    id: 1478,
    name: "Polar Button",
    preview: (
      <button className="btn-1478">
        <i className="fa-solid fa-location-crosshairs"></i>
        Polar
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-location-crosshairs"></i>
    Polar
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: #f8fafc;
    color: #0f172a;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 3px 10px rgba(15,23,42,.08);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #e0f2fe;
    border-color: #7dd3fc;
}`,
  },
  {
    id: 1479,
    name: "Ice Beam Button",
    preview: <button className="btn-1479">Beam</button>,
    html: `<button class="Button">Beam</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 21px;
    border: 1px solid #38bdf8;
    border-radius: 9px;
    background: #0f172a;
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
}
.Button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 45%;
    height: 100%;
    background: linear-gradient(90deg,transparent,rgba(186,230,253,.8),transparent);
    transform: skewX(-18deg);
    transition: left .45s ease;
}
.Button:hover::after {
    left: 130%;
}`,
  },
  {
    id: 1480,
    name: "Frozen Pill Button",
    preview: (
      <button className="btn-1480">
        <i className="fa-solid fa-snowflake"></i>
        Frozen
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-snowflake"></i>
    Frozen
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 19px;
    border: 1px solid #bae6fd;
    border-radius: 999px;
    background: linear-gradient(135deg,#eff6ff,#dbeafe);
    color: #1e40af;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#dbeafe,#bfdbfe);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1481,
    name: "Electric Blue Button",
    preview: (
      <button className="btn-1481">
        <i className="fa-solid fa-bolt"></i>
        Power
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Power
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #2563eb;
    border-radius: 9px;
    background: linear-gradient(135deg,#2563eb,#1d4ed8);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    box-shadow: 0 0 15px rgba(37,99,235,.18);
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#3b82f6,#2563eb);
    box-shadow: 0 0 24px rgba(59,130,246,.3);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1482,
    name: "Blue Steel Button",
    preview: <button className="btn-1482">Steel</button>,
    html: `<button class="Button">Steel</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: 1px solid #64748b;
    border-radius: 7px;
    background: linear-gradient(#475569,#1e293b);
    color: #e2e8f0;
    font-size: 12px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.14),0 4px 10px rgba(15,23,42,.22);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#64748b,#334155);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1483,
    name: "Ice Edge Button",
    preview: (
      <button className="btn-1483">
        Continue
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Continue
    <i class="fa-solid fa-chevron-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 18px;
    border: 1px solid #93c5fd;
    border-radius: 8px;
    background: #dbeafe;
    color: #1e3a8a;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #bfdbfe;
    border-color: #60a5fa;
}
.Button i {
    transition: transform .2s ease;
}
.Button:hover i {
    transform: translateX(3px);
}`,
  },
  {
    id: 1484,
    name: "Black Frost Button",
    preview: (
      <button className="btn-1484">
        <i className="fa-solid fa-lock"></i>
        Secure
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-lock"></i>
    Secure
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #475569;
    border-radius: 10px;
    background: linear-gradient(145deg,#020617,#111827);
    color: #7dd3fc;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 0 0 12px rgba(125,211,252,.05);
    transition: .25s ease;
}
.Button:hover {
    border-color: #7dd3fc;
    box-shadow: 0 0 20px rgba(125,211,252,.16);
}`,
  },
  {
    id: 1485,
    name: "Snowfall Button",
    preview: (
      <button className="btn-1485">
        <i className="fa-solid fa-snowflake"></i>
        Snowfall
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-snowflake"></i>
    Snowfall
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #7dd3fc;
    border-radius: 11px;
    background: linear-gradient(135deg,#0284c7,#0ea5e9,#38bdf8);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    filter: brightness(1.12);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1486,
    name: "Aurora Ice Button",
    preview: (
      <button className="btn-1486">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        Aurora
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Aurora
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid rgba(103,232,249,.5);
    border-radius: 10px;
    background: linear-gradient(135deg,#0ea5e9,#06b6d4,#8b5cf6);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    background-size: 200% 200%;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(6,182,212,.2);
}`,
  },
  {
    id: 1487,
    name: "Frozen Glass CTA",
    preview: (
      <button className="btn-1487">
        Get started
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    ),
    html: `<button class="Button">
    Get started
    <i class="fa-solid fa-arrow-right"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 19px;
    border: 1px solid rgba(186,230,253,.5);
    border-radius: 11px;
    background: rgba(14,165,233,.15);
    backdrop-filter: blur(16px);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(14,165,233,.3);
    transform: translateY(-2px);
}
.Button i {
    transition: transform .2s ease;
}
.Button:hover i {
    transform: translateX(3px);
}`,
  },
  {
    id: 1488,
    name: "Icy Outline Glow",
    preview: <button className="btn-1488">Glow</button>,
    html: `<button class="Button">Glow</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid #67e8f9;
    border-radius: 10px;
    background: transparent;
    color: #67e8f9;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(103,232,249,.08);
    box-shadow:
        0 0 10px rgba(103,232,249,.35),
        0 0 25px rgba(103,232,249,.12);
}`,
  },
  {
    id: 1489,
    name: "Winter Night Button",
    preview: (
      <button className="btn-1489">
        <i className="fa-solid fa-moon"></i>
        Night mode
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-moon"></i>
    Night mode
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #1e3a8a;
    border-radius: 9px;
    background: linear-gradient(135deg,#020617,#172554);
    color: #bfdbfe;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    border-color: #60a5fa;
    background: linear-gradient(135deg,#0f172a,#1e3a8a);
}`,
  },
  {
    id: 1490,
    name: "Ice Chip Button",
    preview: (
      <button className="btn-1490">
        <span></span>
        Active
      </button>
    ),
    html: `<button class="Button">
    <span></span>
    Active
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    background: #f0f9ff;
    color: #0369a1;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}
.Button span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #0ea5e9;
    box-shadow: 0 0 8px rgba(14,165,233,.6);
}
.Button:hover {
    background: #e0f2fe;
}`,
  },
  {
    id: 1491,
    name: "Glacier Glass Button",
    preview: (
      <button className="btn-1491">
        <i className="fa-solid fa-layer-group"></i>
        Layers
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-layer-group"></i>
    Layers
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid rgba(255,255,255,.35);
    border-radius: 11px;
    background: linear-gradient(135deg,rgba(255,255,255,.18),rgba(125,211,252,.12));
    backdrop-filter: blur(12px);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,rgba(255,255,255,.26),rgba(125,211,252,.2));
}`,
  },
  {
    id: 1492,
    name: "Blue Ice Action",
    preview: (
      <button className="btn-1492">
        <i className="fa-solid fa-bolt"></i>
        Activate
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-bolt"></i>
    Activate
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #1d4ed8;
    border-radius: 8px;
    background: linear-gradient(#60a5fa,#2563eb);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 5px 14px rgba(37,99,235,.25);
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#93c5fd,#3b82f6);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1493,
    name: "Black Diamond Ice",
    preview: (
      <button className="btn-1493">
        <i className="fa-regular fa-gem"></i>
        Diamond
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-gem"></i>
    Diamond
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #475569;
    border-radius: 10px;
    background: linear-gradient(145deg,#0f172a,#020617);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: inset 0 0 15px rgba(125,211,252,.05),0 8px 20px rgba(0,0,0,.28);
    transition: .25s ease;
}
.Button:hover {
    border-color: #7dd3fc;
    box-shadow: 0 0 22px rgba(125,211,252,.18);
}`,
  },
  {
    id: 1494,
    name: "Ice Select Button",
    preview: (
      <button className="btn-1494">
        Select
        <i className="fa-solid fa-chevron-down"></i>
      </button>
    ),
    html: `<button class="Button">
    Select
    <i class="fa-solid fa-chevron-down"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 10px 17px;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    background: #f0f9ff;
    color: #0c4a6e;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #e0f2fe;
    border-color: #7dd3fc;
}
.Button i {
    font-size: 9px;
}`,
  },
  {
    id: 1495,
    name: "Blue Frosted Button",
    preview: <button className="btn-1495">Continue</button>,
    html: `<button class="Button">Continue</button>`,
    css: `.Button {
    padding: 11px 20px;
    border: 1px solid rgba(147,197,253,.6);
    border-radius: 10px;
    background: rgba(59,130,246,.18);
    backdrop-filter: blur(10px);
    color: #dbeafe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(59,130,246,.28);
    border-color: #93c5fd;
    box-shadow: 0 0 18px rgba(59,130,246,.15);
}`,
  },
  {
    id: 1496,
    name: "Frozen Search Button",
    preview: (
      <button className="btn-1496">
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-magnifying-glass"></i>
    Search
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: linear-gradient(#fff,#e2e8f0);
    color: #334155;
    font-size: 11px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 #fff,0 3px 7px rgba(15,23,42,.08);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(#fff,#dbeafe);
    border-color: #93c5fd;
}`,
  },
  {
    id: 1497,
    name: "Ice Tag Button",
    preview: (
      <button className="btn-1497">
        <span>NEW</span>
        Explore
      </button>
    ),
    html: `<button class="Button">
    <span>NEW</span>
    Explore
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 13px;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    background: #f0f9ff;
    color: #0c4a6e;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}
.Button span {
    padding: 3px 5px;
    border-radius: 5px;
    background: #0ea5e9;
    color: #fff;
    font-size: 7px;
    font-weight: 800;
}
.Button:hover {
    background: #e0f2fe;
}`,
  },
  {
    id: 1498,
    name: "Deep Freeze Button",
    preview: (
      <button className="btn-1498">
        <i className="fa-solid fa-power-off"></i>
        Freeze mode
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-power-off"></i>
    Freeze mode
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #0c4a6e;
    border-radius: 9px;
    background: linear-gradient(145deg,#082f49,#0f172a);
    color: #67e8f9;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    border-color: #22d3ee;
    box-shadow: 0 0 18px rgba(34,211,238,.16);
}`,
  },
  {
    id: 1499,
    name: "Winter Sky Button",
    preview: <button className="btn-1499">Open sky</button>,
    html: `<button class="Button">Open sky</button>`,
    css: `.Button {
    padding: 11px 19px;
    border: 1px solid #7dd3fc;
    border-radius: 10px;
    background: linear-gradient(135deg,#0ea5e9,#38bdf8,#7dd3fc);
    color: #082f49;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(56,189,248,.18);
    transition: .2s ease;
}
.Button:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1500,
    name: "Black Ice CTA",
    preview: (
      <button className="btn-1500">
        <i className="fa-solid fa-arrow-right"></i>
        Enter
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-right"></i>
    Enter
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 20px;
    border: 1px solid #334155;
    border-radius: 10px;
    background: linear-gradient(135deg,#020617,#111827);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button i {
    color: #38bdf8;
    transition: transform .2s ease;
}
.Button:hover {
    border-color: #38bdf8;
    box-shadow: 0 0 20px rgba(56,189,248,.15);
}
.Button:hover i {
    transform: translateX(3px);
}`,
  },
  {
    id: 1501,
    name: "Crystal Blue Button",
    preview: (
      <button className="btn-1501">
        <i className="fa-regular fa-star"></i>
        Crystal
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-regular fa-star"></i>
    Crystal
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #bae6fd;
    border-radius: 12px;
    background: linear-gradient(135deg,rgba(224,242,254,.95),rgba(186,230,253,.7));
    color: #075985;
    font-size: 12px;
    font-weight: 800;
    box-shadow: inset 0 1px 0 #fff,0 5px 15px rgba(14,165,233,.14);
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#f0f9ff,#bae6fd);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1502,
    name: "Frozen Danger Button",
    preview: (
      <button className="btn-1502">
        <i className="fa-solid fa-ban"></i>
        Block
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-ban"></i>
    Block
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #7dd3fc;
    border-radius: 8px;
    background: linear-gradient(135deg,#082f49,#0c4a6e);
    color: #bae6fd;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    border-color: #38bdf8;
    background: linear-gradient(135deg,#0c4a6e,#075985);
}`,
  },
  {
    id: 1503,
    name: "Blue Ice Icon Button",
    preview: (
      <button className="btn-1503" aria-label="Settings">
        <i className="fa-solid fa-gear"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Settings">
    <i class="fa-solid fa-gear"></i>
</button>`,
    css: `.Button {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid #bae6fd;
    border-radius: 10px;
    background: #f0f9ff;
    color: #0369a1;
    font-size: 14px;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: #e0f2fe;
    color: #0284c7;
    transform: rotate(20deg);
}`,
  },
  {
    id: 1504,
    name: "Ice Check Button",
    preview: (
      <button className="btn-1504">
        <i className="fa-solid fa-check"></i>
        Complete
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-check"></i>
    Complete
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #67e8f9;
    border-radius: 9px;
    background: linear-gradient(135deg,#cffafe,#a5f3fc);
    color: #155e75;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#a5f3fc,#67e8f9);
    transform: translateY(-1px);
}`,
  },
  {
    id: 1505,
    name: "Frozen Glass Icon",
    preview: (
      <button className="btn-1505">
        <i className="fa-solid fa-plus"></i>
      </button>
    ),
    html: `<button class="Button" aria-label="Add">
    <i class="fa-solid fa-plus"></i>
</button>`,
    css: `.Button {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(186,230,253,.5);
    border-radius: 50%;
    background: rgba(125,211,252,.12);
    backdrop-filter: blur(12px);
    color: #e0f2fe;
    font-size: 15px;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: rgba(125,211,252,.25);
    transform: rotate(90deg) scale(1.05);
}`,
  },
  {
    id: 1506,
    name: "Arctic Action Button",
    preview: (
      <button className="btn-1506">
        <i className="fa-solid fa-compass"></i>
        Discover
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-compass"></i>
    Discover
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #60a5fa;
    border-radius: 9px;
    background: linear-gradient(135deg,#1d4ed8,#3b82f6);
    color: #eff6ff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#2563eb,#60a5fa);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59,130,246,.25);
}`,
  },
  {
    id: 1507,
    name: "Ice Shimmer Button",
    preview: <button className="btn-1507">Shimmer</button>,
    html: `<button class="Button">Shimmer</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    padding: 11px 20px;
    border: 1px solid #7dd3fc;
    border-radius: 9px;
    background: #0c4a6e;
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
}
.Button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -80%;
    width: 45%;
    height: 100%;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);
    transform: skewX(-18deg);
    animation: btn-1507-shimmer 2.5s ease-in-out infinite;
}
@keyframes btn-1507-shimmer {
    0%,45% {
        left: -80%;
    }
    100% {
        left: 140%;
    }
}`,
  },
  {
    id: 1508,
    name: "Blue Frost Gradient",
    preview: (
      <button className="btn-1508">
        Upgrade
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    ),
    html: `<button class="Button">
    Upgrade
    <i class="fa-solid fa-arrow-up"></i>
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg,#60a5fa,#38bdf8,#06b6d4);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#93c5fd,#67e8f9,#22d3ee);
    transform: translateY(-2px);
}`,
  },
  {
    id: 1509,
    name: "Black Ice Outline",
    preview: (
      <button className="btn-1509">
        <i className="fa-solid fa-terminal"></i>
        Execute
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-terminal"></i>
    Execute
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: 1px solid #38bdf8;
    border-radius: 5px;
    background: #020617;
    color: #7dd3fc;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #0c4a6e;
    color: #e0f2fe;
    box-shadow: 0 0 18px rgba(56,189,248,.2);
}`,
  },
  {
    id: 1510,
    name: "Ice Capsule Button",
    preview: <button className="btn-1510">Explore</button>,
    html: `<button class="Button">Explore</button>`,
    css: `.Button {
    padding: 10px 20px;
    border: 1px solid #93c5fd;
    border-radius: 999px;
    background: linear-gradient(135deg,#eff6ff,#dbeafe);
    color: #1e40af;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(59,130,246,.12);
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#dbeafe,#bfdbfe);
    transform: scale(1.03);
}`,
  },
  {
    id: 1511,
    name: "Polar Glow Button",
    preview: (
      <button className="btn-1511">
        <i className="fa-solid fa-lightbulb"></i>
        Illuminate
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-lightbulb"></i>
    Illuminate
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #67e8f9;
    border-radius: 10px;
    background: #082f49;
    color: #a5f3fc;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .25s ease;
}
.Button:hover {
    box-shadow: 0 0 22px rgba(103,232,249,.28);
    background: #0c4a6e;
}`,
  },
  {
    id: 1512,
    name: "Frozen Success Button",
    preview: (
      <button className="btn-1512">
        <i className="fa-solid fa-circle-check"></i>
        Approved
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-circle-check"></i>
    Approved
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #86efac;
    border-radius: 8px;
    background: linear-gradient(135deg,#ecfeff,#cffafe);
    color: #166534;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: linear-gradient(135deg,#cffafe,#a5f3fc);
}`,
  },
  {
    id: 1513,
    name: "Ice Navigation Button",
    preview: (
      <button className="btn-1513">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-arrow-left"></i>
    Back
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    background: #f0f9ff;
    color: #0369a1;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #e0f2fe;
    border-color: #7dd3fc;
}
.Button i {
    transition: transform .2s ease;
}
.Button:hover i {
    transform: translateX(-3px);
}`,
  },
  {
    id: 1514,
    name: "Black Glacier Button",
    preview: (
      <button className="btn-1514">
        <i className="fa-solid fa-mountain-sun"></i>
        Summit
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-mountain-sun"></i>
    Summit
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 19px;
    border: 1px solid #475569;
    border-radius: 10px;
    background: linear-gradient(145deg,#020617,#1e293b);
    color: #bfdbfe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: inset 0 0 14px rgba(96,165,250,.05);
    transition: .25s ease;
}
.Button:hover {
    border-color: #60a5fa;
    color: #dbeafe;
    transform: translateY(-1px);
}`,
  },
  {
    id: 1515,
    name: "Ice Diamond CTA",
    preview: (
      <button className="btn-1515">
        <i className="fa-solid fa-diamond"></i>
        Unlock
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-diamond"></i>
    Unlock
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 18px;
    border: 1px solid #c4b5fd;
    border-radius: 10px;
    background: linear-gradient(135deg,#dbeafe,#bfdbfe,#ddd6fe);
    color: #312e81;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(99,102,241,.14);
    transition: .25s ease;
}
.Button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(99,102,241,.2);
}`,
  },
  {
    id: 1516,
    name: "Frozen Command Button",
    preview: (
      <button className="btn-1516">
        <i className="fa-solid fa-terminal"></i>
        Run command
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-terminal"></i>
    Run command
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 17px;
    border: 1px solid #164e63;
    border-radius: 7px;
    background: #030712;
    color: #67e8f9;
    font-family: monospace;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
    transition: .2s ease;
}
.Button:hover {
    background: #082f49;
    border-color: #22d3ee;
    box-shadow: 0 0 16px rgba(34,211,238,.14);
}`,
  },
  {
    id: 1517,
    name: "Aurora Ice Button",
    preview: (
      <button className="btn-1517">
        <i className="fa-solid fa-star"></i>
        Explore universe
      </button>
    ),
    html: `<button class="Button">
    <i class="fa-solid fa-star"></i>
    Explore universe
</button>`,
    css: `.Button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border: 1px solid rgba(255,255,255,.22);
    border-radius: 11px;
    background: linear-gradient(135deg,#0ea5e9,#2563eb,#7c3aed);
    background-size: 180% 180%;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: .3s ease;
}
.Button:hover {
    background-position: 100% 0;
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(37,99,235,.25);
}`,
  },
  {
    id: 1518,
    name: "Legendary Black Ice Button",
    preview: (
      <button className="btn-1518">
        <span className="btn-1518__glow"></span>
        <i className="fa-solid fa-snowflake"></i>
        Enter the frozen core
      </button>
    ),
    html: `<button class="Button">
    <span class="Button-glow"></span>
    <i class="fa-solid fa-snowflake"></i>
    Enter the frozen core
</button>`,
    css: `.Button {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 13px 21px;
    border: 1px solid #38bdf8;
    border-radius: 11px;
    background: linear-gradient(135deg,#020617,#0f172a,#082f49);
    color: #e0f2fe;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow:
        inset 0 0 20px rgba(56,189,248,.05),
        0 8px 24px rgba(0,0,0,.3);
    isolation: isolate;
}
.Button-glow {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #38bdf8;
    filter: blur(28px);
    opacity: .12;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    transition: .4s ease;
    z-index: -1;
}
.Button:hover {
    border-color: #7dd3fc;
    color: #fff;
    box-shadow:
        inset 0 0 25px rgba(56,189,248,.08),
        0 0 25px rgba(56,189,248,.18);
    transform: translateY(-2px);
}
.Button:hover .Button-glow {
    left: 70%;
    opacity: .3;
}
.Button i {
    color: #67e8f9;
    transition: .3s ease;
}
.Button:hover i {
    transform: rotate(180deg);
}`,
  },

  // Plak deze entries in je buttons array in buttonData.tsx

  {
    id: 2142,
    name: "Neon Pulse",
    preview: <button className="Button2142">Click me</button>,
    html: `<button class="Button2142">Click me</button>`,
    css: `.Button2142 {
    position: relative;
    padding: 0.6em 2em;
    font-size: 15px;
    color: #0ff;
    background: transparent;
    border: 2px solid #0ff;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s;
    box-shadow: 0 0 8px #0ff, inset 0 0 8px #0ff2;
}
.Button2142:hover {
    background: #0ff;
    color: #000;
    box-shadow: 0 0 20px #0ff, 0 0 40px #0ff, inset 0 0 20px #0ff4;
}`,
  },
  {
    id: 2143,
    name: "Slide Fill",
    preview: <button className="Button2143">Click me</button>,
    html: `<button class="Button2143">Click me</button>`,
    css: `.Button2143 {
    position: relative;
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s;
    z-index: 0;
}
.Button2143::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
}
.Button2143:hover::before {
    transform: translateX(0);
}
.Button2143:hover {
    color: #000;
}`,
  },
  {
    id: 2144,
    name: "Gradient Shift",
    preview: <button className="Button2144">Click me</button>,
    html: `<button class="Button2144">Click me</button>`,
    css: `.Button2144 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
    background-size: 200% 200%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    animation: Button2144-shift 3s ease infinite;
    transition: transform 0.2s, box-shadow 0.2s;
}
@keyframes Button2144-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
.Button2144:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
}`,
  },
  {
    id: 2145,
    name: "Magnetic Border",
    preview: <button className="Button2145">Click me</button>,
    html: `<button class="Button2145">Click me</button>`,
    css: `.Button2145 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: #09090b;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    z-index: 0;
}
.Button2145::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 10px;
    background: conic-gradient(from 0deg, #6366f1, #ec4899, #f59e0b, #10b981, #6366f1);
    z-index: -1;
    animation: Button2145-spin 3s linear infinite;
}
@keyframes Button2145-spin {
    to { transform: rotate(360deg); }
}`,
  },
  {
    id: 2146,
    name: "Retro Shadow",
    preview: <button className="Button2146">Click me</button>,
    html: `<button class="Button2146">Click me</button>`,
    css: `.Button2146 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #09090b;
    background: #fde047;
    border: 2px solid #09090b;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 4px 4px 0 #09090b;
    transition: all 0.15s;
    font-weight: 700;
}
.Button2146:hover {
    box-shadow: 2px 2px 0 #09090b;
    transform: translate(2px, 2px);
}
.Button2146:active {
    box-shadow: 0 0 0 #09090b;
    transform: translate(4px, 4px);
}`,
  },
  {
    id: 2147,
    name: "Ghost Glow",
    preview: <button className="Button2147">Click me</button>,
    html: `<button class="Button2147">Click me</button>`,
    css: `.Button2147 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #a78bfa;
    background: transparent;
    border: 1px solid #a78bfa44;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    letter-spacing: 1px;
}
.Button2147:hover {
    border-color: #a78bfa;
    color: #fff;
    background: #a78bfa18;
    box-shadow: 0 0 20px #a78bfa44, inset 0 0 20px #a78bfa11;
}`,
  },
  {
    id: 2148,
    name: "Ice Button",
    preview: <button className="Button2148">Click me</button>,
    html: `<button class="Button2148">Click me</button>`,
    css: `.Button2148 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.15);
}
.Button2148:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
}`,
  },
  {
    id: 2149,
    name: "Underline Reveal",
    preview: <button className="Button2149">Click me</button>,
    html: `<button class="Button2149">Click me</button>`,
    css: `.Button2149 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
    position: relative;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.Button2149::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}
.Button2149:hover::after {
    width: 100%;
}`,
  },
  {
    id: 2150,
    name: "Pill Gradient",
    preview: <button className="Button2150">Click me</button>,
    html: `<button class="Button2150">Click me</button>`,
    css: `.Button2150 {
    padding: 0.6em 2.2em;
    font-size: 15px;
    color: #fff;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border: none;
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
}
.Button2150:hover {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
}
.Button2150:active {
    transform: translateY(0);
}`,
  },
  {
    id: 2151,
    name: "Dark Shine",
    preview: <button className="Button2151">Click me</button>,
    html: `<button class="Button2151">Click me</button>`,
    css: `.Button2151 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: #18181b;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
}
.Button2151::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -75%;
    width: 50%;
    height: 200%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
}
.Button2151:hover::before {
    left: 150%;
}
.Button2151:hover {
    border-color: #71717a;
}`,
  },
  {
    id: 2152,
    name: "Border Draw",
    preview: <button className="Button2152">Click me</button>,
    html: `<button class="Button2152">Click me</button>`,
    css: `.Button2152 {
    padding: 0.6em 2em;
    font-size: 15px;
    color: #fff;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    letter-spacing: 1px;
}
.Button2152::before,
.Button2152::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
}
.Button2152::before {
    border-top: 2px solid #6366f1;
    border-bottom: 2px solid #6366f1;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
.Button2152::after {
    border-left: 2px solid #6366f1;
    border-right: 2px solid #6366f1;
    transform: scaleY(0);
    transition: transform 0.3s ease 0.3s;
}
.Button2152:hover::before {
    transform: scaleX(1);
}
.Button2152:hover::after {
    transform: scaleY(1);
}`,
  },
];
