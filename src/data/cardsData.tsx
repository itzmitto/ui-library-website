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
];
