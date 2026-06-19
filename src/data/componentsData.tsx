import "../pages/All.css";

export const buttons = [
    {
        id: 1, name: "Gradient Button", preview: <button className="prev-btn-gradient">Get started</button>,
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
}`
    },
    {
        id: 2, name: "Outline Button", preview: <button className="prev-btn-outline">Hover me!</button>,
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

}`
    },
    {
        id: 3, name: "Pill Button", preview: <button className="prev-btn-pill">Get started</button>,
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
}`
    },
    {
        id: 4, name: "Ghost Button", preview: <button className="prev-btn-ghost">Get started</button>,
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
}`
    },
    {
        id: 13, name: "Button1", preview: <button className="Button1">Get started</button>,
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
}`
    },
    {
        id: 14, name: "Button2", preview: <button className="Button2">Get started</button>,
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
}`
    },
    {
        id: 15, name: "Button3", preview: <button className="Button3">Get started</button>,
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
}`
    },
    {
        id: 16, name: "3D Flip Button", preview: <button className="Button16"><a>Hover me</a></button>,
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
}`
    },
    {
        id: 17, name: "Rainbow Border", preview: <button className="Button17"><a>Hover me</a></button>,
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
}`
    },
    {
        id: 18, name: "Glow Button", preview: <button className="Button18"><a>Hover me</a></button>,
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
}`
    },
    {
        id: 19, name: "Gradient Glow", preview: <button className="Button19"><a>Hover me</a></button>,
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
}`
    },
    {
        id: 20, name: "Gold Button", preview: <button className="Button20"></button>,
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
}`
    },
    {
        id: 62, name: "Button", preview: <button className="Button62">Click me</button>,
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
}`
    },
    {
        id: 63, name: "Button", preview: <button className="Button63">Click me</button>,
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
}`
    },
    {
        id: 64, name: "Button", preview: <button className="Button64">Click me</button>,
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
}`
    },
    {
        id: 65, name: "Button", preview: <button className="Button65">Click me</button>,
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
}`
    },
    {
        id: 66, name: "Button", preview: <button className="Button66">Click me</button>,
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
}`
    },
    {
        id: 67, name: "Button", preview: <button className="Button67">Click me</button>,
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
}`
    },
    {
        id: 68, name: "Button", preview: <button className="Button68">Click me</button>,
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
}`
    },
    {
        id: 69, name: "Button", preview: <button className="Button69">Click me</button>,
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
}`
    },
    {
        id: 70, name: "Button", preview: <button className="Button70">Click me</button>,
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
}`
    },
    {
        id: 71, name: "Button", preview: <button className="Button71">Click me</button>,
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
}`
    },
    {
        id: 72, name: "Button", preview: <button className="Button72">Click me</button>,
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
}`
    },
    {
        id: 73, name: "Button", preview: <button className="Button73">Click me</button>,
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
}`
    },
    {
        id: 74, name: "Button", preview: <button className="Button74">Click me</button>,
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
}`
    },
    {
        id: 75, name: "Button", preview: <button className="Button75">Click me</button>,
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
}`
    },
    {
        id: 76, name: "Button", preview: <button className="Button76">Click me</button>,
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
}`
    },
    {
        id: 77, name: "Button", preview: <button className="Button77">Click me</button>,
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
}`
    },
    {
        id: 78, name: "Button", preview: <button className="Button78">Click me</button>,
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
}`
    },
    {
        id: 79, name: "Button", preview: <button className="Button79">Click me</button>,
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
}`
    },
    {
        id: 80, name: "Button", preview: <button className="Button80">Click me</button>,
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
}`
    },
    {
        id: 81, name: "Button", preview: <button className="Button81">Click me</button>,
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
}`
    },
    {
        id: 82, name: "Button", preview: <button className="Button82">Click me</button>,
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
}`
    },
    {
        id: 83, name: "Button", preview: <button className="Button83">Click me</button>,
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
}`
    },
    {
        id: 84, name: "Button", preview: <button className="Button84">Click me</button>,
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
}`
    },
    {
        id: 85, name: "Button", preview: <button className="Button85">Click me</button>,
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
}`
    },
    {
        id: 86, name: "Button", preview: <button className="Button86">Click me</button>,
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
}`
    },
    {
        id: 87, name: "Button", preview: <button className="Button87">Click me</button>,
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
}`
    },
    {
        id: 88, name: "Button", preview: <button className="Button88">Click me</button>,
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
}`
    },
    {
        id: 89, name: "Button", preview: <button className="Button89">Click me</button>,
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
}`
    },
    {
        id: 90, name: "Button", preview: <button className="Button90">Click me</button>,
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
}`
    },
    {
        id: 91, name: "Button", preview: <button className="Button91"><span>Click me</span></button>,
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
}`
    },
    {
        id: 92, name: "Button", preview: <button className="Button92">Click me</button>,
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
}`
    },
    {
        id: 93, name: "Button", preview: <button className="Button93">Click me</button>,
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
}`
    },
    {
        id: 94, name: "Button", preview: <button className="Button94"><span>Click me</span></button>,
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
}`
    },
    {
        id: 95, name: "Button", preview: <button className="Button95"><span>Click me →</span></button>,
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
}`
    },
    {
        id: 96, name: "Button", preview: <button className="Button96"><span>Click me →</span></button>,
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
}`
    },
];







export const checkboxes = [
    {
        id: 5, name: "Checkbox", preview: (
            <div className="prev-checkbox-group">
                <label className="prev-checkbox"><input type="checkbox" defaultChecked /><span>Option 1</span></label>
                <label className="prev-checkbox"><input type="checkbox" /><span>Option 2</span></label>
                <label className="prev-checkbox"><input type="checkbox" /><span>Option 3</span></label>
            </div>
        ),
        html: `<div class="Checkbox-group">
    <label class="Checkbox"><input type="checkbox" checked /><span>Option 1</span></label>
    <label class="Checkbox"><input type="checkbox" /><span>Option 2</span></label>
    <label class="Checkbox"><input type="checkbox" /><span>Option 3</span></label>
</div>`,
        css: `.Checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #a1a1aa;
    cursor: pointer;
}
.Checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #7c3aed;
    cursor: pointer;
}`
    },
    {
        id: 15, name: "Checkbox", preview: (
            <label className="cb-15">
                <input defaultChecked type="checkbox" />
                <div className="cb-15__mark"></div>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" checked />
    <div class="Checkbox__mark"></div>
</label>`,
        css: `.Checkbox input {
    display: none;
}
.Checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.Checkbox__mark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #2196F300;
    border-radius: 0.25em;
    transition: all 0.25s;
}
.Checkbox input:checked~.Checkbox__mark {
    background-color: #2196F3;
}
.Checkbox__mark::after {
    content: "";
    position: absolute;
    transform: rotate(0deg);
    border: 0.1em solid black;
    left: 0;
    top: 0;
    width: 1.05em;
    height: 1.05em;
    border-radius: 0.25em;
    transition: all 0.25s, border-width 0.1s;
}
.Checkbox input:checked~.Checkbox__mark::after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border-color: #fff0 white white #fff0;
    border-width: 0 0.15em 0.15em 0;
    border-radius: 0em;
    transform: rotate(45deg);
}`
    },
    {
        id: 16, name: "Checkbox", preview: (
            <label className="cb-16">
                <input defaultChecked type="checkbox" />
                <span className="cb-16__box"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" checked />
    <span class="Checkbox__box"></span>
</label>`,
        css: `.Checkbox input[type="checkbox"] {
    display: none;
}
.Checkbox__box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #7c3aed;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}
.Checkbox__box::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #7c3aed;
    border-radius: 2px;
    opacity: 0;
}
.Checkbox input[type="checkbox"]:checked+.Checkbox__box::after {
    opacity: 1;
}`
    },
    {
        id: 17, name: "Checkbox", preview: (
            <label className="cb-17 burger">
                <input defaultChecked type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            </label>
        ),
        html: `<label class="Checkbox burger">
    <input type="checkbox" checked />
    <span></span>
    <span></span>
    <span></span>
</label>`,
        css: `.Checkbox.burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
}
.Checkbox.burger input {
    display: none;
}
.Checkbox.burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}
.Checkbox.burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
}
.Checkbox.burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
}
.Checkbox.burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
}
.Checkbox.burger input:checked~span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
}
.Checkbox.burger input:checked~span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
}
.Checkbox.burger input:checked~span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
}`
    },
    {
        id: 18, name: "Checkbox", preview: (
            <div className="cb18-cntr">
                <input defaultChecked type="checkbox" id="cb18-cbx" className="cb18-hidden" />
                <label htmlFor="cb18-cbx" className="cb18-cbx"></label>
            </div>
        ),
        html: `<div class="Checkbox-cntr">
    <input type="checkbox" id="checkbox-18" class="Checkbox-hidden" checked />
    <label for="checkbox-18" class="Checkbox-box"></label>
</div>`,
        css: `.Checkbox-box {
    position: relative;
    top: 1px;
    width: 27px;
    height: 27px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    cursor: pointer;
    display: block;
}
.Checkbox-box:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
}
#checkbox-18:checked~.Checkbox-box {
    border-color: transparent;
    background: #6871f1;
    animation: Checkbox-jelly 0.6s ease;
}
#checkbox-18:checked~.Checkbox-box:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
}
.Checkbox-cntr {
    position: relative;
}
.Checkbox-hidden {
    display: none !important;
}
@keyframes Checkbox-jelly {
    from {
        transform: scale(1, 1);
    }
    30% {
        transform: scale(1.25, 0.75);
    }
    40% {
        transform: scale(0.75, 1.25);
    }
    50% {
        transform: scale(1.15, 0.85);
    }
    65% {
        transform: scale(0.95, 1.05);
    }
    75% {
        transform: scale(1.05, 0.95);
    }
    to {
        transform: scale(1, 1);
    }
}`
    },
    {
        id: 19, name: "Checkbox", preview: (
            <label className="cb19">
                <label htmlFor="cb19-input"></label>
                <input id="cb19-input" type="checkbox" />
                <span className="cb19-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <label for="checkbox-19"></label>
    <input id="checkbox-19" type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.Checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.Checkbox label {
    cursor: pointer;
    font-size: 14px;
}
.Checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2.5px solid #ffffff;
    transition: .2s linear;
    transform: rotate(0deg);
}
.Checkbox input:checked~.Checkbox-checkmark {
    transform: rotate(45deg);
    border: none;
    background-color: transparent;
}
.Checkbox-checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    top: 40%;
    width: 10px;
    height: 14px;
    border: 2px solid #0ea021;
    filter: drop-shadow(0px 0px 10px #0ea021);
    border-width: 0 2.5px 2.5px 0;
    transition: .2s linear;
    transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: Checkbox-pulse 1s ease-in;
}
@keyframes Checkbox-pulse {
    0%, 100% {
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
}`
    },
    {
        id: 20, name: "Checkbox", preview: (
            <label className="cb20">
                <input type="checkbox" />
                <div className="cb20-checkmark"></div>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <div class="Checkbox-checkmark"></div>
</label>`,
        css: `.Checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border-radius: 5px;
}
.Checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    border-radius: 5px;
    box-shadow: 2px 2px 0px rgb(183, 183, 183);
}
.Checkbox-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background-color: #ccc;
    border-radius: 5px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    box-shadow: 3px 3px 0px rgb(183, 183, 183);
    transition: all 0.2s;
    opacity: 1;
    background-image: linear-gradient(45deg, rgb(100, 61, 219) 0%, rgb(217, 21, 239) 100%);
}
.Checkbox input~.Checkbox-checkmark {
    transition: all 0.2s;
    opacity: 1;
    box-shadow: 1px 1px 0px rgb(183, 183, 183);
}
.Checkbox-checkmark:after {
    content: "";
    position: absolute;
    opacity: 0;
    transition: all 0.2s;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
    transition: all 0.2s;
}
.Checkbox .Checkbox-checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
}`
    },
    {
        id: 21, name: "Checkbox", preview: (
            <label className="cb21">
                <input type="checkbox" />
                <span className="cb21-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Checkbox-checkmark {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    border-radius: 26px;
    transition: .3s;
}
.Checkbox-checkmark:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #4CAF50;
}
.Checkbox input:checked~.Checkbox-checkmark:before {
    transform: translateX(20px);
}`
    },
    {
        id: 22, name: "Checkbox", preview: (
            <label className="cb22">
                <input type="checkbox" />
                <span className="cb22-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2.5px solid #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
}
.Checkbox-checkmark:after {
    content: "";
    width: 7px;
    height: 12px;
    border: 2.5px solid white;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #6871f1;
    border-color: #6871f1;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 23, name: "Checkbox", preview: (
            <label className="cb23">
                <input type="checkbox" />
                <span className="cb23-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #ff6b6b;
    border-radius: 4px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #ff6b6b;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 24, name: "Checkbox", preview: (
            <label className="cb24">
                <input type="checkbox" />
                <span className="cb24-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #333;
    border-radius: 3px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 12px;
    height: 2px;
    background-color: white;
    transform: scale(0);
    transition: .2s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #333;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: scale(1);
}`
    },
    {
        id: 25, name: "Checkbox", preview: (
            <label className="cb25">
                <input type="checkbox" />
                <span className="cb25-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #00e5ff;
    border-radius: 4px;
    background-color: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #00e5ff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: transparent;
    box-shadow: 0 0 8px #00e5ff, inset 0 0 8px rgba(0, 229, 255, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
    filter: drop-shadow(0 0 4px #00e5ff);
}`
    },
    {
        id: 26, name: "Checkbox", preview: (
            <label className="cb26">
                <input type="checkbox" />
                <span className="cb26-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 27, name: "Checkbox", preview: (
            <label className="cb27">
                <input type="checkbox" />
                <span className="cb27-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: #e0e5ec;
    box-shadow: 4px 4px 8px #b8bec7, -4px -4px 8px #ffffff;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #6c63ff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    box-shadow: inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 28, name: "Checkbox", preview: (
            <label className="cb28">
                <input type="checkbox" />
                <span className="cb28-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #f093fb, #f5576c) border-box;
    border: 2px solid transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #f5576c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #f093fb, #f5576c) border-box;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    border-color: white;
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 29, name: "Checkbox", preview: (
            <label className="cb29">
                <input type="checkbox" />
                <span className="cb29-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Checkbox-checkmark {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #e5e5ea;
    border-radius: 28px;
    transition: .3s;
}
.Checkbox-checkmark:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #34c759;
}
.Checkbox input:checked~.Checkbox-checkmark:before {
    transform: translateX(22px);
}`
    },
    {
        id: 30, name: "Checkbox", preview: (
            <label className="cb30">
                <input type="checkbox" />
                <span className="cb30-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 2px solid #9e9e9e;
    background-color: transparent;
    transition: .2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 5px;
    height: 10px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background-color: #6200ea;
    border-color: #6200ea;
    box-shadow: 0 0 0 8px rgba(98, 0, 234, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 31, name: "Checkbox", preview: (
            <label className="cb31">
                <input type="checkbox" />
                <span className="cb31-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid #f0e614;
    background: transparent;
    clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid #f0e614;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: rgba(240, 230, 20, 0.15);
    box-shadow: 0 0 10px #f0e614, inset 0 0 10px rgba(240, 230, 20, 0.1);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
    filter: drop-shadow(0 0 3px #f0e614);
}`
    },
    {
        id: 32, name: "Checkbox", preview: (
            <label className="cb32">
                <input type="checkbox" />
                <span className="cb32-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    background: #c0c0c0;
    border-top: 3px solid #ffffff;
    border-left: 3px solid #ffffff;
    border-bottom: 3px solid #808080;
    border-right: 3px solid #808080;
    transition: .1s;
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
}
.Checkbox-checkmark:after {
    content: "✓";
    color: black;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    transition: .1s;
    font-family: monospace;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-top: 3px solid #808080;
    border-left: 3px solid #808080;
    border-bottom: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    background: #c0c0c0;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
}`
    },
    {
        id: 33, name: "Checkbox", preview: (
            <label className="cb33">
                <input type="checkbox" />
                <span className="cb33-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #ffb3c6;
    background: white;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "♡";
    color: #ff85a1;
    font-size: 14px;
    opacity: 0;
    transform: scale(0);
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: #fff0f3;
    border-color: #ff85a1;
    box-shadow: 0 0 0 3px rgba(255, 133, 161, 0.2);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    opacity: 1;
    transform: scale(1);
}`
    },
    {
        id: 34, name: "Checkbox", preview: (
            <label className="cb34">
                <input type="checkbox" />
                <span className="cb34-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1.5px solid #444;
    background: #1a1a1a;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 5px;
    height: 10px;
    border: 2px solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 2px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: #2d2d2d;
    border-color: #ffffff;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 35, name: "Checkbox", preview: (
            <label className="cb35">
                <input type="checkbox" />
                <span className="cb35-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #a8edea;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #a8edea, #fed6e3);
    border-color: transparent;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 36, name: "Checkbox", preview: (
            <label className="cb36">
                <input type="checkbox" />
                <span className="cb36-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #667eea;
    background: transparent;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .2s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-color: transparent;
    animation: Checkbox-bounce 0.4s ease;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}
@keyframes Checkbox-bounce {
    0% {
        transform: scale(1);
    }
    40% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}`
    },
    {
        id: 37, name: "Checkbox", preview: (
            <label className="cb37">
                <input type="checkbox" />
                <span className="cb37-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: 2px solid #00b4d8;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2.5px solid #00b4d8;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 38, name: "Checkbox", preview: (
            <label className="cb38">
                <input type="checkbox" />
                <span className="cb38-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 2px solid #f97316;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-color: transparent;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
    {
        id: 39, name: "Checkbox", preview: (
            <label className="cb39">
                <input type="checkbox" />
                <span className="cb39-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    transform: scale(0);
    transition: .3s;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-color: #10b981;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: scale(1);
}`
    },
    {
        id: 61, name: "Checkbox", preview: (
            <label className="cb61">
                <input type="checkbox" />
                <span className="cb61-checkmark"></span>
            </label>
        ),
        html: `<label class="Checkbox">
    <input type="checkbox" />
    <span class="Checkbox-checkmark"></span>
</label>`,
        css: `.Checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}
.Checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.Checkbox-checkmark {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #fb7185;
    background: transparent;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Checkbox-checkmark:after {
    content: "";
    width: 6px;
    height: 11px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: .3s;
    margin-bottom: 3px;
}
.Checkbox input:checked~.Checkbox-checkmark {
    border-radius: 6px;
    background: #fb7185;
    border-color: #fb7185;
}
.Checkbox input:checked~.Checkbox-checkmark:after {
    transform: rotate(45deg) scale(1);
}`
    },
];

































export const toggles = [
    {
        id: 6, name: "Toggle Switch", preview: (
            <div className="ts-6-group">
                <label className="ts-6"><input type="checkbox" defaultChecked /><span className="ts-6__track"><span className="ts-6__thumb" /></span></label>
                <label className="ts-6"><input type="checkbox" /><span className="ts-6__track"><span className="ts-6__thumb" /></span></label>
            </div>
        )
    },
    {
        id: 40, name: "Toggle Switch", preview: (
            <div className="ts-40-group ts-40">
                <input type="checkbox" id="checkboxInput40" />
                <label htmlFor="checkboxInput40" className="toggleSwitch"></label>
            </div>
        )
    },
    {
        id: 41, name: "Toggle Switch", preview: (
            <label className="ts41">
                <input type="checkbox" />
                <span className="ts41-slider"></span>
            </label>
        )
    },
    {
        id: 42, name: "Toggle Switch", preview: (
            <label className="ts42">
                <input type="checkbox" />
                <span className="ts42-slider"></span>
            </label>
        )
    },
    {
        id: 43, name: "Toggle Switch", preview: (
            <label className="ts43">
                <input type="checkbox" />
                <span className="ts43-slider"></span>
            </label>
        )
    },
    {
        id: 44, name: "Toggle Switch", preview: (
            <label className="ts44">
                <input type="checkbox" />
                <span className="ts44-slider"></span>
            </label>
        )
    },
    {
        id: 45, name: "Toggle Switch", preview: (
            <label className="ts45">
                <input type="checkbox" />
                <span className="ts45-slider"></span>
            </label>
        )
    },
    {
        id: 46, name: "Toggle Switch", preview: (
            <label className="ts46">
                <input type="checkbox" />
                <span className="ts46-slider"></span>
            </label>
        )
    },
    {
        id: 47, name: "Toggle Switch", preview: (
            <label className="ts47">
                <input type="checkbox" />
                <span className="ts47-slider"></span>
            </label>
        )
    },
    {
        id: 48, name: "Toggle Switch", preview: (
            <label className="ts48">
                <input type="checkbox" />
                <span className="ts48-slider"></span>
            </label>
        )
    },
    {
        id: 49, name: "Toggle Switch", preview: (
            <label className="ts49">
                <input type="checkbox" />
                <span className="ts49-slider"></span>
            </label>
        )
    },
    {
        id: 50, name: "Toggle Switch", preview: (
            <label className="ts50">
                <input type="checkbox" />
                <span className="ts50-slider"></span>
            </label>
        )
    },
    {
        id: 51, name: "Toggle Switch", preview: (
            <label className="ts51">
                <input type="checkbox" />
                <span className="ts51-slider"></span>
            </label>
        )
    },
    {
        id: 52, name: "Toggle Switch", preview: (
            <label className="ts52">
                <input type="checkbox" />
                <span className="ts52-slider"></span>
            </label>
        )
    },
    {
        id: 53, name: "Toggle Switch", preview: (
            <label className="ts53">
                <input type="checkbox" />
                <span className="ts53-slider"></span>
            </label>
        )
    },
    {
        id: 54, name: "Toggle Switch", preview: (
            <label className="ts54">
                <input type="checkbox" />
                <span className="ts54-slider"></span>
            </label>
        )
    },
    {
        id: 55, name: "Toggle Switch", preview: (
            <label className="ts55">
                <input type="checkbox" />
                <span className="ts55-slider"></span>
            </label>
        )
    },
    {
        id: 56, name: "Toggle Switch", preview: (
            <label className="ts56">
                <input type="checkbox" />
                <span className="ts56-slider"></span>
            </label>
        )
    },
    {
        id: 57, name: "Toggle Switch", preview: (
            <label className="ts57">
                <input type="checkbox" />
                <span className="ts57-slider"></span>
            </label>
        )
    },
    {
        id: 58, name: "Toggle Switch", preview: (
            <label className="ts58">
                <input type="checkbox" />
                <span className="ts58-slider"></span>
            </label>
        )
    },
    {
        id: 59, name: "Toggle Switch", preview: (
            <label className="ts59">
                <input type="checkbox" />
                <span className="ts59-slider"></span>
            </label>
        )
    },
    {
        id: 60, name: "Toggle Switch", preview: (
            <label className="ts60">
                <input type="checkbox" />
                <span className="ts60-slider"></span>
            </label>
        )
    },
];

































export const cards = [
    {
        id: 7, name: "Profile Card", preview: (
            <div className="prev-card">
                <div className="prev-card-avatar">A</div>
                <div className="prev-card-name">Andre</div>
                <div className="prev-card-sub">UI Developer</div>
                <button className="prev-card-btn">Follow</button>
            </div>
        )
    },
    {
        id: 8, name: "Pricing Card", preview: (
            <div className="prev-pricing">
                <div className="prev-pricing-label">Pro</div>
                <div className="prev-pricing-price">$9<span>/mo</span></div>
                <button className="prev-pricing-btn">Sign up</button>
            </div>
        )
    },
    {
        id: 110, name: "Rotating Border", preview: (
            <div className="card-110">
                <h2>CARD</h2>
            </div>
        )
    },
    {
        id: 111, name: "Neumorphism", preview: (
            <div className="card-111"></div>
        )
    },
    {
        id: 112, name: "Glassmorphism", preview: (
            <div className="card-112">Click me</div>
        )
    },
    {
        id: 113, name: "Flip Card", preview: (
            <div className="card-113">
                <div className="card-113-inner">
                    <div className="card-113-front">
                        <p className="card-113-title">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="card-113-back">
                        <p className="card-113-title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 114, name: "Gradient Border", preview: (
            <div className="card-114">
                <div className="card-114-inner"></div>
            </div>
        )
    },
    {
        id: 115, name: "Blob Card", preview: (
            <div className="card-115">
                <div className="card-115-bg"></div>
                <div className="card-115-blob"></div>
            </div>
        )
    },
    {
        id: 116, name: "Dark Neumorphism", preview: (
            <div className="card-116"></div>
        )
    },
    {
        id: 117, name: "Gradient Glow", preview: (
            <div className="card-117">
                <p className="card-117-heading">Popular this month</p>
                <p>Powered By</p>
                <p>Uiverse</p>
            </div>
        )
    },
    {
        id: 118, name: "Corner Expand", preview: (
            <div className="card-118">HOVER</div>
        )
    },
    {
        id: 119, name: "Flip Card 2", preview: (
            <div className="card-119">
                <div className="card-119-inner">
                    <div className="card-119-front"><p>Front Side</p></div>
                    <div className="card-119-back"><p>Back Side</p></div>
                </div>
            </div>
        )
    },
    {
        id: 120, name: "Mac Window", preview: (
            <div className="card-120">
                <div className="card-120-tools">
                    <div className="card-120-circle"><span className="card-120-box card-120-red"></span></div>
                    <div className="card-120-circle"><span className="card-120-box card-120-yellow"></span></div>
                    <div className="card-120-circle"><span className="card-120-box card-120-green"></span></div>
                </div>
                <div className="card-120-content"></div>
            </div>
        )
    },
    {
        id: 121, name: "Image Reveal", preview: (
            <div className="card-121">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                </svg>
                <div className="card-121-content">
                    <p className="card-121-title">Card Title</p>
                    <p className="card-121-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        )
    },
    {
        id: 122, name: "Card-122", preview: (
            <div className="cd-122">
                <div className="cd-122__top">
                    <div className="cd-122__border"></div>
                    <div className="cd-122__icons">
                        <div className="cd-122__logo"></div>
                        <div className="cd-122__social"></div>
                    </div>
                </div>
                <div className="cd-122__bottom">
                    <span className="cd-122__title">UNIVERSE OF UI</span>
                    <div className="cd-122__row">
                        <div className="cd-122__item">
                            <span className="cd-122__big">2626</span>
                            <span className="cd-122__small">UI elements</span>
                        </div>
                        <div className="cd-122__item">
                            <span className="cd-122__big">100%</span>
                            <span className="cd-122__small">Free for use</span>
                        </div>
                        <div className="cd-122__item">
                            <span className="cd-122__big">38,631</span>
                            <span className="cd-122__small">Contributors</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 123, name: "Card-123", preview: (
            <div className="cd-123">
                <div className="cd-123__palette">
                    <div className="cd-123__color"><span>264653</span></div>
                    <div className="cd-123__color"><span>2A9D8F</span></div>
                    <div className="cd-123__color"><span>E9C46A</span></div>
                    <div className="cd-123__color"><span>F4A261</span></div>
                    <div className="cd-123__color"><span>E76F51</span></div>
                </div>
            </div>
        )
    },
    {
        id: 124, name: "Card-124", preview: (
            <div className="cd-124">
                <div className="cd-124__tools">
                    <div className="cd-124__circle"><span className="cd-124__red cd-124__box"></span></div>
                    <div className="cd-124__circle"><span className="cd-124__yellow cd-124__box"></span></div>
                    <div className="cd-124__circle"><span className="cd-124__green cd-124__box"></span></div>
                </div>
                <div className="cd-124__content"></div>
            </div>
        )
    },
    {
        id: 125, name: "Card-125", preview: (
            <div className="cd-125">
                <div className="cd-125__border-top"></div>
                <div className="cd-125__img"></div>
                <span>Person</span>
                <p className="cd-125__job">Job Title</p>
                <button>Click</button>
            </div>
        )
    },
    {
        id: 126, name: "Card-126", preview: (
            <div className="cd-126">
                <div className="cd-126__tag">New</div>
                <div className="cd-126__title">Dashboard Pro</div>
                <div className="cd-126__sub">Analytics & insights</div>
                <div className="cd-126__footer">
                    <span>Free</span>
                    <button className="cd-126__btn">Get started</button>
                </div>
            </div>
        )
    },
    {
        id: 127, name: "Card-127", preview: (
            <div className="cd-127">
                <div className="cd-127__avatar">A</div>
                <div className="cd-127__info">
                    <div className="cd-127__name">Andre</div>
                    <div className="cd-127__role">Frontend Developer</div>
                </div>
                <div className="cd-127__stats">
                    <div className="cd-127__stat"><span>142</span><small>Projects</small></div>
                    <div className="cd-127__stat"><span>8.4k</span><small>Followers</small></div>
                </div>
            </div>
        )
    },
    {
        id: 128, name: "Card-128", preview: (
            <div className="cd-128">
                <div className="cd-128__header">
                    <div className="cd-128__dot cd-128__dot--red" />
                    <div className="cd-128__dot cd-128__dot--yellow" />
                    <div className="cd-128__dot cd-128__dot--green" />
                </div>
                <div className="cd-128__body">
                    <div className="cd-128__line cd-128__line--short" />
                    <div className="cd-128__line" />
                    <div className="cd-128__line cd-128__line--mid" />
                </div>
            </div>
        )
    },
    {
        id: 129, name: "Card-129", preview: (
            <div className="cd-129">
                <div className="cd-129__top" />
                <div className="cd-129__content">
                    <div className="cd-129__title">Product Design</div>
                    <div className="cd-129__sub">12 lessons · 4h 30min</div>
                    <div className="cd-129__bar"><div className="cd-129__fill" /></div>
                    <div className="cd-129__pct">64% complete</div>
                </div>
            </div>
        )
    },
    {
        id: 130, name: "Card-130", preview: (
            <div className="cd-130">
                <div className="cd-130__price">$49<span>/mo</span></div>
                <div className="cd-130__plan">Professional</div>
                <div className="cd-130__divider" />
                <ul className="cd-130__list">
                    <li>Unlimited projects</li>
                    <li>Priority support</li>
                    <li>Custom domains</li>
                </ul>
                <button className="cd-130__btn">Subscribe</button>
            </div>
        )
    },
    {
        id: 131, name: "Card-131", preview: (
            <div className="cd-131">
                <div className="cd-131__label">Revenue</div>
                <div className="cd-131__value">$12,400</div>
                <div className="cd-131__change cd-131__change--up">+8.2% this month</div>
                <div className="cd-131__bar-wrap">
                    <div className="cd-131__bar" />
                </div>
            </div>
        )
    },
    {
        id: 132, name: "Card-132", preview: (
            <div className="cd-132">
                <div className="cd-132__img" />
                <div className="cd-132__body">
                    <div className="cd-132__cat">Design</div>
                    <div className="cd-132__title">How to build UI systems</div>
                    <div className="cd-132__meta">Jan 12 · 5 min read</div>
                </div>
            </div>
        )
    },
    {
        id: 133, name: "Card-133", preview: (
            <div className="cd-133">
                <div className="cd-133__icon" />
                <div className="cd-133__title">Notifications</div>
                <div className="cd-133__sub">You have 3 unread messages</div>
                <button className="cd-133__btn">View all</button>
            </div>
        )
    },
    {
        id: 134, name: "Card-134", preview: (
            <div className="cd-134">
                <div className="cd-134__header">
                    <div className="cd-134__avatar">MK</div>
                    <div>
                        <div className="cd-134__name">Mike K.</div>
                        <div className="cd-134__time">2 min ago</div>
                    </div>
                </div>
                <div className="cd-134__msg">Hey, the new design looks great. Can we hop on a call?</div>
            </div>
        )
    },
    {
        id: 135, name: "Card-135", preview: (
            <div className="cd-135">
                <div className="cd-135__title">Team</div>
                <div className="cd-135__avatars">
                    <span>AL</span><span>BR</span><span>CK</span><span>+4</span>
                </div>
                <div className="cd-135__sub">7 members · 3 online</div>
            </div>
        )
    },
    {
        id: 136, name: "Card-136", preview: (
            <div className="cd-136">
                <div className="cd-136__label">Storage</div>
                <div className="cd-136__val">14.2 GB <span>of 20 GB</span></div>
                <div className="cd-136__track"><div className="cd-136__fill" /></div>
                <div className="cd-136__sub">5.8 GB remaining</div>
            </div>
        )
    },
    {
        id: 137, name: "Card-137", preview: (
            <div className="cd-137">
                <div className="cd-137__status" />
                <div className="cd-137__title">Server Status</div>
                <div className="cd-137__sub">All systems operational</div>
                <div className="cd-137__uptime">99.9% uptime</div>
            </div>
        )
    },
    {
        id: 138, name: "Card-138", preview: (
            <div className="cd-138">
                <div className="cd-138__title">Dark Glass</div>
                <div className="cd-138__sub">Glassmorphism style</div>
                <button className="cd-138__btn">Open</button>
            </div>
        )
    },
    {
        id: 139, name: "Card-139", preview: (
            <div className="cd-139">
                <div className="cd-139__top">
                    <div className="cd-139__title">Weekly Report</div>
                    <div className="cd-139__badge">PDF</div>
                </div>
                <div className="cd-139__sub">Generated on May 12, 2026</div>
                <div className="cd-139__divider" />
                <button className="cd-139__btn">Download</button>
            </div>
        )
    },
    {
        id: 140, name: "Card-140", preview: (
            <div className="cd-140">
                <div className="cd-140__title">Quick Actions</div>
                <div className="cd-140__actions">
                    <button className="cd-140__action">Edit</button>
                    <button className="cd-140__action">Share</button>
                    <button className="cd-140__action cd-140__action--danger">Delete</button>
                </div>
            </div>
        )
    },
];

export const loaders = [
    { id: 9, name: "Spinner Loader", preview: <div className="prev-spinner" /> },
    { id: 10, name: "Dots Loader", preview: <div className="prev-dots"><span /><span /><span /></div> },
    {
        id: 11, name: "Progress Bar", preview: (<div className="prev-progress-wrap"><div className="prev-progress-bar" /></div>)
    },
    { id: 141, name: "Loader", preview: <div className="ld-141" /> },
    { id: 142, name: "Loader", preview: <div className="ld-142" /> },
    { id: 143, name: "Loader", preview: <div className="ld-143" /> },
    { id: 144, name: "Loader", preview: <div className="ld-144" /> },
    { id: 145, name: "Loader", preview: <div className="ld-145" /> },
    { id: 146, name: "Loader", preview: <div className="ld-146" /> },
    { id: 147, name: "Loader", preview: <div className="ld-147" /> },
    { id: 148, name: "Loader", preview: <div className="ld-148" /> },
    { id: 149, name: "Loader", preview: <div className="ld-149" /> },
    { id: 150, name: "Loader", preview: <div className="ld-150" /> },
    { id: 151, name: "Loader", preview: <div className="ld-151" /> },
    { id: 152, name: "Loader", preview: <div style={{ marginLeft: "20px" }}><div className="ld-152" /></div> },
    { id: 153, name: "Loader", preview: <div style={{ marginLeft: "12px" }}><div className="ld-153" /></div> },
    { id: 154, name: "Loader", preview: <div className="ld-154" /> },
    { id: 155, name: "Loader", preview: <div className="ld-155" /> },
    { id: 156, name: "Loader", preview: <div className="ld-156" /> },
    { id: 157, name: "Loader", preview: <div className="ld-157" /> },
    { id: 158, name: "Loader", preview: <div className="ld-158" /> },
    { id: 159, name: "Loader", preview: <div className="ld-159" /> },
    { id: 160, name: "Loader", preview: <div className="ld-160" /> },
    { id: 161, name: "Loader", preview: <div className="ld-161" /> },
    { id: 162, name: "Loader", preview: <div className="ld-162" /> },
    { id: 163, name: "Loader", preview: <div className="ld-163" /> },
    { id: 164, name: "Loader", preview: <div className="ld-164" /> },
    { id: 165, name: "Loader", preview: <div className="ld-165" /> },
    { id: 166, name: "Loader", preview: <div className="ld-166" /> },
    { id: 167, name: "Loader", preview: <div className="ld-167" /> },
    { id: 168, name: "Loader", preview: <div className="ld-168" /> },
    { id: 169, name: "Loader", preview: <div className="ld-169" /> },
    { id: 170, name: "Loader", preview: <div className="ld-170" /> },
    {
        id: 600, name: "Kinetic Badge", preview: (
            <a href="#" className="ld-600">
                <div className="ld-600__bg"></div>
                <div className="ld-600__text">
                    <svg viewBox="0 0 100 100" width="120" height="120">
                        <defs>
                            <path
                                id="ld600-circle"
                                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                            ></path>
                        </defs>
                        <text fontSize="10.5" fontWeight="600" fill="currentColor" letterSpacing="2">
                            <textPath href="#ld600-circle" startOffset="0%">
                                VIEW MASTERPIECE • VIEW MASTERPIECE •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="ld-600__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="28" height="28">
                        <path d="M6 18L18 6M18 6H8M18 6V16" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </div>
            </a>
        )
    },
    {
        id: 601, name: "Blade Spinner", preview: (
            <div className="ld-601">
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
                <div className="ld-601__blade"></div>
            </div>
        )
    },
    {
        id: 602, name: "Scanner Loader", preview: (
            <div className="ld-602">
                <div className="ld-602__scanner">
                    <span>Loading...</span>
                </div>
            </div>
        )
    },
    { id: 603, name: "Loader", preview: <div className="ld-603" /> },
    { id: 604, name: "Loader", preview: <div className="ld-604" /> },
    { id: 605, name: "Loader", preview: <div className="ld-605" /> },
    { id: 606, name: "Loader", preview: <div className="ld-606" /> },
    { id: 607, name: "Loader", preview: <div className="ld-607" /> },
    { id: 608, name: "Loader", preview: <div className="ld-608" /> },
    { id: 609, name: "Loader", preview: <div className="ld-609" /> },
    { id: 610, name: "Loader", preview: <div className="ld-610" /> },
    { id: 611, name: "Loader", preview: <div className="ld-611" /> },
    { id: 612, name: "Loader", preview: <div className="ld-612" /> },
    { id: 613, name: "Loader", preview: <div className="ld-613" /> },
    { id: 614, name: "Loader", preview: <div className="ld-614" /> },
    { id: 615, name: "Loader", preview: <div className="ld-615" /> },
    { id: 616, name: "Loader", preview: <div className="ld-616" /> },
    { id: 617, name: "Loader", preview: <div className="ld-617" /> },
    { id: 618, name: "Loader", preview: <div className="ld-618" /> },
    { id: 619, name: "Loader", preview: <div className="ld-619" /> },
    { id: 620, name: "Loader", preview: <div className="ld-620" /> },
    { id: 621, name: "Loader", preview: <div className="ld-621" /> },
    { id: 622, name: "Loader", preview: <div className="ld-622" /> },
    { id: 623, name: "Loader", preview: <div className="ld-623" /> },
    { id: 624, name: "Loader", preview: <div className="ld-624" /> },
    { id: 625, name: "Loader", preview: <div className="ld-625" /> },
    { id: 626, name: "Loader", preview: <div className="ld-626" /> },
    { id: 627, name: "Loader", preview: <div className="ld-627" /> },
    { id: 628, name: "Loader", preview: <div className="ld-628" /> },
    { id: 629, name: "Loader", preview: <div className="ld-629" /> },
    { id: 630, name: "Loader", preview: <div className="ld-630" /> },

];

export const inputs = [
    { id: 12, name: "Text Input", preview: <input className="prev-input" type="text" placeholder="Type something..." /> },
    { id: 171, name: "input", preview: <input className="ip-171" type="text" placeholder="Type something..." /> },
    { id: 172, name: "input", preview: <input className="ip-172" type="text" placeholder="Type something..." /> },
    { id: 173, name: "input", preview: <input className="ip-173" type="text" placeholder="Type something..." /> },
    { id: 174, name: "input", preview: <input className="ip-174" type="text" placeholder="Type something..." /> },
    { id: 175, name: "input", preview: <input className="ip-175" type="text" placeholder="Type something..." /> },
    { id: 176, name: "input", preview: <input className="ip-176" type="text" placeholder="Type something..." /> },
    { id: 177, name: "input", preview: <input className="ip-177" type="text" placeholder="Type something..." /> },
    { id: 178, name: "input", preview: <input className="ip-178" type="text" placeholder="Type something..." /> },
    {
        id: 179, name: "input", preview: (
            <div className="ip-179-container">
                <input className="ip-179" type="text" placeholder="Search the internet..." />
            </div>),
    },
    { id: 180, name: "input", preview: <input className="ip-180" type="text" placeholder="Type something..." /> },
    {
        id: 181,
        name: "rating",
        preview: (
            <div className="ip-181-rating">
                <input type="radio" id="ip181-star5" name="ip181-rating" />
                <label htmlFor="ip181-star5"></label>
                <input type="radio" id="ip181-star4" name="ip181-rating" />
                <label htmlFor="ip181-star4"></label>
                <input type="radio" id="ip181-star3" name="ip181-rating" />
                <label htmlFor="ip181-star3"></label>
                <input type="radio" id="ip181-star2" name="ip181-rating" />
                <label htmlFor="ip181-star2"></label>
                <input type="radio" id="ip181-star1" name="ip181-rating" />
                <label htmlFor="ip181-star1"></label>
            </div>
        ),
    },
    {
        id: 182,
        name: "search input",
        preview: (
            <div className="ip-182-container">
                <input
                    placeholder="Search"
                    className="ip-182-input"
                    type="text" />
                <label className="ip-182-label"></label>
            </div>
        ),
    },
    {
        id: 183, name: "input", preview: (
            <div className="ip-183-container">
                <input
                    className="ip-183"
                    type="text"
                    placeholder="Search the internet..." />
            </div>
        )
    }, { id: 184, name: "input", preview: <input className="ip-184" type="text" placeholder="Type something..." /> },
    { id: 185, name: "input", preview: <input className="ip-185" type="text" placeholder="Type something..." /> },
    { id: 186, name: "input", preview: <input className="ip-186" type="text" placeholder="Type something..." /> },
    {
        id: 187, name: "input", preview: (
            <input
                className="ip-187"
                type="text"
                placeholder="Type something..." />
        )
    },
    {
        id: 188, name: "input", preview: (
            <div className="ip-188-container">
                <input
                    className="ip-188"
                    type="text"
                    required />
                <label>You'r name</label>
                <i></i>
            </div>
        )
    },
    { id: 189, name: "input", preview: <input className="ip-189" type="text" placeholder="Type something..." /> },
    { id: 190, name: "input", preview: <input className="ip-190" type="text" placeholder="Type something..." /> },
    { id: 191, name: "input", preview: <input className="ip-191" type="text" placeholder="Type something..." /> },
    { id: 192, name: "input", preview: <input className="ip-192" type="text" placeholder="Type something..." /> },
    { id: 193, name: "input", preview: <input className="ip-193" type="text" placeholder="Type something..." /> },
    { id: 194, name: "input", preview: <input className="ip-194" type="text" placeholder="Type something..." /> },
    { id: 195, name: "input", preview: <input className="ip-195" type="text" placeholder="Type something..." /> },
    { id: 196, name: "input", preview: <input className="ip-196" type="text" placeholder="Type something..." /> },
    { id: 197, name: "input", preview: <input className="ip-197" type="text" placeholder="Type something..." /> },
    { id: 198, name: "input", preview: <input className="ip-198" type="text" placeholder="Type something..." /> },
    { id: 199, name: "input", preview: <input className="ip-199" type="text" placeholder="Type something..." /> },
    { id: 200, name: "input", preview: <input className="ip-200" type="text" placeholder="Type something..." /> },
];

export const radiobuttons = [
    {
        id: 201, name: "radiobuttons", preview: (
            <div className="radio-input-201">
                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="designer"
                        defaultChecked />
                    <p className="text">Designer</p>
                </label>
                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="student" />
                    <p className="text">Student</p>
                </label>

                <label>
                    <input
                        type="radio"
                        name="value-radio-201"
                        value="teacher" />
                    <p className="text">Teacher</p>
                </label>
            </div>
        )
    },
    {
        id: 202, name: "radiobuttons", preview: (
            <div className="radio-input-202">
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="women"
                            defaultChecked />
                        <span>Women</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="men" />
                        <span>Men</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender-radio-202"
                            value="divided" />
                        <span>Divided</span>
                    </label>
                </div>
            </div>
        )
    },
    {
        id: 203, name: "radiobuttons", preview: (
            <div className="radio-input-203">
                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="play"
                        defaultChecked />
                    <span className="text">Play</span>
                </label>

                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="stop" />
                    <span className="text">Stop</span>
                </label>

                <label className="label">
                    <input
                        type="radio"
                        name="action-radio-203"
                        value="reset" />
                    <span className="text">Reset</span>
                </label>
            </div>
        )
    },
    {
        id: 204, name: "radiobuttons", preview: (
            <div className="rb-204-radio-inputs">
                <label className="rb-204-radio">
                    <input type="radio" name="rb-204" defaultChecked />
                    <span className="rb-204-name">HTML</span>
                </label>
                <label className="rb-204-radio">
                    <input type="radio" name="rb-204" />
                    <span className="rb-204-name">React</span>
                </label>
                <label className="rb-204-radio">
                    <input type="radio" name="rb-204" />
                    <span className="rb-204-name">Vue</span>
                </label>
            </div>
        )
    },
    {
        id: 205, name: "sidebarbuttons", preview: (
            <div className="sb-205-input">
                <button className="sb-205-value">
                    Public profile
                </button>

                <button className="sb-205-value">
                    Account
                </button>

                <button className="sb-205-value">
                    Appearance
                </button>

                <button className="sb-205-value">
                    Accessibility
                </button>

                <button className="sb-205-value">
                    Notifications
                </button>
            </div>
        )
    },
    {
        id: 206, name: "radiobuttons", preview: (
            <div className="rb-206-radio-input">
                <label className="rb-206-label">
                    <input
                        type="radio"
                        name="rb-206-role"
                        value="designer"
                        defaultChecked />
                    <p className="rb-206-text">Designer</p>
                </label>

                <label className="rb-206-label">
                    <input
                        type="radio"
                        name="rb-206-role"
                        value="student" />
                    <p className="rb-206-text">Student</p>
                </label>

                <label className="rb-206-label">
                    <input
                        type="radio"
                        name="rb-206-role"
                        value="teacher" />
                    <p className="rb-206-text">Teacher</p>
                </label>
            </div>
        )
    },
    {
        id: 207, name: "radiobuttons", preview: (
            <div className="rb-207-container">
                <div className="rb-207-radio-wrapper">
                    <input
                        className="rb-207-input"
                        name="rb-207-btn"
                        type="radio" />
                    <div className="rb-207-btn">
                        <span aria-hidden="true">_</span>
                        Cyber
                        <span
                            className="rb-207-btn__glitch"
                            aria-hidden="true">
                            _Cyber
                        </span>
                        <label className="rb-207-number">r1</label>
                    </div>
                </div>
                <div className="rb-207-radio-wrapper">
                    <input
                        className="rb-207-input"
                        name="rb-207-btn"
                        type="radio"
                        defaultChecked />
                    <div className="rb-207-btn">
                        _Radio<span aria-hidden="true">_</span>
                        <span
                            className="rb-207-btn__glitch"
                            aria-hidden="true">
                            _R_a_d_i_o_
                        </span>
                        <label className="rb-207-number">r2</label>
                    </div>
                </div>
                <div className="rb-207-radio-wrapper">
                    <input
                        className="rb-207-input"
                        name="rb-207-btn"
                        type="radio" />
                    <div className="rb-207-btn">
                        Buttons
                        <span
                            className="rb-207-btn__glitch"
                            aria-hidden="true">
                            Buttons_
                        </span>

                        <label className="rb-207-number">r3</label>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 208,
        name: "radiobuttons",
        preview: (
            <div className="rb-208-glass-radio-group">
                <input
                    type="radio"
                    name="rb-208-plan"
                    id="rb-208-silver"
                    defaultChecked />
                <label htmlFor="rb-208-silver">Silver</label>
                <input
                    type="radio"
                    name="rb-208-plan"
                    id="rb-208-gold" />
                <label htmlFor="rb-208-gold">Gold</label>
                <input
                    type="radio"
                    name="rb-208-plan"
                    id="rb-208-platinum" />
                <label htmlFor="rb-208-platinum">Platinum</label>

                <div className="rb-208-glass-glider"></div>
            </div>
        )
    },
    {
        id: 209, name: "radiobuttons", preview: (
            <div className="rb-209-radio-input">
                <div className="rb-209-center"></div>
                <label className="rb-209-label rb-209-spring">
                    <input
                        type="radio"
                        name="rb-209-seasons"
                        value="spring"
                        defaultChecked />
                    <span className="rb-209-text rb-209-spring">
                        Spring
                    </span>
                </label>
                <label className="rb-209-label rb-209-summer">
                    <input
                        type="radio"
                        name="rb-209-seasons"
                        value="summer" />
                    <span className="rb-209-text rb-209-summer">
                        Summer
                    </span>
                </label>
                <label className="rb-209-label rb-209-autumn">
                    <input
                        type="radio"
                        name="rb-209-seasons"
                        value="autumn" />
                    <span className="rb-209-text rb-209-autumn">
                        Autumn
                    </span>
                </label>
                <label className="rb-209-label rb-209-winter">
                    <input
                        type="radio"
                        name="rb-209-seasons"
                        value="winter" />
                    <span className="rb-209-text rb-209-winter">
                        Winter
                    </span>
                </label>
            </div>
        )
    }

];

export const forms = [
    {
        id: 210,
        name: "Login Form",
        preview: (
            <div className="fm-210">
                <div className="fm-210__title">Sign in</div>
                <div className="fm-210__field">
                    <label className="fm-210__label">Email</label>
                    <input className="fm-210__input" type="email" placeholder="you@example.com" />
                </div>
                <div className="fm-210__field">
                    <label className="fm-210__label">Password</label>
                    <input className="fm-210__input" type="password" placeholder="••••••••" />
                </div>
                <button className="fm-210__btn">Sign in</button>
                <div className="fm-210__footer">Don't have an account? <span>Sign up</span></div>
            </div>
        )
    },
    {
        id: 211,
        name: "Register Form",
        preview: (
            <div className="fm-211">
                <div className="fm-211__title">Create account</div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Username</label>
                    <input className="fm-211__input" type="text" placeholder="andre" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Email</label>
                    <input className="fm-211__input" type="email" placeholder="you@example.com" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Password</label>
                    <input className="fm-211__input" type="password" placeholder="••••••••" />
                </div>
                <div className="fm-211__field">
                    <label className="fm-211__label">Confirm password</label>
                    <input className="fm-211__input" type="password" placeholder="••••••••" />
                </div>
                <button className="fm-211__btn">Create account</button>
                <div className="fm-211__footer">Already have an account? <span>Sign in</span></div>
            </div>
        )
    },
    {
        id: 212, name: "Login Form", preview: (
            <div className="fm-212">
                <span className="fm-212__input-span">
                    <label className="fm-212__label">Email</label>
                    <input className="fm-212__input" type="email" placeholder="you@example.com" />
                </span>
                <span className="fm-212__input-span">
                    <label className="fm-212__label">Password</label>
                    <input className="fm-212__input" type="password" placeholder="••••••••" />
                </span>
                <span className="fm-212__span"><a href="#">Forgot password?</a></span>
                <button className="fm-212__submit">Log in</button>
                <span className="fm-212__span">Don't have an account? <a href="#">Sign up</a></span>
            </div>
        )
    },
    {
        id: 213, name: "Flip Login Form", preview: (
            <div className="fm-213">
                <label className="fm-213__switch">
                    <input type="checkbox" className="fm-213__toggle" />
                    <span className="fm-213__slider"></span>
                    <span className="fm-213__card-side"></span>
                    <div className="fm-213__inner">
                        <div className="fm-213__front">
                            <div className="fm-213__title">Log in</div>
                            <div className="fm-213__form">
                                <input className="fm-213__input" placeholder="Email" type="email" />
                                <input className="fm-213__input" placeholder="Password" type="password" />
                                <button className="fm-213__btn">Let's go!</button>
                            </div>
                        </div>
                        <div className="fm-213__back">
                            <div className="fm-213__title">Sign up</div>
                            <div className="fm-213__form">
                                <input className="fm-213__input" placeholder="Name" type="text" />
                                <input className="fm-213__input" placeholder="Email" type="email" />
                                <input className="fm-213__input" placeholder="Password" type="password" />
                                <button className="fm-213__btn">Confirm!</button>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        )
    },
    {
        id: 214, name: "OAuth Form", preview: (
            <div className="fm-214">
                <p className="fm-214__title">
                    Welcome,
                    <span>sign in to continue</span>
                </p>
                <button className="fm-214__oauth">Continue with Google</button>
                <button className="fm-214__oauth">Continue with Github</button>
                <div className="fm-214__separator">
                    <div></div>
                    <span>OR</span>
                    <div></div>
                </div>
                <input className="fm-214__input" type="email" placeholder="Email" />
                <button className="fm-214__oauth">Continue</button>
            </div>
        )
    },
    {
        id: 215, name: "Sign Up Form", preview: (
            <div className="fm-215__box">
                <div className="fm-215__form">
                    <span className="fm-215__title">Sign up</span>
                    <span className="fm-215__subtitle">Create a free account with your email.</span>
                    <div className="fm-215__container">
                        <input type="text" className="fm-215__input" placeholder="Full Name" />
                        <input type="email" className="fm-215__input" placeholder="Email" />
                        <input type="password" className="fm-215__input" placeholder="Password" />
                    </div>
                    <button className="fm-215__btn">Sign up</button>
                </div>
                <div className="fm-215__section">
                    <p>Have an account? <a href="#">Log in</a></p>
                </div>
            </div>
        )
    },
    {
        id: 216, name: "Spotify Login Form", preview: (
            <div className="fm-216">
                <div className="fm-216__body">
                    <div className="fm-216__welcome">
                        <div className="fm-216__line1">Spotify</div>
                        <div className="fm-216__line2">Welcome Back, André</div>
                    </div>
                    <div className="fm-216__inputs">
                        <div className="fm-216__inp">
                            <input placeholder="Email Address" type="text" />
                        </div>
                        <div className="fm-216__inp">
                            <input placeholder="Password" type="password" />
                        </div>
                    </div>
                    <div className="fm-216__submit-wrap">
                        <button className="fm-216__submit">Login</button>
                    </div>
                    <div className="fm-216__forgot">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 217, name: "Minimal Login", preview: (
            <div className="fm-217">
                <div className="fm-217__logo">A</div>
                <div className="fm-217__title">Welcome back</div>
                <div className="fm-217__sub">Sign in to your account</div>
                <input className="fm-217__input" type="email" placeholder="Email" />
                <input className="fm-217__input" type="password" placeholder="Password" />
                <button className="fm-217__btn">Sign in</button>
                <div className="fm-217__footer">No account? <span>Sign up</span></div>
            </div>
        )
    },
    {
        id: 218, name: "Dark Login", preview: (
            <div className="fm-218">
                <div className="fm-218__title">Sign in</div>
                <div className="fm-218__sub">Enter your credentials to continue</div>
                <div className="fm-218__field">
                    <label>Email</label>
                    <input type="email" placeholder="you@example.com" />
                </div>
                <div className="fm-218__field">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" />
                </div>
                <div className="fm-218__row">
                    <label className="fm-218__check">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <a href="#">Forgot?</a>
                </div>
                <button className="fm-218__btn">Continue</button>
            </div>
        )
    },
    {
        id: 219, name: "Glass Login", preview: (
            <div className="fm-219">
                <div className="fm-219__inner">
                    <div className="fm-219__title">Login</div>
                    <div className="fm-219__field">
                        <input className="fm-219__input" type="email" placeholder="Email" />
                    </div>
                    <div className="fm-219__field">
                        <input className="fm-219__input" type="password" placeholder="Password" />
                    </div>
                    <button className="fm-219__btn">Log in</button>
                    <div className="fm-219__footer">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 220, name: "Gradient Login", preview: (
            <div className="fm-220">
                <div className="fm-220__left">
                    <div className="fm-220__brand">MyApp</div>
                    <div className="fm-220__tagline">Good to see you again</div>
                </div>
                <div className="fm-220__right">
                    <div className="fm-220__title">Sign in</div>
                    <input className="fm-220__input" type="email" placeholder="Email" />
                    <input className="fm-220__input" type="password" placeholder="Password" />
                    <button className="fm-220__btn">Sign in</button>
                    <div className="fm-220__footer">No account? <span>Register</span></div>
                </div>
            </div>
        )
    },
    {
        id: 221, name: "Microsoft Login", preview: (
            <div className="fm-221">
                <p className="fm-221__title">Sign in</p>
                <input className="fm-221__email" placeholder="E-mail, phone, or Skype" type="text" />
                <p className="fm-221__text"><a href="#">No account? Create one!</a></p>
                <p className="fm-221__text"><a href="#">Can't access your account?</a></p>
                <div className="fm-221__row">
                    <button className="fm-221__btn fm-221__btn--secondary">Back</button>
                    <button className="fm-221__btn fm-221__btn--primary">Next</button>
                </div>
            </div>
        )
    },
    {
        id: 222, name: "Contact Form", preview: (
            <div className="fm-222">
                <div className="fm-222__title">Contact us</div>
                <div className="fm-222__sub">We'll get back to you within 24 hours.</div>
                <input className="fm-222__input" type="text" placeholder="Full name" />
                <input className="fm-222__input" type="email" placeholder="Email" />
                <textarea className="fm-222__textarea" placeholder="Your message"></textarea>
                <button className="fm-222__btn">Send message</button>
            </div>
        )
    },
    {
        id: 223, name: "Reset Password", preview: (
            <div className="fm-223">
                <div className="fm-223__title">Reset password</div>
                <div className="fm-223__sub">Enter your email to receive a reset link.</div>
                <input className="fm-223__input" type="email" placeholder="Email address" />
                <button className="fm-223__btn">Send reset link</button>
                <div className="fm-223__back"><a href="#">Back to sign in</a></div>
            </div>
        )
    },
    {
        id: 224, name: "Subscribe Form", preview: (
            <div className="fm-224">
                <div className="fm-224__title">Stay in the loop</div>
                <div className="fm-224__sub">Get the latest updates in your inbox.</div>
                <div className="fm-224__row">
                    <input className="fm-224__input" type="email" placeholder="Enter your email" />
                    <button className="fm-224__btn">Subscribe</button>
                </div>
                <div className="fm-224__note">No spam, unsubscribe at any time.</div>
            </div>
        )
    },
    {
        id: 225, name: "Two Factor", preview: (
            <div className="fm-225">
                <div className="fm-225__title">Two-step verification</div>
                <div className="fm-225__sub">Enter the 6-digit code sent to your phone.</div>
                <div className="fm-225__inputs">
                    <input className="fm-225__box" type="text" maxLength={1} />
                    <input className="fm-225__box" type="text" maxLength={1} />
                    <input className="fm-225__box" type="text" maxLength={1} />
                    <input className="fm-225__box" type="text" maxLength={1} />
                    <input className="fm-225__box" type="text" maxLength={1} />
                    <input className="fm-225__box" type="text" maxLength={1} />
                </div>
                <button className="fm-225__btn">Verify</button>
                <div className="fm-225__resend"><a href="#">Resend code</a></div>
            </div>
        )
    },
    {
        id: 226, name: "Checkout Form", preview: (
            <div className="fm-226">
                <div className="fm-226__title">Payment</div>
                <input className="fm-226__input" type="text" placeholder="Cardholder name" />
                <input className="fm-226__input" type="text" placeholder="Card number" />
                <div className="fm-226__row">
                    <input className="fm-226__input fm-226__input--half" type="text" placeholder="MM / YY" />
                    <input className="fm-226__input fm-226__input--half" type="text" placeholder="CVC" />
                </div>
                <button className="fm-226__btn">Pay now</button>
            </div>
        )
    },
    {
        id: 227, name: "Profile Form", preview: (
            <div className="fm-227">
                <div className="fm-227__title">Edit profile</div>
                <div className="fm-227__avatar">A</div>
                <input className="fm-227__input" type="text" placeholder="Full name" />
                <input className="fm-227__input" type="email" placeholder="Email" />
                <input className="fm-227__input" type="text" placeholder="Username" />
                <button className="fm-227__btn">Save changes</button>
            </div>
        )
    },
    {
        id: 228, name: "Search Form", preview: (
            <div className="fm-228">
                <div className="fm-228__title">Search</div>
                <div className="fm-228__wrap">
                    <input className="fm-228__input" type="text" placeholder="Search for anything..." />
                    <button className="fm-228__btn">Search</button>
                </div>
                <div className="fm-228__tags">
                    <span>Design</span>
                    <span>React</span>
                    <span>CSS</span>
                    <span>UI</span>
                </div>
            </div>
        )
    },
    {
        id: 229, name: "Feedback Form", preview: (
            <div className="fm-229">
                <div className="fm-229__title">Leave feedback</div>
                <div className="fm-229__stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <textarea className="fm-229__textarea" placeholder="Tell us what you think..."></textarea>
                <button className="fm-229__btn">Submit</button>
            </div>
        )
    },
    {
        id: 230, name: "Delete Account", preview: (
            <div className="fm-230">
                <div className="fm-230__title">Delete account</div>
                <div className="fm-230__sub">This action is permanent and cannot be undone.</div>
                <input className="fm-230__input" type="password" placeholder="Enter your password" />
                <div className="fm-230__check">
                    <input type="checkbox" id="fm230-confirm" />
                    <label htmlFor="fm230-confirm">I understand this is permanent</label>
                </div>
                <button className="fm-230__btn">Delete my account</button>
            </div>
        )
    },
    {
        id: 231, name: "Login Form", preview: (
            <div className="fm-231">
                <p className="fm-231__heading">Login</p>
                <div className="fm-231__input-container">
                    <input placeholder="Username" className="fm-231__input" type="text" />
                </div>
                <div className="fm-231__input-container">
                    <input placeholder="Password" className="fm-231__input" type="password" />
                </div>
                <button className="fm-231__btn">Submit</button>
                <div className="fm-231__signup">
                    <p>Don't have any account?</p>
                    <a href="#">Sign up</a>
                </div>
            </div>
        )
    },
    {
        id: 232, name: "Login Form", preview: (
            <div className="fm-232">
                <p className="fm-232__heading">Login</p>
                <input className="fm-232__input" placeholder="Username" type="text" />
                <input className="fm-232__input" placeholder="Password" type="password" />
                <button className="fm-232__btn">Submit</button>
            </div>
        )
    },
    {
        id: 233, name: "Contact Form", preview: (
            <div className="fm-233">
                <div className="fm-233__flex">
                    <label className="fm-233__label">
                        <input required placeholder="" type="text" className="fm-233__input" />
                        <span>first name</span>
                    </label>
                    <label className="fm-233__label">
                        <input required placeholder="" type="text" className="fm-233__input" />
                        <span>last name</span>
                    </label>
                </div>
                <label className="fm-233__label">
                    <input required placeholder="" type="email" className="fm-233__input" />
                    <span>email</span>
                </label>
                <label className="fm-233__label">
                    <input required placeholder="" type="tel" className="fm-233__input" />
                    <span>contact number</span>
                </label>
                <label className="fm-233__label">
                    <textarea required rows={3} placeholder="" className="fm-233__textarea"></textarea>
                    <span>message</span>
                </label>
                <button className="fm-233__fancy">
                    <span className="fm-233__top-key"></span>
                    <span className="fm-233__text">submit</span>
                    <span className="fm-233__bottom-key-1"></span>
                    <span className="fm-233__bottom-key-2"></span>
                </button>
            </div>
        )
    },
    {
        id: 234, name: "Sign In Form", preview: (
            <div className="fm-234">
                <div className="fm-234__title">Sign in</div>
                <input className="fm-234__input" type="email" placeholder="Email address" />
                <input className="fm-234__input" type="password" placeholder="Password" />
                <div className="fm-234__forgot"><a href="#">Forgot password?</a></div>
                <button className="fm-234__btn">Sign in</button>
                <div className="fm-234__footer">New here? <a href="#">Create account</a></div>
            </div>
        )
    },
    {
        id: 235, name: "Register Form", preview: (
            <div className="fm-235">
                <div className="fm-235__title">Create account</div>
                <div className="fm-235__row">
                    <input className="fm-235__input" type="text" placeholder="First name" />
                    <input className="fm-235__input" type="text" placeholder="Last name" />
                </div>
                <input className="fm-235__input fm-235__input--full" type="email" placeholder="Email" />
                <input className="fm-235__input fm-235__input--full" type="password" placeholder="Password" />
                <button className="fm-235__btn">Register</button>
            </div>
        )
    },
    {
        id: 236, name: "Contact Form", preview: (
            <div className="fm-236">
                <div className="fm-236__title">Get in touch</div>
                <input className="fm-236__input" type="text" placeholder="Your name" />
                <input className="fm-236__input" type="email" placeholder="Email address" />
                <input className="fm-236__input" type="text" placeholder="Subject" />
                <textarea className="fm-236__textarea" placeholder="Your message"></textarea>
                <button className="fm-236__btn">Send message</button>
            </div>
        )
    },
    {
        id: 237, name: "Newsletter Form", preview: (
            <div className="fm-237">
                <div className="fm-237__title">Newsletter</div>
                <div className="fm-237__sub">Get weekly updates delivered to your inbox.</div>
                <input className="fm-237__input" type="text" placeholder="Your name" />
                <input className="fm-237__input" type="email" placeholder="Email address" />
                <button className="fm-237__btn">Subscribe</button>
                <div className="fm-237__note">Unsubscribe anytime.</div>
            </div>
        )
    },
    {
        id: 238, name: "Forgot Password", preview: (
            <div className="fm-238">
                <div className="fm-238__title">Forgot password</div>
                <div className="fm-238__sub">Enter your email and we will send you a link to reset your password.</div>
                <input className="fm-238__input" type="email" placeholder="Email address" />
                <button className="fm-238__btn">Send link</button>
                <div className="fm-238__footer"><a href="#">Back to login</a></div>
            </div>
        )
    },
    {
        id: 239, name: "Checkout Form", preview: (
            <div className="fm-239">
                <div className="fm-239__title">Checkout</div>
                <input className="fm-239__input" type="text" placeholder="Full name" />
                <input className="fm-239__input" type="text" placeholder="Address" />
                <div className="fm-239__row">
                    <input className="fm-239__input" type="text" placeholder="City" />
                    <input className="fm-239__input" type="text" placeholder="ZIP" />
                </div>
                <input className="fm-239__input fm-239__input--full" type="text" placeholder="Card number" />
                <div className="fm-239__row">
                    <input className="fm-239__input" type="text" placeholder="MM / YY" />
                    <input className="fm-239__input" type="text" placeholder="CVC" />
                </div>
                <button className="fm-239__btn">Pay now</button>
            </div>
        )
    },
    {
        id: 240, name: "Profile Settings", preview: (
            <div className="fm-240">
                <div className="fm-240__title">Profile settings</div>
                <div className="fm-240__avatar">A</div>
                <input className="fm-240__input" type="text" placeholder="Display name" />
                <input className="fm-240__input" type="email" placeholder="Email address" />
                <input className="fm-240__input" type="text" placeholder="Bio" />
                <button className="fm-240__btn">Save changes</button>
            </div>
        )
    },
    {
        id: 241, name: "OTP Form", preview: (
            <div className="fm-241">
                <div className="fm-241__title">Verify your email</div>
                <div className="fm-241__sub">Enter the 6-digit code we sent to your email.</div>
                <div className="fm-241__boxes">
                    <input className="fm-241__box" type="text" maxLength={1} />
                    <input className="fm-241__box" type="text" maxLength={1} />
                    <input className="fm-241__box" type="text" maxLength={1} />
                    <input className="fm-241__box" type="text" maxLength={1} />
                    <input className="fm-241__box" type="text" maxLength={1} />
                    <input className="fm-241__box" type="text" maxLength={1} />
                </div>
                <button className="fm-241__btn">Verify</button>
                <div className="fm-241__resend"><a href="#">Resend code</a></div>
            </div>
        )
    },
    {
        id: 242, name: "Job Application", preview: (
            <div className="fm-242">
                <div className="fm-242__title">Apply now</div>
                <input className="fm-242__input" type="text" placeholder="Full name" />
                <input className="fm-242__input" type="email" placeholder="Email" />
                <input className="fm-242__input" type="text" placeholder="LinkedIn URL" />
                <select className="fm-242__select">
                    <option value="">Select role</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Designer</option>
                </select>
                <textarea className="fm-242__textarea" placeholder="Why do you want to join?"></textarea>
                <button className="fm-242__btn">Submit application</button>
            </div>
        )
    },
    {
        id: 243, name: "Change Password", preview: (
            <div className="fm-243">
                <div className="fm-243__title">Change password</div>
                <input className="fm-243__input" type="password" placeholder="Current password" />
                <input className="fm-243__input" type="password" placeholder="New password" />
                <input className="fm-243__input" type="password" placeholder="Confirm new password" />
                <button className="fm-243__btn">Update password</button>
            </div>
        )
    },
    {
        id: 244, name: "Survey Form", preview: (
            <div className="fm-244">
                <div className="fm-244__title">Quick survey</div>
                <div className="fm-244__question">How did you hear about us?</div>
                <div className="fm-244__options">
                    <label className="fm-244__option"><input type="radio" name="fm244" /><span>Google</span></label>
                    <label className="fm-244__option"><input type="radio" name="fm244" /><span>Social media</span></label>
                    <label className="fm-244__option"><input type="radio" name="fm244" /><span>Friend</span></label>
                    <label className="fm-244__option"><input type="radio" name="fm244" /><span>Other</span></label>
                </div>
                <textarea className="fm-244__textarea" placeholder="Any additional feedback?"></textarea>
                <button className="fm-244__btn">Submit</button>
            </div>
        )
    },
    {
        id: 245, name: "Gradient Login", preview: (
            <div className="fm-245">
                <p className="fm-245__title">Login</p>
                <div className="fm-245__input-box">
                    <input required placeholder="Username" type="text" />
                </div>
                <div className="fm-245__input-box">
                    <input required placeholder="Password" type="password" />
                </div>
                <div className="fm-245__remember">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button className="fm-245__btn">Login</button>
                <div className="fm-245__register">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </div>
        )
    },
    {
        id: 246, name: "Gradient Login", preview: (
            <div className="fm-246">
                <p className="fm-246__title">Login</p>
                <div className="fm-246__input-box">
                    <input required placeholder="Username" type="text" />
                </div>
                <div className="fm-246__input-box">
                    <input required placeholder="Password" type="password" />
                </div>
                <div className="fm-246__remember">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button className="fm-246__btn">Login</button>
                <div className="fm-246__register">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </div>
        )
    },
    {
        id: 247, name: "Brutalist Login", preview: (
            <div className="fm-247">
                <div className="fm-247__card">
                    <div className="fm-247__title">
                        <span className="fm-247__text">Login</span>
                    </div>
                    <div className="fm-247__form">
                        <div className="fm-247__group">
                            <input required placeholder="Hero" className="fm-247__input" type="text" />
                        </div>
                        <div className="fm-247__group">
                            <input required placeholder="Heropass" className="fm-247__input" type="password" />
                        </div>
                        <button className="fm-247__btn">ENTER ZONE</button>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 248, name: "Sign Up Form", preview: (
            <div className="fm-248">
                <div className="fm-248__card">
                    <div className="fm-248__left">
                        <div className="fm-248__noise"></div>
                        <div className="fm-248__brand">DesktopLogin</div>
                        <div className="fm-248__hero">
                            <div className="fm-248__hero-title">Get Started with Us</div>
                            <div className="fm-248__hero-desc">Complete these easy steps to register your account.</div>
                            <div className="fm-248__steps">
                                <div className="fm-248__step fm-248__step--active">
                                    <div className="fm-248__step-num">1</div>
                                    <span>Sign up your account</span>
                                </div>
                                <div className="fm-248__step">
                                    <div className="fm-248__step-num">2</div>
                                    <span>Set up your workspace</span>
                                </div>
                                <div className="fm-248__step">
                                    <div className="fm-248__step-num">3</div>
                                    <span>Set up your profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fm-248__right">
                        <div className="fm-248__form-title">Sign Up Account</div>
                        <div className="fm-248__form-desc">Enter your personal data to create your account.</div>
                        <div className="fm-248__socials">
                            <button className="fm-248__social">Google</button>
                            <button className="fm-248__social">Github</button>
                        </div>
                        <div className="fm-248__divider">Or</div>
                        <div className="fm-248__row">
                            <div className="fm-248__field">
                                <label className="fm-248__label">First Name</label>
                                <input className="fm-248__input" type="text" placeholder="eg. John" />
                            </div>
                            <div className="fm-248__field">
                                <label className="fm-248__label">Last Name</label>
                                <input className="fm-248__input" type="text" placeholder="eg. Francisco" />
                            </div>
                        </div>
                        <div className="fm-248__field">
                            <label className="fm-248__label">Email</label>
                            <input className="fm-248__input" type="email" placeholder="eg. john@gmail.com" />
                        </div>
                        <div className="fm-248__field">
                            <label className="fm-248__label">Password</label>
                            <input className="fm-248__input" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="fm-248__hint">Must be at least 8 characters.</div>
                        <button className="fm-248__btn">Sign Up</button>
                        <div className="fm-248__footer">Already have an account? <a href="#">Log in</a></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 249, name: "Dossier Login", preview: (
            <div className="fm-249">
                <div className="fm-249__content">
                    <div className="fm-249__title-section">
                        <p className="fm-249__title">Dossier</p>
                    </div>
                    <div className="fm-249__form">
                        <div className="fm-249__group">
                            <div className="fm-249__field-content">
                                <label htmlFor="fm249-user">Username</label>
                                <input type="text" id="fm249-user" placeholder="Enter your username" />
                            </div>
                        </div>
                        <div className="fm-249__group">
                            <div className="fm-249__field-content">
                                <label htmlFor="fm249-pass">Password</label>
                                <input type="password" id="fm249-pass" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="fm-249__forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button className="fm-249__sign">
                            <span>Sign In</span>
                            <span className="fm-249__arrow">→</span>
                        </button>
                    </div>
                    <div className="fm-249__divider">
                        <div className="fm-249__line"></div>
                        <p className="fm-249__or">Or continue with</p>
                        <div className="fm-249__line"></div>
                    </div>
                    <div className="fm-249__socials">
                        <button className="fm-249__social"><span>Google</span></button>
                        <button className="fm-249__social"><span>GitHub</span></button>
                        <button className="fm-249__social"><span>X</span></button>
                    </div>
                    <p className="fm-249__signup">Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        )
    },
    {
        id: 250, name: "Form", preview: (
            <div className="fm-250">
            </div>
        )
    },
    {
        id: 251, name: "Form", preview: (
            <div className="fm-251">
            </div>
        )
    },
    {
        id: 252, name: "Form", preview: (
            <div className="fm-252">
            </div>
        )
    },
    {
        id: 253, name: "Form", preview: (
            <div className="fm-253">
            </div>
        )
    },
    {
        id: 254, name: "Form", preview: (
            <div className="fm-254">
            </div>
        )
    },
    {
        id: 255, name: "Form", preview: (
            <div className="fm-255">
            </div>
        )
    },
    {
        id: 256, name: "Form", preview: (
            <div className="fm-256">
            </div>
        )
    },
    {
        id: 257, name: "Form", preview: (
            <div className="fm-257">
            </div>
        )
    },
    {
        id: 258, name: "Form", preview: (
            <div className="fm-258">
            </div>
        )
    },
    {
        id: 259, name: "Form", preview: (
            <div className="fm-259">
            </div>
        )
    },
    {
        id: 260, name: "Form", preview: (
            <div className="fm-260">
            </div>
        )
    }
];

export const patterns = [
    {
        id: 300, name: "Grid Pattern", preview: (
            <div className="pt-300"></div>
        )
    },
    {
        id: 301, name: "Grid Pattern", preview: (
            <div className="pt-301"></div>
        )
    },
    {
        id: 302, name: "Dot Pattern", preview: (
            <div className="pt-302"></div>
        )
    },
    {
        id: 303, name: "Diagonal Lines", preview: (
            <div className="pt-303"></div>
        )
    },
    {
        id: 304, name: "Pattern", preview: (
            <div className="pattern-304">
                <div className="pt-304"></div>
            </div>
        )
    },
    {
        id: 305, name: "Pattern", preview: (
            <div className="pattern-305">
                <div className="pt-305"></div>
            </div>
        )
    },
    {
        id: 306, name: "Wavy Lines Pattern", preview: (
            <div className="pattern-306">
                <div className="pt-306"></div>
            </div>
        )
    },
    {
        id: 307, name: "Circuit Pattern", preview: (
            <div className="pattern-307">
                <div className="pt-307"></div>
            </div>
        )
    },
    {
        id: 308, name: "Pattern", preview: (
            <div className="pt-308">?
            </div>
        )
    },
    {
        id: 309, name: "Pattern", preview: (
            <div className="pt-309">?
            </div>
        )
    },
    {
        id: 310, name: "Pattern", preview: (
            <div className="pt-310">?
            </div>
        )
    },
    {
        id: 311, name: "Pattern", preview: (
            <div className="pt-311">?
            </div>
        )
    },
    {
        id: 312, name: "Pattern", preview: (
            <div className="pt-312">?
            </div>
        )
    },
    {
        id: 313, name: "Pattern", preview: (
            <div className="pt-313">?
            </div>
        )
    }, {
        id: 314, name: "Pattern", preview: (
            <div className="pt-314">?
            </div>
        )
    },

    {
        id: 308, name: "Pattern", preview: (
            <div className="pt-308">?
            </div>
        )
    },
];
export const tooltips = [
    {
        id: 500, name: "Location Tooltip", preview: (
            <div className="tt-500-app">
                <div className="tt-500-reference tt-500-relative">
                    <p className="tt-500-main-title">
                        Location{" "}
                        <span className="tt-500-hover-card">Paris</span>
                        , France </p>
                    <div className="tt-500-card tt-500-absolute">
                        <div className="tt-500-cloud"></div>
                        <div className="tt-500-cloud"></div>
                        <div className="tt-500-cloud"></div>
                        <div className="tt-500-cloud"></div>
                        <div className="tt-500-relative tt-500-inner-card">
                            <div className="tt-500-bg-map"></div>
                            <div className="tt-500-location tt-500-absolute"></div>
                            <div className="tt-500-elements">
                                <div className="tt-500-description tt-500-relative">
                                    <div className="tt-500-blur-item tt-500-absolute"></div>
                                    <span className="tt-500-main-title">Paris</span>
                                    <p className="tt-500-second-title">France</p>
                                </div>
                                <div className="tt-500-details"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 501, name: "Tooltip Top", preview: (
            <div className="tt-501">
                Hover me
                <span className="tt-501__tip">This is a tooltip</span>
            </div>
        )
    },
    {
        id: 502, name: "Tooltip Side", preview: (
            <div className="tt-502">
                Hover me
                <span className="tt-502__tip">Tooltip right</span>
            </div>
        )
    },
    {
        id: 503, name: "tooltip", preview: (
            <div className="tt-503-container">
                <div className="tt-503-hacker-container">
                    <button className="tt-503-hacker-btn">SYSTEM</button>
                    <div
                        data-text="SYSTEM OVERRIDE"
                        className="tt-503-hacker-tooltip">
                        <span>SYSTEM OVERRIDE</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 504, name: "tooltip", preview: (
            <div className="tt-504-tooltip">
                <div className="tt-504-icon">i</div>
                <div className="tt-504-tooltiptext">
                    This is a cool tooltip!
                </div>
            </div>
        )
    },
    {
        id: 505, name: "tooltip", preview: (
            <div className="tt-505-tooltip-container">
                <span className="tt-505-text">
                    <i className="fa-solid fa-paper-plane"></i>
                </span>
                <span className="tt-505-tooltip1">
                    <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="tt-505-tooltip2">
                    <i className="fa-brands fa-facebook"></i>
                </span>
                <span className="tt-505-tooltip3">
                    <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span className="tt-505-tooltip4">
                    <i className="fa-brands fa-discord"></i>
                </span>
                <span className="tt-505-tooltip9"></span>
            </div>
        )
    },
    {
        id: 506, name: "tooltip", preview: (
            <div className="tt-506">
                <button className="tt-506-btn">
                    <span className="tt-506-icon">
                        <i className="fa-brands fa-react"></i>
                    </span>

                    <span className="tt-506-tooltip">Help?</span>
                </button>
            </div>
        ),
    },
    {
        id: 507, name: "tooltip", preview: (
            <div className="tt-507">
                <div className="tt-507-tooltip">
                    <div className="tt-507-profile">
                        <div className="tt-507-user">
                            <div className="tt-507-img">AB</div>
                            <div className="tt-507-details">
                                <div className="tt-507-name">User</div>
                                <div className="tt-507-username">@username</div>
                            </div>
                        </div>
                        <div className="tt-507-about">500+ Connections</div>
                    </div>
                </div>
                <a href="#" className="tt-507-icon">
                    <div className="tt-507-layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="tt-507-discord">
                            <i className="fa-brands fa-discord" style={{ color: "rgb(19, 96, 234)" }} ></i> </span>
                    </div>

                    <div className="tt-507-text">Discord</div>
                </a>
            </div>
        ),
    },
    {
        id: 508, name: "tooltip", preview: (
            <ul className="tt-508-example-1">
                <li className="tt-508-icon-content">
                    <a
                        href="https://www.spotify.com/"
                        aria-label="Spotify"
                        data-social="spotify"
                        className="tt-508-link">
                        <i className="fa-brands fa-spotify" style={{ color: "rgb(99, 230, 190)" }}></i>
                    </a>
                    <div className="tt-508-tooltip">Spotify</div>
                </li>
                <li className="tt-508-icon-content">
                    <a
                        href="https://www.pinterest.com/"
                        aria-label="Pinterest"
                        data-social="pinterest"
                        className="tt-508-link" >
                        <i className="fa-brands fa-pinterest" style={{ color: "rgb(218, 78, 78)" }}></i>
                    </a>
                    <div className="tt-508-tooltip">Pinterest</div>
                </li>
                <li className="tt-508-icon-content">
                    <a
                        href="https://dribbble.com/"
                        aria-label="Dribbble"
                        data-social="dribbble"
                        className="tt-508-link" >
                        <i className="fa-brands fa-square-instagram" style={{ color: "rgb(193, 12, 238)" }}></i>
                    </a>
                    <div className="tt-508-tooltip">Instagram</div>
                </li>
                <li className="tt-508-icon-content">
                    <a
                        href="https://telegram.org/"
                        aria-label="Telegram"
                        data-social="telegram"
                        className="tt-508-link">
                        <i className="fa-solid fa-paper-plane" style={{ color: "rgb(116, 192, 252)" }}></i>
                    </a>
                    <div className="tt-508-tooltip">Telegram</div>
                </li>
            </ul>
        )
    },
    { id: 509, name: "tooltip", preview: <div className="tt-509">?</div> },
    { id: 510, name: "tooltip", preview: <div className="tt-510">?</div> },
    { id: 511, name: "tooltip", preview: <div className="tt-511">?</div> },
    { id: 512, name: "tooltip", preview: <div className="tt-512">?</div> },
    { id: 513, name: "tooltip", preview: <div className="tt-513">?</div> },
    { id: 514, name: "tooltip", preview: <div className="tt-514">?</div> },
    { id: 515, name: "tooltip", preview: <div className="tt-515">?</div> },
    { id: 516, name: "tooltip", preview: <div className="tt-516">?</div> },
    { id: 517, name: "tooltip", preview: <div className="tt-517">?</div> },
];
export const navbar = [
    {
        id: 400, name: "Simple Navbar", preview: (
            <div className="nv-400">
                <div className="nv-400__logo">MyApp</div>
                <nav className="nv-400__nav">
                    <a href="#" className="nv-400__link nv-400__link--active">Home</a>
                    <a href="#" className="nv-400__link">About</a>
                    <a href="#" className="nv-400__link">Projects</a>
                    <a href="#" className="nv-400__link">Contact</a>
                </nav>
                <button className="nv-400__btn">Sign in</button>
            </div>
        )
    },
    {
        id: 401, name: "Dark Navbar", preview: (
            <div className="nv-401">
                <div className="nv-401__logo">Brand</div>
                <nav className="nv-401__nav">
                    <a href="#" className="nv-401__link">Home</a>
                    <a href="#" className="nv-401__link">Features</a>
                    <a href="#" className="nv-401__link">Pricing</a>
                    <a href="#" className="nv-401__link">Blog</a>
                </nav>
                <div className="nv-401__actions">
                    <a href="#" className="nv-401__login">Log in</a>
                    <button className="nv-401__btn">Get started</button>
                </div>
            </div>
        )
    },
    {
        id: 402, name: "Pill Navbar", preview: (
            <div className="nv-402">
                <div className="nv-402__inner">
                    <div className="nv-402__logo">Logo</div>
                    <nav className="nv-402__nav">
                        <a href="#" className="nv-402__link nv-402__link--active">Home</a>
                        <a href="#" className="nv-402__link">Work</a>
                        <a href="#" className="nv-402__link">About</a>
                        <a href="#" className="nv-402__link">Contact</a>
                    </nav>
                </div>
            </div>
        )
    },
    {
        id: 403, name: "Underline Navbar", preview: (
            <div className="nv-403">
                <div className="nv-403__logo">Studio</div>
                <nav className="nv-403__nav">
                    <a href="#" className="nv-403__link nv-403__link--active">Home</a>
                    <a href="#" className="nv-403__link">Portfolio</a>
                    <a href="#" className="nv-403__link">Services</a>
                    <a href="#" className="nv-403__link">Contact</a>
                </nav>
                <button className="nv-403__btn">Hire me</button>
            </div>
        )
    },
    {
        id: 404, name: "Glass Navbar", preview: (
            <div className="nv-404">
                <div className="nv-404__logo">Glass</div>
                <nav className="nv-404__nav">
                    <a href="#" className="nv-404__link">Home</a>
                    <a href="#" className="nv-404__link">About</a>
                    <a href="#" className="nv-404__link">Work</a>
                    <a href="#" className="nv-404__link">Contact</a>
                </nav>
                <button className="nv-404__btn">Sign up</button>
            </div>
        )
    },
    {
        id: 405, name: "Minimal Navbar", preview: (
            <div className="nv-405">
                <div className="nv-405__logo">Minimal</div>
                <nav className="nv-405__nav">
                    <a href="#" className="nv-405__link">Home</a>
                    <a href="#" className="nv-405__link">About</a>
                    <a href="#" className="nv-405__link">Work</a>
                    <a href="#" className="nv-405__link">Contact</a>
                </nav>
                <div className="nv-405__dot"></div>
            </div>
        )
    },
    {
        id: 406, name: "Navbar", preview: (
            <div className="nv-406">
                <nav className="modern-navbar">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    },
    {
        id: 407, name: "Gradient Navbar", preview: (
            <div className="nv-407">
                <div className="nv-407__logo">Brand</div>
                <nav className="nv-407__nav">
                    <a href="#" className="nv-407__link nv-407__link--active">Home</a>
                    <a href="#" className="nv-407__link">Pagina 1</a>
                    <a href="#" className="nv-407__link">Pagina 2</a>
                    <a href="#" className="nv-407__link">Pagina 3</a>
                    <a href="#" className="nv-407__link">Pagina 4</a>
                    <a href="#" className="nv-407__link">Pagina 5</a>
                </nav>
                <button className="nv-407__btn">Sign up</button>
            </div>
        )
    },
    {
        id: 408, name: "Border Bottom Navbar", preview: (
            <div className="nv-408">
                <div className="nv-408__logo">Logo</div>
                <nav className="nv-408__nav">
                    <a href="#" className="nv-408__link nv-408__link--active">Home</a>
                    <a href="#" className="nv-408__link">Pagina 1</a>
                    <a href="#" className="nv-408__link">Pagina 2</a>
                    <a href="#" className="nv-408__link">Pagina 3</a>
                    <a href="#" className="nv-408__link">Pagina 4</a>
                    <a href="#" className="nv-408__link">Pagina 5</a>
                </nav>
            </div>
        )
    },
    {
        id: 409, name: "Colored Navbar", preview: (
            <div className="nv-409">
                <div className="nv-409__logo">MyApp</div>
                <nav className="nv-409__nav">
                    <a href="#" className="nv-409__link nv-409__link--active">Home</a>
                    <a href="#" className="nv-409__link">Pagina 1</a>
                    <a href="#" className="nv-409__link">Pagina 2</a>
                    <a href="#" className="nv-409__link">Pagina 3</a>
                    <a href="#" className="nv-409__link">Pagina 4</a>
                    <a href="#" className="nv-409__link">Pagina 5</a>
                </nav>
                <button className="nv-409__btn">Contact</button>
            </div>
        )
    },
    {
        id: 410, name: "Boxed Navbar", preview: (
            <div className="nv-410">
                <div className="nv-410__logo">Studio</div>
                <nav className="nv-410__nav">
                    <a href="#" className="nv-410__link nv-410__link--active">Home</a>
                    <a href="#" className="nv-410__link">Pagina 1</a>
                    <a href="#" className="nv-410__link">Pagina 2</a>
                    <a href="#" className="nv-410__link">Pagina 3</a>
                    <a href="#" className="nv-410__link">Pagina 4</a>
                    <a href="#" className="nv-410__link">Pagina 5</a>
                </nav>
                <button className="nv-410__btn">Login</button>
            </div>
        )
    },
    {
        id: 411, name: "Light Navbar", preview: (
            <div className="nv-411">
                <div className="nv-411__logo">Light</div>
                <nav className="nv-411__nav">
                    <a href="#" className="nv-411__link nv-411__link--active">Home</a>
                    <a href="#" className="nv-411__link">Pagina 1</a>
                    <a href="#" className="nv-411__link">Pagina 2</a>
                    <a href="#" className="nv-411__link">Pagina 3</a>
                    <a href="#" className="nv-411__link">Pagina 4</a>
                    <a href="#" className="nv-411__link">Pagina 5</a>
                </nav>
                <button className="nv-411__btn">Get started</button>
            </div>
        )
    },
    {
        id: 412, name: "Rounded Navbar", preview: (
            <div className="nv-412">
                <div className="nv-412__logo">Round</div>
                <nav className="nv-412__nav">
                    <a href="#" className="nv-412__link nv-412__link--active">Home</a>
                    <a href="#" className="nv-412__link">Pagina 1</a>
                    <a href="#" className="nv-412__link">Pagina 2</a>
                    <a href="#" className="nv-412__link">Pagina 3</a>
                    <a href="#" className="nv-412__link">Pagina 4</a>
                    <a href="#" className="nv-412__link">Pagina 5</a>
                </nav>
                <button className="nv-412__btn">Sign in</button>
            </div>
        )
    },
    {
        id: 413, name: "Neon Navbar", preview: (
            <div className="nv-413">
                <div className="nv-413__logo">Neon</div>
                <nav className="nv-413__nav">
                    <a href="#" className="nv-413__link nv-413__link--active">Home</a>
                    <a href="#" className="nv-413__link">Pagina 1</a>
                    <a href="#" className="nv-413__link">Pagina 2</a>
                    <a href="#" className="nv-413__link">Pagina 3</a>
                    <a href="#" className="nv-413__link">Pagina 4</a>
                    <a href="#" className="nv-413__link">Pagina 5</a>
                </nav>
            </div>
        )
    },
    {
        id: 414, name: "Split Navbar", preview: (
            <div className="nv-414">
                <nav className="nv-414__left">
                    <a href="#" className="nv-414__link nv-414__link--active">Home</a>
                    <a href="#" className="nv-414__link">Pagina 1</a>
                    <a href="#" className="nv-414__link">Pagina 2</a>
                </nav>
                <div className="nv-414__logo">Brand</div>
                <nav className="nv-414__right">
                    <a href="#" className="nv-414__link">Pagina 3</a>
                    <a href="#" className="nv-414__link">Pagina 4</a>
                    <a href="#" className="nv-414__link">Pagina 5</a>
                </nav>
            </div>
        )
    },
    {
        id: 415, name: "Sidebar Navbar", preview: (
            <div className="nv-415">
                <div className="nv-415__logo">App</div>
                <nav className="nv-415__nav">
                    <a href="#" className="nv-415__link nv-415__link--active">Home</a>
                    <a href="#" className="nv-415__link">Pagina 1</a>
                    <a href="#" className="nv-415__link">Pagina 2</a>
                    <a href="#" className="nv-415__link">Pagina 3</a>
                    <a href="#" className="nv-415__link">Pagina 4</a>
                    <a href="#" className="nv-415__link">Pagina 5</a>
                </nav>
            </div>
        )
    },
    {
        id: 416, name: "Badge Navbar", preview: (
            <div className="nv-416">
                <div className="nv-416__logo">Badge</div>
                <nav className="nv-416__nav">
                    <a href="#" className="nv-416__link nv-416__link--active">Home</a>
                    <a href="#" className="nv-416__link">Pagina 1</a>
                    <a href="#" className="nv-416__link">Pagina 2 <span className="nv-416__badge">New</span></a>
                    <a href="#" className="nv-416__link">Pagina 3</a>
                    <a href="#" className="nv-416__link">Pagina 4</a>
                    <a href="#" className="nv-416__link">Pagina 5</a>
                </nav>
            </div>
        )
    },
    {
        id: 417, name: "Dot Indicator Navbar", preview: (
            <div className="nv-417">
                <div className="nv-417__logo">Dots</div>
                <nav className="nv-417__nav">
                    <a href="#" className="nv-417__link nv-417__link--active"><span className="nv-417__dot"></span>Home</a>
                    <a href="#" className="nv-417__link">Pagina 1</a>
                    <a href="#" className="nv-417__link">Pagina 2</a>
                    <a href="#" className="nv-417__link">Pagina 3</a>
                    <a href="#" className="nv-417__link">Pagina 4</a>
                    <a href="#" className="nv-417__link">Pagina 5</a>
                </nav>
                <button className="nv-417__btn">Login</button>
            </div>
        )
    }
];

export const allComponents = [...buttons, ...checkboxes, ...toggles, ...cards, ...loaders, ...inputs, ...radiobuttons, ...forms, ...patterns, ...tooltips, ...navbar];









        // {
        // id: 1, name: "wat de naam ook maar is", preview: <button className="wat de naam ook maar is">Get started</button>,
        // html: `<button class="Button">click here</button>`,
        // css: `.Button {
        // color: #fff;
        // }
        // .Button:hover {
        //     opacity: 0.85;
        // }`
        // },