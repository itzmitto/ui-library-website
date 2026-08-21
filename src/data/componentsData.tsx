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
        ),
        html: `<div class="Toggle-group">
    <label class="Toggle"><input type="checkbox" checked /><span class="Toggle__track"><span class="Toggle__thumb"></span></span></label>
    <label class="Toggle"><input type="checkbox" /><span class="Toggle__track"><span class="Toggle__thumb"></span></span></label>
</div>`,
        css: `.Toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.Toggle input {
    display: none;
}
.Toggle__track {
    width: 44px;
    height: 24px;
    background: #3f3f46;
    border-radius: 999px;
    position: relative;
    transition: background 0.2s;
}
.Toggle input:checked+.Toggle__track {
    background: #7c3aed;
}
.Toggle__thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
}
.Toggle input:checked+.Toggle__track .Toggle__thumb {
    transform: translateX(20px);
}
.Toggle-group {
    display: flex;
    flex-direction: column;
    gap: 14px;
}`
    },
    {
        id: 40, name: "Toggle Switch", preview: (
            <div className="ts-40-group ts-40">
                <input type="checkbox" id="checkboxInput40" />
                <label htmlFor="checkboxInput40" className="toggleSwitch"></label>
            </div>
        ),
        html: `<div class="Toggle-group">
    <input type="checkbox" id="toggle-40" />
    <label for="toggle-40" class="Toggle-switch"></label>
</div>`,
        css: `.Toggle-group #toggle-40 {
    display: none;
}
.Toggle-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 30px;
    background-color: rgb(82, 82, 82);
    border-radius: 20px;
    cursor: pointer;
    transition-duration: .2s;
}
.Toggle-switch::after {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    left: 5px;
    background-color: transparent;
    border-radius: 50%;
    transition-duration: .2s;
    box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.26);
    border: 5px solid white;
}
#toggle-40:checked+.Toggle-switch::after {
    transform: translateX(100%);
    transition-duration: .2s;
    background-color: white;
}
#toggle-40:checked+.Toggle-switch {
    background-color: rgb(148, 118, 255);
    transition-duration: .2s;
}`
    },
    {
        id: 41, name: "Toggle Switch", preview: (
            <label className="ts41">
                <input type="checkbox" />
                <span className="ts41-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e5ea;
    border-radius: 28px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Toggle input:checked~.Toggle-slider {
    background: #34c759;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(22px);
}`
    },
    {
        id: 42, name: "Toggle Switch", preview: (
            <label className="ts42">
                <input type="checkbox" />
                <span className="ts42-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 20px;
    margin-top: 4px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #bdbdbd;
    border-radius: 20px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 28px;
    width: 28px;
    left: -4px;
    bottom: -4px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.Toggle input:checked~.Toggle-slider {
    background: #90caf9;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #1976d2;
}`
    },
    {
        id: 43, name: "Toggle Switch", preview: (
            <label className="ts43">
                <input type="checkbox" />
                <span className="ts43-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #ddd;
    border-radius: 28px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(135deg, #a855f7, #ec4899);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}`
    },
    {
        id: 44, name: "Toggle Switch", preview: (
            <label className="ts44">
                <input type="checkbox" />
                <span className="ts44-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #1a1a2e;
    border-radius: 28px;
    border: 1.5px solid #333;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: #555;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #0d0d1a;
    border-color: #00e5ff;
    box-shadow: 0 0 12px rgba(0, 229, 255, 0.5);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #00e5ff;
    box-shadow: 0 0 10px #00e5ff;
}`
    },
    {
        id: 45, name: "Toggle Switch", preview: (
            <label className="ts45">
                <input type="checkbox" />
                <span className="ts45-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e0e5ec;
    border-radius: 28px;
    box-shadow: inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: #e0e5ec;
    border-radius: 50%;
    box-shadow: 3px 3px 6px #b8bec7, -3px -3px 6px #ffffff;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #6c63ff;
    box-shadow: 2px 2px 5px rgba(108, 99, 255, 0.4);
}`
    },
    {
        id: 46, name: "Toggle Switch", preview: (
            <label className="ts46">
                <input type="checkbox" />
                <span className="ts46-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 30px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #fee2e2;
    border-radius: 30px;
    transition: .3s;
    display: flex;
    align-items: center;
    padding: 0 6px;
    justify-content: flex-end;
    font-size: 13px;
}
.Toggle-slider:after {
    content: "☀️";
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background: #ef4444;
    border-radius: 50%;
    transition: .3s;
    z-index: 1;
}
.Toggle input:checked~.Toggle-slider {
    background: #dbeafe;
    justify-content: flex-start;
}
.Toggle input:checked~.Toggle-slider:after {
    content: "🌙";
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #3b82f6;
}`
    },
    {
        id: 47, name: "Toggle Switch", preview: (
            <label className="ts47">
                <input type="checkbox" />
                <span className="ts47-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e7eb;
    border-radius: 4px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 3px;
    transition: .3s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
.Toggle input:checked~.Toggle-slider {
    background: #6366f1;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
}`
    },
    {
        id: 48, name: "Toggle Switch", preview: (
            <label className="ts48">
                <input type="checkbox" />
                <span className="ts48-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: transparent;
    border-radius: 28px;
    border: 2px solid #d1d5db;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background: #d1d5db;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #10b981;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #10b981;
}`
    },
    {
        id: 49, name: "Toggle Switch", preview: (
            <label className="ts49">
                <input type="checkbox" />
                <span className="ts49-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e7eb;
    border-radius: 28px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(135deg, #f97316, #ef4444);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}`
    },
    {
        id: 50, name: "Toggle Switch", preview: (
            <label className="ts50">
                <input type="checkbox" />
                <span className="ts50-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #374151;
    border-radius: 26px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: #9ca3af;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #111827;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #f9fafb;
}`
    },
    {
        id: 51, name: "Toggle Switch", preview: (
            <label className="ts51">
                <input type="checkbox" />
                <span className="ts51-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 26px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #1a1a1a;
    border: 1.5px solid #444;
    clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px));
    transition: .2s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background: #555;
    clip-path: polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px));
    transition: .2s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #f0e614;
    box-shadow: 0 0 10px rgba(240, 230, 20, 0.5);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
    background: #f0e614;
    box-shadow: 0 0 8px #f0e614;
}`
    },
    {
        id: 52, name: "Toggle Switch", preview: (
            <label className="ts52">
                <input type="checkbox" />
                <span className="ts52-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #fce7f3;
    border-radius: 28px;
    border: 2px solid #fbcfe8;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background: #f9a8d4;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #fdf2f8;
    border-color: #f472b6;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #ec4899;
}`
    },
    {
        id: 53, name: "Toggle Switch", preview: (
            <label className="ts53">
                <input type="checkbox" />
                <span className="ts53-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 28px;
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(6px);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(99, 102, 241, 0.3);
    border-color: rgba(99, 102, 241, 0.6);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: white;
}`
    },
    {
        id: 54, name: "Toggle Switch", preview: (
            <label className="ts54">
                <input type="checkbox" />
                <span className="ts54-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e7eb;
    border-radius: 28px;
    transition: background .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: transform .4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Toggle input:checked~.Toggle-slider {
    background: #8b5cf6;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}`
    },
    {
        id: 55, name: "Toggle Switch", preview: (
            <label className="ts55">
                <input type="checkbox" />
                <span className="ts55-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 26px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e0e0e0;
    border-radius: 26px;
    transition: .2s;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .2s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}
.Toggle input:checked~.Toggle-slider {
    background: #635bff;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(22px);
}`
    },
    {
        id: 56, name: "Toggle Switch", preview: (
            <label className="ts56">
                <input type="checkbox" />
                <span className="ts56-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #111;
    border-radius: 28px;
    border: 1.5px solid #333;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background: #333;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #22c55e;
    box-shadow: 0 0 12px rgba(34, 197, 94, 0.5);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
}`
    },
    {
        id: 57, name: "Toggle Switch", preview: (
            <label className="ts57">
                <input type="checkbox" />
                <span className="ts57-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 20px;
    margin-top: 4px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #d1d5db;
    border-radius: 20px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    left: -5px;
    bottom: -5px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border: 2px solid #d1d5db;
}
.Toggle input:checked~.Toggle-slider {
    background: #06b6d4;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(40px);
    border-color: #06b6d4;
}`
    },
    {
        id: 58, name: "Toggle Switch", preview: (
            <label className="ts58">
                <input type="checkbox" />
                <span className="ts58-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #c0c0c0;
    border-top: 3px solid #808080;
    border-left: 3px solid #808080;
    border-bottom: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
    transition: .1s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background: #c0c0c0;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #808080;
    border-right: 2px solid #808080;
    transition: .1s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
}`
    },
    {
        id: 59, name: "Toggle Switch", preview: (
            <label className="ts59">
                <input type="checkbox" />
                <span className="ts59-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e7eb;
    border-radius: 28px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(135deg, #0ea5e9, #14b8a6);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}`
    },
    {
        id: 60, name: "Toggle Switch", preview: (
            <label className="ts60">
                <input type="checkbox" />
                <span className="ts60-slider"></span>
            </label>
        ),
        html: `<label class="Toggle">
    <input type="checkbox" />
    <span class="Toggle-slider"></span>
</label>`,
        css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #e5e7eb;
    border-radius: 28px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: .3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.Toggle input:checked~.Toggle-slider {
    background: #f43f5e;
    box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.3);
    animation: Toggle-ring 1.5s infinite;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}
@keyframes Toggle-ring {
    0%, 100% { 
        box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.3);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(244, 63, 94, 0.15);
    }
}`
    },

        {
        id: 700,
        name: "Blue Toggle",
        preview: (
            <label className="ts700">
                <input type="checkbox" />
                <span className="ts700-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle { position: relative; display: inline-block; width: 54px; height: 28px; } .Toggle input { opacity: 0; width: 0; height: 0; } .Toggle-slider { position: absolute; inset: 0; background: #dbeafe; border-radius: 28px; } .Toggle-slider:before { content: ""; position: absolute; width: 20px; height: 20px; left: 4px; bottom: 4px; background: #3b82f6; border-radius: 50%; transition: .3s; }`
    },
    {
        id: 701,
        name: "Square Toggle",
        preview: (
            <label className="ts701">
                <input type="checkbox" />
                <span className="ts701-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle { position: relative; display: inline-block; width: 58px; height: 30px; } .Toggle input { opacity: 0; width: 0; height: 0; } .Toggle-slider { position: absolute; inset: 0; background: #27272a; border-radius: 8px; } .Toggle-slider:before { content: ""; position: absolute; width: 22px; height: 22px; left: 4px; bottom: 4px; background: #71717a; border-radius: 5px; transition: .3s; }`
    },
    {
        id: 702,
        name: "Gradient Toggle",
        preview: (
            <label className="ts702">
                <input type="checkbox" />
                <span className="ts702-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: linear-gradient(90deg,#ef4444,#f97316); }`
    },
    {
        id: 703,
        name: "Outline Toggle",
        preview: (
            <label className="ts703">
                <input type="checkbox" />
                <span className="ts703-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #f4f4f5; border: 2px solid #d4d4d8; }`
    },
    {
        id: 704,
        name: "Neon Green Toggle",
        preview: (
            <label className="ts704">
                <input type="checkbox" />
                <span className="ts704-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #111827; }`
    },
    {
        id: 705,
        name: "Teal Toggle",
        preview: (
            <label className="ts705">
                <input type="checkbox" />
                <span className="ts705-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e2e8f0; }`
    },
    {
        id: 706,
        name: "Indigo Toggle",
        preview: (
            <label className="ts706">
                <input type="checkbox" />
                <span className="ts706-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #1e293b; border: 1px solid #475569; }`
    },
    {
        id: 707,
        name: "Success Toggle",
        preview: (
            <label className="ts707">
                <input type="checkbox" />
                <span className="ts707-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #fee2e2; }`
    },
    {
        id: 708,
        name: "Purple Gradient",
        preview: (
            <label className="ts708">
                <input type="checkbox" />
                <span className="ts708-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: linear-gradient(90deg,#c084fc,#f0abfc); }`
    },
    {
        id: 709,
        name: "Round Toggle",
        preview: (
            <label className="ts709">
                <input type="checkbox" />
                <span className="ts709-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { border-radius: 50%; }`
    },
    {
        id: 710,
        name: "ON OFF Toggle",
        preview: (
            <label className="ts710">
                <input type="checkbox" />
                <span className="ts710-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #cbd5e1; }`
    },
    {
        id: 711,
        name: "Sky Toggle",
        preview: (
            <label className="ts711">
                <input type="checkbox" />
                <span className="ts711-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e0f2fe; border: 1px solid #7dd3fc; }`
    },
    {
        id: 712,
        name: "Soft Shadow Toggle",
        preview: (
            <label className="ts712">
                <input type="checkbox" />
                <span className="ts712-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #f1f5f9; box-shadow: inset 0 2px 5px rgba(0,0,0,.12); }`
    },
    {
        id: 713,
        name: "Red Glow Toggle",
        preview: (
            <label className="ts713">
                <input type="checkbox" />
                <span className="ts713-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #18181b; }`
    },
    {
        id: 714,
        name: "Wide Toggle",
        preview: (
            <label className="ts714">
                <input type="checkbox" />
                <span className="ts714-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #ddd; }`
    },
    {
        id: 715,
        name: "Rose Green Toggle",
        preview: (
            <label className="ts715">
                <input type="checkbox" />
                <span className="ts715-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #fecdd3; }`
    },
    {
        id: 716,
        name: "Square Outline Toggle",
        preview: (
            <label className="ts716">
                <input type="checkbox" />
                <span className="ts716-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e5e7eb; border: 2px solid #9ca3af; border-radius: 6px; }`
    },
    {
        id: 717,
        name: "Orange Toggle",
        preview: (
            <label className="ts717">
                <input type="checkbox" />
                <span className="ts717-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #f3f4f6; }`
    },
    {
        id: 718,
        name: "Minimal Toggle",
        preview: (
            <label className="ts718">
                <input type="checkbox" />
                <span className="ts718-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e2e8f0; }`
    },
    {
        id: 719,
        name: "Sun Moon Toggle",
        preview: (
            <label className="ts719">
                <input type="checkbox" />
                <span className="ts719-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #172554; }`
    },
    {
        id: 720,
        name: "Check Toggle",
        preview: (
            <label className="ts720">
                <input type="checkbox" />
                <span className="ts720-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider:before { content: "×"; }`
    },
    {
        id: 721,
        name: "Long Toggle",
        preview: (
            <label className="ts721">
                <input type="checkbox" />
                <span className="ts721-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { width: 64px; }`
    },
    {
        id: 722,
        name: "Cyan Gradient Toggle",
        preview: (
            <label className="ts722">
                <input type="checkbox" />
                <span className="ts722-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: linear-gradient(90deg,#06b6d4,#3b82f6); }`
    },
    {
        id: 723,
        name: "Dark Minimal Toggle",
        preview: (
            <label className="ts723">
                <input type="checkbox" />
                <span className="ts723-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #f9fafb; border: 1px solid #d1d5db; }`
    },
    {
        id: 724,
        name: "Dual Color Toggle",
        preview: (
            <label className="ts724">
                <input type="checkbox" />
                <span className="ts724-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #fee2e2; }`
    },
    {
        id: 725,
        name: "Neon Cyan Toggle",
        preview: (
            <label className="ts725">
                <input type="checkbox" />
                <span className="ts725-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #0f172a; }`
    },
    {
        id: 726,
        name: "Lime Cyan Toggle",
        preview: (
            <label className="ts726">
                <input type="checkbox" />
                <span className="ts726-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #ecfccb; }`
    },
    {
        id: 727,
        name: "Pink Toggle",
        preview: (
            <label className="ts727">
                <input type="checkbox" />
                <span className="ts727-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e5e7eb; }`
    },
    {
        id: 728,
        name: "Amber Green Toggle",
        preview: (
            <label className="ts728">
                <input type="checkbox" />
                <span className="ts728-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #fef3c7; }`
    },
    {
        id: 729,
        name: "Simple Blue Toggle",
        preview: (
            <label className="ts729">
                <input type="checkbox" />
                <span className="ts729-slider"></span>
            </label>
        ),
        html: `<label class="Toggle"><input type="checkbox"><span class="Toggle-slider"></span></label>`,
        css: `.Toggle-slider { background: #e5e7eb; }`
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
        ),
        html: `<div class="Card">
    <div class="Card-avatar">A</div>
    <div class="Card-name">Andre</div>
    <div class="Card-sub">UI Developer</div>
    <button class="Card-btn">Follow</button>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 140px;
}
.Card-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
}
.Card-name {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}
.Card-sub {
    font-size: 12px;
    color: #71717a;
}
.Card-btn {
    margin-top: 6px;
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px 18px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
}`
    },
    {
        id: 8, name: "Pricing Card", preview: (
            <div className="prev-pricing">
                <div className="prev-pricing-label">Pro</div>
                <div className="prev-pricing-price">$9<span>/mo</span></div>
                <button className="prev-pricing-btn">Sign up</button>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card-label">Pro</div>
    <div class="Card-price">$9<span>/mo</span></div>
    <button class="Card-btn">Sign up</button>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 140px;
}
.Card-label {
    font-size: 12px;
    font-weight: 600;
    color: #a855f7;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.Card-price {
    font-size: 28px;
    font-weight: 800;
    color: #fff;
}
.Card-price span {
    font-size: 14px;
    font-weight: 400;
    color: #71717a;
}
.Card-btn {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    padding: 6px 18px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    width: 100%;
}`
    },
    {
        id: 110, name: "Rotating Border", preview: (
            <div className="card-110">
                <h2>CARD</h2>
            </div>
        ),
        html: `<div class="Card">
    <h2>CARD</h2>
</div>`,
        css: `.Card {
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    width: 140px;
    height: 190px;
}
.Card h2 {
    color: white;
    font-size: 2em;
}
.Card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: Card-rot 3s linear infinite;
    transition: all 0.2s linear;
}
@keyframes Card-rot {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.Card::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
}`
    },
    {
        id: 111, name: "Neumorphism", preview: (
            <div className="card-111"></div>
        ),
        html: `<div class="Card"></div>`,
        css: `.Card {
    border-radius: 30px;
    background: #e0e0e0;
    width: 140px;
    height: 190px;
}`
    },
    {
        id: 112, name: "Glassmorphism", preview: (
            <div className="card-112">Click me</div>
        ),
        html: `<div class="Card">Click me</div>`,
        css: `.Card {
    box-sizing: border-box;
    width: 140px;
    height: 190px;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
}
.Card:hover {
    border: 1px solid black;
    transform: scale(1.05);
}
.Card:active {
    transform: scale(0.95) rotateZ(1.7deg);
}`
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
        ),
        html: `<div class="Card">
    <div class="Card-inner">
        <div class="Card-front">
            <p class="Card-title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div class="Card-back">
            <p class="Card-title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>`,
        css: `.Card {
    background-color: transparent;
    width: 140px;
    height: 190px;
    perspective: 1000px;
    font-family: sans-serif;
}
.Card-title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
}
.Card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.Card:hover .Card-inner {
    transform: rotateY(180deg);
}
.Card-front,
.Card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
}
.Card-front {
    background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
    color: coral;
}
.Card-back {
    background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
    color: white;
    transform: rotateY(180deg);
}`
    },
    {
        id: 114, name: "Gradient Border", preview: (
            <div className="card-114">
                <div className="card-114-inner"></div>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card-inner"></div>
</div>`,
        css: `.Card {
    width: 140px;
    height: 190px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all .3s;
}
.Card-inner {
    width: 140px;
    height: 190px;
    background-color: #1a1a1a;
    border-radius: 10px;
    transition: all .2s;
}
.Card-inner:hover {
    transform: scale(0.98);
    border-radius: 20px;
}
.Card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}`
    },
    {
        id: 115, name: "Blob Card", preview: (
            <div className="card-115">
                <div className="card-115-bg"></div>
                <div className="card-115-blob"></div>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card-bg"></div>
    <div class="Card-blob"></div>
</div>`,
        css: `.Card {
    position: relative;
    width: 140px;
    height: 190px;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.Card-bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 140px;
    height: 190px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
}
.Card-blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    filter: blur(12px);
    animation: Card-blob 5s infinite ease;
}
@keyframes Card-blob {
    0% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
        transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
        transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
        transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
}`
    },
    {
        id: 116, name: "Dark Neumorphism", preview: (
            <div className="card-116"></div>
        ),
        html: `<div class="Card"></div>`,
        css: `.Card {
    width: 140px;
    height: 190px;
    border-radius: 30px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
}`
    },
    {
        id: 117, name: "Gradient Glow", preview: (
            <div className="card-117">
                <p className="card-117-heading">Popular this month</p>
                <p>Powered By</p>
                <p>Uiverse</p>
            </div>
        ),
        html: `<div class="Card">
    <p class="Card-heading">Popular this month</p>
    <p>Powered By</p>
    <p>Uiverse</p>
</div>`,
        css: `.Card {
    position: relative;
    width: 140px;
    height: 190px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
}
.Card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.Card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
}
.Card-heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    margin: 0;
}
.Card p:not(.Card-heading) {
    font-size: 14px;
    margin: 0;
}
.Card p:last-child {
    color: #e81cff;
    font-weight: 600;
}
.Card:hover::after {
    filter: blur(30px);
}
.Card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
}`
    },
    {
        id: 118, name: "Corner Expand", preview: (
            <div className="card-118">HOVER</div>
        ),
        html: `<div class="Card">HOVER</div>`,
        css: `.Card {
    position: relative;
    width: 140px;
    height: 190px;
    background: mediumturquoise;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    color: white;
}
.Card::before,
.Card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    background-color: lightblue;
    transition: all 0.5s;
}
.Card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
}
.Card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
}
.Card:hover::before,
.Card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.Card:hover::after {
    content: "HELLO";
}`
    },
    {
        id: 119, name: "Flip Card 2", preview: (
            <div className="card-119">
                <div className="card-119-inner">
                    <div className="card-119-front"><p>Front Side</p></div>
                    <div className="card-119-back"><p>Back Side</p></div>
                </div>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card-inner">
        <div class="Card-front"><p>Front Side</p></div>
        <div class="Card-back"><p>Back Side</p></div>
    </div>
</div>`,
        css: `.Card {
    width: 140px;
    height: 190px;
    perspective: 1000px;
}
.Card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
}
.Card:hover .Card-inner {
    transform: rotateY(180deg);
}
.Card-front,
.Card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 10px;
    color: white;
}
.Card-front {
    background-color: #6A2C70;
    border: 10px solid #6A2C70;
}
.Card-back {
    background-color: #F08A5D;
    border: 10px solid #F08A5D;
    transform: rotateY(180deg);
}`
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
        ),
        html: `<div class="Card">
    <div class="Card-tools">
        <div class="Card-circle"><span class="Card-box Card-red"></span></div>
        <div class="Card-circle"><span class="Card-box Card-yellow"></span></div>
        <div class="Card-circle"><span class="Card-box Card-green"></span></div>
    </div>
    <div class="Card-content"></div>
</div>`,
        css: `.Card {
    width: 140px;
    height: 190px;
    background-color: #011522;
    border-radius: 8px;
}
.Card-tools {
    display: flex;
    align-items: center;
    padding: 9px;
}
.Card-circle {
    padding: 0 4px;
}
.Card-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.Card-red {
    background-color: #ff605c;
}
.Card-yellow {
    background-color: #ffbd44;
}
.Card-green {
    background-color: #00ca4e;
}`
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
        ),
        html: `<div class="Card">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
    </svg>
    <div class="Card-content">
        <p class="Card-title">Card Title</p>
        <p class="Card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
</div>`,
        css: `.Card {
    position: relative;
    width: 140px;
    height: 190px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.Card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.Card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.Card-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.Card:hover .Card-content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
}
.Card-title {
    margin: 0;
    font-size: 16px;
    color: #333;
    font-weight: 700;
}
.Card-description {
    margin: 10px 0 0;
    font-size: 11px;
    color: #777;
    line-height: 1.4;
}
.Card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__top">
        <div class="Card__border"></div>
        <div class="Card__icons">
            <div class="Card__logo"></div>
            <div class="Card__social"></div>
        </div>
    </div>
    <div class="Card__bottom">
        <span class="Card__title">UNIVERSE OF UI</span>
        <div class="Card__row">
            <div class="Card__item">
                <span class="Card__big">2626</span>
                <span class="Card__small">UI elements</span>
            </div>
            <div class="Card__item">
                <span class="Card__big">100%</span>
                <span class="Card__small">Free for use</span>
            </div>
            <div class="Card__item">
                <span class="Card__big">38,631</span>
                <span class="Card__small">Contributors</span>
            </div>
        </div>
    </div>
</div>`,
        css: `.Card {
    width: 200px;
    border-radius: 20px;
    background: #1b233d;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.75);
}
.Card:hover {
    transform: scale(0.8);
}
.Card__top {
    height: 120px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
    position: relative;
}
.Card__border {
    border-bottom-right-radius: 10px;
    height: 30px;
    width: 130px;
    background: #1b233d;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1b233d;
}
.Card__border::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #1b233d;
}
.Card__top::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #1b233d;
}
.Card__icons {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
}
.Card__bottom {
    margin-top: 15px;
    padding: 10px 5px;
}
.Card__title {
    display: block;
    font-size: 14px;
    font-weight: 900;
    color: white;
    text-align: center;
    letter-spacing: 2px;
}
.Card__row {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
}
.Card__item {
    flex: 30%;
    text-align: center;
    padding: 5px;
    color: rgba(170, 222, 243, 0.721);
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.Card__item:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
}
.Card__big {
    font-size: 11px;
}
.Card__small {
    font-size: 8px;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__palette">
        <div class="Card__color"><span>264653</span></div>
        <div class="Card__color"><span>2A9D8F</span></div>
        <div class="Card__color"><span>E9C46A</span></div>
        <div class="Card__color"><span>F4A261</span></div>
        <div class="Card__color"><span>E76F51</span></div>
    </div>
</div>`,
        css: `.Card {
    height: 140px;
    width: 200px;
    border-radius: 1em;
    overflow: hidden;
    font-family: sans-serif;
    transform: scale(0.9);
}
.Card__palette {
    display: flex;
    height: 100%;
    width: 100%;
}
.Card__color {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 9px;
    letter-spacing: 1px;
    transition: flex 0.1s linear;
    writing-mode: vertical-rl;
}
.Card__color span {
    opacity: 0;
    transition: opacity 0.1s linear;
}
.Card__color:nth-child(1) {
    background: #264653;
}
.Card__color:nth-child(2) {
    background: #2a9d8f;
}
.Card__color:nth-child(3) {
    background: #e9c46a;
}
.Card__color:nth-child(4) {
    background: #f4a261;
}
.Card__color:nth-child(5) {
    background: #e76f51;
}
.Card__color:hover {
    flex: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.Card__color:hover span {
    opacity: 1;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__tools">
        <div class="Card__circle"><span class="Card__red Card__box"></span></div>
        <div class="Card__circle"><span class="Card__yellow Card__box"></span></div>
        <div class="Card__circle"><span class="Card__green Card__box"></span></div>
    </div>
    <div class="Card__content"></div>
</div>`,
        css: `.Card {
    width: 160px;
    height: 200px;
    background-color: #F8FBFE;
    border-radius: 8px;
    transform: scale(0.9);
}
.Card__tools {
    display: flex;
    align-items: center;
    padding: 9px;
}
.Card__circle {
    padding: 0 4px;
}
.Card__box {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.Card__red {
    background-color: #ff605c;
}
.Card__yellow {
    background-color: #ffbd44;
}
.Card__green {
    background-color: #00ca4e;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__border-top"></div>
    <div class="Card__img"></div>
    <span>Person</span>
    <p class="Card__job">Job Title</p>
    <button>Click</button>
</div>`,
        css: `.Card {
    width: 200px;
    height: 250px;
    background: #3405a3;
    border-radius: 15px;
    box-shadow: 1px 5px 60px 0px #100a886b;
    transform: scale(0.7);
}
.Card__border-top {
    width: 60%;
    height: 3%;
    background: #6b64f3;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
}
.Card span {
    font-weight: 600;
    color: white;
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 15px;
}
.Card__job {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
}
.Card__img {
    width: 60px;
    height: 70px;
    background: #6b64f3;
    border-radius: 15px;
    margin: auto;
    margin-top: 20px;
}
.Card button {
    padding: 7px 22px;
    display: block;
    margin: auto;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    background: #6b64f3;
    color: white;
    font-weight: 600;
    cursor: pointer;
}
.Card button:hover {
    background: #534bf3;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__tag">New</div>
    <div class="Card__title">Dashboard Pro</div>
    <div class="Card__sub">Analytics &amp; insights</div>
    <div class="Card__footer">
        <span>Free</span>
        <button class="Card__btn">Get started</button>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.Card__tag {
    display: inline-block;
    background: rgba(124, 58, 237, 0.15);
    color: #a855f7;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 999px;
    width: fit-content;
}
.Card__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Card__sub {
    font-size: 11px;
    color: #71717a;
}
.Card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
}
.Card__footer span {
    font-size: 12px;
    color: #a1a1aa;
}
.Card__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__avatar">A</div>
    <div class="Card__info">
        <div class="Card__name">Andre</div>
        <div class="Card__role">Frontend Developer</div>
    </div>
    <div class="Card__stats">
        <div class="Card__stat"><span>142</span><small>Projects</small></div>
        <div class="Card__stat"><span>8.4k</span><small>Followers</small></div>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.Card__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
}
.Card__name {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-align: center;
}
.Card__role {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
.Card__stats {
    display: flex;
    gap: 16px;
    margin-top: 4px;
}
.Card__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Card__stat span {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Card__stat small {
    font-size: 10px;
    color: #71717a;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__header">
        <div class="Card__dot Card__dot--red"></div>
        <div class="Card__dot Card__dot--yellow"></div>
        <div class="Card__dot Card__dot--green"></div>
    </div>
    <div class="Card__body">
        <div class="Card__line Card__line--short"></div>
        <div class="Card__line"></div>
        <div class="Card__line Card__line--mid"></div>
    </div>
</div>`,
        css: `.Card {
    background: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
    width: 160px;
}
.Card__header {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}
.Card__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.Card__dot--red {
    background: #ff605c;
}
.Card__dot--yellow {
    background: #ffbd44;
}
.Card__dot--green {
    background: #00ca4e;
}
.Card__body {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.Card__line {
    height: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.07);
    width: 100%;
}
.Card__line--short {
    width: 50%;
}
.Card__line--mid {
    width: 75%;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__top"></div>
    <div class="Card__content">
        <div class="Card__title">Product Design</div>
        <div class="Card__sub">12 lessons · 4h 30min</div>
        <div class="Card__bar"><div class="Card__fill"></div></div>
        <div class="Card__pct">64% complete</div>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    overflow: hidden;
    width: 160px;
}
.Card__top {
    height: 60px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
}
.Card__content {
    padding: 12px;
}
.Card__title {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}
.Card__sub {
    font-size: 10px;
    color: #71717a;
    margin-top: 2px;
    margin-bottom: 8px;
}
.Card__bar {
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
}
.Card__fill {
    width: 64%;
    height: 100%;
    background: #7c3aed;
    border-radius: 999px;
}
.Card__pct {
    font-size: 10px;
    color: #a855f7;
    margin-top: 4px;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__price">$49<span>/mo</span></div>
    <div class="Card__plan">Professional</div>
    <div class="Card__divider"></div>
    <ul class="Card__list">
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>Custom domains</li>
    </ul>
    <button class="Card__btn">Subscribe</button>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 14px;
    width: 140px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.Card__price {
    font-size: 24px;
    font-weight: 800;
    color: #fff;
}
.Card__price span {
    font-size: 12px;
    color: #71717a;
    font-weight: 400;
}
.Card__plan {
    font-size: 11px;
    color: #a855f7;
    font-weight: 600;
}
.Card__divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    margin: 6px 0;
}
.Card__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Card__list li {
    font-size: 10px;
    color: #a1a1aa;
}
.Card__list li::before {
    content: "— ";
    color: #7c3aed;
}
.Card__btn {
    margin-top: 8px;
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    width: 100%;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__label">Revenue</div>
    <div class="Card__value">$12,400</div>
    <div class="Card__change Card__change--up">+8.2% this month</div>
    <div class="Card__bar-wrap">
        <div class="Card__bar"></div>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
}
.Card__label {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 4px;
}
.Card__value {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
}
.Card__change {
    font-size: 11px;
    margin-top: 2px;
    margin-bottom: 10px;
}
.Card__change--up {
    color: #22c55e;
}
.Card__bar-wrap {
    height: 4px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    overflow: hidden;
}
.Card__bar {
    width: 72%;
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #a855f7);
    border-radius: 999px;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__img"></div>
    <div class="Card__body">
        <div class="Card__cat">Design</div>
        <div class="Card__title">How to build UI systems</div>
        <div class="Card__meta">Jan 12 · 5 min read</div>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    overflow: hidden;
    width: 160px;
}
.Card__img {
    height: 70px;
    background: linear-gradient(135deg, #1e1b4b, #312e81);
}
.Card__body {
    padding: 10px;
}
.Card__cat {
    font-size: 10px;
    color: #7c3aed;
    font-weight: 600;
    margin-bottom: 4px;
}
.Card__title {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    line-height: 1.4;
}
.Card__meta {
    font-size: 10px;
    color: #71717a;
    margin-top: 4px;
}`
    },
    {
        id: 133, name: "Card-133", preview: (
            <div className="cd-133">
                <div className="cd-133__icon" />
                <div className="cd-133__title">Notifications</div>
                <div className="cd-133__sub">You have 3 unread messages</div>
                <button className="cd-133__btn">View all</button>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card__icon"></div>
    <div class="Card__title">Notifications</div>
    <div class="Card__sub">You have 3 unread messages</div>
    <button class="Card__btn">View all</button>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Card__icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(124, 58, 237, 0.15);
    margin-bottom: 4px;
}
.Card__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Card__sub {
    font-size: 11px;
    color: #71717a;
}
.Card__btn {
    margin-top: 6px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #a1a1aa;
    padding: 5px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
}
.Card__btn:hover {
    border-color: #7c3aed;
    color: #fff;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__header">
        <div class="Card__avatar">MK</div>
        <div>
            <div class="Card__name">Mike K.</div>
            <div class="Card__time">2 min ago</div>
        </div>
    </div>
    <div class="Card__msg">Hey, the new design looks great. Can we hop on a call?</div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 14px;
    width: 160px;
}
.Card__header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}
.Card__avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #7c3aed);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    flex-shrink: 0;
}
.Card__name {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
}
.Card__time {
    font-size: 10px;
    color: #71717a;
}
.Card__msg {
    font-size: 11px;
    color: #a1a1aa;
    line-height: 1.5;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__title">Team</div>
    <div class="Card__avatars">
        <span>AL</span><span>BR</span><span>CK</span><span>+4</span>
    </div>
    <div class="Card__sub">7 members · 3 online</div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Card__title {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}
.Card__avatars {
    display: flex;
}
.Card__avatars span {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    border: 2px solid #18181b;
    margin-left: -6px;
}
.Card__avatars span:first-child {
    margin-left: 0;
}
.Card__avatars span:last-child {
    background: #3f3f46;
}
.Card__sub {
    font-size: 10px;
    color: #71717a;
}`
    },
    {
        id: 136, name: "Card-136", preview: (
            <div className="cd-136">
                <div className="cd-136__label">Storage</div>
                <div className="cd-136__val">14.2 GB <span>of 20 GB</span></div>
                <div className="cd-136__track"><div className="cd-136__fill" /></div>
                <div className="cd-136__sub">5.8 GB remaining</div>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card__label">Storage</div>
    <div class="Card__val">14.2 GB <span>of 20 GB</span></div>
    <div class="Card__track"><div class="Card__fill"></div></div>
    <div class="Card__sub">5.8 GB remaining</div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Card__label {
    font-size: 11px;
    color: #71717a;
}
.Card__val {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Card__val span {
    font-size: 11px;
    color: #71717a;
    font-weight: 400;
}
.Card__track {
    height: 5px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    overflow: hidden;
}
.Card__fill {
    width: 71%;
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #a855f7);
    border-radius: 999px;
}
.Card__sub {
    font-size: 10px;
    color: #71717a;
}`
    },
    {
        id: 137, name: "Card-137", preview: (
            <div className="cd-137">
                <div className="cd-137__status" />
                <div className="cd-137__title">Server Status</div>
                <div className="cd-137__sub">All systems operational</div>
                <div className="cd-137__uptime">99.9% uptime</div>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card__status"></div>
    <div class="Card__title">Server Status</div>
    <div class="Card__sub">All systems operational</div>
    <div class="Card__uptime">99.9% uptime</div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Card__status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
    margin-bottom: 4px;
}
.Card__title {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}
.Card__sub {
    font-size: 11px;
    color: #71717a;
}
.Card__uptime {
    font-size: 11px;
    color: #22c55e;
    margin-top: 4px;
}`
    },
    {
        id: 138, name: "Card-138", preview: (
            <div className="cd-138">
                <div className="cd-138__title">Dark Glass</div>
                <div className="cd-138__sub">Glassmorphism style</div>
                <button className="cd-138__btn">Open</button>
            </div>
        ),
        html: `<div class="Card">
    <div class="Card__title">Dark Glass</div>
    <div class="Card__sub">Glassmorphism style</div>
    <button class="Card__btn">Open</button>
</div>`,
        css: `.Card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    width: 150px;
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Card__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Card__sub {
    font-size: 11px;
    color: #a1a1aa;
}
.Card__btn {
    margin-top: 8px;
    background: rgba(124, 58, 237, 0.2);
    border: 1px solid rgba(124, 58, 237, 0.4);
    color: #a855f7;
    padding: 6px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__top">
        <div class="Card__title">Weekly Report</div>
        <div class="Card__badge">PDF</div>
    </div>
    <div class="Card__sub">Generated on May 12, 2026</div>
    <div class="Card__divider"></div>
    <button class="Card__btn">Download</button>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 14px;
    width: 150px;
}
.Card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
}
.Card__title {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}
.Card__badge {
    background: rgba(124, 58, 237, 0.15);
    color: #a855f7;
    font-size: 9px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 4px;
    letter-spacing: 1px;
}
.Card__sub {
    font-size: 10px;
    color: #71717a;
    margin-bottom: 10px;
}
.Card__divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    margin-bottom: 10px;
}
.Card__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    width: 100%;
}`
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
        ),
        html: `<div class="Card">
    <div class="Card__title">Quick Actions</div>
    <div class="Card__actions">
        <button class="Card__action">Edit</button>
        <button class="Card__action">Share</button>
        <button class="Card__action Card__action--danger">Delete</button>
    </div>
</div>`,
        css: `.Card {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px;
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Card__title {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}
.Card__actions {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.Card__action {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #a1a1aa;
    padding: 6px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.15s;
}
.Card__action:hover {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
}
.Card__action--danger {
    color: #f87171;
    border-color: rgba(248, 113, 113, 0.2);
}
.Card__action--danger:hover {
    background: rgba(248, 113, 113, 0.1);
    border-color: #f87171;
}`
    },
];





























export const loaders = [
    {
        id: 9, name: "Spinner Loader", preview: <div className="prev-spinner" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: #7c3aed;
    border-radius: 50%;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 10, name: "Dots Loader", preview: <div className="prev-dots"><span /><span /><span /></div>,
        html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
        css: `.Loader {
    display: flex;
    gap: 8px;
    align-items: center;
}
.Loader span {
    width: 10px;
    height: 10px;
    background: #7c3aed;
    border-radius: 50%;
    animation: Loader-bounce 0.6s ease-in-out infinite alternate;
}
.Loader span:nth-child(2) {
    animation-delay: 0.15s;
    background: #6366f1;
}
.Loader span:nth-child(3) {
    animation-delay: 0.3s;
    background: #a855f7;
}
@keyframes Loader-bounce {
    to {
        transform: translateY(-8px);
        opacity: 0.5;
    }
}`
    },
    {
        id: 11, name: "Progress Bar", preview: (<div className="prev-progress-wrap"><div className="prev-progress-bar" /></div>),
        html: `<div class="Loader-wrap">
    <div class="Loader-bar"></div>
</div>`,
        css: `.Loader-wrap {
    width: 160px;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
}
.Loader-bar {
    width: 65%;
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #a855f7);
    border-radius: 999px;
    animation: Loader-progress-pulse 2s ease-in-out infinite alternate;
}
@keyframes Loader-progress-pulse {
    from {
        width: 30%;
    }
    to {
        width: 80%;
    }
}`
    },
    {
        id: 141, name: "Loader", preview: <div className="ld-141" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #7c3aed;
    border-radius: 50%;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 142, name: "Loader", preview: <div className="ld-142" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px solid #4f46e5;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 143, name: "Loader", preview: <div className="ld-143" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 20px;
    height: 20px;
    background: #7c3aed;
    border-radius: 50%;
    animation: Loader-pulse 1s ease-in-out infinite;
}
@keyframes Loader-pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.4);
        opacity: 0.5;
    }
}`
    },
    {
        id: 144, name: "Loader", preview: <div className="ld-144" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #7c3aed;
    border-radius: 50%;
    box-shadow: 20px 0 0 #6366f1, 40px 0 0 #a855f7;
    animation: Loader-dots 0.6s ease-in-out infinite alternate;
}
@keyframes Loader-dots {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-8px);
    }
}`
    },
    {
        id: 145, name: "Loader", preview: <div className="ld-145" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
}
.Loader::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, #7c3aed, #a855f7);
    border-radius: 999px;
    animation: Loader-progress 1.4s ease-in-out infinite;
}
@keyframes Loader-progress {
    0% {
        left: -40%;
        width: 40%;
    }
    60% {
        left: 100%;
        width: 40%;
    }
    100% {
        left: 100%;
        width: 40%;
    }
}`
    },
    {
        id: 146, name: "Loader", preview: <div className="ld-146" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 16px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 147, name: "Loader", preview: <div className="ld-147" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 30px;
    height: 30px;
    background: #7c3aed;
    border-radius: 4px;
    animation: Loader-spin 0.8s ease-in-out infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 148, name: "Loader", preview: <div className="ld-148" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid #7c3aed;
    animation: Loader-ripple 1s ease-out infinite;
}
@keyframes Loader-ripple {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    100% {
        transform: scale(1.6);
        opacity: 0;
    }
}`
    },
    {
        id: 149, name: "Loader", preview: <div className="ld-149" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 20px;
    height: 20px;
    background: #a855f7;
    border-radius: 50%;
    animation: Loader-bounce 0.6s ease-in-out infinite alternate;
}
@keyframes Loader-bounce {
    to {
        transform: translateY(-16px);
    }
}`
    },
    {
        id: 150, name: "Loader", preview: <div className="ld-150" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px dashed #6366f1;
    border-radius: 50%;
    animation: Loader-spin 1.2s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 151, name: "Loader", preview: <div className="ld-151" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: conic-gradient(#7c3aed, #a855f7, transparent);
    animation: Loader-spin 0.8s linear infinite;
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px));
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 152, name: "Loader", preview: <div style={{ marginLeft: "20px" }}><div className="ld-152" /></div>,
        html: `<div style="margin-left: 20px;">
    <div class="Loader"></div>
</div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #7c3aed;
    border-radius: 50%;
    box-shadow: 20px 0 0 #6366f1, 40px 0 0 #a855f7;
    animation: Loader-flash 1s ease-in-out infinite;
}
@keyframes Loader-flash {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.2;
    }
}`
    },
    {
        id: 153, name: "Loader", preview: <div style={{ marginLeft: "12px" }}><div className="ld-153" /></div>,
        html: `<div style="margin-left: 12px;">
    <div class="Loader"></div>
</div>`,
        css: `.Loader {
    width: 6px;
    height: 40px;
    background: #7c3aed;
    border-radius: 999px;
    box-shadow: 12px 0 0 #6366f1, 24px 0 0 #a855f7;
    animation: Loader-bars 0.6s ease-in-out infinite alternate;
}
@keyframes Loader-bars {
    0% {
        transform: scaleY(0.4);
    }
    100% {
        transform: scaleY(1);
    }
}`
    },
    {
        id: 154, name: "Loader", preview: <div className="ld-154" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
}
.Loader::before {
    content: "";
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
.Loader::after {
    content: "";
    width: 100%;
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 155, name: "Loader", preview: <div className="ld-155" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 100px;
    border-radius: 8px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 156, name: "Loader", preview: <div className="ld-156" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Loader::before,
.Loader::after {
    content: "";
    height: 10px;
    border-radius: 4px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
.Loader::before {
    width: 100%;
}
.Loader::after {
    width: 70%;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 157, name: "Loader", preview: <div className="ld-157" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    display: flex;
    gap: 10px;
    align-items: center;
}
.Loader::before {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 6px;
    flex-shrink: 0;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
.Loader::after {
    content: "";
    flex: 1;
    height: 12px;
    border-radius: 4px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 158, name: "Loader", preview: <div className="ld-158" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 120px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 159, name: "Loader", preview: <div className="ld-159" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    display: grid;
    grid-template-columns: 36px 1fr;
    grid-template-rows: 10px 10px 10px;
    gap: 8px;
    align-items: center;
}
.Loader::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / 4;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
    align-self: center;
}
.Loader::after {
    content: "";
    grid-column: 2;
    grid-row: 1 / 3;
    height: 10px;
    border-radius: 4px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 160, name: "Loader", preview: <div className="ld-160" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 90px;
    border-radius: 10px;
    background: linear-gradient(90deg, #1f1f23 25%, #2a2a30 50%, #1f1f23 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
    position: relative;
    overflow: hidden;
}
.Loader::after {
    content: "▣";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    color: rgba(255, 255, 255, 0.06);
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 161, name: "Loader", preview: <div className="ld-161" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: conic-gradient(#7c3aed 0%, #a855f7 40%, transparent 60%);
    animation: Loader-spin 0.9s linear infinite;
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px));
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 162, name: "Loader", preview: <div className="ld-162" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #a855f7;
    border-right-color: #6366f1;
    box-shadow: 0 0 12px #7c3aed;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 163, name: "Loader", preview: <div className="ld-163" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    border-radius: 50%;
    animation: Loader-wobble 0.8s ease-in-out infinite alternate;
}
@keyframes Loader-wobble {
    0% {
        transform: scale(1);
        border-radius: 50%;
    }
    100% {
        transform: scale(1.3);
        border-radius: 30%;
    }
}`
    },
    {
        id: 164, name: "Loader", preview: <div className="ld-164" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 2px solid rgba(124, 58, 237, 0.2);
    border-radius: 50%;
    position: relative;
    animation: Loader-spin 1.2s linear infinite;
}
.Loader::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #7c3aed;
    border-radius: 50%;
    box-shadow: 0 0 8px #7c3aed;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 165, name: "Loader", preview: <div className="ld-165" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 30px;
    display: flex;
    gap: 4px;
    align-items: center;
}
.Loader::before,
.Loader::after {
    content: "";
    flex: 1;
    background: #7c3aed;
    border-radius: 2px;
    animation: Loader-wave 0.6s ease-in-out infinite alternate;
}
.Loader::before {
    height: 100%;
    animation-delay: 0s;
}
.Loader::after {
    height: 50%;
    animation-delay: 0.2s;
    background: #a855f7;
}
@keyframes Loader-wave {
    0% {
        transform: scaleY(0.3);
    }
    100% {
        transform: scaleY(1);
    }
}`
    },
    {
        id: 166, name: "Loader", preview: <div className="ld-166" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 16px;
    height: 16px;
    background: #6366f1;
    border-radius: 3px;
    box-shadow: 24px 0 0 #7c3aed, 48px 0 0 #a855f7;
    animation: Loader-bounce 0.5s ease-in-out infinite alternate;
}
@keyframes Loader-bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-14px);
    }
}`
    },
    {
        id: 167, name: "Loader", preview: <div className="ld-167" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #7c3aed;
    animation: Loader-fade 1s ease-out infinite;
}
@keyframes Loader-fade {
    0% {
        transform: scale(0.6);
        opacity: 1;
    }
    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}`
    },
    {
        id: 168, name: "Loader", preview: <div className="ld-168" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #7c3aed;
    border-radius: 50%;
    box-shadow: 18px 0 0 #6366f1, 36px 0 0 #a855f7;
    animation: Loader-blink 1s ease-in-out infinite;
}
@keyframes Loader-blink {
    0%, 100% {
        opacity: 1;
    }
    33% {
        opacity: 0.2;
    }
    66% {
        opacity: 0.6;
    }
}`
    },
    {
        id: 169, name: "Loader", preview: <div className="ld-169" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px dotted #7c3aed;
    animation: Loader-spin 1s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 170, name: "Loader", preview: <div className="ld-170" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 24px;
    height: 24px;
    background: #7c3aed;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
    animation: Loader-glow 1.2s ease-out infinite;
}
@keyframes Loader-glow {
    0% {
        box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
    }
    70% {
        box-shadow: 0 0 0 16px rgba(124, 58, 237, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
    }
}`
    },
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
        ),
        html: `<a href="#" class="Loader">
    <div class="Loader__bg"></div>
    <div class="Loader__text">
        <svg viewBox="0 0 100 100" width="120" height="120">
            <defs>
                <path
                    id="loader600-circle"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                ></path>
            </defs>
            <text font-size="10.5" font-weight="600" fill="currentColor" letter-spacing="2">
                <textPath href="#loader600-circle" startOffset="0%">
                    VIEW MASTERPIECE • VIEW MASTERPIECE •
                </textPath>
            </text>
        </svg>
    </div>
    <div class="Loader__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="28" height="28">
            <path d="M6 18L18 6M18 6H8M18 6V16" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
    </div>
</a>`,
        css: `.Loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    text-decoration: none;
    color: #1a1a1a;
    font-family: inherit;
    border-radius: 50%;
    cursor: pointer;
}
.Loader__bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    border-radius: 50%;
    transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
    z-index: 1;
}
.Loader:hover .Loader__bg {
    transform: translate(-50%, -50%) scale(1);
}
.Loader__text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    animation: Loader-spin 10s linear infinite;
    transition: color 0.4s ease;
}
.Loader__text svg {
    overflow: visible;
}
.Loader:hover .Loader__text {
    color: #f4f4f4;
    animation: Loader-spin 3s linear infinite;
}
.Loader__icon {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1);
    color: #1a1a1a;
}
.Loader:hover .Loader__icon {
    transform: rotate(45deg) scale(1.2);
    color: #f4f4f4;
}
@keyframes Loader-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`
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
        ),
        html: `<div class="Loader">
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
    <div class="Loader__blade"></div>
</div>`,
        css: `.Loader {
    font-size: 28px;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
}
.Loader__blade {
    position: absolute;
    left: 0.4629em;
    bottom: 0;
    width: 0.074em;
    height: 0.2777em;
    border-radius: 0.0555em;
    background-color: transparent;
    transform-origin: center -0.2222em;
    animation: Loader-fade 1s infinite linear;
}
.Loader__blade:nth-child(1) {
    animation-delay: 0s;
    transform: rotate(0deg);
}
.Loader__blade:nth-child(2) {
    animation-delay: 0.083s;
    transform: rotate(30deg);
}
.Loader__blade:nth-child(3) {
    animation-delay: 0.166s;
    transform: rotate(60deg);
}
.Loader__blade:nth-child(4) {
    animation-delay: 0.249s;
    transform: rotate(90deg);
}
.Loader__blade:nth-child(5) {
    animation-delay: 0.332s;
    transform: rotate(120deg);
}
.Loader__blade:nth-child(6) {
    animation-delay: 0.415s;
    transform: rotate(150deg);
}
.Loader__blade:nth-child(7) {
    animation-delay: 0.498s;
    transform: rotate(180deg);
}
.Loader__blade:nth-child(8) {
    animation-delay: 0.581s;
    transform: rotate(210deg);
}
.Loader__blade:nth-child(9) {
    animation-delay: 0.664s;
    transform: rotate(240deg);
}
.Loader__blade:nth-child(10) {
    animation-delay: 0.747s;
    transform: rotate(270deg);
}
.Loader__blade:nth-child(11) {
    animation-delay: 0.83s;
    transform: rotate(300deg);
}
.Loader__blade:nth-child(12) {
    animation-delay: 0.913s;
    transform: rotate(330deg);
}
@keyframes Loader-fade {
    0% {
        background-color: #69717d;
    }
    100% {
        background-color: transparent;
    }
}`
    },
    {
        id: 602, name: "Scanner Loader", preview: (
            <div className="ld-602">
                <div className="ld-602__scanner">
                    <span>Loading...</span>
                </div>
            </div>
        ),
        html: `<div class="Loader">
    <div class="Loader__scanner">
        <span>Loading...</span>
    </div>
</div>`,
        css: `.Loader {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Loader__scanner span {
    color: transparent;
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}
.Loader__scanner span::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid #17FEFF;
    overflow: hidden;
    color: #17FEFF;
    animation: Loader-scan 2s linear infinite;
}
@keyframes Loader-scan {
    0%, 10%, 100% {
        width: 0;
    }
    10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
        border-right-color: transparent;
    }
    11%, 21%, 31%, 41%, 51%, 61%, 71%, 81%, 91% {
        border-right-color: #17FEFF;
    }
    60%, 80% {
        width: 100%;
    }
}`
    },
    {
        id: 603, name: "Loader", preview: <div className="ld-603" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(56, 189, 248, 0.2);
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 604, name: "Loader", preview: <div className="ld-604" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 20px;
    height: 20px;
    background: #38bdf8;
    border-radius: 50%;
    animation: Loader-pulse 1s ease-in-out infinite;
}
@keyframes Loader-pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.4);
        opacity: 0.5;
    }
}`
    },
    {
        id: 605, name: "Loader", preview: <div className="ld-605" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    display: flex;
    gap: 6px;
    align-items: center;
}
.Loader::before,
.Loader::after {
    content: "";
    width: 10px;
    height: 10px;
    background: #38bdf8;
    border-radius: 50%;
    animation: Loader-bounce 0.6s ease-in-out infinite alternate;
}
.Loader::before {
    animation-delay: 0s;
}
.Loader::after {
    animation-delay: 0.3s;
    background: #7dd3fc;
}
@keyframes Loader-bounce {
    to {
        transform: translateY(-8px);
        opacity: 0.5;
    }
}`
    },
    {
        id: 606, name: "Loader", preview: <div className="ld-606" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 5px;
    background: rgba(56, 189, 248, 0.15);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
}
.Loader::after {
    content: "";
    position: absolute;
    left: -40%;
    width: 40%;
    height: 100%;
    background: #38bdf8;
    border-radius: 999px;
    animation: Loader-slide 1.2s ease-in-out infinite;
}
@keyframes Loader-slide {
    0% {
        left: -40%;
    }
    100% {
        left: 100%;
    }
}`
    },
    {
        id: 607, name: "Loader", preview: <div className="ld-607" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px solid #7dd3fc;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 608, name: "Loader", preview: <div className="ld-608" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 3px solid #38bdf8;
    border-radius: 50%;
    animation: Loader-ripple 1s ease-out infinite;
}
@keyframes Loader-ripple {
    0% {
        transform: scale(0.7);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}`
    },
    {
        id: 609, name: "Loader", preview: <div className="ld-609" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 160px;
    height: 14px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(56, 189, 248, 0.1) 25%, rgba(56, 189, 248, 0.25) 50%, rgba(56, 189, 248, 0.1) 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 610, name: "Loader", preview: <div className="ld-610" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 2px solid rgba(56, 189, 248, 0.2);
    border-radius: 50%;
    position: relative;
    animation: Loader-spin 1.2s linear infinite;
}
.Loader::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #38bdf8;
    border-radius: 50%;
    box-shadow: 0 0 8px #38bdf8;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 611, name: "Loader", preview: <div className="ld-611" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    display: flex;
    gap: 4px;
    align-items: center;
    height: 36px;
}
.Loader::before,
.Loader::after {
    content: "";
    width: 6px;
    height: 100%;
    background: #38bdf8;
    border-radius: 3px;
    animation: Loader-bars 0.6s ease-in-out infinite alternate;
}
.Loader::before {
    animation-delay: 0s;
}
.Loader::after {
    animation-delay: 0.2s;
    background: #7dd3fc;
}
@keyframes Loader-bars {
    0% {
        transform: scaleY(0.3);
    }
    100% {
        transform: scaleY(1);
    }
}`
    },
    {
        id: 612, name: "Loader", preview: <div className="ld-612" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px dotted #38bdf8;
    border-radius: 50%;
    animation: Loader-spin 1.2s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 613, name: "Loader", preview: <div className="ld-613" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 24px;
    height: 24px;
    background: #38bdf8;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    animation: Loader-glow 1.2s ease-out infinite;
}
@keyframes Loader-glow {
    0% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    }
    70% {
        box-shadow: 0 0 0 16px rgba(56, 189, 248, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    }
}`
    },
    {
        id: 614, name: "Loader", preview: <div className="ld-614" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: conic-gradient(#38bdf8, #7dd3fc, transparent);
    animation: Loader-spin 0.8s linear infinite;
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px));
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 615, name: "Loader", preview: <div className="ld-615" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #38bdf8;
    border-radius: 50%;
    box-shadow: 18px 0 0 #7dd3fc, 36px 0 0 #bae6fd;
    animation: Loader-flash 1s ease-in-out infinite;
}
@keyframes Loader-flash {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.2;
    }
}`
    },
    {
        id: 616, name: "Loader", preview: <div className="ld-616" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 20px;
    height: 20px;
    background: #38bdf8;
    border-radius: 50%;
    animation: Loader-bounce 0.6s ease-in-out infinite alternate;
}
@keyframes Loader-bounce {
    to {
        transform: translateY(-16px);
    }
}`
    },
    {
        id: 617, name: "Loader", preview: <div className="ld-617" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 28px;
    height: 28px;
    background: #38bdf8;
    border-radius: 4px;
    animation: Loader-spin 0.8s ease-in-out infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 618, name: "Loader", preview: <div className="ld-618" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    display: flex;
    gap: 4px;
    align-items: center;
    height: 36px;
    width: 40px;
}
.Loader::before {
    content: "";
    width: 6px;
    height: 100%;
    background: #38bdf8;
    border-radius: 3px;
    animation: Loader-wave 0.5s ease-in-out infinite alternate;
    box-shadow: 10px 0 0 #7dd3fc, 20px 0 0 #bae6fd;
}
@keyframes Loader-wave {
    0% {
        transform: scaleY(0.4);
    }
    100% {
        transform: scaleY(1);
    }
}`
    },
    {
        id: 619, name: "Loader", preview: <div className="ld-619" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 4px dashed #38bdf8;
    border-radius: 50%;
    animation: Loader-spin 1.4s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 620, name: "Loader", preview: <div className="ld-620" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(56, 189, 248, 0.3);
    position: relative;
}
.Loader::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #38bdf8;
    animation: Loader-ping 1s ease-out infinite;
}
@keyframes Loader-ping {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}`
    },
    {
        id: 621, name: "Loader", preview: <div className="ld-621" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 140px;
    height: 16px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(56, 189, 248, 0.08) 25%, rgba(56, 189, 248, 0.2) 50%, rgba(56, 189, 248, 0.08) 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
    position: relative;
}
.Loader::after {
    content: "";
    position: absolute;
    top: 24px;
    left: 0;
    width: 100px;
    height: 10px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(56, 189, 248, 0.08) 25%, rgba(56, 189, 248, 0.2) 50%, rgba(56, 189, 248, 0.08) 75%);
    background-size: 200% 100%;
    animation: Loader-shimmer 1.5s infinite;
}
@keyframes Loader-shimmer {
    to {
        background-position: -200% 0;
    }
}`
    },
    {
        id: 622, name: "Loader", preview: <div className="ld-622" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #38bdf8;
    border-right-color: #7dd3fc;
    animation: Loader-spin 0.9s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 623, name: "Loader", preview: <div className="ld-623" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #38bdf8;
    border-radius: 50%;
    box-shadow: 18px 0 0 #7dd3fc, 36px 0 0 #bae6fd;
    animation: Loader-fade 1.2s ease-in-out infinite;
}
@keyframes Loader-fade {
    0%, 100% {
        opacity: 1;
    }
    33% {
        opacity: 0.2;
    }
    66% {
        opacity: 0.6;
    }
}`
    },
    {
        id: 624, name: "Loader", preview: <div className="ld-624" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 24px;
    height: 24px;
    background: #38bdf8;
    border-radius: 50%;
    animation: Loader-beat 0.8s ease-in-out infinite;
}
@keyframes Loader-beat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
}`
    },
    {
        id: 625, name: "Loader", preview: <div className="ld-625" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 48px;
    height: 24px;
    border: 3px solid #38bdf8;
    border-radius: 999px;
    position: relative;
    animation: Loader-spin 1.5s linear infinite;
}
.Loader::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #38bdf8;
    border-radius: 50%;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 626, name: "Loader", preview: <div className="ld-626" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 28px;
    height: 28px;
    border: 3px solid rgba(56, 189, 248, 0.2);
    border-top-color: #38bdf8;
    border-left-color: #38bdf8;
    border-radius: 4px;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 627, name: "Loader", preview: <div className="ld-627" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 10px;
    height: 10px;
    background: #38bdf8;
    border-radius: 50%;
    position: relative;
    animation: Loader-move 1.4s linear infinite;
    box-shadow: 20px 0 0 rgba(56, 189, 248, 0.6), 40px 0 0 rgba(56, 189, 248, 0.3);
}
@keyframes Loader-move {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-10px);
    }
}`
    },
    {
        id: 628, name: "Loader", preview: <div className="ld-628" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 36px;
    width: 36px;
}
.Loader::before,
.Loader::after {
    content: "";
    flex: 1;
    background: #38bdf8;
    border-radius: 3px 3px 0 0;
    animation: Loader-stagger 0.6s ease-in-out infinite alternate;
}
.Loader::before {
    height: 60%;
    animation-delay: 0s;
}
.Loader::after {
    height: 100%;
    animation-delay: 0.2s;
    background: #7dd3fc;
}
@keyframes Loader-stagger {
    0% {
        opacity: 0.4;
        transform: scaleY(0.6);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}`
    },
    {
        id: 629, name: "Loader", preview: <div className="ld-629" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-top-color: #38bdf8;
    border-radius: 50%;
    box-shadow: 0 0 12px #38bdf8;
    animation: Loader-spin 0.8s linear infinite;
}
@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}`
    },
    {
        id: 630, name: "Loader", preview: <div className="ld-630" />,
        html: `<div class="Loader"></div>`,
        css: `.Loader {
    display: flex;
    gap: 5px;
    align-items: center;
}
.Loader::before,
.Loader::after {
    content: "";
    width: 8px;
    height: 8px;
    background: #38bdf8;
    border-radius: 50%;
    animation: Loader-typing 1s ease-in-out infinite;
}
.Loader::before {
    animation-delay: 0s;
}
.Loader::after {
    animation-delay: 0.3s;
    background: #7dd3fc;
}
@keyframes Loader-typing {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
}`
    },
];





















export const inputs = [
    {
        id: 12, name: "Text Input", preview: <input className="prev-input" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 14px;
    width: 180px;
    outline: none;
    transition: border-color 0.2s;
}
.Input::placeholder {
    color: #52525b;
}
.Input:focus {
    border-color: #7c3aed;
}`
    },
    {
        id: 171, name: "input", preview: <input className="ip-171" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid #d1d5db;
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #3b82f6;
}`
    },
    {
        id: 172, name: "input", preview: <input className="ip-172" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: none;
    border-bottom: 2px solid #cbd5e1;
    outline: none;
    font-size: 15px;
    background: transparent;
    transition: 0.2s ease;
}
.Input:focus {
    border-bottom-color: #2563eb;
}`
    },
    {
        id: 173, name: "input", preview: <input className="ip-173" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #f8fafc;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    background: white;
    border-color: #6366f1;
}`
    },
    {
        id: 174, name: "input", preview: <input className="ip-174" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: #f1f5f9;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #0f172a;
    background: white;
}`
    },
    {
        id: 175, name: "input", preview: <input className="ip-175" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
}`
    },
    {
        id: 176, name: "input", preview: <input className="ip-176" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 14px 18px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: white;
    outline: none;
    font-size: 15px;
}
.Input::placeholder {
    color: grey;
}`
    },
    {
        id: 177, name: "input", preview: <input className="ip-177" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 5px solid #d4d4d8;
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    transition: 0.2s ease;
}
.Input:hover {
    border-color: grey;
}
.Input:focus {
    border-color: purple;
}`
    },
    {
        id: 178, name: "input", preview: <input className="ip-178" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 250px;
    padding: 12px 16px;
    border: 2px solid rgb(141, 28, 141);
    border-radius: 14px;
    outline: none;
    font-size: 15px;
    transition: all 0.25s ease;
}`
    },
    {
        id: 179, name: "input", preview: (
            <div className="ip-179-container">
                <input className="ip-179" type="text" placeholder="Search the internet..." />
            </div>),
        html: `<div class="Input-container">
    <input class="Input" type="text" placeholder="Search the internet..." />
</div>`,
        css: `.Input-container {
    position: relative;
    width: 100%;
    max-width: 270px;
}
.Input {
    width: 100%;
    height: 60px;
    padding: 12px;
    font-size: 18px;
    font-family: "Courier New", monospace;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    outline: none;
    border-radius: 0;
    transition: all 0.3s ease;
    box-shadow: 8px 8px 0 #000;
}
.Input::placeholder {
    color: #888;
}
.Input:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000;
}
.Input:focus {
    background-color: #000;
    color: #fff;
    border-color: #fff;
    animation: Input-shake 0.5s ease-in-out;
}
.Input:focus::placeholder {
    color: #fff;
}
.Input:not(:placeholder-shown) {
    animation: Input-glitch 1s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
}
.Input-container::after {
    content: "|";
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    animation: Input-blink 0.7s step-end infinite;
}
@keyframes Input-blink {
    50% {
        opacity: 0;
    }
}
@keyframes Input-shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px) rotate(-5deg);
    }
    50% {
        transform: translateX(5px) rotate(5deg);
    }
    75% {
        transform: translateX(-5px) rotate(-5deg);
    }
    100% {
        transform: translateX(0);
    }
}
@keyframes Input-glitch {
    0% {
        transform: none;
        opacity: 1;
    }
    7% {
        transform: skew(-0.5deg, -0.9deg);
        opacity: 0.75;
    }
    10% {
        transform: none;
        opacity: 1;
    }
    27% {
        transform: none;
        opacity: 1;
    }
    30% {
        transform: skew(0.8deg, -0.1deg);
        opacity: 0.75;
    }
    35% {
        transform: none;
        opacity: 1;
    }
    52% {
        transform: none;
        opacity: 1;
    }
    55% {
        transform: skew(-1deg, 0.2deg);
        opacity: 0.75;
    }
    72% {
        transform: none;
        opacity: 1;
    }
    75% {
        transform: skew(0.4deg, 1deg);
        opacity: 0.75;
    }
    80% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}`
    },
    {
        id: 180, name: "input", preview: <input className="ip-180" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px 28px;
    border-radius: 8px;
    font-size: 15px;
    width: 280px;
    outline: none;
    transition: border-color 0.2s;
}
.Input::placeholder {
    color: grey;
}
.Input:focus {
    border-color: #5e0aee;
}`
    },
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
        html: `<div class="Rating">
    <input type="radio" id="rating-star5" name="rating" />
    <label for="rating-star5"></label>
    <input type="radio" id="rating-star4" name="rating" />
    <label for="rating-star4"></label>
    <input type="radio" id="rating-star3" name="rating" />
    <label for="rating-star3"></label>
    <input type="radio" id="rating-star2" name="rating" />
    <label for="rating-star2"></label>
    <input type="radio" id="rating-star1" name="rating" />
    <label for="rating-star1"></label>
</div>`,
        css: `.Rating {
    display: inline-block;
}
.Rating input {
    display: none;
}
.Rating label {
    float: right;
    cursor: pointer;
    transition: color 0.3s ease;
}
.Rating label::before {
    content: "\\2605";
    font-size: 32px;
    color: #d4d4d8;
}
.Rating input:checked~label::before,
.Rating label:hover::before,
.Rating label:hover~label::before {
    color: #ffd700;
}`
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
        html: `<div class="Input-container">
    <input placeholder="Search" class="Input" type="text" />
    <label class="Input-label"></label>
</div>`,
        css: `.Input-container {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    cursor: text;
    padding-left: 15px;
}
.Input {
    width: 170px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 0.9em;
    caret-color: red;
}
.Input-label {
    cursor: text;
    padding: 0 12px;
}`
    },
    {
        id: 183, name: "input", preview: (
            <div className="ip-183-container">
                <input
                    className="ip-183"
                    type="text"
                    placeholder="Search the internet..." />
            </div>
        ),
        html: `<div class="Input-container">
    <input class="Input" type="text" placeholder="Search the internet..." />
</div>`,
        css: `.Input-container {
    position: relative;
    width: 100%;
    max-width: 270px;
}
.Input {
    width: 100%;
    height: 60px;
    padding: 12px;
    font-size: 18px;
    font-family: "Courier New", monospace;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    border-radius: 0;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 8px 8px 0 #000;
}
.Input::placeholder {
    color: #888;
}
.Input:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000;
}
.Input:focus {
    background-color: #010101;
    color: #fff;
    border-color: #d6d9dd;
    animation: Input-shake 0.5s ease-in-out;
}
.Input:focus::placeholder {
    color: #fff;
}
.Input:not(:placeholder-shown) {
    animation: Input-glitch 1s linear infinite;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 0 0 #000;
}
.Input-container::after {
    content: "|";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    animation: Input-blink 0.7s step-end infinite;
    pointer-events: none;
}
.Input:focus~.Input-container::after {
    color: #fff;
}
@keyframes Input-shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px) rotate(-5deg);
    }
    50% {
        transform: translateX(5px) rotate(5deg);
    }
    75% {
        transform: translateX(-5px) rotate(-5deg);
    }
    100% {
        transform: translateX(0);
    }
}
@keyframes Input-glitch {
    0% {
        transform: none;
        opacity: 1;
    }
    7% {
        transform: skew(-0.5deg, -0.9deg);
        opacity: 0.75;
    }
    10% {
        transform: none;
        opacity: 1;
    }
    27% {
        transform: none;
        opacity: 1;
    }
    30% {
        transform: skew(0.8deg, -0.1deg);
        opacity: 0.75;
    }
    35% {
        transform: none;
        opacity: 1;
    }
    52% {
        transform: none;
        opacity: 1;
    }
    55% {
        transform: skew(-1deg, 0.2deg);
        opacity: 0.75;
    }
    72% {
        transform: none;
        opacity: 1;
    }
    75% {
        transform: skew(0.4deg, 1deg);
        opacity: 0.75;
    }
    80% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}
@keyframes Input-blink {
    50% {
        opacity: 0;
    }
}`
    },
    {
        id: 184, name: "input", preview: <input className="ip-184" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 240px;
    padding: 12px 16px;
    background: #111827;
    color: white;
    border: none;
    border-radius: 8px;
    outline: none;
}
.Input::placeholder {
    color: #9ca3af;
}`
    },
    {
        id: 185, name: "input", preview: <input className="ip-185" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 240px;
    padding: 12px 16px;
    border: 2px solid #e4e4e7;
    border-radius: 999px;
    outline: none;
}
.Input:focus {
    border-color: #0f172a;
}`
    },
    {
        id: 186, name: "input", preview: <input className="ip-186" type="text" placeholder="Type something..." />,
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    width: 240px;
    padding: 12px 0;
    border: none;
    border-bottom: 2px solid #d4d4d8;
    outline: none;
    background: transparent;
}
.Input:focus {
    border-bottom-color: #3b82f6;
}`
    },
    {
        id: 187, name: "input", preview: (
            <input
                className="ip-187"
                type="text"
                placeholder="Type something..." />
        ),
        html: `<input class="Input" type="text" placeholder="Type something..." />`,
        css: `.Input {
    max-width: 190px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    padding: 5px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
    color: #fff;
}
.Input:focus {
    border: 2px solid tomato;
    caret-color: tomato;
    color: tomato;
    box-shadow: 4px 4px 10px #070707;
}
.Input:focus::placeholder {
    color: tomato;
}`
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
        ),
        html: `<div class="Input-container">
    <input class="Input" type="text" required />
    <label>You'r name</label>
    <i></i>
</div>`,
        css: `.Input-container {
    position: relative;
    width: 200px;
}
.Input-container .Input {
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #222;
    padding: 8px;
}
.Input-container label {
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(105, 105, 105, 0.7);
    text-transform: uppercase;
    pointer-events: none;
    transition: 0.5s;
    font-weight: bold;
}
.Input-container .Input:valid ~ label,
.Input-container .Input:focus ~ label {
    color: rgb(10, 131, 212);
    transform: translateY(-15px);
    font-size: 0.6rem;
}
.Input-container i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #222;
    overflow: hidden;
}
.Input-container i::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #ff1b69,
        #ff0,
        #2196f3,
        #9c27b0,
        #ff1b69
    );
    animation: Input-animate 3s linear infinite;
}
@keyframes Input-animate {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0%);
    }
}`
    },
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
        ),
        html: `<div class="Radio">
    <label>
        <input type="radio" name="role" value="designer" checked />
        <p class="Radio-text">Designer</p>
    </label>
    <label>
        <input type="radio" name="role" value="student" />
        <p class="Radio-text">Student</p>
    </label>
    <label>
        <input type="radio" name="role" value="teacher" />
        <p class="Radio-text">Teacher</p>
    </label>
</div>`,
        css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Radio * {
    box-sizing: border-box;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
    user-select: none;
}
.Radio label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
}
.Radio label:hover::before {
    background-color: #2a2e3c;
}
.Radio label:has(input:checked)::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
}
.Radio-text {
    color: #fff;
    margin: 0;
    font-weight: 500;
}
.Radio input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #435dd8;
    cursor: pointer;
}
.Radio input[type="radio"]:checked {
    background-color: #435dd8;
    animation: Radio-pulse 0.7s forwards;
}
.Radio input[type="radio"]::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    transform: scale(0);
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.Radio input[type="radio"]:checked::before {
    transform: scale(1);
}
@keyframes Radio-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
        box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}`
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
        ),
        html: `<div class="Radio">
    <div>
        <label>
            <input type="radio" name="gender" value="women" checked />
            <span>Women</span>
        </label>
        <label>
            <input type="radio" name="gender" value="men" />
            <span>Men</span>
        </label>
        <label>
            <input type="radio" name="gender" value="divided" />
            <span>Divided</span>
        </label>
    </div>
</div>`,
        css: `.Radio {
    display: inline-block;
}
.Radio div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.Radio input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
.Radio label {
    display: inline-block;
}
.Radio label span {
    display: block;
    cursor: pointer;
    background-color: #fff;
    padding: 0.375em 0.9em;
    margin-left: 0.0625em;
    box-shadow: 0 0 0 0.0625em #b5bfd9;
    color: #3e4963;
    text-align: center;
    transition: all 0.4s ease;
    font-size: 0.95rem;
    user-select: none;
}
.Radio label:first-child span {
    border-radius: 0.375em 0 0 0.375em;
}
.Radio label:last-child span {
    border-radius: 0 0.375em 0.375em 0;
}
.Radio input[type="radio"]:checked+span {
    box-shadow: 0 0 0 0.0625em #0043ed;
    background-color: #dee7ff;
    color: #0043ed;
    z-index: 1;
}
.Radio input[type="radio"]:focus+span {
    outline: 0;
    border-color: #2260ff;
    box-shadow: 0 0 0 4px #b5c9fc;
}`
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
        ),
        html: `<div class="Radio">
    <label class="Radio-label">
        <input type="radio" name="action" value="play" checked />
        <span class="Radio-text">Play</span>
    </label>
    <label class="Radio-label">
        <input type="radio" name="action" value="stop" />
        <span class="Radio-text">Stop</span>
    </label>
    <label class="Radio-label">
        <input type="radio" name="action" value="reset" />
        <span class="Radio-text">Reset</span>
    </label>
</div>`,
        css: `.Radio {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: black;
    padding: 4px;
    border-radius: 10px;
}
.Radio input {
    display: none;
}
.Radio-label {
    width: 90px;
    height: 60px;
    background: linear-gradient(to bottom, #333333, rgb(36, 35, 35));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    transition: all 0.1s linear;
    border-top: 1px solid #4e4d4d;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0.2);
    user-select: none;
}
.Radio-label:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
.Radio-label:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.Radio-label:has(input[type="radio"]:checked) {
    box-shadow: 0px 17px 5px 1px rgba(0, 0, 0, 0);
    background: linear-gradient(to bottom, #1d1d1d, #1d1d1d);
    border-top: none;
}
.Radio-label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 103%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(to bottom,
            transparent 10%,
            transparent,
            transparent 90%);
    transition: all 0.1s linear;
    z-index: -1;
}
.Radio-label:has(input[type="radio"]:checked)::before {
    background: linear-gradient(to bottom,
            transparent 10%,
            #cae2fd63,
            transparent 90%);
}
.Radio-text {
    color: black;
    font-size: 15px;
    line-height: 12px;
    font-weight: 800;
    text-transform: uppercase;
    transition: all 0.1s linear;
    text-shadow:
        -1px -1px 1px rgba(224, 224, 224, 0.1),
        0px 2px 3px rgba(0, 0, 0, 0.3);
}
.Radio input[type="radio"]:checked+.Radio-text {
    color: rgb(202, 226, 253);
    text-shadow: 0px 0px 12px #cae2fd;
}`
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
        ),
        html: `<div class="Radio">
    <label class="Radio-option">
        <input type="radio" name="framework" checked />
        <span class="Radio-name">HTML</span>
    </label>
    <label class="Radio-option">
        <input type="radio" name="framework" />
        <span class="Radio-name">React</span>
    </label>
    <label class="Radio-option">
        <input type="radio" name="framework" />
        <span class="Radio-name">Vue</span>
    </label>
</div>`,
        css: `.Radio {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #eee;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 300px;
    font-size: 14px;
}
.Radio-option {
    flex: 1 1 auto;
    text-align: center;
}
.Radio-option input {
    display: none;
}
.Radio-name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    color: rgb(51, 65, 85);
    transition: all 0.15s ease-in-out;
}
.Radio-option input:checked+.Radio-name {
    background-color: #fff;
    font-weight: 600;
}`
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
        ),
        html: `<div class="Sidebar">
    <button class="Sidebar-item">Public profile</button>
    <button class="Sidebar-item">Account</button>
    <button class="Sidebar-item">Appearance</button>
    <button class="Sidebar-item">Accessibility</button>
    <button class="Sidebar-item">Notifications</button>
</div>`,
        css: `.Sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
    background-color: #0d1117;
    border-radius: 5px;
}
.Sidebar-item {
    position: relative;
    display: flex;
    gap: 5px;
    padding: 10px;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: transparent;
}
.Sidebar-item:hover:not(:active),
.Sidebar-item:focus {
    background-color: #21262c;
}
.Sidebar-item:focus,
.Sidebar-item:active {
    outline: none;
    background-color: #1a1f24;
}
.Sidebar-item::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    opacity: 0;
    border-radius: 5px;
    background-color: #2f81f7;
}
.Sidebar-item:focus::before,
.Sidebar-item:active::before {
    opacity: 1;
}`
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
        ),
        html: `<div class="Radio">
    <label class="Radio-label">
        <input type="radio" name="role" value="designer" checked />
        <p class="Radio-text">Designer</p>
    </label>
    <label class="Radio-label">
        <input type="radio" name="role" value="student" />
        <p class="Radio-text">Student</p>
    </label>
    <label class="Radio-label">
        <input type="radio" name="role" value="teacher" />
        <p class="Radio-text">Teacher</p>
    </label>
</div>`,
        css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Radio * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.Radio-label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
}
.Radio-label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
}
.Radio-label:hover::before {
    transition: all 0.2s ease;
    background-color: #2a2e3c;
}
.Radio-label:has(input:checked)::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
}
.Radio-text {
    color: #fff;
}
.Radio-label input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Radio-label input[type="radio"]:checked {
    background-color: #435dd8;
    animation: Radio-pulse 0.7s forwards;
}
.Radio-label input[type="radio"]::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
}
.Radio-label input[type="radio"]:checked::before {
    transform: scale(1);
}
@keyframes Radio-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
        box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}`
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
        ),
        html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-btn" type="radio" />
        <div class="Radio-btn">
            <span aria-hidden="true">_</span>
            Cyber
            <span class="Radio-btn__glitch" aria-hidden="true">_Cyber</span>
            <label class="Radio-number">r1</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-btn" type="radio" checked />
        <div class="Radio-btn">
            _Radio<span aria-hidden="true">_</span>
            <span class="Radio-btn__glitch" aria-hidden="true">_R_a_d_i_o_</span>
            <label class="Radio-number">r2</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-btn" type="radio" />
        <div class="Radio-btn">
            Buttons
            <span class="Radio-btn__glitch" aria-hidden="true">Buttons_</span>
            <label class="Radio-number">r3</label>
        </div>
    </div>
</div>`,
        css: `.Radio-container {
    display: flex;
    flex-direction: row;
}
.Radio-wrapper {
    position: relative;
    height: 38px;
    width: 84px;
    margin: 3px;
}
.Radio-input {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
}
.Radio-btn {
    --primary: #ff184c;
    --shadow-primary: #fded00;
    --color: #fff;
    --font-size: 9px;
    --shadow-secondary-hue: 60;
    --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
    --clip: polygon(11% 0,
            95% 0,
            100% 25%,
            90% 90%,
            95% 90%,
            85% 90%,
            85% 100%,
            7% 100%,
            0 80%);
    --border: 5px;
    --shimmy-distance: 5;
    --clip-one: polygon(0 2%,
            100% 2%,
            100% 95%,
            95% 95%,
            95% 90%,
            85% 90%,
            85% 95%,
            8% 95%,
            0 70%);
    --clip-two: polygon(0 78%,
            100% 78%,
            100% 100%,
            95% 100%,
            95% 90%,
            85% 90%,
            85% 100%,
            8% 100%,
            0 78%);
    --clip-three: polygon(0 44%,
            100% 44%,
            100% 54%,
            95% 54%,
            95% 54%,
            85% 54%,
            85% 54%,
            8% 54%,
            0 54%);
    --clip-four: polygon(0 0,
            100% 0,
            100% 0,
            95% 0,
            95% 0,
            85% 0,
            85% 0,
            8% 0,
            0 0);
    --clip-five: polygon(0 0,
            100% 0,
            100% 0,
            95% 0,
            95% 0,
            85% 0,
            85% 0,
            8% 0,
            0 0);
    --clip-six: polygon(0 40%,
            100% 40%,
            100% 85%,
            95% 85%,
            95% 85%,
            85% 85%,
            85% 85%,
            8% 85%,
            0 70%);
    --clip-seven: polygon(0 63%,
            100% 63%,
            100% 80%,
            95% 80%,
            95% 80%,
            85% 80%,
            85% 80%,
            8% 80%,
            0 70%);

    color: var(--color);
    text-transform: uppercase;
    font-size: var(--font-size);
    letter-spacing: 3px;
    position: relative;
    font-weight: 900;
    width: 100%;
    height: 100%;
    line-height: 38px;
    text-align: center;
    transition: background 0.2s, 0.3s;
}
.Radio-input:checked+.Radio-btn {
    --primary: #8b00ff;
    --shadow-primary: #00e572;
}
.Radio-input:hover+.Radio-btn {
    --primary: #cc133c;
    --font-size: 11px; 
}
.Radio-btn::before,
.Radio-btn::after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: var(--clip);
    z-index: -1;
}
.Radio-btn::before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
}
.Radio-btn::after {
    background: var(--primary);
}
.Radio-btn__glitch {
    position: absolute;
    top: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: calc(var(--border) * -1);
    bottom: calc(var(--border) * -1);
    background: var(--shadow-primary);
    text-shadow:
        2px 2px var(--shadow-primary),
        -2px -2px var(--shadow-secondary);
    clip-path: var(--clip);
    animation: Radio-glitch 2s infinite;
    display: none;
}
.Radio-input:hover+.Radio-btn .Radio-btn__glitch {
    display: block;
}
.Radio-input:checked+.Radio-btn .Radio-btn__glitch {
    display: block;
    animation: Radio-glitch 5s infinite;
}
.Radio-btn__glitch::before {
    content: "";
    position: absolute;
    inset: var(--border);
    clip-path: var(--clip);
    background: var(--primary);
    z-index: -1;
}
.Radio-number {
    background: var(--shadow-primary);
    color: #323232;
    font-size: 5.5px;
    font-weight: 700;
    letter-spacing: 1px;
    position: absolute;
    width: 15px;
    height: 6px;
    top: 0;
    left: 81%;
    line-height: 6.2px;
}
@keyframes Radio-glitch {
    0% {
        clip-path: var(--clip-one);
    }
    2%,
    8% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    6% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    9% {
        clip-path: var(--clip-two);
        transform: translate(0, 0);
    }
    10% {
        clip-path: var(--clip-three);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    13% {
        clip-path: var(--clip-three);
        transform: translate(0, 0);
    }
    14%,
    21% {
        clip-path: var(--clip-four);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    25% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    30% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    35%,
    45% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * -1%));
    }
    40% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * 1%));
    }
    50% {
        clip-path: var(--clip-six);
        transform: translate(0, 0);
    }
    55% {
        clip-path: var(--clip-seven);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    60% {
        clip-path: var(--clip-seven);
        transform: translate(0, 0);
    }
    31%,
    61%,
    100% {
        clip-path: var(--clip-four);
    }
}`
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
        ),
        html: `<div class="Radio">
    <input type="radio" name="plan" id="radio-silver" checked />
    <label for="radio-silver">Silver</label>
    <input type="radio" name="plan" id="radio-gold" />
    <label for="radio-gold">Gold</label>
    <input type="radio" name="plan" id="radio-platinum" />
    <label for="radio-platinum">Platinum</label>
    <div class="Radio-glider"></div>
</div>`,
        css: `.Radio {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
        inset 1px 1px 4px rgba(255, 255, 255, 0.2),
        inset -1px -1px 6px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
}
.Radio input {
    display: none;
}
.Radio label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
}
.Radio label:hover {
    color: #fff;
}
.Radio input:checked+label {
    color: #fff;
}
.Radio-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100% / 3);
    border-radius: 1rem;
    z-index: 1;
    transition:
        transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
        background 0.4s ease-in-out,
        box-shadow 0.4s ease-in-out;
}
#radio-silver:checked~.Radio-glider {
    transform: translateX(0%);
    background: linear-gradient(135deg, #c0c0c055, #e0e0e0);
    box-shadow:
        0 0 18px rgba(192, 192, 192, 0.5),
        0 0 10px rgba(255, 255, 255, 0.4) inset;
}
#radio-gold:checked~.Radio-glider {
    transform: translateX(100%);
    background: linear-gradient(135deg, #ffd70055, #ffcc00);
    box-shadow:
        0 0 18px rgba(255, 215, 0, 0.5),
        0 0 10px rgba(255, 235, 150, 0.4) inset;
}
#radio-platinum:checked~.Radio-glider {
    transform: translateX(200%);
    background: linear-gradient(135deg, #d0e7ff55, #a0d8ff);
    box-shadow:
        0 0 18px rgba(160, 216, 255, 0.5),
        0 0 10px rgba(200, 240, 255, 0.4) inset;
}`
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
        ),
        html: `<div class="Radio">
    <div class="Radio-center"></div>
    <label class="Radio-label Radio-spring">
        <input type="radio" name="seasons" value="spring" checked />
        <span class="Radio-text Radio-spring">Spring</span>
    </label>
    <label class="Radio-label Radio-summer">
        <input type="radio" name="seasons" value="summer" />
        <span class="Radio-text Radio-summer">Summer</span>
    </label>
    <label class="Radio-label Radio-autumn">
        <input type="radio" name="seasons" value="autumn" />
        <span class="Radio-text Radio-autumn">Autumn</span>
    </label>
    <label class="Radio-label Radio-winter">
        <input type="radio" name="seasons" value="winter" />
        <span class="Radio-text Radio-winter">Winter</span>
    </label>
</div>`,
        css: `.Radio {
    width: 210px;
    height: 210px;
    background-color: #000;
    border-radius: 30px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 6px;
    gap: 4px;
    position: relative;
    z-index: 1;
}
.Radio input {
    display: none;
}
.Radio-label {
    background: linear-gradient(to bottom, #333333, rgb(36, 35, 35));
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-top: 1px solid #4e4d4d;
    cursor: pointer;
    transition:
        all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
}
.Radio-label:has(input[type="radio"]:checked) {
    box-shadow: 0 17px 5px 1px rgba(0, 0, 0, 0);
    background: linear-gradient(to bottom, #1d1d1d, #1d1d1d);
    border-top: none;
}
.Radio-label::before {
    content: "";
    width: 100%;
    height: 100%;
    scale: 1.02;
    border-radius: 25px;
    background:
        linear-gradient(to bottom,
            transparent 10%,
            transparent,
            transparent 90%),
        linear-gradient(to left,
            transparent 10%,
            transparent,
            transparent 90%);
    transition:
        all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
}
.Radio-label.Radio-spring:has(input[type="radio"]:checked)::before {
    background:
        linear-gradient(to bottom,
            transparent 10%,
            #d88fa3,
            transparent 90%),
        linear-gradient(to left,
            transparent 10%,
            #d88fa3,
            transparent 90%);
}
.Radio-label.Radio-summer:has(input[type="radio"]:checked)::before {
    background:
        linear-gradient(to bottom,
            transparent 10%,
            #e6b800,
            transparent 90%),
        linear-gradient(to left,
            transparent 10%,
            #e6b800,
            transparent 90%);
}
.Radio-label.Radio-autumn:has(input[type="radio"]:checked)::before {
    background:
        linear-gradient(to bottom,
            transparent 10%,
            #c76b00,
            transparent 90%),
        linear-gradient(to left,
            transparent 10%,
            #c76b00,
            transparent 90%);
}
.Radio-label.Radio-winter:has(input[type="radio"]:checked)::before {
    background:
        linear-gradient(to bottom,
            transparent 10%,
            #7fa8c4,
            transparent 90%),
        linear-gradient(to left,
            transparent 10%,
            #7fa8c4,
            transparent 90%);
}
.Radio-text {
    color: #000;
    font-size: 13px;
    line-height: 12px;
    padding: 0;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.1s linear;
    text-shadow:
        -1px -1px 1px rgba(224, 224, 224, 0.1),
        0 2px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.Radio-label input[type="radio"]:checked+.Radio-spring {
    color: #ffc0cb;
    text-shadow: 0 0 12px #d88fa3;
}
.Radio-label input[type="radio"]:checked+.Radio-summer {
    color: #ffd700;
    text-shadow: 0 0 12px #e6b800;
}
.Radio-label input[type="radio"]:checked+.Radio-autumn {
    color: #ff8c00;
    text-shadow: 0 0 12px #c76b00;
}
.Radio-label input[type="radio"]:checked+.Radio-winter {
    color: #add8e6;
    text-shadow: 0 0 12px #7fa8c4;
}
.Radio-center {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #333333;
    border-radius: 2px;
    border: 1px solid #4e4d4d;
    transition: all 0.1s ease;
}
.Radio:has(.Radio-spring input:checked) .Radio-center {
    border-left: 1px solid #ffc0cbb2;
    box-shadow: inset 11px 0 10px -12px #ffc0cbdc;
}
.Radio:has(.Radio-summer input:checked) .Radio-center {
    border-top: 1px solid #ffd900d8;
    box-shadow: inset 0 11px 10px -12px #ffd700;
}
.Radio:has(.Radio-autumn input:checked) .Radio-center {
    border-bottom: 1px solid #ff8c00b2;
    box-shadow: inset 0 -11px 10px -12px #ff8c00;
}
.Radio:has(.Radio-winter input:checked) .Radio-center {
    border-right: 1px solid #add8e694;
    box-shadow: inset -11px 0 10px -12px #add8e6;
}`
    },
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <div class="Form__field">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">Don't have an account? <span>Sign up</span></div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 24px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transform: scale(0.8);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Form__label {
    font-size: 12px;
    font-weight: 500;
    color: #a1a1aa;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__footer {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
}
.Form__footer span:hover {
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Create account</div>
    <div class="Form__field">
        <label class="Form__label">Username</label>
        <input class="Form__input" type="text" placeholder="andre" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <div class="Form__field">
        <label class="Form__label">Confirm password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </div>
    <button class="Form__btn">Create account</button>
    <div class="Form__footer">Already have an account? <span>Sign in</span></div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 24px;
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transform: scale(0.72);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.Form__label {
    font-size: 12px;
    font-weight: 500;
    color: #a1a1aa;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
    transition: opacity 0.2s;
    width: 100%;
}
.Form__btn:hover {
    opacity: 0.88;
}
.Form__footer {
    font-size: 11px;
    color: #71717a;
    text-align: center;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
}
.Form__footer span:hover {
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <span class="Form__input-span">
        <label class="Form__label">Email</label>
        <input class="Form__input" type="email" placeholder="you@example.com" />
    </span>
    <span class="Form__input-span">
        <label class="Form__label">Password</label>
        <input class="Form__input" type="password" placeholder="••••••••" />
    </span>
    <span class="Form__span"><a href="#">Forgot password?</a></span>
    <button class="Form__submit">Log in</button>
    <span class="Form__span">Don't have an account? <a href="#">Sign up</a></span>
</div>`,
        css: `.Form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 220px;
    transform: scale(0.85);
}
.Form__input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.Form__input {
    border-radius: 0.5rem;
    padding: 0.75rem;
    width: 100%;
    border: none;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
    font-family: inherit;
    font-size: 13px;
    color: #fff;
    box-sizing: border-box;
}
.Form__input:focus {
    outline: 2px solid var(--clr);
}
.Form__input::placeholder {
    color: #9c9c9c;
}
.Form__label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
    font-size: 13px;
}
.Form__submit {
    padding: 0.75rem;
    width: 100%;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 13px;
}
.Form__submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
}
.Form__span {
    font-size: 11px;
    color: var(--bg-dark);
}
.Form__span a {
    color: var(--clr);
    text-decoration: none;
}
.Form__span a:hover {
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <label class="Form__switch">
        <input type="checkbox" class="Form__toggle" />
        <span class="Form__slider"></span>
        <span class="Form__card-side"></span>
        <div class="Form__inner">
            <div class="Form__front">
                <div class="Form__title">Log in</div>
                <div class="Form__form">
                    <input class="Form__input" placeholder="Email" type="email" />
                    <input class="Form__input" placeholder="Password" type="password" />
                    <button class="Form__btn">Let's go!</button>
                </div>
            </div>
            <div class="Form__back">
                <div class="Form__title">Sign up</div>
                <div class="Form__form">
                    <input class="Form__input" placeholder="Name" type="text" />
                    <input class="Form__input" placeholder="Email" type="email" />
                    <input class="Form__input" placeholder="Password" type="password" />
                    <button class="Form__btn">Confirm!</button>
                </div>
            </div>
        </div>
    </label>
</div>`,
        css: `.Form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transform: scale(0.75);
    height: 320px;
}
.Form__switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
}
.Form__card-side::before {
    position: absolute;
    content: 'Log in';
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
}
.Form__card-side::after {
    position: absolute;
    content: 'Sign up';
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
}
.Form__toggle {
    opacity: 0;
    width: 0;
    height: 0;
}
.Form__slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    transition: 0.3s;
}
.Form__slider::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
}
.Form__toggle:checked+.Form__slider {
    background-color: var(--input-focus);
}
.Form__toggle:checked+.Form__slider::before {
    transform: translateX(30px);
}
.Form__toggle:checked~.Form__card-side::before {
    text-decoration: none;
}
.Form__toggle:checked~.Form__card-side::after {
    text-decoration: underline;
}
.Form__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.Form__toggle:checked~.Form__inner {
    transform: rotateY(180deg);
}
.Form__front,
.Form__back {
    padding: 20px;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    box-sizing: border-box;
}
.Form__back {
    transform: rotateY(180deg);
}
.Form__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
}
.Form__title {
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
}
.Form__input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
}
.Form__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
}
.Form__input:focus {
    border: 2px solid var(--input-focus);
}
.Form__btn {
    width: 120px;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: 0.1s;
}
.Form__btn:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
}`
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
        ),
        html: `<div class="Form">
    <p class="Form__title">
        Welcome,
        <span>sign in to continue</span>
    </p>
    <button class="Form__oauth">Continue with Google</button>
    <button class="Form__oauth">Continue with Github</button>
    <div class="Form__separator">
        <div></div>
        <span>OR</span>
        <div></div>
    </div>
    <input class="Form__input" type="email" placeholder="Email" />
    <button class="Form__oauth">Continue</button>
</div>`,
        css: `.Form {
    --background: #d3d3d3;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    padding: 20px;
    background: var(--background);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    transform: scale(0.72);
    width: 260px;
    box-sizing: border-box;
}
.Form__title {
    color: var(--font-color);
    font-weight: 700;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    margin: 0 0 6px 0;
}
.Form__title span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 14px;
}
.Form__oauth {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: all 250ms;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.Form__oauth::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #212121;
    z-index: -1;
    transition: all 250ms;
}
.Form__oauth:hover {
    color: #e8e8e8;
}
.Form__oauth:hover::before {
    width: 100%;
}
.Form__separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.Form__separator div {
    flex: 1;
    height: 3px;
    border-radius: 5px;
    background-color: var(--font-color-sub);
}
.Form__separator span {
    color: var(--font-color);
    font-weight: 600;
    font-size: 13px;
}
.Form__input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input::placeholder {
    color: var(--font-color-sub);
}
.Form__input:focus {
    border-color: #2d8cf0;
}`
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
        ),
        html: `<div class="Form-box">
    <div class="Form">
        <span class="Form__title">Sign up</span>
        <span class="Form__subtitle">Create a free account with your email.</span>
        <div class="Form__container">
            <input type="text" class="Form__input" placeholder="Full Name" />
            <input type="email" class="Form__input" placeholder="Email" />
            <input type="password" class="Form__input" placeholder="Password" />
        </div>
        <button class="Form__btn">Sign up</button>
    </div>
    <div class="Form__section">
        <p>Have an account? <a href="#">Log in</a></p>
    </div>
</div>`,
        css: `.Form-box {
    width: 240px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    transform: scale(0.85);
}
.Form {
    display: flex;
    flex-direction: column;
    padding: 24px 20px 16px;
    gap: 12px;
    text-align: center;
}
.Form__title {
    font-weight: 700;
    font-size: 1.4rem;
    color: #010101;
}
.Form__subtitle {
    font-size: 0.85rem;
    color: #666;
}
.Form__container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 6px 0 4px;
    width: 100%;
}
.Form__input {
    background: none;
    border: 0;
    outline: 0;
    height: 38px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.85rem;
    padding: 8px 12px;
    box-sizing: border-box;
    font-family: inherit;
    color: #010101;
}
.Form__input:last-child {
    border-bottom: none;
}
.Form__btn {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 9px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
}
.Form__btn:hover {
    background-color: #005ce6;
}
.Form__section {
    padding: 12px 16px;
    font-size: 0.8rem;
    background-color: #e0ecfb;
    box-shadow: rgba(0, 0, 0, 0.08) 0 -1px;
    text-align: center;
    color: #010101;
}
.Form__section a {
    font-weight: 700;
    color: #0066ff;
    text-decoration: none;
    transition: color 0.3s ease;
}
.Form__section a:hover {
    color: #005ce6;
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__body">
        <div class="Form__welcome">
            <div class="Form__line1">Spotify</div>
            <div class="Form__line2">Welcome Back, André</div>
        </div>
        <div class="Form__inputs">
            <div class="Form__inp">
                <input placeholder="Email Address" type="text" />
            </div>
            <div class="Form__inp">
                <input placeholder="Password" type="password" />
            </div>
        </div>
        <div class="Form__submit-wrap">
            <button class="Form__submit">Login</button>
        </div>
        <div class="Form__forgot">
            <a href="#">Forgot password?</a>
        </div>
    </div>
</div>`,
        css: `.Form {
    display: grid;
    place-items: center;
    width: 260px;
    height: 380px;
    padding: 25px;
    background-color: #161616;
    box-shadow: 0px 15px 40px #00FF7F;
    outline: 1px solid #2b9962;
    border-radius: 10px;
    position: relative;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__body {
    width: 100%;
}
.Form__welcome {
    text-align: center;
    line-height: 1;
    margin-bottom: 24px;
}
.Form__line1 {
    color: #00FF7F;
    font-weight: 600;
    font-size: 32px;
}
.Form__line2 {
    color: #fff;
    font-size: 15px;
    margin-top: 12px;
}
.Form__inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.Form__inp {
    padding: 10px 16px;
    background: transparent;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    transition: border-color 0.2s;
}
.Form__inp:focus-within {
    border-color: #00FF7F;
}
.Form__inp input {
    width: 100%;
    background: none;
    font-size: 13px;
    color: #00FF7F;
    border: none;
    outline: none;
    padding: 0;
    font-family: inherit;
}
.Form__inp input::placeholder {
    color: #4a4a4a;
}
.Form__submit-wrap {
    margin-top: 16px;
}
.Form__submit {
    display: block;
    width: 100%;
    color: #00FF7F;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    padding: 12px;
    border: 0;
    outline: 1px solid #00FF7F;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}
.Form__submit:hover {
    background-color: #00FF7F;
    color: #161616;
}
.Form__forgot {
    text-align: center;
    margin-top: 10px;
}
.Form__forgot a {
    color: #868686;
    font-size: 12px;
    text-decoration: none;
}
.Form__forgot a:hover {
    color: #00FF7F;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__logo">A</div>
    <div class="Form__title">Welcome back</div>
    <div class="Form__sub">Sign in to your account</div>
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="password" placeholder="Password" />
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">No account? <span>Sign up</span></div>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 14px;
    padding: 24px 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__logo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 4px;
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
}
.Form__sub {
    font-size: 11px;
    color: #888;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #111;
}
.Form__input::placeholder {
    color: #bbb;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #111;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.85;
}
.Form__footer {
    font-size: 11px;
    color: #888;
}
.Form__footer span {
    color: #111;
    font-weight: 600;
    cursor: pointer;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <div class="Form__sub">Enter your credentials to continue</div>
    <div class="Form__field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
    </div>
    <div class="Form__field">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
    </div>
    <div class="Form__row">
        <label class="Form__check">
            <input type="checkbox" />
            <span>Remember me</span>
        </label>
        <a href="#">Forgot?</a>
    </div>
    <button class="Form__btn">Continue</button>
</div>`,
        css: `.Form {
    background: #0f0f0f;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 22px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #555;
    margin-bottom: 2px;
}
.Form__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.Form__field label {
    font-size: 11px;
    color: #888;
    font-weight: 500;
}
.Form__field input {
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__field input:focus {
    border-color: #7c3aed;
}
.Form__field input::placeholder {
    color: #444;
}
.Form__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Form__check {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #666;
    cursor: pointer;
}
.Form__check input {
    accent-color: #7c3aed;
}
.Form__row a {
    font-size: 11px;
    color: #7c3aed;
    text-decoration: none;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #7c3aed;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__inner">
        <div class="Form__title">Login</div>
        <div class="Form__field">
            <input class="Form__input" type="email" placeholder="Email" />
        </div>
        <div class="Form__field">
            <input class="Form__input" type="password" placeholder="Password" />
        </div>
        <button class="Form__btn">Log in</button>
        <div class="Form__footer">
            <a href="#">Forgot password?</a>
        </div>
    </div>
</div>`,
        css: `.Form {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 16px;
    padding: 3px;
    transform: scale(0.82);
}
.Form__inner {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border-radius: 14px;
    padding: 22px 18px;
    width: 210px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__field {
    width: 100%;
}
.Form__input {
    width: 100%;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: rgba(255, 255, 255, 0.5);
}
.Form__input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #fff;
    color: #764ba2;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__footer {
    text-align: center;
}
.Form__footer a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    text-decoration: none;
}
.Form__footer a:hover {
    color: #fff;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__left">
        <div class="Form__brand">MyApp</div>
        <div class="Form__tagline">Good to see you again</div>
    </div>
    <div class="Form__right">
        <div class="Form__title">Sign in</div>
        <input class="Form__input" type="email" placeholder="Email" />
        <input class="Form__input" type="password" placeholder="Password" />
        <button class="Form__btn">Sign in</button>
        <div class="Form__footer">No account? <span>Register</span></div>
    </div>
</div>`,
        css: `.Form {
    display: flex;
    border-radius: 14px;
    overflow: hidden;
    width: 280px;
    transform: scale(0.72);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
.Form__left {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 90px;
    flex-shrink: 0;
}
.Form__brand {
    font-size: 13px;
    font-weight: 800;
    color: #fff;
}
.Form__tagline {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.4;
}
.Form__right {
    background: #18181b;
    padding: 20px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 11px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    padding: 8px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.85;
}
.Form__footer {
    font-size: 10px;
    color: #71717a;
}
.Form__footer span {
    color: #a855f7;
    cursor: pointer;
    font-weight: 500;
}`
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
        ),
        html: `<div class="Form">
    <p class="Form__title">Sign in</p>
    <input class="Form__email" placeholder="E-mail, phone, or Skype" type="text" />
    <p class="Form__text"><a href="#">No account? Create one!</a></p>
    <p class="Form__text"><a href="#">Can't access your account?</a></p>
    <div class="Form__row">
        <button class="Form__btn Form__btn--secondary">Back</button>
        <button class="Form__btn Form__btn--primary">Next</button>
    </div>
</div>`,
        css: `.Form {
    background-color: #ffffff;
    width: 260px;
    padding: 28px;
    box-sizing: border-box;
    transform: scale(0.82);
}
.Form__title {
    color: #1b1b1b;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 12px 0 10px 0;
    font-family: "Segoe UI", "Helvetica Neue", sans-serif;
}
.Form__email {
    width: 100%;
    padding: 6px 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    height: 34px;
    outline: none;
    background-color: transparent;
    color: #000;
    font-size: 13px;
    margin-bottom: 14px;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__email::placeholder {
    color: #666;
    font-size: 13px;
}
.Form__text {
    color: #1b1b1b;
    font-size: 0.8rem;
    line-height: 1.25rem;
    margin-bottom: 10px;
    font-family: "Segoe UI", sans-serif;
}
.Form__text a {
    color: #0067B8;
    text-decoration: none;
    cursor: pointer;
}
.Form__text a:hover {
    text-decoration: underline;
}
.Form__row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 16px;
}
.Form__btn {
    width: 90px;
    height: 32px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    transition: background-color 0.15s;
}
.Form__btn--secondary {
    background-color: rgba(0, 0, 0, 0.15);
    color: #000;
}
.Form__btn--secondary:hover {
    background-color: rgba(0, 0, 0, 0.25);
}
.Form__btn--primary {
    background-color: #0067b8;
    color: #fff;
}
.Form__btn--primary:hover {
    background-color: #005da6;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Contact us</div>
    <div class="Form__sub">We'll get back to you within 24 hours.</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <textarea class="Form__textarea" placeholder="Your message"></textarea>
    <button class="Form__btn">Send message</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    transform: scale(0.78);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input,
.Form__textarea {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus,
.Form__textarea:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder,
.Form__textarea::placeholder {
    color: #52525b;
}
.Form__textarea {
    height: 60px;
    resize: none;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Reset password</div>
    <div class="Form__sub">Enter your email to receive a reset link.</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Send reset link</button>
    <div class="Form__back"><a href="#">Back to sign in</a></div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 9px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__back {
    text-align: center;
    font-size: 11px;
}
.Form__back a {
    color: #a855f7;
    text-decoration: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Stay in the loop</div>
    <div class="Form__sub">Get the latest updates in your inbox.</div>
    <div class="Form__row">
        <input class="Form__input" type="email" placeholder="Enter your email" />
        <button class="Form__btn">Subscribe</button>
    </div>
    <div class="Form__note">No spam, unsubscribe at any time.</div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    min-width: 0;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__note {
    font-size: 10px;
    color: #52525b;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Two-step verification</div>
    <div class="Form__sub">Enter the 6-digit code sent to your phone.</div>
    <div class="Form__inputs">
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
    </div>
    <button class="Form__btn">Verify</button>
    <div class="Form__resend"><a href="#">Resend code</a></div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 20px;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    text-align: center;
    margin-bottom: 2px;
}
.Form__inputs {
    display: flex;
    gap: 6px;
}
.Form__box {
    width: 34px;
    height: 38px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 7px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__box:focus {
    border-color: #7c3aed;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__resend {
    font-size: 11px;
}
.Form__resend a {
    color: #a855f7;
    text-decoration: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Payment</div>
    <input class="Form__input" type="text" placeholder="Cardholder name" />
    <input class="Form__input" type="text" placeholder="Card number" />
    <div class="Form__row">
        <input class="Form__input Form__input--half" type="text" placeholder="MM / YY" />
        <input class="Form__input Form__input--half" type="text" placeholder="CVC" />
    </div>
    <button class="Form__btn">Pay now</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__row {
    display: flex;
    gap: 8px;
}
.Form__input--half {
    width: calc(50% - 4px);
}
.Form__btn {
    background: #22c55e;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    margin-top: 2px;
}
.Form__btn:hover {
    background: #16a34a;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Edit profile</div>
    <div class="Form__avatar">A</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="text" placeholder="Username" />
    <button class="Form__btn">Save changes</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    transform: scale(0.8);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    margin: 4px 0;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Search</div>
    <div class="Form__wrap">
        <input class="Form__input" type="text" placeholder="Search for anything..." />
        <button class="Form__btn">Search</button>
    </div>
    <div class="Form__tags">
        <span>Design</span>
        <span>React</span>
        <span>CSS</span>
        <span>UI</span>
    </div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
.Form__wrap {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    min-width: 0;
    transition: border-color 0.2s;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}
.Form__tags span {
    background: rgba(124, 58, 237, 0.12);
    color: #a855f7;
    font-size: 10px;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid rgba(124, 58, 237, 0.25);
    cursor: pointer;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Leave feedback</div>
    <div class="Form__stars">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
    <textarea class="Form__textarea" placeholder="Tell us what you think..."></textarea>
    <button class="Form__btn">Submit</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__stars {
    display: flex;
    gap: 4px;
}
.Form__stars span {
    font-size: 20px;
    color: #f59e0b;
    cursor: pointer;
}
.Form__textarea {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    height: 60px;
    resize: none;
    width: 100%;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__textarea:focus {
    border-color: #7c3aed;
}
.Form__textarea::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    width: 100%;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Delete account</div>
    <div class="Form__sub">This action is permanent and cannot be undone.</div>
    <input class="Form__input" type="password" placeholder="Enter your password" />
    <div class="Form__check">
        <input type="checkbox" id="form-confirm" />
        <label for="form-confirm">I understand this is permanent</label>
    </div>
    <button class="Form__btn">Delete my account</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(248, 113, 113, 0.2);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: scale(0.82);
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #f87171;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #fff;
    padding: 8px 10px;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    width: 100%;
}
.Form__input:focus {
    border-color: #f87171;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__check {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: #a1a1aa;
}
.Form__check input {
    accent-color: #f87171;
    cursor: pointer;
}
.Form__check label {
    cursor: pointer;
}
.Form__btn {
    background: #ef4444;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
}
.Form__btn:hover {
    background: #dc2626;
}`
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
        ),
        html: `<div class="Form">
    <p class="Form__heading">Login</p>
    <div class="Form__input-container">
        <input placeholder="Username" class="Form__input" type="text" />
    </div>
    <div class="Form__input-container">
        <input placeholder="Password" class="Form__input" type="password" />
    </div>
    <button class="Form__btn">Submit</button>
    <div class="Form__signup">
        <p>Don't have any account?</p>
        <a href="#">Sign up</a>
    </div>
</div>`,
        css: `.Form {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 24px;
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
    box-sizing: border-box;
}
.Form__heading {
    font-size: 2em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 10px 0 20px 0;
}
.Form__input-container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Form__input {
    width: 100%;
    height: 38px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    border-radius: 30px;
    margin: 8px 0;
    color: black;
    font-size: 0.8em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 16px;
    outline: none;
    font-family: inherit;
}
.Form__input:focus {
    border-bottom: 2px solid rgb(199, 114, 255);
}
.Form__input::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
}
.Form__btn {
    position: relative;
    width: 100%;
    border: 2px solid #8000ff;
    background-color: #8000ff;
    height: 38px;
    color: white;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 30px;
    margin: 10px 0;
    cursor: pointer;
    overflow: hidden;
    font-family: inherit;
}
.Form__btn::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
}
.Form__btn:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
}
.Form__signup {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.Form__signup p {
    font-size: 0.85em;
    font-weight: 500;
    color: black;
    margin: 0;
}
.Form__signup a {
    font-size: 0.7em;
    font-weight: 500;
    background-color: #2e2e2e;
    color: white;
    text-decoration: none;
    padding: 7px 14px;
    border-radius: 20px;
}`
    },
    {
        id: 232, name: "Login Form", preview: (
            <div className="fm-232">
                <p className="fm-232__heading">Login</p>
                <input className="fm-232__input" placeholder="Username" type="text" />
                <input className="fm-232__input" placeholder="Password" type="password" />
                <button className="fm-232__btn">Submit</button>
            </div>
        ),
        html: `<div class="Form">
    <p class="Form__heading">Login</p>
    <input class="Form__input" placeholder="Username" type="text" />
    <input class="Form__input" placeholder="Password" type="password" />
    <button class="Form__btn">Submit</button>
</div>`,
        css: `.Form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 2em;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
    width: 220px;
    box-sizing: border-box;
}
.Form:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
}
.Form__heading {
    color: black;
    padding-bottom: 1em;
    text-align: center;
    font-weight: bold;
    margin: 0;
    font-size: 15px;
}
.Form__input {
    border-radius: 5px;
    border: 1px solid whitesmoke;
    background-color: whitesmoke;
    outline: none;
    padding: 0.6em;
    transition: 0.4s ease-in-out;
    font-family: inherit;
    font-size: 13px;
}
.Form__input:hover {
    box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
}
.Form__input:focus {
    background: #ffffff;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
}
.Form__btn {
    margin-top: 1em;
    align-self: center;
    padding: 0.6em 1.2em;
    border-radius: 10px;
    border: none;
    color: black;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    background: #fff;
}
.Form__btn:hover {
    box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
    transform: translateX(-0.5em) translateY(-0.5em);
}
.Form__btn:active {
    transition: 0.2s;
    transform: translateX(0) translateY(0);
    box-shadow: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__flex">
        <label class="Form__label">
            <input required placeholder="" type="text" class="Form__input" />
            <span>first name</span>
        </label>
        <label class="Form__label">
            <input required placeholder="" type="text" class="Form__input" />
            <span>last name</span>
        </label>
    </div>
    <label class="Form__label">
        <input required placeholder="" type="email" class="Form__input" />
        <span>email</span>
    </label>
    <label class="Form__label">
        <input required placeholder="" type="tel" class="Form__input" />
        <span>contact number</span>
    </label>
    <label class="Form__label">
        <textarea required rows="3" placeholder="" class="Form__textarea"></textarea>
        <span>message</span>
    </label>
    <button class="Form__fancy">
        <span class="Form__top-key"></span>
        <span class="Form__text">submit</span>
        <span class="Form__bottom-key-1"></span>
        <span class="Form__bottom-key-2"></span>
    </button>
</div>`,
        css: `.Form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 280px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
}
.Form__flex {
    display: flex;
    width: 100%;
    gap: 6px;
}
.Form__label {
    position: relative;
    display: block;
    width: 100%;
}
.Form__input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    font-family: inherit;
    font-size: 13px;
    box-sizing: border-box;
}
.Form__label .Form__input+span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.85em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
}
.Form__label .Form__input:placeholder-shown+span {
    top: 15px;
    font-size: 0.85em;
}
.Form__label .Form__input:focus+span,
.Form__label .Form__input:valid+span {
    top: 28px;
    font-size: 0.65em;
    font-weight: 600;
}
.Form__label .Form__input:valid+span {
    color: green;
}
.Form__textarea {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 5px;
    font-family: inherit;
    font-size: 13px;
    box-sizing: border-box;
    resize: none;
}
.Form__label .Form__textarea+span {
    position: absolute;
    left: 10px;
    top: 12px;
    color: grey;
    font-size: 0.85em;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
}
.Form__label .Form__textarea:focus+span,
.Form__label .Form__textarea:valid+span {
    top: 46px;
    font-size: 0.65em;
    font-weight: 600;
}
.Form__label .Form__textarea:valid+span {
    color: green;
}
.Form__fancy {
    background-color: transparent;
    border: 2px solid #cacaca;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-weight: 390;
    letter-spacing: 2px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 8px 30px;
    position: relative;
    text-align: center;
    transition: all 0.3s ease-in-out;
    font-size: 13px;
    background: #fff;
}
.Form__fancy::before {
    content: " ";
    width: 1.7rem;
    height: 2px;
    background: #cacaca;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateX(230%);
    transition: background 0.3s linear, width 0.3s linear;
}
.Form__text {
    font-size: 1em;
    line-height: 1.33em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    color: #818181;
    transform: translateX(30%);
}
.Form__top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, left 0.3s ease-out;
}
.Form__bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}
.Form__bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: white;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}
.Form__fancy:hover {
    background: #cacaca;
}
.Form__fancy:hover::before {
    width: 1.5rem;
    background: white;
}
.Form__fancy:hover .Form__text {
    color: white;
    padding-left: 1.5em;
}
.Form__fancy:hover .Form__top-key {
    left: -2px;
    width: 0;
}
.Form__fancy:hover .Form__bottom-key-1,
.Form__fancy:hover .Form__bottom-key-2 {
    right: 0;
    width: 0;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Sign in</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="password" placeholder="Password" />
    <div class="Form__forgot"><a href="#">Forgot password?</a></div>
    <button class="Form__btn">Sign in</button>
    <div class="Form__footer">New here? <a href="#">Create account</a></div>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 24px 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #6366f1;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__forgot {
    text-align: right;
}
.Form__forgot a {
    font-size: 11px;
    color: #6366f1;
    text-decoration: none;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}
.Form__footer {
    font-size: 11px;
    color: #888;
    text-align: center;
}
.Form__footer a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Create account</div>
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="First name" />
        <input class="Form__input" type="text" placeholder="Last name" />
    </div>
    <input class="Form__input Form__input--full" type="email" placeholder="Email" />
    <input class="Form__input Form__input--full" type="password" placeholder="Password" />
    <button class="Form__btn">Register</button>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    min-width: 0;
    box-sizing: border-box;
}
.Form__input--full {
    width: 100%;
    flex: none;
}
.Form__input:focus {
    border-color: #6366f1;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
    margin-top: 2px;
}
.Form__btn:hover {
    background: #4f46e5;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Get in touch</div>
    <input class="Form__input" type="text" placeholder="Your name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="text" placeholder="Subject" />
    <textarea class="Form__textarea" placeholder="Your message"></textarea>
    <button class="Form__btn">Send message</button>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #10b981;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    height: 60px;
    resize: none;
}
.Form__textarea:focus {
    border-color: #10b981;
}
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #10b981;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #059669;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Newsletter</div>
    <div class="Form__sub">Get weekly updates delivered to your inbox.</div>
    <input class="Form__input" type="text" placeholder="Your name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Subscribe</button>
    <div class="Form__note">Unsubscribe anytime.</div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__note {
    font-size: 10px;
    color: #52525b;
    text-align: center;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Forgot password</div>
    <div class="Form__sub">Enter your email and we will send you a link to reset your password.</div>
    <input class="Form__input" type="email" placeholder="Email address" />
    <button class="Form__btn">Send link</button>
    <div class="Form__footer"><a href="#">Back to login</a></div>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 24px 20px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
}
.Form__sub {
    font-size: 11px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 9px 12px;
    border: 1.5px solid #e5e5e5;
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #f59e0b;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #f59e0b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #d97706;
}
.Form__footer {
    text-align: center;
}
.Form__footer a {
    font-size: 11px;
    color: #6366f1;
    text-decoration: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Checkout</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="text" placeholder="Address" />
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="City" />
        <input class="Form__input" type="text" placeholder="ZIP" />
    </div>
    <input class="Form__input Form__input--full" type="text" placeholder="Card number" />
    <div class="Form__row">
        <input class="Form__input" type="text" placeholder="MM / YY" />
        <input class="Form__input" type="text" placeholder="CVC" />
    </div>
    <button class="Form__btn">Pay now</button>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}
.Form__row {
    display: flex;
    gap: 6px;
}
.Form__input {
    flex: 1;
    padding: 7px 9px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 11px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    min-width: 0;
    box-sizing: border-box;
}
.Form__input--full {
    width: 100%;
    flex: none;
}
.Form__input:focus {
    border-color: #22c55e;
}
.Form__input::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #22c55e;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
    margin-top: 4px;
}
.Form__btn:hover {
    background: #16a34a;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Profile settings</div>
    <div class="Form__avatar">A</div>
    <input class="Form__input" type="text" placeholder="Display name" />
    <input class="Form__input" type="email" placeholder="Email address" />
    <input class="Form__input" type="text" placeholder="Bio" />
    <button class="Form__btn">Save changes</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    align-self: flex-start;
}
.Form__avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin: 4px 0;
}
.Form__input {
    width: 100%;
    padding: 8px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #7c3aed;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Verify your email</div>
    <div class="Form__sub">Enter the 6-digit code we sent to your email.</div>
    <div class="Form__boxes">
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
        <input class="Form__box" type="text" maxlength="1" />
    </div>
    <button class="Form__btn">Verify</button>
    <div class="Form__resend"><a href="#">Resend code</a></div>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}
.Form__sub {
    font-size: 11px;
    color: #71717a;
    text-align: center;
    margin-bottom: 2px;
}
.Form__boxes {
    display: flex;
    gap: 6px;
}
.Form__box {
    width: 32px;
    height: 36px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 6px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
}
.Form__box:focus {
    border-color: #7c3aed;
}
.Form__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #6d28d9;
}
.Form__resend {
    font-size: 11px;
}
.Form__resend a {
    color: #a855f7;
    text-decoration: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Apply now</div>
    <input class="Form__input" type="text" placeholder="Full name" />
    <input class="Form__input" type="email" placeholder="Email" />
    <input class="Form__input" type="text" placeholder="LinkedIn URL" />
    <select class="Form__select">
        <option value="">Select role</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Designer</option>
    </select>
    <textarea class="Form__textarea" placeholder="Why do you want to join?"></textarea>
    <button class="Form__btn">Submit application</button>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    margin-bottom: 2px;
}
.Form__input,
.Form__select,
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    background: #fff;
}
.Form__input:focus,
.Form__select:focus,
.Form__textarea:focus {
    border-color: #6366f1;
}
.Form__input::placeholder,
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__textarea {
    height: 50px;
    resize: none;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Change password</div>
    <input class="Form__input" type="password" placeholder="Current password" />
    <input class="Form__input" type="password" placeholder="New password" />
    <input class="Form__input" type="password" placeholder="Confirm new password" />
    <button class="Form__btn">Update password</button>
</div>`,
        css: `.Form {
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 22px 18px;
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2px;
}
.Form__input {
    width: 100%;
    padding: 9px 10px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #fff;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
}
.Form__input:focus {
    border-color: #f87171;
}
.Form__input::placeholder {
    color: #52525b;
}
.Form__btn {
    background: #f87171;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #ef4444;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__title">Quick survey</div>
    <div class="Form__question">How did you hear about us?</div>
    <div class="Form__options">
        <label class="Form__option"><input type="radio" name="survey" /><span>Google</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Social media</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Friend</span></label>
        <label class="Form__option"><input type="radio" name="survey" /><span>Other</span></label>
    </div>
    <textarea class="Form__textarea" placeholder="Any additional feedback?"></textarea>
    <button class="Form__btn">Submit</button>
</div>`,
        css: `.Form {
    background: #fff;
    border-radius: 12px;
    padding: 20px 18px;
    width: 230px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.Form__title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
}
.Form__question {
    font-size: 12px;
    font-weight: 600;
    color: #333;
}
.Form__options {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.Form__option {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    color: #444;
    cursor: pointer;
}
.Form__option input {
    accent-color: #6366f1;
    cursor: pointer;
}
.Form__textarea {
    width: 100%;
    padding: 8px 10px;
    border: 1.5px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    outline: none;
    color: #111;
    font-family: inherit;
    transition: border-color 0.2s;
    box-sizing: border-box;
    height: 50px;
    resize: none;
}
.Form__textarea:focus {
    border-color: #6366f1;
}
.Form__textarea::placeholder {
    color: #aaa;
}
.Form__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
    width: 100%;
}
.Form__btn:hover {
    background: #4f46e5;
}`
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
        ),
        html: `<div class="Form">
    <p class="Form__title">Login</p>
    <div class="Form__input-box">
        <input required placeholder="Username" type="text" />
    </div>
    <div class="Form__input-box">
        <input required placeholder="Password" type="password" />
    </div>
    <div class="Form__remember">
        <label><input type="checkbox" /> Remember Me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button class="Form__btn">Login</button>
    <div class="Form__register">
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>
</div>`,
        css: `.Form {
    width: 260px;
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 9%, rgba(9, 9, 121, 1) 68%, rgba(0, 91, 255, 1) 97%);
    color: #fff;
    border-radius: 12px;
    padding: 24px 28px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 4px 0;
}
.Form__input-box {
    position: relative;
    width: 100%;
    height: 44px;
    margin: 16px 0;
}
.Form__input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 13px;
    color: #fff;
    padding: 0 16px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input-box input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}
.Form__remember {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: -6px 0 12px;
    align-items: center;
}
.Form__remember label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}
.Form__remember label input {
    accent-color: #fff;
}
.Form__remember a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
.Form__remember a:hover {
    text-decoration: underline;
}
.Form__btn {
    display: block;
    width: 130px;
    height: 40px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin: 8px auto 0;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__register {
    font-size: 12px;
    text-align: center;
    margin-top: 16px;
}
.Form__register p {
    margin: 0;
}
.Form__register a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
.Form__register a:hover {
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <p class="Form__title">Login</p>
    <div class="Form__input-box">
        <input required placeholder="Username" type="text" />
    </div>
    <div class="Form__input-box">
        <input required placeholder="Password" type="password" />
    </div>
    <div class="Form__remember">
        <label><input type="checkbox" /> Remember Me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button class="Form__btn">Login</button>
    <div class="Form__register">
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>
</div>`,
        css: `.Form {
    width: 260px;
    background: linear-gradient(90deg,
        #ff0000 0%,
        #0066ff 100%);
    color: #fff;
    border-radius: 12px;
    padding: 24px 28px;
    box-sizing: border-box;
}
.Form__title {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 4px 0;
}
.Form__input-box {
    position: relative;
    width: 100%;
    height: 44px;
    margin: 16px 0;
}
.Form__input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 13px;
    color: #fff;
    padding: 0 16px;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__input-box input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}
.Form__remember {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin: -6px 0 12px;
    align-items: center;
}
.Form__remember label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}
.Form__remember label input {
    accent-color: #fff;
}
.Form__remember a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
.Form__remember a:hover {
    text-decoration: underline;
}
.Form__btn {
    display: block;
    width: 130px;
    height: 40px;
    background: #fff;
    border: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin: 8px auto 0;
    transition: opacity 0.2s;
    font-family: inherit;
}
.Form__btn:hover {
    opacity: 0.9;
}
.Form__register {
    font-size: 12px;
    text-align: center;
    margin-top: 16px;
}
.Form__register p {
    margin: 0;
}
.Form__register a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
.Form__register a:hover {
    text-decoration: underline;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__card">
        <div class="Form__title">
            <span class="Form__text">Login</span>
        </div>
        <div class="Form__form">
            <div class="Form__group">
                <input required placeholder="Hero" class="Form__input" type="text" />
            </div>
            <div class="Form__group">
                <input required placeholder="Heropass" class="Form__input" type="password" />
            </div>
            <button class="Form__btn">ENTER ZONE</button>
        </div>
    </div>
</div>`,
        css: `.Form {
    position: relative;
    perspective: 1000px;
    width: 200px;
}
.Form__card {
    position: relative;
    width: 100%;
    height: 80px;
    background: linear-gradient(135deg, #ff3366, #ff6b35);
    border: 4px solid #000;
    box-shadow: 8px 8px 0 #000, 16px 16px 0 rgba(255, 51, 102, 0.3);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
}
.Form__card:hover {
    height: 240px;
    transform: translateZ(20px) rotateX(5deg) rotateY(-5deg);
    box-shadow: 12px 12px 0 #000, 24px 24px 0 rgba(255, 51, 102, 0.4), 0 0 50px rgba(255, 51, 102, 0.6);
}
.Form__title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    transition: all 0.4s ease;
}
.Form__text {
    color: #000;
    font-weight: 800;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.4s ease;
}
.Form__card:hover .Form__text {
    opacity: 0;
    transform: translateY(-30px) scale(0.8);
}
.Form__form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(30px) scale(0.8);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.Form__card:hover .Form__form {
    opacity: 1;
    transform: translateY(0) scale(1);
}
.Form__group {
    position: relative;
    width: 100%;
    margin-bottom: 14px;
}
.Form__input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    border: 3px solid #000;
    font-weight: 700;
    color: #000;
    box-shadow: 4px 4px 0 #000;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
    font-size: 12px;
    box-sizing: border-box;
    outline: none;
}
.Form__input:focus {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #000;
}
.Form__input::placeholder {
    color: #000;
    opacity: 0.6;
}
.Form__btn {
    width: 100%;
    padding: 10px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
    font-size: 11px;
}
.Form__btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 rgba(255, 255, 255, 0.3);
    background: #333;
}
.Form__card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.Form__card:hover::before {
    left: 100%;
}
.Form__card::after {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    width: 20px;
    height: 20px;
    background: #000;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transition: all 0.6s ease;
}
.Form__card:hover::after {
    background: rgb(246, 168, 116);
}
.Form::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 51, 102, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    z-index: -1;
}
.Form:hover::before {
    width: 400px;
    height: 400px;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__card">
        <div class="Form__left">
            <div class="Form__noise"></div>
            <div class="Form__brand">DesktopLogin</div>
            <div class="Form__hero">
                <div class="Form__hero-title">Get Started with Us</div>
                <div class="Form__hero-desc">Complete these easy steps to register your account.</div>
                <div class="Form__steps">
                    <div class="Form__step Form__step--active">
                        <div class="Form__step-num">1</div>
                        <span>Sign up your account</span>
                    </div>
                    <div class="Form__step">
                        <div class="Form__step-num">2</div>
                        <span>Set up your workspace</span>
                    </div>
                    <div class="Form__step">
                        <div class="Form__step-num">3</div>
                        <span>Set up your profile</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="Form__right">
            <div class="Form__form-title">Sign Up Account</div>
            <div class="Form__form-desc">Enter your personal data to create your account.</div>
            <div class="Form__socials">
                <button class="Form__social">Google</button>
                <button class="Form__social">Github</button>
            </div>
            <div class="Form__divider">Or</div>
            <div class="Form__row">
                <div class="Form__field">
                    <label class="Form__label">First Name</label>
                    <input class="Form__input" type="text" placeholder="eg. John" />
                </div>
                <div class="Form__field">
                    <label class="Form__label">Last Name</label>
                    <input class="Form__input" type="text" placeholder="eg. Francisco" />
                </div>
            </div>
            <div class="Form__field">
                <label class="Form__label">Email</label>
                <input class="Form__input" type="email" placeholder="eg. john@gmail.com" />
            </div>
            <div class="Form__field">
                <label class="Form__label">Password</label>
                <input class="Form__input" type="password" placeholder="Enter your password" />
            </div>
            <div class="Form__hint">Must be at least 8 characters.</div>
            <button class="Form__btn">Sign Up</button>
            <div class="Form__footer">Already have an account? <a href="#">Log in</a></div>
        </div>
    </div>
</div>`,
        css: `.Form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000;
    padding: 10px;
    font-family: "Inter", sans-serif;
    color: white;
    box-sizing: border-box;
}
.Form * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.Form__card {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 700px;
    background: #000;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #1a1a1a;
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
}
.Form__left {
    flex: 1 1 200px;
    position: relative;
    background: radial-gradient(circle at 50% 10%, #d8b4fe 0%, #7e22ce 30%, #3b0764 60%, #000 100%);
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 320px;
}
.Form__noise {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.6;
    mix-blend-mode: overlay;
    pointer-events: none;
}
.Form__brand {
    position: relative;
    z-index: 2;
    font-weight: 600;
    font-size: 14px;
}
.Form__hero {
    position: relative;
    z-index: 2;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 20px;
}
.Form__hero-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 8px;
}
.Form__hero-desc {
    color: rgba(255,255,255,0.7);
    margin-bottom: 16px;
    font-size: 12px;
}
.Form__steps {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.Form__step {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 10px;
    font-size: 12px;
    transition: 0.3s;
}
.Form__step--active {
    background: white;
    color: black;
    border: none;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}
.Form__step-num {
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
}
.Form__step--active .Form__step-num {
    background: black;
    color: white;
}
.Form__right {
    flex: 1 1 200px;
    background: black;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Form__form-title {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
}
.Form__form-desc {
    color: #888;
    font-size: 12px;
    margin-bottom: 16px;
}
.Form__socials {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}
.Form__social {
    flex: 1;
    background: transparent;
    border: 1px solid #333;
    color: white;
    padding: 8px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    font-family: inherit;
    font-size: 12px;
}
.Form__social:hover {
    background: #111;
    border-color: #555;
}
.Form__divider {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 12px;
    margin-bottom: 14px;
}
.Form__divider::before,
.Form__divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #333;
    margin: 0 10px;
}
.Form__row {
    display: flex;
    gap: 8px;
}
.Form__field {
    width: 100%;
    margin-bottom: 12px;
    min-width: 0;
}
.Form__label {
    display: block;
    color: #ccc;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 5px;
}
.Form__input {
    width: 100%;
    background: #121212;
    border: 1px solid #1a1a1a;
    padding: 9px 10px;
    border-radius: 7px;
    color: white;
    outline: none;
    font-family: inherit;
    font-size: 12px;
    transition: 0.2s;
}
.Form__input:focus {
    background: #1a1a1a;
    border-color: #444;
}
.Form__input::placeholder {
    color: #555;
}
.Form__hint {
    color: #666;
    font-size: 11px;
    margin-top: -6px;
    margin-bottom: 14px;
}
.Form__btn {
    width: 100%;
    background: white;
    color: black;
    border: none;
    padding: 11px;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    font-family: inherit;
    font-size: 13px;
}
.Form__btn:hover {
    background: #e5e5e5;
}
.Form__footer {
    text-align: center;
    margin-top: 14px;
    color: #888;
    font-size: 12px;
}
.Form__footer a {
    color: white;
    text-decoration: none;
}`
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
        ),
        html: `<div class="Form">
    <div class="Form__content">
        <div class="Form__title-section">
            <p class="Form__title">Dossier</p>
        </div>
        <div class="Form__form">
            <div class="Form__group">
                <div class="Form__field-content">
                    <label for="form-user">Username</label>
                    <input type="text" id="form-user" placeholder="Enter your username" />
                </div>
            </div>
            <div class="Form__group">
                <div class="Form__field-content">
                    <label for="form-pass">Password</label>
                    <input type="password" id="form-pass" placeholder="Enter your password" />
                </div>
            </div>
            <div class="Form__forgot">
                <a href="#">Forgot Password?</a>
            </div>
            <button class="Form__sign">
                <span>Sign In</span>
                <span class="Form__arrow">→</span>
            </button>
        </div>
        <div class="Form__divider">
            <div class="Form__line"></div>
            <p class="Form__or">Or continue with</p>
            <div class="Form__line"></div>
        </div>
        <div class="Form__socials">
            <button class="Form__social"><span>Google</span></button>
            <button class="Form__social"><span>GitHub</span></button>
            <button class="Form__social"><span>X</span></button>
        </div>
        <p class="Form__signup">Don't have an account? <a href="#">Sign up</a></p>
    </div>
</div>`,
        css: `.Form {
    width: 100%;
    max-width: 300px;
    background: linear-gradient(145deg, #0f0f0f 0%, #080808 50%, #0a0a0a 100%);
    color: #fff;
    border: 1px solid rgba(212, 168, 75, 0.15);
    overflow: hidden;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,0.8);
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    box-sizing: border-box;
}
.Form::before {
    content: "";
    display: block;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, #b8922f 20%, #d4a84b 50%, #b8922f 80%, transparent 100%);
}
.Form__content {
    padding: 20px;
}
.Form__title-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, #d4a84b, transparent) 1;
}
.Form__title {
    font-family: Impact, "Arial Black", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: linear-gradient(180deg, #fff 30%, #999 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}
.Form__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Form__group {
    background: linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(7,18,34,0.9) 100%);
    border: 1px solid #1a2d47;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    position: relative;
    box-sizing: border-box;
}
.Form__group::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 0;
    background: linear-gradient(180deg, #d4a84b, #00d4ff);
    transition: height 0.3s ease;
}
.Form__group:focus-within::before { height: 100%; }
.Form__group:focus-within { border-color: #d4a84b; transform: translateX(3px); }
.Form__group:hover { border-color: #2a4a70; }
.Form__field-content {
    flex: 1;
    min-width: 0;
}
.Form__group label {
    display: block;
    color: #6b7280;
    font-size: 0.55rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 3px;
    transition: color 0.3s ease;
}
.Form__group:focus-within label { color: #d4a84b; }
.Form__group input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__group input::placeholder { color: #3a4a5a; }
.Form__forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
}
.Form__forgot a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.65rem;
    transition: color 0.3s;
}
.Form__forgot a:hover { color: #d4a84b; }
.Form__sign {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: linear-gradient(135deg, #d4a84b 0%, #b8922f 100%);
    padding: 10px;
    color: #000;
    border: none;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 6px;
    font-family: inherit;
}
.Form__sign:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212,168,75,0.4);
}
.Form__arrow { transition: transform 0.3s ease; }
.Form__sign:hover .Form__arrow { transform: translateX(4px); }
.Form__divider {
    display: flex;
    align-items: center;
    padding-top: 16px;
    margin-bottom: 12px;
}
.Form__line {
    height: 1px;
    flex: 1;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}
.Form__or {
    padding: 0 10px;
    font-size: 0.55rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
}
.Form__socials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}
.Form__social {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(7,18,34,0.9) 100%);
    border: 1px solid #1a2d47;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
    font-family: inherit;
}
.Form__social:hover {
    transform: translateY(-3px);
    border-color: #d4a84b;
}
.Form__social span {
    font-size: 0.55rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
}
.Form__social:hover span { color: #d4a84b; }
.Form__signup {
    text-align: center;
    font-size: 0.7rem;
    color: #6b7280;
    margin-top: 16px;
    margin-bottom: 0;
}
.Form__signup a {
    color: #d4a84b;
    text-decoration: none;
    font-weight: 600;
}
.Form__signup a:hover { color: #fff; }`
    },
];


export const patterns = [
    {
        id: 300, name: "Grid Pattern", preview: (
            <div className="pt-300"></div>
        ),
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
}`
    },
    {
        id: 301, name: "Grid Pattern", preview: (
            <div className="pt-301"></div>
        ),
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
}`
    },
    {
        id: 302, name: "Dot Pattern", preview: (
            <div className="pt-302"></div>
        ),
        html: `<div class="Pattern"></div>`,
        css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #0d0d0d;
    background-image: radial-gradient(circle, rgba(6, 253, 220, 0.945) 1px, transparent 1px);
    background-size: 24px 24px;
    border-radius: 10px;
}`
    },
    {
        id: 303, name: "Diagonal Lines", preview: (
            <div className="pt-303"></div>
        ),
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
}`
    },
    {
        id: 304, name: "Pattern", preview: (
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
}`
    },
    {
        id: 305, name: "Pattern", preview: (
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
}`
    },
    {
        id: 306, name: "Wavy Lines Pattern", preview: (
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
}`
    },
    {
        id: 307, name: "Circuit Pattern", preview: (
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
}`
    },


    {
        id: 308, name: "Crosshatch Pattern", preview: (
            <div className="pt-308"></div>
        ),
        html: `<div class="Pattern"></div>`,
        css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #fafaf9;
    background-image:
        repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) 1px, transparent 1px, transparent 14px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.06) 0px, rgba(0, 0, 0, 0.06) 1px, transparent 1px, transparent 14px);
    border-radius: 10px;
}`
    },
    {
        id: 309, name: "Bubble Pattern", preview: (
            <div className="pt-309"></div>
        ),
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
}`
    },
    {
        id: 310, name: "Honeycomb Pattern", preview: (
            <div className="pt-310"></div>
        ),
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
}`
    },
    {
        id: 311, name: "Confetti Pattern", preview: (
            <div className="pt-311"></div>
        ),
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
}`
    },
    {
        id: 312, name: "Topography Pattern", preview: (
            <div className="pt-312"></div>
        ),
        html: `<div class="Pattern"></div>`,
        css: `.Pattern {
    width: 100%;
    min-height: 300px;
    background-color: #042f2e;
    background-image:
        repeating-radial-gradient(circle at 20% 30%, transparent 0, transparent 14px, rgba(45, 212, 191, 0.12) 15px, rgba(45, 212, 191, 0.12) 16px),
        repeating-radial-gradient(circle at 80% 70%, transparent 0, transparent 18px, rgba(45, 212, 191, 0.1) 19px, rgba(45, 212, 191, 0.1) 20px);
    border-radius: 10px;
}`
    },
    {
        id: 313, name: "Plus Pattern", preview: (
            <div className="pt-313"></div>
        ),
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
}`
    },
    {
        id: 314, name: "Aurora Pattern", preview: (
            <div className="pt-314"></div>
        ),
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
}`
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
        ),
        html: `<div class="Tooltip-app">
    <div class="Tooltip-reference Tooltip-relative">
        <p class="Tooltip-main-title">
            Location
            <span class="Tooltip-hover-card">Paris</span>
            , France
        </p>
        <div class="Tooltip-card Tooltip-absolute">
            <div class="Tooltip-cloud"></div>
            <div class="Tooltip-cloud"></div>
            <div class="Tooltip-cloud"></div>
            <div class="Tooltip-cloud"></div>
            <div class="Tooltip-relative Tooltip-inner-card">
                <div class="Tooltip-bg-map"></div>
                <div class="Tooltip-location Tooltip-absolute"></div>
                <div class="Tooltip-elements">
                    <div class="Tooltip-description Tooltip-relative">
                        <div class="Tooltip-blur-item Tooltip-absolute"></div>
                        <span class="Tooltip-main-title">Paris</span>
                        <p class="Tooltip-second-title">France</p>
                    </div>
                    <div class="Tooltip-details"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.Tooltip-app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 200px;
    font-family: inherit;
}
.Tooltip-relative {
    position: relative;
}
.Tooltip-absolute {
    position: absolute;
}
.Tooltip-main-title {
    font-size: 1.1rem;
    color: #4e8e5b;
    font-weight: 600;
    margin: 0;
}
.Tooltip-second-title {
    font-size: 0.85em;
    color: #5e836b;
    font-weight: 500;
    margin: 0;
}
.Tooltip-hover-card {
    font-style: italic;
    color: #226630;
    cursor: pointer;
}
.Tooltip-card {
    top: -100px;
    left: 15%;
    transition: transform 0.3s cubic-bezier(0.74, -0.03, 0.05, 1.24);
    width: 160px;
    height: 95px;
    will-change: transform;
    transform-origin: 50% 100%;
    transform: scale(0);
    filter: blur(10px);
    background: white;
    border-radius: 18px;
    box-shadow: 0 0 0 2px #b0dbbf, 1px 4px 5px 4px #ededed54;
    padding: 2px;
    animation-duration: 0.3s;
    animation-delay: 0.1s;
    animation-fill-mode: both;
    overflow: hidden;
    z-index: 10;
}
.Tooltip-reference:has(.Tooltip-hover-card:hover) .Tooltip-card {
    transform: scale(1);
    animation-name: Tooltip-fadeIn;
}
@keyframes Tooltip-fadeIn {
    0% {
        filter: brightness(1) blur(10px);
    }
    10% {
        filter: brightness(1) blur(20px);
    }
    100% {
        filter: brightness(1) blur(0px);
    }
}
.Tooltip-inner-card {
    position: relative;
    border-radius: 16px;
    height: 100%;
    width: 100%;
    border: 2px solid #2d2d2d45;
    background: #daecdd;
    overflow: hidden;
}
.Tooltip-bg-map {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
    background-position: center;
    background-size: cover;
}
.Tooltip-location {
    background-color: #226630;
    top: 24%;
    z-index: 100;
    left: 60%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: 0 0 10px 7px #c1c1c180;
    border: 4px solid white;
    animation: Tooltip-pulse 3s infinite;
}
@keyframes Tooltip-pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(72, 72, 72, 0.7), 0 0 8px 5px #d9d9d980;
    }
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 8px rgba(72, 72, 72, 0), 0 0 8px 5px #d9d9d980;
    }
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(72, 72, 72, 0), 0 0 8px 5px #d9d9d980;
    }
}
.Tooltip-elements {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Tooltip-description {
    padding: 10px;
    z-index: 1;
}
.Tooltip-blur-item {
    left: 0;
    top: 0;
    min-width: 60px;
    filter: blur(10px);
    background: #daecdd;
    z-index: -1;
    height: 110%;
}
.Tooltip-details {
    flex: 1;
    background: #daecdd;
    filter: blur(6px);
    margin-bottom: -10%;
    margin-top: -12%;
    z-index: 1;
}
.Tooltip-cloud {
    z-index: 1;
    position: absolute;
    border-radius: 50%;
    animation-name: Tooltip-clouds;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
}
.Tooltip-cloud:nth-child(1) {
    animation-duration: 45s;
    height: 1em;
    width: 1.4em;
    top: 3.5em;
    left: 50%;
    filter: blur(2px) drop-shadow(7px 3px #ffffffae);
    background: linear-gradient(to top right, #ffffffae, #ffffffae);
}
.Tooltip-cloud:nth-child(2) {
    animation-duration: 30s;
    top: 5px;
    right: -10px;
    width: 65px;
    height: 25px;
    background: #ebebebdb;
    filter: blur(7px);
}
.Tooltip-cloud:nth-child(3) {
    animation-duration: 60s;
    top: 39px;
    right: 79px;
    width: 17px;
    height: 9px;
    background: #ffffff;
    filter: blur(2px);
}
.Tooltip-cloud:nth-child(4) {
    animation-duration: 40s;
    top: 71px;
    right: 79px;
    width: 17px;
    height: 6px;
    background: #ffffff;
    filter: blur(2px);
}
@keyframes Tooltip-clouds {
    from {
        transform: translateX(-100px);
    }
    to {
        transform: translateX(100px);
    }
}`
    },
    {
        id: 501, name: "Tooltip Top", preview: (
            <div className="tt-501">
                Hover me
                <span className="tt-501__tip">This is a tooltip</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">This is a tooltip</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s;
}
.Tooltip:hover {
    border-color: #7c3aed;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: #1e1e24;
    color: #e4e4e7;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.Tooltip__tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #1e1e24;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 502, name: "Tooltip Side", preview: (
            <div className="tt-502">
                Hover me
                <span className="tt-502__tip">Tooltip right</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Tooltip right</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #7c3aed;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
}
.Tooltip:hover {
    background: #6d28d9;
}
.Tooltip__tip {
    position: absolute;
    left: calc(100% + 12px);
    top: 50%;
    transform: translateY(-50%) scale(0.85);
    background: #09090b;
    color: #e4e4e7;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
.Tooltip__tip::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: #09090b;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateY(-50%) scale(1);
}`
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
        ),
        html: `<div class="Tooltip-container">
    <div class="Tooltip-hacker-container">
        <button class="Tooltip-hacker-btn">SYSTEM</button>
        <div data-text="SYSTEM OVERRIDE" class="Tooltip-hacker-tooltip">
            <span>SYSTEM OVERRIDE</span>
        </div>
    </div>
</div>`,
        css: `.Tooltip-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #00051f, #00010c);
    overflow: hidden;
    font-family: "Courier New", monospace;
    position: relative;
}
.Tooltip-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(0deg,
            rgba(0, 255, 153, 0.05),
            rgba(0, 255, 153, 0.05) 1px,
            transparent 1px,
            transparent 10px);
    opacity: 0.7;
    z-index: 0;
    animation: Tooltip-data-stream 4s infinite linear;
}
.Tooltip-hacker-container {
    position: relative;
    z-index: 1;
}
.Tooltip-hacker-btn {
    padding: 18px 40px;
    background: rgba(20, 20, 60, 0.9);
    color: #b3b3ff;
    border: 2px solid #4b4bff;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow:
        0 0 15px rgba(75, 75, 255, 0.3),
        inset 0 0 10px rgba(75, 75, 255, 0.2);
}
.Tooltip-hacker-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(75, 75, 255, 0.3),
            transparent);
    animation: Tooltip-terminal-swipe 3s infinite linear;
}
.Tooltip-hacker-btn:hover::before {
    animation: Tooltip-terminal-swipe 1s infinite linear;
}
.Tooltip-hacker-btn:hover {
    color: #ffffff;
    box-shadow:
        0 0 25px rgba(75, 75, 255, 0.7),
        0 0 40px rgba(75, 75, 255, 0.4);
    transform: scale(1.03);
}
.Tooltip-hacker-btn::after {
    content: "_";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #00ff99;
    font-size: 20px;
    animation: Tooltip-cursor-blink 0.8s infinite step-end;
}
.Tooltip-hacker-tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    background: rgba(10, 10, 40, 0.95);
    color: #b3b3ff;
    padding: 10px 20px;
    border: 1px solid #4b4bff;
    font-size: 16px;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(75, 75, 255, 0.3);
    z-index: 10;
}
.Tooltip-hacker-tooltip::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: #00ff99;
    opacity: 0.6;
    animation: Tooltip-typing-glitch 1.2s infinite steps(5);
    z-index: -1;
}
.Tooltip-hacker-tooltip::after {
    content: "";
    position: absolute;
    inset: -3px;
    border: 1px solid #4b4bff;
    opacity: 0.5;
    filter: blur(4px);
    animation: Tooltip-glow-pulse 2s infinite ease-in-out;
}
.Tooltip-hacker-tooltip span {
    position: relative;
}
.Tooltip-hacker-tooltip span::after {
    content: "$>";
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    color: #00ff99;
    font-size: 16px;
    text-shadow: 0 0 10px #00ff99;
    animation: Tooltip-prompt-flick 1s infinite alternate;
}
.Tooltip-hacker-container:hover .Tooltip-hacker-tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1);
    bottom: 130%;
}
@keyframes Tooltip-data-stream {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
}
@keyframes Tooltip-terminal-swipe {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}
@keyframes Tooltip-cursor-blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes Tooltip-typing-glitch {
    0% {
        clip-path: inset(0 100% 0 0);
    }
    20% {
        clip-path: inset(0 80% 0 0);
    }
    40% {
        clip-path: inset(0 60% 0 0);
    }
    60% {
        clip-path: inset(0 40% 0 0);
    }
    80% {
        clip-path: inset(0 20% 0 0);
    }
    100% {
        clip-path: inset(0 0 0 0);
    }
}
@keyframes Tooltip-glow-pulse {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.9;
    }
    100% {
        opacity: 0.5;
    }
}
@keyframes Tooltip-prompt-flick {
    0% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
}`
    },
    {
        id: 504, name: "tooltip", preview: (
            <div className="tt-504-tooltip">
                <div className="tt-504-icon">i</div>
                <div className="tt-504-tooltiptext">
                    This is a cool tooltip!
                </div>
            </div>
        ),
        html: `<div class="Tooltip">
    <div class="Tooltip-icon">i</div>
    <div class="Tooltip-tooltiptext">This is a cool tooltip!</div>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: Arial, sans-serif;
}
.Tooltip:hover .Tooltip-tooltiptext {
    visibility: visible;
    opacity: 1;
}
.Tooltip-tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
}
.Tooltip-tooltiptext::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
}
.Tooltip-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
}`
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
        ),
        html: `<div class="Tooltip-container">
    <span class="Tooltip-text">
        <i class="fa-solid fa-paper-plane"></i>
    </span>
    <span class="Tooltip-tooltip1">
        <i class="fa-brands fa-twitter"></i>
    </span>
    <span class="Tooltip-tooltip2">
        <i class="fa-brands fa-facebook"></i>
    </span>
    <span class="Tooltip-tooltip3">
        <i class="fa-brands fa-whatsapp"></i>
    </span>
    <span class="Tooltip-tooltip4">
        <i class="fa-brands fa-discord"></i>
    </span>
    <span class="Tooltip-tooltip9"></span>
</div>`,
        css: `.Tooltip-container {
    background: linear-gradient(138deg,
            rgba(3, 169, 244, 1) 15%,
            rgba(63, 180, 233, 1) 65%);
    position: relative;
    cursor: pointer;
    font-size: 17px;
    padding: 0.7em;
    border-radius: 50px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.Tooltip-container:hover {
    background: #fff;
    transition: all 0.6s;
}
.Tooltip-container .Tooltip-text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 22px;
    transition: all 0.2s;
}
.Tooltip-container:hover .Tooltip-text {
    color: rgb(19, 96, 234);
    transition: all 0.6s;
}
.Tooltip-tooltip1,
.Tooltip-tooltip2 {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    transition: 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(19, 96, 234);
    font-size: 20px;
}
.Tooltip-tooltip4 {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    transition: 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(114, 112, 149);
    font-size: 20px;
}
.Tooltip-tooltip3 {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    transition: 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(41, 185, 28);
    font-size: 20px;
}
.Tooltip-tooltip1 {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.Tooltip-container:hover .Tooltip-tooltip1 {
    top: 150%;
    opacity: 1;
    visibility: visible;
}
.Tooltip-tooltip2 {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.Tooltip-container:hover .Tooltip-tooltip2 {
    top: -120%;
    opacity: 1;
    visibility: visible;
}
.Tooltip-tooltip3 {
    top: 100%;
    left: 60%;
    transform: translateX(80%);
}
.Tooltip-container:hover .Tooltip-tooltip3 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    transform: translate(85%, -5px);
}
.Tooltip-tooltip4 {
    top: 100%;
    left: -190%;
    transform: translateX(70%);
}
.Tooltip-container:hover .Tooltip-tooltip4 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    transform: translate(70%, -5px);
}
.Tooltip-tooltip1:hover,
.Tooltip-tooltip2:hover,
.Tooltip-tooltip3:hover,
.Tooltip-tooltip4:hover {
    background: rgb(19, 96, 234);
    color: #fff;
}
.Tooltip-tooltip9 {
    position: absolute;
    top: 0;
    left: -115%;
    opacity: 0;
    visibility: hidden;
    width: 150px;
    height: 150px;
    z-index: -1;
}
.Tooltip-container:hover .Tooltip-tooltip9 {
    top: -110%;
    opacity: 1;
    visibility: visible;
    border-radius: 50%;
    z-index: -1;
}`
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
        html: `<div class="Tooltip">
    <button class="Tooltip-btn">
        <span class="Tooltip-icon">
            <i class="fa-brands fa-react"></i>
        </span>
        <span class="Tooltip-tooltip">Help?</span>
    </button>
</div>`,
        css: `.Tooltip {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Tooltip-btn {
    width: 4.5em;
    height: 2.5em;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    background: transparent;
}
.Tooltip-icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(156, 156, 156, 0.466);
    background: rgba(83, 69, 69, 0.562);
    color: white;
    transition: all 0.3s ease;
}
.Tooltip-icon i {
    font-size: 1.5rem;
}
.Tooltip-tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;
    color: transparent;
    background: white;
    filter: blur(4px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;
    z-index: 4;
}
.Tooltip-tooltip::before {
    content: "";
    position: absolute;
    bottom: -0.2em;
    left: 50%;
    width: 0.6em;
    height: 0.6em;
    background: white;
    transform: translateX(-50%) rotate(45deg);
    opacity: 0;
    transition: all 0.4s ease;
}
.Tooltip-btn:hover .Tooltip-tooltip {
    transform: translateX(-50%) translateY(-130%);
    color: black;
    filter: blur(0);
    opacity: 1;
}
.Tooltip-btn:hover .Tooltip-tooltip::before {
    opacity: 1;
}
.Tooltip-btn:hover .Tooltip-icon {
    background-color: rgba(156, 156, 156, 0.466);
    color: black;
}`
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
        html: `<div class="Tooltip">
    <div class="Tooltip-tooltip">
        <div class="Tooltip-profile">
            <div class="Tooltip-user">
                <div class="Tooltip-img">AB</div>
                <div class="Tooltip-details">
                    <div class="Tooltip-name">User</div>
                    <div class="Tooltip-username">@username</div>
                </div>
            </div>
            <div class="Tooltip-about">500+ Connections</div>
        </div>
    </div>
    <a href="#" class="Tooltip-icon">
        <div class="Tooltip-layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="Tooltip-discord">
                <i class="fa-brands fa-discord" style="color: rgb(19, 96, 234);"></i>
            </span>
        </div>
        <div class="Tooltip-text">Discord</div>
    </a>
</div>`,
        css: `.Tooltip {
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 17px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Tooltip-tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s ease;
    border-radius: 15px;
    box-shadow:
        inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 15px rgba(0, 0, 0, 0.3),
        -5px -5px 15px rgba(255, 255, 255, 0.1);
}
.Tooltip-profile {
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #5865f2;
    min-width: 220px;
}
.Tooltip:hover .Tooltip-tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}
.Tooltip-icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
}
.Tooltip-layer {
    width: 55px;
    height: 55px;
    position: relative;
    transition: transform 0.3s ease;
}
.Tooltip-icon:hover .Tooltip-layer {
    transform: rotate(-35deg) skew(20deg);
}
.Tooltip-layer span {
    position: absolute;
    inset: 0;
    border: 1px solid #5865f2;
    border-radius: 5px;
    transition: all 0.3s ease;
    color: #5865f2;
}
.Tooltip-icon:hover .Tooltip-layer span:nth-child(1) {
    opacity: 0.2;
}
.Tooltip-icon:hover .Tooltip-layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
}
.Tooltip-icon:hover .Tooltip-layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
}
.Tooltip-icon:hover .Tooltip-layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
}
.Tooltip-icon:hover .Tooltip-layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
}
.Tooltip-discord {
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Tooltip-text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    opacity: 0;
    font-weight: 500;
    color: #5865f2;
    transition:
        bottom 0.3s ease,
        opacity 0.3s ease;
}
.Tooltip-icon:hover .Tooltip-text {
    bottom: -35px;
    opacity: 1;
}
.Tooltip-user {
    display: flex;
    gap: 10px;
}
.Tooltip-img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #5865f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #5865f2;
}
.Tooltip-details {
    display: flex;
    flex-direction: column;
    color: #fff;
}
.Tooltip-name {
    font-size: 17px;
    font-weight: 700;
    color: #5865f2;
}
.Tooltip-username {
    font-size: 14px;
}
.Tooltip-about {
    color: #ccc;
    padding-top: 5px;
    font-size: 14px;
}`
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
        ),
        html: `<ul class="Tooltip-list">
    <li class="Tooltip-icon-content">
        <a href="https://www.spotify.com/" aria-label="Spotify" data-social="spotify" class="Tooltip-link">
            <i class="fa-brands fa-spotify" style="color: rgb(99, 230, 190);"></i>
        </a>
        <div class="Tooltip-tooltip">Spotify</div>
    </li>
    <li class="Tooltip-icon-content">
        <a href="https://www.pinterest.com/" aria-label="Pinterest" data-social="pinterest" class="Tooltip-link">
            <i class="fa-brands fa-pinterest" style="color: rgb(218, 78, 78);"></i>
        </a>
        <div class="Tooltip-tooltip">Pinterest</div>
    </li>
    <li class="Tooltip-icon-content">
        <a href="https://dribbble.com/" aria-label="Dribbble" data-social="dribbble" class="Tooltip-link">
            <i class="fa-brands fa-square-instagram" style="color: rgb(193, 12, 238);"></i>
        </a>
        <div class="Tooltip-tooltip">Instagram</div>
    </li>
    <li class="Tooltip-icon-content">
        <a href="https://telegram.org/" aria-label="Telegram" data-social="telegram" class="Tooltip-link">
            <i class="fa-solid fa-paper-plane" style="color: rgb(116, 192, 252);"></i>
        </a>
        <div class="Tooltip-tooltip">Telegram</div>
    </li>
</ul>`,
        css: `.Tooltip-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    background-color: #000;
    border-radius: 30px;
    padding: 20px;
    height: 70px;
    width: 300px;
    margin: 0;
    box-sizing: border-box;
}
.Tooltip-list *,
.Tooltip-list *::before,
.Tooltip-list *::after {
    box-sizing: border-box;
}
.Tooltip-list .Tooltip-icon-content {
    margin: 0 10px;
    position: relative;
    font-weight: bolder;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    font-weight: bolder;
    white-space: nowrap;
}
.Tooltip-list .Tooltip-icon-content:hover .Tooltip-tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
    transition: all 0.3s ease-in-out;
    font-weight: bolder;
    text-decoration: none;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link svg,
.Tooltip-list .Tooltip-icon-content .Tooltip-link i {
    width: auto;
    height: auto;
    font-size: 20px;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link[data-social="spotify"]:hover {
    color: #1db954;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link[data-social="pinterest"]:hover {
    color: #bd081c;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link[data-social="dribbble"]:hover {
    color: #ea4c89;
}
.Tooltip-list .Tooltip-icon-content .Tooltip-link[data-social="telegram"]:hover {
    color: #0088cc;
}`
    },
    {
        id: 509, name: "Tooltip Bottom", preview: (
            <div className="tt-509">
                Hover me
                <span className="tt-509__tip">Tooltip below</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Tooltip below</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1.5px solid #e5e5e5;
    color: #111;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.2s;
}
.Tooltip:hover {
    border-color: #111;
}
.Tooltip__tip {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: #111;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip__tip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: #111;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 510, name: "Tooltip Left", preview: (
            <div className="tt-510">
                Hover me
                <span className="tt-510__tip">Tooltip left</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Tooltip left</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fef3c7;
    border: 1px solid #fde68a;
    color: #92400e;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
}
.Tooltip:hover {
    background: #fde68a;
}
.Tooltip__tip {
    position: absolute;
    right: calc(100% + 12px);
    top: 50%;
    transform: translateY(-50%) scale(0.85);
    background: #92400e;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip__tip::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: #92400e;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateY(-50%) scale(1);
}`
    },
    {
        id: 511, name: "Rounded Pill Tooltip", preview: (
            <div className="tt-511">
                Hover me
                <span className="tt-511__tip">Pill-style tooltip</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Pill-style tooltip</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ecfdf5;
    border: 1px solid #a7f3d0;
    color: #065f46;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.2s;
}
.Tooltip:hover {
    background: #a7f3d0;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: #065f46;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 14px;
    border-radius: 999px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 512, name: "Underline Tooltip", preview: (
            <div className="tt-512">
                <span className="tt-512__text">Hover this text</span>
                <span className="tt-512__tip">Extra context here</span>
            </div>
        ),
        html: `<div class="Tooltip">
    <span class="Tooltip__text">Hover this text</span>
    <span class="Tooltip__tip">Extra context here</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-block;
    cursor: help;
    font-size: 14px;
}
.Tooltip__text {
    color: #6366f1;
    text-decoration: underline dotted;
    text-underline-offset: 3px;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: #1e1b4b;
    color: #e0e7ff;
    font-size: 12px;
    padding: 7px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}`
    },
    {
        id: 513, name: "Icon Info Tooltip", preview: (
            <div className="tt-513">
                <span className="tt-513__icon">?</span>
                <span className="tt-513__tip">Helpful information appears here</span>
            </div>
        ),
        html: `<div class="Tooltip">
    <span class="Tooltip__icon">?</span>
    <span class="Tooltip__tip">Helpful information appears here</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #e5e7eb;
    color: #374151;
    font-size: 12px;
    font-weight: 700;
    cursor: help;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    background: #374151;
    color: #fff;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 6px;
    width: 160px;
    text-align: center;
    line-height: 1.4;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip__tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #374151;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 514, name: "Gradient Tooltip", preview: (
            <div className="tt-514">
                Hover me
                <span className="tt-514__tip">Fancy gradient tip</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Fancy gradient tip</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #18181b;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 7px 14px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    box-shadow: 0 6px 16px rgba(124, 58, 237, 0.4);
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 515, name: "Click Tooltip", preview: (
            <label className="tt-515">
                <input type="checkbox" className="tt-515__toggle" />
                Click me
                <span className="tt-515__tip">Pinned until clicked again</span>
            </label>
        ),
        html: `<label class="Tooltip">
    <input type="checkbox" class="Tooltip__toggle" />
    Click me
    <span class="Tooltip__tip">Pinned until clicked again</span>
</label>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    color: #075985;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
}
.Tooltip__toggle {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: #075985;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip__toggle:checked~.Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
    {
        id: 516, name: "Multiline Tooltip", preview: (
            <div className="tt-516">
                Hover me
                <span className="tt-516__tip">
                    First line of info.
                    <br />
                    Second supporting line.
                </span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">
        First line of info.
        <br />
        Second supporting line.
    </span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #e5e5e5;
    color: #111;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 22px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.Tooltip__tip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: #1f2937;
    color: #f3f4f6;
    font-size: 12px;
    line-height: 1.5;
    padding: 10px 14px;
    border-radius: 8px;
    width: 180px;
    text-align: left;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}`
    },
    {
        id: 517, name: "Dark Outline Tooltip", preview: (
            <div className="tt-517">
                Hover me
                <span className="tt-517__tip">Outlined dark tooltip</span>
            </div>
        ),
        html: `<div class="Tooltip">
    Hover me
    <span class="Tooltip__tip">Outlined dark tooltip</span>
</div>`,
        css: `.Tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1.5px solid #18181b;
    color: #18181b;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}
.Tooltip:hover {
    background: #18181b;
    color: #fff;
}
.Tooltip__tip {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) scale(0.85);
    background: #fff;
    color: #18181b;
    border: 1.5px solid #18181b;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
}
.Tooltip:hover .Tooltip__tip {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}`
    },
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">MyApp</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Projects</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Sign in</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    font-family: inherit;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">Features</a>
        <a href="#" class="Navbar__link">Pricing</a>
        <a href="#" class="Navbar__link">Blog</a>
    </nav>
    <div class="Navbar__actions">
        <a href="#" class="Navbar__login">Log in</a>
        <button class="Navbar__btn">Get started</button>
    </div>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Navbar__login {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 13px;
    transition: color 0.15s;
}
.Navbar__login:hover {
    color: #fff;
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__inner">
        <div class="Navbar__logo">Logo</div>
        <nav class="Navbar__nav">
            <a href="#" class="Navbar__link Navbar__link--active">Home</a>
            <a href="#" class="Navbar__link">Work</a>
            <a href="#" class="Navbar__link">About</a>
            <a href="#" class="Navbar__link">Contact</a>
        </nav>
    </div>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    padding: 8px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-sizing: border-box;
}
.Navbar__inner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 6px 14px;
    border-radius: 999px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Studio</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Portfolio</a>
        <a href="#" class="Navbar__link">Services</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Hire me</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
    border-radius: 10px;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #888;
    text-decoration: none;
    font-size: 13px;
    padding: 6px 10px;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
}
.Navbar__link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #111;
    transition: width 0.2s;
}
.Navbar__link:hover {
    color: #111;
}
.Navbar__link:hover::after {
    width: 100%;
}
.Navbar__link--active {
    color: #111;
}
.Navbar__link--active::after {
    width: 100%;
}
.Navbar__btn {
    background: #111;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #333;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Glass</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Work</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <button class="Navbar__btn">Sign up</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
}
.Navbar__btn {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: rgba(255, 255, 255, 0.25);
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Minimal</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link">Home</a>
        <a href="#" class="Navbar__link">About</a>
        <a href="#" class="Navbar__link">Work</a>
        <a href="#" class="Navbar__link">Contact</a>
    </nav>
    <div class="Navbar__dot"></div>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
}
.Navbar__link {
    color: #52525b;
    text-decoration: none;
    font-size: 13px;
    padding: 4px 10px;
    transition: color 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7c3aed;
    flex-shrink: 0;
}`
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
        ),
        html: `<div class="Navbar">
    <nav class="Navbar-modern">
        <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</div>`,
        css: `.Navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background: #0f172a;
}
.Navbar .Navbar-modern {
    position: relative;
    padding: 14px 24px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 60px;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}
.Navbar .Navbar-modern ul {
    display: flex;
    align-items: center;
    gap: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.Navbar .Navbar-modern ul li {
    position: relative;
}
.Navbar .Navbar-modern ul li a {
    position: relative;
    display: block;
    padding: 12px 26px;
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-radius: 40px;
    transition: 0.3s ease;
    z-index: 1;
}
.Navbar .Navbar-modern ul li.active a {
    background: linear-gradient(135deg, #38bdf8, #22d3ee);
    color: #fff;
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
}
.Navbar .Navbar-modern ul li a:hover {
    background: rgba(255, 255, 255, 0.08);
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Sign up</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: linear-gradient(135deg, #1e1b4b, #18181b);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #a1a1aa;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(99, 102, 241, 0.2);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(99, 102, 241, 0.25);
}
.Navbar__btn {
    background: #6366f1;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #4f46e5;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Logo</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border-bottom: 2px solid #7c3aed;
    border-radius: 10px 10px 0 0;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    transition: color 0.15s;
    white-space: nowrap;
    position: relative;
}
.Navbar__link::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7c3aed;
    transition: width 0.2s;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__link:hover::after {
    width: 100%;
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__link--active::after {
    width: 100%;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">MyApp</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Contact</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #7c3aed;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
}
.Navbar__btn {
    background: #fff;
    color: #7c3aed;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    opacity: 0.9;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Studio</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Login</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
}
.Navbar__link--active {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.05);
}
.Navbar__btn {
    background: transparent;
    color: #a1a1aa;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Light</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Get started</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #888;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #111;
    background: #f5f5f5;
}
.Navbar__link--active {
    color: #111;
    background: #f0f0f0;
    font-weight: 500;
}
.Navbar__btn {
    background: #111;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #333;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Round</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Sign in</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    padding: 0 4px;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}
.Navbar__btn {
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    background: #6d28d9;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Neon</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #030305;
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 10px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.05);
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #00ff88;
    white-space: nowrap;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #3a3a4a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #00ff88;
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
}
.Navbar__link--active {
    color: #00ff88;
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
}`
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
        ),
        html: `<div class="Navbar">
    <nav class="Navbar__left">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
    </nav>
    <div class="Navbar__logo">Brand</div>
    <nav class="Navbar__right">
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__left,
.Navbar__right {
    display: flex;
    align-items: center;
    gap: 2px;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">App</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
        css: `.Navbar {
    width: 160px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    padding: 0 8px;
    margin-bottom: 8px;
}
.Navbar__nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 13px;
    padding: 7px 10px;
    border-radius: 7px;
    transition: all 0.15s;
    white-space: nowrap;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    font-weight: 500;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Badge</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active">Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2 <span class="Navbar__badge">New</span></a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #09090b;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    border-radius: 10px;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 4px;
}
.Navbar__link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__badge {
    background: #7c3aed;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 999px;
}`
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
        ),
        html: `<div class="Navbar">
    <div class="Navbar__logo">Dots</div>
    <nav class="Navbar__nav">
        <a href="#" class="Navbar__link Navbar__link--active"><span class="Navbar__dot"></span>Home</a>
        <a href="#" class="Navbar__link">Pagina 1</a>
        <a href="#" class="Navbar__link">Pagina 2</a>
        <a href="#" class="Navbar__link">Pagina 3</a>
        <a href="#" class="Navbar__link">Pagina 4</a>
        <a href="#" class="Navbar__link">Pagina 5</a>
    </nav>
    <button class="Navbar__btn">Login</button>
</div>`,
        css: `.Navbar {
    width: 100%;
    max-width: 560px;
    background: #18181b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.Navbar__logo {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}
.Navbar__nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}
.Navbar__link {
    color: #71717a;
    text-decoration: none;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
}
.Navbar__link:hover {
    color: #fff;
}
.Navbar__link--active {
    color: #fff;
}
.Navbar__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #7c3aed;
    flex-shrink: 0;
}
.Navbar__btn {
    background: transparent;
    color: #a1a1aa;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: inherit;
    white-space: nowrap;
}
.Navbar__btn:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
}`
    },
];













































































export const logins = [
    {
        id: 731,
        name: "Simple Login",
        preview: (
            <div className="login-731">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login h2 {
    margin: 0 0 4px;
    font-size: 24px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}`
    },
    {
        id: 732,
        name: "Outline Login",
        preview: (
            <div className="login-732">
                <h2>Welcome back</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign in</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Welcome back</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign in</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #71717a;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: 1px solid #2563eb;
    background: transparent;
    color: #2563eb;
    border-radius: 8px;
}`
    },
    {
        id: 733,
        name: "Purple Login",
        preview: (
            <div className="login-733">
                <h2>Sign In</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign In</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #7c3aed;
    color: white;
}`
    },
    {
        id: 734,
        name: "Gradient Login",
        preview: (
            <div className="login-734">
                <h2>Welcome</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Continue</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Welcome</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Continue</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #f4f4f5;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
}`
    },
    {
        id: 735,
        name: "Dark Login",
        preview: (
            <div className="login-735">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    background: #18181b;
    color: white;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #27272a;
    color: white;
}`
    },
    {
        id: 736,
        name: "Green Login",
        preview: (
            <div className="login-736">
                <h2>Sign In</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign In</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #16a34a;
    color: white;
}`
    },
    {
        id: 737,
        name: "Rounded Login",
        preview: (
            <div className="login-737">
                <h2>Account Login</h2>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Account Login</h2>
    <input type="email" placeholder="Email address">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 11px 14px;
    border: 1px solid #d4d4d8;
    border-radius: 999px;
}
.Login button {
    padding: 11px;
    border: none;
    border-radius: 999px;
    background: #2563eb;
    color: white;
}`
    },
    {
        id: 738,
        name: "Minimal Login",
        preview: (
            <div className="login-738">
                <h2>Sign in</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Continue</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Sign in</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Continue</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #a1a1aa;
    outline: none;
}
.Login button {
    padding: 10px;
    border: none;
    background: #18181b;
    color: white;
    border-radius: 6px;
}`
    },
    {
        id: 739,
        name: "Blue Login",
        preview: (
            <div className="login-739">
                <h2>Welcome back</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Welcome back</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: 1px solid #93c5fd;
    border-radius: 8px;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #0284c7;
    color: white;
}`
    },
    {
        id: 740,
        name: "Soft Login",
        preview: (
            <div className="login-740">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign in</button>
            </div>
        ),
        html: `<div class="Login">
    <h2>Login</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign in</button>
</div>`,
        css: `.Login {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 260px;
}
.Login input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #f4f4f5;
}
.Login button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: #334155;
    color: white;
}`
    }
];








export const allComponents = [...buttons, ...checkboxes, ...toggles, ...cards, ...loaders, ...inputs, ...radiobuttons, ...forms, ...patterns, ...tooltips, ...navbar, ...logins];








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





