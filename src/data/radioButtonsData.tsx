import "../pages/All.css";

export const radiobuttons = [
  {
    id: 201,
    name: "radiobuttons",
    preview: (
      <div className="radio-input-201">
        <label>
          <input
            type="radio"
            name="value-radio-201"
            value="designer"
            defaultChecked
          />
          <p className="text">Designer</p>
        </label>
        <label>
          <input type="radio" name="value-radio-201" value="student" />
          <p className="text">Student</p>
        </label>

        <label>
          <input type="radio" name="value-radio-201" value="teacher" />
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
}`,
  },
  {
    id: 202,
    name: "radiobuttons",
    preview: (
      <div className="radio-input-202">
        <div>
          <label>
            <input
              type="radio"
              name="gender-radio-202"
              value="women"
              defaultChecked
            />
            <span>Women</span>
          </label>
          <label>
            <input type="radio" name="gender-radio-202" value="men" />
            <span>Men</span>
          </label>
          <label>
            <input type="radio" name="gender-radio-202" value="divided" />
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
}`,
  },
  {
    id: 203,
    name: "radiobuttons",
    preview: (
      <div className="radio-input-203">
        <label className="label">
          <input
            type="radio"
            name="action-radio-203"
            value="play"
            defaultChecked
          />
          <span className="text">Play</span>
        </label>

        <label className="label">
          <input type="radio" name="action-radio-203" value="stop" />
          <span className="text">Stop</span>
        </label>

        <label className="label">
          <input type="radio" name="action-radio-203" value="reset" />
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
}`,
  },
  {
    id: 204,
    name: "radiobuttons",
    preview: (
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
}`,
  },
  {
    id: 205,
    name: "sidebarbuttons",
    preview: (
      <div className="sb-205-input">
        <button className="sb-205-value">Public profile</button>

        <button className="sb-205-value">Account</button>

        <button className="sb-205-value">Appearance</button>

        <button className="sb-205-value">Accessibility</button>

        <button className="sb-205-value">Notifications</button>
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
}`,
  },
  {
    id: 206,
    name: "radiobuttons",
    preview: (
      <div className="rb-206-radio-input">
        <label className="rb-206-label">
          <input
            type="radio"
            name="rb-206-role"
            value="designer"
            defaultChecked
          />
          <p className="rb-206-text">Designer</p>
        </label>

        <label className="rb-206-label">
          <input type="radio" name="rb-206-role" value="student" />
          <p className="rb-206-text">Student</p>
        </label>

        <label className="rb-206-label">
          <input type="radio" name="rb-206-role" value="teacher" />
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
}`,
  },
  {
    id: 207,
    name: "radiobuttons",
    preview: (
      <div className="rb-207-container">
        <div className="rb-207-radio-wrapper">
          <input className="rb-207-input" name="rb-207-btn" type="radio" />
          <div className="rb-207-btn">
            <span aria-hidden="true">_</span>
            Cyber
            <span className="rb-207-btn__glitch" aria-hidden="true">
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
            defaultChecked
          />
          <div className="rb-207-btn">
            _Radio<span aria-hidden="true">_</span>
            <span className="rb-207-btn__glitch" aria-hidden="true">
              _R_a_d_i_o_
            </span>
            <label className="rb-207-number">r2</label>
          </div>
        </div>
        <div className="rb-207-radio-wrapper">
          <input className="rb-207-input" name="rb-207-btn" type="radio" />
          <div className="rb-207-btn">
            Buttons
            <span className="rb-207-btn__glitch" aria-hidden="true">
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
}`,
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
          defaultChecked
        />
        <label htmlFor="rb-208-silver">Silver</label>
        <input type="radio" name="rb-208-plan" id="rb-208-gold" />
        <label htmlFor="rb-208-gold">Gold</label>
        <input type="radio" name="rb-208-plan" id="rb-208-platinum" />
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
}`,
  },
  {
    id: 209,
    name: "radiobuttons",
    preview: (
      <div className="rb-209-radio-input">
        <div className="rb-209-center"></div>
        <label className="rb-209-label rb-209-spring">
          <input
            type="radio"
            name="rb-209-seasons"
            value="spring"
            defaultChecked
          />
          <span className="rb-209-text rb-209-spring">Spring</span>
        </label>
        <label className="rb-209-label rb-209-summer">
          <input type="radio" name="rb-209-seasons" value="summer" />
          <span className="rb-209-text rb-209-summer">Summer</span>
        </label>
        <label className="rb-209-label rb-209-autumn">
          <input type="radio" name="rb-209-seasons" value="autumn" />
          <span className="rb-209-text rb-209-autumn">Autumn</span>
        </label>
        <label className="rb-209-label rb-209-winter">
          <input type="radio" name="rb-209-seasons" value="winter" />
          <span className="rb-209-text rb-209-winter">Winter</span>
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
}`,
  },
  {
    id: 851,
    name: "Basic Radio Group",
    preview: (
      <div className="radio-851">
        <label>
          <input type="radio" name="radio-851" defaultChecked />
          <span>Option one</span>
        </label>
        <label>
          <input type="radio" name="radio-851" />
          <span>Option two</span>
        </label>
        <label>
          <input type="radio" name="radio-851" />
          <span>Option three</span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="basic-radio" checked>
        <span>Option one</span>
    </label>
    <label>
        <input type="radio" name="basic-radio">
        <span>Option two</span>
    </label>
    <label>
        <input type="radio" name="basic-radio">
        <span>Option three</span>
    </label>
</div>`,
    css: `.RadioGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #3f3f46;
    font-size: 13px;
    cursor: pointer;
}

.RadioGroup input {
    width: 17px;
    height: 17px;
    accent-color: #2563eb;
}`,
  },
  {
    id: 852,
    name: "Custom Circle Radio",
    preview: (
      <div className="radio-852">
        <label>
          <input type="radio" name="radio-852" defaultChecked />
          <span className="radio-852__circle"></span>
          <span>Standard delivery</span>
        </label>
        <label>
          <input type="radio" name="radio-852" />
          <span className="radio-852__circle"></span>
          <span>Express delivery</span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="delivery" checked>
        <span class="Radio-circle"></span>
        <span>Standard delivery</span>
    </label>
    <label>
        <input type="radio" name="delivery">
        <span class="Radio-circle"></span>
        <span>Express delivery</span>
    </label>
</div>`,
    css: `.RadioGroup {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #27272a;
    font-size: 13px;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-circle {
    width: 18px;
    height: 18px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
    transition: all 0.2s;
}

.RadioGroup input:checked + .Radio-circle {
    border-color: #2563eb;
}

.RadioGroup input:checked + .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #2563eb;
}`,
  },
  {
    id: 853,
    name: "Radio Cards",
    preview: (
      <div className="radio-853">
        <label>
          <input type="radio" name="radio-853" defaultChecked />
          <div className="radio-853__card">
            <div className="radio-853__radio"></div>
            <div>
              <strong>Personal</strong>
              <span>For individuals and freelancers</span>
            </div>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-853" />
          <div className="radio-853__card">
            <div className="radio-853__radio"></div>
            <div>
              <strong>Business</strong>
              <span>For teams and companies</span>
            </div>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioCards">
    <label>
        <input type="radio" name="account-type" checked>
        <div class="Radio-card">
            <div class="Radio-radio"></div>
            <div>
                <strong>Personal</strong>
                <span>For individuals and freelancers</span>
            </div>
        </div>
    </label>
    <label>
        <input type="radio" name="account-type">
        <div class="Radio-card">
            <div class="Radio-radio"></div>
            <div>
                <strong>Business</strong>
                <span>For teams and companies</span>
            </div>
        </div>
    </label>
</div>`,
    css: `.RadioCards {
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.RadioCards label {
    display: block;
    cursor: pointer;
}

.RadioCards input {
    display: none;
}

.Radio-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    transition: all 0.2s;
}

.RadioCards input:checked + .Radio-card {
    border-color: #2563eb;
    background: #eff6ff;
}

.Radio-radio {
    width: 18px;
    height: 18px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioCards input:checked + .Radio-card .Radio-radio {
    border-color: #2563eb;
}

.RadioCards input:checked + .Radio-card .Radio-radio::after {
    content: "";
    position: absolute;
    inset: 4px;
    background: #2563eb;
    border-radius: 50%;
}

.Radio-card strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}

.Radio-card span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 10px;
}`,
  },
  {
    id: 854,
    name: "Payment Method Radio",
    preview: (
      <div className="radio-854">
        <label>
          <input type="radio" name="radio-854" defaultChecked />
          <div className="radio-854__option">
            <div className="radio-854__icon">
              <i className="fa-regular fa-credit-card"></i>
            </div>
            <div>
              <strong>Credit card</strong>
              <span>Visa ending in 4242</span>
            </div>
            <div className="radio-854__circle"></div>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-854" />
          <div className="radio-854__option">
            <div className="radio-854__icon">
              <i className="fa-brands fa-paypal"></i>
            </div>
            <div>
              <strong>PayPal</strong>
              <span>Pay with your PayPal account</span>
            </div>
            <div className="radio-854__circle"></div>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="payment" checked>
        <div class="Radio-option">
            <div class="Radio-icon">
                <i class="fa-regular fa-credit-card"></i>
            </div>
            <div>
                <strong>Credit card</strong>
                <span>Visa ending in 4242</span>
            </div>
            <div class="Radio-circle"></div>
        </div>
    </label>
    <label>
        <input type="radio" name="payment">
        <div class="Radio-option">
            <div class="Radio-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>
            <div>
                <strong>PayPal</strong>
                <span>Pay with your PayPal account</span>
            </div>
            <div class="Radio-circle"></div>
        </div>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.RadioGroup label {
    display: block;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-option {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
}

.RadioGroup input:checked + .Radio-option {
    border-color: #2563eb;
    background: #eff6ff;
}

.Radio-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #52525b;
}

.Radio-option strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}

.Radio-option span {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}

.Radio-circle {
    width: 17px;
    height: 17px;
    margin-left: auto;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioGroup input:checked + .Radio-option .Radio-circle {
    border-color: #2563eb;
}

.RadioGroup input:checked + .Radio-option .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #2563eb;
}`,
  },
  {
    id: 855,
    name: "Pricing Radio",
    preview: (
      <div className="radio-855">
        <label>
          <input type="radio" name="radio-855" defaultChecked />
          <div className="radio-855__card">
            <div className="radio-855__top">
              <span>MONTHLY</span>
              <div className="radio-855__circle"></div>
            </div>
            <strong>$19</strong>
            <small>per month</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-855" />
          <div className="radio-855__card">
            <div className="radio-855__top">
              <span>YEARLY</span>
              <div className="radio-855__circle"></div>
            </div>
            <strong>$190</strong>
            <small>per year</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioPlans">
    <label>
        <input type="radio" name="billing" checked>
        <div class="Radio-card">
            <div class="Radio-top">
                <span>MONTHLY</span>
                <div class="Radio-circle"></div>
            </div>
            <strong>$19</strong>
            <small>per month</small>
        </div>
    </label>
    <label>
        <input type="radio" name="billing">
        <div class="Radio-card">
            <div class="Radio-top">
                <span>YEARLY</span>
                <div class="Radio-circle"></div>
            </div>
            <strong>$190</strong>
            <small>per year</small>
        </div>
    </label>
</div>`,
    css: `.RadioPlans {
    display: flex;
    gap: 10px;
}

.RadioPlans label {
    display: block;
    cursor: pointer;
}

.RadioPlans input {
    display: none;
}

.Radio-card {
    width: 130px;
    padding: 14px;
    box-sizing: border-box;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #fff;
}

.RadioPlans input:checked + .Radio-card {
    border-color: #7c3aed;
    background: #faf5ff;
}

.Radio-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Radio-top span {
    color: #71717a;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.1em;
}

.Radio-circle {
    width: 15px;
    height: 15px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioPlans input:checked + .Radio-card .Radio-circle {
    border-color: #7c3aed;
}

.RadioPlans input:checked + .Radio-card .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #7c3aed;
}

.Radio-card strong {
    display: block;
    margin-top: 18px;
    color: #18181b;
    font-size: 24px;
}

.Radio-card small {
    color: #a1a1aa;
    font-size: 9px;
}`,
  },
  {
    id: 856,
    name: "Icon Radio List",
    preview: (
      <div className="radio-856">
        <label>
          <input type="radio" name="radio-856" defaultChecked />
          <span className="radio-856__icon">
            <i className="fa-solid fa-house"></i>
          </span>
          <span>Home</span>
          <i className="fa-solid fa-circle-check radio-856__check"></i>
        </label>
        <label>
          <input type="radio" name="radio-856" />
          <span className="radio-856__icon">
            <i className="fa-solid fa-building"></i>
          </span>
          <span>Office</span>
        </label>
        <label>
          <input type="radio" name="radio-856" />
          <span className="radio-856__icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <span>Other</span>
        </label>
      </div>
    ),
    html: `<div class="RadioList">
    <label>
        <input type="radio" name="address" checked>
        <span class="Radio-icon">
            <i class="fa-solid fa-house"></i>
        </span>
        <span>Home</span>
        <i class="fa-solid fa-circle-check Radio-check"></i>
    </label>
    <label>
        <input type="radio" name="address">
        <span class="Radio-icon">
            <i class="fa-solid fa-building"></i>
        </span>
        <span>Office</span>
    </label>
    <label>
        <input type="radio" name="address">
        <span class="Radio-icon">
            <i class="fa-solid fa-location-dot"></i>
        </span>
        <span>Other</span>
    </label>
</div>`,
    css: `.RadioList {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.RadioList label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    border-radius: 9px;
    cursor: pointer;
}

.RadioList label:hover {
    background: #f4f4f5;
}

.RadioList input {
    display: none;
}

.Radio-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #71717a;
}

.RadioList input:checked ~ .Radio-icon {
    background: #eff6ff;
    color: #2563eb;
}

.RadioList label > span:nth-of-type(2) {
    color: #3f3f46;
    font-size: 11px;
    font-weight: 600;
}

.Radio-check {
    display: none;
    margin-left: auto;
    color: #2563eb;
}

.RadioList input:checked ~ .Radio-check {
    display: block;
}`,
  },
  {
    id: 857,
    name: "Dark Radio Cards",
    preview: (
      <div className="radio-857">
        <label>
          <input type="radio" name="radio-857" defaultChecked />
          <div className="radio-857__card">
            <span className="radio-857__circle"></span>
            <div>
              <strong>Dark mode</strong>
              <small>Easy on your eyes.</small>
            </div>
            <i className="fa-solid fa-moon"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-857" />
          <div className="radio-857__card">
            <span className="radio-857__circle"></span>
            <div>
              <strong>Light mode</strong>
              <small>Clean and bright.</small>
            </div>
            <i className="fa-solid fa-sun"></i>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioCards">
    <label>
        <input type="radio" name="theme" checked>
        <div class="Radio-card">
            <span class="Radio-circle"></span>
            <div>
                <strong>Dark mode</strong>
                <small>Easy on your eyes.</small>
            </div>
            <i class="fa-solid fa-moon"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="theme">
        <div class="Radio-card">
            <span class="Radio-circle"></span>
            <div>
                <strong>Light mode</strong>
                <small>Clean and bright.</small>
            </div>
            <i class="fa-solid fa-sun"></i>
        </div>
    </label>
</div>`,
    css: `.RadioCards {
    width: 330px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.RadioCards label {
    cursor: pointer;
}

.RadioCards input {
    display: none;
}

.Radio-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px;
    border: 1px solid #27272a;
    border-radius: 11px;
    background: #18181b;
    color: #fff;
}

.RadioCards input:checked + .Radio-card {
    border-color: #6366f1;
    background: #1e1b4b;
}

.Radio-circle {
    width: 16px;
    height: 16px;
    border: 2px solid #52525b;
    border-radius: 50%;
    position: relative;
}

.RadioCards input:checked + .Radio-card .Radio-circle {
    border-color: #818cf8;
}

.RadioCards input:checked + .Radio-card .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #818cf8;
}

.Radio-card > div {
    flex: 1;
}

.Radio-card strong {
    display: block;
    font-size: 11px;
}

.Radio-card small {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}

.RadioCards .Radio-card > i {
    color: #818cf8;
}`,
  },
  {
    id: 858,
    name: "Horizontal Radio Group",
    preview: (
      <div className="radio-858">
        <label>
          <input type="radio" name="radio-858" defaultChecked />
          <span>Small</span>
        </label>
        <label>
          <input type="radio" name="radio-858" />
          <span>Medium</span>
        </label>
        <label>
          <input type="radio" name="radio-858" />
          <span>Large</span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="size" checked>
        <span>Small</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>Medium</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>Large</span>
    </label>
</div>`,
    css: `.RadioGroup {
    display: flex;
    padding: 4px;
    gap: 3px;
    background: #f4f4f5;
    border-radius: 10px;
}

.RadioGroup label {
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.RadioGroup label span {
    display: block;
    padding: 8px 15px;
    color: #71717a;
    border-radius: 7px;
    font-size: 11px;
    font-weight: 600;
}

.RadioGroup input:checked + span {
    background: #fff;
    color: #18181b;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}`,
  },
  {
    id: 859,
    name: "Shipping Option Radio",
    preview: (
      <div className="radio-859">
        <label>
          <input type="radio" name="radio-859" defaultChecked />
          <div className="radio-859__option">
            <i className="fa-solid fa-truck-fast"></i>
            <div>
              <strong>Express shipping</strong>
              <span>Arrives tomorrow</span>
            </div>
            <strong className="radio-859__price">$12</strong>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-859" />
          <div className="radio-859__option">
            <i className="fa-solid fa-box"></i>
            <div>
              <strong>Standard shipping</strong>
              <span>Arrives in 3–5 days</span>
            </div>
            <strong className="radio-859__price">Free</strong>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="shipping" checked>
        <div class="Radio-option">
            <i class="fa-solid fa-truck-fast"></i>
            <div>
                <strong>Express shipping</strong>
                <span>Arrives tomorrow</span>
            </div>
            <strong class="Radio-price">$12</strong>
        </div>
    </label>
    <label>
        <input type="radio" name="shipping">
        <div class="Radio-option">
            <i class="fa-solid fa-box"></i>
            <div>
                <strong>Standard shipping</strong>
                <span>Arrives in 3–5 days</span>
            </div>
            <strong class="Radio-price">Free</strong>
        </div>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.RadioGroup label {
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-option {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
}

.RadioGroup input:checked + .Radio-option {
    border-color: #22c55e;
    background: #f0fdf4;
}

.Radio-option > i {
    color: #71717a;
    font-size: 16px;
}

.Radio-option > div {
    flex: 1;
}

.Radio-option div strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}

.Radio-option div span {
    display: block;
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 9px;
}

.Radio-price {
    color: #18181b;
    font-size: 11px;
}`,
  },
  {
    id: 860,
    name: "Color Radio",
    preview: (
      <div className="radio-860">
        <label>
          <input type="radio" name="radio-860" defaultChecked />
          <span className="radio-860__swatch radio-860__blue"></span>
        </label>
        <label>
          <input type="radio" name="radio-860" />
          <span className="radio-860__swatch radio-860__purple"></span>
        </label>
        <label>
          <input type="radio" name="radio-860" />
          <span className="radio-860__swatch radio-860__green"></span>
        </label>
        <label>
          <input type="radio" name="radio-860" />
          <span className="radio-860__swatch radio-860__orange"></span>
        </label>
      </div>
    ),
    html: `<div class="RadioColors">
    <label>
        <input type="radio" name="color" checked>
        <span class="Radio-swatch Radio-blue"></span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-swatch Radio-purple"></span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-swatch Radio-green"></span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-swatch Radio-orange"></span>
    </label>
</div>`,
    css: `.RadioColors {
    display: flex;
    align-items: center;
    gap: 10px;
}

.RadioColors label {
    cursor: pointer;
}

.RadioColors input {
    display: none;
}

.Radio-swatch {
    width: 29px;
    height: 29px;
    display: block;
    border-radius: 50%;
    border: 3px solid #fff;
    outline: 1px solid #d4d4d8;
}

.RadioColors input:checked + .Radio-swatch {
    outline: 2px solid #18181b;
    outline-offset: 2px;
}

.Radio-blue {
    background: #3b82f6;
}

.Radio-purple {
    background: #8b5cf6;
}

.Radio-green {
    background: #22c55e;
}

.Radio-orange {
    background: #f97316;
}`,
  },
  {
    id: 861,
    name: "Radio With Description",
    preview: (
      <div className="radio-861">
        <label>
          <input type="radio" name="radio-861" defaultChecked />
          <span className="radio-861__circle"></span>
          <div>
            <strong>Public profile</strong>
            <span>Anyone can view your profile and activity.</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-861" />
          <span className="radio-861__circle"></span>
          <div>
            <strong>Private profile</strong>
            <span>Only approved people can view your profile.</span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="visibility" checked>
        <span class="Radio-circle"></span>
        <div>
            <strong>Public profile</strong>
            <span>Anyone can view your profile and activity.</span>
        </div>
    </label>
    <label>
        <input type="radio" name="visibility">
        <span class="Radio-circle"></span>
        <div>
            <strong>Private profile</strong>
            <span>Only approved people can view your profile.</span>
        </div>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.RadioGroup label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-circle {
    width: 18px;
    height: 18px;
    margin-top: 1px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;
}

.RadioGroup input:checked + .Radio-circle {
    border-color: #2563eb;
}

.RadioGroup input:checked + .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #2563eb;
}

.RadioGroup label > div {
    flex: 1;
}

.RadioGroup label strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}

.RadioGroup label div span {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 10px;
    line-height: 1.4;
}`,
  },
  {
    id: 862,
    name: "Radio With Badge",
    preview: (
      <div className="radio-862">
        <label>
          <input type="radio" name="radio-862" defaultChecked />
          <span className="radio-862__circle"></span>
          <span>Starter</span>
          <span className="radio-862__badge">Popular</span>
        </label>
        <label>
          <input type="radio" name="radio-862" />
          <span className="radio-862__circle"></span>
          <span>Professional</span>
          <span className="radio-862__badge radio-862__badge--blue">
            Best value
          </span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="plan" checked>
        <span class="Radio-circle"></span>
        <span>Starter</span>
        <span class="Radio-badge">Popular</span>
    </label>
    <label>
        <input type="radio" name="plan">
        <span class="Radio-circle"></span>
        <span>Professional</span>
        <span class="Radio-badge Radio-badge-blue">Best value</span>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-circle {
    width: 17px;
    height: 17px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioGroup input:checked + .Radio-circle {
    border-color: #7c3aed;
}

.RadioGroup input:checked + .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #7c3aed;
}

.RadioGroup label > span:nth-of-type(2) {
    color: #27272a;
    font-size: 11px;
    font-weight: 600;
}

.Radio-badge {
    margin-left: auto;
    padding: 3px 7px;
    border-radius: 999px;
    background: #fef3c7;
    color: #92400e;
    font-size: 8px;
    font-weight: 700;
}

.Radio-badge-blue {
    background: #dbeafe;
    color: #1d4ed8;
}`,
  },
  {
    id: 863,
    name: "Segmented Radio",
    preview: (
      <div className="radio-863">
        <label>
          <input type="radio" name="radio-863" defaultChecked />
          <span>
            <i className="fa-solid fa-list"></i>
            List
          </span>
        </label>
        <label>
          <input type="radio" name="radio-863" />
          <span>
            <i className="fa-solid fa-table-cells"></i>
            Grid
          </span>
        </label>
        <label>
          <input type="radio" name="radio-863" />
          <span>
            <i className="fa-solid fa-chart-bar"></i>
            Chart
          </span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="view" checked>
        <span><i class="fa-solid fa-list"></i> List</span>
    </label>
    <label>
        <input type="radio" name="view">
        <span><i class="fa-solid fa-table-cells"></i> Grid</span>
    </label>
    <label>
        <input type="radio" name="view">
        <span><i class="fa-solid fa-chart-bar"></i> Chart</span>
    </label>
</div>`,
    css: `.RadioGroup {
    display: flex;
    padding: 4px;
    gap: 3px;
    background: #f4f4f5;
    border-radius: 10px;
}

.RadioGroup label {
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.RadioGroup label span {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 7px;
    color: #71717a;
    font-size: 10px;
    font-weight: 600;
}

.RadioGroup input:checked + span {
    background: #18181b;
    color: #fff;
}

.RadioGroup i {
    font-size: 10px;
}`,
  },
  {
    id: 864,
    name: "Glass Radio",
    preview: (
      <div className="radio-864">
        <label>
          <input type="radio" name="radio-864" defaultChecked />
          <span className="radio-864__circle"></span>
          <span>Glass option one</span>
        </label>
        <label>
          <input type="radio" name="radio-864" />
          <span className="radio-864__circle"></span>
          <span>Glass option two</span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="glass-radio" checked>
        <span class="Radio-circle"></span>
        <span>Glass option one</span>
    </label>
    <label>
        <input type="radio" name="glass-radio">
        <span class="Radio-circle"></span>
        <span>Glass option two</span>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 300px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    background: linear-gradient(135deg, #111827, #1e293b);
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px;
    border-radius: 9px;
    color: #dbeafe;
    font-size: 11px;
    cursor: pointer;
}

.RadioGroup label:hover {
    background: rgba(255, 255, 255, 0.05);
}

.RadioGroup input {
    display: none;
}

.Radio-circle {
    width: 17px;
    height: 17px;
    border: 2px solid #475569;
    border-radius: 50%;
    position: relative;
}

.RadioGroup input:checked + .Radio-circle {
    border-color: #38bdf8;
}

.RadioGroup input:checked + .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #38bdf8;
}`,
  },
  {
    id: 865,
    name: "Radio With Keyboard Hint",
    preview: (
      <div className="radio-865">
        <label>
          <input type="radio" name="radio-865" defaultChecked />
          <span className="radio-865__circle"></span>
          <span>Enable notifications</span>
          <kbd>1</kbd>
        </label>
        <label>
          <input type="radio" name="radio-865" />
          <span className="radio-865__circle"></span>
          <span>Disable notifications</span>
          <kbd>2</kbd>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="notifications" checked>
        <span class="Radio-circle"></span>
        <span>Enable notifications</span>
        <kbd>1</kbd>
    </label>
    <label>
        <input type="radio" name="notifications">
        <span class="Radio-circle"></span>
        <span>Disable notifications</span>
        <kbd>2</kbd>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 330px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-circle {
    width: 16px;
    height: 16px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioGroup input:checked + .Radio-circle {
    border-color: #2563eb;
}

.RadioGroup input:checked + .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #2563eb;
    border-radius: 50%;
}

.RadioGroup label > span:nth-of-type(2) {
    flex: 1;
    color: #3f3f46;
    font-size: 11px;
}

.RadioGroup kbd {
    min-width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 5px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 9px;
}`,
  },
  {
    id: 866,
    name: "Radio Icon Tiles",
    preview: (
      <div className="radio-866">
        <label>
          <input type="radio" name="radio-866" defaultChecked />
          <div className="radio-866__tile">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>Mobile</span>
            <small>320px</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-866" />
          <div className="radio-866__tile">
            <i className="fa-solid fa-tablet-screen-button"></i>
            <span>Tablet</span>
            <small>768px</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-866" />
          <div className="radio-866__tile">
            <i className="fa-solid fa-desktop"></i>
            <span>Desktop</span>
            <small>1440px</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioTiles">
    <label>
        <input type="radio" name="device" checked>
        <div class="Radio-tile">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>Mobile</span>
            <small>320px</small>
        </div>
    </label>
    <label>
        <input type="radio" name="device">
        <div class="Radio-tile">
            <i class="fa-solid fa-tablet-screen-button"></i>
            <span>Tablet</span>
            <small>768px</small>
        </div>
    </label>
    <label>
        <input type="radio" name="device">
        <div class="Radio-tile">
            <i class="fa-solid fa-desktop"></i>
            <span>Desktop</span>
            <small>1440px</small>
        </div>
    </label>
</div>`,
    css: `.RadioTiles {
    display: flex;
    gap: 8px;
}

.RadioTiles label {
    cursor: pointer;
}

.RadioTiles input {
    display: none;
}

.Radio-tile {
    width: 88px;
    padding: 13px 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}

.RadioTiles input:checked + .Radio-tile {
    border-color: #2563eb;
    color: #2563eb;
    background: #eff6ff;
}

.Radio-tile i {
    font-size: 18px;
}

.Radio-tile span {
    margin-top: 8px;
    color: #18181b;
    font-size: 10px;
    font-weight: 700;
}

.Radio-tile small {
    margin-top: 2px;
    color: #a1a1aa;
    font-size: 8px;
}`,
  },
  {
    id: 867,
    name: "Minimal Dot Radio",
    preview: (
      <div className="radio-867">
        <label>
          <input type="radio" name="radio-867" defaultChecked />
          <span className="radio-867__dot"></span>
          <span>Automatic</span>
        </label>
        <label>
          <input type="radio" name="radio-867" />
          <span className="radio-867__dot"></span>
          <span>Manual</span>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="mode" checked>
        <span class="Radio-dot"></span>
        <span>Automatic</span>
    </label>
    <label>
        <input type="radio" name="mode">
        <span class="Radio-dot"></span>
        <span>Manual</span>
    </label>
</div>`,
    css: `.RadioGroup {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.RadioGroup label {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #52525b;
    font-size: 12px;
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-dot {
    width: 19px;
    height: 19px;
    box-sizing: border-box;
    border: 1px solid #a1a1aa;
    border-radius: 50%;
    padding: 3px;
}

.RadioGroup input:checked + .Radio-dot {
    border-color: #18181b;
}

.RadioGroup input:checked + .Radio-dot::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #18181b;
}`,
  },
  {
    id: 868,
    name: "Gradient Radio",
    preview: (
      <div className="radio-868">
        <label>
          <input type="radio" name="radio-868" defaultChecked />
          <div className="radio-868__option">
            <span className="radio-868__circle"></span>
            <div>
              <strong>Pro</strong>
              <small>Everything you need</small>
            </div>
            <i className="fa-solid fa-bolt"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-868" />
          <div className="radio-868__option">
            <span className="radio-868__circle"></span>
            <div>
              <strong>Enterprise</strong>
              <small>For larger teams</small>
            </div>
            <i className="fa-solid fa-building"></i>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioGroup">
    <label>
        <input type="radio" name="plan" checked>
        <div class="Radio-option">
            <span class="Radio-circle"></span>
            <div>
                <strong>Pro</strong>
                <small>Everything you need</small>
            </div>
            <i class="fa-solid fa-bolt"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="plan">
        <div class="Radio-option">
            <span class="Radio-circle"></span>
            <div>
                <strong>Enterprise</strong>
                <small>For larger teams</small>
            </div>
            <i class="fa-solid fa-building"></i>
        </div>
    </label>
</div>`,
    css: `.RadioGroup {
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.RadioGroup label {
    cursor: pointer;
}

.RadioGroup input {
    display: none;
}

.Radio-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}

.RadioGroup input:checked + .Radio-option {
    border-color: #8b5cf6;
    background: linear-gradient(135deg, #faf5ff, #eff6ff);
}

.Radio-circle {
    width: 17px;
    height: 17px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioGroup input:checked + .Radio-option .Radio-circle {
    border-color: #8b5cf6;
}

.RadioGroup input:checked + .Radio-option .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: #8b5cf6;
}

.Radio-option > div {
    flex: 1;
}

.Radio-option strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}

.Radio-option small {
    display: block;
    margin-top: 2px;
    color: #71717a;
    font-size: 9px;
}

.Radio-option > i {
    color: #8b5cf6;
}`,
  },
  {
    id: 869,
    name: "Compact Settings Radio",
    preview: (
      <div className="radio-869">
        <div className="radio-869__title">Refresh interval</div>
        <label>
          <input type="radio" name="radio-869" defaultChecked />
          <span>15 min</span>
        </label>
        <label>
          <input type="radio" name="radio-869" />
          <span>30 min</span>
        </label>
        <label>
          <input type="radio" name="radio-869" />
          <span>1 hour</span>
        </label>
      </div>
    ),
    html: `<div class="RadioSettings">
    <div class="Radio-title">Refresh interval</div>
    <label>
        <input type="radio" name="interval" checked>
        <span>15 min</span>
    </label>
    <label>
        <input type="radio" name="interval">
        <span>30 min</span>
    </label>
    <label>
        <input type="radio" name="interval">
        <span>1 hour</span>
    </label>
</div>`,
    css: `.RadioSettings {
    width: 250px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #fff;
}

.Radio-title {
    margin-bottom: 10px;
    color: #18181b;
    font-size: 11px;
    font-weight: 700;
}

.RadioSettings label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    color: #52525b;
    font-size: 10px;
    cursor: pointer;
}

.RadioSettings input {
    accent-color: #2563eb;
}`,
  },
  {
    id: 870,
    name: "Featured Radio Selection",
    preview: (
      <div className="radio-870">
        <label>
          <input type="radio" name="radio-870" defaultChecked />
          <div className="radio-870__card">
            <div className="radio-870__header">
              <span className="radio-870__icon">
                <i className="fa-solid fa-rocket"></i>
              </span>
              <span className="radio-870__badge">RECOMMENDED</span>
            </div>
            <strong>Launch package</strong>
            <p>Everything you need to launch your next project.</p>
            <div className="radio-870__bottom">
              <span>$49</span>
              <div className="radio-870__circle"></div>
            </div>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-870" />
          <div className="radio-870__card">
            <div className="radio-870__header">
              <span className="radio-870__icon">
                <i className="fa-solid fa-layer-group"></i>
              </span>
            </div>
            <strong>Starter package</strong>
            <p>A lightweight setup for smaller projects.</p>
            <div className="radio-870__bottom">
              <span>$29</span>
              <div className="radio-870__circle"></div>
            </div>
          </div>
        </label>
      </div>
    ),
    html: `<div class="RadioFeatured">
    <label>
        <input type="radio" name="package" checked>
        <div class="Radio-card">
            <div class="Radio-header">
                <span class="Radio-icon">
                    <i class="fa-solid fa-rocket"></i>
                </span>
                <span class="Radio-badge">RECOMMENDED</span>
            </div>
            <strong>Launch package</strong>
            <p>Everything you need to launch your next project.</p>
            <div class="Radio-bottom">
                <span>$49</span>
                <div class="Radio-circle"></div>
            </div>
        </div>
    </label>
    <label>
        <input type="radio" name="package">
        <div class="Radio-card">
            <div class="Radio-header">
                <span class="Radio-icon">
                    <i class="fa-solid fa-layer-group"></i>
                </span>
            </div>
            <strong>Starter package</strong>
            <p>A lightweight setup for smaller projects.</p>
            <div class="Radio-bottom">
                <span>$29</span>
                <div class="Radio-circle"></div>
            </div>
        </div>
    </label>
</div>`,
    css: `.RadioFeatured {
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.RadioFeatured label {
    cursor: pointer;
}

.RadioFeatured input {
    display: none;
}

.Radio-card {
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #fff;
    transition: all 0.2s;
}

.RadioFeatured input:checked + .Radio-card {
    border-color: #2563eb;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
    background: #f8fbff;
}

.Radio-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Radio-icon {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #eff6ff;
    color: #2563eb;
}

.Radio-badge {
    padding: 4px 7px;
    border-radius: 999px;
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: 0.05em;
}

.Radio-card > strong {
    display: block;
    margin-top: 12px;
    color: #18181b;
    font-size: 12px;
}

.Radio-card > p {
    margin: 5px 0 0;
    color: #71717a;
    font-size: 9px;
    line-height: 1.4;
}

.Radio-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
}

.Radio-bottom > span {
    color: #18181b;
    font-size: 17px;
    font-weight: 800;
}

.Radio-circle {
    width: 18px;
    height: 18px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
    position: relative;
}

.RadioFeatured input:checked + .Radio-card .Radio-circle {
    border-color: #2563eb;
}

.RadioFeatured input:checked + .Radio-card .Radio-circle::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #2563eb;
}`,
  },

  {
    id: 1321,
    name: "Legendary Settings Radio",
    preview: (
      <div className="radio-input-1321">
        <label>
          <input type="radio" name="radio-1321" defaultChecked />
          <span>
            <i className="fa-solid fa-bolt"></i>
            Performance
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1321" />
          <span>
            <i className="fa-solid fa-scale-balanced"></i>
            Balanced
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1321" />
          <span>
            <i className="fa-solid fa-battery-three-quarters"></i>
            Battery
          </span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="settings" checked>
        <span>
            <i class="fa-solid fa-bolt"></i>
            Performance
        </span>
    </label>
    <label>
        <input type="radio" name="settings">
        <span>
            <i class="fa-solid fa-scale-balanced"></i>
            Balanced
        </span>
    </label>
    <label>
        <input type="radio" name="settings">
        <span>
            <i class="fa-solid fa-battery-three-quarters"></i>
            Battery
        </span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 240px;
}
.Radio label {
    position: relative;
    display: block;
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 48px;
    padding: 0 14px;
    border: 1px solid #27272a;
    border-radius: 12px;
    background: #18181b;
    color: #a1a1aa;
    transition: .2s ease;
}
.Radio label span i {
    width: 18px;
    color: #71717a;
}
.Radio label:hover span {
    border-color: #52525b;
    color: #ffffff;
}
.Radio input:checked + span {
    border-color: #8b5cf6;
    background: linear-gradient(135deg, rgba(124,58,237,.2), rgba(139,92,246,.08));
    color: #ffffff;
    box-shadow: 0 0 0 3px rgba(139,92,246,.08);
}
.Radio input:checked + span i {
    color: #a78bfa;
}`,
  },
  {
    id: 1322,
    name: "Legendary Glass Radio",
    preview: (
      <div className="radio-input-1322">
        <label>
          <input type="radio" name="radio-1322" defaultChecked />
          <span className="radio-input-1322__dot"></span>
          <div>
            <strong>Creative</strong>
            <small>Maximum visual freedom</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1322" />
          <span className="radio-input-1322__dot"></span>
          <div>
            <strong>Minimal</strong>
            <small>Clean and focused</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1322" />
          <span className="radio-input-1322__dot"></span>
          <div>
            <strong>Experimental</strong>
            <small>Push the boundaries</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="style" checked>
        <span class="Radio-dot"></span>
        <div>
            <strong>Creative</strong>
            <small>Maximum visual freedom</small>
        </div>
    </label>
    <label>
        <input type="radio" name="style">
        <span class="Radio-dot"></span>
        <div>
            <strong>Minimal</strong>
            <small>Clean and focused</small>
        </div>
    </label>
    <label>
        <input type="radio" name="style">
        <span class="Radio-dot"></span>
        <div>
            <strong>Experimental</strong>
            <small>Push the boundaries</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 270px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 13px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 14px;
    background: rgba(255,255,255,.06);
    color: #ffffff;
    cursor: pointer;
    backdrop-filter: blur(14px);
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-dot {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border: 2px solid #71717a;
    border-radius: 50%;
    transition: .2s ease;
}
.Radio label div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    font-size: 12px;
}
.Radio label small {
    color: #71717a;
    font-size: 9px;
}
.Radio label:hover {
    border-color: rgba(255,255,255,.28);
    background: rgba(255,255,255,.09);
}
.Radio input:checked + .Radio-dot {
    border-color: #38bdf8;
    background: radial-gradient(circle, #38bdf8 0 40%, transparent 45%);
    box-shadow: 0 0 12px rgba(56,189,248,.45);
}
.Radio input:checked ~ div strong {
    color: #7dd3fc;
}`,
  },
  {
    id: 1323,
    name: "Legendary Pricing Radio",
    preview: (
      <div className="radio-input-1323">
        <label>
          <input type="radio" name="radio-1323" defaultChecked />
          <div>
            <span className="radio-input-1323__top">
              Starter
              <strong>$9</strong>
            </span>
            <small>For small projects</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1323" />
          <div>
            <span className="radio-input-1323__top">
              Pro
              <strong>$29</strong>
            </span>
            <small>For growing teams</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1323" />
          <div>
            <span className="radio-input-1323__top">
              Enterprise
              <strong>$99</strong>
            </span>
            <small>For serious products</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="plan" checked>
        <div>
            <span class="Radio-top">
                Starter
                <strong>$9</strong>
            </span>
            <small>For small projects</small>
        </div>
    </label>
    <label>
        <input type="radio" name="plan">
        <div>
            <span class="Radio-top">
                Pro
                <strong>$29</strong>
            </span>
            <small>For growing teams</small>
        </div>
    </label>
    <label>
        <input type="radio" name="plan">
        <div>
            <span class="Radio-top">
                Enterprise
                <strong>$99</strong>
            </span>
            <small>For serious products</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 280px;
}
.Radio label {
    position: relative;
    display: block;
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    padding: 13px 15px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio-top {
    display: flex;
    justify-content: space-between;
    color: #18181b;
    font-size: 13px;
    font-weight: 600;
}
.Radio-top strong {
    color: #71717a;
}
.Radio label small {
    display: block;
    margin-top: 4px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #7c3aed;
    background: #faf5ff;
    box-shadow: 0 0 0 3px rgba(124,58,237,.08);
}
.Radio input:checked + div .Radio-top {
    color: #6d28d9;
}
.Radio input:checked + div .Radio-top strong {
    color: #7c3aed;
}`,
  },
  {
    id: 1324,
    name: "Legendary Neon Radio",
    preview: (
      <div className="radio-input-1324">
        <label>
          <input type="radio" name="radio-1324" defaultChecked />
          <span className="radio-input-1324__circle"></span>
          <span className="radio-input-1324__text">ONLINE MODE</span>
        </label>
        <label>
          <input type="radio" name="radio-1324" />
          <span className="radio-input-1324__circle"></span>
          <span className="radio-input-1324__text">STEALTH MODE</span>
        </label>
        <label>
          <input type="radio" name="radio-1324" />
          <span className="radio-input-1324__circle"></span>
          <span className="radio-input-1324__text">DEBUG MODE</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="mode" checked>
        <span class="Radio-circle"></span>
        <span class="Radio-text">ONLINE MODE</span>
    </label>
    <label>
        <input type="radio" name="mode">
        <span class="Radio-circle"></span>
        <span class="Radio-text">STEALTH MODE</span>
    </label>
    <label>
        <input type="radio" name="mode">
        <span class="Radio-circle"></span>
        <span class="Radio-text">DEBUG MODE</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 230px;
    padding: 10px;
    border: 1px solid #164e63;
    border-radius: 12px;
    background: #020617;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    color: #155e75;
    font-family: monospace;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-circle {
    width: 15px;
    height: 15px;
    border: 2px solid #155e75;
    border-radius: 50%;
}
.Radio-text {
    font-size: 10px;
    letter-spacing: 1px;
}
.Radio label:hover {
    background: rgba(34,211,238,.05);
}
.Radio input:checked + .Radio-circle {
    border-color: #22d3ee;
    background: radial-gradient(circle, #22d3ee 0 38%, transparent 44%);
    box-shadow: 0 0 13px rgba(34,211,238,.7);
}
.Radio input:checked ~ .Radio-text {
    color: #67e8f9;
    text-shadow: 0 0 8px rgba(34,211,238,.5);
}`,
  },
  {
    id: 1325,
    name: "Legendary Icon Cards Radio",
    preview: (
      <div className="radio-input-1325">
        <label>
          <input type="radio" name="radio-1325" defaultChecked />
          <div>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1325" />
          <div>
            <i className="fa-solid fa-chart-line"></i>
            <span>Analytics</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1325" />
          <div>
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="page" checked>
        <div>
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
        </div>
    </label>
    <label>
        <input type="radio" name="page">
        <div>
            <i class="fa-solid fa-chart-line"></i>
            <span>Analytics</span>
        </div>
    </label>
    <label>
        <input type="radio" name="page">
        <div>
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 270px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 75px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    color: #71717a;
    transition: .2s ease;
}
.Radio label i {
    font-size: 18px;
}
.Radio label span {
    font-size: 9px;
    font-weight: 600;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    color: #2563eb;
    border-color: #2563eb;
    background: #eff6ff;
    box-shadow: 0 5px 15px rgba(37,99,235,.1);
}`,
  },
  {
    id: 1326,
    name: "Legendary Rainbow Radio",
    preview: (
      <div className="radio-input-1326">
        <label>
          <input type="radio" name="radio-1326" defaultChecked />
          <span>Red</span>
        </label>
        <label>
          <input type="radio" name="radio-1326" />
          <span>Orange</span>
        </label>
        <label>
          <input type="radio" name="radio-1326" />
          <span>Yellow</span>
        </label>
        <label>
          <input type="radio" name="radio-1326" />
          <span>Blue</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="color" checked>
        <span>Red</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span>Orange</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span>Yellow</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span>Blue</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    width: 260px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    display: block;
    padding: 9px 13px;
    border: 1px solid #e4e4e7;
    border-radius: 999px;
    background: #ffffff;
    color: #52525b;
    font-size: 10px;
    font-weight: 600;
    transition: .2s ease;
}
.Radio label:nth-child(1) input:checked + span {
    color: #ffffff;
    border-color: #ef4444;
    background: #ef4444;
}
.Radio label:nth-child(2) input:checked + span {
    color: #ffffff;
    border-color: #f97316;
    background: #f97316;
}
.Radio label:nth-child(3) input:checked + span {
    color: #18181b;
    border-color: #eab308;
    background: #eab308;
}
.Radio label:nth-child(4) input:checked + span {
    color: #ffffff;
    border-color: #3b82f6;
    background: #3b82f6;
}`,
  },
  {
    id: 1327,
    name: "Legendary Feature Radio",
    preview: (
      <div className="radio-input-1327">
        <label>
          <input type="radio" name="radio-1327" defaultChecked />
          <div>
            <i className="fa-solid fa-rocket"></i>
            <strong>Launch</strong>
            <small>Deploy immediately</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1327" />
          <div>
            <i className="fa-solid fa-clock"></i>
            <strong>Schedule</strong>
            <small>Pick a launch time</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="deploy" checked>
        <div>
            <i class="fa-solid fa-rocket"></i>
            <strong>Launch</strong>
            <small>Deploy immediately</small>
        </div>
    </label>
    <label>
        <input type="radio" name="deploy">
        <div>
            <i class="fa-solid fa-clock"></i>
            <strong>Schedule</strong>
            <small>Pick a launch time</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    width: 300px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    min-height: 115px;
    padding: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio label i {
    margin-bottom: 13px;
    color: #71717a;
    font-size: 19px;
}
.Radio label strong {
    color: #18181b;
    font-size: 13px;
}
.Radio label small {
    margin-top: 4px;
    color: #a1a1aa;
    font-size: 9px;
    line-height: 1.4;
}
.Radio label:hover > div {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,.05);
}
.Radio input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
    box-shadow: 0 0 0 3px rgba(37,99,235,.08);
}
.Radio input:checked + div i {
    color: #2563eb;
}`,
  },
  {
    id: 1328,
    name: "Legendary Dark Pill Radio",
    preview: (
      <div className="radio-input-1328">
        <label>
          <input type="radio" name="radio-1328" defaultChecked />
          <span>Monthly</span>
        </label>
        <label>
          <input type="radio" name="radio-1328" />
          <span>Yearly</span>
        </label>
        <label>
          <input type="radio" name="radio-1328" />
          <span>Lifetime</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="billing" checked>
        <span>Monthly</span>
    </label>
    <label>
        <input type="radio" name="billing">
        <span>Yearly</span>
    </label>
    <label>
        <input type="radio" name="billing">
        <span>Lifetime</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px;
    width: fit-content;
    border: 1px solid #27272a;
    border-radius: 999px;
    background: #09090b;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    display: block;
    padding: 8px 13px;
    border-radius: 999px;
    color: #71717a;
    font-size: 10px;
    transition: .2s ease;
}
.Radio label:hover span {
    color: #ffffff;
}
.Radio input:checked + span {
    background: #ffffff;
    color: #18181b;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
}`,
  },
  {
    id: 1329,
    name: "Legendary Status Radio",
    preview: (
      <div className="radio-input-1329">
        <label>
          <input type="radio" name="radio-1329" defaultChecked />
          <span className="radio-input-1329__status"></span>
          <div>
            <strong>Production</strong>
            <small>Live environment</small>
          </div>
          <i className="fa-solid fa-server"></i>
        </label>
        <label>
          <input type="radio" name="radio-1329" />
          <span className="radio-input-1329__status"></span>
          <div>
            <strong>Staging</strong>
            <small>Testing environment</small>
          </div>
          <i className="fa-solid fa-flask"></i>
        </label>
        <label>
          <input type="radio" name="radio-1329" />
          <span className="radio-input-1329__status"></span>
          <div>
            <strong>Development</strong>
            <small>Local environment</small>
          </div>
          <i className="fa-solid fa-code"></i>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="environment" checked>
        <span class="Radio-status"></span>
        <div>
            <strong>Production</strong>
            <small>Live environment</small>
        </div>
        <i class="fa-solid fa-server"></i>
    </label>
    <label>
        <input type="radio" name="environment">
        <span class="Radio-status"></span>
        <div>
            <strong>Staging</strong>
            <small>Testing environment</small>
        </div>
        <i class="fa-solid fa-flask"></i>
    </label>
    <label>
        <input type="radio" name="environment">
        <span class="Radio-status"></span>
        <div>
            <strong>Development</strong>
            <small>Local environment</small>
        </div>
        <i class="fa-solid fa-code"></i>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 280px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid #27272a;
    border-radius: 11px;
    background: #18181b;
    cursor: pointer;
    color: #ffffff;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-status {
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #52525b;
}
.Radio label > div {
    flex: 1;
}
.Radio label strong {
    display: block;
    font-size: 11px;
}
.Radio label small {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 8px;
}
.Radio label > i {
    color: #52525b;
}
.Radio input:checked + .Radio-status {
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34,197,94,.6);
}
.Radio input:checked ~ div strong {
    color: #4ade80;
}
.Radio input:checked ~ i {
    color: #22c55e;
}`,
  },
  {
    id: 1330,
    name: "Legendary Cosmic Radio",
    preview: (
      <div className="radio-input-1330">
        <label>
          <input type="radio" name="radio-1330" defaultChecked />
          <span className="radio-input-1330__planet"></span>
          <div>
            <strong>Explorer</strong>
            <small>Discover new worlds</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1330" />
          <span className="radio-input-1330__planet"></span>
          <div>
            <strong>Creator</strong>
            <small>Build your universe</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1330" />
          <span className="radio-input-1330__planet"></span>
          <div>
            <strong>Architect</strong>
            <small>Shape the future</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="role" checked>
        <span class="Radio-planet"></span>
        <div>
            <strong>Explorer</strong>
            <small>Discover new worlds</small>
        </div>
    </label>
    <label>
        <input type="radio" name="role">
        <span class="Radio-planet"></span>
        <div>
            <strong>Creator</strong>
            <small>Build your universe</small>
        </div>
    </label>
    <label>
        <input type="radio" name="role">
        <span class="Radio-planet"></span>
        <div>
            <strong>Architect</strong>
            <small>Shape the future</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
    padding: 12px;
    overflow: hidden;
    border: 1px solid #312e81;
    border-radius: 17px;
    background:
        radial-gradient(circle at 20% 20%, rgba(56,189,248,.12), transparent 35%),
        radial-gradient(circle at 80% 80%, rgba(236,72,153,.12), transparent 35%),
        #09090b;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px;
    border: 1px solid #27272a;
    border-radius: 11px;
    background: rgba(255,255,255,.03);
    color: #ffffff;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-planet {
    position: relative;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border: 2px solid #4c1d95;
    border-radius: 50%;
    background: #18181b;
    transition: .2s ease;
}
.Radio label div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    font-size: 11px;
}
.Radio label small {
    color: #71717a;
    font-size: 8px;
}
.Radio label:hover {
    border-color: #4338ca;
    background: rgba(99,102,241,.06);
}
.Radio input:checked + .Radio-planet {
    border-color: #38bdf8;
    background: radial-gradient(circle at 35% 35%, #ffffff 0 12%, #38bdf8 13% 45%, #6366f1 46% 100%);
    box-shadow:
        0 0 0 3px rgba(56,189,248,.08),
        0 0 15px rgba(56,189,248,.55);
}
.Radio input:checked ~ div strong {
    color: #7dd3fc;
}`,
  },
  {
    id: 1331,
    name: "Legendary Social Radio",
    preview: (
      <div className="radio-input-1331">
        <label>
          <input type="radio" name="radio-1331" defaultChecked />
          <div>
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1331" />
          <div>
            <i className="fa-brands fa-discord"></i>
            <span>Discord</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1331" />
          <div>
            <i className="fa-brands fa-x-twitter"></i>
            <span>X / Twitter</span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="social" checked>
        <div>
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
        </div>
    </label>
    <label>
        <input type="radio" name="social">
        <div>
            <i class="fa-brands fa-discord"></i>
            <span>Discord</span>
        </div>
    </label>
    <label>
        <input type="radio" name="social">
        <div>
            <i class="fa-brands fa-x-twitter"></i>
            <span>X / Twitter</span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    gap: 8px;
    width: 300px;
}
.Radio label {
    flex: 1;
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    min-height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #ffffff;
    color: #71717a;
    transition: .2s ease;
}
.Radio label i {
    font-size: 20px;
}
.Radio label span {
    font-size: 9px;
    font-weight: 600;
}
.Radio label:hover > div {
    transform: translateY(-2px);
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #18181b;
    background: #18181b;
    color: #ffffff;
    box-shadow: 0 8px 20px rgba(0,0,0,.14);
}`,
  },
  {
    id: 1332,
    name: "Legendary Glass Cards Radio",
    preview: (
      <div className="radio-input-1332">
        <label>
          <input type="radio" name="radio-1332" defaultChecked />
          <span className="radio-input-1332__check"></span>
          <div>
            <strong>Starter</strong>
            <small>Perfect for learning</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1332" />
          <span className="radio-input-1332__check"></span>
          <div>
            <strong>Professional</strong>
            <small>For serious creators</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1332" />
          <span className="radio-input-1332__check"></span>
          <div>
            <strong>Ultimate</strong>
            <small>Everything unlocked</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="tier" checked>
        <span class="Radio-check"></span>
        <div>
            <strong>Starter</strong>
            <small>Perfect for learning</small>
        </div>
    </label>
    <label>
        <input type="radio" name="tier">
        <span class="Radio-check"></span>
        <div>
            <strong>Professional</strong>
            <small>For serious creators</small>
        </div>
    </label>
    <label>
        <input type="radio" name="tier">
        <span class="Radio-check"></span>
        <div>
            <strong>Ultimate</strong>
            <small>Everything unlocked</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 290px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 18px;
    background: rgba(255,255,255,.07);
    backdrop-filter: blur(16px);
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 12px;
    background: rgba(255,255,255,.05);
    cursor: pointer;
    color: #ffffff;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-check {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border: 2px solid #71717a;
    border-radius: 50%;
    transition: .2s ease;
}
.Radio label div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    font-size: 12px;
}
.Radio label small {
    color: #71717a;
    font-size: 9px;
}
.Radio label:hover {
    background: rgba(255,255,255,.09);
}
.Radio input:checked + .Radio-check {
    border-color: #c4b5fd;
    background: radial-gradient(circle, #c4b5fd 0 42%, transparent 46%);
    box-shadow: 0 0 12px rgba(196,181,253,.35);
}
.Radio input:checked ~ div strong {
    color: #ddd6fe;
}`,
  },
  {
    id: 1333,
    name: "Legendary Segmented Radio",
    preview: (
      <div className="radio-input-1333">
        <label>
          <input type="radio" name="radio-1333" defaultChecked />
          <span>Day</span>
        </label>
        <label>
          <input type="radio" name="radio-1333" />
          <span>Week</span>
        </label>
        <label>
          <input type="radio" name="radio-1333" />
          <span>Month</span>
        </label>
        <label>
          <input type="radio" name="radio-1333" />
          <span>Year</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="range" checked>
        <span>Day</span>
    </label>
    <label>
        <input type="radio" name="range">
        <span>Week</span>
    </label>
    <label>
        <input type="radio" name="range">
        <span>Month</span>
    </label>
    <label>
        <input type="radio" name="range">
        <span>Year</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    padding: 4px;
    gap: 3px;
    width: fit-content;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #f4f4f5;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    display: block;
    padding: 8px 12px;
    border-radius: 8px;
    color: #71717a;
    font-size: 10px;
    font-weight: 600;
    transition: .2s ease;
}
.Radio label:hover span {
    color: #18181b;
}
.Radio input:checked + span {
    background: #ffffff;
    color: #18181b;
    box-shadow: 0 2px 7px rgba(0,0,0,.08);
}`,
  },
  {
    id: 1334,
    name: "Legendary Icon Choice Radio",
    preview: (
      <div className="radio-input-1334">
        <label>
          <input type="radio" name="radio-1334" defaultChecked />
          <div>
            <i className="fa-solid fa-bolt"></i>
            <span>Fast</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1334" />
          <div>
            <i className="fa-solid fa-shield-halved"></i>
            <span>Secure</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1334" />
          <div>
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Smart</span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="priority" checked>
        <div>
            <i class="fa-solid fa-bolt"></i>
            <span>Fast</span>
        </div>
    </label>
    <label>
        <input type="radio" name="priority">
        <div>
            <i class="fa-solid fa-shield-halved"></i>
            <span>Secure</span>
        </div>
    </label>
    <label>
        <input type="radio" name="priority">
        <div>
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <span>Smart</span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 285px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    height: 82px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #ffffff;
    color: #71717a;
    transition: .2s ease;
}
.Radio label i {
    font-size: 19px;
}
.Radio label span {
    font-size: 9px;
    font-weight: 600;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
    transform: translateY(-2px);
}
.Radio input:checked + div {
    border-color: #7c3aed;
    background: #faf5ff;
    color: #7c3aed;
    box-shadow: 0 7px 18px rgba(124,58,237,.12);
}`,
  },
  {
    id: 1335,
    name: "Legendary Neon Cards Radio",
    preview: (
      <div className="radio-input-1335">
        <label>
          <input type="radio" name="radio-1335" defaultChecked />
          <span className="radio-input-1335__orb"></span>
          <div>
            <strong>CYAN</strong>
            <small>001</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1335" />
          <span className="radio-input-1335__orb"></span>
          <div>
            <strong>PURPLE</strong>
            <small>002</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1335" />
          <span className="radio-input-1335__orb"></span>
          <div>
            <strong>PINK</strong>
            <small>003</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="color" checked>
        <span class="Radio-orb"></span>
        <div>
            <strong>CYAN</strong>
            <small>001</small>
        </div>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-orb"></span>
        <div>
            <strong>PURPLE</strong>
            <small>002</small>
        </div>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-orb"></span>
        <div>
            <strong>PINK</strong>
            <small>003</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 240px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 13px;
    background: #050505;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px;
    border: 1px solid #27272a;
    border-radius: 9px;
    cursor: pointer;
    color: #71717a;
    font-family: monospace;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-orb {
    width: 14px;
    height: 14px;
    border: 2px solid #3f3f46;
    border-radius: 50%;
}
.Radio label div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.Radio label strong {
    font-size: 10px;
    letter-spacing: 1px;
}
.Radio label small {
    color: #52525b;
    font-size: 8px;
}
.Radio input:checked + .Radio-orb {
    border-color: #22d3ee;
    background: #22d3ee;
    box-shadow: 0 0 12px #22d3ee;
}
.Radio input:checked ~ div strong {
    color: #67e8f9;
}`,
  },
  {
    id: 1336,
    name: "Legendary Delivery Radio",
    preview: (
      <div className="radio-input-1336">
        <label>
          <input type="radio" name="radio-1336" defaultChecked />
          <div>
            <span className="radio-input-1336__icon">
              <i className="fa-solid fa-truck-fast"></i>
            </span>
            <span className="radio-input-1336__content">
              <strong>Express</strong>
              <small>Tomorrow · $14</small>
            </span>
            <span className="radio-input-1336__dot"></span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1336" />
          <div>
            <span className="radio-input-1336__icon">
              <i className="fa-solid fa-box"></i>
            </span>
            <span className="radio-input-1336__content">
              <strong>Standard</strong>
              <small>3–5 days · Free</small>
            </span>
            <span className="radio-input-1336__dot"></span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="delivery" checked>
        <div>
            <span class="Radio-icon">
                <i class="fa-solid fa-truck-fast"></i>
            </span>
            <span class="Radio-content">
                <strong>Express</strong>
                <small>Tomorrow · $14</small>
            </span>
            <span class="Radio-dot"></span>
        </div>
    </label>
    <label>
        <input type="radio" name="delivery">
        <div>
            <span class="Radio-icon">
                <i class="fa-solid fa-box"></i>
            </span>
            <span class="Radio-content">
                <strong>Standard</strong>
                <small>3–5 days · Free</small>
            </span>
            <span class="Radio-dot"></span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 310px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio-content {
    flex: 1;
}
.Radio-content strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Radio-content small {
    display: block;
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio-dot {
    width: 17px;
    height: 17px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
}
.Radio input:checked + div .Radio-icon {
    background: #2563eb;
    color: #ffffff;
}
.Radio input:checked + div .Radio-dot {
    border-color: #2563eb;
    background: radial-gradient(circle, #2563eb 0 40%, transparent 44%);
}`,
  },
  {
    id: 1337,
    name: "Legendary Gradient Radio",
    preview: (
      <div className="radio-input-1337">
        <label>
          <input type="radio" name="radio-1337" defaultChecked />
          <span>Visual</span>
        </label>
        <label>
          <input type="radio" name="radio-1337" />
          <span>Code</span>
        </label>
        <label>
          <input type="radio" name="radio-1337" />
          <span>Preview</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="view" checked>
        <span>Visual</span>
    </label>
    <label>
        <input type="radio" name="view">
        <span>Code</span>
    </label>
    <label>
        <input type="radio" name="view">
        <span>Preview</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    gap: 6px;
    width: fit-content;
    padding: 4px;
    border-radius: 13px;
    background: #18181b;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    display: block;
    padding: 9px 14px;
    border: 1px solid transparent;
    border-radius: 10px;
    color: #71717a;
    font-size: 10px;
    font-weight: 600;
    transition: .2s ease;
}
.Radio label:hover span {
    color: #ffffff;
}
.Radio input:checked + span {
    color: #ffffff;
    border-color: #6366f1;
    background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899);
    box-shadow: 0 5px 15px rgba(99,102,241,.25);
}`,
  },
  {
    id: 1338,
    name: "Legendary Music Radio",
    preview: (
      <div className="radio-input-1338">
        <label>
          <input type="radio" name="radio-1338" defaultChecked />
          <div>
            <i className="fa-solid fa-volume-high"></i>
            <span>
              <strong>Balanced</strong>
              <small>Natural sound</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1338" />
          <div>
            <i className="fa-solid fa-headphones"></i>
            <span>
              <strong>Immersive</strong>
              <small>Deep bass & detail</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1338" />
          <div>
            <i className="fa-solid fa-music"></i>
            <span>
              <strong>Studio</strong>
              <small>Pure reference sound</small>
            </span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="audio" checked>
        <div>
            <i class="fa-solid fa-volume-high"></i>
            <span>
                <strong>Balanced</strong>
                <small>Natural sound</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="audio">
        <div>
            <i class="fa-solid fa-headphones"></i>
            <span>
                <strong>Immersive</strong>
                <small>Deep bass & detail</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="audio">
        <div>
            <i class="fa-solid fa-music"></i>
            <span>
                <strong>Studio</strong>
                <small>Pure reference sound</small>
            </span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio label > div > i {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio label span {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #ec4899;
    background: #fdf2f8;
}
.Radio input:checked + div > i {
    background: #ec4899;
    color: #ffffff;
}`,
  },
  {
    id: 1339,
    name: "Legendary Matrix Radio",
    preview: (
      <div className="radio-input-1339">
        <label>
          <input type="radio" name="radio-1339" defaultChecked />
          <span className="radio-input-1339__indicator"></span>
          <span className="radio-input-1339__text">ACCESS GRANTED</span>
        </label>
        <label>
          <input type="radio" name="radio-1339" />
          <span className="radio-input-1339__indicator"></span>
          <span className="radio-input-1339__text">ACCESS LIMITED</span>
        </label>
        <label>
          <input type="radio" name="radio-1339" />
          <span className="radio-input-1339__indicator"></span>
          <span className="radio-input-1339__text">ACCESS DENIED</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="access" checked>
        <span class="Radio-indicator"></span>
        <span class="Radio-text">ACCESS GRANTED</span>
    </label>
    <label>
        <input type="radio" name="access">
        <span class="Radio-indicator"></span>
        <span class="Radio-text">ACCESS LIMITED</span>
    </label>
    <label>
        <input type="radio" name="access">
        <span class="Radio-indicator"></span>
        <span class="Radio-text">ACCESS DENIED</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 260px;
    padding: 10px;
    border: 1px solid #14532d;
    background: #020b05;
    font-family: monospace;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    color: #166534;
    transition: .15s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-indicator {
    width: 13px;
    height: 13px;
    border: 1px solid #166534;
    border-radius: 2px;
}
.Radio-text {
    font-size: 9px;
    letter-spacing: 1px;
}
.Radio label:hover {
    background: rgba(34,197,94,.04);
}
.Radio input:checked + .Radio-indicator {
    border-color: #22c55e;
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34,197,94,.6);
}
.Radio input:checked ~ .Radio-text {
    color: #4ade80;
    text-shadow: 0 0 8px rgba(34,197,94,.5);
}`,
  },
  {
    id: 1340,
    name: "Legendary Cosmic Choice Radio",
    preview: (
      <div className="radio-input-1340">
        <label>
          <input type="radio" name="radio-1340" defaultChecked />
          <div>
            <span className="radio-input-1340__planet"></span>
            <span>
              <strong>ORBIT</strong>
              <small>Explore everything</small>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1340" />
          <div>
            <span className="radio-input-1340__planet"></span>
            <span>
              <strong>STELLAR</strong>
              <small>Focus on details</small>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1340" />
          <div>
            <span className="radio-input-1340__planet"></span>
            <span>
              <strong>NOVA</strong>
              <small>Maximum intensity</small>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="cosmic" checked>
        <div>
            <span class="Radio-planet"></span>
            <span>
                <strong>ORBIT</strong>
                <small>Explore everything</small>
            </span>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="cosmic">
        <div>
            <span class="Radio-planet"></span>
            <span>
                <strong>STELLAR</strong>
                <small>Focus on details</small>
            </span>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="cosmic">
        <div>
            <span class="Radio-planet"></span>
            <span>
                <strong>NOVA</strong>
                <small>Maximum intensity</small>
            </span>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 300px;
    padding: 11px;
    border: 1px solid #312e81;
    border-radius: 17px;
    background:
        radial-gradient(circle at 20% 20%, rgba(56,189,248,.1), transparent 35%),
        radial-gradient(circle at 90% 80%, rgba(236,72,153,.1), transparent 35%),
        #09090b;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 11px;
    border: 1px solid #27272a;
    border-radius: 11px;
    background: rgba(255,255,255,.03);
    color: #ffffff;
    transition: .2s ease;
}
.Radio-planet {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border: 2px solid #4338ca;
    border-radius: 50%;
    background: #18181b;
    transition: .2s ease;
}
.Radio label > div > span:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    font-size: 10px;
    letter-spacing: 1px;
}
.Radio label small {
    color: #71717a;
    font-size: 8px;
}
.Radio label > div > i {
    color: #52525b;
    font-size: 10px;
    transition: .2s ease;
}
.Radio label:hover > div {
    border-color: #4338ca;
    background: rgba(99,102,241,.05);
    transform: translateX(2px);
}
.Radio input:checked + div {
    border-color: #38bdf8;
    background: linear-gradient(
        135deg,
        rgba(56,189,248,.08),
        rgba(99,102,241,.08)
    );
    box-shadow: 0 0 18px rgba(56,189,248,.08);
}
.Radio input:checked + div .Radio-planet {
    border-color: #38bdf8;
    background: radial-gradient(
        circle at 35% 35%,
        #ffffff 0 10%,
        #38bdf8 11% 44%,
        #6366f1 45% 100%
    );
    box-shadow:
        0 0 0 3px rgba(56,189,248,.07),
        0 0 14px rgba(56,189,248,.5);
}
.Radio input:checked + div > span:nth-child(2) strong {
    color: #7dd3fc;
}
.Radio input:checked + div > i {
    color: #38bdf8;
    transform: translateX(3px);
}`,
  },
  {
    id: 1341,
    name: "Cyber Glitch Radio",
    preview: (
      <div className="radio-input-1341">
        <div className="radio-input-1341__wrapper">
          <input
            className="radio-input-1341__input"
            name="radio-1341"
            type="radio"
            defaultChecked
          />
          <div className="radio-input-1341__btn">
            <span aria-hidden="true">_</span>
            CYBER
            <span className="radio-input-1341__glitch" aria-hidden="true">
              _CYBER
            </span>
            <label className="radio-input-1341__number">R1</label>
          </div>
        </div>
        <div className="radio-input-1341__wrapper">
          <input
            className="radio-input-1341__input"
            name="radio-1341"
            type="radio"
          />
          <div className="radio-input-1341__btn">
            NETWORK
            <span className="radio-input-1341__glitch" aria-hidden="true">
              _NETWORK_
            </span>
            <label className="radio-input-1341__number">R2</label>
          </div>
        </div>
        <div className="radio-input-1341__wrapper">
          <input
            className="radio-input-1341__input"
            name="radio-1341"
            type="radio"
          />
          <div className="radio-input-1341__btn">
            SYSTEM
            <span className="radio-input-1341__glitch" aria-hidden="true">
              _SYSTEM_
            </span>
            <label className="radio-input-1341__number">R3</label>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-1341" type="radio" checked>
        <div class="Radio-btn">
            <span aria-hidden="true">_</span>
            CYBER
            <span class="Radio-btn__glitch" aria-hidden="true">_CYBER</span>
            <label class="Radio-number">R1</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-1341" type="radio">
        <div class="Radio-btn">
            NETWORK
            <span class="Radio-btn__glitch" aria-hidden="true">_NETWORK_</span>
            <label class="Radio-number">R2</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="radio-1341" type="radio">
        <div class="Radio-btn">
            SYSTEM
            <span class="Radio-btn__glitch" aria-hidden="true">_SYSTEM_</span>
            <label class="Radio-number">R3</label>
        </div>
    </div>
</div>`,
    css: `.Radio-container {
    display: flex;
    gap: 4px;
    padding: 4px;
    background: #050505;
}
.Radio-wrapper {
    position: relative;
    width: 92px;
    height: 42px;
}
.Radio-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
}
.Radio-btn {
    --primary: #ff1744;
    --shadow-primary: #ffe600;
    --color: #ffffff;
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 42px;
    text-align: center;
    color: var(--color);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    clip-path: polygon(
        8% 0,
        100% 0,
        100% 75%,
        94% 75%,
        94% 100%,
        7% 100%,
        0 82%,
        0 15%
    );
}
.Radio-btn::before,
.Radio-btn::after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: inherit;
}
.Radio-btn::before {
    background: var(--shadow-primary);
    transform: translate(4px, 0);
    z-index: -2;
}
.Radio-btn::after {
    background: var(--primary);
    z-index: -1;
}
.Radio-input:checked + .Radio-btn {
    --primary: #7c3aed;
    --shadow-primary: #00e5ff;
}
.Radio-input:hover + .Radio-btn {
    --primary: #ff4060;
    transform: translateY(-1px);
}
.Radio-btn__glitch {
    position: absolute;
    inset: -4px;
    display: none;
    color: #ffffff;
    background: var(--shadow-primary);
    clip-path: inherit;
    text-shadow:
        2px 2px var(--shadow-primary),
        -2px -2px #00e5ff;
    animation: cyber-glitch 1.8s infinite;
}
.Radio-btn__glitch::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: var(--primary);
    clip-path: inherit;
    z-index: -1;
}
.Radio-input:hover + .Radio-btn .Radio-btn__glitch,
.Radio-input:checked + .Radio-btn .Radio-btn__glitch {
    display: block;
}
.Radio-number {
    position: absolute;
    top: 0;
    right: 7px;
    width: 16px;
    height: 7px;
    line-height: 7px;
    color: #111111;
    background: var(--shadow-primary);
    font-size: 5px;
    letter-spacing: 1px;
}
@keyframes cyber-glitch {
    0%,
    100% {
        clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
        transform: translate(0);
    }
    10% {
        clip-path: polygon(0 15%,100% 15%,100% 27%,0 27%);
        transform: translate(-4px);
    }
    20% {
        clip-path: polygon(0 55%,100% 55%,100% 70%,0 70%);
        transform: translate(4px);
    }
    30% {
        clip-path: polygon(0 80%,100% 80%,100% 92%,0 92%);
        transform: translate(0);
    }
    40% {
        clip-path: polygon(0 30%,100% 30%,100% 43%,0 43%);
        transform: translate(3px);
    }
    50% {
        clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
        transform: translate(0);
    }
}`,
  },
  {
    id: 1342,
    name: "Neon Hacker Radio",
    preview: (
      <div className="radio-input-1342">
        <div className="radio-input-1342__wrapper">
          <input
            className="radio-input-1342__input"
            name="radio-1342"
            type="radio"
          />
          <div className="radio-input-1342__btn">
            <i className="fa-solid fa-terminal"></i>
            TERMINAL
            <span className="radio-input-1342__glitch">TERMINAL</span>
          </div>
        </div>
        <div className="radio-input-1342__wrapper">
          <input
            className="radio-input-1342__input"
            name="radio-1342"
            type="radio"
            defaultChecked
          />
          <div className="radio-input-1342__btn">
            <i className="fa-solid fa-code"></i>
            CODE
            <span className="radio-input-1342__glitch">_CODE_</span>
          </div>
        </div>
        <div className="radio-input-1342__wrapper">
          <input
            className="radio-input-1342__input"
            name="radio-1342"
            type="radio"
          />
          <div className="radio-input-1342__btn">
            <i className="fa-solid fa-bug"></i>
            DEBUG
            <span className="radio-input-1342__glitch">DEBUG_</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="mode-1342" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-terminal"></i>
            TERMINAL
            <span class="Radio-btn__glitch">TERMINAL</span>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="mode-1342" type="radio" checked>
        <div class="Radio-btn">
            <i class="fa-solid fa-code"></i>
            CODE
            <span class="Radio-btn__glitch">_CODE_</span>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="mode-1342" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-bug"></i>
            DEBUG
            <span class="Radio-btn__glitch">DEBUG_</span>
        </div>
    </div>
</div>`,
    css: `.Radio-container {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid #14532d;
    background: #020b05;
}
.Radio-wrapper {
    position: relative;
    width: 94px;
    height: 48px;
}
.Radio-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 10;
}
.Radio-btn {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    overflow: hidden;
    color: #166534;
    border: 1px solid #14532d;
    background: #03140a;
    font-family: monospace;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
    transition: .2s ease;
}
.Radio-btn i {
    font-size: 13px;
}
.Radio-input:hover + .Radio-btn {
    border-color: #22c55e;
    color: #22c55e;
}
.Radio-input:checked + .Radio-btn {
    color: #4ade80;
    border-color: #22c55e;
    background: rgba(34,197,94,.08);
    box-shadow:
        inset 0 0 20px rgba(34,197,94,.08),
        0 0 12px rgba(34,197,94,.15);
}
.Radio-btn__glitch {
    position: absolute;
    display: none;
    color: #22c55e;
    text-shadow: 2px 0 #00ffff,-2px 0 #a3e635;
    animation: hacker-glitch 1.2s infinite;
}
.Radio-input:hover + .Radio-btn .Radio-btn__glitch,
.Radio-input:checked + .Radio-btn .Radio-btn__glitch {
    display: block;
}
@keyframes hacker-glitch {
    0%,
    100% {
        clip-path: inset(0 0 0 0);
        transform: translate(0);
    }
    20% {
        clip-path: inset(30% 0 45% 0);
        transform: translate(3px);
    }
    40% {
        clip-path: inset(70% 0 10% 0);
        transform: translate(-3px);
    }
    60% {
        clip-path: inset(10% 0 65% 0);
        transform: translate(2px);
    }
}`,
  },
  {
    id: 1343,
    name: "Inferno Glitch Radio",
    preview: (
      <div className="radio-input-1343">
        <div className="radio-input-1343__wrapper">
          <input
            className="radio-input-1343__input"
            name="radio-1343"
            type="radio"
            defaultChecked
          />
          <div className="radio-input-1343__btn">
            IGNITE
            <span className="radio-input-1343__glitch">_IGNITE_</span>
            <label>01</label>
          </div>
        </div>
        <div className="radio-input-1343__wrapper">
          <input
            className="radio-input-1343__input"
            name="radio-1343"
            type="radio"
          />
          <div className="radio-input-1343__btn">
            FLAME
            <span className="radio-input-1343__glitch">FLAME_</span>
            <label>02</label>
          </div>
        </div>
        <div className="radio-input-1343__wrapper">
          <input
            className="radio-input-1343__input"
            name="radio-1343"
            type="radio"
          />
          <div className="radio-input-1343__btn">
            BURN
            <span className="radio-input-1343__glitch">_BURN_</span>
            <label>03</label>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="fire-1343" type="radio" checked>
        <div class="Radio-btn">
            IGNITE
            <span class="Radio-btn__glitch">_IGNITE_</span>
            <label>01</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="fire-1343" type="radio">
        <div class="Radio-btn">
            FLAME
            <span class="Radio-btn__glitch">FLAME_</span>
            <label>02</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="fire-1343" type="radio">
        <div class="Radio-btn">
            BURN
            <span class="Radio-btn__glitch">_BURN_</span>
            <label>03</label>
        </div>
    </div>
</div>`,
    css: `.Radio-container {
    display: flex;
    gap: 4px;
    padding: 4px;
    background: #100504;
}
.Radio-wrapper {
    position: relative;
    width: 88px;
    height: 44px;
}
.Radio-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 10;
}
.Radio-btn {
    --primary: #ef4444;
    --secondary: #facc15;
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: #ffffff;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 2px;
    clip-path: polygon(
        8% 0,
        94% 0,
        100% 20%,
        94% 100%,
        8% 100%,
        0 80%
    );
    background: var(--primary);
    transition: .2s ease;
}
.Radio-btn::before {
    content: "";
    position: absolute;
    inset: 3px;
    background: #190707;
    clip-path: inherit;
    z-index: -1;
}
.Radio-input:hover + .Radio-btn {
    --primary: #f97316;
}
.Radio-input:checked + .Radio-btn {
    --primary: #facc15;
    --secondary: #ef4444;
    color: #fff7ed;
    text-shadow: 0 0 8px #f97316;
}
.Radio-btn__glitch {
    position: absolute;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    background: rgba(239,68,68,.25);
    text-shadow: 3px 0 #ffffff,-3px 0 #f97316;
    animation: inferno-glitch 1.5s infinite;
}
.Radio-input:hover + .Radio-btn .Radio-btn__glitch,
.Radio-input:checked + .Radio-btn .Radio-btn__glitch {
    display: flex;
}
.Radio-btn label {
    position: absolute;
    top: 3px;
    right: 7px;
    color: #111111;
    background: var(--secondary);
    font-size: 5px;
    line-height: 7px;
    height: 7px;
    width: 14px;
    text-align: center;
}
@keyframes inferno-glitch {
    0%,
    100% {
        clip-path: inset(0);
        transform: translate(0);
    }
    10% {
        clip-path: inset(15% 0 70% 0);
        transform: translate(-4px);
    }
    20% {
        clip-path: inset(60% 0 20% 0);
        transform: translate(4px);
    }
    30% {
        clip-path: inset(35% 0 45% 0);
        transform: translate(-2px);
    }
    40% {
        clip-path: inset(0);
        transform: translate(0);
    }
}`,
  },
  {
    id: 1344,
    name: "Purple Matrix Radio",
    preview: (
      <div className="radio-input-1344">
        <div className="radio-input-1344__wrapper">
          <input
            className="radio-input-1344__input"
            name="radio-1344"
            type="radio"
          />
          <div className="radio-input-1344__btn">
            <i className="fa-solid fa-cube"></i>
            CORE
            <span className="radio-input-1344__glitch">CORE_</span>
            <small>PX01</small>
          </div>
        </div>
        <div className="radio-input-1344__wrapper">
          <input
            className="radio-input-1344__input"
            name="radio-1344"
            type="radio"
            defaultChecked
          />
          <div className="radio-input-1344__btn">
            <i className="fa-solid fa-bolt"></i>
            POWER
            <span className="radio-input-1344__glitch">_POWER</span>
            <small>PX02</small>
          </div>
        </div>
        <div className="radio-input-1344__wrapper">
          <input
            className="radio-input-1344__input"
            name="radio-1344"
            type="radio"
          />
          <div className="radio-input-1344__btn">
            <i className="fa-solid fa-eye"></i>
            VISION
            <span className="radio-input-1344__glitch">VISION_</span>
            <small>PX03</small>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="matrix-1344" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-cube"></i>
            CORE
            <span class="Radio-btn__glitch">CORE_</span>
            <small>PX01</small>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="matrix-1344" type="radio" checked>
        <div class="Radio-btn">
            <i class="fa-solid fa-bolt"></i>
            POWER
            <span class="Radio-btn__glitch">_POWER</span>
            <small>PX02</small>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="matrix-1344" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-eye"></i>
            VISION
            <span class="Radio-btn__glitch">VISION_</span>
            <small>PX03</small>
        </div>
    </div>
</div>`,
    css: `.Radio-container {
    display: flex;
    gap: 5px;
    padding: 5px;
    border: 1px solid #4c1d95;
    background: #08050f;
}
.Radio-wrapper {
    position: relative;
    width: 92px;
    height: 52px;
}
.Radio-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 10;
}
.Radio-btn {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    color: #7c3aed;
    border: 1px solid #4c1d95;
    background:
        linear-gradient(135deg,rgba(124,58,237,.08),transparent),
        #0c0714;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 1.5px;
    transition: .2s ease;
}
.Radio-btn i {
    font-size: 14px;
}
.Radio-btn::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    left: 0;
    bottom: 5px;
    background: #6d28d9;
}
.Radio-btn small {
    position: absolute;
    right: 5px;
    top: 4px;
    color: #52525b;
    font-size: 5px;
}
.Radio-input:hover + .Radio-btn {
    border-color: #8b5cf6;
    color: #a78bfa;
}
.Radio-input:checked + .Radio-btn {
    border-color: #c084fc;
    color: #e9d5ff;
    background:
        linear-gradient(135deg,rgba(139,92,246,.18),transparent),
        #10091c;
    box-shadow:
        inset 0 0 20px rgba(139,92,246,.08),
        0 0 14px rgba(139,92,246,.2);
}
.Radio-btn__glitch {
    position: absolute;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(168,85,247,.12);
    color: #e879f9;
    text-shadow: 2px 0 #22d3ee,-2px 0 #ffffff;
    animation: matrix-glitch 2s infinite;
}
.Radio-input:hover + .Radio-btn .Radio-btn__glitch,
.Radio-input:checked + .Radio-btn .Radio-btn__glitch {
    display: flex;
}
@keyframes matrix-glitch {
    0%,
    100% {
        clip-path: inset(0);
    }
    15% {
        clip-path: inset(10% 0 70% 0);
        transform: translateX(3px);
    }
    30% {
        clip-path: inset(60% 0 15% 0);
        transform: translateX(-3px);
    }
    45% {
        clip-path: inset(35% 0 45% 0);
        transform: translateX(2px);
    }
}`,
  },
  {
    id: 1345,
    name: "Legendary Rainbow Glitch Radio",
    preview: (
      <div className="radio-input-1345">
        <div className="radio-input-1345__wrapper">
          <input
            className="radio-input-1345__input"
            name="radio-1345"
            type="radio"
            defaultChecked
          />
          <div className="radio-input-1345__btn">
            <i className="fa-solid fa-star"></i>
            NOVA
            <span className="radio-input-1345__glitch">_NOVA_</span>
            <label>01</label>
          </div>
        </div>
        <div className="radio-input-1345__wrapper">
          <input
            className="radio-input-1345__input"
            name="radio-1345"
            type="radio"
          />
          <div className="radio-input-1345__btn">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            AURA
            <span className="radio-input-1345__glitch">A_U_R_A</span>
            <label>02</label>
          </div>
        </div>
        <div className="radio-input-1345__wrapper">
          <input
            className="radio-input-1345__input"
            name="radio-1345"
            type="radio"
          />
          <div className="radio-input-1345__btn">
            <i className="fa-solid fa-infinity"></i>
            COSMOS
            <span className="radio-input-1345__glitch">_COSMOS_</span>
            <label>03</label>
          </div>
        </div>
      </div>
    ),
    html: `<div class="Radio-container">
    <div class="Radio-wrapper">
        <input class="Radio-input" name="rainbow-1345" type="radio" checked>
        <div class="Radio-btn">
            <i class="fa-solid fa-star"></i>
            NOVA
            <span class="Radio-btn__glitch">_NOVA_</span>
            <label>01</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="rainbow-1345" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            AURA
            <span class="Radio-btn__glitch">A_U_R_A</span>
            <label>02</label>
        </div>
    </div>
    <div class="Radio-wrapper">
        <input class="Radio-input" name="rainbow-1345" type="radio">
        <div class="Radio-btn">
            <i class="fa-solid fa-infinity"></i>
            COSMOS
            <span class="Radio-btn__glitch">_COSMOS_</span>
            <label>03</label>
        </div>
    </div>
</div>`,
    css: `.Radio-container {
    display: flex;
    gap: 5px;
    padding: 5px;
    background: #09090b;
}
.Radio-wrapper {
    position: relative;
    width: 98px;
    height: 54px;
}
.Radio-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 10;
}
.Radio-btn {
    --main: #06b6d4;
    --secondary: #8b5cf6;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    overflow: hidden;
    color: #e0f2fe;
    border: 1px solid var(--main);
    background:
        linear-gradient(
            135deg,
            rgba(239,68,68,.08),
            rgba(34,197,94,.06),
            rgba(59,130,246,.08)
        ),
        #111113;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 2px;
    transition: .2s ease;
}
.Radio-btn i {
    font-size: 13px;
    background: linear-gradient(
        90deg,
        #ef4444,
        #f97316,
        #eab308,
        #22c55e,
        #06b6d4,
        #6366f1,
        #ec4899
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.Radio-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        120deg,
        transparent 20%,
        rgba(255,255,255,.16) 50%,
        transparent 80%
    );
    transform: translateX(-120%);
    animation: rainbow-sweep 2.8s linear infinite;
}
.Radio-input:hover + .Radio-btn {
    border-color: #f472b6;
    transform: translateY(-1px);
}
.Radio-input:checked + .Radio-btn {
    --main: #f472b6;
    --secondary: #38bdf8;
    box-shadow:
        0 0 15px rgba(236,72,153,.18),
        inset 0 0 20px rgba(99,102,241,.08);
}
.Radio-btn__glitch {
    position: absolute;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(99,102,241,.15);
    color: #ffffff;
    text-shadow:
        3px 0 #ef4444,
        -3px 0 #22d3ee;
    animation: rainbow-glitch 1.7s infinite;
}
.Radio-input:hover + .Radio-btn .Radio-btn__glitch,
.Radio-input:checked + .Radio-btn .Radio-btn__glitch {
    display: flex;
}
.Radio-btn label {
    position: absolute;
    top: 4px;
    right: 6px;
    padding: 1px 4px;
    background: linear-gradient(90deg,#ef4444,#8b5cf6,#06b6d4);
    color: #ffffff;
    font-size: 5px;
    letter-spacing: 1px;
}
@keyframes rainbow-sweep {
    to {
        transform: translateX(120%);
    }
}
@keyframes rainbow-glitch {
    0%,
    100% {
        clip-path: inset(0);
        transform: translate(0);
    }
    12% {
        clip-path: inset(12% 0 72% 0);
        transform: translate(-4px);
    }
    24% {
        clip-path: inset(60% 0 18% 0);
        transform: translate(4px);
    }
    36% {
        clip-path: inset(35% 0 42% 0);
        transform: translate(-2px);
    }
    48% {
        clip-path: inset(0);
        transform: translate(0);
    }
}`,
  },
  {
    id: 1346,
    name: "Payment Method Radio",
    preview: (
      <div className="radio-input-1346">
        <label>
          <input type="radio" name="radio-1346" defaultChecked />
          <div>
            <span className="radio-input-1346__icon">
              <i className="fa-solid fa-credit-card"></i>
            </span>
            <span className="radio-input-1346__content">
              <strong>Credit card</strong>
              <small>Visa, Mastercard, American Express</small>
            </span>
            <span className="radio-input-1346__dot"></span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1346" />
          <div>
            <span className="radio-input-1346__icon">
              <i className="fa-brands fa-paypal"></i>
            </span>
            <span className="radio-input-1346__content">
              <strong>PayPal</strong>
              <small>Pay securely with PayPal</small>
            </span>
            <span className="radio-input-1346__dot"></span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1346" />
          <div>
            <span className="radio-input-1346__icon">
              <i className="fa-solid fa-building-columns"></i>
            </span>
            <span className="radio-input-1346__content">
              <strong>Bank transfer</strong>
              <small>Pay directly from your bank</small>
            </span>
            <span className="radio-input-1346__dot"></span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="payment" checked>
        <div>
            <span class="Radio-icon">
                <i class="fa-solid fa-credit-card"></i>
            </span>
            <span class="Radio-content">
                <strong>Credit card</strong>
                <small>Visa, Mastercard, American Express</small>
            </span>
            <span class="Radio-dot"></span>
        </div>
    </label>
    <label>
        <input type="radio" name="payment">
        <div>
            <span class="Radio-icon">
                <i class="fa-brands fa-paypal"></i>
            </span>
            <span class="Radio-content">
                <strong>PayPal</strong>
                <small>Pay securely with PayPal</small>
            </span>
            <span class="Radio-dot"></span>
        </div>
    </label>
    <label>
        <input type="radio" name="payment">
        <div>
            <span class="Radio-icon">
                <i class="fa-solid fa-building-columns"></i>
            </span>
            <span class="Radio-content">
                <strong>Bank transfer</strong>
                <small>Pay directly from your bank</small>
            </span>
            <span class="Radio-dot"></span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 320px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 14px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio-icon {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio-content {
    flex: 1;
}
.Radio-content strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}
.Radio-content small {
    display: block;
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio-dot {
    width: 18px;
    height: 18px;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
    box-shadow: 0 0 0 3px rgba(37,99,235,.07);
}
.Radio input:checked + div .Radio-icon {
    background: #2563eb;
    color: #ffffff;
}
.Radio input:checked + div .Radio-dot {
    border-color: #2563eb;
    background: radial-gradient(circle, #2563eb 0 40%, transparent 45%);
}`,
  },
  {
    id: 1347,
    name: "Shipping Option Radio",
    preview: (
      <div className="radio-input-1347">
        <label>
          <input type="radio" name="radio-1347" defaultChecked />
          <div>
            <span>
              <strong>Standard delivery</strong>
              <small>3–5 business days</small>
            </span>
            <strong>Free</strong>
            <i className="fa-solid fa-truck"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1347" />
          <div>
            <span>
              <strong>Express delivery</strong>
              <small>1–2 business days</small>
            </span>
            <strong>$12</strong>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="shipping" checked>
        <div>
            <span>
                <strong>Standard delivery</strong>
                <small>3–5 business days</small>
            </span>
            <strong>Free</strong>
            <i class="fa-solid fa-truck"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="shipping">
        <div>
            <span>
                <strong>Express delivery</strong>
                <small>1–2 business days</small>
            </span>
            <strong>$12</strong>
            <i class="fa-solid fa-truck-fast"></i>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 320px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio label span {
    flex: 1;
}
.Radio label strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    display: block;
    margin-top: 4px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label > div > strong {
    font-size: 11px;
}
.Radio label > div > i {
    color: #a1a1aa;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
}
.Radio input:checked + div > i {
    color: #2563eb;
}`,
  },
  {
    id: 1348,
    name: "Account Type Radio",
    preview: (
      <div className="radio-input-1348">
        <label>
          <input type="radio" name="radio-1348" defaultChecked />
          <div>
            <i className="fa-solid fa-user"></i>
            <strong>Personal</strong>
            <small>For individual use</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1348" />
          <div>
            <i className="fa-solid fa-users"></i>
            <strong>Team</strong>
            <small>For teams and collaboration</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="account" checked>
        <div>
            <i class="fa-solid fa-user"></i>
            <strong>Personal</strong>
            <small>For individual use</small>
        </div>
    </label>
    <label>
        <input type="radio" name="account">
        <div>
            <i class="fa-solid fa-users"></i>
            <strong>Team</strong>
            <small>For teams and collaboration</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 290px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    min-height: 125px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio label i {
    margin-bottom: 15px;
    color: #71717a;
    font-size: 20px;
}
.Radio label strong {
    color: #18181b;
    font-size: 12px;
}
.Radio label small {
    margin-top: 4px;
    color: #a1a1aa;
    font-size: 9px;
    line-height: 1.4;
}
.Radio label:hover > div {
    transform: translateY(-2px);
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #7c3aed;
    background: #faf5ff;
    box-shadow: 0 8px 20px rgba(124,58,237,.1);
}
.Radio input:checked + div i {
    color: #7c3aed;
}`,
  },
  {
    id: 1349,
    name: "Theme Selection Radio",
    preview: (
      <div className="radio-input-1349">
        <label>
          <input type="radio" name="radio-1349" defaultChecked />
          <div className="radio-input-1349__preview light">
            <span></span>
            <span></span>
          </div>
          <strong>Light</strong>
        </label>
        <label>
          <input type="radio" name="radio-1349" />
          <div className="radio-input-1349__preview dark">
            <span></span>
            <span></span>
          </div>
          <strong>Dark</strong>
        </label>
        <label>
          <input type="radio" name="radio-1349" />
          <div className="radio-input-1349__preview auto">
            <span></span>
            <span></span>
          </div>
          <strong>System</strong>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="theme" checked>
        <div class="Radio-preview light">
            <span></span>
            <span></span>
        </div>
        <strong>Light</strong>
    </label>
    <label>
        <input type="radio" name="theme">
        <div class="Radio-preview dark">
            <span></span>
            <span></span>
        </div>
        <strong>Dark</strong>
    </label>
    <label>
        <input type="radio" name="theme">
        <div class="Radio-preview auto">
            <span></span>
            <span></span>
        </div>
        <strong>System</strong>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    width: 300px;
}
.Radio label {
    cursor: pointer;
    text-align: center;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-preview {
    height: 72px;
    padding: 9px;
    margin-bottom: 8px;
    border: 2px solid #e4e4e7;
    border-radius: 12px;
    overflow: hidden;
    transition: .2s ease;
}
.Radio-preview.light {
    background: #ffffff;
}
.Radio-preview.dark {
    background: #18181b;
}
.Radio-preview.auto {
    display: flex;
    gap: 3px;
    background: linear-gradient(135deg,#ffffff 50%,#18181b 50%);
}
.Radio-preview span {
    display: block;
    height: 7px;
    margin-bottom: 5px;
    border-radius: 3px;
    background: currentColor;
    opacity: .2;
}
.Radio label strong {
    color: #52525b;
    font-size: 10px;
}
.Radio label:hover .Radio-preview {
    border-color: #a1a1aa;
}
.Radio input:checked + .Radio-preview {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,.08);
}
.Radio input:checked ~ strong {
    color: #6366f1;
}`,
  },
  {
    id: 1350,
    name: "Plan Selector Radio",
    preview: (
      <div className="radio-input-1350">
        <label>
          <input type="radio" name="radio-1350" defaultChecked />
          <div>
            <span className="radio-input-1350__header">
              <strong>Starter</strong>
              <small>Popular</small>
            </span>
            <span className="radio-input-1350__price">
              $9<span>/month</span>
            </span>
            <p>For personal projects and small teams.</p>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1350" />
          <div>
            <span className="radio-input-1350__header">
              <strong>Pro</strong>
              <small>Best value</small>
            </span>
            <span className="radio-input-1350__price">
              $29<span>/month</span>
            </span>
            <p>Advanced tools for growing teams.</p>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="plan" checked>
        <div>
            <span class="Radio-header">
                <strong>Starter</strong>
                <small>Popular</small>
            </span>
            <span class="Radio-price">$9<span>/month</span></span>
            <p>For personal projects and small teams.</p>
        </div>
    </label>
    <label>
        <input type="radio" name="plan">
        <div>
            <span class="Radio-header">
                <strong>Pro</strong>
                <small>Best value</small>
            </span>
            <span class="Radio-price">$29<span>/month</span></span>
            <p>Advanced tools for growing teams.</p>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 310px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    padding: 15px;
    border: 1px solid #e4e4e7;
    border-radius: 15px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Radio-header strong {
    color: #18181b;
    font-size: 13px;
}
.Radio-header small {
    padding: 4px 7px;
    border-radius: 999px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 8px;
}
.Radio-price {
    display: block;
    margin-top: 13px;
    color: #18181b;
    font-size: 25px;
    font-weight: 700;
}
.Radio-price span {
    color: #a1a1aa;
    font-size: 10px;
    font-weight: 400;
}
.Radio p {
    margin: 6px 0 0;
    color: #71717a;
    font-size: 9px;
    line-height: 1.5;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #6366f1;
    background: #fafaff;
    box-shadow: 0 0 0 3px rgba(99,102,241,.08);
}
.Radio input:checked + div .Radio-header strong {
    color: #6366f1;
}`,
  },
  {
    id: 1351,
    name: "Language Selector Radio",
    preview: (
      <div className="radio-input-1351">
        <label>
          <input type="radio" name="radio-1351" defaultChecked />
          <span>English</span>
          <strong>EN</strong>
        </label>
        <label>
          <input type="radio" name="radio-1351" />
          <span>Nederlands</span>
          <strong>NL</strong>
        </label>
        <label>
          <input type="radio" name="radio-1351" />
          <span>Deutsch</span>
          <strong>DE</strong>
        </label>
        <label>
          <input type="radio" name="radio-1351" />
          <span>Français</span>
          <strong>FR</strong>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="language" checked>
        <span>English</span>
        <strong>EN</strong>
    </label>
    <label>
        <input type="radio" name="language">
        <span>Nederlands</span>
        <strong>NL</strong>
    </label>
    <label>
        <input type="radio" name="language">
        <span>Deutsch</span>
        <strong>DE</strong>
    </label>
    <label>
        <input type="radio" name="language">
        <span>Français</span>
        <strong>FR</strong>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    width: 250px;
}
.Radio label {
    display: flex;
    align-items: center;
    padding: 11px 12px;
    border-bottom: 1px solid #f4f4f5;
    cursor: pointer;
    transition: .2s ease;
}
.Radio label:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.Radio label:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    flex: 1;
    color: #52525b;
    font-size: 11px;
}
.Radio label strong {
    color: #a1a1aa;
    font-size: 9px;
    font-family: monospace;
}
.Radio label:hover {
    background: #f4f4f5;
}
.Radio input:checked + span {
    color: #2563eb;
    font-weight: 600;
}
.Radio input:checked + span + strong {
    color: #2563eb;
}`,
  },
  {
    id: 1352,
    name: "Notification Frequency Radio",
    preview: (
      <div className="radio-input-1352">
        <label>
          <input type="radio" name="radio-1352" defaultChecked />
          <i className="fa-solid fa-bell"></i>
          <div>
            <strong>All notifications</strong>
            <small>Stay up to date with everything</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1352" />
          <i className="fa-solid fa-filter"></i>
          <div>
            <strong>Important only</strong>
            <small>Only alerts that need attention</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1352" />
          <i className="fa-regular fa-bell-slash"></i>
          <div>
            <strong>None</strong>
            <small>Disable notifications</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="notifications" checked>
        <i class="fa-solid fa-bell"></i>
        <div>
            <strong>All notifications</strong>
            <small>Stay up to date with everything</small>
        </div>
    </label>
    <label>
        <input type="radio" name="notifications">
        <i class="fa-solid fa-filter"></i>
        <div>
            <strong>Important only</strong>
            <small>Only alerts that need attention</small>
        </div>
    </label>
    <label>
        <input type="radio" name="notifications">
        <i class="fa-regular fa-bell-slash"></i>
        <div>
            <strong>None</strong>
            <small>Disable notifications</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 300px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid transparent;
    border-radius: 11px;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > i {
    width: 30px;
    color: #71717a;
    text-align: center;
}
.Radio label > div {
    flex: 1;
}
.Radio label strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    display: block;
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover {
    background: #f4f4f5;
}
.Radio input:checked + i {
    color: #2563eb;
}
.Radio input:checked ~ div strong {
    color: #2563eb;
}
.Radio input:checked {
    accent-color: #2563eb;
}`,
  },
  {
    id: 1353,
    name: "Workspace Radio",
    preview: (
      <div className="radio-input-1353">
        <label>
          <input type="radio" name="radio-1353" defaultChecked />
          <div className="radio-input-1353__logo">A</div>
          <div>
            <strong>Acme Design</strong>
            <small>12 members</small>
          </div>
          <i className="fa-solid fa-check"></i>
        </label>
        <label>
          <input type="radio" name="radio-1353" />
          <div className="radio-input-1353__logo">D</div>
          <div>
            <strong>Dev Studio</strong>
            <small>8 members</small>
          </div>
          <i className="fa-solid fa-check"></i>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="workspace" checked>
        <div class="Radio-logo">A</div>
        <div>
            <strong>Acme Design</strong>
            <small>12 members</small>
        </div>
        <i class="fa-solid fa-check"></i>
    </label>
    <label>
        <input type="radio" name="workspace">
        <div class="Radio-logo">D</div>
        <div>
            <strong>Dev Studio</strong>
            <small>8 members</small>
        </div>
        <i class="fa-solid fa-check"></i>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 300px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 10px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-logo {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #18181b;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
}
.Radio label > div:nth-child(3) {
    flex: 1;
}
.Radio label strong {
    display: block;
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    display: block;
    margin-top: 3px;
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label > i {
    color: transparent;
}
.Radio label:hover {
    border-color: #a1a1aa;
}
.Radio input:checked + .Radio-logo {
    background: #2563eb;
}
.Radio input:checked ~ div strong {
    color: #2563eb;
}
.Radio input:checked ~ i {
    color: #2563eb;
}`,
  },
  {
    id: 1354,
    name: "Color Theme Radio",
    preview: (
      <div className="radio-input-1354">
        <label>
          <input type="radio" name="radio-1354" defaultChecked />
          <span className="radio-input-1354__color blue"></span>
          <span>Ocean Blue</span>
        </label>
        <label>
          <input type="radio" name="radio-1354" />
          <span className="radio-input-1354__color purple"></span>
          <span>Royal Purple</span>
        </label>
        <label>
          <input type="radio" name="radio-1354" />
          <span className="radio-input-1354__color green"></span>
          <span>Emerald Green</span>
        </label>
        <label>
          <input type="radio" name="radio-1354" />
          <span className="radio-input-1354__color orange"></span>
          <span>Sunset Orange</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="color" checked>
        <span class="Radio-color blue"></span>
        <span>Ocean Blue</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-color purple"></span>
        <span>Royal Purple</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-color green"></span>
        <span>Emerald Green</span>
    </label>
    <label>
        <input type="radio" name="color">
        <span class="Radio-color orange"></span>
        <span>Sunset Orange</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 230px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    background: #ffffff;
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-color {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px rgba(255,255,255,.6);
}
.Radio-color.blue {
    background: #2563eb;
}
.Radio-color.purple {
    background: #7c3aed;
}
.Radio-color.green {
    background: #16a34a;
}
.Radio-color.orange {
    background: #f97316;
}
.Radio label > span:last-child {
    color: #52525b;
    font-size: 10px;
}
.Radio label:hover {
    border-color: #a1a1aa;
}
.Radio input:checked + .Radio-color {
    outline: 3px solid rgba(99,102,241,.15);
}
.Radio input:checked + .Radio-color + span {
    color: #18181b;
    font-weight: 600;
}`,
  },
  {
    id: 1355,
    name: "Project Visibility Radio",
    preview: (
      <div className="radio-input-1355">
        <label>
          <input type="radio" name="radio-1355" defaultChecked />
          <div>
            <i className="fa-solid fa-lock"></i>
            <span>
              <strong>Private</strong>
              <small>Only you can access this project</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1355" />
          <div>
            <i className="fa-solid fa-link"></i>
            <span>
              <strong>Unlisted</strong>
              <small>Anyone with the link can access it</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1355" />
          <div>
            <i className="fa-solid fa-globe"></i>
            <span>
              <strong>Public</strong>
              <small>Anyone can discover this project</small>
            </span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="visibility" checked>
        <div>
            <i class="fa-solid fa-lock"></i>
            <span>
                <strong>Private</strong>
                <small>Only you can access this project</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="visibility">
        <div>
            <i class="fa-solid fa-link"></i>
            <span>
                <strong>Unlisted</strong>
                <small>Anyone with the link can access it</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="visibility">
        <div>
            <i class="fa-solid fa-globe"></i>
            <span>
                <strong>Public</strong>
                <small>Anyone can discover this project</small>
            </span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 300px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
}
.Radio label i {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio label span {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 8px;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #22c55e;
    background: #f0fdf4;
}
.Radio input:checked + div i {
    background: #22c55e;
    color: #ffffff;
}`,
  },
  {
    id: 1356,
    name: "Size Selector Radio",
    preview: (
      <div className="radio-input-1356">
        <label>
          <input type="radio" name="radio-1356" defaultChecked />
          <span>XS</span>
        </label>
        <label>
          <input type="radio" name="radio-1356" />
          <span>S</span>
        </label>
        <label>
          <input type="radio" name="radio-1356" />
          <span>M</span>
        </label>
        <label>
          <input type="radio" name="radio-1356" />
          <span>L</span>
        </label>
        <label>
          <input type="radio" name="radio-1356" />
          <span>XL</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="size" checked>
        <span>XS</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>S</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>M</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>L</span>
    </label>
    <label>
        <input type="radio" name="size">
        <span>XL</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    gap: 7px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label span {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid #d4d4d8;
    border-radius: 9px;
    background: #ffffff;
    color: #71717a;
    font-size: 10px;
    font-weight: 600;
    transition: .2s ease;
}
.Radio label:hover span {
    border-color: #71717a;
}
.Radio input:checked + span {
    border-color: #18181b;
    background: #18181b;
    color: #ffffff;
}`,
  },
  {
    id: 1357,
    name: "View Mode Radio",
    preview: (
      <div className="radio-input-1357">
        <label>
          <input type="radio" name="radio-1357" defaultChecked />
          <i className="fa-solid fa-table-cells-large"></i>
          <span>Grid</span>
        </label>
        <label>
          <input type="radio" name="radio-1357" />
          <i className="fa-solid fa-list"></i>
          <span>List</span>
        </label>
        <label>
          <input type="radio" name="radio-1357" />
          <i className="fa-solid fa-table"></i>
          <span>Table</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="view" checked>
        <i class="fa-solid fa-table-cells-large"></i>
        <span>Grid</span>
    </label>
    <label>
        <input type="radio" name="view">
        <i class="fa-solid fa-list"></i>
        <span>List</span>
    </label>
    <label>
        <input type="radio" name="view">
        <i class="fa-solid fa-table"></i>
        <span>Table</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    gap: 6px;
    padding: 4px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #f4f4f5;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 11px;
    border-radius: 9px;
    cursor: pointer;
    color: #71717a;
    font-size: 10px;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label:hover {
    color: #18181b;
}
.Radio input:checked + i,
.Radio input:checked ~ span {
    color: #18181b;
}
.Radio input:checked + i + span {
    color: #18181b;
}
.Radio label:has(input:checked) {
    background: #ffffff;
    box-shadow: 0 2px 7px rgba(0,0,0,.07);
}`,
  },
  {
    id: 1358,
    name: "Contact Preference Radio",
    preview: (
      <div className="radio-input-1358">
        <label>
          <input type="radio" name="radio-1358" defaultChecked />
          <span className="radio-input-1358__circle"></span>
          <span>
            <strong>Email</strong>
            <small>andre@example.com</small>
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1358" />
          <span className="radio-input-1358__circle"></span>
          <span>
            <strong>Phone</strong>
            <small>+31 6 12345678</small>
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1358" />
          <span className="radio-input-1358__circle"></span>
          <span>
            <strong>Do not contact</strong>
            <small>No communication</small>
          </span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="contact" checked>
        <span class="Radio-circle"></span>
        <span>
            <strong>Email</strong>
            <small>andre@example.com</small>
        </span>
    </label>
    <label>
        <input type="radio" name="contact">
        <span class="Radio-circle"></span>
        <span>
            <strong>Phone</strong>
            <small>+31 6 12345678</small>
        </span>
    </label>
    <label>
        <input type="radio" name="contact">
        <span class="Radio-circle"></span>
        <span>
            <strong>Do not contact</strong>
            <small>No communication</small>
        </span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 280px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-circle {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
}
.Radio label > span:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover {
    border-color: #a1a1aa;
}
.Radio input:checked + .Radio-circle {
    border-color: #2563eb;
    background: radial-gradient(circle, #2563eb 0 40%, transparent 44%);
}
.Radio input:checked ~ span:last-child strong {
    color: #2563eb;
}`,
  },
  {
    id: 1359,
    name: "Priority Radio",
    preview: (
      <div className="radio-input-1359">
        <label>
          <input type="radio" name="radio-1359" defaultChecked />
          <span className="radio-input-1359__indicator low"></span>
          <span>Low</span>
        </label>
        <label>
          <input type="radio" name="radio-1359" />
          <span className="radio-input-1359__indicator medium"></span>
          <span>Medium</span>
        </label>
        <label>
          <input type="radio" name="radio-1359" />
          <span className="radio-input-1359__indicator high"></span>
          <span>High</span>
        </label>
        <label>
          <input type="radio" name="radio-1359" />
          <span className="radio-input-1359__indicator urgent"></span>
          <span>Urgent</span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="priority" checked>
        <span class="Radio-indicator low"></span>
        <span>Low</span>
    </label>
    <label>
        <input type="radio" name="priority">
        <span class="Radio-indicator medium"></span>
        <span>Medium</span>
    </label>
    <label>
        <input type="radio" name="priority">
        <span class="Radio-indicator high"></span>
        <span>High</span>
    </label>
    <label>
        <input type="radio" name="priority">
        <span class="Radio-indicator urgent"></span>
        <span>Urgent</span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 210px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 11px;
    border: 1px solid #e4e4e7;
    border-radius: 9px;
    background: #ffffff;
    color: #52525b;
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.Radio-indicator.low {
    background: #22c55e;
}
.Radio-indicator.medium {
    background: #eab308;
}
.Radio-indicator.high {
    background: #f97316;
}
.Radio-indicator.urgent {
    background: #ef4444;
}
.Radio label > span:last-child {
    font-size: 10px;
}
.Radio input:checked + .Radio-indicator {
    outline: 3px solid rgba(0,0,0,.08);
}`,
  },
  {
    id: 1360,
    name: "Billing Cycle Radio",
    preview: (
      <div className="radio-input-1360">
        <label>
          <input type="radio" name="radio-1360" defaultChecked />
          <div>
            <strong>Monthly</strong>
            <span>$19 / month</span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1360" />
          <div>
            <strong>Yearly</strong>
            <span>$190 / year</span>
            <small>Save 17%</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="billing" checked>
        <div>
            <strong>Monthly</strong>
            <span>$19 / month</span>
        </div>
    </label>
    <label>
        <input type="radio" name="billing">
        <div>
            <strong>Yearly</strong>
            <span>$190 / year</span>
            <small>Save 17%</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    width: 290px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    position: relative;
    min-height: 88px;
    padding: 14px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio label strong {
    display: block;
    color: #18181b;
    font-size: 12px;
}
.Radio label span {
    display: block;
    margin-top: 9px;
    color: #71717a;
    font-size: 10px;
}
.Radio label small {
    display: inline-block;
    margin-top: 7px;
    padding: 3px 6px;
    border-radius: 999px;
    background: #dcfce7;
    color: #15803d;
    font-size: 7px;
    font-weight: 700;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #16a34a;
    background: #f0fdf4;
    box-shadow: 0 0 0 3px rgba(34,197,94,.08);
}`,
  },
  {
    id: 1361,
    name: "Role Selector Radio",
    preview: (
      <div className="radio-input-1361">
        <label>
          <input type="radio" name="radio-1361" defaultChecked />
          <i className="fa-solid fa-pen-ruler"></i>
          <span>
            <strong>Designer</strong>
            <small>Design and creative work</small>
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1361" />
          <i className="fa-solid fa-code"></i>
          <span>
            <strong>Developer</strong>
            <small>Software and engineering</small>
          </span>
        </label>
        <label>
          <input type="radio" name="radio-1361" />
          <i className="fa-solid fa-chart-line"></i>
          <span>
            <strong>Marketer</strong>
            <small>Growth and campaigns</small>
          </span>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="role" checked>
        <i class="fa-solid fa-pen-ruler"></i>
        <span>
            <strong>Designer</strong>
            <small>Design and creative work</small>
        </span>
    </label>
    <label>
        <input type="radio" name="role">
        <i class="fa-solid fa-code"></i>
        <span>
            <strong>Developer</strong>
            <small>Software and engineering</small>
        </span>
    </label>
    <label>
        <input type="radio" name="role">
        <i class="fa-solid fa-chart-line"></i>
        <span>
            <strong>Marketer</strong>
            <small>Growth and campaigns</small>
        </span>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 310px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > i {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio label > span {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover {
    border-color: #a1a1aa;
}
.Radio input:checked + i {
    color: #ffffff;
    background: #7c3aed;
}
.Radio input:checked ~ span strong {
    color: #7c3aed;
}`,
  },
  {
    id: 1362,
    name: "Environment Radio",
    preview: (
      <div className="radio-input-1362">
        <label>
          <input type="radio" name="radio-1362" defaultChecked />
          <span className="radio-input-1362__dot"></span>
          <div>
            <strong>Development</strong>
            <small>localhost:3000</small>
          </div>
          <kbd>DEV</kbd>
        </label>
        <label>
          <input type="radio" name="radio-1362" />
          <span className="radio-input-1362__dot"></span>
          <div>
            <strong>Staging</strong>
            <small>staging.example.com</small>
          </div>
          <kbd>STG</kbd>
        </label>
        <label>
          <input type="radio" name="radio-1362" />
          <span className="radio-input-1362__dot"></span>
          <div>
            <strong>Production</strong>
            <small>example.com</small>
          </div>
          <kbd>PROD</kbd>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="environment" checked>
        <span class="Radio-dot"></span>
        <div>
            <strong>Development</strong>
            <small>localhost:3000</small>
        </div>
        <kbd>DEV</kbd>
    </label>
    <label>
        <input type="radio" name="environment">
        <span class="Radio-dot"></span>
        <div>
            <strong>Staging</strong>
            <small>staging.example.com</small>
        </div>
        <kbd>STG</kbd>
    </label>
    <label>
        <input type="radio" name="environment">
        <span class="Radio-dot"></span>
        <div>
            <strong>Production</strong>
            <small>example.com</small>
        </div>
        <kbd>PROD</kbd>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 310px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid #27272a;
    border-radius: 10px;
    background: #18181b;
    cursor: pointer;
    color: #ffffff;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-dot {
    width: 9px;
    height: 9px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #52525b;
}
.Radio label > div {
    flex: 1;
}
.Radio label strong {
    display: block;
    font-size: 10px;
}
.Radio label small {
    display: block;
    margin-top: 3px;
    color: #71717a;
    font-size: 8px;
    font-family: monospace;
}
.Radio kbd {
    padding: 3px 5px;
    border: 1px solid #3f3f46;
    border-radius: 5px;
    color: #71717a;
    font-size: 7px;
}
.Radio label:hover {
    border-color: #52525b;
}
.Radio input:checked + .Radio-dot {
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34,197,94,.5);
}
.Radio input:checked ~ div strong {
    color: #4ade80;
}
.Radio input:checked ~ kbd {
    border-color: #166534;
    color: #4ade80;
}`,
  },
  {
    id: 1363,
    name: "Support Priority Radio",
    preview: (
      <div className="radio-input-1363">
        <label>
          <input type="radio" name="radio-1363" defaultChecked />
          <div>
            <span className="radio-input-1363__number">1</span>
            <span>
              <strong>General question</strong>
              <small>I need some information</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1363" />
          <div>
            <span className="radio-input-1363__number">2</span>
            <span>
              <strong>Something is wrong</strong>
              <small>I'm experiencing an issue</small>
            </span>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1363" />
          <div>
            <span className="radio-input-1363__number">3</span>
            <span>
              <strong>Critical problem</strong>
              <small>My work is blocked</small>
            </span>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="support" checked>
        <div>
            <span class="Radio-number">1</span>
            <span>
                <strong>General question</strong>
                <small>I need some information</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="support">
        <div>
            <span class="Radio-number">2</span>
            <span>
                <strong>Something is wrong</strong>
                <small>I'm experiencing an issue</small>
            </span>
        </div>
    </label>
    <label>
        <input type="radio" name="support">
        <div>
            <span class="Radio-number">3</span>
            <span>
                <strong>Critical problem</strong>
                <small>My work is blocked</small>
            </span>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 300px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 11px;
    border: 1px solid #e4e4e7;
    border-radius: 11px;
    background: #ffffff;
}
.Radio-number {
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    background: #f4f4f5;
    color: #71717a;
    font-size: 10px;
    font-weight: 700;
}
.Radio label > div > span:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #f97316;
    background: #fff7ed;
}
.Radio input:checked + div .Radio-number {
    background: #f97316;
    color: #ffffff;
}
.Radio input:checked + div > span:last-child strong {
    color: #ea580c;
}`,
  },
  {
    id: 1364,
    name: "Workspace Permission Radio",
    preview: (
      <div className="radio-input-1364">
        <label>
          <input type="radio" name="radio-1364" defaultChecked />
          <span className="radio-input-1364__icon">
            <i className="fa-solid fa-eye"></i>
          </span>
          <div>
            <strong>Viewer</strong>
            <small>Can view files and projects</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1364" />
          <span className="radio-input-1364__icon">
            <i className="fa-solid fa-pen"></i>
          </span>
          <div>
            <strong>Editor</strong>
            <small>Can create and edit content</small>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1364" />
          <span className="radio-input-1364__icon">
            <i className="fa-solid fa-user-shield"></i>
          </span>
          <div>
            <strong>Admin</strong>
            <small>Full workspace permissions</small>
          </div>
        </label>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="permission" checked>
        <span class="Radio-icon">
            <i class="fa-solid fa-eye"></i>
        </span>
        <div>
            <strong>Viewer</strong>
            <small>Can view files and projects</small>
        </div>
    </label>
    <label>
        <input type="radio" name="permission">
        <span class="Radio-icon">
            <i class="fa-solid fa-pen"></i>
        </span>
        <div>
            <strong>Editor</strong>
            <small>Can create and edit content</small>
        </div>
    </label>
    <label>
        <input type="radio" name="permission">
        <span class="Radio-icon">
            <i class="fa-solid fa-user-shield"></i>
        </span>
        <div>
            <strong>Admin</strong>
            <small>Full workspace permissions</small>
        </div>
    </label>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 300px;
}
.Radio label {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid #e4e4e7;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    transition: .2s ease;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio-icon {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #f4f4f5;
    color: #71717a;
}
.Radio label > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label:hover {
    border-color: #a1a1aa;
}
.Radio input:checked + .Radio-icon {
    background: #18181b;
    color: #ffffff;
}
.Radio input:checked ~ div strong {
    color: #18181b;
}`,
  },
  {
    id: 1365,
    name: "Legendary Checkout Radio",
    preview: (
      <div className="radio-input-1365">
        <label>
          <input type="radio" name="radio-1365" defaultChecked />
          <div>
            <div className="radio-input-1365__left">
              <span className="radio-input-1365__circle"></span>
              <span>
                <strong>Home address</strong>
                <small>123 Main Street, Amsterdam</small>
              </span>
            </div>
            <i className="fa-solid fa-house"></i>
          </div>
        </label>
        <label>
          <input type="radio" name="radio-1365" />
          <div>
            <div className="radio-input-1365__left">
              <span className="radio-input-1365__circle"></span>
              <span>
                <strong>Office address</strong>
                <small>88 Business Avenue, Amsterdam</small>
              </span>
            </div>
            <i className="fa-solid fa-building"></i>
          </div>
        </label>
        <button className="radio-input-1365__add">
          <i className="fa-solid fa-plus"></i>
          Add another address
        </button>
      </div>
    ),
    html: `<div class="Radio">
    <label>
        <input type="radio" name="address" checked>
        <div>
            <div class="Radio-left">
                <span class="Radio-circle"></span>
                <span>
                    <strong>Home address</strong>
                    <small>123 Main Street, Amsterdam</small>
                </span>
            </div>
            <i class="fa-solid fa-house"></i>
        </div>
    </label>
    <label>
        <input type="radio" name="address">
        <div>
            <div class="Radio-left">
                <span class="Radio-circle"></span>
                <span>
                    <strong>Office address</strong>
                    <small>88 Business Avenue, Amsterdam</small>
                </span>
            </div>
            <i class="fa-solid fa-building"></i>
        </div>
    </label>
    <button class="Radio-add">
        <i class="fa-solid fa-plus"></i>
        Add another address
    </button>
</div>`,
    css: `.Radio {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 330px;
}
.Radio label {
    cursor: pointer;
}
.Radio input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.Radio label > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 13px;
    border: 1px solid #e4e4e7;
    border-radius: 13px;
    background: #ffffff;
    transition: .2s ease;
}
.Radio-left {
    display: flex;
    align-items: center;
    gap: 11px;
}
.Radio-circle {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    border: 2px solid #d4d4d8;
    border-radius: 50%;
}
.Radio-left > span:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.Radio label strong {
    color: #18181b;
    font-size: 11px;
}
.Radio label small {
    color: #a1a1aa;
    font-size: 9px;
}
.Radio label > div > i {
    color: #a1a1aa;
}
.Radio label:hover > div {
    border-color: #a1a1aa;
}
.Radio input:checked + div {
    border-color: #2563eb;
    background: #eff6ff;
}
.Radio input:checked + div .Radio-circle {
    border-color: #2563eb;
    background: radial-gradient(circle, #2563eb 0 40%, transparent 44%);
}
.Radio input:checked + div > i {
    color: #2563eb;
}
.Radio-add {
    height: 43px;
    border: 1px dashed #d4d4d8;
    border-radius: 11px;
    background: #fafafa;
    color: #71717a;
    cursor: pointer;
    font-size: 10px;
}
.Radio-add:hover {
    border-color: #2563eb;
    color: #2563eb;
}`,
  },
];
