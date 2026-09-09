import "../pages/All.css";

export const toggles = [
  {
    id: 6,
    name: "Toggle Switch",
    preview: (
      <div className="ts-6-group">
        <label className="ts-6">
          <input type="checkbox" defaultChecked />
          <span className="ts-6__track">
            <span className="ts-6__thumb" />
          </span>
        </label>
        <label className="ts-6">
          <input type="checkbox" />
          <span className="ts-6__track">
            <span className="ts-6__thumb" />
          </span>
        </label>
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
}`,
  },
  {
    id: 40,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 41,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 42,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 43,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 44,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 45,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 46,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 47,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 48,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 49,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 50,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 51,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 52,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 53,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 54,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 55,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 56,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 57,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 58,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 59,
    name: "Toggle Switch",
    preview: (
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
}`,
  },
  {
    id: 60,
    name: "Toggle Switch",
    preview: (
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
}`,
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
    css: `.Toggle { position: relative; display: inline-block; width: 54px; height: 28px; } .Toggle input { opacity: 0; width: 0; height: 0; } .Toggle-slider { position: absolute; inset: 0; background: #dbeafe; border-radius: 28px; } .Toggle-slider:before { content: ""; position: absolute; width: 20px; height: 20px; left: 4px; bottom: 4px; background: #3b82f6; border-radius: 50%; transition: .3s; }`,
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
    css: `.Toggle { position: relative; display: inline-block; width: 58px; height: 30px; } .Toggle input { opacity: 0; width: 0; height: 0; } .Toggle-slider { position: absolute; inset: 0; background: #27272a; border-radius: 8px; } .Toggle-slider:before { content: ""; position: absolute; width: 22px; height: 22px; left: 4px; bottom: 4px; background: #71717a; border-radius: 5px; transition: .3s; }`,
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
    css: `.Toggle-slider { background: linear-gradient(90deg,#ef4444,#f97316); }`,
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
    css: `.Toggle-slider { background: #f4f4f5; border: 2px solid #d4d4d8; }`,
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
    css: `.Toggle-slider { background: #111827; }`,
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
    css: `.Toggle-slider { background: #e2e8f0; }`,
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
    css: `.Toggle-slider { background: #1e293b; border: 1px solid #475569; }`,
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
    css: `.Toggle-slider { background: #fee2e2; }`,
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
    css: `.Toggle-slider { background: linear-gradient(90deg,#c084fc,#f0abfc); }`,
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
    css: `.Toggle-slider { border-radius: 50%; }`,
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
    css: `.Toggle-slider { background: #cbd5e1; }`,
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
    css: `.Toggle-slider { background: #e0f2fe; border: 1px solid #7dd3fc; }`,
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
    css: `.Toggle-slider { background: #f1f5f9; box-shadow: inset 0 2px 5px rgba(0,0,0,.12); }`,
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
    css: `.Toggle-slider { background: #18181b; }`,
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
    css: `.Toggle-slider { background: #ddd; }`,
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
    css: `.Toggle-slider { background: #fecdd3; }`,
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
    css: `.Toggle-slider { background: #e5e7eb; border: 2px solid #9ca3af; border-radius: 6px; }`,
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
    css: `.Toggle-slider { background: #f3f4f6; }`,
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
    css: `.Toggle-slider { background: #e2e8f0; }`,
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
    css: `.Toggle-slider { background: #172554; }`,
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
    css: `.Toggle-slider:before { content: "×"; }`,
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
    css: `.Toggle-slider { width: 64px; }`,
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
    css: `.Toggle-slider { background: linear-gradient(90deg,#06b6d4,#3b82f6); }`,
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
    css: `.Toggle-slider { background: #f9fafb; border: 1px solid #d1d5db; }`,
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
    css: `.Toggle-slider { background: #fee2e2; }`,
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
    css: `.Toggle-slider { background: #0f172a; }`,
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
    css: `.Toggle-slider { background: #ecfccb; }`,
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
    css: `.Toggle-slider { background: #e5e7eb; }`,
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
    css: `.Toggle-slider { background: #fef3c7; }`,
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
    css: `.Toggle-slider { background: #e5e7eb; }`,
  },
  {
    id: 1101,
    name: "Minimal Blue Toggle",
    preview: (
      <label className="ts-1101">
        <input type="checkbox" />
        <span className="ts-1101-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #27272a;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #2563eb;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
}`,
  },
  {
    id: 1102,
    name: "Emerald Glow Toggle",
    preview: (
      <label className="ts-1102">
        <input type="checkbox" />
        <span className="ts-1102-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #18181b;
    border: 1px solid #3f3f46;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #71717a;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #052e16;
    border-color: #22c55e;
    box-shadow: 0 0 18px rgba(34, 197, 94, 0.35);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #4ade80;
    box-shadow: 0 0 12px #22c55e;
}`,
  },
  {
    id: 1103,
    name: "Purple Glow Toggle",
    preview: (
      <label className="ts-1103">
        <input type="checkbox" />
        <span className="ts-1103-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #27272a;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #a78bfa;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(135deg, #6d28d9, #a855f7);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #fff;
}`,
  },
  {
    id: 1104,
    name: "Sunset Toggle",
    preview: (
      <label className="ts-1104">
        <input type="checkbox" />
        <span className="ts-1104-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
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
    background: #431407;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #fb923c;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg, #ef4444, #f97316, #facc15);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1105,
    name: "Pink Neon Toggle",
    preview: (
      <label className="ts-1105">
        <input type="checkbox" />
        <span className="ts-1105-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #500724;
    border: 1px solid #9d174d;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #f472b6;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #db2777;
    box-shadow: 0 0 22px rgba(236, 72, 153, 0.45);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #fff;
}`,
  },
  {
    id: 1106,
    name: "Cyan Glow Toggle",
    preview: (
      <label className="ts-1106">
        <input type="checkbox" />
        <span className="ts-1106-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #083344;
    border: 1px solid #155e75;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #67e8f9;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #0891b2;
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #ecfeff;
}`,
  },
  {
    id: 1107,
    name: "Yellow Glow Toggle",
    preview: (
      <label className="ts-1107">
        <input type="checkbox" />
        <span className="ts-1107-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #422006;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #fde047;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #ca8a04;
    box-shadow: 0 0 18px rgba(234, 179, 8, 0.35);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #fff;
}`,
  },
  {
    id: 1108,
    name: "Red Danger Toggle",
    preview: (
      <label className="ts-1108">
        <input type="checkbox" />
        <span className="ts-1108-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 54px;
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
    background: #450a0a;
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: #f87171;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #dc2626;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.35);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(24px);
    background: #fff;
}`,
  },
  {
    id: 1109,
    name: "Ocean Toggle",
    preview: (
      <label className="ts-1109">
        <input type="checkbox" />
        <span className="ts-1109-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
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
    background: linear-gradient(135deg, #0c4a6e, #164e63);
    border-radius: 999px;
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #bae6fd;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(135deg, #06b6d4, #2563eb);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1110,
    name: "Aurora Toggle",
    preview: (
      <label className="ts-1110">
        <input type="checkbox" />
        <span className="ts-1110-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 32px;
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
    background: linear-gradient(120deg, #14532d, #0f766e, #1e3a8a);
    background-size: 200% 200%;
    border-radius: 999px;
    transition: 0.3s;
    animation: aurora-1110 5s ease infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(120deg, #06b6d4, #6366f1, #ec4899);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
}
@keyframes aurora-1110 {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}`,
  },
  {
    id: 1111,
    name: "Glass Toggle",
    preview: (
      <label className="ts-1111">
        <input type="checkbox" />
        <span className="ts-1111-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
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
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 999px;
    backdrop-filter: blur(12px);
    transition: 0.3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 3px;
    bottom: 3px;
    background: rgba(255,255,255,.82);
    border-radius: 50%;
    transition: 0.3s;
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(99,102,241,.35);
    border-color: rgba(129,140,248,.75);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1112,
    name: "Frosted Purple Toggle",
    preview: (
      <label className="ts-1112">
        <input type="checkbox" />
        <span className="ts-1112-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 31px;
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
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 999px;
    backdrop-filter: blur(18px);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 3px;
    bottom: 3px;
    background: rgba(255,255,255,.75);
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(139,92,246,.35);
    border-color: rgba(196,181,253,.7);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(27px);
    background: #fff;
}`,
  },
  {
    id: 1113,
    name: "Neumorphic Toggle",
    preview: (
      <label className="ts-1113">
        <input type="checkbox" />
        <span className="ts-1113-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 31px;
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
    border-radius: 999px;
    box-shadow: inset 3px 3px 7px rgba(163,163,163,.4), inset -3px -3px 7px rgba(255,255,255,.9);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #e5e7eb;
    border-radius: 50%;
    box-shadow: 3px 3px 7px rgba(163,163,163,.45), -3px -3px 7px rgba(255,255,255,.9);
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #dbeafe;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(27px);
    background: #60a5fa;
}`,
  },
  {
    id: 1114,
    name: "Square Cyber Toggle",
    preview: (
      <label className="ts-1114">
        <input type="checkbox" />
        <span className="ts-1114-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #020617;
    border: 1px solid #334155;
    border-radius: 5px;
    transition: .25s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 3px;
    background: #334155;
    border-radius: 3px;
    transition: .25s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #22d3ee;
    box-shadow: 0 0 16px rgba(34,211,238,.3);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #22d3ee;
}`,
  },
  {
    id: 1115,
    name: "Matrix Toggle",
    preview: (
      <label className="ts-1115">
        <input type="checkbox" />
        <span className="ts-1115-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #020617;
    border: 1px solid #14532d;
    border-radius: 4px;
    transition: .25s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 3px;
    background: #166534;
    border-radius: 3px;
    transition: .25s;
}
.Toggle input:checked~.Toggle-slider {
    background: #052e16;
    border-color: #22c55e;
    box-shadow: 0 0 16px rgba(34,197,94,.3);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #4ade80;
    box-shadow: 0 0 10px #22c55e;
}`,
  },
  {
    id: 1116,
    name: "Orange Glass Toggle",
    preview: (
      <label className="ts-1116">
        <input type="checkbox" />
        <span className="ts-1116-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: rgba(249,115,22,.12);
    border: 1px solid rgba(249,115,22,.35);
    border-radius: 999px;
    backdrop-filter: blur(12px);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 3px;
    background: #fb923c;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(249,115,22,.4);
    box-shadow: 0 0 18px rgba(249,115,22,.3);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #fff;
}`,
  },
  {
    id: 1117,
    name: "Blue Glass Toggle",
    preview: (
      <label className="ts-1117">
        <input type="checkbox" />
        <span className="ts-1117-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: rgba(56,189,248,.1);
    border: 1px solid rgba(56,189,248,.35);
    border-radius: 999px;
    backdrop-filter: blur(12px);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 3px;
    background: #38bdf8;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(37,99,235,.4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #fff;
}`,
  },
  {
    id: 1118,
    name: "Green Glass Toggle",
    preview: (
      <label className="ts-1118">
        <input type="checkbox" />
        <span className="ts-1118-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: rgba(34,197,94,.1);
    border: 1px solid rgba(34,197,94,.35);
    border-radius: 999px;
    backdrop-filter: blur(12px);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 3px;
    background: #4ade80;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: rgba(22,163,74,.4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #fff;
}`,
  },
  {
    id: 1119,
    name: "Black Metal Toggle",
    preview: (
      <label className="ts-1119">
        <input type="checkbox" />
        <span className="ts-1119-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: linear-gradient(145deg, #27272a, #09090b);
    border: 1px solid #52525b;
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 3px;
    background: linear-gradient(145deg, #71717a, #27272a);
    border: 1px solid #a1a1aa;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(145deg, #52525b, #18181b);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: linear-gradient(145deg, #fff, #d4d4d8);
}`,
  },
  {
    id: 1120,
    name: "Clay Toggle",
    preview: (
      <label className="ts-1120">
        <input type="checkbox" />
        <span className="ts-1120-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #e7e5e4;
    border-radius: 999px;
    box-shadow: inset 2px 2px 5px rgba(0,0,0,.15);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #D97757;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
}`,
  },
  {
    id: 1121,
    name: "Gradient Violet Toggle",
    preview: (
      <label className="ts-1121">
        <input type="checkbox" />
        <span className="ts-1121-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #27272a;
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #a1a1aa;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #fff;
}`,
  },
  {
    id: 1122,
    name: "Gradient Ocean Toggle",
    preview: (
      <label className="ts-1122">
        <input type="checkbox" />
        <span className="ts-1122-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #27272a;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#06b6d4,#3b82f6,#6366f1);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #fff;
}`,
  },
  {
    id: 1123,
    name: "Gradient Mint Toggle",
    preview: (
      <label className="ts-1123">
        <input type="checkbox" />
        <span className="ts-1123-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #27272a;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#22c55e,#14b8a6,#06b6d4);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #fff;
}`,
  },
  {
    id: 1124,
    name: "Gradient Fire Toggle",
    preview: (
      <label className="ts-1124">
        <input type="checkbox" />
        <span className="ts-1124-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #27272a;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #fff;
}`,
  },
  {
    id: 1125,
    name: "Gradient Rose Toggle",
    preview: (
      <label className="ts-1125">
        <input type="checkbox" />
        <span className="ts-1125-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #27272a;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#ec4899,#f472b6,#a855f7);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #fff;
}`,
  },
  {
    id: 1126,
    name: "Rainbow Toggle",
    preview: (
      <label className="ts-1126">
        <input type="checkbox" />
        <span className="ts-1126-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 32px;
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
    background: #27272a;
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    background-size: 250% 100%;
    animation: rainbow-1126 3s linear infinite;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
    background: #fff;
}
@keyframes rainbow-1126 {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 1127,
    name: "Rainbow Neon Toggle",
    preview: (
      <label className="ts-1127">
        <input type="checkbox" />
        <span className="ts-1127-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 32px;
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
    background: #09090b;
    border: 2px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(#09090b,#09090b) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    animation: rainbow-border-1127 3s linear infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 3px;
    bottom: 2px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
}
@keyframes rainbow-border-1127 {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 1128,
    name: "Moving Rainbow Toggle",
    preview: (
      <label className="ts-1128">
        <input type="checkbox" />
        <span className="ts-1128-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 32px;
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
    background: linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899);
    background-size: 300% 100%;
    border-radius: 999px;
    animation: moving-rainbow-1128 4s linear infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
}
@keyframes moving-rainbow-1128 {
    to {
        background-position: 300% 0;
    }
}`,
  },
  {
    id: 1129,
    name: "Rainbow Glass Toggle",
    preview: (
      <label className="ts-1129">
        <input type="checkbox" />
        <span className="ts-1129-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 32px;
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
    background: rgba(255,255,255,.08);
    border: 2px solid transparent;
    border-radius: 999px;
    background:
        linear-gradient(rgba(255,255,255,.08),rgba(255,255,255,.08)) padding-box,
        linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#ec4899) border-box;
    background-size: 100% 100%, 300% 100%;
    backdrop-filter: blur(15px);
    animation: rainbow-glass-1129 4s linear infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 3px;
    bottom: 2px;
    background: rgba(255,255,255,.9);
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
}
@keyframes rainbow-glass-1129 {
    to {
        background-position: 0 0, 300% 0;
    }
}`,
  },
  {
    id: 1130,
    name: "Shimmer Toggle",
    preview: (
      <label className="ts-1130">
        <input type="checkbox" />
        <span className="ts-1130-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
}
.Toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}
.Toggle-slider {
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    inset: 0;
    background: linear-gradient(90deg,#27272a,#52525b,#27272a);
    background-size: 200% 100%;
    border-radius: 999px;
    animation: shimmer-1130 2.5s linear infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
    z-index: 2;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#2563eb,#60a5fa,#2563eb);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
}
@keyframes shimmer-1130 {
    to {
        background-position: 200% 0;
    }
}`,
  },
  {
    id: 1131,
    name: "Fire Toggle",
    preview: (
      <label className="ts-1131">
        <input type="checkbox" />
        <span className="ts-1131-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: linear-gradient(90deg,#7f1d1d,#dc2626,#f97316,#facc15);
    background-size: 250% 100%;
    border-radius: 999px;
    animation: fire-1131 2.2s linear infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
}
@keyframes fire-1131 {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 1132,
    name: "Candy Toggle",
    preview: (
      <label className="ts-1132">
        <input type="checkbox" />
        <span className="ts-1132-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: linear-gradient(90deg,#db2777,#a855f7,#6366f1);
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#f472b6,#c084fc,#60a5fa);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
}`,
  },
  {
    id: 1133,
    name: "Electric Toggle",
    preview: (
      <label className="ts-1133">
        <input type="checkbox" />
        <span className="ts-1133-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: #020617;
    border: 1px solid #2563eb;
    border-radius: 999px;
    box-shadow: inset 0 0 10px rgba(37,99,235,.2);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 3px;
    background: #60a5fa;
    border-radius: 50%;
    box-shadow: 0 0 10px #3b82f6;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #22d3ee;
    box-shadow: 0 0 20px rgba(34,211,238,.35);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #22d3ee;
}`,
  },
  {
    id: 1134,
    name: "Lime Toggle",
    preview: (
      <label className="ts-1134">
        <input type="checkbox" />
        <span className="ts-1134-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #1a2e05;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #bef264;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #65a30d;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #f7fee7;
}`,
  },
  {
    id: 1135,
    name: "Indigo Toggle",
    preview: (
      <label className="ts-1135">
        <input type="checkbox" />
        <span className="ts-1135-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #1e1b4b;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #818cf8;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #4338ca;
    box-shadow: 0 0 18px rgba(99,102,241,.3);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1136,
    name: "Rose Toggle",
    preview: (
      <label className="ts-1136">
        <input type="checkbox" />
        <span className="ts-1136-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #4c0519;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #fb7185;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #be123c;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1137,
    name: "Sky Toggle",
    preview: (
      <label className="ts-1137">
        <input type="checkbox" />
        <span className="ts-1137-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #082f49;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #7dd3fc;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #0284c7;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #e0f2fe;
}`,
  },
  {
    id: 1138,
    name: "Teal Toggle",
    preview: (
      <label className="ts-1138">
        <input type="checkbox" />
        <span className="ts-1138-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #042f2e;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #5eead4;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #0f766e;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 1139,
    name: "Violet Edge Toggle",
    preview: (
      <label className="ts-1139">
        <input type="checkbox" />
        <span className="ts-1139-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: transparent;
    border: 2px solid #52525b;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 3px;
    background: #52525b;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #a855f7;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #a855f7;
    box-shadow: 0 0 12px rgba(168,85,247,.5);
}`,
  },
  {
    id: 1140,
    name: "Cyan Edge Toggle",
    preview: (
      <label className="ts-1140">
        <input type="checkbox" />
        <span className="ts-1140-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: transparent;
    border: 2px solid #52525b;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 3px;
    background: #52525b;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #22d3ee;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #22d3ee;
    box-shadow: 0 0 12px rgba(34,211,238,.5);
}`,
  },
  {
    id: 1141,
    name: "Pink Edge Toggle",
    preview: (
      <label className="ts-1141">
        <input type="checkbox" />
        <span className="ts-1141-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: transparent;
    border: 2px solid #52525b;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 3px;
    background: #52525b;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    border-color: #ec4899;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
    background: #ec4899;
    box-shadow: 0 0 12px rgba(236,72,153,.5);
}`,
  },
  {
    id: 1142,
    name: "Soft Green Toggle",
    preview: (
      <label className="ts-1142">
        <input type="checkbox" />
        <span className="ts-1142-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 29px;
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
    background: #dcfce7;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 4px;
    background: #86efac;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #bbf7d0;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #16a34a;
}`,
  },
  {
    id: 1143,
    name: "Soft Blue Toggle",
    preview: (
      <label className="ts-1143">
        <input type="checkbox" />
        <span className="ts-1143-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 29px;
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
    background: #dbeafe;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 4px;
    background: #93c5fd;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #bfdbfe;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #2563eb;
}`,
  },
  {
    id: 1144,
    name: "Soft Purple Toggle",
    preview: (
      <label className="ts-1144">
        <input type="checkbox" />
        <span className="ts-1144-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 29px;
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
    background: #ede9fe;
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 4px;
    background: #c4b5fd;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #ddd6fe;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #7c3aed;
}`,
  },
  {
    id: 1145,
    name: "Soft Pink Toggle",
    preview: (
      <label className="ts-1145">
        <input type="checkbox" />
        <span className="ts-1145-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 29px;
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
    border-radius: 999px;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    left: 4px;
    bottom: 4px;
    background: #f9a8d4;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #fbcfe8;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(26px);
    background: #db2777;
}`,
  },
  {
    id: 1146,
    name: "Tiny Toggle",
    preview: (
      <label className="ts-1146">
        <input type="checkbox" />
        <span className="ts-1146-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
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
    background: #3f3f46;
    border-radius: 999px;
    transition: .2s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    left: 3px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    transition: .2s;
}
.Toggle input:checked~.Toggle-slider {
    background: #22c55e;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(18px);
}`,
  },
  {
    id: 1147,
    name: "Large Toggle",
    preview: (
      <label className="ts-1147">
        <input type="checkbox" />
        <span className="ts-1147-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 76px;
    height: 40px;
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
    background: #27272a;
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 5px;
    bottom: 5px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #D97757;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(36px);
}`,
  },
  {
    id: 1148,
    name: "Inset Toggle",
    preview: (
      <label className="ts-1148">
        <input type="checkbox" />
        <span className="ts-1148-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
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
    background: #18181b;
    border-radius: 999px;
    box-shadow: inset 0 2px 6px rgba(0,0,0,.55);
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    bottom: 4px;
    background: #71717a;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: #27272a;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(28px);
    background: #e4e4e7;
}`,
  },
  {
    id: 1149,
    name: "Metal Toggle",
    preview: (
      <label className="ts-1149">
        <input type="checkbox" />
        <span className="ts-1149-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 31px;
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
    background: linear-gradient(145deg,#71717a,#27272a);
    border: 1px solid #a1a1aa;
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 23px;
    height: 23px;
    left: 4px;
    bottom: 3px;
    background: linear-gradient(#fff,#d4d4d8);
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(145deg,#a1a1aa,#52525b);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(29px);
}`,
  },
  {
    id: 1150,
    name: "Fire Gradient Toggle",
    preview: (
      <label className="ts-1150">
        <input type="checkbox" />
        <span className="ts-1150-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 62px;
    height: 32px;
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
    background: linear-gradient(90deg,#991b1b,#f97316,#facc15);
    border-radius: 999px;
    transition: .3s;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    background: linear-gradient(90deg,#dc2626,#f97316,#facc15,#ef4444);
    background-size: 250% 100%;
    animation: fire-gradient-1150 2s linear infinite;
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(30px);
}
@keyframes fire-gradient-1150 {
    to {
        background-position: 250% 0;
    }
}`,
  },
  {
    id: 1151,
    name: "Cosmic Toggle",
    preview: (
      <label className="ts-1151">
        <input type="checkbox" />
        <span className="ts-1151-slider"></span>
      </label>
    ),
    html: `<label class="Toggle">
    <input type="checkbox">
    <span class="Toggle-slider"></span>
</label>`,
    css: `.Toggle {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 33px;
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
    background: linear-gradient(120deg,#020617,#1e1b4b,#581c87,#831843,#020617);
    background-size: 300% 300%;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 999px;
    animation: cosmic-1151 6s ease infinite;
}
.Toggle-slider:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    left: 4px;
    bottom: 3px;
    background: linear-gradient(135deg,#c4b5fd,#60a5fa);
    border-radius: 50%;
    box-shadow: 0 0 14px rgba(129,140,248,.55);
    transition: .3s;
}
.Toggle input:checked~.Toggle-slider {
    box-shadow: 0 0 22px rgba(99,102,241,.35), 0 0 34px rgba(236,72,153,.15);
}
.Toggle input:checked~.Toggle-slider:before {
    transform: translateX(31px);
    background: linear-gradient(135deg,#fff,#c4b5fd);
}
@keyframes cosmic-1151 {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}`,
  },
  {
    id: 2260,
    name: "Basic Toggle",
    preview: (
      <label className="toggle-2260">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position: relative;
  width: 46px;
  height: 26px;
  display: inline-block;
}
.Toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.Toggle span {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
  transition: .2s ease;
}
.Toggle span::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3px;
  left: 3px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.18);
  transition: .2s ease;
}
.Toggle input:checked + span {
  background: #34c759;
}
.Toggle input:checked + span::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2261,
    name: "Settings Toggle",
    preview: (
      <label className="toggle-2261">
        <span>Dark Mode</span>
        <input type="checkbox" />
        <i></i>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Dark Mode</span>
  <input type="checkbox">
  <i></i>
</label>`,
    css: `.Toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 190px;
  color: #1c1c1e;
  font-size: 12px;
  font-weight: 600;
}
.Toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.Toggle i {
  position: relative;
  width: 42px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle i::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
  transition: .2s ease;
}
.Toggle input:checked + i {
  background: #34c759;
}
.Toggle input:checked + i::before {
  transform: translateX(18px);
}`,
  },
  {
    id: 2262,
    name: "Notification Toggle",
    preview: (
      <label className="toggle-2262">
        <div>
          <i className="fa-solid fa-bell"></i>
          <span>Notifications</span>
        </div>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-bell"></i>
    <span>Notifications</span>
  </div>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1c1c1e;
  font-size: 11px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #007aff;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #007aff;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2263,
    name: "Privacy Toggle",
    preview: (
      <label className="toggle-2263">
        <span>Private Profile</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Private Profile</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
  font-weight: 600;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #475569;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2264,
    name: "Online Status Toggle",
    preview: (
      <label className="toggle-2264">
        <div>
          <span className="dot"></span>
          <span>Online Status</span>
        </div>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <span class="dot"></span>
    <span>Online Status</span>
  </div>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 215px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #1c1c1e;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 7px;
}
.Toggle .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d1d1d6;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #34c759;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}
.Toggle input:checked ~ div .dot {
  background: #34c759;
}`,
  },
  {
    id: 2265,
    name: "Auto Save Toggle",
    preview: (
      <label className="toggle-2265">
        <span>Auto Save</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Auto Save</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 12px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #34c759;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2266,
    name: "Email Updates Toggle",
    preview: (
      <label className="toggle-2266">
        <span>Email Updates</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Email Updates</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #475569;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 46px;
  height: 26px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #2563eb;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2267,
    name: "Sound Toggle",
    preview: (
      <label className="toggle-2267">
        <i className="fa-solid fa-volume-high"></i>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <i class="fa-solid fa-volume-high"></i>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  display: flex;
  align-items: center;
  gap: 10px;
}
.Toggle > i {
  color: #64748b;
  font-size: 13px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #007aff;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2268,
    name: "Location Toggle",
    preview: (
      <label className="toggle-2268">
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <span>Location Services</span>
        </div>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-location-dot"></i>
    <span>Location Services</span>
  </div>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #ef4444;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #ef4444;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2269,
    name: "Marketing Toggle",
    preview: (
      <label className="toggle-2269">
        <span>Marketing Emails</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Marketing Emails</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 43px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #8b5cf6;
}
.Toggle input:checked + b::before {
  transform: translateX(19px);
}`,
  },
  {
    id: 2270,
    name: "Auto Update Toggle",
    preview: (
      <label className="toggle-2270">
        <span>Automatic Updates</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Automatic Updates</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1c1c1e;
  font-size: 10px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 45px;
  height: 25px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #0a84ff;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2271,
    name: "Two Factor Toggle",
    preview: (
      <label className="toggle-2271">
        <div>
          <i className="fa-solid fa-shield-halved"></i>
          <span>Two-factor authentication</span>
        </div>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-shield-halved"></i>
    <span>Two-factor authentication</span>
  </div>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1c1c1e;
  font-size: 9px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #22c55e;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #22c55e;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2272,
    name: "Compact Toggle",
    preview: (
      <label className="toggle-2272">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position: relative;
  width: 38px;
  height: 22px;
  display: inline-block;
}
.Toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.Toggle span {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle span::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: .18s ease;
}
.Toggle input:checked + span {
  background: #34c759;
}
.Toggle input:checked + span::before {
  transform: translateX(16px);
}`,
  },
  {
    id: 2273,
    name: "Large Toggle",
    preview: (
      <label className="toggle-2273">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position: relative;
  width: 58px;
  height: 32px;
  display: inline-block;
}
.Toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.Toggle span {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle span::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.16);
  transition: .2s ease;
}
.Toggle input:checked + span {
  background: #34c759;
}
.Toggle input:checked + span::before {
  transform: translateX(26px);
}`,
  },
  {
    id: 2274,
    name: "Blue Action Toggle",
    preview: (
      <label className="toggle-2274">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position: relative;
  width: 48px;
  height: 27px;
  display: inline-block;
}
.Toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.Toggle span {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle span::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + span {
  background: #2563eb;
}
.Toggle input:checked + span::before {
  transform: translateX(21px);
}`,
  },
  {
    id: 2275,
    name: "Purple Feature Toggle",
    preview: (
      <label className="toggle-2275">
        <span>AI Features</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>AI Features</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 205px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #8b5cf6;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2276,
    name: "Danger Toggle",
    preview: (
      <label className="toggle-2276">
        <span>Delete Protection</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Delete Protection</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #475569;
  font-size: 10px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #ff3b30;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2277,
    name: "Rounded Settings Toggle",
    preview: (
      <label className="toggle-2277">
        <span>Show Password</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Show Password</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1c1c1e;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 45px;
  height: 25px;
  border-radius: 999px;
  background: #e5e5ea;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #5856d6;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2278,
    name: "Data Sync Toggle",
    preview: (
      <label className="toggle-2278">
        <div>
          <i className="fa-solid fa-rotate"></i>
          <span>Sync Data</span>
        </div>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-rotate"></i>
    <span>Sync Data</span>
  </div>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #0ea5e9;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #0ea5e9;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2279,
    name: "Cookie Toggle",
    preview: (
      <label className="toggle-2279">
        <span>Analytics Cookies</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Analytics Cookies</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #475569;
  font-size: 10px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #16a34a;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2280,
    name: "Preview Mode Toggle",
    preview: (
      <label className="toggle-2280">
        <span>Preview Mode</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Preview Mode</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 205px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #ff9500;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2281,
    name: "Maintenance Toggle",
    preview: (
      <label className="toggle-2281">
        <span>Maintenance Mode</span>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Maintenance Mode</span>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #475569;
  font-size: 10px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #f59e0b;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2282,
    name: "Profile Visibility Toggle",
    preview: (
      <label className="toggle-2282">
        <div>
          <i className="fa-solid fa-eye"></i>
          <span>Public Profile</span>
        </div>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-eye"></i>
    <span>Public Profile</span>
  </div>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #64748b;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #0a84ff;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2283,
    name: "Focus Mode Toggle",
    preview: (
      <label className="toggle-2283">
        <div>
          <i className="fa-solid fa-moon"></i>
          <span>Focus Mode</span>
        </div>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-moon"></i>
    <span>Focus Mode</span>
  </div>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 215px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #6366f1;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #6366f1;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2284,
    name: "Backup Toggle",
    preview: (
      <label className="toggle-2284">
        <span>Cloud Backup</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Cloud Backup</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #0ea5e9;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2285,
    name: "Accessibility Toggle",
    preview: (
      <label className="toggle-2285">
        <div>
          <i className="fa-solid fa-universal-access"></i>
          <span>Reduce Motion</span>
        </div>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-universal-access"></i>
    <span>Reduce Motion</span>
  </div>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #2563eb;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #2563eb;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2286,
    name: "Auto Play Toggle",
    preview: (
      <label className="toggle-2286">
        <span>Autoplay</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Autoplay</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 43px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #34c759;
}
.Toggle input:checked + b::before {
  transform: translateX(19px);
}`,
  },
  {
    id: 2287,
    name: "Chat Availability Toggle",
    preview: (
      <label className="toggle-2287">
        <div>
          <i className="fa-solid fa-comments"></i>
          <span>Available for Chat</span>
        </div>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-comments"></i>
    <span>Available for Chat</span>
  </div>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #22c55e;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #22c55e;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2288,
    name: "Auto Refresh Toggle",
    preview: (
      <label className="toggle-2288">
        <span>Auto Refresh</span>
        <input type="checkbox" defaultChecked />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <span>Auto Refresh</span>
  <input type="checkbox" checked>
  <b></b>
</label>`,
    css: `.Toggle {
  width: 205px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 11px;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #d1d1d6;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #007aff;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2289,
    name: "Developer Mode Toggle",
    preview: (
      <label className="toggle-2289">
        <div>
          <i className="fa-solid fa-code"></i>
          <span>Developer Mode</span>
        </div>
        <input type="checkbox" />
        <b></b>
      </label>
    ),
    html: `<label class="Toggle">
  <div>
    <i class="fa-solid fa-code"></i>
    <span>Developer Mode</span>
  </div>
  <input type="checkbox">
  <b></b>
</label>`,
    css: `.Toggle {
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #334155;
  font-size: 10px;
}
.Toggle div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.Toggle div i {
  color: #0f172a;
}
.Toggle input {
  display: none;
}
.Toggle b {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
}
.Toggle b::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  transition: .2s ease;
}
.Toggle input:checked + b {
  background: #0f172a;
}
.Toggle input:checked + b::before {
  transform: translateX(20px);
}`,
  },
  {
    id: 2350,
    name: "Account Notifications",
    preview: (
      <label className="toggle-2350">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 1px 4px rgba(0,0,0,.15);
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#2563eb;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2351,
    name: "Auto Download",
    preview: (
      <label className="toggle-2351">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:48px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#16a34a;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2352,
    name: "Share Activity",
    preview: (
      <label className="toggle-2352">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0ea5e9;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2353,
    name: "Auto Login",
    preview: (
      <label className="toggle-2353">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:45px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#4f46e5;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2354,
    name: "Remember Device",
    preview: (
      <label className="toggle-2354">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:47px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#475569;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2355,
    name: "Product Updates",
    preview: (
      <label className="toggle-2355">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:49px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#7c3aed;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2356,
    name: "Usage Notifications",
    preview: (
      <label className="toggle-2356">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0891b2;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2357,
    name: "Auto Play Music",
    preview: (
      <label className="toggle-2357">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#ec4899;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2358,
    name: "Read Receipts",
    preview: (
      <label className="toggle-2358">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:45px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#2563eb;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2359,
    name: "Typing Indicator",
    preview: (
      <label className="toggle-2359">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:43px;
  height:23px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:17px;
  height:17px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#14b8a6;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2360,
    name: "Profile Activity",
    preview: (
      <label className="toggle-2360">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:48px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0f766e;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2361,
    name: "Auto Archive",
    preview: (
      <label className="toggle-2361">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#64748b;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2362,
    name: "Auto Play Videos",
    preview: (
      <label className="toggle-2362">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:48px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#f97316;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2363,
    name: "Desktop Sync",
    preview: (
      <label className="toggle-2363">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0284c7;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2364,
    name: "Cloud Sync",
    preview: (
      <label className="toggle-2364">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:47px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#06b6d4;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2365,
    name: "Auto Backup",
    preview: (
      <label className="toggle-2365">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#16a34a;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2366,
    name: "Security Notifications",
    preview: (
      <label className="toggle-2366">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:50px;
  height:27px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#dc2626;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2367,
    name: "Message Alerts",
    preview: (
      <label className="toggle-2367">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#2563eb;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2368,
    name: "New Features",
    preview: (
      <label className="toggle-2368">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:45px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#8b5cf6;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2369,
    name: "Experimental Features",
    preview: (
      <label className="toggle-2369">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:48px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#a855f7;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2370,
    name: "Compact Mode",
    preview: (
      <label className="toggle-2370">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:42px;
  height:23px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:17px;
  height:17px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#475569;
}
.Toggle input:checked+span::before {
  transform:translateX(19px);
}`,
  },
  {
    id: 2371,
    name: "Automatic Translation",
    preview: (
      <label className="toggle-2371">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#14b8a6;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2372,
    name: "Smart Recommendations",
    preview: (
      <label className="toggle-2372">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:47px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#f59e0b;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2373,
    name: "Smart Search",
    preview: (
      <label className="toggle-2373">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0ea5e9;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2374,
    name: "Auto Correct",
    preview: (
      <label className="toggle-2374">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:45px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#22c55e;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2375,
    name: "Spell Check",
    preview: (
      <label className="toggle-2375">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:44px;
  height:24px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#2563eb;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2376,
    name: "Save Login",
    preview: (
      <label className="toggle-2376">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:45px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#6366f1;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2377,
    name: "Session Timeout",
    preview: (
      <label className="toggle-2377">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:48px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#f97316;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2378,
    name: "Auto Logout",
    preview: (
      <label className="toggle-2378">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:46px;
  height:25px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#ef4444;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2379,
    name: "Secure Connection",
    preview: (
      <label className="toggle-2379">
        <input type="checkbox" defaultChecked />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox" checked>
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  width:49px;
  height:26px;
  display:inline-block;
}
.Toggle input {
  opacity:0;
  width:0;
  height:0;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 1px 4px rgba(0,0,0,.16);
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#059669;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2380,
    name: "Classic Green Toggle",
    preview: (
      <label className="toggle-2380">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:46px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#22c55e;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2381,
    name: "Ocean Toggle",
    preview: (
      <label className="toggle-2381">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:50px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#dbe1e8;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#0ea5e9;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2382,
    name: "Neutral Toggle",
    preview: (
      <label className="toggle-2382">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:44px;
  height:24px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#e5e7eb;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 1px 3px rgba(0,0,0,.12);
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#6b7280;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2383,
    name: "Teal Toggle",
    preview: (
      <label className="toggle-2383">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:47px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#14b8a6;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2384,
    name: "Indigo Toggle",
    preview: (
      <label className="toggle-2384">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#6366f1;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2385,
    name: "Rose Toggle",
    preview: (
      <label className="toggle-2385">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:45px;
  height:24px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#f43f5e;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2386,
    name: "Amber Toggle",
    preview: (
      <label className="toggle-2386">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:49px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#f59e0b;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2387,
    name: "Cyan Toggle",
    preview: (
      <label className="toggle-2387">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:46px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#06b6d4;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2388,
    name: "Violet Toggle",
    preview: (
      <label className="toggle-2388">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:47px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#8b5cf6;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2389,
    name: "Sky Toggle",
    preview: (
      <label className="toggle-2389">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:50px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#38bdf8;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2390,
    name: "Dark Toggle",
    preview: (
      <label className="toggle-2390">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#cbd5e1;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#1f2937;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2391,
    name: "Mint Toggle",
    preview: (
      <label className="toggle-2391">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:45px;
  height:24px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#10b981;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2392,
    name: "Blue Toggle",
    preview: (
      <label className="toggle-2392">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:44px;
  height:24px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#3b82f6;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2393,
    name: "Emerald Toggle",
    preview: (
      <label className="toggle-2393">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:49px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#10b981;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2394,
    name: "Slate Toggle",
    preview: (
      <label className="toggle-2394">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:43px;
  height:23px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#cbd5e1;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:17px;
  height:17px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#64748b;
}
.Toggle input:checked+span::before {
  transform:translateX(20px);
}`,
  },
  {
    id: 2395,
    name: "Fuchsia Toggle",
    preview: (
      <label className="toggle-2395">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#d946ef;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2396,
    name: "Lime Toggle",
    preview: (
      <label className="toggle-2396">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:45px;
  height:24px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#84cc16;
}
.Toggle input:checked+span::before {
  transform:translateX(21px);
}`,
  },
  {
    id: 2397,
    name: "Warm Gray Toggle",
    preview: (
      <label className="toggle-2397">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:47px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d6d3d1;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#78716c;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}`,
  },
  {
    id: 2398,
    name: "Transparent Toggle",
    preview: (
      <label className="toggle-2398">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border:1px solid #cbd5e1;
  border-radius:999px;
  background:#fff;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#cbd5e1;
  transition:.2s ease;
}
.Toggle input:checked+span {
  border-color:#2563eb;
  background:#eff6ff;
}
.Toggle input:checked+span::before {
  background:#2563eb;
  transform:translateX(22px);
}`,
  },
  {
    id: 2399,
    name: "Classic Black White Toggle",
    preview: (
      <label className="toggle-2399">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:50px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#e5e7eb;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 1px 4px rgba(0,0,0,.15);
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:#000;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}`,
  },
  {
    id: 2400,
    name: "Rainbow Flow Toggle",
    preview: (
      <label className="toggle-2400">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:50px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 2px 5px rgba(0,0,0,.18);
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#ff0000,#ff7a00,#ffee00,#22c55e,#00d9ff,#3b82f6,#a855f7,#ff00aa,#ff0000);
  background-size:400% 100%;
  animation:rainbow-2400 4s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}
@keyframes rainbow-2400 {
  from { background-position:0% 50%; }
  to { background-position:400% 50%; }
}`,
  },
  {
    id: 2401,
    name: "Rainbow Glow Toggle",
    preview: (
      <label className="toggle-2401">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#ff004c,#ff8a00,#ffe600,#00e676,#00cfff,#2962ff,#8e24aa,#ff004c);
  background-size:300% 100%;
  box-shadow:0 0 12px rgba(255,0,150,.35);
  animation:rainbow-2401 3s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}
@keyframes rainbow-2401 {
  0% { background-position:0% 50%; }
  100% { background-position:300% 50%; }
}`,
  },
  {
    id: 2402,
    name: "Neon Rainbow Toggle",
    preview: (
      <label className="toggle-2402">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:52px;
  height:28px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#cbd5e1;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:22px;
  height:22px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 2px 5px rgba(0,0,0,.18);
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#ff0055,#ff8800,#ffee00,#00ff85,#00e5ff,#3772ff,#a000ff,#ff0055);
  background-size:500% 100%;
  box-shadow:0 0 8px #ff0055,0 0 16px #00e5ff;
  animation:rainbow-2402 5s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(24px);
}
@keyframes rainbow-2402 {
  0% { background-position:0% 50%; }
  100% { background-position:500% 50%; }
}`,
  },
  {
    id: 2403,
    name: "Soft Rainbow Toggle",
    preview: (
      <label className="toggle-2403">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:49px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#e5e7eb;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#ff9aa2,#ffb7b2,#ffdac1,#e2f0cb,#b5ead7,#c7ceea,#d8b4fe,#ff9aa2);
  background-size:350% 100%;
  animation:rainbow-2403 6s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}
@keyframes rainbow-2403 {
  from { background-position:0% 50%; }
  to { background-position:350% 50%; }
}`,
  },
  {
    id: 2404,
    name: "Electric Rainbow Toggle",
    preview: (
      <label className="toggle-2404">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:51px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.2s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  transition:.2s ease;
}
.Toggle input:checked+span {
  background:conic-gradient(from 0deg,#ff0000,#ff8c00,#ffff00,#00ff66,#00ffff,#0066ff,#cc00ff,#ff0000);
  animation:spin-2404 2.8s linear infinite;
  box-shadow:0 0 10px rgba(0,255,255,.35);
}
.Toggle input:checked+span::before {
  transform:translateX(24px);
}
@keyframes spin-2404 {
  from { filter:hue-rotate(0deg); }
  to { filter:hue-rotate(360deg); }
}`,
  },
  {
    id: 2405,
    name: "Aurora Rainbow Toggle",
    preview: (
      <label className="toggle-2405">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:50px;
  height:27px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:21px;
  height:21px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(120deg,#22c55e,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#f97316,#22c55e);
  background-size:250% 250%;
  animation:rainbow-2405 4s ease-in-out infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(23px);
}
@keyframes rainbow-2405 {
  0% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
}`,
  },
  {
    id: 2406,
    name: "Holographic Rainbow Toggle",
    preview: (
      <label className="toggle-2406">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:48px;
  height:26px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(110deg,#ff0080,#ff8c00,#fff000,#00ff8c,#00d9ff,#624cff,#ff0080);
  background-size:400% 100%;
  animation:holo-2406 3.5s ease-in-out infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}
@keyframes holo-2406 {
  0% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
}`,
  },
  {
    id: 2407,
    name: "Candy Rainbow Toggle",
    preview: (
      <label className="toggle-2407">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:52px;
  height:28px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#e2e8f0;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:22px;
  height:22px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#ff8fab,#ffb3c6,#ffd6a5,#fdffb6,#caffbf,#9bf6ff,#bdb2ff,#ffc6ff,#ff8fab);
  background-size:450% 100%;
  animation:rainbow-2407 7s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(24px);
}
@keyframes rainbow-2407 {
  from { background-position:0% 50%; }
  to { background-position:450% 50%; }
}`,
  },
  {
    id: 2408,
    name: "Prism Rainbow Toggle",
    preview: (
      <label className="toggle-2408">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:47px;
  height:25px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:19px;
  height:19px;
  border-radius:50%;
  background:#fff;
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(100deg,#ff1744,#ff9100,#ffea00,#00e676,#00b0ff,#651fff,#d500f9,#ff1744);
  background-size:320% 100%;
  animation:prism-2408 2.2s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(22px);
}
@keyframes prism-2408 {
  from { background-position:0% 50%; }
  to { background-position:320% 50%; }
}`,
  },
  {
    id: 2409,
    name: "Spectrum Rainbow Toggle",
    preview: (
      <label className="toggle-2409">
        <input type="checkbox" />
        <span></span>
      </label>
    ),
    html: `<label class="Toggle">
  <input type="checkbox">
  <span></span>
</label>`,
    css: `.Toggle {
  position:relative;
  display:inline-block;
  width:54px;
  height:29px;
}
.Toggle input {
  display:none;
}
.Toggle span {
  position:absolute;
  inset:0;
  border-radius:999px;
  background:#d1d5db;
  cursor:pointer;
  transition:.25s ease;
}
.Toggle span::before {
  content:"";
  position:absolute;
  top:3px;
  left:3px;
  width:23px;
  height:23px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 2px 6px rgba(0,0,0,.18);
  transition:.25s ease;
}
.Toggle input:checked+span {
  background:linear-gradient(90deg,#f00,#ff8000,#ff0,#0f0,#00ffff,#00f,#8000ff,#f0f,#f00);
  background-size:600% 100%;
  animation:spectrum-2409 4.5s linear infinite;
}
.Toggle input:checked+span::before {
  transform:translateX(25px);
}
@keyframes spectrum-2409 {
  0% { background-position:0% 50%; }
  100% { background-position:600% 50%; }
}`,
  },
  {
    id: 2740,
    name: "Simple Toggle",
    preview: (
      <label className="toggle-2740">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2740__track">
          <span className="toggle-2740__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2740">
    <input type="checkbox" checked />
    <span class="toggle-2740__track">
        <span class="toggle-2740__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2740 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2740 input {
    display: none;
}
.toggle-2740__track {
    width: 42px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #30343b;
    transition: .25s ease;
}
.toggle-2740__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    transition: .25s ease;
}
.toggle-2740 input:checked + .toggle-2740__track {
    background: #6c63ff;
}
.toggle-2740 input:checked + .toggle-2740__track .toggle-2740__thumb {
    transform: translateX(18px);
}`,
  },
  {
    id: 2741,
    name: "Minimal Toggle",
    preview: (
      <label className="toggle-2741">
        <input type="checkbox" />
        <span className="toggle-2741__track">
          <span className="toggle-2741__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2741">
    <input type="checkbox" />
    <span class="toggle-2741__track">
        <span class="toggle-2741__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2741 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2741 input {
    display: none;
}
.toggle-2741__track {
    width: 40px;
    height: 22px;
    border: 1px solid #454a53;
    border-radius: 20px;
    background: transparent;
    padding: 2px;
    transition: .25s ease;
}
.toggle-2741__thumb {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #7b818b;
    transition: .25s ease;
}
.toggle-2741 input:checked + .toggle-2741__track {
    border-color: #8c7cff;
}
.toggle-2741 input:checked + .toggle-2741__track .toggle-2741__thumb {
    background: #8c7cff;
    transform: translateX(18px);
}`,
  },
  {
    id: 2742,
    name: "Blue Toggle",
    preview: (
      <label className="toggle-2742">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2742__track">
          <span className="toggle-2742__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2742">
    <input type="checkbox" checked />
    <span class="toggle-2742__track">
        <span class="toggle-2742__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2742 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2742 input {
    display: none;
}
.toggle-2742__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #303944;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2742__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c5cbd3;
    transition: .25s ease;
}
.toggle-2742 input:checked + .toggle-2742__track {
    background: #3b82f6;
}
.toggle-2742 input:checked + .toggle-2742__track .toggle-2742__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2743,
    name: "Green Toggle",
    preview: (
      <label className="toggle-2743">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2743__track">
          <span className="toggle-2743__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2743">
    <input type="checkbox" checked />
    <span class="toggle-2743__track">
        <span class="toggle-2743__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2743 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2743 input {
    display: none;
}
.toggle-2743__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #303944;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2743__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c5cbd3;
    transition: .25s ease;
}
.toggle-2743 input:checked + .toggle-2743__track {
    background: #22c55e;
}
.toggle-2743 input:checked + .toggle-2743__track .toggle-2743__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2744,
    name: "Red Toggle",
    preview: (
      <label className="toggle-2744">
        <input type="checkbox" />
        <span className="toggle-2744__track">
          <span className="toggle-2744__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2744">
    <input type="checkbox" />
    <span class="toggle-2744__track">
        <span class="toggle-2744__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2744 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2744 input {
    display: none;
}
.toggle-2744__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2744__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2744 input:checked + .toggle-2744__track {
    background: #ef4444;
}
.toggle-2744 input:checked + .toggle-2744__track .toggle-2744__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2745,
    name: "Yellow Toggle",
    preview: (
      <label className="toggle-2745">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2745__track">
          <span className="toggle-2745__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2745">
    <input type="checkbox" checked />
    <span class="toggle-2745__track">
        <span class="toggle-2745__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2745 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2745 input {
    display: none;
}
.toggle-2745__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2745__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2745 input:checked + .toggle-2745__track {
    background: #eab308;
}
.toggle-2745 input:checked + .toggle-2745__track .toggle-2745__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2746,
    name: "Orange Toggle",
    preview: (
      <label className="toggle-2746">
        <input type="checkbox" />
        <span className="toggle-2746__track">
          <span className="toggle-2746__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2746">
    <input type="checkbox" />
    <span class="toggle-2746__track">
        <span class="toggle-2746__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2746 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2746 input {
    display: none;
}
.toggle-2746__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2746__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2746 input:checked + .toggle-2746__track {
    background: #f97316;
}
.toggle-2746 input:checked + .toggle-2746__track .toggle-2746__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2747,
    name: "Pink Toggle",
    preview: (
      <label className="toggle-2747">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2747__track">
          <span className="toggle-2747__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2747">
    <input type="checkbox" checked />
    <span class="toggle-2747__track">
        <span class="toggle-2747__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2747 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2747 input {
    display: none;
}
.toggle-2747__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2747__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2747 input:checked + .toggle-2747__track {
    background: #ec4899;
}
.toggle-2747 input:checked + .toggle-2747__track .toggle-2747__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2748,
    name: "Purple Toggle",
    preview: (
      <label className="toggle-2748">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2748__track">
          <span className="toggle-2748__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2748">
    <input type="checkbox" checked />
    <span class="toggle-2748__track">
        <span class="toggle-2748__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2748 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2748 input {
    display: none;
}
.toggle-2748__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2748__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2748 input:checked + .toggle-2748__track {
    background: #8b5cf6;
}
.toggle-2748 input:checked + .toggle-2748__track .toggle-2748__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2749,
    name: "Cyan Toggle",
    preview: (
      <label className="toggle-2749">
        <input type="checkbox" />
        <span className="toggle-2749__track">
          <span className="toggle-2749__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2749">
    <input type="checkbox" />
    <span class="toggle-2749__track">
        <span class="toggle-2749__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2749 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2749 input {
    display: none;
}
.toggle-2749__track {
    width: 44px;
    height: 24px;
    border-radius: 20px;
    background: #30343b;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2749__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2749 input:checked + .toggle-2749__track {
    background: #06b6d4;
}
.toggle-2749 input:checked + .toggle-2749__track .toggle-2749__thumb {
    background: #fff;
    transform: translateX(20px);
}`,
  },
  {
    id: 2750,
    name: "Compact Toggle",
    preview: (
      <label className="toggle-2750">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2750__track">
          <span className="toggle-2750__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2750">
    <input type="checkbox" checked />
    <span class="toggle-2750__track">
        <span class="toggle-2750__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2750 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2750 input {
    display: none;
}
.toggle-2750__track {
    width: 34px;
    height: 19px;
    border-radius: 20px;
    background: #333840;
    padding: 2px;
    transition: .25s ease;
}
.toggle-2750__thumb {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #c5cad2;
    transition: .25s ease;
}
.toggle-2750 input:checked + .toggle-2750__track {
    background: #6366f1;
}
.toggle-2750 input:checked + .toggle-2750__track .toggle-2750__thumb {
    transform: translateX(15px);
    background: #fff;
}`,
  },
  {
    id: 2751,
    name: "Large Toggle",
    preview: (
      <label className="toggle-2751">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2751__track">
          <span className="toggle-2751__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2751">
    <input type="checkbox" checked />
    <span class="toggle-2751__track">
        <span class="toggle-2751__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2751 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2751 input {
    display: none;
}
.toggle-2751__track {
    width: 56px;
    height: 30px;
    border-radius: 20px;
    background: #30343b;
    padding: 4px;
    transition: .25s ease;
}
.toggle-2751__thumb {
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #c5cad2;
    transition: .25s ease;
}
.toggle-2751 input:checked + .toggle-2751__track {
    background: #7c3aed;
}
.toggle-2751 input:checked + .toggle-2751__track .toggle-2751__thumb {
    transform: translateX(26px);
    background: #fff;
}`,
  },
  {
    id: 2752,
    name: "Square Toggle",
    preview: (
      <label className="toggle-2752">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2752__track">
          <span className="toggle-2752__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2752">
    <input type="checkbox" checked />
    <span class="toggle-2752__track">
        <span class="toggle-2752__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2752 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2752 input {
    display: none;
}
.toggle-2752__track {
    width: 43px;
    height: 24px;
    padding: 3px;
    border-radius: 6px;
    background: #30343b;
    transition: .25s ease;
}
.toggle-2752__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background: #c6cad1;
    transition: .25s ease;
}
.toggle-2752 input:checked + .toggle-2752__track {
    background: #2563eb;
}
.toggle-2752 input:checked + .toggle-2752__track .toggle-2752__thumb {
    transform: translateX(19px);
    background: #fff;
}`,
  },
  {
    id: 2753,
    name: "Outline Toggle",
    preview: (
      <label className="toggle-2753">
        <input type="checkbox" />
        <span className="toggle-2753__track">
          <span className="toggle-2753__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2753">
    <input type="checkbox" />
    <span class="toggle-2753__track">
        <span class="toggle-2753__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2753 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2753 input {
    display: none;
}
.toggle-2753__track {
    width: 44px;
    height: 24px;
    padding: 2px;
    border: 2px solid #464b54;
    border-radius: 20px;
    background: transparent;
    transition: .25s ease;
}
.toggle-2753__thumb {
    display: block;
    width: 16px;
    height: 16px;
    margin-top: 1px;
    border-radius: 50%;
    background: #737983;
    transition: .25s ease;
}
.toggle-2753 input:checked + .toggle-2753__track {
    border-color: #22c55e;
}
.toggle-2753 input:checked + .toggle-2753__track .toggle-2753__thumb {
    transform: translateX(20px);
    background: #22c55e;
}`,
  },
  {
    id: 2754,
    name: "Glass Toggle",
    preview: (
      <label className="toggle-2754">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2754__track">
          <span className="toggle-2754__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2754">
    <input type="checkbox" checked />
    <span class="toggle-2754__track">
        <span class="toggle-2754__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2754 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2754 input {
    display: none;
}
.toggle-2754__track {
    width: 45px;
    height: 25px;
    padding: 3px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 20px;
    background: rgba(255,255,255,.06);
    backdrop-filter: blur(8px);
    transition: .25s ease;
}
.toggle-2754__thumb {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: rgba(255,255,255,.65);
    transition: .25s ease;
}
.toggle-2754 input:checked + .toggle-2754__track {
    background: rgba(99,102,241,.3);
    border-color: rgba(129,140,248,.7);
}
.toggle-2754 input:checked + .toggle-2754__track .toggle-2754__thumb {
    transform: translateX(19px);
    background: #fff;
}`,
  },
  {
    id: 2755,
    name: "Dot Toggle",
    preview: (
      <label className="toggle-2755">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2755__track">
          <span className="toggle-2755__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2755">
    <input type="checkbox" checked />
    <span class="toggle-2755__track">
        <span class="toggle-2755__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2755 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2755 input {
    display: none;
}
.toggle-2755__track {
    width: 38px;
    height: 22px;
    border: 1px solid #414650;
    border-radius: 20px;
    background: #252930;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2755__thumb {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #8a9099;
    transition: .25s ease;
}
.toggle-2755 input:checked + .toggle-2755__track {
    background: #18251f;
    border-color: #36d68d;
}
.toggle-2755 input:checked + .toggle-2755__track .toggle-2755__thumb {
    transform: translateX(16px);
    background: #36d68d;
    box-shadow: 0 0 8px rgba(54,214,141,.65);
}`,
  },
  {
    id: 2756,
    name: "White Toggle",
    preview: (
      <label className="toggle-2756">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2756__track">
          <span className="toggle-2756__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2756">
    <input type="checkbox" checked />
    <span class="toggle-2756__track">
        <span class="toggle-2756__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2756 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2756 input {
    display: none;
}
.toggle-2756__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #2e3239;
    transition: .25s ease;
}
.toggle-2756__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #9aa0a9;
    transition: .25s ease;
}
.toggle-2756 input:checked + .toggle-2756__track {
    background: #f1f3f5;
}
.toggle-2756 input:checked + .toggle-2756__track .toggle-2756__thumb {
    transform: translateX(20px);
    background: #202329;
}`,
  },
  {
    id: 2757,
    name: "Black Toggle",
    preview: (
      <label className="toggle-2757">
        <input type="checkbox" />
        <span className="toggle-2757__track">
          <span className="toggle-2757__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2757">
    <input type="checkbox" />
    <span class="toggle-2757__track">
        <span class="toggle-2757__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2757 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2757 input {
    display: none;
}
.toggle-2757__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border: 1px solid #3c4149;
    border-radius: 20px;
    background: #17191d;
    transition: .25s ease;
}
.toggle-2757__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #676d76;
    transition: .25s ease;
}
.toggle-2757 input:checked + .toggle-2757__track {
    background: #08090b;
    border-color: #656b75;
}
.toggle-2757 input:checked + .toggle-2757__track .toggle-2757__thumb {
    transform: translateX(20px);
    background: #f4f5f6;
}`,
  },
  {
    id: 2758,
    name: "Soft Gray Toggle",
    preview: (
      <label className="toggle-2758">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2758__track">
          <span className="toggle-2758__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2758">
    <input type="checkbox" checked />
    <span class="toggle-2758__track">
        <span class="toggle-2758__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2758 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2758 input {
    display: none;
}
.toggle-2758__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #3b3f46;
    transition: .25s ease;
}
.toggle-2758__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c4c8ce;
    transition: .25s ease;
}
.toggle-2758 input:checked + .toggle-2758__track {
    background: #8a9099;
}
.toggle-2758 input:checked + .toggle-2758__track .toggle-2758__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2759,
    name: "Indigo Toggle",
    preview: (
      <label className="toggle-2759">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2759__track">
          <span className="toggle-2759__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2759">
    <input type="checkbox" checked />
    <span class="toggle-2759__track">
        <span class="toggle-2759__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2759 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2759 input {
    display: none;
}
.toggle-2759__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #343841;
    transition: .25s ease;
}
.toggle-2759__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #bfc4cc;
    transition: .25s ease;
}
.toggle-2759 input:checked + .toggle-2759__track {
    background: #4f46e5;
}
.toggle-2759 input:checked + .toggle-2759__track .toggle-2759__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2760,
    name: "Teal Toggle",
    preview: (
      <label className="toggle-2760">
        <input type="checkbox" />
        <span className="toggle-2760__track">
          <span className="toggle-2760__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2760">
    <input type="checkbox" />
    <span class="toggle-2760__track">
        <span class="toggle-2760__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2760 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2760 input {
    display: none;
}
.toggle-2760__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #303940;
    transition: .25s ease;
}
.toggle-2760__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c2c7ce;
    transition: .25s ease;
}
.toggle-2760 input:checked + .toggle-2760__track {
    background: #14b8a6;
}
.toggle-2760 input:checked + .toggle-2760__track .toggle-2760__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2761,
    name: "Sky Toggle",
    preview: (
      <label className="toggle-2761">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2761__track">
          <span className="toggle-2761__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2761">
    <input type="checkbox" checked />
    <span class="toggle-2761__track">
        <span class="toggle-2761__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2761 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2761 input {
    display: none;
}
.toggle-2761__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #303941;
    transition: .25s ease;
}
.toggle-2761__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c3c8cf;
    transition: .25s ease;
}
.toggle-2761 input:checked + .toggle-2761__track {
    background: #0ea5e9;
}
.toggle-2761 input:checked + .toggle-2761__track .toggle-2761__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2762,
    name: "Rose Toggle",
    preview: (
      <label className="toggle-2762">
        <input type="checkbox" />
        <span className="toggle-2762__track">
          <span className="toggle-2762__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2762">
    <input type="checkbox" />
    <span class="toggle-2762__track">
        <span class="toggle-2762__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2762 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2762 input {
    display: none;
}
.toggle-2762__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #30343c;
    transition: .25s ease;
}
.toggle-2762__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c4c9d0;
    transition: .25s ease;
}
.toggle-2762 input:checked + .toggle-2762__track {
    background: #f43f5e;
}
.toggle-2762 input:checked + .toggle-2762__track .toggle-2762__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2763,
    name: "Lime Toggle",
    preview: (
      <label className="toggle-2763">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2763__track">
          <span className="toggle-2763__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2763">
    <input type="checkbox" checked />
    <span class="toggle-2763__track">
        <span class="toggle-2763__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2763 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2763 input {
    display: none;
}
.toggle-2763__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #30353a;
    transition: .25s ease;
}
.toggle-2763__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c8ccd1;
    transition: .25s ease;
}
.toggle-2763 input:checked + .toggle-2763__track {
    background: #84cc16;
}
.toggle-2763 input:checked + .toggle-2763__track .toggle-2763__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2764,
    name: "Bordered Toggle",
    preview: (
      <label className="toggle-2764">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2764__track">
          <span className="toggle-2764__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2764">
    <input type="checkbox" checked />
    <span class="toggle-2764__track">
        <span class="toggle-2764__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2764 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2764 input {
    display: none;
}
.toggle-2764__track {
    width: 45px;
    height: 25px;
    padding: 3px;
    border: 1px solid #474d56;
    border-radius: 20px;
    background: #22252b;
    transition: .25s ease;
}
.toggle-2764__thumb {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #858b95;
    transition: .25s ease;
}
.toggle-2764 input:checked + .toggle-2764__track {
    border-color: #6366f1;
    background: #252536;
}
.toggle-2764 input:checked + .toggle-2764__track .toggle-2764__thumb {
    transform: translateX(19px);
    background: #818cf8;
}`,
  },
  {
    id: 2765,
    name: "Flat Toggle",
    preview: (
      <label className="toggle-2765">
        <input type="checkbox" />
        <span className="toggle-2765__track">
          <span className="toggle-2765__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2765">
    <input type="checkbox" />
    <span class="toggle-2765__track">
        <span class="toggle-2765__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2765 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2765 input {
    display: none;
}
.toggle-2765__track {
    width: 42px;
    height: 23px;
    border-radius: 20px;
    background: #454a52;
    padding: 3px;
    transition: .25s ease;
}
.toggle-2765__thumb {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #d2d5da;
    transition: .25s ease;
}
.toggle-2765 input:checked + .toggle-2765__track {
    background: #475569;
}
.toggle-2765 input:checked + .toggle-2765__track .toggle-2765__thumb {
    transform: translateX(19px);
    background: #fff;
}`,
  },
  {
    id: 2766,
    name: "Soft Purple Toggle",
    preview: (
      <label className="toggle-2766">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2766__track">
          <span className="toggle-2766__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2766">
    <input type="checkbox" checked />
    <span class="toggle-2766__track">
        <span class="toggle-2766__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2766 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2766 input {
    display: none;
}
.toggle-2766__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #34353d;
    transition: .25s ease;
}
.toggle-2766__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6c8cf;
    transition: .25s ease;
}
.toggle-2766 input:checked + .toggle-2766__track {
    background: #6d5dfc;
    box-shadow: 0 0 10px rgba(109,93,252,.2);
}
.toggle-2766 input:checked + .toggle-2766__track .toggle-2766__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2767,
    name: "Soft Blue Toggle",
    preview: (
      <label className="toggle-2767">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2767__track">
          <span className="toggle-2767__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2767">
    <input type="checkbox" checked />
    <span class="toggle-2767__track">
        <span class="toggle-2767__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2767 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2767 input {
    display: none;
}
.toggle-2767__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #343940;
    transition: .25s ease;
}
.toggle-2767__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cbd1;
    transition: .25s ease;
}
.toggle-2767 input:checked + .toggle-2767__track {
    background: #4d94ff;
    box-shadow: 0 0 10px rgba(77,148,255,.18);
}
.toggle-2767 input:checked + .toggle-2767__track .toggle-2767__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2768,
    name: "Soft Green Toggle",
    preview: (
      <label className="toggle-2768">
        <input type="checkbox" />
        <span className="toggle-2768__track">
          <span className="toggle-2768__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2768">
    <input type="checkbox" />
    <span class="toggle-2768__track">
        <span class="toggle-2768__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2768 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2768 input {
    display: none;
}
.toggle-2768__track {
    width: 44px;
    height: 24px;
    padding: 3px;
    border-radius: 20px;
    background: #343940;
    transition: .25s ease;
}
.toggle-2768__thumb {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #c6cbd1;
    transition: .25s ease;
}
.toggle-2768 input:checked + .toggle-2768__track {
    background: #32c77a;
    box-shadow: 0 0 10px rgba(50,199,122,.16);
}
.toggle-2768 input:checked + .toggle-2768__track .toggle-2768__thumb {
    transform: translateX(20px);
    background: #fff;
}`,
  },
  {
    id: 2769,
    name: "Modern Toggle",
    preview: (
      <label className="toggle-2769">
        <input type="checkbox" defaultChecked />
        <span className="toggle-2769__track">
          <span className="toggle-2769__thumb"></span>
        </span>
      </label>
    ),
    html: `<label class="toggle-2769">
    <input type="checkbox" checked />
    <span class="toggle-2769__track">
        <span class="toggle-2769__thumb"></span>
    </span>
</label>`,
    css: `.toggle-2769 {
    display: inline-flex;
    cursor: pointer;
}
.toggle-2769 input {
    display: none;
}
.toggle-2769__track {
    width: 46px;
    height: 25px;
    padding: 3px;
    border: 1px solid #343942;
    border-radius: 20px;
    background: #24272d;
    transition: .25s ease;
}
.toggle-2769__thumb {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #a3a8b0;
    transition: .25s ease;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
}
.toggle-2769 input:checked + .toggle-2769__track {
    background: #635bff;
    border-color: #756eff;
}
.toggle-2769 input:checked + .toggle-2769__track .toggle-2769__thumb {
    transform: translateX(21px);
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
}`,
  },
];
