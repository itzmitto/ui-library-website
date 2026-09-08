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
  {
    id: 2644,
    name: "Rainbow Pulse",
    preview: (
      <button className="btn-rainbow-pulse">
        <i className="ri-magic-line"></i>
        Rainbow Pulse
      </button>
    ),
    html: `<button class="btn-rainbow-pulse"><i class="ri-magic-line"></i>Rainbow Pulse</button>`,
    css: `
.btn-rainbow-pulse {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 22px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: #111;
  font-weight: 700;
  overflow: hidden;
  isolation: isolate;
  transition: transform .25s ease;
}
.btn-rainbow-pulse::before {
  content: "";
  position: absolute;
  inset: -4px;
  z-index: -2;
  background: linear-gradient(90deg,#ff0055,#ff8a00,#ffee00,#32ff7e,#00d9ff,#7b61ff,#ff00c8,#ff0055);
  background-size: 300% 100%;
  animation: rainbowFlow2644 4s linear infinite;
  filter: blur(10px);
}
.btn-rainbow-pulse::after {
  content: "";
  position: absolute;
  inset: 2px;
  z-index: -1;
  border-radius: 12px;
  background: #111;
}
.btn-rainbow-pulse:hover {
  transform: translateY(-3px) scale(1.03);
}
.btn-rainbow-pulse i {
  font-size: 18px;
}
@keyframes rainbowFlow2644 {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
  },
  {
    id: 2645,
    name: "Aurora Glow",
    preview: (
      <button className="btn-aurora-glow">
        <i className="ri-sparkling-2-line"></i>
        Aurora
      </button>
    ),
    html: `<button class="btn-aurora-glow"><i class="ri-sparkling-2-line"></i>Aurora</button>`,
    css: `
.btn-aurora-glow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 50px;
  color: #fff;
  background: linear-gradient(120deg,#00f5ff,#7a5cff,#ff3cac,#00f5ff);
  background-size: 300% 300%;
  animation: aurora2645 6s ease infinite;
  box-shadow: 0 0 20px rgba(122,92,255,.35);
  transition: .25s ease;
}
.btn-aurora-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 35px rgba(255,60,172,.6);
}
@keyframes aurora2645 {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 2646,
    name: "Rainbow Border",
    preview: (
      <button className="btn-rainbow-border">
        <i className="ri-flashlight-line"></i>
        Launch
      </button>
    ),
    html: `<button class="btn-rainbow-border"><i class="ri-flashlight-line"></i>Launch</button>`,
    css: `
.btn-rainbow-border {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 0;
  border-radius: 13px;
  color: #fff;
  background: #0d0d12;
  isolation: isolate;
}
.btn-rainbow-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 15px;
  z-index: -2;
  background: conic-gradient(from 0deg,#ff0055,#ff9d00,#fff000,#00ff7b,#00d9ff,#6f4cff,#ff00c8,#ff0055);
  animation: spin2646 3s linear infinite;
}
.btn-rainbow-border::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 11px;
  background: #0d0d12;
  z-index: -1;
}
.btn-rainbow-border:hover {
  transform: scale(1.04);
}
@keyframes spin2646 {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 2647,
    name: "Neon Spectrum",
    preview: (
      <button className="btn-neon-spectrum">
        <i className="ri-gamepad-line"></i>
        Enter Game
      </button>
    ),
    html: `<button class="btn-neon-spectrum"><i class="ri-gamepad-line"></i>Enter Game</button>`,
    css: `
.btn-neon-spectrum {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: #fff;
  background: #080808;
  font-weight: 800;
  box-shadow: 0 0 10px #ff00aa,0 0 25px rgba(0,255,255,.4);
  animation: neonSpectrum2647 5s linear infinite;
}
@keyframes neonSpectrum2647 {
  0% { box-shadow: 0 0 10px #ff0055,0 0 25px rgba(255,0,85,.35); }
  25% { box-shadow: 0 0 10px #ffe600,0 0 25px rgba(255,230,0,.35); }
  50% { box-shadow: 0 0 10px #00ff95,0 0 25px rgba(0,255,149,.35); }
  75% { box-shadow: 0 0 10px #00c8ff,0 0 25px rgba(0,200,255,.35); }
  100% { box-shadow: 0 0 10px #ff00aa,0 0 25px rgba(255,0,170,.35); }
}
.btn-neon-spectrum:hover {
  transform: translateY(-3px);
}`,
  },
  {
    id: 2648,
    name: "Color Shift",
    preview: (
      <button className="btn-color-shift">
        <i className="ri-palette-line"></i>
        Color Shift
      </button>
    ),
    html: `<button class="btn-color-shift"><i class="ri-palette-line"></i>Color Shift</button>`,
    css: `
.btn-color-shift {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 23px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(90deg,#ff0055,#6c5ce7,#00d4ff,#00e676,#ff0055);
  background-size: 400% 100%;
  animation: colorShift2648 7s linear infinite;
  box-shadow: 0 8px 24px rgba(100,100,255,.25);
}
.btn-color-shift:hover {
  transform: translateY(-2px);
}
@keyframes colorShift2648 {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}`,
  },
  {
    id: 2649,
    name: "Rainbow Shine",
    preview: (
      <button className="btn-rainbow-shine">
        <i className="ri-sun-line"></i>
        Shine
      </button>
    ),
    html: `<button class="btn-rainbow-shine"><i class="ri-sun-line"></i>Shine</button>`,
    css: `
.btn-rainbow-shine {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 23px;
  border: 0;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  background: #171717;
  font-weight: 700;
}
.btn-rainbow-shine::before {
  content: "";
  position: absolute;
  top: -60%;
  left: -100%;
  width: 70%;
  height: 220%;
  transform: rotate(25deg);
  background: linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);
  animation: shine2649 2.4s linear infinite;
}
@keyframes shine2649 {
  0% { left: -100%; }
  100% { left: 150%; }
}`,
  },
  {
    id: 2650,
    name: "RGB Core",
    preview: (
      <button className="btn-rgb-core">
        <i className="ri-cpu-line"></i>
        RGB Core
      </button>
    ),
    html: `<button class="btn-rgb-core"><i class="ri-cpu-line"></i>RGB Core</button>`,
    css: `
.btn-rgb-core {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 2px solid transparent;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(#101010,#101010) padding-box,linear-gradient(90deg,#ff0000,#00ff00,#00aaff,#ff00ff,#ff0000) border-box;
  background-size: auto,300% 100%;
  animation: rgbCore2650 4s linear infinite;
}
@keyframes rgbCore2650 {
  to { background-position: auto,300% 0; }
}
.btn-rgb-core:hover {
  box-shadow: 0 0 24px rgba(0,220,255,.35);
  transform: scale(1.03);
}`,
  },
  {
    id: 2651,
    name: "Cosmic Gradient",
    preview: (
      <button className="btn-cosmic-gradient">
        <i className="ri-planet-line"></i>
        Explore
      </button>
    ),
    html: `<button class="btn-cosmic-gradient"><i class="ri-planet-line"></i>Explore</button>`,
    css: `
.btn-cosmic-gradient {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 23px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: radial-gradient(circle at 20% 20%,#ff00cc,transparent 35%),linear-gradient(120deg,#111,#341f71,#0b8fa8,#111);
  background-size: 180% 180%;
  animation: cosmic2651 6s ease-in-out infinite;
}
@keyframes cosmic2651 {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.btn-cosmic-gradient:hover {
  transform: translateY(-3px);
}`,
  },
  {
    id: 2652,
    name: "Prism Button",
    preview: (
      <button className="btn-prism">
        <i className="ri-prism-line"></i>
        Prism
      </button>
    ),
    html: `<button class="btn-prism"><i class="ri-prism-line"></i>Prism</button>`,
    css: `
.btn-prism {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 16px;
  color: #fff;
  background: linear-gradient(135deg,rgba(255,0,119,.35),rgba(0,238,255,.35),rgba(135,255,0,.3));
  backdrop-filter: blur(12px);
  box-shadow: inset 0 0 20px rgba(255,255,255,.08),0 0 25px rgba(114,92,255,.2);
  animation: prism2652 5s ease infinite;
  background-size: 200% 200%;
}
@keyframes prism2652 {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.btn-prism:hover {
  transform: translateY(-3px);
}`,
  },
  {
    id: 2653,
    name: "Electric Wave",
    preview: (
      <button className="btn-electric-wave">
        <i className="ri-bolt-line"></i>
        Electric
      </button>
    ),
    html: `<button class="btn-electric-wave"><i class="ri-bolt-line"></i>Electric</button>`,
    css: `
.btn-electric-wave {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 24px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(90deg,#4b00ff,#00c8ff,#7dff00,#ff00bb,#4b00ff);
  background-size: 300% 100%;
  animation: electric2653 3s linear infinite;
  box-shadow: 0 0 18px rgba(0,200,255,.4);
}
@keyframes electric2653 {
  from { background-position: 0% 50%; }
  to { background-position: 300% 50%; }
}
.btn-electric-wave:hover {
  box-shadow: 0 0 30px rgba(0,255,255,.7);
}`,
  },
  {
    id: 2654,
    name: "Hologram",
    preview: (
      <button className="btn-hologram">
        <i className="ri-hologram-2-line"></i>
        Hologram
      </button>
    ),
    html: `<button class="btn-hologram"><i class="ri-hologram-2-line"></i>Hologram</button>`,
    css: `
.btn-hologram {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 1px solid rgba(0,255,255,.45);
  border-radius: 11px;
  color: #fff;
  background: linear-gradient(115deg,rgba(0,255,255,.16),rgba(255,0,255,.18),rgba(255,255,0,.15));
  background-size: 250% 250%;
  animation: hologram2654 4s ease infinite;
  box-shadow: inset 0 0 18px rgba(0,255,255,.12),0 0 24px rgba(255,0,255,.18);
}
@keyframes hologram2654 {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.btn-hologram:hover {
  transform: translateY(-2px);
}`,
  },
  {
    id: 2655,
    name: "Rainbow Orbit",
    preview: (
      <button className="btn-rainbow-orbit">
        <i className="ri-loader-4-line"></i>
        Orbit
      </button>
    ),
    html: `<button class="btn-rainbow-orbit"><i class="ri-loader-4-line"></i>Orbit</button>`,
    css: `
.btn-rainbow-orbit {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 0;
  border-radius: 50px;
  color: #fff;
  background: #121212;
  isolation: isolate;
}
.btn-rainbow-orbit::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50px;
  z-index: -1;
  background: conic-gradient(#ff0055,#ffb300,#eeff00,#00ff9d,#00c8ff,#7b4dff,#ff00d4,#ff0055);
  animation: orbit2655 2.5s linear infinite;
}
.btn-rainbow-orbit::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 48px;
  background: #121212;
  z-index: -1;
}
@keyframes orbit2655 {
  to { transform: rotate(360deg); }
}
.btn-rainbow-orbit:hover {
  transform: scale(1.04);
}`,
  },
  {
    id: 2656,
    name: "Neon Glass",
    preview: (
      <button className="btn-neon-glass">
        <i className="ri-fire-line"></i>
        Neon Glass
      </button>
    ),
    html: `<button class="btn-neon-glass"><i class="ri-fire-line"></i>Neon Glass</button>`,
    css: `
.btn-neon-glass {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 23px;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 15px;
  color: #fff;
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(14px);
  box-shadow: 0 0 12px rgba(255,0,170,.25),inset 0 0 15px rgba(0,255,255,.08);
  animation: neonGlass2656 4s linear infinite;
}
@keyframes neonGlass2656 {
  0% { box-shadow: 0 0 12px rgba(255,0,170,.3),inset 0 0 15px rgba(0,255,255,.08); }
  50% { box-shadow: 0 0 18px rgba(0,255,255,.4),inset 0 0 15px rgba(255,255,0,.08); }
  100% { box-shadow: 0 0 12px rgba(255,0,170,.3),inset 0 0 15px rgba(0,255,255,.08); }
}
.btn-neon-glass:hover {
  transform: translateY(-3px);
}`,
  },
  {
    id: 2657,
    name: "Spectrum Fill",
    preview: (
      <button className="btn-spectrum-fill">
        <i className="ri-gradienter-line"></i>
        Spectrum
      </button>
    ),
    html: `<button class="btn-spectrum-fill"><i class="ri-gradienter-line"></i>Spectrum</button>`,
    css: `
.btn-spectrum-fill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 14px 23px;
  border: 0;
  border-radius: 9px;
  color: #fff;
  background: linear-gradient(90deg,#ff1744,#ff9100,#ffea00,#00e676,#00b0ff,#651fff,#d500f9,#ff1744);
  background-size: 500% 100%;
  animation: spectrum2657 5s linear infinite;
}
@keyframes spectrum2657 {
  from { background-position: 0% 50%; }
  to { background-position: 500% 50%; }
}
.btn-spectrum-fill:hover {
  transform: translateY(-3px);
}`,
  },
  {
    id: 2658,
    name: "Rainbow Ghost",
    preview: (
      <button className="btn-rainbow-ghost">
        <i className="ri-ghost-line"></i>
        Ghost
      </button>
    ),
    html: `<button class="btn-rainbow-ghost"><i class="ri-ghost-line"></i>Ghost</button>`,
    css: `
.btn-rainbow-ghost {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 12px;
  color: #fff;
  background: transparent;
  position: relative;
  overflow: hidden;
}
.btn-rainbow-ghost::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,transparent,#ff0055,#ffe600,#00ff88,#00d9ff,#8b5cff,#ff00c8,transparent);
  background-size: 300% 100%;
  opacity: .14;
  animation: ghost2658 3s linear infinite;
}
@keyframes ghost2658 {
  from { background-position: 0% 50%; }
  to { background-position: 300% 50%; }
}
.btn-rainbow-ghost:hover {
  border-color: rgba(255,255,255,.55);
  box-shadow: 0 0 24px rgba(255,0,200,.2);
}`,
  },
  {
    id: 2659,
    name: "Hyper Glow",
    preview: (
      <button className="btn-hyper-glow">
        <i className="ri-rocket-2-line"></i>
        Hyper
      </button>
    ),
    html: `<button class="btn-hyper-glow"><i class="ri-rocket-2-line"></i>Hyper</button>`,
    css: `
.btn-hyper-glow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 14px 24px;
  border: 0;
  border-radius: 13px;
  color: #fff;
  font-weight: 800;
  background: linear-gradient(100deg,#ff006e,#8338ec,#3a86ff,#06d6a0,#ff006e);
  background-size: 300% 100%;
  animation: hyper2659 3.5s linear infinite;
  box-shadow: 0 0 20px rgba(131,56,236,.35);
}
@keyframes hyper2659 {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
.btn-hyper-glow:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(255,0,110,.5);
}`,
  },
  {
    id: 2660,
    name: "Rainbow Matrix",
    preview: (
      <button className="btn-rainbow-matrix">
        <i className="ri-code-s-slash-line"></i>
        Matrix
      </button>
    ),
    html: `<button class="btn-rainbow-matrix"><i class="ri-code-s-slash-line"></i>Matrix</button>`,
    css: `
.btn-rainbow-matrix {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 22px;
  border: 1px solid rgba(0,255,255,.35);
  border-radius: 8px;
  color: #fff;
  background:
    linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),
    repeating-linear-gradient(90deg,#ff0055 0 4px,#ffe600 4px 8px,#00ff88 8px 12px,#00c8ff 12px 16px,#8b5cff 16px 20px);
  background-size: auto,400% 100%;
  animation: matrix2660 5s linear infinite;
}
@keyframes matrix2660 {
  to { background-position: 0 0,400% 0; }
}
.btn-rainbow-matrix:hover {
  box-shadow: 0 0 25px rgba(0,255,255,.3);
}`,
  },
  {
    id: 2661,
    name: "Flame Spectrum",
    preview: (
      <button className="btn-flame-spectrum">
        <i className="ri-fire-fill"></i>
        Ignite
      </button>
    ),
    html: `<button class="btn-flame-spectrum"><i class="ri-fire-fill"></i>Ignite</button>`,
    css: `
.btn-flame-spectrum {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 23px;
  border: 0;
  border-radius: 11px;
  color: #fff;
  background: linear-gradient(135deg,#ff003c,#ff7a00,#ffd000,#ff00b7,#ff003c);
  background-size: 300% 300%;
  animation: flame2661 4s ease infinite;
  box-shadow: 0 0 20px rgba(255,84,0,.35);
}
@keyframes flame2661 {
  0% { background-position: 0% 80%; }
  50% { background-position: 100% 20%; }
  100% { background-position: 0% 80%; }
}
.btn-flame-spectrum:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 32px rgba(255,84,0,.5);
}`,
  },
  {
    id: 2662,
    name: "Cyber Rainbow",
    preview: (
      <button className="btn-cyber-rainbow">
        <i className="ri-terminal-box-line"></i>
        Execute
      </button>
    ),
    html: `<button class="btn-cyber-rainbow"><i class="ri-terminal-box-line"></i>Execute</button>`,
    css: `
.btn-cyber-rainbow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 24px;
  border: 1px solid transparent;
  border-radius: 7px;
  color: #fff;
  background: #0b0b0f;
  isolation: isolate;
}
.btn-cyber-rainbow::before {
  content: "";
  position: absolute;
  inset: -1px;
  z-index: -1;
  background: linear-gradient(90deg,#00ffff,#ff00ff,#ffff00,#00ffff);
  background-size: 300% 100%;
  animation: cyber2662 3s linear infinite;
}
.btn-cyber-rainbow::after {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: -1;
  background: #0b0b0f;
}
@keyframes cyber2662 {
  to { background-position: 300% 0; }
}
.btn-cyber-rainbow:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(0,255,255,.25);
}`,
  },
  {
    id: 2663,
    name: "Ultimate Rainbow",
    preview: (
      <button className="btn-ultimate-rainbow">
        <i className="ri-sparkling-fill"></i>
        Ultimate
      </button>
    ),
    html: `<button class="btn-ultimate-rainbow"><i class="ri-sparkling-fill"></i>Ultimate</button>`,
    css: `
.btn-ultimate-rainbow {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 25px;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-weight: 800;
  letter-spacing: .2px;
  background: #111;
  isolation: isolate;
  overflow: hidden;
}
.btn-ultimate-rainbow::before {
  content: "";
  position: absolute;
  inset: -100%;
  z-index: -2;
  background: conic-gradient(from 0deg,#ff0055,#ff9500,#fff000,#00ff7a,#00d9ff,#634cff,#ff00d4,#ff0055);
  animation: ultimate2663 3s linear infinite;
}
.btn-ultimate-rainbow::after {
  content: "";
  position: absolute;
  inset: 2px;
  z-index: -1;
  border-radius: 13px;
  background: #111;
}
@keyframes ultimate2663 {
  to { transform: rotate(360deg); }
}
.btn-ultimate-rainbow:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 0 35px rgba(255,0,212,.4);
}
.btn-ultimate-rainbow i {
  animation: sparkle2663 1.5s ease-in-out infinite alternate;
}
@keyframes sparkle2663 {
  from { transform: scale(1) rotate(0deg); }
  to { transform: scale(1.25) rotate(12deg); }
}`,
  },
  {
    id: 2664,
    name: "Red Color Meaning",
    preview: (
      <button className="color-meaning-btn color-red">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Red</strong>
          <small>
            passion, love, anger,
            <br />
            danger, warning
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-red"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Red</strong><small>passion, love, anger,<br>danger, warning</small></span></button>`,
    css: `
.color-meaning-btn{position:relative;display:flex;align-items:center;width:156px;height:74px;padding:0 12px 0 29px;border:1px solid #3b4045;border-radius:11px;background:#202428;color:#fff;text-align:left;overflow:visible;cursor:pointer;box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 8px 20px rgba(0,0,0,.18);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
.color-meaning-btn:hover{transform:translateY(-2px);border-color:#4a5057;box-shadow:0 10px 28px rgba(0,0,0,.3)}
.color-meaning-accent{position:absolute;left:0;top:0;width:12px;height:100%;border-radius:10px 0 0 10px}
.color-meaning-content{display:flex;flex-direction:column;gap:3px;line-height:1}
.color-meaning-content strong{font-size:16px;font-weight:600;letter-spacing:-.2px}
.color-meaning-content small{font-size:9.5px;line-height:13px;color:#c2c4c7;font-weight:400}
.color-red .color-meaning-accent{background:#ff4b52;box-shadow:-10px 0 24px rgba(255,75,82,.55),6px 0 18px rgba(255,75,82,.2)}`,
  },
  {
    id: 2665,
    name: "Orange Color Meaning",
    preview: (
      <button className="color-meaning-btn color-orange">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Orange</strong>
          <small>
            warmth, energy,
            <br />
            happiness, enthusiasm
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-orange"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Orange</strong><small>warmth, energy,<br>happiness, enthusiasm</small></span></button>`,
    css: `
.color-orange .color-meaning-accent{background:#ff8a2a;box-shadow:-10px 0 24px rgba(255,138,42,.55),6px 0 18px rgba(255,138,42,.2)}`,
  },
  {
    id: 2666,
    name: "Green Color Meaning",
    preview: (
      <button className="color-meaning-btn color-green">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Green</strong>
          <small>
            nature, growth, health,
            <br />
            harmony, money
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-green"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Green</strong><small>nature, growth, health,<br>harmony, money</small></span></button>`,
    css: `
.color-green .color-meaning-accent{background:#59ed3d;box-shadow:-10px 0 24px rgba(89,237,61,.55),6px 0 18px rgba(89,237,61,.2)}`,
  },
  {
    id: 2667,
    name: "Yellow Color Meaning",
    preview: (
      <button className="color-meaning-btn color-yellow">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Yellow</strong>
          <small>
            sunshine, happiness, joy,
            <br />
            intellect, caution
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-yellow"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Yellow</strong><small>sunshine, happiness, joy,<br>intellect, caution</small></span></button>`,
    css: `
.color-yellow .color-meaning-accent{background:#ffe54a;box-shadow:-10px 0 24px rgba(255,229,74,.55),6px 0 18px rgba(255,229,74,.2)}`,
  },
  {
    id: 2668,
    name: "Blue Color Meaning",
    preview: (
      <button className="color-meaning-btn color-blue">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Blue</strong>
          <small>
            calmness, trust, loyalty,
            <br />
            wisdom, mystery
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-blue"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Blue</strong><small>calmness, trust, loyalty,<br>wisdom, mystery</small></span></button>`,
    css: `
.color-blue .color-meaning-accent{background:#42a6ff;box-shadow:-10px 0 24px rgba(66,166,255,.55),6px 0 18px rgba(66,166,255,.2)}`,
  },
  {
    id: 2669,
    name: "Purple Color Meaning",
    preview: (
      <button className="color-meaning-btn color-purple">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Purple</strong>
          <small>
            royalty, luxury, creativity,
            <br />
            spirituality, mystery
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-purple"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Purple</strong><small>royalty, luxury, creativity,<br>spirituality, mystery</small></span></button>`,
    css: `
.color-purple .color-meaning-accent{background:#6057ff;box-shadow:-10px 0 24px rgba(96,87,255,.55),6px 0 18px rgba(96,87,255,.2)}`,
  },
  {
    id: 2670,
    name: "Pink Color Meaning",
    preview: (
      <button className="color-meaning-btn color-pink">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Pink</strong>
          <small>
            innocence, femininity,
            <br />
            compassion, love
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-pink"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Pink</strong><small>innocence, femininity,<br>compassion, love</small></span></button>`,
    css: `
.color-pink .color-meaning-accent{background:#ef3fff;box-shadow:-10px 0 24px rgba(239,63,255,.55),6px 0 18px rgba(239,63,255,.2)}`,
  },
  {
    id: 2671,
    name: "Black Color Meaning",
    preview: (
      <button className="color-meaning-btn color-black">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Black</strong>
          <small>
            power, sophistication,
            <br />
            mystery, evil
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-black"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Black</strong><small>power, sophistication,<br>mystery, evil</small></span></button>`,
    css: `
.color-black .color-meaning-accent{background:#24262a;box-shadow:-10px 0 24px rgba(80,80,80,.35),6px 0 18px rgba(255,255,255,.06)}`,
  },
  {
    id: 2672,
    name: "White Color Meaning",
    preview: (
      <button className="color-meaning-btn color-white">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>White</strong>
          <small>
            purity, innocence,
            <br />
            cleanliness, peace
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-white"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>White</strong><small>purity, innocence,<br>cleanliness, peace</small></span></button>`,
    css: `
.color-white{background:#202428}
.color-white .color-meaning-accent{background:#f1f3f6;box-shadow:-10px 0 24px rgba(241,243,246,.35),6px 0 18px rgba(241,243,246,.12)}
`,
  },
  {
    id: 2673,
    name: "Brown Color Meaning",
    preview: (
      <button className="color-meaning-btn color-brown">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Brown</strong>
          <small>
            earthiness, reliability,
            <br />
            dependability, friendliness
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-brown"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Brown</strong><small>earthiness, reliability,<br>dependability, friendliness</small></span></button>`,
    css: `
.color-brown .color-meaning-accent{background:#d47722;box-shadow:-10px 0 24px rgba(212,119,34,.55),6px 0 18px rgba(212,119,34,.2)}`,
  },
  {
    id: 2674,
    name: "Silver Color Meaning",
    preview: (
      <button className="color-meaning-btn color-silver">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Silver</strong>
          <small>
            modernity, sophistication,
            <br />
            industrial, cold
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-silver"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Silver</strong><small>modernity, sophistication,<br>industrial, cold</small></span></button>`,
    css: `
.color-silver .color-meaning-accent{background:#b9beca;box-shadow:-10px 0 24px rgba(185,190,202,.38),6px 0 18px rgba(185,190,202,.16)}`,
  },
  {
    id: 2675,
    name: "Gold Color Meaning",
    preview: (
      <button className="color-meaning-btn color-gold">
        <span className="color-meaning-accent"></span>
        <span className="color-meaning-content">
          <strong>Gold</strong>
          <small>
            luxury, wealth, success,
            <br />
            prestige, glamor
          </small>
        </span>
      </button>
    ),
    html: `<button class="color-meaning-btn color-gold"><span class="color-meaning-accent"></span><span class="color-meaning-content"><strong>Gold</strong><small>luxury, wealth, success,<br>prestige, glamor</small></span></button>`,
    css: `
.color-gold .color-meaning-accent{background:#f3b31f;box-shadow:-10px 0 24px rgba(243,179,31,.55),6px 0 18px rgba(243,179,31,.2)}`,
  },
  {
    id: 2676,
    name: "Ice Element",
    preview: (
      <button className="btn-ice-element">
        <span className="ice-bg"></span>
        <span className="ice-glow ice-glow-1"></span>
        <span className="ice-glow ice-glow-2"></span>
        <span className="ice-glow ice-glow-3"></span>
        <span className="ice-particle ice-particle-1"></span>
        <span className="ice-particle ice-particle-2"></span>
        <span className="ice-particle ice-particle-3"></span>
        <span className="ice-particle ice-particle-4"></span>
        <span className="ice-particle ice-particle-5"></span>
        <span className="ice-particle ice-particle-6"></span>
        <span className="ice-particle ice-particle-7"></span>
        <span className="ice-particle ice-particle-8"></span>
        <span className="ice-particle ice-particle-9"></span>
        <span className="ice-particle ice-particle-10"></span>
        <span className="ice-particle ice-particle-11"></span>
        <span className="ice-particle ice-particle-12"></span>
        <span className="ice-crystal ice-crystal-1"></span>
        <span className="ice-crystal ice-crystal-2"></span>
        <span className="ice-crystal ice-crystal-3"></span>
        <span className="ice-crystal ice-crystal-4"></span>
        <span className="ice-crystal ice-crystal-5"></span>
        <span className="ice-shard ice-shard-1"></span>
        <span className="ice-shard ice-shard-2"></span>
        <span className="ice-shard ice-shard-3"></span>
        <span className="ice-shard ice-shard-4"></span>
        <span className="ice-ring ice-ring-1"></span>
        <span className="ice-ring ice-ring-2"></span>
        <span className="ice-ring ice-ring-3"></span>
        <span className="ice-sheen"></span>
        <span className="ice-inner"></span>
        <span className="ice-content">
          <i className="ri-snowflake-line"></i>
          <span className="ice-label">Ice Element</span>
          <span className="ice-subtitle">Frozen Core</span>
        </span>
        <span className="ice-energy"></span>
      </button>
    ),
    html: `<button class="btn-ice-element">
  <span class="ice-bg"></span>
  <span class="ice-glow ice-glow-1"></span>
  <span class="ice-glow ice-glow-2"></span>
  <span class="ice-glow ice-glow-3"></span>
  <span class="ice-particle ice-particle-1"></span>
  <span class="ice-particle ice-particle-2"></span>
  <span class="ice-particle ice-particle-3"></span>
  <span class="ice-particle ice-particle-4"></span>
  <span class="ice-particle ice-particle-5"></span>
  <span class="ice-particle ice-particle-6"></span>
  <span class="ice-particle ice-particle-7"></span>
  <span class="ice-particle ice-particle-8"></span>
  <span class="ice-particle ice-particle-9"></span>
  <span class="ice-particle ice-particle-10"></span>
  <span class="ice-particle ice-particle-11"></span>
  <span class="ice-particle ice-particle-12"></span>
  <span class="ice-crystal ice-crystal-1"></span>
  <span class="ice-crystal ice-crystal-2"></span>
  <span class="ice-crystal ice-crystal-3"></span>
  <span class="ice-crystal ice-crystal-4"></span>
  <span class="ice-crystal ice-crystal-5"></span>
  <span class="ice-shard ice-shard-1"></span>
  <span class="ice-shard ice-shard-2"></span>
  <span class="ice-shard ice-shard-3"></span>
  <span class="ice-shard ice-shard-4"></span>
  <span class="ice-ring ice-ring-1"></span>
  <span class="ice-ring ice-ring-2"></span>
  <span class="ice-ring ice-ring-3"></span>
  <span class="ice-sheen"></span>
  <span class="ice-inner"></span>
  <span class="ice-content">
    <i class="ri-snowflake-line"></i>
    <span class="ice-label">Ice Element</span>
    <span class="ice-subtitle">Frozen Core</span>
  </span>
  <span class="ice-energy"></span>
</button>`,
    css: `
.btn-ice-element {
  --ice-white: #f7fdff;
  --ice-light: #dff8ff;
  --ice-cyan: #8deeff;
  --ice-blue: #4bc8ff;
  --ice-deep: #247ac7;
  --ice-dark: #071828;
  --ice-deeper: #03101d;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 82px;
  padding: 0;
  border: 1px solid rgba(175,239,255,.4);
  border-radius: 18px;
  color: var(--ice-white);
  background:
    linear-gradient(145deg,rgba(122,224,255,.12),transparent 28%),
    linear-gradient(325deg,rgba(65,159,255,.16),transparent 45%),
    rgba(4,18,31,.94);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 2px 4px rgba(0,0,0,.35),
    0 12px 34px rgba(0,114,200,.14),
    0 0 28px rgba(57,210,255,.15);
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  transform: translateZ(0);
  transition:
    transform .4s cubic-bezier(.2,.8,.2,1),
    border-color .4s ease,
    box-shadow .4s ease,
    background .4s ease;
  -webkit-tap-highlight-color: transparent;
}
.btn-ice-element:hover {
  transform: translateY(-5px) scale(1.025);
  border-color: rgba(193,247,255,.82);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.06) inset,
    0 2px 4px rgba(0,0,0,.25),
    0 18px 45px rgba(0,114,200,.2),
    0 0 45px rgba(57,210,255,.3),
    0 0 90px rgba(74,189,255,.12);
}
.btn-ice-element:active {
  transform: translateY(-1px) scale(.99);
}
.btn-ice-element:focus-visible {
  outline: none;
  border-color: rgba(220,250,255,.95);
  box-shadow:
    0 0 0 3px rgba(93,208,255,.18),
    0 0 0 7px rgba(93,208,255,.07),
    0 0 42px rgba(93,208,255,.35);
}
.btn-ice-element::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 0;
  border-radius: 17px;
  background:
    radial-gradient(circle at 18% 15%,rgba(255,255,255,.2),transparent 14%),
    radial-gradient(circle at 80% 90%,rgba(66,179,255,.2),transparent 34%),
    radial-gradient(circle at 60% 10%,rgba(255,255,255,.06),transparent 20%);
  pointer-events: none;
}
.btn-ice-element::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 20;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.04);
  pointer-events: none;
}
.ice-bg {
  position: absolute;
  inset: -24%;
  z-index: -3;
  background:
    radial-gradient(circle at 18% 30%,rgba(60,194,255,.32),transparent 20%),
    radial-gradient(circle at 75% 22%,rgba(141,239,255,.22),transparent 19%),
    radial-gradient(circle at 55% 85%,rgba(38,127,224,.28),transparent 24%),
    conic-gradient(
      from 0deg,
      rgba(24,104,168,.25),
      rgba(135,239,255,.16),
      rgba(255,255,255,.05),
      rgba(48,157,237,.2),
      rgba(24,104,168,.25)
    );
  filter: blur(20px);
  animation: iceBackgroundShift2676 12s linear infinite;
  pointer-events: none;
}
.ice-inner {
  position: absolute;
  inset: 1px;
  z-index: 1;
  border-radius: 17px;
  background:
    linear-gradient(120deg,rgba(255,255,255,.05),transparent 18%),
    linear-gradient(300deg,rgba(54,161,225,.08),transparent 45%),
    rgba(5,22,37,.24);
  pointer-events: none;
}
.ice-glow {
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(22px);
  mix-blend-mode: screen;
}
.ice-glow-1 {
  width: 90px;
  height: 90px;
  left: -12px;
  top: -20px;
  background: rgba(104,222,255,.35);
  animation: iceGlowOne2676 5s ease-in-out infinite;
}
.ice-glow-2 {
  width: 74px;
  height: 74px;
  right: -8px;
  bottom: -16px;
  background: rgba(53,144,255,.28);
  animation: iceGlowTwo2676 6s ease-in-out infinite;
}
.ice-glow-3 {
  width: 120px;
  height: 45px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgba(184,248,255,.1);
  filter: blur(26px);
  animation: iceGlowThree2676 4s ease-in-out infinite;
}
.ice-particle {
  position: absolute;
  z-index: 5;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #e8fbff;
  box-shadow: 0 0 5px rgba(210,248,255,.95),0 0 12px rgba(113,225,255,.55);
  opacity: .6;
  pointer-events: none;
}
.ice-particle-1 {
  left: 12%;
  top: 22%;
  animation: iceParticleOne2676 4.6s ease-in-out infinite;
}
.ice-particle-2 {
  left: 20%;
  top: 68%;
  animation: iceParticleTwo2676 5.3s ease-in-out infinite;
}
.ice-particle-3 {
  left: 29%;
  top: 34%;
  animation: iceParticleThree2676 4s ease-in-out infinite;
}
.ice-particle-4 {
  left: 39%;
  top: 77%;
  animation: iceParticleFour2676 4.8s ease-in-out infinite;
}
.ice-particle-5 {
  left: 48%;
  top: 17%;
  animation: iceParticleFive2676 5.1s ease-in-out infinite;
}
.ice-particle-6 {
  left: 57%;
  top: 67%;
  animation: iceParticleSix2676 4.2s ease-in-out infinite;
}
.ice-particle-7 {
  left: 66%;
  top: 29%;
  animation: iceParticleSeven2676 5.7s ease-in-out infinite;
}
.ice-particle-8 {
  left: 76%;
  top: 72%;
  animation: iceParticleEight2676 4.5s ease-in-out infinite;
}
.ice-particle-9 {
  left: 86%;
  top: 38%;
  animation: iceParticleNine2676 5s ease-in-out infinite;
}
.ice-particle-10 {
  left: 7%;
  top: 52%;
  animation: iceParticleTen2676 4.1s ease-in-out infinite;
}
.ice-particle-11 {
  left: 92%;
  top: 60%;
  animation: iceParticleEleven2676 5.5s ease-in-out infinite;
}
.ice-particle-12 {
  left: 44%;
  top: 49%;
  width: 2px;
  height: 2px;
  animation: iceParticleTwelve2676 3.8s ease-in-out infinite;
}
.ice-crystal {
  position: absolute;
  z-index: 3;
  width: 16px;
  height: 16px;
  opacity: .45;
  pointer-events: none;
}
.ice-crystal::before,
.ice-crystal::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 18px;
  transform: translate(-50%,-50%);
  background: linear-gradient(to bottom,transparent,#effdff 22%,#8ee9ff 50%,transparent 78%);
  box-shadow: 0 0 5px rgba(178,240,255,.25);
}
.ice-crystal::after {
  transform: translate(-50%,-50%) rotate(60deg);
}
.ice-crystal-1 {
  left: 8%;
  top: 14%;
  transform: scale(.75);
  animation: iceCrystalOne2676 8s linear infinite;
}
.ice-crystal-2 {
  left: 84%;
  top: 16%;
  transform: scale(.6);
  animation: iceCrystalTwo2676 9s linear infinite reverse;
}
.ice-crystal-3 {
  left: 89%;
  top: 75%;
  transform: scale(.85);
  animation: iceCrystalThree2676 7s linear infinite;
}
.ice-crystal-4 {
  left: 7%;
  top: 73%;
  transform: scale(.55);
  animation: iceCrystalFour2676 8.5s linear infinite reverse;
}
.ice-crystal-5 {
  left: 54%;
  top: 8%;
  transform: scale(.42);
  animation: iceCrystalFive2676 6.5s linear infinite;
}
.ice-shard {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  opacity: .2;
  filter: blur(.15px);
}
.ice-shard-1 {
  left: -12px;
  bottom: 6px;
  width: 95px;
  height: 40px;
  transform: rotate(-18deg);
  background: linear-gradient(135deg,transparent 0 30%,rgba(157,240,255,.28) 31% 34%,transparent 35%);
  clip-path: polygon(0 66%,42% 0,58% 24%,100% 12%,69% 100%);
  animation: iceShardOne2676 7s ease-in-out infinite;
}
.ice-shard-2 {
  right: -15px;
  top: -4px;
  width: 84px;
  height: 48px;
  transform: rotate(28deg);
  background: linear-gradient(90deg,transparent 0 25%,rgba(255,255,255,.22) 26% 29%,transparent 30%);
  clip-path: polygon(16% 0,100% 35%,70% 62%,88% 100%,35% 58%,0 79%);
  animation: iceShardTwo2676 8s ease-in-out infinite;
}
.ice-shard-3 {
  left: 24%;
  top: -12px;
  width: 100px;
  height: 48px;
  background: linear-gradient(135deg,transparent 0 30%,rgba(116,214,255,.17) 31% 38%,transparent 39%);
  clip-path: polygon(0 28%,44% 0,72% 25%,100% 14%,70% 72%,34% 100%);
  animation: iceShardThree2676 9s ease-in-out infinite;
}
.ice-shard-4 {
  right: 17%;
  bottom: -15px;
  width: 90px;
  height: 46px;
  background: linear-gradient(145deg,transparent 0 22%,rgba(189,246,255,.13) 23% 28%,transparent 29%);
  clip-path: polygon(0 72%,34% 14%,57% 30%,100% 0,68% 100%);
  animation: iceShardFour2676 8.5s ease-in-out infinite reverse;
}
.ice-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(146,233,255,.12);
  transform: translate(-50%,-50%);
  pointer-events: none;
}
.ice-ring-1 {
  width: 178px;
  height: 54px;
  animation: iceRingOne2676 7s linear infinite;
}
.ice-ring-2 {
  width: 145px;
  height: 145px;
  border-color: rgba(137,226,255,.07);
  animation: iceRingTwo2676 10s linear infinite;
}
.ice-ring-3 {
  width: 220px;
  height: 220px;
  border-color: rgba(137,226,255,.045);
  animation: iceRingThree2676 14s linear infinite reverse;
}
.ice-sheen {
  position: absolute;
  z-index: 7;
  top: -40%;
  left: -65%;
  width: 42%;
  height: 180%;
  transform: rotate(22deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.02) 25%,
    rgba(226,252,255,.4) 48%,
    rgba(255,255,255,.08) 62%,
    transparent
  );
  filter: blur(1px);
  animation: iceSheen2676 4.8s cubic-bezier(.2,.6,.2,1) infinite;
  pointer-events: none;
}
.ice-content {
  position: relative;
  z-index: 12;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 155px;
  gap: 11px;
  transform: translateZ(20px);
  text-shadow:
    0 1px 2px rgba(0,0,0,.45),
    0 0 12px rgba(163,240,255,.24);
}
.ice-content i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  font-size: 23px;
  color: #ebfcff;
  text-shadow:
    0 0 7px rgba(220,249,255,.95),
    0 0 17px rgba(92,219,255,.62),
    0 0 28px rgba(54,178,255,.3);
  animation:
    iceIconFloat2676 3s ease-in-out infinite,
    iceIconGlow2676 2.4s ease-in-out infinite;
}
.ice-label {
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: .2px;
  color: #f4fdff;
}
.ice-subtitle {
  position: absolute;
  top: 25px;
  left: 39px;
  font-size: 7.5px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: rgba(177,235,255,.68);
}
.ice-energy {
  position: absolute;
  z-index: 8;
  left: 12%;
  right: 12%;
  bottom: 7px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(101,217,255,.1),
    rgba(223,252,255,.65),
    rgba(101,217,255,.1),
    transparent
  );
  filter: blur(.4px);
  opacity: .8;
  animation: iceEnergy2676 3.2s ease-in-out infinite;
  pointer-events: none;
}
.btn-ice-element:hover .ice-bg {
  animation-duration: 7s;
}
.btn-ice-element:hover .ice-glow-1 {
  animation-duration: 3.5s;
}
.btn-ice-element:hover .ice-glow-2 {
  animation-duration: 4.2s;
}
.btn-ice-element:hover .ice-sheen {
  animation-duration: 2.8s;
}
.btn-ice-element:hover .ice-content i {
  animation-duration: 1.8s;
}
.btn-ice-element:hover .ice-ring-1 {
  border-color: rgba(154,236,255,.25);
}
.btn-ice-element:hover .ice-ring-2 {
  border-color: rgba(154,236,255,.13);
}
@keyframes iceBackgroundShift2676 {
  0% {
    transform: translate3d(-3%,0,0) scale(1);
  }
  25% {
    transform: translate3d(2%,-2%,0) scale(1.03);
  }
  50% {
    transform: translate3d(4%,2%,0) scale(1.05);
  }
  75% {
    transform: translate3d(-1%,3%,0) scale(1.02);
  }
  100% {
    transform: translate3d(-3%,0,0) scale(1);
  }
}
@keyframes iceGlowOne2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(1);
    opacity: .65;
  }
  50% {
    transform: translate3d(22px,12px,0) scale(1.25);
    opacity: .95;
  }
}
@keyframes iceGlowTwo2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(1);
    opacity: .5;
  }
  50% {
    transform: translate3d(-20px,-14px,0) scale(1.32);
    opacity: .8;
  }
}
@keyframes iceGlowThree2676 {
  0%,
  100% {
    transform: translate(-50%,-50%) scaleX(.8);
    opacity: .25;
  }
  50% {
    transform: translate(-50%,-50%) scaleX(1.25);
    opacity: .65;
  }
}
@keyframes iceParticleOne2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .25;
  }
  50% {
    transform: translate3d(4px,-10px,0) scale(1.15);
    opacity: .9;
  }
}
@keyframes iceParticleTwo2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.8);
    opacity: .35;
  }
  50% {
    transform: translate3d(-6px,-15px,0) scale(1.05);
    opacity: .8;
  }
}
@keyframes iceParticleThree2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.6);
    opacity: .2;
  }
  50% {
    transform: translate3d(8px,8px,0) scale(1.1);
    opacity: .85;
  }
}
@keyframes iceParticleFour2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.6);
    opacity: .25;
  }
  50% {
    transform: translate3d(-4px,-11px,0) scale(1.2);
    opacity: .88;
  }
}
@keyframes iceParticleFive2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .15;
  }
  50% {
    transform: translate3d(2px,11px,0) scale(1);
    opacity: .82;
  }
}
@keyframes iceParticleSix2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .25;
  }
  50% {
    transform: translate3d(-7px,-8px,0) scale(1.12);
    opacity: .9;
  }
}
@keyframes iceParticleSeven2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .18;
  }
  50% {
    transform: translate3d(8px,-12px,0) scale(1.16);
    opacity: .84;
  }
}
@keyframes iceParticleEight2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.75);
    opacity: .28;
  }
  50% {
    transform: translate3d(-9px,8px,0) scale(1.1);
    opacity: .9;
  }
}
@keyframes iceParticleNine2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .18;
  }
  50% {
    transform: translate3d(-3px,-10px,0) scale(1.2);
    opacity: .88;
  }
}
@keyframes iceParticleTen2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .3;
  }
  50% {
    transform: translate3d(7px,8px,0) scale(1.08);
    opacity: .82;
  }
}
@keyframes iceParticleEleven2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .15;
  }
  50% {
    transform: translate3d(-8px,-9px,0) scale(1.15);
    opacity: .84;
  }
}
@keyframes iceParticleTwelve2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .1;
  }
  50% {
    transform: translate3d(6px,-12px,0) scale(1.4);
    opacity: .95;
  }
}
@keyframes iceCrystalOne2676 {
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(.75);
    opacity: .25;
  }
  50% {
    transform: translate3d(9px,5px,0) rotate(180deg) scale(.95);
    opacity: .62;
  }
  100% {
    transform: translate3d(0,0,0) rotate(360deg) scale(.75);
    opacity: .25;
  }
}
@keyframes iceCrystalTwo2676 {
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(.6);
    opacity: .2;
  }
  50% {
    transform: translate3d(-8px,10px,0) rotate(-180deg) scale(.82);
    opacity: .58;
  }
  100% {
    transform: translate3d(0,0,0) rotate(-360deg) scale(.6);
    opacity: .2;
  }
}
@keyframes iceCrystalThree2676 {
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(.85);
    opacity: .25;
  }
  50% {
    transform: translate3d(-12px,-6px,0) rotate(180deg) scale(1);
    opacity: .6;
  }
  100% {
    transform: translate3d(0,0,0) rotate(360deg) scale(.85);
    opacity: .25;
  }
}
@keyframes iceCrystalFour2676 {
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(.55);
    opacity: .14;
  }
  50% {
    transform: translate3d(7px,-7px,0) rotate(-180deg) scale(.8);
    opacity: .5;
  }
  100% {
    transform: translate3d(0,0,0) rotate(-360deg) scale(.55);
    opacity: .14;
  }
}
@keyframes iceCrystalFive2676 {
  0% {
    transform: translate3d(0,0,0) rotate(0deg) scale(.42);
    opacity: .18;
  }
  50% {
    transform: translate3d(-7px,8px,0) rotate(180deg) scale(.68);
    opacity: .48;
  }
  100% {
    transform: translate3d(0,0,0) rotate(360deg) scale(.42);
    opacity: .18;
  }
}
@keyframes iceShardOne2676 {
  0%,
  100% {
    transform: rotate(-18deg) translate3d(0,0,0);
    opacity: .16;
  }
  50% {
    transform: rotate(-12deg) translate3d(8px,-4px,0);
    opacity: .32;
  }
}
@keyframes iceShardTwo2676 {
  0%,
  100% {
    transform: rotate(28deg) translate3d(0,0,0);
    opacity: .13;
  }
  50% {
    transform: rotate(34deg) translate3d(-7px,7px,0);
    opacity: .28;
  }
}
@keyframes iceShardThree2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) rotate(0deg);
    opacity: .1;
  }
  50% {
    transform: translate3d(5px,6px,0) rotate(4deg);
    opacity: .24;
  }
}
@keyframes iceShardFour2676 {
  0%,
  100% {
    transform: translate3d(0,0,0) rotate(0deg);
    opacity: .12;
  }
  50% {
    transform: translate3d(-4px,-7px,0) rotate(-6deg);
    opacity: .25;
  }
}
@keyframes iceRingOne2676 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(1);
    opacity: .3;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.05);
    opacity: .65;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(1);
    opacity: .3;
  }
}
@keyframes iceRingTwo2676 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.9);
    opacity: .22;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1);
    opacity: .48;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.9);
    opacity: .22;
  }
}
@keyframes iceRingThree2676 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.94);
    opacity: .15;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.04);
    opacity: .3;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.94);
    opacity: .15;
  }
}
@keyframes iceSheen2676 {
  0% {
    left: -70%;
    opacity: 0;
  }
  8% {
    opacity: .05;
  }
  18% {
    opacity: .85;
  }
  33% {
    opacity: .18;
  }
  45% {
    left: 130%;
    opacity: 0;
  }
  100% {
    left: 130%;
    opacity: 0;
  }
}
@keyframes iceIconFloat2676 {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-3px) rotate(4deg);
  }
}
@keyframes iceIconGlow2676 {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.25);
  }
}
@keyframes iceEnergy2676 {
  0%,
  100% {
    transform: scaleX(.7);
    opacity: .32;
  }
  50% {
    transform: scaleX(1);
    opacity: .95;
  }
}
@media (max-width: 520px) {
  .btn-ice-element {
    width: 215px;
    height: 78px;
    border-radius: 16px;
  }
  .ice-content i {
    font-size: 21px;
  }
  .ice-label {
    font-size: 15px;
  }
  .ice-subtitle {
    top: 24px;
    left: 38px;
    font-size: 7px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn-ice-element,
  .btn-ice-element *,
  .btn-ice-element::before,
  .btn-ice-element::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`,
  },
  {
    id: 2677,
    name: "Light Element",
    preview: (
      <button className="btn-light-element">
        <span className="light-core"></span>
        <span className="light-beam light-beam-1"></span>
        <span className="light-beam light-beam-2"></span>
        <span className="light-beam light-beam-3"></span>
        <span className="light-particle light-particle-1"></span>
        <span className="light-particle light-particle-2"></span>
        <span className="light-particle light-particle-3"></span>
        <span className="light-particle light-particle-4"></span>
        <span className="light-particle light-particle-5"></span>
        <span className="light-particle light-particle-6"></span>
        <span className="light-orb light-orb-1"></span>
        <span className="light-orb light-orb-2"></span>
        <span className="light-orb light-orb-3"></span>
        <span className="light-rays light-rays-1"></span>
        <span className="light-rays light-rays-2"></span>
        <span className="light-sheen"></span>
        <span className="light-inner-glow"></span>
        <span className="light-content">
          <i className="ri-sun-line"></i>
          <span className="light-label">Light Element</span>
          <span className="light-subtitle">Radiant Core</span>
        </span>
        <span className="light-energy-line"></span>
      </button>
    ),
    html: `<button class="btn-light-element">
  <span class="light-core"></span>
  <span class="light-beam light-beam-1"></span>
  <span class="light-beam light-beam-2"></span>
  <span class="light-beam light-beam-3"></span>
  <span class="light-particle light-particle-1"></span>
  <span class="light-particle light-particle-2"></span>
  <span class="light-particle light-particle-3"></span>
  <span class="light-particle light-particle-4"></span>
  <span class="light-particle light-particle-5"></span>
  <span class="light-particle light-particle-6"></span>
  <span class="light-orb light-orb-1"></span>
  <span class="light-orb light-orb-2"></span>
  <span class="light-orb light-orb-3"></span>
  <span class="light-rays light-rays-1"></span>
  <span class="light-rays light-rays-2"></span>
  <span class="light-sheen"></span>
  <span class="light-inner-glow"></span>
  <span class="light-content">
    <i class="ri-sun-line"></i>
    <span class="light-label">Light Element</span>
    <span class="light-subtitle">Radiant Core</span>
  </span>
  <span class="light-energy-line"></span>
</button>`,
    css: `
.btn-light-element {
  --light-white: #ffffff;
  --light-soft: #fffdf2;
  --light-yellow: #ffe98a;
  --light-gold: #ffc83d;
  --light-orange: #ffad32;
  --light-deep: #d98b13;
  --light-dark: #201508;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 82px;
  padding: 0;
  border: 1px solid rgba(255,224,135,.42);
  border-radius: 18px;
  color: var(--light-white);
  background:
    radial-gradient(circle at 18% 42%,rgba(255,224,112,.12),transparent 23%),
    radial-gradient(circle at 85% 60%,rgba(255,185,45,.1),transparent 26%),
    linear-gradient(145deg,rgba(255,241,175,.06),transparent 35%),
    linear-gradient(325deg,rgba(255,170,40,.09),transparent 44%),
    rgba(25,19,10,.96);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    inset 0 0 0 1px rgba(255,207,75,.035),
    0 2px 5px rgba(0,0,0,.35),
    0 12px 35px rgba(255,173,42,.08),
    0 0 28px rgba(255,208,88,.1);
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  transform: translateZ(0);
  transition:
    transform .4s cubic-bezier(.2,.8,.2,1),
    border-color .4s ease,
    box-shadow .4s ease,
    background .4s ease;
}
.btn-light-element:hover {
  transform: translateY(-5px) scale(1.025);
  border-color: rgba(255,239,178,.8);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.09),
    0 3px 7px rgba(0,0,0,.28),
    0 18px 46px rgba(255,171,28,.13),
    0 0 45px rgba(255,211,88,.25),
    0 0 90px rgba(255,181,39,.1);
}
.btn-light-element:active {
  transform: translateY(-1px) scale(.99);
}
.btn-light-element:focus-visible {
  outline: none;
  border-color: rgba(255,248,214,.96);
  box-shadow:
    0 0 0 3px rgba(255,216,93,.18),
    0 0 0 7px rgba(255,216,93,.07),
    0 0 42px rgba(255,220,116,.3);
}
.btn-light-element::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 0;
  border-radius: 17px;
  background:
    radial-gradient(circle at 23% 30%,rgba(255,255,255,.17),transparent 15%),
    radial-gradient(circle at 78% 80%,rgba(255,213,111,.1),transparent 28%),
    linear-gradient(120deg,rgba(255,255,255,.025),transparent 32%);
  pointer-events: none;
}
.btn-light-element::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 30;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.045);
  pointer-events: none;
}
.light-core {
  position: absolute;
  z-index: -3;
  left: 50%;
  top: 50%;
  width: 110px;
  height: 110px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,
      rgba(255,255,255,1) 0%,
      rgba(255,249,205,.98) 12%,
      rgba(255,229,119,.76) 23%,
      rgba(255,189,47,.34) 39%,
      rgba(255,152,26,.12) 59%,
      transparent 73%
    );
  filter: blur(1px);
  opacity: .82;
  animation: lightCore2677 4.5s ease-in-out infinite;
  pointer-events: none;
}
.light-inner-glow {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 145px;
  height: 55px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    rgba(255,247,193,.16),
    rgba(255,207,76,.09) 35%,
    transparent 70%
  );
  filter: blur(17px);
  animation: lightInner2677 3.8s ease-in-out infinite;
  pointer-events: none;
}
.light-beam {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  filter: blur(10px);
  transform-origin: center;
  opacity: .24;
}
.light-beam-1 {
  width: 210px;
  height: 32px;
  left: 12px;
  top: 22px;
  transform: rotate(-7deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,239,181,.12) 26%,
    rgba(255,235,139,.5) 48%,
    rgba(255,239,181,.12) 72%,
    transparent
  );
  animation: lightBeamOne2677 5.5s ease-in-out infinite;
}
.light-beam-2 {
  width: 210px;
  height: 27px;
  left: 12px;
  top: 34px;
  transform: rotate(7deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,211,84,.08) 22%,
    rgba(255,232,141,.36) 50%,
    rgba(255,211,84,.08) 78%,
    transparent
  );
  animation: lightBeamTwo2677 6.5s ease-in-out infinite;
}
.light-beam-3 {
  width: 185px;
  height: 18px;
  left: 25px;
  top: 31px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.09),
    rgba(255,234,154,.24),
    rgba(255,255,255,.09),
    transparent
  );
  filter: blur(5px);
  animation: lightBeamThree2677 4s ease-in-out infinite;
}
.light-particle {
  position: absolute;
  z-index: 7;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #fffef0;
  box-shadow:
    0 0 4px rgba(255,255,255,.95),
    0 0 11px rgba(255,224,105,.75),
    0 0 20px rgba(255,190,50,.3);
  opacity: .4;
  pointer-events: none;
}
.light-particle-1 {
  left: 9%;
  top: 25%;
  animation: lightParticleOne2677 4.2s ease-in-out infinite;
}
.light-particle-2 {
  left: 18%;
  top: 67%;
  animation: lightParticleTwo2677 5.1s ease-in-out infinite;
}
.light-particle-3 {
  left: 29%;
  top: 17%;
  animation: lightParticleThree2677 4.7s ease-in-out infinite;
}
.light-particle-4 {
  left: 39%;
  top: 76%;
  animation: lightParticleFour2677 5.6s ease-in-out infinite;
}
.light-particle-5 {
  left: 53%;
  top: 20%;
  animation: lightParticleFive2677 4.4s ease-in-out infinite;
}
.light-particle-6 {
  left: 72%;
  top: 69%;
  animation: lightParticleSix2677 5.2s ease-in-out infinite;
}
.light-orb {
  position: absolute;
  z-index: 6;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle at 35% 30%,#fffef2,rgba(255,226,109,.72) 35%,rgba(255,165,27,.08) 70%,transparent 74%);
  box-shadow:
    0 0 7px rgba(255,246,198,.8),
    0 0 20px rgba(255,204,78,.4);
}
.light-orb-1 {
  width: 7px;
  height: 7px;
  left: 21%;
  top: 31%;
  animation: lightOrbOne2677 5s linear infinite;
}
.light-orb-2 {
  width: 5px;
  height: 5px;
  left: 78%;
  top: 35%;
  animation: lightOrbTwo2677 6s linear infinite reverse;
}
.light-orb-3 {
  width: 4px;
  height: 4px;
  left: 68%;
  top: 73%;
  animation: lightOrbThree2677 4.7s linear infinite;
}
.light-rays {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
}
.light-rays-1 {
  width: 190px;
  height: 190px;
  background:
    repeating-conic-gradient(
      from 0deg,
      rgba(255,240,174,.11) 0deg,
      rgba(255,240,174,.11) 1deg,
      transparent 1deg,
      transparent 22deg
    );
  mask-image: radial-gradient(circle,transparent 0 28%,#000 55%,transparent 79%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 28%,#000 55%,transparent 79%);
  animation: lightRaysOne2677 16s linear infinite;
  opacity: .26;
}
.light-rays-2 {
  width: 245px;
  height: 245px;
  background:
    repeating-conic-gradient(
      from 9deg,
      rgba(255,203,75,.08) 0deg,
      rgba(255,203,75,.08) 2deg,
      transparent 2deg,
      transparent 34deg
    );
  mask-image: radial-gradient(circle,transparent 0 33%,#000 52%,transparent 77%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 33%,#000 52%,transparent 77%);
  animation: lightRaysTwo2677 21s linear infinite reverse;
  opacity: .2;
}
.light-sheen {
  position: absolute;
  z-index: 15;
  top: -40%;
  left: -60%;
  width: 36%;
  height: 180%;
  transform: rotate(21deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.025) 25%,
    rgba(255,248,220,.55) 48%,
    rgba(255,255,255,.08) 63%,
    transparent
  );
  filter: blur(1px);
  animation: lightSheen2677 5s cubic-bezier(.2,.65,.2,1) infinite;
  pointer-events: none;
}
.light-content {
  position: relative;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 162px;
  gap: 11px;
  transform: translateZ(20px);
  text-shadow:
    0 1px 3px rgba(0,0,0,.5),
    0 0 12px rgba(255,224,122,.25);
}
.light-content i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  font-size: 23px;
  color: #fffef2;
  text-shadow:
    0 0 7px rgba(255,255,255,.95),
    0 0 16px rgba(255,220,97,.76),
    0 0 28px rgba(255,173,35,.35);
  animation:
    lightIconFloat2677 3s ease-in-out infinite,
    lightIconPulse2677 2.2s ease-in-out infinite;
}
.light-label {
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: .15px;
  color: #fffef8;
}
.light-subtitle {
  position: absolute;
  left: 40px;
  top: 25px;
  font-size: 7.5px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 2.05px;
  text-transform: uppercase;
  color: rgba(255,228,139,.64);
}
.light-energy-line {
  position: absolute;
  z-index: 9;
  left: 12%;
  right: 12%;
  bottom: 7px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,231,151,.08),
    rgba(255,251,228,.72),
    rgba(255,231,151,.08),
    transparent
  );
  filter: blur(.35px);
  opacity: .75;
  animation: lightEnergy2677 3s ease-in-out infinite;
  pointer-events: none;
}
.btn-light-element:hover .light-core {
  animation-duration: 3.2s;
}
.btn-light-element:hover .light-beam-1 {
  animation-duration: 4s;
}
.btn-light-element:hover .light-beam-2 {
  animation-duration: 4.5s;
}
.btn-light-element:hover .light-sheen {
  animation-duration: 2.9s;
}
.btn-light-element:hover .light-content i {
  animation-duration: 1.9s;
}
.btn-light-element:hover .light-rays-1 {
  opacity: .38;
}
.btn-light-element:hover .light-rays-2 {
  opacity: .28;
}
@keyframes lightCore2677 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.9);
    opacity: .62;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.14);
    opacity: .95;
  }
}
@keyframes lightInner2677 {
  0%,
  100% {
    transform: translate(-50%,-50%) scaleX(.75);
    opacity: .22;
  }
  50% {
    transform: translate(-50%,-50%) scaleX(1.15);
    opacity: .58;
  }
}
@keyframes lightBeamOne2677 {
  0%,
  100% {
    transform: translateX(-10px) rotate(-7deg) scaleX(.88);
    opacity: .13;
  }
  50% {
    transform: translateX(15px) rotate(-4deg) scaleX(1.08);
    opacity: .46;
  }
}
@keyframes lightBeamTwo2677 {
  0%,
  100% {
    transform: translateX(8px) rotate(7deg) scaleX(.84);
    opacity: .1;
  }
  50% {
    transform: translateX(-13px) rotate(4deg) scaleX(1.04);
    opacity: .36;
  }
}
@keyframes lightBeamThree2677 {
  0%,
  100% {
    transform: translateX(-8px) scaleX(.7);
    opacity: .14;
  }
  50% {
    transform: translateX(11px) scaleX(1.1);
    opacity: .38;
  }
}
@keyframes lightParticleOne2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.6);
    opacity: .2;
  }
  50% {
    transform: translate3d(4px,-11px,0) scale(1.15);
    opacity: .85;
  }
}
@keyframes lightParticleTwo2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .18;
  }
  50% {
    transform: translate3d(-8px,-8px,0) scale(1.08);
    opacity: .78;
  }
}
@keyframes lightParticleThree2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .16;
  }
  50% {
    transform: translate3d(8px,7px,0) scale(1.18);
    opacity: .84;
  }
}
@keyframes lightParticleFour2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .22;
  }
  50% {
    transform: translate3d(-6px,-13px,0) scale(1.05);
    opacity: .82;
  }
}
@keyframes lightParticleFive2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .12;
  }
  50% {
    transform: translate3d(3px,10px,0) scale(1.16);
    opacity: .88;
  }
}
@keyframes lightParticleSix2677 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.65);
    opacity: .18;
  }
  50% {
    transform: translate3d(-9px,-9px,0) scale(1.12);
    opacity: .85;
  }
}
@keyframes lightOrbOne2677 {
  0% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .25;
  }
  25% {
    transform: translate3d(12px,-7px,0) scale(1);
    opacity: .7;
  }
  50% {
    transform: translate3d(20px,6px,0) scale(.85);
    opacity: .48;
  }
  75% {
    transform: translate3d(7px,13px,0) scale(1.1);
    opacity: .72;
  }
  100% {
    transform: translate3d(0,0,0) scale(.7);
    opacity: .25;
  }
}
@keyframes lightOrbTwo2677 {
  0% {
    transform: translate3d(0,0,0) scale(.65);
    opacity: .2;
  }
  50% {
    transform: translate3d(-17px,7px,0) scale(1.15);
    opacity: .7;
  }
  100% {
    transform: translate3d(0,0,0) scale(.65);
    opacity: .2;
  }
}
@keyframes lightOrbThree2677 {
  0% {
    transform: translate3d(0,0,0) scale(.6);
    opacity: .18;
  }
  50% {
    transform: translate3d(8px,-12px,0) scale(1.05);
    opacity: .76;
  }
  100% {
    transform: translate3d(0,0,0) scale(.6);
    opacity: .18;
  }
}
@keyframes lightRaysOne2677 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes lightRaysTwo2677 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-360deg);
  }
}
@keyframes lightSheen2677 {
  0% {
    left: -65%;
    opacity: 0;
  }
  9% {
    opacity: .05;
  }
  18% {
    opacity: .75;
  }
  32% {
    opacity: .16;
  }
  46% {
    left: 132%;
    opacity: 0;
  }
  100% {
    left: 132%;
    opacity: 0;
  }
}
@keyframes lightIconFloat2677 {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-3px) rotate(-5deg);
  }
}
@keyframes lightIconPulse2677 {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.3);
  }
}
@keyframes lightEnergy2677 {
  0%,
  100% {
    transform: scaleX(.68);
    opacity: .25;
  }
  50% {
    transform: scaleX(1);
    opacity: .9;
  }
}
@media (max-width: 520px) {
  .btn-light-element {
    width: 215px;
    height: 78px;
    border-radius: 16px;
  }
  .light-content i {
    font-size: 21px;
  }
  .light-label {
    font-size: 15px;
  }
  .light-subtitle {
    left: 38px;
    top: 24px;
    font-size: 7px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn-light-element,
  .btn-light-element *,
  .btn-light-element::before,
  .btn-light-element::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`,
  },
  {
    id: 2678,
    name: "Mega Energy Button",
    preview: (
      <div className="mega-energy-demo">
        <div className="mega-energy-wrapper">
          <button className="mega-energy-button">
            <span className="mega-energy-background"></span>
            <span className="mega-energy-glow mega-energy-glow-1"></span>
            <span className="mega-energy-glow mega-energy-glow-2"></span>
            <span className="mega-energy-glow mega-energy-glow-3"></span>
            <span className="mega-energy-aura"></span>
            <span className="mega-energy-pulse mega-energy-pulse-1"></span>
            <span className="mega-energy-pulse mega-energy-pulse-2"></span>
            <span className="mega-energy-pulse mega-energy-pulse-3"></span>
            <span className="mega-energy-particles">
              <span className="mega-energy-particle mega-energy-particle-1"></span>
              <span className="mega-energy-particle mega-energy-particle-2"></span>
              <span className="mega-energy-particle mega-energy-particle-3"></span>
              <span className="mega-energy-particle mega-energy-particle-4"></span>
              <span className="mega-energy-particle mega-energy-particle-5"></span>
              <span className="mega-energy-particle mega-energy-particle-6"></span>
              <span className="mega-energy-particle mega-energy-particle-7"></span>
              <span className="mega-energy-particle mega-energy-particle-8"></span>
              <span className="mega-energy-particle mega-energy-particle-9"></span>
              <span className="mega-energy-particle mega-energy-particle-10"></span>
              <span className="mega-energy-particle mega-energy-particle-11"></span>
              <span className="mega-energy-particle mega-energy-particle-12"></span>
            </span>
            <span className="mega-energy-grid"></span>
            <span className="mega-energy-lines"></span>
            <span className="mega-energy-ring mega-energy-ring-1"></span>
            <span className="mega-energy-ring mega-energy-ring-2"></span>
            <span className="mega-energy-ring mega-energy-ring-3"></span>
            <span className="mega-energy-core">
              <span className="mega-energy-core-inner"></span>
              <span className="mega-energy-core-light"></span>
            </span>
            <span className="mega-energy-shine"></span>
            <span className="mega-energy-border"></span>
            <span className="mega-energy-content">
              <i className="ri-flashlight-fill"></i>
              <span className="mega-energy-text">MEGA POWER</span>
              <span className="mega-energy-subtext">ENERGY ONLINE</span>
            </span>
            <span className="mega-energy-scan"></span>
          </button>
        </div>
        <div className="mega-energy-stats">
          <div className="mega-energy-stat">
            <span className="mega-energy-stat-label">POWER</span>
            <span className="mega-energy-stat-value">100%</span>
          </div>
          <div className="mega-energy-stat">
            <span className="mega-energy-stat-label">ENERGY</span>
            <span className="mega-energy-stat-value">MAX</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="mega-energy-demo">
  <div class="mega-energy-wrapper">
    <button class="mega-energy-button">
      <span class="mega-energy-background"></span>
      <span class="mega-energy-glow mega-energy-glow-1"></span>
      <span class="mega-energy-glow mega-energy-glow-2"></span>
      <span class="mega-energy-glow mega-energy-glow-3"></span>
      <span class="mega-energy-aura"></span>
      <span class="mega-energy-pulse mega-energy-pulse-1"></span>
      <span class="mega-energy-pulse mega-energy-pulse-2"></span>
      <span class="mega-energy-pulse mega-energy-pulse-3"></span>
      <span class="mega-energy-particles">
        <span class="mega-energy-particle mega-energy-particle-1"></span>
        <span class="mega-energy-particle mega-energy-particle-2"></span>
        <span class="mega-energy-particle mega-energy-particle-3"></span>
        <span class="mega-energy-particle mega-energy-particle-4"></span>
        <span class="mega-energy-particle mega-energy-particle-5"></span>
        <span class="mega-energy-particle mega-energy-particle-6"></span>
        <span class="mega-energy-particle mega-energy-particle-7"></span>
        <span class="mega-energy-particle mega-energy-particle-8"></span>
        <span class="mega-energy-particle mega-energy-particle-9"></span>
        <span class="mega-energy-particle mega-energy-particle-10"></span>
        <span class="mega-energy-particle mega-energy-particle-11"></span>
        <span class="mega-energy-particle mega-energy-particle-12"></span>
      </span>
      <span class="mega-energy-grid"></span>
      <span class="mega-energy-lines"></span>
      <span class="mega-energy-ring mega-energy-ring-1"></span>
      <span class="mega-energy-ring mega-energy-ring-2"></span>
      <span class="mega-energy-ring mega-energy-ring-3"></span>
      <span class="mega-energy-core">
        <span class="mega-energy-core-inner"></span>
        <span class="mega-energy-core-light"></span>
      </span>
      <span class="mega-energy-shine"></span>
      <span class="mega-energy-border"></span>
      <span class="mega-energy-content">
        <i class="ri-flashlight-fill"></i>
        <span class="mega-energy-text">MEGA POWER</span>
        <span class="mega-energy-subtext">ENERGY ONLINE</span>
      </span>
      <span class="mega-energy-scan"></span>
    </button>
  </div>
  <div class="mega-energy-stats">
    <div class="mega-energy-stat">
      <span class="mega-energy-stat-label">POWER</span>
      <span class="mega-energy-stat-value">100%</span>
    </div>
    <div class="mega-energy-stat">
      <span class="mega-energy-stat-label">ENERGY</span>
      <span class="mega-energy-stat-value">MAX</span>
    </div>
  </div>
</div>`,
    css: `
.mega-energy-demo{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:26px;width:100%;min-height:310px;padding:30px;overflow:hidden;background:radial-gradient(circle at 50% 45%,rgba(0,224,255,.08),transparent 30%),linear-gradient(135deg,#050914 0%,#091428 48%,#050b18 100%);border-radius:20px}
.mega-energy-demo::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 30%,rgba(0,255,179,.07),transparent 24%),radial-gradient(circle at 80% 70%,rgba(81,77,255,.08),transparent 28%);animation:megaEnergyBg2678 12s ease-in-out infinite}
.mega-energy-demo::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent 0%,rgba(255,255,255,.025) 48%,transparent 52%);background-size:220% 100%;animation:megaEnergySweep2678 8s linear infinite}
.mega-energy-wrapper{position:relative;z-index:5;display:flex;align-items:center;justify-content:center;perspective:1200px}
.mega-energy-button{position:relative;width:300px;height:120px;border:0;background:transparent;color:#fff;border-radius:20px;cursor:pointer;overflow:visible;isolation:isolate;transform-style:preserve-3d;transition:transform .35s cubic-bezier(.2,.8,.2,1),filter .35s ease}
.mega-energy-button:hover{transform:translateY(-7px) scale(1.045) rotateX(2deg);filter:brightness(1.1)}
.mega-energy-button:active{transform:translateY(-1px) scale(.985)}
.mega-energy-button:focus-visible{outline:none}
.mega-energy-button:focus-visible .mega-energy-border{box-shadow:0 0 0 4px rgba(0,232,255,.16),0 0 45px rgba(0,232,255,.42)}
.mega-energy-background{position:absolute;inset:8px;z-index:1;border-radius:17px;background:linear-gradient(135deg,rgba(0,255,170,.08),rgba(0,189,255,.11) 32%,rgba(71,74,255,.12) 60%,rgba(225,0,255,.08));background-size:300% 300%;animation:megaEnergyGradient2678 5s ease infinite;box-shadow:inset 0 0 28px rgba(0,225,255,.08)}
.mega-energy-glow{position:absolute;border-radius:50%;pointer-events:none;filter:blur(28px);mix-blend-mode:screen}
.mega-energy-glow-1{width:230px;height:105px;left:35px;top:8px;background:radial-gradient(ellipse,rgba(0,255,160,.38),rgba(0,221,255,.16) 42%,transparent 72%);animation:megaEnergyGlowOne2678 3.5s ease-in-out infinite}
.mega-energy-glow-2{width:180px;height:90px;left:60px;top:22px;background:radial-gradient(ellipse,rgba(28,143,255,.26),rgba(116,63,255,.16) 48%,transparent 76%);animation:megaEnergyGlowTwo2678 4.2s ease-in-out infinite}
.mega-energy-glow-3{width:130px;height:65px;left:88px;top:32px;background:radial-gradient(ellipse,rgba(255,48,220,.2),transparent 72%);animation:megaEnergyGlowThree2678 3s ease-in-out infinite}
.mega-energy-aura{position:absolute;left:50%;top:50%;width:330px;height:155px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(ellipse,rgba(0,229,255,.16),rgba(0,173,255,.06) 44%,transparent 72%);filter:blur(22px);z-index:0;animation:megaEnergyAura2678 4s ease-in-out infinite}
.mega-energy-pulse{position:absolute;left:50%;top:50%;width:280px;height:106px;transform:translate(-50%,-50%);border:1px solid rgba(0,229,255,.35);border-radius:20px;z-index:0;pointer-events:none}
.mega-energy-pulse-1{animation:megaEnergyPulseOne2678 2.4s ease-out infinite}
.mega-energy-pulse-2{animation:megaEnergyPulseTwo2678 2.4s ease-out .8s infinite}
.mega-energy-pulse-3{animation:megaEnergyPulseThree2678 2.4s ease-out 1.6s infinite}
.mega-energy-particles{position:absolute;inset:-24px;z-index:6;pointer-events:none}
.mega-energy-particle{position:absolute;width:5px;height:5px;border-radius:50%;background:#d9ffff;box-shadow:0 0 7px rgba(163,255,247,.95),0 0 18px rgba(0,225,255,.75),0 0 28px rgba(0,140,255,.3)}
.mega-energy-particle-1{left:24px;top:28px;animation:megaEnergyParticleOne2678 4.1s ease-in-out infinite}
.mega-energy-particle-2{left:55px;top:8px;animation:megaEnergyParticleTwo2678 4.8s ease-in-out infinite}
.mega-energy-particle-3{left:110px;top:-8px;animation:megaEnergyParticleThree2678 4.2s ease-in-out infinite}
.mega-energy-particle-4{left:177px;top:-10px;animation:megaEnergyParticleFour2678 5s ease-in-out infinite}
.mega-energy-particle-5{right:55px;top:12px;animation:megaEnergyParticleFive2678 4.6s ease-in-out infinite}
.mega-energy-particle-6{right:18px;top:34px;animation:megaEnergyParticleSix2678 4s ease-in-out infinite}
.mega-energy-particle-7{left:12px;top:72px;animation:megaEnergyParticleSeven2678 5.2s ease-in-out infinite}
.mega-energy-particle-8{right:10px;top:76px;animation:megaEnergyParticleEight2678 4.7s ease-in-out infinite}
.mega-energy-particle-9{left:40px;bottom:5px;animation:megaEnergyParticleNine2678 4.4s ease-in-out infinite}
.mega-energy-particle-10{left:95px;bottom:-8px;animation:megaEnergyParticleTen2678 5.1s ease-in-out infinite}
.mega-energy-particle-11{right:75px;bottom:-7px;animation:megaEnergyParticleEleven2678 4.3s ease-in-out infinite}
.mega-energy-particle-12{right:30px;bottom:10px;animation:megaEnergyParticleTwelve2678 5s ease-in-out infinite}
.mega-energy-grid{position:absolute;inset:9px;z-index:2;border-radius:17px;background-image:linear-gradient(rgba(0,231,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,231,255,.05) 1px,transparent 1px);background-size:20px 20px;mask-image:linear-gradient(to bottom,transparent,rgba(0,0,0,.8) 22%,rgba(0,0,0,.8) 78%,transparent);-webkit-mask-image:linear-gradient(to bottom,transparent,rgba(0,0,0,.8) 22%,rgba(0,0,0,.8) 78%,transparent);animation:megaEnergyGrid2678 7s linear infinite;pointer-events:none}
.mega-energy-lines{position:absolute;left:20px;right:20px;top:18px;bottom:18px;z-index:3;border-top:1px solid rgba(155,255,239,.08);border-bottom:1px solid rgba(0,216,255,.08);pointer-events:none}
.mega-energy-lines::before,.mega-energy-lines::after{content:"";position:absolute;width:45px;height:1px;background:linear-gradient(90deg,transparent,#00ffe0,transparent);filter:blur(.4px)}
.mega-energy-lines::before{left:0;top:0;animation:megaEnergyLineTop2678 3.3s linear infinite}
.mega-energy-lines::after{right:0;bottom:0;animation:megaEnergyLineBottom2678 3.8s linear infinite}
.mega-energy-ring{position:absolute;left:50%;top:50%;border-radius:50%;border:1px solid rgba(0,231,255,.16);transform:translate(-50%,-50%);pointer-events:none;z-index:3}
.mega-energy-ring-1{width:216px;height:78px;animation:megaEnergyRingOne2678 7s linear infinite}
.mega-energy-ring-2{width:174px;height:174px;border-color:rgba(86,84,255,.11);animation:megaEnergyRingTwo2678 11s linear infinite reverse}
.mega-energy-ring-3{width:290px;height:290px;border-color:rgba(0,255,183,.055);animation:megaEnergyRingThree2678 15s linear infinite}
.mega-energy-core{position:absolute;left:50%;top:50%;width:105px;height:105px;transform:translate(-50%,-50%);border-radius:50%;z-index:4;background:radial-gradient(circle,rgba(225,255,251,.12),rgba(0,245,210,.05) 30%,transparent 68%);animation:megaEnergyCore2678 3.2s ease-in-out infinite;pointer-events:none}
.mega-energy-core-inner{position:absolute;left:50%;top:50%;width:63px;height:63px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#e9ffff 0%,#73fff1 13%,#00e6d2 29%,rgba(0,140,255,.18) 51%,transparent 72%);filter:blur(1px);box-shadow:0 0 15px rgba(122,255,238,.75),0 0 35px rgba(0,229,210,.46),0 0 68px rgba(0,153,255,.24);animation:megaEnergyCoreInner2678 2.3s ease-in-out infinite}
.mega-energy-core-light{position:absolute;left:50%;top:50%;width:23px;height:23px;transform:translate(-50%,-50%);border-radius:50%;background:#fff;box-shadow:0 0 9px #fff,0 0 23px #a6fff5,0 0 42px #00f0d5;animation:megaEnergyCoreLight2678 1.4s ease-in-out infinite}
.mega-energy-shine{position:absolute;left:-120%;top:-35%;z-index:12;width:65%;height:170%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.04) 20%,rgba(255,255,255,.42) 47%,rgba(255,255,255,.07) 62%,transparent);transform:rotate(22deg);filter:blur(1px);animation:megaEnergyShine2678 4.7s cubic-bezier(.2,.7,.2,1) infinite;pointer-events:none}
.mega-energy-border{position:absolute;inset:4px;z-index:11;border-radius:19px;padding:2px;background:conic-gradient(from 0deg,#00ffd0,#00c8ff,#554dff,#c331ff,#ff2cad,#00ffd0);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:megaEnergyBorder2678 4s linear infinite;box-shadow:0 0 24px rgba(0,220,255,.16);pointer-events:none}
.mega-energy-content{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:14;display:flex;align-items:center;justify-content:center;gap:11px;width:220px;min-height:54px;color:#fff;text-shadow:0 0 8px rgba(162,255,247,.5),0 0 18px rgba(0,204,255,.25);pointer-events:none}
.mega-energy-content i{font-size:27px;color:#eaffff;text-shadow:0 0 7px rgba(255,255,255,.9),0 0 18px rgba(0,255,218,.85),0 0 32px rgba(0,153,255,.55);animation:megaEnergyIcon2678 2.2s ease-in-out infinite}
.mega-energy-text{font-size:21px;line-height:1;font-weight:900;letter-spacing:3px;background:linear-gradient(90deg,#ecfffd,#6effe6,#52cfff,#a26dff,#ff5ad8,#ecfffd);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:megaEnergyText2678 4s linear infinite}
.mega-energy-subtext{position:absolute;top:34px;left:50%;transform:translateX(-50%);font-size:7px;line-height:1;font-weight:700;letter-spacing:3px;color:rgba(177,255,247,.63);white-space:nowrap;text-transform:uppercase}
.mega-energy-scan{position:absolute;left:13px;right:13px;top:-12%;height:2px;z-index:13;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),#83fff0,rgba(255,255,255,.5),#50ccff,transparent);box-shadow:0 0 9px rgba(92,255,238,.3);filter:blur(.2px);animation:megaEnergyScan2678 4s ease-in-out infinite;pointer-events:none}
.mega-energy-stats{position:relative;z-index:7;display:flex;align-items:center;justify-content:center;gap:16px;width:100%}
.mega-energy-stat{position:relative;display:flex;align-items:center;justify-content:center;gap:9px;min-width:125px;height:38px;padding:0 16px;border:1px solid rgba(0,231,255,.15);border-radius:10px;background:linear-gradient(135deg,rgba(0,245,220,.045),rgba(45,56,255,.05));box-shadow:inset 0 1px 0 rgba(255,255,255,.03),0 5px 20px rgba(0,0,0,.2);overflow:hidden}
.mega-energy-stat::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(0,255,227,.08),transparent);background-size:220% 100%;animation:megaEnergyStatSweep2678 4s linear infinite}
.mega-energy-stat-label{font-size:9px;font-weight:800;letter-spacing:2px;color:rgba(176,236,241,.58)}
.mega-energy-stat-value{font-size:15px;font-weight:900;letter-spacing:1px;color:#dffef9;text-shadow:0 0 10px rgba(0,237,205,.32);animation:megaEnergyStatValue2678 2s ease-in-out infinite}
@keyframes megaEnergyBg2678{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.7}50%{transform:translate3d(2%,1%,0) scale(1.03);opacity:1}}
@keyframes megaEnergySweep2678{0%{background-position:-120% 0}100%{background-position:120% 0}}
@keyframes megaEnergyGradient2678{0%{background-position:0% 50%}25%{background-position:100% 30%}50%{background-position:100% 100%}75%{background-position:0% 70%}100%{background-position:0% 50%}}
@keyframes megaEnergyGlowOne2678{0%,100%{transform:translate3d(-10px,0,0) scale(.92);opacity:.45}50%{transform:translate3d(11px,-4px,0) scale(1.12);opacity:.88}}
@keyframes megaEnergyGlowTwo2678{0%,100%{transform:translate3d(0,6px,0) scale(.88);opacity:.3}50%{transform:translate3d(-10px,-5px,0) scale(1.13);opacity:.72}}
@keyframes megaEnergyGlowThree2678{0%,100%{transform:translate3d(-4px,4px,0) scale(.8);opacity:.16}50%{transform:translate3d(5px,-4px,0) scale(1.15);opacity:.52}}
@keyframes megaEnergyAura2678{0%,100%{transform:translate(-50%,-50%) scale(.86);opacity:.26}50%{transform:translate(-50%,-50%) scale(1.08);opacity:.66}}
@keyframes megaEnergyPulseOne2678{0%{width:280px;height:106px;opacity:.66;transform:translate(-50%,-50%) scale(1)}100%{width:360px;height:155px;opacity:0;transform:translate(-50%,-50%) scale(1.09)}}
@keyframes megaEnergyPulseTwo2678{0%{width:280px;height:106px;opacity:.62;transform:translate(-50%,-50%) scale(1)}100%{width:390px;height:175px;opacity:0;transform:translate(-50%,-50%) scale(1.08)}}
@keyframes megaEnergyPulseThree2678{0%{width:280px;height:106px;opacity:.52;transform:translate(-50%,-50%) scale(1)}100%{width:320px;height:135px;opacity:0;transform:translate(-50%,-50%) scale(1.15)}}
@keyframes megaEnergyParticleOne2678{0%,100%{transform:translate(0,0) scale(.55);opacity:.22}50%{transform:translate(10px,-16px) scale(1.2);opacity:.92}}
@keyframes megaEnergyParticleTwo2678{0%,100%{transform:translate(0,0) scale(.48);opacity:.18}50%{transform:translate(-9px,18px) scale(1.14);opacity:.9}}
@keyframes megaEnergyParticleThree2678{0%,100%{transform:translate(0,0) scale(.6);opacity:.24}50%{transform:translate(16px,11px) scale(1.3);opacity:1}}
@keyframes megaEnergyParticleFour2678{0%,100%{transform:translate(0,0) scale(.45);opacity:.18}50%{transform:translate(-13px,20px) scale(1.05);opacity:.88}}
@keyframes megaEnergyParticleFive2678{0%,100%{transform:translate(0,0) scale(.55);opacity:.22}50%{transform:translate(9px,-18px) scale(1.18);opacity:.92}}
@keyframes megaEnergyParticleSix2678{0%,100%{transform:translate(0,0) scale(.5);opacity:.18}50%{transform:translate(-14px,12px) scale(1.16);opacity:.9}}
@keyframes megaEnergyParticleSeven2678{0%,100%{transform:translate(0,0) scale(.6);opacity:.21}50%{transform:translate(15px,2px) scale(1.25);opacity:.94}}
@keyframes megaEnergyParticleEight2678{0%,100%{transform:translate(0,0) scale(.48);opacity:.16}50%{transform:translate(-15px,-4px) scale(1.15);opacity:.88}}
@keyframes megaEnergyParticleNine2678{0%,100%{transform:translate(0,0) scale(.56);opacity:.2}50%{transform:translate(10px,-17px) scale(1.13);opacity:.9}}
@keyframes megaEnergyParticleTen2678{0%,100%{transform:translate(0,0) scale(.46);opacity:.17}50%{transform:translate(-8px,-14px) scale(1.18);opacity:.9}}
@keyframes megaEnergyParticleEleven2678{0%,100%{transform:translate(0,0) scale(.58);opacity:.2}50%{transform:translate(13px,14px) scale(1.22);opacity:.95}}
@keyframes megaEnergyParticleTwelve2678{0%,100%{transform:translate(0,0) scale(.5);opacity:.16}50%{transform:translate(-12px,9px) scale(1.12);opacity:.87}}
@keyframes megaEnergyGrid2678{0%{background-position:0 0,0 0;opacity:.25}50%{background-position:0 10px,10px 0;opacity:.52}100%{background-position:0 20px,20px 0;opacity:.25}}
@keyframes megaEnergyLineTop2678{0%{left:0;opacity:0}20%{opacity:1}80%{opacity:1}100%{left:180px;opacity:0}}
@keyframes megaEnergyLineBottom2678{0%{right:0;opacity:0}20%{opacity:1}80%{opacity:1}100%{right:180px;opacity:0}}
@keyframes megaEnergyRingOne2678{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.96);opacity:.12}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.04);opacity:.42}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.96);opacity:.12}}
@keyframes megaEnergyRingTwo2678{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.92);opacity:.08}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.04);opacity:.25}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.92);opacity:.08}}
@keyframes megaEnergyRingThree2678{0%{transform:translate(-50%,-50%) rotate(0deg) scale(.94);opacity:.06}50%{transform:translate(-50%,-50%) rotate(180deg) scale(1.03);opacity:.15}100%{transform:translate(-50%,-50%) rotate(360deg) scale(.94);opacity:.06}}
@keyframes megaEnergyCore2678{0%,100%{transform:translate(-50%,-50%) scale(.82);opacity:.42}50%{transform:translate(-50%,-50%) scale(1.06);opacity:1}}
@keyframes megaEnergyCoreInner2678{0%,100%{transform:translate(-50%,-50%) scale(.82);filter:brightness(.92)}50%{transform:translate(-50%,-50%) scale(1.08);filter:brightness(1.28)}}
@keyframes megaEnergyCoreLight2678{0%,100%{transform:translate(-50%,-50%) scale(.72);opacity:.7}50%{transform:translate(-50%,-50%) scale(1.25);opacity:1}}
@keyframes megaEnergyShine2678{0%{left:-130%;opacity:0}8%{opacity:.02}17%{opacity:.68}28%{opacity:.15}42%{left:138%;opacity:0}100%{left:138%;opacity:0}}
@keyframes megaEnergyBorder2678{to{transform:rotate(360deg)}}
@keyframes megaEnergyIcon2678{0%,100%{transform:translateY(0) rotate(0deg) scale(1);filter:brightness(1)}50%{transform:translateY(-4px) rotate(8deg) scale(1.08);filter:brightness(1.25)}}
@keyframes megaEnergyText2678{0%{background-position:0% 50%}100%{background-position:300% 50%}}
@keyframes megaEnergyScan2678{0%{top:-15%;opacity:0}12%{opacity:.15}30%{opacity:.65}45%{opacity:.2}60%{top:115%;opacity:0}100%{top:115%;opacity:0}}
@keyframes megaEnergyStatSweep2678{0%{background-position:-120% 0}100%{background-position:120% 0}}
@keyframes megaEnergyStatValue2678{0%,100%{text-shadow:0 0 7px rgba(0,237,205,.22);transform:scale(1)}50%{text-shadow:0 0 16px rgba(0,237,205,.62);transform:scale(1.04)}}
.mega-energy-button:hover .mega-energy-background{animation-duration:2.3s}
.mega-energy-button:hover .mega-energy-glow-1{animation-duration:2.1s}
.mega-energy-button:hover .mega-energy-glow-2{animation-duration:2.7s}
.mega-energy-button:hover .mega-energy-glow-3{animation-duration:2.2s}
.mega-energy-button:hover .mega-energy-aura{animation-duration:2.4s}
.mega-energy-button:hover .mega-energy-particle{animation-duration:2.1s}
.mega-energy-button:hover .mega-energy-core{animation-duration:1.7s}
.mega-energy-button:hover .mega-energy-core-inner{animation-duration:1.4s}
.mega-energy-button:hover .mega-energy-core-light{animation-duration:.9s}
.mega-energy-button:hover .mega-energy-text{animation-duration:2s}
.mega-energy-button:hover .mega-energy-scan{animation-duration:2s}
.mega-energy-button:hover .mega-energy-grid{animation-duration:3.5s}
.mega-energy-button:hover .mega-energy-ring-1{opacity:.5}
.mega-energy-button:hover .mega-energy-ring-2{opacity:.3}
.mega-energy-button:hover .mega-energy-ring-3{opacity:.18}
.mega-energy-button:hover .mega-energy-content i{color:#fff}
.mega-energy-button:hover .mega-energy-border{box-shadow:0 0 35px rgba(0,230,255,.3),0 0 75px rgba(115,61,255,.12)}
@media (max-width:700px){.mega-energy-button{width:270px;height:108px}.mega-energy-text{font-size:18px;letter-spacing:2.4px}.mega-energy-content i{font-size:24px}.mega-energy-stat{min-width:115px}.mega-energy-demo{min-height:290px;padding:24px}}
@media (max-width:520px){.mega-energy-button{width:230px;height:92px}.mega-energy-text{font-size:15px;letter-spacing:1.8px}.mega-energy-content{gap:8px}.mega-energy-content i{font-size:20px}.mega-energy-subtext{top:28px;font-size:6px;letter-spacing:1.6px}.mega-energy-stats{gap:8px}.mega-energy-stat{min-width:95px;height:33px;padding:0 10px;gap:6px}.mega-energy-stat-label{font-size:7px}.mega-energy-stat-value{font-size:12px}.mega-energy-demo{gap:20px;padding:20px}}
@media (prefers-reduced-motion:reduce){.mega-energy-demo *, .mega-energy-demo::before, .mega-energy-demo::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}
`,
  },
  {
    id: 2679,
    name: "Levitation Element",
    preview: (
      <button className="btn-levitation-element">
        <span className="levitation-aura"></span>
        <span className="levitation-aura-2"></span>
        <span className="levitation-aura-3"></span>
        <span className="levitation-orbit levitation-orbit-1"></span>
        <span className="levitation-orbit levitation-orbit-2"></span>
        <span className="levitation-orbit levitation-orbit-3"></span>
        <span className="levitation-orbit levitation-orbit-4"></span>
        <span className="levitation-ring levitation-ring-1"></span>
        <span className="levitation-ring levitation-ring-2"></span>
        <span className="levitation-ring levitation-ring-3"></span>
        <span className="levitation-ring levitation-ring-4"></span>
        <span className="levitation-core">
          <span className="levitation-core-inner"></span>
          <span className="levitation-core-light"></span>
        </span>
        <span className="levitation-energy levitation-energy-1"></span>
        <span className="levitation-energy levitation-energy-2"></span>
        <span className="levitation-energy levitation-energy-3"></span>
        <span className="levitation-energy levitation-energy-4"></span>
        <span className="levitation-energy levitation-energy-5"></span>
        <span className="levitation-energy levitation-energy-6"></span>
        <span className="levitation-particle levitation-particle-1"></span>
        <span className="levitation-particle levitation-particle-2"></span>
        <span className="levitation-particle levitation-particle-3"></span>
        <span className="levitation-particle levitation-particle-4"></span>
        <span className="levitation-particle levitation-particle-5"></span>
        <span className="levitation-particle levitation-particle-6"></span>
        <span className="levitation-particle levitation-particle-7"></span>
        <span className="levitation-particle levitation-particle-8"></span>
        <span className="levitation-particle levitation-particle-9"></span>
        <span className="levitation-particle levitation-particle-10"></span>
        <span className="levitation-particle levitation-particle-11"></span>
        <span className="levitation-particle levitation-particle-12"></span>
        <span className="levitation-particle levitation-particle-13"></span>
        <span className="levitation-particle levitation-particle-14"></span>
        <span className="levitation-particle levitation-particle-15"></span>
        <span className="levitation-particle levitation-particle-16"></span>
        <span className="levitation-crystal levitation-crystal-1"></span>
        <span className="levitation-crystal levitation-crystal-2"></span>
        <span className="levitation-crystal levitation-crystal-3"></span>
        <span className="levitation-crystal levitation-crystal-4"></span>
        <span className="levitation-crystal levitation-crystal-5"></span>
        <span className="levitation-crystal levitation-crystal-6"></span>
        <span className="levitation-shard levitation-shard-1"></span>
        <span className="levitation-shard levitation-shard-2"></span>
        <span className="levitation-shard levitation-shard-3"></span>
        <span className="levitation-shard levitation-shard-4"></span>
        <span className="levitation-shard levitation-shard-5"></span>
        <span className="levitation-mist levitation-mist-1"></span>
        <span className="levitation-mist levitation-mist-2"></span>
        <span className="levitation-mist levitation-mist-3"></span>
        <span className="levitation-mist levitation-mist-4"></span>
        <span className="levitation-ray levitation-ray-1"></span>
        <span className="levitation-ray levitation-ray-2"></span>
        <span className="levitation-ray levitation-ray-3"></span>
        <span className="levitation-ray levitation-ray-4"></span>
        <span className="levitation-sheen"></span>
        <span className="levitation-scan"></span>
        <span className="levitation-border"></span>
        <span className="levitation-content">
          <i className="ri-windy-line"></i>
          <span className="levitation-title">LEVITATION</span>
          <span className="levitation-subtitle">ELEMENTAL FORCE</span>
        </span>
      </button>
    ),
    html: `<button class="btn-levitation-element">
  <span class="levitation-aura"></span>
  <span class="levitation-aura-2"></span>
  <span class="levitation-aura-3"></span>
  <span class="levitation-orbit levitation-orbit-1"></span>
  <span class="levitation-orbit levitation-orbit-2"></span>
  <span class="levitation-orbit levitation-orbit-3"></span>
  <span class="levitation-orbit levitation-orbit-4"></span>
  <span class="levitation-ring levitation-ring-1"></span>
  <span class="levitation-ring levitation-ring-2"></span>
  <span class="levitation-ring levitation-ring-3"></span>
  <span class="levitation-ring levitation-ring-4"></span>
  <span class="levitation-core">
    <span class="levitation-core-inner"></span>
    <span class="levitation-core-light"></span>
  </span>
  <span class="levitation-energy levitation-energy-1"></span>
  <span class="levitation-energy levitation-energy-2"></span>
  <span class="levitation-energy levitation-energy-3"></span>
  <span class="levitation-energy levitation-energy-4"></span>
  <span class="levitation-energy levitation-energy-5"></span>
  <span class="levitation-energy levitation-energy-6"></span>
  <span class="levitation-particle levitation-particle-1"></span>
  <span class="levitation-particle levitation-particle-2"></span>
  <span class="levitation-particle levitation-particle-3"></span>
  <span class="levitation-particle levitation-particle-4"></span>
  <span class="levitation-particle levitation-particle-5"></span>
  <span class="levitation-particle levitation-particle-6"></span>
  <span class="levitation-particle levitation-particle-7"></span>
  <span class="levitation-particle levitation-particle-8"></span>
  <span class="levitation-particle levitation-particle-9"></span>
  <span class="levitation-particle levitation-particle-10"></span>
  <span class="levitation-particle levitation-particle-11"></span>
  <span class="levitation-particle levitation-particle-12"></span>
  <span class="levitation-particle levitation-particle-13"></span>
  <span class="levitation-particle levitation-particle-14"></span>
  <span class="levitation-particle levitation-particle-15"></span>
  <span class="levitation-particle levitation-particle-16"></span>
  <span class="levitation-crystal levitation-crystal-1"></span>
  <span class="levitation-crystal levitation-crystal-2"></span>
  <span class="levitation-crystal levitation-crystal-3"></span>
  <span class="levitation-crystal levitation-crystal-4"></span>
  <span class="levitation-crystal levitation-crystal-5"></span>
  <span class="levitation-crystal levitation-crystal-6"></span>
  <span class="levitation-shard levitation-shard-1"></span>
  <span class="levitation-shard levitation-shard-2"></span>
  <span class="levitation-shard levitation-shard-3"></span>
  <span class="levitation-shard levitation-shard-4"></span>
  <span class="levitation-shard levitation-shard-5"></span>
  <span class="levitation-mist levitation-mist-1"></span>
  <span class="levitation-mist levitation-mist-2"></span>
  <span class="levitation-mist levitation-mist-3"></span>
  <span class="levitation-mist levitation-mist-4"></span>
  <span class="levitation-ray levitation-ray-1"></span>
  <span class="levitation-ray levitation-ray-2"></span>
  <span class="levitation-ray levitation-ray-3"></span>
  <span class="levitation-ray levitation-ray-4"></span>
  <span class="levitation-sheen"></span>
  <span class="levitation-scan"></span>
  <span class="levitation-border"></span>
  <span class="levitation-content">
    <i class="ri-windy-line"></i>
    <span class="levitation-title">LEVITATION</span>
    <span class="levitation-subtitle">ELEMENTAL FORCE</span>
  </span>
</button>`,
    css: `
.btn-levitation-element {
  --levitation-cyan: #6ffff4;
  --levitation-aqua: #32dfff;
  --levitation-blue: #4e8dff;
  --levitation-purple: #9365ff;
  --levitation-white: #f4ffff;
  --levitation-dark: #06111f;
  --levitation-deep: #020913;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 124px;
  padding: 0;
  border: 1px solid rgba(112,241,255,.38);
  border-radius: 22px;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 50% 48%,rgba(63,230,255,.13),transparent 25%),
    radial-gradient(circle at 24% 25%,rgba(91,255,223,.08),transparent 27%),
    radial-gradient(circle at 76% 78%,rgba(108,73,255,.09),transparent 30%),
    linear-gradient(145deg,#071727 0%,#061321 44%,#030a14 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    inset 0 0 0 1px rgba(75,239,255,.035),
    0 7px 20px rgba(0,0,0,.34),
    0 16px 40px rgba(0,110,185,.1),
    0 0 30px rgba(0,221,255,.1);
  color: #fff;
  cursor: pointer;
  transform: translate3d(0,0,0);
  transform-style: preserve-3d;
  transition:
    transform .5s cubic-bezier(.18,.8,.2,1),
    box-shadow .5s ease,
    border-color .5s ease,
    filter .5s ease;
}
.btn-levitation-element:hover {
  transform: translate3d(0,-8px,0) scale(1.035) rotateX(2deg);
  border-color: rgba(167,250,255,.78);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.1),
    0 14px 35px rgba(0,0,0,.28),
    0 0 38px rgba(57,225,255,.22),
    0 0 78px rgba(88,104,255,.13);
  filter: brightness(1.08);
}
.btn-levitation-element:active {
  transform: translate3d(0,-2px,0) scale(.985);
}
.btn-levitation-element:focus-visible {
  outline: none;
  border-color: rgba(213,253,255,.95);
  box-shadow:
    0 0 0 3px rgba(72,226,255,.18),
    0 0 0 7px rgba(72,226,255,.06),
    0 0 48px rgba(65,217,255,.32);
}
.btn-levitation-element::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 0;
  border-radius: 21px;
  background:
    linear-gradient(115deg,rgba(255,255,255,.06),transparent 17%,transparent 78%,rgba(108,121,255,.045)),
    radial-gradient(circle at 50% 0%,rgba(180,255,250,.09),transparent 31%);
  pointer-events: none;
}
.btn-levitation-element::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 40;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.045);
  pointer-events: none;
}
.levitation-aura {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -5;
  width: 270px;
  height: 120px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse,
      rgba(86,249,234,.24) 0%,
      rgba(47,207,255,.16) 29%,
      rgba(70,110,255,.08) 48%,
      transparent 73%
    );
  filter: blur(22px);
  animation: levitationAura2679 4.6s ease-in-out infinite;
  pointer-events: none;
}
.levitation-aura-2 {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -6;
  width: 350px;
  height: 170px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse,
      rgba(69,166,255,.12) 0%,
      rgba(116,72,255,.09) 40%,
      transparent 74%
    );
  filter: blur(31px);
  animation: levitationAuraTwo2679 6.5s ease-in-out infinite;
  pointer-events: none;
}
.levitation-aura-3 {
  position: absolute;
  left: 50%;
  top: 53%;
  z-index: -7;
  width: 220px;
  height: 56px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse,
      rgba(117,255,236,.2),
      rgba(72,190,255,.09) 44%,
      transparent 72%
    );
  filter: blur(20px);
  animation: levitationAuraThree2679 3.8s ease-in-out infinite;
  pointer-events: none;
}
.levitation-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(122,232,255,.12);
  transform-origin: center;
  pointer-events: none;
}
.levitation-orbit-1 {
  width: 215px;
  height: 69px;
  transform: translate(-50%,-50%) rotate(4deg);
  animation: levitationOrbitOne2679 8s linear infinite;
}
.levitation-orbit-2 {
  width: 255px;
  height: 94px;
  transform: translate(-50%,-50%) rotate(-18deg);
  border-color: rgba(113,125,255,.09);
  animation: levitationOrbitTwo2679 11s linear infinite reverse;
}
.levitation-orbit-3 {
  width: 178px;
  height: 178px;
  transform: translate(-50%,-50%);
  border-color: rgba(93,242,236,.08);
  animation: levitationOrbitThree2679 12s linear infinite;
}
.levitation-orbit-4 {
  width: 320px;
  height: 120px;
  transform: translate(-50%,-50%) rotate(29deg);
  border-color: rgba(106,161,255,.05);
  animation: levitationOrbitFour2679 15s linear infinite reverse;
}
.levitation-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  pointer-events: none;
}
.levitation-ring-1 {
  width: 90px;
  height: 90px;
  transform: translate(-50%,-50%);
  border: 1px solid rgba(117,255,240,.14);
  box-shadow:
    0 0 13px rgba(60,239,226,.09),
    inset 0 0 13px rgba(60,239,226,.05);
  animation: levitationRingOne2679 3.6s ease-in-out infinite;
}
.levitation-ring-2 {
  width: 126px;
  height: 126px;
  transform: translate(-50%,-50%);
  border: 1px solid rgba(79,190,255,.09);
  animation: levitationRingTwo2679 6s linear infinite;
}
.levitation-ring-3 {
  width: 155px;
  height: 155px;
  transform: translate(-50%,-50%);
  border: 1px dashed rgba(132,96,255,.07);
  animation: levitationRingThree2679 10s linear infinite reverse;
}
.levitation-ring-4 {
  width: 196px;
  height: 196px;
  transform: translate(-50%,-50%);
  border: 1px solid rgba(75,224,255,.045);
  animation: levitationRingFour2679 14s linear infinite;
}
.levitation-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 118px;
  height: 118px;
  transform: translate(-50%,-50%);
  z-index: 9;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(223,255,250,.05) 0%,
      rgba(87,255,234,.09) 27%,
      rgba(42,194,255,.05) 43%,
      transparent 69%
    );
  animation: levitationCoreFloat2679 4s ease-in-out infinite;
  pointer-events: none;
}
.levitation-core-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 72px;
  height: 72px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 42% 38%,
      #f8ffff 0%,
      #bffff6 7%,
      #62f5df 18%,
      #25cfe8 31%,
      rgba(75,131,255,.19) 55%,
      transparent 72%
    );
  box-shadow:
    0 0 8px rgba(228,255,252,.95),
    0 0 18px rgba(106,255,238,.78),
    0 0 36px rgba(27,217,232,.5),
    0 0 62px rgba(69,129,255,.28);
  filter: saturate(1.12);
  animation: levitationCoreInner2679 2.6s ease-in-out infinite;
}
.levitation-core-light {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,#fff 0%,#f6fffe 35%,#9cfff4 58%,transparent 76%);
  box-shadow:
    0 0 7px #fff,
    0 0 16px #b5fff7,
    0 0 30px #5affea,
    0 0 46px rgba(0,204,255,.7);
  animation: levitationCoreLight2679 1.7s ease-in-out infinite;
}
.levitation-energy {
  position: absolute;
  z-index: 7;
  pointer-events: none;
  border-radius: 999px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(180,255,249,.15),
      rgba(84,255,233,.75),
      rgba(108,218,255,.3),
      transparent
    );
  filter: blur(1px);
}
.levitation-energy-1 {
  left: 36px;
  top: 33px;
  width: 90px;
  height: 2px;
  transform: rotate(17deg);
  animation: levitationEnergyOne2679 4.3s ease-in-out infinite;
}
.levitation-energy-2 {
  right: 35px;
  top: 40px;
  width: 75px;
  height: 1px;
  transform: rotate(-19deg);
  animation: levitationEnergyTwo2679 5.2s ease-in-out infinite;
}
.levitation-energy-3 {
  left: 58px;
  bottom: 28px;
  width: 72px;
  height: 1px;
  transform: rotate(-12deg);
  animation: levitationEnergyThree2679 4.8s ease-in-out infinite;
}
.levitation-energy-4 {
  right: 52px;
  bottom: 29px;
  width: 84px;
  height: 2px;
  transform: rotate(13deg);
  animation: levitationEnergyFour2679 5.6s ease-in-out infinite;
}
.levitation-energy-5 {
  left: 88px;
  top: 13px;
  width: 58px;
  height: 1px;
  transform: rotate(48deg);
  animation: levitationEnergyFive2679 4.5s ease-in-out infinite;
}
.levitation-energy-6 {
  right: 90px;
  bottom: 12px;
  width: 62px;
  height: 1px;
  transform: rotate(-42deg);
  animation: levitationEnergySix2679 5.1s ease-in-out infinite;
}
.levitation-particle {
  position: absolute;
  z-index: 12;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #efffff;
  box-shadow:
    0 0 6px rgba(236,255,255,.98),
    0 0 14px rgba(91,255,238,.82),
    0 0 24px rgba(82,155,255,.38);
  pointer-events: none;
}
.levitation-particle-1 {
  left: 16px;
  top: 22px;
  animation: levitationParticleOne2679 4.2s ease-in-out infinite;
}
.levitation-particle-2 {
  left: 36px;
  top: 84px;
  animation: levitationParticleTwo2679 5.4s ease-in-out infinite;
}
.levitation-particle-3 {
  left: 63px;
  top: 10px;
  animation: levitationParticleThree2679 4.8s ease-in-out infinite;
}
.levitation-particle-4 {
  left: 91px;
  bottom: 10px;
  animation: levitationParticleFour2679 5.2s ease-in-out infinite;
}
.levitation-particle-5 {
  left: 127px;
  top: 6px;
  animation: levitationParticleFive2679 4.5s ease-in-out infinite;
}
.levitation-particle-6 {
  left: 159px;
  bottom: 8px;
  animation: levitationParticleSix2679 5.8s ease-in-out infinite;
}
.levitation-particle-7 {
  left: 193px;
  top: 10px;
  animation: levitationParticleSeven2679 4.1s ease-in-out infinite;
}
.levitation-particle-8 {
  right: 81px;
  bottom: 13px;
  animation: levitationParticleEight2679 5.3s ease-in-out infinite;
}
.levitation-particle-9 {
  right: 53px;
  top: 17px;
  animation: levitationParticleNine2679 4.7s ease-in-out infinite;
}
.levitation-particle-10 {
  right: 27px;
  bottom: 34px;
  animation: levitationParticleTen2679 5.1s ease-in-out infinite;
}
.levitation-particle-11 {
  right: 12px;
  top: 42px;
  animation: levitationParticleEleven2679 4.4s ease-in-out infinite;
}
.levitation-particle-12 {
  left: 18px;
  bottom: 46px;
  animation: levitationParticleTwelve2679 5.7s ease-in-out infinite;
}
.levitation-particle-13 {
  left: 118px;
  top: 93px;
  animation: levitationParticleThirteen2679 4.9s ease-in-out infinite;
}
.levitation-particle-14 {
  right: 115px;
  top: 96px;
  animation: levitationParticleFourteen2679 5.4s ease-in-out infinite;
}
.levitation-particle-15 {
  left: 240px;
  top: 20px;
  animation: levitationParticleFifteen2679 4.6s ease-in-out infinite;
}
.levitation-particle-16 {
  right: 33px;
  top: 84px;
  animation: levitationParticleSixteen2679 5s ease-in-out infinite;
}
.levitation-crystal {
  position: absolute;
  z-index: 6;
  width: 18px;
  height: 18px;
  opacity: .48;
  pointer-events: none;
}
.levitation-crystal::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 23px;
  transform: translate(-50%,-50%) rotate(30deg);
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(234,255,255,.86),
      rgba(97,232,255,.4),
      transparent
    );
  box-shadow: 0 0 6px rgba(93,218,255,.32);
}
.levitation-crystal::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 23px;
  transform: translate(-50%,-50%) rotate(-30deg);
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(234,255,255,.72),
      rgba(97,232,255,.35),
      transparent
    );
}
.levitation-crystal-1 {
  left: 39px;
  top: 30px;
  transform: scale(.72);
  animation: levitationCrystalOne2679 8s linear infinite;
}
.levitation-crystal-2 {
  left: 75px;
  bottom: 25px;
  transform: scale(.5);
  animation: levitationCrystalTwo2679 9s linear infinite reverse;
}
.levitation-crystal-3 {
  right: 43px;
  top: 24px;
  transform: scale(.8);
  animation: levitationCrystalThree2679 7.3s linear infinite;
}
.levitation-crystal-4 {
  right: 71px;
  bottom: 20px;
  transform: scale(.6);
  animation: levitationCrystalFour2679 8.6s linear infinite reverse;
}
.levitation-crystal-5 {
  left: 145px;
  top: 10px;
  transform: scale(.42);
  animation: levitationCrystalFive2679 6.8s linear infinite;
}
.levitation-crystal-6 {
  right: 135px;
  bottom: 9px;
  transform: scale(.4);
  animation: levitationCrystalSix2679 7.8s linear infinite reverse;
}
.levitation-shard {
  position: absolute;
  z-index: 4;
  pointer-events: none;
  opacity: .22;
}
.levitation-shard-1 {
  left: -11px;
  bottom: 3px;
  width: 105px;
  height: 46px;
  background:
    linear-gradient(
      135deg,
      transparent 0 28%,
      rgba(113,237,255,.33) 29% 32%,
      transparent 33%
    );
  clip-path: polygon(0 74%,34% 21%,52% 47%,77% 0,100% 33%,66% 100%);
  transform: rotate(-17deg);
  animation: levitationShardOne2679 7.5s ease-in-out infinite;
}
.levitation-shard-2 {
  right: -10px;
  top: -3px;
  width: 92px;
  height: 48px;
  background:
    linear-gradient(
      145deg,
      transparent 0 32%,
      rgba(126,110,255,.24) 33% 36%,
      transparent 37%
    );
  clip-path: polygon(8% 0,54% 22%,100% 8%,75% 60%,91% 100%,39% 64%,0 78%);
  transform: rotate(24deg);
  animation: levitationShardTwo2679 8.2s ease-in-out infinite;
}
.levitation-shard-3 {
  left: 26%;
  top: -14px;
  width: 104px;
  height: 42px;
  background:
    linear-gradient(
      125deg,
      transparent 0 30%,
      rgba(91,242,225,.16) 31% 36%,
      transparent 37%
    );
  clip-path: polygon(0 44%,29% 8%,54% 28%,100% 0,78% 62%,36% 100%);
  animation: levitationShardThree2679 9.4s ease-in-out infinite;
}
.levitation-shard-4 {
  right: 24%;
  bottom: -13px;
  width: 95px;
  height: 44px;
  background:
    linear-gradient(
      125deg,
      transparent 0 25%,
      rgba(91,143,255,.2) 26% 31%,
      transparent 32%
    );
  clip-path: polygon(0 78%,37% 14%,58% 33%,100% 0,72% 100%);
  animation: levitationShardFour2679 8.8s ease-in-out infinite reverse;
}
.levitation-shard-5 {
  left: 1%;
  top: 45%;
  width: 62px;
  height: 34px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(106,245,255,.16),
      transparent
    );
  clip-path: polygon(0 50%,30% 0,74% 25%,100% 50%,66% 76%,32% 100%);
  animation: levitationShardFive2679 6.4s ease-in-out infinite;
}
.levitation-mist {
  position: absolute;
  z-index: 2;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(10px);
}
.levitation-mist-1 {
  left: 2%;
  top: 22%;
  width: 100px;
  height: 24px;
  background: linear-gradient(90deg,transparent,rgba(74,230,255,.13),transparent);
  animation: levitationMistOne2679 6.5s ease-in-out infinite;
}
.levitation-mist-2 {
  right: 1%;
  top: 60%;
  width: 108px;
  height: 26px;
  background: linear-gradient(90deg,transparent,rgba(108,103,255,.11),transparent);
  animation: levitationMistTwo2679 7.1s ease-in-out infinite;
}
.levitation-mist-3 {
  left: 20%;
  bottom: 8%;
  width: 155px;
  height: 18px;
  background: linear-gradient(90deg,transparent,rgba(75,245,222,.1),transparent);
  animation: levitationMistThree2679 5.9s ease-in-out infinite;
}
.levitation-mist-4 {
  right: 21%;
  top: 10%;
  width: 135px;
  height: 20px;
  background: linear-gradient(90deg,transparent,rgba(102,151,255,.09),transparent);
  animation: levitationMistFour2679 6.9s ease-in-out infinite;
}
.levitation-ray {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  pointer-events: none;
}
.levitation-ray-1 {
  width: 205px;
  height: 205px;
  background:
    repeating-conic-gradient(
      from 0deg,
      rgba(104,255,237,.055) 0deg,
      rgba(104,255,237,.055) 1deg,
      transparent 1deg,
      transparent 25deg
    );
  mask-image: radial-gradient(circle,transparent 0 28%,#000 52%,transparent 76%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 28%,#000 52%,transparent 76%);
  animation: levitationRayOne2679 16s linear infinite;
  opacity: .38;
}
.levitation-ray-2 {
  width: 265px;
  height: 265px;
  background:
    repeating-conic-gradient(
      from 14deg,
      rgba(85,130,255,.05) 0deg,
      rgba(85,130,255,.05) 2deg,
      transparent 2deg,
      transparent 35deg
    );
  mask-image: radial-gradient(circle,transparent 0 32%,#000 50%,transparent 77%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 32%,#000 50%,transparent 77%);
  animation: levitationRayTwo2679 20s linear infinite reverse;
  opacity: .25;
}
.levitation-ray-3 {
  width: 315px;
  height: 315px;
  background:
    repeating-conic-gradient(
      from 5deg,
      rgba(89,244,218,.025) 0deg,
      rgba(89,244,218,.025) 3deg,
      transparent 3deg,
      transparent 52deg
    );
  mask-image: radial-gradient(circle,transparent 0 42%,#000 55%,transparent 75%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 42%,#000 55%,transparent 75%);
  animation: levitationRayThree2679 27s linear infinite;
  opacity: .3;
}
.levitation-ray-4 {
  width: 148px;
  height: 148px;
  background:
    repeating-conic-gradient(
      from 20deg,
      rgba(181,255,249,.07) 0deg,
      rgba(181,255,249,.07) 1deg,
      transparent 1deg,
      transparent 18deg
    );
  mask-image: radial-gradient(circle,transparent 0 31%,#000 43%,transparent 66%);
  -webkit-mask-image: radial-gradient(circle,transparent 0 31%,#000 43%,transparent 66%);
  animation: levitationRayFour2679 9s linear infinite reverse;
  opacity: .4;
}
.levitation-sheen {
  position: absolute;
  top: -50%;
  left: -72%;
  z-index: 30;
  width: 42%;
  height: 200%;
  transform: rotate(23deg);
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,.025) 23%,
      rgba(226,255,252,.42) 48%,
      rgba(255,255,255,.08) 62%,
      transparent 100%
    );
  filter: blur(1px);
  animation: levitationSheen2679 5.1s cubic-bezier(.17,.72,.2,1) infinite;
  pointer-events: none;
}
.levitation-scan {
  position: absolute;
  left: 13px;
  right: 13px;
  top: -18%;
  z-index: 31;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.04),
      rgba(105,255,239,.72),
      rgba(166,241,255,.24),
      rgba(92,130,255,.58),
      transparent
    );
  box-shadow:
    0 0 8px rgba(88,255,234,.28),
    0 0 18px rgba(63,165,255,.12);
  filter: blur(.2px);
  animation: levitationScan2679 4.3s ease-in-out infinite;
  pointer-events: none;
}
.levitation-border {
  position: absolute;
  inset: 4px;
  z-index: 35;
  border-radius: 19px;
  padding: 2px;
  background:
    conic-gradient(
      from 0deg,
      #50ffe1,
      #42d8ff,
      #527bff,
      #9961ff,
      #ff6bd8,
      #4fffe0
    );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: levitationBorder2679 5s linear infinite;
  box-shadow: 0 0 28px rgba(74,225,255,.13);
  pointer-events: none;
}
.levitation-content {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 38;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 255px;
  min-height: 64px;
  transform: translate(-50%,-50%);
  pointer-events: none;
  text-shadow:
    0 1px 3px rgba(0,0,0,.48),
    0 0 12px rgba(104,255,237,.2);
}
.levitation-content i {
  width: 31px;
  height: 31px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f1ffff;
  font-size: 27px;
  text-shadow:
    0 0 6px rgba(255,255,255,.98),
    0 0 14px rgba(92,255,237,.82),
    0 0 27px rgba(47,167,255,.55);
  animation:
    levitationIconFloat2679 3s ease-in-out infinite,
    levitationIconGlow2679 2.1s ease-in-out infinite;
}
.levitation-title {
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 2.8px;
  background:
    linear-gradient(
      90deg,
      #edffff,
      #6fffea,
      #5edbff,
      #7b88ff,
      #c779ff,
      #edffff
    );
  background-size: 320% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: levitationTitle2679 4.2s linear infinite;
}
.levitation-subtitle {
  position: absolute;
  left: 50%;
  top: 38px;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 7.2px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2.8px;
  color: rgba(174,245,255,.62);
  text-transform: uppercase;
}
.btn-levitation-element:hover .levitation-aura {
  animation-duration: 2.7s;
}
.btn-levitation-element:hover .levitation-aura-2 {
  animation-duration: 3.8s;
}
.btn-levitation-element:hover .levitation-aura-3 {
  animation-duration: 2.5s;
}
.btn-levitation-element:hover .levitation-core {
  animation-duration: 2.3s;
}
.btn-levitation-element:hover .levitation-core-inner {
  animation-duration: 1.7s;
}
.btn-levitation-element:hover .levitation-core-light {
  animation-duration: .95s;
}
.btn-levitation-element:hover .levitation-particle {
  animation-duration: 2.5s;
}
.btn-levitation-element:hover .levitation-sheen {
  animation-duration: 2.9s;
}
.btn-levitation-element:hover .levitation-scan {
  animation-duration: 2.2s;
}
.btn-levitation-element:hover .levitation-title {
  animation-duration: 2.4s;
}
.btn-levitation-element:hover .levitation-orbit-1 {
  border-color: rgba(122,239,255,.24);
}
.btn-levitation-element:hover .levitation-orbit-2 {
  border-color: rgba(117,132,255,.16);
}
.btn-levitation-element:hover .levitation-orbit-3 {
  border-color: rgba(93,246,227,.13);
}
.btn-levitation-element:hover .levitation-ring-1 {
  border-color: rgba(127,255,237,.24);
}
.btn-levitation-element:hover .levitation-ring-2 {
  border-color: rgba(91,204,255,.14);
}
.btn-levitation-element:hover .levitation-ring-3 {
  border-color: rgba(126,103,255,.12);
}
@keyframes levitationAura2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.86);
    opacity: .38;
  }
  25% {
    transform: translate(-48%,-53%) scale(.97);
    opacity: .56;
  }
  50% {
    transform: translate(-52%,-47%) scale(1.12);
    opacity: .84;
  }
  75% {
    transform: translate(-49%,-50%) scale(.98);
    opacity: .55;
  }
}
@keyframes levitationAuraTwo2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.82);
    opacity: .22;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.16);
    opacity: .52;
  }
}
@keyframes levitationAuraThree2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scaleX(.74);
    opacity: .18;
  }
  50% {
    transform: translate(-50%,-50%) scaleX(1.22);
    opacity: .6;
  }
}
@keyframes levitationOrbitOne2679 {
  0% {
    transform: translate(-50%,-50%) rotate(4deg) scale(1);
    opacity: .16;
  }
  50% {
    transform: translate(-50%,-50%) rotate(184deg) scale(1.04);
    opacity: .44;
  }
  100% {
    transform: translate(-50%,-50%) rotate(364deg) scale(1);
    opacity: .16;
  }
}
@keyframes levitationOrbitTwo2679 {
  0% {
    transform: translate(-50%,-50%) rotate(-18deg) scale(.94);
    opacity: .09;
  }
  50% {
    transform: translate(-50%,-50%) rotate(162deg) scale(1.06);
    opacity: .32;
  }
  100% {
    transform: translate(-50%,-50%) rotate(342deg) scale(.94);
    opacity: .09;
  }
}
@keyframes levitationOrbitThree2679 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.9);
    opacity: .1;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.03);
    opacity: .28;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.9);
    opacity: .1;
  }
}
@keyframes levitationOrbitFour2679 {
  0% {
    transform: translate(-50%,-50%) rotate(29deg) scale(.95);
    opacity: .05;
  }
  50% {
    transform: translate(-50%,-50%) rotate(209deg) scale(1.03);
    opacity: .16;
  }
  100% {
    transform: translate(-50%,-50%) rotate(389deg) scale(.95);
    opacity: .05;
  }
}
@keyframes levitationRingOne2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.82);
    opacity: .3;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.1);
    opacity: .9;
  }
}
@keyframes levitationRingTwo2679 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.9);
    opacity: .13;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.04);
    opacity: .35;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.9);
    opacity: .13;
  }
}
@keyframes levitationRingThree2679 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.96);
    opacity: .07;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.02);
    opacity: .22;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.96);
    opacity: .07;
  }
}
@keyframes levitationRingFour2679 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.94);
    opacity: .04;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.06);
    opacity: .11;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.94);
    opacity: .04;
  }
}
@keyframes levitationCoreFloat2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) translateY(4px) scale(.9);
    opacity: .52;
  }
  50% {
    transform: translate(-50%,-50%) translateY(-6px) scale(1.07);
    opacity: 1;
  }
}
@keyframes levitationCoreInner2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.83);
    filter: brightness(.9) saturate(1);
  }
  50% {
    transform: translate(-50%,-50%) scale(1.1);
    filter: brightness(1.3) saturate(1.18);
  }
}
@keyframes levitationCoreLight2679 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.72);
    opacity: .66;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.25);
    opacity: 1;
  }
}
@keyframes levitationEnergyOne2679 {
  0%,
  100% {
    transform: translate3d(-8px,3px,0) rotate(17deg) scaleX(.65);
    opacity: .08;
  }
  50% {
    transform: translate3d(12px,-5px,0) rotate(14deg) scaleX(1.1);
    opacity: .65;
  }
}
@keyframes levitationEnergyTwo2679 {
  0%,
  100% {
    transform: translate3d(8px,-3px,0) rotate(-19deg) scaleX(.62);
    opacity: .08;
  }
  50% {
    transform: translate3d(-12px,5px,0) rotate(-15deg) scaleX(1.08);
    opacity: .58;
  }
}
@keyframes levitationEnergyThree2679 {
  0%,
  100% {
    transform: translate3d(7px,2px,0) rotate(-12deg) scaleX(.7);
    opacity: .08;
  }
  50% {
    transform: translate3d(-13px,-5px,0) rotate(-9deg) scaleX(1.06);
    opacity: .58;
  }
}
@keyframes levitationEnergyFour2679 {
  0%,
  100% {
    transform: translate3d(-6px,-2px,0) rotate(13deg) scaleX(.64);
    opacity: .07;
  }
  50% {
    transform: translate3d(11px,6px,0) rotate(10deg) scaleX(1.08);
    opacity: .62;
  }
}
@keyframes levitationEnergyFive2679 {
  0%,
  100% {
    transform: translate3d(0,5px,0) rotate(48deg) scaleX(.6);
    opacity: .06;
  }
  50% {
    transform: translate3d(7px,-8px,0) rotate(55deg) scaleX(1.08);
    opacity: .5;
  }
}
@keyframes levitationEnergySix2679 {
  0%,
  100% {
    transform: translate3d(0,-4px,0) rotate(-42deg) scaleX(.58);
    opacity: .06;
  }
  50% {
    transform: translate3d(-7px,8px,0) rotate(-35deg) scaleX(1.06);
    opacity: .48;
  }
}
@keyframes levitationParticleOne2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .16;
  }
  25% {
    transform: translate3d(8px,-12px,0) scale(1);
    opacity: .72;
  }
  50% {
    transform: translate3d(16px,-4px,0) scale(1.2);
    opacity: 1;
  }
  75% {
    transform: translate3d(8px,9px,0) scale(.8);
    opacity: .42;
  }
}
@keyframes levitationParticleTwo2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .18;
  }
  50% {
    transform: translate3d(-10px,-15px,0) scale(1.2);
    opacity: .9;
  }
}
@keyframes levitationParticleThree2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.45);
    opacity: .13;
  }
  50% {
    transform: translate3d(11px,14px,0) scale(1.15);
    opacity: .82;
  }
}
@keyframes levitationParticleFour2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.52);
    opacity: .18;
  }
  50% {
    transform: translate3d(-8px,-11px,0) scale(1.18);
    opacity: .9;
  }
}
@keyframes levitationParticleFive2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.42);
    opacity: .14;
  }
  50% {
    transform: translate3d(5px,15px,0) scale(1.24);
    opacity: .94;
  }
}
@keyframes levitationParticleSix2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .15;
  }
  50% {
    transform: translate3d(-13px,-8px,0) scale(1.1);
    opacity: .82;
  }
}
@keyframes levitationParticleSeven2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.48);
    opacity: .14;
  }
  50% {
    transform: translate3d(8px,12px,0) scale(1.2);
    opacity: .9;
  }
}
@keyframes levitationParticleEight2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .16;
  }
  50% {
    transform: translate3d(-11px,-10px,0) scale(1.18);
    opacity: .86;
  }
}
@keyframes levitationParticleNine2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.43);
    opacity: .12;
  }
  50% {
    transform: translate3d(-8px,14px,0) scale(1.2);
    opacity: .92;
  }
}
@keyframes levitationParticleTen2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .17;
  }
  50% {
    transform: translate3d(9px,-14px,0) scale(1.14);
    opacity: .84;
  }
}
@keyframes levitationParticleEleven2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.46);
    opacity: .13;
  }
  50% {
    transform: translate3d(-7px,11px,0) scale(1.15);
    opacity: .86;
  }
}
@keyframes levitationParticleTwelve2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .14;
  }
  50% {
    transform: translate3d(11px,-13px,0) scale(1.17);
    opacity: .92;
  }
}
@keyframes levitationParticleThirteen2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.4);
    opacity: .11;
  }
  50% {
    transform: translate3d(-9px,-9px,0) scale(1.25);
    opacity: .95;
  }
}
@keyframes levitationParticleFourteen2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.44);
    opacity: .1;
  }
  50% {
    transform: translate3d(10px,8px,0) scale(1.18);
    opacity: .9;
  }
}
@keyframes levitationParticleFifteen2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .15;
  }
  50% {
    transform: translate3d(-10px,15px,0) scale(1.14);
    opacity: .88;
  }
}
@keyframes levitationParticleSixteen2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.42);
    opacity: .12;
  }
  50% {
    transform: translate3d(-12px,-8px,0) scale(1.2);
    opacity: .94;
  }
}
@keyframes levitationCrystalOne2679 {
  0% {
    transform: rotate(0deg) scale(.72) translate3d(0,0,0);
    opacity: .2;
  }
  50% {
    transform: rotate(180deg) scale(.95) translate3d(5px,-4px,0);
    opacity: .65;
  }
  100% {
    transform: rotate(360deg) scale(.72) translate3d(0,0,0);
    opacity: .2;
  }
}
@keyframes levitationCrystalTwo2679 {
  0% {
    transform: rotate(0deg) scale(.5) translate3d(0,0,0);
    opacity: .12;
  }
  50% {
    transform: rotate(-180deg) scale(.82) translate3d(-7px,4px,0);
    opacity: .5;
  }
  100% {
    transform: rotate(-360deg) scale(.5) translate3d(0,0,0);
    opacity: .12;
  }
}
@keyframes levitationCrystalThree2679 {
  0% {
    transform: rotate(0deg) scale(.8) translate3d(0,0,0);
    opacity: .2;
  }
  50% {
    transform: rotate(180deg) scale(1) translate3d(-5px,5px,0);
    opacity: .62;
  }
  100% {
    transform: rotate(360deg) scale(.8) translate3d(0,0,0);
    opacity: .2;
  }
}
@keyframes levitationCrystalFour2679 {
  0% {
    transform: rotate(0deg) scale(.6) translate3d(0,0,0);
    opacity: .12;
  }
  50% {
    transform: rotate(-180deg) scale(.85) translate3d(6px,-5px,0);
    opacity: .48;
  }
  100% {
    transform: rotate(-360deg) scale(.6) translate3d(0,0,0);
    opacity: .12;
  }
}
@keyframes levitationCrystalFive2679 {
  0% {
    transform: rotate(0deg) scale(.42) translate3d(0,0,0);
    opacity: .1;
  }
  50% {
    transform: rotate(180deg) scale(.72) translate3d(5px,7px,0);
    opacity: .42;
  }
  100% {
    transform: rotate(360deg) scale(.42) translate3d(0,0,0);
    opacity: .1;
  }
}
@keyframes levitationCrystalSix2679 {
  0% {
    transform: rotate(0deg) scale(.4) translate3d(0,0,0);
    opacity: .08;
  }
  50% {
    transform: rotate(-180deg) scale(.68) translate3d(-4px,-6px,0);
    opacity: .4;
  }
  100% {
    transform: rotate(-360deg) scale(.4) translate3d(0,0,0);
    opacity: .08;
  }
}
@keyframes levitationShardOne2679 {
  0%,
  100% {
    transform: rotate(-17deg) translate3d(0,0,0);
    opacity: .12;
  }
  50% {
    transform: rotate(-11deg) translate3d(10px,-5px,0);
    opacity: .3;
  }
}
@keyframes levitationShardTwo2679 {
  0%,
  100% {
    transform: rotate(24deg) translate3d(0,0,0);
    opacity: .1;
  }
  50% {
    transform: rotate(31deg) translate3d(-9px,7px,0);
    opacity: .27;
  }
}
@keyframes levitationShardThree2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) rotate(0deg);
    opacity: .08;
  }
  50% {
    transform: translate3d(6px,7px,0) rotate(5deg);
    opacity: .24;
  }
}
@keyframes levitationShardFour2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) rotate(0deg);
    opacity: .09;
  }
  50% {
    transform: translate3d(-6px,-8px,0) rotate(-6deg);
    opacity: .26;
  }
}
@keyframes levitationShardFive2679 {
  0%,
  100% {
    transform: translate3d(0,0,0) rotate(0deg);
    opacity: .08;
  }
  50% {
    transform: translate3d(9px,0,0) rotate(8deg);
    opacity: .25;
  }
}
@keyframes levitationMistOne2679 {
  0%,
  100% {
    transform: translateX(-18px) scaleX(.7);
    opacity: .08;
  }
  50% {
    transform: translateX(18px) scaleX(1.15);
    opacity: .35;
  }
}
@keyframes levitationMistTwo2679 {
  0%,
  100% {
    transform: translateX(17px) scaleX(.7);
    opacity: .06;
  }
  50% {
    transform: translateX(-16px) scaleX(1.15);
    opacity: .3;
  }
}
@keyframes levitationMistThree2679 {
  0%,
  100% {
    transform: translateX(-15px) scaleX(.7);
    opacity: .05;
  }
  50% {
    transform: translateX(16px) scaleX(1.08);
    opacity: .26;
  }
}
@keyframes levitationMistFour2679 {
  0%,
  100% {
    transform: translateX(14px) scaleX(.72);
    opacity: .05;
  }
  50% {
    transform: translateX(-17px) scaleX(1.1);
    opacity: .23;
  }
}
@keyframes levitationRayOne2679 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes levitationRayTwo2679 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-360deg);
  }
}
@keyframes levitationRayThree2679 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
}
@keyframes levitationRayFour2679 {
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(-360deg);
  }
}
@keyframes levitationSheen2679 {
  0% {
    left: -74%;
    opacity: 0;
  }
  9% {
    opacity: .02;
  }
  18% {
    opacity: .7;
  }
  32% {
    opacity: .14;
  }
  45% {
    left: 138%;
    opacity: 0;
  }
  100% {
    left: 138%;
    opacity: 0;
  }
}
@keyframes levitationScan2679 {
  0% {
    top: -18%;
    opacity: 0;
  }
  10% {
    opacity: .08;
  }
  26% {
    opacity: .65;
  }
  43% {
    opacity: .14;
  }
  59% {
    top: 118%;
    opacity: 0;
  }
  100% {
    top: 118%;
    opacity: 0;
  }
}
@keyframes levitationBorder2679 {
  to {
    transform: rotate(360deg);
  }
}
@keyframes levitationIconFloat2679 {
  0%,
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-5px) rotate(-6deg) scale(1.08);
  }
}
@keyframes levitationIconGlow2679 {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.35);
  }
}
@keyframes levitationTitle2679 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 160% 50%;
  }
  100% {
    background-position: 320% 50%;
  }
}
@media (max-width: 680px) {
  .btn-levitation-element {
    width: 280px;
    height: 112px;
    border-radius: 20px;
  }
  .levitation-content {
    width: 225px;
  }
  .levitation-title {
    font-size: 18px;
    letter-spacing: 2.3px;
  }
  .levitation-content i {
    font-size: 24px;
  }
  .levitation-subtitle {
    top: 36px;
    font-size: 6.6px;
  }
}
@media (max-width: 480px) {
  .btn-levitation-element {
    width: 240px;
    height: 96px;
    border-radius: 17px;
  }
  .levitation-content {
    width: 200px;
    gap: 8px;
  }
  .levitation-title {
    font-size: 15px;
    letter-spacing: 1.8px;
  }
  .levitation-content i {
    width: 25px;
    height: 25px;
    font-size: 20px;
  }
  .levitation-subtitle {
    top: 31px;
    font-size: 5.8px;
    letter-spacing: 1.8px;
  }
  .levitation-core {
    width: 94px;
    height: 94px;
  }
  .levitation-core-inner {
    width: 58px;
    height: 58px;
  }
  .levitation-core-light {
    width: 18px;
    height: 18px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn-levitation-element,
  .btn-levitation-element *,
  .btn-levitation-element::before,
  .btn-levitation-element::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`,
  },
  {
    id: 2680,
    name: "Phoenix Element",
    preview: (
      <button className="btn-phoenix-element">
        <span className="phoenix-aura"></span>
        <span className="phoenix-aura phoenix-aura-2"></span>
        <span className="phoenix-aura phoenix-aura-3"></span>
        <span className="phoenix-ring phoenix-ring-1"></span>
        <span className="phoenix-ring phoenix-ring-2"></span>
        <span className="phoenix-ring phoenix-ring-3"></span>
        <span className="phoenix-flame phoenix-flame-1"></span>
        <span className="phoenix-flame phoenix-flame-2"></span>
        <span className="phoenix-flame phoenix-flame-3"></span>
        <span className="phoenix-flame phoenix-flame-4"></span>
        <span className="phoenix-flame phoenix-flame-5"></span>
        <span className="phoenix-feather phoenix-feather-1"></span>
        <span className="phoenix-feather phoenix-feather-2"></span>
        <span className="phoenix-feather phoenix-feather-3"></span>
        <span className="phoenix-feather phoenix-feather-4"></span>
        <span className="phoenix-feather phoenix-feather-5"></span>
        <span className="phoenix-feather phoenix-feather-6"></span>
        <span className="phoenix-feather phoenix-feather-7"></span>
        <span className="phoenix-feather phoenix-feather-8"></span>
        <span className="phoenix-particle phoenix-particle-1"></span>
        <span className="phoenix-particle phoenix-particle-2"></span>
        <span className="phoenix-particle phoenix-particle-3"></span>
        <span className="phoenix-particle phoenix-particle-4"></span>
        <span className="phoenix-particle phoenix-particle-5"></span>
        <span className="phoenix-particle phoenix-particle-6"></span>
        <span className="phoenix-particle phoenix-particle-7"></span>
        <span className="phoenix-particle phoenix-particle-8"></span>
        <span className="phoenix-particle phoenix-particle-9"></span>
        <span className="phoenix-particle phoenix-particle-10"></span>
        <span className="phoenix-particle phoenix-particle-11"></span>
        <span className="phoenix-particle phoenix-particle-12"></span>
        <span className="phoenix-spark phoenix-spark-1"></span>
        <span className="phoenix-spark phoenix-spark-2"></span>
        <span className="phoenix-spark phoenix-spark-3"></span>
        <span className="phoenix-spark phoenix-spark-4"></span>
        <span className="phoenix-spark phoenix-spark-5"></span>
        <span className="phoenix-core">
          <span className="phoenix-core-inner"></span>
          <span className="phoenix-core-light"></span>
        </span>
        <span className="phoenix-wing phoenix-wing-left"></span>
        <span className="phoenix-wing phoenix-wing-right"></span>
        <span className="phoenix-sheen"></span>
        <span className="phoenix-scan"></span>
        <span className="phoenix-border"></span>
        <span className="phoenix-content">
          <i className="ri-fire-fill"></i>
          <span className="phoenix-title">PHOENIX</span>
          <span className="phoenix-subtitle">REBORN IN FIRE</span>
        </span>
      </button>
    ),
    html: `<button class="btn-phoenix-element">
  <span class="phoenix-aura"></span>
  <span class="phoenix-aura phoenix-aura-2"></span>
  <span class="phoenix-aura phoenix-aura-3"></span>
  <span class="phoenix-ring phoenix-ring-1"></span>
  <span class="phoenix-ring phoenix-ring-2"></span>
  <span class="phoenix-ring phoenix-ring-3"></span>
  <span class="phoenix-flame phoenix-flame-1"></span>
  <span class="phoenix-flame phoenix-flame-2"></span>
  <span class="phoenix-flame phoenix-flame-3"></span>
  <span class="phoenix-flame phoenix-flame-4"></span>
  <span class="phoenix-flame phoenix-flame-5"></span>
  <span class="phoenix-feather phoenix-feather-1"></span>
  <span class="phoenix-feather phoenix-feather-2"></span>
  <span class="phoenix-feather phoenix-feather-3"></span>
  <span class="phoenix-feather phoenix-feather-4"></span>
  <span class="phoenix-feather phoenix-feather-5"></span>
  <span class="phoenix-feather phoenix-feather-6"></span>
  <span class="phoenix-feather phoenix-feather-7"></span>
  <span class="phoenix-feather phoenix-feather-8"></span>
  <span class="phoenix-particle phoenix-particle-1"></span>
  <span class="phoenix-particle phoenix-particle-2"></span>
  <span class="phoenix-particle phoenix-particle-3"></span>
  <span class="phoenix-particle phoenix-particle-4"></span>
  <span class="phoenix-particle phoenix-particle-5"></span>
  <span class="phoenix-particle phoenix-particle-6"></span>
  <span class="phoenix-particle phoenix-particle-7"></span>
  <span class="phoenix-particle phoenix-particle-8"></span>
  <span class="phoenix-particle phoenix-particle-9"></span>
  <span class="phoenix-particle phoenix-particle-10"></span>
  <span class="phoenix-particle phoenix-particle-11"></span>
  <span class="phoenix-particle phoenix-particle-12"></span>
  <span class="phoenix-spark phoenix-spark-1"></span>
  <span class="phoenix-spark phoenix-spark-2"></span>
  <span class="phoenix-spark phoenix-spark-3"></span>
  <span class="phoenix-spark phoenix-spark-4"></span>
  <span class="phoenix-spark phoenix-spark-5"></span>
  <span class="phoenix-core">
    <span class="phoenix-core-inner"></span>
    <span class="phoenix-core-light"></span>
  </span>
  <span class="phoenix-wing phoenix-wing-left"></span>
  <span class="phoenix-wing phoenix-wing-right"></span>
  <span class="phoenix-sheen"></span>
  <span class="phoenix-scan"></span>
  <span class="phoenix-border"></span>
  <span class="phoenix-content">
    <i class="ri-fire-fill"></i>
    <span class="phoenix-title">PHOENIX</span>
    <span class="phoenix-subtitle">REBORN IN FIRE</span>
  </span>
</button>`,
    css: `
.btn-phoenix-element {
  --phoenix-red: #ff3b18;
  --phoenix-orange: #ff7a18;
  --phoenix-gold: #ffc247;
  --phoenix-yellow: #fff4a1;
  --phoenix-white: #fffdf5;
  --phoenix-dark: #1c0905;
  --phoenix-deep: #090403;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 126px;
  padding: 0;
  border: 1px solid rgba(255,151,67,.4);
  border-radius: 22px;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 50% 48%,rgba(255,83,24,.17),transparent 28%),
    radial-gradient(circle at 18% 25%,rgba(255,177,52,.08),transparent 24%),
    radial-gradient(circle at 82% 76%,rgba(255,54,0,.11),transparent 30%),
    linear-gradient(145deg,#170805 0%,#1e0a06 42%,#090303 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    inset 0 0 0 1px rgba(255,168,73,.035),
    0 8px 22px rgba(0,0,0,.38),
    0 18px 44px rgba(255,77,17,.08),
    0 0 32px rgba(255,109,31,.1);
  color: #fff;
  cursor: pointer;
  transform: translate3d(0,0,0);
  transform-style: preserve-3d;
  transition:
    transform .45s cubic-bezier(.18,.82,.2,1),
    box-shadow .45s ease,
    border-color .45s ease,
    filter .45s ease;
}
.btn-phoenix-element:hover {
  transform: translate3d(0,-8px,0) scale(1.035) rotateX(2deg);
  border-color: rgba(255,197,119,.82);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.09),
    0 13px 34px rgba(0,0,0,.3),
    0 0 42px rgba(255,82,19,.24),
    0 0 86px rgba(255,155,54,.11);
  filter: brightness(1.09);
}
.btn-phoenix-element:active {
  transform: translate3d(0,-2px,0) scale(.985);
}
.btn-phoenix-element:focus-visible {
  outline: none;
  border-color: rgba(255,232,174,.96);
  box-shadow:
    0 0 0 3px rgba(255,145,52,.18),
    0 0 0 7px rgba(255,145,52,.06),
    0 0 48px rgba(255,110,33,.3);
}
.btn-phoenix-element::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 0;
  border-radius: 21px;
  background:
    linear-gradient(115deg,rgba(255,255,255,.045),transparent 20%,transparent 75%,rgba(255,107,31,.06)),
    radial-gradient(circle at 50% 0%,rgba(255,229,167,.08),transparent 30%);
  pointer-events: none;
}
.btn-phoenix-element::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 45;
  border-radius: inherit;
  border: 1px solid rgba(255,255,255,.045);
  pointer-events: none;
}
.phoenix-aura {
  position: absolute;
  left: 50%;
  top: 52%;
  z-index: -6;
  width: 280px;
  height: 118px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse,
      rgba(255,90,22,.38) 0%,
      rgba(255,139,34,.2) 30%,
      rgba(255,196,73,.08) 52%,
      transparent 74%
    );
  filter: blur(24px);
  animation: phoenixAura2680 4s ease-in-out infinite;
  pointer-events: none;
}
.phoenix-aura-2 {
  width: 360px;
  height: 165px;
  top: 52%;
  background:
    radial-gradient(
      ellipse,
      rgba(255,59,10,.16),
      rgba(255,124,36,.1) 36%,
      rgba(255,181,65,.05) 51%,
      transparent 76%
    );
  filter: blur(34px);
  animation: phoenixAuraTwo2680 6s ease-in-out infinite;
}
.phoenix-aura-3 {
  width: 180px;
  height: 180px;
  background:
    radial-gradient(
      circle,
      rgba(255,219,105,.13),
      rgba(255,106,21,.08) 38%,
      transparent 72%
    );
  filter: blur(24px);
  animation: phoenixAuraThree2680 3.4s ease-in-out infinite;
}
.phoenix-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
}
.phoenix-ring-1 {
  width: 222px;
  height: 71px;
  border: 1px solid rgba(255,172,61,.18);
  animation: phoenixRingOne2680 7s linear infinite;
}
.phoenix-ring-2 {
  width: 178px;
  height: 178px;
  border: 1px solid rgba(255,93,31,.09);
  animation: phoenixRingTwo2680 11s linear infinite reverse;
}
.phoenix-ring-3 {
  width: 285px;
  height: 112px;
  border: 1px solid rgba(255,195,77,.07);
  transform: translate(-50%,-50%) rotate(18deg);
  animation: phoenixRingThree2680 14s linear infinite;
}
.phoenix-flame {
  position: absolute;
  z-index: 8;
  bottom: 7px;
  width: 48px;
  height: 78px;
  border-radius: 65% 35% 58% 42% / 70% 70% 30% 30%;
  background:
    linear-gradient(
      to top,
      #ff3c12 0%,
      #ff711d 36%,
      #ffc648 70%,
      #fff5b3 91%,
      transparent 100%
    );
  filter: blur(1px);
  transform-origin: 50% 100%;
  opacity: .56;
  clip-path: polygon(
    50% 100%,
    13% 84%,
    4% 58%,
    25% 65%,
    17% 40%,
    38% 52%,
    35% 22%,
    53% 42%,
    61% 0%,
    70% 37%,
    90% 24%,
    82% 55%,
    100% 47%,
    87% 77%
  );
  pointer-events: none;
}
.phoenix-flame-1 {
  left: 73px;
  height: 76px;
  animation: phoenixFlameOne2680 1.6s ease-in-out infinite;
}
.phoenix-flame-2 {
  left: 107px;
  height: 93px;
  width: 56px;
  opacity: .72;
  animation: phoenixFlameTwo2680 1.35s ease-in-out infinite .12s;
}
.phoenix-flame-3 {
  left: 144px;
  bottom: 3px;
  height: 104px;
  width: 58px;
  opacity: .83;
  animation: phoenixFlameThree2680 1.25s ease-in-out infinite;
}
.phoenix-flame-4 {
  right: 105px;
  height: 90px;
  width: 56px;
  opacity: .69;
  animation: phoenixFlameFour2680 1.45s ease-in-out infinite .08s;
}
.phoenix-flame-5 {
  right: 68px;
  height: 74px;
  opacity: .5;
  animation: phoenixFlameFive2680 1.7s ease-in-out infinite .2s;
}
.phoenix-feather {
  position: absolute;
  z-index: 7;
  width: 30px;
  height: 63px;
  border-radius: 100% 0 100% 0;
  background:
    linear-gradient(
      145deg,
      rgba(255,236,164,.82),
      rgba(255,152,33,.55) 42%,
      rgba(255,58,15,.15) 75%,
      transparent
    );
  filter: blur(.2px);
  opacity: .4;
  transform-origin: bottom center;
  clip-path: polygon(
    50% 0,
    73% 14%,
    100% 39%,
    78% 51%,
    97% 76%,
    63% 68%,
    57% 100%,
    46% 71%,
    17% 92%,
    30% 59%,
    0 49%,
    29% 27%
  );
  pointer-events: none;
}
.phoenix-feather-1 {
  left: 39px;
  top: 19px;
  transform: rotate(-29deg) scale(.72);
  animation: phoenixFeatherOne2680 4.8s ease-in-out infinite;
}
.phoenix-feather-2 {
  left: 67px;
  top: 7px;
  transform: rotate(-19deg) scale(.56);
  animation: phoenixFeatherTwo2680 5.4s ease-in-out infinite .25s;
}
.phoenix-feather-3 {
  left: 89px;
  top: 12px;
  transform: rotate(-9deg) scale(.48);
  animation: phoenixFeatherThree2680 4.4s ease-in-out infinite;
}
.phoenix-feather-4 {
  right: 42px;
  top: 18px;
  transform: rotate(29deg) scale(.72);
  animation: phoenixFeatherFour2680 5s ease-in-out infinite .12s;
}
.phoenix-feather-5 {
  right: 69px;
  top: 8px;
  transform: rotate(18deg) scale(.55);
  animation: phoenixFeatherFive2680 5.5s ease-in-out infinite;
}
.phoenix-feather-6 {
  right: 94px;
  top: 14px;
  transform: rotate(8deg) scale(.45);
  animation: phoenixFeatherSix2680 4.7s ease-in-out infinite .2s;
}
.phoenix-feather-7 {
  left: 36px;
  bottom: 21px;
  transform: rotate(-45deg) scale(.45);
  opacity: .22;
  animation: phoenixFeatherSeven2680 4.6s ease-in-out infinite;
}
.phoenix-feather-8 {
  right: 34px;
  bottom: 20px;
  transform: rotate(45deg) scale(.45);
  opacity: .22;
  animation: phoenixFeatherEight2680 4.6s ease-in-out infinite .3s;
}
.phoenix-particle {
  position: absolute;
  z-index: 18;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff3bd;
  box-shadow:
    0 0 6px rgba(255,242,193,.98),
    0 0 14px rgba(255,151,32,.8),
    0 0 25px rgba(255,63,18,.45);
  pointer-events: none;
}
.phoenix-particle-1 {
  left: 21px;
  top: 55px;
  animation: phoenixParticleOne2680 3.7s ease-in-out infinite;
}
.phoenix-particle-2 {
  left: 43px;
  top: 84px;
  animation: phoenixParticleTwo2680 4.3s ease-in-out infinite .2s;
}
.phoenix-particle-3 {
  left: 69px;
  top: 37px;
  animation: phoenixParticleThree2680 3.8s ease-in-out infinite;
}
.phoenix-particle-4 {
  left: 96px;
  top: 20px;
  animation: phoenixParticleFour2680 4.7s ease-in-out infinite .1s;
}
.phoenix-particle-5 {
  left: 119px;
  top: 10px;
  animation: phoenixParticleFive2680 3.9s ease-in-out infinite;
}
.phoenix-particle-6 {
  left: 144px;
  top: 29px;
  animation: phoenixParticleSix2680 4.5s ease-in-out infinite .35s;
}
.phoenix-particle-7 {
  right: 117px;
  top: 15px;
  animation: phoenixParticleSeven2680 4s ease-in-out infinite;
}
.phoenix-particle-8 {
  right: 92px;
  top: 30px;
  animation: phoenixParticleEight2680 4.8s ease-in-out infinite .2s;
}
.phoenix-particle-9 {
  right: 66px;
  top: 47px;
  animation: phoenixParticleNine2680 3.6s ease-in-out infinite;
}
.phoenix-particle-10 {
  right: 41px;
  top: 82px;
  animation: phoenixParticleTen2680 4.4s ease-in-out infinite .1s;
}
.phoenix-particle-11 {
  right: 20px;
  top: 57px;
  animation: phoenixParticleEleven2680 4.1s ease-in-out infinite .27s;
}
.phoenix-particle-12 {
  left: 157px;
  top: 99px;
  width: 3px;
  height: 3px;
  animation: phoenixParticleTwelve2680 3.5s ease-in-out infinite;
}
.phoenix-spark {
  position: absolute;
  z-index: 20;
  width: 8px;
  height: 8px;
  pointer-events: none;
}
.phoenix-spark::before,
.phoenix-spark::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #fff6c9;
  box-shadow: 0 0 8px rgba(255,175,42,.95),0 0 18px rgba(255,72,17,.6);
}
.phoenix-spark::before {
  width: 2px;
  height: 13px;
}
.phoenix-spark::after {
  width: 13px;
  height: 2px;
}
.phoenix-spark-1 {
  left: 52px;
  top: 34px;
  transform: scale(.65);
  animation: phoenixSparkOne2680 2.8s ease-in-out infinite;
}
.phoenix-spark-2 {
  left: 105px;
  top: 24px;
  transform: scale(.44);
  animation: phoenixSparkTwo2680 3.5s ease-in-out infinite .6s;
}
.phoenix-spark-3 {
  right: 55px;
  top: 37px;
  transform: scale(.65);
  animation: phoenixSparkThree2680 2.9s ease-in-out infinite .35s;
}
.phoenix-spark-4 {
  right: 88px;
  bottom: 25px;
  transform: scale(.5);
  animation: phoenixSparkFour2680 3.8s ease-in-out infinite;
}
.phoenix-spark-5 {
  left: 83px;
  bottom: 23px;
  transform: scale(.42);
  animation: phoenixSparkFive2680 3.3s ease-in-out infinite .45s;
}
.phoenix-core {
  position: absolute;
  left: 50%;
  top: 51%;
  width: 122px;
  height: 122px;
  z-index: 10;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(255,239,185,.08),
      rgba(255,113,22,.1) 25%,
      rgba(255,65,13,.04) 46%,
      transparent 70%
    );
  animation: phoenixCore2680 3.4s ease-in-out infinite;
  pointer-events: none;
}
.phoenix-core-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 75px;
  height: 75px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(
      circle at 44% 36%,
      #fffde9 0%,
      #fff0a8 8%,
      #ffd153 20%,
      #ff8424 34%,
      #ff4213 50%,
      rgba(212,34,7,.14) 68%,
      transparent 75%
    );
  box-shadow:
    0 0 8px rgba(255,246,202,.95),
    0 0 18px rgba(255,199,70,.85),
    0 0 37px rgba(255,102,22,.58),
    0 0 68px rgba(255,55,11,.3);
  animation: phoenixCoreInner2680 2.3s ease-in-out infinite;
}
.phoenix-core-light {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 23px;
  height: 23px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background:
    radial-gradient(circle,#fff 0%,#fffde9 40%,#ffd86a 62%,transparent 78%);
  box-shadow:
    0 0 7px #fff,
    0 0 17px #fff0ae,
    0 0 31px #ffbd40,
    0 0 48px #ff681b;
  animation: phoenixCoreLight2680 1.55s ease-in-out infinite;
}
.phoenix-wing {
  position: absolute;
  z-index: 11;
  top: 35px;
  width: 92px;
  height: 48px;
  pointer-events: none;
  opacity: .26;
  filter: blur(.25px);
  background:
    linear-gradient(
      135deg,
      transparent 0%,
      rgba(255,239,172,.62) 42%,
      rgba(255,124,24,.3) 69%,
      transparent 100%
    );
}
.phoenix-wing-left {
  left: 28px;
  clip-path: polygon(100% 45%,74% 35%,52% 3%,38% 24%,12% 0,25% 36%,0 48%,30% 55%,14% 93%,46% 69%,68% 100%);
  transform-origin: right center;
  animation: phoenixWingLeft2680 3.2s ease-in-out infinite;
}
.phoenix-wing-right {
  right: 28px;
  clip-path: polygon(0 45%,26% 35%,48% 3%,62% 24%,88% 0,75% 36%,100% 48%,70% 55%,86% 93%,54% 69%,32% 100%);
  transform-origin: left center;
  animation: phoenixWingRight2680 3.2s ease-in-out infinite;
}
.phoenix-sheen {
  position: absolute;
  top: -48%;
  left: -72%;
  z-index: 32;
  width: 39%;
  height: 190%;
  transform: rotate(22deg);
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.025) 25%,
      rgba(255,240,199,.48) 48%,
      rgba(255,255,255,.08) 62%,
      transparent
    );
  filter: blur(1px);
  animation: phoenixSheen2680 4.9s cubic-bezier(.18,.72,.2,1) infinite;
  pointer-events: none;
}
.phoenix-scan {
  position: absolute;
  left: 14px;
  right: 14px;
  top: -18%;
  z-index: 34;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,177,63,.07),
      rgba(255,235,168,.7),
      rgba(255,126,27,.25),
      rgba(255,208,107,.55),
      transparent
    );
  box-shadow:
    0 0 8px rgba(255,151,42,.3),
    0 0 20px rgba(255,90,18,.12);
  animation: phoenixScan2680 4s ease-in-out infinite;
  pointer-events: none;
}
.phoenix-border {
  position: absolute;
  inset: 4px;
  z-index: 36;
  border-radius: 19px;
  padding: 2px;
  background:
    conic-gradient(
      from 0deg,
      #ff5c16,
      #ffbf45,
      #ffe29a,
      #ff7920,
      #ff2610,
      #ffb632,
      #ff5c16
    );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: phoenixBorder2680 5s linear infinite;
  pointer-events: none;
}
.phoenix-content {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 268px;
  min-height: 66px;
  transform: translate(-50%,-50%);
  pointer-events: none;
  text-shadow:
    0 1px 3px rgba(0,0,0,.52),
    0 0 12px rgba(255,174,63,.24);
}
.phoenix-content i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  font-size: 28px;
  color: #fff6d2;
  text-shadow:
    0 0 6px rgba(255,255,255,.95),
    0 0 15px rgba(255,210,86,.9),
    0 0 29px rgba(255,90,16,.6);
  animation:
    phoenixIcon2680 2.2s ease-in-out infinite,
    phoenixIconGlow2680 1.8s ease-in-out infinite;
}
.phoenix-title {
  font-size: 21px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 3px;
  background:
    linear-gradient(
      90deg,
      #fff9dc,
      #ffd766,
      #ff9e31,
      #ff5420,
      #ffd768,
      #fff9dc
    );
  background-size: 320% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: phoenixTitle2680 4s linear infinite;
}
.phoenix-subtitle {
  position: absolute;
  left: 50%;
  top: 39px;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 7px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 3px;
  color: rgba(255,204,111,.66);
  text-transform: uppercase;
}
.btn-phoenix-element:hover .phoenix-aura {
  animation-duration: 2.6s;
}
.btn-phoenix-element:hover .phoenix-aura-2 {
  animation-duration: 4s;
}
.btn-phoenix-element:hover .phoenix-aura-3 {
  animation-duration: 2.2s;
}
.btn-phoenix-element:hover .phoenix-flame {
  animation-duration: .78s;
}
.btn-phoenix-element:hover .phoenix-particle {
  animation-duration: 2.1s;
}
.btn-phoenix-element:hover .phoenix-core {
  animation-duration: 2s;
}
.btn-phoenix-element:hover .phoenix-core-inner {
  animation-duration: 1.45s;
}
.btn-phoenix-element:hover .phoenix-core-light {
  animation-duration: .8s;
}
.btn-phoenix-element:hover .phoenix-sheen {
  animation-duration: 2.8s;
}
.btn-phoenix-element:hover .phoenix-scan {
  animation-duration: 2s;
}
.btn-phoenix-element:hover .phoenix-title {
  animation-duration: 2.2s;
}
.btn-phoenix-element:hover .phoenix-wing-left,
.btn-phoenix-element:hover .phoenix-wing-right {
  animation-duration: 1.8s;
}
@keyframes phoenixAura2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.84);
    opacity: .36;
  }
  25% {
    transform: translate(-48%,-53%) scale(.98);
    opacity: .54;
  }
  50% {
    transform: translate(-52%,-48%) scale(1.14);
    opacity: .88;
  }
  75% {
    transform: translate(-49%,-51%) scale(1);
    opacity: .52;
  }
}
@keyframes phoenixAuraTwo2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.84);
    opacity: .2;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.16);
    opacity: .48;
  }
}
@keyframes phoenixAuraThree2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.82);
    opacity: .16;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.18);
    opacity: .54;
  }
}
@keyframes phoenixRingOne2680 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.96);
    opacity: .1;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.05);
    opacity: .34;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.96);
    opacity: .1;
  }
}
@keyframes phoenixRingTwo2680 {
  0% {
    transform: translate(-50%,-50%) rotate(0deg) scale(.9);
    opacity: .06;
  }
  50% {
    transform: translate(-50%,-50%) rotate(180deg) scale(1.04);
    opacity: .2;
  }
  100% {
    transform: translate(-50%,-50%) rotate(360deg) scale(.9);
    opacity: .06;
  }
}
@keyframes phoenixRingThree2680 {
  0% {
    transform: translate(-50%,-50%) rotate(18deg) scale(.94);
    opacity: .05;
  }
  50% {
    transform: translate(-50%,-50%) rotate(198deg) scale(1.03);
    opacity: .14;
  }
  100% {
    transform: translate(-50%,-50%) rotate(378deg) scale(.94);
    opacity: .05;
  }
}
@keyframes phoenixFlameOne2680 {
  0%,
  100% {
    transform: translateY(4px) scale(.82) rotate(-5deg);
    opacity: .36;
  }
  25% {
    transform: translateY(-7px) scale(1.04) rotate(2deg);
    opacity: .62;
  }
  50% {
    transform: translateY(-14px) scale(.88) rotate(-3deg);
    opacity: .5;
  }
  75% {
    transform: translateY(-5px) scale(1.08) rotate(4deg);
    opacity: .66;
  }
}
@keyframes phoenixFlameTwo2680 {
  0%,
  100% {
    transform: translateY(3px) scale(.84) rotate(5deg);
    opacity: .46;
  }
  50% {
    transform: translateY(-17px) scale(1.08) rotate(-4deg);
    opacity: .8;
  }
}
@keyframes phoenixFlameThree2680 {
  0%,
  100% {
    transform: translateY(5px) scale(.88) rotate(-3deg);
    opacity: .52;
  }
  50% {
    transform: translateY(-20px) scale(1.12) rotate(4deg);
    opacity: .98;
  }
}
@keyframes phoenixFlameFour2680 {
  0%,
  100% {
    transform: translateY(4px) scale(.83) rotate(4deg);
    opacity: .43;
  }
  50% {
    transform: translateY(-16px) scale(1.07) rotate(-5deg);
    opacity: .82;
  }
}
@keyframes phoenixFlameFive2680 {
  0%,
  100% {
    transform: translateY(5px) scale(.8) rotate(-4deg);
    opacity: .31;
  }
  50% {
    transform: translateY(-10px) scale(1.05) rotate(5deg);
    opacity: .62;
  }
}
@keyframes phoenixFeatherOne2680 {
  0%,
  100% {
    transform: rotate(-29deg) scale(.72) translate3d(0,0,0);
    opacity: .25;
  }
  50% {
    transform: rotate(-20deg) scale(.92) translate3d(7px,-5px,0);
    opacity: .65;
  }
}
@keyframes phoenixFeatherTwo2680 {
  0%,
  100% {
    transform: rotate(-19deg) scale(.56) translate3d(0,0,0);
    opacity: .18;
  }
  50% {
    transform: rotate(-7deg) scale(.76) translate3d(5px,-9px,0);
    opacity: .53;
  }
}
@keyframes phoenixFeatherThree2680 {
  0%,
  100% {
    transform: rotate(-9deg) scale(.48) translate3d(0,0,0);
    opacity: .17;
  }
  50% {
    transform: rotate(3deg) scale(.68) translate3d(4px,-7px,0);
    opacity: .5;
  }
}
@keyframes phoenixFeatherFour2680 {
  0%,
  100% {
    transform: rotate(29deg) scale(.72) translate3d(0,0,0);
    opacity: .25;
  }
  50% {
    transform: rotate(20deg) scale(.92) translate3d(-7px,-5px,0);
    opacity: .65;
  }
}
@keyframes phoenixFeatherFive2680 {
  0%,
  100% {
    transform: rotate(18deg) scale(.55) translate3d(0,0,0);
    opacity: .18;
  }
  50% {
    transform: rotate(7deg) scale(.75) translate3d(-5px,-9px,0);
    opacity: .53;
  }
}
@keyframes phoenixFeatherSix2680 {
  0%,
  100% {
    transform: rotate(8deg) scale(.45) translate3d(0,0,0);
    opacity: .16;
  }
  50% {
    transform: rotate(-3deg) scale(.65) translate3d(-4px,-7px,0);
    opacity: .46;
  }
}
@keyframes phoenixFeatherSeven2680 {
  0%,
  100% {
    transform: rotate(-45deg) scale(.45) translate3d(0,0,0);
    opacity: .1;
  }
  50% {
    transform: rotate(-36deg) scale(.62) translate3d(7px,3px,0);
    opacity: .28;
  }
}
@keyframes phoenixFeatherEight2680 {
  0%,
  100% {
    transform: rotate(45deg) scale(.45) translate3d(0,0,0);
    opacity: .1;
  }
  50% {
    transform: rotate(36deg) scale(.62) translate3d(-7px,3px,0);
    opacity: .28;
  }
}
@keyframes phoenixParticleOne2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.5);
    opacity: .15;
  }
  50% {
    transform: translate3d(7px,-18px,0) scale(1.18);
    opacity: .94;
  }
}
@keyframes phoenixParticleTwo2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.48);
    opacity: .12;
  }
  50% {
    transform: translate3d(-7px,-14px,0) scale(1.1);
    opacity: .9;
  }
}
@keyframes phoenixParticleThree2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .15;
  }
  50% {
    transform: translate3d(11px,-17px,0) scale(1.2);
    opacity: .92;
  }
}
@keyframes phoenixParticleFour2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.44);
    opacity: .1;
  }
  50% {
    transform: translate3d(-9px,-17px,0) scale(1.18);
    opacity: .9;
  }
}
@keyframes phoenixParticleFive2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.48);
    opacity: .12;
  }
  50% {
    transform: translate3d(5px,-14px,0) scale(1.2);
    opacity: .94;
  }
}
@keyframes phoenixParticleSix2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.55);
    opacity: .13;
  }
  50% {
    transform: translate3d(-8px,-11px,0) scale(1.14);
    opacity: .9;
  }
}
@keyframes phoenixParticleSeven2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.45);
    opacity: .11;
  }
  50% {
    transform: translate3d(8px,-17px,0) scale(1.15);
    opacity: .92;
  }
}
@keyframes phoenixParticleEight2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.52);
    opacity: .14;
  }
  50% {
    transform: translate3d(-8px,-12px,0) scale(1.16);
    opacity: .9;
  }
}
@keyframes phoenixParticleNine2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.43);
    opacity: .1;
  }
  50% {
    transform: translate3d(10px,-16px,0) scale(1.2);
    opacity: .96;
  }
}
@keyframes phoenixParticleTen2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.48);
    opacity: .1;
  }
  50% {
    transform: translate3d(-8px,-15px,0) scale(1.18);
    opacity: .91;
  }
}
@keyframes phoenixParticleEleven2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.45);
    opacity: .12;
  }
  50% {
    transform: translate3d(-10px,-11px,0) scale(1.2);
    opacity: .93;
  }
}
@keyframes phoenixParticleTwelve2680 {
  0%,
  100% {
    transform: translate3d(0,0,0) scale(.38);
    opacity: .08;
  }
  50% {
    transform: translate3d(8px,-19px,0) scale(1.3);
    opacity: 1;
  }
}
@keyframes phoenixSparkOne2680 {
  0%,
  100% {
    transform: scale(.4) rotate(0deg);
    opacity: .1;
  }
  50% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
}
@keyframes phoenixSparkTwo2680 {
  0%,
  100% {
    transform: scale(.3) rotate(0deg);
    opacity: .08;
  }
  50% {
    transform: scale(.8) rotate(45deg);
    opacity: .84;
  }
}
@keyframes phoenixSparkThree2680 {
  0%,
  100% {
    transform: scale(.4) rotate(0deg);
    opacity: .1;
  }
  50% {
    transform: scale(1) rotate(-45deg);
    opacity: 1;
  }
}
@keyframes phoenixSparkFour2680 {
  0%,
  100% {
    transform: scale(.32) rotate(0deg);
    opacity: .08;
  }
  50% {
    transform: scale(.84) rotate(45deg);
    opacity: .88;
  }
}
@keyframes phoenixSparkFive2680 {
  0%,
  100% {
    transform: scale(.3) rotate(0deg);
    opacity: .07;
  }
  50% {
    transform: scale(.8) rotate(-45deg);
    opacity: .86;
  }
}
@keyframes phoenixCore2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.84);
    opacity: .45;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.08);
    opacity: 1;
  }
}
@keyframes phoenixCoreInner2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.82);
    filter: brightness(.9) saturate(1);
  }
  50% {
    transform: translate(-50%,-50%) scale(1.1);
    filter: brightness(1.32) saturate(1.15);
  }
}
@keyframes phoenixCoreLight2680 {
  0%,
  100% {
    transform: translate(-50%,-50%) scale(.7);
    opacity: .68;
  }
  50% {
    transform: translate(-50%,-50%) scale(1.26);
    opacity: 1;
  }
}
@keyframes phoenixWingLeft2680 {
  0%,
  100% {
    transform: scale(.72) rotate(-3deg) translateX(0);
    opacity: .19;
  }
  50% {
    transform: scale(.92) rotate(-11deg) translateX(-8px);
    opacity: .55;
  }
}
@keyframes phoenixWingRight2680 {
  0%,
  100% {
    transform: scale(.72) rotate(3deg) translateX(0);
    opacity: .19;
  }
  50% {
    transform: scale(.92) rotate(11deg) translateX(8px);
    opacity: .55;
  }
}
@keyframes phoenixSheen2680 {
  0% {
    left: -72%;
    opacity: 0;
  }
  9% {
    opacity: .02;
  }
  18% {
    opacity: .72;
  }
  32% {
    opacity: .16;
  }
  46% {
    left: 140%;
    opacity: 0;
  }
  100% {
    left: 140%;
    opacity: 0;
  }
}
@keyframes phoenixScan2680 {
  0% {
    top: -18%;
    opacity: 0;
  }
  12% {
    opacity: .08;
  }
  26% {
    opacity: .66;
  }
  44% {
    opacity: .16;
  }
  61% {
    top: 118%;
    opacity: 0;
  }
  100% {
    top: 118%;
    opacity: 0;
  }
}
@keyframes phoenixBorder2680 {
  to {
    transform: rotate(360deg);
  }
}
@keyframes phoenixIcon2680 {
  0%,
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-5px) rotate(-6deg) scale(1.09);
  }
}
@keyframes phoenixIconGlow2680 {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.36);
  }
}
@keyframes phoenixTitle2680 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 160% 50%;
  }
  100% {
    background-position: 320% 50%;
  }
}
@media (max-width:700px) {
  .btn-phoenix-element {
    width: 285px;
    height: 114px;
  }
  .phoenix-title {
    font-size: 18px;
    letter-spacing: 2.3px;
  }
  .phoenix-content i {
    font-size: 25px;
  }
}
@media (max-width:500px) {
  .btn-phoenix-element {
    width: 245px;
    height: 98px;
    border-radius: 18px;
  }
  .phoenix-content {
    width: 215px;
    gap: 8px;
  }
  .phoenix-title {
    font-size: 15px;
    letter-spacing: 1.8px;
  }
  .phoenix-content i {
    width: 26px;
    height: 26px;
    font-size: 21px;
  }
  .phoenix-subtitle {
    top: 31px;
    font-size: 5.8px;
    letter-spacing: 2px;
  }
  .phoenix-core {
    width: 96px;
    height: 96px;
  }
  .phoenix-core-inner {
    width: 59px;
    height: 59px;
  }
  .phoenix-core-light {
    width: 18px;
    height: 18px;
  }
}
@media (prefers-reduced-motion:reduce) {
  .btn-phoenix-element,
  .btn-phoenix-element *,
  .btn-phoenix-element::before,
  .btn-phoenix-element::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`,
  },
];
