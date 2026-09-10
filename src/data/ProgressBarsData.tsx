import "../pages/All.css";

export const progressBars = [
  {
    id: 2839,
    name: "Gradient Progress Bar",
    preview: (
      <div className="progress-2839">
        <div className="progress-2839-track">
          <div className="progress-2839-fill"></div>
        </div>
        <span>72%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>72%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #111827;
}`,
  },
  {
    id: 2840,
    name: "Animated Progress Bar",
    preview: (
      <div className="progress-2840">
        <div className="progress-2840-track">
          <div className="progress-2840-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 64%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
    animation: progressAnimation 1.8s ease-out;
}
@keyframes progressAnimation {
    from {
        width: 0;
    }
    to {
        width: 64%;
    }
}`,
  },
  {
    id: 2841,
    name: "Segmented Progress Bar",
    preview: (
      <div className="progress-2841">
        <span className="active"></span>
        <span className="active"></span>
        <span className="active"></span>
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ),
    html: `<div class="Progress">
    <span class="Progress__segment active"></span>
    <span class="Progress__segment active"></span>
    <span class="Progress__segment active"></span>
    <span class="Progress__segment active"></span>
    <span class="Progress__segment"></span>
    <span class="Progress__segment"></span>
    <span class="Progress__segment"></span>
    <span class="Progress__segment"></span>
</div>`,
    css: `.Progress {
    display: flex;
    gap: 5px;
    width: 100%;
    max-width: 500px;
}
.Progress__segment {
    flex: 1;
    height: 12px;
    border-radius: 5px;
    background: #e5e7eb;
}
.Progress__segment.active {
    background: #8b5cf6;
}`,
  },
  {
    id: 2842,
    name: "Circular Progress",
    preview: (
      <div className="progress-2842">
        <div className="progress-2842-ring">
          <span>82%</span>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__ring">
        <span>82%</span>
    </div>
</div>`,
    css: `.Progress {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Progress__ring {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background: conic-gradient(#ec4899 0deg 295deg, #e5e7eb 295deg 360deg);
}
.Progress__ring::before {
    content: "";
    position: absolute;
    width: 79px;
    height: 79px;
    border-radius: 50%;
    background: #ffffff;
}
.Progress__ring span {
    position: relative;
    z-index: 1;
    font-size: 18px;
    font-weight: 700;
    color: #111827;
}`,
  },
  {
    id: 2843,
    name: "Neon Progress Bar",
    preview: (
      <div className="progress-2843">
        <div className="progress-2843-label">
          <span>Loading</span>
          <strong>91%</strong>
        </div>
        <div className="progress-2843-track">
          <div className="progress-2843-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__label">
        <span>Loading</span>
        <strong>91%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
    padding: 18px;
    border-radius: 14px;
    background: #09090b;
}
.Progress__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 13px;
}
.Progress__label strong {
    color: #22d3ee;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #27272a;
}
.Progress__fill {
    width: 91%;
    height: 100%;
    border-radius: inherit;
    background: #22d3ee;
    box-shadow: 0 0 14px rgba(34, 211, 238, 0.8);
}`,
  },
  {
    id: 2844,
    name: "Gradient Circle Progress",
    preview: (
      <div className="progress-2844">
        <div className="progress-2844-circle">
          <span>68%</span>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__circle">
        <span>68%</span>
    </div>
</div>`,
    css: `.Progress {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Progress__circle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: conic-gradient(#06b6d4 0deg 245deg, #1f2937 245deg 360deg);
}
.Progress__circle::before {
    content: "";
    position: absolute;
    inset: 9px;
    border-radius: 50%;
    background: #111827;
}
.Progress__circle span {
    position: relative;
    z-index: 1;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
}`,
  },
  {
    id: 2845,
    name: "Minimal Progress Bar",
    preview: (
      <div className="progress-2845">
        <div className="progress-2845-track">
          <div className="progress-2845-fill"></div>
        </div>
        <span>45%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Progress</span>
        <strong>45%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 13px;
    color: #374151;
}
.Progress__header strong {
    color: #111827;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 45%;
    height: 100%;
    border-radius: inherit;
    background: #111827;
}`,
  },
  {
    id: 2846,
    name: "Striped Progress Bar",
    preview: (
      <div className="progress-2846">
        <div className="progress-2846-track">
          <div className="progress-2846-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 14px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 78%;
    height: 100%;
    border-radius: inherit;
    background-color: #2563eb;
    background-image: linear-gradient(
        45deg,
        rgba(255,255,255,0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255,255,255,0.2) 50%,
        rgba(255,255,255,0.2) 75%,
        transparent 75%
    );
    background-size: 20px 20px;
    animation: progressStripe 1s linear infinite;
}
@keyframes progressStripe {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 20px 0;
    }
}`,
  },
  {
    id: 2847,
    name: "Success Progress Bar",
    preview: (
      <div className="progress-2847">
        <div className="progress-2847-header">
          <span>Upload complete</span>
          <strong>100%</strong>
        </div>
        <div className="progress-2847-track">
          <div className="progress-2847-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Upload complete</span>
        <strong>100%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 13px;
    color: #374151;
}
.Progress__header strong {
    color: #16a34a;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #dcfce7;
}
.Progress__fill {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: #16a34a;
}`,
  },
  {
    id: 2848,
    name: "Warning Progress Bar",
    preview: (
      <div className="progress-2848">
        <div className="progress-2848-header">
          <span>Storage</span>
          <strong>84%</strong>
        </div>
        <div className="progress-2848-track">
          <div className="progress-2848-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Storage</span>
        <strong>84%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 13px;
    color: #374151;
}
.Progress__header strong {
    color: #d97706;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #fef3c7;
}
.Progress__fill {
    width: 84%;
    height: 100%;
    border-radius: inherit;
    background: #f59e0b;
}`,
  },
  {
    id: 2849,
    name: "Danger Progress Bar",
    preview: (
      <div className="progress-2849">
        <div className="progress-2849-header">
          <span>Disk usage</span>
          <strong>93%</strong>
        </div>
        <div className="progress-2849-track">
          <div className="progress-2849-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Disk usage</span>
        <strong>93%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 13px;
    color: #374151;
}
.Progress__header strong {
    color: #dc2626;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #fee2e2;
}
.Progress__fill {
    width: 93%;
    height: 100%;
    border-radius: inherit;
    background: #dc2626;
}`,
  },
  {
    id: 2850,
    name: "Glow Progress Bar",
    preview: (
      <div className="progress-2850">
        <div className="progress-2850-track">
          <div className="progress-2850-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 16px;
    background: #0f172a;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #1e293b;
}
.Progress__fill {
    width: 76%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    box-shadow: 0 0 18px rgba(99,102,241,0.8);
}`,
  },
  {
    id: 2851,
    name: "Double Layer Progress",
    preview: (
      <div className="progress-2851">
        <div className="progress-2851-track">
          <div className="progress-2851-fill"></div>
          <div className="progress-2851-highlight"></div>
        </div>
        <span>63%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
        <div class="Progress__highlight"></div>
    </div>
    <span>63%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    position: relative;
    height: 13px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 63%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #0ea5e9, #2563eb);
}
.Progress__highlight {
    position: absolute;
    top: 2px;
    left: 3px;
    width: 56%;
    height: 3px;
    border-radius: 999px;
    background: rgba(255,255,255,0.45);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 700;
    color: #475569;
}`,
  },
  {
    id: 2852,
    name: "Steps Progress Bar",
    preview: (
      <div className="progress-2852">
        <div className="progress-2852-line">
          <span className="active"></span>
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
        <div className="progress-2852-labels">
          <span>Account</span>
          <span>Profile</span>
          <span>Details</span>
          <span>Review</span>
          <span>Done</span>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__line">
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
        <span></span>
    </div>
    <div class="Progress__labels">
        <span>Account</span>
        <span>Profile</span>
        <span>Details</span>
        <span>Review</span>
        <span>Done</span>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__line {
    display: flex;
    gap: 6px;
}
.Progress__line span {
    flex: 1;
    height: 6px;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__line span.active {
    background: #6366f1;
}
.Progress__labels {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 9px;
    color: #6b7280;
}`,
  },
  {
    id: 2853,
    name: "Wave Progress Bar",
    preview: (
      <div className="progress-2853">
        <div className="progress-2853-track">
          <div className="progress-2853-fill"></div>
        </div>
        <span>57%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>57%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 14px;
    overflow: hidden;
    border-radius: 999px;
    background: #dbeafe;
}
.Progress__fill {
    width: 57%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
        135deg,
        #3b82f6 25%,
        #60a5fa 25%,
        #60a5fa 50%,
        #3b82f6 50%,
        #3b82f6 75%,
        #60a5fa 75%
    );
    background-size: 24px 24px;
    animation: progressWave 1.2s linear infinite;
}
@keyframes progressWave {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 24px 0;
    }
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 700;
    color: #2563eb;
}`,
  },
  {
    id: 2854,
    name: "Premium Gradient Progress",
    preview: (
      <div className="progress-2854">
        <div className="progress-2854-header">
          <span>Performance</span>
          <strong>96%</strong>
        </div>
        <div className="progress-2854-track">
          <div className="progress-2854-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Performance</span>
        <strong>96%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
    padding: 18px;
    border-radius: 18px;
    background: #111827;
}
.Progress__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 13px;
}
.Progress__header strong {
    background: linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #1f2937;
}
.Progress__fill {
    width: 96%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #22d3ee, #8b5cf6, #ec4899);
    box-shadow: 0 0 16px rgba(139,92,246,0.65);
}`,
  },
  {
    id: 2855,
    name: "Red to Blue Gradient",
    preview: (
      <div className="progress-2855">
        <div className="progress-2855-track">
          <div className="progress-2855-fill"></div>
        </div>
        <span>78%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>78%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 78%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #ef4444, #3b82f6);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #374151;
}`,
  },
  {
    id: 2856,
    name: "Red to Green Gradient",
    preview: (
      <div className="progress-2856">
        <div className="progress-2856-track">
          <div className="progress-2856-fill"></div>
        </div>
        <span>64%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>64%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 64%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #ef4444, #22c55e);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #374151;
}`,
  },
  {
    id: 2857,
    name: "Blue to Green Gradient",
    preview: (
      <div className="progress-2857">
        <div className="progress-2857-track">
          <div className="progress-2857-fill"></div>
        </div>
        <span>86%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>86%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 86%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #3b82f6, #22c55e);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #374151;
}`,
  },
  {
    id: 2858,
    name: "Purple Gradient",
    preview: (
      <div className="progress-2858">
        <div className="progress-2858-track">
          <div className="progress-2858-fill"></div>
        </div>
        <span>71%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>71%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #ede9fe;
}
.Progress__fill {
    width: 71%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #7c3aed, #c026d3, #ec4899);
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #6d28d9;
}`,
  },
  {
    id: 2859,
    name: "Rainbow Gradient",
    preview: (
      <div className="progress-2859">
        <div className="progress-2859-track">
          <div className="progress-2859-fill"></div>
        </div>
        <span>92%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>92%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    width: 100%;
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 92%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
        90deg,
        #ef4444,
        #f97316,
        #eab308,
        #22c55e,
        #06b6d4,
        #3b82f6,
        #8b5cf6,
        #ec4899
    );
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #374151;
}`,
  },
];
