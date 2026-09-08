import "../pages/All.css";

export const tooltips = [
  {
    id: 500,
    name: "Location Tooltip",
    preview: (
      <div className="tt-500-app">
        <div className="tt-500-reference tt-500-relative">
          <p className="tt-500-main-title">
            Location <span className="tt-500-hover-card">Paris</span>,
            France{" "}
          </p>
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
}`,
  },
  {
    id: 501,
    name: "Tooltip Top",
    preview: (
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
}`,
  },
  {
    id: 502,
    name: "Tooltip Side",
    preview: (
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
}`,
  },
  {
    id: 503,
    name: "tooltip",
    preview: (
      <div className="tt-503-container">
        <div className="tt-503-hacker-container">
          <button className="tt-503-hacker-btn">SYSTEM</button>
          <div data-text="SYSTEM OVERRIDE" className="tt-503-hacker-tooltip">
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
}`,
  },
  {
    id: 504,
    name: "tooltip",
    preview: (
      <div className="tt-504-tooltip">
        <div className="tt-504-icon">i</div>
        <div className="tt-504-tooltiptext">This is a cool tooltip!</div>
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
}`,
  },
  {
    id: 505,
    name: "tooltip",
    preview: (
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
}`,
  },
  {
    id: 506,
    name: "tooltip",
    preview: (
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
}`,
  },
  {
    id: 507,
    name: "tooltip",
    preview: (
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
              <i
                className="fa-brands fa-discord"
                style={{ color: "rgb(19, 96, 234)" }}
              ></i>{" "}
            </span>
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
}`,
  },
  {
    id: 508,
    name: "tooltip",
    preview: (
      <ul className="tt-508-example-1">
        <li className="tt-508-icon-content">
          <a
            href="https://www.spotify.com/"
            aria-label="Spotify"
            data-social="spotify"
            className="tt-508-link"
          >
            <i
              className="fa-brands fa-spotify"
              style={{ color: "rgb(99, 230, 190)" }}
            ></i>
          </a>
          <div className="tt-508-tooltip">Spotify</div>
        </li>
        <li className="tt-508-icon-content">
          <a
            href="https://www.pinterest.com/"
            aria-label="Pinterest"
            data-social="pinterest"
            className="tt-508-link"
          >
            <i
              className="fa-brands fa-pinterest"
              style={{ color: "rgb(218, 78, 78)" }}
            ></i>
          </a>
          <div className="tt-508-tooltip">Pinterest</div>
        </li>
        <li className="tt-508-icon-content">
          <a
            href="https://dribbble.com/"
            aria-label="Dribbble"
            data-social="dribbble"
            className="tt-508-link"
          >
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "rgb(193, 12, 238)" }}
            ></i>
          </a>
          <div className="tt-508-tooltip">Instagram</div>
        </li>
        <li className="tt-508-icon-content">
          <a
            href="https://telegram.org/"
            aria-label="Telegram"
            data-social="telegram"
            className="tt-508-link"
          >
            <i
              className="fa-solid fa-paper-plane"
              style={{ color: "rgb(116, 192, 252)" }}
            ></i>
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
}`,
  },
  {
    id: 509,
    name: "Tooltip Bottom",
    preview: (
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
}`,
  },
  {
    id: 510,
    name: "Tooltip Left",
    preview: (
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
}`,
  },
  {
    id: 511,
    name: "Rounded Pill Tooltip",
    preview: (
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
}`,
  },
  {
    id: 512,
    name: "Underline Tooltip",
    preview: (
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
}`,
  },
  {
    id: 513,
    name: "Icon Info Tooltip",
    preview: (
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
}`,
  },
  {
    id: 514,
    name: "Gradient Tooltip",
    preview: (
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
}`,
  },
  {
    id: 515,
    name: "Click Tooltip",
    preview: (
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
}`,
  },
  {
    id: 516,
    name: "Multiline Tooltip",
    preview: (
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
}`,
  },
  {
    id: 517,
    name: "Dark Outline Tooltip",
    preview: (
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
}`,
  },

  {
    id: 2001,
    name: "Dark Info Tooltip",
    preview: (
      <div className="tooltip-2001">
        <button>
          <i className="fa-solid fa-circle-info"></i>
        </button>
        <div className="tooltip-2001__content">
          <strong>Helpful information</strong>
          <span>Everything you need to know.</span>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-circle-info"></i>
    </button>
    <div class="Tooltip-content">
        <strong>Helpful information</strong>
        <span>Everything you need to know.</span>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 32px;
    height: 32px;
    border: 1px solid #3f3f46;
    border-radius: 50%;
    background: #18181b;
    color: #a1a1aa;
    cursor: pointer;
}
.Tooltip-content {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 9px);
    transform: translateX(-50%) translateY(5px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 160px;
    padding: 10px 12px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    background: #09090b;
    color: #fff;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip-content strong {
    font-size: 11px;
}
.Tooltip-content span {
    color: #a1a1aa;
    font-size: 9px;
}
.Tooltip:hover .Tooltip-content {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}`,
  },
  {
    id: 2002,
    name: "Neon Cyan Tooltip",
    preview: (
      <div className="tooltip-2002">
        <button>
          <i className="fa-solid fa-bolt"></i>
        </button>
        <span>Power mode enabled</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-bolt"></i>
    </button>
    <span>Power mode enabled</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #22d3ee;
    border-radius: 9px;
    background: #03131a;
    color: #67e8f9;
    box-shadow: 0 0 12px rgba(34,211,238,.2);
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    padding: 7px 10px;
    border: 1px solid #22d3ee;
    border-radius: 7px;
    background: #020617;
    color: #67e8f9;
    white-space: nowrap;
    font-family: monospace;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 0 16px rgba(34,211,238,.2);
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2003,
    name: "Glass Tooltip",
    preview: (
      <div className="tooltip-2003">
        <button>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
        <div>
          <strong>Magic</strong>
          <span>Something special is here.</span>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </button>
    <div>
        <strong>Magic</strong>
        <span>Something special is here.</span>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 10px;
    background: rgba(255,255,255,.08);
    backdrop-filter: blur(12px);
    color: #f0abfc;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 145px;
    padding: 9px 11px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 10px;
    background: rgba(20,20,30,.72);
    backdrop-filter: blur(16px);
    color: #fff;
    opacity: 0;
    pointer-events: none;
    transition: .22s ease;
}
.Tooltip strong {
    font-size: 10px;
}
.Tooltip span {
    color: #cbd5e1;
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2004,
    name: "Success Tooltip",
    preview: (
      <div className="tooltip-2004">
        <button>
          <i className="fa-solid fa-check"></i>
        </button>
        <span>Changes saved successfully</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-check"></i>
    </button>
    <span>Changes saved successfully</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #22c55e;
    border-radius: 50%;
    background: #052e16;
    color: #4ade80;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 9px);
    transform: translate(-50%,5px);
    padding: 7px 10px;
    border-radius: 7px;
    background: #052e16;
    color: #86efac;
    white-space: nowrap;
    font-size: 8px;
    box-shadow: 0 0 15px rgba(34,197,94,.18);
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2005,
    name: "Warning Tooltip",
    preview: (
      <div className="tooltip-2005">
        <button>
          <i className="fa-solid fa-triangle-exclamation"></i>
        </button>
        <span>This action cannot be undone</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-triangle-exclamation"></i>
    </button>
    <span>This action cannot be undone</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #f59e0b;
    border-radius: 8px;
    background: #1c1003;
    color: #fbbf24;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 9px);
    transform: translate(-50%,6px);
    padding: 7px 10px;
    border: 1px solid #92400e;
    border-radius: 7px;
    background: #1c1003;
    color: #fde68a;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2006,
    name: "Purple Gradient Tooltip",
    preview: (
      <div className="tooltip-2006">
        <button>
          <i className="fa-solid fa-star"></i>
        </button>
        <div>Premium feature</div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-star"></i>
    </button>
    <div>Premium feature</div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg,#7c3aed,#ec4899);
    color: #fff;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,8px) scale(.96);
    padding: 7px 11px;
    border-radius: 8px;
    background: linear-gradient(90deg,#7c3aed,#ec4899);
    color: #fff;
    white-space: nowrap;
    font-size: 8px;
    font-weight: 700;
    box-shadow: 0 8px 20px rgba(124,58,237,.25);
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0) scale(1);
}`,
  },
  {
    id: 2007,
    name: "Bottom Tooltip",
    preview: (
      <div className="tooltip-2007">
        <button>
          <i className="fa-solid fa-comment"></i>
        </button>
        <span>Leave a comment</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-comment"></i>
    </button>
    <span>Leave a comment</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fff;
    color: #52525b;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    top: calc(100% + 9px);
    left: 50%;
    transform: translate(-50%,-5px);
    padding: 7px 10px;
    border-radius: 7px;
    background: #18181b;
    color: #fff;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2008,
    name: "Left Side Tooltip",
    preview: (
      <div className="tooltip-2008">
        <button>
          <i className="fa-solid fa-question"></i>
        </button>
        <span>Need help?</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-question"></i>
    </button>
    <span>Need help?</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #d4d4d8;
    border-radius: 50%;
    background: #f8fafc;
    color: #475569;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    top: 50%;
    right: calc(100% + 9px);
    transform: translateY(-50%) translateX(5px);
    padding: 7px 10px;
    border-radius: 7px;
    background: #0f172a;
    color: #fff;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
}`,
  },
  {
    id: 2009,
    name: "Right Side Tooltip",
    preview: (
      <div className="tooltip-2009">
        <button>
          <i className="fa-solid fa-circle-info"></i>
        </button>
        <span>More details available</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-circle-info"></i>
    </button>
    <span>More details available</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: #f8fafc;
    color: #2563eb;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    top: 50%;
    left: calc(100% + 9px);
    transform: translateY(-50%) translateX(-5px);
    padding: 7px 10px;
    border-radius: 7px;
    background: #1e3a8a;
    color: #dbeafe;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
}`,
  },
  {
    id: 2010,
    name: "Neon Rainbow Tooltip",
    preview: (
      <div className="tooltip-2010">
        <button>
          <i className="fa-solid fa-rainbow"></i>
        </button>
        <div>Legendary status</div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-rainbow"></i>
    </button>
    <div>Legendary status</div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 36px;
    height: 36px;
    border: 1px solid transparent;
    border-radius: 50%;
    background: linear-gradient(#09090b,#09090b) padding-box,linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #67e8f9;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    padding: 7px 11px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: linear-gradient(#09090b,#09090b) padding-box,linear-gradient(90deg,#22d3ee,#6366f1,#ec4899,#f97316) border-box;
    color: #fff;
    white-space: nowrap;
    font-size: 8px;
    font-weight: 800;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
    box-shadow: 0 0 18px rgba(139,92,246,.2);
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2011,
    name: "Cyber Tooltip",
    preview: (
      <div className="tooltip-2011">
        <button>
          <i className="fa-solid fa-microchip"></i>
        </button>
        <div>
          <span>SYSTEM</span>
          <strong>CONNECTED</strong>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-microchip"></i>
    </button>
    <div>
        <span>SYSTEM</span>
        <strong>CONNECTED</strong>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 36px;
    height: 36px;
    border: 1px solid #22d3ee;
    background: #020617;
    color: #67e8f9;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,7px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 11px;
    border: 1px solid #22d3ee;
    background: #020617;
    color: #67e8f9;
    font-family: monospace;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip > div::before {
    content: "";
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(34,211,238,.15);
}
.Tooltip span,
.Tooltip strong {
    position: relative;
}
.Tooltip span {
    color: #64748b;
    font-size: 6px;
}
.Tooltip strong {
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2012,
    name: "User Profile Tooltip",
    preview: (
      <div className="tooltip-2012">
        <button className="tooltip-2012__avatar">A</button>
        <div>
          <strong>André</strong>
          <span>Software Developer</span>
          <small>Online now</small>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button class="Tooltip-avatar">A</button>
    <div>
        <strong>André</strong>
        <span>Software Developer</span>
        <small>Online now</small>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip-avatar {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg,#6366f1,#ec4899);
    color: #fff;
    font-weight: 900;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 155px;
    padding: 10px 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 10px 30px rgba(15,23,42,.12);
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip strong {
    color: #111827;
    font-size: 11px;
}
.Tooltip span {
    color: #6b7280;
    font-size: 9px;
}
.Tooltip small {
    color: #16a34a;
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2013,
    name: "Keyboard Shortcut Tooltip",
    preview: (
      <div className="tooltip-2013">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <div>
          <span>Search</span>
          <kbd>Ctrl</kbd>
          <b>+</b>
          <kbd>K</kbd>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <div>
        <span>Search</span>
        <kbd>Ctrl</kbd>
        <b>+</b>
        <kbd>K</kbd>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 35px;
    height: 35px;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    background: #fff;
    color: #52525b;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 9px;
    border: 1px solid #27272a;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip span {
    margin-right: 3px;
    font-size: 8px;
}
.Tooltip kbd {
    padding: 2px 5px;
    border: 1px solid #52525b;
    border-radius: 4px;
    background: #27272a;
    font-size: 7px;
}
.Tooltip b {
    color: #71717a;
    font-size: 7px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2014,
    name: "Loading Tooltip",
    preview: (
      <div className="tooltip-2014">
        <button>
          <i className="fa-solid fa-spinner"></i>
        </button>
        <span>Processing request...</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-spinner"></i>
    </button>
    <span>Processing request...</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 35px;
    height: 35px;
    border: 1px solid #6366f1;
    border-radius: 8px;
    background: #eef2ff;
    color: #6366f1;
    cursor: pointer;
}
.Tooltip button i {
    animation: spin-2014 1s linear infinite;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    padding: 7px 10px;
    border-radius: 7px;
    background: #312e81;
    color: #e0e7ff;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}
@keyframes spin-2014 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 2015,
    name: "Command Tooltip",
    preview: (
      <div className="tooltip-2015">
        <button>
          <i className="fa-solid fa-terminal"></i>
        </button>
        <div>
          <span>COMMAND</span>
          <strong>Deploy project</strong>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-terminal"></i>
    </button>
    <div>
        <span>COMMAND</span>
        <strong>Deploy project</strong>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 35px;
    height: 35px;
    border: 1px solid #27272a;
    border-radius: 7px;
    background: #09090b;
    color: #4ade80;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 10px;
    border: 1px solid #27272a;
    background: #09090b;
    color: #fff;
    font-family: monospace;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip span {
    color: #4ade80;
    font-size: 6px;
}
.Tooltip strong {
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2016,
    name: "Premium Gold Tooltip",
    preview: (
      <div className="tooltip-2016">
        <button>
          <i className="fa-solid fa-crown"></i>
        </button>
        <div>Premium feature unlocked</div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-crown"></i>
    </button>
    <div>Premium feature unlocked</div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 36px;
    height: 36px;
    border: 1px solid #a16207;
    border-radius: 50%;
    background: #0b0905;
    color: #facc15;
    box-shadow: 0 0 12px rgba(250,204,21,.12);
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    padding: 7px 11px;
    border: 1px solid #a16207;
    background: #0b0905;
    color: #fde68a;
    white-space: nowrap;
    font-family: Georgia,serif;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2017,
    name: "Action Tooltip",
    preview: (
      <div className="tooltip-2017">
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
        <div>
          <strong>Delete</strong>
          <span>Remove this item permanently</span>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-trash"></i>
    </button>
    <div>
        <strong>Delete</strong>
        <span>Remove this item permanently</span>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 35px;
    height: 35px;
    border: 1px solid #fecaca;
    border-radius: 8px;
    background: #fff1f2;
    color: #dc2626;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 9px);
    transform: translate(-50%,6px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 155px;
    padding: 9px 11px;
    border: 1px solid #fecaca;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 10px 25px rgba(127,29,29,.1);
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip strong {
    color: #991b1b;
    font-size: 10px;
}
.Tooltip span {
    color: #78716c;
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2018,
    name: "Gradient Status Tooltip",
    preview: (
      <div className="tooltip-2018">
        <button>
          <i className="fa-solid fa-signal"></i>
        </button>
        <span>Server latency: 24ms</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-signal"></i>
    </button>
    <span>Server latency: 24ms</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg,#06b6d4,#6366f1);
    color: #fff;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    padding: 7px 11px;
    border-radius: 8px;
    background: linear-gradient(135deg,#0f172a,#312e81);
    color: #e0e7ff;
    white-space: nowrap;
    font-size: 8px;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2019,
    name: "Minimal Monochrome Tooltip",
    preview: (
      <div className="tooltip-2019">
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <span>More options</span>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-ellipsis"></i>
    </button>
    <span>More options</span>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 34px;
    height: 34px;
    border: 2px solid #111;
    background: #fff;
    color: #111;
    cursor: pointer;
}
.Tooltip span {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translate(-50%,5px);
    padding: 6px 9px;
    border: 2px solid #111;
    background: #111;
    color: #fff;
    white-space: nowrap;
    font-size: 8px;
    font-weight: 800;
    opacity: 0;
    pointer-events: none;
    transition: .15s ease;
}
.Tooltip:hover span {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
  {
    id: 2020,
    name: "Organic Soft Tooltip",
    preview: (
      <div className="tooltip-2020">
        <button>
          <i className="fa-solid fa-leaf"></i>
        </button>
        <div>
          <strong>Calm space</strong>
          <span>A softer experience starts here.</span>
        </div>
      </div>
    ),
    html: `<div class="Tooltip">
    <button>
        <i class="fa-solid fa-leaf"></i>
    </button>
    <div>
        <strong>Calm space</strong>
        <span>A softer experience starts here.</span>
    </div>
</div>`,
    css: `.Tooltip {
    position: relative;
    display: inline-flex;
}
.Tooltip button {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 14px;
    background: #ecfdf5;
    color: #16a34a;
    box-shadow: 5px 5px 12px rgba(22,163,74,.08),-5px -5px 12px #fff;
    cursor: pointer;
}
.Tooltip > div {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translate(-50%,6px);
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 155px;
    padding: 10px 12px;
    border-radius: 14px;
    background: #ecfdf5;
    color: #14532d;
    box-shadow: 7px 7px 16px rgba(22,163,74,.08),-7px -7px 16px #fff;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease;
}
.Tooltip strong {
    font-size: 10px;
}
.Tooltip span {
    color: #4d7c5d;
    font-size: 8px;
}
.Tooltip:hover > div {
    opacity: 1;
    transform: translate(-50%,0);
}`,
  },
];
