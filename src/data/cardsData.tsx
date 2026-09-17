import "../pages/All.css";

export const cards = [
  {
    id: 7,
    name: "Profile Card",
    preview: (
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
}`,
  },
  {
    id: 8,
    name: "Pricing Card",
    preview: (
      <div className="prev-pricing">
        <div className="prev-pricing-label">Pro</div>
        <div className="prev-pricing-price">
          $9<span>/mo</span>
        </div>
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
}`,
  },
  {
    id: 110,
    name: "Rotating Border",
    preview: (
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
}`,
  },
  {
    id: 111,
    name: "Neumorphism",
    preview: <div className="card-111"></div>,
    html: `<div class="Card"></div>`,
    css: `.Card {
    border-radius: 30px;
    background: #e0e0e0;
    width: 140px;
    height: 190px;
}`,
  },
  {
    id: 112,
    name: "Glassmorphism",
    preview: <div className="card-112">Click me</div>,
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
}`,
  },
  {
    id: 113,
    name: "Flip Card",
    preview: (
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
}`,
  },
  {
    id: 114,
    name: "Gradient Border",
    preview: (
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
}`,
  },
  {
    id: 115,
    name: "Blob Card",
    preview: (
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
}`,
  },
  {
    id: 116,
    name: "Dark Neumorphism",
    preview: <div className="card-116"></div>,
    html: `<div class="Card"></div>`,
    css: `.Card {
    width: 140px;
    height: 190px;
    border-radius: 30px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
}`,
  },
  {
    id: 117,
    name: "Gradient Glow",
    preview: (
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
}`,
  },
  {
    id: 118,
    name: "Corner Expand",
    preview: <div className="card-118">HOVER</div>,
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
}`,
  },
  {
    id: 119,
    name: "Flip Card 2",
    preview: (
      <div className="card-119">
        <div className="card-119-inner">
          <div className="card-119-front">
            <p>Front Side</p>
          </div>
          <div className="card-119-back">
            <p>Back Side</p>
          </div>
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
}`,
  },
  {
    id: 120,
    name: "Mac Window",
    preview: (
      <div className="card-120">
        <div className="card-120-tools">
          <div className="card-120-circle">
            <span className="card-120-box card-120-red"></span>
          </div>
          <div className="card-120-circle">
            <span className="card-120-box card-120-yellow"></span>
          </div>
          <div className="card-120-circle">
            <span className="card-120-box card-120-green"></span>
          </div>
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
}`,
  },
  {
    id: 121,
    name: "Image Reveal",
    preview: (
      <div className="card-121">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div className="card-121-content">
          <p className="card-121-title">Card Title</p>
          <p className="card-121-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
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
}`,
  },
  {
    id: 122,
    name: "Card-122",
    preview: (
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
}`,
  },
  {
    id: 123,
    name: "Card-123",
    preview: (
      <div className="cd-123">
        <div className="cd-123__palette">
          <div className="cd-123__color">
            <span>264653</span>
          </div>
          <div className="cd-123__color">
            <span>2A9D8F</span>
          </div>
          <div className="cd-123__color">
            <span>E9C46A</span>
          </div>
          <div className="cd-123__color">
            <span>F4A261</span>
          </div>
          <div className="cd-123__color">
            <span>E76F51</span>
          </div>
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
}`,
  },
  {
    id: 124,
    name: "Card-124",
    preview: (
      <div className="cd-124">
        <div className="cd-124__tools">
          <div className="cd-124__circle">
            <span className="cd-124__red cd-124__box"></span>
          </div>
          <div className="cd-124__circle">
            <span className="cd-124__yellow cd-124__box"></span>
          </div>
          <div className="cd-124__circle">
            <span className="cd-124__green cd-124__box"></span>
          </div>
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
}`,
  },
  {
    id: 125,
    name: "Card-125",
    preview: (
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
}`,
  },
  {
    id: 126,
    name: "Card-126",
    preview: (
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
}`,
  },
  {
    id: 127,
    name: "Card-127",
    preview: (
      <div className="cd-127">
        <div className="cd-127__avatar">A</div>
        <div className="cd-127__info">
          <div className="cd-127__name">Andre</div>
          <div className="cd-127__role">Frontend Developer</div>
        </div>
        <div className="cd-127__stats">
          <div className="cd-127__stat">
            <span>142</span>
            <small>Projects</small>
          </div>
          <div className="cd-127__stat">
            <span>8.4k</span>
            <small>Followers</small>
          </div>
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
}`,
  },
  {
    id: 128,
    name: "Card-128",
    preview: (
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
}`,
  },
  {
    id: 129,
    name: "Card-129",
    preview: (
      <div className="cd-129">
        <div className="cd-129__top" />
        <div className="cd-129__content">
          <div className="cd-129__title">Product Design</div>
          <div className="cd-129__sub">12 lessons · 4h 30min</div>
          <div className="cd-129__bar">
            <div className="cd-129__fill" />
          </div>
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
}`,
  },
  {
    id: 130,
    name: "Card-130",
    preview: (
      <div className="cd-130">
        <div className="cd-130__price">
          $49<span>/mo</span>
        </div>
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
}`,
  },
  {
    id: 131,
    name: "Card-131",
    preview: (
      <div className="cd-131">
        <div className="cd-131__label">Revenue</div>
        <div className="cd-131__value">$12,400</div>
        <div className="cd-131__change cd-131__change--up">
          +8.2% this month
        </div>
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
}`,
  },
  {
    id: 132,
    name: "Card-132",
    preview: (
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
}`,
  },
  {
    id: 133,
    name: "Card-133",
    preview: (
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
}`,
  },
  {
    id: 134,
    name: "Card-134",
    preview: (
      <div className="cd-134">
        <div className="cd-134__header">
          <div className="cd-134__avatar">MK</div>
          <div>
            <div className="cd-134__name">Mike K.</div>
            <div className="cd-134__time">2 min ago</div>
          </div>
        </div>
        <div className="cd-134__msg">
          Hey, the new design looks great. Can we hop on a call?
        </div>
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
}`,
  },
  {
    id: 135,
    name: "Card-135",
    preview: (
      <div className="cd-135">
        <div className="cd-135__title">Team</div>
        <div className="cd-135__avatars">
          <span>AL</span>
          <span>BR</span>
          <span>CK</span>
          <span>+4</span>
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
}`,
  },
  {
    id: 136,
    name: "Card-136",
    preview: (
      <div className="cd-136">
        <div className="cd-136__label">Storage</div>
        <div className="cd-136__val">
          14.2 GB <span>of 20 GB</span>
        </div>
        <div className="cd-136__track">
          <div className="cd-136__fill" />
        </div>
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
}`,
  },
  {
    id: 137,
    name: "Card-137",
    preview: (
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
}`,
  },
  {
    id: 138,
    name: "Card-138",
    preview: (
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
}`,
  },
  {
    id: 139,
    name: "Card-139",
    preview: (
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
}`,
  },
  {
    id: 140,
    name: "Card-140",
    preview: (
      <div className="cd-140">
        <div className="cd-140__title">Quick Actions</div>
        <div className="cd-140__actions">
          <button className="cd-140__action">Edit</button>
          <button className="cd-140__action">Share</button>
          <button className="cd-140__action cd-140__action--danger">
            Delete
          </button>
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
}`,
  },
  {
    id: 871,
    name: "Product Card",
    preview: (
      <article className="card-871">
        <div className="card-871__image">
          <i className="fa-solid fa-headphones"></i>
        </div>
        <div className="card-871__body">
          <span className="card-871__category">Audio</span>
          <h3>Studio Headphones</h3>
          <p>
            Premium wireless headphones designed for immersive listening and
            focused work.
          </p>
          <div className="card-871__footer">
            <strong>€149.00</strong>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
              Add to cart
            </button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-image">
        <i class="fa-solid fa-headphones"></i>
    </div>
    <div class="Card-body">
        <span class="Card-category">Audio</span>
        <h3>Studio Headphones</h3>
        <p>Premium wireless headphones designed for immersive listening and focused work.</p>
        <div class="Card-footer">
            <strong>€149.00</strong>
            <button>
                <i class="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button>
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 320px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-image {
    height: 170px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
    color: #4f46e5;
    font-size: 42px;
}

.Card-body {
    padding: 18px;
}

.Card-category {
    color: #6366f1;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .08em;
}

.Card h3 {
    margin: 7px 0 6px;
    color: #18181b;
    font-size: 17px;
}

.Card p {
    margin: 0;
    color: #71717a;
    font-size: 11px;
    line-height: 1.6;
}

.Card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
}

.Card-footer strong {
    color: #18181b;
    font-size: 16px;
}

.Card-footer button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 872,
    name: "Blog Article Card",
    preview: (
      <article className="card-872">
        <div className="card-872__cover">
          <span>DESIGN</span>
        </div>
        <div className="card-872__body">
          <small>August 25, 2026 · 6 min read</small>
          <h3>How to build better interfaces</h3>
          <p>
            Practical principles for creating cleaner, faster and more
            accessible digital products.
          </p>
          <a href="#">
            Read article
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-cover">
        <span>DESIGN</span>
    </div>
    <div class="Card-body">
        <small>August 25, 2026 · 6 min read</small>
        <h3>How to build better interfaces</h3>
        <p>Practical principles for creating cleaner, faster and more accessible digital products.</p>
        <a href="#">
            Read article
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </div>
</article>`,
    css: `.Card {
    width: 330px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-cover {
    height: 140px;
    display: flex;
    align-items: flex-end;
    padding: 14px;
    background:
        radial-gradient(circle at 20% 30%, #818cf8, transparent 25%),
        linear-gradient(135deg, #312e81, #111827);
}

.Card-cover span {
    padding: 5px 8px;
    border-radius: 999px;
    background: rgba(255,255,255,.14);
    color: #fff;
    font-size: 8px;
    font-weight: 800;
}

.Card-body {
    padding: 18px;
}

.Card-body small {
    color: #a1a1aa;
    font-size: 9px;
}

.Card h3 {
    margin: 8px 0 7px;
    color: #18181b;
    font-size: 17px;
    line-height: 1.2;
}

.Card p {
    margin: 0;
    color: #71717a;
    font-size: 11px;
    line-height: 1.55;
}

.Card a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 16px;
    color: #4f46e5;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 873,
    name: "Feature Card",
    preview: (
      <article className="card-873">
        <div className="card-873__icon">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h3>Lightning fast</h3>
        <p>
          Built with performance in mind, so your application stays responsive
          even as it grows.
        </p>
        <a href="#">
          Learn more
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <h3>Lightning fast</h3>
    <p>Built with performance in mind, so your application stays responsive even as it grows.</p>
    <a href="#">
        Learn more
        <i class="fa-solid fa-arrow-right"></i>
    </a>
</article>`,
    css: `.Card {
    width: 290px;
    padding: 20px;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}

.Card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #fef3c7;
    color: #d97706;
    font-size: 17px;
}

.Card h3 {
    margin: 17px 0 7px;
    color: #18181b;
    font-size: 16px;
}

.Card p {
    margin: 0;
    color: #71717a;
    font-size: 11px;
    line-height: 1.6;
}

.Card a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 18px;
    color: #18181b;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 874,
    name: "Pricing Card",
    preview: (
      <article className="card-874">
        <span className="card-874__badge">MOST POPULAR</span>
        <h3>Pro</h3>
        <p>For growing teams that need advanced tools.</p>
        <div className="card-874__price">
          <strong>$29</strong>
          <span>/ month</span>
        </div>
        <button>Start free trial</button>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i> Unlimited projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Advanced analytics
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Priority support
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Team collaboration
          </li>
        </ul>
      </article>
    ),
    html: `<article class="Card">
    <span class="Card-badge">MOST POPULAR</span>
    <h3>Pro</h3>
    <p>For growing teams that need advanced tools.</p>
    <div class="Card-price">
        <strong>$29</strong>
        <span>/ month</span>
    </div>
    <button>Start free trial</button>
    <ul>
        <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
        <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
        <li><i class="fa-solid fa-check"></i> Priority support</li>
        <li><i class="fa-solid fa-check"></i> Team collaboration</li>
    </ul>
</article>`,
    css: `.Card {
    position: relative;
    width: 290px;
    padding: 22px;
    box-sizing: border-box;
    background: #18181b;
    border: 1px solid #3f3f46;
    border-radius: 16px;
    color: #fff;
}

.Card-badge {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 999px;
    background: #312e81;
    color: #a5b4fc;
    font-size: 7px;
    font-weight: 800;
}

.Card h3 {
    margin: 18px 0 6px;
    font-size: 22px;
}

.Card > p {
    margin: 0;
    color: #a1a1aa;
    font-size: 10px;
    line-height: 1.5;
}

.Card-price {
    display: flex;
    align-items: baseline;
    gap: 5px;
    margin: 20px 0;
}

.Card-price strong {
    font-size: 32px;
}

.Card-price span {
    color: #71717a;
    font-size: 9px;
}

.Card > button {
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 9px;
    background: #fff;
    color: #18181b;
    font-size: 10px;
    font-weight: 700;
}

.Card ul {
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
}

.Card li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 9px;
    color: #d4d4d8;
    font-size: 9px;
}

.Card li i {
    color: #4ade80;
}`,
  },
  {
    id: 875,
    name: "Profile Card",
    preview: (
      <article className="card-875">
        <div className="card-875__banner"></div>
        <div className="card-875__content">
          <div className="card-875__avatar">AM</div>
          <div className="card-875__identity">
            <h3>Alex Morgan</h3>
            <span>Product Designer</span>
          </div>
          <p>
            Designing simple experiences for complex products and ambitious
            teams.
          </p>
          <div className="card-875__stats">
            <div>
              <strong>48</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>12k</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Rating</span>
            </div>
          </div>
          <button>View profile</button>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-banner"></div>
    <div class="Card-content">
        <div class="Card-avatar">AM</div>
        <div class="Card-identity">
            <h3>Alex Morgan</h3>
            <span>Product Designer</span>
        </div>
        <p>Designing simple experiences for complex products and ambitious teams.</p>
        <div class="Card-stats">
            <div>
                <strong>48</strong>
                <span>Projects</span>
            </div>
            <div>
                <strong>12k</strong>
                <span>Followers</span>
            </div>
            <div>
                <strong>4.9</strong>
                <span>Rating</span>
            </div>
        </div>
        <button>View profile</button>
    </div>
</article>`,
    css: `.Card {
    width: 300px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-banner {
    height: 82px;
    background:
        radial-gradient(circle at 20% 20%, #818cf8, transparent 25%),
        linear-gradient(135deg, #312e81, #1e1b4b);
}

.Card-content {
    position: relative;
    padding: 0 18px 18px;
}

.Card-avatar {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    margin-top: -29px;
    border: 4px solid #fff;
    border-radius: 50%;
    background: #fbbf24;
    color: #78350f;
    font-size: 14px;
    font-weight: 800;
}

.Card-identity h3 {
    margin: 10px 0 2px;
    color: #18181b;
    font-size: 16px;
}

.Card-identity span {
    color: #71717a;
    font-size: 9px;
}

.Card-content > p {
    margin: 12px 0 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.55;
}

.Card-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 17px;
    padding: 10px 0;
    border-top: 1px solid #f4f4f5;
    border-bottom: 1px solid #f4f4f5;
}

.Card-stats div {
    text-align: center;
}

.Card-stats strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}

.Card-stats span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}

.Card-content > button {
    width: 100%;
    height: 38px;
    margin-top: 14px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 876,
    name: "Testimonial Card",
    preview: (
      <article className="card-876">
        <div className="card-876__quote">
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <p>
          “The new design system saved our team weeks of development time.
          Everything feels consistent and polished.”
        </p>
        <div className="card-876__author">
          <div>SK</div>
          <div>
            <strong>Sarah Klein</strong>
            <span>Head of Product · Northstar</span>
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-quote">
        <i class="fa-solid fa-quote-left"></i>
    </div>
    <p>“The new design system saved our team weeks of development time. Everything feels consistent and polished.”</p>
    <div class="Card-author">
        <div>SK</div>
        <div>
            <strong>Sarah Klein</strong>
            <span>Head of Product · Northstar</span>
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 320px;
    padding: 20px;
    box-sizing: border-box;
    background: #fafafa;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-quote {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #ede9fe;
    color: #7c3aed;
}

.Card > p {
    margin: 17px 0 22px;
    color: #27272a;
    font-family: Georgia, serif;
    font-size: 14px;
    line-height: 1.65;
}

.Card-author {
    display: flex;
    align-items: center;
    gap: 9px;
}

.Card-author > div:first-child {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #e0e7ff;
    color: #4338ca;
    font-size: 9px;
    font-weight: 800;
}

.Card-author strong {
    display: block;
    color: #18181b;
    font-size: 10px;
}

.Card-author span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 877,
    name: "Feature Comparison Card",
    preview: (
      <article className="card-877">
        <div className="card-877__icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3>Enterprise security</h3>
        <p>Protect your organization with advanced security controls.</p>
        <div className="card-877__feature">
          <i className="fa-solid fa-check"></i>
          <span>SAML SSO</span>
        </div>
        <div className="card-877__feature">
          <i className="fa-solid fa-check"></i>
          <span>Audit logs</span>
        </div>
        <div className="card-877__feature">
          <i className="fa-solid fa-check"></i>
          <span>Role-based access</span>
        </div>
        <a href="#">Explore security</a>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>Enterprise security</h3>
    <p>Protect your organization with advanced security controls.</p>
    <div class="Card-feature">
        <i class="fa-solid fa-check"></i>
        <span>SAML SSO</span>
    </div>
    <div class="Card-feature">
        <i class="fa-solid fa-check"></i>
        <span>Audit logs</span>
    </div>
    <div class="Card-feature">
        <i class="fa-solid fa-check"></i>
        <span>Role-based access</span>
    </div>
    <a href="#">Explore security</a>
</article>`,
    css: `.Card {
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #fff;
}

.Card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #ecfdf5;
    color: #059669;
}

.Card h3 {
    margin: 15px 0 6px;
    color: #18181b;
    font-size: 16px;
}

.Card > p {
    margin: 0 0 15px;
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}

.Card-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 9px;
    color: #3f3f46;
    font-size: 10px;
}

.Card-feature i {
    color: #16a34a;
    font-size: 9px;
}

.Card > a {
    display: inline-block;
    margin-top: 17px;
    color: #059669;
    text-decoration: none;
    font-size: 10px;
    font-weight: 700;
}`,
  },
  {
    id: 878,
    name: "Stats Card",
    preview: (
      <article className="card-878">
        <div className="card-878__top">
          <span>Total revenue</span>
          <div>
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
        </div>
        <strong className="card-878__value">$84,240</strong>
        <div className="card-878__change">
          <span>+12.8%</span>
          <p>vs. last month</p>
        </div>
        <div className="card-878__chart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-top">
        <span>Total revenue</span>
        <div>
            <i class="fa-solid fa-arrow-trend-up"></i>
        </div>
    </div>
    <strong class="Card-value">$84,240</strong>
    <div class="Card-change">
        <span>+12.8%</span>
        <p>vs. last month</p>
    </div>
    <div class="Card-chart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</article>`,
    css: `.Card {
    width: 280px;
    padding: 18px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}

.Card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Card-top > span {
    color: #71717a;
    font-size: 10px;
}

.Card-top > div {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #ecfdf5;
    color: #16a34a;
}

.Card-value {
    display: block;
    margin-top: 13px;
    color: #18181b;
    font-size: 27px;
}

.Card-change {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
}

.Card-change span {
    color: #16a34a;
    font-size: 9px;
    font-weight: 700;
}

.Card-change p {
    margin: 0;
    color: #a1a1aa;
    font-size: 9px;
}

.Card-chart {
    height: 48px;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    margin-top: 18px;
}

.Card-chart span {
    flex: 1;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(#60a5fa, #2563eb);
}

.Card-chart span:nth-child(1) {
    height: 30%;
}

.Card-chart span:nth-child(2) {
    height: 42%;
}

.Card-chart span:nth-child(3) {
    height: 35%;
}

.Card-chart span:nth-child(4) {
    height: 62%;
}

.Card-chart span:nth-child(5) {
    height: 50%;
}

.Card-chart span:nth-child(6) {
    height: 78%;
}

.Card-chart span:nth-child(7) {
    height: 92%;
}`,
  },
  {
    id: 879,
    name: "Event Card",
    preview: (
      <article className="card-879">
        <div className="card-879__date">
          <span>SEP</span>
          <strong>18</strong>
        </div>
        <div className="card-879__body">
          <span className="card-879__type">CONFERENCE</span>
          <h3>Build Better Products</h3>
          <p>
            Join 500+ designers and developers for a day of talks, workshops and
            networking.
          </p>
          <div className="card-879__meta">
            <span>
              <i className="fa-regular fa-clock"></i> 09:00 AM
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i> Amsterdam
            </span>
          </div>
          <button>View event</button>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-date">
        <span>SEP</span>
        <strong>18</strong>
    </div>
    <div class="Card-body">
        <span class="Card-type">CONFERENCE</span>
        <h3>Build Better Products</h3>
        <p>Join 500+ designers and developers for a day of talks, workshops and networking.</p>
        <div class="Card-meta">
            <span><i class="fa-regular fa-clock"></i> 09:00 AM</span>
            <span><i class="fa-solid fa-location-dot"></i> Amsterdam</span>
        </div>
        <button>View event</button>
    </div>
</article>`,
    css: `.Card {
    width: 360px;
    display: flex;
    gap: 16px;
    padding: 17px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}

.Card-date {
    width: 54px;
    height: 62px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #18181b;
    color: #fff;
}

.Card-date span {
    font-size: 7px;
    font-weight: 700;
    letter-spacing: .12em;
}

.Card-date strong {
    margin-top: 2px;
    font-size: 21px;
}

.Card-body {
    flex: 1;
}

.Card-type {
    color: #6366f1;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .1em;
}

.Card h3 {
    margin: 5px 0 5px;
    color: #18181b;
    font-size: 14px;
}

.Card p {
    margin: 0;
    color: #71717a;
    font-size: 9px;
    line-height: 1.45;
}

.Card-meta {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.Card-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #a1a1aa;
    font-size: 8px;
}

.Card-body button {
    margin-top: 12px;
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    background: #eff6ff;
    color: #2563eb;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 880,
    name: "CTA Card",
    preview: (
      <article className="card-880">
        <div className="card-880__icon">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <div>
          <h3>Ready to launch?</h3>
          <p>
            Start building your next project with our ready-to-use components.
          </p>
        </div>
        <a href="#">
          Get started
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-rocket"></i>
    </div>
    <div>
        <h3>Ready to launch?</h3>
        <p>Start building your next project with our ready-to-use components.</p>
    </div>
    <a href="#">
        Get started
        <i class="fa-solid fa-arrow-right"></i>
    </a>
</article>`,
    css: `.Card {
    width: 390px;
    padding: 20px;
    display: grid;
    grid-template-columns: 45px 1fr auto;
    align-items: center;
    gap: 14px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border-radius: 16px;
    color: #fff;
}

.Card-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(255,255,255,.12);
    color: #c4b5fd;
}

.Card h3 {
    margin: 0 0 4px;
    font-size: 14px;
}

.Card p {
    margin: 0;
    color: #c7d2fe;
    font-size: 9px;
    line-height: 1.5;
}

.Card a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    border-radius: 8px;
    background: #fff;
    color: #312e81;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
}`,
  },
  {
    id: 881,
    name: "Team Member Card",
    preview: (
      <article className="card-881">
        <div className="card-881__avatar">JM</div>
        <h3>Jordan Miller</h3>
        <span>Lead Developer</span>
        <p>Building reliable systems and helping teams ship great software.</p>
        <div className="card-881__socials">
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-avatar">JM</div>
    <h3>Jordan Miller</h3>
    <span>Lead Developer</span>
    <p>Building reliable systems and helping teams ship great software.</p>
    <div class="Card-socials">
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
    </div>
</article>`,
    css: `.Card {
    width: 250px;
    padding: 22px;
    text-align: center;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-avatar {
    width: 62px;
    height: 62px;
    display: grid;
    place-items: center;
    margin: 0 auto;
    border-radius: 50%;
    background: linear-gradient(135deg, #dbeafe, #c4b5fd);
    color: #4338ca;
    font-size: 16px;
    font-weight: 800;
}

.Card h3 {
    margin: 12px 0 3px;
    color: #18181b;
    font-size: 15px;
}

.Card > span {
    color: #6366f1;
    font-size: 9px;
    font-weight: 700;
}

.Card > p {
    margin: 11px 0 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.55;
}

.Card-socials {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 16px;
}

.Card-socials a {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #52525b;
    text-decoration: none;
}`,
  },
  {
    id: 882,
    name: "Task Card",
    preview: (
      <article className="card-882">
        <div className="card-882__top">
          <span className="card-882__status">IN PROGRESS</span>
          <button>
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <h3>Design homepage</h3>
        <p>
          Create the final responsive homepage layout and prepare handoff
          assets.
        </p>
        <div className="card-882__assignees">
          <div>AM</div>
          <div>SK</div>
          <div>+</div>
        </div>
        <div className="card-882__bottom">
          <span>
            <i className="fa-regular fa-calendar"></i> Sep 08
          </span>
          <span>
            <i className="fa-solid fa-list-check"></i> 4/6
          </span>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-top">
        <span class="Card-status">IN PROGRESS</span>
        <button>
            <i class="fa-solid fa-ellipsis"></i>
        </button>
    </div>
    <h3>Design homepage</h3>
    <p>Create the final responsive homepage layout and prepare handoff assets.</p>
    <div class="Card-assignees">
        <div>AM</div>
        <div>SK</div>
        <div>+</div>
    </div>
    <div class="Card-bottom">
        <span><i class="fa-regular fa-calendar"></i> Sep 08</span>
        <span><i class="fa-solid fa-list-check"></i> 4/6</span>
    </div>
</article>`,
    css: `.Card {
    width: 300px;
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
}

.Card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Card-status {
    padding: 4px 7px;
    border-radius: 999px;
    background: #fef3c7;
    color: #a16207;
    font-size: 7px;
    font-weight: 800;
}

.Card-top button {
    border: none;
    background: transparent;
    color: #a1a1aa;
}

.Card h3 {
    margin: 14px 0 5px;
    color: #18181b;
    font-size: 15px;
}

.Card > p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}

.Card-assignees {
    display: flex;
    margin-top: 16px;
}

.Card-assignees div {
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    margin-right: -5px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 7px;
    font-weight: 800;
}

.Card-assignees div:nth-child(2) {
    background: #fce7f3;
    color: #be185d;
}

.Card-assignees div:nth-child(3) {
    background: #f4f4f5;
    color: #71717a;
}

.Card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 11px;
    border-top: 1px solid #f4f4f5;
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 883,
    name: "Course Card",
    preview: (
      <article className="card-883">
        <div className="card-883__cover">
          <span>12 LESSONS</span>
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="card-883__body">
          <span className="card-883__level">BEGINNER</span>
          <h3>React & TypeScript</h3>
          <p>
            Build modern web applications using React, TypeScript and reusable
            components.
          </p>
          <div className="card-883__progress">
            <div>
              <span>Progress</span>
              <strong>68%</strong>
            </div>
            <div className="card-883__bar">
              <span></span>
            </div>
          </div>
          <button>Continue learning</button>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-cover">
        <span>12 LESSONS</span>
        <i class="fa-solid fa-code"></i>
    </div>
    <div class="Card-body">
        <span class="Card-level">BEGINNER</span>
        <h3>React & TypeScript</h3>
        <p>Build modern web applications using React, TypeScript and reusable components.</p>
        <div class="Card-progress">
            <div>
                <span>Progress</span>
                <strong>68%</strong>
            </div>
            <div class="Card-bar">
                <span></span>
            </div>
        </div>
        <button>Continue learning</button>
    </div>
</article>`,
    css: `.Card {
    width: 320px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-cover {
    height: 125px;
    padding: 13px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1e1b4b, #2563eb);
    color: #fff;
}

.Card-cover span {
    padding: 4px 6px;
    border-radius: 999px;
    background: rgba(255,255,255,.13);
    font-size: 7px;
    font-weight: 800;
}

.Card-cover i {
    font-size: 27px;
    opacity: .8;
}

.Card-body {
    padding: 17px;
}

.Card-level {
    color: #2563eb;
    font-size: 7px;
    font-weight: 800;
}

.Card h3 {
    margin: 6px 0;
    color: #18181b;
    font-size: 16px;
}

.Card p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}

.Card-progress {
    margin-top: 16px;
}

.Card-progress > div:first-child {
    display: flex;
    justify-content: space-between;
    color: #71717a;
    font-size: 8px;
}

.Card-progress strong {
    color: #2563eb;
}

.Card-bar {
    height: 5px;
    margin-top: 5px;
    border-radius: 999px;
    background: #e2e8f0;
    overflow: hidden;
}

.Card-bar span {
    display: block;
    width: 68%;
    height: 100%;
    background: #2563eb;
}

.Card-body button {
    width: 100%;
    height: 38px;
    margin-top: 16px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 884,
    name: "Notification Card",
    preview: (
      <article className="card-884">
        <div className="card-884__icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="card-884__body">
          <div>
            <strong>New comment on your post</strong>
            <span>2 minutes ago</span>
          </div>
          <p>Sarah left a comment on “Building better dashboards”.</p>
          <div className="card-884__actions">
            <button>View comment</button>
            <button>Dismiss</button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-bell"></i>
    </div>
    <div class="Card-body">
        <div>
            <strong>New comment on your post</strong>
            <span>2 minutes ago</span>
        </div>
        <p>Sarah left a comment on “Building better dashboards”.</p>
        <div class="Card-actions">
            <button>View comment</button>
            <button>Dismiss</button>
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 370px;
    display: flex;
    gap: 12px;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
}

.Card-icon {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #eff6ff;
    color: #2563eb;
}

.Card-body {
    flex: 1;
}

.Card-body > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.Card-body strong {
    color: #18181b;
    font-size: 11px;
}

.Card-body > div:first-child span {
    color: #a1a1aa;
    font-size: 8px;
    white-space: nowrap;
}

.Card-body > p {
    margin: 5px 0 0;
    color: #71717a;
    font-size: 9px;
    line-height: 1.45;
}

.Card-actions {
    display: flex;
    gap: 6px;
    margin-top: 10px;
}

.Card-actions button {
    padding: 6px 8px;
    border: none;
    border-radius: 7px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 8px;
    font-weight: 600;
}

.Card-actions button:first-child {
    background: #18181b;
    color: #fff;
}`,
  },
  {
    id: 885,
    name: "Repository Card",
    preview: (
      <article className="card-885">
        <div className="card-885__top">
          <div className="card-885__repo">
            <i className="fa-brands fa-github"></i>
            <span>itzmitto/ui-library</span>
          </div>
          <span className="card-885__public">Public</span>
        </div>
        <p>Beautiful reusable UI components built with React and TypeScript.</p>
        <div className="card-885__tags">
          <span>TypeScript</span>
          <span>React</span>
          <span>CSS</span>
        </div>
        <div className="card-885__stats">
          <span>
            <i className="fa-regular fa-star"></i> 1.2k
          </span>
          <span>
            <i className="fa-solid fa-code-fork"></i> 184
          </span>
          <span>Updated 2h ago</span>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-top">
        <div class="Card-repo">
            <i class="fa-brands fa-github"></i>
            <span>itzmitto/ui-library</span>
        </div>
        <span class="Card-public">Public</span>
    </div>
    <p>Beautiful reusable UI components built with React and TypeScript.</p>
    <div class="Card-tags">
        <span>TypeScript</span>
        <span>React</span>
        <span>CSS</span>
    </div>
    <div class="Card-stats">
        <span><i class="fa-regular fa-star"></i> 1.2k</span>
        <span><i class="fa-solid fa-code-fork"></i> 184</span>
        <span>Updated 2h ago</span>
    </div>
</article>`,
    css: `.Card {
    width: 340px;
    padding: 17px;
    box-sizing: border-box;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 13px;
    color: #f0f6fc;
}

.Card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Card-repo {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 700;
}

.Card-repo i {
    font-size: 17px;
}

.Card-public {
    padding: 3px 7px;
    border: 1px solid #30363d;
    border-radius: 999px;
    color: #8b949e;
    font-size: 7px;
}

.Card > p {
    margin: 13px 0;
    color: #8b949e;
    font-size: 10px;
    line-height: 1.5;
}

.Card-tags {
    display: flex;
    gap: 5px;
}

.Card-tags span {
    padding: 4px 6px;
    border-radius: 5px;
    background: #161b22;
    color: #8b949e;
    font-size: 7px;
}

.Card-stats {
    display: flex;
    gap: 13px;
    margin-top: 15px;
    padding-top: 11px;
    border-top: 1px solid #21262d;
    color: #8b949e;
    font-size: 8px;
}

.Card-stats span {
    display: flex;
    align-items: center;
    gap: 4px;
}`,
  },
  {
    id: 886,
    name: "Job Listing Card",
    preview: (
      <article className="card-886">
        <div className="card-886__top">
          <div className="card-886__logo">
            <i className="fa-solid fa-building"></i>
          </div>
          <button>
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
        <span className="card-886__type">FULL-TIME</span>
        <h3>Frontend Developer</h3>
        <span className="card-886__company">Northstar Labs · Amsterdam</span>
        <p>
          Build elegant interfaces and collaborate with product designers to
          ship features used by thousands of people.
        </p>
        <div className="card-886__tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Remote</span>
        </div>
        <div className="card-886__footer">
          <strong>€55k – €72k</strong>
          <span>Posted 2 days ago</span>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-top">
        <div class="Card-logo">
            <i class="fa-solid fa-building"></i>
        </div>
        <button>
            <i class="fa-regular fa-bookmark"></i>
        </button>
    </div>
    <span class="Card-type">FULL-TIME</span>
    <h3>Frontend Developer</h3>
    <span class="Card-company">Northstar Labs · Amsterdam</span>
    <p>Build elegant interfaces and collaborate with product designers to ship features used by thousands of people.</p>
    <div class="Card-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>Remote</span>
    </div>
    <div class="Card-footer">
        <strong>€55k – €72k</strong>
        <span>Posted 2 days ago</span>
    </div>
</article>`,
    css: `.Card {
    width: 340px;
    padding: 17px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}

.Card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Card-logo {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f1f5f9;
    color: #334155;
}

.Card-top button {
    border: none;
    background: transparent;
    color: #a1a1aa;
}

.Card-type {
    display: inline-block;
    margin-top: 15px;
    color: #16a34a;
    font-size: 7px;
    font-weight: 800;
}

.Card h3 {
    margin: 5px 0 3px;
    color: #18181b;
    font-size: 16px;
}

.Card-company {
    color: #71717a;
    font-size: 9px;
}

.Card > p {
    margin: 11px 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.55;
}

.Card-tags {
    display: flex;
    gap: 5px;
}

.Card-tags span {
    padding: 4px 6px;
    border-radius: 5px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 8px;
}

.Card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 11px;
    border-top: 1px solid #f4f4f5;
}

.Card-footer strong {
    color: #18181b;
    font-size: 10px;
}

.Card-footer span {
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 887,
    name: "App Download Card",
    preview: (
      <article className="card-887">
        <div className="card-887__icon">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <div className="card-887__body">
          <h3>Get the mobile app</h3>
          <p>
            Manage your workspace from anywhere with our iOS and Android apps.
          </p>
          <div className="card-887__buttons">
            <a href="#">
              <i className="fa-brands fa-apple"></i>
              App Store
            </a>
            <a href="#">
              <i className="fa-brands fa-google-play"></i>
              Google Play
            </a>
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-mobile-screen-button"></i>
    </div>
    <div class="Card-body">
        <h3>Get the mobile app</h3>
        <p>Manage your workspace from anywhere with our iOS and Android apps.</p>
        <div class="Card-buttons">
            <a href="#">
                <i class="fa-brands fa-apple"></i>
                App Store
            </a>
            <a href="#">
                <i class="fa-brands fa-google-play"></i>
                Google Play
            </a>
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 370px;
    display: flex;
    gap: 14px;
    padding: 18px;
    box-sizing: border-box;
    background: #18181b;
    border-radius: 15px;
    color: #fff;
}

.Card-icon {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: #27272a;
    color: #fff;
    font-size: 20px;
}

.Card-body {
    flex: 1;
}

.Card h3 {
    margin: 0 0 5px;
    font-size: 14px;
}

.Card p {
    margin: 0;
    color: #a1a1aa;
    font-size: 9px;
    line-height: 1.5;
}

.Card-buttons {
    display: flex;
    gap: 6px;
    margin-top: 12px;
}

.Card-buttons a {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border: 1px solid #3f3f46;
    border-radius: 7px;
    color: #e4e4e7;
    text-decoration: none;
    font-size: 8px;
}`,
  },
  {
    id: 888,
    name: "Progress Card",
    preview: (
      <article className="card-888">
        <div className="card-888__header">
          <div>
            <span>Your progress</span>
            <h3>Design system</h3>
          </div>
          <strong>74%</strong>
        </div>
        <div className="card-888__bar">
          <span></span>
        </div>
        <div className="card-888__steps">
          <div className="card-888__done">
            <i className="fa-solid fa-check"></i>
            Foundations
          </div>
          <div className="card-888__done">
            <i className="fa-solid fa-check"></i>
            Components
          </div>
          <div>
            <span></span>
            Patterns
          </div>
          <div>
            <span></span>
            Documentation
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-header">
        <div>
            <span>Your progress</span>
            <h3>Design system</h3>
        </div>
        <strong>74%</strong>
    </div>
    <div class="Card-bar">
        <span></span>
    </div>
    <div class="Card-steps">
        <div class="Card-done">
            <i class="fa-solid fa-check"></i>
            Foundations
        </div>
        <div class="Card-done">
            <i class="fa-solid fa-check"></i>
            Components
        </div>
        <div>
            <span></span>
            Patterns
        </div>
        <div>
            <span></span>
            Documentation
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 330px;
    padding: 18px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}

.Card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Card-header > div > span {
    color: #a1a1aa;
    font-size: 9px;
}

.Card-header h3 {
    margin: 4px 0 0;
    color: #18181b;
    font-size: 14px;
}

.Card-header > strong {
    color: #2563eb;
    font-size: 18px;
}

.Card-bar {
    height: 7px;
    margin-top: 16px;
    border-radius: 999px;
    background: #e4e4e7;
    overflow: hidden;
}

.Card-bar span {
    display: block;
    width: 74%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
}

.Card-steps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 16px;
}

.Card-steps > div {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #a1a1aa;
    font-size: 8px;
}

.Card-steps > div > span {
    width: 7px;
    height: 7px;
    border: 1px solid #d4d4d8;
    border-radius: 50%;
}

.Card-done {
    color: #16a34a !important;
}

.Card-done i {
    font-size: 8px;
}`,
  },
  {
    id: 889,
    name: "Service Card",
    preview: (
      <article className="card-889">
        <div className="card-889__number">01</div>
        <div className="card-889__icon">
          <i className="fa-solid fa-code"></i>
        </div>
        <h3>Web development</h3>
        <p>
          Fast, accessible and scalable websites built around your goals and
          content.
        </p>
        <a href="#">
          Explore service
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-number">01</div>
    <div class="Card-icon">
        <i class="fa-solid fa-code"></i>
    </div>
    <h3>Web development</h3>
    <p>Fast, accessible and scalable websites built around your goals and content.</p>
    <a href="#">
        Explore service
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
</article>`,
    css: `.Card {
    position: relative;
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
    background: #18181b;
    border-radius: 15px;
    color: #fff;
}

.Card-number {
    position: absolute;
    top: 17px;
    right: 18px;
    color: #52525b;
    font-family: monospace;
    font-size: 12px;
}

.Card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #27272a;
    color: #a78bfa;
}

.Card h3 {
    margin: 18px 0 6px;
    font-size: 17px;
}

.Card p {
    margin: 0;
    color: #a1a1aa;
    font-size: 10px;
    line-height: 1.6;
}

.Card a {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 18px;
    color: #c4b5fd;
    text-decoration: none;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 890,
    name: "Featured Product Card",
    preview: (
      <article className="card-890">
        <div className="card-890__visual">
          <span className="card-890__badge">FEATURED</span>
          <i className="fa-solid fa-camera"></i>
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
        <div className="card-890__body">
          <div className="card-890__rating">
            <span>★★★★★</span>
            <small>4.9 · 124 reviews</small>
          </div>
          <h3>Creator Camera X2</h3>
          <p>
            Compact 4K camera with cinematic stabilization and advanced
            autofocus.
          </p>
          <div className="card-890__footer">
            <div>
              <strong>€899</strong>
              <span>€999</span>
            </div>
            <button>View product</button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <div class="Card-visual">
        <span class="Card-badge">FEATURED</span>
        <i class="fa-solid fa-camera"></i>
        <button>
            <i class="fa-regular fa-heart"></i>
        </button>
    </div>
    <div class="Card-body">
        <div class="Card-rating">
            <span>★★★★★</span>
            <small>4.9 · 124 reviews</small>
        </div>
        <h3>Creator Camera X2</h3>
        <p>Compact 4K camera with cinematic stabilization and advanced autofocus.</p>
        <div class="Card-footer">
            <div>
                <strong>€899</strong>
                <span>€999</span>
            </div>
            <button>View product</button>
        </div>
    </div>
</article>`,
    css: `.Card {
    width: 330px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}

.Card-visual {
    position: relative;
    height: 180px;
    display: grid;
    place-items: center;
    background:
        radial-gradient(circle at center, rgba(96,165,250,.25), transparent 35%),
        linear-gradient(135deg, #0f172a, #1e293b);
    color: #dbeafe;
    font-size: 44px;
}

.Card-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 5px 7px;
    border-radius: 999px;
    background: #fff;
    color: #18181b;
    font-size: 7px;
    font-weight: 800;
}

.Card-visual button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,.12);
    color: #fff;
}

.Card-body {
    padding: 17px;
}

.Card-rating {
    display: flex;
    align-items: center;
    gap: 7px;
}

.Card-rating > span {
    color: #f59e0b;
    font-size: 10px;
    letter-spacing: 0.08em;
}

.Card-rating small {
    color: #a1a1aa;
    font-size: 8px;
}

.Card h3 {
    margin: 7px 0 6px;
    color: #18181b;
    font-size: 16px;
}

.Card-body > p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.55;
}

.Card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 17px;
}

.Card-footer > div {
    display: flex;
    align-items: baseline;
    gap: 6px;
}

.Card-footer strong {
    color: #18181b;
    font-size: 17px;
}

.Card-footer span {
    color: #a1a1aa;
    text-decoration: line-through;
    font-size: 9px;
}

.Card-footer button {
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    background: #18181b;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
}`,
  },
  {
    id: 1202,
    name: "Profile Card",
    preview: (
      <div className="card-1202">
        <div className="card-1202-avatar">A</div>
        <div className="card-1202-content">
          <h3>André</h3>
          <span>Software Developer</span>
          <p>
            Building modern interfaces and learning new technologies every day.
          </p>
          <button>View profile</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-avatar">A</div>
    <div class="Card-content">
        <h3>André</h3>
        <span>Software Developer</span>
        <p>Building modern interfaces and learning new technologies every day.</p>
        <button>View profile</button>
    </div>
</div>`,
    css: `.Card {
    width: 320px;
    padding: 24px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 20px;
}
.Card-avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #18181b;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
}
.Card-content h3 {
    margin: 18px 0 4px;
}
.Card-content span {
    color: #71717a;
    font-size: 13px;
}
.Card-content p {
    color: #52525b;
    font-size: 13px;
    line-height: 1.6;
}
.Card-content button {
    margin-top: 8px;
    padding: 9px 14px;
    border: none;
    border-radius: 9px;
    background: #18181b;
    color: #ffffff;
    cursor: pointer;
}`,
  },
  {
    id: 1152,
    name: "Glass Profile Card",
    preview: (
      <div className="card-1152">
        <div className="card-1152-glow"></div>
        <div className="card-1152-avatar">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>Creative Profile</h3>
        <span>UI Designer</span>
        <p>Designing beautiful products with thoughtful interactions.</p>
        <div className="card-1152-stats">
          <div>
            <strong>48</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>12k</strong>
            <span>Likes</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-glow"></div>
    <div class="Card-avatar">
        <i class="fa-solid fa-user"></i>
    </div>
    <h3>Creative Profile</h3>
    <span>UI Designer</span>
    <p>Designing beautiful products with thoughtful interactions.</p>
    <div class="Card-stats">
        <div>
            <strong>48</strong>
            <span>Projects</span>
        </div>
        <div>
            <strong>12k</strong>
            <span>Likes</span>
        </div>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 320px;
    padding: 26px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 22px;
    color: white;
    backdrop-filter: blur(18px);
}
.Card-glow {
    position: absolute;
    width: 150px;
    height: 150px;
    right: -80px;
    top: -80px;
    background: #8b5cf6;
    filter: blur(60px);
    opacity: .4;
}
.Card-avatar {
    position: relative;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    background: rgba(255,255,255,.12);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 16px;
}
.Card h3 {
    margin: 20px 0 4px;
}
.Card > span {
    color: rgba(255,255,255,.6);
    font-size: 13px;
}
.Card p {
    color: rgba(255,255,255,.72);
    font-size: 13px;
    line-height: 1.6;
}
.Card-stats {
    display: flex;
    gap: 35px;
    margin-top: 22px;
}
.Card-stats div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Card-stats span {
    color: rgba(255,255,255,.5);
    font-size: 11px;
}`,
  },
  {
    id: 1153,
    name: "Product Card",
    preview: (
      <div className="card-1153">
        <div className="card-1153-image">
          <i className="fa-solid fa-headphones"></i>
        </div>
        <div className="card-1153-body">
          <span>Audio</span>
          <h3>Studio Headphones</h3>
          <p>Premium sound for creators.</p>
          <div className="card-1153-bottom">
            <strong>€129</strong>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-image">
        <i class="fa-solid fa-headphones"></i>
    </div>
    <div class="Card-body">
        <span>Audio</span>
        <h3>Studio Headphones</h3>
        <p>Premium sound for creators.</p>
        <div class="Card-bottom">
            <strong>€129</strong>
            <button>
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>`,
    css: `.Card {
    width: 300px;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-image {
    height: 170px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#e0f2fe,#c4b5fd);
    font-size: 46px;
    color: #18181b;
}
.Card-body {
    padding: 20px;
}
.Card-body > span {
    color: #71717a;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.Card-body h3 {
    margin: 8px 0;
}
.Card-body p {
    margin: 0;
    color: #71717a;
    font-size: 13px;
}
.Card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
.Card-bottom strong {
    font-size: 20px;
}
.Card-bottom button {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
    background: #18181b;
    color: white;
    cursor: pointer;
}`,
  },
  {
    id: 1154,
    name: "Article Card",
    preview: (
      <article className="card-1154">
        <span className="card-1154-category">DESIGN</span>
        <h3>Designing interfaces that feel effortless</h3>
        <p>Simple patterns can make complex products easier to understand.</p>
        <div className="card-1154-meta">
          <span>6 min read</span>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </article>
    ),
    html: `<article class="Card">
    <span class="Card-category">DESIGN</span>
    <h3>Designing interfaces that feel effortless</h3>
    <p>Simple patterns can make complex products easier to understand.</p>
    <div class="Card-meta">
        <span>6 min read</span>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
</article>`,
    css: `.Card {
    width: 320px;
    padding: 24px;
    background: #fafafa;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-category {
    color: #7c3aed;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
}
.Card h3 {
    font-size: 21px;
    line-height: 1.25;
    margin: 14px 0 10px;
}
.Card p {
    color: #71717a;
    font-size: 13px;
    line-height: 1.6;
}
.Card-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    color: #71717a;
    font-size: 12px;
}`,
  },
  {
    id: 1155,
    name: "Pricing Card",
    preview: (
      <div className="card-1155">
        <span className="card-1155-badge">POPULAR</span>
        <h3>Pro</h3>
        <p>For creators building serious products.</p>
        <div className="card-1155-price">
          <strong>€19</strong>
          <span>/month</span>
        </div>
        <button>Start free trial</button>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i> Unlimited projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Advanced analytics
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Priority support
          </li>
        </ul>
      </div>
    ),
    html: `<div class="Card">
    <span class="Card-badge">POPULAR</span>
    <h3>Pro</h3>
    <p>For creators building serious products.</p>
    <div class="Card-price">
        <strong>€19</strong>
        <span>/month</span>
    </div>
    <button>Start free trial</button>
    <ul>
        <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
        <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
        <li><i class="fa-solid fa-check"></i> Priority support</li>
    </ul>
</div>`,
    css: `.Card {
    position: relative;
    width: 300px;
    padding: 28px;
    background: #18181b;
    color: white;
    border-radius: 20px;
    border: 1px solid #3f3f46;
}
.Card-badge {
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 5px 8px;
    background: #7c3aed;
    border-radius: 999px;
    font-size: 9px;
    font-weight: 700;
}
.Card h3 {
    font-size: 25px;
}
.Card p {
    color: #a1a1aa;
    line-height: 1.5;
    font-size: 13px;
}
.Card-price {
    display: flex;
    align-items: baseline;
    gap: 5px;
    margin: 25px 0;
}
.Card-price strong {
    font-size: 38px;
}
.Card-price span {
    color: #71717a;
}
.Card > button {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 10px;
    background: #7c3aed;
    color: white;
    font-weight: 600;
}
.Card ul {
    list-style: none;
    padding: 0;
    margin: 22px 0 0;
}
.Card li {
    margin: 12px 0;
    font-size: 12px;
    color: #d4d4d8;
}
.Card li i {
    color: #a78bfa;
    margin-right: 8px;
}`,
  },
  {
    id: 1156,
    name: "Stats Card",
    preview: (
      <div className="card-1156">
        <div className="card-1156-top">
          <span>Total revenue</span>
          <i className="fa-solid fa-chart-line"></i>
        </div>
        <strong>€24,892</strong>
        <div className="card-1156-growth">
          <span>+18.4%</span>
          <p>from last month</p>
        </div>
        <div className="card-1156-chart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <span>Total revenue</span>
        <i class="fa-solid fa-chart-line"></i>
    </div>
    <strong>€24,892</strong>
    <div class="Card-growth">
        <span>+18.4%</span>
        <p>from last month</p>
    </div>
    <div class="Card-chart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Card {
    width: 310px;
    padding: 22px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-top {
    display: flex;
    justify-content: space-between;
    color: #71717a;
    font-size: 12px;
}
.Card-top i {
    color: #2563eb;
}
.Card > strong {
    display: block;
    font-size: 32px;
    margin: 18px 0 8px;
}
.Card-growth {
    display: flex;
    align-items: center;
    gap: 8px;
}
.Card-growth span {
    color: #16a34a;
    font-size: 12px;
    font-weight: 700;
}
.Card-growth p {
    color: #a1a1aa;
    font-size: 11px;
    margin: 0;
}
.Card-chart {
    height: 55px;
    display: flex;
    align-items: flex-end;
    gap: 7px;
    margin-top: 20px;
}
.Card-chart span {
    flex: 1;
    background: linear-gradient(#60a5fa,#2563eb);
    border-radius: 5px 5px 2px 2px;
}
.Card-chart span:nth-child(1) { height: 35%; }
.Card-chart span:nth-child(2) { height: 55%; }
.Card-chart span:nth-child(3) { height: 42%; }
.Card-chart span:nth-child(4) { height: 75%; }
.Card-chart span:nth-child(5) { height: 60%; }
.Card-chart span:nth-child(6) { height: 86%; }
.Card-chart span:nth-child(7) { height: 100%; }`,
  },
  {
    id: 1157,
    name: "Team Member Card",
    preview: (
      <div className="card-1157">
        <div className="card-1157-avatar">AK</div>
        <div>
          <h3>Alex Kim</h3>
          <span>Frontend Engineer</span>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <p>React specialist focused on fast and accessible interfaces.</p>
        <div className="card-1157-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>UI</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-avatar">AK</div>
    <div>
        <h3>Alex Kim</h3>
        <span>Frontend Engineer</span>
    </div>
    <button>
        <i class="fa-solid fa-ellipsis"></i>
    </button>
    <p>React specialist focused on fast and accessible interfaces.</p>
    <div class="Card-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>UI</span>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    width: 320px;
    padding: 22px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    float: left;
    margin-right: 13px;
    border-radius: 14px;
    background: #dbeafe;
    color: #2563eb;
    font-weight: 700;
}
.Card h3 {
    margin: 3px 0;
    font-size: 15px;
}
.Card > div span {
    color: #71717a;
    font-size: 11px;
}
.Card > button {
    position: absolute;
    right: 18px;
    top: 18px;
    border: none;
    background: transparent;
    color: #71717a;
}
.Card p {
    clear: both;
    padding-top: 18px;
    color: #71717a;
    font-size: 12px;
    line-height: 1.6;
}
.Card-tags {
    display: flex;
    gap: 6px;
}
.Card-tags span {
    padding: 5px 8px;
    background: #f4f4f5;
    border-radius: 7px;
    color: #52525b !important;
}`,
  },
  {
    id: 1158,
    name: "Notification Card",
    preview: (
      <div className="card-1158">
        <div className="card-1158-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div>
          <h3>New notification</h3>
          <p>Your project was successfully deployed.</p>
          <span>2 minutes ago</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-bell"></i>
    </div>
    <div>
        <h3>New notification</h3>
        <p>Your project was successfully deployed.</p>
        <span>2 minutes ago</span>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 14px;
    width: 330px;
    padding: 18px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}
.Card-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: #ede9fe;
    color: #7c3aed;
}
.Card h3 {
    margin: 2px 0 5px;
    font-size: 14px;
}
.Card p {
    margin: 0 0 7px;
    color: #71717a;
    font-size: 12px;
    line-height: 1.5;
}
.Card span {
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 1159,
    name: "Project Card",
    preview: (
      <div className="card-1159">
        <div className="card-1159-header">
          <i className="fa-solid fa-folder"></i>
          <span>ACTIVE</span>
        </div>
        <h3>Dashboard Redesign</h3>
        <p>Modernizing the analytics experience.</p>
        <div className="card-1159-progress">
          <span></span>
        </div>
        <div className="card-1159-footer">
          <span>78% complete</span>
          <span>12 days left</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <i class="fa-solid fa-folder"></i>
        <span>ACTIVE</span>
    </div>
    <h3>Dashboard Redesign</h3>
    <p>Modernizing the analytics experience.</p>
    <div class="Card-progress">
        <span></span>
    </div>
    <div class="Card-footer">
        <span>78% complete</span>
        <span>12 days left</span>
    </div>
</div>`,
    css: `.Card {
    width: 320px;
    padding: 22px;
    background: #18181b;
    color: white;
    border: 1px solid #3f3f46;
    border-radius: 18px;
}
.Card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Card-header i {
    color: #facc15;
}
.Card-header span {
    padding: 4px 7px;
    border-radius: 999px;
    background: rgba(34,197,94,.12);
    color: #4ade80;
    font-size: 9px;
    font-weight: 700;
}
.Card h3 {
    margin: 25px 0 7px;
}
.Card p {
    color: #a1a1aa;
    font-size: 12px;
}
.Card-progress {
    height: 7px;
    margin-top: 22px;
    overflow: hidden;
    background: #27272a;
    border-radius: 999px;
}
.Card-progress span {
    display: block;
    width: 78%;
    height: 100%;
    background: linear-gradient(90deg,#8b5cf6,#ec4899);
}
.Card-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1160,
    name: "Quote Card",
    preview: (
      <div className="card-1160">
        <i className="fa-solid fa-quote-left"></i>
        <blockquote>
          Great products are built by caring about the details that users never
          notice.
        </blockquote>
        <div className="card-1160-author">
          <div>JD</div>
          <span>Jordan Davis · Product Designer</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <i class="fa-solid fa-quote-left"></i>
    <blockquote>
        Great products are built by caring about the details that users never notice.
    </blockquote>
    <div class="Card-author">
        <div>JD</div>
        <span>Jordan Davis · Product Designer</span>
    </div>
</div>`,
    css: `.Card {
    width: 330px;
    padding: 25px;
    background: #fff7ed;
    border: 1px solid #fed7aa;
    border-radius: 20px;
}
.Card > i {
    color: #f97316;
    font-size: 22px;
}
.Card blockquote {
    margin: 18px 0 22px;
    font-size: 17px;
    line-height: 1.55;
    color: #431407;
}
.Card-author {
    display: flex;
    align-items: center;
    gap: 10px;
}
.Card-author div {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f97316;
    color: white;
    font-size: 10px;
    font-weight: 700;
}
.Card-author span {
    font-size: 11px;
    color: #9a3412;
}`,
  },
  {
    id: 1161,
    name: "Login Info Card",
    preview: (
      <div className="card-1161">
        <div className="card-1161-icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h3>Protected workspace</h3>
        <p>Your workspace is secured with enterprise-grade authentication.</p>
        <div className="card-1161-secure">
          <i className="fa-solid fa-check"></i>
          Security enabled
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>Protected workspace</h3>
    <p>Your workspace is secured with enterprise-grade authentication.</p>
    <div class="Card-secure">
        <i class="fa-solid fa-check"></i>
        Security enabled
    </div>
</div>`,
    css: `.Card {
    width: 310px;
    padding: 24px;
    background: linear-gradient(145deg,#f0fdf4,#dcfce7);
    border: 1px solid #bbf7d0;
    border-radius: 18px;
}
.Card-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: #22c55e;
    color: white;
}
.Card h3 {
    margin: 18px 0 7px;
}
.Card p {
    color: #166534;
    font-size: 12px;
    line-height: 1.6;
}
.Card-secure {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 10px;
    padding: 7px 10px;
    border-radius: 8px;
    background: white;
    color: #15803d;
    font-size: 11px;
    font-weight: 600;
}`,
  },
  {
    id: 1162,
    name: "Music Card",
    preview: (
      <div className="card-1162">
        <div className="card-1162-cover">
          <i className="fa-solid fa-music"></i>
        </div>
        <div className="card-1162-info">
          <h3>Midnight Echoes</h3>
          <p>Nova Collective</p>
          <div className="card-1162-player">
            <button>
              <i className="fa-solid fa-play"></i>
            </button>
            <div>
              <span></span>
            </div>
            <small>03:42</small>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-cover">
        <i class="fa-solid fa-music"></i>
    </div>
    <div class="Card-info">
        <h3>Midnight Echoes</h3>
        <p>Nova Collective</p>
        <div class="Card-player">
            <button>
                <i class="fa-solid fa-play"></i>
            </button>
            <div>
                <span></span>
            </div>
            <small>03:42</small>
        </div>
    </div>
</div>`,
    css: `.Card {
    width: 340px;
    padding: 16px;
    display: flex;
    gap: 16px;
    background: #18181b;
    border-radius: 18px;
    color: white;
}
.Card-cover {
    width: 95px;
    height: 95px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 14px;
    background: linear-gradient(135deg,#7c3aed,#ec4899);
    font-size: 28px;
}
.Card-info {
    flex: 1;
}
.Card-info h3 {
    margin: 7px 0 3px;
    font-size: 15px;
}
.Card-info p {
    margin: 0;
    color: #a1a1aa;
    font-size: 11px;
}
.Card-player {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 25px;
}
.Card-player button {
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background: white;
    color: #18181b;
}
.Card-player > div {
    flex: 1;
    height: 4px;
    background: #3f3f46;
    border-radius: 999px;
}
.Card-player > div span {
    display: block;
    width: 42%;
    height: 100%;
    background: #a78bfa;
    border-radius: inherit;
}
.Card-player small {
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 1163,
    name: "Event Card",
    preview: (
      <div className="card-1163">
        <div className="card-1163-date">
          <strong>18</strong>
          <span>SEP</span>
        </div>
        <div className="card-1163-content">
          <span>10:00 AM · Amsterdam</span>
          <h3>Frontend Workshop</h3>
          <p>Learn practical techniques for creating scalable UI systems.</p>
          <button>Reserve seat</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-date">
        <strong>18</strong>
        <span>SEP</span>
    </div>
    <div class="Card-content">
        <span>10:00 AM · Amsterdam</span>
        <h3>Frontend Workshop</h3>
        <p>Learn practical techniques for creating scalable UI systems.</p>
        <button>Reserve seat</button>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 18px;
    width: 350px;
    padding: 22px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-date {
    width: 55px;
    height: 62px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: #18181b;
    color: white;
    border-radius: 12px;
}
.Card-date strong {
    font-size: 23px;
}
.Card-date span {
    font-size: 9px;
}
.Card-content > span {
    color: #71717a;
    font-size: 10px;
}
.Card-content h3 {
    margin: 7px 0;
    font-size: 16px;
}
.Card-content p {
    color: #71717a;
    font-size: 11px;
    line-height: 1.5;
}
.Card-content button {
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    font-size: 11px;
}`,
  },
  {
    id: 1164,
    name: "Download Card",
    preview: (
      <div className="card-1164">
        <div className="card-1164-icon">
          <i className="fa-solid fa-file-lines"></i>
        </div>
        <div className="card-1164-info">
          <h3>design-system.zip</h3>
          <p>24.8 MB · ZIP archive</p>
        </div>
        <button>
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-file-lines"></i>
    </div>
    <div class="Card-info">
        <h3>design-system.zip</h3>
        <p>24.8 MB · ZIP archive</p>
    </div>
    <button>
        <i class="fa-solid fa-download"></i>
    </button>
</div>`,
    css: `.Card {
    display: flex;
    align-items: center;
    gap: 13px;
    width: 350px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
}
.Card-icon {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #dbeafe;
    color: #2563eb;
}
.Card-info {
    flex: 1;
}
.Card-info h3 {
    margin: 0 0 3px;
    font-size: 13px;
}
.Card-info p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
}
.Card > button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 9px;
    background: #f4f4f5;
    color: #52525b;
}`,
  },
  {
    id: 1165,
    name: "Gradient Startup Card",
    preview: (
      <div className="card-1165">
        <span className="card-1165-icon">
          <i className="fa-solid fa-rocket"></i>
        </span>
        <h3>Launch your next idea</h3>
        <p>Everything you need to turn an idea into a real product.</p>
        <button>Get started</button>
      </div>
    ),
    html: `<div class="Card">
    <span class="Card-icon">
        <i class="fa-solid fa-rocket"></i>
    </span>
    <h3>Launch your next idea</h3>
    <p>Everything you need to turn an idea into a real product.</p>
    <button>Get started</button>
</div>`,
    css: `.Card {
    width: 320px;
    padding: 28px;
    color: white;
    border-radius: 22px;
    background: linear-gradient(135deg,#2563eb,#7c3aed,#ec4899);
}
.Card-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: rgba(255,255,255,.15);
}
.Card h3 {
    margin: 24px 0 8px;
    font-size: 24px;
}
.Card p {
    color: rgba(255,255,255,.8);
    font-size: 13px;
    line-height: 1.6;
}
.Card button {
    margin-top: 15px;
    padding: 10px 15px;
    border: none;
    border-radius: 9px;
    background: white;
    color: #312e81;
    font-weight: 600;
}`,
  },
  {
    id: 1166,
    name: "Task Card",
    preview: (
      <div className="card-1166">
        <div className="card-1166-check">
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <h3>Finish component library</h3>
          <p>Build cards, buttons and form controls.</p>
        </div>
        <span>Today</span>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-check">
        <i class="fa-solid fa-check"></i>
    </div>
    <div>
        <h3>Finish component library</h3>
        <p>Build cards, buttons and form controls.</p>
    </div>
    <span>Today</span>
</div>`,
    css: `.Card {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 350px;
    padding: 16px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
}
.Card-check {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dcfce7;
    color: #16a34a;
}
.Card h3 {
    margin: 0 0 4px;
    font-size: 13px;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
}
.Card > span {
    margin-left: auto;
    color: #a1a1aa;
    font-size: 10px;
}`,
  },
  {
    id: 1167,
    name: "AI Card",
    preview: (
      <div className="card-1167">
        <div className="card-1167-orb"></div>
        <div className="card-1167-header">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <span>AI ASSISTANT</span>
        </div>
        <h3>Generate something amazing</h3>
        <p>Describe what you want and let AI help you build it.</p>
        <button>
          Try AI
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-orb"></div>
    <div class="Card-header">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        <span>AI ASSISTANT</span>
    </div>
    <h3>Generate something amazing</h3>
    <p>Describe what you want and let AI help you build it.</p>
    <button>
        Try AI
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 330px;
    padding: 26px;
    background: #09090b;
    color: white;
    border: 1px solid #27272a;
    border-radius: 20px;
}
.Card-orb {
    position: absolute;
    width: 130px;
    height: 130px;
    right: -40px;
    top: -50px;
    border-radius: 50%;
    background: #8b5cf6;
    filter: blur(60px);
    opacity: .45;
}
.Card-header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 700;
}
.Card h3 {
    position: relative;
    margin: 25px 0 8px;
    font-size: 22px;
}
.Card p {
    position: relative;
    color: #a1a1aa;
    font-size: 12px;
    line-height: 1.6;
}
.Card button {
    position: relative;
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border: 1px solid #52525b;
    border-radius: 9px;
    background: #18181b;
    color: white;
}`,
  },
  {
    id: 1168,
    name: "Team Invite Card",
    preview: (
      <div className="card-1168">
        <div className="card-1168-icon">
          <i className="fa-solid fa-user-plus"></i>
        </div>
        <h3>Invite teammates</h3>
        <p>Collaborate with your team and build faster together.</p>
        <div className="card-1168-input">
          <span>email@example.com</span>
          <button>Invite</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-user-plus"></i>
    </div>
    <h3>Invite teammates</h3>
    <p>Collaborate with your team and build faster together.</p>
    <div class="Card-input">
        <span>email@example.com</span>
        <button>Invite</button>
    </div>
</div>`,
    css: `.Card {
    width: 330px;
    padding: 23px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #f4f4f5;
    color: #52525b;
}
.Card h3 {
    margin: 17px 0 6px;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 12px;
    line-height: 1.5;
}
.Card-input {
    height: 42px;
    display: flex;
    align-items: center;
    margin-top: 18px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    overflow: hidden;
}
.Card-input span {
    flex: 1;
    padding-left: 11px;
    color: #a1a1aa;
    font-size: 10px;
}
.Card-input button {
    height: 100%;
    padding: 0 13px;
    border: none;
    background: #18181b;
    color: white;
    font-size: 10px;
}`,
  },
  {
    id: 1169,
    name: "Storage Card",
    preview: (
      <div className="card-1169">
        <div className="card-1169-header">
          <i className="fa-solid fa-hard-drive"></i>
          <span>STORAGE</span>
        </div>
        <strong>74.8 GB</strong>
        <p>of 100 GB used</p>
        <div className="card-1169-bar">
          <span></span>
        </div>
        <div className="card-1169-meta">
          <span>Documents</span>
          <span>74%</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <i class="fa-solid fa-hard-drive"></i>
        <span>STORAGE</span>
    </div>
    <strong>74.8 GB</strong>
    <p>of 100 GB used</p>
    <div class="Card-bar">
        <span></span>
    </div>
    <div class="Card-meta">
        <span>Documents</span>
        <span>74%</span>
    </div>
</div>`,
    css: `.Card {
    width: 300px;
    padding: 23px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
}
.Card-header {
    display: flex;
    gap: 7px;
    color: #64748b;
    font-size: 10px;
    font-weight: 700;
}
.Card > strong {
    display: block;
    margin-top: 19px;
    font-size: 30px;
}
.Card > p {
    margin: 3px 0 18px;
    color: #94a3b8;
    font-size: 11px;
}
.Card-bar {
    height: 8px;
    background: #e2e8f0;
    border-radius: 999px;
    overflow: hidden;
}
.Card-bar span {
    display: block;
    width: 74%;
    height: 100%;
    background: #3b82f6;
}
.Card-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
    color: #64748b;
    font-size: 10px;
}`,
  },
  {
    id: 1170,
    name: "Crypto Card",
    preview: (
      <div className="card-1170">
        <div className="card-1170-icon">₿</div>
        <div>
          <span>Bitcoin</span>
          <strong>$64,281</strong>
        </div>
        <div className="card-1170-change">+4.82%</div>
        <div className="card-1170-spark"></div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">₿</div>
    <div>
        <span>Bitcoin</span>
        <strong>$64,281</strong>
    </div>
    <div class="Card-change">+4.82%</div>
    <div class="Card-spark"></div>
</div>`,
    css: `.Card {
    position: relative;
    width: 320px;
    padding: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
    background: #18181b;
    color: white;
    border: 1px solid #27272a;
    border-radius: 18px;
}
.Card-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: #f59e0b;
    color: white;
    font-size: 23px;
    font-weight: 700;
}
.Card span {
    display: block;
    color: #a1a1aa;
    font-size: 10px;
}
.Card strong {
    display: block;
    margin-top: 4px;
    font-size: 17px;
}
.Card-change {
    color: #4ade80;
    font-size: 11px;
    font-weight: 700;
}
.Card-spark {
    position: absolute;
    right: 20px;
    bottom: 8px;
    width: 85px;
    height: 30px;
    border-bottom: 2px solid #22c55e;
    transform: skewY(-8deg);
}`,
  },
  {
    id: 1171,
    name: "Course Card",
    preview: (
      <div className="card-1171">
        <div className="card-1171-cover">
          <span>JS</span>
        </div>
        <div className="card-1171-body">
          <span>COURSE</span>
          <h3>Modern JavaScript</h3>
          <p>24 lessons · 6 hours</p>
          <div className="card-1171-progress">
            <span></span>
          </div>
          <small>64% complete</small>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-cover">
        <span>JS</span>
    </div>
    <div class="Card-body">
        <span>COURSE</span>
        <h3>Modern JavaScript</h3>
        <p>24 lessons · 6 hours</p>
        <div class="Card-progress">
            <span></span>
        </div>
        <small>64% complete</small>
    </div>
</div>`,
    css: `.Card {
    width: 315px;
    overflow: hidden;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-cover {
    height: 110px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#f97316,#ef4444);
}
.Card-cover span {
    font-size: 35px;
    color: white;
    font-weight: 800;
}
.Card-body {
    padding: 20px;
}
.Card-body > span {
    font-size: 9px;
    color: #f97316;
    font-weight: 700;
    letter-spacing: 1px;
}
.Card h3 {
    margin: 7px 0;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 11px;
}
.Card-progress {
    height: 6px;
    margin-top: 17px;
    background: #f4f4f5;
    border-radius: 999px;
}
.Card-progress span {
    display: block;
    width: 64%;
    height: 100%;
    background: #f97316;
    border-radius: inherit;
}
.Card small {
    display: block;
    margin-top: 7px;
    color: #a1a1aa;
}`,
  },
  {
    id: 1172,
    name: "Repository Card",
    preview: (
      <div className="card-1172">
        <div className="card-1172-header">
          <i className="fa-brands fa-github"></i>
          <span>PUBLIC</span>
        </div>
        <h3>awesome-ui-library</h3>
        <p>A collection of reusable interface components.</p>
        <div className="card-1172-stats">
          <span>
            <i className="fa-solid fa-star"></i> 1.2k
          </span>
          <span>
            <i className="fa-solid fa-code-branch"></i> 248
          </span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <i class="fa-brands fa-github"></i>
        <span>PUBLIC</span>
    </div>
    <h3>awesome-ui-library</h3>
    <p>A collection of reusable interface components.</p>
    <div class="Card-stats">
        <span><i class="fa-solid fa-star"></i> 1.2k</span>
        <span><i class="fa-solid fa-code-branch"></i> 248</span>
        <span>TypeScript</span>
    </div>
</div>`,
    css: `.Card {
    width: 330px;
    padding: 23px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-header {
    display: flex;
    justify-content: space-between;
    color: #18181b;
}
.Card-header span {
    color: #16a34a;
    font-size: 9px;
    font-weight: 700;
}
.Card h3 {
    margin: 22px 0 6px;
}
.Card p {
    color: #71717a;
    font-size: 12px;
    line-height: 1.5;
}
.Card-stats {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}
.Card-stats span {
    color: #71717a;
    font-size: 10px;
}
.Card-stats i {
    margin-right: 4px;
}
.Card-stats i.fa-star {
    color: #f59e0b;
}`,
  },
  {
    id: 1173,
    name: "Weather Card",
    preview: (
      <div className="card-1173">
        <div className="card-1173-top">
          <div>
            <span>Amsterdam</span>
            <strong>22°</strong>
          </div>
          <i className="fa-solid fa-cloud-sun"></i>
        </div>
        <p>Partly cloudy</p>
        <div className="card-1173-hours">
          <span>12°</span>
          <span>18°</span>
          <span>22°</span>
          <span>20°</span>
          <span>16°</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <div>
            <span>Amsterdam</span>
            <strong>22°</strong>
        </div>
        <i class="fa-solid fa-cloud-sun"></i>
    </div>
    <p>Partly cloudy</p>
    <div class="Card-hours">
        <span>12°</span>
        <span>18°</span>
        <span>22°</span>
        <span>20°</span>
        <span>16°</span>
    </div>
</div>`,
    css: `.Card {
    width: 320px;
    padding: 24px;
    color: white;
    border-radius: 20px;
    background: linear-gradient(145deg,#0ea5e9,#2563eb);
}
.Card-top {
    display: flex;
    justify-content: space-between;
}
.Card-top span {
    display: block;
    font-size: 12px;
    opacity: .8;
}
.Card-top strong {
    display: block;
    margin-top: 3px;
    font-size: 43px;
}
.Card-top > i {
    font-size: 38px;
    margin-top: 10px;
}
.Card > p {
    margin: 0;
    font-size: 12px;
    opacity: .8;
}
.Card-hours {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
}
.Card-hours span {
    padding: 8px 9px;
    border-radius: 9px;
    background: rgba(255,255,255,.12);
    font-size: 10px;
}`,
  },
  {
    id: 1174,
    name: "Message Card",
    preview: (
      <div className="card-1174">
        <div className="card-1174-avatar">S</div>
        <div className="card-1174-content">
          <div className="card-1174-head">
            <strong>Sarah</strong>
            <span>09:42</span>
          </div>
          <p>Hey André, are we still on for the meeting tomorrow?</p>
          <div className="card-1174-actions">
            <button>Reply</button>
            <button>Mark read</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-avatar">S</div>
    <div class="Card-content">
        <div class="Card-head">
            <strong>Sarah</strong>
            <span>09:42</span>
        </div>
        <p>Hey André, are we still on for the meeting tomorrow?</p>
        <div class="Card-actions">
            <button>Reply</button>
            <button>Mark read</button>
        </div>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 12px;
    width: 350px;
    padding: 17px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}
.Card-avatar {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    background: #f4f4f5;
    border-radius: 50%;
    font-weight: 700;
}
.Card-content {
    flex: 1;
}
.Card-head {
    display: flex;
    justify-content: space-between;
}
.Card-head strong {
    font-size: 13px;
}
.Card-head span {
    color: #a1a1aa;
    font-size: 9px;
}
.Card p {
    margin: 7px 0 12px;
    color: #52525b;
    font-size: 11px;
    line-height: 1.5;
}
.Card-actions {
    display: flex;
    gap: 6px;
}
.Card-actions button {
    padding: 5px 9px;
    border: none;
    border-radius: 7px;
    background: #f4f4f5;
    color: #52525b;
    font-size: 9px;
}`,
  },
  {
    id: 1175,
    name: "Upgrade Card",
    preview: (
      <div className="card-1175">
        <div className="card-1175-icon">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <div>
          <span>Unlock more</span>
          <h3>Upgrade to Pro</h3>
          <p>Get unlimited access to every feature.</p>
        </div>
        <button>Upgrade</button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <div>
        <span>Unlock more</span>
        <h3>Upgrade to Pro</h3>
        <p>Get unlimited access to every feature.</p>
    </div>
    <button>Upgrade</button>
</div>`,
    css: `.Card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 14px;
    width: 360px;
    padding: 18px;
    background: linear-gradient(135deg,#fff7ed,#fef3c7);
    border: 1px solid #fed7aa;
    border-radius: 18px;
}
.Card-icon {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: #f97316;
    color: white;
}
.Card span {
    color: #9a3412;
    font-size: 9px;
}
.Card h3 {
    margin: 3px 0;
    font-size: 14px;
}
.Card p {
    margin: 0;
    color: #9a3412;
    font-size: 10px;
}
.Card > button {
    padding: 8px 11px;
    border: none;
    border-radius: 8px;
    background: #f97316;
    color: white;
    font-size: 10px;
    font-weight: 600;
}`,
  },
  {
    id: 1176,
    name: "Profile Stats Card",
    preview: (
      <div className="card-1176">
        <div className="card-1176-cover"></div>
        <div className="card-1176-avatar">A</div>
        <div className="card-1176-body">
          <h3>André</h3>
          <p>Software Developer</p>
          <div className="card-1176-stats">
            <div>
              <strong>35</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>33</strong>
              <span>Stars</span>
            </div>
            <div>
              <strong>5</strong>
              <span>PRs</span>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-cover"></div>
    <div class="Card-avatar">A</div>
    <div class="Card-body">
        <h3>André</h3>
        <p>Software Developer</p>
        <div class="Card-stats">
            <div>
                <strong>35</strong>
                <span>Projects</span>
            </div>
            <div>
                <strong>33</strong>
                <span>Stars</span>
            </div>
            <div>
                <strong>5</strong>
                <span>PRs</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Card {
    overflow: hidden;
    width: 320px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 20px;
}
.Card-cover {
    height: 100px;
    background: linear-gradient(135deg,#06b6d4,#6366f1,#ec4899);
}
.Card-avatar {
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
    margin: -32px auto 0;
    position: relative;
    border: 4px solid white;
    border-radius: 50%;
    background: #18181b;
    color: white;
    font-size: 22px;
    font-weight: 700;
}
.Card-body {
    padding: 12px 24px 24px;
    text-align: center;
}
.Card-body h3 {
    margin: 5px 0;
}
.Card-body p {
    color: #71717a;
    font-size: 11px;
}
.Card-stats {
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-top: 20px;
}
.Card-stats div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Card-stats strong {
    font-size: 17px;
}
.Card-stats span {
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1177,
    name: "Glass Product Card",
    preview: (
      <div className="card-1177">
        <div className="card-1177-art">
          <div className="card-1177-orb"></div>
          <i className="fa-solid fa-cube"></i>
        </div>
        <h3>Crystal UI Kit</h3>
        <p>A premium collection of glass-inspired interfaces.</p>
        <div className="card-1177-footer">
          <strong>€24</strong>
          <button>View kit</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-art">
        <div class="Card-orb"></div>
        <i class="fa-solid fa-cube"></i>
    </div>
    <h3>Crystal UI Kit</h3>
    <p>A premium collection of glass-inspired interfaces.</p>
    <div class="Card-footer">
        <strong>€24</strong>
        <button>View kit</button>
    </div>
</div>`,
    css: `.Card {
    width: 310px;
    padding: 15px;
    color: white;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 20px;
    backdrop-filter: blur(15px);
}
.Card-art {
    position: relative;
    height: 150px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 14px;
    background: linear-gradient(135deg,#0f172a,#312e81);
}
.Card-orb {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #38bdf8;
    filter: blur(25px);
    opacity: .55;
}
.Card-art i {
    position: relative;
    font-size: 42px;
}
.Card h3 {
    margin: 18px 5px 6px;
}
.Card p {
    margin: 0 5px;
    color: rgba(255,255,255,.6);
    font-size: 11px;
    line-height: 1.5;
}
.Card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 5px 5px;
}
.Card-footer strong {
    font-size: 20px;
}
.Card-footer button {
    padding: 8px 11px;
    border: none;
    border-radius: 8px;
    background: white;
    color: #18181b;
    font-size: 10px;
}`,
  },
  {
    id: 1178,
    name: "Success Card",
    preview: (
      <div className="card-1178">
        <div className="card-1178-icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <h3>Payment successful</h3>
          <p>Your order #49281 has been confirmed.</p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-check"></i>
    </div>
    <div>
        <h3>Payment successful</h3>
        <p>Your order #49281 has been confirmed.</p>
    </div>
    <button>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</div>`,
    css: `.Card {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 350px;
    padding: 17px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 15px;
}
.Card-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #22c55e;
    color: white;
}
.Card > div:nth-child(2) {
    flex: 1;
}
.Card h3 {
    margin: 0 0 4px;
    font-size: 13px;
}
.Card p {
    margin: 0;
    color: #15803d;
    font-size: 10px;
}
.Card > button {
    border: none;
    background: transparent;
    color: #16a34a;
}`,
  },
  {
    id: 1179,
    name: "Warning Card",
    preview: (
      <div className="card-1179">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <div>
          <h3>Action required</h3>
          <p>Your subscription expires in 3 days.</p>
          <button>Renew now</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <div>
        <h3>Action required</h3>
        <p>Your subscription expires in 3 days.</p>
        <button>Renew now</button>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 14px;
    width: 340px;
    padding: 19px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 16px;
}
.Card > i {
    color: #d97706;
    margin-top: 3px;
}
.Card h3 {
    margin: 0 0 5px;
    color: #78350f;
    font-size: 13px;
}
.Card p {
    margin: 0 0 11px;
    color: #92400e;
    font-size: 10px;
}
.Card button {
    padding: 6px 9px;
    border: none;
    border-radius: 7px;
    background: #f59e0b;
    color: white;
    font-size: 9px;
}`,
  },
  {
    id: 1180,
    name: "Danger Card",
    preview: (
      <div className="card-1180">
        <div className="card-1180-icon">
          <i className="fa-solid fa-trash"></i>
        </div>
        <div>
          <h3>Delete project?</h3>
          <p>This action cannot be undone.</p>
          <div className="card-1180-actions">
            <button>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-trash"></i>
    </div>
    <div>
        <h3>Delete project?</h3>
        <p>This action cannot be undone.</p>
        <div class="Card-actions">
            <button>Cancel</button>
            <button>Delete</button>
        </div>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 13px;
    width: 350px;
    padding: 20px;
    background: #fff;
    border: 1px solid #fecaca;
    border-radius: 17px;
}
.Card-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 11px;
    background: #fee2e2;
    color: #dc2626;
}
.Card h3 {
    margin: 0 0 5px;
    font-size: 14px;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
}
.Card-actions {
    display: flex;
    gap: 6px;
    margin-top: 14px;
}
.Card-actions button {
    padding: 6px 9px;
    border-radius: 7px;
    font-size: 9px;
}
.Card-actions button:first-child {
    border: 1px solid #d4d4d8;
    background: white;
}
.Card-actions button:last-child {
    border: none;
    background: #dc2626;
    color: white;
}`,
  },
  {
    id: 1181,
    name: "Team Progress Card",
    preview: (
      <div className="card-1181">
        <div className="card-1181-header">
          <div>
            <h3>Website redesign</h3>
            <p>Team progress</p>
          </div>
          <strong>82%</strong>
        </div>
        <div className="card-1181-progress">
          <span></span>
        </div>
        <div className="card-1181-avatars">
          <span>AB</span>
          <span>SK</span>
          <span>JD</span>
          <span>+4</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <div>
            <h3>Website redesign</h3>
            <p>Team progress</p>
        </div>
        <strong>82%</strong>
    </div>
    <div class="Card-progress">
        <span></span>
    </div>
    <div class="Card-avatars">
        <span>AB</span>
        <span>SK</span>
        <span>JD</span>
        <span>+4</span>
    </div>
</div>`,
    css: `.Card {
    width: 340px;
    padding: 22px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.Card h3 {
    margin: 0;
    font-size: 15px;
}
.Card p {
    margin: 4px 0 0;
    color: #a1a1aa;
    font-size: 10px;
}
.Card-header strong {
    color: #7c3aed;
    font-size: 18px;
}
.Card-progress {
    height: 7px;
    margin-top: 20px;
    background: #f4f4f5;
    border-radius: 999px;
}
.Card-progress span {
    display: block;
    width: 82%;
    height: 100%;
    background: #7c3aed;
    border-radius: inherit;
}
.Card-avatars {
    display: flex;
    margin-top: 17px;
}
.Card-avatars span {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    margin-right: -4px;
    border: 2px solid white;
    border-radius: 50%;
    background: #18181b;
    color: white;
    font-size: 8px;
}`,
  },
  {
    id: 1182,
    name: "Newsletter Card",
    preview: (
      <div className="card-1182">
        <div className="card-1182-icon">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <h3>Stay in the loop</h3>
        <p>Get the latest design and development tips in your inbox.</p>
        <div className="card-1182-form">
          <span>you@example.com</span>
          <button>Join</button>
        </div>
        <small>No spam. Unsubscribe anytime.</small>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-regular fa-envelope"></i>
    </div>
    <h3>Stay in the loop</h3>
    <p>Get the latest design and development tips in your inbox.</p>
    <div class="Card-form">
        <span>you@example.com</span>
        <button>Join</button>
    </div>
    <small>No spam. Unsubscribe anytime.</small>
</div>`,
    css: `.Card {
    width: 340px;
    padding: 25px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 20px;
}
.Card-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #f4f4f5;
}
.Card h3 {
    margin: 18px 0 6px;
}
.Card p {
    color: #71717a;
    font-size: 12px;
    line-height: 1.5;
}
.Card-form {
    height: 43px;
    display: flex;
    align-items: center;
    margin-top: 18px;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    overflow: hidden;
}
.Card-form span {
    flex: 1;
    padding-left: 11px;
    color: #a1a1aa;
    font-size: 10px;
}
.Card-form button {
    height: 100%;
    padding: 0 14px;
    border: none;
    background: #18181b;
    color: white;
}
.Card small {
    display: block;
    margin-top: 10px;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1183,
    name: "Feature Card",
    preview: (
      <div className="card-1183">
        <div className="card-1183-icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h3>Smart automation</h3>
        <p>Automate repetitive workflows and save hours every week.</p>
        <a href="#">
          Learn more
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </div>
    <h3>Smart automation</h3>
    <p>Automate repetitive workflows and save hours every week.</p>
    <a href="#">
        Learn more
        <i class="fa-solid fa-arrow-right"></i>
    </a>
</div>`,
    css: `.Card {
    width: 300px;
    padding: 24px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
    transition: .25s;
}
.Card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0,0,0,.08);
}
.Card-icon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: #ede9fe;
    color: #7c3aed;
}
.Card h3 {
    margin: 18px 0 7px;
}
.Card p {
    color: #71717a;
    font-size: 12px;
    line-height: 1.6;
}
.Card a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 10px;
    color: #7c3aed;
    text-decoration: none;
    font-size: 11px;
    font-weight: 600;
}`,
  },
  {
    id: 1184,
    name: "Rainbow Card",
    preview: (
      <div className="card-1184">
        <div className="card-1184-rainbow"></div>
        <div className="card-1184-content">
          <i className="fa-solid fa-palette"></i>
          <h3>Color everywhere</h3>
          <p>A playful card with a continuously moving rainbow atmosphere.</p>
          <button>Explore colors</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-rainbow"></div>
    <div class="Card-content">
        <i class="fa-solid fa-palette"></i>
        <h3>Color everywhere</h3>
        <p>A playful card with a continuously moving rainbow atmosphere.</p>
        <button>Explore colors</button>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 320px;
    padding: 2px;
    border-radius: 21px;
    background: #18181b;
}
.Card-rainbow {
    position: absolute;
    inset: -100%;
    background: conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#ef4444);
    animation: rainbow-card 5s linear infinite;
}
.Card-content {
    position: relative;
    padding: 25px;
    border-radius: 19px;
    background: #18181b;
    color: white;
}
.Card-content > i {
    font-size: 24px;
}
.Card-content h3 {
    margin: 18px 0 7px;
}
.Card-content p {
    color: #a1a1aa;
    font-size: 12px;
    line-height: 1.6;
}
.Card-content button {
    padding: 9px 12px;
    border: none;
    border-radius: 8px;
    background: white;
    color: #18181b;
    font-size: 10px;
}
@keyframes rainbow-card {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1185,
    name: "Glass Stats Card",
    preview: (
      <div className="card-1185">
        <div className="card-1185-top">
          <span>Weekly visitors</span>
          <i className="fa-solid fa-chart-simple"></i>
        </div>
        <strong>18,429</strong>
        <span className="card-1185-change">+27.3% this week</span>
        <div className="card-1185-bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <span>Weekly visitors</span>
        <i class="fa-solid fa-chart-simple"></i>
    </div>
    <strong>18,429</strong>
    <span class="Card-change">+27.3% this week</span>
    <div class="Card-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Card {
    width: 310px;
    padding: 23px;
    color: white;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 19px;
    backdrop-filter: blur(15px);
}
.Card-top {
    display: flex;
    justify-content: space-between;
    color: rgba(255,255,255,.6);
    font-size: 11px;
}
.Card > strong {
    display: block;
    margin: 17px 0 4px;
    font-size: 32px;
}
.Card-change {
    color: #4ade80;
    font-size: 10px;
}
.Card-bars {
    display: flex;
    align-items: end;
    height: 60px;
    gap: 6px;
    margin-top: 20px;
}
.Card-bars span {
    flex: 1;
    background: linear-gradient(#38bdf8,#6366f1);
    border-radius: 4px 4px 1px 1px;
}
.Card-bars span:nth-child(1) { height: 30%; }
.Card-bars span:nth-child(2) { height: 52%; }
.Card-bars span:nth-child(3) { height: 42%; }
.Card-bars span:nth-child(4) { height: 74%; }
.Card-bars span:nth-child(5) { height: 57%; }
.Card-bars span:nth-child(6) { height: 82%; }
.Card-bars span:nth-child(7) { height: 100%; }`,
  },
  {
    id: 1186,
    name: "Review Card",
    preview: (
      <div className="card-1186">
        <div className="card-1186-top">
          <div className="card-1186-avatar">M</div>
          <div>
            <strong>Mike Johnson</strong>
            <span>Verified customer</span>
          </div>
          <div className="card-1186-stars">★★★★★</div>
        </div>
        <p>
          “The interface is incredibly clean. Everything feels fast, intuitive
          and polished.”
        </p>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <div class="Card-avatar">M</div>
        <div>
            <strong>Mike Johnson</strong>
            <span>Verified customer</span>
        </div>
        <div class="Card-stars">★★★★★</div>
    </div>
    <p>“The interface is incredibly clean. Everything feels fast, intuitive and polished.”</p>
</div>`,
    css: `.Card {
    width: 350px;
    padding: 21px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-top {
    display: flex;
    align-items: center;
    gap: 11px;
}
.Card-avatar {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dbeafe;
    color: #2563eb;
    font-weight: 700;
}
.Card-top > div:nth-child(2) {
    flex: 1;
}
.Card-top strong {
    display: block;
    font-size: 12px;
}
.Card-top span {
    color: #a1a1aa;
    font-size: 9px;
}
.Card-stars {
    color: #f59e0b;
    font-size: 10px;
}
.Card > p {
    margin: 18px 0 0;
    color: #52525b;
    font-size: 12px;
    line-height: 1.6;
}`,
  },
  {
    id: 1187,
    name: "Link Preview Card",
    preview: (
      <div className="card-1187">
        <div className="card-1187-image"></div>
        <div className="card-1187-content">
          <span>example.com</span>
          <h3>Build better websites with modern CSS</h3>
          <p>Modern techniques for creating polished web experiences.</p>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-image"></div>
    <div class="Card-content">
        <span>example.com</span>
        <h3>Build better websites with modern CSS</h3>
        <p>Modern techniques for creating polished web experiences.</p>
    </div>
</div>`,
    css: `.Card {
    width: 340px;
    overflow: hidden;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
}
.Card-image {
    height: 125px;
    background: linear-gradient(135deg,#dbeafe,#ede9fe,#fce7f3);
}
.Card-content {
    padding: 17px;
}
.Card-content > span {
    color: #71717a;
    font-size: 9px;
}
.Card h3 {
    margin: 7px 0;
    font-size: 14px;
    line-height: 1.35;
}
.Card p {
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}`,
  },
  {
    id: 1188,
    name: "Server Status Card",
    preview: (
      <div className="card-1188">
        <div className="card-1188-header">
          <div className="card-1188-status"></div>
          <h3>All systems operational</h3>
        </div>
        <div className="card-1188-services">
          <span>
            <i className="fa-solid fa-circle"></i> API
          </span>
          <span>
            <i className="fa-solid fa-circle"></i> Database
          </span>
          <span>
            <i className="fa-solid fa-circle"></i> CDN
          </span>
          <span>
            <i className="fa-solid fa-circle"></i> Storage
          </span>
        </div>
        <small>Updated 2 minutes ago</small>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <div class="Card-status"></div>
        <h3>All systems operational</h3>
    </div>
    <div class="Card-services">
        <span><i class="fa-solid fa-circle"></i> API</span>
        <span><i class="fa-solid fa-circle"></i> Database</span>
        <span><i class="fa-solid fa-circle"></i> CDN</span>
        <span><i class="fa-solid fa-circle"></i> Storage</span>
    </div>
    <small>Updated 2 minutes ago</small>
</div>`,
    css: `.Card {
    width: 320px;
    padding: 21px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 17px;
}
.Card-header {
    display: flex;
    align-items: center;
    gap: 9px;
}
.Card-status {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px rgba(34,197,94,.5);
}
.Card h3 {
    margin: 0;
    font-size: 13px;
}
.Card-services {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
}
.Card-services span {
    padding: 7px 9px;
    background: #f4f4f5;
    border-radius: 7px;
    color: #52525b;
    font-size: 9px;
}
.Card-services i {
    color: #22c55e;
    font-size: 6px;
    margin-right: 4px;
}
.Card small {
    display: block;
    margin-top: 15px;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1189,
    name: "Credit Card",
    preview: (
      <div className="card-1189">
        <div className="card-1189-top">
          <span>VISA</span>
          <i className="fa-solid fa-wifi"></i>
        </div>
        <div className="card-1189-number">•••• 4281</div>
        <div className="card-1189-bottom">
          <span>ANDRÉ</span>
          <small>12/29</small>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <span>VISA</span>
        <i class="fa-solid fa-wifi"></i>
    </div>
    <div class="Card-number">•••• 4281</div>
    <div class="Card-bottom">
        <span>ANDRÉ</span>
        <small>12/29</small>
    </div>
</div>`,
    css: `.Card {
    width: 310px;
    height: 180px;
    padding: 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    border-radius: 20px;
    background: linear-gradient(135deg,#18181b,#52525b);
    box-shadow: 0 20px 40px rgba(0,0,0,.2);
}
.Card-top,
.Card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Card-top span {
    font-weight: 800;
    font-size: 19px;
    font-style: italic;
}
.Card-top i {
    transform: rotate(90deg);
}
.Card-number {
    font-size: 20px;
    letter-spacing: 4px;
}
.Card-bottom {
    font-size: 10px;
}
.Card-bottom small {
    opacity: .7;
}`,
  },
  {
    id: 1190,
    name: "Achievement Card",
    preview: (
      <div className="card-1190">
        <div className="card-1190-medal">
          <i className="fa-solid fa-medal"></i>
        </div>
        <div>
          <span>ACHIEVEMENT UNLOCKED</span>
          <h3>100 Projects</h3>
          <p>You reached a major milestone.</p>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-medal">
        <i class="fa-solid fa-medal"></i>
    </div>
    <div>
        <span>ACHIEVEMENT UNLOCKED</span>
        <h3>100 Projects</h3>
        <p>You reached a major milestone.</p>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 330px;
    padding: 19px;
    background: linear-gradient(135deg,#fffbeb,#fef3c7);
    border: 1px solid #fde68a;
    border-radius: 17px;
}
.Card-medal {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 15px;
    background: #f59e0b;
    color: white;
    font-size: 21px;
}
.Card span {
    color: #a16207;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .8px;
}
.Card h3 {
    margin: 4px 0;
    color: #713f12;
    font-size: 15px;
}
.Card p {
    margin: 0;
    color: #92400e;
    font-size: 10px;
}`,
  },
  {
    id: 1191,
    name: "Steps Card",
    preview: (
      <div className="card-1191">
        <span className="card-1191-step active">1</span>
        <div className="card-1191-line"></div>
        <span className="card-1191-step">2</span>
        <div className="card-1191-line"></div>
        <span className="card-1191-step">3</span>
        <div className="card-1191-content">
          <h3>Setup your workspace</h3>
          <p>You're one step away from getting started.</p>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <span class="Card-step active">1</span>
    <div class="Card-line"></div>
    <span class="Card-step">2</span>
    <div class="Card-line"></div>
    <span class="Card-step">3</span>
    <div class="Card-content">
        <h3>Setup your workspace</h3>
        <p>You're one step away from getting started.</p>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    width: 360px;
    padding: 24px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-step {
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: #f4f4f5;
    color: #71717a;
    font-size: 10px;
    font-weight: 700;
}
.Card-step.active {
    background: #2563eb;
    color: white;
}
.Card-line {
    width: 25px;
    height: 1px;
    background: #e4e4e7;
}
.Card-content {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: -72px;
}
.Card-content h3 {
    margin: 0 0 5px;
    font-size: 13px;
}
.Card-content p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 1192,
    name: "Code Card",
    preview: (
      <div className="card-1192">
        <div className="card-1192-header">
          <span>
            <i className="fa-solid fa-code"></i>
            component.tsx
          </span>
          <button>
            <i className="fa-regular fa-copy"></i>
          </button>
        </div>
        <pre>
          <code>
            const button = {"{"}
            color: "purple"
            {"}"}
          </code>
        </pre>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-header">
        <span>
            <i class="fa-solid fa-code"></i>
            component.tsx
        </span>
        <button>
            <i class="fa-regular fa-copy"></i>
        </button>
    </div>
    <pre><code>const button = {
    color: "purple"
}</code></pre>
</div>`,
    css: `.Card {
    width: 330px;
    overflow: hidden;
    background: #09090b;
    border: 1px solid #27272a;
    border-radius: 16px;
}
.Card-header {
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
    border-bottom: 1px solid #27272a;
}
.Card-header span {
    color: #a1a1aa;
    font-size: 10px;
}
.Card-header i {
    margin-right: 6px;
}
.Card-header button {
    border: none;
    background: transparent;
    color: #71717a;
}
.Card pre {
    padding: 16px;
    margin: 0;
    overflow: auto;
    color: #c4b5fd;
    font-size: 11px;
    line-height: 1.6;
}`,
  },
  {
    id: 1193,
    name: "Download Progress Card",
    preview: (
      <div className="card-1193">
        <div className="card-1193-icon">
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </div>
        <div className="card-1193-content">
          <div className="card-1193-head">
            <strong>project-files.zip</strong>
            <span>68%</span>
          </div>
          <div className="card-1193-bar">
            <span></span>
          </div>
          <p>Downloading 8.4 MB of 12.3 MB</p>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-cloud-arrow-down"></i>
    </div>
    <div class="Card-content">
        <div class="Card-head">
            <strong>project-files.zip</strong>
            <span>68%</span>
        </div>
        <div class="Card-bar">
            <span></span>
        </div>
        <p>Downloading 8.4 MB of 12.3 MB</p>
    </div>
</div>`,
    css: `.Card {
    display: flex;
    gap: 13px;
    width: 350px;
    padding: 17px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
}
.Card-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 11px;
    background: #dbeafe;
    color: #2563eb;
}
.Card-content {
    flex: 1;
}
.Card-head {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
}
.Card-head span {
    color: #2563eb;
}
.Card-bar {
    height: 6px;
    margin-top: 10px;
    background: #f4f4f5;
    border-radius: 999px;
}
.Card-bar span {
    display: block;
    width: 68%;
    height: 100%;
    background: #2563eb;
    border-radius: inherit;
}
.Card-content p {
    margin: 7px 0 0;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1194,
    name: "Minimal Product Card",
    preview: (
      <div className="card-1194">
        <div className="card-1194-icon">
          <i className="fa-solid fa-laptop"></i>
        </div>
        <span>TECH</span>
        <h3>MacBook Air</h3>
        <p>Light. Fast. Beautiful.</p>
        <div className="card-1194-footer">
          <strong>€1,199</strong>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-icon">
        <i class="fa-solid fa-laptop"></i>
    </div>
    <span>TECH</span>
    <h3>MacBook Air</h3>
    <p>Light. Fast. Beautiful.</p>
    <div class="Card-footer">
        <strong>€1,199</strong>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </div>
</div>`,
    css: `.Card {
    width: 280px;
    padding: 22px;
    background: #fafafa;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-icon {
    width: 100%;
    height: 130px;
    display: grid;
    place-items: center;
    margin-bottom: 18px;
    border-radius: 13px;
    background: #f4f4f5;
    font-size: 42px;
    color: #27272a;
}
.Card > span {
    color: #a1a1aa;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}
.Card h3 {
    margin: 6px 0;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 11px;
}
.Card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
.Card-footer strong {
    font-size: 18px;
}`,
  },
  {
    id: 1195,
    name: "Gradient Profile Card",
    preview: (
      <div className="card-1195">
        <div className="card-1195-background"></div>
        <div className="card-1195-avatar">A</div>
        <h3>André</h3>
        <span>Creative Developer</span>
        <p>Building interfaces where design and code meet.</p>
        <div className="card-1195-socials">
          <button>
            <i className="fa-brands fa-github"></i>
          </button>
          <button>
            <i className="fa-brands fa-linkedin"></i>
          </button>
          <button>
            <i className="fa-brands fa-x-twitter"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-background"></div>
    <div class="Card-avatar">A</div>
    <h3>André</h3>
    <span>Creative Developer</span>
    <p>Building interfaces where design and code meet.</p>
    <div class="Card-socials">
        <button><i class="fa-brands fa-github"></i></button>
        <button><i class="fa-brands fa-linkedin"></i></button>
        <button><i class="fa-brands fa-x-twitter"></i></button>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 300px;
    padding: 28px;
    text-align: center;
    color: white;
    background: #18181b;
    border-radius: 22px;
}
.Card-background {
    position: absolute;
    inset: 0 0 auto;
    height: 120px;
    background: linear-gradient(135deg,#06b6d4,#6366f1,#ec4899);
}
.Card-avatar {
    position: relative;
    width: 70px;
    height: 70px;
    display: grid;
    place-items: center;
    margin: 35px auto 15px;
    border: 4px solid #18181b;
    border-radius: 50%;
    background: #27272a;
    font-size: 23px;
    font-weight: 700;
}
.Card h3 {
    position: relative;
    margin: 0;
}
.Card > span {
    position: relative;
    display: block;
    margin-top: 5px;
    color: #a1a1aa;
    font-size: 10px;
}
.Card p {
    position: relative;
    color: #a1a1aa;
    font-size: 11px;
    line-height: 1.5;
}
.Card-socials {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 18px;
}
.Card-socials button {
    width: 34px;
    height: 34px;
    border: 1px solid #3f3f46;
    border-radius: 9px;
    background: #27272a;
    color: #d4d4d8;
}`,
  },
  {
    id: 1196,
    name: "Analytics Card",
    preview: (
      <div className="card-1196">
        <div className="card-1196-top">
          <div>
            <span>Conversion rate</span>
            <strong>8.42%</strong>
          </div>
          <span className="card-1196-positive">+1.8%</span>
        </div>
        <div className="card-1196-line">
          <span></span>
        </div>
        <div className="card-1196-labels">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <div>
            <span>Conversion rate</span>
            <strong>8.42%</strong>
        </div>
        <span class="Card-positive">+1.8%</span>
    </div>
    <div class="Card-line">
        <span></span>
    </div>
    <div class="Card-labels">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
    </div>
</div>`,
    css: `.Card {
    width: 330px;
    padding: 22px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 18px;
}
.Card-top {
    display: flex;
    justify-content: space-between;
}
.Card-top span:first-child {
    color: #71717a;
    font-size: 10px;
}
.Card-top strong {
    display: block;
    margin-top: 5px;
    font-size: 27px;
}
.Card-positive {
    color: #16a34a;
    font-size: 10px;
    font-weight: 700;
}
.Card-line {
    position: relative;
    height: 80px;
    margin-top: 15px;
    overflow: hidden;
}
.Card-line::before {
    content: "";
    position: absolute;
    inset: 20px 0;
    background: repeating-linear-gradient(to bottom,#f4f4f5 0 1px,transparent 1px 25px);
}
.Card-line span {
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    height: 35px;
    border-top: 3px solid #6366f1;
    border-radius: 50%;
    transform: rotate(-3deg);
}
.Card-labels {
    display: flex;
    justify-content: space-between;
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 1197,
    name: "Contact Card",
    preview: (
      <div className="card-1197">
        <div className="card-1197-avatar">L</div>
        <div className="card-1197-content">
          <h3>Lisa Williams</h3>
          <p>Product Manager</p>
          <span>
            <i className="fa-solid fa-envelope"></i> lisa@example.com
          </span>
          <span>
            <i className="fa-solid fa-phone"></i> +31 6 1234 5678
          </span>
        </div>
        <button>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-avatar">L</div>
    <div class="Card-content">
        <h3>Lisa Williams</h3>
        <p>Product Manager</p>
        <span><i class="fa-solid fa-envelope"></i> lisa@example.com</span>
        <span><i class="fa-solid fa-phone"></i> +31 6 1234 5678</span>
    </div>
    <button>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
</div>`,
    css: `.Card {
    position: relative;
    display: flex;
    gap: 13px;
    width: 350px;
    padding: 20px;
    background: white;
    border: 1px solid #e4e4e7;
    border-radius: 17px;
}
.Card-avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 14px;
    background: #ede9fe;
    color: #7c3aed;
    font-weight: 700;
}
.Card-content h3 {
    margin: 1px 0 3px;
    font-size: 14px;
}
.Card-content p {
    margin: 0 0 9px;
    color: #71717a;
    font-size: 10px;
}
.Card-content > span {
    display: block;
    margin-top: 4px;
    color: #52525b;
    font-size: 9px;
}
.Card-content i {
    width: 14px;
    color: #7c3aed;
}
.Card > button {
    position: absolute;
    top: 16px;
    right: 16px;
    border: none;
    background: transparent;
    color: #a1a1aa;
}`,
  },
  {
    id: 1198,
    name: "Milestone Card",
    preview: (
      <div className="card-1198">
        <div className="card-1198-number">01</div>
        <div>
          <span>MILESTONE</span>
          <h3>Launch the website</h3>
          <p>Complete the final review and deploy everything.</p>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-number">01</div>
    <div>
        <span>MILESTONE</span>
        <h3>Launch the website</h3>
        <p>Complete the final review and deploy everything.</p>
    </div>
    <i class="fa-solid fa-arrow-right"></i>
</div>`,
    css: `.Card {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 350px;
    padding: 20px;
    background: #18181b;
    border-radius: 17px;
    color: white;
}
.Card-number {
    font-size: 30px;
    font-weight: 800;
    color: #52525b;
}
.Card > div:nth-child(2) {
    flex: 1;
}
.Card span {
    font-size: 8px;
    letter-spacing: 1px;
    color: #8b5cf6;
    font-weight: 700;
}
.Card h3 {
    margin: 5px 0;
    font-size: 14px;
}
.Card p {
    margin: 0;
    color: #71717a;
    font-size: 10px;
    line-height: 1.5;
}
.Card > i {
    color: #71717a;
}`,
  },
  {
    id: 1199,
    name: "Magic Glass Card",
    preview: (
      <div className="card-1199">
        <div className="card-1199-light one"></div>
        <div className="card-1199-light two"></div>
        <div className="card-1199-icon">
          <i className="fa-solid fa-sparkles"></i>
        </div>
        <h3>Something magical</h3>
        <p>
          Soft lights, glass surfaces and subtle motion create a futuristic
          feel.
        </p>
        <button>Explore</button>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-light one"></div>
    <div class="Card-light two"></div>
    <div class="Card-icon">
        <i class="fa-solid fa-sparkles"></i>
    </div>
    <h3>Something magical</h3>
    <p>Soft lights, glass surfaces and subtle motion create a futuristic feel.</p>
    <button>Explore</button>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 320px;
    padding: 26px;
    color: white;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 22px;
    backdrop-filter: blur(18px);
}
.Card-light {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    filter: blur(50px);
    opacity: .45;
}
.Card-light.one {
    top: -50px;
    left: -30px;
    background: #38bdf8;
}
.Card-light.two {
    right: -40px;
    bottom: -50px;
    background: #ec4899;
}
.Card-icon {
    position: relative;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: rgba(255,255,255,.1);
    font-size: 20px;
}
.Card h3 {
    position: relative;
    margin: 20px 0 7px;
}
.Card p {
    position: relative;
    color: rgba(255,255,255,.65);
    font-size: 12px;
    line-height: 1.6;
}
.Card button {
    position: relative;
    margin-top: 13px;
    padding: 9px 13px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 9px;
    background: rgba(255,255,255,.08);
    color: white;
}`,
  },
  {
    id: 1200,
    name: "Final Gradient Card",
    preview: (
      <div className="card-1200">
        <div className="card-1200-glow"></div>
        <div className="card-1200-content">
          <div className="card-1200-icon">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <span>YOUR NEXT PROJECT</span>
          <h3>Build something people remember.</h3>
          <p>Beautiful interfaces begin with strong components.</p>
          <button>
            Start building
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-glow"></div>
    <div class="Card-content">
        <div class="Card-icon">
            <i class="fa-solid fa-rocket"></i>
        </div>
        <span>YOUR NEXT PROJECT</span>
        <h3>Build something people remember.</h3>
        <p>Beautiful interfaces begin with strong components.</p>
        <button>
            Start building
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>`,
    css: `.Card {
    position: relative;
    overflow: hidden;
    width: 340px;
    padding: 2px;
    border-radius: 23px;
    background: linear-gradient(135deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    background-size: 300% 300%;
    animation: final-gradient-card 5s ease infinite;
}
.Card-glow {
    position: absolute;
    inset: 20%;
    border-radius: 50%;
    background: white;
    filter: blur(70px);
    opacity: .12;
}
.Card-content {
    position: relative;
    padding: 28px;
    border-radius: 21px;
    background: #09090b;
    color: white;
}
.Card-icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: linear-gradient(135deg,#f97316,#ec4899);
}
.Card-content > span {
    display: block;
    margin-top: 25px;
    color: #a1a1aa;
    font-size: 9px;
    letter-spacing: 1.5px;
    font-weight: 700;
}
.Card h3 {
    margin: 10px 0;
    font-size: 25px;
    line-height: 1.15;
}
.Card p {
    color: #a1a1aa;
    font-size: 12px;
    line-height: 1.6;
}
.Card button {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 20px;
    padding: 10px 14px;
    border: none;
    border-radius: 9px;
    background: white;
    color: #18181b;
    font-weight: 600;
}
@keyframes final-gradient-card {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}`,
  },
  {
    id: 1201,
    name: "Developer Card",
    preview: (
      <div className="card-1201">
        <div className="card-1201-top">
          <div className="card-1201-avatar">A</div>
          <div>
            <h3>André</h3>
            <span>Software Developer</span>
          </div>
          <div className="card-1201-online"></div>
        </div>
        <p>
          Currently building a UI library with reusable components, patterns and
          modern interfaces.
        </p>
        <div className="card-1201-tech">
          <span>React</span>
          <span>TypeScript</span>
          <span>CSS</span>
          <span>Tailwind</span>
        </div>
        <div className="card-1201-footer">
          <span>
            <i className="fa-solid fa-code"></i> Building
          </span>
          <button>View work</button>
        </div>
      </div>
    ),
    html: `<div class="Card">
    <div class="Card-top">
        <div class="Card-avatar">A</div>
        <div>
            <h3>André</h3>
            <span>Software Developer</span>
        </div>
        <div class="Card-online"></div>
    </div>
    <p>Currently building a UI library with reusable components, patterns and modern interfaces.</p>
    <div class="Card-tech">
        <span>React</span>
        <span>TypeScript</span>
        <span>CSS</span>
        <span>Tailwind</span>
    </div>
    <div class="Card-footer">
        <span><i class="fa-solid fa-code"></i> Building</span>
        <button>View work</button>
    </div>
</div>`,
    css: `.Card {
    width: 360px;
    padding: 23px;
    background: #18181b;
    border: 1px solid #27272a;
    border-radius: 20px;
    color: white;
}
.Card-top {
    display: flex;
    align-items: center;
    gap: 12px;
}
.Card-avatar {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(135deg,#2563eb,#7c3aed);
    font-size: 18px;
    font-weight: 700;
}
.Card h3 {
    margin: 0 0 3px;
    font-size: 15px;
}
.Card-top span {
    color: #71717a;
    font-size: 10px;
}
.Card-online {
    width: 9px;
    height: 9px;
    margin-left: auto;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34,197,94,.6);
}
.Card > p {
    margin: 19px 0;
    color: #a1a1aa;
    font-size: 12px;
    line-height: 1.6;
}
.Card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}
.Card-tech span {
    padding: 6px 8px;
    border-radius: 7px;
    background: #27272a;
    color: #d4d4d8;
    font-size: 9px;
}
.Card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #27272a;
}
.Card-footer > span {
    color: #71717a;
    font-size: 10px;
}
.Card-footer i {
    color: #22c55e;
    margin-right: 4px;
}
.Card-footer button {
    padding: 8px 11px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #18181b;
    font-size: 10px;
    font-weight: 600;
}`,
  },
  {
    id: 3416,
    name: "Glass Profile Card",
    preview: (
      <div className="card-3416">
        <div className="card-3416-glow card-3416-glow-1" />
        <div className="card-3416-glow card-3416-glow-2" />

        <div className="card-3416-avatar">
          <span>AB</span>
        </div>

        <div className="card-3416-content">
          <span className="card-3416-badge">Available</span>

          <h3>André Babirian</h3>
          <p className="card-3416-role">Frontend Developer</p>

          <p className="card-3416-description">
            Building modern interfaces, interactive experiences and reusable
            components.
          </p>

          <div className="card-3416-stats">
            <div>
              <strong>42</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>128</strong>
              <span>Components</span>
            </div>

            <div>
              <strong>4.9</strong>
              <span>Rating</span>
            </div>
          </div>

          <button className="card-3416-button">View profile</button>
        </div>
      </div>
    ),
    html: `<div class="card-3416">
    <div class="card-3416-glow card-3416-glow-1"></div>
    <div class="card-3416-glow card-3416-glow-2"></div>

    <div class="card-3416-avatar">
        <span>AB</span>
    </div>

    <div class="card-3416-content">
        <span class="card-3416-badge">Available</span>

        <h3>André Babirian</h3>
        <p class="card-3416-role">Frontend Developer</p>

        <p class="card-3416-description">
            Building modern interfaces, interactive experiences and reusable components.
        </p>

        <div class="card-3416-stats">
            <div>
                <strong>42</strong>
                <span>Projects</span>
            </div>

            <div>
                <strong>128</strong>
                <span>Components</span>
            </div>

            <div>
                <strong>4.9</strong>
                <span>Rating</span>
            </div>
        </div>

        <button class="card-3416-button">View profile</button>
    </div>
</div>`,
    css: `.card-3416 {
    position: relative;
    width: 300px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 24px;
    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.09),
            rgba(255,255,255,.03)
        );
    backdrop-filter: blur(18px);
    box-shadow:
        0 20px 50px rgba(0,0,0,.3),
        inset 0 1px 0 rgba(255,255,255,.08);
    color: #ffffff;
}

.card-3416-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(45px);
    pointer-events: none;
}

.card-3416-glow-1 {
    width: 130px;
    height: 130px;
    right: -45px;
    top: -40px;
    background: rgba(99,102,241,.35);
}

.card-3416-glow-2 {
    width: 110px;
    height: 110px;
    left: -45px;
    bottom: -50px;
    background: rgba(34,211,238,.22);
}

.card-3416-avatar {
    position: relative;
    z-index: 2;
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
    margin-bottom: 18px;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 20px;
    background:
        linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6,
            #22d3ee
        );
    box-shadow:
        0 10px 24px rgba(99,102,241,.28);
    font-size: 20px;
    font-weight: 800;
}

.card-3416-content {
    position: relative;
    z-index: 2;
}

.card-3416-badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 9px;
    margin-bottom: 11px;
    border: 1px solid rgba(134,239,172,.2);
    border-radius: 999px;
    background: rgba(34,197,94,.11);
    color: #86efac;
    font-size: 11px;
    font-weight: 700;
}

.card-3416 h3 {
    margin: 0;
    font-size: 22px;
    line-height: 1.15;
}

.card-3416-role {
    margin: 6px 0 0;
    color: #a5b4fc;
    font-size: 13px;
    font-weight: 600;
}

.card-3416-description {
    margin: 15px 0 20px;
    color: #a8b0bf;
    font-size: 13px;
    line-height: 1.6;
}

.card-3416-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 18px;
}

.card-3416-stats div {
    padding: 10px 6px;
    border: 1px solid rgba(255,255,255,.07);
    border-radius: 12px;
    background: rgba(255,255,255,.035);
    text-align: center;
}

.card-3416-stats strong,
.card-3416-stats span {
    display: block;
}

.card-3416-stats strong {
    margin-bottom: 3px;
    font-size: 15px;
}

.card-3416-stats span {
    color: #7f8898;
    font-size: 9px;
}

.card-3416-button {
    width: 100%;
    padding: 11px 14px;
    border: 0;
    border-radius: 12px;
    background:
        linear-gradient(
            90deg,
            #6366f1,
            #8b5cf6
        );
    color: #ffffff;
    font: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.card-3416-button:hover {
    transform: translateY(-2px);
    box-shadow:
        0 10px 22px rgba(99,102,241,.28);
}`,
  },
  {
    id: 3417,
    name: "Neon Product Card",
    preview: (
      <div className="card-3417">
        <span className="card-3417-label">NEW DROP</span>

        <div className="card-3417-product">
          <span className="card-3417-orbit card-3417-orbit-1" />
          <span className="card-3417-orbit card-3417-orbit-2" />

          <div className="card-3417-product-core">
            <span className="card-3417-product-light" />
          </div>
        </div>

        <div className="card-3417-content">
          <div className="card-3417-heading">
            <div>
              <span className="card-3417-category">LIMITED SERIES</span>
              <h3>Quantum Core</h3>
            </div>

            <strong>$149</strong>
          </div>

          <p>
            Experimental energy module with a high-intensity neon containment
            field.
          </p>

          <div className="card-3417-colors">
            <span className="card-3417-color card-3417-color-1" />
            <span className="card-3417-color card-3417-color-2" />
            <span className="card-3417-color card-3417-color-3" />
          </div>

          <button className="card-3417-button">
            <span>Add to collection</span>
            <span>→</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="card-3417">
    <span class="card-3417-label">NEW DROP</span>

    <div class="card-3417-product">
        <span class="card-3417-orbit card-3417-orbit-1"></span>
        <span class="card-3417-orbit card-3417-orbit-2"></span>

        <div class="card-3417-product-core">
            <span class="card-3417-product-light"></span>
        </div>
    </div>

    <div class="card-3417-content">
        <div class="card-3417-heading">
            <div>
                <span class="card-3417-category">LIMITED SERIES</span>
                <h3>Quantum Core</h3>
            </div>

            <strong>$149</strong>
        </div>

        <p>
            Experimental energy module with a high-intensity neon containment field.
        </p>

        <div class="card-3417-colors">
            <span class="card-3417-color card-3417-color-1"></span>
            <span class="card-3417-color card-3417-color-2"></span>
            <span class="card-3417-color card-3417-color-3"></span>
        </div>

        <button class="card-3417-button">
            <span>Add to collection</span>
            <span>→</span>
        </button>
    </div>
</div>`,
    css: `.card-3417 {
    position: relative;
    width: 300px;
    overflow: hidden;
    border: 1px solid #243244;
    border-radius: 22px;
    background: #080b11;
    color: #ffffff;
    box-shadow:
        0 20px 50px rgba(0,0,0,.4);
}

.card-3417::before {
    content: "";
    position: absolute;
    left: -60px;
    top: -70px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(34,211,238,.09);
    filter: blur(40px);
}

.card-3417-label {
    position: absolute;
    z-index: 5;
    left: 16px;
    top: 16px;
    padding: 5px 8px;
    border: 1px solid rgba(34,211,238,.28);
    border-radius: 999px;
    background: rgba(8,145,178,.12);
    color: #67e8f9;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .12em;
}

.card-3417-product {
    position: relative;
    height: 175px;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(34,211,238,.1),
            transparent 58%
        );
}

.card-3417-product::after {
    content: "";
    position: absolute;
    left: 30px;
    right: 30px;
    bottom: 17px;
    height: 1px;
    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(34,211,238,.5),
            transparent
        );
}

.card-3417-product-core {
    position: relative;
    z-index: 3;
    width: 63px;
    height: 63px;
    border-radius: 18px;
    transform: rotate(45deg);
    background:
        linear-gradient(
            135deg,
            #101827,
            #1e293b 45%,
            #0f172a
        );
    border: 1px solid rgba(103,232,249,.35);
    box-shadow:
        0 0 13px rgba(34,211,238,.4),
        0 0 35px rgba(37,99,235,.2);
    animation: card3417Core 3s ease-in-out infinite;
}

.card-3417-product-light {
    position: absolute;
    inset: 15px;
    border-radius: 8px;
    background: #67e8f9;
    box-shadow:
        0 0 12px #22d3ee,
        0 0 25px rgba(34,211,238,.8);
    animation: card3417Light 1.4s ease-in-out infinite alternate;
}

.card-3417-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid rgba(34,211,238,.25);
    border-radius: 50%;
}

.card-3417-orbit-1 {
    width: 130px;
    height: 48px;
    margin: -24px 0 0 -65px;
    transform: rotate(-20deg);
    animation: card3417OrbitOne 5s linear infinite;
}

.card-3417-orbit-2 {
    width: 103px;
    height: 90px;
    margin: -45px 0 0 -51.5px;
    border-color: rgba(139,92,246,.24);
    transform: rotate(38deg);
    animation: card3417OrbitTwo 6s linear infinite reverse;
}

.card-3417-content {
    padding: 19px;
    border-top: 1px solid rgba(255,255,255,.055);
}

.card-3417-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.card-3417-category {
    color: #22d3ee;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .12em;
}

.card-3417 h3 {
    margin: 4px 0 0;
    font-size: 20px;
}

.card-3417-heading strong {
    margin-top: 8px;
    color: #67e8f9;
    font-size: 18px;
}

.card-3417-content p {
    margin: 13px 0;
    color: #8993a3;
    font-size: 12px;
    line-height: 1.55;
}

.card-3417-colors {
    display: flex;
    gap: 7px;
    margin-bottom: 15px;
}

.card-3417-color {
    width: 13px;
    height: 13px;
    border: 2px solid #080b11;
    border-radius: 50%;
    outline: 1px solid rgba(255,255,255,.12);
}

.card-3417-color-1 {
    background: #22d3ee;
}

.card-3417-color-2 {
    background: #8b5cf6;
}

.card-3417-color-3 {
    background: #f472b6;
}

.card-3417-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 13px;
    border: 1px solid rgba(34,211,238,.22);
    border-radius: 11px;
    background:
        linear-gradient(
            90deg,
            rgba(8,145,178,.16),
            rgba(37,99,235,.08)
        );
    color: #e0f2fe;
    font: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    transition:
        border-color .25s ease,
        background .25s ease;
}

.card-3417-button:hover {
    border-color: rgba(34,211,238,.5);
    background:
        linear-gradient(
            90deg,
            rgba(8,145,178,.26),
            rgba(37,99,235,.14)
        );
}

@keyframes card3417Core {
    0%,
    100% {
        transform: rotate(45deg) translateY(2px);
    }

    50% {
        transform: rotate(225deg) translateY(-3px);
    }
}

@keyframes card3417Light {
    from {
        opacity: .55;
        transform: scale(.78);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes card3417OrbitOne {
    to {
        transform: rotate(340deg);
    }
}

@keyframes card3417OrbitTwo {
    to {
        transform: rotate(398deg);
    }
}`,
  },
  {
    id: 3418,
    name: "Minimal Article Card",
    preview: (
      <article className="card-3418">
        <div className="card-3418-image">
          <span className="card-3418-shape card-3418-shape-1" />
          <span className="card-3418-shape card-3418-shape-2" />
          <span className="card-3418-shape card-3418-shape-3" />
        </div>

        <div className="card-3418-content">
          <div className="card-3418-meta">
            <span>DESIGN</span>
            <span>8 MIN READ</span>
          </div>

          <h3>Building interfaces people remember.</h3>

          <p>
            A practical look at spacing, hierarchy and motion in modern digital
            products.
          </p>

          <div className="card-3418-footer">
            <div className="card-3418-author">
              <span className="card-3418-avatar">A</span>

              <div>
                <strong>André</strong>
                <small>Sep 17, 2026</small>
              </div>
            </div>

            <span className="card-3418-arrow">↗</span>
          </div>
        </div>
      </article>
    ),
    html: `<article class="card-3418">
    <div class="card-3418-image">
        <span class="card-3418-shape card-3418-shape-1"></span>
        <span class="card-3418-shape card-3418-shape-2"></span>
        <span class="card-3418-shape card-3418-shape-3"></span>
    </div>

    <div class="card-3418-content">
        <div class="card-3418-meta">
            <span>DESIGN</span>
            <span>8 MIN READ</span>
        </div>

        <h3>Building interfaces people remember.</h3>

        <p>
            A practical look at spacing, hierarchy and motion in modern digital products.
        </p>

        <div class="card-3418-footer">
            <div class="card-3418-author">
                <span class="card-3418-avatar">A</span>

                <div>
                    <strong>André</strong>
                    <small>Sep 17, 2026</small>
                </div>
            </div>

            <span class="card-3418-arrow">↗</span>
        </div>
    </div>
</article>`,
    css: `.card-3418 {
    width: 300px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    background: #ffffff;
    color: #111827;
    box-shadow:
        0 12px 35px rgba(15,23,42,.08);
    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.card-3418:hover {
    transform: translateY(-4px);
    box-shadow:
        0 20px 45px rgba(15,23,42,.12);
}

.card-3418-image {
    position: relative;
    height: 150px;
    overflow: hidden;
    background:
        linear-gradient(
            135deg,
            #f8fafc,
            #e0e7ff
        );
}

.card-3418-shape {
    position: absolute;
    transition: transform .5s ease;
}

.card-3418-shape-1 {
    left: 34px;
    top: 24px;
    width: 88px;
    height: 88px;
    border-radius: 28px;
    background:
        linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
        );
    transform: rotate(15deg);
}

.card-3418-shape-2 {
    right: 45px;
    top: 31px;
    width: 72px;
    height: 72px;
    border: 13px solid #22d3ee;
    border-radius: 50%;
}

.card-3418-shape-3 {
    left: 123px;
    bottom: -25px;
    width: 90px;
    height: 90px;
    border-radius: 24px;
    background: #fbbf24;
    transform: rotate(45deg);
    opacity: .9;
}

.card-3418:hover .card-3418-shape-1 {
    transform: rotate(28deg) scale(1.06);
}

.card-3418:hover .card-3418-shape-2 {
    transform: translateX(7px) rotate(-10deg);
}

.card-3418:hover .card-3418-shape-3 {
    transform: rotate(55deg) translateY(-5px);
}

.card-3418-content {
    padding: 19px;
}

.card-3418-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    color: #6366f1;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .12em;
}

.card-3418 h3 {
    margin: 0;
    font-size: 21px;
    line-height: 1.25;
    letter-spacing: -.025em;
}

.card-3418-content > p {
    margin: 12px 0 18px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.6;
}

.card-3418-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid #f1f5f9;
}

.card-3418-author {
    display: flex;
    align-items: center;
    gap: 9px;
}

.card-3418-avatar {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #111827;
    color: #ffffff;
    font-size: 11px;
    font-weight: 800;
}

.card-3418-author strong,
.card-3418-author small {
    display: block;
}

.card-3418-author strong {
    margin-bottom: 2px;
    font-size: 10px;
}

.card-3418-author small {
    color: #9ca3af;
    font-size: 8px;
}

.card-3418-arrow {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #f3f4f6;
    font-size: 14px;
    transition:
        transform .25s ease,
        background .25s ease;
}

.card-3418:hover .card-3418-arrow {
    transform: rotate(45deg);
    background: #e0e7ff;
}`,
  },
  {
    id: 3419,
    name: "Cosmic Stats Card",
    preview: (
      <div className="card-3419">
        <div className="card-3419-space">
          <span className="card-3419-star card-3419-star-1" />
          <span className="card-3419-star card-3419-star-2" />
          <span className="card-3419-star card-3419-star-3" />
          <span className="card-3419-star card-3419-star-4" />
          <span className="card-3419-star card-3419-star-5" />

          <span className="card-3419-orbit card-3419-orbit-1" />
          <span className="card-3419-orbit card-3419-orbit-2" />

          <span className="card-3419-planet" />
        </div>

        <div className="card-3419-top">
          <div>
            <span className="card-3419-label">COSMIC NETWORK</span>
            <h3>Orion Node</h3>
          </div>

          <span className="card-3419-status">
            <span />
            Online
          </span>
        </div>

        <div className="card-3419-metric">
          <strong>98.7%</strong>
          <span>Network stability</span>
        </div>

        <div className="card-3419-progress">
          <span />
        </div>

        <div className="card-3419-grid">
          <div>
            <span>LATENCY</span>
            <strong>18ms</strong>
          </div>

          <div>
            <span>SECTORS</span>
            <strong>248</strong>
          </div>

          <div>
            <span>POWER</span>
            <strong>4.2TW</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3419">
    <div class="card-3419-space">
        <span class="card-3419-star card-3419-star-1"></span>
        <span class="card-3419-star card-3419-star-2"></span>
        <span class="card-3419-star card-3419-star-3"></span>
        <span class="card-3419-star card-3419-star-4"></span>
        <span class="card-3419-star card-3419-star-5"></span>

        <span class="card-3419-orbit card-3419-orbit-1"></span>
        <span class="card-3419-orbit card-3419-orbit-2"></span>

        <span class="card-3419-planet"></span>
    </div>

    <div class="card-3419-top">
        <div>
            <span class="card-3419-label">COSMIC NETWORK</span>
            <h3>Orion Node</h3>
        </div>

        <span class="card-3419-status">
            <span></span>
            Online
        </span>
    </div>

    <div class="card-3419-metric">
        <strong>98.7%</strong>
        <span>Network stability</span>
    </div>

    <div class="card-3419-progress">
        <span></span>
    </div>

    <div class="card-3419-grid">
        <div>
            <span>LATENCY</span>
            <strong>18ms</strong>
        </div>

        <div>
            <span>SECTORS</span>
            <strong>248</strong>
        </div>

        <div>
            <span>POWER</span>
            <strong>4.2TW</strong>
        </div>
    </div>
</div>`,
    css: `.card-3419 {
    position: relative;
    width: 300px;
    padding: 21px;
    overflow: hidden;
    border: 1px solid rgba(129,140,248,.18);
    border-radius: 22px;
    background:
        linear-gradient(
            145deg,
            #080a14,
            #0d1020
        );
    color: #ffffff;
    box-shadow:
        0 20px 50px rgba(0,0,0,.4);
}

.card-3419-space {
    position: absolute;
    right: -14px;
    top: -14px;
    width: 145px;
    height: 145px;
    opacity: .85;
}

.card-3419-space::before {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(99,102,241,.18),
            rgba(59,130,246,.08) 42%,
            transparent 70%
        );
}

.card-3419-star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 5px currentColor;
    animation: card3419Star 1.5s ease-in-out infinite alternate;
}

.card-3419-star-1 {
    left: 25px;
    top: 28px;
    color: #67e8f9;
}

.card-3419-star-2 {
    right: 24px;
    top: 18px;
    color: #f9a8d4;
    animation-delay: -.4s;
}

.card-3419-star-3 {
    right: 12px;
    top: 71px;
    color: #ffffff;
    animation-delay: -.8s;
}

.card-3419-star-4 {
    left: 20px;
    bottom: 26px;
    color: #c4b5fd;
    animation-delay: -1.2s;
}

.card-3419-star-5 {
    right: 47px;
    bottom: 17px;
    color: #67e8f9;
    animation-delay: -.6s;
}

.card-3419-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1px solid rgba(129,140,248,.2);
}

.card-3419-orbit-1 {
    width: 98px;
    height: 48px;
    margin: -24px 0 0 -49px;
    transform: rotate(-20deg);
    animation: card3419OrbitOne 6s linear infinite;
}

.card-3419-orbit-2 {
    width: 69px;
    height: 80px;
    margin: -40px 0 0 -34.5px;
    border-color: rgba(34,211,238,.17);
    animation: card3419OrbitTwo 5s linear infinite reverse;
}

.card-3419-planet {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 25px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 32% 27%,
            #ffffff,
            #818cf8 26%,
            #4338ca 58%,
            #1e1b4b
        );
    box-shadow:
        0 0 13px rgba(99,102,241,.5);
}

.card-3419-top {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.card-3419-label {
    color: #818cf8;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .13em;
}

.card-3419 h3 {
    margin: 5px 0 0;
    font-size: 20px;
}

.card-3419-status {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 8px;
    border: 1px solid rgba(74,222,128,.15);
    border-radius: 999px;
    background: rgba(34,197,94,.08);
    color: #86efac;
    font-size: 9px;
    font-weight: 700;
}

.card-3419-status > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px #4ade80;
    animation: card3419Status 1.2s ease-in-out infinite;
}

.card-3419-metric {
    position: relative;
    z-index: 3;
    margin-top: 34px;
}

.card-3419-metric strong,
.card-3419-metric span {
    display: block;
}

.card-3419-metric strong {
    font-size: 36px;
    line-height: 1;
    letter-spacing: -.05em;
    background:
        linear-gradient(
            90deg,
            #ffffff,
            #a5b4fc,
            #67e8f9
        );
    -webkit-background-clip: text;
    color: transparent;
}

.card-3419-metric span {
    margin-top: 6px;
    color: #788297;
    font-size: 10px;
}

.card-3419-progress {
    position: relative;
    z-index: 3;
    height: 5px;
    margin: 17px 0;
    overflow: hidden;
    border-radius: 999px;
    background: #171c2e;
}

.card-3419-progress > span {
    display: block;
    width: 87%;
    height: 100%;
    border-radius: inherit;
    background:
        linear-gradient(
            90deg,
            #6366f1,
            #8b5cf6,
            #22d3ee
        );
    box-shadow:
        0 0 8px rgba(34,211,238,.35);
    animation: card3419Progress 2.6s ease-in-out infinite alternate;
}

.card-3419-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(255,255,255,.06);
}

.card-3419-grid div {
    padding: 14px 8px 0;
    text-align: center;
}

.card-3419-grid div + div {
    border-left: 1px solid rgba(255,255,255,.06);
}

.card-3419-grid span,
.card-3419-grid strong {
    display: block;
}

.card-3419-grid span {
    margin-bottom: 5px;
    color: #657086;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .1em;
}

.card-3419-grid strong {
    font-size: 12px;
}

@keyframes card3419Star {
    from {
        transform: scale(.4);
        opacity: .25;
    }

    to {
        transform: scale(1.2);
        opacity: 1;
    }
}

@keyframes card3419OrbitOne {
    to {
        transform: rotate(340deg);
    }
}

@keyframes card3419OrbitTwo {
    to {
        transform: rotate(360deg);
    }
}

@keyframes card3419Status {
    0%,
    100% {
        opacity: .35;
    }

    50% {
        opacity: 1;
    }
}

@keyframes card3419Progress {
    from {
        width: 74%;
    }

    to {
        width: 94%;
    }
}`,
  },
  {
    id: 3420,
    name: "Gradient Developer Card",
    preview: (
      <div className="card-3420">
        <div className="card-3420-header">
          <div className="card-3420-icon">
            <span>&lt;/&gt;</span>
          </div>

          <span className="card-3420-number">05</span>
        </div>

        <div className="card-3420-content">
          <span className="card-3420-eyebrow">FRONTEND</span>

          <h3>Component Studio</h3>

          <p>
            A flexible collection of polished components built for modern web
            interfaces.
          </p>

          <div className="card-3420-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="card-3420-footer">
          <span>Explore project</span>

          <span className="card-3420-arrow">→</span>
        </div>

        <span className="card-3420-decoration card-3420-decoration-1" />
        <span className="card-3420-decoration card-3420-decoration-2" />
      </div>
    ),
    html: `<div class="card-3420">
    <div class="card-3420-header">
        <div class="card-3420-icon">
            <span>&lt;/&gt;</span>
        </div>

        <span class="card-3420-number">05</span>
    </div>

    <div class="card-3420-content">
        <span class="card-3420-eyebrow">FRONTEND</span>

        <h3>Component Studio</h3>

        <p>
            A flexible collection of polished components built for modern web interfaces.
        </p>

        <div class="card-3420-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
        </div>
    </div>

    <div class="card-3420-footer">
        <span>Explore project</span>
        <span class="card-3420-arrow">→</span>
    </div>

    <span class="card-3420-decoration card-3420-decoration-1"></span>
    <span class="card-3420-decoration card-3420-decoration-2"></span>
</div>`,
    css: `.card-3420 {
    position: relative;
    width: 300px;
    min-height: 330px;
    padding: 22px;
    overflow: hidden;
    border-radius: 24px;
    background:
        linear-gradient(
            145deg,
            #eef2ff 0%,
            #fdf2f8 48%,
            #ecfeff 100%
        );
    color: #18181b;
    box-shadow:
        0 18px 45px rgba(99,102,241,.12);
}

.card-3420::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 23px;
    border: 1px solid rgba(255,255,255,.9);
    pointer-events: none;
}

.card-3420-header {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.card-3420-icon {
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: #18181b;
    color: #ffffff;
    box-shadow:
        0 10px 22px rgba(24,24,27,.15);
    font-size: 12px;
    font-weight: 800;
}

.card-3420-number {
    color: rgba(24,24,27,.16);
    font-size: 34px;
    font-weight: 900;
    letter-spacing: -.06em;
}

.card-3420-content {
    position: relative;
    z-index: 3;
    margin-top: 55px;
}

.card-3420-eyebrow {
    color: #7c3aed;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3420 h3 {
    margin: 7px 0 0;
    font-size: 25px;
    line-height: 1.1;
    letter-spacing: -.035em;
}

.card-3420-content p {
    max-width: 235px;
    margin: 13px 0 17px;
    color: #71717a;
    font-size: 12px;
    line-height: 1.6;
}

.card-3420-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.card-3420-tags span {
    padding: 5px 8px;
    border: 1px solid rgba(99,102,241,.12);
    border-radius: 999px;
    background: rgba(255,255,255,.62);
    color: #52525b;
    font-size: 9px;
    font-weight: 700;
}

.card-3420-footer {
    position: absolute;
    z-index: 3;
    left: 22px;
    right: 22px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #27272a;
    font-size: 10px;
    font-weight: 800;
}

.card-3420-arrow {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0 8px 18px rgba(99,102,241,.1);
    font-size: 14px;
    transition:
        transform .3s ease,
        background .3s ease;
}

.card-3420:hover .card-3420-arrow {
    transform: translateX(4px);
    background: #18181b;
    color: #ffffff;
}

.card-3420-decoration {
    position: absolute;
    border-radius: 50%;
    filter: blur(2px);
    transition: transform .5s ease;
}

.card-3420-decoration-1 {
    width: 120px;
    height: 120px;
    right: -45px;
    top: 53px;
    background:
        radial-gradient(
            circle,
            rgba(192,132,252,.28),
            transparent 70%
        );
}

.card-3420-decoration-2 {
    width: 100px;
    height: 100px;
    left: -42px;
    bottom: 34px;
    background:
        radial-gradient(
            circle,
            rgba(34,211,238,.22),
            transparent 70%
        );
}

.card-3420:hover .card-3420-decoration-1 {
    transform: translate(-10px, 7px) scale(1.12);
}

.card-3420:hover .card-3420-decoration-2 {
    transform: translate(9px, -7px) scale(1.08);
}`,
  },
  {
    id: 3421,
    name: "Nebula Glass Card",
    preview: (
      <div className="card-3421">
        <span className="card-3421-orb card-3421-orb-1"></span>
        <span className="card-3421-orb card-3421-orb-2"></span>

        <div className="card-3421-top">
          <span className="card-3421-label">COSMIC PROFILE</span>
          <span className="card-3421-badge">ONLINE</span>
        </div>

        <div className="card-3421-content">
          <h3>André Studio</h3>
          <p className="card-3421-role">Interface Explorer</p>
          <p className="card-3421-text">
            Elegant cosmic-inspired UI card with layered glow tones and a glassy
            dark surface.
          </p>

          <div className="card-3421-stats">
            <div>
              <strong>124</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>58</strong>
              <span>Templates</span>
            </div>

            <div>
              <strong>99%</strong>
              <span>Focus</span>
            </div>
          </div>

          <button className="card-3421-button">Open Profile</button>
        </div>
      </div>
    ),
    html: `<div class="card-3421">
    <span class="card-3421-orb card-3421-orb-1"></span>
    <span class="card-3421-orb card-3421-orb-2"></span>

    <div class="card-3421-top">
        <span class="card-3421-label">COSMIC PROFILE</span>
        <span class="card-3421-badge">ONLINE</span>
    </div>

    <div class="card-3421-content">
        <h3>André Studio</h3>
        <p class="card-3421-role">Interface Explorer</p>
        <p class="card-3421-text">
            Elegant cosmic-inspired UI card with layered glow tones and a glassy dark surface.
        </p>

        <div class="card-3421-stats">
            <div>
                <strong>124</strong>
                <span>Projects</span>
            </div>

            <div>
                <strong>58</strong>
                <span>Templates</span>
            </div>

            <div>
                <strong>99%</strong>
                <span>Focus</span>
            </div>
        </div>

        <button class="card-3421-button">Open Profile</button>
    </div>
</div>`,
    css: `.card-3421 {
    position: relative;
    width: 300px;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(147, 197, 253, 0.16);
    border-radius: 24px;
    background:
        linear-gradient(145deg, rgba(9, 12, 28, 0.98), rgba(18, 13, 40, 0.96));
    box-shadow:
        0 18px 42px rgba(0, 0, 0, 0.34),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
    color: #ffffff;
}

.card-3421-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(35px);
    pointer-events: none;
}

.card-3421-orb-1 {
    top: -38px;
    right: -32px;
    width: 120px;
    height: 120px;
    background: rgba(56, 189, 248, 0.22);
}

.card-3421-orb-2 {
    bottom: -48px;
    left: -40px;
    width: 140px;
    height: 140px;
    background: rgba(168, 85, 247, 0.18);
}

.card-3421-top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.card-3421-label {
    color: #93c5fd;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.card-3421-badge {
    padding: 5px 9px;
    border: 1px solid rgba(134, 239, 172, 0.18);
    border-radius: 999px;
    background: rgba(34, 197, 94, 0.08);
    color: #86efac;
    font-size: 9px;
    font-weight: 700;
}

.card-3421-content {
    position: relative;
    z-index: 2;
    margin-top: 18px;
}

.card-3421-content h3 {
    margin: 0;
    font-size: 24px;
    line-height: 1.1;
    letter-spacing: -0.03em;
}

.card-3421-role {
    margin: 7px 0 0;
    color: #c084fc;
    font-size: 13px;
    font-weight: 600;
}

.card-3421-text {
    margin: 15px 0 18px;
    color: #9ca3af;
    font-size: 12px;
    line-height: 1.6;
}

.card-3421-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 18px;
}

.card-3421-stats div {
    padding: 11px 8px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
    text-align: center;
}

.card-3421-stats strong,
.card-3421-stats span {
    display: block;
}

.card-3421-stats strong {
    margin-bottom: 3px;
    color: #f8fafc;
    font-size: 15px;
}

.card-3421-stats span {
    color: #6b7280;
    font-size: 9px;
}

.card-3421-button {
    width: 100%;
    padding: 11px 14px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3422,
    name: "Galaxy Panel Card",
    preview: (
      <div className="card-3422">
        <div className="card-3422-header">
          <span className="card-3422-mini-label">STAR PANEL</span>
          <span className="card-3422-chip">V.02</span>
        </div>

        <div className="card-3422-body">
          <h3>Deep Galaxy</h3>
          <p>
            Soft violet, blue and pink cosmic tones inside a clean premium
            panel.
          </p>

          <div className="card-3422-panel">
            <span className="card-3422-dot card-3422-dot-1"></span>
            <span className="card-3422-dot card-3422-dot-2"></span>
            <span className="card-3422-dot card-3422-dot-3"></span>
          </div>

          <div className="card-3422-footer">
            <div>
              <strong>72%</strong>
              <span>Charge</span>
            </div>

            <div>
              <strong>48h</strong>
              <span>Output</span>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3422">
    <div class="card-3422-header">
        <span class="card-3422-mini-label">STAR PANEL</span>
        <span class="card-3422-chip">V.02</span>
    </div>

    <div class="card-3422-body">
        <h3>Deep Galaxy</h3>
        <p>
            Soft violet, blue and pink cosmic tones inside a clean premium panel.
        </p>

        <div class="card-3422-panel">
            <span class="card-3422-dot card-3422-dot-1"></span>
            <span class="card-3422-dot card-3422-dot-2"></span>
            <span class="card-3422-dot card-3422-dot-3"></span>
        </div>

        <div class="card-3422-footer">
            <div>
                <strong>72%</strong>
                <span>Charge</span>
            </div>

            <div>
                <strong>48h</strong>
                <span>Output</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.card-3422 {
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.12);
    border-radius: 22px;
    background:
        linear-gradient(150deg, #090b18 0%, #11152d 48%, #170f2e 100%);
    box-shadow: 0 20px 44px rgba(0, 0, 0, 0.3);
    color: #ffffff;
}

.card-3422-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px 0;
}

.card-3422-mini-label {
    color: #93c5fd;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.card-3422-chip {
    padding: 5px 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    color: #cbd5e1;
    font-size: 9px;
    font-weight: 700;
}

.card-3422-body {
    padding: 18px;
}

.card-3422-body h3 {
    margin: 0;
    font-size: 23px;
    letter-spacing: -0.03em;
}

.card-3422-body p {
    margin: 12px 0 16px;
    color: #94a3b8;
    font-size: 12px;
    line-height: 1.6;
}

.card-3422-panel {
    height: 120px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 18px;
    background:
        radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.18), transparent 35%),
        radial-gradient(circle at 70% 35%, rgba(244, 114, 182, 0.16), transparent 35%),
        radial-gradient(circle at 52% 76%, rgba(168, 85, 247, 0.18), transparent 38%),
        linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.98));
}

.card-3422-dot {
    position: absolute;
    border-radius: 50%;
}

.card-3422-dot-1 {
    width: 20px;
    height: 20px;
    left: 28px;
    top: 30px;
    background: #38bdf8;
    box-shadow: 0 0 18px rgba(56, 189, 248, 0.4);
}

.card-3422-dot-2 {
    width: 14px;
    height: 14px;
    right: 44px;
    top: 26px;
    background: #f472b6;
    box-shadow: 0 0 18px rgba(244, 114, 182, 0.4);
}

.card-3422-dot-3 {
    width: 34px;
    height: 34px;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #8b5cf6;
    box-shadow: 0 0 22px rgba(139, 92, 246, 0.42);
}

.card-3422-footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.card-3422-footer div {
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
}

.card-3422-footer strong,
.card-3422-footer span {
    display: block;
}

.card-3422-footer strong {
    margin-bottom: 4px;
    font-size: 16px;
}

.card-3422-footer span {
    color: #94a3b8;
    font-size: 10px;
}`,
  },
  {
    id: 3423,
    name: "Nova Info Card",
    preview: (
      <div className="card-3423">
        <span className="card-3423-line card-3423-line-1"></span>
        <span className="card-3423-line card-3423-line-2"></span>

        <div className="card-3423-top">
          <span className="card-3423-pill">NOVA ENTRY</span>
        </div>

        <h3>Cosmic Archive</h3>

        <p className="card-3423-text">
          Store gradients, styles and component ideas inside a polished
          deep-space card block.
        </p>

        <div className="card-3423-grid">
          <div>
            <span>Theme</span>
            <strong>Starlight</strong>
          </div>

          <div>
            <span>Level</span>
            <strong>Premium</strong>
          </div>

          <div>
            <span>Space</span>
            <strong>12.4 GB</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Stable</strong>
          </div>
        </div>

        <button className="card-3423-button">View Collection</button>
      </div>
    ),
    html: `<div class="card-3423">
    <span class="card-3423-line card-3423-line-1"></span>
    <span class="card-3423-line card-3423-line-2"></span>

    <div class="card-3423-top">
        <span class="card-3423-pill">NOVA ENTRY</span>
    </div>

    <h3>Cosmic Archive</h3>

    <p class="card-3423-text">
        Store gradients, styles and component ideas inside a polished deep-space card block.
    </p>

    <div class="card-3423-grid">
        <div>
            <span>Theme</span>
            <strong>Starlight</strong>
        </div>

        <div>
            <span>Level</span>
            <strong>Premium</strong>
        </div>

        <div>
            <span>Space</span>
            <strong>12.4 GB</strong>
        </div>

        <div>
            <span>Status</span>
            <strong>Stable</strong>
        </div>
    </div>

    <button class="card-3423-button">View Collection</button>
</div>`,
    css: `.card-3423 {
    position: relative;
    width: 300px;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(96, 165, 250, 0.12);
    border-radius: 24px;
    background:
        linear-gradient(145deg, #070b17 0%, #10172a 45%, #180f29 100%);
    color: #ffffff;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
}

.card-3423-line {
    position: absolute;
    display: block;
    border-radius: 999px;
    pointer-events: none;
}

.card-3423-line-1 {
    top: 18px;
    right: -18px;
    width: 88px;
    height: 88px;
    border: 1px solid rgba(56, 189, 248, 0.18);
}

.card-3423-line-2 {
    bottom: -30px;
    left: -24px;
    width: 110px;
    height: 110px;
    border: 1px solid rgba(168, 85, 247, 0.14);
}

.card-3423-top {
    margin-bottom: 16px;
}

.card-3423-pill {
    display: inline-block;
    padding: 5px 9px;
    border: 1px solid rgba(125, 211, 252, 0.16);
    border-radius: 999px;
    background: rgba(14, 165, 233, 0.08);
    color: #7dd3fc;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
}

.card-3423 h3 {
    margin: 0;
    font-size: 24px;
    line-height: 1.15;
    letter-spacing: -0.03em;
}

.card-3423-text {
    margin: 12px 0 18px;
    color: #9ca3af;
    font-size: 12px;
    line-height: 1.65;
}

.card-3423-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 18px;
}

.card-3423-grid div {
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
}

.card-3423-grid span,
.card-3423-grid strong {
    display: block;
}

.card-3423-grid span {
    margin-bottom: 5px;
    color: #64748b;
    font-size: 9px;
}

.card-3423-grid strong {
    font-size: 13px;
    color: #f8fafc;
}

.card-3423-button {
    width: 100%;
    padding: 11px 14px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3424,
    name: "Stellar Dashboard Card",
    preview: (
      <div className="card-3424">
        <div className="card-3424-head">
          <div>
            <span className="card-3424-label">DASHBOARD</span>
            <h3>Stellar Pulse</h3>
          </div>

          <span className="card-3424-dot"></span>
        </div>

        <div className="card-3424-visual">
          <span className="card-3424-glow card-3424-glow-1"></span>
          <span className="card-3424-glow card-3424-glow-2"></span>

          <div className="card-3424-bars">
            <span className="card-3424-bar card-3424-bar-1"></span>
            <span className="card-3424-bar card-3424-bar-2"></span>
            <span className="card-3424-bar card-3424-bar-3"></span>
            <span className="card-3424-bar card-3424-bar-4"></span>
          </div>
        </div>

        <p className="card-3424-text">
          Smooth cosmic overview card with bright static energy bars and layered
          galactic glow.
        </p>

        <div className="card-3424-bottom">
          <strong>+18.4%</strong>
          <span>Growth this week</span>
        </div>
      </div>
    ),
    html: `<div class="card-3424">
    <div class="card-3424-head">
        <div>
            <span class="card-3424-label">DASHBOARD</span>
            <h3>Stellar Pulse</h3>
        </div>

        <span class="card-3424-dot"></span>
    </div>

    <div class="card-3424-visual">
        <span class="card-3424-glow card-3424-glow-1"></span>
        <span class="card-3424-glow card-3424-glow-2"></span>

        <div class="card-3424-bars">
            <span class="card-3424-bar card-3424-bar-1"></span>
            <span class="card-3424-bar card-3424-bar-2"></span>
            <span class="card-3424-bar card-3424-bar-3"></span>
            <span class="card-3424-bar card-3424-bar-4"></span>
        </div>
    </div>

    <p class="card-3424-text">
        Smooth cosmic overview card with bright static energy bars and layered galactic glow.
    </p>

    <div class="card-3424-bottom">
        <strong>+18.4%</strong>
        <span>Growth this week</span>
    </div>
</div>`,
    css: `.card-3424 {
    width: 300px;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    background:
        linear-gradient(145deg, #080b14 0%, #0f172a 50%, #1a1031 100%);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
    color: #ffffff;
}

.card-3424-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
}

.card-3424-label {
    color: #7dd3fc;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.card-3424-head h3 {
    margin: 6px 0 0;
    font-size: 22px;
    line-height: 1.1;
}

.card-3424-dot {
    width: 12px;
    height: 12px;
    margin-top: 3px;
    border-radius: 50%;
    background: #c084fc;
    box-shadow: 0 0 16px rgba(192, 132, 252, 0.45);
}

.card-3424-visual {
    position: relative;
    height: 132px;
    margin-bottom: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    background:
        linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(17, 24, 39, 0.98));
}

.card-3424-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(26px);
    pointer-events: none;
}

.card-3424-glow-1 {
    width: 90px;
    height: 90px;
    top: 10px;
    left: 22px;
    background: rgba(56, 189, 248, 0.2);
}

.card-3424-glow-2 {
    width: 86px;
    height: 86px;
    right: 20px;
    bottom: 14px;
    background: rgba(168, 85, 247, 0.2);
}

.card-3424-bars {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 18px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
}

.card-3424-bar {
    flex: 1;
    border-radius: 999px 999px 8px 8px;
    background: linear-gradient(to top, #38bdf8, #818cf8, #c084fc);
    box-shadow: 0 0 16px rgba(129, 140, 248, 0.22);
}

.card-3424-bar-1 { height: 36px; }
.card-3424-bar-2 { height: 68px; }
.card-3424-bar-3 { height: 52px; }
.card-3424-bar-4 { height: 86px; }

.card-3424-text {
    margin: 0 0 16px;
    color: #94a3b8;
    font-size: 12px;
    line-height: 1.6;
}

.card-3424-bottom strong,
.card-3424-bottom span {
    display: block;
}

.card-3424-bottom strong {
    color: #f8fafc;
    font-size: 24px;
    line-height: 1;
}

.card-3424-bottom span {
    margin-top: 5px;
    color: #64748b;
    font-size: 10px;
}`,
  },
  {
    id: 3425,
    name: "Aurora Space Card",
    preview: (
      <div className="card-3425">
        <div className="card-3425-banner">
          <span className="card-3425-aura card-3425-aura-1"></span>
          <span className="card-3425-aura card-3425-aura-2"></span>
        </div>

        <div className="card-3425-content">
          <span className="card-3425-kicker">SPACE COLLECTION</span>

          <h3>Polar Aurora</h3>

          <p>
            Bright layered card with soft cosmic gradients and a refined premium
            dark base.
          </p>

          <div className="card-3425-tags">
            <span>Cosmic</span>
            <span>Gradient</span>
            <span>Luxury</span>
          </div>

          <div className="card-3425-footer">
            <strong>$84</strong>
            <button>View Card</button>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3425">
    <div class="card-3425-banner">
        <span class="card-3425-aura card-3425-aura-1"></span>
        <span class="card-3425-aura card-3425-aura-2"></span>
    </div>

    <div class="card-3425-content">
        <span class="card-3425-kicker">SPACE COLLECTION</span>

        <h3>Polar Aurora</h3>

        <p>
            Bright layered card with soft cosmic gradients and a refined premium dark base.
        </p>

        <div class="card-3425-tags">
            <span>Cosmic</span>
            <span>Gradient</span>
            <span>Luxury</span>
        </div>

        <div class="card-3425-footer">
            <strong>$84</strong>
            <button>View Card</button>
        </div>
    </div>
</div>`,
    css: `.card-3425 {
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(191, 219, 254, 0.08);
    border-radius: 24px;
    background:
        linear-gradient(145deg, #090d17 0%, #111827 48%, #1a1030 100%);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
    color: #ffffff;
}

.card-3425-banner {
    position: relative;
    height: 126px;
    overflow: hidden;
    background:
        linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.98));
}

.card-3425-aura {
    position: absolute;
    border-radius: 50%;
    filter: blur(24px);
}

.card-3425-aura-1 {
    width: 120px;
    height: 120px;
    top: 10px;
    left: 18px;
    background: rgba(34, 211, 238, 0.22);
}

.card-3425-aura-2 {
    width: 130px;
    height: 130px;
    right: 14px;
    top: -10px;
    background: rgba(192, 132, 252, 0.24);
}

.card-3425-content {
    padding: 20px;
}

.card-3425-kicker {
    color: #93c5fd;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.card-3425-content h3 {
    margin: 7px 0 0;
    font-size: 24px;
    line-height: 1.1;
}

.card-3425-content p {
    margin: 12px 0 16px;
    color: #9ca3af;
    font-size: 12px;
    line-height: 1.6;
}

.card-3425-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 18px;
}

.card-3425-tags span {
    padding: 5px 9px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    color: #cbd5e1;
    font-size: 9px;
    font-weight: 700;
}

.card-3425-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

.card-3425-footer strong {
    font-size: 24px;
    letter-spacing: -0.03em;
}

.card-3425-footer button {
    padding: 10px 14px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3426,
    name: "Void Horizon Card",
    preview: (
      <div className="card-3426">
        <div className="card-3426-horizon">
          <span className="card-3426-glow card-3426-glow-1" />
          <span className="card-3426-glow card-3426-glow-2" />
          <span className="card-3426-core" />
        </div>

        <div className="card-3426-content">
          <span className="card-3426-label">VOID SYSTEM</span>
          <h3>Event Horizon</h3>
          <p>
            A dark cosmic panel inspired by deep-space singularities and violet
            energy fields.
          </p>

          <div className="card-3426-details">
            <div>
              <span>Mass</span>
              <strong>8.4M</strong>
            </div>

            <div>
              <span>Radius</span>
              <strong>124 AU</strong>
            </div>

            <div>
              <span>State</span>
              <strong>Stable</strong>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3426">
    <div class="card-3426-horizon">
        <span class="card-3426-glow card-3426-glow-1"></span>
        <span class="card-3426-glow card-3426-glow-2"></span>
        <span class="card-3426-core"></span>
    </div>

    <div class="card-3426-content">
        <span class="card-3426-label">VOID SYSTEM</span>
        <h3>Event Horizon</h3>
        <p>
            A dark cosmic panel inspired by deep-space singularities and violet energy fields.
        </p>

        <div class="card-3426-details">
            <div>
                <span>Mass</span>
                <strong>8.4M</strong>
            </div>

            <div>
                <span>Radius</span>
                <strong>124 AU</strong>
            </div>

            <div>
                <span>State</span>
                <strong>Stable</strong>
            </div>
        </div>
    </div>
</div>`,
    css: `.card-3426 {
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(168,85,247,.12);
    border-radius: 24px;
    background: linear-gradient(150deg,#05060d,#0b0a19 45%,#170b29);
    color: #ffffff;
    box-shadow: 0 20px 45px rgba(0,0,0,.35);
}

.card-3426-horizon {
    position: relative;
    height: 145px;
    overflow: hidden;
    background:
        radial-gradient(circle at 50% 60%,rgba(126,34,206,.16),transparent 48%),
        linear-gradient(180deg,#070911,#0a0710);
}

.card-3426-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(26px);
}

.card-3426-glow-1 {
    width: 100px;
    height: 100px;
    left: 37px;
    top: 28px;
    background: rgba(34,211,238,.18);
}

.card-3426-glow-2 {
    width: 115px;
    height: 115px;
    right: 30px;
    top: 18px;
    background: rgba(192,132,252,.2);
}

.card-3426-core {
    position: absolute;
    left: 50%;
    top: 54%;
    width: 61px;
    height: 61px;
    transform: translate(-50%,-50%);
    border: 5px solid #7c3aed;
    border-radius: 50%;
    background: #020205;
    box-shadow:
        0 0 0 7px rgba(168,85,247,.12),
        0 0 28px rgba(192,132,252,.4),
        inset 0 0 18px #000000;
}

.card-3426-content {
    padding: 20px;
}

.card-3426-label {
    color: #c084fc;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .14em;
}

.card-3426 h3 {
    margin: 7px 0 0;
    font-size: 24px;
}

.card-3426 p {
    margin: 12px 0 17px;
    color: #9299aa;
    font-size: 12px;
    line-height: 1.6;
}

.card-3426-details {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 7px;
}

.card-3426-details div {
    padding: 10px 6px;
    border: 1px solid rgba(255,255,255,.055);
    border-radius: 12px;
    background: rgba(255,255,255,.025);
    text-align: center;
}

.card-3426-details span,
.card-3426-details strong {
    display: block;
}

.card-3426-details span {
    margin-bottom: 4px;
    color: #667085;
    font-size: 8px;
}

.card-3426-details strong {
    font-size: 11px;
}`,
  },
  {
    id: 3427,
    name: "Nebula Resource Card",
    preview: (
      <div className="card-3427">
        <div className="card-3427-header">
          <div>
            <span className="card-3427-label">NEBULA STORAGE</span>
            <h3>Celestial Vault</h3>
          </div>

          <span className="card-3427-status">ACTIVE</span>
        </div>

        <div className="card-3427-space">
          <span className="card-3427-cloud card-3427-cloud-1" />
          <span className="card-3427-cloud card-3427-cloud-2" />
          <span className="card-3427-cloud card-3427-cloud-3" />
          <span className="card-3427-star card-3427-star-1" />
          <span className="card-3427-star card-3427-star-2" />
          <span className="card-3427-star card-3427-star-3" />
          <span className="card-3427-star card-3427-star-4" />
        </div>

        <div className="card-3427-capacity">
          <div>
            <span>Used capacity</span>
            <strong>68%</strong>
          </div>

          <div className="card-3427-track">
            <span />
          </div>
        </div>

        <div className="card-3427-footer">
          <span>2.8 TB available</span>
          <span>4.0 TB total</span>
        </div>
      </div>
    ),
    html: `<div class="card-3427">
    <div class="card-3427-header">
        <div>
            <span class="card-3427-label">NEBULA STORAGE</span>
            <h3>Celestial Vault</h3>
        </div>

        <span class="card-3427-status">ACTIVE</span>
    </div>

    <div class="card-3427-space">
        <span class="card-3427-cloud card-3427-cloud-1"></span>
        <span class="card-3427-cloud card-3427-cloud-2"></span>
        <span class="card-3427-cloud card-3427-cloud-3"></span>
        <span class="card-3427-star card-3427-star-1"></span>
        <span class="card-3427-star card-3427-star-2"></span>
        <span class="card-3427-star card-3427-star-3"></span>
        <span class="card-3427-star card-3427-star-4"></span>
    </div>

    <div class="card-3427-capacity">
        <div>
            <span>Used capacity</span>
            <strong>68%</strong>
        </div>

        <div class="card-3427-track">
            <span></span>
        </div>
    </div>

    <div class="card-3427-footer">
        <span>2.8 TB available</span>
        <span>4.0 TB total</span>
    </div>
</div>`,
    css: `.card-3427 {
    width: 300px;
    padding: 21px;
    overflow: hidden;
    border: 1px solid rgba(56,189,248,.1);
    border-radius: 24px;
    background: linear-gradient(145deg,#07101b,#0d1224 55%,#140e2b);
    color: #ffffff;
    box-shadow: 0 20px 44px rgba(0,0,0,.32);
}

.card-3427-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
}

.card-3427-label {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
}

.card-3427 h3 {
    margin: 6px 0 0;
    font-size: 21px;
}

.card-3427-status {
    padding: 5px 8px;
    border: 1px solid rgba(134,239,172,.14);
    border-radius: 999px;
    background: rgba(34,197,94,.07);
    color: #86efac;
    font-size: 8px;
    font-weight: 800;
}

.card-3427-space {
    position: relative;
    height: 120px;
    margin: 18px 0;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.05);
    border-radius: 17px;
    background: #090c18;
}

.card-3427-cloud {
    position: absolute;
    border-radius: 50%;
    filter: blur(25px);
}

.card-3427-cloud-1 {
    width: 100px;
    height: 78px;
    left: 10px;
    top: 17px;
    background: rgba(14,165,233,.24);
}

.card-3427-cloud-2 {
    width: 110px;
    height: 80px;
    right: 8px;
    top: 10px;
    background: rgba(147,51,234,.23);
}

.card-3427-cloud-3 {
    width: 90px;
    height: 70px;
    left: 96px;
    bottom: -10px;
    background: rgba(236,72,153,.15);
}

.card-3427-star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 5px currentColor;
}

.card-3427-star-1 {
    left: 28px;
    top: 25px;
    color: #67e8f9;
}

.card-3427-star-2 {
    right: 39px;
    top: 27px;
    color: #f9a8d4;
}

.card-3427-star-3 {
    left: 87px;
    bottom: 24px;
    color: #ffffff;
}

.card-3427-star-4 {
    right: 80px;
    bottom: 16px;
    color: #c4b5fd;
}

.card-3427-capacity > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
}

.card-3427-capacity span {
    color: #8f98a9;
    font-size: 10px;
}

.card-3427-capacity strong {
    color: #e0f2fe;
    font-size: 11px;
}

.card-3427-track {
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #171c2b;
}

.card-3427-track span {
    display: block;
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,#06b6d4,#6366f1,#a855f7);
}

.card-3427-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
}

.card-3427-footer span {
    color: #677184;
    font-size: 9px;
}`,
  },
  {
    id: 3428,
    name: "Cosmic Membership Card",
    preview: (
      <div className="card-3428">
        <span className="card-3428-light card-3428-light-1" />
        <span className="card-3428-light card-3428-light-2" />

        <div className="card-3428-top">
          <span>CELESTIAL ACCESS</span>
          <strong>∞</strong>
        </div>

        <div className="card-3428-main">
          <span className="card-3428-tier">ULTRA</span>
          <h3>Cosmic Pass</h3>
          <p>Unlimited access to the outer sectors.</p>
        </div>

        <div className="card-3428-code">
          <span>MEMBER</span>
          <strong>AB-3428-X7</strong>
        </div>

        <div className="card-3428-bottom">
          <span>VALID THROUGH</span>
          <strong>∞ / ∞</strong>
        </div>
      </div>
    ),
    html: `<div class="card-3428">
    <span class="card-3428-light card-3428-light-1"></span>
    <span class="card-3428-light card-3428-light-2"></span>

    <div class="card-3428-top">
        <span>CELESTIAL ACCESS</span>
        <strong>∞</strong>
    </div>

    <div class="card-3428-main">
        <span class="card-3428-tier">ULTRA</span>
        <h3>Cosmic Pass</h3>
        <p>Unlimited access to the outer sectors.</p>
    </div>

    <div class="card-3428-code">
        <span>MEMBER</span>
        <strong>AB-3428-X7</strong>
    </div>

    <div class="card-3428-bottom">
        <span>VALID THROUGH</span>
        <strong>∞ / ∞</strong>
    </div>
</div>`,
    css: `.card-3428 {
    position: relative;
    width: 300px;
    min-height: 190px;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.11);
    border-radius: 22px;
    background:
        radial-gradient(circle at 78% 20%,rgba(56,189,248,.16),transparent 28%),
        radial-gradient(circle at 15% 88%,rgba(236,72,153,.16),transparent 30%),
        linear-gradient(135deg,#070914,#11142b 50%,#211139);
    color: #ffffff;
    box-shadow: 0 20px 45px rgba(0,0,0,.32);
}

.card-3428-light {
    position: absolute;
    border-radius: 50%;
    filter: blur(24px);
}

.card-3428-light-1 {
    width: 90px;
    height: 90px;
    right: -22px;
    top: -20px;
    background: rgba(34,211,238,.18);
}

.card-3428-light-2 {
    width: 90px;
    height: 90px;
    left: -28px;
    bottom: -30px;
    background: rgba(217,70,239,.18);
}

.card-3428-top,
.card-3428-main,
.card-3428-code,
.card-3428-bottom {
    position: relative;
    z-index: 2;
}

.card-3428-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-3428-top span {
    color: #93c5fd;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .16em;
}

.card-3428-top strong {
    color: #c4b5fd;
    font-size: 24px;
}

.card-3428-main {
    margin-top: 22px;
}

.card-3428-tier {
    color: #f0abfc;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .16em;
}

.card-3428 h3 {
    margin: 5px 0 0;
    font-size: 25px;
    letter-spacing: -.03em;
}

.card-3428-main p {
    margin: 7px 0 0;
    color: #8d96a8;
    font-size: 10px;
}

.card-3428-code {
    margin-top: 22px;
}

.card-3428-code span,
.card-3428-code strong {
    display: block;
}

.card-3428-code span {
    margin-bottom: 3px;
    color: #606a7d;
    font-size: 7px;
    letter-spacing: .12em;
}

.card-3428-code strong {
    font-size: 11px;
    letter-spacing: .13em;
}

.card-3428-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
    padding-top: 13px;
    border-top: 1px solid rgba(255,255,255,.06);
}

.card-3428-bottom span {
    color: #606a7d;
    font-size: 7px;
    letter-spacing: .12em;
}

.card-3428-bottom strong {
    font-size: 9px;
}`,
  },
  {
    id: 3429,
    name: "Planet Discovery Card",
    preview: (
      <div className="card-3429">
        <div className="card-3429-planet-section">
          <span className="card-3429-planet">
            <span className="card-3429-ring" />
          </span>

          <span className="card-3429-moon card-3429-moon-1" />
          <span className="card-3429-moon card-3429-moon-2" />
        </div>

        <div className="card-3429-content">
          <span className="card-3429-label">NEW DISCOVERY</span>
          <h3>Vespera IX</h3>

          <p>
            A violet gas giant surrounded by a luminous ring system in the
            Vesper sector.
          </p>

          <div className="card-3429-grid">
            <div>
              <span>Type</span>
              <strong>Gas Giant</strong>
            </div>

            <div>
              <span>Moons</span>
              <strong>14</strong>
            </div>

            <div>
              <span>Temp</span>
              <strong>-148°</strong>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3429">
    <div class="card-3429-planet-section">
        <span class="card-3429-planet">
            <span class="card-3429-ring"></span>
        </span>

        <span class="card-3429-moon card-3429-moon-1"></span>
        <span class="card-3429-moon card-3429-moon-2"></span>
    </div>

    <div class="card-3429-content">
        <span class="card-3429-label">NEW DISCOVERY</span>
        <h3>Vespera IX</h3>

        <p>
            A violet gas giant surrounded by a luminous ring system in the Vesper sector.
        </p>

        <div class="card-3429-grid">
            <div>
                <span>Type</span>
                <strong>Gas Giant</strong>
            </div>

            <div>
                <span>Moons</span>
                <strong>14</strong>
            </div>

            <div>
                <span>Temp</span>
                <strong>-148°</strong>
            </div>
        </div>
    </div>
</div>`,
    css: `.card-3429 {
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(168,85,247,.11);
    border-radius: 24px;
    background: linear-gradient(145deg,#080a15,#101224 55%,#190d2e);
    color: #ffffff;
    box-shadow: 0 20px 46px rgba(0,0,0,.33);
}

.card-3429-planet-section {
    position: relative;
    height: 150px;
    overflow: hidden;
    background:
        radial-gradient(circle at 50% 50%,rgba(139,92,246,.13),transparent 42%),
        linear-gradient(180deg,#080a16,#0a0b15);
}

.card-3429-planet {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 72px;
    height: 72px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background:
        radial-gradient(circle at 32% 26%,#f5d0fe,#c084fc 21%,#7e22ce 52%,#2e1065 82%,#160723);
    box-shadow:
        0 0 18px rgba(168,85,247,.42),
        0 0 38px rgba(76,29,149,.25);
}

.card-3429-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 118px;
    height: 27px;
    transform: translate(-50%,-50%) rotate(-14deg);
    border: 3px solid rgba(216,180,254,.58);
    border-radius: 50%;
    box-shadow: 0 0 9px rgba(192,132,252,.25);
}

.card-3429-moon {
    position: absolute;
    border-radius: 50%;
    background: #cbd5e1;
}

.card-3429-moon-1 {
    width: 8px;
    height: 8px;
    left: 41px;
    top: 41px;
}

.card-3429-moon-2 {
    width: 5px;
    height: 5px;
    right: 53px;
    bottom: 27px;
    background: #93c5fd;
}

.card-3429-content {
    padding: 20px;
}

.card-3429-label {
    color: #c084fc;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3429 h3 {
    margin: 6px 0 0;
    font-size: 24px;
}

.card-3429 p {
    margin: 12px 0 17px;
    color: #9299a9;
    font-size: 12px;
    line-height: 1.6;
}

.card-3429-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 7px;
}

.card-3429-grid div {
    padding: 9px 6px;
    border-radius: 11px;
    background: rgba(255,255,255,.03);
    text-align: center;
}

.card-3429-grid span,
.card-3429-grid strong {
    display: block;
}

.card-3429-grid span {
    margin-bottom: 4px;
    color: #636d80;
    font-size: 8px;
}

.card-3429-grid strong {
    font-size: 10px;
}`,
  },
  {
    id: 3430,
    name: "Cosmic Project Card",
    preview: (
      <div className="card-3430">
        <div className="card-3430-top">
          <span className="card-3430-label">PROJECT 08</span>
          <span className="card-3430-state">COMPLETE</span>
        </div>

        <h3>Stellar Interface</h3>

        <p className="card-3430-description">
          A UI system built around dark space surfaces, spectral gradients and
          luminous accents.
        </p>

        <div className="card-3430-preview">
          <span className="card-3430-block card-3430-block-1" />
          <span className="card-3430-block card-3430-block-2" />
          <span className="card-3430-block card-3430-block-3" />
        </div>

        <div className="card-3430-tags">
          <span>Interface</span>
          <span>Cosmic</span>
          <span>UI System</span>
        </div>
      </div>
    ),
    html: `<div class="card-3430">
    <div class="card-3430-top">
        <span class="card-3430-label">PROJECT 08</span>
        <span class="card-3430-state">COMPLETE</span>
    </div>

    <h3>Stellar Interface</h3>

    <p class="card-3430-description">
        A UI system built around dark space surfaces, spectral gradients and luminous accents.
    </p>

    <div class="card-3430-preview">
        <span class="card-3430-block card-3430-block-1"></span>
        <span class="card-3430-block card-3430-block-2"></span>
        <span class="card-3430-block card-3430-block-3"></span>
    </div>

    <div class="card-3430-tags">
        <span>Interface</span>
        <span>Cosmic</span>
        <span>UI System</span>
    </div>
</div>`,
    css: `.card-3430 {
    width: 300px;
    padding: 21px;
    border: 1px solid rgba(103,232,249,.09);
    border-radius: 24px;
    background: linear-gradient(145deg,#070a13,#0f1425 50%,#18102c);
    color: #ffffff;
    box-shadow: 0 19px 42px rgba(0,0,0,.3);
}

.card-3430-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-3430-label {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
}

.card-3430-state {
    color: #86efac;
    font-size: 8px;
    font-weight: 800;
}

.card-3430 h3 {
    margin: 18px 0 0;
    font-size: 24px;
    letter-spacing: -.03em;
}

.card-3430-description {
    margin: 11px 0 17px;
    color: #8e97a9;
    font-size: 12px;
    line-height: 1.6;
}

.card-3430-preview {
    position: relative;
    height: 112px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.055);
    border-radius: 17px;
    background:
        radial-gradient(circle at 75% 25%,rgba(192,132,252,.18),transparent 32%),
        radial-gradient(circle at 23% 80%,rgba(34,211,238,.14),transparent 34%),
        #090d17;
}

.card-3430-block {
    position: absolute;
    display: block;
    border-radius: 12px;
}

.card-3430-block-1 {
    left: 19px;
    top: 20px;
    width: 81px;
    height: 28px;
    background: linear-gradient(90deg,#0ea5e9,#6366f1);
}

.card-3430-block-2 {
    left: 19px;
    bottom: 19px;
    width: 125px;
    height: 31px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.05);
}

.card-3430-block-3 {
    right: 21px;
    top: 22px;
    width: 65px;
    height: 68px;
    background: linear-gradient(145deg,#7c3aed,#db2777);
    opacity: .76;
}

.card-3430-tags {
    display: flex;
    gap: 6px;
    margin-top: 14px;
}

.card-3430-tags span {
    padding: 5px 8px;
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 999px;
    background: rgba(255,255,255,.025);
    color: #9da6b5;
    font-size: 8px;
}`,
  },
  {
    id: 3431,
    name: "Supernova Metric Card",
    preview: (
      <div className="card-3431">
        <span className="card-3431-flare card-3431-flare-1" />
        <span className="card-3431-flare card-3431-flare-2" />

        <div className="card-3431-header">
          <span>SUPERNOVA ENERGY</span>
          <strong>LIVE</strong>
        </div>

        <div className="card-3431-value">
          <strong>94.8</strong>
          <span>petajoules</span>
        </div>

        <div className="card-3431-scale">
          <span className="card-3431-scale-fill" />
        </div>

        <div className="card-3431-data">
          <div>
            <span>CORE</span>
            <strong>9,420 K</strong>
          </div>

          <div>
            <span>OUTPUT</span>
            <strong>+24.8%</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3431">
    <span class="card-3431-flare card-3431-flare-1"></span>
    <span class="card-3431-flare card-3431-flare-2"></span>

    <div class="card-3431-header">
        <span>SUPERNOVA ENERGY</span>
        <strong>LIVE</strong>
    </div>

    <div class="card-3431-value">
        <strong>94.8</strong>
        <span>petajoules</span>
    </div>

    <div class="card-3431-scale">
        <span class="card-3431-scale-fill"></span>
    </div>

    <div class="card-3431-data">
        <div>
            <span>CORE</span>
            <strong>9,420 K</strong>
        </div>

        <div>
            <span>OUTPUT</span>
            <strong>+24.8%</strong>
        </div>
    </div>
</div>`,
    css: `.card-3431 {
    position: relative;
    width: 300px;
    padding: 22px;
    overflow: hidden;
    border: 1px solid rgba(244,114,182,.11);
    border-radius: 24px;
    background: linear-gradient(145deg,#080a14,#151025 50%,#27112d);
    color: #ffffff;
    box-shadow: 0 20px 44px rgba(0,0,0,.32);
}

.card-3431-flare {
    position: absolute;
    border-radius: 50%;
    filter: blur(34px);
}

.card-3431-flare-1 {
    width: 130px;
    height: 130px;
    right: -40px;
    top: -43px;
    background: rgba(244,114,182,.2);
}

.card-3431-flare-2 {
    width: 120px;
    height: 120px;
    left: -50px;
    bottom: -50px;
    background: rgba(99,102,241,.18);
}

.card-3431-header,
.card-3431-value,
.card-3431-scale,
.card-3431-data {
    position: relative;
    z-index: 2;
}

.card-3431-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-3431-header span {
    color: #f9a8d4;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .14em;
}

.card-3431-header strong {
    padding: 4px 7px;
    border-radius: 999px;
    background: rgba(236,72,153,.1);
    color: #f9a8d4;
    font-size: 8px;
}

.card-3431-value {
    margin-top: 30px;
}

.card-3431-value strong {
    display: block;
    font-size: 43px;
    line-height: .9;
    letter-spacing: -.05em;
    background: linear-gradient(90deg,#ffffff,#f9a8d4,#c4b5fd);
    -webkit-background-clip: text;
    color: transparent;
}

.card-3431-value span {
    display: block;
    margin-top: 8px;
    color: #747e91;
    font-size: 10px;
}

.card-3431-scale {
    height: 6px;
    margin: 20px 0;
    overflow: hidden;
    border-radius: 999px;
    background: #211827;
}

.card-3431-scale-fill {
    display: block;
    width: 82%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,#8b5cf6,#ec4899,#f9a8d4);
}

.card-3431-data {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
}

.card-3431-data div {
    padding: 11px;
    border-radius: 13px;
    background: rgba(255,255,255,.03);
}

.card-3431-data span,
.card-3431-data strong {
    display: block;
}

.card-3431-data span {
    margin-bottom: 5px;
    color: #616b80;
    font-size: 7px;
    letter-spacing: .12em;
}

.card-3431-data strong {
    font-size: 12px;
}`,
  },
  {
    id: 3432,
    name: "Astral Notes Card",
    preview: (
      <div className="card-3432">
        <div className="card-3432-header">
          <span>ASTRAL NOTES</span>
          <span>04 / 12</span>
        </div>

        <h3>Beyond the Blue Nebula</h3>

        <p>
          Observations from a quiet region where the blue stellar clouds begin
          to fade into violet darkness.
        </p>

        <div className="card-3432-divider" />

        <div className="card-3432-footer">
          <div>
            <span>SECTOR</span>
            <strong>VX-09</strong>
          </div>

          <div>
            <span>DATE</span>
            <strong>17.09.26</strong>
          </div>
        </div>

        <span className="card-3432-glow" />
      </div>
    ),
    html: `<div class="card-3432">
    <div class="card-3432-header">
        <span>ASTRAL NOTES</span>
        <span>04 / 12</span>
    </div>

    <h3>Beyond the Blue Nebula</h3>

    <p>
        Observations from a quiet region where the blue stellar clouds begin to fade into violet darkness.
    </p>

    <div class="card-3432-divider"></div>

    <div class="card-3432-footer">
        <div>
            <span>SECTOR</span>
            <strong>VX-09</strong>
        </div>

        <div>
            <span>DATE</span>
            <strong>17.09.26</strong>
        </div>
    </div>

    <span class="card-3432-glow"></span>
</div>`,
    css: `.card-3432 {
    position: relative;
    width: 300px;
    padding: 24px;
    overflow: hidden;
    border: 1px solid rgba(125,211,252,.1);
    border-radius: 22px;
    background:
        linear-gradient(145deg,rgba(8,13,25,.98),rgba(12,16,34,.98)),
        #0b1020;
    color: #ffffff;
    box-shadow: 0 18px 40px rgba(0,0,0,.3);
}

.card-3432-header {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}

.card-3432-header span:first-child {
    color: #7dd3fc;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .15em;
}

.card-3432-header span:last-child {
    color: #667085;
    font-size: 9px;
}

.card-3432 h3 {
    position: relative;
    z-index: 2;
    margin: 34px 0 0;
    max-width: 230px;
    font-size: 26px;
    line-height: 1.15;
    letter-spacing: -.04em;
}

.card-3432 > p {
    position: relative;
    z-index: 2;
    margin: 14px 0 24px;
    max-width: 240px;
    color: #959dad;
    font-size: 12px;
    line-height: 1.65;
}

.card-3432-divider {
    position: relative;
    z-index: 2;
    height: 1px;
    background: linear-gradient(90deg,rgba(125,211,252,.35),rgba(192,132,252,.18),transparent);
}

.card-3432-footer {
    position: relative;
    z-index: 2;
    display: flex;
    gap: 35px;
    margin-top: 17px;
}

.card-3432-footer span,
.card-3432-footer strong {
    display: block;
}

.card-3432-footer span {
    margin-bottom: 5px;
    color: #5d677b;
    font-size: 7px;
    letter-spacing: .12em;
}

.card-3432-footer strong {
    font-size: 10px;
}

.card-3432-glow {
    position: absolute;
    width: 150px;
    height: 150px;
    right: -55px;
    bottom: -65px;
    border-radius: 50%;
    background: rgba(99,102,241,.2);
    filter: blur(45px);
}`,
  },
  {
    id: 3433,
    name: "Quantum Signal Card",
    preview: (
      <div className="card-3433">
        <div className="card-3433-top">
          <span className="card-3433-label">QUANTUM SIGNAL</span>
          <span className="card-3433-value">87.4%</span>
        </div>

        <div className="card-3433-field">
          <span className="card-3433-line card-3433-line-1" />
          <span className="card-3433-line card-3433-line-2" />
          <span className="card-3433-line card-3433-line-3" />
          <span className="card-3433-core" />
        </div>

        <h3>Deep Link</h3>

        <p>
          High-bandwidth communication channel connected through a stabilized
          interstellar relay.
        </p>

        <div className="card-3433-bottom">
          <span>LATENCY 12MS</span>
          <span>SECURE LINK</span>
        </div>
      </div>
    ),
    html: `<div class="card-3433">
    <div class="card-3433-top">
        <span class="card-3433-label">QUANTUM SIGNAL</span>
        <span class="card-3433-value">87.4%</span>
    </div>

    <div class="card-3433-field">
        <span class="card-3433-line card-3433-line-1"></span>
        <span class="card-3433-line card-3433-line-2"></span>
        <span class="card-3433-line card-3433-line-3"></span>
        <span class="card-3433-core"></span>
    </div>

    <h3>Deep Link</h3>

    <p>
        High-bandwidth communication channel connected through a stabilized interstellar relay.
    </p>

    <div class="card-3433-bottom">
        <span>LATENCY 12MS</span>
        <span>SECURE LINK</span>
    </div>
</div>`,
    css: `.card-3433 {
    width: 300px;
    padding: 21px;
    border: 1px solid rgba(34,211,238,.11);
    border-radius: 24px;
    background: linear-gradient(145deg,#060b14,#0c1527 54%,#16102b);
    color: #ffffff;
    box-shadow: 0 18px 42px rgba(0,0,0,.32);
}

.card-3433-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-3433-label {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3433-value {
    color: #c4b5fd;
    font-size: 10px;
    font-weight: 700;
}

.card-3433-field {
    position: relative;
    height: 105px;
    margin: 17px 0;
    overflow: hidden;
    border-radius: 17px;
    background:
        radial-gradient(circle at center,rgba(34,211,238,.1),transparent 40%),
        #090e1a;
}

.card-3433-line {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid;
    border-radius: 50%;
    transform: translate(-50%,-50%);
}

.card-3433-line-1 {
    width: 85px;
    height: 35px;
    border-color: rgba(34,211,238,.38);
}

.card-3433-line-2 {
    width: 112px;
    height: 55px;
    border-color: rgba(129,140,248,.24);
}

.card-3433-line-3 {
    width: 145px;
    height: 77px;
    border-color: rgba(192,132,252,.17);
}

.card-3433-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: radial-gradient(circle,#ffffff,#67e8f9 38%,#6366f1);
    box-shadow:
        0 0 10px rgba(34,211,238,.65),
        0 0 25px rgba(99,102,241,.3);
}

.card-3433 h3 {
    margin: 0;
    font-size: 22px;
}

.card-3433 > p {
    margin: 11px 0 17px;
    color: #8e98aa;
    font-size: 12px;
    line-height: 1.6;
}

.card-3433-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    border-top: 1px solid rgba(255,255,255,.055);
}

.card-3433-bottom span {
    color: #667085;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .1em;
}`,
  },
  {
    id: 3434,
    name: "Lunar Collection Card",
    preview: (
      <div className="card-3434">
        <div className="card-3434-moon">
          <span className="card-3434-crater card-3434-crater-1" />
          <span className="card-3434-crater card-3434-crater-2" />
          <span className="card-3434-crater card-3434-crater-3" />
        </div>

        <div className="card-3434-content">
          <span className="card-3434-label">LUNAR SERIES</span>
          <h3>Eclipse White</h3>

          <p>
            A clean lunar card combining soft moonlight with deep navy and
            violet space tones.
          </p>

          <div className="card-3434-footer">
            <div>
              <strong>02</strong>
              <span>Edition</span>
            </div>

            <div>
              <strong>Rare</strong>
              <span>Class</span>
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3434">
    <div class="card-3434-moon">
        <span class="card-3434-crater card-3434-crater-1"></span>
        <span class="card-3434-crater card-3434-crater-2"></span>
        <span class="card-3434-crater card-3434-crater-3"></span>
    </div>

    <div class="card-3434-content">
        <span class="card-3434-label">LUNAR SERIES</span>
        <h3>Eclipse White</h3>

        <p>
            A clean lunar card combining soft moonlight with deep navy and violet space tones.
        </p>

        <div class="card-3434-footer">
            <div>
                <strong>02</strong>
                <span>Edition</span>
            </div>

            <div>
                <strong>Rare</strong>
                <span>Class</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.card-3434 {
    position: relative;
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(226,232,240,.1);
    border-radius: 24px;
    background: linear-gradient(145deg,#090c16,#11172a 52%,#191129);
    color: #ffffff;
    box-shadow: 0 20px 45px rgba(0,0,0,.33);
}

.card-3434-moon {
    position: relative;
    width: 112px;
    height: 112px;
    margin: 30px auto 10px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 35% 30%,#ffffff,#e2e8f0 35%,#94a3b8 74%,#475569);
    box-shadow:
        0 0 24px rgba(226,232,240,.28),
        0 0 55px rgba(99,102,241,.13);
}

.card-3434-crater {
    position: absolute;
    border-radius: 50%;
    background: rgba(71,85,105,.16);
    box-shadow: inset 2px 2px 4px rgba(15,23,42,.16);
}

.card-3434-crater-1 {
    width: 21px;
    height: 21px;
    left: 20px;
    top: 33px;
}

.card-3434-crater-2 {
    width: 14px;
    height: 14px;
    right: 24px;
    top: 24px;
}

.card-3434-crater-3 {
    width: 28px;
    height: 28px;
    right: 21px;
    bottom: 18px;
}

.card-3434-content {
    padding: 20px;
}

.card-3434-label {
    color: #cbd5e1;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .15em;
}

.card-3434 h3 {
    margin: 6px 0 0;
    font-size: 24px;
}

.card-3434 p {
    margin: 11px 0 17px;
    color: #9099aa;
    font-size: 12px;
    line-height: 1.6;
}

.card-3434-footer {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
}

.card-3434-footer div {
    padding: 10px;
    border-radius: 12px;
    background: rgba(255,255,255,.03);
}

.card-3434-footer strong,
.card-3434-footer span {
    display: block;
}

.card-3434-footer strong {
    margin-bottom: 3px;
    font-size: 13px;
}

.card-3434-footer span {
    color: #657084;
    font-size: 8px;
}`,
  },
  {
    id: 3435,
    name: "Aurora Portfolio Card",
    preview: (
      <div className="card-3435">
        <div className="card-3435-visual">
          <span className="card-3435-wave card-3435-wave-1" />
          <span className="card-3435-wave card-3435-wave-2" />
          <span className="card-3435-wave card-3435-wave-3" />
        </div>

        <div className="card-3435-content">
          <span className="card-3435-label">FEATURED WORK</span>
          <h3>Aurora Studio</h3>

          <p>
            A polished interface concept combining cyan aurora light with
            lavender and magenta cosmic tones.
          </p>

          <div className="card-3435-meta">
            <span>UI / UX</span>
            <span>2026</span>
          </div>

          <button className="card-3435-button">Explore Project</button>
        </div>
      </div>
    ),
    html: `<div class="card-3435">
    <div class="card-3435-visual">
        <span class="card-3435-wave card-3435-wave-1"></span>
        <span class="card-3435-wave card-3435-wave-2"></span>
        <span class="card-3435-wave card-3435-wave-3"></span>
    </div>

    <div class="card-3435-content">
        <span class="card-3435-label">FEATURED WORK</span>
        <h3>Aurora Studio</h3>

        <p>
            A polished interface concept combining cyan aurora light with lavender and magenta cosmic tones.
        </p>

        <div class="card-3435-meta">
            <span>UI / UX</span>
            <span>2026</span>
        </div>

        <button class="card-3435-button">Explore Project</button>
    </div>
</div>`,
    css: `.card-3435 {
    width: 300px;
    overflow: hidden;
    border: 1px solid rgba(103,232,249,.09);
    border-radius: 24px;
    background: linear-gradient(145deg,#070b14,#101525 52%,#190f2d);
    color: #ffffff;
    box-shadow: 0 20px 45px rgba(0,0,0,.34);
}

.card-3435-visual {
    position: relative;
    height: 145px;
    overflow: hidden;
    background:
        radial-gradient(circle at 25% 45%,rgba(34,211,238,.17),transparent 34%),
        radial-gradient(circle at 78% 40%,rgba(217,70,239,.17),transparent 37%),
        #090d18;
}

.card-3435-wave {
    position: absolute;
    left: -10%;
    width: 120%;
    border-radius: 50%;
}

.card-3435-wave-1 {
    height: 55px;
    bottom: 10px;
    border-top: 5px solid rgba(34,211,238,.55);
    transform: rotate(-7deg);
    box-shadow: 0 -6px 15px rgba(34,211,238,.2);
}

.card-3435-wave-2 {
    height: 66px;
    bottom: -2px;
    border-top: 5px solid rgba(139,92,246,.56);
    transform: rotate(4deg);
    box-shadow: 0 -6px 15px rgba(139,92,246,.2);
}

.card-3435-wave-3 {
    height: 76px;
    bottom: -18px;
    border-top: 5px solid rgba(236,72,153,.5);
    transform: rotate(-2deg);
}

.card-3435-content {
    padding: 20px;
}

.card-3435-label {
    color: #67e8f9;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3435 h3 {
    margin: 6px 0 0;
    font-size: 24px;
}

.card-3435 p {
    margin: 11px 0 15px;
    color: #929bad;
    font-size: 12px;
    line-height: 1.6;
}

.card-3435-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.card-3435-meta span {
    color: #687286;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .1em;
}

.card-3435-button {
    width: 100%;
    padding: 11px 13px;
    border: 1px solid rgba(103,232,249,.16);
    border-radius: 13px;
    background: linear-gradient(90deg,rgba(6,182,212,.18),rgba(139,92,246,.18),rgba(236,72,153,.18));
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3436,
    name: "Professional Service Card",
    preview: (
      <div className="card-3436">
        <span className="card-3436-label">WEB DEVELOPMENT</span>

        <h3>Modern websites built for growth.</h3>

        <p>
          Fast, responsive and maintainable websites designed around your brand,
          customers and business goals.
        </p>

        <div className="card-3436-list">
          <span>Responsive development</span>
          <span>Performance optimization</span>
          <span>Accessible components</span>
        </div>

        <div className="card-3436-footer">
          <strong>From €1,250</strong>
          <button>Learn more</button>
        </div>
      </div>
    ),
    html: `<div class="card-3436">
    <span class="card-3436-label">WEB DEVELOPMENT</span>

    <h3>Modern websites built for growth.</h3>

    <p>
        Fast, responsive and maintainable websites designed around your brand, customers and business goals.
    </p>

    <div class="card-3436-list">
        <span>Responsive development</span>
        <span>Performance optimization</span>
        <span>Accessible components</span>
    </div>

    <div class="card-3436-footer">
        <strong>From €1,250</strong>
        <button>Learn more</button>
    </div>
</div>`,
    css: `.card-3436 {
    width: 310px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3436-label {
    display: inline-block;
    margin-bottom: 14px;
    color: #2563eb;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .12em;
}

.card-3436 h3 {
    margin: 0;
    font-size: 23px;
    line-height: 1.25;
    letter-spacing: -.025em;
}

.card-3436 > p {
    margin: 13px 0 19px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.65;
}

.card-3436-list {
    display: grid;
    gap: 9px;
    margin-bottom: 22px;
}

.card-3436-list span {
    position: relative;
    padding-left: 14px;
    color: #374151;
    font-size: 11px;
}

.card-3436-list span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #2563eb;
}

.card-3436-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 17px;
    border-top: 1px solid #f1f5f9;
}

.card-3436-footer strong {
    font-size: 13px;
}

.card-3436-footer button {
    padding: 9px 13px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3437,
    name: "SaaS Pricing Card",
    preview: (
      <div className="card-3437">
        <div className="card-3437-header">
          <div>
            <span className="card-3437-label">PRO PLAN</span>
            <h3>For growing teams</h3>
          </div>

          <span className="card-3437-badge">POPULAR</span>
        </div>

        <div className="card-3437-price">
          <strong>€29</strong>
          <span>/ month</span>
        </div>

        <p>
          Everything your team needs to collaborate, manage projects and scale
          your workflow.
        </p>

        <div className="card-3437-features">
          <span>Unlimited projects</span>
          <span>10 team members</span>
          <span>Advanced analytics</span>
          <span>Priority support</span>
        </div>

        <button className="card-3437-button">Start free trial</button>

        <span className="card-3437-note">No credit card required</span>
      </div>
    ),
    html: `<div class="card-3437">
    <div class="card-3437-header">
        <div>
            <span class="card-3437-label">PRO PLAN</span>
            <h3>For growing teams</h3>
        </div>

        <span class="card-3437-badge">POPULAR</span>
    </div>

    <div class="card-3437-price">
        <strong>€29</strong>
        <span>/ month</span>
    </div>

    <p>
        Everything your team needs to collaborate, manage projects and scale your workflow.
    </p>

    <div class="card-3437-features">
        <span>Unlimited projects</span>
        <span>10 team members</span>
        <span>Advanced analytics</span>
        <span>Priority support</span>
    </div>

    <button class="card-3437-button">Start free trial</button>

    <span class="card-3437-note">No credit card required</span>
</div>`,
    css: `.card-3437 {
    width: 310px;
    padding: 25px;
    border: 1px solid #dbeafe;
    border-radius: 20px;
    background: linear-gradient(180deg,#ffffff,#f8fbff);
    color: #111827;
    box-shadow: 0 16px 38px rgba(37,99,235,.09);
}

.card-3437-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.card-3437-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .12em;
}

.card-3437 h3 {
    margin: 5px 0 0;
    font-size: 18px;
}

.card-3437-badge {
    padding: 5px 8px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 800;
}

.card-3437-price {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    margin-top: 26px;
}

.card-3437-price strong {
    font-size: 40px;
    line-height: 1;
    letter-spacing: -.05em;
}

.card-3437-price span {
    margin-bottom: 4px;
    color: #6b7280;
    font-size: 11px;
}

.card-3437 > p {
    margin: 15px 0 19px;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.6;
}

.card-3437-features {
    display: grid;
    gap: 10px;
    margin-bottom: 21px;
}

.card-3437-features span {
    padding-left: 14px;
    position: relative;
    color: #374151;
    font-size: 11px;
}

.card-3437-features span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3b82f6;
}

.card-3437-button {
    width: 100%;
    padding: 11px 14px;
    border: none;
    border-radius: 11px;
    background: #2563eb;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}

.card-3437-note {
    display: block;
    margin-top: 9px;
    color: #9ca3af;
    font-size: 9px;
    text-align: center;
}`,
  },
  {
    id: 3438,
    name: "Client Testimonial Card",
    preview: (
      <div className="card-3438">
        <span className="card-3438-rating">★★★★★</span>

        <p className="card-3438-quote">
          “The new website feels much faster, looks more professional and made
          it much easier for customers to understand what we offer.”
        </p>

        <div className="card-3438-client">
          <span className="card-3438-avatar">SM</span>

          <div>
            <strong>Sophie Meijer</strong>
            <span>Marketing Manager, Northline</span>
          </div>
        </div>

        <div className="card-3438-result">
          <div>
            <strong>+42%</strong>
            <span>Conversions</span>
          </div>

          <div>
            <strong>-31%</strong>
            <span>Bounce rate</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3438">
    <span class="card-3438-rating">★★★★★</span>

    <p class="card-3438-quote">
        “The new website feels much faster, looks more professional and made it much easier for customers to understand what we offer.”
    </p>

    <div class="card-3438-client">
        <span class="card-3438-avatar">SM</span>

        <div>
            <strong>Sophie Meijer</strong>
            <span>Marketing Manager, Northline</span>
        </div>
    </div>

    <div class="card-3438-result">
        <div>
            <strong>+42%</strong>
            <span>Conversions</span>
        </div>

        <div>
            <strong>-31%</strong>
            <span>Bounce rate</span>
        </div>
    </div>
</div>`,
    css: `.card-3438 {
    width: 310px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3438-rating {
    color: #f59e0b;
    font-size: 12px;
    letter-spacing: .08em;
}

.card-3438-quote {
    margin: 16px 0 20px;
    color: #374151;
    font-size: 14px;
    line-height: 1.65;
}

.card-3438-client {
    display: flex;
    align-items: center;
    gap: 11px;
}

.card-3438-avatar {
    width: 39px;
    height: 39px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #111827;
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
}

.card-3438-client strong,
.card-3438-client span {
    display: block;
}

.card-3438-client strong {
    margin-bottom: 3px;
    font-size: 11px;
}

.card-3438-client span {
    color: #9ca3af;
    font-size: 9px;
}

.card-3438-result {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-top: 20px;
    padding-top: 17px;
    border-top: 1px solid #f1f5f9;
}

.card-3438-result div {
    padding: 10px;
    border-radius: 12px;
    background: #f8fafc;
}

.card-3438-result strong,
.card-3438-result span {
    display: block;
}

.card-3438-result strong {
    margin-bottom: 3px;
    color: #2563eb;
    font-size: 15px;
}

.card-3438-result span {
    color: #9ca3af;
    font-size: 9px;
}`,
  },
  {
    id: 3439,
    name: "Business Team Card",
    preview: (
      <div className="card-3439">
        <div className="card-3439-photo">
          <span>JL</span>
        </div>

        <div className="card-3439-content">
          <span className="card-3439-department">PRODUCT DESIGN</span>

          <h3>Julia Linden</h3>

          <p className="card-3439-role">Senior Product Designer</p>

          <p className="card-3439-text">
            Focused on turning complex workflows into simple, intuitive digital
            experiences.
          </p>

          <div className="card-3439-details">
            <div>
              <span>Experience</span>
              <strong>8 years</strong>
            </div>

            <div>
              <span>Projects</span>
              <strong>64</strong>
            </div>
          </div>

          <button className="card-3439-button">View profile</button>
        </div>
      </div>
    ),
    html: `<div class="card-3439">
    <div class="card-3439-photo">
        <span>JL</span>
    </div>

    <div class="card-3439-content">
        <span class="card-3439-department">PRODUCT DESIGN</span>

        <h3>Julia Linden</h3>

        <p class="card-3439-role">Senior Product Designer</p>

        <p class="card-3439-text">
            Focused on turning complex workflows into simple, intuitive digital experiences.
        </p>

        <div class="card-3439-details">
            <div>
                <span>Experience</span>
                <strong>8 years</strong>
            </div>

            <div>
                <span>Projects</span>
                <strong>64</strong>
            </div>
        </div>

        <button class="card-3439-button">View profile</button>
    </div>
</div>`,
    css: `.card-3439 {
    width: 310px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3439-photo {
    height: 140px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#e0e7ff,#dbeafe,#f3e8ff);
}

.card-3439-photo span {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ffffff;
    color: #4338ca;
    box-shadow: 0 10px 24px rgba(79,70,229,.12);
    font-size: 18px;
    font-weight: 800;
}

.card-3439-content {
    padding: 21px;
}

.card-3439-department {
    color: #6366f1;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3439 h3 {
    margin: 6px 0 0;
    font-size: 21px;
}

.card-3439-role {
    margin: 5px 0 0;
    color: #6b7280;
    font-size: 11px;
}

.card-3439-text {
    margin: 14px 0 17px;
    color: #6b7280;
    font-size: 11px;
    line-height: 1.6;
}

.card-3439-details {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-bottom: 16px;
}

.card-3439-details div {
    padding: 10px;
    border-radius: 11px;
    background: #f8fafc;
}

.card-3439-details span,
.card-3439-details strong {
    display: block;
}

.card-3439-details span {
    margin-bottom: 4px;
    color: #9ca3af;
    font-size: 8px;
}

.card-3439-details strong {
    font-size: 11px;
}

.card-3439-button {
    width: 100%;
    padding: 10px 13px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    color: #111827;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3440,
    name: "Professional Blog Card",
    preview: (
      <article className="card-3440">
        <div className="card-3440-image">
          <span className="card-3440-image-label">INSIGHTS</span>
        </div>

        <div className="card-3440-content">
          <div className="card-3440-meta">
            <span>Strategy</span>
            <span>6 min read</span>
          </div>

          <h3>How better UX turns visitors into customers.</h3>

          <p>
            Learn how clear navigation, strong hierarchy and better page
            structure can improve conversion rates.
          </p>

          <div className="card-3440-footer">
            <div>
              <strong>Daniel Vos</strong>
              <span>September 17, 2026</span>
            </div>

            <button>Read article</button>
          </div>
        </div>
      </article>
    ),
    html: `<article class="card-3440">
    <div class="card-3440-image">
        <span class="card-3440-image-label">INSIGHTS</span>
    </div>

    <div class="card-3440-content">
        <div class="card-3440-meta">
            <span>Strategy</span>
            <span>6 min read</span>
        </div>

        <h3>How better UX turns visitors into customers.</h3>

        <p>
            Learn how clear navigation, strong hierarchy and better page structure can improve conversion rates.
        </p>

        <div class="card-3440-footer">
            <div>
                <strong>Daniel Vos</strong>
                <span>September 17, 2026</span>
            </div>

            <button>Read article</button>
        </div>
    </div>
</article>`,
    css: `.card-3440 {
    width: 310px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3440-image {
    height: 145px;
    display: flex;
    align-items: flex-end;
    padding: 16px;
    background:
        linear-gradient(135deg,rgba(15,23,42,.2),rgba(37,99,235,.1)),
        linear-gradient(135deg,#c7d2fe,#bfdbfe,#e0f2fe);
}

.card-3440-image-label {
    padding: 5px 8px;
    border-radius: 999px;
    background: #ffffff;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 800;
}

.card-3440-content {
    padding: 20px;
}

.card-3440-meta {
    display: flex;
    justify-content: space-between;
    color: #9ca3af;
    font-size: 9px;
}

.card-3440 h3 {
    margin: 12px 0 0;
    font-size: 20px;
    line-height: 1.3;
}

.card-3440-content > p {
    margin: 12px 0 18px;
    color: #6b7280;
    font-size: 11px;
    line-height: 1.65;
}

.card-3440-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 15px;
    border-top: 1px solid #f1f5f9;
}

.card-3440-footer strong,
.card-3440-footer span {
    display: block;
}

.card-3440-footer strong {
    margin-bottom: 3px;
    font-size: 10px;
}

.card-3440-footer span {
    color: #9ca3af;
    font-size: 8px;
}

.card-3440-footer button {
    padding: 8px 10px;
    border: none;
    border-radius: 9px;
    background: #111827;
    color: #ffffff;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3441,
    name: "Case Study Result Card",
    preview: (
      <div className="card-3441">
        <div className="card-3441-header">
          <span className="card-3441-label">CASE STUDY</span>
          <span className="card-3441-year">2026</span>
        </div>

        <h3>Scaling an ecommerce platform across Europe.</h3>

        <p>
          We redesigned the buying journey and improved performance across
          mobile and desktop storefronts.
        </p>

        <div className="card-3441-results">
          <div>
            <strong>+63%</strong>
            <span>Checkout completion</span>
          </div>

          <div>
            <strong>1.4s</strong>
            <span>Average load time</span>
          </div>

          <div>
            <strong>+38%</strong>
            <span>Mobile revenue</span>
          </div>
        </div>

        <button className="card-3441-button">Read case study</button>
      </div>
    ),
    html: `<div class="card-3441">
    <div class="card-3441-header">
        <span class="card-3441-label">CASE STUDY</span>
        <span class="card-3441-year">2026</span>
    </div>

    <h3>Scaling an ecommerce platform across Europe.</h3>

    <p>
        We redesigned the buying journey and improved performance across mobile and desktop storefronts.
    </p>

    <div class="card-3441-results">
        <div>
            <strong>+63%</strong>
            <span>Checkout completion</span>
        </div>

        <div>
            <strong>1.4s</strong>
            <span>Average load time</span>
        </div>

        <div>
            <strong>+38%</strong>
            <span>Mobile revenue</span>
        </div>
    </div>

    <button class="card-3441-button">Read case study</button>
</div>`,
    css: `.card-3441 {
    width: 310px;
    padding: 24px;
    border-radius: 18px;
    background: #111827;
    color: #ffffff;
    box-shadow: 0 16px 35px rgba(17,24,39,.2);
}

.card-3441-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-3441-label {
    color: #93c5fd;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3441-year {
    color: #6b7280;
    font-size: 9px;
}

.card-3441 h3 {
    margin: 22px 0 0;
    font-size: 22px;
    line-height: 1.3;
}

.card-3441 > p {
    margin: 13px 0 20px;
    color: #9ca3af;
    font-size: 11px;
    line-height: 1.65;
}

.card-3441-results {
    display: grid;
    gap: 8px;
    margin-bottom: 18px;
}

.card-3441-results div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 11px 12px;
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 11px;
    background: rgba(255,255,255,.03);
}

.card-3441-results strong {
    color: #60a5fa;
    font-size: 16px;
}

.card-3441-results span {
    color: #9ca3af;
    font-size: 9px;
}

.card-3441-button {
    width: 100%;
    padding: 10px 13px;
    border: none;
    border-radius: 10px;
    background: #ffffff;
    color: #111827;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3442,
    name: "Business Statistics Card",
    preview: (
      <div className="card-3442">
        <div className="card-3442-header">
          <div>
            <span className="card-3442-label">MONTHLY REVENUE</span>
            <h3>€84,260</h3>
          </div>

          <span className="card-3442-change">+12.8%</span>
        </div>

        <p>Compared with €74,680 in the previous month.</p>

        <div className="card-3442-chart">
          <span className="card-3442-bar card-3442-bar-1"></span>
          <span className="card-3442-bar card-3442-bar-2"></span>
          <span className="card-3442-bar card-3442-bar-3"></span>
          <span className="card-3442-bar card-3442-bar-4"></span>
          <span className="card-3442-bar card-3442-bar-5"></span>
          <span className="card-3442-bar card-3442-bar-6"></span>
          <span className="card-3442-bar card-3442-bar-7"></span>
        </div>

        <div className="card-3442-footer">
          <div>
            <span>Orders</span>
            <strong>1,248</strong>
          </div>

          <div>
            <span>Average order</span>
            <strong>€67.52</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3442">
    <div class="card-3442-header">
        <div>
            <span class="card-3442-label">MONTHLY REVENUE</span>
            <h3>€84,260</h3>
        </div>

        <span class="card-3442-change">+12.8%</span>
    </div>

    <p>Compared with €74,680 in the previous month.</p>

    <div class="card-3442-chart">
        <span class="card-3442-bar card-3442-bar-1"></span>
        <span class="card-3442-bar card-3442-bar-2"></span>
        <span class="card-3442-bar card-3442-bar-3"></span>
        <span class="card-3442-bar card-3442-bar-4"></span>
        <span class="card-3442-bar card-3442-bar-5"></span>
        <span class="card-3442-bar card-3442-bar-6"></span>
        <span class="card-3442-bar card-3442-bar-7"></span>
    </div>

    <div class="card-3442-footer">
        <div>
            <span>Orders</span>
            <strong>1,248</strong>
        </div>

        <div>
            <span>Average order</span>
            <strong>€67.52</strong>
        </div>
    </div>
</div>`,
    css: `.card-3442 {
    width: 310px;
    padding: 23px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3442-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.card-3442-label {
    color: #9ca3af;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .12em;
}

.card-3442 h3 {
    margin: 6px 0 0;
    font-size: 27px;
    letter-spacing: -.04em;
}

.card-3442-change {
    padding: 5px 8px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 9px;
    font-weight: 800;
}

.card-3442 > p {
    margin: 10px 0 20px;
    color: #9ca3af;
    font-size: 10px;
}

.card-3442-chart {
    height: 90px;
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 0 4px;
}

.card-3442-bar {
    flex: 1;
    border-radius: 5px 5px 2px 2px;
    background: #dbeafe;
}

.card-3442-bar-1 { height: 38%; }
.card-3442-bar-2 { height: 52%; }
.card-3442-bar-3 { height: 47%; }
.card-3442-bar-4 { height: 68%; }
.card-3442-bar-5 { height: 61%; }
.card-3442-bar-6 { height: 79%; }
.card-3442-bar-7 {
    height: 92%;
    background: #2563eb;
}

.card-3442-footer {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-top: 18px;
    padding-top: 15px;
    border-top: 1px solid #f1f5f9;
}

.card-3442-footer span,
.card-3442-footer strong {
    display: block;
}

.card-3442-footer span {
    margin-bottom: 4px;
    color: #9ca3af;
    font-size: 8px;
}

.card-3442-footer strong {
    font-size: 12px;
}`,
  },
  {
    id: 3443,
    name: "Company Contact Card",
    preview: (
      <div className="card-3443">
        <span className="card-3443-label">GET IN TOUCH</span>

        <h3>Have a project in mind?</h3>

        <p>
          Tell us what you are working on and we will help you find the right
          approach for your website or digital product.
        </p>

        <div className="card-3443-details">
          <div>
            <span>Email</span>
            <strong>hello@studio.com</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>+31 20 123 45 67</strong>
          </div>

          <div>
            <span>Response time</span>
            <strong>Within one business day</strong>
          </div>
        </div>

        <button className="card-3443-button">Start a conversation</button>
      </div>
    ),
    html: `<div class="card-3443">
    <span class="card-3443-label">GET IN TOUCH</span>

    <h3>Have a project in mind?</h3>

    <p>
        Tell us what you are working on and we will help you find the right approach for your website or digital product.
    </p>

    <div class="card-3443-details">
        <div>
            <span>Email</span>
            <strong>hello@studio.com</strong>
        </div>

        <div>
            <span>Phone</span>
            <strong>+31 20 123 45 67</strong>
        </div>

        <div>
            <span>Response time</span>
            <strong>Within one business day</strong>
        </div>
    </div>

    <button class="card-3443-button">Start a conversation</button>
</div>`,
    css: `.card-3443 {
    width: 310px;
    padding: 25px;
    border-radius: 18px;
    background: #f8fafc;
    color: #111827;
    border: 1px solid #e2e8f0;
}

.card-3443-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3443 h3 {
    margin: 11px 0 0;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: -.03em;
}

.card-3443 > p {
    margin: 13px 0 20px;
    color: #64748b;
    font-size: 12px;
    line-height: 1.65;
}

.card-3443-details {
    display: grid;
    gap: 9px;
    margin-bottom: 19px;
}

.card-3443-details div {
    padding: 11px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 11px;
    background: #ffffff;
}

.card-3443-details span,
.card-3443-details strong {
    display: block;
}

.card-3443-details span {
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 8px;
}

.card-3443-details strong {
    font-size: 11px;
}

.card-3443-button {
    width: 100%;
    padding: 11px 13px;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3444,
    name: "Job Vacancy Card",
    preview: (
      <div className="card-3444">
        <div className="card-3444-top">
          <span className="card-3444-team">ENGINEERING</span>
          <span className="card-3444-type">FULL-TIME</span>
        </div>

        <h3>Frontend Developer</h3>

        <p className="card-3444-location">Amsterdam · Hybrid</p>

        <p className="card-3444-description">
          Join our product team and build fast, accessible interfaces used by
          thousands of customers every day.
        </p>

        <div className="card-3444-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>CSS</span>
          <span>Design Systems</span>
        </div>

        <div className="card-3444-footer">
          <div>
            <span>Salary</span>
            <strong>€3,800 – €5,200</strong>
          </div>

          <button>View position</button>
        </div>
      </div>
    ),
    html: `<div class="card-3444">
    <div class="card-3444-top">
        <span class="card-3444-team">ENGINEERING</span>
        <span class="card-3444-type">FULL-TIME</span>
    </div>

    <h3>Frontend Developer</h3>

    <p class="card-3444-location">Amsterdam · Hybrid</p>

    <p class="card-3444-description">
        Join our product team and build fast, accessible interfaces used by thousands of customers every day.
    </p>

    <div class="card-3444-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>CSS</span>
        <span>Design Systems</span>
    </div>

    <div class="card-3444-footer">
        <div>
            <span>Salary</span>
            <strong>€3,800 – €5,200</strong>
        </div>

        <button>View position</button>
    </div>
</div>`,
    css: `.card-3444 {
    width: 310px;
    padding: 23px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3444-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-3444-team {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3444-type {
    padding: 5px 8px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #475569;
    font-size: 8px;
    font-weight: 700;
}

.card-3444 h3 {
    margin: 19px 0 0;
    font-size: 23px;
}

.card-3444-location {
    margin: 5px 0 0;
    color: #64748b;
    font-size: 10px;
}

.card-3444-description {
    margin: 14px 0 16px;
    color: #6b7280;
    font-size: 11px;
    line-height: 1.65;
}

.card-3444-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
}

.card-3444-tags span {
    padding: 5px 8px;
    border-radius: 999px;
    background: #eff6ff;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 700;
}

.card-3444-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    padding-top: 16px;
    border-top: 1px solid #f1f5f9;
}

.card-3444-footer span,
.card-3444-footer strong {
    display: block;
}

.card-3444-footer span {
    margin-bottom: 3px;
    color: #9ca3af;
    font-size: 8px;
}

.card-3444-footer strong {
    font-size: 11px;
}

.card-3444-footer button {
    padding: 9px 11px;
    border: none;
    border-radius: 9px;
    background: #111827;
    color: #ffffff;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3445,
    name: "Business Feature Card",
    preview: (
      <div className="card-3445">
        <span className="card-3445-number">01</span>

        <span className="card-3445-label">PLATFORM FEATURE</span>

        <h3>Everything your team needs in one workspace.</h3>

        <p>
          Plan projects, communicate with your team and keep important work
          organized without switching between multiple tools.
        </p>

        <div className="card-3445-example">
          <div>
            <span>Active projects</span>
            <strong>24</strong>
          </div>

          <div>
            <span>Tasks completed</span>
            <strong>1,842</strong>
          </div>

          <div>
            <span>Team members</span>
            <strong>16</strong>
          </div>
        </div>

        <button className="card-3445-button">Explore the platform</button>
      </div>
    ),
    html: `<div class="card-3445">
    <span class="card-3445-number">01</span>

    <span class="card-3445-label">PLATFORM FEATURE</span>

    <h3>Everything your team needs in one workspace.</h3>

    <p>
        Plan projects, communicate with your team and keep important work organized without switching between multiple tools.
    </p>

    <div class="card-3445-example">
        <div>
            <span>Active projects</span>
            <strong>24</strong>
        </div>

        <div>
            <span>Tasks completed</span>
            <strong>1,842</strong>
        </div>

        <div>
            <span>Team members</span>
            <strong>16</strong>
        </div>
    </div>

    <button class="card-3445-button">Explore the platform</button>
</div>`,
    css: `.card-3445 {
    position: relative;
    width: 310px;
    padding: 25px;
    overflow: hidden;
    border: 1px solid #dbe3ef;
    border-radius: 20px;
    background: linear-gradient(145deg,#ffffff,#f8fafc);
    color: #111827;
    box-shadow: 0 14px 34px rgba(15,23,42,.07);
}

.card-3445-number {
    position: absolute;
    right: 17px;
    top: 12px;
    color: #e2e8f0;
    font-size: 48px;
    font-weight: 900;
    letter-spacing: -.06em;
}

.card-3445-label {
    position: relative;
    z-index: 2;
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3445 h3 {
    position: relative;
    z-index: 2;
    margin: 19px 0 0;
    max-width: 250px;
    font-size: 23px;
    line-height: 1.25;
    letter-spacing: -.03em;
}

.card-3445 > p {
    position: relative;
    z-index: 2;
    margin: 13px 0 20px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3445-example {
    display: grid;
    gap: 7px;
    margin-bottom: 18px;
}

.card-3445-example div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 11px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 11px;
    background: #ffffff;
}

.card-3445-example span {
    color: #6b7280;
    font-size: 9px;
}

.card-3445-example strong {
    font-size: 12px;
}

.card-3445-button {
    width: 100%;
    padding: 11px 13px;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3446,
    name: "Company About Card",
    preview: (
      <div className="card-3446">
        <span className="card-3446-label">ABOUT OUR COMPANY</span>

        <h3>Digital products designed around real business goals.</h3>

        <p>
          We help companies turn ideas into clear, scalable and user-friendly
          digital experiences.
        </p>

        <div className="card-3446-values">
          <div>
            <strong>12+</strong>
            <span>Years experience</span>
          </div>

          <div>
            <strong>180</strong>
            <span>Projects delivered</span>
          </div>

          <div>
            <strong>32</strong>
            <span>Team members</span>
          </div>
        </div>

        <button className="card-3446-button">About our company</button>
      </div>
    ),
    html: `<div class="card-3446">
    <span class="card-3446-label">ABOUT OUR COMPANY</span>

    <h3>Digital products designed around real business goals.</h3>

    <p>
        We help companies turn ideas into clear, scalable and user-friendly digital experiences.
    </p>

    <div class="card-3446-values">
        <div>
            <strong>12+</strong>
            <span>Years experience</span>
        </div>

        <div>
            <strong>180</strong>
            <span>Projects delivered</span>
        </div>

        <div>
            <strong>32</strong>
            <span>Team members</span>
        </div>
    </div>

    <button class="card-3446-button">About our company</button>
</div>`,
    css: `.card-3446 {
    width: 310px;
    padding: 25px;
    border: 1px solid #e5e7eb;
    border-radius: 19px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3446-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3446 h3 {
    margin: 14px 0 0;
    font-size: 23px;
    line-height: 1.3;
    letter-spacing: -.03em;
}

.card-3446 > p {
    margin: 13px 0 21px;
    color: #64748b;
    font-size: 12px;
    line-height: 1.65;
}

.card-3446-values {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 7px;
    margin-bottom: 20px;
}

.card-3446-values div {
    padding: 11px 7px;
    border-radius: 12px;
    background: #f8fafc;
    text-align: center;
}

.card-3446-values strong,
.card-3446-values span {
    display: block;
}

.card-3446-values strong {
    margin-bottom: 4px;
    color: #1d4ed8;
    font-size: 17px;
}

.card-3446-values span {
    color: #94a3b8;
    font-size: 8px;
    line-height: 1.3;
}

.card-3446-button {
    width: 100%;
    padding: 11px 13px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3447,
    name: "Newsletter Signup Card",
    preview: (
      <div className="card-3447">
        <span className="card-3447-label">NEWSLETTER</span>

        <h3>Useful ideas, once a week.</h3>

        <p>
          Join more than 8,000 readers receiving practical articles about
          design, development and digital products.
        </p>

        <div className="card-3447-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>

        <span className="card-3447-note">
          No spam. Unsubscribe whenever you want.
        </span>
      </div>
    ),
    html: `<div class="card-3447">
    <span class="card-3447-label">NEWSLETTER</span>

    <h3>Useful ideas, once a week.</h3>

    <p>
        Join more than 8,000 readers receiving practical articles about design, development and digital products.
    </p>

    <div class="card-3447-form">
        <input type="email" placeholder="Your email address">
        <button>Subscribe</button>
    </div>

    <span class="card-3447-note">
        No spam. Unsubscribe whenever you want.
    </span>
</div>`,
    css: `.card-3447 {
    width: 310px;
    padding: 25px;
    border: 1px solid #e2e8f0;
    border-radius: 19px;
    background: #f8fafc;
    color: #111827;
}

.card-3447-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .14em;
}

.card-3447 h3 {
    margin: 12px 0 0;
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: -.03em;
}

.card-3447 > p {
    margin: 13px 0 19px;
    color: #64748b;
    font-size: 12px;
    line-height: 1.65;
}

.card-3447-form {
    display: grid;
    gap: 8px;
}

.card-3447-form input {
    width: 100%;
    box-sizing: border-box;
    padding: 11px 12px;
    border: 1px solid #dbe3ee;
    border-radius: 10px;
    outline: none;
    background: #ffffff;
    color: #111827;
    font: inherit;
    font-size: 10px;
}

.card-3447-form input::placeholder {
    color: #94a3b8;
}

.card-3447-form button {
    padding: 11px 13px;
    border: none;
    border-radius: 10px;
    background: #2563eb;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}

.card-3447-note {
    display: block;
    margin-top: 10px;
    color: #94a3b8;
    font-size: 8px;
    text-align: center;
}`,
  },
  {
    id: 3448,
    name: "Event Registration Card",
    preview: (
      <div className="card-3448">
        <div className="card-3448-date">
          <strong>24</strong>
          <span>OCT</span>
        </div>

        <div className="card-3448-content">
          <span className="card-3448-label">ONLINE EVENT</span>

          <h3>Designing better digital products in 2027.</h3>

          <p>
            A practical session covering product strategy, user experience and
            modern frontend workflows.
          </p>

          <div className="card-3448-details">
            <span>14:00 – 15:30 CET</span>
            <span>Online webinar</span>
            <span>Free registration</span>
          </div>

          <button className="card-3448-button">Reserve your seat</button>
        </div>
      </div>
    ),
    html: `<div class="card-3448">
    <div class="card-3448-date">
        <strong>24</strong>
        <span>OCT</span>
    </div>

    <div class="card-3448-content">
        <span class="card-3448-label">ONLINE EVENT</span>

        <h3>Designing better digital products in 2027.</h3>

        <p>
            A practical session covering product strategy, user experience and modern frontend workflows.
        </p>

        <div class="card-3448-details">
            <span>14:00 – 15:30 CET</span>
            <span>Online webinar</span>
            <span>Free registration</span>
        </div>

        <button class="card-3448-button">Reserve your seat</button>
    </div>
</div>`,
    css: `.card-3448 {
    width: 310px;
    padding: 22px;
    border: 1px solid #e5e7eb;
    border-radius: 19px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3448-date {
    width: 55px;
    padding: 10px 5px;
    margin-bottom: 20px;
    border-radius: 13px;
    background: #eff6ff;
    text-align: center;
}

.card-3448-date strong,
.card-3448-date span {
    display: block;
}

.card-3448-date strong {
    color: #1d4ed8;
    font-size: 23px;
    line-height: 1;
}

.card-3448-date span {
    margin-top: 4px;
    color: #3b82f6;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .12em;
}

.card-3448-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3448 h3 {
    margin: 8px 0 0;
    font-size: 22px;
    line-height: 1.3;
}

.card-3448 p {
    margin: 12px 0 17px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3448-details {
    display: grid;
    gap: 7px;
    margin-bottom: 18px;
}

.card-3448-details span {
    padding: 8px 10px;
    border-radius: 9px;
    background: #f8fafc;
    color: #475569;
    font-size: 9px;
}

.card-3448-button {
    width: 100%;
    padding: 11px 13px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3449,
    name: "Customer Support Card",
    preview: (
      <div className="card-3449">
        <span className="card-3449-label">CUSTOMER SUPPORT</span>

        <h3>Need help with your account?</h3>

        <p>
          Our support team can help you with billing, account settings,
          technical questions and general product support.
        </p>

        <div className="card-3449-response">
          <div>
            <span>Average response</span>
            <strong>18 minutes</strong>
          </div>

          <div>
            <span>Support hours</span>
            <strong>08:00 – 18:00</strong>
          </div>
        </div>

        <div className="card-3449-buttons">
          <button className="card-3449-primary">Contact support</button>
          <button className="card-3449-secondary">Help center</button>
        </div>
      </div>
    ),
    html: `<div class="card-3449">
    <span class="card-3449-label">CUSTOMER SUPPORT</span>

    <h3>Need help with your account?</h3>

    <p>
        Our support team can help you with billing, account settings, technical questions and general product support.
    </p>

    <div class="card-3449-response">
        <div>
            <span>Average response</span>
            <strong>18 minutes</strong>
        </div>

        <div>
            <span>Support hours</span>
            <strong>08:00 – 18:00</strong>
        </div>
    </div>

    <div class="card-3449-buttons">
        <button class="card-3449-primary">Contact support</button>
        <button class="card-3449-secondary">Help center</button>
    </div>
</div>`,
    css: `.card-3449 {
    width: 310px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3449-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3449 h3 {
    margin: 12px 0 0;
    font-size: 23px;
    line-height: 1.25;
}

.card-3449 > p {
    margin: 13px 0 19px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3449-response {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-bottom: 18px;
}

.card-3449-response div {
    padding: 11px;
    border-radius: 11px;
    background: #f8fafc;
}

.card-3449-response span,
.card-3449-response strong {
    display: block;
}

.card-3449-response span {
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 8px;
}

.card-3449-response strong {
    font-size: 10px;
}

.card-3449-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.card-3449-buttons button {
    padding: 10px 8px;
    border-radius: 10px;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.card-3449-primary {
    border: none;
    background: #2563eb;
    color: #ffffff;
}

.card-3449-secondary {
    border: 1px solid #dbe3ee;
    background: #ffffff;
    color: #111827;
}`,
  },
  {
    id: 3450,
    name: "Product Feature Card",
    preview: (
      <div className="card-3450">
        <div className="card-3450-preview">
          <div className="card-3450-window">
            <span className="card-3450-row card-3450-row-1" />
            <span className="card-3450-row card-3450-row-2" />
            <span className="card-3450-row card-3450-row-3" />
          </div>
        </div>

        <div className="card-3450-content">
          <span className="card-3450-label">AUTOMATION</span>

          <h3>Save time on repetitive work.</h3>

          <p>
            Automate routine tasks and keep your team focused on work that
            actually needs human attention.
          </p>

          <a className="card-3450-link" href="#">
            Discover automation
          </a>
        </div>
      </div>
    ),
    html: `<div class="card-3450">
    <div class="card-3450-preview">
        <div class="card-3450-window">
            <span class="card-3450-row card-3450-row-1"></span>
            <span class="card-3450-row card-3450-row-2"></span>
            <span class="card-3450-row card-3450-row-3"></span>
        </div>
    </div>

    <div class="card-3450-content">
        <span class="card-3450-label">AUTOMATION</span>

        <h3>Save time on repetitive work.</h3>

        <p>
            Automate routine tasks and keep your team focused on work that actually needs human attention.
        </p>

        <a class="card-3450-link" href="#">Discover automation</a>
    </div>
</div>`,
    css: `.card-3450 {
    width: 310px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 19px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.07);
}

.card-3450-preview {
    height: 145px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#eff6ff,#f8fafc);
}

.card-3450-window {
    width: 210px;
    padding: 16px;
    border: 1px solid #dbeafe;
    border-radius: 13px;
    background: #ffffff;
    box-shadow: 0 10px 25px rgba(37,99,235,.09);
}

.card-3450-row {
    display: block;
    height: 9px;
    border-radius: 999px;
    background: #e2e8f0;
}

.card-3450-row + .card-3450-row {
    margin-top: 10px;
}

.card-3450-row-1 {
    width: 78%;
    background: #93c5fd;
}

.card-3450-row-2 {
    width: 100%;
}

.card-3450-row-3 {
    width: 61%;
}

.card-3450-content {
    padding: 20px;
}

.card-3450-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3450 h3 {
    margin: 8px 0 0;
    font-size: 21px;
    line-height: 1.3;
}

.card-3450 p {
    margin: 12px 0 15px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3450-link {
    color: #2563eb;
    font-size: 10px;
    font-weight: 700;
    text-decoration: none;
}`,
  },
  {
    id: 3451,
    name: "Project Overview Card",
    preview: (
      <div className="card-3451">
        <div className="card-3451-header">
          <div>
            <span className="card-3451-label">CURRENT PROJECT</span>
            <h3>Website Redesign</h3>
          </div>

          <span className="card-3451-status">IN PROGRESS</span>
        </div>

        <p>
          Complete redesign of the company website including a new design
          system, responsive layouts and improved content structure.
        </p>

        <div className="card-3451-progress">
          <div>
            <span>Overall progress</span>
            <strong>72%</strong>
          </div>

          <div className="card-3451-track">
            <span />
          </div>
        </div>

        <div className="card-3451-footer">
          <div>
            <span>Deadline</span>
            <strong>November 28</strong>
          </div>

          <div>
            <span>Team</span>
            <strong>6 people</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="card-3451">
    <div class="card-3451-header">
        <div>
            <span class="card-3451-label">CURRENT PROJECT</span>
            <h3>Website Redesign</h3>
        </div>

        <span class="card-3451-status">IN PROGRESS</span>
    </div>

    <p>
        Complete redesign of the company website including a new design system, responsive layouts and improved content structure.
    </p>

    <div class="card-3451-progress">
        <div>
            <span>Overall progress</span>
            <strong>72%</strong>
        </div>

        <div class="card-3451-track">
            <span></span>
        </div>
    </div>

    <div class="card-3451-footer">
        <div>
            <span>Deadline</span>
            <strong>November 28</strong>
        </div>

        <div>
            <span>Team</span>
            <strong>6 people</strong>
        </div>
    </div>
</div>`,
    css: `.card-3451 {
    width: 310px;
    padding: 23px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3451-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
}

.card-3451-label {
    color: #64748b;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .12em;
}

.card-3451 h3 {
    margin: 6px 0 0;
    font-size: 20px;
}

.card-3451-status {
    padding: 5px 7px;
    border-radius: 999px;
    background: #fef3c7;
    color: #a16207;
    font-size: 7px;
    font-weight: 800;
}

.card-3451 > p {
    margin: 16px 0 20px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3451-progress > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.card-3451-progress span {
    color: #64748b;
    font-size: 9px;
}

.card-3451-progress strong {
    font-size: 10px;
}

.card-3451-track {
    height: 6px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}

.card-3451-track span {
    display: block;
    width: 72%;
    height: 100%;
    background: #2563eb;
}

.card-3451-footer {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-top: 19px;
    padding-top: 15px;
    border-top: 1px solid #f1f5f9;
}

.card-3451-footer span,
.card-3451-footer strong {
    display: block;
}

.card-3451-footer span {
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 8px;
}

.card-3451-footer strong {
    font-size: 10px;
}`,
  },
  {
    id: 3452,
    name: "FAQ Answer Card",
    preview: (
      <div className="card-3452">
        <span className="card-3452-label">FREQUENTLY ASKED</span>

        <h3>How long does a typical website project take?</h3>

        <p>
          Most company websites take between four and eight weeks. The exact
          timeline depends on the number of pages, integrations and how quickly
          content can be provided.
        </p>

        <div className="card-3452-info">
          <div>
            <span>Small website</span>
            <strong>3–4 weeks</strong>
          </div>

          <div>
            <span>Business website</span>
            <strong>5–8 weeks</strong>
          </div>
        </div>

        <a className="card-3452-link" href="#">
          View all questions
        </a>
      </div>
    ),
    html: `<div class="card-3452">
    <span class="card-3452-label">FREQUENTLY ASKED</span>

    <h3>How long does a typical website project take?</h3>

    <p>
        Most company websites take between four and eight weeks. The exact timeline depends on the number of pages, integrations and how quickly content can be provided.
    </p>

    <div class="card-3452-info">
        <div>
            <span>Small website</span>
            <strong>3–4 weeks</strong>
        </div>

        <div>
            <span>Business website</span>
            <strong>5–8 weeks</strong>
        </div>
    </div>

    <a class="card-3452-link" href="#">View all questions</a>
</div>`,
    css: `.card-3452 {
    width: 310px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3452-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3452 h3 {
    margin: 12px 0 0;
    font-size: 22px;
    line-height: 1.3;
}

.card-3452 > p {
    margin: 13px 0 19px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.7;
}

.card-3452-info {
    display: grid;
    gap: 7px;
    margin-bottom: 18px;
}

.card-3452-info div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 11px;
    border-radius: 10px;
    background: #f8fafc;
}

.card-3452-info span {
    color: #64748b;
    font-size: 9px;
}

.card-3452-info strong {
    font-size: 9px;
}

.card-3452-link {
    color: #2563eb;
    font-size: 10px;
    font-weight: 700;
    text-decoration: none;
}`,
  },
  {
    id: 3453,
    name: "Account Summary Card",
    preview: (
      <div className="card-3453">
        <div className="card-3453-header">
          <div>
            <span className="card-3453-label">ACCOUNT</span>
            <h3>Professional Workspace</h3>
          </div>

          <span className="card-3453-plan">PRO</span>
        </div>

        <div className="card-3453-details">
          <div>
            <span>Workspace members</span>
            <strong>12 / 20</strong>
          </div>

          <div>
            <span>Storage used</span>
            <strong>48.2 GB</strong>
          </div>

          <div>
            <span>Next billing date</span>
            <strong>October 17</strong>
          </div>

          <div>
            <span>Monthly total</span>
            <strong>€89.00</strong>
          </div>
        </div>

        <button className="card-3453-button">Manage subscription</button>
      </div>
    ),
    html: `<div class="card-3453">
    <div class="card-3453-header">
        <div>
            <span class="card-3453-label">ACCOUNT</span>
            <h3>Professional Workspace</h3>
        </div>

        <span class="card-3453-plan">PRO</span>
    </div>

    <div class="card-3453-details">
        <div>
            <span>Workspace members</span>
            <strong>12 / 20</strong>
        </div>

        <div>
            <span>Storage used</span>
            <strong>48.2 GB</strong>
        </div>

        <div>
            <span>Next billing date</span>
            <strong>October 17</strong>
        </div>

        <div>
            <span>Monthly total</span>
            <strong>€89.00</strong>
        </div>
    </div>

    <button class="card-3453-button">Manage subscription</button>
</div>`,
    css: `.card-3453 {
    width: 310px;
    padding: 23px;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3453-header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 20px;
}

.card-3453-label {
    color: #64748b;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .12em;
}

.card-3453 h3 {
    margin: 6px 0 0;
    font-size: 19px;
}

.card-3453-plan {
    align-self: flex-start;
    padding: 5px 8px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 8px;
    font-weight: 900;
}

.card-3453-details {
    display: grid;
    gap: 2px;
    margin-bottom: 18px;
}

.card-3453-details div {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    padding: 11px 0;
    border-bottom: 1px solid #f1f5f9;
}

.card-3453-details span {
    color: #64748b;
    font-size: 9px;
}

.card-3453-details strong {
    font-size: 9px;
}

.card-3453-button {
    width: 100%;
    padding: 10px 13px;
    border: 1px solid #dbe3ee;
    border-radius: 10px;
    background: #ffffff;
    color: #111827;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3454,
    name: "Office Location Card",
    preview: (
      <div className="card-3454">
        <div className="card-3454-map">
          <span className="card-3454-road card-3454-road-1" />
          <span className="card-3454-road card-3454-road-2" />
          <span className="card-3454-road card-3454-road-3" />
          <span className="card-3454-location-dot" />
        </div>

        <div className="card-3454-content">
          <span className="card-3454-label">OUR OFFICE</span>

          <h3>Amsterdam</h3>

          <p>
            Wibautstraat 131-D
            <br />
            1091 GL Amsterdam
            <br />
            The Netherlands
          </p>

          <div className="card-3454-hours">
            <span>Monday – Friday</span>
            <strong>09:00 – 17:30</strong>
          </div>

          <button className="card-3454-button">View directions</button>
        </div>
      </div>
    ),
    html: `<div class="card-3454">
    <div class="card-3454-map">
        <span class="card-3454-road card-3454-road-1"></span>
        <span class="card-3454-road card-3454-road-2"></span>
        <span class="card-3454-road card-3454-road-3"></span>
        <span class="card-3454-location-dot"></span>
    </div>

    <div class="card-3454-content">
        <span class="card-3454-label">OUR OFFICE</span>

        <h3>Amsterdam</h3>

        <p>
            Wibautstraat 131-D<br>
            1091 GL Amsterdam<br>
            The Netherlands
        </p>

        <div class="card-3454-hours">
            <span>Monday – Friday</span>
            <strong>09:00 – 17:30</strong>
        </div>

        <button class="card-3454-button">View directions</button>
    </div>
</div>`,
    css: `.card-3454 {
    width: 310px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 19px;
    background: #ffffff;
    color: #111827;
    box-shadow: 0 12px 30px rgba(15,23,42,.06);
}

.card-3454-map {
    position: relative;
    height: 135px;
    overflow: hidden;
    background: #f1f5f9;
}

.card-3454-road {
    position: absolute;
    display: block;
    border-radius: 999px;
    background: #ffffff;
}

.card-3454-road-1 {
    width: 360px;
    height: 10px;
    left: -35px;
    top: 62px;
    transform: rotate(-12deg);
}

.card-3454-road-2 {
    width: 210px;
    height: 9px;
    left: 72px;
    top: 20px;
    transform: rotate(58deg);
}

.card-3454-road-3 {
    width: 170px;
    height: 7px;
    left: -15px;
    bottom: 23px;
    transform: rotate(27deg);
}

.card-3454-location-dot {
    position: absolute;
    left: 56%;
    top: 46%;
    width: 16px;
    height: 16px;
    transform: translate(-50%,-50%);
    border: 4px solid #ffffff;
    border-radius: 50%;
    background: #2563eb;
    box-shadow: 0 4px 10px rgba(37,99,235,.25);
}

.card-3454-content {
    padding: 20px;
}

.card-3454-label {
    color: #2563eb;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3454 h3 {
    margin: 7px 0 0;
    font-size: 22px;
}

.card-3454 p {
    margin: 11px 0 16px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.65;
}

.card-3454-hours {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 11px;
    margin-bottom: 16px;
    border-radius: 10px;
    background: #f8fafc;
}

.card-3454-hours span {
    color: #64748b;
    font-size: 9px;
}

.card-3454-hours strong {
    font-size: 9px;
}

.card-3454-button {
    width: 100%;
    padding: 10px 13px;
    border: none;
    border-radius: 10px;
    background: #111827;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}`,
  },
  {
    id: 3455,
    name: "Partner Program Card",
    preview: (
      <div className="card-3455">
        <span className="card-3455-label">PARTNER PROGRAM</span>

        <h3>Grow your business together with us.</h3>

        <p>
          Join our partner network and get access to dedicated support, shared
          opportunities and better tools for your customers.
        </p>

        <div className="card-3455-benefits">
          <div>
            <span>Partner commission</span>
            <strong>Up to 25%</strong>
          </div>

          <div>
            <span>Dedicated support</span>
            <strong>Included</strong>
          </div>

          <div>
            <span>Marketing resources</span>
            <strong>Included</strong>
          </div>
        </div>

        <div className="card-3455-footer">
          <button className="card-3455-primary">Become a partner</button>
          <button className="card-3455-secondary">Learn more</button>
        </div>
      </div>
    ),
    html: `<div class="card-3455">
    <span class="card-3455-label">PARTNER PROGRAM</span>

    <h3>Grow your business together with us.</h3>

    <p>
        Join our partner network and get access to dedicated support, shared opportunities and better tools for your customers.
    </p>

    <div class="card-3455-benefits">
        <div>
            <span>Partner commission</span>
            <strong>Up to 25%</strong>
        </div>

        <div>
            <span>Dedicated support</span>
            <strong>Included</strong>
        </div>

        <div>
            <span>Marketing resources</span>
            <strong>Included</strong>
        </div>
    </div>

    <div class="card-3455-footer">
        <button class="card-3455-primary">Become a partner</button>
        <button class="card-3455-secondary">Learn more</button>
    </div>
</div>`,
    css: `.card-3455 {
    width: 310px;
    padding: 25px;
    border-radius: 19px;
    background: #111827;
    color: #ffffff;
    box-shadow: 0 16px 36px rgba(17,24,39,.2);
}

.card-3455-label {
    color: #93c5fd;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .13em;
}

.card-3455 h3 {
    margin: 13px 0 0;
    font-size: 23px;
    line-height: 1.28;
}

.card-3455 > p {
    margin: 13px 0 19px;
    color: #9ca3af;
    font-size: 11px;
    line-height: 1.65;
}

.card-3455-benefits {
    display: grid;
    gap: 7px;
    margin-bottom: 20px;
}

.card-3455-benefits div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 11px;
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 10px;
    background: rgba(255,255,255,.03);
}

.card-3455-benefits span {
    color: #9ca3af;
    font-size: 9px;
}

.card-3455-benefits strong {
    color: #ffffff;
    font-size: 9px;
}

.card-3455-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.card-3455-footer button {
    padding: 10px 8px;
    border-radius: 10px;
    font-size: 9px;
    font-weight: 700;
    cursor: pointer;
}

.card-3455-primary {
    border: none;
    background: #ffffff;
    color: #111827;
}

.card-3455-secondary {
    border: 1px solid rgba(255,255,255,.12);
    background: transparent;
    color: #ffffff;
}`,
  },
];
