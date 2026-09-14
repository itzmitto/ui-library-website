import "../pages/All.css";

export const loaders = [
  {
    id: 9,
    name: "Spinner Loader",
    preview: <div className="prev-spinner" />,
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
}`,
  },
  {
    id: 10,
    name: "Dots Loader",
    preview: (
      <div className="prev-dots">
        <span />
        <span />
        <span />
      </div>
    ),
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
}`,
  },
  {
    id: 11,
    name: "Progress Bar",
    preview: (
      <div className="prev-progress-wrap">
        <div className="prev-progress-bar" />
      </div>
    ),
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
}`,
  },
  {
    id: 141,
    name: "Loader",
    preview: <div className="ld-141" />,
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
}`,
  },
  {
    id: 142,
    name: "Loader",
    preview: <div className="ld-142" />,
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
}`,
  },
  {
    id: 143,
    name: "Loader",
    preview: <div className="ld-143" />,
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
}`,
  },
  {
    id: 144,
    name: "Loader",
    preview: <div className="ld-144" />,
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
}`,
  },
  {
    id: 145,
    name: "Loader",
    preview: <div className="ld-145" />,
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
}`,
  },
  {
    id: 146,
    name: "Loader",
    preview: <div className="ld-146" />,
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
}`,
  },
  {
    id: 147,
    name: "Loader",
    preview: <div className="ld-147" />,
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
}`,
  },
  {
    id: 148,
    name: "Loader",
    preview: <div className="ld-148" />,
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
}`,
  },
  {
    id: 149,
    name: "Loader",
    preview: <div className="ld-149" />,
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
}`,
  },
  {
    id: 150,
    name: "Loader",
    preview: <div className="ld-150" />,
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
}`,
  },
  {
    id: 151,
    name: "Loader",
    preview: <div className="ld-151" />,
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
}`,
  },
  {
    id: 152,
    name: "Loader",
    preview: (
      <div style={{ marginLeft: "20px" }}>
        <div className="ld-152" />
      </div>
    ),
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
}`,
  },
  {
    id: 153,
    name: "Loader",
    preview: (
      <div style={{ marginLeft: "12px" }}>
        <div className="ld-153" />
      </div>
    ),
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
}`,
  },
  {
    id: 154,
    name: "Loader",
    preview: <div className="ld-154" />,
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
}`,
  },
  {
    id: 155,
    name: "Loader",
    preview: <div className="ld-155" />,
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
}`,
  },
  {
    id: 156,
    name: "Loader",
    preview: <div className="ld-156" />,
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
}`,
  },
  {
    id: 157,
    name: "Loader",
    preview: <div className="ld-157" />,
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
}`,
  },
  {
    id: 158,
    name: "Loader",
    preview: <div className="ld-158" />,
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
}`,
  },
  {
    id: 159,
    name: "Loader",
    preview: <div className="ld-159" />,
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
}`,
  },
  {
    id: 160,
    name: "Loader",
    preview: <div className="ld-160" />,
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
}`,
  },
  {
    id: 161,
    name: "Loader",
    preview: <div className="ld-161" />,
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
}`,
  },
  {
    id: 162,
    name: "Loader",
    preview: <div className="ld-162" />,
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
}`,
  },
  {
    id: 163,
    name: "Loader",
    preview: <div className="ld-163" />,
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
}`,
  },
  {
    id: 164,
    name: "Loader",
    preview: <div className="ld-164" />,
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
}`,
  },
  {
    id: 165,
    name: "Loader",
    preview: <div className="ld-165" />,
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
}`,
  },
  {
    id: 166,
    name: "Loader",
    preview: <div className="ld-166" />,
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
}`,
  },
  {
    id: 167,
    name: "Loader",
    preview: <div className="ld-167" />,
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
}`,
  },
  {
    id: 168,
    name: "Loader",
    preview: <div className="ld-168" />,
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
}`,
  },
  {
    id: 169,
    name: "Loader",
    preview: <div className="ld-169" />,
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
}`,
  },
  {
    id: 170,
    name: "Loader",
    preview: <div className="ld-170" />,
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
}`,
  },
  {
    id: 600,
    name: "Kinetic Badge",
    preview: (
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
            <text
              fontSize="10.5"
              fontWeight="600"
              fill="currentColor"
              letterSpacing="2"
            >
              <textPath href="#ld600-circle" startOffset="0%">
                VIEW MASTERPIECE • VIEW MASTERPIECE •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="ld-600__icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            width="28"
            height="28"
          >
            <path
              d="M6 18L18 6M18 6H8M18 6V16"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
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
}`,
  },
  {
    id: 601,
    name: "Blade Spinner",
    preview: (
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
}`,
  },
  {
    id: 602,
    name: "Scanner Loader",
    preview: (
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
}`,
  },
  {
    id: 603,
    name: "Loader",
    preview: <div className="ld-603" />,
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
}`,
  },
  {
    id: 604,
    name: "Loader",
    preview: <div className="ld-604" />,
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
}`,
  },
  {
    id: 605,
    name: "Loader",
    preview: <div className="ld-605" />,
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
}`,
  },
  {
    id: 606,
    name: "Loader",
    preview: <div className="ld-606" />,
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
}`,
  },
  {
    id: 607,
    name: "Loader",
    preview: <div className="ld-607" />,
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
}`,
  },
  {
    id: 608,
    name: "Loader",
    preview: <div className="ld-608" />,
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
}`,
  },
  {
    id: 609,
    name: "Loader",
    preview: <div className="ld-609" />,
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
}`,
  },
  {
    id: 610,
    name: "Loader",
    preview: <div className="ld-610" />,
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
}`,
  },
  {
    id: 611,
    name: "Loader",
    preview: <div className="ld-611" />,
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
}`,
  },
  {
    id: 612,
    name: "Loader",
    preview: <div className="ld-612" />,
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
}`,
  },
  {
    id: 613,
    name: "Loader",
    preview: <div className="ld-613" />,
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
}`,
  },
  {
    id: 614,
    name: "Loader",
    preview: <div className="ld-614" />,
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
}`,
  },
  {
    id: 615,
    name: "Loader",
    preview: <div className="ld-615" />,
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
}`,
  },
  {
    id: 616,
    name: "Loader",
    preview: <div className="ld-616" />,
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
}`,
  },
  {
    id: 617,
    name: "Loader",
    preview: <div className="ld-617" />,
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
}`,
  },
  {
    id: 618,
    name: "Loader",
    preview: <div className="ld-618" />,
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
}`,
  },
  {
    id: 619,
    name: "Loader",
    preview: <div className="ld-619" />,
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
}`,
  },
  {
    id: 620,
    name: "Loader",
    preview: <div className="ld-620" />,
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
}`,
  },
  {
    id: 621,
    name: "Loader",
    preview: <div className="ld-621" />,
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
}`,
  },
  {
    id: 622,
    name: "Loader",
    preview: <div className="ld-622" />,
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
}`,
  },
  {
    id: 623,
    name: "Loader",
    preview: <div className="ld-623" />,
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
}`,
  },
  {
    id: 624,
    name: "Loader",
    preview: <div className="ld-624" />,
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
}`,
  },
  {
    id: 625,
    name: "Loader",
    preview: <div className="ld-625" />,
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
}`,
  },
  {
    id: 626,
    name: "Loader",
    preview: <div className="ld-626" />,
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
}`,
  },
  {
    id: 627,
    name: "Loader",
    preview: <div className="ld-627" />,
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
}`,
  },
  {
    id: 628,
    name: "Loader",
    preview: <div className="ld-628" />,
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
}`,
  },
  {
    id: 629,
    name: "Loader",
    preview: <div className="ld-629" />,
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
}`,
  },
  {
    id: 630,
    name: "Loader",
    preview: <div className="ld-630" />,
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
}`,
  },
  {
    id: 1203,
    name: "Spinning Ring",
    preview: (
      <div className="loader-1203">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    border: 4px solid #e4e4e7;
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1204,
    name: "Dual Ring",
    preview: (
      <div className="loader-1204">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    border: 3px solid transparent;
    border-top-color: #7c3aed;
    border-bottom-color: #ec4899;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1205,
    name: "Dots Loader",
    preview: (
      <div className="loader-1205">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 6px;
}
.Loader span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #2563eb;
    animation: bounce 0.9s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: 0.15s;
}
.Loader span:nth-child(3) {
    animation-delay: 0.3s;
}
@keyframes bounce {
    0%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
}`,
  },
  {
    id: 1206,
    name: "Wave Loader",
    preview: (
      <div className="loader-1206">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 32px;
}
.Loader span {
    width: 5px;
    height: 12px;
    background: #06b6d4;
    border-radius: 999px;
    animation: wave 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: 0.1s;
}
.Loader span:nth-child(3) {
    animation-delay: 0.2s;
}
.Loader span:nth-child(4) {
    animation-delay: 0.3s;
}
.Loader span:nth-child(5) {
    animation-delay: 0.4s;
}
@keyframes wave {
    0%, 100% {
        height: 10px;
    }
    50% {
        height: 30px;
    }
}`,
  },
  {
    id: 1207,
    name: "Square Spin",
    preview: (
      <div className="loader-1207">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 24px;
    height: 24px;
    border: 3px solid #e4e4e7;
    border-left-color: #f97316;
    border-radius: 7px;
    animation: square-spin 0.8s linear infinite;
}
@keyframes square-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1208,
    name: "Pulse Loader",
    preview: (
      <div className="loader-1208">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 0 rgba(34,197,94,.5);
    animation: pulse 1.4s infinite;
}
@keyframes pulse {
    70% {
        box-shadow: 0 0 0 16px rgba(34,197,94,0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(34,197,94,0);
    }
}`,
  },
  {
    id: 1209,
    name: "Orbit Loader",
    preview: (
      <div className="loader-1209">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 46px;
    height: 46px;
    border: 2px solid rgba(124,58,237,.2);
    border-radius: 50%;
    animation: orbit-ring 1.4s linear infinite;
}
.Loader span {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
}
.Loader span:first-child {
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #7c3aed;
}
.Loader span:last-child {
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    background: #ec4899;
}
@keyframes orbit-ring {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1210,
    name: "Gradient Ring",
    preview: (
      <div className="loader-1210">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
    animation: gradient-spin 1s linear infinite;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: #18181b;
}
@keyframes gradient-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1211,
    name: "Rainbow Dots",
    preview: (
      <div className="loader-1211">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 6px;
    align-items: center;
}
.Loader span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    animation: rainbow-dot 1.2s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    background: #ef4444;
}
.Loader span:nth-child(2) {
    background: #f97316;
    animation-delay: .1s;
}
.Loader span:nth-child(3) {
    background: #eab308;
    animation-delay: .2s;
}
.Loader span:nth-child(4) {
    background: #22c55e;
    animation-delay: .3s;
}
.Loader span:nth-child(5) {
    background: #6366f1;
    animation-delay: .4s;
}
@keyframes rainbow-dot {
    0%, 100% {
        transform: scale(.7);
        opacity: .45;
    }
    50% {
        transform: scale(1.3);
        opacity: 1;
    }
}`,
  },
  {
    id: 1212,
    name: "Neon Ring",
    preview: (
      <div className="loader-1212">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 44px;
    height: 44px;
    border: 3px solid rgba(34,211,238,.15);
    border-top-color: #22d3ee;
    border-right-color: #22d3ee;
    border-radius: 50%;
    filter: drop-shadow(0 0 8px #22d3ee);
    animation: neon-spin 0.75s linear infinite;
}
@keyframes neon-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1213,
    name: "Bars Loader",
    preview: (
      <div className="loader-1213">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 5px;
}
.Loader span {
    width: 7px;
    height: 26px;
    border-radius: 5px;
    background: linear-gradient(#8b5cf6,#ec4899);
    animation: bars 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .1s;
}
.Loader span:nth-child(3) {
    animation-delay: .2s;
}
.Loader span:nth-child(4) {
    animation-delay: .3s;
}
@keyframes bars {
    0%, 100% {
        transform: scaleY(.45);
        opacity: .6;
    }
    50% {
        transform: scaleY(1);
        opacity: 1;
    }
}`,
  },
  {
    id: 1214,
    name: "Diamond Loader",
    preview: (
      <div className="loader-1214">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 22px;
    height: 22px;
    background: linear-gradient(135deg,#38bdf8,#8b5cf6);
    transform: rotate(45deg);
    animation: diamond 1s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(139,92,246,.4);
}
@keyframes diamond {
    0%, 100% {
        transform: rotate(45deg) scale(.8);
    }
    50% {
        transform: rotate(225deg) scale(1.1);
    }
}`,
  },
  {
    id: 1215,
    name: "Flip Loader",
    preview: (
      <div className="loader-1215">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    perspective: 100px;
}
.Loader span {
    display: block;
    width: 32px;
    height: 32px;
    margin: 5px;
    background: linear-gradient(135deg,#f97316,#ec4899);
    animation: flip 1s infinite ease-in-out;
}
@keyframes flip {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: rotateX(180deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(180deg) rotateY(180deg);
    }
}`,
  },
  {
    id: 1216,
    name: "Ripple Loader",
    preview: (
      <div className="loader-1216">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
}
.Loader span {
    position: absolute;
    inset: 6px;
    border: 3px solid #6366f1;
    border-radius: 50%;
    animation: ripple 1.5s ease-out infinite;
}
.Loader span:last-child {
    animation-delay: .75s;
}
@keyframes ripple {
    0% {
        transform: scale(.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}`,
  },
  {
    id: 1217,
    name: "Crystal Loader",
    preview: (
      <div className="loader-1217">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
}
.Loader span {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg,rgba(125,211,252,.9),rgba(196,181,253,.35));
    border: 1px solid rgba(255,255,255,.35);
    backdrop-filter: blur(8px);
    border-radius: 4px;
    transform: rotate(45deg);
    animation: crystal 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
@keyframes crystal {
    0%, 100% {
        transform: rotate(45deg) scale(.8);
        opacity: .5;
    }
    50% {
        transform: rotate(45deg) scale(1.15);
        opacity: 1;
    }
}`,
  },
  {
    id: 1218,
    name: "Snake Loader",
    preview: (
      <div className="loader-1218">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 3px solid #27272a;
    border-top-color: #22c55e;
    border-right-color: #22c55e;
    animation: snake 1s linear infinite;
}
@keyframes snake {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1219,
    name: "Meteor Loader",
    preview: (
      <div className="loader-1219">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 52px;
    height: 34px;
    overflow: hidden;
}
.Loader span {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 12px;
    left: -12px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 12px #38bdf8;
    animation: meteor 1.2s linear infinite;
}
.Loader span::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 4px;
    top: 3px;
    right: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg,transparent,#38bdf8);
}
@keyframes meteor {
    to {
        left: 58px;
    }
}`,
  },
  {
    id: 1220,
    name: "Fire Loader",
    preview: (
      <div className="loader-1220">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 34px;
}
.Loader span {
    width: 8px;
    background: linear-gradient(#facc15,#f97316,#ef4444);
    border-radius: 8px 8px 3px 3px;
    animation: fire 0.8s ease-in-out infinite alternate;
}
.Loader span:nth-child(1) {
    height: 18px;
}
.Loader span:nth-child(2) {
    height: 29px;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    height: 21px;
    animation-delay: .3s;
}
@keyframes fire {
    to {
        transform: scaleY(.55);
        filter: brightness(1.4);
    }
}`,
  },
  {
    id: 1221,
    name: "DNA Loader",
    preview: (
      <div className="loader-1221">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 44px;
    height: 44px;
}
.Loader span {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #06b6d4;
    animation: dna 1.2s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    top: 4px;
    left: 7px;
}
.Loader span:nth-child(2) {
    top: 15px;
    left: 25px;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    top: 26px;
    left: 7px;
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    top: 37px;
    left: 25px;
    animation-delay: .45s;
}
@keyframes dna {
    50% {
        transform: translateX(12px);
        background: #8b5cf6;
    }
}`,
  },
  {
    id: 1222,
    name: "Aurora Loader",
    preview: (
      <div className="loader-1222">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 54px;
    height: 30px;
    padding: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg,#06b6d4,#6366f1,#ec4899,#22c55e,#06b6d4);
    background-size: 300% 100%;
    animation: aurora 3s linear infinite;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: #09090b;
}
@keyframes aurora {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 1223,
    name: "Cosmic Loader",
    preview: (
      <div className="loader-1223">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
}
.Loader span {
    position: absolute;
    border-radius: 50%;
}
.Loader span:nth-child(1) {
    inset: 5px;
    border: 2px solid transparent;
    border-top-color: #60a5fa;
    border-left-color: #818cf8;
    animation: cosmic 1.1s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 12px;
    border: 2px solid transparent;
    border-right-color: #ec4899;
    border-bottom-color: #a855f7;
    animation: cosmic 0.8s linear infinite reverse;
}
.Loader span:nth-child(3) {
    width: 7px;
    height: 7px;
    top: 21px;
    left: 21px;
    background: #ffffff;
    box-shadow: 0 0 15px #ffffff;
    animation: cosmic-pulse 1s ease-in-out infinite;
}
@keyframes cosmic {
    to {
        transform: rotate(360deg);
    }
}
@keyframes cosmic-pulse {
    50% {
        transform: scale(1.5);
        opacity: .65;
    }
}`,
  },
  {
    id: 1234,
    name: "Triple Orbit Loader",
    preview: (
      <div className="loader-1234">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
}
.Loader span {
    position: absolute;
    inset: 4px;
    border: 2px solid transparent;
    border-radius: 50%;
}
.Loader span:nth-child(1) {
    border-top-color: #38bdf8;
    animation: orbit 1s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 10px;
    border-right-color: #8b5cf6;
    animation: orbit 1.3s linear infinite reverse;
}
.Loader span:nth-child(3) {
    inset: 16px;
    border-bottom-color: #ec4899;
    animation: orbit 0.7s linear infinite;
}
@keyframes orbit {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1235,
    name: "Liquid Loader",
    preview: (
      <div className="loader-1235">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 44px;
    height: 44px;
    padding: 3px;
    overflow: hidden;
    border-radius: 50%;
    background: #e5e7eb;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(#06b6d4, #3b82f6, #8b5cf6, #06b6d4);
    animation: liquid 1.2s linear infinite;
}
@keyframes liquid {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1236,
    name: "Morphing Square Loader",
    preview: (
      <div className="loader-1236">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #06b6d4, #8b5cf6);
    animation: morph 1.2s ease-in-out infinite;
}
@keyframes morph {
    0%, 100% {
        border-radius: 4px;
        transform: rotate(0deg) scale(.8);
    }
    50% {
        border-radius: 50%;
        transform: rotate(180deg) scale(1.15);
    }
}`,
  },
  {
    id: 1237,
    name: "Climbing Dots Loader",
    preview: (
      <div className="loader-1237">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    height: 36px;
}
.Loader span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #6366f1;
    animation: climb 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .12s;
}
.Loader span:nth-child(3) {
    animation-delay: .24s;
}
.Loader span:nth-child(4) {
    animation-delay: .36s;
}
@keyframes climb {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-22px);
    }
}`,
  },
  {
    id: 1238,
    name: "Helix Loader",
    preview: (
      <div className="loader-1238">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 40px;
}
.Loader span {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ec4899;
    animation: helix 1.2s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    left: 5px;
}
.Loader span:nth-child(2) {
    left: 18px;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    left: 31px;
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    left: 44px;
    animation-delay: .45s;
}
@keyframes helix {
    0%, 100% {
        top: 5px;
        background: #06b6d4;
    }
    50% {
        top: 28px;
        background: #ec4899;
    }
}`,
  },
  {
    id: 1239,
    name: "Expanding Grid Loader",
    preview: (
      <div className="loader-1239">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: grid;
    grid-template-columns: repeat(2, 14px);
    gap: 5px;
}
.Loader span {
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: #7c3aed;
    animation: expand-grid 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .12s;
}
.Loader span:nth-child(3) {
    animation-delay: .24s;
}
.Loader span:nth-child(4) {
    animation-delay: .36s;
}
@keyframes expand-grid {
    0%, 100% {
        transform: scale(.7);
        opacity: .45;
    }
    50% {
        transform: scale(1.15);
        opacity: 1;
    }
}`,
  },
  {
    id: 1240,
    name: "Neon Cube Loader",
    preview: (
      <div className="loader-1240">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    perspective: 100px;
}
.Loader span {
    display: block;
    width: 28px;
    height: 28px;
    margin: 7px;
    border: 2px solid #22d3ee;
    box-shadow: 0 0 10px #22d3ee, inset 0 0 10px rgba(34,211,238,.2);
    animation: cube 1.5s ease-in-out infinite;
}
@keyframes cube {
    0%, 100% {
        transform: rotateX(0) rotateY(0);
    }
    50% {
        transform: rotateX(180deg) rotateY(180deg);
    }
}`,
  },
  {
    id: 1241,
    name: "Rainbow Pulse Loader",
    preview: (
      <div className="loader-1241">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 20px;
    height: 20px;
    padding: 7px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #6366f1, #ec4899);
    background-size: 300% 300%;
    animation: rainbow-pulse 2s linear infinite;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #18181b;
}
@keyframes rainbow-pulse {
    0% {
        transform: scale(.8);
        background-position: 0% 50%;
    }
    50% {
        transform: scale(1.15);
        background-position: 100% 50%;
    }
    100% {
        transform: scale(.8);
        background-position: 0% 50%;
    }
}`,
  },
  {
    id: 1242,
    name: "Rotating Bars Loader",
    preview: (
      <div className="loader-1242">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 44px;
    height: 44px;
}
.Loader span {
    position: absolute;
    width: 5px;
    height: 18px;
    top: 13px;
    left: 20px;
    border-radius: 999px;
    background: #2563eb;
    transform-origin: 2px 9px;
    animation: rotating-bars 1s linear infinite;
}
.Loader span:nth-child(1) {
    transform: rotate(0deg) translateY(-10px);
}
.Loader span:nth-child(2) {
    transform: rotate(90deg) translateY(-10px);
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    transform: rotate(180deg) translateY(-10px);
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    transform: rotate(270deg) translateY(-10px);
    animation-delay: .45s;
}
@keyframes rotating-bars {
    50% {
        opacity: .25;
    }
}`,
  },
  {
    id: 1243,
    name: "Wave Circle Loader",
    preview: (
      <div className="loader-1243">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
}
.Loader span {
    position: absolute;
    inset: 4px;
    border: 2px solid transparent;
    border-radius: 50%;
    animation: circle-wave 1.5s ease-out infinite;
}
.Loader span:nth-child(1) {
    border-color: #38bdf8;
}
.Loader span:nth-child(2) {
    border-color: #8b5cf6;
    animation-delay: .5s;
}
.Loader span:nth-child(3) {
    border-color: #ec4899;
    animation-delay: 1s;
}
@keyframes circle-wave {
    0% {
        transform: scale(.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}`,
  },
  {
    id: 1244,
    name: "Typing Loader",
    preview: (
      <div className="loader-1244">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 4px;
    align-items: center;
}
.Loader span {
    width: 7px;
    height: 7px;
    background: #71717a;
    border-radius: 50%;
    animation: typing 1.4s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .18s;
}
.Loader span:nth-child(3) {
    animation-delay: .36s;
}
@keyframes typing {
    0%, 60%, 100% {
        transform: translateY(0);
        opacity: .4;
    }
    30% {
        transform: translateY(-7px);
        opacity: 1;
    }
}`,
  },
  {
    id: 1245,
    name: "DNA Ring Loader",
    preview: (
      <div className="loader-1245">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 45px;
    height: 45px;
}
.Loader span {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid transparent;
}
.Loader span:first-child {
    border-left-color: #06b6d4;
    border-right-color: #06b6d4;
    animation: dna-ring 1s linear infinite;
}
.Loader span:last-child {
    inset: 7px;
    width: 31px;
    height: 31px;
    border-top-color: #8b5cf6;
    border-bottom-color: #8b5cf6;
    animation: dna-ring 1.2s linear infinite reverse;
}
@keyframes dna-ring {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1246,
    name: "Blur Loader",
    preview: (
      <div className="loader-1246">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #8b5cf6;
    filter: blur(2px);
    box-shadow: 0 0 20px #8b5cf6;
    animation: blur-loader 1.2s ease-in-out infinite;
}
@keyframes blur-loader {
    0%, 100% {
        transform: scale(.7);
        opacity: .5;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}`,
  },
  {
    id: 1247,
    name: "Loading Scanner",
    preview: (
      <div className="loader-1247">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 55px;
    height: 22px;
    overflow: hidden;
    border: 1px solid #27272a;
    border-radius: 5px;
    background: #09090b;
}
.Loader span {
    position: absolute;
    top: 0;
    left: -10px;
    width: 10px;
    height: 100%;
    background: linear-gradient(90deg, transparent, #22d3ee, transparent);
    box-shadow: 0 0 15px #22d3ee;
    animation: scanner 1.1s linear infinite;
}
@keyframes scanner {
    to {
        left: 55px;
    }
}`,
  },
  {
    id: 1248,
    name: "Equalizer Loader",
    preview: (
      <div className="loader-1248">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 32px;
}
.Loader span {
    width: 5px;
    height: 18px;
    background: #22c55e;
    border-radius: 4px;
    animation: equalizer 1s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    animation-delay: .05s;
}
.Loader span:nth-child(2) {
    animation-delay: .2s;
}
.Loader span:nth-child(3) {
    animation-delay: .35s;
}
.Loader span:nth-child(4) {
    animation-delay: .5s;
}
.Loader span:nth-child(5) {
    animation-delay: .65s;
}
@keyframes equalizer {
    0%, 100% {
        transform: scaleY(.35);
    }
    50% {
        transform: scaleY(1.3);
    }
}`,
  },
  {
    id: 1249,
    name: "Prism Loader",
    preview: (
      <div className="loader-1249">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg,#38bdf8,#6366f1,#ec4899);
    clip-path: polygon(50% 0%,100% 25%,82% 100%,18% 100%,0% 25%);
    animation: prism 1.4s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(99,102,241,.5));
}
@keyframes prism {
    0%, 100% {
        transform: rotateY(0deg) scale(.8);
    }
    50% {
        transform: rotateY(180deg) scale(1.1);
    }
}`,
  },
  {
    id: 1250,
    name: "Magnetic Loader",
    preview: (
      <div className="loader-1250">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
}
.Loader span {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f97316;
    animation: magnetic 1.3s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    top: 5px;
    left: 19px;
}
.Loader span:nth-child(2) {
    bottom: 5px;
    left: 5px;
    animation-delay: .2s;
}
.Loader span:nth-child(3) {
    bottom: 5px;
    right: 5px;
    animation-delay: .4s;
}
@keyframes magnetic {
    50% {
        transform: translate(0, 10px) scale(1.25);
        box-shadow: 0 0 15px #f97316;
    }
}`,
  },
  {
    id: 1251,
    name: "Solar System Loader",
    preview: (
      <div className="loader-1251">
        <span className="loader-1251-sun"></span>
        <span className="loader-1251-orbit"></span>
        <span className="loader-1251-planet"></span>
      </div>
    ),
    html: `<div class="Loader">
    <span class="Loader-sun"></span>
    <span class="Loader-orbit"></span>
    <span class="Loader-planet"></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
}
.Loader-sun {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 21px;
    left: 21px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 15px #facc15;
}
.Loader-orbit {
    position: absolute;
    inset: 5px;
    border: 1px solid rgba(59,130,246,.35);
    border-radius: 50%;
    animation: solar-orbit 1.4s linear infinite;
}
.Loader-planet {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 3px;
    left: 23px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 10px #38bdf8;
    transform-origin: 4px 24px;
    animation: solar-orbit 1.4s linear infinite;
}
@keyframes solar-orbit {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1252,
    name: "Pixel Loader",
    preview: (
      <div className="loader-1252">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: grid;
    grid-template-columns: repeat(2, 8px);
    gap: 3px;
}
.Loader span {
    width: 8px;
    height: 8px;
    background: #22d3ee;
    animation: pixel 1s steps(2, end) infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    animation-delay: .45s;
}
@keyframes pixel {
    0%, 100% {
        opacity: .25;
        transform: scale(.7);
    }
    50% {
        opacity: 1;
        transform: scale(1);
    }
}`,
  },
  {
    id: 1253,
    name: "Rainbow Infinity Loader",
    preview: (
      <div className="loader-1253">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 55px;
    height: 30px;
}
.Loader span {
    position: absolute;
    width: 30px;
    height: 18px;
    border: 3px solid transparent;
    border-radius: 50%;
    background:
        linear-gradient(#18181b,#18181b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%,300% 100%;
    animation: infinity 2s linear infinite;
}
.Loader span:first-child {
    left: 0;
    top: 4px;
    transform: rotate(25deg);
}
.Loader span:last-child {
    right: 0;
    top: 4px;
    transform: rotate(-25deg);
    animation-delay: -.15s;
}
@keyframes infinity {
    to {
        background-position: 0 0,300% 0;
    }
}`,
  },
  {
    id: 1254,
    name: "Cosmic Portal Loader",
    preview: (
      <div className="loader-1254">
        <span></span>
        <span></span>
        <span></span>
        <i className="fa-solid fa-star"></i>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <i class="fa-solid fa-star"></i>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
}
.Loader span {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
}
.Loader span:nth-child(1) {
    inset: 2px;
    border-top-color: #38bdf8;
    border-left-color: #6366f1;
    animation: portal 1s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 9px;
    border-right-color: #ec4899;
    border-bottom-color: #a855f7;
    animation: portal 1.3s linear infinite reverse;
}
.Loader span:nth-child(3) {
    inset: 16px;
    border-top-color: #22d3ee;
    animation: portal 0.7s linear infinite;
}
.Loader i {
    position: relative;
    z-index: 2;
    color: #ffffff;
    font-size: 10px;
    text-shadow: 0 0 10px #ffffff;
    animation: star 1s ease-in-out infinite;
}
@keyframes portal {
    to {
        transform: rotate(360deg);
    }
}
@keyframes star {
    50% {
        transform: scale(1.6);
        opacity: .5;
    }
}`,
  },
  {
    id: 1255,
    name: "Meteor Ring Loader",
    preview: (
      <div className="loader-1255">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: #38bdf8;
    border-right-color: #8b5cf6;
    border-radius: 50%;
    animation: meteor-ring 1s linear infinite;
}
.Loader span {
    display: block;
}
@keyframes meteor-ring {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1256,
    name: "Pulse Orbit Loader",
    preview: (
      <div className="loader-1256">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
}
.Loader span:first-child {
    position: absolute;
    inset: 7px;
    border: 2px solid #6366f1;
    border-radius: 50%;
    animation: pulse-orbit 1.4s ease-in-out infinite;
}
.Loader span:last-child {
    position: absolute;
    width: 9px;
    height: 9px;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #ec4899;
    box-shadow: 0 0 12px #ec4899;
    animation: pulse-orbit-dot 1.4s linear infinite;
}
@keyframes pulse-orbit {
    50% {
        transform: scale(1.08);
        opacity: .45;
    }
}
@keyframes pulse-orbit-dot {
    to {
        transform: translateX(-50%) rotate(360deg);
    }
}`,
  },
  {
    id: 1257,
    name: "Liquid Wave Loader",
    preview: (
      <div className="loader-1257">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 34px;
}
.Loader span {
    width: 8px;
    height: 16px;
    border-radius: 999px;
    background: linear-gradient(#67e8f9, #2563eb);
    animation: liquid-wave 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
@keyframes liquid-wave {
    0%,
    100% {
        height: 12px;
    }
    50% {
        height: 30px;
    }
}`,
  },
  {
    id: 1258,
    name: "Rainbow Spinner",
    preview: (
      <div className="loader-1258">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    padding: 4px;
    border-radius: 50%;
    background: conic-gradient(
        #ef4444,
        #f97316,
        #eab308,
        #22c55e,
        #06b6d4,
        #6366f1,
        #ec4899,
        #ef4444
    );
    animation: rainbow-spin 1.1s linear infinite;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #09090b;
}
@keyframes rainbow-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1259,
    name: "Glowing Dots Loader",
    preview: (
      <div className="loader-1259">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 6px;
    align-items: center;
}
.Loader span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 12px #38bdf8;
    animation: glowing-dots 1.1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .12s;
}
.Loader span:nth-child(3) {
    animation-delay: .24s;
}
.Loader span:nth-child(4) {
    animation-delay: .36s;
}
@keyframes glowing-dots {
    0%,
    100% {
        transform: scale(.65);
        opacity: .4;
    }
    50% {
        transform: scale(1.25);
        opacity: 1;
    }
}`,
  },
  {
    id: 1260,
    name: "Portal Loader",
    preview: (
      <div className="loader-1260">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 52px;
    height: 52px;
}
.Loader span {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
}
.Loader span:nth-child(1) {
    inset: 2px;
    border-top-color: #06b6d4;
    border-left-color: #3b82f6;
    animation: portal-spin 1s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 9px;
    border-right-color: #8b5cf6;
    border-bottom-color: #ec4899;
    animation: portal-spin 1.2s linear infinite reverse;
}
.Loader span:nth-child(3) {
    inset: 17px;
    border-top-color: #ffffff;
    animation: portal-spin 0.7s linear infinite;
}
@keyframes portal-spin {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1261,
    name: "Matrix Rain Loader",
    preview: (
      <div className="loader-1261">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 38px;
}
.Loader span {
    width: 5px;
    height: 16px;
    background: #22c55e;
    box-shadow: 0 0 8px rgba(34, 197, 94, .7);
    animation: matrix-rain 1s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    animation-delay: .05s;
}
.Loader span:nth-child(2) {
    animation-delay: .17s;
}
.Loader span:nth-child(3) {
    animation-delay: .29s;
}
.Loader span:nth-child(4) {
    animation-delay: .41s;
}
.Loader span:nth-child(5) {
    animation-delay: .53s;
}
@keyframes matrix-rain {
    0%,
    100% {
        height: 8px;
        opacity: .35;
    }
    50% {
        height: 34px;
        opacity: 1;
    }
}`,
  },
  {
    id: 1262,
    name: "Crystal Burst Loader",
    preview: (
      <div className="loader-1262">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
}
.Loader span {
    position: absolute;
    width: 9px;
    height: 9px;
    top: 20px;
    left: 20px;
    border-radius: 3px;
    background: #a5f3fc;
    box-shadow: 0 0 10px #67e8f9;
    animation: crystal-burst 1.3s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    animation-delay: 0s;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
    background: #818cf8;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
    background: #c084fc;
}
.Loader span:nth-child(4) {
    animation-delay: .45s;
    background: #f9a8d4;
}
@keyframes crystal-burst {
    0%,
    100% {
        transform: rotate(45deg) translateY(0) scale(.65);
        opacity: .4;
    }
    50% {
        transform: rotate(45deg) translateY(-15px) scale(1);
        opacity: 1;
    }
}`,
  },
  {
    id: 1263,
    name: "Helix Dots Loader",
    preview: (
      <div className="loader-1263">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 55px;
    height: 38px;
}
.Loader span {
    position: absolute;
    width: 7px;
    height: 7px;
    top: 15px;
    border-radius: 50%;
    background: #6366f1;
    animation: helix-dots 1.2s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    left: 0;
}
.Loader span:nth-child(2) {
    left: 12px;
    animation-delay: .1s;
}
.Loader span:nth-child(3) {
    left: 24px;
    animation-delay: .2s;
}
.Loader span:nth-child(4) {
    left: 36px;
    animation-delay: .3s;
}
.Loader span:nth-child(5) {
    left: 48px;
    animation-delay: .4s;
}
@keyframes helix-dots {
    0%,
    100% {
        transform: translateY(-10px);
        background: #38bdf8;
    }
    50% {
        transform: translateY(10px);
        background: #ec4899;
    }
}`,
  },
  {
    id: 1264,
    name: "Fire Ring Loader",
    preview: (
      <div className="loader-1264">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(
        #7f1d1d,
        #ef4444,
        #f97316,
        #facc15,
        #f97316,
        #ef4444,
        #7f1d1d
    );
    animation: fire-ring 1s linear infinite;
}
.Loader span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #18181b;
}
@keyframes fire-ring {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1265,
    name: "Glitch Loader",
    preview: (
      <div className="loader-1265">
        <span>LOADING</span>
      </div>
    ),
    html: `<div class="Loader">
    <span>LOADING</span>
</div>`,
    css: `.Loader {
    position: relative;
    overflow: hidden;
    width: 82px;
    height: 24px;
    display: grid;
    place-items: center;
    background: #09090b;
    border: 1px solid #27272a;
    font-family: monospace;
}
.Loader span {
    color: #22d3ee;
    font-size: 9px;
    letter-spacing: 2px;
    animation: glitch-loader .9s infinite;
}
@keyframes glitch-loader {
    0%,
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    20% {
        transform: translateX(-2px);
        text-shadow: 3px 0 #ec4899;
    }
    40% {
        transform: translateX(2px);
        text-shadow: -3px 0 #6366f1;
    }
    60% {
        transform: translateX(0);
    }
}`,
  },
  {
    id: 1266,
    name: "Magnetic Orbit Loader",
    preview: (
      <div className="loader-1266">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
}
.Loader span:first-child {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 2px dashed #8b5cf6;
    animation: magnetic-orbit 2s linear infinite;
}
.Loader span:last-child {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 1px;
    left: 20px;
    border-radius: 50%;
    background: #ec4899;
    box-shadow: 0 0 15px #ec4899;
    animation: magnetic-dot 2s linear infinite;
}
@keyframes magnetic-orbit {
    to {
        transform: rotate(360deg);
    }
}
@keyframes magnetic-dot {
    to {
        transform: rotate(360deg) translateY(0);
    }
}`,
  },
  {
    id: 1267,
    name: "Glass Cube Loader",
    preview: (
      <div className="loader-1267">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    perspective: 120px;
}
.Loader span {
    display: block;
    width: 28px;
    height: 28px;
    margin: 7px;
    border: 1px solid rgba(255, 255, 255, .7);
    border-radius: 6px;
    background: linear-gradient(
        135deg,
        rgba(56, 189, 248, .35),
        rgba(168, 85, 247, .15)
    );
    backdrop-filter: blur(8px);
    box-shadow: 0 0 18px rgba(56, 189, 248, .25);
    animation: glass-cube 1.4s ease-in-out infinite;
}
@keyframes glass-cube {
    0%,
    100% {
        transform: rotateX(0) rotateY(0) scale(.8);
    }
    50% {
        transform: rotateX(180deg) rotateY(180deg) scale(1);
    }
}`,
  },
  {
    id: 1268,
    name: "Gradient Wave Loader",
    preview: (
      <div className="loader-1268">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 35px;
}
.Loader span {
    width: 6px;
    height: 14px;
    border-radius: 999px;
    background: linear-gradient(#ec4899, #6366f1, #38bdf8);
    animation: gradient-wave 1s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    animation-delay: .05s;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .25s;
}
.Loader span:nth-child(4) {
    animation-delay: .35s;
}
.Loader span:nth-child(5) {
    animation-delay: .45s;
}
@keyframes gradient-wave {
    0%,
    100% {
        height: 10px;
        opacity: .5;
    }
    50% {
        height: 32px;
        opacity: 1;
    }
}`,
  },
  {
    id: 1269,
    name: "Rotating Diamond Loader",
    preview: (
      <div className="loader-1269">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
}
.Loader span {
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-top-color: #06b6d4;
    border-right-color: #8b5cf6;
    transform: rotate(45deg);
    box-shadow: 0 0 14px rgba(99, 102, 241, .35);
    animation: rotating-diamond 1s linear infinite;
}
@keyframes rotating-diamond {
    to {
        transform: rotate(405deg);
    }
}`,
  },
  {
    id: 1270,
    name: "Solar Flare Loader",
    preview: (
      <div className="loader-1270">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
}
.Loader span {
    position: absolute;
    border-radius: 50%;
}
.Loader span:nth-child(1) {
    width: 15px;
    height: 15px;
    top: 18px;
    left: 18px;
    background: #facc15;
    box-shadow: 0 0 20px #facc15;
    animation: solar-pulse 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    inset: 5px;
    border: 1px solid rgba(250, 204, 21, .4);
    animation: solar-orbit 1.4s linear infinite;
}
.Loader span:nth-child(3) {
    inset: 10px;
    border: 1px solid rgba(249, 115, 22, .35);
    animation: solar-orbit 1s linear infinite reverse;
}
@keyframes solar-pulse {
    50% {
        transform: scale(1.35);
    }
}
@keyframes solar-orbit {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1271,
    name: "Typing Bar Loader",
    preview: (
      <div className="loader-1271">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 58px;
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #27272a;
}
.Loader span {
    display: block;
    width: 22px;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    animation: typing-bar 1.2s ease-in-out infinite;
}
@keyframes typing-bar {
    0% {
        transform: translateX(-22px);
    }
    50% {
        transform: translateX(28px);
    }
    100% {
        transform: translateX(58px);
    }
}`,
  },
  {
    id: 1272,
    name: "Rainbow Orbit Loader",
    preview: (
      <div className="loader-1272">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 50%;
}
.Loader span {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.Loader span:nth-child(1) {
    top: 1px;
    left: 22px;
    background: #ef4444;
    box-shadow: 0 0 10px #ef4444;
    animation: rainbow-orbit 1.5s linear infinite;
}
.Loader span:nth-child(2) {
    bottom: 5px;
    left: 8px;
    background: #22c55e;
    box-shadow: 0 0 10px #22c55e;
    animation: rainbow-orbit 1.5s linear infinite;
}
.Loader span:nth-child(3) {
    bottom: 5px;
    right: 8px;
    background: #6366f1;
    box-shadow: 0 0 10px #6366f1;
    animation: rainbow-orbit 1.5s linear infinite;
}
@keyframes rainbow-orbit {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1273,
    name: "Breathing Ring Loader",
    preview: (
      <div className="loader-1273">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
}
.Loader span:first-child {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 22px rgba(56, 189, 248, .7);
    animation: breathing-core 1.6s ease-in-out infinite;
}
.Loader span:last-child {
    position: absolute;
    inset: 4px;
    border: 2px solid rgba(56, 189, 248, .5);
    border-radius: 50%;
    animation: breathing-ring 1.6s ease-in-out infinite;
}
@keyframes breathing-core {
    50% {
        transform: scale(1.35);
        opacity: .7;
    }
}
@keyframes breathing-ring {
    50% {
        transform: scale(1.15);
        opacity: .25;
    }
}`,
  },
  {
    id: 1274,
    name: "Final Cosmic Loader",
    preview: (
      <div className="loader-1274">
        <span></span>
        <span></span>
        <span></span>
        <i className="fa-solid fa-star"></i>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <i class="fa-solid fa-star"></i>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
}
.Loader span {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
}
.Loader span:nth-child(1) {
    inset: 1px;
    border-top-color: #38bdf8;
    border-left-color: #6366f1;
    animation: cosmic-ring 1s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 8px;
    border-right-color: #ec4899;
    border-bottom-color: #a855f7;
    animation: cosmic-ring 1.2s linear infinite reverse;
}
.Loader span:nth-child(3) {
    inset: 15px;
    border-top-color: #22d3ee;
    animation: cosmic-ring 0.8s linear infinite;
}
.Loader i {
    position: relative;
    z-index: 2;
    color: #ffffff;
    font-size: 10px;
    text-shadow: 0 0 12px #ffffff;
    animation: cosmic-star 1.1s ease-in-out infinite;
}
@keyframes cosmic-ring {
    to {
        transform: rotate(360deg);
    }
}
@keyframes cosmic-star {
    50% {
        transform: scale(1.7);
        opacity: .45;
    }
}`,
  },
  {
    id: 1784,
    name: "Neon Orbit Loader",
    preview: (
      <div className="loader-1784">
        <span></span>
        <span></span>
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
}
.Loader span {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #3b82f6;
    border-radius: 50%;
    animation: orbit-1784 1.2s linear infinite;
}
.Loader span:nth-child(2) {
    inset: 8px;
    border-top-color: #ec4899;
    border-right-color: #8b5cf6;
    animation-duration: .8s;
    animation-direction: reverse;
}
.Loader div {
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    background: #22d3ee;
    box-shadow: 0 0 14px #22d3ee;
}
@keyframes orbit-1784 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1785,
    name: "Rainbow Spinner",
    preview: <div className="loader-1785"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 48px;
    height: 48px;
    border: 5px solid transparent;
    border-top-color: #ef4444;
    border-right-color: #f97316;
    border-bottom-color: #22c55e;
    border-left-color: #8b5cf6;
    border-radius: 50%;
    animation: spin-1785 1s linear infinite;
}
@keyframes spin-1785 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1786,
    name: "Ice Crystal Loader",
    preview: (
      <div className="loader-1786">
        <div></div>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div></div>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
}
.Loader div {
    width: 28px;
    height: 28px;
    border: 2px solid #67e8f9;
    transform: rotate(45deg);
    box-shadow: 0 0 14px #22d3ee,inset 0 0 10px rgba(34,211,238,.18);
    animation: crystal-1786 1.5s ease-in-out infinite;
}
.Loader span {
    position: absolute;
    width: 46px;
    height: 46px;
    border: 1px dashed rgba(186,230,253,.65);
    border-radius: 50%;
    animation: spin-1786 4s linear infinite;
}
@keyframes crystal-1786 {
    50% {
        transform: rotate(225deg) scale(1.18);
    }
}
@keyframes spin-1786 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1787,
    name: "Fire Ring Loader",
    preview: (
      <div className="loader-1787">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 52px;
    height: 52px;
    padding: 4px;
    border-radius: 50%;
    background: conic-gradient(#facc15,#fb923c,#ef4444,#f97316,#facc15);
    animation: fire-1787 1s linear infinite;
}
.Loader span {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    background: #120704;
}
@keyframes fire-1787 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1788,
    name: "Aurora Loader",
    preview: (
      <div className="loader-1788">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 45px;
}
.Loader span {
    width: 5px;
    height: 20px;
    border-radius: 999px;
    background: linear-gradient(180deg,#22d3ee,#8b5cf6,#ec4899);
    box-shadow: 0 0 10px rgba(139,92,246,.5);
    animation: aurora-1788 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
@keyframes aurora-1788 {
    50% {
        height: 42px;
        filter: brightness(1.4);
    }
}`,
  },
  {
    id: 1789,
    name: "Pulse Core Loader",
    preview: <div className="loader-1789"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #22d3ee;
    box-shadow: 0 0 10px #22d3ee,0 0 25px rgba(34,211,238,.55);
    animation: pulse-1789 1s ease-in-out infinite;
}
@keyframes pulse-1789 {
    50% {
        transform: scale(1.7);
        opacity: .35;
    }
}`,
  },
  {
    id: 1790,
    name: "Plasma Loader",
    preview: (
      <div className="loader-1790">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: conic-gradient(#22d3ee,#6366f1,#ec4899,#f97316,#22d3ee);
    animation: plasma-1790 2s linear infinite;
}
.Loader span {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background: #050505;
}
@keyframes plasma-1790 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1791,
    name: "Matrix Loader",
    preview: (
      <div className="loader-1791">
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
      </div>
    ),
    html: `<div class="Loader">
    <span>0</span>
    <span>1</span>
    <span>0</span>
    <span>1</span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 4px;
    color: #4ade80;
    font-family: monospace;
    font-weight: 900;
    font-size: 14px;
}
.Loader span {
    animation: matrix-1791 1.1s infinite;
    text-shadow: 0 0 8px #22c55e;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    animation-delay: .45s;
}
@keyframes matrix-1791 {
    50% {
        opacity: .15;
        transform: translateY(8px);
    }
}`,
  },
  {
    id: 1792,
    name: "Double Ring Loader",
    preview: (
      <div className="loader-1792">
        <span></span>
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
}
.Loader span,
.Loader div {
    position: absolute;
    inset: 0;
    border-radius: 50%;
}
.Loader span {
    border: 3px solid #3b82f6;
    border-left-color: transparent;
    animation: ring-1792 1s linear infinite;
}
.Loader div {
    inset: 8px;
    border: 3px solid #ec4899;
    border-right-color: transparent;
    animation: ring-1792 1.2s linear reverse infinite;
}
@keyframes ring-1792 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1793,
    name: "Glowing Dots Loader",
    preview: (
      <div className="loader-1793">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 7px;
}
.Loader span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #a855f7;
    box-shadow: 0 0 10px #a855f7;
    animation: dots-1793 1s infinite;
}
.Loader span:nth-child(2) {
    background: #ec4899;
    box-shadow: 0 0 10px #ec4899;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    background: #f97316;
    box-shadow: 0 0 10px #f97316;
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    background: #22d3ee;
    box-shadow: 0 0 10px #22d3ee;
    animation-delay: .45s;
}
@keyframes dots-1793 {
    50% {
        transform: translateY(-9px);
    }
}`,
  },
  {
    id: 1794,
    name: "Wave Loader",
    preview: (
      <div className="loader-1794">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
}
.Loader span {
    width: 5px;
    height: 16px;
    border-radius: 999px;
    background: linear-gradient(180deg,#22d3ee,#6366f1,#ec4899);
    animation: wave-1794 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .1s;
}
.Loader span:nth-child(3) {
    animation-delay: .2s;
}
.Loader span:nth-child(4) {
    animation-delay: .3s;
}
.Loader span:nth-child(5) {
    animation-delay: .4s;
}
@keyframes wave-1794 {
    50% {
        height: 34px;
        box-shadow: 0 0 10px rgba(99,102,241,.5);
    }
}`,
  },
  {
    id: 1795,
    name: "Hologram Loader",
    preview: (
      <div className="loader-1795">
        <div></div>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div></div>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
}
.Loader div {
    width: 26px;
    height: 26px;
    border: 2px solid #67e8f9;
    border-radius: 50%;
    box-shadow: 0 0 16px rgba(34,211,238,.6);
    animation: hologram-1795 1.3s ease-in-out infinite;
}
.Loader span {
    position: absolute;
    inset: 0;
    border: 1px dashed rgba(168,85,247,.7);
    border-radius: 50%;
    animation: spin-1795 3s linear infinite;
}
@keyframes hologram-1795 {
    50% {
        transform: scale(.65);
        opacity: .45;
    }
}
@keyframes spin-1795 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1796,
    name: "Rainbow Bars Loader",
    preview: (
      <div className="loader-1796">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 3px;
}
.Loader span {
    width: 7px;
    height: 32px;
    border-radius: 999px;
    animation: bars-1796 1s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    background: #ef4444;
}
.Loader span:nth-child(2) {
    background: #facc15;
    animation-delay: .12s;
}
.Loader span:nth-child(3) {
    background: #22c55e;
    animation-delay: .24s;
}
.Loader span:nth-child(4) {
    background: #6366f1;
    animation-delay: .36s;
}
@keyframes bars-1796 {
    50% {
        transform: scaleY(.3);
        opacity: .55;
    }
}`,
  },
  {
    id: 1797,
    name: "Energy Square Loader",
    preview: <div className="loader-1797"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    border: 3px solid #2563eb;
    transform: rotate(45deg);
    box-shadow: 0 0 14px rgba(37,99,235,.45);
    animation: square-1797 1.2s ease-in-out infinite;
}
@keyframes square-1797 {
    50% {
        transform: rotate(225deg) scale(.7);
        border-color: #ec4899;
        box-shadow: 0 0 18px rgba(236,72,153,.45);
    }
}`,
  },
  {
    id: 1798,
    name: "Fire Dots Loader",
    preview: (
      <div className="loader-1798">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    gap: 7px;
}
.Loader span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 10px #f97316,0 0 20px rgba(239,68,68,.3);
    animation: fire-dot-1798 1s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    animation-delay: .3s;
}
@keyframes fire-dot-1798 {
    50% {
        transform: translateY(-12px) scale(1.15);
        background: #ef4444;
    }
}`,
  },
  {
    id: 1799,
    name: "Ice Pulse Loader",
    preview: <div className="loader-1799"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #7dd3fc;
    box-shadow: inset 0 0 12px rgba(34,211,238,.2),0 0 16px rgba(56,189,248,.25);
    animation: ice-pulse-1799 1.2s ease-in-out infinite;
}
@keyframes ice-pulse-1799 {
    50% {
        transform: scale(1.18);
        border-color: #e0f2fe;
        box-shadow: 0 0 28px rgba(125,211,252,.45);
    }
}`,
  },
  {
    id: 1800,
    name: "Spinner With Core",
    preview: (
      <div className="loader-1800">
        <span></span>
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
}
.Loader span {
    position: absolute;
    inset: 0;
    border: 4px solid transparent;
    border-top-color: #8b5cf6;
    border-right-color: #ec4899;
    border-radius: 50%;
    animation: core-spin-1800 1s linear infinite;
}
.Loader div {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #f0abfc;
    box-shadow: 0 0 15px #ec4899;
}
@keyframes core-spin-1800 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1801,
    name: "Neon Equalizer Loader",
    preview: (
      <div className="loader-1801">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 35px;
}
.Loader span {
    width: 4px;
    height: 12px;
    border-radius: 999px;
    background: #22d3ee;
    box-shadow: 0 0 8px #22d3ee;
    animation: equalizer-1801 .9s ease-in-out infinite alternate;
}
.Loader span:nth-child(2) {
    animation-delay: .12s;
}
.Loader span:nth-child(3) {
    animation-delay: .24s;
    background: #8b5cf6;
    box-shadow: 0 0 8px #8b5cf6;
}
.Loader span:nth-child(4) {
    animation-delay: .36s;
    background: #ec4899;
    box-shadow: 0 0 8px #ec4899;
}
.Loader span:nth-child(5) {
    animation-delay: .48s;
    background: #f97316;
    box-shadow: 0 0 8px #f97316;
}
@keyframes equalizer-1801 {
    to {
        height: 32px;
    }
}`,
  },
  {
    id: 1802,
    name: "Crystal Ring Loader",
    preview: <div className="loader-1802"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 4px double transparent;
    background:
        linear-gradient(#050505,#050505) padding-box,
        linear-gradient(135deg,#67e8f9,#a855f7,#ec4899) border-box;
    animation: crystal-ring-1802 1.6s linear infinite;
}
@keyframes crystal-ring-1802 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1803,
    name: "Rotating Diamonds Loader",
    preview: (
      <div className="loader-1803">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 48px;
    height: 48px;
}
.Loader span {
    position: absolute;
    width: 17px;
    height: 17px;
    border: 2px solid #22d3ee;
    transform: rotate(45deg);
    animation: diamond-1803 1.2s ease-in-out infinite;
}
.Loader span:nth-child(1) {
    left: 0;
    top: 15px;
}
.Loader span:nth-child(2) {
    left: 15px;
    top: 0;
    border-color: #8b5cf6;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    right: 0;
    top: 15px;
    border-color: #ec4899;
    animation-delay: .3s;
}
@keyframes diamond-1803 {
    50% {
        transform: rotate(225deg) scale(1.3);
    }
}`,
  },
  {
    id: 1804,
    name: "Solar Loader",
    preview: (
      <div className="loader-1804">
        <span></span>
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
}
.Loader span {
    position: absolute;
    inset: 12px;
    border: 2px solid #facc15;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(250,204,21,.35);
}
.Loader div {
    position: absolute;
    width: 9px;
    height: 9px;
    left: 24px;
    top: 2px;
    border-radius: 50%;
    background: #fb923c;
    box-shadow: 0 0 10px #fb923c;
    transform-origin: 5px 27px;
    animation: solar-1804 1.4s linear infinite;
}
@keyframes solar-1804 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1805,
    name: "Cyber Scanner Loader",
    preview: (
      <div className="loader-1805">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 64px;
    height: 38px;
    overflow: hidden;
    border: 1px solid #164e63;
    background: #020617;
}
.Loader::before,
.Loader::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
}
.Loader::before {
    top: 7px;
    height: 1px;
    background: rgba(34,211,238,.15);
    box-shadow: 0 8px rgba(34,211,238,.15),0 16px rgba(34,211,238,.15),0 24px rgba(34,211,238,.15);
}
.Loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: #22d3ee;
    box-shadow: 0 0 12px #22d3ee;
    animation: scanner-1805 1.4s linear infinite;
}
@keyframes scanner-1805 {
    to {
        left: 100%;
    }
}`,
  },
  {
    id: 1806,
    name: "Morph Blob Loader",
    preview: <div className="loader-1806"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 40px;
    height: 40px;
    border-radius: 45% 55% 60% 40%;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899);
    box-shadow: 0 0 22px rgba(139,92,246,.35);
    animation: morph-1806 1.5s ease-in-out infinite;
}
@keyframes morph-1806 {
    50% {
        border-radius: 60% 40% 35% 65%;
        transform: rotate(90deg) scale(1.12);
    }
}`,
  },
  {
    id: 1807,
    name: "Rainbow Pulse Ring",
    preview: <div className="loader-1807"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 3px solid transparent;
    background:
        linear-gradient(#050505,#050505) padding-box,
        conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444) border-box;
    animation: rainbow-pulse-1807 1.5s ease-in-out infinite;
}
@keyframes rainbow-pulse-1807 {
    50% {
        transform: scale(1.15);
        box-shadow: 0 0 24px rgba(168,85,247,.25);
    }
}`,
  },
  {
    id: 1808,
    name: "Lightning Loader",
    preview: (
      <div className="loader-1808">
        <i className="fa-solid fa-bolt"></i>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-bolt"></i>
</div>`,
    css: `.Loader {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #171205;
    color: #fde047;
    box-shadow: 0 0 10px #facc15,0 0 28px rgba(250,204,21,.3);
    animation: lightning-1808 .7s ease-in-out infinite;
}
.Loader i {
    font-size: 19px;
    text-shadow: 0 0 12px #facc15;
}
@keyframes lightning-1808 {
    50% {
        transform: scale(1.12);
        filter: brightness(1.3);
    }
}`,
  },
  {
    id: 1809,
    name: "Dark Ice Loader",
    preview: (
      <div className="loader-1809">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
}
.Loader::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid #0ea5e9;
    box-shadow: 0 0 15px rgba(14,165,233,.2);
    animation: dark-ice-1809 1.8s linear infinite;
}
.Loader span {
    width: 22px;
    height: 22px;
    transform: rotate(45deg);
    border: 2px solid #bae6fd;
    box-shadow: 0 0 12px rgba(125,211,252,.3);
    animation: ice-core-1809 1s ease-in-out infinite;
}
@keyframes dark-ice-1809 {
    to {
        transform: rotate(360deg);
    }
}
@keyframes ice-core-1809 {
    50% {
        transform: rotate(225deg) scale(1.15);
    }
}`,
  },
  {
    id: 1810,
    name: "Gradient Hourglass Loader",
    preview: (
      <div className="loader-1810">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 42px;
    height: 54px;
    padding: 3px;
    background: linear-gradient(135deg,#22d3ee,#8b5cf6,#ec4899);
    clip-path: polygon(0 0,100% 0,100% 35%,65% 50%,100% 65%,100% 100%,0 100%,0 65%,35% 50%,0 35%);
    animation: hourglass-1810 1.4s ease-in-out infinite;
}
.Loader span {
    width: 100%;
    height: 100%;
    display: block;
    background: #09090b;
    clip-path: inherit;
}
@keyframes hourglass-1810 {
    50% {
        transform: rotate(180deg);
    }
}`,
  },
  {
    id: 1811,
    name: "Three Ring Loader",
    preview: (
      <div className="loader-1811">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
}
.Loader span {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 50%;
    animation: rings-1811 1.5s linear infinite;
}
.Loader span:nth-child(1) {
    border-top-color: #22d3ee;
}
.Loader span:nth-child(2) {
    inset: 7px;
    border-right-color: #8b5cf6;
    animation-duration: 1.1s;
}
.Loader span:nth-child(3) {
    inset: 14px;
    border-bottom-color: #ec4899;
    animation-duration: .8s;
}
@keyframes rings-1811 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1812,
    name: "Neon Heart Loader",
    preview: (
      <div className="loader-1812">
        <i className="fa-solid fa-heart"></i>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-heart"></i>
</div>`,
    css: `.Loader {
    color: #f472b6;
    font-size: 25px;
    animation: heart-1812 1s ease-in-out infinite;
}
.Loader i {
    text-shadow: 0 0 8px #ec4899,0 0 20px rgba(236,72,153,.45);
}
@keyframes heart-1812 {
    50% {
        transform: scale(1.3);
    }
}`,
  },
  {
    id: 1813,
    name: "Neon Triangle Loader",
    preview: <div className="loader-1813"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 42px;
    height: 42px;
    border: 3px solid #22d3ee;
    clip-path: polygon(50% 0,100% 100%,0 100%);
    animation: triangle-1813 1.1s linear infinite;
    box-shadow: 0 0 16px rgba(34,211,238,.3);
}
@keyframes triangle-1813 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1814,
    name: "Liquid Ring Loader",
    preview: <div className="loader-1814"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #8b5cf6;
    filter: blur(.2px);
    animation: liquid-1814 1s cubic-bezier(.4,0,.2,1) infinite;
}
@keyframes liquid-1814 {
    50% {
        border-top-color: #ec4899;
        border-right-color: #f97316;
    }
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1815,
    name: "Star Burst Loader",
    preview: (
      <div className="loader-1815">
        <i className="fa-solid fa-star"></i>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-star"></i>
</div>`,
    css: `.Loader {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    color: #facc15;
    animation: burst-1815 1.1s ease-in-out infinite;
}
.Loader i {
    font-size: 22px;
    text-shadow: 0 0 8px #f59e0b,0 0 18px rgba(250,204,21,.45);
}
@keyframes burst-1815 {
    50% {
        transform: rotate(180deg) scale(1.22);
    }
}`,
  },
  {
    id: 1816,
    name: "Cyber Bars Loader",
    preview: (
      <div className="loader-1816">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 34px;
}
.Loader span {
    width: 4px;
    height: 8px;
    background: #22d3ee;
    box-shadow: 0 0 8px #22d3ee;
    animation: cyber-bars-1816 .9s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    animation-delay: .1s;
}
.Loader span:nth-child(3) {
    animation-delay: .2s;
    background: #3b82f6;
}
.Loader span:nth-child(4) {
    animation-delay: .3s;
    background: #8b5cf6;
}
.Loader span:nth-child(5) {
    animation-delay: .4s;
    background: #ec4899;
}
@keyframes cyber-bars-1816 {
    50% {
        height: 30px;
    }
}`,
  },
  {
    id: 1817,
    name: "Rainbow Orbit Loader",
    preview: (
      <div className="loader-1817">
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px dashed rgba(255,255,255,.2);
    animation: orbit-1817 3s linear infinite;
}
.Loader div {
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    left: 24px;
    border-radius: 50%;
    background: #ec4899;
    box-shadow: 0 0 10px #ec4899;
}
@keyframes orbit-1817 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1818,
    name: "Frost Loader",
    preview: (
      <div className="loader-1818">
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
}
.Loader span {
    position: absolute;
    inset: 0;
    border: 2px solid #7dd3fc;
    border-radius: 50%;
    filter: blur(.2px);
    animation: frost-1818 1.3s ease-in-out infinite;
}
.Loader span:nth-child(2) {
    inset: 9px;
    border-color: #e0f2fe;
    animation-delay: .2s;
}
@keyframes frost-1818 {
    50% {
        transform: scale(1.15);
        opacity: .4;
    }
}`,
  },
  {
    id: 1819,
    name: "Fire Spiral Loader",
    preview: (
      <div className="loader-1819">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #facc15;
    border-right-color: #f97316;
    border-bottom-color: #ef4444;
    animation: fire-spiral-1819 .9s linear infinite;
}
.Loader span {
    display: block;
    width: 13px;
    height: 13px;
    margin: 15px auto;
    border-radius: 50%;
    background: #facc15;
    box-shadow: 0 0 13px #f97316;
}
@keyframes fire-spiral-1819 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1820,
    name: "Neon Infinity Loader",
    preview: (
      <div className="loader-1820">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 62px;
    height: 34px;
    position: relative;
}
.Loader::before,
.Loader::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    top: 2px;
    border: 3px solid #22d3ee;
    border-radius: 50%;
}
.Loader::before {
    left: 1px;
    border-right-color: transparent;
    transform: rotate(25deg);
}
.Loader::after {
    right: 1px;
    border-left-color: transparent;
    transform: rotate(25deg);
}
.Loader span {
    position: absolute;
    left: 28px;
    top: 12px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ec4899;
    box-shadow: 0 0 10px #ec4899;
    animation: infinity-1820 1s infinite;
}
@keyframes infinity-1820 {
    50% {
        transform: translateX(6px);
    }
}`,
  },
  {
    id: 1821,
    name: "Neon Cube Loader",
    preview: <div className="loader-1821"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 34px;
    height: 34px;
    border: 3px solid #22d3ee;
    box-shadow: 0 0 14px rgba(34,211,238,.35);
    animation: cube-1821 1.2s ease-in-out infinite;
}
@keyframes cube-1821 {
    50% {
        transform: rotate(90deg) scale(.75);
        border-color: #8b5cf6;
        box-shadow: 0 0 18px rgba(139,92,246,.35);
    }
    100% {
        transform: rotate(180deg);
    }
}`,
  },
  {
    id: 1822,
    name: "Glow Line Loader",
    preview: <div className="loader-1822"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 100px;
    height: 4px;
    overflow: hidden;
    border-radius: 999px;
    background: #18181b;
}
.Loader::before {
    content: "";
    display: block;
    width: 35%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,#22d3ee,#6366f1,#ec4899);
    box-shadow: 0 0 12px #6366f1;
    animation: line-1822 1.1s ease-in-out infinite;
}
@keyframes line-1822 {
    0% {
        transform: translateX(-120%);
    }
    100% {
        transform: translateX(390%);
    }
}`,
  },
  {
    id: 1823,
    name: "Pulse Grid Loader",
    preview: (
      <div className="loader-1823">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    display: grid;
    grid-template-columns: repeat(2,9px);
    gap: 5px;
}
.Loader span {
    width: 9px;
    height: 9px;
    border-radius: 2px;
    background: #22d3ee;
    box-shadow: 0 0 9px #22d3ee;
    animation: grid-1823 1s infinite;
}
.Loader span:nth-child(2) {
    background: #8b5cf6;
    box-shadow: 0 0 9px #8b5cf6;
    animation-delay: .15s;
}
.Loader span:nth-child(3) {
    background: #ec4899;
    box-shadow: 0 0 9px #ec4899;
    animation-delay: .3s;
}
.Loader span:nth-child(4) {
    background: #f97316;
    box-shadow: 0 0 9px #f97316;
    animation-delay: .45s;
}
@keyframes grid-1823 {
    50% {
        transform: scale(.35);
        opacity: .45;
    }
}`,
  },
  {
    id: 1824,
    name: "Neon Hex Loader",
    preview: <div className="loader-1824"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 46px;
    height: 40px;
    background: #020617;
    border: 2px solid #22d3ee;
    clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);
    animation: hex-1824 1.2s ease-in-out infinite;
    box-shadow: 0 0 15px #22d3ee;
}
@keyframes hex-1824 {
    50% {
        transform: scale(1.1) rotate(30deg);
        border-color: #a855f7;
    }
}`,
  },
  {
    id: 1825,
    name: "Color Shift Loader",
    preview: <div className="loader-1825"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(45deg,#22d3ee,#8b5cf6,#ec4899,#f97316);
    background-size: 300% 300%;
    animation: color-shift-1825 2s ease infinite;
}
@keyframes color-shift-1825 {
    50% {
        background-position: 100% 100%;
        transform: rotate(180deg);
    }
}`,
  },
  {
    id: 1826,
    name: "Rocket Loader",
    preview: (
      <div className="loader-1826">
        <i className="fa-solid fa-rocket"></i>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-rocket"></i>
</div>`,
    css: `.Loader {
    color: #60a5fa;
    animation: rocket-1826 1s ease-in-out infinite;
}
.Loader i {
    font-size: 24px;
    text-shadow: 0 0 9px #3b82f6;
}
@keyframes rocket-1826 {
    50% {
        transform: translateY(-8px);
        filter: brightness(1.4);
    }
}`,
  },
  {
    id: 1827,
    name: "Neon Ring Pulse Loader",
    preview: <div className="loader-1827"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 44px;
    height: 44px;
    border: 3px solid #22d3ee;
    border-radius: 50%;
    box-shadow: 0 0 8px #22d3ee,0 0 20px rgba(34,211,238,.25);
    animation: ring-pulse-1827 1.1s ease-out infinite;
}
@keyframes ring-pulse-1827 {
    0% {
        transform: scale(.65);
        opacity: 1;
    }
    100% {
        transform: scale(1.35);
        opacity: 0;
    }
}`,
  },
  {
    id: 1828,
    name: "Dual Color Spinner",
    preview: <div className="loader-1828"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #18181b;
    border-top-color: #22d3ee;
    border-bottom-color: #ec4899;
    animation: dual-spin-1828 1s linear infinite;
}
@keyframes dual-spin-1828 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1829,
    name: "Glitch Loader",
    preview: (
      <div className="loader-1829">
        <span>LOADING</span>
      </div>
    ),
    html: `<div class="Loader">
    <span>LOADING</span>
</div>`,
    css: `.Loader {
    position: relative;
    color: #67e8f9;
    font-family: monospace;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2px;
}
.Loader span {
    text-shadow: 2px 0 #ec4899,-2px 0 #22d3ee;
    animation: glitch-1829 .7s infinite;
}
@keyframes glitch-1829 {
    50% {
        transform: translateX(2px);
        opacity: .6;
    }
}`,
  },
  {
    id: 1830,
    name: "Prism Loader",
    preview: <div className="loader-1830"></div>,
    html: `<div class="Loader"></div>`,
    css: `.Loader {
    width: 46px;
    height: 46px;
    padding: 2px;
    border-radius: 50%;
    background: conic-gradient(#ef4444,#f97316,#facc15,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);
    animation: prism-1830 1.5s linear infinite;
}
.Loader::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #09090b;
}
@keyframes prism-1830 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1831,
    name: "Energy Beam Loader",
    preview: (
      <div className="loader-1831">
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
</div>`,
    css: `.Loader {
    width: 100px;
    height: 5px;
    overflow: hidden;
    border-radius: 999px;
    background: #09090b;
}
.Loader span {
    display: block;
    width: 25px;
    height: 100%;
    border-radius: inherit;
    background: #22d3ee;
    box-shadow: 0 0 14px #22d3ee,0 0 28px #8b5cf6;
    animation: beam-1831 1s cubic-bezier(.5,0,.5,1) infinite;
}
@keyframes beam-1831 {
    0% {
        transform: translateX(-30px);
    }
    100% {
        transform: translateX(105px);
    }
}`,
  },
  {
    id: 1832,
    name: "Aurora Orb Loader",
    preview: (
      <div className="loader-1832">
        <span></span>
        <div></div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <div></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
}
.Loader span {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: conic-gradient(#22d3ee,#6366f1,#ec4899,#22d3ee);
    filter: blur(7px);
    opacity: .45;
    animation: aurora-orb-1832 2.4s linear infinite;
}
.Loader div {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #09090b;
    border: 1px solid rgba(255,255,255,.2);
}
@keyframes aurora-orb-1832 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 1833,
    name: "Legendary Cosmic Loader",
    preview: (
      <div className="loader-1833">
        <span></span>
        <span></span>
        <span></span>
        <div>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <span></span>
    <span></span>
    <span></span>
    <div>
        <i class="fa-solid fa-star"></i>
    </div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 66px;
    height: 66px;
    display: grid;
    place-items: center;
}
.Loader > span {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    animation: cosmic-ring-1833 2s linear infinite;
}
.Loader > span:nth-child(1) {
    border-top-color: #22d3ee;
    border-right-color: #3b82f6;
}
.Loader > span:nth-child(2) {
    inset: 7px;
    border-bottom-color: #8b5cf6;
    border-left-color: #ec4899;
    animation-duration: 1.5s;
    animation-direction: reverse;
}
.Loader > span:nth-child(3) {
    inset: 14px;
    border-top-color: #f97316;
    animation-duration: 1s;
}
.Loader > div {
    position: relative;
    z-index: 2;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #08080a;
    color: #fde68a;
    box-shadow: 0 0 15px rgba(250,204,21,.35),inset 0 0 10px rgba(255,255,255,.05);
}
.Loader i {
    font-size: 11px;
    text-shadow: 0 0 8px #facc15;
}
@keyframes cosmic-ring-1833 {
    to {
        transform: rotate(360deg);
    }
}`,
  },
  {
    id: 2061,
    name: "Electric Arc Loader",
    preview: (
      <div className="loader-2061">
        <div className="loader-2061__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <span className="loader-2061__arc"></span>
        <span className="loader-2061__arc loader-2061__arc--two"></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <span class="Loader-arc"></span>
    <span class="Loader-arc Loader-arc--two"></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 64px;
    height: 64px;
}
.Loader-core {
    position: absolute;
    inset: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #fef08a;
    box-shadow:
        0 0 10px #22d3ee,
        0 0 24px #0ea5e9,
        inset 0 0 12px rgba(34,211,238,.3);
    z-index: 2;
}
.Loader-core i {
    text-shadow: 0 0 10px #facc15;
    animation: electric-flash 0.8s ease-in-out infinite;
}
.Loader-arc {
    position: absolute;
    inset: 4px;
    border: 3px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #67e8f9;
    border-radius: 50%;
    animation: electric-spin 1s linear infinite;
}
.Loader-arc--two {
    inset: 9px;
    border-top-color: transparent;
    border-left-color: #3b82f6;
    border-bottom-color: #06b6d4;
    animation-duration: .7s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2062,
    name: "Electric Plasma Ring",
    preview: (
      <div className="loader-2062">
        <div className="loader-2062__plasma"></div>
        <div className="loader-2062__center">
          <i className="fa-solid fa-bolt"></i>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-plasma"></div>
    <div class="Loader-center">
        <i class="fa-solid fa-bolt"></i>
    </div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 62px;
    height: 62px;
}
.Loader-plasma {
    position: absolute;
    inset: 1px;
    border-radius: 50%;
    background: conic-gradient(
        #22d3ee,
        #3b82f6,
        #67e8f9,
        #2563eb,
        #22d3ee
    );
    filter: blur(3px);
    animation: plasma-spin 1.2s linear infinite;
}
.Loader-center {
    position: absolute;
    inset: 16px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #030712;
    color: #67e8f9;
    box-shadow: 0 0 18px rgba(34,211,238,.5);
    z-index: 2;
}
.Loader-center i {
    animation: electric-pulse 1s ease-in-out infinite;
}`,
  },
  {
    id: 2063,
    name: "Thunder Bolt Loader",
    preview: (
      <div className="loader-2063">
        <i className="fa-solid fa-cloud-bolt"></i>
        <div className="loader-2063__ring"></div>
        <div className="loader-2063__ring loader-2063__ring--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-cloud-bolt"></i>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
}
.Loader > i {
    color: #facc15;
    font-size: 18px;
    z-index: 3;
    text-shadow:
        0 0 7px #facc15,
        0 0 18px #f97316;
    animation: thunder-pulse 1s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 4px;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-bottom-color: #3b82f6;
    border-radius: 50%;
    animation: electric-spin 1.1s linear infinite;
}
.Loader-ring--two {
    inset: 11px;
    border-top-color: #67e8f9;
    border-left-color: transparent;
    border-bottom-color: #06b6d4;
    animation-duration: .65s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2064,
    name: "Electric Shockwave",
    preview: (
      <div className="loader-2064">
        <div className="loader-2064__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 60px;
    height: 60px;
}
.Loader-core {
    position: absolute;
    inset: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #06131c;
    color: #facc15;
    box-shadow:
        0 0 12px #22d3ee,
        0 0 25px rgba(34,211,238,.4);
    z-index: 2;
}
.Loader-core i {
    animation: electric-flash 0.9s ease-in-out infinite;
}
.Loader span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    margin-top: -4px;
    border: 1px solid #22d3ee;
    border-radius: 50%;
    animation: shockwave 1.5s ease-out infinite;
}
.Loader span:nth-child(3) {
    animation-delay: .45s;
}
.Loader span:nth-child(4) {
    animation-delay: .9s;
}`,
  },
  {
    id: 2065,
    name: "Electric Charge Bars",
    preview: (
      <div className="loader-2065">
        <i className="fa-solid fa-bolt"></i>
        <div className="loader-2065__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <i class="fa-solid fa-bolt"></i>
    <div class="Loader-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
    css: `.Loader {
    display: flex;
    align-items: center;
    gap: 10px;
}
.Loader > i {
    color: #facc15;
    font-size: 13px;
    text-shadow: 0 0 8px #facc15;
}
.Loader-bars {
    display: flex;
    align-items: center;
    gap: 3px;
    height: 30px;
}
.Loader-bars span {
    width: 4px;
    height: 10px;
    border-radius: 999px;
    background: #22d3ee;
    box-shadow: 0 0 7px #22d3ee;
    animation: charge-bars 1s ease-in-out infinite;
}
.Loader-bars span:nth-child(2) {
    animation-delay: .1s;
}
.Loader-bars span:nth-child(3) {
    animation-delay: .2s;
}
.Loader-bars span:nth-child(4) {
    animation-delay: .3s;
}
.Loader-bars span:nth-child(5) {
    animation-delay: .4s;
}
.Loader-bars span:nth-child(6) {
    animation-delay: .5s;
}`,
  },
  {
    id: 2066,
    name: "Electric Reactor Core",
    preview: (
      <div className="loader-2066">
        <div className="loader-2066__core">
          <i className="fa-solid fa-atom"></i>
        </div>
        <div className="loader-2066__ring"></div>
        <div className="loader-2066__ring loader-2066__ring--two"></div>
        <div className="loader-2066__ring loader-2066__ring--three"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-atom"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
    <div class="Loader-ring Loader-ring--three"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 70px;
    height: 70px;
}
.Loader-core {
    position: absolute;
    inset: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #67e8f9;
    box-shadow:
        0 0 10px #22d3ee,
        0 0 25px rgba(34,211,238,.4);
    z-index: 4;
}
.Loader-core i {
    animation: reactor-core 1s linear infinite;
}
.Loader-ring {
    position: absolute;
    inset: 5px;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #3b82f6;
    border-radius: 50%;
    animation: electric-spin 1.2s linear infinite;
}
.Loader-ring--two {
    inset: 12px;
    border-left-color: #67e8f9;
    border-bottom-color: #06b6d4;
    animation-duration: .8s;
    animation-direction: reverse;
}
.Loader-ring--three {
    inset: 1px;
    border-bottom-color: #2563eb;
    border-right-color: transparent;
    animation-duration: 1.8s;
}`,
  },
  {
    id: 2067,
    name: "Electric Signal Wave",
    preview: (
      <div className="loader-2067">
        <div className="loader-2067__line"></div>
        <i className="fa-solid fa-bolt"></i>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-line"></div>
    <i class="fa-solid fa-bolt"></i>
</div>`,
    css: `.Loader {
    position: relative;
    width: 150px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Loader-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: #082f49;
    overflow: hidden;
}
.Loader-line::after {
    content: "";
    position: absolute;
    width: 38px;
    height: 100%;
    left: -40px;
    background: linear-gradient(
        90deg,
        transparent,
        #22d3ee,
        #67e8f9,
        transparent
    );
    box-shadow: 0 0 10px #22d3ee;
    animation: signal-line 1.1s linear infinite;
}
.Loader > i {
    position: relative;
    z-index: 2;
    padding: 5px;
    background: #020617;
    color: #facc15;
    text-shadow: 0 0 8px #facc15;
    animation: signal-bolt .8s ease-in-out infinite;
}`,
  },
  {
    id: 2068,
    name: "Electric Lightning Orbit",
    preview: (
      <div className="loader-2068">
        <div className="loader-2068__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <div className="loader-2068__orbit"></div>
        <div className="loader-2068__orbit loader-2068__orbit--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <div class="Loader-orbit"></div>
    <div class="Loader-orbit Loader-orbit--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 70px;
    height: 70px;
}
.Loader-core {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #facc15;
    z-index: 3;
    box-shadow:
        0 0 12px #22d3ee,
        0 0 25px rgba(34,211,238,.45);
}
.Loader-core i {
    text-shadow: 0 0 8px #facc15;
}
.Loader-orbit {
    position: absolute;
    inset: 7px;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-left-color: #3b82f6;
    border-radius: 50%;
    transform: rotate(25deg);
    animation: orbit-electric 1s linear infinite;
}
.Loader-orbit--two {
    inset: 13px;
    transform: rotate(-35deg);
    border-top-color: #67e8f9;
    border-right-color: #06b6d4;
    animation-duration: .7s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2069,
    name: "Electric Voltage Meter",
    preview: (
      <div className="loader-2069">
        <div className="loader-2069__head">
          <i className="fa-solid fa-bolt"></i>
          VOLTAGE
        </div>
        <div className="loader-2069__meter">
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-head">
        <i class="fa-solid fa-bolt"></i>
        VOLTAGE
    </div>
    <div class="Loader-meter">
        <span></span>
    </div>
</div>`,
    css: `.Loader {
    width: 145px;
    padding: 8px 10px;
    border: 1px solid #164e63;
    background: #020b12;
    color: #67e8f9;
    font-family: monospace;
}
.Loader-head {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 7px;
    font-weight: 900;
}
.Loader-head i {
    color: #facc15;
    text-shadow: 0 0 7px #facc15;
}
.Loader-meter {
    position: relative;
    width: 100%;
    height: 5px;
    margin-top: 8px;
    overflow: hidden;
    background: #082f49;
}
.Loader-meter span {
    display: block;
    width: 35%;
    height: 100%;
    background: linear-gradient(90deg,#06b6d4,#22d3ee,#67e8f9);
    box-shadow: 0 0 10px #22d3ee;
    animation: voltage-meter 1.4s ease-in-out infinite;
}`,
  },
  {
    id: 2070,
    name: "Legendary Electric Storm",
    preview: (
      <div className="loader-2070">
        <div className="loader-2070__storm"></div>
        <div className="loader-2070__core">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-storm"></div>
    <div class="Loader-core">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 74px;
    height: 74px;
}
.Loader-storm {
    position: absolute;
    inset: 1px;
    border-radius: 50%;
    background: conic-gradient(
        #22d3ee,
        #3b82f6,
        #06b6d4,
        #67e8f9,
        #2563eb,
        #22d3ee
    );
    filter: blur(5px);
    opacity: .85;
    animation: storm-spin 1.3s linear infinite;
}
.Loader-core {
    position: absolute;
    inset: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #020617;
    color: #fef08a;
    box-shadow:
        0 0 14px #22d3ee,
        0 0 30px rgba(34,211,238,.55),
        inset 0 0 12px rgba(34,211,238,.25);
    z-index: 3;
}
.Loader-core i {
    font-size: 15px;
    text-shadow:
        0 0 8px #facc15,
        0 0 18px #f97316;
    animation: storm-core .7s ease-in-out infinite;
}
.Loader span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #67e8f9;
    box-shadow: 0 0 9px #22d3ee;
    transform-origin: 0 0;
    animation: storm-particle 1.4s linear infinite;
}
.Loader span:nth-child(3) {
    animation-delay: -.35s;
}
.Loader span:nth-child(4) {
    animation-delay: -.7s;
}
.Loader span:nth-child(5) {
    animation-delay: -1.05s;
}`,
  },
  {
    id: 2071,
    name: "Legendary Electric Reactor",
    preview: (
      <div className="loader-2071">
        <div className="loader-2071__aura"></div>
        <div className="loader-2071__outer-glow"></div>
        <div className="loader-2071__outer-ring"></div>
        <div className="loader-2071__outer-ring loader-2071__outer-ring--two"></div>
        <div className="loader-2071__outer-ring loader-2071__outer-ring--three"></div>
        <div className="loader-2071__energy-ring"></div>
        <div className="loader-2071__energy-ring loader-2071__energy-ring--two"></div>
        <div className="loader-2071__segments">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="loader-2071__core">
          <div className="loader-2071__core-inner">
            <i className="fa-solid fa-bolt"></i>
          </div>
        </div>
        <div className="loader-2071__core-ring"></div>
        <div className="loader-2071__core-ring loader-2071__core-ring--two"></div>
        <div className="loader-2071__arc loader-2071__arc--one"></div>
        <div className="loader-2071__arc loader-2071__arc--two"></div>
        <div className="loader-2071__arc loader-2071__arc--three"></div>
        <div className="loader-2071__particle loader-2071__particle--one"></div>
        <div className="loader-2071__particle loader-2071__particle--two"></div>
        <div className="loader-2071__particle loader-2071__particle--three"></div>
        <div className="loader-2071__particle loader-2071__particle--four"></div>
        <div className="loader-2071__particle loader-2071__particle--five"></div>
        <div className="loader-2071__scan"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura"></div>
    <div class="Loader-outer-glow"></div>
    <div class="Loader-outer-ring"></div>
    <div class="Loader-outer-ring Loader-outer-ring--two"></div>
    <div class="Loader-outer-ring Loader-outer-ring--three"></div>
    <div class="Loader-energy-ring"></div>
    <div class="Loader-energy-ring Loader-energy-ring--two"></div>
    <div class="Loader-segments">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="Loader-core">
        <div class="Loader-core-inner">
            <i class="fa-solid fa-bolt"></i>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-arc Loader-arc--one"></div>
    <div class="Loader-arc Loader-arc--two"></div>
    <div class="Loader-arc Loader-arc--three"></div>
    <div class="Loader-particle Loader-particle--one"></div>
    <div class="Loader-particle Loader-particle--two"></div>
    <div class="Loader-particle Loader-particle--three"></div>
    <div class="Loader-particle Loader-particle--four"></div>
    <div class="Loader-particle Loader-particle--five"></div>
    <div class="Loader-scan"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 210px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}
.Loader-aura {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(34,211,238,.35) 0%,
        rgba(14,165,233,.18) 35%,
        rgba(37,99,235,.06) 65%,
        transparent 75%
    );
    filter: blur(15px);
    animation: loader-2071-aura 2.8s ease-in-out infinite;
}
.Loader-outer-glow {
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background: conic-gradient(
        from 0deg,
        transparent,
        rgba(34,211,238,.35),
        transparent 14%,
        transparent 25%,
        rgba(59,130,246,.3),
        transparent 40%,
        transparent 55%,
        rgba(103,232,249,.4),
        transparent 70%,
        transparent 85%,
        rgba(34,211,238,.3),
        transparent
    );
    filter: blur(8px);
    opacity: .85;
    animation: loader-2071-spin-outer 4s linear infinite;
}
.Loader-outer-ring {
    position: absolute;
    inset: 23px;
    border: 2px solid rgba(34,211,238,.14);
    border-radius: 50%;
    animation: loader-2071-spin-one 6s linear infinite;
}
.Loader-outer-ring::before {
    content: "";
    position: absolute;
    top: -3px;
    left: 50%;
    width: 5px;
    height: 5px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #67e8f9;
    box-shadow:
        0 0 6px #67e8f9,
        0 0 14px #22d3ee,
        0 0 24px rgba(34,211,238,.8);
}
.Loader-outer-ring--two {
    inset: 34px;
    border-color: rgba(59,130,246,.12);
    animation-duration: 4s;
    animation-direction: reverse;
}
.Loader-outer-ring--two::before {
    top: auto;
    bottom: -3px;
    background: #60a5fa;
    box-shadow:
        0 0 6px #60a5fa,
        0 0 14px #3b82f6,
        0 0 23px rgba(59,130,246,.7);
}
.Loader-outer-ring--three {
    inset: 45px;
    border-style: dashed;
    border-color: rgba(103,232,249,.12);
    animation-duration: 3s;
}
.Loader-energy-ring {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: conic-gradient(
        from 0deg,
        transparent 0deg,
        transparent 18deg,
        #22d3ee 22deg,
        #67e8f9 28deg,
        transparent 37deg,
        transparent 66deg,
        #3b82f6 72deg,
        #60a5fa 80deg,
        transparent 90deg,
        transparent 145deg,
        #06b6d4 152deg,
        #22d3ee 158deg,
        transparent 170deg,
        transparent 220deg,
        #3b82f6 226deg,
        #67e8f9 234deg,
        transparent 245deg,
        transparent 300deg,
        #22d3ee 306deg,
        transparent 316deg,
        transparent
    );
    -webkit-mask: radial-gradient(
        circle,
        transparent 0 68%,
        #000 69% 72%,
        transparent 73%
    );
    mask: radial-gradient(
        circle,
        transparent 0 68%,
        #000 69% 72%,
        transparent 73%
    );
    animation: loader-2071-energy-spin 2.2s linear infinite;
    filter: drop-shadow(0 0 4px #22d3ee);
}
.Loader-energy-ring--two {
    inset: 5px;
    transform: rotate(22deg);
    animation-duration: 3.1s;
    animation-direction: reverse;
    opacity: .65;
    filter: drop-shadow(0 0 5px #3b82f6);
}
.Loader-segments {
    position: absolute;
    inset: 51px;
    border-radius: 50%;
    animation: loader-2071-spin-two 9s linear infinite;
}
.Loader-segments span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    height: 13px;
    transform-origin: 50% 54px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: linear-gradient(
        to bottom,
        #67e8f9,
        #22d3ee
    );
    box-shadow:
        0 0 5px #22d3ee,
        0 0 11px rgba(34,211,238,.75);
}
.Loader-segments span:nth-child(1) {
    transform: translateX(-50%) rotate(0deg);
}
.Loader-segments span:nth-child(2) {
    transform: translateX(-50%) rotate(45deg);
}
.Loader-segments span:nth-child(3) {
    transform: translateX(-50%) rotate(90deg);
}
.Loader-segments span:nth-child(4) {
    transform: translateX(-50%) rotate(135deg);
}
.Loader-segments span:nth-child(5) {
    transform: translateX(-50%) rotate(180deg);
}
.Loader-segments span:nth-child(6) {
    transform: translateX(-50%) rotate(225deg);
}
.Loader-segments span:nth-child(7) {
    transform: translateX(-50%) rotate(270deg);
}
.Loader-segments span:nth-child(8) {
    transform: translateX(-50%) rotate(315deg);
}
.Loader-core {
    position: absolute;
    width: 83px;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 50% 42%,
            rgba(103,232,249,.16),
            transparent 42%
        ),
        #020617;
    border: 2px solid rgba(34,211,238,.6);
    box-shadow:
        0 0 10px rgba(34,211,238,.6),
        0 0 24px rgba(34,211,238,.4),
        0 0 45px rgba(14,165,233,.25),
        inset 0 0 20px rgba(34,211,238,.18);
    z-index: 5;
    animation: loader-2071-core-pulse 1.8s ease-in-out infinite;
}
.Loader-core::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px solid rgba(103,232,249,.35);
    box-shadow:
        inset 0 0 10px rgba(34,211,238,.15),
        0 0 8px rgba(34,211,238,.2);
}
.Loader-core::after {
    content: "";
    position: absolute;
    inset: 14px;
    border-radius: 50%;
    background:
        repeating-linear-gradient(
            0deg,
            transparent 0 4px,
            rgba(103,232,249,.03) 5px 6px
        );
}
.Loader-core-inner {
    position: relative;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #0c4a6e 0%,
            #082f49 32%,
            #020617 70%
        );
    border: 1px solid rgba(103,232,249,.5);
    box-shadow:
        inset 0 0 12px rgba(34,211,238,.4),
        0 0 12px rgba(34,211,238,.35);
    z-index: 2;
}
.Loader-core-inner::before {
    content: "";
    position: absolute;
    inset: -5px;
    border: 1px solid rgba(103,232,249,.14);
    border-radius: 50%;
}
.Loader-core-inner i {
    position: relative;
    color: #fef08a;
    font-size: 22px;
    text-shadow:
        0 0 5px #facc15,
        0 0 12px #f59e0b,
        0 0 24px rgba(245,158,11,.8);
    animation: loader-2071-bolt 1s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 101px;
    height: 101px;
    border: 1px solid rgba(34,211,238,.18);
    border-radius: 50%;
    z-index: 4;
    animation: loader-2071-core-ring-one 1.5s linear infinite;
}
.Loader-core-ring::before,
.Loader-core-ring::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}
.Loader-core-ring::before {
    width: 7px;
    height: 7px;
    left: 50%;
    top: -4px;
    transform: translateX(-50%);
    background: #67e8f9;
    box-shadow:
        0 0 7px #67e8f9,
        0 0 18px #22d3ee;
}
.Loader-core-ring::after {
    width: 4px;
    height: 4px;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    background: #3b82f6;
    box-shadow:
        0 0 6px #3b82f6,
        0 0 15px #2563eb;
}
.Loader-core-ring--two {
    width: 114px;
    height: 114px;
    border-color: rgba(59,130,246,.14);
    animation-duration: 2.2s;
    animation-direction: reverse;
}
.Loader-core-ring--two::before {
    left: auto;
    right: 9px;
    top: 6px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #22d3ee;
}
.Loader-core-ring--two::after {
    right: auto;
    left: 8px;
    top: auto;
    bottom: 10px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #67e8f9;
}
.Loader-arc {
    position: absolute;
    width: 125px;
    height: 125px;
    border: 2px solid transparent;
    border-radius: 50%;
    z-index: 3;
    filter: drop-shadow(0 0 5px #22d3ee);
}
.Loader-arc--one {
    border-top-color: #67e8f9;
    border-right-color: #22d3ee;
    transform: rotate(-15deg);
    animation: loader-2071-arc-one 1.1s linear infinite;
}
.Loader-arc--two {
    width: 137px;
    height: 137px;
    border-bottom-color: #3b82f6;
    border-left-color: #60a5fa;
    transform: rotate(35deg);
    animation: loader-2071-arc-two 1.7s linear infinite;
}
.Loader-arc--three {
    width: 149px;
    height: 149px;
    border-top-color: rgba(103,232,249,.5);
    border-left-color: rgba(34,211,238,.3);
    transform: rotate(120deg);
    animation: loader-2071-arc-three 2.6s linear infinite;
}
.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #67e8f9;
    box-shadow:
        0 0 6px #67e8f9,
        0 0 14px #22d3ee;
    z-index: 6;
}
.Loader-particle--one {
    animation: loader-2071-particle-one 1.8s linear infinite;
}
.Loader-particle--two {
    animation: loader-2071-particle-two 2.2s linear infinite;
    animation-delay: -.5s;
}
.Loader-particle--three {
    animation: loader-2071-particle-three 1.45s linear infinite;
    animation-delay: -.8s;
}
.Loader-particle--four {
    width: 3px;
    height: 3px;
    background: #3b82f6;
    box-shadow:
        0 0 6px #3b82f6,
        0 0 12px #2563eb;
    animation: loader-2071-particle-four 2.8s linear infinite;
}
.Loader-particle--five {
    width: 4px;
    height: 4px;
    background: #fef08a;
    box-shadow:
        0 0 7px #facc15,
        0 0 15px #f97316;
    animation: loader-2071-particle-five 2s linear infinite;
    animation-delay: -.6s;
}
.Loader-scan {
    position: absolute;
    width: 142px;
    height: 142px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: rgba(103,232,249,.3);
    border-bottom-color: rgba(34,211,238,.08);
    z-index: 2;
    animation:
        loader-2071-scan-spin 3.5s linear infinite,
        loader-2071-scan-pulse 2s ease-in-out infinite;
}
@keyframes loader-2071-aura {
    0%,
    100% {
        transform: scale(.88);
        opacity: .5;
    }
    50% {
        transform: scale(1.08);
        opacity: 1;
    }
}
@keyframes loader-2071-spin-outer {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2071-spin-one {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2071-energy-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2071-spin-two {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
@keyframes loader-2071-core-pulse {
    0%,
    100% {
        transform: scale(.96);
        box-shadow:
            0 0 10px rgba(34,211,238,.5),
            0 0 24px rgba(34,211,238,.3),
            0 0 45px rgba(14,165,233,.2),
            inset 0 0 20px rgba(34,211,238,.15);
    }
    50% {
        transform: scale(1.04);
        box-shadow:
            0 0 14px rgba(34,211,238,.8),
            0 0 30px rgba(34,211,238,.55),
            0 0 55px rgba(14,165,233,.35),
            inset 0 0 24px rgba(34,211,238,.25);
    }
}
@keyframes loader-2071-bolt {
    0%,
    100% {
        transform: scale(.9) rotate(-4deg);
        opacity: .8;
    }
    25% {
        transform: scale(1.08) rotate(3deg);
        opacity: 1;
    }
    45% {
        transform: scale(.96) rotate(-2deg);
        opacity: .9;
    }
    65% {
        transform: scale(1.12) rotate(4deg);
        opacity: 1;
    }
}
@keyframes loader-2071-core-ring-one {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2071-arc-one {
    from {
        transform: rotate(-15deg);
    }
    to {
        transform: rotate(345deg);
    }
}
@keyframes loader-2071-arc-two {
    from {
        transform: rotate(35deg);
    }
    to {
        transform: rotate(-325deg);
    }
}
@keyframes loader-2071-arc-three {
    from {
        transform: rotate(120deg);
    }
    to {
        transform: rotate(480deg);
    }
}
@keyframes loader-2071-particle-one {
    0% {
        transform: rotate(0deg) translateX(86px) scale(.6);
        opacity: 0;
    }
    15% {
        opacity: 1;
    }
    50% {
        transform: rotate(180deg) translateX(86px) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(360deg) translateX(86px) scale(.5);
        opacity: 0;
    }
}
@keyframes loader-2071-particle-two {
    0% {
        transform: rotate(0deg) translateX(70px) scale(.4);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: rotate(-180deg) translateX(70px) scale(1);
    }
    100% {
        transform: rotate(-360deg) translateX(70px) scale(.4);
        opacity: 0;
    }
}
@keyframes loader-2071-particle-three {
    0% {
        transform: rotate(0deg) translateX(103px);
        opacity: 0;
    }
    15% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    100% {
        transform: rotate(360deg) translateX(103px);
        opacity: 0;
    }
}
@keyframes loader-2071-particle-four {
    0% {
        transform: rotate(120deg) translateX(93px);
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    100% {
        transform: rotate(480deg) translateX(93px);
        opacity: 0;
    }
}
@keyframes loader-2071-particle-five {
    0% {
        transform: rotate(210deg) translateX(78px);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: rotate(-150deg) translateX(78px);
        opacity: 0;
    }
}
@keyframes loader-2071-scan-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2071-scan-pulse {
    0%,
    100% {
        opacity: .35;
    }
    50% {
        opacity: .9;
    }
}`,
  },
  {
    id: 2072,
    name: "Legendary Blue Fire Reactor",
    preview: (
      <div className="loader-2072">
        <div className="loader-2072__ambient"></div>
        <div className="loader-2072__fire-glow"></div>
        <div className="loader-2072__outer-ring"></div>
        <div className="loader-2072__outer-ring loader-2072__outer-ring--two"></div>
        <div className="loader-2072__outer-ring loader-2072__outer-ring--three"></div>
        <div className="loader-2072__fire-ring"></div>
        <div className="loader-2072__fire-ring loader-2072__fire-ring--two"></div>
        <div className="loader-2072__fire-ring loader-2072__fire-ring--three"></div>
        <div className="loader-2072__flame flame-one"></div>
        <div className="loader-2072__flame flame-two"></div>
        <div className="loader-2072__flame flame-three"></div>
        <div className="loader-2072__flame flame-four"></div>
        <div className="loader-2072__flame flame-five"></div>
        <div className="loader-2072__core">
          <div className="loader-2072__core-shell">
            <div className="loader-2072__core-inner">
              <i className="fa-solid fa-fire"></i>
            </div>
          </div>
        </div>
        <div className="loader-2072__core-ring"></div>
        <div className="loader-2072__core-ring loader-2072__core-ring--two"></div>
        <div className="loader-2072__spark spark-one"></div>
        <div className="loader-2072__spark spark-two"></div>
        <div className="loader-2072__spark spark-three"></div>
        <div className="loader-2072__spark spark-four"></div>
        <div className="loader-2072__spark spark-five"></div>
        <div className="loader-2072__spark spark-six"></div>
        <div className="loader-2072__ember ember-one"></div>
        <div className="loader-2072__ember ember-two"></div>
        <div className="loader-2072__ember ember-three"></div>
        <div className="loader-2072__ember ember-four"></div>
        <div className="loader-2072__energy"></div>
        <div className="loader-2072__scan"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-ambient"></div>
    <div class="Loader-fire-glow"></div>
    <div class="Loader-outer-ring"></div>
    <div class="Loader-outer-ring Loader-outer-ring--two"></div>
    <div class="Loader-outer-ring Loader-outer-ring--three"></div>
    <div class="Loader-fire-ring"></div>
    <div class="Loader-fire-ring Loader-fire-ring--two"></div>
    <div class="Loader-fire-ring Loader-fire-ring--three"></div>
    <div class="Loader-flame flame-one"></div>
    <div class="Loader-flame flame-two"></div>
    <div class="Loader-flame flame-three"></div>
    <div class="Loader-flame flame-four"></div>
    <div class="Loader-flame flame-five"></div>
    <div class="Loader-core">
        <div class="Loader-core-shell">
            <div class="Loader-core-inner">
                <i class="fa-solid fa-fire"></i>
            </div>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-spark spark-one"></div>
    <div class="Loader-spark spark-two"></div>
    <div class="Loader-spark spark-three"></div>
    <div class="Loader-spark spark-four"></div>
    <div class="Loader-spark spark-five"></div>
    <div class="Loader-spark spark-six"></div>
    <div class="Loader-ember ember-one"></div>
    <div class="Loader-ember ember-two"></div>
    <div class="Loader-ember ember-three"></div>
    <div class="Loader-ember ember-four"></div>
    <div class="Loader-energy"></div>
    <div class="Loader-scan"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 230px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}
.Loader-ambient {
    position: absolute;
    width: 185px;
    height: 185px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(37,99,235,.35) 0%,
            rgba(14,165,233,.2) 35%,
            rgba(30,64,175,.08) 60%,
            transparent 76%
        );
    filter: blur(18px);
    animation: loader-2072-ambient 2.8s ease-in-out infinite;
}
.Loader-fire-glow {
    position: absolute;
    width: 120px;
    height: 170px;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 45% 45% 55% 55%;
    background:
        radial-gradient(
            ellipse at center,
            rgba(125,211,252,.35),
            rgba(37,99,235,.18) 38%,
            rgba(29,78,216,.08) 62%,
            transparent 76%
        );
    filter: blur(16px);
    animation: loader-2072-fire-breathe 1.6s ease-in-out infinite;
}
.Loader-outer-ring {
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    border: 2px solid rgba(56,189,248,.13);
    animation: loader-2072-spin-one 7s linear infinite;
}
.Loader-outer-ring::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #60a5fa;
    box-shadow:
        0 0 7px #60a5fa,
        0 0 17px #38bdf8,
        0 0 28px rgba(56,189,248,.85);
}
.Loader-outer-ring--two {
    inset: 29px;
    border-color: rgba(37,99,235,.16);
    animation-duration: 4.8s;
    animation-direction: reverse;
}
.Loader-outer-ring--two::before {
    top: auto;
    bottom: -4px;
    background: #3b82f6;
    box-shadow:
        0 0 7px #3b82f6,
        0 0 17px #2563eb,
        0 0 28px rgba(37,99,235,.8);
}
.Loader-outer-ring--three {
    inset: 42px;
    border-style: dashed;
    border-color: rgba(96,165,250,.13);
    animation-duration: 3.2s;
}
.Loader-fire-ring {
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 10deg,
            #38bdf8 16deg,
            #60a5fa 22deg,
            transparent 31deg,
            transparent 52deg,
            #2563eb 59deg,
            #3b82f6 67deg,
            transparent 76deg,
            transparent 108deg,
            #7dd3fc 116deg,
            #38bdf8 125deg,
            transparent 135deg,
            transparent 169deg,
            #2563eb 176deg,
            #60a5fa 184deg,
            transparent 196deg,
            transparent 230deg,
            #0ea5e9 236deg,
            #38bdf8 243deg,
            transparent 252deg,
            transparent 286deg,
            #3b82f6 294deg,
            #93c5fd 301deg,
            transparent 310deg,
            transparent 345deg,
            #22d3ee 351deg,
            transparent
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 73%,
            transparent 74%
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 73%,
            transparent 74%
        );
    filter:
        drop-shadow(0 0 4px #38bdf8)
        drop-shadow(0 0 9px rgba(37,99,235,.5));
    animation: loader-2072-fire-spin 2s linear infinite;
}
.Loader-fire-ring--two {
    inset: 2px;
    transform: rotate(20deg);
    opacity: .5;
    animation-duration: 2.8s;
    animation-direction: reverse;
}
.Loader-fire-ring--three {
    inset: 25px;
    transform: rotate(-45deg);
    opacity: .7;
    animation-duration: 1.3s;
}
.Loader-flame {
    position: absolute;
    left: 50%;
    bottom: 51%;
    transform-origin: 50% 100%;
    border-radius: 50% 15% 50% 15%;
    background:
        linear-gradient(
            150deg,
            #dbeafe 0%,
            #93c5fd 25%,
            #38bdf8 55%,
            #2563eb 100%
        );
    filter:
        drop-shadow(0 0 5px #38bdf8)
        drop-shadow(0 0 13px rgba(37,99,235,.8));
    z-index: 2;
}
.Loader-flame::before {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: inherit;
    background:
        linear-gradient(
            150deg,
            #ffffff,
            #bfdbfe 25%,
            #60a5fa 60%,
            #1d4ed8
        );
}
.Loader-flame::after {
    content: "";
    position: absolute;
    width: 35%;
    height: 35%;
    left: 18%;
    top: 15%;
    border-radius: 50%;
    background: rgba(255,255,255,.75);
    filter: blur(4px);
}
.flame-one {
    width: 28px;
    height: 82px;
    transform: translateX(-50%) rotate(-17deg);
    animation: loader-2072-flame-one 1.1s ease-in-out infinite;
}
.flame-two {
    width: 23px;
    height: 69px;
    transform: translateX(-50%) rotate(13deg);
    animation: loader-2072-flame-two .9s ease-in-out infinite;
    animation-delay: -.2s;
}
.flame-three {
    width: 18px;
    height: 55px;
    transform: translateX(-50%) translateX(-26px) rotate(-28deg);
    animation: loader-2072-flame-three 1.25s ease-in-out infinite;
    animation-delay: -.5s;
}
.flame-four {
    width: 19px;
    height: 61px;
    transform: translateX(-50%) translateX(27px) rotate(25deg);
    animation: loader-2072-flame-four 1.18s ease-in-out infinite;
    animation-delay: -.35s;
}
.flame-five {
    width: 13px;
    height: 43px;
    transform: translateX(-50%) translateX(2px) rotate(-3deg);
    animation: loader-2072-flame-five .75s ease-in-out infinite;
    animation-delay: -.1s;
}
.Loader-core {
    position: absolute;
    width: 92px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 50% 38%,
            rgba(125,211,252,.18),
            transparent 45%
        ),
        #020617;
    border: 2px solid rgba(56,189,248,.65);
    box-shadow:
        0 0 12px rgba(56,189,248,.7),
        0 0 28px rgba(37,99,235,.55),
        0 0 55px rgba(14,165,233,.25),
        inset 0 0 22px rgba(37,99,235,.22);
    z-index: 7;
    animation: loader-2072-core 1.8s ease-in-out infinite;
}
.Loader-core-shell {
    position: relative;
    width: 67px;
    height: 67px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid rgba(147,197,253,.5);
    background:
        radial-gradient(
            circle,
            #0c4a6e 0%,
            #075985 28%,
            #082f49 48%,
            #020617 78%
        );
    box-shadow:
        inset 0 0 15px rgba(56,189,248,.4),
        0 0 15px rgba(14,165,233,.25);
    z-index: 2;
}
.Loader-core-shell::before {
    content: "";
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    border: 1px solid rgba(125,211,252,.16);
}
.Loader-core-shell::after {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px dashed rgba(96,165,250,.2);
    animation: loader-2072-shell-spin 4s linear infinite;
}
.Loader-core-inner {
    position: relative;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #38bdf8 0%,
            #0ea5e9 22%,
            #0369a1 46%,
            #020617 75%
        );
    box-shadow:
        0 0 10px #38bdf8,
        0 0 22px rgba(14,165,233,.8),
        inset 0 0 13px rgba(186,230,253,.3);
    animation: loader-2072-inner 1.2s ease-in-out infinite;
}
.Loader-core-inner::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(191,219,254,.38);
}
.Loader-core-inner i {
    position: relative;
    color: #e0f2fe;
    font-size: 21px;
    text-shadow:
        0 0 6px #dbeafe,
        0 0 14px #60a5fa,
        0 0 25px #38bdf8;
    animation: loader-2072-fire-icon .8s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 111px;
    height: 111px;
    border: 1px solid rgba(56,189,248,.22);
    border-radius: 50%;
    z-index: 6;
    animation: loader-2072-core-ring-one 1.4s linear infinite;
}
.Loader-core-ring::before,
.Loader-core-ring::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}
.Loader-core-ring::before {
    width: 7px;
    height: 7px;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #93c5fd;
    box-shadow:
        0 0 6px #93c5fd,
        0 0 16px #38bdf8;
}
.Loader-core-ring::after {
    width: 4px;
    height: 4px;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    background: #3b82f6;
    box-shadow:
        0 0 6px #3b82f6,
        0 0 15px #2563eb;
}
.Loader-core-ring--two {
    width: 126px;
    height: 126px;
    border-color: rgba(37,99,235,.16);
    animation-duration: 2.1s;
    animation-direction: reverse;
}
.Loader-core-ring--two::before {
    top: auto;
    bottom: 8px;
    left: auto;
    right: 4px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #22d3ee;
}
.Loader-core-ring--two::after {
    width: 5px;
    height: 5px;
    top: 9px;
    right: auto;
    left: 5px;
    transform: none;
    background: #60a5fa;
}
.Loader-spark {
    position: absolute;
    width: 4px;
    height: 12px;
    background: linear-gradient(
        to bottom,
        #ffffff,
        #93c5fd,
        #38bdf8
    );
    border-radius: 999px;
    box-shadow:
        0 0 5px #93c5fd,
        0 0 12px #38bdf8;
    z-index: 8;
}
.spark-one {
    top: 39px;
    left: 61px;
    transform: rotate(26deg);
    animation: loader-2072-spark-one 1s ease-in-out infinite;
}
.spark-two {
    top: 51px;
    right: 47px;
    transform: rotate(-34deg);
    animation: loader-2072-spark-two 1.3s ease-in-out infinite;
    animation-delay: -.35s;
}
.spark-three {
    top: 96px;
    left: 31px;
    transform: rotate(75deg);
    animation: loader-2072-spark-three 1.1s ease-in-out infinite;
    animation-delay: -.2s;
}
.spark-four {
    top: 101px;
    right: 23px;
    transform: rotate(-62deg);
    animation: loader-2072-spark-four 1.5s ease-in-out infinite;
}
.spark-five {
    bottom: 44px;
    left: 43px;
    transform: rotate(-22deg);
    animation: loader-2072-spark-five .9s ease-in-out infinite;
    animation-delay: -.45s;
}
.spark-six {
    bottom: 37px;
    right: 39px;
    transform: rotate(48deg);
    animation: loader-2072-spark-six 1.2s ease-in-out infinite;
    animation-delay: -.3s;
}
.Loader-ember {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #bfdbfe;
    box-shadow:
        0 0 5px #bfdbfe,
        0 0 13px #38bdf8;
    z-index: 9;
}
.ember-one {
    left: 66px;
    top: 51px;
    animation: loader-2072-ember-one 2.1s linear infinite;
}
.ember-two {
    left: 139px;
    top: 48px;
    animation: loader-2072-ember-two 1.8s linear infinite;
    animation-delay: -.5s;
}
.ember-three {
    left: 48px;
    top: 123px;
    animation: loader-2072-ember-three 2.4s linear infinite;
    animation-delay: -.8s;
}
.ember-four {
    right: 52px;
    top: 133px;
    animation: loader-2072-ember-four 2s linear infinite;
    animation-delay: -.35s;
}
.Loader-energy {
    position: absolute;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 90deg,
            transparent,
            rgba(56,189,248,.12),
            transparent 15%,
            transparent 30%,
            rgba(37,99,235,.18),
            transparent 45%,
            transparent 62%,
            rgba(96,165,250,.14),
            transparent 78%,
            transparent
        );
    filter: blur(1px);
    animation: loader-2072-energy 2.7s linear infinite;
    z-index: 1;
}
.Loader-scan {
    position: absolute;
    width: 152px;
    height: 152px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: rgba(147,197,253,.32);
    border-right-color: rgba(56,189,248,.1);
    z-index: 4;
    animation:
        loader-2072-scan 3.5s linear infinite,
        loader-2072-scan-pulse 1.8s ease-in-out infinite;
}
@keyframes loader-2072-ambient {
    0%,
    100% {
        transform: scale(.85);
        opacity: .45;
    }
    50% {
        transform: scale(1.08);
        opacity: 1;
    }
}
@keyframes loader-2072-fire-breathe {
    0%,
    100% {
        transform: translateX(-50%) scaleY(.9) scaleX(.9);
        opacity: .55;
    }
    50% {
        transform: translateX(-50%) scaleY(1.08) scaleX(1.06);
        opacity: 1;
    }
}
@keyframes loader-2072-spin-one {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2072-fire-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2072-core {
    0%,
    100% {
        transform: scale(.96);
        box-shadow:
            0 0 12px rgba(56,189,248,.55),
            0 0 28px rgba(37,99,235,.4),
            0 0 55px rgba(14,165,233,.2),
            inset 0 0 22px rgba(37,99,235,.16);
    }
    50% {
        transform: scale(1.05);
        box-shadow:
            0 0 18px rgba(56,189,248,.85),
            0 0 38px rgba(37,99,235,.65),
            0 0 68px rgba(14,165,233,.35),
            inset 0 0 27px rgba(37,99,235,.25);
    }
}
@keyframes loader-2072-shell-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
@keyframes loader-2072-inner {
    0%,
    100% {
        transform: scale(.92);
    }
    50% {
        transform: scale(1.08);
    }
}
@keyframes loader-2072-fire-icon {
    0%,
    100% {
        transform: scale(.9) rotate(-3deg);
        opacity: .72;
    }
    25% {
        transform: scale(1.06) rotate(3deg);
        opacity: 1;
    }
    50% {
        transform: scale(.96) rotate(-2deg);
        opacity: .85;
    }
    75% {
        transform: scale(1.12) rotate(2deg);
        opacity: 1;
    }
}
@keyframes loader-2072-core-ring-one {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2072-flame-one {
    0%,
    100% {
        transform: translateX(-50%) rotate(-17deg) scaleY(.88);
        opacity: .65;
    }
    50% {
        transform: translateX(-50%) rotate(-7deg) scaleY(1.12);
        opacity: 1;
    }
}
@keyframes loader-2072-flame-two {
    0%,
    100% {
        transform: translateX(-50%) rotate(13deg) scaleY(.85);
        opacity: .6;
    }
    50% {
        transform: translateX(-50%) rotate(4deg) scaleY(1.14);
        opacity: 1;
    }
}
@keyframes loader-2072-flame-three {
    0%,
    100% {
        transform: translateX(-50%) translateX(-26px) rotate(-28deg) scale(.82);
        opacity: .45;
    }
    50% {
        transform: translateX(-50%) translateX(-26px) rotate(-12deg) scale(1.08);
        opacity: 1;
    }
}
@keyframes loader-2072-flame-four {
    0%,
    100% {
        transform: translateX(-50%) translateX(27px) rotate(25deg) scale(.82);
        opacity: .5;
    }
    50% {
        transform: translateX(-50%) translateX(27px) rotate(10deg) scale(1.08);
        opacity: 1;
    }
}
@keyframes loader-2072-flame-five {
    0%,
    100% {
        transform: translateX(-50%) translateX(2px) rotate(-3deg) scaleY(.75);
        opacity: .45;
    }
    50% {
        transform: translateX(-50%) translateX(2px) rotate(3deg) scaleY(1.2);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-one {
    0%,
    100% {
        transform: rotate(26deg) translateY(0) scale(.7);
        opacity: .3;
    }
    50% {
        transform: rotate(26deg) translateY(-10px) scale(1.2);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-two {
    0%,
    100% {
        transform: rotate(-34deg) translateY(0) scale(.7);
        opacity: .25;
    }
    50% {
        transform: rotate(-34deg) translateY(-13px) scale(1.15);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-three {
    0%,
    100% {
        transform: rotate(75deg) translateY(0) scale(.65);
        opacity: .25;
    }
    50% {
        transform: rotate(75deg) translateY(-11px) scale(1.2);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-four {
    0%,
    100% {
        transform: rotate(-62deg) translateY(0) scale(.6);
        opacity: .3;
    }
    50% {
        transform: rotate(-62deg) translateY(-12px) scale(1.15);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-five {
    0%,
    100% {
        transform: rotate(-22deg) translateY(0) scale(.6);
        opacity: .3;
    }
    50% {
        transform: rotate(-22deg) translateY(10px) scale(1.2);
        opacity: 1;
    }
}
@keyframes loader-2072-spark-six {
    0%,
    100% {
        transform: rotate(48deg) translateY(0) scale(.6);
        opacity: .25;
    }
    50% {
        transform: rotate(48deg) translateY(12px) scale(1.2);
        opacity: 1;
    }
}
@keyframes loader-2072-ember-one {
    0% {
        transform: translate(0,0) scale(.5);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translate(-15px,-55px) scale(1);
        opacity: 0;
    }
}
@keyframes loader-2072-ember-two {
    0% {
        transform: translate(0,0) scale(.5);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translate(18px,-62px) scale(.8);
        opacity: 0;
    }
}
@keyframes loader-2072-ember-three {
    0% {
        transform: translate(0,0) scale(.5);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translate(-20px,-48px) scale(.75);
        opacity: 0;
    }
}
@keyframes loader-2072-ember-four {
    0% {
        transform: translate(0,0) scale(.5);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translate(14px,-52px) scale(.8);
        opacity: 0;
    }
}
@keyframes loader-2072-energy {
    from {
        transform: rotate(0deg) scale(.96);
    }
    to {
        transform: rotate(360deg) scale(1.04);
    }
}
@keyframes loader-2072-scan {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader-2072-scan-pulse {
    0%,
    100% {
        opacity: .25;
    }
    50% {
        opacity: .8;
    }
}`,
  },
  {
    id: 2073,
    name: "Legendary Aqua Vortex",
    preview: (
      <div className="loader-2073">
        <div className="loader-2073__mist"></div>
        <div className="loader-2073__aura"></div>
        <div className="loader-2073__ring loader-2073__ring--one"></div>
        <div className="loader-2073__ring loader-2073__ring--two"></div>
        <div className="loader-2073__ring loader-2073__ring--three"></div>
        <div className="loader-2073__vortex"></div>
        <div className="loader-2073__drop loader-2073__drop--one"></div>
        <div className="loader-2073__drop loader-2073__drop--two"></div>
        <div className="loader-2073__drop loader-2073__drop--three"></div>
        <div className="loader-2073__drop loader-2073__drop--four"></div>
        <div className="loader-2073__bubble loader-2073__bubble--one"></div>
        <div className="loader-2073__bubble loader-2073__bubble--two"></div>
        <div className="loader-2073__bubble loader-2073__bubble--three"></div>
        <div className="loader-2073__core">
          <div className="loader-2073__core-inner">
            <i className="fa-solid fa-water"></i>
          </div>
        </div>
        <div className="loader-2073__core-ring"></div>
        <div className="loader-2073__core-ring loader-2073__core-ring--two"></div>
        <div className="loader-2073__stream loader-2073__stream--one"></div>
        <div className="loader-2073__stream loader-2073__stream--two"></div>
        <div className="loader-2073__stream loader-2073__stream--three"></div>
        <div className="loader-2073__surface"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-mist"></div>
    <div class="Loader-aura"></div>
    <div class="Loader-ring Loader-ring--one"></div>
    <div class="Loader-ring Loader-ring--two"></div>
    <div class="Loader-ring Loader-ring--three"></div>
    <div class="Loader-vortex"></div>
    <div class="Loader-drop Loader-drop--one"></div>
    <div class="Loader-drop Loader-drop--two"></div>
    <div class="Loader-drop Loader-drop--three"></div>
    <div class="Loader-drop Loader-drop--four"></div>
    <div class="Loader-bubble Loader-bubble--one"></div>
    <div class="Loader-bubble Loader-bubble--two"></div>
    <div class="Loader-bubble Loader-bubble--three"></div>
    <div class="Loader-core">
        <div class="Loader-core-inner">
            <i class="fa-solid fa-water"></i>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-stream Loader-stream--one"></div>
    <div class="Loader-stream Loader-stream--two"></div>
    <div class="Loader-stream Loader-stream--three"></div>
    <div class="Loader-surface"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 240px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}
.Loader-mist {
    position: absolute;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(125, 211, 252, 0.28),
        rgba(34, 211, 238, 0.12) 45%,
        transparent 75%
    );
    filter: blur(18px);
    animation: aqua-mist 3s ease-in-out infinite;
}
.Loader-aura {
    position: absolute;
    width: 145px;
    height: 175px;
    border-radius: 50%;
    background: radial-gradient(
        ellipse,
        rgba(56, 189, 248, 0.2),
        rgba(14, 165, 233, 0.08) 55%,
        transparent 78%
    );
    filter: blur(13px);
    animation: water-aura 2s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
}
.Loader-ring--one {
    inset: 10px;
    border-top-color: #22d3ee;
    border-right-color: #38bdf8;
    animation: aqua-spin 2.2s linear infinite;
}
.Loader-ring--two {
    inset: 22px;
    border-left-color: #60a5fa;
    border-bottom-color: #0ea5e9;
    animation: aqua-spin 1.4s linear infinite reverse;
}
.Loader-ring--three {
    inset: 35px;
    border-top-color: rgba(125, 211, 252, 0.65);
    border-bottom-color: rgba(34, 211, 238, 0.35);
    animation: aqua-spin 3.4s linear infinite;
}
.Loader-vortex {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: conic-gradient(
        from 0deg,
        transparent,
        rgba(34, 211, 238, 0.22),
        transparent 30%,
        rgba(59, 130, 246, 0.2),
        transparent 55%,
        rgba(103, 232, 249, 0.2),
        transparent
    );
    filter: blur(1px);
    animation: vortex-spin 2s linear infinite;
}
.Loader-vortex::before {
    content: "";
    position: absolute;
    inset: 25px;
    border-radius: 50%;
    border: 1px solid rgba(125, 211, 252, 0.25);
}
.Loader-vortex::after {
    content: "";
    position: absolute;
    inset: 48px;
    border-radius: 50%;
    border: 1px dashed rgba(103, 232, 249, 0.2);
}
.Loader-drop {
    position: absolute;
    width: 9px;
    height: 13px;
    border-radius: 60% 40% 60% 40%;
    background: linear-gradient(
        145deg,
        #e0f2fe,
        #7dd3fc 40%,
        #0ea5e9 75%,
        #0369a1
    );
    box-shadow:
        0 0 6px #38bdf8,
        0 0 14px rgba(14, 165, 233, 0.7);
}
.Loader-drop--one {
    top: 40px;
    left: 55px;
    animation: drop-one 2.2s ease-in-out infinite;
}
.Loader-drop--two {
    top: 49px;
    right: 52px;
    animation: drop-two 1.9s ease-in-out infinite;
}
.Loader-drop--three {
    bottom: 54px;
    left: 43px;
    animation: drop-three 2.5s ease-in-out infinite;
}
.Loader-drop--four {
    bottom: 48px;
    right: 43px;
    animation: drop-four 2s ease-in-out infinite;
}
.Loader-bubble {
    position: absolute;
    border: 1px solid rgba(186, 230, 253, 0.5);
    border-radius: 50%;
    background: rgba(125, 211, 252, 0.08);
    box-shadow:
        inset -2px -2px 4px rgba(14, 165, 233, 0.12),
        0 0 6px rgba(56, 189, 248, 0.3);
}
.Loader-bubble--one {
    width: 8px;
    height: 8px;
    left: 52px;
    bottom: 62px;
    animation: bubble-one 2.5s ease-in-out infinite;
}
.Loader-bubble--two {
    width: 5px;
    height: 5px;
    right: 53px;
    bottom: 58px;
    animation: bubble-two 2s ease-in-out infinite;
}
.Loader-bubble--three {
    width: 11px;
    height: 11px;
    right: 76px;
    bottom: 30px;
    animation: bubble-three 3s ease-in-out infinite;
}
.Loader-core {
    position: absolute;
    width: 92px;
    height: 92px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(125, 211, 252, 0.2),
        transparent 42%
    ), #02131f;
    border: 2px solid rgba(56, 189, 248, 0.7);
    box-shadow:
        0 0 12px rgba(56, 189, 248, 0.8),
        0 0 30px rgba(14, 165, 233, 0.5),
        inset 0 0 22px rgba(34, 211, 238, 0.2);
    z-index: 6;
    animation: core-pulse 2s ease-in-out infinite;
}
.Loader-core-inner {
    position: relative;
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        #67e8f9,
        #0ea5e9 30%,
        #0369a1 58%,
        #020617
    );
    box-shadow:
        0 0 12px #38bdf8,
        0 0 22px rgba(14, 165, 233, 0.8),
        inset 0 0 14px rgba(224, 242, 254, 0.3);
}
.Loader-core-inner::before {
    content: "";
    position: absolute;
    inset: -5px;
    border: 1px solid rgba(224, 242, 254, 0.35);
    border-radius: 50%;
}
.Loader-core-inner i {
    position: relative;
    color: #e0f2fe;
    font-size: 22px;
    text-shadow:
        0 0 7px #e0f2fe,
        0 0 15px #38bdf8,
        0 0 26px #0ea5e9;
    animation: water-icon 1.2s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 112px;
    height: 112px;
    border-radius: 50%;
    border: 1px solid rgba(125, 211, 252, 0.22);
    z-index: 5;
    animation: core-ring-spin 1.7s linear infinite;
}
.Loader-core-ring--two {
    width: 130px;
    height: 130px;
    border-color: rgba(56, 189, 248, 0.12);
    animation-duration: 2.5s;
    animation-direction: reverse;
}
.Loader-core-ring::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #bae6fd;
    box-shadow:
        0 0 7px #bae6fd,
        0 0 18px #38bdf8;
}
.Loader-stream {
    position: absolute;
    width: 3px;
    height: 32px;
    border-radius: 999px;
    background: linear-gradient(
        to bottom,
        transparent,
        #7dd3fc,
        #22d3ee,
        transparent
    );
    box-shadow: 0 0 8px #38bdf8;
    z-index: 7;
}
.Loader-stream--one {
    top: 30px;
    left: 105px;
    transform: rotate(8deg);
    animation: stream-one 1.3s ease-in-out infinite;
}
.Loader-stream--two {
    top: 34px;
    right: 93px;
    transform: rotate(-12deg);
    animation: stream-two 1.7s ease-in-out infinite;
}
.Loader-stream--three {
    bottom: 31px;
    left: 106px;
    transform: rotate(15deg);
    animation: stream-three 1.5s ease-in-out infinite;
}
.Loader-surface {
    position: absolute;
    width: 150px;
    height: 42px;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border-top: 1px solid rgba(186, 230, 253, 0.3);
    box-shadow:
        0 -5px 16px rgba(56, 189, 248, 0.1),
        inset 0 5px 12px rgba(125, 211, 252, 0.04);
    animation: surface-wave 2s ease-in-out infinite;
}
@keyframes aqua-mist {
    0%,
    100% {
        transform: scale(0.85);
        opacity: 0.4;
    }
    50% {
        transform: scale(1.08);
        opacity: 0.9;
    }
}
@keyframes water-aura {
    0%,
    100% {
        transform: scale(0.9);
        opacity: 0.4;
    }
    50% {
        transform: scale(1.08);
        opacity: 1;
    }
}
@keyframes aqua-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes vortex-spin {
    from {
        transform: rotate(0deg) scale(0.96);
    }
    to {
        transform: rotate(360deg) scale(1.04);
    }
}
@keyframes drop-one {
    0%,
    100% {
        transform: translateY(0) scale(0.8);
        opacity: 0.4;
    }
    50% {
        transform: translateY(-12px) scale(1.1);
        opacity: 1;
    }
}
@keyframes drop-two {
    0%,
    100% {
        transform: translateY(0) scale(0.75);
        opacity: 0.35;
    }
    50% {
        transform: translateY(-15px) scale(1.1);
        opacity: 1;
    }
}
@keyframes drop-three {
    0%,
    100% {
        transform: translateY(0) scale(0.75);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-11px) scale(1.08);
        opacity: 1;
    }
}
@keyframes drop-four {
    0%,
    100% {
        transform: translateY(0) scale(0.75);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-13px) scale(1.08);
        opacity: 1;
    }
}
@keyframes bubble-one {
    0% {
        transform: translateY(0) scale(0.5);
        opacity: 0;
    }
    20% {
        opacity: 0.7;
    }
    100% {
        transform: translate(-8px, -72px) scale(1);
        opacity: 0;
    }
}
@keyframes bubble-two {
    0% {
        transform: translateY(0) scale(0.4);
        opacity: 0;
    }
    20% {
        opacity: 0.7;
    }
    100% {
        transform: translate(10px, -68px) scale(1);
        opacity: 0;
    }
}
@keyframes bubble-three {
    0% {
        transform: translateY(0) scale(0.4);
        opacity: 0;
    }
    20% {
        opacity: 0.7;
    }
    100% {
        transform: translate(-10px, -90px) scale(1);
        opacity: 0;
    }
}
@keyframes core-pulse {
    0%,
    100% {
        transform: scale(0.96);
    }
    50% {
        transform: scale(1.04);
    }
}
@keyframes core-ring-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes water-icon {
    0%,
    100% {
        transform: translateY(2px) scale(0.92);
    }
    50% {
        transform: translateY(-2px) scale(1.08);
    }
}
@keyframes stream-one {
    0%,
    100% {
        transform: rotate(8deg) translateY(4px);
        opacity: 0.25;
    }
    50% {
        transform: rotate(8deg) translateY(-7px);
        opacity: 1;
    }
}
@keyframes stream-two {
    0%,
    100% {
        transform: rotate(-12deg) translateY(4px);
        opacity: 0.25;
    }
    50% {
        transform: rotate(-12deg) translateY(-8px);
        opacity: 1;
    }
}
@keyframes stream-three {
    0%,
    100% {
        transform: rotate(15deg) translateY(-4px);
        opacity: 0.2;
    }
    50% {
        transform: rotate(15deg) translateY(7px);
        opacity: 1;
    }
}
@keyframes surface-wave {
    0%,
    100% {
        transform: translateX(-50%) scaleX(0.9);
        opacity: 0.4;
    }
    50% {
        transform: translateX(-50%) scaleX(1.08);
        opacity: 1;
    }
}`,
  },

  {
    id: 2074,
    name: "Legendary Inferno Core",
    preview: (
      <div className="loader-2074">
        <div className="loader-2074__heat"></div>
        <div className="loader-2074__aura"></div>
        <div className="loader-2074__outer-ring"></div>
        <div className="loader-2074__outer-ring loader-2074__outer-ring--two"></div>
        <div className="loader-2074__outer-ring loader-2074__outer-ring--three"></div>
        <div className="loader-2074__fire-ring"></div>
        <div className="loader-2074__fire-ring loader-2074__fire-ring--two"></div>
        <div className="loader-2074__fire-ring loader-2074__fire-ring--three"></div>
        <div className="loader-2074__flame loader-2074__flame--one"></div>
        <div className="loader-2074__flame loader-2074__flame--two"></div>
        <div className="loader-2074__flame loader-2074__flame--three"></div>
        <div className="loader-2074__flame loader-2074__flame--four"></div>
        <div className="loader-2074__flame loader-2074__flame--five"></div>
        <div className="loader-2074__core">
          <div className="loader-2074__core-shell">
            <div className="loader-2074__core-inner">
              <i className="fa-solid fa-fire"></i>
            </div>
          </div>
        </div>
        <div className="loader-2074__core-ring"></div>
        <div className="loader-2074__core-ring loader-2074__core-ring--two"></div>
        <div className="loader-2074__ember loader-2074__ember--one"></div>
        <div className="loader-2074__ember loader-2074__ember--two"></div>
        <div className="loader-2074__ember loader-2074__ember--three"></div>
        <div className="loader-2074__ember loader-2074__ember--four"></div>
        <div className="loader-2074__ember loader-2074__ember--five"></div>
        <div className="loader-2074__ember loader-2074__ember--six"></div>
        <div className="loader-2074__spark loader-2074__spark--one"></div>
        <div className="loader-2074__spark loader-2074__spark--two"></div>
        <div className="loader-2074__spark loader-2074__spark--three"></div>
        <div className="loader-2074__spark loader-2074__spark--four"></div>
        <div className="loader-2074__smoke"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-heat"></div>
    <div class="Loader-aura"></div>
    <div class="Loader-outer-ring"></div>
    <div class="Loader-outer-ring Loader-outer-ring--two"></div>
    <div class="Loader-outer-ring Loader-outer-ring--three"></div>
    <div class="Loader-fire-ring"></div>
    <div class="Loader-fire-ring Loader-fire-ring--two"></div>
    <div class="Loader-fire-ring Loader-fire-ring--three"></div>
    <div class="Loader-flame Loader-flame--one"></div>
    <div class="Loader-flame Loader-flame--two"></div>
    <div class="Loader-flame Loader-flame--three"></div>
    <div class="Loader-flame Loader-flame--four"></div>
    <div class="Loader-flame Loader-flame--five"></div>
    <div class="Loader-core">
        <div class="Loader-core-shell">
            <div class="Loader-core-inner">
                <i class="fa-solid fa-fire"></i>
            </div>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-ember Loader-ember--one"></div>
    <div class="Loader-ember Loader-ember--two"></div>
    <div class="Loader-ember Loader-ember--three"></div>
    <div class="Loader-ember Loader-ember--four"></div>
    <div class="Loader-ember Loader-ember--five"></div>
    <div class="Loader-ember Loader-ember--six"></div>
    <div class="Loader-spark Loader-spark--one"></div>
    <div class="Loader-spark Loader-spark--two"></div>
    <div class="Loader-spark Loader-spark--three"></div>
    <div class="Loader-spark Loader-spark--four"></div>
    <div class="Loader-smoke"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 240px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}
.Loader-heat {
    position: absolute;
    width: 195px;
    height: 195px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(251,191,36,.32),
            rgba(249,115,22,.18) 34%,
            rgba(220,38,38,.1) 58%,
            transparent 78%
        );
    filter: blur(20px);
    animation: fire-heat 2.5s ease-in-out infinite;
}
.Loader-aura {
    position: absolute;
    width: 145px;
    height: 180px;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50% 50% 42% 42%;
    background:
        radial-gradient(
            ellipse,
            rgba(253,224,71,.24),
            rgba(249,115,22,.14) 38%,
            rgba(185,28,28,.08) 64%,
            transparent 79%
        );
    filter: blur(17px);
    animation: fire-aura 1.7s ease-in-out infinite;
}
.Loader-outer-ring {
    position: absolute;
    inset: 15px;
    border-radius: 50%;
    border: 2px solid rgba(251,146,60,.12);
    animation: fire-spin 6.5s linear infinite;
}
.Loader-outer-ring::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fde68a;
    box-shadow:
        0 0 7px #fde68a,
        0 0 16px #f59e0b,
        0 0 28px rgba(249,115,22,.8);
}
.Loader-outer-ring--two {
    inset: 28px;
    border-color: rgba(239,68,68,.13);
    animation-duration: 4.3s;
    animation-direction: reverse;
}
.Loader-outer-ring--two::before {
    top: auto;
    bottom: -4px;
    background: #fb923c;
    box-shadow:
        0 0 7px #fb923c,
        0 0 16px #ef4444,
        0 0 28px rgba(239,68,68,.7);
}
.Loader-outer-ring--three {
    inset: 42px;
    border-style: dashed;
    border-color: rgba(251,191,36,.12);
    animation-duration: 3s;
}
.Loader-fire-ring {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 12deg,
            #fbbf24 18deg,
            #f97316 26deg,
            transparent 36deg,
            transparent 68deg,
            #ef4444 75deg,
            #f97316 84deg,
            transparent 94deg,
            transparent 121deg,
            #fde047 128deg,
            #f59e0b 138deg,
            transparent 148deg,
            transparent 178deg,
            #ef4444 185deg,
            #fb923c 194deg,
            transparent 205deg,
            transparent 237deg,
            #fbbf24 245deg,
            #f97316 255deg,
            transparent 266deg,
            transparent 303deg,
            #ef4444 312deg,
            #fb7185 319deg,
            transparent 331deg,
            transparent 355deg,
            #facc15
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 67%,
            #000 68% 73%,
            transparent 74%
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 67%,
            #000 68% 73%,
            transparent 74%
        );
    filter:
        drop-shadow(0 0 5px #f97316)
        drop-shadow(0 0 12px rgba(239,68,68,.55));
    animation: fire-ring-spin 1.9s linear infinite;
}
.Loader-fire-ring--two {
    inset: 18px;
    opacity: .72;
    animation-duration: 1.25s;
    animation-direction: reverse;
}
.Loader-fire-ring--three {
    inset: 31px;
    opacity: .48;
    animation-duration: 3s;
}
.Loader-flame {
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform-origin: 50% 100%;
    border-radius: 55% 16% 55% 16%;
    background:
        linear-gradient(
            150deg,
            #fff7ed 0%,
            #fde68a 22%,
            #f97316 58%,
            #dc2626 100%
        );
    box-shadow:
        0 0 8px #f97316,
        0 0 16px rgba(239,68,68,.7);
    z-index: 3;
}
.Loader-flame::before {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: inherit;
    background:
        linear-gradient(
            150deg,
            #fff,
            #fef08a 30%,
            #fb923c 65%,
            #dc2626
        );
}
.Loader-flame::after {
    content: "";
    position: absolute;
    width: 32%;
    height: 34%;
    left: 18%;
    top: 12%;
    border-radius: 50%;
    background: rgba(255,255,255,.72);
    filter: blur(4px);
}
.Loader-flame--one {
    width: 29px;
    height: 87px;
    transform: translateX(-50%) rotate(-16deg);
    animation: flame-one 1s ease-in-out infinite;
}
.Loader-flame--two {
    width: 24px;
    height: 74px;
    transform: translateX(-50%) rotate(14deg);
    animation: flame-two .85s ease-in-out infinite;
    animation-delay: -.18s;
}
.Loader-flame--three {
    width: 18px;
    height: 59px;
    transform: translateX(-50%) translateX(-28px) rotate(-29deg);
    animation: flame-three 1.2s ease-in-out infinite;
    animation-delay: -.4s;
}
.Loader-flame--four {
    width: 19px;
    height: 64px;
    transform: translateX(-50%) translateX(28px) rotate(27deg);
    animation: flame-four 1.08s ease-in-out infinite;
    animation-delay: -.3s;
}
.Loader-flame--five {
    width: 13px;
    height: 46px;
    transform: translateX(-50%) rotate(-2deg);
    animation: flame-five .7s ease-in-out infinite;
    animation-delay: -.08s;
}
.Loader-core {
    position: absolute;
    width: 96px;
    height: 96px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 50% 37%,
            rgba(254,240,138,.22),
            transparent 45%
        ),
        #140805;
    border: 2px solid rgba(251,146,60,.7);
    box-shadow:
        0 0 13px rgba(249,115,22,.75),
        0 0 30px rgba(239,68,68,.5),
        0 0 62px rgba(220,38,38,.23),
        inset 0 0 25px rgba(249,115,22,.2);
    z-index: 8;
    animation: core-fire 1.7s ease-in-out infinite;
}
.Loader-core-shell {
    position: relative;
    width: 70px;
    height: 70px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #7c2d12 0%,
            #9a3412 28%,
            #431407 54%,
            #140805 82%
        );
    border: 1px solid rgba(254,215,170,.48);
    box-shadow:
        inset 0 0 18px rgba(249,115,22,.38),
        0 0 15px rgba(249,115,22,.28);
}
.Loader-core-shell::before {
    content: "";
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    border: 1px solid rgba(253,186,116,.14);
}
.Loader-core-shell::after {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 1px dashed rgba(251,191,36,.24);
    animation: shell-fire-spin 3s linear infinite;
}
.Loader-core-inner {
    position: relative;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #fef3c7 0%,
            #fbbf24 25%,
            #f97316 50%,
            #7f1d1d 77%
        );
    box-shadow:
        0 0 11px #f97316,
        0 0 23px rgba(249,115,22,.8),
        inset 0 0 13px rgba(255,255,255,.22);
    animation: inner-fire 1.1s ease-in-out infinite;
}
.Loader-core-inner::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(254,240,138,.38);
}
.Loader-core-inner i {
    position: relative;
    color: #fff7ed;
    font-size: 21px;
    text-shadow:
        0 0 6px #fff7ed,
        0 0 13px #fbbf24,
        0 0 25px #f97316;
    animation: fire-icon .72s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 114px;
    height: 114px;
    border-radius: 50%;
    border: 1px solid rgba(251,146,60,.25);
    z-index: 7;
    animation: core-ring-fire 1.45s linear infinite;
}
.Loader-core-ring::before,
.Loader-core-ring::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}
.Loader-core-ring::before {
    width: 7px;
    height: 7px;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #fde68a;
    box-shadow:
        0 0 6px #fde68a,
        0 0 16px #f59e0b;
}
.Loader-core-ring::after {
    width: 4px;
    height: 4px;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    background: #fb923c;
    box-shadow:
        0 0 6px #fb923c,
        0 0 13px #ef4444;
}
.Loader-core-ring--two {
    width: 130px;
    height: 130px;
    border-color: rgba(239,68,68,.15);
    animation-duration: 2.1s;
    animation-direction: reverse;
}
.Loader-core-ring--two::before {
    top: auto;
    bottom: 7px;
    left: auto;
    right: 8px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #facc15;
}
.Loader-core-ring--two::after {
    top: 9px;
    right: auto;
    left: 8px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #fb7185;
}
.Loader-ember {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fde68a;
    box-shadow:
        0 0 6px #fde68a,
        0 0 14px #f97316,
        0 0 22px rgba(239,68,68,.7);
    z-index: 9;
}
.Loader-ember--one {
    left: 61px;
    top: 59px;
    animation: ember-one 2s linear infinite;
}
.Loader-ember--two {
    right: 54px;
    top: 52px;
    animation: ember-two 1.65s linear infinite;
    animation-delay: -.4s;
}
.Loader-ember--three {
    left: 45px;
    top: 119px;
    animation: ember-three 2.3s linear infinite;
    animation-delay: -.7s;
}
.Loader-ember--four {
    right: 37px;
    top: 127px;
    animation: ember-four 2.1s linear infinite;
    animation-delay: -.3s;
}
.Loader-ember--five {
    left: 87px;
    top: 42px;
    width: 4px;
    height: 4px;
    animation: ember-five 1.8s linear infinite;
    animation-delay: -.6s;
}
.Loader-ember--six {
    right: 82px;
    bottom: 48px;
    width: 4px;
    height: 4px;
    animation: ember-six 2.2s linear infinite;
    animation-delay: -.9s;
}
.Loader-spark {
    position: absolute;
    width: 4px;
    height: 15px;
    border-radius: 999px;
    background:
        linear-gradient(
            to bottom,
            #fff,
            #fde68a,
            #f97316,
            transparent
        );
    box-shadow:
        0 0 6px #fbbf24,
        0 0 13px #f97316;
    z-index: 10;
}
.Loader-spark--one {
    top: 42px;
    left: 82px;
    transform: rotate(28deg);
    animation: spark-one .9s ease-in-out infinite;
}
.Loader-spark--two {
    top: 47px;
    right: 71px;
    transform: rotate(-32deg);
    animation: spark-two 1.2s ease-in-out infinite;
    animation-delay: -.3s;
}
.Loader-spark--three {
    bottom: 50px;
    left: 69px;
    transform: rotate(-20deg);
    animation: spark-three 1.05s ease-in-out infinite;
    animation-delay: -.45s;
}
.Loader-spark--four {
    bottom: 40px;
    right: 73px;
    transform: rotate(22deg);
    animation: spark-four 1.35s ease-in-out infinite;
    animation-delay: -.6s;
}
.Loader-smoke {
    position: absolute;
    width: 120px;
    height: 70px;
    top: 23px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background:
        radial-gradient(
            ellipse,
            rgba(120,53,15,.16),
            transparent 72%
        );
    filter: blur(14px);
    animation: smoke-rise 2.4s ease-in-out infinite;
    z-index: 1;
}`,
  },
  {
    id: 2075,
    name: "Lightning Orb",
    preview: (
      <div className="loader-2075">
        <div className="loader-2075__orb">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <span className="loader-2075__arc loader-2075__arc--one"></span>
        <span className="loader-2075__arc loader-2075__arc--two"></span>
        <span className="loader-2075__spark loader-2075__spark--one"></span>
        <span className="loader-2075__spark loader-2075__spark--two"></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-orb">
        <i class="fa-solid fa-bolt"></i>
    </div>
    <span class="Loader-arc Loader-arc--one"></span>
    <span class="Loader-arc Loader-arc--two"></span>
    <span class="Loader-spark Loader-spark--one"></span>
    <span class="Loader-spark Loader-spark--two"></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 75px;
    height: 75px;
}
.Loader-orb {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#fef08a,#38bdf8 35%,#0369a1 75%);
    color: #fff;
    box-shadow:
        0 0 12px #22d3ee,
        0 0 28px #0ea5e9;
    z-index: 3;
    animation: lightning-pulse 0.8s ease-in-out infinite;
}
.Loader-orb i {
    text-shadow:
        0 0 5px #fff,
        0 0 12px #facc15;
}
.Loader-arc {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #67e8f9;
    border-left-color: #22d3ee;
    animation: lightning-spin 1s linear infinite;
}
.Loader-arc--two {
    inset: 13px;
    border-right-color: #60a5fa;
    border-bottom-color: #3b82f6;
    animation-duration: 0.7s;
    animation-direction: reverse;
}
.Loader-spark {
    position: absolute;
    width: 4px;
    height: 12px;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 0 10px #22d3ee;
}
.Loader-spark--one {
    top: 8px;
    left: 20px;
    transform: rotate(35deg);
    animation: lightning-spark-one 1s ease-in-out infinite;
}
.Loader-spark--two {
    right: 15px;
    bottom: 13px;
    transform: rotate(-45deg);
    animation: lightning-spark-two 1.2s ease-in-out infinite;
}`,
  },
  {
    id: 2076,
    name: "Toxic Plasma Loader",
    preview: (
      <div className="loader-2076">
        <div className="loader-2076__core">
          <i className="fa-solid fa-radiation"></i>
        </div>
        <div className="loader-2076__ring"></div>
        <div className="loader-2076__ring loader-2076__ring--two"></div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-radiation"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 78px;
    height: 78px;
}
.Loader-core {
    position: absolute;
    inset: 25px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #07110a;
    color: #bef264;
    box-shadow:
        0 0 12px #84cc16,
        0 0 26px rgba(132,204,22,.6),
        inset 0 0 12px rgba(190,242,100,.2);
    z-index: 3;
}
.Loader-core i {
    font-size: 13px;
    text-shadow: 0 0 10px #bef264;
    animation: plasma-pulse 0.9s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 9px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #bef264;
    border-right-color: #4d7c0f;
    animation: plasma-spin 1.3s linear infinite;
}
.Loader-ring--two {
    inset: 16px;
    border-left-color: #a3e635;
    border-bottom-color: #22c55e;
    animation-duration: 0.8s;
    animation-direction: reverse;
}
.Loader > span {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d9f99d;
    box-shadow: 0 0 8px #84cc16;
    left: 50%;
    top: 50%;
    animation: plasma-orbit 1.6s linear infinite;
}
.Loader > span:nth-of-type(2) {
    animation-delay: -0.5s;
}
.Loader > span:nth-of-type(3) {
    animation-delay: -1s;
}`,
  },
  {
    id: 2077,
    name: "Solar Flare Loader",
    preview: (
      <div className="loader-2077">
        <div className="loader-2077__flare"></div>
        <div className="loader-2077__sun">
          <i className="fa-solid fa-sun"></i>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-flare"></div>
    <div class="Loader-sun">
        <i class="fa-solid fa-sun"></i>
    </div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 80px;
    height: 80px;
}
.Loader-flare {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: conic-gradient(
        #fef08a,
        #f97316,
        #ef4444,
        #fbbf24,
        #fef08a
    );
    filter: blur(5px);
    opacity: .8;
    animation: solar-spin 1.8s linear infinite;
}
.Loader-sun {
    position: absolute;
    inset: 25px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#fff7ed,#facc15 45%,#ea580c);
    color: #fff;
    box-shadow:
        0 0 15px #facc15,
        0 0 30px #f97316;
    z-index: 2;
}
.Loader-sun i {
    font-size: 13px;
    animation: solar-pulse 0.9s ease-in-out infinite;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 13px;
    border-radius: 999px;
    background: #fef3c7;
    box-shadow: 0 0 8px #f59e0b;
    left: 50%;
    top: 50%;
    transform-origin: 50% 40px;
    animation: solar-rays 1.4s linear infinite;
}
.Loader > span:nth-of-type(2) {
    transform: translateX(-50%) rotate(90deg);
}
.Loader > span:nth-of-type(3) {
    transform: translateX(-50%) rotate(180deg);
}
.Loader > span:nth-of-type(4) {
    transform: translateX(-50%) rotate(270deg);
}`,
  },
  {
    id: 2078,
    name: "Cyber Pulse Loader",
    preview: (
      <div className="loader-2078">
        <div className="loader-2078__screen">
          <i className="fa-solid fa-microchip"></i>
        </div>
        <div className="loader-2078__pulse"></div>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-screen">
        <i class="fa-solid fa-microchip"></i>
    </div>
    <div class="Loader-pulse"></div>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 110px;
    height: 55px;
    display: grid;
    place-items: center;
    border: 1px solid #164e63;
    background: #020617;
    overflow: hidden;
}
.Loader-screen {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid #22d3ee;
    color: #67e8f9;
    background: #031014;
    box-shadow: 0 0 12px rgba(34,211,238,.35);
    z-index: 3;
}
.Loader-screen i {
    animation: cyber-pulse 0.8s ease-in-out infinite;
}
.Loader-pulse {
    position: absolute;
    left: -25px;
    width: 25px;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(34,211,238,.55),
        transparent
    );
    transform: skewX(-20deg);
    animation: cyber-scan 1.3s linear infinite;
}
.Loader > span {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #22d3ee;
    box-shadow: 0 0 8px #22d3ee;
}
.Loader > span:nth-of-type(1) {
    left: 13px;
    animation: cyber-dot-one 1.2s ease-in-out infinite;
}
.Loader > span:nth-of-type(2) {
    right: 13px;
    animation: cyber-dot-two 1.2s ease-in-out infinite;
}`,
  },
  {
    id: 2079,
    name: "Crystal Energy Loader",
    preview: (
      <div className="loader-2079">
        <div className="loader-2079__crystal">
          <i className="fa-solid fa-gem"></i>
        </div>
        <div className="loader-2079__halo"></div>
        <div className="loader-2079__halo loader-2079__halo--two"></div>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-crystal">
        <i class="fa-solid fa-gem"></i>
    </div>
    <div class="Loader-halo"></div>
    <div class="Loader-halo Loader-halo--two"></div>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 82px;
    height: 82px;
    display: grid;
    place-items: center;
}
.Loader-crystal {
    position: relative;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg,#e0f2fe,#a78bfa,#22d3ee);
    color: #fff;
    clip-path: polygon(
        50% 0,
        91% 25%,
        82% 78%,
        50% 100%,
        18% 78%,
        9% 25%
    );
    box-shadow: 0 0 20px #8b5cf6;
    z-index: 3;
    animation: crystal-float 1.6s ease-in-out infinite;
}
.Loader-crystal::before {
    content: "";
    position: absolute;
    inset: 5px;
    clip-path: inherit;
    background: linear-gradient(
        145deg,
        rgba(255,255,255,.8),
        rgba(103,232,249,.3)
    );
}
.Loader-crystal i {
    position: relative;
    z-index: 2;
    text-shadow:
        0 0 6px #fff,
        0 0 14px #22d3ee;
}
.Loader-halo {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #22d3ee;
    border-right-color: #a78bfa;
    animation: crystal-spin 1.3s linear infinite;
}
.Loader-halo--two {
    inset: 12px;
    border-bottom-color: #67e8f9;
    border-left-color: #8b5cf6;
    animation-duration: 0.9s;
    animation-direction: reverse;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #e0f2fe;
    box-shadow: 0 0 8px #22d3ee;
    left: 50%;
    top: 50%;
    animation: crystal-orbit 1.8s linear infinite;
}
.Loader > span:nth-of-type(2) {
    animation-delay: -.9s;
}`,
  },
  {
    id: 2080,
    name: "Shadow Orb Loader",
    preview: (
      <div className="loader-2080">
        <div className="loader-2080__orb">
          <i className="fa-solid fa-skull"></i>
        </div>
        <div className="loader-2080__ring"></div>
        <div className="loader-2080__ring loader-2080__ring--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-orb">
        <i class="fa-solid fa-skull"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 70px;
    height: 70px;
}
.Loader-orb {
    position: absolute;
    inset: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#27272a,#09090b 70%);
    color: #a1a1aa;
    box-shadow:
        0 0 12px rgba(0,0,0,.8),
        inset 0 0 14px #000;
    z-index: 2;
}
.Loader-orb i {
    font-size: 12px;
    text-shadow: 0 0 8px #71717a;
    animation: shadow-pulse .9s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 5px;
    border: 2px solid transparent;
    border-top-color: #71717a;
    border-left-color: #3f3f46;
    border-radius: 50%;
    animation: shadow-spin 1.6s linear infinite;
}
.Loader-ring--two {
    inset: 13px;
    border-right-color: #a1a1aa;
    border-bottom-color: #18181b;
    animation-duration: .9s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2081,
    name: "Moonlight Loader",
    preview: (
      <div className="loader-2081">
        <div className="loader-2081__moon">
          <i className="fa-solid fa-moon"></i>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-moon">
        <i class="fa-solid fa-moon"></i>
    </div>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 75px;
    height: 75px;
}
.Loader-moon {
    position: absolute;
    inset: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#fefce8,#dbeafe 58%,#94a3b8);
    color: #334155;
    box-shadow:
        0 0 18px rgba(219,234,254,.75),
        0 0 35px rgba(191,219,254,.35);
    z-index: 2;
}
.Loader-moon i {
    animation: moon-pulse 1.5s ease-in-out infinite;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f8fafc;
    box-shadow: 0 0 7px #dbeafe;
    left: 50%;
    top: 50%;
    animation: moon-orbit 2s linear infinite;
}
.Loader > span:nth-of-type(2) {
    animation-delay: -.65s;
}
.Loader > span:nth-of-type(3) {
    animation-delay: -1.3s;
}`,
  },
  {
    id: 2082,
    name: "Frost Crystal Loader",
    preview: (
      <div className="loader-2082">
        <div className="loader-2082__crystal">
          <i className="fa-solid fa-snowflake"></i>
        </div>
        <div className="loader-2082__ring"></div>
        <div className="loader-2082__ring loader-2082__ring--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-crystal">
        <i class="fa-solid fa-snowflake"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 78px;
    height: 78px;
}
.Loader-crystal {
    position: absolute;
    inset: 24px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: linear-gradient(145deg,#ffffff,#bae6fd 45%,#38bdf8);
    color: #075985;
    transform: rotate(45deg);
    box-shadow:
        0 0 16px #7dd3fc,
        0 0 30px rgba(56,189,248,.45);
    z-index: 2;
}
.Loader-crystal i {
    transform: rotate(-45deg);
    animation: frost-pulse 1s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #e0f2fe;
    border-right-color: #7dd3fc;
    animation: frost-spin 1.3s linear infinite;
}
.Loader-ring--two {
    inset: 15px;
    border-bottom-color: #0ea5e9;
    border-left-color: #bae6fd;
    animation-duration: .8s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2083,
    name: "Holy Light Loader",
    preview: (
      <div className="loader-2083">
        <div className="loader-2083__halo"></div>
        <div className="loader-2083__core">
          <i className="fa-solid fa-star"></i>
        </div>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-halo"></div>
    <div class="Loader-core">
        <i class="fa-solid fa-star"></i>
    </div>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 78px;
    height: 78px;
    display: grid;
    place-items: center;
}
.Loader-halo {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: conic-gradient(
        #fff,
        #fef3c7,
        #fde68a,
        #fff,
        #dbeafe,
        #fff
    );
    filter: blur(5px);
    opacity: .8;
    animation: holy-spin 2s linear infinite;
}
.Loader-core {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#fff,#fef3c7 45%,#fbbf24);
    color: #92400e;
    box-shadow:
        0 0 15px #fff,
        0 0 30px #fde68a;
    z-index: 2;
}
.Loader-core i {
    font-size: 12px;
    animation: holy-pulse .8s ease-in-out infinite;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 12px;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 0 9px #fff;
    top: 50%;
    left: 50%;
    transform-origin: center 39px;
}
.Loader > span:nth-of-type(1) {
    transform: translateX(-50%) rotate(45deg);
    animation: holy-ray 1.2s linear infinite;
}
.Loader > span:nth-of-type(2) {
    transform: translateX(-50%) rotate(225deg);
    animation: holy-ray 1.2s linear infinite reverse;
}`,
  },
  {
    id: 2084,
    name: "Void Portal Loader",
    preview: (
      <div className="loader-2084">
        <div className="loader-2084__void">
          <i className="fa-solid fa-infinity"></i>
        </div>
        <div className="loader-2084__ring"></div>
        <div className="loader-2084__ring loader-2084__ring--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-void">
        <i class="fa-solid fa-infinity"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 80px;
    height: 80px;
}
.Loader-void {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #000;
    color: #c084fc;
    box-shadow:
        0 0 18px rgba(168,85,247,.6),
        inset 0 0 15px #581c87;
    z-index: 2;
}
.Loader-void i {
    font-size: 13px;
    text-shadow: 0 0 10px #a855f7;
    animation: void-pulse 1s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #c084fc;
    border-right-color: #7e22ce;
    animation: void-spin 1.3s linear infinite;
}
.Loader-ring--two {
    inset: 15px;
    border-left-color: #e879f9;
    border-bottom-color: #4c1d95;
    animation-duration: .8s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2085,
    name: "Cloud Breeze Loader",
    preview: (
      <div className="loader-2085">
        <div className="loader-2085__cloud">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="loader-2085__wind"></div>
        <div className="loader-2085__wind loader-2085__wind--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-cloud">
        <i class="fa-solid fa-cloud"></i>
    </div>
    <div class="Loader-wind"></div>
    <div class="Loader-wind Loader-wind--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 100px;
    height: 55px;
}
.Loader-cloud {
    position: absolute;
    left: 28px;
    top: 12px;
    width: 44px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 20px;
    color: #64748b;
    background: linear-gradient(#fff,#e2e8f0);
    box-shadow:
        0 7px 15px rgba(148,163,184,.2),
        inset 0 -3px 6px rgba(100,116,139,.14);
    z-index: 2;
}
.Loader-cloud i {
    font-size: 14px;
    color: #94a3b8;
    animation: cloud-float 1.5s ease-in-out infinite;
}
.Loader-wind {
    position: absolute;
    width: 37px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg,transparent,#7dd3fc);
    left: -2px;
    top: 19px;
    animation: cloud-wind 1.2s linear infinite;
}
.Loader-wind--two {
    top: 34px;
    width: 47px;
    animation-delay: -.5s;
}`,
  },
  {
    id: 2086,
    name: "Ember Darkness Loader",
    preview: (
      <div className="loader-2086">
        <div className="loader-2086__core">
          <i className="fa-solid fa-fire"></i>
        </div>
        <div className="loader-2086__ring"></div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-core">
        <i class="fa-solid fa-fire"></i>
    </div>
    <div class="Loader-ring"></div>
    <span></span>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 75px;
    height: 75px;
}
.Loader-core {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #120b08;
    color: #fb923c;
    box-shadow:
        0 0 12px #ea580c,
        0 0 25px rgba(234,88,12,.5);
    z-index: 2;
}
.Loader-core i {
    text-shadow: 0 0 8px #f97316;
    animation: ember-fire .7s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 2px dashed #9a3412;
    animation: ember-spin 1.5s linear infinite;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fed7aa;
    box-shadow: 0 0 8px #f97316;
    left: 50%;
    top: 50%;
    animation: ember-orbit 1.6s linear infinite;
}
.Loader > span:nth-of-type(2) {
    animation-delay: -.5s;
}
.Loader > span:nth-of-type(3) {
    animation-delay: -1s;
}`,
  },
  {
    id: 2087,
    name: "Ocean Pearl Loader",
    preview: (
      <div className="loader-2087">
        <div className="loader-2087__pearl">
          <i className="fa-solid fa-gem"></i>
        </div>
        <div className="loader-2087__ring"></div>
        <div className="loader-2087__ring loader-2087__ring--two"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-pearl">
        <i class="fa-solid fa-gem"></i>
    </div>
    <div class="Loader-ring"></div>
    <div class="Loader-ring Loader-ring--two"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 76px;
    height: 76px;
}
.Loader-pearl {
    position: absolute;
    inset: 23px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: radial-gradient(circle,#ecfeff,#67e8f9 45%,#0369a1);
    color: #ecfeff;
    box-shadow:
        0 0 15px #22d3ee,
        0 0 30px rgba(6,182,212,.5);
    z-index: 2;
}
.Loader-pearl i {
    font-size: 12px;
    text-shadow: 0 0 7px #fff;
    animation: pearl-pulse 1.1s ease-in-out infinite;
}
.Loader-ring {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #67e8f9;
    border-left-color: #06b6d4;
    animation: pearl-spin 1.5s linear infinite;
}
.Loader-ring--two {
    inset: 14px;
    border-right-color: #38bdf8;
    border-bottom-color: #0369a1;
    animation-duration: .9s;
    animation-direction: reverse;
}`,
  },
  {
    id: 2088,
    name: "Aurora Mist Loader",
    preview: (
      <div className="loader-2088">
        <div className="loader-2088__aurora"></div>
        <div className="loader-2088__core">
          <i className="fa-solid fa-sparkles"></i>
        </div>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aurora"></div>
    <div class="Loader-core">
        <i class="fa-solid fa-sparkles"></i>
    </div>
    <span></span>
    <span></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 82px;
    height: 82px;
    display: grid;
    place-items: center;
}
.Loader-aurora {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background:
        conic-gradient(
            #22d3ee,
            #8b5cf6,
            #ec4899,
            #22c55e,
            #22d3ee
        );
    filter: blur(7px);
    opacity: .65;
    animation: aurora-spin 2.8s linear infinite;
}
.Loader-core {
    position: absolute;
    inset: 25px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #07111b;
    color: #fff;
    box-shadow:
        0 0 15px rgba(139,92,246,.5),
        inset 0 0 12px rgba(34,211,238,.3);
    z-index: 2;
}
.Loader-core i {
    font-size: 13px;
    animation: aurora-pulse 1s ease-in-out infinite;
}
.Loader > span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 8px #ec4899;
    left: 50%;
    top: 50%;
    animation: aurora-orbit 1.8s linear infinite;
}
.Loader > span:nth-of-type(2) {
    animation-delay: -.9s;
}`,
  },
  {
    id: 2089,
    name: "Eclipse Loader",
    preview: (
      <div className="loader-2089">
        <div className="loader-2089__sun"></div>
        <div className="loader-2089__moon"></div>
        <div className="loader-2089__corona"></div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-sun"></div>
    <div class="Loader-moon"></div>
    <div class="Loader-corona"></div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 85px;
    height: 85px;
}
.Loader-sun {
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    background: radial-gradient(circle,#fff7ed,#facc15,#f97316);
    box-shadow:
        0 0 14px #facc15,
        0 0 30px rgba(249,115,22,.7);
}
.Loader-moon {
    position: absolute;
    width: 49px;
    height: 49px;
    top: 9px;
    left: 7px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 0 0 8px #000;
    z-index: 3;
    animation: eclipse-move 2.4s ease-in-out infinite;
}
.Loader-corona {
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fde68a;
    border-right-color: #fb923c;
    box-shadow: 0 0 8px rgba(251,191,36,.45);
    animation: eclipse-spin 1.8s linear infinite;
}`,
  },
  {
    id: 2090,
    name: "Legendary Evil Void",
    preview: (
      <div className="loader-2090">
        <div className="loader-2090__void-aura"></div>
        <div className="loader-2090__black-hole"></div>
        <div className="loader-2090__smoke"></div>
        <div className="loader-2090__outer-ring"></div>
        <div className="loader-2090__outer-ring loader-2090__outer-ring--two"></div>
        <div className="loader-2090__outer-ring loader-2090__outer-ring--three"></div>
        <div className="loader-2090__void-ring"></div>
        <div className="loader-2090__void-ring loader-2090__void-ring--two"></div>
        <div className="loader-2090__void-ring loader-2090__void-ring--three"></div>
        <div className="loader-2090__spike loader-2090__spike--one"></div>
        <div className="loader-2090__spike loader-2090__spike--two"></div>
        <div className="loader-2090__spike loader-2090__spike--three"></div>
        <div className="loader-2090__spike loader-2090__spike--four"></div>
        <div className="loader-2090__spike loader-2090__spike--five"></div>
        <div className="loader-2090__spike loader-2090__spike--six"></div>
        <div className="loader-2090__core">
          <div className="loader-2090__core-shell">
            <div className="loader-2090__core-inner">
              <i className="fa-solid fa-skull"></i>
            </div>
          </div>
        </div>
        <div className="loader-2090__core-ring"></div>
        <div className="loader-2090__core-ring loader-2090__core-ring--two"></div>
        <div className="loader-2090__eye loader-2090__eye--left"></div>
        <div className="loader-2090__eye loader-2090__eye--right"></div>
        <div className="loader-2090__particle loader-2090__particle--one"></div>
        <div className="loader-2090__particle loader-2090__particle--two"></div>
        <div className="loader-2090__particle loader-2090__particle--three"></div>
        <div className="loader-2090__particle loader-2090__particle--four"></div>
        <div className="loader-2090__particle loader-2090__particle--five"></div>
        <div className="loader-2090__particle loader-2090__particle--six"></div>
        <div className="loader-2090__ember loader-2090__ember--one"></div>
        <div className="loader-2090__ember loader-2090__ember--two"></div>
        <div className="loader-2090__ember loader-2090__ember--three"></div>
        <div className="loader-2090__ember loader-2090__ember--four"></div>
        <div className="loader-2090__ember loader-2090__ember--five"></div>
        <div className="loader-2090__slash loader-2090__slash--one"></div>
        <div className="loader-2090__slash loader-2090__slash--two"></div>
        <div className="loader-2090__slash loader-2090__slash--three"></div>
        <div className="loader-2090__scan"></div>
        <div className="loader-2090__pulse"></div>
        <div className="loader-2090__danger">
          <span>VOID</span>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-void-aura"></div>
    <div class="Loader-black-hole"></div>
    <div class="Loader-smoke"></div>
    <div class="Loader-outer-ring"></div>
    <div class="Loader-outer-ring Loader-outer-ring--two"></div>
    <div class="Loader-outer-ring Loader-outer-ring--three"></div>
    <div class="Loader-void-ring"></div>
    <div class="Loader-void-ring Loader-void-ring--two"></div>
    <div class="Loader-void-ring Loader-void-ring--three"></div>
    <div class="Loader-spike Loader-spike--one"></div>
    <div class="Loader-spike Loader-spike--two"></div>
    <div class="Loader-spike Loader-spike--three"></div>
    <div class="Loader-spike Loader-spike--four"></div>
    <div class="Loader-spike Loader-spike--five"></div>
    <div class="Loader-spike Loader-spike--six"></div>
    <div class="Loader-core">
        <div class="Loader-core-shell">
            <div class="Loader-core-inner">
                <i class="fa-solid fa-skull"></i>
            </div>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-eye Loader-eye--left"></div>
    <div class="Loader-eye Loader-eye--right"></div>
    <div class="Loader-particle Loader-particle--one"></div>
    <div class="Loader-particle Loader-particle--two"></div>
    <div class="Loader-particle Loader-particle--three"></div>
    <div class="Loader-particle Loader-particle--four"></div>
    <div class="Loader-particle Loader-particle--five"></div>
    <div class="Loader-particle Loader-particle--six"></div>
    <div class="Loader-ember Loader-ember--one"></div>
    <div class="Loader-ember Loader-ember--two"></div>
    <div class="Loader-ember Loader-ember--three"></div>
    <div class="Loader-ember Loader-ember--four"></div>
    <div class="Loader-ember Loader-ember--five"></div>
    <div class="Loader-slash Loader-slash--one"></div>
    <div class="Loader-slash Loader-slash--two"></div>
    <div class="Loader-slash Loader-slash--three"></div>
    <div class="Loader-scan"></div>
    <div class="Loader-pulse"></div>
    <div class="Loader-danger">
        <span>VOID</span>
    </div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 260px;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    overflow: visible;
}
.Loader-void-aura {
    position: absolute;
    width: 225px;
    height: 225px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(0,0,0,.95) 0%,
            rgba(9,9,11,.85) 34%,
            rgba(24,24,27,.45) 55%,
            rgba(63,63,70,.12) 70%,
            transparent 80%
        );
    filter: blur(17px);
    animation: evil-aura 3s ease-in-out infinite;
}
.Loader-black-hole {
    position: absolute;
    width: 155px;
    height: 155px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #000 0%,
            #030305 42%,
            #09090b 61%,
            #18181b 72%,
            transparent 78%
        );
    box-shadow:
        0 0 18px rgba(0,0,0,.95),
        0 0 40px rgba(0,0,0,.8),
        0 0 70px rgba(127,29,29,.22),
        inset 0 0 30px #000;
    z-index: 2;
    animation: black-hole 2.6s ease-in-out infinite;
}
.Loader-black-hole::before {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 1px solid rgba(127,29,29,.22);
    box-shadow:
        0 0 20px rgba(127,29,29,.18),
        inset 0 0 15px rgba(0,0,0,.9);
}
.Loader-black-hole::after {
    content: "";
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #000 0 48%,
            rgba(24,24,27,.2) 72%,
            transparent 80%
        );
}
.Loader-smoke {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(82,82,91,.13),
            transparent 20%,
            rgba(39,39,42,.2),
            transparent 40%,
            rgba(113,113,122,.1),
            transparent 62%,
            rgba(39,39,42,.18),
            transparent 80%
        );
    filter: blur(9px);
    animation: smoke-spin 5s linear infinite;
    z-index: 1;
}
.Loader-outer-ring {
    position: absolute;
    inset: 13px;
    border-radius: 50%;
    border: 2px solid rgba(82,82,91,.2);
    animation: evil-spin-one 8s linear infinite;
}
.Loader-outer-ring::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #52525b;
    box-shadow:
        0 0 7px #71717a,
        0 0 18px rgba(113,113,122,.6);
}
.Loader-outer-ring--two {
    inset: 27px;
    border-color: rgba(127,29,29,.18);
    animation-duration: 5.5s;
    animation-direction: reverse;
}
.Loader-outer-ring--two::before {
    top: auto;
    bottom: -4px;
    background: #dc2626;
    box-shadow:
        0 0 7px #dc2626,
        0 0 17px rgba(220,38,38,.75);
}
.Loader-outer-ring--three {
    inset: 42px;
    border-style: dashed;
    border-color: rgba(63,63,70,.2);
    animation-duration: 3.6s;
}
.Loader-void-ring {
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 13deg,
            #27272a 18deg,
            #dc2626 23deg,
            transparent 31deg,
            transparent 56deg,
            #52525b 64deg,
            #991b1b 71deg,
            transparent 80deg,
            transparent 111deg,
            #ef4444 118deg,
            #3f3f46 126deg,
            transparent 137deg,
            transparent 168deg,
            #71717a 176deg,
            #7f1d1d 184deg,
            transparent 194deg,
            transparent 230deg,
            #dc2626 238deg,
            #27272a 246deg,
            transparent 258deg,
            transparent 292deg,
            #52525b 299deg,
            #b91c1c 307deg,
            transparent 318deg,
            transparent 349deg,
            #ef4444 356deg
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 74%,
            transparent 75%
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 74%,
            transparent 75%
        );
    filter:
        drop-shadow(0 0 4px #7f1d1d)
        drop-shadow(0 0 10px rgba(220,38,38,.28));
    animation: void-ring-spin 2.2s linear infinite;
    z-index: 3;
}
.Loader-void-ring--two {
    inset: 22px;
    opacity: .68;
    animation-duration: 1.45s;
    animation-direction: reverse;
}
.Loader-void-ring--three {
    inset: 36px;
    opacity: .42;
    animation-duration: 3.4s;
}
.Loader-spike {
    position: absolute;
    width: 3px;
    height: 25px;
    background:
        linear-gradient(
            to bottom,
            transparent,
            #7f1d1d,
            #dc2626,
            transparent
        );
    box-shadow:
        0 0 6px rgba(220,38,38,.7),
        0 0 14px rgba(127,29,29,.5);
    z-index: 4;
    transform-origin: center 96px;
    animation: spike-pulse 1.8s ease-in-out infinite;
}
.Loader-spike--one {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
}
.Loader-spike--two {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(60deg);
    animation-delay: -.3s;
}
.Loader-spike--three {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(120deg);
    animation-delay: -.6s;
}
.Loader-spike--four {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    animation-delay: -.9s;
}
.Loader-spike--five {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(240deg);
    animation-delay: -1.2s;
}
.Loader-spike--six {
    top: 34px;
    left: 50%;
    transform: translateX(-50%) rotate(300deg);
    animation-delay: -1.5s;
}
.Loader-core {
    position: absolute;
    width: 104px;
    height: 104px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 50% 38%,
            rgba(127,29,29,.2),
            transparent 42%
        ),
        #050505;
    border: 2px solid rgba(82,82,91,.55);
    box-shadow:
        0 0 13px rgba(0,0,0,.95),
        0 0 30px rgba(127,29,29,.35),
        0 0 55px rgba(0,0,0,.9),
        inset 0 0 28px rgba(0,0,0,1);
    z-index: 8;
    animation: evil-core 1.9s ease-in-out infinite;
}
.Loader-core-shell {
    position: relative;
    width: 76px;
    height: 76px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #18181b 0%,
            #09090b 45%,
            #000 78%
        );
    border: 1px solid rgba(127,29,29,.45);
    box-shadow:
        inset 0 0 20px #000,
        0 0 15px rgba(127,29,29,.25);
}
.Loader-core-shell::before {
    content: "";
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    border: 1px solid rgba(220,38,38,.14);
}
.Loader-core-shell::after {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 1px dashed rgba(82,82,91,.32);
    animation: shell-evil-spin 3s linear infinite;
}
.Loader-core-inner {
    position: relative;
    width: 53px;
    height: 53px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #27272a 0%,
            #09090b 58%,
            #000 80%
        );
    box-shadow:
        0 0 10px rgba(127,29,29,.45),
        0 0 20px rgba(0,0,0,.95),
        inset 0 0 15px #000;
    animation: inner-evil 1.1s ease-in-out infinite;
}
.Loader-core-inner::before {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 1px solid rgba(220,38,38,.18);
}
.Loader-core-inner i {
    position: relative;
    color: #71717a;
    font-size: 22px;
    text-shadow:
        0 0 4px #71717a,
        0 0 10px rgba(220,38,38,.55),
        0 0 20px rgba(127,29,29,.45);
    animation: skull-evil 1s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 122px;
    height: 122px;
    border-radius: 50%;
    border: 1px solid rgba(127,29,29,.24);
    z-index: 7;
    animation: core-ring-evil 1.7s linear infinite;
}
.Loader-core-ring::before,
.Loader-core-ring::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}
.Loader-core-ring::before {
    width: 7px;
    height: 7px;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #dc2626;
    box-shadow:
        0 0 7px #dc2626,
        0 0 18px rgba(220,38,38,.75);
}
.Loader-core-ring::after {
    width: 4px;
    height: 4px;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
    background: #52525b;
    box-shadow:
        0 0 7px #71717a,
        0 0 14px rgba(82,82,91,.65);
}
.Loader-core-ring--two {
    width: 138px;
    height: 138px;
    border-color: rgba(82,82,91,.14);
    animation-duration: 2.5s;
    animation-direction: reverse;
}
.Loader-core-ring--two::before {
    top: auto;
    bottom: 8px;
    left: auto;
    right: 6px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #7f1d1d;
}
.Loader-core-ring--two::after {
    top: 10px;
    right: auto;
    left: 7px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #3f3f46;
}
.Loader-eye {
    position: absolute;
    width: 9px;
    height: 5px;
    border-radius: 50%;
    background: #dc2626;
    box-shadow:
        0 0 5px #dc2626,
        0 0 12px rgba(220,38,38,.8);
    z-index: 9;
    opacity: .75;
    animation: evil-eye 1.2s ease-in-out infinite;
}
.Loader-eye--left {
    margin-left: -22px;
    margin-top: -7px;
    transform: rotate(-18deg);
}
.Loader-eye--right {
    margin-left: 22px;
    margin-top: -7px;
    transform: rotate(18deg);
    animation-delay: -.15s;
}
.Loader-particle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #52525b;
    box-shadow:
        0 0 6px #71717a,
        0 0 13px rgba(127,29,29,.45);
    z-index: 10;
}
.Loader-particle--one {
    left: 60px;
    top: 65px;
    animation: evil-particle-one 2s linear infinite;
}
.Loader-particle--two {
    right: 56px;
    top: 59px;
    animation: evil-particle-two 2.4s linear infinite;
    animation-delay: -.6s;
}
.Loader-particle--three {
    left: 47px;
    top: 134px;
    animation: evil-particle-three 1.8s linear infinite;
    animation-delay: -.4s;
}
.Loader-particle--four {
    right: 43px;
    top: 141px;
    animation: evil-particle-four 2.2s linear infinite;
    animation-delay: -.8s;
}
.Loader-particle--five {
    left: 87px;
    top: 43px;
    width: 3px;
    height: 3px;
    animation: evil-particle-five 1.7s linear infinite;
    animation-delay: -.25s;
}
.Loader-particle--six {
    right: 82px;
    bottom: 46px;
    width: 3px;
    height: 3px;
    animation: evil-particle-six 2.6s linear infinite;
    animation-delay: -1s;
}
.Loader-ember {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #dc2626;
    box-shadow:
        0 0 5px #dc2626,
        0 0 12px rgba(127,29,29,.7);
    z-index: 11;
}
.Loader-ember--one {
    left: 74px;
    top: 57px;
    animation: ember-rise-one 2.2s linear infinite;
}
.Loader-ember--two {
    right: 69px;
    top: 70px;
    animation: ember-rise-two 1.7s linear infinite;
    animation-delay: -.4s;
}
.Loader-ember--three {
    left: 56px;
    top: 119px;
    animation: ember-rise-three 2.5s linear infinite;
    animation-delay: -.7s;
}
.Loader-ember--four {
    right: 54px;
    top: 126px;
    animation: ember-rise-four 2s linear infinite;
    animation-delay: -.25s;
}
.Loader-ember--five {
    left: 104px;
    top: 48px;
    width: 3px;
    height: 3px;
    animation: ember-rise-five 1.8s linear infinite;
    animation-delay: -.6s;
}
.Loader-slash {
    position: absolute;
    width: 3px;
    height: 23px;
    border-radius: 999px;
    background: linear-gradient(
        to bottom,
        transparent,
        #7f1d1d,
        #dc2626,
        transparent
    );
    box-shadow:
        0 0 6px rgba(220,38,38,.55),
        0 0 13px rgba(127,29,29,.35);
    z-index: 6;
}
.Loader-slash--one {
    top: 60px;
    left: 48px;
    transform: rotate(48deg);
    animation: slash-one 1.25s ease-in-out infinite;
}
.Loader-slash--two {
    top: 53px;
    right: 51px;
    transform: rotate(-42deg);
    animation: slash-two 1.55s ease-in-out infinite;
    animation-delay: -.35s;
}
.Loader-slash--three {
    bottom: 56px;
    left: 83px;
    transform: rotate(28deg);
    animation: slash-three 1.4s ease-in-out infinite;
    animation-delay: -.55s;
}
.Loader-scan {
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: rgba(220,38,38,.22);
    border-right-color: rgba(82,82,91,.08);
    z-index: 5;
    animation:
        scan-evil 3.8s linear infinite,
        scan-pulse 1.7s ease-in-out infinite;
}
.Loader-pulse {
    position: absolute;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    border: 1px solid rgba(127,29,29,.12);
    z-index: 2;
    animation: pulse-evil 2s ease-out infinite;
}
.Loader-danger {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 8px;
    border: 1px solid rgba(127,29,29,.45);
    background: rgba(0,0,0,.75);
    color: #7f1d1d;
    font-family: monospace;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 3px;
    box-shadow:
        0 0 8px rgba(127,29,29,.18),
        inset 0 0 8px rgba(0,0,0,.8);
    z-index: 12;
    animation: danger-blink 1.5s ease-in-out infinite;
}
`,
  },
  {
    id: 2091,
    name: "Legendary Pure Divine",
    preview: (
      <div className="loader-2091">
        <div className="loader-2091__aura"></div>
        <div className="loader-2091__halo-glow"></div>
        <div className="loader-2091__outer-ring"></div>
        <div className="loader-2091__outer-ring loader-2091__outer-ring--two"></div>
        <div className="loader-2091__outer-ring loader-2091__outer-ring--three"></div>
        <div className="loader-2091__light-ring"></div>
        <div className="loader-2091__light-ring loader-2091__light-ring--two"></div>
        <div className="loader-2091__light-ring loader-2091__light-ring--three"></div>
        <div className="loader-2091__ray loader-2091__ray--one"></div>
        <div className="loader-2091__ray loader-2091__ray--two"></div>
        <div className="loader-2091__ray loader-2091__ray--three"></div>
        <div className="loader-2091__ray loader-2091__ray--four"></div>
        <div className="loader-2091__ray loader-2091__ray--five"></div>
        <div className="loader-2091__ray loader-2091__ray--six"></div>
        <div className="loader-2091__spark loader-2091__spark--one"></div>
        <div className="loader-2091__spark loader-2091__spark--two"></div>
        <div className="loader-2091__spark loader-2091__spark--three"></div>
        <div className="loader-2091__spark loader-2091__spark--four"></div>
        <div className="loader-2091__spark loader-2091__spark--five"></div>
        <div className="loader-2091__spark loader-2091__spark--six"></div>
        <div className="loader-2091__core">
          <div className="loader-2091__core-shell">
            <div className="loader-2091__core-inner">
              <i className="fa-solid fa-sun"></i>
            </div>
          </div>
        </div>
        <div className="loader-2091__core-ring"></div>
        <div className="loader-2091__core-ring loader-2091__core-ring--two"></div>
        <div className="loader-2091__star loader-2091__star--one">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="loader-2091__star loader-2091__star--two">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="loader-2091__star loader-2091__star--three">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="loader-2091__particle loader-2091__particle--one"></div>
        <div className="loader-2091__particle loader-2091__particle--two"></div>
        <div className="loader-2091__particle loader-2091__particle--three"></div>
        <div className="loader-2091__particle loader-2091__particle--four"></div>
        <div className="loader-2091__particle loader-2091__particle--five"></div>
        <div className="loader-2091__particle loader-2091__particle--six"></div>
        <div className="loader-2091__beam"></div>
        <div className="loader-2091__scan"></div>
        <div className="loader-2091__badge">
          <i className="fa-solid fa-shield-heart"></i>
          PURE
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura"></div>
    <div class="Loader-halo-glow"></div>
    <div class="Loader-outer-ring"></div>
    <div class="Loader-outer-ring Loader-outer-ring--two"></div>
    <div class="Loader-outer-ring Loader-outer-ring--three"></div>
    <div class="Loader-light-ring"></div>
    <div class="Loader-light-ring Loader-light-ring--two"></div>
    <div class="Loader-light-ring Loader-light-ring--three"></div>
    <div class="Loader-ray Loader-ray--one"></div>
    <div class="Loader-ray Loader-ray--two"></div>
    <div class="Loader-ray Loader-ray--three"></div>
    <div class="Loader-ray Loader-ray--four"></div>
    <div class="Loader-ray Loader-ray--five"></div>
    <div class="Loader-ray Loader-ray--six"></div>
    <div class="Loader-spark Loader-spark--one"></div>
    <div class="Loader-spark Loader-spark--two"></div>
    <div class="Loader-spark Loader-spark--three"></div>
    <div class="Loader-spark Loader-spark--four"></div>
    <div class="Loader-spark Loader-spark--five"></div>
    <div class="Loader-spark Loader-spark--six"></div>
    <div class="Loader-core">
        <div class="Loader-core-shell">
            <div class="Loader-core-inner">
                <i class="fa-solid fa-sun"></i>
            </div>
        </div>
    </div>
    <div class="Loader-core-ring"></div>
    <div class="Loader-core-ring Loader-core-ring--two"></div>
    <div class="Loader-star Loader-star--one">
        <i class="fa-solid fa-star"></i>
    </div>
    <div class="Loader-star Loader-star--two">
        <i class="fa-solid fa-star"></i>
    </div>
    <div class="Loader-star Loader-star--three">
        <i class="fa-solid fa-star"></i>
    </div>
    <div class="Loader-particle Loader-particle--one"></div>
    <div class="Loader-particle Loader-particle--two"></div>
    <div class="Loader-particle Loader-particle--three"></div>
    <div class="Loader-particle Loader-particle--four"></div>
    <div class="Loader-particle Loader-particle--five"></div>
    <div class="Loader-particle Loader-particle--six"></div>
    <div class="Loader-beam"></div>
    <div class="Loader-scan"></div>
    <div class="Loader-badge">
        <i class="fa-solid fa-shield-heart"></i>
        PURE
    </div>
</div>`,
    css: `.Loader {
    position: relative;
    width: 270px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}
.Loader-aura {
    position: absolute;
    width: 235px;
    height: 235px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.95) 0%,
            rgba(254,249,195,.55) 20%,
            rgba(186,230,253,.3) 42%,
            rgba(125,211,252,.12) 62%,
            transparent 79%
        );
    filter: blur(17px);
    animation: divine-aura 3.2s ease-in-out infinite;
}
.Loader-halo-glow {
    position: absolute;
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.55),
            rgba(253,224,71,.18) 42%,
            transparent 76%
        );
    filter: blur(8px);
    animation: halo-glow 2s ease-in-out infinite;
}
.Loader-outer-ring {
    position: absolute;
    inset: 14px;
    border-radius: 50%;
    border: 2px solid rgba(224,242,254,.35);
    animation: divine-spin-one 8s linear infinite;
}
.Loader-outer-ring::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 7px;
    height: 7px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0 0 8px #ffffff,
        0 0 18px #bfdbfe,
        0 0 28px rgba(125,211,252,.8);
}
.Loader-outer-ring--two {
    inset: 28px;
    border-color: rgba(253,224,71,.2);
    animation-duration: 5s;
    animation-direction: reverse;
}
.Loader-outer-ring--two::before {
    top: auto;
    bottom: -4px;
    background: #fde68a;
    box-shadow:
        0 0 8px #fde68a,
        0 0 18px #fef08a,
        0 0 28px rgba(250,204,21,.65);
}
.Loader-outer-ring--three {
    inset: 43px;
    border-style: dashed;
    border-color: rgba(125,211,252,.2);
    animation-duration: 3.8s;
}
.Loader-light-ring {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 16deg,
            #ffffff 22deg,
            #bae6fd 29deg,
            transparent 38deg,
            transparent 63deg,
            #93c5fd 70deg,
            #38bdf8 78deg,
            transparent 87deg,
            transparent 116deg,
            #fef3c7 123deg,
            #fde68a 132deg,
            transparent 142deg,
            transparent 176deg,
            #ffffff 184deg,
            #bfdbfe 192deg,
            transparent 204deg,
            transparent 233deg,
            #7dd3fc 241deg,
            #38bdf8 249deg,
            transparent 260deg,
            transparent 295deg,
            #fff 302deg,
            #fde68a 311deg,
            transparent 322deg,
            transparent 349deg,
            #bae6fd 356deg
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 69%,
            #000 70% 73%,
            transparent 74%
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 69%,
            #000 70% 73%,
            transparent 74%
        );
    filter:
        drop-shadow(0 0 5px #ffffff)
        drop-shadow(0 0 12px rgba(125,211,252,.6));
    animation: light-ring-spin 2.5s linear infinite;
}
.Loader-light-ring--two {
    inset: 20px;
    opacity: .72;
    animation-duration: 1.65s;
    animation-direction: reverse;
}
.Loader-light-ring--three {
    inset: 33px;
    opacity: .5;
    animation-duration: 3.4s;
}
.Loader-ray {
    position: absolute;
    width: 3px;
    height: 42px;
    top: 17px;
    left: 50%;
    transform-origin: center 118px;
    border-radius: 999px;
    background:
        linear-gradient(
            to bottom,
            transparent,
            #ffffff 30%,
            #dbeafe 60%,
            transparent
        );
    box-shadow:
        0 0 7px #ffffff,
        0 0 14px #93c5fd;
    opacity: .55;
    z-index: 3;
    animation: divine-ray 2s ease-in-out infinite;
}
.Loader-ray--one {
    transform: translateX(-50%) rotate(0deg);
}
.Loader-ray--two {
    transform: translateX(-50%) rotate(60deg);
    animation-delay: -.3s;
}
.Loader-ray--three {
    transform: translateX(-50%) rotate(120deg);
    animation-delay: -.6s;
}
.Loader-ray--four {
    transform: translateX(-50%) rotate(180deg);
    animation-delay: -.9s;
}
.Loader-ray--five {
    transform: translateX(-50%) rotate(240deg);
    animation-delay: -1.2s;
}
.Loader-ray--six {
    transform: translateX(-50%) rotate(300deg);
    animation-delay: -1.5s;
}
.Loader-core {
    position: absolute;
    width: 108px;
    height: 108px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 50% 35%,
            rgba(255,255,255,.75),
            transparent 40%
        ),
        radial-gradient(
            circle,
            #ffffff,
            #fef3c7 42%,
            #bfdbfe 67%,
            #7dd3fc 100%
        );
    border: 2px solid rgba(255,255,255,.85);
    box-shadow:
        0 0 14px #ffffff,
        0 0 30px #bfdbfe,
        0 0 55px rgba(125,211,252,.7),
        0 0 80px rgba(253,224,71,.25),
        inset 0 0 22px rgba(255,255,255,.8);
    z-index: 8;
    animation: divine-core 2s ease-in-out infinite;
}
.Loader-core-shell {
    position: relative;
    width: 78px;
    height: 78px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff 0%,
            #fefce8 35%,
            #dbeafe 62%,
            #93c5fd 100%
        );
    border: 1px solid rgba(255,255,255,.9);
    box-shadow:
        inset 0 0 18px rgba(255,255,255,.95),
        0 0 15px rgba(147,197,253,.55);
}
.Loader-core-shell::before {
    content: "";
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.6);
}
.Loader-core-shell::after {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px dashed rgba(59,130,246,.2);
    animation: shell-divine-spin 3s linear infinite;
}
.Loader-core-inner {
    position: relative;
    width: 53px;
    height: 53px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff 0%,
            #fef3c7 36%,
            #93c5fd 71%,
            #60a5fa 100%
        );
    box-shadow:
        0 0 12px #ffffff,
        0 0 25px rgba(147,197,253,.85),
        inset 0 0 12px rgba(255,255,255,.95);
    animation: inner-divine 1.15s ease-in-out infinite;
}
.Loader-core-inner i {
    color: #f59e0b;
    font-size: 23px;
    text-shadow:
        0 0 5px #ffffff,
        0 0 12px #fde68a,
        0 0 22px #facc15;
    animation: sun-divine 1s ease-in-out infinite;
}
.Loader-core-ring {
    position: absolute;
    width: 126px;
    height: 126px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.55);
    z-index: 7;
    animation: core-divine-ring 1.8s linear infinite;
}
.Loader-core-ring::before,
.Loader-core-ring::after {
    content: "";
    position: absolute;
    border-radius: 50%;
}
.Loader-core-ring::before {
    width: 7px;
    height: 7px;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    box-shadow:
        0 0 7px #ffffff,
        0 0 16px #bfdbfe;
}
.Loader-core-ring::after {
    width: 5px;
    height: 5px;
    top: 50%;
    right: -3px;
    transform: translateY(-50%);
    background: #fde68a;
    box-shadow:
        0 0 6px #fde68a,
        0 0 15px #facc15;
}
.Loader-core-ring--two {
    width: 143px;
    height: 143px;
    border-color: rgba(125,211,252,.28);
    animation-duration: 2.6s;
    animation-direction: reverse;
}
.Loader-core-ring--two::before {
    top: auto;
    bottom: 8px;
    left: auto;
    right: 7px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #93c5fd;
}
.Loader-core-ring--two::after {
    top: 9px;
    right: auto;
    left: 7px;
    width: 5px;
    height: 5px;
    transform: none;
    background: #ffffff;
}
.Loader-star {
    position: absolute;
    color: #ffffff;
    text-shadow:
        0 0 6px #ffffff,
        0 0 14px #bfdbfe;
    z-index: 10;
    animation: star-divine 1.6s ease-in-out infinite;
}
.Loader-star--one {
    top: 47px;
    left: 58px;
    font-size: 8px;
}
.Loader-star--two {
    top: 64px;
    right: 48px;
    font-size: 6px;
    animation-delay: -.45s;
}
.Loader-star--three {
    bottom: 46px;
    left: 48px;
    font-size: 7px;
    animation-delay: -.8s;
}
.Loader-particle {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0 0 6px #ffffff,
        0 0 13px #93c5fd;
    z-index: 11;
}
.Loader-particle--one {
    left: 64px;
    top: 82px;
    animation: particle-divine-one 2s linear infinite;
}
.Loader-particle--two {
    right: 59px;
    top: 71px;
    animation: particle-divine-two 2.4s linear infinite;
    animation-delay: -.5s;
}
.Loader-particle--three {
    left: 45px;
    top: 139px;
    animation: particle-divine-three 2.2s linear infinite;
    animation-delay: -.75s;
}
.Loader-particle--four {
    right: 43px;
    top: 128px;
    animation: particle-divine-four 1.9s linear infinite;
    animation-delay: -.3s;
}
.Loader-particle--five {
    left: 95px;
    top: 42px;
    width: 3px;
    height: 3px;
    animation: particle-divine-five 1.7s linear infinite;
    animation-delay: -.6s;
}
.Loader-particle--six {
    right: 91px;
    bottom: 48px;
    width: 3px;
    height: 3px;
    animation: particle-divine-six 2.7s linear infinite;
    animation-delay: -1s;
}
.Loader-beam {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.3),
            rgba(125,211,252,.1) 48%,
            transparent 72%
        );
    filter: blur(5px);
    z-index: 4;
    animation: divine-beam 1.8s ease-in-out infinite;
}
.Loader-scan {
    position: absolute;
    width: 177px;
    height: 177px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: rgba(255,255,255,.65);
    border-right-color: rgba(125,211,252,.2);
    z-index: 5;
    animation:
        divine-scan 4s linear infinite,
        divine-scan-pulse 2s ease-in-out infinite;
}
.Loader-badge {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px;
    border: 1px solid rgba(253,224,71,.5);
    border-radius: 999px;
    background: rgba(255,255,255,.45);
    color: #92400e;
    font-family: monospace;
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 2px;
    box-shadow:
        0 0 10px rgba(253,224,71,.3),
        inset 0 0 8px rgba(255,255,255,.7);
    backdrop-filter: blur(6px);
    z-index: 13;
    animation: divine-badge 2s ease-in-out infinite;
}
.Loader-badge i {
    color: #f59e0b;
}
`,
  },

  {
    id: 3115,
    name: "Lightning Core Loader",
    preview: (
      <>
        <style>{`
        .loader-3115 {
          position: relative;
          width: 92px;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 14px rgba(59, 130, 246, 0.7));
        }

        .loader-3115-ring {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 2px solid rgba(96, 165, 250, 0.12);
          border-top-color: #60a5fa;
          border-right-color: #2563eb;
          box-shadow:
            0 0 12px rgba(59, 130, 246, 0.7),
            inset 0 0 10px rgba(59, 130, 246, 0.25);
          animation: loader-3115-spin 1.1s linear infinite;
        }

        .loader-3115-ring::before {
          content: "";
          position: absolute;
          inset: 7px;
          border-radius: 50%;
          border: 1px dashed rgba(147, 197, 253, 0.45);
          animation: loader-3115-spin-reverse 1.6s linear infinite;
        }

        .loader-3115-core {
          position: relative;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              #ffffff 0%,
              #bfdbfe 16%,
              #3b82f6 40%,
              #1d4ed8 65%,
              rgba(30, 64, 175, 0.15) 72%
            );
          box-shadow:
            0 0 8px #ffffff,
            0 0 18px #60a5fa,
            0 0 34px #2563eb,
            0 0 48px rgba(37, 99, 235, 0.45);
          animation: loader-3115-core-pulse 0.75s ease-in-out infinite alternate;
        }

        .loader-3115-bolt {
          position: absolute;
          width: 4px;
          height: 28px;
          background: #ffffff;
          clip-path: polygon(
            55% 0,
            100% 0,
            67% 40%,
            100% 40%,
            25% 100%,
            43% 56%,
            0 56%
          );
          filter:
            drop-shadow(0 0 4px #ffffff)
            drop-shadow(0 0 8px #60a5fa);
          animation: loader-3115-flash 0.38s steps(2, end) infinite;
        }

        .loader-3115-arc {
          position: absolute;
          width: 42px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #ffffff,
            #60a5fa,
            transparent
          );
          transform-origin: center;
          opacity: 0;
          box-shadow: 0 0 8px #60a5fa;
          animation: loader-3115-arc 0.9s ease-in-out infinite;
        }

        .loader-3115-arc:nth-child(3) {
          transform: rotate(45deg) translateX(29px);
          animation-delay: 0.15s;
        }

        .loader-3115-arc:nth-child(4) {
          transform: rotate(135deg) translateX(29px);
          animation-delay: 0.35s;
        }

        .loader-3115-arc:nth-child(5) {
          transform: rotate(225deg) translateX(29px);
          animation-delay: 0.55s;
        }

        .loader-3115-arc:nth-child(6) {
          transform: rotate(315deg) translateX(29px);
          animation-delay: 0.75s;
        }

        @keyframes loader-3115-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-3115-spin-reverse {
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes loader-3115-core-pulse {
          from {
            transform: scale(0.88);
            filter: brightness(0.9);
          }

          to {
            transform: scale(1.08);
            filter: brightness(1.35);
          }
        }

        @keyframes loader-3115-flash {
          0%,
          35% {
            opacity: 1;
            transform: scale(1);
          }

          36%,
          55% {
            opacity: 0.35;
            transform: scale(0.9);
          }

          56%,
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes loader-3115-arc {
          0% {
            opacity: 0;
            width: 12px;
          }

          35% {
            opacity: 1;
            width: 44px;
          }

          70%,
          100% {
            opacity: 0;
            width: 20px;
          }
        }
      `}</style>

        <div className="loader-3115">
          <div className="loader-3115-ring" />

          <div className="loader-3115-core">
            <span className="loader-3115-bolt" />
          </div>

          <span className="loader-3115-arc" />
          <span className="loader-3115-arc" />
          <span className="loader-3115-arc" />
          <span className="loader-3115-arc" />
        </div>
      </>
    ),
    html: `<div class="Loader">
    <div class="Loader-ring"></div>

    <div class="Loader-core">
        <span class="Loader-bolt"></span>
    </div>

    <span class="Loader-arc"></span>
    <span class="Loader-arc"></span>
    <span class="Loader-arc"></span>
    <span class="Loader-arc"></span>
</div>`,
    css: `.Loader {
    position: relative;
    width: 92px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 14px rgba(59, 130, 246, 0.7));
}

.Loader-ring {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    border: 2px solid rgba(96, 165, 250, 0.12);
    border-top-color: #60a5fa;
    border-right-color: #2563eb;
    box-shadow:
        0 0 12px rgba(59, 130, 246, 0.7),
        inset 0 0 10px rgba(59, 130, 246, 0.25);
    animation: Loader-spin 1.1s linear infinite;
}

.Loader-ring::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px dashed rgba(147, 197, 253, 0.45);
    animation: Loader-spin-reverse 1.6s linear infinite;
}

.Loader-core {
    position: relative;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff 0%,
            #bfdbfe 16%,
            #3b82f6 40%,
            #1d4ed8 65%,
            rgba(30, 64, 175, 0.15) 72%
        );
    box-shadow:
        0 0 8px #ffffff,
        0 0 18px #60a5fa,
        0 0 34px #2563eb,
        0 0 48px rgba(37, 99, 235, 0.45);
    animation: Loader-core-pulse 0.75s ease-in-out infinite alternate;
}

.Loader-bolt {
    position: absolute;
    width: 4px;
    height: 28px;
    background: #ffffff;
    clip-path: polygon(
        55% 0,
        100% 0,
        67% 40%,
        100% 40%,
        25% 100%,
        43% 56%,
        0 56%
    );
    filter:
        drop-shadow(0 0 4px #ffffff)
        drop-shadow(0 0 8px #60a5fa);
    animation: Loader-flash 0.38s steps(2, end) infinite;
}

.Loader-arc {
    position: absolute;
    width: 42px;
    height: 2px;
    background: linear-gradient(
        90deg,
        transparent,
        #ffffff,
        #60a5fa,
        transparent
    );
    transform-origin: center;
    opacity: 0;
    box-shadow: 0 0 8px #60a5fa;
    animation: Loader-arc 0.9s ease-in-out infinite;
}

.Loader-arc:nth-child(3) {
    transform: rotate(45deg) translateX(29px);
    animation-delay: 0.15s;
}

.Loader-arc:nth-child(4) {
    transform: rotate(135deg) translateX(29px);
    animation-delay: 0.35s;
}

.Loader-arc:nth-child(5) {
    transform: rotate(225deg) translateX(29px);
    animation-delay: 0.55s;
}

.Loader-arc:nth-child(6) {
    transform: rotate(315deg) translateX(29px);
    animation-delay: 0.75s;
}

@keyframes Loader-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-spin-reverse {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-pulse {
    from {
        transform: scale(0.88);
        filter: brightness(0.9);
    }

    to {
        transform: scale(1.08);
        filter: brightness(1.35);
    }
}

@keyframes Loader-flash {
    0%,
    35% {
        opacity: 1;
        transform: scale(1);
    }

    36%,
    55% {
        opacity: 0.35;
        transform: scale(0.9);
    }

    56%,
    100% {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-arc {
    0% {
        opacity: 0;
        width: 12px;
    }

    35% {
        opacity: 1;
        width: 44px;
    }

    70%,
    100% {
        opacity: 0;
        width: 20px;
    }
}`,
  },
  {
    id: 3116,
    name: "Legendary Thunder Reactor",
    preview: (
      <>
        <style>{`
        .loader-3116 {
          --electric-white: #ffffff;
          --electric-ice: #dff8ff;
          --electric-cyan: #67e8f9;
          --electric-blue: #38bdf8;
          --electric-main: #3b82f6;
          --electric-deep: #1d4ed8;
          --electric-dark: #172554;

          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
          transform: translateZ(0);
        }

        .loader-3116::before {
          content: "";
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.09) 0%,
              rgba(103, 232, 249, 0.08) 16%,
              rgba(59, 130, 246, 0.08) 28%,
              rgba(37, 99, 235, 0.04) 44%,
              transparent 68%
            );
          filter: blur(12px);
          animation: loader-3116-aura 1.8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .loader-3116::after {
          content: "";
          position: absolute;
          width: 145px;
          height: 145px;
          border-radius: 50%;
          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(255, 255, 255, 0) 0deg 8deg,
              rgba(125, 211, 252, 0.08) 8deg 9deg,
              rgba(255, 255, 255, 0) 9deg 18deg
            );
          mask:
            radial-gradient(
              circle,
              transparent 0 62%,
              #000 63% 66%,
              transparent 67%
            );
          -webkit-mask:
            radial-gradient(
              circle,
              transparent 0 62%,
              #000 63% 66%,
              transparent 67%
            );
          animation: loader-3116-rune-rotation 16s linear infinite;
          pointer-events: none;
        }

        .loader-3116-field {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }

        .loader-3116-field::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 102px;
          height: 102px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(125, 211, 252, 0.12);
          box-shadow:
            0 0 10px rgba(56, 189, 248, 0.1),
            inset 0 0 20px rgba(59, 130, 246, 0.04);
          animation: loader-3116-field-pulse 1.5s ease-in-out infinite;
        }

        .loader-3116-field::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 128px;
          height: 128px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(96, 165, 250, 0.14);
          animation: loader-3116-field-spin 8s linear infinite reverse;
        }

        .loader-3116-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          pointer-events: none;
        }

        .loader-3116-ring--outer {
          width: 154px;
          height: 154px;
          transform: translate(-50%, -50%);
          border:
            2px solid
            rgba(59, 130, 246, 0.08);
          border-top-color: rgba(255, 255, 255, 0.9);
          border-right-color: #38bdf8;
          border-bottom-color: rgba(37, 99, 235, 0.25);
          border-left-color: #2563eb;
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.24),
            0 0 18px rgba(56, 189, 248, 0.3),
            0 0 34px rgba(37, 99, 235, 0.2),
            inset 0 0 18px rgba(56, 189, 248, 0.08);
          animation: loader-3116-spin-outer 3.6s linear infinite;
        }

        .loader-3116-ring--outer::before {
          content: "";
          position: absolute;
          inset: 7px;
          border-radius: inherit;
          border:
            1px dashed
            rgba(125, 211, 252, 0.3);
          animation: loader-3116-spin-inner 5s linear infinite reverse;
        }

        .loader-3116-ring--outer::after {
          content: "";
          position: absolute;
          inset: 15px;
          border-radius: inherit;
          background:
            conic-gradient(
              from 0deg,
              transparent 0deg 28deg,
              rgba(103, 232, 249, 0.32) 28deg 31deg,
              transparent 31deg 74deg,
              rgba(59, 130, 246, 0.26) 74deg 78deg,
              transparent 78deg 148deg,
              rgba(255, 255, 255, 0.4) 148deg 150deg,
              transparent 150deg 232deg,
              rgba(56, 189, 248, 0.28) 232deg 236deg,
              transparent 236deg 360deg
            );
          mask:
            radial-gradient(
              circle,
              transparent 0 77%,
              #000 78% 82%,
              transparent 83%
            );
          -webkit-mask:
            radial-gradient(
              circle,
              transparent 0 77%,
              #000 78% 82%,
              transparent 83%
            );
        }

        .loader-3116-ring--middle {
          width: 122px;
          height: 122px;
          transform: translate(-50%, -50%);
          background:
            conic-gradient(
              from 30deg,
              transparent 0deg 32deg,
              #60a5fa 32deg 35deg,
              transparent 35deg 92deg,
              #ffffff 92deg 94deg,
              transparent 94deg 164deg,
              #38bdf8 164deg 168deg,
              transparent 168deg 250deg,
              #2563eb 250deg 255deg,
              transparent 255deg 360deg
            );
          mask:
            radial-gradient(
              circle,
              transparent 0 83%,
              #000 84% 100%
            );
          -webkit-mask:
            radial-gradient(
              circle,
              transparent 0 83%,
              #000 84% 100%
            );
          filter:
            drop-shadow(0 0 5px #38bdf8)
            drop-shadow(0 0 12px rgba(37, 99, 235, 0.55));
          animation: loader-3116-spin-middle 2.2s linear infinite reverse;
        }

        .loader-3116-ring--inner {
          width: 91px;
          height: 91px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(147, 197, 253, 0.15);
          box-shadow:
            inset 0 0 12px rgba(56, 189, 248, 0.11),
            0 0 12px rgba(59, 130, 246, 0.11);
          animation: loader-3116-inner-breathe 1s ease-in-out infinite alternate;
        }

        .loader-3116-ring--inner::before {
          content: "";
          position: absolute;
          inset: 7px;
          border-radius: inherit;
          border-top: 2px solid #ffffff;
          border-right: 2px solid #38bdf8;
          border-bottom: 2px solid transparent;
          border-left: 2px solid #2563eb;
          filter:
            drop-shadow(0 0 4px #ffffff)
            drop-shadow(0 0 8px #3b82f6);
          animation: loader-3116-spin-inner 0.95s linear infinite;
        }

        .loader-3116-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 136px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(125, 211, 252, 0.2);
          pointer-events: none;
        }

        .loader-3116-orbit--a {
          transform:
            translate(-50%, -50%)
            rotate(17deg);
          animation: loader-3116-orbit-a 4s linear infinite;
        }

        .loader-3116-orbit--b {
          transform:
            translate(-50%, -50%)
            rotate(77deg);
          animation: loader-3116-orbit-b 3.2s linear infinite reverse;
        }

        .loader-3116-orbit--c {
          transform:
            translate(-50%, -50%)
            rotate(137deg);
          animation: loader-3116-orbit-c 4.6s linear infinite;
        }

        .loader-3116-orbit::before,
        .loader-3116-orbit::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 5px;
          height: 5px;
          margin-top: -2.5px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            0 0 4px #ffffff,
            0 0 10px #38bdf8,
            0 0 18px #2563eb;
        }

        .loader-3116-orbit::before {
          left: -2px;
        }

        .loader-3116-orbit::after {
          right: -2px;
        }

        .loader-3116-core-shell {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 70px;
          height: 70px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.1),
              rgba(56, 189, 248, 0.08) 35%,
              rgba(37, 99, 235, 0.04) 58%,
              transparent 70%
            );
          box-shadow:
            inset 0 0 20px rgba(125, 211, 252, 0.12),
            0 0 24px rgba(37, 99, 235, 0.18);
          animation: loader-3116-shell-pulse 1.1s ease-in-out infinite;
        }

        .loader-3116-core-shell::before {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: inherit;
          background:
            conic-gradient(
              from 0deg,
              transparent 0deg 20deg,
              rgba(255, 255, 255, 0.45) 20deg 22deg,
              transparent 22deg 76deg,
              rgba(56, 189, 248, 0.4) 76deg 79deg,
              transparent 79deg 150deg,
              rgba(37, 99, 235, 0.5) 150deg 153deg,
              transparent 153deg 220deg,
              rgba(103, 232, 249, 0.45) 220deg 223deg,
              transparent 223deg 360deg
            );
          mask:
            radial-gradient(
              circle,
              transparent 0 82%,
              #000 83% 86%,
              transparent 87%
            );
          -webkit-mask:
            radial-gradient(
              circle,
              transparent 0 82%,
              #000 83% 86%,
              transparent 87%
            );
          animation: loader-3116-shell-spin 1.35s linear infinite;
        }

        .loader-3116-core {
          position: relative;
          z-index: 8;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 42% 36%,
              #ffffff 0%,
              #ffffff 8%,
              #e0f2fe 15%,
              #7dd3fc 25%,
              #38bdf8 37%,
              #3b82f6 50%,
              #1d4ed8 65%,
              #172554 82%,
              rgba(23, 37, 84, 0) 100%
            );
          box-shadow:
            0 0 4px #ffffff,
            0 0 10px #dff8ff,
            0 0 18px #67e8f9,
            0 0 30px #38bdf8,
            0 0 45px #3b82f6,
            0 0 65px rgba(37, 99, 235, 0.62);
          animation:
            loader-3116-core-pulse 0.68s ease-in-out infinite alternate,
            loader-3116-core-flicker 0.12s steps(2, end) infinite;
        }

        .loader-3116-core::before {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow:
            inset 0 0 8px rgba(255, 255, 255, 0.85),
            0 0 8px rgba(255, 255, 255, 0.5);
          animation: loader-3116-core-ring 0.8s ease-in-out infinite alternate;
        }

        .loader-3116-core::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          left: 11px;
          top: 8px;
          border-radius: 50%;
          background: white;
          box-shadow:
            0 0 4px white,
            0 0 9px white;
          filter: blur(0.3px);
        }

        .loader-3116-bolt-main {
          position: absolute;
          z-index: 12;
          width: 13px;
          height: 49px;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #e0f2fe 24%,
              #7dd3fc 58%,
              #3b82f6 100%
            );
          clip-path:
            polygon(
              57% 0%,
              100% 0%,
              72% 31%,
              100% 31%,
              57% 64%,
              77% 64%,
              16% 100%,
              35% 60%,
              7% 60%,
              38% 28%,
              17% 28%
            );
          filter:
            drop-shadow(0 0 3px white)
            drop-shadow(0 0 7px #7dd3fc)
            drop-shadow(0 0 13px #3b82f6)
            drop-shadow(0 0 19px #2563eb);
          animation:
            loader-3116-main-bolt 0.36s steps(2, end) infinite,
            loader-3116-bolt-scale 0.8s ease-in-out infinite alternate;
        }

        .loader-3116-discharge {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 3;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(125, 211, 252, 0.5);
          opacity: 0;
          animation: loader-3116-discharge 1.5s ease-out infinite;
          pointer-events: none;
        }

        .loader-3116-discharge--b {
          animation-delay: 0.5s;
        }

        .loader-3116-discharge--c {
          animation-delay: 1s;
        }

        .loader-3116-lightning {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 5px;
          height: 48px;
          transform-origin: 50% 0%;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 1),
              rgba(125, 211, 252, 0.96) 35%,
              rgba(59, 130, 246, 0.85) 75%,
              rgba(37, 99, 235, 0)
            );
          clip-path:
            polygon(
              40% 0,
              100% 0,
              63% 30%,
              100% 30%,
              36% 64%,
              72% 64%,
              0 100%,
              27% 58%,
              0 58%,
              40% 29%,
              8% 29%
            );
          filter:
            drop-shadow(0 0 3px white)
            drop-shadow(0 0 7px #38bdf8)
            drop-shadow(0 0 11px #2563eb);
          opacity: 0;
          pointer-events: none;
          animation: loader-3116-lightning-flash 1.35s steps(2, end) infinite;
        }

        .loader-3116-lightning--1 {
          transform:
            translate(-50%, -50%)
            rotate(0deg)
            translateY(-69px);
          animation-delay: 0s;
        }

        .loader-3116-lightning--2 {
          transform:
            translate(-50%, -50%)
            rotate(45deg)
            translateY(-69px);
          animation-delay: 0.18s;
        }

        .loader-3116-lightning--3 {
          transform:
            translate(-50%, -50%)
            rotate(90deg)
            translateY(-69px);
          animation-delay: 0.34s;
        }

        .loader-3116-lightning--4 {
          transform:
            translate(-50%, -50%)
            rotate(135deg)
            translateY(-69px);
          animation-delay: 0.52s;
        }

        .loader-3116-lightning--5 {
          transform:
            translate(-50%, -50%)
            rotate(180deg)
            translateY(-69px);
          animation-delay: 0.68s;
        }

        .loader-3116-lightning--6 {
          transform:
            translate(-50%, -50%)
            rotate(225deg)
            translateY(-69px);
          animation-delay: 0.84s;
        }

        .loader-3116-lightning--7 {
          transform:
            translate(-50%, -50%)
            rotate(270deg)
            translateY(-69px);
          animation-delay: 1s;
        }

        .loader-3116-lightning--8 {
          transform:
            translate(-50%, -50%)
            rotate(315deg)
            translateY(-69px);
          animation-delay: 1.16s;
        }

        .loader-3116-plasma {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 68px;
          height: 68px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        .loader-3116-plasma::before,
        .loader-3116-plasma::after {
          content: "";
          position: absolute;
          width: 35px;
          height: 2px;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          background:
            linear-gradient(
              90deg,
              transparent,
              #ffffff,
              #67e8f9,
              #3b82f6,
              transparent
            );
          box-shadow:
            0 0 5px #ffffff,
            0 0 10px #38bdf8;
          transform-origin: left center;
          opacity: 0;
        }

        .loader-3116-plasma--1::before {
          transform: rotate(12deg) translateX(19px);
          animation: loader-3116-plasma-a 0.8s ease-in-out infinite;
        }

        .loader-3116-plasma--1::after {
          transform: rotate(192deg) translateX(19px);
          animation: loader-3116-plasma-b 1.05s ease-in-out infinite 0.2s;
        }

        .loader-3116-plasma--2::before {
          transform: rotate(74deg) translateX(19px);
          animation: loader-3116-plasma-b 0.9s ease-in-out infinite 0.12s;
        }

        .loader-3116-plasma--2::after {
          transform: rotate(254deg) translateX(19px);
          animation: loader-3116-plasma-a 1.12s ease-in-out infinite 0.3s;
        }

        .loader-3116-plasma--3::before {
          transform: rotate(132deg) translateX(19px);
          animation: loader-3116-plasma-a 0.72s ease-in-out infinite 0.08s;
        }

        .loader-3116-plasma--3::after {
          transform: rotate(312deg) translateX(19px);
          animation: loader-3116-plasma-b 0.92s ease-in-out infinite 0.4s;
        }

        .loader-3116-particle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 4px;
          height: 4px;
          margin: -2px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            0 0 4px #ffffff,
            0 0 9px #38bdf8,
            0 0 14px #2563eb;
          opacity: 0;
          pointer-events: none;
        }

        .loader-3116-particle--1 {
          animation: loader-3116-particle-1 1.9s ease-out infinite;
        }

        .loader-3116-particle--2 {
          animation: loader-3116-particle-2 2.1s ease-out infinite 0.2s;
        }

        .loader-3116-particle--3 {
          animation: loader-3116-particle-3 1.7s ease-out infinite 0.4s;
        }

        .loader-3116-particle--4 {
          animation: loader-3116-particle-4 2.3s ease-out infinite 0.1s;
        }

        .loader-3116-particle--5 {
          animation: loader-3116-particle-5 2s ease-out infinite 0.6s;
        }

        .loader-3116-particle--6 {
          animation: loader-3116-particle-6 1.8s ease-out infinite 0.3s;
        }

        .loader-3116-particle--7 {
          animation: loader-3116-particle-7 2.25s ease-out infinite 0.45s;
        }

        .loader-3116-particle--8 {
          animation: loader-3116-particle-8 1.95s ease-out infinite 0.8s;
        }

        .loader-3116-particle--9 {
          animation: loader-3116-particle-9 2.15s ease-out infinite 0.5s;
        }

        .loader-3116-particle--10 {
          animation: loader-3116-particle-10 1.75s ease-out infinite 0.7s;
        }

        .loader-3116-particle--11 {
          animation: loader-3116-particle-11 2.4s ease-out infinite 0.12s;
        }

        .loader-3116-particle--12 {
          animation: loader-3116-particle-12 1.85s ease-out infinite 0.92s;
        }

        .loader-3116-shard {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 12px;
          border-radius: 999px;
          transform-origin: 50% 50%;
          background:
            linear-gradient(
              180deg,
              #ffffff,
              #38bdf8,
              transparent
            );
          box-shadow:
            0 0 6px #38bdf8;
          opacity: 0.55;
        }

        .loader-3116-shard--1 {
          transform:
            translate(-50%, -50%)
            rotate(0deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite;
        }

        .loader-3116-shard--2 {
          transform:
            translate(-50%, -50%)
            rotate(30deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.08s;
        }

        .loader-3116-shard--3 {
          transform:
            translate(-50%, -50%)
            rotate(60deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.16s;
        }

        .loader-3116-shard--4 {
          transform:
            translate(-50%, -50%)
            rotate(90deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.24s;
        }

        .loader-3116-shard--5 {
          transform:
            translate(-50%, -50%)
            rotate(120deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.32s;
        }

        .loader-3116-shard--6 {
          transform:
            translate(-50%, -50%)
            rotate(150deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.4s;
        }

        .loader-3116-shard--7 {
          transform:
            translate(-50%, -50%)
            rotate(180deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.48s;
        }

        .loader-3116-shard--8 {
          transform:
            translate(-50%, -50%)
            rotate(210deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.56s;
        }

        .loader-3116-shard--9 {
          transform:
            translate(-50%, -50%)
            rotate(240deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.64s;
        }

        .loader-3116-shard--10 {
          transform:
            translate(-50%, -50%)
            rotate(270deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.72s;
        }

        .loader-3116-shard--11 {
          transform:
            translate(-50%, -50%)
            rotate(300deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.8s;
        }

        .loader-3116-shard--12 {
          transform:
            translate(-50%, -50%)
            rotate(330deg)
            translateY(-77px);
          animation: loader-3116-shard-pulse 1s ease-in-out infinite 0.88s;
        }

        @keyframes loader-3116-aura {
          0% {
            opacity: 0.55;
            transform: scale(0.96);
          }

          100% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        @keyframes loader-3116-rune-rotation {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-3116-field-spin {
          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes loader-3116-field-pulse {
          0%,
          100% {
            opacity: 0.3;
            transform:
              translate(-50%, -50%)
              scale(0.98);
          }

          50% {
            opacity: 0.85;
            transform:
              translate(-50%, -50%)
              scale(1.05);
          }
        }

        @keyframes loader-3116-spin-outer {
          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes loader-3116-spin-middle {
          to {
            transform:
              translate(-50%, -50%)
              rotate(-360deg);
          }
        }

        @keyframes loader-3116-spin-inner {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-3116-inner-breathe {
          from {
            opacity: 0.55;
            transform:
              translate(-50%, -50%)
              scale(0.96);
          }

          to {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1.04);
          }
        }

        @keyframes loader-3116-orbit-a {
          from {
            transform:
              translate(-50%, -50%)
              rotate(17deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(377deg)
              rotateZ(360deg);
          }
        }

        @keyframes loader-3116-orbit-b {
          from {
            transform:
              translate(-50%, -50%)
              rotate(77deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(-283deg)
              rotateZ(-360deg);
          }
        }

        @keyframes loader-3116-orbit-c {
          from {
            transform:
              translate(-50%, -50%)
              rotate(137deg)
              rotateZ(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(497deg)
              rotateZ(360deg);
          }
        }

        @keyframes loader-3116-shell-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-3116-shell-pulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.95);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.07);
          }
        }

        @keyframes loader-3116-core-pulse {
          0% {
            transform: scale(0.9);
            box-shadow:
              0 0 3px #ffffff,
              0 0 8px #dff8ff,
              0 0 15px #67e8f9,
              0 0 23px #38bdf8,
              0 0 34px #3b82f6,
              0 0 48px rgba(37, 99, 235, 0.5);
          }

          100% {
            transform: scale(1.11);
            box-shadow:
              0 0 6px #ffffff,
              0 0 15px #dff8ff,
              0 0 28px #67e8f9,
              0 0 42px #38bdf8,
              0 0 60px #3b82f6,
              0 0 84px rgba(37, 99, 235, 0.78);
          }
        }

        @keyframes loader-3116-core-flicker {
          0% {
            filter: brightness(1);
          }

          50% {
            filter: brightness(1.18);
          }

          100% {
            filter: brightness(0.92);
          }
        }

        @keyframes loader-3116-core-ring {
          from {
            transform: scale(0.92);
            opacity: 0.45;
          }

          to {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes loader-3116-main-bolt {
          0%,
          14%,
          18%,
          54%,
          58%,
          100% {
            opacity: 1;
          }

          15%,
          17%,
          55%,
          57% {
            opacity: 0.25;
          }
        }

        @keyframes loader-3116-bolt-scale {
          from {
            transform: scale(0.92);
          }

          to {
            transform: scale(1.12);
          }
        }

        @keyframes loader-3116-discharge {
          0% {
            opacity: 0.8;
            transform:
              translate(-50%, -50%)
              scale(0.42);
            box-shadow:
              0 0 12px rgba(56, 189, 248, 0.4),
              inset 0 0 12px rgba(56, 189, 248, 0.2);
          }

          60% {
            opacity: 0.24;
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.85);
            box-shadow:
              0 0 4px rgba(56, 189, 248, 0),
              inset 0 0 4px rgba(56, 189, 248, 0);
          }
        }

        @keyframes loader-3116-lightning-flash {
          0%,
          5% {
            opacity: 0;
          }

          6% {
            opacity: 1;
          }

          9% {
            opacity: 0.2;
          }

          12% {
            opacity: 1;
          }

          17% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes loader-3116-plasma-a {
          0% {
            opacity: 0;
            width: 8px;
          }

          25% {
            opacity: 1;
          }

          55% {
            opacity: 0.9;
            width: 40px;
          }

          100% {
            opacity: 0;
            width: 18px;
          }
        }

        @keyframes loader-3116-plasma-b {
          0% {
            opacity: 0;
            width: 14px;
          }

          35% {
            opacity: 1;
            width: 46px;
          }

          65% {
            opacity: 0.4;
          }

          100% {
            opacity: 0;
            width: 10px;
          }
        }

        @keyframes loader-3116-shard-pulse {
          0%,
          100% {
            opacity: 0.14;
            height: 7px;
            filter: brightness(0.7);
          }

          50% {
            opacity: 1;
            height: 15px;
            filter: brightness(1.5);
          }
        }

        @keyframes loader-3116-particle-1 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(64px, -74px) scale(1);
          }
        }

        @keyframes loader-3116-particle-2 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.5);
          }

          16% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-72px, -48px) scale(0.8);
          }
        }

        @keyframes loader-3116-particle-3 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.2);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(78px, 29px) scale(1.2);
          }
        }

        @keyframes loader-3116-particle-4 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.6);
          }

          21% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-63px, 68px) scale(0.9);
          }
        }

        @keyframes loader-3116-particle-5 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }

          18% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(19px, -91px) scale(1.1);
          }
        }

        @keyframes loader-3116-particle-6 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4);
          }

          24% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-18px, 88px) scale(0.8);
          }
        }

        @keyframes loader-3116-particle-7 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(86px, -17px) scale(1);
          }
        }

        @keyframes loader-3116-particle-8 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.45);
          }

          22% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-89px, 14px) scale(0.9);
          }
        }

        @keyframes loader-3116-particle-9 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.35);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(55px, 72px) scale(1);
          }
        }

        @keyframes loader-3116-particle-10 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4);
          }

          18% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-49px, -78px) scale(1.1);
          }
        }

        @keyframes loader-3116-particle-11 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }

          24% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(75px, 52px) scale(0.9);
          }
        }

        @keyframes loader-3116-particle-12 {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.5);
          }

          19% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-77px, 45px) scale(0.8);
          }
        }
      `}</style>

        <div className="loader-3116">
          <div className="loader-3116-field" />

          <div className="loader-3116-ring loader-3116-ring--outer" />
          <div className="loader-3116-ring loader-3116-ring--middle" />
          <div className="loader-3116-ring loader-3116-ring--inner" />

          <div className="loader-3116-orbit loader-3116-orbit--a" />
          <div className="loader-3116-orbit loader-3116-orbit--b" />
          <div className="loader-3116-orbit loader-3116-orbit--c" />

          <span className="loader-3116-shard loader-3116-shard--1" />
          <span className="loader-3116-shard loader-3116-shard--2" />
          <span className="loader-3116-shard loader-3116-shard--3" />
          <span className="loader-3116-shard loader-3116-shard--4" />
          <span className="loader-3116-shard loader-3116-shard--5" />
          <span className="loader-3116-shard loader-3116-shard--6" />
          <span className="loader-3116-shard loader-3116-shard--7" />
          <span className="loader-3116-shard loader-3116-shard--8" />
          <span className="loader-3116-shard loader-3116-shard--9" />
          <span className="loader-3116-shard loader-3116-shard--10" />
          <span className="loader-3116-shard loader-3116-shard--11" />
          <span className="loader-3116-shard loader-3116-shard--12" />

          <span className="loader-3116-lightning loader-3116-lightning--1" />
          <span className="loader-3116-lightning loader-3116-lightning--2" />
          <span className="loader-3116-lightning loader-3116-lightning--3" />
          <span className="loader-3116-lightning loader-3116-lightning--4" />
          <span className="loader-3116-lightning loader-3116-lightning--5" />
          <span className="loader-3116-lightning loader-3116-lightning--6" />
          <span className="loader-3116-lightning loader-3116-lightning--7" />
          <span className="loader-3116-lightning loader-3116-lightning--8" />

          <div className="loader-3116-plasma loader-3116-plasma--1" />
          <div className="loader-3116-plasma loader-3116-plasma--2" />
          <div className="loader-3116-plasma loader-3116-plasma--3" />

          <div className="loader-3116-discharge" />
          <div className="loader-3116-discharge loader-3116-discharge--b" />
          <div className="loader-3116-discharge loader-3116-discharge--c" />

          <span className="loader-3116-particle loader-3116-particle--1" />
          <span className="loader-3116-particle loader-3116-particle--2" />
          <span className="loader-3116-particle loader-3116-particle--3" />
          <span className="loader-3116-particle loader-3116-particle--4" />
          <span className="loader-3116-particle loader-3116-particle--5" />
          <span className="loader-3116-particle loader-3116-particle--6" />
          <span className="loader-3116-particle loader-3116-particle--7" />
          <span className="loader-3116-particle loader-3116-particle--8" />
          <span className="loader-3116-particle loader-3116-particle--9" />
          <span className="loader-3116-particle loader-3116-particle--10" />
          <span className="loader-3116-particle loader-3116-particle--11" />
          <span className="loader-3116-particle loader-3116-particle--12" />

          <div className="loader-3116-core-shell">
            <div className="loader-3116-core">
              <span className="loader-3116-bolt-main" />
            </div>
          </div>
        </div>
      </>
    ),
    html: `<div class="Loader">
    <div class="Loader-field"></div>

    <div class="Loader-ring Loader-ring--outer"></div>
    <div class="Loader-ring Loader-ring--middle"></div>
    <div class="Loader-ring Loader-ring--inner"></div>

    <div class="Loader-orbit Loader-orbit--a"></div>
    <div class="Loader-orbit Loader-orbit--b"></div>
    <div class="Loader-orbit Loader-orbit--c"></div>

    <span class="Loader-shard Loader-shard--1"></span>
    <span class="Loader-shard Loader-shard--2"></span>
    <span class="Loader-shard Loader-shard--3"></span>
    <span class="Loader-shard Loader-shard--4"></span>
    <span class="Loader-shard Loader-shard--5"></span>
    <span class="Loader-shard Loader-shard--6"></span>
    <span class="Loader-shard Loader-shard--7"></span>
    <span class="Loader-shard Loader-shard--8"></span>
    <span class="Loader-shard Loader-shard--9"></span>
    <span class="Loader-shard Loader-shard--10"></span>
    <span class="Loader-shard Loader-shard--11"></span>
    <span class="Loader-shard Loader-shard--12"></span>

    <span class="Loader-lightning Loader-lightning--1"></span>
    <span class="Loader-lightning Loader-lightning--2"></span>
    <span class="Loader-lightning Loader-lightning--3"></span>
    <span class="Loader-lightning Loader-lightning--4"></span>
    <span class="Loader-lightning Loader-lightning--5"></span>
    <span class="Loader-lightning Loader-lightning--6"></span>
    <span class="Loader-lightning Loader-lightning--7"></span>
    <span class="Loader-lightning Loader-lightning--8"></span>

    <div class="Loader-plasma Loader-plasma--1"></div>
    <div class="Loader-plasma Loader-plasma--2"></div>
    <div class="Loader-plasma Loader-plasma--3"></div>

    <div class="Loader-discharge"></div>
    <div class="Loader-discharge Loader-discharge--b"></div>
    <div class="Loader-discharge Loader-discharge--c"></div>

    <span class="Loader-particle Loader-particle--1"></span>
    <span class="Loader-particle Loader-particle--2"></span>
    <span class="Loader-particle Loader-particle--3"></span>
    <span class="Loader-particle Loader-particle--4"></span>
    <span class="Loader-particle Loader-particle--5"></span>
    <span class="Loader-particle Loader-particle--6"></span>
    <span class="Loader-particle Loader-particle--7"></span>
    <span class="Loader-particle Loader-particle--8"></span>
    <span class="Loader-particle Loader-particle--9"></span>
    <span class="Loader-particle Loader-particle--10"></span>
    <span class="Loader-particle Loader-particle--11"></span>
    <span class="Loader-particle Loader-particle--12"></span>

    <div class="Loader-core-shell">
        <div class="Loader-core">
            <span class="Loader-bolt-main"></span>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --electric-white: #ffffff;
    --electric-ice: #dff8ff;
    --electric-cyan: #67e8f9;
    --electric-blue: #38bdf8;
    --electric-main: #3b82f6;
    --electric-deep: #1d4ed8;
    --electric-dark: #172554;

    position: relative;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
    transform: translateZ(0);
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -24px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 255, 255, 0.09) 0%,
            rgba(103, 232, 249, 0.08) 16%,
            rgba(59, 130, 246, 0.08) 28%,
            rgba(37, 99, 235, 0.04) 44%,
            transparent 68%
        );
    filter: blur(12px);
    animation: Loader-aura 1.8s ease-in-out infinite alternate;
    pointer-events: none;
}

.Loader::after {
    content: "";
    position: absolute;
    width: 145px;
    height: 145px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg 8deg,
            rgba(125, 211, 252, 0.08) 8deg 9deg,
            rgba(255, 255, 255, 0) 9deg 18deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 62%,
            #000 63% 66%,
            transparent 67%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 62%,
            #000 63% 66%,
            transparent 67%
        );
    animation: Loader-rune-rotation 16s linear infinite;
    pointer-events: none;
}

.Loader-field {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-field::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 102px;
    height: 102px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(125, 211, 252, 0.12);
    box-shadow:
        0 0 10px rgba(56, 189, 248, 0.1),
        inset 0 0 20px rgba(59, 130, 246, 0.04);
    animation: Loader-field-pulse 1.5s ease-in-out infinite;
}

.Loader-field::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 128px;
    height: 128px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px dashed rgba(96, 165, 250, 0.14);
    animation: Loader-field-spin 8s linear infinite reverse;
}

.Loader-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-ring--outer {
    width: 154px;
    height: 154px;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(59, 130, 246, 0.08);
    border-top-color: rgba(255, 255, 255, 0.9);
    border-right-color: #38bdf8;
    border-bottom-color: rgba(37, 99, 235, 0.25);
    border-left-color: #2563eb;
    box-shadow:
        0 0 8px rgba(255, 255, 255, 0.24),
        0 0 18px rgba(56, 189, 248, 0.3),
        0 0 34px rgba(37, 99, 235, 0.2),
        inset 0 0 18px rgba(56, 189, 248, 0.08);
    animation: Loader-spin-outer 3.6s linear infinite;
}

.Loader-ring--outer::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: inherit;
    border: 1px dashed rgba(125, 211, 252, 0.3);
    animation: Loader-spin-inner 5s linear infinite reverse;
}

.Loader-ring--outer::after {
    content: "";
    position: absolute;
    inset: 15px;
    border-radius: inherit;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 28deg,
            rgba(103, 232, 249, 0.32) 28deg 31deg,
            transparent 31deg 74deg,
            rgba(59, 130, 246, 0.26) 74deg 78deg,
            transparent 78deg 148deg,
            rgba(255, 255, 255, 0.4) 148deg 150deg,
            transparent 150deg 232deg,
            rgba(56, 189, 248, 0.28) 232deg 236deg,
            transparent 236deg 360deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 77%,
            #000 78% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 77%,
            #000 78% 82%,
            transparent 83%
        );
}

.Loader-ring--middle {
    width: 122px;
    height: 122px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 30deg,
            transparent 0deg 32deg,
            #60a5fa 32deg 35deg,
            transparent 35deg 92deg,
            #ffffff 92deg 94deg,
            transparent 94deg 164deg,
            #38bdf8 164deg 168deg,
            transparent 168deg 250deg,
            #2563eb 250deg 255deg,
            transparent 255deg 360deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 83%,
            #000 84% 100%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 83%,
            #000 84% 100%
        );
    filter:
        drop-shadow(0 0 5px #38bdf8)
        drop-shadow(0 0 12px rgba(37, 99, 235, 0.55));
    animation: Loader-spin-middle 2.2s linear infinite reverse;
}

.Loader-ring--inner {
    width: 91px;
    height: 91px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(147, 197, 253, 0.15);
    box-shadow:
        inset 0 0 12px rgba(56, 189, 248, 0.11),
        0 0 12px rgba(59, 130, 246, 0.11);
    animation: Loader-inner-breathe 1s ease-in-out infinite alternate;
}

.Loader-ring--inner::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: inherit;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #38bdf8;
    border-bottom: 2px solid transparent;
    border-left: 2px solid #2563eb;
    filter:
        drop-shadow(0 0 4px #ffffff)
        drop-shadow(0 0 8px #3b82f6);
    animation: Loader-spin-inner 0.95s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 136px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid rgba(125, 211, 252, 0.2);
    pointer-events: none;
}

.Loader-orbit--a {
    transform: translate(-50%, -50%) rotate(17deg);
    animation: Loader-orbit-a 4s linear infinite;
}

.Loader-orbit--b {
    transform: translate(-50%, -50%) rotate(77deg);
    animation: Loader-orbit-b 3.2s linear infinite reverse;
}

.Loader-orbit--c {
    transform: translate(-50%, -50%) rotate(137deg);
    animation: Loader-orbit-c 4.6s linear infinite;
}

.Loader-orbit::before,
.Loader-orbit::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 5px;
    height: 5px;
    margin-top: -2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0 0 4px #ffffff,
        0 0 10px #38bdf8,
        0 0 18px #2563eb;
}

.Loader-orbit::before {
    left: -2px;
}

.Loader-orbit::after {
    right: -2px;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 70px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1),
            rgba(56, 189, 248, 0.08) 35%,
            rgba(37, 99, 235, 0.04) 58%,
            transparent 70%
        );
    box-shadow:
        inset 0 0 20px rgba(125, 211, 252, 0.12),
        0 0 24px rgba(37, 99, 235, 0.18);
    animation: Loader-shell-pulse 1.1s ease-in-out infinite;
}

.Loader-core-shell::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: inherit;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 20deg,
            rgba(255, 255, 255, 0.45) 20deg 22deg,
            transparent 22deg 76deg,
            rgba(56, 189, 248, 0.4) 76deg 79deg,
            transparent 79deg 150deg,
            rgba(37, 99, 235, 0.5) 150deg 153deg,
            transparent 153deg 220deg,
            rgba(103, 232, 249, 0.45) 220deg 223deg,
            transparent 223deg 360deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 82%,
            #000 83% 86%,
            transparent 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 82%,
            #000 83% 86%,
            transparent 87%
        );
    animation: Loader-shell-spin 1.35s linear infinite;
}

.Loader-core {
    position: relative;
    z-index: 8;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 42% 36%,
            #ffffff 0%,
            #ffffff 8%,
            #e0f2fe 15%,
            #7dd3fc 25%,
            #38bdf8 37%,
            #3b82f6 50%,
            #1d4ed8 65%,
            #172554 82%,
            rgba(23, 37, 84, 0) 100%
        );
    box-shadow:
        0 0 4px #ffffff,
        0 0 10px #dff8ff,
        0 0 18px #67e8f9,
        0 0 30px #38bdf8,
        0 0 45px #3b82f6,
        0 0 65px rgba(37, 99, 235, 0.62);
    animation:
        Loader-core-pulse 0.68s ease-in-out infinite alternate,
        Loader-core-flicker 0.12s steps(2, end) infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow:
        inset 0 0 8px rgba(255, 255, 255, 0.85),
        0 0 8px rgba(255, 255, 255, 0.5);
    animation: Loader-core-ring 0.8s ease-in-out infinite alternate;
}

.Loader-core::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    left: 11px;
    top: 8px;
    border-radius: 50%;
    background: white;
    box-shadow:
        0 0 4px white,
        0 0 9px white;
    filter: blur(0.3px);
}

.Loader-bolt-main {
    position: absolute;
    z-index: 12;
    width: 13px;
    height: 49px;
    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #e0f2fe 24%,
            #7dd3fc 58%,
            #3b82f6 100%
        );
    clip-path:
        polygon(
            57% 0%,
            100% 0%,
            72% 31%,
            100% 31%,
            57% 64%,
            77% 64%,
            16% 100%,
            35% 60%,
            7% 60%,
            38% 28%,
            17% 28%
        );
    filter:
        drop-shadow(0 0 3px white)
        drop-shadow(0 0 7px #7dd3fc)
        drop-shadow(0 0 13px #3b82f6)
        drop-shadow(0 0 19px #2563eb);
    animation:
        Loader-main-bolt 0.36s steps(2, end) infinite,
        Loader-bolt-scale 0.8s ease-in-out infinite alternate;
}

.Loader-discharge {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(125, 211, 252, 0.5);
    opacity: 0;
    animation: Loader-discharge 1.5s ease-out infinite;
}

.Loader-discharge--b {
    animation-delay: 0.5s;
}

.Loader-discharge--c {
    animation-delay: 1s;
}

.Loader-lightning {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 48px;
    transform-origin: 50% 0%;
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #7dd3fc 35%,
            #3b82f6 75%,
            transparent
        );
    clip-path:
        polygon(
            40% 0,
            100% 0,
            63% 30%,
            100% 30%,
            36% 64%,
            72% 64%,
            0 100%,
            27% 58%,
            0 58%,
            40% 29%,
            8% 29%
        );
    filter:
        drop-shadow(0 0 3px white)
        drop-shadow(0 0 7px #38bdf8)
        drop-shadow(0 0 11px #2563eb);
    opacity: 0;
    animation: Loader-lightning-flash 1.35s steps(2, end) infinite;
}

.Loader-lightning--1 {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-69px);
}

.Loader-lightning--2 {
    transform: translate(-50%, -50%) rotate(45deg) translateY(-69px);
    animation-delay: 0.18s;
}

.Loader-lightning--3 {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-69px);
    animation-delay: 0.34s;
}

.Loader-lightning--4 {
    transform: translate(-50%, -50%) rotate(135deg) translateY(-69px);
    animation-delay: 0.52s;
}

.Loader-lightning--5 {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-69px);
    animation-delay: 0.68s;
}

.Loader-lightning--6 {
    transform: translate(-50%, -50%) rotate(225deg) translateY(-69px);
    animation-delay: 0.84s;
}

.Loader-lightning--7 {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-69px);
    animation-delay: 1s;
}

.Loader-lightning--8 {
    transform: translate(-50%, -50%) rotate(315deg) translateY(-69px);
    animation-delay: 1.16s;
}

.Loader-plasma {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 68px;
    height: 68px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

.Loader-plasma::before,
.Loader-plasma::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 2px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background:
        linear-gradient(
            90deg,
            transparent,
            #ffffff,
            #67e8f9,
            #3b82f6,
            transparent
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 10px #38bdf8;
    transform-origin: left center;
    opacity: 0;
}

.Loader-plasma--1::before {
    transform: rotate(12deg) translateX(19px);
    animation: Loader-plasma-a 0.8s ease-in-out infinite;
}

.Loader-plasma--1::after {
    transform: rotate(192deg) translateX(19px);
    animation: Loader-plasma-b 1.05s ease-in-out infinite 0.2s;
}

.Loader-plasma--2::before {
    transform: rotate(74deg) translateX(19px);
    animation: Loader-plasma-b 0.9s ease-in-out infinite 0.12s;
}

.Loader-plasma--2::after {
    transform: rotate(254deg) translateX(19px);
    animation: Loader-plasma-a 1.12s ease-in-out infinite 0.3s;
}

.Loader-plasma--3::before {
    transform: rotate(132deg) translateX(19px);
    animation: Loader-plasma-a 0.72s ease-in-out infinite 0.08s;
}

.Loader-plasma--3::after {
    transform: rotate(312deg) translateX(19px);
    animation: Loader-plasma-b 0.92s ease-in-out infinite 0.4s;
}

.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    margin: -2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0 0 4px #ffffff,
        0 0 9px #38bdf8,
        0 0 14px #2563eb;
    opacity: 0;
}

.Loader-particle--1 {
    animation: Loader-particle-1 1.9s ease-out infinite;
}

.Loader-particle--2 {
    animation: Loader-particle-2 2.1s ease-out infinite 0.2s;
}

.Loader-particle--3 {
    animation: Loader-particle-3 1.7s ease-out infinite 0.4s;
}

.Loader-particle--4 {
    animation: Loader-particle-4 2.3s ease-out infinite 0.1s;
}

.Loader-particle--5 {
    animation: Loader-particle-5 2s ease-out infinite 0.6s;
}

.Loader-particle--6 {
    animation: Loader-particle-6 1.8s ease-out infinite 0.3s;
}

.Loader-particle--7 {
    animation: Loader-particle-7 2.25s ease-out infinite 0.45s;
}

.Loader-particle--8 {
    animation: Loader-particle-8 1.95s ease-out infinite 0.8s;
}

.Loader-particle--9 {
    animation: Loader-particle-9 2.15s ease-out infinite 0.5s;
}

.Loader-particle--10 {
    animation: Loader-particle-10 1.75s ease-out infinite 0.7s;
}

.Loader-particle--11 {
    animation: Loader-particle-11 2.4s ease-out infinite 0.12s;
}

.Loader-particle--12 {
    animation: Loader-particle-12 1.85s ease-out infinite 0.92s;
}

.Loader-shard {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 12px;
    border-radius: 999px;
    transform-origin: 50% 50%;
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #38bdf8,
            transparent
        );
    box-shadow:
        0 0 6px #38bdf8;
    opacity: 0.55;
}

.Loader-shard--1 {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-77px);
}

.Loader-shard--2 {
    transform: translate(-50%, -50%) rotate(30deg) translateY(-77px);
}

.Loader-shard--3 {
    transform: translate(-50%, -50%) rotate(60deg) translateY(-77px);
}

.Loader-shard--4 {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-77px);
}

.Loader-shard--5 {
    transform: translate(-50%, -50%) rotate(120deg) translateY(-77px);
}

.Loader-shard--6 {
    transform: translate(-50%, -50%) rotate(150deg) translateY(-77px);
}

.Loader-shard--7 {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-77px);
}

.Loader-shard--8 {
    transform: translate(-50%, -50%) rotate(210deg) translateY(-77px);
}

.Loader-shard--9 {
    transform: translate(-50%, -50%) rotate(240deg) translateY(-77px);
}

.Loader-shard--10 {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-77px);
}

.Loader-shard--11 {
    transform: translate(-50%, -50%) rotate(300deg) translateY(-77px);
}

.Loader-shard--12 {
    transform: translate(-50%, -50%) rotate(330deg) translateY(-77px);
}

.Loader-shard--1,
.Loader-shard--2,
.Loader-shard--3,
.Loader-shard--4,
.Loader-shard--5,
.Loader-shard--6,
.Loader-shard--7,
.Loader-shard--8,
.Loader-shard--9,
.Loader-shard--10,
.Loader-shard--11,
.Loader-shard--12 {
    animation: Loader-shard-pulse 1s ease-in-out infinite;
}

@keyframes Loader-aura {
    from {
        opacity: 0.55;
        transform: scale(0.96);
    }

    to {
        opacity: 1;
        transform: scale(1.06);
    }
}

@keyframes Loader-rune-rotation {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-field-spin {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-field-pulse {
    0%,
    100% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(0.98);
    }

    50% {
        opacity: 0.85;
        transform: translate(-50%, -50%) scale(1.05);
    }
}

@keyframes Loader-spin-outer {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-spin-middle {
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes Loader-spin-inner {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-inner-breathe {
    from {
        opacity: 0.55;
        transform: translate(-50%, -50%) scale(0.96);
    }

    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.04);
    }
}

@keyframes Loader-shell-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-shell-pulse {
    0%,
    100% {
        transform: translate(-50%, -50%) scale(0.95);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.07);
    }
}

@keyframes Loader-core-pulse {
    from {
        transform: scale(0.9);
    }

    to {
        transform: scale(1.11);
    }
}

@keyframes Loader-core-flicker {
    0% {
        filter: brightness(1);
    }

    50% {
        filter: brightness(1.18);
    }

    100% {
        filter: brightness(0.92);
    }
}

@keyframes Loader-core-ring {
    from {
        transform: scale(0.92);
        opacity: 0.45;
    }

    to {
        transform: scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-main-bolt {
    0%,
    14%,
    18%,
    54%,
    58%,
    100% {
        opacity: 1;
    }

    15%,
    17%,
    55%,
    57% {
        opacity: 0.25;
    }
}

@keyframes Loader-bolt-scale {
    from {
        transform: scale(0.92);
    }

    to {
        transform: scale(1.12);
    }
}

@keyframes Loader-discharge {
    0% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(0.42);
    }

    60% {
        opacity: 0.24;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.85);
    }
}

@keyframes Loader-lightning-flash {
    0%,
    5% {
        opacity: 0;
    }

    6% {
        opacity: 1;
    }

    9% {
        opacity: 0.2;
    }

    12% {
        opacity: 1;
    }

    17%,
    100% {
        opacity: 0;
    }
}

@keyframes Loader-plasma-a {
    0% {
        opacity: 0;
        width: 8px;
    }

    25% {
        opacity: 1;
    }

    55% {
        opacity: 0.9;
        width: 40px;
    }

    100% {
        opacity: 0;
        width: 18px;
    }
}

@keyframes Loader-plasma-b {
    0% {
        opacity: 0;
        width: 14px;
    }

    35% {
        opacity: 1;
        width: 46px;
    }

    65% {
        opacity: 0.4;
    }

    100% {
        opacity: 0;
        width: 10px;
    }
}

@keyframes Loader-shard-pulse {
    0%,
    100% {
        opacity: 0.14;
        filter: brightness(0.7);
    }

    50% {
        opacity: 1;
        filter: brightness(1.5);
    }
}

@keyframes Loader-particle-1 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    20% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(64px, -74px) scale(1);
    }
}

@keyframes Loader-particle-2 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.5);
    }

    16% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-72px, -48px) scale(0.8);
    }
}

@keyframes Loader-particle-3 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    25% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(78px, 29px) scale(1.2);
    }
}

@keyframes Loader-particle-4 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.6);
    }

    21% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-63px, 68px) scale(0.9);
    }
}

@keyframes Loader-particle-5 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    18% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(19px, -91px) scale(1.1);
    }
}

@keyframes Loader-particle-6 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    24% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-18px, 88px) scale(0.8);
    }
}

@keyframes Loader-particle-7 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    20% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(86px, -17px) scale(1);
    }
}

@keyframes Loader-particle-8 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.45);
    }

    22% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-89px, 14px) scale(0.9);
    }
}

@keyframes Loader-particle-9 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    20% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(55px, 72px) scale(1);
    }
}

@keyframes Loader-particle-10 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    18% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-49px, -78px) scale(1.1);
    }
}

@keyframes Loader-particle-11 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    24% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(75px, 52px) scale(0.9);
    }
}

@keyframes Loader-particle-12 {
    from {
        opacity: 0;
        transform: translate(0, 0) scale(0.5);
    }

    19% {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(-77px, 45px) scale(0.8);
    }
}

@keyframes Loader-orbit-a {
    to {
        transform: translate(-50%, -50%) rotate(377deg);
    }
}

@keyframes Loader-orbit-b {
    to {
        transform: translate(-50%, -50%) rotate(-283deg);
    }
}

@keyframes Loader-orbit-c {
    to {
        transform: translate(-50%, -50%) rotate(497deg);
    }
}`,
  },
  {
    id: 3117,
    name: "Ancient Green Elemental",
    preview: (
      <div className="ld-3117">
        <div className="ld-3117-aura ld-3117-aura--1" />
        <div className="ld-3117-aura ld-3117-aura--2" />
        <div className="ld-3117-aura ld-3117-aura--3" />

        <div className="ld-3117-rune-ring ld-3117-rune-ring--outer">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3117-rune-ring ld-3117-rune-ring--middle">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3117-orbit ld-3117-orbit--1">
          <span />
        </div>

        <div className="ld-3117-orbit ld-3117-orbit--2">
          <span />
        </div>

        <div className="ld-3117-orbit ld-3117-orbit--3">
          <span />
        </div>

        <div className="ld-3117-vine ld-3117-vine--1">
          <span className="ld-3117-leaf ld-3117-leaf--1" />
          <span className="ld-3117-leaf ld-3117-leaf--2" />
          <span className="ld-3117-leaf ld-3117-leaf--3" />
        </div>

        <div className="ld-3117-vine ld-3117-vine--2">
          <span className="ld-3117-leaf ld-3117-leaf--4" />
          <span className="ld-3117-leaf ld-3117-leaf--5" />
          <span className="ld-3117-leaf ld-3117-leaf--6" />
        </div>

        <div className="ld-3117-vine ld-3117-vine--3">
          <span className="ld-3117-leaf ld-3117-leaf--7" />
          <span className="ld-3117-leaf ld-3117-leaf--8" />
          <span className="ld-3117-leaf ld-3117-leaf--9" />
        </div>

        <div className="ld-3117-vine ld-3117-vine--4">
          <span className="ld-3117-leaf ld-3117-leaf--10" />
          <span className="ld-3117-leaf ld-3117-leaf--11" />
          <span className="ld-3117-leaf ld-3117-leaf--12" />
        </div>

        <div className="ld-3117-root ld-3117-root--1" />
        <div className="ld-3117-root ld-3117-root--2" />
        <div className="ld-3117-root ld-3117-root--3" />
        <div className="ld-3117-root ld-3117-root--4" />
        <div className="ld-3117-root ld-3117-root--5" />
        <div className="ld-3117-root ld-3117-root--6" />

        <div className="ld-3117-wave ld-3117-wave--1" />
        <div className="ld-3117-wave ld-3117-wave--2" />
        <div className="ld-3117-wave ld-3117-wave--3" />

        <span className="ld-3117-spore ld-3117-spore--1" />
        <span className="ld-3117-spore ld-3117-spore--2" />
        <span className="ld-3117-spore ld-3117-spore--3" />
        <span className="ld-3117-spore ld-3117-spore--4" />
        <span className="ld-3117-spore ld-3117-spore--5" />
        <span className="ld-3117-spore ld-3117-spore--6" />
        <span className="ld-3117-spore ld-3117-spore--7" />
        <span className="ld-3117-spore ld-3117-spore--8" />
        <span className="ld-3117-spore ld-3117-spore--9" />
        <span className="ld-3117-spore ld-3117-spore--10" />
        <span className="ld-3117-spore ld-3117-spore--11" />
        <span className="ld-3117-spore ld-3117-spore--12" />
        <span className="ld-3117-spore ld-3117-spore--13" />
        <span className="ld-3117-spore ld-3117-spore--14" />
        <span className="ld-3117-spore ld-3117-spore--15" />
        <span className="ld-3117-spore ld-3117-spore--16" />

        <div className="ld-3117-shell">
          <div className="ld-3117-shell-ring" />

          <div className="ld-3117-core">
            <div className="ld-3117-core-glow" />

            <div className="ld-3117-symbol">
              <span className="ld-3117-symbol-stem" />
              <span className="ld-3117-symbol-leaf ld-3117-symbol-leaf--left" />
              <span className="ld-3117-symbol-leaf ld-3117-symbol-leaf--right" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura Loader-aura--1"></div>
    <div class="Loader-aura Loader-aura--2"></div>
    <div class="Loader-aura Loader-aura--3"></div>

    <div class="Loader-rune-ring Loader-rune-ring--outer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-rune-ring Loader-rune-ring--middle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <div class="Loader-vine Loader-vine--1">
        <span class="Loader-leaf Loader-leaf--1"></span>
        <span class="Loader-leaf Loader-leaf--2"></span>
        <span class="Loader-leaf Loader-leaf--3"></span>
    </div>

    <div class="Loader-vine Loader-vine--2">
        <span class="Loader-leaf Loader-leaf--4"></span>
        <span class="Loader-leaf Loader-leaf--5"></span>
        <span class="Loader-leaf Loader-leaf--6"></span>
    </div>

    <div class="Loader-vine Loader-vine--3">
        <span class="Loader-leaf Loader-leaf--7"></span>
        <span class="Loader-leaf Loader-leaf--8"></span>
        <span class="Loader-leaf Loader-leaf--9"></span>
    </div>

    <div class="Loader-vine Loader-vine--4">
        <span class="Loader-leaf Loader-leaf--10"></span>
        <span class="Loader-leaf Loader-leaf--11"></span>
        <span class="Loader-leaf Loader-leaf--12"></span>
    </div>

    <div class="Loader-root Loader-root--1"></div>
    <div class="Loader-root Loader-root--2"></div>
    <div class="Loader-root Loader-root--3"></div>
    <div class="Loader-root Loader-root--4"></div>
    <div class="Loader-root Loader-root--5"></div>
    <div class="Loader-root Loader-root--6"></div>

    <div class="Loader-wave Loader-wave--1"></div>
    <div class="Loader-wave Loader-wave--2"></div>
    <div class="Loader-wave Loader-wave--3"></div>

    <span class="Loader-spore Loader-spore--1"></span>
    <span class="Loader-spore Loader-spore--2"></span>
    <span class="Loader-spore Loader-spore--3"></span>
    <span class="Loader-spore Loader-spore--4"></span>
    <span class="Loader-spore Loader-spore--5"></span>
    <span class="Loader-spore Loader-spore--6"></span>
    <span class="Loader-spore Loader-spore--7"></span>
    <span class="Loader-spore Loader-spore--8"></span>
    <span class="Loader-spore Loader-spore--9"></span>
    <span class="Loader-spore Loader-spore--10"></span>
    <span class="Loader-spore Loader-spore--11"></span>
    <span class="Loader-spore Loader-spore--12"></span>
    <span class="Loader-spore Loader-spore--13"></span>
    <span class="Loader-spore Loader-spore--14"></span>
    <span class="Loader-spore Loader-spore--15"></span>
    <span class="Loader-spore Loader-spore--16"></span>

    <div class="Loader-shell">
        <div class="Loader-shell-ring"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-symbol">
                <span class="Loader-symbol-stem"></span>
                <span class="Loader-symbol-leaf Loader-symbol-leaf--left"></span>
                <span class="Loader-symbol-leaf Loader-symbol-leaf--right"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --green-white: #f0fff4;
    --green-mint: #bbf7d0;
    --green-light: #86efac;
    --green-main: #22c55e;
    --green-bright: #4ade80;
    --green-emerald: #10b981;
    --green-deep: #15803d;
    --green-dark: #052e16;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -26px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(240, 255, 244, 0.12) 0%,
            rgba(134, 239, 172, 0.12) 14%,
            rgba(34, 197, 94, 0.1) 28%,
            rgba(16, 185, 129, 0.06) 45%,
            transparent 70%
        );
    filter: blur(13px);
    animation: Loader-atmosphere 2.4s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 10deg,
            rgba(134, 239, 172, 0.12) 10deg 11deg,
            transparent 11deg 22deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 71%,
            transparent 72%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 71%,
            transparent 72%
        );
    animation: Loader-ancient-spin 24s linear infinite;
}

.Loader-aura {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.Loader-aura--1 {
    width: 164px;
    height: 164px;
    background:
        radial-gradient(
            circle,
            transparent 45%,
            rgba(34, 197, 94, 0.08) 54%,
            rgba(74, 222, 128, 0.06) 65%,
            transparent 76%
        );
    filter: blur(4px);
    animation: Loader-aura-one 2s ease-in-out infinite;
}

.Loader-aura--2 {
    width: 142px;
    height: 142px;
    border: 1px solid rgba(74, 222, 128, 0.1);
    box-shadow:
        0 0 16px rgba(34, 197, 94, 0.12),
        inset 0 0 16px rgba(34, 197, 94, 0.07);
    animation: Loader-aura-two 3.4s ease-in-out infinite;
}

.Loader-aura--3 {
    width: 118px;
    height: 118px;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(134, 239, 172, 0.12),
            transparent 18%,
            rgba(34, 197, 94, 0.12),
            transparent 40%,
            rgba(16, 185, 129, 0.1),
            transparent 65%
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    animation: Loader-aura-three 5s linear infinite;
}

.Loader-rune-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-rune-ring--outer {
    width: 170px;
    height: 170px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(74, 222, 128, 0.18);
    box-shadow:
        0 0 12px rgba(34, 197, 94, 0.12),
        inset 0 0 16px rgba(16, 185, 129, 0.08);
    animation: Loader-rune-outer 12s linear infinite;
}

.Loader-rune-ring--middle {
    width: 130px;
    height: 130px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(134, 239, 172, 0.22);
    animation: Loader-rune-middle 8s linear infinite reverse;
}

.Loader-rune-ring span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 12px;
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #dcfce7,
            #4ade80,
            transparent
        );
    transform-origin: center;
    box-shadow:
        0 0 5px rgba(74, 222, 128, 0.8);
}

.Loader-rune-ring--outer span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(30deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(60deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(120deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(150deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(210deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(9) {
    transform: translate(-50%, -50%) rotate(240deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(10) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(11) {
    transform: translate(-50%, -50%) rotate(300deg) translateY(-84px);
}

.Loader-rune-ring--outer span:nth-child(12) {
    transform: translate(-50%, -50%) rotate(330deg) translateY(-84px);
}

.Loader-rune-ring--middle span {
    width: 2px;
    height: 8px;
}

.Loader-rune-ring--middle span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(135deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(225deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-64px);
}

.Loader-rune-ring--middle span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(315deg) translateY(-64px);
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 142px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(74, 222, 128, 0.18);
    pointer-events: none;
}

.Loader-orbit span {
    position: absolute;
    left: -3px;
    top: 50%;
    width: 7px;
    height: 7px;
    margin-top: -3.5px;
    border-radius: 50%;
    background: #dcfce7;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #86efac,
        0 0 15px #22c55e,
        0 0 25px rgba(16, 185, 129, 0.8);
}

.Loader-orbit--1 {
    animation: Loader-orbit-one 5s linear infinite;
}

.Loader-orbit--2 {
    animation: Loader-orbit-two 4.2s linear infinite reverse;
}

.Loader-orbit--3 {
    animation: Loader-orbit-three 5.8s linear infinite;
}

.Loader-vine {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 95px;
    height: 18px;
    border-top: 2px solid rgba(34, 197, 94, 0.6);
    border-radius: 50%;
    transform-origin: left center;
    filter: drop-shadow(0 0 5px rgba(34, 197, 94, 0.4));
}

.Loader-vine--1 {
    transform: rotate(20deg) translateX(22px);
    animation: Loader-vine-one 2.4s ease-in-out infinite alternate;
}

.Loader-vine--2 {
    transform: rotate(110deg) translateX(22px);
    animation: Loader-vine-two 2.8s ease-in-out infinite alternate;
}

.Loader-vine--3 {
    transform: rotate(200deg) translateX(22px);
    animation: Loader-vine-three 2.6s ease-in-out infinite alternate;
}

.Loader-vine--4 {
    transform: rotate(290deg) translateX(22px);
    animation: Loader-vine-four 3s ease-in-out infinite alternate;
}

.Loader-leaf {
    position: absolute;
    width: 14px;
    height: 8px;
    border-radius: 100% 0 100% 0;
    background:
        linear-gradient(
            135deg,
            #bbf7d0,
            #4ade80 38%,
            #16a34a 70%,
            #14532d
        );
    box-shadow:
        0 0 6px rgba(74, 222, 128, 0.75),
        inset 0 0 3px rgba(255, 255, 255, 0.25);
    transform-origin: center;
    animation: Loader-leaf-pulse 1.6s ease-in-out infinite alternate;
}

.Loader-leaf::after {
    content: "";
    position: absolute;
    left: 2px;
    right: 2px;
    top: 50%;
    height: 1px;
    background: rgba(220, 252, 231, 0.55);
    transform: rotate(-20deg);
}

.Loader-leaf--1,
.Loader-leaf--4,
.Loader-leaf--7,
.Loader-leaf--10 {
    left: 25px;
    top: -7px;
}

.Loader-leaf--2,
.Loader-leaf--5,
.Loader-leaf--8,
.Loader-leaf--11 {
    left: 50px;
    top: 4px;
    transform: rotate(180deg);
    animation-delay: 0.3s;
}

.Loader-leaf--3,
.Loader-leaf--6,
.Loader-leaf--9,
.Loader-leaf--12 {
    left: 72px;
    top: -7px;
    animation-delay: 0.6s;
}

.Loader-root {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 16px;
    border-bottom: 2px solid rgba(21, 128, 61, 0.7);
    border-radius: 50%;
    transform-origin: left center;
    opacity: 0.65;
    filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.4));
}

.Loader-root--1 {
    transform: rotate(5deg) translateX(30px);
    animation: Loader-root-pulse 1.9s ease-in-out infinite;
}

.Loader-root--2 {
    transform: rotate(65deg) translateX(30px);
    animation: Loader-root-pulse 2.1s ease-in-out infinite 0.2s;
}

.Loader-root--3 {
    transform: rotate(125deg) translateX(30px);
    animation: Loader-root-pulse 2s ease-in-out infinite 0.4s;
}

.Loader-root--4 {
    transform: rotate(185deg) translateX(30px);
    animation: Loader-root-pulse 2.2s ease-in-out infinite 0.6s;
}

.Loader-root--5 {
    transform: rotate(245deg) translateX(30px);
    animation: Loader-root-pulse 1.8s ease-in-out infinite 0.8s;
}

.Loader-root--6 {
    transform: rotate(305deg) translateX(30px);
    animation: Loader-root-pulse 2.3s ease-in-out infinite 1s;
}

.Loader-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 62px;
    height: 62px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(74, 222, 128, 0.55);
    opacity: 0;
    pointer-events: none;
}

.Loader-wave--1 {
    animation: Loader-wave 2s ease-out infinite;
}

.Loader-wave--2 {
    animation: Loader-wave 2s ease-out infinite 0.66s;
}

.Loader-wave--3 {
    animation: Loader-wave 2s ease-out infinite 1.32s;
}

.Loader-spore {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    margin: -2px;
    border-radius: 50%;
    background: #dcfce7;
    box-shadow:
        0 0 4px #ffffff,
        0 0 9px #86efac,
        0 0 14px #22c55e;
    opacity: 0;
}

.Loader-spore--1 {
    animation: Loader-spore-one 2.5s ease-out infinite;
}

.Loader-spore--2 {
    animation: Loader-spore-two 2.9s ease-out infinite 0.15s;
}

.Loader-spore--3 {
    animation: Loader-spore-three 2.3s ease-out infinite 0.4s;
}

.Loader-spore--4 {
    animation: Loader-spore-four 2.7s ease-out infinite 0.6s;
}

.Loader-spore--5 {
    animation: Loader-spore-five 3.1s ease-out infinite 0.2s;
}

.Loader-spore--6 {
    animation: Loader-spore-six 2.4s ease-out infinite 0.7s;
}

.Loader-spore--7 {
    animation: Loader-spore-seven 2.8s ease-out infinite 0.9s;
}

.Loader-spore--8 {
    animation: Loader-spore-eight 2.2s ease-out infinite 1.1s;
}

.Loader-spore--9 {
    animation: Loader-spore-nine 2.6s ease-out infinite 0.45s;
}

.Loader-spore--10 {
    animation: Loader-spore-ten 3s ease-out infinite 0.75s;
}

.Loader-spore--11 {
    animation: Loader-spore-eleven 2.35s ease-out infinite 1.2s;
}

.Loader-spore--12 {
    animation: Loader-spore-twelve 2.75s ease-out infinite 1.4s;
}

.Loader-spore--13 {
    animation: Loader-spore-thirteen 2.55s ease-out infinite 0.95s;
}

.Loader-spore--14 {
    animation: Loader-spore-fourteen 2.85s ease-out infinite 1.6s;
}

.Loader-spore--15 {
    animation: Loader-spore-fifteen 3.2s ease-out infinite 0.35s;
}

.Loader-spore--16 {
    animation: Loader-spore-sixteen 2.45s ease-out infinite 1.8s;
}

.Loader-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 84px;
    height: 84px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(220, 252, 231, 0.08),
            rgba(74, 222, 128, 0.08) 35%,
            rgba(22, 163, 74, 0.05) 55%,
            transparent 72%
        );
    box-shadow:
        0 0 24px rgba(34, 197, 94, 0.16),
        inset 0 0 18px rgba(134, 239, 172, 0.09);
    animation: Loader-shell-breathe 1.7s ease-in-out infinite;
}

.Loader-shell-ring {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 24deg,
            rgba(220, 252, 231, 0.8) 24deg 27deg,
            transparent 27deg 82deg,
            #4ade80 82deg 86deg,
            transparent 86deg 142deg,
            #22c55e 142deg 146deg,
            transparent 146deg 219deg,
            rgba(187, 247, 208, 0.75) 219deg 222deg,
            transparent 222deg 290deg,
            #10b981 290deg 295deg,
            transparent 295deg 360deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 84%,
            #000 85%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 84%,
            #000 85%
        );
    filter:
        drop-shadow(0 0 4px #4ade80)
        drop-shadow(0 0 9px rgba(34, 197, 94, 0.65));
    animation: Loader-shell-ring 2s linear infinite;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 39% 34%,
            #f0fff4 0%,
            #dcfce7 7%,
            #bbf7d0 14%,
            #86efac 24%,
            #4ade80 36%,
            #22c55e 50%,
            #16a34a 67%,
            #14532d 84%,
            #052e16 100%
        );
    box-shadow:
        0 0 6px #dcfce7,
        0 0 14px #86efac,
        0 0 24px #4ade80,
        0 0 38px #22c55e,
        0 0 58px rgba(16, 185, 129, 0.7),
        inset 0 0 10px rgba(255, 255, 255, 0.35);
    animation:
        Loader-core-breathe 0.9s ease-in-out infinite alternate,
        Loader-core-flicker 0.18s steps(2, end) infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(220, 252, 231, 0.6);
    box-shadow:
        inset 0 0 10px rgba(220, 252, 231, 0.45),
        0 0 8px rgba(134, 239, 172, 0.4);
    animation: Loader-core-inner 1.3s ease-in-out infinite alternate;
}

.Loader-core::after {
    content: "";
    position: absolute;
    left: 11px;
    top: 9px;
    width: 11px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.78);
    filter: blur(2px);
}

.Loader-core-glow {
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(134, 239, 172, 0.2),
            rgba(34, 197, 94, 0.11) 40%,
            transparent 70%
        );
    animation: Loader-core-glow 1.2s ease-in-out infinite alternate;
}

.Loader-symbol {
    position: relative;
    z-index: 20;
    width: 30px;
    height: 36px;
    filter:
        drop-shadow(0 0 3px #f0fff4)
        drop-shadow(0 0 8px #86efac);
}

.Loader-symbol-stem {
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: 3px;
    height: 25px;
    transform: translateX(-50%);
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #f0fff4,
            #bbf7d0,
            #4ade80
        );
}

.Loader-symbol-stem::before {
    content: "";
    position: absolute;
    left: 1px;
    top: -5px;
    width: 1px;
    height: 12px;
    background: #dcfce7;
    transform: rotate(25deg);
    transform-origin: bottom;
}

.Loader-symbol-leaf {
    position: absolute;
    width: 14px;
    height: 9px;
    background:
        linear-gradient(
            135deg,
            #f0fff4,
            #86efac 35%,
            #22c55e
        );
    border-radius: 100% 0 100% 0;
    animation: Loader-symbol-leaf 1.1s ease-in-out infinite alternate;
}

.Loader-symbol-leaf--left {
    left: 1px;
    top: 11px;
    transform: rotate(25deg);
}

.Loader-symbol-leaf--right {
    right: 1px;
    top: 6px;
    transform: scaleX(-1) rotate(25deg);
    animation-delay: 0.3s;
}

@keyframes Loader-atmosphere {
    from {
        opacity: 0.55;
        transform: scale(0.94);
    }

    to {
        opacity: 1;
        transform: scale(1.07);
    }
}

@keyframes Loader-ancient-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-aura-one {
    0%,
    100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(0.95);
    }

    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.06);
    }
}

@keyframes Loader-aura-two {
    0%,
    100% {
        opacity: 0.35;
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        opacity: 0.85;
        transform: translate(-50%, -50%) scale(1.08);
    }
}

@keyframes Loader-aura-three {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-rune-outer {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-rune-middle {
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform: translate(-50%, -50%) rotate(18deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(378deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform: translate(-50%, -50%) rotate(78deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(-282deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform: translate(-50%, -50%) rotate(138deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(498deg);
    }
}

@keyframes Loader-vine-one {
    from {
        transform: rotate(17deg) translateX(22px) scaleX(0.92);
    }

    to {
        transform: rotate(24deg) translateX(22px) scaleX(1.05);
    }
}

@keyframes Loader-vine-two {
    from {
        transform: rotate(106deg) translateX(22px) scaleX(0.93);
    }

    to {
        transform: rotate(114deg) translateX(22px) scaleX(1.06);
    }
}

@keyframes Loader-vine-three {
    from {
        transform: rotate(196deg) translateX(22px) scaleX(0.94);
    }

    to {
        transform: rotate(204deg) translateX(22px) scaleX(1.04);
    }
}

@keyframes Loader-vine-four {
    from {
        transform: rotate(286deg) translateX(22px) scaleX(0.92);
    }

    to {
        transform: rotate(294deg) translateX(22px) scaleX(1.07);
    }
}

@keyframes Loader-leaf-pulse {
    from {
        opacity: 0.55;
        filter: brightness(0.8);
    }

    to {
        opacity: 1;
        filter: brightness(1.4);
    }
}

@keyframes Loader-root-pulse {
    0%,
    100% {
        opacity: 0.25;
        width: 52px;
    }

    50% {
        opacity: 0.9;
        width: 78px;
    }
}

@keyframes Loader-wave {
    0% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(0.5);
        box-shadow:
            0 0 10px rgba(74, 222, 128, 0.4),
            inset 0 0 10px rgba(34, 197, 94, 0.2);
    }

    65% {
        opacity: 0.2;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(2.6);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform: translate(-50%, -50%) scale(0.95);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.06);
    }
}

@keyframes Loader-shell-ring {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.92);
        box-shadow:
            0 0 5px #dcfce7,
            0 0 11px #86efac,
            0 0 20px #4ade80,
            0 0 28px #22c55e,
            0 0 42px rgba(16, 185, 129, 0.55);
    }

    to {
        transform: scale(1.1);
        box-shadow:
            0 0 8px #ffffff,
            0 0 18px #bbf7d0,
            0 0 32px #4ade80,
            0 0 50px #22c55e,
            0 0 75px rgba(16, 185, 129, 0.85);
    }
}

@keyframes Loader-core-flicker {
    0% {
        filter: brightness(0.95);
    }

    50% {
        filter: brightness(1.16);
    }

    100% {
        filter: brightness(1);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.45;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.45;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.25);
    }
}

@keyframes Loader-symbol-leaf {
    from {
        filter: brightness(0.8);
    }

    to {
        filter: brightness(1.5);
    }
}

@keyframes Loader-spore-one {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(79px, -72px) scale(1.1);
    }
}

@keyframes Loader-spore-two {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-85px, -60px) scale(0.8);
    }
}

@keyframes Loader-spore-three {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(91px, 31px) scale(1.2);
    }
}

@keyframes Loader-spore-four {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.5);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-74px, 81px) scale(0.8);
    }
}

@keyframes Loader-spore-five {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(25px, -102px) scale(1);
    }
}

@keyframes Loader-spore-six {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    26% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-31px, 97px) scale(0.9);
    }
}

@keyframes Loader-spore-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(101px, -13px) scale(1.1);
    }
}

@keyframes Loader-spore-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.5);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-99px, 16px) scale(0.7);
    }
}

@keyframes Loader-spore-nine {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(62px, 87px) scale(1);
    }
}

@keyframes Loader-spore-ten {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.45);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-56px, -92px) scale(0.9);
    }
}

@keyframes Loader-spore-eleven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    23% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(90px, 68px) scale(1.2);
    }
}

@keyframes Loader-spore-twelve {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-93px, 57px) scale(0.8);
    }
}

@keyframes Loader-spore-thirteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(47px, -108px) scale(1.1);
    }
}

@keyframes Loader-spore-fourteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-46px, 107px) scale(0.9);
    }
}

@keyframes Loader-spore-fifteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.45);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(110px, 5px) scale(0.8);
    }
}

@keyframes Loader-spore-sixteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-109px, -8px) scale(1);
    }
}`,
  },
  {
    id: 3118,
    name: "Ancient Dune Singularity",
    preview: (
      <div className="ld-3118">
        <div className="ld-3118-atmosphere" />

        <div className="ld-3118-sun ld-3118-sun--1" />
        <div className="ld-3118-sun ld-3118-sun--2" />

        <div className="ld-3118-rune-ring ld-3118-rune-ring--outer">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3118-rune-ring ld-3118-rune-ring--inner">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3118-dune-ring ld-3118-dune-ring--1" />
        <div className="ld-3118-dune-ring ld-3118-dune-ring--2" />
        <div className="ld-3118-dune-ring ld-3118-dune-ring--3" />

        <div className="ld-3118-orbit ld-3118-orbit--1">
          <span />
        </div>

        <div className="ld-3118-orbit ld-3118-orbit--2">
          <span />
        </div>

        <div className="ld-3118-orbit ld-3118-orbit--3">
          <span />
        </div>

        <span className="ld-3118-shard ld-3118-shard--1" />
        <span className="ld-3118-shard ld-3118-shard--2" />
        <span className="ld-3118-shard ld-3118-shard--3" />
        <span className="ld-3118-shard ld-3118-shard--4" />
        <span className="ld-3118-shard ld-3118-shard--5" />
        <span className="ld-3118-shard ld-3118-shard--6" />
        <span className="ld-3118-shard ld-3118-shard--7" />
        <span className="ld-3118-shard ld-3118-shard--8" />
        <span className="ld-3118-shard ld-3118-shard--9" />
        <span className="ld-3118-shard ld-3118-shard--10" />
        <span className="ld-3118-shard ld-3118-shard--11" />
        <span className="ld-3118-shard ld-3118-shard--12" />

        <div className="ld-3118-wind ld-3118-wind--1" />
        <div className="ld-3118-wind ld-3118-wind--2" />
        <div className="ld-3118-wind ld-3118-wind--3" />
        <div className="ld-3118-wind ld-3118-wind--4" />

        <span className="ld-3118-sand ld-3118-sand--1" />
        <span className="ld-3118-sand ld-3118-sand--2" />
        <span className="ld-3118-sand ld-3118-sand--3" />
        <span className="ld-3118-sand ld-3118-sand--4" />
        <span className="ld-3118-sand ld-3118-sand--5" />
        <span className="ld-3118-sand ld-3118-sand--6" />
        <span className="ld-3118-sand ld-3118-sand--7" />
        <span className="ld-3118-sand ld-3118-sand--8" />
        <span className="ld-3118-sand ld-3118-sand--9" />
        <span className="ld-3118-sand ld-3118-sand--10" />
        <span className="ld-3118-sand ld-3118-sand--11" />
        <span className="ld-3118-sand ld-3118-sand--12" />
        <span className="ld-3118-sand ld-3118-sand--13" />
        <span className="ld-3118-sand ld-3118-sand--14" />
        <span className="ld-3118-sand ld-3118-sand--15" />
        <span className="ld-3118-sand ld-3118-sand--16" />
        <span className="ld-3118-sand ld-3118-sand--17" />
        <span className="ld-3118-sand ld-3118-sand--18" />
        <span className="ld-3118-sand ld-3118-sand--19" />
        <span className="ld-3118-sand ld-3118-sand--20" />

        <div className="ld-3118-wave ld-3118-wave--1" />
        <div className="ld-3118-wave ld-3118-wave--2" />
        <div className="ld-3118-wave ld-3118-wave--3" />

        <div className="ld-3118-core-shell">
          <div className="ld-3118-core-ring" />

          <div className="ld-3118-core">
            <div className="ld-3118-core-flare" />

            <div className="ld-3118-crystal">
              <span className="ld-3118-crystal-face ld-3118-crystal-face--1" />
              <span className="ld-3118-crystal-face ld-3118-crystal-face--2" />
              <span className="ld-3118-crystal-face ld-3118-crystal-face--3" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-atmosphere"></div>

    <div class="Loader-sun Loader-sun--1"></div>
    <div class="Loader-sun Loader-sun--2"></div>

    <div class="Loader-rune-ring Loader-rune-ring--outer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-rune-ring Loader-rune-ring--inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-dune-ring Loader-dune-ring--1"></div>
    <div class="Loader-dune-ring Loader-dune-ring--2"></div>
    <div class="Loader-dune-ring Loader-dune-ring--3"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-shard Loader-shard--1"></span>
    <span class="Loader-shard Loader-shard--2"></span>
    <span class="Loader-shard Loader-shard--3"></span>
    <span class="Loader-shard Loader-shard--4"></span>
    <span class="Loader-shard Loader-shard--5"></span>
    <span class="Loader-shard Loader-shard--6"></span>
    <span class="Loader-shard Loader-shard--7"></span>
    <span class="Loader-shard Loader-shard--8"></span>
    <span class="Loader-shard Loader-shard--9"></span>
    <span class="Loader-shard Loader-shard--10"></span>
    <span class="Loader-shard Loader-shard--11"></span>
    <span class="Loader-shard Loader-shard--12"></span>

    <div class="Loader-wind Loader-wind--1"></div>
    <div class="Loader-wind Loader-wind--2"></div>
    <div class="Loader-wind Loader-wind--3"></div>
    <div class="Loader-wind Loader-wind--4"></div>

    <span class="Loader-sand Loader-sand--1"></span>
    <span class="Loader-sand Loader-sand--2"></span>
    <span class="Loader-sand Loader-sand--3"></span>
    <span class="Loader-sand Loader-sand--4"></span>
    <span class="Loader-sand Loader-sand--5"></span>
    <span class="Loader-sand Loader-sand--6"></span>
    <span class="Loader-sand Loader-sand--7"></span>
    <span class="Loader-sand Loader-sand--8"></span>
    <span class="Loader-sand Loader-sand--9"></span>
    <span class="Loader-sand Loader-sand--10"></span>
    <span class="Loader-sand Loader-sand--11"></span>
    <span class="Loader-sand Loader-sand--12"></span>
    <span class="Loader-sand Loader-sand--13"></span>
    <span class="Loader-sand Loader-sand--14"></span>
    <span class="Loader-sand Loader-sand--15"></span>
    <span class="Loader-sand Loader-sand--16"></span>
    <span class="Loader-sand Loader-sand--17"></span>
    <span class="Loader-sand Loader-sand--18"></span>
    <span class="Loader-sand Loader-sand--19"></span>
    <span class="Loader-sand Loader-sand--20"></span>

    <div class="Loader-wave Loader-wave--1"></div>
    <div class="Loader-wave Loader-wave--2"></div>
    <div class="Loader-wave Loader-wave--3"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring"></div>

        <div class="Loader-core">
            <div class="Loader-core-flare"></div>

            <div class="Loader-crystal">
                <span class="Loader-crystal-face Loader-crystal-face--1"></span>
                <span class="Loader-crystal-face Loader-crystal-face--2"></span>
                <span class="Loader-crystal-face Loader-crystal-face--3"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --sand-white: #fff7d6;
    --sand-light: #fde68a;
    --sand-gold: #fbbf24;
    --sand-main: #f59e0b;
    --sand-orange: #d97706;
    --sand-bronze: #b45309;
    --sand-brown: #78350f;
    --sand-dark: #451a03;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 247, 214, 0.12) 0%,
            rgba(253, 230, 138, 0.11) 16%,
            rgba(245, 158, 11, 0.1) 30%,
            rgba(180, 83, 9, 0.06) 48%,
            transparent 72%
        );
    filter: blur(14px);
    animation: Loader-desert-aura 2.3s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 9deg,
            rgba(251, 191, 36, 0.12) 9deg 10deg,
            transparent 10deg 18deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 73%,
            transparent 74%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 73%,
            transparent 74%
        );
    animation: Loader-desert-runes 20s linear infinite;
}

.Loader-atmosphere {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            rgba(245, 158, 11, 0),
            rgba(245, 158, 11, 0.08),
            rgba(251, 191, 36, 0),
            rgba(217, 119, 6, 0.07),
            rgba(245, 158, 11, 0)
        );
    filter: blur(3px);
    animation: Loader-atmosphere-spin 8s linear infinite;
}

.Loader-sun {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-sun--1 {
    width: 154px;
    height: 154px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(251, 191, 36, 0.12);
    box-shadow:
        0 0 16px rgba(245, 158, 11, 0.12),
        inset 0 0 20px rgba(217, 119, 6, 0.07);
    animation: Loader-sun-one 2.4s ease-in-out infinite;
}

.Loader-sun--2 {
    width: 118px;
    height: 118px;
    transform: translate(-50%, -50%);
    background:
        radial-gradient(
            circle,
            transparent 55%,
            rgba(251, 191, 36, 0.08) 62%,
            transparent 72%
        );
    animation: Loader-sun-two 2s ease-in-out infinite alternate;
}

.Loader-rune-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-rune-ring--outer {
    width: 174px;
    height: 174px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(251, 191, 36, 0.16);
    animation: Loader-rune-outer 13s linear infinite;
}

.Loader-rune-ring--inner {
    width: 132px;
    height: 132px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(245, 158, 11, 0.22);
    animation: Loader-rune-inner 7s linear infinite reverse;
}

.Loader-rune-ring span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 12px;
    border-radius: 2px;
    background:
        linear-gradient(
            180deg,
            #fff7d6,
            #fbbf24 38%,
            #d97706 70%,
            transparent
        );
    box-shadow:
        0 0 5px rgba(251, 191, 36, 0.75);
}

.Loader-rune-ring--outer span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(30deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(60deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(120deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(150deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(210deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(9) {
    transform: translate(-50%, -50%) rotate(240deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(10) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(11) {
    transform: translate(-50%, -50%) rotate(300deg) translateY(-86px);
}

.Loader-rune-ring--outer span:nth-child(12) {
    transform: translate(-50%, -50%) rotate(330deg) translateY(-86px);
}

.Loader-rune-ring--inner span {
    width: 2px;
    height: 8px;
}

.Loader-rune-ring--inner span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(135deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(225deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-65px);
}

.Loader-rune-ring--inner span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(315deg) translateY(-65px);
}

.Loader-dune-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-dune-ring--1 {
    width: 145px;
    height: 62px;
    border: 1px solid rgba(245, 158, 11, 0.24);
    animation: Loader-dune-one 5.5s linear infinite;
}

.Loader-dune-ring--2 {
    width: 130px;
    height: 48px;
    border: 1px solid rgba(251, 191, 36, 0.18);
    animation: Loader-dune-two 4.2s linear infinite reverse;
}

.Loader-dune-ring--3 {
    width: 112px;
    height: 38px;
    border: 1px dashed rgba(253, 230, 138, 0.22);
    animation: Loader-dune-three 3.4s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 142px;
    height: 54px;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-orbit span {
    position: absolute;
    top: 50%;
    left: -4px;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background: #fff7d6;
    box-shadow:
        0 0 4px #ffffff,
        0 0 9px #fde68a,
        0 0 16px #f59e0b,
        0 0 25px rgba(217, 119, 6, 0.75);
}

.Loader-orbit--1 {
    animation: Loader-orbit-one 4.6s linear infinite;
}

.Loader-orbit--2 {
    animation: Loader-orbit-two 5.2s linear infinite reverse;
}

.Loader-orbit--3 {
    animation: Loader-orbit-three 3.9s linear infinite;
}

.Loader-shard {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 21px;
    clip-path:
        polygon(
            50% 0,
            100% 35%,
            73% 100%,
            24% 88%,
            0 32%
        );
    background:
        linear-gradient(
            135deg,
            #fff7d6 0%,
            #fbbf24 26%,
            #d97706 58%,
            #78350f 100%
        );
    box-shadow:
        0 0 7px rgba(245, 158, 11, 0.7);
    filter:
        drop-shadow(0 0 4px rgba(251, 191, 36, 0.5));
    transform-origin: center;
}

.Loader-shard--1 {
    animation: Loader-shard-one 3s ease-in-out infinite;
}

.Loader-shard--2 {
    animation: Loader-shard-two 3.3s ease-in-out infinite 0.2s;
}

.Loader-shard--3 {
    animation: Loader-shard-three 2.8s ease-in-out infinite 0.4s;
}

.Loader-shard--4 {
    animation: Loader-shard-four 3.5s ease-in-out infinite 0.1s;
}

.Loader-shard--5 {
    animation: Loader-shard-five 3.1s ease-in-out infinite 0.5s;
}

.Loader-shard--6 {
    animation: Loader-shard-six 3.7s ease-in-out infinite 0.7s;
}

.Loader-shard--7 {
    animation: Loader-shard-seven 2.9s ease-in-out infinite 0.35s;
}

.Loader-shard--8 {
    animation: Loader-shard-eight 3.2s ease-in-out infinite 0.6s;
}

.Loader-shard--9 {
    animation: Loader-shard-nine 3.6s ease-in-out infinite 0.8s;
}

.Loader-shard--10 {
    animation: Loader-shard-ten 3.25s ease-in-out infinite 0.15s;
}

.Loader-shard--11 {
    animation: Loader-shard-eleven 2.95s ease-in-out infinite 0.55s;
}

.Loader-shard--12 {
    animation: Loader-shard-twelve 3.45s ease-in-out infinite 0.75s;
}

.Loader-wind {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 20px;
    border-top: 2px solid rgba(251, 191, 36, 0.34);
    border-radius: 50%;
    transform-origin: left center;
    filter:
        drop-shadow(0 0 5px rgba(245, 158, 11, 0.35));
    pointer-events: none;
}

.Loader-wind--1 {
    animation: Loader-wind-one 2s ease-in-out infinite;
}

.Loader-wind--2 {
    animation: Loader-wind-two 2.4s ease-in-out infinite 0.3s;
}

.Loader-wind--3 {
    animation: Loader-wind-three 2.2s ease-in-out infinite 0.6s;
}

.Loader-wind--4 {
    animation: Loader-wind-four 2.6s ease-in-out infinite 0.9s;
}

.Loader-sand {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #fde68a;
    box-shadow:
        0 0 3px #fbbf24,
        0 0 7px rgba(245, 158, 11, 0.8);
    opacity: 0;
}

.Loader-sand:nth-of-type(odd) {
    width: 2px;
    height: 2px;
}

.Loader-sand--1 {
    animation: Loader-sand-one 2.1s ease-out infinite;
}

.Loader-sand--2 {
    animation: Loader-sand-two 2.5s ease-out infinite 0.1s;
}

.Loader-sand--3 {
    animation: Loader-sand-three 1.9s ease-out infinite 0.3s;
}

.Loader-sand--4 {
    animation: Loader-sand-four 2.6s ease-out infinite 0.5s;
}

.Loader-sand--5 {
    animation: Loader-sand-five 2.3s ease-out infinite 0.7s;
}

.Loader-sand--6 {
    animation: Loader-sand-six 2.8s ease-out infinite 0.2s;
}

.Loader-sand--7 {
    animation: Loader-sand-seven 2s ease-out infinite 0.9s;
}

.Loader-sand--8 {
    animation: Loader-sand-eight 2.45s ease-out infinite 1.1s;
}

.Loader-sand--9 {
    animation: Loader-sand-nine 2.7s ease-out infinite 0.4s;
}

.Loader-sand--10 {
    animation: Loader-sand-ten 2.2s ease-out infinite 1.3s;
}

.Loader-sand--11 {
    animation: Loader-sand-eleven 2.55s ease-out infinite 0.65s;
}

.Loader-sand--12 {
    animation: Loader-sand-twelve 2.15s ease-out infinite 1.5s;
}

.Loader-sand--13 {
    animation: Loader-sand-thirteen 2.9s ease-out infinite 0.8s;
}

.Loader-sand--14 {
    animation: Loader-sand-fourteen 2.35s ease-out infinite 1.7s;
}

.Loader-sand--15 {
    animation: Loader-sand-fifteen 2.65s ease-out infinite 0.95s;
}

.Loader-sand--16 {
    animation: Loader-sand-sixteen 2.05s ease-out infinite 1.9s;
}

.Loader-sand--17 {
    animation: Loader-sand-seventeen 2.75s ease-out infinite 0.25s;
}

.Loader-sand--18 {
    animation: Loader-sand-eighteen 2.4s ease-out infinite 1.2s;
}

.Loader-sand--19 {
    animation: Loader-sand-nineteen 2.85s ease-out infinite 0.55s;
}

.Loader-sand--20 {
    animation: Loader-sand-twenty 2.25s ease-out infinite 1.55s;
}

.Loader-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 65px;
    height: 65px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(251, 191, 36, 0.45);
    opacity: 0;
}

.Loader-wave--1 {
    animation: Loader-wave 2.1s ease-out infinite;
}

.Loader-wave--2 {
    animation: Loader-wave 2.1s ease-out infinite 0.7s;
}

.Loader-wave--3 {
    animation: Loader-wave 2.1s ease-out infinite 1.4s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 86px;
    height: 86px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(253, 230, 138, 0.12),
            rgba(245, 158, 11, 0.08) 35%,
            rgba(180, 83, 9, 0.04) 60%,
            transparent 72%
        );
    box-shadow:
        0 0 22px rgba(245, 158, 11, 0.2),
        inset 0 0 18px rgba(251, 191, 36, 0.08);
    animation: Loader-shell-pulse 1.5s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 24deg,
            #fff7d6 24deg 27deg,
            transparent 27deg 78deg,
            #fbbf24 78deg 82deg,
            transparent 82deg 141deg,
            #d97706 141deg 146deg,
            transparent 146deg 210deg,
            #fde68a 210deg 214deg,
            transparent 214deg 280deg,
            #f59e0b 280deg 285deg,
            transparent 285deg 360deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 84%,
            #000 85%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 84%,
            #000 85%
        );
    filter:
        drop-shadow(0 0 4px #fbbf24)
        drop-shadow(0 0 9px rgba(245, 158, 11, 0.7));
    animation: Loader-core-ring 2s linear infinite;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 38% 32%,
            #fff7d6 0%,
            #fde68a 10%,
            #fbbf24 23%,
            #f59e0b 39%,
            #d97706 57%,
            #92400e 75%,
            #451a03 100%
        );
    box-shadow:
        0 0 6px #fff7d6,
        0 0 14px #fde68a,
        0 0 26px #fbbf24,
        0 0 42px #f59e0b,
        0 0 62px rgba(217, 119, 6, 0.7),
        inset 0 0 12px rgba(255, 255, 255, 0.28);
    animation:
        Loader-core-pulse 0.92s ease-in-out infinite alternate,
        Loader-core-flicker 0.22s steps(2, end) infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px solid rgba(255, 247, 214, 0.56);
    box-shadow:
        inset 0 0 9px rgba(253, 230, 138, 0.5),
        0 0 8px rgba(251, 191, 36, 0.4);
    animation: Loader-core-inner 1.1s ease-in-out infinite alternate;
}

.Loader-core-flare {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(253, 230, 138, 0.22),
            rgba(245, 158, 11, 0.1) 42%,
            transparent 72%
        );
    animation: Loader-core-flare 1.2s ease-in-out infinite alternate;
}

.Loader-crystal {
    position: relative;
    z-index: 20;
    width: 25px;
    height: 39px;
    clip-path:
        polygon(
            50% 0,
            94% 30%,
            75% 82%,
            50% 100%,
            22% 82%,
            6% 30%
        );
    background:
        linear-gradient(
            135deg,
            #fff7d6 0%,
            #fde68a 24%,
            #fbbf24 45%,
            #d97706 70%,
            #78350f 100%
        );
    box-shadow:
        0 0 8px #fff7d6,
        0 0 16px #fbbf24;
    filter:
        drop-shadow(0 0 4px #fde68a)
        drop-shadow(0 0 9px #f59e0b);
    animation: Loader-crystal-hover 1.4s ease-in-out infinite alternate;
}

.Loader-crystal::before {
    content: "";
    position: absolute;
    left: 46%;
    top: 4px;
    width: 2px;
    height: 31px;
    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.1)
        );
    transform: rotate(8deg);
}

.Loader-crystal::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    width: 8px;
    height: 16px;
    background:
        linear-gradient(
            140deg,
            rgba(255, 255, 255, 0.55),
            transparent
        );
    clip-path:
        polygon(
            0 0,
            100% 24%,
            53% 100%,
            0 80%
        );
}

.Loader-crystal-face {
    position: absolute;
    opacity: 0.6;
}

.Loader-crystal-face--1 {
    inset: 8px 4px 17px 12px;
    background: rgba(255, 255, 255, 0.36);
    clip-path:
        polygon(
            50% 0,
            100% 100%,
            0 80%
        );
}

.Loader-crystal-face--2 {
    left: 4px;
    bottom: 4px;
    width: 10px;
    height: 13px;
    background: rgba(120, 53, 15, 0.4);
    clip-path:
        polygon(
            0 0,
            100% 20%,
            70% 100%
        );
}

.Loader-crystal-face--3 {
    right: 4px;
    bottom: 5px;
    width: 9px;
    height: 14px;
    background: rgba(255, 237, 158, 0.3);
    clip-path:
        polygon(
            20% 0,
            100% 20%,
            30% 100%
        );
}

@keyframes Loader-desert-aura {
    from {
        opacity: 0.55;
        transform: scale(0.94);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-desert-runes {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-atmosphere-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-sun-one {
    0%,
    100% {
        opacity: 0.35;
        transform: translate(-50%, -50%) scale(0.96);
    }

    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.05);
    }
}

@keyframes Loader-sun-two {
    from {
        opacity: 0.45;
        transform: translate(-50%, -50%) scale(0.9);
    }

    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.12);
    }
}

@keyframes Loader-rune-outer {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-rune-inner {
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes Loader-dune-one {
    from {
        transform: translate(-50%, -50%) rotate(10deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(370deg);
    }
}

@keyframes Loader-dune-two {
    from {
        transform: translate(-50%, -50%) rotate(70deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(-290deg);
    }
}

@keyframes Loader-dune-three {
    from {
        transform: translate(-50%, -50%) rotate(130deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(490deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform: translate(-50%, -50%) rotate(20deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(380deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform: translate(-50%, -50%) rotate(80deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(-280deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform: translate(-50%, -50%) rotate(140deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(500deg);
    }
}

@keyframes Loader-shard-one {
    0%,
    100% {
        transform: translate(-73px, -61px) rotate(-10deg) scale(0.85);
    }

    50% {
        transform: translate(-78px, -69px) rotate(15deg) scale(1.08);
    }
}

@keyframes Loader-shard-two {
    0%,
    100% {
        transform: translate(-25px, -91px) rotate(28deg) scale(0.9);
    }

    50% {
        transform: translate(-21px, -99px) rotate(52deg) scale(1.05);
    }
}

@keyframes Loader-shard-three {
    0%,
    100% {
        transform: translate(35px, -85px) rotate(62deg) scale(0.8);
    }

    50% {
        transform: translate(43px, -91px) rotate(89deg) scale(1.12);
    }
}

@keyframes Loader-shard-four {
    0%,
    100% {
        transform: translate(75px, -48px) rotate(88deg) scale(0.86);
    }

    50% {
        transform: translate(83px, -43px) rotate(111deg) scale(1.04);
    }
}

@keyframes Loader-shard-five {
    0%,
    100% {
        transform: translate(87px, 10px) rotate(123deg) scale(0.8);
    }

    50% {
        transform: translate(94px, 18px) rotate(146deg) scale(1.08);
    }
}

@keyframes Loader-shard-six {
    0%,
    100% {
        transform: translate(54px, 66px) rotate(150deg) scale(0.9);
    }

    50% {
        transform: translate(59px, 74px) rotate(174deg) scale(1.1);
    }
}

@keyframes Loader-shard-seven {
    0%,
    100% {
        transform: translate(4px, 83px) rotate(183deg) scale(0.82);
    }

    50% {
        transform: translate(-2px, 91px) rotate(208deg) scale(1.08);
    }
}

@keyframes Loader-shard-eight {
    0%,
    100% {
        transform: translate(-55px, 70px) rotate(210deg) scale(0.88);
    }

    50% {
        transform: translate(-61px, 77px) rotate(236deg) scale(1.06);
    }
}

@keyframes Loader-shard-nine {
    0%,
    100% {
        transform: translate(-89px, 22px) rotate(245deg) scale(0.78);
    }

    50% {
        transform: translate(-97px, 15px) rotate(272deg) scale(1.1);
    }
}

@keyframes Loader-shard-ten {
    0%,
    100% {
        transform: translate(-85px, -24px) rotate(274deg) scale(0.86);
    }

    50% {
        transform: translate(-93px, -29px) rotate(298deg) scale(1.08);
    }
}

@keyframes Loader-shard-eleven {
    0%,
    100% {
        transform: translate(72px, 46px) rotate(310deg) scale(0.82);
    }

    50% {
        transform: translate(79px, 53px) rotate(335deg) scale(1.05);
    }
}

@keyframes Loader-shard-twelve {
    0%,
    100% {
        transform: translate(26px, 91px) rotate(345deg) scale(0.88);
    }

    50% {
        transform: translate(31px, 99px) rotate(370deg) scale(1.08);
    }
}

@keyframes Loader-wind-one {
    0%,
    100% {
        opacity: 0.15;
        transform: rotate(10deg) translateX(22px) scaleX(0.75);
    }

    50% {
        opacity: 0.85;
        transform: rotate(18deg) translateX(26px) scaleX(1.08);
    }
}

@keyframes Loader-wind-two {
    0%,
    100% {
        opacity: 0.2;
        transform: rotate(100deg) translateX(20px) scaleX(0.8);
    }

    50% {
        opacity: 0.8;
        transform: rotate(108deg) translateX(25px) scaleX(1.05);
    }
}

@keyframes Loader-wind-three {
    0%,
    100% {
        opacity: 0.15;
        transform: rotate(190deg) translateX(22px) scaleX(0.72);
    }

    50% {
        opacity: 0.9;
        transform: rotate(198deg) translateX(27px) scaleX(1.1);
    }
}

@keyframes Loader-wind-four {
    0%,
    100% {
        opacity: 0.2;
        transform: rotate(280deg) translateX(20px) scaleX(0.78);
    }

    50% {
        opacity: 0.78;
        transform: rotate(288deg) translateX(25px) scaleX(1.06);
    }
}

@keyframes Loader-wave {
    0% {
        opacity: 0.75;
        transform: translate(-50%, -50%) scale(0.5);
    }

    65% {
        opacity: 0.2;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(2.55);
    }
}

@keyframes Loader-shell-pulse {
    0%,
    100% {
        transform: translate(-50%, -50%) scale(0.95);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.06);
    }
}

@keyframes Loader-core-ring {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-pulse {
    from {
        transform: scale(0.91);
    }

    to {
        transform: scale(1.1);
    }
}

@keyframes Loader-core-flicker {
    0% {
        filter: brightness(0.94);
    }

    50% {
        filter: brightness(1.15);
    }

    100% {
        filter: brightness(1);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.07);
    }
}

@keyframes Loader-core-flare {
    from {
        opacity: 0.35;
        transform: scale(0.88);
    }

    to {
        opacity: 1;
        transform: scale(1.22);
    }
}

@keyframes Loader-crystal-hover {
    from {
        transform: translateY(2px) rotate(-2deg) scale(0.94);
    }

    to {
        transform: translateY(-3px) rotate(2deg) scale(1.06);
    }
}

@keyframes Loader-sand-one {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(100px, -54px);
    }
}

@keyframes Loader-sand-two {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    25% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-96px, -64px);
    }
}

@keyframes Loader-sand-three {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(106px, 21px);
    }
}

@keyframes Loader-sand-four {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-108px, 34px);
    }
}

@keyframes Loader-sand-five {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(58px, 96px);
    }
}

@keyframes Loader-sand-six {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    24% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-57px, 102px);
    }
}

@keyframes Loader-sand-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(34px, -108px);
    }
}

@keyframes Loader-sand-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    26% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-43px, -103px);
    }
}

@keyframes Loader-sand-nine {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(112px, -13px);
    }
}

@keyframes Loader-sand-ten {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    23% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-111px, -9px);
    }
}

@keyframes Loader-sand-eleven {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(87px, 71px);
    }
}

@keyframes Loader-sand-twelve {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-86px, 77px);
    }
}

@keyframes Loader-sand-thirteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(72px, -90px);
    }
}

@keyframes Loader-sand-fourteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    18% {
        opacity: 0.85;
    }

    100% {
        opacity: 0;
        transform: translate(-73px, -91px);
    }
}

@keyframes Loader-sand-fifteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(17px, 114px);
    }
}

@keyframes Loader-sand-sixteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-17px, -116px);
    }
}

@keyframes Loader-sand-seventeen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(104px, 50px);
    }
}

@keyframes Loader-sand-eighteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    26% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-103px, 53px);
    }
}

@keyframes Loader-sand-nineteen {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(52px, -105px);
    }
}

@keyframes Loader-sand-twenty {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }

    18% {
        opacity: 0.95;
    }

    100% {
        opacity: 0;
        transform: translate(-55px, 106px);
    }
}`,
  },

  {
    id: 3119,
    name: "Tempest Sky Core",
    preview: (
      <div className="ld-3119">
        <div className="ld-3119-aura" />
        <div className="ld-3119-ring ld-3119-ring--outer" />
        <div className="ld-3119-ring ld-3119-ring--middle" />
        <div className="ld-3119-ring ld-3119-ring--inner" />

        <div className="ld-3119-orbit ld-3119-orbit--1">
          <span />
        </div>
        <div className="ld-3119-orbit ld-3119-orbit--2">
          <span />
        </div>
        <div className="ld-3119-orbit ld-3119-orbit--3">
          <span />
        </div>

        <span className="ld-3119-gust ld-3119-gust--1" />
        <span className="ld-3119-gust ld-3119-gust--2" />
        <span className="ld-3119-gust ld-3119-gust--3" />
        <span className="ld-3119-gust ld-3119-gust--4" />
        <span className="ld-3119-gust ld-3119-gust--5" />
        <span className="ld-3119-gust ld-3119-gust--6" />

        <span className="ld-3119-particle ld-3119-particle--1" />
        <span className="ld-3119-particle ld-3119-particle--2" />
        <span className="ld-3119-particle ld-3119-particle--3" />
        <span className="ld-3119-particle ld-3119-particle--4" />
        <span className="ld-3119-particle ld-3119-particle--5" />
        <span className="ld-3119-particle ld-3119-particle--6" />
        <span className="ld-3119-particle ld-3119-particle--7" />
        <span className="ld-3119-particle ld-3119-particle--8" />

        <div className="ld-3119-core-shell">
          <div className="ld-3119-core-pulse" />
          <div className="ld-3119-core">
            <div className="ld-3119-core-center" />
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura"></div>
    <div class="Loader-ring Loader-ring--outer"></div>
    <div class="Loader-ring Loader-ring--middle"></div>
    <div class="Loader-ring Loader-ring--inner"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>
    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>
    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-gust Loader-gust--1"></span>
    <span class="Loader-gust Loader-gust--2"></span>
    <span class="Loader-gust Loader-gust--3"></span>
    <span class="Loader-gust Loader-gust--4"></span>
    <span class="Loader-gust Loader-gust--5"></span>
    <span class="Loader-gust Loader-gust--6"></span>

    <span class="Loader-particle Loader-particle--1"></span>
    <span class="Loader-particle Loader-particle--2"></span>
    <span class="Loader-particle Loader-particle--3"></span>
    <span class="Loader-particle Loader-particle--4"></span>
    <span class="Loader-particle Loader-particle--5"></span>
    <span class="Loader-particle Loader-particle--6"></span>
    <span class="Loader-particle Loader-particle--7"></span>
    <span class="Loader-particle Loader-particle--8"></span>

    <div class="Loader-core-shell">
        <div class="Loader-core-pulse"></div>
        <div class="Loader-core">
            <div class="Loader-core-center"></div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --air-white: #f8fdff;
    --air-light: #dff7ff;
    --air-cyan: #8ae8ff;
    --air-sky: #4fd5ff;
    --air-blue: #1fa8ff;
    --air-deep: #0b5fff;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -22px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(223, 247, 255, 0.14) 0%,
            rgba(138, 232, 255, 0.12) 22%,
            rgba(79, 213, 255, 0.08) 42%,
            rgba(11, 95, 255, 0.04) 62%,
            transparent 76%
        );
    filter: blur(14px);
    animation: Loader-aura-breathe 2.2s ease-in-out infinite alternate;
}

.Loader-aura {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            rgba(79, 213, 255, 0),
            rgba(79, 213, 255, 0.18),
            rgba(138, 232, 255, 0.04),
            rgba(31, 168, 255, 0.16),
            rgba(79, 213, 255, 0)
        );
    filter: blur(6px);
    animation: Loader-aura-spin 8s linear infinite;
}

.Loader-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.Loader-ring--outer {
    width: 160px;
    height: 160px;
    border: 1px solid rgba(138, 232, 255, 0.22);
    box-shadow:
        0 0 16px rgba(79, 213, 255, 0.14),
        inset 0 0 14px rgba(223, 247, 255, 0.08);
    animation: Loader-ring-outer 7s linear infinite;
}

.Loader-ring--middle {
    width: 126px;
    height: 126px;
    border: 1px dashed rgba(79, 213, 255, 0.24);
    animation: Loader-ring-middle 4.6s linear infinite reverse;
}

.Loader-ring--inner {
    width: 92px;
    height: 92px;
    border: 1px solid rgba(223, 247, 255, 0.24);
    animation: Loader-ring-inner 3s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.Loader-orbit span {
    position: absolute;
    top: 50%;
    left: -5px;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background: #f8fdff;
    box-shadow:
        0 0 6px #ffffff,
        0 0 14px #8ae8ff,
        0 0 26px rgba(79, 213, 255, 0.9);
}

.Loader-orbit--1 {
    width: 144px;
    height: 52px;
    animation: Loader-orbit-one 4s linear infinite;
}

.Loader-orbit--2 {
    width: 110px;
    height: 140px;
    animation: Loader-orbit-two 5.2s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 132px;
    height: 132px;
    animation: Loader-orbit-three 6.4s linear infinite;
}

.Loader-gust {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 16px;
    margin-left: -35px;
    margin-top: -8px;
    border-top: 2px solid rgba(223, 247, 255, 0.9);
    border-radius: 999px;
    filter:
        drop-shadow(0 0 6px rgba(138, 232, 255, 0.7));
    opacity: 0.75;
}

.Loader-gust::before {
    content: "";
    position: absolute;
    right: -3px;
    top: -4px;
    width: 12px;
    height: 12px;
    border-top: 2px solid rgba(138, 232, 255, 0.95);
    border-right: 2px solid rgba(138, 232, 255, 0.95);
    border-radius: 50%;
    transform: rotate(20deg);
}

.Loader-gust--1 {
    animation: Loader-gust-one 2.1s ease-in-out infinite;
}

.Loader-gust--2 {
    animation: Loader-gust-two 2.5s ease-in-out infinite 0.2s;
}

.Loader-gust--3 {
    animation: Loader-gust-three 2.3s ease-in-out infinite 0.4s;
}

.Loader-gust--4 {
    animation: Loader-gust-four 2.6s ease-in-out infinite 0.1s;
}

.Loader-gust--5 {
    animation: Loader-gust-five 2.2s ease-in-out infinite 0.55s;
}

.Loader-gust--6 {
    animation: Loader-gust-six 2.8s ease-in-out infinite 0.75s;
}

.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    margin: -2px;
    border-radius: 50%;
    background: #dff7ff;
    box-shadow:
        0 0 5px #8ae8ff,
        0 0 10px rgba(79, 213, 255, 0.75);
    opacity: 0;
}

.Loader-particle--1 {
    animation: Loader-particle-one 2.4s ease-out infinite;
}

.Loader-particle--2 {
    animation: Loader-particle-two 2.8s ease-out infinite 0.15s;
}

.Loader-particle--3 {
    animation: Loader-particle-three 2.6s ease-out infinite 0.3s;
}

.Loader-particle--4 {
    animation: Loader-particle-four 2.9s ease-out infinite 0.45s;
}

.Loader-particle--5 {
    animation: Loader-particle-five 2.5s ease-out infinite 0.6s;
}

.Loader-particle--6 {
    animation: Loader-particle-six 2.7s ease-out infinite 0.75s;
}

.Loader-particle--7 {
    animation: Loader-particle-seven 2.3s ease-out infinite 0.9s;
}

.Loader-particle--8 {
    animation: Loader-particle-eight 3s ease-out infinite 1.05s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 82px;
    height: 82px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Loader-core-pulse {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 1px solid rgba(138, 232, 255, 0.3);
    box-shadow:
        0 0 18px rgba(79, 213, 255, 0.18),
        inset 0 0 18px rgba(223, 247, 255, 0.08);
    animation: Loader-core-pulse-ring 1.8s ease-in-out infinite;
}

.Loader-core {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 38% 35%,
            #ffffff 0%,
            #dff7ff 16%,
            #8ae8ff 34%,
            #4fd5ff 54%,
            #1fa8ff 74%,
            #0b5fff 100%
        );
    box-shadow:
        0 0 8px #ffffff,
        0 0 18px #8ae8ff,
        0 0 34px #4fd5ff,
        0 0 52px rgba(31, 168, 255, 0.8);
    animation:
        Loader-core-breathe 0.9s ease-in-out infinite alternate,
        Loader-core-flicker 0.22s steps(2, end) infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow:
        inset 0 0 10px rgba(223, 247, 255, 0.6),
        0 0 8px rgba(138, 232, 255, 0.4);
    animation: Loader-core-inner 1.1s ease-in-out infinite alternate;
}

.Loader-core-center {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff 0%,
            #dff7ff 45%,
            #8ae8ff 75%,
            transparent 100%
        );
    box-shadow:
        0 0 8px #ffffff,
        0 0 16px #8ae8ff,
        0 0 24px rgba(79, 213, 255, 0.9);
    animation: Loader-core-center 1s ease-in-out infinite alternate;
}

@keyframes Loader-aura-breathe {
    from {
        transform: scale(0.95);
        opacity: 0.6;
    }
    to {
        transform: scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-aura-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-ring-outer {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-ring-middle {
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes Loader-ring-inner {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(-315deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(450deg);
    }
}

@keyframes Loader-gust-one {
    0%, 100% {
        transform: translate(-74px, -50px) rotate(-20deg) scaleX(0.8);
        opacity: 0.2;
    }
    50% {
        transform: translate(-84px, -56px) rotate(-10deg) scaleX(1.08);
        opacity: 1;
    }
}

@keyframes Loader-gust-two {
    0%, 100% {
        transform: translate(8px, -78px) rotate(18deg) scaleX(0.78);
        opacity: 0.18;
    }
    50% {
        transform: translate(18px, -86px) rotate(28deg) scaleX(1.06);
        opacity: 0.95;
    }
}

@keyframes Loader-gust-three {
    0%, 100% {
        transform: translate(62px, -18px) rotate(72deg) scaleX(0.82);
        opacity: 0.22;
    }
    50% {
        transform: translate(70px, -10px) rotate(84deg) scaleX(1.08);
        opacity: 0.96;
    }
}

@keyframes Loader-gust-four {
    0%, 100% {
        transform: translate(22px, 56px) rotate(146deg) scaleX(0.8);
        opacity: 0.18;
    }
    50% {
        transform: translate(30px, 64px) rotate(160deg) scaleX(1.05);
        opacity: 0.94;
    }
}

@keyframes Loader-gust-five {
    0%, 100% {
        transform: translate(-68px, 30px) rotate(204deg) scaleX(0.76);
        opacity: 0.2;
    }
    50% {
        transform: translate(-78px, 38px) rotate(218deg) scaleX(1.08);
        opacity: 0.92;
    }
}

@keyframes Loader-gust-six {
    0%, 100% {
        transform: translate(-24px, 72px) rotate(288deg) scaleX(0.8);
        opacity: 0.18;
    }
    50% {
        transform: translate(-16px, 80px) rotate(302deg) scaleX(1.06);
        opacity: 0.95;
    }
}

@keyframes Loader-particle-one {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(86px, -34px);
    }
}

@keyframes Loader-particle-two {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-90px, -44px);
    }
}

@keyframes Loader-particle-three {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    18% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(96px, 18px);
    }
}

@keyframes Loader-particle-four {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    24% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-94px, 24px);
    }
}

@keyframes Loader-particle-five {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    16% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(40px, 92px);
    }
}

@keyframes Loader-particle-six {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    22% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-42px, 94px);
    }
}

@keyframes Loader-particle-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    18% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(20px, -98px);
    }
}

@keyframes Loader-particle-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0);
    }
    24% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translate(-24px, -96px);
    }
}

@keyframes Loader-core-pulse-ring {
    0%, 100% {
        transform: scale(0.94);
        opacity: 0.45;
    }
    50% {
        transform: scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.92);
    }
    to {
        transform: scale(1.08);
    }
}

@keyframes Loader-core-flicker {
    0% {
        filter: brightness(0.95);
    }
    50% {
        filter: brightness(1.18);
    }
    100% {
        filter: brightness(1.02);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.45;
        transform: scale(0.92);
    }
    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-center {
    from {
        transform: translate(-50%, -50%) scale(0.84);
        opacity: 0.7;
    }
    to {
        transform: translate(-50%, -50%) scale(1.22);
        opacity: 1;
    }
}`,
  },
  {
    id: 3120,
    name: "Magnetic Iron Dominion",
    preview: (
      <div className="ld-3120">
        <div className="ld-3120-field ld-3120-field--outer" />
        <div className="ld-3120-field ld-3120-field--middle" />
        <div className="ld-3120-field ld-3120-field--inner" />

        <div className="ld-3120-magnetic-ring ld-3120-magnetic-ring--1" />
        <div className="ld-3120-magnetic-ring ld-3120-magnetic-ring--2" />
        <div className="ld-3120-magnetic-ring ld-3120-magnetic-ring--3" />

        <div className="ld-3120-orbit ld-3120-orbit--1">
          <span />
        </div>

        <div className="ld-3120-orbit ld-3120-orbit--2">
          <span />
        </div>

        <div className="ld-3120-orbit ld-3120-orbit--3">
          <span />
        </div>

        <span className="ld-3120-metal ld-3120-metal--1" />
        <span className="ld-3120-metal ld-3120-metal--2" />
        <span className="ld-3120-metal ld-3120-metal--3" />
        <span className="ld-3120-metal ld-3120-metal--4" />
        <span className="ld-3120-metal ld-3120-metal--5" />
        <span className="ld-3120-metal ld-3120-metal--6" />
        <span className="ld-3120-metal ld-3120-metal--7" />
        <span className="ld-3120-metal ld-3120-metal--8" />
        <span className="ld-3120-metal ld-3120-metal--9" />
        <span className="ld-3120-metal ld-3120-metal--10" />

        <span className="ld-3120-spark ld-3120-spark--1" />
        <span className="ld-3120-spark ld-3120-spark--2" />
        <span className="ld-3120-spark ld-3120-spark--3" />
        <span className="ld-3120-spark ld-3120-spark--4" />
        <span className="ld-3120-spark ld-3120-spark--5" />
        <span className="ld-3120-spark ld-3120-spark--6" />
        <span className="ld-3120-spark ld-3120-spark--7" />
        <span className="ld-3120-spark ld-3120-spark--8" />
        <span className="ld-3120-spark ld-3120-spark--9" />
        <span className="ld-3120-spark ld-3120-spark--10" />
        <span className="ld-3120-spark ld-3120-spark--11" />
        <span className="ld-3120-spark ld-3120-spark--12" />

        <div className="ld-3120-pulse ld-3120-pulse--1" />
        <div className="ld-3120-pulse ld-3120-pulse--2" />
        <div className="ld-3120-pulse ld-3120-pulse--3" />

        <div className="ld-3120-core-shell">
          <div className="ld-3120-core-ring ld-3120-core-ring--1" />
          <div className="ld-3120-core-ring ld-3120-core-ring--2" />

          <div className="ld-3120-core">
            <div className="ld-3120-core-highlight" />

            <div className="ld-3120-emblem">
              <span className="ld-3120-emblem-left" />
              <span className="ld-3120-emblem-center" />
              <span className="ld-3120-emblem-right" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-field Loader-field--outer"></div>
    <div class="Loader-field Loader-field--middle"></div>
    <div class="Loader-field Loader-field--inner"></div>

    <div class="Loader-magnetic-ring Loader-magnetic-ring--1"></div>
    <div class="Loader-magnetic-ring Loader-magnetic-ring--2"></div>
    <div class="Loader-magnetic-ring Loader-magnetic-ring--3"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-metal Loader-metal--1"></span>
    <span class="Loader-metal Loader-metal--2"></span>
    <span class="Loader-metal Loader-metal--3"></span>
    <span class="Loader-metal Loader-metal--4"></span>
    <span class="Loader-metal Loader-metal--5"></span>
    <span class="Loader-metal Loader-metal--6"></span>
    <span class="Loader-metal Loader-metal--7"></span>
    <span class="Loader-metal Loader-metal--8"></span>
    <span class="Loader-metal Loader-metal--9"></span>
    <span class="Loader-metal Loader-metal--10"></span>

    <span class="Loader-spark Loader-spark--1"></span>
    <span class="Loader-spark Loader-spark--2"></span>
    <span class="Loader-spark Loader-spark--3"></span>
    <span class="Loader-spark Loader-spark--4"></span>
    <span class="Loader-spark Loader-spark--5"></span>
    <span class="Loader-spark Loader-spark--6"></span>
    <span class="Loader-spark Loader-spark--7"></span>
    <span class="Loader-spark Loader-spark--8"></span>
    <span class="Loader-spark Loader-spark--9"></span>
    <span class="Loader-spark Loader-spark--10"></span>
    <span class="Loader-spark Loader-spark--11"></span>
    <span class="Loader-spark Loader-spark--12"></span>

    <div class="Loader-pulse Loader-pulse--1"></div>
    <div class="Loader-pulse Loader-pulse--2"></div>
    <div class="Loader-pulse Loader-pulse--3"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>

        <div class="Loader-core">
            <div class="Loader-core-highlight"></div>

            <div class="Loader-emblem">
                <span class="Loader-emblem-left"></span>
                <span class="Loader-emblem-center"></span>
                <span class="Loader-emblem-right"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --metal-white: #ffffff;
    --metal-light: #e5e7eb;
    --metal-silver: #b6bec9;
    --metal-steel: #7d8794;
    --metal-dark: #343a43;
    --metal-black: #111318;
    --magnetic: #ff3b81;
    --magnetic-light: #ff8ab5;
    --magnetic-deep: #c00055;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -28px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 138, 181, 0.12) 0%,
            rgba(255, 59, 129, 0.1) 25%,
            rgba(192, 0, 85, 0.05) 48%,
            transparent 72%
        );
    filter: blur(14px);
    animation: Loader-metal-atmosphere 2.2s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 13deg,
            rgba(229, 231, 235, 0.12) 13deg 14deg,
            transparent 14deg 28deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 75%,
            #000 76% 78%,
            transparent 79%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 75%,
            #000 76% 78%,
            transparent 79%
        );
    animation: Loader-metal-dial 22s linear infinite;
}

.Loader-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-field--outer {
    width: 176px;
    height: 176px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 59, 129, 0.16);
    box-shadow:
        0 0 12px rgba(255, 59, 129, 0.14),
        inset 0 0 18px rgba(255, 59, 129, 0.05);
    animation: Loader-field-outer 3s ease-in-out infinite;
}

.Loader-field--middle {
    width: 144px;
    height: 144px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(182, 190, 201, 0.2);
    animation: Loader-field-middle 8s linear infinite;
}

.Loader-field--inner {
    width: 108px;
    height: 108px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 59, 129, 0.14),
            transparent 25%,
            rgba(229, 231, 235, 0.1),
            transparent 55%,
            rgba(255, 59, 129, 0.12),
            transparent
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 88%,
            #000 89%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 88%,
            #000 89%
        );
    animation: Loader-field-inner 5s linear infinite reverse;
}

.Loader-magnetic-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-magnetic-ring--1 {
    width: 150px;
    height: 58px;
    border:
        2px solid rgba(255, 59, 129, 0.34);
    box-shadow:
        0 0 8px rgba(255, 59, 129, 0.25);
    animation: Loader-magnetic-one 4s linear infinite;
}

.Loader-magnetic-ring--2 {
    width: 136px;
    height: 68px;
    border:
        1px solid rgba(229, 231, 235, 0.3);
    animation: Loader-magnetic-two 5.2s linear infinite reverse;
}

.Loader-magnetic-ring--3 {
    width: 118px;
    height: 118px;
    border:
        1px dashed rgba(255, 138, 181, 0.25);
    animation: Loader-magnetic-three 6.5s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-orbit span {
    position: absolute;
    left: -4px;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff,
            #d8dde4 45%,
            #6b7280
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 11px rgba(229, 231, 235, 0.8),
        0 0 20px rgba(255, 59, 129, 0.5);
}

.Loader-orbit--1 {
    width: 156px;
    height: 48px;
    animation: Loader-orbit-one 4.5s linear infinite;
}

.Loader-orbit--2 {
    width: 120px;
    height: 152px;
    animation: Loader-orbit-two 5.8s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 134px;
    height: 92px;
    animation: Loader-orbit-three 3.8s linear infinite;
}

.Loader-metal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 11px;
    height: 24px;
    clip-path:
        polygon(
            50% 0,
            100% 18%,
            85% 72%,
            56% 100%,
            15% 82%,
            0 26%
        );
    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #d8dde4 14%,
            #9ca3af 35%,
            #5c6470 60%,
            #242830 82%,
            #090b0f 100%
        );
    box-shadow:
        0 0 6px rgba(229, 231, 235, 0.5);
    filter:
        drop-shadow(0 0 3px rgba(255, 255, 255, 0.25))
        drop-shadow(0 0 7px rgba(255, 59, 129, 0.25));
}

.Loader-metal::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 3px;
    width: 3px;
    height: 14px;
    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8),
            transparent
        );
    transform: rotate(8deg);
}

.Loader-metal--1 {
    animation: Loader-metal-one 3s ease-in-out infinite;
}

.Loader-metal--2 {
    animation: Loader-metal-two 3.4s ease-in-out infinite 0.15s;
}

.Loader-metal--3 {
    animation: Loader-metal-three 2.9s ease-in-out infinite 0.3s;
}

.Loader-metal--4 {
    animation: Loader-metal-four 3.6s ease-in-out infinite 0.45s;
}

.Loader-metal--5 {
    animation: Loader-metal-five 3.15s ease-in-out infinite 0.6s;
}

.Loader-metal--6 {
    animation: Loader-metal-six 3.5s ease-in-out infinite 0.75s;
}

.Loader-metal--7 {
    animation: Loader-metal-seven 3.25s ease-in-out infinite 0.9s;
}

.Loader-metal--8 {
    animation: Loader-metal-eight 3.7s ease-in-out infinite 1.05s;
}

.Loader-metal--9 {
    animation: Loader-metal-nine 3.1s ease-in-out infinite 0.5s;
}

.Loader-metal--10 {
    animation: Loader-metal-ten 3.55s ease-in-out infinite 0.25s;
}

.Loader-spark {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #ff8ab5;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #ff3b81,
        0 0 15px rgba(255, 59, 129, 0.8);
    opacity: 0;
}

.Loader-spark--1 {
    animation: Loader-spark-one 2.3s ease-out infinite;
}

.Loader-spark--2 {
    animation: Loader-spark-two 2.6s ease-out infinite 0.15s;
}

.Loader-spark--3 {
    animation: Loader-spark-three 2.1s ease-out infinite 0.3s;
}

.Loader-spark--4 {
    animation: Loader-spark-four 2.7s ease-out infinite 0.45s;
}

.Loader-spark--5 {
    animation: Loader-spark-five 2.4s ease-out infinite 0.6s;
}

.Loader-spark--6 {
    animation: Loader-spark-six 2.8s ease-out infinite 0.75s;
}

.Loader-spark--7 {
    animation: Loader-spark-seven 2.2s ease-out infinite 0.9s;
}

.Loader-spark--8 {
    animation: Loader-spark-eight 2.5s ease-out infinite 1.05s;
}

.Loader-spark--9 {
    animation: Loader-spark-nine 2.9s ease-out infinite 1.2s;
}

.Loader-spark--10 {
    animation: Loader-spark-ten 2.35s ease-out infinite 1.35s;
}

.Loader-spark--11 {
    animation: Loader-spark-eleven 2.65s ease-out infinite 0.5s;
}

.Loader-spark--12 {
    animation: Loader-spark-twelve 2.45s ease-out infinite 0.8s;
}

.Loader-pulse {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 64px;
    height: 64px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(255, 59, 129, 0.55);
    opacity: 0;
}

.Loader-pulse--1 {
    animation: Loader-pulse 2s ease-out infinite;
}

.Loader-pulse--2 {
    animation: Loader-pulse 2s ease-out infinite 0.66s;
}

.Loader-pulse--3 {
    animation: Loader-pulse 2s ease-out infinite 1.32s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 88px;
    height: 88px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 255, 255, 0.06),
            rgba(156, 163, 175, 0.08) 34%,
            rgba(255, 59, 129, 0.05) 54%,
            transparent 72%
        );
    animation:
        Loader-shell-breathe 1.7s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 1px;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 30deg,
            #ffffff 30deg 33deg,
            transparent 33deg 82deg,
            #ff3b81 82deg 88deg,
            transparent 88deg 145deg,
            #9ca3af 145deg 149deg,
            transparent 149deg 210deg,
            #ff8ab5 210deg 216deg,
            transparent 216deg 285deg,
            #d8dde4 285deg 290deg,
            transparent 290deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    filter:
        drop-shadow(0 0 5px rgba(255, 59, 129, 0.65));
    animation:
        Loader-core-ring-one 2.4s linear infinite;
}

.Loader-core-ring--2 {
    inset: 9px;
    border:
        1px dashed rgba(229, 231, 235, 0.38);
    animation:
        Loader-core-ring-two 3.1s linear infinite reverse;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 36% 30%,
            #ffffff 0%,
            #f3f4f6 7%,
            #d8dde4 16%,
            #aab1bb 28%,
            #747d89 42%,
            #3d444e 59%,
            #1f232a 78%,
            #080a0e 100%
        );
    border:
        1px solid rgba(255, 255, 255, 0.35);
    box-shadow:
        0 0 7px rgba(255, 255, 255, 0.85),
        0 0 15px rgba(229, 231, 235, 0.5),
        0 0 28px rgba(255, 59, 129, 0.48),
        0 0 48px rgba(192, 0, 85, 0.35),
        inset 0 0 14px rgba(255, 255, 255, 0.28);
    animation:
        Loader-core-breathe 0.95s ease-in-out infinite alternate,
        Loader-core-reflection 2.5s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border:
        1px solid rgba(255, 138, 181, 0.34);
    box-shadow:
        inset 0 0 8px rgba(255, 59, 129, 0.3);
    animation:
        Loader-core-inner 1.1s ease-in-out infinite alternate;
}

.Loader-core-highlight {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 15px;
    height: 8px;
    border-radius: 50%;
    background:
        rgba(255, 255, 255, 0.75);
    filter: blur(2px);
    transform: rotate(-28deg);
}

.Loader-emblem {
    position: relative;
    z-index: 20;
    width: 28px;
    height: 28px;
    filter:
        drop-shadow(0 0 3px #ffffff)
        drop-shadow(0 0 8px #ff3b81);
}

.Loader-emblem-center {
    position: absolute;
    left: 50%;
    top: 3px;
    width: 4px;
    height: 22px;
    transform: translateX(-50%);
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #ff8ab5,
            #ff3b81
        );
}

.Loader-emblem-left,
.Loader-emblem-right {
    position: absolute;
    top: 7px;
    width: 9px;
    height: 16px;
    border:
        2px solid #ff8ab5;
}

.Loader-emblem-left {
    left: 1px;
    border-right: 0;
    border-radius:
        12px 0 0 12px;
    transform: rotate(-8deg);
}

.Loader-emblem-right {
    right: 1px;
    border-left: 0;
    border-radius:
        0 12px 12px 0;
    transform: rotate(8deg);
}

@keyframes Loader-metal-atmosphere {
    from {
        opacity: 0.5;
        transform: scale(0.94);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-metal-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-field-outer {
    0%,
    100% {
        opacity: 0.35;
        transform:
            translate(-50%, -50%)
            scale(0.96);
    }

    50% {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            scale(1.05);
    }
}

@keyframes Loader-field-middle {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-field-inner {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-magnetic-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(12deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(372deg);
    }
}

@keyframes Loader-magnetic-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(72deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-288deg);
    }
}

@keyframes Loader-magnetic-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(130deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(490deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(52deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-308deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(115deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(475deg);
    }
}

@keyframes Loader-metal-one {
    0%,
    100% {
        transform:
            translate(-78px, -59px)
            rotate(-14deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(-84px, -67px)
            rotate(12deg)
            scale(1.08);
    }
}

@keyframes Loader-metal-two {
    0%,
    100% {
        transform:
            translate(-31px, -91px)
            rotate(22deg)
            scale(0.9);
    }

    50% {
        transform:
            translate(-27px, -100px)
            rotate(48deg)
            scale(1.06);
    }
}

@keyframes Loader-metal-three {
    0%,
    100% {
        transform:
            translate(32px, -88px)
            rotate(59deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(40px, -95px)
            rotate(85deg)
            scale(1.1);
    }
}

@keyframes Loader-metal-four {
    0%,
    100% {
        transform:
            translate(78px, -46px)
            rotate(95deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(88px, -41px)
            rotate(120deg)
            scale(1.06);
    }
}

@keyframes Loader-metal-five {
    0%,
    100% {
        transform:
            translate(88px, 19px)
            rotate(132deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(96px, 27px)
            rotate(157deg)
            scale(1.1);
    }
}

@keyframes Loader-metal-six {
    0%,
    100% {
        transform:
            translate(56px, 69px)
            rotate(171deg)
            scale(0.9);
    }

    50% {
        transform:
            translate(61px, 78px)
            rotate(196deg)
            scale(1.06);
    }
}

@keyframes Loader-metal-seven {
    0%,
    100% {
        transform:
            translate(-5px, 87px)
            rotate(209deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-10px, 96px)
            rotate(235deg)
            scale(1.08);
    }
}

@keyframes Loader-metal-eight {
    0%,
    100% {
        transform:
            translate(-65px, 65px)
            rotate(246deg)
            scale(0.88);
    }

    50% {
        transform:
            translate(-72px, 73px)
            rotate(270deg)
            scale(1.05);
    }
}

@keyframes Loader-metal-nine {
    0%,
    100% {
        transform:
            translate(-94px, 10px)
            rotate(285deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(-102px, 4px)
            rotate(311deg)
            scale(1.1);
    }
}

@keyframes Loader-metal-ten {
    0%,
    100% {
        transform:
            translate(-91px, -31px)
            rotate(323deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-99px, -38px)
            rotate(349deg)
            scale(1.08);
    }
}

@keyframes Loader-spark-one {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(103px, -47px)
            scale(1.1);
    }
}

@keyframes Loader-spark-two {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-99px, -57px)
            scale(0.8);
    }
}

@keyframes Loader-spark-three {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(111px, 13px)
            scale(1);
    }
}

@keyframes Loader-spark-four {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.4);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-110px, 27px)
            scale(0.9);
    }
}

@keyframes Loader-spark-five {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(61px, 98px)
            scale(1.2);
    }
}

@keyframes Loader-spark-six {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.35);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-61px, 102px)
            scale(0.85);
    }
}

@keyframes Loader-spark-seven {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(28px, -111px)
            scale(1.05);
    }
}

@keyframes Loader-spark-eight {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.35);
    }

    23% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-35px, -108px)
            scale(0.9);
    }
}

@keyframes Loader-spark-nine {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(92px, 74px)
            scale(1.1);
    }
}

@keyframes Loader-spark-ten {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-90px, 78px)
            scale(0.85);
    }
}

@keyframes Loader-spark-eleven {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.4);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(75px, -91px)
            scale(1);
    }
}

@keyframes Loader-spark-twelve {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-78px, -89px)
            scale(0.9);
    }
}

@keyframes Loader-pulse {
    0% {
        opacity: 0.8;
        transform:
            translate(-50%, -50%)
            scale(0.55);
    }

    65% {
        opacity: 0.2;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(2.7);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.95);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.05);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.92);
    }

    to {
        transform: scale(1.08);
    }
}

@keyframes Loader-core-reflection {
    0%,
    100% {
        filter:
            brightness(0.95)
            contrast(1);
    }

    50% {
        filter:
            brightness(1.24)
            contrast(1.1);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.35;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}`,
  },
  {
    id: 3121,
    name: "Eternal Chrono Rift",
    preview: (
      <div className="ld-3121">
        <div className="ld-3121-atmosphere" />

        <div className="ld-3121-time-field ld-3121-time-field--1" />
        <div className="ld-3121-time-field ld-3121-time-field--2" />
        <div className="ld-3121-time-field ld-3121-time-field--3" />

        <div className="ld-3121-clock-ring ld-3121-clock-ring--outer">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3121-clock-ring ld-3121-clock-ring--middle">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ld-3121-arc ld-3121-arc--1" />
        <div className="ld-3121-arc ld-3121-arc--2" />
        <div className="ld-3121-arc ld-3121-arc--3" />
        <div className="ld-3121-arc ld-3121-arc--4" />

        <div className="ld-3121-orbit ld-3121-orbit--1">
          <span />
        </div>

        <div className="ld-3121-orbit ld-3121-orbit--2">
          <span />
        </div>

        <div className="ld-3121-orbit ld-3121-orbit--3">
          <span />
        </div>

        <span className="ld-3121-glyph ld-3121-glyph--1" />
        <span className="ld-3121-glyph ld-3121-glyph--2" />
        <span className="ld-3121-glyph ld-3121-glyph--3" />
        <span className="ld-3121-glyph ld-3121-glyph--4" />
        <span className="ld-3121-glyph ld-3121-glyph--5" />
        <span className="ld-3121-glyph ld-3121-glyph--6" />
        <span className="ld-3121-glyph ld-3121-glyph--7" />
        <span className="ld-3121-glyph ld-3121-glyph--8" />

        <span className="ld-3121-shard ld-3121-shard--1" />
        <span className="ld-3121-shard ld-3121-shard--2" />
        <span className="ld-3121-shard ld-3121-shard--3" />
        <span className="ld-3121-shard ld-3121-shard--4" />
        <span className="ld-3121-shard ld-3121-shard--5" />
        <span className="ld-3121-shard ld-3121-shard--6" />
        <span className="ld-3121-shard ld-3121-shard--7" />
        <span className="ld-3121-shard ld-3121-shard--8" />
        <span className="ld-3121-shard ld-3121-shard--9" />
        <span className="ld-3121-shard ld-3121-shard--10" />
        <span className="ld-3121-shard ld-3121-shard--11" />
        <span className="ld-3121-shard ld-3121-shard--12" />

        <span className="ld-3121-mote ld-3121-mote--1" />
        <span className="ld-3121-mote ld-3121-mote--2" />
        <span className="ld-3121-mote ld-3121-mote--3" />
        <span className="ld-3121-mote ld-3121-mote--4" />
        <span className="ld-3121-mote ld-3121-mote--5" />
        <span className="ld-3121-mote ld-3121-mote--6" />
        <span className="ld-3121-mote ld-3121-mote--7" />
        <span className="ld-3121-mote ld-3121-mote--8" />
        <span className="ld-3121-mote ld-3121-mote--9" />
        <span className="ld-3121-mote ld-3121-mote--10" />
        <span className="ld-3121-mote ld-3121-mote--11" />
        <span className="ld-3121-mote ld-3121-mote--12" />
        <span className="ld-3121-mote ld-3121-mote--13" />
        <span className="ld-3121-mote ld-3121-mote--14" />
        <span className="ld-3121-mote ld-3121-mote--15" />
        <span className="ld-3121-mote ld-3121-mote--16" />

        <div className="ld-3121-echo ld-3121-echo--1" />
        <div className="ld-3121-echo ld-3121-echo--2" />
        <div className="ld-3121-echo ld-3121-echo--3" />
        <div className="ld-3121-echo ld-3121-echo--4" />

        <div className="ld-3121-core-shell">
          <div className="ld-3121-core-ring ld-3121-core-ring--1" />
          <div className="ld-3121-core-ring ld-3121-core-ring--2" />
          <div className="ld-3121-core-ring ld-3121-core-ring--3" />

          <div className="ld-3121-core">
            <div className="ld-3121-core-glow" />

            <div className="ld-3121-hourglass">
              <span className="ld-3121-hourglass-top" />
              <span className="ld-3121-hourglass-neck" />
              <span className="ld-3121-hourglass-bottom" />
              <span className="ld-3121-hourglass-sand" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-atmosphere"></div>

    <div class="Loader-time-field Loader-time-field--1"></div>
    <div class="Loader-time-field Loader-time-field--2"></div>
    <div class="Loader-time-field Loader-time-field--3"></div>

    <div class="Loader-clock-ring Loader-clock-ring--outer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-clock-ring Loader-clock-ring--middle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div class="Loader-arc Loader-arc--1"></div>
    <div class="Loader-arc Loader-arc--2"></div>
    <div class="Loader-arc Loader-arc--3"></div>
    <div class="Loader-arc Loader-arc--4"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-glyph Loader-glyph--1"></span>
    <span class="Loader-glyph Loader-glyph--2"></span>
    <span class="Loader-glyph Loader-glyph--3"></span>
    <span class="Loader-glyph Loader-glyph--4"></span>
    <span class="Loader-glyph Loader-glyph--5"></span>
    <span class="Loader-glyph Loader-glyph--6"></span>
    <span class="Loader-glyph Loader-glyph--7"></span>
    <span class="Loader-glyph Loader-glyph--8"></span>

    <span class="Loader-shard Loader-shard--1"></span>
    <span class="Loader-shard Loader-shard--2"></span>
    <span class="Loader-shard Loader-shard--3"></span>
    <span class="Loader-shard Loader-shard--4"></span>
    <span class="Loader-shard Loader-shard--5"></span>
    <span class="Loader-shard Loader-shard--6"></span>
    <span class="Loader-shard Loader-shard--7"></span>
    <span class="Loader-shard Loader-shard--8"></span>
    <span class="Loader-shard Loader-shard--9"></span>
    <span class="Loader-shard Loader-shard--10"></span>
    <span class="Loader-shard Loader-shard--11"></span>
    <span class="Loader-shard Loader-shard--12"></span>

    <span class="Loader-mote Loader-mote--1"></span>
    <span class="Loader-mote Loader-mote--2"></span>
    <span class="Loader-mote Loader-mote--3"></span>
    <span class="Loader-mote Loader-mote--4"></span>
    <span class="Loader-mote Loader-mote--5"></span>
    <span class="Loader-mote Loader-mote--6"></span>
    <span class="Loader-mote Loader-mote--7"></span>
    <span class="Loader-mote Loader-mote--8"></span>
    <span class="Loader-mote Loader-mote--9"></span>
    <span class="Loader-mote Loader-mote--10"></span>
    <span class="Loader-mote Loader-mote--11"></span>
    <span class="Loader-mote Loader-mote--12"></span>
    <span class="Loader-mote Loader-mote--13"></span>
    <span class="Loader-mote Loader-mote--14"></span>
    <span class="Loader-mote Loader-mote--15"></span>
    <span class="Loader-mote Loader-mote--16"></span>

    <div class="Loader-echo Loader-echo--1"></div>
    <div class="Loader-echo Loader-echo--2"></div>
    <div class="Loader-echo Loader-echo--3"></div>
    <div class="Loader-echo Loader-echo--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>
        <div class="Loader-core-ring Loader-core-ring--3"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-hourglass">
                <span class="Loader-hourglass-top"></span>
                <span class="Loader-hourglass-neck"></span>
                <span class="Loader-hourglass-bottom"></span>
                <span class="Loader-hourglass-sand"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --chrono-white: #fffdf4;
    --chrono-gold: #ffd86b;
    --chrono-amber: #f6b73c;
    --chrono-teal: #52f7d4;
    --chrono-cyan: #65dff6;
    --chrono-violet: #a78bfa;
    --chrono-deep: #4338ca;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 216, 107, 0.12) 0%,
            rgba(82, 247, 212, 0.09) 24%,
            rgba(101, 223, 246, 0.07) 42%,
            rgba(167, 139, 250, 0.05) 58%,
            transparent 74%
        );
    filter: blur(15px);
    animation: Loader-chrono-atmosphere 2.4s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 7deg,
            rgba(255, 216, 107, 0.1) 7deg 8deg,
            transparent 8deg 15deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    animation: Loader-master-clock 30s linear infinite;
}

.Loader-atmosphere {
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 216, 107, 0.08),
            transparent 20%,
            rgba(82, 247, 212, 0.08),
            transparent 42%,
            rgba(167, 139, 250, 0.08),
            transparent 68%,
            rgba(101, 223, 246, 0.08),
            transparent
        );
    filter: blur(4px);
    animation: Loader-atmosphere-rotate 9s linear infinite;
}

.Loader-time-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-time-field--1 {
    width: 176px;
    height: 176px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 216, 107, 0.16);
    box-shadow:
        0 0 12px rgba(255, 216, 107, 0.12),
        inset 0 0 20px rgba(82, 247, 212, 0.05);
    animation: Loader-time-field-one 3.5s ease-in-out infinite;
}

.Loader-time-field--2 {
    width: 146px;
    height: 146px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(82, 247, 212, 0.18);
    animation: Loader-time-field-two 10s linear infinite reverse;
}

.Loader-time-field--3 {
    width: 112px;
    height: 112px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 40deg,
            rgba(255, 216, 107, 0.18) 40deg 44deg,
            transparent 44deg 120deg,
            rgba(82, 247, 212, 0.16) 120deg 124deg,
            transparent 124deg 206deg,
            rgba(167, 139, 250, 0.18) 206deg 211deg,
            transparent 211deg 292deg,
            rgba(101, 223, 246, 0.15) 292deg 297deg,
            transparent 297deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    animation: Loader-time-field-three 5.5s linear infinite;
}

.Loader-clock-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-clock-ring--outer {
    width: 170px;
    height: 170px;
    transform: translate(-50%, -50%);
    animation: Loader-clock-outer 18s linear infinite;
}

.Loader-clock-ring--middle {
    width: 136px;
    height: 136px;
    transform: translate(-50%, -50%);
    animation: Loader-clock-middle 11s linear infinite reverse;
}

.Loader-clock-ring span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 13px;
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #fffdf4,
            #ffd86b 45%,
            rgba(246, 183, 60, 0.2)
        );
    box-shadow:
        0 0 5px rgba(255, 216, 107, 0.7);
}

.Loader-clock-ring--outer span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(30deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(60deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(120deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(150deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(210deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(9) {
    transform: translate(-50%, -50%) rotate(240deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(10) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(11) {
    transform: translate(-50%, -50%) rotate(300deg) translateY(-83px);
}

.Loader-clock-ring--outer span:nth-child(12) {
    transform: translate(-50%, -50%) rotate(330deg) translateY(-83px);
}

.Loader-clock-ring--middle span {
    width: 2px;
    height: 8px;
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #52f7d4,
            transparent
        );
    box-shadow:
        0 0 5px rgba(82, 247, 212, 0.65);
}

.Loader-clock-ring--middle span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(3) {
    transform: translate(-50%, -50%) rotate(90deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(4) {
    transform: translate(-50%, -50%) rotate(135deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(5) {
    transform: translate(-50%, -50%) rotate(180deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(6) {
    transform: translate(-50%, -50%) rotate(225deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(7) {
    transform: translate(-50%, -50%) rotate(270deg) translateY(-66px);
}

.Loader-clock-ring--middle span:nth-child(8) {
    transform: translate(-50%, -50%) rotate(315deg) translateY(-66px);
}

.Loader-arc {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid transparent;
}

.Loader-arc--1 {
    border-top-color: rgba(255, 216, 107, 0.7);
    transform: translate(-50%, -50%) rotate(20deg);
    filter: drop-shadow(0 0 5px rgba(255, 216, 107, 0.7));
    animation: Loader-arc-one 4s linear infinite;
}

.Loader-arc--2 {
    width: 140px;
    height: 140px;
    border-right-color: rgba(82, 247, 212, 0.65);
    transform: translate(-50%, -50%) rotate(70deg);
    filter: drop-shadow(0 0 5px rgba(82, 247, 212, 0.6));
    animation: Loader-arc-two 5.2s linear infinite reverse;
}

.Loader-arc--3 {
    width: 126px;
    height: 126px;
    border-bottom-color: rgba(167, 139, 250, 0.62);
    transform: translate(-50%, -50%) rotate(120deg);
    filter: drop-shadow(0 0 5px rgba(167, 139, 250, 0.6));
    animation: Loader-arc-three 3.7s linear infinite;
}

.Loader-arc--4 {
    width: 108px;
    height: 108px;
    border-left-color: rgba(101, 223, 246, 0.65);
    transform: translate(-50%, -50%) rotate(170deg);
    filter: drop-shadow(0 0 5px rgba(101, 223, 246, 0.6));
    animation: Loader-arc-four 4.8s linear infinite reverse;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-orbit span {
    position: absolute;
    left: -4px;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background: #fffdf4;
    box-shadow:
        0 0 4px #ffffff,
        0 0 9px #ffd86b,
        0 0 17px rgba(82, 247, 212, 0.7);
}

.Loader-orbit--1 {
    width: 154px;
    height: 52px;
    animation: Loader-orbit-one 4.4s linear infinite;
}

.Loader-orbit--2 {
    width: 112px;
    height: 152px;
    animation: Loader-orbit-two 5.6s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 138px;
    height: 94px;
    animation: Loader-orbit-three 6.2s linear infinite;
}

.Loader-glyph {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid rgba(255, 216, 107, 0.8);
    transform: rotate(45deg);
    box-shadow:
        0 0 5px rgba(255, 216, 107, 0.55),
        inset 0 0 4px rgba(82, 247, 212, 0.35);
}

.Loader-glyph::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -4px;
    width: 1px;
    height: 16px;
    transform: translateX(-50%);
    background:
        linear-gradient(
            transparent,
            rgba(255, 216, 107, 0.8),
            transparent
        );
}

.Loader-glyph--1 {
    animation: Loader-glyph-one 3s ease-in-out infinite;
}

.Loader-glyph--2 {
    animation: Loader-glyph-two 3.2s ease-in-out infinite 0.2s;
}

.Loader-glyph--3 {
    animation: Loader-glyph-three 2.8s ease-in-out infinite 0.4s;
}

.Loader-glyph--4 {
    animation: Loader-glyph-four 3.4s ease-in-out infinite 0.6s;
}

.Loader-glyph--5 {
    animation: Loader-glyph-five 3.1s ease-in-out infinite 0.8s;
}

.Loader-glyph--6 {
    animation: Loader-glyph-six 3.5s ease-in-out infinite 1s;
}

.Loader-glyph--7 {
    animation: Loader-glyph-seven 2.9s ease-in-out infinite 1.2s;
}

.Loader-glyph--8 {
    animation: Loader-glyph-eight 3.3s ease-in-out infinite 1.4s;
}

.Loader-shard {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7px;
    height: 22px;
    clip-path:
        polygon(
            50% 0,
            100% 25%,
            72% 100%,
            20% 82%,
            0 30%
        );
    background:
        linear-gradient(
            135deg,
            #fffdf4,
            #ffd86b 28%,
            #52f7d4 58%,
            #4338ca 100%
        );
    filter:
        drop-shadow(0 0 4px rgba(255, 216, 107, 0.5))
        drop-shadow(0 0 7px rgba(82, 247, 212, 0.4));
}

.Loader-shard--1 {
    animation: Loader-shard-one 3.2s ease-in-out infinite;
}

.Loader-shard--2 {
    animation: Loader-shard-two 3.5s ease-in-out infinite 0.15s;
}

.Loader-shard--3 {
    animation: Loader-shard-three 3s ease-in-out infinite 0.3s;
}

.Loader-shard--4 {
    animation: Loader-shard-four 3.7s ease-in-out infinite 0.45s;
}

.Loader-shard--5 {
    animation: Loader-shard-five 3.3s ease-in-out infinite 0.6s;
}

.Loader-shard--6 {
    animation: Loader-shard-six 3.8s ease-in-out infinite 0.75s;
}

.Loader-shard--7 {
    animation: Loader-shard-seven 3.1s ease-in-out infinite 0.9s;
}

.Loader-shard--8 {
    animation: Loader-shard-eight 3.6s ease-in-out infinite 1.05s;
}

.Loader-shard--9 {
    animation: Loader-shard-nine 3.25s ease-in-out infinite 1.2s;
}

.Loader-shard--10 {
    animation: Loader-shard-ten 3.55s ease-in-out infinite 1.35s;
}

.Loader-shard--11 {
    animation: Loader-shard-eleven 3.05s ease-in-out infinite 0.5s;
}

.Loader-shard--12 {
    animation: Loader-shard-twelve 3.45s ease-in-out infinite 0.8s;
}

.Loader-mote {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #fffdf4;
    box-shadow:
        0 0 4px #ffd86b,
        0 0 9px rgba(82, 247, 212, 0.75);
    opacity: 0;
}

.Loader-mote--1 {
    animation: Loader-mote-one 2.2s ease-out infinite;
}

.Loader-mote--2 {
    animation: Loader-mote-two 2.5s ease-out infinite 0.1s;
}

.Loader-mote--3 {
    animation: Loader-mote-three 2.8s ease-out infinite 0.2s;
}

.Loader-mote--4 {
    animation: Loader-mote-four 2.4s ease-out infinite 0.3s;
}

.Loader-mote--5 {
    animation: Loader-mote-five 2.7s ease-out infinite 0.4s;
}

.Loader-mote--6 {
    animation: Loader-mote-six 2.3s ease-out infinite 0.5s;
}

.Loader-mote--7 {
    animation: Loader-mote-seven 2.9s ease-out infinite 0.6s;
}

.Loader-mote--8 {
    animation: Loader-mote-eight 2.6s ease-out infinite 0.7s;
}

.Loader-mote--9 {
    animation: Loader-mote-nine 2.35s ease-out infinite 0.8s;
}

.Loader-mote--10 {
    animation: Loader-mote-ten 2.65s ease-out infinite 0.9s;
}

.Loader-mote--11 {
    animation: Loader-mote-eleven 2.45s ease-out infinite 1s;
}

.Loader-mote--12 {
    animation: Loader-mote-twelve 2.75s ease-out infinite 1.1s;
}

.Loader-mote--13 {
    animation: Loader-mote-thirteen 2.55s ease-out infinite 1.2s;
}

.Loader-mote--14 {
    animation: Loader-mote-fourteen 2.85s ease-out infinite 1.3s;
}

.Loader-mote--15 {
    animation: Loader-mote-fifteen 2.25s ease-out infinite 1.4s;
}

.Loader-mote--16 {
    animation: Loader-mote-sixteen 2.95s ease-out infinite 1.5s;
}

.Loader-echo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 62px;
    height: 62px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(255, 216, 107, 0.55);
    opacity: 0;
}

.Loader-echo--1 {
    animation: Loader-echo 2.4s ease-out infinite;
}

.Loader-echo--2 {
    animation: Loader-echo 2.4s ease-out infinite 0.6s;
    border-color: rgba(82, 247, 212, 0.5);
}

.Loader-echo--3 {
    animation: Loader-echo 2.4s ease-out infinite 1.2s;
    border-color: rgba(167, 139, 250, 0.5);
}

.Loader-echo--4 {
    animation: Loader-echo 2.4s ease-out infinite 1.8s;
    border-color: rgba(101, 223, 246, 0.5);
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90px;
    height: 90px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 216, 107, 0.08),
            rgba(82, 247, 212, 0.06) 36%,
            rgba(167, 139, 250, 0.04) 58%,
            transparent 72%
        );
    animation: Loader-shell-breathe 1.7s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 24deg,
            #ffd86b 24deg 28deg,
            transparent 28deg 80deg,
            #52f7d4 80deg 84deg,
            transparent 84deg 140deg,
            #a78bfa 140deg 144deg,
            transparent 144deg 208deg,
            #65dff6 208deg 212deg,
            transparent 212deg 282deg,
            #fffdf4 282deg 286deg,
            transparent 286deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(255, 216, 107, 0.6));
    animation: Loader-core-ring-one 2.7s linear infinite;
}

.Loader-core-ring--2 {
    inset: 8px;
    border: 1px dashed rgba(82, 247, 212, 0.4);
    animation: Loader-core-ring-two 3.4s linear infinite reverse;
}

.Loader-core-ring--3 {
    inset: 14px;
    border:
        1px solid rgba(167, 139, 250, 0.35);
    animation: Loader-core-ring-three 2.1s ease-in-out infinite alternate;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 37% 30%,
            #fffdf4 0%,
            #fff0b8 9%,
            #ffd86b 20%,
            #65dff6 38%,
            #52f7d4 52%,
            #a78bfa 70%,
            #4338ca 88%,
            #171448 100%
        );
    box-shadow:
        0 0 7px #fffdf4,
        0 0 16px #ffd86b,
        0 0 28px rgba(82, 247, 212, 0.85),
        0 0 43px rgba(101, 223, 246, 0.65),
        0 0 62px rgba(167, 139, 250, 0.45),
        inset 0 0 13px rgba(255, 255, 255, 0.35);
    animation:
        Loader-core-breathe 0.9s ease-in-out infinite alternate,
        Loader-core-shift 3.2s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(255, 253, 244, 0.5);
    box-shadow:
        inset 0 0 9px rgba(255, 216, 107, 0.4);
    animation: Loader-core-inner 1.15s ease-in-out infinite alternate;
}

.Loader-core-glow {
    position: absolute;
    inset: -18px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 216, 107, 0.18),
            rgba(82, 247, 212, 0.12) 35%,
            rgba(167, 139, 250, 0.07) 55%,
            transparent 72%
        );
    animation: Loader-core-glow 1.3s ease-in-out infinite alternate;
}

.Loader-hourglass {
    position: relative;
    z-index: 20;
    width: 28px;
    height: 38px;
    filter:
        drop-shadow(0 0 3px #fffdf4)
        drop-shadow(0 0 8px #ffd86b)
        drop-shadow(0 0 12px rgba(82, 247, 212, 0.6));
    animation: Loader-hourglass-float 1.5s ease-in-out infinite alternate;
}

.Loader-hourglass::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 0;
    width: 22px;
    height: 3px;
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            #52f7d4,
            #fffdf4,
            #ffd86b
        );
}

.Loader-hourglass::after {
    content: "";
    position: absolute;
    left: 3px;
    bottom: 0;
    width: 22px;
    height: 3px;
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            #ffd86b,
            #fffdf4,
            #52f7d4
        );
}

.Loader-hourglass-top {
    position: absolute;
    left: 5px;
    top: 4px;
    width: 18px;
    height: 14px;
    clip-path:
        polygon(
            0 0,
            100% 0,
            58% 100%,
            42% 100%
        );
    background:
        linear-gradient(
            180deg,
            rgba(255, 253, 244, 0.95),
            rgba(255, 216, 107, 0.8),
            rgba(82, 247, 212, 0.45)
        );
}

.Loader-hourglass-neck {
    position: absolute;
    left: 13px;
    top: 16px;
    width: 2px;
    height: 7px;
    background: #fffdf4;
    box-shadow:
        0 0 5px #ffd86b;
}

.Loader-hourglass-bottom {
    position: absolute;
    left: 5px;
    bottom: 4px;
    width: 18px;
    height: 14px;
    clip-path:
        polygon(
            42% 0,
            58% 0,
            100% 100%,
            0 100%
        );
    background:
        linear-gradient(
            180deg,
            rgba(82, 247, 212, 0.45),
            rgba(101, 223, 246, 0.7),
            rgba(255, 216, 107, 0.9)
        );
}

.Loader-hourglass-sand {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 4px;
    height: 18px;
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #fffdf4,
            #ffd86b 45%,
            #52f7d4
        );
    box-shadow:
        0 0 4px #ffd86b,
        0 0 8px rgba(82, 247, 212, 0.7);
    animation: Loader-hourglass-sand 1.2s ease-in-out infinite;
}

@keyframes Loader-chrono-atmosphere {
    from {
        opacity: 0.5;
        transform: scale(0.94);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-master-clock {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-atmosphere-rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-time-field-one {
    0%,
    100% {
        opacity: 0.35;
        transform:
            translate(-50%, -50%)
            scale(0.96);
    }

    50% {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            scale(1.04);
    }
}

@keyframes Loader-time-field-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-time-field-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-clock-outer {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-clock-middle {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-arc-one {
    to {
        transform:
            translate(-50%, -50%)
            rotate(380deg);
    }
}

@keyframes Loader-arc-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-290deg);
    }
}

@keyframes Loader-arc-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(480deg);
    }
}

@keyframes Loader-arc-four {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-190deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(55deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-305deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(120deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(480deg);
    }
}

@keyframes Loader-glyph-one {
    0%,
    100% {
        transform:
            translate(-78px, -48px)
            rotate(35deg)
            scale(0.85);
        opacity: 0.45;
    }

    50% {
        transform:
            translate(-85px, -57px)
            rotate(65deg)
            scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-glyph-two {
    0%,
    100% {
        transform:
            translate(-25px, -91px)
            rotate(70deg)
            scale(0.9);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(-20px, -100px)
            rotate(100deg)
            scale(1.05);
        opacity: 1;
    }
}

@keyframes Loader-glyph-three {
    0%,
    100% {
        transform:
            translate(44px, -80px)
            rotate(110deg)
            scale(0.82);
        opacity: 0.5;
    }

    50% {
        transform:
            translate(52px, -87px)
            rotate(140deg)
            scale(1.09);
        opacity: 1;
    }
}

@keyframes Loader-glyph-four {
    0%,
    100% {
        transform:
            translate(82px, -18px)
            rotate(150deg)
            scale(0.88);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(91px, -12px)
            rotate(180deg)
            scale(1.05);
        opacity: 1;
    }
}

@keyframes Loader-glyph-five {
    0%,
    100% {
        transform:
            translate(63px, 60px)
            rotate(195deg)
            scale(0.83);
        opacity: 0.5;
    }

    50% {
        transform:
            translate(69px, 69px)
            rotate(225deg)
            scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-glyph-six {
    0%,
    100% {
        transform:
            translate(-4px, 84px)
            rotate(240deg)
            scale(0.86);
        opacity: 0.45;
    }

    50% {
        transform:
            translate(-10px, 94px)
            rotate(270deg)
            scale(1.06);
        opacity: 1;
    }
}

@keyframes Loader-glyph-seven {
    0%,
    100% {
        transform:
            translate(-70px, 52px)
            rotate(285deg)
            scale(0.8);
        opacity: 0.45;
    }

    50% {
        transform:
            translate(-78px, 59px)
            rotate(315deg)
            scale(1.08);
        opacity: 1;
    }
}

@keyframes Loader-glyph-eight {
    0%,
    100% {
        transform:
            translate(-88px, -5px)
            rotate(330deg)
            scale(0.88);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(-98px, -10px)
            rotate(360deg)
            scale(1.05);
        opacity: 1;
    }
}

@keyframes Loader-shard-one {
    0%,
    100% {
        transform:
            translate(-83px, -66px)
            rotate(-12deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(-88px, -75px)
            rotate(14deg)
            scale(1.08);
    }
}

@keyframes Loader-shard-two {
    0%,
    100% {
        transform:
            translate(-38px, -96px)
            rotate(20deg)
            scale(0.88);
    }

    50% {
        transform:
            translate(-32px, -105px)
            rotate(47deg)
            scale(1.05);
    }
}

@keyframes Loader-shard-three {
    0%,
    100% {
        transform:
            translate(20px, -100px)
            rotate(55deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(29px, -108px)
            rotate(82deg)
            scale(1.1);
    }
}

@keyframes Loader-shard-four {
    0%,
    100% {
        transform:
            translate(72px, -68px)
            rotate(88deg)
            scale(0.87);
    }

    50% {
        transform:
            translate(81px, -72px)
            rotate(115deg)
            scale(1.05);
    }
}

@keyframes Loader-shard-five {
    0%,
    100% {
        transform:
            translate(99px, -14px)
            rotate(122deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(108px, -7px)
            rotate(149deg)
            scale(1.08);
    }
}

@keyframes Loader-shard-six {
    0%,
    100% {
        transform:
            translate(82px, 54px)
            rotate(160deg)
            scale(0.9);
    }

    50% {
        transform:
            translate(89px, 63px)
            rotate(187deg)
            scale(1.05);
    }
}

@keyframes Loader-shard-seven {
    0%,
    100% {
        transform:
            translate(29px, 91px)
            rotate(195deg)
            scale(0.83);
    }

    50% {
        transform:
            translate(34px, 101px)
            rotate(222deg)
            scale(1.08);
    }
}

@keyframes Loader-shard-eight {
    0%,
    100% {
        transform:
            translate(-35px, 91px)
            rotate(228deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-42px, 100px)
            rotate(255deg)
            scale(1.05);
    }
}

@keyframes Loader-shard-nine {
    0%,
    100% {
        transform:
            translate(-82px, 57px)
            rotate(260deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(-91px, 63px)
            rotate(287deg)
            scale(1.08);
    }
}

@keyframes Loader-shard-ten {
    0%,
    100% {
        transform:
            translate(-101px, 4px)
            rotate(295deg)
            scale(0.88);
    }

    50% {
        transform:
            translate(-110px, -2px)
            rotate(322deg)
            scale(1.06);
    }
}

@keyframes Loader-shard-eleven {
    0%,
    100% {
        transform:
            translate(-95px, -38px)
            rotate(326deg)
            scale(0.84);
    }

    50% {
        transform:
            translate(-103px, -46px)
            rotate(353deg)
            scale(1.07);
    }
}

@keyframes Loader-shard-twelve {
    0%,
    100% {
        transform:
            translate(55px, 82px)
            rotate(350deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(62px, 91px)
            rotate(377deg)
            scale(1.05);
    }
}

@keyframes Loader-mote-one {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(108px, -44px) scale(1.1);
    }
}

@keyframes Loader-mote-two {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-105px, -55px) scale(0.8);
    }
}

@keyframes Loader-mote-three {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(117px, 13px) scale(1);
    }
}

@keyframes Loader-mote-four {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-116px, 28px) scale(0.9);
    }
}

@keyframes Loader-mote-five {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(63px, 101px) scale(1.15);
    }
}

@keyframes Loader-mote-six {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-64px, 104px) scale(0.85);
    }
}

@keyframes Loader-mote-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(29px, -115px) scale(1.05);
    }
}

@keyframes Loader-mote-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-37px, -112px) scale(0.9);
    }
}

@keyframes Loader-mote-nine {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(96px, 76px) scale(1.1);
    }
}

@keyframes Loader-mote-ten {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-93px, 81px) scale(0.85);
    }
}

@keyframes Loader-mote-eleven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.4);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(79px, -95px) scale(1);
    }
}

@keyframes Loader-mote-twelve {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    23% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-81px, -92px) scale(0.9);
    }
}

@keyframes Loader-mote-thirteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(118px, 44px) scale(1.1);
    }
}

@keyframes Loader-mote-fourteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.35);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-117px, 48px) scale(0.8);
    }
}

@keyframes Loader-mote-fifteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(10px, 122px) scale(1);
    }
}

@keyframes Loader-mote-sixteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-8px, -124px) scale(0.9);
    }
}

@keyframes Loader-echo {
    0% {
        opacity: 0.75;
        transform:
            translate(-50%, -50%)
            scale(0.5);
    }

    55% {
        opacity: 0.3;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(2.85);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.95);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.06);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-ring-three {
    from {
        opacity: 0.35;
        transform: scale(0.92);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.91);
    }

    to {
        transform: scale(1.09);
    }
}

@keyframes Loader-core-shift {
    0%,
    100% {
        filter:
            hue-rotate(0deg)
            brightness(1);
    }

    33% {
        filter:
            hue-rotate(18deg)
            brightness(1.12);
    }

    66% {
        filter:
            hue-rotate(-14deg)
            brightness(1.06);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.35;
        transform: scale(0.88);
    }

    to {
        opacity: 1;
        transform: scale(1.25);
    }
}

@keyframes Loader-hourglass-float {
    from {
        transform:
            translateY(2px)
            rotate(-3deg)
            scale(0.95);
    }

    to {
        transform:
            translateY(-3px)
            rotate(3deg)
            scale(1.05);
    }
}

@keyframes Loader-hourglass-sand {
    0% {
        opacity: 0.45;
        transform: scaleY(0.7);
        transform-origin: top;
    }

    50% {
        opacity: 1;
        transform: scaleY(1.1);
    }

    100% {
        opacity: 0.5;
        transform: scaleY(0.75);
        transform-origin: bottom;
    }
}`,
  },
  {
    id: 3122,
    name: "Abyssal Tidal Sovereign",
    preview: (
      <div className="ld-3122">
        <div className="ld-3122-ocean-aura" />
        <div className="ld-3122-caustics" />

        <div className="ld-3122-depth-field ld-3122-depth-field--1" />
        <div className="ld-3122-depth-field ld-3122-depth-field--2" />
        <div className="ld-3122-depth-field ld-3122-depth-field--3" />

        <div className="ld-3122-tide-ring ld-3122-tide-ring--1" />
        <div className="ld-3122-tide-ring ld-3122-tide-ring--2" />
        <div className="ld-3122-tide-ring ld-3122-tide-ring--3" />
        <div className="ld-3122-tide-ring ld-3122-tide-ring--4" />

        <div className="ld-3122-vortex ld-3122-vortex--1" />
        <div className="ld-3122-vortex ld-3122-vortex--2" />
        <div className="ld-3122-vortex ld-3122-vortex--3" />

        <div className="ld-3122-orbit ld-3122-orbit--1">
          <span />
        </div>

        <div className="ld-3122-orbit ld-3122-orbit--2">
          <span />
        </div>

        <div className="ld-3122-orbit ld-3122-orbit--3">
          <span />
        </div>

        <span className="ld-3122-wave ld-3122-wave--1" />
        <span className="ld-3122-wave ld-3122-wave--2" />
        <span className="ld-3122-wave ld-3122-wave--3" />
        <span className="ld-3122-wave ld-3122-wave--4" />
        <span className="ld-3122-wave ld-3122-wave--5" />
        <span className="ld-3122-wave ld-3122-wave--6" />
        <span className="ld-3122-wave ld-3122-wave--7" />
        <span className="ld-3122-wave ld-3122-wave--8" />

        <span className="ld-3122-drop ld-3122-drop--1" />
        <span className="ld-3122-drop ld-3122-drop--2" />
        <span className="ld-3122-drop ld-3122-drop--3" />
        <span className="ld-3122-drop ld-3122-drop--4" />
        <span className="ld-3122-drop ld-3122-drop--5" />
        <span className="ld-3122-drop ld-3122-drop--6" />
        <span className="ld-3122-drop ld-3122-drop--7" />
        <span className="ld-3122-drop ld-3122-drop--8" />
        <span className="ld-3122-drop ld-3122-drop--9" />
        <span className="ld-3122-drop ld-3122-drop--10" />
        <span className="ld-3122-drop ld-3122-drop--11" />
        <span className="ld-3122-drop ld-3122-drop--12" />

        <span className="ld-3122-bubble ld-3122-bubble--1" />
        <span className="ld-3122-bubble ld-3122-bubble--2" />
        <span className="ld-3122-bubble ld-3122-bubble--3" />
        <span className="ld-3122-bubble ld-3122-bubble--4" />
        <span className="ld-3122-bubble ld-3122-bubble--5" />
        <span className="ld-3122-bubble ld-3122-bubble--6" />
        <span className="ld-3122-bubble ld-3122-bubble--7" />
        <span className="ld-3122-bubble ld-3122-bubble--8" />
        <span className="ld-3122-bubble ld-3122-bubble--9" />
        <span className="ld-3122-bubble ld-3122-bubble--10" />
        <span className="ld-3122-bubble ld-3122-bubble--11" />
        <span className="ld-3122-bubble ld-3122-bubble--12" />
        <span className="ld-3122-bubble ld-3122-bubble--13" />
        <span className="ld-3122-bubble ld-3122-bubble--14" />
        <span className="ld-3122-bubble ld-3122-bubble--15" />
        <span className="ld-3122-bubble ld-3122-bubble--16" />

        <span className="ld-3122-crystal ld-3122-crystal--1" />
        <span className="ld-3122-crystal ld-3122-crystal--2" />
        <span className="ld-3122-crystal ld-3122-crystal--3" />
        <span className="ld-3122-crystal ld-3122-crystal--4" />
        <span className="ld-3122-crystal ld-3122-crystal--5" />
        <span className="ld-3122-crystal ld-3122-crystal--6" />
        <span className="ld-3122-crystal ld-3122-crystal--7" />
        <span className="ld-3122-crystal ld-3122-crystal--8" />

        <div className="ld-3122-pressure ld-3122-pressure--1" />
        <div className="ld-3122-pressure ld-3122-pressure--2" />
        <div className="ld-3122-pressure ld-3122-pressure--3" />
        <div className="ld-3122-pressure ld-3122-pressure--4" />

        <div className="ld-3122-core-shell">
          <div className="ld-3122-core-ring ld-3122-core-ring--1" />
          <div className="ld-3122-core-ring ld-3122-core-ring--2" />
          <div className="ld-3122-core-ring ld-3122-core-ring--3" />

          <div className="ld-3122-core">
            <div className="ld-3122-core-glow" />

            <div className="ld-3122-water-symbol">
              <span className="ld-3122-water-symbol-top" />
              <span className="ld-3122-water-symbol-left" />
              <span className="ld-3122-water-symbol-right" />
              <span className="ld-3122-water-symbol-center" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-ocean-aura"></div>
    <div class="Loader-caustics"></div>

    <div class="Loader-depth-field Loader-depth-field--1"></div>
    <div class="Loader-depth-field Loader-depth-field--2"></div>
    <div class="Loader-depth-field Loader-depth-field--3"></div>

    <div class="Loader-tide-ring Loader-tide-ring--1"></div>
    <div class="Loader-tide-ring Loader-tide-ring--2"></div>
    <div class="Loader-tide-ring Loader-tide-ring--3"></div>
    <div class="Loader-tide-ring Loader-tide-ring--4"></div>

    <div class="Loader-vortex Loader-vortex--1"></div>
    <div class="Loader-vortex Loader-vortex--2"></div>
    <div class="Loader-vortex Loader-vortex--3"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-wave Loader-wave--1"></span>
    <span class="Loader-wave Loader-wave--2"></span>
    <span class="Loader-wave Loader-wave--3"></span>
    <span class="Loader-wave Loader-wave--4"></span>
    <span class="Loader-wave Loader-wave--5"></span>
    <span class="Loader-wave Loader-wave--6"></span>
    <span class="Loader-wave Loader-wave--7"></span>
    <span class="Loader-wave Loader-wave--8"></span>

    <span class="Loader-drop Loader-drop--1"></span>
    <span class="Loader-drop Loader-drop--2"></span>
    <span class="Loader-drop Loader-drop--3"></span>
    <span class="Loader-drop Loader-drop--4"></span>
    <span class="Loader-drop Loader-drop--5"></span>
    <span class="Loader-drop Loader-drop--6"></span>
    <span class="Loader-drop Loader-drop--7"></span>
    <span class="Loader-drop Loader-drop--8"></span>
    <span class="Loader-drop Loader-drop--9"></span>
    <span class="Loader-drop Loader-drop--10"></span>
    <span class="Loader-drop Loader-drop--11"></span>
    <span class="Loader-drop Loader-drop--12"></span>

    <span class="Loader-bubble Loader-bubble--1"></span>
    <span class="Loader-bubble Loader-bubble--2"></span>
    <span class="Loader-bubble Loader-bubble--3"></span>
    <span class="Loader-bubble Loader-bubble--4"></span>
    <span class="Loader-bubble Loader-bubble--5"></span>
    <span class="Loader-bubble Loader-bubble--6"></span>
    <span class="Loader-bubble Loader-bubble--7"></span>
    <span class="Loader-bubble Loader-bubble--8"></span>
    <span class="Loader-bubble Loader-bubble--9"></span>
    <span class="Loader-bubble Loader-bubble--10"></span>
    <span class="Loader-bubble Loader-bubble--11"></span>
    <span class="Loader-bubble Loader-bubble--12"></span>
    <span class="Loader-bubble Loader-bubble--13"></span>
    <span class="Loader-bubble Loader-bubble--14"></span>
    <span class="Loader-bubble Loader-bubble--15"></span>
    <span class="Loader-bubble Loader-bubble--16"></span>

    <span class="Loader-crystal Loader-crystal--1"></span>
    <span class="Loader-crystal Loader-crystal--2"></span>
    <span class="Loader-crystal Loader-crystal--3"></span>
    <span class="Loader-crystal Loader-crystal--4"></span>
    <span class="Loader-crystal Loader-crystal--5"></span>
    <span class="Loader-crystal Loader-crystal--6"></span>
    <span class="Loader-crystal Loader-crystal--7"></span>
    <span class="Loader-crystal Loader-crystal--8"></span>

    <div class="Loader-pressure Loader-pressure--1"></div>
    <div class="Loader-pressure Loader-pressure--2"></div>
    <div class="Loader-pressure Loader-pressure--3"></div>
    <div class="Loader-pressure Loader-pressure--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>
        <div class="Loader-core-ring Loader-core-ring--3"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-water-symbol">
                <span class="Loader-water-symbol-top"></span>
                <span class="Loader-water-symbol-left"></span>
                <span class="Loader-water-symbol-right"></span>
                <span class="Loader-water-symbol-center"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --water-white: #f4fdff;
    --water-pale: #d9f9ff;
    --water-cyan: #5ee7f7;
    --water-aqua: #20cbe5;
    --water-blue: #1687ff;
    --water-deep: #1252c7;
    --water-abyss: #06276f;
    --water-dark: #031431;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(94, 231, 247, 0.16) 0%,
            rgba(32, 203, 229, 0.12) 24%,
            rgba(22, 135, 255, 0.09) 42%,
            rgba(18, 82, 199, 0.06) 58%,
            transparent 76%
        );
    filter: blur(16px);
    animation: Loader-ocean-breathe 2.6s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 8deg,
            rgba(217, 249, 255, 0.08) 8deg 10deg,
            transparent 10deg 20deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    animation: Loader-ocean-dial 24s linear infinite;
}

.Loader-ocean-aura {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(94, 231, 247, 0.12),
            transparent 22%,
            rgba(22, 135, 255, 0.12),
            transparent 48%,
            rgba(32, 203, 229, 0.1),
            transparent 72%,
            rgba(217, 249, 255, 0.1),
            transparent
        );
    filter: blur(5px);
    animation: Loader-ocean-aura-spin 10s linear infinite;
}

.Loader-caustics {
    position: absolute;
    inset: 10px;
    border-radius: 50%;
    background:
        repeating-radial-gradient(
            ellipse at 30% 20%,
            transparent 0 8px,
            rgba(217, 249, 255, 0.07) 9px 10px,
            transparent 11px 18px
        ),
        repeating-radial-gradient(
            ellipse at 70% 80%,
            transparent 0 11px,
            rgba(94, 231, 247, 0.05) 12px 13px,
            transparent 14px 22px
        );
    opacity: 0.65;
    filter: blur(1px);
    animation:
        Loader-caustics-drift 6s ease-in-out infinite alternate,
        Loader-caustics-rotate 18s linear infinite;
}

.Loader-depth-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-depth-field--1 {
    width: 178px;
    height: 178px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(94, 231, 247, 0.2);
    box-shadow:
        0 0 12px rgba(94, 231, 247, 0.13),
        inset 0 0 18px rgba(22, 135, 255, 0.08);
    animation: Loader-depth-one 3s ease-in-out infinite;
}

.Loader-depth-field--2 {
    width: 148px;
    height: 148px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(32, 203, 229, 0.2);
    animation: Loader-depth-two 8s linear infinite reverse;
}

.Loader-depth-field--3 {
    width: 116px;
    height: 116px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 31deg,
            rgba(94, 231, 247, 0.18) 31deg 36deg,
            transparent 36deg 101deg,
            rgba(22, 135, 255, 0.17) 101deg 107deg,
            transparent 107deg 180deg,
            rgba(217, 249, 255, 0.18) 180deg 185deg,
            transparent 185deg 252deg,
            rgba(32, 203, 229, 0.15) 252deg 258deg,
            transparent 258deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    animation: Loader-depth-three 5.5s linear infinite;
}

.Loader-tide-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-tide-ring--1 {
    width: 164px;
    height: 68px;
    border: 2px solid rgba(94, 231, 247, 0.35);
    transform: translate(-50%, -50%) rotate(12deg);
    box-shadow:
        0 0 8px rgba(94, 231, 247, 0.25);
    animation: Loader-tide-one 4.3s linear infinite;
}

.Loader-tide-ring--2 {
    width: 144px;
    height: 88px;
    border: 1px solid rgba(22, 135, 255, 0.35);
    transform: translate(-50%, -50%) rotate(61deg);
    animation: Loader-tide-two 5.8s linear infinite reverse;
}

.Loader-tide-ring--3 {
    width: 132px;
    height: 132px;
    border: 1px dashed rgba(217, 249, 255, 0.28);
    transform: translate(-50%, -50%) rotate(112deg);
    animation: Loader-tide-three 7s linear infinite;
}

.Loader-tide-ring--4 {
    width: 102px;
    height: 138px;
    border: 1px solid rgba(32, 203, 229, 0.24);
    transform: translate(-50%, -50%) rotate(155deg);
    animation: Loader-tide-four 4.9s linear infinite reverse;
}

.Loader-vortex {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-vortex--1 {
    width: 152px;
    height: 152px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 40deg,
            rgba(94, 231, 247, 0.16) 55deg,
            transparent 78deg 130deg,
            rgba(22, 135, 255, 0.13) 150deg,
            transparent 176deg 240deg,
            rgba(217, 249, 255, 0.13) 255deg,
            transparent 285deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 79%,
            transparent 80%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 79%,
            transparent 80%
        );
    filter: blur(1px);
    animation: Loader-vortex-one 6s linear infinite;
}

.Loader-vortex--2 {
    width: 126px;
    height: 126px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 160deg,
            transparent 0deg 36deg,
            rgba(32, 203, 229, 0.2) 44deg,
            transparent 65deg 142deg,
            rgba(94, 231, 247, 0.17) 152deg,
            transparent 180deg 264deg,
            rgba(22, 135, 255, 0.17) 273deg,
            transparent 300deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 69%,
            #000 70% 78%,
            transparent 79%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 69%,
            #000 70% 78%,
            transparent 79%
        );
    animation: Loader-vortex-two 4.6s linear infinite reverse;
}

.Loader-vortex--3 {
    width: 94px;
    height: 94px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 250deg,
            transparent,
            rgba(217, 249, 255, 0.22),
            transparent 26%,
            rgba(94, 231, 247, 0.18),
            transparent 52%,
            rgba(22, 135, 255, 0.2),
            transparent 78%,
            rgba(32, 203, 229, 0.18),
            transparent
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 80%,
            transparent 81%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 80%,
            transparent 81%
        );
    animation: Loader-vortex-three 3.3s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-orbit span {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 35% 28%,
            #ffffff,
            #d9f9ff 30%,
            #5ee7f7 58%,
            #1687ff 100%
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 12px #5ee7f7,
        0 0 20px rgba(22, 135, 255, 0.75);
}

.Loader-orbit--1 {
    width: 158px;
    height: 52px;
    animation: Loader-orbit-one 4.7s linear infinite;
}

.Loader-orbit--2 {
    width: 114px;
    height: 154px;
    animation: Loader-orbit-two 5.9s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 140px;
    height: 96px;
    animation: Loader-orbit-three 6.7s linear infinite;
}

.Loader-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 58px;
    height: 20px;
    border-top: 2px solid rgba(217, 249, 255, 0.75);
    border-radius: 50%;
    filter:
        drop-shadow(0 0 4px rgba(94, 231, 247, 0.8))
        drop-shadow(0 0 8px rgba(22, 135, 255, 0.5));
    opacity: 0.7;
}

.Loader-wave::before {
    content: "";
    position: absolute;
    left: 10px;
    top: -5px;
    width: 34px;
    height: 14px;
    border-top: 1px solid rgba(94, 231, 247, 0.7);
    border-radius: 50%;
}

.Loader-wave--1 {
    animation: Loader-wave-one 2.8s ease-in-out infinite;
}

.Loader-wave--2 {
    animation: Loader-wave-two 3.1s ease-in-out infinite 0.2s;
}

.Loader-wave--3 {
    animation: Loader-wave-three 2.7s ease-in-out infinite 0.4s;
}

.Loader-wave--4 {
    animation: Loader-wave-four 3.3s ease-in-out infinite 0.6s;
}

.Loader-wave--5 {
    animation: Loader-wave-five 2.9s ease-in-out infinite 0.8s;
}

.Loader-wave--6 {
    animation: Loader-wave-six 3.2s ease-in-out infinite 1s;
}

.Loader-wave--7 {
    animation: Loader-wave-seven 2.6s ease-in-out infinite 1.2s;
}

.Loader-wave--8 {
    animation: Loader-wave-eight 3.4s ease-in-out infinite 1.4s;
}

.Loader-drop {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 12px;
    border-radius:
        60% 60% 65% 65% /
        75% 75% 35% 35%;
    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #d9f9ff 20%,
            #5ee7f7 45%,
            #1687ff 78%,
            #1252c7 100%
        );
    box-shadow:
        0 0 4px rgba(255, 255, 255, 0.8),
        0 0 8px rgba(94, 231, 247, 0.7);
    filter:
        drop-shadow(0 0 5px rgba(22, 135, 255, 0.45));
}

.Loader-drop::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 2px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
}

.Loader-drop--1 {
    animation: Loader-drop-one 3.1s ease-in-out infinite;
}

.Loader-drop--2 {
    animation: Loader-drop-two 3.4s ease-in-out infinite 0.15s;
}

.Loader-drop--3 {
    animation: Loader-drop-three 2.9s ease-in-out infinite 0.3s;
}

.Loader-drop--4 {
    animation: Loader-drop-four 3.6s ease-in-out infinite 0.45s;
}

.Loader-drop--5 {
    animation: Loader-drop-five 3.2s ease-in-out infinite 0.6s;
}

.Loader-drop--6 {
    animation: Loader-drop-six 3.5s ease-in-out infinite 0.75s;
}

.Loader-drop--7 {
    animation: Loader-drop-seven 3s ease-in-out infinite 0.9s;
}

.Loader-drop--8 {
    animation: Loader-drop-eight 3.7s ease-in-out infinite 1.05s;
}

.Loader-drop--9 {
    animation: Loader-drop-nine 3.25s ease-in-out infinite 1.2s;
}

.Loader-drop--10 {
    animation: Loader-drop-ten 3.55s ease-in-out infinite 1.35s;
}

.Loader-drop--11 {
    animation: Loader-drop-eleven 3.15s ease-in-out infinite 0.5s;
}

.Loader-drop--12 {
    animation: Loader-drop-twelve 3.45s ease-in-out infinite 0.8s;
}

.Loader-bubble {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid rgba(217, 249, 255, 0.65);
    background:
        radial-gradient(
            circle at 30% 25%,
            rgba(255, 255, 255, 0.7),
            rgba(94, 231, 247, 0.12) 40%,
            rgba(22, 135, 255, 0.08) 70%,
            transparent
        );
    box-shadow:
        0 0 5px rgba(94, 231, 247, 0.35);
    opacity: 0;
}

.Loader-bubble--1 {
    width: 5px;
    height: 5px;
    animation: Loader-bubble-one 2.7s ease-out infinite;
}

.Loader-bubble--2 {
    width: 8px;
    height: 8px;
    animation: Loader-bubble-two 3.1s ease-out infinite 0.15s;
}

.Loader-bubble--3 {
    width: 4px;
    height: 4px;
    animation: Loader-bubble-three 2.6s ease-out infinite 0.3s;
}

.Loader-bubble--4 {
    width: 9px;
    height: 9px;
    animation: Loader-bubble-four 3.4s ease-out infinite 0.45s;
}

.Loader-bubble--5 {
    animation: Loader-bubble-five 2.9s ease-out infinite 0.6s;
}

.Loader-bubble--6 {
    width: 10px;
    height: 10px;
    animation: Loader-bubble-six 3.5s ease-out infinite 0.75s;
}

.Loader-bubble--7 {
    width: 4px;
    height: 4px;
    animation: Loader-bubble-seven 2.5s ease-out infinite 0.9s;
}

.Loader-bubble--8 {
    width: 7px;
    height: 7px;
    animation: Loader-bubble-eight 3.2s ease-out infinite 1.05s;
}

.Loader-bubble--9 {
    width: 5px;
    height: 5px;
    animation: Loader-bubble-nine 2.8s ease-out infinite 1.2s;
}

.Loader-bubble--10 {
    width: 9px;
    height: 9px;
    animation: Loader-bubble-ten 3.6s ease-out infinite 1.35s;
}

.Loader-bubble--11 {
    width: 6px;
    height: 6px;
    animation: Loader-bubble-eleven 3s ease-out infinite 0.4s;
}

.Loader-bubble--12 {
    width: 4px;
    height: 4px;
    animation: Loader-bubble-twelve 2.7s ease-out infinite 0.55s;
}

.Loader-bubble--13 {
    width: 8px;
    height: 8px;
    animation: Loader-bubble-thirteen 3.3s ease-out infinite 0.7s;
}

.Loader-bubble--14 {
    width: 5px;
    height: 5px;
    animation: Loader-bubble-fourteen 2.9s ease-out infinite 0.85s;
}

.Loader-bubble--15 {
    width: 7px;
    height: 7px;
    animation: Loader-bubble-fifteen 3.25s ease-out infinite 1s;
}

.Loader-bubble--16 {
    width: 4px;
    height: 4px;
    animation: Loader-bubble-sixteen 2.65s ease-out infinite 1.15s;
}

.Loader-crystal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 24px;
    clip-path:
        polygon(
            50% 0,
            100% 28%,
            75% 100%,
            25% 100%,
            0 28%
        );
    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #d9f9ff 16%,
            #5ee7f7 38%,
            #1687ff 64%,
            #06276f 100%
        );
    filter:
        drop-shadow(0 0 4px rgba(217, 249, 255, 0.6))
        drop-shadow(0 0 8px rgba(94, 231, 247, 0.45));
}

.Loader-crystal::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 4px;
    width: 2px;
    height: 13px;
    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.85),
            transparent
        );
}

.Loader-crystal--1 {
    animation: Loader-crystal-one 3.2s ease-in-out infinite;
}

.Loader-crystal--2 {
    animation: Loader-crystal-two 3.5s ease-in-out infinite 0.2s;
}

.Loader-crystal--3 {
    animation: Loader-crystal-three 3s ease-in-out infinite 0.4s;
}

.Loader-crystal--4 {
    animation: Loader-crystal-four 3.7s ease-in-out infinite 0.6s;
}

.Loader-crystal--5 {
    animation: Loader-crystal-five 3.25s ease-in-out infinite 0.8s;
}

.Loader-crystal--6 {
    animation: Loader-crystal-six 3.6s ease-in-out infinite 1s;
}

.Loader-crystal--7 {
    animation: Loader-crystal-seven 3.1s ease-in-out infinite 1.2s;
}

.Loader-crystal--8 {
    animation: Loader-crystal-eight 3.45s ease-in-out infinite 1.4s;
}

.Loader-pressure {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 62px;
    height: 62px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(94, 231, 247, 0.55);
    opacity: 0;
}

.Loader-pressure--1 {
    animation: Loader-pressure-wave 2.4s ease-out infinite;
}

.Loader-pressure--2 {
    border-color: rgba(22, 135, 255, 0.5);
    animation: Loader-pressure-wave 2.4s ease-out infinite 0.6s;
}

.Loader-pressure--3 {
    border-color: rgba(217, 249, 255, 0.46);
    animation: Loader-pressure-wave 2.4s ease-out infinite 1.2s;
}

.Loader-pressure--4 {
    border-color: rgba(32, 203, 229, 0.46);
    animation: Loader-pressure-wave 2.4s ease-out infinite 1.8s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 92px;
    height: 92px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(217, 249, 255, 0.09),
            rgba(94, 231, 247, 0.07) 32%,
            rgba(22, 135, 255, 0.06) 52%,
            rgba(6, 39, 111, 0.03) 68%,
            transparent 76%
        );
    animation: Loader-shell-breathe 1.7s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 28deg,
            #d9f9ff 28deg 33deg,
            transparent 33deg 86deg,
            #5ee7f7 86deg 91deg,
            transparent 91deg 148deg,
            #1687ff 148deg 154deg,
            transparent 154deg 218deg,
            #20cbe5 218deg 223deg,
            transparent 223deg 292deg,
            #ffffff 292deg 297deg,
            transparent 297deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(94, 231, 247, 0.65));
    animation: Loader-core-ring-one 2.5s linear infinite;
}

.Loader-core-ring--2 {
    inset: 8px;
    border:
        1px dashed rgba(217, 249, 255, 0.42);
    animation: Loader-core-ring-two 3.2s linear infinite reverse;
}

.Loader-core-ring--3 {
    inset: 14px;
    border:
        1px solid rgba(22, 135, 255, 0.4);
    box-shadow:
        inset 0 0 9px rgba(94, 231, 247, 0.12);
    animation: Loader-core-ring-three 1.8s ease-in-out infinite alternate;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45% 55% 48% 52% / 52% 44% 56% 48%;
    background:
        radial-gradient(
            circle at 34% 27%,
            #ffffff 0%,
            #e8fdff 8%,
            #a6f4ff 18%,
            #5ee7f7 31%,
            #20cbe5 46%,
            #1687ff 63%,
            #1252c7 78%,
            #06276f 91%,
            #031431 100%
        );
    border:
        1px solid rgba(217, 249, 255, 0.48);
    box-shadow:
        0 0 7px #ffffff,
        0 0 16px #5ee7f7,
        0 0 30px rgba(32, 203, 229, 0.85),
        0 0 46px rgba(22, 135, 255, 0.7),
        0 0 66px rgba(18, 82, 199, 0.5),
        inset 0 0 15px rgba(255, 255, 255, 0.36);
    animation:
        Loader-core-morph 3.2s ease-in-out infinite,
        Loader-core-breathe 0.95s ease-in-out infinite alternate,
        Loader-core-shimmer 2.4s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border:
        1px solid rgba(217, 249, 255, 0.42);
    box-shadow:
        inset 0 0 9px rgba(94, 231, 247, 0.4);
    animation: Loader-core-inner 1.15s ease-in-out infinite alternate;
}

.Loader-core::after {
    content: "";
    position: absolute;
    left: 11px;
    top: 9px;
    width: 20px;
    height: 9px;
    border-radius: 50%;
    background:
        rgba(255, 255, 255, 0.5);
    filter: blur(2px);
    transform: rotate(-26deg);
}

.Loader-core-glow {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(217, 249, 255, 0.2),
            rgba(94, 231, 247, 0.15) 31%,
            rgba(22, 135, 255, 0.09) 52%,
            rgba(6, 39, 111, 0.04) 66%,
            transparent 74%
        );
    animation: Loader-core-glow 1.35s ease-in-out infinite alternate;
}

.Loader-water-symbol {
    position: relative;
    z-index: 20;
    width: 30px;
    height: 34px;
    filter:
        drop-shadow(0 0 3px #ffffff)
        drop-shadow(0 0 8px #5ee7f7)
        drop-shadow(0 0 13px rgba(22, 135, 255, 0.75));
    animation: Loader-symbol-float 1.7s ease-in-out infinite alternate;
}

.Loader-water-symbol-top {
    position: absolute;
    left: 50%;
    top: 0;
    width: 12px;
    height: 18px;
    transform:
        translateX(-50%)
        rotate(45deg);
    border-radius:
        80% 12% 80% 80%;
    background:
        linear-gradient(
            135deg,
            #ffffff,
            #5ee7f7 45%,
            #1687ff
        );
}

.Loader-water-symbol-left,
.Loader-water-symbol-right {
    position: absolute;
    top: 17px;
    width: 14px;
    height: 9px;
    border-top:
        3px solid #d9f9ff;
    border-radius: 50%;
}

.Loader-water-symbol-left {
    left: 0;
    transform: rotate(-16deg);
}

.Loader-water-symbol-right {
    right: 0;
    transform: rotate(16deg);
}

.Loader-water-symbol-center {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 20px;
    height: 10px;
    transform: translateX(-50%);
    border-bottom:
        3px solid #5ee7f7;
    border-radius: 50%;
}

@keyframes Loader-ocean-breathe {
    from {
        opacity: 0.5;
        transform: scale(0.93);
    }

    to {
        opacity: 1;
        transform: scale(1.09);
    }
}

@keyframes Loader-ocean-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-ocean-aura-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-caustics-drift {
    from {
        transform: scale(0.95) translate(-3px, 2px);
        opacity: 0.4;
    }

    to {
        transform: scale(1.06) translate(4px, -3px);
        opacity: 0.85;
    }
}

@keyframes Loader-caustics-rotate {
    to {
        rotate: 360deg;
    }
}

@keyframes Loader-depth-one {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.96);
        opacity: 0.38;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.05);
        opacity: 1;
    }
}

@keyframes Loader-depth-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-depth-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-tide-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(12deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(372deg);
    }
}

@keyframes Loader-tide-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(61deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-299deg);
    }
}

@keyframes Loader-tide-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(112deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(472deg);
    }
}

@keyframes Loader-tide-four {
    from {
        transform:
            translate(-50%, -50%)
            rotate(155deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-205deg);
    }
}

@keyframes Loader-vortex-one {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-vortex-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-vortex-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(58deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-302deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(120deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(480deg);
    }
}

@keyframes Loader-wave-one {
    0%,
    100% {
        transform:
            translate(-82px, -62px)
            rotate(-25deg)
            scaleX(0.82);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-88px, -69px)
            rotate(-12deg)
            scaleX(1.12);
        opacity: 1;
    }
}

@keyframes Loader-wave-two {
    0%,
    100% {
        transform:
            translate(-20px, -92px)
            rotate(8deg)
            scaleX(0.8);
        opacity: 0.28;
    }

    50% {
        transform:
            translate(-14px, -101px)
            rotate(20deg)
            scaleX(1.08);
        opacity: 1;
    }
}

@keyframes Loader-wave-three {
    0%,
    100% {
        transform:
            translate(57px, -76px)
            rotate(48deg)
            scaleX(0.83);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(66px, -81px)
            rotate(62deg)
            scaleX(1.1);
        opacity: 1;
    }
}

@keyframes Loader-wave-four {
    0%,
    100% {
        transform:
            translate(86px, -15px)
            rotate(93deg)
            scaleX(0.8);
        opacity: 0.28;
    }

    50% {
        transform:
            translate(96px, -8px)
            rotate(108deg)
            scaleX(1.08);
        opacity: 1;
    }
}

@keyframes Loader-wave-five {
    0%,
    100% {
        transform:
            translate(60px, 58px)
            rotate(139deg)
            scaleX(0.82);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(67px, 67px)
            rotate(153deg)
            scaleX(1.12);
        opacity: 1;
    }
}

@keyframes Loader-wave-six {
    0%,
    100% {
        transform:
            translate(-5px, 85px)
            rotate(183deg)
            scaleX(0.8);
        opacity: 0.27;
    }

    50% {
        transform:
            translate(-11px, 95px)
            rotate(197deg)
            scaleX(1.09);
        opacity: 1;
    }
}

@keyframes Loader-wave-seven {
    0%,
    100% {
        transform:
            translate(-74px, 55px)
            rotate(228deg)
            scaleX(0.83);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-82px, 63px)
            rotate(243deg)
            scaleX(1.12);
        opacity: 1;
    }
}

@keyframes Loader-wave-eight {
    0%,
    100% {
        transform:
            translate(-91px, -10px)
            rotate(272deg)
            scaleX(0.8);
        opacity: 0.28;
    }

    50% {
        transform:
            translate(-101px, -16px)
            rotate(287deg)
            scaleX(1.08);
        opacity: 1;
    }
}

@keyframes Loader-drop-one {
    0%,
    100% {
        transform:
            translate(-86px, -68px)
            rotate(-18deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(-91px, -76px)
            rotate(8deg)
            scale(1.1);
    }
}

@keyframes Loader-drop-two {
    0%,
    100% {
        transform:
            translate(-44px, -99px)
            rotate(15deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(-39px, -108px)
            rotate(40deg)
            scale(1.06);
    }
}

@keyframes Loader-drop-three {
    0%,
    100% {
        transform:
            translate(14px, -104px)
            rotate(49deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(23px, -112px)
            rotate(73deg)
            scale(1.08);
    }
}

@keyframes Loader-drop-four {
    0%,
    100% {
        transform:
            translate(67px, -77px)
            rotate(81deg)
            scale(0.87);
    }

    50% {
        transform:
            translate(77px, -82px)
            rotate(106deg)
            scale(1.05);
    }
}

@keyframes Loader-drop-five {
    0%,
    100% {
        transform:
            translate(99px, -24px)
            rotate(116deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(108px, -17px)
            rotate(141deg)
            scale(1.1);
    }
}

@keyframes Loader-drop-six {
    0%,
    100% {
        transform:
            translate(87px, 45px)
            rotate(150deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(95px, 54px)
            rotate(176deg)
            scale(1.06);
    }
}

@keyframes Loader-drop-seven {
    0%,
    100% {
        transform:
            translate(39px, 90px)
            rotate(187deg)
            scale(0.83);
    }

    50% {
        transform:
            translate(43px, 100px)
            rotate(213deg)
            scale(1.09);
    }
}

@keyframes Loader-drop-eight {
    0%,
    100% {
        transform:
            translate(-23px, 97px)
            rotate(220deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-30px, 107px)
            rotate(246deg)
            scale(1.05);
    }
}

@keyframes Loader-drop-nine {
    0%,
    100% {
        transform:
            translate(-77px, 63px)
            rotate(253deg)
            scale(0.81);
    }

    50% {
        transform:
            translate(-86px, 69px)
            rotate(280deg)
            scale(1.09);
    }
}

@keyframes Loader-drop-ten {
    0%,
    100% {
        transform:
            translate(-102px, 8px)
            rotate(290deg)
            scale(0.88);
    }

    50% {
        transform:
            translate(-111px, 2px)
            rotate(316deg)
            scale(1.06);
    }
}

@keyframes Loader-drop-eleven {
    0%,
    100% {
        transform:
            translate(-97px, -40px)
            rotate(321deg)
            scale(0.84);
    }

    50% {
        transform:
            translate(-104px, -48px)
            rotate(347deg)
            scale(1.08);
    }
}

@keyframes Loader-drop-twelve {
    0%,
    100% {
        transform:
            translate(65px, 76px)
            rotate(355deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(72px, 85px)
            rotate(381deg)
            scale(1.05);
    }
}

@keyframes Loader-bubble-one {
    0% {
        opacity: 0;
        transform: translate(-14px, 24px) scale(0.4);
    }

    25% {
        opacity: 0.85;
    }

    100% {
        opacity: 0;
        transform: translate(-34px, -108px) scale(1.15);
    }
}

@keyframes Loader-bubble-two {
    0% {
        opacity: 0;
        transform: translate(21px, 30px) scale(0.45);
    }

    20% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(52px, -103px) scale(1.1);
    }
}

@keyframes Loader-bubble-three {
    0% {
        opacity: 0;
        transform: translate(-34px, 11px) scale(0.4);
    }

    24% {
        opacity: 0.85;
    }

    100% {
        opacity: 0;
        transform: translate(-77px, -93px) scale(1.25);
    }
}

@keyframes Loader-bubble-four {
    0% {
        opacity: 0;
        transform: translate(37px, 16px) scale(0.45);
    }

    22% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(83px, -87px) scale(1.05);
    }
}

@keyframes Loader-bubble-five {
    0% {
        opacity: 0;
        transform: translate(-5px, 38px) scale(0.4);
    }

    20% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(9px, -117px) scale(1.1);
    }
}

@keyframes Loader-bubble-six {
    0% {
        opacity: 0;
        transform: translate(30px, 35px) scale(0.4);
    }

    23% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(67px, -110px) scale(1.08);
    }
}

@keyframes Loader-bubble-seven {
    0% {
        opacity: 0;
        transform: translate(-28px, 34px) scale(0.45);
    }

    20% {
        opacity: 0.85;
    }

    100% {
        opacity: 0;
        transform: translate(-60px, -112px) scale(1.2);
    }
}

@keyframes Loader-bubble-eight {
    0% {
        opacity: 0;
        transform: translate(46px, 27px) scale(0.4);
    }

    25% {
        opacity: 0.88;
    }

    100% {
        opacity: 0;
        transform: translate(99px, -75px) scale(1.05);
    }
}

@keyframes Loader-bubble-nine {
    0% {
        opacity: 0;
        transform: translate(-48px, 27px) scale(0.4);
    }

    22% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-102px, -72px) scale(1.15);
    }
}

@keyframes Loader-bubble-ten {
    0% {
        opacity: 0;
        transform: translate(12px, 44px) scale(0.45);
    }

    20% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(35px, -119px) scale(1.08);
    }
}

@keyframes Loader-bubble-eleven {
    0% {
        opacity: 0;
        transform: translate(-18px, 42px) scale(0.4);
    }

    24% {
        opacity: 0.85;
    }

    100% {
        opacity: 0;
        transform: translate(-42px, -118px) scale(1.18);
    }
}

@keyframes Loader-bubble-twelve {
    0% {
        opacity: 0;
        transform: translate(55px, 19px) scale(0.45);
    }

    21% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(110px, -61px) scale(1.08);
    }
}

@keyframes Loader-bubble-thirteen {
    0% {
        opacity: 0;
        transform: translate(-57px, 17px) scale(0.4);
    }

    25% {
        opacity: 0.86;
    }

    100% {
        opacity: 0;
        transform: translate(-111px, -58px) scale(1.12);
    }
}

@keyframes Loader-bubble-fourteen {
    0% {
        opacity: 0;
        transform: translate(38px, 42px) scale(0.42);
    }

    20% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(78px, -104px) scale(1.1);
    }
}

@keyframes Loader-bubble-fifteen {
    0% {
        opacity: 0;
        transform: translate(-40px, 40px) scale(0.44);
    }

    23% {
        opacity: 0.88;
    }

    100% {
        opacity: 0;
        transform: translate(-82px, -101px) scale(1.06);
    }
}

@keyframes Loader-bubble-sixteen {
    0% {
        opacity: 0;
        transform: translate(2px, 52px) scale(0.4);
    }

    20% {
        opacity: 0.9;
    }

    100% {
        opacity: 0;
        transform: translate(-3px, -126px) scale(1.2);
    }
}

@keyframes Loader-crystal-one {
    0%,
    100% {
        transform:
            translate(-79px, -65px)
            rotate(-14deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-85px, -74px)
            rotate(10deg)
            scale(1.08);
    }
}

@keyframes Loader-crystal-two {
    0%,
    100% {
        transform:
            translate(-11px, -98px)
            rotate(30deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-5px, -108px)
            rotate(55deg)
            scale(1.09);
    }
}

@keyframes Loader-crystal-three {
    0%,
    100% {
        transform:
            translate(69px, -71px)
            rotate(74deg)
            scale(0.87);
    }

    50% {
        transform:
            translate(78px, -77px)
            rotate(99deg)
            scale(1.06);
    }
}

@keyframes Loader-crystal-four {
    0%,
    100% {
        transform:
            translate(94px, 2px)
            rotate(119deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(104px, 8px)
            rotate(144deg)
            scale(1.08);
    }
}

@keyframes Loader-crystal-five {
    0%,
    100% {
        transform:
            translate(65px, 71px)
            rotate(164deg)
            scale(0.87);
    }

    50% {
        transform:
            translate(72px, 80px)
            rotate(189deg)
            scale(1.05);
    }
}

@keyframes Loader-crystal-six {
    0%,
    100% {
        transform:
            translate(-9px, 96px)
            rotate(209deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-15px, 106px)
            rotate(234deg)
            scale(1.08);
    }
}

@keyframes Loader-crystal-seven {
    0%,
    100% {
        transform:
            translate(-75px, 66px)
            rotate(254deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-84px, 73px)
            rotate(279deg)
            scale(1.06);
    }
}

@keyframes Loader-crystal-eight {
    0%,
    100% {
        transform:
            translate(-98px, -6px)
            rotate(299deg)
            scale(0.83);
    }

    50% {
        transform:
            translate(-108px, -12px)
            rotate(324deg)
            scale(1.08);
    }
}

@keyframes Loader-pressure-wave {
    0% {
        opacity: 0.8;
        transform:
            translate(-50%, -50%)
            scale(0.5);
    }

    60% {
        opacity: 0.25;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(3);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.94);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.06);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-ring-three {
    from {
        opacity: 0.4;
        transform: scale(0.91);
    }

    to {
        opacity: 1;
        transform: scale(1.09);
    }
}

@keyframes Loader-core-morph {
    0%,
    100% {
        border-radius:
            45% 55% 48% 52% /
            52% 44% 56% 48%;
    }

    25% {
        border-radius:
            54% 46% 56% 44% /
            43% 57% 45% 55%;
    }

    50% {
        border-radius:
            48% 52% 43% 57% /
            57% 45% 55% 43%;
    }

    75% {
        border-radius:
            57% 43% 51% 49% /
            46% 54% 42% 58%;
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.91);
    }

    to {
        transform: scale(1.09);
    }
}

@keyframes Loader-core-shimmer {
    0%,
    100% {
        filter:
            brightness(0.96)
            saturate(1);
    }

    50% {
        filter:
            brightness(1.24)
            saturate(1.18);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.35;
        transform: scale(0.88);
    }

    to {
        opacity: 1;
        transform: scale(1.28);
    }
}

@keyframes Loader-symbol-float {
    from {
        transform:
            translateY(2px)
            rotate(-3deg)
            scale(0.94);
    }

    to {
        transform:
            translateY(-3px)
            rotate(3deg)
            scale(1.06);
    }
}`,
  },
  {
    id: 3123,
    name: "Quantum Science Singularity",
    preview: (
      <div className="ld-3123">
        <div className="ld-3123-lab-aura" />
        <div className="ld-3123-grid-field" />

        <div className="ld-3123-quantum-field ld-3123-quantum-field--1" />
        <div className="ld-3123-quantum-field ld-3123-quantum-field--2" />
        <div className="ld-3123-quantum-field ld-3123-quantum-field--3" />

        <div className="ld-3123-spectrum ld-3123-spectrum--1" />
        <div className="ld-3123-spectrum ld-3123-spectrum--2" />
        <div className="ld-3123-spectrum ld-3123-spectrum--3" />

        <div className="ld-3123-atom-orbit ld-3123-atom-orbit--1">
          <span />
        </div>

        <div className="ld-3123-atom-orbit ld-3123-atom-orbit--2">
          <span />
        </div>

        <div className="ld-3123-atom-orbit ld-3123-atom-orbit--3">
          <span />
        </div>

        <div className="ld-3123-atom-orbit ld-3123-atom-orbit--4">
          <span />
        </div>

        <div className="ld-3123-wave ld-3123-wave--1" />
        <div className="ld-3123-wave ld-3123-wave--2" />
        <div className="ld-3123-wave ld-3123-wave--3" />
        <div className="ld-3123-wave ld-3123-wave--4" />

        <span className="ld-3123-data ld-3123-data--1" />
        <span className="ld-3123-data ld-3123-data--2" />
        <span className="ld-3123-data ld-3123-data--3" />
        <span className="ld-3123-data ld-3123-data--4" />
        <span className="ld-3123-data ld-3123-data--5" />
        <span className="ld-3123-data ld-3123-data--6" />
        <span className="ld-3123-data ld-3123-data--7" />
        <span className="ld-3123-data ld-3123-data--8" />

        <span className="ld-3123-particle ld-3123-particle--1" />
        <span className="ld-3123-particle ld-3123-particle--2" />
        <span className="ld-3123-particle ld-3123-particle--3" />
        <span className="ld-3123-particle ld-3123-particle--4" />
        <span className="ld-3123-particle ld-3123-particle--5" />
        <span className="ld-3123-particle ld-3123-particle--6" />
        <span className="ld-3123-particle ld-3123-particle--7" />
        <span className="ld-3123-particle ld-3123-particle--8" />
        <span className="ld-3123-particle ld-3123-particle--9" />
        <span className="ld-3123-particle ld-3123-particle--10" />
        <span className="ld-3123-particle ld-3123-particle--11" />
        <span className="ld-3123-particle ld-3123-particle--12" />
        <span className="ld-3123-particle ld-3123-particle--13" />
        <span className="ld-3123-particle ld-3123-particle--14" />
        <span className="ld-3123-particle ld-3123-particle--15" />
        <span className="ld-3123-particle ld-3123-particle--16" />

        <span className="ld-3123-quark ld-3123-quark--1" />
        <span className="ld-3123-quark ld-3123-quark--2" />
        <span className="ld-3123-quark ld-3123-quark--3" />
        <span className="ld-3123-quark ld-3123-quark--4" />
        <span className="ld-3123-quark ld-3123-quark--5" />
        <span className="ld-3123-quark ld-3123-quark--6" />

        <div className="ld-3123-pulse ld-3123-pulse--1" />
        <div className="ld-3123-pulse ld-3123-pulse--2" />
        <div className="ld-3123-pulse ld-3123-pulse--3" />
        <div className="ld-3123-pulse ld-3123-pulse--4" />

        <div className="ld-3123-core-shell">
          <div className="ld-3123-core-ring ld-3123-core-ring--1" />
          <div className="ld-3123-core-ring ld-3123-core-ring--2" />
          <div className="ld-3123-core-ring ld-3123-core-ring--3" />

          <div className="ld-3123-core">
            <div className="ld-3123-core-glow" />

            <div className="ld-3123-nucleus">
              <span className="ld-3123-nucleon ld-3123-nucleon--1" />
              <span className="ld-3123-nucleon ld-3123-nucleon--2" />
              <span className="ld-3123-nucleon ld-3123-nucleon--3" />
              <span className="ld-3123-nucleon ld-3123-nucleon--4" />
              <span className="ld-3123-nucleon ld-3123-nucleon--5" />
              <span className="ld-3123-nucleon ld-3123-nucleon--6" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-lab-aura"></div>
    <div class="Loader-grid-field"></div>

    <div class="Loader-quantum-field Loader-quantum-field--1"></div>
    <div class="Loader-quantum-field Loader-quantum-field--2"></div>
    <div class="Loader-quantum-field Loader-quantum-field--3"></div>

    <div class="Loader-spectrum Loader-spectrum--1"></div>
    <div class="Loader-spectrum Loader-spectrum--2"></div>
    <div class="Loader-spectrum Loader-spectrum--3"></div>

    <div class="Loader-atom-orbit Loader-atom-orbit--1">
        <span></span>
    </div>

    <div class="Loader-atom-orbit Loader-atom-orbit--2">
        <span></span>
    </div>

    <div class="Loader-atom-orbit Loader-atom-orbit--3">
        <span></span>
    </div>

    <div class="Loader-atom-orbit Loader-atom-orbit--4">
        <span></span>
    </div>

    <div class="Loader-wave Loader-wave--1"></div>
    <div class="Loader-wave Loader-wave--2"></div>
    <div class="Loader-wave Loader-wave--3"></div>
    <div class="Loader-wave Loader-wave--4"></div>

    <span class="Loader-data Loader-data--1"></span>
    <span class="Loader-data Loader-data--2"></span>
    <span class="Loader-data Loader-data--3"></span>
    <span class="Loader-data Loader-data--4"></span>
    <span class="Loader-data Loader-data--5"></span>
    <span class="Loader-data Loader-data--6"></span>
    <span class="Loader-data Loader-data--7"></span>
    <span class="Loader-data Loader-data--8"></span>

    <span class="Loader-particle Loader-particle--1"></span>
    <span class="Loader-particle Loader-particle--2"></span>
    <span class="Loader-particle Loader-particle--3"></span>
    <span class="Loader-particle Loader-particle--4"></span>
    <span class="Loader-particle Loader-particle--5"></span>
    <span class="Loader-particle Loader-particle--6"></span>
    <span class="Loader-particle Loader-particle--7"></span>
    <span class="Loader-particle Loader-particle--8"></span>
    <span class="Loader-particle Loader-particle--9"></span>
    <span class="Loader-particle Loader-particle--10"></span>
    <span class="Loader-particle Loader-particle--11"></span>
    <span class="Loader-particle Loader-particle--12"></span>
    <span class="Loader-particle Loader-particle--13"></span>
    <span class="Loader-particle Loader-particle--14"></span>
    <span class="Loader-particle Loader-particle--15"></span>
    <span class="Loader-particle Loader-particle--16"></span>

    <span class="Loader-quark Loader-quark--1"></span>
    <span class="Loader-quark Loader-quark--2"></span>
    <span class="Loader-quark Loader-quark--3"></span>
    <span class="Loader-quark Loader-quark--4"></span>
    <span class="Loader-quark Loader-quark--5"></span>
    <span class="Loader-quark Loader-quark--6"></span>

    <div class="Loader-pulse Loader-pulse--1"></div>
    <div class="Loader-pulse Loader-pulse--2"></div>
    <div class="Loader-pulse Loader-pulse--3"></div>
    <div class="Loader-pulse Loader-pulse--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>
        <div class="Loader-core-ring Loader-core-ring--3"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-nucleus">
                <span class="Loader-nucleon Loader-nucleon--1"></span>
                <span class="Loader-nucleon Loader-nucleon--2"></span>
                <span class="Loader-nucleon Loader-nucleon--3"></span>
                <span class="Loader-nucleon Loader-nucleon--4"></span>
                <span class="Loader-nucleon Loader-nucleon--5"></span>
                <span class="Loader-nucleon Loader-nucleon--6"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --science-white: #f8ffff;
    --science-cyan: #4ffcff;
    --science-blue: #38bdf8;
    --science-violet: #8b5cf6;
    --science-purple: #6d28d9;
    --science-lime: #b8ff5a;
    --science-green: #4ade80;
    --science-dark: #06101f;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(79, 252, 255, 0.14) 0%,
            rgba(56, 189, 248, 0.1) 24%,
            rgba(139, 92, 246, 0.08) 44%,
            rgba(184, 255, 90, 0.04) 60%,
            transparent 76%
        );
    filter: blur(16px);
    animation: Loader-science-atmosphere 2.2s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 10deg,
            rgba(79, 252, 255, 0.1) 10deg 11deg,
            transparent 11deg 21deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    animation: Loader-science-dial 26s linear infinite;
}

.Loader-lab-aura {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(79, 252, 255, 0.13),
            transparent 22%,
            rgba(139, 92, 246, 0.12),
            transparent 45%,
            rgba(184, 255, 90, 0.09),
            transparent 70%,
            rgba(56, 189, 248, 0.1),
            transparent
        );
    filter: blur(5px);
    animation: Loader-lab-aura 8s linear infinite;
}

.Loader-grid-field {
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background:
        linear-gradient(
            rgba(79, 252, 255, 0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(79, 252, 255, 0.035) 1px,
            transparent 1px
        );
    background-size: 13px 13px;
    mask:
        radial-gradient(
            circle,
            #000 0%,
            rgba(0, 0, 0, 0.8) 52%,
            transparent 76%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            #000 0%,
            rgba(0, 0, 0, 0.8) 52%,
            transparent 76%
        );
    animation:
        Loader-grid-spin 18s linear infinite,
        Loader-grid-pulse 3s ease-in-out infinite;
}

.Loader-quantum-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-quantum-field--1 {
    width: 178px;
    height: 178px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(79, 252, 255, 0.2);
    box-shadow:
        0 0 11px rgba(79, 252, 255, 0.14),
        inset 0 0 18px rgba(56, 189, 248, 0.07);
    animation: Loader-field-one 3.2s ease-in-out infinite;
}

.Loader-quantum-field--2 {
    width: 148px;
    height: 148px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(139, 92, 246, 0.25);
    animation: Loader-field-two 8s linear infinite reverse;
}

.Loader-quantum-field--3 {
    width: 114px;
    height: 114px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 35deg,
            rgba(79, 252, 255, 0.2) 35deg 40deg,
            transparent 40deg 108deg,
            rgba(184, 255, 90, 0.18) 108deg 114deg,
            transparent 114deg 191deg,
            rgba(139, 92, 246, 0.2) 191deg 197deg,
            transparent 197deg 276deg,
            rgba(56, 189, 248, 0.18) 276deg 282deg,
            transparent 282deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    animation: Loader-field-three 5.4s linear infinite;
}

.Loader-spectrum {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    pointer-events: none;
}

.Loader-spectrum--1 {
    width: 162px;
    height: 72px;
    border: 2px solid rgba(79, 252, 255, 0.3);
    transform:
        translate(-50%, -50%)
        rotate(15deg);
    animation: Loader-spectrum-one 5s linear infinite;
}

.Loader-spectrum--2 {
    width: 142px;
    height: 86px;
    border: 1px solid rgba(139, 92, 246, 0.35);
    transform:
        translate(-50%, -50%)
        rotate(70deg);
    animation: Loader-spectrum-two 6.4s linear infinite reverse;
}

.Loader-spectrum--3 {
    width: 126px;
    height: 126px;
    border: 1px dashed rgba(184, 255, 90, 0.24);
    transform:
        translate(-50%, -50%)
        rotate(125deg);
    animation: Loader-spectrum-three 7.6s linear infinite;
}

.Loader-atom-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1px solid rgba(79, 252, 255, 0.26);
}

.Loader-atom-orbit span {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #4ffcff 30%,
            #38bdf8 58%,
            #8b5cf6 100%
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 11px #4ffcff,
        0 0 18px rgba(139, 92, 246, 0.8);
}

.Loader-atom-orbit--1 {
    width: 158px;
    height: 54px;
    animation: Loader-orbit-one 4.2s linear infinite;
}

.Loader-atom-orbit--2 {
    width: 158px;
    height: 54px;
    border-color: rgba(139, 92, 246, 0.28);
    animation: Loader-orbit-two 4.8s linear infinite reverse;
}

.Loader-atom-orbit--3 {
    width: 150px;
    height: 56px;
    border-color: rgba(184, 255, 90, 0.24);
    animation: Loader-orbit-three 5.4s linear infinite;
}

.Loader-atom-orbit--4 {
    width: 144px;
    height: 58px;
    border-color: rgba(56, 189, 248, 0.24);
    animation: Loader-orbit-four 6s linear infinite reverse;
}

.Loader-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 154px;
    height: 154px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

.Loader-wave--1 {
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 55deg,
            rgba(79, 252, 255, 0.22) 56deg 65deg,
            transparent 66deg 142deg,
            rgba(79, 252, 255, 0.12) 143deg 153deg,
            transparent 154deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 73%,
            #000 74% 78%,
            transparent 79%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 73%,
            #000 74% 78%,
            transparent 79%
        );
    animation: Loader-wave-one 4.4s linear infinite;
}

.Loader-wave--2 {
    width: 134px;
    height: 134px;
    background:
        conic-gradient(
            from 100deg,
            transparent 0deg 48deg,
            rgba(139, 92, 246, 0.22) 49deg 59deg,
            transparent 60deg 144deg,
            rgba(139, 92, 246, 0.12) 145deg 155deg,
            transparent 156deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 72%,
            #000 73% 78%,
            transparent 79%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 72%,
            #000 73% 78%,
            transparent 79%
        );
    animation: Loader-wave-two 5.2s linear infinite reverse;
}

.Loader-wave--3 {
    width: 112px;
    height: 112px;
    background:
        conic-gradient(
            from 210deg,
            transparent 0deg 45deg,
            rgba(184, 255, 90, 0.2) 46deg 56deg,
            transparent 57deg 140deg,
            rgba(184, 255, 90, 0.11) 141deg 151deg,
            transparent 152deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 78%,
            transparent 79%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 70%,
            #000 71% 78%,
            transparent 79%
        );
    animation: Loader-wave-three 3.8s linear infinite;
}

.Loader-wave--4 {
    width: 92px;
    height: 92px;
    background:
        conic-gradient(
            from 300deg,
            transparent 0deg 40deg,
            rgba(56, 189, 248, 0.24) 41deg 52deg,
            transparent 53deg 136deg,
            rgba(56, 189, 248, 0.12) 137deg 148deg,
            transparent 149deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 79%,
            transparent 80%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 68%,
            #000 69% 79%,
            transparent 80%
        );
    animation: Loader-wave-four 3.1s linear infinite reverse;
}

.Loader-data {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 3px;
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            transparent,
            #4ffcff,
            #f8ffff,
            #4ffcff,
            transparent
        );
    box-shadow:
        0 0 5px rgba(79, 252, 255, 0.7);
}

.Loader-data::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -4px;
    width: 1px;
    height: 11px;
    background:
        linear-gradient(
            transparent,
            rgba(184, 255, 90, 0.8),
            transparent
        );
}

.Loader-data--1 {
    animation: Loader-data-one 3s ease-in-out infinite;
}

.Loader-data--2 {
    animation: Loader-data-two 3.3s ease-in-out infinite 0.2s;
}

.Loader-data--3 {
    animation: Loader-data-three 2.8s ease-in-out infinite 0.4s;
}

.Loader-data--4 {
    animation: Loader-data-four 3.5s ease-in-out infinite 0.6s;
}

.Loader-data--5 {
    animation: Loader-data-five 3.1s ease-in-out infinite 0.8s;
}

.Loader-data--6 {
    animation: Loader-data-six 3.4s ease-in-out infinite 1s;
}

.Loader-data--7 {
    animation: Loader-data-seven 2.9s ease-in-out infinite 1.2s;
}

.Loader-data--8 {
    animation: Loader-data-eight 3.6s ease-in-out infinite 1.4s;
}

.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #4ffcff;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #4ffcff,
        0 0 13px rgba(139, 92, 246, 0.8);
    opacity: 0;
}

.Loader-particle:nth-of-type(3n) {
    background: #b8ff5a;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #b8ff5a,
        0 0 14px rgba(74, 222, 128, 0.7);
}

.Loader-particle--1 {
    animation: Loader-particle-one 2.4s ease-out infinite;
}

.Loader-particle--2 {
    animation: Loader-particle-two 2.7s ease-out infinite 0.1s;
}

.Loader-particle--3 {
    animation: Loader-particle-three 2.2s ease-out infinite 0.2s;
}

.Loader-particle--4 {
    animation: Loader-particle-four 2.9s ease-out infinite 0.3s;
}

.Loader-particle--5 {
    animation: Loader-particle-five 2.5s ease-out infinite 0.4s;
}

.Loader-particle--6 {
    animation: Loader-particle-six 2.8s ease-out infinite 0.5s;
}

.Loader-particle--7 {
    animation: Loader-particle-seven 2.3s ease-out infinite 0.6s;
}

.Loader-particle--8 {
    animation: Loader-particle-eight 3s ease-out infinite 0.7s;
}

.Loader-particle--9 {
    animation: Loader-particle-nine 2.45s ease-out infinite 0.8s;
}

.Loader-particle--10 {
    animation: Loader-particle-ten 2.75s ease-out infinite 0.9s;
}

.Loader-particle--11 {
    animation: Loader-particle-eleven 2.35s ease-out infinite 1s;
}

.Loader-particle--12 {
    animation: Loader-particle-twelve 2.85s ease-out infinite 1.1s;
}

.Loader-particle--13 {
    animation: Loader-particle-thirteen 2.55s ease-out infinite 1.2s;
}

.Loader-particle--14 {
    animation: Loader-particle-fourteen 2.95s ease-out infinite 1.3s;
}

.Loader-particle--15 {
    animation: Loader-particle-fifteen 2.25s ease-out infinite 1.4s;
}

.Loader-particle--16 {
    animation: Loader-particle-sixteen 3.05s ease-out infinite 1.5s;
}

.Loader-quark {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    margin: -4px;
    clip-path:
        polygon(
            50% 0,
            100% 50%,
            50% 100%,
            0 50%
        );
    background:
        linear-gradient(
            135deg,
            #f8ffff,
            #b8ff5a 30%,
            #4ffcff 60%,
            #8b5cf6
        );
    filter:
        drop-shadow(0 0 5px rgba(79, 252, 255, 0.8))
        drop-shadow(0 0 8px rgba(184, 255, 90, 0.5));
}

.Loader-quark--1 {
    animation: Loader-quark-one 2.9s ease-in-out infinite;
}

.Loader-quark--2 {
    animation: Loader-quark-two 3.2s ease-in-out infinite 0.25s;
}

.Loader-quark--3 {
    animation: Loader-quark-three 2.7s ease-in-out infinite 0.5s;
}

.Loader-quark--4 {
    animation: Loader-quark-four 3.4s ease-in-out infinite 0.75s;
}

.Loader-quark--5 {
    animation: Loader-quark-five 3s ease-in-out infinite 1s;
}

.Loader-quark--6 {
    animation: Loader-quark-six 3.3s ease-in-out infinite 1.25s;
}

.Loader-pulse {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 62px;
    height: 62px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(79, 252, 255, 0.6);
    opacity: 0;
}

.Loader-pulse--1 {
    animation: Loader-quantum-pulse 2.2s ease-out infinite;
}

.Loader-pulse--2 {
    border-color: rgba(139, 92, 246, 0.55);
    animation: Loader-quantum-pulse 2.2s ease-out infinite 0.55s;
}

.Loader-pulse--3 {
    border-color: rgba(184, 255, 90, 0.45);
    animation: Loader-quantum-pulse 2.2s ease-out infinite 1.1s;
}

.Loader-pulse--4 {
    border-color: rgba(56, 189, 248, 0.5);
    animation: Loader-quantum-pulse 2.2s ease-out infinite 1.65s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 94px;
    height: 94px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(79, 252, 255, 0.08),
            rgba(139, 92, 246, 0.07) 35%,
            rgba(184, 255, 90, 0.04) 55%,
            transparent 74%
        );
    animation: Loader-shell-breathe 1.7s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 25deg,
            #4ffcff 25deg 31deg,
            transparent 31deg 82deg,
            #b8ff5a 82deg 88deg,
            transparent 88deg 145deg,
            #8b5cf6 145deg 151deg,
            transparent 151deg 214deg,
            #38bdf8 214deg 220deg,
            transparent 220deg 288deg,
            #f8ffff 288deg 294deg,
            transparent 294deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(79, 252, 255, 0.7));
    animation: Loader-core-ring-one 2.4s linear infinite;
}

.Loader-core-ring--2 {
    inset: 8px;
    border: 1px dashed rgba(184, 255, 90, 0.4);
    animation: Loader-core-ring-two 3.2s linear infinite reverse;
}

.Loader-core-ring--3 {
    inset: 14px;
    border: 1px solid rgba(139, 92, 246, 0.42);
    animation: Loader-core-ring-three 1.6s ease-in-out infinite alternate;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 36% 29%,
            #ffffff 0%,
            #eaffff 7%,
            #4ffcff 20%,
            #38bdf8 35%,
            #8b5cf6 54%,
            #6d28d9 70%,
            #172554 88%,
            #06101f 100%
        );
    border: 1px solid rgba(248, 255, 255, 0.45);
    box-shadow:
        0 0 7px #ffffff,
        0 0 15px #4ffcff,
        0 0 28px rgba(56, 189, 248, 0.8),
        0 0 44px rgba(139, 92, 246, 0.68),
        0 0 62px rgba(184, 255, 90, 0.25),
        inset 0 0 14px rgba(255, 255, 255, 0.35);
    animation:
        Loader-core-breathe 0.85s ease-in-out infinite alternate,
        Loader-core-phase 3s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(79, 252, 255, 0.45);
    box-shadow:
        inset 0 0 10px rgba(184, 255, 90, 0.22);
    animation: Loader-core-inner 1.1s ease-in-out infinite alternate;
}

.Loader-core-glow {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(79, 252, 255, 0.22),
            rgba(56, 189, 248, 0.14) 30%,
            rgba(139, 92, 246, 0.1) 52%,
            rgba(184, 255, 90, 0.05) 65%,
            transparent 74%
        );
    animation: Loader-core-glow 1.3s ease-in-out infinite alternate;
}

.Loader-nucleus {
    position: relative;
    z-index: 20;
    width: 34px;
    height: 34px;
    animation:
        Loader-nucleus-spin 4s linear infinite,
        Loader-nucleus-breathe 1s ease-in-out infinite alternate;
}

.Loader-nucleon {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    box-shadow:
        0 0 4px rgba(255, 255, 255, 0.9),
        0 0 9px currentColor;
}

.Loader-nucleon--1 {
    left: 2px;
    top: 5px;
    color: #4ffcff;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #4ffcff 35%,
            #1687ff
        );
}

.Loader-nucleon--2 {
    right: 2px;
    top: 5px;
    color: #b8ff5a;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #b8ff5a 35%,
            #4ade80
        );
}

.Loader-nucleon--3 {
    left: 10px;
    top: 0;
    color: #8b5cf6;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #8b5cf6 35%,
            #6d28d9
        );
}

.Loader-nucleon--4 {
    left: 5px;
    bottom: 2px;
    color: #38bdf8;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #38bdf8 35%,
            #2563eb
        );
}

.Loader-nucleon--5 {
    right: 5px;
    bottom: 2px;
    color: #4ffcff;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff,
            #4ffcff 35%,
            #0891b2
        );
}

.Loader-nucleon--6 {
    left: 10px;
    top: 11px;
    color: #f8ffff;
    background:
        radial-gradient(
            circle,
            #ffffff,
            #dffcff 45%,
            #8b5cf6
        );
}

@keyframes Loader-science-atmosphere {
    from {
        opacity: 0.5;
        transform: scale(0.93);
    }

    to {
        opacity: 1;
        transform: scale(1.09);
    }
}

@keyframes Loader-science-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-lab-aura {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-grid-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-grid-pulse {
    0%,
    100% {
        opacity: 0.35;
    }

    50% {
        opacity: 0.8;
    }
}

@keyframes Loader-field-one {
    0%,
    100% {
        opacity: 0.35;
        transform:
            translate(-50%, -50%)
            scale(0.96);
    }

    50% {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            scale(1.05);
    }
}

@keyframes Loader-field-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-field-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-spectrum-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(15deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(375deg);
    }
}

@keyframes Loader-spectrum-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(70deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-290deg);
    }
}

@keyframes Loader-spectrum-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(125deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(485deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(60deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-300deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(120deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(480deg);
    }
}

@keyframes Loader-orbit-four {
    from {
        transform:
            translate(-50%, -50%)
            rotate(180deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-180deg);
    }
}

@keyframes Loader-wave-one {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-wave-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-wave-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-wave-four {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-data-one {
    0%,
    100% {
        transform:
            translate(-82px, -56px)
            rotate(-22deg)
            scaleX(0.8);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(-90px, -64px)
            rotate(-5deg)
            scaleX(1.2);
        opacity: 1;
    }
}

@keyframes Loader-data-two {
    0%,
    100% {
        transform:
            translate(-24px, -94px)
            rotate(18deg)
            scaleX(0.8);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-17px, -103px)
            rotate(35deg)
            scaleX(1.18);
        opacity: 1;
    }
}

@keyframes Loader-data-three {
    0%,
    100% {
        transform:
            translate(55px, -77px)
            rotate(62deg)
            scaleX(0.82);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(64px, -83px)
            rotate(79deg)
            scaleX(1.16);
        opacity: 1;
    }
}

@keyframes Loader-data-four {
    0%,
    100% {
        transform:
            translate(88px, -11px)
            rotate(105deg)
            scaleX(0.8);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(98px, -4px)
            rotate(123deg)
            scaleX(1.2);
        opacity: 1;
    }
}

@keyframes Loader-data-five {
    0%,
    100% {
        transform:
            translate(63px, 62px)
            rotate(151deg)
            scaleX(0.82);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(69px, 71px)
            rotate(169deg)
            scaleX(1.16);
        opacity: 1;
    }
}

@keyframes Loader-data-six {
    0%,
    100% {
        transform:
            translate(-5px, 87px)
            rotate(193deg)
            scaleX(0.8);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-12px, 97px)
            rotate(211deg)
            scaleX(1.18);
        opacity: 1;
    }
}

@keyframes Loader-data-seven {
    0%,
    100% {
        transform:
            translate(-70px, 54px)
            rotate(240deg)
            scaleX(0.82);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(-79px, 61px)
            rotate(258deg)
            scaleX(1.16);
        opacity: 1;
    }
}

@keyframes Loader-data-eight {
    0%,
    100% {
        transform:
            translate(-91px, -10px)
            rotate(287deg)
            scaleX(0.8);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-101px, -16px)
            rotate(305deg)
            scaleX(1.2);
        opacity: 1;
    }
}

@keyframes Loader-particle-one {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(111px, -47px) scale(1.2);
    }
}

@keyframes Loader-particle-two {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-107px, -57px) scale(0.8);
    }
}

@keyframes Loader-particle-three {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(119px, 12px) scale(1);
    }
}

@keyframes Loader-particle-four {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-118px, 27px) scale(0.9);
    }
}

@keyframes Loader-particle-five {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(67px, 104px) scale(1.15);
    }
}

@keyframes Loader-particle-six {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-66px, 107px) scale(0.85);
    }
}

@keyframes Loader-particle-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(30px, -118px) scale(1.1);
    }
}

@keyframes Loader-particle-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-39px, -116px) scale(0.9);
    }
}

@keyframes Loader-particle-nine {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(99px, 78px) scale(1.15);
    }
}

@keyframes Loader-particle-ten {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-97px, 82px) scale(0.85);
    }
}

@keyframes Loader-particle-eleven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(81px, -98px) scale(1.05);
    }
}

@keyframes Loader-particle-twelve {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    23% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-84px, -95px) scale(0.9);
    }
}

@keyframes Loader-particle-thirteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(121px, 43px) scale(1.1);
    }
}

@keyframes Loader-particle-fourteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-120px, 49px) scale(0.85);
    }
}

@keyframes Loader-particle-fifteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(12px, 124px) scale(1.05);
    }
}

@keyframes Loader-particle-sixteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-9px, -127px) scale(0.9);
    }
}

@keyframes Loader-quark-one {
    0%,
    100% {
        transform:
            translate(-75px, -68px)
            rotate(0deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(-84px, -76px)
            rotate(90deg)
            scale(1.15);
    }
}

@keyframes Loader-quark-two {
    0%,
    100% {
        transform:
            translate(46px, -89px)
            rotate(60deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(55px, -96px)
            rotate(150deg)
            scale(1.1);
    }
}

@keyframes Loader-quark-three {
    0%,
    100% {
        transform:
            translate(92px, -6px)
            rotate(120deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(102px, 1px)
            rotate(210deg)
            scale(1.15);
    }
}

@keyframes Loader-quark-four {
    0%,
    100% {
        transform:
            translate(57px, 73px)
            rotate(180deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(64px, 82px)
            rotate(270deg)
            scale(1.1);
    }
}

@keyframes Loader-quark-five {
    0%,
    100% {
        transform:
            translate(-43px, 86px)
            rotate(240deg)
            scale(0.8);
    }

    50% {
        transform:
            translate(-51px, 95px)
            rotate(330deg)
            scale(1.15);
    }
}

@keyframes Loader-quark-six {
    0%,
    100% {
        transform:
            translate(-94px, 16px)
            rotate(300deg)
            scale(0.85);
    }

    50% {
        transform:
            translate(-104px, 10px)
            rotate(390deg)
            scale(1.1);
    }
}

@keyframes Loader-quantum-pulse {
    0% {
        opacity: 0.85;
        transform:
            translate(-50%, -50%)
            scale(0.5);
    }

    60% {
        opacity: 0.25;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(3);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.94);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.06);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-ring-three {
    from {
        opacity: 0.35;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.9);
    }

    to {
        transform: scale(1.1);
    }
}

@keyframes Loader-core-phase {
    0%,
    100% {
        filter:
            hue-rotate(0deg)
            brightness(1);
    }

    33% {
        filter:
            hue-rotate(18deg)
            brightness(1.15);
    }

    66% {
        filter:
            hue-rotate(-20deg)
            brightness(1.08);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.35;
        transform: scale(0.86);
    }

    to {
        opacity: 1;
        transform: scale(1.3);
    }
}

@keyframes Loader-nucleus-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-nucleus-breathe {
    from {
        scale: 0.9;
    }

    to {
        scale: 1.1;
    }
}`,
  },
  {
    id: 3124,
    name: "Harmonic Resonance Sovereign",
    preview: (
      <div className="ld-3124">
        <div className="ld-3124-aura" />
        <div className="ld-3124-frequency-haze" />

        <div className="ld-3124-field ld-3124-field--1" />
        <div className="ld-3124-field ld-3124-field--2" />
        <div className="ld-3124-field ld-3124-field--3" />

        <div className="ld-3124-wave-ring ld-3124-wave-ring--1" />
        <div className="ld-3124-wave-ring ld-3124-wave-ring--2" />
        <div className="ld-3124-wave-ring ld-3124-wave-ring--3" />
        <div className="ld-3124-wave-ring ld-3124-wave-ring--4" />
        <div className="ld-3124-wave-ring ld-3124-wave-ring--5" />

        <div className="ld-3124-orbit ld-3124-orbit--1">
          <span />
        </div>

        <div className="ld-3124-orbit ld-3124-orbit--2">
          <span />
        </div>

        <div className="ld-3124-orbit ld-3124-orbit--3">
          <span />
        </div>

        <span className="ld-3124-bar ld-3124-bar--1" />
        <span className="ld-3124-bar ld-3124-bar--2" />
        <span className="ld-3124-bar ld-3124-bar--3" />
        <span className="ld-3124-bar ld-3124-bar--4" />
        <span className="ld-3124-bar ld-3124-bar--5" />
        <span className="ld-3124-bar ld-3124-bar--6" />
        <span className="ld-3124-bar ld-3124-bar--7" />
        <span className="ld-3124-bar ld-3124-bar--8" />
        <span className="ld-3124-bar ld-3124-bar--9" />
        <span className="ld-3124-bar ld-3124-bar--10" />
        <span className="ld-3124-bar ld-3124-bar--11" />
        <span className="ld-3124-bar ld-3124-bar--12" />

        <span className="ld-3124-shard ld-3124-shard--1" />
        <span className="ld-3124-shard ld-3124-shard--2" />
        <span className="ld-3124-shard ld-3124-shard--3" />
        <span className="ld-3124-shard ld-3124-shard--4" />
        <span className="ld-3124-shard ld-3124-shard--5" />
        <span className="ld-3124-shard ld-3124-shard--6" />
        <span className="ld-3124-shard ld-3124-shard--7" />
        <span className="ld-3124-shard ld-3124-shard--8" />

        <span className="ld-3124-particle ld-3124-particle--1" />
        <span className="ld-3124-particle ld-3124-particle--2" />
        <span className="ld-3124-particle ld-3124-particle--3" />
        <span className="ld-3124-particle ld-3124-particle--4" />
        <span className="ld-3124-particle ld-3124-particle--5" />
        <span className="ld-3124-particle ld-3124-particle--6" />
        <span className="ld-3124-particle ld-3124-particle--7" />
        <span className="ld-3124-particle ld-3124-particle--8" />
        <span className="ld-3124-particle ld-3124-particle--9" />
        <span className="ld-3124-particle ld-3124-particle--10" />
        <span className="ld-3124-particle ld-3124-particle--11" />
        <span className="ld-3124-particle ld-3124-particle--12" />
        <span className="ld-3124-particle ld-3124-particle--13" />
        <span className="ld-3124-particle ld-3124-particle--14" />
        <span className="ld-3124-particle ld-3124-particle--15" />
        <span className="ld-3124-particle ld-3124-particle--16" />

        <div className="ld-3124-pulse ld-3124-pulse--1" />
        <div className="ld-3124-pulse ld-3124-pulse--2" />
        <div className="ld-3124-pulse ld-3124-pulse--3" />
        <div className="ld-3124-pulse ld-3124-pulse--4" />

        <div className="ld-3124-core-shell">
          <div className="ld-3124-core-ring ld-3124-core-ring--1" />
          <div className="ld-3124-core-ring ld-3124-core-ring--2" />
          <div className="ld-3124-core-ring ld-3124-core-ring--3" />

          <div className="ld-3124-core">
            <div className="ld-3124-core-glow" />

            <div className="ld-3124-symbol">
              <span className="ld-3124-symbol-left" />
              <span className="ld-3124-symbol-right" />
              <span className="ld-3124-symbol-bridge" />
              <span className="ld-3124-symbol-wave" />
            </div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura"></div>
    <div class="Loader-frequency-haze"></div>

    <div class="Loader-field Loader-field--1"></div>
    <div class="Loader-field Loader-field--2"></div>
    <div class="Loader-field Loader-field--3"></div>

    <div class="Loader-wave-ring Loader-wave-ring--1"></div>
    <div class="Loader-wave-ring Loader-wave-ring--2"></div>
    <div class="Loader-wave-ring Loader-wave-ring--3"></div>
    <div class="Loader-wave-ring Loader-wave-ring--4"></div>
    <div class="Loader-wave-ring Loader-wave-ring--5"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-bar Loader-bar--1"></span>
    <span class="Loader-bar Loader-bar--2"></span>
    <span class="Loader-bar Loader-bar--3"></span>
    <span class="Loader-bar Loader-bar--4"></span>
    <span class="Loader-bar Loader-bar--5"></span>
    <span class="Loader-bar Loader-bar--6"></span>
    <span class="Loader-bar Loader-bar--7"></span>
    <span class="Loader-bar Loader-bar--8"></span>
    <span class="Loader-bar Loader-bar--9"></span>
    <span class="Loader-bar Loader-bar--10"></span>
    <span class="Loader-bar Loader-bar--11"></span>
    <span class="Loader-bar Loader-bar--12"></span>

    <span class="Loader-shard Loader-shard--1"></span>
    <span class="Loader-shard Loader-shard--2"></span>
    <span class="Loader-shard Loader-shard--3"></span>
    <span class="Loader-shard Loader-shard--4"></span>
    <span class="Loader-shard Loader-shard--5"></span>
    <span class="Loader-shard Loader-shard--6"></span>
    <span class="Loader-shard Loader-shard--7"></span>
    <span class="Loader-shard Loader-shard--8"></span>

    <span class="Loader-particle Loader-particle--1"></span>
    <span class="Loader-particle Loader-particle--2"></span>
    <span class="Loader-particle Loader-particle--3"></span>
    <span class="Loader-particle Loader-particle--4"></span>
    <span class="Loader-particle Loader-particle--5"></span>
    <span class="Loader-particle Loader-particle--6"></span>
    <span class="Loader-particle Loader-particle--7"></span>
    <span class="Loader-particle Loader-particle--8"></span>
    <span class="Loader-particle Loader-particle--9"></span>
    <span class="Loader-particle Loader-particle--10"></span>
    <span class="Loader-particle Loader-particle--11"></span>
    <span class="Loader-particle Loader-particle--12"></span>
    <span class="Loader-particle Loader-particle--13"></span>
    <span class="Loader-particle Loader-particle--14"></span>
    <span class="Loader-particle Loader-particle--15"></span>
    <span class="Loader-particle Loader-particle--16"></span>

    <div class="Loader-pulse Loader-pulse--1"></div>
    <div class="Loader-pulse Loader-pulse--2"></div>
    <div class="Loader-pulse Loader-pulse--3"></div>
    <div class="Loader-pulse Loader-pulse--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>
        <div class="Loader-core-ring Loader-core-ring--3"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-symbol">
                <span class="Loader-symbol-left"></span>
                <span class="Loader-symbol-right"></span>
                <span class="Loader-symbol-bridge"></span>
                <span class="Loader-symbol-wave"></span>
            </div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --sound-white: #fff7fd;
    --sound-rose: #ff8ad8;
    --sound-magenta: #ff3da6;
    --sound-violet: #a855f7;
    --sound-amber: #ffcf5a;
    --sound-orange: #ff8b3d;
    --sound-cyan: #4ffcff;
    --sound-dark: #21071f;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 61, 166, 0.14),
            rgba(168, 85, 247, 0.11) 30%,
            rgba(255, 207, 90, 0.07) 48%,
            rgba(79, 252, 255, 0.04) 62%,
            transparent 76%
        );
    filter: blur(16px);
    animation: Loader-aura-breathe 2.2s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 10deg,
            rgba(255, 138, 216, 0.11) 10deg 12deg,
            transparent 12deg 24deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 79%,
            #000 80% 82%,
            transparent 83%
        );
    animation: Loader-frequency-dial 20s linear infinite;
}

.Loader-aura {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 61, 166, 0.15),
            transparent 22%,
            rgba(255, 207, 90, 0.11),
            transparent 45%,
            rgba(79, 252, 255, 0.1),
            transparent 70%,
            rgba(168, 85, 247, 0.14),
            transparent
        );
    filter: blur(5px);
    animation: Loader-aura-spin 9s linear infinite;
}

.Loader-frequency-haze {
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    background:
        repeating-radial-gradient(
            circle,
            transparent 0 7px,
            rgba(255, 138, 216, 0.05) 8px 9px,
            transparent 10px 17px
        );
    animation:
        Loader-haze-scale 3s ease-in-out infinite alternate,
        Loader-haze-spin 15s linear infinite;
}

.Loader-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-field--1 {
    width: 178px;
    height: 178px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 61, 166, 0.19);
    box-shadow:
        0 0 12px rgba(255, 61, 166, 0.13),
        inset 0 0 18px rgba(168, 85, 247, 0.07);
    animation: Loader-field-one 3.1s ease-in-out infinite;
}

.Loader-field--2 {
    width: 148px;
    height: 148px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(255, 207, 90, 0.24);
    animation: Loader-field-two 8s linear infinite reverse;
}

.Loader-field--3 {
    width: 114px;
    height: 114px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 34deg,
            rgba(255, 61, 166, 0.2) 34deg 40deg,
            transparent 40deg 108deg,
            rgba(255, 207, 90, 0.18) 108deg 114deg,
            transparent 114deg 190deg,
            rgba(79, 252, 255, 0.18) 190deg 196deg,
            transparent 196deg 276deg,
            rgba(168, 85, 247, 0.2) 276deg 282deg,
            transparent 282deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    animation: Loader-field-three 5.2s linear infinite;
}

.Loader-wave-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.Loader-wave-ring--1 {
    width: 164px;
    height: 164px;
    border:
        2px solid rgba(255, 61, 166, 0.3);
    animation: Loader-wave-one 4.5s linear infinite;
}

.Loader-wave-ring--2 {
    width: 144px;
    height: 144px;
    border:
        1px dashed rgba(255, 207, 90, 0.32);
    animation: Loader-wave-two 5.7s linear infinite reverse;
}

.Loader-wave-ring--3 {
    width: 124px;
    height: 124px;
    border:
        1px solid rgba(79, 252, 255, 0.28);
    animation: Loader-wave-three 3.8s linear infinite;
}

.Loader-wave-ring--4 {
    width: 104px;
    height: 104px;
    border:
        1px dashed rgba(168, 85, 247, 0.32);
    animation: Loader-wave-four 4.9s linear infinite reverse;
}

.Loader-wave-ring--5 {
    width: 84px;
    height: 84px;
    border:
        1px solid rgba(255, 138, 216, 0.34);
    animation: Loader-wave-five 3.1s linear infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-orbit span {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffffff,
            #ff8ad8 35%,
            #ff3da6 65%,
            #a855f7
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 11px #ff3da6,
        0 0 20px rgba(168, 85, 247, 0.75);
}

.Loader-orbit--1 {
    width: 158px;
    height: 54px;
    animation: Loader-orbit-one 4.4s linear infinite;
}

.Loader-orbit--2 {
    width: 116px;
    height: 154px;
    animation: Loader-orbit-two 5.6s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 140px;
    height: 92px;
    animation: Loader-orbit-three 6.4s linear infinite;
}

.Loader-bar {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 24px;
    margin-left: -2.5px;
    margin-top: -12px;
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #fff7fd,
            #ff8ad8 30%,
            #ff3da6 58%,
            #a855f7
        );
    box-shadow:
        0 0 5px rgba(255, 61, 166, 0.75),
        0 0 10px rgba(168, 85, 247, 0.5);
    transform-origin: 50% 50%;
}

.Loader-bar--1 {
    animation: Loader-bar-one 1.6s ease-in-out infinite;
}

.Loader-bar--2 {
    animation: Loader-bar-two 1.9s ease-in-out infinite 0.1s;
}

.Loader-bar--3 {
    animation: Loader-bar-three 1.5s ease-in-out infinite 0.2s;
}

.Loader-bar--4 {
    animation: Loader-bar-four 2s ease-in-out infinite 0.3s;
}

.Loader-bar--5 {
    animation: Loader-bar-five 1.7s ease-in-out infinite 0.4s;
}

.Loader-bar--6 {
    animation: Loader-bar-six 2.1s ease-in-out infinite 0.5s;
}

.Loader-bar--7 {
    animation: Loader-bar-seven 1.55s ease-in-out infinite 0.6s;
}

.Loader-bar--8 {
    animation: Loader-bar-eight 1.85s ease-in-out infinite 0.7s;
}

.Loader-bar--9 {
    animation: Loader-bar-nine 1.65s ease-in-out infinite 0.8s;
}

.Loader-bar--10 {
    animation: Loader-bar-ten 2.05s ease-in-out infinite 0.9s;
}

.Loader-bar--11 {
    animation: Loader-bar-eleven 1.75s ease-in-out infinite 1s;
}

.Loader-bar--12 {
    animation: Loader-bar-twelve 1.95s ease-in-out infinite 1.1s;
}

.Loader-shard {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 22px;
    clip-path:
        polygon(
            50% 0,
            100% 30%,
            72% 100%,
            25% 86%,
            0 30%
        );
    background:
        linear-gradient(
            135deg,
            #ffffff,
            #ffcf5a 22%,
            #ff3da6 50%,
            #a855f7 76%,
            #4ffcff
        );
    filter:
        drop-shadow(0 0 4px rgba(255, 207, 90, 0.5))
        drop-shadow(0 0 8px rgba(255, 61, 166, 0.45));
}

.Loader-shard--1 {
    animation: Loader-shard-one 3s ease-in-out infinite;
}

.Loader-shard--2 {
    animation: Loader-shard-two 3.4s ease-in-out infinite 0.2s;
}

.Loader-shard--3 {
    animation: Loader-shard-three 2.9s ease-in-out infinite 0.4s;
}

.Loader-shard--4 {
    animation: Loader-shard-four 3.6s ease-in-out infinite 0.6s;
}

.Loader-shard--5 {
    animation: Loader-shard-five 3.1s ease-in-out infinite 0.8s;
}

.Loader-shard--6 {
    animation: Loader-shard-six 3.5s ease-in-out infinite 1s;
}

.Loader-shard--7 {
    animation: Loader-shard-seven 3.2s ease-in-out infinite 1.2s;
}

.Loader-shard--8 {
    animation: Loader-shard-eight 3.7s ease-in-out infinite 1.4s;
}

.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #ff8ad8;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #ff3da6,
        0 0 13px rgba(168, 85, 247, 0.7);
    opacity: 0;
}

.Loader-particle--1 {
    animation: Loader-particle-one 2.3s ease-out infinite;
}

.Loader-particle--2 {
    animation: Loader-particle-two 2.6s ease-out infinite 0.1s;
}

.Loader-particle--3 {
    background: #ffcf5a;
    animation: Loader-particle-three 2.2s ease-out infinite 0.2s;
}

.Loader-particle--4 {
    animation: Loader-particle-four 2.8s ease-out infinite 0.3s;
}

.Loader-particle--5 {
    animation: Loader-particle-five 2.4s ease-out infinite 0.4s;
}

.Loader-particle--6 {
    background: #4ffcff;
    animation: Loader-particle-six 2.9s ease-out infinite 0.5s;
}

.Loader-particle--7 {
    animation: Loader-particle-seven 2.35s ease-out infinite 0.6s;
}

.Loader-particle--8 {
    animation: Loader-particle-eight 3s ease-out infinite 0.7s;
}

.Loader-particle--9 {
    background: #ffcf5a;
    animation: Loader-particle-nine 2.45s ease-out infinite 0.8s;
}

.Loader-particle--10 {
    animation: Loader-particle-ten 2.75s ease-out infinite 0.9s;
}

.Loader-particle--11 {
    background: #4ffcff;
    animation: Loader-particle-eleven 2.3s ease-out infinite 1s;
}

.Loader-particle--12 {
    animation: Loader-particle-twelve 2.85s ease-out infinite 1.1s;
}

.Loader-particle--13 {
    animation: Loader-particle-thirteen 2.5s ease-out infinite 1.2s;
}

.Loader-particle--14 {
    background: #ffcf5a;
    animation: Loader-particle-fourteen 2.95s ease-out infinite 1.3s;
}

.Loader-particle--15 {
    animation: Loader-particle-fifteen 2.25s ease-out infinite 1.4s;
}

.Loader-particle--16 {
    background: #4ffcff;
    animation: Loader-particle-sixteen 3.05s ease-out infinite 1.5s;
}

.Loader-pulse {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(255, 61, 166, 0.6);
    opacity: 0;
}

.Loader-pulse--1 {
    animation: Loader-pulse 2.1s ease-out infinite;
}

.Loader-pulse--2 {
    border-color: rgba(255, 207, 90, 0.55);
    animation: Loader-pulse 2.1s ease-out infinite 0.52s;
}

.Loader-pulse--3 {
    border-color: rgba(79, 252, 255, 0.48);
    animation: Loader-pulse 2.1s ease-out infinite 1.04s;
}

.Loader-pulse--4 {
    border-color: rgba(168, 85, 247, 0.55);
    animation: Loader-pulse 2.1s ease-out infinite 1.56s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 94px;
    height: 94px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 61, 166, 0.09),
            rgba(168, 85, 247, 0.07) 36%,
            rgba(255, 207, 90, 0.04) 56%,
            transparent 74%
        );
    animation: Loader-shell-breathe 1.6s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 26deg,
            #ff3da6 26deg 32deg,
            transparent 32deg 86deg,
            #ffcf5a 86deg 92deg,
            transparent 92deg 150deg,
            #4ffcff 150deg 156deg,
            transparent 156deg 218deg,
            #a855f7 218deg 224deg,
            transparent 224deg 292deg,
            #fff7fd 292deg 298deg,
            transparent 298deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(255, 61, 166, 0.7));
    animation: Loader-core-ring-one 2.3s linear infinite;
}

.Loader-core-ring--2 {
    inset: 8px;
    border: 1px dashed rgba(255, 207, 90, 0.42);
    animation: Loader-core-ring-two 3.1s linear infinite reverse;
}

.Loader-core-ring--3 {
    inset: 14px;
    border: 1px solid rgba(79, 252, 255, 0.38);
    animation: Loader-core-ring-three 1.5s ease-in-out infinite alternate;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 35% 28%,
            #ffffff 0%,
            #ffe6f6 8%,
            #ff8ad8 19%,
            #ff3da6 35%,
            #a855f7 53%,
            #6d28d9 70%,
            #33104e 87%,
            #21071f 100%
        );
    border: 1px solid rgba(255, 247, 253, 0.45);
    box-shadow:
        0 0 7px #ffffff,
        0 0 15px #ff8ad8,
        0 0 28px rgba(255, 61, 166, 0.82),
        0 0 44px rgba(168, 85, 247, 0.68),
        0 0 62px rgba(255, 207, 90, 0.24),
        inset 0 0 14px rgba(255, 255, 255, 0.35);
    animation:
        Loader-core-breathe 0.8s ease-in-out infinite alternate,
        Loader-core-phase 2.8s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(255, 138, 216, 0.48);
    box-shadow:
        inset 0 0 10px rgba(79, 252, 255, 0.2);
    animation: Loader-core-inner 1s ease-in-out infinite alternate;
}

.Loader-core-glow {
    position: absolute;
    inset: -21px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 61, 166, 0.22),
            rgba(168, 85, 247, 0.15) 31%,
            rgba(255, 207, 90, 0.08) 50%,
            rgba(79, 252, 255, 0.05) 64%,
            transparent 74%
        );
    animation: Loader-core-glow 1.2s ease-in-out infinite alternate;
}

.Loader-symbol {
    position: relative;
    z-index: 20;
    width: 34px;
    height: 34px;
    filter:
        drop-shadow(0 0 3px #ffffff)
        drop-shadow(0 0 8px #ff3da6)
        drop-shadow(0 0 12px rgba(255, 207, 90, 0.55));
    animation: Loader-symbol-float 1.4s ease-in-out infinite alternate;
}

.Loader-symbol-left,
.Loader-symbol-right {
    position: absolute;
    top: 3px;
    width: 5px;
    height: 23px;
    border-radius: 999px;
    background:
        linear-gradient(
            180deg,
            #ffffff,
            #ffcf5a 25%,
            #ff3da6 68%,
            #a855f7
        );
}

.Loader-symbol-left {
    left: 7px;
}

.Loader-symbol-right {
    right: 7px;
}

.Loader-symbol-left::before,
.Loader-symbol-right::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 11px;
    height: 5px;
    border-bottom: 3px solid #ff8ad8;
    border-radius: 50%;
}

.Loader-symbol-left::before {
    left: -6px;
}

.Loader-symbol-right::before {
    right: -6px;
}

.Loader-symbol-bridge {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 15px;
    height: 3px;
    transform: translateX(-50%);
    border-radius: 999px;
    background:
        linear-gradient(
            90deg,
            #4ffcff,
            #ffffff,
            #ffcf5a
        );
}

.Loader-symbol-wave {
    position: absolute;
    left: 2px;
    bottom: 1px;
    width: 30px;
    height: 11px;
    border-top: 3px solid #4ffcff;
    border-radius: 50%;
    animation: Loader-symbol-wave 0.9s ease-in-out infinite alternate;
}

@keyframes Loader-aura-breathe {
    from {
        opacity: 0.45;
        transform: scale(0.93);
    }

    to {
        opacity: 1;
        transform: scale(1.09);
    }
}

@keyframes Loader-frequency-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-aura-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-haze-scale {
    from {
        transform: scale(0.92);
        opacity: 0.35;
    }

    to {
        transform: scale(1.08);
        opacity: 0.8;
    }
}

@keyframes Loader-haze-spin {
    to {
        rotate: 360deg;
    }
}

@keyframes Loader-field-one {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.96);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.05);
        opacity: 1;
    }
}

@keyframes Loader-field-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-field-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-wave-one {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.97);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.04);
        opacity: 0.75;
    }
}

@keyframes Loader-wave-two {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(0deg)
            scale(0.96);
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(-180deg)
            scale(1.06);
    }

    100% {
        transform:
            translate(-50%, -50%)
            rotate(-360deg)
            scale(0.96);
    }
}

@keyframes Loader-wave-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-wave-four {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-wave-five {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.9);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.12);
        opacity: 1;
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(62deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-298deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(121deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(481deg);
    }
}

@keyframes Loader-bar-one {
    0%,
    100% {
        transform:
            translate(-50px, -84px)
            rotate(-20deg)
            scaleY(0.55);
    }

    50% {
        transform:
            translate(-50px, -84px)
            rotate(-20deg)
            scaleY(1.3);
    }
}

@keyframes Loader-bar-two {
    0%,
    100% {
        transform:
            translate(-3px, -100px)
            rotate(10deg)
            scaleY(0.7);
    }

    50% {
        transform:
            translate(-3px, -100px)
            rotate(10deg)
            scaleY(1.55);
    }
}

@keyframes Loader-bar-three {
    0%,
    100% {
        transform:
            translate(46px, -86px)
            rotate(40deg)
            scaleY(0.6);
    }

    50% {
        transform:
            translate(46px, -86px)
            rotate(40deg)
            scaleY(1.4);
    }
}

@keyframes Loader-bar-four {
    0%,
    100% {
        transform:
            translate(79px, -50px)
            rotate(70deg)
            scaleY(0.65);
    }

    50% {
        transform:
            translate(79px, -50px)
            rotate(70deg)
            scaleY(1.5);
    }
}

@keyframes Loader-bar-five {
    0%,
    100% {
        transform:
            translate(94px, -3px)
            rotate(100deg)
            scaleY(0.55);
    }

    50% {
        transform:
            translate(94px, -3px)
            rotate(100deg)
            scaleY(1.35);
    }
}

@keyframes Loader-bar-six {
    0%,
    100% {
        transform:
            translate(79px, 48px)
            rotate(130deg)
            scaleY(0.7);
    }

    50% {
        transform:
            translate(79px, 48px)
            rotate(130deg)
            scaleY(1.55);
    }
}

@keyframes Loader-bar-seven {
    0%,
    100% {
        transform:
            translate(46px, 80px)
            rotate(160deg)
            scaleY(0.6);
    }

    50% {
        transform:
            translate(46px, 80px)
            rotate(160deg)
            scaleY(1.4);
    }
}

@keyframes Loader-bar-eight {
    0%,
    100% {
        transform:
            translate(-3px, 94px)
            rotate(190deg)
            scaleY(0.65);
    }

    50% {
        transform:
            translate(-3px, 94px)
            rotate(190deg)
            scaleY(1.5);
    }
}

@keyframes Loader-bar-nine {
    0%,
    100% {
        transform:
            translate(-51px, 80px)
            rotate(220deg)
            scaleY(0.55);
    }

    50% {
        transform:
            translate(-51px, 80px)
            rotate(220deg)
            scaleY(1.35);
    }
}

@keyframes Loader-bar-ten {
    0%,
    100% {
        transform:
            translate(-83px, 48px)
            rotate(250deg)
            scaleY(0.7);
    }

    50% {
        transform:
            translate(-83px, 48px)
            rotate(250deg)
            scaleY(1.55);
    }
}

@keyframes Loader-bar-eleven {
    0%,
    100% {
        transform:
            translate(-98px, -2px)
            rotate(280deg)
            scaleY(0.6);
    }

    50% {
        transform:
            translate(-98px, -2px)
            rotate(280deg)
            scaleY(1.4);
    }
}

@keyframes Loader-bar-twelve {
    0%,
    100% {
        transform:
            translate(-83px, -50px)
            rotate(310deg)
            scaleY(0.65);
    }

    50% {
        transform:
            translate(-83px, -50px)
            rotate(310deg)
            scaleY(1.5);
    }
}

@keyframes Loader-shard-one {
    0%,
    100% {
        transform:
            translate(-78px, -71px)
            rotate(-14deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-86px, -80px)
            rotate(12deg)
            scale(1.1);
    }
}

@keyframes Loader-shard-two {
    0%,
    100% {
        transform:
            translate(-5px, -102px)
            rotate(31deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(1px, -112px)
            rotate(57deg)
            scale(1.06);
    }
}

@keyframes Loader-shard-three {
    0%,
    100% {
        transform:
            translate(73px, -71px)
            rotate(76deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(82px, -77px)
            rotate(102deg)
            scale(1.1);
    }
}

@keyframes Loader-shard-four {
    0%,
    100% {
        transform:
            translate(99px, 3px)
            rotate(121deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(109px, 10px)
            rotate(147deg)
            scale(1.06);
    }
}

@keyframes Loader-shard-five {
    0%,
    100% {
        transform:
            translate(70px, 72px)
            rotate(166deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(77px, 81px)
            rotate(192deg)
            scale(1.1);
    }
}

@keyframes Loader-shard-six {
    0%,
    100% {
        transform:
            translate(-4px, 99px)
            rotate(211deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-11px, 109px)
            rotate(237deg)
            scale(1.06);
    }
}

@keyframes Loader-shard-seven {
    0%,
    100% {
        transform:
            translate(-75px, 69px)
            rotate(256deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-84px, 76px)
            rotate(282deg)
            scale(1.1);
    }
}

@keyframes Loader-shard-eight {
    0%,
    100% {
        transform:
            translate(-102px, -5px)
            rotate(301deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-112px, -12px)
            rotate(327deg)
            scale(1.06);
    }
}

@keyframes Loader-particle-one {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(112px, -48px) scale(1.1);
    }
}

@keyframes Loader-particle-two {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-109px, -58px) scale(0.85);
    }
}

@keyframes Loader-particle-three {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(120px, 12px) scale(1.05);
    }
}

@keyframes Loader-particle-four {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-119px, 28px) scale(0.9);
    }
}

@keyframes Loader-particle-five {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(68px, 105px) scale(1.15);
    }
}

@keyframes Loader-particle-six {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-68px, 108px) scale(0.85);
    }
}

@keyframes Loader-particle-seven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    22% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(30px, -120px) scale(1.1);
    }
}

@keyframes Loader-particle-eight {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-39px, -118px) scale(0.9);
    }
}

@keyframes Loader-particle-nine {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    24% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(100px, 79px) scale(1.15);
    }
}

@keyframes Loader-particle-ten {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-98px, 83px) scale(0.85);
    }
}

@keyframes Loader-particle-eleven {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    18% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(82px, -100px) scale(1.05);
    }
}

@keyframes Loader-particle-twelve {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    23% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-85px, -97px) scale(0.9);
    }
}

@keyframes Loader-particle-thirteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    21% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(122px, 44px) scale(1.1);
    }
}

@keyframes Loader-particle-fourteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.3);
    }

    19% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-121px, 50px) scale(0.85);
    }
}

@keyframes Loader-particle-fifteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.25);
    }

    25% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(12px, 126px) scale(1.05);
    }
}

@keyframes Loader-particle-sixteen {
    0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-10px, -129px) scale(0.9);
    }
}

@keyframes Loader-pulse {
    0% {
        opacity: 0.85;
        transform:
            translate(-50%, -50%)
            scale(0.48);
    }

    55% {
        opacity: 0.3;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(3.1);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.94);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.07);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-ring-three {
    from {
        opacity: 0.35;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.9);
    }

    to {
        transform: scale(1.1);
    }
}

@keyframes Loader-core-phase {
    0%,
    100% {
        filter:
            hue-rotate(0deg)
            brightness(1);
    }

    33% {
        filter:
            hue-rotate(15deg)
            brightness(1.15);
    }

    66% {
        filter:
            hue-rotate(-18deg)
            brightness(1.08);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.35;
        transform: scale(0.86);
    }

    to {
        opacity: 1;
        transform: scale(1.3);
    }
}

@keyframes Loader-symbol-float {
    from {
        transform:
            translateY(2px)
            scale(0.94);
    }

    to {
        transform:
            translateY(-3px)
            scale(1.06);
    }
}

@keyframes Loader-symbol-wave {
    from {
        transform: scaleX(0.72);
        opacity: 0.55;
    }

    to {
        transform: scaleX(1.18);
        opacity: 1;
    }
}`,
  },
  {
    id: 3125,
    name: "Oneiric Dreamweaver",
    preview: (
      <div className="ld-3125">
        <div className="ld-3125-dream-aura" />
        <div className="ld-3125-nebula" />
        <div className="ld-3125-haze" />

        <div className="ld-3125-portal ld-3125-portal--1" />
        <div className="ld-3125-portal ld-3125-portal--2" />
        <div className="ld-3125-portal ld-3125-portal--3" />

        <div className="ld-3125-ribbon ld-3125-ribbon--1" />
        <div className="ld-3125-ribbon ld-3125-ribbon--2" />
        <div className="ld-3125-ribbon ld-3125-ribbon--3" />
        <div className="ld-3125-ribbon ld-3125-ribbon--4" />

        <div className="ld-3125-orbit ld-3125-orbit--1">
          <span />
        </div>

        <div className="ld-3125-orbit ld-3125-orbit--2">
          <span />
        </div>

        <div className="ld-3125-orbit ld-3125-orbit--3">
          <span />
        </div>

        <span className="ld-3125-petal ld-3125-petal--1" />
        <span className="ld-3125-petal ld-3125-petal--2" />
        <span className="ld-3125-petal ld-3125-petal--3" />
        <span className="ld-3125-petal ld-3125-petal--4" />
        <span className="ld-3125-petal ld-3125-petal--5" />
        <span className="ld-3125-petal ld-3125-petal--6" />
        <span className="ld-3125-petal ld-3125-petal--7" />
        <span className="ld-3125-petal ld-3125-petal--8" />

        <span className="ld-3125-star ld-3125-star--1" />
        <span className="ld-3125-star ld-3125-star--2" />
        <span className="ld-3125-star ld-3125-star--3" />
        <span className="ld-3125-star ld-3125-star--4" />
        <span className="ld-3125-star ld-3125-star--5" />
        <span className="ld-3125-star ld-3125-star--6" />
        <span className="ld-3125-star ld-3125-star--7" />
        <span className="ld-3125-star ld-3125-star--8" />
        <span className="ld-3125-star ld-3125-star--9" />
        <span className="ld-3125-star ld-3125-star--10" />
        <span className="ld-3125-star ld-3125-star--11" />
        <span className="ld-3125-star ld-3125-star--12" />

        <span className="ld-3125-mote ld-3125-mote--1" />
        <span className="ld-3125-mote ld-3125-mote--2" />
        <span className="ld-3125-mote ld-3125-mote--3" />
        <span className="ld-3125-mote ld-3125-mote--4" />
        <span className="ld-3125-mote ld-3125-mote--5" />
        <span className="ld-3125-mote ld-3125-mote--6" />
        <span className="ld-3125-mote ld-3125-mote--7" />
        <span className="ld-3125-mote ld-3125-mote--8" />
        <span className="ld-3125-mote ld-3125-mote--9" />
        <span className="ld-3125-mote ld-3125-mote--10" />
        <span className="ld-3125-mote ld-3125-mote--11" />
        <span className="ld-3125-mote ld-3125-mote--12" />
        <span className="ld-3125-mote ld-3125-mote--13" />
        <span className="ld-3125-mote ld-3125-mote--14" />
        <span className="ld-3125-mote ld-3125-mote--15" />
        <span className="ld-3125-mote ld-3125-mote--16" />

        <div className="ld-3125-echo ld-3125-echo--1" />
        <div className="ld-3125-echo ld-3125-echo--2" />
        <div className="ld-3125-echo ld-3125-echo--3" />
        <div className="ld-3125-echo ld-3125-echo--4" />

        <div className="ld-3125-core-shell">
          <div className="ld-3125-core-halo ld-3125-core-halo--1" />
          <div className="ld-3125-core-halo ld-3125-core-halo--2" />

          <div className="ld-3125-core">
            <div className="ld-3125-core-light" />

            <div className="ld-3125-crescent">
              <div className="ld-3125-crescent-cut" />
            </div>

            <span className="ld-3125-core-star ld-3125-core-star--1" />
            <span className="ld-3125-core-star ld-3125-core-star--2" />
            <span className="ld-3125-core-star ld-3125-core-star--3" />
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-dream-aura"></div>
    <div class="Loader-nebula"></div>
    <div class="Loader-haze"></div>

    <div class="Loader-portal Loader-portal--1"></div>
    <div class="Loader-portal Loader-portal--2"></div>
    <div class="Loader-portal Loader-portal--3"></div>

    <div class="Loader-ribbon Loader-ribbon--1"></div>
    <div class="Loader-ribbon Loader-ribbon--2"></div>
    <div class="Loader-ribbon Loader-ribbon--3"></div>
    <div class="Loader-ribbon Loader-ribbon--4"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-petal Loader-petal--1"></span>
    <span class="Loader-petal Loader-petal--2"></span>
    <span class="Loader-petal Loader-petal--3"></span>
    <span class="Loader-petal Loader-petal--4"></span>
    <span class="Loader-petal Loader-petal--5"></span>
    <span class="Loader-petal Loader-petal--6"></span>
    <span class="Loader-petal Loader-petal--7"></span>
    <span class="Loader-petal Loader-petal--8"></span>

    <span class="Loader-star Loader-star--1"></span>
    <span class="Loader-star Loader-star--2"></span>
    <span class="Loader-star Loader-star--3"></span>
    <span class="Loader-star Loader-star--4"></span>
    <span class="Loader-star Loader-star--5"></span>
    <span class="Loader-star Loader-star--6"></span>
    <span class="Loader-star Loader-star--7"></span>
    <span class="Loader-star Loader-star--8"></span>
    <span class="Loader-star Loader-star--9"></span>
    <span class="Loader-star Loader-star--10"></span>
    <span class="Loader-star Loader-star--11"></span>
    <span class="Loader-star Loader-star--12"></span>

    <span class="Loader-mote Loader-mote--1"></span>
    <span class="Loader-mote Loader-mote--2"></span>
    <span class="Loader-mote Loader-mote--3"></span>
    <span class="Loader-mote Loader-mote--4"></span>
    <span class="Loader-mote Loader-mote--5"></span>
    <span class="Loader-mote Loader-mote--6"></span>
    <span class="Loader-mote Loader-mote--7"></span>
    <span class="Loader-mote Loader-mote--8"></span>
    <span class="Loader-mote Loader-mote--9"></span>
    <span class="Loader-mote Loader-mote--10"></span>
    <span class="Loader-mote Loader-mote--11"></span>
    <span class="Loader-mote Loader-mote--12"></span>
    <span class="Loader-mote Loader-mote--13"></span>
    <span class="Loader-mote Loader-mote--14"></span>
    <span class="Loader-mote Loader-mote--15"></span>
    <span class="Loader-mote Loader-mote--16"></span>

    <div class="Loader-echo Loader-echo--1"></div>
    <div class="Loader-echo Loader-echo--2"></div>
    <div class="Loader-echo Loader-echo--3"></div>
    <div class="Loader-echo Loader-echo--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-halo Loader-core-halo--1"></div>
        <div class="Loader-core-halo Loader-core-halo--2"></div>

        <div class="Loader-core">
            <div class="Loader-core-light"></div>

            <div class="Loader-crescent">
                <div class="Loader-crescent-cut"></div>
            </div>

            <span class="Loader-core-star Loader-core-star--1"></span>
            <span class="Loader-core-star Loader-core-star--2"></span>
            <span class="Loader-core-star Loader-core-star--3"></span>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --dream-white: #fffaff;
    --dream-lilac: #e8d8ff;
    --dream-pink: #ffb7ea;
    --dream-violet: #a98cff;
    --dream-purple: #7654e8;
    --dream-cyan: #8af6ff;
    --dream-blue: #639cff;
    --dream-deep: #251c66;
    --dream-night: #100b35;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -34px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 183, 234, 0.14) 0%,
            rgba(169, 140, 255, 0.12) 25%,
            rgba(138, 246, 255, 0.08) 45%,
            rgba(99, 156, 255, 0.05) 60%,
            transparent 76%
        );
    filter: blur(17px);
    animation: Loader-dream-breathe 3s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 14deg,
            rgba(232, 216, 255, 0.08) 14deg 15deg,
            transparent 15deg 30deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 80%,
            #000 81% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 80%,
            #000 81% 82%,
            transparent 83%
        );
    animation: Loader-dream-dial 32s linear infinite;
}

.Loader-dream-aura {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 183, 234, 0.13),
            transparent 20%,
            rgba(138, 246, 255, 0.12),
            transparent 42%,
            rgba(169, 140, 255, 0.13),
            transparent 68%,
            rgba(232, 216, 255, 0.12),
            transparent
        );
    filter: blur(6px);
    animation: Loader-dream-aura 12s linear infinite;
}

.Loader-nebula {
    position: absolute;
    inset: 18px;
    border-radius: 50%;
    background:
        radial-gradient(
            ellipse at 25% 35%,
            rgba(255, 183, 234, 0.1),
            transparent 34%
        ),
        radial-gradient(
            ellipse at 72% 30%,
            rgba(138, 246, 255, 0.1),
            transparent 32%
        ),
        radial-gradient(
            ellipse at 63% 73%,
            rgba(169, 140, 255, 0.11),
            transparent 36%
        ),
        radial-gradient(
            ellipse at 35% 68%,
            rgba(99, 156, 255, 0.08),
            transparent 34%
        );
    filter: blur(5px);
    animation:
        Loader-nebula-one 6s ease-in-out infinite alternate,
        Loader-nebula-two 20s linear infinite;
}

.Loader-haze {
    position: absolute;
    inset: 25px;
    border-radius: 50%;
    background:
        repeating-radial-gradient(
            ellipse at center,
            transparent 0 8px,
            rgba(232, 216, 255, 0.045) 9px 10px,
            transparent 11px 18px
        );
    animation:
        Loader-haze-breathe 4s ease-in-out infinite,
        Loader-haze-spin 17s linear infinite;
}

.Loader-portal {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-portal--1 {
    width: 172px;
    height: 172px;
    transform: translate(-50%, -50%);
    border:
        1px solid rgba(255, 183, 234, 0.18);
    box-shadow:
        0 0 12px rgba(255, 183, 234, 0.1),
        inset 0 0 18px rgba(169, 140, 255, 0.05);
    animation: Loader-portal-one 3.2s ease-in-out infinite;
}

.Loader-portal--2 {
    width: 142px;
    height: 142px;
    transform: translate(-50%, -50%);
    border:
        1px dashed rgba(138, 246, 255, 0.23);
    animation: Loader-portal-two 9s linear infinite reverse;
}

.Loader-portal--3 {
    width: 110px;
    height: 110px;
    transform: translate(-50%, -50%);
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 34deg,
            rgba(255, 183, 234, 0.2) 34deg 39deg,
            transparent 39deg 105deg,
            rgba(138, 246, 255, 0.18) 105deg 111deg,
            transparent 111deg 186deg,
            rgba(169, 140, 255, 0.2) 186deg 192deg,
            transparent 192deg 270deg,
            rgba(232, 216, 255, 0.16) 270deg 276deg,
            transparent 276deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 86%,
            #000 87%
        );
    animation: Loader-portal-three 5.4s linear infinite;
}

.Loader-ribbon {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 2px solid transparent;
}

.Loader-ribbon--1 {
    width: 158px;
    height: 66px;
    border-top-color: rgba(255, 183, 234, 0.52);
    border-bottom-color: rgba(255, 183, 234, 0.1);
    filter:
        drop-shadow(0 0 5px rgba(255, 183, 234, 0.45));
    animation: Loader-ribbon-one 5.2s linear infinite;
}

.Loader-ribbon--2 {
    width: 145px;
    height: 76px;
    border-right-color: rgba(138, 246, 255, 0.5);
    border-left-color: rgba(138, 246, 255, 0.08);
    filter:
        drop-shadow(0 0 5px rgba(138, 246, 255, 0.4));
    animation: Loader-ribbon-two 6.4s linear infinite reverse;
}

.Loader-ribbon--3 {
    width: 128px;
    height: 94px;
    border-top-color: rgba(169, 140, 255, 0.52);
    border-right-color: rgba(169, 140, 255, 0.1);
    filter:
        drop-shadow(0 0 5px rgba(169, 140, 255, 0.42));
    animation: Loader-ribbon-three 4.7s linear infinite;
}

.Loader-ribbon--4 {
    width: 106px;
    height: 128px;
    border-left-color: rgba(232, 216, 255, 0.42);
    border-bottom-color: rgba(232, 216, 255, 0.08);
    animation: Loader-ribbon-four 7s linear infinite reverse;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-orbit span {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 33% 28%,
            #ffffff,
            #e8d8ff 28%,
            #ffb7ea 50%,
            #a98cff 72%,
            #7654e8
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 11px #ffb7ea,
        0 0 19px rgba(169, 140, 255, 0.75);
}

.Loader-orbit--1 {
    width: 154px;
    height: 48px;
    animation: Loader-orbit-one 4.8s linear infinite;
}

.Loader-orbit--2 {
    width: 108px;
    height: 150px;
    animation: Loader-orbit-two 6s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 134px;
    height: 88px;
    animation: Loader-orbit-three 6.8s linear infinite;
}

.Loader-petal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 24px;
    border-radius:
        80% 12% 80% 12% /
        72% 18% 72% 18%;
    background:
        linear-gradient(
            145deg,
            #fffaff 0%,
            #e8d8ff 20%,
            #ffb7ea 43%,
            #a98cff 67%,
            #7654e8 100%
        );
    box-shadow:
        0 0 5px rgba(232, 216, 255, 0.5);
    filter:
        drop-shadow(0 0 6px rgba(255, 183, 234, 0.35));
}

.Loader-petal::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 3px;
    height: 13px;
    border-radius: 50%;
    background:
        linear-gradient(
            rgba(255, 255, 255, 0.75),
            transparent
        );
}

.Loader-petal--1 {
    animation: Loader-petal-one 3.4s ease-in-out infinite;
}

.Loader-petal--2 {
    animation: Loader-petal-two 3.8s ease-in-out infinite 0.2s;
}

.Loader-petal--3 {
    animation: Loader-petal-three 3.2s ease-in-out infinite 0.4s;
}

.Loader-petal--4 {
    animation: Loader-petal-four 4s ease-in-out infinite 0.6s;
}

.Loader-petal--5 {
    animation: Loader-petal-five 3.5s ease-in-out infinite 0.8s;
}

.Loader-petal--6 {
    animation: Loader-petal-six 3.9s ease-in-out infinite 1s;
}

.Loader-petal--7 {
    animation: Loader-petal-seven 3.3s ease-in-out infinite 1.2s;
}

.Loader-petal--8 {
    animation: Loader-petal-eight 4.1s ease-in-out infinite 1.4s;
}

.Loader-star {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    clip-path:
        polygon(
            50% 0,
            61% 38%,
            100% 50%,
            61% 62%,
            50% 100%,
            39% 62%,
            0 50%,
            39% 38%
        );
    background: #fffaff;
    box-shadow:
        0 0 5px #ffffff,
        0 0 9px rgba(232, 216, 255, 0.8);
    filter:
        drop-shadow(0 0 4px rgba(255, 183, 234, 0.7));
}

.Loader-star--1 {
    animation: Loader-star-one 2.4s ease-in-out infinite;
}

.Loader-star--2 {
    animation: Loader-star-two 2.8s ease-in-out infinite 0.15s;
}

.Loader-star--3 {
    animation: Loader-star-three 2.2s ease-in-out infinite 0.3s;
}

.Loader-star--4 {
    animation: Loader-star-four 3s ease-in-out infinite 0.45s;
}

.Loader-star--5 {
    animation: Loader-star-five 2.5s ease-in-out infinite 0.6s;
}

.Loader-star--6 {
    animation: Loader-star-six 2.9s ease-in-out infinite 0.75s;
}

.Loader-star--7 {
    animation: Loader-star-seven 2.3s ease-in-out infinite 0.9s;
}

.Loader-star--8 {
    animation: Loader-star-eight 3.1s ease-in-out infinite 1.05s;
}

.Loader-star--9 {
    animation: Loader-star-nine 2.6s ease-in-out infinite 1.2s;
}

.Loader-star--10 {
    animation: Loader-star-ten 3.2s ease-in-out infinite 1.35s;
}

.Loader-star--11 {
    animation: Loader-star-eleven 2.45s ease-in-out infinite 0.5s;
}

.Loader-star--12 {
    animation: Loader-star-twelve 2.75s ease-in-out infinite 0.8s;
}

.Loader-mote {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #e8d8ff;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #a98cff,
        0 0 13px rgba(138, 246, 255, 0.65);
    opacity: 0;
}

.Loader-mote--1 {
    animation: Loader-mote-one 2.6s ease-out infinite;
}

.Loader-mote--2 {
    animation: Loader-mote-two 2.9s ease-out infinite 0.1s;
}

.Loader-mote--3 {
    animation: Loader-mote-three 2.4s ease-out infinite 0.2s;
}

.Loader-mote--4 {
    animation: Loader-mote-four 3.1s ease-out infinite 0.3s;
}

.Loader-mote--5 {
    animation: Loader-mote-five 2.7s ease-out infinite 0.4s;
}

.Loader-mote--6 {
    animation: Loader-mote-six 3s ease-out infinite 0.5s;
}

.Loader-mote--7 {
    animation: Loader-mote-seven 2.5s ease-out infinite 0.6s;
}

.Loader-mote--8 {
    animation: Loader-mote-eight 3.2s ease-out infinite 0.7s;
}

.Loader-mote--9 {
    animation: Loader-mote-nine 2.65s ease-out infinite 0.8s;
}

.Loader-mote--10 {
    animation: Loader-mote-ten 2.95s ease-out infinite 0.9s;
}

.Loader-mote--11 {
    animation: Loader-mote-eleven 2.55s ease-out infinite 1s;
}

.Loader-mote--12 {
    animation: Loader-mote-twelve 3.05s ease-out infinite 1.1s;
}

.Loader-mote--13 {
    animation: Loader-mote-thirteen 2.75s ease-out infinite 1.2s;
}

.Loader-mote--14 {
    animation: Loader-mote-fourteen 3.15s ease-out infinite 1.3s;
}

.Loader-mote--15 {
    animation: Loader-mote-fifteen 2.35s ease-out infinite 1.4s;
}

.Loader-mote--16 {
    animation: Loader-mote-sixteen 3.25s ease-out infinite 1.5s;
}

.Loader-echo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 58px;
    height: 58px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border:
        1px solid rgba(255, 183, 234, 0.52);
    opacity: 0;
}

.Loader-echo--1 {
    animation: Loader-echo 2.7s ease-out infinite;
}

.Loader-echo--2 {
    border-color:
        rgba(138, 246, 255, 0.45);
    animation: Loader-echo 2.7s ease-out infinite 0.67s;
}

.Loader-echo--3 {
    border-color:
        rgba(169, 140, 255, 0.5);
    animation: Loader-echo 2.7s ease-out infinite 1.34s;
}

.Loader-echo--4 {
    border-color:
        rgba(232, 216, 255, 0.45);
    animation: Loader-echo 2.7s ease-out infinite 2.01s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 94px;
    height: 94px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 183, 234, 0.09),
            rgba(169, 140, 255, 0.08) 35%,
            rgba(138, 246, 255, 0.05) 55%,
            transparent 74%
        );
    animation: Loader-shell-breathe 1.9s ease-in-out infinite;
}

.Loader-core-halo {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-halo--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            transparent 0deg 24deg,
            #ffb7ea 24deg 30deg,
            transparent 30deg 83deg,
            #8af6ff 83deg 89deg,
            transparent 89deg 148deg,
            #a98cff 148deg 154deg,
            transparent 154deg 218deg,
            #e8d8ff 218deg 224deg,
            transparent 224deg 290deg,
            #639cff 290deg 296deg,
            transparent 296deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(255, 183, 234, 0.7));
    animation: Loader-halo-one 2.8s linear infinite;
}

.Loader-core-halo--2 {
    inset: 9px;
    border:
        1px dashed rgba(138, 246, 255, 0.38);
    animation: Loader-halo-two 3.6s linear infinite reverse;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 62px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:
        48% 52% 45% 55% /
        55% 47% 53% 45%;
    background:
        radial-gradient(
            circle at 35% 27%,
            #ffffff 0%,
            #f6ecff 9%,
            #e8d8ff 20%,
            #ffb7ea 35%,
            #a98cff 52%,
            #7654e8 69%,
            #35277e 86%,
            #100b35 100%
        );
    border:
        1px solid rgba(255, 250, 255, 0.48);
    box-shadow:
        0 0 7px #ffffff,
        0 0 16px #ffb7ea,
        0 0 30px rgba(169, 140, 255, 0.85),
        0 0 47px rgba(138, 246, 255, 0.45),
        0 0 68px rgba(118, 84, 232, 0.45),
        inset 0 0 14px rgba(255, 255, 255, 0.36);
    animation:
        Loader-core-morph 4.5s ease-in-out infinite,
        Loader-core-breathe 1.1s ease-in-out infinite alternate,
        Loader-core-phase 5s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border:
        1px solid rgba(232, 216, 255, 0.42);
    box-shadow:
        inset 0 0 10px rgba(255, 183, 234, 0.3);
    animation: Loader-core-inner 1.3s ease-in-out infinite alternate;
}

.Loader-core-light {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(255, 183, 234, 0.2),
            rgba(169, 140, 255, 0.15) 31%,
            rgba(138, 246, 255, 0.08) 52%,
            transparent 74%
        );
    animation: Loader-core-light 1.5s ease-in-out infinite alternate;
}

.Loader-crescent {
    position: relative;
    z-index: 20;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 35% 30%,
            #ffffff 0%,
            #fffaff 20%,
            #e8d8ff 48%,
            #ffb7ea 72%,
            #a98cff 100%
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 10px #ffb7ea,
        0 0 17px rgba(169, 140, 255, 0.8);
    animation: Loader-crescent-float 1.8s ease-in-out infinite alternate;
}

.Loader-crescent-cut {
    position: absolute;
    width: 27px;
    height: 27px;
    right: -5px;
    top: -4px;
    border-radius: 50%;
    background:
        linear-gradient(
            145deg,
            #392b83,
            #1e1757 55%,
            #100b35
        );
    box-shadow:
        -2px 2px 5px rgba(169, 140, 255, 0.18);
}

.Loader-core-star {
    position: absolute;
    z-index: 25;
    width: 5px;
    height: 5px;
    clip-path:
        polygon(
            50% 0,
            61% 39%,
            100% 50%,
            61% 61%,
            50% 100%,
            39% 61%,
            0 50%,
            39% 39%
        );
    background: #ffffff;
    box-shadow:
        0 0 5px #ffffff,
        0 0 8px #8af6ff;
}

.Loader-core-star--1 {
    right: 9px;
    top: 12px;
    animation: Loader-core-star-one 1.3s ease-in-out infinite alternate;
}

.Loader-core-star--2 {
    right: 13px;
    bottom: 11px;
    width: 4px;
    height: 4px;
    animation: Loader-core-star-two 1.7s ease-in-out infinite alternate;
}

.Loader-core-star--3 {
    left: 12px;
    bottom: 8px;
    width: 3px;
    height: 3px;
    animation: Loader-core-star-three 1.1s ease-in-out infinite alternate;
}

@keyframes Loader-dream-breathe {
    from {
        opacity: 0.45;
        transform: scale(0.92);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-dream-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-dream-aura {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-nebula-one {
    from {
        opacity: 0.4;
        transform:
            scale(0.92)
            translate(-4px, 3px);
    }

    to {
        opacity: 0.9;
        transform:
            scale(1.08)
            translate(4px, -3px);
    }
}

@keyframes Loader-nebula-two {
    to {
        rotate: 360deg;
    }
}

@keyframes Loader-haze-breathe {
    0%,
    100% {
        opacity: 0.3;
        transform: scale(0.92);
    }

    50% {
        opacity: 0.75;
        transform: scale(1.08);
    }
}

@keyframes Loader-haze-spin {
    to {
        rotate: -360deg;
    }
}

@keyframes Loader-portal-one {
    0%,
    100% {
        opacity: 0.35;
        transform:
            translate(-50%, -50%)
            scale(0.96);
    }

    50% {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            scale(1.05);
    }
}

@keyframes Loader-portal-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-portal-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-ribbon-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(10deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(370deg);
    }
}

@keyframes Loader-ribbon-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(65deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-295deg);
    }
}

@keyframes Loader-ribbon-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(118deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(478deg);
    }
}

@keyframes Loader-ribbon-four {
    from {
        transform:
            translate(-50%, -50%)
            rotate(172deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-188deg);
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(62deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-298deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(121deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(481deg);
    }
}

@keyframes Loader-petal-one {
    0%,
    100% {
        transform:
            translate(-78px, -70px)
            rotate(-15deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-86px, -79px)
            rotate(12deg)
            scale(1.08);
    }
}

@keyframes Loader-petal-two {
    0%,
    100% {
        transform:
            translate(-6px, -103px)
            rotate(30deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(1px, -113px)
            rotate(58deg)
            scale(1.05);
    }
}

@keyframes Loader-petal-three {
    0%,
    100% {
        transform:
            translate(72px, -73px)
            rotate(75deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(82px, -79px)
            rotate(103deg)
            scale(1.08);
    }
}

@keyframes Loader-petal-four {
    0%,
    100% {
        transform:
            translate(101px, 2px)
            rotate(120deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(111px, 9px)
            rotate(148deg)
            scale(1.05);
    }
}

@keyframes Loader-petal-five {
    0%,
    100% {
        transform:
            translate(70px, 73px)
            rotate(165deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(77px, 82px)
            rotate(193deg)
            scale(1.08);
    }
}

@keyframes Loader-petal-six {
    0%,
    100% {
        transform:
            translate(-4px, 101px)
            rotate(210deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-11px, 111px)
            rotate(238deg)
            scale(1.05);
    }
}

@keyframes Loader-petal-seven {
    0%,
    100% {
        transform:
            translate(-76px, 69px)
            rotate(255deg)
            scale(0.82);
    }

    50% {
        transform:
            translate(-85px, 76px)
            rotate(283deg)
            scale(1.08);
    }
}

@keyframes Loader-petal-eight {
    0%,
    100% {
        transform:
            translate(-103px, -6px)
            rotate(300deg)
            scale(0.86);
    }

    50% {
        transform:
            translate(-113px, -13px)
            rotate(328deg)
            scale(1.05);
    }
}

@keyframes Loader-star-one {
    0%,
    100% {
        transform:
            translate(-72px, -82px)
            scale(0.55)
            rotate(0deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-77px, -87px)
            scale(1.25)
            rotate(45deg);
        opacity: 1;
    }
}

@keyframes Loader-star-two {
    0%,
    100% {
        transform:
            translate(-26px, -108px)
            scale(0.6)
            rotate(20deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(-21px, -114px)
            scale(1.1)
            rotate(70deg);
        opacity: 1;
    }
}

@keyframes Loader-star-three {
    0%,
    100% {
        transform:
            translate(28px, -105px)
            scale(0.5)
            rotate(40deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(34px, -111px)
            scale(1.25)
            rotate(90deg);
        opacity: 1;
    }
}

@keyframes Loader-star-four {
    0%,
    100% {
        transform:
            translate(81px, -70px)
            scale(0.55)
            rotate(60deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(88px, -74px)
            scale(1.15)
            rotate(110deg);
        opacity: 1;
    }
}

@keyframes Loader-star-five {
    0%,
    100% {
        transform:
            translate(107px, -17px)
            scale(0.55)
            rotate(80deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(114px, -10px)
            scale(1.2)
            rotate(130deg);
        opacity: 1;
    }
}

@keyframes Loader-star-six {
    0%,
    100% {
        transform:
            translate(95px, 51px)
            scale(0.6)
            rotate(100deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(101px, 58px)
            scale(1.1)
            rotate(150deg);
        opacity: 1;
    }
}

@keyframes Loader-star-seven {
    0%,
    100% {
        transform:
            translate(50px, 94px)
            scale(0.5)
            rotate(120deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(55px, 102px)
            scale(1.25)
            rotate(170deg);
        opacity: 1;
    }
}

@keyframes Loader-star-eight {
    0%,
    100% {
        transform:
            translate(-12px, 106px)
            scale(0.55)
            rotate(140deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(-18px, 114px)
            scale(1.15)
            rotate(190deg);
        opacity: 1;
    }
}

@keyframes Loader-star-nine {
    0%,
    100% {
        transform:
            translate(-70px, 82px)
            scale(0.55)
            rotate(160deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-78px, 88px)
            scale(1.2)
            rotate(210deg);
        opacity: 1;
    }
}

@keyframes Loader-star-ten {
    0%,
    100% {
        transform:
            translate(-105px, 27px)
            scale(0.6)
            rotate(180deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(-113px, 21px)
            scale(1.1)
            rotate(230deg);
        opacity: 1;
    }
}

@keyframes Loader-star-eleven {
    0%,
    100% {
        transform:
            translate(-98px, -42px)
            scale(0.5)
            rotate(200deg);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-106px, -49px)
            scale(1.25)
            rotate(250deg);
        opacity: 1;
    }
}

@keyframes Loader-star-twelve {
    0%,
    100% {
        transform:
            translate(67px, 82px)
            scale(0.55)
            rotate(220deg);
        opacity: 0.4;
    }

    50% {
        transform:
            translate(74px, 90px)
            scale(1.15)
            rotate(270deg);
        opacity: 1;
    }
}

@keyframes Loader-mote-one {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(110px, -45px)
            scale(1.1);
    }
}

@keyframes Loader-mote-two {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-108px, -58px)
            scale(0.85);
    }
}

@keyframes Loader-mote-three {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(118px, 14px)
            scale(1);
    }
}

@keyframes Loader-mote-four {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-117px, 29px)
            scale(0.9);
    }
}

@keyframes Loader-mote-five {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(64px, 103px)
            scale(1.1);
    }
}

@keyframes Loader-mote-six {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-65px, 106px)
            scale(0.85);
    }
}

@keyframes Loader-mote-seven {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(28px, -117px)
            scale(1.05);
    }
}

@keyframes Loader-mote-eight {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-38px, -114px)
            scale(0.9);
    }
}

@keyframes Loader-mote-nine {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(97px, 76px)
            scale(1.1);
    }
}

@keyframes Loader-mote-ten {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-95px, 81px)
            scale(0.85);
    }
}

@keyframes Loader-mote-eleven {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(80px, -96px)
            scale(1);
    }
}

@keyframes Loader-mote-twelve {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-82px, -94px)
            scale(0.9);
    }
}

@keyframes Loader-mote-thirteen {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(119px, 42px)
            scale(1.1);
    }
}

@keyframes Loader-mote-fourteen {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-118px, 48px)
            scale(0.85);
    }
}

@keyframes Loader-mote-fifteen {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(10px, 122px)
            scale(1.05);
    }
}

@keyframes Loader-mote-sixteen {
    0% {
        opacity: 0;
        transform:
            translate(0, 0)
            scale(0.2);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-8px, -124px)
            scale(0.9);
    }
}

@keyframes Loader-echo {
    0% {
        opacity: 0.7;
        transform:
            translate(-50%, -50%)
            scale(0.55);
    }

    55% {
        opacity: 0.26;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(3);
    }
}

@keyframes Loader-shell-breathe {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.94);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.06);
    }
}

@keyframes Loader-halo-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-halo-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-morph {
    0%,
    100% {
        border-radius:
            48% 52% 45% 55% /
            55% 47% 53% 45%;
    }

    25% {
        border-radius:
            55% 45% 53% 47% /
            46% 56% 44% 54%;
    }

    50% {
        border-radius:
            46% 54% 57% 43% /
            53% 45% 55% 47%;
    }

    75% {
        border-radius:
            57% 43% 48% 52% /
            44% 56% 48% 52%;
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.92);
    }

    to {
        transform: scale(1.08);
    }
}

@keyframes Loader-core-phase {
    0%,
    100% {
        filter:
            hue-rotate(0deg)
            brightness(1);
    }

    33% {
        filter:
            hue-rotate(12deg)
            brightness(1.1);
    }

    66% {
        filter:
            hue-rotate(-14deg)
            brightness(1.08);
    }
}

@keyframes Loader-core-inner {
    from {
        opacity: 0.4;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.08);
    }
}

@keyframes Loader-core-light {
    from {
        opacity: 0.35;
        transform: scale(0.86);
    }

    to {
        opacity: 1;
        transform: scale(1.3);
    }
}

@keyframes Loader-crescent-float {
    from {
        transform:
            translateY(2px)
            rotate(-6deg)
            scale(0.94);
    }

    to {
        transform:
            translateY(-3px)
            rotate(6deg)
            scale(1.06);
    }
}

@keyframes Loader-core-star-one {
    from {
        opacity: 0.35;
        transform:
            scale(0.6)
            rotate(0deg);
    }

    to {
        opacity: 1;
        transform:
            scale(1.3)
            rotate(45deg);
    }
}

@keyframes Loader-core-star-two {
    from {
        opacity: 0.25;
        transform:
            scale(0.5)
            rotate(20deg);
    }

    to {
        opacity: 1;
        transform:
            scale(1.2)
            rotate(70deg);
    }
}

@keyframes Loader-core-star-three {
    from {
        opacity: 0.3;
        transform:
            scale(0.55)
            rotate(-15deg);
    }

    to {
        opacity: 1;
        transform:
            scale(1.35)
            rotate(35deg);
    }
}`,
  },
  {
    id: 3126,
    name: "Magnetar Flux Sovereign",
    preview: (
      <div className="ld-3126">
        <div className="ld-3126-aura" />
        <div className="ld-3126-flux-fog" />

        <div className="ld-3126-field ld-3126-field--1" />
        <div className="ld-3126-field ld-3126-field--2" />
        <div className="ld-3126-field ld-3126-field--3" />

        <div className="ld-3126-flux-ring ld-3126-flux-ring--1" />
        <div className="ld-3126-flux-ring ld-3126-flux-ring--2" />
        <div className="ld-3126-flux-ring ld-3126-flux-ring--3" />

        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--1" />
        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--2" />
        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--3" />
        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--4" />
        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--5" />
        <div className="ld-3126-magnetic-line ld-3126-magnetic-line--6" />

        <div className="ld-3126-orbit ld-3126-orbit--1">
          <span />
        </div>

        <div className="ld-3126-orbit ld-3126-orbit--2">
          <span />
        </div>

        <div className="ld-3126-orbit ld-3126-orbit--3">
          <span />
        </div>

        <span className="ld-3126-needle ld-3126-needle--1" />
        <span className="ld-3126-needle ld-3126-needle--2" />
        <span className="ld-3126-needle ld-3126-needle--3" />
        <span className="ld-3126-needle ld-3126-needle--4" />
        <span className="ld-3126-needle ld-3126-needle--5" />
        <span className="ld-3126-needle ld-3126-needle--6" />
        <span className="ld-3126-needle ld-3126-needle--7" />
        <span className="ld-3126-needle ld-3126-needle--8" />

        <span className="ld-3126-fragment ld-3126-fragment--1" />
        <span className="ld-3126-fragment ld-3126-fragment--2" />
        <span className="ld-3126-fragment ld-3126-fragment--3" />
        <span className="ld-3126-fragment ld-3126-fragment--4" />
        <span className="ld-3126-fragment ld-3126-fragment--5" />
        <span className="ld-3126-fragment ld-3126-fragment--6" />
        <span className="ld-3126-fragment ld-3126-fragment--7" />
        <span className="ld-3126-fragment ld-3126-fragment--8" />
        <span className="ld-3126-fragment ld-3126-fragment--9" />
        <span className="ld-3126-fragment ld-3126-fragment--10" />
        <span className="ld-3126-fragment ld-3126-fragment--11" />
        <span className="ld-3126-fragment ld-3126-fragment--12" />

        <span className="ld-3126-particle ld-3126-particle--1" />
        <span className="ld-3126-particle ld-3126-particle--2" />
        <span className="ld-3126-particle ld-3126-particle--3" />
        <span className="ld-3126-particle ld-3126-particle--4" />
        <span className="ld-3126-particle ld-3126-particle--5" />
        <span className="ld-3126-particle ld-3126-particle--6" />
        <span className="ld-3126-particle ld-3126-particle--7" />
        <span className="ld-3126-particle ld-3126-particle--8" />
        <span className="ld-3126-particle ld-3126-particle--9" />
        <span className="ld-3126-particle ld-3126-particle--10" />
        <span className="ld-3126-particle ld-3126-particle--11" />
        <span className="ld-3126-particle ld-3126-particle--12" />
        <span className="ld-3126-particle ld-3126-particle--13" />
        <span className="ld-3126-particle ld-3126-particle--14" />
        <span className="ld-3126-particle ld-3126-particle--15" />
        <span className="ld-3126-particle ld-3126-particle--16" />

        <div className="ld-3126-pulse ld-3126-pulse--1" />
        <div className="ld-3126-pulse ld-3126-pulse--2" />
        <div className="ld-3126-pulse ld-3126-pulse--3" />
        <div className="ld-3126-pulse ld-3126-pulse--4" />

        <div className="ld-3126-core-shell">
          <div className="ld-3126-core-ring ld-3126-core-ring--1" />
          <div className="ld-3126-core-ring ld-3126-core-ring--2" />
          <div className="ld-3126-core-ring ld-3126-core-ring--3" />

          <div className="ld-3126-core">
            <div className="ld-3126-core-glow" />

            <div className="ld-3126-pole ld-3126-pole--north">
              <span>N</span>
            </div>

            <div className="ld-3126-pole ld-3126-pole--south">
              <span>S</span>
            </div>

            <div className="ld-3126-core-spark" />
          </div>
        </div>
      </div>
    ),
    html: `<div class="Loader">
    <div class="Loader-aura"></div>
    <div class="Loader-flux-fog"></div>

    <div class="Loader-field Loader-field--1"></div>
    <div class="Loader-field Loader-field--2"></div>
    <div class="Loader-field Loader-field--3"></div>

    <div class="Loader-flux-ring Loader-flux-ring--1"></div>
    <div class="Loader-flux-ring Loader-flux-ring--2"></div>
    <div class="Loader-flux-ring Loader-flux-ring--3"></div>

    <div class="Loader-magnetic-line Loader-magnetic-line--1"></div>
    <div class="Loader-magnetic-line Loader-magnetic-line--2"></div>
    <div class="Loader-magnetic-line Loader-magnetic-line--3"></div>
    <div class="Loader-magnetic-line Loader-magnetic-line--4"></div>
    <div class="Loader-magnetic-line Loader-magnetic-line--5"></div>
    <div class="Loader-magnetic-line Loader-magnetic-line--6"></div>

    <div class="Loader-orbit Loader-orbit--1">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--2">
        <span></span>
    </div>

    <div class="Loader-orbit Loader-orbit--3">
        <span></span>
    </div>

    <span class="Loader-needle Loader-needle--1"></span>
    <span class="Loader-needle Loader-needle--2"></span>
    <span class="Loader-needle Loader-needle--3"></span>
    <span class="Loader-needle Loader-needle--4"></span>
    <span class="Loader-needle Loader-needle--5"></span>
    <span class="Loader-needle Loader-needle--6"></span>
    <span class="Loader-needle Loader-needle--7"></span>
    <span class="Loader-needle Loader-needle--8"></span>

    <span class="Loader-fragment Loader-fragment--1"></span>
    <span class="Loader-fragment Loader-fragment--2"></span>
    <span class="Loader-fragment Loader-fragment--3"></span>
    <span class="Loader-fragment Loader-fragment--4"></span>
    <span class="Loader-fragment Loader-fragment--5"></span>
    <span class="Loader-fragment Loader-fragment--6"></span>
    <span class="Loader-fragment Loader-fragment--7"></span>
    <span class="Loader-fragment Loader-fragment--8"></span>
    <span class="Loader-fragment Loader-fragment--9"></span>
    <span class="Loader-fragment Loader-fragment--10"></span>
    <span class="Loader-fragment Loader-fragment--11"></span>
    <span class="Loader-fragment Loader-fragment--12"></span>

    <span class="Loader-particle Loader-particle--1"></span>
    <span class="Loader-particle Loader-particle--2"></span>
    <span class="Loader-particle Loader-particle--3"></span>
    <span class="Loader-particle Loader-particle--4"></span>
    <span class="Loader-particle Loader-particle--5"></span>
    <span class="Loader-particle Loader-particle--6"></span>
    <span class="Loader-particle Loader-particle--7"></span>
    <span class="Loader-particle Loader-particle--8"></span>
    <span class="Loader-particle Loader-particle--9"></span>
    <span class="Loader-particle Loader-particle--10"></span>
    <span class="Loader-particle Loader-particle--11"></span>
    <span class="Loader-particle Loader-particle--12"></span>
    <span class="Loader-particle Loader-particle--13"></span>
    <span class="Loader-particle Loader-particle--14"></span>
    <span class="Loader-particle Loader-particle--15"></span>
    <span class="Loader-particle Loader-particle--16"></span>

    <div class="Loader-pulse Loader-pulse--1"></div>
    <div class="Loader-pulse Loader-pulse--2"></div>
    <div class="Loader-pulse Loader-pulse--3"></div>
    <div class="Loader-pulse Loader-pulse--4"></div>

    <div class="Loader-core-shell">
        <div class="Loader-core-ring Loader-core-ring--1"></div>
        <div class="Loader-core-ring Loader-core-ring--2"></div>
        <div class="Loader-core-ring Loader-core-ring--3"></div>

        <div class="Loader-core">
            <div class="Loader-core-glow"></div>

            <div class="Loader-pole Loader-pole--north">
                <span>N</span>
            </div>

            <div class="Loader-pole Loader-pole--south">
                <span>S</span>
            </div>

            <div class="Loader-core-spark"></div>
        </div>
    </div>
</div>`,
    css: `.Loader {
    --flux-white: #f7feff;
    --flux-cyan: #55f6ff;
    --flux-blue: #168cff;
    --flux-red: #ff4d69;
    --flux-crimson: #e51d48;
    --flux-orange: #ff9766;
    --flux-metal: #dbe7ed;
    --flux-dark: #07131e;

    position: relative;
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
}

.Loader::before {
    content: "";
    position: absolute;
    inset: -32px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(85, 246, 255, 0.12),
            rgba(22, 140, 255, 0.08) 30%,
            rgba(255, 77, 105, 0.08) 48%,
            rgba(229, 29, 72, 0.04) 62%,
            transparent 76%
        );
    filter: blur(17px);
    animation: Loader-flux-breathe 2.5s ease-in-out infinite alternate;
}

.Loader::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background:
        repeating-conic-gradient(
            from 0deg,
            transparent 0deg 10deg,
            rgba(85, 246, 255, 0.08) 10deg 12deg,
            transparent 12deg 20deg,
            rgba(255, 77, 105, 0.08) 20deg 22deg,
            transparent 22deg 32deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 80%,
            #000 81% 82%,
            transparent 83%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 80%,
            #000 81% 82%,
            transparent 83%
        );
    animation: Loader-flux-dial 20s linear infinite;
}

.Loader-aura {
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    background:
        conic-gradient(
            from 0deg,
            transparent,
            rgba(85, 246, 255, 0.15),
            transparent 24%,
            rgba(255, 77, 105, 0.14),
            transparent 49%,
            rgba(22, 140, 255, 0.12),
            transparent 73%,
            rgba(255, 151, 102, 0.1),
            transparent
        );
    filter: blur(5px);
    animation: Loader-aura-spin 9s linear infinite;
}

.Loader-flux-fog {
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    background:
        radial-gradient(
            ellipse at 28% 50%,
            rgba(85, 246, 255, 0.12),
            transparent 38%
        ),
        radial-gradient(
            ellipse at 72% 50%,
            rgba(255, 77, 105, 0.12),
            transparent 38%
        );
    filter: blur(7px);
    animation: Loader-fog-breathe 2.8s ease-in-out infinite alternate;
}

.Loader-field {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-field--1 {
    width: 176px;
    height: 176px;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(219, 231, 237, 0.16);
    animation: Loader-field-one 3.2s ease-in-out infinite;
}

.Loader-field--2 {
    width: 146px;
    height: 146px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(85, 246, 255, 0.2);
    animation: Loader-field-two 8s linear infinite;
}

.Loader-field--3 {
    width: 116px;
    height: 116px;
    transform: translate(-50%, -50%);
    border: 1px dashed rgba(255, 77, 105, 0.2);
    animation: Loader-field-three 6s linear infinite reverse;
}

.Loader-flux-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-flux-ring--1 {
    width: 164px;
    height: 70px;
    border:
        2px solid rgba(85, 246, 255, 0.31);
    transform:
        translate(-50%, -50%)
        rotate(18deg);
    box-shadow:
        0 0 7px rgba(85, 246, 255, 0.22);
    animation: Loader-ring-one 4.6s linear infinite;
}

.Loader-flux-ring--2 {
    width: 148px;
    height: 84px;
    border:
        2px solid rgba(255, 77, 105, 0.28);
    transform:
        translate(-50%, -50%)
        rotate(76deg);
    box-shadow:
        0 0 7px rgba(255, 77, 105, 0.2);
    animation: Loader-ring-two 5.5s linear infinite reverse;
}

.Loader-flux-ring--3 {
    width: 132px;
    height: 112px;
    border:
        1px dashed rgba(219, 231, 237, 0.25);
    transform:
        translate(-50%, -50%)
        rotate(138deg);
    animation: Loader-ring-three 7s linear infinite;
}

.Loader-magnetic-line {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1px solid transparent;
    pointer-events: none;
}

.Loader-magnetic-line--1 {
    width: 170px;
    height: 86px;
    border-top-color: rgba(85, 246, 255, 0.55);
    border-bottom-color: rgba(255, 77, 105, 0.5);
    transform:
        translate(-50%, -50%)
        rotate(0deg);
    filter:
        drop-shadow(0 0 4px rgba(85, 246, 255, 0.35));
    animation: Loader-line-one 3.4s ease-in-out infinite;
}

.Loader-magnetic-line--2 {
    width: 164px;
    height: 108px;
    border-top-color: rgba(85, 246, 255, 0.4);
    border-bottom-color: rgba(255, 77, 105, 0.38);
    transform:
        translate(-50%, -50%)
        rotate(30deg);
    animation: Loader-line-two 3.8s ease-in-out infinite;
}

.Loader-magnetic-line--3 {
    width: 158px;
    height: 128px;
    border-top-color: rgba(85, 246, 255, 0.32);
    border-bottom-color: rgba(255, 77, 105, 0.32);
    transform:
        translate(-50%, -50%)
        rotate(60deg);
    animation: Loader-line-three 4.2s ease-in-out infinite;
}

.Loader-magnetic-line--4 {
    width: 170px;
    height: 86px;
    border-left-color: rgba(85, 246, 255, 0.42);
    border-right-color: rgba(255, 77, 105, 0.42);
    transform:
        translate(-50%, -50%)
        rotate(90deg);
    animation: Loader-line-four 3.6s ease-in-out infinite;
}

.Loader-magnetic-line--5 {
    width: 154px;
    height: 116px;
    border-left-color: rgba(85, 246, 255, 0.3);
    border-right-color: rgba(255, 77, 105, 0.3);
    transform:
        translate(-50%, -50%)
        rotate(120deg);
    animation: Loader-line-five 4s ease-in-out infinite;
}

.Loader-magnetic-line--6 {
    width: 146px;
    height: 136px;
    border-top-color: rgba(85, 246, 255, 0.25);
    border-bottom-color: rgba(255, 77, 105, 0.25);
    transform:
        translate(-50%, -50%)
        rotate(150deg);
    animation: Loader-line-six 4.4s ease-in-out infinite;
}

.Loader-orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
}

.Loader-orbit span {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    border-radius: 50%;
    background:
        linear-gradient(
            90deg,
            #55f6ff 0 46%,
            #f7feff 47% 53%,
            #ff4d69 54% 100%
        );
    box-shadow:
        0 0 5px #ffffff,
        0 0 11px rgba(85, 246, 255, 0.8),
        0 0 18px rgba(255, 77, 105, 0.7);
}

.Loader-orbit--1 {
    width: 158px;
    height: 52px;
    animation: Loader-orbit-one 4.1s linear infinite;
}

.Loader-orbit--2 {
    width: 116px;
    height: 154px;
    animation: Loader-orbit-two 5.2s linear infinite reverse;
}

.Loader-orbit--3 {
    width: 140px;
    height: 92px;
    animation: Loader-orbit-three 6.2s linear infinite;
}

.Loader-needle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 26px;
    margin-left: -2.5px;
    margin-top: -13px;
    clip-path:
        polygon(
            50% 0,
            100% 45%,
            62% 100%,
            38% 100%,
            0 45%
        );
    background:
        linear-gradient(
            180deg,
            #55f6ff 0%,
            #f7feff 47%,
            #ff4d69 53%,
            #e51d48 100%
        );
    box-shadow:
        0 0 5px rgba(85, 246, 255, 0.5);
    filter:
        drop-shadow(0 0 5px rgba(255, 77, 105, 0.35));
}

.Loader-needle--1 {
    animation: Loader-needle-one 2.8s ease-in-out infinite;
}

.Loader-needle--2 {
    animation: Loader-needle-two 3.1s ease-in-out infinite 0.2s;
}

.Loader-needle--3 {
    animation: Loader-needle-three 2.7s ease-in-out infinite 0.4s;
}

.Loader-needle--4 {
    animation: Loader-needle-four 3.3s ease-in-out infinite 0.6s;
}

.Loader-needle--5 {
    animation: Loader-needle-five 2.9s ease-in-out infinite 0.8s;
}

.Loader-needle--6 {
    animation: Loader-needle-six 3.2s ease-in-out infinite 1s;
}

.Loader-needle--7 {
    animation: Loader-needle-seven 2.6s ease-in-out infinite 1.2s;
}

.Loader-needle--8 {
    animation: Loader-needle-eight 3.4s ease-in-out infinite 1.4s;
}

.Loader-fragment {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 12px;
    background:
        linear-gradient(
            135deg,
            #f7feff,
            #98acb5 45%,
            #344650 100%
        );
    clip-path:
        polygon(
            50% 0,
            100% 28%,
            78% 100%,
            18% 82%,
            0 30%
        );
    filter:
        drop-shadow(0 0 3px rgba(219, 231, 237, 0.5));
}

.Loader-fragment--1 {
    animation: Loader-fragment-one 3.1s ease-in-out infinite;
}

.Loader-fragment--2 {
    animation: Loader-fragment-two 3.4s ease-in-out infinite 0.15s;
}

.Loader-fragment--3 {
    animation: Loader-fragment-three 2.9s ease-in-out infinite 0.3s;
}

.Loader-fragment--4 {
    animation: Loader-fragment-four 3.6s ease-in-out infinite 0.45s;
}

.Loader-fragment--5 {
    animation: Loader-fragment-five 3.2s ease-in-out infinite 0.6s;
}

.Loader-fragment--6 {
    animation: Loader-fragment-six 3.5s ease-in-out infinite 0.75s;
}

.Loader-fragment--7 {
    animation: Loader-fragment-seven 3s ease-in-out infinite 0.9s;
}

.Loader-fragment--8 {
    animation: Loader-fragment-eight 3.7s ease-in-out infinite 1.05s;
}

.Loader-fragment--9 {
    animation: Loader-fragment-nine 3.25s ease-in-out infinite 1.2s;
}

.Loader-fragment--10 {
    animation: Loader-fragment-ten 3.55s ease-in-out infinite 1.35s;
}

.Loader-fragment--11 {
    animation: Loader-fragment-eleven 3.15s ease-in-out infinite 0.55s;
}

.Loader-fragment--12 {
    animation: Loader-fragment-twelve 3.45s ease-in-out infinite 0.85s;
}

.Loader-particle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    margin: -1.5px;
    border-radius: 50%;
    background: #55f6ff;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #55f6ff;
    opacity: 0;
}

.Loader-particle:nth-of-type(even) {
    background: #ff4d69;
    box-shadow:
        0 0 4px #ffffff,
        0 0 8px #ff4d69;
}

.Loader-particle--1 {
    animation: Loader-particle-one 2.4s ease-out infinite;
}

.Loader-particle--2 {
    animation: Loader-particle-two 2.7s ease-out infinite 0.1s;
}

.Loader-particle--3 {
    animation: Loader-particle-three 2.2s ease-out infinite 0.2s;
}

.Loader-particle--4 {
    animation: Loader-particle-four 2.9s ease-out infinite 0.3s;
}

.Loader-particle--5 {
    animation: Loader-particle-five 2.5s ease-out infinite 0.4s;
}

.Loader-particle--6 {
    animation: Loader-particle-six 2.8s ease-out infinite 0.5s;
}

.Loader-particle--7 {
    animation: Loader-particle-seven 2.3s ease-out infinite 0.6s;
}

.Loader-particle--8 {
    animation: Loader-particle-eight 3s ease-out infinite 0.7s;
}

.Loader-particle--9 {
    animation: Loader-particle-nine 2.45s ease-out infinite 0.8s;
}

.Loader-particle--10 {
    animation: Loader-particle-ten 2.75s ease-out infinite 0.9s;
}

.Loader-particle--11 {
    animation: Loader-particle-eleven 2.35s ease-out infinite 1s;
}

.Loader-particle--12 {
    animation: Loader-particle-twelve 2.85s ease-out infinite 1.1s;
}

.Loader-particle--13 {
    animation: Loader-particle-thirteen 2.55s ease-out infinite 1.2s;
}

.Loader-particle--14 {
    animation: Loader-particle-fourteen 2.95s ease-out infinite 1.3s;
}

.Loader-particle--15 {
    animation: Loader-particle-fifteen 2.25s ease-out infinite 1.4s;
}

.Loader-particle--16 {
    animation: Loader-particle-sixteen 3.05s ease-out infinite 1.5s;
}

.Loader-pulse {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 62px;
    height: 62px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(85, 246, 255, 0.55);
    opacity: 0;
}

.Loader-pulse--1 {
    animation: Loader-pulse 2.2s ease-out infinite;
}

.Loader-pulse--2 {
    border-color: rgba(255, 77, 105, 0.52);
    animation: Loader-pulse 2.2s ease-out infinite 0.55s;
}

.Loader-pulse--3 {
    border-color: rgba(247, 254, 255, 0.4);
    animation: Loader-pulse 2.2s ease-out infinite 1.1s;
}

.Loader-pulse--4 {
    border-color: rgba(255, 151, 102, 0.45);
    animation: Loader-pulse 2.2s ease-out infinite 1.65s;
}

.Loader-core-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 96px;
    height: 96px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(85, 246, 255, 0.08),
            transparent 37%
        ),
        radial-gradient(
            circle,
            rgba(255, 77, 105, 0.07),
            transparent 64%
        );
    animation: Loader-shell 1.7s ease-in-out infinite;
}

.Loader-core-ring {
    position: absolute;
    border-radius: 50%;
}

.Loader-core-ring--1 {
    inset: 0;
    background:
        conic-gradient(
            from 0deg,
            #55f6ff 0deg 28deg,
            transparent 28deg 83deg,
            #ff4d69 83deg 111deg,
            transparent 111deg 170deg,
            #55f6ff 170deg 198deg,
            transparent 198deg 257deg,
            #ff4d69 257deg 285deg,
            transparent 285deg
        );
    mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    -webkit-mask:
        radial-gradient(
            circle,
            transparent 0 87%,
            #000 88%
        );
    filter:
        drop-shadow(0 0 5px rgba(85, 246, 255, 0.5));
    animation: Loader-core-ring-one 2.5s linear infinite;
}

.Loader-core-ring--2 {
    inset: 8px;
    border:
        1px dashed rgba(219, 231, 237, 0.4);
    animation: Loader-core-ring-two 3.3s linear infinite reverse;
}

.Loader-core-ring--3 {
    inset: 15px;
    border:
        1px solid rgba(255, 255, 255, 0.2);
    animation: Loader-core-ring-three 1.4s ease-in-out infinite alternate;
}

.Loader-core {
    position: relative;
    z-index: 10;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background:
        linear-gradient(
            90deg,
            #07394a 0%,
            #0a7185 23%,
            #d9fbff 49%,
            #fff4f4 51%,
            #962339 77%,
            #4d0c1b 100%
        );
    border:
        1px solid rgba(247, 254, 255, 0.5);
    box-shadow:
        -8px 0 22px rgba(85, 246, 255, 0.62),
        8px 0 22px rgba(255, 77, 105, 0.62),
        0 0 35px rgba(247, 254, 255, 0.25),
        inset 0 0 15px rgba(255, 255, 255, 0.22);
    animation:
        Loader-core-breathe 0.9s ease-in-out infinite alternate,
        Loader-core-tilt 3.6s ease-in-out infinite;
}

.Loader-core::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 4px;
    width: 1px;
    height: 56px;
    transform: translateX(-50%);
    background:
        linear-gradient(
            transparent,
            #ffffff,
            transparent
        );
    box-shadow:
        0 0 7px #ffffff;
}

.Loader-core-glow {
    position: absolute;
    inset: -22px;
    border-radius: 50%;
    background:
        linear-gradient(
            90deg,
            rgba(85, 246, 255, 0.22),
            transparent 45%,
            transparent 55%,
            rgba(255, 77, 105, 0.22)
        );
    filter: blur(3px);
    animation: Loader-core-glow 1.2s ease-in-out infinite alternate;
}

.Loader-pole {
    position: absolute;
    top: 50%;
    width: 28px;
    height: 42px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.Loader-pole span {
    font:
        700 13px/1 Arial,
        sans-serif;
    color: #ffffff;
    text-shadow:
        0 0 4px #ffffff,
        0 0 8px currentColor;
}

.Loader-pole--north {
    left: 3px;
    color: #55f6ff;
}

.Loader-pole--south {
    right: 3px;
    color: #ff4d69;
}

.Loader-core-spark {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    transform:
        translate(-50%, -50%)
        rotate(45deg);
    background: #ffffff;
    box-shadow:
        0 0 6px #ffffff,
        0 0 11px #55f6ff,
        0 0 16px #ff4d69;
    animation: Loader-core-spark 0.8s ease-in-out infinite alternate;
}

@keyframes Loader-flux-breathe {
    from {
        opacity: 0.45;
        transform: scale(0.92);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-flux-dial {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-aura-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-fog-breathe {
    from {
        opacity: 0.35;
        transform: scale(0.92);
    }

    to {
        opacity: 0.9;
        transform: scale(1.08);
    }
}

@keyframes Loader-field-one {
    0%,
    100% {
        opacity: 0.3;
        transform:
            translate(-50%, -50%)
            scale(0.96);
    }

    50% {
        opacity: 0.8;
        transform:
            translate(-50%, -50%)
            scale(1.05);
    }
}

@keyframes Loader-field-two {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-field-three {
    to {
        transform:
            translate(-50%, -50%)
            rotate(-360deg);
    }
}

@keyframes Loader-ring-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(18deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(378deg);
    }
}

@keyframes Loader-ring-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(76deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-284deg);
    }
}

@keyframes Loader-ring-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(138deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(498deg);
    }
}

@keyframes Loader-line-one {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(-4deg)
            scaleX(0.94);
        opacity: 0.35;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(4deg)
            scaleX(1.08);
        opacity: 1;
    }
}

@keyframes Loader-line-two {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(26deg)
            scaleY(0.94);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(34deg)
            scaleY(1.06);
        opacity: 0.85;
    }
}

@keyframes Loader-line-three {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(56deg)
            scale(0.95);
        opacity: 0.28;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(64deg)
            scale(1.05);
        opacity: 0.8;
    }
}

@keyframes Loader-line-four {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(86deg)
            scaleX(0.94);
        opacity: 0.32;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(94deg)
            scaleX(1.07);
        opacity: 0.9;
    }
}

@keyframes Loader-line-five {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(116deg)
            scaleY(0.95);
        opacity: 0.3;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(124deg)
            scaleY(1.06);
        opacity: 0.85;
    }
}

@keyframes Loader-line-six {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            rotate(146deg)
            scale(0.94);
        opacity: 0.26;
    }

    50% {
        transform:
            translate(-50%, -50%)
            rotate(154deg)
            scale(1.05);
        opacity: 0.8;
    }
}

@keyframes Loader-orbit-one {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}

@keyframes Loader-orbit-two {
    from {
        transform:
            translate(-50%, -50%)
            rotate(63deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(-297deg);
    }
}

@keyframes Loader-orbit-three {
    from {
        transform:
            translate(-50%, -50%)
            rotate(123deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(483deg);
    }
}

@keyframes Loader-needle-one {
    0%,
    100% {
        transform:
            translate(-78px, -72px)
            rotate(-35deg);
    }

    50% {
        transform:
            translate(-85px, -79px)
            rotate(15deg)
            scale(1.1);
    }
}

@keyframes Loader-needle-two {
    0%,
    100% {
        transform:
            translate(-5px, -103px)
            rotate(5deg);
    }

    50% {
        transform:
            translate(1px, -112px)
            rotate(48deg)
            scale(1.08);
    }
}

@keyframes Loader-needle-three {
    0%,
    100% {
        transform:
            translate(71px, -75px)
            rotate(42deg);
    }

    50% {
        transform:
            translate(80px, -81px)
            rotate(93deg)
            scale(1.1);
    }
}

@keyframes Loader-needle-four {
    0%,
    100% {
        transform:
            translate(101px, -3px)
            rotate(86deg);
    }

    50% {
        transform:
            translate(111px, 4px)
            rotate(132deg)
            scale(1.08);
    }
}

@keyframes Loader-needle-five {
    0%,
    100% {
        transform:
            translate(70px, 72px)
            rotate(137deg);
    }

    50% {
        transform:
            translate(77px, 81px)
            rotate(180deg)
            scale(1.1);
    }
}

@keyframes Loader-needle-six {
    0%,
    100% {
        transform:
            translate(-5px, 101px)
            rotate(182deg);
    }

    50% {
        transform:
            translate(-12px, 111px)
            rotate(225deg)
            scale(1.08);
    }
}

@keyframes Loader-needle-seven {
    0%,
    100% {
        transform:
            translate(-76px, 70px)
            rotate(225deg);
    }

    50% {
        transform:
            translate(-85px, 77px)
            rotate(274deg)
            scale(1.1);
    }
}

@keyframes Loader-needle-eight {
    0%,
    100% {
        transform:
            translate(-103px, -5px)
            rotate(272deg);
    }

    50% {
        transform:
            translate(-113px, -12px)
            rotate(318deg)
            scale(1.08);
    }
}

@keyframes Loader-fragment-one {
    0%,
    100% {
        transform:
            translate(-92px, -58px)
            rotate(0deg);
    }

    50% {
        transform:
            translate(-70px, -44px)
            rotate(120deg);
    }
}

@keyframes Loader-fragment-two {
    0%,
    100% {
        transform:
            translate(-55px, -93px)
            rotate(30deg);
    }

    50% {
        transform:
            translate(-42px, -71px)
            rotate(145deg);
    }
}

@keyframes Loader-fragment-three {
    0%,
    100% {
        transform:
            translate(-8px, -110px)
            rotate(60deg);
    }

    50% {
        transform:
            translate(-2px, -79px)
            rotate(175deg);
    }
}

@keyframes Loader-fragment-four {
    0%,
    100% {
        transform:
            translate(51px, -95px)
            rotate(90deg);
    }

    50% {
        transform:
            translate(39px, -72px)
            rotate(205deg);
    }
}

@keyframes Loader-fragment-five {
    0%,
    100% {
        transform:
            translate(91px, -55px)
            rotate(120deg);
    }

    50% {
        transform:
            translate(69px, -41px)
            rotate(235deg);
    }
}

@keyframes Loader-fragment-six {
    0%,
    100% {
        transform:
            translate(107px, -1px)
            rotate(150deg);
    }

    50% {
        transform:
            translate(77px, 2px)
            rotate(265deg);
    }
}

@keyframes Loader-fragment-seven {
    0%,
    100% {
        transform:
            translate(91px, 58px)
            rotate(180deg);
    }

    50% {
        transform:
            translate(68px, 43px)
            rotate(295deg);
    }
}

@keyframes Loader-fragment-eight {
    0%,
    100% {
        transform:
            translate(48px, 97px)
            rotate(210deg);
    }

    50% {
        transform:
            translate(37px, 73px)
            rotate(325deg);
    }
}

@keyframes Loader-fragment-nine {
    0%,
    100% {
        transform:
            translate(-8px, 109px)
            rotate(240deg);
    }

    50% {
        transform:
            translate(-3px, 80px)
            rotate(355deg);
    }
}

@keyframes Loader-fragment-ten {
    0%,
    100% {
        transform:
            translate(-57px, 93px)
            rotate(270deg);
    }

    50% {
        transform:
            translate(-43px, 71px)
            rotate(385deg);
    }
}

@keyframes Loader-fragment-eleven {
    0%,
    100% {
        transform:
            translate(-95px, 54px)
            rotate(300deg);
    }

    50% {
        transform:
            translate(-72px, 40px)
            rotate(415deg);
    }
}

@keyframes Loader-fragment-twelve {
    0%,
    100% {
        transform:
            translate(-108px, -4px)
            rotate(330deg);
    }

    50% {
        transform:
            translate(-78px, -1px)
            rotate(445deg);
    }
}

@keyframes Loader-particle-one {
    0% {
        opacity: 0;
        transform: translate(-35px, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-122px, -54px) scale(1);
    }
}

@keyframes Loader-particle-two {
    0% {
        opacity: 0;
        transform: translate(35px, 0) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(120px, -57px) scale(1);
    }
}

@keyframes Loader-particle-three {
    0% {
        opacity: 0;
        transform: translate(-32px, -10px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-128px, 8px) scale(1.1);
    }
}

@keyframes Loader-particle-four {
    0% {
        opacity: 0;
        transform: translate(32px, -10px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(128px, 12px) scale(1.1);
    }
}

@keyframes Loader-particle-five {
    0% {
        opacity: 0;
        transform: translate(-30px, 5px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-104px, 79px) scale(1);
    }
}

@keyframes Loader-particle-six {
    0% {
        opacity: 0;
        transform: translate(30px, 5px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(104px, 82px) scale(1);
    }
}

@keyframes Loader-particle-seven {
    0% {
        opacity: 0;
        transform: translate(-22px, -20px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-78px, -105px) scale(1.1);
    }
}

@keyframes Loader-particle-eight {
    0% {
        opacity: 0;
        transform: translate(22px, -20px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(81px, -104px) scale(1.1);
    }
}

@keyframes Loader-particle-nine {
    0% {
        opacity: 0;
        transform: translate(-20px, 22px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-72px, 109px) scale(1);
    }
}

@keyframes Loader-particle-ten {
    0% {
        opacity: 0;
        transform: translate(20px, 22px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(74px, 111px) scale(1);
    }
}

@keyframes Loader-particle-eleven {
    0% {
        opacity: 0;
        transform: translate(-36px, 2px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-132px, -24px) scale(1);
    }
}

@keyframes Loader-particle-twelve {
    0% {
        opacity: 0;
        transform: translate(36px, 2px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(132px, -21px) scale(1);
    }
}

@keyframes Loader-particle-thirteen {
    0% {
        opacity: 0;
        transform: translate(-25px, 15px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-115px, 61px) scale(1);
    }
}

@keyframes Loader-particle-fourteen {
    0% {
        opacity: 0;
        transform: translate(25px, 15px) scale(0.25);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(115px, 64px) scale(1);
    }
}

@keyframes Loader-particle-fifteen {
    0% {
        opacity: 0;
        transform: translate(-15px, -26px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-48px, -126px) scale(1.1);
    }
}

@keyframes Loader-particle-sixteen {
    0% {
        opacity: 0;
        transform: translate(15px, -26px) scale(0.3);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(50px, -126px) scale(1.1);
    }
}

@keyframes Loader-pulse {
    0% {
        opacity: 0.8;
        transform:
            translate(-50%, -50%)
            scale(0.5);
    }

    60% {
        opacity: 0.22;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(3);
    }
}

@keyframes Loader-shell {
    0%,
    100% {
        transform:
            translate(-50%, -50%)
            scale(0.94);
    }

    50% {
        transform:
            translate(-50%, -50%)
            scale(1.06);
    }
}

@keyframes Loader-core-ring-one {
    to {
        transform: rotate(360deg);
    }
}

@keyframes Loader-core-ring-two {
    to {
        transform: rotate(-360deg);
    }
}

@keyframes Loader-core-ring-three {
    from {
        opacity: 0.35;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1.1);
    }
}

@keyframes Loader-core-breathe {
    from {
        transform: scale(0.92);
    }

    to {
        transform: scale(1.08);
    }
}

@keyframes Loader-core-tilt {
    0%,
    100% {
        rotate: -2deg;
    }

    50% {
        rotate: 2deg;
    }
}

@keyframes Loader-core-glow {
    from {
        opacity: 0.35;
        transform: scale(0.86);
    }

    to {
        opacity: 1;
        transform: scale(1.3);
    }
}

@keyframes Loader-core-spark {
    from {
        opacity: 0.45;
        transform:
            translate(-50%, -50%)
            rotate(45deg)
            scale(0.65);
    }

    to {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            rotate(135deg)
            scale(1.25);
    }
}`,
  },
];
