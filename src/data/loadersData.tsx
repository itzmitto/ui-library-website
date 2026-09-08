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
];
