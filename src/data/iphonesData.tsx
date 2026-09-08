import "../pages/All.css";

export const iphones = [
  {
    id: 2194,
    name: "iOS Dynamic Island Notification",
    preview: (
      <div className="iphone-ui-2194">
        <div className="iphone-ui-2194__island">
          <div className="iphone-ui-2194__camera"></div>
          <div className="iphone-ui-2194__sensor"></div>
        </div>
        <div className="iphone-ui-2194__notification">
          <div className="iphone-ui-2194__app-icon">
            <i className="fa-solid fa-message"></i>
          </div>
          <div className="iphone-ui-2194__text">
            <div className="iphone-ui-2194__top">
              <strong>Messages</strong>
              <span>now</span>
            </div>
            <p>Hey! Are you free tonight?</p>
          </div>
        </div>
      </div>
    ),
    html: `<div class="iPhoneUI">
    <div class="iPhoneUI-island">
        <div class="iPhoneUI-camera"></div>
        <div class="iPhoneUI-sensor"></div>
    </div>
    <div class="iPhoneUI-notification">
        <div class="iPhoneUI-app-icon">
            <i class="fa-solid fa-message"></i>
        </div>
        <div class="iPhoneUI-text">
            <div class="iPhoneUI-top">
                <strong>Messages</strong>
                <span>now</span>
            </div>
            <p>Hey! Are you free tonight?</p>
        </div>
    </div>
</div>`,
    css: `.iPhoneUI {
    position: relative;
    width: 310px;
    min-height: 180px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 18px;
    overflow: hidden;
    border: 7px solid #111113;
    border-radius: 38px;
    background:
        radial-gradient(
            circle at 50% 100%,
            rgba(0,122,255,.16),
            transparent 40%
        ),
        linear-gradient(
            180deg,
            #202124,
            #0e0e10
        );
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,.08),
        0 25px 70px rgba(0,0,0,.22);
}
.iPhoneUI-island {
    position: relative;
    z-index: 4;
    width: 92px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 11px;
    border-radius: 999px;
    background: #000;
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,.05),
        0 3px 10px rgba(0,0,0,.4);
}
.iPhoneUI-camera {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 35% 30%,
            #425466,
            #111 55%,
            #000
        );
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,.08),
        0 0 4px rgba(0,122,255,.3);
}
.iPhoneUI-sensor {
    position: absolute;
    right: 27px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #050505;
}
.iPhoneUI-notification {
    position: absolute;
    top: 62px;
    left: 11px;
    right: 11px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 18px;
    background: rgba(42,42,45,.82);
    backdrop-filter: blur(20px);
    box-shadow:
        0 10px 25px rgba(0,0,0,.22),
        inset 0 1px rgba(255,255,255,.07);
    color: #fff;
}
.iPhoneUI-app-icon {
    width: 37px;
    height: 37px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
        145deg,
        #34c759,
        #1f9d44
    );
    color: #fff;
    font-size: 16px;
}
.iPhoneUI-text {
    min-width: 0;
    flex: 1;
}
.iPhoneUI-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}
.iPhoneUI-top strong {
    font-size: 12px;
    font-weight: 700;
}
.iPhoneUI-top span {
    color: #8e8e93;
    font-size: 9px;
}
.iPhoneUI-text p {
    margin: 4px 0 0;
    color: #d1d1d6;
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}`,
  },
  {
    id: 2195,
    name: "iOS Quick Settings Card",
    preview: (
      <div className="iphone-ui-2195">
        <div className="iphone-ui-2195__header">
          <strong>Control Center</strong>
          <i className="fa-solid fa-signal"></i>
        </div>
        <div className="iphone-ui-2195__grid">
          <button className="iphone-ui-2195__tile iphone-ui-2195__tile--blue">
            <i className="fa-solid fa-wifi"></i>
            <span>Wi-Fi</span>
          </button>
          <button className="iphone-ui-2195__tile iphone-ui-2195__tile--blue">
            <i className="fa-brands fa-bluetooth-b"></i>
            <span>Bluetooth</span>
          </button>
          <button className="iphone-ui-2195__tile">
            <i className="fa-solid fa-plane"></i>
            <span>Airplane</span>
          </button>
          <button className="iphone-ui-2195__tile">
            <i className="fa-solid fa-moon"></i>
            <span>Focus</span>
          </button>
        </div>
        <div className="iphone-ui-2195__slider">
          <div className="iphone-ui-2195__slider-icon">
            <i className="fa-solid fa-sun"></i>
          </div>
          <div className="iphone-ui-2195__track">
            <div className="iphone-ui-2195__fill"></div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="iPhoneUI">
    <div class="iPhoneUI-header">
        <strong>Control Center</strong>
        <i class="fa-solid fa-signal"></i>
    </div>
    <div class="iPhoneUI-grid">
        <button class="iPhoneUI-tile iPhoneUI-tile--blue">
            <i class="fa-solid fa-wifi"></i>
            <span>Wi-Fi</span>
        </button>
        <button class="iPhoneUI-tile iPhoneUI-tile--blue">
            <i class="fa-brands fa-bluetooth-b"></i>
            <span>Bluetooth</span>
        </button>
        <button class="iPhoneUI-tile">
            <i class="fa-solid fa-plane"></i>
            <span>Airplane</span>
        </button>
        <button class="iPhoneUI-tile">
            <i class="fa-solid fa-moon"></i>
            <span>Focus</span>
        </button>
    </div>
    <div class="iPhoneUI-slider">
        <div class="iPhoneUI-slider-icon">
            <i class="fa-solid fa-sun"></i>
        </div>
        <div class="iPhoneUI-track">
            <div class="iPhoneUI-fill"></div>
        </div>
    </div>
</div>`,
    css: `.iPhoneUI {
    width: 300px;
    padding: 16px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 27px;
    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.5),
            rgba(255,255,255,.16)
        );
    backdrop-filter: blur(22px);
    box-shadow:
        0 25px 60px rgba(15,23,42,.16),
        inset 0 1px rgba(255,255,255,.75);
    color: #1d1d1f;
}
.iPhoneUI-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    padding: 2px 2px;
}
.iPhoneUI-header strong {
    font-size: 13px;
    font-weight: 700;
}
.iPhoneUI-header i {
    color: #636366;
    font-size: 11px;
}
.iPhoneUI-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 9px;
}
.iPhoneUI-tile {
    min-height: 73px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    border: 0;
    border-radius: 17px;
    background: rgba(255,255,255,.68);
    color: #1d1d1f;
    box-shadow:
        inset 0 1px rgba(255,255,255,.8),
        0 5px 12px rgba(15,23,42,.06);
    cursor: pointer;
    transition:
        transform .18s ease,
        box-shadow .18s ease;
}
.iPhoneUI-tile:hover {
    transform: translateY(-2px);
    box-shadow:
        inset 0 1px rgba(255,255,255,.9),
        0 9px 18px rgba(15,23,42,.1);
}
.iPhoneUI-tile i {
    font-size: 16px;
}
.iPhoneUI-tile span {
    font-size: 10px;
    font-weight: 600;
}
.iPhoneUI-tile--blue {
    background: #007aff;
    color: #fff;
}
.iPhoneUI-slider {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 10px;
    padding: 11px;
    border-radius: 17px;
    background: rgba(255,255,255,.7);
}
.iPhoneUI-slider-icon {
    width: 27px;
    height: 27px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #ff9f0a;
    background: rgba(255,159,10,.12);
    font-size: 11px;
}
.iPhoneUI-track {
    flex: 1;
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #d1d1d6;
}
.iPhoneUI-fill {
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #ff9f0a;
}`,
  },
  {
    id: 2196,
    name: "iOS Glass Button",
    preview: (
      <div className="iphone-button-2196">
        <button>
          <i className="fa-solid fa-arrow-right"></i>
          Continue
        </button>
      </div>
    ),
    html: `<button class="iOSButton">
    <i class="fa-solid fa-arrow-right"></i>
    Continue
</button>`,
    css: `.iOSButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 150px;
    height: 48px;
    padding: 0 20px;
    border: 0;
    border-radius: 16px;
    background: linear-gradient(
        180deg,
        #2f9bff 0%,
        #007aff 100%
    );
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.2px;
    box-shadow:
        inset 0 1px rgba(255,255,255,.35),
        0 5px 14px rgba(0,122,255,.28);
    cursor: pointer;
    transition:
        transform .16s ease,
        box-shadow .16s ease,
        filter .16s ease;
}
.iOSButton::before {
    content: "";
    position: absolute;
}
.iOSButton:hover {
    filter: brightness(1.04);
    box-shadow:
        inset 0 1px rgba(255,255,255,.4),
        0 7px 18px rgba(0,122,255,.34);
}
.iOSButton:active {
    transform: scale(.97);
    box-shadow:
        inset 0 2px 5px rgba(0,0,0,.16),
        0 2px 7px rgba(0,122,255,.22);
}
.iOSButton i {
    font-size: 13px;
}`,
  },
  {
    id: 2197,
    name: "iOS Passcode Keypad",
    preview: (
      <div className="iphone-passcode-2197">
        <div className="iphone-passcode-2197__title">
          <span>Enter Passcode</span>
          <small>iPhone</small>
        </div>
        <div className="iphone-passcode-2197__dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="iphone-passcode-2197__keypad">
          <button>
            <strong>1</strong>
          </button>
          <button>
            <strong>2</strong>
            <span>ABC</span>
          </button>
          <button>
            <strong>3</strong>
            <span>DEF</span>
          </button>
          <button>
            <strong>4</strong>
            <span>GHI</span>
          </button>
          <button>
            <strong>5</strong>
            <span>JKL</span>
          </button>
          <button>
            <strong>6</strong>
            <span>MNO</span>
          </button>
          <button>
            <strong>7</strong>
            <span>PQRS</span>
          </button>
          <button>
            <strong>8</strong>
            <span>TUV</span>
          </button>
          <button>
            <strong>9</strong>
            <span>WXYZ</span>
          </button>
          <button className="iphone-passcode-2197__empty"></button>
          <button>
            <strong>0</strong>
          </button>
          <button className="iphone-passcode-2197__delete">
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
        <button className="iphone-passcode-2197__cancel">Cancel</button>
      </div>
    ),
    html: `<div class="iOSPasscode">
    <div class="iOSPasscode-title">
        <span>Enter Passcode</span>
        <small>iPhone</small>
    </div>
    <div class="iOSPasscode-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="iOSPasscode-keypad">
        <button>
            <strong>1</strong>
        </button>
        <button>
            <strong>2</strong>
            <span>ABC</span>
        </button>
        <button>
            <strong>3</strong>
            <span>DEF</span>
        </button>
        <button>
            <strong>4</strong>
            <span>GHI</span>
        </button>
        <button>
            <strong>5</strong>
            <span>JKL</span>
        </button>
        <button>
            <strong>6</strong>
            <span>MNO</span>
        </button>
        <button>
            <strong>7</strong>
            <span>PQRS</span>
        </button>
        <button>
            <strong>8</strong>
            <span>TUV</span>
        </button>
        <button>
            <strong>9</strong>
            <span>WXYZ</span>
        </button>
        <button class="iOSPasscode-empty"></button>
        <button>
            <strong>0</strong>
        </button>
        <button class="iOSPasscode-delete">
            <i class="fa-solid fa-delete-left"></i>
        </button>
    </div>
    <button class="iOSPasscode-cancel">
        Cancel
    </button>
</div>`,
    css: `.iOSPasscode {
    width: 300px;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 22px 22px;
    border-radius: 38px;
    background:
        linear-gradient(
            180deg,
            #1c1c1e 0%,
            #111113 100%
        );
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,.06),
        0 25px 60px rgba(0,0,0,.3);
    color: #fff;
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "SF Pro Display",
        "SF Pro Text",
        sans-serif;
}
.iOSPasscode-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}
.iOSPasscode-title span {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -.4px;
}
.iOSPasscode-title small {
    color: #8e8e93;
    font-size: 11px;
}
.iOSPasscode-dots {
    display: flex;
    gap: 10px;
    margin: 23px 0 24px;
}
.iOSPasscode-dots span {
    width: 9px;
    height: 9px;
    border: 1px solid #8e8e93;
    border-radius: 50%;
    background: transparent;
    transition:
        background .16s ease,
        transform .16s ease;
}
.iOSPasscode-dots span:first-child {
    background: #fff;
}
.iOSPasscode-keypad {
    width: 235px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 11px;
}
.iOSPasscode-keypad button {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    background:
        linear-gradient(
            145deg,
            #363638,
            #242426
        );
    color: #fff;
    box-shadow:
        inset 0 1px rgba(255,255,255,.08),
        0 4px 10px rgba(0,0,0,.22);
    cursor: pointer;
    transition:
        transform .12s ease,
        background .12s ease,
        box-shadow .12s ease;
}
.iOSPasscode-keypad button:hover {
    background:
        linear-gradient(
            145deg,
            #464649,
            #2f2f31
        );
    box-shadow:
        inset 0 1px rgba(255,255,255,.12),
        0 7px 15px rgba(0,0,0,.3);
    transform: translateY(-1px);
}
.iOSPasscode-keypad button:active {
    transform: scale(.93);
    background: #5a5a5e;
    box-shadow:
        inset 0 2px 5px rgba(0,0,0,.35),
        0 2px 5px rgba(0,0,0,.2);
}
.iOSPasscode-keypad button strong {
    font-size: 25px;
    font-weight: 400;
    line-height: 1;
}
.iOSPasscode-keypad button span {
    margin-top: 3px;
    color: #d1d1d6;
    font-size: 7px;
    font-weight: 700;
    letter-spacing: 1px;
}
.iOSPasscode-empty {
    background: transparent !important;
    box-shadow: none !important;
    cursor: default !important;
}
.iOSPasscode-empty:hover,
.iOSPasscode-empty:active {
    transform: none !important;
}
.iOSPasscode-delete {
    background: transparent !important;
    box-shadow: none !important;
    color: #fff;
}
.iOSPasscode-delete:hover {
    background: rgba(255,255,255,.08) !important;
}
.iOSPasscode-delete i {
    font-size: 22px;
}
.iOSPasscode-cancel {
    margin-top: 19px;
    border: 0;
    background: transparent;
    color: #0a84ff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition:
        opacity .15s ease,
        transform .15s ease;
}
.iOSPasscode-cancel:hover {
    opacity: .72;
}
.iOSPasscode-cancel:active {
    transform: scale(.96);
}`,
  },
  {
    id: 2198,
    name: "iOS Settings Toggle",
    preview: (
      <div className="iphone-ios-2198">
        <div className="iphone-ios-2198__row">
          <div className="iphone-ios-2198__icon">
            <i className="fa-solid fa-wifi"></i>
          </div>
          <div className="iphone-ios-2198__text">
            <strong>Wi-Fi</strong>
            <span>Home Network</span>
          </div>
          <button className="iphone-ios-2198__toggle">
            <span></span>
          </button>
        </div>
        <div className="iphone-ios-2198__divider"></div>
        <div className="iphone-ios-2198__row">
          <div className="iphone-ios-2198__icon iphone-ios-2198__icon--blue">
            <i className="fa-brands fa-bluetooth-b"></i>
          </div>
          <div className="iphone-ios-2198__text">
            <strong>Bluetooth</strong>
            <span>On</span>
          </div>
          <button className="iphone-ios-2198__toggle iphone-ios-2198__toggle--off">
            <span></span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-row">
        <div class="iOSUI-icon">
            <i class="fa-solid fa-wifi"></i>
        </div>
        <div class="iOSUI-text">
            <strong>Wi-Fi</strong>
            <span>Home Network</span>
        </div>
        <button class="iOSUI-toggle">
            <span></span>
        </button>
    </div>
    <div class="iOSUI-divider"></div>
    <div class="iOSUI-row">
        <div class="iOSUI-icon iOSUI-icon--blue">
            <i class="fa-brands fa-bluetooth-b"></i>
        </div>
        <div class="iOSUI-text">
            <strong>Bluetooth</strong>
            <span>On</span>
        </div>
        <button class="iOSUI-toggle iOSUI-toggle--off">
            <span></span>
        </button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 310px;
    padding: 8px 0;
    overflow: hidden;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 12px 35px rgba(0,0,0,.08);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
}
.iOSUI-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #34c759;
    color: #fff;
    font-size: 14px;
}
.iOSUI-icon--blue {
    background: #007aff;
}
.iOSUI-text {
    min-width: 0;
    flex: 1;
}
.iOSUI-text strong,
.iOSUI-text span {
    display: block;
}
.iOSUI-text strong {
    color: #1c1c1e;
    font-size: 13px;
    font-weight: 600;
}
.iOSUI-text span {
    margin-top: 2px;
    color: #8e8e93;
    font-size: 10px;
}
.iOSUI-toggle {
    width: 45px;
    height: 27px;
    position: relative;
    padding: 2px;
    border: 0;
    border-radius: 999px;
    background: #34c759;
    cursor: pointer;
    transition: .18s ease;
}
.iOSUI-toggle span {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
    transition: .18s ease;
}
.iOSUI-toggle:hover {
    filter: brightness(.96);
}
.iOSUI-toggle:active {
    transform: scale(.94);
}
.iOSUI-toggle--off {
    background: #d1d1d6;
}
.iOSUI-toggle--off span {
    right: auto;
    left: 2px;
}
.iOSUI-divider {
    height: 1px;
    margin-left: 62px;
    background: #f2f2f7;
}`,
  },
  {
    id: 2199,
    name: "iOS Music Player",
    preview: (
      <div className="iphone-ios-2199">
        <div className="iphone-ios-2199__cover">
          <i className="fa-solid fa-music"></i>
        </div>
        <div className="iphone-ios-2199__info">
          <strong>Golden Hour</strong>
          <span>JVKE</span>
        </div>
        <div className="iphone-ios-2199__progress">
          <span></span>
        </div>
        <div className="iphone-ios-2199__times">
          <span>1:24</span>
          <span>3:12</span>
        </div>
        <div className="iphone-ios-2199__controls">
          <button>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button className="iphone-ios-2199__play">
            <i className="fa-solid fa-play"></i>
          </button>
          <button>
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-cover">
        <i class="fa-solid fa-music"></i>
    </div>
    <div class="iOSUI-info">
        <strong>Golden Hour</strong>
        <span>JVKE</span>
    </div>
    <div class="iOSUI-progress">
        <span></span>
    </div>
    <div class="iOSUI-times">
        <span>1:24</span>
        <span>3:12</span>
    </div>
    <div class="iOSUI-controls">
        <button><i class="fa-solid fa-backward-step"></i></button>
        <button class="iOSUI-play"><i class="fa-solid fa-play"></i></button>
        <button><i class="fa-solid fa-forward-step"></i></button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 300px;
    padding: 16px;
    border-radius: 23px;
    background: rgba(255,255,255,.86);
    backdrop-filter: blur(20px);
    box-shadow: 0 18px 40px rgba(15,23,42,.1);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-cover {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    margin: 0 auto 14px;
    border-radius: 16px;
    background: linear-gradient(145deg,#111827,#475569);
    color: #fff;
    font-size: 28px;
    box-shadow: 0 9px 20px rgba(15,23,42,.18);
}
.iOSUI-info {
    text-align: center;
}
.iOSUI-info strong,
.iOSUI-info span {
    display: block;
}
.iOSUI-info strong {
    font-size: 14px;
    font-weight: 700;
}
.iOSUI-info span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 11px;
}
.iOSUI-progress {
    height: 4px;
    margin-top: 17px;
    border-radius: 999px;
    background: #d1d1d6;
}
.iOSUI-progress span {
    display: block;
    width: 43%;
    height: 100%;
    border-radius: inherit;
    background: #1c1c1e;
}
.iOSUI-times {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    color: #8e8e93;
    font-size: 8px;
}
.iOSUI-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 15px;
}
.iOSUI-controls button {
    border: 0;
    background: transparent;
    color: #1c1c1e;
    font-size: 17px;
    cursor: pointer;
}
.iOSUI-play {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #1c1c1e !important;
    color: #fff !important;
}`,
  },
  {
    id: 2200,
    name: "iOS Weather Card",
    preview: (
      <div className="iphone-ios-2200">
        <div className="iphone-ios-2200__city">AMSTERDAM</div>
        <div className="iphone-ios-2200__temp">18°</div>
        <div className="iphone-ios-2200__condition">
          <i className="fa-solid fa-cloud-sun"></i>
          Partly Cloudy
        </div>
        <div className="iphone-ios-2200__range">
          H 20° <span>•</span> L 12°
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-city">AMSTERDAM</div>
    <div class="iOSUI-temp">18°</div>
    <div class="iOSUI-condition">
        <i class="fa-solid fa-cloud-sun"></i>
        Partly Cloudy
    </div>
    <div class="iOSUI-range">
        H 20° <span>•</span> L 12°
    </div>
</div>`,
    css: `.iOSUI {
    width: 265px;
    padding: 22px;
    border-radius: 23px;
    background: linear-gradient(145deg,#38bdf8,#2563eb);
    color: #fff;
    box-shadow: 0 20px 45px rgba(37,99,235,.25);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-city {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .8px;
    opacity: .85;
}
.iOSUI-temp {
    margin-top: 4px;
    font-size: 58px;
    line-height: 1;
    font-weight: 300;
}
.iOSUI-condition {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 8px;
    font-size: 12px;
}
.iOSUI-condition i {
    font-size: 16px;
}
.iOSUI-range {
    margin-top: 9px;
    color: rgba(255,255,255,.8);
    font-size: 10px;
}
.iOSUI-range span {
    margin: 0 5px;
}`,
  },
  {
    id: 2201,
    name: "iOS Battery Widget",
    preview: (
      <div className="iphone-ios-2201">
        <div className="iphone-ios-2201__top">
          <strong>Battery</strong>
          <i className="fa-solid fa-battery-three-quarters"></i>
        </div>
        <div className="iphone-ios-2201__percent">82%</div>
        <div className="iphone-ios-2201__bar">
          <span></span>
        </div>
        <div className="iphone-ios-2201__status">
          <span>Last Charged</span>
          <strong>Today, 09:42</strong>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-top">
        <strong>Battery</strong>
        <i class="fa-solid fa-battery-three-quarters"></i>
    </div>
    <div class="iOSUI-percent">82%</div>
    <div class="iOSUI-bar">
        <span></span>
    </div>
    <div class="iOSUI-status">
        <span>Last Charged</span>
        <strong>Today, 09:42</strong>
    </div>
</div>`,
    css: `.iOSUI {
    width: 285px;
    padding: 18px;
    border-radius: 21px;
    background: #1c1c1e;
    color: #fff;
    box-shadow: 0 18px 40px rgba(0,0,0,.22);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d1d1d6;
    font-size: 12px;
}
.iOSUI-top i {
    color: #34c759;
}
.iOSUI-percent {
    margin-top: 10px;
    font-size: 34px;
    font-weight: 600;
}
.iOSUI-bar {
    height: 10px;
    margin-top: 14px;
    overflow: hidden;
    border-radius: 999px;
    background: #3a3a3c;
}
.iOSUI-bar span {
    display: block;
    width: 82%;
    height: 100%;
    border-radius: inherit;
    background: #34c759;
}
.iOSUI-status {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
}
.iOSUI-status span,
.iOSUI-status strong {
    font-size: 9px;
}
.iOSUI-status span {
    color: #8e8e93;
}
.iOSUI-status strong {
    color: #d1d1d6;
}`,
  },
  {
    id: 2202,
    name: "iOS Wi-Fi Selector",
    preview: (
      <div className="iphone-ios-2202">
        <div className="iphone-ios-2202__header">
          <strong>Wi-Fi</strong>
          <button>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="iphone-ios-2202__network iphone-ios-2202__network--active">
          <i className="fa-solid fa-wifi"></i>
          <div>
            <strong>Home Network</strong>
            <span>Connected</span>
          </div>
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="iphone-ios-2202__network">
          <i className="fa-solid fa-wifi"></i>
          <div>
            <strong>Guest Network</strong>
            <span>Secure</span>
          </div>
        </div>
        <div className="iphone-ios-2202__network">
          <i className="fa-solid fa-wifi"></i>
          <div>
            <strong>Office</strong>
            <span>Secure</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-header">
        <strong>Wi-Fi</strong>
        <button><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="iOSUI-network iOSUI-network--active">
        <i class="fa-solid fa-wifi"></i>
        <div>
            <strong>Home Network</strong>
            <span>Connected</span>
        </div>
        <i class="fa-solid fa-check"></i>
    </div>
    <div class="iOSUI-network">
        <i class="fa-solid fa-wifi"></i>
        <div>
            <strong>Guest Network</strong>
            <span>Secure</span>
        </div>
    </div>
    <div class="iOSUI-network">
        <i class="fa-solid fa-wifi"></i>
        <div>
            <strong>Office</strong>
            <span>Secure</span>
        </div>
    </div>
</div>`,
    css: `.iOSUI {
    width: 300px;
    padding: 16px;
    border-radius: 23px;
    background: rgba(255,255,255,.93);
    box-shadow: 0 20px 45px rgba(15,23,42,.1);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}
.iOSUI-header strong {
    font-size: 16px;
}
.iOSUI-header button {
    width: 28px;
    height: 28px;
    border: 0;
    border-radius: 50%;
    background: #f2f2f7;
    color: #8e8e93;
    cursor: pointer;
}
.iOSUI-network {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 7px;
    border-bottom: 1px solid #f2f2f7;
}
.iOSUI-network > i:first-child {
    width: 20px;
    color: #007aff;
}
.iOSUI-network > div {
    flex: 1;
}
.iOSUI-network strong,
.iOSUI-network span {
    display: block;
}
.iOSUI-network strong {
    color: #1c1c1e;
    font-size: 11px;
}
.iOSUI-network span {
    margin-top: 2px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-network--active > i:last-child {
    color: #34c759;
}`,
  },
  {
    id: 2203,
    name: "iOS Volume Control",
    preview: (
      <div className="iphone-ios-2203">
        <div className="iphone-ios-2203__icon">
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className="iphone-ios-2203__track">
          <span></span>
        </div>
        <strong>72%</strong>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-icon">
        <i class="fa-solid fa-volume-high"></i>
    </div>
    <div class="iOSUI-track">
        <span></span>
    </div>
    <strong>72%</strong>
</div>`,
    css: `.iOSUI {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 11px 13px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 999px;
    background: rgba(28,28,30,.86);
    backdrop-filter: blur(20px);
    color: #fff;
    box-shadow: 0 15px 40px rgba(0,0,0,.2);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-icon {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #3a3a3c;
    color: #fff;
    font-size: 11px;
}
.iOSUI-track {
    flex: 1;
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #48484a;
}
.iOSUI-track span {
    display: block;
    width: 72%;
    height: 100%;
    border-radius: inherit;
    background: #fff;
}
.iOSUI strong {
    color: #d1d1d6;
    font-size: 10px;
    font-weight: 500;
}`,
  },
  {
    id: 2204,
    name: "iOS Action Sheet",
    preview: (
      <div className="iphone-ios-2204">
        <div className="iphone-ios-2204__sheet">
          <div className="iphone-ios-2204__handle"></div>
          <div className="iphone-ios-2204__title">Choose Action</div>
          <button>
            <i className="fa-solid fa-share"></i> Share
          </button>
          <button>
            <i className="fa-solid fa-copy"></i> Copy
          </button>
          <button>
            <i className="fa-solid fa-bookmark"></i> Save
          </button>
          <button className="iphone-ios-2204__cancel">Cancel</button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-sheet">
        <div class="iOSUI-handle"></div>
        <div class="iOSUI-title">Choose Action</div>
        <button><i class="fa-solid fa-share"></i> Share</button>
        <button><i class="fa-solid fa-copy"></i> Copy</button>
        <button><i class="fa-solid fa-bookmark"></i> Save</button>
        <button class="iOSUI-cancel">Cancel</button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 300px;
    padding: 35px 12px 12px;
    border-radius: 25px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    box-shadow: 0 20px 50px rgba(15,23,42,.15);
}
.iOSUI-handle {
    width: 38px;
    height: 5px;
    margin: 0 auto 18px;
    border-radius: 999px;
    background: #c7c7cc;
}
.iOSUI-title {
    margin-bottom: 8px;
    text-align: center;
    color: #8e8e93;
    font-size: 10px;
    font-weight: 600;
}
.iOSUI-sheet button {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 15px;
    margin-top: 5px;
    border: 0;
    border-radius: 13px;
    background: #fff;
    color: #007aff;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
}
.iOSUI-sheet button:hover {
    background: #e5e5ea;
}
.iOSUI-sheet button i {
    width: 18px;
}
.iOSUI-cancel {
    justify-content: center !important;
    margin-top: 10px !important;
    font-weight: 600;
}`,
  },
  {
    id: 2205,
    name: "iOS Contact Card",
    preview: (
      <div className="iphone-ios-2205">
        <div className="iphone-ios-2205__avatar">A</div>
        <strong>André</strong>
        <span>Mobile</span>
        <div className="iphone-ios-2205__actions">
          <button>
            <i className="fa-solid fa-message"></i>
          </button>
          <button>
            <i className="fa-solid fa-phone"></i>
          </button>
          <button>
            <i className="fa-solid fa-video"></i>
          </button>
          <button>
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-avatar">A</div>
    <strong>André</strong>
    <span>Mobile</span>
    <div class="iOSUI-actions">
        <button><i class="fa-solid fa-message"></i></button>
        <button><i class="fa-solid fa-phone"></i></button>
        <button><i class="fa-solid fa-video"></i></button>
        <button><i class="fa-solid fa-envelope"></i></button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 265px;
    padding: 22px;
    border-radius: 23px;
    background: #fff;
    text-align: center;
    box-shadow: 0 16px 38px rgba(15,23,42,.09);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-avatar {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    margin: 0 auto 10px;
    border-radius: 50%;
    background: linear-gradient(145deg,#007aff,#5ac8fa);
    color: #fff;
    font-size: 24px;
    font-weight: 600;
}
.iOSUI > strong,
.iOSUI > span {
    display: block;
}
.iOSUI > strong {
    color: #1c1c1e;
    font-size: 17px;
}
.iOSUI > span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 10px;
}
.iOSUI-actions {
    display: flex;
    justify-content: center;
    gap: 11px;
    margin-top: 18px;
}
.iOSUI-actions button {
    width: 41px;
    height: 41px;
    border: 0;
    border-radius: 50%;
    background: #f2f2f7;
    color: #007aff;
    cursor: pointer;
    transition: .16s ease;
}
.iOSUI-actions button:hover {
    transform: translateY(-2px);
    background: #e5e5ea;
}`,
  },
  {
    id: 2206,
    name: "iOS Face ID Prompt",
    preview: (
      <div className="iphone-ios-2206">
        <div className="iphone-ios-2206__scan">
          <i className="fa-solid fa-face-smile"></i>
        </div>
        <strong>Face ID</strong>
        <span>Look at your iPhone to unlock</span>
        <button>Cancel</button>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-scan">
        <i class="fa-solid fa-face-smile"></i>
    </div>
    <strong>Face ID</strong>
    <span>Look at your iPhone to unlock</span>
    <button>Cancel</button>
</div>`,
    css: `.iOSUI {
    width: 275px;
    padding: 25px;
    border-radius: 24px;
    background: rgba(28,28,30,.92);
    backdrop-filter: blur(20px);
    text-align: center;
    color: #fff;
    box-shadow: 0 20px 50px rgba(0,0,0,.35);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-scan {
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
    margin: 0 auto 14px;
    border: 2px solid #34c759;
    border-radius: 20px;
    color: #34c759;
    font-size: 29px;
    box-shadow: 0 0 20px rgba(52,199,89,.18);
    animation: face-scan 2s ease-in-out infinite;
}
.iOSUI > strong,
.iOSUI > span {
    display: block;
}
.iOSUI > strong {
    font-size: 17px;
}
.iOSUI > span {
    max-width: 190px;
    margin: 6px auto 0;
    color: #a1a1a6;
    font-size: 10px;
    line-height: 1.5;
}
.iOSUI > button {
    margin-top: 18px;
    border: 0;
    background: transparent;
    color: #0a84ff;
    font-size: 12px;
    cursor: pointer;
}
@keyframes face-scan {
    0%,
    100% {
        transform: scale(.96);
        box-shadow: 0 0 12px rgba(52,199,89,.12);
    }
    50% {
        transform: scale(1.04);
        box-shadow: 0 0 24px rgba(52,199,89,.3);
    }
}`,
  },
  {
    id: 2207,
    name: "iOS Notification Banner",
    preview: (
      <div className="iphone-ios-2207">
        <div className="iphone-ios-2207__icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="iphone-ios-2207__content">
          <div>
            <strong>Calendar</strong>
            <span>now</span>
          </div>
          <p>Team meeting starts in 10 minutes.</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-icon">
        <i class="fa-solid fa-bell"></i>
    </div>
    <div class="iOSUI-content">
        <div>
            <strong>Calendar</strong>
            <span>now</span>
        </div>
        <p>Team meeting starts in 10 minutes.</p>
    </div>
    <i class="fa-solid fa-chevron-right"></i>
</div>`,
    css: `.iOSUI {
    width: 320px;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 19px;
    background: rgba(42,42,45,.9);
    backdrop-filter: blur(20px);
    color: #fff;
    box-shadow: 0 16px 35px rgba(0,0,0,.22);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: #ff9500;
    color: #fff;
    font-size: 15px;
}
.iOSUI-content {
    min-width: 0;
    flex: 1;
}
.iOSUI-content > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.iOSUI-content strong {
    font-size: 11px;
}
.iOSUI-content span {
    color: #8e8e93;
    font-size: 8px;
}
.iOSUI-content p {
    margin: 4px 0 0;
    color: #d1d1d6;
    font-size: 10px;
    line-height: 1.4;
}
.iOSUI > i:last-child {
    color: #8e8e93;
    font-size: 9px;
}`,
  },
  {
    id: 2208,
    name: "iOS Spotify Music Player",
    preview: (
      <div className="iphone-spotify-2208">
        <div className="iphone-spotify-2208__status">
          <span>9:41</span>
          <div className="iphone-spotify-2208__status-icons">
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-battery-full"></i>
          </div>
        </div>
        <div className="iphone-spotify-2208__header">
          <button>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <span>NOW PLAYING</span>
          <button>
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <div className="iphone-spotify-2208__art">
          <div className="iphone-spotify-2208__art-glow"></div>
          <div className="iphone-spotify-2208__album">
            <div className="iphone-spotify-2208__album-top">NIGHT</div>
            <div className="iphone-spotify-2208__album-title">DRIVE</div>
            <div className="iphone-spotify-2208__album-subtitle">MIDNIGHT</div>
            <div className="iphone-spotify-2208__album-sun"></div>
            <div className="iphone-spotify-2208__album-road"></div>
          </div>
        </div>
        <div className="iphone-spotify-2208__song">
          <div className="iphone-spotify-2208__song-info">
            <strong>After Dark</strong>
            <span>Mr.Kitty</span>
          </div>
          <button className="iphone-spotify-2208__heart">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
        <div className="iphone-spotify-2208__progress">
          <div className="iphone-spotify-2208__progress-bar">
            <span></span>
          </div>
          <div className="iphone-spotify-2208__times">
            <span>2:14</span>
            <span>4:04</span>
          </div>
        </div>
        <div className="iphone-spotify-2208__controls">
          <button>
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button className="iphone-spotify-2208__play">
            <i className="fa-solid fa-pause"></i>
          </button>
          <button>
            <i className="fa-solid fa-forward-step"></i>
          </button>
          <button>
            <i className="fa-solid fa-repeat"></i>
          </button>
        </div>
        <div className="iphone-spotify-2208__bottom-controls">
          <button>
            <i className="fa-solid fa-list"></i>
          </button>
          <div className="iphone-spotify-2208__device">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>iPhone</span>
          </div>
          <button>
            <i className="fa-solid fa-volume-high"></i>
          </button>
        </div>
        <div className="iphone-spotify-2208__volume">
          <i className="fa-solid fa-volume-low"></i>
          <div className="iphone-spotify-2208__volume-track">
            <span></span>
          </div>
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className="iphone-spotify-2208__gesture"></div>
      </div>
    ),
    html: `<div class="SpotifyPlayer">
    <div class="SpotifyStatus">
        <span>9:41</span>
        <div class="SpotifyStatusIcons">
            <i class="fa-solid fa-signal"></i>
            <i class="fa-solid fa-wifi"></i>
            <i class="fa-solid fa-battery-full"></i>
        </div>
    </div>
    <div class="SpotifyHeader">
        <button>
            <i class="fa-solid fa-chevron-down"></i>
        </button>
        <span>NOW PLAYING</span>
        <button>
            <i class="fa-solid fa-ellipsis"></i>
        </button>
    </div>
    <div class="SpotifyArt">
        <div class="SpotifyArtGlow"></div>
        <div class="SpotifyAlbum">
            <div class="SpotifyAlbumTop">NIGHT</div>
            <div class="SpotifyAlbumTitle">DRIVE</div>
            <div class="SpotifyAlbumSubtitle">MIDNIGHT</div>
            <div class="SpotifyAlbumSun"></div>
            <div class="SpotifyAlbumRoad"></div>
        </div>
    </div>
    <div class="SpotifySong">
        <div class="SpotifySongInfo">
            <strong>After Dark</strong>
            <span>Mr.Kitty</span>
        </div>
        <button class="SpotifyHeart">
            <i class="fa-solid fa-heart"></i>
        </button>
    </div>
    <div class="SpotifyProgress">
        <div class="SpotifyProgressBar">
            <span></span>
        </div>
        <div class="SpotifyTimes">
            <span>2:14</span>
            <span>4:04</span>
        </div>
    </div>
    <div class="SpotifyControls">
        <button>
            <i class="fa-solid fa-shuffle"></i>
        </button>
        <button>
            <i class="fa-solid fa-backward-step"></i>
        </button>
        <button class="SpotifyPlay">
            <i class="fa-solid fa-pause"></i>
        </button>
        <button>
            <i class="fa-solid fa-forward-step"></i>
        </button>
        <button>
            <i class="fa-solid fa-repeat"></i>
        </button>
    </div>
    <div class="SpotifyBottomControls">
        <button>
            <i class="fa-solid fa-list"></i>
        </button>
        <div class="SpotifyDevice">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>iPhone</span>
        </div>
        <button>
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="SpotifyVolume">
        <i class="fa-solid fa-volume-low"></i>
        <div class="SpotifyVolumeTrack">
            <span></span>
        </div>
        <i class="fa-solid fa-volume-high"></i>
    </div>
    <div class="SpotifyGesture"></div>
</div>`,
    css: `.SpotifyPlayer {
    position: relative;
    width: 330px;
    min-height: 640px;
    overflow: hidden;
    padding: 12px 20px 20px;
    border: 7px solid #111113;
    border-radius: 42px;
    background:
        radial-gradient(
            circle at 50% 22%,
            rgba(30,215,96,.12),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #171717 0%,
            #0d0d0d 48%,
            #080808 100%
        );
    box-shadow:
        inset 0 0 0 1px rgba(255,255,255,.07),
        0 28px 80px rgba(0,0,0,.32);
    color: #fff;
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "SF Pro Display",
        "SF Pro Text",
        sans-serif;
}
.SpotifyPlayer::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% 22%,rgba(255,255,255,.035),transparent 1.5%),
        radial-gradient(circle at 85% 18%,rgba(255,255,255,.025),transparent 1.5%),
        radial-gradient(circle at 23% 52%,rgba(255,255,255,.03),transparent 1.2%),
        radial-gradient(circle at 76% 58%,rgba(255,255,255,.025),transparent 1.2%),
        radial-gradient(circle at 40% 88%,rgba(255,255,255,.025),transparent 1.2%);
    pointer-events: none;
}
.SpotifyStatus {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 3px 10px;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}
.SpotifyStatusIcons {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 8px;
}
.SpotifyHeader {
    position: relative;
    z-index: 4;
    display: grid;
    grid-template-columns: 38px 1fr 38px;
    align-items: center;
    gap: 8px;
    margin-top: 3px;
}
.SpotifyHeader > span {
    text-align: center;
    color: #b3b3b3;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.5px;
}
.SpotifyHeader button {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: rgba(255,255,255,.06);
    color: #fff;
    font-size: 11px;
    cursor: pointer;
    transition:
        background .18s ease,
        transform .18s ease;
}
.SpotifyHeader button:hover {
    background: rgba(255,255,255,.12);
    transform: scale(1.04);
}
.SpotifyHeader button:active {
    transform: scale(.9);
}
.SpotifyArt {
    position: relative;
    width: 252px;
    height: 252px;
    display: grid;
    place-items: center;
    margin: 32px auto 25px;
}
.SpotifyArtGlow {
    position: absolute;
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            rgba(30,215,96,.38),
            rgba(34,197,94,.13) 42%,
            transparent 72%
        );
    filter: blur(24px);
    animation: spotify-art-glow 3.5s ease-in-out infinite;
}
.SpotifyAlbum {
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;
    border-radius: 7px;
    background:
        linear-gradient(
            180deg,
            #191919 0%,
            #25190f 40%,
            #b14e19 63%,
            #261008 100%
        );
    box-shadow:
        0 25px 45px rgba(0,0,0,.45),
        0 0 35px rgba(30,215,96,.1);
}
.SpotifyAlbum::before {
    content: "";
    position: absolute;
    width: 130px;
    height: 130px;
    top: 37px;
    left: 48px;
    border-radius: 50%;
    background:
        radial-gradient(
            circle at 36% 34%,
            #ffdca8 0%,
            #ff9f43 22%,
            #d94f27 46%,
            #591f12 74%,
            transparent 75%
        );
    filter: blur(1px);
}
.SpotifyAlbum::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 85px;
    background:
        linear-gradient(
            150deg,
            transparent 28%,
            rgba(0,0,0,.75) 29%,
            rgba(0,0,0,.85) 42%,
            transparent 43%
        ),
        linear-gradient(
            30deg,
            transparent 30%,
            rgba(0,0,0,.65) 31%,
            rgba(0,0,0,.8) 46%,
            transparent 47%
        );
}
.SpotifyAlbumTop {
    position: absolute;
    top: 14px;
    left: 15px;
    z-index: 3;
    color: #f5f5f5;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 3px;
}
.SpotifyAlbumTitle {
    position: absolute;
    top: 25px;
    right: 12px;
    z-index: 3;
    color: #fff;
    font-size: 22px;
    font-weight: 950;
    letter-spacing: -1px;
}
.SpotifyAlbumSubtitle {
    position: absolute;
    top: 52px;
    right: 14px;
    z-index: 3;
    color: rgba(255,255,255,.72);
    font-size: 6px;
    font-weight: 700;
    letter-spacing: 2px;
}
.SpotifyAlbumSun {
    position: absolute;
    width: 86px;
    height: 86px;
    left: 67px;
    top: 57px;
    z-index: 2;
    border-radius: 50%;
    background:
        radial-gradient(
            circle,
            #ffdf9e,
            #ff984d 55%,
            #dc4a24 100%
        );
    box-shadow:
        0 0 20px rgba(255,148,76,.38),
        0 0 45px rgba(255,111,54,.16);
}
.SpotifyAlbumRoad {
    position: absolute;
    width: 105px;
    height: 60px;
    left: 57px;
    bottom: -3px;
    z-index: 3;
    border-radius: 50% 50% 0 0;
    background:
        linear-gradient(
            90deg,
            #17100c 0%,
            #28180f 49%,
            #17100c 100%
        );
    transform: perspective(90px) rotateX(28deg);
    box-shadow: 0 -20px 25px rgba(0,0,0,.25);
}
.SpotifyRoad::after {
    content: "";
}
.SpotifySong {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}
.SpotifySongInfo {
    min-width: 0;
    flex: 1;
}
.SpotifySongInfo strong,
.SpotifySongInfo span {
    display: block;
}
.SpotifySongInfo strong {
    overflow: hidden;
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.SpotifySongInfo span {
    margin-top: 4px;
    color: #b3b3b3;
    font-size: 12px;
}
.SpotifyHeart {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border: 0;
    background: transparent;
    color: #1ed760;
    font-size: 17px;
    cursor: pointer;
    transition:
        transform .18s ease,
        color .18s ease;
}
.SpotifyHeart:hover {
    transform: scale(1.15);
    color: #25e06a;
}
.SpotifyHeart:active {
    transform: scale(.86);
}
.SpotifyProgress {
    position: relative;
    z-index: 4;
    margin-top: 22px;
}
.SpotifyProgressBar {
    width: 100%;
    height: 4px;
    overflow: hidden;
    border-radius: 999px;
    background: #4d4d4d;
}
.SpotifyProgressBar span {
    display: block;
    width: 54%;
    height: 100%;
    border-radius: inherit;
    background: #fff;
    position: relative;
}
.SpotifyProgressBar span::after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    top: 50%;
    right: -4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 8px rgba(255,255,255,.25);
}
.SpotifyTimes {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    color: #8b8b8b;
    font-size: 9px;
}
.SpotifyControls {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
}
.SpotifyControls button {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition:
        transform .16s ease,
        color .16s ease;
}
.SpotifyControls button:hover {
    transform: scale(1.14);
}
.SpotifyControls button:active {
    transform: scale(.85);
}
.SpotifyControls button:first-child,
.SpotifyControls button:last-child {
    color: #1ed760;
    font-size: 12px;
}
.SpotifyPlay {
    width: 58px !important;
    height: 58px !important;
    border-radius: 50% !important;
    background: #fff !important;
    color: #000 !important;
    font-size: 18px !important;
    box-shadow:
        0 8px 18px rgba(0,0,0,.25),
        0 0 0 1px rgba(255,255,255,.1);
}
.SpotifyPlay:hover {
    transform: scale(1.06) !important;
}
.SpotifyBottomControls {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 21px;
}
.SpotifyBottomControls > button {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 0;
    background: transparent;
    color: #b3b3b3;
    font-size: 12px;
    cursor: pointer;
}
.SpotifyBottomControls > button:hover {
    color: #fff;
}
.SpotifyDevice {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #1ed760;
}
.SpotifyDevice i {
    font-size: 10px;
}
.SpotifyDevice span {
    font-size: 9px;
    font-weight: 600;
}
.SpotifyVolume {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 9px;
    color: #8b8b8b;
    font-size: 8px;
}
.SpotifyVolumeTrack {
    flex: 1;
    height: 3px;
    overflow: hidden;
    border-radius: 999px;
    background: #454545;
}
.SpotifyVolumeTrack span {
    display: block;
    width: 67%;
    height: 100%;
    border-radius: inherit;
    background: #b3b3b3;
}
.SpotifyGesture {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 90px;
    height: 4px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: rgba(255,255,255,.85);
}
@keyframes spotify-art-glow {
    0%,
    100% {
        transform: scale(.88);
        opacity: .5;
    }
    50% {
        transform: scale(1.08);
        opacity: .9;
    }
}`,
  },
  {
    id: 2209,
    name: "iOS iMessage Conversation",
    preview: (
      <div className="iphone-ios-2209">
        <div className="iphone-ios-2209__header">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="iphone-ios-2209__contact">
            <div className="iphone-ios-2209__avatar">M</div>
            <strong>Mom</strong>
          </div>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="iphone-ios-2209__messages">
          <div className="iphone-ios-2209__message iphone-ios-2209__message--received">
            Hey! Are you home?
          </div>
          <div className="iphone-ios-2209__message iphone-ios-2209__message--sent">
            Almost, be there in 10!
          </div>
          <div className="iphone-ios-2209__message iphone-ios-2209__message--received">
            Perfect ❤️
          </div>
        </div>
        <div className="iphone-ios-2209__input">
          <i className="fa-solid fa-plus"></i>
          <span>iMessage</span>
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-header">
        <i class="fa-solid fa-chevron-left"></i>
        <div class="iOSUI-contact">
            <div class="iOSUI-avatar">M</div>
            <strong>Mom</strong>
        </div>
        <i class="fa-solid fa-circle-info"></i>
    </div>
    <div class="iOSUI-messages">
        <div class="iOSUI-message iOSUI-message--received">
            Hey! Are you home?
        </div>
        <div class="iOSUI-message iOSUI-message--sent">
            Almost, be there in 10!
        </div>
        <div class="iOSUI-message iOSUI-message--received">
            Perfect ❤️
        </div>
    </div>
    <div class="iOSUI-input">
        <i class="fa-solid fa-plus"></i>
        <span>iMessage</span>
        <i class="fa-solid fa-microphone"></i>
    </div>
</div>`,
    css: `.iOSUI {
    width: 310px;
    min-height: 280px;
    padding: 14px;
    border-radius: 25px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 2px 12px;
    color: #007aff;
}
.iOSUI-contact {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #1c1c1e;
}
.iOSUI-contact strong {
    font-size: 12px;
}
.iOSUI-avatar {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #d1d1d6;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
}
.iOSUI-messages {
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 16px 8px;
}
.iOSUI-message {
    max-width: 72%;
    padding: 9px 12px;
    border-radius: 16px;
    font-size: 11px;
    line-height: 1.4;
}
.iOSUI-message--received {
    align-self: flex-start;
    background: #e5e5ea;
    color: #1c1c1e;
    border-bottom-left-radius: 5px;
}
.iOSUI-message--sent {
    align-self: flex-end;
    background: #007aff;
    color: #fff;
    border-bottom-right-radius: 5px;
}
.iOSUI-input {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 4px;
    padding: 8px 10px;
    border: 1px solid #c7c7cc;
    border-radius: 19px;
    background: #fff;
    color: #8e8e93;
    font-size: 10px;
}
.iOSUI-input span {
    flex: 1;
}`,
  },
  {
    id: 2210,
    name: "iOS Incoming Call",
    preview: (
      <div className="iphone-ios-2210">
        <div className="iphone-ios-2210__top">
          <span>incoming call</span>
        </div>
        <div className="iphone-ios-2210__avatar">
          <i className="fa-solid fa-user"></i>
        </div>
        <strong>Alex</strong>
        <span className="iphone-ios-2210__number">+31 6 12345678</span>
        <div className="iphone-ios-2210__actions">
          <button className="iphone-ios-2210__decline">
            <i className="fa-solid fa-phone-slash"></i>
          </button>
          <button className="iphone-ios-2210__accept">
            <i className="fa-solid fa-phone"></i>
          </button>
        </div>
        <div className="iphone-ios-2210__labels">
          <span>Decline</span>
          <span>Accept</span>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-top">
        <span>incoming call</span>
    </div>
    <div class="iOSUI-avatar">
        <i class="fa-solid fa-user"></i>
    </div>
    <strong>Alex</strong>
    <span class="iOSUI-number">+31 6 12345678</span>
    <div class="iOSUI-actions">
        <button class="iOSUI-decline">
            <i class="fa-solid fa-phone-slash"></i>
        </button>
        <button class="iOSUI-accept">
            <i class="fa-solid fa-phone"></i>
        </button>
    </div>
    <div class="iOSUI-labels">
        <span>Decline</span>
        <span>Accept</span>
    </div>
</div>`,
    css: `.iOSUI {
    width: 285px;
    min-height: 325px;
    padding: 22px;
    border-radius: 28px;
    background: linear-gradient(180deg,#202022,#111113);
    color: #fff;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-top {
    color: #8e8e93;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.iOSUI-avatar {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    margin: 27px auto 13px;
    border-radius: 50%;
    background: #3a3a3c;
    color: #d1d1d6;
    font-size: 27px;
}
.iOSUI > strong {
    display: block;
    font-size: 21px;
}
.iOSUI-number {
    display: block;
    margin-top: 5px;
    color: #8e8e93;
    font-size: 10px;
}
.iOSUI-actions {
    display: flex;
    justify-content: center;
    gap: 70px;
    margin-top: 42px;
}
.iOSUI-actions button {
    width: 52px;
    height: 52px;
    border: 0;
    border-radius: 50%;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: transform .15s ease;
}
.iOSUI-actions button:hover {
    transform: scale(1.08);
}
.iOSUI-actions button:active {
    transform: scale(.9);
}
.iOSUI-decline {
    background: #ff3b30;
}
.iOSUI-accept {
    background: #34c759;
}
.iOSUI-labels {
    display: flex;
    justify-content: center;
    gap: 82px;
    margin-top: 9px;
    color: #8e8e93;
    font-size: 9px;
}`,
  },
  {
    id: 2211,
    name: "iOS Alarm Clock",
    preview: (
      <div className="iphone-ios-2211">
        <div className="iphone-ios-2211__header">
          <span>Alarm</span>
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="iphone-ios-2211__time">07:30</div>
        <div className="iphone-ios-2211__days">
          <span className="active">M</span>
          <span className="active">T</span>
          <span className="active">W</span>
          <span className="active">T</span>
          <span className="active">F</span>
          <span>S</span>
          <span>S</span>
        </div>
        <div className="iphone-ios-2211__row">
          <div>
            <strong>Wake Up</strong>
            <span>Every weekday</span>
          </div>
          <button className="iphone-ios-2211__toggle">
            <span></span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-header">
        <span>Alarm</span>
        <i class="fa-solid fa-plus"></i>
    </div>
    <div class="iOSUI-time">07:30</div>
    <div class="iOSUI-days">
        <span class="active">M</span>
        <span class="active">T</span>
        <span class="active">W</span>
        <span class="active">T</span>
        <span class="active">F</span>
        <span>S</span>
        <span>S</span>
    </div>
    <div class="iOSUI-row">
        <div>
            <strong>Wake Up</strong>
            <span>Every weekday</span>
        </div>
        <button class="iOSUI-toggle">
            <span></span>
        </button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 290px;
    padding: 18px;
    border-radius: 23px;
    background: #1c1c1e;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-header {
    display: flex;
    justify-content: space-between;
    color: #ff9f0a;
    font-size: 14px;
    font-weight: 600;
}
.iOSUI-time {
    margin-top: 20px;
    font-size: 49px;
    font-weight: 200;
    letter-spacing: -2px;
}
.iOSUI-days {
    display: flex;
    gap: 9px;
    margin-top: 7px;
}
.iOSUI-days span {
    color: #636366;
    font-size: 8px;
}
.iOSUI-days span.active {
    color: #ff9f0a;
}
.iOSUI-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 15px;
    border-top: 1px solid #38383a;
}
.iOSUI-row strong,
.iOSUI-row span {
    display: block;
}
.iOSUI-row strong {
    font-size: 12px;
}
.iOSUI-row span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-toggle {
    position: relative;
    width: 45px;
    height: 27px;
    border: 0;
    border-radius: 999px;
    background: #34c759;
    cursor: pointer;
}
.iOSUI-toggle span {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,.3);
}`,
  },
  {
    id: 2212,
    name: "iOS AirDrop Sheet",
    preview: (
      <div className="iphone-ios-2212">
        <div className="iphone-ios-2212__handle"></div>
        <div className="iphone-ios-2212__title">
          <span>AirDrop</span>
          <i className="fa-solid fa-wifi"></i>
        </div>
        <div className="iphone-ios-2212__target">
          <div className="iphone-ios-2212__avatar">A</div>
          <strong>André's iPhone</strong>
          <span>Tap to send</span>
        </div>
        <button>
          <i className="fa-solid fa-link"></i>
          Copy Link
        </button>
        <button>
          <i className="fa-solid fa-message"></i>
          Send Message
        </button>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-handle"></div>
    <div class="iOSUI-title">
        <span>AirDrop</span>
        <i class="fa-solid fa-wifi"></i>
    </div>
    <div class="iOSUI-target">
        <div class="iOSUI-avatar">A</div>
        <strong>André's iPhone</strong>
        <span>Tap to send</span>
    </div>
    <button>
        <i class="fa-solid fa-link"></i>
        Copy Link
    </button>
    <button>
        <i class="fa-solid fa-message"></i>
        Send Message
    </button>
</div>`,
    css: `.iOSUI {
    width: 290px;
    padding: 12px 14px 15px;
    border-radius: 25px;
    background: #f2f2f7;
    color: #1c1c1e;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-handle {
    width: 36px;
    height: 4px;
    margin: 2px auto 16px;
    border-radius: 999px;
    background: #c7c7cc;
}
.iOSUI-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
}
.iOSUI-title i {
    color: #007aff;
}
.iOSUI-target {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 19px 0;
}
.iOSUI-avatar {
    width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg,#007aff,#5ac8fa);
    color: #fff;
    font-size: 19px;
    font-weight: 600;
}
.iOSUI-target strong {
    font-size: 12px;
}
.iOSUI-target span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI > button {
    width: 100%;
    height: 43px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
    padding: 0 13px;
    border: 0;
    border-radius: 13px;
    background: #fff;
    color: #007aff;
    font-size: 11px;
    cursor: pointer;
}
.iOSUI > button:hover {
    background: #e5e5ea;
}`,
  },
  {
    id: 2213,
    name: "iOS Timer",
    preview: (
      <div className="iphone-ios-2213">
        <span>Timer</span>
        <div className="iphone-ios-2213__circle">
          <div className="iphone-ios-2213__time">04:59</div>
        </div>
        <div className="iphone-ios-2213__buttons">
          <button className="iphone-ios-2213__cancel">Cancel</button>
          <button className="iphone-ios-2213__pause">
            <i className="fa-solid fa-pause"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <span>Timer</span>
    <div class="iOSUI-circle">
        <div class="iOSUI-time">04:59</div>
    </div>
    <div class="iOSUI-buttons">
        <button class="iOSUI-cancel">Cancel</button>
        <button class="iOSUI-pause">
            <i class="fa-solid fa-pause"></i>
        </button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 270px;
    padding: 20px;
    border-radius: 24px;
    background: #000;
    color: #fff;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI > span {
    color: #8e8e93;
    font-size: 12px;
}
.iOSUI-circle {
    width: 150px;
    height: 150px;
    display: grid;
    place-items: center;
    margin: 18px auto 20px;
    border: 5px solid #ff9f0a;
    border-left-color: #3a3a3c;
    border-radius: 50%;
    box-shadow: inset 0 0 15px rgba(255,159,10,.08);
    transform: rotate(-35deg);
}
.iOSUI-time {
    transform: rotate(35deg);
    font-size: 27px;
    font-variant-numeric: tabular-nums;
}
.iOSUI-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.iOSUI-buttons button {
    border: 0;
    cursor: pointer;
}
.iOSUI-cancel {
    color: #ff9f0a;
    background: transparent;
    font-size: 12px;
}
.iOSUI-pause {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ff9f0a;
    color: #000;
}`,
  },
  {
    id: 2214,
    name: "iOS Maps Route Card",
    preview: (
      <div className="iphone-ios-2214">
        <div className="iphone-ios-2214__map">
          <div className="iphone-ios-2214__road"></div>
          <div className="iphone-ios-2214__route"></div>
          <div className="iphone-ios-2214__pin">
            <i className="fa-solid fa-location-dot"></i>
          </div>
        </div>
        <div className="iphone-ios-2214__route-card">
          <div>
            <strong>Home</strong>
            <span>8 min</span>
          </div>
          <div>
            <strong>2.4 km</strong>
            <span>Fastest route</span>
          </div>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-map">
        <div class="iOSUI-road"></div>
        <div class="iOSUI-route"></div>
        <div class="iOSUI-pin">
            <i class="fa-solid fa-location-dot"></i>
        </div>
    </div>
    <div class="iOSUI-route-card">
        <div>
            <strong>Home</strong>
            <span>8 min</span>
        </div>
        <div>
            <strong>2.4 km</strong>
            <span>Fastest route</span>
        </div>
        <button>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</div>`,
    css: `.iOSUI {
    position: relative;
    width: 310px;
    overflow: hidden;
    border-radius: 23px;
    background: #fff;
    box-shadow: 0 18px 45px rgba(15,23,42,.12);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-map {
    position: relative;
    height: 160px;
    overflow: hidden;
    background:
        linear-gradient(25deg,transparent 30%,#d7e6d2 31%,#d7e6d2 52%,transparent 53%),
        linear-gradient(110deg,transparent 42%,#e2e8f0 43%,#e2e8f0 58%,transparent 59%),
        #eaf2e4;
}
.iOSUI-road {
    position: absolute;
    width: 290px;
    height: 28px;
    left: 15px;
    top: 70px;
    background: #fff;
    transform: rotate(-12deg);
    box-shadow: 0 0 0 1px #d1d1d6;
}
.iOSUI-route {
    position: absolute;
    width: 280px;
    height: 5px;
    left: 14px;
    top: 83px;
    border-radius: 999px;
    background: #007aff;
    transform: rotate(-12deg);
    box-shadow: 0 0 6px rgba(0,122,255,.3);
}
.iOSUI-pin {
    position: absolute;
    right: 50px;
    top: 40px;
    color: #ff3b30;
    font-size: 24px;
}
.iOSUI-route-card {
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 13px;
}
.iOSUI-route-card > div:first-child {
    display: flex;
    flex-direction: column;
}
.iOSUI-route-card > div:nth-child(2) {
    display: flex;
    flex-direction: column;
}
.iOSUI-route-card strong {
    color: #1c1c1e;
    font-size: 12px;
}
.iOSUI-route-card span {
    margin-top: 2px;
    color: #8e8e93;
    font-size: 8px;
}
.iOSUI-route-card button {
    width: 35px;
    height: 35px;
    margin-left: auto;
    border: 0;
    border-radius: 50%;
    background: #007aff;
    color: #fff;
    cursor: pointer;
}`,
  },
  {
    id: 2215,
    name: "iOS App Store Update",
    preview: (
      <div className="iphone-ios-2215">
        <div className="iphone-ios-2215__app">
          <div className="iphone-ios-2215__icon">
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </div>
          <div>
            <strong>Photos</strong>
            <span>Apple</span>
          </div>
        </div>
        <div className="iphone-ios-2215__progress">
          <span></span>
        </div>
        <div className="iphone-ios-2215__bottom">
          <small>Updating...</small>
          <strong>67%</strong>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-app">
        <div class="iOSUI-icon">
            <i class="fa-solid fa-cloud-arrow-down"></i>
        </div>
        <div>
            <strong>Photos</strong>
            <span>Apple</span>
        </div>
    </div>
    <div class="iOSUI-progress">
        <span></span>
    </div>
    <div class="iOSUI-bottom">
        <small>Updating...</small>
        <strong>67%</strong>
    </div>
</div>`,
    css: `.iOSUI {
    width: 295px;
    padding: 16px;
    border-radius: 21px;
    background: #fff;
    box-shadow: 0 15px 38px rgba(15,23,42,.09);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-app {
    display: flex;
    align-items: center;
    gap: 10px;
}
.iOSUI-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: linear-gradient(145deg,#8e8e93,#48484a);
    color: #fff;
    font-size: 18px;
}
.iOSUI-app strong,
.iOSUI-app span {
    display: block;
}
.iOSUI-app strong {
    color: #1c1c1e;
    font-size: 13px;
}
.iOSUI-app span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-progress {
    height: 5px;
    overflow: hidden;
    margin-top: 17px;
    border-radius: 999px;
    background: #e5e5ea;
}
.iOSUI-progress span {
    display: block;
    width: 67%;
    height: 100%;
    border-radius: inherit;
    background: #007aff;
}
.iOSUI-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
}
.iOSUI-bottom small {
    color: #8e8e93;
    font-size: 8px;
}
.iOSUI-bottom strong {
    color: #007aff;
    font-size: 9px;
}`,
  },
  {
    id: 2216,
    name: "iOS Low Battery Alert",
    preview: (
      <div className="iphone-ios-2216">
        <div className="iphone-ios-2216__battery">
          <i className="fa-solid fa-battery-quarter"></i>
        </div>
        <strong>Low Battery</strong>
        <p>10% battery remaining.</p>
        <button>Close</button>
        <button className="iphone-ios-2216__low">Low Power Mode</button>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-battery">
        <i class="fa-solid fa-battery-quarter"></i>
    </div>
    <strong>Low Battery</strong>
    <p>10% battery remaining.</p>
    <button>Close</button>
    <button class="iOSUI-low">Low Power Mode</button>
</div>`,
    css: `.iOSUI {
    width: 275px;
    padding: 22px;
    border-radius: 23px;
    background: rgba(28,28,30,.96);
    color: #fff;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,.3);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-battery {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    margin: 0 auto 11px;
    border-radius: 50%;
    background: rgba(255,59,48,.15);
    color: #ff3b30;
    font-size: 19px;
}
.iOSUI > strong {
    display: block;
    font-size: 16px;
}
.iOSUI > p {
    margin: 6px 0 15px;
    color: #8e8e93;
    font-size: 10px;
}
.iOSUI > button {
    width: 100%;
    height: 38px;
    margin-top: 5px;
    border: 0;
    border-radius: 11px;
    background: #2c2c2e;
    color: #007aff;
    font-size: 11px;
    cursor: pointer;
}
.iOSUI > button:hover {
    background: #3a3a3c;
}
.iOSUI-low {
    background: #ff3b30 !important;
    color: #fff !important;
}`,
  },
  {
    id: 2217,
    name: "iOS Calendar Event",
    preview: (
      <div className="iphone-ios-2217">
        <div className="iphone-ios-2217__date">
          <span>MON</span>
          <strong>31</strong>
        </div>
        <div className="iphone-ios-2217__event">
          <div>
            <strong>Design Meeting</strong>
            <span>10:00 – 11:00</span>
          </div>
          <div className="iphone-ios-2217__dot"></div>
        </div>
        <div className="iphone-ios-2217__location">
          <i className="fa-solid fa-location-dot"></i>
          Studio Room
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-date">
        <span>MON</span>
        <strong>31</strong>
    </div>
    <div class="iOSUI-event">
        <div>
            <strong>Design Meeting</strong>
            <span>10:00 – 11:00</span>
        </div>
        <div class="iOSUI-dot"></div>
    </div>
    <div class="iOSUI-location">
        <i class="fa-solid fa-location-dot"></i>
        Studio Room
    </div>
</div>`,
    css: `.iOSUI {
    width: 295px;
    padding: 15px;
    border-radius: 21px;
    background: #fff;
    box-shadow: 0 14px 35px rgba(15,23,42,.08);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-date {
    display: flex;
    align-items: baseline;
    gap: 8px;
}
.iOSUI-date span {
    color: #ff3b30;
    font-size: 9px;
    font-weight: 700;
}
.iOSUI-date strong {
    color: #1c1c1e;
    font-size: 31px;
    font-weight: 500;
}
.iOSUI-event {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    padding: 12px;
    border-left: 3px solid #007aff;
    border-radius: 8px;
    background: #f2f2f7;
}
.iOSUI-event strong,
.iOSUI-event span {
    display: block;
}
.iOSUI-event strong {
    color: #1c1c1e;
    font-size: 12px;
}
.iOSUI-event span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #007aff;
}
.iOSUI-location {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 10px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-location i {
    color: #ff3b30;
}`,
  },
  {
    id: 2218,
    name: "iOS Safari Tab Card",
    preview: (
      <div className="iphone-ios-2218">
        <div className="iphone-ios-2218__browser">
          <div className="iphone-ios-2218__site">
            <i className="fa-solid fa-lock"></i>
            <span>apple.com</span>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="iphone-ios-2218__preview">
          <div className="iphone-ios-2218__apple">
            <i className="fa-brands fa-apple"></i>
          </div>
          <strong>Apple</strong>
          <span>Think Different.</span>
        </div>
        <div className="iphone-ios-2218__footer">
          <span>1 tab</span>
          <button>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="iOSUI">
    <div class="iOSUI-browser">
        <div class="iOSUI-site">
            <i class="fa-solid fa-lock"></i>
            <span>apple.com</span>
        </div>
        <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="iOSUI-preview">
        <div class="iOSUI-apple">
            <i class="fa-brands fa-apple"></i>
        </div>
        <strong>Apple</strong>
        <span>Think Different.</span>
    </div>
    <div class="iOSUI-footer">
        <span>1 tab</span>
        <button><i class="fa-solid fa-xmark"></i></button>
    </div>
</div>`,
    css: `.iOSUI {
    width: 300px;
    overflow: hidden;
    border-radius: 22px;
    background: #f2f2f7;
    box-shadow: 0 15px 40px rgba(15,23,42,.1);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSUI-browser {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px;
}
.iOSUI-site {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px 11px;
    border-radius: 999px;
    background: #fff;
    color: #1c1c1e;
}
.iOSUI-site i {
    color: #34c759;
    font-size: 8px;
}
.iOSUI-site span {
    font-size: 9px;
}
.iOSUI-browser > i {
    color: #8e8e93;
    font-size: 12px;
}
.iOSUI-preview {
    min-height: 155px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
}
.iOSUI-apple {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
    border-radius: 12px;
    background: #000;
    color: #fff;
    font-size: 24px;
}
.iOSUI-preview > strong {
    color: #1c1c1e;
    font-size: 14px;
}
.iOSUI-preview > span {
    margin-top: 4px;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 13px;
    border-top: 1px solid #e5e5ea;
    color: #8e8e93;
    font-size: 9px;
}
.iOSUI-footer button {
    border: 0;
    background: transparent;
    color: #8e8e93;
    cursor: pointer;
}`,
  },
  {
    id: 2219,
    name: "iOS Primary Button",
    preview: (
      <div className="iphone-button-2219">
        <button>Continue</button>
      </div>
    ),
    html: `<button class="iOSButton">
    Continue
</button>`,
    css: `.iOSButton {
    min-width: 150px;
    height: 44px;
    padding: 0 20px;
    border: 0;
    border-radius: 12px;
    background: #007aff;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform .14s ease,
        background .14s ease;
}
.iOSButton:hover {
    background: #006fe6;
}
.iOSButton:active {
    transform: scale(.97);
    background: #005fc4;
}`,
  },
  {
    id: 2220,
    name: "iOS Destructive Button",
    preview: (
      <div className="iphone-button-2220">
        <button>Delete</button>
      </div>
    ),
    html: `<button class="iOSButton">
    Delete
</button>`,
    css: `.iOSButton {
    min-width: 120px;
    height: 44px;
    padding: 0 20px;
    border: 0;
    border-radius: 12px;
    background: #ff3b30;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform .14s ease,
        background .14s ease;
}
.iOSButton:hover {
    background: #e9342a;
}
.iOSButton:active {
    transform: scale(.97);
    background: #d92d24;
}`,
  },
  {
    id: 2221,
    name: "iOS Text Button",
    preview: (
      <div className="iphone-button-2221">
        <button>Cancel</button>
      </div>
    ),
    html: `<button class="iOSButton">
    Cancel
</button>`,
    css: `.iOSButton {
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #007aff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition:
        background .14s ease,
        color .14s ease;
}
.iOSButton:hover {
    background: rgba(0,122,255,.09);
}
.iOSButton:active {
    background: rgba(0,122,255,.16);
    color: #005ecb;
}`,
  },
  {
    id: 2222,
    name: "iOS Icon Action Button",
    preview: (
      <div className="iphone-button-2222">
        <button>
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </button>
      </div>
    ),
    html: `<button class="iOSButton">
    <i class="fa-solid fa-share"></i>
    <span>Share</span>
</button>`,
    css: `.iOSButton {
    height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 17px;
    border: 0;
    border-radius: 12px;
    background: #f2f2f7;
    color: #007aff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform .14s ease,
        background .14s ease;
}
.iOSButton:hover {
    background: #e5e5ea;
}
.iOSButton:active {
    transform: scale(.96);
    background: #d1d1d6;
}
.iOSButton i {
    font-size: 13px;
}`,
  },
  {
    id: 2223,
    name: "iOS Confirmation Button",
    preview: (
      <div className="iphone-button-2223">
        <button>
          <i className="fa-solid fa-check"></i>
          Done
        </button>
      </div>
    ),
    html: `<button class="iOSButton">
    <i class="fa-solid fa-check"></i>
    Done
</button>`,
    css: `.iOSButton {
    min-width: 125px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 18px;
    border: 0;
    border-radius: 12px;
    background: #34c759;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform .14s ease,
        filter .14s ease;
}
.iOSButton:hover {
    filter: brightness(.94);
}
.iOSButton:active {
    transform: scale(.97);
    filter: brightness(.88);
}
.iOSButton i {
    font-size: 12px;
}`,
  },

  {
    id: 2224,
    name: "iOS Switch",
    preview: (
      <div className="iphone-switch-2224">
        <p>iOS Switch</p>
        <div className="iphone-switch-2224__container">
          <input
            type="checkbox"
            className="iphone-switch-2224__checkbox"
            id="iphone-switch-2224"
          />
          <label
            className="iphone-switch-2224__switch"
            htmlFor="iphone-switch-2224"
          >
            <span className="iphone-switch-2224__slider"></span>
          </label>
        </div>
      </div>
    ),
    html: `<div class="iOSSwitch">
    <p>iOS Switch</p>
    <div class="iOSSwitch-container">
        <input
            type="checkbox"
            class="iOSSwitch-checkbox"
            id="iOSSwitch-checkbox"
        >
        <label
            class="iOSSwitch-switch"
            for="iOSSwitch-checkbox"
        >
            <span class="iOSSwitch-slider"></span>
        </label>
    </div>
</div>`,
    css: `.iOSSwitch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.iOSSwitch p {
    margin: 0;
    color: #1c1c1e;
    font-size: 15px;
    font-weight: 600;
}
.iOSSwitch-container {
    width: 51px;
    height: 31px;
    position: relative;
}
.iOSSwitch-checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}
.iOSSwitch-switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9eb;
    border-radius: 16px;
    cursor: pointer;
    transition: all .2s ease-out;
}
.iOSSwitch-slider {
    width: 27px;
    height: 27px;
    position: absolute;
    left: calc(50% - 13.5px - 10px);
    top: 2px;
    border-radius: 50%;
    background: #fff;
    box-shadow:
        0 3px 8px rgba(0,0,0,.15),
        0 3px 1px rgba(0,0,0,.06);
    transition: all .2s ease-out;
}
.iOSSwitch-checkbox:checked + .iOSSwitch-switch {
    background-color: #34c759;
}
.iOSSwitch-checkbox:checked + .iOSSwitch-switch .iOSSwitch-slider {
    left: calc(50% - 13.5px + 10px);
}
.iOSSwitch-switch:hover {
    filter: brightness(.98);
}
.iOSSwitch-checkbox:active + .iOSSwitch-switch .iOSSwitch-slider {
    transform: scale(.94);
}`,
  },
  {
    id: 2225,
    name: "iOS Elastic Switch",
    preview: (
      <div className="iphone-switch-2225">
        <div className="iphone-switch-2225__parent">
          <input
            type="checkbox"
            className="iphone-switch-2225__checkbox"
            id="iphone-switch-2225-checkbox"
          />
          <label
            className="iphone-switch-2225__switch"
            htmlFor="iphone-switch-2225-checkbox"
          >
            <span className="iphone-switch-2225__slider"></span>
          </label>
        </div>
        <span className="iphone-switch-2225__label">iOS Elastic Switch</span>
      </div>
    ),
    html: `<div class="iOSSwitch">
    <div class="iOSSwitch-parent">
        <input
            type="checkbox"
            class="iOSSwitch-checkbox"
            id="iOSSwitch-checkbox"
        />
        <label
            class="iOSSwitch-switch"
            for="iOSSwitch-checkbox"
        >
            <span class="iOSSwitch-slider"></span>
        </label>
    </div>
</div>`,
    css: `.iOSSwitch {
    display: flex;
    align-items: center;
    justify-content: center;
}
.iOSSwitch-parent {
    width: 51px;
    height: 31px;
    position: relative;
}
.iOSSwitch-checkbox {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
}
.iOSSwitch-switch {
    position: relative;
    width: 51px;
    height: 31px;
    display: block;
    border-radius: 16px;
    background: #e9e9eb;
    cursor: pointer;
    transition: background .2s ease-out;
    box-shadow:
        0 3px 8px rgba(0,0,0,.15),
        0 3px 1px rgba(0,0,0,.06);
}
.iOSSwitch-slider {
    position: absolute;
    top: 2px;
    left: 4px;
    width: 27px;
    height: 27px;
    border-radius: 20px;
    background: #fff;
    box-shadow:
        0 3px 8px rgba(0,0,0,.15),
        0 3px 1px rgba(0,0,0,.06);
    transition:
        width .2s ease-out,
        transform .2s ease-out,
        box-shadow .2s ease-out;
}
.iOSSwitch-parent:active .iOSSwitch-slider {
    width: 37px;
}
.iOSSwitch-checkbox:checked + .iOSSwitch-switch {
    background: #34c759;
}
.iOSSwitch-checkbox:checked + .iOSSwitch-switch .iOSSwitch-slider {
    transform: translateX(16px);
}
.iOSSwitch-checkbox:checked + .iOSSwitch-switch:active .iOSSwitch-slider {
    width: 37px;
    transform: translateX(6px);
}`,
  },
  {
    id: 2226,
    name: "iOS Blue Green Toggle",
    preview: (
      <div className="iphone-toggle-2226">
        <div className="iphone-toggle-2226__switch">
          <input
            type="checkbox"
            className="iphone-toggle-2226__input"
            id="iphone-toggle-2226"
          />
          <label
            className="iphone-toggle-2226__label"
            htmlFor="iphone-toggle-2226"
          ></label>
        </div>
      </div>
    ),
    html: `<div class="ToggleSwitch">
    <input
        class="ToggleSwitch-input"
        id="ToggleSwitch-input"
        type="checkbox"
    >
    <label
        class="ToggleSwitch-label"
        for="ToggleSwitch-input"
    ></label>
</div>`,
    css: `.ToggleSwitch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
}
.ToggleSwitch-input {
    display: none;
}
.ToggleSwitch-label {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 24px;
    border-radius: 34px;
    background: #2196f3;
    cursor: pointer;
    transition: background-color .3s ease;
}
.ToggleSwitch-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    transition: transform .3s ease;
}
.ToggleSwitch-input:checked + .ToggleSwitch-label {
    background: #4caf50;
}
.ToggleSwitch-input:checked + .ToggleSwitch-label::before {
    transform: translateX(16px);
}
.ToggleSwitch-label:hover::before {
    box-shadow: 0 2px 7px rgba(0,0,0,.35);
}
.ToggleSwitch-input:active + .ToggleSwitch-label::before {
    transform: scale(.94);
}
.ToggleSwitch-input:checked:active + .ToggleSwitch-label::before {
    transform: translateX(16px) scale(.94);
}`,
  },
  {
    id: 2227,
    name: "Apple Lock Screen",
    preview: (
      <div className="iphone-ui-2227">
        <div className="iphone-ui-2227__top">
          <span>Tuesday, September 1</span>
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="iphone-ui-2227__time">9:41</div>
        <div className="iphone-ui-2227__date">Good evening, André</div>
        <div className="iphone-ui-2227__bottom">
          <button>
            <i className="fa-solid fa-flashlight"></i>
          </button>
          <button>
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>
        <div className="iphone-ui-2227__gesture"></div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-top">
        <span>Tuesday, September 1</span>
        <i class="fa-solid fa-lock"></i>
    </div>
    <div class="AppleUI-time">9:41</div>
    <div class="AppleUI-date">Good evening, André</div>
    <div class="AppleUI-bottom">
        <button><i class="fa-solid fa-flashlight"></i></button>
        <button><i class="fa-solid fa-camera"></i></button>
    </div>
    <div class="AppleUI-gesture"></div>
</div>`,
    css: `.AppleUI {
    position: relative;
    width: 300px;
    height: 430px;
    overflow: hidden;
    border: 7px solid #111113;
    border-radius: 38px;
    background:
        radial-gradient(circle at 50% 15%,rgba(59,130,246,.24),transparent 26%),
        linear-gradient(180deg,#172554 0%,#0f172a 48%,#020617 100%);
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-top: 18px;
    color: rgba(255,255,255,.9);
    font-size: 10px;
}
.AppleUI-top i {
    font-size: 7px;
}
.AppleUI-time {
    margin-top: 55px;
    text-align: center;
    font-size: 70px;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -3px;
}
.AppleUI-date {
    margin-top: 12px;
    text-align: center;
    color: rgba(255,255,255,.7);
    font-size: 12px;
}
.AppleUI-bottom {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.AppleUI-bottom button {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: rgba(0,0,0,.32);
    color: #fff;
    backdrop-filter: blur(12px);
    cursor: pointer;
}
.AppleUI-bottom button:hover {
    background: rgba(255,255,255,.14);
}
.AppleUI-gesture {
    position: absolute;
    left: 50%;
    bottom: 9px;
    width: 86px;
    height: 4px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: rgba(255,255,255,.9);
}`,
  },
  {
    id: 2228,
    name: "Apple Pay Card",
    preview: (
      <div className="iphone-ui-2228">
        <div className="iphone-ui-2228__title">Apple Pay</div>
        <div className="iphone-ui-2228__card">
          <div className="iphone-ui-2228__brand">
            <i className="fa-brands fa-apple"></i>
            Pay
          </div>
          <span>ANDRE</span>
          <strong>•••• 4821</strong>
          <div className="iphone-ui-2228__network">VISA</div>
        </div>
        <div className="iphone-ui-2228__confirm">
          <i className="fa-solid fa-face-smile"></i>
          <span>Confirm with Face ID</span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-title">Apple Pay</div>
    <div class="AppleUI-card">
        <div class="AppleUI-brand">
            <i class="fa-brands fa-apple"></i>
            Pay
        </div>
        <span>ANDRE</span>
        <strong>•••• 4821</strong>
        <div class="AppleUI-network">VISA</div>
    </div>
    <div class="AppleUI-confirm">
        <i class="fa-solid fa-face-smile"></i>
        <span>Confirm with Face ID</span>
    </div>
</div>`,
    css: `.AppleUI {
    width: 295px;
    padding: 19px;
    border-radius: 26px;
    background: #f2f2f7;
    color: #1c1c1e;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-title {
    margin-bottom: 16px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
}
.AppleUI-card {
    position: relative;
    min-height: 150px;
    padding: 18px;
    overflow: hidden;
    border-radius: 20px;
    background:
        radial-gradient(circle at 85% 20%,rgba(255,255,255,.32),transparent 24%),
        linear-gradient(135deg,#0f172a,#334155 48%,#0f172a);
    color: #fff;
    box-shadow:
        0 15px 30px rgba(15,23,42,.18),
        inset 0 1px rgba(255,255,255,.15);
}
.AppleUI-brand {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 600;
}
.AppleUI-card > span {
    position: absolute;
    left: 18px;
    bottom: 36px;
    font-size: 9px;
    letter-spacing: 2px;
    opacity: .72;
}
.AppleUI-card > strong {
    position: absolute;
    left: 18px;
    bottom: 17px;
    font-size: 13px;
    letter-spacing: 1.5px;
}
.AppleUI-network {
    position: absolute;
    right: 16px;
    bottom: 16px;
    font-size: 10px;
    font-style: italic;
    font-weight: 800;
}
.AppleUI-confirm {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
    color: #007aff;
    font-size: 11px;
}`,
  },
  {
    id: 2229,
    name: "Siri Listening",
    preview: (
      <div className="iphone-ui-2229">
        <div className="iphone-ui-2229__orb"></div>
        <strong>What can I help you with?</strong>
        <div className="iphone-ui-2229__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="iphone-ui-2229__hint">Try saying “Hey Siri”</div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-orb"></div>
    <strong>What can I help you with?</strong>
    <div class="AppleUI-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="AppleUI-hint">
        Try saying “Hey Siri”
    </div>
</div>`,
    css: `.AppleUI {
    width: 300px;
    min-height: 255px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 25px;
    background: #000;
    color: #fff;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-orb {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 30% 25%,#fff,transparent 18%),
        radial-gradient(circle at 65% 55%,#60a5fa,transparent 30%),
        radial-gradient(circle at 50% 50%,#a855f7,#ec4899 65%,#22d3ee);
    filter: blur(.2px);
    box-shadow:
        0 0 25px rgba(139,92,246,.55),
        0 0 45px rgba(34,211,238,.22);
    animation: siri-pulse 2.3s ease-in-out infinite;
}
.AppleUI > strong {
    margin-top: 20px;
    font-size: 15px;
}
.AppleUI-bars {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 23px;
    margin-top: 15px;
}
.AppleUI-bars span {
    width: 4px;
    border-radius: 999px;
    background: linear-gradient(180deg,#22d3ee,#8b5cf6,#ec4899);
    animation: siri-bars 1s ease-in-out infinite alternate;
}
.AppleUI-bars span:nth-child(1) {
    height: 8px;
}
.AppleUI-bars span:nth-child(2) {
    height: 17px;
    animation-delay: -.2s;
}
.AppleUI-bars span:nth-child(3) {
    height: 23px;
    animation-delay: -.4s;
}
.AppleUI-bars span:nth-child(4) {
    height: 15px;
    animation-delay: -.6s;
}
.AppleUI-bars span:nth-child(5) {
    height: 7px;
    animation-delay: -.8s;
}
.AppleUI-hint {
    margin-top: 14px;
    color: #8e8e93;
    font-size: 10px;
}
@keyframes siri-pulse {
    0%,100% {
        transform: scale(.94);
    }
    50% {
        transform: scale(1.06);
    }
}
@keyframes siri-bars {
    to {
        transform: scaleY(.55);
        opacity: .6;
    }
}`,
  },
  {
    id: 2230,
    name: "iOS Focus Mode",
    preview: (
      <div className="iphone-ui-2230">
        <div className="iphone-ui-2230__icon">
          <i className="fa-solid fa-moon"></i>
        </div>
        <strong>Focus</strong>
        <span>Personal</span>
        <button>Turn Off</button>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-icon">
        <i class="fa-solid fa-moon"></i>
    </div>
    <strong>Focus</strong>
    <span>Personal</span>
    <button>Turn Off</button>
</div>`,
    css: `.AppleUI {
    width: 230px;
    padding: 19px;
    border-radius: 23px;
    background: #1c1c1e;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #5856d6;
    color: #fff;
    font-size: 19px;
}
.AppleUI > strong,
.AppleUI > span {
    display: block;
}
.AppleUI > strong {
    margin-top: 13px;
    font-size: 16px;
}
.AppleUI > span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 10px;
}
.AppleUI > button {
    width: 100%;
    height: 36px;
    margin-top: 17px;
    border: 0;
    border-radius: 10px;
    background: #2c2c2e;
    color: #0a84ff;
    font-size: 11px;
    cursor: pointer;
}
.AppleUI > button:hover {
    background: #3a3a3c;
}`,
  },
  {
    id: 2231,
    name: "AirPods Battery Popup",
    preview: (
      <div className="iphone-ui-2231">
        <div className="iphone-ui-2231__header">
          <strong>AirPods Pro</strong>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="iphone-ui-2231__pods">
          <div>
            <i className="fa-solid fa-headphones"></i>
            <span>92%</span>
          </div>
          <div>
            <i className="fa-solid fa-box"></i>
            <span>78%</span>
          </div>
        </div>
        <div className="iphone-ui-2231__battery">
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-header">
        <strong>AirPods Pro</strong>
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="AppleUI-pods">
        <div>
            <i class="fa-solid fa-headphones"></i>
            <span>92%</span>
        </div>
        <div>
            <i class="fa-solid fa-box"></i>
            <span>78%</span>
        </div>
    </div>
    <div class="AppleUI-battery">
        <span></span>
    </div>
</div>`,
    css: `.AppleUI {
    width: 285px;
    padding: 16px;
    border-radius: 21px;
    background: rgba(28,28,30,.95);
    color: #fff;
    box-shadow: 0 20px 45px rgba(0,0,0,.22);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.AppleUI-header strong {
    font-size: 13px;
}
.AppleUI-header i {
    color: #8e8e93;
    font-size: 10px;
}
.AppleUI-pods {
    display: flex;
    justify-content: space-around;
    margin-top: 18px;
}
.AppleUI-pods div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.AppleUI-pods i {
    color: #d1d1d6;
    font-size: 28px;
}
.AppleUI-pods span {
    color: #34c759;
    font-size: 11px;
    font-weight: 600;
}
.AppleUI-battery {
    height: 7px;
    margin-top: 18px;
    overflow: hidden;
    border-radius: 999px;
    background: #3a3a3c;
}
.AppleUI-battery span {
    display: block;
    width: 84%;
    height: 100%;
    border-radius: inherit;
    background: #34c759;
}`,
  },
  {
    id: 2232,
    name: "iOS App Download",
    preview: (
      <div className="iphone-ui-2232">
        <div className="iphone-ui-2232__app">
          <div className="iphone-ui-2232__icon">
            <i className="fa-solid fa-camera"></i>
          </div>
          <div>
            <strong>Camera</strong>
            <span>Apple</span>
          </div>
          <button>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <div className="iphone-ui-2232__progress">
          <span></span>
        </div>
        <div className="iphone-ui-2232__status">
          <span>Installing...</span>
          <span>64%</span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-app">
        <div class="AppleUI-icon">
            <i class="fa-solid fa-camera"></i>
        </div>
        <div>
            <strong>Camera</strong>
            <span>Apple</span>
        </div>
        <button>
            <i class="fa-solid fa-arrow-down"></i>
        </button>
    </div>
    <div class="AppleUI-progress">
        <span></span>
    </div>
    <div class="AppleUI-status">
        <span>Installing...</span>
        <span>64%</span>
    </div>
</div>`,
    css: `.AppleUI {
    width: 305px;
    padding: 16px;
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 15px 38px rgba(15,23,42,.08);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-app {
    display: flex;
    align-items: center;
    gap: 10px;
}
.AppleUI-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: linear-gradient(145deg,#94a3b8,#475569);
    color: #fff;
    font-size: 18px;
}
.AppleUI-app > div:nth-child(2) {
    flex: 1;
}
.AppleUI-app strong,
.AppleUI-app span {
    display: block;
}
.AppleUI-app strong {
    color: #1c1c1e;
    font-size: 13px;
}
.AppleUI-app span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-app button {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 50%;
    background: #e5e5ea;
    color: #007aff;
    cursor: pointer;
}
.AppleUI-progress {
    height: 5px;
    margin-top: 16px;
    overflow: hidden;
    border-radius: 999px;
    background: #e5e5ea;
}
.AppleUI-progress span {
    display: block;
    width: 64%;
    height: 100%;
    border-radius: inherit;
    background: #007aff;
}
.AppleUI-status {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    color: #8e8e93;
    font-size: 8px;
}`,
  },
  {
    id: 2233,
    name: "iOS Wallet Pass",
    preview: (
      <div className="iphone-ui-2233">
        <div className="iphone-ui-2233__pass">
          <div className="iphone-ui-2233__brand">
            <i className="fa-brands fa-apple"></i>
            Wallet
          </div>
          <strong>DEPARTURE</strong>
          <div className="iphone-ui-2233__route">
            <span>AMS</span>
            <i className="fa-solid fa-plane"></i>
            <span>LON</span>
          </div>
          <div className="iphone-ui-2233__details">
            <span>Gate B12</span>
            <span>09:40</span>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-barcode"></i>
          Show Pass
        </button>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-pass">
        <div class="AppleUI-brand">
            <i class="fa-brands fa-apple"></i>
            Wallet
        </div>
        <strong>DEPARTURE</strong>
        <div class="AppleUI-route">
            <span>AMS</span>
            <i class="fa-solid fa-plane"></i>
            <span>LON</span>
        </div>
        <div class="AppleUI-details">
            <span>Gate B12</span>
            <span>09:40</span>
        </div>
    </div>
    <button>
        <i class="fa-solid fa-barcode"></i>
        Show Pass
    </button>
</div>`,
    css: `.AppleUI {
    width: 295px;
    padding: 13px;
    border-radius: 23px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-pass {
    padding: 17px;
    border-radius: 18px;
    background: linear-gradient(135deg,#111827,#1e3a8a);
    color: #fff;
    box-shadow: 0 12px 25px rgba(30,58,138,.2);
}
.AppleUI-brand {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 600;
}
.AppleUI-pass > strong {
    display: block;
    margin-top: 18px;
    color: #93c5fd;
    font-size: 8px;
    letter-spacing: 1.5px;
}
.AppleUI-route {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}
.AppleUI-route span {
    font-size: 27px;
    font-weight: 700;
}
.AppleUI-route i {
    color: #60a5fa;
}
.AppleUI-details {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    color: #bfdbfe;
    font-size: 9px;
}
.AppleUI > button {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    border: 0;
    border-radius: 12px;
    background: #fff;
    color: #007aff;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}`,
  },
  {
    id: 2234,
    name: "iOS Share Sheet",
    preview: (
      <div className="iphone-ui-2234">
        <div className="iphone-ui-2234__preview">
          <div className="iphone-ui-2234__file">
            <i className="fa-solid fa-image"></i>
          </div>
          <strong>Vacation Photo.jpg</strong>
        </div>
        <div className="iphone-ui-2234__actions">
          <button>
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
          </button>
          <button>
            <i className="fa-solid fa-envelope"></i>
            <span>Mail</span>
          </button>
          <button>
            <i className="fa-solid fa-link"></i>
            <span>Copy</span>
          </button>
          <button>
            <i className="fa-solid fa-ellipsis"></i>
            <span>More</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-preview">
        <div class="AppleUI-file">
            <i class="fa-solid fa-image"></i>
        </div>
        <strong>Vacation Photo.jpg</strong>
    </div>
    <div class="AppleUI-actions">
        <button><i class="fa-solid fa-message"></i><span>Messages</span></button>
        <button><i class="fa-solid fa-envelope"></i><span>Mail</span></button>
        <button><i class="fa-solid fa-link"></i><span>Copy</span></button>
        <button><i class="fa-solid fa-ellipsis"></i><span>More</span></button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 305px;
    padding: 17px;
    border-radius: 24px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-preview {
    display: flex;
    align-items: center;
    gap: 10px;
}
.AppleUI-file {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #e5e5ea;
    color: #007aff;
}
.AppleUI-preview strong {
    color: #1c1c1e;
    font-size: 11px;
}
.AppleUI-actions {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 8px;
    margin-top: 18px;
}
.AppleUI-actions button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    color: #007aff;
    cursor: pointer;
}
.AppleUI-actions button:hover {
    transform: translateY(-2px);
}
.AppleUI-actions i {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    font-size: 13px;
}
.AppleUI-actions span {
    color: #636366;
    font-size: 8px;
}`,
  },
  {
    id: 2235,
    name: "iOS Face ID Success",
    preview: (
      <div className="iphone-ui-2235">
        <div className="iphone-ui-2235__face">
          <i className="fa-solid fa-face-smile"></i>
        </div>
        <strong>Face ID</strong>
        <span>Authenticated</span>
        <div className="iphone-ui-2235__check">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-face">
        <i class="fa-solid fa-face-smile"></i>
    </div>
    <strong>Face ID</strong>
    <span>Authenticated</span>
    <div class="AppleUI-check">
        <i class="fa-solid fa-check"></i>
    </div>
</div>`,
    css: `.AppleUI {
    width: 255px;
    padding: 25px;
    border-radius: 24px;
    background: rgba(28,28,30,.94);
    color: #fff;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,.3);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-face {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    margin: 0 auto 12px;
    border: 2px solid #34c759;
    border-radius: 20px;
    color: #34c759;
    font-size: 30px;
}
.AppleUI > strong {
    display: block;
    font-size: 17px;
}
.AppleUI > span {
    display: block;
    margin-top: 5px;
    color: #8e8e93;
    font-size: 10px;
}
.AppleUI-check {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    margin: 15px auto 0;
    border-radius: 50%;
    background: #34c759;
    color: #fff;
    font-size: 12px;
}`,
  },
  {
    id: 2236,
    name: "iOS Volume HUD",
    preview: (
      <div className="iphone-ui-2236">
        <div className="iphone-ui-2236__icon">
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className="iphone-ui-2236__volume">
          <div></div>
        </div>
        <span>70%</span>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-icon">
        <i class="fa-solid fa-volume-high"></i>
    </div>
    <div class="AppleUI-volume">
        <div></div>
    </div>
    <span>70%</span>
</div>`,
    css: `.AppleUI {
    width: 250px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 13px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 999px;
    background: rgba(28,28,30,.9);
    backdrop-filter: blur(20px);
    color: #fff;
    box-shadow: 0 15px 35px rgba(0,0,0,.22);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-icon {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #3a3a3c;
    font-size: 11px;
}
.AppleUI-volume {
    flex: 1;
    height: 6px;
    overflow: hidden;
    border-radius: 999px;
    background: #48484a;
}
.AppleUI-volume div {
    width: 70%;
    height: 100%;
    border-radius: inherit;
    background: #fff;
}
.AppleUI > span {
    color: #d1d1d6;
    font-size: 9px;
}`,
  },

  {
    id: 2237,
    name: "iOS Dynamic Island Music",
    preview: (
      <div className="iphone-ui-2237">
        <div className="iphone-ui-2237__island">
          <span></span>
          <div>
            <i className="fa-solid fa-music"></i>
          </div>
        </div>
        <div className="iphone-ui-2237__content">
          <div className="iphone-ui-2237__art">
            <i className="fa-solid fa-music"></i>
          </div>
          <div className="iphone-ui-2237__info">
            <strong>Midnight City</strong>
            <span>M83</span>
          </div>
          <button>
            <i className="fa-solid fa-pause"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-island">
        <span></span>
        <div>
            <i class="fa-solid fa-music"></i>
        </div>
    </div>
    <div class="AppleUI-content">
        <div class="AppleUI-art">
            <i class="fa-solid fa-music"></i>
        </div>
        <div class="AppleUI-info">
            <strong>Midnight City</strong>
            <span>M83</span>
        </div>
        <button>
            <i class="fa-solid fa-pause"></i>
        </button>
    </div>
</div>`,
    css: `.AppleUI {
    position: relative;
    width: 320px;
    min-height: 145px;
    padding: 18px;
    border-radius: 29px;
    background: linear-gradient(180deg,#1c1c1e,#080808);
    overflow: hidden;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-island {
    width: 108px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 0 auto;
    border-radius: 999px;
    background: #000;
}
.AppleUI-island > span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #101010;
    box-shadow: inset 0 0 0 1px #262626;
}
.AppleUI-island > div {
    width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #1ed760;
    color: #081008;
    font-size: 7px;
}
.AppleUI-content {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-top: 18px;
}
.AppleUI-art {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: linear-gradient(135deg,#fb7185,#7c3aed);
    color: #fff;
    font-size: 17px;
}
.AppleUI-info {
    min-width: 0;
    flex: 1;
}
.AppleUI-info strong,
.AppleUI-info span {
    display: block;
}
.AppleUI-info strong {
    overflow: hidden;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.AppleUI-info span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-content button {
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 50%;
    background: rgba(255,255,255,.1);
    color: #fff;
    cursor: pointer;
    transition: .18s ease;
}
.AppleUI-content button:hover {
    transform: scale(1.08);
    background: rgba(255,255,255,.18);
}`,
  },
  {
    id: 2238,
    name: "iOS Health Rings",
    preview: (
      <div className="iphone-ui-2238">
        <div className="iphone-ui-2238__rings">
          <div className="iphone-ui-2238__ring iphone-ui-2238__ring--red"></div>
          <div className="iphone-ui-2238__ring iphone-ui-2238__ring--green"></div>
          <div className="iphone-ui-2238__ring iphone-ui-2238__ring--blue"></div>
          <div className="iphone-ui-2238__center">
            <strong>7,842</strong>
            <span>Steps</span>
          </div>
        </div>
        <div className="iphone-ui-2238__stats">
          <span>
            <b>Move</b>
            <strong>486 kcal</strong>
          </span>
          <span>
            <b>Exercise</b>
            <strong>42 min</strong>
          </span>
          <span>
            <b>Stand</b>
            <strong>11 hr</strong>
          </span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-rings">
        <div class="AppleUI-ring AppleUI-ring--red"></div>
        <div class="AppleUI-ring AppleUI-ring--green"></div>
        <div class="AppleUI-ring AppleUI-ring--blue"></div>
        <div class="AppleUI-center">
            <strong>7,842</strong>
            <span>Steps</span>
        </div>
    </div>
    <div class="AppleUI-stats">
        <span><b>Move</b><strong>486 kcal</strong></span>
        <span><b>Exercise</b><strong>42 min</strong></span>
        <span><b>Stand</b><strong>11 hr</strong></span>
    </div>
</div>`,
    css: `.AppleUI {
    width: 310px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 25px;
    background: #111113;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-rings {
    position: relative;
    width: 125px;
    height: 125px;
}
.AppleUI-ring {
    position: absolute;
    border: 7px solid transparent;
    border-radius: 50%;
    transform: rotate(-42deg);
}
.AppleUI-ring--red {
    inset: 0;
    border-top-color: #ff375f;
    border-left-color: #ff375f;
}
.AppleUI-ring--green {
    inset: 12px;
    border-top-color: #30d158;
    border-right-color: #30d158;
}
.AppleUI-ring--blue {
    inset: 24px;
    border-left-color: #0a84ff;
    border-bottom-color: #0a84ff;
}
.AppleUI-center {
    position: absolute;
    inset: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.AppleUI-center strong {
    font-size: 15px;
}
.AppleUI-center span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 8px;
}
.AppleUI-stats {
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.AppleUI-stats span {
    display: flex;
    flex-direction: column;
}
.AppleUI-stats b {
    color: #8e8e93;
    font-size: 8px;
    font-weight: 500;
}
.AppleUI-stats strong {
    margin-top: 2px;
    font-size: 11px;
}`,
  },
  {
    id: 2239,
    name: "iOS Home Control",
    preview: (
      <div className="iphone-ui-2239">
        <div className="iphone-ui-2239__header">
          <strong>My Home</strong>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="iphone-ui-2239__grid">
          <button className="active">
            <i className="fa-solid fa-lightbulb"></i>
            <span>Living Room</span>
            <small>On</small>
          </button>
          <button>
            <i className="fa-solid fa-fan"></i>
            <span>Bedroom</span>
            <small>Off</small>
          </button>
          <button className="active">
            <i className="fa-solid fa-lock-open"></i>
            <span>Front Door</span>
            <small>Unlocked</small>
          </button>
          <button>
            <i className="fa-solid fa-temperature-half"></i>
            <span>Thermostat</span>
            <small>21°</small>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-header">
        <strong>My Home</strong>
        <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="AppleUI-grid">
        <button class="active">
            <i class="fa-solid fa-lightbulb"></i>
            <span>Living Room</span>
            <small>On</small>
        </button>
        <button>
            <i class="fa-solid fa-fan"></i>
            <span>Bedroom</span>
            <small>Off</small>
        </button>
        <button class="active">
            <i class="fa-solid fa-lock-open"></i>
            <span>Front Door</span>
            <small>Unlocked</small>
        </button>
        <button>
            <i class="fa-solid fa-temperature-half"></i>
            <span>Thermostat</span>
            <small>21°</small>
        </button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 310px;
    padding: 17px;
    border-radius: 24px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
    color: #1c1c1e;
}
.AppleUI-header strong {
    font-size: 16px;
}
.AppleUI-header i {
    color: #8e8e93;
}
.AppleUI-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 9px;
}
.AppleUI-grid button {
    min-height: 91px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    border: 0;
    border-radius: 17px;
    background: #fff;
    color: #1c1c1e;
    text-align: left;
    cursor: pointer;
    transition: .18s ease;
}
.AppleUI-grid button:hover {
    transform: translateY(-2px);
}
.AppleUI-grid button.active {
    background: #fff7e6;
    color: #ff9f0a;
}
.AppleUI-grid button i {
    font-size: 17px;
}
.AppleUI-grid button span {
    font-size: 10px;
    font-weight: 600;
}
.AppleUI-grid button small {
    color: #8e8e93;
    font-size: 8px;
}`,
  },
  {
    id: 2240,
    name: "iOS Find My Device",
    preview: (
      <div className="iphone-ui-2240">
        <div className="iphone-ui-2240__map">
          <div className="iphone-ui-2240__pulse"></div>
          <div className="iphone-ui-2240__location">
            <i className="fa-solid fa-location-dot"></i>
          </div>
        </div>
        <div className="iphone-ui-2240__sheet">
          <div>
            <strong>André's iPhone</strong>
            <span>Just now</span>
          </div>
          <button>
            <i className="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-map">
        <div class="AppleUI-pulse"></div>
        <div class="AppleUI-location">
            <i class="fa-solid fa-location-dot"></i>
        </div>
    </div>
    <div class="AppleUI-sheet">
        <div>
            <strong>André's iPhone</strong>
            <span>Just now</span>
        </div>
        <button>
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 310px;
    overflow: hidden;
    border-radius: 23px;
    background: #fff;
    box-shadow: 0 18px 40px rgba(15,23,42,.12);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-map {
    position: relative;
    height: 155px;
    overflow: hidden;
    background:
        linear-gradient(25deg,transparent 35%,#d7e6d2 36%,#d7e6d2 55%,transparent 56%),
        linear-gradient(115deg,transparent 42%,#fff 43%,#fff 57%,transparent 58%),
        #e8f2e4;
}
.AppleUI-map::before,
.AppleUI-map::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: #d9e7d3;
}
.AppleUI-map::before {
    width: 90px;
    height: 90px;
    top: 20px;
    left: 30px;
}
.AppleUI-map::after {
    width: 75px;
    height: 75px;
    right: 20px;
    bottom: 10px;
}
.AppleUI-location {
    position: absolute;
    top: 58px;
    left: 50%;
    z-index: 2;
    color: #ff3b30;
    font-size: 26px;
    transform: translateX(-50%);
}
.AppleUI-pulse {
    position: absolute;
    top: 67px;
    left: calc(50% - 17px);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(255,59,48,.18);
    animation: find-pulse 1.8s ease-out infinite;
}
.AppleUI-sheet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px;
}
.AppleUI-sheet div {
    display: flex;
    flex-direction: column;
}
.AppleUI-sheet strong {
    color: #1c1c1e;
    font-size: 12px;
}
.AppleUI-sheet span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-sheet button {
    width: 37px;
    height: 37px;
    border: 0;
    border-radius: 50%;
    background: #007aff;
    color: #fff;
    cursor: pointer;
}
@keyframes find-pulse {
    from {
        transform: scale(.3);
        opacity: .8;
    }
    to {
        transform: scale(2);
        opacity: 0;
    }
}`,
  },
  {
    id: 2241,
    name: "iOS Camera Control",
    preview: (
      <div className="iphone-ui-2241">
        <div className="iphone-ui-2241__camera">
          <div className="iphone-ui-2241__grid"></div>
          <div className="iphone-ui-2241__focus"></div>
        </div>
        <div className="iphone-ui-2241__controls">
          <button>
            <i className="fa-solid fa-bolt"></i>
          </button>
          <div className="iphone-ui-2241__shutter"></div>
          <button>
            <i className="fa-solid fa-camera-rotate"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-camera">
        <div class="AppleUI-grid"></div>
        <div class="AppleUI-focus"></div>
    </div>
    <div class="AppleUI-controls">
        <button><i class="fa-solid fa-bolt"></i></button>
        <div class="AppleUI-shutter"></div>
        <button><i class="fa-solid fa-camera-rotate"></i></button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 310px;
    padding: 11px 11px 15px;
    border-radius: 25px;
    background: #050505;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-camera {
    position: relative;
    height: 205px;
    overflow: hidden;
    border-radius: 17px;
    background:
        radial-gradient(circle at 65% 35%,rgba(255,255,255,.18),transparent 14%),
        linear-gradient(135deg,#4a4a4a,#181818 42%,#777 100%);
}
.AppleUI-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);
    background-size: 33.33% 33.33%;
    opacity: .35;
}
.AppleUI-focus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42px;
    height: 42px;
    border: 1px solid #ffd60a;
    transform: translate(-50%,-50%);
}
.AppleUI-focus::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    background: #ffd60a;
}
.AppleUI-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 0;
}
.AppleUI-controls button {
    width: 32px;
    height: 32px;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
}
.AppleUI-shutter {
    width: 58px;
    height: 58px;
    border: 4px solid #fff;
    border-radius: 50%;
    background: #fff;
    box-shadow: inset 0 0 0 2px #111;
    cursor: pointer;
    transition: .16s ease;
}
.AppleUI-shutter:hover {
    transform: scale(1.05);
}
.AppleUI-shutter:active {
    transform: scale(.9);
}`,
  },
  {
    id: 2242,
    name: "iOS Mail Compose",
    preview: (
      <div className="iphone-ui-2242">
        <div className="iphone-ui-2242__header">
          <button>Cancel</button>
          <strong>New Message</strong>
          <button>Send</button>
        </div>
        <div className="iphone-ui-2242__fields">
          <div>
            <span>To:</span>
            <strong>alex@example.com</strong>
          </div>
          <div>
            <span>Subject:</span>
            <strong>Project update</strong>
          </div>
        </div>
        <div className="iphone-ui-2242__body">
          Here is the latest update on the project...
        </div>
        <div className="iphone-ui-2242__toolbar">
          <i className="fa-solid fa-paperclip"></i>
          <i className="fa-solid fa-image"></i>
          <i className="fa-solid fa-pencil"></i>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-header">
        <button>Cancel</button>
        <strong>New Message</strong>
        <button>Send</button>
    </div>
    <div class="AppleUI-fields">
        <div><span>To:</span><strong>alex@example.com</strong></div>
        <div><span>Subject:</span><strong>Project update</strong></div>
    </div>
    <div class="AppleUI-body">
        Here is the latest update on the project...
    </div>
    <div class="AppleUI-toolbar">
        <i class="fa-solid fa-paperclip"></i>
        <i class="fa-solid fa-image"></i>
        <i class="fa-solid fa-pencil"></i>
    </div>
</div>`,
    css: `.AppleUI {
    width: 315px;
    min-height: 245px;
    border-radius: 23px;
    overflow: hidden;
    background: #fff;
    color: #1c1c1e;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px;
    border-bottom: 1px solid #e5e5ea;
}
.AppleUI-header button {
    border: 0;
    background: transparent;
    color: #007aff;
    font-size: 10px;
    cursor: pointer;
}
.AppleUI-header strong {
    font-size: 12px;
}
.AppleUI-fields > div {
    display: flex;
    gap: 8px;
    padding: 10px 13px;
    border-bottom: 1px solid #f2f2f7;
}
.AppleUI-fields span {
    color: #8e8e93;
    font-size: 10px;
}
.AppleUI-fields strong {
    font-size: 10px;
    font-weight: 500;
}
.AppleUI-body {
    min-height: 93px;
    padding: 15px 13px;
    color: #3c3c43;
    font-size: 10px;
    line-height: 1.5;
}
.AppleUI-toolbar {
    display: flex;
    gap: 20px;
    padding: 10px 13px;
    border-top: 1px solid #e5e5ea;
    color: #007aff;
    font-size: 12px;
}`,
  },
  {
    id: 2243,
    name: "iOS Sleep Schedule",
    preview: (
      <div className="iphone-ui-2243">
        <div className="iphone-ui-2243__title">
          <i className="fa-solid fa-bed"></i>
          <strong>Sleep Schedule</strong>
        </div>
        <div className="iphone-ui-2243__times">
          <div>
            <span>Bedtime</span>
            <strong>23:00</strong>
          </div>
          <div>
            <span>Wake Up</span>
            <strong>07:00</strong>
          </div>
        </div>
        <div className="iphone-ui-2243__track">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <small>8 hr sleep goal</small>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-title">
        <i class="fa-solid fa-bed"></i>
        <strong>Sleep Schedule</strong>
    </div>
    <div class="AppleUI-times">
        <div>
            <span>Bedtime</span>
            <strong>23:00</strong>
        </div>
        <div>
            <span>Wake Up</span>
            <strong>07:00</strong>
        </div>
    </div>
    <div class="AppleUI-track">
        <span></span>
        <div></div>
        <span></span>
    </div>
    <small>8 hr sleep goal</small>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 18px;
    border-radius: 23px;
    background: linear-gradient(145deg,#312e81,#111827);
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-title {
    display: flex;
    align-items: center;
    gap: 9px;
}
.AppleUI-title i {
    color: #a78bfa;
}
.AppleUI-title strong {
    font-size: 13px;
}
.AppleUI-times {
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
}
.AppleUI-times div {
    display: flex;
    flex-direction: column;
}
.AppleUI-times span {
    color: #a5b4fc;
    font-size: 8px;
}
.AppleUI-times strong {
    margin-top: 4px;
    font-size: 22px;
    font-weight: 400;
}
.AppleUI-track {
    position: relative;
    height: 10px;
    margin-top: 22px;
}
.AppleUI-track div {
    position: absolute;
    left: 7px;
    right: 7px;
    top: 3px;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg,#818cf8,#c084fc,#f472b6);
}
.AppleUI-track span {
    position: absolute;
    z-index: 2;
    width: 10px;
    height: 10px;
    top: 0;
    border-radius: 50%;
    background: #fff;
}
.AppleUI-track span:first-child {
    left: 0;
}
.AppleUI-track span:last-child {
    right: 0;
}
.AppleUI > small {
    display: block;
    margin-top: 13px;
    color: #a5b4fc;
    font-size: 8px;
}`,
  },
  {
    id: 2244,
    name: "iOS Calculator",
    preview: (
      <div className="iphone-ui-2244">
        <div className="iphone-ui-2244__display">1,248</div>
        <div className="iphone-ui-2244__keys">
          <button className="function">AC</button>
          <button className="function">±</button>
          <button className="function">%</button>
          <button className="operator">÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="operator">×</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="operator">−</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="operator">+</button>
          <button className="zero">0</button>
          <button>.</button>
          <button className="operator">=</button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-display">1,248</div>
    <div class="AppleUI-keys">
        <button class="function">AC</button>
        <button class="function">±</button>
        <button class="function">%</button>
        <button class="operator">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="operator">×</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="operator">−</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="operator">+</button>
        <button class="zero">0</button>
        <button>.</button>
        <button class="operator">=</button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 285px;
    padding: 13px;
    border-radius: 25px;
    background: #000;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-display {
    height: 85px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 10px 12px;
    color: #fff;
    font-size: 40px;
    font-weight: 200;
}
.AppleUI-keys {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 7px;
}
.AppleUI-keys button {
    height: 52px;
    border: 0;
    border-radius: 50%;
    background: #333;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    transition: .12s ease;
}
.AppleUI-keys button:hover {
    filter: brightness(1.2);
}
.AppleUI-keys button:active {
    transform: scale(.92);
}
.AppleUI-keys .function {
    background: #a5a5a5;
    color: #000;
}
.AppleUI-keys .operator {
    background: #ff9f0a;
}
.AppleUI-keys .zero {
    grid-column: span 2;
    border-radius: 26px;
    text-align: left;
    padding-left: 20px;
}`,
  },
  {
    id: 2245,
    name: "iOS Voice Memo",
    preview: (
      <div className="iphone-ui-2245">
        <div className="iphone-ui-2245__record">
          <div className="iphone-ui-2245__mic">
            <i className="fa-solid fa-microphone"></i>
          </div>
          <strong>Recording</strong>
          <span>00:42</span>
        </div>
        <div className="iphone-ui-2245__wave">
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
        <div className="iphone-ui-2245__actions">
          <button>
            <i className="fa-solid fa-pause"></i>
          </button>
          <button className="stop">
            <i className="fa-solid fa-stop"></i>
          </button>
          <button>
            <i className="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-record">
        <div class="AppleUI-mic">
            <i class="fa-solid fa-microphone"></i>
        </div>
        <strong>Recording</strong>
        <span>00:42</span>
    </div>
    <div class="AppleUI-wave">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="AppleUI-actions">
        <button><i class="fa-solid fa-pause"></i></button>
        <button class="stop"><i class="fa-solid fa-stop"></i></button>
        <button><i class="fa-solid fa-check"></i></button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 20px;
    border-radius: 25px;
    background: #111113;
    color: #fff;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-record {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.AppleUI-mic {
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #ff3b30;
    box-shadow: 0 0 25px rgba(255,59,48,.25);
    font-size: 20px;
}
.AppleUI-record strong {
    margin-top: 12px;
    font-size: 15px;
}
.AppleUI-record span {
    margin-top: 4px;
    color: #8e8e93;
    font-size: 10px;
    font-variant-numeric: tabular-nums;
}
.AppleUI-wave {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 16px;
}
.AppleUI-wave span {
    width: 3px;
    border-radius: 999px;
    background: #ff375f;
    animation: voice-wave .8s ease-in-out infinite alternate;
}
.AppleUI-wave span:nth-child(1) { height: 12px; }
.AppleUI-wave span:nth-child(2) { height: 24px; animation-delay: -.1s; }
.AppleUI-wave span:nth-child(3) { height: 34px; animation-delay: -.2s; }
.AppleUI-wave span:nth-child(4) { height: 20px; animation-delay: -.3s; }
.AppleUI-wave span:nth-child(5) { height: 38px; animation-delay: -.4s; }
.AppleUI-wave span:nth-child(6) { height: 25px; animation-delay: -.5s; }
.AppleUI-wave span:nth-child(7) { height: 35px; animation-delay: -.6s; }
.AppleUI-wave span:nth-child(8) { height: 19px; animation-delay: -.7s; }
.AppleUI-wave span:nth-child(9) { height: 29px; animation-delay: -.8s; }
.AppleUI-actions {
    display: flex;
    justify-content: center;
    gap: 19px;
    margin-top: 16px;
}
.AppleUI-actions button {
    width: 42px;
    height: 42px;
    border: 0;
    border-radius: 50%;
    background: #2c2c2e;
    color: #fff;
    cursor: pointer;
}
.AppleUI-actions button:hover {
    background: #3a3a3c;
}
.AppleUI-actions .stop {
    background: #ff3b30;
}
@keyframes voice-wave {
    to {
        transform: scaleY(.4);
        opacity: .6;
    }
}`,
  },
  {
    id: 2246,
    name: "iOS Focus Picker",
    preview: (
      <div className="iphone-ui-2246">
        <div className="iphone-ui-2246__title">
          <span>Choose Focus</span>
          <button>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <button className="iphone-ui-2246__option active">
          <i className="fa-solid fa-moon"></i>
          <span>
            <strong>Personal</strong>
            <small>Allowed notifications</small>
          </span>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="iphone-ui-2246__option">
          <i className="fa-solid fa-briefcase"></i>
          <span>
            <strong>Work</strong>
            <small>Silence distractions</small>
          </span>
        </button>
        <button className="iphone-ui-2246__option">
          <i className="fa-solid fa-bed"></i>
          <span>
            <strong>Sleep</strong>
            <small>Scheduled until 07:00</small>
          </span>
        </button>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-title">
        <span>Choose Focus</span>
        <button><i class="fa-solid fa-xmark"></i></button>
    </div>
    <button class="AppleUI-option active">
        <i class="fa-solid fa-moon"></i>
        <span>
            <strong>Personal</strong>
            <small>Allowed notifications</small>
        </span>
        <i class="fa-solid fa-check"></i>
    </button>
    <button class="AppleUI-option">
        <i class="fa-solid fa-briefcase"></i>
        <span>
            <strong>Work</strong>
            <small>Silence distractions</small>
        </span>
    </button>
    <button class="AppleUI-option">
        <i class="fa-solid fa-bed"></i>
        <span>
            <strong>Sleep</strong>
            <small>Scheduled until 07:00</small>
        </span>
    </button>
</div>`,
    css: `.AppleUI {
    width: 310px;
    padding: 16px;
    border-radius: 24px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.AppleUI-title span {
    color: #1c1c1e;
    font-size: 15px;
    font-weight: 700;
}
.AppleUI-title button {
    width: 28px;
    height: 28px;
    border: 0;
    border-radius: 50%;
    background: #e5e5ea;
    color: #8e8e93;
    cursor: pointer;
}
.AppleUI-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 11px;
    min-height: 56px;
    margin-top: 7px;
    padding: 9px;
    border: 0;
    border-radius: 15px;
    background: #fff;
    color: #1c1c1e;
    text-align: left;
    cursor: pointer;
}
.AppleUI-option:hover {
    background: #e5e5ea;
}
.AppleUI-option > i:first-child {
    width: 31px;
    height: 31px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #5856d6;
    color: #fff;
    font-size: 12px;
}
.AppleUI-option span {
    flex: 1;
}
.AppleUI-option strong,
.AppleUI-option small {
    display: block;
}
.AppleUI-option strong {
    font-size: 10px;
}
.AppleUI-option small {
    margin-top: 2px;
    color: #8e8e93;
    font-size: 8px;
}
.AppleUI-option > i:last-child {
    color: #34c759;
    font-size: 11px;
}
.AppleUI-option:not(.active) > i:last-child {
    display: none;
}`,
  },
  {
    id: 2247,
    name: "iOS Screen Time",
    preview: (
      <div className="iphone-ui-2247">
        <div className="iphone-ui-2247__header">
          <strong>Screen Time</strong>
          <span>Today</span>
        </div>
        <div className="iphone-ui-2247__number">3h 42m</div>
        <span className="iphone-ui-2247__average">Daily Average</span>
        <div className="iphone-ui-2247__chart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="iphone-ui-2247__apps">
          <div>
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
            <strong>48m</strong>
          </div>
          <div>
            <i className="fa-solid fa-music"></i>
            <span>Music</span>
            <strong>41m</strong>
          </div>
          <div>
            <i className="fa-solid fa-globe"></i>
            <span>Safari</span>
            <strong>37m</strong>
          </div>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-header">
        <strong>Screen Time</strong>
        <span>Today</span>
    </div>
    <div class="AppleUI-number">3h 42m</div>
    <span class="AppleUI-average">Daily Average</span>
    <div class="AppleUI-chart">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="AppleUI-apps">
        <div><i class="fa-solid fa-message"></i><span>Messages</span><strong>48m</strong></div>
        <div><i class="fa-solid fa-music"></i><span>Music</span><strong>41m</strong></div>
        <div><i class="fa-solid fa-globe"></i><span>Safari</span><strong>37m</strong></div>
    </div>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 18px;
    border-radius: 23px;
    background: #fff;
    box-shadow: 0 15px 38px rgba(15,23,42,.08);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.AppleUI-header strong {
    color: #1c1c1e;
    font-size: 13px;
}
.AppleUI-header span {
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-number {
    margin-top: 16px;
    color: #1c1c1e;
    font-size: 33px;
    font-weight: 600;
}
.AppleUI-average {
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-chart {
    height: 55px;
    display: flex;
    align-items: flex-end;
    gap: 9px;
    margin-top: 18px;
}
.AppleUI-chart span {
    flex: 1;
    border-radius: 5px 5px 2px 2px;
    background: #007aff;
}
.AppleUI-chart span:nth-child(1) { height: 38%; }
.AppleUI-chart span:nth-child(2) { height: 67%; }
.AppleUI-chart span:nth-child(3) { height: 48%; }
.AppleUI-chart span:nth-child(4) { height: 81%; }
.AppleUI-chart span:nth-child(5) { height: 61%; }
.AppleUI-chart span:nth-child(6) { height: 92%; }
.AppleUI-chart span:nth-child(7) { height: 73%; }
.AppleUI-apps {
    margin-top: 15px;
}
.AppleUI-apps div {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 0;
    border-top: 1px solid #f2f2f7;
}
.AppleUI-apps i {
    width: 24px;
    color: #007aff;
}
.AppleUI-apps span {
    flex: 1;
    color: #3c3c43;
    font-size: 9px;
}
.AppleUI-apps strong {
    color: #636366;
    font-size: 9px;
}`,
  },
  {
    id: 2248,
    name: "iOS Now Playing Widget",
    preview: (
      <div className="iphone-ui-2248">
        <div className="iphone-ui-2248__art">
          <i className="fa-solid fa-headphones"></i>
        </div>
        <div className="iphone-ui-2248__text">
          <strong>Blinding Lights</strong>
          <span>The Weeknd</span>
        </div>
        <div className="iphone-ui-2248__controls">
          <button>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button>
            <i className="fa-solid fa-play"></i>
          </button>
          <button>
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
        <div className="iphone-ui-2248__progress">
          <span></span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-art">
        <i class="fa-solid fa-headphones"></i>
    </div>
    <div class="AppleUI-text">
        <strong>Blinding Lights</strong>
        <span>The Weeknd</span>
    </div>
    <div class="AppleUI-controls">
        <button><i class="fa-solid fa-backward-step"></i></button>
        <button><i class="fa-solid fa-play"></i></button>
        <button><i class="fa-solid fa-forward-step"></i></button>
    </div>
    <div class="AppleUI-progress"><span></span></div>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 15px;
    border-radius: 21px;
    background: #1c1c1e;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-art {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    margin: 0 auto;
    border-radius: 14px;
    background: linear-gradient(145deg,#f97316,#ec4899,#8b5cf6);
    font-size: 22px;
}
.AppleUI-text {
    margin-top: 12px;
    text-align: center;
}
.AppleUI-text strong,
.AppleUI-text span {
    display: block;
}
.AppleUI-text strong {
    font-size: 13px;
}
.AppleUI-text span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 14px;
}
.AppleUI-controls button {
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    cursor: pointer;
}
.AppleUI-controls button:nth-child(2) {
    background: #fff;
    color: #000;
}
.AppleUI-progress {
    height: 4px;
    overflow: hidden;
    margin-top: 13px;
    border-radius: 999px;
    background: #48484a;
}
.AppleUI-progress span {
    display: block;
    width: 48%;
    height: 100%;
    border-radius: inherit;
    background: #fff;
}`,
  },
  {
    id: 2249,
    name: "iOS Charging Animation",
    preview: (
      <div className="iphone-ui-2249">
        <div className="iphone-ui-2249__battery">
          <div className="iphone-ui-2249__level"></div>
          <i className="fa-solid fa-bolt"></i>
        </div>
        <strong>82%</strong>
        <span>Charging</span>
        <small>10 min until 90%</small>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-battery">
        <div class="AppleUI-level"></div>
        <i class="fa-solid fa-bolt"></i>
    </div>
    <strong>82%</strong>
    <span>Charging</span>
    <small>10 min until 90%</small>
</div>`,
    css: `.AppleUI {
    width: 265px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    background: #1c1c1e;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-battery {
    position: relative;
    width: 90px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 3px solid #636366;
    border-radius: 10px;
}
.AppleUI-battery::after {
    content: "";
    position: absolute;
    right: -7px;
    width: 5px;
    height: 15px;
    border-radius: 0 4px 4px 0;
    background: #636366;
}
.AppleUI-level {
    position: absolute;
    inset: 4px;
    width: 82%;
    border-radius: 5px;
    background: linear-gradient(90deg,#30d158,#34c759);
    animation: battery-charge 2s ease-in-out infinite;
}
.AppleUI-battery i {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 14px;
}
.AppleUI > strong {
    margin-top: 15px;
    font-size: 25px;
}
.AppleUI > span {
    margin-top: 3px;
    color: #34c759;
    font-size: 11px;
}
.AppleUI > small {
    margin-top: 4px;
    color: #8e8e93;
    font-size: 8px;
}
@keyframes battery-charge {
    0%,100% {
        opacity: .8;
    }
    50% {
        opacity: 1;
        filter: brightness(1.2);
    }
}`,
  },
  {
    id: 2250,
    name: "iOS App Library Search",
    preview: (
      <div className="iphone-ui-2250">
        <div className="iphone-ui-2250__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>App Library</span>
        </div>
        <div className="iphone-ui-2250__result">
          <div>
            <i className="fa-solid fa-message"></i>
          </div>
          <span>Messages</span>
        </div>
        <div className="iphone-ui-2250__result">
          <div>
            <i className="fa-solid fa-music"></i>
          </div>
          <span>Music</span>
        </div>
        <div className="iphone-ui-2250__result">
          <div>
            <i className="fa-solid fa-camera"></i>
          </div>
          <span>Camera</span>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>App Library</span>
    </div>
    <div class="AppleUI-result">
        <div><i class="fa-solid fa-message"></i></div>
        <span>Messages</span>
    </div>
    <div class="AppleUI-result">
        <div><i class="fa-solid fa-music"></i></div>
        <span>Music</span>
    </div>
    <div class="AppleUI-result">
        <div><i class="fa-solid fa-camera"></i></div>
        <span>Camera</span>
    </div>
</div>`,
    css: `.AppleUI {
    width: 290px;
    padding: 15px;
    border-radius: 22px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-search {
    height: 38px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 11px;
    border-radius: 10px;
    background: rgba(255,255,255,.75);
    color: #8e8e93;
}
.AppleUI-search span {
    font-size: 10px;
}
.AppleUI-result {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 3px;
    margin-top: 5px;
}
.AppleUI-result > div {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: linear-gradient(135deg,#007aff,#5ac8fa);
    color: #fff;
}
.AppleUI-result span {
    color: #1c1c1e;
    font-size: 10px;
    font-weight: 600;
}`,
  },
  {
    id: 2251,
    name: "iOS AirDrop Nearby",
    preview: (
      <div className="iphone-ui-2251">
        <div className="iphone-ui-2251__title">
          <strong>AirDrop</strong>
          <span>Nearby Devices</span>
        </div>
        <div className="iphone-ui-2251__devices">
          <button>
            <div>A</div>
            <strong>André</strong>
            <span>iPhone</span>
          </button>
          <button>
            <div>J</div>
            <strong>Jamie</strong>
            <span>MacBook</span>
          </button>
          <button>
            <div>
              <i className="fa-solid fa-mobile-screen"></i>
            </div>
            <strong>Alex</strong>
            <span>iPhone</span>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-title">
        <strong>AirDrop</strong>
        <span>Nearby Devices</span>
    </div>
    <div class="AppleUI-devices">
        <button>
            <div>A</div>
            <strong>André</strong>
            <span>iPhone</span>
        </button>
        <button>
            <div>J</div>
            <strong>Jamie</strong>
            <span>MacBook</span>
        </button>
        <button>
            <div><i class="fa-solid fa-mobile-screen"></i></div>
            <strong>Alex</strong>
            <span>iPhone</span>
        </button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 305px;
    padding: 17px;
    border-radius: 23px;
    background: #f2f2f7;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-title {
    display: flex;
    flex-direction: column;
}
.AppleUI-title strong {
    color: #1c1c1e;
    font-size: 15px;
}
.AppleUI-title span {
    margin-top: 3px;
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-devices {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 17px;
}
.AppleUI-devices button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    background: transparent;
    cursor: pointer;
}
.AppleUI-devices button > div {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg,#007aff,#5856d6);
    color: #fff;
    font-size: 17px;
}
.AppleUI-devices button:hover > div {
    transform: scale(1.06);
}
.AppleUI-devices strong {
    margin-top: 7px;
    color: #1c1c1e;
    font-size: 9px;
}
.AppleUI-devices span {
    margin-top: 2px;
    color: #8e8e93;
    font-size: 8px;
}`,
  },
  {
    id: 2252,
    name: "iOS Translation Card",
    preview: (
      <div className="iphone-ui-2252">
        <div className="iphone-ui-2252__lang">
          <span>English</span>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <span>Dutch</span>
        </div>
        <div className="iphone-ui-2252__text">
          <span>Hello, how are you?</span>
          <i className="fa-solid fa-volume-high"></i>
        </div>
        <div className="iphone-ui-2252__translation">Hallo, hoe gaat het?</div>
        <button>
          <i className="fa-solid fa-copy"></i>
          Copy Translation
        </button>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-lang">
        <span>English</span>
        <i class="fa-solid fa-arrow-right-arrow-left"></i>
        <span>Dutch</span>
    </div>
    <div class="AppleUI-text">
        <span>Hello, how are you?</span>
        <i class="fa-solid fa-volume-high"></i>
    </div>
    <div class="AppleUI-translation">
        Hallo, hoe gaat het?
    </div>
    <button>
        <i class="fa-solid fa-copy"></i>
        Copy Translation
    </button>
</div>`,
    css: `.AppleUI {
    width: 305px;
    padding: 17px;
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 14px 35px rgba(15,23,42,.08);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-lang {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #007aff;
    font-size: 9px;
    font-weight: 600;
}
.AppleUI-lang i {
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-text {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 18px;
    color: #1c1c1e;
    font-size: 12px;
}
.AppleUI-text i {
    color: #007aff;
    font-size: 11px;
}
.AppleUI-translation {
    margin-top: 9px;
    padding: 11px;
    border-radius: 11px;
    background: #f2f2f7;
    color: #636366;
    font-size: 11px;
}
.AppleUI > button {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 10px;
    border: 0;
    border-radius: 10px;
    background: #007aff;
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}
.AppleUI > button:hover {
    background: #006fe6;
}`,
  },
  {
    id: 2253,
    name: "iOS Notification Stack",
    preview: (
      <div className="iphone-ui-2253">
        <div className="iphone-ui-2253__notification">
          <div className="iphone-ui-2253__icon">
            <i className="fa-solid fa-message"></i>
          </div>
          <div>
            <strong>Messages</strong>
            <span>New message</span>
            <small>Hey, are you free?</small>
          </div>
          <time>now</time>
        </div>
        <div className="iphone-ui-2253__notification second">
          <div className="iphone-ui-2253__icon orange">
            <i className="fa-solid fa-calendar"></i>
          </div>
          <div>
            <strong>Calendar</strong>
            <span>Upcoming</span>
            <small>Meeting at 14:00</small>
          </div>
          <time>2m</time>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-notification">
        <div class="AppleUI-icon"><i class="fa-solid fa-message"></i></div>
        <div><strong>Messages</strong><span>New message</span><small>Hey, are you free?</small></div>
        <time>now</time>
    </div>
    <div class="AppleUI-notification second">
        <div class="AppleUI-icon orange"><i class="fa-solid fa-calendar"></i></div>
        <div><strong>Calendar</strong><span>Upcoming</span><small>Meeting at 14:00</small></div>
        <time>2m</time>
    </div>
</div>`,
    css: `.AppleUI {
    width: 320px;
    padding: 10px;
    border-radius: 25px;
    background: linear-gradient(180deg,#f2f2f7,#e5e5ea);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-notification {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 11px;
    border: 1px solid rgba(255,255,255,.55);
    border-radius: 17px;
    background: rgba(255,255,255,.82);
    box-shadow: 0 8px 20px rgba(15,23,42,.08);
}
.AppleUI-notification.second {
    margin-top: 8px;
}
.AppleUI-icon {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #34c759;
    color: #fff;
    font-size: 13px;
}
.AppleUI-icon.orange {
    background: #ff9500;
}
.AppleUI-notification > div:nth-child(2) {
    min-width: 0;
    flex: 1;
}
.AppleUI-notification strong,
.AppleUI-notification span,
.AppleUI-notification small {
    display: block;
}
.AppleUI-notification strong {
    color: #1c1c1e;
    font-size: 10px;
}
.AppleUI-notification span {
    margin-top: 2px;
    color: #636366;
    font-size: 8px;
}
.AppleUI-notification small {
    margin-top: 3px;
    overflow: hidden;
    color: #3c3c43;
    font-size: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.AppleUI-notification time {
    color: #8e8e93;
    font-size: 7px;
}`,
  },
  {
    id: 2254,
    name: "iOS Magnifier",
    preview: (
      <div className="iphone-ui-2254">
        <div className="iphone-ui-2254__lens">
          <div className="iphone-ui-2254__zoom"></div>
          <span>2.0×</span>
        </div>
        <div className="iphone-ui-2254__toolbar">
          <button>
            <i className="fa-solid fa-sun"></i>
          </button>
          <button>
            <i className="fa-solid fa-sliders"></i>
          </button>
          <button>
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-lens">
        <div class="AppleUI-zoom"></div>
        <span>2.0×</span>
    </div>
    <div class="AppleUI-toolbar">
        <button><i class="fa-solid fa-sun"></i></button>
        <button><i class="fa-solid fa-sliders"></i></button>
        <button><i class="fa-solid fa-camera"></i></button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 12px;
    border-radius: 25px;
    background: #050505;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-lens {
    position: relative;
    height: 185px;
    overflow: hidden;
    border-radius: 17px;
    background:
        radial-gradient(circle at 38% 35%,rgba(255,255,255,.7),transparent 8%),
        radial-gradient(circle at 62% 62%,rgba(255,125,60,.45),transparent 25%),
        linear-gradient(135deg,#58677a,#1e293b);
}
.AppleUI-zoom {
    position: absolute;
    width: 110px;
    height: 110px;
    top: 38px;
    left: 90px;
    border: 2px solid rgba(255,255,255,.7);
    border-radius: 50%;
    box-shadow:
        0 0 0 8px rgba(0,0,0,.13),
        0 0 30px rgba(255,255,255,.12);
}
.AppleUI-lens span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 5px 8px;
    border-radius: 999px;
    background: rgba(0,0,0,.48);
    color: #fff;
    font-size: 9px;
}
.AppleUI-toolbar {
    display: flex;
    justify-content: center;
    gap: 28px;
    padding-top: 11px;
}
.AppleUI-toolbar button {
    width: 31px;
    height: 31px;
    border: 0;
    border-radius: 50%;
    background: #2c2c2e;
    color: #fff;
    cursor: pointer;
}
.AppleUI-toolbar button:hover {
    background: #3a3a3c;
}`,
  },
  {
    id: 2255,
    name: "iOS Safari Private Mode",
    preview: (
      <div className="iphone-ui-2255">
        <div className="iphone-ui-2255__top">
          <i className="fa-solid fa-shield-halved"></i>
          <strong>Private Browsing</strong>
        </div>
        <div className="iphone-ui-2255__body">
          <div className="iphone-ui-2255__mask">
            <i className="fa-solid fa-user-secret"></i>
          </div>
          <h3>Private Browsing</h3>
          <p>Safari won't remember your browsing history or searches.</p>
        </div>
        <button>Done</button>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-top">
        <i class="fa-solid fa-shield-halved"></i>
        <strong>Private Browsing</strong>
    </div>
    <div class="AppleUI-body">
        <div class="AppleUI-mask">
            <i class="fa-solid fa-user-secret"></i>
        </div>
        <h3>Private Browsing</h3>
        <p>Safari won't remember your browsing history or searches.</p>
    </div>
    <button>Done</button>
</div>`,
    css: `.AppleUI {
    width: 300px;
    padding: 15px;
    border-radius: 23px;
    background: #1c1c1e;
    color: #fff;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-top {
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    color: #a1a1a6;
}
.AppleUI-top i {
    color: #8e8e93;
}
.AppleUI-top strong {
    font-size: 11px;
}
.AppleUI-body {
    padding: 22px 16px;
}
.AppleUI-mask {
    width: 67px;
    height: 67px;
    display: grid;
    place-items: center;
    margin: 0 auto;
    border-radius: 50%;
    background: #2c2c2e;
    color: #d1d1d6;
    font-size: 27px;
}
.AppleUI-body h3 {
    margin: 13px 0 5px;
    font-size: 16px;
}
.AppleUI-body p {
    margin: 0;
    color: #8e8e93;
    font-size: 9px;
    line-height: 1.5;
}
.AppleUI > button {
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 11px;
    background: #007aff;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}`,
  },
  {
    id: 2256,
    name: "iOS Command Center",
    preview: (
      <div className="iphone-ui-2256">
        <div className="iphone-ui-2256__top">
          <strong>Control Center</strong>
          <span>9:41</span>
        </div>
        <div className="iphone-ui-2256__primary">
          <button className="active">
            <i className="fa-solid fa-wifi"></i>
          </button>
          <button className="active">
            <i className="fa-brands fa-bluetooth-b"></i>
          </button>
          <button>
            <i className="fa-solid fa-plane"></i>
          </button>
          <button>
            <i className="fa-solid fa-moon"></i>
          </button>
        </div>
        <div className="iphone-ui-2256__sliders">
          <div>
            <i className="fa-solid fa-sun"></i>
            <span style={{ width: "76%" }}></span>
          </div>
          <div>
            <i className="fa-solid fa-volume-high"></i>
            <span style={{ width: "54%" }}></span>
          </div>
        </div>
        <div className="iphone-ui-2256__bottom">
          <button>
            <i className="fa-solid fa-flashlight"></i>
          </button>
          <button>
            <i className="fa-solid fa-camera"></i>
          </button>
          <button>
            <i className="fa-solid fa-calculator"></i>
          </button>
          <button>
            <i className="fa-solid fa-stopwatch"></i>
          </button>
        </div>
      </div>
    ),
    html: `<div class="AppleUI">
    <div class="AppleUI-top">
        <strong>Control Center</strong>
        <span>9:41</span>
    </div>
    <div class="AppleUI-primary">
        <button class="active"><i class="fa-solid fa-wifi"></i></button>
        <button class="active"><i class="fa-brands fa-bluetooth-b"></i></button>
        <button><i class="fa-solid fa-plane"></i></button>
        <button><i class="fa-solid fa-moon"></i></button>
    </div>
    <div class="AppleUI-sliders">
        <div>
            <i class="fa-solid fa-sun"></i>
            <span></span>
        </div>
        <div>
            <i class="fa-solid fa-volume-high"></i>
            <span></span>
        </div>
    </div>
    <div class="AppleUI-bottom">
        <button><i class="fa-solid fa-flashlight"></i></button>
        <button><i class="fa-solid fa-camera"></i></button>
        <button><i class="fa-solid fa-calculator"></i></button>
        <button><i class="fa-solid fa-stopwatch"></i></button>
    </div>
</div>`,
    css: `.AppleUI {
    width: 315px;
    padding: 17px;
    border-radius: 28px;
    background:
        linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.06)),
        #1c1c1e;
    border: 1px solid rgba(255,255,255,.12);
    color: #fff;
    box-shadow: 0 22px 50px rgba(0,0,0,.28);
    font-family: -apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",sans-serif;
}
.AppleUI-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.AppleUI-top strong {
    font-size: 12px;
}
.AppleUI-top span {
    color: #8e8e93;
    font-size: 9px;
}
.AppleUI-primary {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 8px;
    margin-top: 16px;
}
.AppleUI-primary button {
    height: 55px;
    border: 0;
    border-radius: 17px;
    background: #2c2c2e;
    color: #d1d1d6;
    font-size: 15px;
    cursor: pointer;
    transition: .16s ease;
}
.AppleUI-primary button.active {
    background: #007aff;
    color: #fff;
}
.AppleUI-primary button:hover {
    transform: translateY(-2px);
}
.AppleUI-sliders {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
    margin-top: 8px;
}
.AppleUI-sliders > div {
    position: relative;
    height: 105px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 13px;
    border-radius: 17px;
    background: #2c2c2e;
}
.AppleUI-sliders > div i {
    position: absolute;
    top: 11px;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    color: #fff;
    font-size: 12px;
}
.AppleUI-sliders > div span {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 4px;
    height: 76%;
    border-radius: 13px;
    background: #fff;
}
.AppleUI-sliders > div:nth-child(2) span {
    height: 54%;
}
.AppleUI-bottom {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 8px;
    margin-top: 8px;
}
.AppleUI-bottom button {
    height: 48px;
    border: 0;
    border-radius: 16px;
    background: #2c2c2e;
    color: #fff;
    cursor: pointer;
    transition: .16s ease;
}
.AppleUI-bottom button:hover {
    background: #3a3a3c;
    transform: translateY(-2px);
}`,
  },
  {
    id: 2638,
    name: "Titanium Dynamic Island iPhone",
    preview: (
      <div className="iphone-preview-2638">
        <div className="iphone-frame-2638">
          <div className="iphone-screen-2638">
            <div className="iphone-status-2638">
              <span>9:41</span>
              <div className="iphone-island-2638"></div>
              <div className="iphone-status-icons-2638">
                <i className="ri-signal-wifi-fill"></i>
                <i className="ri-wifi-fill"></i>
                <i className="ri-battery-fill"></i>
              </div>
            </div>
            <div className="iphone-wallpaper-2638">
              <div className="iphone-glow-2638 iphone-glow-one-2638"></div>
              <div className="iphone-glow-2638 iphone-glow-two-2638"></div>
              <div className="iphone-glow-2638 iphone-glow-three-2638"></div>
            </div>
            <div className="iphone-content-2638">
              <div className="iphone-date-2638">Tuesday, September 8</div>
              <div className="iphone-time-2638">9:41</div>
              <div className="iphone-widget-grid-2638">
                <div className="iphone-widget-2638 weather-widget-2638">
                  <div className="widget-top-2638">
                    <span>WEATHER</span>
                    <i className="ri-sun-fill"></i>
                  </div>
                  <strong>21°</strong>
                  <p>Mostly sunny</p>
                </div>
                <div className="iphone-widget-2638 activity-widget-2638">
                  <div className="widget-top-2638">
                    <span>ACTIVITY</span>
                    <i className="ri-run-fill"></i>
                  </div>
                  <strong>7.8k</strong>
                  <p>steps today</p>
                </div>
              </div>
              <div className="iphone-notification-2638">
                <div className="notification-icon-2638">
                  <i className="ri-message-3-fill"></i>
                </div>
                <div className="notification-text-2638">
                  <div className="notification-top-2638">
                    <strong>Messages</strong>
                    <span>now</span>
                  </div>
                  <p>Everything is ready for you.</p>
                </div>
                <i className="ri-arrow-right-s-line notification-arrow-2638"></i>
              </div>
              <div className="iphone-shortcuts-2638">
                <div className="shortcut-2638">
                  <i className="ri-flashlight-fill"></i>
                </div>
                <div className="shortcut-2638">
                  <i className="ri-camera-3-fill"></i>
                </div>
              </div>
            </div>
            <div className="iphone-home-indicator-2638"></div>
          </div>
        </div>
      </div>
    ),
    html: `<div class="iphone-ui-2638">
  <div class="iphone-frame-2638">
    <div class="iphone-screen-2638">
      <div class="iphone-status-2638">
        <span>9:41</span>
        <div class="iphone-island-2638"></div>
        <div class="iphone-status-icons-2638">
          <i class="ri-signal-wifi-fill"></i>
          <i class="ri-wifi-fill"></i>
          <i class="ri-battery-fill"></i>
        </div>
      </div>
      <div class="iphone-wallpaper-2638">
        <div class="iphone-glow-2638 iphone-glow-one-2638"></div>
        <div class="iphone-glow-2638 iphone-glow-two-2638"></div>
        <div class="iphone-glow-2638 iphone-glow-three-2638"></div>
      </div>
      <div class="iphone-content-2638">
        <div class="iphone-date-2638">Tuesday, September 8</div>
        <div class="iphone-time-2638">9:41</div>
        <div class="iphone-widget-grid-2638">
          <div class="iphone-widget-2638 weather-widget-2638">
            <div class="widget-top-2638">
              <span>WEATHER</span>
              <i class="ri-sun-fill"></i>
            </div>
            <strong>21°</strong>
            <p>Mostly sunny</p>
          </div>
          <div class="iphone-widget-2638 activity-widget-2638">
            <div class="widget-top-2638">
              <span>ACTIVITY</span>
              <i class="ri-run-fill"></i>
            </div>
            <strong>7.8k</strong>
            <p>steps today</p>
          </div>
        </div>
        <div class="iphone-notification-2638">
          <div class="notification-icon-2638">
            <i class="ri-message-3-fill"></i>
          </div>
          <div class="notification-text-2638">
            <div class="notification-top-2638">
              <strong>Messages</strong>
              <span>now</span>
            </div>
            <p>Everything is ready for you.</p>
          </div>
          <i class="ri-arrow-right-s-line notification-arrow-2638"></i>
        </div>
        <div class="iphone-shortcuts-2638">
          <div class="shortcut-2638">
            <i class="ri-flashlight-fill"></i>
          </div>
          <div class="shortcut-2638">
            <i class="ri-camera-3-fill"></i>
          </div>
        </div>
      </div>
      <div class="iphone-home-indicator-2638"></div>
    </div>
  </div>
</div>`,
    css: `
.iphone-preview-2638 {
  width: 100%;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 35%, rgba(99, 102, 241, 0.2), transparent 28%),
    radial-gradient(circle at 50% 70%, rgba(56, 189, 248, 0.12), transparent 30%),
    #09090b;
}
.iphone-frame-2638 {
  width: 270px;
  height: 550px;
  padding: 7px;
  position: relative;
  border-radius: 46px;
  background: linear-gradient(145deg, #4b5563, #111827 35%, #030712 75%, #6b7280);
  box-shadow:
    0 35px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.12),
    inset 0 0 20px rgba(255, 255, 255, 0.08);
  animation: iphoneFloat2638 5s ease-in-out infinite;
}
.iphone-frame-2638::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 44px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  pointer-events: none;
}
.iphone-screen-2638 {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  background: #020617;
}
.iphone-screen-2638::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(125deg, rgba(255,255,255,0.08), transparent 25%, transparent 75%, rgba(255,255,255,0.05));
  pointer-events: none;
  z-index: 8;
}
.iphone-status-2638 {
  position: absolute;
  top: 12px;
  left: 20px;
  right: 20px;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
}
.iphone-island-2638 {
  position: absolute;
  left: 50%;
  top: -3px;
  width: 92px;
  height: 25px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: #000000;
  box-shadow:
    inset 0 0 8px rgba(255, 255, 255, 0.03),
    0 1px 3px rgba(0, 0, 0, 0.8);
}
.iphone-status-icons-2638 {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
}
.iphone-wallpaper-2638 {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(155deg, #111827 0%, #312e81 38%, #0f172a 72%, #020617 100%);
}
.iphone-glow-2638 {
  position: absolute;
  border-radius: 50%;
  filter: blur(34px);
}
.iphone-glow-one-2638 {
  width: 190px;
  height: 190px;
  top: 40px;
  left: -60px;
  background: rgba(168, 85, 247, 0.33);
  animation: iphoneGlowOne2638 6s ease-in-out infinite;
}
.iphone-glow-two-2638 {
  width: 180px;
  height: 180px;
  right: -75px;
  top: 210px;
  background: rgba(59, 130, 246, 0.28);
  animation: iphoneGlowTwo2638 7s ease-in-out infinite;
}
.iphone-glow-three-2638 {
  width: 150px;
  height: 150px;
  left: 50px;
  bottom: 20px;
  background: rgba(236, 72, 153, 0.18);
  animation: iphoneGlowThree2638 5s ease-in-out infinite;
}
.iphone-content-2638 {
  position: relative;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 74px 17px 35px;
  box-sizing: border-box;
}
.iphone-date-2638 {
  color: rgba(255, 255, 255, 0.76);
  text-align: center;
  font-size: 9px;
  font-weight: 600;
}
.iphone-time-2638 {
  margin-top: 2px;
  color: #ffffff;
  text-align: center;
  font-size: 52px;
  line-height: 1;
  font-weight: 300;
  letter-spacing: -0.05em;
  text-shadow: 0 5px 20px rgba(0,0,0,0.22);
}
.iphone-widget-grid-2638 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 18px;
}
.iphone-widget-2638 {
  min-height: 93px;
  padding: 11px;
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 17px;
  background: rgba(15, 23, 42, 0.42);
  backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.widget-top-2638 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255,255,255,0.62);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.08em;
}
.widget-top-2638 i {
  font-size: 13px;
  color: rgba(255,255,255,0.92);
}
.iphone-widget-2638 strong {
  display: block;
  margin-top: 10px;
  color: #ffffff;
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
}
.iphone-widget-2638 p {
  margin: 5px 0 0;
  color: rgba(255,255,255,0.52);
  font-size: 8px;
}
.iphone-notification-2638 {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  background: rgba(15,23,42,0.48);
  backdrop-filter: blur(18px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 8px 25px rgba(0,0,0,0.18);
}
.notification-icon-2638 {
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(59,130,246,0.25);
  color: #bfdbfe;
  font-size: 14px;
}
.notification-text-2638 {
  min-width: 0;
  flex: 1;
}
.notification-top-2638 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.notification-top-2638 strong {
  color: #ffffff;
  font-size: 9px;
}
.notification-top-2638 span {
  color: rgba(255,255,255,0.42);
  font-size: 7px;
}
.notification-text-2638 p {
  margin: 3px 0 0;
  color: rgba(255,255,255,0.58);
  font-size: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notification-arrow-2638 {
  color: rgba(255,255,255,0.4);
  font-size: 15px;
}
.iphone-shortcuts-2638 {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.shortcut-2638 {
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(15,23,42,0.52);
  border: 1px solid rgba(255,255,255,0.1);
  color: #ffffff;
  backdrop-filter: blur(14px);
  font-size: 15px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.16);
  transition: transform 0.25s ease, background 0.25s ease;
}
.shortcut-2638:hover {
  transform: translateY(-3px) scale(1.04);
  background: rgba(255,255,255,0.12);
}
.iphone-home-indicator-2638 {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 82px;
  height: 4px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(255,255,255,0.88);
  z-index: 7;
  box-shadow: 0 1px 4px rgba(0,0,0,0.35);
}
@keyframes iphoneFloat2638 {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-7px) rotate(0.6deg);
  }
}
@keyframes iphoneGlowOne2638 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(18px, 12px) scale(1.12);
  }
}
@keyframes iphoneGlowTwo2638 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-15px, -10px) scale(1.08);
  }
}
@keyframes iphoneGlowThree2638 {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.9;
  }
}
@media (max-width: 600px) {
  .iphone-preview-2638 {
    min-height: 520px;
  }
  .iphone-frame-2638 {
    transform: scale(0.92);
  }
}
@media (prefers-reduced-motion: reduce) {
  .iphone-frame-2638,
  .iphone-glow-one-2638,
  .iphone-glow-two-2638,
  .iphone-glow-three-2638 {
    animation: none;
  }
}
`,
  },
  {
    id: 2639,
    name: "MacBook Aurora Desktop",
    preview: (
      <div className="macbook-preview-2639">
        <div className="macbook-shell-2639">
          <div className="macbook-display-2639">
            <div className="macbook-camera-2639"></div>
            <div className="macbook-screen-2639">
              <div className="macbook-wallpaper-2639">
                <div className="macbook-aurora-2639 macbook-aurora-one-2639"></div>
                <div className="macbook-aurora-2639 macbook-aurora-two-2639"></div>
                <div className="macbook-aurora-2639 macbook-aurora-three-2639"></div>
              </div>
              <div className="macbook-menubar-2639">
                <div className="macbook-menu-left-2639">
                  <i className="ri-apple-fill"></i>
                  <span>Finder</span>
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <span>Go</span>
                  <span>Window</span>
                  <span>Help</span>
                </div>
                <div className="macbook-menu-right-2639">
                  <i className="ri-wifi-fill"></i>
                  <i className="ri-bluetooth-fill"></i>
                  <i className="ri-search-line"></i>
                  <i className="ri-sun-line"></i>
                  <span>Tue Sep 8</span>
                  <span>9:41 AM</span>
                </div>
              </div>
              <div className="macbook-desktop-content-2639">
                <div className="macbook-widget-weather-2639 macbook-glass-2639">
                  <div className="macbook-widget-label-2639">AMSTERDAM</div>
                  <div className="macbook-weather-main-2639">
                    <strong>21°</strong>
                    <i className="ri-sun-fill"></i>
                  </div>
                  <div className="macbook-weather-text-2639">Mostly sunny</div>
                  <div className="macbook-weather-footer-2639">
                    <span>H 24°</span>
                    <span>L 16°</span>
                  </div>
                </div>
                <div className="macbook-calendar-2639 macbook-glass-2639">
                  <div className="macbook-calendar-top-2639">
                    <span>Tuesday</span>
                    <strong>8</strong>
                  </div>
                  <div className="macbook-calendar-event-2639">
                    <span></span>
                    <div>
                      <strong>Design meeting</strong>
                      <small>10:00 – 11:00</small>
                    </div>
                  </div>
                  <div className="macbook-calendar-event-2639">
                    <span></span>
                    <div>
                      <strong>Lunch</strong>
                      <small>12:30 – 13:30</small>
                    </div>
                  </div>
                  <div className="macbook-calendar-event-2639">
                    <span></span>
                    <div>
                      <strong>Product sync</strong>
                      <small>15:00 – 16:00</small>
                    </div>
                  </div>
                </div>
                <div className="macbook-music-2639 macbook-glass-2639">
                  <div className="macbook-music-cover-2639">
                    <i className="ri-music-2-fill"></i>
                  </div>
                  <div className="macbook-music-info-2639">
                    <strong>Midnight</strong>
                    <span>Tame Impala</span>
                  </div>
                  <i className="ri-spotify-fill macbook-spotify-2639"></i>
                  <div className="macbook-music-controls-2639">
                    <i className="ri-skip-back-fill"></i>
                    <i className="ri-pause-fill"></i>
                    <i className="ri-skip-forward-fill"></i>
                  </div>
                </div>
                <div className="macbook-notes-2639 macbook-glass-2639">
                  <div className="macbook-notes-header-2639">
                    <i className="ri-sticky-note-fill"></i>
                    <strong>Notes</strong>
                  </div>
                  <p>Finish design system</p>
                  <p>Review pull requests</p>
                  <p>Plan next sprint</p>
                  <span>09:15</span>
                </div>
                <div className="macbook-window-2639">
                  <div className="macbook-window-toolbar-2639">
                    <div className="macbook-window-dots-2639">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="macbook-window-title-2639">
                      <i className="ri-folder-3-fill"></i>
                      Projects
                    </div>
                    <div className="macbook-window-actions-2639">
                      <i className="ri-search-line"></i>
                      <i className="ri-more-2-fill"></i>
                    </div>
                  </div>
                  <div className="macbook-window-body-2639">
                    <div className="macbook-sidebar-2639">
                      <span className="active">
                        <i className="ri-home-5-fill"></i> Home
                      </span>
                      <span>
                        <i className="ri-folder-fill"></i> Projects
                      </span>
                      <span>
                        <i className="ri-download-2-fill"></i> Downloads
                      </span>
                      <span>
                        <i className="ri-cloud-fill"></i> iCloud Drive
                      </span>
                    </div>
                    <div className="macbook-files-2639">
                      <div className="macbook-file-2639">
                        <div className="macbook-file-icon-2639 purple">
                          <i className="ri-reactjs-line"></i>
                        </div>
                        <span>dashboard</span>
                      </div>
                      <div className="macbook-file-2639">
                        <div className="macbook-file-icon-2639 blue">
                          <i className="ri-code-s-slash-line"></i>
                        </div>
                        <span>components</span>
                      </div>
                      <div className="macbook-file-2639">
                        <div className="macbook-file-icon-2639 orange">
                          <i className="ri-folder-3-fill"></i>
                        </div>
                        <span>assets</span>
                      </div>
                      <div className="macbook-file-2639">
                        <div className="macbook-file-icon-2639 green">
                          <i className="ri-git-branch-fill"></i>
                        </div>
                        <span>github</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="macbook-dock-2639">
                  <div className="macbook-dock-item-2639 finder">
                    <i className="ri-mac-fill"></i>
                    <span>Finder</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-apps-2-fill"></i>
                    <span>Launchpad</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-safari-fill"></i>
                    <span>Safari</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-mail-fill"></i>
                    <span>Mail</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-message-3-fill"></i>
                    <span>Messages</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-calendar-fill"></i>
                    <span>Calendar</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-image-2-fill"></i>
                    <span>Photos</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-sticky-note-fill"></i>
                    <span>Notes</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-settings-4-fill"></i>
                    <span>Settings</span>
                  </div>
                  <div className="macbook-dock-divider-2639"></div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-vscode-fill"></i>
                    <span>VS Code</span>
                  </div>
                  <div className="macbook-dock-item-2639">
                    <i className="ri-terminal-box-fill"></i>
                    <span>Terminal</span>
                  </div>
                  <div className="macbook-dock-item-2639 trash">
                    <i className="ri-delete-bin-6-fill"></i>
                    <span>Trash</span>
                  </div>
                </div>
              </div>
              <div className="macbook-reflection-2639"></div>
            </div>
          </div>
          <div className="macbook-base-2639">
            <div className="macbook-hinge-2639"></div>
            <div className="macbook-notch-2639"></div>
          </div>
          <div className="macbook-shadow-2639"></div>
        </div>
      </div>
    ),
    html: `<div class="macbook-ui-2639">
  <div class="macbook-shell-2639">
    <div class="macbook-display-2639">
      <div class="macbook-camera-2639"></div>
      <div class="macbook-screen-2639">
        <div class="macbook-wallpaper-2639">
          <div class="macbook-aurora-2639 macbook-aurora-one-2639"></div>
          <div class="macbook-aurora-2639 macbook-aurora-two-2639"></div>
          <div class="macbook-aurora-2639 macbook-aurora-three-2639"></div>
        </div>
        <div class="macbook-menubar-2639">
          <div class="macbook-menu-left-2639">
            <i class="ri-apple-fill"></i>
            <span>Finder</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Go</span>
            <span>Window</span>
            <span>Help</span>
          </div>
          <div class="macbook-menu-right-2639">
            <i class="ri-wifi-fill"></i>
            <i class="ri-bluetooth-fill"></i>
            <i class="ri-search-line"></i>
            <i class="ri-sun-line"></i>
            <span>Tue Sep 8</span>
            <span>9:41 AM</span>
          </div>
        </div>
        <div class="macbook-desktop-content-2639">
          <div class="macbook-widget-weather-2639 macbook-glass-2639">
            <div class="macbook-widget-label-2639">AMSTERDAM</div>
            <div class="macbook-weather-main-2639">
              <strong>21°</strong>
              <i class="ri-sun-fill"></i>
            </div>
            <div class="macbook-weather-text-2639">Mostly sunny</div>
            <div class="macbook-weather-footer-2639">
              <span>H 24°</span>
              <span>L 16°</span>
            </div>
          </div>
          <div class="macbook-calendar-2639 macbook-glass-2639">
            <div class="macbook-calendar-top-2639">
              <span>Tuesday</span>
              <strong>8</strong>
            </div>
            <div class="macbook-calendar-event-2639">
              <span></span>
              <div>
                <strong>Design meeting</strong>
                <small>10:00 – 11:00</small>
              </div>
            </div>
            <div class="macbook-calendar-event-2639">
              <span></span>
              <div>
                <strong>Lunch</strong>
                <small>12:30 – 13:30</small>
              </div>
            </div>
            <div class="macbook-calendar-event-2639">
              <span></span>
              <div>
                <strong>Product sync</strong>
                <small>15:00 – 16:00</small>
              </div>
            </div>
          </div>
          <div class="macbook-music-2639 macbook-glass-2639">
            <div class="macbook-music-cover-2639">
              <i class="ri-music-2-fill"></i>
            </div>
            <div class="macbook-music-info-2639">
              <strong>Midnight</strong>
              <span>Tame Impala</span>
            </div>
            <i class="ri-spotify-fill macbook-spotify-2639"></i>
            <div class="macbook-music-controls-2639">
              <i class="ri-skip-back-fill"></i>
              <i class="ri-pause-fill"></i>
              <i class="ri-skip-forward-fill"></i>
            </div>
          </div>
          <div class="macbook-notes-2639 macbook-glass-2639">
            <div class="macbook-notes-header-2639">
              <i class="ri-sticky-note-fill"></i>
              <strong>Notes</strong>
            </div>
            <p>Finish design system</p>
            <p>Review pull requests</p>
            <p>Plan next sprint</p>
            <span>09:15</span>
          </div>
          <div class="macbook-window-2639">
            <div class="macbook-window-toolbar-2639">
              <div class="macbook-window-dots-2639">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="macbook-window-title-2639">
                <i class="ri-folder-3-fill"></i>
                Projects
              </div>
              <div class="macbook-window-actions-2639">
                <i class="ri-search-line"></i>
                <i class="ri-more-2-fill"></i>
              </div>
            </div>
            <div class="macbook-window-body-2639">
              <div class="macbook-sidebar-2639">
                <span class="active"><i class="ri-home-5-fill"></i> Home</span>
                <span><i class="ri-folder-fill"></i> Projects</span>
                <span><i class="ri-download-2-fill"></i> Downloads</span>
                <span><i class="ri-cloud-fill"></i> iCloud Drive</span>
              </div>
              <div class="macbook-files-2639">
                <div class="macbook-file-2639">
                  <div class="macbook-file-icon-2639 purple"><i class="ri-reactjs-line"></i></div>
                  <span>dashboard</span>
                </div>
                <div class="macbook-file-2639">
                  <div class="macbook-file-icon-2639 blue"><i class="ri-code-s-slash-line"></i></div>
                  <span>components</span>
                </div>
                <div class="macbook-file-2639">
                  <div class="macbook-file-icon-2639 orange"><i class="ri-folder-3-fill"></i></div>
                  <span>assets</span>
                </div>
                <div class="macbook-file-2639">
                  <div class="macbook-file-icon-2639 green"><i class="ri-git-branch-fill"></i></div>
                  <span>github</span>
                </div>
              </div>
            </div>
          </div>
          <div class="macbook-dock-2639">
            <div class="macbook-dock-item-2639 finder"><i class="ri-mac-fill"></i><span>Finder</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-apps-2-fill"></i><span>Launchpad</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-safari-fill"></i><span>Safari</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-mail-fill"></i><span>Mail</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-message-3-fill"></i><span>Messages</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-calendar-fill"></i><span>Calendar</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-image-2-fill"></i><span>Photos</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-sticky-note-fill"></i><span>Notes</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-settings-4-fill"></i><span>Settings</span></div>
            <div class="macbook-dock-divider-2639"></div>
            <div class="macbook-dock-item-2639"><i class="ri-vscode-fill"></i><span>VS Code</span></div>
            <div class="macbook-dock-item-2639"><i class="ri-terminal-box-fill"></i><span>Terminal</span></div>
            <div class="macbook-dock-item-2639 trash"><i class="ri-delete-bin-6-fill"></i><span>Trash</span></div>
          </div>
        </div>
        <div class="macbook-reflection-2639"></div>
      </div>
    </div>
    <div class="macbook-base-2639">
      <div class="macbook-hinge-2639"></div>
      <div class="macbook-notch-2639"></div>
    </div>
    <div class="macbook-shadow-2639"></div>
  </div>
</div>`,
    css: `
.macbook-preview-2639 {
  width: 100%;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(circle at 50% 25%, rgba(99,102,241,0.18), transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 35%),
    #080b16;
}
.macbook-shell-2639 {
  width: min(900px, 94%);
  position: relative;
  transform: perspective(1400px) rotateX(1deg);
}
.macbook-display-2639 {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: 8px;
  border-radius: 22px 22px 10px 10px;
  background: linear-gradient(145deg,#d4d8df,#747985 38%,#20242d 72%,#c5cad3);
  box-shadow:
    0 28px 70px rgba(0,0,0,0.5),
    0 0 0 1px rgba(255,255,255,0.18),
    inset 0 1px 0 rgba(255,255,255,0.45);
}
.macbook-camera-2639 {
  position: absolute;
  top: 2px;
  left: 50%;
  width: 7px;
  height: 7px;
  z-index: 5;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #111827;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.12);
}
.macbook-screen-2639 {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 7px 7px;
  background: #020617;
}
.macbook-wallpaper-2639 {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(135deg,#090d1f 0%,#17104c 37%,#071633 72%,#020617 100%);
}
.macbook-aurora-2639 {
  position: absolute;
  border-radius: 50%;
  filter: blur(65px);
}
.macbook-aurora-one-2639 {
  width: 480px;
  height: 190px;
  top: 35px;
  left: 4%;
  background: rgba(88,80,255,0.42);
  transform: rotate(-18deg);
  animation: macbookAuroraOne2639 8s ease-in-out infinite;
}
.macbook-aurora-two-2639 {
  width: 520px;
  height: 210px;
  right: 2%;
  top: 90px;
  background: rgba(29,78,216,0.35);
  transform: rotate(22deg);
  animation: macbookAuroraTwo2639 9s ease-in-out infinite;
}
.macbook-aurora-three-2639 {
  width: 400px;
  height: 170px;
  left: 28%;
  bottom: 0;
  background: rgba(168,85,247,0.25);
  animation: macbookAuroraThree2639 7s ease-in-out infinite;
}
.macbook-menubar-2639 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
  color: rgba(255,255,255,0.92);
  font-size: 8px;
  background: rgba(10,12,25,0.34);
  backdrop-filter: blur(16px);
}
.macbook-menu-left-2639,
.macbook-menu-right-2639 {
  display: flex;
  align-items: center;
  gap: 12px;
}
.macbook-menu-left-2639 i {
  font-size: 11px;
}
.macbook-menu-right-2639 {
  gap: 8px;
  color: rgba(255,255,255,0.8);
}
.macbook-menu-right-2639 i {
  font-size: 10px;
}
.macbook-desktop-content-2639 {
  position: absolute;
  inset: 28px 0 0;
}
.macbook-glass-2639 {
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(15,23,42,0.42);
  backdrop-filter: blur(20px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.05),
    0 15px 35px rgba(0,0,0,0.18);
}
.macbook-widget-weather-2639 {
  position: absolute;
  left: 22px;
  top: 22px;
  width: 145px;
  padding: 14px;
  border-radius: 17px;
  color: white;
}
.macbook-widget-label-2639 {
  color: rgba(255,255,255,0.54);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.12em;
}
.macbook-weather-main-2639 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
}
.macbook-weather-main-2639 strong {
  font-size: 31px;
  font-weight: 300;
}
.macbook-weather-main-2639 i {
  font-size: 22px;
  color: #facc15;
}
.macbook-weather-text-2639 {
  margin-top: 2px;
  color: rgba(255,255,255,0.72);
  font-size: 9px;
}
.macbook-weather-footer-2639 {
  display: flex;
  gap: 15px;
  margin-top: 13px;
  padding-top: 9px;
  border-top: 1px solid rgba(255,255,255,0.09);
  color: rgba(255,255,255,0.46);
  font-size: 7px;
}
.macbook-calendar-2639 {
  position: absolute;
  right: 22px;
  top: 22px;
  width: 155px;
  padding: 14px;
  border-radius: 17px;
}
.macbook-calendar-top-2639 {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: rgba(255,255,255,0.68);
}
.macbook-calendar-top-2639 span {
  font-size: 9px;
}
.macbook-calendar-top-2639 strong {
  color: white;
  font-size: 25px;
  font-weight: 400;
}
.macbook-calendar-event-2639 {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 9px;
}
.macbook-calendar-event-2639 > span {
  width: 3px;
  min-width: 3px;
  height: 24px;
  margin-top: 1px;
  border-radius: 999px;
  background: #a78bfa;
}
.macbook-calendar-event-2639:nth-child(3) > span {
  background: #38bdf8;
}
.macbook-calendar-event-2639:nth-child(4) > span {
  background: #60a5fa;
}
.macbook-calendar-event-2639 div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.macbook-calendar-event-2639 strong {
  color: rgba(255,255,255,0.88);
  font-size: 8px;
}
.macbook-calendar-event-2639 small {
  color: rgba(255,255,255,0.43);
  font-size: 6px;
}
.macbook-music-2639 {
  position: absolute;
  right: 22px;
  top: 185px;
  width: 155px;
  padding: 11px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.macbook-music-cover-2639 {
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: linear-gradient(135deg,#8b5cf6,#2563eb);
  color: white;
  font-size: 16px;
}
.macbook-music-info-2639 {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.macbook-music-info-2639 strong {
  color: white;
  font-size: 8px;
}
.macbook-music-info-2639 span {
  color: rgba(255,255,255,0.43);
  font-size: 6px;
}
.macbook-spotify-2639 {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #22c55e;
  font-size: 11px;
}
.macbook-music-controls-2639 {
  position: absolute;
  left: 53px;
  bottom: 8px;
  display: flex;
  gap: 10px;
  color: rgba(255,255,255,0.65);
  font-size: 10px;
}
.macbook-music-controls-2639 i:nth-child(2) {
  color: white;
}
.macbook-notes-2639 {
  position: absolute;
  right: 22px;
  top: 294px;
  width: 155px;
  padding: 13px;
  border-radius: 17px;
}
.macbook-notes-header-2639 {
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  font-size: 8px;
}
.macbook-notes-header-2639 i {
  color: #fbbf24;
  font-size: 11px;
}
.macbook-notes-2639 p {
  margin: 7px 0 0;
  color: rgba(255,255,255,0.66);
  font-size: 7px;
}
.macbook-notes-2639 span {
  display: block;
  margin-top: 10px;
  color: rgba(255,255,255,0.32);
  font-size: 6px;
}
.macbook-window-2639 {
  position: absolute;
  left: 50%;
  top: 46px;
  width: 390px;
  height: 260px;
  transform: translateX(-50%);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 13px;
  background: rgba(245,247,250,0.92);
  box-shadow:
    0 25px 60px rgba(0,0,0,0.28),
    0 0 0 1px rgba(255,255,255,0.12);
  backdrop-filter: blur(24px);
}
.macbook-window-toolbar-2639 {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
  border-bottom: 1px solid rgba(15,23,42,0.08);
  background: rgba(255,255,255,0.7);
}
.macbook-window-dots-2639 {
  display: flex;
  gap: 5px;
}
.macbook-window-dots-2639 span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d4d4d8;
}
.macbook-window-dots-2639 span:first-child {
  background: #f87171;
}
.macbook-window-dots-2639 span:nth-child(2) {
  background: #facc15;
}
.macbook-window-dots-2639 span:last-child {
  background: #4ade80;
}
.macbook-window-title-2639 {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #334155;
  font-size: 8px;
  font-weight: 700;
}
.macbook-window-title-2639 i {
  color: #60a5fa;
  font-size: 11px;
}
.macbook-window-actions-2639 {
  display: flex;
  gap: 8px;
  color: #64748b;
  font-size: 10px;
}
.macbook-window-body-2639 {
  height: calc(100% - 34px);
  display: flex;
}
.macbook-sidebar-2639 {
  width: 105px;
  padding: 12px 7px;
  box-sizing: border-box;
  background: rgba(226,232,240,0.62);
  border-right: 1px solid rgba(15,23,42,0.07);
}
.macbook-sidebar-2639 span {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 7px;
  margin-bottom: 3px;
  border-radius: 6px;
  color: #64748b;
  font-size: 7px;
}
.macbook-sidebar-2639 span.active {
  background: rgba(255,255,255,0.8);
  color: #334155;
  box-shadow: 0 2px 8px rgba(15,23,42,0.05);
}
.macbook-sidebar-2639 i {
  font-size: 9px;
}
.macbook-files-2639 {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-content: start;
  gap: 17px;
  padding: 18px;
}
.macbook-file-2639 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.macbook-file-2639 > span {
  color: #475569;
  font-size: 6px;
}
.macbook-file-icon-2639 {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  color: white;
  font-size: 18px;
  box-shadow: 0 8px 18px rgba(15,23,42,0.1);
}
.macbook-file-icon-2639.purple {
  background: linear-gradient(135deg,#8b5cf6,#6366f1);
}
.macbook-file-icon-2639.blue {
  background: linear-gradient(135deg,#38bdf8,#2563eb);
}
.macbook-file-icon-2639.orange {
  background: linear-gradient(135deg,#fb923c,#f97316);
}
.macbook-file-icon-2639.green {
  background: linear-gradient(135deg,#34d399,#059669);
}
.macbook-dock-2639 {
  position: absolute;
  left: 50%;
  bottom: 11px;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  gap: 7px;
  padding: 7px 9px;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: rgba(20,24,39,0.48);
  backdrop-filter: blur(22px);
  box-shadow:
    0 15px 35px rgba(0,0,0,0.24),
    inset 0 1px 0 rgba(255,255,255,0.08);
}
.macbook-dock-item-2639 {
  position: relative;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  transition: transform 0.25s ease;
}
.macbook-dock-item-2639:hover {
  transform: translateY(-10px) scale(1.25);
}
.macbook-dock-item-2639::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 3px;
  height: 3px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgba(255,255,255,0.55);
  opacity: 0;
}
.macbook-dock-item-2639.finder::after,
.macbook-dock-item-2639:nth-child(3)::after,
.macbook-dock-item-2639:nth-child(5)::after,
.macbook-dock-item-2639:nth-child(11)::after {
  opacity: 1;
}
.macbook-dock-item-2639:nth-child(1) {
  color: #60a5fa;
}
.macbook-dock-item-2639:nth-child(2) {
  color: #c4b5fd;
}
.macbook-dock-item-2639:nth-child(3) {
  color: #38bdf8;
}
.macbook-dock-item-2639:nth-child(4) {
  color: #93c5fd;
}
.macbook-dock-item-2639:nth-child(5) {
  color: #4ade80;
}
.macbook-dock-item-2639:nth-child(6) {
  color: #fb7185;
}
.macbook-dock-item-2639:nth-child(7) {
  color: #facc15;
}
.macbook-dock-item-2639:nth-child(8) {
  color: #fbbf24;
}
.macbook-dock-item-2639:nth-child(9) {
  color: #d4d4d8;
}
.macbook-dock-item-2639:nth-child(11) {
  color: #93c5fd;
}
.macbook-dock-item-2639:nth-child(12) {
  color: #a1a1aa;
}
.macbook-dock-item-2639.trash {
  color: #d4d4d8;
}
.macbook-dock-item-2639 span {
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 4px 6px;
  border-radius: 5px;
  background: rgba(10,10,15,0.9);
  color: white;
  font-size: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.macbook-dock-item-2639:hover span {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.macbook-dock-divider-2639 {
  width: 1px;
  height: 26px;
  margin: 0 2px;
  background: rgba(255,255,255,0.15);
}
.macbook-reflection-2639 {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  background: linear-gradient(120deg,rgba(255,255,255,0.08),transparent 26%,transparent 70%,rgba(255,255,255,0.03));
}
.macbook-base-2639 {
  width: 103%;
  height: 18px;
  position: relative;
  left: -1.5%;
  border-radius: 0 0 28px 28px;
  background: linear-gradient(180deg,#aeb4bf,#686e79 48%,#3b4049);
  box-shadow:
    0 10px 30px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.5);
}
.macbook-hinge-2639 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 150px;
  height: 5px;
  transform: translateX(-50%);
  border-radius: 0 0 10px 10px;
  background: rgba(30,35,45,0.45);
}
.macbook-notch-2639 {
  position: absolute;
  left: 50%;
  top: -1px;
  width: 120px;
  height: 5px;
  transform: translateX(-50%);
  border-radius: 0 0 12px 12px;
  background: rgba(20,24,32,0.35);
}
.macbook-shadow-2639 {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: -26px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0,0,0,0.38);
  filter: blur(18px);
  z-index: -1;
}
@keyframes macbookAuroraOne2639 {
  0%,100% {
    transform: translate(0,0) rotate(-18deg) scale(1);
  }
  50% {
    transform: translate(35px,14px) rotate(-12deg) scale(1.08);
  }
}
@keyframes macbookAuroraTwo2639 {
  0%,100% {
    transform: translate(0,0) rotate(22deg) scale(1);
  }
  50% {
    transform: translate(-28px,-16px) rotate(16deg) scale(1.06);
  }
}
@keyframes macbookAuroraThree2639 {
  0%,100% {
    transform: translateY(0) scale(0.92);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-14px) scale(1.1);
    opacity: 0.95;
  }
}
@media (max-width: 900px) {
  .macbook-shell-2639 {
    transform: scale(0.86);
  }
}
@media (max-width: 650px) {
  .macbook-shell-2639 {
    transform: scale(0.68);
  }
  .macbook-preview-2639 {
    min-height: 480px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .macbook-shell-2639,
  .macbook-aurora-one-2639,
  .macbook-aurora-two-2639,
  .macbook-aurora-three-2639 {
    animation: none;
  }
  .macbook-dock-item-2639 {
    transition: none;
  }
}
`,
  },
  {
    id: 2640,
    name: "macOS Glass Dock",
    preview: (
      <div className="dock-preview-2640">
        <div className="macos-dock-2640">
          <div className="dock-item-2640 active">
            <i className="ri-mac-fill"></i>
            <span>Finder</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-apps-2-fill"></i>
            <span>Launchpad</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-safari-fill"></i>
            <span>Safari</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-mail-fill"></i>
            <span>Mail</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-message-3-fill"></i>
            <span>Messages</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-calendar-fill"></i>
            <span>Calendar</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-image-2-fill"></i>
            <span>Photos</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-sticky-note-fill"></i>
            <span>Notes</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-music-2-fill"></i>
            <span>Music</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-settings-4-fill"></i>
            <span>Settings</span>
          </div>
          <div className="dock-divider-2640"></div>
          <div className="dock-item-2640">
            <i className="ri-code-box-fill"></i>
            <span>VS Code</span>
          </div>
          <div className="dock-item-2640">
            <i className="ri-terminal-box-fill"></i>
            <span>Terminal</span>
          </div>
          <div className="dock-item-2640 trash">
            <i className="ri-delete-bin-6-fill"></i>
            <span>Trash</span>
          </div>
        </div>
      </div>
    ),
    html: `<div class="dock-ui-2640">
  <div class="macos-dock-2640">
    <div class="dock-item-2640 active">
      <i class="ri-mac-fill"></i>
      <span>Finder</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-apps-2-fill"></i>
      <span>Launchpad</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-safari-fill"></i>
      <span>Safari</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-mail-fill"></i>
      <span>Mail</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-message-3-fill"></i>
      <span>Messages</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-calendar-fill"></i>
      <span>Calendar</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-image-2-fill"></i>
      <span>Photos</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-sticky-note-fill"></i>
      <span>Notes</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-music-2-fill"></i>
      <span>Music</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-settings-4-fill"></i>
      <span>Settings</span>
    </div>
    <div class="dock-divider-2640"></div>
    <div class="dock-item-2640">
      <i class="ri-code-box-fill"></i>
      <span>VS Code</span>
    </div>
    <div class="dock-item-2640">
      <i class="ri-terminal-box-fill"></i>
      <span>Terminal</span>
    </div>
    <div class="dock-item-2640 trash">
      <i class="ri-delete-bin-6-fill"></i>
      <span>Trash</span>
    </div>
  </div>
</div>`,
    css: `
.dock-preview-2640 {
  width: 100%;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(99,102,241,0.12), transparent 35%),
    linear-gradient(145deg, #09090b, #111827 55%, #030712);
}
.macos-dock-2640 {
  display: flex;
  align-items: flex-end;
  gap: 7px;
  padding: 9px 10px 11px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 22px;
  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,0.14),
      rgba(255,255,255,0.06)
    ),
    rgba(20,24,33,0.62);
  box-shadow:
    0 25px 55px rgba(0,0,0,0.4),
    0 5px 15px rgba(0,0,0,0.18),
    inset 0 1px 0 rgba(255,255,255,0.1),
    inset 0 -1px 0 rgba(0,0,0,0.2);
  backdrop-filter: blur(28px) saturate(140%);
  -webkit-backdrop-filter: blur(28px) saturate(140%);
}
.dock-item-2640 {
  width: 48px;
  height: 48px;
  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  color: #fff;
  font-size: 27px;
  cursor: pointer;
  transform-origin: bottom center;
  transition:
    transform 0.24s cubic-bezier(0.22,1,0.36,1),
    filter 0.24s ease,
    background 0.2s ease;
}
.dock-item-2640:hover {
  transform: translateY(-13px) scale(1.28);
  background: rgba(255,255,255,0.08);
  filter: brightness(1.08);
}
.dock-item-2640:hover + .dock-item-2640 {
  transform: translateY(-6px) scale(1.08);
}
.dock-item-2640:has(+ .dock-item-2640:hover) {
  transform: translateY(-6px) scale(1.08);
}
.dock-item-2640 span {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 15px);
  transform: translateX(-50%) translateY(5px);
  padding: 5px 8px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px;
  background: rgba(8,10,16,0.92);
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  backdrop-filter: blur(14px);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.dock-item-2640 span::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 7px;
  height: 7px;
  transform: translateX(-50%) rotate(45deg);
  background: rgba(8,10,16,0.92);
  border-right: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.dock-item-2640:hover span {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.dock-item-2640:nth-child(1) {
  color: #60a5fa;
}
.dock-item-2640:nth-child(2) {
  color: #c4b5fd;
}
.dock-item-2640:nth-child(3) {
  color: #38bdf8;
}
.dock-item-2640:nth-child(4) {
  color: #93c5fd;
}
.dock-item-2640:nth-child(5) {
  color: #4ade80;
}
.dock-item-2640:nth-child(6) {
  color: #fb7185;
}
.dock-item-2640:nth-child(7) {
  color: #fbbf24;
}
.dock-item-2640:nth-child(8) {
  color: #fde68a;
}
.dock-item-2640:nth-child(9) {
  color: #a78bfa;
}
.dock-item-2640:nth-child(10) {
  color: #d4d4d8;
}
.dock-item-2640:nth-child(12) {
  color: #60a5fa;
}
.dock-item-2640:nth-child(13) {
  color: #a1a1aa;
}
.dock-item-2640.trash {
  color: #d4d4d8;
}
.dock-item-2640.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 4px;
  height: 4px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
}
.dock-divider-2640 {
  width: 1px;
  height: 42px;
  margin: 0 2px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(255,255,255,0.2) 20%,
    rgba(255,255,255,0.2) 80%,
    transparent
  );
}
@media (max-width: 800px) {
  .macos-dock-2640 {
    gap: 5px;
    padding: 8px;
    transform: scale(0.88);
  }
}
@media (max-width: 600px) {
  .macos-dock-2640 {
    gap: 3px;
    transform: scale(0.7);
  }
}
@media (prefers-reduced-motion: reduce) {
  .dock-item-2640 {
    transition: none;
  }
}
`,
  },
];
