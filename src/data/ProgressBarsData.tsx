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
  {
    id: 2860,
    name: "Classic Progress Bar",
    preview: (
      <div className="progress-2860">
        <div className="progress-2860-track">
          <div className="progress-2860-fill"></div>
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
    height: 12px;
    overflow: hidden;
    border-radius: 6px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 55%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2861,
    name: "Thin Progress Bar",
    preview: (
      <div className="progress-2861">
        <div className="progress-2861-track">
          <div className="progress-2861-fill"></div>
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
    height: 4px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: #111827;
}`,
  },
  {
    id: 2862,
    name: "Large Progress Bar",
    preview: (
      <div className="progress-2862">
        <div className="progress-2862-track">
          <div className="progress-2862-fill"></div>
        </div>
        <span>61%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>61%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 20px;
    overflow: hidden;
    border-radius: 6px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 61%;
    height: 100%;
    border-radius: inherit;
    background: #3b82f6;
}
.Progress span {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #374151;
}`,
  },
  {
    id: 2863,
    name: "Rounded Progress Bar",
    preview: (
      <div className="progress-2863">
        <div className="progress-2863-track">
          <div className="progress-2863-fill"></div>
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
    background: #dbeafe;
}
.Progress__fill {
    width: 74%;
    height: 100%;
    border-radius: inherit;
    background: #3b82f6;
}`,
  },
  {
    id: 2864,
    name: "Labeled Progress Bar",
    preview: (
      <div className="progress-2864">
        <div className="progress-2864-header">
          <span>Download</span>
          <strong>48%</strong>
        </div>
        <div className="progress-2864-track">
          <div className="progress-2864-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Download</span>
        <strong>48%</strong>
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
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 48%;
    height: 100%;
    border-radius: inherit;
    background: #4f46e5;
}`,
  },
  {
    id: 2865,
    name: "Soft Progress Bar",
    preview: (
      <div className="progress-2865">
        <div className="progress-2865-track">
          <div className="progress-2865-fill"></div>
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
    height: 11px;
    overflow: hidden;
    border-radius: 999px;
    background: #f3f4f6;
}
.Progress__fill {
    width: 67%;
    height: 100%;
    border-radius: inherit;
    background: #93c5fd;
}`,
  },
  {
    id: 2866,
    name: "Purple Progress Bar",
    preview: (
      <div className="progress-2866">
        <div className="progress-2866-track">
          <div className="progress-2866-fill"></div>
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
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #ede9fe;
}
.Progress__fill {
    width: 58%;
    height: 100%;
    border-radius: inherit;
    background: #7c3aed;
}`,
  },
  {
    id: 2867,
    name: "Green Progress Bar",
    preview: (
      <div className="progress-2867">
        <div className="progress-2867-track">
          <div className="progress-2867-fill"></div>
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
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #dcfce7;
}
.Progress__fill {
    width: 81%;
    height: 100%;
    border-radius: inherit;
    background: #22c55e;
}`,
  },
  {
    id: 2868,
    name: "Orange Progress Bar",
    preview: (
      <div className="progress-2868">
        <div className="progress-2868-track">
          <div className="progress-2868-fill"></div>
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
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #ffedd5;
}
.Progress__fill {
    width: 69%;
    height: 100%;
    border-radius: inherit;
    background: #f97316;
}`,
  },
  {
    id: 2869,
    name: "Red Progress Bar",
    preview: (
      <div className="progress-2869">
        <div className="progress-2869-track">
          <div className="progress-2869-fill"></div>
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
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #fee2e2;
}
.Progress__fill {
    width: 42%;
    height: 100%;
    border-radius: inherit;
    background: #ef4444;
}`,
  },
  {
    id: 2870,
    name: "Dual Color Progress",
    preview: (
      <div className="progress-2870">
        <div className="progress-2870-track">
          <div className="progress-2870-fill"></div>
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
    height: 12px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 73%;
    height: 100%;
    border-radius: inherit;
    background: #06b6d4;
    box-shadow: inset -45px 0 0 #3b82f6;
}`,
  },
  {
    id: 2871,
    name: "Inset Progress Bar",
    preview: (
      <div className="progress-2871">
        <div className="progress-2871-track">
          <div className="progress-2871-fill"></div>
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
    height: 15px;
    padding: 2px;
    overflow: hidden;
    border-radius: 999px;
    background: #d1d5db;
}
.Progress__fill {
    width: 62%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2872,
    name: "Flat Progress Bar",
    preview: (
      <div className="progress-2872">
        <div className="progress-2872-track">
          <div className="progress-2872-fill"></div>
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
    height: 11px;
    overflow: hidden;
    border-radius: 2px;
    background: #d1d5db;
}
.Progress__fill {
    width: 88%;
    height: 100%;
    background: #111827;
}`,
  },
  {
    id: 2873,
    name: "Border Progress Bar",
    preview: (
      <div className="progress-2873">
        <div className="progress-2873-track">
          <div className="progress-2873-fill"></div>
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
    padding: 2px;
    overflow: hidden;
    border: 1px solid #cbd5e1;
    border-radius: 999px;
    background: #ffffff;
}
.Progress__fill {
    width: 71%;
    height: 100%;
    border-radius: inherit;
    background: #475569;
}`,
  },
  {
    id: 2874,
    name: "Compact Progress Bar",
    preview: (
      <div className="progress-2874">
        <div className="progress-2874-track">
          <div className="progress-2874-fill"></div>
        </div>
        <span>39%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>39%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 420px;
}
.Progress__track {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 39%;
    height: 100%;
    border-radius: inherit;
    background: #64748b;
}
.Progress span {
    display: block;
    margin-top: 6px;
    font-size: 11px;
    color: #64748b;
}`,
  },
  {
    id: 2875,
    name: "Thick Progress Bar",
    preview: (
      <div className="progress-2875">
        <div className="progress-2875-track">
          <div className="progress-2875-fill"></div>
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
    height: 24px;
    overflow: hidden;
    border-radius: 8px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 56%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2876,
    name: "Centered Progress Bar",
    preview: (
      <div className="progress-2876">
        <div className="progress-2876-track">
          <div className="progress-2876-fill"></div>
        </div>
        <span>80%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>80%</span>
</div>`,
    css: `.Progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.Progress__track {
    width: 80%;
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 80%;
    height: 100%;
    border-radius: inherit;
    background: #4f46e5;
}
.Progress span {
    margin-top: 7px;
    font-size: 12px;
    font-weight: 700;
    color: #4f46e5;
}`,
  },
  {
    id: 2877,
    name: "Shadow Progress Bar",
    preview: (
      <div className="progress-2877">
        <div className="progress-2877-track">
          <div className="progress-2877-fill"></div>
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
    height: 11px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 83%;
    height: 100%;
    border-radius: inherit;
    background: #8b5cf6;
    box-shadow: 0 3px 10px rgba(139, 92, 246, 0.35);
}`,
  },
  {
    id: 2878,
    name: "Status Progress Bar",
    preview: (
      <div className="progress-2878">
        <div className="progress-2878-header">
          <span>Processing</span>
          <span className="status">In progress</span>
        </div>
        <div className="progress-2878-track">
          <div className="progress-2878-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Processing</span>
        <span class="Progress__status">In progress</span>
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
    font-size: 12px;
    color: #374151;
}
.Progress__status {
    color: #2563eb;
    font-weight: 600;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #dbeafe;
}
.Progress__fill {
    width: 66%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2879,
    name: "Final Progress Bar",
    preview: (
      <div className="progress-2879">
        <div className="progress-2879-header">
          <span>Project progress</span>
          <strong>87%</strong>
        </div>
        <div className="progress-2879-track">
          <div className="progress-2879-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Project progress</span>
        <strong>87%</strong>
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
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 87%;
    height: 100%;
    border-radius: inherit;
    background: #334155;
}`,
  },
  {
    id: 2880,
    name: "Enterprise Progress",
    preview: (
      <div className="progress-2880">
        <div className="progress-2880-top">
          <span>Project status</span>
          <strong>74%</strong>
        </div>
        <div className="progress-2880-track">
          <div className="progress-2880-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__top">
        <span>Project status</span>
        <strong>74%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #334155;
    font-size: 13px;
}
.Progress__top strong {
    color: #0f172a;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 74%;
    height: 100%;
    background: #0f172a;
}`,
  },
  {
    id: 2881,
    name: "Dashboard Progress",
    preview: (
      <div className="progress-2881">
        <div className="progress-2881-label">
          <span>Monthly target</span>
          <strong>68%</strong>
        </div>
        <div className="progress-2881-track">
          <div className="progress-2881-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__label">
        <span>Monthly target</span>
        <strong>68%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;
    color: #475569;
    font-size: 13px;
}
.Progress__label strong {
    color: #2563eb;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 6px;
    background: #eff6ff;
}
.Progress__fill {
    width: 68%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2882,
    name: "Team Progress",
    preview: (
      <div className="progress-2882">
        <div className="progress-2882-header">
          <span>Team completion</span>
          <strong>82%</strong>
        </div>
        <div className="progress-2882-track">
          <div className="progress-2882-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Team completion</span>
        <strong>82%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #16a34a;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #dcfce7;
}
.Progress__fill {
    width: 82%;
    height: 100%;
    border-radius: inherit;
    background: #16a34a;
}`,
  },
  {
    id: 2883,
    name: "Billing Progress",
    preview: (
      <div className="progress-2883">
        <div className="progress-2883-track">
          <div className="progress-2883-fill"></div>
        </div>
        <span>Invoice processing 56%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>Invoice processing 56%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 56%;
    height: 100%;
    border-radius: inherit;
    background: #475569;
}
.Progress span {
    display: block;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}`,
  },
  {
    id: 2884,
    name: "Analytics Progress",
    preview: (
      <div className="progress-2884">
        <div className="progress-2884-header">
          <span>Conversion rate</span>
          <strong>91%</strong>
        </div>
        <div className="progress-2884-track">
          <div className="progress-2884-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Conversion rate</span>
        <strong>91%</strong>
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
    margin-bottom: 9px;
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #7c3aed;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 5px;
    background: #f3e8ff;
}
.Progress__fill {
    width: 91%;
    height: 100%;
    border-radius: inherit;
    background: #7c3aed;
}`,
  },
  {
    id: 2885,
    name: "Task Progress",
    preview: (
      <div className="progress-2885">
        <div className="progress-2885-header">
          <span>Tasks completed</span>
          <strong>43%</strong>
        </div>
        <div className="progress-2885-track">
          <div className="progress-2885-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Tasks completed</span>
        <strong>43%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 43%;
    height: 100%;
    background: #64748b;
}`,
  },
  {
    id: 2886,
    name: "Milestone Progress",
    preview: (
      <div className="progress-2886">
        <div className="progress-2886-track">
          <div className="progress-2886-fill"></div>
        </div>
        <div className="progress-2886-bottom">
          <span>Milestone 3 of 4</span>
          <strong>75%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__bottom">
        <span>Milestone 3 of 4</span>
        <strong>75%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 75%;
    height: 100%;
    border-radius: inherit;
    background: #0ea5e9;
}
.Progress__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__bottom strong {
    color: #0ea5e9;
}`,
  },
  {
    id: 2887,
    name: "Profile Completion",
    preview: (
      <div className="progress-2887">
        <div className="progress-2887-title">Profile completion</div>
        <div className="progress-2887-track">
          <div className="progress-2887-fill"></div>
        </div>
        <div className="progress-2887-note">7 of 10 sections completed</div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__title">Profile completion</div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__note">7 of 10 sections completed</div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__title {
    margin-bottom: 8px;
    color: #1e293b;
    font-size: 13px;
    font-weight: 600;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 70%;
    height: 100%;
    border-radius: inherit;
    background: #10b981;
}
.Progress__note {
    margin-top: 7px;
    color: #64748b;
    font-size: 11px;
}`,
  },
  {
    id: 2888,
    name: "Performance Progress",
    preview: (
      <div className="progress-2888">
        <div className="progress-2888-track">
          <div className="progress-2888-fill"></div>
        </div>
        <div className="progress-2888-meta">
          <span>Performance</span>
          <strong>88%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__meta">
        <span>Performance</span>
        <strong>88%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 88%;
    height: 100%;
    border-radius: inherit;
    background: #14b8a6;
}
.Progress__meta {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__meta strong {
    color: #0f766e;
}`,
  },
  {
    id: 2889,
    name: "Capacity Progress",
    preview: (
      <div className="progress-2889">
        <div className="progress-2889-header">
          <span>Server capacity</span>
          <strong>63%</strong>
        </div>
        <div className="progress-2889-track">
          <div className="progress-2889-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Server capacity</span>
        <strong>63%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 5px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 63%;
    height: 100%;
    background: #334155;
}`,
  },
  {
    id: 2890,
    name: "Storage Progress",
    preview: (
      <div className="progress-2890">
        <div className="progress-2890-track">
          <div className="progress-2890-fill"></div>
        </div>
        <span>420 GB of 500 GB used</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>420 GB of 500 GB used</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 11px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 84%;
    height: 100%;
    border-radius: inherit;
    background: #f59e0b;
}
.Progress span {
    display: block;
    margin-top: 8px;
    color: #78716c;
    font-size: 11px;
}`,
  },
  {
    id: 2891,
    name: "Order Progress",
    preview: (
      <div className="progress-2891">
        <div className="progress-2891-steps">
          <span className="active"></span>
          <span className="active"></span>
          <span className="active"></span>
          <span></span>
        </div>
        <div className="progress-2891-label">
          <span>Shipped</span>
          <strong>Step 3 of 4</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__steps">
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
    </div>
    <div class="Progress__label">
        <span>Shipped</span>
        <strong>Step 3 of 4</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__steps {
    display: flex;
    gap: 6px;
}
.Progress__steps span {
    flex: 1;
    height: 7px;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__steps span.active {
    background: #2563eb;
}
.Progress__label {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__label strong {
    color: #2563eb;
}`,
  },
  {
    id: 2892,
    name: "Loading Progress",
    preview: (
      <div className="progress-2892">
        <div className="progress-2892-head">
          <span>Loading resources</span>
          <strong>36%</strong>
        </div>
        <div className="progress-2892-track">
          <div className="progress-2892-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__head">
        <span>Loading resources</span>
        <strong>36%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #475569;
    font-size: 12px;
}
.Progress__head strong {
    color: #0284c7;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e0f2fe;
}
.Progress__fill {
    width: 36%;
    height: 100%;
    border-radius: inherit;
    background: #0284c7;
}`,
  },
  {
    id: 2893,
    name: "Goal Progress",
    preview: (
      <div className="progress-2893">
        <div className="progress-2893-header">
          <span>Quarterly goal</span>
          <strong>79%</strong>
        </div>
        <div className="progress-2893-track">
          <div className="progress-2893-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Quarterly goal</span>
        <strong>79%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #0891b2;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #cffafe;
}
.Progress__fill {
    width: 79%;
    height: 100%;
    border-radius: inherit;
    background: #0891b2;
}`,
  },
  {
    id: 2894,
    name: "Review Progress",
    preview: (
      <div className="progress-2894">
        <div className="progress-2894-header">
          <span>Review completion</span>
          <strong>52%</strong>
        </div>
        <div className="progress-2894-track">
          <div className="progress-2894-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Review completion</span>
        <strong>52%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #475569;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 52%;
    height: 100%;
    background: #475569;
}`,
  },
  {
    id: 2895,
    name: "Neutral Progress Bar",
    preview: (
      <div className="progress-2895">
        <div className="progress-2895-track">
          <div className="progress-2895-fill"></div>
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
    height: 10px;
    overflow: hidden;
    border-radius: 3px;
    background: #f1f5f9;
}
.Progress__fill {
    width: 65%;
    height: 100%;
    background: #64748b;
}`,
  },
  {
    id: 2896,
    name: "Compact Dashboard",
    preview: (
      <div className="progress-2896">
        <div className="progress-2896-header">
          <span>API usage</span>
          <strong>61%</strong>
        </div>
        <div className="progress-2896-track">
          <div className="progress-2896-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>API usage</span>
        <strong>61%</strong>
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
    margin-bottom: 7px;
    color: #64748b;
    font-size: 12px;
}
.Progress__header strong {
    color: #0f172a;
}
.Progress__track {
    height: 6px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 61%;
    height: 100%;
    border-radius: inherit;
    background: #0f172a;
}`,
  },
  {
    id: 2897,
    name: "Revenue Progress",
    preview: (
      <div className="progress-2897">
        <div className="progress-2897-header">
          <span>Revenue goal</span>
          <strong>73%</strong>
        </div>
        <div className="progress-2897-track">
          <div className="progress-2897-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Revenue goal</span>
        <strong>73%</strong>
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
    color: #475569;
    font-size: 13px;
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
    width: 73%;
    height: 100%;
    border-radius: inherit;
    background: #16a34a;
}`,
  },
  {
    id: 2898,
    name: "Deployment Progress",
    preview: (
      <div className="progress-2898">
        <div className="progress-2898-header">
          <span>Deployment</span>
          <strong>29%</strong>
        </div>
        <div className="progress-2898-track">
          <div className="progress-2898-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Deployment</span>
        <strong>29%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #0284c7;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e0f2fe;
}
.Progress__fill {
    width: 29%;
    height: 100%;
    border-radius: inherit;
    background: #0284c7;
}`,
  },
  {
    id: 2899,
    name: "Subscription Progress",
    preview: (
      <div className="progress-2899">
        <div className="progress-2899-track">
          <div className="progress-2899-fill"></div>
        </div>
        <div className="progress-2899-text">
          <span>Subscription usage</span>
          <strong>67%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__text">
        <span>Subscription usage</span>
        <strong>67%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 67%;
    height: 100%;
    border-radius: inherit;
    background: #6366f1;
}
.Progress__text {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__text strong {
    color: #4f46e5;
}`,
  },
  {
    id: 2900,
    name: "Project Timeline",
    preview: (
      <div className="progress-2900">
        <div className="progress-2900-track">
          <div className="progress-2900-fill"></div>
        </div>
        <span>Week 8 of 12</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>Week 8 of 12</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 67%;
    height: 100%;
    border-radius: inherit;
    background: #334155;
}
.Progress span {
    display: block;
    margin-top: 7px;
    color: #64748b;
    font-size: 11px;
}`,
  },
  {
    id: 2901,
    name: "Customer Journey",
    preview: (
      <div className="progress-2901">
        <div className="progress-2901-track">
          <div className="progress-2901-fill"></div>
        </div>
        <div className="progress-2901-label">
          <span>Customer journey</span>
          <strong>81%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__label">
        <span>Customer journey</span>
        <strong>81%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 81%;
    height: 100%;
    border-radius: inherit;
    background: #0f766e;
}
.Progress__label {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__label strong {
    color: #0f766e;
}`,
  },
  {
    id: 2902,
    name: "Budget Progress",
    preview: (
      <div className="progress-2902">
        <div className="progress-2902-header">
          <span>Budget used</span>
          <strong>47%</strong>
        </div>
        <div className="progress-2902-track">
          <div className="progress-2902-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Budget used</span>
        <strong>47%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #b45309;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #fef3c7;
}
.Progress__fill {
    width: 47%;
    height: 100%;
    border-radius: inherit;
    background: #d97706;
}`,
  },
  {
    id: 2903,
    name: "Onboarding Progress",
    preview: (
      <div className="progress-2903">
        <div className="progress-2903-track">
          <div className="progress-2903-fill"></div>
        </div>
        <span>Step 4 of 5</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>Step 4 of 5</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e7eb;
}
.Progress__fill {
    width: 80%;
    height: 100%;
    border-radius: inherit;
    background: #7c3aed;
}
.Progress span {
    display: block;
    margin-top: 7px;
    color: #6b7280;
    font-size: 11px;
}`,
  },
  {
    id: 2904,
    name: "Content Progress",
    preview: (
      <div className="progress-2904">
        <div className="progress-2904-header">
          <span>Content reviewed</span>
          <strong>58%</strong>
        </div>
        <div className="progress-2904-track">
          <div className="progress-2904-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Content reviewed</span>
        <strong>58%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 58%;
    height: 100%;
    background: #475569;
}`,
  },
  {
    id: 2905,
    name: "Quality Progress",
    preview: (
      <div className="progress-2905">
        <div className="progress-2905-top">
          <span>Quality score</span>
          <strong>94%</strong>
        </div>
        <div className="progress-2905-track">
          <div className="progress-2905-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__top">
        <span>Quality score</span>
        <strong>94%</strong>
    </div>
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #475569;
    font-size: 13px;
}
.Progress__top strong {
    color: #059669;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #d1fae5;
}
.Progress__fill {
    width: 94%;
    height: 100%;
    border-radius: inherit;
    background: #059669;
}`,
  },
  {
    id: 2906,
    name: "Usage Progress",
    preview: (
      <div className="progress-2906">
        <div className="progress-2906-track">
          <div className="progress-2906-fill"></div>
        </div>
        <div className="progress-2906-info">
          <span>Usage</span>
          <strong>69%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__info">
        <span>Usage</span>
        <strong>69%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 69%;
    height: 100%;
    border-radius: inherit;
    background: #0284c7;
}
.Progress__info {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    color: #64748b;
    font-size: 11px;
}
.Progress__info strong {
    color: #0369a1;
}`,
  },
  {
    id: 2907,
    name: "Migration Progress",
    preview: (
      <div className="progress-2907">
        <div className="progress-2907-header">
          <span>Data migration</span>
          <strong>46%</strong>
        </div>
        <div className="progress-2907-track">
          <div className="progress-2907-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Data migration</span>
        <strong>46%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #9333ea;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #f3e8ff;
}
.Progress__fill {
    width: 46%;
    height: 100%;
    border-radius: inherit;
    background: #9333ea;
}`,
  },
  {
    id: 2908,
    name: "Sprint Progress",
    preview: (
      <div className="progress-2908">
        <div className="progress-2908-track">
          <div className="progress-2908-fill"></div>
        </div>
        <span>Sprint completion 72%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>Sprint completion 72%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}
.Progress span {
    display: block;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}`,
  },
  {
    id: 2909,
    name: "Readiness Progress",
    preview: (
      <div className="progress-2909">
        <div className="progress-2909-header">
          <span>Launch readiness</span>
          <strong>87%</strong>
        </div>
        <div className="progress-2909-track">
          <div className="progress-2909-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Launch readiness</span>
        <strong>87%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #15803d;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #dcfce7;
}
.Progress__fill {
    width: 87%;
    height: 100%;
    border-radius: inherit;
    background: #15803d;
}`,
  },
  {
    id: 2910,
    name: "Data Sync Progress",
    preview: (
      <div className="progress-2910">
        <div className="progress-2910-header">
          <span>Data synchronization</span>
          <strong>33%</strong>
        </div>
        <div className="progress-2910-track">
          <div className="progress-2910-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Data synchronization</span>
        <strong>33%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #0891b2;
}
.Progress__track {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #cffafe;
}
.Progress__fill {
    width: 33%;
    height: 100%;
    border-radius: inherit;
    background: #0891b2;
}`,
  },
  {
    id: 2911,
    name: "Approval Progress",
    preview: (
      <div className="progress-2911">
        <div className="progress-2911-track">
          <div className="progress-2911-fill"></div>
        </div>
        <div className="progress-2911-meta">
          <span>Approval process</span>
          <strong>62%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__meta">
        <span>Approval process</span>
        <strong>62%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 62%;
    height: 100%;
    border-radius: inherit;
    background: #4f46e5;
}
.Progress__meta {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__meta strong {
    color: #4338ca;
}`,
  },
  {
    id: 2912,
    name: "Backup Progress",
    preview: (
      <div className="progress-2912">
        <div className="progress-2912-header">
          <span>Backup</span>
          <strong>71%</strong>
        </div>
        <div className="progress-2912-track">
          <div className="progress-2912-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Backup</span>
        <strong>71%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #475569;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 71%;
    height: 100%;
    background: #334155;
}`,
  },
  {
    id: 2913,
    name: "Training Progress",
    preview: (
      <div className="progress-2913">
        <div className="progress-2913-header">
          <span>Training completion</span>
          <strong>59%</strong>
        </div>
        <div className="progress-2913-track">
          <div className="progress-2913-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Training completion</span>
        <strong>59%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #2563eb;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #dbeafe;
}
.Progress__fill {
    width: 59%;
    height: 100%;
    border-radius: inherit;
    background: #2563eb;
}`,
  },
  {
    id: 2914,
    name: "Compliance Progress",
    preview: (
      <div className="progress-2914">
        <div className="progress-2914-track">
          <div className="progress-2914-fill"></div>
        </div>
        <span>Compliance score 96%</span>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <span>Compliance score 96%</span>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #dcfce7;
}
.Progress__fill {
    width: 96%;
    height: 100%;
    border-radius: inherit;
    background: #16a34a;
}
.Progress span {
    display: block;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}`,
  },
  {
    id: 2915,
    name: "Pipeline Progress",
    preview: (
      <div className="progress-2915">
        <div className="progress-2915-header">
          <span>Sales pipeline</span>
          <strong>76%</strong>
        </div>
        <div className="progress-2915-track">
          <div className="progress-2915-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Sales pipeline</span>
        <strong>76%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #7c3aed;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #ede9fe;
}
.Progress__fill {
    width: 76%;
    height: 100%;
    border-radius: inherit;
    background: #7c3aed;
}`,
  },
  {
    id: 2916,
    name: "Automation Progress",
    preview: (
      <div className="progress-2916">
        <div className="progress-2916-header">
          <span>Automation setup</span>
          <strong>48%</strong>
        </div>
        <div className="progress-2916-track">
          <div className="progress-2916-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Automation setup</span>
        <strong>48%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #0f766e;
}
.Progress__track {
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: #ccfbf1;
}
.Progress__fill {
    width: 48%;
    height: 100%;
    border-radius: inherit;
    background: #0f766e;
}`,
  },
  {
    id: 2917,
    name: "Security Progress",
    preview: (
      <div className="progress-2917">
        <div className="progress-2917-header">
          <span>Security checks</span>
          <strong>90%</strong>
        </div>
        <div className="progress-2917-track">
          <div className="progress-2917-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Security checks</span>
        <strong>90%</strong>
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
    color: #475569;
    font-size: 13px;
}
.Progress__header strong {
    color: #059669;
}
.Progress__track {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: #d1fae5;
}
.Progress__fill {
    width: 90%;
    height: 100%;
    border-radius: inherit;
    background: #059669;
}`,
  },
  {
    id: 2918,
    name: "Release Progress",
    preview: (
      <div className="progress-2918">
        <div className="progress-2918-track">
          <div className="progress-2918-fill"></div>
        </div>
        <div className="progress-2918-status">
          <span>Release preparation</span>
          <strong>85%</strong>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__track">
        <div class="Progress__fill"></div>
    </div>
    <div class="Progress__status">
        <span>Release preparation</span>
        <strong>85%</strong>
    </div>
</div>`,
    css: `.Progress {
    width: 100%;
    max-width: 500px;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 85%;
    height: 100%;
    border-radius: inherit;
    background: #1d4ed8;
}
.Progress__status {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #64748b;
    font-size: 11px;
}
.Progress__status strong {
    color: #1d4ed8;
}`,
  },
  {
    id: 2919,
    name: "Executive Progress",
    preview: (
      <div className="progress-2919">
        <div className="progress-2919-header">
          <span>Overall completion</span>
          <strong>89%</strong>
        </div>
        <div className="progress-2919-track">
          <div className="progress-2919-fill"></div>
        </div>
      </div>
    ),
    html: `<div class="Progress">
    <div class="Progress__header">
        <span>Overall completion</span>
        <strong>89%</strong>
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
    margin-bottom: 9px;
    color: #334155;
    font-size: 13px;
    font-weight: 500;
}
.Progress__header strong {
    color: #0f172a;
}
.Progress__track {
    height: 10px;
    overflow: hidden;
    border-radius: 5px;
    background: #e2e8f0;
}
.Progress__fill {
    width: 89%;
    height: 100%;
    background: #0f172a;
}`,
  },
];
